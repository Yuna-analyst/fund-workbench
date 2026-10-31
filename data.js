// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-31 15:42:36
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-31 15:42 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-30",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3599.02,
      "change": -52.41,
      "changePct": "-1.44%",
      "high": 3660.21,
      "low": 3595.26,
      "volume": 497973940.0,
      "amount": 764227190000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10833.78,
      "change": -304.42,
      "changePct": "-2.73%",
      "high": 11171.58,
      "low": 10833.78,
      "volume": 608472237.0,
      "amount": 910240830000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2413.63,
      "change": -103.96,
      "changePct": "-4.13%",
      "high": 2518.24,
      "low": 2413.63,
      "volume": 194139714.0,
      "amount": 452209380000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1160.84,
      "change": -67.25,
      "changePct": "-5.48%",
      "high": 1218.8,
      "low": 1159.57,
      "volume": 8640959.0,
      "amount": 70374200000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3985.5,
      "change": -56.34,
      "changePct": "-1.39%",
      "high": 4046.87,
      "low": 3968.86,
      "volume": 192091719.0,
      "amount": 456855790000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6266.19,
      "change": -187.53,
      "changePct": "-2.91%",
      "high": 6483.01,
      "low": 6266.19,
      "volume": 157240265.0,
      "amount": 285035070000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.94万亿",
      "label": "成交额",
      "rawAmount": 2938942460000.0,
      "change": ""
    },
    "upDown": {
      "val": "589/2,705",
      "label": "涨/跌家数",
      "rawUp": 589,
      "rawDown": 2705,
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
    "totalInflow": 11.79,
    "totalOutflow": 0,
    "netFlow": 11.79,
    "netFlowTrend": [
      2.36,
      4.72,
      7.07,
      9.43,
      11.79
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
      "name": "白酒",
      "inflow": 3.63,
      "pct": 5.11
    },
    {
      "name": "银行",
      "inflow": 2.91,
      "pct": 0.68
    },
    {
      "name": "煤炭",
      "inflow": 2.16,
      "pct": 0.73
    },
    {
      "name": "医药",
      "inflow": 1.62,
      "pct": 0.53
    },
    {
      "name": "医疗",
      "inflow": 1.55,
      "pct": 1.21
    },
    {
      "name": "食品",
      "inflow": 0.13,
      "pct": 3.27
    },
    {
      "name": "创新药",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.83
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -4.55
    },
    {
      "name": "家电",
      "inflow": -0.12,
      "pct": -0.15
    },
    {
      "name": "钢铁",
      "inflow": -0.12,
      "pct": -1.05
    },
    {
      "name": "农业",
      "inflow": -0.13,
      "pct": -0.72
    },
    {
      "name": "地产",
      "inflow": -0.35,
      "pct": -1.68
    },
    {
      "name": "光伏",
      "inflow": -0.36,
      "pct": -3.18
    },
    {
      "name": "新能源车",
      "inflow": -0.37,
      "pct": -0.93
    },
    {
      "name": "新能源",
      "inflow": -0.44,
      "pct": -1.7
    },
    {
      "name": "传媒",
      "inflow": -0.81,
      "pct": -4.76
    },
    {
      "name": "军工",
      "inflow": -0.96,
      "pct": -3.63
    },
    {
      "name": "有色",
      "inflow": -1.55,
      "pct": -1.97
    },
    {
      "name": "券商",
      "inflow": -2.6,
      "pct": -1.08
    }
  ],
  "sectors": [
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.432,
      "changePct": 5.11,
      "change": 0.021,
      "turnover": 12.11
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.506,
      "changePct": 3.27,
      "change": 0.016,
      "turnover": 0.43
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.335,
      "changePct": 1.21,
      "change": 0.004,
      "turnover": 5.18
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.238,
      "changePct": 0.73,
      "change": 0.009,
      "turnover": 7.2
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.893,
      "changePct": 0.68,
      "change": 0.006,
      "turnover": 9.71
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.53,
      "change": 0.002,
      "turnover": 5.39
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.785,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 6.94
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.319,
      "changePct": -0.15,
      "change": -0.002,
      "turnover": 0.41
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.691,
      "changePct": -0.72,
      "change": -0.005,
      "turnover": 0.43
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.952,
      "changePct": -0.83,
      "change": -0.008,
      "turnover": 0.07
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.28,
      "changePct": -0.93,
      "change": -0.012,
      "turnover": 1.24
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.04,
      "changePct": -1.05,
      "change": -0.011,
      "turnover": 0.41
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.46,
      "changePct": -1.08,
      "change": -0.005,
      "turnover": 8.68
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.112,
      "changePct": -1.68,
      "change": -0.019,
      "turnover": 1.18
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.905,
      "changePct": -1.7,
      "change": -0.033,
      "turnover": 1.47
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.395,
      "changePct": -1.97,
      "change": -0.028,
      "turnover": 5.18
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.669,
      "changePct": -3.18,
      "change": -0.022,
      "turnover": 1.21
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.982,
      "changePct": -3.63,
      "change": -0.037,
      "turnover": 3.2
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.943,
      "changePct": -4.55,
      "change": -0.045,
      "turnover": 0.24
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.74,
      "changePct": -4.76,
      "change": -0.037,
      "turnover": 2.7
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.72,
      "changePct": -4.89,
      "change": -0.037,
      "turnover": 13.09
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.595,
      "changePct": -4.95,
      "change": -0.031,
      "turnover": 0.49
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.767,
      "changePct": -5.07,
      "change": -0.041,
      "turnover": 1.7
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.783,
      "changePct": -5.09,
      "change": -0.042,
      "turnover": 6.12
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.326,
      "changePct": -5.15,
      "change": -0.072,
      "turnover": 0.79
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.948,
      "changePct": -5.39,
      "change": -0.054,
      "turnover": 1.22
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.674,
      "changePct": -6.52,
      "change": -0.047,
      "turnover": 7.38
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.432,
      "changePct": -6.7,
      "change": -0.031,
      "turnover": 31.36
    }
  ],
  "etfFlow": [
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.53,
      "amount": 5.39,
      "netFlow": 1.35
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.905,
      "changePct": -1.7,
      "amount": 1.47,
      "netFlow": -0.37
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.46,
      "changePct": -1.08,
      "amount": 8.68,
      "netFlow": -2.17
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.72,
      "changePct": -4.89,
      "amount": 13.09,
      "netFlow": -3.27
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.943,
      "changePct": -1.35,
      "amount": 17.41,
      "netFlow": -4.35
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.862,
      "changePct": -0.31,
      "amount": 21.43,
      "netFlow": -5.36
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.237,
      "changePct": -1.21,
      "amount": 24.47,
      "netFlow": -6.12
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.305,
      "changePct": -2.85,
      "amount": 39.33,
      "netFlow": -9.83
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.065,
      "changePct": -1.12,
      "amount": 86.14,
      "netFlow": -21.53
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.228,
      "changePct": -5.03,
      "amount": 116.24,
      "netFlow": -29.06
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.065,
      "changePct": -1.12,
      "amount": 86.14,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.862,
      "changePct": -0.31,
      "amount": 21.43,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.305,
      "changePct": -2.85,
      "amount": 39.33,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.237,
      "changePct": -1.21,
      "amount": 24.47,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.943,
      "changePct": -1.35,
      "amount": 17.41,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "白酒",
      "turnover": 12.11,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "食品",
      "turnover": 0.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 5.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 9.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 5.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.24,
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
    },
    {
      "name": "券商",
      "turnover": 8.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 5.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.2,
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
      "name": "传媒",
      "turnover": 2.7,
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
      "nav": 3.7558,
      "ret1w": -4.85,
      "ret1m": -8.27,
      "ret3m": -15.1,
      "ret6m": 3.29,
      "ret1y": -20.86,
      "ret2y": -5.53,
      "ret3y": 83.33
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.8408,
      "ret1w": -5.01,
      "ret1m": -12.3,
      "ret3m": -26.14,
      "ret6m": -24.65,
      "ret1y": -40.15,
      "ret2y": -29.77,
      "ret3y": 0.12
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.3446,
      "ret1w": -8.2,
      "ret1m": -20.05,
      "ret3m": -40.72,
      "ret6m": -15.73,
      "ret1y": -31.6,
      "ret2y": -1.21,
      "ret3y": 73.81
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7327,
      "ret1w": 1.92,
      "ret1m": 2.86,
      "ret3m": 5.11,
      "ret6m": -1.33,
      "ret1y": -3.02,
      "ret2y": -8.52,
      "ret3y": -0.75
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9061,
      "ret1w": -1.83,
      "ret1m": -3.18,
      "ret3m": -4.63,
      "ret6m": -13.93,
      "ret1y": -32.21,
      "ret2y": -36.93,
      "ret3y": -22.59
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5279,
      "ret1w": -1.29,
      "ret1m": -1.82,
      "ret3m": -6.7,
      "ret6m": -8.09,
      "ret1y": -25.26,
      "ret2y": -26.47,
      "ret3y": 3.51
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2625,
      "ret1w": 0.56,
      "ret1m": 1.44,
      "ret3m": -0.48,
      "ret6m": -6.82,
      "ret1y": -7.56,
      "ret2y": 0.47,
      "ret3y": 29.41
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.602,
      "ret1w": -2.61,
      "ret1m": -7.18,
      "ret3m": -15.55,
      "ret6m": -7.13,
      "ret1y": -22.31,
      "ret2y": -14.74,
      "ret3y": 24.77
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0948,
      "ret1w": -2.7,
      "ret1m": -6.94,
      "ret3m": -15.43,
      "ret6m": -13.63,
      "ret1y": -23.12,
      "ret2y": -14.57,
      "ret3y": 4.32
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.514,
      "ret1w": -3.12,
      "ret1m": -7.84,
      "ret3m": -20.57,
      "ret6m": -20.06,
      "ret1y": -17.47,
      "ret2y": 11.09,
      "ret3y": 110.73
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.125,
      "ret1w": 3.12,
      "ret1m": 1.9,
      "ret3m": 2.37,
      "ret6m": -0.62,
      "ret1y": -3.68,
      "ret2y": -10.43,
      "ret3y": -11.07
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.211,
      "ret1w": -0.32,
      "ret1m": -2.9,
      "ret3m": -9.9,
      "ret6m": -2.38,
      "ret1y": -17.28,
      "ret2y": -14.53,
      "ret3y": 4.69
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.0804,
      "ret1w": -6.5,
      "ret1m": -17.23,
      "ret3m": -32.56,
      "ret6m": -36.25,
      "ret1y": -68.24,
      "ret2y": -65.41,
      "ret3y": -41.05
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8901,
      "ret1w": 1.58,
      "ret1m": 1.9,
      "ret3m": 0.29,
      "ret6m": -3.18,
      "ret1y": 3.97,
      "ret2y": -3.12,
      "ret3y": -4.89
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3707,
      "ret1w": -2.9,
      "ret1m": -7.04,
      "ret3m": -15.64,
      "ret6m": -7.08,
      "ret1y": -21.44,
      "ret2y": -12.92,
      "ret3y": 20.62
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.4568,
      "ret1w": -6.47,
      "ret1m": -17.1,
      "ret3m": -34.32,
      "ret6m": -26.89,
      "ret1y": -38.54,
      "ret2y": 0.63,
      "ret3y": 45.53
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5494,
      "ret1w": -0.23,
      "ret1m": 0.73,
      "ret3m": -3.44,
      "ret6m": 0.11,
      "ret1y": -6.85,
      "ret2y": -4.73,
      "ret3y": 2.9
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.89,
      "ret1w": -0.89,
      "ret1m": -6.51,
      "ret3m": -15.08,
      "ret6m": -9.18,
      "ret1y": -11.09,
      "ret2y": -16.27,
      "ret3y": -19.31
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3901,
      "ret1w": 1.94,
      "ret1m": 3.32,
      "ret3m": 4.34,
      "ret6m": -0.95,
      "ret1y": -2.33,
      "ret2y": 3.26,
      "ret3y": 8.01
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1527,
      "ret1w": -2.58,
      "ret1m": -6.02,
      "ret3m": -11.06,
      "ret6m": -4.55,
      "ret1y": -11.37,
      "ret2y": -1.54,
      "ret3y": 37.03
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9497,
      "ret1w": -3.3,
      "ret1m": -9.7,
      "ret3m": -19.53,
      "ret6m": -21.9,
      "ret1y": -30.12,
      "ret2y": -19.68,
      "ret3y": 2.39
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0109,
      "ret1w": -3.3,
      "ret1m": -9.69,
      "ret3m": -19.5,
      "ret6m": -21.82,
      "ret1y": -29.99,
      "ret2y": -19.36,
      "ret3y": 3.21
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0469,
      "ret1w": -0.45,
      "ret1m": -0.8,
      "ret3m": -1.91,
      "ret6m": -4.73,
      "ret1y": -4.24,
      "ret2y": -2.71,
      "ret3y": 3.18
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.022,
      "ret1w": -0.45,
      "ret1m": -0.79,
      "ret3m": -1.85,
      "ret6m": -4.58,
      "ret1y": -3.95,
      "ret2y": -2.13,
      "ret3y": 4.43
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6862,
      "ret1w": 0.31,
      "ret1m": -1.29,
      "ret3m": -2.01,
      "ret6m": -7.12,
      "ret1y": -15.05,
      "ret2y": -15.26,
      "ret3y": -3.54
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7041,
      "ret1w": 0.3,
      "ret1m": -1.29,
      "ret3m": -1.98,
      "ret6m": -7.01,
      "ret1y": -14.84,
      "ret2y": -14.84,
      "ret3y": -2.57
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.0578,
      "ret1w": -3.94,
      "ret1m": -9.82,
      "ret3m": -22.8,
      "ret6m": -16.07,
      "ret1y": -19.6,
      "ret2y": 2.74,
      "ret3y": 79.3
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.1868,
      "ret1w": -2.14,
      "ret1m": -6.64,
      "ret3m": -11.25,
      "ret6m": -8.96,
      "ret1y": -13.99,
      "ret2y": -1.76,
      "ret3y": 40.16
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6601,
      "ret1w": -1.64,
      "ret1m": -7.73,
      "ret3m": -7.26,
      "ret6m": -8.24,
      "ret1y": -24.94,
      "ret2y": -19.79,
      "ret3y": -9.55
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.6679,
      "ret1w": -3.46,
      "ret1m": -9.94,
      "ret3m": -11.71,
      "ret6m": -4.75,
      "ret1y": -6.81,
      "ret2y": 14.35,
      "ret3y": 82.25
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4647,
      "ret1w": -0.51,
      "ret1m": -0.19,
      "ret3m": -6.44,
      "ret6m": -11.2,
      "ret1y": -10.46,
      "ret2y": -1.27,
      "ret3y": 25.53
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4739,
      "ret1w": -0.5,
      "ret1m": -0.19,
      "ret3m": -6.42,
      "ret6m": -11.1,
      "ret1y": -10.28,
      "ret2y": -0.88,
      "ret3y": 26.54
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.261,
      "ret1w": 0.18,
      "ret1m": 0.76,
      "ret3m": -0.54,
      "ret6m": -1.95,
      "ret1y": -2.53,
      "ret2y": -2.08,
      "ret3y": 0.66
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0606,
      "ret1w": -0.32,
      "ret1m": -2.14,
      "ret3m": -4.06,
      "ret6m": -7.69,
      "ret1y": -7.77,
      "ret2y": -10.49,
      "ret3y": 0.24
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1471,
      "ret1w": -0.44,
      "ret1m": -1.4,
      "ret3m": -13.1,
      "ret6m": -14.35,
      "ret1y": -27.44,
      "ret2y": -27.14,
      "ret3y": -17.84
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7733,
      "ret1w": -1.51,
      "ret1m": -1.84,
      "ret3m": -5.0,
      "ret6m": -7.74,
      "ret1y": -14.98,
      "ret2y": -1.02,
      "ret3y": 28.36
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.182,
      "ret1w": -5.38,
      "ret1m": -14.03,
      "ret3m": -30.55,
      "ret6m": -28.11,
      "ret1y": -38.9,
      "ret2y": -5.05,
      "ret3y": 68.62
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5704,
      "ret1w": 0.45,
      "ret1m": 4.17,
      "ret3m": 3.4,
      "ret6m": 3.29,
      "ret1y": 5.02,
      "ret2y": 4.36,
      "ret3y": 4.38
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.545,
      "ret1w": -2.28,
      "ret1m": 2.27,
      "ret3m": -5.79,
      "ret6m": 0.28,
      "ret1y": -22.61,
      "ret2y": -8.88,
      "ret3y": -10.77
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.07,
      "ret1w": -5.96,
      "ret1m": -16.75,
      "ret3m": -33.34,
      "ret6m": -26.18,
      "ret1y": -19.55,
      "ret2y": 7.72,
      "ret3y": 114.22
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.051,
      "ret1w": -0.37,
      "ret1m": -0.41,
      "ret3m": -0.93,
      "ret6m": -1.05,
      "ret1y": -1.59,
      "ret2y": -0.53,
      "ret3y": 2.53
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0992,
      "ret1w": -0.36,
      "ret1m": -0.4,
      "ret3m": -0.92,
      "ret6m": -0.99,
      "ret1y": -1.48,
      "ret2y": -0.3,
      "ret3y": 3.2
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0671,
      "ret1w": -0.09,
      "ret1m": -0.05,
      "ret3m": 0.1,
      "ret6m": 0.35,
      "ret1y": 0.64,
      "ret2y": 1.57,
      "ret3y": 3.08
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1017,
      "ret1w": -0.09,
      "ret1m": -0.03,
      "ret3m": 0.14,
      "ret6m": 0.39,
      "ret1y": 0.71,
      "ret2y": 1.53,
      "ret3y": 3.88
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1115,
      "ret1w": -0.09,
      "ret1m": -0.03,
      "ret3m": 0.15,
      "ret6m": 0.44,
      "ret1y": 0.82,
      "ret2y": 1.74,
      "ret3y": 4.32
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0778,
      "ret1w": -0.08,
      "ret1m": -0.04,
      "ret3m": 0.1,
      "ret6m": 0.26,
      "ret1y": 0.57,
      "ret2y": 1.43,
      "ret3y": 3.15
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0928,
      "ret1w": -0.07,
      "ret1m": -0.03,
      "ret3m": 0.13,
      "ret6m": 0.34,
      "ret1y": 0.72,
      "ret2y": 1.75,
      "ret3y": 3.81
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9982,
      "ret1w": -1.06,
      "ret1m": -2.19,
      "ret3m": -5.09,
      "ret6m": -4.67,
      "ret1y": -7.58,
      "ret2y": -2.26,
      "ret3y": 4.48
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1473,
      "ret1w": -1.13,
      "ret1m": -2.44,
      "ret3m": -5.26,
      "ret6m": -3.14,
      "ret1y": -7.62,
      "ret2y": -4.02,
      "ret3y": -0.82
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0052,
      "ret1w": -1.05,
      "ret1m": -2.17,
      "ret3m": -5.05,
      "ret6m": -4.57,
      "ret1y": -7.38,
      "ret2y": -1.86,
      "ret3y": 5.34
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0446,
      "ret1w": -0.11,
      "ret1m": -0.08,
      "ret3m": 0.08,
      "ret6m": 0.41,
      "ret1y": 0.78,
      "ret2y": 1.71,
      "ret3y": 3.64
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0945,
      "ret1w": -1.12,
      "ret1m": -2.57,
      "ret3m": -5.5,
      "ret6m": -5.38,
      "ret1y": -9.66,
      "ret2y": -7.67,
      "ret3y": -0.58
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1998,
      "ret1w": -0.03,
      "ret1m": 0.05,
      "ret3m": -0.41,
      "ret6m": -1.47,
      "ret1y": -2.54,
      "ret2y": 0.26,
      "ret3y": 9.87
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.114,
      "ret1w": -0.29,
      "ret1m": -0.61,
      "ret3m": -1.56,
      "ret6m": -1.14,
      "ret1y": -2.42,
      "ret2y": 0.09,
      "ret3y": 6.46
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1846,
      "ret1w": -0.29,
      "ret1m": -0.6,
      "ret3m": -1.54,
      "ret6m": -1.04,
      "ret1y": -2.23,
      "ret2y": 0.48,
      "ret3y": 7.34
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.232,
      "ret1w": -1.41,
      "ret1m": 8.03,
      "ret3m": -10.83,
      "ret6m": 13.47,
      "ret1y": 8.45,
      "ret2y": 54.46,
      "ret3y": 116.49
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9677,
      "ret1w": -0.52,
      "ret1m": 0.75,
      "ret3m": -1.22,
      "ret6m": 4.0,
      "ret1y": 3.78,
      "ret2y": 5.29,
      "ret3y": 28.86
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6374,
      "ret1w": -1.13,
      "ret1m": -0.55,
      "ret3m": -8.62,
      "ret6m": -12.62,
      "ret1y": -23.08,
      "ret2y": -12.51,
      "ret3y": 14.29
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4073,
      "ret1w": -0.66,
      "ret1m": 5.59,
      "ret3m": -3.29,
      "ret6m": 15.08,
      "ret1y": 15.15,
      "ret2y": 13.04,
      "ret3y": 65.1
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9233,
      "ret1w": 0.29,
      "ret1m": 0.08,
      "ret3m": 1.0,
      "ret6m": -1.38,
      "ret1y": -2.56,
      "ret2y": -5.42,
      "ret3y": -2.21
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4391,
      "ret1w": -2.22,
      "ret1m": 3.78,
      "ret3m": -10.69,
      "ret6m": 2.72,
      "ret1y": 0.28,
      "ret2y": 21.43,
      "ret3y": 68.31
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.462,
      "ret1w": -0.13,
      "ret1m": 0.22,
      "ret3m": -1.87,
      "ret6m": 0.75,
      "ret1y": -0.27,
      "ret2y": 0.38,
      "ret3y": 15.06
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.801,
      "ret1w": -1.11,
      "ret1m": -0.62,
      "ret3m": -15.33,
      "ret6m": -9.7,
      "ret1y": -25.83,
      "ret2y": -30.04,
      "ret3y": -16.74
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.5962,
      "ret1w": -2.77,
      "ret1m": 3.4,
      "ret3m": -10.73,
      "ret6m": 2.36,
      "ret1y": -0.35,
      "ret2y": 45.53,
      "ret3y": 121.92
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5642,
      "ret1w": -0.17,
      "ret1m": 0.92,
      "ret3m": 1.67,
      "ret6m": 9.24,
      "ret1y": 2.37,
      "ret2y": 27.5,
      "ret3y": 49.87
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6187,
      "ret1w": -0.77,
      "ret1m": 0.41,
      "ret3m": -6.79,
      "ret6m": 1.1,
      "ret1y": 1.14,
      "ret2y": 12.53,
      "ret3y": 41.3
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2173,
      "ret1w": -0.82,
      "ret1m": 2.05,
      "ret3m": -5.9,
      "ret6m": -0.09,
      "ret1y": -5.35,
      "ret2y": 1.13,
      "ret3y": 23.53
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.266,
      "ret1w": 2.01,
      "ret1m": 1.36,
      "ret3m": 3.18,
      "ret6m": -6.5,
      "ret1y": -2.47,
      "ret2y": 4.03,
      "ret3y": -9.81
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.91,
      "ret1w": -0.93,
      "ret1m": -0.57,
      "ret3m": -3.83,
      "ret6m": -1.6,
      "ret1y": -13.5,
      "ret2y": -4.88,
      "ret3y": 29.32
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.7477,
      "ret1w": -1.36,
      "ret1m": 2.83,
      "ret3m": -10.26,
      "ret6m": 0.84,
      "ret1y": 1.05,
      "ret2y": 16.97,
      "ret3y": 49.39
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0156,
      "ret1w": -0.12,
      "ret1m": -0.02,
      "ret3m": 0.24,
      "ret6m": 0.65,
      "ret1y": 1.2,
      "ret2y": 2.37,
      "ret3y": 3.86
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0148,
      "ret1w": -0.11,
      "ret1m": -0.02,
      "ret3m": 0.25,
      "ret6m": 0.69,
      "ret1y": 1.23,
      "ret2y": 2.44,
      "ret3y": 4.04
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.191,
      "ret1w": -1.81,
      "ret1m": -4.57,
      "ret3m": -11.25,
      "ret6m": -15.11,
      "ret1y": -21.39,
      "ret2y": -18.87,
      "ret3y": -1.73
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.24,
      "ret1w": -2.57,
      "ret1m": -6.86,
      "ret3m": -15.41,
      "ret6m": -16.98,
      "ret1y": -24.93,
      "ret2y": -18.31,
      "ret3y": 6.11
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4491,
      "ret1w": -1.13,
      "ret1m": -2.89,
      "ret3m": -7.44,
      "ret6m": -9.03,
      "ret1y": -20.64,
      "ret2y": -6.18,
      "ret3y": 35.43
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8324,
      "ret1w": -2.03,
      "ret1m": -4.07,
      "ret3m": -11.07,
      "ret6m": -12.25,
      "ret1y": -15.34,
      "ret2y": -8.83,
      "ret3y": 9.21
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.886,
      "ret1w": -2.03,
      "ret1m": -4.06,
      "ret3m": -11.05,
      "ret6m": -12.16,
      "ret1y": -15.17,
      "ret2y": -8.47,
      "ret3y": 10.09
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6352,
      "ret1w": -2.77,
      "ret1m": -7.65,
      "ret3m": -14.99,
      "ret6m": -13.6,
      "ret1y": -23.42,
      "ret2y": -13.87,
      "ret3y": 8.39
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5722,
      "ret1w": -1.31,
      "ret1m": -2.75,
      "ret3m": -7.97,
      "ret6m": -11.44,
      "ret1y": -15.33,
      "ret2y": -13.29,
      "ret3y": 5.28
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4066,
      "ret1w": -1.53,
      "ret1m": -4.93,
      "ret3m": -8.79,
      "ret6m": -9.95,
      "ret1y": -16.23,
      "ret2y": -6.64,
      "ret3y": 18.86
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4903,
      "ret1w": -3.35,
      "ret1m": -7.81,
      "ret3m": -18.35,
      "ret6m": -22.15,
      "ret1y": -26.23,
      "ret2y": -20.49,
      "ret3y": 10.08
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0043,
      "ret1w": 0.0,
      "ret1m": 0.6,
      "ret3m": -2.66,
      "ret6m": -8.79,
      "ret1y": -9.81,
      "ret2y": -10.52,
      "ret3y": 6.43
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4812,
      "ret1w": 0.24,
      "ret1m": -0.77,
      "ret3m": 0.73,
      "ret6m": -2.09,
      "ret1y": 1.54,
      "ret2y": 5.72,
      "ret3y": 28.12
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4079,
      "ret1w": -1.27,
      "ret1m": 1.34,
      "ret3m": -3.28,
      "ret6m": 6.46,
      "ret1y": 5.46,
      "ret2y": 5.78,
      "ret3y": 29.88
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2075,
      "ret1w": -2.3,
      "ret1m": -5.75,
      "ret3m": -14.33,
      "ret6m": -18.41,
      "ret1y": -25.15,
      "ret2y": -18.65,
      "ret3y": 5.17
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9958,
      "ret1w": 1.9,
      "ret1m": -3.08,
      "ret3m": -11.77,
      "ret6m": -11.99,
      "ret1y": -17.57,
      "ret2y": -11.84,
      "ret3y": 12.2
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9992,
      "ret1w": 1.91,
      "ret1m": -3.07,
      "ret3m": -11.65,
      "ret6m": -11.82,
      "ret1y": -17.39,
      "ret2y": -11.75,
      "ret3y": 11.94
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2122,
      "ret1w": -1.77,
      "ret1m": -1.48,
      "ret3m": -10.53,
      "ret6m": -11.47,
      "ret1y": -20.24,
      "ret2y": -14.37,
      "ret3y": 6.78
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2407,
      "ret1w": -1.77,
      "ret1m": -1.47,
      "ret3m": -10.5,
      "ret6m": -11.38,
      "ret1y": -20.08,
      "ret2y": -14.03,
      "ret3y": 7.64
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7172,
      "ret1w": -1.66,
      "ret1m": -1.26,
      "ret3m": -11.07,
      "ret6m": -15.88,
      "ret1y": -19.63,
      "ret2y": -11.85,
      "ret3y": 20.59
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1549,
      "ret1w": -0.39,
      "ret1m": -0.41,
      "ret3m": -0.54,
      "ret6m": -1.05,
      "ret1y": -1.16,
      "ret2y": 0.57,
      "ret3y": 5.47
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1752,
      "ret1w": -0.39,
      "ret1m": -0.4,
      "ret3m": -0.52,
      "ret6m": -0.98,
      "ret1y": -1.0,
      "ret2y": 0.88,
      "ret3y": 6.11
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0876,
      "ret1w": -0.09,
      "ret1m": -0.05,
      "ret3m": 0.12,
      "ret6m": 0.42,
      "ret1y": 0.8,
      "ret2y": 1.87,
      "ret3y": 3.67
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4107,
      "ret1w": -0.14,
      "ret1m": -0.11,
      "ret3m": 0.04,
      "ret6m": 0.0,
      "ret1y": 0.06,
      "ret2y": 0.58,
      "ret3y": 5.81
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4639,
      "ret1w": -0.14,
      "ret1m": -0.1,
      "ret3m": 0.08,
      "ret6m": 0.1,
      "ret1y": 0.27,
      "ret2y": 0.99,
      "ret3y": 6.67
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8498,
      "ret1w": -2.27,
      "ret1m": -5.09,
      "ret3m": -10.33,
      "ret6m": -10.17,
      "ret1y": -4.45,
      "ret2y": 5.41,
      "ret3y": 32.58
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0048,
      "ret1w": -3.26,
      "ret1m": -6.44,
      "ret3m": -14.05,
      "ret6m": -19.15,
      "ret1y": -18.06,
      "ret2y": -11.87,
      "ret3y": 11.14
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 4.2108
      },
      {
        "date": "2026-10-12",
        "nav": 4.1134
      },
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
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 3.6654
      },
      {
        "date": "2026-10-12",
        "nav": 3.5443
      },
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
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 5.0443
      },
      {
        "date": "2026-10-12",
        "nav": 4.8633
      },
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
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 0.697
      },
      {
        "date": "2026-10-12",
        "nav": 0.7034
      },
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
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.0018
      },
      {
        "date": "2026-10-12",
        "nav": 1.9779
      },
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
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.6661
      },
      {
        "date": "2026-10-12",
        "nav": 2.6618
      },
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
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 5.2875
      },
      {
        "date": "2026-10-12",
        "nav": 5.2735
      },
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
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.866
      },
      {
        "date": "2026-10-12",
        "nav": 1.819
      },
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
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.2767
      },
      {
        "date": "2026-10-12",
        "nav": 1.2482
      },
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
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 3.018
      },
      {
        "date": "2026-10-12",
        "nav": 2.939
      },
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
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.115
      },
      {
        "date": "2026-10-12",
        "nav": 1.108
      },
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
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.443
      },
      {
        "date": "2026-10-12",
        "nav": 2.407
      },
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
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.5361
      },
      {
        "date": "2026-10-12",
        "nav": 1.5203
      },
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
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.884
      },
      {
        "date": "2026-10-12",
        "nav": 1.8876
      },
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
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.5888
      },
      {
        "date": "2026-10-12",
        "nav": 1.5598
      },
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
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.045
      },
      {
        "date": "2026-10-12",
        "nav": 1.9587
      },
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
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.6323
      },
      {
        "date": "2026-10-12",
        "nav": 2.6164
      },
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
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.004
      },
      {
        "date": "2026-10-12",
        "nav": 0.984
      },
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
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.313
      },
      {
        "date": "2026-10-12",
        "nav": 2.3341
      },
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
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.2811
      },
      {
        "date": "2026-10-12",
        "nav": 1.2654
      },
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
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.1449
      },
      {
        "date": "2026-10-12",
        "nav": 1.1189
      },
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
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.2184
      },
      {
        "date": "2026-10-12",
        "nav": 1.1908
      },
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
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.0668
      },
      {
        "date": "2026-10-12",
        "nav": 1.0644
      },
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
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.0411
      },
      {
        "date": "2026-10-12",
        "nav": 1.0388
      },
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
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 0.7024
      },
      {
        "date": "2026-10-12",
        "nav": 0.7031
      },
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
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 0.7206
      },
      {
        "date": "2026-10-12",
        "nav": 0.7213
      },
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
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.5483
      },
      {
        "date": "2026-10-12",
        "nav": 2.4761
      },
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
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.4179
      },
      {
        "date": "2026-10-12",
        "nav": 2.3831
      },
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
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 0.7106
      },
      {
        "date": "2026-10-12",
        "nav": 0.7044
      },
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
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 4.044
      },
      {
        "date": "2026-10-12",
        "nav": 3.9457
      },
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
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 0.4876
      },
      {
        "date": "2026-10-12",
        "nav": 0.4853
      },
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
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 0.4971
      },
      {
        "date": "2026-10-12",
        "nav": 0.4948
      },
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
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.274
      },
      {
        "date": "2026-10-12",
        "nav": 1.2742
      },
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
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.1089
      },
      {
        "date": "2026-10-12",
        "nav": 1.1068
      },
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
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.2915
      },
      {
        "date": "2026-10-12",
        "nav": 1.2777
      },
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
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.9094
      },
      {
        "date": "2026-10-12",
        "nav": 2.8812
      },
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
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 2.918
      },
      {
        "date": "2026-10-12",
        "nav": 2.836
      },
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
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 1.5287
      },
      {
        "date": "2026-10-12",
        "nav": 1.5532
      },
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
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 0.5654
      },
      {
        "date": "2026-10-12",
        "nav": 0.5499
      },
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
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-10-09",
        "nav": 12.63
      },
      {
        "date": "2026-10-12",
        "nav": 12.105
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.41,
      "nav": 3.7558,
      "price": 3.7558,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.62,
      "nav": 2.8408,
      "price": 2.8408,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 1.0,
      "nav": 3.3446,
      "price": 3.3446,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.14,
      "nav": 0.7327,
      "price": 0.7327,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.9061,
      "price": 1.9061,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.5279,
      "price": 2.5279,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 5.2625,
      "price": 5.2625,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 1.602,
      "price": 1.602,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.0948,
      "price": 1.0948,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 2.514,
      "price": 2.514,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.125,
      "price": 1.125,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 2.211,
      "price": 2.211,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.86,
      "nav": 1.0804,
      "price": 1.0804,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.8901,
      "price": 1.8901,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.3707,
      "price": 1.3707,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.86,
      "nav": 1.4568,
      "price": 1.4568,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.5494,
      "price": 2.5494,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 0.89,
      "price": 0.89,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 2.3901,
      "price": 2.3901,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.3,
      "nav": 1.1527,
      "price": 1.1527,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 12.4,
      "sharpe": -1.57,
      "calmar": -1.57
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 18.45,
      "sharpe": -2.32,
      "calmar": -2.32
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 30.08,
      "sharpe": -1.26,
      "calmar": -1.26
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 4.29,
      "sharpe": -0.38,
      "calmar": -0.38
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 4.77,
      "sharpe": -3.94,
      "calmar": -3.94
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.73,
      "sharpe": -3.7,
      "calmar": -3.7
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.16,
      "sharpe": -1.17,
      "calmar": -1.17
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 10.77,
      "sharpe": -1.83,
      "calmar": -1.83
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 10.41,
      "sharpe": -1.94,
      "calmar": -1.94
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 11.76,
      "sharpe": -1.36,
      "calmar": -1.36
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.85,
      "sharpe": -0.53,
      "calmar": -0.53
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.35,
      "sharpe": -2.19,
      "calmar": -2.19
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 25.84,
      "sharpe": -3.07,
      "calmar": -3.07
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.85,
      "sharpe": 0.58,
      "calmar": 0.58
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 10.56,
      "sharpe": -1.78,
      "calmar": -1.78
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 25.65,
      "sharpe": -1.74,
      "calmar": -1.74
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.09,
      "sharpe": -1.2,
      "calmar": -1.2
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.77,
      "sharpe": -0.96,
      "calmar": -0.96
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 4.98,
      "sharpe": -0.28,
      "calmar": -0.28
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 9.03,
      "sharpe": -1.03,
      "calmar": -1.03
    }
  ],
  "news": [
    {
      "title": "当全球进入AI时代，数字赋予人类的意义远超任何一个时期，随着数据要素流通变得越来越频繁，数据要素大市场的形成和数据要素演变成资本的路径也有迹可循。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:11",
      "impact": "neutral"
    },
    {
      "title": "10月30日，财政部发布2026年1—9月全国国有及国有控股企业（下称“国有企业”）经济运行情况数据。数据显示，1—9月，国有企业营业总收入600060.9亿元，同比下降3.2%；利润总额33103.5亿元，同比增长3.0%。在宏观经济承压、产业结构深度调整的背景下，国资国企通过降本增效、结构优化、产业升级实现盈利修复，充分彰显了国有经济的压舱石作用。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:11",
      "impact": "neutral"
    },
    {
      "title": "“付临门”经历破产重整后更名为“富临门”。央行于2026年10月30日在非银行支付机构重大事项变更许可公示中披露，同意付临门支付有限公司（下称“付临门”）增资、更换主要出资人、实际控制人、公司名称、全套核心高管，这标志着付临门重整走完监管终审环节。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:49",
      "impact": "neutral"
    },
    {
      "title": "今天上午，以“守微笃行，聚力生辉”为主题的中小微企业学术研讨会暨2026三季度中国小微经营者调查报告发布会在上海财经大学举行。来自北京大学、上海财经大学、复旦大学、华东师范大学、香港中文大学等高校及相关机构的专家学者、业界嘉宾和师生代表参加研讨交流。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:43",
      "impact": "neutral"
    },
    {
      "title": "10月31日，作为2026世界城市日专题会议，2026沿沪宁城市协同创新日活动在上海市普陀区举行。活动以“科技创新·产业协同”为主题，聚焦沿沪宁产业创新带建设，旨在搭建跨区域、跨领域、跨主体的交流合作平台，推动创新链、产业链、资金链、人才链深度融合，为打造协同创新生态、产业集群高地、产创融合样板凝聚共识、共促发展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:34",
      "impact": "neutral"
    },
    {
      "title": "在位于北京中关村的一家零售店内，北京银河通用的零售机器人“小盖”化身全天候在岗的“智能店员”。当顾客走近时，机器人主动语音迎宾，顾客语音告知所需商品后，机器人自主规划移动路径，双臂灵活转动，依据视觉识别定位货架，根据饮料、熟食、文创纪念品等不同货品的形态调整抓取力度，稳稳夹取商品，再折返至柜台递送给消费者。这只是北京前沿硬科技从实验室走向真实场景、落地生根的一个缩影。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:21",
      "impact": "neutral"
    },
    {
      "title": "今年以来，国务院常务会议要求，加力提效用好中央预算内投资、超长期特别国债、地方政府专项债券等资金和新型政策性金融工具。截至10月28日，2026年8000亿元新型政策性金融工具全部完成投放，支持了一批重点领域项目建设。从9月初全国首笔新型政策性金融工具落地到投放收官，用时不足两个月，为四季度经济平稳运行和明年开局稳增长提供了支撑。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:20",
      "impact": "neutral"
    },
    {
      "title": "10月20日，厦门大学中国能源政策研究院和自然资源保护协会共同举办第25期电力低碳保供研讨会，围绕新能源全面入市下的电价形成与市场机制优化展开讨论。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:16",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者林玉莲）近日，在2026国际算电协同产业链展览会上，达卯科技CEO简煜忞接受记者采访时表示，伴随绿电直连进入规模化落地期，公司签约的可调节资源规模快速增长。公司目标为三年内聚合可调节绿电资源超6GW，预计明年一季度可调节资源总量能够突破GW级（签约口径）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:58",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者宋薇萍）作为2026全球数商大会重要组成部分，“汇数成势·创享价值——公共数据开发利用主题论坛”10月30日在上海西岸国际会展中心举行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:57",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 40,
    "label": "中性",
    "upDownRatio": "589/2,705",
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
