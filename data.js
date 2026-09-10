// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-10 14:16:07
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-10 14:16 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-10",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3934.4,
      "change": -17.11,
      "changePct": "-0.43%",
      "high": 3949.25,
      "low": 3927.35,
      "volume": 484675114.0,
      "amount": 779672690000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13617.67,
      "change": -105.65,
      "changePct": "-0.77%",
      "high": 13713.87,
      "low": 13585.6,
      "volume": 559023425.0,
      "amount": 867475140000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3338.42,
      "change": -16.55,
      "changePct": "-0.49%",
      "high": 3368.73,
      "low": 3308.71,
      "volume": 142181720.0,
      "amount": 380056430000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1569.22,
      "change": -10.84,
      "changePct": "-0.69%",
      "high": 1588.0,
      "low": 1562.34,
      "volume": 5799646.0,
      "amount": 53668360000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4548.39,
      "change": -24.21,
      "changePct": "-0.53%",
      "high": 4569.83,
      "low": 4533.66,
      "volume": 146922552.0,
      "amount": 390616200000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7717.8,
      "change": -50.31,
      "changePct": "-0.65%",
      "high": 7766.35,
      "low": 7696.55,
      "volume": 150462216.0,
      "amount": 281695600000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.75万亿",
      "label": "成交额",
      "rawAmount": 2753184420000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,525/1,737",
      "label": "涨/跌家数",
      "rawUp": 2525,
      "rawDown": 1737,
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
    "totalInflow": 4.64,
    "totalOutflow": 0,
    "netFlow": 4.64,
    "netFlowTrend": [
      0.93,
      1.86,
      2.78,
      3.71,
      4.64
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
      "inflow": 3.08,
      "pct": 1.31
    },
    {
      "name": "券商",
      "inflow": 2.5,
      "pct": 0.58
    },
    {
      "name": "军工",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.19
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -0.62
    },
    {
      "name": "家电",
      "inflow": -0.13,
      "pct": -0.7
    },
    {
      "name": "电子",
      "inflow": -0.15,
      "pct": -0.61
    },
    {
      "name": "钢铁",
      "inflow": -0.18,
      "pct": -0.92
    },
    {
      "name": "游戏",
      "inflow": -0.2,
      "pct": -0.27
    },
    {
      "name": "新能源",
      "inflow": -0.2,
      "pct": -0.64
    },
    {
      "name": "光伏",
      "inflow": -0.2,
      "pct": -1.1
    },
    {
      "name": "云计算",
      "inflow": -0.22,
      "pct": -1.1
    },
    {
      "name": "地产",
      "inflow": -0.28,
      "pct": -1.13
    },
    {
      "name": "人工智能",
      "inflow": -0.41,
      "pct": -0.89
    },
    {
      "name": "传媒",
      "inflow": -0.56,
      "pct": -1.3
    },
    {
      "name": "芯片",
      "inflow": -0.98,
      "pct": -0.45
    },
    {
      "name": "医疗",
      "inflow": -0.99,
      "pct": -1.19
    },
    {
      "name": "5G",
      "inflow": -1.88,
      "pct": -0.76
    },
    {
      "name": "半导体",
      "inflow": -2.23,
      "pct": -0.71
    },
    {
      "name": "通信",
      "inflow": -6.49,
      "pct": -0.89
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.853,
      "changePct": 1.31,
      "change": 0.011,
      "turnover": 10.27
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.521,
      "changePct": 0.58,
      "change": 0.003,
      "turnover": 8.34
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.18,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 4.16
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.045,
      "changePct": -0.19,
      "change": -0.002,
      "turnover": 0.04
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.105,
      "changePct": -0.27,
      "change": -0.003,
      "turnover": 0.65
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.095,
      "changePct": -0.45,
      "change": -0.005,
      "turnover": 3.26
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.819,
      "changePct": -0.61,
      "change": -0.005,
      "turnover": 0.51
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.128,
      "changePct": -0.62,
      "change": -0.007,
      "turnover": 0.23
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.347,
      "changePct": -0.64,
      "change": -0.015,
      "turnover": 0.68
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.426,
      "changePct": -0.7,
      "change": -0.01,
      "turnover": 0.44
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.976,
      "changePct": -0.71,
      "change": -0.007,
      "turnover": 7.42
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.044,
      "changePct": -0.76,
      "change": -0.008,
      "turnover": 6.25
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.001,
      "changePct": -0.89,
      "change": -0.009,
      "turnover": 1.38
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.671,
      "changePct": -0.89,
      "change": -0.006,
      "turnover": 21.63
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.179,
      "changePct": -0.92,
      "change": -0.011,
      "turnover": 0.59
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.808,
      "changePct": -1.1,
      "change": -0.009,
      "turnover": 0.67
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.614,
      "changePct": -1.1,
      "change": -0.018,
      "turnover": 0.75
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.223,
      "changePct": -1.13,
      "change": -0.014,
      "turnover": 0.94
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.333,
      "changePct": -1.19,
      "change": -0.004,
      "turnover": 3.31
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.833,
      "changePct": -1.3,
      "change": -0.011,
      "turnover": 1.88
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.369,
      "changePct": -1.34,
      "change": -0.005,
      "turnover": 3.1
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.828,
      "changePct": -1.35,
      "change": -0.025,
      "turnover": 6.32
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.493,
      "changePct": -1.4,
      "change": -0.007,
      "turnover": 0.19
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.52,
      "changePct": -1.43,
      "change": -0.022,
      "turnover": 0.97
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.319,
      "changePct": -1.64,
      "change": -0.022,
      "turnover": 8.02
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.418,
      "changePct": -1.88,
      "change": -0.008,
      "turnover": 4.1
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.821,
      "changePct": -1.91,
      "change": -0.016,
      "turnover": 7.98
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.766,
      "changePct": -2.67,
      "change": -0.021,
      "turnover": 1.59
    }
  ],
  "etfFlow": [
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.521,
      "changePct": 0.58,
      "amount": 8.34,
      "netFlow": 2.08
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.347,
      "changePct": -0.64,
      "amount": 0.68,
      "netFlow": -0.17
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.369,
      "changePct": -1.34,
      "amount": 3.1,
      "netFlow": -0.77
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.486,
      "changePct": -0.4,
      "amount": 4.22,
      "netFlow": -1.05
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.822,
      "changePct": -0.43,
      "amount": 6.13,
      "netFlow": -1.53
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.976,
      "changePct": -0.71,
      "amount": 7.42,
      "netFlow": -1.86
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.016,
      "changePct": -0.17,
      "amount": 10.5,
      "netFlow": -2.62
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.617,
      "changePct": -0.43,
      "amount": 20.26,
      "netFlow": -5.07
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.742,
      "changePct": -0.55,
      "amount": 20.36,
      "netFlow": -5.09
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.659,
      "changePct": -0.72,
      "amount": 36.75,
      "netFlow": -9.19
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.617,
      "changePct": -0.43,
      "amount": 20.26,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.016,
      "changePct": -0.17,
      "amount": 10.5,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.742,
      "changePct": -0.55,
      "amount": 20.36,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.822,
      "changePct": -0.43,
      "amount": 6.13,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.486,
      "changePct": -0.4,
      "amount": 4.22,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 10.27,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "券商",
      "turnover": 8.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 4.16,
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
      "name": "游戏",
      "turnover": 0.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 3.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.51,
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
    },
    {
      "name": "新能源",
      "turnover": 0.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.44,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 7.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 6.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 21.63,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "钢铁",
      "turnover": 0.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 0.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.75,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.31,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.5381,
      "ret1w": -2.17,
      "ret1m": -2.02,
      "ret3m": 2.68,
      "ret6m": -6.12,
      "ret1y": -1.14,
      "ret2y": 29.25,
      "ret3y": 167.25
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1785,
      "ret1w": -0.88,
      "ret1m": 2.22,
      "ret3m": -1.03,
      "ret6m": -13.71,
      "ret1y": 5.48,
      "ret2y": 6.67,
      "ret3y": 75.12
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.9457,
      "ret1w": 1.16,
      "ret1m": 6.38,
      "ret3m": 19.13,
      "ret6m": 2.73,
      "ret1y": 47.51,
      "ret2y": 101.89,
      "ret3y": 314.57
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7041,
      "ret1w": -1.44,
      "ret1m": -1.69,
      "ret3m": -2.68,
      "ret6m": 4.75,
      "ret1y": -8.9,
      "ret2y": -16.65,
      "ret3y": 7.05
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0203,
      "ret1w": -1.73,
      "ret1m": -0.93,
      "ret3m": -12.08,
      "ret6m": -17.81,
      "ret1y": -32.88,
      "ret2y": -28.67,
      "ret3y": 16.89
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7453,
      "ret1w": 0.12,
      "ret1m": 2.45,
      "ret3m": -3.85,
      "ret6m": -4.96,
      "ret1y": -27.09,
      "ret2y": -16.4,
      "ret3y": 40.27
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.471,
      "ret1w": -0.91,
      "ret1m": -0.54,
      "ret3m": -1.69,
      "ret6m": 2.08,
      "ret1y": -6.26,
      "ret2y": 10.77,
      "ret3y": 63.1
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.893,
      "ret1w": -1.05,
      "ret1m": -0.84,
      "ret3m": -1.41,
      "ret6m": -4.54,
      "ret1y": -5.07,
      "ret2y": 6.05,
      "ret3y": 75.28
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3316,
      "ret1w": -0.8,
      "ret1m": -0.7,
      "ret3m": -3.07,
      "ret6m": -2.23,
      "ret1y": -1.11,
      "ret2y": 9.3,
      "ret3y": 47.61
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.328,
      "ret1w": -0.63,
      "ret1m": -2.4,
      "ret3m": -6.15,
      "ret6m": -2.58,
      "ret1y": 26.93,
      "ret2y": 73.51,
      "ret3y": 288.79
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.105,
      "ret1w": -1.6,
      "ret1m": -1.25,
      "ret3m": -4.58,
      "ret6m": 5.14,
      "ret1y": -5.8,
      "ret2y": -17.66,
      "ret3y": 6.05
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.322,
      "ret1w": -1.78,
      "ret1m": -1.48,
      "ret3m": -5.57,
      "ret6m": 4.55,
      "ret1y": -16.53,
      "ret2y": -15.69,
      "ret3y": 32.23
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6618,
      "ret1w": -0.15,
      "ret1m": -1.01,
      "ret3m": -9.68,
      "ret6m": -37.83,
      "ret1y": -49.86,
      "ret2y": -36.88,
      "ret3y": 24.35
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9278,
      "ret1w": -0.72,
      "ret1m": -1.37,
      "ret3m": -1.5,
      "ret6m": 6.21,
      "ret1y": 0.25,
      "ret2y": -4.29,
      "ret3y": 10.27
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6554,
      "ret1w": -0.7,
      "ret1m": 0.08,
      "ret3m": -0.64,
      "ret6m": -3.13,
      "ret1y": -4.87,
      "ret2y": 10.53,
      "ret3y": 77.98
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3586,
      "ret1w": -0.56,
      "ret1m": 1.72,
      "ret3m": -0.13,
      "ret6m": -17.99,
      "ret1y": 22.44,
      "ret2y": 84.41,
      "ret3y": 237.14
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5869,
      "ret1w": -0.16,
      "ret1m": 0.79,
      "ret3m": 1.24,
      "ret6m": 0.61,
      "ret1y": -6.38,
      "ret2y": -4.33,
      "ret3y": 28.7
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.982,
      "ret1w": -1.31,
      "ret1m": -4.84,
      "ret3m": -10.81,
      "ret6m": 14.72,
      "ret1y": -0.81,
      "ret2y": -19.18,
      "ret3y": 4.25
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3395,
      "ret1w": -0.25,
      "ret1m": -0.75,
      "ret3m": -0.86,
      "ret6m": 2.13,
      "ret1y": -6.78,
      "ret2y": 5.07,
      "ret3y": 18.84
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3215,
      "ret1w": -0.56,
      "ret1m": -0.7,
      "ret3m": 0.0,
      "ret6m": 5.16,
      "ret1y": 0.06,
      "ret2y": 19.04,
      "ret3y": 83.61
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2532,
      "ret1w": -0.59,
      "ret1m": 0.14,
      "ret3m": -4.73,
      "ret6m": -6.58,
      "ret1y": -7.93,
      "ret2y": 14.92,
      "ret3y": 51.88
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3332,
      "ret1w": -0.59,
      "ret1m": 0.16,
      "ret3m": -4.7,
      "ret6m": -6.49,
      "ret1y": -7.76,
      "ret2y": 15.37,
      "ret3y": 53.1
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0833,
      "ret1w": -0.25,
      "ret1m": -0.14,
      "ret3m": -1.31,
      "ret6m": -2.02,
      "ret1y": 0.13,
      "ret2y": 0.87,
      "ret3y": 8.73
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0566,
      "ret1w": -0.25,
      "ret1m": -0.13,
      "ret3m": -1.27,
      "ret6m": -1.88,
      "ret1y": 0.42,
      "ret2y": 1.47,
      "ret3y": 10.04
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7084,
      "ret1w": -1.24,
      "ret1m": -1.8,
      "ret3m": -4.62,
      "ret6m": -2.84,
      "ret1y": -12.13,
      "ret2y": -9.67,
      "ret3y": 14.42
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7264,
      "ret1w": -1.24,
      "ret1m": -1.8,
      "ret3m": -4.58,
      "ret6m": -2.71,
      "ret1y": -11.91,
      "ret2y": -9.21,
      "ret3y": 15.56
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8656,
      "ret1w": -0.55,
      "ret1m": 3.92,
      "ret3m": 2.93,
      "ret6m": -7.78,
      "ret1y": 36.36,
      "ret2y": 67.68,
      "ret3y": 179.57
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4475,
      "ret1w": -1.21,
      "ret1m": -3.12,
      "ret3m": -4.74,
      "ret6m": -1.4,
      "ret1y": -1.53,
      "ret2y": 19.17,
      "ret3y": 87.2
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7182,
      "ret1w": -1.51,
      "ret1m": -3.38,
      "ret3m": -4.85,
      "ret6m": -10.79,
      "ret1y": -18.84,
      "ret2y": -11.39,
      "ret3y": 17.37
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0175,
      "ret1w": -1.08,
      "ret1m": -3.95,
      "ret3m": -5.65,
      "ret6m": -5.59,
      "ret1y": 11.99,
      "ret2y": 37.33,
      "ret3y": 141.03
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5066,
      "ret1w": -0.49,
      "ret1m": 0.32,
      "ret3m": -4.14,
      "ret6m": -6.81,
      "ret1y": -4.29,
      "ret2y": 13.38,
      "ret3y": 55.64
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5163,
      "ret1w": -0.5,
      "ret1m": 0.31,
      "ret3m": -4.12,
      "ret6m": -6.72,
      "ret1y": -4.1,
      "ret2y": 13.82,
      "ret3y": 56.88
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2868,
      "ret1w": -0.06,
      "ret1m": 0.09,
      "ret3m": 0.5,
      "ret6m": 1.05,
      "ret1y": -0.32,
      "ret2y": 0.03,
      "ret3y": 1.76
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1187,
      "ret1w": 0.03,
      "ret1m": -0.77,
      "ret3m": -3.27,
      "ret6m": 3.82,
      "ret1y": -5.11,
      "ret2y": -2.11,
      "ret3y": 19.2
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3807,
      "ret1w": -0.53,
      "ret1m": -1.48,
      "ret3m": -5.49,
      "ret6m": -11.11,
      "ret1y": -8.09,
      "ret2y": -16.91,
      "ret3y": 16.5
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0329,
      "ret1w": -0.34,
      "ret1m": 0.01,
      "ret3m": 0.31,
      "ret6m": -0.82,
      "ret1y": -7.05,
      "ret2y": 11.21,
      "ret3y": 56.59
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.325,
      "ret1w": -0.3,
      "ret1m": 1.74,
      "ret3m": -1.39,
      "ret6m": -19.16,
      "ret1y": 28.58,
      "ret2y": 71.92,
      "ret3y": 212.5
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5293,
      "ret1w": 0.85,
      "ret1m": 0.91,
      "ret3m": 4.29,
      "ret6m": 3.73,
      "ret1y": 2.27,
      "ret2y": 1.61,
      "ret3y": 17.69
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6185,
      "ret1w": -0.94,
      "ret1m": -3.4,
      "ret3m": -7.09,
      "ret6m": -18.16,
      "ret1y": -15.16,
      "ret2y": 6.51,
      "ret3y": 50.56
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.617,
      "ret1w": 0.41,
      "ret1m": 5.14,
      "ret3m": -0.83,
      "ret6m": -6.3,
      "ret1y": 69.47,
      "ret2y": 125.33,
      "ret3y": 389.85
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": -0.07,
      "ret1m": 0.19,
      "ret3m": -0.02,
      "ret6m": -0.91,
      "ret1y": -0.06,
      "ret2y": 1.43,
      "ret3y": 4.97
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1156,
      "ret1w": -0.07,
      "ret1m": 0.19,
      "ret3m": 0.0,
      "ret6m": -0.85,
      "ret1y": 0.06,
      "ret2y": 1.7,
      "ret3y": 5.68
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0649,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.1,
      "ret6m": 0.29,
      "ret1y": 0.75,
      "ret2y": 1.56,
      "ret3y": 2.67
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0992,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.31,
      "ret1y": 0.77,
      "ret2y": 1.51,
      "ret3y": 3.85
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1086,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.13,
      "ret6m": 0.36,
      "ret1y": 0.87,
      "ret2y": 1.72,
      "ret3y": 4.28
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0762,
      "ret1w": 0.0,
      "ret1m": 0.0,
      "ret3m": 0.05,
      "ret6m": 0.34,
      "ret1y": 0.71,
      "ret2y": 1.48,
      "ret3y": 2.7
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0907,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.07,
      "ret6m": 0.41,
      "ret1y": 0.87,
      "ret2y": 1.8,
      "ret3y": 3.35
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0648,
      "ret1w": -0.25,
      "ret1m": -0.11,
      "ret3m": -0.81,
      "ret6m": -1.2,
      "ret1y": 0.46,
      "ret2y": 5.64,
      "ret3y": 13.37
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.22,
      "ret1w": -0.33,
      "ret1m": -0.02,
      "ret3m": -0.3,
      "ret6m": -1.66,
      "ret1y": -0.16,
      "ret2y": 2.81,
      "ret3y": 7.83
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0717,
      "ret1w": -0.24,
      "ret1m": -0.09,
      "ret3m": -0.77,
      "ret6m": -1.09,
      "ret1y": 0.67,
      "ret2y": 6.08,
      "ret3y": 14.3
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0463,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.36,
      "ret1y": 0.86,
      "ret2y": 1.75,
      "ret3y": 3.58
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1707,
      "ret1w": -0.09,
      "ret1m": 0.62,
      "ret3m": 0.01,
      "ret6m": -2.52,
      "ret1y": -3.28,
      "ret2y": 0.82,
      "ret3y": 10.67
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.213,
      "ret1w": -0.16,
      "ret1m": -0.26,
      "ret3m": -0.76,
      "ret6m": -0.63,
      "ret1y": -0.87,
      "ret2y": 3.64,
      "ret3y": 15.27
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1369,
      "ret1w": -0.1,
      "ret1m": -0.09,
      "ret3m": -0.66,
      "ret6m": -0.66,
      "ret1y": 0.53,
      "ret2y": 3.61,
      "ret3y": 10.6
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2083,
      "ret1w": -0.1,
      "ret1m": -0.08,
      "ret3m": -0.63,
      "ret6m": -0.57,
      "ret1y": 0.73,
      "ret2y": 4.03,
      "ret3y": 11.53
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.486,
      "ret1w": 0.65,
      "ret1m": 6.7,
      "ret3m": 8.7,
      "ret6m": -1.89,
      "ret1y": 48.33,
      "ret2y": 98.72,
      "ret3y": 175.92
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.982,
      "ret1w": -0.24,
      "ret1m": 0.31,
      "ret3m": -0.09,
      "ret6m": 3.19,
      "ret1y": 9.07,
      "ret2y": 7.42,
      "ret3y": 39.68
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.855,
      "ret1w": -0.8,
      "ret1m": -1.25,
      "ret3m": -3.6,
      "ret6m": -8.86,
      "ret1y": -8.93,
      "ret2y": 1.05,
      "ret3y": 59.8
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3853,
      "ret1w": -1.03,
      "ret1m": 0.79,
      "ret3m": 0.98,
      "ret6m": 3.93,
      "ret1y": 20.83,
      "ret2y": 28.87,
      "ret3y": 84.79
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9328,
      "ret1w": -0.24,
      "ret1m": -0.22,
      "ret3m": -0.62,
      "ret6m": -0.93,
      "ret1y": -3.23,
      "ret2y": -4.21,
      "ret3y": -2.15
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7095,
      "ret1w": -0.22,
      "ret1m": 5.06,
      "ret3m": 2.17,
      "ret6m": -3.24,
      "ret1y": 33.11,
      "ret2y": 53.6,
      "ret3y": 114.95
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.585,
      "ret1w": -0.84,
      "ret1m": -0.2,
      "ret3m": -1.27,
      "ret6m": 0.59,
      "ret1y": 5.6,
      "ret2y": 5.74,
      "ret3y": 24.76
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.206,
      "ret1w": -1.63,
      "ret1m": -1.07,
      "ret3m": -4.13,
      "ret6m": 14.2,
      "ret1y": -4.36,
      "ret2y": -27.31,
      "ret3y": 107.57
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.962,
      "ret1w": -0.31,
      "ret1m": 0.94,
      "ret3m": 1.05,
      "ret6m": 8.7,
      "ret1y": -5.59,
      "ret2y": -22.73,
      "ret3y": 52.22
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9292,
      "ret1w": 0.32,
      "ret1m": 4.9,
      "ret3m": 4.46,
      "ret6m": -4.82,
      "ret1y": 44.01,
      "ret2y": 80.87,
      "ret3y": 160.6
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6552,
      "ret1w": 0.51,
      "ret1m": 1.63,
      "ret3m": 9.85,
      "ret6m": 13.69,
      "ret1y": 7.86,
      "ret2y": 41.46,
      "ret3y": 69.23
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7829,
      "ret1w": 0.37,
      "ret1m": 3.38,
      "ret3m": 6.41,
      "ret6m": 4.67,
      "ret1y": 19.02,
      "ret2y": 33.0,
      "ret3y": 67.71
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3468,
      "ret1w": 0.2,
      "ret1m": 2.33,
      "ret3m": 4.43,
      "ret6m": 0.53,
      "ret1y": 12.65,
      "ret2y": 18.81,
      "ret3y": 47.32
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.279,
      "ret1w": -1.01,
      "ret1m": -0.85,
      "ret3m": -3.69,
      "ret6m": -3.69,
      "ret1y": -0.31,
      "ret2y": 3.06,
      "ret3y": -9.07
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.103,
      "ret1w": 0.43,
      "ret1m": 0.33,
      "ret3m": 0.91,
      "ret6m": 2.09,
      "ret1y": -15.54,
      "ret2y": 12.76,
      "ret3y": 56.38
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0115,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.54,
      "ret1y": 1.47,
      "ret2y": 2.27,
      "ret3y": 3.54
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0104,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.52,
      "ret1y": 1.47,
      "ret2y": 2.32,
      "ret3y": 3.7
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.396,
      "ret1w": -0.85,
      "ret1m": -0.21,
      "ret3m": -5.03,
      "ret6m": -8.04,
      "ret1y": -3.46,
      "ret2y": 0.65,
      "ret3y": 38.08
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.797,
      "ret1w": -0.82,
      "ret1m": -0.07,
      "ret3m": -4.08,
      "ret6m": -5.38,
      "ret1y": -3.08,
      "ret2y": 11.08,
      "ret3y": 66.39
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7062,
      "ret1w": -0.77,
      "ret1m": 0.42,
      "ret3m": -2.52,
      "ret6m": 4.69,
      "ret1y": -11.63,
      "ret2y": 28.84,
      "ret3y": 85.05
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1338,
      "ret1w": -0.32,
      "ret1m": 0.28,
      "ret3m": -1.64,
      "ret6m": -0.97,
      "ret1y": 1.41,
      "ret2y": 11.0,
      "ret3y": 48.69
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1951,
      "ret1w": -0.31,
      "ret1m": 0.28,
      "ret3m": -1.6,
      "ret6m": -0.87,
      "ret1y": 1.62,
      "ret2y": 11.44,
      "ret3y": 49.89
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9923,
      "ret1w": -0.61,
      "ret1m": -0.44,
      "ret3m": -3.78,
      "ret6m": -3.89,
      "ret1y": -7.33,
      "ret2y": 11.58,
      "ret3y": 69.76
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7774,
      "ret1w": -0.45,
      "ret1m": -0.03,
      "ret3m": -2.99,
      "ret6m": -3.47,
      "ret1y": -1.65,
      "ret2y": 3.51,
      "ret3y": 43.65
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5785,
      "ret1w": -0.7,
      "ret1m": -0.07,
      "ret3m": -2.15,
      "ret6m": -0.57,
      "ret1y": -8.63,
      "ret2y": 11.56,
      "ret3y": 60.68
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.931,
      "ret1w": -0.78,
      "ret1m": 0.24,
      "ret3m": -5.72,
      "ret6m": -9.46,
      "ret1y": 5.63,
      "ret2y": 14.82,
      "ret3y": 78.52
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1469,
      "ret1w": -0.41,
      "ret1m": -1.06,
      "ret3m": -2.17,
      "ret6m": 2.98,
      "ret1y": -1.34,
      "ret2y": 1.13,
      "ret3y": 33.17
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.508,
      "ret1w": -1.22,
      "ret1m": -0.72,
      "ret3m": -1.41,
      "ret6m": 5.16,
      "ret1y": 4.17,
      "ret2y": 10.73,
      "ret3y": 28.57
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4389,
      "ret1w": -0.3,
      "ret1m": 0.87,
      "ret3m": -1.1,
      "ret6m": 0.79,
      "ret1y": 14.48,
      "ret2y": 15.55,
      "ret3y": 45.0
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7292,
      "ret1w": -0.84,
      "ret1m": 0.71,
      "ret3m": -3.95,
      "ret6m": -8.09,
      "ret1y": 0.85,
      "ret2y": 8.84,
      "ret3y": 62.18
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1814,
      "ret1w": -0.05,
      "ret1m": -0.09,
      "ret3m": -1.72,
      "ret6m": -4.73,
      "ret1y": 0.85,
      "ret2y": 8.33,
      "ret3y": 56.77
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1836,
      "ret1w": -0.04,
      "ret1m": -0.06,
      "ret3m": -1.66,
      "ret6m": -4.63,
      "ret1y": 0.91,
      "ret2y": 8.46,
      "ret3y": 56.25
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3944,
      "ret1w": 0.04,
      "ret1m": 0.54,
      "ret3m": -2.04,
      "ret6m": -8.7,
      "ret1y": -4.5,
      "ret2y": 2.97,
      "ret3y": 43.53
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4264,
      "ret1w": 0.05,
      "ret1m": 0.55,
      "ret3m": -2.01,
      "ret6m": -8.61,
      "ret1y": -4.31,
      "ret2y": 3.38,
      "ret3y": 44.69
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0218,
      "ret1w": 0.41,
      "ret1m": 1.41,
      "ret3m": -1.91,
      "ret6m": -13.43,
      "ret1y": 1.43,
      "ret2y": 10.59,
      "ret3y": 69.2
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1621,
      "ret1w": -0.1,
      "ret1m": -0.22,
      "ret3m": -0.75,
      "ret6m": -0.36,
      "ret1y": -0.49,
      "ret2y": 1.77,
      "ret3y": 7.72
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.182,
      "ret1w": -0.1,
      "ret1m": -0.21,
      "ret3m": -0.73,
      "ret6m": -0.29,
      "ret1y": -0.34,
      "ret2y": 2.08,
      "ret3y": 8.37
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0849,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.12,
      "ret6m": 0.36,
      "ret1y": 0.89,
      "ret2y": 1.87,
      "ret3y": 3.25
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4096,
      "ret1w": -0.01,
      "ret1m": -0.01,
      "ret3m": -0.07,
      "ret6m": 0.02,
      "ret1y": 0.07,
      "ret2y": 0.65,
      "ret3y": 11.73
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.462,
      "ret1w": -0.01,
      "ret1m": -0.01,
      "ret3m": -0.03,
      "ret6m": 0.13,
      "ret1y": 0.28,
      "ret2y": 1.06,
      "ret3y": 12.63
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1047,
      "ret1w": -0.15,
      "ret1m": 0.77,
      "ret3m": -1.88,
      "ret6m": 0.8,
      "ret1y": 10.84,
      "ret2y": 23.04,
      "ret3y": 67.41
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2288,
      "ret1w": -0.54,
      "ret1m": -0.57,
      "ret3m": -3.18,
      "ret6m": -0.56,
      "ret1y": 2.97,
      "ret2y": 8.93,
      "ret3y": 50.57
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 4.5381,
      "price": 4.5381,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 4.1785,
      "price": 4.1785,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.32,
      "nav": 5.9457,
      "price": 5.9457,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 0.7041,
      "price": 0.7041,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.0203,
      "price": 2.0203,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.12,
      "nav": 2.7453,
      "price": 2.7453,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 5.471,
      "price": 5.471,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.893,
      "price": 1.893,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.3316,
      "price": 1.3316,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 3.328,
      "price": 3.328,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.105,
      "price": 1.105,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.322,
      "price": 2.322,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.6618,
      "price": 1.6618,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.9278,
      "price": 1.9278,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.6554,
      "price": 1.6554,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.3586,
      "price": 2.3586,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.5869,
      "price": 2.5869,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 0.982,
      "price": 0.982,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.3395,
      "price": 2.3395,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.3215,
      "price": 1.3215,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.03,
      "sharpe": -0.16,
      "calmar": -0.16
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.33,
      "sharpe": 0.76,
      "calmar": 0.76
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 9.57,
      "sharpe": 4.17,
      "calmar": 4.17
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.54,
      "sharpe": -1.33,
      "calmar": -1.33
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 1.4,
      "sharpe": -5.54,
      "calmar": -5.54
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.68,
      "sharpe": -3.64,
      "calmar": -3.64
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.81,
      "sharpe": -1.13,
      "calmar": -1.13
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.26,
      "sharpe": -0.87,
      "calmar": -0.87
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.05,
      "sharpe": -0.19,
      "calmar": -0.19
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.6,
      "sharpe": 3.64,
      "calmar": 3.64
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.88,
      "sharpe": -0.93,
      "calmar": -0.93
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 2.22,
      "sharpe": -2.55,
      "calmar": -2.55
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 1.52,
      "sharpe": -8.3,
      "calmar": -8.3
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.06,
      "sharpe": 0.04,
      "calmar": 0.04
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.12,
      "sharpe": -0.96,
      "calmar": -0.96
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 2.58,
      "sharpe": 3.34,
      "calmar": 3.34
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.19,
      "sharpe": -1.1,
      "calmar": -1.1
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 7.26,
      "sharpe": -0.08,
      "calmar": -0.08
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.12,
      "sharpe": -1.18,
      "calmar": -1.18
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.05,
      "sharpe": 0.01,
      "calmar": 0.01
    }
  ],
  "news": [
    {
      "title": "中国人民银行副行长陆磊9月10日在国新办举行的“开局起步‘十五五’”系列主题新闻发布会上表示，近日，《金融强国建设“十五五”规划》正式出台。为实施好相关部署，中国人民银行制定印发了《中国人民银行“十五五”改革发展规划》，配套出台了9份相关领域的行动方案。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "15:06",
      "impact": "neutral"
    },
    {
      "title": "1、证监会副主席李超表示，进一步拓宽中长期资金来源、渠道和入市方式，全力维护资本市场平稳运行。2、两部门：对重要工业品生产领域涉嫌低价无序竞争的经营者进行提醒告诫，必要时组织开展成本调查。3、湖北印发《数字湖北建设“十五五”规划》，围绕光通信、高端芯片、北斗高精度定位等开展集中攻关，推进人工智能、具身智能、量子科技等前沿方向原始创新。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:54",
      "impact": "neutral"
    },
    {
      "title": "日前，中央网信办、国家发展改革委等七部门联合印发《促进数字化绿色化协同转型发展实施方案（2026—2030年）》（以下简称“《实施方案》”），明确了“十五五”时期推进数字化绿色化协同转型发展（以下简称“双化协同”）的思路目标与重点任务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:47",
      "impact": "neutral"
    },
    {
      "title": "9月9日，国家统计局发布的数据显示，8月份，全国居民消费价格指数（CPI）同比上涨0.8%，环比上涨0.4%；工业生产者出厂价格指数（PPI）同比上涨3.8%，环比上涨0.4%。受访业界专家认为，8月中东局势升级，国际油价再度上涨，推动国内汽油价格大幅走高，是当月CPI环比由降转升、同比涨幅扩大的主要原因。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:47",
      "impact": "neutral"
    },
    {
      "title": "中新社北京9月10日电(记者吕少威)作为2026年中国国际服务贸易交易会的重要活动，2026“投资北京”主题推介会10日在北京首钢园举行。活动现场，36个重点项目集中签约，涵盖科技创新、智能制造、现代服务等12个产业领域，涉及金额440亿元人民币。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:44",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道记者唐婧9月10日下午，国新办举行“开局起步‘十五五’”系列主题新闻发布会，介绍金融领域贯彻落实“十五五”规划、推动金融强国建设有关情况。记者从发布会上获悉，根据“十五五”规划纲要要求，在中央金融委统一部署下，中央金融办会同各金融单位制定的《金融强国建设“十五五”规划》（下称《规划》）正式出台。这是“十五五”时期金融工作的总体方略和具体谋划。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:38",
      "impact": "neutral"
    },
    {
      "title": "市场监管总局今天（10日）发布2025年—2026年中国知识产权行政执法十大案例。一、天津市市场监管委查处倪某倩销售侵犯“HAZZYS”“HUSHPUPPIES”注册商标专用权的服装案2026年2月，天津市市场监管委接举报后，会同公安机关当日进行突击检查，现场查扣侵权服装1.14万件，货值1034.86万元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:37",
      "impact": "neutral"
    },
    {
      "title": "9月10日，广东省惠州市住房和城乡建设局发布关于开展港澳居民来惠置业安居全民营销活动的通知。通知显示，为深入落实粤港澳大湾区建设部署，进一步激活港澳居民在惠置业需求，促进惠州市房地产市场平稳健康发展，充分调动社会力量拓展港澳客源，经市人民政府同意，决定在全市开展港澳居民来惠置业安居全民营销活动。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:29",
      "impact": "neutral"
    },
    {
      "title": "9月10日，国务院新闻办公室举行“开局起步‘十五五’”系列主题新闻发布会，中国人民银行副行长陆磊，金融监管总局副局长丛林，证监会副主席李超，国家外汇局新闻发言人、副局长李斌介绍金融领域贯彻落实“十五五”规划、推动金融强国建设有关情况，并答记者问。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:27",
      "impact": "neutral"
    },
    {
      "title": "进入9月，多个城市的楼市政策密集落地。在业内人士看来，楼市政策更加精细化，涉及范围也越来越广。近日，河南省出台多条楼市新政，通过加大住房消费支持力度、支持多元化改善性住房需求、加大公积金支持力度，建设“好房子”等举措，因城施策控增量、去库存、优供给，有效满足刚性和多样化改善性住房需求。例如，在控增量方面明确提出了去化周期18个月以上的县市暂停供地。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:25",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 48,
    "label": "中性",
    "upDownRatio": "2,525/1,737",
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
