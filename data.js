// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-02 16:13:11
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-02 16:13 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-30",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3842.19,
      "change": 11.74,
      "changePct": "+0.31%",
      "high": 3851.22,
      "low": 3833.09,
      "volume": 414560247.0,
      "amount": 679398990000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 12887.62,
      "change": -14.33,
      "changePct": "-0.11%",
      "high": 12966.45,
      "low": 12854.78,
      "volume": 494715201.0,
      "amount": 758619100000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3135.28,
      "change": -7.28,
      "changePct": "-0.23%",
      "high": 3173.36,
      "low": 3125.49,
      "volume": 133666684.0,
      "amount": 366238720000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1530.01,
      "change": -39.33,
      "changePct": "-2.51%",
      "high": 1578.96,
      "low": 1526.79,
      "volume": 7317081.0,
      "amount": 71878700000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4357.62,
      "change": 12.41,
      "changePct": "+0.29%",
      "high": 4368.61,
      "low": 4341.88,
      "volume": 162949626.0,
      "amount": 356491550000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7435.16,
      "change": -4.47,
      "changePct": "-0.06%",
      "high": 7485.11,
      "low": 7417.49,
      "volume": 116124057.0,
      "amount": 238617530000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.47万亿",
      "label": "成交额",
      "rawAmount": 2471244590000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,692/1,654",
      "label": "涨/跌家数",
      "rawUp": 2692,
      "rawDown": 1654,
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
    "totalInflow": 17.41,
    "totalOutflow": 0,
    "netFlow": 17.41,
    "netFlowTrend": [
      3.48,
      6.96,
      10.45,
      13.93,
      17.41
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
      "name": "创新药",
      "inflow": 3.29,
      "pct": 3.32
    },
    {
      "name": "地产",
      "inflow": 2.72,
      "pct": 0.23
    },
    {
      "name": "银行",
      "inflow": 2.17,
      "pct": 1.43
    },
    {
      "name": "白酒",
      "inflow": 1.75,
      "pct": 2.96
    },
    {
      "name": "医疗",
      "inflow": 1.71,
      "pct": 2.95
    },
    {
      "name": "券商",
      "inflow": 1.56,
      "pct": 0.2
    },
    {
      "name": "医药",
      "inflow": 1.55,
      "pct": 2.92
    },
    {
      "name": "煤炭",
      "inflow": 1.35,
      "pct": 0.88
    },
    {
      "name": "有色",
      "inflow": 1.01,
      "pct": 0.12
    },
    {
      "name": "钢铁",
      "inflow": 0.3,
      "pct": 1.26
    },
    {
      "name": "新能源车",
      "inflow": 0.29,
      "pct": 0.76
    },
    {
      "name": "新能源",
      "inflow": 0.26,
      "pct": 0.72
    },
    {
      "name": "光伏",
      "inflow": 0.26,
      "pct": 0.52
    },
    {
      "name": "农业",
      "inflow": 0.22,
      "pct": 1.26
    },
    {
      "name": "食品",
      "inflow": 0.05,
      "pct": 1.87
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.71
    },
    {
      "name": "家电",
      "inflow": -0.07,
      "pct": -0.07
    },
    {
      "name": "游戏",
      "inflow": -0.11,
      "pct": -0.19
    },
    {
      "name": "军工",
      "inflow": -0.4,
      "pct": -0.09
    },
    {
      "name": "通信",
      "inflow": -5.9,
      "pct": -0.48
    }
  ],
  "sectors": [
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.872,
      "changePct": 3.32,
      "change": 0.028,
      "turnover": 10.97
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.417,
      "changePct": 2.96,
      "change": 0.012,
      "turnover": 5.82
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.349,
      "changePct": 2.95,
      "change": 0.01,
      "turnover": 5.71
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.388,
      "changePct": 2.92,
      "change": 0.011,
      "turnover": 5.15
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.491,
      "changePct": 1.87,
      "change": 0.009,
      "turnover": 0.17
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.853,
      "changePct": 1.43,
      "change": 0.012,
      "turnover": 7.25
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.127,
      "changePct": 1.26,
      "change": 0.014,
      "turnover": 1.0
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.722,
      "changePct": 1.26,
      "change": 0.009,
      "turnover": 0.75
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.256,
      "changePct": 0.88,
      "change": 0.011,
      "turnover": 4.5
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.456,
      "changePct": 0.76,
      "change": 0.011,
      "turnover": 0.97
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.24,
      "changePct": 0.72,
      "change": 0.016,
      "turnover": 0.88
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.989,
      "changePct": 0.71,
      "change": 0.007,
      "turnover": 0.04
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.776,
      "changePct": 0.52,
      "change": 0.004,
      "turnover": 0.86
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.3,
      "changePct": 0.23,
      "change": 0.003,
      "turnover": 9.07
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.492,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 5.2
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.621,
      "changePct": 0.12,
      "change": 0.002,
      "turnover": 3.36
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.395,
      "changePct": -0.07,
      "change": -0.001,
      "turnover": 0.23
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.101,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 1.33
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.032,
      "changePct": -0.19,
      "change": -0.002,
      "turnover": 0.37
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.626,
      "changePct": -0.48,
      "change": -0.003,
      "turnover": 19.66
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.79,
      "changePct": -0.63,
      "change": -0.005,
      "turnover": 2.31
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.959,
      "changePct": -0.72,
      "change": -0.007,
      "turnover": 1.06
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.082,
      "changePct": -0.82,
      "change": -0.009,
      "turnover": 0.2
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.564,
      "changePct": -0.95,
      "change": -0.015,
      "turnover": 1.43
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.965,
      "changePct": -1.13,
      "change": -0.011,
      "turnover": 4.83
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.778,
      "changePct": -1.89,
      "change": -0.015,
      "turnover": 0.33
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.955,
      "changePct": -3.05,
      "change": -0.03,
      "turnover": 11.52
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.053,
      "changePct": -3.22,
      "change": -0.035,
      "turnover": 7.3
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.432,
      "changePct": 0.36,
      "amount": 21.96,
      "netFlow": 5.49
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.305,
      "changePct": 0.3,
      "amount": 13.52,
      "netFlow": 3.38
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.938,
      "changePct": 0.55,
      "amount": 12.97,
      "netFlow": 3.24
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.631,
      "changePct": 0.35,
      "amount": 8.62,
      "netFlow": 2.15
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.492,
      "changePct": 0.2,
      "amount": 5.2,
      "netFlow": 1.3
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.388,
      "changePct": 2.92,
      "amount": 5.15,
      "netFlow": 1.29
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.24,
      "changePct": 0.72,
      "amount": 0.88,
      "netFlow": 0.22
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.955,
      "changePct": -3.05,
      "amount": 11.52,
      "netFlow": -2.88
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.472,
      "changePct": -0.05,
      "amount": 16.7,
      "netFlow": -4.17
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.616,
      "changePct": -2.47,
      "amount": 68.5,
      "netFlow": -17.12
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.432,
      "changePct": 0.36,
      "amount": 21.96,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.938,
      "changePct": 0.55,
      "amount": 12.97,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.472,
      "changePct": -0.05,
      "amount": 16.7,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.631,
      "changePct": 0.35,
      "amount": 8.62,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.305,
      "changePct": 0.3,
      "amount": 13.52,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "创新药",
      "turnover": 10.97,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "白酒",
      "turnover": 5.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 5.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 5.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 7.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 1.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.75,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 4.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.97,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.88,
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
      "name": "光伏",
      "turnover": 0.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 9.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 5.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 3.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 1.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 19.66,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.4239,
      "ret1w": -1.32,
      "ret1m": -7.49,
      "ret3m": -4.99,
      "ret6m": -15.89,
      "ret1y": 11.9,
      "ret2y": 12.15,
      "ret3y": 113.76
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.846,
      "ret1w": -0.95,
      "ret1m": -8.67,
      "ret3m": -9.44,
      "ret6m": -25.51,
      "ret1y": -0.12,
      "ret2y": -11.29,
      "ret3y": 35.29
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.6419,
      "ret1w": -0.89,
      "ret1m": -8.17,
      "ret3m": -2.9,
      "ret6m": -19.2,
      "ret1y": 43.1,
      "ret2y": 67.14,
      "ret3y": 203.95
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6971,
      "ret1w": 1.01,
      "ret1m": 0.39,
      "ret3m": -2.46,
      "ret6m": 8.18,
      "ret1y": -4.87,
      "ret2y": -15.26,
      "ret3y": -10.04
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9987,
      "ret1w": 2.44,
      "ret1m": -0.53,
      "ret3m": -5.74,
      "ret6m": -15.55,
      "ret1y": -26.69,
      "ret2y": -32.11,
      "ret3y": -15.99
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7093,
      "ret1w": 2.34,
      "ret1m": -0.03,
      "ret3m": -1.06,
      "ret6m": -2.04,
      "ret1y": -19.36,
      "ret2y": -19.7,
      "ret3y": 10.11
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2878,
      "ret1w": 0.96,
      "ret1m": -1.03,
      "ret3m": -4.79,
      "ret6m": 4.97,
      "ret1y": -5.38,
      "ret2y": 3.84,
      "ret3y": 25.11
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.897,
      "ret1w": -0.37,
      "ret1m": -5.1,
      "ret3m": -1.96,
      "ret6m": -13.26,
      "ret1y": 1.39,
      "ret2y": 1.77,
      "ret3y": 46.94
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2946,
      "ret1w": -0.02,
      "ret1m": -5.02,
      "ret3m": -5.22,
      "ret6m": -14.23,
      "ret1y": 0.75,
      "ret2y": 1.24,
      "ret3y": 18.72
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.165,
      "ret1w": -2.04,
      "ret1m": -9.21,
      "ret3m": -9.75,
      "ret6m": -29.29,
      "ret1y": 25.3,
      "ret2y": 42.38,
      "ret3y": 189.31
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.099,
      "ret1w": 1.95,
      "ret1m": 0.0,
      "ret3m": -1.43,
      "ret6m": 10.34,
      "ret1y": -3.26,
      "ret2y": -15.27,
      "ret3y": -19.01
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.454,
      "ret1w": 2.0,
      "ret1m": -0.41,
      "ret3m": 3.81,
      "ret6m": 10.49,
      "ret1y": -7.43,
      "ret2y": -7.64,
      "ret3y": 13.93
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6021,
      "ret1w": -2.48,
      "ret1m": -9.72,
      "ret3m": -9.82,
      "ret6m": -38.89,
      "ret1y": -47.69,
      "ret2y": -44.5,
      "ret3y": -4.98
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8847,
      "ret1w": 1.28,
      "ret1m": -0.73,
      "ret3m": -3.24,
      "ret6m": -0.11,
      "ret1y": 7.81,
      "ret2y": -6.6,
      "ret3y": -9.75
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6248,
      "ret1w": -0.68,
      "ret1m": -4.52,
      "ret3m": -3.74,
      "ret6m": -10.99,
      "ret1y": 0.76,
      "ret2y": 5.64,
      "ret3y": 43.58
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.2181,
      "ret1w": -1.0,
      "ret1m": -10.23,
      "ret3m": -7.77,
      "ret6m": -37.88,
      "ret1y": 21.27,
      "ret2y": 60.43,
      "ret3y": 151.2
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.6401,
      "ret1w": 1.23,
      "ret1m": 1.37,
      "ret3m": 3.48,
      "ret6m": 13.05,
      "ret1y": 0.05,
      "ret2y": -2.07,
      "ret3y": 2.3
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.048,
      "ret1w": 3.76,
      "ret1m": -1.13,
      "ret3m": 2.34,
      "ret6m": 5.33,
      "ret1y": 6.83,
      "ret2y": -12.52,
      "ret3y": -8.79
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2907,
      "ret1w": 1.51,
      "ret1m": 0.66,
      "ret3m": -2.75,
      "ret6m": 6.31,
      "ret1y": -6.1,
      "ret2y": 3.25,
      "ret3y": -0.47
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2961,
      "ret1w": -0.16,
      "ret1m": -3.69,
      "ret3m": -4.26,
      "ret6m": -1.34,
      "ret1y": 5.47,
      "ret2y": 13.41,
      "ret3y": 53.89
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.1802,
      "ret1w": -0.42,
      "ret1m": -6.46,
      "ret3m": -8.48,
      "ret6m": -21.37,
      "ret1y": -4.37,
      "ret2y": 0.08,
      "ret3y": 25.07
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.2558,
      "ret1w": -0.43,
      "ret1m": -6.45,
      "ret3m": -8.46,
      "ret6m": -21.29,
      "ret1y": -4.19,
      "ret2y": 0.46,
      "ret3y": 26.07
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0673,
      "ret1w": 0.04,
      "ret1m": -1.02,
      "ret3m": -2.1,
      "ret6m": -4.14,
      "ret1y": 0.16,
      "ret2y": -0.01,
      "ret3y": 4.72
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0413,
      "ret1w": 0.03,
      "ret1m": -1.02,
      "ret3m": -2.06,
      "ret6m": -4.01,
      "ret1y": 0.45,
      "ret2y": 0.59,
      "ret3y": 5.97
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7003,
      "ret1w": 0.53,
      "ret1m": -1.23,
      "ret3m": -2.82,
      "ret6m": -2.92,
      "ret1y": -9.21,
      "ret2y": -15.07,
      "ret3y": -7.12
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7183,
      "ret1w": 0.53,
      "ret1m": -1.22,
      "ret3m": -2.77,
      "ret6m": -2.8,
      "ret1y": -8.98,
      "ret2y": -14.65,
      "ret3y": -6.19
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.6654,
      "ret1w": -0.77,
      "ret1m": -7.83,
      "ret3m": -6.89,
      "ret6m": -24.98,
      "ret1y": 32.4,
      "ret2y": 42.85,
      "ret3y": 124.38
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4639,
      "ret1w": 1.03,
      "ret1m": -2.87,
      "ret3m": -4.03,
      "ret6m": -11.35,
      "ret1y": 10.09,
      "ret2y": 9.38,
      "ret3y": 57.59
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7118,
      "ret1w": 0.49,
      "ret1m": -2.53,
      "ret3m": -5.06,
      "ret6m": -15.71,
      "ret1y": -13.25,
      "ret2y": -12.95,
      "ret3y": -4.12
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1543,
      "ret1w": 0.4,
      "ret1m": -4.03,
      "ret3m": -3.44,
      "ret6m": -20.01,
      "ret1y": 27.92,
      "ret2y": 26.91,
      "ret3y": 107.35
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4967,
      "ret1w": -0.38,
      "ret1m": -2.82,
      "ret3m": -3.01,
      "ret6m": -25.69,
      "ret1y": 2.26,
      "ret2y": 4.46,
      "ret3y": 32.03
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5064,
      "ret1w": -0.37,
      "ret1m": -2.8,
      "ret3m": -2.97,
      "ret6m": -25.61,
      "ret1y": 2.47,
      "ret2y": 4.89,
      "ret3y": 33.09
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2678,
      "ret1w": 0.26,
      "ret1m": 0.06,
      "ret3m": -1.82,
      "ret6m": 2.18,
      "ret1y": -1.94,
      "ret2y": -1.37,
      "ret3y": 0.74
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1055,
      "ret1w": 0.46,
      "ret1m": -0.89,
      "ret3m": -2.69,
      "ret6m": -1.76,
      "ret1y": -3.97,
      "ret2y": -4.67,
      "ret3y": 4.08
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.32,
      "ret1w": 0.33,
      "ret1m": -4.33,
      "ret3m": -7.35,
      "ret6m": -22.59,
      "ret1y": -1.71,
      "ret2y": -23.59,
      "ret3y": -5.96
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9193,
      "ret1w": 0.08,
      "ret1m": -3.12,
      "ret3m": -4.63,
      "ret6m": 0.03,
      "ret1y": -7.88,
      "ret2y": 3.15,
      "ret3y": 26.84
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.142,
      "ret1w": -1.5,
      "ret1m": -8.05,
      "ret3m": -7.15,
      "ret6m": -37.34,
      "ret1y": 20.85,
      "ret2y": 46.75,
      "ret3y": 141.69
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5187,
      "ret1w": 1.23,
      "ret1m": 1.89,
      "ret3m": 1.43,
      "ret6m": 11.45,
      "ret1y": 1.5,
      "ret2y": 2.77,
      "ret3y": -4.26
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5785,
      "ret1w": -1.08,
      "ret1m": -5.47,
      "ret3m": -11.64,
      "ret6m": -32.32,
      "ret1y": -7.98,
      "ret2y": -6.8,
      "ret3y": 14.24
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.606,
      "ret1w": -1.45,
      "ret1m": -9.7,
      "ret3m": -6.69,
      "ret6m": -27.4,
      "ret1y": 54.25,
      "ret2y": 92.58,
      "ret3y": 263.51
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0609,
      "ret1w": -0.01,
      "ret1m": -0.6,
      "ret3m": -0.62,
      "ret6m": -2.46,
      "ret1y": -0.04,
      "ret2y": 0.83,
      "ret3y": 3.53
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1094,
      "ret1w": -0.01,
      "ret1m": -0.6,
      "ret3m": -0.6,
      "ret6m": -2.4,
      "ret1y": 0.09,
      "ret2y": 1.09,
      "ret3y": 4.24
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.066,
      "ret1w": -0.03,
      "ret1m": 0.01,
      "ret3m": 0.2,
      "ret6m": 0.37,
      "ret1y": 0.7,
      "ret2y": 1.66,
      "ret3y": 3.1
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1002,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": 0.15,
      "ret6m": 0.34,
      "ret1y": 0.75,
      "ret2y": 1.57,
      "ret3y": 3.96
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1098,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.16,
      "ret6m": 0.39,
      "ret1y": 0.85,
      "ret2y": 1.78,
      "ret3y": 4.39
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0767,
      "ret1w": -0.03,
      "ret1m": -0.01,
      "ret3m": 0.07,
      "ret6m": 0.33,
      "ret1y": 0.64,
      "ret2y": 1.51,
      "ret3y": 3.1
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0914,
      "ret1w": -0.03,
      "ret1m": 0.0,
      "ret3m": 0.1,
      "ret6m": 0.4,
      "ret1y": 0.8,
      "ret2y": 1.83,
      "ret3y": 3.76
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0517,
      "ret1w": -0.08,
      "ret1m": -1.74,
      "ret3m": -1.98,
      "ret6m": -5.93,
      "ret1y": 1.48,
      "ret2y": 4.2,
      "ret3y": 8.9
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.211,
      "ret1w": -0.16,
      "ret1m": -1.7,
      "ret3m": -1.38,
      "ret6m": -5.61,
      "ret1y": 1.58,
      "ret2y": 2.2,
      "ret3y": 4.04
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0587,
      "ret1w": -0.07,
      "ret1m": -1.73,
      "ret3m": -1.94,
      "ret6m": -5.83,
      "ret1y": 1.68,
      "ret2y": 4.63,
      "ret3y": 9.79
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0476,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.2,
      "ret6m": 0.42,
      "ret1y": 0.86,
      "ret2y": 1.84,
      "ret3y": 3.7
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1582,
      "ret1w": -0.4,
      "ret1m": -1.67,
      "ret3m": -1.2,
      "ret6m": -4.23,
      "ret1y": -2.98,
      "ret2y": -2.2,
      "ret3y": 5.22
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2047,
      "ret1w": 0.22,
      "ret1m": -0.2,
      "ret3m": -1.16,
      "ret6m": -1.71,
      "ret1y": -0.53,
      "ret2y": 0.84,
      "ret3y": 10.24
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1317,
      "ret1w": -0.08,
      "ret1m": -0.7,
      "ret3m": -0.87,
      "ret6m": -3.46,
      "ret1y": 1.31,
      "ret2y": 1.69,
      "ret3y": 8.24
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2031,
      "ret1w": -0.07,
      "ret1m": -0.69,
      "ret3m": -0.83,
      "ret6m": -3.35,
      "ret1y": 1.51,
      "ret2y": 2.1,
      "ret3y": 9.15
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.503,
      "ret1w": 1.05,
      "ret1m": -1.38,
      "ret3m": 7.19,
      "ret6m": -9.64,
      "ret1y": 52.34,
      "ret2y": 90.92,
      "ret3y": 154.11
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0043,
      "ret1w": -0.06,
      "ret1m": -0.89,
      "ret3m": 0.6,
      "ret6m": 3.63,
      "ret1y": 15.68,
      "ret2y": 6.44,
      "ret3y": 31.11
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7918,
      "ret1w": 0.48,
      "ret1m": -2.23,
      "ret3m": -4.38,
      "ret6m": -15.85,
      "ret1y": -8.53,
      "ret2y": -6.69,
      "ret3y": 29.77
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4893,
      "ret1w": 0.38,
      "ret1m": -1.45,
      "ret3m": 3.83,
      "ret6m": 3.68,
      "ret1y": 37.91,
      "ret2y": 25.02,
      "ret3y": 77.91
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9142,
      "ret1w": 0.01,
      "ret1m": -1.11,
      "ret3m": -2.41,
      "ret6m": -3.62,
      "ret1y": -3.96,
      "ret2y": -6.17,
      "ret3y": -2.95
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.731,
      "ret1w": 1.05,
      "ret1m": -1.24,
      "ret3m": 4.26,
      "ret6m": -10.08,
      "ret1y": 39.33,
      "ret2y": 47.23,
      "ret3y": 100.01
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.547,
      "ret1w": -0.07,
      "ret1m": -0.89,
      "ret3m": -2.15,
      "ret6m": -1.71,
      "ret1y": 9.91,
      "ret2y": 4.53,
      "ret3y": 20.26
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.199,
      "ret1w": 1.7,
      "ret1m": -3.38,
      "ret3m": -5.96,
      "ret6m": 6.11,
      "ret1y": -11.58,
      "ret2y": -21.53,
      "ret3y": 86.76
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.946,
      "ret1w": 0.85,
      "ret1m": -3.37,
      "ret3m": -3.76,
      "ret6m": -3.07,
      "ret1y": -11.59,
      "ret2y": -24.44,
      "ret3y": 13.16
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9081,
      "ret1w": -0.19,
      "ret1m": -2.36,
      "ret3m": 1.64,
      "ret6m": -7.34,
      "ret1y": 42.74,
      "ret2y": 71.86,
      "ret3y": 140.44
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5385,
      "ret1w": -0.36,
      "ret1m": -3.31,
      "ret3m": -5.35,
      "ret6m": 11.96,
      "ret1y": -0.05,
      "ret2y": 24.14,
      "ret3y": 47.42
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7367,
      "ret1w": -0.08,
      "ret1m": -2.04,
      "ret3m": 0.75,
      "ret6m": 1.61,
      "ret1y": 18.32,
      "ret2y": 25.19,
      "ret3y": 51.03
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2936,
      "ret1w": -0.32,
      "ret1m": -2.42,
      "ret3m": -3.16,
      "ret6m": -1.84,
      "ret1y": 9.53,
      "ret2y": 10.71,
      "ret3y": 28.21
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.227,
      "ret1w": 0.0,
      "ret1m": -2.31,
      "ret3m": -6.12,
      "ret6m": -8.43,
      "ret1y": 1.66,
      "ret2y": -1.92,
      "ret3y": -13.34
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.986,
      "ret1w": 1.07,
      "ret1m": -3.97,
      "ret3m": -7.71,
      "ret6m": 2.06,
      "ret1y": -10.3,
      "ret2y": 1.48,
      "ret3y": 42.05
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0132,
      "ret1w": -0.06,
      "ret1m": 0.05,
      "ret3m": 0.26,
      "ret6m": 0.49,
      "ret1y": 1.4,
      "ret2y": 2.4,
      "ret3y": 3.73
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0123,
      "ret1w": -0.06,
      "ret1m": 0.07,
      "ret3m": 0.28,
      "ret6m": 0.48,
      "ret1y": 1.41,
      "ret2y": 2.48,
      "ret3y": 3.9
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.342,
      "ret1w": 0.0,
      "ret1m": -4.21,
      "ret3m": -6.15,
      "ret6m": -16.96,
      "ret1y": -2.75,
      "ret2y": -8.96,
      "ret3y": 7.1
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.648,
      "ret1w": -0.34,
      "ret1m": -5.46,
      "ret3m": -7.83,
      "ret6m": -17.64,
      "ret1y": -1.38,
      "ret2y": -3.25,
      "ret3y": 24.55
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5655,
      "ret1w": 0.52,
      "ret1m": -3.9,
      "ret3m": -10.2,
      "ret6m": -4.01,
      "ret1y": -9.53,
      "ret2y": 9.38,
      "ret3y": 37.2
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0606,
      "ret1w": 0.16,
      "ret1m": -3.01,
      "ret3m": -4.72,
      "ret6m": -10.1,
      "ret1y": 2.52,
      "ret2y": 4.42,
      "ret3y": 18.81
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1203,
      "ret1w": 0.16,
      "ret1m": -3.01,
      "ret3m": -4.69,
      "ret6m": -10.0,
      "ret1y": 2.73,
      "ret2y": 4.84,
      "ret3y": 19.78
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9236,
      "ret1w": -0.06,
      "ret1m": -4.36,
      "ret3m": -6.14,
      "ret6m": -16.86,
      "ret1y": -1.69,
      "ret2y": 1.0,
      "ret3y": 30.2
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7083,
      "ret1w": 0.28,
      "ret1m": -3.31,
      "ret3m": -5.36,
      "ret6m": -11.38,
      "ret1y": -0.96,
      "ret2y": -4.53,
      "ret3y": 11.12
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5421,
      "ret1w": 0.45,
      "ret1m": -1.95,
      "ret3m": -3.8,
      "ret6m": -4.61,
      "ret1y": -3.4,
      "ret2y": 4.01,
      "ret3y": 28.8
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.8253,
      "ret1w": -0.56,
      "ret1m": -6.52,
      "ret3m": -8.35,
      "ret6m": -25.58,
      "ret1y": 5.44,
      "ret2y": -2.72,
      "ret3y": 33.71
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0591,
      "ret1w": 0.74,
      "ret1m": -1.98,
      "ret3m": -5.61,
      "ret6m": 1.67,
      "ret1y": -3.59,
      "ret2y": -6.48,
      "ret3y": 4.32
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4704,
      "ret1w": -0.3,
      "ret1m": -1.33,
      "ret3m": -4.08,
      "ret6m": 1.1,
      "ret1y": 3.48,
      "ret2y": 8.49,
      "ret3y": 24.09
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5235,
      "ret1w": 0.18,
      "ret1m": -1.19,
      "ret3m": 2.4,
      "ret6m": 0.82,
      "ret1y": 25.93,
      "ret2y": 14.91,
      "ret3y": 40.08
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.5768,
      "ret1w": -0.08,
      "ret1m": -5.26,
      "ret3m": -7.56,
      "ret6m": -18.65,
      "ret1y": -2.16,
      "ret2y": -3.76,
      "ret3y": 19.49
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1286,
      "ret1w": -3.22,
      "ret1m": -5.76,
      "ret3m": -5.51,
      "ret6m": -17.01,
      "ret1y": 1.09,
      "ret2y": 0.7,
      "ret3y": 34.92
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1309,
      "ret1w": -3.21,
      "ret1m": -5.75,
      "ret3m": -5.46,
      "ret6m": -16.86,
      "ret1y": 1.18,
      "ret2y": 0.85,
      "ret3y": 34.45
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3549,
      "ret1w": 0.23,
      "ret1m": -3.99,
      "ret3m": -4.08,
      "ret6m": -15.66,
      "ret1y": -3.97,
      "ret2y": -5.11,
      "ret3y": 25.7
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3863,
      "ret1w": 0.22,
      "ret1m": -3.98,
      "ret3m": -4.06,
      "ret6m": -15.57,
      "ret1y": -3.77,
      "ret2y": -4.73,
      "ret3y": 26.72
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9309,
      "ret1w": 0.79,
      "ret1m": -4.94,
      "ret3m": -5.44,
      "ret6m": -26.34,
      "ret1y": -0.55,
      "ret2y": 0.51,
      "ret3y": 44.4
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1612,
      "ret1w": -0.09,
      "ret1m": -0.24,
      "ret3m": -0.48,
      "ret6m": -0.78,
      "ret1y": 0.32,
      "ret2y": 1.2,
      "ret3y": 6.38
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1813,
      "ret1w": -0.08,
      "ret1m": -0.24,
      "ret3m": -0.46,
      "ret6m": -0.7,
      "ret1y": 0.47,
      "ret2y": 1.51,
      "ret3y": 7.02
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0863,
      "ret1w": -0.03,
      "ret1m": 0.03,
      "ret3m": 0.23,
      "ret6m": 0.44,
      "ret1y": 0.86,
      "ret2y": 1.97,
      "ret3y": 3.7
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4101,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.05,
      "ret6m": 0.09,
      "ret1y": 0.1,
      "ret2y": 0.68,
      "ret3y": 6.7
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4627,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": 0.08,
      "ret6m": 0.18,
      "ret1y": 0.29,
      "ret2y": 1.08,
      "ret3y": 7.55
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0628,
      "ret1w": -0.47,
      "ret1m": -3.16,
      "ret3m": -3.25,
      "ret6m": -8.78,
      "ret1y": 12.33,
      "ret2y": 17.12,
      "ret3y": 46.96
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1691,
      "ret1w": -0.64,
      "ret1m": -4.38,
      "ret3m": -7.18,
      "ret6m": -8.75,
      "ret1y": 4.69,
      "ret2y": 1.89,
      "ret3y": 26.98
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
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
      }
    ],
    "580008": [
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
      },
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
      }
    ],
    "540010": [
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
      },
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
      }
    ],
    "540009": [
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
      },
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
      }
    ],
    "540008": [
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
      },
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
      }
    ],
    "540007": [
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
      },
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
      }
    ],
    "540006": [
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
      },
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
      }
    ],
    "519975": [
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
      },
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
      }
    ],
    "519965": [
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
      },
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
      }
    ],
    "519935": [
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
      },
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
      }
    ],
    "519714": [
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
      },
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
      }
    ],
    "519673": [
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
      },
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
      }
    ],
    "519606": [
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
      },
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
      }
    ],
    "519193": [
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
      },
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
      }
    ],
    "501219": [
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
      },
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
      }
    ],
    "501201": [
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
      },
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
      }
    ],
    "450009": [
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
      },
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
      }
    ],
    "399011": [
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
      },
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
      }
    ],
    "376510": [
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
      },
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
      }
    ],
    "360001": [
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
      },
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
      }
    ],
    "970185": [
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
      },
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
      }
    ],
    "970184": [
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
      },
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
      }
    ],
    "970121": [
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
      },
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
      }
    ],
    "970119": [
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
      },
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
      }
    ],
    "970069": [
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
      },
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
      }
    ],
    "970067": [
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
      },
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
      }
    ],
    "959991": [
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
      },
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
      }
    ],
    "952099": [
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
      },
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
      }
    ],
    "952035": [
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
      },
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
      }
    ],
    "952004": [
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
      },
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
      }
    ],
    "881007": [
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
      },
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
      }
    ],
    "880007": [
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
      },
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
      }
    ],
    "770001": [
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
      },
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
      }
    ],
    "762001": [
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
      },
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
      }
    ],
    "750005": [
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
      },
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
      }
    ],
    "750001": [
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
      },
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
      }
    ],
    "740001": [
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
      },
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
      }
    ],
    "730002": [
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
      },
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
      }
    ],
    "730001": [
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
      },
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
      }
    ],
    "720001": [
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
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.37,
      "nav": 4.4239,
      "price": 4.4239,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 3.846,
      "price": 3.846,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.41,
      "nav": 5.6419,
      "price": 5.6419,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 0.6971,
      "price": 0.6971,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.9987,
      "price": 1.9987,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.0,
      "nav": 2.7093,
      "price": 2.7093,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.2878,
      "price": 5.2878,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.26,
      "nav": 1.897,
      "price": 1.897,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.25,
      "nav": 1.2946,
      "price": 1.2946,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.46,
      "nav": 3.165,
      "price": 3.165,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.099,
      "price": 1.099,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.454,
      "price": 2.454,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.49,
      "nav": 1.6021,
      "price": 1.6021,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.8847,
      "price": 1.8847,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.6248,
      "price": 1.6248,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.51,
      "nav": 2.2181,
      "price": 2.2181,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.6401,
      "price": 2.6401,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.048,
      "price": 1.048,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.2907,
      "price": 2.2907,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.2961,
      "price": 1.2961,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 11.23,
      "sharpe": 0.95,
      "calmar": 0.95
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 13.0,
      "sharpe": -0.01,
      "calmar": -0.01
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 12.25,
      "sharpe": 3.27,
      "calmar": 3.27
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.58,
      "sharpe": -0.9,
      "calmar": -0.9
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.8,
      "sharpe": -4.83,
      "calmar": -4.83
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.04,
      "sharpe": -3.85,
      "calmar": -3.85
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.54,
      "sharpe": -0.89,
      "calmar": -0.89
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 7.65,
      "sharpe": 0.14,
      "calmar": 0.14
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 7.53,
      "sharpe": 0.07,
      "calmar": 0.07
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 13.82,
      "sharpe": 1.78,
      "calmar": 1.78
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.0,
      "sharpe": -0.54,
      "calmar": -0.54
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.61,
      "sharpe": -1.37,
      "calmar": -1.37
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 14.58,
      "sharpe": -3.24,
      "calmar": -3.24
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.09,
      "sharpe": 1.36,
      "calmar": 1.36
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.78,
      "sharpe": 0.08,
      "calmar": 0.08
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 15.35,
      "sharpe": 1.4,
      "calmar": 1.4
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.06,
      "sharpe": 0.01,
      "calmar": 0.01
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 1.69,
      "sharpe": 1.11,
      "calmar": 1.11
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.99,
      "sharpe": -1.08,
      "calmar": -1.08
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 5.54,
      "sharpe": 0.63,
      "calmar": 0.63
    }
  ],
  "news": [
    {
      "title": "10月2日周五《新闻联播》要闻23条",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:44",
      "impact": "neutral"
    },
    {
      "title": "国庆假期，西部陆海新通道标志性工程——新建贵州黄桶至广西百色铁路（简称黄百铁路）广西段施工现场热火朝天。今日（10月2日），黄百铁路广西段甲博隧道安全贯通，至此，该项目广西段9座中长隧道实现全部贯通。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:22",
      "impact": "neutral"
    },
    {
      "title": "中新网上海10月2日电(高志苗)走进上海市普陀区天安千树，国内全链路卡牌文化空间CARDLAB门店内聚集了不少选卡、看卡的顾客。“这是我们全国首家线下实体店，选址天安千树的核心考量在于其常年汇聚艺术、潮流、海内外年轻圈层流量，以及日益增多的外籍游客群体。”CARDLAB市场部负责人刘女士近日接受中新网采访时表示。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:33",
      "impact": "neutral"
    },
    {
      "title": "今日摘要1、习近平总书记在庆祝中华人民共和国成立77周年招待会上的重要讲话，引发广大干部群众热烈反响。大家表示，总书记的重要讲话令人鼓舞、催人奋进，要坚定信心、锚定目标，一步一步扎实往前走，不断创造新的辉煌。2、人们在丰富多彩的活动中欢度假日，共同祝福伟大祖国。3、国庆假期，全国红色旅游景区迎来客流高峰。4、我国推出一系列政策举措，支持服务业扩能提质。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:00",
      "impact": "neutral"
    },
    {
      "title": "海报新闻记者孙佃潇北京报道10月2日，海报新闻记者从交通运输部获悉，预计10月2日（国庆假期第2日），全社会跨区域人员流动量30819万人次，环比下降6.5%，比2025年同期（10月2日，国庆假期第2日，下同）增长2.1%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:29",
      "impact": "neutral"
    },
    {
      "title": "刚刚过去的9月，北京商品住宅市场迎来传统销售旺季“金九”。在8月楼市新政持续发酵、多个新盘集中入市的背景下，9月北京新房市场供应端与成交端双双走高，市场活跃度明显提升。与此同时，现房销售政策逐步落地、改善型需求加速释放，市场结构性变化正在显现。进入“银十”，开发商推盘节奏趋于稳健，优惠力度有所收窄，市场能否延续“金九”热度，成为各方关注焦点。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:11",
      "impact": "neutral"
    },
    {
      "title": "自9月30日国内主要银行发文响应“929”房贷新政后，近两日包括农行、工行、浦发、宁波银行等多家银行进一步发布了居民购房贷款贴息政策常见问题的解答。工行等部分机构明确指出，对于部分在政策实施前已经受理尚未发放的个人住房贷款，如符合贴息条件，请客户联系贷款经办行提供后续服务。但是，对于10月1日前已经发放的个人住房贷款，则不进行追溯。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:55",
      "impact": "neutral"
    },
    {
      "title": "新华财经晚报：国家发展改革委民营局向民营企业公开推介投资项目",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:54",
      "impact": "neutral"
    },
    {
      "title": "日前，深圳市龙岗区获批建设广东省人工智能与机器人应用改革创新实验区。为什么是龙岗？在坂田街道，机器人街区汇聚全球首家机器人6S店和人工智能6S店，打造全国首个AI服务一条街；在龙城街道，全球智能硬件谷（AIHub）正在加速建设……从西到东，深圳市龙岗区“AllinAI”战略落地生花，短短一年多时间便发展出蓬勃的人工智能与机器人产业业态，敢闯敢试的精神、先行先试的魄力充分显现。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:40",
      "impact": "neutral"
    },
    {
      "title": "从“购房补贴”到“月供减负”，政策工具有了新的打开方式。9月29日，财政部、中国人民银行、金融监管总局联合发布通知，明确在全国范围内实施居民购房贷款贴息政策，实施期暂定1年。符合条件的首套商贷，年化贴息1个百分点，单户上限100万元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:54",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 48,
    "label": "中性",
    "upDownRatio": "2,692/1,654",
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
