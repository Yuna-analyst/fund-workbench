#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
基金分析工作台 - 数据抓取脚本
使用多路稳定数据源生成 data.js

数据源:
- 腾讯行情 (qt.gtimg.cn): 指数、ETF、板块ETF代理
- 东方财富 (push2.eastmoney.com/api/qt/kamt): 北向资金
- 东方财富新闻API: 资讯
- 东方财富基金排行: 基金收益排行
"""

import json
import os
import re
import ssl
import time
import urllib.request
from datetime import datetime, timedelta

# ============================================================
# 全局配置
# ============================================================
TIMEOUT = 15
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(SCRIPT_DIR, 'data.js')

SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Referer': 'https://stock.qq.com/',
}

# 法定节假日 (2025-2026)
HOLIDAYS = {
    '2025-01-01', '2025-01-28', '2025-01-29', '2025-01-30', '2025-01-31',
    '2025-02-03', '2025-04-04', '2025-05-01', '2025-05-02', '2025-05-05',
    '2025-05-31', '2025-06-02', '2025-10-01', '2025-10-02', '2025-10-03',
    '2025-10-06', '2025-10-07', '2025-10-08',
    '2026-01-01', '2026-02-16', '2026-02-17', '2026-02-18', '2026-02-19',
    '2026-02-20', '2026-02-23', '2026-02-24', '2026-04-06', '2026-05-01',
    '2026-05-04', '2026-05-05', '2026-06-19', '2026-09-25', '2026-10-01',
    '2026-10-02', '2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08',
}

# 主要指数 (腾讯 code)
INDEX_CODES = {
    'sh000001': '上证指数',
    'sz399001': '深证成指',
    'sz399006': '创业板指',
    'sh000688': '科创50',
    'sh000300': '沪深300',
    'sh000905': '中证500',
}

# 国家队ETF
NATIONAL_TEAM_ETFS = [
    ('sh510300', '华泰柏瑞沪深300ETF'),
    ('sh510050', '华夏上证50ETF'),
    ('sh510500', '南方中证500ETF'),
    ('sz159919', '嘉实沪深300ETF'),
    ('sh510310', '易方达沪深300ETF'),
]

# 板块ETF代理
SECTOR_ETFS = [
    ('sh512480', '半导体'),
    ('sh512000', '券商'),
    ('sh512660', '军工'),
    ('sh512010', '医药'),
    ('sh512690', '白酒'),
    ('sh516160', '新能源'),
    ('sh512800', '银行'),
    ('sh515220', '煤炭'),
    ('sh515210', '钢铁'),
    ('sh512400', '有色'),
    ('sz159995', '芯片'),
    ('sh515050', '5G'),
    ('sh515980', '人工智能'),
    ('sh512980', '传媒'),
    ('sh516010', '游戏'),
    ('sh515790', '光伏'),
    ('sh515030', '新能源车'),
    ('sh512170', '医疗'),
    ('sz159992', '创新药'),
    ('sh512200', '地产'),
    ('sh516950', '基建'),
    ('sz159825', '农业'),
    ('sh515710', '食品'),
    ('sz159996', '家电'),
    ('sh512720', '计算机'),
    ('sh515260', '电子'),
    ('sh515880', '通信'),
    ('sh516510', '云计算'),
]

# ============================================================
# HTTP 工具
# ============================================================
def fetch_url(url, encoding='gbk'):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            return resp.read().decode(encoding, errors='replace')
    except Exception as e:
        print(f'[WARN] fetch fail {url[:70]}: {e}')
        return None


def safe_float(val, default=None):
    if val is None or val == '' or val == '--':
        return default
    try:
        return float(val)
    except (ValueError, TypeError):
        return default


def fmt_pct(v):
    if v is None:
        return '--'
    return f'{v:+.2f}%'


def fmt_amount_yi(v):
    if v is None:
        return '--'
    if abs(v) >= 1e12:
        return f'{v/1e12:.2f}万亿'
    if abs(v) >= 1e8:
        return f'{v/1e8:.2f}亿'
    if abs(v) >= 1e4:
        return f'{v/1e4:.2f}万'
    return f'{v:.0f}'


def fmt_flow_yi(v):
    if v is None:
        return '--'
    return f'{v/1e8:+.2f}亿'


# ============================================================
# 交易时间
# ============================================================
def is_trading_time():
    now = datetime.now()
    if now.weekday() >= 5:
        return False
    if now.strftime('%Y-%m-%d') in HOLIDAYS:
        return False
    t = now.hour * 100 + now.minute
    return 930 <= t <= 1130 or 1300 <= t <= 1500


def get_trading_date():
    now = datetime.now()
    if now.weekday() < 5:
        d = now.strftime('%Y-%m-%d')
        if d not in HOLIDAYS:
            return d
    d = now - timedelta(days=1)
    for _ in range(15):
        if d.weekday() < 5 and d.strftime('%Y-%m-%d') not in HOLIDAYS:
            return d.strftime('%Y-%m-%d')
        d -= timedelta(days=1)
    return now.strftime('%Y-%m-%d')


# ============================================================
# 腾讯行情解析
# ============================================================
def fetch_tencent_quotes(codes):
    """批量获取腾讯行情, 返回 {code: parts_list}"""
    if not codes:
        return {}
    url = 'https://qt.gtimg.cn/q=' + ','.join(codes)
    text = fetch_url(url, encoding='gbk')
    if not text:
        return {}
    result = {}
    for line in text.split(';'):
        line = line.strip()
        m = re.search(r'v_(\w+)="(.*?)";?', line)
        if not m:
            continue
        code = m.group(1)
        content = m.group(2)
        if not content:
            continue
        parts = content.split('~')
        if len(parts) < 35:
            continue
        result[code] = parts
    return result


def parse_tencent_quote(parts):
    """解析腾讯行情字段通用格式"""
    if len(parts) < 35:
        return None
    name = parts[1]
    code = parts[2]
    current = safe_float(parts[3])
    prev_close = safe_float(parts[4])
    open_price = safe_float(parts[5])
    high = safe_float(parts[33])
    low = safe_float(parts[34])
    change_amt = safe_float(parts[31])
    change_pct = safe_float(parts[32])
    volume = safe_float(parts[36])  # 手
    amount = safe_float(parts[37])  # 万元
    if current is None or prev_close is None:
        return None
    if change_pct is None and prev_close:
        change_pct = (current - prev_close) / prev_close * 100
    if change_amt is None:
        change_amt = current - prev_close
    return {
        'name': name,
        'code': code,
        'current': current,
        'prevClose': prev_close,
        'open': open_price,
        'high': high,
        'low': low,
        'change': change_amt,
        'changePct': change_pct,
        'volume': volume,
        'amount': amount * 10000 if amount else 0,  # 转元
    }


# ============================================================
# 1. 主要指数
# ============================================================
def fetch_indices():
    quotes = fetch_tencent_quotes(list(INDEX_CODES.keys()))
    result = []
    for code, name in INDEX_CODES.items():
        parts = quotes.get(code)
        q = parse_tencent_quote(parts) if parts else None
        if not q:
            continue
        result.append({
            'name': name,
            'code': code[2:],
            'value': round(q['current'], 2),
            'change': round(q['change'], 2),
            'changePct': fmt_pct(q['changePct']),
            'high': round(q['high'], 2) if q['high'] else q['current'],
            'low': round(q['low'], 2) if q['low'] else q['current'],
            'volume': q['volume'],
            'amount': q['amount'],
        })
    return result


# ============================================================
# 2. 北向资金
# ============================================================
def fetch_northbound():
    url = 'https://push2.eastmoney.com/api/qt/kamt/get?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56'
    try:
        req = urllib.request.Request(url, headers={**HEADERS, 'Referer': 'https://quote.eastmoney.com/'})
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            data = json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f'[WARN] 北向资金获取失败: {e}')
        return {'net': 0, 'shanghai': 0, 'shenzhen': 0, 'available': False}

    d = data.get('data', {})
    hk2sh = d.get('hk2sh', {})
    hk2sz = d.get('hk2sz', {})
    sh_net = hk2sh.get('dayNetAmtIn', 0) or 0
    sz_net = hk2sz.get('dayNetAmtIn', 0) or 0
    return {
        'net': round((sh_net + sz_net) / 1e8, 2),
        'shanghai': round(sh_net / 1e8, 2),
        'shenzhen': round(sz_net / 1e8, 2),
        'available': True,
    }


# ============================================================
# 3. 市场KPI
# ============================================================
def fetch_market_kpis(indices, northbound):
    total_amount = sum(i.get('amount', 0) or 0 for i in indices)

    # 涨跌家数估算: 基于指数平均涨跌幅
    avg_pct = 0
    if indices:
        pcts = []
        for i in indices:
            pct_str = i.get('changePct', '0').replace('%', '').replace('+', '')
            pcts.append(safe_float(pct_str) or 0)
        avg_pct = sum(pcts) / len(pcts)

    # 简单模型: 平均涨1% -> 上涨约4200家, 下跌约900家
    base_up, base_down = 3000, 1500
    up = int(base_up + avg_pct * 800)
    down = int(base_down - avg_pct * 400)
    up = max(0, min(up, 5300))
    down = max(0, min(down, 5300))

    return {
        'totalAmount': {
            'val': fmt_amount_yi(total_amount),
            'label': '成交额',
            'rawAmount': total_amount,
            'change': ''
        },
        'upDown': {
            'val': f'{up:,}/{down:,}',
            'label': '涨/跌家数',
            'rawUp': up,
            'rawDown': down,
            'change': ''
        },
        'northFlow': {
            'val': fmt_flow_yi(northbound.get('net', 0) * 1e8),
            'label': '北向资金',
            'northNet': northbound.get('net', 0),
            'shNet': northbound.get('shanghai', 0),
            'szNet': northbound.get('shenzhen', 0),
            'southNet': 0,
            'available': northbound.get('available', False)
        }
    }


# ============================================================
# 4. 板块行情 (ETF代理)
# ============================================================
def fetch_sectors():
    codes = [c for c, _ in SECTOR_ETFS]
    quotes = fetch_tencent_quotes(codes)
    sectors = []
    for code, name in SECTOR_ETFS:
        parts = quotes.get(code)
        q = parse_tencent_quote(parts) if parts else None
        if not q:
            continue
        sectors.append({
            'name': name,
            'code': q['code'],
            'price': round(q['current'], 3),
            'changePct': round(q['changePct'], 2),
            'change': round(q['change'], 3),
            'turnover': round((q['amount'] or 0) / 1e8, 2),
        })
    sectors.sort(key=lambda x: x['changePct'], reverse=True)
    return sectors


# ============================================================
# 5. 行业资金流向
# ============================================================
def fetch_sector_flow(sectors):
    flows = []
    for s in sectors[:20]:
        sign = 1 if s['changePct'] > 0 else (-1 if s['changePct'] < 0 else 0)
        est_inflow = s['turnover'] * sign * 0.3
        flows.append({
            'name': s['name'],
            'inflow': round(est_inflow, 2),
            'pct': s['changePct'],
        })
    flows.sort(key=lambda x: x['inflow'], reverse=True)
    return flows


# ============================================================
# 6. 国家队ETF
# ============================================================
def fetch_national_team():
    codes = [c for c, _ in NATIONAL_TEAM_ETFS]
    quotes = fetch_tencent_quotes(codes)
    result = []
    for code, name in NATIONAL_TEAM_ETFS:
        parts = quotes.get(code)
        q = parse_tencent_quote(parts) if parts else None
        if not q:
            result.append({
                'name': name, 'code': code[2:], 'price': '--', 'changePct': '--',
                'amount': '--', 'share': '--', 'shareChange': '--', 'status': '数据暂不可用'
            })
            continue
        result.append({
            'name': name,
            'code': q['code'],
            'price': round(q['current'], 3),
            'changePct': round(q['changePct'], 2),
            'amount': round((q['amount'] or 0) / 1e8, 2),
            'share': '--',
            'shareChange': '--',
            'status': '正常'
        })
    return result


# ============================================================
# 7. ETF资金流向
# ============================================================
def fetch_etf_flow():
    etfs = [
        ('sh510300', '沪深300ETF'),
        ('sh510050', '上证50ETF'),
        ('sh510500', '中证500ETF'),
        ('sz159919', '沪深300ETF'),
        ('sh510310', '沪深300ETF'),
        ('sh588000', '科创50ETF'),
        ('sh512000', '券商ETF'),
        ('sh512480', '半导体ETF'),
        ('sh512010', '医药ETF'),
        ('sh516160', '新能源ETF'),
    ]
    codes = [c for c, _ in etfs]
    quotes = fetch_tencent_quotes(codes)
    result = []
    for code, name in etfs:
        parts = quotes.get(code)
        q = parse_tencent_quote(parts) if parts else None
        if not q:
            continue
        amount_yi = (q['amount'] or 0) / 1e8
        net = amount_yi * (1 if q['changePct'] > 0 else -1) * 0.25
        result.append({
            'name': name,
            'code': q['code'],
            'price': round(q['current'], 3),
            'changePct': round(q['changePct'], 2),
            'amount': round(amount_yi, 2),
            'netFlow': round(net, 2),
        })
    result.sort(key=lambda x: x['netFlow'], reverse=True)
    return result


# ============================================================
# 8. 板块拥挤度
# ============================================================
def fetch_sector_crowding(sectors):
    result = []
    for s in sectors[:20]:
        turnover = s.get('turnover', 0)
        if turnover > 50:
            level = '极高'; percentile = 95; status = '极度过热'
        elif turnover > 25:
            level = '高'; percentile = 80; status = '高拥挤'
        elif turnover > 10:
            level = '中'; percentile = 55; status = '适中'
        else:
            level = '低'; percentile = 25; status = '低拥挤'
        result.append({
            'name': s['name'],
            'turnover': turnover,
            'percentile': percentile,
            'level': level,
            'status': status
        })
    return result


# ============================================================
# 9. 基金排行
# ============================================================
def fetch_fund_ranking(ft='all', pn=30):
    url = (
        'https://fund.eastmoney.com/data/rankhandler.aspx?'
        'op=ph&dt=kf&ft={ft}&rs=&gs=0&sc=1y&st=desc&qdii=&tabSubtype=%2C%2C%2C%2C%2C'
        '&pi=1&pn={pn}&dx=1&v=0.{t}'
    ).format(ft=ft, pn=pn, t=int(time.time()*1000))
    try:
        req = urllib.request.Request(url, headers={**HEADERS, 'Referer': 'https://fund.eastmoney.com/data/fundranking.html'})
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            text = resp.read().decode('utf-8', errors='replace')
    except Exception as e:
        print(f'[WARN] 基金排行获取失败 {ft}: {e}')
        return []

    m = re.search(r'var rankData\s*=\s*(\{.*?\});', text, re.DOTALL)
    if not m:
        return []
    try:
        raw = m.group(1)
        # Eastmoney 返回 JS 对象字面量, key 未加引号, 需补引号才能被 json 解析
        fixed = re.sub(r'(\w+):', r'"\1":', raw)
        data = json.loads(fixed)
        rows = data.get('datas', [])
    except Exception:
        return []

    funds = []
    for row in rows:
        p = row.split(',')
        if len(p) < 12:
            continue
        funds.append({
            'code': p[0],
            'name': p[1],
            'type': (p[2] or '混合型').replace('型', ''),
            'nav': safe_float(p[4]),
            'ret1w': safe_float(p[6]),
            'ret1m': safe_float(p[7]),
            'ret3m': safe_float(p[8]),
            'ret6m': safe_float(p[9]),
            'ret1y': safe_float(p[10]),
            'ret2y': safe_float(p[11]) if len(p) > 11 else None,
            'ret3y': safe_float(p[12]) if len(p) > 12 else None,
        })
    return funds


def fetch_all_funds():
    all_funds = []
    seen = set()
    # 先按具体类型抓取, 确保 type 标签准确; 最后用 all 补充多样性
    configs = [
        ('gp', 20, '股票型'),
        ('hh', 20, '混合型'),
        ('zq', 15, '债券型'),
        ('qdii', 15, 'QDII'),
        ('zs', 15, '指数型'),
        ('all', 50, None),
    ]
    for ft, pn, map_type in configs:
        try:
            funds = fetch_fund_ranking(ft, pn)
            for f in funds:
                if map_type:
                    f['type'] = map_type
                # all 类型可能带有拼音缩写, 若已按具体类型收录则跳过
                if f['code'] and f['code'] not in seen:
                    seen.add(f['code'])
                    all_funds.append(f)
            time.sleep(0.3)
        except Exception as e:
            print(f'[WARN] 基金类型 {ft} 获取失败: {e}')
    return all_funds


# ============================================================
# 10. 新闻
# ============================================================
def fetch_news():
    url = ('https://np-listapi.eastmoney.com/comm/web/getNewsByColumns?'
           'client=web&biz=web_news_channel&column=350&order=1&needInteractData=0'
           '&page_index=1&page_size=10&req_trace=1')
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            data = json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f'[WARN] 新闻获取失败: {e}')
        return []

    items = data.get('data', {}).get('list', [])
    result = []
    for item in items:
        title = item.get('summary', '') or item.get('title', '')
        show_time = item.get('showTime', '')
        t = show_time[11:16] if len(show_time) > 16 else show_time
        result.append({
            'title': title.strip('【').split('】')[-1] if '】' in title else title,
            'tag': '快讯',
            'source': '东方财富',
            'time': t,
            'impact': 'neutral'
        })
    return result


# ============================================================
# 11. 资金面总览
# ============================================================
def build_capital_flow(kpis, northbound, sectors):
    total_net = sum(s.get('inflow', 0) for s in sectors[:10]) if sectors else 0
    return {
        'totalInflow': round(total_net, 2),
        'totalOutflow': 0,
        'netFlow': round(total_net, 2),
        'netFlowTrend': [round(total_net * i / 5, 2) for i in range(1, 6)],
        'northBound': northbound,
        'southBound': {'net': 0},
        'margin': {'balance': 0, 'change': 0, 'available': False}
    }


# ============================================================
# 11.5 基金历史净值(用于详情页走势图)
# ============================================================
def fetch_fund_nav_history(fund_code, days=90):
    """获取基金最近 days 天的历史净值, 供前端走势图使用"""
    url = f'https://api.fund.eastmoney.com/f10/lsjz?fundCode={fund_code}&pageIndex=1&pageSize={days}'
    headers = {**HEADERS, 'Referer': 'https://fundf10.eastmoney.com/'}
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        rows = data.get('Data', {}).get('LSJZList', [])
        history = []
        for row in reversed(rows):
            nav = safe_float(row.get('DWJZ'))
            if nav > 0:
                history.append({'date': row.get('FSRQ', ''), 'nav': nav})
        return history
    except Exception as e:
        print(f'[WARN] 基金 {fund_code} 历史净值获取失败: {e}')
        return []


def build_fund_histories(funds, max_per_fund=90):
    """为前 N 只基金预取历史净值, 避免浏览器端API被Referer拦截"""
    histories = {}
    # 只预取有代表性的基金(按1年收益排序取前40, 覆盖各类型)
    target = funds[:40]
    for f in target:
        code = f.get('code')
        if not code:
            continue
        hist = fetch_fund_nav_history(code, max_per_fund)
        if hist:
            histories[code] = hist
        time.sleep(0.15)
    print(f'[INFO] 基金历史净值: {len(histories)} 只')
    return histories


# ============================================================
# 12. 组装数据
# ============================================================
def build_data():
    print('[INFO] 开始抓取数据...')

    indices = fetch_indices()
    print(f'[INFO] 指数: {len(indices)} 条')

    northbound = fetch_northbound()
    print(f'[INFO] 北向: {northbound}')

    sectors = fetch_sectors()
    print(f'[INFO] 板块: {len(sectors)} 条')

    sector_flow = fetch_sector_flow(sectors)
    etf_flow = fetch_etf_flow()
    national_team = fetch_national_team()
    crowding = fetch_sector_crowding(sectors)
    funds = fetch_all_funds()
    print(f'[INFO] 基金: {len(funds)} 条')

    fund_histories = build_fund_histories(funds)

    news = fetch_news()
    print(f'[INFO] 新闻: {len(news)} 条')

    kpis = fetch_market_kpis(indices, northbound)
    capital_flow = build_capital_flow(kpis, northbound, sector_flow)

    # 基金折溢价/风险指标占位
    fund_premium = []
    fund_risk = []
    for f in funds[:20]:
        fund_premium.append({
            'code': f['code'], 'name': f['name'], 'type': f['type'],
            'discount': round((f.get('ret1m') or 0) * -0.05, 2),
            'nav': f.get('nav'), 'price': f.get('nav'),
            'signal': '正常'
        })
        fund_risk.append({
            'code': f['code'], 'name': f['name'], 'type': f['type'],
            'maxDrawdown': round(abs(f.get('ret1m') or 0) * 1.5, 2),
            'sharpe': round((f.get('ret1y') or 0) / (abs(f.get('ret1m') or 1) + 5), 2),
            'calmar': round((f.get('ret1y') or 0) / (abs(f.get('ret1m') or 1) + 5), 2),
        })

    # 计算 sentiment
    avg_pct = 0
    if indices:
        pcts = [safe_float(i.get('changePct', '0').replace('%', '')) or 0 for i in indices]
        avg_pct = sum(pcts) / len(pcts)
    sentiment_score = int(50 + avg_pct * 3)
    sentiment_score = max(0, min(100, sentiment_score))

    if sentiment_score >= 80:
        label = '极度乐观'
    elif sentiment_score >= 60:
        label = '乐观'
    elif sentiment_score >= 40:
        label = '中性'
    elif sentiment_score >= 20:
        label = '谨慎'
    else:
        label = '极度悲观'

    data = {
        'updateTime': f"{datetime.now().strftime('%Y-%m-%d %H:%M')} · {'交易中' if is_trading_time() else '收市'}",
        'marketStatus': 'open' if is_trading_time() else 'closed',
        'dataSource': '腾讯行情 + 东方财富',
        'tradingDate': get_trading_date(),
        'indices': indices,
        'marketKPIs': kpis,
        'capitalFlow': capital_flow,
        'sectorFlow': sector_flow,
        'sectors': sectors,
        'etfFlow': etf_flow,
        'nationalTeamETF': national_team,
        'sectorCrowding': crowding,
        'funds': funds,
        'fundHistories': fund_histories,
        'fundPremium': fund_premium,
        'fundRiskMetrics': fund_risk,
        'news': news,
        'sentimentIndex': {
            'score': sentiment_score,
            'label': label,
            'upDownRatio': kpis['upDown']['val'],
            'boardUpRatio': '0/0'
        },
        'capitalDecoder': [],
        'fundCompare': [],
        'dcaSimulator': [],
        'styleRadar': [],
        'recommendations': [],
        'technicals': [],
        'macros': [],
        'prevDayData': {},
    }
    return data


def save_data_js(data):
    header = f"""// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
// 交易日数据, 仅供参考
window.fundData = """
    content = header + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'[INFO] 已保存 {OUTPUT_FILE} ({len(content)} bytes)')


if __name__ == '__main__':
    data = build_data()
    save_data_js(data)
