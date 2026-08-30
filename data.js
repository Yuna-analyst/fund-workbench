// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-30 10:10:23
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-30 10:10 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-28",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3952.18,
      "change": -4.39,
      "changePct": "-0.11%",
      "high": 3970.31,
      "low": 3947.8,
      "volume": 510581645.0,
      "amount": 970365150000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13953.07,
      "change": -95.81,
      "changePct": "-0.68%",
      "high": 14148.68,
      "low": 13949.62,
      "volume": 630346080.0,
      "amount": 1131349870000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3424.4,
      "change": -48.95,
      "changePct": "-1.41%",
      "high": 3521.47,
      "low": 3423.07,
      "volume": 186154222.0,
      "amount": 544255100000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1662.15,
      "change": -31.33,
      "changePct": "-1.85%",
      "high": 1711.99,
      "low": 1661.48,
      "volume": 8005009.0,
      "amount": 85145090000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4609.18,
      "change": -21.1,
      "changePct": "-0.46%",
      "high": 4643.34,
      "low": 4608.46,
      "volume": 180989495.0,
      "amount": 549813480000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7895.45,
      "change": -50.88,
      "changePct": "-0.64%",
      "high": 7986.43,
      "low": 7892.51,
      "volume": 171070479.0,
      "amount": 376303980000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.66万亿",
      "label": "成交额",
      "rawAmount": 3657232670000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,313/1,843",
      "label": "涨/跌家数",
      "rawUp": 2313,
      "rawDown": 1843,
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
    "totalInflow": 9.55,
    "totalOutflow": 0,
    "netFlow": 9.55,
    "netFlowTrend": [
      1.91,
      3.82,
      5.73,
      7.64,
      9.55
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
      "inflow": 2.85,
      "pct": 0.76
    },
    {
      "name": "煤炭",
      "inflow": 2.11,
      "pct": 0.67
    },
    {
      "name": "军工",
      "inflow": 1.24,
      "pct": 0.18
    },
    {
      "name": "白酒",
      "inflow": 1.19,
      "pct": 0.48
    },
    {
      "name": "传媒",
      "inflow": 0.67,
      "pct": 0.12
    },
    {
      "name": "云计算",
      "inflow": 0.43,
      "pct": 0.36
    },
    {
      "name": "农业",
      "inflow": 0.36,
      "pct": 1.47
    },
    {
      "name": "地产",
      "inflow": 0.36,
      "pct": 0.57
    },
    {
      "name": "钢铁",
      "inflow": 0.3,
      "pct": 1.1
    },
    {
      "name": "食品",
      "inflow": 0.04,
      "pct": 0.81
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.29
    },
    {
      "name": "游戏",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "光伏",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "计算机",
      "inflow": -0.06,
      "pct": -0.42
    },
    {
      "name": "家电",
      "inflow": -0.19,
      "pct": -0.42
    },
    {
      "name": "新能源车",
      "inflow": -0.34,
      "pct": -0.06
    },
    {
      "name": "新能源",
      "inflow": -0.49,
      "pct": -0.36
    },
    {
      "name": "医药",
      "inflow": -0.64,
      "pct": -0.78
    },
    {
      "name": "银行",
      "inflow": -1.94,
      "pct": -0.24
    },
    {
      "name": "券商",
      "inflow": -2.67,
      "pct": -0.19
    }
  ],
  "sectors": [
    {
      "name": "农业",
      "code": "159825",
      "price": 0.757,
      "changePct": 1.47,
      "change": 0.011,
      "turnover": 1.2
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.197,
      "changePct": 1.1,
      "change": 0.013,
      "turnover": 0.99
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.5,
      "changePct": 0.81,
      "change": 0.004,
      "turnover": 0.14
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.982,
      "changePct": 0.76,
      "change": 0.015,
      "turnover": 9.49
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.35,
      "changePct": 0.67,
      "change": 0.009,
      "turnover": 7.02
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.241,
      "changePct": 0.57,
      "change": 0.007,
      "turnover": 1.21
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.423,
      "changePct": 0.48,
      "change": 0.002,
      "turnover": 3.96
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.669,
      "changePct": 0.36,
      "change": 0.006,
      "turnover": 1.43
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.044,
      "changePct": 0.29,
      "change": 0.003,
      "turnover": 0.05
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.123,
      "changePct": 0.18,
      "change": 0.002,
      "turnover": 4.13
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.81,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 2.22
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.071,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.68
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.846,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 1.24
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.633,
      "changePct": -0.06,
      "change": -0.001,
      "turnover": 1.12
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.528,
      "changePct": -0.19,
      "change": -0.001,
      "turnover": 8.9
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.817,
      "changePct": -0.24,
      "change": -0.002,
      "turnover": 6.46
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.483,
      "changePct": -0.36,
      "change": -0.009,
      "turnover": 1.64
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.432,
      "changePct": -0.42,
      "change": -0.006,
      "turnover": 0.64
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.172,
      "changePct": -0.42,
      "change": -0.005,
      "turnover": 0.21
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.383,
      "changePct": -0.78,
      "change": -0.003,
      "turnover": 2.14
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.017,
      "changePct": -0.97,
      "change": -0.01,
      "turnover": 2.07
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.342,
      "changePct": -1.16,
      "change": -0.004,
      "turnover": 3.21
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.036,
      "changePct": -1.33,
      "change": -0.014,
      "turnover": 9.24
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.668,
      "changePct": -1.47,
      "change": -0.01,
      "turnover": 31.9
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.862,
      "changePct": -1.49,
      "change": -0.013,
      "turnover": 6.19
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.848,
      "changePct": -1.74,
      "change": -0.015,
      "turnover": 0.96
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.039,
      "changePct": -2.26,
      "change": -0.024,
      "turnover": 12.35
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.154,
      "changePct": -2.29,
      "change": -0.027,
      "turnover": 6.39
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.483,
      "changePct": -0.36,
      "amount": 1.64,
      "netFlow": -0.41
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.383,
      "changePct": -0.78,
      "amount": 2.14,
      "netFlow": -0.53
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.543,
      "changePct": -0.26,
      "amount": 5.05,
      "netFlow": -1.26
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.886,
      "changePct": -0.29,
      "amount": 5.98,
      "netFlow": -1.49
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.528,
      "changePct": -0.19,
      "amount": 8.9,
      "netFlow": -2.23
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.037,
      "changePct": -0.1,
      "amount": 8.95,
      "netFlow": -2.24
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.039,
      "changePct": -2.26,
      "amount": 12.35,
      "netFlow": -3.09
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.923,
      "changePct": -0.63,
      "amount": 21.25,
      "netFlow": -5.31
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.679,
      "changePct": -0.26,
      "amount": 28.35,
      "netFlow": -7.09
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.756,
      "changePct": -1.79,
      "amount": 49.03,
      "netFlow": -12.26
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.679,
      "changePct": -0.26,
      "amount": 28.35,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.037,
      "changePct": -0.1,
      "amount": 8.95,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.923,
      "changePct": -0.63,
      "amount": 21.25,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.886,
      "changePct": -0.29,
      "amount": 5.98,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.543,
      "changePct": -0.26,
      "amount": 5.05,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "农业",
      "turnover": 1.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.99,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.14,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 9.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.43,
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
      "name": "军工",
      "turnover": 4.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 8.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 6.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.64,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.64,
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
      "name": "医药",
      "turnover": 2.14,
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
      "nav": 4.5397,
      "ret1w": -2.02,
      "ret1m": 1.66,
      "ret3m": 14.12,
      "ret6m": -13.31,
      "ret1y": -3.38,
      "ret2y": 21.99,
      "ret3y": 169.45
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.2025,
      "ret1w": -1.35,
      "ret1m": -3.48,
      "ret3m": 3.93,
      "ret6m": -16.33,
      "ret1y": 5.44,
      "ret2y": 5.18,
      "ret3y": 73.43
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.7765,
      "ret1w": -1.06,
      "ret1m": -0.99,
      "ret3m": 29.9,
      "ret6m": -3.14,
      "ret1y": 42.73,
      "ret2y": 89.64,
      "ret3y": 301.9
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7181,
      "ret1w": 0.69,
      "ret1m": 2.95,
      "ret3m": -0.5,
      "ret6m": 4.25,
      "ret1y": -10.64,
      "ret2y": -14.05,
      "ret3y": 9.5
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.1735,
      "ret1w": 0.77,
      "ret1m": -1.91,
      "ret3m": 1.55,
      "ret6m": -18.27,
      "ret1y": -28.38,
      "ret2y": -14.68,
      "ret3y": 24.82
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7819,
      "ret1w": 0.81,
      "ret1m": 1.43,
      "ret3m": 3.03,
      "ret6m": -13.41,
      "ret1y": -30.59,
      "ret2y": -10.74,
      "ret3y": 36.61
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.575,
      "ret1w": -0.15,
      "ret1m": 1.66,
      "ret3m": 1.21,
      "ret6m": 2.95,
      "ret1y": -6.36,
      "ret2y": 14.78,
      "ret3y": 63.26
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.903,
      "ret1w": -0.16,
      "ret1m": 0.0,
      "ret3m": 8.25,
      "ret6m": -8.55,
      "ret1y": -7.31,
      "ret2y": 4.73,
      "ret3y": 76.2
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3501,
      "ret1w": -0.32,
      "ret1m": -0.79,
      "ret3m": 4.75,
      "ret6m": -4.96,
      "ret1y": -1.42,
      "ret2y": 11.49,
      "ret3y": 46.16
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.437,
      "ret1w": -1.43,
      "ret1m": -1.55,
      "ret3m": 1.42,
      "ret6m": -4.39,
      "ret1y": 29.11,
      "ret2y": 68.56,
      "ret3y": 293.25
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.118,
      "ret1w": 0.99,
      "ret1m": 1.64,
      "ret3m": 1.18,
      "ret6m": 4.88,
      "ret1y": -7.37,
      "ret2y": -15.05,
      "ret3y": 7.19
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.367,
      "ret1w": -0.88,
      "ret1m": -2.23,
      "ret3m": 5.01,
      "ret6m": -0.92,
      "ret1y": -17.55,
      "ret2y": -13.96,
      "ret3y": 38.26
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.768,
      "ret1w": -2.52,
      "ret1m": -1.81,
      "ret3m": -3.75,
      "ret6m": -37.97,
      "ret1y": -48.19,
      "ret2y": -35.54,
      "ret3y": 27.1
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9423,
      "ret1w": 0.39,
      "ret1m": 1.97,
      "ret3m": 1.78,
      "ret6m": 7.61,
      "ret1y": -2.97,
      "ret2y": -5.74,
      "ret3y": 10.94
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6661,
      "ret1w": -0.57,
      "ret1m": 0.61,
      "ret3m": 9.5,
      "ret6m": -6.75,
      "ret1y": -5.53,
      "ret2y": 10.54,
      "ret3y": 76.12
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3817,
      "ret1w": -2.79,
      "ret1m": -3.66,
      "ret3m": 7.23,
      "ret6m": -15.0,
      "ret1y": 27.32,
      "ret2y": 80.27,
      "ret3y": 240.73
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5613,
      "ret1w": 0.4,
      "ret1m": 0.83,
      "ret3m": 2.93,
      "ret6m": -1.57,
      "ret1y": -10.46,
      "ret2y": -6.01,
      "ret3y": 26.25
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.036,
      "ret1w": -1.71,
      "ret1m": -3.99,
      "ret3m": 1.17,
      "ret6m": 12.24,
      "ret1y": 4.86,
      "ret2y": -8.32,
      "ret3y": 8.37
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3544,
      "ret1w": 0.12,
      "ret1m": 1.1,
      "ret3m": 0.4,
      "ret6m": 2.51,
      "ret1y": -6.53,
      "ret2y": 6.81,
      "ret3y": 17.43
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3375,
      "ret1w": -0.41,
      "ret1m": 0.09,
      "ret3m": 9.39,
      "ret6m": 1.6,
      "ret1y": 0.16,
      "ret2y": 22.24,
      "ret3y": 83.06
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2846,
      "ret1w": -0.95,
      "ret1m": -0.8,
      "ret3m": 4.04,
      "ret6m": -8.62,
      "ret1y": -9.31,
      "ret2y": 17.52,
      "ret3y": 53.81
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3664,
      "ret1w": -0.95,
      "ret1m": -0.78,
      "ret3m": 4.07,
      "ret6m": -8.53,
      "ret1y": -9.14,
      "ret2y": 17.97,
      "ret3y": 55.03
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0917,
      "ret1w": -0.1,
      "ret1m": -0.4,
      "ret3m": -0.38,
      "ret6m": -1.5,
      "ret1y": 0.85,
      "ret2y": 1.89,
      "ret3y": 9.06
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0646,
      "ret1w": -0.1,
      "ret1m": -0.39,
      "ret3m": -0.34,
      "ret6m": -1.35,
      "ret1y": 1.15,
      "ret2y": 2.51,
      "ret3y": 10.38
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7236,
      "ret1w": 0.21,
      "ret1m": 0.36,
      "ret3m": 0.28,
      "ret6m": -4.2,
      "ret1y": -13.52,
      "ret2y": -6.43,
      "ret3y": 16.35
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7419,
      "ret1w": 0.22,
      "ret1m": 0.37,
      "ret3m": 0.32,
      "ret6m": -4.07,
      "ret1y": -13.3,
      "ret2y": -5.96,
      "ret3y": 17.52
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8293,
      "ret1w": -1.22,
      "ret1m": -0.99,
      "ret3m": 7.85,
      "ret6m": -7.82,
      "ret1y": 33.32,
      "ret2y": 61.09,
      "ret3y": 168.49
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5564,
      "ret1w": -0.36,
      "ret1m": -0.15,
      "ret3m": 3.97,
      "ret6m": -5.25,
      "ret1y": 0.35,
      "ret2y": 21.35,
      "ret3y": 93.24
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7403,
      "ret1w": 0.0,
      "ret1m": -0.23,
      "ret3m": 2.17,
      "ret6m": -14.52,
      "ret1y": -17.33,
      "ret2y": -8.87,
      "ret3y": 20.24
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1905,
      "ret1w": -0.66,
      "ret1m": -1.24,
      "ret3m": 2.37,
      "ret6m": -8.38,
      "ret1y": 14.06,
      "ret2y": 38.7,
      "ret3y": 150.4
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5082,
      "ret1w": -0.2,
      "ret1m": -0.51,
      "ret3m": -3.95,
      "ret6m": -10.76,
      "ret1y": -5.27,
      "ret2y": 14.25,
      "ret3y": 50.18
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5179,
      "ret1w": -0.19,
      "ret1m": -0.5,
      "ret3m": -3.91,
      "ret6m": -10.68,
      "ret1y": -5.09,
      "ret2y": 14.71,
      "ret3y": 51.39
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2868,
      "ret1w": 0.05,
      "ret1m": 0.85,
      "ret3m": 1.49,
      "ret6m": 0.02,
      "ret1y": -0.31,
      "ret2y": 0.05,
      "ret3y": 1.94
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.138,
      "ret1w": 0.21,
      "ret1m": 0.64,
      "ret3m": -0.04,
      "ret6m": 4.84,
      "ret1y": -6.67,
      "ret2y": -0.45,
      "ret3y": 22.75
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4222,
      "ret1w": -0.89,
      "ret1m": -2.11,
      "ret3m": 4.2,
      "ret6m": -15.38,
      "ret1y": -5.66,
      "ret2y": -11.27,
      "ret3y": 19.96
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.037,
      "ret1w": 0.6,
      "ret1m": 1.22,
      "ret3m": 2.83,
      "ret6m": -2.09,
      "ret1y": -5.86,
      "ret2y": 14.34,
      "ret3y": 52.82
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.34,
      "ret1w": -1.27,
      "ret1m": -0.65,
      "ret3m": -1.94,
      "ret6m": -19.79,
      "ret1y": 32.02,
      "ret2y": 68.26,
      "ret3y": 205.86
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4834,
      "ret1w": -0.2,
      "ret1m": 0.62,
      "ret3m": -0.11,
      "ret6m": 2.41,
      "ret1y": 0.26,
      "ret2y": -1.74,
      "ret3y": 11.99
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6283,
      "ret1w": -2.04,
      "ret1m": -2.72,
      "ret3m": 8.42,
      "ret6m": -18.28,
      "ret1y": -14.32,
      "ret2y": 0.21,
      "ret3y": 56.76
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.316,
      "ret1w": -1.53,
      "ret1m": -2.85,
      "ret3m": 11.7,
      "ret6m": -3.89,
      "ret1y": 68.13,
      "ret2y": 110.5,
      "ret3y": 356.8
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": -0.04,
      "ret1m": -0.12,
      "ret3m": 0.36,
      "ret6m": -1.01,
      "ret1y": -0.03,
      "ret2y": 1.49,
      "ret3y": 4.83
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1156,
      "ret1w": -0.03,
      "ret1m": -0.11,
      "ret3m": 0.39,
      "ret6m": -0.94,
      "ret1y": 0.1,
      "ret2y": 1.78,
      "ret3y": 5.56
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0638,
      "ret1w": 0.0,
      "ret1m": -0.02,
      "ret3m": 0.05,
      "ret6m": 0.19,
      "ret1y": 0.7,
      "ret2y": 1.47,
      "ret3y": 2.72
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0985,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.12,
      "ret6m": 0.24,
      "ret1y": 0.78,
      "ret2y": 1.48,
      "ret3y": 3.88
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1079,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.14,
      "ret6m": 0.29,
      "ret1y": 0.88,
      "ret2y": 1.68,
      "ret3y": 4.31
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0758,
      "ret1w": 0.0,
      "ret1m": -0.01,
      "ret3m": 0.1,
      "ret6m": 0.27,
      "ret1y": 0.71,
      "ret2y": 1.38,
      "ret3y": 2.86
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0902,
      "ret1w": 0.0,
      "ret1m": -0.01,
      "ret3m": 0.12,
      "ret6m": 0.34,
      "ret1y": 0.87,
      "ret2y": 1.7,
      "ret3y": 3.51
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0685,
      "ret1w": -0.2,
      "ret1m": -0.2,
      "ret3m": 1.5,
      "ret6m": -3.08,
      "ret1y": 0.26,
      "ret2y": 6.26,
      "ret3y": 13.34
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2222,
      "ret1w": -0.18,
      "ret1m": -0.02,
      "ret3m": 2.46,
      "ret6m": -3.55,
      "ret1y": -0.36,
      "ret2y": 3.12,
      "ret3y": 7.62
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0752,
      "ret1w": -0.19,
      "ret1m": -0.19,
      "ret3m": 1.54,
      "ret6m": -2.99,
      "ret1y": 0.46,
      "ret2y": 6.69,
      "ret3y": 14.26
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0454,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.12,
      "ret6m": 0.31,
      "ret1y": 0.84,
      "ret2y": 1.7,
      "ret3y": 3.59
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1718,
      "ret1w": -0.37,
      "ret1m": -0.2,
      "ret3m": 0.53,
      "ret6m": -2.96,
      "ret1y": -3.08,
      "ret2y": 0.7,
      "ret3y": 11.08
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.218,
      "ret1w": -0.01,
      "ret1m": 0.11,
      "ret3m": 0.21,
      "ret6m": -0.67,
      "ret1y": -0.73,
      "ret2y": 3.93,
      "ret3y": 15.93
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1407,
      "ret1w": -0.15,
      "ret1m": -0.05,
      "ret3m": 0.88,
      "ret6m": -1.21,
      "ret1y": 0.32,
      "ret2y": 4.2,
      "ret3y": 10.76
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2121,
      "ret1w": -0.15,
      "ret1m": -0.05,
      "ret3m": 0.91,
      "ret6m": -1.12,
      "ret1y": 0.51,
      "ret2y": 4.62,
      "ret3y": 11.68
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0104,
      "ret1w": 0.0,
      "ret1m": -0.04,
      "ret3m": 0.18,
      "ret6m": 0.31,
      "ret1y": 1.44,
      "ret2y": 2.04,
      "ret3y": 3.59
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0093,
      "ret1w": 0.0,
      "ret1m": -0.04,
      "ret3m": 0.19,
      "ret6m": 0.29,
      "ret1y": 1.45,
      "ret2y": 2.1,
      "ret3y": 3.77
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.426,
      "ret1w": -0.56,
      "ret1m": -0.97,
      "ret3m": 0.21,
      "ret6m": -10.09,
      "ret1y": -1.66,
      "ret2y": 3.18,
      "ret3y": 39.26
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.856,
      "ret1w": -0.56,
      "ret1m": -1.31,
      "ret3m": 3.78,
      "ret6m": -8.37,
      "ret1y": -1.89,
      "ret2y": 13.29,
      "ret3y": 69.19
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7502,
      "ret1w": 0.58,
      "ret1m": 1.92,
      "ret3m": 11.13,
      "ret6m": 0.77,
      "ret1y": -11.73,
      "ret2y": 37.54,
      "ret3y": 76.25
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1527,
      "ret1w": -0.39,
      "ret1m": 0.09,
      "ret3m": 2.41,
      "ret6m": -2.54,
      "ret1y": 2.32,
      "ret2y": 10.39,
      "ret3y": 43.96
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2142,
      "ret1w": -0.39,
      "ret1m": 0.09,
      "ret3m": 2.45,
      "ret6m": -2.45,
      "ret1y": 2.52,
      "ret2y": 10.84,
      "ret3y": 45.13
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0355,
      "ret1w": -0.61,
      "ret1m": 0.5,
      "ret3m": 5.65,
      "ret6m": -7.13,
      "ret1y": -7.92,
      "ret2y": 12.73,
      "ret3y": 73.72
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7992,
      "ret1w": -0.43,
      "ret1m": -0.16,
      "ret3m": 0.95,
      "ret6m": -5.28,
      "ret1y": -1.2,
      "ret2y": 4.36,
      "ret3y": 41.6
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.6018,
      "ret1w": -0.11,
      "ret1m": 1.19,
      "ret3m": 3.8,
      "ret6m": -3.75,
      "ret1y": -8.91,
      "ret2y": 12.41,
      "ret3y": 60.48
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9825,
      "ret1w": -1.04,
      "ret1m": -1.69,
      "ret3m": 0.15,
      "ret6m": -12.29,
      "ret1y": 7.71,
      "ret2y": 16.55,
      "ret3y": 81.91
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1831,
      "ret1w": 0.05,
      "ret1m": 1.0,
      "ret3m": 1.0,
      "ret6m": 2.44,
      "ret1y": 0.52,
      "ret2y": 5.08,
      "ret3y": 31.58
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4653,
      "ret1w": 1.35,
      "ret1m": 1.41,
      "ret3m": 5.07,
      "ret6m": -1.58,
      "ret1y": 15.45,
      "ret2y": 17.58,
      "ret3y": 38.68
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7864,
      "ret1w": -0.68,
      "ret1m": -1.9,
      "ret3m": 1.68,
      "ret6m": -10.23,
      "ret1y": 3.03,
      "ret2y": 11.44,
      "ret3y": 64.7
    },
    {
      "code": "530015",
      "name": "建信深证基本面60ETF联接A",
      "type": "指数型",
      "nav": 2.6598,
      "ret1w": 0.29,
      "ret1m": 0.88,
      "ret3m": 1.61,
      "ret6m": 0.31,
      "ret1y": -2.92,
      "ret2y": 0.41,
      "ret3y": 28.16
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1797,
      "ret1w": 0.61,
      "ret1m": 0.07,
      "ret3m": 1.55,
      "ret6m": -9.28,
      "ret1y": -2.17,
      "ret2y": 9.55,
      "ret3y": 52.63
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1813,
      "ret1w": 0.6,
      "ret1m": 0.08,
      "ret3m": 1.55,
      "ret6m": -9.26,
      "ret1y": -2.21,
      "ret2y": 9.47,
      "ret3y": 52.07
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4203,
      "ret1w": 1.38,
      "ret1m": 0.61,
      "ret3m": 0.61,
      "ret6m": -9.42,
      "ret1y": -6.01,
      "ret2y": 5.37,
      "ret3y": 43.77
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4527,
      "ret1w": 1.37,
      "ret1m": 0.62,
      "ret3m": 0.64,
      "ret6m": -9.33,
      "ret1y": -5.82,
      "ret2y": 5.8,
      "ret3y": 44.92
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0517,
      "ret1w": 1.88,
      "ret1m": 0.64,
      "ret3m": -5.66,
      "ret6m": -11.04,
      "ret1y": -1.02,
      "ret2y": 14.5,
      "ret3y": 68.13
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1672,
      "ret1w": -0.09,
      "ret1m": 0.09,
      "ret3m": 0.1,
      "ret6m": -0.26,
      "ret1y": -0.28,
      "ret2y": 2.05,
      "ret3y": 8.24
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1871,
      "ret1w": -0.08,
      "ret1m": 0.1,
      "ret3m": 0.13,
      "ret6m": -0.18,
      "ret1y": -0.13,
      "ret2y": 2.35,
      "ret3y": 8.91
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0837,
      "ret1w": 0.0,
      "ret1m": -0.02,
      "ret3m": 0.07,
      "ret6m": 0.27,
      "ret1y": 0.86,
      "ret2y": 1.77,
      "ret3y": 3.31
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4096,
      "ret1w": -0.04,
      "ret1m": -0.04,
      "ret3m": -0.09,
      "ret6m": 0.06,
      "ret1y": 0.09,
      "ret2y": 0.6,
      "ret3y": 12.5
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4618,
      "ret1w": -0.03,
      "ret1m": -0.03,
      "ret3m": -0.04,
      "ret6m": 0.16,
      "ret1y": 0.29,
      "ret2y": 1.01,
      "ret3y": 13.41
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1243,
      "ret1w": -0.5,
      "ret1m": 0.09,
      "ret3m": 2.24,
      "ret6m": 1.85,
      "ret1y": 10.65,
      "ret2y": 21.97,
      "ret3y": 68.76
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2552,
      "ret1w": -0.8,
      "ret1m": 0.9,
      "ret3m": 1.32,
      "ret6m": 0.3,
      "ret1y": 3.54,
      "ret2y": 11.47,
      "ret3y": 54.39
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 4.5397,
      "price": 4.5397,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 4.2025,
      "price": 4.2025,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.7765,
      "price": 5.7765,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.15,
      "nav": 0.7181,
      "price": 0.7181,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 2.1735,
      "price": 2.1735,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.7819,
      "price": 2.7819,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 5.575,
      "price": 5.575,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.903,
      "price": 1.903,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.3501,
      "price": 1.3501,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 3.437,
      "price": 3.437,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.08,
      "nav": 1.118,
      "price": 1.118,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.367,
      "price": 2.367,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.768,
      "price": 1.768,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.9423,
      "price": 1.9423,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.6661,
      "price": 1.6661,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 2.3817,
      "price": 2.3817,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.5613,
      "price": 2.5613,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.036,
      "price": 1.036,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 2.3544,
      "price": 2.3544,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.3375,
      "price": 1.3375,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.49,
      "sharpe": -0.51,
      "calmar": -0.51
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 5.22,
      "sharpe": 0.64,
      "calmar": 0.64
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 1.48,
      "sharpe": 7.13,
      "calmar": 7.13
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 4.43,
      "sharpe": -1.34,
      "calmar": -1.34
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.86,
      "sharpe": -4.11,
      "calmar": -4.11
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.15,
      "sharpe": -4.76,
      "calmar": -4.76
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.49,
      "sharpe": -0.95,
      "calmar": -0.95
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.0,
      "sharpe": -1.22,
      "calmar": -1.22
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.19,
      "sharpe": -0.25,
      "calmar": -0.25
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.33,
      "sharpe": 4.44,
      "calmar": 4.44
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.46,
      "sharpe": -1.11,
      "calmar": -1.11
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.34,
      "sharpe": -2.43,
      "calmar": -2.43
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 2.71,
      "sharpe": -7.08,
      "calmar": -7.08
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.96,
      "sharpe": -0.43,
      "calmar": -0.43
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.92,
      "sharpe": -0.99,
      "calmar": -0.99
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.49,
      "sharpe": 3.15,
      "calmar": 3.15
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.24,
      "sharpe": -1.79,
      "calmar": -1.79
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 5.99,
      "sharpe": 0.54,
      "calmar": 0.54
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.65,
      "sharpe": -1.07,
      "calmar": -1.07
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.14,
      "sharpe": 0.03,
      "calmar": 0.03
    }
  ],
  "news": [
    {
      "title": "随着六大国有银行2026年半年度报告全部披露，国有大行中期经营成绩单完整落地。今年上半年，六大行整体经营稳中有进，合计实现营业收入超过2万亿元，较上年同期增加约1719亿元，同比增长约9.4%；合计实现归母净利润约7126亿元，较上年同期多赚近301亿元，同比增长约4.4%。净息差方面，六大行呈现“两升四降”格局，彻底结束了此前单边下行的态势，盈利韧性持续释放。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "09:09",
      "impact": "neutral"
    },
    {
      "title": "8月30日消息，今年以来，国内二手车交易市场整体走势稳中有升。中国汽车流通协会数据显示，今年上半年，我国二手车交易量接近新车，部分二手车的价格基本是新车的一半。与此同时，多地新能源二手车交易量也持续走高。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:59",
      "impact": "neutral"
    },
    {
      "title": "辽宁成大(600739.SH)发布2026年半年度报告，实现营业收入44.11亿元，同比下降13.56%；归属于上市公司股东的净利润16.2亿元，同比增长125.77%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:55",
      "impact": "neutral"
    },
    {
      "title": "博瑞医药(688166.SH)发布2026年半年度报告，实现营业收入6.78亿元，同比增长26.17%；归属于上市公司股东的净利润5893.28万元，同比增长243.17%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:49",
      "impact": "neutral"
    },
    {
      "title": "沐曦股份(688802.SH)发布2026年半年度报告，实现营业收入13.24亿元，同比增长44.67%；归属于上市公司股东的净利润6.12亿元，同比扭亏为盈。净利润本期实现扭亏为盈，主要系本期营业收入及公允价值变动损益大幅增长所致。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:36",
      "impact": "neutral"
    },
    {
      "title": "首创环保(600008.SH)发布2026年半年度报告，实现营业收入83.59亿元，同比下降4.25%；归属于上市公司股东的净利润8.39亿元，同比下降9.67%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:32",
      "impact": "neutral"
    },
    {
      "title": "辽港股份(601880.SH)发布2026年半年度报告，实现营业收入53.5亿元，同比下降6.03%；归属于上市公司股东的净利润8.85亿元，同比下降7.41%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:31",
      "impact": "neutral"
    },
    {
      "title": "三星电气(601567.SH)发布2026年半年度报告，实现营业收入72.62亿元，同比下降8.9%；归属于上市公司股东的净利润5.46亿元，同比下降55.61%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:23",
      "impact": "neutral"
    },
    {
      "title": "超颖电子(603175.SH)公告，2026年上半年，公司实现营业收入29.12亿元，同比增长33.29%；归属于上市公司股东的净亏损1.91亿元，上年同期盈利1.59亿元，同比由盈转亏。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:22",
      "impact": "neutral"
    },
    {
      "title": "信达地产(600657.SH)发布2026年半年度报告，实现营业收入12.83亿元，同比下降27.85%；归属于上市公司股东的净利润为亏损13.2亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:20",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 47,
    "label": "中性",
    "upDownRatio": "2,313/1,843",
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
