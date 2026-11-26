// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-26 19:29:49
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-26 19:29 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-26",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3476.88,
      "change": 0.41,
      "changePct": "+0.01%",
      "high": 3497.81,
      "low": 3455.04,
      "volume": 454062959.0,
      "amount": 613332810000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10084.04,
      "change": -2.32,
      "changePct": "-0.02%",
      "high": 10235.5,
      "low": 9979.06,
      "volume": 544733686.0,
      "amount": 704044360000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2189.82,
      "change": 6.24,
      "changePct": "+0.29%",
      "high": 2227.41,
      "low": 2155.01,
      "volume": 157118489.0,
      "amount": 333541050000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1169.99,
      "change": -16.15,
      "changePct": "-1.36%",
      "high": 1202.31,
      "low": 1156.57,
      "volume": 8791835.0,
      "amount": 73376740000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3900.55,
      "change": 2.31,
      "changePct": "+0.06%",
      "high": 3922.29,
      "low": 3877.82,
      "volume": 159947235.0,
      "amount": 371397580000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 5863.34,
      "change": -27.07,
      "changePct": "-0.46%",
      "high": 5983.74,
      "low": 5804.19,
      "volume": 120173884.0,
      "amount": 211605890000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.31万亿",
      "label": "成交额",
      "rawAmount": 2307298430000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,802/1,598",
      "label": "涨/跌家数",
      "rawUp": 2802,
      "rawDown": 1598,
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
    "totalInflow": 15.05,
    "totalOutflow": 0,
    "netFlow": 15.05,
    "netFlowTrend": [
      3.01,
      6.02,
      9.03,
      12.04,
      15.05
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
      "inflow": 7.46,
      "pct": 2.68
    },
    {
      "name": "银行",
      "inflow": 3.14,
      "pct": 0.65
    },
    {
      "name": "煤炭",
      "inflow": 1.54,
      "pct": 2.48
    },
    {
      "name": "5G",
      "inflow": 1.46,
      "pct": 1.7
    },
    {
      "name": "有色",
      "inflow": 1.39,
      "pct": 1.65
    },
    {
      "name": "钢铁",
      "inflow": 0.12,
      "pct": 0.2
    },
    {
      "name": "医药",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "地产",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.33
    },
    {
      "name": "计算机",
      "inflow": -0.04,
      "pct": -0.79
    },
    {
      "name": "食品",
      "inflow": -0.04,
      "pct": -0.97
    },
    {
      "name": "电子",
      "inflow": -0.08,
      "pct": -0.35
    },
    {
      "name": "农业",
      "inflow": -0.09,
      "pct": -0.86
    },
    {
      "name": "家电",
      "inflow": -0.16,
      "pct": -0.15
    },
    {
      "name": "游戏",
      "inflow": -0.2,
      "pct": -0.92
    },
    {
      "name": "云计算",
      "inflow": -0.22,
      "pct": -0.25
    },
    {
      "name": "光伏",
      "inflow": -0.33,
      "pct": -0.8
    },
    {
      "name": "传媒",
      "inflow": -0.52,
      "pct": -0.84
    },
    {
      "name": "创新药",
      "inflow": -0.94,
      "pct": -0.53
    },
    {
      "name": "医疗",
      "inflow": -0.95,
      "pct": -0.93
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.383,
      "changePct": 2.68,
      "change": 0.01,
      "turnover": 24.87
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.157,
      "changePct": 2.48,
      "change": 0.028,
      "turnover": 5.12
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.597,
      "changePct": 1.7,
      "change": 0.01,
      "turnover": 4.86
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.233,
      "changePct": 1.65,
      "change": 0.02,
      "turnover": 4.64
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.927,
      "changePct": 0.65,
      "change": 0.006,
      "turnover": 10.48
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 0.978,
      "changePct": 0.2,
      "change": 0.002,
      "turnover": 0.4
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.375,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.72
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 0.984,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 1.36
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.348,
      "changePct": -0.15,
      "change": -0.002,
      "turnover": 0.52
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.219,
      "changePct": -0.25,
      "change": -0.003,
      "turnover": 0.73
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.91,
      "changePct": -0.33,
      "change": -0.003,
      "turnover": 0.06
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.568,
      "changePct": -0.35,
      "change": -0.002,
      "turnover": 0.26
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.755,
      "changePct": -0.53,
      "change": -0.004,
      "turnover": 3.14
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.877,
      "changePct": -0.79,
      "change": -0.007,
      "turnover": 0.15
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.619,
      "changePct": -0.8,
      "change": -0.005,
      "turnover": 1.11
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.705,
      "changePct": -0.84,
      "change": -0.006,
      "turnover": 1.72
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.695,
      "changePct": -0.86,
      "change": -0.006,
      "turnover": 0.31
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.863,
      "changePct": -0.92,
      "change": -0.008,
      "turnover": 0.66
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.318,
      "changePct": -0.93,
      "change": -0.003,
      "turnover": 3.17
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.512,
      "changePct": -0.97,
      "change": -0.005,
      "turnover": 0.14
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.881,
      "changePct": -1.01,
      "change": -0.009,
      "turnover": 2.45
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.451,
      "changePct": -1.1,
      "change": -0.005,
      "turnover": 6.51
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.692,
      "changePct": -1.14,
      "change": -0.008,
      "turnover": 0.85
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.43,
      "changePct": -1.15,
      "change": -0.005,
      "turnover": 3.27
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.751,
      "changePct": -1.19,
      "change": -0.021,
      "turnover": 0.93
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.148,
      "changePct": -1.37,
      "change": -0.016,
      "turnover": 0.8
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.76,
      "changePct": -1.68,
      "change": -0.013,
      "turnover": 4.25
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.696,
      "changePct": -1.69,
      "change": -0.012,
      "turnover": 9.74
    }
  ],
  "etfFlow": [
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.864,
      "changePct": 0.25,
      "amount": 25.03,
      "netFlow": 6.26
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.751,
      "changePct": -1.19,
      "amount": 0.93,
      "netFlow": -0.23
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.375,
      "changePct": 0.0,
      "amount": 2.72,
      "netFlow": -0.68
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.136,
      "changePct": -0.14,
      "amount": 4.74,
      "netFlow": -1.19
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.451,
      "changePct": -1.1,
      "amount": 6.51,
      "netFlow": -1.63
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.696,
      "changePct": -1.69,
      "amount": 9.74,
      "netFlow": -2.44
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 5.888,
      "changePct": -0.57,
      "amount": 24.44,
      "netFlow": -6.11
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.849,
      "changePct": -0.23,
      "amount": 26.75,
      "netFlow": -6.69
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 3.959,
      "changePct": -0.28,
      "amount": 34.19,
      "netFlow": -8.55
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.233,
      "changePct": -1.67,
      "amount": 75.6,
      "netFlow": -18.9
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 3.959,
      "changePct": -0.28,
      "amount": 34.19,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.864,
      "changePct": 0.25,
      "amount": 25.03,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 5.888,
      "changePct": -0.57,
      "amount": 24.44,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.136,
      "changePct": -0.14,
      "amount": 4.74,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.849,
      "changePct": -0.23,
      "amount": 26.75,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 24.87,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "煤炭",
      "turnover": 5.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 4.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.64,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 10.48,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "钢铁",
      "turnover": 0.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.73,
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
      "name": "电子",
      "turnover": 0.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 3.14,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.17,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 3.2983,
      "ret1w": -1.95,
      "ret1m": -5.87,
      "ret3m": -17.6,
      "ret6m": -25.59,
      "ret1y": -37.36,
      "ret2y": -14.01,
      "ret3y": 53.6
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.5757,
      "ret1w": 0.64,
      "ret1m": -2.27,
      "ret3m": -17.55,
      "ret6m": -38.49,
      "ret1y": -48.55,
      "ret2y": -32.41,
      "ret3y": -3.37
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.9532,
      "ret1w": 1.82,
      "ret1m": -0.39,
      "ret3m": -26.67,
      "ret6m": -46.92,
      "ret1y": -48.87,
      "ret2y": -9.57,
      "ret3y": 57.98
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7611,
      "ret1w": -0.96,
      "ret1m": -1.72,
      "ret3m": 5.58,
      "ret6m": 7.39,
      "ret1y": 9.38,
      "ret2y": -4.31,
      "ret3y": 5.12
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.7269,
      "ret1w": -1.88,
      "ret1m": -6.94,
      "ret3m": -13.94,
      "ret6m": -20.88,
      "ret1y": -34.61,
      "ret2y": -36.71,
      "ret3y": -29.34
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.3397,
      "ret1w": -1.57,
      "ret1m": -7.03,
      "ret3m": -8.96,
      "ret6m": -15.58,
      "ret1y": -28.51,
      "ret2y": -30.75,
      "ret3y": -2.41
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1066,
      "ret1w": -0.23,
      "ret1m": -3.16,
      "ret3m": -1.94,
      "ret6m": -8.26,
      "ret1y": -7.76,
      "ret2y": -1.83,
      "ret3y": 28.05
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.46,
      "ret1w": -0.54,
      "ret1m": -6.53,
      "ret3m": -14.32,
      "ret6m": -21.84,
      "ret1y": -30.81,
      "ret2y": -17.28,
      "ret3y": 12.74
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0339,
      "ret1w": 0.15,
      "ret1m": -4.11,
      "ret3m": -10.87,
      "ret6m": -22.24,
      "ret1y": -28.3,
      "ret2y": -15.23,
      "ret3y": 0.6
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.354,
      "ret1w": 0.26,
      "ret1m": -4.5,
      "ret3m": -11.87,
      "ret6m": -30.83,
      "ret1y": -33.67,
      "ret2y": 9.69,
      "ret3y": 93.9
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.14,
      "ret1w": -0.52,
      "ret1m": -2.31,
      "ret3m": 1.79,
      "ret6m": 2.8,
      "ret1y": 5.75,
      "ret2y": -9.45,
      "ret3y": -7.77
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 1.917,
      "ret1w": -2.14,
      "ret1m": -8.58,
      "ret3m": -16.36,
      "ret6m": -19.62,
      "ret1y": -21.43,
      "ret2y": -24.47,
      "ret3y": -8.93
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.095,
      "ret1w": -1.36,
      "ret1m": -11.12,
      "ret3m": -11.98,
      "ret6m": -37.93,
      "ret1y": -62.66,
      "ret2y": -60.95,
      "ret3y": -40.59
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8551,
      "ret1w": -0.75,
      "ret1m": -2.14,
      "ret3m": -1.03,
      "ret6m": -3.92,
      "ret1y": 1.8,
      "ret2y": -2.66,
      "ret3y": -2.06
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.2851,
      "ret1w": 0.12,
      "ret1m": -5.03,
      "ret3m": -11.67,
      "ret6m": -21.82,
      "ret1y": -28.84,
      "ret2y": -15.61,
      "ret3y": 11.57
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2114,
      "ret1w": 0.95,
      "ret1m": -5.48,
      "ret3m": -27.2,
      "ret6m": -48.93,
      "ret1y": -56.05,
      "ret2y": -9.45,
      "ret3y": 22.9
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.4948,
      "ret1w": 0.15,
      "ret1m": -2.01,
      "ret3m": -2.51,
      "ret6m": -2.82,
      "ret1y": -5.42,
      "ret2y": -6.99,
      "ret3y": 2.54
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.854,
      "ret1w": 0.23,
      "ret1m": -1.61,
      "ret3m": -9.34,
      "ret6m": -18.28,
      "ret1y": -9.34,
      "ret2y": -19.43,
      "ret3y": -20.11
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4206,
      "ret1w": 0.0,
      "ret1m": -0.85,
      "ret3m": 3.07,
      "ret6m": 3.14,
      "ret1y": 4.37,
      "ret2y": 3.1,
      "ret3y": 13.31
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.0974,
      "ret1w": 0.21,
      "ret1m": -4.16,
      "ret3m": -9.66,
      "ret6m": -16.91,
      "ret1y": -17.74,
      "ret2y": -5.3,
      "ret3y": 26.76
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.8757,
      "ret1w": 0.03,
      "ret1m": -5.04,
      "ret3m": -14.41,
      "ret6m": -31.17,
      "ret1y": -38.54,
      "ret2y": -22.09,
      "ret3y": -2.83
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9324,
      "ret1w": 0.04,
      "ret1m": -5.03,
      "ret3m": -14.38,
      "ret6m": -31.1,
      "ret1y": -38.42,
      "ret2y": -21.79,
      "ret3y": -2.06
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0205,
      "ret1w": -0.28,
      "ret1m": -0.99,
      "ret3m": -3.25,
      "ret6m": -6.59,
      "ret1y": -8.05,
      "ret2y": -5.7,
      "ret3y": 0.42
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 0.9966,
      "ret1w": -0.29,
      "ret1m": -0.98,
      "ret3m": -3.21,
      "ret6m": -6.46,
      "ret1y": -7.78,
      "ret2y": -5.14,
      "ret3y": 1.63
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.686,
      "ret1w": -0.82,
      "ret1m": -2.75,
      "ret3m": -1.85,
      "ret6m": -5.16,
      "ret1y": -9.7,
      "ret2y": -15.09,
      "ret3y": 0.01
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7042,
      "ret1w": -0.83,
      "ret1m": -2.73,
      "ret3m": -1.8,
      "ret6m": -5.03,
      "ret1y": -9.46,
      "ret2y": -14.66,
      "ret3y": 1.02
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8927,
      "ret1w": 1.31,
      "ret1m": 0.19,
      "ret3m": -14.69,
      "ret6m": -31.66,
      "ret1y": -37.26,
      "ret2y": 0.63,
      "ret3y": 68.3
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.116,
      "ret1w": -0.91,
      "ret1m": -3.95,
      "ret3m": -8.53,
      "ret6m": -16.82,
      "ret1y": -21.92,
      "ret2y": 1.1,
      "ret3y": 39.4
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6362,
      "ret1w": -1.73,
      "ret1m": -5.36,
      "ret3m": -10.36,
      "ret6m": -13.63,
      "ret1y": -27.88,
      "ret2y": -20.28,
      "ret3y": -8.83
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.5989,
      "ret1w": -1.11,
      "ret1m": -3.11,
      "ret3m": -10.18,
      "ret6m": -13.23,
      "ret1y": -20.1,
      "ret2y": 19.65,
      "ret3y": 78.78
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4401,
      "ret1w": -0.29,
      "ret1m": -2.72,
      "ret3m": -5.66,
      "ret6m": -12.44,
      "ret1y": -20.53,
      "ret2y": -1.61,
      "ret3y": 22.22
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4489,
      "ret1w": -0.29,
      "ret1m": -2.73,
      "ret3m": -5.63,
      "ret6m": -12.36,
      "ret1y": -20.38,
      "ret2y": -1.23,
      "ret3y": 23.19
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2518,
      "ret1w": 0.34,
      "ret1m": -1.0,
      "ret3m": -0.22,
      "ret6m": -2.44,
      "ret1y": -2.85,
      "ret2y": -2.88,
      "ret3y": -0.25
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0452,
      "ret1w": -0.57,
      "ret1m": -1.39,
      "ret3m": -3.53,
      "ret6m": -7.59,
      "ret1y": -4.43,
      "ret2y": -9.55,
      "ret3y": -0.27
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1628,
      "ret1w": 0.26,
      "ret1m": -0.67,
      "ret3m": 0.55,
      "ret6m": -17.81,
      "ret1y": -30.18,
      "ret2y": -21.64,
      "ret3y": -16.79
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6362,
      "ret1w": 0.88,
      "ret1m": 0.03,
      "ret3m": -6.71,
      "ret6m": -12.12,
      "ret1y": -15.56,
      "ret2y": -3.83,
      "ret3y": 23.9
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.004,
      "ret1w": 0.91,
      "ret1m": -2.86,
      "ret3m": -18.73,
      "ret6m": -38.96,
      "ret1y": -50.77,
      "ret2y": -6.36,
      "ret3y": 62.4
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5923,
      "ret1w": 0.44,
      "ret1m": -0.49,
      "ret3m": 4.02,
      "ret6m": 6.22,
      "ret1y": 8.64,
      "ret2y": 5.88,
      "ret3y": 7.63
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4492,
      "ret1w": 1.77,
      "ret1m": -4.26,
      "ret3m": -13.78,
      "ret6m": -28.02,
      "ret1y": -40.29,
      "ret2y": -17.68,
      "ret3y": -24.92
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.236,
      "ret1w": 2.15,
      "ret1m": 0.45,
      "ret3m": -19.85,
      "ret6m": -41.19,
      "ret1y": -40.62,
      "ret2y": 9.49,
      "ret3y": 104.01
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0412,
      "ret1w": -0.01,
      "ret1m": -0.13,
      "ret3m": -1.31,
      "ret6m": -2.34,
      "ret1y": -3.43,
      "ret2y": -1.42,
      "ret3y": 1.34
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0889,
      "ret1w": -0.01,
      "ret1m": -0.13,
      "ret3m": -1.31,
      "ret6m": -2.31,
      "ret1y": -3.34,
      "ret2y": -1.21,
      "ret3y": 1.98
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0667,
      "ret1w": -0.03,
      "ret1m": -0.03,
      "ret3m": -0.1,
      "ret6m": 0.23,
      "ret1y": 0.5,
      "ret2y": 1.42,
      "ret3y": 2.66
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1014,
      "ret1w": -0.03,
      "ret1m": -0.05,
      "ret3m": -0.09,
      "ret6m": 0.25,
      "ret1y": 0.58,
      "ret2y": 1.42,
      "ret3y": 3.66
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1113,
      "ret1w": -0.03,
      "ret1m": -0.05,
      "ret3m": -0.07,
      "ret6m": 0.31,
      "ret1y": 0.68,
      "ret2y": 1.62,
      "ret3y": 4.08
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.078,
      "ret1w": 0.0,
      "ret1m": -0.02,
      "ret3m": -0.03,
      "ret6m": 0.19,
      "ret1y": 0.5,
      "ret2y": 1.41,
      "ret3y": 2.7
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0932,
      "ret1w": 0.0,
      "ret1m": -0.02,
      "ret3m": -0.01,
      "ret6m": 0.26,
      "ret1y": 0.65,
      "ret2y": 1.72,
      "ret3y": 3.35
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.976,
      "ret1w": -0.01,
      "ret1m": -1.59,
      "ret3m": -4.17,
      "ret6m": -8.37,
      "ret1y": -11.47,
      "ret2y": -2.9,
      "ret3y": 2.01
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1127,
      "ret1w": -0.03,
      "ret1m": -1.9,
      "ret3m": -5.09,
      "ret6m": -8.54,
      "ret1y": -12.19,
      "ret2y": -6.89,
      "ret3y": -4.12
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9831,
      "ret1w": -0.01,
      "ret1m": -1.58,
      "ret3m": -4.13,
      "ret6m": -8.28,
      "ret1y": -11.3,
      "ret2y": -2.52,
      "ret3y": 2.84
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0437,
      "ret1w": -0.04,
      "ret1m": -0.06,
      "ret3m": -0.17,
      "ret6m": 0.19,
      "ret1y": 0.55,
      "ret2y": 1.5,
      "ret3y": 3.34
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0768,
      "ret1w": 0.04,
      "ret1m": -0.84,
      "ret3m": -3.64,
      "ret6m": -7.97,
      "ret1y": -10.99,
      "ret2y": -8.37,
      "ret3y": -1.77
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.195,
      "ret1w": -0.15,
      "ret1m": -0.5,
      "ret3m": -0.39,
      "ret6m": -1.77,
      "ret1y": -2.72,
      "ret2y": 0.67,
      "ret3y": 9.79
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1074,
      "ret1w": 0.01,
      "ret1m": -0.59,
      "ret3m": -1.03,
      "ret6m": -2.82,
      "ret1y": -4.25,
      "ret2y": 0.01,
      "ret3y": 6.51
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1779,
      "ret1w": 0.01,
      "ret1m": -0.58,
      "ret3m": -1.0,
      "ret6m": -2.73,
      "ret1y": -4.06,
      "ret2y": 0.41,
      "ret3y": 7.39
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.55,
      "ret1w": -4.56,
      "ret1m": -11.23,
      "ret3m": -25.37,
      "ret6m": -33.62,
      "ret1y": -36.34,
      "ret2y": 12.24,
      "ret3y": 56.25
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.7655,
      "ret1w": -0.8,
      "ret1m": -2.61,
      "ret3m": -5.68,
      "ret6m": -6.95,
      "ret1y": -5.84,
      "ret2y": 0.13,
      "ret3y": 21.11
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.5451,
      "ret1w": -1.13,
      "ret1m": -5.07,
      "ret3m": -6.66,
      "ret6m": -16.81,
      "ret1y": -27.64,
      "ret2y": -12.86,
      "ret3y": 15.5
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 1.9634,
      "ret1w": -0.59,
      "ret1m": -3.95,
      "ret3m": -14.21,
      "ret6m": -19.09,
      "ret1y": -13.62,
      "ret2y": -1.64,
      "ret3y": 19.09
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.928,
      "ret1w": 0.29,
      "ret1m": 0.94,
      "ret3m": 0.75,
      "ret6m": -1.35,
      "ret1y": -1.41,
      "ret2y": -5.46,
      "ret3y": -2.69
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.06,
      "ret1w": -1.44,
      "ret1m": -5.94,
      "ret3m": -12.86,
      "ret6m": -21.65,
      "ret1y": -25.16,
      "ret2y": 8.34,
      "ret3y": 44.17
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.15,
      "ret1w": -0.74,
      "ret1m": -2.67,
      "ret3m": -6.26,
      "ret6m": -10.43,
      "ret1y": -10.43,
      "ret2y": -5.81,
      "ret3y": 3.72
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.684,
      "ret1w": -4.07,
      "ret1m": -7.69,
      "ret3m": -16.18,
      "ret6m": -30.28,
      "ret1y": -30.63,
      "ret2y": -39.68,
      "ret3y": -22.54
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 1.9595,
      "ret1w": -5.37,
      "ret1m": -9.59,
      "ret3m": -22.61,
      "ret6m": -30.86,
      "ret1y": -35.03,
      "ret2y": 16.64,
      "ret3y": 71.69
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.3549,
      "ret1w": 0.59,
      "ret1m": -2.45,
      "ret3m": -13.14,
      "ret6m": -17.84,
      "ret1y": -11.31,
      "ret2y": 8.16,
      "ret3y": 29.4
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.4261,
      "ret1w": -2.74,
      "ret1m": -5.07,
      "ret3m": -11.81,
      "ret6m": -16.76,
      "ret1y": -14.76,
      "ret2y": 1.52,
      "ret3y": 28.45
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.081,
      "ret1w": -3.25,
      "ret1m": -5.06,
      "ret3m": -9.63,
      "ret6m": -18.22,
      "ret1y": -19.91,
      "ret2y": -6.63,
      "ret3y": 11.05
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.281,
      "ret1w": 0.63,
      "ret1m": 0.0,
      "ret3m": 2.23,
      "ret6m": -3.97,
      "ret1y": -3.32,
      "ret2y": 4.23,
      "ret3y": -10.7
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.684,
      "ret1w": -1.17,
      "ret1m": -5.39,
      "ret3m": -11.51,
      "ret6m": -24.21,
      "ret1y": -22.79,
      "ret2y": -19.27,
      "ret3y": 18.78
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 4.8505,
      "ret1w": -1.85,
      "ret1m": -5.89,
      "ret3m": -13.59,
      "ret6m": -22.24,
      "ret1y": -26.75,
      "ret2y": 5.24,
      "ret3y": 26.16
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0117,
      "ret1w": -0.05,
      "ret1m": -0.16,
      "ret3m": -0.1,
      "ret6m": 0.41,
      "ret1y": 0.87,
      "ret2y": 2.32,
      "ret3y": 3.56
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 0.9995,
      "ret1w": -0.04,
      "ret1m": -0.15,
      "ret3m": -0.09,
      "ret6m": 0.45,
      "ret1y": 0.89,
      "ret2y": 2.39,
      "ret3y": 3.73
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.157,
      "ret1w": -0.26,
      "ret1m": -2.77,
      "ret3m": -6.77,
      "ret6m": -18.41,
      "ret1y": -27.1,
      "ret2y": -17.36,
      "ret3y": -3.02
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.082,
      "ret1w": 0.0,
      "ret1m": -4.54,
      "ret3m": -12.34,
      "ret6m": -26.46,
      "ret1y": -33.12,
      "ret2y": -19.92,
      "ret3y": 1.02
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.325,
      "ret1w": 1.97,
      "ret1m": -1.79,
      "ret3m": -10.04,
      "ret6m": -22.62,
      "ret1y": -26.32,
      "ret2y": -9.73,
      "ret3y": 27.28
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.7729,
      "ret1w": 0.32,
      "ret1m": -1.93,
      "ret3m": -6.8,
      "ret6m": -16.94,
      "ret1y": -20.19,
      "ret2y": -8.63,
      "ret3y": 7.12
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8254,
      "ret1w": 0.32,
      "ret1m": -1.92,
      "ret3m": -6.76,
      "ret6m": -16.85,
      "ret1y": -20.03,
      "ret2y": -8.26,
      "ret3y": 7.99
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.5364,
      "ret1w": -0.4,
      "ret1m": -5.9,
      "ret3m": -11.97,
      "ret6m": -23.36,
      "ret1y": -30.6,
      "ret2y": -14.43,
      "ret3y": 4.44
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5403,
      "ret1w": 0.06,
      "ret1m": -2.0,
      "ret3m": -4.68,
      "ret6m": -14.03,
      "ret1y": -19.39,
      "ret2y": -11.76,
      "ret3y": 4.38
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.3253,
      "ret1w": -0.29,
      "ret1m": -5.52,
      "ret3m": -10.05,
      "ret6m": -16.4,
      "ret1y": -21.18,
      "ret2y": -7.67,
      "ret3y": 14.37
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.402,
      "ret1w": 0.2,
      "ret1m": -3.54,
      "ret3m": -12.02,
      "ret6m": -28.8,
      "ret1y": -37.76,
      "ret2y": -19.84,
      "ret3y": 4.58
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9859,
      "ret1w": 0.3,
      "ret1m": -0.76,
      "ret3m": -0.75,
      "ret6m": -8.97,
      "ret1y": -7.37,
      "ret2y": -8.61,
      "ret3y": 7.59
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4246,
      "ret1w": 0.08,
      "ret1m": -1.63,
      "ret3m": -4.31,
      "ret6m": -7.81,
      "ret1y": -3.72,
      "ret2y": 3.92,
      "ret3y": 23.73
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.0487,
      "ret1w": -0.66,
      "ret1m": -3.63,
      "ret3m": -9.3,
      "ret6m": -10.81,
      "ret1y": -12.13,
      "ret2y": -1.74,
      "ret3y": 14.33
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.0848,
      "ret1w": 0.13,
      "ret1m": -3.4,
      "ret3m": -10.24,
      "ret6m": -25.11,
      "ret1y": -32.45,
      "ret2y": -19.78,
      "ret3y": 1.38
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9115,
      "ret1w": -0.11,
      "ret1m": -1.85,
      "ret3m": -9.86,
      "ret6m": -22.29,
      "ret1y": -28.79,
      "ret2y": -13.89,
      "ret3y": 5.12
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9149,
      "ret1w": -0.11,
      "ret1m": -1.83,
      "ret3m": -9.82,
      "ret6m": -22.1,
      "ret1y": -28.6,
      "ret2y": -13.79,
      "ret3y": 4.82
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1556,
      "ret1w": -1.79,
      "ret1m": -3.31,
      "ret3m": -7.57,
      "ret6m": -17.13,
      "ret1y": -27.63,
      "ret2y": -14.51,
      "ret3y": 3.79
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.1832,
      "ret1w": -1.78,
      "ret1m": -3.3,
      "ret3m": -7.53,
      "ret6m": -17.04,
      "ret1y": -27.48,
      "ret2y": -14.16,
      "ret3y": 4.63
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5073,
      "ret1w": -3.15,
      "ret1m": -4.28,
      "ret3m": -13.55,
      "ret6m": -24.8,
      "ret1y": -35.77,
      "ret2y": -17.88,
      "ret3y": 7.59
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1464,
      "ret1w": -0.14,
      "ret1m": -0.34,
      "ret3m": -1.11,
      "ret6m": -1.81,
      "ret1y": -1.95,
      "ret2y": 0.07,
      "ret3y": 4.17
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1668,
      "ret1w": -0.15,
      "ret1m": -0.33,
      "ret3m": -1.09,
      "ret6m": -1.73,
      "ret1y": -1.8,
      "ret2y": 0.37,
      "ret3y": 4.81
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0875,
      "ret1w": -0.03,
      "ret1m": -0.02,
      "ret3m": -0.07,
      "ret6m": 0.31,
      "ret1y": 0.66,
      "ret2y": 1.73,
      "ret3y": 3.25
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4082,
      "ret1w": -0.06,
      "ret1m": -0.16,
      "ret3m": -0.3,
      "ret6m": -0.13,
      "ret1y": 0.02,
      "ret2y": 0.33,
      "ret3y": 4.59
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4617,
      "ret1w": -0.06,
      "ret1m": -0.15,
      "ret3m": -0.26,
      "ret6m": -0.04,
      "ret1y": 0.22,
      "ret2y": 0.74,
      "ret3y": 5.43
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7346,
      "ret1w": -0.24,
      "ret1m": -2.77,
      "ret3m": -10.07,
      "ret6m": -17.55,
      "ret1y": -15.63,
      "ret2y": 0.38,
      "ret3y": 23.9
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9052,
      "ret1w": -0.41,
      "ret1m": -2.47,
      "ret3m": -14.56,
      "ret6m": -27.88,
      "ret1y": -26.95,
      "ret2y": -20.41,
      "ret3y": -1.15
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 3.5039
      },
      {
        "date": "2026-11-20",
        "nav": 3.2803
      },
      {
        "date": "2026-11-23",
        "nav": 3.5559
      },
      {
        "date": "2026-11-24",
        "nav": 3.6161
      },
      {
        "date": "2026-11-25",
        "nav": 3.3638
      },
      {
        "date": "2026-11-26",
        "nav": 3.2983
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.6355
      },
      {
        "date": "2026-11-20",
        "nav": 2.5789
      },
      {
        "date": "2026-11-23",
        "nav": 2.6229
      },
      {
        "date": "2026-11-24",
        "nav": 2.6493
      },
      {
        "date": "2026-11-25",
        "nav": 2.5594
      },
      {
        "date": "2026-11-26",
        "nav": 2.5757
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.9648
      },
      {
        "date": "2026-11-20",
        "nav": 2.7862
      },
      {
        "date": "2026-11-23",
        "nav": 2.9703
      },
      {
        "date": "2026-11-24",
        "nav": 2.9625
      },
      {
        "date": "2026-11-25",
        "nav": 2.9003
      },
      {
        "date": "2026-11-26",
        "nav": 2.9532
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.7744
      },
      {
        "date": "2026-11-20",
        "nav": 0.7701
      },
      {
        "date": "2026-11-23",
        "nav": 0.7718
      },
      {
        "date": "2026-11-24",
        "nav": 0.7724
      },
      {
        "date": "2026-11-25",
        "nav": 0.7685
      },
      {
        "date": "2026-11-26",
        "nav": 0.7611
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.8557
      },
      {
        "date": "2026-11-20",
        "nav": 1.8074
      },
      {
        "date": "2026-11-23",
        "nav": 1.8206
      },
      {
        "date": "2026-11-24",
        "nav": 1.8111
      },
      {
        "date": "2026-11-25",
        "nav": 1.7599
      },
      {
        "date": "2026-11-26",
        "nav": 1.7269
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.5167
      },
      {
        "date": "2026-11-20",
        "nav": 2.4252
      },
      {
        "date": "2026-11-23",
        "nav": 2.4621
      },
      {
        "date": "2026-11-24",
        "nav": 2.4492
      },
      {
        "date": "2026-11-25",
        "nav": 2.3769
      },
      {
        "date": "2026-11-26",
        "nav": 2.3397
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 5.2733
      },
      {
        "date": "2026-11-20",
        "nav": 5.1939
      },
      {
        "date": "2026-11-23",
        "nav": 5.2054
      },
      {
        "date": "2026-11-24",
        "nav": 5.2144
      },
      {
        "date": "2026-11-25",
        "nav": 5.1185
      },
      {
        "date": "2026-11-26",
        "nav": 5.1066
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.562
      },
      {
        "date": "2026-11-20",
        "nav": 1.493
      },
      {
        "date": "2026-11-23",
        "nav": 1.541
      },
      {
        "date": "2026-11-24",
        "nav": 1.536
      },
      {
        "date": "2026-11-25",
        "nav": 1.468
      },
      {
        "date": "2026-11-26",
        "nav": 1.46
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.0782
      },
      {
        "date": "2026-11-20",
        "nav": 1.0475
      },
      {
        "date": "2026-11-23",
        "nav": 1.0684
      },
      {
        "date": "2026-11-24",
        "nav": 1.0671
      },
      {
        "date": "2026-11-25",
        "nav": 1.0324
      },
      {
        "date": "2026-11-26",
        "nav": 1.0339
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.465
      },
      {
        "date": "2026-11-20",
        "nav": 2.395
      },
      {
        "date": "2026-11-23",
        "nav": 2.416
      },
      {
        "date": "2026-11-24",
        "nav": 2.425
      },
      {
        "date": "2026-11-25",
        "nav": 2.348
      },
      {
        "date": "2026-11-26",
        "nav": 2.354
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.167
      },
      {
        "date": "2026-11-20",
        "nav": 1.144
      },
      {
        "date": "2026-11-23",
        "nav": 1.154
      },
      {
        "date": "2026-11-24",
        "nav": 1.15
      },
      {
        "date": "2026-11-25",
        "nav": 1.146
      },
      {
        "date": "2026-11-26",
        "nav": 1.14
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.097
      },
      {
        "date": "2026-11-20",
        "nav": 1.982
      },
      {
        "date": "2026-11-23",
        "nav": 2.041
      },
      {
        "date": "2026-11-24",
        "nav": 2.009
      },
      {
        "date": "2026-11-25",
        "nav": 1.959
      },
      {
        "date": "2026-11-26",
        "nav": 1.917
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.232
      },
      {
        "date": "2026-11-20",
        "nav": 1.1889
      },
      {
        "date": "2026-11-23",
        "nav": 1.1803
      },
      {
        "date": "2026-11-24",
        "nav": 1.1991
      },
      {
        "date": "2026-11-25",
        "nav": 1.1101
      },
      {
        "date": "2026-11-26",
        "nav": 1.095
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.8957
      },
      {
        "date": "2026-11-20",
        "nav": 1.8781
      },
      {
        "date": "2026-11-23",
        "nav": 1.8698
      },
      {
        "date": "2026-11-24",
        "nav": 1.869
      },
      {
        "date": "2026-11-25",
        "nav": 1.8692
      },
      {
        "date": "2026-11-26",
        "nav": 1.8551
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.3531
      },
      {
        "date": "2026-11-20",
        "nav": 1.3051
      },
      {
        "date": "2026-11-23",
        "nav": 1.3294
      },
      {
        "date": "2026-11-24",
        "nav": 1.3283
      },
      {
        "date": "2026-11-25",
        "nav": 1.2836
      },
      {
        "date": "2026-11-26",
        "nav": 1.2851
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.2817
      },
      {
        "date": "2026-11-20",
        "nav": 1.2146
      },
      {
        "date": "2026-11-23",
        "nav": 1.2555
      },
      {
        "date": "2026-11-24",
        "nav": 1.2636
      },
      {
        "date": "2026-11-25",
        "nav": 1.2
      },
      {
        "date": "2026-11-26",
        "nav": 1.2114
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.546
      },
      {
        "date": "2026-11-20",
        "nav": 2.5019
      },
      {
        "date": "2026-11-23",
        "nav": 2.5245
      },
      {
        "date": "2026-11-24",
        "nav": 2.5148
      },
      {
        "date": "2026-11-25",
        "nav": 2.491
      },
      {
        "date": "2026-11-26",
        "nav": 2.4948
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.868
      },
      {
        "date": "2026-11-20",
        "nav": 0.84
      },
      {
        "date": "2026-11-23",
        "nav": 0.874
      },
      {
        "date": "2026-11-24",
        "nav": 0.866
      },
      {
        "date": "2026-11-25",
        "nav": 0.852
      },
      {
        "date": "2026-11-26",
        "nav": 0.854
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.4413
      },
      {
        "date": "2026-11-20",
        "nav": 2.4353
      },
      {
        "date": "2026-11-23",
        "nav": 2.4205
      },
      {
        "date": "2026-11-24",
        "nav": 2.4183
      },
      {
        "date": "2026-11-25",
        "nav": 2.4207
      },
      {
        "date": "2026-11-26",
        "nav": 2.4206
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.145
      },
      {
        "date": "2026-11-20",
        "nav": 1.1101
      },
      {
        "date": "2026-11-23",
        "nav": 1.129
      },
      {
        "date": "2026-11-24",
        "nav": 1.1284
      },
      {
        "date": "2026-11-25",
        "nav": 1.0951
      },
      {
        "date": "2026-11-26",
        "nav": 1.0974
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.9222
      },
      {
        "date": "2026-11-20",
        "nav": 0.8932
      },
      {
        "date": "2026-11-23",
        "nav": 0.9076
      },
      {
        "date": "2026-11-24",
        "nav": 0.9107
      },
      {
        "date": "2026-11-25",
        "nav": 0.8754
      },
      {
        "date": "2026-11-26",
        "nav": 0.8757
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.9818
      },
      {
        "date": "2026-11-20",
        "nav": 0.951
      },
      {
        "date": "2026-11-23",
        "nav": 0.9663
      },
      {
        "date": "2026-11-24",
        "nav": 0.9697
      },
      {
        "date": "2026-11-25",
        "nav": 0.932
      },
      {
        "date": "2026-11-26",
        "nav": 0.9324
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.0307
      },
      {
        "date": "2026-11-20",
        "nav": 1.0295
      },
      {
        "date": "2026-11-23",
        "nav": 1.0305
      },
      {
        "date": "2026-11-24",
        "nav": 1.0295
      },
      {
        "date": "2026-11-25",
        "nav": 1.0234
      },
      {
        "date": "2026-11-26",
        "nav": 1.0205
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.0065
      },
      {
        "date": "2026-11-20",
        "nav": 1.0054
      },
      {
        "date": "2026-11-23",
        "nav": 1.0063
      },
      {
        "date": "2026-11-24",
        "nav": 1.0054
      },
      {
        "date": "2026-11-25",
        "nav": 0.9995
      },
      {
        "date": "2026-11-26",
        "nav": 0.9966
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.7054
      },
      {
        "date": "2026-11-20",
        "nav": 0.6957
      },
      {
        "date": "2026-11-23",
        "nav": 0.6973
      },
      {
        "date": "2026-11-24",
        "nav": 0.6971
      },
      {
        "date": "2026-11-25",
        "nav": 0.6917
      },
      {
        "date": "2026-11-26",
        "nav": 0.686
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.724
      },
      {
        "date": "2026-11-20",
        "nav": 0.7141
      },
      {
        "date": "2026-11-23",
        "nav": 0.7157
      },
      {
        "date": "2026-11-24",
        "nav": 0.7156
      },
      {
        "date": "2026-11-25",
        "nav": 0.7101
      },
      {
        "date": "2026-11-26",
        "nav": 0.7042
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.8891
      },
      {
        "date": "2026-11-20",
        "nav": 1.8622
      },
      {
        "date": "2026-11-23",
        "nav": 1.8967
      },
      {
        "date": "2026-11-24",
        "nav": 1.9077
      },
      {
        "date": "2026-11-25",
        "nav": 1.8682
      },
      {
        "date": "2026-11-26",
        "nav": 1.8927
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.2031
      },
      {
        "date": "2026-11-20",
        "nav": 2.1324
      },
      {
        "date": "2026-11-23",
        "nav": 2.1863
      },
      {
        "date": "2026-11-24",
        "nav": 2.1916
      },
      {
        "date": "2026-11-25",
        "nav": 2.1354
      },
      {
        "date": "2026-11-26",
        "nav": 2.116
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.6722
      },
      {
        "date": "2026-11-20",
        "nav": 0.6486
      },
      {
        "date": "2026-11-23",
        "nav": 0.6729
      },
      {
        "date": "2026-11-24",
        "nav": 0.675
      },
      {
        "date": "2026-11-25",
        "nav": 0.6474
      },
      {
        "date": "2026-11-26",
        "nav": 0.6362
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 3.7146
      },
      {
        "date": "2026-11-20",
        "nav": 3.5907
      },
      {
        "date": "2026-11-23",
        "nav": 3.7293
      },
      {
        "date": "2026-11-24",
        "nav": 3.755
      },
      {
        "date": "2026-11-25",
        "nav": 3.6394
      },
      {
        "date": "2026-11-26",
        "nav": 3.5989
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.4524
      },
      {
        "date": "2026-11-20",
        "nav": 0.45
      },
      {
        "date": "2026-11-23",
        "nav": 0.4476
      },
      {
        "date": "2026-11-24",
        "nav": 0.4513
      },
      {
        "date": "2026-11-25",
        "nav": 0.4414
      },
      {
        "date": "2026-11-26",
        "nav": 0.4401
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.4615
      },
      {
        "date": "2026-11-20",
        "nav": 0.459
      },
      {
        "date": "2026-11-23",
        "nav": 0.4566
      },
      {
        "date": "2026-11-24",
        "nav": 0.4603
      },
      {
        "date": "2026-11-25",
        "nav": 0.4502
      },
      {
        "date": "2026-11-26",
        "nav": 0.4489
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.2644
      },
      {
        "date": "2026-11-20",
        "nav": 1.263
      },
      {
        "date": "2026-11-23",
        "nav": 1.2579
      },
      {
        "date": "2026-11-24",
        "nav": 1.2557
      },
      {
        "date": "2026-11-25",
        "nav": 1.2476
      },
      {
        "date": "2026-11-26",
        "nav": 1.2518
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.0599
      },
      {
        "date": "2026-11-20",
        "nav": 1.051
      },
      {
        "date": "2026-11-23",
        "nav": 1.0531
      },
      {
        "date": "2026-11-24",
        "nav": 1.0498
      },
      {
        "date": "2026-11-25",
        "nav": 1.0512
      },
      {
        "date": "2026-11-26",
        "nav": 1.0452
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.1706
      },
      {
        "date": "2026-11-20",
        "nav": 1.1627
      },
      {
        "date": "2026-11-23",
        "nav": 1.1635
      },
      {
        "date": "2026-11-24",
        "nav": 1.1618
      },
      {
        "date": "2026-11-25",
        "nav": 1.1598
      },
      {
        "date": "2026-11-26",
        "nav": 1.1628
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.6355
      },
      {
        "date": "2026-11-20",
        "nav": 2.6049
      },
      {
        "date": "2026-11-23",
        "nav": 2.6417
      },
      {
        "date": "2026-11-24",
        "nav": 2.6419
      },
      {
        "date": "2026-11-25",
        "nav": 2.6131
      },
      {
        "date": "2026-11-26",
        "nav": 2.6362
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 2.063
      },
      {
        "date": "2026-11-20",
        "nav": 1.992
      },
      {
        "date": "2026-11-23",
        "nav": 2.032
      },
      {
        "date": "2026-11-24",
        "nav": 2.056
      },
      {
        "date": "2026-11-25",
        "nav": 1.986
      },
      {
        "date": "2026-11-26",
        "nav": 2.004
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 1.6002
      },
      {
        "date": "2026-11-20",
        "nav": 1.6031
      },
      {
        "date": "2026-11-23",
        "nav": 1.592
      },
      {
        "date": "2026-11-24",
        "nav": 1.5871
      },
      {
        "date": "2026-11-25",
        "nav": 1.5854
      },
      {
        "date": "2026-11-26",
        "nav": 1.5923
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 0.4692
      },
      {
        "date": "2026-11-20",
        "nav": 0.4382
      },
      {
        "date": "2026-11-23",
        "nav": 0.4577
      },
      {
        "date": "2026-11-24",
        "nav": 0.4642
      },
      {
        "date": "2026-11-25",
        "nav": 0.4414
      },
      {
        "date": "2026-11-26",
        "nav": 0.4492
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-19",
        "nav": 8.199
      },
      {
        "date": "2026-11-20",
        "nav": 7.912
      },
      {
        "date": "2026-11-23",
        "nav": 8.208
      },
      {
        "date": "2026-11-24",
        "nav": 8.251
      },
      {
        "date": "2026-11-25",
        "nav": 8.063
      },
      {
        "date": "2026-11-26",
        "nav": 8.236
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.29,
      "nav": 3.2983,
      "price": 3.2983,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.5757,
      "price": 2.5757,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.9532,
      "price": 2.9532,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 0.7611,
      "price": 0.7611,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.7269,
      "price": 1.7269,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.35,
      "nav": 2.3397,
      "price": 2.3397,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 5.1066,
      "price": 5.1066,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 1.46,
      "price": 1.46,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.0339,
      "price": 1.0339,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 2.354,
      "price": 2.354,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.14,
      "price": 1.14,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 1.917,
      "price": 1.917,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.56,
      "nav": 1.095,
      "price": 1.095,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.8551,
      "price": 1.8551,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.25,
      "nav": 1.2851,
      "price": 1.2851,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 1.2114,
      "price": 1.2114,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 2.4948,
      "price": 2.4948,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 0.854,
      "price": 0.854,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.4206,
      "price": 2.4206,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.0974,
      "price": 1.0974,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.8,
      "sharpe": -3.44,
      "calmar": -3.44
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.41,
      "sharpe": -6.68,
      "calmar": -6.68
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 0.58,
      "sharpe": -9.07,
      "calmar": -9.07
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.58,
      "sharpe": 1.4,
      "calmar": 1.4
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 10.41,
      "sharpe": -2.9,
      "calmar": -2.9
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 10.54,
      "sharpe": -2.37,
      "calmar": -2.37
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.74,
      "sharpe": -0.95,
      "calmar": -0.95
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 9.79,
      "sharpe": -2.67,
      "calmar": -2.67
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 6.17,
      "sharpe": -3.11,
      "calmar": -3.11
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.75,
      "sharpe": -3.54,
      "calmar": -3.54
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.46,
      "sharpe": 0.79,
      "calmar": 0.79
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 12.87,
      "sharpe": -1.58,
      "calmar": -1.58
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 16.68,
      "sharpe": -3.89,
      "calmar": -3.89
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.21,
      "sharpe": 0.25,
      "calmar": 0.25
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.54,
      "sharpe": -2.88,
      "calmar": -2.88
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 8.22,
      "sharpe": -5.35,
      "calmar": -5.35
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.01,
      "sharpe": -0.77,
      "calmar": -0.77
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 2.42,
      "sharpe": -1.41,
      "calmar": -1.41
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.27,
      "sharpe": 0.75,
      "calmar": 0.75
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 6.24,
      "sharpe": -1.94,
      "calmar": -1.94
    }
  ],
  "news": [
    {
      "title": "商务部等8部门日前联合印发《服务贸易发展“十五五”规划》（以下简称《规划》），《规划》以“培育发展新动能”为主线，谋划重点任务，构建政策矩阵，培育“中国服务”品牌。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:09",
      "impact": "neutral"
    },
    {
      "title": "证券时报记者从多个独立信源处获悉，有关部门正在研究完善燃煤电厂全负荷脱硝相关技术要求，进一步加强煤电机组启停阶段的氮氧化物排放控制。过去，煤电机组启动阶段的氮氧化物排放管理中，对并网后的特殊工况设有相应的达标判定时段。随着煤电启停日趋频繁，环保治理要求进一步向锅炉点火阶段延伸。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:08",
      "impact": "neutral"
    },
    {
      "title": "随着气温走低，国内“滑雪”搜索量暴涨，“冷资源”持续释放“热效应”。不少企业靠技术创新开拓市场，国产冰雪装备加速突围。在张家口宣化产业园内，全自动造雪机、国产化索道订单爆满。新款造雪机可自动监测温湿度、捕捉造雪窗口期，同等条件下单台电机功率下降3000瓦，人力、水电等运营成本节省30%至40%，订单已经排到2029年，出口俄罗斯等地。滑雪索道也摆脱进口依赖，实现自主研发量产。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:08",
      "impact": "neutral"
    },
    {
      "title": "6G发展正从愿景描绘转向标准研制落地，我国新一代通信网建设步入实施阶段。6G在技术验证、商业模式等方面仍有不少细节有待探索，行业共识持续凝聚。新一代通信网建设进入实施新阶段11月26日，工业和信息化部联合国家网信办、国家发展改革委印发《新一代通信网建设实施方案》（下称《实施方案》），这标志着我国新一代通信网建设正式从顶层设计迈入落地实施的新阶段。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:08",
      "impact": "neutral"
    },
    {
      "title": "证券时报记者吴家明曹晨“空箱而来，满载而归”，不少海外游客在社交平台晒出在中国采购的好物，“ChinaHaul（中国购物开箱）”成为今年刷屏网络的热词。这份消费热潮的背后，是我国免签“朋友圈”的不断扩围，一系列入境便利化措施接连落地，叠加离境退税服务不断优化，多重利好合力释放了入境消费的市场潜力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:08",
      "impact": "neutral"
    },
    {
      "title": "11月26日下午，广东省政务服务和数据管理局、广东省发展和改革委员会印发《广东省算力发展“十五五”规划》（以下简称《规划》），明确将粤港澳大湾区算力枢纽打造为要素集聚、生态完善、绿色集约、联通港澳、辐射全国、具备全球竞争力的人工智能算力高地，分阶段设定算力发展目标，统筹布局全省算力基础设施，构建数算电网协同发展体系。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:08",
      "impact": "neutral"
    },
    {
      "title": "工业和信息化部、国家网信办、国家发展改革委日前印发《新一代通信网建设实施方案》（以下简称《实施方案》），提出到2030年，建成覆盖完善、性能领先的新一代通信网。《实施方案》提出，适时开展6G网络建设，5G-A、万兆光网实现重点区域部署应用，基础网络发展水平持续领先。低轨卫星互联网系统基本建成，频轨资源开发利用水平大幅提升，空间网络形成全球服务能力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:08",
      "impact": "neutral"
    },
    {
      "title": "时报数说 自然指数：中国城市首次包揽全球科研城市前三",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:08",
      "impact": "neutral"
    },
    {
      "title": "商务部等八部门近日印发《服务贸易发展“十五五”规划》（简称“规划”）。规划围绕加快培育服务贸易发展新动能、促进服务贸易数字化智能化绿色化发展、有序推进服务领域开放等七个方面部署了25项重点任务。“规划最大的特点是将服务贸易发展与数字经济、人工智能、新质生产力、绿色转型等国家战略更加紧密地结合，体现出明显的前瞻性和产业升级导向。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:00",
      "impact": "neutral"
    },
    {
      "title": "◎记者宋薇萍11月26日，工业和信息化部、国家网信办、国家发展改革委联合印发《新一代通信网建设实施方案》（下称“方案”），以“432”框架布局四张网、三项能力、两大支撑，明确提出以5G-A/6G、万兆光网、卫星互联网为核心支撑，将新一代通信网重新定义为经济社会运行的“神经系统”。方案明确，到2030年，建成覆盖完善、性能领先的新一代通信网。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:00",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,802/1,598",
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
