// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-18 18:46:54
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-18 18:46 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-18",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3587.83,
      "change": 3.25,
      "changePct": "+0.09%",
      "high": 3596.55,
      "low": 3560.45,
      "volume": 423934832.0,
      "amount": 650231690000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10659.41,
      "change": 20.89,
      "changePct": "+0.20%",
      "high": 10722.67,
      "low": 10515.14,
      "volume": 507035744.0,
      "amount": 719470540000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2311.62,
      "change": 19.42,
      "changePct": "+0.85%",
      "high": 2329.91,
      "low": 2265.76,
      "volume": 148449739.0,
      "amount": 336830830000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1247.99,
      "change": 26.8,
      "changePct": "+2.19%",
      "high": 1263.5,
      "low": 1213.76,
      "volume": 9276698.0,
      "amount": 90748060000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3983.77,
      "change": 7.31,
      "changePct": "+0.18%",
      "high": 3991.16,
      "low": 3948.5,
      "volume": 167318271.0,
      "amount": 389913840000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6282.22,
      "change": -0.79,
      "changePct": "-0.01%",
      "high": 6335.25,
      "low": 6194.85,
      "volume": 116756735.0,
      "amount": 239355680000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.43万亿",
      "label": "成交额",
      "rawAmount": 2426550640000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,466/1,266",
      "label": "涨/跌家数",
      "rawUp": 3466,
      "rawDown": 1266,
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
    "totalInflow": 16.88,
    "totalOutflow": 0,
    "netFlow": 16.88,
    "netFlowTrend": [
      3.38,
      6.75,
      10.13,
      13.5,
      16.88
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
      "inflow": 8.2,
      "pct": 1.33
    },
    {
      "name": "半导体",
      "inflow": 3.37,
      "pct": 1.58
    },
    {
      "name": "芯片",
      "inflow": 1.74,
      "pct": 2.31
    },
    {
      "name": "5G",
      "inflow": 1.65,
      "pct": 2.02
    },
    {
      "name": "煤炭",
      "inflow": 1.03,
      "pct": 0.34
    },
    {
      "name": "人工智能",
      "inflow": 0.33,
      "pct": 1.62
    },
    {
      "name": "云计算",
      "inflow": 0.23,
      "pct": 1.86
    },
    {
      "name": "电子",
      "inflow": 0.14,
      "pct": 2.72
    },
    {
      "name": "钢铁",
      "inflow": 0.13,
      "pct": 0.49
    },
    {
      "name": "计算机",
      "inflow": 0.06,
      "pct": 1.66
    },
    {
      "name": "基建",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "食品",
      "inflow": -0.06,
      "pct": -0.38
    },
    {
      "name": "农业",
      "inflow": -0.11,
      "pct": -0.83
    },
    {
      "name": "家电",
      "inflow": -0.19,
      "pct": -0.36
    },
    {
      "name": "新能源车",
      "inflow": -0.26,
      "pct": -0.39
    },
    {
      "name": "新能源",
      "inflow": -0.28,
      "pct": -0.1
    },
    {
      "name": "地产",
      "inflow": -0.58,
      "pct": -0.37
    },
    {
      "name": "医药",
      "inflow": -1.09,
      "pct": -0.26
    },
    {
      "name": "券商",
      "inflow": -1.52,
      "pct": -0.42
    },
    {
      "name": "银行",
      "inflow": -4.22,
      "pct": -0.22
    }
  ],
  "sectors": [
    {
      "name": "电子",
      "code": "515260",
      "price": 0.604,
      "changePct": 2.72,
      "change": 0.016,
      "turnover": 0.48
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.84,
      "changePct": 2.31,
      "change": 0.019,
      "turnover": 5.81
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.606,
      "changePct": 2.02,
      "change": 0.012,
      "turnover": 5.49
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.368,
      "changePct": 1.86,
      "change": 0.025,
      "turnover": 0.78
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.979,
      "changePct": 1.66,
      "change": 0.016,
      "turnover": 0.21
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.751,
      "changePct": 1.62,
      "change": 0.012,
      "turnover": 1.09
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.771,
      "changePct": 1.58,
      "change": 0.012,
      "turnover": 11.24
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.382,
      "changePct": 1.33,
      "change": 0.005,
      "turnover": 27.33
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.033,
      "changePct": 0.49,
      "change": 0.005,
      "turnover": 0.44
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.18,
      "changePct": 0.34,
      "change": 0.004,
      "turnover": 3.44
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.947,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.04
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.91,
      "changePct": -0.1,
      "change": -0.002,
      "turnover": 0.95
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.914,
      "changePct": -0.22,
      "change": -0.002,
      "turnover": 14.07
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.379,
      "changePct": -0.26,
      "change": -0.001,
      "turnover": 3.64
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.377,
      "changePct": -0.36,
      "change": -0.005,
      "turnover": 0.64
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.078,
      "changePct": -0.37,
      "change": -0.004,
      "turnover": 1.92
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.521,
      "changePct": -0.38,
      "change": -0.002,
      "turnover": 0.21
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.267,
      "changePct": -0.39,
      "change": -0.005,
      "turnover": 0.86
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.47,
      "changePct": -0.42,
      "change": -0.002,
      "turnover": 5.06
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.72,
      "changePct": -0.83,
      "change": -0.006,
      "turnover": 0.38
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.66,
      "changePct": -0.9,
      "change": -0.006,
      "turnover": 1.79
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.777,
      "changePct": -1.15,
      "change": -0.009,
      "turnover": 5.71
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.44,
      "changePct": -1.35,
      "change": -0.006,
      "turnover": 3.97
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.759,
      "changePct": -1.43,
      "change": -0.011,
      "turnover": 3.64
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.333,
      "changePct": -1.48,
      "change": -0.005,
      "turnover": 4.59
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.943,
      "changePct": -1.57,
      "change": -0.015,
      "turnover": 2.83
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.939,
      "changePct": -2.19,
      "change": -0.021,
      "turnover": 1.08
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.294,
      "changePct": -2.71,
      "change": -0.036,
      "turnover": 5.04
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.322,
      "changePct": 2.16,
      "amount": 94.12,
      "netFlow": 23.53
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.058,
      "changePct": 0.4,
      "amount": 76.39,
      "netFlow": 19.1
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.946,
      "changePct": 0.25,
      "amount": 21.73,
      "netFlow": 5.43
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.771,
      "changePct": 1.58,
      "amount": 11.24,
      "netFlow": 2.81
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.235,
      "changePct": 0.31,
      "amount": 10.39,
      "netFlow": 2.6
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.91,
      "changePct": -0.1,
      "amount": 0.95,
      "netFlow": -0.24
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.379,
      "changePct": -0.26,
      "amount": 3.64,
      "netFlow": -0.91
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.47,
      "changePct": -0.42,
      "amount": 5.06,
      "netFlow": -1.27
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.883,
      "changePct": -0.03,
      "amount": 21.05,
      "netFlow": -5.26
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.309,
      "changePct": -0.13,
      "amount": 22.24,
      "netFlow": -5.56
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.058,
      "changePct": 0.4,
      "amount": 76.39,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.883,
      "changePct": -0.03,
      "amount": 21.05,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.309,
      "changePct": -0.13,
      "amount": 22.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.235,
      "changePct": 0.31,
      "amount": 10.39,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.946,
      "changePct": 0.25,
      "amount": 21.73,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "电子",
      "turnover": 0.48,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 5.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 5.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.78,
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
      "name": "人工智能",
      "turnover": 1.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.24,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 27.33,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.44,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 3.44,
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
      "name": "新能源",
      "turnover": 0.95,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 14.07,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 3.64,
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
      "name": "地产",
      "turnover": 1.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 5.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.38,
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
      "nav": 3.6062,
      "ret1w": -1.72,
      "ret1m": -14.02,
      "ret3m": -5.06,
      "ret6m": -23.51,
      "ret1y": -29.99,
      "ret2y": -4.98,
      "ret3y": 69.58
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.6008,
      "ret1w": 0.42,
      "ret1m": -10.55,
      "ret3m": -22.76,
      "ret6m": -41.37,
      "ret1y": -46.48,
      "ret2y": -30.39,
      "ret3y": -3.89
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.9506,
      "ret1w": 2.13,
      "ret1m": -18.06,
      "ret3m": -33.62,
      "ret6m": -50.68,
      "ret1y": -47.47,
      "ret2y": -6.37,
      "ret3y": 53.75
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7734,
      "ret1w": -0.88,
      "ret1m": 2.38,
      "ret3m": 9.53,
      "ret6m": 9.5,
      "ret1y": 8.98,
      "ret2y": -4.38,
      "ret3y": 6.51
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8468,
      "ret1w": -1.29,
      "ret1m": -8.77,
      "ret3m": -3.95,
      "ret6m": -18.65,
      "ret1y": -31.98,
      "ret2y": -38.92,
      "ret3y": -25.29
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5156,
      "ret1w": -1.55,
      "ret1m": -6.85,
      "ret3m": -3.2,
      "ret6m": -8.68,
      "ret1y": -21.99,
      "ret2y": -28.78,
      "ret3y": 5.85
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2812,
      "ret1w": 0.05,
      "ret1m": -1.78,
      "ret3m": 1.64,
      "ret6m": -4.81,
      "ret1y": -3.64,
      "ret2y": -0.11,
      "ret3y": 29.0
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.579,
      "ret1w": 0.0,
      "ret1m": -7.77,
      "ret3m": -9.1,
      "ret6m": -20.81,
      "ret1y": -25.24,
      "ret2y": -12.91,
      "ret3y": 21.93
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.078,
      "ret1w": 0.83,
      "ret1m": -6.49,
      "ret3m": -9.15,
      "ret6m": -23.77,
      "ret1y": -24.06,
      "ret2y": -12.88,
      "ret3y": 1.52
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.463,
      "ret1w": -0.12,
      "ret1m": -6.99,
      "ret3m": -11.53,
      "ret6m": -33.79,
      "ret1y": -26.78,
      "ret2y": 16.67,
      "ret3y": 98.79
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.166,
      "ret1w": -1.02,
      "ret1m": 1.83,
      "ret3m": 5.33,
      "ret6m": 2.01,
      "ret1y": 6.19,
      "ret2y": -8.84,
      "ret3y": -7.31
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.142,
      "ret1w": -1.7,
      "ret1m": -6.79,
      "ret3m": -4.76,
      "ret6m": -13.07,
      "ret1y": -15.97,
      "ret2y": -18.89,
      "ret3y": 2.29
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2087,
      "ret1w": 1.74,
      "ret1m": -4.54,
      "ret3m": -17.8,
      "ret6m": -37.84,
      "ret1y": -59.63,
      "ret2y": -56.46,
      "ret3y": -35.97
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.895,
      "ret1w": -0.84,
      "ret1m": -0.71,
      "ret3m": 2.04,
      "ret6m": -1.53,
      "ret1y": 7.58,
      "ret2y": 0.13,
      "ret3y": -3.31
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3631,
      "ret1w": 0.35,
      "ret1m": -6.59,
      "ret3m": -8.52,
      "ret6m": -20.6,
      "ret1y": -23.54,
      "ret2y": -12.49,
      "ret3y": 18.56
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2851,
      "ret1w": 0.64,
      "ret1m": -16.91,
      "ret3m": -29.85,
      "ret6m": -50.87,
      "ret1y": -52.01,
      "ret2y": -1.42,
      "ret3y": 27.23
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5554,
      "ret1w": -0.66,
      "ret1m": -1.74,
      "ret3m": -0.11,
      "ret6m": 0.43,
      "ret1y": -3.04,
      "ret2y": -6.03,
      "ret3y": 2.91
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.874,
      "ret1w": -1.69,
      "ret1m": -7.42,
      "ret3m": -6.82,
      "ret6m": -21.19,
      "ret1y": -7.51,
      "ret2y": -17.55,
      "ret3y": -18.55
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4363,
      "ret1w": -0.49,
      "ret1m": 2.49,
      "ret3m": 4.14,
      "ret6m": 5.29,
      "ret1y": 3.65,
      "ret2y": 2.94,
      "ret3y": 11.55
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1568,
      "ret1w": -0.4,
      "ret1m": -5.86,
      "ret3m": -5.74,
      "ret6m": -15.13,
      "ret1y": -11.84,
      "ret2y": -1.42,
      "ret3y": 36.17
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9197,
      "ret1w": 0.9,
      "ret1m": -7.7,
      "ret3m": -13.59,
      "ret6m": -31.95,
      "ret1y": -32.7,
      "ret2y": -19.94,
      "ret3y": -0.5
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9791,
      "ret1w": 0.9,
      "ret1m": -7.7,
      "ret3m": -13.57,
      "ret6m": -31.88,
      "ret1y": -32.57,
      "ret2y": -19.63,
      "ret3y": 0.29
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0345,
      "ret1w": -0.28,
      "ret1m": -0.93,
      "ret3m": -2.16,
      "ret6m": -6.01,
      "ret1y": -5.38,
      "ret2y": -4.58,
      "ret3y": 1.69
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0102,
      "ret1w": -0.29,
      "ret1m": -0.92,
      "ret3m": -2.1,
      "ret6m": -5.86,
      "ret1y": -5.09,
      "ret2y": -4.01,
      "ret3y": 2.92
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7088,
      "ret1w": -0.3,
      "ret1m": -0.32,
      "ret3m": 1.99,
      "ret6m": -2.96,
      "ret1y": -8.19,
      "ret2y": -13.86,
      "ret3y": 1.58
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7275,
      "ret1w": -0.3,
      "ret1m": -0.32,
      "ret3m": 2.03,
      "ret6m": -2.84,
      "ret1y": -7.96,
      "ret2y": -13.42,
      "ret3y": 2.59
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8833,
      "ret1w": 0.68,
      "ret1m": -7.81,
      "ret3m": -20.84,
      "ret6m": -36.21,
      "ret1y": -32.44,
      "ret2y": 2.03,
      "ret3y": 65.77
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2176,
      "ret1w": -1.05,
      "ret1m": -7.43,
      "ret3m": -3.19,
      "ret6m": -15.74,
      "ret1y": -15.25,
      "ret2y": 4.31,
      "ret3y": 44.06
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6817,
      "ret1w": -1.55,
      "ret1m": -8.03,
      "ret3m": 0.13,
      "ret6m": -11.61,
      "ret1y": -22.14,
      "ret2y": -16.21,
      "ret3y": -3.82
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.756,
      "ret1w": -0.94,
      "ret1m": -9.09,
      "ret3m": -0.43,
      "ret6m": -15.47,
      "ret1y": -11.52,
      "ret2y": 22.97,
      "ret3y": 84.22
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4526,
      "ret1w": 0.64,
      "ret1m": -0.18,
      "ret3m": -3.89,
      "ret6m": -14.39,
      "ret1y": -16.37,
      "ret2y": 0.73,
      "ret3y": 23.56
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4616,
      "ret1w": 0.63,
      "ret1m": -0.17,
      "ret3m": -3.85,
      "ret6m": -14.33,
      "ret1y": -16.23,
      "ret2y": 1.14,
      "ret3y": 24.55
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2647,
      "ret1w": 0.14,
      "ret1m": 0.81,
      "ret3m": -0.29,
      "ret6m": -1.06,
      "ret1y": -1.56,
      "ret2y": -1.89,
      "ret3y": 0.93
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0634,
      "ret1w": -0.04,
      "ret1m": 0.2,
      "ret3m": -3.16,
      "ret6m": -7.33,
      "ret1y": -3.37,
      "ret2y": -8.77,
      "ret3y": 1.19
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1745,
      "ret1w": 0.3,
      "ret1m": 0.88,
      "ret3m": -2.4,
      "ret6m": -21.26,
      "ret1y": -29.71,
      "ret2y": -20.87,
      "ret3y": -16.73
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6187,
      "ret1w": 0.67,
      "ret1m": -5.65,
      "ret3m": -9.09,
      "ret6m": -13.28,
      "ret1y": -17.35,
      "ret2y": -5.94,
      "ret3y": 21.12
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.056,
      "ret1w": 1.23,
      "ret1m": -10.84,
      "ret3m": -22.56,
      "ret6m": -41.9,
      "ret1y": -47.13,
      "ret2y": -1.01,
      "ret3y": 63.96
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.6079,
      "ret1w": 0.12,
      "ret1m": 3.04,
      "ret3m": 4.61,
      "ret6m": 10.12,
      "ret1y": 9.68,
      "ret2y": 5.02,
      "ret3y": 6.67
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4797,
      "ret1w": -1.24,
      "ret1m": -18.83,
      "ret3m": -9.88,
      "ret6m": -30.08,
      "ret1y": -35.58,
      "ret2y": -13.88,
      "ret3y": -20.45
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.152,
      "ret1w": 3.74,
      "ret1m": -14.84,
      "ret3m": -28.77,
      "ret6m": -47.86,
      "ret1y": -32.55,
      "ret2y": 10.84,
      "ret3y": 97.0
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0434,
      "ret1w": -0.01,
      "ret1m": -0.88,
      "ret3m": -1.24,
      "ret6m": -2.53,
      "ret1y": -2.5,
      "ret2y": -1.43,
      "ret3y": 1.52
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0911,
      "ret1w": -0.01,
      "ret1m": -0.87,
      "ret3m": -1.25,
      "ret6m": -2.5,
      "ret1y": -2.41,
      "ret2y": -1.22,
      "ret3y": 2.15
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0666,
      "ret1w": 0.01,
      "ret1m": -0.08,
      "ret3m": -0.04,
      "ret6m": 0.23,
      "ret1y": 0.53,
      "ret2y": 1.43,
      "ret3y": 2.75
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1017,
      "ret1w": 0.02,
      "ret1m": -0.05,
      "ret3m": 0.03,
      "ret6m": 0.3,
      "ret1y": 0.63,
      "ret2y": 1.45,
      "ret3y": 3.74
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1116,
      "ret1w": 0.02,
      "ret1m": -0.04,
      "ret3m": 0.05,
      "ret6m": 0.35,
      "ret1y": 0.73,
      "ret2y": 1.66,
      "ret3y": 4.17
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.078,
      "ret1w": 0.01,
      "ret1m": -0.03,
      "ret3m": 0.03,
      "ret6m": 0.19,
      "ret1y": 0.56,
      "ret2y": 1.37,
      "ret3y": 2.84
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0932,
      "ret1w": 0.02,
      "ret1m": -0.02,
      "ret3m": 0.05,
      "ret6m": 0.27,
      "ret1y": 0.71,
      "ret2y": 1.69,
      "ret3y": 3.49
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9932,
      "ret1w": 0.12,
      "ret1m": -2.0,
      "ret3m": -3.14,
      "ret6m": -8.3,
      "ret1y": -9.03,
      "ret2y": -1.91,
      "ret3y": 3.82
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1399,
      "ret1w": 0.04,
      "ret1m": -2.71,
      "ret3m": -3.33,
      "ret6m": -8.09,
      "ret1y": -9.52,
      "ret2y": -4.95,
      "ret3y": -1.74
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0003,
      "ret1w": 0.12,
      "ret1m": -1.99,
      "ret3m": -3.1,
      "ret6m": -8.2,
      "ret1y": -8.85,
      "ret2y": -1.53,
      "ret3y": 4.67
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0441,
      "ret1w": 0.01,
      "ret1m": -0.12,
      "ret3m": -0.05,
      "ret6m": 0.25,
      "ret1y": 0.64,
      "ret2y": 1.54,
      "ret3y": 3.44
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0856,
      "ret1w": 0.12,
      "ret1m": -1.67,
      "ret3m": -3.95,
      "ret6m": -8.32,
      "ret1y": -10.17,
      "ret2y": -8.23,
      "ret3y": -1.32
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2019,
      "ret1w": -0.09,
      "ret1m": -0.1,
      "ret3m": 0.21,
      "ret6m": -1.52,
      "ret1y": -2.07,
      "ret2y": 0.75,
      "ret3y": 10.07
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.114,
      "ret1w": 0.03,
      "ret1m": -0.8,
      "ret3m": -0.74,
      "ret6m": -2.98,
      "ret1y": -3.12,
      "ret2y": 0.61,
      "ret3y": 6.76
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1848,
      "ret1w": 0.03,
      "ret1m": -0.8,
      "ret3m": -0.7,
      "ret6m": -2.89,
      "ret1y": -2.93,
      "ret2y": 1.01,
      "ret3y": 7.64
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.728,
      "ret1w": -1.31,
      "ret1m": -6.04,
      "ret3m": -18.49,
      "ret6m": -31.29,
      "ret1y": -27.64,
      "ret2y": 25.04,
      "ret3y": 75.43
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.843,
      "ret1w": -0.8,
      "ret1m": -1.92,
      "ret3m": -4.24,
      "ret6m": -4.99,
      "ret1y": -3.0,
      "ret2y": 2.1,
      "ret3y": 25.19
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6333,
      "ret1w": -0.82,
      "ret1m": -1.74,
      "ret3m": -4.76,
      "ret6m": -13.3,
      "ret1y": -21.96,
      "ret2y": -10.97,
      "ret3y": 20.55
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.0387,
      "ret1w": -0.88,
      "ret1m": -6.75,
      "ret3m": -10.65,
      "ret6m": -15.23,
      "ret1y": -7.6,
      "ret2y": 4.78,
      "ret3y": 29.85
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.918,
      "ret1w": 0.08,
      "ret1m": -0.5,
      "ret3m": -0.1,
      "ret6m": -2.03,
      "ret1y": -2.4,
      "ret2y": -5.87,
      "ret3y": -3.26
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.1836,
      "ret1w": -0.74,
      "ret1m": -3.92,
      "ret3m": -10.69,
      "ret6m": -22.2,
      "ret1y": -19.39,
      "ret2y": 15.64,
      "ret3y": 52.74
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.28,
      "ret1w": -1.45,
      "ret1m": -3.01,
      "ret3m": -4.51,
      "ret6m": -7.6,
      "ret1y": -6.69,
      "ret2y": -2.51,
      "ret3y": 8.82
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.743,
      "ret1w": -0.54,
      "ret1m": -5.11,
      "ret3m": -10.91,
      "ret6m": -24.26,
      "ret1y": -25.63,
      "ret2y": -35.89,
      "ret3y": -18.97
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.1276,
      "ret1w": -2.68,
      "ret1m": -7.74,
      "ret3m": -18.27,
      "ret6m": -28.53,
      "ret1y": -26.91,
      "ret2y": 23.71,
      "ret3y": 88.92
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4457,
      "ret1w": -0.43,
      "ret1m": -2.69,
      "ret3m": -9.79,
      "ret6m": -7.89,
      "ret1y": -5.98,
      "ret2y": 14.77,
      "ret3y": 41.36
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.504,
      "ret1w": -1.4,
      "ret1m": -3.85,
      "ret3m": -8.74,
      "ret6m": -12.58,
      "ret1y": -8.63,
      "ret2y": 5.17,
      "ret3y": 36.57
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1382,
      "ret1w": -1.36,
      "ret1m": -3.94,
      "ret3m": -7.11,
      "ret6m": -14.28,
      "ret1y": -14.1,
      "ret2y": -3.88,
      "ret3y": 17.35
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.279,
      "ret1w": -1.31,
      "ret1m": -2.07,
      "ret3m": 2.98,
      "ret6m": -3.25,
      "ret1y": -0.85,
      "ret2y": 4.84,
      "ret3y": -7.28
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.837,
      "ret1w": 0.05,
      "ret1m": -4.07,
      "ret3m": -7.27,
      "ret6m": -13.14,
      "ret1y": -16.5,
      "ret2y": -10.3,
      "ret3y": 32.7
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.1283,
      "ret1w": -0.86,
      "ret1m": -4.07,
      "ret3m": -11.92,
      "ret6m": -22.44,
      "ret1y": -18.34,
      "ret2y": 10.03,
      "ret3y": 34.82
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0128,
      "ret1w": 0.01,
      "ret1m": -0.16,
      "ret3m": 0.07,
      "ret6m": 0.47,
      "ret1y": 1.08,
      "ret2y": 2.32,
      "ret3y": 3.73
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0005,
      "ret1w": 0.01,
      "ret1m": -0.16,
      "ret3m": 0.08,
      "ret6m": 0.5,
      "ret1y": 1.09,
      "ret2y": 2.38,
      "ret3y": 3.89
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.189,
      "ret1w": 0.51,
      "ret1m": -3.25,
      "ret3m": -5.56,
      "ret6m": -20.25,
      "ret1y": -23.19,
      "ret2y": -16.03,
      "ret3y": -3.1
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.194,
      "ret1w": 0.6,
      "ret1m": -5.67,
      "ret3m": -10.3,
      "ret6m": -26.7,
      "ret1y": -27.9,
      "ret2y": -16.39,
      "ret3y": 3.93
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3605,
      "ret1w": -1.65,
      "ret1m": -6.48,
      "ret3m": -11.12,
      "ret6m": -20.33,
      "ret1y": -22.14,
      "ret2y": -8.77,
      "ret3y": 28.35
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8122,
      "ret1w": 0.57,
      "ret1m": -3.27,
      "ret3m": -6.7,
      "ret6m": -17.19,
      "ret1y": -16.74,
      "ret2y": -7.87,
      "ret3y": 6.36
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8657,
      "ret1w": 0.57,
      "ret1m": -3.26,
      "ret3m": -6.67,
      "ret6m": -17.11,
      "ret1y": -16.57,
      "ret2y": -7.5,
      "ret3y": 7.21
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6397,
      "ret1w": 0.01,
      "ret1m": -6.08,
      "ret3m": -6.82,
      "ret6m": -22.12,
      "ret1y": -25.06,
      "ret2y": -10.92,
      "ret3y": 8.89
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5714,
      "ret1w": 0.17,
      "ret1m": -2.14,
      "ret3m": -4.15,
      "ret6m": -14.65,
      "ret1y": -15.85,
      "ret2y": -10.81,
      "ret3y": 3.66
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4123,
      "ret1w": -0.13,
      "ret1m": -4.65,
      "ret3m": -3.7,
      "ret6m": -12.69,
      "ret1y": -14.64,
      "ret2y": -4.13,
      "ret3y": 18.7
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4504,
      "ret1w": 0.89,
      "ret1m": -6.46,
      "ret3m": -12.52,
      "ret6m": -31.2,
      "ret1y": -31.61,
      "ret2y": -17.69,
      "ret3y": 5.41
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9965,
      "ret1w": -0.12,
      "ret1m": -0.67,
      "ret3m": -1.69,
      "ret6m": -7.92,
      "ret1y": -7.51,
      "ret2y": -9.03,
      "ret3y": 5.28
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.466,
      "ret1w": -1.85,
      "ret1m": -2.01,
      "ret3m": -2.44,
      "ret6m": -3.32,
      "ret1y": 1.84,
      "ret2y": 5.83,
      "ret3y": 30.01
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.1514,
      "ret1w": -0.69,
      "ret1m": -2.41,
      "ret3m": -7.04,
      "ret6m": -10.05,
      "ret1y": -8.27,
      "ret2y": 2.32,
      "ret3y": 19.92
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1622,
      "ret1w": 0.63,
      "ret1m": -4.78,
      "ret3m": -10.33,
      "ret6m": -25.8,
      "ret1y": -27.83,
      "ret2y": -16.92,
      "ret3y": 2.78
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9306,
      "ret1w": -2.62,
      "ret1m": -4.26,
      "ret3m": -9.66,
      "ret6m": -22.86,
      "ret1y": -26.49,
      "ret2y": -15.76,
      "ret3y": 5.71
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.934,
      "ret1w": -2.62,
      "ret1m": -4.25,
      "ret3m": -9.61,
      "ret6m": -22.68,
      "ret1y": -26.33,
      "ret2y": -15.67,
      "ret3y": 5.48
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1971,
      "ret1w": -0.27,
      "ret1m": -2.92,
      "ret3m": -5.23,
      "ret6m": -18.11,
      "ret1y": -23.45,
      "ret2y": -13.69,
      "ret3y": 5.72
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2255,
      "ret1w": -0.27,
      "ret1m": -2.92,
      "ret3m": -5.19,
      "ret6m": -18.03,
      "ret1y": -23.29,
      "ret2y": -13.34,
      "ret3y": 6.57
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5771,
      "ret1w": -1.2,
      "ret1m": -7.6,
      "ret3m": -12.09,
      "ret6m": -26.54,
      "ret1y": -29.68,
      "ret2y": -15.87,
      "ret3y": 10.69
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1501,
      "ret1w": 0.01,
      "ret1m": -0.96,
      "ret3m": -0.55,
      "ret6m": -1.59,
      "ret1y": -1.66,
      "ret2y": 0.11,
      "ret3y": 4.64
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1705,
      "ret1w": 0.01,
      "ret1m": -0.96,
      "ret3m": -0.53,
      "ret6m": -1.51,
      "ret1y": -1.51,
      "ret2y": 0.42,
      "ret3y": 5.28
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0874,
      "ret1w": 0.03,
      "ret1m": -0.06,
      "ret3m": 0.0,
      "ret6m": 0.3,
      "ret1y": 0.69,
      "ret2y": 1.74,
      "ret3y": 3.35
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4097,
      "ret1w": 0.04,
      "ret1m": -0.18,
      "ret3m": -0.11,
      "ret6m": -0.04,
      "ret1y": 0.09,
      "ret2y": 0.36,
      "ret3y": 4.97
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4632,
      "ret1w": 0.04,
      "ret1m": -0.16,
      "ret3m": -0.08,
      "ret6m": 0.06,
      "ret1y": 0.29,
      "ret2y": 0.77,
      "ret3y": 5.82
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7991,
      "ret1w": 0.12,
      "ret1m": -6.14,
      "ret3m": -7.44,
      "ret6m": -16.71,
      "ret1y": -8.37,
      "ret2y": 3.56,
      "ret3y": 27.7
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9467,
      "ret1w": -0.31,
      "ret1m": -10.28,
      "ret3m": -12.23,
      "ret6m": -24.57,
      "ret1y": -22.12,
      "ret2y": -17.92,
      "ret3y": 3.59
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 3.6692
      },
      {
        "date": "2026-11-18",
        "nav": 3.6062
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.5898
      },
      {
        "date": "2026-11-18",
        "nav": 2.6008
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.889
      },
      {
        "date": "2026-11-18",
        "nav": 2.9506
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.7803
      },
      {
        "date": "2026-11-18",
        "nav": 0.7734
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.8709
      },
      {
        "date": "2026-11-18",
        "nav": 1.8468
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.5551
      },
      {
        "date": "2026-11-18",
        "nav": 2.5156
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 5.2786
      },
      {
        "date": "2026-11-18",
        "nav": 5.2812
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.579
      },
      {
        "date": "2026-11-18",
        "nav": 1.579
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.0691
      },
      {
        "date": "2026-11-18",
        "nav": 1.078
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.466
      },
      {
        "date": "2026-11-18",
        "nav": 2.463
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.178
      },
      {
        "date": "2026-11-18",
        "nav": 1.166
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.179
      },
      {
        "date": "2026-11-18",
        "nav": 2.142
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.188
      },
      {
        "date": "2026-11-18",
        "nav": 1.2087
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.9111
      },
      {
        "date": "2026-11-18",
        "nav": 1.895
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.3583
      },
      {
        "date": "2026-11-18",
        "nav": 1.3631
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.2769
      },
      {
        "date": "2026-11-18",
        "nav": 1.2851
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.5725
      },
      {
        "date": "2026-11-18",
        "nav": 2.5554
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.889
      },
      {
        "date": "2026-11-18",
        "nav": 0.874
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.4482
      },
      {
        "date": "2026-11-18",
        "nav": 2.4363
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.1614
      },
      {
        "date": "2026-11-18",
        "nav": 1.1568
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.9115
      },
      {
        "date": "2026-11-18",
        "nav": 0.9197
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.9704
      },
      {
        "date": "2026-11-18",
        "nav": 0.9791
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.0374
      },
      {
        "date": "2026-11-18",
        "nav": 1.0345
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.0131
      },
      {
        "date": "2026-11-18",
        "nav": 1.0102
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.7109
      },
      {
        "date": "2026-11-18",
        "nav": 0.7088
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.7297
      },
      {
        "date": "2026-11-18",
        "nav": 0.7275
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.8705
      },
      {
        "date": "2026-11-18",
        "nav": 1.8833
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.2412
      },
      {
        "date": "2026-11-18",
        "nav": 2.2176
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.6924
      },
      {
        "date": "2026-11-18",
        "nav": 0.6817
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 3.7916
      },
      {
        "date": "2026-11-18",
        "nav": 3.756
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.4497
      },
      {
        "date": "2026-11-18",
        "nav": 0.4526
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.4587
      },
      {
        "date": "2026-11-18",
        "nav": 0.4616
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.2629
      },
      {
        "date": "2026-11-18",
        "nav": 1.2647
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.0638
      },
      {
        "date": "2026-11-18",
        "nav": 1.0634
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.171
      },
      {
        "date": "2026-11-18",
        "nav": 1.1745
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.6013
      },
      {
        "date": "2026-11-18",
        "nav": 2.6187
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 2.031
      },
      {
        "date": "2026-11-18",
        "nav": 2.056
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 1.606
      },
      {
        "date": "2026-11-18",
        "nav": 1.6079
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 0.4857
      },
      {
        "date": "2026-11-18",
        "nav": 0.4797
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-17",
        "nav": 7.858
      },
      {
        "date": "2026-11-18",
        "nav": 8.152
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.7,
      "nav": 3.6062,
      "price": 3.6062,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.53,
      "nav": 2.6008,
      "price": 2.6008,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.9,
      "nav": 2.9506,
      "price": 2.9506,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.12,
      "nav": 0.7734,
      "price": 0.7734,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.44,
      "nav": 1.8468,
      "price": 1.8468,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.34,
      "nav": 2.5156,
      "price": 2.5156,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 5.2812,
      "price": 5.2812,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 1.579,
      "price": 1.579,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.32,
      "nav": 1.078,
      "price": 1.078,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 2.463,
      "price": 2.463,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.09,
      "nav": 1.166,
      "price": 1.166,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.34,
      "nav": 2.142,
      "price": 2.142,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.2087,
      "price": 1.2087,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.895,
      "price": 1.895,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 1.3631,
      "price": 1.3631,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.85,
      "nav": 1.2851,
      "price": 1.2851,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.5554,
      "price": 2.5554,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.37,
      "nav": 0.874,
      "price": 0.874,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 2.4363,
      "price": 2.4363,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.29,
      "nav": 1.1568,
      "price": 1.1568,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 21.03,
      "sharpe": -1.58,
      "calmar": -1.58
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 15.83,
      "sharpe": -2.99,
      "calmar": -2.99
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 27.09,
      "sharpe": -2.06,
      "calmar": -2.06
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.57,
      "sharpe": 1.22,
      "calmar": 1.22
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 13.15,
      "sharpe": -2.32,
      "calmar": -2.32
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 10.27,
      "sharpe": -1.86,
      "calmar": -1.86
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.67,
      "sharpe": -0.54,
      "calmar": -0.54
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 11.65,
      "sharpe": -1.98,
      "calmar": -1.98
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 9.73,
      "sharpe": -2.09,
      "calmar": -2.09
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.48,
      "sharpe": -2.23,
      "calmar": -2.23
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.75,
      "sharpe": 0.91,
      "calmar": 0.91
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 10.19,
      "sharpe": -1.35,
      "calmar": -1.35
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 6.81,
      "sharpe": -6.25,
      "calmar": -6.25
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.06,
      "sharpe": 1.33,
      "calmar": 1.33
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.88,
      "sharpe": -2.03,
      "calmar": -2.03
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 25.37,
      "sharpe": -2.37,
      "calmar": -2.37
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.61,
      "sharpe": -0.45,
      "calmar": -0.45
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 11.13,
      "sharpe": -0.6,
      "calmar": -0.6
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 3.74,
      "sharpe": 0.49,
      "calmar": 0.49
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 8.79,
      "sharpe": -1.09,
      "calmar": -1.09
    }
  ],
  "news": [
    {
      "title": "如今，走在深圳的街头，不少市民和游客都能直观感受到明显变化：前来这座城市的外国旅客越来越多，他们也把黄金珠宝列进“买买买”名单中。在2026年APEC领导人会议周新闻中心首场吹风会上，深圳市商务局局长张非梦推荐深圳三大打卡地标，其中就包括水贝黄金珠宝集聚区。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:11",
      "impact": "neutral"
    },
    {
      "title": "铜铝价格回落家电业盈利修复添动能11月以来，铜、铝等大宗商品价格高位回调，持续承压的家电行业迎来成本端的一丝松动。此外，9至10月家电出口明显提速，叠加去年四季度低基数影响，今年四季度家电出口有望延续增长。业内人士认为，成本端价格回调叠加出口增长，有望驱动家电企业改善盈利边际。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:48",
      "impact": "neutral"
    },
    {
      "title": "上海新添一批跨国公司总部和研发中心中国创新正加速反哺全球市场作为外商投资首选地之一，上海在全球创新领域持续释放“强磁场”效应。11月18日，第四十三批跨国公司地区总部和研发中心颁证仪式在上海举行，30家跨国公司地区总部、15家外资研发中心获颁证书。上海证券报记者采访获悉，以上海为引领，中国创新正加速反哺全球市场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:48",
      "impact": "neutral"
    },
    {
      "title": "陆海新通道经济账“算法”变了2026年是西部陆海新通道从“基本建成”迈向“提质增效”的关键之年，这一年，通道在货运规模扩张、物流降本增效、制度规则创新、枢纽能级提升与产业配套协同等方面取得了突破性进展。11月17日，2026陆海新通道经济发展论坛在重庆启幕，论坛透露新的信号：通道的经济账“算法”变了，从算运距、算箱量，转向过路货与落地产业分账、规则创新变资产、资本选城看配套。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:47",
      "impact": "neutral"
    },
    {
      "title": "服务消费显韧性政策加码优供给国家统计局日前发布的数据显示，1至10月，社会消费商品和服务零售总额同比增长2.5%，其中服务零售额增长4.9%，增速高于同期商品零售额4个百分点。最新发布的前10个月服务零售额数据向好，表明服务消费保持韧性。多位专家表示，服务消费已成为消费市场扩容的重要力量，未来政策将继续扩大优质服务供给，加速释放服务消费潜力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:47",
      "impact": "neutral"
    },
    {
      "title": "上海证券报记者从国务院国资委11月18日举办的进一步深化国资国企改革专题研讨班上获悉，新一轮国资国企改革谋篇布局已经完成，目前各地、各中央企业均已完成工作台账编制。各地共提出3300余项改革任务、9800余项落实举措，各中央企业共提出1.1万余项改革任务、1.8万余项落实举措。下一步，改革工作将重点转向全面实施。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:47",
      "impact": "neutral"
    },
    {
      "title": "“冲量”冲不动了银行重算票据经营账◎记者张欣然转贴现利率持续低位运行，票据业务盈利空间不断收窄，上海证券报记者自业内获悉，已有国有大行计划年底精简票据部门架构。这一动作背后，是今年票据“冲量”冲不动也不赚钱的现实。业内机构判断，票据“去信贷化”或将渐进落地。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:47",
      "impact": "neutral"
    },
    {
      "title": "1月18日，有关部门就两则资本市场“小作文”集中辟谣，明确相关信息均不属实，提醒投资者勿信勿传。此外，部分上市公司近日通过澄清公告、交易所投资者互动平台等渠道，对涉及公司经营的不实传闻及时予以回应。当日，中国证监会新闻发言人答记者问时表示，互联网近日传播的“监管要求基金公司上报全部产品AI敞口”相关信息不属实。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:47",
      "impact": "neutral"
    },
    {
      "title": "11月17日至18日，2026年亚太经合组织工商领导人峰会在深圳举行。科技企业是该活动的重要参与者，与会企业家围绕人工智能、算力、机器人、脑机接口等科技热词展开深入交流，既聚焦技术创新与突破，也关注成果转化和产业落地，探索如何推动新技术加快走进工厂、走向市场。这些科技热词折射出中国经济新动能。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:18",
      "impact": "neutral"
    },
    {
      "title": "11月18日，《证券日报》记者从券商处获悉，中国证券业协会（以下简称“中证协”）近日依据自律处分典型案例通报机制，向行业通报2026年第二批自律处分典型案例，旨在进一步规范证券行业从业人员执业登记管理，强化机构实质审核把关责任，督促从业人员诚信执业，维护公开、公平、有序的行业执业秩序。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:18",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 51,
    "label": "中性",
    "upDownRatio": "3,466/1,266",
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
