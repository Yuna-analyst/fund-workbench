// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-28 18:04:31
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-28 18:04 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-28",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3823.62,
      "change": -64.75,
      "changePct": "-1.67%",
      "high": 3878.41,
      "low": 3806.67,
      "volume": 452350675.0,
      "amount": 804543700000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 12858.75,
      "change": -458.22,
      "changePct": "-3.44%",
      "high": 13267.65,
      "low": 12801.2,
      "volume": 540174267.0,
      "amount": 898255360000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3139.82,
      "change": -149.13,
      "changePct": "-4.53%",
      "high": 3270.81,
      "low": 3125.2,
      "volume": 150166744.0,
      "amount": 430380130000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1555.98,
      "change": -65.89,
      "changePct": "-4.06%",
      "high": 1610.92,
      "low": 1548.95,
      "volume": 7406577.0,
      "amount": 80586290000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4340.76,
      "change": -98.38,
      "changePct": "-2.22%",
      "high": 4423.82,
      "low": 4323.57,
      "volume": 171277373.0,
      "amount": 428620470000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7402.3,
      "change": -221.77,
      "changePct": "-2.91%",
      "high": 7601.09,
      "low": 7364.43,
      "volume": 132637995.0,
      "amount": 289039560000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.93万亿",
      "label": "成交额",
      "rawAmount": 2931425510000.0,
      "change": ""
    },
    "upDown": {
      "val": "489/2,755",
      "label": "涨/跌家数",
      "rawUp": 489,
      "rawDown": 2755,
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
    "totalInflow": 1.23,
    "totalOutflow": 0,
    "netFlow": 1.23,
    "netFlowTrend": [
      0.25,
      0.49,
      0.74,
      0.98,
      1.23
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
      "name": "创新药",
      "inflow": 1.69,
      "pct": 0.48
    },
    {
      "name": "医药",
      "inflow": 0.89,
      "pct": 0.27
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -1.71
    },
    {
      "name": "食品",
      "inflow": -0.04,
      "pct": -0.62
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -3.12
    },
    {
      "name": "钢铁",
      "inflow": -0.12,
      "pct": -1.52
    },
    {
      "name": "家电",
      "inflow": -0.15,
      "pct": -1.56
    },
    {
      "name": "游戏",
      "inflow": -0.23,
      "pct": -2.75
    },
    {
      "name": "农业",
      "inflow": -0.35,
      "pct": -0.14
    },
    {
      "name": "新能源",
      "inflow": -0.37,
      "pct": -2.78
    },
    {
      "name": "新能源车",
      "inflow": -0.4,
      "pct": -2.65
    },
    {
      "name": "光伏",
      "inflow": -0.45,
      "pct": -2.65
    },
    {
      "name": "军工",
      "inflow": -0.67,
      "pct": -2.75
    },
    {
      "name": "地产",
      "inflow": -0.73,
      "pct": -1.19
    },
    {
      "name": "传媒",
      "inflow": -0.79,
      "pct": -2.49
    },
    {
      "name": "白酒",
      "inflow": -0.83,
      "pct": -0.49
    },
    {
      "name": "医疗",
      "inflow": -1.29,
      "pct": -0.29
    },
    {
      "name": "煤炭",
      "inflow": -2.29,
      "pct": -0.16
    },
    {
      "name": "券商",
      "inflow": -3.04,
      "pct": -2.2
    },
    {
      "name": "银行",
      "inflow": -3.44,
      "pct": -0.48
    }
  ],
  "sectors": [
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.845,
      "changePct": 0.48,
      "change": 0.004,
      "turnover": 5.64
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.376,
      "changePct": 0.27,
      "change": 0.001,
      "turnover": 2.96
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.711,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 1.18
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.264,
      "changePct": -0.16,
      "change": -0.002,
      "turnover": 7.62
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.34,
      "changePct": -0.29,
      "change": -0.001,
      "turnover": 4.31
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.835,
      "changePct": -0.48,
      "change": -0.004,
      "turnover": 11.46
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.406,
      "changePct": -0.49,
      "change": -0.002,
      "turnover": 2.76
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.483,
      "changePct": -0.62,
      "change": -0.003,
      "turnover": 0.13
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.242,
      "changePct": -1.19,
      "change": -0.015,
      "turnover": 2.42
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.104,
      "changePct": -1.52,
      "change": -0.017,
      "turnover": 0.41
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.392,
      "changePct": -1.56,
      "change": -0.022,
      "turnover": 0.5
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.975,
      "changePct": -1.71,
      "change": -0.017,
      "turnover": 0.06
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.49,
      "changePct": -2.2,
      "change": -0.011,
      "turnover": 10.13
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.782,
      "changePct": -2.49,
      "change": -0.02,
      "turnover": 2.64
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.771,
      "changePct": -2.65,
      "change": -0.021,
      "turnover": 1.51
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.433,
      "changePct": -2.65,
      "change": -0.039,
      "turnover": 1.34
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.098,
      "changePct": -2.75,
      "change": -0.031,
      "turnover": 2.24
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.024,
      "changePct": -2.75,
      "change": -0.029,
      "turnover": 0.78
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.202,
      "changePct": -2.78,
      "change": -0.063,
      "turnover": 1.24
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.086,
      "changePct": -3.12,
      "change": -0.035,
      "turnover": 0.23
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.57,
      "changePct": -3.44,
      "change": -0.056,
      "turnover": 2.11
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.593,
      "changePct": -3.92,
      "change": -0.065,
      "turnover": 8.92
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.98,
      "changePct": -4.2,
      "change": -0.043,
      "turnover": 11.34
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.966,
      "changePct": -4.55,
      "change": -0.046,
      "turnover": 2.82
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.079,
      "changePct": -4.68,
      "change": -0.053,
      "turnover": 8.67
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.788,
      "changePct": -4.72,
      "change": -0.039,
      "turnover": 0.61
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.967,
      "changePct": -6.84,
      "change": -0.071,
      "turnover": 10.99
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.627,
      "changePct": -7.66,
      "change": -0.052,
      "turnover": 47.63
    }
  ],
  "etfFlow": [
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.376,
      "changePct": 0.27,
      "amount": 2.96,
      "netFlow": 0.74
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.202,
      "changePct": -2.78,
      "amount": 1.24,
      "netFlow": -0.31
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.609,
      "changePct": -2.27,
      "amount": 7.23,
      "netFlow": -1.81
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.288,
      "changePct": -2.37,
      "amount": 7.72,
      "netFlow": -1.93
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.49,
      "changePct": -2.2,
      "amount": 10.13,
      "netFlow": -2.53
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.98,
      "changePct": -4.2,
      "amount": 11.34,
      "netFlow": -2.83
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.922,
      "changePct": -1.25,
      "amount": 17.18,
      "netFlow": -4.29
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.44,
      "changePct": -2.75,
      "amount": 20.81,
      "netFlow": -5.2
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.417,
      "changePct": -2.17,
      "amount": 43.73,
      "netFlow": -10.93
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.643,
      "changePct": -4.09,
      "amount": 75.78,
      "netFlow": -18.95
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.417,
      "changePct": -2.17,
      "amount": 43.73,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.922,
      "changePct": -1.25,
      "amount": 17.18,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.44,
      "changePct": -2.75,
      "amount": 20.81,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.609,
      "changePct": -2.27,
      "amount": 7.23,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.288,
      "changePct": -2.37,
      "amount": 7.72,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "创新药",
      "turnover": 5.64,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 1.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 11.46,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "白酒",
      "turnover": 2.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 2.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 10.13,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "传媒",
      "turnover": 2.64,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.78,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.23,
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
      "nav": 4.4698,
      "ret1w": -4.43,
      "ret1m": -6.54,
      "ret3m": -1.54,
      "ret6m": -10.65,
      "ret1y": 11.06,
      "ret2y": 14.97,
      "ret3y": 137.39
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.8576,
      "ret1w": -5.37,
      "ret1m": -9.04,
      "ret3m": -8.21,
      "ret6m": -22.55,
      "ret1y": -1.72,
      "ret2y": -8.27,
      "ret3y": 44.33
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.5791,
      "ret1w": -6.29,
      "ret1m": -9.96,
      "ret3m": -3.42,
      "ret6m": -17.26,
      "ret1y": 35.46,
      "ret2y": 69.72,
      "ret3y": 241.08
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6923,
      "ret1w": -0.07,
      "ret1m": -1.07,
      "ret3m": -3.59,
      "ret6m": 9.21,
      "ret1y": -6.17,
      "ret2y": -15.74,
      "ret3y": -4.37
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9358,
      "ret1w": -1.77,
      "ret1m": -4.08,
      "ret3m": -10.94,
      "ret6m": -15.74,
      "ret1y": -33.49,
      "ret2y": -31.18,
      "ret3y": -6.55
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6381,
      "ret1w": -1.36,
      "ret1m": -3.55,
      "ret3m": -5.17,
      "ret6m": -5.95,
      "ret1y": -24.18,
      "ret2y": -20.75,
      "ret3y": 17.55
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2267,
      "ret1w": -1.1,
      "ret1m": -2.95,
      "ret3m": -6.25,
      "ret6m": 4.21,
      "ret1y": -6.61,
      "ret2y": 4.01,
      "ret3y": 33.68
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.889,
      "ret1w": -3.38,
      "ret1m": -4.84,
      "ret3m": -0.74,
      "ret6m": -12.3,
      "ret1y": 0.16,
      "ret2y": 2.27,
      "ret3y": 60.08
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2933,
      "ret1w": -2.99,
      "ret1m": -5.22,
      "ret3m": -4.21,
      "ret6m": -12.16,
      "ret1y": -0.35,
      "ret2y": 2.61,
      "ret3y": 27.68
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.214,
      "ret1w": -5.39,
      "ret1m": -8.54,
      "ret3m": -6.49,
      "ret6m": -23.33,
      "ret1y": 24.72,
      "ret2y": 47.91,
      "ret3y": 234.44
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.081,
      "ret1w": -0.18,
      "ret1m": -2.35,
      "ret3m": -3.31,
      "ret6m": 10.19,
      "ret1y": -5.26,
      "ret2y": -15.88,
      "ret3y": -13.24
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.411,
      "ret1w": -0.86,
      "ret1m": -1.39,
      "ret3m": 1.86,
      "ret6m": 11.16,
      "ret1y": -8.81,
      "ret2y": -8.74,
      "ret3y": 24.54
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6432,
      "ret1w": -4.75,
      "ret1m": -8.67,
      "ret3m": -7.06,
      "ret6m": -34.05,
      "ret1y": -48.42,
      "ret2y": -42.47,
      "ret3y": 9.45
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8595,
      "ret1w": -0.66,
      "ret1m": -2.26,
      "ret3m": -4.26,
      "ret6m": 1.19,
      "ret1y": 4.54,
      "ret2y": -7.63,
      "ret3y": -5.09
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6239,
      "ret1w": -2.95,
      "ret1m": -4.68,
      "ret3m": -2.53,
      "ret6m": -9.11,
      "ret1y": -0.27,
      "ret2y": 7.37,
      "ret3y": 56.46
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.2188,
      "ret1w": -7.09,
      "ret1m": -10.4,
      "ret3m": -6.84,
      "ret6m": -35.26,
      "ret1y": 16.69,
      "ret2y": 64.89,
      "ret3y": 185.23
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5749,
      "ret1w": -0.44,
      "ret1m": -0.9,
      "ret3m": 0.53,
      "ret6m": 9.65,
      "ret1y": -2.81,
      "ret2y": -3.41,
      "ret3y": 8.53
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.006,
      "ret1w": -0.69,
      "ret1m": -5.09,
      "ret3m": -2.9,
      "ret6m": 10.67,
      "ret1y": 3.29,
      "ret2y": -14.09,
      "ret3y": -2.99
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2579,
      "ret1w": -0.23,
      "ret1m": -1.07,
      "ret3m": -4.1,
      "ret6m": 4.78,
      "ret1y": -7.04,
      "ret2y": 3.16,
      "ret3y": 5.41
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2864,
      "ret1w": -2.76,
      "ret1m": -4.56,
      "ret3m": -3.82,
      "ret6m": 0.73,
      "ret1y": 4.59,
      "ret2y": 14.59,
      "ret3y": 65.41
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.1844,
      "ret1w": -3.79,
      "ret1m": -6.69,
      "ret3m": -7.8,
      "ret6m": -19.17,
      "ret1y": -5.99,
      "ret2y": 3.36,
      "ret3y": 34.56
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.2602,
      "ret1w": -3.79,
      "ret1m": -6.69,
      "ret3m": -7.77,
      "ret6m": -19.09,
      "ret1y": -5.82,
      "ret2y": 3.76,
      "ret3y": 35.62
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.066,
      "ret1w": -0.62,
      "ret1m": -1.34,
      "ret3m": -2.35,
      "ret6m": -3.92,
      "ret1y": -0.46,
      "ret2y": -0.12,
      "ret3y": 5.26
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.04,
      "ret1w": -0.63,
      "ret1m": -1.34,
      "ret3m": -2.31,
      "ret6m": -3.77,
      "ret1y": -0.16,
      "ret2y": 0.47,
      "ret3y": 6.52
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6961,
      "ret1w": -0.76,
      "ret1m": -1.75,
      "ret3m": -3.8,
      "ret6m": -1.79,
      "ret1y": -9.68,
      "ret2y": -13.44,
      "ret3y": -2.45
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7139,
      "ret1w": -0.75,
      "ret1m": -1.75,
      "ret3m": -3.77,
      "ret6m": -1.67,
      "ret1y": -9.46,
      "ret2y": -13.01,
      "ret3y": -1.48
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.6708,
      "ret1w": -5.09,
      "ret1m": -8.81,
      "ret3m": -5.6,
      "ret6m": -23.49,
      "ret1y": 29.87,
      "ret2y": 45.04,
      "ret3y": 139.02
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4403,
      "ret1w": -1.78,
      "ret1m": -3.04,
      "ret3m": -4.54,
      "ret6m": -8.88,
      "ret1y": 5.81,
      "ret2y": 9.71,
      "ret3y": 69.03
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7105,
      "ret1w": -1.66,
      "ret1m": -1.77,
      "ret3m": -4.03,
      "ret6m": -12.83,
      "ret1y": -15.14,
      "ret2y": -11.87,
      "ret3y": 2.36
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1478,
      "ret1w": -2.05,
      "ret1m": -1.7,
      "ret3m": -1.02,
      "ret6m": -15.14,
      "ret1y": 24.41,
      "ret2y": 28.22,
      "ret3y": 127.91
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4969,
      "ret1w": -1.82,
      "ret1m": -3.08,
      "ret3m": -2.22,
      "ret6m": -21.33,
      "ret1y": 0.61,
      "ret2y": 7.32,
      "ret3y": 39.3
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5066,
      "ret1w": -1.8,
      "ret1m": -3.06,
      "ret3m": -2.18,
      "ret6m": -21.24,
      "ret1y": 0.82,
      "ret2y": 7.76,
      "ret3y": 40.45
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2658,
      "ret1w": -0.08,
      "ret1m": -0.23,
      "ret3m": -1.63,
      "ret6m": 2.11,
      "ret1y": -2.07,
      "ret2y": -1.52,
      "ret3y": 0.3
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1009,
      "ret1w": -0.49,
      "ret1m": -1.79,
      "ret3m": -3.26,
      "ret6m": -0.92,
      "ret1y": -4.24,
      "ret2y": -2.76,
      "ret3y": 9.83
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3174,
      "ret1w": -2.53,
      "ret1m": -5.89,
      "ret3m": -7.37,
      "ret6m": -21.24,
      "ret1y": -4.09,
      "ret2y": -22.06,
      "ret3y": -0.41
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9233,
      "ret1w": -1.93,
      "ret1m": -3.52,
      "ret3m": -3.74,
      "ret6m": 0.66,
      "ret1y": -7.7,
      "ret2y": 5.3,
      "ret3y": 35.5
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.154,
      "ret1w": -5.31,
      "ret1m": -8.87,
      "ret3m": -5.57,
      "ret6m": -34.13,
      "ret1y": 19.51,
      "ret2y": 49.27,
      "ret3y": 167.97
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4977,
      "ret1w": 0.13,
      "ret1m": -0.09,
      "ret3m": 0.96,
      "ret6m": 8.58,
      "ret1y": -0.21,
      "ret2y": 1.05,
      "ret3y": 0.29
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5885,
      "ret1w": -3.05,
      "ret1m": -5.19,
      "ret3m": -6.33,
      "ret6m": -30.08,
      "ret1y": -5.02,
      "ret2y": -3.86,
      "ret3y": 28.92
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.647,
      "ret1w": -5.95,
      "ret1m": -10.75,
      "ret3m": -4.67,
      "ret6m": -28.03,
      "ret1y": 53.51,
      "ret2y": 93.77,
      "ret3y": 302.45
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0609,
      "ret1w": -0.38,
      "ret1m": -0.68,
      "ret3m": -0.57,
      "ret6m": -2.3,
      "ret1y": -0.09,
      "ret2y": 0.99,
      "ret3y": 3.76
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1094,
      "ret1w": -0.37,
      "ret1m": -0.68,
      "ret3m": -0.56,
      "ret6m": -2.24,
      "ret1y": 0.04,
      "ret2y": 1.27,
      "ret3y": 4.46
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.066,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.21,
      "ret6m": 0.39,
      "ret1y": 0.75,
      "ret2y": 1.68,
      "ret3y": 2.92
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0768,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": 0.09,
      "ret6m": 0.34,
      "ret1y": 0.7,
      "ret2y": 1.55,
      "ret3y": 2.99
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0915,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.41,
      "ret1y": 0.86,
      "ret2y": 1.87,
      "ret3y": 3.66
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.05,
      "ret1w": -1.13,
      "ret1m": -1.99,
      "ret3m": -1.73,
      "ret6m": -5.11,
      "ret1y": 0.9,
      "ret2y": 4.3,
      "ret3y": 9.55
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2092,
      "ret1w": -1.17,
      "ret1m": -1.79,
      "ret3m": -1.06,
      "ret6m": -4.67,
      "ret1y": 0.81,
      "ret2y": 2.21,
      "ret3y": 4.62
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0569,
      "ret1w": -1.13,
      "ret1m": -1.98,
      "ret3m": -1.7,
      "ret6m": -5.01,
      "ret1y": 1.1,
      "ret2y": 4.71,
      "ret3y": 10.43
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0475,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.2,
      "ret6m": 0.42,
      "ret1y": 0.88,
      "ret2y": 1.85,
      "ret3y": 3.64
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1596,
      "ret1w": -1.07,
      "ret1m": -1.65,
      "ret3m": -1.04,
      "ret6m": -3.76,
      "ret1y": -3.26,
      "ret2y": -1.44,
      "ret3y": 7.15
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.202,
      "ret1w": -0.16,
      "ret1m": -0.69,
      "ret3m": -1.31,
      "ret6m": -1.78,
      "ret1y": -0.79,
      "ret2y": 1.33,
      "ret3y": 11.75
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1318,
      "ret1w": -0.41,
      "ret1m": -0.72,
      "ret3m": -0.78,
      "ret6m": -3.16,
      "ret1y": 1.1,
      "ret2y": 2.21,
      "ret3y": 8.84
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2031,
      "ret1w": -0.41,
      "ret1m": -0.72,
      "ret3m": -0.74,
      "ret6m": -3.06,
      "ret1y": 1.3,
      "ret2y": 2.63,
      "ret3y": 9.74
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "债券型",
      "nav": 1.1616,
      "ret1w": -0.06,
      "ret1m": -0.28,
      "ret3m": -0.48,
      "ret6m": -0.48,
      "ret1y": 0.15,
      "ret2y": 1.52,
      "ret3y": 6.85
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "债券型",
      "nav": 1.1817,
      "ret1w": -0.06,
      "ret1m": -0.28,
      "ret3m": -0.45,
      "ret6m": -0.4,
      "ret1y": 0.3,
      "ret2y": 1.84,
      "ret3y": 7.51
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.505,
      "ret1w": -0.52,
      "ret1m": 6.82,
      "ret3m": 8.68,
      "ret6m": -7.22,
      "ret1y": 45.64,
      "ret2y": 88.77,
      "ret3y": 160.12
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0156,
      "ret1w": -0.04,
      "ret1m": 1.45,
      "ret3m": 1.81,
      "ret6m": 4.94,
      "ret1y": 13.97,
      "ret2y": 7.24,
      "ret3y": 35.01
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8061,
      "ret1w": -1.14,
      "ret1m": 0.21,
      "ret3m": -2.0,
      "ret6m": -15.41,
      "ret1y": -7.76,
      "ret2y": -5.37,
      "ret3y": 42.36
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.5161,
      "ret1w": 1.38,
      "ret1m": 3.26,
      "ret3m": 5.65,
      "ret6m": 8.1,
      "ret1y": 33.35,
      "ret2y": 27.56,
      "ret3y": 80.25
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9163,
      "ret1w": -0.32,
      "ret1m": -1.12,
      "ret3m": -2.31,
      "ret6m": -3.32,
      "ret1y": -3.71,
      "ret2y": -5.88,
      "ret3y": -3.31
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7333,
      "ret1w": -0.26,
      "ret1m": 5.03,
      "ret3m": 4.84,
      "ret6m": -6.61,
      "ret1y": 33.79,
      "ret2y": 46.75,
      "ret3y": 102.11
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.55,
      "ret1w": -0.15,
      "ret1m": 0.04,
      "ret3m": -1.15,
      "ret6m": -0.78,
      "ret1y": 8.18,
      "ret2y": 4.26,
      "ret3y": 19.8
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.208,
      "ret1w": -3.51,
      "ret1m": 3.42,
      "ret3m": -3.28,
      "ret6m": 10.83,
      "ret1y": -4.2,
      "ret2y": -19.57,
      "ret3y": 105.44
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.963,
      "ret1w": -2.73,
      "ret1m": 4.11,
      "ret3m": 0.0,
      "ret6m": 1.05,
      "ret1y": -3.99,
      "ret2y": -22.53,
      "ret3y": 38.96
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9737,
      "ret1w": -0.34,
      "ret1m": 6.48,
      "ret3m": 6.4,
      "ret6m": -7.08,
      "ret1y": 45.78,
      "ret2y": 74.78,
      "ret3y": 151.9
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5685,
      "ret1w": -0.63,
      "ret1m": -2.78,
      "ret3m": -4.98,
      "ret6m": 13.87,
      "ret1y": 4.21,
      "ret2y": 28.72,
      "ret3y": 49.92
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7618,
      "ret1w": -0.38,
      "ret1m": 2.0,
      "ret3m": 3.2,
      "ret6m": 2.69,
      "ret1y": 17.96,
      "ret2y": 26.13,
      "ret3y": 57.39
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3126,
      "ret1w": -0.97,
      "ret1m": 1.99,
      "ret3m": -0.23,
      "ret6m": -2.13,
      "ret1y": 10.45,
      "ret2y": 11.79,
      "ret3y": 35.52
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.235,
      "ret1w": -0.4,
      "ret1m": -1.98,
      "ret3m": -7.35,
      "ret6m": -6.86,
      "ret1y": 1.98,
      "ret2y": -0.48,
      "ret3y": -14.35
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.03,
      "ret1w": -0.49,
      "ret1m": -2.12,
      "ret3m": -8.64,
      "ret6m": 4.8,
      "ret1y": -5.93,
      "ret2y": 5.89,
      "ret3y": 44.28
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0132,
      "ret1w": 0.0,
      "ret1m": 0.09,
      "ret3m": 0.28,
      "ret6m": 0.52,
      "ret1y": 1.46,
      "ret2y": 2.43,
      "ret3y": 3.72
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0123,
      "ret1w": 0.01,
      "ret1m": 0.1,
      "ret3m": 0.3,
      "ret6m": 0.52,
      "ret1y": 1.48,
      "ret2y": 2.5,
      "ret3y": 3.88
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.341,
      "ret1w": -2.47,
      "ret1m": -4.69,
      "ret3m": -5.96,
      "ret6m": -14.53,
      "ret1y": -4.42,
      "ret2y": -7.07,
      "ret3y": 16.2
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.649,
      "ret1w": -3.25,
      "ret1m": -5.9,
      "ret3m": -7.25,
      "ret6m": -15.53,
      "ret1y": -3.32,
      "ret2y": -0.71,
      "ret3y": 36.27
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5498,
      "ret1w": -2.53,
      "ret1m": -5.39,
      "ret3m": -11.45,
      "ret6m": -5.29,
      "ret1y": -10.49,
      "ret2y": 13.65,
      "ret3y": 44.44
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0505,
      "ret1w": -2.03,
      "ret1m": -3.89,
      "ret3m": -4.75,
      "ret6m": -8.69,
      "ret1y": 0.81,
      "ret2y": 5.56,
      "ret3y": 26.61
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1098,
      "ret1w": -2.03,
      "ret1m": -3.88,
      "ret3m": -4.72,
      "ret6m": -8.6,
      "ret1y": 1.02,
      "ret2y": 5.99,
      "ret3y": 27.63
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9154,
      "ret1w": -2.78,
      "ret1m": -5.43,
      "ret3m": -5.9,
      "ret6m": -14.24,
      "ret1y": -3.55,
      "ret2y": 2.83,
      "ret3y": 42.39
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7019,
      "ret1w": -2.09,
      "ret1m": -4.12,
      "ret3m": -5.41,
      "ret6m": -9.72,
      "ret1y": -2.43,
      "ret2y": -3.09,
      "ret3y": 19.57
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5239,
      "ret1w": -1.63,
      "ret1m": -3.84,
      "ret3m": -4.86,
      "ret6m": -5.26,
      "ret1y": -6.34,
      "ret2y": 4.93,
      "ret3y": 37.83
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.8326,
      "ret1w": -3.8,
      "ret1m": -6.71,
      "ret3m": -7.56,
      "ret6m": -22.29,
      "ret1y": 3.24,
      "ret2y": 0.42,
      "ret3y": 47.55
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0485,
      "ret1w": -1.21,
      "ret1m": -2.64,
      "ret3m": -6.17,
      "ret6m": 2.38,
      "ret1y": -4.28,
      "ret2y": -5.28,
      "ret3y": 10.87
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4772,
      "ret1w": -0.71,
      "ret1m": -2.29,
      "ret3m": -4.22,
      "ret6m": 1.91,
      "ret1y": 3.85,
      "ret2y": 8.77,
      "ret3y": 25.06
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5419,
      "ret1w": 0.05,
      "ret1m": 3.19,
      "ret3m": 4.27,
      "ret6m": 3.06,
      "ret1y": 22.57,
      "ret2y": 15.92,
      "ret3y": 40.5
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.5755,
      "ret1w": -3.23,
      "ret1m": -5.75,
      "ret3m": -7.57,
      "ret6m": -16.64,
      "ret1y": -3.94,
      "ret2y": -2.01,
      "ret3y": 30.65
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1912,
      "ret1w": -0.31,
      "ret1m": 1.69,
      "ret3m": -0.66,
      "ret6m": -11.82,
      "ret1y": 10.3,
      "ret2y": 6.66,
      "ret3y": 56.86
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1936,
      "ret1w": -0.3,
      "ret1m": 1.7,
      "ret3m": -0.59,
      "ret6m": -11.68,
      "ret1y": 10.4,
      "ret2y": 6.84,
      "ret3y": 56.31
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3836,
      "ret1w": -1.77,
      "ret1m": 0.44,
      "ret3m": -0.9,
      "ret6m": -14.62,
      "ret1y": -0.68,
      "ret2y": -2.76,
      "ret3y": 37.45
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4156,
      "ret1w": -1.77,
      "ret1m": 0.44,
      "ret3m": -0.86,
      "ret6m": -14.53,
      "ret1y": -0.48,
      "ret2y": -2.36,
      "ret3y": 38.55
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9908,
      "ret1w": -1.9,
      "ret1m": 0.09,
      "ret3m": -0.92,
      "ret6m": -23.22,
      "ret1y": 3.38,
      "ret2y": 3.74,
      "ret3y": 60.24
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0862,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.23,
      "ret6m": 0.46,
      "ret1y": 0.9,
      "ret2y": 1.99,
      "ret3y": 3.5
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4098,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.01,
      "ret6m": 0.12,
      "ret1y": 0.04,
      "ret2y": 0.74,
      "ret3y": 8.07
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4624,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.04,
      "ret6m": 0.22,
      "ret1y": 0.25,
      "ret2y": 1.14,
      "ret3y": 8.94
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0691,
      "ret1w": -1.44,
      "ret1m": -3.47,
      "ret3m": -2.6,
      "ret6m": -6.86,
      "ret1y": 11.68,
      "ret2y": 19.23,
      "ret3y": 54.16
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1771,
      "ret1w": -1.77,
      "ret1m": -4.7,
      "ret3m": -6.22,
      "ret6m": -6.38,
      "ret1y": 3.03,
      "ret2y": 4.6,
      "ret3y": 32.74
    },
    {
      "code": "710002",
      "name": "富安达策略精选混合A",
      "type": "FADCLJXHHA",
      "nav": 2.061,
      "ret1w": -1.25,
      "ret1m": -3.82,
      "ret3m": -7.87,
      "ret6m": -5.96,
      "ret1y": -2.87,
      "ret2y": 2.37,
      "ret3y": 11.36
    },
    {
      "code": "710001",
      "name": "富安达优势成长混合A",
      "type": "FADYSCZHHA",
      "nav": 3.4793,
      "ret1w": -4.89,
      "ret1m": -8.13,
      "ret3m": -7.52,
      "ret6m": -30.74,
      "ret1y": -2.83,
      "ret2y": -20.06,
      "ret3y": 40.61
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 4.6361
      },
      {
        "date": "2026-09-18",
        "nav": 4.7629
      },
      {
        "date": "2026-09-21",
        "nav": 4.7827
      },
      {
        "date": "2026-09-22",
        "nav": 4.7444
      },
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
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 4.1077
      },
      {
        "date": "2026-09-18",
        "nav": 4.2009
      },
      {
        "date": "2026-09-21",
        "nav": 4.2411
      },
      {
        "date": "2026-09-22",
        "nav": 4.2221
      },
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
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 6.0187
      },
      {
        "date": "2026-09-18",
        "nav": 6.2482
      },
      {
        "date": "2026-09-21",
        "nav": 6.1964
      },
      {
        "date": "2026-09-22",
        "nav": 6.138
      },
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
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.6933
      },
      {
        "date": "2026-09-18",
        "nav": 0.6958
      },
      {
        "date": "2026-09-21",
        "nav": 0.6998
      },
      {
        "date": "2026-09-22",
        "nav": 0.6975
      },
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
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.9447
      },
      {
        "date": "2026-09-18",
        "nav": 2.0084
      },
      {
        "date": "2026-09-21",
        "nav": 2.0181
      },
      {
        "date": "2026-09-22",
        "nav": 2.0186
      },
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
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.6892
      },
      {
        "date": "2026-09-18",
        "nav": 2.7246
      },
      {
        "date": "2026-09-21",
        "nav": 2.7351
      },
      {
        "date": "2026-09-22",
        "nav": 2.7188
      },
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
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 5.334
      },
      {
        "date": "2026-09-18",
        "nav": 5.3799
      },
      {
        "date": "2026-09-21",
        "nav": 5.3855
      },
      {
        "date": "2026-09-22",
        "nav": 5.3807
      },
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
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.917
      },
      {
        "date": "2026-09-18",
        "nav": 1.958
      },
      {
        "date": "2026-09-21",
        "nav": 1.985
      },
      {
        "date": "2026-09-22",
        "nav": 1.982
      },
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
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3268
      },
      {
        "date": "2026-09-18",
        "nav": 1.3504
      },
      {
        "date": "2026-09-21",
        "nav": 1.3646
      },
      {
        "date": "2026-09-22",
        "nav": 1.3649
      },
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
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 3.414
      },
      {
        "date": "2026-09-18",
        "nav": 3.509
      },
      {
        "date": "2026-09-21",
        "nav": 3.514
      },
      {
        "date": "2026-09-22",
        "nav": 3.474
      },
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
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.083
      },
      {
        "date": "2026-09-18",
        "nav": 1.092
      },
      {
        "date": "2026-09-21",
        "nav": 1.107
      },
      {
        "date": "2026-09-22",
        "nav": 1.104
      },
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
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.312
      },
      {
        "date": "2026-09-18",
        "nav": 2.344
      },
      {
        "date": "2026-09-21",
        "nav": 2.445
      },
      {
        "date": "2026-09-22",
        "nav": 2.461
      },
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
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.7403
      },
      {
        "date": "2026-09-18",
        "nav": 1.8093
      },
      {
        "date": "2026-09-21",
        "nav": 1.7992
      },
      {
        "date": "2026-09-22",
        "nav": 1.779
      },
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
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.8869
      },
      {
        "date": "2026-09-18",
        "nav": 1.8943
      },
      {
        "date": "2026-09-21",
        "nav": 1.9024
      },
      {
        "date": "2026-09-22",
        "nav": 1.9068
      },
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
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.6579
      },
      {
        "date": "2026-09-18",
        "nav": 1.6859
      },
      {
        "date": "2026-09-21",
        "nav": 1.7037
      },
      {
        "date": "2026-09-22",
        "nav": 1.7043
      },
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
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.3945
      },
      {
        "date": "2026-09-18",
        "nav": 2.462
      },
      {
        "date": "2026-09-21",
        "nav": 2.4764
      },
      {
        "date": "2026-09-22",
        "nav": 2.4605
      },
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
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.5143
      },
      {
        "date": "2026-09-18",
        "nav": 2.5503
      },
      {
        "date": "2026-09-21",
        "nav": 2.5983
      },
      {
        "date": "2026-09-22",
        "nav": 2.6039
      },
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
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.005
      },
      {
        "date": "2026-09-18",
        "nav": 1.013
      },
      {
        "date": "2026-09-21",
        "nav": 1.06
      },
      {
        "date": "2026-09-22",
        "nav": 1.058
      },
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
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.2689
      },
      {
        "date": "2026-09-18",
        "nav": 2.2732
      },
      {
        "date": "2026-09-21",
        "nav": 2.2824
      },
      {
        "date": "2026-09-22",
        "nav": 2.2801
      },
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
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3205
      },
      {
        "date": "2026-09-18",
        "nav": 1.3399
      },
      {
        "date": "2026-09-21",
        "nav": 1.3479
      },
      {
        "date": "2026-09-22",
        "nav": 1.3489
      },
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
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.2439
      },
      {
        "date": "2026-09-18",
        "nav": 1.261
      },
      {
        "date": "2026-09-21",
        "nav": 1.2693
      },
      {
        "date": "2026-09-22",
        "nav": 1.2633
      },
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
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3235
      },
      {
        "date": "2026-09-18",
        "nav": 1.3416
      },
      {
        "date": "2026-09-21",
        "nav": 1.3505
      },
      {
        "date": "2026-09-22",
        "nav": 1.3441
      },
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
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.0761
      },
      {
        "date": "2026-09-18",
        "nav": 1.0796
      },
      {
        "date": "2026-09-21",
        "nav": 1.0805
      },
      {
        "date": "2026-09-22",
        "nav": 1.08
      },
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
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.0498
      },
      {
        "date": "2026-09-18",
        "nav": 1.0532
      },
      {
        "date": "2026-09-21",
        "nav": 1.0541
      },
      {
        "date": "2026-09-22",
        "nav": 1.0536
      },
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
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.6973
      },
      {
        "date": "2026-09-18",
        "nav": 0.7054
      },
      {
        "date": "2026-09-21",
        "nav": 0.7085
      },
      {
        "date": "2026-09-22",
        "nav": 0.7087
      },
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
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.7151
      },
      {
        "date": "2026-09-18",
        "nav": 0.7234
      },
      {
        "date": "2026-09-21",
        "nav": 0.7266
      },
      {
        "date": "2026-09-22",
        "nav": 0.7268
      },
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
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.8641
      },
      {
        "date": "2026-09-18",
        "nav": 2.9118
      },
      {
        "date": "2026-09-21",
        "nav": 2.9289
      },
      {
        "date": "2026-09-22",
        "nav": 2.9058
      },
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
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.4324
      },
      {
        "date": "2026-09-18",
        "nav": 2.4773
      },
      {
        "date": "2026-09-21",
        "nav": 2.5167
      },
      {
        "date": "2026-09-22",
        "nav": 2.535
      },
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
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.7042
      },
      {
        "date": "2026-09-18",
        "nav": 0.7139
      },
      {
        "date": "2026-09-21",
        "nav": 0.7233
      },
      {
        "date": "2026-09-22",
        "nav": 0.7324
      },
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
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 4.0479
      },
      {
        "date": "2026-09-18",
        "nav": 4.1534
      },
      {
        "date": "2026-09-21",
        "nav": 4.2195
      },
      {
        "date": "2026-09-22",
        "nav": 4.3316
      },
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
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.5043
      },
      {
        "date": "2026-09-18",
        "nav": 0.5106
      },
      {
        "date": "2026-09-21",
        "nav": 0.5127
      },
      {
        "date": "2026-09-22",
        "nav": 0.5129
      },
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
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.5141
      },
      {
        "date": "2026-09-18",
        "nav": 0.5204
      },
      {
        "date": "2026-09-21",
        "nav": 0.5226
      },
      {
        "date": "2026-09-22",
        "nav": 0.5229
      },
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
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.2684
      },
      {
        "date": "2026-09-18",
        "nav": 1.2686
      },
      {
        "date": "2026-09-21",
        "nav": 1.2687
      },
      {
        "date": "2026-09-22",
        "nav": 1.2698
      },
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
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.1057
      },
      {
        "date": "2026-09-18",
        "nav": 1.1138
      },
      {
        "date": "2026-09-21",
        "nav": 1.121
      },
      {
        "date": "2026-09-22",
        "nav": 1.1199
      },
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
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3683
      },
      {
        "date": "2026-09-18",
        "nav": 1.3868
      },
      {
        "date": "2026-09-21",
        "nav": 1.3999
      },
      {
        "date": "2026-09-22",
        "nav": 1.3988
      },
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
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.9651
      },
      {
        "date": "2026-09-18",
        "nav": 2.9953
      },
      {
        "date": "2026-09-21",
        "nav": 3.0299
      },
      {
        "date": "2026-09-22",
        "nav": 3.0332
      },
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
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 3.371
      },
      {
        "date": "2026-09-18",
        "nav": 3.444
      },
      {
        "date": "2026-09-21",
        "nav": 3.461
      },
      {
        "date": "2026-09-22",
        "nav": 3.433
      },
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
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.5009
      },
      {
        "date": "2026-09-18",
        "nav": 1.4955
      },
      {
        "date": "2026-09-21",
        "nav": 1.4991
      },
      {
        "date": "2026-09-22",
        "nav": 1.4961
      },
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
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.6088
      },
      {
        "date": "2026-09-18",
        "nav": 0.6241
      },
      {
        "date": "2026-09-21",
        "nav": 0.6207
      },
      {
        "date": "2026-09-22",
        "nav": 0.6161
      },
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
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 14.957
      },
      {
        "date": "2026-09-18",
        "nav": 15.334
      },
      {
        "date": "2026-09-21",
        "nav": 15.29
      },
      {
        "date": "2026-09-22",
        "nav": 15.106
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 4.4698,
      "price": 4.4698,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.45,
      "nav": 3.8576,
      "price": 3.8576,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.5,
      "nav": 5.5791,
      "price": 5.5791,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 0.6923,
      "price": 0.6923,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.9358,
      "price": 1.9358,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.18,
      "nav": 2.6381,
      "price": 2.6381,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 5.2267,
      "price": 5.2267,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 1.889,
      "price": 1.889,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.26,
      "nav": 1.2933,
      "price": 1.2933,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 3.214,
      "price": 3.214,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.081,
      "price": 1.081,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.411,
      "price": 2.411,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 1.6432,
      "price": 1.6432,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.8595,
      "price": 1.8595,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.6239,
      "price": 1.6239,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.52,
      "nav": 2.2188,
      "price": 2.2188,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.5749,
      "price": 2.5749,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.25,
      "nav": 1.006,
      "price": 1.006,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.2579,
      "price": 2.2579,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.2864,
      "price": 1.2864,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.81,
      "sharpe": 0.96,
      "calmar": 0.96
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 13.56,
      "sharpe": -0.12,
      "calmar": -0.12
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 14.94,
      "sharpe": 2.37,
      "calmar": 2.37
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.6,
      "sharpe": -1.02,
      "calmar": -1.02
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 6.12,
      "sharpe": -3.69,
      "calmar": -3.69
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 5.32,
      "sharpe": -2.83,
      "calmar": -2.83
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.43,
      "sharpe": -0.83,
      "calmar": -0.83
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 7.26,
      "sharpe": 0.02,
      "calmar": 0.02
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 7.83,
      "sharpe": -0.03,
      "calmar": -0.03
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 12.81,
      "sharpe": 1.83,
      "calmar": 1.83
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.53,
      "sharpe": -0.72,
      "calmar": -0.72
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 2.08,
      "sharpe": -1.38,
      "calmar": -1.38
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 13.0,
      "sharpe": -3.54,
      "calmar": -3.54
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.39,
      "sharpe": 0.63,
      "calmar": 0.63
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.02,
      "sharpe": -0.03,
      "calmar": -0.03
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 15.6,
      "sharpe": 1.08,
      "calmar": 1.08
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.35,
      "sharpe": -0.48,
      "calmar": -0.48
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 7.63,
      "sharpe": 0.33,
      "calmar": 0.33
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.6,
      "sharpe": -1.16,
      "calmar": -1.16
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 6.84,
      "sharpe": 0.48,
      "calmar": 0.48
    }
  ],
  "news": [
    {
      "title": "七部门联合印发新型电池产业发展“十五五”规划全固态电池2030年初步实现规模化应用工业和信息化部、国家发展改革委等七部门近日联合印发《新型电池产业发展“十五五”规划》，明确到2030年全固态电池初步实现规模化应用，长寿命锂电池循环寿命达到15000次，头部企业产品缺陷率达到PPB级。据悉，这是我国电池领域的首个国家级专项规划。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:54",
      "impact": "neutral"
    },
    {
      "title": "前8个月规上工业企业利润增长15.7%国家统计局9月28日发布的数据显示，在工业生产稳中有进和工业品价格涨幅扩大的共同推动下，今年前8个月，规模以上工业企业营业收入同比增长6.6%，带动规模以上工业企业利润同比增长15.7%，今年以来累计增速保持两位数增长。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:54",
      "impact": "neutral"
    },
    {
      "title": "八部门推出19项金融举措支持服务业扩能提质中国人民银行、金融监管总局、中国证监会等八部门9月28日发布《关于金融支持服务业扩能提质的指导意见》（简称“意见”），促进金融资源更多投向服务业重点领域和薄弱环节。意见提出，支持符合条件的服务业企业上市融资、并购重组。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:54",
      "impact": "neutral"
    },
    {
      "title": "9月28日，国新办举行“开局起步‘十五五’”系列主题新闻发布会，介绍落实“十五五”规划，推动中央企业高质量发展情况。据国务院国有资产监督管理委员会新闻发言人、财务监管与运行评价局局长王少飞介绍，今年前8个月，中央企业累计实现增加值7.2万亿元，实现利润总额1.8万亿元，均保持正增长。截至8月底，中央企业资产总额达99.3万亿元，同比增长4.2%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:52",
      "impact": "neutral"
    },
    {
      "title": "9月28日，中国人民银行发布公告称，当日中国人民银行以固定利率、数量招标方式开展了1390亿元7天期逆回购操作，全额满足了一级交易商需求，操作利率维持1.4%不变。同日，中国人民银行还开展了6610亿元隔夜逆回购操作，并以固定数量、利率招标、多重价位中标方式开展了3000亿元14天期逆回购操作。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:52",
      "impact": "neutral"
    },
    {
      "title": "在刚刚过去的2026年夏天，一场“大烤”席卷全国电力系统。持续性高温天气下，居民制冷等生活用电需求攀升；与此同时，AI（人工智能）技术变革驱动的产业升级使算力需求拉升。当“天气热”遇上“算力热”，全社会用电负荷创历史新高。国家能源局最新数据显示，2026年8月，全国全社会用电量达到10332亿千瓦时，同比增长1.7%，用电量再破万亿千瓦时。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:52",
      "impact": "neutral"
    },
    {
      "title": "八部门发布19项金融支持服务业扩能提质举措",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:52",
      "impact": "neutral"
    },
    {
      "title": "9月28日，国家统计局发布数据显示，今年前8个月，在工业生产稳中有进和工业品价格涨幅扩大的共同推动下，规模以上工业企业营业收入同比增长6.6%，带动规模以上工业企业利润同比增长15.7%，今年以来累计增速保持两位数增长。其中，8月，规模以上工业企业利润同比增长4.2%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:52",
      "impact": "neutral"
    },
    {
      "title": "■李文昨日，据国务院国有资产监督管理委员会副主任庞骁刚介绍，中央企业发展“十五五”规划的编制，是今年国资央企工作的一个“重头戏”。规划已正式印发，其中突出价值创造，提出了明确目标——到2030年，中央企业为国民经济高质量发展创造更大价值；围绕增加值、功能价值、经济增加值、战略性新兴产业增加值、品牌价值5个方面，设置定量指标，推动价值创造成为企业发展的核心驱动力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:52",
      "impact": "neutral"
    },
    {
      "title": "国务院总理李强9月28日主持召开国务院常务会议，研究宏观政策发力提效、促进有效投资有关工作，听取新污染物治理进展情况汇报，审议通过《事业单位登记管理条例（草案）》。会议指出，针对当前经济运行中出现的问题，要加大宏观政策逆周期调节力度，推动经济持续向新向优向好发展，努力完成全年经济社会发展目标任务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:49",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 40,
    "label": "中性",
    "upDownRatio": "489/2,755",
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
