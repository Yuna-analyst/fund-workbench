// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-05 16:21:08
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-05 16:21 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-05",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3878.43,
      "change": 56.15,
      "changePct": "+1.47%",
      "high": 3884.4,
      "low": 3815.12,
      "volume": 592155124.0,
      "amount": 1208723020000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14144.2,
      "change": 258.49,
      "changePct": "+1.86%",
      "high": 14246.38,
      "low": 13644.83,
      "volume": 732409197.0,
      "amount": 1450911480000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3535.14,
      "change": 46.17,
      "changePct": "+1.32%",
      "high": 3584.06,
      "low": 3372.04,
      "volume": 226495353.0,
      "amount": 720546200000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1693.67,
      "change": 77.31,
      "changePct": "+4.78%",
      "high": 1715.28,
      "low": 1615.26,
      "volume": 12956469.0,
      "amount": 154309290000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4658.15,
      "change": 57.22,
      "changePct": "+1.24%",
      "high": 4679.86,
      "low": 4550.19,
      "volume": 276921919.0,
      "amount": 879161150000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7809.21,
      "change": 201.72,
      "changePct": "+2.65%",
      "high": 7845.39,
      "low": 7567.96,
      "volume": 222031817.0,
      "amount": 526922800000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.94万亿",
      "label": "成交额",
      "rawAmount": 4940573940000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,776/611",
      "label": "涨/跌家数",
      "rawUp": 4776,
      "rawDown": 611,
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
    "totalInflow": 56.81,
    "totalOutflow": 0,
    "netFlow": 56.81,
    "netFlowTrend": [
      11.36,
      22.72,
      34.09,
      45.45,
      56.81
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
      "inflow": 23.83,
      "pct": 0.78
    },
    {
      "name": "半导体",
      "inflow": 7.18,
      "pct": 6.6
    },
    {
      "name": "5G",
      "inflow": 5.81,
      "pct": 1.62
    },
    {
      "name": "有色",
      "inflow": 5.03,
      "pct": 5.2
    },
    {
      "name": "芯片",
      "inflow": 4.73,
      "pct": 6.39
    },
    {
      "name": "创新药",
      "inflow": 2.76,
      "pct": 1.05
    },
    {
      "name": "券商",
      "inflow": 2.7,
      "pct": 0.57
    },
    {
      "name": "医药",
      "inflow": 1.94,
      "pct": 1.04
    },
    {
      "name": "医疗",
      "inflow": 1.61,
      "pct": 0.9
    },
    {
      "name": "人工智能",
      "inflow": 1.22,
      "pct": 1.9
    },
    {
      "name": "军工",
      "inflow": 1.04,
      "pct": 1.79
    },
    {
      "name": "云计算",
      "inflow": 0.96,
      "pct": 2.01
    },
    {
      "name": "新能源",
      "inflow": 0.74,
      "pct": 2.13
    },
    {
      "name": "光伏",
      "inflow": 0.72,
      "pct": 1.54
    },
    {
      "name": "新能源车",
      "inflow": 0.57,
      "pct": 2.15
    },
    {
      "name": "地产",
      "inflow": 0.28,
      "pct": 1.77
    },
    {
      "name": "家电",
      "inflow": 0.19,
      "pct": 0.99
    },
    {
      "name": "电子",
      "inflow": 0.18,
      "pct": 5.69
    },
    {
      "name": "农业",
      "inflow": 0.16,
      "pct": 0.7
    },
    {
      "name": "计算机",
      "inflow": 0.1,
      "pct": 2.9
    }
  ],
  "sectors": [
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.033,
      "changePct": 6.6,
      "change": 0.064,
      "turnover": 23.94
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.165,
      "changePct": 6.39,
      "change": 0.07,
      "turnover": 15.77
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.854,
      "changePct": 5.69,
      "change": 0.046,
      "turnover": 0.6
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.903,
      "changePct": 5.2,
      "change": 0.094,
      "turnover": 16.78
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.241,
      "changePct": 2.9,
      "change": 0.035,
      "turnover": 0.34
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.663,
      "changePct": 2.15,
      "change": 0.035,
      "turnover": 1.91
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.538,
      "changePct": 2.13,
      "change": 0.053,
      "turnover": 2.47
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.777,
      "changePct": 2.01,
      "change": 0.035,
      "turnover": 3.19
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.07,
      "changePct": 1.9,
      "change": 0.02,
      "turnover": 4.08
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.136,
      "changePct": 1.79,
      "change": 0.02,
      "turnover": 3.46
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.207,
      "changePct": 1.77,
      "change": 0.021,
      "turnover": 0.93
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.002,
      "changePct": 1.62,
      "change": 0.016,
      "turnover": 19.36
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.855,
      "changePct": 1.54,
      "change": 0.013,
      "turnover": 2.4
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.866,
      "changePct": 1.05,
      "change": 0.009,
      "turnover": 9.21
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.387,
      "changePct": 1.04,
      "change": 0.004,
      "turnover": 6.46
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.424,
      "changePct": 0.99,
      "change": 0.014,
      "turnover": 0.62
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.337,
      "changePct": 0.9,
      "change": 0.003,
      "turnover": 5.38
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.642,
      "changePct": 0.78,
      "change": 0.005,
      "turnover": 79.42
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.723,
      "changePct": 0.7,
      "change": 0.005,
      "turnover": 0.54
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.53,
      "changePct": 0.57,
      "change": 0.003,
      "turnover": 8.99
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.152,
      "changePct": 0.35,
      "change": 0.004,
      "turnover": 1.78
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.182,
      "changePct": 0.34,
      "change": 0.004,
      "turnover": 0.97
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.061,
      "changePct": 0.28,
      "change": 0.003,
      "turnover": 0.06
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.174,
      "changePct": 0.17,
      "change": 0.002,
      "turnover": 8.48
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.881,
      "changePct": 0.11,
      "change": 0.001,
      "turnover": 7.27
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.508,
      "changePct": -0.78,
      "change": -0.004,
      "turnover": 0.2
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.437,
      "changePct": -0.91,
      "change": -0.004,
      "turnover": 8.45
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.801,
      "changePct": -1.23,
      "change": -0.01,
      "turnover": 12.2
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.786,
      "changePct": 4.69,
      "amount": 114.05,
      "netFlow": 28.51
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.714,
      "changePct": 1.35,
      "amount": 66.9,
      "netFlow": 16.73
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.815,
      "changePct": 2.82,
      "amount": 41.6,
      "netFlow": 10.4
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.029,
      "changePct": 1.54,
      "amount": 25.68,
      "netFlow": 6.42
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.033,
      "changePct": 6.6,
      "amount": 23.94,
      "netFlow": 5.98
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.92,
      "changePct": 1.23,
      "amount": 13.68,
      "netFlow": 3.42
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.578,
      "changePct": 1.19,
      "amount": 10.97,
      "netFlow": 2.74
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.53,
      "changePct": 0.57,
      "amount": 8.99,
      "netFlow": 2.25
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.387,
      "changePct": 1.04,
      "amount": 6.46,
      "netFlow": 1.62
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.538,
      "changePct": 2.13,
      "amount": 2.47,
      "netFlow": 0.62
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.714,
      "changePct": 1.35,
      "amount": 66.9,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.029,
      "changePct": 1.54,
      "amount": 25.68,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.815,
      "changePct": 2.82,
      "amount": 41.6,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.92,
      "changePct": 1.23,
      "amount": 13.68,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.578,
      "changePct": 1.19,
      "amount": 10.97,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "半导体",
      "turnover": 23.94,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "芯片",
      "turnover": 15.77,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "电子",
      "turnover": 0.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 16.78,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "计算机",
      "turnover": 0.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.91,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 2.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 3.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 4.08,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.93,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 19.36,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 2.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 9.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 6.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 5.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 79.42,
      "percentile": 95,
      "level": "极高",
      "status": "极度过热"
    },
    {
      "name": "农业",
      "turnover": 0.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 8.99,
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
      "nav": 4.2314,
      "ret1w": 5.45,
      "ret1m": 8.06,
      "ret3m": -18.47,
      "ret6m": -10.84,
      "ret1y": -1.84,
      "ret2y": 44.98,
      "ret3y": 143.17
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1625,
      "ret1w": 2.3,
      "ret1m": 2.41,
      "ret3m": -11.7,
      "ret6m": -12.3,
      "ret1y": 8.46,
      "ret2y": 19.81,
      "ret3y": 71.76
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.7803,
      "ret1w": 0.71,
      "ret1m": 8.38,
      "ret3m": -22.05,
      "ret6m": -2.24,
      "ret1y": 22.8,
      "ret2y": 101.22,
      "ret3y": 217.99
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7186,
      "ret1w": -0.26,
      "ret1m": -1.58,
      "ret3m": 8.26,
      "ret6m": -4.88,
      "ret1y": -12.55,
      "ret2y": -10.8,
      "ret3y": 10.32
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.3089,
      "ret1w": 0.18,
      "ret1m": 5.75,
      "ret3m": -0.06,
      "ret6m": -17.89,
      "ret1y": -23.25,
      "ret2y": -1.8,
      "ret3y": 23.33
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.8475,
      "ret1w": 1.98,
      "ret1m": 3.98,
      "ret3m": 1.64,
      "ret6m": -15.81,
      "ret1y": -29.21,
      "ret2y": -3.79,
      "ret3y": 34.97
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5498,
      "ret1w": 0.63,
      "ret1m": -1.23,
      "ret3m": 6.46,
      "ret6m": -2.52,
      "ret1y": -6.38,
      "ret2y": 24.49,
      "ret3y": 55.46
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.864,
      "ret1w": 3.1,
      "ret1m": 4.95,
      "ret3m": -15.77,
      "ret6m": -9.6,
      "ret1y": -5.43,
      "ret2y": 11.95,
      "ret3y": 66.13
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3471,
      "ret1w": 2.44,
      "ret1m": 3.41,
      "ret3m": -9.91,
      "ret6m": -5.4,
      "ret1y": 1.35,
      "ret2y": 17.46,
      "ret3y": 44.97
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.388,
      "ret1w": 4.89,
      "ret1m": 1.71,
      "ret3m": -16.7,
      "ret6m": 11.23,
      "ret1y": 37.56,
      "ret2y": 132.21,
      "ret3y": 275.61
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.122,
      "ret1w": 0.18,
      "ret1m": 0.09,
      "ret3m": 8.93,
      "ret6m": -3.94,
      "ret1y": -11.44,
      "ret2y": -10.53,
      "ret3y": 0.45
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.364,
      "ret1w": 0.34,
      "ret1m": 3.28,
      "ret3m": 2.69,
      "ret6m": -11.56,
      "ret1y": -17.89,
      "ret2y": -12.86,
      "ret3y": 30.68
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.75,
      "ret1w": 5.24,
      "ret1m": -3.6,
      "ret3m": -25.47,
      "ret6m": -48.56,
      "ret1y": -44.37,
      "ret2y": -14.4,
      "ret3y": 27.32
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9297,
      "ret1w": 0.31,
      "ret1m": -0.02,
      "ret3m": 2.59,
      "ret6m": 6.15,
      "ret1y": -4.83,
      "ret2y": 1.71,
      "ret3y": 9.36
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.602,
      "ret1w": 3.04,
      "ret1m": 4.84,
      "ret3m": -10.9,
      "ret6m": -8.18,
      "ret1y": -5.21,
      "ret2y": 12.27,
      "ret3y": 65.19
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.2658,
      "ret1w": 2.62,
      "ret1m": 3.48,
      "ret3m": -28.14,
      "ret6m": -4.42,
      "ret1y": 35.48,
      "ret2y": 91.32,
      "ret3y": 193.95
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5251,
      "ret1w": 0.63,
      "ret1m": -0.43,
      "ret3m": 5.68,
      "ret6m": -7.74,
      "ret1y": -12.41,
      "ret2y": -4.05,
      "ret3y": 20.4
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.019,
      "ret1w": 3.24,
      "ret1m": -0.39,
      "ret3m": -7.95,
      "ret6m": 1.8,
      "ret1y": 0.59,
      "ret2y": -11.08,
      "ret3y": 1.9
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3412,
      "ret1w": -0.26,
      "ret1m": -1.5,
      "ret3m": 6.47,
      "ret6m": -4.33,
      "ret1y": -8.95,
      "ret2y": 9.86,
      "ret3y": 15.68
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2743,
      "ret1w": 2.47,
      "ret1m": 3.4,
      "ret3m": -3.78,
      "ret6m": -2.02,
      "ret1y": -0.97,
      "ret2y": 21.89,
      "ret3y": 71.79
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2867,
      "ret1w": 2.21,
      "ret1m": 2.87,
      "ret3m": -12.7,
      "ret6m": -5.33,
      "ret1y": 1.6,
      "ret2y": 30.35,
      "ret3y": 45.65
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3682,
      "ret1w": 2.2,
      "ret1m": 2.87,
      "ret3m": -12.67,
      "ret6m": -5.25,
      "ret1y": 1.79,
      "ret2y": 30.85,
      "ret3y": 46.82
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.1019,
      "ret1w": -0.06,
      "ret1m": 0.05,
      "ret3m": -0.54,
      "ret6m": 0.8,
      "ret1y": 2.39,
      "ret2y": 3.37,
      "ret3y": 9.79
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0742,
      "ret1w": -0.06,
      "ret1m": 0.07,
      "ret3m": -0.48,
      "ret6m": 0.96,
      "ret1y": 2.7,
      "ret2y": 4.0,
      "ret3y": 11.13
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7329,
      "ret1w": 0.3,
      "ret1m": -0.56,
      "ret3m": 0.65,
      "ret6m": -9.27,
      "ret1y": -14.24,
      "ret2y": -2.68,
      "ret3y": 15.82
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7512,
      "ret1w": 0.31,
      "ret1m": -0.54,
      "ret3m": 0.7,
      "ret6m": -9.14,
      "ret1y": -14.02,
      "ret2y": -2.19,
      "ret3y": 16.99
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7359,
      "ret1w": 1.59,
      "ret1m": 3.9,
      "ret3m": -14.68,
      "ret6m": 6.89,
      "ret1y": 36.49,
      "ret2y": 103.96,
      "ret3y": 157.35
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5123,
      "ret1w": 2.45,
      "ret1m": 1.52,
      "ret3m": -7.11,
      "ret6m": -1.19,
      "ret1y": 4.68,
      "ret2y": 42.05,
      "ret3y": 84.11
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.74,
      "ret1w": 2.37,
      "ret1m": 1.11,
      "ret3m": -9.3,
      "ret6m": -15.85,
      "ret1y": -15.41,
      "ret2y": -0.64,
      "ret3y": 17.09
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1539,
      "ret1w": 3.66,
      "ret1m": 1.04,
      "ret3m": -14.45,
      "ret6m": 5.54,
      "ret1y": 21.14,
      "ret2y": 68.05,
      "ret3y": 139.38
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5228,
      "ret1w": 0.36,
      "ret1m": -1.51,
      "ret3m": -15.32,
      "ret6m": 0.73,
      "ret1y": 6.07,
      "ret2y": 31.06,
      "ret3y": 52.46
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5326,
      "ret1w": 0.36,
      "ret1m": -1.52,
      "ret3m": -15.3,
      "ret6m": 0.83,
      "ret1y": 6.26,
      "ret2y": 31.57,
      "ret3y": 53.66
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2724,
      "ret1w": 0.17,
      "ret1m": -0.42,
      "ret3m": 2.5,
      "ret6m": -1.65,
      "ret1y": -1.41,
      "ret2y": -1.07,
      "ret3y": 0.58
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1479,
      "ret1w": 0.44,
      "ret1m": -0.04,
      "ret3m": 0.93,
      "ret6m": -0.17,
      "ret1y": -6.26,
      "ret2y": 6.24,
      "ret3y": 23.58
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4299,
      "ret1w": 0.98,
      "ret1m": 3.19,
      "ret3m": -13.33,
      "ret6m": -9.55,
      "ret1y": 0.8,
      "ret2y": -3.06,
      "ret3y": 16.98
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9787,
      "ret1w": -0.11,
      "ret1m": 0.23,
      "ret3m": 2.05,
      "ret6m": -8.68,
      "ret1y": -6.41,
      "ret2y": 21.76,
      "ret3y": 41.93
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.339,
      "ret1w": 0.78,
      "ret1m": -1.21,
      "ret3m": -23.8,
      "ret6m": -6.5,
      "ret1y": 46.06,
      "ret2y": 144.79,
      "ret3y": 201.9
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4692,
      "ret1w": -1.05,
      "ret1m": -1.9,
      "ret3m": 5.4,
      "ret6m": -1.75,
      "ret1y": -0.69,
      "ret2y": -2.55,
      "ret3y": 8.12
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6311,
      "ret1w": 4.09,
      "ret1m": 9.57,
      "ret3m": -26.57,
      "ret6m": -10.38,
      "ret1y": -10.9,
      "ret2y": 7.88,
      "ret3y": 40.46
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.167,
      "ret1w": 3.46,
      "ret1m": 8.67,
      "ret3m": -19.18,
      "ret6m": 25.66,
      "ret1y": 69.83,
      "ret2y": 197.44,
      "ret3y": 348.04
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0666,
      "ret1w": 0.07,
      "ret1m": 0.23,
      "ret3m": -1.09,
      "ret6m": -0.13,
      "ret1y": 0.2,
      "ret2y": 1.67,
      "ret3y": 4.6
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1149,
      "ret1w": 0.06,
      "ret1m": 0.23,
      "ret3m": -1.07,
      "ret6m": -0.07,
      "ret1y": 0.31,
      "ret2y": 1.97,
      "ret3y": 5.33
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0636,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.16,
      "ret6m": 0.31,
      "ret1y": 0.78,
      "ret2y": 1.37,
      "ret3y": 2.58
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0977,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.11,
      "ret6m": 0.35,
      "ret1y": 0.8,
      "ret2y": 1.46,
      "ret3y": 3.77
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1069,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.4,
      "ret1y": 0.89,
      "ret2y": 1.65,
      "ret3y": 4.2
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0752,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.21,
      "ret6m": 0.33,
      "ret1y": 0.74,
      "ret2y": 1.22,
      "ret3y": 2.59
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0894,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.23,
      "ret6m": 0.41,
      "ret1y": 0.89,
      "ret2y": 1.55,
      "ret3y": 3.24
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0633,
      "ret1w": 0.71,
      "ret1m": 0.82,
      "ret3m": -3.77,
      "ret6m": -1.55,
      "ret1y": 1.63,
      "ret2y": 8.71,
      "ret3y": 12.19
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2087,
      "ret1w": 0.88,
      "ret1m": 1.16,
      "ret3m": -4.71,
      "ret6m": -2.68,
      "ret1y": -0.93,
      "ret2y": 1.6,
      "ret3y": 6.07
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0697,
      "ret1w": 0.72,
      "ret1m": 0.82,
      "ret3m": -3.73,
      "ret6m": -1.44,
      "ret1y": 1.83,
      "ret2y": 9.15,
      "ret3y": 13.1
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.39,
      "ret1y": 0.85,
      "ret2y": 1.61,
      "ret3y": 3.44
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1668,
      "ret1w": -0.05,
      "ret1m": 0.29,
      "ret3m": -3.0,
      "ret6m": -3.7,
      "ret1y": -2.91,
      "ret2y": 2.33,
      "ret3y": 9.51
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.221,
      "ret1w": 0.18,
      "ret1m": 0.16,
      "ret3m": -0.53,
      "ret6m": -0.82,
      "ret1y": 0.63,
      "ret2y": 6.35,
      "ret3y": 15.15
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1363,
      "ret1w": 0.5,
      "ret1m": 0.53,
      "ret3m": -2.36,
      "ret6m": -0.46,
      "ret1y": 0.78,
      "ret2y": 5.34,
      "ret3y": 9.62
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2072,
      "ret1w": 0.5,
      "ret1m": 0.54,
      "ret3m": -2.33,
      "ret6m": -0.36,
      "ret1y": 0.98,
      "ret2y": 5.77,
      "ret3y": 10.54
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.327,
      "ret1w": 4.3,
      "ret1m": 11.45,
      "ret3m": -7.03,
      "ret6m": 11.71,
      "ret1y": 45.8,
      "ret2y": 93.92,
      "ret3y": 154.32
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9892,
      "ret1w": 1.4,
      "ret1m": 3.74,
      "ret3m": 3.31,
      "ret6m": 4.2,
      "ret1y": 7.22,
      "ret2y": 15.2,
      "ret3y": 40.48
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8888,
      "ret1w": 0.6,
      "ret1m": 0.92,
      "ret3m": -6.33,
      "ret6m": -10.8,
      "ret1y": -5.56,
      "ret2y": 12.79,
      "ret3y": 60.34
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3055,
      "ret1w": 4.02,
      "ret1m": 7.63,
      "ret3m": -2.7,
      "ret6m": 7.37,
      "ret1y": 17.99,
      "ret2y": 27.16,
      "ret3y": 82.76
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9395,
      "ret1w": 0.28,
      "ret1m": 0.05,
      "ret3m": -0.41,
      "ret6m": -1.11,
      "ret1y": -2.05,
      "ret2y": -3.22,
      "ret3y": -1.51
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6771,
      "ret1w": 3.57,
      "ret1m": 8.88,
      "ret3m": -4.66,
      "ret6m": 8.61,
      "ret1y": 31.64,
      "ret2y": 60.52,
      "ret3y": 111.46
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.619,
      "ret1w": 1.16,
      "ret1m": 2.9,
      "ret3m": -0.84,
      "ret6m": 2.67,
      "ret1y": 3.38,
      "ret2y": 8.1,
      "ret3y": 28.66
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.181,
      "ret1w": 1.37,
      "ret1m": -1.01,
      "ret3m": -2.48,
      "ret6m": -13.1,
      "ret1y": -9.29,
      "ret2y": -14.85,
      "ret3y": 113.56
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.902,
      "ret1w": 2.15,
      "ret1m": -0.77,
      "ret3m": -8.52,
      "ret6m": -17.02,
      "ret1y": -16.48,
      "ret2y": -20.88,
      "ret3y": 39.84
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8294,
      "ret1w": 3.0,
      "ret1m": 8.74,
      "ret3m": -9.42,
      "ret6m": 8.01,
      "ret1y": 36.99,
      "ret2y": 94.8,
      "ret3y": 144.97
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4716,
      "ret1w": 0.75,
      "ret1m": 3.77,
      "ret3m": 6.25,
      "ret6m": -4.7,
      "ret1y": -1.25,
      "ret2y": 36.02,
      "ret3y": 46.75
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6848,
      "ret1w": 0.14,
      "ret1m": 3.87,
      "ret3m": -1.83,
      "ret6m": 5.62,
      "ret1y": 7.66,
      "ret2y": 30.58,
      "ret3y": 59.32
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2858,
      "ret1w": 0.54,
      "ret1m": 4.48,
      "ret3m": -3.33,
      "ret6m": 1.04,
      "ret1y": 2.02,
      "ret2y": 19.14,
      "ret3y": 40.2
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.331,
      "ret1w": -0.08,
      "ret1m": -1.84,
      "ret3m": 0.15,
      "ret6m": 0.76,
      "ret1y": 7.69,
      "ret2y": 7.08,
      "ret3y": -2.99
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.963,
      "ret1w": 0.77,
      "ret1m": 1.08,
      "ret3m": -1.8,
      "ret6m": -12.41,
      "ret1y": -18.92,
      "ret2y": 12.11,
      "ret3y": 48.91
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0094,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.17,
      "ret6m": 0.59,
      "ret1y": 1.44,
      "ret2y": 1.59,
      "ret3y": 3.33
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0082,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.13,
      "ret6m": 0.57,
      "ret1y": 1.45,
      "ret2y": 1.65,
      "ret3y": 3.5
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.458,
      "ret1w": 1.18,
      "ret1m": 1.82,
      "ret3m": -5.87,
      "ret6m": -3.76,
      "ret1y": 1.67,
      "ret2y": 16.45,
      "ret3y": 38.07
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.875,
      "ret1w": 1.88,
      "ret1m": 3.49,
      "ret3m": -7.59,
      "ret6m": -3.65,
      "ret1y": 3.27,
      "ret2y": 29.62,
      "ret3y": 64.57
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6576,
      "ret1w": 3.87,
      "ret1m": 4.09,
      "ret3m": -0.33,
      "ret6m": -9.22,
      "ret1y": -7.88,
      "ret2y": 42.97,
      "ret3y": 69.32
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1385,
      "ret1w": 1.22,
      "ret1m": 1.13,
      "ret3m": -4.6,
      "ret6m": -1.2,
      "ret1y": 4.33,
      "ret2y": 19.3,
      "ret3y": 43.62
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.199,
      "ret1w": 1.22,
      "ret1m": 1.14,
      "ret3m": -4.57,
      "ret6m": -1.1,
      "ret1y": 4.54,
      "ret2y": 19.78,
      "ret3y": 44.78
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0157,
      "ret1w": 2.52,
      "ret1m": 3.59,
      "ret3m": -10.09,
      "ret6m": -5.6,
      "ret1y": -3.37,
      "ret2y": 23.59,
      "ret3y": 65.1
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8155,
      "ret1w": 1.17,
      "ret1m": 1.22,
      "ret3m": -3.26,
      "ret6m": -2.23,
      "ret1y": 0.58,
      "ret2y": 13.98,
      "ret3y": 40.85
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5938,
      "ret1w": 1.04,
      "ret1m": 1.23,
      "ret3m": -2.21,
      "ret6m": -5.09,
      "ret1y": -3.32,
      "ret2y": 20.66,
      "ret3y": 56.67
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.033,
      "ret1w": 2.01,
      "ret1m": 2.32,
      "ret3m": -10.86,
      "ret6m": 0.63,
      "ret1y": 13.04,
      "ret2y": 40.8,
      "ret3y": 82.51
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1695,
      "ret1w": 0.7,
      "ret1m": -0.27,
      "ret3m": 6.52,
      "ret6m": -2.38,
      "ret1y": -1.55,
      "ret2y": 9.48,
      "ret3y": 30.77
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5218,
      "ret1w": -0.12,
      "ret1m": 0.85,
      "ret3m": 2.03,
      "ret6m": 2.86,
      "ret1y": 1.49,
      "ret2y": 15.06,
      "ret3y": 34.72
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4776,
      "ret1w": 3.05,
      "ret1m": 6.47,
      "ret3m": 1.11,
      "ret6m": 6.62,
      "ret1y": 15.77,
      "ret2y": 19.56,
      "ret3y": 48.01
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8388,
      "ret1w": 0.85,
      "ret1m": 2.16,
      "ret3m": -6.35,
      "ret6m": -3.74,
      "ret1y": 6.43,
      "ret2y": 28.25,
      "ret3y": 63.15
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1092,
      "ret1w": -1.2,
      "ret1m": -6.4,
      "ret3m": -16.27,
      "ret6m": -9.58,
      "ret1y": -6.45,
      "ret2y": 16.15,
      "ret3y": 40.16
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1109,
      "ret1w": -1.19,
      "ret1m": -6.39,
      "ret3m": -16.24,
      "ret6m": -9.57,
      "ret1y": -6.46,
      "ret2y": 15.35,
      "ret3y": 39.72
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3614,
      "ret1w": 2.48,
      "ret1m": -0.1,
      "ret3m": -13.2,
      "ret6m": -10.69,
      "ret1y": -8.16,
      "ret2y": 7.72,
      "ret3y": 34.62
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3921,
      "ret1w": 2.47,
      "ret1m": -0.1,
      "ret3m": -13.17,
      "ret6m": -10.59,
      "ret1y": -7.97,
      "ret2y": 8.16,
      "ret3y": 35.7
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.962,
      "ret1w": 1.99,
      "ret1m": -4.19,
      "ret3m": -21.16,
      "ret6m": -8.26,
      "ret1y": -3.9,
      "ret2y": 19.43,
      "ret3y": 55.9
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.171,
      "ret1w": 0.11,
      "ret1m": 0.32,
      "ret3m": 0.19,
      "ret6m": 0.22,
      "ret1y": 0.39,
      "ret2y": 2.61,
      "ret3y": 7.84
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1907,
      "ret1w": 0.11,
      "ret1m": 0.32,
      "ret3m": 0.21,
      "ret6m": 0.3,
      "ret1y": 0.53,
      "ret2y": 2.92,
      "ret3y": 8.49
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0833,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.18,
      "ret6m": 0.4,
      "ret1y": 0.93,
      "ret2y": 1.68,
      "ret3y": 3.17
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4115,
      "ret1w": -0.01,
      "ret1m": 0.06,
      "ret3m": 0.13,
      "ret6m": 0.12,
      "ret1y": 0.26,
      "ret2y": 0.79,
      "ret3y": 10.2
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4633,
      "ret1w": -0.01,
      "ret1m": 0.07,
      "ret3m": 0.17,
      "ret6m": 0.23,
      "ret1y": 0.45,
      "ret2y": 1.18,
      "ret3y": 11.08
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1377,
      "ret1w": 1.11,
      "ret1m": 2.3,
      "ret3m": -2.61,
      "ret6m": 10.42,
      "ret1y": 13.09,
      "ret2y": 32.52,
      "ret3y": 68.61
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2666,
      "ret1w": 0.98,
      "ret1m": 1.51,
      "ret3m": -0.59,
      "ret6m": 3.29,
      "ret1y": 6.99,
      "ret2y": 16.2,
      "ret3y": 51.94
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-07-09",
        "nav": 5.1592
      },
      {
        "date": "2026-07-10",
        "nav": 5.0568
      },
      {
        "date": "2026-07-13",
        "nav": 4.7776
      },
      {
        "date": "2026-07-14",
        "nav": 4.8676
      },
      {
        "date": "2026-07-15",
        "nav": 4.7313
      },
      {
        "date": "2026-07-16",
        "nav": 4.6216
      },
      {
        "date": "2026-07-17",
        "nav": 4.2704
      },
      {
        "date": "2026-07-20",
        "nav": 4.0514
      },
      {
        "date": "2026-07-21",
        "nav": 4.2649
      },
      {
        "date": "2026-07-22",
        "nav": 4.198
      },
      {
        "date": "2026-07-23",
        "nav": 4.1715
      },
      {
        "date": "2026-07-24",
        "nav": 4.0696
      },
      {
        "date": "2026-07-27",
        "nav": 4.2369
      },
      {
        "date": "2026-07-28",
        "nav": 3.978
      },
      {
        "date": "2026-07-29",
        "nav": 3.9157
      },
      {
        "date": "2026-07-30",
        "nav": 3.636
      },
      {
        "date": "2026-07-31",
        "nav": 3.793
      },
      {
        "date": "2026-08-03",
        "nav": 3.7885
      },
      {
        "date": "2026-08-04",
        "nav": 4.0128
      },
      {
        "date": "2026-08-05",
        "nav": 4.2314
      }
    ],
    "580008": [
      {
        "date": "2026-07-09",
        "nav": 4.8515
      },
      {
        "date": "2026-07-10",
        "nav": 4.6586
      },
      {
        "date": "2026-07-13",
        "nav": 4.5423
      },
      {
        "date": "2026-07-14",
        "nav": 4.7534
      },
      {
        "date": "2026-07-15",
        "nav": 4.6678
      },
      {
        "date": "2026-07-16",
        "nav": 4.5904
      },
      {
        "date": "2026-07-17",
        "nav": 4.2425
      },
      {
        "date": "2026-07-20",
        "nav": 4.2068
      },
      {
        "date": "2026-07-21",
        "nav": 4.4867
      },
      {
        "date": "2026-07-22",
        "nav": 4.3302
      },
      {
        "date": "2026-07-23",
        "nav": 4.3219
      },
      {
        "date": "2026-07-24",
        "nav": 4.2422
      },
      {
        "date": "2026-07-27",
        "nav": 4.3954
      },
      {
        "date": "2026-07-28",
        "nav": 4.0434
      },
      {
        "date": "2026-07-29",
        "nav": 4.0647
      },
      {
        "date": "2026-07-30",
        "nav": 3.7703
      },
      {
        "date": "2026-07-31",
        "nav": 3.9011
      },
      {
        "date": "2026-08-03",
        "nav": 3.8217
      },
      {
        "date": "2026-08-04",
        "nav": 4.069
      },
      {
        "date": "2026-08-05",
        "nav": 4.1625
      }
    ],
    "540010": [
      {
        "date": "2026-07-09",
        "nav": 6.203
      },
      {
        "date": "2026-07-10",
        "nav": 5.9455
      },
      {
        "date": "2026-07-13",
        "nav": 5.6656
      },
      {
        "date": "2026-07-14",
        "nav": 6.0401
      },
      {
        "date": "2026-07-15",
        "nav": 5.8833
      },
      {
        "date": "2026-07-16",
        "nav": 5.6614
      },
      {
        "date": "2026-07-17",
        "nav": 5.0366
      },
      {
        "date": "2026-07-20",
        "nav": 4.7826
      },
      {
        "date": "2026-07-21",
        "nav": 5.2434
      },
      {
        "date": "2026-07-22",
        "nav": 5.0397
      },
      {
        "date": "2026-07-23",
        "nav": 4.9743
      },
      {
        "date": "2026-07-24",
        "nav": 4.8552
      },
      {
        "date": "2026-07-27",
        "nav": 5.0118
      },
      {
        "date": "2026-07-28",
        "nav": 4.4468
      },
      {
        "date": "2026-07-29",
        "nav": 4.4108
      },
      {
        "date": "2026-07-30",
        "nav": 3.9689
      },
      {
        "date": "2026-07-31",
        "nav": 4.1872
      },
      {
        "date": "2026-08-03",
        "nav": 4.2423
      },
      {
        "date": "2026-08-04",
        "nav": 4.7468
      },
      {
        "date": "2026-08-05",
        "nav": 4.7803
      }
    ],
    "540009": [
      {
        "date": "2026-07-09",
        "nav": 0.6553
      },
      {
        "date": "2026-07-10",
        "nav": 0.6633
      },
      {
        "date": "2026-07-13",
        "nav": 0.6628
      },
      {
        "date": "2026-07-14",
        "nav": 0.6683
      },
      {
        "date": "2026-07-15",
        "nav": 0.6887
      },
      {
        "date": "2026-07-16",
        "nav": 0.6928
      },
      {
        "date": "2026-07-17",
        "nav": 0.6826
      },
      {
        "date": "2026-07-20",
        "nav": 0.7002
      },
      {
        "date": "2026-07-21",
        "nav": 0.6984
      },
      {
        "date": "2026-07-22",
        "nav": 0.7036
      },
      {
        "date": "2026-07-23",
        "nav": 0.7045
      },
      {
        "date": "2026-07-24",
        "nav": 0.6953
      },
      {
        "date": "2026-07-27",
        "nav": 0.7098
      },
      {
        "date": "2026-07-28",
        "nav": 0.7217
      },
      {
        "date": "2026-07-29",
        "nav": 0.7301
      },
      {
        "date": "2026-07-30",
        "nav": 0.7426
      },
      {
        "date": "2026-07-31",
        "nav": 0.7418
      },
      {
        "date": "2026-08-03",
        "nav": 0.7354
      },
      {
        "date": "2026-08-04",
        "nav": 0.7205
      },
      {
        "date": "2026-08-05",
        "nav": 0.7186
      }
    ],
    "540008": [
      {
        "date": "2026-07-09",
        "nav": 2.1506
      },
      {
        "date": "2026-07-10",
        "nav": 2.1811
      },
      {
        "date": "2026-07-13",
        "nav": 2.0534
      },
      {
        "date": "2026-07-14",
        "nav": 2.0596
      },
      {
        "date": "2026-07-15",
        "nav": 2.0975
      },
      {
        "date": "2026-07-16",
        "nav": 2.0867
      },
      {
        "date": "2026-07-17",
        "nav": 2.0512
      },
      {
        "date": "2026-07-20",
        "nav": 2.0782
      },
      {
        "date": "2026-07-21",
        "nav": 2.1083
      },
      {
        "date": "2026-07-22",
        "nav": 2.1399
      },
      {
        "date": "2026-07-23",
        "nav": 2.1907
      },
      {
        "date": "2026-07-24",
        "nav": 2.1048
      },
      {
        "date": "2026-07-27",
        "nav": 2.1442
      },
      {
        "date": "2026-07-28",
        "nav": 2.1403
      },
      {
        "date": "2026-07-29",
        "nav": 2.1834
      },
      {
        "date": "2026-07-30",
        "nav": 2.2145
      },
      {
        "date": "2026-07-31",
        "nav": 2.2136
      },
      {
        "date": "2026-08-03",
        "nav": 2.3108
      },
      {
        "date": "2026-08-04",
        "nav": 2.3048
      },
      {
        "date": "2026-08-05",
        "nav": 2.3089
      }
    ],
    "540007": [
      {
        "date": "2026-07-09",
        "nav": 2.6197
      },
      {
        "date": "2026-07-10",
        "nav": 2.676
      },
      {
        "date": "2026-07-13",
        "nav": 2.5755
      },
      {
        "date": "2026-07-14",
        "nav": 2.6134
      },
      {
        "date": "2026-07-15",
        "nav": 2.6212
      },
      {
        "date": "2026-07-16",
        "nav": 2.5871
      },
      {
        "date": "2026-07-17",
        "nav": 2.5324
      },
      {
        "date": "2026-07-20",
        "nav": 2.5288
      },
      {
        "date": "2026-07-21",
        "nav": 2.5587
      },
      {
        "date": "2026-07-22",
        "nav": 2.6094
      },
      {
        "date": "2026-07-23",
        "nav": 2.6957
      },
      {
        "date": "2026-07-24",
        "nav": 2.6064
      },
      {
        "date": "2026-07-27",
        "nav": 2.6953
      },
      {
        "date": "2026-07-28",
        "nav": 2.7001
      },
      {
        "date": "2026-07-29",
        "nav": 2.7386
      },
      {
        "date": "2026-07-30",
        "nav": 2.7503
      },
      {
        "date": "2026-07-31",
        "nav": 2.7661
      },
      {
        "date": "2026-08-03",
        "nav": 2.8104
      },
      {
        "date": "2026-08-04",
        "nav": 2.7921
      },
      {
        "date": "2026-08-05",
        "nav": 2.8475
      }
    ],
    "540006": [
      {
        "date": "2026-07-09",
        "nav": 5.1217
      },
      {
        "date": "2026-07-10",
        "nav": 5.1429
      },
      {
        "date": "2026-07-13",
        "nav": 5.0998
      },
      {
        "date": "2026-07-14",
        "nav": 5.2032
      },
      {
        "date": "2026-07-15",
        "nav": 5.3149
      },
      {
        "date": "2026-07-16",
        "nav": 5.3047
      },
      {
        "date": "2026-07-17",
        "nav": 5.2407
      },
      {
        "date": "2026-07-20",
        "nav": 5.3892
      },
      {
        "date": "2026-07-21",
        "nav": 5.4281
      },
      {
        "date": "2026-07-22",
        "nav": 5.4655
      },
      {
        "date": "2026-07-23",
        "nav": 5.5301
      },
      {
        "date": "2026-07-24",
        "nav": 5.4199
      },
      {
        "date": "2026-07-27",
        "nav": 5.4908
      },
      {
        "date": "2026-07-28",
        "nav": 5.5082
      },
      {
        "date": "2026-07-29",
        "nav": 5.619
      },
      {
        "date": "2026-07-30",
        "nav": 5.6475
      },
      {
        "date": "2026-07-31",
        "nav": 5.6074
      },
      {
        "date": "2026-08-03",
        "nav": 5.5725
      },
      {
        "date": "2026-08-04",
        "nav": 5.5149
      },
      {
        "date": "2026-08-05",
        "nav": 5.5498
      }
    ],
    "519975": [
      {
        "date": "2026-07-09",
        "nav": 2.081
      },
      {
        "date": "2026-07-10",
        "nav": 2.066
      },
      {
        "date": "2026-07-13",
        "nav": 1.941
      },
      {
        "date": "2026-07-14",
        "nav": 1.989
      },
      {
        "date": "2026-07-15",
        "nav": 1.964
      },
      {
        "date": "2026-07-16",
        "nav": 1.902
      },
      {
        "date": "2026-07-17",
        "nav": 1.781
      },
      {
        "date": "2026-07-20",
        "nav": 1.722
      },
      {
        "date": "2026-07-21",
        "nav": 1.79
      },
      {
        "date": "2026-07-22",
        "nav": 1.76
      },
      {
        "date": "2026-07-23",
        "nav": 1.79
      },
      {
        "date": "2026-07-24",
        "nav": 1.737
      },
      {
        "date": "2026-07-27",
        "nav": 1.809
      },
      {
        "date": "2026-07-28",
        "nav": 1.758
      },
      {
        "date": "2026-07-29",
        "nav": 1.776
      },
      {
        "date": "2026-07-30",
        "nav": 1.725
      },
      {
        "date": "2026-07-31",
        "nav": 1.765
      },
      {
        "date": "2026-08-03",
        "nav": 1.766
      },
      {
        "date": "2026-08-04",
        "nav": 1.808
      },
      {
        "date": "2026-08-05",
        "nav": 1.864
      }
    ],
    "519965": [
      {
        "date": "2026-07-09",
        "nav": 1.4521
      },
      {
        "date": "2026-07-10",
        "nav": 1.4255
      },
      {
        "date": "2026-07-13",
        "nav": 1.3732
      },
      {
        "date": "2026-07-14",
        "nav": 1.4081
      },
      {
        "date": "2026-07-15",
        "nav": 1.4027
      },
      {
        "date": "2026-07-16",
        "nav": 1.3654
      },
      {
        "date": "2026-07-17",
        "nav": 1.2968
      },
      {
        "date": "2026-07-20",
        "nav": 1.2867
      },
      {
        "date": "2026-07-21",
        "nav": 1.3465
      },
      {
        "date": "2026-07-22",
        "nav": 1.323
      },
      {
        "date": "2026-07-23",
        "nav": 1.3382
      },
      {
        "date": "2026-07-24",
        "nav": 1.3074
      },
      {
        "date": "2026-07-27",
        "nav": 1.3391
      },
      {
        "date": "2026-07-28",
        "nav": 1.2889
      },
      {
        "date": "2026-07-29",
        "nav": 1.3027
      },
      {
        "date": "2026-07-30",
        "nav": 1.2675
      },
      {
        "date": "2026-07-31",
        "nav": 1.2875
      },
      {
        "date": "2026-08-03",
        "nav": 1.2784
      },
      {
        "date": "2026-08-04",
        "nav": 1.315
      },
      {
        "date": "2026-08-05",
        "nav": 1.3471
      }
    ],
    "519935": [
      {
        "date": "2026-07-09",
        "nav": 4.226
      },
      {
        "date": "2026-07-10",
        "nav": 4.003
      },
      {
        "date": "2026-07-13",
        "nav": 3.854
      },
      {
        "date": "2026-07-14",
        "nav": 3.969
      },
      {
        "date": "2026-07-15",
        "nav": 3.853
      },
      {
        "date": "2026-07-16",
        "nav": 3.703
      },
      {
        "date": "2026-07-17",
        "nav": 3.423
      },
      {
        "date": "2026-07-20",
        "nav": 3.351
      },
      {
        "date": "2026-07-21",
        "nav": 3.638
      },
      {
        "date": "2026-07-22",
        "nav": 3.622
      },
      {
        "date": "2026-07-23",
        "nav": 3.553
      },
      {
        "date": "2026-07-24",
        "nav": 3.543
      },
      {
        "date": "2026-07-27",
        "nav": 3.586
      },
      {
        "date": "2026-07-28",
        "nav": 3.389
      },
      {
        "date": "2026-07-29",
        "nav": 3.331
      },
      {
        "date": "2026-07-30",
        "nav": 3.145
      },
      {
        "date": "2026-07-31",
        "nav": 3.236
      },
      {
        "date": "2026-08-03",
        "nav": 3.079
      },
      {
        "date": "2026-08-04",
        "nav": 3.23
      },
      {
        "date": "2026-08-05",
        "nav": 3.388
      }
    ],
    "519714": [
      {
        "date": "2026-07-09",
        "nav": 1.004
      },
      {
        "date": "2026-07-10",
        "nav": 1.019
      },
      {
        "date": "2026-07-13",
        "nav": 1.014
      },
      {
        "date": "2026-07-14",
        "nav": 1.024
      },
      {
        "date": "2026-07-15",
        "nav": 1.063
      },
      {
        "date": "2026-07-16",
        "nav": 1.067
      },
      {
        "date": "2026-07-17",
        "nav": 1.043
      },
      {
        "date": "2026-07-20",
        "nav": 1.073
      },
      {
        "date": "2026-07-21",
        "nav": 1.074
      },
      {
        "date": "2026-07-22",
        "nav": 1.072
      },
      {
        "date": "2026-07-23",
        "nav": 1.074
      },
      {
        "date": "2026-07-24",
        "nav": 1.059
      },
      {
        "date": "2026-07-27",
        "nav": 1.077
      },
      {
        "date": "2026-07-28",
        "nav": 1.105
      },
      {
        "date": "2026-07-29",
        "nav": 1.121
      },
      {
        "date": "2026-07-30",
        "nav": 1.132
      },
      {
        "date": "2026-07-31",
        "nav": 1.135
      },
      {
        "date": "2026-08-03",
        "nav": 1.129
      },
      {
        "date": "2026-08-04",
        "nav": 1.12
      },
      {
        "date": "2026-08-05",
        "nav": 1.122
      }
    ],
    "519673": [
      {
        "date": "2026-07-09",
        "nav": 2.189
      },
      {
        "date": "2026-07-10",
        "nav": 2.247
      },
      {
        "date": "2026-07-13",
        "nav": 2.222
      },
      {
        "date": "2026-07-14",
        "nav": 2.256
      },
      {
        "date": "2026-07-15",
        "nav": 2.343
      },
      {
        "date": "2026-07-16",
        "nav": 2.396
      },
      {
        "date": "2026-07-17",
        "nav": 2.254
      },
      {
        "date": "2026-07-20",
        "nav": 2.273
      },
      {
        "date": "2026-07-21",
        "nav": 2.251
      },
      {
        "date": "2026-07-22",
        "nav": 2.262
      },
      {
        "date": "2026-07-23",
        "nav": 2.255
      },
      {
        "date": "2026-07-24",
        "nav": 2.183
      },
      {
        "date": "2026-07-27",
        "nav": 2.262
      },
      {
        "date": "2026-07-28",
        "nav": 2.254
      },
      {
        "date": "2026-07-29",
        "nav": 2.289
      },
      {
        "date": "2026-07-30",
        "nav": 2.265
      },
      {
        "date": "2026-07-31",
        "nav": 2.303
      },
      {
        "date": "2026-08-03",
        "nav": 2.323
      },
      {
        "date": "2026-08-04",
        "nav": 2.356
      },
      {
        "date": "2026-08-05",
        "nav": 2.364
      }
    ],
    "519606": [
      {
        "date": "2026-07-09",
        "nav": 2.4491
      },
      {
        "date": "2026-07-10",
        "nav": 2.2527
      },
      {
        "date": "2026-07-13",
        "nav": 2.1904
      },
      {
        "date": "2026-07-14",
        "nav": 2.2217
      },
      {
        "date": "2026-07-15",
        "nav": 2.1272
      },
      {
        "date": "2026-07-16",
        "nav": 2.0319
      },
      {
        "date": "2026-07-17",
        "nav": 1.8915
      },
      {
        "date": "2026-07-20",
        "nav": 1.8654
      },
      {
        "date": "2026-07-21",
        "nav": 2.0882
      },
      {
        "date": "2026-07-22",
        "nav": 2.0429
      },
      {
        "date": "2026-07-23",
        "nav": 1.9429
      },
      {
        "date": "2026-07-24",
        "nav": 1.957
      },
      {
        "date": "2026-07-27",
        "nav": 1.99
      },
      {
        "date": "2026-07-28",
        "nav": 1.8368
      },
      {
        "date": "2026-07-29",
        "nav": 1.8154
      },
      {
        "date": "2026-07-30",
        "nav": 1.6948
      },
      {
        "date": "2026-07-31",
        "nav": 1.7174
      },
      {
        "date": "2026-08-03",
        "nav": 1.5869
      },
      {
        "date": "2026-08-04",
        "nav": 1.6629
      },
      {
        "date": "2026-08-05",
        "nav": 1.75
      }
    ],
    "519193": [
      {
        "date": "2026-07-09",
        "nav": 1.8657
      },
      {
        "date": "2026-07-10",
        "nav": 1.8628
      },
      {
        "date": "2026-07-13",
        "nav": 1.8503
      },
      {
        "date": "2026-07-14",
        "nav": 1.8689
      },
      {
        "date": "2026-07-15",
        "nav": 1.8981
      },
      {
        "date": "2026-07-16",
        "nav": 1.8833
      },
      {
        "date": "2026-07-17",
        "nav": 1.8578
      },
      {
        "date": "2026-07-20",
        "nav": 1.9066
      },
      {
        "date": "2026-07-21",
        "nav": 1.9134
      },
      {
        "date": "2026-07-22",
        "nav": 1.917
      },
      {
        "date": "2026-07-23",
        "nav": 1.9188
      },
      {
        "date": "2026-07-24",
        "nav": 1.8871
      },
      {
        "date": "2026-07-27",
        "nav": 1.905
      },
      {
        "date": "2026-07-28",
        "nav": 1.9083
      },
      {
        "date": "2026-07-29",
        "nav": 1.93
      },
      {
        "date": "2026-07-30",
        "nav": 1.9521
      },
      {
        "date": "2026-07-31",
        "nav": 1.9477
      },
      {
        "date": "2026-08-03",
        "nav": 1.9405
      },
      {
        "date": "2026-08-04",
        "nav": 1.9238
      },
      {
        "date": "2026-08-05",
        "nav": 1.9297
      }
    ],
    "501219": [
      {
        "date": "2026-07-09",
        "nav": 1.76
      },
      {
        "date": "2026-07-10",
        "nav": 1.7315
      },
      {
        "date": "2026-07-13",
        "nav": 1.6482
      },
      {
        "date": "2026-07-14",
        "nav": 1.6982
      },
      {
        "date": "2026-07-15",
        "nav": 1.6772
      },
      {
        "date": "2026-07-16",
        "nav": 1.6353
      },
      {
        "date": "2026-07-17",
        "nav": 1.5424
      },
      {
        "date": "2026-07-20",
        "nav": 1.5027
      },
      {
        "date": "2026-07-21",
        "nav": 1.5676
      },
      {
        "date": "2026-07-22",
        "nav": 1.5467
      },
      {
        "date": "2026-07-23",
        "nav": 1.5644
      },
      {
        "date": "2026-07-24",
        "nav": 1.5291
      },
      {
        "date": "2026-07-27",
        "nav": 1.5831
      },
      {
        "date": "2026-07-28",
        "nav": 1.5215
      },
      {
        "date": "2026-07-29",
        "nav": 1.5281
      },
      {
        "date": "2026-07-30",
        "nav": 1.4752
      },
      {
        "date": "2026-07-31",
        "nav": 1.5111
      },
      {
        "date": "2026-08-03",
        "nav": 1.504
      },
      {
        "date": "2026-08-04",
        "nav": 1.5547
      },
      {
        "date": "2026-08-05",
        "nav": 1.602
      }
    ],
    "501201": [
      {
        "date": "2026-07-09",
        "nav": 3.2568
      },
      {
        "date": "2026-07-10",
        "nav": 3.0564
      },
      {
        "date": "2026-07-13",
        "nav": 2.9075
      },
      {
        "date": "2026-07-14",
        "nav": 3.0486
      },
      {
        "date": "2026-07-15",
        "nav": 2.9342
      },
      {
        "date": "2026-07-16",
        "nav": 2.7995
      },
      {
        "date": "2026-07-17",
        "nav": 2.5176
      },
      {
        "date": "2026-07-20",
        "nav": 2.4077
      },
      {
        "date": "2026-07-21",
        "nav": 2.6698
      },
      {
        "date": "2026-07-22",
        "nav": 2.5499
      },
      {
        "date": "2026-07-23",
        "nav": 2.471
      },
      {
        "date": "2026-07-24",
        "nav": 2.4365
      },
      {
        "date": "2026-07-27",
        "nav": 2.5114
      },
      {
        "date": "2026-07-28",
        "nav": 2.2211
      },
      {
        "date": "2026-07-29",
        "nav": 2.1896
      },
      {
        "date": "2026-07-30",
        "nav": 1.9926
      },
      {
        "date": "2026-07-31",
        "nav": 2.0934
      },
      {
        "date": "2026-08-03",
        "nav": 2.0164
      },
      {
        "date": "2026-08-04",
        "nav": 2.2079
      },
      {
        "date": "2026-08-05",
        "nav": 2.2658
      }
    ],
    "450009": [
      {
        "date": "2026-07-09",
        "nav": 2.3599
      },
      {
        "date": "2026-07-10",
        "nav": 2.396
      },
      {
        "date": "2026-07-13",
        "nav": 2.3818
      },
      {
        "date": "2026-07-14",
        "nav": 2.4078
      },
      {
        "date": "2026-07-15",
        "nav": 2.4468
      },
      {
        "date": "2026-07-16",
        "nav": 2.4477
      },
      {
        "date": "2026-07-17",
        "nav": 2.4115
      },
      {
        "date": "2026-07-20",
        "nav": 2.4513
      },
      {
        "date": "2026-07-21",
        "nav": 2.4497
      },
      {
        "date": "2026-07-22",
        "nav": 2.4905
      },
      {
        "date": "2026-07-23",
        "nav": 2.4893
      },
      {
        "date": "2026-07-24",
        "nav": 2.4391
      },
      {
        "date": "2026-07-27",
        "nav": 2.4791
      },
      {
        "date": "2026-07-28",
        "nav": 2.4885
      },
      {
        "date": "2026-07-29",
        "nav": 2.5361
      },
      {
        "date": "2026-07-30",
        "nav": 2.5465
      },
      {
        "date": "2026-07-31",
        "nav": 2.5421
      },
      {
        "date": "2026-08-03",
        "nav": 2.5459
      },
      {
        "date": "2026-08-04",
        "nav": 2.5092
      },
      {
        "date": "2026-08-05",
        "nav": 2.5251
      }
    ],
    "399011": [
      {
        "date": "2026-07-09",
        "nav": 1.048
      },
      {
        "date": "2026-07-10",
        "nav": 1.078
      },
      {
        "date": "2026-07-13",
        "nav": 1.064
      },
      {
        "date": "2026-07-14",
        "nav": 1.104
      },
      {
        "date": "2026-07-15",
        "nav": 1.144
      },
      {
        "date": "2026-07-16",
        "nav": 1.125
      },
      {
        "date": "2026-07-17",
        "nav": 1.034
      },
      {
        "date": "2026-07-20",
        "nav": 1.079
      },
      {
        "date": "2026-07-21",
        "nav": 1.095
      },
      {
        "date": "2026-07-22",
        "nav": 1.086
      },
      {
        "date": "2026-07-23",
        "nav": 1.084
      },
      {
        "date": "2026-07-24",
        "nav": 1.037
      },
      {
        "date": "2026-07-27",
        "nav": 1.056
      },
      {
        "date": "2026-07-28",
        "nav": 1.024
      },
      {
        "date": "2026-07-29",
        "nav": 1.023
      },
      {
        "date": "2026-07-30",
        "nav": 0.98
      },
      {
        "date": "2026-07-31",
        "nav": 0.993
      },
      {
        "date": "2026-08-03",
        "nav": 0.957
      },
      {
        "date": "2026-08-04",
        "nav": 0.987
      },
      {
        "date": "2026-08-05",
        "nav": 1.019
      }
    ],
    "376510": [
      {
        "date": "2026-07-09",
        "nav": 2.1888
      },
      {
        "date": "2026-07-10",
        "nav": 2.192
      },
      {
        "date": "2026-07-13",
        "nav": 2.2143
      },
      {
        "date": "2026-07-14",
        "nav": 2.2327
      },
      {
        "date": "2026-07-15",
        "nav": 2.2749
      },
      {
        "date": "2026-07-16",
        "nav": 2.2753
      },
      {
        "date": "2026-07-17",
        "nav": 2.2615
      },
      {
        "date": "2026-07-20",
        "nav": 2.3217
      },
      {
        "date": "2026-07-21",
        "nav": 2.308
      },
      {
        "date": "2026-07-22",
        "nav": 2.3238
      },
      {
        "date": "2026-07-23",
        "nav": 2.3265
      },
      {
        "date": "2026-07-24",
        "nav": 2.306
      },
      {
        "date": "2026-07-27",
        "nav": 2.329
      },
      {
        "date": "2026-07-28",
        "nav": 2.3451
      },
      {
        "date": "2026-07-29",
        "nav": 2.3769
      },
      {
        "date": "2026-07-30",
        "nav": 2.413
      },
      {
        "date": "2026-07-31",
        "nav": 2.3897
      },
      {
        "date": "2026-08-03",
        "nav": 2.3827
      },
      {
        "date": "2026-08-04",
        "nav": 2.3474
      },
      {
        "date": "2026-08-05",
        "nav": 2.3412
      }
    ],
    "360001": [
      {
        "date": "2026-07-09",
        "nav": 1.3136
      },
      {
        "date": "2026-07-10",
        "nav": 1.3095
      },
      {
        "date": "2026-07-13",
        "nav": 1.2726
      },
      {
        "date": "2026-07-14",
        "nav": 1.2903
      },
      {
        "date": "2026-07-15",
        "nav": 1.2796
      },
      {
        "date": "2026-07-16",
        "nav": 1.2585
      },
      {
        "date": "2026-07-17",
        "nav": 1.2074
      },
      {
        "date": "2026-07-20",
        "nav": 1.2025
      },
      {
        "date": "2026-07-21",
        "nav": 1.237
      },
      {
        "date": "2026-07-22",
        "nav": 1.2366
      },
      {
        "date": "2026-07-23",
        "nav": 1.2421
      },
      {
        "date": "2026-07-24",
        "nav": 1.2187
      },
      {
        "date": "2026-07-27",
        "nav": 1.2499
      },
      {
        "date": "2026-07-28",
        "nav": 1.2227
      },
      {
        "date": "2026-07-29",
        "nav": 1.2324
      },
      {
        "date": "2026-07-30",
        "nav": 1.2076
      },
      {
        "date": "2026-07-31",
        "nav": 1.2301
      },
      {
        "date": "2026-08-03",
        "nav": 1.2234
      },
      {
        "date": "2026-08-04",
        "nav": 1.2436
      },
      {
        "date": "2026-08-05",
        "nav": 1.2743
      }
    ],
    "970185": [
      {
        "date": "2026-07-09",
        "nav": 1.4216
      },
      {
        "date": "2026-07-10",
        "nav": 1.3881
      },
      {
        "date": "2026-07-13",
        "nav": 1.3374
      },
      {
        "date": "2026-07-14",
        "nav": 1.3706
      },
      {
        "date": "2026-07-15",
        "nav": 1.3597
      },
      {
        "date": "2026-07-16",
        "nav": 1.3186
      },
      {
        "date": "2026-07-17",
        "nav": 1.2563
      },
      {
        "date": "2026-07-20",
        "nav": 1.2435
      },
      {
        "date": "2026-07-21",
        "nav": 1.306
      },
      {
        "date": "2026-07-22",
        "nav": 1.2814
      },
      {
        "date": "2026-07-23",
        "nav": 1.291
      },
      {
        "date": "2026-07-24",
        "nav": 1.2667
      },
      {
        "date": "2026-07-27",
        "nav": 1.2892
      },
      {
        "date": "2026-07-28",
        "nav": 1.2347
      },
      {
        "date": "2026-07-29",
        "nav": 1.2508
      },
      {
        "date": "2026-07-30",
        "nav": 1.216
      },
      {
        "date": "2026-07-31",
        "nav": 1.2411
      },
      {
        "date": "2026-08-03",
        "nav": 1.2256
      },
      {
        "date": "2026-08-04",
        "nav": 1.2589
      },
      {
        "date": "2026-08-05",
        "nav": 1.2867
      }
    ],
    "970184": [
      {
        "date": "2026-07-09",
        "nav": 1.5113
      },
      {
        "date": "2026-07-10",
        "nav": 1.4757
      },
      {
        "date": "2026-07-13",
        "nav": 1.4218
      },
      {
        "date": "2026-07-14",
        "nav": 1.4571
      },
      {
        "date": "2026-07-15",
        "nav": 1.4456
      },
      {
        "date": "2026-07-16",
        "nav": 1.4019
      },
      {
        "date": "2026-07-17",
        "nav": 1.3356
      },
      {
        "date": "2026-07-20",
        "nav": 1.3221
      },
      {
        "date": "2026-07-21",
        "nav": 1.3885
      },
      {
        "date": "2026-07-22",
        "nav": 1.3624
      },
      {
        "date": "2026-07-23",
        "nav": 1.3726
      },
      {
        "date": "2026-07-24",
        "nav": 1.3469
      },
      {
        "date": "2026-07-27",
        "nav": 1.3709
      },
      {
        "date": "2026-07-28",
        "nav": 1.3129
      },
      {
        "date": "2026-07-29",
        "nav": 1.33
      },
      {
        "date": "2026-07-30",
        "nav": 1.2931
      },
      {
        "date": "2026-07-31",
        "nav": 1.3197
      },
      {
        "date": "2026-08-03",
        "nav": 1.3033
      },
      {
        "date": "2026-08-04",
        "nav": 1.3387
      },
      {
        "date": "2026-08-05",
        "nav": 1.3682
      }
    ],
    "970121": [
      {
        "date": "2026-07-09",
        "nav": 1.1082
      },
      {
        "date": "2026-07-10",
        "nav": 1.1006
      },
      {
        "date": "2026-07-13",
        "nav": 1.0978
      },
      {
        "date": "2026-07-14",
        "nav": 1.1074
      },
      {
        "date": "2026-07-15",
        "nav": 1.1085
      },
      {
        "date": "2026-07-16",
        "nav": 1.1041
      },
      {
        "date": "2026-07-17",
        "nav": 1.0947
      },
      {
        "date": "2026-07-20",
        "nav": 1.0996
      },
      {
        "date": "2026-07-21",
        "nav": 1.1075
      },
      {
        "date": "2026-07-22",
        "nav": 1.104
      },
      {
        "date": "2026-07-23",
        "nav": 1.1066
      },
      {
        "date": "2026-07-24",
        "nav": 1.1019
      },
      {
        "date": "2026-07-27",
        "nav": 1.1071
      },
      {
        "date": "2026-07-28",
        "nav": 1.0959
      },
      {
        "date": "2026-07-29",
        "nav": 1.1014
      },
      {
        "date": "2026-07-30",
        "nav": 1.0989
      },
      {
        "date": "2026-07-31",
        "nav": 1.1007
      },
      {
        "date": "2026-08-03",
        "nav": 1.0985
      },
      {
        "date": "2026-08-04",
        "nav": 1.1026
      },
      {
        "date": "2026-08-05",
        "nav": 1.1019
      }
    ],
    "970119": [
      {
        "date": "2026-07-09",
        "nav": 1.0798
      },
      {
        "date": "2026-07-10",
        "nav": 1.0724
      },
      {
        "date": "2026-07-13",
        "nav": 1.0698
      },
      {
        "date": "2026-07-14",
        "nav": 1.0791
      },
      {
        "date": "2026-07-15",
        "nav": 1.0802
      },
      {
        "date": "2026-07-16",
        "nav": 1.0759
      },
      {
        "date": "2026-07-17",
        "nav": 1.0668
      },
      {
        "date": "2026-07-20",
        "nav": 1.0716
      },
      {
        "date": "2026-07-21",
        "nav": 1.0794
      },
      {
        "date": "2026-07-22",
        "nav": 1.076
      },
      {
        "date": "2026-07-23",
        "nav": 1.0785
      },
      {
        "date": "2026-07-24",
        "nav": 1.0739
      },
      {
        "date": "2026-07-27",
        "nav": 1.0791
      },
      {
        "date": "2026-07-28",
        "nav": 1.0682
      },
      {
        "date": "2026-07-29",
        "nav": 1.0735
      },
      {
        "date": "2026-07-30",
        "nav": 1.0711
      },
      {
        "date": "2026-07-31",
        "nav": 1.0729
      },
      {
        "date": "2026-08-03",
        "nav": 1.0708
      },
      {
        "date": "2026-08-04",
        "nav": 1.0748
      },
      {
        "date": "2026-08-05",
        "nav": 1.0742
      }
    ],
    "970069": [
      {
        "date": "2026-07-09",
        "nav": 0.7119
      },
      {
        "date": "2026-07-10",
        "nav": 0.7147
      },
      {
        "date": "2026-07-13",
        "nav": 0.71
      },
      {
        "date": "2026-07-14",
        "nav": 0.7137
      },
      {
        "date": "2026-07-15",
        "nav": 0.7318
      },
      {
        "date": "2026-07-16",
        "nav": 0.7341
      },
      {
        "date": "2026-07-17",
        "nav": 0.7105
      },
      {
        "date": "2026-07-20",
        "nav": 0.7276
      },
      {
        "date": "2026-07-21",
        "nav": 0.731
      },
      {
        "date": "2026-07-22",
        "nav": 0.7315
      },
      {
        "date": "2026-07-23",
        "nav": 0.7303
      },
      {
        "date": "2026-07-24",
        "nav": 0.7139
      },
      {
        "date": "2026-07-27",
        "nav": 0.7207
      },
      {
        "date": "2026-07-28",
        "nav": 0.7216
      },
      {
        "date": "2026-07-29",
        "nav": 0.737
      },
      {
        "date": "2026-07-30",
        "nav": 0.7388
      },
      {
        "date": "2026-07-31",
        "nav": 0.7406
      },
      {
        "date": "2026-08-03",
        "nav": 0.7346
      },
      {
        "date": "2026-08-04",
        "nav": 0.7307
      },
      {
        "date": "2026-08-05",
        "nav": 0.7329
      }
    ],
    "970067": [
      {
        "date": "2026-07-09",
        "nav": 0.7294
      },
      {
        "date": "2026-07-10",
        "nav": 0.7322
      },
      {
        "date": "2026-07-13",
        "nav": 0.7275
      },
      {
        "date": "2026-07-14",
        "nav": 0.7312
      },
      {
        "date": "2026-07-15",
        "nav": 0.7498
      },
      {
        "date": "2026-07-16",
        "nav": 0.7522
      },
      {
        "date": "2026-07-17",
        "nav": 0.728
      },
      {
        "date": "2026-07-20",
        "nav": 0.7456
      },
      {
        "date": "2026-07-21",
        "nav": 0.749
      },
      {
        "date": "2026-07-22",
        "nav": 0.7496
      },
      {
        "date": "2026-07-23",
        "nav": 0.7483
      },
      {
        "date": "2026-07-24",
        "nav": 0.7315
      },
      {
        "date": "2026-07-27",
        "nav": 0.7385
      },
      {
        "date": "2026-07-28",
        "nav": 0.7395
      },
      {
        "date": "2026-07-29",
        "nav": 0.7553
      },
      {
        "date": "2026-07-30",
        "nav": 0.7572
      },
      {
        "date": "2026-07-31",
        "nav": 0.759
      },
      {
        "date": "2026-08-03",
        "nav": 0.7529
      },
      {
        "date": "2026-08-04",
        "nav": 0.7489
      },
      {
        "date": "2026-08-05",
        "nav": 0.7512
      }
    ],
    "959991": [
      {
        "date": "2026-07-09",
        "nav": 3.3068
      },
      {
        "date": "2026-07-10",
        "nav": 3.1443
      },
      {
        "date": "2026-07-13",
        "nav": 3.0387
      },
      {
        "date": "2026-07-14",
        "nav": 3.2291
      },
      {
        "date": "2026-07-15",
        "nav": 3.1827
      },
      {
        "date": "2026-07-16",
        "nav": 3.1173
      },
      {
        "date": "2026-07-17",
        "nav": 2.8854
      },
      {
        "date": "2026-07-20",
        "nav": 2.7889
      },
      {
        "date": "2026-07-21",
        "nav": 3.0011
      },
      {
        "date": "2026-07-22",
        "nav": 2.8871
      },
      {
        "date": "2026-07-23",
        "nav": 2.8686
      },
      {
        "date": "2026-07-24",
        "nav": 2.7968
      },
      {
        "date": "2026-07-27",
        "nav": 2.9015
      },
      {
        "date": "2026-07-28",
        "nav": 2.6234
      },
      {
        "date": "2026-07-29",
        "nav": 2.6333
      },
      {
        "date": "2026-07-30",
        "nav": 2.4519
      },
      {
        "date": "2026-07-31",
        "nav": 2.5498
      },
      {
        "date": "2026-08-03",
        "nav": 2.5126
      },
      {
        "date": "2026-08-04",
        "nav": 2.693
      },
      {
        "date": "2026-08-05",
        "nav": 2.7359
      }
    ],
    "952099": [
      {
        "date": "2026-07-09",
        "nav": 2.7261
      },
      {
        "date": "2026-07-10",
        "nav": 2.7017
      },
      {
        "date": "2026-07-13",
        "nav": 2.642
      },
      {
        "date": "2026-07-14",
        "nav": 2.6643
      },
      {
        "date": "2026-07-15",
        "nav": 2.6415
      },
      {
        "date": "2026-07-16",
        "nav": 2.5904
      },
      {
        "date": "2026-07-17",
        "nav": 2.4482
      },
      {
        "date": "2026-07-20",
        "nav": 2.4612
      },
      {
        "date": "2026-07-21",
        "nav": 2.5522
      },
      {
        "date": "2026-07-22",
        "nav": 2.5573
      },
      {
        "date": "2026-07-23",
        "nav": 2.531
      },
      {
        "date": "2026-07-24",
        "nav": 2.4911
      },
      {
        "date": "2026-07-27",
        "nav": 2.5238
      },
      {
        "date": "2026-07-28",
        "nav": 2.4587
      },
      {
        "date": "2026-07-29",
        "nav": 2.4748
      },
      {
        "date": "2026-07-30",
        "nav": 2.4019
      },
      {
        "date": "2026-07-31",
        "nav": 2.4398
      },
      {
        "date": "2026-08-03",
        "nav": 2.4132
      },
      {
        "date": "2026-08-04",
        "nav": 2.4523
      },
      {
        "date": "2026-08-05",
        "nav": 2.5123
      }
    ],
    "952035": [
      {
        "date": "2026-07-09",
        "nav": 0.8137
      },
      {
        "date": "2026-07-10",
        "nav": 0.7979
      },
      {
        "date": "2026-07-13",
        "nav": 0.7823
      },
      {
        "date": "2026-07-14",
        "nav": 0.7834
      },
      {
        "date": "2026-07-15",
        "nav": 0.774
      },
      {
        "date": "2026-07-16",
        "nav": 0.762
      },
      {
        "date": "2026-07-17",
        "nav": 0.7261
      },
      {
        "date": "2026-07-20",
        "nav": 0.7192
      },
      {
        "date": "2026-07-21",
        "nav": 0.748
      },
      {
        "date": "2026-07-22",
        "nav": 0.7443
      },
      {
        "date": "2026-07-23",
        "nav": 0.7372
      },
      {
        "date": "2026-07-24",
        "nav": 0.7294
      },
      {
        "date": "2026-07-27",
        "nav": 0.7399
      },
      {
        "date": "2026-07-28",
        "nav": 0.7246
      },
      {
        "date": "2026-07-29",
        "nav": 0.7319
      },
      {
        "date": "2026-07-30",
        "nav": 0.7194
      },
      {
        "date": "2026-07-31",
        "nav": 0.7266
      },
      {
        "date": "2026-08-03",
        "nav": 0.7157
      },
      {
        "date": "2026-08-04",
        "nav": 0.7229
      },
      {
        "date": "2026-08-05",
        "nav": 0.74
      }
    ],
    "952004": [
      {
        "date": "2026-07-09",
        "nav": 5.0246
      },
      {
        "date": "2026-07-10",
        "nav": 4.8878
      },
      {
        "date": "2026-07-13",
        "nav": 4.7671
      },
      {
        "date": "2026-07-14",
        "nav": 4.7921
      },
      {
        "date": "2026-07-15",
        "nav": 4.6447
      },
      {
        "date": "2026-07-16",
        "nav": 4.5289
      },
      {
        "date": "2026-07-17",
        "nav": 4.1827
      },
      {
        "date": "2026-07-20",
        "nav": 4.1324
      },
      {
        "date": "2026-07-21",
        "nav": 4.3896
      },
      {
        "date": "2026-07-22",
        "nav": 4.4299
      },
      {
        "date": "2026-07-23",
        "nav": 4.2645
      },
      {
        "date": "2026-07-24",
        "nav": 4.2571
      },
      {
        "date": "2026-07-27",
        "nav": 4.2966
      },
      {
        "date": "2026-07-28",
        "nav": 4.0934
      },
      {
        "date": "2026-07-29",
        "nav": 4.1112
      },
      {
        "date": "2026-07-30",
        "nav": 3.8507
      },
      {
        "date": "2026-07-31",
        "nav": 3.9912
      },
      {
        "date": "2026-08-03",
        "nav": 3.8827
      },
      {
        "date": "2026-08-04",
        "nav": 4.0073
      },
      {
        "date": "2026-08-05",
        "nav": 4.1539
      }
    ],
    "881007": [
      {
        "date": "2026-07-09",
        "nav": 0.6199
      },
      {
        "date": "2026-07-10",
        "nav": 0.5961
      },
      {
        "date": "2026-07-13",
        "nav": 0.5701
      },
      {
        "date": "2026-07-14",
        "nav": 0.578
      },
      {
        "date": "2026-07-15",
        "nav": 0.5644
      },
      {
        "date": "2026-07-16",
        "nav": 0.552
      },
      {
        "date": "2026-07-17",
        "nav": 0.5323
      },
      {
        "date": "2026-07-20",
        "nav": 0.5321
      },
      {
        "date": "2026-07-21",
        "nav": 0.542
      },
      {
        "date": "2026-07-22",
        "nav": 0.5402
      },
      {
        "date": "2026-07-23",
        "nav": 0.5381
      },
      {
        "date": "2026-07-24",
        "nav": 0.5339
      },
      {
        "date": "2026-07-27",
        "nav": 0.5415
      },
      {
        "date": "2026-07-28",
        "nav": 0.5291
      },
      {
        "date": "2026-07-29",
        "nav": 0.5308
      },
      {
        "date": "2026-07-30",
        "nav": 0.5233
      },
      {
        "date": "2026-07-31",
        "nav": 0.5254
      },
      {
        "date": "2026-08-03",
        "nav": 0.5231
      },
      {
        "date": "2026-08-04",
        "nav": 0.5209
      },
      {
        "date": "2026-08-05",
        "nav": 0.5228
      }
    ],
    "880007": [
      {
        "date": "2026-07-09",
        "nav": 0.6314
      },
      {
        "date": "2026-07-10",
        "nav": 0.6072
      },
      {
        "date": "2026-07-13",
        "nav": 0.5807
      },
      {
        "date": "2026-07-14",
        "nav": 0.5888
      },
      {
        "date": "2026-07-15",
        "nav": 0.5749
      },
      {
        "date": "2026-07-16",
        "nav": 0.5623
      },
      {
        "date": "2026-07-17",
        "nav": 0.5422
      },
      {
        "date": "2026-07-20",
        "nav": 0.542
      },
      {
        "date": "2026-07-21",
        "nav": 0.5522
      },
      {
        "date": "2026-07-22",
        "nav": 0.5503
      },
      {
        "date": "2026-07-23",
        "nav": 0.5482
      },
      {
        "date": "2026-07-24",
        "nav": 0.5439
      },
      {
        "date": "2026-07-27",
        "nav": 0.5516
      },
      {
        "date": "2026-07-28",
        "nav": 0.539
      },
      {
        "date": "2026-07-29",
        "nav": 0.5408
      },
      {
        "date": "2026-07-30",
        "nav": 0.5331
      },
      {
        "date": "2026-07-31",
        "nav": 0.5353
      },
      {
        "date": "2026-08-03",
        "nav": 0.533
      },
      {
        "date": "2026-08-04",
        "nav": 0.5307
      },
      {
        "date": "2026-08-05",
        "nav": 0.5326
      }
    ],
    "770001": [
      {
        "date": "2026-07-09",
        "nav": 1.2393
      },
      {
        "date": "2026-07-10",
        "nav": 1.2356
      },
      {
        "date": "2026-07-13",
        "nav": 1.2377
      },
      {
        "date": "2026-07-14",
        "nav": 1.2547
      },
      {
        "date": "2026-07-15",
        "nav": 1.2615
      },
      {
        "date": "2026-07-16",
        "nav": 1.2486
      },
      {
        "date": "2026-07-17",
        "nav": 1.2356
      },
      {
        "date": "2026-07-20",
        "nav": 1.2552
      },
      {
        "date": "2026-07-21",
        "nav": 1.2574
      },
      {
        "date": "2026-07-22",
        "nav": 1.266
      },
      {
        "date": "2026-07-23",
        "nav": 1.2751
      },
      {
        "date": "2026-07-24",
        "nav": 1.2592
      },
      {
        "date": "2026-07-27",
        "nav": 1.2712
      },
      {
        "date": "2026-07-28",
        "nav": 1.2679
      },
      {
        "date": "2026-07-29",
        "nav": 1.2778
      },
      {
        "date": "2026-07-30",
        "nav": 1.2861
      },
      {
        "date": "2026-07-31",
        "nav": 1.284
      },
      {
        "date": "2026-08-03",
        "nav": 1.2769
      },
      {
        "date": "2026-08-04",
        "nav": 1.2702
      },
      {
        "date": "2026-08-05",
        "nav": 1.2724
      }
    ],
    "762001": [
      {
        "date": "2026-07-09",
        "nav": 1.1348
      },
      {
        "date": "2026-07-10",
        "nav": 1.1306
      },
      {
        "date": "2026-07-13",
        "nav": 1.1294
      },
      {
        "date": "2026-07-14",
        "nav": 1.1396
      },
      {
        "date": "2026-07-15",
        "nav": 1.1476
      },
      {
        "date": "2026-07-16",
        "nav": 1.1437
      },
      {
        "date": "2026-07-17",
        "nav": 1.1218
      },
      {
        "date": "2026-07-20",
        "nav": 1.1416
      },
      {
        "date": "2026-07-21",
        "nav": 1.147
      },
      {
        "date": "2026-07-22",
        "nav": 1.1485
      },
      {
        "date": "2026-07-23",
        "nav": 1.1496
      },
      {
        "date": "2026-07-24",
        "nav": 1.1346
      },
      {
        "date": "2026-07-27",
        "nav": 1.1413
      },
      {
        "date": "2026-07-28",
        "nav": 1.1385
      },
      {
        "date": "2026-07-29",
        "nav": 1.1484
      },
      {
        "date": "2026-07-30",
        "nav": 1.149
      },
      {
        "date": "2026-07-31",
        "nav": 1.1464
      },
      {
        "date": "2026-08-03",
        "nav": 1.1422
      },
      {
        "date": "2026-08-04",
        "nav": 1.1429
      },
      {
        "date": "2026-08-05",
        "nav": 1.1479
      }
    ],
    "750005": [
      {
        "date": "2026-07-09",
        "nav": 1.6369
      },
      {
        "date": "2026-07-10",
        "nav": 1.585
      },
      {
        "date": "2026-07-13",
        "nav": 1.5322
      },
      {
        "date": "2026-07-14",
        "nav": 1.5968
      },
      {
        "date": "2026-07-15",
        "nav": 1.5763
      },
      {
        "date": "2026-07-16",
        "nav": 1.513
      },
      {
        "date": "2026-07-17",
        "nav": 1.414
      },
      {
        "date": "2026-07-20",
        "nav": 1.3755
      },
      {
        "date": "2026-07-21",
        "nav": 1.4454
      },
      {
        "date": "2026-07-22",
        "nav": 1.4003
      },
      {
        "date": "2026-07-23",
        "nav": 1.422
      },
      {
        "date": "2026-07-24",
        "nav": 1.4155
      },
      {
        "date": "2026-07-27",
        "nav": 1.4418
      },
      {
        "date": "2026-07-28",
        "nav": 1.3649
      },
      {
        "date": "2026-07-29",
        "nav": 1.3857
      },
      {
        "date": "2026-07-30",
        "nav": 1.3393
      },
      {
        "date": "2026-07-31",
        "nav": 1.373
      },
      {
        "date": "2026-08-03",
        "nav": 1.3681
      },
      {
        "date": "2026-08-04",
        "nav": 1.416
      },
      {
        "date": "2026-08-05",
        "nav": 1.4299
      }
    ],
    "750001": [
      {
        "date": "2026-07-09",
        "nav": 2.8985
      },
      {
        "date": "2026-07-10",
        "nav": 2.8451
      },
      {
        "date": "2026-07-13",
        "nav": 2.8259
      },
      {
        "date": "2026-07-14",
        "nav": 2.8856
      },
      {
        "date": "2026-07-15",
        "nav": 2.8844
      },
      {
        "date": "2026-07-16",
        "nav": 2.8657
      },
      {
        "date": "2026-07-17",
        "nav": 2.8194
      },
      {
        "date": "2026-07-20",
        "nav": 2.9068
      },
      {
        "date": "2026-07-21",
        "nav": 2.9046
      },
      {
        "date": "2026-07-22",
        "nav": 2.9386
      },
      {
        "date": "2026-07-23",
        "nav": 2.965
      },
      {
        "date": "2026-07-24",
        "nav": 2.9329
      },
      {
        "date": "2026-07-27",
        "nav": 2.9526
      },
      {
        "date": "2026-07-28",
        "nav": 2.9535
      },
      {
        "date": "2026-07-29",
        "nav": 2.972
      },
      {
        "date": "2026-07-30",
        "nav": 3.0058
      },
      {
        "date": "2026-07-31",
        "nav": 3.0021
      },
      {
        "date": "2026-08-03",
        "nav": 2.9943
      },
      {
        "date": "2026-08-04",
        "nav": 2.9821
      },
      {
        "date": "2026-08-05",
        "nav": 2.9787
      }
    ],
    "740001": [
      {
        "date": "2026-07-09",
        "nav": 4.64
      },
      {
        "date": "2026-07-10",
        "nav": 4.392
      },
      {
        "date": "2026-07-13",
        "nav": 4.263
      },
      {
        "date": "2026-07-14",
        "nav": 4.53
      },
      {
        "date": "2026-07-15",
        "nav": 4.426
      },
      {
        "date": "2026-07-16",
        "nav": 4.302
      },
      {
        "date": "2026-07-17",
        "nav": 3.874
      },
      {
        "date": "2026-07-20",
        "nav": 3.736
      },
      {
        "date": "2026-07-21",
        "nav": 4.075
      },
      {
        "date": "2026-07-22",
        "nav": 3.895
      },
      {
        "date": "2026-07-23",
        "nav": 3.816
      },
      {
        "date": "2026-07-24",
        "nav": 3.732
      },
      {
        "date": "2026-07-27",
        "nav": 3.843
      },
      {
        "date": "2026-07-28",
        "nav": 3.406
      },
      {
        "date": "2026-07-29",
        "nav": 3.38
      },
      {
        "date": "2026-07-30",
        "nav": 3.035
      },
      {
        "date": "2026-07-31",
        "nav": 3.149
      },
      {
        "date": "2026-08-03",
        "nav": 3.094
      },
      {
        "date": "2026-08-04",
        "nav": 3.313
      },
      {
        "date": "2026-08-05",
        "nav": 3.339
      }
    ],
    "730002": [
      {
        "date": "2026-07-09",
        "nav": 1.407
      },
      {
        "date": "2026-07-10",
        "nav": 1.4072
      },
      {
        "date": "2026-07-13",
        "nav": 1.4283
      },
      {
        "date": "2026-07-14",
        "nav": 1.4403
      },
      {
        "date": "2026-07-15",
        "nav": 1.4569
      },
      {
        "date": "2026-07-16",
        "nav": 1.4503
      },
      {
        "date": "2026-07-17",
        "nav": 1.4556
      },
      {
        "date": "2026-07-20",
        "nav": 1.485
      },
      {
        "date": "2026-07-21",
        "nav": 1.4658
      },
      {
        "date": "2026-07-22",
        "nav": 1.4741
      },
      {
        "date": "2026-07-23",
        "nav": 1.4799
      },
      {
        "date": "2026-07-24",
        "nav": 1.472
      },
      {
        "date": "2026-07-27",
        "nav": 1.4744
      },
      {
        "date": "2026-07-28",
        "nav": 1.485
      },
      {
        "date": "2026-07-29",
        "nav": 1.4977
      },
      {
        "date": "2026-07-30",
        "nav": 1.5204
      },
      {
        "date": "2026-07-31",
        "nav": 1.5119
      },
      {
        "date": "2026-08-03",
        "nav": 1.5165
      },
      {
        "date": "2026-08-04",
        "nav": 1.4848
      },
      {
        "date": "2026-08-05",
        "nav": 1.4692
      }
    ],
    "730001": [
      {
        "date": "2026-07-09",
        "nav": 0.7999
      },
      {
        "date": "2026-07-10",
        "nav": 0.8285
      },
      {
        "date": "2026-07-13",
        "nav": 0.7612
      },
      {
        "date": "2026-07-14",
        "nav": 0.721
      },
      {
        "date": "2026-07-15",
        "nav": 0.7089
      },
      {
        "date": "2026-07-16",
        "nav": 0.6748
      },
      {
        "date": "2026-07-17",
        "nav": 0.6142
      },
      {
        "date": "2026-07-20",
        "nav": 0.5783
      },
      {
        "date": "2026-07-21",
        "nav": 0.6089
      },
      {
        "date": "2026-07-22",
        "nav": 0.5946
      },
      {
        "date": "2026-07-23",
        "nav": 0.6036
      },
      {
        "date": "2026-07-24",
        "nav": 0.5829
      },
      {
        "date": "2026-07-27",
        "nav": 0.6061
      },
      {
        "date": "2026-07-28",
        "nav": 0.5795
      },
      {
        "date": "2026-07-29",
        "nav": 0.576
      },
      {
        "date": "2026-07-30",
        "nav": 0.5435
      },
      {
        "date": "2026-07-31",
        "nav": 0.5654
      },
      {
        "date": "2026-08-03",
        "nav": 0.5784
      },
      {
        "date": "2026-08-04",
        "nav": 0.6063
      },
      {
        "date": "2026-08-05",
        "nav": 0.6311
      }
    ],
    "720001": [
      {
        "date": "2026-07-09",
        "nav": 16.902
      },
      {
        "date": "2026-07-10",
        "nav": 16.228
      },
      {
        "date": "2026-07-13",
        "nav": 15.322
      },
      {
        "date": "2026-07-14",
        "nav": 16.703
      },
      {
        "date": "2026-07-15",
        "nav": 16.174
      },
      {
        "date": "2026-07-16",
        "nav": 15.668
      },
      {
        "date": "2026-07-17",
        "nav": 14.338
      },
      {
        "date": "2026-07-20",
        "nav": 13.234
      },
      {
        "date": "2026-07-21",
        "nav": 14.435
      },
      {
        "date": "2026-07-22",
        "nav": 13.752
      },
      {
        "date": "2026-07-23",
        "nav": 13.83
      },
      {
        "date": "2026-07-24",
        "nav": 13.497
      },
      {
        "date": "2026-07-27",
        "nav": 14.17
      },
      {
        "date": "2026-07-28",
        "nav": 12.817
      },
      {
        "date": "2026-07-29",
        "nav": 13.037
      },
      {
        "date": "2026-07-30",
        "nav": 12.287
      },
      {
        "date": "2026-07-31",
        "nav": 12.766
      },
      {
        "date": "2026-08-03",
        "nav": 12.635
      },
      {
        "date": "2026-08-04",
        "nav": 13.693
      },
      {
        "date": "2026-08-05",
        "nav": 14.167
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.4,
      "nav": 4.2314,
      "price": 4.2314,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 4.1625,
      "price": 4.1625,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.42,
      "nav": 4.7803,
      "price": 4.7803,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 0.7186,
      "price": 0.7186,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.29,
      "nav": 2.3089,
      "price": 2.3089,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.2,
      "nav": 2.8475,
      "price": 2.8475,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 5.5498,
      "price": 5.5498,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.25,
      "nav": 1.864,
      "price": 1.864,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 1.3471,
      "price": 1.3471,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 3.388,
      "price": 3.388,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.122,
      "price": 1.122,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 2.364,
      "price": 2.364,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.75,
      "price": 1.75,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.0,
      "nav": 1.9297,
      "price": 1.9297,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.24,
      "nav": 1.602,
      "price": 1.602,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 2.2658,
      "price": 2.2658,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.5251,
      "price": 2.5251,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.019,
      "price": 1.019,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.3412,
      "price": 2.3412,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 1.2743,
      "price": 1.2743,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 12.09,
      "sharpe": -0.14,
      "calmar": -0.14
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.62,
      "sharpe": 1.14,
      "calmar": 1.14
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 12.57,
      "sharpe": 1.7,
      "calmar": 1.7
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.37,
      "sharpe": -1.91,
      "calmar": -1.91
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 8.62,
      "sharpe": -2.16,
      "calmar": -2.16
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 5.97,
      "sharpe": -3.25,
      "calmar": -3.25
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.84,
      "sharpe": -1.02,
      "calmar": -1.02
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 7.43,
      "sharpe": -0.55,
      "calmar": -0.55
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.12,
      "sharpe": 0.16,
      "calmar": 0.16
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.56,
      "sharpe": 5.6,
      "calmar": 5.6
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.14,
      "sharpe": -2.25,
      "calmar": -2.25
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.92,
      "sharpe": -2.16,
      "calmar": -2.16
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 5.4,
      "sharpe": -5.16,
      "calmar": -5.16
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.03,
      "sharpe": -0.96,
      "calmar": -0.96
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.26,
      "sharpe": -0.53,
      "calmar": -0.53
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.22,
      "sharpe": 4.18,
      "calmar": 4.18
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.65,
      "sharpe": -2.29,
      "calmar": -2.29
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.58,
      "sharpe": 0.11,
      "calmar": 0.11
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.25,
      "sharpe": -1.38,
      "calmar": -1.38
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 5.1,
      "sharpe": -0.12,
      "calmar": -0.12
    }
  ],
  "news": [
    {
      "title": "近日，深圳市地方金融管理局局长时卫干做客《民心桥》节目，全面解读“十四五”时期深圳金融业发展成果。同时，该局有关负责人围绕科技金融落地、小额贷款监管、黄金投资风险防范三大群众和市场关切话题作出详细解读，释放多项金融工作部署。“十四五”深圳金融成绩单出炉，多项指标稳居全国前列时卫干在直播中展示了深圳金融业五年跨越式发展硬核数据，城市金融综合实力稳居全国第一梯队。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:12",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者宋薇萍）记者8月5日从长三角生态绿色一体化发展示范区获悉，今年上半年，示范区紧扣“一体化”和“高质量”两个关键词，经济社会发展呈现强劲态势，主要指标亮点纷呈，高质量一体化发展取得显著成效。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:47",
      "impact": "neutral"
    },
    {
      "title": "中新网海口8月5日电(王纯豪谢东良)海口海关5日披露，2026年1-7月海南离岛免税购物金额216亿元，购物人数311.1万人次，购物件数1765.3万件，同比分别增长17.9%、11.9%、6.9%，离岛免税产业延续强劲增长态势。第二十七届海南国际旅游岛欢乐节于7月18日至8月2日在全省展开。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:46",
      "impact": "neutral"
    },
    {
      "title": "1、商务部就对美方系列涉华消极措施实施反制答记者问，中方采取必要的反制措施予以回应，包括：加强无人机及其关键零部件、技术对美出口管制，暂停中国强制性产品认证指定机构委托美认证机构实施的工厂跟踪检查，将美国合规性测试公司列入反制清单，对进口打印复印办公设备发起对外贸易国家安全调查，将6家美国实体列入反制清单等。2、幻方量化多只产品年内收益转负，9只产品7月单月跌幅全部超过20%，最大回撤来自幻方中证500量化进取1号，单月净值下挫22.15%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:32",
      "impact": "neutral"
    },
    {
      "title": "据深圳特区报消息，近日，深圳市商务局印发《深圳市推动直播电商提质增效行动方案（2026—2028年）》（简称《行动方案》），从优化直播电商产业链条、促进产业融合创新发展、推动直播电商国际化业务拓展等五大方面，明确提出17项重点任务，进一步扩大数字消费多元化供给，创新和丰富数字消费场景，拓展数字消费渠道，推动深圳电子商务高质量发展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:32",
      "impact": "neutral"
    },
    {
      "title": "据广东海事局，根据气象部门预测，今年第13号台风“白海豚”将于7日白天穿过琉球群岛后移入东海，向华东沿海靠近，将影响台湾海峡及周边海域。经研究，广东海事局决定于8月6日18时起，对经过台湾海峡南口北上的船舶实施交通管制。海事部门提醒各船舶严格遵守交通管制要求，选择安全水域避风，听从现场海事管理机构指挥，保障海上安全。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:27",
      "impact": "neutral"
    },
    {
      "title": "上期所贵金属期货走强，沪金期货主力合约涨2.90%，报922元/克；沪银期货主力合约涨3.83%，报15276元/千克。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:21",
      "impact": "neutral"
    },
    {
      "title": "一边是五家国有大行5年期大额存单集体返场，一边是多地中小银行密集下调挂牌利率。近期，银行间针对中长期存款的调整出现明显分化。《国际金融报》记者注意到，五家国有大行均上架了5年期大额存单，年化利率最高达到1.62%，额度松紧程度各异。与此同时，浙江、河南、贵州等地中小银行则密集迎来一轮定期存款挂牌利率的下调。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:16",
      "impact": "neutral"
    },
    {
      "title": "宏观动态国内航线燃油附加费今起再次下调据央视新闻从多家航空公司了解到，从今天（5日）起销售的国内航线机票燃油附加费再次下调。调整后的国内航线燃油附加费标准为：800公里以上航线每位成人旅客收取70元燃油附加费，800公里（含）以下航线每位成人旅客收取40元燃油附加费，相较于调整前分别降低了30元和10元。这是今年6月以来第三次下调国内航线燃油附加费，进一步降低旅客出行成本。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:09",
      "impact": "neutral"
    },
    {
      "title": "中新社广州8月5日电(王华沈甸)中国南方电网广东电网公司5日公布，广东省7月全社会用电量突破千亿千瓦时大关，达1007.98亿千瓦时，成为中国内地首个单月用电量突破千亿千瓦时的省份，强劲的电力需求折射出广东经济的韧性与活力。目前，广东电力运行安全有序、供应充足。今年1月至7月广东省全社会用电量达5722.80亿千瓦时，同比增长7.67%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:05",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 56,
    "label": "中性",
    "upDownRatio": "4,776/611",
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
