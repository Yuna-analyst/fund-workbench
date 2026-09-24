// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-24 14:52:52
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-24 14:52 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-24",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3888.37,
      "change": -48.15,
      "changePct": "-1.22%",
      "high": 3930.5,
      "low": 3888.37,
      "volume": 438530412.0,
      "amount": 783613000000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13316.97,
      "change": -319.1,
      "changePct": "-2.34%",
      "high": 13577.86,
      "low": 13316.97,
      "volume": 526252665.0,
      "amount": 869744360000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3288.95,
      "change": -90.66,
      "changePct": "-2.68%",
      "high": 3371.61,
      "low": 3288.95,
      "volume": 141668111.0,
      "amount": 411940640000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1621.87,
      "change": -38.98,
      "changePct": "-2.35%",
      "high": 1653.39,
      "low": 1621.87,
      "volume": 6141181.0,
      "amount": 69988050000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4439.14,
      "change": -78.14,
      "changePct": "-1.73%",
      "high": 4500.2,
      "low": 4439.14,
      "volume": 151965787.0,
      "amount": 375461680000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7624.07,
      "change": -167.75,
      "changePct": "-2.15%",
      "high": 7774.22,
      "low": 7624.07,
      "volume": 125603953.0,
      "amount": 269922500000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.78万亿",
      "label": "成交额",
      "rawAmount": 2780670230000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,337/2,331",
      "label": "涨/跌家数",
      "rawUp": 1337,
      "rawDown": 2331,
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
    "totalInflow": 2.9,
    "totalOutflow": 0,
    "netFlow": 2.9,
    "netFlowTrend": [
      0.58,
      1.16,
      1.74,
      2.32,
      2.9
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
      "inflow": 2.9,
      "pct": 0.72
    },
    {
      "name": "煤炭",
      "inflow": 1.2,
      "pct": 0.32
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -1.39
    },
    {
      "name": "食品",
      "inflow": -0.05,
      "pct": -1.42
    },
    {
      "name": "计算机",
      "inflow": -0.05,
      "pct": -1.84
    },
    {
      "name": "游戏",
      "inflow": -0.17,
      "pct": -0.85
    },
    {
      "name": "钢铁",
      "inflow": -0.17,
      "pct": -1.06
    },
    {
      "name": "家电",
      "inflow": -0.18,
      "pct": -0.28
    },
    {
      "name": "农业",
      "inflow": -0.24,
      "pct": -2.06
    },
    {
      "name": "新能源",
      "inflow": -0.32,
      "pct": -2.16
    },
    {
      "name": "人工智能",
      "inflow": -0.34,
      "pct": -1.84
    },
    {
      "name": "新能源车",
      "inflow": -0.37,
      "pct": -2.13
    },
    {
      "name": "云计算",
      "inflow": -0.52,
      "pct": -1.69
    },
    {
      "name": "地产",
      "inflow": -0.62,
      "pct": -2.18
    },
    {
      "name": "军工",
      "inflow": -0.67,
      "pct": -1.83
    },
    {
      "name": "传媒",
      "inflow": -0.85,
      "pct": -1.35
    },
    {
      "name": "白酒",
      "inflow": -0.92,
      "pct": -1.69
    },
    {
      "name": "医药",
      "inflow": -1.2,
      "pct": -2.34
    },
    {
      "name": "医疗",
      "inflow": -1.44,
      "pct": -2.29
    },
    {
      "name": "券商",
      "inflow": -2.13,
      "pct": -1.76
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.839,
      "changePct": 0.72,
      "change": 0.006,
      "turnover": 9.66
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.266,
      "changePct": 0.32,
      "change": 0.004,
      "turnover": 4.01
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.414,
      "changePct": -0.28,
      "change": -0.004,
      "turnover": 0.6
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.053,
      "changePct": -0.85,
      "change": -0.009,
      "turnover": 0.58
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.121,
      "changePct": -1.06,
      "change": -0.012,
      "turnover": 0.57
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.802,
      "changePct": -1.35,
      "change": -0.011,
      "turnover": 2.85
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.992,
      "changePct": -1.39,
      "change": -0.014,
      "turnover": 0.06
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.486,
      "changePct": -1.42,
      "change": -0.007,
      "turnover": 0.16
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.408,
      "changePct": -1.69,
      "change": -0.007,
      "turnover": 3.08
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.626,
      "changePct": -1.69,
      "change": -0.028,
      "turnover": 1.72
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.501,
      "changePct": -1.76,
      "change": -0.009,
      "turnover": 7.1
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.129,
      "changePct": -1.83,
      "change": -0.021,
      "turnover": 2.22
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.012,
      "changePct": -1.84,
      "change": -0.019,
      "turnover": 1.15
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.121,
      "changePct": -1.84,
      "change": -0.021,
      "turnover": 0.16
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.712,
      "changePct": -2.06,
      "change": -0.015,
      "turnover": 0.8
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.472,
      "changePct": -2.13,
      "change": -0.032,
      "turnover": 1.22
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.265,
      "changePct": -2.16,
      "change": -0.05,
      "turnover": 1.07
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.257,
      "changePct": -2.18,
      "change": -0.028,
      "turnover": 2.07
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.341,
      "changePct": -2.29,
      "change": -0.008,
      "turnover": 4.8
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.375,
      "changePct": -2.34,
      "change": -0.009,
      "turnover": 3.99
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.132,
      "changePct": -2.5,
      "change": -0.029,
      "turnover": 4.95
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.023,
      "changePct": -2.66,
      "change": -0.028,
      "turnover": 9.72
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.792,
      "changePct": -2.7,
      "change": -0.022,
      "turnover": 0.98
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.827,
      "changePct": -2.93,
      "change": -0.025,
      "turnover": 0.68
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.038,
      "changePct": -2.99,
      "change": -0.032,
      "turnover": 9.77
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.679,
      "changePct": -3.14,
      "change": -0.022,
      "turnover": 32.75
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.841,
      "changePct": -3.33,
      "change": -0.029,
      "turnover": 7.29
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.658,
      "changePct": -3.44,
      "change": -0.059,
      "turnover": 6.99
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.265,
      "changePct": -2.16,
      "amount": 1.07,
      "netFlow": -0.27
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.375,
      "changePct": -2.34,
      "amount": 3.99,
      "netFlow": -1.0
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.501,
      "changePct": -1.76,
      "amount": 7.1,
      "netFlow": -1.78
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.716,
      "changePct": -1.61,
      "amount": 7.55,
      "netFlow": -1.89
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.023,
      "changePct": -2.66,
      "amount": 9.72,
      "netFlow": -2.43
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.392,
      "changePct": -1.41,
      "amount": 11.42,
      "netFlow": -2.86
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.959,
      "changePct": -1.37,
      "amount": 19.88,
      "netFlow": -4.97
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.65,
      "changePct": -2.15,
      "amount": 31.55,
      "netFlow": -7.89
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.515,
      "changePct": -1.63,
      "amount": 32.21,
      "netFlow": -8.05
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.713,
      "changePct": -2.39,
      "amount": 54.2,
      "netFlow": -13.55
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.515,
      "changePct": -1.63,
      "amount": 32.21,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.959,
      "changePct": -1.37,
      "amount": 19.88,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.65,
      "changePct": -2.15,
      "amount": 31.55,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.716,
      "changePct": -1.61,
      "amount": 7.55,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.392,
      "changePct": -1.41,
      "amount": 11.42,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 9.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 4.01,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.85,
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
      "name": "食品",
      "turnover": 0.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.08,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 2.07,
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
      "name": "医药",
      "turnover": 3.99,
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
      "nav": 4.6768,
      "ret1w": -2.2,
      "ret1m": 0.88,
      "ret3m": 6.51,
      "ret6m": -7.23,
      "ret1y": 17.19,
      "ret2y": 17.16,
      "ret3y": 169.01
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.0766,
      "ret1w": -3.19,
      "ret1m": -0.76,
      "ret3m": -3.27,
      "ret6m": -20.43,
      "ret1y": 5.87,
      "ret2y": -4.73,
      "ret3y": 61.44
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.9535,
      "ret1w": -3.1,
      "ret1m": -1.08,
      "ret3m": 5.85,
      "ret6m": -15.46,
      "ret1y": 48.79,
      "ret2y": 75.84,
      "ret3y": 305.44
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6928,
      "ret1w": -0.23,
      "ret1m": -0.07,
      "ret3m": -1.04,
      "ret6m": 7.93,
      "ret1y": -4.14,
      "ret2y": -16.19,
      "ret3y": 2.21
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9707,
      "ret1w": -1.92,
      "ret1m": 1.34,
      "ret3m": -9.28,
      "ret6m": -16.02,
      "ret1y": -33.32,
      "ret2y": -30.26,
      "ret3y": 10.9
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6746,
      "ret1w": -1.31,
      "ret1m": -0.54,
      "ret3m": -2.37,
      "ret6m": -5.23,
      "ret1y": -21.82,
      "ret2y": -19.19,
      "ret3y": 28.46
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2847,
      "ret1w": -1.08,
      "ret1m": -0.92,
      "ret3m": -3.14,
      "ret6m": 3.45,
      "ret1y": -4.73,
      "ret2y": 5.18,
      "ret3y": 49.27
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.955,
      "ret1w": -2.2,
      "ret1m": 1.98,
      "ret3m": 4.21,
      "ret6m": -11.94,
      "ret1y": 6.37,
      "ret2y": 4.94,
      "ret3y": 78.54
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3331,
      "ret1w": -2.19,
      "ret1m": 0.47,
      "ret3m": -0.04,
      "ret6m": -11.11,
      "ret1y": 5.13,
      "ret2y": 5.35,
      "ret3y": 42.62
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.397,
      "ret1w": -2.55,
      "ret1m": -0.5,
      "ret3m": 0.3,
      "ret6m": -17.69,
      "ret1y": 34.8,
      "ret2y": 52.13,
      "ret3y": 286.46
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.083,
      "ret1w": -1.46,
      "ret1m": 0.0,
      "ret3m": -1.9,
      "ret6m": 7.98,
      "ret1y": -3.48,
      "ret2y": -16.37,
      "ret3y": 1.12
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.432,
      "ret1w": -1.3,
      "ret1m": 5.19,
      "ret3m": 3.23,
      "ret6m": 7.42,
      "ret1y": -5.44,
      "ret2y": -9.56,
      "ret3y": 39.05
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7251,
      "ret1w": -2.79,
      "ret1m": -0.87,
      "ret3m": -2.67,
      "ret6m": -33.45,
      "ret1y": -46.07,
      "ret2y": -41.86,
      "ret3y": 23.6
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8718,
      "ret1w": -1.41,
      "ret1m": -0.8,
      "ret3m": -2.3,
      "ret6m": 2.32,
      "ret1y": 5.1,
      "ret2y": -8.43,
      "ret3y": 3.15
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6733,
      "ret1w": -1.67,
      "ret1m": 0.93,
      "ret3m": 2.84,
      "ret6m": -8.82,
      "ret1y": 4.75,
      "ret2y": 9.7,
      "ret3y": 74.25
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3881,
      "ret1w": -3.35,
      "ret1m": -0.27,
      "ret3m": -0.15,
      "ret6m": -31.29,
      "ret1y": 26.82,
      "ret2y": 74.59,
      "ret3y": 238.79
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5863,
      "ret1w": -0.69,
      "ret1m": 2.86,
      "ret3m": 2.14,
      "ret6m": 7.12,
      "ret1y": -1.55,
      "ret2y": -3.29,
      "ret3y": 22.57
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.013,
      "ret1w": -4.43,
      "ret1m": 0.8,
      "ret3m": -1.07,
      "ret6m": 9.51,
      "ret1y": 8.11,
      "ret2y": -15.02,
      "ret3y": 9.16
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.263,
      "ret1w": -0.56,
      "ret1m": -0.26,
      "ret3m": -3.51,
      "ret6m": 3.17,
      "ret1y": -6.32,
      "ret2y": 2.97,
      "ret3y": 12.02
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3229,
      "ret1w": -1.69,
      "ret1m": 0.18,
      "ret3m": 0.19,
      "ret6m": 1.05,
      "ret1y": 9.4,
      "ret2y": 17.38,
      "ret3y": 80.92
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.231,
      "ret1w": -2.43,
      "ret1m": -1.04,
      "ret3m": -3.38,
      "ret6m": -16.52,
      "ret1y": 0.02,
      "ret2y": 6.66,
      "ret3y": 47.94
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3098,
      "ret1w": -2.43,
      "ret1m": -1.04,
      "ret3m": -3.35,
      "ret6m": -16.44,
      "ret1y": 0.21,
      "ret2y": 7.08,
      "ret3y": 49.13
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0727,
      "ret1w": -0.52,
      "ret1m": -0.32,
      "ret3m": -1.63,
      "ret6m": -3.5,
      "ret1y": 0.07,
      "ret2y": 0.46,
      "ret3y": 6.74
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0466,
      "ret1w": -0.51,
      "ret1m": -0.3,
      "ret3m": -1.58,
      "ret6m": -3.35,
      "ret1y": 0.38,
      "ret2y": 1.07,
      "ret3y": 8.04
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7014,
      "ret1w": -1.07,
      "ret1m": 0.59,
      "ret3m": -1.47,
      "ret6m": -2.92,
      "ret1y": -8.12,
      "ret2y": -13.03,
      "ret3y": 7.0
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7193,
      "ret1w": -1.09,
      "ret1m": 0.59,
      "ret3m": -1.45,
      "ret6m": -2.81,
      "ret1y": -7.9,
      "ret2y": -12.61,
      "ret3y": 8.07
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8141,
      "ret1w": -2.68,
      "ret1m": -1.75,
      "ret3m": 2.16,
      "ret6m": -20.17,
      "ret1y": 36.42,
      "ret2y": 50.05,
      "ret3y": 165.96
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4845,
      "ret1w": -2.05,
      "ret1m": 2.14,
      "ret3m": -0.91,
      "ret6m": -7.26,
      "ret1y": 8.57,
      "ret2y": 11.13,
      "ret3y": 87.31
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7225,
      "ret1w": -1.07,
      "ret1m": 2.6,
      "ret3m": -1.27,
      "ret6m": -11.64,
      "ret1y": -12.68,
      "ret2y": -11.36,
      "ret3y": 13.07
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.2344,
      "ret1w": -2.18,
      "ret1m": 4.61,
      "ret3m": 2.56,
      "ret6m": -13.39,
      "ret1y": 28.46,
      "ret2y": 30.05,
      "ret3y": 154.46
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5061,
      "ret1w": -0.98,
      "ret1m": 0.36,
      "ret3m": 0.92,
      "ret6m": -19.46,
      "ret1y": 3.48,
      "ret2y": 7.48,
      "ret3y": 50.31
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5159,
      "ret1w": -0.98,
      "ret1m": 0.35,
      "ret3m": 0.96,
      "ret6m": -19.38,
      "ret1y": 3.68,
      "ret2y": 7.91,
      "ret3y": 51.51
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2668,
      "ret1w": -0.02,
      "ret1m": -0.13,
      "ret3m": -1.04,
      "ret6m": 1.04,
      "ret1y": -2.0,
      "ret2y": -1.49,
      "ret3y": 0.23
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1063,
      "ret1w": -0.82,
      "ret1m": 0.05,
      "ret3m": -1.92,
      "ret6m": -0.05,
      "ret1y": -1.69,
      "ret2y": -3.1,
      "ret3y": 17.16
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3516,
      "ret1w": -2.04,
      "ret1m": -1.22,
      "ret3m": -4.45,
      "ret6m": -19.0,
      "ret1y": -0.99,
      "ret2y": -21.88,
      "ret3y": 10.44
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9807,
      "ret1w": -1.08,
      "ret1m": 0.53,
      "ret3m": -0.3,
      "ret6m": -0.38,
      "ret1y": -5.39,
      "ret2y": 6.73,
      "ret3y": 49.35
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.331,
      "ret1w": -2.52,
      "ret1m": -1.19,
      "ret3m": 2.15,
      "ret6m": -31.45,
      "ret1y": 28.46,
      "ret2y": 52.52,
      "ret3y": 208.43
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4957,
      "ret1w": 0.34,
      "ret1m": -0.35,
      "ret3m": 0.3,
      "ret6m": 6.42,
      "ret1y": 0.61,
      "ret2y": 0.38,
      "ret3y": 11.12
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.607,
      "ret1w": -0.82,
      "ret1m": -0.3,
      "ret3m": -3.62,
      "ret6m": -26.6,
      "ret1y": -1.3,
      "ret2y": -4.24,
      "ret3y": 45.15
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.511,
      "ret1w": -3.7,
      "ret1m": -2.98,
      "ret3m": 2.88,
      "ret6m": -21.45,
      "ret1y": 63.56,
      "ret2y": 99.33,
      "ret3y": 360.67
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0649,
      "ret1w": -0.22,
      "ret1m": -0.03,
      "ret3m": -0.05,
      "ret6m": -2.02,
      "ret1y": 0.34,
      "ret2y": 1.4,
      "ret3y": 4.48
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1135,
      "ret1w": -0.23,
      "ret1m": -0.03,
      "ret3m": -0.04,
      "ret6m": -1.96,
      "ret1y": 0.46,
      "ret2y": 1.67,
      "ret3y": 5.19
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.066,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.16,
      "ret6m": 0.41,
      "ret1y": 0.77,
      "ret2y": 1.66,
      "ret3y": 2.75
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.36,
      "ret1y": 0.78,
      "ret2y": 1.57,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1095,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.15,
      "ret6m": 0.41,
      "ret1y": 0.88,
      "ret2y": 1.77,
      "ret3y": 4.29
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0769,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.07,
      "ret6m": 0.37,
      "ret1y": 0.72,
      "ret2y": 1.56,
      "ret3y": 2.72
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0915,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.09,
      "ret6m": 0.44,
      "ret1y": 0.87,
      "ret2y": 1.87,
      "ret3y": 3.36
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.062,
      "ret1w": -0.78,
      "ret1m": 0.09,
      "ret3m": -0.23,
      "ret6m": -4.58,
      "ret1y": 2.84,
      "ret2y": 5.4,
      "ret3y": 11.76
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2235,
      "ret1w": -0.68,
      "ret1m": 0.49,
      "ret3m": 0.71,
      "ret6m": -4.32,
      "ret1y": 2.75,
      "ret2y": 3.46,
      "ret3y": 6.91
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.069,
      "ret1w": -0.77,
      "ret1m": 0.11,
      "ret3m": -0.19,
      "ret6m": -4.49,
      "ret1y": 3.05,
      "ret2y": 5.83,
      "ret3y": 12.66
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0474,
      "ret1w": 0.02,
      "ret1m": 0.07,
      "ret3m": 0.19,
      "ret6m": 0.43,
      "ret1y": 0.89,
      "ret2y": 1.83,
      "ret3y": 3.61
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1721,
      "ret1w": -0.49,
      "ret1m": 0.09,
      "ret3m": 0.21,
      "ret6m": -2.66,
      "ret1y": -2.09,
      "ret2y": -0.57,
      "ret3y": 10.0
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2039,
      "ret1w": -0.27,
      "ret1m": -0.32,
      "ret3m": -0.89,
      "ret6m": -1.91,
      "ret1y": -0.52,
      "ret2y": 1.27,
      "ret3y": 13.61
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1365,
      "ret1w": -0.28,
      "ret1m": 0.05,
      "ret3m": -0.16,
      "ret6m": -2.83,
      "ret1y": 1.88,
      "ret2y": 2.5,
      "ret3y": 9.88
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2081,
      "ret1w": -0.27,
      "ret1m": 0.07,
      "ret3m": -0.12,
      "ret6m": -2.72,
      "ret1y": 2.1,
      "ret2y": 2.91,
      "ret3y": 10.8
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.518,
      "ret1w": -0.79,
      "ret1m": 9.1,
      "ret3m": 5.31,
      "ret6m": -6.25,
      "ret1y": 48.2,
      "ret2y": 87.77,
      "ret3y": 165.61
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0167,
      "ret1w": -0.48,
      "ret1m": 2.29,
      "ret3m": 1.46,
      "ret6m": 4.79,
      "ret1y": 13.58,
      "ret2y": 7.39,
      "ret3y": 36.53
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.827,
      "ret1w": -0.31,
      "ret1m": 2.15,
      "ret3m": -3.68,
      "ret6m": -14.47,
      "ret1y": -4.27,
      "ret2y": -2.92,
      "ret3y": 49.73
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4819,
      "ret1w": -1.74,
      "ret1m": 5.36,
      "ret3m": 1.91,
      "ret6m": 7.82,
      "ret1y": 30.32,
      "ret2y": 24.98,
      "ret3y": 79.12
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9192,
      "ret1w": -0.57,
      "ret1m": -0.55,
      "ret3m": -1.84,
      "ret6m": -2.58,
      "ret1y": -3.61,
      "ret2y": -5.7,
      "ret3y": -2.97
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7403,
      "ret1w": -0.91,
      "ret1m": 6.81,
      "ret3m": 2.55,
      "ret6m": -5.67,
      "ret1y": 35.03,
      "ret2y": 47.43,
      "ret3y": 105.08
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.557,
      "ret1w": -0.68,
      "ret1m": 0.93,
      "ret3m": -1.09,
      "ret6m": -0.76,
      "ret1y": 8.55,
      "ret2y": 4.11,
      "ret3y": 20.27
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.252,
      "ret1w": 0.89,
      "ret1m": 7.84,
      "ret3m": -1.57,
      "ret6m": 15.93,
      "ret1y": 2.54,
      "ret2y": -18.7,
      "ret3y": 113.65
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.99,
      "ret1w": 1.12,
      "ret1m": 7.73,
      "ret3m": -0.4,
      "ret6m": 6.68,
      "ret1y": 1.96,
      "ret2y": -20.23,
      "ret3y": 51.84
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9837,
      "ret1w": 0.18,
      "ret1m": 6.63,
      "ret3m": 4.25,
      "ret6m": -6.46,
      "ret1y": 48.12,
      "ret2y": 76.45,
      "ret3y": 156.68
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5784,
      "ret1w": -0.8,
      "ret1m": -1.05,
      "ret3m": -4.41,
      "ret6m": 11.6,
      "ret1y": 7.01,
      "ret2y": 29.54,
      "ret3y": 53.33
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7686,
      "ret1w": -0.24,
      "ret1m": 2.31,
      "ret3m": 1.84,
      "ret6m": 3.77,
      "ret1y": 20.28,
      "ret2y": 27.09,
      "ret3y": 61.55
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3255,
      "ret1w": -0.02,
      "ret1m": 2.72,
      "ret3m": -0.93,
      "ret6m": -0.55,
      "ret1y": 13.4,
      "ret2y": 13.45,
      "ret3y": 39.44
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.24,
      "ret1w": -1.27,
      "ret1m": -1.27,
      "ret3m": -6.42,
      "ret6m": -6.7,
      "ret1y": 1.64,
      "ret2y": -0.8,
      "ret3y": -13.84
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.04,
      "ret1w": -1.35,
      "ret1m": -0.83,
      "ret3m": -7.23,
      "ret6m": 2.31,
      "ret1y": -5.2,
      "ret2y": 5.64,
      "ret3y": 46.22
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0132,
      "ret1w": 0.05,
      "ret1m": 0.13,
      "ret3m": 0.21,
      "ret6m": 0.59,
      "ret1y": 1.52,
      "ret2y": 2.44,
      "ret3y": 3.63
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0122,
      "ret1w": 0.06,
      "ret1m": 0.14,
      "ret3m": 0.22,
      "ret6m": 0.58,
      "ret1y": 1.53,
      "ret2y": 2.5,
      "ret3y": 3.78
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.375,
      "ret1w": -1.86,
      "ret1m": -0.29,
      "ret3m": -2.41,
      "ret6m": -13.36,
      "ret1y": -1.22,
      "ret2y": -5.24,
      "ret3y": 31.96
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.738,
      "ret1w": -2.25,
      "ret1m": -0.47,
      "ret3m": -3.25,
      "ret6m": -14.03,
      "ret1y": 1.41,
      "ret2y": 1.63,
      "ret3y": 56.46
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.59,
      "ret1w": -2.4,
      "ret1m": -2.05,
      "ret3m": -7.44,
      "ret6m": -6.67,
      "ret1y": -6.26,
      "ret2y": 18.38,
      "ret3y": 57.27
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.093,
      "ret1w": -1.49,
      "ret1m": -0.27,
      "ret3m": -1.42,
      "ret6m": -8.29,
      "ret1y": 3.41,
      "ret2y": 7.49,
      "ret3y": 39.14
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1535,
      "ret1w": -1.49,
      "ret1m": -0.26,
      "ret3m": -1.38,
      "ret6m": -8.19,
      "ret1y": 3.62,
      "ret2y": 7.93,
      "ret3y": 40.27
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9702,
      "ret1w": -2.04,
      "ret1m": -0.34,
      "ret3m": -1.07,
      "ret6m": -13.09,
      "ret1y": 0.97,
      "ret2y": 4.67,
      "ret3y": 61.7
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7382,
      "ret1w": -1.61,
      "ret1m": -0.42,
      "ret3m": -2.43,
      "ret6m": -9.01,
      "ret1y": 0.25,
      "ret2y": -1.33,
      "ret3y": 34.27
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5492,
      "ret1w": -1.49,
      "ret1m": -0.44,
      "ret3m": -1.1,
      "ret6m": -5.42,
      "ret1y": -2.82,
      "ret2y": 6.69,
      "ret3y": 52.03
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.905,
      "ret1w": -2.44,
      "ret1m": -0.49,
      "ret3m": -2.74,
      "ret6m": -19.49,
      "ret1y": 8.25,
      "ret2y": 3.62,
      "ret3y": 69.77
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0735,
      "ret1w": -1.29,
      "ret1m": -0.7,
      "ret3m": -4.29,
      "ret6m": 0.94,
      "ret1y": -2.04,
      "ret2y": -4.5,
      "ret3y": 22.35
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4877,
      "ret1w": -0.17,
      "ret1m": -1.06,
      "ret3m": -3.21,
      "ret6m": 2.59,
      "ret1y": 5.95,
      "ret2y": 9.94,
      "ret3y": 26.59
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.54,
      "ret1w": -0.73,
      "ret1m": 4.72,
      "ret3m": 3.29,
      "ret6m": 2.61,
      "ret1y": 21.5,
      "ret2y": 15.54,
      "ret3y": 41.1
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.6615,
      "ret1w": -2.14,
      "ret1m": -0.72,
      "ret3m": -4.25,
      "ret6m": -15.28,
      "ret1y": 0.49,
      "ret2y": 0.68,
      "ret3y": 51.43
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1949,
      "ret1w": -0.23,
      "ret1m": 3.89,
      "ret3m": -0.35,
      "ret6m": -14.41,
      "ret1y": 6.8,
      "ret2y": 6.46,
      "ret3y": 57.76
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1972,
      "ret1w": -0.23,
      "ret1m": 3.89,
      "ret3m": -0.29,
      "ret6m": -14.3,
      "ret1y": 6.88,
      "ret2y": 6.63,
      "ret3y": 57.22
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4086,
      "ret1w": -0.18,
      "ret1m": 1.89,
      "ret3m": -0.56,
      "ret6m": -11.73,
      "ret1y": 3.11,
      "ret2y": 0.41,
      "ret3y": 43.91
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4411,
      "ret1w": -0.19,
      "ret1m": 1.89,
      "ret3m": -0.52,
      "ret6m": -11.64,
      "ret1y": 3.32,
      "ret2y": 0.81,
      "ret3y": 45.05
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0294,
      "ret1w": -0.09,
      "ret1m": 1.51,
      "ret3m": -0.96,
      "ret6m": -19.69,
      "ret1y": 7.27,
      "ret2y": 6.42,
      "ret3y": 68.77
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1623,
      "ret1w": -0.15,
      "ret1m": -0.02,
      "ret3m": -0.33,
      "ret6m": -0.62,
      "ret1y": 0.23,
      "ret2y": 1.63,
      "ret3y": 7.4
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1824,
      "ret1w": -0.14,
      "ret1m": -0.01,
      "ret3m": -0.3,
      "ret6m": -0.54,
      "ret1y": 0.38,
      "ret2y": 1.94,
      "ret3y": 8.06
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0862,
      "ret1w": 0.02,
      "ret1m": 0.09,
      "ret3m": 0.18,
      "ret6m": 0.49,
      "ret1y": 0.92,
      "ret2y": 1.96,
      "ret3y": 3.33
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4098,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": -0.03,
      "ret6m": 0.13,
      "ret1y": 0.06,
      "ret2y": 0.75,
      "ret3y": 10.63
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4624,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.01,
      "ret6m": 0.23,
      "ret1y": 0.27,
      "ret2y": 1.16,
      "ret3y": 11.52
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0994,
      "ret1w": -1.45,
      "ret1m": -1.24,
      "ret3m": 0.12,
      "ret6m": -5.6,
      "ret1y": 13.65,
      "ret2y": 20.71,
      "ret3y": 62.56
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1983,
      "ret1w": -1.99,
      "ret1m": -2.19,
      "ret3m": -3.63,
      "ret6m": -6.29,
      "ret1y": 5.88,
      "ret2y": 6.57,
      "ret3y": 41.59
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 4.6768,
      "price": 4.6768,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 4.0766,
      "price": 4.0766,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.9535,
      "price": 5.9535,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.0,
      "nav": 0.6928,
      "price": 0.6928,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.9707,
      "price": 1.9707,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.6746,
      "price": 2.6746,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.2847,
      "price": 5.2847,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.955,
      "price": 1.955,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.3331,
      "price": 1.3331,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 3.397,
      "price": 3.397,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.083,
      "price": 1.083,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 2.432,
      "price": 2.432,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.7251,
      "price": 1.7251,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.8718,
      "price": 1.8718,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.6733,
      "price": 1.6733,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.3881,
      "price": 2.3881,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 2.5863,
      "price": 2.5863,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.013,
      "price": 1.013,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.263,
      "price": 2.263,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.3229,
      "price": 1.3229,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 1.32,
      "sharpe": 2.92,
      "calmar": 2.92
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.14,
      "sharpe": 1.02,
      "calmar": 1.02
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 1.62,
      "sharpe": 8.02,
      "calmar": 8.02
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.11,
      "sharpe": -0.82,
      "calmar": -0.82
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.01,
      "sharpe": -5.26,
      "calmar": -5.26
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.81,
      "sharpe": -3.94,
      "calmar": -3.94
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.38,
      "sharpe": -0.8,
      "calmar": -0.8
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.97,
      "sharpe": 0.91,
      "calmar": 0.91
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.7,
      "sharpe": 0.94,
      "calmar": 0.94
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.75,
      "sharpe": 6.33,
      "calmar": 6.33
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.0,
      "sharpe": -0.58,
      "calmar": -0.58
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 7.79,
      "sharpe": -0.53,
      "calmar": -0.53
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 1.3,
      "sharpe": -7.85,
      "calmar": -7.85
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.2,
      "sharpe": 0.88,
      "calmar": 0.88
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.4,
      "sharpe": 0.8,
      "calmar": 0.8
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": 5.09,
      "calmar": 5.09
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.29,
      "sharpe": -0.2,
      "calmar": -0.2
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 1.2,
      "sharpe": 1.4,
      "calmar": 1.4
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.39,
      "sharpe": -1.2,
      "calmar": -1.2
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.27,
      "sharpe": 1.81,
      "calmar": 1.81
    }
  ],
  "news": [
    {
      "title": "晚间重大事件汇总",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:53",
      "impact": "neutral"
    },
    {
      "title": "在河南“扬长补短、全面崛起”的关键阶段，省会郑州正被赋予新的重任。“省会强则全省强，省会兴则全省兴。”9月11日，在郑州市领导干部会议上，河南省级层面提出，郑州要“提高首位度、塑造新优势、增强辐射力”。刚刚闭幕的郑州市第十三次党代会，将这一表述写入党代会报告，并纳入未来五年全市总体目标。梳理公开信息，这是河南时隔多年，再度鲜明提出“强省会”战略。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:51",
      "impact": "neutral"
    },
    {
      "title": "9月24日下午，国新办举行新闻发布会，介绍中秋国庆假期交通运输服务保障有关情况。交通运输部新闻发言人、副部长李扬介绍，交通运输部研判分析了今年中秋、国庆两个假期的出行趋势。中秋3天，出行会呈现温和的增长，这3天预计在城市之间、城乡之间的跨区域人员流动量大概6.5亿人次，平均每天大概2.2亿人次，比平常每天的1.8亿人次略微增长20%，是平时的1.2倍。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:51",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（章林记者丁鹏）9月23日，在重庆证监局指导下，重庆上市公司协会与深圳市全景网络有限公司举办重庆辖区2026年网上投资者集体接待日暨半年度业绩说明会活动。活动以“真诚沟通凝共识，携手同行创价值”为主题，聚焦投资者关切热点，畅通双向沟通渠道，实现上市公司与投资者零距离对话。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:47",
      "impact": "neutral"
    },
    {
      "title": "9月24日，市场监管总局召开2026年三季度例行新闻发布会。市场监管总局新闻发言人、新闻宣传司司长王秋苹在会上表示，标准作为世界“通用语言”，是国际贸易的通行证。今年以来，市场监管总局持续推动中国标准扬帆出海。以标准赋能产业，以规则联通世界，以开放拥抱全球，中国标准国际化步伐稳中有进、质效双升，整体呈现四大特点。一是标准国际兼容能力不断提升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:43",
      "impact": "neutral"
    },
    {
      "title": "近日，青海省的黄南、海南、海北三州辖内多家农商行同步披露临时股东会通知，拟于近期审议组建州级统一法人农商银行相关议案。这意味着，青海农信系统正把“地市级统一法人”进一步推进到人口稀少、网点分散、牧区服务半径大的州域场景。相比四川、贵州、新疆等地，青海的农信改革路径更像是“多州、低密度”样本，其并表成本与涉农服务的平衡值得单独拆解分析。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:36",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者常佩琦）记者24日自中国进出口银行获悉，该行高效推进新型政策性金融工具资金投放。截至目前，进出口银行共投放项目123个，金额超220亿元，资金全部用于民间投资或民间资本参与项目，预计可拉动项目总投资超过4000亿元。其中，在福建、广西、内蒙古等24个省（区、市）实现当地首笔资金投放。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:31",
      "impact": "neutral"
    },
    {
      "title": "9月24日，中国人民银行货币政策委员会2026年第三季度例会内容公布，“六张网”建设首次被列为结构性货币政策工具的重点支持领域。本次例会提出，用好各类结构性货币政策工具，不断完善工具设计和管理，扎实做好金融“五篇大文章”，加强对扩大内需、科技创新、中小微企业、民营经济、“六张网”建设等重点领域的金融支持。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:29",
      "impact": "neutral"
    },
    {
      "title": "中新社北京9月24日电(记者赵建华)中国财政部24日公布的数据显示，今年8月，全国发行新增地方政府债券6440亿元(人民币，下同)，其中一般债券1227亿元、专项债券5213亿元。全国发行再融资债券5505亿元，发行地方政府债券合计11945亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:22",
      "impact": "neutral"
    },
    {
      "title": "据商务部、外汇局统计，2026年1-8月，我国全行业对外直接投资7784.7亿元人民币，同比下降0.6%（以美元计为1133.9亿美元，增长3.9%）。其中，我国境内投资者共对全球148个国家和地区的8424家境外企业进行了非金融类直接投资，累计投资5950.6亿元人民币，下降14.4%（以美元计为866.8亿美元，下降10.6%）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:17",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 43,
    "label": "中性",
    "upDownRatio": "1,337/2,331",
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
