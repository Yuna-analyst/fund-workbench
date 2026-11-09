// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-09 20:38:33
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-09 20:38 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-09",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3660.79,
      "change": 11.61,
      "changePct": "+0.32%",
      "high": 3679.09,
      "low": 3653.05,
      "volume": 427722257.0,
      "amount": 682532600000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11145.49,
      "change": -30.29,
      "changePct": "-0.27%",
      "high": 11311.2,
      "low": 11145.49,
      "volume": 514921429.0,
      "amount": 800080740000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2458.56,
      "change": -6.67,
      "changePct": "-0.27%",
      "high": 2511.71,
      "low": 2458.01,
      "volume": 165434913.0,
      "amount": 402067800000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1256.96,
      "change": 3.76,
      "changePct": "+0.30%",
      "high": 1277.34,
      "low": 1252.62,
      "volume": 8228867.0,
      "amount": 71734290000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4056.11,
      "change": 1.83,
      "changePct": "+0.05%",
      "high": 4081.09,
      "low": 4054.0,
      "volume": 158374872.0,
      "amount": 395205080000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6586.18,
      "change": -11.17,
      "changePct": "-0.17%",
      "high": 6691.11,
      "low": 6583.97,
      "volume": 123881627.0,
      "amount": 252364230000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.60万亿",
      "label": "成交额",
      "rawAmount": 2603984740000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,994/1,502",
      "label": "涨/跌家数",
      "rawUp": 2994,
      "rawDown": 1502,
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
    "totalInflow": 21.14,
    "totalOutflow": 0,
    "netFlow": 21.14,
    "netFlowTrend": [
      4.23,
      8.46,
      12.68,
      16.91,
      21.14
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
      "inflow": 7.36,
      "pct": 1.98
    },
    {
      "name": "银行",
      "inflow": 5.31,
      "pct": 0.91
    },
    {
      "name": "煤炭",
      "inflow": 2.35,
      "pct": 3.42
    },
    {
      "name": "5G",
      "inflow": 1.83,
      "pct": 2.04
    },
    {
      "name": "军工",
      "inflow": 1.26,
      "pct": 1.08
    },
    {
      "name": "有色",
      "inflow": 1.16,
      "pct": 0.62
    },
    {
      "name": "芯片",
      "inflow": 1.02,
      "pct": 0.12
    },
    {
      "name": "人工智能",
      "inflow": 0.42,
      "pct": 0.13
    },
    {
      "name": "家电",
      "inflow": 0.25,
      "pct": 0.73
    },
    {
      "name": "电子",
      "inflow": 0.18,
      "pct": 0.49
    },
    {
      "name": "半导体",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.51
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -0.4
    },
    {
      "name": "云计算",
      "inflow": -0.15,
      "pct": -0.07
    },
    {
      "name": "农业",
      "inflow": -0.17,
      "pct": -0.41
    },
    {
      "name": "钢铁",
      "inflow": -0.25,
      "pct": -0.75
    },
    {
      "name": "医疗",
      "inflow": -0.87,
      "pct": -0.57
    },
    {
      "name": "白酒",
      "inflow": -0.89,
      "pct": -0.45
    },
    {
      "name": "创新药",
      "inflow": -1.21,
      "pct": -0.6
    },
    {
      "name": "券商",
      "inflow": -1.37,
      "pct": -0.21
    }
  ],
  "sectors": [
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.209,
      "changePct": 3.42,
      "change": 0.04,
      "turnover": 7.82
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.65,
      "changePct": 2.04,
      "change": 0.013,
      "turnover": 6.09
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.413,
      "changePct": 1.98,
      "change": 0.008,
      "turnover": 24.52
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.032,
      "changePct": 1.08,
      "change": 0.011,
      "turnover": 4.2
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.885,
      "changePct": 0.91,
      "change": 0.008,
      "turnover": 17.7
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.371,
      "changePct": 0.73,
      "change": 0.01,
      "turnover": 0.82
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.457,
      "changePct": 0.62,
      "change": 0.009,
      "turnover": 3.88
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.612,
      "changePct": 0.49,
      "change": 0.003,
      "turnover": 0.59
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.78,
      "changePct": 0.13,
      "change": 0.001,
      "turnover": 1.4
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.833,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 3.39
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.775,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 7.73
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.415,
      "changePct": -0.07,
      "change": -0.001,
      "turnover": 0.5
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.482,
      "changePct": -0.21,
      "change": -0.001,
      "turnover": 4.58
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.997,
      "changePct": -0.4,
      "change": -0.004,
      "turnover": 0.24
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.733,
      "changePct": -0.41,
      "change": -0.003,
      "turnover": 0.58
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.446,
      "changePct": -0.45,
      "change": -0.002,
      "turnover": 2.95
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.974,
      "changePct": -0.51,
      "change": -0.005,
      "turnover": 0.06
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.347,
      "changePct": -0.57,
      "change": -0.002,
      "turnover": 2.9
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.832,
      "changePct": -0.6,
      "change": -0.005,
      "turnover": 4.02
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.062,
      "changePct": -0.75,
      "change": -0.008,
      "turnover": 0.84
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.39,
      "changePct": -0.76,
      "change": -0.003,
      "turnover": 2.09
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.52,
      "changePct": -0.76,
      "change": -0.004,
      "turnover": 0.13
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.129,
      "changePct": -1.14,
      "change": -0.013,
      "turnover": 1.73
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.349,
      "changePct": -1.39,
      "change": -0.019,
      "turnover": 0.83
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.829,
      "changePct": -1.43,
      "change": -0.012,
      "turnover": 6.08
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.734,
      "changePct": -1.87,
      "change": -0.014,
      "turnover": 4.72
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.052,
      "changePct": -1.91,
      "change": -0.04,
      "turnover": 2.34
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.04,
      "changePct": -1.98,
      "change": -0.021,
      "turnover": 0.79
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.327,
      "changePct": 0.08,
      "amount": 71.28,
      "netFlow": 17.82
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.13,
      "changePct": 0.15,
      "amount": 44.11,
      "netFlow": 11.03
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.909,
      "changePct": 0.24,
      "amount": 15.62,
      "netFlow": 3.9
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.314,
      "changePct": 0.23,
      "amount": 12.37,
      "netFlow": 3.09
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.015,
      "changePct": 0.15,
      "amount": 10.39,
      "netFlow": 2.6
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.39,
      "changePct": -0.76,
      "amount": 2.09,
      "netFlow": -0.52
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.052,
      "changePct": -1.91,
      "amount": 2.34,
      "netFlow": -0.58
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.482,
      "changePct": -0.21,
      "amount": 4.58,
      "netFlow": -1.15
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.775,
      "changePct": 0.0,
      "amount": 7.73,
      "netFlow": -1.93
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.612,
      "changePct": -0.26,
      "amount": 33.73,
      "netFlow": -8.43
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.13,
      "changePct": 0.15,
      "amount": 44.11,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.909,
      "changePct": 0.24,
      "amount": 15.62,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.612,
      "changePct": -0.26,
      "amount": 33.73,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.314,
      "changePct": 0.23,
      "amount": 12.37,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.015,
      "changePct": 0.15,
      "amount": 10.39,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "煤炭",
      "turnover": 7.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 6.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 24.52,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "军工",
      "turnover": 4.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 17.7,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "家电",
      "turnover": 0.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 3.88,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 3.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 7.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 4.58,
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
      "name": "农业",
      "turnover": 0.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 2.95,
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
      "name": "医疗",
      "turnover": 2.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 4.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.84,
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
      "nav": 3.9763,
      "ret1w": 1.69,
      "ret1m": 4.18,
      "ret3m": -5.57,
      "ret6m": -10.3,
      "ret1y": -20.64,
      "ret2y": 0.38,
      "ret3y": 78.82
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.7247,
      "ret1w": 0.49,
      "ret1m": -3.26,
      "ret3m": -25.66,
      "ret6m": -36.37,
      "ret1y": -43.74,
      "ret2y": -30.6,
      "ret3y": -5.55
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.1523,
      "ret1w": 1.52,
      "ret1m": -5.03,
      "ret3m": -37.51,
      "ret6m": -37.6,
      "ret1y": -40.6,
      "ret2y": -5.57,
      "ret3y": 52.45
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7708,
      "ret1w": -0.57,
      "ret1m": 2.0,
      "ret3m": 10.59,
      "ret6m": 8.5,
      "ret1y": 3.91,
      "ret2y": -3.89,
      "ret3y": 2.16
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0587,
      "ret1w": -2.4,
      "ret1m": 6.01,
      "ret3m": 2.84,
      "ret6m": -10.66,
      "ret1y": -27.49,
      "ret2y": -35.22,
      "ret3y": -21.58
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6832,
      "ret1w": -0.8,
      "ret1m": 4.63,
      "ret3m": 0.64,
      "ret6m": -4.86,
      "ret1y": -23.49,
      "ret2y": -22.81,
      "ret3y": 7.2
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4013,
      "ret1w": -1.2,
      "ret1m": 1.63,
      "ret3m": 2.15,
      "ret6m": -1.93,
      "ret1y": -4.78,
      "ret2y": 0.81,
      "ret3y": 25.44
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.667,
      "ret1w": -0.24,
      "ret1m": 2.02,
      "ret3m": -10.66,
      "ret6m": -12.72,
      "ret1y": -21.33,
      "ret2y": -10.47,
      "ret3y": 23.48
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1247,
      "ret1w": -0.3,
      "ret1m": 0.92,
      "ret3m": -11.91,
      "ret6m": -17.96,
      "ret1y": -22.19,
      "ret2y": -11.24,
      "ret3y": 3.29
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.549,
      "ret1w": -0.31,
      "ret1m": 0.08,
      "ret3m": -15.54,
      "ret6m": -28.06,
      "ret1y": -19.69,
      "ret2y": 14.98,
      "ret3y": 90.22
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.166,
      "ret1w": -0.77,
      "ret1m": 0.34,
      "ret3m": 4.57,
      "ret6m": 4.39,
      "ret1y": 1.83,
      "ret2y": -7.17,
      "ret3y": -12.13
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.264,
      "ret1w": -0.88,
      "ret1m": 0.85,
      "ret3m": -7.33,
      "ret6m": -6.87,
      "ret1y": -14.5,
      "ret2y": -13.02,
      "ret3y": 1.89
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2027,
      "ret1w": -0.68,
      "ret1m": 7.6,
      "ret3m": -21.7,
      "ret6m": -33.66,
      "ret1y": -62.92,
      "ret2y": -60.0,
      "ret3y": -39.57
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.936,
      "ret1w": -1.0,
      "ret1m": 0.49,
      "ret3m": 2.76,
      "ret6m": 0.52,
      "ret1y": 6.44,
      "ret2y": 0.98,
      "ret3y": -6.92
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4138,
      "ret1w": -0.05,
      "ret1m": 1.31,
      "ret3m": -11.01,
      "ret6m": -14.71,
      "ret1y": -21.07,
      "ret2y": -10.54,
      "ret3y": 17.91
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.4177,
      "ret1w": 0.99,
      "ret1m": -4.22,
      "ret3m": -30.67,
      "ret6m": -40.44,
      "ret1y": -45.08,
      "ret2y": 0.83,
      "ret3y": 27.7
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5908,
      "ret1w": -0.2,
      "ret1m": 1.44,
      "ret3m": -1.58,
      "ret6m": 2.37,
      "ret1y": -5.78,
      "ret2y": -4.45,
      "ret3y": -0.65
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.946,
      "ret1w": -0.11,
      "ret1m": 4.99,
      "ret3m": -5.78,
      "ret6m": -13.76,
      "ret1y": -4.06,
      "ret2y": -9.65,
      "ret3y": -17.24
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4148,
      "ret1w": -0.33,
      "ret1m": 0.46,
      "ret3m": 4.4,
      "ret6m": 3.81,
      "ret1y": -0.5,
      "ret2y": 2.04,
      "ret3y": 7.1
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1989,
      "ret1w": 0.44,
      "ret1m": 2.59,
      "ret3m": -6.42,
      "ret6m": -8.72,
      "ret1y": -10.58,
      "ret2y": 1.8,
      "ret3y": 35.07
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9686,
      "ret1w": 0.37,
      "ret1m": 0.73,
      "ret3m": -15.4,
      "ret6m": -25.97,
      "ret1y": -29.25,
      "ret2y": -17.76,
      "ret3y": 0.49
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0311,
      "ret1w": 0.38,
      "ret1m": 0.73,
      "ret3m": -15.37,
      "ret6m": -25.89,
      "ret1y": -29.12,
      "ret2y": -17.44,
      "ret3y": 1.29
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0473,
      "ret1w": -0.26,
      "ret1m": 0.14,
      "ret3m": -1.83,
      "ret6m": -4.7,
      "ret1y": -4.44,
      "ret2y": -3.16,
      "ret3y": 2.1
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0225,
      "ret1w": -0.26,
      "ret1m": 0.16,
      "ret3m": -1.79,
      "ret6m": -4.56,
      "ret1y": -4.15,
      "ret2y": -2.58,
      "ret3y": 3.34
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7145,
      "ret1w": -0.78,
      "ret1m": 2.51,
      "ret3m": 1.72,
      "ret6m": -2.1,
      "ret1y": -12.07,
      "ret2y": -11.53,
      "ret3y": -1.58
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7332,
      "ret1w": -0.78,
      "ret1m": 2.5,
      "ret3m": 1.75,
      "ret6m": -1.98,
      "ret1y": -11.85,
      "ret2y": -11.09,
      "ret3y": -0.6
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.9521,
      "ret1w": 0.95,
      "ret1m": -4.59,
      "ret3m": -23.4,
      "ret6m": -31.07,
      "ret1y": -27.58,
      "ret2y": -0.25,
      "ret3y": 65.81
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3685,
      "ret1w": -0.35,
      "ret1m": 6.35,
      "ret3m": -2.04,
      "ret6m": -7.43,
      "ret1y": -9.14,
      "ret2y": 9.08,
      "ret3y": 46.47
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7239,
      "ret1w": -0.22,
      "ret1m": 6.44,
      "ret3m": 1.87,
      "ret6m": -3.48,
      "ret1y": -19.63,
      "ret2y": -12.32,
      "ret3y": -3.92
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9995,
      "ret1w": 0.14,
      "ret1m": 6.89,
      "ret3m": -1.1,
      "ret6m": -6.46,
      "ret1y": -0.98,
      "ret2y": 28.34,
      "ret3y": 88.23
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4544,
      "ret1w": -0.39,
      "ret1m": -1.73,
      "ret3m": -6.81,
      "ret6m": -13.4,
      "ret1y": -14.86,
      "ret2y": -1.9,
      "ret3y": 19.36
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4635,
      "ret1w": -0.39,
      "ret1m": -1.72,
      "ret3m": -6.76,
      "ret6m": -13.3,
      "ret1y": -14.67,
      "ret2y": -1.49,
      "ret3y": 20.33
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2579,
      "ret1w": 0.1,
      "ret1m": -0.02,
      "ret3m": -1.26,
      "ret6m": -1.33,
      "ret1y": -2.57,
      "ret2y": -2.37,
      "ret3y": 0.47
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0714,
      "ret1w": -0.54,
      "ret1m": 0.45,
      "ret3m": -3.38,
      "ret6m": -6.74,
      "ret1y": -6.69,
      "ret2y": -9.64,
      "ret3y": 0.07
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1703,
      "ret1w": 0.56,
      "ret1m": 1.17,
      "ret3m": -9.38,
      "ret6m": -19.3,
      "ret1y": -29.28,
      "ret2y": -23.57,
      "ret3y": -18.39
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6945,
      "ret1w": 0.07,
      "ret1m": -3.36,
      "ret3m": -7.39,
      "ret6m": -10.22,
      "ret1y": -16.32,
      "ret2y": -4.35,
      "ret3y": 21.68
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.113,
      "ret1w": 1.39,
      "ret1m": -3.56,
      "ret3m": -27.59,
      "ret6m": -38.5,
      "ret1y": -44.89,
      "ret2y": -4.91,
      "ret3y": 52.45
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5692,
      "ret1w": 0.33,
      "ret1m": 0.47,
      "ret3m": 2.65,
      "ret6m": 7.37,
      "ret1y": 5.61,
      "ret2y": 1.86,
      "ret3y": 0.67
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.575,
      "ret1w": 3.72,
      "ret1m": 4.37,
      "ret3m": 1.7,
      "ret6m": -13.64,
      "ret1y": -25.16,
      "ret2y": -0.47,
      "ret3y": -11.7
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.617,
      "ret1w": 0.78,
      "ret1m": -4.46,
      "ret3m": -31.77,
      "ret6m": -41.84,
      "ret1y": -25.66,
      "ret2y": 9.58,
      "ret3y": 94.91
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0513,
      "ret1w": 0.06,
      "ret1m": 0.11,
      "ret3m": -0.83,
      "ret6m": -1.57,
      "ret1y": -1.74,
      "ret2y": -0.7,
      "ret3y": 2.12
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0993,
      "ret1w": 0.05,
      "ret1m": 0.09,
      "ret3m": -0.84,
      "ret6m": -1.54,
      "ret1y": -1.65,
      "ret2y": -0.5,
      "ret3y": 2.76
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0679,
      "ret1w": -0.01,
      "ret1m": 0.12,
      "ret3m": 0.15,
      "ret6m": 0.39,
      "ret1y": 0.71,
      "ret2y": 1.63,
      "ret3y": 2.97
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1028,
      "ret1w": 0.01,
      "ret1m": 0.11,
      "ret3m": 0.21,
      "ret6m": 0.46,
      "ret1y": 0.8,
      "ret2y": 1.6,
      "ret3y": 3.9
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1126,
      "ret1w": 0.01,
      "ret1m": 0.11,
      "ret3m": 0.22,
      "ret6m": 0.51,
      "ret1y": 0.89,
      "ret2y": 1.8,
      "ret3y": 4.33
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0786,
      "ret1w": -0.01,
      "ret1m": 0.08,
      "ret3m": 0.14,
      "ret6m": 0.31,
      "ret1y": 0.66,
      "ret2y": 1.51,
      "ret3y": 3.0
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0937,
      "ret1w": 0.0,
      "ret1m": 0.09,
      "ret3m": 0.16,
      "ret6m": 0.39,
      "ret1y": 0.82,
      "ret2y": 1.82,
      "ret3y": 3.66
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.009,
      "ret1w": 0.0,
      "ret1m": 0.57,
      "ret3m": -3.39,
      "ret6m": -5.86,
      "ret1y": -7.53,
      "ret2y": -1.05,
      "ret3y": 4.83
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.161,
      "ret1w": 0.09,
      "ret1m": 0.5,
      "ret3m": -3.43,
      "ret6m": -4.93,
      "ret1y": -7.62,
      "ret2y": -3.28,
      "ret3y": -0.14
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0161,
      "ret1w": 0.0,
      "ret1m": 0.57,
      "ret3m": -3.36,
      "ret6m": -5.77,
      "ret1y": -7.34,
      "ret2y": -0.65,
      "ret3y": 5.67
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0458,
      "ret1w": 0.01,
      "ret1m": 0.13,
      "ret3m": 0.15,
      "ret6m": 0.48,
      "ret1y": 0.86,
      "ret2y": 1.77,
      "ret3y": 3.67
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0976,
      "ret1w": -0.13,
      "ret1m": 0.03,
      "ret3m": -4.23,
      "ret6m": -6.32,
      "ret1y": -9.46,
      "ret2y": -7.46,
      "ret3y": -1.04
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2055,
      "ret1w": -0.17,
      "ret1m": 0.38,
      "ret3m": 0.07,
      "ret6m": -1.2,
      "ret1y": -2.26,
      "ret2y": 0.73,
      "ret3y": 9.45
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1205,
      "ret1w": 0.02,
      "ret1m": 0.4,
      "ret3m": -0.77,
      "ret6m": -2.02,
      "ret1y": -2.51,
      "ret2y": 0.92,
      "ret3y": 6.33
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1916,
      "ret1w": 0.02,
      "ret1m": 0.4,
      "ret3m": -0.74,
      "ret6m": -1.93,
      "ret1y": -2.31,
      "ret2y": 1.33,
      "ret3y": 7.21
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.746,
      "ret1w": 1.33,
      "ret1m": -16.46,
      "ret3m": -30.1,
      "ret6m": -23.25,
      "ret1y": -25.45,
      "ret2y": 24.18,
      "ret3y": 71.51
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.8477,
      "ret1w": -0.02,
      "ret1m": -2.75,
      "ret3m": -5.14,
      "ret6m": -4.14,
      "ret1y": -2.27,
      "ret2y": 2.37,
      "ret3y": 23.75
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6569,
      "ret1w": -1.4,
      "ret1m": 0.63,
      "ret3m": -8.64,
      "ret6m": -12.5,
      "ret1y": -24.13,
      "ret2y": -11.99,
      "ret3y": 16.55
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.1269,
      "ret1w": 2.54,
      "ret1m": -6.99,
      "ret3m": -14.57,
      "ret6m": -6.79,
      "ret1y": -5.84,
      "ret2y": 5.26,
      "ret3y": 40.15
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9273,
      "ret1w": -0.05,
      "ret1m": 0.38,
      "ret3m": 1.67,
      "ret6m": -1.05,
      "ret1y": -2.44,
      "ret2y": -5.07,
      "ret3y": -0.9
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.2158,
      "ret1w": 0.79,
      "ret1m": -4.8,
      "ret3m": -18.86,
      "ret6m": -15.5,
      "ret1y": -17.88,
      "ret2y": 15.08,
      "ret3y": 53.16
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.31,
      "ret1w": -0.02,
      "ret1m": -1.93,
      "ret3m": -5.0,
      "ret6m": -6.91,
      "ret1y": -7.03,
      "ret2y": -1.78,
      "ret3y": 9.81
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.757,
      "ret1w": -3.81,
      "ret1m": -2.82,
      "ret3m": -21.23,
      "ret6m": -16.9,
      "ret1y": -29.45,
      "ret2y": -33.6,
      "ret3y": -23.07
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.1715,
      "ret1w": -2.89,
      "ret1m": -11.94,
      "ret3m": -25.63,
      "ret6m": -22.54,
      "ret1y": -25.19,
      "ret2y": 22.37,
      "ret3y": 85.2
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.475,
      "ret1w": -0.15,
      "ret1m": -5.08,
      "ret3m": -3.8,
      "ret6m": -1.05,
      "ret1y": -4.25,
      "ret2y": 20.73,
      "ret3y": 41.0
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5259,
      "ret1w": -1.85,
      "ret1m": -4.0,
      "ret3m": -12.02,
      "ret6m": -9.14,
      "ret1y": -9.5,
      "ret2y": 6.68,
      "ret3y": 35.35
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1477,
      "ret1w": -2.86,
      "ret1m": -4.49,
      "ret3m": -11.56,
      "ret6m": -11.03,
      "ret1y": -14.68,
      "ret2y": -3.82,
      "ret3y": 16.68
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.289,
      "ret1w": -0.54,
      "ret1m": 1.74,
      "ret3m": 6.18,
      "ret6m": -2.5,
      "ret1y": -2.94,
      "ret2y": 5.4,
      "ret3y": -5.92
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.93,
      "ret1w": -0.97,
      "ret1m": 4.16,
      "ret3m": -2.48,
      "ret6m": -5.3,
      "ret1y": -15.09,
      "ret2y": -4.17,
      "ret3y": 35.84
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.17,
      "ret1w": 0.53,
      "ret1m": -6.29,
      "ret3m": -19.39,
      "ret6m": -17.71,
      "ret1y": -15.34,
      "ret2y": 9.01,
      "ret3y": 35.65
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0183,
      "ret1w": 0.0,
      "ret1m": 0.21,
      "ret3m": 0.49,
      "ret6m": 0.82,
      "ret1y": 1.43,
      "ret2y": 2.63,
      "ret3y": 4.0
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0175,
      "ret1w": 0.0,
      "ret1m": 0.22,
      "ret3m": 0.5,
      "ret6m": 0.86,
      "ret1y": 1.45,
      "ret2y": 2.7,
      "ret3y": 4.18
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.216,
      "ret1w": -0.16,
      "ret1m": 1.16,
      "ret3m": -7.88,
      "ret6m": -17.28,
      "ret1y": -20.99,
      "ret2y": -16.25,
      "ret3y": -4.25
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.271,
      "ret1w": -0.18,
      "ret1m": 0.35,
      "ret3m": -12.85,
      "ret6m": -22.2,
      "ret1y": -25.44,
      "ret2y": -16.54,
      "ret3y": 2.85
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4644,
      "ret1w": 0.65,
      "ret1m": 1.7,
      "ret3m": -7.75,
      "ret6m": -15.09,
      "ret1y": -21.48,
      "ret2y": -4.31,
      "ret3y": 32.05
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8478,
      "ret1w": 0.21,
      "ret1m": 0.16,
      "ret3m": -9.19,
      "ret6m": -14.62,
      "ret1y": -15.67,
      "ret2y": -7.71,
      "ret3y": 5.51
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9021,
      "ret1w": 0.21,
      "ret1m": 0.17,
      "ret3m": -9.16,
      "ret6m": -14.53,
      "ret1y": -15.5,
      "ret2y": -7.33,
      "ret3y": 6.36
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7132,
      "ret1w": -0.16,
      "ret1m": 2.4,
      "ret3m": -8.76,
      "ret6m": -16.76,
      "ret1y": -22.75,
      "ret2y": -9.09,
      "ret3y": 7.03
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5985,
      "ret1w": 0.04,
      "ret1m": 0.93,
      "ret3m": -5.59,
      "ret6m": -12.61,
      "ret1y": -14.96,
      "ret2y": -11.32,
      "ret3y": 1.71
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4667,
      "ret1w": -0.4,
      "ret1m": 2.19,
      "ret3m": -4.3,
      "ret6m": -8.41,
      "ret1y": -14.14,
      "ret2y": -2.64,
      "ret3y": 18.71
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.506,
      "ret1w": 0.04,
      "ret1m": 0.15,
      "ret3m": -15.14,
      "ret6m": -27.02,
      "ret1y": -27.44,
      "ret2y": -17.96,
      "ret3y": 5.21
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0217,
      "ret1w": -0.02,
      "ret1m": 0.52,
      "ret3m": -1.91,
      "ret6m": -6.88,
      "ret1y": -8.85,
      "ret2y": -8.8,
      "ret3y": 4.14
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4905,
      "ret1w": -1.03,
      "ret1m": 0.13,
      "ret3m": 1.92,
      "ret6m": -2.26,
      "ret1y": 0.08,
      "ret2y": 7.82,
      "ret3y": 29.65
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.1495,
      "ret1w": 1.19,
      "ret1m": -4.62,
      "ret3m": -10.72,
      "ret6m": -8.47,
      "ret1y": -6.87,
      "ret2y": 1.22,
      "ret3y": 19.27
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.222,
      "ret1w": -0.34,
      "ret1m": -0.34,
      "ret3m": -12.72,
      "ret6m": -21.92,
      "ret1y": -25.68,
      "ret2y": -16.72,
      "ret3y": 1.06
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9881,
      "ret1w": 1.22,
      "ret1m": 1.64,
      "ret3m": -12.57,
      "ret6m": -15.66,
      "ret1y": -19.45,
      "ret2y": -10.57,
      "ret3y": 9.85
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9916,
      "ret1w": 1.21,
      "ret1m": 1.65,
      "ret3m": -12.43,
      "ret6m": -15.49,
      "ret1y": -19.28,
      "ret2y": -10.51,
      "ret3y": 9.61
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2271,
      "ret1w": -1.47,
      "ret1m": 3.06,
      "ret3m": -9.29,
      "ret6m": -12.46,
      "ret1y": -20.85,
      "ret2y": -12.34,
      "ret3y": 6.57
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2561,
      "ret1w": -1.47,
      "ret1m": 3.07,
      "ret3m": -9.25,
      "ret6m": -12.37,
      "ret1y": -20.69,
      "ret2y": -11.98,
      "ret3y": 7.43
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.6775,
      "ret1w": -2.11,
      "ret1m": -0.44,
      "ret3m": -12.68,
      "ret6m": -16.57,
      "ret1y": -23.39,
      "ret2y": -12.52,
      "ret3y": 15.18
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1612,
      "ret1w": 0.03,
      "ret1m": 0.59,
      "ret3m": 0.07,
      "ret6m": -0.84,
      "ret1y": -0.85,
      "ret2y": 1.09,
      "ret3y": 5.35
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1817,
      "ret1w": 0.04,
      "ret1m": 0.6,
      "ret3m": 0.09,
      "ret6m": -0.76,
      "ret1y": -0.7,
      "ret2y": 1.4,
      "ret3y": 5.99
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0886,
      "ret1w": 0.0,
      "ret1m": 0.13,
      "ret3m": 0.18,
      "ret6m": 0.47,
      "ret1y": 0.87,
      "ret2y": 1.94,
      "ret3y": 3.57
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.413,
      "ret1w": 0.01,
      "ret1m": 0.21,
      "ret3m": 0.21,
      "ret6m": 0.14,
      "ret1y": 0.23,
      "ret2y": 0.64,
      "ret3y": 4.85
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4664,
      "ret1w": 0.01,
      "ret1m": 0.22,
      "ret3m": 0.24,
      "ret6m": 0.25,
      "ret1y": 0.43,
      "ret2y": 1.05,
      "ret3y": 5.69
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8755,
      "ret1w": 0.43,
      "ret1m": 1.19,
      "ret3m": -7.35,
      "ret6m": -12.87,
      "ret1y": -4.3,
      "ret2y": 7.06,
      "ret3y": 30.72
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0246,
      "ret1w": 0.66,
      "ret1m": 1.97,
      "ret3m": -10.45,
      "ret6m": -19.28,
      "ret1y": -17.97,
      "ret2y": -11.04,
      "ret3y": 9.7
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-10-13",
        "nav": 4.1372
      },
      {
        "date": "2026-10-14",
        "nav": 4.0211
      },
      {
        "date": "2026-10-15",
        "nav": 3.8385
      },
      {
        "date": "2026-10-16",
        "nav": 3.7984
      },
      {
        "date": "2026-10-19",
        "nav": 3.8371
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-10-13",
        "nav": 3.5872
      },
      {
        "date": "2026-10-14",
        "nav": 3.4707
      },
      {
        "date": "2026-10-15",
        "nav": 3.3694
      },
      {
        "date": "2026-10-16",
        "nav": 3.3672
      },
      {
        "date": "2026-10-19",
        "nav": 3.3478
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-10-13",
        "nav": 4.9772
      },
      {
        "date": "2026-10-14",
        "nav": 4.7455
      },
      {
        "date": "2026-10-15",
        "nav": 4.5213
      },
      {
        "date": "2026-10-16",
        "nav": 4.4448
      },
      {
        "date": "2026-10-19",
        "nav": 4.3331
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-10-13",
        "nav": 0.6968
      },
      {
        "date": "2026-10-14",
        "nav": 0.6987
      },
      {
        "date": "2026-10-15",
        "nav": 0.6991
      },
      {
        "date": "2026-10-16",
        "nav": 0.7061
      },
      {
        "date": "2026-10-19",
        "nav": 0.7112
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-10-13",
        "nav": 1.9669
      },
      {
        "date": "2026-10-14",
        "nav": 1.9307
      },
      {
        "date": "2026-10-15",
        "nav": 1.8889
      },
      {
        "date": "2026-10-16",
        "nav": 1.9227
      },
      {
        "date": "2026-10-19",
        "nav": 1.956
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-10-13",
        "nav": 2.6521
      },
      {
        "date": "2026-10-14",
        "nav": 2.596
      },
      {
        "date": "2026-10-15",
        "nav": 2.5144
      },
      {
        "date": "2026-10-16",
        "nav": 2.5987
      },
      {
        "date": "2026-10-19",
        "nav": 2.6154
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-10-13",
        "nav": 5.2113
      },
      {
        "date": "2026-10-14",
        "nav": 5.1798
      },
      {
        "date": "2026-10-15",
        "nav": 5.1465
      },
      {
        "date": "2026-10-16",
        "nav": 5.1959
      },
      {
        "date": "2026-10-19",
        "nav": 5.2416
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-10-13",
        "nav": 1.82
      },
      {
        "date": "2026-10-14",
        "nav": 1.797
      },
      {
        "date": "2026-10-15",
        "nav": 1.736
      },
      {
        "date": "2026-10-16",
        "nav": 1.737
      },
      {
        "date": "2026-10-19",
        "nav": 1.736
      },
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
      }
    ],
    "519965": [
      {
        "date": "2026-10-13",
        "nav": 1.2444
      },
      {
        "date": "2026-10-14",
        "nav": 1.2225
      },
      {
        "date": "2026-10-15",
        "nav": 1.1874
      },
      {
        "date": "2026-10-16",
        "nav": 1.1866
      },
      {
        "date": "2026-10-19",
        "nav": 1.1863
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-10-13",
        "nav": 2.943
      },
      {
        "date": "2026-10-14",
        "nav": 2.879
      },
      {
        "date": "2026-10-15",
        "nav": 2.801
      },
      {
        "date": "2026-10-16",
        "nav": 2.784
      },
      {
        "date": "2026-10-19",
        "nav": 2.771
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-10-13",
        "nav": 1.101
      },
      {
        "date": "2026-10-14",
        "nav": 1.105
      },
      {
        "date": "2026-10-15",
        "nav": 1.105
      },
      {
        "date": "2026-10-16",
        "nav": 1.107
      },
      {
        "date": "2026-10-19",
        "nav": 1.117
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-10-13",
        "nav": 2.374
      },
      {
        "date": "2026-10-14",
        "nav": 2.335
      },
      {
        "date": "2026-10-15",
        "nav": 2.279
      },
      {
        "date": "2026-10-16",
        "nav": 2.249
      },
      {
        "date": "2026-10-19",
        "nav": 2.243
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-10-13",
        "nav": 1.5346
      },
      {
        "date": "2026-10-14",
        "nav": 1.4821
      },
      {
        "date": "2026-10-15",
        "nav": 1.4695
      },
      {
        "date": "2026-10-16",
        "nav": 1.4704
      },
      {
        "date": "2026-10-19",
        "nav": 1.3967
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-10-13",
        "nav": 1.8625
      },
      {
        "date": "2026-10-14",
        "nav": 1.8579
      },
      {
        "date": "2026-10-15",
        "nav": 1.8604
      },
      {
        "date": "2026-10-16",
        "nav": 1.8571
      },
      {
        "date": "2026-10-19",
        "nav": 1.8649
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-10-13",
        "nav": 1.5626
      },
      {
        "date": "2026-10-14",
        "nav": 1.5354
      },
      {
        "date": "2026-10-15",
        "nav": 1.4897
      },
      {
        "date": "2026-10-16",
        "nav": 1.4901
      },
      {
        "date": "2026-10-19",
        "nav": 1.4847
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-10-13",
        "nav": 1.9994
      },
      {
        "date": "2026-10-14",
        "nav": 1.9443
      },
      {
        "date": "2026-10-15",
        "nav": 1.8603
      },
      {
        "date": "2026-10-16",
        "nav": 1.8319
      },
      {
        "date": "2026-10-19",
        "nav": 1.7964
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-10-13",
        "nav": 2.5873
      },
      {
        "date": "2026-10-14",
        "nav": 2.5801
      },
      {
        "date": "2026-10-15",
        "nav": 2.5261
      },
      {
        "date": "2026-10-16",
        "nav": 2.5583
      },
      {
        "date": "2026-10-19",
        "nav": 2.5784
      },
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
      }
    ],
    "399011": [
      {
        "date": "2026-10-13",
        "nav": 0.972
      },
      {
        "date": "2026-10-14",
        "nav": 0.952
      },
      {
        "date": "2026-10-15",
        "nav": 0.947
      },
      {
        "date": "2026-10-16",
        "nav": 0.938
      },
      {
        "date": "2026-10-19",
        "nav": 0.943
      },
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
      }
    ],
    "376510": [
      {
        "date": "2026-10-13",
        "nav": 2.322
      },
      {
        "date": "2026-10-14",
        "nav": 2.3354
      },
      {
        "date": "2026-10-15",
        "nav": 2.3285
      },
      {
        "date": "2026-10-16",
        "nav": 2.3395
      },
      {
        "date": "2026-10-19",
        "nav": 2.3626
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-10-13",
        "nav": 1.2664
      },
      {
        "date": "2026-10-14",
        "nav": 1.2494
      },
      {
        "date": "2026-10-15",
        "nav": 1.2235
      },
      {
        "date": "2026-10-16",
        "nav": 1.2273
      },
      {
        "date": "2026-10-19",
        "nav": 1.2295
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-10-13",
        "nav": 1.1215
      },
      {
        "date": "2026-10-14",
        "nav": 1.0964
      },
      {
        "date": "2026-10-15",
        "nav": 1.0669
      },
      {
        "date": "2026-10-16",
        "nav": 1.0644
      },
      {
        "date": "2026-10-19",
        "nav": 1.0623
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-10-13",
        "nav": 1.1935
      },
      {
        "date": "2026-10-14",
        "nav": 1.1668
      },
      {
        "date": "2026-10-15",
        "nav": 1.1355
      },
      {
        "date": "2026-10-16",
        "nav": 1.1328
      },
      {
        "date": "2026-10-19",
        "nav": 1.1306
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-10-13",
        "nav": 1.0636
      },
      {
        "date": "2026-10-14",
        "nav": 1.0598
      },
      {
        "date": "2026-10-15",
        "nav": 1.0557
      },
      {
        "date": "2026-10-16",
        "nav": 1.0573
      },
      {
        "date": "2026-10-19",
        "nav": 1.0604
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-10-13",
        "nav": 1.038
      },
      {
        "date": "2026-10-14",
        "nav": 1.0343
      },
      {
        "date": "2026-10-15",
        "nav": 1.0303
      },
      {
        "date": "2026-10-16",
        "nav": 1.0319
      },
      {
        "date": "2026-10-19",
        "nav": 1.035
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-10-13",
        "nav": 0.6975
      },
      {
        "date": "2026-10-14",
        "nav": 0.6984
      },
      {
        "date": "2026-10-15",
        "nav": 0.6914
      },
      {
        "date": "2026-10-16",
        "nav": 0.695
      },
      {
        "date": "2026-10-19",
        "nav": 0.699
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-10-13",
        "nav": 0.7156
      },
      {
        "date": "2026-10-14",
        "nav": 0.7165
      },
      {
        "date": "2026-10-15",
        "nav": 0.7093
      },
      {
        "date": "2026-10-16",
        "nav": 0.713
      },
      {
        "date": "2026-10-19",
        "nav": 0.7171
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-10-13",
        "nav": 2.5103
      },
      {
        "date": "2026-10-14",
        "nav": 2.4522
      },
      {
        "date": "2026-10-15",
        "nav": 2.3891
      },
      {
        "date": "2026-10-16",
        "nav": 2.3791
      },
      {
        "date": "2026-10-19",
        "nav": 2.3665
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-10-13",
        "nav": 2.3662
      },
      {
        "date": "2026-10-14",
        "nav": 2.3376
      },
      {
        "date": "2026-10-15",
        "nav": 2.2923
      },
      {
        "date": "2026-10-16",
        "nav": 2.2906
      },
      {
        "date": "2026-10-19",
        "nav": 2.296
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-10-13",
        "nav": 0.6969
      },
      {
        "date": "2026-10-14",
        "nav": 0.6937
      },
      {
        "date": "2026-10-15",
        "nav": 0.6823
      },
      {
        "date": "2026-10-16",
        "nav": 0.6808
      },
      {
        "date": "2026-10-19",
        "nav": 0.6856
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-10-13",
        "nav": 3.9188
      },
      {
        "date": "2026-10-14",
        "nav": 3.8911
      },
      {
        "date": "2026-10-15",
        "nav": 3.8087
      },
      {
        "date": "2026-10-16",
        "nav": 3.7723
      },
      {
        "date": "2026-10-19",
        "nav": 3.7811
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-10-13",
        "nav": 0.4825
      },
      {
        "date": "2026-10-14",
        "nav": 0.477
      },
      {
        "date": "2026-10-15",
        "nav": 0.4705
      },
      {
        "date": "2026-10-16",
        "nav": 0.4709
      },
      {
        "date": "2026-10-19",
        "nav": 0.4742
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-10-13",
        "nav": 0.4919
      },
      {
        "date": "2026-10-14",
        "nav": 0.4864
      },
      {
        "date": "2026-10-15",
        "nav": 0.4797
      },
      {
        "date": "2026-10-16",
        "nav": 0.4801
      },
      {
        "date": "2026-10-19",
        "nav": 0.4835
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-10-13",
        "nav": 1.2728
      },
      {
        "date": "2026-10-14",
        "nav": 1.2749
      },
      {
        "date": "2026-10-15",
        "nav": 1.2651
      },
      {
        "date": "2026-10-16",
        "nav": 1.2684
      },
      {
        "date": "2026-10-19",
        "nav": 1.2694
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-10-13",
        "nav": 1.103
      },
      {
        "date": "2026-10-14",
        "nav": 1.1003
      },
      {
        "date": "2026-10-15",
        "nav": 1.0973
      },
      {
        "date": "2026-10-16",
        "nav": 1.0981
      },
      {
        "date": "2026-10-19",
        "nav": 1.1004
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-10-13",
        "nav": 1.2723
      },
      {
        "date": "2026-10-14",
        "nav": 1.241
      },
      {
        "date": "2026-10-15",
        "nav": 1.2164
      },
      {
        "date": "2026-10-16",
        "nav": 1.2034
      },
      {
        "date": "2026-10-19",
        "nav": 1.195
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-10-13",
        "nav": 2.9041
      },
      {
        "date": "2026-10-14",
        "nav": 2.9136
      },
      {
        "date": "2026-10-15",
        "nav": 2.8672
      },
      {
        "date": "2026-10-16",
        "nav": 2.8806
      },
      {
        "date": "2026-10-19",
        "nav": 2.8719
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-10-13",
        "nav": 2.873
      },
      {
        "date": "2026-10-14",
        "nav": 2.771
      },
      {
        "date": "2026-10-15",
        "nav": 2.683
      },
      {
        "date": "2026-10-16",
        "nav": 2.655
      },
      {
        "date": "2026-10-19",
        "nav": 2.618
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-10-13",
        "nav": 1.5459
      },
      {
        "date": "2026-10-14",
        "nav": 1.5534
      },
      {
        "date": "2026-10-15",
        "nav": 1.5366
      },
      {
        "date": "2026-10-16",
        "nav": 1.537
      },
      {
        "date": "2026-10-19",
        "nav": 1.553
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-10-13",
        "nav": 0.5528
      },
      {
        "date": "2026-10-14",
        "nav": 0.5407
      },
      {
        "date": "2026-10-15",
        "nav": 0.5193
      },
      {
        "date": "2026-10-16",
        "nav": 0.5323
      },
      {
        "date": "2026-10-19",
        "nav": 0.5312
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-10-13",
        "nav": 12.274
      },
      {
        "date": "2026-10-14",
        "nav": 12.026
      },
      {
        "date": "2026-10-15",
        "nav": 11.628
      },
      {
        "date": "2026-10-16",
        "nav": 11.445
      },
      {
        "date": "2026-10-19",
        "nav": 11.276
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 3.9763,
      "price": 3.9763,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 2.7247,
      "price": 2.7247,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.25,
      "nav": 3.1523,
      "price": 3.1523,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.1,
      "nav": 0.7708,
      "price": 0.7708,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.3,
      "nav": 2.0587,
      "price": 2.0587,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.23,
      "nav": 2.6832,
      "price": 2.6832,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 5.4013,
      "price": 5.4013,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.667,
      "price": 1.667,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.1247,
      "price": 1.1247,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 2.549,
      "price": 2.549,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.166,
      "price": 1.166,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.264,
      "price": 2.264,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.38,
      "nav": 1.2027,
      "price": 1.2027,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.936,
      "price": 1.936,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.4138,
      "price": 1.4138,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.4177,
      "price": 1.4177,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.5908,
      "price": 2.5908,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.25,
      "nav": 0.946,
      "price": 0.946,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.4148,
      "price": 2.4148,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 1.1989,
      "price": 1.1989,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.27,
      "sharpe": -2.25,
      "calmar": -2.25
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 4.89,
      "sharpe": -5.3,
      "calmar": -5.3
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 7.54,
      "sharpe": -4.05,
      "calmar": -4.05
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.0,
      "sharpe": 0.56,
      "calmar": 0.56
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 9.02,
      "sharpe": -2.5,
      "calmar": -2.5
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 6.95,
      "sharpe": -2.44,
      "calmar": -2.44
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.44,
      "sharpe": -0.72,
      "calmar": -0.72
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.03,
      "sharpe": -3.04,
      "calmar": -3.04
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.38,
      "sharpe": -3.75,
      "calmar": -3.75
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.12,
      "sharpe": -3.88,
      "calmar": -3.88
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.51,
      "sharpe": 0.34,
      "calmar": 0.34
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 1.27,
      "sharpe": -2.48,
      "calmar": -2.48
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 11.4,
      "sharpe": -4.99,
      "calmar": -4.99
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.73,
      "sharpe": 1.17,
      "calmar": 1.17
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.97,
      "sharpe": -3.34,
      "calmar": -3.34
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.33,
      "sharpe": -4.89,
      "calmar": -4.89
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.16,
      "sharpe": -0.9,
      "calmar": -0.9
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 7.49,
      "sharpe": -0.41,
      "calmar": -0.41
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.69,
      "sharpe": -0.09,
      "calmar": -0.09
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.88,
      "sharpe": -1.39,
      "calmar": -1.39
    }
  ],
  "news": [
    {
      "title": "张江科学城的晶圆厂房里，先进制程产线全天候运转；东海之上，“上海研制”的千帆卫星批量入轨；徐汇西岸的人工智能产业集群，智能算力昼夜不息地生产着词元……作为我国最大的经济中心城市和国际经济、金融、贸易、航运、科技创新中心，上海正以上市公司群体为骨干支点，撬动集成电路、生物医药、人工智能三大先导产业向世界级集群跃升，建设具有自身特色的现代化产业体系。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:31",
      "impact": "neutral"
    },
    {
      "title": "在第九届中国国际进口博览会期间，超过4100家境外企业积极参展，通过展示新成果、首发新产品、签署新合作协议等方式，根据中国市场需求变化，更精准地加大投资布局力度。许多外企锚定“十五五”规划纲要内容，通过更精准布局来满足中国市场的新需求。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:31",
      "impact": "neutral"
    },
    {
      "title": "黑滑石具有润滑、绝缘、耐热、耐酸碱等特性，在日用陶瓷、工程塑料、航空航天、半导体等领域应用前景广阔。记者调查了解到，江西省上饶市广丰区坐拥黑滑石储量、品位“两个世界第一”，当地依托独特的片层纳米结构，坚持煅烧深加工与高端应用“两条腿走路”，产品应用场景从单一陶瓷延伸至橡胶、塑料、涂料及硅基、镁基新材料。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:31",
      "impact": "neutral"
    },
    {
      "title": "国家统计局11月9日发布的数据显示，10月份，居民消费价格指数（CPI）环比持平，同比上涨0.7%，扣除食品和能源价格的核心CPI同比上涨0.8%；工业生产者出厂价格指数（PPI）环比上涨0.7%，同比上涨5.7%，创近52个月新高。业内人士表示，10月份物价运行延续了结构上的改善趋势，工业领域价格运行的结构性修复特征进一步显现。未来，价格运行有望继续温和回暖。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:31",
      "impact": "neutral"
    },
    {
      "title": "“一台5000元左右的手机大概能‘即买即退’450元到账，现在很多海外游客来深圳都会到我们这逛逛，带点电子‘土特产’回去。”位于深圳华强北电子世界的一家华为授权店内，销售员李天昊正忙着为几位来自马来西亚的外国游客办理退税手续。不远处，主打AI智能眼镜的一家门店里，外国客人“一买就是十几副”。“中国电子第一街”华强北的繁忙，是当前深圳入境消费持续升温的缩影。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:31",
      "impact": "neutral"
    },
    {
      "title": "进入秋冬季，气温持续走低，不少历经春夏辛苦减重的人群遭遇共同难题：体重悄然回升，前期减重成果付诸东流。一边是体重管理消费市场持续火热，一边是过度节食等不当方式造成的“减重-反弹-再减重”的恶性循环。北京协和医院营养科主任医师陈伟提示，秋冬季体重反弹并非单纯意志力问题，是生理变化、不当减重方式、情绪心理等多重因素交织，算清减重背后的“反弹账”，才能实现长久的体重维持。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:30",
      "impact": "neutral"
    },
    {
      "title": "进入四季度，从中央到地方、从财政资金到社会资本，多路力量正在向“稳投资”这一目标集中发力。上海证券报记者注意到，近一个月以来，福建、湖北、青海、吉林、山西、云南、安徽等地召开投资和重大项目建设推进会，聚焦重大项目与“六张网”建设等，加码稳投资。专家在接受记者采访时表示，四季度投资有望边际回升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:54",
      "impact": "neutral"
    },
    {
      "title": "黄油饼干、香蕉、榴莲、奶粉——第九届进博会，“超级买家”的购物车里装的不再只是商品，还有配方、工艺和共同研发的能力。中国开放市场吸引力的关键词，正从“规模”升级为“规模+共创+互惠”的三重优势——规模提供底气，共创决定方向，互惠决定效果。三者叠加，把“小生意”撑成了“大市场”。从展台到货架的链路在缩短“过去没有进博会，我们要走出国门去全世界找产品。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:53",
      "impact": "neutral"
    },
    {
      "title": "专家：服务消费、通信设备等升级型消费需求有望继续支撑CPI国家统计局11月9日发布的数据显示：10月，CPI同比继续上涨，涨幅为0.7%；PPI同比涨幅扩大至5.7%，为2022年下半年以来最高水平。经济学者庞溟在接受上海证券报记者采访时表示，展望后期物价走势，价格运行有望继续温和回暖。食品价格上涨动力短期内或仍偏弱，但服务消费、通信设备等升级型消费需求有望继续支撑CPI。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:53",
      "impact": "neutral"
    },
    {
      "title": "11月9日，一列满载汽车及零配件的中欧班列从重庆团结村中心站驶出，开往欧洲。随着这趟班列启程，重庆中欧班列2026年开行量突破1000列。截至目前，重庆中欧班列已稳定运行线路55条，覆盖亚欧39个国家的120个枢纽城市，通道网络持续拓展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:32",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,994/1,502",
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
