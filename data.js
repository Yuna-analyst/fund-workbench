// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-07 15:44:36
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-07 15:44 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-07",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3932.7,
      "change": 2.58,
      "changePct": "+0.07%",
      "high": 3948.42,
      "low": 3916.49,
      "volume": 477375261.0,
      "amount": 897904010000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13774.91,
      "change": 257.94,
      "changePct": "+1.91%",
      "high": 13811.26,
      "low": 13590.82,
      "volume": 587625706.0,
      "amount": 1048114880000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3398.68,
      "change": 112.13,
      "changePct": "+3.41%",
      "high": 3409.36,
      "low": 3320.27,
      "volume": 165865859.0,
      "amount": 508513070000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1615.53,
      "change": 38.17,
      "changePct": "+2.42%",
      "high": 1626.76,
      "low": 1579.02,
      "volume": 7945384.0,
      "amount": 88331760000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4575.02,
      "change": 26.97,
      "changePct": "+0.59%",
      "high": 4580.7,
      "low": 4545.41,
      "volume": 183218470.0,
      "amount": 535811890000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7759.37,
      "change": 106.68,
      "changePct": "+1.39%",
      "high": 7791.79,
      "low": 7672.99,
      "volume": 154402215.0,
      "amount": 343654730000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.42万亿",
      "label": "成交额",
      "rawAmount": 3422330340000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,305/847",
      "label": "涨/跌家数",
      "rawUp": 4305,
      "rawDown": 847,
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
    "totalInflow": 25.04,
    "totalOutflow": 0,
    "netFlow": 25.04,
    "netFlowTrend": [
      5.01,
      10.02,
      15.02,
      20.03,
      25.04
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
      "inflow": 10.74,
      "pct": 5.95
    },
    {
      "name": "5G",
      "inflow": 4.0,
      "pct": 6.28
    },
    {
      "name": "半导体",
      "inflow": 3.89,
      "pct": 2.66
    },
    {
      "name": "芯片",
      "inflow": 2.22,
      "pct": 3.13
    },
    {
      "name": "传媒",
      "inflow": 1.59,
      "pct": 1.52
    },
    {
      "name": "人工智能",
      "inflow": 0.79,
      "pct": 3.0
    },
    {
      "name": "军工",
      "inflow": 0.6,
      "pct": 0.26
    },
    {
      "name": "农业",
      "inflow": 0.44,
      "pct": 0.13
    },
    {
      "name": "游戏",
      "inflow": 0.41,
      "pct": 1.52
    },
    {
      "name": "光伏",
      "inflow": 0.36,
      "pct": 1.61
    },
    {
      "name": "新能源",
      "inflow": 0.33,
      "pct": 1.02
    },
    {
      "name": "云计算",
      "inflow": 0.31,
      "pct": 0.54
    },
    {
      "name": "新能源车",
      "inflow": 0.29,
      "pct": 0.26
    },
    {
      "name": "家电",
      "inflow": 0.28,
      "pct": 0.76
    },
    {
      "name": "电子",
      "inflow": 0.17,
      "pct": 3.47
    },
    {
      "name": "计算机",
      "inflow": 0.07,
      "pct": 0.34
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.29
    },
    {
      "name": "食品",
      "inflow": -0.05,
      "pct": -0.2
    },
    {
      "name": "地产",
      "inflow": -0.48,
      "pct": -0.16
    },
    {
      "name": "白酒",
      "inflow": -1.18,
      "pct": -0.23
    }
  ],
  "sectors": [
    {
      "name": "5G",
      "code": "515050",
      "price": 1.049,
      "changePct": 6.28,
      "change": 0.062,
      "turnover": 13.33
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.677,
      "changePct": 5.95,
      "change": 0.038,
      "turnover": 35.81
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.836,
      "changePct": 3.47,
      "change": 0.028,
      "turnover": 0.55
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.12,
      "changePct": 3.13,
      "change": 0.034,
      "turnover": 7.39
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.029,
      "changePct": 3.0,
      "change": 0.03,
      "turnover": 2.63
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.002,
      "changePct": 2.66,
      "change": 0.026,
      "turnover": 12.96
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.818,
      "changePct": 1.61,
      "change": 0.013,
      "turnover": 1.21
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.868,
      "changePct": 1.52,
      "change": 0.013,
      "turnover": 5.29
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.139,
      "changePct": 1.52,
      "change": 0.017,
      "turnover": 1.37
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.373,
      "changePct": 1.02,
      "change": 0.024,
      "turnover": 1.11
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.45,
      "changePct": 0.76,
      "change": 0.011,
      "turnover": 0.95
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.672,
      "changePct": 0.54,
      "change": 0.009,
      "turnover": 1.02
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.164,
      "changePct": 0.34,
      "change": 0.004,
      "turnover": 0.25
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.151,
      "changePct": 0.26,
      "change": 0.003,
      "turnover": 1.99
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.558,
      "changePct": 0.26,
      "change": 0.004,
      "turnover": 0.97
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.775,
      "changePct": 0.13,
      "change": 0.001,
      "turnover": 1.46
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.232,
      "changePct": -0.16,
      "change": -0.002,
      "turnover": 1.61
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.505,
      "changePct": -0.2,
      "change": -0.001,
      "turnover": 0.18
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.433,
      "changePct": -0.23,
      "change": -0.001,
      "turnover": 3.92
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.032,
      "changePct": -0.29,
      "change": -0.003,
      "turnover": 0.05
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.841,
      "changePct": -0.47,
      "change": -0.004,
      "turnover": 4.01
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.378,
      "changePct": -0.53,
      "change": -0.002,
      "turnover": 1.74
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.337,
      "changePct": -0.59,
      "change": -0.002,
      "turnover": 2.44
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.872,
      "changePct": -0.64,
      "change": -0.012,
      "turnover": 5.66
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.159,
      "changePct": -0.86,
      "change": -0.01,
      "turnover": 0.72
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.523,
      "changePct": -0.95,
      "change": -0.005,
      "turnover": 9.17
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.835,
      "changePct": -1.53,
      "change": -0.013,
      "turnover": 10.25
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.27,
      "changePct": -2.16,
      "change": -0.028,
      "turnover": 9.89
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.705,
      "changePct": 2.22,
      "amount": 62.8,
      "netFlow": 15.7
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.771,
      "changePct": 1.28,
      "amount": 51.59,
      "netFlow": 12.9
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.634,
      "changePct": 0.39,
      "amount": 46.02,
      "netFlow": 11.51
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.002,
      "changePct": 2.66,
      "amount": 12.96,
      "netFlow": 3.24
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.505,
      "changePct": 0.45,
      "amount": 8.24,
      "netFlow": 2.06
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.843,
      "changePct": 0.48,
      "amount": 7.79,
      "netFlow": 1.95
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.373,
      "changePct": 1.02,
      "amount": 1.11,
      "netFlow": 0.28
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.378,
      "changePct": -0.53,
      "amount": 1.74,
      "netFlow": -0.43
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.523,
      "changePct": -0.95,
      "amount": 9.17,
      "netFlow": -2.29
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.018,
      "changePct": -0.63,
      "amount": 16.79,
      "netFlow": -4.2
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.634,
      "changePct": 0.39,
      "amount": 46.02,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.018,
      "changePct": -0.63,
      "amount": 16.79,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.771,
      "changePct": 1.28,
      "amount": 51.59,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.843,
      "changePct": 0.48,
      "amount": 7.79,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.505,
      "changePct": 0.45,
      "amount": 8.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "5G",
      "turnover": 13.33,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 35.81,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 7.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 2.63,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 12.96,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 1.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 5.29,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.95,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 1.99,
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
      "name": "农业",
      "turnover": 1.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.61,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.92,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.6631,
      "ret1w": 4.18,
      "ret1m": 0.15,
      "ret3m": 5.19,
      "ret6m": -6.28,
      "ret1y": 2.38,
      "ret2y": 34.67,
      "ret3y": 174.66
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.211,
      "ret1w": 4.46,
      "ret1m": -0.84,
      "ret3m": -1.66,
      "ret6m": -14.43,
      "ret1y": 8.0,
      "ret2y": 5.68,
      "ret3y": 78.78
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.9697,
      "ret1w": 8.04,
      "ret1m": 2.75,
      "ret3m": 18.17,
      "ret6m": -0.52,
      "ret1y": 51.91,
      "ret2y": 100.76,
      "ret3y": 323.53
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7189,
      "ret1w": -0.96,
      "ret1m": 0.59,
      "ret3m": 1.2,
      "ret6m": 6.87,
      "ret1y": -8.12,
      "ret2y": -13.66,
      "ret3y": 8.38
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0638,
      "ret1w": 0.83,
      "ret1m": -2.67,
      "ret3m": -10.44,
      "ret6m": -14.4,
      "ret1y": -29.54,
      "ret2y": -29.91,
      "ret3y": 18.33
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7003,
      "ret1w": 0.42,
      "ret1m": -1.39,
      "ret3m": -4.25,
      "ret6m": -8.56,
      "ret1y": -28.62,
      "ret2y": -15.38,
      "ret3y": 36.62
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5023,
      "ret1w": -0.29,
      "ret1m": -0.93,
      "ret3m": -0.1,
      "ret6m": 1.93,
      "ret1y": -5.84,
      "ret2y": 11.69,
      "ret3y": 61.07
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.91,
      "ret1w": 1.38,
      "ret1m": -1.29,
      "ret3m": 0.0,
      "ret6m": -4.74,
      "ret1y": -3.24,
      "ret2y": 7.3,
      "ret3y": 76.04
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3428,
      "ret1w": 1.31,
      "ret1m": -1.69,
      "ret3m": -2.06,
      "ret6m": -3.12,
      "ret1y": 1.1,
      "ret2y": 10.46,
      "ret3y": 47.37
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.397,
      "ret1w": 2.75,
      "ret1m": -3.14,
      "ret3m": -4.12,
      "ret6m": -1.56,
      "ret1y": 31.46,
      "ret2y": 76.56,
      "ret3y": 304.4
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.132,
      "ret1w": -0.44,
      "ret1m": 1.52,
      "ret3m": 1.34,
      "ret6m": 7.1,
      "ret1y": -3.58,
      "ret2y": -15.27,
      "ret3y": 7.3
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.371,
      "ret1w": 0.42,
      "ret1m": 0.3,
      "ret3m": -2.47,
      "ret6m": 3.45,
      "ret1y": -13.56,
      "ret2y": -13.44,
      "ret3y": 36.03
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7028,
      "ret1w": 4.72,
      "ret1m": -4.15,
      "ret3m": -6.08,
      "ret6m": -35.09,
      "ret1y": -49.06,
      "ret2y": -37.19,
      "ret3y": 28.51
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9582,
      "ret1w": -0.93,
      "ret1m": 0.53,
      "ret3m": 1.67,
      "ret6m": 7.35,
      "ret1y": 1.21,
      "ret2y": -3.03,
      "ret3y": 11.17
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6616,
      "ret1w": 1.88,
      "ret1m": -1.56,
      "ret3m": 0.24,
      "ret6m": -4.46,
      "ret1y": -3.91,
      "ret2y": 11.01,
      "ret3y": 77.48
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.4002,
      "ret1w": 7.03,
      "ret1m": -0.2,
      "ret3m": 0.84,
      "ret6m": -16.18,
      "ret1y": 29.34,
      "ret2y": 84.74,
      "ret3y": 247.4
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5768,
      "ret1w": -0.48,
      "ret1m": 1.0,
      "ret3m": 1.81,
      "ret6m": -0.41,
      "ret1y": -7.48,
      "ret2y": -3.61,
      "ret3y": 26.68
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.017,
      "ret1w": -0.39,
      "ret1m": -0.68,
      "ret3m": -7.29,
      "ret6m": 17.84,
      "ret1y": 4.52,
      "ret2y": -17.05,
      "ret3y": 6.6
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3454,
      "ret1w": -1.4,
      "ret1m": -0.42,
      "ret3m": 0.83,
      "ret6m": 2.1,
      "ret1y": -6.65,
      "ret2y": 5.22,
      "ret3y": 18.41
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3273,
      "ret1w": 0.68,
      "ret1m": -1.95,
      "ret3m": 1.05,
      "ret6m": 4.09,
      "ret1y": 1.63,
      "ret2y": 20.46,
      "ret3y": 84.06
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2624,
      "ret1w": 1.9,
      "ret1m": -2.11,
      "ret3m": -3.52,
      "ret6m": -7.07,
      "ret1y": -6.26,
      "ret2y": 14.46,
      "ret3y": 52.52
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3429,
      "ret1w": 1.9,
      "ret1m": -2.11,
      "ret3m": -3.49,
      "ret6m": -6.98,
      "ret1y": -6.08,
      "ret2y": 14.91,
      "ret3y": 53.74
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0875,
      "ret1w": 0.25,
      "ret1m": -0.25,
      "ret3m": -1.04,
      "ret6m": -1.85,
      "ret1y": 0.26,
      "ret2y": 1.23,
      "ret3y": 8.78
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0607,
      "ret1w": 0.26,
      "ret1m": -0.24,
      "ret3m": -0.99,
      "ret6m": -1.7,
      "ret1y": 0.56,
      "ret2y": 1.84,
      "ret3y": 10.1
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7232,
      "ret1w": -0.86,
      "ret1m": 0.36,
      "ret3m": -0.9,
      "ret6m": -1.79,
      "ret1y": -10.74,
      "ret2y": -7.29,
      "ret3y": 15.32
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7415,
      "ret1w": -0.87,
      "ret1m": 0.37,
      "ret3m": -0.87,
      "ret6m": -1.67,
      "ret1y": -10.51,
      "ret2y": -6.84,
      "ret3y": 16.46
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8668,
      "ret1w": 5.91,
      "ret1m": 0.15,
      "ret3m": 1.22,
      "ret6m": -7.54,
      "ret1y": 36.56,
      "ret2y": 64.59,
      "ret3y": 175.84
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5042,
      "ret1w": -0.15,
      "ret1m": -2.46,
      "ret3m": -2.13,
      "ret6m": -0.4,
      "ret1y": 1.79,
      "ret2y": 19.37,
      "ret3y": 90.13
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7365,
      "ret1w": -0.89,
      "ret1m": -1.76,
      "ret3m": -1.8,
      "ret6m": -10.61,
      "ret1y": -15.05,
      "ret2y": -9.23,
      "ret3y": 19.58
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1558,
      "ret1w": 0.72,
      "ret1m": -3.41,
      "ret3m": -2.8,
      "ret6m": -2.61,
      "ret1y": 17.87,
      "ret2y": 37.87,
      "ret3y": 149.0
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5095,
      "ret1w": 1.37,
      "ret1m": -0.51,
      "ret3m": -2.9,
      "ret6m": -5.91,
      "ret1y": -3.89,
      "ret2y": 12.55,
      "ret3y": 56.82
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5193,
      "ret1w": 1.39,
      "ret1m": -0.5,
      "ret3m": -2.86,
      "ret6m": -5.8,
      "ret1y": -3.69,
      "ret2y": 12.99,
      "ret3y": 58.08
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2825,
      "ret1w": -0.33,
      "ret1m": -0.68,
      "ret3m": 0.6,
      "ret6m": -0.16,
      "ret1y": -0.68,
      "ret2y": -0.32,
      "ret3y": 1.46
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1244,
      "ret1w": -0.28,
      "ret1m": -1.03,
      "ret3m": -2.12,
      "ret6m": 4.82,
      "ret1y": -7.07,
      "ret2y": -1.33,
      "ret3y": 18.99
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3925,
      "ret1w": 0.61,
      "ret1m": -2.26,
      "ret3m": -3.98,
      "ret6m": -12.31,
      "ret1y": -7.09,
      "ret2y": -16.14,
      "ret3y": 16.4
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0358,
      "ret1w": -0.31,
      "ret1m": -0.82,
      "ret3m": 1.15,
      "ret6m": -1.5,
      "ret1y": -7.6,
      "ret2y": 12.38,
      "ret3y": 54.71
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.37,
      "ret1w": 4.4,
      "ret1m": -0.41,
      "ret3m": -1.92,
      "ret6m": -18.58,
      "ret1y": 33.73,
      "ret2y": 69.01,
      "ret3y": 214.66
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5052,
      "ret1w": -1.03,
      "ret1m": 0.53,
      "ret3m": 2.99,
      "ret6m": 3.24,
      "ret1y": 0.37,
      "ret2y": -0.11,
      "ret3y": 14.24
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6364,
      "ret1w": 1.39,
      "ret1m": -2.8,
      "ret3m": -4.42,
      "ret6m": -17.95,
      "ret1y": -9.85,
      "ret2y": 8.73,
      "ret3y": 55.68
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.519,
      "ret1w": 7.03,
      "ret1m": -0.43,
      "ret3m": -2.01,
      "ret6m": -2.91,
      "ret1y": 71.38,
      "ret2y": 118.36,
      "ret3y": 388.2
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0667,
      "ret1w": 0.23,
      "ret1m": -0.07,
      "ret3m": -0.13,
      "ret6m": -1.08,
      "ret1y": -0.17,
      "ret2y": 1.38,
      "ret3y": 4.85
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1153,
      "ret1w": 0.23,
      "ret1m": -0.07,
      "ret3m": -0.11,
      "ret6m": -1.01,
      "ret1y": -0.04,
      "ret2y": 1.67,
      "ret3y": 5.57
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0645,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.07,
      "ret6m": 0.24,
      "ret1y": 0.69,
      "ret2y": 1.49,
      "ret3y": 2.66
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0991,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.12,
      "ret6m": 0.26,
      "ret1y": 0.76,
      "ret2y": 1.49,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1085,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.32,
      "ret1y": 0.86,
      "ret2y": 1.69,
      "ret3y": 4.28
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0762,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.08,
      "ret6m": 0.3,
      "ret1y": 0.69,
      "ret2y": 1.39,
      "ret3y": 2.75
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0907,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.11,
      "ret6m": 0.38,
      "ret1y": 0.85,
      "ret2y": 1.71,
      "ret3y": 3.4
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0669,
      "ret1w": 0.41,
      "ret1m": -0.56,
      "ret3m": -0.46,
      "ret6m": -1.82,
      "ret1y": 0.93,
      "ret2y": 5.82,
      "ret3y": 13.47
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2224,
      "ret1w": 0.53,
      "ret1m": -0.46,
      "ret3m": 0.1,
      "ret6m": -2.24,
      "ret1y": 0.41,
      "ret2y": 3.03,
      "ret3y": 8.11
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0737,
      "ret1w": 0.42,
      "ret1m": -0.55,
      "ret3m": -0.43,
      "ret6m": -1.72,
      "ret1y": 1.13,
      "ret2y": 6.25,
      "ret3y": 14.39
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0461,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.14,
      "ret6m": 0.33,
      "ret1y": 0.85,
      "ret2y": 1.72,
      "ret3y": 3.58
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1706,
      "ret1w": 0.97,
      "ret1m": -0.15,
      "ret3m": -0.09,
      "ret6m": -3.09,
      "ret1y": -3.42,
      "ret2y": 0.69,
      "ret3y": 10.61
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2155,
      "ret1w": -0.07,
      "ret1m": -0.27,
      "ret3m": -0.39,
      "ret6m": -0.63,
      "ret1y": -0.7,
      "ret2y": 3.77,
      "ret3y": 15.42
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1366,
      "ret1w": 0.15,
      "ret1m": -0.44,
      "ret3m": -0.61,
      "ret6m": -0.99,
      "ret1y": 0.61,
      "ret2y": 3.41,
      "ret3y": 10.32
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2079,
      "ret1w": 0.15,
      "ret1m": -0.44,
      "ret3m": -0.58,
      "ret6m": -0.89,
      "ret1y": 0.81,
      "ret2y": 3.83,
      "ret3y": 11.23
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.418,
      "ret1w": 3.78,
      "ret1m": 3.55,
      "ret3m": 3.91,
      "ret6m": -10.34,
      "ret1y": 42.91,
      "ret2y": 102.17,
      "ret3y": 161.97
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9981,
      "ret1w": 0.14,
      "ret1m": 0.39,
      "ret3m": 0.3,
      "ret6m": 1.46,
      "ret1y": 9.26,
      "ret2y": 10.63,
      "ret3y": 38.07
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8911,
      "ret1w": 0.37,
      "ret1m": 0.92,
      "ret3m": 0.12,
      "ret6m": -11.62,
      "ret1y": -6.96,
      "ret2y": 6.84,
      "ret3y": 60.24
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4074,
      "ret1w": 0.01,
      "ret1m": 0.42,
      "ret3m": 4.42,
      "ret6m": -0.36,
      "ret1y": 20.66,
      "ret2y": 32.35,
      "ret3y": 84.36
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9349,
      "ret1w": -0.05,
      "ret1m": -0.2,
      "ret3m": -0.49,
      "ret6m": -0.93,
      "ret1y": -2.94,
      "ret2y": -3.7,
      "ret3y": -1.91
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6501,
      "ret1w": 2.46,
      "ret1m": 1.18,
      "ret3m": -1.01,
      "ret6m": -9.61,
      "ret1y": 28.79,
      "ret2y": 55.35,
      "ret3y": 105.04
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.63,
      "ret1w": -0.13,
      "ret1m": -0.37,
      "ret3m": 0.24,
      "ret6m": -1.22,
      "ret1y": 4.75,
      "ret2y": 7.47,
      "ret3y": 24.23
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.241,
      "ret1w": -0.08,
      "ret1m": -2.67,
      "ret3m": 5.08,
      "ret6m": 15.33,
      "ret1y": 4.55,
      "ret2y": -18.36,
      "ret3y": 112.86
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.958,
      "ret1w": -0.52,
      "ret1m": -2.54,
      "ret3m": 6.21,
      "ret6m": 4.7,
      "ret1y": 0.31,
      "ret2y": -18.68,
      "ret3y": 50.16
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8433,
      "ret1w": 1.82,
      "ret1m": -0.62,
      "ret3m": 0.49,
      "ret6m": -9.79,
      "ret1y": 35.52,
      "ret2y": 82.46,
      "ret3y": 150.51
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6272,
      "ret1w": -0.77,
      "ret1m": 0.11,
      "ret3m": 10.57,
      "ret6m": 5.61,
      "ret1y": 3.6,
      "ret2y": 40.46,
      "ret3y": 63.78
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7563,
      "ret1w": 1.29,
      "ret1m": 1.89,
      "ret3m": 4.24,
      "ret6m": 0.82,
      "ret1y": 15.76,
      "ret2y": 34.21,
      "ret3y": 63.03
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3339,
      "ret1w": 1.17,
      "ret1m": -0.14,
      "ret3m": 3.74,
      "ret6m": -3.49,
      "ret1y": 10.16,
      "ret2y": 21.63,
      "ret3y": 44.74
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.291,
      "ret1w": -0.69,
      "ret1m": -1.22,
      "ret3m": -3.01,
      "ret6m": -1.83,
      "ret1y": -1.0,
      "ret2y": 4.28,
      "ret3y": -8.27
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.12,
      "ret1w": -1.07,
      "ret1m": -1.49,
      "ret3m": 8.0,
      "ret6m": -1.81,
      "ret1y": -15.17,
      "ret2y": 16.16,
      "ret3y": 57.75
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0115,
      "ret1w": 0.02,
      "ret1m": 0.09,
      "ret3m": 0.15,
      "ret6m": 0.42,
      "ret1y": 1.42,
      "ret2y": 2.09,
      "ret3y": 3.57
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0104,
      "ret1w": 0.02,
      "ret1m": 0.09,
      "ret3m": 0.16,
      "ret6m": 0.4,
      "ret1y": 1.43,
      "ret2y": 2.14,
      "ret3y": 3.74
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.416,
      "ret1w": 1.43,
      "ret1m": -0.98,
      "ret3m": -3.67,
      "ret6m": -8.29,
      "ret1y": -1.32,
      "ret2y": 1.87,
      "ret3y": 38.96
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.827,
      "ret1w": 1.87,
      "ret1m": -1.6,
      "ret3m": -3.15,
      "ret6m": -6.36,
      "ret1y": -1.36,
      "ret2y": 11.47,
      "ret3y": 66.49
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.667,
      "ret1w": -0.76,
      "ret1m": -4.38,
      "ret3m": -3.35,
      "ret6m": -1.33,
      "ret1y": -13.72,
      "ret2y": 25.43,
      "ret3y": 76.96
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1334,
      "ret1w": 0.51,
      "ret1m": -1.35,
      "ret3m": -1.42,
      "ret6m": -1.8,
      "ret1y": 1.4,
      "ret2y": 10.53,
      "ret3y": 46.98
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1946,
      "ret1w": 0.52,
      "ret1m": -1.35,
      "ret3m": -1.39,
      "ret6m": -1.7,
      "ret1y": 1.61,
      "ret2y": 10.98,
      "ret3y": 48.17
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0022,
      "ret1w": 1.33,
      "ret1m": -2.31,
      "ret3m": -2.72,
      "ret6m": -5.46,
      "ret1y": -6.34,
      "ret2y": 12.43,
      "ret3y": 69.55
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7863,
      "ret1w": 0.55,
      "ret1m": -1.04,
      "ret3m": -2.35,
      "ret6m": -4.2,
      "ret1y": -0.88,
      "ret2y": 3.71,
      "ret3y": 42.87
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5831,
      "ret1w": 0.46,
      "ret1m": -1.24,
      "ret3m": -1.14,
      "ret6m": -2.27,
      "ret1y": -8.26,
      "ret2y": 11.76,
      "ret3y": 60.02
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9561,
      "ret1w": 2.62,
      "ret1m": -1.79,
      "ret3m": -5.2,
      "ret6m": -10.28,
      "ret1y": 8.36,
      "ret2y": 15.08,
      "ret3y": 79.72
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1573,
      "ret1w": -0.8,
      "ret1m": -1.11,
      "ret3m": -0.64,
      "ret6m": 2.21,
      "ret1y": -0.44,
      "ret2y": 1.32,
      "ret3y": 32.41
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5265,
      "ret1w": 0.14,
      "ret1m": -0.42,
      "ret3m": 0.31,
      "ret6m": 4.45,
      "ret1y": 2.47,
      "ret2y": 12.96,
      "ret3y": 30.1
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4516,
      "ret1w": 0.21,
      "ret1m": 0.31,
      "ret3m": -0.75,
      "ret6m": -3.11,
      "ret1y": 14.45,
      "ret2y": 16.85,
      "ret3y": 43.22
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7578,
      "ret1w": 1.98,
      "ret1m": -1.07,
      "ret3m": -3.1,
      "ret6m": -9.2,
      "ret1y": 3.26,
      "ret2y": 9.22,
      "ret3y": 62.42
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1703,
      "ret1w": 0.29,
      "ret1m": -2.68,
      "ret3m": 5.51,
      "ret6m": -10.3,
      "ret1y": -0.15,
      "ret2y": 7.23,
      "ret3y": 53.04
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1722,
      "ret1w": 0.3,
      "ret1m": -2.66,
      "ret3m": 5.52,
      "ret6m": -10.25,
      "ret1y": -0.17,
      "ret2y": 7.31,
      "ret3y": 52.51
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3812,
      "ret1w": -0.66,
      "ret1m": -2.22,
      "ret3m": 1.45,
      "ret6m": -11.47,
      "ret1y": -5.01,
      "ret2y": 4.29,
      "ret3y": 39.76
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4129,
      "ret1w": -0.65,
      "ret1m": -2.21,
      "ret3m": 1.49,
      "ret6m": -11.37,
      "ret1y": -4.81,
      "ret2y": 4.71,
      "ret3y": 40.9
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9691,
      "ret1w": -1.15,
      "ret1m": -3.57,
      "ret3m": 0.36,
      "ret6m": -16.98,
      "ret1y": -1.35,
      "ret2y": 10.34,
      "ret3y": 61.63
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1645,
      "ret1w": 0.09,
      "ret1m": -0.2,
      "ret3m": -0.56,
      "ret6m": -0.32,
      "ret1y": -0.15,
      "ret2y": 1.74,
      "ret3y": 7.73
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1844,
      "ret1w": 0.08,
      "ret1m": -0.19,
      "ret3m": -0.53,
      "ret6m": -0.24,
      "ret1y": -0.01,
      "ret2y": 2.05,
      "ret3y": 8.38
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0845,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.09,
      "ret6m": 0.32,
      "ret1y": 0.85,
      "ret2y": 1.79,
      "ret3y": 3.25
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4099,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": -0.08,
      "ret6m": 0.01,
      "ret1y": 0.06,
      "ret2y": 0.56,
      "ret3y": 10.87
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4622,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": -0.04,
      "ret6m": 0.11,
      "ret1y": 0.26,
      "ret2y": 0.97,
      "ret3y": 11.75
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1137,
      "ret1w": 2.13,
      "ret1m": -0.87,
      "ret3m": -1.81,
      "ret6m": 1.84,
      "ret1y": 11.76,
      "ret2y": 22.72,
      "ret3y": 67.37
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.242,
      "ret1w": 1.05,
      "ret1m": -1.4,
      "ret3m": -2.15,
      "ret6m": -0.39,
      "ret1y": 5.13,
      "ret2y": 9.53,
      "ret3y": 50.29
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 4.4762
      },
      {
        "date": "2026-09-07",
        "nav": 4.6631
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 4.0311
      },
      {
        "date": "2026-09-07",
        "nav": 4.211
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 5.5255
      },
      {
        "date": "2026-09-07",
        "nav": 5.9697
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 0.7259
      },
      {
        "date": "2026-09-07",
        "nav": 0.7189
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.0469
      },
      {
        "date": "2026-09-07",
        "nav": 2.0638
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.689
      },
      {
        "date": "2026-09-07",
        "nav": 2.7003
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 5.5184
      },
      {
        "date": "2026-09-07",
        "nav": 5.5023
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.884
      },
      {
        "date": "2026-09-07",
        "nav": 1.91
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.3255
      },
      {
        "date": "2026-09-07",
        "nav": 1.3428
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 3.306
      },
      {
        "date": "2026-09-07",
        "nav": 3.397
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.137
      },
      {
        "date": "2026-09-07",
        "nav": 1.132
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.361
      },
      {
        "date": "2026-09-07",
        "nav": 2.371
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.626
      },
      {
        "date": "2026-09-07",
        "nav": 1.7028
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.9766
      },
      {
        "date": "2026-09-07",
        "nav": 1.9582
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.6309
      },
      {
        "date": "2026-09-07",
        "nav": 1.6616
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.2426
      },
      {
        "date": "2026-09-07",
        "nav": 2.4002
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.5892
      },
      {
        "date": "2026-09-07",
        "nav": 2.5768
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.021
      },
      {
        "date": "2026-09-07",
        "nav": 1.017
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.3787
      },
      {
        "date": "2026-09-07",
        "nav": 2.3454
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.3184
      },
      {
        "date": "2026-09-07",
        "nav": 1.3273
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.2389
      },
      {
        "date": "2026-09-07",
        "nav": 1.2624
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.3179
      },
      {
        "date": "2026-09-07",
        "nav": 1.3429
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.0848
      },
      {
        "date": "2026-09-07",
        "nav": 1.0875
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.058
      },
      {
        "date": "2026-09-07",
        "nav": 1.0607
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 0.7295
      },
      {
        "date": "2026-09-07",
        "nav": 0.7232
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 0.748
      },
      {
        "date": "2026-09-07",
        "nav": 0.7415
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.7068
      },
      {
        "date": "2026-09-07",
        "nav": 2.8668
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 2.5079
      },
      {
        "date": "2026-09-07",
        "nav": 2.5042
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 0.7431
      },
      {
        "date": "2026-09-07",
        "nav": 0.7365
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 4.1262
      },
      {
        "date": "2026-09-07",
        "nav": 4.1558
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 0.5026
      },
      {
        "date": "2026-09-07",
        "nav": 0.5095
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 0.5122
      },
      {
        "date": "2026-09-07",
        "nav": 0.5193
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.2868
      },
      {
        "date": "2026-09-07",
        "nav": 1.2825
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.1276
      },
      {
        "date": "2026-09-07",
        "nav": 1.1244
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.3841
      },
      {
        "date": "2026-09-07",
        "nav": 1.3925
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 3.0453
      },
      {
        "date": "2026-09-07",
        "nav": 3.0358
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 3.228
      },
      {
        "date": "2026-09-07",
        "nav": 3.37
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 1.5209
      },
      {
        "date": "2026-09-07",
        "nav": 1.5052
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 0.6277
      },
      {
        "date": "2026-09-07",
        "nav": 0.6364
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-04",
        "nav": 13.565
      },
      {
        "date": "2026-09-07",
        "nav": 14.519
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 4.6631,
      "price": 4.6631,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 4.211,
      "price": 4.211,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.14,
      "nav": 5.9697,
      "price": 5.9697,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.03,
      "nav": 0.7189,
      "price": 0.7189,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.0638,
      "price": 2.0638,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.7003,
      "price": 2.7003,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.5023,
      "price": 5.5023,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.91,
      "price": 1.91,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.3428,
      "price": 1.3428,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 3.397,
      "price": 3.397,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.08,
      "nav": 1.132,
      "price": 1.132,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.371,
      "price": 2.371,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.7028,
      "price": 1.7028,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.9582,
      "price": 1.9582,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.6616,
      "price": 1.6616,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.4002,
      "price": 2.4002,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.5768,
      "price": 2.5768,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.017,
      "price": 1.017,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.3454,
      "price": 2.3454,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.3273,
      "price": 1.3273,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.22,
      "sharpe": 0.46,
      "calmar": 0.46
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.26,
      "sharpe": 1.37,
      "calmar": 1.37
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 4.12,
      "sharpe": 6.7,
      "calmar": 6.7
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.89,
      "sharpe": -1.45,
      "calmar": -1.45
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 4.0,
      "sharpe": -3.85,
      "calmar": -3.85
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.08,
      "sharpe": -4.48,
      "calmar": -4.48
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.4,
      "sharpe": -0.98,
      "calmar": -0.98
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.94,
      "sharpe": -0.52,
      "calmar": -0.52
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.54,
      "sharpe": 0.16,
      "calmar": 0.16
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 4.71,
      "sharpe": 3.86,
      "calmar": 3.86
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.28,
      "sharpe": -0.55,
      "calmar": -0.55
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.45,
      "sharpe": -2.56,
      "calmar": -2.56
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 6.23,
      "sharpe": -5.36,
      "calmar": -5.36
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.8,
      "sharpe": 0.22,
      "calmar": 0.22
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 2.34,
      "sharpe": -0.6,
      "calmar": -0.6
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.3,
      "sharpe": 5.64,
      "calmar": 5.64
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.5,
      "sharpe": -1.25,
      "calmar": -1.25
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 1.02,
      "sharpe": 0.8,
      "calmar": 0.8
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.63,
      "sharpe": -1.23,
      "calmar": -1.23
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 2.92,
      "sharpe": 0.23,
      "calmar": 0.23
    }
  ],
  "news": [
    {
      "title": "9月7日，厦门市政府官网发布关于印发《厦门市“十五五”战略性新兴产业发展专项规划》的通知。根据规划发展目标，厦门将围绕城市发展转型升级，聚焦产业主攻方向，夯实关键支撑，做强科技创新核心驱动力，壮大发展新能源、新材料、生物医药、文旅创意等战略性新兴产业，前瞻布局人工智能、氢能、生物制造、深海空天开发、未来网络和量子科技、脑机接口等未来产业，全力提升产业核心竞争力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:38",
      "impact": "neutral"
    },
    {
      "title": "8月28日，五部门联合出手，商品房销售制度改革、个人房贷期限延长至最长40年、资本市场支持房企融资，“三箭齐发”。十天过去，政策涟漪正从一线城市向强二线城市层层扩散。《每日经济新闻》记者（以下简称每经记者）梳理发现，新政后多地楼市开始“躁动”。安居客数据显示，新政后首周末深圳平台浏览量环比上涨582%；“金九银十”首个周六，上海二手房成交1205套，较前一日上涨89.5%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:35",
      "impact": "neutral"
    },
    {
      "title": "中新社昆明9月7日电(记者阮煜琳韩帅南)《昆明—蒙特利尔全球生物多样性框架》(下称“昆蒙框架”)实施进展全球审议昆明对话会7日在云南昆明举行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:19",
      "impact": "neutral"
    },
    {
      "title": "8000亿元新型政策性金融工具启动。近日，2026年新型政策性金融工具首批资金在浙江、云南、新疆、四川等地相继投放。据公开资料显示，新型政策性金融工具是国家为支持重大战略、补充重点项目资本金而创设的金融工具，用于支持科技创新、扩大消费、绿色低碳、基础设施等领域。2026年《政府工作报告》提出：“发行新型政策性金融工具8000亿元，带动更多社会资本参与投资。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:07",
      "impact": "neutral"
    },
    {
      "title": "中小企业是推动创新、促进就业、改善民生的重要力量。为持续推动中小企业高质量发展，工业和信息化部、国家发展改革委、科技部等十部门9月3日联合发布《促进中小企业发展“十五五”规划》（以下简称《规划》）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:00",
      "impact": "neutral"
    },
    {
      "title": "9月7日，2026年“活力中国调研行”河南站采访活动情况介绍会在郑州举行。大河财立方记者现场获悉，今年上半年，河南全省农林牧渔业总产值4750.82亿元，同比增长4.3%，高于全国0.4个百分点；第一产业增加值2279.18亿元，同比增长4.0%，高于全国0.3个百分点，农业经济两大核心指标总量均居全国第2位、增速均创4年同期新高。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:53",
      "impact": "neutral"
    },
    {
      "title": "个人住房贷款业务已步入深度调整阶段。中报季收官，梳理A股上市银行半年报数据可见，还款规模超过新增房贷投放已成为共性现象。截至上半年末，6家国有大行与9家股份制银行个人住房贷款合计余额约30.48万亿元，较2025年年末下滑1.95%，半年内存量规模缩水6072.85亿元。其中，6家国有大行房贷余额合计减少超5100亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:44",
      "impact": "neutral"
    },
    {
      "title": "新华社北京9月7日电题：未来，乡村振兴投入机制这样完善新华社记者胡璐记者7日从农业农村部了解到，农业农村部、中央农办、国家发展改革委、财政部、中国人民银行、金融监管总局近日联合印发《坚持农业农村优先发展完善乡村振兴投入机制实施方案》，对进一步完善乡村振兴投入机制进行了部署。为何要发布这一实施方案？党中央、国务院高度重视“三农”工作。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:36",
      "impact": "neutral"
    },
    {
      "title": "保险业迎来近年力度最大的一次集中资本补充行动。9月6日下午，中国人寿保险（集团）公司（下称“中国人寿集团”）、中国人民保险集团股份有限公司（下称“中国人保”）、中国太平保险集团有限责任公司（下称“中国太平”）、中国出口信用保险公司（下称“中国信保”）、中国再保险（集团）股份有限公司（下称“中国再保”）相继官宣将获财政部注资，涉及资金规模合计达700亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:29",
      "impact": "neutral"
    },
    {
      "title": "财联社9月7日讯（记者梁柯志）尽管当前个贷市场面临需求不足、供给过剩等多重不利因素，但仍然有机构在努力寻找出路。近日，财联社记者的一线调研反馈显示，广州深圳地区部分中小银行的经营贷实际获批利率已经突破4%；部分银行分支机构甚至透露，其高利率产品占比已经超三分之一，市场接受度很好。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:19",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 54,
    "label": "中性",
    "upDownRatio": "4,305/847",
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
