// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-08 17:20:44
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-08 17:20 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-30",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3811.9,
      "change": -30.29,
      "changePct": "-0.79%",
      "high": 3864.12,
      "low": 3795.37,
      "volume": 482201685.0,
      "amount": 811183100000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 12620.9,
      "change": -266.72,
      "changePct": "-2.07%",
      "high": 12984.95,
      "low": 12540.73,
      "volume": 533168305.0,
      "amount": 870943810000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3036.66,
      "change": -98.62,
      "changePct": "-3.15%",
      "high": 3168.4,
      "low": 3012.03,
      "volume": 148983938.0,
      "amount": 422754970000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1456.32,
      "change": -73.69,
      "changePct": "-4.82%",
      "high": 1521.46,
      "low": 1446.43,
      "volume": 8787483.0,
      "amount": 82397690000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4310.28,
      "change": -47.34,
      "changePct": "-1.09%",
      "high": 4383.57,
      "low": 4289.79,
      "volume": 191552711.0,
      "amount": 446208260000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7248.43,
      "change": -186.73,
      "changePct": "-2.51%",
      "high": 7461.24,
      "low": 7206.06,
      "volume": 145244450.0,
      "amount": 292217160000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.93万亿",
      "label": "成交额",
      "rawAmount": 2925704990000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,076/2,462",
      "label": "涨/跌家数",
      "rawUp": 1076,
      "rawDown": 2462,
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
    "totalInflow": 3.56,
    "totalOutflow": 0,
    "netFlow": 3.56,
    "netFlowTrend": [
      0.71,
      1.42,
      2.14,
      2.85,
      3.56
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
      "inflow": 2.57,
      "pct": 0.7
    },
    {
      "name": "煤炭",
      "inflow": 1.77,
      "pct": 1.83
    },
    {
      "name": "钢铁",
      "inflow": 0.14,
      "pct": 0.18
    },
    {
      "name": "白酒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.2
    },
    {
      "name": "食品",
      "inflow": -0.05,
      "pct": -0.2
    },
    {
      "name": "计算机",
      "inflow": -0.06,
      "pct": -2.31
    },
    {
      "name": "游戏",
      "inflow": -0.23,
      "pct": -2.52
    },
    {
      "name": "云计算",
      "inflow": -0.26,
      "pct": -2.81
    },
    {
      "name": "家电",
      "inflow": -0.31,
      "pct": -1.22
    },
    {
      "name": "农业",
      "inflow": -0.33,
      "pct": -0.97
    },
    {
      "name": "光伏",
      "inflow": -0.34,
      "pct": -1.68
    },
    {
      "name": "新能源车",
      "inflow": -0.36,
      "pct": -0.55
    },
    {
      "name": "传媒",
      "inflow": -0.51,
      "pct": -2.66
    },
    {
      "name": "新能源",
      "inflow": -0.59,
      "pct": -0.27
    },
    {
      "name": "军工",
      "inflow": -0.81,
      "pct": -0.54
    },
    {
      "name": "医药",
      "inflow": -1.15,
      "pct": -1.55
    },
    {
      "name": "地产",
      "inflow": -1.27,
      "pct": -0.85
    },
    {
      "name": "有色",
      "inflow": -1.37,
      "pct": -0.99
    },
    {
      "name": "券商",
      "inflow": -2.32,
      "pct": -1.63
    }
  ],
  "sectors": [
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.279,
      "changePct": 1.83,
      "change": 0.023,
      "turnover": 5.89
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.859,
      "changePct": 0.7,
      "change": 0.006,
      "turnover": 8.57
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.129,
      "changePct": 0.18,
      "change": 0.002,
      "turnover": 0.46
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.417,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 3.81
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.987,
      "changePct": -0.2,
      "change": -0.002,
      "turnover": 0.05
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.49,
      "changePct": -0.2,
      "change": -0.001,
      "turnover": 0.17
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.234,
      "changePct": -0.27,
      "change": -0.006,
      "turnover": 1.98
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.095,
      "changePct": -0.54,
      "change": -0.006,
      "turnover": 2.71
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.448,
      "changePct": -0.55,
      "change": -0.008,
      "turnover": 1.19
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.289,
      "changePct": -0.85,
      "change": -0.011,
      "turnover": 4.24
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.715,
      "changePct": -0.97,
      "change": -0.007,
      "turnover": 1.1
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.605,
      "changePct": -0.99,
      "change": -0.016,
      "turnover": 4.58
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.378,
      "changePct": -1.22,
      "change": -0.017,
      "turnover": 1.04
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.382,
      "changePct": -1.55,
      "change": -0.006,
      "turnover": 3.83
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.484,
      "changePct": -1.63,
      "change": -0.008,
      "turnover": 7.74
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.763,
      "changePct": -1.68,
      "change": -0.013,
      "turnover": 1.12
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.057,
      "changePct": -2.31,
      "change": -0.025,
      "turnover": 0.21
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.006,
      "changePct": -2.52,
      "change": -0.026,
      "turnover": 0.76
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.769,
      "changePct": -2.66,
      "change": -0.021,
      "turnover": 1.71
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.52,
      "changePct": -2.81,
      "change": -0.044,
      "turnover": 0.87
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.339,
      "changePct": -2.87,
      "change": -0.01,
      "turnover": 5.64
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.925,
      "changePct": -3.55,
      "change": -0.034,
      "turnover": 2.08
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.839,
      "changePct": -3.78,
      "change": -0.033,
      "turnover": 8.86
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.748,
      "changePct": -3.86,
      "change": -0.03,
      "turnover": 0.57
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.914,
      "changePct": -4.29,
      "change": -0.041,
      "turnover": 12.2
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.005,
      "changePct": -4.56,
      "change": -0.048,
      "turnover": 9.25
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.916,
      "changePct": -5.08,
      "change": -0.049,
      "turnover": 9.68
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.594,
      "changePct": -5.11,
      "change": -0.032,
      "turnover": 33.6
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.234,
      "changePct": -0.27,
      "amount": 1.98,
      "netFlow": -0.5
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.382,
      "changePct": -1.55,
      "amount": 3.83,
      "netFlow": -0.96
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.574,
      "changePct": -1.23,
      "amount": 4.9,
      "netFlow": -1.22
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.261,
      "changePct": -1.02,
      "amount": 5.2,
      "netFlow": -1.3
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.484,
      "changePct": -1.63,
      "amount": 7.74,
      "netFlow": -1.93
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.918,
      "changePct": -0.68,
      "amount": 9.84,
      "netFlow": -2.46
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.914,
      "changePct": -4.29,
      "amount": 12.2,
      "netFlow": -3.05
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.279,
      "changePct": -2.58,
      "amount": 22.99,
      "netFlow": -5.75
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.389,
      "changePct": -0.97,
      "amount": 33.08,
      "netFlow": -8.27
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.537,
      "changePct": -4.89,
      "amount": 84.62,
      "netFlow": -21.15
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.389,
      "changePct": -0.97,
      "amount": 33.08,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.918,
      "changePct": -0.68,
      "amount": 9.84,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.279,
      "changePct": -2.58,
      "amount": 22.99,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.574,
      "changePct": -1.23,
      "amount": 4.9,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.261,
      "changePct": -1.02,
      "amount": 5.2,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "煤炭",
      "turnover": 5.89,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 8.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.05,
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
      "name": "新能源",
      "turnover": 1.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 4.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 1.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 1.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.83,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.74,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.12,
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
      "turnover": 0.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.87,
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
      "nav": 4.2451,
      "ret1w": -4.04,
      "ret1m": -4.04,
      "ret3m": -8.43,
      "ret6m": -14.79,
      "ret1y": 0.65,
      "ret2y": 7.62,
      "ret3y": 87.59
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.7223,
      "ret1w": -3.22,
      "ret1m": -3.22,
      "ret3m": -11.18,
      "ret6m": -19.24,
      "ret1y": -10.77,
      "ret2y": -14.14,
      "ret3y": 23.84
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.1103,
      "ret1w": -9.42,
      "ret1m": -9.42,
      "ret3m": -13.2,
      "ret6m": -12.08,
      "ret1y": 14.92,
      "ret2y": 51.39,
      "ret3y": 141.25
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6912,
      "ret1w": -0.85,
      "ret1m": -0.85,
      "ret3m": -3.84,
      "ret6m": 4.25,
      "ret1y": -7.86,
      "ret2y": -15.97,
      "ret3y": -13.72
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9702,
      "ret1w": -1.43,
      "ret1m": -1.43,
      "ret3m": -4.76,
      "ret6m": -7.9,
      "ret1y": -27.46,
      "ret2y": -33.08,
      "ret3y": -27.03
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6793,
      "ret1w": -1.11,
      "ret1m": -1.11,
      "ret3m": -1.65,
      "ret6m": 1.43,
      "ret1y": -24.26,
      "ret2y": -20.59,
      "ret3y": 3.24
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2571,
      "ret1w": -0.58,
      "ret1m": -0.58,
      "ret3m": -4.44,
      "ret6m": 2.08,
      "ret1y": -8.36,
      "ret2y": 3.24,
      "ret3y": 19.95
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.869,
      "ret1w": -1.48,
      "ret1m": -1.48,
      "ret3m": -1.79,
      "ret6m": -9.23,
      "ret1y": -4.93,
      "ret2y": 0.27,
      "ret3y": 34.56
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2764,
      "ret1w": -1.41,
      "ret1m": -1.41,
      "ret3m": -4.48,
      "ret6m": -10.47,
      "ret1y": -5.28,
      "ret2y": -0.19,
      "ret3y": 10.85
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.072,
      "ret1w": -2.94,
      "ret1m": -2.94,
      "ret3m": -8.52,
      "ret6m": -23.22,
      "ret1y": 14.41,
      "ret2y": 38.19,
      "ret3y": 144.39
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.102,
      "ret1w": 0.27,
      "ret1m": 0.27,
      "ret3m": -2.91,
      "ret6m": 8.04,
      "ret1y": -5.25,
      "ret2y": -15.03,
      "ret3y": -22.39
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.393,
      "ret1w": -2.49,
      "ret1m": -2.49,
      "ret3m": -0.29,
      "ret6m": 8.62,
      "ret1y": -12.66,
      "ret2y": -9.94,
      "ret3y": 3.82
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.5454,
      "ret1w": -3.54,
      "ret1m": -3.54,
      "ret3m": -7.91,
      "ret6m": -32.44,
      "ret1y": -46.66,
      "ret2y": -46.47,
      "ret3y": -19.07
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8717,
      "ret1w": -0.69,
      "ret1m": -0.69,
      "ret3m": -4.09,
      "ret6m": 0.75,
      "ret1y": 3.12,
      "ret2y": -7.24,
      "ret3y": -12.28
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.5943,
      "ret1w": -1.88,
      "ret1m": -1.88,
      "ret3m": -4.14,
      "ret6m": -6.93,
      "ret1y": -5.14,
      "ret2y": 3.65,
      "ret3y": 32.77
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.0783,
      "ret1w": -6.3,
      "ret1m": -6.3,
      "ret3m": -12.67,
      "ret6m": -31.54,
      "ret1y": 4.5,
      "ret2y": 50.32,
      "ret3y": 105.55
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.6435,
      "ret1w": 0.13,
      "ret1m": 0.13,
      "ret3m": 1.78,
      "ret6m": 11.66,
      "ret1y": -0.79,
      "ret2y": -1.95,
      "ret3y": -1.88
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.01,
      "ret1w": -3.63,
      "ret1m": -3.63,
      "ret3m": -0.88,
      "ret6m": -0.49,
      "ret1y": -1.94,
      "ret2y": -15.69,
      "ret3y": -19.01
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2974,
      "ret1w": 0.29,
      "ret1m": 0.29,
      "ret3m": -1.92,
      "ret6m": 4.36,
      "ret1y": -5.93,
      "ret2y": 3.55,
      "ret3y": -4.77
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.278,
      "ret1w": -1.4,
      "ret1m": -1.4,
      "ret3m": -3.69,
      "ret6m": -0.9,
      "ret1y": 0.71,
      "ret2y": 11.83,
      "ret3y": 43.98
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.1562,
      "ret1w": -2.03,
      "ret1m": -2.03,
      "ret3m": -7.99,
      "ret6m": -16.77,
      "ret1y": -10.81,
      "ret2y": -1.96,
      "ret3y": 17.17
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.2304,
      "ret1w": -2.02,
      "ret1m": -2.02,
      "ret3m": -7.96,
      "ret6m": -16.68,
      "ret1y": -10.65,
      "ret2y": -1.57,
      "ret3y": 18.1
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0654,
      "ret1w": -0.18,
      "ret1m": -0.18,
      "ret3m": -1.94,
      "ret6m": -3.42,
      "ret1y": -1.5,
      "ret2y": -0.19,
      "ret3y": 4.13
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0397,
      "ret1w": -0.15,
      "ret1m": -0.15,
      "ret3m": -1.89,
      "ret6m": -3.27,
      "ret1y": -1.2,
      "ret2y": 0.43,
      "ret3y": 5.4
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6954,
      "ret1w": -0.7,
      "ret1m": -0.7,
      "ret3m": -3.55,
      "ret6m": -3.31,
      "ret1y": -11.76,
      "ret2y": -15.67,
      "ret3y": -8.97
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7134,
      "ret1w": -0.68,
      "ret1m": -0.68,
      "ret3m": -3.5,
      "ret6m": -3.19,
      "ret1y": -11.53,
      "ret2y": -15.23,
      "ret3y": -8.04
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.5766,
      "ret1w": -3.33,
      "ret1m": -3.33,
      "ret3m": -9.83,
      "ret6m": -17.06,
      "ret1y": 16.8,
      "ret2y": 38.09,
      "ret3y": 108.94
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4084,
      "ret1w": -2.25,
      "ret1m": -2.25,
      "ret3m": -3.39,
      "ret6m": -9.34,
      "ret1y": 0.73,
      "ret2y": 6.91,
      "ret3y": 47.05
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7007,
      "ret1w": -1.56,
      "ret1m": -1.56,
      "ret3m": -4.37,
      "ret6m": -12.67,
      "ret1y": -19.55,
      "ret2y": -14.31,
      "ret3y": -7.43
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0146,
      "ret1w": -3.36,
      "ret1m": -3.36,
      "ret3m": -2.01,
      "ret6m": -16.43,
      "ret1y": 14.9,
      "ret2y": 22.64,
      "ret3y": 83.63
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4925,
      "ret1w": -0.85,
      "ret1m": -0.85,
      "ret3m": -2.9,
      "ret6m": -17.23,
      "ret1y": -1.79,
      "ret2y": 3.58,
      "ret3y": 25.38
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5021,
      "ret1w": -0.85,
      "ret1m": -0.85,
      "ret3m": -2.86,
      "ret6m": -17.15,
      "ret1y": -1.61,
      "ret2y": 4.0,
      "ret3y": 26.38
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2725,
      "ret1w": 0.37,
      "ret1m": 0.37,
      "ret3m": -0.77,
      "ret6m": 2.62,
      "ret1y": -1.68,
      "ret2y": -1.0,
      "ret3y": 1.28
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0994,
      "ret1w": -0.55,
      "ret1m": -0.55,
      "ret3m": -2.06,
      "ret6m": -2.46,
      "ret1y": -6.54,
      "ret2y": -5.2,
      "ret3y": 0.31
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3044,
      "ret1w": -1.18,
      "ret1m": -1.18,
      "ret3m": -5.27,
      "ret6m": -18.35,
      "ret1y": -6.57,
      "ret2y": -24.49,
      "ret3y": -10.66
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9123,
      "ret1w": -0.24,
      "ret1m": -0.24,
      "ret3m": -4.07,
      "ret6m": 1.97,
      "ret1y": -8.79,
      "ret2y": 2.9,
      "ret3y": 24.37
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.954,
      "ret1w": -5.98,
      "ret1m": -5.98,
      "ret3m": -11.58,
      "ret6m": -31.72,
      "ret1y": 0.0,
      "ret2y": 37.97,
      "ret3y": 105.71
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5341,
      "ret1w": 1.01,
      "ret1m": 1.01,
      "ret3m": 1.44,
      "ret6m": 8.3,
      "ret1y": 2.86,
      "ret2y": 3.81,
      "ret3y": -5.91
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5817,
      "ret1w": 0.55,
      "ret1m": 0.55,
      "ret3m": -8.08,
      "ret6m": -23.86,
      "ret1y": -9.83,
      "ret2y": -6.28,
      "ret3y": 2.96
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.078,
      "ret1w": -3.88,
      "ret1m": -3.88,
      "ret3m": -9.86,
      "ret6m": -19.26,
      "ret1y": 35.06,
      "ret2y": 85.11,
      "ret3y": 212.27
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0603,
      "ret1w": -0.06,
      "ret1m": -0.06,
      "ret3m": -0.63,
      "ret6m": -1.29,
      "ret1y": -0.65,
      "ret2y": 0.77,
      "ret3y": 3.41
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1089,
      "ret1w": -0.05,
      "ret1m": -0.05,
      "ret3m": -0.6,
      "ret6m": -1.22,
      "ret1y": -0.51,
      "ret2y": 1.05,
      "ret3y": 4.11
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0661,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": 0.12,
      "ret6m": 0.35,
      "ret1y": 0.66,
      "ret2y": 1.67,
      "ret3y": 3.18
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1004,
      "ret1w": 0.02,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.33,
      "ret1y": 0.71,
      "ret2y": 1.59,
      "ret3y": 3.99
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.11,
      "ret1w": 0.02,
      "ret1m": 0.02,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.82,
      "ret2y": 1.8,
      "ret3y": 4.42
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.077,
      "ret1w": 0.03,
      "ret1m": 0.03,
      "ret3m": 0.07,
      "ret6m": 0.27,
      "ret1y": 0.63,
      "ret2y": 1.54,
      "ret3y": 3.28
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0918,
      "ret1w": 0.04,
      "ret1m": 0.04,
      "ret3m": 0.1,
      "ret6m": 0.35,
      "ret1y": 0.78,
      "ret2y": 1.87,
      "ret3y": 3.94
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0442,
      "ret1w": -0.71,
      "ret1m": -0.71,
      "ret3m": -2.08,
      "ret6m": -4.08,
      "ret1y": -1.11,
      "ret2y": 3.46,
      "ret3y": 7.96
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2021,
      "ret1w": -0.73,
      "ret1m": -0.73,
      "ret3m": -1.71,
      "ret6m": -3.62,
      "ret1y": -1.0,
      "ret2y": 1.45,
      "ret3y": 3.26
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0512,
      "ret1w": -0.71,
      "ret1m": -0.71,
      "ret3m": -2.04,
      "ret6m": -3.99,
      "ret1y": -0.91,
      "ret2y": 3.89,
      "ret3y": 8.84
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0441,
      "ret1w": 0.03,
      "ret1m": 0.03,
      "ret3m": 0.16,
      "ret6m": 0.42,
      "ret1y": 0.83,
      "ret2y": 1.87,
      "ret3y": 3.73
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1475,
      "ret1w": -0.92,
      "ret1m": -0.92,
      "ret3m": -1.97,
      "ret6m": -3.88,
      "ret1y": -4.76,
      "ret2y": -3.11,
      "ret3y": 2.87
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2043,
      "ret1w": -0.03,
      "ret1m": -0.03,
      "ret3m": -0.86,
      "ret6m": -1.24,
      "ret1y": -1.45,
      "ret2y": 0.8,
      "ret3y": 8.81
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1294,
      "ret1w": -0.2,
      "ret1m": -0.2,
      "ret3m": -0.66,
      "ret6m": -2.18,
      "ret1y": 0.37,
      "ret2y": 1.48,
      "ret3y": 7.72
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2007,
      "ret1w": -0.2,
      "ret1m": -0.2,
      "ret3m": -0.63,
      "ret6m": -2.09,
      "ret1y": 0.57,
      "ret2y": 1.9,
      "ret3y": 8.61
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.498,
      "ret1w": -0.2,
      "ret1m": -0.79,
      "ret3m": 5.94,
      "ret6m": -12.26,
      "ret1y": 53.16,
      "ret2y": 89.24,
      "ret3y": 157.0
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.002,
      "ret1w": -0.08,
      "ret1m": -0.49,
      "ret3m": 0.59,
      "ret6m": 3.06,
      "ret1y": 13.54,
      "ret2y": 5.31,
      "ret3y": 29.8
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8135,
      "ret1w": 1.21,
      "ret1m": -0.74,
      "ret3m": -3.97,
      "ret6m": -15.39,
      "ret1y": -6.39,
      "ret2y": -6.8,
      "ret3y": 27.2
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4897,
      "ret1w": 0.02,
      "ret1m": 0.31,
      "ret3m": 3.64,
      "ret6m": 2.2,
      "ret1y": 33.82,
      "ret2y": 24.32,
      "ret3y": 78.83
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9121,
      "ret1w": -0.23,
      "ret1m": -0.77,
      "ret3m": -2.56,
      "ret6m": -3.43,
      "ret1y": -4.67,
      "ret2y": -6.31,
      "ret3y": -3.06
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7308,
      "ret1w": -0.01,
      "ret1m": -0.35,
      "ret3m": 4.19,
      "ret6m": -12.69,
      "ret1y": 39.06,
      "ret2y": 45.81,
      "ret3y": 98.21
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.537,
      "ret1w": -0.22,
      "ret1m": -0.44,
      "ret3m": -1.69,
      "ret6m": -2.91,
      "ret1y": 8.08,
      "ret2y": 4.06,
      "ret3y": 20.22
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.248,
      "ret1w": 4.09,
      "ret1m": -0.32,
      "ret3m": 1.13,
      "ret6m": 11.53,
      "ret1y": -7.42,
      "ret2y": -20.2,
      "ret3y": 85.99
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.961,
      "ret1w": 1.59,
      "ret1m": -2.93,
      "ret3m": 0.1,
      "ret6m": -2.54,
      "ret1y": -9.25,
      "ret2y": -24.39,
      "ret3y": 4.23
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9199,
      "ret1w": 0.41,
      "ret1m": -2.14,
      "ret3m": 2.63,
      "ret6m": -9.74,
      "ret1y": 50.05,
      "ret2y": 72.05,
      "ret3y": 143.47
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5333,
      "ret1w": -0.34,
      "ret1m": -2.86,
      "ret3m": -5.72,
      "ret6m": 11.75,
      "ret1y": -1.04,
      "ret2y": 23.72,
      "ret3y": 47.5
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7343,
      "ret1w": -0.14,
      "ret1m": -1.94,
      "ret3m": 0.24,
      "ret6m": 0.59,
      "ret1y": 20.18,
      "ret2y": 24.56,
      "ret3y": 51.48
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.214,
      "ret1w": -1.06,
      "ret1m": -2.1,
      "ret3m": -6.54,
      "ret6m": -7.68,
      "ret1y": -1.3,
      "ret2y": -3.42,
      "ret3y": -14.59
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.979,
      "ret1w": -0.35,
      "ret1m": -2.99,
      "ret3m": -6.78,
      "ret6m": 1.7,
      "ret1y": -13.09,
      "ret2y": 0.66,
      "ret3y": 42.56
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 6.4134,
      "ret1w": 0.14,
      "ret1m": -1.22,
      "ret3m": 2.3,
      "ret6m": -14.89,
      "ret1y": 32.89,
      "ret2y": 38.72,
      "ret3y": 73.87
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.013,
      "ret1w": -0.02,
      "ret1m": -0.02,
      "ret3m": 0.16,
      "ret6m": 0.44,
      "ret1y": 1.32,
      "ret2y": 2.38,
      "ret3y": 3.78
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0121,
      "ret1w": -0.02,
      "ret1m": -0.02,
      "ret3m": 0.17,
      "ret6m": 0.47,
      "ret1y": 1.33,
      "ret2y": 2.46,
      "ret3y": 3.96
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.321,
      "ret1w": -1.56,
      "ret1m": -1.56,
      "ret3m": -6.11,
      "ret6m": -12.98,
      "ret1y": -7.3,
      "ret2y": -10.38,
      "ret3y": -0.75
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.6,
      "ret1w": -1.81,
      "ret1m": -1.81,
      "ret3m": -7.51,
      "ret6m": -13.42,
      "ret1y": -6.91,
      "ret2y": -5.01,
      "ret3y": 13.59
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5604,
      "ret1w": -0.33,
      "ret1m": -0.33,
      "ret3m": -7.87,
      "ret6m": -0.82,
      "ret1y": -13.86,
      "ret2y": 9.02,
      "ret3y": 35.45
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0358,
      "ret1w": -1.2,
      "ret1m": -1.2,
      "ret3m": -4.36,
      "ret6m": -7.02,
      "ret1y": -1.76,
      "ret2y": 3.16,
      "ret3y": 12.72
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.0949,
      "ret1w": -1.2,
      "ret1m": -1.2,
      "ret3m": -4.33,
      "ret6m": -6.93,
      "ret1y": -1.56,
      "ret2y": 3.58,
      "ret3y": 13.62
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.8772,
      "ret1w": -2.41,
      "ret1m": -2.41,
      "ret3m": -6.38,
      "ret6m": -12.95,
      "ret1y": -7.81,
      "ret2y": -1.44,
      "ret3y": 19.32
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6905,
      "ret1w": -1.04,
      "ret1m": -1.04,
      "ret3m": -5.04,
      "ret6m": -8.36,
      "ret1y": -4.93,
      "ret2y": -5.52,
      "ret3y": 4.15
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5236,
      "ret1w": -1.2,
      "ret1m": -1.2,
      "ret3m": -4.15,
      "ret6m": -3.54,
      "ret1y": -7.36,
      "ret2y": 2.77,
      "ret3y": 21.35
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.781,
      "ret1w": -2.43,
      "ret1m": -2.43,
      "ret3m": -8.32,
      "ret6m": -19.44,
      "ret1y": -2.21,
      "ret2y": -5.08,
      "ret3y": 19.14
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.047,
      "ret1w": -0.59,
      "ret1m": -0.59,
      "ret3m": -4.8,
      "ret6m": 0.24,
      "ret1y": -5.27,
      "ret2y": -7.03,
      "ret3y": -0.28
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4624,
      "ret1w": -0.54,
      "ret1m": -1.7,
      "ret3m": -4.6,
      "ret6m": 0.16,
      "ret1y": 1.9,
      "ret2y": 7.27,
      "ret3y": 24.84
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5278,
      "ret1w": 0.12,
      "ret1m": -0.34,
      "ret3m": 2.44,
      "ret6m": -0.52,
      "ret1y": 23.01,
      "ret2y": 14.79,
      "ret3y": 39.93
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.5364,
      "ret1w": -1.57,
      "ret1m": -1.57,
      "ret3m": -7.43,
      "ret6m": -13.68,
      "ret1y": -7.18,
      "ret2y": -5.27,
      "ret3y": 8.77
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1347,
      "ret1w": 0.54,
      "ret1m": -5.04,
      "ret3m": -5.0,
      "ret6m": -17.08,
      "ret1y": 1.64,
      "ret2y": -0.11,
      "ret3y": 35.65
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.137,
      "ret1w": 0.54,
      "ret1m": -5.03,
      "ret3m": -4.95,
      "ret6m": -16.95,
      "ret1y": 1.73,
      "ret2y": 0.04,
      "ret3y": 35.18
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3527,
      "ret1w": -0.16,
      "ret1m": -3.97,
      "ret3m": -4.61,
      "ret6m": -17.52,
      "ret1y": -3.12,
      "ret2y": -6.28,
      "ret3y": 17.28
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3841,
      "ret1w": -0.16,
      "ret1m": -3.96,
      "ret3m": -4.58,
      "ret6m": -17.44,
      "ret1y": -2.92,
      "ret2y": -5.9,
      "ret3y": 18.23
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9211,
      "ret1w": -0.51,
      "ret1m": -5.34,
      "ret3m": -6.27,
      "ret6m": -28.46,
      "ret1y": 0.58,
      "ret2y": -0.57,
      "ret3y": 34.05
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1597,
      "ret1w": -0.13,
      "ret1m": -0.13,
      "ret3m": -0.4,
      "ret6m": -0.7,
      "ret1y": -0.21,
      "ret2y": 1.07,
      "ret3y": 5.62
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1798,
      "ret1w": -0.13,
      "ret1m": -0.13,
      "ret3m": -0.37,
      "ret6m": -0.62,
      "ret1y": -0.06,
      "ret2y": 1.38,
      "ret3y": 6.26
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0864,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": 0.15,
      "ret6m": 0.43,
      "ret1y": 0.81,
      "ret2y": 1.98,
      "ret3y": 3.77
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4098,
      "ret1w": -0.02,
      "ret1m": -0.02,
      "ret3m": 0.0,
      "ret6m": 0.02,
      "ret1y": -0.03,
      "ret2y": 0.66,
      "ret3y": 5.62
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4626,
      "ret1w": -0.01,
      "ret1m": -0.01,
      "ret3m": 0.03,
      "ret6m": 0.12,
      "ret1y": 0.17,
      "ret2y": 1.07,
      "ret3y": 6.47
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0293,
      "ret1w": -1.62,
      "ret1m": -1.62,
      "ret3m": -3.77,
      "ret6m": -6.82,
      "ret1y": 7.8,
      "ret2y": 15.22,
      "ret3y": 38.33
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1472,
      "ret1w": -1.87,
      "ret1m": -1.87,
      "ret3m": -7.46,
      "ret6m": -7.89,
      "ret1y": -2.21,
      "ret2y": -0.02,
      "ret3y": 21.8
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 4.2451,
      "price": 4.2451,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 3.7223,
      "price": 3.7223,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.47,
      "nav": 5.1103,
      "price": 5.1103,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.04,
      "nav": 0.6912,
      "price": 0.6912,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.9702,
      "price": 1.9702,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.6793,
      "price": 2.6793,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 5.2571,
      "price": 5.2571,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.869,
      "price": 1.869,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.2764,
      "price": 1.2764,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 3.072,
      "price": 3.072,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.102,
      "price": 1.102,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 2.393,
      "price": 2.393,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.5454,
      "price": 1.5454,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.8717,
      "price": 1.8717,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.5943,
      "price": 1.5943,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.32,
      "nav": 2.0783,
      "price": 2.0783,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.6435,
      "price": 2.6435,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.01,
      "price": 1.01,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.2974,
      "price": 2.2974,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.278,
      "price": 1.278,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.06,
      "sharpe": 0.07,
      "calmar": 0.07
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 4.83,
      "sharpe": -1.31,
      "calmar": -1.31
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 14.13,
      "sharpe": 1.03,
      "calmar": 1.03
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.27,
      "sharpe": -1.34,
      "calmar": -1.34
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.15,
      "sharpe": -4.27,
      "calmar": -4.27
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.67,
      "sharpe": -3.97,
      "calmar": -3.97
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.87,
      "sharpe": -1.5,
      "calmar": -1.5
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.22,
      "sharpe": -0.76,
      "calmar": -0.76
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.11,
      "sharpe": -0.82,
      "calmar": -0.82
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 4.41,
      "sharpe": 1.81,
      "calmar": 1.81
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -1.0,
      "calmar": -1.0
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.74,
      "sharpe": -1.69,
      "calmar": -1.69
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 5.31,
      "sharpe": -5.46,
      "calmar": -5.46
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.03,
      "sharpe": 0.55,
      "calmar": 0.55
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 2.82,
      "sharpe": -0.75,
      "calmar": -0.75
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.45,
      "sharpe": 0.4,
      "calmar": 0.4
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.2,
      "sharpe": -0.15,
      "calmar": -0.15
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 5.45,
      "sharpe": -0.22,
      "calmar": -0.22
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.43,
      "sharpe": -1.12,
      "calmar": -1.12
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 2.1,
      "sharpe": 0.11,
      "calmar": 0.11
    }
  ],
  "news": [
    {
      "title": "近日，国家卫生健康委、国家发展改革委联合印发《医疗康复护理扩容提升工程实施方案》（以下简称《方案》）。“《方案》对医疗器械、专科医疗赛道上市公司构成重大利好。”苏商银行特约研究员付一夫在接受《证券日报》记者采访时表示，这给相关行业带来三大核心机遇。一是康复护理设备需求放量。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:10",
      "impact": "neutral"
    },
    {
      "title": "10月7日，湖北省委常委、武汉市委书记盛阅春主持召开推进武汉区域科技创新中心建设工作专班会议，强调要健全工作机制，抓实重点任务，全力推动武汉区域科技创新中心建设取得更大实效。副省长陈平，市委副书记、市长熊征宇出席并讲话。会议听取了武汉区域科创中心建设进展、工作专班组建方案起草、今年重点工作清单编制等情况，相关单位作讨论发言。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:58",
      "impact": "neutral"
    },
    {
      "title": "刚刚过去的十一黄金周，又交出一份飘红的消费数据。10月1日至6日，商务部重点监测的78个步行街（商圈）客流量、营业额同比分别增长2.5%、4.7%。但硬币的另一面，几乎每次黄金周都被吐槽的问题也再次发生。除了抢票、堵车、涨价、“看人头”等“传统节目”，今年又增加了一个高速充电难问题。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:37",
      "impact": "neutral"
    },
    {
      "title": "“保证每一个在大湾区打拼的湖南人10月8日都有班上。”10月7日晚，社交媒体上一张夜间高铁发车时刻表截图，引发大量转发与讨论。截图显示，短短41分钟时间里，从00:37到01:18，长沙南站密集发出8趟高铁，目的地指向同一个地方——广州南站。凌晨出发的“红眼高铁”，只是广州南站高负荷运转的一个切片。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:32",
      "impact": "neutral"
    },
    {
      "title": "征求意见稿立足发展与权益的平衡，目标是推动数字经济治理从事后整治转向事前规则化治理。据新华社报道，人力资源社会保障部10月8日发布《新就业形态劳动者权益保障办法（征求意见稿）》，从即日起至11月8日，向社会公开征求意见。这是我国首次以规章形式，将企业实施劳动管理、不完全符合确立劳动关系情形的新就业形态劳动者纳入劳动法律制度保障。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:01",
      "impact": "neutral"
    },
    {
      "title": "受八部门联合出台的《金融产品网络营销管理办法》（以下简称“930新规”）落地实施的影响，社交平台、短视频渠道上“秒批秒放”“低门槛、低利率”这类曾经刷屏的营销话术快速消失。近期，《每日经济新闻》记者（以下简称每经记者）观察发现，杭州银行、小赢卡贷、携程金融等机构的借贷广告重新回归社交平台信息流。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:57",
      "impact": "neutral"
    },
    {
      "title": "这次超长假期，人们去了哪里，又把钱花在了什么地方？随着国庆假期收官，各项消费数据陆续出炉。交通运输部数据显示，10月1日至7日，全社会跨区域人员流动量达21.42亿人次，国内多个热门景区连续多日预约爆满。这个假期，文旅市场的火热在意料之中。由于中秋和国庆之间只隔了3个工作日，“请3休13”的拼假方式，让不少人提前出发，也把出行半径拉得更长。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:33",
      "impact": "neutral"
    },
    {
      "title": "10月1日深夜十一点，《华夏时报》记者看到，贵阳民生路步行街的人流还没有散去。当地特色“但家香酥鸭”的店铺前依旧有顾客等待排队点餐，旁边小十字第一家洋芋粑的小门店里，洋芋粑正在铁板上滋滋作响，“小份8元、大份10元”的吆喝声在街对面就能听到。这是今年国庆假期贵阳的一个普通夜晚。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:31",
      "impact": "neutral"
    },
    {
      "title": "○国家卫健委、国家发改委印发《医疗康复护理扩容提升工程实施方案》。其中提到，加快脑机接口、具身智能、仿生驱动等前沿技术布局。○人力资源社会保障部发布《新就业形态劳动者权益保障办法（征求意见稿）》，从即日起至11月8日，向社会公开征求意见。○中证协：上半年末外资持有境内股票4.66万亿元，环比增近30%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:31",
      "impact": "neutral"
    },
    {
      "title": "今年国庆假期是9·28国常会定调“研究出台稳定房地产市场、促进就业增收等政策措施”、9·29房贷贴息政策落地后的首个长假，也是房企集中营销、居民看房选房的重要窗口。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:22",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 42,
    "label": "中性",
    "upDownRatio": "1,076/2,462",
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
