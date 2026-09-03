// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-03 14:22:42
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-03 14:22 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-03",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3942.09,
      "change": 0.7,
      "changePct": "+0.02%",
      "high": 3968.11,
      "low": 3930.45,
      "volume": 496990189.0,
      "amount": 819882350000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13625.12,
      "change": 13.57,
      "changePct": "+0.10%",
      "high": 13742.89,
      "low": 13531.53,
      "volume": 585378201.0,
      "amount": 939033970000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3312.54,
      "change": 0.3,
      "changePct": "+0.01%",
      "high": 3356.25,
      "low": 3285.06,
      "volume": 161532447.0,
      "amount": 430677810000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1611.17,
      "change": -6.43,
      "changePct": "-0.40%",
      "high": 1636.32,
      "low": 1596.62,
      "volume": 6044152.0,
      "amount": 56635360000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4552.58,
      "change": 4.62,
      "changePct": "+0.10%",
      "high": 4585.99,
      "low": 4536.92,
      "volume": 182244060.0,
      "amount": 439940680000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7755.36,
      "change": 26.13,
      "changePct": "+0.34%",
      "high": 7799.63,
      "low": 7686.44,
      "volume": 151520569.0,
      "amount": 299426300000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.99万亿",
      "label": "成交额",
      "rawAmount": 2985596470000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,022/1,488",
      "label": "涨/跌家数",
      "rawUp": 3022,
      "rawDown": 1488,
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
    "totalInflow": 10.53,
    "totalOutflow": 0,
    "netFlow": 10.53,
    "netFlowTrend": [
      2.11,
      4.21,
      6.32,
      8.42,
      10.53
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
      "inflow": 2.87,
      "pct": 0.96
    },
    {
      "name": "有色",
      "inflow": 2.23,
      "pct": 1.43
    },
    {
      "name": "创新药",
      "inflow": 1.94,
      "pct": 0.95
    },
    {
      "name": "医疗",
      "inflow": 0.94,
      "pct": 0.3
    },
    {
      "name": "医药",
      "inflow": 0.75,
      "pct": 0.53
    },
    {
      "name": "地产",
      "inflow": 0.5,
      "pct": 0.66
    },
    {
      "name": "游戏",
      "inflow": 0.35,
      "pct": 1.4
    },
    {
      "name": "新能源",
      "inflow": 0.34,
      "pct": 0.25
    },
    {
      "name": "新能源车",
      "inflow": 0.32,
      "pct": 1.09
    },
    {
      "name": "家电",
      "inflow": 0.29,
      "pct": 1.33
    },
    {
      "name": "计算机",
      "inflow": 0.07,
      "pct": 0.17
    },
    {
      "name": "基建",
      "inflow": 0.04,
      "pct": 0.29
    },
    {
      "name": "钢铁",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "农业",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "食品",
      "inflow": -0.04,
      "pct": -0.2
    },
    {
      "name": "光伏",
      "inflow": -0.27,
      "pct": -0.12
    },
    {
      "name": "云计算",
      "inflow": -0.38,
      "pct": -0.18
    },
    {
      "name": "人工智能",
      "inflow": -0.6,
      "pct": -0.2
    },
    {
      "name": "军工",
      "inflow": -0.77,
      "pct": -0.18
    },
    {
      "name": "煤炭",
      "inflow": -2.47,
      "pct": -0.23
    }
  ],
  "sectors": [
    {
      "name": "有色",
      "code": "512400",
      "price": 1.913,
      "changePct": 1.43,
      "change": 0.027,
      "turnover": 7.43
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.09,
      "changePct": 1.4,
      "change": 0.015,
      "turnover": 1.16
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.448,
      "changePct": 1.33,
      "change": 0.019,
      "turnover": 0.96
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.574,
      "changePct": 1.09,
      "change": 0.017,
      "turnover": 1.05
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.526,
      "changePct": 0.96,
      "change": 0.005,
      "turnover": 9.57
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.851,
      "changePct": 0.95,
      "change": 0.008,
      "turnover": 6.45
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.216,
      "changePct": 0.66,
      "change": 0.008,
      "turnover": 1.68
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.379,
      "changePct": 0.53,
      "change": 0.002,
      "turnover": 2.5
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.339,
      "changePct": 0.3,
      "change": 0.001,
      "turnover": 3.15
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.033,
      "changePct": 0.29,
      "change": 0.003,
      "turnover": 0.12
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.37,
      "changePct": 0.25,
      "change": 0.006,
      "turnover": 1.12
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.179,
      "changePct": 0.17,
      "change": 0.002,
      "turnover": 0.24
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.17,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.6
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.748,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.65
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.81,
      "changePct": -0.12,
      "change": -0.001,
      "turnover": 0.89
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.14,
      "changePct": -0.18,
      "change": -0.002,
      "turnover": 2.56
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.682,
      "changePct": -0.18,
      "change": -0.003,
      "turnover": 1.25
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.018,
      "changePct": -0.2,
      "change": -0.002,
      "turnover": 1.99
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.496,
      "changePct": -0.2,
      "change": -0.001,
      "turnover": 0.13
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.3,
      "changePct": -0.23,
      "change": -0.003,
      "turnover": 8.23
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.646,
      "changePct": -0.31,
      "change": -0.002,
      "turnover": 19.43
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.421,
      "changePct": -0.47,
      "change": -0.002,
      "turnover": 2.44
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.84,
      "changePct": -0.47,
      "change": -0.004,
      "turnover": 9.7
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.826,
      "changePct": -0.48,
      "change": -0.004,
      "turnover": 3.23
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.004,
      "changePct": -0.5,
      "change": -0.005,
      "turnover": 7.66
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.115,
      "changePct": -0.54,
      "change": -0.006,
      "turnover": 4.92
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.004,
      "changePct": -0.59,
      "change": -0.006,
      "turnover": 9.93
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.826,
      "changePct": -0.6,
      "change": -0.005,
      "turnover": 0.57
    }
  ],
  "etfFlow": [
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.781,
      "changePct": 0.39,
      "amount": 25.85,
      "netFlow": 6.46
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.621,
      "changePct": 0.02,
      "amount": 23.06,
      "netFlow": 5.76
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.031,
      "changePct": 0.2,
      "amount": 9.55,
      "netFlow": 2.39
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.526,
      "changePct": 0.96,
      "amount": 9.57,
      "netFlow": 2.39
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.824,
      "changePct": 0.1,
      "amount": 5.13,
      "netFlow": 1.28
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.489,
      "changePct": 0.16,
      "amount": 3.76,
      "netFlow": 0.94
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.379,
      "changePct": 0.53,
      "amount": 2.5,
      "netFlow": 0.63
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.37,
      "changePct": 0.25,
      "amount": 1.12,
      "netFlow": 0.28
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.004,
      "changePct": -0.59,
      "amount": 9.93,
      "netFlow": -2.48
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.703,
      "changePct": -0.29,
      "amount": 47.01,
      "netFlow": -11.75
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.621,
      "changePct": 0.02,
      "amount": 23.06,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.031,
      "changePct": 0.2,
      "amount": 9.55,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.781,
      "changePct": 0.39,
      "amount": 25.85,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.824,
      "changePct": 0.1,
      "amount": 5.13,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.489,
      "changePct": 0.16,
      "amount": 3.76,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "有色",
      "turnover": 7.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 9.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.65,
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
      "name": "军工",
      "turnover": 2.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.99,
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
      "name": "煤炭",
      "turnover": 8.23,
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
      "nav": 4.6317,
      "ret1w": 3.0,
      "ret1m": -0.03,
      "ret3m": 22.26,
      "ret6m": -6.29,
      "ret1y": 4.8,
      "ret2y": 30.11,
      "ret3y": 168.77
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.0877,
      "ret1w": -0.04,
      "ret1m": -4.04,
      "ret3m": 6.96,
      "ret6m": -19.83,
      "ret1y": 5.18,
      "ret2y": 3.13,
      "ret3y": 68.16
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.5893,
      "ret1w": 1.21,
      "ret1m": -4.26,
      "ret3m": 31.75,
      "ret6m": -11.04,
      "ret1y": 40.81,
      "ret2y": 81.46,
      "ret3y": 284.86
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7162,
      "ret1w": -0.69,
      "ret1m": 0.42,
      "ret3m": -2.61,
      "ret6m": 4.63,
      "ret1y": -8.55,
      "ret2y": -13.19,
      "ret3y": 6.43
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0392,
      "ret1w": -1.24,
      "ret1m": -5.46,
      "ret3m": -11.75,
      "ret6m": -16.78,
      "ret1y": -30.62,
      "ret2y": -22.47,
      "ret3y": 15.57
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6797,
      "ret1w": -0.26,
      "ret1m": -2.9,
      "ret3m": -4.65,
      "ret6m": -11.58,
      "ret1y": -30.03,
      "ret2y": -13.26,
      "ret3y": 31.86
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5006,
      "ret1w": 0.1,
      "ret1m": -1.48,
      "ret3m": -1.29,
      "ret6m": 0.48,
      "ret1y": -5.9,
      "ret2y": 13.82,
      "ret3y": 58.48
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.909,
      "ret1w": 0.79,
      "ret1m": 0.16,
      "ret3m": 8.1,
      "ret6m": -5.17,
      "ret1y": -2.0,
      "ret2y": 8.16,
      "ret3y": 73.07
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.341,
      "ret1w": 0.64,
      "ret1m": -1.0,
      "ret3m": 4.9,
      "ret6m": -5.3,
      "ret1y": 1.03,
      "ret2y": 10.62,
      "ret3y": 45.47
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.41,
      "ret1w": -0.09,
      "ret1m": -2.21,
      "ret3m": 10.75,
      "ret6m": -2.79,
      "ret1y": 31.31,
      "ret2y": 69.48,
      "ret3y": 290.61
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.119,
      "ret1w": 0.0,
      "ret1m": 1.08,
      "ret3m": -0.89,
      "ret6m": 4.29,
      "ret1y": -5.01,
      "ret2y": -15.8,
      "ret3y": 4.48
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.357,
      "ret1w": -0.76,
      "ret1m": -1.3,
      "ret3m": 1.46,
      "ret6m": 1.29,
      "ret1y": -12.31,
      "ret2y": -13.57,
      "ret3y": 35.07
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6787,
      "ret1w": -0.77,
      "ret1m": -7.44,
      "ret3m": 5.78,
      "ret6m": -38.47,
      "ret1y": -50.67,
      "ret2y": -39.63,
      "ret3y": 20.39
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9545,
      "ret1w": 0.72,
      "ret1m": 1.02,
      "ret3m": 0.72,
      "ret6m": 7.9,
      "ret1y": 1.2,
      "ret2y": -3.15,
      "ret3y": 10.1
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.654,
      "ret1w": 0.15,
      "ret1m": -1.29,
      "ret3m": 9.97,
      "ret6m": -5.86,
      "ret1y": -3.09,
      "ret2y": 11.76,
      "ret3y": 73.83
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3188,
      "ret1w": 0.72,
      "ret1m": -5.36,
      "ret3m": 15.0,
      "ret6m": -19.55,
      "ret1y": 24.35,
      "ret2y": 76.98,
      "ret3y": 227.65
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5666,
      "ret1w": 0.61,
      "ret1m": 0.61,
      "ret3m": 0.81,
      "ret6m": -2.41,
      "ret1y": -8.71,
      "ret2y": -3.4,
      "ret3y": 23.7
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.032,
      "ret1w": 1.47,
      "ret1m": -2.09,
      "ret3m": 7.84,
      "ret6m": 16.87,
      "ret1y": 10.02,
      "ret2y": -15.76,
      "ret3y": 7.05
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3571,
      "ret1w": 0.34,
      "ret1m": 0.23,
      "ret3m": -1.07,
      "ret6m": 1.42,
      "ret1y": -6.71,
      "ret2y": 6.42,
      "ret3y": 17.8
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3308,
      "ret1w": -0.08,
      "ret1m": -0.91,
      "ret3m": 8.78,
      "ret6m": 3.2,
      "ret1y": 2.21,
      "ret2y": 21.8,
      "ret3y": 81.66
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2514,
      "ret1w": 0.12,
      "ret1m": -3.51,
      "ret3m": 2.11,
      "ret6m": -9.15,
      "ret1y": -5.3,
      "ret2y": 14.25,
      "ret3y": 47.45
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3311,
      "ret1w": 0.11,
      "ret1m": -3.51,
      "ret3m": 2.13,
      "ret6m": -9.07,
      "ret1y": -5.13,
      "ret2y": 14.68,
      "ret3y": 48.63
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0848,
      "ret1w": 0.13,
      "ret1m": -0.73,
      "ret3m": -1.25,
      "ret6m": -2.91,
      "ret1y": 0.11,
      "ret2y": 1.54,
      "ret3y": 8.45
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.058,
      "ret1w": 0.13,
      "ret1m": -0.72,
      "ret3m": -1.2,
      "ret6m": -2.76,
      "ret1y": 0.41,
      "ret2y": 2.14,
      "ret3y": 9.76
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7214,
      "ret1w": 0.64,
      "ret1m": -0.1,
      "ret3m": -1.8,
      "ret6m": -3.59,
      "ret1y": -11.22,
      "ret2y": -6.9,
      "ret3y": 13.73
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7397,
      "ret1w": 0.64,
      "ret1m": -0.08,
      "ret3m": -1.75,
      "ret6m": -3.47,
      "ret1y": -10.99,
      "ret2y": -6.44,
      "ret3y": 14.88
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7576,
      "ret1w": -0.24,
      "ret1m": -3.72,
      "ret3m": 9.75,
      "ret6m": -13.88,
      "ret1y": 31.51,
      "ret2y": 54.58,
      "ret3y": 161.14
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5264,
      "ret1w": 0.49,
      "ret1m": -1.53,
      "ret3m": 4.69,
      "ret6m": -2.09,
      "ret1y": 4.14,
      "ret2y": 18.99,
      "ret3y": 89.16
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7433,
      "ret1w": -0.03,
      "ret1m": 0.41,
      "ret3m": 3.86,
      "ret6m": -10.85,
      "ret1y": -14.04,
      "ret2y": -7.88,
      "ret3y": 18.4
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1827,
      "ret1w": 0.02,
      "ret1m": -0.85,
      "ret3m": 7.73,
      "ret6m": -5.64,
      "ret1y": 20.73,
      "ret2y": 36.4,
      "ret3y": 147.35
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.505,
      "ret1w": 0.04,
      "ret1m": -0.82,
      "ret3m": -3.46,
      "ret6m": -7.02,
      "ret1y": -2.75,
      "ret2y": 10.99,
      "ret3y": 50.43
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5147,
      "ret1w": 0.04,
      "ret1m": -0.81,
      "ret3m": -3.43,
      "ret6m": -6.93,
      "ret1y": -2.56,
      "ret2y": 11.46,
      "ret3y": 51.65
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2857,
      "ret1w": 0.12,
      "ret1m": -0.04,
      "ret3m": 0.69,
      "ret6m": -0.97,
      "ret1y": -0.41,
      "ret2y": -0.06,
      "ret3y": 1.75
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1274,
      "ret1w": 0.11,
      "ret1m": -0.72,
      "ret3m": -1.3,
      "ret6m": 3.97,
      "ret1y": -7.4,
      "ret2y": -0.89,
      "ret3y": 19.34
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4014,
      "ret1w": 0.35,
      "ret1m": -2.33,
      "ret3m": 2.43,
      "ret6m": -14.01,
      "ret1y": -4.4,
      "ret2y": -14.78,
      "ret3y": 16.48
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0325,
      "ret1w": 0.34,
      "ret1m": 0.45,
      "ret3m": 1.28,
      "ret6m": -2.6,
      "ret1y": -8.21,
      "ret2y": 12.92,
      "ret3y": 52.92
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.268,
      "ret1w": -0.21,
      "ret1m": -3.4,
      "ret3m": 5.62,
      "ret6m": -24.75,
      "ret1y": 30.67,
      "ret2y": 59.57,
      "ret3y": 204.0
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5155,
      "ret1w": -0.07,
      "ret1m": 1.96,
      "ret3m": -0.07,
      "ret6m": 2.82,
      "ret1y": 0.52,
      "ret2y": 0.55,
      "ret3y": 14.03
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6403,
      "ret1w": -0.08,
      "ret1m": -0.17,
      "ret3m": 10.7,
      "ret6m": -14.11,
      "ret1y": -6.42,
      "ret2y": 8.1,
      "ret3y": 54.62
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.902,
      "ret1w": 0.24,
      "ret1m": -4.38,
      "ret3m": 10.03,
      "ret6m": -8.4,
      "ret1y": 62.52,
      "ret2y": 104.83,
      "ret3y": 349.47
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.065,
      "ret1w": 0.0,
      "ret1m": -0.22,
      "ret3m": 0.22,
      "ret6m": -1.63,
      "ret1y": -0.34,
      "ret2y": 1.46,
      "ret3y": 4.67
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1135,
      "ret1w": 0.0,
      "ret1m": -0.22,
      "ret3m": 0.24,
      "ret6m": -1.57,
      "ret1y": -0.22,
      "ret2y": 1.75,
      "ret3y": 5.4
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0643,
      "ret1w": 0.03,
      "ret1m": 0.05,
      "ret3m": 0.08,
      "ret6m": 0.22,
      "ret1y": 0.72,
      "ret2y": 1.47,
      "ret3y": 2.67
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.099,
      "ret1w": 0.03,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.26,
      "ret1y": 0.8,
      "ret2y": 1.49,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1084,
      "ret1w": 0.03,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.3,
      "ret1y": 0.9,
      "ret2y": 1.69,
      "ret3y": 4.29
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0762,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.1,
      "ret6m": 0.29,
      "ret1y": 0.71,
      "ret2y": 1.37,
      "ret3y": 2.79
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0906,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.12,
      "ret6m": 0.36,
      "ret1y": 0.86,
      "ret2y": 1.68,
      "ret3y": 3.44
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.066,
      "ret1w": 0.15,
      "ret1m": -0.43,
      "ret3m": 1.67,
      "ret6m": -2.87,
      "ret1y": 1.24,
      "ret2y": 5.72,
      "ret3y": 13.24
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2202,
      "ret1w": 0.11,
      "ret1m": -0.34,
      "ret3m": 2.68,
      "ret6m": -3.1,
      "ret1y": 0.81,
      "ret2y": 2.87,
      "ret3y": 7.72
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0727,
      "ret1w": 0.15,
      "ret1m": -0.43,
      "ret3m": 1.7,
      "ret6m": -2.78,
      "ret1y": 1.43,
      "ret2y": 6.15,
      "ret3y": 14.15
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0458,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.31,
      "ret1y": 0.85,
      "ret2y": 1.71,
      "ret3y": 3.57
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1635,
      "ret1w": 0.03,
      "ret1m": -1.07,
      "ret3m": 0.61,
      "ret6m": -3.9,
      "ret1y": -3.94,
      "ret2y": 0.33,
      "ret3y": 9.63
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2162,
      "ret1w": 0.07,
      "ret1m": -0.16,
      "ret3m": -0.25,
      "ret6m": -0.75,
      "ret1y": -0.52,
      "ret2y": 4.09,
      "ret3y": 15.19
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1379,
      "ret1w": 0.07,
      "ret1m": -0.39,
      "ret3m": 1.07,
      "ret6m": -1.22,
      "ret1y": 0.85,
      "ret2y": 3.48,
      "ret3y": 10.33
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2093,
      "ret1w": 0.07,
      "ret1m": -0.38,
      "ret3m": 1.11,
      "ret6m": -1.11,
      "ret1y": 1.05,
      "ret2y": 3.91,
      "ret3y": 11.25
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.33,
      "ret1w": -0.09,
      "ret1m": -0.98,
      "ret3m": 4.11,
      "ret6m": -15.33,
      "ret1y": 32.24,
      "ret2y": 98.47,
      "ret3y": 133.7
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9728,
      "ret1w": 0.19,
      "ret1m": 0.04,
      "ret3m": 1.86,
      "ret6m": 0.15,
      "ret1y": 7.98,
      "ret2y": 9.01,
      "ret3y": 34.27
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8784,
      "ret1w": 0.09,
      "ret1m": 0.8,
      "ret3m": -0.01,
      "ret6m": -11.3,
      "ret1y": -12.41,
      "ret2y": 4.76,
      "ret3y": 57.56
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3666,
      "ret1w": 0.31,
      "ret1m": -2.04,
      "ret3m": 9.29,
      "ret6m": -2.16,
      "ret1y": 17.63,
      "ret2y": 30.67,
      "ret3y": 74.08
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9349,
      "ret1w": 0.09,
      "ret1m": -0.53,
      "ret3m": 0.04,
      "ret6m": -1.01,
      "ret1y": -3.31,
      "ret2y": -3.32,
      "ret3y": -1.31
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.5791,
      "ret1w": -0.46,
      "ret1m": -2.25,
      "ret3m": 0.04,
      "ret6m": -13.41,
      "ret1y": 20.82,
      "ret2y": 54.01,
      "ret3y": 90.96
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.594,
      "ret1w": 0.11,
      "ret1m": -0.97,
      "ret3m": 1.59,
      "ret6m": -2.09,
      "ret1y": 2.84,
      "ret2y": 7.29,
      "ret3y": 20.67
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.219,
      "ret1w": 0.49,
      "ret1m": -4.62,
      "ret3m": 4.01,
      "ret6m": 8.74,
      "ret1y": -2.48,
      "ret2y": -21.35,
      "ret3y": 109.81
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.953,
      "ret1w": 0.42,
      "ret1m": -3.83,
      "ret3m": 6.48,
      "ret6m": 1.49,
      "ret1y": -7.12,
      "ret2y": -20.05,
      "ret3y": 49.84
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7924,
      "ret1w": -1.69,
      "ret1m": -1.77,
      "ret3m": 1.31,
      "ret6m": -13.21,
      "ret1y": 23.65,
      "ret2y": 78.44,
      "ret3y": 136.24
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6286,
      "ret1w": 0.25,
      "ret1m": -0.67,
      "ret3m": 11.46,
      "ret6m": 4.92,
      "ret1y": -0.31,
      "ret2y": 39.79,
      "ret3y": 56.81
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7246,
      "ret1w": -0.9,
      "ret1m": 0.17,
      "ret3m": 1.65,
      "ret6m": -2.58,
      "ret1y": 7.55,
      "ret2y": 31.55,
      "ret3y": 57.15
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3161,
      "ret1w": -1.21,
      "ret1m": -1.1,
      "ret3m": 1.9,
      "ret6m": -6.16,
      "ret1y": 1.13,
      "ret2y": 19.47,
      "ret3y": 39.46
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.29,
      "ret1w": -0.54,
      "ret1m": -2.71,
      "ret3m": -2.93,
      "ret6m": 0.0,
      "ret1y": -1.75,
      "ret2y": 4.54,
      "ret3y": -8.65
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.096,
      "ret1w": 0.87,
      "ret1m": -4.38,
      "ret3m": 7.6,
      "ret6m": -3.32,
      "ret1y": -18.76,
      "ret2y": 15.48,
      "ret3y": 55.74
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0113,
      "ret1w": 0.04,
      "ret1m": 0.09,
      "ret3m": 0.22,
      "ret6m": 0.38,
      "ret1y": 1.45,
      "ret2y": 2.01,
      "ret3y": 3.58
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0102,
      "ret1w": 0.04,
      "ret1m": 0.09,
      "ret3m": 0.22,
      "ret6m": 0.36,
      "ret1y": 1.46,
      "ret2y": 2.07,
      "ret3y": 3.76
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.399,
      "ret1w": -0.07,
      "ret1m": -2.44,
      "ret3m": -0.57,
      "ret6m": -11.62,
      "ret1y": -1.55,
      "ret2y": 0.79,
      "ret3y": 35.43
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.799,
      "ret1w": 0.14,
      "ret1m": -2.54,
      "ret3m": 2.72,
      "ret6m": -9.71,
      "ret1y": -1.03,
      "ret2y": 11.51,
      "ret3y": 61.89
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6991,
      "ret1w": 0.53,
      "ret1m": -2.36,
      "ret3m": 7.04,
      "ret6m": -3.41,
      "ret1y": -14.87,
      "ret2y": 28.19,
      "ret3y": 73.38
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1279,
      "ret1w": 0.28,
      "ret1m": -1.54,
      "ret3m": 1.92,
      "ret6m": -4.26,
      "ret1y": 1.54,
      "ret2y": 10.06,
      "ret3y": 44.71
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1889,
      "ret1w": 0.29,
      "ret1m": -1.53,
      "ret3m": 1.96,
      "ret6m": -4.16,
      "ret1y": 1.75,
      "ret2y": 10.51,
      "ret3y": 45.87
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0012,
      "ret1w": 0.32,
      "ret1m": -2.29,
      "ret3m": 4.32,
      "ret6m": -6.67,
      "ret1y": -5.59,
      "ret2y": 13.04,
      "ret3y": 67.39
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.778,
      "ret1w": 0.09,
      "ret1m": -1.6,
      "ret3m": 0.27,
      "ret6m": -6.84,
      "ret1y": -1.24,
      "ret2y": 3.22,
      "ret3y": 40.48
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5796,
      "ret1w": 0.3,
      "ret1m": -1.49,
      "ret3m": 0.3,
      "ret6m": -3.47,
      "ret1y": -7.62,
      "ret2y": 12.89,
      "ret3y": 56.8
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9263,
      "ret1w": -0.26,
      "ret1m": -3.85,
      "ret3m": 0.6,
      "ret6m": -14.63,
      "ret1y": 7.54,
      "ret2y": 12.93,
      "ret3y": 74.58
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1698,
      "ret1w": 0.26,
      "ret1m": -0.56,
      "ret3m": -0.04,
      "ret6m": 0.34,
      "ret1y": -0.28,
      "ret2y": 2.59,
      "ret3y": 31.03
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.519,
      "ret1w": -0.35,
      "ret1m": -1.62,
      "ret3m": -0.25,
      "ret6m": 3.62,
      "ret1y": 0.22,
      "ret2y": 12.75,
      "ret3y": 28.13
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4092,
      "ret1w": 0.23,
      "ret1m": -0.3,
      "ret3m": 2.63,
      "ret6m": -5.0,
      "ret1y": 13.39,
      "ret2y": 17.21,
      "ret3y": 36.79
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7099,
      "ret1w": -0.11,
      "ret1m": -3.41,
      "ret3m": -0.6,
      "ret6m": -13.31,
      "ret1y": 2.18,
      "ret2y": 8.04,
      "ret3y": 57.31
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1825,
      "ret1w": -1.19,
      "ret1m": 0.84,
      "ret3m": 5.33,
      "ret6m": -6.01,
      "ret1y": -2.03,
      "ret2y": 6.27,
      "ret3y": 52.66
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1843,
      "ret1w": -1.19,
      "ret1m": 0.86,
      "ret3m": 5.34,
      "ret6m": -5.97,
      "ret1y": -2.05,
      "ret2y": 6.29,
      "ret3y": 52.11
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3869,
      "ret1w": -1.28,
      "ret1m": -1.01,
      "ret3m": 2.63,
      "ret6m": -10.62,
      "ret1y": -8.04,
      "ret2y": 1.22,
      "ret3y": 40.28
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4186,
      "ret1w": -1.28,
      "ret1m": -1.0,
      "ret3m": 2.67,
      "ret6m": -10.53,
      "ret1y": -7.85,
      "ret2y": 1.63,
      "ret3y": 41.41
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9936,
      "ret1w": -1.16,
      "ret1m": -1.01,
      "ret3m": 0.08,
      "ret6m": -13.45,
      "ret1y": -3.75,
      "ret2y": 8.35,
      "ret3y": 63.46
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1647,
      "ret1w": -0.03,
      "ret1m": -0.3,
      "ret3m": -0.32,
      "ret6m": -0.52,
      "ret1y": -0.06,
      "ret2y": 1.96,
      "ret3y": 7.83
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1845,
      "ret1w": -0.04,
      "ret1m": -0.29,
      "ret3m": -0.29,
      "ret6m": -0.45,
      "ret1y": 0.09,
      "ret2y": 2.26,
      "ret3y": 8.48
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0843,
      "ret1w": 0.04,
      "ret1m": 0.06,
      "ret3m": 0.1,
      "ret6m": 0.3,
      "ret1y": 0.87,
      "ret2y": 1.77,
      "ret3y": 3.26
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4098,
      "ret1w": 0.0,
      "ret1m": -0.03,
      "ret3m": -0.16,
      "ret6m": 0.01,
      "ret1y": 0.09,
      "ret2y": 0.65,
      "ret3y": 11.28
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4621,
      "ret1w": 0.0,
      "ret1m": -0.01,
      "ret3m": -0.12,
      "ret6m": 0.12,
      "ret1y": 0.29,
      "ret2y": 1.06,
      "ret3y": 12.18
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0887,
      "ret1w": -0.33,
      "ret1m": -2.16,
      "ret3m": 0.89,
      "ret6m": -0.12,
      "ret1y": 10.32,
      "ret2y": 21.86,
      "ret3y": 64.1
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2359,
      "ret1w": -0.24,
      "ret1m": -2.32,
      "ret3m": -0.31,
      "ret6m": -2.47,
      "ret1y": 5.37,
      "ret2y": 11.53,
      "ret3y": 50.02
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.0,
      "nav": 4.6317,
      "price": 4.6317,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 4.0877,
      "price": 4.0877,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.21,
      "nav": 5.5893,
      "price": 5.5893,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 0.7162,
      "price": 0.7162,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 2.0392,
      "price": 2.0392,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.14,
      "nav": 2.6797,
      "price": 2.6797,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 5.5006,
      "price": 5.5006,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.909,
      "price": 1.909,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.341,
      "price": 1.341,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 3.41,
      "price": 3.41,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.119,
      "price": 1.119,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.357,
      "price": 2.357,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.37,
      "nav": 1.6787,
      "price": 1.6787,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.9545,
      "price": 1.9545,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.654,
      "price": 1.654,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 2.3188,
      "price": 2.3188,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.5666,
      "price": 2.5666,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.032,
      "price": 1.032,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.3571,
      "price": 2.3571,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.3308,
      "price": 1.3308,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.04,
      "sharpe": 0.95,
      "calmar": 0.95
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 6.06,
      "sharpe": 0.57,
      "calmar": 0.57
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 6.39,
      "sharpe": 4.41,
      "calmar": 4.41
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.63,
      "sharpe": -1.58,
      "calmar": -1.58
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 8.19,
      "sharpe": -2.93,
      "calmar": -2.93
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 4.35,
      "sharpe": -3.8,
      "calmar": -3.8
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.22,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.24,
      "sharpe": -0.39,
      "calmar": -0.39
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.5,
      "sharpe": 0.17,
      "calmar": 0.17
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.31,
      "sharpe": 4.34,
      "calmar": 4.34
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.62,
      "sharpe": -0.82,
      "calmar": -0.82
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 1.95,
      "sharpe": -1.95,
      "calmar": -1.95
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 11.16,
      "sharpe": -4.07,
      "calmar": -4.07
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.53,
      "sharpe": 0.2,
      "calmar": 0.2
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.94,
      "sharpe": -0.49,
      "calmar": -0.49
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 8.04,
      "sharpe": 2.35,
      "calmar": 2.35
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.92,
      "sharpe": -1.55,
      "calmar": -1.55
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.13,
      "sharpe": 1.41,
      "calmar": 1.41
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.35,
      "sharpe": -1.28,
      "calmar": -1.28
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.36,
      "sharpe": 0.37,
      "calmar": 0.37
    }
  ],
  "news": [
    {
      "title": "中新网吉林延吉9月3日电(记者黄艳梅)“中国边疆地区正在从地理边缘‘末梢’转向与周边国家合作、双向联动的枢纽，未来应提质硬联通，破解‘最后一公里’瓶颈，实现‘陆海空天网’一体化联通格局，推动从‘通道经济’向‘价值链枢纽’转型。”广西大学中国边疆经济研究院院长李光辉3日在吉林省延吉市表示。9月3日，第十届中国边疆经济开放发展论坛在吉林省延边朝鲜族自治州延吉市举办。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:11",
      "impact": "neutral"
    },
    {
      "title": "据“中国贸促”，9月3日，中国贸促会副会长聂文慧在京会见香港美国商会主席毕大卫一行。双方就加强中美工商界交流、推动产业链供应链融合、深化商事法律服务合作、参与APEC系列工商界活动等议题进行交流。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:03",
      "impact": "neutral"
    },
    {
      "title": "中新社北京9月3日电(记者刘亮)中国工信部等多部门3日公布的《促进中小企业发展“十五五”规划》(下称规划)提出，到2030年，规模以上中小企业人均营业收入累计增长15%左右。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:00",
      "impact": "neutral"
    },
    {
      "title": "新京报贝壳财经讯9月3日下午，北京市规划和自然资源委员会发布公告称，暂停北京市朝阳区将台乡驼房营一队JT-629地块土地一级开发项目1018-0013、0001、0002、0018地块（简称“驼房营地块”）的挂牌交易。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:00",
      "impact": "neutral"
    },
    {
      "title": "9月3日下午，工信部、国家发改委、科技部、财政部、人社部、商务部、中国人民银行、市场监管总局、金融监管总局、证监会等十部门印发《促进中小企业发展“十五五”规划》（以下简称《规划》）。其中提到，加强中小企业上市培育力度，建立优质中小企业上市培育库，促进股权融资常态化对接。大力发展创业投资，设立国家中小企业发展基金二期，带动社会资本投早、投小、投长期、投硬科技。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:55",
      "impact": "neutral"
    },
    {
      "title": "国家开发银行微信公众号9月3日晚发布消息称，9月2日，该行四川省分行投放四川省首单暨国开行系统首笔新一轮新型政策性金融工具2.45亿元，用于支持中创新航动力电池及储能电池自贡基地项目。今年的政府工作报告提出，发行新型政策性金融工具8000亿元，带动更多社会资本参与投资。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:55",
      "impact": "neutral"
    },
    {
      "title": "记者9月3日获悉，为持续推动中小企业高质量发展，工业和信息化部会同国家发展改革委、科技部、财政部、人力资源和社会保障部、商务部、中国人民银行、市场监管总局、金融监管总局、中国证监会共十部门近日联合印发《促进中小企业发展“十五五”规划》（以下简称《规划》）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:54",
      "impact": "neutral"
    },
    {
      "title": "中新社吉林延吉9月3日电(记者黄艳梅)3日在吉林省延边朝鲜族自治州延吉市发布的《2026中国边疆经济发展年度报告》(下称报告)指出，面对全球产业链供应链加速重构与地缘政治风险上升等外部挑战，中国边疆地区需提升开放发展能力，增强开放韧性，更好地统筹发展与安全。9月3日，《2026中国边疆经济发展年度报告》在吉林省延边朝鲜族自治州延吉市发布。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:50",
      "impact": "neutral"
    },
    {
      "title": "1、工信部等十部门印发《促进中小企业发展“十五五”规划》，高质量建设债券市场“科技板”，支持符合条件的中小企业债券融资；设立国家中小企业发展基金二期带动社会资本投早、投小、投长期、投硬科技。2、房贷展期至40年影响征信？多家银行人士对此表示，展期本身无影响，出现逾期才影响征信。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:49",
      "impact": "neutral"
    },
    {
      "title": "9月3日，商务部召开例行新闻发布会。《每日经济新闻》记者在发布会现场注意到，消费成为本场发布会媒体关注的热点话题之一，商务部新闻发言人分别就入境消费和商品消费扩容升级等内容进行了回应。商务部新闻发言人黄玲表示，今年暑期，“中国游”“中国购”持续火热，越来越多的外国游客来中国购好物、品美食、赏美景、观展演，感受“购在中国”的独特魅力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:30",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 50,
    "label": "中性",
    "upDownRatio": "3,022/1,488",
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
