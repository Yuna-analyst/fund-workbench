// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-21 16:23:57
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-21 16:23 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-21",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3949.91,
      "change": 38.04,
      "changePct": "+0.97%",
      "high": 3950.94,
      "low": 3918.13,
      "volume": 502354877.0,
      "amount": 946819120000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13730.02,
      "change": 89.15,
      "changePct": "+0.65%",
      "high": 13779.0,
      "low": 13643.95,
      "volume": 631708071.0,
      "amount": 1084694360000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3399.59,
      "change": 26.91,
      "changePct": "+0.80%",
      "high": 3429.27,
      "low": 3373.93,
      "volume": 176424755.0,
      "amount": 522222400000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1657.48,
      "change": 4.85,
      "changePct": "+0.29%",
      "high": 1678.59,
      "low": 1643.17,
      "volume": 7600285.0,
      "amount": 89250530000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4539.57,
      "change": 32.18,
      "changePct": "+0.71%",
      "high": 4540.55,
      "low": 4512.15,
      "volume": 186361542.0,
      "amount": 495435930000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7850.48,
      "change": 50.87,
      "changePct": "+0.65%",
      "high": 7869.35,
      "low": 7809.59,
      "volume": 153847526.0,
      "amount": 348295680000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.49万亿",
      "label": "成交额",
      "rawAmount": 3486718020000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,542/1,228",
      "label": "涨/跌家数",
      "rawUp": 3542,
      "rawDown": 1228,
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
    "totalInflow": 26.15,
    "totalOutflow": 0,
    "netFlow": 26.15,
    "netFlowTrend": [
      5.23,
      10.46,
      15.69,
      20.92,
      26.15
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
      "inflow": 8.63,
      "pct": 1.14
    },
    {
      "name": "创新药",
      "inflow": 3.61,
      "pct": 4.07
    },
    {
      "name": "5G",
      "inflow": 3.02,
      "pct": 1.03
    },
    {
      "name": "券商",
      "inflow": 2.29,
      "pct": 0.99
    },
    {
      "name": "煤炭",
      "inflow": 2.13,
      "pct": 2.64
    },
    {
      "name": "医疗",
      "inflow": 1.6,
      "pct": 2.35
    },
    {
      "name": "医药",
      "inflow": 1.57,
      "pct": 3.49
    },
    {
      "name": "地产",
      "inflow": 1.16,
      "pct": 4.23
    },
    {
      "name": "白酒",
      "inflow": 1.08,
      "pct": 1.22
    },
    {
      "name": "人工智能",
      "inflow": 1.06,
      "pct": 0.78
    },
    {
      "name": "军工",
      "inflow": 0.74,
      "pct": 1.38
    },
    {
      "name": "传媒",
      "inflow": 0.6,
      "pct": 0.86
    },
    {
      "name": "光伏",
      "inflow": 0.4,
      "pct": 0.61
    },
    {
      "name": "农业",
      "inflow": 0.26,
      "pct": 1.23
    },
    {
      "name": "游戏",
      "inflow": 0.2,
      "pct": 0.93
    },
    {
      "name": "云计算",
      "inflow": 0.2,
      "pct": 0.49
    },
    {
      "name": "钢铁",
      "inflow": 0.19,
      "pct": 1.05
    },
    {
      "name": "电子",
      "inflow": 0.14,
      "pct": 0.95
    },
    {
      "name": "计算机",
      "inflow": 0.05,
      "pct": 0.71
    },
    {
      "name": "食品",
      "inflow": 0.03,
      "pct": 0.61
    }
  ],
  "sectors": [
    {
      "name": "地产",
      "code": "512200",
      "price": 1.282,
      "changePct": 4.23,
      "change": 0.052,
      "turnover": 3.85
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.869,
      "changePct": 4.07,
      "change": 0.034,
      "turnover": 12.03
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.386,
      "changePct": 3.49,
      "change": 0.013,
      "turnover": 5.23
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.282,
      "changePct": 2.64,
      "change": 0.033,
      "turnover": 7.11
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.348,
      "changePct": 2.35,
      "change": 0.008,
      "turnover": 5.33
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.176,
      "changePct": 1.38,
      "change": 0.016,
      "turnover": 2.46
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.741,
      "changePct": 1.23,
      "change": 0.009,
      "turnover": 0.88
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.416,
      "changePct": 1.22,
      "change": 0.005,
      "turnover": 3.6
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.712,
      "changePct": 1.14,
      "change": 0.008,
      "turnover": 28.77
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.15,
      "changePct": 1.05,
      "change": 0.012,
      "turnover": 0.63
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.081,
      "changePct": 1.03,
      "change": 0.011,
      "turnover": 10.08
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.51,
      "changePct": 0.99,
      "change": 0.005,
      "turnover": 7.63
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.852,
      "changePct": 0.95,
      "change": 0.008,
      "turnover": 0.47
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.082,
      "changePct": 0.93,
      "change": 0.01,
      "turnover": 0.66
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.822,
      "changePct": 0.86,
      "change": 0.007,
      "turnover": 2.0
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.031,
      "changePct": 0.78,
      "change": 0.008,
      "turnover": 3.55
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.142,
      "changePct": 0.71,
      "change": 0.008,
      "turnover": 0.16
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.82,
      "changePct": 0.61,
      "change": 0.005,
      "turnover": 1.33
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.491,
      "changePct": 0.61,
      "change": 0.003,
      "turnover": 0.11
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.647,
      "changePct": 0.49,
      "change": 0.008,
      "turnover": 0.66
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.839,
      "changePct": 0.48,
      "change": 0.004,
      "turnover": 8.27
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.157,
      "changePct": 0.43,
      "change": 0.005,
      "turnover": 7.06
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.011,
      "changePct": 0.4,
      "change": 0.004,
      "turnover": 0.04
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.044,
      "changePct": 0.29,
      "change": 0.003,
      "turnover": 9.89
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.504,
      "changePct": 0.07,
      "change": 0.001,
      "turnover": 1.03
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.335,
      "changePct": 0.04,
      "change": 0.001,
      "turnover": 0.98
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.729,
      "changePct": -0.17,
      "change": -0.003,
      "turnover": 4.34
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.405,
      "changePct": -0.64,
      "change": -0.009,
      "turnover": 0.39
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.749,
      "changePct": 0.29,
      "amount": 54.27,
      "netFlow": 13.57
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.872,
      "changePct": 0.54,
      "amount": 34.94,
      "netFlow": 8.74
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.608,
      "changePct": 0.57,
      "amount": 26.24,
      "netFlow": 6.56
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.002,
      "changePct": 0.91,
      "amount": 18.29,
      "netFlow": 4.57
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.044,
      "changePct": 0.29,
      "amount": 9.89,
      "netFlow": 2.47
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.51,
      "changePct": 0.99,
      "amount": 7.63,
      "netFlow": 1.91
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.476,
      "changePct": 0.61,
      "amount": 7.38,
      "netFlow": 1.85
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.386,
      "changePct": 3.49,
      "amount": 5.23,
      "netFlow": 1.31
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.81,
      "changePct": 0.61,
      "amount": 4.37,
      "netFlow": 1.09
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.335,
      "changePct": 0.04,
      "amount": 0.98,
      "netFlow": 0.24
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.608,
      "changePct": 0.57,
      "amount": 26.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.002,
      "changePct": 0.91,
      "amount": 18.29,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.872,
      "changePct": 0.54,
      "amount": 34.94,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.81,
      "changePct": 0.61,
      "amount": 4.37,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.476,
      "changePct": 0.61,
      "amount": 7.38,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "地产",
      "turnover": 3.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 12.03,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 5.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 5.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.88,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 28.77,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.63,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 10.08,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "券商",
      "turnover": 7.63,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.47,
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
      "name": "传媒",
      "turnover": 2.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 3.55,
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
      "name": "光伏",
      "turnover": 1.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.66,
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
      "nav": 4.7827,
      "ret1w": 0.42,
      "ret1m": 6.41,
      "ret3m": 7.1,
      "ret6m": -7.86,
      "ret1y": 17.25,
      "ret2y": 25.24,
      "ret3y": 179.54
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.2411,
      "ret1w": 0.96,
      "ret1m": 4.27,
      "ret3m": -2.59,
      "ret6m": -17.42,
      "ret1y": 9.54,
      "ret2y": 4.41,
      "ret3y": 73.46
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 6.1964,
      "ret1w": -0.83,
      "ret1m": 8.41,
      "ret3m": 6.2,
      "ret6m": -10.11,
      "ret1y": 51.22,
      "ret2y": 90.93,
      "ret3y": 340.09
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6998,
      "ret1w": 0.57,
      "ret1m": -0.14,
      "ret3m": 0.33,
      "ret6m": 7.96,
      "ret1y": -6.56,
      "ret2y": -16.63,
      "ret3y": 5.61
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0181,
      "ret1w": 0.48,
      "ret1m": 2.09,
      "ret3m": -8.92,
      "ret6m": -16.34,
      "ret1y": -32.71,
      "ret2y": -27.0,
      "ret3y": 18.15
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7351,
      "ret1w": 0.39,
      "ret1m": 2.47,
      "ret3m": -0.27,
      "ret6m": -5.83,
      "ret1y": -21.48,
      "ret2y": -18.27,
      "ret3y": 36.7
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3855,
      "ret1w": 0.1,
      "ret1m": -0.57,
      "ret3m": -1.8,
      "ret6m": 4.25,
      "ret1y": -4.66,
      "ret2y": 8.23,
      "ret3y": 59.15
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.985,
      "ret1w": 1.38,
      "ret1m": 6.04,
      "ret3m": 4.31,
      "ret6m": -8.82,
      "ret1y": 5.47,
      "ret2y": 8.17,
      "ret3y": 86.04
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3646,
      "ret1w": 1.05,
      "ret1m": 3.95,
      "ret3m": 0.27,
      "ret6m": -6.6,
      "ret1y": 5.58,
      "ret2y": 9.49,
      "ret3y": 51.05
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.514,
      "ret1w": 0.14,
      "ret1m": 7.33,
      "ret3m": 0.66,
      "ret6m": -12.43,
      "ret1y": 36.78,
      "ret2y": 63.52,
      "ret3y": 316.35
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.107,
      "ret1w": 1.37,
      "ret1m": 1.19,
      "ret3m": 0.64,
      "ret6m": 10.15,
      "ret1y": -3.57,
      "ret2y": -16.07,
      "ret3y": 8.85
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.445,
      "ret1w": 4.31,
      "ret1m": 5.89,
      "ret3m": 0.99,
      "ret6m": 10.38,
      "ret1y": -6.96,
      "ret2y": -9.44,
      "ret3y": 44.5
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7992,
      "ret1w": -0.56,
      "ret1m": 11.01,
      "ret3m": -0.08,
      "ret6m": -31.47,
      "ret1y": -44.9,
      "ret2y": -37.8,
      "ret3y": 36.33
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9024,
      "ret1w": 0.43,
      "ret1m": -0.54,
      "ret3m": -0.13,
      "ret6m": 5.48,
      "ret1y": 3.88,
      "ret2y": -5.94,
      "ret3y": 8.76
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.7037,
      "ret1w": 1.06,
      "ret1m": 4.3,
      "ret3m": 2.88,
      "ret6m": -6.51,
      "ret1y": 4.48,
      "ret2y": 12.4,
      "ret3y": 84.56
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.4764,
      "ret1w": 0.58,
      "ret1m": 7.01,
      "ret3m": 0.17,
      "ret6m": -25.62,
      "ret1y": 26.52,
      "ret2y": 81.08,
      "ret3y": 259.68
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5983,
      "ret1w": 1.88,
      "ret1m": 2.1,
      "ret3m": 2.28,
      "ret6m": 4.51,
      "ret1y": -2.49,
      "ret2y": -3.02,
      "ret3y": 27.65
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.06,
      "ret1w": 4.64,
      "ret1m": 6.0,
      "ret3m": -1.76,
      "ret6m": 20.87,
      "ret1y": 12.29,
      "ret2y": -10.55,
      "ret3y": 16.1
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2824,
      "ret1w": 0.4,
      "ret1m": -1.67,
      "ret3m": -1.99,
      "ret6m": 3.14,
      "ret1y": -7.11,
      "ret2y": 3.58,
      "ret3y": 15.79
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3479,
      "ret1w": 0.6,
      "ret1m": 3.16,
      "ret3m": 0.87,
      "ret6m": 2.88,
      "ret1y": 8.88,
      "ret2y": 21.76,
      "ret3y": 89.13
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2693,
      "ret1w": 0.66,
      "ret1m": 2.75,
      "ret3m": -1.98,
      "ret6m": -12.72,
      "ret1y": 1.04,
      "ret2y": 12.5,
      "ret3y": 55.74
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3505,
      "ret1w": 0.66,
      "ret1m": 2.76,
      "ret3m": -1.94,
      "ret6m": -12.63,
      "ret1y": 1.23,
      "ret2y": 12.94,
      "ret3y": 56.98
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0805,
      "ret1w": 0.08,
      "ret1m": -0.07,
      "ret3m": -1.42,
      "ret6m": -3.25,
      "ret1y": 0.24,
      "ret2y": 1.09,
      "ret3y": 8.36
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0541,
      "ret1w": 0.09,
      "ret1m": -0.07,
      "ret3m": -1.38,
      "ret6m": -3.1,
      "ret1y": 0.54,
      "ret2y": 1.71,
      "ret3y": 9.68
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7085,
      "ret1w": 0.44,
      "ret1m": 0.64,
      "ret3m": -1.73,
      "ret6m": -1.54,
      "ret1y": -8.42,
      "ret2y": -11.17,
      "ret3y": 10.96
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7266,
      "ret1w": 0.44,
      "ret1m": 0.64,
      "ret3m": -1.7,
      "ret6m": -1.42,
      "ret1y": -8.18,
      "ret2y": -10.73,
      "ret3y": 12.08
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.9289,
      "ret1w": 0.59,
      "ret1m": 4.32,
      "ret3m": 2.49,
      "ret6m": -16.38,
      "ret1y": 39.48,
      "ret2y": 59.06,
      "ret3y": 183.89
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5167,
      "ret1w": 1.59,
      "ret1m": 4.12,
      "ret3m": -1.7,
      "ret6m": -4.56,
      "ret1y": 6.86,
      "ret2y": 16.67,
      "ret3y": 95.23
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7233,
      "ret1w": 1.32,
      "ret1m": 1.99,
      "ret3m": -2.52,
      "ret6m": -12.7,
      "ret1y": -14.64,
      "ret2y": -11.94,
      "ret3y": 16.72
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.2195,
      "ret1w": 1.59,
      "ret1m": 6.35,
      "ret3m": -0.55,
      "ret6m": -10.85,
      "ret1y": 24.17,
      "ret2y": 36.5,
      "ret3y": 160.59
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5127,
      "ret1w": 0.41,
      "ret1m": 2.6,
      "ret3m": 0.37,
      "ret6m": -17.01,
      "ret1y": 3.28,
      "ret2y": 10.45,
      "ret3y": 57.37
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5226,
      "ret1w": 0.42,
      "ret1m": 2.61,
      "ret3m": 0.4,
      "ret6m": -16.93,
      "ret1y": 3.49,
      "ret2y": 10.88,
      "ret3y": 58.65
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2687,
      "ret1w": 0.01,
      "ret1m": -1.11,
      "ret3m": -0.56,
      "ret6m": 0.82,
      "ret1y": -1.86,
      "ret2y": -1.36,
      "ret3y": 0.33
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.121,
      "ret1w": 0.65,
      "ret1m": 0.91,
      "ret3m": -0.87,
      "ret6m": 4.1,
      "ret1y": -1.32,
      "ret2y": -1.11,
      "ret3y": 20.44
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3999,
      "ret1w": 0.94,
      "ret1m": 1.49,
      "ret3m": -3.64,
      "ret6m": -15.82,
      "ret1y": 1.94,
      "ret2y": -18.64,
      "ret3y": 18.14
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0299,
      "ret1w": 1.16,
      "ret1m": 1.4,
      "ret3m": 0.98,
      "ret6m": 0.74,
      "ret1y": -5.32,
      "ret2y": 10.6,
      "ret3y": 57.95
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.461,
      "ret1w": 0.49,
      "ret1m": 6.46,
      "ret3m": 2.94,
      "ret6m": -28.08,
      "ret1y": 30.06,
      "ret2y": 59.05,
      "ret3y": 230.88
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4991,
      "ret1w": 0.24,
      "ret1m": -1.82,
      "ret3m": 1.68,
      "ret6m": 5.93,
      "ret1y": -0.33,
      "ret2y": 0.89,
      "ret3y": 15.59
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6207,
      "ret1w": -0.54,
      "ret1m": 2.38,
      "ret3m": -3.9,
      "ret6m": -27.86,
      "ret1y": -3.12,
      "ret2y": 2.82,
      "ret3y": 53.49
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.29,
      "ret1w": -0.29,
      "ret1m": 4.17,
      "ret3m": 3.76,
      "ret6m": -19.55,
      "ret1y": 69.98,
      "ret2y": 111.63,
      "ret3y": 412.06
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0682,
      "ret1w": 0.13,
      "ret1m": 0.24,
      "ret3m": -0.01,
      "ret6m": -1.72,
      "ret1y": 0.5,
      "ret2y": 1.76,
      "ret3y": 5.11
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.117,
      "ret1w": 0.13,
      "ret1m": 0.25,
      "ret3m": 0.02,
      "ret6m": -1.66,
      "ret1y": 0.63,
      "ret2y": 2.05,
      "ret3y": 5.82
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0655,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.14,
      "ret6m": 0.37,
      "ret1y": 0.74,
      "ret2y": 1.59,
      "ret3y": 2.66
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0998,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.35,
      "ret1y": 0.76,
      "ret2y": 1.54,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1093,
      "ret1w": 0.03,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.4,
      "ret1y": 0.86,
      "ret2y": 1.74,
      "ret3y": 4.3
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0767,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.07,
      "ret6m": 0.34,
      "ret1y": 0.72,
      "ret2y": 1.49,
      "ret3y": 2.66
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0913,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.09,
      "ret6m": 0.41,
      "ret1y": 0.88,
      "ret2y": 1.8,
      "ret3y": 3.31
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0713,
      "ret1w": 0.39,
      "ret1m": 1.17,
      "ret3m": 0.07,
      "ret6m": -3.24,
      "ret1y": 2.93,
      "ret2y": 6.28,
      "ret3y": 13.38
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2313,
      "ret1w": 0.5,
      "ret1m": 1.52,
      "ret3m": 0.73,
      "ret6m": -3.4,
      "ret1y": 2.57,
      "ret2y": 3.98,
      "ret3y": 8.52
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0783,
      "ret1w": 0.39,
      "ret1m": 1.18,
      "ret3m": 0.1,
      "ret6m": -3.14,
      "ret1y": 3.14,
      "ret2y": 6.71,
      "ret3y": 14.31
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.047,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.16,
      "ret6m": 0.4,
      "ret1y": 0.86,
      "ret2y": 1.79,
      "ret3y": 3.6
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.179,
      "ret1w": 0.17,
      "ret1m": 1.18,
      "ret3m": 0.41,
      "ret6m": -2.2,
      "ret1y": -1.65,
      "ret2y": 0.55,
      "ret3y": 11.35
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2103,
      "ret1w": 0.02,
      "ret1m": -0.02,
      "ret3m": -0.53,
      "ret6m": -1.21,
      "ret1y": -0.12,
      "ret2y": 2.33,
      "ret3y": 14.92
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.14,
      "ret1w": 0.17,
      "ret1m": 0.44,
      "ret3m": -0.11,
      "ret6m": -2.28,
      "ret1y": 1.98,
      "ret2y": 3.2,
      "ret3y": 10.96
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2118,
      "ret1w": 0.17,
      "ret1m": 0.45,
      "ret3m": -0.07,
      "ret6m": -2.17,
      "ret1y": 2.18,
      "ret2y": 3.63,
      "ret3y": 11.89
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.428,
      "ret1w": 3.54,
      "ret1m": 0.5,
      "ret3m": 1.04,
      "ret6m": -15.78,
      "ret1y": 39.14,
      "ret2y": 81.6,
      "ret3y": 154.51
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9812,
      "ret1w": 0.29,
      "ret1m": 0.06,
      "ret3m": 0.29,
      "ret6m": 1.94,
      "ret1y": 11.45,
      "ret2y": 5.98,
      "ret3y": 37.75
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8104,
      "ret1w": 0.44,
      "ret1m": 0.59,
      "ret3m": -3.42,
      "ret6m": -15.89,
      "ret1y": -11.77,
      "ret2y": -4.05,
      "ret3y": 53.03
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4465,
      "ret1w": 0.41,
      "ret1m": 3.29,
      "ret3m": 4.39,
      "ret6m": 1.65,
      "ret1y": 28.06,
      "ret2y": 24.38,
      "ret3y": 78.86
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.924,
      "ret1w": -0.29,
      "ret1m": -0.39,
      "ret3m": -1.47,
      "ret6m": -2.13,
      "ret1y": -3.22,
      "ret2y": -5.22,
      "ret3y": -2.98
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6643,
      "ret1w": 2.38,
      "ret1m": -0.05,
      "ret3m": -1.31,
      "ret6m": -12.8,
      "ret1y": 27.74,
      "ret2y": 44.06,
      "ret3y": 103.91
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.54,
      "ret1w": -0.18,
      "ret1m": -0.94,
      "ret3m": -1.37,
      "ret6m": -3.12,
      "ret1y": 6.65,
      "ret2y": 3.42,
      "ret3y": 21.07
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.181,
      "ret1w": 1.11,
      "ret1m": 2.52,
      "ret3m": -5.97,
      "ret6m": 9.15,
      "ret1y": -9.98,
      "ret2y": -27.23,
      "ret3y": 93.61
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.941,
      "ret1w": 1.73,
      "ret1m": 1.62,
      "ret3m": -3.88,
      "ret6m": -0.42,
      "ret1y": -9.43,
      "ret2y": -25.67,
      "ret3y": 50.32
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8693,
      "ret1w": 2.74,
      "ret1m": 0.03,
      "ret3m": -0.96,
      "ret6m": -12.94,
      "ret1y": 33.13,
      "ret2y": 70.81,
      "ret3y": 150.27
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6052,
      "ret1w": -0.51,
      "ret1m": -0.99,
      "ret3m": 2.15,
      "ret6m": 11.21,
      "ret1y": 5.81,
      "ret2y": 35.05,
      "ret3y": 58.95
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7381,
      "ret1w": 0.63,
      "ret1m": -1.37,
      "ret3m": 2.01,
      "ret6m": -2.01,
      "ret1y": 12.32,
      "ret2y": 25.35,
      "ret3y": 60.94
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3012,
      "ret1w": 1.1,
      "ret1m": -1.11,
      "ret3m": -1.34,
      "ret6m": -5.79,
      "ret1y": 3.99,
      "ret2y": 10.71,
      "ret3y": 39.46
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.248,
      "ret1w": -0.95,
      "ret1m": -2.27,
      "ret3m": -5.24,
      "ret6m": -3.78,
      "ret1y": -0.32,
      "ret2y": 0.48,
      "ret3y": -13.17
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.078,
      "ret1w": 0.19,
      "ret1m": -0.24,
      "ret3m": -0.29,
      "ret6m": 1.86,
      "ret1y": -12.06,
      "ret2y": 11.0,
      "ret3y": 51.74
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0123,
      "ret1w": 0.02,
      "ret1m": 0.08,
      "ret3m": 0.15,
      "ret6m": 0.49,
      "ret1y": 1.44,
      "ret2y": 2.27,
      "ret3y": 3.49
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0113,
      "ret1w": 0.02,
      "ret1m": 0.09,
      "ret3m": 0.16,
      "ret6m": 0.47,
      "ret1y": 1.45,
      "ret2y": 2.33,
      "ret3y": 3.66
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.407,
      "ret1w": 0.72,
      "ret1m": 2.03,
      "ret3m": -2.29,
      "ret6m": -11.4,
      "ret1y": -1.05,
      "ret2y": -1.4,
      "ret3y": 40.42
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.815,
      "ret1w": 0.61,
      "ret1m": 2.51,
      "ret3m": -2.73,
      "ret6m": -11.03,
      "ret1y": 1.96,
      "ret2y": 6.83,
      "ret3y": 66.67
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6381,
      "ret1w": 0.46,
      "ret1m": -0.71,
      "ret3m": -4.61,
      "ret6m": -5.85,
      "ret1y": -4.58,
      "ret2y": 23.63,
      "ret3y": 69.75
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1334,
      "ret1w": 0.62,
      "ret1m": 1.51,
      "ret3m": -0.81,
      "ret6m": -5.37,
      "ret1y": 3.56,
      "ret2y": 10.35,
      "ret3y": 48.25
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1949,
      "ret1w": 0.62,
      "ret1m": 1.52,
      "ret3m": -0.78,
      "ret6m": -5.27,
      "ret1y": 3.77,
      "ret2y": 10.8,
      "ret3y": 49.45
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0253,
      "ret1w": 0.62,
      "ret1m": 3.54,
      "ret3m": 0.0,
      "ret6m": -8.98,
      "ret1y": 1.68,
      "ret2y": 9.83,
      "ret3y": 72.9
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.775,
      "ret1w": 0.67,
      "ret1m": 1.3,
      "ret3m": -1.5,
      "ret6m": -7.07,
      "ret1y": 0.44,
      "ret2y": 2.07,
      "ret3y": 43.26
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5847,
      "ret1w": 0.64,
      "ret1m": 1.75,
      "ret3m": 0.11,
      "ret6m": -2.43,
      "ret1y": -2.19,
      "ret2y": 10.31,
      "ret3y": 61.89
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9644,
      "ret1w": 0.89,
      "ret1m": 3.48,
      "ret3m": -2.58,
      "ret6m": -16.25,
      "ret1y": 9.13,
      "ret2y": 10.32,
      "ret3y": 81.32
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1041,
      "ret1w": 0.33,
      "ret1m": -1.18,
      "ret3m": -2.66,
      "ret6m": 2.23,
      "ret1y": -2.48,
      "ret2y": -1.99,
      "ret3y": 29.89
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4871,
      "ret1w": -1.63,
      "ret1m": -1.18,
      "ret3m": -2.12,
      "ret6m": 2.53,
      "ret1y": 2.06,
      "ret2y": 8.87,
      "ret3y": 27.39
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4506,
      "ret1w": 0.53,
      "ret1m": 0.52,
      "ret3m": -0.03,
      "ret6m": -3.06,
      "ret1y": 17.54,
      "ret2y": 13.15,
      "ret3y": 40.57
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7326,
      "ret1w": 0.43,
      "ret1m": 1.74,
      "ret3m": -3.8,
      "ret6m": -13.43,
      "ret1y": 1.07,
      "ret2y": 5.37,
      "ret3y": 62.06
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1673,
      "ret1w": -0.35,
      "ret1m": -0.55,
      "ret3m": -5.78,
      "ret6m": -13.55,
      "ret1y": 2.71,
      "ret2y": 3.92,
      "ret3y": 56.33
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1695,
      "ret1w": -0.35,
      "ret1m": -0.54,
      "ret3m": -5.72,
      "ret6m": -13.43,
      "ret1y": 2.8,
      "ret2y": 4.07,
      "ret3y": 55.79
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4003,
      "ret1w": 1.65,
      "ret1m": 2.26,
      "ret3m": -3.93,
      "ret6m": -13.18,
      "ret1y": -3.96,
      "ret2y": 0.28,
      "ret3y": 44.36
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4326,
      "ret1w": 1.65,
      "ret1m": 2.27,
      "ret3m": -3.9,
      "ret6m": -13.09,
      "ret1y": -3.76,
      "ret2y": 0.68,
      "ret3y": 45.52
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0197,
      "ret1w": 1.54,
      "ret1m": 2.17,
      "ret3m": -5.71,
      "ret6m": -21.04,
      "ret1y": 1.15,
      "ret2y": 6.12,
      "ret3y": 69.42
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1649,
      "ret1w": 0.09,
      "ret1m": 0.24,
      "ret3m": -0.1,
      "ret6m": -0.51,
      "ret1y": 0.55,
      "ret2y": 1.89,
      "ret3y": 8.06
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.185,
      "ret1w": 0.1,
      "ret1m": 0.25,
      "ret3m": -0.08,
      "ret6m": -0.44,
      "ret1y": 0.71,
      "ret2y": 2.21,
      "ret3y": 8.72
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0856,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.44,
      "ret1y": 0.88,
      "ret2y": 1.9,
      "ret3y": 3.24
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4097,
      "ret1w": 0.02,
      "ret1m": 0.01,
      "ret3m": -0.04,
      "ret6m": 0.15,
      "ret1y": 0.06,
      "ret2y": 0.74,
      "ret3y": 12.35
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4622,
      "ret1w": 0.03,
      "ret1m": 0.02,
      "ret3m": 0.0,
      "ret6m": 0.25,
      "ret1y": 0.26,
      "ret2y": 1.15,
      "ret3y": 13.25
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1435,
      "ret1w": 0.04,
      "ret1m": 1.62,
      "ret3m": 1.0,
      "ret6m": -3.61,
      "ret1y": 15.53,
      "ret2y": 24.3,
      "ret3y": 70.19
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2351,
      "ret1w": 0.28,
      "ret1m": 0.67,
      "ret3m": -0.72,
      "ret6m": -3.02,
      "ret1y": 9.87,
      "ret2y": 10.22,
      "ret3y": 50.46
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 4.7827
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 4.2411
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 6.1964
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 0.6998
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.0181
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.7351
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 5.3855
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.985
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.3646
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 3.514
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.107
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.445
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.7992
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.9024
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.7037
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.4764
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.5983
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.06
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.2824
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.3479
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.2693
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.3505
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.0805
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.0541
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 0.7085
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 0.7266
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.9289
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 2.5167
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 0.7233
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 4.2195
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 0.5127
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 0.5226
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.2687
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.121
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.3999
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 3.0299
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 3.461
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 1.4991
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 0.6207
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-21",
        "nav": 15.29
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.32,
      "nav": 4.7827,
      "price": 4.7827,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 4.2411,
      "price": 4.2411,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.42,
      "nav": 6.1964,
      "price": 6.1964,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 0.6998,
      "price": 0.6998,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 2.0181,
      "price": 2.0181,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.12,
      "nav": 2.7351,
      "price": 2.7351,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 5.3855,
      "price": 5.3855,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.3,
      "nav": 1.985,
      "price": 1.985,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.2,
      "nav": 1.3646,
      "price": 1.3646,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.37,
      "nav": 3.514,
      "price": 3.514,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 1.107,
      "price": 1.107,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.29,
      "nav": 2.445,
      "price": 2.445,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.55,
      "nav": 1.7992,
      "price": 1.7992,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.9024,
      "price": 1.9024,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 1.7037,
      "price": 1.7037,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.35,
      "nav": 2.4764,
      "price": 2.4764,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 2.5983,
      "price": 2.5983,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.3,
      "nav": 1.06,
      "price": 1.06,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.2824,
      "price": 2.2824,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.3479,
      "price": 1.3479,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.62,
      "sharpe": 1.51,
      "calmar": 1.51
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 6.4,
      "sharpe": 1.03,
      "calmar": 1.03
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 12.62,
      "sharpe": 3.82,
      "calmar": 3.82
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.21,
      "sharpe": -1.28,
      "calmar": -1.28
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 3.13,
      "sharpe": -4.61,
      "calmar": -4.61
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.71,
      "sharpe": -2.88,
      "calmar": -2.88
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.85,
      "sharpe": -0.84,
      "calmar": -0.84
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 9.06,
      "sharpe": 0.5,
      "calmar": 0.5
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.93,
      "sharpe": 0.62,
      "calmar": 0.62
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 11.0,
      "sharpe": 2.98,
      "calmar": 2.98
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.78,
      "sharpe": -0.58,
      "calmar": -0.58
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 8.83,
      "sharpe": -0.64,
      "calmar": -0.64
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 16.52,
      "sharpe": -2.8,
      "calmar": -2.8
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.81,
      "sharpe": 0.7,
      "calmar": 0.7
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.45,
      "sharpe": 0.48,
      "calmar": 0.48
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 10.52,
      "sharpe": 2.21,
      "calmar": 2.21
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.15,
      "sharpe": -0.35,
      "calmar": -0.35
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.0,
      "sharpe": 1.12,
      "calmar": 1.12
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.5,
      "sharpe": -1.07,
      "calmar": -1.07
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.74,
      "sharpe": 1.09,
      "calmar": 1.09
    }
  ],
  "news": [
    {
      "title": "据苏州日报消息，9月20日，苏州市第十四次党代会开幕，面向未来发展，市党代会报告指出，要着力抓好十二个方面重点任务，以各领域工作的加速突破谱写高质量发展新篇章。围绕突出产业立市、创新强市、开放兴市，报告提出，要在因地制宜发展新质生产力上加速突破，经过五年努力，推动规上工业总产值再增1万亿元，加快形成4个万亿级、15个千亿级产业，再培育1—2家世界500强企业。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:00",
      "impact": "neutral"
    },
    {
      "title": "9月21日，上海2026年第九批次商品住宅用地出让落槌。浦东金桥、黄浦老西门、静安大宁三宗地块全部成交，总出让面积7.16万平方米，总规划建筑面积约17.9万平方米，起始总价120.94亿元，最终成交总额129.11亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:55",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道记者陈思琦深圳报道工信部数据显示，上半年我国规模以上专精特新“小巨人”工业企业增加值同比增长10.4%，8月单月增速进一步升至12.8%，专精特新企业正成为稳住工业大盘的关键力量。镜头聚焦到城市，深圳是绕不开的样本。作为“专精特新第一城”，深圳拥有1333家国家级专精特新“小巨人”企业，连续三年增量居全国城市首位。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:02",
      "impact": "neutral"
    },
    {
      "title": "9月21日，据北京市规划和自然资源委员会披露，北京云瑞长石科技有限公司以底价26.13亿元，竞得朝阳区奥林匹克公园南区土地一级开发项目OS-15地块商务金融用地。按9.17万平方米地上建筑面积计算，成交楼面价约28500元/平方米。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:48",
      "impact": "neutral"
    },
    {
      "title": "中新网海口9月21日电(记者符宇群)对海南无核荔枝而言，“出岛”是一场与时间的赛跑——清晨采下的鲜果，必须赶在保鲜“黄金窗口”内飞抵全国餐桌；而对进口热带水果来说，封关后的海南正变得越来越“好进”。一快一慢之间，海南本土特色农业站上了一个必须“接招”的路口。“全岛封关运作全面落地为本土涉农产业带来重大机遇。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:23",
      "impact": "neutral"
    },
    {
      "title": "近日，湖北省人民政府办公厅发布关于印发《湖北省三四季度长短结合促进经济稳中向好若干措施》的通知。措施指出，加力推进“六张网”建设。建立项目储备库及年度重大项目清单，安排省预算内投资前期工作费支持重大项目推进。支持各地积极探索“厂网一体、供排综合管理”及特许经营模式，鼓励各类企业参与城市地下管网“投建管运”。深化国有水资源水工程资产化改革，培育壮大现代绿色水经济。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:00",
      "impact": "neutral"
    },
    {
      "title": "9月21日，湖北省人民政府办公厅印发《湖北省三四季度长短结合促进经济稳中向好若干措施》。其中提到，加快算网存用协同发展，每年评选若干专用模型（含高质量数据集、智能体），按研发费用一定比例给予牵头研发单位不超过500万元补助。促进数据流通交易，对积极参与数据价值化活动的市场主体给予“数据券”补助。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:58",
      "impact": "neutral"
    },
    {
      "title": "湖北省人民政府办公厅印发《湖北省三四季度长短结合促进经济稳中向好若干措施》，其中提出，加力推进“六张网”建设。建立项目储备库及年度重大项目清单，安排省预算内投资前期工作费支持重大项目推进。深化国有水资源水工程资产化改革，培育壮大现代绿色水经济。发放“算力券”，提升补贴比例，将模型、词元等服务模式纳入补贴范围，切实降低中小微企业、科创团队用算门槛。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:57",
      "impact": "neutral"
    },
    {
      "title": "人民财讯9月21日电，湖北省人民政府办公厅印发《湖北省三四季度长短结合促进经济稳中向好若干措施》，其中提出，推动房地产业平稳健康发展。鼓励各市（州）大力开展金秋购房季活动，结合实际实施购房补贴。支持各市（州）优化商业性个人住房贷款的住房套数认定标准，对于2026年内在本地新购的首套新建商品住房，按家庭首套住房认定。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:57",
      "impact": "neutral"
    },
    {
      "title": "人民财讯9月21日电，湖北省人民政府办公厅印发《湖北省三四季度长短结合促进经济稳中向好若干措施》，其中提出，加强重大项目要素保障。引导和服务中小微民营企业积极申报新型政策性金融工具，对其参与项目使用的新型政策性金融工具资金，按贷款本金给予两年年化1.5%贴息。对符合条件的中小微民营企业给予固定资产贷款两年年化1.5%贴息、新发放流动资金贷款两年年化1%贴息。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:56",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 52,
    "label": "中性",
    "upDownRatio": "3,542/1,228",
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
