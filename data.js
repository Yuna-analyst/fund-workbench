// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-16 14:48:09
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-16 14:48 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-16",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3891.6,
      "change": 27.32,
      "changePct": "+0.71%",
      "high": 3894.66,
      "low": 3842.72,
      "volume": 459125108.0,
      "amount": 871141350000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13454.74,
      "change": 166.77,
      "changePct": "+1.26%",
      "high": 13482.98,
      "low": 13185.83,
      "volume": 530896798.0,
      "amount": 967980530000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3311.47,
      "change": 63.55,
      "changePct": "+1.96%",
      "high": 3327.56,
      "low": 3227.18,
      "volume": 144169407.0,
      "amount": 461681410000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1616.19,
      "change": 64.23,
      "changePct": "+4.14%",
      "high": 1622.35,
      "low": 1552.24,
      "volume": 8184911.0,
      "amount": 95462300000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4480.27,
      "change": 30.23,
      "changePct": "+0.68%",
      "high": 4483.36,
      "low": 4417.6,
      "volume": 163494523.0,
      "amount": 476451540000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7683.47,
      "change": 121.88,
      "changePct": "+1.61%",
      "high": 7696.47,
      "low": 7523.82,
      "volume": 139667422.0,
      "amount": 329534400000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.20万亿",
      "label": "成交额",
      "rawAmount": 3202251530000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,381/809",
      "label": "涨/跌家数",
      "rawUp": 4381,
      "rawDown": 809,
      "change": ""
    },
    "northFlow": {
      "val": "+0.00亿",
      "label": "北向资金",
      "northNet": 0.0,
      "shNet": 0.0,
      "szNet": 0.0,
      "southNet": 0,
      "available": true
    }
  },
  "capitalFlow": {
    "totalInflow": 30.48,
    "totalOutflow": 0,
    "netFlow": 30.48,
    "netFlowTrend": [
      6.1,
      12.19,
      18.29,
      24.38,
      30.48
    ],
    "northBound": {
      "net": 0.0,
      "shanghai": 0.0,
      "shenzhen": 0.0,
      "available": true
    },
    "southBound": {
      "net": 0
    },
    "margin": {
      "balance": 0,
      "change": 0,
      "available": false
    }
  },
  "sectorFlow": [
    {
      "name": "通信",
      "inflow": 10.4,
      "pct": 4.9
    },
    {
      "name": "半导体",
      "inflow": 4.37,
      "pct": 4.56
    },
    {
      "name": "5G",
      "inflow": 3.7,
      "pct": 3.86
    },
    {
      "name": "芯片",
      "inflow": 2.53,
      "pct": 4.36
    },
    {
      "name": "券商",
      "inflow": 2.45,
      "pct": 0.4
    },
    {
      "name": "有色",
      "inflow": 2.17,
      "pct": 1.62
    },
    {
      "name": "煤炭",
      "inflow": 1.87,
      "pct": 0.16
    },
    {
      "name": "创新药",
      "inflow": 1.37,
      "pct": 0.49
    },
    {
      "name": "医疗",
      "inflow": 0.93,
      "pct": 0.9
    },
    {
      "name": "军工",
      "inflow": 0.69,
      "pct": 0.97
    },
    {
      "name": "人工智能",
      "inflow": 0.66,
      "pct": 2.36
    },
    {
      "name": "传媒",
      "inflow": 0.46,
      "pct": 0.12
    },
    {
      "name": "云计算",
      "inflow": 0.28,
      "pct": 1.45
    },
    {
      "name": "光伏",
      "inflow": 0.27,
      "pct": 1.4
    },
    {
      "name": "新能源",
      "inflow": 0.26,
      "pct": 0.17
    },
    {
      "name": "地产",
      "inflow": 0.25,
      "pct": 1.03
    },
    {
      "name": "电子",
      "inflow": 0.21,
      "pct": 3.37
    },
    {
      "name": "游戏",
      "inflow": 0.2,
      "pct": 0.19
    },
    {
      "name": "钢铁",
      "inflow": 0.18,
      "pct": 0.26
    },
    {
      "name": "计算机",
      "inflow": 0.05,
      "pct": 1.18
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.685,
      "changePct": 4.9,
      "change": 0.032,
      "turnover": 34.66
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.008,
      "changePct": 4.56,
      "change": 0.044,
      "turnover": 14.58
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.124,
      "changePct": 4.36,
      "change": 0.047,
      "turnover": 8.43
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.05,
      "changePct": 3.86,
      "change": 0.039,
      "turnover": 12.32
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.829,
      "changePct": 3.37,
      "change": 0.027,
      "turnover": 0.71
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.999,
      "changePct": 2.36,
      "change": 0.023,
      "turnover": 2.2
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.753,
      "changePct": 1.62,
      "change": 0.028,
      "turnover": 7.22
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.614,
      "changePct": 1.45,
      "change": 0.023,
      "turnover": 0.94
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.798,
      "changePct": 1.4,
      "change": 0.011,
      "turnover": 0.9
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.118,
      "changePct": 1.18,
      "change": 0.013,
      "turnover": 0.16
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.181,
      "changePct": 1.03,
      "change": 0.012,
      "turnover": 0.82
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.15,
      "changePct": 0.97,
      "change": 0.011,
      "turnover": 2.31
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.335,
      "changePct": 0.9,
      "change": 0.003,
      "turnover": 3.1
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.826,
      "changePct": 0.49,
      "change": 0.004,
      "turnover": 4.56
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.503,
      "changePct": 0.4,
      "change": 0.002,
      "turnover": 8.17
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.139,
      "changePct": 0.26,
      "change": 0.003,
      "turnover": 0.59
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.067,
      "changePct": 0.19,
      "change": 0.002,
      "turnover": 0.66
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.303,
      "changePct": 0.17,
      "change": 0.004,
      "turnover": 0.86
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.272,
      "changePct": 0.16,
      "change": 0.002,
      "turnover": 6.24
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.806,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 1.55
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.484,
      "changePct": 0.07,
      "change": 0.001,
      "turnover": 1.56
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.369,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.19
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.484,
      "changePct": -0.41,
      "change": -0.002,
      "turnover": 0.12
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.839,
      "changePct": -0.47,
      "change": -0.004,
      "turnover": 11.91
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.408,
      "changePct": -0.49,
      "change": -0.002,
      "turnover": 2.81
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.396,
      "changePct": -0.57,
      "change": -0.008,
      "turnover": 0.37
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.004,
      "changePct": -0.79,
      "change": -0.008,
      "turnover": 0.06
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.725,
      "changePct": -0.82,
      "change": -0.006,
      "turnover": 1.02
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.708,
      "changePct": 4.27,
      "amount": 80.4,
      "netFlow": 20.1
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.55,
      "changePct": 0.6,
      "amount": 43.85,
      "netFlow": 10.96
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.71,
      "changePct": 1.61,
      "amount": 35.35,
      "netFlow": 8.84
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.98,
      "changePct": 0.74,
      "amount": 19.82,
      "netFlow": 4.96
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.008,
      "changePct": 4.56,
      "amount": 14.58,
      "netFlow": 3.65
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.503,
      "changePct": 0.4,
      "amount": 8.17,
      "netFlow": 2.04
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.42,
      "changePct": 0.66,
      "amount": 7.14,
      "netFlow": 1.78
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.749,
      "changePct": 0.68,
      "amount": 6.1,
      "netFlow": 1.52
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.303,
      "changePct": 0.17,
      "amount": 0.86,
      "netFlow": 0.21
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.369,
      "changePct": 0.0,
      "amount": 2.19,
      "netFlow": -0.55
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.55,
      "changePct": 0.6,
      "amount": 43.85,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.98,
      "changePct": 0.74,
      "amount": 19.82,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.71,
      "changePct": 1.61,
      "amount": 35.35,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.749,
      "changePct": 0.68,
      "amount": 6.1,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.42,
      "changePct": 0.66,
      "amount": 7.14,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 34.66,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "半导体",
      "turnover": 14.58,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "芯片",
      "turnover": 8.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 12.32,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "电子",
      "turnover": 0.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 2.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 7.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 0.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 4.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 8.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 6.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.5896,
      "ret1w": 2.77,
      "ret1m": -1.06,
      "ret3m": 2.34,
      "ret6m": -8.75,
      "ret1y": 5.63,
      "ret2y": 21.01,
      "ret3y": 168.87
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1616,
      "ret1w": 3.1,
      "ret1m": -1.28,
      "ret3m": -2.69,
      "ret6m": -16.42,
      "ret1y": 5.48,
      "ret2y": 3.01,
      "ret3y": 70.86
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.9689,
      "ret1w": 5.35,
      "ret1m": 1.55,
      "ret3m": 6.86,
      "ret6m": -10.04,
      "ret1y": 49.96,
      "ret2y": 89.68,
      "ret3y": 316.97
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6912,
      "ret1w": -0.96,
      "ret1m": -3.25,
      "ret3m": -2.14,
      "ret6m": 3.78,
      "ret1y": -10.73,
      "ret2y": -18.93,
      "ret3y": 5.96
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9556,
      "ret1w": -0.08,
      "ret1m": -4.88,
      "ret3m": -13.21,
      "ret6m": -21.59,
      "ret1y": -35.39,
      "ret2y": -30.8,
      "ret3y": 13.55
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6823,
      "ret1w": 0.08,
      "ret1m": -2.17,
      "ret3m": -2.31,
      "ret6m": -9.87,
      "ret1y": -27.11,
      "ret2y": -18.86,
      "ret3y": 38.2
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3538,
      "ret1w": -0.22,
      "ret1m": -3.04,
      "ret3m": -2.58,
      "ret6m": 0.86,
      "ret1y": -8.49,
      "ret2y": 7.01,
      "ret3y": 61.87
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.913,
      "ret1w": 2.46,
      "ret1m": 0.0,
      "ret3m": -0.36,
      "ret6m": -10.27,
      "ret1y": -2.45,
      "ret2y": 4.59,
      "ret3y": 80.13
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3278,
      "ret1w": 1.45,
      "ret1m": -1.08,
      "ret3m": -3.56,
      "ret6m": -7.19,
      "ret1y": -0.55,
      "ret2y": 6.76,
      "ret3y": 48.86
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.41,
      "ret1w": 3.58,
      "ret1m": 1.82,
      "ret3m": -5.15,
      "ret6m": -7.86,
      "ret1y": 31.2,
      "ret2y": 64.58,
      "ret3y": 295.59
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.084,
      "ret1w": -0.28,
      "ret1m": -3.47,
      "ret3m": -5.0,
      "ret6m": 4.94,
      "ret1y": -8.14,
      "ret2y": -18.68,
      "ret3y": 7.22
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.308,
      "ret1w": 0.96,
      "ret1m": -2.37,
      "ret3m": -7.64,
      "ret6m": 3.87,
      "ret1y": -16.38,
      "ret2y": -16.92,
      "ret3y": 34.81
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.742,
      "ret1w": 4.32,
      "ret1m": 4.67,
      "ret3m": -4.35,
      "ret6m": -36.36,
      "ret1y": -46.96,
      "ret2y": -38.18,
      "ret3y": 28.11
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8873,
      "ret1w": -0.73,
      "ret1m": -2.81,
      "ret3m": -2.4,
      "ret6m": 3.51,
      "ret1y": -0.35,
      "ret2y": -6.83,
      "ret3y": 10.08
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6591,
      "ret1w": 1.94,
      "ret1m": -0.48,
      "ret3m": -1.09,
      "ret6m": -7.75,
      "ret1y": -3.19,
      "ret2y": 7.94,
      "ret3y": 81.32
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3937,
      "ret1w": 3.83,
      "ret1m": 0.92,
      "ret3m": -3.54,
      "ret6m": -22.64,
      "ret1y": 23.94,
      "ret2y": 75.12,
      "ret3y": 246.31
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5238,
      "ret1w": -0.1,
      "ret1m": -2.59,
      "ret3m": -0.17,
      "ret6m": -1.56,
      "ret1y": -8.87,
      "ret2y": -6.5,
      "ret3y": 26.98
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.998,
      "ret1w": 0.5,
      "ret1m": 0.3,
      "ret3m": -9.19,
      "ret6m": 17.0,
      "ret1y": 3.1,
      "ret2y": -16.69,
      "ret3y": 7.43
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2771,
      "ret1w": -0.92,
      "ret1m": -2.91,
      "ret3m": -1.67,
      "ret6m": 0.74,
      "ret1y": -9.68,
      "ret2y": 2.07,
      "ret3y": 17.2
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3251,
      "ret1w": 1.77,
      "ret1m": -0.29,
      "ret3m": 0.05,
      "ret6m": 1.81,
      "ret1y": 2.28,
      "ret2y": 17.77,
      "ret3y": 87.11
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2518,
      "ret1w": 1.02,
      "ret1m": -0.7,
      "ret3m": -4.36,
      "ret6m": -11.49,
      "ret1y": -3.95,
      "ret2y": 11.49,
      "ret3y": 52.99
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3318,
      "ret1w": 1.02,
      "ret1m": -0.69,
      "ret3m": -4.32,
      "ret6m": -11.4,
      "ret1y": -3.77,
      "ret2y": 11.92,
      "ret3y": 54.23
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0786,
      "ret1w": 0.13,
      "ret1m": -0.68,
      "ret3m": -1.52,
      "ret6m": -3.13,
      "ret1y": -0.93,
      "ret2y": 0.65,
      "ret3y": 8.34
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0522,
      "ret1w": 0.13,
      "ret1m": -0.66,
      "ret3m": -1.47,
      "ret6m": -2.98,
      "ret1y": -0.62,
      "ret2y": 1.27,
      "ret3y": 9.65
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6995,
      "ret1w": -0.19,
      "ret1m": -2.48,
      "ret3m": -3.53,
      "ret6m": -3.68,
      "ret1y": -12.51,
      "ret2y": -11.87,
      "ret3y": 12.66
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7174,
      "ret1w": -0.18,
      "ret1m": -2.46,
      "ret3m": -3.47,
      "ret6m": -3.55,
      "ret1y": -12.28,
      "ret2y": -11.42,
      "ret3y": 13.8
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8898,
      "ret1w": 2.99,
      "ret1m": 0.29,
      "ret3m": 0.45,
      "ret6m": -13.43,
      "ret1y": 37.71,
      "ret2y": 59.3,
      "ret3y": 183.7
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4277,
      "ret1w": 0.73,
      "ret1m": -2.01,
      "ret3m": -5.69,
      "ret6m": -5.93,
      "ret1y": -1.07,
      "ret2y": 13.63,
      "ret3y": 88.97
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7057,
      "ret1w": 0.0,
      "ret1m": -3.22,
      "ret3m": -6.36,
      "ret6m": -14.21,
      "ret1y": -20.17,
      "ret2y": -13.95,
      "ret3y": 16.16
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.04,
      "ret1w": 1.91,
      "ret1m": -0.53,
      "ret3m": -6.96,
      "ret6m": -9.99,
      "ret1y": 14.53,
      "ret2y": 32.05,
      "ret3y": 148.13
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5067,
      "ret1w": 1.4,
      "ret1m": -0.47,
      "ret3m": -3.04,
      "ret6m": -12.86,
      "ret1y": -2.39,
      "ret2y": 10.75,
      "ret3y": 54.76
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5165,
      "ret1w": 1.41,
      "ret1m": -0.46,
      "ret3m": -3.0,
      "ret6m": -12.77,
      "ret1y": -2.2,
      "ret2y": 11.22,
      "ret3y": 56.04
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2724,
      "ret1w": -0.32,
      "ret1m": -1.18,
      "ret3m": 0.09,
      "ret6m": 0.29,
      "ret1y": -1.53,
      "ret2y": -1.09,
      "ret3y": 0.62
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1055,
      "ret1w": 0.0,
      "ret1m": -1.15,
      "ret3m": -3.37,
      "ret6m": 1.01,
      "ret1y": -6.04,
      "ret2y": -3.24,
      "ret3y": 18.47
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3727,
      "ret1w": 0.31,
      "ret1m": -1.11,
      "ret3m": -6.02,
      "ret6m": -15.89,
      "ret1y": -2.81,
      "ret2y": -21.0,
      "ret3y": 16.83
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9818,
      "ret1w": 0.55,
      "ret1m": -2.02,
      "ret3m": -0.25,
      "ret6m": -2.13,
      "ret1y": -8.53,
      "ret2y": 8.35,
      "ret3y": 56.29
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.386,
      "ret1w": 3.55,
      "ret1m": 1.53,
      "ret3m": -1.54,
      "ret6m": -24.87,
      "ret1y": 29.14,
      "ret2y": 61.31,
      "ret3y": 222.17
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.505,
      "ret1w": -0.64,
      "ret1m": -0.75,
      "ret3m": 3.34,
      "ret6m": 3.21,
      "ret1y": -1.12,
      "ret2y": 0.75,
      "ret3y": 17.46
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6108,
      "ret1w": 1.5,
      "ret1m": -2.18,
      "ret3m": -8.45,
      "ret6m": -25.06,
      "ret1y": -9.55,
      "ret2y": 1.31,
      "ret3y": 53.54
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.173,
      "ret1w": 2.69,
      "ret1m": 4.23,
      "ret3m": -0.6,
      "ret6m": -15.69,
      "ret1y": 74.32,
      "ret2y": 113.73,
      "ret3y": 393.59
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0658,
      "ret1w": 0.13,
      "ret1m": -0.18,
      "ret3m": -0.18,
      "ret6m": -1.5,
      "ret1y": -0.11,
      "ret2y": 1.38,
      "ret3y": 4.92
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1144,
      "ret1w": 0.13,
      "ret1m": -0.18,
      "ret3m": -0.15,
      "ret6m": -1.44,
      "ret1y": 0.01,
      "ret2y": 1.66,
      "ret3y": 5.64
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.065,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.08,
      "ret6m": 0.34,
      "ret1y": 0.75,
      "ret2y": 1.54,
      "ret3y": 2.62
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0994,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.33,
      "ret1y": 0.75,
      "ret2y": 1.51,
      "ret3y": 3.85
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1089,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.86,
      "ret2y": 1.72,
      "ret3y": 4.29
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0764,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.05,
      "ret6m": 0.34,
      "ret1y": 0.74,
      "ret2y": 1.44,
      "ret3y": 2.63
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.091,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.07,
      "ret6m": 0.42,
      "ret1y": 0.9,
      "ret2y": 1.75,
      "ret3y": 3.29
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0621,
      "ret1w": 0.59,
      "ret1m": -0.51,
      "ret3m": -1.07,
      "ret6m": -3.18,
      "ret1y": 0.67,
      "ret2y": 5.37,
      "ret3y": 12.98
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.218,
      "ret1w": 0.74,
      "ret1m": -0.49,
      "ret3m": -0.77,
      "ret6m": -3.61,
      "ret1y": -0.1,
      "ret2y": 2.73,
      "ret3y": 7.79
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.069,
      "ret1w": 0.59,
      "ret1m": -0.49,
      "ret3m": -1.04,
      "ret6m": -3.08,
      "ret1y": 0.87,
      "ret2y": 5.8,
      "ret3y": 13.9
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0466,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.15,
      "ret6m": 0.39,
      "ret1y": 0.86,
      "ret2y": 1.76,
      "ret3y": 3.59
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1725,
      "ret1w": 0.57,
      "ret1m": 0.06,
      "ret3m": -0.32,
      "ret6m": -2.72,
      "ret1y": -2.79,
      "ret2y": 0.3,
      "ret3y": 10.86
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2085,
      "ret1w": -0.07,
      "ret1m": -0.53,
      "ret3m": -0.76,
      "ret6m": -1.51,
      "ret1y": -1.02,
      "ret2y": 2.48,
      "ret3y": 14.89
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1367,
      "ret1w": 0.16,
      "ret1m": -0.11,
      "ret3m": -0.58,
      "ret6m": -1.98,
      "ret1y": 0.98,
      "ret2y": 3.04,
      "ret3y": 10.66
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2081,
      "ret1w": 0.16,
      "ret1m": -0.12,
      "ret3m": -0.55,
      "ret6m": -1.89,
      "ret1y": 1.17,
      "ret2y": 3.45,
      "ret3y": 11.58
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.28,
      "ret1w": -0.65,
      "ret1m": -7.69,
      "ret3m": -7.35,
      "ret6m": -17.66,
      "ret1y": 35.55,
      "ret2y": 74.18,
      "ret3y": 138.99
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9535,
      "ret1w": -0.41,
      "ret1m": -1.2,
      "ret3m": -1.42,
      "ret6m": -0.09,
      "ret1y": 10.25,
      "ret2y": 5.14,
      "ret3y": 35.96
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7882,
      "ret1w": -0.74,
      "ret1m": -4.37,
      "ret3m": -4.33,
      "ret6m": -15.31,
      "ret1y": -11.62,
      "ret2y": -3.98,
      "ret3y": 52.29
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3545,
      "ret1w": -0.22,
      "ret1m": -2.31,
      "ret3m": -1.61,
      "ret6m": -2.14,
      "ret1y": 24.18,
      "ret2y": 23.5,
      "ret3y": 72.19
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9252,
      "ret1w": -0.11,
      "ret1m": -1.05,
      "ret3m": -1.34,
      "ret6m": -1.9,
      "ret1y": -3.15,
      "ret2y": -5.29,
      "ret3y": -3.17
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.5494,
      "ret1w": -0.62,
      "ret1m": -6.12,
      "ret3m": -7.58,
      "ret6m": -14.45,
      "ret1y": 25.12,
      "ret2y": 38.86,
      "ret3y": 93.28
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.521,
      "ret1w": -0.88,
      "ret1m": -2.23,
      "ret3m": -2.54,
      "ret6m": -3.4,
      "ret1y": 5.9,
      "ret2y": 3.22,
      "ret3y": 20.24
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.166,
      "ret1w": -1.85,
      "ret1m": -4.89,
      "ret3m": -6.42,
      "ret6m": 6.19,
      "ret1y": -7.46,
      "ret2y": -29.72,
      "ret3y": 92.09
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.916,
      "ret1w": -1.61,
      "ret1m": -5.08,
      "ret3m": -6.53,
      "ret6m": -0.76,
      "ret1y": -10.2,
      "ret2y": -28.1,
      "ret3y": 46.09
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7623,
      "ret1w": -1.04,
      "ret1m": -5.4,
      "ret3m": -6.21,
      "ret6m": -12.7,
      "ret1y": 31.43,
      "ret2y": 66.4,
      "ret3y": 140.89
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6125,
      "ret1w": 0.77,
      "ret1m": -2.08,
      "ret3m": 4.31,
      "ret6m": 8.31,
      "ret1y": 6.11,
      "ret2y": 35.23,
      "ret3y": 60.94
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7218,
      "ret1w": -0.82,
      "ret1m": -3.07,
      "ret3m": 0.59,
      "ret6m": -1.67,
      "ret1y": 14.5,
      "ret2y": 25.06,
      "ret3y": 59.35
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2857,
      "ret1w": -1.19,
      "ret1m": -4.34,
      "ret3m": -2.61,
      "ret6m": -6.38,
      "ret1y": 6.19,
      "ret2y": 10.21,
      "ret3y": 38.13
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.266,
      "ret1w": -0.16,
      "ret1m": -2.01,
      "ret3m": -4.95,
      "ret6m": -4.67,
      "ret1y": 0.4,
      "ret2y": 1.28,
      "ret3y": -11.92
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.05,
      "ret1w": 0.05,
      "ret1m": -2.1,
      "ret3m": -2.29,
      "ret6m": -1.91,
      "ret1y": -16.12,
      "ret2y": 8.7,
      "ret3y": 48.2
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0118,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.12,
      "ret6m": 0.5,
      "ret1y": 1.46,
      "ret2y": 2.22,
      "ret3y": 3.49
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0108,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.48,
      "ret1y": 1.47,
      "ret2y": 2.28,
      "ret3y": 3.67
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.382,
      "ret1w": 0.88,
      "ret1m": -1.85,
      "ret3m": -6.05,
      "ret6m": -11.13,
      "ret1y": -4.69,
      "ret2y": -2.81,
      "ret3y": 38.48
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.757,
      "ret1w": 1.14,
      "ret1m": -2.23,
      "ret3m": -6.22,
      "ret6m": -10.72,
      "ret1y": -3.09,
      "ret2y": 4.87,
      "ret3y": 65.49
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6586,
      "ret1w": 0.96,
      "ret1m": -3.54,
      "ret3m": -1.01,
      "ret6m": -5.29,
      "ret1y": -10.1,
      "ret2y": 23.46,
      "ret3y": 79.5
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1064,
      "ret1w": 0.68,
      "ret1m": -1.6,
      "ret3m": -2.52,
      "ret6m": -5.12,
      "ret1y": 0.13,
      "ret2y": 8.34,
      "ret3y": 48.58
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.167,
      "ret1w": 0.68,
      "ret1m": -1.59,
      "ret3m": -2.49,
      "ret6m": -5.02,
      "ret1y": 0.33,
      "ret2y": 8.77,
      "ret3y": 49.78
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9839,
      "ret1w": 1.54,
      "ret1m": -1.03,
      "ret3m": -3.69,
      "ret6m": -9.17,
      "ret1y": -5.32,
      "ret2y": 7.26,
      "ret3y": 71.07
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.753,
      "ret1w": 0.67,
      "ret1m": -1.82,
      "ret3m": -3.64,
      "ret6m": -7.18,
      "ret1y": -2.94,
      "ret2y": 0.4,
      "ret3y": 43.23
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5606,
      "ret1w": 0.7,
      "ret1m": -1.82,
      "ret3m": -2.13,
      "ret6m": -4.8,
      "ret1y": -8.33,
      "ret2y": 8.94,
      "ret3y": 61.55
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9242,
      "ret1w": 1.78,
      "ret1m": -1.13,
      "ret3m": -6.77,
      "ret6m": -14.14,
      "ret1y": 5.11,
      "ret2y": 8.74,
      "ret3y": 78.6
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0979,
      "ret1w": -0.29,
      "ret1m": -2.69,
      "ret3m": -2.7,
      "ret6m": 0.33,
      "ret1y": -4.45,
      "ret2y": -2.3,
      "ret3y": 31.24
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.503,
      "ret1w": -0.56,
      "ret1m": -1.55,
      "ret3m": -0.78,
      "ret6m": 2.42,
      "ret1y": 3.47,
      "ret2y": 9.96,
      "ret3y": 28.38
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3813,
      "ret1w": -0.62,
      "ret1m": -1.97,
      "ret3m": -3.64,
      "ret6m": -5.34,
      "ret1y": 15.2,
      "ret2y": 11.61,
      "ret3y": 36.14
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.6865,
      "ret1w": 1.05,
      "ret1m": -2.39,
      "ret3m": -6.14,
      "ret6m": -13.08,
      "ret1y": -1.62,
      "ret2y": 4.07,
      "ret3y": 60.95
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1537,
      "ret1w": -0.71,
      "ret1m": -2.39,
      "ret3m": -4.36,
      "ret6m": -8.66,
      "ret1y": -0.3,
      "ret2y": 3.85,
      "ret3y": 54.51
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1559,
      "ret1w": -0.7,
      "ret1m": -2.38,
      "ret3m": -4.3,
      "ret6m": -8.52,
      "ret1y": -0.22,
      "ret2y": 4.05,
      "ret3y": 53.98
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3633,
      "ret1w": -0.21,
      "ret1m": -2.19,
      "ret3m": -4.56,
      "ret6m": -12.94,
      "ret1y": -6.9,
      "ret2y": -1.95,
      "ret3y": 41.07
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3947,
      "ret1w": -0.21,
      "ret1m": -2.17,
      "ret3m": -4.53,
      "ret6m": -12.86,
      "ret1y": -6.71,
      "ret2y": -1.55,
      "ret3y": 42.2
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9512,
      "ret1w": -0.56,
      "ret1m": -3.1,
      "ret3m": -6.26,
      "ret6m": -18.8,
      "ret1y": -2.53,
      "ret2y": 3.57,
      "ret3y": 64.34
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1626,
      "ret1w": 0.05,
      "ret1m": -0.06,
      "ret3m": -0.4,
      "ret6m": -0.79,
      "ret1y": 0.09,
      "ret2y": 1.57,
      "ret3y": 7.85
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1826,
      "ret1w": 0.05,
      "ret1m": -0.05,
      "ret3m": -0.37,
      "ret6m": -0.71,
      "ret1y": 0.24,
      "ret2y": 1.89,
      "ret3y": 8.51
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0851,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.11,
      "ret6m": 0.42,
      "ret1y": 0.9,
      "ret2y": 1.85,
      "ret3y": 3.22
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4092,
      "ret1w": -0.03,
      "ret1m": -0.04,
      "ret3m": -0.06,
      "ret6m": 0.1,
      "ret1y": -0.01,
      "ret2y": 0.65,
      "ret3y": 12.28
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4617,
      "ret1w": -0.02,
      "ret1m": -0.03,
      "ret3m": -0.03,
      "ret6m": 0.21,
      "ret1y": 0.2,
      "ret2y": 1.06,
      "ret3y": 13.2
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1319,
      "ret1w": 0.97,
      "ret1m": 1.14,
      "ret3m": -0.28,
      "ret6m": -2.23,
      "ret1y": 13.53,
      "ret2y": 23.19,
      "ret3y": 68.58
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2315,
      "ret1w": 0.98,
      "ret1m": -0.32,
      "ret3m": -0.93,
      "ret6m": -4.01,
      "ret1y": 5.77,
      "ret2y": 8.91,
      "ret3y": 50.81
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-08-20",
        "nav": 4.3652
      },
      {
        "date": "2026-08-21",
        "nav": 4.4656
      },
      {
        "date": "2026-08-24",
        "nav": 4.391
      },
      {
        "date": "2026-08-25",
        "nav": 4.4886
      },
      {
        "date": "2026-08-26",
        "nav": 4.4329
      },
      {
        "date": "2026-08-27",
        "nav": 4.6332
      },
      {
        "date": "2026-08-28",
        "nav": 4.5397
      },
      {
        "date": "2026-08-31",
        "nav": 4.6563
      },
      {
        "date": "2026-09-01",
        "nav": 4.5191
      },
      {
        "date": "2026-09-02",
        "nav": 4.497
      },
      {
        "date": "2026-09-03",
        "nav": 4.6317
      },
      {
        "date": "2026-09-04",
        "nav": 4.4762
      },
      {
        "date": "2026-09-07",
        "nav": 4.6631
      },
      {
        "date": "2026-09-08",
        "nav": 4.6359
      },
      {
        "date": "2026-09-09",
        "nav": 4.6388
      },
      {
        "date": "2026-09-10",
        "nav": 4.5381
      },
      {
        "date": "2026-09-11",
        "nav": 4.477
      },
      {
        "date": "2026-09-14",
        "nav": 4.4944
      },
      {
        "date": "2026-09-15",
        "nav": 4.466
      },
      {
        "date": "2026-09-16",
        "nav": 4.5896
      }
    ],
    "580008": [
      {
        "date": "2026-08-20",
        "nav": 4.2329
      },
      {
        "date": "2026-08-21",
        "nav": 4.3538
      },
      {
        "date": "2026-08-24",
        "nav": 4.2144
      },
      {
        "date": "2026-08-25",
        "nav": 4.157
      },
      {
        "date": "2026-08-26",
        "nav": 4.1874
      },
      {
        "date": "2026-08-27",
        "nav": 4.2598
      },
      {
        "date": "2026-08-28",
        "nav": 4.2025
      },
      {
        "date": "2026-08-31",
        "nav": 4.2467
      },
      {
        "date": "2026-09-01",
        "nav": 4.1608
      },
      {
        "date": "2026-09-02",
        "nav": 4.0892
      },
      {
        "date": "2026-09-03",
        "nav": 4.0877
      },
      {
        "date": "2026-09-04",
        "nav": 4.0311
      },
      {
        "date": "2026-09-07",
        "nav": 4.211
      },
      {
        "date": "2026-09-08",
        "nav": 4.1906
      },
      {
        "date": "2026-09-09",
        "nav": 4.2154
      },
      {
        "date": "2026-09-10",
        "nav": 4.1785
      },
      {
        "date": "2026-09-11",
        "nav": 4.1878
      },
      {
        "date": "2026-09-14",
        "nav": 4.0674
      },
      {
        "date": "2026-09-15",
        "nav": 4.0366
      },
      {
        "date": "2026-09-16",
        "nav": 4.1616
      }
    ],
    "540010": [
      {
        "date": "2026-08-20",
        "nav": 5.823
      },
      {
        "date": "2026-08-21",
        "nav": 5.8344
      },
      {
        "date": "2026-08-24",
        "nav": 5.6247
      },
      {
        "date": "2026-08-25",
        "nav": 5.5704
      },
      {
        "date": "2026-08-26",
        "nav": 5.5639
      },
      {
        "date": "2026-08-27",
        "nav": 5.8381
      },
      {
        "date": "2026-08-28",
        "nav": 5.7765
      },
      {
        "date": "2026-08-31",
        "nav": 5.8102
      },
      {
        "date": "2026-09-01",
        "nav": 5.6426
      },
      {
        "date": "2026-09-02",
        "nav": 5.5226
      },
      {
        "date": "2026-09-03",
        "nav": 5.5893
      },
      {
        "date": "2026-09-04",
        "nav": 5.5255
      },
      {
        "date": "2026-09-07",
        "nav": 5.9697
      },
      {
        "date": "2026-09-08",
        "nav": 5.8873
      },
      {
        "date": "2026-09-09",
        "nav": 5.8777
      },
      {
        "date": "2026-09-10",
        "nav": 5.9457
      },
      {
        "date": "2026-09-11",
        "nav": 5.8597
      },
      {
        "date": "2026-09-14",
        "nav": 5.7159
      },
      {
        "date": "2026-09-15",
        "nav": 5.6656
      },
      {
        "date": "2026-09-16",
        "nav": 5.9689
      }
    ],
    "540009": [
      {
        "date": "2026-08-20",
        "nav": 0.708
      },
      {
        "date": "2026-08-21",
        "nav": 0.6975
      },
      {
        "date": "2026-08-24",
        "nav": 0.7001
      },
      {
        "date": "2026-08-25",
        "nav": 0.7071
      },
      {
        "date": "2026-08-26",
        "nav": 0.7087
      },
      {
        "date": "2026-08-27",
        "nav": 0.7132
      },
      {
        "date": "2026-08-28",
        "nav": 0.7181
      },
      {
        "date": "2026-08-31",
        "nav": 0.7147
      },
      {
        "date": "2026-09-01",
        "nav": 0.724
      },
      {
        "date": "2026-09-02",
        "nav": 0.7212
      },
      {
        "date": "2026-09-03",
        "nav": 0.7162
      },
      {
        "date": "2026-09-04",
        "nav": 0.7259
      },
      {
        "date": "2026-09-07",
        "nav": 0.7189
      },
      {
        "date": "2026-09-08",
        "nav": 0.7188
      },
      {
        "date": "2026-09-09",
        "nav": 0.7144
      },
      {
        "date": "2026-09-10",
        "nav": 0.7041
      },
      {
        "date": "2026-09-11",
        "nav": 0.697
      },
      {
        "date": "2026-09-14",
        "nav": 0.7008
      },
      {
        "date": "2026-09-15",
        "nav": 0.6979
      },
      {
        "date": "2026-09-16",
        "nav": 0.6912
      }
    ],
    "540008": [
      {
        "date": "2026-08-20",
        "nav": 2.1974
      },
      {
        "date": "2026-08-21",
        "nav": 2.2158
      },
      {
        "date": "2026-08-24",
        "nav": 2.1724
      },
      {
        "date": "2026-08-25",
        "nav": 2.1734
      },
      {
        "date": "2026-08-26",
        "nav": 2.1826
      },
      {
        "date": "2026-08-27",
        "nav": 2.1569
      },
      {
        "date": "2026-08-28",
        "nav": 2.1735
      },
      {
        "date": "2026-08-31",
        "nav": 2.1204
      },
      {
        "date": "2026-09-01",
        "nav": 2.1176
      },
      {
        "date": "2026-09-02",
        "nav": 2.0648
      },
      {
        "date": "2026-09-03",
        "nav": 2.0392
      },
      {
        "date": "2026-09-04",
        "nav": 2.0469
      },
      {
        "date": "2026-09-07",
        "nav": 2.0638
      },
      {
        "date": "2026-09-08",
        "nav": 2.0687
      },
      {
        "date": "2026-09-09",
        "nav": 2.0559
      },
      {
        "date": "2026-09-10",
        "nav": 2.0203
      },
      {
        "date": "2026-09-11",
        "nav": 1.973
      },
      {
        "date": "2026-09-14",
        "nav": 1.9768
      },
      {
        "date": "2026-09-15",
        "nav": 1.9572
      },
      {
        "date": "2026-09-16",
        "nav": 1.9556
      }
    ],
    "540007": [
      {
        "date": "2026-08-20",
        "nav": 2.7479
      },
      {
        "date": "2026-08-21",
        "nav": 2.7426
      },
      {
        "date": "2026-08-24",
        "nav": 2.7394
      },
      {
        "date": "2026-08-25",
        "nav": 2.7464
      },
      {
        "date": "2026-08-26",
        "nav": 2.7716
      },
      {
        "date": "2026-08-27",
        "nav": 2.7596
      },
      {
        "date": "2026-08-28",
        "nav": 2.7819
      },
      {
        "date": "2026-08-31",
        "nav": 2.7383
      },
      {
        "date": "2026-09-01",
        "nav": 2.7383
      },
      {
        "date": "2026-09-02",
        "nav": 2.6866
      },
      {
        "date": "2026-09-03",
        "nav": 2.6797
      },
      {
        "date": "2026-09-04",
        "nav": 2.689
      },
      {
        "date": "2026-09-07",
        "nav": 2.7003
      },
      {
        "date": "2026-09-08",
        "nav": 2.7243
      },
      {
        "date": "2026-09-09",
        "nav": 2.7419
      },
      {
        "date": "2026-09-10",
        "nav": 2.7453
      },
      {
        "date": "2026-09-11",
        "nav": 2.691
      },
      {
        "date": "2026-09-14",
        "nav": 2.6691
      },
      {
        "date": "2026-09-15",
        "nav": 2.6802
      },
      {
        "date": "2026-09-16",
        "nav": 2.6823
      }
    ],
    "540006": [
      {
        "date": "2026-08-20",
        "nav": 5.5095
      },
      {
        "date": "2026-08-21",
        "nav": 5.484
      },
      {
        "date": "2026-08-24",
        "nav": 5.4558
      },
      {
        "date": "2026-08-25",
        "nav": 5.4846
      },
      {
        "date": "2026-08-26",
        "nav": 5.5665
      },
      {
        "date": "2026-08-27",
        "nav": 5.5831
      },
      {
        "date": "2026-08-28",
        "nav": 5.575
      },
      {
        "date": "2026-08-31",
        "nav": 5.5541
      },
      {
        "date": "2026-09-01",
        "nav": 5.5781
      },
      {
        "date": "2026-09-02",
        "nav": 5.4952
      },
      {
        "date": "2026-09-03",
        "nav": 5.5006
      },
      {
        "date": "2026-09-04",
        "nav": 5.5184
      },
      {
        "date": "2026-09-07",
        "nav": 5.5023
      },
      {
        "date": "2026-09-08",
        "nav": 5.5014
      },
      {
        "date": "2026-09-09",
        "nav": 5.5215
      },
      {
        "date": "2026-09-10",
        "nav": 5.471
      },
      {
        "date": "2026-09-11",
        "nav": 5.4086
      },
      {
        "date": "2026-09-14",
        "nav": 5.4164
      },
      {
        "date": "2026-09-15",
        "nav": 5.3656
      },
      {
        "date": "2026-09-16",
        "nav": 5.3538
      }
    ],
    "519975": [
      {
        "date": "2026-08-20",
        "nav": 1.902
      },
      {
        "date": "2026-08-21",
        "nav": 1.903
      },
      {
        "date": "2026-08-24",
        "nav": 1.876
      },
      {
        "date": "2026-08-25",
        "nav": 1.874
      },
      {
        "date": "2026-08-26",
        "nav": 1.868
      },
      {
        "date": "2026-08-27",
        "nav": 1.906
      },
      {
        "date": "2026-08-28",
        "nav": 1.903
      },
      {
        "date": "2026-08-31",
        "nav": 1.935
      },
      {
        "date": "2026-09-01",
        "nav": 1.916
      },
      {
        "date": "2026-09-02",
        "nav": 1.894
      },
      {
        "date": "2026-09-03",
        "nav": 1.909
      },
      {
        "date": "2026-09-04",
        "nav": 1.884
      },
      {
        "date": "2026-09-07",
        "nav": 1.91
      },
      {
        "date": "2026-09-08",
        "nav": 1.903
      },
      {
        "date": "2026-09-09",
        "nav": 1.913
      },
      {
        "date": "2026-09-10",
        "nav": 1.893
      },
      {
        "date": "2026-09-11",
        "nav": 1.853
      },
      {
        "date": "2026-09-14",
        "nav": 1.872
      },
      {
        "date": "2026-09-15",
        "nav": 1.867
      },
      {
        "date": "2026-09-16",
        "nav": 1.913
      }
    ],
    "519965": [
      {
        "date": "2026-08-20",
        "nav": 1.3513
      },
      {
        "date": "2026-08-21",
        "nav": 1.3609
      },
      {
        "date": "2026-08-24",
        "nav": 1.3336
      },
      {
        "date": "2026-08-25",
        "nav": 1.3275
      },
      {
        "date": "2026-08-26",
        "nav": 1.3296
      },
      {
        "date": "2026-08-27",
        "nav": 1.3545
      },
      {
        "date": "2026-08-28",
        "nav": 1.3501
      },
      {
        "date": "2026-08-31",
        "nav": 1.3659
      },
      {
        "date": "2026-09-01",
        "nav": 1.3537
      },
      {
        "date": "2026-09-02",
        "nav": 1.3325
      },
      {
        "date": "2026-09-03",
        "nav": 1.341
      },
      {
        "date": "2026-09-04",
        "nav": 1.3255
      },
      {
        "date": "2026-09-07",
        "nav": 1.3428
      },
      {
        "date": "2026-09-08",
        "nav": 1.3362
      },
      {
        "date": "2026-09-09",
        "nav": 1.3423
      },
      {
        "date": "2026-09-10",
        "nav": 1.3316
      },
      {
        "date": "2026-09-11",
        "nav": 1.3127
      },
      {
        "date": "2026-09-14",
        "nav": 1.3127
      },
      {
        "date": "2026-09-15",
        "nav": 1.3088
      },
      {
        "date": "2026-09-16",
        "nav": 1.3278
      }
    ],
    "519935": [
      {
        "date": "2026-08-20",
        "nav": 3.471
      },
      {
        "date": "2026-08-21",
        "nav": 3.491
      },
      {
        "date": "2026-08-24",
        "nav": 3.387
      },
      {
        "date": "2026-08-25",
        "nav": 3.385
      },
      {
        "date": "2026-08-26",
        "nav": 3.403
      },
      {
        "date": "2026-08-27",
        "nav": 3.487
      },
      {
        "date": "2026-08-28",
        "nav": 3.437
      },
      {
        "date": "2026-08-31",
        "nav": 3.507
      },
      {
        "date": "2026-09-01",
        "nav": 3.448
      },
      {
        "date": "2026-09-02",
        "nav": 3.413
      },
      {
        "date": "2026-09-03",
        "nav": 3.41
      },
      {
        "date": "2026-09-04",
        "nav": 3.306
      },
      {
        "date": "2026-09-07",
        "nav": 3.397
      },
      {
        "date": "2026-09-08",
        "nav": 3.358
      },
      {
        "date": "2026-09-09",
        "nav": 3.349
      },
      {
        "date": "2026-09-10",
        "nav": 3.328
      },
      {
        "date": "2026-09-11",
        "nav": 3.302
      },
      {
        "date": "2026-09-14",
        "nav": 3.274
      },
      {
        "date": "2026-09-15",
        "nav": 3.292
      },
      {
        "date": "2026-09-16",
        "nav": 3.41
      }
    ],
    "519714": [
      {
        "date": "2026-08-20",
        "nav": 1.125
      },
      {
        "date": "2026-08-21",
        "nav": 1.1
      },
      {
        "date": "2026-08-24",
        "nav": 1.104
      },
      {
        "date": "2026-08-25",
        "nav": 1.107
      },
      {
        "date": "2026-08-26",
        "nav": 1.109
      },
      {
        "date": "2026-08-27",
        "nav": 1.107
      },
      {
        "date": "2026-08-28",
        "nav": 1.118
      },
      {
        "date": "2026-08-31",
        "nav": 1.115
      },
      {
        "date": "2026-09-01",
        "nav": 1.128
      },
      {
        "date": "2026-09-02",
        "nav": 1.119
      },
      {
        "date": "2026-09-03",
        "nav": 1.119
      },
      {
        "date": "2026-09-04",
        "nav": 1.137
      },
      {
        "date": "2026-09-07",
        "nav": 1.132
      },
      {
        "date": "2026-09-08",
        "nav": 1.135
      },
      {
        "date": "2026-09-09",
        "nav": 1.123
      },
      {
        "date": "2026-09-10",
        "nav": 1.105
      },
      {
        "date": "2026-09-11",
        "nav": 1.087
      },
      {
        "date": "2026-09-14",
        "nav": 1.094
      },
      {
        "date": "2026-09-15",
        "nav": 1.087
      },
      {
        "date": "2026-09-16",
        "nav": 1.084
      }
    ],
    "519673": [
      {
        "date": "2026-08-20",
        "nav": 2.484
      },
      {
        "date": "2026-08-21",
        "nav": 2.421
      },
      {
        "date": "2026-08-24",
        "nav": 2.356
      },
      {
        "date": "2026-08-25",
        "nav": 2.39
      },
      {
        "date": "2026-08-26",
        "nav": 2.385
      },
      {
        "date": "2026-08-27",
        "nav": 2.388
      },
      {
        "date": "2026-08-28",
        "nav": 2.367
      },
      {
        "date": "2026-08-31",
        "nav": 2.364
      },
      {
        "date": "2026-09-01",
        "nav": 2.382
      },
      {
        "date": "2026-09-02",
        "nav": 2.375
      },
      {
        "date": "2026-09-03",
        "nav": 2.357
      },
      {
        "date": "2026-09-04",
        "nav": 2.361
      },
      {
        "date": "2026-09-07",
        "nav": 2.371
      },
      {
        "date": "2026-09-08",
        "nav": 2.4
      },
      {
        "date": "2026-09-09",
        "nav": 2.364
      },
      {
        "date": "2026-09-10",
        "nav": 2.322
      },
      {
        "date": "2026-09-11",
        "nav": 2.273
      },
      {
        "date": "2026-09-14",
        "nav": 2.309
      },
      {
        "date": "2026-09-15",
        "nav": 2.286
      },
      {
        "date": "2026-09-16",
        "nav": 2.308
      }
    ],
    "519606": [
      {
        "date": "2026-08-20",
        "nav": 1.7934
      },
      {
        "date": "2026-08-21",
        "nav": 1.8006
      },
      {
        "date": "2026-08-24",
        "nav": 1.7724
      },
      {
        "date": "2026-08-25",
        "nav": 1.7292
      },
      {
        "date": "2026-08-26",
        "nav": 1.764
      },
      {
        "date": "2026-08-27",
        "nav": 1.8137
      },
      {
        "date": "2026-08-28",
        "nav": 1.768
      },
      {
        "date": "2026-08-31",
        "nav": 1.7766
      },
      {
        "date": "2026-09-01",
        "nav": 1.7245
      },
      {
        "date": "2026-09-02",
        "nav": 1.6917
      },
      {
        "date": "2026-09-03",
        "nav": 1.6787
      },
      {
        "date": "2026-09-04",
        "nav": 1.626
      },
      {
        "date": "2026-09-07",
        "nav": 1.7028
      },
      {
        "date": "2026-09-08",
        "nav": 1.6782
      },
      {
        "date": "2026-09-09",
        "nav": 1.6643
      },
      {
        "date": "2026-09-10",
        "nav": 1.6618
      },
      {
        "date": "2026-09-11",
        "nav": 1.6487
      },
      {
        "date": "2026-09-14",
        "nav": 1.6207
      },
      {
        "date": "2026-09-15",
        "nav": 1.6699
      },
      {
        "date": "2026-09-16",
        "nav": 1.742
      }
    ],
    "519193": [
      {
        "date": "2026-08-20",
        "nav": 1.9163
      },
      {
        "date": "2026-08-21",
        "nav": 1.9048
      },
      {
        "date": "2026-08-24",
        "nav": 1.9159
      },
      {
        "date": "2026-08-25",
        "nav": 1.9231
      },
      {
        "date": "2026-08-26",
        "nav": 1.9307
      },
      {
        "date": "2026-08-27",
        "nav": 1.9347
      },
      {
        "date": "2026-08-28",
        "nav": 1.9423
      },
      {
        "date": "2026-08-31",
        "nav": 1.9478
      },
      {
        "date": "2026-09-01",
        "nav": 1.9581
      },
      {
        "date": "2026-09-02",
        "nav": 1.9405
      },
      {
        "date": "2026-09-03",
        "nav": 1.9545
      },
      {
        "date": "2026-09-04",
        "nav": 1.9766
      },
      {
        "date": "2026-09-07",
        "nav": 1.9582
      },
      {
        "date": "2026-09-08",
        "nav": 1.9516
      },
      {
        "date": "2026-09-09",
        "nav": 1.9418
      },
      {
        "date": "2026-09-10",
        "nav": 1.9278
      },
      {
        "date": "2026-09-11",
        "nav": 1.9092
      },
      {
        "date": "2026-09-14",
        "nav": 1.9128
      },
      {
        "date": "2026-09-15",
        "nav": 1.9012
      },
      {
        "date": "2026-09-16",
        "nav": 1.8873
      }
    ],
    "501219": [
      {
        "date": "2026-08-20",
        "nav": 1.6485
      },
      {
        "date": "2026-08-21",
        "nav": 1.656
      },
      {
        "date": "2026-08-24",
        "nav": 1.6271
      },
      {
        "date": "2026-08-25",
        "nav": 1.6385
      },
      {
        "date": "2026-08-26",
        "nav": 1.6437
      },
      {
        "date": "2026-08-27",
        "nav": 1.6757
      },
      {
        "date": "2026-08-28",
        "nav": 1.6661
      },
      {
        "date": "2026-08-31",
        "nav": 1.6879
      },
      {
        "date": "2026-09-01",
        "nav": 1.6703
      },
      {
        "date": "2026-09-02",
        "nav": 1.6516
      },
      {
        "date": "2026-09-03",
        "nav": 1.654
      },
      {
        "date": "2026-09-04",
        "nav": 1.6309
      },
      {
        "date": "2026-09-07",
        "nav": 1.6616
      },
      {
        "date": "2026-09-08",
        "nav": 1.6632
      },
      {
        "date": "2026-09-09",
        "nav": 1.6671
      },
      {
        "date": "2026-09-10",
        "nav": 1.6554
      },
      {
        "date": "2026-09-11",
        "nav": 1.6331
      },
      {
        "date": "2026-09-14",
        "nav": 1.6334
      },
      {
        "date": "2026-09-15",
        "nav": 1.6276
      },
      {
        "date": "2026-09-16",
        "nav": 1.6591
      }
    ],
    "501201": [
      {
        "date": "2026-08-20",
        "nav": 2.4435
      },
      {
        "date": "2026-08-21",
        "nav": 2.4723
      },
      {
        "date": "2026-08-24",
        "nav": 2.3918
      },
      {
        "date": "2026-08-25",
        "nav": 2.357
      },
      {
        "date": "2026-08-26",
        "nav": 2.372
      },
      {
        "date": "2026-08-27",
        "nav": 2.4501
      },
      {
        "date": "2026-08-28",
        "nav": 2.3817
      },
      {
        "date": "2026-08-31",
        "nav": 2.4049
      },
      {
        "date": "2026-09-01",
        "nav": 2.3459
      },
      {
        "date": "2026-09-02",
        "nav": 2.3023
      },
      {
        "date": "2026-09-03",
        "nav": 2.3188
      },
      {
        "date": "2026-09-04",
        "nav": 2.2426
      },
      {
        "date": "2026-09-07",
        "nav": 2.4002
      },
      {
        "date": "2026-09-08",
        "nav": 2.3798
      },
      {
        "date": "2026-09-09",
        "nav": 2.3718
      },
      {
        "date": "2026-09-10",
        "nav": 2.3586
      },
      {
        "date": "2026-09-11",
        "nav": 2.3341
      },
      {
        "date": "2026-09-14",
        "nav": 2.3141
      },
      {
        "date": "2026-09-15",
        "nav": 2.3054
      },
      {
        "date": "2026-09-16",
        "nav": 2.3937
      }
    ],
    "450009": [
      {
        "date": "2026-08-20",
        "nav": 2.5684
      },
      {
        "date": "2026-08-21",
        "nav": 2.5403
      },
      {
        "date": "2026-08-24",
        "nav": 2.5321
      },
      {
        "date": "2026-08-25",
        "nav": 2.5328
      },
      {
        "date": "2026-08-26",
        "nav": 2.5673
      },
      {
        "date": "2026-08-27",
        "nav": 2.5511
      },
      {
        "date": "2026-08-28",
        "nav": 2.5613
      },
      {
        "date": "2026-08-31",
        "nav": 2.5514
      },
      {
        "date": "2026-09-01",
        "nav": 2.5728
      },
      {
        "date": "2026-09-02",
        "nav": 2.551
      },
      {
        "date": "2026-09-03",
        "nav": 2.5666
      },
      {
        "date": "2026-09-04",
        "nav": 2.5892
      },
      {
        "date": "2026-09-07",
        "nav": 2.5768
      },
      {
        "date": "2026-09-08",
        "nav": 2.5973
      },
      {
        "date": "2026-09-09",
        "nav": 2.591
      },
      {
        "date": "2026-09-10",
        "nav": 2.5869
      },
      {
        "date": "2026-09-11",
        "nav": 2.5402
      },
      {
        "date": "2026-09-14",
        "nav": 2.5448
      },
      {
        "date": "2026-09-15",
        "nav": 2.5262
      },
      {
        "date": "2026-09-16",
        "nav": 2.5238
      }
    ],
    "399011": [
      {
        "date": "2026-08-20",
        "nav": 1.135
      },
      {
        "date": "2026-08-21",
        "nav": 1.079
      },
      {
        "date": "2026-08-24",
        "nav": 1.024
      },
      {
        "date": "2026-08-25",
        "nav": 1.045
      },
      {
        "date": "2026-08-26",
        "nav": 1.045
      },
      {
        "date": "2026-08-27",
        "nav": 1.054
      },
      {
        "date": "2026-08-28",
        "nav": 1.036
      },
      {
        "date": "2026-08-31",
        "nav": 1.024
      },
      {
        "date": "2026-09-01",
        "nav": 1.016
      },
      {
        "date": "2026-09-02",
        "nav": 1.017
      },
      {
        "date": "2026-09-03",
        "nav": 1.032
      },
      {
        "date": "2026-09-04",
        "nav": 1.021
      },
      {
        "date": "2026-09-07",
        "nav": 1.017
      },
      {
        "date": "2026-09-08",
        "nav": 1.019
      },
      {
        "date": "2026-09-09",
        "nav": 0.995
      },
      {
        "date": "2026-09-10",
        "nav": 0.982
      },
      {
        "date": "2026-09-11",
        "nav": 0.963
      },
      {
        "date": "2026-09-14",
        "nav": 1.0
      },
      {
        "date": "2026-09-15",
        "nav": 0.993
      },
      {
        "date": "2026-09-16",
        "nav": 0.998
      }
    ],
    "376510": [
      {
        "date": "2026-08-20",
        "nav": 2.3479
      },
      {
        "date": "2026-08-21",
        "nav": 2.3287
      },
      {
        "date": "2026-08-24",
        "nav": 2.3454
      },
      {
        "date": "2026-08-25",
        "nav": 2.3403
      },
      {
        "date": "2026-08-26",
        "nav": 2.3469
      },
      {
        "date": "2026-08-27",
        "nav": 2.3516
      },
      {
        "date": "2026-08-28",
        "nav": 2.3544
      },
      {
        "date": "2026-08-31",
        "nav": 2.3554
      },
      {
        "date": "2026-09-01",
        "nav": 2.3658
      },
      {
        "date": "2026-09-02",
        "nav": 2.3491
      },
      {
        "date": "2026-09-03",
        "nav": 2.3571
      },
      {
        "date": "2026-09-04",
        "nav": 2.3787
      },
      {
        "date": "2026-09-07",
        "nav": 2.3454
      },
      {
        "date": "2026-09-08",
        "nav": 2.3423
      },
      {
        "date": "2026-09-09",
        "nav": 2.3454
      },
      {
        "date": "2026-09-10",
        "nav": 2.3395
      },
      {
        "date": "2026-09-11",
        "nav": 2.3113
      },
      {
        "date": "2026-09-14",
        "nav": 2.3212
      },
      {
        "date": "2026-09-15",
        "nav": 2.2982
      },
      {
        "date": "2026-09-16",
        "nav": 2.2771
      }
    ],
    "360001": [
      {
        "date": "2026-08-20",
        "nav": 1.3303
      },
      {
        "date": "2026-08-21",
        "nav": 1.3363
      },
      {
        "date": "2026-08-24",
        "nav": 1.3204
      },
      {
        "date": "2026-08-25",
        "nav": 1.319
      },
      {
        "date": "2026-08-26",
        "nav": 1.3207
      },
      {
        "date": "2026-08-27",
        "nav": 1.343
      },
      {
        "date": "2026-08-28",
        "nav": 1.3375
      },
      {
        "date": "2026-08-31",
        "nav": 1.3537
      },
      {
        "date": "2026-09-01",
        "nav": 1.3414
      },
      {
        "date": "2026-09-02",
        "nav": 1.3318
      },
      {
        "date": "2026-09-03",
        "nav": 1.3308
      },
      {
        "date": "2026-09-04",
        "nav": 1.3184
      },
      {
        "date": "2026-09-07",
        "nav": 1.3273
      },
      {
        "date": "2026-09-08",
        "nav": 1.327
      },
      {
        "date": "2026-09-09",
        "nav": 1.329
      },
      {
        "date": "2026-09-10",
        "nav": 1.3215
      },
      {
        "date": "2026-09-11",
        "nav": 1.303
      },
      {
        "date": "2026-09-14",
        "nav": 1.3066
      },
      {
        "date": "2026-09-15",
        "nav": 1.302
      },
      {
        "date": "2026-09-16",
        "nav": 1.3251
      }
    ],
    "970185": [
      {
        "date": "2026-08-20",
        "nav": 1.2884
      },
      {
        "date": "2026-08-21",
        "nav": 1.2949
      },
      {
        "date": "2026-08-24",
        "nav": 1.2741
      },
      {
        "date": "2026-08-25",
        "nav": 1.264
      },
      {
        "date": "2026-08-26",
        "nav": 1.2723
      },
      {
        "date": "2026-08-27",
        "nav": 1.2969
      },
      {
        "date": "2026-08-28",
        "nav": 1.2846
      },
      {
        "date": "2026-08-31",
        "nav": 1.2896
      },
      {
        "date": "2026-09-01",
        "nav": 1.2663
      },
      {
        "date": "2026-09-02",
        "nav": 1.2499
      },
      {
        "date": "2026-09-03",
        "nav": 1.2514
      },
      {
        "date": "2026-09-04",
        "nav": 1.2389
      },
      {
        "date": "2026-09-07",
        "nav": 1.2624
      },
      {
        "date": "2026-09-08",
        "nav": 1.2566
      },
      {
        "date": "2026-09-09",
        "nav": 1.2606
      },
      {
        "date": "2026-09-10",
        "nav": 1.2532
      },
      {
        "date": "2026-09-11",
        "nav": 1.236
      },
      {
        "date": "2026-09-14",
        "nav": 1.2353
      },
      {
        "date": "2026-09-15",
        "nav": 1.2391
      },
      {
        "date": "2026-09-16",
        "nav": 1.2518
      }
    ],
    "970184": [
      {
        "date": "2026-08-20",
        "nav": 1.3703
      },
      {
        "date": "2026-08-21",
        "nav": 1.3772
      },
      {
        "date": "2026-08-24",
        "nav": 1.3552
      },
      {
        "date": "2026-08-25",
        "nav": 1.3445
      },
      {
        "date": "2026-08-26",
        "nav": 1.3533
      },
      {
        "date": "2026-08-27",
        "nav": 1.3795
      },
      {
        "date": "2026-08-28",
        "nav": 1.3664
      },
      {
        "date": "2026-08-31",
        "nav": 1.3718
      },
      {
        "date": "2026-09-01",
        "nav": 1.347
      },
      {
        "date": "2026-09-02",
        "nav": 1.3296
      },
      {
        "date": "2026-09-03",
        "nav": 1.3311
      },
      {
        "date": "2026-09-04",
        "nav": 1.3179
      },
      {
        "date": "2026-09-07",
        "nav": 1.3429
      },
      {
        "date": "2026-09-08",
        "nav": 1.3368
      },
      {
        "date": "2026-09-09",
        "nav": 1.3411
      },
      {
        "date": "2026-09-10",
        "nav": 1.3332
      },
      {
        "date": "2026-09-11",
        "nav": 1.3149
      },
      {
        "date": "2026-09-14",
        "nav": 1.3142
      },
      {
        "date": "2026-09-15",
        "nav": 1.3183
      },
      {
        "date": "2026-09-16",
        "nav": 1.3318
      }
    ],
    "970121": [
      {
        "date": "2026-08-20",
        "nav": 1.0932
      },
      {
        "date": "2026-08-21",
        "nav": 1.0961
      },
      {
        "date": "2026-08-24",
        "nav": 1.0905
      },
      {
        "date": "2026-08-25",
        "nav": 1.0904
      },
      {
        "date": "2026-08-26",
        "nav": 1.0925
      },
      {
        "date": "2026-08-27",
        "nav": 1.0928
      },
      {
        "date": "2026-08-28",
        "nav": 1.0917
      },
      {
        "date": "2026-08-31",
        "nav": 1.0902
      },
      {
        "date": "2026-09-01",
        "nav": 1.0899
      },
      {
        "date": "2026-09-02",
        "nav": 1.0834
      },
      {
        "date": "2026-09-03",
        "nav": 1.0848
      },
      {
        "date": "2026-09-04",
        "nav": 1.0848
      },
      {
        "date": "2026-09-07",
        "nav": 1.0875
      },
      {
        "date": "2026-09-08",
        "nav": 1.0865
      },
      {
        "date": "2026-09-09",
        "nav": 1.086
      },
      {
        "date": "2026-09-10",
        "nav": 1.0833
      },
      {
        "date": "2026-09-11",
        "nav": 1.0813
      },
      {
        "date": "2026-09-14",
        "nav": 1.0813
      },
      {
        "date": "2026-09-15",
        "nav": 1.0772
      },
      {
        "date": "2026-09-16",
        "nav": 1.0786
      }
    ],
    "970119": [
      {
        "date": "2026-08-20",
        "nav": 1.0659
      },
      {
        "date": "2026-08-21",
        "nav": 1.0688
      },
      {
        "date": "2026-08-24",
        "nav": 1.0634
      },
      {
        "date": "2026-08-25",
        "nav": 1.0633
      },
      {
        "date": "2026-08-26",
        "nav": 1.0654
      },
      {
        "date": "2026-08-27",
        "nav": 1.0657
      },
      {
        "date": "2026-08-28",
        "nav": 1.0646
      },
      {
        "date": "2026-08-31",
        "nav": 1.0632
      },
      {
        "date": "2026-09-01",
        "nav": 1.0629
      },
      {
        "date": "2026-09-02",
        "nav": 1.0566
      },
      {
        "date": "2026-09-03",
        "nav": 1.058
      },
      {
        "date": "2026-09-04",
        "nav": 1.058
      },
      {
        "date": "2026-09-07",
        "nav": 1.0607
      },
      {
        "date": "2026-09-08",
        "nav": 1.0597
      },
      {
        "date": "2026-09-09",
        "nav": 1.0592
      },
      {
        "date": "2026-09-10",
        "nav": 1.0566
      },
      {
        "date": "2026-09-11",
        "nav": 1.0547
      },
      {
        "date": "2026-09-14",
        "nav": 1.0548
      },
      {
        "date": "2026-09-15",
        "nav": 1.0508
      },
      {
        "date": "2026-09-16",
        "nav": 1.0522
      }
    ],
    "970069": [
      {
        "date": "2026-08-20",
        "nav": 0.7231
      },
      {
        "date": "2026-08-21",
        "nav": 0.721
      },
      {
        "date": "2026-08-24",
        "nav": 0.7119
      },
      {
        "date": "2026-08-25",
        "nav": 0.7172
      },
      {
        "date": "2026-08-26",
        "nav": 0.7233
      },
      {
        "date": "2026-08-27",
        "nav": 0.7221
      },
      {
        "date": "2026-08-28",
        "nav": 0.7236
      },
      {
        "date": "2026-08-31",
        "nav": 0.7206
      },
      {
        "date": "2026-09-01",
        "nav": 0.7189
      },
      {
        "date": "2026-09-02",
        "nav": 0.7168
      },
      {
        "date": "2026-09-03",
        "nav": 0.7214
      },
      {
        "date": "2026-09-04",
        "nav": 0.7295
      },
      {
        "date": "2026-09-07",
        "nav": 0.7232
      },
      {
        "date": "2026-09-08",
        "nav": 0.721
      },
      {
        "date": "2026-09-09",
        "nav": 0.7173
      },
      {
        "date": "2026-09-10",
        "nav": 0.7084
      },
      {
        "date": "2026-09-11",
        "nav": 0.7021
      },
      {
        "date": "2026-09-14",
        "nav": 0.704
      },
      {
        "date": "2026-09-15",
        "nav": 0.7008
      },
      {
        "date": "2026-09-16",
        "nav": 0.6995
      }
    ],
    "970067": [
      {
        "date": "2026-08-20",
        "nav": 0.7413
      },
      {
        "date": "2026-08-21",
        "nav": 0.7392
      },
      {
        "date": "2026-08-24",
        "nav": 0.7299
      },
      {
        "date": "2026-08-25",
        "nav": 0.7353
      },
      {
        "date": "2026-08-26",
        "nav": 0.7415
      },
      {
        "date": "2026-08-27",
        "nav": 0.7403
      },
      {
        "date": "2026-08-28",
        "nav": 0.7419
      },
      {
        "date": "2026-08-31",
        "nav": 0.7388
      },
      {
        "date": "2026-09-01",
        "nav": 0.7371
      },
      {
        "date": "2026-09-02",
        "nav": 0.735
      },
      {
        "date": "2026-09-03",
        "nav": 0.7397
      },
      {
        "date": "2026-09-04",
        "nav": 0.748
      },
      {
        "date": "2026-09-07",
        "nav": 0.7415
      },
      {
        "date": "2026-09-08",
        "nav": 0.7393
      },
      {
        "date": "2026-09-09",
        "nav": 0.7355
      },
      {
        "date": "2026-09-10",
        "nav": 0.7264
      },
      {
        "date": "2026-09-11",
        "nav": 0.72
      },
      {
        "date": "2026-09-14",
        "nav": 0.722
      },
      {
        "date": "2026-09-15",
        "nav": 0.7187
      },
      {
        "date": "2026-09-16",
        "nav": 0.7174
      }
    ],
    "959991": [
      {
        "date": "2026-08-20",
        "nav": 2.7886
      },
      {
        "date": "2026-08-21",
        "nav": 2.8577
      },
      {
        "date": "2026-08-24",
        "nav": 2.7545
      },
      {
        "date": "2026-08-25",
        "nav": 2.7511
      },
      {
        "date": "2026-08-26",
        "nav": 2.7697
      },
      {
        "date": "2026-08-27",
        "nav": 2.8642
      },
      {
        "date": "2026-08-28",
        "nav": 2.8293
      },
      {
        "date": "2026-08-31",
        "nav": 2.8626
      },
      {
        "date": "2026-09-01",
        "nav": 2.8088
      },
      {
        "date": "2026-09-02",
        "nav": 2.7641
      },
      {
        "date": "2026-09-03",
        "nav": 2.7576
      },
      {
        "date": "2026-09-04",
        "nav": 2.7068
      },
      {
        "date": "2026-09-07",
        "nav": 2.8668
      },
      {
        "date": "2026-09-08",
        "nav": 2.8574
      },
      {
        "date": "2026-09-09",
        "nav": 2.8814
      },
      {
        "date": "2026-09-10",
        "nav": 2.8656
      },
      {
        "date": "2026-09-11",
        "nav": 2.8614
      },
      {
        "date": "2026-09-14",
        "nav": 2.8075
      },
      {
        "date": "2026-09-15",
        "nav": 2.8059
      },
      {
        "date": "2026-09-16",
        "nav": 2.8898
      }
    ],
    "952099": [
      {
        "date": "2026-08-20",
        "nav": 2.58
      },
      {
        "date": "2026-08-21",
        "nav": 2.5603
      },
      {
        "date": "2026-08-24",
        "nav": 2.5074
      },
      {
        "date": "2026-08-25",
        "nav": 2.5302
      },
      {
        "date": "2026-08-26",
        "nav": 2.544
      },
      {
        "date": "2026-08-27",
        "nav": 2.5656
      },
      {
        "date": "2026-08-28",
        "nav": 2.5564
      },
      {
        "date": "2026-08-31",
        "nav": 2.5673
      },
      {
        "date": "2026-09-01",
        "nav": 2.5476
      },
      {
        "date": "2026-09-02",
        "nav": 2.5142
      },
      {
        "date": "2026-09-03",
        "nav": 2.5264
      },
      {
        "date": "2026-09-04",
        "nav": 2.5079
      },
      {
        "date": "2026-09-07",
        "nav": 2.5042
      },
      {
        "date": "2026-09-08",
        "nav": 2.4929
      },
      {
        "date": "2026-09-09",
        "nav": 2.4776
      },
      {
        "date": "2026-09-10",
        "nav": 2.4475
      },
      {
        "date": "2026-09-11",
        "nav": 2.4111
      },
      {
        "date": "2026-09-14",
        "nav": 2.4172
      },
      {
        "date": "2026-09-15",
        "nav": 2.4102
      },
      {
        "date": "2026-09-16",
        "nav": 2.4277
      }
    ],
    "952035": [
      {
        "date": "2026-08-20",
        "nav": 0.7449
      },
      {
        "date": "2026-08-21",
        "nav": 0.742
      },
      {
        "date": "2026-08-24",
        "nav": 0.7318
      },
      {
        "date": "2026-08-25",
        "nav": 0.7345
      },
      {
        "date": "2026-08-26",
        "nav": 0.7366
      },
      {
        "date": "2026-08-27",
        "nav": 0.7403
      },
      {
        "date": "2026-08-28",
        "nav": 0.7403
      },
      {
        "date": "2026-08-31",
        "nav": 0.7497
      },
      {
        "date": "2026-09-01",
        "nav": 0.7519
      },
      {
        "date": "2026-09-02",
        "nav": 0.7435
      },
      {
        "date": "2026-09-03",
        "nav": 0.7433
      },
      {
        "date": "2026-09-04",
        "nav": 0.7431
      },
      {
        "date": "2026-09-07",
        "nav": 0.7365
      },
      {
        "date": "2026-09-08",
        "nav": 0.7327
      },
      {
        "date": "2026-09-09",
        "nav": 0.7292
      },
      {
        "date": "2026-09-10",
        "nav": 0.7182
      },
      {
        "date": "2026-09-11",
        "nav": 0.7067
      },
      {
        "date": "2026-09-14",
        "nav": 0.7092
      },
      {
        "date": "2026-09-15",
        "nav": 0.7057
      },
      {
        "date": "2026-09-16",
        "nav": 0.7057
      }
    ],
    "952004": [
      {
        "date": "2026-08-20",
        "nav": 4.275
      },
      {
        "date": "2026-08-21",
        "nav": 4.243
      },
      {
        "date": "2026-08-24",
        "nav": 4.1289
      },
      {
        "date": "2026-08-25",
        "nav": 4.1648
      },
      {
        "date": "2026-08-26",
        "nav": 4.1475
      },
      {
        "date": "2026-08-27",
        "nav": 4.2185
      },
      {
        "date": "2026-08-28",
        "nav": 4.1905
      },
      {
        "date": "2026-08-31",
        "nav": 4.3025
      },
      {
        "date": "2026-09-01",
        "nav": 4.2656
      },
      {
        "date": "2026-09-02",
        "nav": 4.1817
      },
      {
        "date": "2026-09-03",
        "nav": 4.1827
      },
      {
        "date": "2026-09-04",
        "nav": 4.1262
      },
      {
        "date": "2026-09-07",
        "nav": 4.1558
      },
      {
        "date": "2026-09-08",
        "nav": 4.0968
      },
      {
        "date": "2026-09-09",
        "nav": 4.0615
      },
      {
        "date": "2026-09-10",
        "nav": 4.0175
      },
      {
        "date": "2026-09-11",
        "nav": 3.9582
      },
      {
        "date": "2026-09-14",
        "nav": 3.9674
      },
      {
        "date": "2026-09-15",
        "nav": 3.9643
      },
      {
        "date": "2026-09-16",
        "nav": 4.04
      }
    ],
    "881007": [
      {
        "date": "2026-08-20",
        "nav": 0.5105
      },
      {
        "date": "2026-08-21",
        "nav": 0.5108
      },
      {
        "date": "2026-08-24",
        "nav": 0.5015
      },
      {
        "date": "2026-08-25",
        "nav": 0.4997
      },
      {
        "date": "2026-08-26",
        "nav": 0.5026
      },
      {
        "date": "2026-08-27",
        "nav": 0.5092
      },
      {
        "date": "2026-08-28",
        "nav": 0.5082
      },
      {
        "date": "2026-08-31",
        "nav": 0.5121
      },
      {
        "date": "2026-09-01",
        "nav": 0.5101
      },
      {
        "date": "2026-09-02",
        "nav": 0.5048
      },
      {
        "date": "2026-09-03",
        "nav": 0.505
      },
      {
        "date": "2026-09-04",
        "nav": 0.5026
      },
      {
        "date": "2026-09-07",
        "nav": 0.5095
      },
      {
        "date": "2026-09-08",
        "nav": 0.5072
      },
      {
        "date": "2026-09-09",
        "nav": 0.5091
      },
      {
        "date": "2026-09-10",
        "nav": 0.5066
      },
      {
        "date": "2026-09-11",
        "nav": 0.503
      },
      {
        "date": "2026-09-14",
        "nav": 0.4997
      },
      {
        "date": "2026-09-15",
        "nav": 0.4997
      },
      {
        "date": "2026-09-16",
        "nav": 0.5067
      }
    ],
    "880007": [
      {
        "date": "2026-08-20",
        "nav": 0.5202
      },
      {
        "date": "2026-08-21",
        "nav": 0.5205
      },
      {
        "date": "2026-08-24",
        "nav": 0.511
      },
      {
        "date": "2026-08-25",
        "nav": 0.5092
      },
      {
        "date": "2026-08-26",
        "nav": 0.5122
      },
      {
        "date": "2026-08-27",
        "nav": 0.5189
      },
      {
        "date": "2026-08-28",
        "nav": 0.5179
      },
      {
        "date": "2026-08-31",
        "nav": 0.5219
      },
      {
        "date": "2026-09-01",
        "nav": 0.5199
      },
      {
        "date": "2026-09-02",
        "nav": 0.5145
      },
      {
        "date": "2026-09-03",
        "nav": 0.5147
      },
      {
        "date": "2026-09-04",
        "nav": 0.5122
      },
      {
        "date": "2026-09-07",
        "nav": 0.5193
      },
      {
        "date": "2026-09-08",
        "nav": 0.5169
      },
      {
        "date": "2026-09-09",
        "nav": 0.5189
      },
      {
        "date": "2026-09-10",
        "nav": 0.5163
      },
      {
        "date": "2026-09-11",
        "nav": 0.5127
      },
      {
        "date": "2026-09-14",
        "nav": 0.5093
      },
      {
        "date": "2026-09-15",
        "nav": 0.5093
      },
      {
        "date": "2026-09-16",
        "nav": 0.5165
      }
    ],
    "770001": [
      {
        "date": "2026-08-20",
        "nav": 1.2757
      },
      {
        "date": "2026-08-21",
        "nav": 1.2759
      },
      {
        "date": "2026-08-24",
        "nav": 1.2801
      },
      {
        "date": "2026-08-25",
        "nav": 1.2779
      },
      {
        "date": "2026-08-26",
        "nav": 1.2831
      },
      {
        "date": "2026-08-27",
        "nav": 1.2862
      },
      {
        "date": "2026-08-28",
        "nav": 1.2868
      },
      {
        "date": "2026-08-31",
        "nav": 1.2913
      },
      {
        "date": "2026-09-01",
        "nav": 1.2919
      },
      {
        "date": "2026-09-02",
        "nav": 1.2841
      },
      {
        "date": "2026-09-03",
        "nav": 1.2857
      },
      {
        "date": "2026-09-04",
        "nav": 1.2868
      },
      {
        "date": "2026-09-07",
        "nav": 1.2825
      },
      {
        "date": "2026-09-08",
        "nav": 1.2824
      },
      {
        "date": "2026-09-09",
        "nav": 1.2876
      },
      {
        "date": "2026-09-10",
        "nav": 1.2868
      },
      {
        "date": "2026-09-11",
        "nav": 1.2833
      },
      {
        "date": "2026-09-14",
        "nav": 1.2829
      },
      {
        "date": "2026-09-15",
        "nav": 1.2765
      },
      {
        "date": "2026-09-16",
        "nav": 1.2724
      }
    ],
    "762001": [
      {
        "date": "2026-08-20",
        "nav": 1.1384
      },
      {
        "date": "2026-08-21",
        "nav": 1.1308
      },
      {
        "date": "2026-08-24",
        "nav": 1.1279
      },
      {
        "date": "2026-08-25",
        "nav": 1.1276
      },
      {
        "date": "2026-08-26",
        "nav": 1.131
      },
      {
        "date": "2026-08-27",
        "nav": 1.1356
      },
      {
        "date": "2026-08-28",
        "nav": 1.138
      },
      {
        "date": "2026-08-31",
        "nav": 1.1361
      },
      {
        "date": "2026-09-01",
        "nav": 1.1366
      },
      {
        "date": "2026-09-02",
        "nav": 1.1262
      },
      {
        "date": "2026-09-03",
        "nav": 1.1274
      },
      {
        "date": "2026-09-04",
        "nav": 1.1276
      },
      {
        "date": "2026-09-07",
        "nav": 1.1244
      },
      {
        "date": "2026-09-08",
        "nav": 1.1225
      },
      {
        "date": "2026-09-09",
        "nav": 1.1184
      },
      {
        "date": "2026-09-10",
        "nav": 1.1187
      },
      {
        "date": "2026-09-11",
        "nav": 1.1092
      },
      {
        "date": "2026-09-14",
        "nav": 1.1109
      },
      {
        "date": "2026-09-15",
        "nav": 1.1055
      },
      {
        "date": "2026-09-16",
        "nav": 1.1055
      }
    ],
    "750005": [
      {
        "date": "2026-08-20",
        "nav": 1.4401
      },
      {
        "date": "2026-08-21",
        "nav": 1.4528
      },
      {
        "date": "2026-08-24",
        "nav": 1.4146
      },
      {
        "date": "2026-08-25",
        "nav": 1.407
      },
      {
        "date": "2026-08-26",
        "nav": 1.4147
      },
      {
        "date": "2026-08-27",
        "nav": 1.4349
      },
      {
        "date": "2026-08-28",
        "nav": 1.4222
      },
      {
        "date": "2026-08-31",
        "nav": 1.4247
      },
      {
        "date": "2026-09-01",
        "nav": 1.4092
      },
      {
        "date": "2026-09-02",
        "nav": 1.3965
      },
      {
        "date": "2026-09-03",
        "nav": 1.4014
      },
      {
        "date": "2026-09-04",
        "nav": 1.3841
      },
      {
        "date": "2026-09-07",
        "nav": 1.3925
      },
      {
        "date": "2026-09-08",
        "nav": 1.3769
      },
      {
        "date": "2026-09-09",
        "nav": 1.3881
      },
      {
        "date": "2026-09-10",
        "nav": 1.3807
      },
      {
        "date": "2026-09-11",
        "nav": 1.3774
      },
      {
        "date": "2026-09-14",
        "nav": 1.3794
      },
      {
        "date": "2026-09-15",
        "nav": 1.3685
      },
      {
        "date": "2026-09-16",
        "nav": 1.3727
      }
    ],
    "750001": [
      {
        "date": "2026-08-20",
        "nav": 2.9879
      },
      {
        "date": "2026-08-21",
        "nav": 3.0004
      },
      {
        "date": "2026-08-24",
        "nav": 2.9896
      },
      {
        "date": "2026-08-25",
        "nav": 2.9933
      },
      {
        "date": "2026-08-26",
        "nav": 2.9999
      },
      {
        "date": "2026-08-27",
        "nav": 3.0188
      },
      {
        "date": "2026-08-28",
        "nav": 3.037
      },
      {
        "date": "2026-08-31",
        "nav": 3.0609
      },
      {
        "date": "2026-09-01",
        "nav": 3.0553
      },
      {
        "date": "2026-09-02",
        "nav": 3.0222
      },
      {
        "date": "2026-09-03",
        "nav": 3.0325
      },
      {
        "date": "2026-09-04",
        "nav": 3.0453
      },
      {
        "date": "2026-09-07",
        "nav": 3.0358
      },
      {
        "date": "2026-09-08",
        "nav": 3.036
      },
      {
        "date": "2026-09-09",
        "nav": 3.0432
      },
      {
        "date": "2026-09-10",
        "nav": 3.0329
      },
      {
        "date": "2026-09-11",
        "nav": 3.0001
      },
      {
        "date": "2026-09-14",
        "nav": 2.988
      },
      {
        "date": "2026-09-15",
        "nav": 2.9655
      },
      {
        "date": "2026-09-16",
        "nav": 2.9818
      }
    ],
    "740001": [
      {
        "date": "2026-08-20",
        "nav": 3.334
      },
      {
        "date": "2026-08-21",
        "nav": 3.362
      },
      {
        "date": "2026-08-24",
        "nav": 3.261
      },
      {
        "date": "2026-08-25",
        "nav": 3.271
      },
      {
        "date": "2026-08-26",
        "nav": 3.283
      },
      {
        "date": "2026-08-27",
        "nav": 3.383
      },
      {
        "date": "2026-08-28",
        "nav": 3.34
      },
      {
        "date": "2026-08-31",
        "nav": 3.384
      },
      {
        "date": "2026-09-01",
        "nav": 3.316
      },
      {
        "date": "2026-09-02",
        "nav": 3.275
      },
      {
        "date": "2026-09-03",
        "nav": 3.268
      },
      {
        "date": "2026-09-04",
        "nav": 3.228
      },
      {
        "date": "2026-09-07",
        "nav": 3.37
      },
      {
        "date": "2026-09-08",
        "nav": 3.341
      },
      {
        "date": "2026-09-09",
        "nav": 3.335
      },
      {
        "date": "2026-09-10",
        "nav": 3.325
      },
      {
        "date": "2026-09-11",
        "nav": 3.314
      },
      {
        "date": "2026-09-14",
        "nav": 3.251
      },
      {
        "date": "2026-09-15",
        "nav": 3.27
      },
      {
        "date": "2026-09-16",
        "nav": 3.386
      }
    ],
    "730002": [
      {
        "date": "2026-08-20",
        "nav": 1.4826
      },
      {
        "date": "2026-08-21",
        "nav": 1.4743
      },
      {
        "date": "2026-08-24",
        "nav": 1.4912
      },
      {
        "date": "2026-08-25",
        "nav": 1.4889
      },
      {
        "date": "2026-08-26",
        "nav": 1.499
      },
      {
        "date": "2026-08-27",
        "nav": 1.4864
      },
      {
        "date": "2026-08-28",
        "nav": 1.4834
      },
      {
        "date": "2026-08-31",
        "nav": 1.4973
      },
      {
        "date": "2026-09-01",
        "nav": 1.5217
      },
      {
        "date": "2026-09-02",
        "nav": 1.5166
      },
      {
        "date": "2026-09-03",
        "nav": 1.5155
      },
      {
        "date": "2026-09-04",
        "nav": 1.5209
      },
      {
        "date": "2026-09-07",
        "nav": 1.5052
      },
      {
        "date": "2026-09-08",
        "nav": 1.5123
      },
      {
        "date": "2026-09-09",
        "nav": 1.5164
      },
      {
        "date": "2026-09-10",
        "nav": 1.5293
      },
      {
        "date": "2026-09-11",
        "nav": 1.5167
      },
      {
        "date": "2026-09-14",
        "nav": 1.5269
      },
      {
        "date": "2026-09-15",
        "nav": 1.5147
      },
      {
        "date": "2026-09-16",
        "nav": 1.505
      }
    ],
    "730001": [
      {
        "date": "2026-08-20",
        "nav": 0.6403
      },
      {
        "date": "2026-08-21",
        "nav": 0.6459
      },
      {
        "date": "2026-08-24",
        "nav": 0.6298
      },
      {
        "date": "2026-08-25",
        "nav": 0.6288
      },
      {
        "date": "2026-08-26",
        "nav": 0.6241
      },
      {
        "date": "2026-08-27",
        "nav": 0.6414
      },
      {
        "date": "2026-08-28",
        "nav": 0.6283
      },
      {
        "date": "2026-08-31",
        "nav": 0.6547
      },
      {
        "date": "2026-09-01",
        "nav": 0.6436
      },
      {
        "date": "2026-09-02",
        "nav": 0.6408
      },
      {
        "date": "2026-09-03",
        "nav": 0.6403
      },
      {
        "date": "2026-09-04",
        "nav": 0.6277
      },
      {
        "date": "2026-09-07",
        "nav": 0.6364
      },
      {
        "date": "2026-09-08",
        "nav": 0.6328
      },
      {
        "date": "2026-09-09",
        "nav": 0.6244
      },
      {
        "date": "2026-09-10",
        "nav": 0.6185
      },
      {
        "date": "2026-09-11",
        "nav": 0.6087
      },
      {
        "date": "2026-09-14",
        "nav": 0.6063
      },
      {
        "date": "2026-09-15",
        "nav": 0.6018
      },
      {
        "date": "2026-09-16",
        "nav": 0.6108
      }
    ],
    "720001": [
      {
        "date": "2026-08-20",
        "nav": 14.501
      },
      {
        "date": "2026-08-21",
        "nav": 14.736
      },
      {
        "date": "2026-08-24",
        "nav": 14.105
      },
      {
        "date": "2026-08-25",
        "nav": 14.072
      },
      {
        "date": "2026-08-26",
        "nav": 14.005
      },
      {
        "date": "2026-08-27",
        "nav": 14.539
      },
      {
        "date": "2026-08-28",
        "nav": 14.316
      },
      {
        "date": "2026-08-31",
        "nav": 14.582
      },
      {
        "date": "2026-09-01",
        "nav": 14.081
      },
      {
        "date": "2026-09-02",
        "nav": 13.869
      },
      {
        "date": "2026-09-03",
        "nav": 13.902
      },
      {
        "date": "2026-09-04",
        "nav": 13.565
      },
      {
        "date": "2026-09-07",
        "nav": 14.519
      },
      {
        "date": "2026-09-08",
        "nav": 14.508
      },
      {
        "date": "2026-09-09",
        "nav": 14.557
      },
      {
        "date": "2026-09-10",
        "nav": 14.617
      },
      {
        "date": "2026-09-11",
        "nav": 14.785
      },
      {
        "date": "2026-09-14",
        "nav": 14.678
      },
      {
        "date": "2026-09-15",
        "nav": 14.776
      },
      {
        "date": "2026-09-16",
        "nav": 15.173
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 4.5896,
      "price": 4.5896,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 4.1616,
      "price": 4.1616,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.08,
      "nav": 5.9689,
      "price": 5.9689,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.16,
      "nav": 0.6912,
      "price": 0.6912,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 1.9556,
      "price": 1.9556,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.6823,
      "price": 2.6823,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 5.3538,
      "price": 5.3538,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.913,
      "price": 1.913,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.3278,
      "price": 1.3278,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 3.41,
      "price": 3.41,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.084,
      "price": 1.084,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 2.308,
      "price": 2.308,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.23,
      "nav": 1.742,
      "price": 1.742,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.8873,
      "price": 1.8873,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.6591,
      "price": 1.6591,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.3937,
      "price": 2.3937,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.5238,
      "price": 2.5238,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 0.998,
      "price": 0.998,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 2.2771,
      "price": 2.2771,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.3251,
      "price": 1.3251,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 1.59,
      "sharpe": 0.93,
      "calmar": 0.93
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.92,
      "sharpe": 0.87,
      "calmar": 0.87
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 2.33,
      "sharpe": 7.63,
      "calmar": 7.63
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 4.88,
      "sharpe": -1.3,
      "calmar": -1.3
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 7.32,
      "sharpe": -3.58,
      "calmar": -3.58
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.25,
      "sharpe": -3.78,
      "calmar": -3.78
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.56,
      "sharpe": -1.06,
      "calmar": -1.06
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.0,
      "sharpe": -0.41,
      "calmar": -0.41
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.62,
      "sharpe": -0.09,
      "calmar": -0.09
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.73,
      "sharpe": 4.57,
      "calmar": 4.57
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 5.21,
      "sharpe": -0.96,
      "calmar": -0.96
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.56,
      "sharpe": -2.22,
      "calmar": -2.22
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 7.0,
      "sharpe": -4.86,
      "calmar": -4.86
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 4.21,
      "sharpe": -0.04,
      "calmar": -0.04
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.72,
      "sharpe": -0.58,
      "calmar": -0.58
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.38,
      "sharpe": 4.04,
      "calmar": 4.04
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.88,
      "sharpe": -1.17,
      "calmar": -1.17
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.45,
      "sharpe": 0.58,
      "calmar": 0.58
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 4.37,
      "sharpe": -1.22,
      "calmar": -1.22
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.43,
      "sharpe": 0.43,
      "calmar": 0.43
    }
  ],
  "news": [
    {
      "title": "“自加入《蒙特利尔议定书》以来，中国克服诸多困难挑战，累计淘汰消耗臭氧层物质生产和使用72万吨，占发展中国家淘汰量一半以上。”2026年9月16日，生态环境部召开纪念《〈关于消耗臭氧层物质的蒙特利尔议定书〉基加利修正案》（以下简称《基加利修正案》）通过十周年暨2026年国际保护臭氧层日纪念大会，生态环境部副部长徐必久介绍。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:33",
      "impact": "neutral"
    },
    {
      "title": "宏观动态★国家医保局出台方案，启动首批全国统一医保医疗服务项目目录编制据央视新闻报道，16日，国家医保局正式印发《国家基本医疗保险医疗服务项目目录（第一批）制定工作方案》，我国将首次制定全国统一的医保医疗服务项目目录，进一步规范医保支付范围，提升保障公平性与基金使用效能。方案明确，坚持“保基本”定位，综合考量各地基金承受能力、临床实际需求，按照“分类制定、动态完善”推进。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:27",
      "impact": "neutral"
    },
    {
      "title": "近日，由证券时报社主办的“2026金融机构年会”在深圳举行。深圳市地方金融管理局副局长朱江在致辞中表示，深圳金融业处在大有可为的战略机遇期，期待更多金融机构把自身发展与深圳战略紧密结合，共享发展机遇。数据显示，在2025年增长12.1%的基础上，深圳金融业增加值2026年上半年增速达10.6%，继续领跑一线城市。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:27",
      "impact": "neutral"
    },
    {
      "title": "市十六届人大常委会第三十四次会议今天（16日）起召开，听取了《上海市开发区条例（草案）》等10项法规草案的说明及相关审议意见报告、审议结果报告，以及有关监督事项报告和人事任免事项报告。市人大常委会主任黄莉新主持全体会议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:17",
      "impact": "neutral"
    },
    {
      "title": "城厢古城图片来源：成都青白江区供图9月16日，成都市青白江区服务业高质量发展推进会召开，会上解读了《成都市青白江区“十五五”服务业发展规划》（以下简称《规划》）。据悉，青白江将锚定临港服务经济强区建设目标，立足陆港特色，推动服务业由规模扩张向能级提升、通道经济向枢纽经济转型。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:15",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道记者张敏随着新修订的《住房公积金管理条例》（以下简称《条例》）落地在即，多地进一步对公积金政策进行优化。据21世纪经济报道记者不完全统计，今年9月以来，已有超过20地出台了公积金优化政策，方向包括提高贷款额度上限、扩大使用范围、增加提取频次、支持直系亲属互提互贷等。其中，海南、天津、武汉等地对现有文件公开征求意见，从而进行制度层面的优化。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:01",
      "impact": "neutral"
    },
    {
      "title": "在国家“十五五”开局之年，香港特别行政区首次制定五年规划，主动对接国家发展战略，更好融入和服务国家发展大局。9月16日，香港特别行政区政府公布了《香港特别行政区经济和社会发展第一个五年规划（2026—2030年）》（简称《香港第一个五年规划》）。《香港第一个五年规划》共7篇28章，约6万字，共制定105个指标。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:49",
      "impact": "neutral"
    },
    {
      "title": "新华社南宁9月16日电题：平陆运河何以改变西南出海的“经济账本”新华社记者农冠斌、梁舜、陈一帆9月16日，备受瞩目的世纪工程平陆运河建成通航。西南地区货物经运河出海航程较经传统路径大幅缩短，从社会物流成本、企业经营效益到产业布局落地，运河带来的效应正逐渐显现。这是8月19日拍摄的广西钦州市景色和流经钦州市区的平陆运河（无人机全景照片）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:46",
      "impact": "neutral"
    },
    {
      "title": "聚焦关键领域，分业分类推动现代服务业扩能提质。9月16日，北京市印发《北京市现代服务业扩能提质实施方案（2026—2030年）》（以下简称《实施方案》）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:45",
      "impact": "neutral"
    },
    {
      "title": "9月16日，《香港特别行政区经济和社会发展第一个五年规划（2026—2030年）》(下称“规划”)正式公布。这是香港回归以来首份系统性中长期发展规划。第一财经记者梳理发现，在这份约6万字的发展蓝图中，正文部分“深圳（17次）”“深港（36次）”“港深（11次）”三个关键词合计出现超过60次，密集分布于创科、基建、金融、医疗、生态等几乎全部重点章节。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:43",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 55,
    "label": "中性",
    "upDownRatio": "4,381/809",
    "boardUpRatio": "0/0"
  },
  "capitalDecoder": [],
  "fundCompare": [],
  "dcaSimulator": [],
  "styleRadar": [],
  "recommendations": [],
  "technicals": [],
  "macros": [],
  "prevDayData": {}
};
