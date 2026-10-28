// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-28 16:34:04
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-28 16:34 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-28",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3681.47,
      "change": 33.17,
      "changePct": "+0.91%",
      "high": 3684.49,
      "low": 3652.37,
      "volume": 433622829.0,
      "amount": 751019240000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11473.18,
      "change": 227.45,
      "changePct": "+2.02%",
      "high": 11529.6,
      "low": 11292.7,
      "volume": 538092409.0,
      "amount": 877468330000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2634.76,
      "change": 86.61,
      "changePct": "+3.40%",
      "high": 2647.63,
      "low": 2562.9,
      "volume": 181409982.0,
      "amount": 452226230000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1282.93,
      "change": 30.65,
      "changePct": "+2.45%",
      "high": 1297.09,
      "low": 1257.96,
      "volume": 7681747.0,
      "amount": 75675740000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4083.87,
      "change": 34.32,
      "changePct": "+0.85%",
      "high": 4088.02,
      "low": 4054.11,
      "volume": 166560161.0,
      "amount": 419279470000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6640.89,
      "change": 129.47,
      "changePct": "+1.99%",
      "high": 6694.67,
      "low": 6534.65,
      "volume": 128801280.0,
      "amount": 284287790000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.86万亿",
      "label": "成交额",
      "rawAmount": 2859956800000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,549/725",
      "label": "涨/跌家数",
      "rawUp": 4549,
      "rawDown": 725,
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
    "totalInflow": 23.64,
    "totalOutflow": 0,
    "netFlow": 23.64,
    "netFlowTrend": [
      4.73,
      9.46,
      14.18,
      18.91,
      23.64
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
      "inflow": 9.63,
      "pct": 5.45
    },
    {
      "name": "半导体",
      "inflow": 3.69,
      "pct": 4.18
    },
    {
      "name": "5G",
      "inflow": 2.37,
      "pct": 4.98
    },
    {
      "name": "芯片",
      "inflow": 1.92,
      "pct": 4.08
    },
    {
      "name": "创新药",
      "inflow": 1.54,
      "pct": 1.15
    },
    {
      "name": "医疗",
      "inflow": 1.1,
      "pct": 0.91
    },
    {
      "name": "有色",
      "inflow": 1.0,
      "pct": 0.62
    },
    {
      "name": "军工",
      "inflow": 0.86,
      "pct": 0.89
    },
    {
      "name": "医药",
      "inflow": 0.77,
      "pct": 0.81
    },
    {
      "name": "传媒",
      "inflow": 0.76,
      "pct": 2.06
    },
    {
      "name": "人工智能",
      "inflow": 0.61,
      "pct": 2.67
    },
    {
      "name": "新能源车",
      "inflow": 0.35,
      "pct": 1.77
    },
    {
      "name": "光伏",
      "inflow": 0.31,
      "pct": 0.57
    },
    {
      "name": "新能源",
      "inflow": 0.28,
      "pct": 0.77
    },
    {
      "name": "地产",
      "inflow": 0.28,
      "pct": 0.52
    },
    {
      "name": "云计算",
      "inflow": 0.22,
      "pct": 1.25
    },
    {
      "name": "游戏",
      "inflow": 0.2,
      "pct": 1.72
    },
    {
      "name": "电子",
      "inflow": 0.1,
      "pct": 3.61
    },
    {
      "name": "家电",
      "inflow": 0.1,
      "pct": 1.83
    },
    {
      "name": "计算机",
      "inflow": 0.05,
      "pct": 0.59
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.503,
      "changePct": 5.45,
      "change": 0.026,
      "turnover": 32.11
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.78,
      "changePct": 4.98,
      "change": 0.037,
      "turnover": 7.9
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.797,
      "changePct": 4.18,
      "change": 0.032,
      "turnover": 12.29
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.868,
      "changePct": 4.08,
      "change": 0.034,
      "turnover": 6.4
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.661,
      "changePct": 3.61,
      "change": 0.023,
      "turnover": 0.33
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.846,
      "changePct": 2.67,
      "change": 0.022,
      "turnover": 2.02
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.794,
      "changePct": 2.06,
      "change": 0.016,
      "turnover": 2.52
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.337,
      "changePct": 1.83,
      "change": 0.024,
      "turnover": 0.35
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.324,
      "changePct": 1.77,
      "change": 0.023,
      "turnover": 1.16
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.007,
      "changePct": 1.72,
      "change": 0.017,
      "turnover": 0.67
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.457,
      "changePct": 1.25,
      "change": 0.018,
      "turnover": 0.74
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.79,
      "changePct": 1.15,
      "change": 0.009,
      "turnover": 5.14
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.332,
      "changePct": 0.91,
      "change": 0.003,
      "turnover": 3.67
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.021,
      "changePct": 0.89,
      "change": 0.009,
      "turnover": 2.86
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.374,
      "changePct": 0.81,
      "change": 0.003,
      "turnover": 2.57
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.972,
      "changePct": 0.77,
      "change": 0.015,
      "turnover": 0.92
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.455,
      "changePct": 0.62,
      "change": 0.009,
      "turnover": 3.32
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.017,
      "changePct": 0.59,
      "change": 0.006,
      "turnover": 0.18
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.703,
      "changePct": 0.57,
      "change": 0.004,
      "turnover": 1.02
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.158,
      "changePct": 0.52,
      "change": 0.006,
      "turnover": 0.92
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.965,
      "changePct": 0.21,
      "change": 0.002,
      "turnover": 0.06
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.068,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.44
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.209,
      "changePct": -0.17,
      "change": -0.002,
      "turnover": 3.68
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.872,
      "changePct": -0.46,
      "change": -0.004,
      "turnover": 11.68
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.475,
      "changePct": -0.84,
      "change": -0.004,
      "turnover": 6.69
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.694,
      "changePct": -1.0,
      "change": -0.007,
      "turnover": 0.55
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.487,
      "changePct": -1.22,
      "change": -0.006,
      "turnover": 0.21
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.407,
      "changePct": -1.93,
      "change": -0.008,
      "turnover": 4.59
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.354,
      "changePct": 2.58,
      "amount": 92.96,
      "netFlow": 23.24
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.152,
      "changePct": 0.7,
      "amount": 45.59,
      "netFlow": 11.4
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.672,
      "changePct": 2.07,
      "amount": 40.42,
      "netFlow": 10.11
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.866,
      "changePct": 0.14,
      "amount": 24.8,
      "netFlow": 6.2
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.797,
      "changePct": 4.18,
      "amount": 12.29,
      "netFlow": 3.07
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.339,
      "changePct": 0.7,
      "amount": 11.19,
      "netFlow": 2.8
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.035,
      "changePct": 0.55,
      "amount": 8.21,
      "netFlow": 2.05
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.374,
      "changePct": 0.81,
      "amount": 2.57,
      "netFlow": 0.64
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.972,
      "changePct": 0.77,
      "amount": 0.92,
      "netFlow": 0.23
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.475,
      "changePct": -0.84,
      "amount": 6.69,
      "netFlow": -1.67
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.152,
      "changePct": 0.7,
      "amount": 45.59,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.866,
      "changePct": 0.14,
      "amount": 24.8,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.672,
      "changePct": 2.07,
      "amount": 40.42,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.339,
      "changePct": 0.7,
      "amount": 11.19,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.035,
      "changePct": 0.55,
      "amount": 8.21,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 32.11,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "5G",
      "turnover": 7.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 12.29,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "芯片",
      "turnover": 6.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 2.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.74,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.14,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 3.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.92,
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
      "nav": 4.1056,
      "ret1w": 5.98,
      "ret1m": 3.11,
      "ret3m": -8.15,
      "ret6m": 3.21,
      "ret1y": -9.88,
      "ret2y": 2.05,
      "ret3y": 97.56
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.1851,
      "ret1w": 4.14,
      "ret1m": -5.29,
      "ret3m": -17.43,
      "ret6m": -21.23,
      "ret1y": -32.29,
      "ret2y": -22.0,
      "ret3y": 11.65
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.0617,
      "ret1w": 5.12,
      "ret1m": -8.4,
      "ret3m": -27.2,
      "ret6m": -8.66,
      "ret1y": -15.98,
      "ret2y": 16.07,
      "ret3y": 107.16
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.709,
      "ret1w": -0.88,
      "ret1m": 1.18,
      "ret3m": 2.41,
      "ret6m": -1.76,
      "ret1y": -4.15,
      "ret2y": -11.77,
      "ret3y": -6.07
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9575,
      "ret1w": -0.61,
      "ret1m": 1.67,
      "ret3m": 1.12,
      "ret6m": -8.54,
      "ret1y": -27.88,
      "ret2y": -30.36,
      "ret3y": -22.67
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5523,
      "ret1w": 0.39,
      "ret1m": -0.95,
      "ret3m": -3.25,
      "ret6m": -5.47,
      "ret1y": -23.14,
      "ret2y": -25.71,
      "ret3y": 2.25
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1911,
      "ret1w": 0.1,
      "ret1m": 1.13,
      "ret3m": -0.68,
      "ret6m": -5.76,
      "ret1y": -8.97,
      "ret2y": 0.36,
      "ret3y": 24.76
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.691,
      "ret1w": 2.98,
      "ret1m": -2.59,
      "ret3m": -10.48,
      "ret6m": -3.81,
      "ret1y": -16.7,
      "ret2y": -10.53,
      "ret3y": 28.69
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1534,
      "ret1w": 2.13,
      "ret1m": -2.35,
      "ret3m": -10.82,
      "ret6m": -10.51,
      "ret1y": -18.08,
      "ret2y": -10.05,
      "ret3y": 7.97
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.679,
      "ret1w": 3.8,
      "ret1m": -3.63,
      "ret3m": -16.65,
      "ret6m": -20.95,
      "ret1y": -10.61,
      "ret2y": 15.72,
      "ret3y": 122.14
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.088,
      "ret1w": -0.64,
      "ret1m": -0.27,
      "ret3m": 0.65,
      "ret6m": -1.54,
      "ret1y": -4.81,
      "ret2y": -13.86,
      "ret3y": -16.24
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.259,
      "ret1w": 2.45,
      "ret1m": -1.48,
      "ret3m": -6.3,
      "ret6m": 0.22,
      "ret1y": -15.11,
      "ret2y": -13.71,
      "ret3y": 3.43
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2277,
      "ret1w": 4.34,
      "ret1m": -9.83,
      "ret3m": -25.29,
      "ret6m": -33.16,
      "ret1y": -60.49,
      "ret2y": -60.88,
      "ret3y": -33.97
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8465,
      "ret1w": -0.52,
      "ret1m": 0.84,
      "ret3m": -0.7,
      "ret6m": -3.24,
      "ret1y": 2.05,
      "ret2y": -6.35,
      "ret3y": -7.97
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4489,
      "ret1w": 2.18,
      "ret1m": -2.84,
      "ret3m": -10.78,
      "ret6m": -4.77,
      "ret1y": -15.95,
      "ret2y": -7.99,
      "ret3y": 25.35
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.6845,
      "ret1w": 5.87,
      "ret1m": -8.47,
      "ret3m": -24.08,
      "ret6m": -24.16,
      "ret1y": -27.49,
      "ret2y": 14.83,
      "ret3y": 65.52
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5466,
      "ret1w": 0.12,
      "ret1m": 0.01,
      "ret3m": -1.1,
      "ret6m": 2.33,
      "ret1y": -5.12,
      "ret2y": -4.92,
      "ret3y": 0.9
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.911,
      "ret1w": 2.13,
      "ret1m": -5.3,
      "ret3m": -9.44,
      "ret6m": -11.04,
      "ret1y": -9.17,
      "ret2y": -16.96,
      "ret3y": -19.88
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3194,
      "ret1w": -0.66,
      "ret1m": 0.65,
      "ret3m": 2.72,
      "ret6m": -1.1,
      "ret1y": -4.6,
      "ret2y": 1.2,
      "ret3y": 2.89
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2056,
      "ret1w": 1.53,
      "ret1m": -2.59,
      "ret3m": -6.28,
      "ret6m": -1.4,
      "ret1y": -6.03,
      "ret2y": 3.01,
      "ret3y": 40.37
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.0167,
      "ret1w": 2.61,
      "ret1m": -4.02,
      "ret3m": -14.16,
      "ret6m": -17.66,
      "ret1y": -23.54,
      "ret2y": -13.1,
      "ret3y": 8.97
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0822,
      "ret1w": 2.62,
      "ret1m": -4.01,
      "ret3m": -14.12,
      "ret6m": -17.57,
      "ret1y": -23.39,
      "ret2y": -12.76,
      "ret3y": 9.85
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0558,
      "ret1w": 0.33,
      "ret1m": -0.09,
      "ret3m": -0.96,
      "ret6m": -3.66,
      "ret1y": -3.26,
      "ret2y": -1.69,
      "ret3y": 3.53
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0307,
      "ret1w": 0.33,
      "ret1m": -0.08,
      "ret3m": -0.89,
      "ret6m": -3.51,
      "ret1y": -2.97,
      "ret2y": -1.1,
      "ret3y": 4.79
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6845,
      "ret1w": 0.26,
      "ret1m": -0.91,
      "ret3m": -1.67,
      "ret6m": -5.14,
      "ret1y": -13.41,
      "ret2y": -15.21,
      "ret3y": -6.08
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7024,
      "ret1w": 0.27,
      "ret1m": -0.89,
      "ret3m": -1.61,
      "ret6m": -5.02,
      "ret1y": -13.19,
      "ret2y": -14.78,
      "ret3y": -5.13
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.2572,
      "ret1w": 3.48,
      "ret1m": -4.22,
      "ret3m": -15.49,
      "ret6m": -13.96,
      "ret1y": -10.06,
      "ret2y": 12.63,
      "ret3y": 94.15
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2873,
      "ret1w": 1.73,
      "ret1m": -2.21,
      "ret3m": -6.27,
      "ret6m": -6.97,
      "ret1y": -8.64,
      "ret2y": 2.48,
      "ret3y": 44.73
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6905,
      "ret1w": 1.23,
      "ret1m": -1.96,
      "ret3m": -2.81,
      "ret6m": -4.71,
      "ret1y": -21.21,
      "ret2y": -14.87,
      "ret3y": -6.71
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9456,
      "ret1w": 2.57,
      "ret1m": -0.64,
      "ret3m": -4.87,
      "ret6m": -3.61,
      "ret1y": 2.42,
      "ret2y": 21.7,
      "ret3y": 93.88
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4634,
      "ret1w": 0.35,
      "ret1m": -1.43,
      "ret3m": -6.74,
      "ret6m": -12.42,
      "ret1y": -9.91,
      "ret2y": -1.57,
      "ret3y": 23.8
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4726,
      "ret1w": 0.34,
      "ret1m": -1.42,
      "ret3m": -6.71,
      "ret6m": -12.32,
      "ret1y": -9.72,
      "ret2y": -1.17,
      "ret3y": 24.83
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2567,
      "ret1w": 0.14,
      "ret1m": 0.0,
      "ret3m": -0.72,
      "ret6m": -0.88,
      "ret1y": -2.85,
      "ret2y": -2.38,
      "ret3y": 0.19
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0753,
      "ret1w": 0.29,
      "ret1m": -0.64,
      "ret3m": -2.33,
      "ret6m": -5.55,
      "ret1y": -6.19,
      "ret2y": -7.94,
      "ret3y": 0.73
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1547,
      "ret1w": 0.47,
      "ret1m": -1.94,
      "ret3m": -12.35,
      "ret6m": -15.4,
      "ret1y": -24.68,
      "ret2y": -27.72,
      "ret3y": -18.33
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8431,
      "ret1w": 1.45,
      "ret1m": -0.29,
      "ret3m": -2.74,
      "ret6m": -3.74,
      "ret1y": -12.3,
      "ret2y": 3.12,
      "ret3y": 28.87
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.485,
      "ret1w": 4.41,
      "ret1m": -5.91,
      "ret3m": -21.21,
      "ret6m": -27.04,
      "ret1y": -28.55,
      "ret2y": 5.12,
      "ret3y": 86.7
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5431,
      "ret1w": -0.09,
      "ret1m": 0.87,
      "ret3m": 3.03,
      "ret6m": 3.91,
      "ret1y": 2.75,
      "ret2y": 1.61,
      "ret3y": 0.87
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5397,
      "ret1w": 6.32,
      "ret1m": -1.1,
      "ret3m": -8.29,
      "ret6m": -6.87,
      "ret1y": -19.94,
      "ret2y": -9.73,
      "ret3y": -9.55
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 10.402,
      "ret1w": 4.24,
      "ret1m": -8.92,
      "ret3m": -23.78,
      "ret6m": -18.84,
      "ret1y": -6.28,
      "ret2y": 27.15,
      "ret3y": 148.91
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0565,
      "ret1w": 0.14,
      "ret1m": -0.05,
      "ret3m": -0.41,
      "ret6m": -0.63,
      "ret1y": -1.02,
      "ret2y": 0.09,
      "ret3y": 2.93
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1049,
      "ret1w": 0.15,
      "ret1m": -0.05,
      "ret3m": -0.41,
      "ret6m": -0.58,
      "ret1y": -0.91,
      "ret2y": 0.33,
      "ret3y": 3.61
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0681,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.2,
      "ret6m": 0.45,
      "ret1y": 0.75,
      "ret2y": 1.7,
      "ret3y": 3.19
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1026,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.23,
      "ret6m": 0.49,
      "ret1y": 0.82,
      "ret2y": 1.64,
      "ret3y": 3.98
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1124,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.25,
      "ret6m": 0.54,
      "ret1y": 0.93,
      "ret2y": 1.85,
      "ret3y": 4.41
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0786,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.17,
      "ret6m": 0.36,
      "ret1y": 0.65,
      "ret2y": 1.54,
      "ret3y": 3.23
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0936,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.19,
      "ret6m": 0.43,
      "ret1y": 0.8,
      "ret2y": 1.86,
      "ret3y": 3.89
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.017,
      "ret1w": 0.68,
      "ret1m": -0.65,
      "ret3m": -3.14,
      "ret6m": -3.39,
      "ret1y": -5.25,
      "ret2y": -0.27,
      "ret3y": 5.88
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.171,
      "ret1w": 0.78,
      "ret1m": -0.74,
      "ret3m": -3.16,
      "ret6m": -1.84,
      "ret1y": -5.06,
      "ret2y": -1.71,
      "ret3y": 0.97
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.024,
      "ret1w": 0.68,
      "ret1m": -0.65,
      "ret3m": -3.11,
      "ret6m": -3.3,
      "ret1y": -5.06,
      "ret2y": 0.13,
      "ret3y": 6.74
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0457,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.19,
      "ret6m": 0.52,
      "ret1y": 0.89,
      "ret2y": 1.84,
      "ret3y": 3.74
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1192,
      "ret1w": 0.66,
      "ret1m": -0.88,
      "ret3m": -3.48,
      "ret6m": -3.98,
      "ret1y": -7.46,
      "ret2y": -5.49,
      "ret3y": 1.4
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1992,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": -0.23,
      "ret6m": -1.33,
      "ret1y": -2.4,
      "ret2y": 0.35,
      "ret3y": 9.5
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1192,
      "ret1w": 0.18,
      "ret1m": -0.27,
      "ret3m": -1.11,
      "ret6m": -1.02,
      "ret1y": -1.57,
      "ret2y": 0.42,
      "ret3y": 6.65
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1902,
      "ret1w": 0.19,
      "ret1m": -0.25,
      "ret3m": -1.07,
      "ret6m": -0.92,
      "ret1y": -1.36,
      "ret2y": 0.84,
      "ret3y": 7.55
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.179,
      "ret1w": 3.22,
      "ret1m": 1.73,
      "ret3m": -13.01,
      "ret6m": -3.28,
      "ret1y": 4.21,
      "ret2y": 51.85,
      "ret3y": 112.17
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9711,
      "ret1w": 0.69,
      "ret1m": -0.14,
      "ret3m": -1.48,
      "ret6m": 3.03,
      "ret1y": 3.88,
      "ret2y": 4.92,
      "ret3y": 29.86
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.648,
      "ret1w": -0.99,
      "ret1m": -3.4,
      "ret3m": -8.75,
      "ret6m": -13.76,
      "ret1y": -21.89,
      "ret2y": -12.9,
      "ret3y": 16.47
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3768,
      "ret1w": 2.91,
      "ret1m": 2.24,
      "ret3m": -5.54,
      "ret6m": 9.9,
      "ret1y": 10.62,
      "ret2y": 11.48,
      "ret3y": 66.49
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9211,
      "ret1w": -0.02,
      "ret1m": 0.39,
      "ret3m": 0.52,
      "ret6m": -1.72,
      "ret1y": -3.1,
      "ret2y": -6.07,
      "ret3y": -2.2
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4358,
      "ret1w": 1.96,
      "ret1m": -0.37,
      "ret3m": -10.88,
      "ret6m": -5.25,
      "ret1y": -0.25,
      "ret2y": 23.11,
      "ret3y": 70.49
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.46,
      "ret1w": 0.7,
      "ret1m": -0.82,
      "ret3m": -1.98,
      "ret6m": -1.11,
      "ret1y": -1.15,
      "ret2y": 0.86,
      "ret3y": 15.63
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.796,
      "ret1w": -1.85,
      "ret1m": -4.67,
      "ret3m": -17.34,
      "ret6m": -16.39,
      "ret1y": -29.12,
      "ret2y": -31.26,
      "ret3y": -15.41
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.5689,
      "ret1w": 1.21,
      "ret1m": -0.45,
      "ret3m": -13.61,
      "ret6m": -7.73,
      "ret1y": -1.37,
      "ret2y": 45.68,
      "ret3y": 119.17
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5572,
      "ret1w": -0.41,
      "ret1m": -1.88,
      "ret3m": -0.72,
      "ret6m": 8.49,
      "ret1y": 2.23,
      "ret2y": 27.58,
      "ret3y": 48.59
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.611,
      "ret1w": 1.16,
      "ret1m": -1.65,
      "ret3m": -8.56,
      "ret6m": -3.62,
      "ret1y": 0.23,
      "ret2y": 12.01,
      "ret3y": 40.87
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2012,
      "ret1w": 0.67,
      "ret1m": -0.59,
      "ret3m": -8.49,
      "ret6m": -5.8,
      "ret1y": -6.98,
      "ret2y": -0.53,
      "ret3y": 21.97
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.25,
      "ret1w": -0.71,
      "ret1m": 0.32,
      "ret3m": 1.21,
      "ret6m": -7.48,
      "ret1y": -3.1,
      "ret2y": -1.73,
      "ret3y": -11.19
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.93,
      "ret1w": 1.05,
      "ret1m": -1.53,
      "ret3m": -4.93,
      "ret6m": -1.73,
      "ret1y": -14.9,
      "ret2y": -4.5,
      "ret3y": 32.17
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.7015,
      "ret1w": 1.26,
      "ret1m": -1.76,
      "ret3m": -11.83,
      "ret6m": -7.56,
      "ret1y": -1.67,
      "ret2y": 18.05,
      "ret3y": 50.61
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0164,
      "ret1w": 0.0,
      "ret1m": 0.07,
      "ret3m": 0.32,
      "ret6m": 0.77,
      "ret1y": 1.34,
      "ret2y": 2.52,
      "ret3y": 3.96
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0155,
      "ret1w": 0.0,
      "ret1m": 0.07,
      "ret3m": 0.32,
      "ret6m": 0.8,
      "ret1y": 1.36,
      "ret2y": 2.58,
      "ret3y": 4.13
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.235,
      "ret1w": 1.4,
      "ret1m": -0.88,
      "ret3m": -7.9,
      "ret6m": -13.21,
      "ret1y": -17.61,
      "ret2y": -15.53,
      "ret3y": 0.0
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.364,
      "ret1w": 1.94,
      "ret1m": -2.19,
      "ret3m": -10.76,
      "ret6m": -14.1,
      "ret1y": -19.84,
      "ret2y": -13.06,
      "ret3y": 10.62
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4737,
      "ret1w": 0.36,
      "ret1m": -2.13,
      "ret3m": -4.91,
      "ret6m": -6.43,
      "ret1y": -17.31,
      "ret2y": -0.89,
      "ret3y": 34.34
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8994,
      "ret1w": 1.16,
      "ret1m": -1.18,
      "ret3m": -7.37,
      "ret6m": -9.64,
      "ret1y": -11.59,
      "ret2y": -5.13,
      "ret3y": 11.28
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.955,
      "ret1w": 1.16,
      "ret1m": -1.17,
      "ret3m": -7.34,
      "ret6m": -9.55,
      "ret1y": -11.41,
      "ret2y": -4.75,
      "ret3y": 12.18
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7278,
      "ret1w": 1.89,
      "ret1m": -2.76,
      "ret3m": -9.79,
      "ret6m": -10.32,
      "ret1y": -17.7,
      "ret2y": -8.47,
      "ret3y": 13.71
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6088,
      "ret1w": 0.81,
      "ret1m": -0.58,
      "ret3m": -5.47,
      "ret6m": -9.73,
      "ret1y": -12.5,
      "ret2y": -10.94,
      "ret3y": 5.84
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.456,
      "ret1w": 0.89,
      "ret1m": -1.62,
      "ret3m": -4.46,
      "ret6m": -5.64,
      "ret1y": -12.9,
      "ret2y": -2.47,
      "ret3y": 21.81
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5926,
      "ret1w": 2.51,
      "ret1m": -2.11,
      "ret3m": -13.1,
      "ret6m": -19.55,
      "ret1y": -19.55,
      "ret2y": -14.85,
      "ret3y": 15.41
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9992,
      "ret1w": 0.55,
      "ret1m": 0.74,
      "ret3m": -2.41,
      "ret6m": -7.51,
      "ret1y": -9.6,
      "ret2y": -10.47,
      "ret3y": 4.01
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4805,
      "ret1w": -0.92,
      "ret1m": -0.29,
      "ret3m": 0.22,
      "ret6m": -1.49,
      "ret1y": 0.59,
      "ret2y": 6.24,
      "ret3y": 27.92
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4347,
      "ret1w": 1.18,
      "ret1m": 0.47,
      "ret3m": -3.03,
      "ret6m": 4.14,
      "ret1y": 5.9,
      "ret2y": 7.74,
      "ret3y": 32.44
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.3181,
      "ret1w": 1.85,
      "ret1m": -1.62,
      "ret3m": -9.99,
      "ret6m": -15.41,
      "ret1y": -20.32,
      "ret2y": -14.29,
      "ret3y": 8.34
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9953,
      "ret1w": -1.57,
      "ret1m": -3.01,
      "ret3m": -14.65,
      "ret6m": -14.32,
      "ret1y": -18.22,
      "ret2y": -11.28,
      "ret3y": 12.45
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9987,
      "ret1w": -1.56,
      "ret1m": -3.0,
      "ret3m": -14.52,
      "ret6m": -14.15,
      "ret1y": -18.05,
      "ret2y": -11.16,
      "ret3y": 12.21
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.215,
      "ret1w": -1.78,
      "ret1m": -3.79,
      "ret3m": -12.19,
      "ret6m": -13.93,
      "ret1y": -19.63,
      "ret2y": -13.85,
      "ret3y": 6.72
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2435,
      "ret1w": -1.78,
      "ret1m": -3.79,
      "ret3m": -12.16,
      "ret6m": -13.85,
      "ret1y": -19.47,
      "ret2y": -13.51,
      "ret3y": 7.58
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.711,
      "ret1w": -1.21,
      "ret1m": -3.89,
      "ret3m": -14.05,
      "ret6m": -21.33,
      "ret1y": -19.69,
      "ret2y": -11.77,
      "ret3y": 19.75
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.16,
      "ret1w": 0.09,
      "ret1m": 0.11,
      "ret3m": -0.14,
      "ret6m": -0.51,
      "ret1y": -0.54,
      "ret2y": 1.06,
      "ret3y": 5.71
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1803,
      "ret1w": 0.08,
      "ret1m": 0.11,
      "ret3m": -0.12,
      "ret6m": -0.44,
      "ret1y": -0.4,
      "ret2y": 1.37,
      "ret3y": 6.34
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0886,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.22,
      "ret6m": 0.53,
      "ret1y": 0.9,
      "ret2y": 2.01,
      "ret3y": 3.78
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4126,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.2,
      "ret6m": 0.13,
      "ret1y": 0.2,
      "ret2y": 0.73,
      "ret3y": 5.52
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4658,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.23,
      "ret6m": 0.23,
      "ret1y": 0.4,
      "ret2y": 1.13,
      "ret3y": 6.36
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9289,
      "ret1w": 1.02,
      "ret1m": -1.47,
      "ret3m": -6.78,
      "ret6m": -7.17,
      "ret1y": 0.71,
      "ret2y": 10.84,
      "ret3y": 36.51
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0662,
      "ret1w": 2.12,
      "ret1m": -1.38,
      "ret3m": -9.42,
      "ret6m": -13.93,
      "ret1y": -11.67,
      "ret2y": -7.31,
      "ret3y": 16.09
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-09-23",
        "nav": 4.7821
      },
      {
        "date": "2026-09-24",
        "nav": 4.6768
      },
      {
        "date": "2026-09-28",
        "nav": 4.4698
      },
      {
        "date": "2026-09-29",
        "nav": 4.4829
      },
      {
        "date": "2026-09-30",
        "nav": 4.4239
      },
      {
        "date": "2026-10-08",
        "nav": 4.2451
      },
      {
        "date": "2026-10-09",
        "nav": 4.2108
      },
      {
        "date": "2026-10-12",
        "nav": 4.1134
      },
      {
        "date": "2026-10-13",
        "nav": 4.1372
      },
      {
        "date": "2026-10-14",
        "nav": 4.0211
      },
      {
        "date": "2026-10-15",
        "nav": 3.8385
      },
      {
        "date": "2026-10-16",
        "nav": 3.7984
      },
      {
        "date": "2026-10-19",
        "nav": 3.8371
      },
      {
        "date": "2026-10-20",
        "nav": 3.9501
      },
      {
        "date": "2026-10-21",
        "nav": 3.9819
      },
      {
        "date": "2026-10-22",
        "nav": 3.8807
      },
      {
        "date": "2026-10-23",
        "nav": 4.0946
      },
      {
        "date": "2026-10-26",
        "nav": 4.0027
      },
      {
        "date": "2026-10-27",
        "nav": 3.8739
      },
      {
        "date": "2026-10-28",
        "nav": 4.1056
      }
    ],
    "580008": [
      {
        "date": "2026-09-23",
        "nav": 4.211
      },
      {
        "date": "2026-09-24",
        "nav": 4.0766
      },
      {
        "date": "2026-09-28",
        "nav": 3.8576
      },
      {
        "date": "2026-09-29",
        "nav": 3.883
      },
      {
        "date": "2026-09-30",
        "nav": 3.846
      },
      {
        "date": "2026-10-08",
        "nav": 3.7223
      },
      {
        "date": "2026-10-09",
        "nav": 3.6654
      },
      {
        "date": "2026-10-12",
        "nav": 3.5443
      },
      {
        "date": "2026-10-13",
        "nav": 3.5872
      },
      {
        "date": "2026-10-14",
        "nav": 3.4707
      },
      {
        "date": "2026-10-15",
        "nav": 3.3694
      },
      {
        "date": "2026-10-16",
        "nav": 3.3672
      },
      {
        "date": "2026-10-19",
        "nav": 3.3478
      },
      {
        "date": "2026-10-20",
        "nav": 3.3432
      },
      {
        "date": "2026-10-21",
        "nav": 3.3629
      },
      {
        "date": "2026-10-22",
        "nav": 3.182
      },
      {
        "date": "2026-10-23",
        "nav": 3.2391
      },
      {
        "date": "2026-10-26",
        "nav": 3.1241
      },
      {
        "date": "2026-10-27",
        "nav": 3.0584
      },
      {
        "date": "2026-10-28",
        "nav": 3.1851
      }
    ],
    "540010": [
      {
        "date": "2026-09-23",
        "nav": 6.1437
      },
      {
        "date": "2026-09-24",
        "nav": 5.9535
      },
      {
        "date": "2026-09-28",
        "nav": 5.5791
      },
      {
        "date": "2026-09-29",
        "nav": 5.6926
      },
      {
        "date": "2026-09-30",
        "nav": 5.6419
      },
      {
        "date": "2026-10-08",
        "nav": 5.1103
      },
      {
        "date": "2026-10-09",
        "nav": 5.0443
      },
      {
        "date": "2026-10-12",
        "nav": 4.8633
      },
      {
        "date": "2026-10-13",
        "nav": 4.9772
      },
      {
        "date": "2026-10-14",
        "nav": 4.7455
      },
      {
        "date": "2026-10-15",
        "nav": 4.5213
      },
      {
        "date": "2026-10-16",
        "nav": 4.4448
      },
      {
        "date": "2026-10-19",
        "nav": 4.3331
      },
      {
        "date": "2026-10-20",
        "nav": 4.3609
      },
      {
        "date": "2026-10-21",
        "nav": 4.434
      },
      {
        "date": "2026-10-22",
        "nav": 4.1388
      },
      {
        "date": "2026-10-23",
        "nav": 4.1836
      },
      {
        "date": "2026-10-26",
        "nav": 4.0271
      },
      {
        "date": "2026-10-27",
        "nav": 3.8638
      },
      {
        "date": "2026-10-28",
        "nav": 4.0617
      }
    ],
    "540009": [
      {
        "date": "2026-09-23",
        "nav": 0.6944
      },
      {
        "date": "2026-09-24",
        "nav": 0.6928
      },
      {
        "date": "2026-09-28",
        "nav": 0.6923
      },
      {
        "date": "2026-09-29",
        "nav": 0.6901
      },
      {
        "date": "2026-09-30",
        "nav": 0.6971
      },
      {
        "date": "2026-10-08",
        "nav": 0.6912
      },
      {
        "date": "2026-10-09",
        "nav": 0.697
      },
      {
        "date": "2026-10-12",
        "nav": 0.7034
      },
      {
        "date": "2026-10-13",
        "nav": 0.6968
      },
      {
        "date": "2026-10-14",
        "nav": 0.6987
      },
      {
        "date": "2026-10-15",
        "nav": 0.6991
      },
      {
        "date": "2026-10-16",
        "nav": 0.7061
      },
      {
        "date": "2026-10-19",
        "nav": 0.7112
      },
      {
        "date": "2026-10-20",
        "nav": 0.7081
      },
      {
        "date": "2026-10-21",
        "nav": 0.7007
      },
      {
        "date": "2026-10-22",
        "nav": 0.6976
      },
      {
        "date": "2026-10-23",
        "nav": 0.7123
      },
      {
        "date": "2026-10-26",
        "nav": 0.7209
      },
      {
        "date": "2026-10-27",
        "nav": 0.7153
      },
      {
        "date": "2026-10-28",
        "nav": 0.709
      }
    ],
    "540008": [
      {
        "date": "2026-09-23",
        "nav": 2.0093
      },
      {
        "date": "2026-09-24",
        "nav": 1.9707
      },
      {
        "date": "2026-09-28",
        "nav": 1.9358
      },
      {
        "date": "2026-09-29",
        "nav": 1.951
      },
      {
        "date": "2026-09-30",
        "nav": 1.9987
      },
      {
        "date": "2026-10-08",
        "nav": 1.9702
      },
      {
        "date": "2026-10-09",
        "nav": 2.0018
      },
      {
        "date": "2026-10-12",
        "nav": 1.9779
      },
      {
        "date": "2026-10-13",
        "nav": 1.9669
      },
      {
        "date": "2026-10-14",
        "nav": 1.9307
      },
      {
        "date": "2026-10-15",
        "nav": 1.8889
      },
      {
        "date": "2026-10-16",
        "nav": 1.9227
      },
      {
        "date": "2026-10-19",
        "nav": 1.956
      },
      {
        "date": "2026-10-20",
        "nav": 1.9299
      },
      {
        "date": "2026-10-21",
        "nav": 1.9254
      },
      {
        "date": "2026-10-22",
        "nav": 1.9208
      },
      {
        "date": "2026-10-23",
        "nav": 1.9687
      },
      {
        "date": "2026-10-26",
        "nav": 2.0066
      },
      {
        "date": "2026-10-27",
        "nav": 1.9695
      },
      {
        "date": "2026-10-28",
        "nav": 1.9575
      }
    ],
    "540007": [
      {
        "date": "2026-09-23",
        "nav": 2.71
      },
      {
        "date": "2026-09-24",
        "nav": 2.6746
      },
      {
        "date": "2026-09-28",
        "nav": 2.6381
      },
      {
        "date": "2026-09-29",
        "nav": 2.6473
      },
      {
        "date": "2026-09-30",
        "nav": 2.7093
      },
      {
        "date": "2026-10-08",
        "nav": 2.6793
      },
      {
        "date": "2026-10-09",
        "nav": 2.6661
      },
      {
        "date": "2026-10-12",
        "nav": 2.6618
      },
      {
        "date": "2026-10-13",
        "nav": 2.6521
      },
      {
        "date": "2026-10-14",
        "nav": 2.596
      },
      {
        "date": "2026-10-15",
        "nav": 2.5144
      },
      {
        "date": "2026-10-16",
        "nav": 2.5987
      },
      {
        "date": "2026-10-19",
        "nav": 2.6154
      },
      {
        "date": "2026-10-20",
        "nav": 2.5823
      },
      {
        "date": "2026-10-21",
        "nav": 2.5769
      },
      {
        "date": "2026-10-22",
        "nav": 2.5268
      },
      {
        "date": "2026-10-23",
        "nav": 2.5747
      },
      {
        "date": "2026-10-26",
        "nav": 2.5699
      },
      {
        "date": "2026-10-27",
        "nav": 2.5423
      },
      {
        "date": "2026-10-28",
        "nav": 2.5523
      }
    ],
    "540006": [
      {
        "date": "2026-09-23",
        "nav": 5.3426
      },
      {
        "date": "2026-09-24",
        "nav": 5.2847
      },
      {
        "date": "2026-09-28",
        "nav": 5.2267
      },
      {
        "date": "2026-09-29",
        "nav": 5.2374
      },
      {
        "date": "2026-09-30",
        "nav": 5.2878
      },
      {
        "date": "2026-10-08",
        "nav": 5.2571
      },
      {
        "date": "2026-10-09",
        "nav": 5.2875
      },
      {
        "date": "2026-10-12",
        "nav": 5.2735
      },
      {
        "date": "2026-10-13",
        "nav": 5.2113
      },
      {
        "date": "2026-10-14",
        "nav": 5.1798
      },
      {
        "date": "2026-10-15",
        "nav": 5.1465
      },
      {
        "date": "2026-10-16",
        "nav": 5.1959
      },
      {
        "date": "2026-10-19",
        "nav": 5.2416
      },
      {
        "date": "2026-10-20",
        "nav": 5.2188
      },
      {
        "date": "2026-10-21",
        "nav": 5.1331
      },
      {
        "date": "2026-10-22",
        "nav": 5.0562
      },
      {
        "date": "2026-10-23",
        "nav": 5.1876
      },
      {
        "date": "2026-10-26",
        "nav": 5.2075
      },
      {
        "date": "2026-10-27",
        "nav": 5.1857
      },
      {
        "date": "2026-10-28",
        "nav": 5.1911
      }
    ],
    "519975": [
      {
        "date": "2026-09-23",
        "nav": 1.999
      },
      {
        "date": "2026-09-24",
        "nav": 1.955
      },
      {
        "date": "2026-09-28",
        "nav": 1.889
      },
      {
        "date": "2026-09-29",
        "nav": 1.904
      },
      {
        "date": "2026-09-30",
        "nav": 1.897
      },
      {
        "date": "2026-10-08",
        "nav": 1.869
      },
      {
        "date": "2026-10-09",
        "nav": 1.866
      },
      {
        "date": "2026-10-12",
        "nav": 1.819
      },
      {
        "date": "2026-10-13",
        "nav": 1.82
      },
      {
        "date": "2026-10-14",
        "nav": 1.797
      },
      {
        "date": "2026-10-15",
        "nav": 1.736
      },
      {
        "date": "2026-10-16",
        "nav": 1.737
      },
      {
        "date": "2026-10-19",
        "nav": 1.736
      },
      {
        "date": "2026-10-20",
        "nav": 1.748
      },
      {
        "date": "2026-10-21",
        "nav": 1.736
      },
      {
        "date": "2026-10-22",
        "nav": 1.688
      },
      {
        "date": "2026-10-23",
        "nav": 1.726
      },
      {
        "date": "2026-10-26",
        "nav": 1.704
      },
      {
        "date": "2026-10-27",
        "nav": 1.642
      },
      {
        "date": "2026-10-28",
        "nav": 1.691
      }
    ],
    "519965": [
      {
        "date": "2026-09-23",
        "nav": 1.363
      },
      {
        "date": "2026-09-24",
        "nav": 1.3331
      },
      {
        "date": "2026-09-28",
        "nav": 1.2933
      },
      {
        "date": "2026-09-29",
        "nav": 1.2949
      },
      {
        "date": "2026-09-30",
        "nav": 1.2946
      },
      {
        "date": "2026-10-08",
        "nav": 1.2764
      },
      {
        "date": "2026-10-09",
        "nav": 1.2767
      },
      {
        "date": "2026-10-12",
        "nav": 1.2482
      },
      {
        "date": "2026-10-13",
        "nav": 1.2444
      },
      {
        "date": "2026-10-14",
        "nav": 1.2225
      },
      {
        "date": "2026-10-15",
        "nav": 1.1874
      },
      {
        "date": "2026-10-16",
        "nav": 1.1866
      },
      {
        "date": "2026-10-19",
        "nav": 1.1863
      },
      {
        "date": "2026-10-20",
        "nav": 1.1875
      },
      {
        "date": "2026-10-21",
        "nav": 1.1811
      },
      {
        "date": "2026-10-22",
        "nav": 1.1469
      },
      {
        "date": "2026-10-23",
        "nav": 1.1764
      },
      {
        "date": "2026-10-26",
        "nav": 1.16
      },
      {
        "date": "2026-10-27",
        "nav": 1.1293
      },
      {
        "date": "2026-10-28",
        "nav": 1.1534
      }
    ],
    "519935": [
      {
        "date": "2026-09-23",
        "nav": 3.486
      },
      {
        "date": "2026-09-24",
        "nav": 3.397
      },
      {
        "date": "2026-09-28",
        "nav": 3.214
      },
      {
        "date": "2026-09-29",
        "nav": 3.231
      },
      {
        "date": "2026-09-30",
        "nav": 3.165
      },
      {
        "date": "2026-10-08",
        "nav": 3.072
      },
      {
        "date": "2026-10-09",
        "nav": 3.018
      },
      {
        "date": "2026-10-12",
        "nav": 2.939
      },
      {
        "date": "2026-10-13",
        "nav": 2.943
      },
      {
        "date": "2026-10-14",
        "nav": 2.879
      },
      {
        "date": "2026-10-15",
        "nav": 2.801
      },
      {
        "date": "2026-10-16",
        "nav": 2.784
      },
      {
        "date": "2026-10-19",
        "nav": 2.771
      },
      {
        "date": "2026-10-20",
        "nav": 2.784
      },
      {
        "date": "2026-10-21",
        "nav": 2.78
      },
      {
        "date": "2026-10-22",
        "nav": 2.695
      },
      {
        "date": "2026-10-23",
        "nav": 2.728
      },
      {
        "date": "2026-10-26",
        "nav": 2.671
      },
      {
        "date": "2026-10-27",
        "nav": 2.581
      },
      {
        "date": "2026-10-28",
        "nav": 2.679
      }
    ],
    "519714": [
      {
        "date": "2026-09-23",
        "nav": 1.099
      },
      {
        "date": "2026-09-24",
        "nav": 1.083
      },
      {
        "date": "2026-09-28",
        "nav": 1.081
      },
      {
        "date": "2026-09-29",
        "nav": 1.078
      },
      {
        "date": "2026-09-30",
        "nav": 1.099
      },
      {
        "date": "2026-10-08",
        "nav": 1.102
      },
      {
        "date": "2026-10-09",
        "nav": 1.115
      },
      {
        "date": "2026-10-12",
        "nav": 1.108
      },
      {
        "date": "2026-10-13",
        "nav": 1.101
      },
      {
        "date": "2026-10-14",
        "nav": 1.105
      },
      {
        "date": "2026-10-15",
        "nav": 1.105
      },
      {
        "date": "2026-10-16",
        "nav": 1.107
      },
      {
        "date": "2026-10-19",
        "nav": 1.117
      },
      {
        "date": "2026-10-20",
        "nav": 1.114
      },
      {
        "date": "2026-10-21",
        "nav": 1.091
      },
      {
        "date": "2026-10-22",
        "nav": 1.079
      },
      {
        "date": "2026-10-23",
        "nav": 1.104
      },
      {
        "date": "2026-10-26",
        "nav": 1.12
      },
      {
        "date": "2026-10-27",
        "nav": 1.095
      },
      {
        "date": "2026-10-28",
        "nav": 1.088
      }
    ],
    "519673": [
      {
        "date": "2026-09-23",
        "nav": 2.464
      },
      {
        "date": "2026-09-24",
        "nav": 2.432
      },
      {
        "date": "2026-09-28",
        "nav": 2.411
      },
      {
        "date": "2026-09-29",
        "nav": 2.406
      },
      {
        "date": "2026-09-30",
        "nav": 2.454
      },
      {
        "date": "2026-10-08",
        "nav": 2.393
      },
      {
        "date": "2026-10-09",
        "nav": 2.443
      },
      {
        "date": "2026-10-12",
        "nav": 2.407
      },
      {
        "date": "2026-10-13",
        "nav": 2.374
      },
      {
        "date": "2026-10-14",
        "nav": 2.335
      },
      {
        "date": "2026-10-15",
        "nav": 2.279
      },
      {
        "date": "2026-10-16",
        "nav": 2.249
      },
      {
        "date": "2026-10-19",
        "nav": 2.243
      },
      {
        "date": "2026-10-20",
        "nav": 2.311
      },
      {
        "date": "2026-10-21",
        "nav": 2.293
      },
      {
        "date": "2026-10-22",
        "nav": 2.229
      },
      {
        "date": "2026-10-23",
        "nav": 2.277
      },
      {
        "date": "2026-10-26",
        "nav": 2.292
      },
      {
        "date": "2026-10-27",
        "nav": 2.205
      },
      {
        "date": "2026-10-28",
        "nav": 2.259
      }
    ],
    "519606": [
      {
        "date": "2026-09-23",
        "nav": 1.7746
      },
      {
        "date": "2026-09-24",
        "nav": 1.7251
      },
      {
        "date": "2026-09-28",
        "nav": 1.6432
      },
      {
        "date": "2026-09-29",
        "nav": 1.6428
      },
      {
        "date": "2026-09-30",
        "nav": 1.6021
      },
      {
        "date": "2026-10-08",
        "nav": 1.5454
      },
      {
        "date": "2026-10-09",
        "nav": 1.5361
      },
      {
        "date": "2026-10-12",
        "nav": 1.5203
      },
      {
        "date": "2026-10-13",
        "nav": 1.5346
      },
      {
        "date": "2026-10-14",
        "nav": 1.4821
      },
      {
        "date": "2026-10-15",
        "nav": 1.4695
      },
      {
        "date": "2026-10-16",
        "nav": 1.4704
      },
      {
        "date": "2026-10-19",
        "nav": 1.3967
      },
      {
        "date": "2026-10-20",
        "nav": 1.3746
      },
      {
        "date": "2026-10-21",
        "nav": 1.3615
      },
      {
        "date": "2026-10-22",
        "nav": 1.2982
      },
      {
        "date": "2026-10-23",
        "nav": 1.3053
      },
      {
        "date": "2026-10-26",
        "nav": 1.244
      },
      {
        "date": "2026-10-27",
        "nav": 1.1766
      },
      {
        "date": "2026-10-28",
        "nav": 1.2277
      }
    ],
    "519193": [
      {
        "date": "2026-09-23",
        "nav": 1.8986
      },
      {
        "date": "2026-09-24",
        "nav": 1.8718
      },
      {
        "date": "2026-09-28",
        "nav": 1.8595
      },
      {
        "date": "2026-09-29",
        "nav": 1.8609
      },
      {
        "date": "2026-09-30",
        "nav": 1.8847
      },
      {
        "date": "2026-10-08",
        "nav": 1.8717
      },
      {
        "date": "2026-10-09",
        "nav": 1.884
      },
      {
        "date": "2026-10-12",
        "nav": 1.8876
      },
      {
        "date": "2026-10-13",
        "nav": 1.8625
      },
      {
        "date": "2026-10-14",
        "nav": 1.8579
      },
      {
        "date": "2026-10-15",
        "nav": 1.8604
      },
      {
        "date": "2026-10-16",
        "nav": 1.8571
      },
      {
        "date": "2026-10-19",
        "nav": 1.8649
      },
      {
        "date": "2026-10-20",
        "nav": 1.8494
      },
      {
        "date": "2026-10-21",
        "nav": 1.8312
      },
      {
        "date": "2026-10-22",
        "nav": 1.8238
      },
      {
        "date": "2026-10-23",
        "nav": 1.8548
      },
      {
        "date": "2026-10-26",
        "nav": 1.8744
      },
      {
        "date": "2026-10-27",
        "nav": 1.8562
      },
      {
        "date": "2026-10-28",
        "nav": 1.8465
      }
    ],
    "501219": [
      {
        "date": "2026-09-23",
        "nav": 1.7017
      },
      {
        "date": "2026-09-24",
        "nav": 1.6733
      },
      {
        "date": "2026-09-28",
        "nav": 1.6239
      },
      {
        "date": "2026-09-29",
        "nav": 1.6359
      },
      {
        "date": "2026-09-30",
        "nav": 1.6248
      },
      {
        "date": "2026-10-08",
        "nav": 1.5943
      },
      {
        "date": "2026-10-09",
        "nav": 1.5888
      },
      {
        "date": "2026-10-12",
        "nav": 1.5598
      },
      {
        "date": "2026-10-13",
        "nav": 1.5626
      },
      {
        "date": "2026-10-14",
        "nav": 1.5354
      },
      {
        "date": "2026-10-15",
        "nav": 1.4897
      },
      {
        "date": "2026-10-16",
        "nav": 1.4901
      },
      {
        "date": "2026-10-19",
        "nav": 1.4847
      },
      {
        "date": "2026-10-20",
        "nav": 1.4961
      },
      {
        "date": "2026-10-21",
        "nav": 1.4912
      },
      {
        "date": "2026-10-22",
        "nav": 1.45
      },
      {
        "date": "2026-10-23",
        "nav": 1.4745
      },
      {
        "date": "2026-10-26",
        "nav": 1.4549
      },
      {
        "date": "2026-10-27",
        "nav": 1.418
      },
      {
        "date": "2026-10-28",
        "nav": 1.4489
      }
    ],
    "501201": [
      {
        "date": "2026-09-23",
        "nav": 2.471
      },
      {
        "date": "2026-09-24",
        "nav": 2.3881
      },
      {
        "date": "2026-09-28",
        "nav": 2.2188
      },
      {
        "date": "2026-09-29",
        "nav": 2.2406
      },
      {
        "date": "2026-09-30",
        "nav": 2.2181
      },
      {
        "date": "2026-10-08",
        "nav": 2.0783
      },
      {
        "date": "2026-10-09",
        "nav": 2.045
      },
      {
        "date": "2026-10-12",
        "nav": 1.9587
      },
      {
        "date": "2026-10-13",
        "nav": 1.9994
      },
      {
        "date": "2026-10-14",
        "nav": 1.9443
      },
      {
        "date": "2026-10-15",
        "nav": 1.8603
      },
      {
        "date": "2026-10-16",
        "nav": 1.8319
      },
      {
        "date": "2026-10-19",
        "nav": 1.7964
      },
      {
        "date": "2026-10-20",
        "nav": 1.814
      },
      {
        "date": "2026-10-21",
        "nav": 1.8404
      },
      {
        "date": "2026-10-22",
        "nav": 1.7247
      },
      {
        "date": "2026-10-23",
        "nav": 1.7573
      },
      {
        "date": "2026-10-26",
        "nav": 1.6641
      },
      {
        "date": "2026-10-27",
        "nav": 1.5911
      },
      {
        "date": "2026-10-28",
        "nav": 1.6845
      }
    ],
    "450009": [
      {
        "date": "2026-09-23",
        "nav": 2.6043
      },
      {
        "date": "2026-09-24",
        "nav": 2.5863
      },
      {
        "date": "2026-09-28",
        "nav": 2.5749
      },
      {
        "date": "2026-09-29",
        "nav": 2.608
      },
      {
        "date": "2026-09-30",
        "nav": 2.6401
      },
      {
        "date": "2026-10-08",
        "nav": 2.6435
      },
      {
        "date": "2026-10-09",
        "nav": 2.6323
      },
      {
        "date": "2026-10-12",
        "nav": 2.6164
      },
      {
        "date": "2026-10-13",
        "nav": 2.5873
      },
      {
        "date": "2026-10-14",
        "nav": 2.5801
      },
      {
        "date": "2026-10-15",
        "nav": 2.5261
      },
      {
        "date": "2026-10-16",
        "nav": 2.5583
      },
      {
        "date": "2026-10-19",
        "nav": 2.5784
      },
      {
        "date": "2026-10-20",
        "nav": 2.5573
      },
      {
        "date": "2026-10-21",
        "nav": 2.5463
      },
      {
        "date": "2026-10-22",
        "nav": 2.5035
      },
      {
        "date": "2026-10-23",
        "nav": 2.5308
      },
      {
        "date": "2026-10-26",
        "nav": 2.559
      },
      {
        "date": "2026-10-27",
        "nav": 2.5435
      },
      {
        "date": "2026-10-28",
        "nav": 2.5466
      }
    ],
    "399011": [
      {
        "date": "2026-09-23",
        "nav": 1.06
      },
      {
        "date": "2026-09-24",
        "nav": 1.013
      },
      {
        "date": "2026-09-28",
        "nav": 1.006
      },
      {
        "date": "2026-09-29",
        "nav": 1.01
      },
      {
        "date": "2026-09-30",
        "nav": 1.048
      },
      {
        "date": "2026-10-08",
        "nav": 1.01
      },
      {
        "date": "2026-10-09",
        "nav": 1.004
      },
      {
        "date": "2026-10-12",
        "nav": 0.984
      },
      {
        "date": "2026-10-13",
        "nav": 0.972
      },
      {
        "date": "2026-10-14",
        "nav": 0.952
      },
      {
        "date": "2026-10-15",
        "nav": 0.947
      },
      {
        "date": "2026-10-16",
        "nav": 0.938
      },
      {
        "date": "2026-10-19",
        "nav": 0.943
      },
      {
        "date": "2026-10-20",
        "nav": 0.961
      },
      {
        "date": "2026-10-21",
        "nav": 0.962
      },
      {
        "date": "2026-10-22",
        "nav": 0.926
      },
      {
        "date": "2026-10-23",
        "nav": 0.952
      },
      {
        "date": "2026-10-26",
        "nav": 0.942
      },
      {
        "date": "2026-10-27",
        "nav": 0.892
      },
      {
        "date": "2026-10-28",
        "nav": 0.911
      }
    ],
    "376510": [
      {
        "date": "2026-09-23",
        "nav": 2.2757
      },
      {
        "date": "2026-09-24",
        "nav": 2.263
      },
      {
        "date": "2026-09-28",
        "nav": 2.2579
      },
      {
        "date": "2026-09-29",
        "nav": 2.2566
      },
      {
        "date": "2026-09-30",
        "nav": 2.2907
      },
      {
        "date": "2026-10-08",
        "nav": 2.2974
      },
      {
        "date": "2026-10-09",
        "nav": 2.313
      },
      {
        "date": "2026-10-12",
        "nav": 2.3341
      },
      {
        "date": "2026-10-13",
        "nav": 2.322
      },
      {
        "date": "2026-10-14",
        "nav": 2.3354
      },
      {
        "date": "2026-10-15",
        "nav": 2.3285
      },
      {
        "date": "2026-10-16",
        "nav": 2.3395
      },
      {
        "date": "2026-10-19",
        "nav": 2.3626
      },
      {
        "date": "2026-10-20",
        "nav": 2.3426
      },
      {
        "date": "2026-10-21",
        "nav": 2.3044
      },
      {
        "date": "2026-10-22",
        "nav": 2.2969
      },
      {
        "date": "2026-10-23",
        "nav": 2.3133
      },
      {
        "date": "2026-10-26",
        "nav": 2.3485
      },
      {
        "date": "2026-10-27",
        "nav": 2.3348
      },
      {
        "date": "2026-10-28",
        "nav": 2.3194
      }
    ],
    "360001": [
      {
        "date": "2026-09-23",
        "nav": 1.3457
      },
      {
        "date": "2026-09-24",
        "nav": 1.3229
      },
      {
        "date": "2026-09-28",
        "nav": 1.2864
      },
      {
        "date": "2026-09-29",
        "nav": 1.2982
      },
      {
        "date": "2026-09-30",
        "nav": 1.2961
      },
      {
        "date": "2026-10-08",
        "nav": 1.278
      },
      {
        "date": "2026-10-09",
        "nav": 1.2811
      },
      {
        "date": "2026-10-12",
        "nav": 1.2654
      },
      {
        "date": "2026-10-13",
        "nav": 1.2664
      },
      {
        "date": "2026-10-14",
        "nav": 1.2494
      },
      {
        "date": "2026-10-15",
        "nav": 1.2235
      },
      {
        "date": "2026-10-16",
        "nav": 1.2273
      },
      {
        "date": "2026-10-19",
        "nav": 1.2295
      },
      {
        "date": "2026-10-20",
        "nav": 1.2398
      },
      {
        "date": "2026-10-21",
        "nav": 1.2376
      },
      {
        "date": "2026-10-22",
        "nav": 1.2094
      },
      {
        "date": "2026-10-23",
        "nav": 1.2265
      },
      {
        "date": "2026-10-26",
        "nav": 1.2148
      },
      {
        "date": "2026-10-27",
        "nav": 1.1874
      },
      {
        "date": "2026-10-28",
        "nav": 1.2056
      }
    ],
    "970185": [
      {
        "date": "2026-09-23",
        "nav": 1.2617
      },
      {
        "date": "2026-09-24",
        "nav": 1.231
      },
      {
        "date": "2026-09-28",
        "nav": 1.1844
      },
      {
        "date": "2026-09-29",
        "nav": 1.1852
      },
      {
        "date": "2026-09-30",
        "nav": 1.1802
      },
      {
        "date": "2026-10-08",
        "nav": 1.1562
      },
      {
        "date": "2026-10-09",
        "nav": 1.1449
      },
      {
        "date": "2026-10-12",
        "nav": 1.1189
      },
      {
        "date": "2026-10-13",
        "nav": 1.1215
      },
      {
        "date": "2026-10-14",
        "nav": 1.0964
      },
      {
        "date": "2026-10-15",
        "nav": 1.0669
      },
      {
        "date": "2026-10-16",
        "nav": 1.0644
      },
      {
        "date": "2026-10-19",
        "nav": 1.0623
      },
      {
        "date": "2026-10-20",
        "nav": 1.0618
      },
      {
        "date": "2026-10-21",
        "nav": 1.0593
      },
      {
        "date": "2026-10-22",
        "nav": 1.026
      },
      {
        "date": "2026-10-23",
        "nav": 1.0517
      },
      {
        "date": "2026-10-26",
        "nav": 1.0231
      },
      {
        "date": "2026-10-27",
        "nav": 0.9908
      },
      {
        "date": "2026-10-28",
        "nav": 1.0167
      }
    ],
    "970184": [
      {
        "date": "2026-09-23",
        "nav": 1.3424
      },
      {
        "date": "2026-09-24",
        "nav": 1.3098
      },
      {
        "date": "2026-09-28",
        "nav": 1.2602
      },
      {
        "date": "2026-09-29",
        "nav": 1.2612
      },
      {
        "date": "2026-09-30",
        "nav": 1.2558
      },
      {
        "date": "2026-10-08",
        "nav": 1.2304
      },
      {
        "date": "2026-10-09",
        "nav": 1.2184
      },
      {
        "date": "2026-10-12",
        "nav": 1.1908
      },
      {
        "date": "2026-10-13",
        "nav": 1.1935
      },
      {
        "date": "2026-10-14",
        "nav": 1.1668
      },
      {
        "date": "2026-10-15",
        "nav": 1.1355
      },
      {
        "date": "2026-10-16",
        "nav": 1.1328
      },
      {
        "date": "2026-10-19",
        "nav": 1.1306
      },
      {
        "date": "2026-10-20",
        "nav": 1.1301
      },
      {
        "date": "2026-10-21",
        "nav": 1.1274
      },
      {
        "date": "2026-10-22",
        "nav": 1.0919
      },
      {
        "date": "2026-10-23",
        "nav": 1.1194
      },
      {
        "date": "2026-10-26",
        "nav": 1.089
      },
      {
        "date": "2026-10-27",
        "nav": 1.0546
      },
      {
        "date": "2026-10-28",
        "nav": 1.0822
      }
    ],
    "970121": [
      {
        "date": "2026-09-23",
        "nav": 1.0783
      },
      {
        "date": "2026-09-24",
        "nav": 1.0727
      },
      {
        "date": "2026-09-28",
        "nav": 1.066
      },
      {
        "date": "2026-09-29",
        "nav": 1.0669
      },
      {
        "date": "2026-09-30",
        "nav": 1.0673
      },
      {
        "date": "2026-10-08",
        "nav": 1.0654
      },
      {
        "date": "2026-10-09",
        "nav": 1.0668
      },
      {
        "date": "2026-10-12",
        "nav": 1.0644
      },
      {
        "date": "2026-10-13",
        "nav": 1.0636
      },
      {
        "date": "2026-10-14",
        "nav": 1.0598
      },
      {
        "date": "2026-10-15",
        "nav": 1.0557
      },
      {
        "date": "2026-10-16",
        "nav": 1.0573
      },
      {
        "date": "2026-10-19",
        "nav": 1.0604
      },
      {
        "date": "2026-10-20",
        "nav": 1.0584
      },
      {
        "date": "2026-10-21",
        "nav": 1.0568
      },
      {
        "date": "2026-10-22",
        "nav": 1.0502
      },
      {
        "date": "2026-10-23",
        "nav": 1.0553
      },
      {
        "date": "2026-10-26",
        "nav": 1.0548
      },
      {
        "date": "2026-10-27",
        "nav": 1.0523
      },
      {
        "date": "2026-10-28",
        "nav": 1.0558
      }
    ],
    "970119": [
      {
        "date": "2026-09-23",
        "nav": 1.052
      },
      {
        "date": "2026-09-24",
        "nav": 1.0466
      },
      {
        "date": "2026-09-28",
        "nav": 1.04
      },
      {
        "date": "2026-09-29",
        "nav": 1.041
      },
      {
        "date": "2026-09-30",
        "nav": 1.0413
      },
      {
        "date": "2026-10-08",
        "nav": 1.0397
      },
      {
        "date": "2026-10-09",
        "nav": 1.0411
      },
      {
        "date": "2026-10-12",
        "nav": 1.0388
      },
      {
        "date": "2026-10-13",
        "nav": 1.038
      },
      {
        "date": "2026-10-14",
        "nav": 1.0343
      },
      {
        "date": "2026-10-15",
        "nav": 1.0303
      },
      {
        "date": "2026-10-16",
        "nav": 1.0319
      },
      {
        "date": "2026-10-19",
        "nav": 1.035
      },
      {
        "date": "2026-10-20",
        "nav": 1.033
      },
      {
        "date": "2026-10-21",
        "nav": 1.0315
      },
      {
        "date": "2026-10-22",
        "nav": 1.0251
      },
      {
        "date": "2026-10-23",
        "nav": 1.0301
      },
      {
        "date": "2026-10-26",
        "nav": 1.0296
      },
      {
        "date": "2026-10-27",
        "nav": 1.0273
      },
      {
        "date": "2026-10-28",
        "nav": 1.0307
      }
    ],
    "970069": [
      {
        "date": "2026-09-23",
        "nav": 0.709
      },
      {
        "date": "2026-09-24",
        "nav": 0.7014
      },
      {
        "date": "2026-09-28",
        "nav": 0.6961
      },
      {
        "date": "2026-09-29",
        "nav": 0.6966
      },
      {
        "date": "2026-09-30",
        "nav": 0.7003
      },
      {
        "date": "2026-10-08",
        "nav": 0.6954
      },
      {
        "date": "2026-10-09",
        "nav": 0.7024
      },
      {
        "date": "2026-10-12",
        "nav": 0.7031
      },
      {
        "date": "2026-10-13",
        "nav": 0.6975
      },
      {
        "date": "2026-10-14",
        "nav": 0.6984
      },
      {
        "date": "2026-10-15",
        "nav": 0.6914
      },
      {
        "date": "2026-10-16",
        "nav": 0.695
      },
      {
        "date": "2026-10-19",
        "nav": 0.699
      },
      {
        "date": "2026-10-20",
        "nav": 0.6963
      },
      {
        "date": "2026-10-21",
        "nav": 0.6908
      },
      {
        "date": "2026-10-22",
        "nav": 0.6813
      },
      {
        "date": "2026-10-23",
        "nav": 0.6952
      },
      {
        "date": "2026-10-26",
        "nav": 0.6989
      },
      {
        "date": "2026-10-27",
        "nav": 0.6827
      },
      {
        "date": "2026-10-28",
        "nav": 0.6845
      }
    ],
    "970067": [
      {
        "date": "2026-09-23",
        "nav": 0.7272
      },
      {
        "date": "2026-09-24",
        "nav": 0.7193
      },
      {
        "date": "2026-09-28",
        "nav": 0.7139
      },
      {
        "date": "2026-09-29",
        "nav": 0.7145
      },
      {
        "date": "2026-09-30",
        "nav": 0.7183
      },
      {
        "date": "2026-10-08",
        "nav": 0.7134
      },
      {
        "date": "2026-10-09",
        "nav": 0.7206
      },
      {
        "date": "2026-10-12",
        "nav": 0.7213
      },
      {
        "date": "2026-10-13",
        "nav": 0.7156
      },
      {
        "date": "2026-10-14",
        "nav": 0.7165
      },
      {
        "date": "2026-10-15",
        "nav": 0.7093
      },
      {
        "date": "2026-10-16",
        "nav": 0.713
      },
      {
        "date": "2026-10-19",
        "nav": 0.7171
      },
      {
        "date": "2026-10-20",
        "nav": 0.7143
      },
      {
        "date": "2026-10-21",
        "nav": 0.7087
      },
      {
        "date": "2026-10-22",
        "nav": 0.6991
      },
      {
        "date": "2026-10-23",
        "nav": 0.7133
      },
      {
        "date": "2026-10-26",
        "nav": 0.7171
      },
      {
        "date": "2026-10-27",
        "nav": 0.7005
      },
      {
        "date": "2026-10-28",
        "nav": 0.7024
      }
    ],
    "959991": [
      {
        "date": "2026-09-23",
        "nav": 2.8917
      },
      {
        "date": "2026-09-24",
        "nav": 2.8141
      },
      {
        "date": "2026-09-28",
        "nav": 2.6708
      },
      {
        "date": "2026-09-29",
        "nav": 2.686
      },
      {
        "date": "2026-09-30",
        "nav": 2.6654
      },
      {
        "date": "2026-10-08",
        "nav": 2.5766
      },
      {
        "date": "2026-10-09",
        "nav": 2.5483
      },
      {
        "date": "2026-10-12",
        "nav": 2.4761
      },
      {
        "date": "2026-10-13",
        "nav": 2.5103
      },
      {
        "date": "2026-10-14",
        "nav": 2.4522
      },
      {
        "date": "2026-10-15",
        "nav": 2.3891
      },
      {
        "date": "2026-10-16",
        "nav": 2.3791
      },
      {
        "date": "2026-10-19",
        "nav": 2.3665
      },
      {
        "date": "2026-10-20",
        "nav": 2.3557
      },
      {
        "date": "2026-10-21",
        "nav": 2.3567
      },
      {
        "date": "2026-10-22",
        "nav": 2.2509
      },
      {
        "date": "2026-10-23",
        "nav": 2.2819
      },
      {
        "date": "2026-10-26",
        "nav": 2.2185
      },
      {
        "date": "2026-10-27",
        "nav": 2.1812
      },
      {
        "date": "2026-10-28",
        "nav": 2.2572
      }
    ],
    "952099": [
      {
        "date": "2026-09-23",
        "nav": 2.5366
      },
      {
        "date": "2026-09-24",
        "nav": 2.4845
      },
      {
        "date": "2026-09-28",
        "nav": 2.4403
      },
      {
        "date": "2026-09-29",
        "nav": 2.4389
      },
      {
        "date": "2026-09-30",
        "nav": 2.4639
      },
      {
        "date": "2026-10-08",
        "nav": 2.4084
      },
      {
        "date": "2026-10-09",
        "nav": 2.4179
      },
      {
        "date": "2026-10-12",
        "nav": 2.3831
      },
      {
        "date": "2026-10-13",
        "nav": 2.3662
      },
      {
        "date": "2026-10-14",
        "nav": 2.3376
      },
      {
        "date": "2026-10-15",
        "nav": 2.2923
      },
      {
        "date": "2026-10-16",
        "nav": 2.2906
      },
      {
        "date": "2026-10-19",
        "nav": 2.296
      },
      {
        "date": "2026-10-20",
        "nav": 2.3334
      },
      {
        "date": "2026-10-21",
        "nav": 2.3389
      },
      {
        "date": "2026-10-22",
        "nav": 2.2751
      },
      {
        "date": "2026-10-23",
        "nav": 2.3423
      },
      {
        "date": "2026-10-26",
        "nav": 2.3134
      },
      {
        "date": "2026-10-27",
        "nav": 2.2484
      },
      {
        "date": "2026-10-28",
        "nav": 2.2873
      }
    ],
    "952035": [
      {
        "date": "2026-09-23",
        "nav": 0.7303
      },
      {
        "date": "2026-09-24",
        "nav": 0.7225
      },
      {
        "date": "2026-09-28",
        "nav": 0.7105
      },
      {
        "date": "2026-09-29",
        "nav": 0.7083
      },
      {
        "date": "2026-09-30",
        "nav": 0.7118
      },
      {
        "date": "2026-10-08",
        "nav": 0.7007
      },
      {
        "date": "2026-10-09",
        "nav": 0.7106
      },
      {
        "date": "2026-10-12",
        "nav": 0.7044
      },
      {
        "date": "2026-10-13",
        "nav": 0.6969
      },
      {
        "date": "2026-10-14",
        "nav": 0.6937
      },
      {
        "date": "2026-10-15",
        "nav": 0.6823
      },
      {
        "date": "2026-10-16",
        "nav": 0.6808
      },
      {
        "date": "2026-10-19",
        "nav": 0.6856
      },
      {
        "date": "2026-10-20",
        "nav": 0.7036
      },
      {
        "date": "2026-10-21",
        "nav": 0.7043
      },
      {
        "date": "2026-10-22",
        "nav": 0.6868
      },
      {
        "date": "2026-10-23",
        "nav": 0.7154
      },
      {
        "date": "2026-10-26",
        "nav": 0.7097
      },
      {
        "date": "2026-10-27",
        "nav": 0.6821
      },
      {
        "date": "2026-10-28",
        "nav": 0.6905
      }
    ],
    "952004": [
      {
        "date": "2026-09-23",
        "nav": 4.3288
      },
      {
        "date": "2026-09-24",
        "nav": 4.2344
      },
      {
        "date": "2026-09-28",
        "nav": 4.1478
      },
      {
        "date": "2026-09-29",
        "nav": 4.1378
      },
      {
        "date": "2026-09-30",
        "nav": 4.1543
      },
      {
        "date": "2026-10-08",
        "nav": 4.0146
      },
      {
        "date": "2026-10-09",
        "nav": 4.044
      },
      {
        "date": "2026-10-12",
        "nav": 3.9457
      },
      {
        "date": "2026-10-13",
        "nav": 3.9188
      },
      {
        "date": "2026-10-14",
        "nav": 3.8911
      },
      {
        "date": "2026-10-15",
        "nav": 3.8087
      },
      {
        "date": "2026-10-16",
        "nav": 3.7723
      },
      {
        "date": "2026-10-19",
        "nav": 3.7811
      },
      {
        "date": "2026-10-20",
        "nav": 3.9288
      },
      {
        "date": "2026-10-21",
        "nav": 3.9711
      },
      {
        "date": "2026-10-22",
        "nav": 3.8921
      },
      {
        "date": "2026-10-23",
        "nav": 4.0726
      },
      {
        "date": "2026-10-26",
        "nav": 4.0068
      },
      {
        "date": "2026-10-27",
        "nav": 3.8467
      },
      {
        "date": "2026-10-28",
        "nav": 3.9456
      }
    ],
    "881007": [
      {
        "date": "2026-09-23",
        "nav": 0.5111
      },
      {
        "date": "2026-09-24",
        "nav": 0.5061
      },
      {
        "date": "2026-09-28",
        "nav": 0.4969
      },
      {
        "date": "2026-09-29",
        "nav": 0.4986
      },
      {
        "date": "2026-09-30",
        "nav": 0.4967
      },
      {
        "date": "2026-10-08",
        "nav": 0.4925
      },
      {
        "date": "2026-10-09",
        "nav": 0.4876
      },
      {
        "date": "2026-10-12",
        "nav": 0.4853
      },
      {
        "date": "2026-10-13",
        "nav": 0.4825
      },
      {
        "date": "2026-10-14",
        "nav": 0.477
      },
      {
        "date": "2026-10-15",
        "nav": 0.4705
      },
      {
        "date": "2026-10-16",
        "nav": 0.4709
      },
      {
        "date": "2026-10-19",
        "nav": 0.4742
      },
      {
        "date": "2026-10-20",
        "nav": 0.4724
      },
      {
        "date": "2026-10-21",
        "nav": 0.4701
      },
      {
        "date": "2026-10-22",
        "nav": 0.4672
      },
      {
        "date": "2026-10-23",
        "nav": 0.4656
      },
      {
        "date": "2026-10-26",
        "nav": 0.4665
      },
      {
        "date": "2026-10-27",
        "nav": 0.4618
      },
      {
        "date": "2026-10-28",
        "nav": 0.4634
      }
    ],
    "880007": [
      {
        "date": "2026-09-23",
        "nav": 0.521
      },
      {
        "date": "2026-09-24",
        "nav": 0.5159
      },
      {
        "date": "2026-09-28",
        "nav": 0.5066
      },
      {
        "date": "2026-09-29",
        "nav": 0.5083
      },
      {
        "date": "2026-09-30",
        "nav": 0.5064
      },
      {
        "date": "2026-10-08",
        "nav": 0.5021
      },
      {
        "date": "2026-10-09",
        "nav": 0.4971
      },
      {
        "date": "2026-10-12",
        "nav": 0.4948
      },
      {
        "date": "2026-10-13",
        "nav": 0.4919
      },
      {
        "date": "2026-10-14",
        "nav": 0.4864
      },
      {
        "date": "2026-10-15",
        "nav": 0.4797
      },
      {
        "date": "2026-10-16",
        "nav": 0.4801
      },
      {
        "date": "2026-10-19",
        "nav": 0.4835
      },
      {
        "date": "2026-10-20",
        "nav": 0.4818
      },
      {
        "date": "2026-10-21",
        "nav": 0.4794
      },
      {
        "date": "2026-10-22",
        "nav": 0.4764
      },
      {
        "date": "2026-10-23",
        "nav": 0.4748
      },
      {
        "date": "2026-10-26",
        "nav": 0.4757
      },
      {
        "date": "2026-10-27",
        "nav": 0.471
      },
      {
        "date": "2026-10-28",
        "nav": 0.4726
      }
    ],
    "770001": [
      {
        "date": "2026-09-23",
        "nav": 1.267
      },
      {
        "date": "2026-09-24",
        "nav": 1.2668
      },
      {
        "date": "2026-09-28",
        "nav": 1.2658
      },
      {
        "date": "2026-09-29",
        "nav": 1.2645
      },
      {
        "date": "2026-09-30",
        "nav": 1.2678
      },
      {
        "date": "2026-10-08",
        "nav": 1.2725
      },
      {
        "date": "2026-10-09",
        "nav": 1.274
      },
      {
        "date": "2026-10-12",
        "nav": 1.2742
      },
      {
        "date": "2026-10-13",
        "nav": 1.2728
      },
      {
        "date": "2026-10-14",
        "nav": 1.2749
      },
      {
        "date": "2026-10-15",
        "nav": 1.2651
      },
      {
        "date": "2026-10-16",
        "nav": 1.2684
      },
      {
        "date": "2026-10-19",
        "nav": 1.2694
      },
      {
        "date": "2026-10-20",
        "nav": 1.2641
      },
      {
        "date": "2026-10-21",
        "nav": 1.2567
      },
      {
        "date": "2026-10-22",
        "nav": 1.2495
      },
      {
        "date": "2026-10-23",
        "nav": 1.2515
      },
      {
        "date": "2026-10-26",
        "nav": 1.2545
      },
      {
        "date": "2026-10-27",
        "nav": 1.2549
      },
      {
        "date": "2026-10-28",
        "nav": 1.2567
      }
    ],
    "762001": [
      {
        "date": "2026-09-23",
        "nav": 1.1154
      },
      {
        "date": "2026-09-24",
        "nav": 1.1063
      },
      {
        "date": "2026-09-28",
        "nav": 1.1009
      },
      {
        "date": "2026-09-29",
        "nav": 1.1004
      },
      {
        "date": "2026-09-30",
        "nav": 1.1055
      },
      {
        "date": "2026-10-08",
        "nav": 1.0994
      },
      {
        "date": "2026-10-09",
        "nav": 1.1089
      },
      {
        "date": "2026-10-12",
        "nav": 1.1068
      },
      {
        "date": "2026-10-13",
        "nav": 1.103
      },
      {
        "date": "2026-10-14",
        "nav": 1.1003
      },
      {
        "date": "2026-10-15",
        "nav": 1.0973
      },
      {
        "date": "2026-10-16",
        "nav": 1.0981
      },
      {
        "date": "2026-10-19",
        "nav": 1.1004
      },
      {
        "date": "2026-10-20",
        "nav": 1.0899
      },
      {
        "date": "2026-10-21",
        "nav": 1.0822
      },
      {
        "date": "2026-10-22",
        "nav": 1.0745
      },
      {
        "date": "2026-10-23",
        "nav": 1.0838
      },
      {
        "date": "2026-10-26",
        "nav": 1.0835
      },
      {
        "date": "2026-10-27",
        "nav": 1.0722
      },
      {
        "date": "2026-10-28",
        "nav": 1.0753
      }
    ],
    "750005": [
      {
        "date": "2026-09-23",
        "nav": 1.3798
      },
      {
        "date": "2026-09-24",
        "nav": 1.3516
      },
      {
        "date": "2026-09-28",
        "nav": 1.3174
      },
      {
        "date": "2026-09-29",
        "nav": 1.3156
      },
      {
        "date": "2026-09-30",
        "nav": 1.32
      },
      {
        "date": "2026-10-08",
        "nav": 1.3044
      },
      {
        "date": "2026-10-09",
        "nav": 1.2915
      },
      {
        "date": "2026-10-12",
        "nav": 1.2777
      },
      {
        "date": "2026-10-13",
        "nav": 1.2723
      },
      {
        "date": "2026-10-14",
        "nav": 1.241
      },
      {
        "date": "2026-10-15",
        "nav": 1.2164
      },
      {
        "date": "2026-10-16",
        "nav": 1.2034
      },
      {
        "date": "2026-10-19",
        "nav": 1.195
      },
      {
        "date": "2026-10-20",
        "nav": 1.1911
      },
      {
        "date": "2026-10-21",
        "nav": 1.1775
      },
      {
        "date": "2026-10-22",
        "nav": 1.1535
      },
      {
        "date": "2026-10-23",
        "nav": 1.1634
      },
      {
        "date": "2026-10-26",
        "nav": 1.1564
      },
      {
        "date": "2026-10-27",
        "nav": 1.1493
      },
      {
        "date": "2026-10-28",
        "nav": 1.1547
      }
    ],
    "750001": [
      {
        "date": "2026-09-23",
        "nav": 3.0133
      },
      {
        "date": "2026-09-24",
        "nav": 2.9807
      },
      {
        "date": "2026-09-28",
        "nav": 2.9233
      },
      {
        "date": "2026-09-29",
        "nav": 2.9171
      },
      {
        "date": "2026-09-30",
        "nav": 2.9193
      },
      {
        "date": "2026-10-08",
        "nav": 2.9123
      },
      {
        "date": "2026-10-09",
        "nav": 2.9094
      },
      {
        "date": "2026-10-12",
        "nav": 2.8812
      },
      {
        "date": "2026-10-13",
        "nav": 2.9041
      },
      {
        "date": "2026-10-14",
        "nav": 2.9136
      },
      {
        "date": "2026-10-15",
        "nav": 2.8672
      },
      {
        "date": "2026-10-16",
        "nav": 2.8806
      },
      {
        "date": "2026-10-19",
        "nav": 2.8719
      },
      {
        "date": "2026-10-20",
        "nav": 2.8704
      },
      {
        "date": "2026-10-21",
        "nav": 2.8514
      },
      {
        "date": "2026-10-22",
        "nav": 2.7987
      },
      {
        "date": "2026-10-23",
        "nav": 2.8253
      },
      {
        "date": "2026-10-26",
        "nav": 2.8258
      },
      {
        "date": "2026-10-27",
        "nav": 2.8026
      },
      {
        "date": "2026-10-28",
        "nav": 2.8431
      }
    ],
    "740001": [
      {
        "date": "2026-09-23",
        "nav": 3.417
      },
      {
        "date": "2026-09-24",
        "nav": 3.331
      },
      {
        "date": "2026-09-28",
        "nav": 3.154
      },
      {
        "date": "2026-09-29",
        "nav": 3.19
      },
      {
        "date": "2026-09-30",
        "nav": 3.142
      },
      {
        "date": "2026-10-08",
        "nav": 2.954
      },
      {
        "date": "2026-10-09",
        "nav": 2.918
      },
      {
        "date": "2026-10-12",
        "nav": 2.836
      },
      {
        "date": "2026-10-13",
        "nav": 2.873
      },
      {
        "date": "2026-10-14",
        "nav": 2.771
      },
      {
        "date": "2026-10-15",
        "nav": 2.683
      },
      {
        "date": "2026-10-16",
        "nav": 2.655
      },
      {
        "date": "2026-10-19",
        "nav": 2.618
      },
      {
        "date": "2026-10-20",
        "nav": 2.621
      },
      {
        "date": "2026-10-21",
        "nav": 2.641
      },
      {
        "date": "2026-10-22",
        "nav": 2.499
      },
      {
        "date": "2026-10-23",
        "nav": 2.538
      },
      {
        "date": "2026-10-26",
        "nav": 2.466
      },
      {
        "date": "2026-10-27",
        "nav": 2.38
      },
      {
        "date": "2026-10-28",
        "nav": 2.485
      }
    ],
    "730002": [
      {
        "date": "2026-09-23",
        "nav": 1.4906
      },
      {
        "date": "2026-09-24",
        "nav": 1.4957
      },
      {
        "date": "2026-09-28",
        "nav": 1.4977
      },
      {
        "date": "2026-09-29",
        "nav": 1.5002
      },
      {
        "date": "2026-09-30",
        "nav": 1.5187
      },
      {
        "date": "2026-10-08",
        "nav": 1.5341
      },
      {
        "date": "2026-10-09",
        "nav": 1.5287
      },
      {
        "date": "2026-10-12",
        "nav": 1.5532
      },
      {
        "date": "2026-10-13",
        "nav": 1.5459
      },
      {
        "date": "2026-10-14",
        "nav": 1.5534
      },
      {
        "date": "2026-10-15",
        "nav": 1.5366
      },
      {
        "date": "2026-10-16",
        "nav": 1.537
      },
      {
        "date": "2026-10-19",
        "nav": 1.553
      },
      {
        "date": "2026-10-20",
        "nav": 1.5417
      },
      {
        "date": "2026-10-21",
        "nav": 1.5298
      },
      {
        "date": "2026-10-22",
        "nav": 1.5168
      },
      {
        "date": "2026-10-23",
        "nav": 1.5076
      },
      {
        "date": "2026-10-26",
        "nav": 1.5308
      },
      {
        "date": "2026-10-27",
        "nav": 1.5445
      },
      {
        "date": "2026-10-28",
        "nav": 1.5431
      }
    ],
    "730001": [
      {
        "date": "2026-09-23",
        "nav": 0.612
      },
      {
        "date": "2026-09-24",
        "nav": 0.607
      },
      {
        "date": "2026-09-28",
        "nav": 0.5885
      },
      {
        "date": "2026-09-29",
        "nav": 0.5848
      },
      {
        "date": "2026-09-30",
        "nav": 0.5785
      },
      {
        "date": "2026-10-08",
        "nav": 0.5817
      },
      {
        "date": "2026-10-09",
        "nav": 0.5654
      },
      {
        "date": "2026-10-12",
        "nav": 0.5499
      },
      {
        "date": "2026-10-13",
        "nav": 0.5528
      },
      {
        "date": "2026-10-14",
        "nav": 0.5407
      },
      {
        "date": "2026-10-15",
        "nav": 0.5193
      },
      {
        "date": "2026-10-16",
        "nav": 0.5323
      },
      {
        "date": "2026-10-19",
        "nav": 0.5312
      },
      {
        "date": "2026-10-20",
        "nav": 0.5417
      },
      {
        "date": "2026-10-21",
        "nav": 0.5457
      },
      {
        "date": "2026-10-22",
        "nav": 0.527
      },
      {
        "date": "2026-10-23",
        "nav": 0.5329
      },
      {
        "date": "2026-10-26",
        "nav": 0.521
      },
      {
        "date": "2026-10-27",
        "nav": 0.5076
      },
      {
        "date": "2026-10-28",
        "nav": 0.5397
      }
    ],
    "720001": [
      {
        "date": "2026-09-23",
        "nav": 15.068
      },
      {
        "date": "2026-09-24",
        "nav": 14.511
      },
      {
        "date": "2026-09-28",
        "nav": 13.647
      },
      {
        "date": "2026-09-29",
        "nav": 13.806
      },
      {
        "date": "2026-09-30",
        "nav": 13.606
      },
      {
        "date": "2026-10-08",
        "nav": 13.078
      },
      {
        "date": "2026-10-09",
        "nav": 12.63
      },
      {
        "date": "2026-10-12",
        "nav": 12.105
      },
      {
        "date": "2026-10-13",
        "nav": 12.274
      },
      {
        "date": "2026-10-14",
        "nav": 12.026
      },
      {
        "date": "2026-10-15",
        "nav": 11.628
      },
      {
        "date": "2026-10-16",
        "nav": 11.445
      },
      {
        "date": "2026-10-19",
        "nav": 11.276
      },
      {
        "date": "2026-10-20",
        "nav": 11.29
      },
      {
        "date": "2026-10-21",
        "nav": 11.421
      },
      {
        "date": "2026-10-22",
        "nav": 10.853
      },
      {
        "date": "2026-10-23",
        "nav": 10.895
      },
      {
        "date": "2026-10-26",
        "nav": 10.276
      },
      {
        "date": "2026-10-27",
        "nav": 9.979
      },
      {
        "date": "2026-10-28",
        "nav": 10.402
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 4.1056,
      "price": 4.1056,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.26,
      "nav": 3.1851,
      "price": 3.1851,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.42,
      "nav": 4.0617,
      "price": 4.0617,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 0.709,
      "price": 0.709,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 1.9575,
      "price": 1.9575,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.5523,
      "price": 2.5523,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 5.1911,
      "price": 5.1911,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.691,
      "price": 1.691,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.1534,
      "price": 1.1534,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 2.679,
      "price": 2.679,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.088,
      "price": 1.088,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.259,
      "price": 2.259,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.49,
      "nav": 1.2277,
      "price": 1.2277,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.8465,
      "price": 1.8465,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.4489,
      "price": 1.4489,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.42,
      "nav": 1.6845,
      "price": 1.6845,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 2.5466,
      "price": 2.5466,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 0.911,
      "price": 0.911,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.3194,
      "price": 2.3194,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.2056,
      "price": 1.2056,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 4.67,
      "sharpe": -1.22,
      "calmar": -1.22
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 7.94,
      "sharpe": -3.14,
      "calmar": -3.14
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 12.6,
      "sharpe": -1.19,
      "calmar": -1.19
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.77,
      "sharpe": -0.67,
      "calmar": -0.67
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.5,
      "sharpe": -4.18,
      "calmar": -4.18
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.42,
      "sharpe": -3.89,
      "calmar": -3.89
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.69,
      "sharpe": -1.46,
      "calmar": -1.46
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.88,
      "sharpe": -2.2,
      "calmar": -2.2
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.53,
      "sharpe": -2.46,
      "calmar": -2.46
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.45,
      "sharpe": -1.23,
      "calmar": -1.23
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 2.22,
      "sharpe": -2.33,
      "calmar": -2.33
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 14.75,
      "sharpe": -4.08,
      "calmar": -4.08
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.26,
      "sharpe": 0.35,
      "calmar": 0.35
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.26,
      "sharpe": -2.03,
      "calmar": -2.03
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 12.71,
      "sharpe": -2.04,
      "calmar": -2.04
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.01,
      "sharpe": -1.02,
      "calmar": -1.02
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 7.95,
      "sharpe": -0.89,
      "calmar": -0.89
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.98,
      "sharpe": -0.81,
      "calmar": -0.81
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.88,
      "sharpe": -0.79,
      "calmar": -0.79
    }
  ],
  "news": [
    {
      "title": "中国人民银行10月28日发布的数据显示，2026年三季度末，获得贷款支持的科技型中小企业有30.73万家，获贷率为51.1%，比上年末高0.9个百分点；本外币科技型中小企业贷款余额4.27万亿元，同比增长20.1%，增速比各项贷款高15.4个百分点。图为宁波中车时代传感技术有限公司员工在生产线上工作。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:09",
      "impact": "neutral"
    },
    {
      "title": "站在位于陕西省子长市的延安市禾草沟煤业有限公司（以下简称“禾草沟煤业”）智能化生产指挥中心，智能化调度指挥中心大屏铺满整面墙壁，16个摄像头画面实时呈现，各项生产指标和矿区一线生产情况一目了然。（位于禾草沟煤业智能化生产指挥中心内的智能化调度指挥中心。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:27",
      "impact": "neutral"
    },
    {
      "title": "中经记者黄永旭定西报道青岛胶州·通渭服装产业园，是胶州、通渭两地东西部协作结出的第一颗产业硕果。（黄永旭/摄影）初秋的陇中大地，秋风拂过通渭县南北山的青岛生态林，满目苍翠。沿着蜿蜒的山路向上，云杉、国槐在山坡上层层叠叠，曾经裸露的黄土地不见了踪影。县城东部的青岛胶州·通渭服装产业园里，缝纫机的哒哒声此起彼伏，一批批成衣从这里发往全国各地。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:22",
      "impact": "neutral"
    },
    {
      "title": "陕西延安的苹果园正在悄然发生变化。过去，需要架梯子才能采摘的高大果树，如今逐渐被一排排低矮、整齐的新果树取代。这些果树虽然个头不高，却挂满了红彤彤的苹果，枝条在果实的重压下微微弯曲。近期，《中国经营报》“再走长征路见证新时代”主题采访团走进延安市宝塔区柳林镇南庄河村飞天苹果基地。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:22",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者于祥明）当新能源装机进入“亿千瓦级”时代，其应用场景如何创新前行？冀北亿千瓦级新能源服务京津冀能源绿色转型和产业协同发展项目（以下简称“冀北项目”）将给出答案。近日，国家发展改革委公布首批136个标志性重大应用场景清单，国家电网牵头申报的冀北项目是其中之一。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:18",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者宋薇萍）随着第九届中国国际进口博览会（简称进博会）临近，作为进博会永久举办地，上海市青浦区各项服务保障工作已进入全面冲刺阶段。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:18",
      "impact": "neutral"
    },
    {
      "title": "10月28日，中国人民银行北京市分行、国家外汇管理局北京市分局举行2026年第四季度新闻发布会。人民银行北京市分行调查统计处副处长刘前进在会上表示，今年以来，人民银行北京市分行持续落实适度宽松的货币政策，引导金融机构强化对实体经济和重点领域的金融服务，为首都经济持续向好向优创造适宜的货币金融环境。具体来看，金融支持实体经济力度保持稳定，企业融资渠道更加多元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:14",
      "impact": "neutral"
    },
    {
      "title": "中国证券报·中证金牛座记者10月28日从自然资源部获悉，前三季度，我国海洋经济实现平稳增长，结构不断优化，韧性继续显现，向新向优发展势头不断巩固。初步核算，前三季度海洋生产总值8.5万亿元，同比增长4.9%。具体而言，海洋资源配置扎实推进。一是海洋能源开发有序推进。海洋原油产量同比增长3.5%，我国首个百米水深油气原位扩容平台正式投用。二是海洋水产品保持稳定供给。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:14",
      "impact": "neutral"
    },
    {
      "title": "10月28日，2026成都产投产业投资生态大会暨“产投28计划”年度大会在成都举行。成都市委国资国企工委常务副书记，市国资委党委书记、主任蒋明在会上表示，产业建圈强链从来不是国资国企的“独角戏”，而是各类市场主体的“大合唱”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:14",
      "impact": "neutral"
    },
    {
      "title": "10月28日，中国人民银行北京市分行、国家外汇管理局北京市分局举行2026年第四季度新闻发布会，围绕2026年前三季度北京市金融统计数据等介绍情况。整体看，在适度宽松的货币政策引导下，金融机构强化对实体经济和重点领域支持，重点行业贷款增长较快，社会综合融资成本低位运行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:50",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 55,
    "label": "中性",
    "upDownRatio": "4,549/725",
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
