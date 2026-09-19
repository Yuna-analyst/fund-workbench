// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-19 13:51:48
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-19 13:51 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-18",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3911.87,
      "change": 36.27,
      "changePct": "+0.94%",
      "high": 3919.67,
      "low": 3888.5,
      "volume": 485712507.0,
      "amount": 994169450000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13640.87,
      "change": 230.96,
      "changePct": "+1.72%",
      "high": 13689.36,
      "low": 13470.77,
      "volume": 597152064.0,
      "amount": 1082930850000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3372.68,
      "change": 74.37,
      "changePct": "+2.25%",
      "high": 3398.16,
      "low": 3313.21,
      "volume": 161649031.0,
      "amount": 522382660000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1652.63,
      "change": 46.34,
      "changePct": "+2.88%",
      "high": 1671.01,
      "low": 1630.1,
      "volume": 9560149.0,
      "amount": 117652960000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4507.39,
      "change": 47.23,
      "changePct": "+1.06%",
      "high": 4523.09,
      "low": 4480.59,
      "volume": 189924166.0,
      "amount": 537699360000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7799.61,
      "change": 144.63,
      "changePct": "+1.89%",
      "high": 7819.98,
      "low": 7710.24,
      "volume": 145325114.0,
      "amount": 370457570000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.63万亿",
      "label": "成交额",
      "rawAmount": 3625292850000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,432/784",
      "label": "涨/跌家数",
      "rawUp": 4432,
      "rawDown": 784,
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
    "totalInflow": 31.31,
    "totalOutflow": 0,
    "netFlow": 31.31,
    "netFlowTrend": [
      6.26,
      12.52,
      18.79,
      25.05,
      31.31
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
      "inflow": 13.21,
      "pct": 2.62
    },
    {
      "name": "半导体",
      "inflow": 4.65,
      "pct": 4.0
    },
    {
      "name": "5G",
      "inflow": 3.58,
      "pct": 2.49
    },
    {
      "name": "芯片",
      "inflow": 2.39,
      "pct": 3.41
    },
    {
      "name": "券商",
      "inflow": 2.38,
      "pct": 1.2
    },
    {
      "name": "有色",
      "inflow": 1.71,
      "pct": 1.41
    },
    {
      "name": "医疗",
      "inflow": 1.44,
      "pct": 0.89
    },
    {
      "name": "军工",
      "inflow": 0.76,
      "pct": 1.58
    },
    {
      "name": "地产",
      "inflow": 0.61,
      "pct": 3.8
    },
    {
      "name": "人工智能",
      "inflow": 0.58,
      "pct": 2.3
    },
    {
      "name": "传媒",
      "inflow": 0.56,
      "pct": 0.87
    },
    {
      "name": "新能源车",
      "inflow": 0.38,
      "pct": 1.35
    },
    {
      "name": "云计算",
      "inflow": 0.35,
      "pct": 2.25
    },
    {
      "name": "新能源",
      "inflow": 0.35,
      "pct": 1.74
    },
    {
      "name": "光伏",
      "inflow": 0.34,
      "pct": 2.77
    },
    {
      "name": "游戏",
      "inflow": 0.24,
      "pct": 0.85
    },
    {
      "name": "电子",
      "inflow": 0.15,
      "pct": 2.55
    },
    {
      "name": "钢铁",
      "inflow": 0.12,
      "pct": 0.8
    },
    {
      "name": "家电",
      "inflow": 0.08,
      "pct": 1.0
    },
    {
      "name": "计算机",
      "inflow": 0.05,
      "pct": 1.8
    }
  ],
  "sectors": [
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.041,
      "changePct": 4.0,
      "change": 0.04,
      "turnover": 15.5
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.23,
      "changePct": 3.8,
      "change": 0.045,
      "turnover": 2.03
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.152,
      "changePct": 3.41,
      "change": 0.038,
      "turnover": 7.97
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.815,
      "changePct": 2.77,
      "change": 0.022,
      "turnover": 1.13
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.704,
      "changePct": 2.62,
      "change": 0.018,
      "turnover": 44.04
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.844,
      "changePct": 2.55,
      "change": 0.021,
      "turnover": 0.51
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.07,
      "changePct": 2.49,
      "change": 0.026,
      "turnover": 11.93
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.023,
      "changePct": 2.3,
      "change": 0.023,
      "turnover": 1.94
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.639,
      "changePct": 2.25,
      "change": 0.036,
      "turnover": 1.17
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.134,
      "changePct": 1.8,
      "change": 0.02,
      "turnover": 0.17
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.334,
      "changePct": 1.74,
      "change": 0.04,
      "turnover": 1.16
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.16,
      "changePct": 1.58,
      "change": 0.018,
      "turnover": 2.55
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.732,
      "changePct": 1.41,
      "change": 0.024,
      "turnover": 5.69
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.503,
      "changePct": 1.35,
      "change": 0.02,
      "turnover": 1.27
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.505,
      "changePct": 1.2,
      "change": 0.006,
      "turnover": 7.95
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.414,
      "changePct": 1.0,
      "change": 0.014,
      "turnover": 0.26
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.34,
      "changePct": 0.89,
      "change": 0.003,
      "turnover": 4.8
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.815,
      "changePct": 0.87,
      "change": 0.007,
      "turnover": 1.88
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.072,
      "changePct": 0.85,
      "change": 0.009,
      "turnover": 0.81
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.138,
      "changePct": 0.8,
      "change": 0.009,
      "turnover": 0.41
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.411,
      "changePct": 0.74,
      "change": 0.003,
      "turnover": 2.05
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.488,
      "changePct": 0.62,
      "change": 0.003,
      "turnover": 0.08
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.835,
      "changePct": 0.6,
      "change": 0.005,
      "turnover": 7.3
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.732,
      "changePct": 0.55,
      "change": 0.004,
      "turnover": 0.66
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.373,
      "changePct": 0.27,
      "change": 0.001,
      "turnover": 2.79
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.007,
      "changePct": 0.2,
      "change": 0.002,
      "turnover": 0.05
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.835,
      "changePct": -0.24,
      "change": -0.002,
      "turnover": 7.03
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.249,
      "changePct": -0.72,
      "change": -0.009,
      "turnover": 6.25
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.744,
      "changePct": 2.83,
      "amount": 80.21,
      "netFlow": 20.05
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.83,
      "changePct": 1.94,
      "amount": 32.81,
      "netFlow": 8.2
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.582,
      "changePct": 1.1,
      "amount": 28.77,
      "netFlow": 7.19
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.041,
      "changePct": 4.0,
      "amount": 15.5,
      "netFlow": 3.87
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.975,
      "changePct": 0.57,
      "amount": 14.45,
      "netFlow": 3.61
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.505,
      "changePct": 1.2,
      "amount": 7.95,
      "netFlow": 1.99
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.781,
      "changePct": 1.01,
      "amount": 5.91,
      "netFlow": 1.48
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.449,
      "changePct": 1.02,
      "amount": 4.31,
      "netFlow": 1.08
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.373,
      "changePct": 0.27,
      "amount": 2.79,
      "netFlow": 0.7
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.334,
      "changePct": 1.74,
      "amount": 1.16,
      "netFlow": 0.29
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.582,
      "changePct": 1.1,
      "amount": 28.77,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.975,
      "changePct": 0.57,
      "amount": 14.45,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.83,
      "changePct": 1.94,
      "amount": 32.81,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.781,
      "changePct": 1.01,
      "amount": 5.91,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.449,
      "changePct": 1.02,
      "amount": 4.31,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "半导体",
      "turnover": 15.5,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "地产",
      "turnover": 2.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 7.97,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 44.04,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 11.93,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "人工智能",
      "turnover": 1.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 5.69,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.95,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.88,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.81,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.7629,
      "ret1w": 2.74,
      "ret1m": 6.39,
      "ret3m": 1.02,
      "ret6m": -8.24,
      "ret1y": 10.9,
      "ret2y": 21.53,
      "ret3y": 177.9
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.2009,
      "ret1w": 2.27,
      "ret1m": 0.31,
      "ret3m": -5.3,
      "ret6m": -18.2,
      "ret1y": 5.88,
      "ret2y": 3.28,
      "ret3y": 71.49
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 6.2482,
      "ret1w": 3.81,
      "ret1m": 6.63,
      "ret3m": 4.45,
      "ret6m": -9.36,
      "ret1y": 58.22,
      "ret2y": 92.66,
      "ret3y": 340.05
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6958,
      "ret1w": 0.36,
      "ret1m": -0.17,
      "ret3m": -1.49,
      "ret6m": 7.34,
      "ret1y": -9.18,
      "ret2y": -16.56,
      "ret3y": 5.09
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0084,
      "ret1w": 3.28,
      "ret1m": 1.79,
      "ret3m": -11.53,
      "ret6m": -16.74,
      "ret1y": -32.12,
      "ret2y": -27.58,
      "ret3y": 17.8
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7246,
      "ret1w": 1.32,
      "ret1m": 1.25,
      "ret3m": -1.1,
      "ret6m": -6.19,
      "ret1y": -24.83,
      "ret2y": -18.55,
      "ret3y": 39.84
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3799,
      "ret1w": 0.86,
      "ret1m": -0.53,
      "ret3m": -3.03,
      "ret6m": 4.14,
      "ret1y": -7.21,
      "ret2y": 9.05,
      "ret3y": 61.64
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.958,
      "ret1w": 2.14,
      "ret1m": 5.67,
      "ret3m": -1.81,
      "ret6m": -10.06,
      "ret1y": 0.15,
      "ret2y": 6.47,
      "ret3y": 84.37
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3504,
      "ret1w": 1.78,
      "ret1m": 2.87,
      "ret3m": -4.51,
      "ret6m": -7.57,
      "ret1y": 1.48,
      "ret2y": 8.32,
      "ret3y": 50.32
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.509,
      "ret1w": 2.78,
      "ret1m": 6.27,
      "ret3m": -5.67,
      "ret6m": -12.56,
      "ret1y": 35.96,
      "ret2y": 62.6,
      "ret3y": 310.89
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.092,
      "ret1w": 0.83,
      "ret1m": 0.46,
      "ret3m": -4.46,
      "ret6m": 8.66,
      "ret1y": -6.98,
      "ret2y": -16.7,
      "ret3y": 8.55
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.344,
      "ret1w": 1.38,
      "ret1m": 3.12,
      "ret3m": -4.87,
      "ret6m": 5.82,
      "ret1y": -14.73,
      "ret2y": -14.2,
      "ret3y": 38.53
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.8093,
      "ret1w": 3.96,
      "ret1m": 9.74,
      "ret3m": -6.95,
      "ret6m": -31.08,
      "ret1y": -43.8,
      "ret2y": -36.86,
      "ret3y": 35.33
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8943,
      "ret1w": 0.39,
      "ret1m": -0.78,
      "ret3m": -1.57,
      "ret6m": 5.03,
      "ret1y": 0.14,
      "ret2y": -6.55,
      "ret3y": 9.31
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6859,
      "ret1w": 1.69,
      "ret1m": 3.23,
      "ret3m": -1.8,
      "ret6m": -7.49,
      "ret1y": -0.93,
      "ret2y": 10.91,
      "ret3y": 83.91
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.462,
      "ret1w": 2.82,
      "ret1m": 5.48,
      "ret3m": -5.87,
      "ret6m": -26.05,
      "ret1y": 30.02,
      "ret2y": 79.97,
      "ret3y": 256.71
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5503,
      "ret1w": 1.43,
      "ret1m": 0.4,
      "ret3m": 0.23,
      "ret6m": 2.58,
      "ret1y": -6.76,
      "ret2y": -3.56,
      "ret3y": 27.15
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.013,
      "ret1w": 0.8,
      "ret1m": 5.19,
      "ret3m": -8.66,
      "ret6m": 15.51,
      "ret1y": 3.16,
      "ret2y": -15.3,
      "ret3y": 8.92
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2732,
      "ret1w": 0.19,
      "ret1m": -1.65,
      "ret3m": -1.76,
      "ret6m": 2.72,
      "ret1y": -9.09,
      "ret2y": 3.62,
      "ret3y": 15.61
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3399,
      "ret1w": 1.47,
      "ret1m": 2.83,
      "ret3m": -1.69,
      "ret6m": 2.27,
      "ret1y": 3.97,
      "ret2y": 20.38,
      "ret3y": 89.46
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.261,
      "ret1w": 1.37,
      "ret1m": 2.02,
      "ret3m": -6.7,
      "ret6m": -13.29,
      "ret1y": -2.69,
      "ret2y": 11.78,
      "ret3y": 54.14
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3416,
      "ret1w": 1.37,
      "ret1m": 2.03,
      "ret3m": -6.66,
      "ret6m": -13.21,
      "ret1y": -2.51,
      "ret2y": 12.21,
      "ret3y": 55.37
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0796,
      "ret1w": 0.33,
      "ret1m": -0.16,
      "ret3m": -1.91,
      "ret6m": -3.33,
      "ret1y": -0.49,
      "ret2y": 1.07,
      "ret3y": 8.43
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0532,
      "ret1w": 0.32,
      "ret1m": -0.14,
      "ret3m": -1.85,
      "ret6m": -3.18,
      "ret1y": -0.19,
      "ret2y": 1.68,
      "ret3y": 9.74
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7054,
      "ret1w": 1.16,
      "ret1m": 0.47,
      "ret3m": -3.42,
      "ret6m": -1.97,
      "ret1y": -11.63,
      "ret2y": -11.05,
      "ret3y": 12.5
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7234,
      "ret1w": 1.16,
      "ret1m": 0.47,
      "ret3m": -3.39,
      "ret6m": -1.86,
      "ret1y": -11.4,
      "ret2y": -10.6,
      "ret3y": 13.63
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.9118,
      "ret1w": 1.67,
      "ret1m": 1.76,
      "ret3m": -1.38,
      "ret6m": -16.87,
      "ret1y": 38.43,
      "ret2y": 58.67,
      "ret3y": 183.11
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4773,
      "ret1w": 1.85,
      "ret1m": 2.75,
      "ret3m": -5.87,
      "ret6m": -6.06,
      "ret1y": 1.92,
      "ret2y": 14.63,
      "ret3y": 93.0
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7139,
      "ret1w": 1.38,
      "ret1m": 1.02,
      "ret3m": -7.43,
      "ret6m": -13.83,
      "ret1y": -17.97,
      "ret2y": -12.62,
      "ret3y": 16.86
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1534,
      "ret1w": 2.61,
      "ret1m": 4.93,
      "ret3m": -6.53,
      "ret6m": -12.25,
      "ret1y": 18.38,
      "ret2y": 33.31,
      "ret3y": 155.36
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5106,
      "ret1w": 1.25,
      "ret1m": 1.51,
      "ret3m": -3.42,
      "ret6m": -17.35,
      "ret1y": 0.16,
      "ret2y": 11.0,
      "ret3y": 55.86
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5204,
      "ret1w": 1.23,
      "ret1m": 1.5,
      "ret3m": -3.41,
      "ret6m": -17.28,
      "ret1y": 0.35,
      "ret2y": 11.43,
      "ret3y": 57.08
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2686,
      "ret1w": 0.02,
      "ret1m": -1.15,
      "ret3m": -0.75,
      "ret6m": 0.81,
      "ret1y": -1.86,
      "ret2y": -1.38,
      "ret3y": 0.29
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1138,
      "ret1w": 0.73,
      "ret1m": 0.41,
      "ret3m": -2.94,
      "ret6m": 3.43,
      "ret1y": -3.95,
      "ret2y": -0.78,
      "ret3y": 19.44
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3868,
      "ret1w": 1.35,
      "ret1m": 0.68,
      "ret3m": -7.03,
      "ret6m": -16.6,
      "ret1y": -2.93,
      "ret2y": -19.35,
      "ret3y": 17.96
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9953,
      "ret1w": 1.02,
      "ret1m": -0.16,
      "ret3m": -0.81,
      "ret6m": -0.41,
      "ret1y": -7.77,
      "ret2y": 9.65,
      "ret3y": 56.93
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.444,
      "ret1w": 2.17,
      "ret1m": 3.92,
      "ret3m": -2.68,
      "ret6m": -28.43,
      "ret1y": 31.1,
      "ret2y": 59.81,
      "ret3y": 225.52
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4955,
      "ret1w": -0.36,
      "ret1m": -1.4,
      "ret3m": 2.42,
      "ret6m": 5.67,
      "ret1y": -1.23,
      "ret2y": 0.94,
      "ret3y": 16.57
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6241,
      "ret1w": 2.51,
      "ret1m": 2.53,
      "ret3m": -9.04,
      "ret6m": -27.46,
      "ret1y": -5.87,
      "ret2y": 2.83,
      "ret3y": 56.53
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.334,
      "ret1w": 2.52,
      "ret1m": 3.71,
      "ret3m": -1.93,
      "ret6m": -19.32,
      "ret1y": 76.76,
      "ret2y": 112.12,
      "ret3y": 402.92
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0668,
      "ret1w": 0.15,
      "ret1m": 0.02,
      "ret3m": -0.35,
      "ret6m": -1.85,
      "ret1y": 0.05,
      "ret2y": 1.63,
      "ret3y": 5.01
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1155,
      "ret1w": 0.15,
      "ret1m": 0.03,
      "ret3m": -0.32,
      "ret6m": -1.79,
      "ret1y": 0.17,
      "ret2y": 1.91,
      "ret3y": 5.72
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0654,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.11,
      "ret6m": 0.36,
      "ret1y": 0.75,
      "ret2y": 1.57,
      "ret3y": 2.63
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0996,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.11,
      "ret6m": 0.33,
      "ret1y": 0.76,
      "ret2y": 1.52,
      "ret3y": 3.84
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.109,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.12,
      "ret6m": 0.37,
      "ret1y": 0.85,
      "ret2y": 1.72,
      "ret3y": 4.26
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0766,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.06,
      "ret6m": 0.34,
      "ret1y": 0.72,
      "ret2y": 1.44,
      "ret3y": 2.62
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0912,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.08,
      "ret6m": 0.4,
      "ret1y": 0.88,
      "ret2y": 1.75,
      "ret3y": 3.27
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0671,
      "ret1w": 0.57,
      "ret1m": 0.73,
      "ret3m": -1.48,
      "ret6m": -3.62,
      "ret1y": 1.4,
      "ret2y": 5.86,
      "ret3y": 13.1
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2252,
      "ret1w": 0.63,
      "ret1m": 1.11,
      "ret3m": -1.21,
      "ret6m": -3.88,
      "ret1y": 0.8,
      "ret2y": 3.68,
      "ret3y": 8.14
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0741,
      "ret1w": 0.59,
      "ret1m": 0.74,
      "ret3m": -1.43,
      "ret6m": -3.52,
      "ret1y": 1.61,
      "ret2y": 6.3,
      "ret3y": 14.02
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0468,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.86,
      "ret2y": 1.77,
      "ret3y": 3.58
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.177,
      "ret1w": 0.51,
      "ret1m": 0.63,
      "ret3m": -0.6,
      "ret6m": -2.36,
      "ret1y": -2.31,
      "ret2y": 0.4,
      "ret3y": 11.21
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.21,
      "ret1w": 0.18,
      "ret1m": -0.03,
      "ret3m": -0.86,
      "ret6m": -1.23,
      "ret1y": -0.71,
      "ret2y": 2.35,
      "ret3y": 14.92
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1381,
      "ret1w": 0.19,
      "ret1m": 0.34,
      "ret3m": -0.88,
      "ret6m": -2.44,
      "ret1y": 1.18,
      "ret2y": 2.96,
      "ret3y": 10.83
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2097,
      "ret1w": 0.2,
      "ret1m": 0.34,
      "ret3m": -0.84,
      "ret6m": -2.34,
      "ret1y": 1.38,
      "ret2y": 3.38,
      "ret3y": 11.75
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.345,
      "ret1w": 1.6,
      "ret1m": -3.5,
      "ret3m": -6.76,
      "ret6m": -13.82,
      "ret1y": 35.71,
      "ret2y": 80.38,
      "ret3y": 145.81
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9725,
      "ret1w": 0.79,
      "ret1m": 0.18,
      "ret3m": -0.66,
      "ret6m": 2.56,
      "ret1y": 10.3,
      "ret2y": 5.49,
      "ret3y": 36.84
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8024,
      "ret1w": 0.77,
      "ret1m": -0.94,
      "ret3m": -4.32,
      "ret6m": -15.84,
      "ret1y": -10.99,
      "ret2y": -4.45,
      "ret3y": 53.5
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4366,
      "ret1w": 3.43,
      "ret1m": 3.71,
      "ret3m": 1.32,
      "ret6m": 3.71,
      "ret1y": 25.33,
      "ret2y": 27.22,
      "ret3y": 78.19
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9267,
      "ret1w": 0.26,
      "ret1m": -0.19,
      "ret3m": -1.1,
      "ret6m": -1.67,
      "ret1y": -3.25,
      "ret2y": -4.91,
      "ret3y": -3.01
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6024,
      "ret1w": 1.43,
      "ret1m": -2.36,
      "ret3m": -7.28,
      "ret6m": -11.0,
      "ret1y": 24.71,
      "ret2y": 41.66,
      "ret3y": 97.3
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.548,
      "ret1w": 0.73,
      "ret1m": -0.22,
      "ret3m": -1.81,
      "ret6m": -2.24,
      "ret1y": 5.99,
      "ret2y": 4.05,
      "ret3y": 20.96
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.168,
      "ret1w": 0.6,
      "ret1m": -0.34,
      "ret3m": -6.49,
      "ret6m": 8.96,
      "ret1y": -9.74,
      "ret2y": -26.95,
      "ret3y": 92.42
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.925,
      "ret1w": 0.65,
      "ret1m": -2.12,
      "ret3m": -5.71,
      "ret6m": 0.11,
      "ret1y": -10.02,
      "ret2y": -27.9,
      "ret3y": 47.53
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7927,
      "ret1w": -0.2,
      "ret1m": -3.87,
      "ret3m": -6.19,
      "ret6m": -12.99,
      "ret1y": 32.63,
      "ret2y": 67.08,
      "ret3y": 143.54
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6134,
      "ret1w": 1.15,
      "ret1m": -0.68,
      "ret3m": 2.8,
      "ret6m": 9.68,
      "ret1y": 5.08,
      "ret2y": 35.58,
      "ret3y": 61.03
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7272,
      "ret1w": -0.09,
      "ret1m": -2.69,
      "ret3m": 0.4,
      "ret6m": -2.01,
      "ret1y": 12.8,
      "ret2y": 24.15,
      "ret3y": 59.85
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.287,
      "ret1w": -0.26,
      "ret1m": -3.65,
      "ret3m": -3.07,
      "ret6m": -6.76,
      "ret1y": 4.52,
      "ret2y": 9.05,
      "ret3y": 38.27
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.26,
      "ret1w": 0.32,
      "ret1m": -0.71,
      "ret3m": -4.69,
      "ret6m": -3.15,
      "ret1y": -0.94,
      "ret2y": 1.45,
      "ret3y": -12.33
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.074,
      "ret1w": 0.83,
      "ret1m": -0.14,
      "ret3m": -1.94,
      "ret6m": 0.19,
      "ret1y": -14.58,
      "ret2y": 10.08,
      "ret3y": 49.93
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0121,
      "ret1w": 0.02,
      "ret1m": 0.08,
      "ret3m": 0.08,
      "ret6m": 0.47,
      "ret1y": 1.42,
      "ret2y": 2.22,
      "ret3y": 3.48
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0111,
      "ret1w": 0.03,
      "ret1m": 0.08,
      "ret3m": 0.09,
      "ret6m": 0.45,
      "ret1y": 1.43,
      "ret2y": 2.28,
      "ret3y": 3.64
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.397,
      "ret1w": 1.31,
      "ret1m": 0.43,
      "ret3m": -6.3,
      "ret6m": -12.03,
      "ret1y": -3.25,
      "ret2y": -2.1,
      "ret3y": 40.26
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.798,
      "ret1w": 1.71,
      "ret1m": 1.01,
      "ret3m": -6.52,
      "ret6m": -11.57,
      "ret1y": -0.74,
      "ret2y": 6.15,
      "ret3y": 67.14
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6306,
      "ret1w": 0.46,
      "ret1m": -1.77,
      "ret3m": -4.51,
      "ret6m": -6.28,
      "ret1y": -9.67,
      "ret2y": 24.67,
      "ret3y": 73.84
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1203,
      "ret1w": 1.03,
      "ret1m": 0.25,
      "ret3m": -3.12,
      "ret6m": -5.95,
      "ret1y": 1.05,
      "ret2y": 9.83,
      "ret3y": 48.61
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1814,
      "ret1w": 1.03,
      "ret1m": 0.25,
      "ret3m": -3.08,
      "ret6m": -5.86,
      "ret1y": 1.26,
      "ret2y": 10.27,
      "ret3y": 49.8
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0129,
      "ret1w": 1.82,
      "ret1m": 2.77,
      "ret3m": -4.4,
      "ret6m": -9.54,
      "ret1y": -2.94,
      "ret2y": 8.73,
      "ret3y": 73.17
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7631,
      "ret1w": 1.0,
      "ret1m": -0.02,
      "ret3m": -4.24,
      "ret6m": -7.7,
      "ret1y": -2.1,
      "ret2y": 1.49,
      "ret3y": 43.59
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5747,
      "ret1w": 1.2,
      "ret1m": 1.42,
      "ret3m": -2.65,
      "ret6m": -3.04,
      "ret1y": -6.16,
      "ret2y": 10.44,
      "ret3y": 62.36
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.947,
      "ret1w": 1.71,
      "ret1m": 1.2,
      "ret3m": -7.65,
      "ret6m": -16.99,
      "ret1y": 6.64,
      "ret2y": 9.19,
      "ret3y": 80.28
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0972,
      "ret1w": 0.44,
      "ret1m": -1.48,
      "ret3m": -3.27,
      "ret6m": 1.89,
      "ret1y": -4.3,
      "ret2y": -2.1,
      "ret3y": 30.42
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5118,
      "ret1w": 0.54,
      "ret1m": 0.67,
      "ret3m": -0.3,
      "ret6m": 2.39,
      "ret1y": 3.03,
      "ret2y": 10.84,
      "ret3y": 29.14
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4325,
      "ret1w": 1.54,
      "ret1m": 0.82,
      "ret3m": -2.03,
      "ret6m": -1.28,
      "ret1y": 15.31,
      "ret2y": 13.67,
      "ret3y": 38.2
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7208,
      "ret1w": 1.49,
      "ret1m": 0.22,
      "ret3m": -6.64,
      "ret6m": -13.8,
      "ret1y": -0.1,
      "ret2y": 5.29,
      "ret3y": 62.84
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1714,
      "ret1w": 1.84,
      "ret1m": -1.11,
      "ret3m": -2.89,
      "ret6m": -11.94,
      "ret1y": 1.17,
      "ret2y": 5.11,
      "ret3y": 56.88
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1736,
      "ret1w": 1.84,
      "ret1m": -1.1,
      "ret3m": -2.84,
      "ret6m": -11.82,
      "ret1y": 1.25,
      "ret2y": 5.27,
      "ret3y": 56.33
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3776,
      "ret1w": -0.35,
      "ret1m": -0.49,
      "ret3m": -5.77,
      "ret6m": -13.52,
      "ret1y": -4.79,
      "ret2y": -1.94,
      "ret3y": 42.55
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4094,
      "ret1w": -0.35,
      "ret1m": -0.48,
      "ret3m": -5.73,
      "ret6m": -13.43,
      "ret1y": -4.6,
      "ret2y": -1.54,
      "ret3y": 43.7
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.989,
      "ret1w": -0.52,
      "ret1m": -0.77,
      "ret3m": -7.35,
      "ret6m": -20.47,
      "ret1y": 0.85,
      "ret2y": 4.2,
      "ret3y": 67.52
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1638,
      "ret1w": 0.11,
      "ret1m": 0.17,
      "ret3m": -0.42,
      "ret6m": -0.61,
      "ret1y": 0.25,
      "ret2y": 1.7,
      "ret3y": 7.99
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1838,
      "ret1w": 0.11,
      "ret1m": 0.18,
      "ret3m": -0.4,
      "ret6m": -0.54,
      "ret1y": 0.4,
      "ret2y": 2.0,
      "ret3y": 8.64
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0855,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.13,
      "ret6m": 0.43,
      "ret1y": 0.9,
      "ret2y": 1.88,
      "ret3y": 3.21
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4094,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": -0.06,
      "ret6m": 0.13,
      "ret1y": 0.0,
      "ret2y": 0.71,
      "ret3y": 12.51
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4618,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": -0.03,
      "ret6m": 0.23,
      "ret1y": 0.2,
      "ret2y": 1.11,
      "ret3y": 13.41
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1427,
      "ret1w": 0.8,
      "ret1m": 1.56,
      "ret3m": -0.81,
      "ret6m": -3.64,
      "ret1y": 14.15,
      "ret2y": 23.83,
      "ret3y": 69.79
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2317,
      "ret1w": 0.54,
      "ret1m": 0.7,
      "ret3m": -1.86,
      "ret6m": -3.28,
      "ret1y": 6.43,
      "ret2y": 9.4,
      "ret3y": 50.78
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 4.6361
      },
      {
        "date": "2026-09-18",
        "nav": 4.7629
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 4.1077
      },
      {
        "date": "2026-09-18",
        "nav": 4.2009
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 6.0187
      },
      {
        "date": "2026-09-18",
        "nav": 6.2482
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.6933
      },
      {
        "date": "2026-09-18",
        "nav": 0.6958
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.9447
      },
      {
        "date": "2026-09-18",
        "nav": 2.0084
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.6892
      },
      {
        "date": "2026-09-18",
        "nav": 2.7246
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 5.334
      },
      {
        "date": "2026-09-18",
        "nav": 5.3799
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.917
      },
      {
        "date": "2026-09-18",
        "nav": 1.958
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3268
      },
      {
        "date": "2026-09-18",
        "nav": 1.3504
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 3.414
      },
      {
        "date": "2026-09-18",
        "nav": 3.509
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.083
      },
      {
        "date": "2026-09-18",
        "nav": 1.092
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.312
      },
      {
        "date": "2026-09-18",
        "nav": 2.344
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.7403
      },
      {
        "date": "2026-09-18",
        "nav": 1.8093
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.8869
      },
      {
        "date": "2026-09-18",
        "nav": 1.8943
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.6579
      },
      {
        "date": "2026-09-18",
        "nav": 1.6859
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.3945
      },
      {
        "date": "2026-09-18",
        "nav": 2.462
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.5143
      },
      {
        "date": "2026-09-18",
        "nav": 2.5503
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.005
      },
      {
        "date": "2026-09-18",
        "nav": 1.013
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.2689
      },
      {
        "date": "2026-09-18",
        "nav": 2.2732
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3205
      },
      {
        "date": "2026-09-18",
        "nav": 1.3399
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.2439
      },
      {
        "date": "2026-09-18",
        "nav": 1.261
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3235
      },
      {
        "date": "2026-09-18",
        "nav": 1.3416
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.0761
      },
      {
        "date": "2026-09-18",
        "nav": 1.0796
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.0498
      },
      {
        "date": "2026-09-18",
        "nav": 1.0532
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.6973
      },
      {
        "date": "2026-09-18",
        "nav": 0.7054
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.7151
      },
      {
        "date": "2026-09-18",
        "nav": 0.7234
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.8641
      },
      {
        "date": "2026-09-18",
        "nav": 2.9118
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.4324
      },
      {
        "date": "2026-09-18",
        "nav": 2.4773
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.7042
      },
      {
        "date": "2026-09-18",
        "nav": 0.7139
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 4.0479
      },
      {
        "date": "2026-09-18",
        "nav": 4.1534
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.5043
      },
      {
        "date": "2026-09-18",
        "nav": 0.5106
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.5141
      },
      {
        "date": "2026-09-18",
        "nav": 0.5204
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.2684
      },
      {
        "date": "2026-09-18",
        "nav": 1.2686
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.1057
      },
      {
        "date": "2026-09-18",
        "nav": 1.1138
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.3683
      },
      {
        "date": "2026-09-18",
        "nav": 1.3868
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 2.9651
      },
      {
        "date": "2026-09-18",
        "nav": 2.9953
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 3.371
      },
      {
        "date": "2026-09-18",
        "nav": 3.444
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 1.5009
      },
      {
        "date": "2026-09-18",
        "nav": 1.4955
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 0.6088
      },
      {
        "date": "2026-09-18",
        "nav": 0.6241
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-17",
        "nav": 14.957
      },
      {
        "date": "2026-09-18",
        "nav": 15.334
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.32,
      "nav": 4.7629,
      "price": 4.7629,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 4.2009,
      "price": 4.2009,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.33,
      "nav": 6.2482,
      "price": 6.2482,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 0.6958,
      "price": 0.6958,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.0084,
      "price": 2.0084,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 2.7246,
      "price": 2.7246,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 5.3799,
      "price": 5.3799,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.28,
      "nav": 1.958,
      "price": 1.958,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 1.3504,
      "price": 1.3504,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.31,
      "nav": 3.509,
      "price": 3.509,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.092,
      "price": 1.092,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 2.344,
      "price": 2.344,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.49,
      "nav": 1.8093,
      "price": 1.8093,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.8943,
      "price": 1.8943,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.6859,
      "price": 1.6859,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.27,
      "nav": 2.462,
      "price": 2.462,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.5503,
      "price": 2.5503,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 1.013,
      "price": 1.013,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.2732,
      "price": 2.2732,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 1.3399,
      "price": 1.3399,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.58,
      "sharpe": 0.96,
      "calmar": 0.96
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 0.46,
      "sharpe": 1.11,
      "calmar": 1.11
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 9.95,
      "sharpe": 5.01,
      "calmar": 5.01
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.26,
      "sharpe": -1.78,
      "calmar": -1.78
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.69,
      "sharpe": -4.73,
      "calmar": -4.73
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.88,
      "sharpe": -3.97,
      "calmar": -3.97
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.8,
      "sharpe": -1.3,
      "calmar": -1.3
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 8.5,
      "sharpe": 0.01,
      "calmar": 0.01
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 4.3,
      "sharpe": 0.19,
      "calmar": 0.19
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.4,
      "sharpe": 3.19,
      "calmar": 3.19
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.69,
      "sharpe": -1.28,
      "calmar": -1.28
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.68,
      "sharpe": -1.81,
      "calmar": -1.81
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 14.61,
      "sharpe": -2.97,
      "calmar": -2.97
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.17,
      "sharpe": 0.02,
      "calmar": 0.02
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.84,
      "sharpe": -0.11,
      "calmar": -0.11
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 8.22,
      "sharpe": 2.86,
      "calmar": 2.86
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.6,
      "sharpe": -1.25,
      "calmar": -1.25
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 7.79,
      "sharpe": 0.31,
      "calmar": 0.31
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.47,
      "sharpe": -1.37,
      "calmar": -1.37
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.25,
      "sharpe": 0.51,
      "calmar": 0.51
    }
  ],
  "news": [
    {
      "title": "新华社香港9月19日电题：厚植民生底色香港首个五年规划积极回应市民期盼谢妞、郭辛《香港特别行政区经济和社会发展第一个五年规划（2026-2030年）》16日正式公布，2026年施政报告同日发布。五年规划谋长远、绘出蓝图，施政报告抓当下、细化方案。二者环环相扣，贯穿始终的主线正是民生为本。安居为先：市民“上楼”有了时间表住房是香港市民最关切的民生议题。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:16",
      "impact": "neutral"
    },
    {
      "title": "9月19日，2026清华五道口首席经济学家论坛在清华大学举行，主题为“2026中国与世界经济回顾和展望——全球再平衡与国际货币体系重构”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:12",
      "impact": "neutral"
    },
    {
      "title": "9月19日的2026清华五道口首席经济学家论坛上，围绕“失衡”。多位知名经济学家在“宏观政策与全球再平衡”的圆桌讨论中展开探讨与辩论，特别是在“全球失衡”背景下，中国应否“举外债”？专家明显分成了两派意见。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:11",
      "impact": "neutral"
    },
    {
      "title": "人民财讯9月19日电，在2026世界制造业大会开幕前夕，9月19日下午，安徽省委书记梁言顺，省委副书记、省长王清宪在合肥与央企国企、金融机构负责人举行工作会谈，梁言顺说，希望大家围绕国家发展战略，发挥主业优势，结合安徽所需，在科技创新、产业发展、对外开放、绿色转型等方面深化合作，努力形成更多标志性成果。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:08",
      "impact": "neutral"
    },
    {
      "title": "中国社会科学院学部委员、世界经济与政治研究所研究员余永定9月19日在2026清华五道口首席经济学家论坛上表示，中国基础设施投资远未饱和。基础设施具有长期性、基础性和公益性，不能要求基础设施投资有短期的商业回报。基础设施投资主要看社会效益、长期效益。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:05",
      "impact": "neutral"
    },
    {
      "title": "下周财经日历（9月21日-9月27日）",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:00",
      "impact": "neutral"
    },
    {
      "title": "市财政局发文！对2025年度政府采购工作情况开展监督考核",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:55",
      "impact": "neutral"
    },
    {
      "title": "9月19日，2026清华五道口首席经济学家论坛在清华大学举行，主题为“2026中国与世界经济回顾和展望——全球再平衡与国际货币体系重构”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:50",
      "impact": "neutral"
    },
    {
      "title": "9月18日，生态环境部联合相关部门在北京召开全国深入打击生态环境监测机构弄虚作假问题部署推进会，要求严厉打击监测造假行为，为推动生态环境质量持续改善提供有力支撑。近年来全国生态环境系统开展环境质量监测事权上收，严厉打击监测造假行为，但当前生态环境监测机构造假问题依然严重，形势依然严峻，必须始终坚持零容忍态度，重拳整治生态环境监测机构弄虚作假问题。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:46",
      "impact": "neutral"
    },
    {
      "title": "19日，商务部新闻发言人就美方将《2026年格雷厄姆制裁俄罗斯和伊朗法案》签署成法答记者问。问：美东时间9月18日，美方将《2026年格雷厄姆制裁俄罗斯和伊朗法案》签署成法。该法全面强化对俄制裁，延长对伊有关制裁，并明确可对进口俄罗斯石油或天然气的第三国加征最高100%所谓“次级关税”。有评论认为，中方将是美征税目标之一。请问中方对此有何评论？答：我们注意到有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:04",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 55,
    "label": "中性",
    "upDownRatio": "4,432/784",
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
