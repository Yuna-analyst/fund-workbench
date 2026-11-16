// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-16 20:15:14
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-16 20:15 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-16",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3602.57,
      "change": -31.78,
      "changePct": "-0.87%",
      "high": 3623.12,
      "low": 3586.57,
      "volume": 461643487.0,
      "amount": 706214350000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10690.78,
      "change": -278.01,
      "changePct": "-2.53%",
      "high": 10881.91,
      "low": 10642.37,
      "volume": 520171170.0,
      "amount": 778276110000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2320.02,
      "change": -106.06,
      "changePct": "-4.37%",
      "high": 2398.19,
      "low": 2308.9,
      "volume": 152931711.0,
      "amount": 369316400000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1213.68,
      "change": -65.98,
      "changePct": "-5.16%",
      "high": 1266.61,
      "low": 1200.55,
      "volume": 9104674.0,
      "amount": 85116420000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3979.8,
      "change": -36.49,
      "changePct": "-0.91%",
      "high": 3997.4,
      "low": 3959.93,
      "volume": 185439196.0,
      "amount": 430554180000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6297.18,
      "change": -168.31,
      "changePct": "-2.60%",
      "high": 6424.17,
      "low": 6268.46,
      "volume": 128952625.0,
      "amount": 258171670000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.63万亿",
      "label": "成交额",
      "rawAmount": 2627649130000.0,
      "change": ""
    },
    "upDown": {
      "val": "808/2,596",
      "label": "涨/跌家数",
      "rawUp": 808,
      "rawDown": 2596,
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
    "totalInflow": 11.13,
    "totalOutflow": 0,
    "netFlow": 11.13,
    "netFlowTrend": [
      2.23,
      4.45,
      6.68,
      8.9,
      11.13
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
      "name": "银行",
      "inflow": 4.55,
      "pct": 2.23
    },
    {
      "name": "券商",
      "inflow": 1.88,
      "pct": 0.64
    },
    {
      "name": "白酒",
      "inflow": 1.86,
      "pct": 0.91
    },
    {
      "name": "煤炭",
      "inflow": 1.49,
      "pct": 1.44
    },
    {
      "name": "医药",
      "inflow": 1.06,
      "pct": 0.26
    },
    {
      "name": "农业",
      "inflow": 0.2,
      "pct": 0.27
    },
    {
      "name": "食品",
      "inflow": 0.07,
      "pct": 1.17
    },
    {
      "name": "家电",
      "inflow": 0.07,
      "pct": 0.37
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.21
    },
    {
      "name": "计算机",
      "inflow": -0.06,
      "pct": -2.82
    },
    {
      "name": "钢铁",
      "inflow": -0.12,
      "pct": -0.77
    },
    {
      "name": "新能源车",
      "inflow": -0.28,
      "pct": -1.39
    },
    {
      "name": "新能源",
      "inflow": -0.37,
      "pct": -1.48
    },
    {
      "name": "光伏",
      "inflow": -0.63,
      "pct": -3.01
    },
    {
      "name": "地产",
      "inflow": -0.64,
      "pct": -1.44
    },
    {
      "name": "游戏",
      "inflow": -1.03,
      "pct": -2.95
    },
    {
      "name": "医疗",
      "inflow": -1.21,
      "pct": -0.59
    },
    {
      "name": "传媒",
      "inflow": -1.24,
      "pct": -1.96
    },
    {
      "name": "创新药",
      "inflow": -1.31,
      "pct": -1.73
    },
    {
      "name": "有色",
      "inflow": -1.43,
      "pct": -3.13
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.917,
      "changePct": 2.23,
      "change": 0.02,
      "turnover": 15.17
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.194,
      "changePct": 1.44,
      "change": 0.017,
      "turnover": 4.98
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.521,
      "changePct": 1.17,
      "change": 0.006,
      "turnover": 0.25
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.444,
      "changePct": 0.91,
      "change": 0.004,
      "turnover": 6.21
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.472,
      "changePct": 0.64,
      "change": 0.003,
      "turnover": 6.27
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.368,
      "changePct": 0.37,
      "change": 0.005,
      "turnover": 0.23
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.732,
      "changePct": 0.27,
      "change": 0.002,
      "turnover": 0.68
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.382,
      "changePct": 0.26,
      "change": 0.001,
      "turnover": 3.53
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.946,
      "changePct": 0.21,
      "change": 0.002,
      "turnover": 0.04
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.337,
      "changePct": -0.59,
      "change": -0.002,
      "turnover": 4.05
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.032,
      "changePct": -0.77,
      "change": -0.008,
      "turnover": 0.39
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.276,
      "changePct": -1.39,
      "change": -0.018,
      "turnover": 0.93
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.092,
      "changePct": -1.44,
      "change": -0.016,
      "turnover": 2.12
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.935,
      "changePct": -1.48,
      "change": -0.029,
      "turnover": 1.22
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.794,
      "changePct": -1.73,
      "change": -0.014,
      "turnover": 4.37
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.801,
      "changePct": -1.96,
      "change": -0.016,
      "turnover": 4.14
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.964,
      "changePct": -2.82,
      "change": -0.028,
      "turnover": 0.21
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.986,
      "changePct": -2.95,
      "change": -0.03,
      "turnover": 3.45
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.677,
      "changePct": -3.01,
      "change": -0.021,
      "turnover": 2.11
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.332,
      "changePct": -3.13,
      "change": -0.043,
      "turnover": 4.78
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.351,
      "changePct": -3.57,
      "change": -0.05,
      "turnover": 0.62
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.965,
      "changePct": -3.6,
      "change": -0.036,
      "turnover": 4.93
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.751,
      "changePct": -4.45,
      "change": -0.035,
      "turnover": 1.33
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.588,
      "changePct": -5.47,
      "change": -0.034,
      "turnover": 0.83
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.749,
      "changePct": -5.55,
      "change": -0.044,
      "turnover": 11.62
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.812,
      "changePct": -5.91,
      "change": -0.051,
      "turnover": 6.88
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.607,
      "changePct": -7.75,
      "change": -0.051,
      "turnover": 7.46
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.385,
      "changePct": -7.89,
      "change": -0.033,
      "turnover": 32.71
    }
  ],
  "etfFlow": [
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.472,
      "changePct": 0.64,
      "amount": 6.27,
      "netFlow": 1.57
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.382,
      "changePct": 0.26,
      "amount": 3.53,
      "netFlow": 0.88
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.935,
      "changePct": -1.48,
      "amount": 1.22,
      "netFlow": -0.31
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.939,
      "changePct": -0.76,
      "amount": 7.94,
      "netFlow": -1.98
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.749,
      "changePct": -5.55,
      "amount": 11.62,
      "netFlow": -2.9
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.233,
      "changePct": -0.77,
      "amount": 22.43,
      "netFlow": -5.61
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.885,
      "changePct": -0.14,
      "amount": 24.12,
      "netFlow": -6.03
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.334,
      "changePct": -2.48,
      "amount": 26.08,
      "netFlow": -6.52
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.054,
      "changePct": -0.71,
      "amount": 81.01,
      "netFlow": -20.25
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.282,
      "changePct": -5.32,
      "amount": 102.59,
      "netFlow": -25.65
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.054,
      "changePct": -0.71,
      "amount": 81.01,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.885,
      "changePct": -0.14,
      "amount": 24.12,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.334,
      "changePct": -2.48,
      "amount": 26.08,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.233,
      "changePct": -0.77,
      "amount": 22.43,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.939,
      "changePct": -0.76,
      "amount": 7.94,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 15.17,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "煤炭",
      "turnover": 4.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 6.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 6.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.93,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 2.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 4.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 4.14,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 3.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 2.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.78,
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
      "nav": 3.7654,
      "ret1w": -4.48,
      "ret1m": -5.3,
      "ret3m": -0.87,
      "ret6m": -16.04,
      "ret1y": -26.41,
      "ret2y": -2.17,
      "ret3y": 74.74
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.5977,
      "ret1w": -5.41,
      "ret1m": -4.66,
      "ret3m": -22.85,
      "ret6m": -39.26,
      "ret1y": -46.68,
      "ret2y": -31.72,
      "ret3y": -6.04
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.9717,
      "ret1w": -9.55,
      "ret1m": -5.73,
      "ret3m": -33.14,
      "ret6m": -46.8,
      "ret1y": -47.62,
      "ret2y": -4.64,
      "ret3y": 50.69
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7771,
      "ret1w": 1.16,
      "ret1m": 0.82,
      "ret3m": 10.06,
      "ret6m": 10.02,
      "ret1y": 7.65,
      "ret2y": -5.34,
      "ret3y": 5.89
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8989,
      "ret1w": -2.32,
      "ret1m": -7.76,
      "ret3m": -1.24,
      "ret6m": -15.73,
      "ret1y": -30.88,
      "ret2y": -39.16,
      "ret3y": -24.36
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5828,
      "ret1w": -1.65,
      "ret1m": -3.74,
      "ret3m": -0.61,
      "ret6m": -5.93,
      "ret1y": -22.09,
      "ret2y": -27.87,
      "ret3y": 6.53
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2611,
      "ret1w": -0.02,
      "ret1m": -2.6,
      "ret3m": 1.25,
      "ret6m": -4.27,
      "ret1y": -5.82,
      "ret2y": -2.59,
      "ret3y": 27.48
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.593,
      "ret1w": -3.04,
      "ret1m": -4.44,
      "ret3m": -8.29,
      "ret6m": -17.03,
      "ret1y": -24.5,
      "ret2y": -13.61,
      "ret3y": 20.86
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0732,
      "ret1w": -2.98,
      "ret1m": -4.58,
      "ret3m": -9.56,
      "ret6m": -22.05,
      "ret1y": -24.56,
      "ret2y": -14.83,
      "ret3y": 0.4
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.462,
      "ret1w": -3.38,
      "ret1m": -3.41,
      "ret3m": -11.57,
      "ret6m": -31.52,
      "ret1y": -26.0,
      "ret2y": 18.54,
      "ret3y": 93.25
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.172,
      "ret1w": 1.12,
      "ret1m": 0.51,
      "ret3m": 5.87,
      "ret6m": 2.72,
      "ret1y": 6.06,
      "ret2y": -9.71,
      "ret3y": -8.22
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.203,
      "ret1w": -0.99,
      "ret1m": -2.69,
      "ret3m": -2.05,
      "ret6m": -11.84,
      "ret1y": -14.91,
      "ret2y": -17.92,
      "ret3y": 2.7
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1563,
      "ret1w": -5.82,
      "ret1m": -3.86,
      "ret3m": -21.36,
      "ret6m": -36.51,
      "ret1y": -61.09,
      "ret2y": -58.57,
      "ret3y": -39.83
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9103,
      "ret1w": 0.34,
      "ret1m": -1.33,
      "ret3m": 2.86,
      "ret6m": -1.21,
      "ret1y": 7.22,
      "ret2y": -0.89,
      "ret3y": -3.17
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3668,
      "ret1w": -3.01,
      "ret1m": -3.32,
      "ret3m": -8.27,
      "ret6m": -18.51,
      "ret1y": -23.05,
      "ret2y": -13.4,
      "ret3y": 17.75
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.3045,
      "ret1w": -7.81,
      "ret1m": -7.98,
      "ret3m": -28.79,
      "ret6m": -47.43,
      "ret1y": -50.85,
      "ret2y": 1.02,
      "ret3y": 26.22
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5697,
      "ret1w": 0.13,
      "ret1m": -0.81,
      "ret3m": 0.45,
      "ret6m": 1.65,
      "ret1y": -4.08,
      "ret2y": -6.89,
      "ret3y": 3.05
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.895,
      "ret1w": -2.72,
      "ret1m": -5.39,
      "ret3m": -4.58,
      "ret6m": -18.56,
      "ret1y": -7.64,
      "ret2y": -17.74,
      "ret3y": -18.34
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4334,
      "ret1w": 1.42,
      "ret1m": 0.77,
      "ret3m": 4.01,
      "ret6m": 5.08,
      "ret1y": 2.11,
      "ret2y": 0.64,
      "ret3y": 11.04
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1657,
      "ret1w": -2.31,
      "ret1m": -2.77,
      "ret3m": -5.02,
      "ret6m": -11.98,
      "ret1y": -11.26,
      "ret2y": -1.76,
      "ret3y": 35.47
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9228,
      "ret1w": -3.04,
      "ret1m": -4.73,
      "ret3m": -13.3,
      "ret6m": -29.5,
      "ret1y": -32.84,
      "ret2y": -20.93,
      "ret3y": -1.22
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9824,
      "ret1w": -3.04,
      "ret1m": -4.72,
      "ret3m": -13.28,
      "ret6m": -29.43,
      "ret1y": -32.71,
      "ret2y": -20.63,
      "ret3y": -0.44
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0357,
      "ret1w": -0.42,
      "ret1m": -1.11,
      "ret3m": -2.04,
      "ret6m": -5.44,
      "ret1y": -5.48,
      "ret2y": -4.7,
      "ret3y": 1.7
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0113,
      "ret1w": -0.42,
      "ret1m": -1.1,
      "ret3m": -2.0,
      "ret6m": -5.3,
      "ret1y": -5.19,
      "ret2y": -4.13,
      "ret3y": 2.93
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7088,
      "ret1w": 0.06,
      "ret1m": -0.8,
      "ret3m": 1.99,
      "ret6m": -2.25,
      "ret1y": -9.65,
      "ret2y": -15.16,
      "ret3y": 0.45
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7274,
      "ret1w": 0.06,
      "ret1m": -0.79,
      "ret3m": 2.02,
      "ret6m": -2.13,
      "ret1y": -9.44,
      "ret2y": -14.74,
      "ret3y": 1.45
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8875,
      "ret1w": -3.82,
      "ret1m": -3.31,
      "ret3m": -20.66,
      "ret6m": -34.39,
      "ret1y": -31.76,
      "ret2y": 1.6,
      "ret3y": 64.82
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2627,
      "ret1w": -2.06,
      "ret1m": -4.47,
      "ret3m": -1.22,
      "ret6m": -12.1,
      "ret1y": -13.81,
      "ret2y": 5.54,
      "ret3y": 45.52
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7018,
      "ret1w": -1.4,
      "ret1m": -3.05,
      "ret3m": 3.08,
      "ret6m": -6.87,
      "ret1y": -20.58,
      "ret2y": -15.88,
      "ret3y": -2.19
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.8389,
      "ret1w": -2.89,
      "ret1m": -4.02,
      "ret3m": 1.77,
      "ret6m": -11.59,
      "ret1y": -9.3,
      "ret2y": 25.44,
      "ret3y": 86.37
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4487,
      "ret1w": -0.75,
      "ret1m": -1.25,
      "ret3m": -4.71,
      "ret6m": -14.14,
      "ret1y": -16.22,
      "ret2y": -2.6,
      "ret3y": 20.94
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4577,
      "ret1w": -0.76,
      "ret1m": -1.25,
      "ret3m": -4.67,
      "ret6m": -14.05,
      "ret1y": -16.05,
      "ret2y": -2.2,
      "ret3y": 21.92
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2614,
      "ret1w": 0.39,
      "ret1m": 0.28,
      "ret3m": -0.55,
      "ret6m": -0.78,
      "ret1y": -1.86,
      "ret2y": -2.13,
      "ret3y": 0.68
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0577,
      "ret1w": 0.27,
      "ret1m": -1.28,
      "ret3m": -3.68,
      "ret6m": -7.54,
      "ret1y": -4.51,
      "ret2y": -10.8,
      "ret3y": 0.42
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.168,
      "ret1w": 0.2,
      "ret1m": -0.2,
      "ret3m": -2.94,
      "ret6m": -20.04,
      "ret1y": -30.0,
      "ret2y": -22.76,
      "ret3y": -17.42
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.628,
      "ret1w": -2.41,
      "ret1m": -2.47,
      "ret3m": -8.77,
      "ret6m": -12.08,
      "ret1y": -17.45,
      "ret2y": -7.05,
      "ret3y": 20.91
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.061,
      "ret1w": -6.53,
      "ret1m": -2.46,
      "ret3m": -22.37,
      "ret6m": -40.07,
      "ret1y": -47.03,
      "ret2y": 0.88,
      "ret3y": 60.39
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.602,
      "ret1w": 1.73,
      "ret1m": 2.09,
      "ret3m": 4.23,
      "ret6m": 10.0,
      "ret1y": 8.56,
      "ret2y": 3.04,
      "ret3y": 5.37
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.507,
      "ret1w": -8.05,
      "ret1m": -11.83,
      "ret3m": -4.75,
      "ret6m": -24.01,
      "ret1y": -30.72,
      "ret2y": -9.99,
      "ret3y": -14.49
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.064,
      "ret1w": -8.61,
      "ret1m": -6.42,
      "ret3m": -29.54,
      "ret6m": -47.17,
      "ret1y": -33.13,
      "ret2y": 9.64,
      "ret3y": 91.95
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0434,
      "ret1w": -0.54,
      "ret1m": -0.75,
      "ret3m": -1.24,
      "ret6m": -2.28,
      "ret1y": -2.55,
      "ret2y": -1.64,
      "ret3y": 1.49
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.091,
      "ret1w": -0.56,
      "ret1m": -0.76,
      "ret3m": -1.26,
      "ret6m": -2.25,
      "ret1y": -2.47,
      "ret2y": -1.45,
      "ret3y": 2.11
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.066,
      "ret1w": -0.07,
      "ret1m": -0.18,
      "ret3m": -0.09,
      "ret6m": 0.18,
      "ret1y": 0.49,
      "ret2y": 1.39,
      "ret3y": 2.69
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1012,
      "ret1w": -0.04,
      "ret1m": -0.15,
      "ret3m": -0.02,
      "ret6m": 0.28,
      "ret1y": 0.61,
      "ret2y": 1.42,
      "ret3y": 3.7
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.111,
      "ret1w": -0.04,
      "ret1m": -0.14,
      "ret3m": -0.01,
      "ret6m": 0.33,
      "ret1y": 0.71,
      "ret2y": 1.62,
      "ret3y": 4.12
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0775,
      "ret1w": -0.03,
      "ret1m": -0.1,
      "ret3m": -0.02,
      "ret6m": 0.15,
      "ret1y": 0.53,
      "ret2y": 1.34,
      "ret3y": 2.79
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0926,
      "ret1w": -0.03,
      "ret1m": -0.1,
      "ret3m": 0.0,
      "ret6m": 0.22,
      "ret1y": 0.68,
      "ret2y": 1.66,
      "ret3y": 3.44
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9927,
      "ret1w": -0.91,
      "ret1m": -1.62,
      "ret3m": -3.19,
      "ret6m": -7.54,
      "ret1y": -9.09,
      "ret2y": -2.38,
      "ret3y": 3.61
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1434,
      "ret1w": -1.08,
      "ret1m": -1.52,
      "ret3m": -3.04,
      "ret6m": -6.85,
      "ret1y": -9.1,
      "ret2y": -5.05,
      "ret3y": -1.46
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9997,
      "ret1w": -0.91,
      "ret1m": -1.61,
      "ret3m": -3.16,
      "ret6m": -7.45,
      "ret1y": -8.92,
      "ret2y": -2.0,
      "ret3y": 4.44
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0438,
      "ret1w": -0.06,
      "ret1m": -0.19,
      "ret3m": -0.08,
      "ret6m": 0.25,
      "ret1y": 0.62,
      "ret2y": 1.53,
      "ret3y": 3.43
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0834,
      "ret1w": -0.96,
      "ret1m": -1.29,
      "ret3m": -4.14,
      "ret6m": -7.9,
      "ret1y": -10.39,
      "ret2y": -8.57,
      "ret3y": -1.71
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2021,
      "ret1w": 0.06,
      "ret1m": -0.28,
      "ret3m": 0.23,
      "ret6m": -1.29,
      "ret1y": -2.22,
      "ret2y": 0.51,
      "ret3y": 9.84
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.113,
      "ret1w": -0.37,
      "ret1m": -0.67,
      "ret3m": -0.83,
      "ret6m": -2.65,
      "ret1y": -3.14,
      "ret2y": 0.3,
      "ret3y": 6.4
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1838,
      "ret1w": -0.36,
      "ret1m": -0.65,
      "ret3m": -0.79,
      "ret6m": -2.55,
      "ret1y": -2.94,
      "ret2y": 0.71,
      "ret3y": 7.28
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.869,
      "ret1w": -2.81,
      "ret1m": 7.04,
      "ret3m": -19.82,
      "ret6m": -22.67,
      "ret1y": -24.45,
      "ret2y": 34.95,
      "ret3y": 84.5
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9118,
      "ret1w": -0.37,
      "ret1m": 2.25,
      "ret3m": -4.07,
      "ret6m": -2.98,
      "ret1y": -0.89,
      "ret2y": 2.31,
      "ret3y": 26.0
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6371,
      "ret1w": -0.37,
      "ret1m": -1.2,
      "ret3m": -7.31,
      "ret6m": -14.46,
      "ret1y": -25.78,
      "ret2y": -13.31,
      "ret3y": 18.13
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.144,
      "ret1w": -1.88,
      "ret1m": 0.8,
      "ret3m": -11.24,
      "ret6m": -11.2,
      "ret1y": -5.74,
      "ret2y": 8.77,
      "ret3y": 32.15
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.917,
      "ret1w": -0.09,
      "ret1m": -1.11,
      "ret3m": 0.21,
      "ret6m": -2.39,
      "ret1y": -2.98,
      "ret2y": -6.07,
      "ret3y": -3.31
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.2689,
      "ret1w": -1.29,
      "ret1m": 2.4,
      "ret3m": -13.46,
      "ret6m": -17.52,
      "ret1y": -19.12,
      "ret2y": 19.47,
      "ret3y": 53.99
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.413,
      "ret1w": -0.45,
      "ret1m": 2.39,
      "ret3m": -3.24,
      "ret6m": -5.2,
      "ret1y": -5.02,
      "ret2y": -0.29,
      "ret3y": 10.52
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.771,
      "ret1w": -2.41,
      "ret1m": 1.85,
      "ret3m": -11.48,
      "ret6m": -21.81,
      "ret1y": -26.36,
      "ret2y": -34.05,
      "ret3y": -19.27
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.3216,
      "ret1w": -0.98,
      "ret1m": 6.91,
      "ret3m": -16.68,
      "ret6m": -20.2,
      "ret1y": -23.68,
      "ret2y": 31.92,
      "ret3y": 102.64
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.49,
      "ret1w": -0.05,
      "ret1m": 1.02,
      "ret3m": -7.13,
      "ret6m": -3.11,
      "ret1y": -5.52,
      "ret2y": 16.88,
      "ret3y": 45.37
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5596,
      "ret1w": -0.42,
      "ret1m": 2.21,
      "ret3m": -8.0,
      "ret6m": -8.59,
      "ret1y": -7.53,
      "ret2y": 7.44,
      "ret3y": 40.54
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1825,
      "ret1w": -0.38,
      "ret1m": 3.03,
      "ret3m": -6.21,
      "ret6m": -10.35,
      "ret1y": -12.21,
      "ret2y": -1.95,
      "ret3y": 21.89
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.3,
      "ret1w": -0.08,
      "ret1m": 0.85,
      "ret3m": 5.18,
      "ret6m": -2.11,
      "ret1y": -1.22,
      "ret2y": 6.38,
      "ret3y": -6.58
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.849,
      "ret1w": 0.22,
      "ret1m": -4.2,
      "ret3m": -6.57,
      "ret6m": -11.4,
      "ret1y": -18.44,
      "ret2y": -12.41,
      "ret3y": 32.63
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.3355,
      "ret1w": -1.74,
      "ret1m": 3.2,
      "ret3m": -13.96,
      "ret6m": -17.76,
      "ret1y": -18.15,
      "ret2y": 13.45,
      "ret3y": 36.85
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0114,
      "ret1w": -0.11,
      "ret1m": -0.35,
      "ret3m": -0.07,
      "ret6m": 0.4,
      "ret1y": 0.97,
      "ret2y": 2.2,
      "ret3y": 3.57
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 0.9992,
      "ret1w": -0.1,
      "ret1m": -0.35,
      "ret3m": -0.05,
      "ret6m": 0.45,
      "ret1y": 0.99,
      "ret2y": 2.28,
      "ret3y": 3.75
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.185,
      "ret1w": -1.66,
      "ret1m": -2.55,
      "ret3m": -5.88,
      "ret6m": -19.44,
      "ret1y": -23.79,
      "ret2y": -17.07,
      "ret3y": -4.36
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.189,
      "ret1w": -2.58,
      "ret1m": -3.61,
      "ret3m": -10.51,
      "ret6m": -25.54,
      "ret1y": -28.42,
      "ret2y": -17.89,
      "ret3y": 2.0
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3867,
      "ret1w": -1.46,
      "ret1m": -5.31,
      "ret3m": -9.41,
      "ret6m": -17.24,
      "ret1y": -21.24,
      "ret2y": -9.64,
      "ret3y": 30.7
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8082,
      "ret1w": -1.29,
      "ret1m": -2.14,
      "ret3m": -6.91,
      "ret6m": -16.32,
      "ret1y": -17.22,
      "ret2y": -8.97,
      "ret3y": 5.93
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8615,
      "ret1w": -1.29,
      "ret1m": -2.13,
      "ret3m": -6.88,
      "ret6m": -16.24,
      "ret1y": -17.05,
      "ret2y": -8.6,
      "ret3y": 6.79
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6429,
      "ret1w": -2.48,
      "ret1m": -4.1,
      "ret3m": -6.64,
      "ret6m": -20.24,
      "ret1y": -24.75,
      "ret2y": -11.7,
      "ret3y": 7.52
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.57,
      "ret1w": -0.86,
      "ret1m": -1.78,
      "ret3m": -4.23,
      "ret6m": -13.7,
      "ret1y": -16.35,
      "ret2y": -11.96,
      "ret3y": 3.1
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4134,
      "ret1w": -1.56,
      "ret1m": -3.63,
      "ret3m": -3.62,
      "ret6m": -11.36,
      "ret1y": -15.2,
      "ret2y": -5.57,
      "ret3y": 18.33
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4447,
      "ret1w": -3.35,
      "ret1m": -4.07,
      "ret3m": -12.86,
      "ret6m": -30.0,
      "ret1y": -31.86,
      "ret2y": -18.82,
      "ret3y": 3.61
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9979,
      "ret1w": 0.09,
      "ret1m": -1.18,
      "ret3m": -1.62,
      "ret6m": -7.34,
      "ret1y": -8.17,
      "ret2y": -10.39,
      "ret3y": 5.22
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4988,
      "ret1w": 0.01,
      "ret1m": 0.56,
      "ret3m": 2.2,
      "ret6m": -1.35,
      "ret1y": 1.96,
      "ret2y": 7.07,
      "ret3y": 32.64
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.2537,
      "ret1w": -1.16,
      "ret1m": 3.31,
      "ret3m": -8.08,
      "ret6m": -7.39,
      "ret1y": -6.06,
      "ret2y": 4.99,
      "ret3y": 20.28
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1552,
      "ret1w": -1.9,
      "ret1m": -3.01,
      "ret3m": -10.62,
      "ret6m": -24.7,
      "ret1y": -28.61,
      "ret2y": -18.07,
      "ret3y": 1.06
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.975,
      "ret1w": -1.09,
      "ret1m": -1.33,
      "ret3m": -9.08,
      "ret6m": -19.23,
      "ret1y": -24.53,
      "ret2y": -12.16,
      "ret3y": 7.51
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9785,
      "ret1w": -1.09,
      "ret1m": -1.32,
      "ret3m": -8.94,
      "ret6m": -19.05,
      "ret1y": -24.38,
      "ret2y": -12.06,
      "ret3y": 7.27
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2152,
      "ret1w": -1.24,
      "ret1m": -0.97,
      "ret3m": -6.97,
      "ret6m": -14.52,
      "ret1y": -24.39,
      "ret2y": -13.96,
      "ret3y": 3.87
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.244,
      "ret1w": -1.24,
      "ret1m": -0.96,
      "ret3m": -6.93,
      "ret6m": -14.43,
      "ret1y": -24.23,
      "ret2y": -13.61,
      "ret3y": 4.7
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.6647,
      "ret1w": -2.05,
      "ret1m": -0.76,
      "ret3m": -10.37,
      "ret6m": -19.15,
      "ret1y": -28.68,
      "ret2y": -12.79,
      "ret3y": 12.43
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1494,
      "ret1w": -0.42,
      "ret1m": -1.02,
      "ret3m": -0.61,
      "ret6m": -1.53,
      "ret1y": -1.71,
      "ret2y": 0.02,
      "ret3y": 4.42
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1698,
      "ret1w": -0.42,
      "ret1m": -1.01,
      "ret3m": -0.59,
      "ret6m": -1.45,
      "ret1y": -1.55,
      "ret2y": 0.33,
      "ret3y": 5.07
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0866,
      "ret1w": -0.06,
      "ret1m": -0.18,
      "ret3m": -0.07,
      "ret6m": 0.25,
      "ret1y": 0.64,
      "ret2y": 1.68,
      "ret3y": 3.28
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4085,
      "ret1w": -0.1,
      "ret1m": -0.32,
      "ret3m": -0.2,
      "ret6m": -0.11,
      "ret1y": -0.01,
      "ret2y": 0.26,
      "ret3y": 4.71
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4619,
      "ret1w": -0.1,
      "ret1m": -0.31,
      "ret3m": -0.16,
      "ret6m": -0.01,
      "ret1y": 0.19,
      "ret2y": 0.67,
      "ret3y": 5.55
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7979,
      "ret1w": -2.89,
      "ret1m": -4.14,
      "ret3m": -7.51,
      "ret6m": -15.9,
      "ret1y": -7.8,
      "ret2y": 3.2,
      "ret3y": 26.68
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9548,
      "ret1w": -4.7,
      "ret1m": -6.81,
      "ret3m": -11.48,
      "ret6m": -23.19,
      "ret1y": -21.42,
      "ret2y": -17.73,
      "ret3y": 4.05
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 3.9474
      },
      {
        "date": "2026-10-30",
        "nav": 3.7558
      },
      {
        "date": "2026-11-02",
        "nav": 3.8166
      },
      {
        "date": "2026-11-03",
        "nav": 3.6243
      },
      {
        "date": "2026-11-04",
        "nav": 3.9317
      },
      {
        "date": "2026-11-05",
        "nav": 4.0435
      },
      {
        "date": "2026-11-06",
        "nav": 3.9103
      },
      {
        "date": "2026-11-09",
        "nav": 3.9763
      },
      {
        "date": "2026-11-10",
        "nav": 4.1531
      },
      {
        "date": "2026-11-11",
        "nav": 4.1941
      },
      {
        "date": "2026-11-12",
        "nav": 4.0547
      },
      {
        "date": "2026-11-13",
        "nav": 3.9422
      },
      {
        "date": "2026-11-16",
        "nav": 3.7654
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.9905
      },
      {
        "date": "2026-10-30",
        "nav": 2.8408
      },
      {
        "date": "2026-11-02",
        "nav": 2.8166
      },
      {
        "date": "2026-11-03",
        "nav": 2.6406
      },
      {
        "date": "2026-11-04",
        "nav": 2.8876
      },
      {
        "date": "2026-11-05",
        "nav": 2.8472
      },
      {
        "date": "2026-11-06",
        "nav": 2.7114
      },
      {
        "date": "2026-11-09",
        "nav": 2.7247
      },
      {
        "date": "2026-11-10",
        "nav": 2.7698
      },
      {
        "date": "2026-11-11",
        "nav": 2.9077
      },
      {
        "date": "2026-11-12",
        "nav": 2.8623
      },
      {
        "date": "2026-11-13",
        "nav": 2.7462
      },
      {
        "date": "2026-11-16",
        "nav": 2.5977
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 3.6434
      },
      {
        "date": "2026-10-30",
        "nav": 3.3446
      },
      {
        "date": "2026-11-02",
        "nav": 3.3194
      },
      {
        "date": "2026-11-03",
        "nav": 3.0113
      },
      {
        "date": "2026-11-04",
        "nav": 3.3183
      },
      {
        "date": "2026-11-05",
        "nav": 3.2882
      },
      {
        "date": "2026-11-06",
        "nav": 3.105
      },
      {
        "date": "2026-11-09",
        "nav": 3.1523
      },
      {
        "date": "2026-11-10",
        "nav": 3.2385
      },
      {
        "date": "2026-11-11",
        "nav": 3.6009
      },
      {
        "date": "2026-11-12",
        "nav": 3.55
      },
      {
        "date": "2026-11-13",
        "nav": 3.2856
      },
      {
        "date": "2026-11-16",
        "nav": 2.9717
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.7189
      },
      {
        "date": "2026-10-30",
        "nav": 0.7327
      },
      {
        "date": "2026-11-02",
        "nav": 0.7557
      },
      {
        "date": "2026-11-03",
        "nav": 0.7703
      },
      {
        "date": "2026-11-04",
        "nav": 0.7603
      },
      {
        "date": "2026-11-05",
        "nav": 0.7718
      },
      {
        "date": "2026-11-06",
        "nav": 0.7752
      },
      {
        "date": "2026-11-09",
        "nav": 0.7708
      },
      {
        "date": "2026-11-10",
        "nav": 0.7694
      },
      {
        "date": "2026-11-11",
        "nav": 0.7554
      },
      {
        "date": "2026-11-12",
        "nav": 0.7561
      },
      {
        "date": "2026-11-13",
        "nav": 0.7682
      },
      {
        "date": "2026-11-16",
        "nav": 0.7771
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.9417
      },
      {
        "date": "2026-10-30",
        "nav": 1.9061
      },
      {
        "date": "2026-11-02",
        "nav": 1.9419
      },
      {
        "date": "2026-11-03",
        "nav": 1.9796
      },
      {
        "date": "2026-11-04",
        "nav": 2.0372
      },
      {
        "date": "2026-11-05",
        "nav": 2.139
      },
      {
        "date": "2026-11-06",
        "nav": 2.1093
      },
      {
        "date": "2026-11-09",
        "nav": 2.0587
      },
      {
        "date": "2026-11-10",
        "nav": 2.0589
      },
      {
        "date": "2026-11-11",
        "nav": 2.0244
      },
      {
        "date": "2026-11-12",
        "nav": 1.9904
      },
      {
        "date": "2026-11-13",
        "nav": 1.9441
      },
      {
        "date": "2026-11-16",
        "nav": 1.8989
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.5609
      },
      {
        "date": "2026-10-30",
        "nav": 2.5279
      },
      {
        "date": "2026-11-02",
        "nav": 2.5645
      },
      {
        "date": "2026-11-03",
        "nav": 2.6034
      },
      {
        "date": "2026-11-04",
        "nav": 2.6659
      },
      {
        "date": "2026-11-05",
        "nav": 2.7511
      },
      {
        "date": "2026-11-06",
        "nav": 2.7049
      },
      {
        "date": "2026-11-09",
        "nav": 2.6832
      },
      {
        "date": "2026-11-10",
        "nav": 2.711
      },
      {
        "date": "2026-11-11",
        "nav": 2.7006
      },
      {
        "date": "2026-11-12",
        "nav": 2.6597
      },
      {
        "date": "2026-11-13",
        "nav": 2.6262
      },
      {
        "date": "2026-11-16",
        "nav": 2.5828
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 5.2332
      },
      {
        "date": "2026-10-30",
        "nav": 5.2625
      },
      {
        "date": "2026-11-02",
        "nav": 5.3145
      },
      {
        "date": "2026-11-03",
        "nav": 5.3814
      },
      {
        "date": "2026-11-04",
        "nav": 5.4869
      },
      {
        "date": "2026-11-05",
        "nav": 5.5333
      },
      {
        "date": "2026-11-06",
        "nav": 5.4671
      },
      {
        "date": "2026-11-09",
        "nav": 5.4013
      },
      {
        "date": "2026-11-10",
        "nav": 5.399
      },
      {
        "date": "2026-11-11",
        "nav": 5.3769
      },
      {
        "date": "2026-11-12",
        "nav": 5.2924
      },
      {
        "date": "2026-11-13",
        "nav": 5.2623
      },
      {
        "date": "2026-11-16",
        "nav": 5.2611
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.645
      },
      {
        "date": "2026-10-30",
        "nav": 1.602
      },
      {
        "date": "2026-11-02",
        "nav": 1.634
      },
      {
        "date": "2026-11-03",
        "nav": 1.604
      },
      {
        "date": "2026-11-04",
        "nav": 1.68
      },
      {
        "date": "2026-11-05",
        "nav": 1.715
      },
      {
        "date": "2026-11-06",
        "nav": 1.671
      },
      {
        "date": "2026-11-09",
        "nav": 1.667
      },
      {
        "date": "2026-11-10",
        "nav": 1.688
      },
      {
        "date": "2026-11-11",
        "nav": 1.712
      },
      {
        "date": "2026-11-12",
        "nav": 1.685
      },
      {
        "date": "2026-11-13",
        "nav": 1.643
      },
      {
        "date": "2026-11-16",
        "nav": 1.593
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.1252
      },
      {
        "date": "2026-10-30",
        "nav": 1.0948
      },
      {
        "date": "2026-11-02",
        "nav": 1.1145
      },
      {
        "date": "2026-11-03",
        "nav": 1.0973
      },
      {
        "date": "2026-11-04",
        "nav": 1.1503
      },
      {
        "date": "2026-11-05",
        "nav": 1.1628
      },
      {
        "date": "2026-11-06",
        "nav": 1.1281
      },
      {
        "date": "2026-11-09",
        "nav": 1.1247
      },
      {
        "date": "2026-11-10",
        "nav": 1.1314
      },
      {
        "date": "2026-11-11",
        "nav": 1.1528
      },
      {
        "date": "2026-11-12",
        "nav": 1.1367
      },
      {
        "date": "2026-11-13",
        "nav": 1.1062
      },
      {
        "date": "2026-11-16",
        "nav": 1.0732
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.595
      },
      {
        "date": "2026-10-30",
        "nav": 2.514
      },
      {
        "date": "2026-11-02",
        "nav": 2.547
      },
      {
        "date": "2026-11-03",
        "nav": 2.45
      },
      {
        "date": "2026-11-04",
        "nav": 2.599
      },
      {
        "date": "2026-11-05",
        "nav": 2.631
      },
      {
        "date": "2026-11-06",
        "nav": 2.557
      },
      {
        "date": "2026-11-09",
        "nav": 2.549
      },
      {
        "date": "2026-11-10",
        "nav": 2.579
      },
      {
        "date": "2026-11-11",
        "nav": 2.648
      },
      {
        "date": "2026-11-12",
        "nav": 2.622
      },
      {
        "date": "2026-11-13",
        "nav": 2.548
      },
      {
        "date": "2026-11-16",
        "nav": 2.462
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.091
      },
      {
        "date": "2026-10-30",
        "nav": 1.125
      },
      {
        "date": "2026-11-02",
        "nav": 1.162
      },
      {
        "date": "2026-11-03",
        "nav": 1.168
      },
      {
        "date": "2026-11-04",
        "nav": 1.167
      },
      {
        "date": "2026-11-05",
        "nav": 1.187
      },
      {
        "date": "2026-11-06",
        "nav": 1.175
      },
      {
        "date": "2026-11-09",
        "nav": 1.166
      },
      {
        "date": "2026-11-10",
        "nav": 1.165
      },
      {
        "date": "2026-11-11",
        "nav": 1.145
      },
      {
        "date": "2026-11-12",
        "nav": 1.146
      },
      {
        "date": "2026-11-13",
        "nav": 1.159
      },
      {
        "date": "2026-11-16",
        "nav": 1.172
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.218
      },
      {
        "date": "2026-10-30",
        "nav": 2.211
      },
      {
        "date": "2026-11-02",
        "nav": 2.245
      },
      {
        "date": "2026-11-03",
        "nav": 2.213
      },
      {
        "date": "2026-11-04",
        "nav": 2.259
      },
      {
        "date": "2026-11-05",
        "nav": 2.325
      },
      {
        "date": "2026-11-06",
        "nav": 2.284
      },
      {
        "date": "2026-11-09",
        "nav": 2.264
      },
      {
        "date": "2026-11-10",
        "nav": 2.289
      },
      {
        "date": "2026-11-11",
        "nav": 2.298
      },
      {
        "date": "2026-11-12",
        "nav": 2.274
      },
      {
        "date": "2026-11-13",
        "nav": 2.225
      },
      {
        "date": "2026-11-16",
        "nav": 2.203
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.1555
      },
      {
        "date": "2026-10-30",
        "nav": 1.0804
      },
      {
        "date": "2026-11-02",
        "nav": 1.1177
      },
      {
        "date": "2026-11-03",
        "nav": 1.0445
      },
      {
        "date": "2026-11-04",
        "nav": 1.2027
      },
      {
        "date": "2026-11-05",
        "nav": 1.2377
      },
      {
        "date": "2026-11-06",
        "nav": 1.2109
      },
      {
        "date": "2026-11-09",
        "nav": 1.2027
      },
      {
        "date": "2026-11-10",
        "nav": 1.2195
      },
      {
        "date": "2026-11-11",
        "nav": 1.2662
      },
      {
        "date": "2026-11-12",
        "nav": 1.266
      },
      {
        "date": "2026-11-13",
        "nav": 1.2278
      },
      {
        "date": "2026-11-16",
        "nav": 1.1563
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.8607
      },
      {
        "date": "2026-10-30",
        "nav": 1.8901
      },
      {
        "date": "2026-11-02",
        "nav": 1.9265
      },
      {
        "date": "2026-11-03",
        "nav": 1.9547
      },
      {
        "date": "2026-11-04",
        "nav": 1.9381
      },
      {
        "date": "2026-11-05",
        "nav": 1.9582
      },
      {
        "date": "2026-11-06",
        "nav": 1.9555
      },
      {
        "date": "2026-11-09",
        "nav": 1.936
      },
      {
        "date": "2026-11-10",
        "nav": 1.9277
      },
      {
        "date": "2026-11-11",
        "nav": 1.9086
      },
      {
        "date": "2026-11-12",
        "nav": 1.8971
      },
      {
        "date": "2026-11-13",
        "nav": 1.9039
      },
      {
        "date": "2026-11-16",
        "nav": 1.9103
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.4117
      },
      {
        "date": "2026-10-30",
        "nav": 1.3707
      },
      {
        "date": "2026-11-02",
        "nav": 1.3955
      },
      {
        "date": "2026-11-03",
        "nav": 1.3617
      },
      {
        "date": "2026-11-04",
        "nav": 1.4218
      },
      {
        "date": "2026-11-05",
        "nav": 1.4458
      },
      {
        "date": "2026-11-06",
        "nav": 1.4145
      },
      {
        "date": "2026-11-09",
        "nav": 1.4138
      },
      {
        "date": "2026-11-10",
        "nav": 1.4272
      },
      {
        "date": "2026-11-11",
        "nav": 1.4592
      },
      {
        "date": "2026-11-12",
        "nav": 1.448
      },
      {
        "date": "2026-11-13",
        "nav": 1.4092
      },
      {
        "date": "2026-11-16",
        "nav": 1.3668
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.5576
      },
      {
        "date": "2026-10-30",
        "nav": 1.4568
      },
      {
        "date": "2026-11-02",
        "nav": 1.4801
      },
      {
        "date": "2026-11-03",
        "nav": 1.3603
      },
      {
        "date": "2026-11-04",
        "nav": 1.5015
      },
      {
        "date": "2026-11-05",
        "nav": 1.4869
      },
      {
        "date": "2026-11-06",
        "nav": 1.4038
      },
      {
        "date": "2026-11-09",
        "nav": 1.4177
      },
      {
        "date": "2026-11-10",
        "nav": 1.4563
      },
      {
        "date": "2026-11-11",
        "nav": 1.5467
      },
      {
        "date": "2026-11-12",
        "nav": 1.5186
      },
      {
        "date": "2026-11-13",
        "nav": 1.415
      },
      {
        "date": "2026-11-16",
        "nav": 1.3045
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.5553
      },
      {
        "date": "2026-10-30",
        "nav": 2.5494
      },
      {
        "date": "2026-11-02",
        "nav": 2.5539
      },
      {
        "date": "2026-11-03",
        "nav": 2.5596
      },
      {
        "date": "2026-11-04",
        "nav": 2.5917
      },
      {
        "date": "2026-11-05",
        "nav": 2.6223
      },
      {
        "date": "2026-11-06",
        "nav": 2.5959
      },
      {
        "date": "2026-11-09",
        "nav": 2.5908
      },
      {
        "date": "2026-11-10",
        "nav": 2.6046
      },
      {
        "date": "2026-11-11",
        "nav": 2.6006
      },
      {
        "date": "2026-11-12",
        "nav": 2.574
      },
      {
        "date": "2026-11-13",
        "nav": 2.5663
      },
      {
        "date": "2026-11-16",
        "nav": 2.5697
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.898
      },
      {
        "date": "2026-10-30",
        "nav": 0.89
      },
      {
        "date": "2026-11-02",
        "nav": 0.901
      },
      {
        "date": "2026-11-03",
        "nav": 0.872
      },
      {
        "date": "2026-11-04",
        "nav": 0.94
      },
      {
        "date": "2026-11-05",
        "nav": 0.971
      },
      {
        "date": "2026-11-06",
        "nav": 0.947
      },
      {
        "date": "2026-11-09",
        "nav": 0.946
      },
      {
        "date": "2026-11-10",
        "nav": 0.949
      },
      {
        "date": "2026-11-11",
        "nav": 0.944
      },
      {
        "date": "2026-11-12",
        "nav": 0.945
      },
      {
        "date": "2026-11-13",
        "nav": 0.92
      },
      {
        "date": "2026-11-16",
        "nav": 0.895
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.3445
      },
      {
        "date": "2026-10-30",
        "nav": 2.3901
      },
      {
        "date": "2026-11-02",
        "nav": 2.4038
      },
      {
        "date": "2026-11-03",
        "nav": 2.433
      },
      {
        "date": "2026-11-04",
        "nav": 2.4118
      },
      {
        "date": "2026-11-05",
        "nav": 2.4182
      },
      {
        "date": "2026-11-06",
        "nav": 2.4227
      },
      {
        "date": "2026-11-09",
        "nav": 2.4148
      },
      {
        "date": "2026-11-10",
        "nav": 2.4033
      },
      {
        "date": "2026-11-11",
        "nav": 2.377
      },
      {
        "date": "2026-11-12",
        "nav": 2.3746
      },
      {
        "date": "2026-11-13",
        "nav": 2.3994
      },
      {
        "date": "2026-11-16",
        "nav": 2.4334
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.1832
      },
      {
        "date": "2026-10-30",
        "nav": 1.1527
      },
      {
        "date": "2026-11-02",
        "nav": 1.1686
      },
      {
        "date": "2026-11-03",
        "nav": 1.1499
      },
      {
        "date": "2026-11-04",
        "nav": 1.1935
      },
      {
        "date": "2026-11-05",
        "nav": 1.2116
      },
      {
        "date": "2026-11-06",
        "nav": 1.1936
      },
      {
        "date": "2026-11-09",
        "nav": 1.1989
      },
      {
        "date": "2026-11-10",
        "nav": 1.2123
      },
      {
        "date": "2026-11-11",
        "nav": 1.2288
      },
      {
        "date": "2026-11-12",
        "nav": 1.2135
      },
      {
        "date": "2026-11-13",
        "nav": 1.1933
      },
      {
        "date": "2026-11-16",
        "nav": 1.1657
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.9821
      },
      {
        "date": "2026-10-30",
        "nav": 0.9497
      },
      {
        "date": "2026-11-02",
        "nav": 0.9616
      },
      {
        "date": "2026-11-03",
        "nav": 0.9334
      },
      {
        "date": "2026-11-04",
        "nav": 0.995
      },
      {
        "date": "2026-11-05",
        "nav": 0.9969
      },
      {
        "date": "2026-11-06",
        "nav": 0.965
      },
      {
        "date": "2026-11-09",
        "nav": 0.9686
      },
      {
        "date": "2026-11-10",
        "nav": 0.9751
      },
      {
        "date": "2026-11-11",
        "nav": 0.9964
      },
      {
        "date": "2026-11-12",
        "nav": 0.9867
      },
      {
        "date": "2026-11-13",
        "nav": 0.9517
      },
      {
        "date": "2026-11-16",
        "nav": 0.9228
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.0454
      },
      {
        "date": "2026-10-30",
        "nav": 1.0109
      },
      {
        "date": "2026-11-02",
        "nav": 1.0236
      },
      {
        "date": "2026-11-03",
        "nav": 0.9936
      },
      {
        "date": "2026-11-04",
        "nav": 1.0592
      },
      {
        "date": "2026-11-05",
        "nav": 1.0612
      },
      {
        "date": "2026-11-06",
        "nav": 1.0272
      },
      {
        "date": "2026-11-09",
        "nav": 1.0311
      },
      {
        "date": "2026-11-10",
        "nav": 1.038
      },
      {
        "date": "2026-11-11",
        "nav": 1.0608
      },
      {
        "date": "2026-11-12",
        "nav": 1.0504
      },
      {
        "date": "2026-11-13",
        "nav": 1.0132
      },
      {
        "date": "2026-11-16",
        "nav": 0.9824
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.0516
      },
      {
        "date": "2026-10-30",
        "nav": 1.0469
      },
      {
        "date": "2026-11-02",
        "nav": 1.0458
      },
      {
        "date": "2026-11-03",
        "nav": 1.0451
      },
      {
        "date": "2026-11-04",
        "nav": 1.0498
      },
      {
        "date": "2026-11-05",
        "nav": 1.0533
      },
      {
        "date": "2026-11-06",
        "nav": 1.05
      },
      {
        "date": "2026-11-09",
        "nav": 1.0473
      },
      {
        "date": "2026-11-10",
        "nav": 1.0476
      },
      {
        "date": "2026-11-11",
        "nav": 1.0442
      },
      {
        "date": "2026-11-12",
        "nav": 1.0416
      },
      {
        "date": "2026-11-13",
        "nav": 1.0401
      },
      {
        "date": "2026-11-16",
        "nav": 1.0357
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.0266
      },
      {
        "date": "2026-10-30",
        "nav": 1.022
      },
      {
        "date": "2026-11-02",
        "nav": 1.0209
      },
      {
        "date": "2026-11-03",
        "nav": 1.0203
      },
      {
        "date": "2026-11-04",
        "nav": 1.0249
      },
      {
        "date": "2026-11-05",
        "nav": 1.0283
      },
      {
        "date": "2026-11-06",
        "nav": 1.0252
      },
      {
        "date": "2026-11-09",
        "nav": 1.0225
      },
      {
        "date": "2026-11-10",
        "nav": 1.0228
      },
      {
        "date": "2026-11-11",
        "nav": 1.0196
      },
      {
        "date": "2026-11-12",
        "nav": 1.017
      },
      {
        "date": "2026-11-13",
        "nav": 1.0156
      },
      {
        "date": "2026-11-16",
        "nav": 1.0113
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.6841
      },
      {
        "date": "2026-10-30",
        "nav": 0.6862
      },
      {
        "date": "2026-11-02",
        "nav": 0.697
      },
      {
        "date": "2026-11-03",
        "nav": 0.7032
      },
      {
        "date": "2026-11-04",
        "nav": 0.7109
      },
      {
        "date": "2026-11-05",
        "nav": 0.7248
      },
      {
        "date": "2026-11-06",
        "nav": 0.7201
      },
      {
        "date": "2026-11-09",
        "nav": 0.7145
      },
      {
        "date": "2026-11-10",
        "nav": 0.7145
      },
      {
        "date": "2026-11-11",
        "nav": 0.7111
      },
      {
        "date": "2026-11-12",
        "nav": 0.706
      },
      {
        "date": "2026-11-13",
        "nav": 0.7084
      },
      {
        "date": "2026-11-16",
        "nav": 0.7088
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.702
      },
      {
        "date": "2026-10-30",
        "nav": 0.7041
      },
      {
        "date": "2026-11-02",
        "nav": 0.7153
      },
      {
        "date": "2026-11-03",
        "nav": 0.7216
      },
      {
        "date": "2026-11-04",
        "nav": 0.7296
      },
      {
        "date": "2026-11-05",
        "nav": 0.7437
      },
      {
        "date": "2026-11-06",
        "nav": 0.739
      },
      {
        "date": "2026-11-09",
        "nav": 0.7332
      },
      {
        "date": "2026-11-10",
        "nav": 0.7333
      },
      {
        "date": "2026-11-11",
        "nav": 0.7298
      },
      {
        "date": "2026-11-12",
        "nav": 0.7245
      },
      {
        "date": "2026-11-13",
        "nav": 0.727
      },
      {
        "date": "2026-11-16",
        "nav": 0.7274
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.1421
      },
      {
        "date": "2026-10-30",
        "nav": 2.0578
      },
      {
        "date": "2026-11-02",
        "nav": 2.046
      },
      {
        "date": "2026-11-03",
        "nav": 1.9445
      },
      {
        "date": "2026-11-04",
        "nav": 2.0591
      },
      {
        "date": "2026-11-05",
        "nav": 2.0271
      },
      {
        "date": "2026-11-06",
        "nav": 1.9338
      },
      {
        "date": "2026-11-09",
        "nav": 1.9521
      },
      {
        "date": "2026-11-10",
        "nav": 1.9691
      },
      {
        "date": "2026-11-11",
        "nav": 2.0428
      },
      {
        "date": "2026-11-12",
        "nav": 2.0235
      },
      {
        "date": "2026-11-13",
        "nav": 1.9624
      },
      {
        "date": "2026-11-16",
        "nav": 1.8875
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.2347
      },
      {
        "date": "2026-10-30",
        "nav": 2.1868
      },
      {
        "date": "2026-11-02",
        "nav": 2.227
      },
      {
        "date": "2026-11-03",
        "nav": 2.2185
      },
      {
        "date": "2026-11-04",
        "nav": 2.3344
      },
      {
        "date": "2026-11-05",
        "nav": 2.4164
      },
      {
        "date": "2026-11-06",
        "nav": 2.3767
      },
      {
        "date": "2026-11-09",
        "nav": 2.3685
      },
      {
        "date": "2026-11-10",
        "nav": 2.4122
      },
      {
        "date": "2026-11-11",
        "nav": 2.3956
      },
      {
        "date": "2026-11-12",
        "nav": 2.3501
      },
      {
        "date": "2026-11-13",
        "nav": 2.3103
      },
      {
        "date": "2026-11-16",
        "nav": 2.2627
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.6711
      },
      {
        "date": "2026-10-30",
        "nav": 0.6601
      },
      {
        "date": "2026-11-02",
        "nav": 0.6801
      },
      {
        "date": "2026-11-03",
        "nav": 0.6818
      },
      {
        "date": "2026-11-04",
        "nav": 0.7149
      },
      {
        "date": "2026-11-05",
        "nav": 0.7389
      },
      {
        "date": "2026-11-06",
        "nav": 0.7255
      },
      {
        "date": "2026-11-09",
        "nav": 0.7239
      },
      {
        "date": "2026-11-10",
        "nav": 0.7391
      },
      {
        "date": "2026-11-11",
        "nav": 0.7412
      },
      {
        "date": "2026-11-12",
        "nav": 0.7225
      },
      {
        "date": "2026-11-13",
        "nav": 0.7118
      },
      {
        "date": "2026-11-16",
        "nav": 0.7018
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 3.7994
      },
      {
        "date": "2026-10-30",
        "nav": 3.6679
      },
      {
        "date": "2026-11-02",
        "nav": 3.7418
      },
      {
        "date": "2026-11-03",
        "nav": 3.709
      },
      {
        "date": "2026-11-04",
        "nav": 3.9825
      },
      {
        "date": "2026-11-05",
        "nav": 4.0838
      },
      {
        "date": "2026-11-06",
        "nav": 3.994
      },
      {
        "date": "2026-11-09",
        "nav": 3.9995
      },
      {
        "date": "2026-11-10",
        "nav": 4.1157
      },
      {
        "date": "2026-11-11",
        "nav": 4.1316
      },
      {
        "date": "2026-11-12",
        "nav": 4.0131
      },
      {
        "date": "2026-11-13",
        "nav": 3.9531
      },
      {
        "date": "2026-11-16",
        "nav": 3.8389
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.4671
      },
      {
        "date": "2026-10-30",
        "nav": 0.4647
      },
      {
        "date": "2026-11-02",
        "nav": 0.4624
      },
      {
        "date": "2026-11-03",
        "nav": 0.4629
      },
      {
        "date": "2026-11-04",
        "nav": 0.4613
      },
      {
        "date": "2026-11-05",
        "nav": 0.4616
      },
      {
        "date": "2026-11-06",
        "nav": 0.4562
      },
      {
        "date": "2026-11-09",
        "nav": 0.4544
      },
      {
        "date": "2026-11-10",
        "nav": 0.4533
      },
      {
        "date": "2026-11-11",
        "nav": 0.4534
      },
      {
        "date": "2026-11-12",
        "nav": 0.4538
      },
      {
        "date": "2026-11-13",
        "nav": 0.4521
      },
      {
        "date": "2026-11-16",
        "nav": 0.4487
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.4763
      },
      {
        "date": "2026-10-30",
        "nav": 0.4739
      },
      {
        "date": "2026-11-02",
        "nav": 0.4716
      },
      {
        "date": "2026-11-03",
        "nav": 0.4721
      },
      {
        "date": "2026-11-04",
        "nav": 0.4705
      },
      {
        "date": "2026-11-05",
        "nav": 0.4708
      },
      {
        "date": "2026-11-06",
        "nav": 0.4653
      },
      {
        "date": "2026-11-09",
        "nav": 0.4635
      },
      {
        "date": "2026-11-10",
        "nav": 0.4623
      },
      {
        "date": "2026-11-11",
        "nav": 0.4624
      },
      {
        "date": "2026-11-12",
        "nav": 0.4628
      },
      {
        "date": "2026-11-13",
        "nav": 0.4612
      },
      {
        "date": "2026-11-16",
        "nav": 0.4577
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.2587
      },
      {
        "date": "2026-10-30",
        "nav": 1.261
      },
      {
        "date": "2026-11-02",
        "nav": 1.2581
      },
      {
        "date": "2026-11-03",
        "nav": 1.2571
      },
      {
        "date": "2026-11-04",
        "nav": 1.2588
      },
      {
        "date": "2026-11-05",
        "nav": 1.2571
      },
      {
        "date": "2026-11-06",
        "nav": 1.2567
      },
      {
        "date": "2026-11-09",
        "nav": 1.2579
      },
      {
        "date": "2026-11-10",
        "nav": 1.2567
      },
      {
        "date": "2026-11-11",
        "nav": 1.2546
      },
      {
        "date": "2026-11-12",
        "nav": 1.2529
      },
      {
        "date": "2026-11-13",
        "nav": 1.2565
      },
      {
        "date": "2026-11-16",
        "nav": 1.2614
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.064
      },
      {
        "date": "2026-10-30",
        "nav": 1.0606
      },
      {
        "date": "2026-11-02",
        "nav": 1.0666
      },
      {
        "date": "2026-11-03",
        "nav": 1.0781
      },
      {
        "date": "2026-11-04",
        "nav": 1.0804
      },
      {
        "date": "2026-11-05",
        "nav": 1.085
      },
      {
        "date": "2026-11-06",
        "nav": 1.0772
      },
      {
        "date": "2026-11-09",
        "nav": 1.0714
      },
      {
        "date": "2026-11-10",
        "nav": 1.067
      },
      {
        "date": "2026-11-11",
        "nav": 1.0613
      },
      {
        "date": "2026-11-12",
        "nav": 1.0575
      },
      {
        "date": "2026-11-13",
        "nav": 1.0549
      },
      {
        "date": "2026-11-16",
        "nav": 1.0577
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.1522
      },
      {
        "date": "2026-10-30",
        "nav": 1.1471
      },
      {
        "date": "2026-11-02",
        "nav": 1.1568
      },
      {
        "date": "2026-11-03",
        "nav": 1.1519
      },
      {
        "date": "2026-11-04",
        "nav": 1.1672
      },
      {
        "date": "2026-11-05",
        "nav": 1.1734
      },
      {
        "date": "2026-11-06",
        "nav": 1.1638
      },
      {
        "date": "2026-11-09",
        "nav": 1.1703
      },
      {
        "date": "2026-11-10",
        "nav": 1.1659
      },
      {
        "date": "2026-11-11",
        "nav": 1.1643
      },
      {
        "date": "2026-11-12",
        "nav": 1.1668
      },
      {
        "date": "2026-11-13",
        "nav": 1.1657
      },
      {
        "date": "2026-11-16",
        "nav": 1.168
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.8159
      },
      {
        "date": "2026-10-30",
        "nav": 2.7733
      },
      {
        "date": "2026-11-02",
        "nav": 2.7883
      },
      {
        "date": "2026-11-03",
        "nav": 2.7382
      },
      {
        "date": "2026-11-04",
        "nav": 2.7884
      },
      {
        "date": "2026-11-05",
        "nav": 2.7493
      },
      {
        "date": "2026-11-06",
        "nav": 2.6925
      },
      {
        "date": "2026-11-09",
        "nav": 2.6945
      },
      {
        "date": "2026-11-10",
        "nav": 2.7026
      },
      {
        "date": "2026-11-11",
        "nav": 2.7754
      },
      {
        "date": "2026-11-12",
        "nav": 2.7489
      },
      {
        "date": "2026-11-13",
        "nav": 2.6928
      },
      {
        "date": "2026-11-16",
        "nav": 2.628
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 2.306
      },
      {
        "date": "2026-10-30",
        "nav": 2.182
      },
      {
        "date": "2026-11-02",
        "nav": 2.191
      },
      {
        "date": "2026-11-03",
        "nav": 2.046
      },
      {
        "date": "2026-11-04",
        "nav": 2.205
      },
      {
        "date": "2026-11-05",
        "nav": 2.179
      },
      {
        "date": "2026-11-06",
        "nav": 2.084
      },
      {
        "date": "2026-11-09",
        "nav": 2.113
      },
      {
        "date": "2026-11-10",
        "nav": 2.149
      },
      {
        "date": "2026-11-11",
        "nav": 2.306
      },
      {
        "date": "2026-11-12",
        "nav": 2.31
      },
      {
        "date": "2026-11-13",
        "nav": 2.205
      },
      {
        "date": "2026-11-16",
        "nav": 2.061
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 1.5633
      },
      {
        "date": "2026-10-30",
        "nav": 1.5704
      },
      {
        "date": "2026-11-02",
        "nav": 1.5618
      },
      {
        "date": "2026-11-03",
        "nav": 1.5635
      },
      {
        "date": "2026-11-04",
        "nav": 1.5582
      },
      {
        "date": "2026-11-05",
        "nav": 1.5467
      },
      {
        "date": "2026-11-06",
        "nav": 1.564
      },
      {
        "date": "2026-11-09",
        "nav": 1.5692
      },
      {
        "date": "2026-11-10",
        "nav": 1.5695
      },
      {
        "date": "2026-11-11",
        "nav": 1.5605
      },
      {
        "date": "2026-11-12",
        "nav": 1.5589
      },
      {
        "date": "2026-11-13",
        "nav": 1.5747
      },
      {
        "date": "2026-11-16",
        "nav": 1.602
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 0.5577
      },
      {
        "date": "2026-10-30",
        "nav": 0.545
      },
      {
        "date": "2026-11-02",
        "nav": 0.5509
      },
      {
        "date": "2026-11-03",
        "nav": 0.5313
      },
      {
        "date": "2026-11-04",
        "nav": 0.5613
      },
      {
        "date": "2026-11-05",
        "nav": 0.5694
      },
      {
        "date": "2026-11-06",
        "nav": 0.5544
      },
      {
        "date": "2026-11-09",
        "nav": 0.575
      },
      {
        "date": "2026-11-10",
        "nav": 0.5911
      },
      {
        "date": "2026-11-11",
        "nav": 0.591
      },
      {
        "date": "2026-11-12",
        "nav": 0.5708
      },
      {
        "date": "2026-11-13",
        "nav": 0.5514
      },
      {
        "date": "2026-11-16",
        "nav": 0.507
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-10-29",
        "nav": 9.645
      },
      {
        "date": "2026-10-30",
        "nav": 9.07
      },
      {
        "date": "2026-11-02",
        "nav": 9.019
      },
      {
        "date": "2026-11-03",
        "nav": 8.346
      },
      {
        "date": "2026-11-04",
        "nav": 9.135
      },
      {
        "date": "2026-11-05",
        "nav": 9.006
      },
      {
        "date": "2026-11-06",
        "nav": 8.55
      },
      {
        "date": "2026-11-09",
        "nav": 8.617
      },
      {
        "date": "2026-11-10",
        "nav": 8.83
      },
      {
        "date": "2026-11-11",
        "nav": 9.573
      },
      {
        "date": "2026-11-12",
        "nav": 9.455
      },
      {
        "date": "2026-11-13",
        "nav": 8.824
      },
      {
        "date": "2026-11-16",
        "nav": 8.064
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 3.7654,
      "price": 3.7654,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 2.5977,
      "price": 2.5977,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.29,
      "nav": 2.9717,
      "price": 2.9717,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.04,
      "nav": 0.7771,
      "price": 0.7771,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 1.8989,
      "price": 1.8989,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.19,
      "nav": 2.5828,
      "price": 2.5828,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 5.2611,
      "price": 5.2611,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.22,
      "nav": 1.593,
      "price": 1.593,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.0732,
      "price": 1.0732,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 2.462,
      "price": 2.462,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.172,
      "price": 1.172,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.203,
      "price": 2.203,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 1.1563,
      "price": 1.1563,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.9103,
      "price": 1.9103,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.3668,
      "price": 1.3668,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.4,
      "nav": 1.3045,
      "price": 1.3045,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.5697,
      "price": 2.5697,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 0.895,
      "price": 0.895,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.4334,
      "price": 2.4334,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.1657,
      "price": 1.1657,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 7.95,
      "sharpe": -2.56,
      "calmar": -2.56
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 6.99,
      "sharpe": -4.83,
      "calmar": -4.83
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 8.6,
      "sharpe": -4.44,
      "calmar": -4.44
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.23,
      "sharpe": 1.31,
      "calmar": 1.31
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 11.64,
      "sharpe": -2.42,
      "calmar": -2.42
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 5.61,
      "sharpe": -2.53,
      "calmar": -2.53
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.9,
      "sharpe": -0.77,
      "calmar": -0.77
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.66,
      "sharpe": -2.6,
      "calmar": -2.6
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 6.87,
      "sharpe": -2.56,
      "calmar": -2.56
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.12,
      "sharpe": -3.09,
      "calmar": -3.09
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.77,
      "sharpe": 1.1,
      "calmar": 1.1
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.04,
      "sharpe": -1.94,
      "calmar": -1.94
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 5.79,
      "sharpe": -6.9,
      "calmar": -6.9
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.0,
      "sharpe": 1.14,
      "calmar": 1.14
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.98,
      "sharpe": -2.77,
      "calmar": -2.77
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 11.97,
      "sharpe": -3.92,
      "calmar": -3.92
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.22,
      "sharpe": -0.7,
      "calmar": -0.7
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 8.08,
      "sharpe": -0.74,
      "calmar": -0.74
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.16,
      "sharpe": 0.37,
      "calmar": 0.37
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.16,
      "sharpe": -1.45,
      "calmar": -1.45
    }
  ],
  "news": [
    {
      "title": "记者11月16日了解到，市场监管总局（国家标准委）近日修订发布《家用和类似用途电器售后服务第2部分：电冰箱的特殊要求》《家用和类似用途电器售后服务第3部分：空调器的特殊要求》等4项国家标准，分别规定了电冰箱、空调器、洗衣机、饮水机售后服务方的要求、售后服务提供流程及售后服务规范等，推动质量管控由产品本身向售后服务环节延伸，持续提升家电售后服务规范化水平，改善消费体验。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:10",
      "impact": "neutral"
    },
    {
      "title": "11月12日，恰逢常州籍“人民的数学家”华罗庚诞辰纪念日，2026常州国际人才周正式启幕。作为全国人口最少的万亿GDP之城，常州将“以产聚才、以才兴产”的战略定力转化为制度创新与生态优化的具体实践。“真诚期盼各位院士专家、业界精英把先进成果转化到常州、把优质项目落地到常州、把创新事业布局到常州，常州将以最大诚意、最优服务，与大家共创事业、共赢未来。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "记者从国网内蒙古东部电力有限公司（以下简称“国网蒙东电力”）获悉，截至2026年11月16日0时，内蒙古特高压累计外送电量突破1万亿千瓦时，达到10005亿千瓦时，成为国内首个特高压外送电量破万亿度的省区，标志着我国特高压大容量、跨区域输电能力实现重要突破，单一省级送端基地的规模化外送正式迈入“万亿级”时代。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "2026年国家医保药品目录调整结果近日在苏州发布。新版国家医保药品目录新增107种药品，其中51个为一类创新药，再创历史新高；同期发布的新版商业健康保险创新药品目录新增12种药品，总数达28种。值得注意的是，药明巨诺的瑞基奥仑赛注射液成为首个纳入国家医保的CAR-T疗法。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "到2030年，我国将初步建成清洁低碳安全高效的新型能源体系；新型储能装机规模达到3亿千瓦；推动可再生能源制氢规模达到200万吨……近期，《“十五五”碳达峰行动方案》《新型能源体系建设“十五五”规划》等政策发布，为绿色低碳产业划定发展路径。在降碳增绿的产业趋势下，新型储能、氢能等赛道成为确定性增长极，有望拉动万亿级有效投资。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "规模以上工业增加值同比增长4.8%、全国服务业生产指数同比增长4.6%、高技术产品和“新三样”产品出口额同比增长均超50%……国家统计局11月16日数据显示，10月份我国国民经济运行延续总体平稳、向新向优发展态势。新质生产力茁壮成长，以高端制造、智能制造为代表的新动能对规模以上工业增加值增长的贡献超过五成，就业物价总体稳定，高质量发展扎实推进。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "中国证监会国际顾问委员会（简称“顾委会”）第23次会议近日在上海召开。顾委会委员们普遍认为，面对高度不确定的外部环境和各类冲击，中国证监会一体推进防风险、强监管、促高质量发展各项工作，在维护市场平稳运行、深化投融资综合改革、服务新质生产力发展、促进高水平对外开放等方面取得积极成效。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "记者11月16日获悉，工业和信息化部、市场监管总局近日联合印发《以标准提升引领轻工业优化升级实施方案》（以下简称《实施方案》）。其中提出，到2027年，轻工业标准化工作机制更加健全，制修订产品标准、方法标准等200项左右；译制轻工标准外文版30项左右，国际轻工标准中我国牵头制修订的比例提升至8%左右，标准国际影响力显著提升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "国家统计局11月16日发布的数据显示，2026年10月份，70个大中城市中，一线城市商品住宅销售价格环比总体上涨，二三线城市环比下降，一二三线城市同比降幅继续收窄。新建商品住宅方面，10月份，一线城市新建商品住宅销售价格同比下降0.1%，降幅比上月收窄0.4个百分点。其中，北京、广州和深圳分别下降2.6%、0.4%和0.2%，上海上涨2.7%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:29",
      "impact": "neutral"
    },
    {
      "title": "2026年亚太经合组织（APEC）领导人会议周大幕已启。11月16日，新闻中心举行第四场吹风会，中华人民共和国国际贸易谈判代表兼商务部副部长李成钢介绍了APEC“中国年”经贸合作有关情况。“经贸引领是APEC合作的鲜明特征和重要驱动。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:25",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 41,
    "label": "中性",
    "upDownRatio": "808/2,596",
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
