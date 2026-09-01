// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-01 10:18:18
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-01 10:18 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-01",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3979.89,
      "change": -6.41,
      "changePct": "-0.16%",
      "high": 3995.18,
      "low": 3976.47,
      "volume": 573538949.0,
      "amount": 944307560000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13872.38,
      "change": -142.62,
      "changePct": "-1.02%",
      "high": 14018.51,
      "low": 13845.55,
      "volume": 684714331.0,
      "amount": 1089095260000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3393.43,
      "change": -45.25,
      "changePct": "-1.32%",
      "high": 3442.48,
      "low": 3375.01,
      "volume": 194899306.0,
      "amount": 507083390000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1647.53,
      "change": -36.86,
      "changePct": "-2.19%",
      "high": 1684.02,
      "low": 1646.64,
      "volume": 7533502.0,
      "amount": 71081910000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4611.44,
      "change": -13.65,
      "changePct": "-0.30%",
      "high": 4640.08,
      "low": 4604.77,
      "volume": 214869581.0,
      "amount": 535708360000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7858.52,
      "change": -93.58,
      "changePct": "-1.18%",
      "high": 7955.57,
      "low": 7852.87,
      "volume": 189657726.0,
      "amount": 368593730000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.52万亿",
      "label": "成交额",
      "rawAmount": 3515870210000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,177/1,911",
      "label": "涨/跌家数",
      "rawUp": 2177,
      "rawDown": 1911,
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
    "totalInflow": 14.4,
    "totalOutflow": 0,
    "netFlow": 14.4,
    "netFlowTrend": [
      2.88,
      5.76,
      8.64,
      11.52,
      14.4
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
      "name": "券商",
      "inflow": 3.27,
      "pct": 0.76
    },
    {
      "name": "银行",
      "inflow": 3.15,
      "pct": 2.05
    },
    {
      "name": "白酒",
      "inflow": 1.93,
      "pct": 2.39
    },
    {
      "name": "创新药",
      "inflow": 1.75,
      "pct": 0.12
    },
    {
      "name": "传媒",
      "inflow": 1.72,
      "pct": 1.19
    },
    {
      "name": "医疗",
      "inflow": 0.87,
      "pct": 0.59
    },
    {
      "name": "医药",
      "inflow": 0.7,
      "pct": 0.53
    },
    {
      "name": "农业",
      "inflow": 0.46,
      "pct": 1.99
    },
    {
      "name": "游戏",
      "inflow": 0.28,
      "pct": 0.09
    },
    {
      "name": "钢铁",
      "inflow": 0.27,
      "pct": 0.76
    },
    {
      "name": "食品",
      "inflow": 0.05,
      "pct": 1.21
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 1.06
    },
    {
      "name": "计算机",
      "inflow": -0.08,
      "pct": -0.58
    },
    {
      "name": "云计算",
      "inflow": -0.38,
      "pct": -0.35
    },
    {
      "name": "光伏",
      "inflow": -0.42,
      "pct": -0.96
    },
    {
      "name": "家电",
      "inflow": -0.49,
      "pct": -0.28
    },
    {
      "name": "人工智能",
      "inflow": -0.58,
      "pct": -0.57
    },
    {
      "name": "军工",
      "inflow": -0.63,
      "pct": -0.09
    },
    {
      "name": "地产",
      "inflow": -0.66,
      "pct": -0.16
    },
    {
      "name": "有色",
      "inflow": -2.46,
      "pct": -0.92
    }
  ],
  "sectors": [
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.429,
      "changePct": 2.39,
      "change": 0.01,
      "turnover": 6.42
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.846,
      "changePct": 2.05,
      "change": 0.017,
      "turnover": 10.49
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.768,
      "changePct": 1.99,
      "change": 0.015,
      "turnover": 1.55
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.501,
      "changePct": 1.21,
      "change": 0.006,
      "turnover": 0.17
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.851,
      "changePct": 1.19,
      "change": 0.01,
      "turnover": 5.75
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.046,
      "changePct": 1.06,
      "change": 0.011,
      "turnover": 0.07
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.532,
      "changePct": 0.76,
      "change": 0.004,
      "turnover": 10.9
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.193,
      "changePct": 0.76,
      "change": 0.009,
      "turnover": 0.91
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.341,
      "changePct": 0.59,
      "change": 0.002,
      "turnover": 2.9
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.378,
      "changePct": 0.53,
      "change": 0.002,
      "turnover": 2.34
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.849,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 5.85
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.092,
      "changePct": 0.09,
      "change": 0.001,
      "turnover": 0.93
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.141,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 2.11
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.219,
      "changePct": -0.16,
      "change": -0.002,
      "turnover": 2.2
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.443,
      "changePct": -0.28,
      "change": -0.004,
      "turnover": 1.62
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.717,
      "changePct": -0.35,
      "change": -0.006,
      "turnover": 1.27
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.038,
      "changePct": -0.57,
      "change": -0.006,
      "turnover": 1.95
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.197,
      "changePct": -0.58,
      "change": -0.007,
      "turnover": 0.26
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.935,
      "changePct": -0.92,
      "change": -0.018,
      "turnover": 8.21
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.826,
      "changePct": -0.96,
      "change": -0.008,
      "turnover": 1.39
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.595,
      "changePct": -1.24,
      "change": -0.02,
      "turnover": 1.14
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.416,
      "changePct": -1.47,
      "change": -0.036,
      "turnover": 1.13
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.662,
      "changePct": -1.49,
      "change": -0.01,
      "turnover": 25.5
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.028,
      "changePct": -2.1,
      "change": -0.022,
      "turnover": 7.64
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.14,
      "changePct": -2.4,
      "change": -0.028,
      "turnover": 6.53
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.342,
      "changePct": -2.61,
      "change": -0.036,
      "turnover": 19.32
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.03,
      "changePct": -2.65,
      "change": -0.028,
      "turnover": 12.24
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.842,
      "changePct": -2.66,
      "change": -0.023,
      "turnover": 1.06
    }
  ],
  "etfFlow": [
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.055,
      "changePct": 0.46,
      "amount": 13.98,
      "netFlow": 3.5
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.547,
      "changePct": 0.02,
      "amount": 11.33,
      "netFlow": 2.83
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.532,
      "changePct": 0.76,
      "amount": 10.9,
      "netFlow": 2.73
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.378,
      "changePct": 0.53,
      "amount": 2.34,
      "netFlow": 0.59
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.416,
      "changePct": -1.47,
      "amount": 1.13,
      "netFlow": -0.28
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.889,
      "changePct": 0.0,
      "amount": 10.07,
      "netFlow": -2.52
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.03,
      "changePct": -2.65,
      "amount": 12.24,
      "netFlow": -3.06
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.881,
      "changePct": -1.08,
      "amount": 30.58,
      "netFlow": -7.65
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.684,
      "changePct": -0.02,
      "amount": 39.63,
      "netFlow": -9.91
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.74,
      "changePct": -2.08,
      "amount": 43.68,
      "netFlow": -10.92
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.684,
      "changePct": -0.02,
      "amount": 39.63,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.055,
      "changePct": 0.46,
      "amount": 13.98,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.881,
      "changePct": -1.08,
      "amount": 30.58,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.889,
      "changePct": 0.0,
      "amount": 10.07,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.547,
      "changePct": 0.02,
      "amount": 11.33,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "白酒",
      "turnover": 6.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 10.49,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "农业",
      "turnover": 1.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 5.75,
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
      "name": "券商",
      "turnover": 10.9,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "钢铁",
      "turnover": 0.91,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 2.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.93,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 2.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 1.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.95,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 8.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.39,
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
      "nav": 4.6563,
      "ret1w": 2.57,
      "ret1m": 6.04,
      "ret3m": 22.76,
      "ret6m": -6.13,
      "ret1y": -0.9,
      "ret2y": 26.63,
      "ret3y": 167.0
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.2467,
      "ret1w": 1.05,
      "ret1m": 0.77,
      "ret3m": 8.86,
      "ret6m": -14.99,
      "ret1y": 6.55,
      "ret2y": 5.36,
      "ret3y": 71.0
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.8102,
      "ret1w": 0.58,
      "ret1m": 3.3,
      "ret3m": 38.76,
      "ret6m": -0.64,
      "ret1y": 43.56,
      "ret2y": 90.7,
      "ret3y": 287.35
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7147,
      "ret1w": -0.47,
      "ret1m": 2.09,
      "ret3m": -3.65,
      "ret6m": 1.61,
      "ret1y": -11.06,
      "ret2y": -14.75,
      "ret3y": 7.68
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.1204,
      "ret1w": -2.44,
      "ret1m": -2.39,
      "ret3m": -4.21,
      "ret6m": -17.19,
      "ret1y": -30.13,
      "ret2y": -18.77,
      "ret3y": 17.38
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7383,
      "ret1w": -1.57,
      "ret1m": -0.04,
      "ret3m": -1.01,
      "ret6m": -13.58,
      "ret1y": -31.68,
      "ret2y": -12.13,
      "ret3y": 32.32
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5541,
      "ret1w": -0.37,
      "ret1m": 1.8,
      "ret3m": -0.95,
      "ret6m": 1.98,
      "ret1y": -6.71,
      "ret2y": 12.94,
      "ret3y": 58.57
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.935,
      "ret1w": 1.68,
      "ret1m": 3.14,
      "ret3m": 9.63,
      "ret6m": -4.26,
      "ret1y": -5.75,
      "ret2y": 6.44,
      "ret3y": 74.8
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3659,
      "ret1w": 1.17,
      "ret1m": 2.42,
      "ret3m": 6.09,
      "ret6m": -2.65,
      "ret1y": -0.26,
      "ret2y": 10.83,
      "ret3y": 47.84
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.507,
      "ret1w": 2.04,
      "ret1m": 3.54,
      "ret3m": 8.37,
      "ret6m": 0.37,
      "ret1y": 31.74,
      "ret2y": 73.44,
      "ret3y": 287.94
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.115,
      "ret1w": -0.27,
      "ret1m": 1.0,
      "ret3m": -1.76,
      "ret6m": 2.39,
      "ret1y": -7.62,
      "ret2y": -17.35,
      "ret3y": 1.73
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.364,
      "ret1w": -0.13,
      "ret1m": 0.34,
      "ret3m": 2.65,
      "ret6m": -0.55,
      "ret1y": -17.66,
      "ret2y": -14.5,
      "ret3y": 34.24
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7766,
      "ret1w": 0.49,
      "ret1m": 0.24,
      "ret3m": 3.45,
      "ret6m": -36.6,
      "ret1y": -47.94,
      "ret2y": -35.82,
      "ret3y": 23.88
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9478,
      "ret1w": 0.28,
      "ret1m": 1.67,
      "ret3m": 0.01,
      "ret6m": 9.46,
      "ret1y": -2.69,
      "ret2y": -5.62,
      "ret3y": 9.75
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6879,
      "ret1w": 1.31,
      "ret1m": 3.74,
      "ret3m": 11.7,
      "ret6m": -3.68,
      "ret1y": -4.3,
      "ret2y": 11.74,
      "ret3y": 75.48
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.4049,
      "ret1w": 0.97,
      "ret1m": 0.55,
      "ret3m": 14.88,
      "ret6m": -11.57,
      "ret1y": 28.56,
      "ret2y": 79.27,
      "ret3y": 230.71
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5514,
      "ret1w": -0.39,
      "ret1m": 0.76,
      "ret3m": 0.37,
      "ret6m": -3.54,
      "ret1y": -10.81,
      "ret2y": -6.49,
      "ret3y": 22.15
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.024,
      "ret1w": -1.16,
      "ret1m": 0.0,
      "ret3m": 3.12,
      "ret6m": 8.59,
      "ret1y": 3.64,
      "ret2y": -12.25,
      "ret3y": 5.89
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3554,
      "ret1w": 0.04,
      "ret1m": 0.43,
      "ret3m": -1.44,
      "ret6m": 1.09,
      "ret1y": -6.49,
      "ret2y": 5.63,
      "ret3y": 17.51
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3537,
      "ret1w": 1.21,
      "ret1m": 2.52,
      "ret3m": 10.05,
      "ret6m": 5.17,
      "ret1y": 1.37,
      "ret2y": 23.72,
      "ret3y": 83.95
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2896,
      "ret1w": 0.39,
      "ret1m": 1.22,
      "ret3m": 3.91,
      "ret6m": -6.09,
      "ret1y": -8.95,
      "ret2y": 16.12,
      "ret3y": 49.59
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3718,
      "ret1w": 0.4,
      "ret1m": 1.22,
      "ret3m": 3.95,
      "ret6m": -6.0,
      "ret1y": -8.78,
      "ret2y": 16.57,
      "ret3y": 50.78
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0902,
      "ret1w": -0.14,
      "ret1m": -0.03,
      "ret3m": -0.95,
      "ret6m": -1.62,
      "ret1y": 0.71,
      "ret2y": 1.67,
      "ret3y": 8.86
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0632,
      "ret1w": -0.13,
      "ret1m": -0.02,
      "ret3m": -0.9,
      "ret6m": -1.46,
      "ret1y": 1.02,
      "ret2y": 2.29,
      "ret3y": 10.18
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7206,
      "ret1w": -0.41,
      "ret1m": 1.22,
      "ret3m": -2.7,
      "ret6m": -5.06,
      "ret1y": -13.88,
      "ret2y": -7.16,
      "ret3y": 13.77
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7388,
      "ret1w": -0.42,
      "ret1m": 1.22,
      "ret3m": -2.66,
      "ret6m": -4.94,
      "ret1y": -13.66,
      "ret2y": -6.69,
      "ret3y": 14.92
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8626,
      "ret1w": 1.18,
      "ret1m": 3.92,
      "ret3m": 12.27,
      "ret6m": -5.69,
      "ret1y": 34.89,
      "ret2y": 61.19,
      "ret3y": 169.93
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5673,
      "ret1w": 0.43,
      "ret1m": 2.39,
      "ret3m": 5.23,
      "ret6m": -2.6,
      "ret1y": 0.78,
      "ret2y": 20.58,
      "ret3y": 90.21
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7497,
      "ret1w": 1.27,
      "ret1m": 2.45,
      "ret3m": 3.18,
      "ret6m": -12.34,
      "ret1y": -16.28,
      "ret2y": -8.52,
      "ret3y": 18.74
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.3025,
      "ret1w": 2.67,
      "ret1m": 4.2,
      "ret3m": 7.8,
      "ret6m": -2.11,
      "ret1y": 17.11,
      "ret2y": 40.86,
      "ret3y": 150.28
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5121,
      "ret1w": 0.77,
      "ret1m": 2.11,
      "ret3m": -2.53,
      "ret6m": -5.9,
      "ret1y": -4.55,
      "ret2y": 13.2,
      "ret3y": 48.69
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5219,
      "ret1w": 0.77,
      "ret1m": 2.13,
      "ret3m": -2.5,
      "ret6m": -5.79,
      "ret1y": -4.36,
      "ret2y": 13.65,
      "ret3y": 49.89
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2913,
      "ret1w": 0.35,
      "ret1m": 0.87,
      "ret3m": 0.57,
      "ret6m": 0.28,
      "ret1y": 0.04,
      "ret2y": 0.39,
      "ret3y": 2.3
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1361,
      "ret1w": -0.17,
      "ret1m": 0.73,
      "ret3m": -0.9,
      "ret6m": 3.74,
      "ret1y": -6.82,
      "ret2y": -0.58,
      "ret3y": 20.4
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4247,
      "ret1w": 0.18,
      "ret1m": 0.71,
      "ret3m": 3.77,
      "ret6m": -13.33,
      "ret1y": -5.49,
      "ret2y": -12.06,
      "ret3y": 17.88
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0609,
      "ret1w": 0.79,
      "ret1m": 2.38,
      "ret3m": 1.96,
      "ret6m": -1.49,
      "ret1y": -5.12,
      "ret2y": 13.49,
      "ret3y": 52.88
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.384,
      "ret1w": 1.32,
      "ret1m": 3.77,
      "ret3m": 7.46,
      "ret6m": -17.0,
      "ret1y": 33.75,
      "ret2y": 66.86,
      "ret3y": 209.89
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4973,
      "ret1w": 0.94,
      "ret1m": 0.41,
      "ret3m": -0.97,
      "ret6m": 1.59,
      "ret1y": 1.2,
      "ret2y": -0.61,
      "ret3y": 11.32
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6547,
      "ret1w": 4.2,
      "ret1m": 3.95,
      "ret3m": 15.79,
      "ret6m": -9.66,
      "ret1y": -10.72,
      "ret2y": 5.05,
      "ret3y": 55.92
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.582,
      "ret1w": 1.86,
      "ret1m": 3.38,
      "ret3m": 14.23,
      "ret6m": 0.3,
      "ret1y": 71.25,
      "ret2y": 116.25,
      "ret3y": 360.29
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0675,
      "ret1w": 0.05,
      "ret1m": 0.2,
      "ret3m": 0.35,
      "ret6m": -0.93,
      "ret1y": 0.02,
      "ret2y": 1.53,
      "ret3y": 4.86
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1161,
      "ret1w": 0.04,
      "ret1m": 0.2,
      "ret3m": 0.37,
      "ret6m": -0.86,
      "ret1y": 0.14,
      "ret2y": 1.82,
      "ret3y": 5.59
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0639,
      "ret1w": 0.01,
      "ret1m": -0.04,
      "ret3m": 0.04,
      "ret6m": 0.21,
      "ret1y": 0.71,
      "ret2y": 1.47,
      "ret3y": 2.7
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0986,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": 0.1,
      "ret6m": 0.24,
      "ret1y": 0.79,
      "ret2y": 1.49,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.108,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.3,
      "ret1y": 0.89,
      "ret2y": 1.7,
      "ret3y": 4.29
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0759,
      "ret1w": 0.01,
      "ret1m": -0.02,
      "ret3m": 0.07,
      "ret6m": 0.27,
      "ret1y": 0.72,
      "ret2y": 1.39,
      "ret3y": 2.84
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0903,
      "ret1w": 0.01,
      "ret1m": -0.02,
      "ret3m": 0.09,
      "ret6m": 0.34,
      "ret1y": 0.88,
      "ret2y": 1.7,
      "ret3y": 3.49
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0729,
      "ret1w": 0.41,
      "ret1m": 0.8,
      "ret3m": 1.98,
      "ret6m": -2.07,
      "ret1y": 0.67,
      "ret2y": 6.62,
      "ret3y": 13.85
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.228,
      "ret1w": 0.47,
      "ret1m": 1.08,
      "ret3m": 3.05,
      "ret6m": -2.33,
      "ret1y": 0.11,
      "ret2y": 3.49,
      "ret3y": 8.43
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0796,
      "ret1w": 0.41,
      "ret1m": 0.8,
      "ret3m": 2.0,
      "ret6m": -1.97,
      "ret1y": 0.87,
      "ret2y": 7.05,
      "ret3y": 14.76
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0455,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": 0.12,
      "ret6m": 0.31,
      "ret1y": 0.85,
      "ret2y": 1.71,
      "ret3y": 3.57
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1723,
      "ret1w": 0.04,
      "ret1m": 0.22,
      "ret3m": 1.23,
      "ret6m": -2.95,
      "ret1y": -3.04,
      "ret2y": 0.72,
      "ret3y": 10.45
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2188,
      "ret1w": 0.07,
      "ret1m": 0.34,
      "ret3m": -0.06,
      "ret6m": -0.48,
      "ret1y": -0.66,
      "ret2y": 3.96,
      "ret3y": 15.38
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1416,
      "ret1w": 0.08,
      "ret1m": 0.29,
      "ret3m": 1.19,
      "ret6m": -0.74,
      "ret1y": 0.4,
      "ret2y": 3.82,
      "ret3y": 10.48
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2132,
      "ret1w": 0.09,
      "ret1m": 0.31,
      "ret3m": 1.23,
      "ret6m": -0.64,
      "ret1y": 0.6,
      "ret2y": 4.25,
      "ret3y": 11.4
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.335,
      "ret1w": -2.42,
      "ret1m": -2.34,
      "ret3m": 11.83,
      "ret6m": -9.36,
      "ret1y": 32.97,
      "ret2y": 90.92,
      "ret3y": 133.73
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9864,
      "ret1w": -0.23,
      "ret1m": 0.44,
      "ret3m": 3.64,
      "ret6m": 1.38,
      "ret1y": 8.36,
      "ret2y": 9.89,
      "ret3y": 35.05
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8884,
      "ret1w": 0.78,
      "ret1m": 2.47,
      "ret3m": 0.52,
      "ret6m": -12.07,
      "ret1y": -12.64,
      "ret2y": 4.22,
      "ret3y": 57.31
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4022,
      "ret1w": 0.2,
      "ret1m": 0.87,
      "ret3m": 10.94,
      "ret6m": 0.13,
      "ret1y": 19.77,
      "ret2y": 31.89,
      "ret3y": 76.44
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9361,
      "ret1w": -0.07,
      "ret1m": -0.2,
      "ret3m": 0.17,
      "ret6m": -0.87,
      "ret1y": -3.51,
      "ret2y": -3.23,
      "ret3y": -1.3
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6211,
      "ret1w": 0.07,
      "ret1m": 0.54,
      "ret3m": 1.67,
      "ret6m": -8.98,
      "ret1y": 22.28,
      "ret2y": 55.28,
      "ret3y": 93.13
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.647,
      "ret1w": -0.15,
      "ret1m": 0.87,
      "ret3m": 3.52,
      "ret6m": -0.39,
      "ret1y": 3.57,
      "ret2y": 7.3,
      "ret3y": 22.48
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.275,
      "ret1w": -1.32,
      "ret1m": 0.24,
      "ret3m": 6.87,
      "ret6m": 11.45,
      "ret1y": -0.86,
      "ret2y": -8.86,
      "ret3y": 119.83
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.983,
      "ret1w": -1.8,
      "ret1m": -1.11,
      "ret3m": 8.14,
      "ret6m": 1.55,
      "ret1y": -7.09,
      "ret2y": -17.05,
      "ret3y": 57.03
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8611,
      "ret1w": -0.76,
      "ret1m": -0.03,
      "ret3m": 9.96,
      "ret6m": -9.11,
      "ret1y": 26.8,
      "ret2y": 80.65,
      "ret3y": 140.43
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6254,
      "ret1w": -0.84,
      "ret1m": -1.57,
      "ret3m": 14.62,
      "ret6m": 7.41,
      "ret1y": 0.57,
      "ret2y": 42.03,
      "ret3y": 57.12
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7238,
      "ret1w": -0.38,
      "ret1m": -0.74,
      "ret3m": 6.27,
      "ret6m": 1.21,
      "ret1y": 6.66,
      "ret2y": 31.0,
      "ret3y": 56.61
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3358,
      "ret1w": 0.12,
      "ret1m": -0.16,
      "ret3m": 8.54,
      "ret6m": -0.23,
      "ret1y": 1.53,
      "ret2y": 21.98,
      "ret3y": 41.44
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.307,
      "ret1w": -0.61,
      "ret1m": -1.36,
      "ret3m": -3.61,
      "ret6m": -1.06,
      "ret1y": -0.23,
      "ret2y": 4.81,
      "ret3y": -7.2
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.152,
      "ret1w": -2.0,
      "ret1m": -2.14,
      "ret3m": 10.81,
      "ret6m": -0.69,
      "ret1y": -15.61,
      "ret2y": 22.2,
      "ret3y": 59.2
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0106,
      "ret1w": 0.02,
      "ret1m": -0.05,
      "ret3m": 0.14,
      "ret6m": 0.32,
      "ret1y": 1.46,
      "ret2y": 2.04,
      "ret3y": 3.59
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0095,
      "ret1w": 0.02,
      "ret1m": -0.05,
      "ret3m": 0.15,
      "ret6m": 0.3,
      "ret1y": 1.47,
      "ret2y": 2.09,
      "ret3y": 3.77
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.43,
      "ret1w": 0.28,
      "ret1m": 1.49,
      "ret3m": 0.49,
      "ret6m": -9.09,
      "ret1y": -1.38,
      "ret2y": 2.44,
      "ret3y": 36.58
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.873,
      "ret1w": 0.6,
      "ret1m": 1.52,
      "ret3m": 4.43,
      "ret6m": -6.54,
      "ret1y": -1.31,
      "ret2y": 12.62,
      "ret3y": 64.74
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7434,
      "ret1w": -0.39,
      "ret1m": 1.49,
      "ret3m": 8.25,
      "ret6m": 1.56,
      "ret1y": -12.07,
      "ret2y": 34.45,
      "ret3y": 75.22
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1627,
      "ret1w": 0.46,
      "ret1m": 1.86,
      "ret3m": 2.64,
      "ret6m": -1.76,
      "ret1y": 2.79,
      "ret2y": 10.36,
      "ret3y": 45.48
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2246,
      "ret1w": 0.47,
      "ret1m": 1.87,
      "ret3m": 2.68,
      "ret6m": -1.66,
      "ret1y": 3.01,
      "ret2y": 10.81,
      "ret3y": 46.65
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0495,
      "ret1w": 0.69,
      "ret1m": 2.91,
      "ret3m": 5.76,
      "ret6m": -4.35,
      "ret1y": -7.29,
      "ret2y": 13.03,
      "ret3y": 69.9
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.805,
      "ret1w": 0.32,
      "ret1m": 1.32,
      "ret3m": 0.84,
      "ret6m": -4.56,
      "ret1y": -0.88,
      "ret2y": 3.94,
      "ret3y": 40.67
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.603,
      "ret1w": 0.07,
      "ret1m": 2.34,
      "ret3m": 1.81,
      "ret6m": -2.32,
      "ret1y": -8.84,
      "ret2y": 11.86,
      "ret3y": 58.21
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9917,
      "ret1w": 0.46,
      "ret1m": 1.68,
      "ret3m": 1.97,
      "ret6m": -10.27,
      "ret1y": 8.21,
      "ret2y": 16.03,
      "ret3y": 78.34
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1815,
      "ret1w": -0.07,
      "ret1m": 0.7,
      "ret3m": -0.21,
      "ret6m": 1.23,
      "ret1y": 0.45,
      "ret2y": 3.16,
      "ret3y": 30.06
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5329,
      "ret1w": 0.23,
      "ret1m": -0.27,
      "ret3m": 1.58,
      "ret6m": 4.16,
      "ret1y": 0.06,
      "ret2y": 12.96,
      "ret3y": 28.05
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4408,
      "ret1w": -0.71,
      "ret1m": 0.4,
      "ret3m": 5.34,
      "ret6m": -2.92,
      "ret1y": 14.64,
      "ret2y": 16.2,
      "ret3y": 39.37
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7875,
      "ret1w": 0.04,
      "ret1m": 0.28,
      "ret3m": 1.34,
      "ret6m": -9.75,
      "ret1y": 3.07,
      "ret2y": 9.91,
      "ret3y": 60.25
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.2025,
      "ret1w": 1.93,
      "ret1m": 1.14,
      "ret3m": 1.48,
      "ret6m": -6.58,
      "ret1y": -0.37,
      "ret2y": 12.72,
      "ret3y": 56.51
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2042,
      "ret1w": 1.94,
      "ret1m": 1.14,
      "ret3m": 1.47,
      "ret6m": -6.56,
      "ret1y": -0.41,
      "ret2y": 12.67,
      "ret3y": 55.94
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4181,
      "ret1w": 0.39,
      "ret1m": 1.58,
      "ret3m": 4.94,
      "ret6m": -8.88,
      "ret1y": -6.15,
      "ret2y": 2.98,
      "ret3y": 41.7
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4505,
      "ret1w": 0.39,
      "ret1m": 1.58,
      "ret3m": 4.98,
      "ret6m": -8.79,
      "ret1y": -5.96,
      "ret2y": 3.4,
      "ret3y": 42.85
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0497,
      "ret1w": 0.38,
      "ret1m": 2.01,
      "ret3m": 2.9,
      "ret6m": -10.96,
      "ret1y": -1.12,
      "ret2y": 10.99,
      "ret3y": 65.87
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1668,
      "ret1w": -0.03,
      "ret1m": 0.06,
      "ret3m": -0.16,
      "ret6m": -0.18,
      "ret1y": -0.32,
      "ret2y": 2.02,
      "ret3y": 8.0
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1867,
      "ret1w": -0.03,
      "ret1m": 0.07,
      "ret3m": -0.13,
      "ret6m": -0.1,
      "ret1y": -0.17,
      "ret2y": 2.33,
      "ret3y": 8.65
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0838,
      "ret1w": 0.01,
      "ret1m": -0.04,
      "ret3m": 0.06,
      "ret6m": 0.28,
      "ret1y": 0.87,
      "ret2y": 1.77,
      "ret3y": 3.29
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4094,
      "ret1w": -0.01,
      "ret1m": -0.06,
      "ret3m": -0.1,
      "ret6m": -0.02,
      "ret1y": 0.07,
      "ret2y": 0.59,
      "ret3y": 10.96
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4616,
      "ret1w": -0.01,
      "ret1m": -0.05,
      "ret3m": -0.07,
      "ret6m": 0.08,
      "ret1y": 0.27,
      "ret2y": 1.0,
      "ret3y": 11.85
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1322,
      "ret1w": 0.37,
      "ret1m": 1.68,
      "ret3m": 2.25,
      "ret6m": 3.5,
      "ret1y": 11.06,
      "ret2y": 22.62,
      "ret3y": 67.43
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2596,
      "ret1w": 0.35,
      "ret1m": 1.29,
      "ret3m": 1.25,
      "ret6m": 1.61,
      "ret1y": 3.9,
      "ret2y": 12.68,
      "ret3y": 51.96
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-08-04",
        "nav": 4.0128
      },
      {
        "date": "2026-08-05",
        "nav": 4.2314
      },
      {
        "date": "2026-08-06",
        "nav": 4.2852
      },
      {
        "date": "2026-08-07",
        "nav": 4.4331
      },
      {
        "date": "2026-08-10",
        "nav": 4.4196
      },
      {
        "date": "2026-08-11",
        "nav": 4.4203
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-08-04",
        "nav": 4.069
      },
      {
        "date": "2026-08-05",
        "nav": 4.1625
      },
      {
        "date": "2026-08-06",
        "nav": 4.1845
      },
      {
        "date": "2026-08-07",
        "nav": 4.282
      },
      {
        "date": "2026-08-10",
        "nav": 4.222
      },
      {
        "date": "2026-08-11",
        "nav": 4.1726
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-08-04",
        "nav": 4.7468
      },
      {
        "date": "2026-08-05",
        "nav": 4.7803
      },
      {
        "date": "2026-08-06",
        "nav": 4.8797
      },
      {
        "date": "2026-08-07",
        "nav": 5.0516
      },
      {
        "date": "2026-08-10",
        "nav": 4.991
      },
      {
        "date": "2026-08-11",
        "nav": 4.9502
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-08-04",
        "nav": 0.7205
      },
      {
        "date": "2026-08-05",
        "nav": 0.7186
      },
      {
        "date": "2026-08-06",
        "nav": 0.7141
      },
      {
        "date": "2026-08-07",
        "nav": 0.7104
      },
      {
        "date": "2026-08-10",
        "nav": 0.7235
      },
      {
        "date": "2026-08-11",
        "nav": 0.721
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-08-04",
        "nav": 2.3048
      },
      {
        "date": "2026-08-05",
        "nav": 2.3089
      },
      {
        "date": "2026-08-06",
        "nav": 2.2591
      },
      {
        "date": "2026-08-07",
        "nav": 2.3043
      },
      {
        "date": "2026-08-10",
        "nav": 2.2978
      },
      {
        "date": "2026-08-11",
        "nav": 2.281
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-08-04",
        "nav": 2.7921
      },
      {
        "date": "2026-08-05",
        "nav": 2.8475
      },
      {
        "date": "2026-08-06",
        "nav": 2.8347
      },
      {
        "date": "2026-08-07",
        "nav": 2.8203
      },
      {
        "date": "2026-08-10",
        "nav": 2.8553
      },
      {
        "date": "2026-08-11",
        "nav": 2.8021
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-08-04",
        "nav": 5.5149
      },
      {
        "date": "2026-08-05",
        "nav": 5.5498
      },
      {
        "date": "2026-08-06",
        "nav": 5.5248
      },
      {
        "date": "2026-08-07",
        "nav": 5.5077
      },
      {
        "date": "2026-08-10",
        "nav": 5.5653
      },
      {
        "date": "2026-08-11",
        "nav": 5.5751
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-08-04",
        "nav": 1.808
      },
      {
        "date": "2026-08-05",
        "nav": 1.864
      },
      {
        "date": "2026-08-06",
        "nav": 1.873
      },
      {
        "date": "2026-08-07",
        "nav": 1.91
      },
      {
        "date": "2026-08-10",
        "nav": 1.92
      },
      {
        "date": "2026-08-11",
        "nav": 1.901
      },
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
      }
    ],
    "519965": [
      {
        "date": "2026-08-04",
        "nav": 1.315
      },
      {
        "date": "2026-08-05",
        "nav": 1.3471
      },
      {
        "date": "2026-08-06",
        "nav": 1.3471
      },
      {
        "date": "2026-08-07",
        "nav": 1.371
      },
      {
        "date": "2026-08-10",
        "nav": 1.3738
      },
      {
        "date": "2026-08-11",
        "nav": 1.3624
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-08-04",
        "nav": 3.23
      },
      {
        "date": "2026-08-05",
        "nav": 3.388
      },
      {
        "date": "2026-08-06",
        "nav": 3.429
      },
      {
        "date": "2026-08-07",
        "nav": 3.543
      },
      {
        "date": "2026-08-10",
        "nav": 3.546
      },
      {
        "date": "2026-08-11",
        "nav": 3.517
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-08-04",
        "nav": 1.12
      },
      {
        "date": "2026-08-05",
        "nav": 1.122
      },
      {
        "date": "2026-08-06",
        "nav": 1.117
      },
      {
        "date": "2026-08-07",
        "nav": 1.117
      },
      {
        "date": "2026-08-10",
        "nav": 1.158
      },
      {
        "date": "2026-08-11",
        "nav": 1.151
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-08-04",
        "nav": 2.356
      },
      {
        "date": "2026-08-05",
        "nav": 2.364
      },
      {
        "date": "2026-08-06",
        "nav": 2.357
      },
      {
        "date": "2026-08-07",
        "nav": 2.431
      },
      {
        "date": "2026-08-10",
        "nav": 2.459
      },
      {
        "date": "2026-08-11",
        "nav": 2.474
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-08-04",
        "nav": 1.6629
      },
      {
        "date": "2026-08-05",
        "nav": 1.75
      },
      {
        "date": "2026-08-06",
        "nav": 1.7725
      },
      {
        "date": "2026-08-07",
        "nav": 1.813
      },
      {
        "date": "2026-08-10",
        "nav": 1.84
      },
      {
        "date": "2026-08-11",
        "nav": 1.816
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-08-04",
        "nav": 1.9238
      },
      {
        "date": "2026-08-05",
        "nav": 1.9297
      },
      {
        "date": "2026-08-06",
        "nav": 1.9237
      },
      {
        "date": "2026-08-07",
        "nav": 1.926
      },
      {
        "date": "2026-08-10",
        "nav": 1.9572
      },
      {
        "date": "2026-08-11",
        "nav": 1.9521
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-08-04",
        "nav": 1.5547
      },
      {
        "date": "2026-08-05",
        "nav": 1.602
      },
      {
        "date": "2026-08-06",
        "nav": 1.6206
      },
      {
        "date": "2026-08-07",
        "nav": 1.6576
      },
      {
        "date": "2026-08-10",
        "nav": 1.666
      },
      {
        "date": "2026-08-11",
        "nav": 1.6538
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-08-04",
        "nav": 2.2079
      },
      {
        "date": "2026-08-05",
        "nav": 2.2658
      },
      {
        "date": "2026-08-06",
        "nav": 2.3138
      },
      {
        "date": "2026-08-07",
        "nav": 2.3803
      },
      {
        "date": "2026-08-10",
        "nav": 2.3617
      },
      {
        "date": "2026-08-11",
        "nav": 2.348
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-08-04",
        "nav": 2.5092
      },
      {
        "date": "2026-08-05",
        "nav": 2.5251
      },
      {
        "date": "2026-08-06",
        "nav": 2.5342
      },
      {
        "date": "2026-08-07",
        "nav": 2.5309
      },
      {
        "date": "2026-08-10",
        "nav": 2.5551
      },
      {
        "date": "2026-08-11",
        "nav": 2.529
      },
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
      }
    ],
    "399011": [
      {
        "date": "2026-08-04",
        "nav": 0.987
      },
      {
        "date": "2026-08-05",
        "nav": 1.019
      },
      {
        "date": "2026-08-06",
        "nav": 1.014
      },
      {
        "date": "2026-08-07",
        "nav": 1.097
      },
      {
        "date": "2026-08-10",
        "nav": 1.101
      },
      {
        "date": "2026-08-11",
        "nav": 1.108
      },
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
      }
    ],
    "376510": [
      {
        "date": "2026-08-04",
        "nav": 2.3474
      },
      {
        "date": "2026-08-05",
        "nav": 2.3412
      },
      {
        "date": "2026-08-06",
        "nav": 2.3374
      },
      {
        "date": "2026-08-07",
        "nav": 2.3262
      },
      {
        "date": "2026-08-10",
        "nav": 2.3599
      },
      {
        "date": "2026-08-11",
        "nav": 2.3532
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-08-04",
        "nav": 1.2436
      },
      {
        "date": "2026-08-05",
        "nav": 1.2743
      },
      {
        "date": "2026-08-06",
        "nav": 1.2871
      },
      {
        "date": "2026-08-07",
        "nav": 1.3135
      },
      {
        "date": "2026-08-10",
        "nav": 1.3215
      },
      {
        "date": "2026-08-11",
        "nav": 1.3122
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-08-04",
        "nav": 1.2589
      },
      {
        "date": "2026-08-05",
        "nav": 1.2867
      },
      {
        "date": "2026-08-06",
        "nav": 1.2843
      },
      {
        "date": "2026-08-07",
        "nav": 1.3084
      },
      {
        "date": "2026-08-10",
        "nav": 1.3154
      },
      {
        "date": "2026-08-11",
        "nav": 1.3093
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-08-04",
        "nav": 1.3387
      },
      {
        "date": "2026-08-05",
        "nav": 1.3682
      },
      {
        "date": "2026-08-06",
        "nav": 1.3657
      },
      {
        "date": "2026-08-07",
        "nav": 1.3914
      },
      {
        "date": "2026-08-10",
        "nav": 1.3989
      },
      {
        "date": "2026-08-11",
        "nav": 1.3925
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-08-04",
        "nav": 1.1026
      },
      {
        "date": "2026-08-05",
        "nav": 1.1019
      },
      {
        "date": "2026-08-06",
        "nav": 1.0992
      },
      {
        "date": "2026-08-07",
        "nav": 1.0989
      },
      {
        "date": "2026-08-10",
        "nav": 1.0977
      },
      {
        "date": "2026-08-11",
        "nav": 1.0961
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-08-04",
        "nav": 1.0748
      },
      {
        "date": "2026-08-05",
        "nav": 1.0742
      },
      {
        "date": "2026-08-06",
        "nav": 1.0716
      },
      {
        "date": "2026-08-07",
        "nav": 1.0713
      },
      {
        "date": "2026-08-10",
        "nav": 1.0702
      },
      {
        "date": "2026-08-11",
        "nav": 1.0686
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-08-04",
        "nav": 0.7307
      },
      {
        "date": "2026-08-05",
        "nav": 0.7329
      },
      {
        "date": "2026-08-06",
        "nav": 0.7278
      },
      {
        "date": "2026-08-07",
        "nav": 0.7298
      },
      {
        "date": "2026-08-10",
        "nav": 0.7427
      },
      {
        "date": "2026-08-11",
        "nav": 0.7381
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-08-04",
        "nav": 0.7489
      },
      {
        "date": "2026-08-05",
        "nav": 0.7512
      },
      {
        "date": "2026-08-06",
        "nav": 0.746
      },
      {
        "date": "2026-08-07",
        "nav": 0.748
      },
      {
        "date": "2026-08-10",
        "nav": 0.7613
      },
      {
        "date": "2026-08-11",
        "nav": 0.7566
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-08-04",
        "nav": 2.693
      },
      {
        "date": "2026-08-05",
        "nav": 2.7359
      },
      {
        "date": "2026-08-06",
        "nav": 2.7613
      },
      {
        "date": "2026-08-07",
        "nav": 2.8322
      },
      {
        "date": "2026-08-10",
        "nav": 2.7839
      },
      {
        "date": "2026-08-11",
        "nav": 2.7622
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-08-04",
        "nav": 2.4523
      },
      {
        "date": "2026-08-05",
        "nav": 2.5123
      },
      {
        "date": "2026-08-06",
        "nav": 2.507
      },
      {
        "date": "2026-08-07",
        "nav": 2.5586
      },
      {
        "date": "2026-08-10",
        "nav": 2.5693
      },
      {
        "date": "2026-08-11",
        "nav": 2.5683
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-08-04",
        "nav": 0.7229
      },
      {
        "date": "2026-08-05",
        "nav": 0.74
      },
      {
        "date": "2026-08-06",
        "nav": 0.7402
      },
      {
        "date": "2026-08-07",
        "nav": 0.75
      },
      {
        "date": "2026-08-10",
        "nav": 0.7548
      },
      {
        "date": "2026-08-11",
        "nav": 0.7517
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-08-04",
        "nav": 4.0073
      },
      {
        "date": "2026-08-05",
        "nav": 4.1539
      },
      {
        "date": "2026-08-06",
        "nav": 4.1791
      },
      {
        "date": "2026-08-07",
        "nav": 4.2756
      },
      {
        "date": "2026-08-10",
        "nav": 4.2582
      },
      {
        "date": "2026-08-11",
        "nav": 4.3007
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-08-04",
        "nav": 0.5209
      },
      {
        "date": "2026-08-05",
        "nav": 0.5228
      },
      {
        "date": "2026-08-06",
        "nav": 0.5234
      },
      {
        "date": "2026-08-07",
        "nav": 0.5247
      },
      {
        "date": "2026-08-10",
        "nav": 0.5285
      },
      {
        "date": "2026-08-11",
        "nav": 0.5248
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-08-04",
        "nav": 0.5307
      },
      {
        "date": "2026-08-05",
        "nav": 0.5326
      },
      {
        "date": "2026-08-06",
        "nav": 0.5333
      },
      {
        "date": "2026-08-07",
        "nav": 0.5346
      },
      {
        "date": "2026-08-10",
        "nav": 0.5385
      },
      {
        "date": "2026-08-11",
        "nav": 0.5347
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-08-04",
        "nav": 1.2702
      },
      {
        "date": "2026-08-05",
        "nav": 1.2724
      },
      {
        "date": "2026-08-06",
        "nav": 1.2736
      },
      {
        "date": "2026-08-07",
        "nav": 1.2748
      },
      {
        "date": "2026-08-10",
        "nav": 1.2804
      },
      {
        "date": "2026-08-11",
        "nav": 1.2811
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-08-04",
        "nav": 1.1429
      },
      {
        "date": "2026-08-05",
        "nav": 1.1479
      },
      {
        "date": "2026-08-06",
        "nav": 1.1386
      },
      {
        "date": "2026-08-07",
        "nav": 1.1488
      },
      {
        "date": "2026-08-10",
        "nav": 1.1565
      },
      {
        "date": "2026-08-11",
        "nav": 1.1508
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-08-04",
        "nav": 1.416
      },
      {
        "date": "2026-08-05",
        "nav": 1.4299
      },
      {
        "date": "2026-08-06",
        "nav": 1.428
      },
      {
        "date": "2026-08-07",
        "nav": 1.4502
      },
      {
        "date": "2026-08-10",
        "nav": 1.4609
      },
      {
        "date": "2026-08-11",
        "nav": 1.4576
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-08-04",
        "nav": 2.9821
      },
      {
        "date": "2026-08-05",
        "nav": 2.9787
      },
      {
        "date": "2026-08-06",
        "nav": 2.9821
      },
      {
        "date": "2026-08-07",
        "nav": 3.0012
      },
      {
        "date": "2026-08-10",
        "nav": 3.0234
      },
      {
        "date": "2026-08-11",
        "nav": 3.0236
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-08-04",
        "nav": 3.313
      },
      {
        "date": "2026-08-05",
        "nav": 3.339
      },
      {
        "date": "2026-08-06",
        "nav": 3.373
      },
      {
        "date": "2026-08-07",
        "nav": 3.436
      },
      {
        "date": "2026-08-10",
        "nav": 3.372
      },
      {
        "date": "2026-08-11",
        "nav": 3.344
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-08-04",
        "nav": 1.4848
      },
      {
        "date": "2026-08-05",
        "nav": 1.4692
      },
      {
        "date": "2026-08-06",
        "nav": 1.469
      },
      {
        "date": "2026-08-07",
        "nav": 1.4615
      },
      {
        "date": "2026-08-10",
        "nav": 1.4664
      },
      {
        "date": "2026-08-11",
        "nav": 1.4622
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-08-04",
        "nav": 0.6063
      },
      {
        "date": "2026-08-05",
        "nav": 0.6311
      },
      {
        "date": "2026-08-06",
        "nav": 0.6456
      },
      {
        "date": "2026-08-07",
        "nav": 0.6658
      },
      {
        "date": "2026-08-10",
        "nav": 0.6657
      },
      {
        "date": "2026-08-11",
        "nav": 0.6428
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-08-04",
        "nav": 13.693
      },
      {
        "date": "2026-08-05",
        "nav": 14.167
      },
      {
        "date": "2026-08-06",
        "nav": 14.364
      },
      {
        "date": "2026-08-07",
        "nav": 14.817
      },
      {
        "date": "2026-08-10",
        "nav": 14.74
      },
      {
        "date": "2026-08-11",
        "nav": 14.701
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.3,
      "nav": 4.6563,
      "price": 4.6563,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 4.2467,
      "price": 4.2467,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.17,
      "nav": 5.8102,
      "price": 5.8102,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.1,
      "nav": 0.7147,
      "price": 0.7147,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 2.1204,
      "price": 2.1204,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.0,
      "nav": 2.7383,
      "price": 2.7383,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 5.5541,
      "price": 5.5541,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.935,
      "price": 1.935,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 1.3659,
      "price": 1.3659,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.18,
      "nav": 3.507,
      "price": 3.507,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.115,
      "price": 1.115,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.364,
      "price": 2.364,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.7766,
      "price": 1.7766,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.08,
      "nav": 1.9478,
      "price": 1.9478,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.19,
      "nav": 1.6879,
      "price": 1.6879,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.4049,
      "price": 2.4049,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.5514,
      "price": 2.5514,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.024,
      "price": 1.024,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.3554,
      "price": 2.3554,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 1.3537,
      "price": 1.3537,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.06,
      "sharpe": -0.08,
      "calmar": -0.08
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.16,
      "sharpe": 1.14,
      "calmar": 1.14
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 4.95,
      "sharpe": 5.25,
      "calmar": 5.25
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.13,
      "sharpe": -1.56,
      "calmar": -1.56
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 3.58,
      "sharpe": -4.08,
      "calmar": -4.08
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.06,
      "sharpe": -6.29,
      "calmar": -6.29
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.7,
      "sharpe": -0.99,
      "calmar": -0.99
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.71,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.63,
      "sharpe": -0.04,
      "calmar": -0.04
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.31,
      "sharpe": 3.72,
      "calmar": 3.72
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.5,
      "sharpe": -1.27,
      "calmar": -1.27
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.51,
      "sharpe": -3.31,
      "calmar": -3.31
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 0.36,
      "sharpe": -9.15,
      "calmar": -9.15
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.5,
      "sharpe": -0.4,
      "calmar": -0.4
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.61,
      "sharpe": -0.49,
      "calmar": -0.49
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.83,
      "sharpe": 5.15,
      "calmar": 5.15
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.14,
      "sharpe": -1.88,
      "calmar": -1.88
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.0,
      "sharpe": 0.61,
      "calmar": 0.61
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.65,
      "sharpe": -1.2,
      "calmar": -1.2
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.78,
      "sharpe": 0.18,
      "calmar": 0.18
    }
  ],
  "news": [
    {
      "title": "“小莫，请带我去影厅看《千年莫高》。”在敦煌莫高窟数字展示中心，一位游客对AI导览机器人小莫说。小莫立即规划出一条移动路径，侧身引路，同时开口回应：“请跟我来，放映厅在这边。”游客对机器人说出指令，机器人读懂环境、自主规划路线，带游客前往目的地。这样流畅的交互，不是科幻桥段，而是搭载Tairos（钛螺丝）平台的人形机器人在真实场景中提供的服务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:02",
      "impact": "neutral"
    },
    {
      "title": "为推动汽车行业健康有序国际化发展，引导汽车行业企业规范境外竞争行为、加强合规建设，深化汽车产业链供应链国际合作，促进全球汽车行业发展进步，商务部、工业和信息化部、市场监管总局制定了《汽车行业境外竞争行为与合规建设指引》，现予印发，供工作中参考。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "15:05",
      "impact": "neutral"
    },
    {
      "title": "个人住房贷款最长可贷40年，银行网点落地执行了吗？9月1日，南都湾财社记者走访广州多家银行网点发现，执行节奏不一，有银行网点表示已开始执行，但对借款人有年龄要求，也有部分银行网点表示“还在等通知”“细则还没下来”。期限拉长，月供门槛随之降低。在专家看来，短期内，这将对刚需和改善型需求有一定提振作用。但对银行来说，期限拉长意味着利率风险和信用风险敞口同步扩大。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:42",
      "impact": "neutral"
    },
    {
      "title": "2025年10月，中国—东盟自贸区3.0版升级议定书正式签署。9月1日，商务部副部长鄢东在国新办新闻发布会上表示，目前，中国与东盟各国正在加快推进议定书的国内核准工作，共同努力推动议定书尽早生效实施，打造包容、现代、全面和互利的自贸协定。当天，发布会介绍了中国—东盟经贸合作情况暨第23届中国—东盟博览会、中国—东盟商务与投资峰会有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:41",
      "impact": "neutral"
    },
    {
      "title": "南方财经9月1日电，国家卫生健康委、财政部、国家中医药局、国家疾控局印发《关于做好2026年基本公共卫生服务工作的通知》。一、2026年，基本公共卫生服务经费人均财政补助标准为99元。二、加大基本公共卫生服务宣传力度，提高知晓率。明确由基本公共卫生服务补助资金支持提供的各类卫生健康服务相关宣传物料均应标识“基本公共卫生服务”字样。三、强化基本公共卫生主动服务理念。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:39",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道记者陈思琦深圳报道深圳楼市热度持续。9月1日，21世纪经济报道记者从深圳市住房和建设局获悉，8月深圳全市新建商品住宅和二手住宅合计成交6864套，同比增长8.5%，国家统计局发布的一、二手住宅销售价格指数连续5个月环比上涨，楼市持续保持稳中向好态势。新房方面，8月全市新建商品住宅网签销售2589套，同比增长20.4%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:38",
      "impact": "neutral"
    },
    {
      "title": "据央视新闻，在过境免签等便利政策带动下，北京口岸单日通关客流屡创新高。记者了解到，7月1日至8月30日，北京口岸出入境人员量达到438万人次，其中外国人入出境人员达141万人次，同比增长34.1%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:32",
      "impact": "neutral"
    },
    {
      "title": "市场监管总局就《网络交易小程序平台合规指引（征求意见稿）》公开征求意见。《指引》共19条。第一条至第三条是对《指引》的总体说明，其中第一条是目的和依据，第二条是适用范围与基本概念，第三条是基本要求。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:32",
      "impact": "neutral"
    },
    {
      "title": "为贯彻落实党中央、国务院关于提升平台经济常态化监管水平的决策部署，市场监管总局研究起草了《网络交易小程序平台合规指引（征求意见稿）》，现向社会公开征求意见。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:30",
      "impact": "neutral"
    },
    {
      "title": "今天上午9点钟，在合肥市肥东县石塘镇施工现场，首对500米长钢轨在铺轨机牵引下缓缓牵出、精准落位，标志着沪宁合高铁全线铺轨正式启动，为后续铺轨贯通奠定坚实基础。这也意味着，沪宁合高铁建设全面转入线上施工阶段。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:29",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 46,
    "label": "中性",
    "upDownRatio": "2,177/1,911",
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
