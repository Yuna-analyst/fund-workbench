#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
基金分析工作台 - 数据抓取脚本
从东方财富免费公开API抓取实时市场数据，生成 data.js 文件

数据源: 东方财富免费公开API
依赖: Python 3 标准库 (urllib, json, ssl, datetime, concurrent.futures)
"""

import json
import os
import re
import ssl
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor, as_completed

# ============================================================
# 全局配置
# ============================================================
TIMEOUT = 5  # 请求超时秒数
MAX_WORKERS = 10  # 并发线程数

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://quote.eastmoney.com/',
    'Accept': 'application/json, text/plain, */*',
}

SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE

# 脚本所在目录
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(SCRIPT_DIR, 'data.js')

# 中国A股法定节假日 (2025-2026)
HOLIDAYS = {
    # 2025
    '2025-01-01', '2025-01-28', '2025-01-29', '2025-01-30', '2025-01-31',
    '2025-02-03', '2025-04-04', '2025-05-01', '2025-05-02', '2025-05-05',
    '2025-05-31', '2025-06-02', '2025-10-01', '2025-10-02', '2025-10-03',
    '2025-10-06', '2025-10-07', '2025-10-08',
    # 2026 (预估，官方通常在前一年底公布)
    '2026-01-01', '2026-02-16', '2026-02-17', '2026-02-18', '2026-02-19',
    '2026-02-20', '2026-02-23', '2026-02-24', '2026-04-06', '2026-05-01',
    '2026-05-04', '2026-05-05', '2026-06-19', '2026-09-25', '2026-10-01',
    '2026-10-02', '2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08',
}

# 国家队ETF列表 (code, market_prefix)
NATIONAL_TEAM_ETFS = [
    ('510300', '1'),  # 华泰柏瑞沪深300ETF (沪市)
    ('510050', '1'),  # 华夏上证50ETF (沪市)
    ('510500', '1'),  # 南方中证500ETF (沪市)
    ('159919', '0'),  # 嘉实沪深300ETF (深市)
    ('510310', '1'),  # 易方达沪深300ETF (沪市)
]

# 默认基金代码列表 (从原始数据中提取)
DEFAULT_FUND_CODES = [
    '002891', '539002', '018147', '006373', '021842', '016701', '016702',
    '020712', '020713', '006426', '001668', '015202', '017653', '017654',
    '005246', '025464', '206008', '022510', '024478', '010899', '024479',
    '025505', '023407', '025506', '025492', '023408', '025493', '024662',
    '024725', '024663', '024726', '006482', '022744', '010629', '006483',
    '003401', '009465', '009466', '160644', '210014', '022568', '014336',
    '019869', '019989', '019990', '005358', '005359', '019115', '019116',
    '001252', '020064', '020065', '004260', '018463', '006235', '025884',
    '005164', '005165', '012182', '012183',
]


# ============================================================
# HTTP 请求辅助函数
# ============================================================
def fetch_url(url, encoding='utf-8'):
    """发起HTTP请求，返回响应文本。失败返回None。"""
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            return resp.read().decode(encoding, errors='replace')
    except Exception:
        return None


def fetch_json(url, encoding='utf-8'):
    """发起HTTP请求并解析JSON。失败返回None。"""
    text = fetch_url(url, encoding)
    if text is None:
        return None
    try:
        return json.loads(text)
    except (json.JSONDecodeError, ValueError):
        return None


def safe_float(val, default=None):
    """安全转换为float。"""
    if val is None or val == '' or val == '--':
        return default
    try:
        return float(val)
    except (ValueError, TypeError):
        return default


def format_amount(val):
    """格式化成交额: 亿元/万亿。"""
    v = safe_float(val)
    if v is None:
        return '--'
    if abs(v) >= 1e8:
        return f'{v / 1e8:.2f}亿'
    if abs(v) >= 1e4:
        return f'{v / 1e4:.2f}万'
    return f'{v:.2f}'


def format_flow(val):
    """格式化资金流向: 亿元。"""
    v = safe_float(val)
    if v is None:
        return '--'
    return f'{v / 1e8:.2f}亿'


# ============================================================
# 交易时间判断
# ============================================================
def is_trading_time():
    """判断当前是否为A股交易时间。"""
    now = datetime.now()
    # 周末
    if now.weekday() >= 5:
        return False
    # 法定节假日
    date_str = now.strftime('%Y-%m-%d')
    if date_str in HOLIDAYS:
        return False
    # 交易时段 9:30-11:30, 13:00-15:00
    t = now.hour * 100 + now.minute
    if 930 <= t <= 1130 or 1300 <= t <= 1500:
        return True
    return False


def get_trading_date():
    """获取最近交易日。"""
    now = datetime.now()
    # 如果是交易日且在15:00之前，今天是交易日
    if now.weekday() < 5:
        date_str = now.strftime('%Y-%m-%d')
        if date_str not in HOLIDAYS:
            if now.hour < 15:
                return date_str
            # 15:00后仍是交易日
            return date_str
    # 否则往前找最近交易日
    d = now - timedelta(days=1)
    for _ in range(15):
        if d.weekday() < 5 and d.strftime('%Y-%m-%d') not in HOLIDAYS:
            return d.strftime('%Y-%m-%d')
        d -= timedelta(days=1)
    return now.strftime('%Y-%m-%d')


def get_update_time_label():
    """生成更新时间标签。"""
    now = datetime.now()
    time_str = now.strftime('%Y-%m-%d %H:%M')
    if is_trading_time():
        return f'{time_str} · 交易中'
    return f'{time_str} · 收市'


# ============================================================
# 1. 主要指数
# ============================================================
def fetch_indices():
    """抓取主要指数数据。"""
    url = ('https://push2.eastmoney.com/api/qt/ulist.np/get?'
           'fields=f1,f2,f3,f4,f5,f6,f12,f13,f14&'
           'secids=1.000001,0.399001,0.399006,1.000688,1.000300,1.000905')
    data = fetch_json(url)
    if not data or data.get('rc') != 0 or not data.get('data'):
        print('[WARN] 指数数据获取失败')
        return []
    items = data['data'].get('diff', [])
    if not items:
        return []
    result = []
    for item in items:
        price = safe_float(item.get('f2'))
        change_pct = safe_float(item.get('f3'))
        change_amt = safe_float(item.get('f4'))
        name = item.get('f14', '--')
        code = item.get('f12', '')
        if price is None:
            continue
        sign = '+' if (change_pct or 0) >= 0 else ''
        result.append({
            'name': name,
            'code': code,
            'value': round(price, 2),
            'change': round(change_amt, 2) if change_amt is not None else '--',
            'changePct': f'{sign}{change_pct:.2f}%' if change_pct is not None else '--',
            'amount': safe_float(item.get('f6')),
        })
    return result


# ============================================================
# 2. 市场KPI
# ============================================================
def fetch_up_down_count():
    """统计全市场上涨/下跌家数。"""
    url = ('https://push2.eastmoney.com/api/qt/clist/get?'
           'pn=1&pz=5000&po=1&np=1&fltt=2&invt=2&'
           'fs=m:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23&fields=f2,f3,f12,f14')
    data = fetch_json(url)
    if not data or data.get('rc') != 0:
        return None
    items = data.get('data', {}).get('diff', [])
    if not items:
        return None
    up = 0
    down = 0
    flat = 0
    for item in items:
        pct = safe_float(item.get('f3'))
        if pct is None:
            continue
        if pct > 0:
            up += 1
        elif pct < 0:
            down += 1
        else:
            flat += 1
    return {'up': up, 'down': down, 'flat': flat}


def fetch_northbound():
    """抓取北向资金数据。"""
    url = ('https://push2.eastmoney.com/api/qt/kamt/get?'
           'fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56')
    data = fetch_json(url)
    if not data or data.get('rc') != 0:
        return {'available': False}
    s2n = data.get('data', {}).get('s2n', [])
    if not s2n:
        return {'available': False}
    # s2n 是按日期倒序的数组，取最新一条
    latest = s2n[-1] if isinstance(s2n[-1], str) else str(s2n[-1])
    parts = latest.split(',')
    if len(parts) < 5:
        return {'available': False}
    try:
        # f52=北向净买入, f53=沪股通, f54=深股通, f55=南向净买入
        north_net = safe_float(parts[1], 0) or 0
        sh_net = safe_float(parts[2], 0) or 0
        sz_net = safe_float(parts[3], 0) or 0
        south_net = safe_float(parts[4], 0) or 0
        # 转换为亿元 (原始单位为万元)
        north_net_yi = north_net / 1e4
        sh_net_yi = sh_net / 1e4
        sz_net_yi = sz_net / 1e4
        south_net_yi = south_net / 1e4
        return {
            'available': True,
            'northNet': round(north_net_yi, 2),
            'shNet': round(sh_net_yi, 2),
            'szNet': round(sz_net_yi, 2),
            'southNet': round(south_net_yi, 2),
        }
    except Exception:
        return {'available': False}


def fetch_market_kpis(indices, up_down, northbound):
    """组装市场KPI。"""
    # 成交额: 从指数数据汇总
    total_amount = 0
    has_amount = False
    for idx in indices:
        amt = idx.get('amount')
        if amt is not None:
            total_amount += amt
            has_amount = True
    if has_amount and total_amount > 0:
        amount_str = f'{total_amount / 1e8:.0f}亿'
    else:
        amount_str = '--'

    # 涨跌家数
    if up_down:
        up_down_str = f'{up_down["up"]:,}/{up_down["down"]:,}'
    else:
        up_down_str = '--'

    # 北向资金
    if northbound.get('available'):
        north_val = f'{"+" if northbound["northNet"] >= 0 else ""}{northbound["northNet"]:.2f}亿'
    else:
        north_val = '--'

    return {
        'totalAmount': {
            'val': amount_str,
            'label': '成交额',
            'rawAmount': total_amount if has_amount else None,
            'change': '',
        },
        'upDown': {
            'val': up_down_str,
            'label': '涨/跌家数',
            'rawUp': up_down['up'] if up_down else None,
            'rawDown': up_down['down'] if up_down else None,
            'change': '',
        },
        'northFlow': {
            'val': north_val,
            'label': '北向资金',
            'northNet': northbound.get('northNet', 0),
            'shNet': northbound.get('shNet', 0),
            'szNet': northbound.get('szNet', 0),
            'southNet': northbound.get('southNet', 0),
            'available': northbound.get('available', False),
        },
    }


# ============================================================
# 3. 行业资金流向 (sectorFlow)
# ============================================================
def fetch_sector_flow():
    """抓取行业资金流向。"""
    url = ('https://push2.eastmoney.com/api/qt/clist/get?'
           'fid=f62&po=1&pz=20&pn=1&np=1&fltt=2&invt=2&'
           'fs=m:90+t:2&fields=f12,f14,f62,f184,f3')
    data = fetch_json(url)
    if not data or data.get('rc') != 0:
        print('[WARN] 行业资金流向获取失败')
        return []
    items = data.get('data', {}).get('diff', [])
    if not items:
        return []
    result = []
    for item in items:
        inflow = safe_float(item.get('f62'))
        pct = safe_float(item.get('f184'))
        result.append({
            'name': item.get('f14', '--'),
            'code': item.get('f12', ''),
            'inflow': round(inflow / 1e8, 2) if inflow is not None else '--',
            'pct': round(pct, 2) if pct is not None else '--',
            'changePct': round(safe_float(item.get('f3'), 0), 2) if safe_float(item.get('f3')) is not None else '--',
        })
    return result


# ============================================================
# 4. 板块行情 (sectors)
# ============================================================
def fetch_sectors():
    """抓取行业和概念板块行情。"""
    sectors = []

    # 行业板块
    url_ind = ('https://push2.eastmoney.com/api/qt/clist/get?'
               'fid=f3&po=1&pz=50&pn=1&np=1&fltt=2&invt=2&'
               'fs=m:90+t:2&fields=f2,f3,f4,f8,f12,f14')
    data_ind = fetch_json(url_ind)
    if data_ind and data_ind.get('rc') == 0:
        items = data_ind.get('data', {}).get('diff', [])
        for item in items:
            change = safe_float(item.get('f3'))
            turnover = safe_float(item.get('f8'))
            sectors.append({
                'name': item.get('f14', '--'),
                'code': item.get('f12', ''),
                'change': round(change, 2) if change is not None else '--',
                'turnover': round(turnover, 2) if turnover is not None else '--',
                'type': 'industry',
                'pe': '--',
                'pePct': '--',
                'volume': '--',
                'hot': change is not None and change > 3,
            })

    # 概念板块
    url_con = ('https://push2.eastmoney.com/api/qt/clist/get?'
               'fid=f3&po=1&pz=50&pn=1&np=1&fltt=2&invt=2&'
               'fs=m:90+t:3&fields=f2,f3,f4,f8,f12,f14')
    data_con = fetch_json(url_con)
    if data_con and data_con.get('rc') == 0:
        items = data_con.get('data', {}).get('diff', [])
        for item in items:
            change = safe_float(item.get('f3'))
            turnover = safe_float(item.get('f8'))
            sectors.append({
                'name': item.get('f14', '--'),
                'code': item.get('f12', ''),
                'change': round(change, 2) if change is not None else '--',
                'turnover': round(turnover, 2) if turnover is not None else '--',
                'type': 'concept',
                'pe': '--',
                'pePct': '--',
                'volume': '--',
                'hot': change is not None and change > 3,
            })

    return sectors


# ============================================================
# 5. ETF资金流向 (etfFlow)
# ============================================================
def fetch_etf_flow():
    """抓取ETF资金流向。"""
    url = ('https://push2.eastmoney.com/api/qt/clist/get?'
           'fid=f62&po=1&pz=20&pn=1&np=1&fltt=2&invt=2&'
           'fs=b:MK0021,MK0022,MK0023,MK0024&fields=f12,f14,f2,f3,f6,f62,f184')
    data = fetch_json(url)
    if not data or data.get('rc') != 0:
        print('[WARN] ETF资金流向获取失败')
        return []
    items = data.get('data', {}).get('diff', [])
    if not items:
        return []
    result = []
    for item in items:
        flow = safe_float(item.get('f62'))
        result.append({
            'name': item.get('f14', '--'),
            'code': item.get('f12', ''),
            'flow': round(flow / 1e8, 2) if flow is not None else '--',
            'price': round(safe_float(item.get('f2'), 0), 3) if safe_float(item.get('f2')) is not None else '--',
            'changePct': round(safe_float(item.get('f3'), 0), 2) if safe_float(item.get('f3')) is not None else '--',
            'amount': safe_float(item.get('f6')),
            'inflowPct': round(safe_float(item.get('f184'), 0), 2) if safe_float(item.get('f184')) is not None else '--',
            'type': 'ETF',
        })
    return result


# ============================================================
# 6. 国家队ETF数据 (nationalTeamETF)
# ============================================================
def fetch_national_team_etf(code, market_prefix):
    """抓取单个国家队ETF数据。"""
    url = (f'https://push2.eastmoney.com/api/qt/stock/get?'
           f'secid={market_prefix}.{code}&fields=f12,f14,f2,f3,f6,f161,f84,f85')
    data = fetch_json(url)
    if not data or data.get('rc') != 0 or not data.get('data'):
        return None
    d = data['data']
    return {
        'name': d.get('f14', '--'),
        'code': d.get('f12', code),
        'price': round(safe_float(d.get('f2'), 0), 3) if safe_float(d.get('f2')) is not None else '--',
        'changePct': round(safe_float(d.get('f3'), 0), 2) if safe_float(d.get('f3')) is not None else '--',
        'amount': safe_float(d.get('f6')),
        'amountStr': format_amount(d.get('f6')),
        'totalShares': safe_float(d.get('f84')),
        'circShares': safe_float(d.get('f85')),
        'f161': safe_float(d.get('f161')),
    }


def fetch_all_national_team_etfs():
    """并发抓取所有国家队ETF。"""
    result = []
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {
            executor.submit(fetch_national_team_etf, code, prefix): (code, prefix)
            for code, prefix in NATIONAL_TEAM_ETFS
        }
        for code, prefix in NATIONAL_TEAM_ETFS:
            future = [f for f, (c, p) in futures.items() if c == code and p == prefix]
            if future:
                try:
                    item = future[0].result(timeout=TIMEOUT + 2)
                    if item:
                        result.append(item)
                except Exception:
                    result.append({
                        'name': '--',
                        'code': code,
                        'price': '--',
                        'changePct': '--',
                        'amount': None,
                        'amountStr': '--',
                        'available': False,
                    })
    return result


# ============================================================
# 7. 板块换手率历史数据 (sectorCrowding)
# ============================================================
def fetch_sector_kline(code):
    """抓取板块日K线数据（近5年）。"""
    url = (f'https://push2his.eastmoney.com/api/qt/stock/kline/get?'
           f'secid=90.{code}&fields1=f1,f2,f3,f4,f5,f6&'
           f'fields2=f51,f52,f53,f54,f55,f56,f57,f58&'
           f'klt=101&fqt=0&beg=20210101&end=20261231')
    data = fetch_json(url)
    if not data or data.get('rc') != 0 or not data.get('data'):
        return None
    klines = data['data'].get('klines', [])
    if not klines:
        return None
    # 解析K线: "日期,开盘,收盘,最高,最低,成交量,成交额,振幅"
    parsed = []
    for line in klines:
        parts = line.split(',')
        if len(parts) >= 7:
            parsed.append({
                'date': parts[0],
                'volume': safe_float(parts[5], 0),
                'amount': safe_float(parts[6], 0),
            })
    return parsed


def compute_crowding_percentile(klines):
    """计算最新成交量的5年历史分位。"""
    if not klines or len(klines) < 30:
        return None
    latest_vol = klines[-1]['volume']
    if latest_vol is None or latest_vol <= 0:
        return None
    # 取近5年(或全部)的成交量
    vols = [k['volume'] for k in klines if k['volume'] is not None and k['volume'] > 0]
    if len(vols) < 30:
        return None
    # 计算分位数
    below = sum(1 for v in vols if v <= latest_vol)
    percentile = round(below / len(vols) * 100, 1)
    return percentile


def fetch_sector_crowding(sectors):
    """抓取板块拥挤度数据。"""
    # 取行业板块前20个
    industry_sectors = [s for s in sectors if s.get('type') == 'industry'][:20]
    if not industry_sectors:
        return []
    result = []
    with ThreadPoolExecutor(max_workers=5) as executor:
        future_map = {}
        for sec in industry_sectors:
            code = sec.get('code', '')
            if code:
                future = executor.submit(fetch_sector_kline, code)
                future_map[future] = sec
        for future in future_map:
            sec = future_map[future]
            try:
                klines = future.result(timeout=TIMEOUT + 5)
                percentile = compute_crowding_percentile(klines) if klines else None
                if percentile is not None:
                    if percentile >= 80:
                        level = 'high'
                    elif percentile >= 50:
                        level = 'medium'
                    else:
                        level = 'low'
                    result.append({
                        'name': sec.get('name', '--'),
                        'code': sec.get('code', ''),
                        'turnover': sec.get('turnover', '--'),
                        'percentile': percentile,
                        'level': level,
                    })
                else:
                    result.append({
                        'name': sec.get('name', '--'),
                        'code': sec.get('code', ''),
                        'turnover': sec.get('turnover', '--'),
                        'percentile': '--',
                        'level': '--',
                    })
            except Exception:
                result.append({
                    'name': sec.get('name', '--'),
                    'code': sec.get('code', ''),
                    'turnover': sec.get('turnover', '--'),
                    'percentile': '--',
                    'level': '--',
                })
    return result


# ============================================================
# 8. 基金数据 (funds)
# ============================================================
def read_existing_fund_codes():
    """从现有 data.js 读取基金代码列表。"""
    # 优先读取 deploy/data.js
    for path in [OUTPUT_FILE, os.path.join(SCRIPT_DIR, '..', 'data_original.js')]:
        if os.path.exists(path):
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                # 提取 funds 数组中的 code
                match = re.search(r'"funds"\s*:\s*\[', content)
                if match:
                    start = match.end()
                    # 找到 funds 数组结束
                    depth = 1
                    end = start
                    while depth > 0 and end < len(content):
                        if content[end] == '[':
                            depth += 1
                        elif content[end] == ']':
                            depth -= 1
                        end += 1
                    funds_str = content[start:end - 1]
                    codes = re.findall(r'"code"\s*:\s*"(\d+)"', funds_str)
                    if codes:
                        # 去重保持顺序
                        seen = set()
                        unique = []
                        for c in codes:
                            if c not in seen:
                                seen.add(c)
                                unique.append(c)
                        return unique
            except Exception:
                continue
    return DEFAULT_FUND_CODES


def fetch_fund_ranking(ft='all', pn=100):
    """从东方财富基金排行接口获取基金数据（code/name/nav/returns 一应俱全）。
    
    ft: all=全部, hh=混合型, gp=股票型, zq=债券型, qdii=QDII, zs=指数型
    pn: 每页数量
    """
    url = (
        'https://fund.eastmoney.com/data/rankhandler.aspx?'
        'op=ph&dt=kf&ft={ft}&rs=&gs=0&sc=1y&st=desc&qdii=&tabSubtype=%2C%2C%2C%2C%2C'
        '&pi=1&pn={pn}&dx=1&v=0.{ts}'
    ).format(ft=ft, pn=pn, ts=int(time.time()))
    headers = dict(HEADERS)
    headers['Referer'] = 'https://fund.eastmoney.com/data/fundranking.html'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            js = resp.read().decode('utf-8', errors='replace')
    except Exception:
        return []
    # 解析 var rankData = {datas:[...]}（JS对象字面量，非JSON，需提取数组）
    m = re.search(r'var rankData\s*=\s*\{[^[]*datas\s*:\s*(\[.*?\])', js, re.DOTALL)
    if not m:
        return []
    try:
        rows = json.loads(m.group(1))
    except Exception:
        return []
    funds = []
    type_map = {
        'all': None, 'hh': '混合型', 'gp': '股票型', 'zq': '债券型',
        'qdii': 'QDII', 'zs': '指数型'
    }
    mapped_type = type_map.get(ft)
    for row in rows:
        p = row.split(',')
        if len(p) < 12:
            continue
        code = p[0].strip()
        name = p[1].strip()
        if not code or not name:
            continue
        # 字段位置: 0=code,1=name,2=pinyin,3=date,4=nav,5=accumNav,6=daily,7=1w,8=1m,9=3m,10=6m,11=1y,...
        # 对 all 榜单做简单类型推断
        inferred_type = mapped_type
        if not inferred_type:
            n = name
            if 'QDII' in n or '美元' in n or '全球' in n or '海外' in n:
                inferred_type = 'QDII'
            elif '债' in n or '纯债' in n or '利' in n:
                inferred_type = '债券型'
            elif 'ETF' in n or '联接' in n or '指数' in n:
                inferred_type = '指数型'
            elif '股票' in n:
                inferred_type = '股票型'
            else:
                inferred_type = '混合型'
        fund = {
            'code': code,
            'name': name,
            'type': inferred_type,
            'nav': safe_float(p[4]) or '--',
            'ret1w': safe_float(p[7]) if len(p) > 7 else '--',
            'ret1m': safe_float(p[8]) if len(p) > 8 else '--',
            'ret3m': safe_float(p[9]) if len(p) > 9 else '--',
            'ret6m': safe_float(p[10]) if len(p) > 10 else '--',
            'ret1y': safe_float(p[11]) if len(p) > 11 else '--',
            'ret2y': safe_float(p[12]) if len(p) > 12 else '--',
            'ret3y': safe_float(p[13]) if len(p) > 13 else '--',
            '_source': 'ranking',
        }
        funds.append(fund)
    return funds


def fetch_all_fund_rankings():
    """获取各类型基金排行并合并去重。"""
    all_funds = []
    seen = set()
    configs = [
        ('all', 100),
        ('hh', 30),
        ('gp', 30),
        ('zq', 20),
        ('qdii', 15),
        ('zs', 15),
    ]
    for ft, pn in configs:
        try:
            part = fetch_fund_ranking(ft, pn)
            for f in part:
                if f['code'] not in seen:
                    seen.add(f['code'])
                    all_funds.append(f)
        except Exception:
            continue
    return all_funds



def fetch_fund_valuation(code):
    """抓取基金实时估值 (fundgz API)。"""
    ts = int(time.time() * 1000)
    url = f'http://fundgz.1234567.com.cn/js/{code}.js?rt={ts}'
    text = fetch_url(url)
    if not text:
        return None
    # 解析 jsonpgz({...}) 格式
    match = re.search(r'jsonpgz\((.*)\)', text)
    if not match:
        return None
    try:
        return json.loads(match.group(1))
    except (json.JSONDecodeError, ValueError):
        return None


def fetch_fund_nav_history(code):
    """抓取基金净值历史 (lsjz API)。"""
    url = (f'https://api.fund.eastmoney.com/f10/lsjz?'
           f'fundCode={code}&pageIndex=1&pageSize=800')
    # lsjz 需要 Referer header
    headers = dict(HEADERS)
    headers['Referer'] = f'https://fundf10.eastmoney.com/jjjz_{code}.html'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=TIMEOUT, context=SSL_CTX) as resp:
            text = resp.read().decode('utf-8', errors='replace')
        data = json.loads(text)
    except Exception:
        return None
    if not data or data.get('ErrCode') != 0:
        return None
    lsjz_list = data.get('Data', {}).get('LSJZList', [])
    if not lsjz_list:
        return None
    # 返回 [(date, dwjz, ljjz), ...] 按日期倒序 (最新在前)
    result = []
    for item in lsjz_list:
        date = item.get('FSRQ', '')
        dwjz = safe_float(item.get('DWJZ'))
        ljjz = safe_float(item.get('LJJZ'))
        result.append((date, dwjz, ljjz))
    return result


def compute_fund_returns(nav_history):
    """从净值历史计算各周期收益率。"""
    if not nav_history:
        return {}
    latest_nav = nav_history[0][1]
    if latest_nav is None or latest_nav <= 0:
        return {}
    returns = {}
    periods = {
        'ret1w': 5,
        'ret1m': 20,
        'ret3m': 60,
        'ret6m': 120,
        'ret1y': 240,
        'ret2y': 480,
        'ret3y': 720,
    }
    for key, days in periods.items():
        if len(nav_history) > days:
            past_nav = nav_history[days][1]
            if past_nav and past_nav > 0:
                returns[key] = round((latest_nav / past_nav - 1) * 100, 2)
            else:
                returns[key] = '--'
        else:
            returns[key] = '--'
    return returns


def compute_max_drawdown(nav_history):
    """计算最大回撤。"""
    if not nav_history or len(nav_history) < 2:
        return '--'
    # 反转为时间正序
    navs = [h[1] for h in reversed(nav_history) if h[1] is not None and h[1] > 0]
    if len(navs) < 2:
        return '--'
    peak = navs[0]
    max_dd = 0.0
    for nav in navs:
        if nav > peak:
            peak = nav
        dd = (nav - peak) / peak
        if dd < max_dd:
            max_dd = dd
    return round(max_dd * 100, 2)


def compute_volatility(nav_history):
    """计算年化波动率。"""
    if not nav_history or len(nav_history) < 30:
        return '--'
    navs = [h[1] for h in reversed(nav_history) if h[1] is not None and h[1] > 0]
    if len(navs) < 30:
        return '--'
    daily_returns = [(navs[i] / navs[i - 1] - 1) for i in range(1, len(navs)) if navs[i - 1] > 0]
    if len(daily_returns) < 30:
        return '--'
    mean_ret = sum(daily_returns) / len(daily_returns)
    variance = sum((r - mean_ret) ** 2 for r in daily_returns) / (len(daily_returns) - 1)
    daily_vol = variance ** 0.5
    annual_vol = daily_vol * (240 ** 0.5)
    return round(annual_vol * 100, 2)


def compute_sharpe_ratio(nav_history, risk_free_rate=0.02):
    """计算夏普比率 (年化)。"""
    if not nav_history or len(nav_history) < 240:
        return '--'
    navs = [h[1] for h in reversed(nav_history) if h[1] is not None and h[1] > 0]
    if len(navs) < 240:
        return '--'
    daily_returns = [(navs[i] / navs[i - 1] - 1) for i in range(1, len(navs)) if navs[i - 1] > 0]
    if len(daily_returns) < 240:
        return '--'
    mean_ret = sum(daily_returns) / len(daily_returns)
    variance = sum((r - mean_ret) ** 2 for r in daily_returns) / (len(daily_returns) - 1)
    daily_vol = variance ** 0.5
    if daily_vol == 0:
        return '--'
    annual_ret = mean_ret * 240
    annual_vol = daily_vol * (240 ** 0.5)
    sharpe = (annual_ret - risk_free_rate) / annual_vol
    return round(sharpe, 2)


def compute_dca(nav_history, monthly_invest=1000):
    """模拟定投 (过去12个月)。"""
    if not nav_history or len(nav_history) < 240:
        return None
    shares = 0.0
    total_invest = 0
    for i in range(12):
        idx = 240 - i * 20
        if idx >= len(nav_history):
            idx = len(nav_history) - 1
        nav = nav_history[idx][1]
        if nav and nav > 0:
            shares += monthly_invest / nav
            total_invest += monthly_invest
    if total_invest == 0:
        return None
    latest_nav = nav_history[0][1]
    if not latest_nav or latest_nav <= 0:
        return None
    final_value = shares * latest_nav
    profit = final_value - total_invest
    roi = (profit / total_invest) * 100
    # 一次性投资收益率
    nav_1y = nav_history[240][1] if len(nav_history) > 240 and nav_history[240][1] else nav_history[-1][1]
    lump_sum_roi = (latest_nav / nav_1y - 1) * 100 if nav_1y and nav_1y > 0 else 0
    return {
        'monthlyInvest': monthly_invest,
        'totalInvest': total_invest,
        'finalValue': round(final_value, 2),
        'profit': round(profit, 2),
        'roi': round(roi, 2),
        'lumpSumRoi': round(lump_sum_roi, 2),
        'dcaAdvantage': round(roi - lump_sum_roi, 2),
    }


def fetch_single_fund(code):
    """抓取单个基金的完整数据。"""
    val = fetch_fund_valuation(code)
    nav_hist = fetch_fund_nav_history(code)

    # 基金名称
    name = '--'
    nav = None
    if val:
        name = val.get('name', '--')
        nav = safe_float(val.get('dwjz')) or safe_float(val.get('gsz'))
    if name == '--' and nav_hist:
        # 从历史数据中无法直接获取名称，保留-- 
        pass

    # 最新净值
    if nav_hist and nav_hist[0][1]:
        nav = nav_hist[0][1]

    # 收益率
    returns = compute_fund_returns(nav_hist) if nav_hist else {}

    # 判断基金类型 (简单启发式)
    fund_type = '混合型'
    if val and val.get('name', ''):
        n = val['name']
        if 'QDII' in n or '美元' in n or '全球' in n or '海外' in n or '新兴市场' in n:
            fund_type = 'QDII'
        elif '债' in n:
            fund_type = '债券型'
        elif 'ETF' in n:
            fund_type = 'ETF'
        elif '指数' in n:
            fund_type = '指数型'
        elif '股票' in n:
            fund_type = '股票型'

    fund_data = {
        'name': name,
        'code': code,
        'type': fund_type,
        'nav': round(nav, 4) if nav else '--',
        'ret1w': returns.get('ret1w', '--'),
        'ret1m': returns.get('ret1m', '--'),
        'ret3m': returns.get('ret3m', '--'),
        'ret6m': returns.get('ret6m', '--'),
        'ret1y': returns.get('ret1y', '--'),
        'ret2y': returns.get('ret2y', '--'),
        'ret3y': returns.get('ret3y', '--'),
        '_nav_history': nav_hist,  # 内部使用，输出前删除
    }
    return fund_data


def fetch_all_funds():
    """并发抓取所有基金数据。优先使用基金排行接口，失败则回退到单只抓取。"""
    # 先尝试从排行接口一次性获取
    print('[INFO] 尝试从基金排行接口获取基金数据...')
    ranking_funds = fetch_all_fund_rankings()
    if len(ranking_funds) >= 30:
        print(f'[OK] 基金排行接口返回 {len(ranking_funds)} 只基金')
        return ranking_funds
    print(f'[WARN] 基金排行接口返回不足 ({len(ranking_funds)} 只)，回退到单只抓取')
    codes = read_existing_fund_codes()
    print(f'[INFO] 共 {len(codes)} 只基金需要抓取')
    funds = []
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_map = {executor.submit(fetch_single_fund, code): code for code in codes}
        for future in as_completed(future_map):
            code = future_map[future]
            try:
                fund = future.result(timeout=TIMEOUT + 5)
                if fund:
                    funds.append(fund)
            except Exception:
                funds.append({
                    'name': '--',
                    'code': code,
                    'type': '--',
                    'nav': '--',
                    'ret1w': '--', 'ret1m': '--', 'ret3m': '--',
                    'ret6m': '--', 'ret1y': '--', 'ret2y': '--', 'ret3y': '--',
                    '_nav_history': None,
                })
    # 按原始顺序排序（仅单只抓取模式）
    if 'codes' in dir():
        order = {code: i for i, code in enumerate(codes)}
        funds.sort(key=lambda f: order.get(f['code'], 999))
    return funds


# ============================================================
# 9. 新闻 (news)
# ============================================================
def fetch_news():
    """抓取财经新闻。"""
    url = ('https://np-listapi.eastmoney.com/comm/web/getNewsByColumns?'
           'client=web&biz=web_news_channel&column=350&order=1&'
           'needInteractData=0&page_index=1&page_size=10&req_trace=1')
    data = fetch_json(url)
    if not data or data.get('code') != 200:
        print('[WARN] 新闻数据获取失败')
        return []
    items = data.get('data', {}).get('list', [])
    if not items:
        return []
    result = []
    for item in items:
        title = item.get('Title', '') or item.get('title', '')
        # 发布时间
        pub_time = item.get('ShowTime', '') or item.get('showTime', '')
        if not pub_time and item.get('Art_ShowTime'):
            pub_time = item.get('Art_ShowTime')
        # 提取 HH:MM
        time_short = pub_time
        if ' ' in pub_time:
            time_short = pub_time.split(' ')[1][:5] if len(pub_time.split(' ')) > 1 else pub_time
        elif len(pub_time) >= 5:
            time_short = pub_time[:5]

        result.append({
            'title': title,
            'tag': '快讯',
            'source': '东方财富',
            'time': time_short,
            'impact': 'neutral',
        })
    return result


# ============================================================
# 10. 两融余额 (margin)
# ============================================================
def fetch_margin():
    """抓取两融余额数据。"""
    url = ('https://push2.eastmoney.com/api/qt/kamt.rtmin/get?'
           'fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56,f57,f58')
    data = fetch_json(url)
    if not data or data.get('rc') != 0:
        return {'available': False}
    s2n = data.get('data', {}).get('s2n', [])
    if not s2n:
        return {'available': False}
    # 取最新一条
    latest = s2n[-1] if isinstance(s2n[-1], str) else str(s2n[-1])
    parts = latest.split(',')
    if len(parts) < 4:
        return {'available': False}
    try:
        # f52=融资余额, f54=融资融券余额
        balance = safe_float(parts[1])
        prev_balance = None
        if len(s2n) >= 2:
            prev = s2n[-2] if isinstance(s2n[-2], str) else str(s2n[-2])
            prev_parts = prev.split(',')
            if len(prev_parts) >= 2:
                prev_balance = safe_float(prev_parts[1])
        change = (balance - prev_balance) if (balance is not None and prev_balance is not None) else 0
        return {
            'available': True,
            'balance': round(balance / 1e8, 2) if balance is not None else '--',
            'change': round(change / 1e8, 2) if change else 0,
        }
    except Exception:
        return {'available': False}


# ============================================================
# 资金流向总览 (capitalFlow)
# ============================================================
def build_capital_flow(sector_flow, northbound, margin):
    """组装资金流向数据。"""
    # 主力净流入 = 行业板块净流入之和
    total_inflow = 0
    has_inflow = False
    for s in sector_flow:
        if s.get('inflow') != '--' and isinstance(s.get('inflow'), (int, float)):
            total_inflow += s['inflow']
            has_inflow = True

    net_flow = total_inflow if has_inflow else None

    return {
        'totalInflow': round(total_inflow, 2) if has_inflow else '--',
        'totalOutflow': 0,
        'netFlow': round(net_flow, 2) if net_flow is not None else '--',
        'netFlowTrend': [],  # 需要分时数据，暂留空
        'northBound': {
            'net': northbound.get('northNet', 0),
            'shanghai': northbound.get('shNet', 0),
            'shenzhen': northbound.get('szNet', 0),
            'available': northbound.get('available', False),
        },
        'southBound': {
            'net': northbound.get('southNet', 0),
        },
        'margin': {
            'balance': margin.get('balance', '--'),
            'change': margin.get('change', 0),
            'available': margin.get('available', False),
        },
    }


# ============================================================
# 派生数据计算
# ============================================================
def build_sentiment_index(indices, up_down, sectors):
    """计算市场情绪指数。"""
    score = 50
    signals = []

    # 信号1: 上证涨幅
    sh_idx = next((i for i in indices if i['code'] == '000001'), None)
    if sh_idx and sh_idx.get('changePct') and sh_idx['changePct'] != '--':
        pct_str = sh_idx['changePct'].replace('+', '').replace('%', '')
        pct = safe_float(pct_str, 0)
        signals.append({
            'name': '上证涨幅',
            'value': sh_idx['changePct'],
            'signal': 'bull' if pct > 0 else ('bear' if pct < 0 else 'neutral'),
        })
        if pct > 1:
            score += 15
        elif pct > 0:
            score += 8
        elif pct < -1:
            score -= 15
        elif pct < 0:
            score -= 8

    # 信号2: 板块上涨比
    industry = [s for s in sectors if s.get('type') == 'industry']
    if industry:
        up_sectors = sum(1 for s in industry if isinstance(s.get('change'), (int, float)) and s['change'] > 0)
        total = len(industry)
        signals.append({
            'name': '板块上涨比',
            'value': f'{up_sectors}/{total}',
            'signal': 'bull' if up_sectors > total * 0.6 else ('bear' if up_sectors < total * 0.4 else 'neutral'),
        })
        if up_sectors > total * 0.7:
            score += 15
        elif up_sectors > total * 0.5:
            score += 8
        elif up_sectors < total * 0.3:
            score -= 15
        elif up_sectors < total * 0.5:
            score -= 8

    # 信号3: 涨跌家数比
    if up_down:
        total_stocks = up_down['up'] + up_down['down']
        if total_stocks > 0:
            up_pct = up_down['up'] / total_stocks * 100
            signals.append({
                'name': '涨跌家数比',
                'value': f'{up_pct:.0f}%',
                'signal': 'bull' if up_pct > 60 else ('bear' if up_pct < 40 else 'neutral'),
            })
            if up_pct > 70:
                score += 20
            elif up_pct > 50:
                score += 10
            elif up_pct < 30:
                score -= 20
            elif up_pct < 50:
                score -= 10

    score = max(0, min(100, score))
    if score >= 80:
        level = '极度乐观'
        emoji = '🔥'
        advice = '过热风险'
    elif score >= 60:
        level = '偏乐观'
        emoji = '😊'
        advice = '适度参与'
    elif score >= 40:
        level = '中性'
        emoji = '😐'
        advice = '观望为主'
    elif score >= 20:
        level = '偏悲观'
        emoji = '😰'
        advice = '谨慎操作'
    else:
        level = '极度悲观'
        emoji = '😱'
        advice = '注意风险'

    return {
        'score': score,
        'level': level,
        'emoji': emoji,
        'advice': advice,
        'signals': signals,
    }


def build_capital_decoder(sector_flow, etf_flow):
    """资金解码器 - 从资金流向中提取关键信号。"""
    result = []
    if sector_flow:
        top = sector_flow[0]
        inflow = top.get('inflow', '--')
        if isinstance(inflow, (int, float)):
            amount_str = f'{"+" if inflow >= 0 else ""}{inflow:.1f}亿'
        else:
            amount_str = '--'
        change = top.get('changePct', '--')
        result.append({
            'pattern': '主力加仓方向',
            'target': top.get('name', '--'),
            'amount': amount_str,
            'logic': f'资金集中流入{top.get("name", "--")}，涨幅+{change}%' if isinstance(change, (int, float)) else f'资金集中流入{top.get("name", "--")}',
            'strength': 'strong' if isinstance(inflow, (int, float)) and inflow > 100 else 'medium',
        })
    if etf_flow:
        top_etf = etf_flow[0]
        flow = top_etf.get('flow', '--')
        if isinstance(flow, (int, float)):
            amount_str = f'{"+" if flow >= 0 else ""}{flow:.1f}亿'
        else:
            amount_str = '--'
        result.append({
            'pattern': 'ETF资金偏好',
            'target': top_etf.get('name', '--'),
            'amount': amount_str,
            'logic': f'ETF净流入{top_etf.get("name", "--")}，机构配置方向',
            'strength': 'medium',
        })
    return result


def build_technicals(indices, up_down, market_kpis):
    """构建技术面信号。"""
    result = []
    sh_idx = next((i for i in indices if i['code'] == '000001'), None)
    # 大盘趋势
    if sh_idx and sh_idx.get('changePct') and sh_idx['changePct'] != '--':
        pct_str = sh_idx['changePct'].replace('+', '').replace('%', '')
        pct = safe_float(pct_str, 0)
        if pct > 0.5:
            trend = '上涨'
            signal = '偏多'
            signal_type = 'bullish'
        elif pct < -0.5:
            trend = '下跌'
            signal = '偏空'
            signal_type = 'bearish'
        else:
            trend = '震荡'
            signal = '中性'
            signal_type = 'neutral'
        result.append({
            'name': '大盘趋势',
            'value': trend,
            'signal': signal,
            'signalType': signal_type,
            'note': '据指数涨幅推算',
        })

    # 涨跌比
    if up_down:
        result.append({
            'name': '涨跌比',
            'value': f'{up_down["up"]:,}/{up_down["down"]:,}',
            'signal': '偏多' if up_down['up'] > up_down['down'] * 1.5 else ('偏空' if up_down['down'] > up_down['up'] * 1.5 else '--'),
            'signalType': 'bullish' if up_down['up'] > up_down['down'] * 1.5 else ('bearish' if up_down['down'] > up_down['up'] * 1.5 else 'neutral'),
            'note': '真实行情数据',
        })

    # 成交额
    amount_str = market_kpis.get('totalAmount', {}).get('val', '--')
    result.append({
        'name': '成交额',
        'value': amount_str,
        'signal': '--',
        'signalType': 'neutral',
        'note': '真实行情数据',
    })

    # 量能判断
    raw_amount = market_kpis.get('totalAmount', {}).get('rawAmount')
    if raw_amount and isinstance(raw_amount, (int, float)):
        if raw_amount > 1.5e12:
            vol_level = '放量'
            vol_signal = '活跃'
            vol_type = 'bullish'
        elif raw_amount > 8e11:
            vol_level = '温和'
            vol_signal = '正常'
            vol_type = 'bullish'
        else:
            vol_level = '缩量'
            vol_signal = '清淡'
            vol_type = 'neutral'
    else:
        vol_level = '--'
        vol_signal = '--'
        vol_type = 'neutral'
    result.append({
        'name': '量能判断',
        'value': vol_level,
        'signal': vol_signal,
        'signalType': vol_type,
        'note': '据成交额推算',
    })

    return result


def build_fund_compare(funds):
    """构建基金对比数据。"""
    result = []
    for f in funds[:10]:
        ret1y = f.get('ret1y', '--')
        ret1m = f.get('ret1m', '--')
        ret3m = f.get('ret3m', '--')
        # 计算评分
        ret_score = 0
        if isinstance(ret1y, (int, float)):
            ret_score = min(100, max(0, int(50 + ret1y * 1.5)))
        stability_score = 0
        if isinstance(ret1m, (int, float)) and isinstance(ret3m, (int, float)):
            vol = abs(ret1m) + abs(ret3m)
            stability_score = min(100, max(0, int(100 - vol * 0.8)))
        momentum_score = 0
        if isinstance(ret1m, (int, float)):
            momentum_score = min(100, max(0, int(50 + ret1m * 2)))
        composite = int((ret_score + stability_score + momentum_score) / 3)
        result.append({
            'name': f.get('name', '--'),
            'code': f.get('code', ''),
            'ret1m': ret1m,
            'ret3m': ret3m,
            'ret1y': ret1y,
            'retScore': ret_score,
            'stabilityScore': stability_score,
            'momentumScore': momentum_score,
            'composite': composite,
            'type': f.get('type', '--'),
        })
    return result


def build_dca_simulator(funds):
    """构建定投模拟器数据。"""
    result = []
    for f in funds[:10]:
        nav_hist = f.get('_nav_history')
        if nav_hist:
            dca = compute_dca(nav_hist)
            if dca:
                result.append({
                    'name': f.get('name', '--'),
                    'code': f.get('code', ''),
                    **dca,
                })
    return result


def build_style_radar(funds):
    """构建风格雷达数据。"""
    result = []
    for f in funds[:10]:
        ret1m = f.get('ret1m', '--')
        ret3m = f.get('ret3m', '--')
        ret1y = f.get('ret1y', '--')
        ret2y = f.get('ret2y', '--')
        # 短期 = 1月, 中期 = (1月+3月)/2, 长期 = (1年+2年)/2
        short_term = ret1m if isinstance(ret1m, (int, float)) else '--'
        mid_term = '--'
        if isinstance(ret1m, (int, float)) and isinstance(ret3m, (int, float)):
            mid_term = round((ret1m + ret3m) / 2, 2)
        long_term = '--'
        if isinstance(ret1y, (int, float)) and isinstance(ret2y, (int, float)):
            long_term = round((ret1y + ret2y) / 2, 2)

        # 风格判断
        if isinstance(ret1y, (int, float)):
            if ret1y > 20:
                style = '积极成长'
            elif ret1y > 5:
                style = '稳健成长'
            elif ret1y > -5:
                style = '均衡'
            else:
                style = '防守'
        else:
            style = '--'

        # 风格漂移
        drift = '风格稳定'
        drift_level = 'low'
        if isinstance(short_term, (int, float)) and isinstance(long_term, (int, float)):
            if (long_term > 10 and short_term < -5) or (long_term < -5 and short_term > 5):
                drift = '明显漂移'
                drift_level = 'high'
            elif abs(short_term - long_term) > 20:
                drift = '轻微漂移'
                drift_level = 'medium'

        # 一致性
        consistency = '--'
        if isinstance(short_term, (int, float)) and isinstance(mid_term, (int, float)) and isinstance(long_term, (int, float)):
            vals = [short_term, mid_term, long_term]
            sign_changes = sum(1 for i in range(1, len(vals)) if (vals[i] > 0) != (vals[i - 1] > 0))
            consistency = round(max(30, 100 - sign_changes * 25), 1)

        result.append({
            'name': f.get('name', '--'),
            'code': f.get('code', ''),
            'style': style,
            'drift': drift,
            'driftLevel': drift_level,
            'shortTerm': short_term,
            'midTerm': mid_term,
            'longTerm': long_term,
            'consistency': consistency,
        })
    return result


def build_recommendations(funds):
    """构建基金推荐。"""
    # 按近1年收益排序
    ranked = sorted(
        [f for f in funds if isinstance(f.get('ret1y'), (int, float))],
        key=lambda f: f['ret1y'],
        reverse=True
    )
    result = []
    type_labels = ['进取型', '稳健型', '均衡型', '定投优选', '固收+']
    for i, f in enumerate(ranked[:5]):
        ret1y = f['ret1y']
        ret3m = f.get('ret3m', '--')
        category = 'bull' if ret1y > 15 else ('stable' if ret1y > 0 else 'balance')
        ret3m_str = f'{ret3m:+.1f}%' if isinstance(ret3m, (int, float)) else '--'
        result.append({
            'name': f.get('name', '--'),
            'code': f.get('code', ''),
            'type': type_labels[i % len(type_labels)],
            'ret1y': ret1y,
            'drawdown': '--',
            'reason': f'近1年收益 +{ret1y:.1f}%，近3月 {ret3m_str}',
            'category': category,
        })
    return result


def build_fund_risk_metrics(funds):
    """构建基金风险指标。"""
    result = []
    for f in funds[:10]:
        nav_hist = f.get('_nav_history')
        max_dd = compute_max_drawdown(nav_hist) if nav_hist else '--'
        volatility = compute_volatility(nav_hist) if nav_hist else '--'
        sharpe = compute_sharpe_ratio(nav_hist) if nav_hist else '--'
        result.append({
            'name': f.get('name', '--'),
            'code': f.get('code', ''),
            'maxDrawdown': max_dd,
            'volatility': volatility,
            'sharpeRatio': sharpe,
            'ret1y': f.get('ret1y', '--'),
        })
    return result


def build_fund_premium():
    """构建基金溢价数据 (ETF溢价率)。"""
    # ETF溢价率需要市场价+IOPV，当前数据源不支持，返回空数组
    return []


def build_macros():
    """构建宏观数据。"""
    # 宏观数据无指定API，标记为不可用
    return [
        {'label': 'PMI', 'value': '--', 'sub': '数据暂时无法获取', 'available': False},
        {'label': 'CPI', 'value': '--', 'sub': '数据暂时无法获取', 'available': False},
        {'label': 'PPI', 'value': '--', 'sub': '数据暂时无法获取', 'available': False},
        {'label': '10Y国债', 'value': '--', 'sub': '数据暂时无法获取', 'available': False},
    ]


# ============================================================
# 11. 前一交易日数据 (prevDayData)
# ============================================================
def load_prev_day_data(trading_date):
    """从现有 data.js 加载前一交易日数据。"""
    if not os.path.exists(OUTPUT_FILE):
        return None
    try:
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        # 提取 tradingDate
        match = re.search(r'"tradingDate"\s*:\s*"([^"]+)"', content)
        if not match:
            return None
        prev_date = match.group(1)
        # 如果是同一交易日，尝试读取已存储的 prevDayData
        if prev_date == trading_date:
            prev_match = re.search(r'"prevDayData"\s*:\s*(\{[^}]*\})', content)
            if prev_match:
                try:
                    return json.loads(prev_match.group(1))
                except (json.JSONDecodeError, ValueError):
                    pass
            return None
        # 不同交易日，提取关键KPI作为前日数据
        result = {}
        # 提取成交额
        amt_match = re.search(r'"rawAmount"\s*:\s*([\d.]+|null)', content)
        if amt_match and amt_match.group(1) != 'null':
            result['totalAmount'] = safe_float(amt_match.group(1))
        # 提取涨跌家数
        up_match = re.search(r'"rawUp"\s*:\s*(\d+|null)', content)
        down_match = re.search(r'"rawDown"\s*:\s*(\d+|null)', content)
        if up_match and up_match.group(1) != 'null':
            result['upCount'] = int(up_match.group(1))
        if down_match and down_match.group(1) != 'null':
            result['downCount'] = int(down_match.group(1))
        # 提取北向资金
        north_match = re.search(r'"northNet"\s*:\s*([\d.]+)', content)
        if north_match:
            result['northNet'] = safe_float(north_match.group(1))
        # 提取主力净流入
        flow_match = re.search(r'"netFlow"\s*:\s*([\d.]+|"--")', content)
        if flow_match and flow_match.group(1) != '"--"':
            result['mainNetFlow'] = safe_float(flow_match.group(1))
        result['date'] = prev_date
        return result if result else None
    except Exception:
        return None


# ============================================================
# 主函数 - 组装并输出 data.js
# ============================================================
def main():
    print('=' * 60)
    print('基金分析工作台 - 数据抓取开始')
    print(f'时间: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')
    print('=' * 60)

    trading_date = get_trading_date()
    market_status = 'open' if is_trading_time() else 'closed'
    update_time = get_update_time_label()

    # --- 并发抓取独立数据 ---
    print('[INFO] 开始并发抓取市场数据...')

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_indices = executor.submit(fetch_indices)
        future_up_down = executor.submit(fetch_up_down_count)
        future_northbound = executor.submit(fetch_northbound)
        future_sector_flow = executor.submit(fetch_sector_flow)
        future_sectors = executor.submit(fetch_sectors)
        future_etf_flow = executor.submit(fetch_etf_flow)
        future_national_team = executor.submit(fetch_all_national_team_etfs)
        future_news = executor.submit(fetch_news)
        future_margin = executor.submit(fetch_margin)

        indices = future_indices.result()
        up_down = future_up_down.result()
        northbound = future_northbound.result()
        sector_flow = future_sector_flow.result()
        sectors = future_sectors.result()
        etf_flow = future_etf_flow.result()
        national_team = future_national_team.result()
        news = future_news.result()
        margin = future_margin.result()

    print(f'[OK] 指数: {len(indices)} | 涨跌: {up_down} | 北向: {northbound.get("available")}')
    print(f'[OK] 行业资金: {len(sector_flow)} | 板块: {len(sectors)} | ETF: {len(etf_flow)}')
    print(f'[OK] 国家队ETF: {len(national_team)} | 新闻: {len(news)} | 两融: {margin.get("available")}')

    # --- 板块拥挤度 (依赖板块列表) ---
    print('[INFO] 抓取板块换手率历史数据...')
    sector_crowding = fetch_sector_crowding(sectors)
    print(f'[OK] 板块拥挤度: {len(sector_crowding)}')

    # --- 市场KPI ---
    market_kpis = fetch_market_kpis(indices, up_down, northbound)

    # --- 资金流向 ---
    capital_flow = build_capital_flow(sector_flow, northbound, margin)

    # --- 基金数据 (较慢，单独执行) ---
    print('[INFO] 开始抓取基金数据...')
    funds = fetch_all_funds()
    valid_funds = [f for f in funds if f.get('name') != '--']
    print(f'[OK] 基金: {len(funds)} 只 (有效: {len(valid_funds)})')

    # --- 派生数据 ---
    print('[INFO] 计算派生数据...')
    sentiment_index = build_sentiment_index(indices, up_down, sectors)
    capital_decoder = build_capital_decoder(sector_flow, etf_flow)
    technicals = build_technicals(indices, up_down, market_kpis)
    fund_compare = build_fund_compare(funds)
    dca_simulator = build_dca_simulator(funds)
    style_radar = build_style_radar(funds)
    recommendations = build_recommendations(funds)
    fund_risk_metrics = build_fund_risk_metrics(funds)
    fund_premium = build_fund_premium()
    macros = build_macros()

    # --- 前日数据 ---
    prev_day_data = load_prev_day_data(trading_date)

    # --- 清理基金数据中的内部字段 ---
    for f in funds:
        f.pop('_nav_history', None)
        f.pop('_source', None)

    # --- 组装最终数据 ---
    fund_data = {
        'updateTime': update_time,
        'marketStatus': market_status,
        'dataSource': '东方财富 实时API数据',
        'tradingDate': trading_date,
        'indices': indices,
        'marketKPIs': market_kpis,
        'capitalFlow': capital_flow,
        'sectorFlow': sector_flow,
        'sectors': sectors,
        'etfFlow': etf_flow,
        'nationalTeamETF': national_team,
        'sectorCrowding': sector_crowding,
        'funds': funds,
        'fundPremium': fund_premium,
        'fundRiskMetrics': fund_risk_metrics,
        'news': news,
        'sentimentIndex': sentiment_index,
        'capitalDecoder': capital_decoder,
        'fundCompare': fund_compare,
        'dcaSimulator': dca_simulator,
        'styleRadar': style_radar,
        'recommendations': recommendations,
        'technicals': technicals,
        'macros': macros,
        'prevDayData': prev_day_data if prev_day_data else {},
    }

    # --- 写入 data.js ---
    now_str = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    header = (
        f'// 基金分析工作台 - 数据层 (实时数据)\n'
        f'// 数据源: 东方财富免费公开API\n'
        f'// 自动生成于 {now_str}\n'
        f'// 所有数据均为实时API获取，非模拟数据。\n'
        f'// 无法获取的字段标注为 "--" 或 "数据暂时无法获取"\n\n'
    )

    # 使用 ensure_ascii=False 保留中文，indent=2 格式化
    json_str = json.dumps(fund_data, ensure_ascii=False, indent=2)
    content = header + 'window.fundData = ' + json_str + ';\n'

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    print('=' * 60)
    print(f'[DONE] data.js 已生成: {OUTPUT_FILE}')
    print(f'  交易日期: {trading_date}')
    print(f'  市场状态: {market_status}')
    print(f'  基金数量: {len(funds)}')
    print(f'  文件大小: {len(content) / 1024:.1f} KB')
    print('=' * 60)


if __name__ == '__main__':
    main()
