// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-08 14:22:38
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-08 14:22 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-08",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3940.55,
      "change": 7.85,
      "changePct": "+0.20%",
      "high": 3951.32,
      "low": 3925.72,
      "volume": 529992688.0,
      "amount": 915566240000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13703.21,
      "change": -71.7,
      "changePct": "-0.52%",
      "high": 13843.92,
      "low": 13655.84,
      "volume": 644275504.0,
      "amount": 1044768430000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3359.72,
      "change": -38.96,
      "changePct": "-1.15%",
      "high": 3418.48,
      "low": 3346.71,
      "volume": 167083577.0,
      "amount": 473706640000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1591.0,
      "change": -24.53,
      "changePct": "-1.52%",
      "high": 1624.69,
      "low": 1585.12,
      "volume": 6759192.0,
      "amount": 78713910000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4558.74,
      "change": -16.28,
      "changePct": "-0.36%",
      "high": 4587.73,
      "low": 4546.31,
      "volume": 173566694.0,
      "amount": 492086620000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7770.73,
      "change": 11.36,
      "changePct": "+0.15%",
      "high": 7830.16,
      "low": 7736.44,
      "volume": 166486202.0,
      "amount": 338822100000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.34万亿",
      "label": "成交额",
      "rawAmount": 3343663940000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,573/1,713",
      "label": "涨/跌家数",
      "rawUp": 2573,
      "rawDown": 1713,
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
    "totalInflow": 14.52,
    "totalOutflow": 0,
    "netFlow": 14.52,
    "netFlowTrend": [
      2.9,
      5.81,
      8.71,
      11.62,
      14.52
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
      "name": "有色",
      "inflow": 2.87,
      "pct": 1.55
    },
    {
      "name": "煤炭",
      "inflow": 2.8,
      "pct": 2.52
    },
    {
      "name": "创新药",
      "inflow": 2.17,
      "pct": 0.95
    },
    {
      "name": "银行",
      "inflow": 2.12,
      "pct": 0.48
    },
    {
      "name": "医疗",
      "inflow": 1.15,
      "pct": 1.19
    },
    {
      "name": "医药",
      "inflow": 1.03,
      "pct": 0.26
    },
    {
      "name": "军工",
      "inflow": 0.75,
      "pct": 0.96
    },
    {
      "name": "地产",
      "inflow": 0.71,
      "pct": 2.19
    },
    {
      "name": "农业",
      "inflow": 0.55,
      "pct": 1.68
    },
    {
      "name": "游戏",
      "inflow": 0.37,
      "pct": 0.09
    },
    {
      "name": "钢铁",
      "inflow": 0.27,
      "pct": 1.81
    },
    {
      "name": "光伏",
      "inflow": 0.27,
      "pct": 0.12
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.97
    },
    {
      "name": "传媒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "食品",
      "inflow": -0.05,
      "pct": -0.2
    },
    {
      "name": "新能源",
      "inflow": -0.35,
      "pct": -0.46
    },
    {
      "name": "白酒",
      "inflow": -1.02,
      "pct": -0.23
    },
    {
      "name": "券商",
      "inflow": -2.43,
      "pct": -0.57
    },
    {
      "name": "5G",
      "inflow": -3.08,
      "pct": -0.67
    },
    {
      "name": "通信",
      "inflow": -9.96,
      "pct": -0.89
    }
  ],
  "sectors": [
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.302,
      "changePct": 2.52,
      "change": 0.032,
      "turnover": 9.33
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.259,
      "changePct": 2.19,
      "change": 0.027,
      "turnover": 2.36
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.18,
      "changePct": 1.81,
      "change": 0.021,
      "turnover": 0.9
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.788,
      "changePct": 1.68,
      "change": 0.013,
      "turnover": 1.82
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.901,
      "changePct": 1.55,
      "change": 0.029,
      "turnover": 9.58
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.341,
      "changePct": 1.19,
      "change": 0.004,
      "turnover": 3.83
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.042,
      "changePct": 0.97,
      "change": 0.01,
      "turnover": 0.07
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.162,
      "changePct": 0.96,
      "change": 0.011,
      "turnover": 2.5
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.849,
      "changePct": 0.95,
      "change": 0.008,
      "turnover": 7.23
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.839,
      "changePct": 0.48,
      "change": 0.004,
      "turnover": 7.08
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.379,
      "changePct": 0.26,
      "change": 0.001,
      "turnover": 3.42
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.819,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 0.89
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.14,
      "changePct": 0.09,
      "change": 0.001,
      "turnover": 1.23
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.868,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 3.5
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.504,
      "changePct": -0.2,
      "change": -0.001,
      "turnover": 0.18
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.432,
      "changePct": -0.23,
      "change": -0.001,
      "turnover": 3.41
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.362,
      "changePct": -0.46,
      "change": -0.011,
      "turnover": 1.18
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.52,
      "changePct": -0.57,
      "change": -0.003,
      "turnover": 8.1
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.042,
      "changePct": -0.67,
      "change": -0.007,
      "turnover": 10.26
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.671,
      "changePct": -0.89,
      "change": -0.006,
      "turnover": 33.2
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.436,
      "changePct": -0.97,
      "change": -0.014,
      "turnover": 0.57
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.542,
      "changePct": -1.03,
      "change": -0.016,
      "turnover": 1.14
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.017,
      "changePct": -1.17,
      "change": -0.012,
      "turnover": 2.41
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.106,
      "changePct": -1.25,
      "change": -0.014,
      "turnover": 6.96
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.651,
      "changePct": -1.26,
      "change": -0.021,
      "turnover": 0.8
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.825,
      "changePct": -1.32,
      "change": -0.011,
      "turnover": 0.68
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.988,
      "changePct": -1.4,
      "change": -0.014,
      "turnover": 11.36
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.145,
      "changePct": -1.63,
      "change": -0.019,
      "turnover": 0.39
    }
  ],
  "etfFlow": [
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.788,
      "changePct": 0.22,
      "amount": 22.54,
      "netFlow": 5.63
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.379,
      "changePct": 0.26,
      "amount": 3.42,
      "netFlow": 0.85
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.362,
      "changePct": -0.46,
      "amount": 1.18,
      "netFlow": -0.29
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.828,
      "changePct": -0.31,
      "amount": 6.17,
      "netFlow": -1.54
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.491,
      "changePct": -0.31,
      "amount": 7.52,
      "netFlow": -1.88
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.52,
      "changePct": -0.57,
      "amount": 8.1,
      "netFlow": -2.02
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.017,
      "changePct": -0.03,
      "amount": 9.78,
      "netFlow": -2.45
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.988,
      "changePct": -1.4,
      "amount": 11.36,
      "netFlow": -2.84
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.624,
      "changePct": -0.22,
      "amount": 28.39,
      "netFlow": -7.1
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.681,
      "changePct": -1.41,
      "amount": 50.2,
      "netFlow": -12.55
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.624,
      "changePct": -0.22,
      "amount": 28.39,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.017,
      "changePct": -0.03,
      "amount": 9.78,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.788,
      "changePct": 0.22,
      "amount": 22.54,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.828,
      "changePct": -0.31,
      "amount": 6.17,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.491,
      "changePct": -0.31,
      "amount": 7.52,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "煤炭",
      "turnover": 9.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 2.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 1.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 9.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.83,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 7.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 7.08,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 0.89,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 3.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 8.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 10.26,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 33.2,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.6359,
      "ret1w": -0.58,
      "ret1m": 2.58,
      "ret3m": 4.57,
      "ret6m": -4.88,
      "ret1y": 1.78,
      "ret2y": 31.98,
      "ret3y": 173.05
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1906,
      "ret1w": -0.48,
      "ret1m": 0.72,
      "ret3m": -2.13,
      "ret6m": -13.49,
      "ret1y": 7.48,
      "ret2y": 5.35,
      "ret3y": 77.91
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.8873,
      "ret1w": -1.38,
      "ret1m": 4.34,
      "ret3m": 16.54,
      "ret6m": 2.06,
      "ret1y": 49.81,
      "ret2y": 101.99,
      "ret3y": 317.69
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7188,
      "ret1w": -0.01,
      "ret1m": -0.72,
      "ret3m": 1.18,
      "ret6m": 7.98,
      "ret1y": -8.13,
      "ret2y": -15.17,
      "ret3y": 8.37
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0687,
      "ret1w": 0.24,
      "ret1m": -2.31,
      "ret3m": -10.22,
      "ret6m": -10.22,
      "ret1y": -29.37,
      "ret2y": -29.34,
      "ret3y": 18.61
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7243,
      "ret1w": 0.89,
      "ret1m": -0.51,
      "ret3m": -3.4,
      "ret6m": -3.57,
      "ret1y": -27.99,
      "ret2y": -17.23,
      "ret3y": 37.83
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5014,
      "ret1w": -0.02,
      "ret1m": -1.38,
      "ret3m": -0.11,
      "ret6m": 3.17,
      "ret1y": -5.86,
      "ret2y": 10.08,
      "ret3y": 61.05
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.903,
      "ret1w": -0.37,
      "ret1m": -0.68,
      "ret3m": -0.37,
      "ret6m": -2.01,
      "ret1y": -3.6,
      "ret2y": 5.43,
      "ret3y": 75.39
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3362,
      "ret1w": -0.49,
      "ret1m": -1.29,
      "ret3m": -2.54,
      "ret6m": -0.68,
      "ret1y": 0.6,
      "ret2y": 8.97,
      "ret3y": 46.64
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.358,
      "ret1w": -1.15,
      "ret1m": -2.61,
      "ret3m": -5.22,
      "ret6m": 0.84,
      "ret1y": 29.95,
      "ret2y": 78.43,
      "ret3y": 299.76
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.135,
      "ret1w": 0.27,
      "ret1m": 0.62,
      "ret3m": 1.61,
      "ret6m": 8.3,
      "ret1y": -3.32,
      "ret2y": -15.99,
      "ret3y": 7.58
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.4,
      "ret1w": 1.22,
      "ret1m": 0.76,
      "ret3m": -1.28,
      "ret6m": 7.24,
      "ret1y": -12.5,
      "ret2y": -14.32,
      "ret3y": 37.69
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6782,
      "ret1w": -1.44,
      "ret1m": -2.68,
      "ret3m": -7.44,
      "ret6m": -34.35,
      "ret1y": -49.8,
      "ret2y": -34.4,
      "ret3y": 26.66
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9516,
      "ret1w": -0.34,
      "ret1m": -0.33,
      "ret3m": 1.33,
      "ret6m": 8.67,
      "ret1y": 0.87,
      "ret2y": -2.46,
      "ret3y": 10.79
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6632,
      "ret1w": 0.1,
      "ret1m": -0.43,
      "ret3m": 0.34,
      "ret6m": -1.44,
      "ret1y": -3.82,
      "ret2y": 10.34,
      "ret3y": 77.65
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3798,
      "ret1w": -0.85,
      "ret1m": 1.45,
      "ret3m": -0.02,
      "ret6m": -15.44,
      "ret1y": 28.24,
      "ret2y": 88.89,
      "ret3y": 244.45
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5973,
      "ret1w": 0.8,
      "ret1m": 0.95,
      "ret3m": 2.62,
      "ret6m": 2.21,
      "ret1y": -6.75,
      "ret2y": -3.57,
      "ret3y": 27.69
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.019,
      "ret1w": 0.2,
      "ret1m": 0.3,
      "ret3m": -7.11,
      "ret6m": 21.6,
      "ret1y": 4.73,
      "ret2y": -17.76,
      "ret3y": 6.81
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3423,
      "ret1w": -0.13,
      "ret1m": -0.99,
      "ret3m": 0.69,
      "ret6m": 2.58,
      "ret1y": -6.78,
      "ret2y": 4.95,
      "ret3y": 18.25
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.327,
      "ret1w": -0.02,
      "ret1m": -1.07,
      "ret3m": 1.03,
      "ret6m": 7.1,
      "ret1y": 1.61,
      "ret2y": 19.6,
      "ret3y": 84.02
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2566,
      "ret1w": -0.46,
      "ret1m": -0.77,
      "ret3m": -3.96,
      "ret6m": -5.6,
      "ret1y": -6.69,
      "ret2y": 13.43,
      "ret3y": 51.82
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3368,
      "ret1w": -0.45,
      "ret1m": -0.76,
      "ret3m": -3.92,
      "ret6m": -5.51,
      "ret1y": -6.51,
      "ret2y": 13.87,
      "ret3y": 53.04
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0865,
      "ret1w": -0.09,
      "ret1m": -0.31,
      "ret3m": -1.13,
      "ret6m": -1.58,
      "ret1y": 0.17,
      "ret2y": 1.02,
      "ret3y": 8.68
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0597,
      "ret1w": -0.09,
      "ret1m": -0.3,
      "ret3m": -1.08,
      "ret6m": -1.43,
      "ret1y": 0.46,
      "ret2y": 1.63,
      "ret3y": 10.0
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.721,
      "ret1w": -0.3,
      "ret1m": 0.29,
      "ret3m": -1.21,
      "ret6m": -0.92,
      "ret1y": -11.01,
      "ret2y": -8.41,
      "ret3y": 14.97
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7393,
      "ret1w": -0.3,
      "ret1m": 0.3,
      "ret3m": -1.16,
      "ret6m": -0.79,
      "ret1y": -10.78,
      "ret2y": -7.96,
      "ret3y": 16.11
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8574,
      "ret1w": -0.33,
      "ret1m": 1.73,
      "ret3m": 0.89,
      "ret6m": -6.31,
      "ret1y": 36.11,
      "ret2y": 70.91,
      "ret3y": 174.94
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4929,
      "ret1w": -0.45,
      "ret1m": -2.15,
      "ret3m": -2.57,
      "ret6m": 2.95,
      "ret1y": 1.33,
      "ret2y": 20.6,
      "ret3y": 89.27
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7327,
      "ret1w": -0.52,
      "ret1m": -2.55,
      "ret3m": -2.31,
      "ret6m": -8.56,
      "ret1y": -15.49,
      "ret2y": -10.25,
      "ret3y": 18.96
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0968,
      "ret1w": -1.42,
      "ret1m": -3.96,
      "ret3m": -4.18,
      "ret6m": -0.34,
      "ret1y": 16.19,
      "ret2y": 38.86,
      "ret3y": 145.46
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5072,
      "ret1w": -0.45,
      "ret1m": -0.57,
      "ret3m": -3.34,
      "ret6m": -3.08,
      "ret1y": -4.32,
      "ret2y": 12.89,
      "ret3y": 56.11
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5169,
      "ret1w": -0.46,
      "ret1m": -0.58,
      "ret3m": -3.31,
      "ret6m": -3.0,
      "ret1y": -4.14,
      "ret2y": 13.33,
      "ret3y": 57.35
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2824,
      "ret1w": -0.01,
      "ret1m": -0.74,
      "ret3m": 0.6,
      "ret6m": 0.61,
      "ret1y": -0.69,
      "ret2y": -0.33,
      "ret3y": 1.45
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1225,
      "ret1w": -0.17,
      "ret1m": -1.24,
      "ret3m": -2.29,
      "ret6m": 5.61,
      "ret1y": -7.23,
      "ret2y": -1.92,
      "ret3y": 18.79
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3769,
      "ret1w": -1.12,
      "ret1m": -2.29,
      "ret3m": -5.05,
      "ret6m": -11.14,
      "ret1y": -8.13,
      "ret2y": -15.97,
      "ret3y": 15.1
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.036,
      "ret1w": 0.01,
      "ret1m": -0.63,
      "ret3m": 1.16,
      "ret6m": -1.2,
      "ret1y": -7.59,
      "ret2y": 10.71,
      "ret3y": 54.72
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.341,
      "ret1w": -0.86,
      "ret1m": 0.75,
      "ret3m": -2.76,
      "ret6m": -16.83,
      "ret1y": 32.58,
      "ret2y": 78.95,
      "ret3y": 211.95
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5123,
      "ret1w": 0.47,
      "ret1m": -0.62,
      "ret3m": 3.48,
      "ret6m": 4.05,
      "ret1y": 0.84,
      "ret2y": 0.11,
      "ret3y": 14.78
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6328,
      "ret1w": -0.57,
      "ret1m": -1.68,
      "ret3m": -4.96,
      "ret6m": -17.58,
      "ret1y": -10.36,
      "ret2y": 6.44,
      "ret3y": 54.79
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.508,
      "ret1w": -0.08,
      "ret1m": 3.03,
      "ret3m": -2.09,
      "ret6m": -2.66,
      "ret1y": 71.25,
      "ret2y": 127.93,
      "ret3y": 387.83
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": 0.03,
      "ret1m": -0.02,
      "ret3m": -0.1,
      "ret6m": -0.86,
      "ret1y": -0.14,
      "ret2y": 1.27,
      "ret3y": 4.88
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1156,
      "ret1w": 0.03,
      "ret1m": -0.01,
      "ret3m": -0.08,
      "ret6m": -0.8,
      "ret1y": -0.01,
      "ret2y": 1.56,
      "ret3y": 5.59
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0648,
      "ret1w": 0.03,
      "ret1m": 0.07,
      "ret3m": 0.09,
      "ret6m": 0.27,
      "ret1y": 0.72,
      "ret2y": 1.53,
      "ret3y": 2.69
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0991,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.12,
      "ret6m": 0.27,
      "ret1y": 0.76,
      "ret2y": 1.5,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1085,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.32,
      "ret1y": 0.86,
      "ret2y": 1.69,
      "ret3y": 4.28
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0762,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.08,
      "ret6m": 0.3,
      "ret1y": 0.69,
      "ret2y": 1.42,
      "ret3y": 2.75
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0907,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.37,
      "ret1y": 0.85,
      "ret2y": 1.73,
      "ret3y": 3.4
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0664,
      "ret1w": -0.05,
      "ret1m": -0.37,
      "ret3m": -0.5,
      "ret6m": -0.7,
      "ret1y": 0.88,
      "ret2y": 5.79,
      "ret3y": 13.41
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.223,
      "ret1w": 0.05,
      "ret1m": -0.17,
      "ret3m": 0.15,
      "ret6m": -1.05,
      "ret1y": 0.46,
      "ret2y": 3.05,
      "ret3y": 8.16
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0731,
      "ret1w": -0.06,
      "ret1m": -0.37,
      "ret3m": -0.48,
      "ret6m": -0.6,
      "ret1y": 1.08,
      "ret2y": 6.2,
      "ret3y": 14.32
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0462,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.15,
      "ret6m": 0.34,
      "ret1y": 0.86,
      "ret2y": 1.73,
      "ret3y": 3.59
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1706,
      "ret1w": 0.0,
      "ret1m": 0.25,
      "ret3m": -0.09,
      "ret6m": -2.83,
      "ret1y": -3.42,
      "ret2y": 0.42,
      "ret3y": 10.61
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2148,
      "ret1w": -0.06,
      "ret1m": -0.3,
      "ret3m": -0.44,
      "ret6m": -0.43,
      "ret1y": -0.76,
      "ret2y": 3.38,
      "ret3y": 15.35
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1369,
      "ret1w": 0.03,
      "ret1m": -0.22,
      "ret3m": -0.59,
      "ret6m": -0.49,
      "ret1y": 0.64,
      "ret2y": 3.29,
      "ret3y": 10.35
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2083,
      "ret1w": 0.03,
      "ret1m": -0.21,
      "ret3m": -0.55,
      "ret6m": -0.39,
      "ret1y": 0.84,
      "ret2y": 3.72,
      "ret3y": 11.27
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.418,
      "ret1w": 3.78,
      "ret1m": 3.55,
      "ret3m": 3.91,
      "ret6m": -10.34,
      "ret1y": 42.91,
      "ret2y": 102.17,
      "ret3y": 161.97
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9957,
      "ret1w": -0.08,
      "ret1m": 0.38,
      "ret3m": 0.37,
      "ret6m": 3.76,
      "ret1y": 10.34,
      "ret2y": 8.69,
      "ret3y": 40.2
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8774,
      "ret1w": -0.72,
      "ret1m": -0.58,
      "ret3m": -2.44,
      "ret6m": -8.83,
      "ret1y": -9.2,
      "ret2y": 3.7,
      "ret3y": 59.26
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4075,
      "ret1w": 0.0,
      "ret1m": 0.22,
      "ret3m": 1.92,
      "ret6m": 5.4,
      "ret1y": 24.6,
      "ret2y": 31.12,
      "ret3y": 90.36
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9353,
      "ret1w": 0.04,
      "ret1m": -0.09,
      "ret3m": -0.35,
      "ret6m": -0.6,
      "ret1y": -2.61,
      "ret2y": -4.03,
      "ret3y": -1.75
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6813,
      "ret1w": 1.18,
      "ret1m": 2.3,
      "ret3m": 1.1,
      "ret6m": -1.87,
      "ret1y": 33.93,
      "ret2y": 54.5,
      "ret3y": 114.85
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.635,
      "ret1w": 0.11,
      "ret1m": 0.43,
      "ret3m": -0.19,
      "ret6m": 1.27,
      "ret1y": 6.9,
      "ret2y": 7.84,
      "ret3y": 27.2
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.232,
      "ret1w": -0.73,
      "ret1m": -0.16,
      "ret3m": -2.07,
      "ret6m": 13.44,
      "ret1y": -2.76,
      "ret2y": -23.95,
      "ret3y": 109.52
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.963,
      "ret1w": 0.52,
      "ret1m": 0.31,
      "ret3m": 1.16,
      "ret6m": 7.84,
      "ret1y": -5.68,
      "ret2y": -19.41,
      "ret3y": 50.0
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9239,
      "ret1w": 2.83,
      "ret1m": 2.77,
      "ret3m": 4.27,
      "ret6m": -4.16,
      "ret1y": 40.03,
      "ret2y": 82.98,
      "ret3y": 159.67
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6293,
      "ret1w": 0.13,
      "ret1m": 0.18,
      "ret3m": 8.13,
      "ret6m": 10.21,
      "ret1y": 6.11,
      "ret2y": 39.81,
      "ret3y": 67.31
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7771,
      "ret1w": 1.18,
      "ret1m": 2.71,
      "ret3m": 6.06,
      "ret6m": 5.3,
      "ret1y": 16.37,
      "ret2y": 34.28,
      "ret3y": 66.46
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3504,
      "ret1w": 1.24,
      "ret1m": 1.48,
      "ret3m": 4.71,
      "ret6m": 0.02,
      "ret1y": 9.48,
      "ret2y": 21.42,
      "ret3y": 46.43
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.291,
      "ret1w": 0.0,
      "ret1m": -0.62,
      "ret3m": -2.79,
      "ret6m": -2.42,
      "ret1y": 0.86,
      "ret2y": 3.36,
      "ret3y": -7.54
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.115,
      "ret1w": -0.24,
      "ret1m": -0.38,
      "ret3m": 1.49,
      "ret6m": 1.1,
      "ret1y": -15.26,
      "ret2y": 14.51,
      "ret3y": 57.38
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0114,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.44,
      "ret1y": 1.41,
      "ret2y": 2.13,
      "ret3y": 3.56
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0104,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.16,
      "ret6m": 0.43,
      "ret1y": 1.43,
      "ret2y": 2.19,
      "ret3y": 3.74
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.407,
      "ret1w": -0.64,
      "ret1m": -0.92,
      "ret3m": -4.29,
      "ret6m": -6.7,
      "ret1y": -1.95,
      "ret2y": 0.5,
      "ret3y": 38.08
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.811,
      "ret1w": -0.57,
      "ret1m": -1.2,
      "ret3m": -3.7,
      "ret6m": -4.03,
      "ret1y": -1.92,
      "ret2y": 10.84,
      "ret3y": 65.55
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6937,
      "ret1w": 1.6,
      "ret1m": -1.71,
      "ret3m": -1.8,
      "ret6m": 3.95,
      "ret1y": -12.33,
      "ret2y": 27.76,
      "ret3y": 79.8
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1287,
      "ret1w": -0.22,
      "ret1m": -1.13,
      "ret3m": -1.64,
      "ret6m": -0.04,
      "ret1y": 1.18,
      "ret2y": 10.19,
      "ret3y": 46.66
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1898,
      "ret1w": -0.22,
      "ret1m": -1.12,
      "ret3m": -1.6,
      "ret6m": 0.06,
      "ret1y": 1.38,
      "ret2y": 10.64,
      "ret3y": 47.85
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0051,
      "ret1w": 0.14,
      "ret1m": -1.05,
      "ret3m": -2.58,
      "ret6m": -2.09,
      "ret1y": -6.2,
      "ret2y": 11.38,
      "ret3y": 69.79
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7803,
      "ret1w": -0.34,
      "ret1m": -1.09,
      "ret3m": -2.67,
      "ret6m": -2.56,
      "ret1y": -1.21,
      "ret2y": 3.23,
      "ret3y": 42.39
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5895,
      "ret1w": 0.4,
      "ret1m": -0.49,
      "ret3m": -0.74,
      "ret6m": 0.81,
      "ret1y": -7.89,
      "ret2y": 11.18,
      "ret3y": 60.67
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9426,
      "ret1w": -0.69,
      "ret1m": -1.2,
      "ret3m": -5.86,
      "ret6m": -8.03,
      "ret1y": 7.61,
      "ret2y": 14.26,
      "ret3y": 78.48
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1503,
      "ret1w": -0.32,
      "ret1m": -1.57,
      "ret3m": -0.96,
      "ret6m": 3.29,
      "ret1y": -0.76,
      "ret2y": 0.58,
      "ret3y": 31.98
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5251,
      "ret1w": -0.09,
      "ret1m": null,
      "ret3m": -0.29,
      "ret6m": 4.32,
      "ret1y": 4.97,
      "ret2y": 13.0,
      "ret3y": 31.21
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4516,
      "ret1w": 0.21,
      "ret1m": 0.31,
      "ret3m": -0.75,
      "ret6m": -3.11,
      "ret1y": 14.45,
      "ret2y": 16.85,
      "ret3y": 43.22
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7401,
      "ret1w": -0.64,
      "ret1m": -0.93,
      "ret3m": -3.72,
      "ret6m": -7.39,
      "ret1y": 2.6,
      "ret2y": 8.38,
      "ret3y": 61.38
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1592,
      "ret1w": -0.95,
      "ret1m": -2.95,
      "ret3m": 1.24,
      "ret6m": -11.1,
      "ret1y": -0.13,
      "ret2y": 9.47,
      "ret3y": 52.77
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1612,
      "ret1w": -0.94,
      "ret1m": -2.93,
      "ret3m": 1.26,
      "ret6m": -11.03,
      "ret1y": -0.14,
      "ret2y": 9.62,
      "ret3y": 52.25
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3976,
      "ret1w": 1.19,
      "ret1m": -1.45,
      "ret3m": -1.81,
      "ret6m": -8.81,
      "ret1y": -5.24,
      "ret2y": 2.64,
      "ret3y": 42.64
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4296,
      "ret1w": 1.18,
      "ret1m": -1.44,
      "ret3m": -1.79,
      "ret6m": -8.72,
      "ret1y": -5.05,
      "ret2y": 3.06,
      "ret3y": 43.79
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0117,
      "ret1w": 2.16,
      "ret1m": -1.85,
      "ret3m": -2.4,
      "ret6m": -12.63,
      "ret1y": -0.5,
      "ret2y": 9.27,
      "ret3y": 66.82
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1643,
      "ret1w": -0.02,
      "ret1m": -0.2,
      "ret3m": -0.57,
      "ret6m": -0.19,
      "ret1y": -0.17,
      "ret2y": 1.63,
      "ret3y": 7.72
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1842,
      "ret1w": -0.02,
      "ret1m": -0.19,
      "ret3m": -0.55,
      "ret6m": -0.12,
      "ret1y": -0.03,
      "ret2y": 1.94,
      "ret3y": 8.36
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0848,
      "ret1w": 0.03,
      "ret1m": 0.07,
      "ret3m": 0.12,
      "ret6m": 0.34,
      "ret1y": 0.87,
      "ret2y": 1.83,
      "ret3y": 3.27
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4098,
      "ret1w": -0.01,
      "ret1m": -0.01,
      "ret3m": -0.09,
      "ret6m": -0.01,
      "ret1y": 0.05,
      "ret2y": 0.57,
      "ret3y": 10.86
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4621,
      "ret1w": -0.01,
      "ret1m": 0.0,
      "ret3m": -0.05,
      "ret6m": 0.08,
      "ret1y": 0.25,
      "ret2y": 0.97,
      "ret3y": 11.75
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1087,
      "ret1w": -0.24,
      "ret1m": -0.2,
      "ret3m": -2.04,
      "ret6m": 2.46,
      "ret1y": 11.49,
      "ret2y": 21.93,
      "ret3y": 66.97
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2397,
      "ret1w": -0.19,
      "ret1m": -0.93,
      "ret3m": -2.33,
      "ret6m": 0.68,
      "ret1y": 4.93,
      "ret2y": 8.48,
      "ret3y": 50.01
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-08-12",
        "nav": 4.4754
      },
      {
        "date": "2026-08-13",
        "nav": 4.4374
      },
      {
        "date": "2026-08-14",
        "nav": 4.4847
      },
      {
        "date": "2026-08-17",
        "nav": 4.7172
      },
      {
        "date": "2026-08-18",
        "nav": 4.7149
      },
      {
        "date": "2026-08-19",
        "nav": 4.3366
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-08-12",
        "nav": 4.2725
      },
      {
        "date": "2026-08-13",
        "nav": 4.2195
      },
      {
        "date": "2026-08-14",
        "nav": 4.2765
      },
      {
        "date": "2026-08-17",
        "nav": 4.4742
      },
      {
        "date": "2026-08-18",
        "nav": 4.4359
      },
      {
        "date": "2026-08-19",
        "nav": 4.1719
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-08-12",
        "nav": 5.3112
      },
      {
        "date": "2026-08-13",
        "nav": 5.4027
      },
      {
        "date": "2026-08-14",
        "nav": 5.5859
      },
      {
        "date": "2026-08-17",
        "nav": 5.9244
      },
      {
        "date": "2026-08-18",
        "nav": 5.9822
      },
      {
        "date": "2026-08-19",
        "nav": 5.5797
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-08-12",
        "nav": 0.7183
      },
      {
        "date": "2026-08-13",
        "nav": 0.7126
      },
      {
        "date": "2026-08-14",
        "nav": 0.7063
      },
      {
        "date": "2026-08-17",
        "nav": 0.7032
      },
      {
        "date": "2026-08-18",
        "nav": 0.7063
      },
      {
        "date": "2026-08-19",
        "nav": 0.7023
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-08-12",
        "nav": 2.3334
      },
      {
        "date": "2026-08-13",
        "nav": 2.2664
      },
      {
        "date": "2026-08-14",
        "nav": 2.2533
      },
      {
        "date": "2026-08-17",
        "nav": 2.2808
      },
      {
        "date": "2026-08-18",
        "nav": 2.2702
      },
      {
        "date": "2026-08-19",
        "nav": 2.1912
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-08-12",
        "nav": 2.8351
      },
      {
        "date": "2026-08-13",
        "nav": 2.7688
      },
      {
        "date": "2026-08-14",
        "nav": 2.7457
      },
      {
        "date": "2026-08-17",
        "nav": 2.7763
      },
      {
        "date": "2026-08-18",
        "nav": 2.7548
      },
      {
        "date": "2026-08-19",
        "nav": 2.6967
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-08-12",
        "nav": 5.5916
      },
      {
        "date": "2026-08-13",
        "nav": 5.5231
      },
      {
        "date": "2026-08-14",
        "nav": 5.4958
      },
      {
        "date": "2026-08-17",
        "nav": 5.5427
      },
      {
        "date": "2026-08-18",
        "nav": 5.5481
      },
      {
        "date": "2026-08-19",
        "nav": 5.4935
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-08-12",
        "nav": 1.917
      },
      {
        "date": "2026-08-13",
        "nav": 1.898
      },
      {
        "date": "2026-08-14",
        "nav": 1.92
      },
      {
        "date": "2026-08-17",
        "nav": 1.985
      },
      {
        "date": "2026-08-18",
        "nav": 1.994
      },
      {
        "date": "2026-08-19",
        "nav": 1.896
      },
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
      }
    ],
    "519965": [
      {
        "date": "2026-08-12",
        "nav": 1.376
      },
      {
        "date": "2026-08-13",
        "nav": 1.3642
      },
      {
        "date": "2026-08-14",
        "nav": 1.3768
      },
      {
        "date": "2026-08-17",
        "nav": 1.4147
      },
      {
        "date": "2026-08-18",
        "nav": 1.4142
      },
      {
        "date": "2026-08-19",
        "nav": 1.3532
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-08-12",
        "nav": 3.538
      },
      {
        "date": "2026-08-13",
        "nav": 3.569
      },
      {
        "date": "2026-08-14",
        "nav": 3.595
      },
      {
        "date": "2026-08-17",
        "nav": 3.738
      },
      {
        "date": "2026-08-18",
        "nav": 3.72
      },
      {
        "date": "2026-08-19",
        "nav": 3.46
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-08-12",
        "nav": 1.157
      },
      {
        "date": "2026-08-13",
        "nav": 1.151
      },
      {
        "date": "2026-08-14",
        "nav": 1.141
      },
      {
        "date": "2026-08-17",
        "nav": 1.135
      },
      {
        "date": "2026-08-18",
        "nav": 1.143
      },
      {
        "date": "2026-08-19",
        "nav": 1.123
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-08-12",
        "nav": 2.486
      },
      {
        "date": "2026-08-13",
        "nav": 2.499
      },
      {
        "date": "2026-08-14",
        "nav": 2.499
      },
      {
        "date": "2026-08-17",
        "nav": 2.487
      },
      {
        "date": "2026-08-18",
        "nav": 2.464
      },
      {
        "date": "2026-08-19",
        "nav": 2.391
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-08-12",
        "nav": 1.8591
      },
      {
        "date": "2026-08-13",
        "nav": 1.8229
      },
      {
        "date": "2026-08-14",
        "nav": 1.8213
      },
      {
        "date": "2026-08-17",
        "nav": 1.9149
      },
      {
        "date": "2026-08-18",
        "nav": 1.9445
      },
      {
        "date": "2026-08-19",
        "nav": 1.7919
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-08-12",
        "nav": 1.9495
      },
      {
        "date": "2026-08-13",
        "nav": 1.9482
      },
      {
        "date": "2026-08-14",
        "nav": 1.9337
      },
      {
        "date": "2026-08-17",
        "nav": 1.9217
      },
      {
        "date": "2026-08-18",
        "nav": 1.9245
      },
      {
        "date": "2026-08-19",
        "nav": 1.9152
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-08-12",
        "nav": 1.677
      },
      {
        "date": "2026-08-13",
        "nav": 1.6649
      },
      {
        "date": "2026-08-14",
        "nav": 1.6773
      },
      {
        "date": "2026-08-17",
        "nav": 1.7202
      },
      {
        "date": "2026-08-18",
        "nav": 1.7168
      },
      {
        "date": "2026-08-19",
        "nav": 1.6362
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-08-12",
        "nav": 2.4289
      },
      {
        "date": "2026-08-13",
        "nav": 2.4284
      },
      {
        "date": "2026-08-14",
        "nav": 2.4815
      },
      {
        "date": "2026-08-17",
        "nav": 2.6013
      },
      {
        "date": "2026-08-18",
        "nav": 2.6156
      },
      {
        "date": "2026-08-19",
        "nav": 2.4033
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-08-12",
        "nav": 2.5669
      },
      {
        "date": "2026-08-13",
        "nav": 2.5419
      },
      {
        "date": "2026-08-14",
        "nav": 2.5281
      },
      {
        "date": "2026-08-17",
        "nav": 2.5392
      },
      {
        "date": "2026-08-18",
        "nav": 2.5444
      },
      {
        "date": "2026-08-19",
        "nav": 2.5399
      },
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
      }
    ],
    "399011": [
      {
        "date": "2026-08-12",
        "nav": 1.099
      },
      {
        "date": "2026-08-13",
        "nav": 1.107
      },
      {
        "date": "2026-08-14",
        "nav": 1.099
      },
      {
        "date": "2026-08-17",
        "nav": 1.122
      },
      {
        "date": "2026-08-18",
        "nav": 1.109
      },
      {
        "date": "2026-08-19",
        "nav": 1.078
      },
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
      }
    ],
    "376510": [
      {
        "date": "2026-08-12",
        "nav": 2.3418
      },
      {
        "date": "2026-08-13",
        "nav": 2.3323
      },
      {
        "date": "2026-08-14",
        "nav": 2.3158
      },
      {
        "date": "2026-08-17",
        "nav": 2.3076
      },
      {
        "date": "2026-08-18",
        "nav": 2.3139
      },
      {
        "date": "2026-08-19",
        "nav": 2.3346
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-08-12",
        "nav": 1.3282
      },
      {
        "date": "2026-08-13",
        "nav": 1.3174
      },
      {
        "date": "2026-08-14",
        "nav": 1.3244
      },
      {
        "date": "2026-08-17",
        "nav": 1.3581
      },
      {
        "date": "2026-08-18",
        "nav": 1.363
      },
      {
        "date": "2026-08-19",
        "nav": 1.3152
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-08-12",
        "nav": 1.3147
      },
      {
        "date": "2026-08-13",
        "nav": 1.301
      },
      {
        "date": "2026-08-14",
        "nav": 1.3089
      },
      {
        "date": "2026-08-17",
        "nav": 1.3472
      },
      {
        "date": "2026-08-18",
        "nav": 1.3515
      },
      {
        "date": "2026-08-19",
        "nav": 1.2859
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-08-12",
        "nav": 1.3982
      },
      {
        "date": "2026-08-13",
        "nav": 1.3836
      },
      {
        "date": "2026-08-14",
        "nav": 1.392
      },
      {
        "date": "2026-08-17",
        "nav": 1.4329
      },
      {
        "date": "2026-08-18",
        "nav": 1.4374
      },
      {
        "date": "2026-08-19",
        "nav": 1.3676
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-08-12",
        "nav": 1.0971
      },
      {
        "date": "2026-08-13",
        "nav": 1.0951
      },
      {
        "date": "2026-08-14",
        "nav": 1.0953
      },
      {
        "date": "2026-08-17",
        "nav": 1.1012
      },
      {
        "date": "2026-08-18",
        "nav": 1.1006
      },
      {
        "date": "2026-08-19",
        "nav": 1.0935
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-08-12",
        "nav": 1.0696
      },
      {
        "date": "2026-08-13",
        "nav": 1.0677
      },
      {
        "date": "2026-08-14",
        "nav": 1.0679
      },
      {
        "date": "2026-08-17",
        "nav": 1.0737
      },
      {
        "date": "2026-08-18",
        "nav": 1.0731
      },
      {
        "date": "2026-08-19",
        "nav": 1.0662
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-08-12",
        "nav": 0.7369
      },
      {
        "date": "2026-08-13",
        "nav": 0.7306
      },
      {
        "date": "2026-08-14",
        "nav": 0.7251
      },
      {
        "date": "2026-08-17",
        "nav": 0.7322
      },
      {
        "date": "2026-08-18",
        "nav": 0.7304
      },
      {
        "date": "2026-08-19",
        "nav": 0.7214
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-08-12",
        "nav": 0.7554
      },
      {
        "date": "2026-08-13",
        "nav": 0.7489
      },
      {
        "date": "2026-08-14",
        "nav": 0.7432
      },
      {
        "date": "2026-08-17",
        "nav": 0.7506
      },
      {
        "date": "2026-08-18",
        "nav": 0.7488
      },
      {
        "date": "2026-08-19",
        "nav": 0.7395
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-08-12",
        "nav": 2.833
      },
      {
        "date": "2026-08-13",
        "nav": 2.8294
      },
      {
        "date": "2026-08-14",
        "nav": 2.8768
      },
      {
        "date": "2026-08-17",
        "nav": 2.9779
      },
      {
        "date": "2026-08-18",
        "nav": 2.9525
      },
      {
        "date": "2026-08-19",
        "nav": 2.7629
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-08-12",
        "nav": 2.5834
      },
      {
        "date": "2026-08-13",
        "nav": 2.567
      },
      {
        "date": "2026-08-14",
        "nav": 2.5742
      },
      {
        "date": "2026-08-17",
        "nav": 2.6304
      },
      {
        "date": "2026-08-18",
        "nav": 2.6318
      },
      {
        "date": "2026-08-19",
        "nav": 2.5513
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-08-12",
        "nav": 0.7573
      },
      {
        "date": "2026-08-13",
        "nav": 0.7504
      },
      {
        "date": "2026-08-14",
        "nav": 0.7536
      },
      {
        "date": "2026-08-17",
        "nav": 0.7725
      },
      {
        "date": "2026-08-18",
        "nav": 0.7712
      },
      {
        "date": "2026-08-19",
        "nav": 0.74
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-08-12",
        "nav": 4.3277
      },
      {
        "date": "2026-08-13",
        "nav": 4.3167
      },
      {
        "date": "2026-08-14",
        "nav": 4.3423
      },
      {
        "date": "2026-08-17",
        "nav": 4.4707
      },
      {
        "date": "2026-08-18",
        "nav": 4.4436
      },
      {
        "date": "2026-08-19",
        "nav": 4.2268
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-08-12",
        "nav": 0.5245
      },
      {
        "date": "2026-08-13",
        "nav": 0.523
      },
      {
        "date": "2026-08-14",
        "nav": 0.5226
      },
      {
        "date": "2026-08-17",
        "nav": 0.5292
      },
      {
        "date": "2026-08-18",
        "nav": 0.5287
      },
      {
        "date": "2026-08-19",
        "nav": 0.5095
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-08-12",
        "nav": 0.5345
      },
      {
        "date": "2026-08-13",
        "nav": 0.5329
      },
      {
        "date": "2026-08-14",
        "nav": 0.5325
      },
      {
        "date": "2026-08-17",
        "nav": 0.5392
      },
      {
        "date": "2026-08-18",
        "nav": 0.5388
      },
      {
        "date": "2026-08-19",
        "nav": 0.5192
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-08-12",
        "nav": 1.2759
      },
      {
        "date": "2026-08-13",
        "nav": 1.2718
      },
      {
        "date": "2026-08-14",
        "nav": 1.2713
      },
      {
        "date": "2026-08-17",
        "nav": 1.2756
      },
      {
        "date": "2026-08-18",
        "nav": 1.2782
      },
      {
        "date": "2026-08-19",
        "nav": 1.2764
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-08-12",
        "nav": 1.1472
      },
      {
        "date": "2026-08-13",
        "nav": 1.1491
      },
      {
        "date": "2026-08-14",
        "nav": 1.144
      },
      {
        "date": "2026-08-17",
        "nav": 1.1488
      },
      {
        "date": "2026-08-18",
        "nav": 1.1475
      },
      {
        "date": "2026-08-19",
        "nav": 1.1364
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-08-12",
        "nav": 1.4601
      },
      {
        "date": "2026-08-13",
        "nav": 1.4582
      },
      {
        "date": "2026-08-14",
        "nav": 1.4607
      },
      {
        "date": "2026-08-17",
        "nav": 1.497
      },
      {
        "date": "2026-08-18",
        "nav": 1.4917
      },
      {
        "date": "2026-08-19",
        "nav": 1.436
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-08-12",
        "nav": 3.0177
      },
      {
        "date": "2026-08-13",
        "nav": 2.997
      },
      {
        "date": "2026-08-14",
        "nav": 2.9892
      },
      {
        "date": "2026-08-17",
        "nav": 2.9984
      },
      {
        "date": "2026-08-18",
        "nav": 3.0197
      },
      {
        "date": "2026-08-19",
        "nav": 2.9972
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-08-12",
        "nav": 3.418
      },
      {
        "date": "2026-08-13",
        "nav": 3.418
      },
      {
        "date": "2026-08-14",
        "nav": 3.439
      },
      {
        "date": "2026-08-17",
        "nav": 3.553
      },
      {
        "date": "2026-08-18",
        "nav": 3.539
      },
      {
        "date": "2026-08-19",
        "nav": 3.33
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-08-12",
        "nav": 1.4594
      },
      {
        "date": "2026-08-13",
        "nav": 1.4614
      },
      {
        "date": "2026-08-14",
        "nav": 1.4564
      },
      {
        "date": "2026-08-17",
        "nav": 1.4572
      },
      {
        "date": "2026-08-18",
        "nav": 1.4602
      },
      {
        "date": "2026-08-19",
        "nav": 1.475
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-08-12",
        "nav": 0.6609
      },
      {
        "date": "2026-08-13",
        "nav": 0.6582
      },
      {
        "date": "2026-08-14",
        "nav": 0.6672
      },
      {
        "date": "2026-08-17",
        "nav": 0.6827
      },
      {
        "date": "2026-08-18",
        "nav": 0.6861
      },
      {
        "date": "2026-08-19",
        "nav": 0.6464
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-08-12",
        "nav": 15.026
      },
      {
        "date": "2026-08-13",
        "nav": 14.958
      },
      {
        "date": "2026-08-14",
        "nav": 15.265
      },
      {
        "date": "2026-08-17",
        "nav": 15.778
      },
      {
        "date": "2026-08-18",
        "nav": 15.636
      },
      {
        "date": "2026-08-19",
        "nav": 14.484
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 4.6359,
      "price": 4.6359,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 4.1906,
      "price": 4.1906,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.22,
      "nav": 5.8873,
      "price": 5.8873,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.04,
      "nav": 0.7188,
      "price": 0.7188,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 2.0687,
      "price": 2.0687,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.7243,
      "price": 2.7243,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 5.5014,
      "price": 5.5014,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.903,
      "price": 1.903,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.3362,
      "price": 1.3362,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 3.358,
      "price": 3.358,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.135,
      "price": 1.135,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.4,
      "price": 2.4,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.6782,
      "price": 1.6782,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.9516,
      "price": 1.9516,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.6632,
      "price": 1.6632,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.3798,
      "price": 2.3798,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.5973,
      "price": 2.5973,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.019,
      "price": 1.019,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.3423,
      "price": 2.3423,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.327,
      "price": 1.327,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.87,
      "sharpe": 0.23,
      "calmar": 0.23
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.08,
      "sharpe": 1.31,
      "calmar": 1.31
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 6.51,
      "sharpe": 5.33,
      "calmar": 5.33
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.08,
      "sharpe": -1.42,
      "calmar": -1.42
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 3.46,
      "sharpe": -4.02,
      "calmar": -4.02
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.77,
      "sharpe": -5.08,
      "calmar": -5.08
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.07,
      "sharpe": -0.92,
      "calmar": -0.92
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.02,
      "sharpe": -0.63,
      "calmar": -0.63
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.94,
      "sharpe": 0.1,
      "calmar": 0.1
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.92,
      "sharpe": 3.94,
      "calmar": 3.94
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.93,
      "sharpe": -0.59,
      "calmar": -0.59
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 1.14,
      "sharpe": -2.17,
      "calmar": -2.17
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 4.02,
      "sharpe": -6.48,
      "calmar": -6.48
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.49,
      "sharpe": 0.16,
      "calmar": 0.16
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.65,
      "sharpe": -0.7,
      "calmar": -0.7
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 2.17,
      "sharpe": 4.38,
      "calmar": 4.38
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.42,
      "sharpe": -1.13,
      "calmar": -1.13
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.45,
      "sharpe": 0.89,
      "calmar": 0.89
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.48,
      "sharpe": -1.13,
      "calmar": -1.13
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.6,
      "sharpe": 0.27,
      "calmar": 0.27
    }
  ],
  "news": [
    {
      "title": "9月8日，国务院以“高质量推进城市更新、促进城市内涵式发展”为主题，进行第二十一次专题学习。国务院总理李强在主持学习时强调，要深入学习贯彻习近平总书记关于城市更新工作的重要指示精神和党中央有关决策部署，建立可持续的城市更新模式，促进城市结构优化、功能完善、文脉赓续、品质提升，以城市高质量发展更好满足人民美好生活需要。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:32",
      "impact": "neutral"
    },
    {
      "title": "国家医保局、财政部、交通运输部等6部门近日联合印发通知，启动灵活就业人员、农民工、新就业形态人员参加基本医疗保险提质专项行动。计划用3年左右时间，持续扩大灵活就业人员等群体基本医保参保规模，重点提升职工医保参保人数。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "15:00",
      "impact": "neutral"
    },
    {
      "title": "2026年是“十五五”规划开局之年，“十五五”规划纲要明确提出，要推动经济实现质的有效提升和量的合理增长。上市公司作为区域经济的核心微观载体，是地方产业升级、科技创新、对外开放的重要中坚力量。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:30",
      "impact": "neutral"
    },
    {
      "title": "在破解2亿多灵活就业人员社会保障难题的进程中，医保迈出关键一步。9月8日，国家医保局、财政部等七部门联合发布《关于开展灵活就业人员、农民工、新就业形态人员参加基本医疗保险提质专项行动的通知》（下称《通知》），用3年左右时间持续提高灵活就业人员等参加基本医保人数，特别是参加职工医保人数，逐步探索形成适应新就业形态人员特点的参保缴费模式。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:14",
      "impact": "neutral"
    },
    {
      "title": "近期，记者在北京批发市场走访了解到，受需求增长拉动，猪肉价格温和回升。数据显示，9月8日，北京新发地市场白条猪批发平均价为每公斤14元，比8月1日上涨12%。据介绍，猪肉价格上涨，一方面是因为天气逐渐转凉、肉类消费增加，另外，能繁母猪存栏量的下降也带来了猪价上涨的预期。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:12",
      "impact": "neutral"
    },
    {
      "title": "中信建投证券2026年全球投资者大会在香港举行，刘成：投资中国、选择香港更加确定！任景信：希望越来越多中国企业以香港为基地走向世界！何海峰：香港是连接中国与世界的关键节点，正迎来新一轮系统性机遇中国基金报记者郭玟君9月8日，世界知识产权组织公布《2026年全球创新指数》百强创新集群，深圳—香港—广州集群再次排名全球第一。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:59",
      "impact": "neutral"
    },
    {
      "title": "上海正加大对AI4S（AIforScience，科学智能）赛道的投资布局。9月8日，在第六届“海聚英才”全球创新创业大赛AI4S专项赛启动仪式上，上海市经济和信息化委员会副主任潘焱透露，上海已涌现出60余家AI4S创新企业，未来将推动完善科学智能基金矩阵，加快前沿创新成果企业化孵化和产业化落地，支持更多科学智能企业在上海成长壮大。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:55",
      "impact": "neutral"
    },
    {
      "title": "蓝鲸新闻9月8日讯（记者金磊）黑龙江农信改革近日又有新消息，进入了实质性操作阶段，也将补全东北三省农信系统改革的最后一块拼图。据黑龙江日报9月4日消息，哈尔滨农信村镇银行股份有限公司发布关于召开2026年第三次临时股东会的通知显示，该行将于9月19日召开2026年第三次临时股东会，审议组建黑龙江农村商业银行股份有限公司有关事项。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:52",
      "impact": "neutral"
    },
    {
      "title": "人民财讯9月8日电，“上海发布”公众号消息，上海市人民政府与中国电信集团有限公司今天（9月8日）签署“十五五”战略合作协议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:46",
      "impact": "neutral"
    },
    {
      "title": "9月8日，在2026年香港交易所中国机遇论坛上，香港交易所集团行政总裁（CEO）陈翊庭表示，随着中国企业在科技创新、高端制造等领域不断取得突破，越来越多国际投资者开始将目光投向增长潜力更为确定的中国，“中国资产迎来了历史性的重估”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:42",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 48,
    "label": "中性",
    "upDownRatio": "2,573/1,713",
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
