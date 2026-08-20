// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-20 11:04:50
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-20 11:04 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-20",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3903.72,
      "change": 9.3,
      "changePct": "+0.24%",
      "high": 3925.06,
      "low": 3888.1,
      "volume": 506633954.0,
      "amount": 1018568350000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13972.78,
      "change": 82.63,
      "changePct": "+0.59%",
      "high": 14101.14,
      "low": 13870.18,
      "volume": 596570236.0,
      "amount": 1060794890000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3495.59,
      "change": 22.1,
      "changePct": "+0.64%",
      "high": 3531.92,
      "low": 3459.57,
      "volume": 182875324.0,
      "amount": 522726900000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1652.97,
      "change": -14.55,
      "changePct": "-0.87%",
      "high": 1694.36,
      "low": 1638.29,
      "volume": 9144025.0,
      "amount": 99785810000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4592.75,
      "change": 4.05,
      "changePct": "+0.09%",
      "high": 4631.13,
      "low": 4569.23,
      "volume": 200874189.0,
      "amount": 554021070000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7850.4,
      "change": 66.94,
      "changePct": "+0.86%",
      "high": 7923.91,
      "low": 7796.28,
      "volume": 161390106.0,
      "amount": 393484560000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.65万亿",
      "label": "成交额",
      "rawAmount": 3649381580000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,206/1,396",
      "label": "涨/跌家数",
      "rawUp": 3206,
      "rawDown": 1396,
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
    "totalInflow": 34.02,
    "totalOutflow": 0,
    "netFlow": 34.02,
    "netFlowTrend": [
      6.8,
      13.61,
      20.41,
      27.22,
      34.02
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
      "inflow": 9.64,
      "pct": 1.84
    },
    {
      "name": "创新药",
      "inflow": 6.23,
      "pct": 4.24
    },
    {
      "name": "银行",
      "inflow": 3.88,
      "pct": 0.37
    },
    {
      "name": "医疗",
      "inflow": 3.8,
      "pct": 4.36
    },
    {
      "name": "有色",
      "inflow": 3.29,
      "pct": 1.07
    },
    {
      "name": "5G",
      "inflow": 2.79,
      "pct": 1.09
    },
    {
      "name": "医药",
      "inflow": 2.44,
      "pct": 1.01
    },
    {
      "name": "白酒",
      "inflow": 0.83,
      "pct": 0.24
    },
    {
      "name": "地产",
      "inflow": 0.61,
      "pct": 0.91
    },
    {
      "name": "传媒",
      "inflow": 0.51,
      "pct": 1.25
    },
    {
      "name": "农业",
      "inflow": 0.44,
      "pct": 1.1
    },
    {
      "name": "云计算",
      "inflow": 0.43,
      "pct": 0.72
    },
    {
      "name": "光伏",
      "inflow": 0.42,
      "pct": 0.47
    },
    {
      "name": "游戏",
      "inflow": 0.2,
      "pct": 0.66
    },
    {
      "name": "钢铁",
      "inflow": 0.14,
      "pct": 0.78
    },
    {
      "name": "家电",
      "inflow": 0.14,
      "pct": 0.21
    },
    {
      "name": "计算机",
      "inflow": 0.07,
      "pct": 0.09
    },
    {
      "name": "食品",
      "inflow": 0.04,
      "pct": 0.8
    },
    {
      "name": "基建",
      "inflow": 0.03,
      "pct": 0.88
    },
    {
      "name": "券商",
      "inflow": -3.16,
      "pct": -0.2
    }
  ],
  "sectors": [
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.359,
      "changePct": 4.36,
      "change": 0.015,
      "turnover": 12.68
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.935,
      "changePct": 4.24,
      "change": 0.038,
      "turnover": 20.77
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.664,
      "changePct": 1.84,
      "change": 0.012,
      "turnover": 32.15
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.813,
      "changePct": 1.25,
      "change": 0.01,
      "turnover": 1.71
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.732,
      "changePct": 1.1,
      "change": 0.008,
      "turnover": 1.46
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.023,
      "changePct": 1.09,
      "change": 0.011,
      "turnover": 9.29
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.884,
      "changePct": 1.07,
      "change": 0.02,
      "turnover": 10.98
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.4,
      "changePct": 1.01,
      "change": 0.004,
      "turnover": 8.13
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.219,
      "changePct": 0.91,
      "change": 0.011,
      "turnover": 2.05
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.033,
      "changePct": 0.88,
      "change": 0.009,
      "turnover": 0.11
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.502,
      "changePct": 0.8,
      "change": 0.004,
      "turnover": 0.14
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.16,
      "changePct": 0.78,
      "change": 0.009,
      "turnover": 0.46
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.672,
      "changePct": 0.72,
      "change": 0.012,
      "turnover": 1.45
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.072,
      "changePct": 0.66,
      "change": 0.007,
      "turnover": 0.67
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.849,
      "changePct": 0.47,
      "change": 0.004,
      "turnover": 1.39
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.818,
      "changePct": 0.37,
      "change": 0.003,
      "turnover": 12.95
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.426,
      "changePct": 0.24,
      "change": 0.001,
      "turnover": 2.77
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.418,
      "changePct": 0.21,
      "change": 0.003,
      "turnover": 0.47
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.163,
      "changePct": 0.09,
      "change": 0.001,
      "turnover": 0.23
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.508,
      "changePct": -0.2,
      "change": -0.001,
      "turnover": 10.53
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.835,
      "changePct": -0.36,
      "change": -0.003,
      "turnover": 0.4
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.268,
      "changePct": -0.39,
      "change": -0.005,
      "turnover": 7.36
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.01,
      "changePct": -0.39,
      "change": -0.004,
      "turnover": 1.92
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.039,
      "changePct": -0.57,
      "change": -0.006,
      "turnover": 14.97
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.497,
      "changePct": -0.68,
      "change": -0.017,
      "turnover": 1.09
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.619,
      "changePct": -0.74,
      "change": -0.012,
      "turnover": 1.24
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.097,
      "changePct": -0.99,
      "change": -0.011,
      "turnover": 2.48
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.151,
      "changePct": -1.03,
      "change": -0.012,
      "turnover": 9.85
    }
  ],
  "etfFlow": [
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.863,
      "changePct": 0.76,
      "amount": 22.86,
      "netFlow": 5.71
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.4,
      "changePct": 1.01,
      "amount": 8.13,
      "netFlow": 2.03
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.52,
      "changePct": 0.11,
      "amount": 7.67,
      "netFlow": 1.92
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.857,
      "changePct": 0.14,
      "amount": 5.09,
      "netFlow": 1.27
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.497,
      "changePct": -0.68,
      "amount": 1.09,
      "netFlow": -0.27
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.508,
      "changePct": -0.2,
      "amount": 10.53,
      "netFlow": -2.63
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.039,
      "changePct": -0.57,
      "amount": 14.97,
      "netFlow": -3.74
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.988,
      "changePct": -0.37,
      "amount": 20.29,
      "netFlow": -5.07
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.653,
      "changePct": -0.02,
      "amount": 34.92,
      "netFlow": -8.73
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.744,
      "changePct": -0.97,
      "amount": 65.14,
      "netFlow": -16.28
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.653,
      "changePct": -0.02,
      "amount": 34.92,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.988,
      "changePct": -0.37,
      "amount": 20.29,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.863,
      "changePct": 0.76,
      "amount": 22.86,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.857,
      "changePct": 0.14,
      "amount": 5.09,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.52,
      "changePct": 0.11,
      "amount": 7.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "医疗",
      "turnover": 12.68,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "创新药",
      "turnover": 20.77,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 32.15,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.71,
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
      "name": "5G",
      "turnover": 9.29,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 10.98,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 8.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 2.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.11,
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
    },
    {
      "name": "钢铁",
      "turnover": 0.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 12.95,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "白酒",
      "turnover": 2.77,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.47,
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
      "name": "券商",
      "turnover": 10.53,
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
      "nav": 4.3366,
      "ret1w": -8.02,
      "ret1m": -3.1,
      "ret3m": 1.55,
      "ret6m": -16.87,
      "ret1y": -1.86,
      "ret2y": 25.88,
      "ret3y": 147.03
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1719,
      "ret1w": -5.95,
      "ret1m": -2.35,
      "ret3m": -1.66,
      "ret6m": -13.05,
      "ret1y": 7.95,
      "ret2y": 13.42,
      "ret3y": 69.14
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.5797,
      "ret1w": -6.73,
      "ret1m": 5.06,
      "ret3m": 10.78,
      "ret6m": 0.86,
      "ret1y": 40.54,
      "ret2y": 113.2,
      "ret3y": 265.28
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7023,
      "ret1w": -0.57,
      "ret1m": -2.23,
      "ret3m": 2.89,
      "ret6m": -0.89,
      "ret1y": -11.54,
      "ret2y": -14.06,
      "ret3y": 6.85
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.1912,
      "ret1w": -3.48,
      "ret1m": -6.09,
      "ret3m": 6.83,
      "ret6m": -20.18,
      "ret1y": -26.65,
      "ret2y": -10.12,
      "ret3y": 19.46
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6967,
      "ret1w": -2.11,
      "ret1m": -4.88,
      "ret3m": 6.49,
      "ret6m": -17.13,
      "ret1y": -31.71,
      "ret2y": -11.99,
      "ret3y": 28.47
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4935,
      "ret1w": -0.98,
      "ret1m": -1.75,
      "ret3m": 4.82,
      "ret6m": -0.42,
      "ret1y": -6.11,
      "ret2y": 18.71,
      "ret3y": 55.58
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.896,
      "ret1w": -4.91,
      "ret1m": -1.1,
      "ret3m": 6.46,
      "ret6m": -10.44,
      "ret1y": -6.19,
      "ret2y": 8.4,
      "ret3y": 68.53
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3532,
      "ret1w": -4.31,
      "ret1m": -1.66,
      "ret3m": 4.35,
      "ret6m": -4.76,
      "ret1y": 0.21,
      "ret2y": 16.03,
      "ret3y": 45.43
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.46,
      "ret1w": -6.99,
      "ret1m": -2.2,
      "ret3m": 1.08,
      "ret6m": 2.03,
      "ret1y": 35.1,
      "ret2y": 106.69,
      "ret3y": 272.84
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.125,
      "ret1w": 0.18,
      "ret1m": -2.26,
      "ret3m": 4.85,
      "ret6m": 1.99,
      "ret1y": -8.16,
      "ret2y": -14.71,
      "ret3y": 4.07
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.391,
      "ret1w": -2.96,
      "ret1m": -3.82,
      "ret3m": 6.08,
      "ret6m": -6.67,
      "ret1y": -16.37,
      "ret2y": -15.3,
      "ret3y": 33.95
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7919,
      "ret1w": -7.85,
      "ret1m": -3.61,
      "ret3m": -5.27,
      "ret6m": -38.59,
      "ret1y": -46.51,
      "ret2y": -24.08,
      "ret3y": 25.37
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9152,
      "ret1w": -0.48,
      "ret1m": -1.76,
      "ret3m": 3.09,
      "ret6m": 8.76,
      "ret1y": -4.78,
      "ret2y": -0.42,
      "ret3y": 7.76
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6362,
      "ret1w": -4.69,
      "ret1m": -2.43,
      "ret3m": 6.08,
      "ret6m": -8.84,
      "ret1y": -4.34,
      "ret2y": 11.4,
      "ret3y": 67.18
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.4033,
      "ret1w": -8.12,
      "ret1m": -1.05,
      "ret3m": -4.54,
      "ret6m": -11.67,
      "ret1y": 34.24,
      "ret2y": 95.84,
      "ret3y": 218.53
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5399,
      "ret1w": -0.18,
      "ret1m": -1.05,
      "ret3m": 5.32,
      "ret6m": -4.35,
      "ret1y": -10.47,
      "ret2y": -5.87,
      "ret3y": 21.46
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.078,
      "ret1w": -2.8,
      "ret1m": -1.91,
      "ret3m": 4.26,
      "ret6m": 13.83,
      "ret1y": 6.63,
      "ret2y": -7.47,
      "ret3y": 9.66
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3346,
      "ret1w": 0.89,
      "ret1m": -0.31,
      "ret3m": 3.23,
      "ret6m": -0.82,
      "ret1y": -7.59,
      "ret2y": 7.64,
      "ret3y": 14.5
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3152,
      "ret1w": -3.51,
      "ret1m": -0.98,
      "ret3m": 8.93,
      "ret6m": -0.48,
      "ret1y": 1.19,
      "ret2y": 22.63,
      "ret3y": 75.59
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2859,
      "ret1w": -4.85,
      "ret1m": -2.19,
      "ret3m": 2.36,
      "ret6m": -7.07,
      "ret1y": -4.51,
      "ret2y": 23.22,
      "ret3y": 47.63
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3676,
      "ret1w": -4.86,
      "ret1m": -2.19,
      "ret3m": 2.4,
      "ret6m": -6.99,
      "ret1y": -4.34,
      "ret2y": 23.69,
      "ret3y": 48.81
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0935,
      "ret1w": -0.65,
      "ret1m": -0.33,
      "ret3m": -0.11,
      "ret6m": -0.06,
      "ret1y": 1.33,
      "ret2y": 2.36,
      "ret3y": 8.82
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0662,
      "ret1w": -0.64,
      "ret1m": -0.32,
      "ret3m": -0.06,
      "ret6m": 0.08,
      "ret1y": 1.64,
      "ret2y": 2.98,
      "ret3y": 10.13
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7214,
      "ret1w": -1.23,
      "ret1m": -2.1,
      "ret3m": 1.53,
      "ret6m": -6.66,
      "ret1y": -13.69,
      "ret2y": -5.34,
      "ret3y": 14.62
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7395,
      "ret1w": -1.24,
      "ret1m": -2.1,
      "ret3m": 1.58,
      "ret6m": -6.56,
      "ret1y": -13.46,
      "ret2y": -4.86,
      "ret3y": 15.76
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7629,
      "ret1w": -6.42,
      "ret1m": -2.47,
      "ret3m": -4.25,
      "ret6m": -1.3,
      "ret1y": 36.08,
      "ret2y": 84.85,
      "ret3y": 159.74
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5513,
      "ret1w": -3.06,
      "ret1m": -1.24,
      "ret3m": 4.21,
      "ret6m": -4.12,
      "ret1y": 4.13,
      "ret2y": 32.67,
      "ret3y": 87.71
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.74,
      "ret1w": -4.05,
      "ret1m": -2.28,
      "ret3m": 1.91,
      "ret6m": -16.65,
      "ret1y": -16.53,
      "ret2y": -4.92,
      "ret3y": 16.66
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.2268,
      "ret1w": -4.88,
      "ret1m": -2.33,
      "ret3m": 1.05,
      "ret6m": -2.93,
      "ret1y": 19.33,
      "ret2y": 55.33,
      "ret3y": 145.3
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5095,
      "ret1w": -3.63,
      "ret1m": -2.86,
      "ret3m": -4.28,
      "ret6m": -7.11,
      "ret1y": -0.59,
      "ret2y": 22.92,
      "ret3y": 45.82
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5192,
      "ret1w": -3.64,
      "ret1m": -2.86,
      "ret3m": -4.24,
      "ret6m": -7.0,
      "ret1y": -0.36,
      "ret2y": 23.41,
      "ret3y": 47.0
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2764,
      "ret1w": -0.14,
      "ret1m": 0.04,
      "ret3m": 3.3,
      "ret6m": -0.72,
      "ret1y": -1.14,
      "ret2y": -0.73,
      "ret3y": 0.96
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1364,
      "ret1w": -0.97,
      "ret1m": -0.94,
      "ret3m": 1.3,
      "ret6m": 2.81,
      "ret1y": -5.57,
      "ret2y": 2.27,
      "ret3y": 22.82
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.436,
      "ret1w": -3.73,
      "ret1m": -1.65,
      "ret3m": 1.56,
      "ret6m": -15.02,
      "ret1y": -1.1,
      "ret2y": -3.75,
      "ret3y": 18.85
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9972,
      "ret1w": -0.75,
      "ret1m": -0.68,
      "ret3m": 6.31,
      "ret6m": -5.87,
      "ret1y": -4.81,
      "ret2y": 17.4,
      "ret3y": 44.98
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.33,
      "ret1w": -5.91,
      "ret1m": -2.57,
      "ret3m": -14.04,
      "ret6m": -14.83,
      "ret1y": 38.98,
      "ret2y": 103.79,
      "ret3y": 197.85
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.475,
      "ret1w": 1.01,
      "ret1m": 1.07,
      "ret3m": 1.33,
      "ret6m": -0.52,
      "ret1y": 0.72,
      "ret2y": -2.23,
      "ret3y": 9.36
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6464,
      "ret1w": -5.79,
      "ret1m": -2.19,
      "ret3m": 5.24,
      "ret6m": -12.3,
      "ret1y": -6.86,
      "ret2y": 6.07,
      "ret3y": 52.85
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.484,
      "ret1w": -7.37,
      "ret1m": -3.61,
      "ret3m": 1.02,
      "ret6m": 18.93,
      "ret1y": 76.55,
      "ret2y": 158.27,
      "ret3y": 344.16
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.066,
      "ret1w": -0.42,
      "ret1m": -0.19,
      "ret3m": -0.15,
      "ret6m": -0.41,
      "ret1y": 0.24,
      "ret2y": 1.52,
      "ret3y": 4.58
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1144,
      "ret1w": -0.42,
      "ret1m": -0.18,
      "ret3m": -0.13,
      "ret6m": -0.35,
      "ret1y": 0.37,
      "ret2y": 1.81,
      "ret3y": 5.3
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0641,
      "ret1w": -0.01,
      "ret1m": 0.02,
      "ret3m": 0.15,
      "ret6m": 0.28,
      "ret1y": 0.77,
      "ret2y": 1.53,
      "ret3y": 2.72
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0983,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": 0.12,
      "ret6m": 0.32,
      "ret1y": 0.81,
      "ret2y": 1.51,
      "ret3y": 3.83
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1076,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.37,
      "ret1y": 0.91,
      "ret2y": 1.71,
      "ret3y": 4.25
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.076,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.19,
      "ret6m": 0.34,
      "ret1y": 0.74,
      "ret2y": 1.41,
      "ret3y": 2.81
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0903,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.2,
      "ret6m": 0.41,
      "ret1y": 0.9,
      "ret2y": 1.73,
      "ret3y": 3.46
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0661,
      "ret1w": -1.57,
      "ret1m": -0.78,
      "ret3m": 0.99,
      "ret6m": -2.7,
      "ret1y": 1.0,
      "ret2y": 7.68,
      "ret3y": 12.26
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2169,
      "ret1w": -1.88,
      "ret1m": -0.83,
      "ret3m": 1.55,
      "ret6m": -3.83,
      "ret1y": -0.07,
      "ret2y": 2.94,
      "ret3y": 6.89
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0727,
      "ret1w": -1.56,
      "ret1m": -0.78,
      "ret3m": 1.03,
      "ret6m": -2.61,
      "ret1y": 1.21,
      "ret2y": 8.11,
      "ret3y": 13.16
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0453,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.37,
      "ret1y": 0.88,
      "ret2y": 1.71,
      "ret3y": 3.55
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1706,
      "ret1w": 0.09,
      "ret1m": -0.34,
      "ret3m": -0.15,
      "ret6m": -3.44,
      "ret1y": -2.76,
      "ret2y": 1.37,
      "ret3y": 10.32
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2159,
      "ret1w": -0.38,
      "ret1m": -0.43,
      "ret3m": 0.4,
      "ret6m": -1.07,
      "ret1y": -0.25,
      "ret2y": 4.61,
      "ret3y": 15.21
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1395,
      "ret1w": -0.76,
      "ret1m": -0.3,
      "ret3m": 0.51,
      "ret6m": -1.11,
      "ret1y": 0.82,
      "ret2y": 5.17,
      "ret3y": 10.38
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2107,
      "ret1w": -0.76,
      "ret1m": -0.3,
      "ret3m": 0.54,
      "ret6m": -1.02,
      "ret1y": 1.02,
      "ret2y": 5.59,
      "ret3y": 11.3
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.403,
      "ret1w": -4.45,
      "ret1m": 5.3,
      "ret3m": 6.05,
      "ret6m": 2.78,
      "ret1y": 43.46,
      "ret2y": 95.05,
      "ret3y": 134.44
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9742,
      "ret1w": 0.06,
      "ret1m": -0.29,
      "ret3m": 2.85,
      "ret6m": 2.0,
      "ret1y": 8.79,
      "ret2y": 10.4,
      "ret3y": 33.85
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8413,
      "ret1w": -1.77,
      "ret1m": -4.23,
      "ret3m": -0.33,
      "ret6m": -9.98,
      "ret1y": -12.51,
      "ret2y": 3.68,
      "ret3y": 50.02
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4077,
      "ret1w": 2.74,
      "ret1m": 0.35,
      "ret3m": 9.25,
      "ret6m": 10.91,
      "ret1y": 21.96,
      "ret2y": 32.89,
      "ret3y": 74.9
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9394,
      "ret1w": 0.17,
      "ret1m": 0.23,
      "ret3m": -0.14,
      "ret6m": 0.18,
      "ret1y": -2.88,
      "ret2y": -2.9,
      "ret3y": -1.3
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6184,
      "ret1w": -3.02,
      "ret1m": -3.64,
      "ret3m": -0.16,
      "ret6m": -1.15,
      "ret1y": 24.16,
      "ret2y": 56.87,
      "ret3y": 89.67
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.594,
      "ret1w": -0.2,
      "ret1m": -0.99,
      "ret3m": 1.37,
      "ret6m": 1.37,
      "ret1y": 2.52,
      "ret2y": 6.56,
      "ret3y": 21.18
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.234,
      "ret1w": -1.75,
      "ret1m": -2.22,
      "ret3m": 5.29,
      "ret6m": 1.65,
      "ret1y": -7.57,
      "ret2y": -18.33,
      "ret3y": 115.36
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.943,
      "ret1w": -3.68,
      "ret1m": -2.88,
      "ret3m": 1.29,
      "ret6m": -2.28,
      "ret1y": -14.58,
      "ret2y": -22.0,
      "ret3y": 44.63
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.897,
      "ret1w": -2.69,
      "ret1m": 3.0,
      "ret3m": 5.75,
      "ret6m": 0.11,
      "ret1y": 35.86,
      "ret2y": 82.79,
      "ret3y": 138.83
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5714,
      "ret1w": 0.12,
      "ret1m": 1.73,
      "ret3m": 11.97,
      "ret6m": 1.97,
      "ret1y": 3.32,
      "ret2y": 42.3,
      "ret3y": 52.4
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7038,
      "ret1w": -0.96,
      "ret1m": 1.57,
      "ret3m": 3.2,
      "ret6m": 3.59,
      "ret1y": 7.14,
      "ret2y": 28.51,
      "ret3y": 53.98
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3189,
      "ret1w": -0.67,
      "ret1m": 1.7,
      "ret3m": 4.63,
      "ret6m": 0.18,
      "ret1y": 3.66,
      "ret2y": 19.13,
      "ret3y": 40.04
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.317,
      "ret1w": -0.38,
      "ret1m": 1.31,
      "ret3m": -2.23,
      "ret6m": 0.92,
      "ret1y": 1.07,
      "ret2y": 7.69,
      "ret3y": -4.34
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.084,
      "ret1w": -1.47,
      "ret1m": -0.53,
      "ret3m": 7.64,
      "ret6m": -5.36,
      "ret1y": -15.22,
      "ret2y": 20.6,
      "ret3y": 54.17
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.011,
      "ret1w": -0.03,
      "ret1m": 0.09,
      "ret3m": 0.25,
      "ret6m": 0.53,
      "ret1y": 1.49,
      "ret2y": 2.15,
      "ret3y": 3.66
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0099,
      "ret1w": -0.03,
      "ret1m": 0.09,
      "ret3m": 0.26,
      "ret6m": 0.52,
      "ret1y": 1.5,
      "ret2y": 2.21,
      "ret3y": 3.84
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.432,
      "ret1w": -3.96,
      "ret1m": -2.85,
      "ret3m": 0.21,
      "ret6m": -7.91,
      "ret1y": -0.35,
      "ret2y": 10.41,
      "ret3y": 36.25
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.849,
      "ret1w": -4.81,
      "ret1m": -3.06,
      "ret3m": 2.15,
      "ret6m": -6.47,
      "ret1y": 1.06,
      "ret2y": 20.26,
      "ret3y": 64.11
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6668,
      "ret1w": -2.39,
      "ret1m": -2.05,
      "ret3m": 10.41,
      "ret6m": -3.81,
      "ret1y": -9.48,
      "ret2y": 37.73,
      "ret3y": 65.69
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1319,
      "ret1w": -2.59,
      "ret1m": -1.76,
      "ret3m": 2.64,
      "ret6m": -2.56,
      "ret1y": 3.27,
      "ret2y": 15.72,
      "ret3y": 40.93
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1925,
      "ret1w": -2.59,
      "ret1m": -1.75,
      "ret3m": 2.67,
      "ret6m": -2.46,
      "ret1y": 3.48,
      "ret2y": 16.18,
      "ret3y": 42.06
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.009,
      "ret1w": -4.58,
      "ret1m": -3.11,
      "ret3m": 3.36,
      "ret6m": -8.93,
      "ret1y": -5.39,
      "ret2y": 16.9,
      "ret3y": 64.98
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7907,
      "ret1w": -2.74,
      "ret1m": -2.04,
      "ret3m": 1.31,
      "ret6m": -4.48,
      "ret1y": -0.67,
      "ret2y": 9.47,
      "ret3y": 38.27
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5714,
      "ret1w": -2.85,
      "ret1m": -2.35,
      "ret3m": 3.45,
      "ret6m": -5.7,
      "ret1y": -5.62,
      "ret2y": 15.1,
      "ret3y": 51.8
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9954,
      "ret1w": -5.35,
      "ret1m": -3.22,
      "ret3m": -0.68,
      "ret6m": -6.35,
      "ret1y": 9.73,
      "ret2y": 30.44,
      "ret3y": 79.15
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1581,
      "ret1w": -0.47,
      "ret1m": -0.59,
      "ret3m": 4.13,
      "ret6m": -0.12,
      "ret1y": -0.96,
      "ret2y": 7.23,
      "ret3y": 29.13
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5193,
      "ret1w": 0.19,
      "ret1m": -0.45,
      "ret3m": 1.75,
      "ret6m": 4.75,
      "ret1y": 1.86,
      "ret2y": 11.87,
      "ret3y": 30.48
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4516,
      "ret1w": -1.48,
      "ret1m": -0.11,
      "ret3m": 2.64,
      "ret6m": 0.85,
      "ret1y": 16.0,
      "ret2y": 16.09,
      "ret3y": 38.24
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7921,
      "ret1w": -4.19,
      "ret1m": -2.73,
      "ret3m": 0.71,
      "ret6m": -6.78,
      "ret1y": 4.81,
      "ret2y": 19.0,
      "ret3y": 60.71
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.234,
      "ret1w": -0.4,
      "ret1m": 3.4,
      "ret3m": 6.33,
      "ret6m": -2.44,
      "ret1y": 4.35,
      "ret2y": 19.92,
      "ret3y": 57.9
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2355,
      "ret1w": -0.4,
      "ret1m": 3.39,
      "ret3m": 6.35,
      "ret6m": -2.46,
      "ret1y": 4.31,
      "ret2y": 19.66,
      "ret3y": 57.35
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4055,
      "ret1w": -3.57,
      "ret1m": -1.88,
      "ret3m": 2.01,
      "ret6m": -10.73,
      "ret1y": -5.27,
      "ret2y": 6.16,
      "ret3y": 39.86
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4374,
      "ret1w": -3.58,
      "ret1m": -1.88,
      "ret3m": 2.04,
      "ret6m": -10.64,
      "ret1y": -5.08,
      "ret2y": 6.59,
      "ret3y": 40.98
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0179,
      "ret1w": -5.79,
      "ret1m": -3.13,
      "ret3m": -4.42,
      "ret6m": -10.77,
      "ret1y": -0.92,
      "ret2y": 16.07,
      "ret3y": 61.79
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1665,
      "ret1w": -0.19,
      "ret1m": -0.21,
      "ret3m": 0.09,
      "ret6m": -0.44,
      "ret1y": -0.43,
      "ret2y": 2.01,
      "ret3y": 7.91
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1863,
      "ret1w": -0.19,
      "ret1m": -0.2,
      "ret3m": 0.13,
      "ret6m": -0.36,
      "ret1y": -0.27,
      "ret2y": 2.33,
      "ret3y": 8.57
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0839,
      "ret1w": -0.02,
      "ret1m": 0.03,
      "ret3m": 0.18,
      "ret6m": 0.35,
      "ret1y": 0.91,
      "ret2y": 1.83,
      "ret3y": 3.3
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4104,
      "ret1w": 0.01,
      "ret1m": -0.01,
      "ret3m": 0.0,
      "ret6m": 0.1,
      "ret1y": 0.14,
      "ret2y": 0.65,
      "ret3y": 11.86
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4624,
      "ret1w": 0.01,
      "ret1m": -0.01,
      "ret3m": 0.03,
      "ret6m": 0.2,
      "ret1y": 0.34,
      "ret2y": 1.05,
      "ret3y": 12.75
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1097,
      "ret1w": -2.33,
      "ret1m": -1.34,
      "ret3m": 0.38,
      "ret6m": 6.14,
      "ret1y": 10.12,
      "ret2y": 24.53,
      "ret3y": 66.37
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.244,
      "ret1w": -0.88,
      "ret1m": -1.0,
      "ret3m": 1.84,
      "ret6m": 0.86,
      "ret1y": 3.08,
      "ret2y": 10.43,
      "ret3y": 52.34
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-07-23",
        "nav": 4.1715
      },
      {
        "date": "2026-07-24",
        "nav": 4.0696
      },
      {
        "date": "2026-07-27",
        "nav": 4.2369
      },
      {
        "date": "2026-07-28",
        "nav": 3.978
      },
      {
        "date": "2026-07-29",
        "nav": 3.9157
      },
      {
        "date": "2026-07-30",
        "nav": 3.636
      },
      {
        "date": "2026-07-31",
        "nav": 3.793
      },
      {
        "date": "2026-08-03",
        "nav": 3.7885
      },
      {
        "date": "2026-08-04",
        "nav": 4.0128
      },
      {
        "date": "2026-08-05",
        "nav": 4.2314
      },
      {
        "date": "2026-08-06",
        "nav": 4.2852
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-07-23",
        "nav": 4.3219
      },
      {
        "date": "2026-07-24",
        "nav": 4.2422
      },
      {
        "date": "2026-07-27",
        "nav": 4.3954
      },
      {
        "date": "2026-07-28",
        "nav": 4.0434
      },
      {
        "date": "2026-07-29",
        "nav": 4.0647
      },
      {
        "date": "2026-07-30",
        "nav": 3.7703
      },
      {
        "date": "2026-07-31",
        "nav": 3.9011
      },
      {
        "date": "2026-08-03",
        "nav": 3.8217
      },
      {
        "date": "2026-08-04",
        "nav": 4.069
      },
      {
        "date": "2026-08-05",
        "nav": 4.1625
      },
      {
        "date": "2026-08-06",
        "nav": 4.1845
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-07-23",
        "nav": 4.9743
      },
      {
        "date": "2026-07-24",
        "nav": 4.8552
      },
      {
        "date": "2026-07-27",
        "nav": 5.0118
      },
      {
        "date": "2026-07-28",
        "nav": 4.4468
      },
      {
        "date": "2026-07-29",
        "nav": 4.4108
      },
      {
        "date": "2026-07-30",
        "nav": 3.9689
      },
      {
        "date": "2026-07-31",
        "nav": 4.1872
      },
      {
        "date": "2026-08-03",
        "nav": 4.2423
      },
      {
        "date": "2026-08-04",
        "nav": 4.7468
      },
      {
        "date": "2026-08-05",
        "nav": 4.7803
      },
      {
        "date": "2026-08-06",
        "nav": 4.8797
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-07-23",
        "nav": 0.7045
      },
      {
        "date": "2026-07-24",
        "nav": 0.6953
      },
      {
        "date": "2026-07-27",
        "nav": 0.7098
      },
      {
        "date": "2026-07-28",
        "nav": 0.7217
      },
      {
        "date": "2026-07-29",
        "nav": 0.7301
      },
      {
        "date": "2026-07-30",
        "nav": 0.7426
      },
      {
        "date": "2026-07-31",
        "nav": 0.7418
      },
      {
        "date": "2026-08-03",
        "nav": 0.7354
      },
      {
        "date": "2026-08-04",
        "nav": 0.7205
      },
      {
        "date": "2026-08-05",
        "nav": 0.7186
      },
      {
        "date": "2026-08-06",
        "nav": 0.7141
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-07-23",
        "nav": 2.1907
      },
      {
        "date": "2026-07-24",
        "nav": 2.1048
      },
      {
        "date": "2026-07-27",
        "nav": 2.1442
      },
      {
        "date": "2026-07-28",
        "nav": 2.1403
      },
      {
        "date": "2026-07-29",
        "nav": 2.1834
      },
      {
        "date": "2026-07-30",
        "nav": 2.2145
      },
      {
        "date": "2026-07-31",
        "nav": 2.2136
      },
      {
        "date": "2026-08-03",
        "nav": 2.3108
      },
      {
        "date": "2026-08-04",
        "nav": 2.3048
      },
      {
        "date": "2026-08-05",
        "nav": 2.3089
      },
      {
        "date": "2026-08-06",
        "nav": 2.2591
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-07-23",
        "nav": 2.6957
      },
      {
        "date": "2026-07-24",
        "nav": 2.6064
      },
      {
        "date": "2026-07-27",
        "nav": 2.6953
      },
      {
        "date": "2026-07-28",
        "nav": 2.7001
      },
      {
        "date": "2026-07-29",
        "nav": 2.7386
      },
      {
        "date": "2026-07-30",
        "nav": 2.7503
      },
      {
        "date": "2026-07-31",
        "nav": 2.7661
      },
      {
        "date": "2026-08-03",
        "nav": 2.8104
      },
      {
        "date": "2026-08-04",
        "nav": 2.7921
      },
      {
        "date": "2026-08-05",
        "nav": 2.8475
      },
      {
        "date": "2026-08-06",
        "nav": 2.8347
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-07-23",
        "nav": 5.5301
      },
      {
        "date": "2026-07-24",
        "nav": 5.4199
      },
      {
        "date": "2026-07-27",
        "nav": 5.4908
      },
      {
        "date": "2026-07-28",
        "nav": 5.5082
      },
      {
        "date": "2026-07-29",
        "nav": 5.619
      },
      {
        "date": "2026-07-30",
        "nav": 5.6475
      },
      {
        "date": "2026-07-31",
        "nav": 5.6074
      },
      {
        "date": "2026-08-03",
        "nav": 5.5725
      },
      {
        "date": "2026-08-04",
        "nav": 5.5149
      },
      {
        "date": "2026-08-05",
        "nav": 5.5498
      },
      {
        "date": "2026-08-06",
        "nav": 5.5248
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-07-23",
        "nav": 1.79
      },
      {
        "date": "2026-07-24",
        "nav": 1.737
      },
      {
        "date": "2026-07-27",
        "nav": 1.809
      },
      {
        "date": "2026-07-28",
        "nav": 1.758
      },
      {
        "date": "2026-07-29",
        "nav": 1.776
      },
      {
        "date": "2026-07-30",
        "nav": 1.725
      },
      {
        "date": "2026-07-31",
        "nav": 1.765
      },
      {
        "date": "2026-08-03",
        "nav": 1.766
      },
      {
        "date": "2026-08-04",
        "nav": 1.808
      },
      {
        "date": "2026-08-05",
        "nav": 1.864
      },
      {
        "date": "2026-08-06",
        "nav": 1.873
      },
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
      }
    ],
    "519965": [
      {
        "date": "2026-07-23",
        "nav": 1.3382
      },
      {
        "date": "2026-07-24",
        "nav": 1.3074
      },
      {
        "date": "2026-07-27",
        "nav": 1.3391
      },
      {
        "date": "2026-07-28",
        "nav": 1.2889
      },
      {
        "date": "2026-07-29",
        "nav": 1.3027
      },
      {
        "date": "2026-07-30",
        "nav": 1.2675
      },
      {
        "date": "2026-07-31",
        "nav": 1.2875
      },
      {
        "date": "2026-08-03",
        "nav": 1.2784
      },
      {
        "date": "2026-08-04",
        "nav": 1.315
      },
      {
        "date": "2026-08-05",
        "nav": 1.3471
      },
      {
        "date": "2026-08-06",
        "nav": 1.3471
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-07-23",
        "nav": 3.553
      },
      {
        "date": "2026-07-24",
        "nav": 3.543
      },
      {
        "date": "2026-07-27",
        "nav": 3.586
      },
      {
        "date": "2026-07-28",
        "nav": 3.389
      },
      {
        "date": "2026-07-29",
        "nav": 3.331
      },
      {
        "date": "2026-07-30",
        "nav": 3.145
      },
      {
        "date": "2026-07-31",
        "nav": 3.236
      },
      {
        "date": "2026-08-03",
        "nav": 3.079
      },
      {
        "date": "2026-08-04",
        "nav": 3.23
      },
      {
        "date": "2026-08-05",
        "nav": 3.388
      },
      {
        "date": "2026-08-06",
        "nav": 3.429
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-07-24",
        "nav": 1.059
      },
      {
        "date": "2026-07-27",
        "nav": 1.077
      },
      {
        "date": "2026-07-28",
        "nav": 1.105
      },
      {
        "date": "2026-07-29",
        "nav": 1.121
      },
      {
        "date": "2026-07-30",
        "nav": 1.132
      },
      {
        "date": "2026-07-31",
        "nav": 1.135
      },
      {
        "date": "2026-08-03",
        "nav": 1.129
      },
      {
        "date": "2026-08-04",
        "nav": 1.12
      },
      {
        "date": "2026-08-05",
        "nav": 1.122
      },
      {
        "date": "2026-08-06",
        "nav": 1.117
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-07-23",
        "nav": 2.255
      },
      {
        "date": "2026-07-24",
        "nav": 2.183
      },
      {
        "date": "2026-07-27",
        "nav": 2.262
      },
      {
        "date": "2026-07-28",
        "nav": 2.254
      },
      {
        "date": "2026-07-29",
        "nav": 2.289
      },
      {
        "date": "2026-07-30",
        "nav": 2.265
      },
      {
        "date": "2026-07-31",
        "nav": 2.303
      },
      {
        "date": "2026-08-03",
        "nav": 2.323
      },
      {
        "date": "2026-08-04",
        "nav": 2.356
      },
      {
        "date": "2026-08-05",
        "nav": 2.364
      },
      {
        "date": "2026-08-06",
        "nav": 2.357
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-07-23",
        "nav": 1.9429
      },
      {
        "date": "2026-07-24",
        "nav": 1.957
      },
      {
        "date": "2026-07-27",
        "nav": 1.99
      },
      {
        "date": "2026-07-28",
        "nav": 1.8368
      },
      {
        "date": "2026-07-29",
        "nav": 1.8154
      },
      {
        "date": "2026-07-30",
        "nav": 1.6948
      },
      {
        "date": "2026-07-31",
        "nav": 1.7174
      },
      {
        "date": "2026-08-03",
        "nav": 1.5869
      },
      {
        "date": "2026-08-04",
        "nav": 1.6629
      },
      {
        "date": "2026-08-05",
        "nav": 1.75
      },
      {
        "date": "2026-08-06",
        "nav": 1.7725
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-07-23",
        "nav": 1.9188
      },
      {
        "date": "2026-07-24",
        "nav": 1.8871
      },
      {
        "date": "2026-07-27",
        "nav": 1.905
      },
      {
        "date": "2026-07-28",
        "nav": 1.9083
      },
      {
        "date": "2026-07-29",
        "nav": 1.93
      },
      {
        "date": "2026-07-30",
        "nav": 1.9521
      },
      {
        "date": "2026-07-31",
        "nav": 1.9477
      },
      {
        "date": "2026-08-03",
        "nav": 1.9405
      },
      {
        "date": "2026-08-04",
        "nav": 1.9238
      },
      {
        "date": "2026-08-05",
        "nav": 1.9297
      },
      {
        "date": "2026-08-06",
        "nav": 1.9237
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-07-23",
        "nav": 1.5644
      },
      {
        "date": "2026-07-24",
        "nav": 1.5291
      },
      {
        "date": "2026-07-27",
        "nav": 1.5831
      },
      {
        "date": "2026-07-28",
        "nav": 1.5215
      },
      {
        "date": "2026-07-29",
        "nav": 1.5281
      },
      {
        "date": "2026-07-30",
        "nav": 1.4752
      },
      {
        "date": "2026-07-31",
        "nav": 1.5111
      },
      {
        "date": "2026-08-03",
        "nav": 1.504
      },
      {
        "date": "2026-08-04",
        "nav": 1.5547
      },
      {
        "date": "2026-08-05",
        "nav": 1.602
      },
      {
        "date": "2026-08-06",
        "nav": 1.6206
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-07-23",
        "nav": 2.471
      },
      {
        "date": "2026-07-24",
        "nav": 2.4365
      },
      {
        "date": "2026-07-27",
        "nav": 2.5114
      },
      {
        "date": "2026-07-28",
        "nav": 2.2211
      },
      {
        "date": "2026-07-29",
        "nav": 2.1896
      },
      {
        "date": "2026-07-30",
        "nav": 1.9926
      },
      {
        "date": "2026-07-31",
        "nav": 2.0934
      },
      {
        "date": "2026-08-03",
        "nav": 2.0164
      },
      {
        "date": "2026-08-04",
        "nav": 2.2079
      },
      {
        "date": "2026-08-05",
        "nav": 2.2658
      },
      {
        "date": "2026-08-06",
        "nav": 2.3138
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-07-23",
        "nav": 2.4893
      },
      {
        "date": "2026-07-24",
        "nav": 2.4391
      },
      {
        "date": "2026-07-27",
        "nav": 2.4791
      },
      {
        "date": "2026-07-28",
        "nav": 2.4885
      },
      {
        "date": "2026-07-29",
        "nav": 2.5361
      },
      {
        "date": "2026-07-30",
        "nav": 2.5465
      },
      {
        "date": "2026-07-31",
        "nav": 2.5421
      },
      {
        "date": "2026-08-03",
        "nav": 2.5459
      },
      {
        "date": "2026-08-04",
        "nav": 2.5092
      },
      {
        "date": "2026-08-05",
        "nav": 2.5251
      },
      {
        "date": "2026-08-06",
        "nav": 2.5342
      },
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
      }
    ],
    "399011": [
      {
        "date": "2026-07-23",
        "nav": 1.084
      },
      {
        "date": "2026-07-24",
        "nav": 1.037
      },
      {
        "date": "2026-07-27",
        "nav": 1.056
      },
      {
        "date": "2026-07-28",
        "nav": 1.024
      },
      {
        "date": "2026-07-29",
        "nav": 1.023
      },
      {
        "date": "2026-07-30",
        "nav": 0.98
      },
      {
        "date": "2026-07-31",
        "nav": 0.993
      },
      {
        "date": "2026-08-03",
        "nav": 0.957
      },
      {
        "date": "2026-08-04",
        "nav": 0.987
      },
      {
        "date": "2026-08-05",
        "nav": 1.019
      },
      {
        "date": "2026-08-06",
        "nav": 1.014
      },
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
      }
    ],
    "376510": [
      {
        "date": "2026-07-23",
        "nav": 2.3265
      },
      {
        "date": "2026-07-24",
        "nav": 2.306
      },
      {
        "date": "2026-07-27",
        "nav": 2.329
      },
      {
        "date": "2026-07-28",
        "nav": 2.3451
      },
      {
        "date": "2026-07-29",
        "nav": 2.3769
      },
      {
        "date": "2026-07-30",
        "nav": 2.413
      },
      {
        "date": "2026-07-31",
        "nav": 2.3897
      },
      {
        "date": "2026-08-03",
        "nav": 2.3827
      },
      {
        "date": "2026-08-04",
        "nav": 2.3474
      },
      {
        "date": "2026-08-05",
        "nav": 2.3412
      },
      {
        "date": "2026-08-06",
        "nav": 2.3374
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-07-23",
        "nav": 1.2421
      },
      {
        "date": "2026-07-24",
        "nav": 1.2187
      },
      {
        "date": "2026-07-27",
        "nav": 1.2499
      },
      {
        "date": "2026-07-28",
        "nav": 1.2227
      },
      {
        "date": "2026-07-29",
        "nav": 1.2324
      },
      {
        "date": "2026-07-30",
        "nav": 1.2076
      },
      {
        "date": "2026-07-31",
        "nav": 1.2301
      },
      {
        "date": "2026-08-03",
        "nav": 1.2234
      },
      {
        "date": "2026-08-04",
        "nav": 1.2436
      },
      {
        "date": "2026-08-05",
        "nav": 1.2743
      },
      {
        "date": "2026-08-06",
        "nav": 1.2871
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-07-23",
        "nav": 1.291
      },
      {
        "date": "2026-07-24",
        "nav": 1.2667
      },
      {
        "date": "2026-07-27",
        "nav": 1.2892
      },
      {
        "date": "2026-07-28",
        "nav": 1.2347
      },
      {
        "date": "2026-07-29",
        "nav": 1.2508
      },
      {
        "date": "2026-07-30",
        "nav": 1.216
      },
      {
        "date": "2026-07-31",
        "nav": 1.2411
      },
      {
        "date": "2026-08-03",
        "nav": 1.2256
      },
      {
        "date": "2026-08-04",
        "nav": 1.2589
      },
      {
        "date": "2026-08-05",
        "nav": 1.2867
      },
      {
        "date": "2026-08-06",
        "nav": 1.2843
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-07-23",
        "nav": 1.3726
      },
      {
        "date": "2026-07-24",
        "nav": 1.3469
      },
      {
        "date": "2026-07-27",
        "nav": 1.3709
      },
      {
        "date": "2026-07-28",
        "nav": 1.3129
      },
      {
        "date": "2026-07-29",
        "nav": 1.33
      },
      {
        "date": "2026-07-30",
        "nav": 1.2931
      },
      {
        "date": "2026-07-31",
        "nav": 1.3197
      },
      {
        "date": "2026-08-03",
        "nav": 1.3033
      },
      {
        "date": "2026-08-04",
        "nav": 1.3387
      },
      {
        "date": "2026-08-05",
        "nav": 1.3682
      },
      {
        "date": "2026-08-06",
        "nav": 1.3657
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-07-23",
        "nav": 1.1066
      },
      {
        "date": "2026-07-24",
        "nav": 1.1019
      },
      {
        "date": "2026-07-27",
        "nav": 1.1071
      },
      {
        "date": "2026-07-28",
        "nav": 1.0959
      },
      {
        "date": "2026-07-29",
        "nav": 1.1014
      },
      {
        "date": "2026-07-30",
        "nav": 1.0989
      },
      {
        "date": "2026-07-31",
        "nav": 1.1007
      },
      {
        "date": "2026-08-03",
        "nav": 1.0985
      },
      {
        "date": "2026-08-04",
        "nav": 1.1026
      },
      {
        "date": "2026-08-05",
        "nav": 1.1019
      },
      {
        "date": "2026-08-06",
        "nav": 1.0992
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-07-23",
        "nav": 1.0785
      },
      {
        "date": "2026-07-24",
        "nav": 1.0739
      },
      {
        "date": "2026-07-27",
        "nav": 1.0791
      },
      {
        "date": "2026-07-28",
        "nav": 1.0682
      },
      {
        "date": "2026-07-29",
        "nav": 1.0735
      },
      {
        "date": "2026-07-30",
        "nav": 1.0711
      },
      {
        "date": "2026-07-31",
        "nav": 1.0729
      },
      {
        "date": "2026-08-03",
        "nav": 1.0708
      },
      {
        "date": "2026-08-04",
        "nav": 1.0748
      },
      {
        "date": "2026-08-05",
        "nav": 1.0742
      },
      {
        "date": "2026-08-06",
        "nav": 1.0716
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-07-23",
        "nav": 0.7303
      },
      {
        "date": "2026-07-24",
        "nav": 0.7139
      },
      {
        "date": "2026-07-27",
        "nav": 0.7207
      },
      {
        "date": "2026-07-28",
        "nav": 0.7216
      },
      {
        "date": "2026-07-29",
        "nav": 0.737
      },
      {
        "date": "2026-07-30",
        "nav": 0.7388
      },
      {
        "date": "2026-07-31",
        "nav": 0.7406
      },
      {
        "date": "2026-08-03",
        "nav": 0.7346
      },
      {
        "date": "2026-08-04",
        "nav": 0.7307
      },
      {
        "date": "2026-08-05",
        "nav": 0.7329
      },
      {
        "date": "2026-08-06",
        "nav": 0.7278
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-07-23",
        "nav": 0.7483
      },
      {
        "date": "2026-07-24",
        "nav": 0.7315
      },
      {
        "date": "2026-07-27",
        "nav": 0.7385
      },
      {
        "date": "2026-07-28",
        "nav": 0.7395
      },
      {
        "date": "2026-07-29",
        "nav": 0.7553
      },
      {
        "date": "2026-07-30",
        "nav": 0.7572
      },
      {
        "date": "2026-07-31",
        "nav": 0.759
      },
      {
        "date": "2026-08-03",
        "nav": 0.7529
      },
      {
        "date": "2026-08-04",
        "nav": 0.7489
      },
      {
        "date": "2026-08-05",
        "nav": 0.7512
      },
      {
        "date": "2026-08-06",
        "nav": 0.746
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-07-23",
        "nav": 2.8686
      },
      {
        "date": "2026-07-24",
        "nav": 2.7968
      },
      {
        "date": "2026-07-27",
        "nav": 2.9015
      },
      {
        "date": "2026-07-28",
        "nav": 2.6234
      },
      {
        "date": "2026-07-29",
        "nav": 2.6333
      },
      {
        "date": "2026-07-30",
        "nav": 2.4519
      },
      {
        "date": "2026-07-31",
        "nav": 2.5498
      },
      {
        "date": "2026-08-03",
        "nav": 2.5126
      },
      {
        "date": "2026-08-04",
        "nav": 2.693
      },
      {
        "date": "2026-08-05",
        "nav": 2.7359
      },
      {
        "date": "2026-08-06",
        "nav": 2.7613
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-07-23",
        "nav": 2.531
      },
      {
        "date": "2026-07-24",
        "nav": 2.4911
      },
      {
        "date": "2026-07-27",
        "nav": 2.5238
      },
      {
        "date": "2026-07-28",
        "nav": 2.4587
      },
      {
        "date": "2026-07-29",
        "nav": 2.4748
      },
      {
        "date": "2026-07-30",
        "nav": 2.4019
      },
      {
        "date": "2026-07-31",
        "nav": 2.4398
      },
      {
        "date": "2026-08-03",
        "nav": 2.4132
      },
      {
        "date": "2026-08-04",
        "nav": 2.4523
      },
      {
        "date": "2026-08-05",
        "nav": 2.5123
      },
      {
        "date": "2026-08-06",
        "nav": 2.507
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-07-23",
        "nav": 0.7372
      },
      {
        "date": "2026-07-24",
        "nav": 0.7294
      },
      {
        "date": "2026-07-27",
        "nav": 0.7399
      },
      {
        "date": "2026-07-28",
        "nav": 0.7246
      },
      {
        "date": "2026-07-29",
        "nav": 0.7319
      },
      {
        "date": "2026-07-30",
        "nav": 0.7194
      },
      {
        "date": "2026-07-31",
        "nav": 0.7266
      },
      {
        "date": "2026-08-03",
        "nav": 0.7157
      },
      {
        "date": "2026-08-04",
        "nav": 0.7229
      },
      {
        "date": "2026-08-05",
        "nav": 0.74
      },
      {
        "date": "2026-08-06",
        "nav": 0.7402
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-07-23",
        "nav": 4.2645
      },
      {
        "date": "2026-07-24",
        "nav": 4.2571
      },
      {
        "date": "2026-07-27",
        "nav": 4.2966
      },
      {
        "date": "2026-07-28",
        "nav": 4.0934
      },
      {
        "date": "2026-07-29",
        "nav": 4.1112
      },
      {
        "date": "2026-07-30",
        "nav": 3.8507
      },
      {
        "date": "2026-07-31",
        "nav": 3.9912
      },
      {
        "date": "2026-08-03",
        "nav": 3.8827
      },
      {
        "date": "2026-08-04",
        "nav": 4.0073
      },
      {
        "date": "2026-08-05",
        "nav": 4.1539
      },
      {
        "date": "2026-08-06",
        "nav": 4.1791
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-07-23",
        "nav": 0.5381
      },
      {
        "date": "2026-07-24",
        "nav": 0.5339
      },
      {
        "date": "2026-07-27",
        "nav": 0.5415
      },
      {
        "date": "2026-07-28",
        "nav": 0.5291
      },
      {
        "date": "2026-07-29",
        "nav": 0.5308
      },
      {
        "date": "2026-07-30",
        "nav": 0.5233
      },
      {
        "date": "2026-07-31",
        "nav": 0.5254
      },
      {
        "date": "2026-08-03",
        "nav": 0.5231
      },
      {
        "date": "2026-08-04",
        "nav": 0.5209
      },
      {
        "date": "2026-08-05",
        "nav": 0.5228
      },
      {
        "date": "2026-08-06",
        "nav": 0.5234
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-07-23",
        "nav": 0.5482
      },
      {
        "date": "2026-07-24",
        "nav": 0.5439
      },
      {
        "date": "2026-07-27",
        "nav": 0.5516
      },
      {
        "date": "2026-07-28",
        "nav": 0.539
      },
      {
        "date": "2026-07-29",
        "nav": 0.5408
      },
      {
        "date": "2026-07-30",
        "nav": 0.5331
      },
      {
        "date": "2026-07-31",
        "nav": 0.5353
      },
      {
        "date": "2026-08-03",
        "nav": 0.533
      },
      {
        "date": "2026-08-04",
        "nav": 0.5307
      },
      {
        "date": "2026-08-05",
        "nav": 0.5326
      },
      {
        "date": "2026-08-06",
        "nav": 0.5333
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-07-23",
        "nav": 1.2751
      },
      {
        "date": "2026-07-24",
        "nav": 1.2592
      },
      {
        "date": "2026-07-27",
        "nav": 1.2712
      },
      {
        "date": "2026-07-28",
        "nav": 1.2679
      },
      {
        "date": "2026-07-29",
        "nav": 1.2778
      },
      {
        "date": "2026-07-30",
        "nav": 1.2861
      },
      {
        "date": "2026-07-31",
        "nav": 1.284
      },
      {
        "date": "2026-08-03",
        "nav": 1.2769
      },
      {
        "date": "2026-08-04",
        "nav": 1.2702
      },
      {
        "date": "2026-08-05",
        "nav": 1.2724
      },
      {
        "date": "2026-08-06",
        "nav": 1.2736
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-07-23",
        "nav": 1.1496
      },
      {
        "date": "2026-07-24",
        "nav": 1.1346
      },
      {
        "date": "2026-07-27",
        "nav": 1.1413
      },
      {
        "date": "2026-07-28",
        "nav": 1.1385
      },
      {
        "date": "2026-07-29",
        "nav": 1.1484
      },
      {
        "date": "2026-07-30",
        "nav": 1.149
      },
      {
        "date": "2026-07-31",
        "nav": 1.1464
      },
      {
        "date": "2026-08-03",
        "nav": 1.1422
      },
      {
        "date": "2026-08-04",
        "nav": 1.1429
      },
      {
        "date": "2026-08-05",
        "nav": 1.1479
      },
      {
        "date": "2026-08-06",
        "nav": 1.1386
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-07-23",
        "nav": 1.422
      },
      {
        "date": "2026-07-24",
        "nav": 1.4155
      },
      {
        "date": "2026-07-27",
        "nav": 1.4418
      },
      {
        "date": "2026-07-28",
        "nav": 1.3649
      },
      {
        "date": "2026-07-29",
        "nav": 1.3857
      },
      {
        "date": "2026-07-30",
        "nav": 1.3393
      },
      {
        "date": "2026-07-31",
        "nav": 1.373
      },
      {
        "date": "2026-08-03",
        "nav": 1.3681
      },
      {
        "date": "2026-08-04",
        "nav": 1.416
      },
      {
        "date": "2026-08-05",
        "nav": 1.4299
      },
      {
        "date": "2026-08-06",
        "nav": 1.428
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-07-23",
        "nav": 2.965
      },
      {
        "date": "2026-07-24",
        "nav": 2.9329
      },
      {
        "date": "2026-07-27",
        "nav": 2.9526
      },
      {
        "date": "2026-07-28",
        "nav": 2.9535
      },
      {
        "date": "2026-07-29",
        "nav": 2.972
      },
      {
        "date": "2026-07-30",
        "nav": 3.0058
      },
      {
        "date": "2026-07-31",
        "nav": 3.0021
      },
      {
        "date": "2026-08-03",
        "nav": 2.9943
      },
      {
        "date": "2026-08-04",
        "nav": 2.9821
      },
      {
        "date": "2026-08-05",
        "nav": 2.9787
      },
      {
        "date": "2026-08-06",
        "nav": 2.9821
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-07-23",
        "nav": 3.816
      },
      {
        "date": "2026-07-24",
        "nav": 3.732
      },
      {
        "date": "2026-07-27",
        "nav": 3.843
      },
      {
        "date": "2026-07-28",
        "nav": 3.406
      },
      {
        "date": "2026-07-29",
        "nav": 3.38
      },
      {
        "date": "2026-07-30",
        "nav": 3.035
      },
      {
        "date": "2026-07-31",
        "nav": 3.149
      },
      {
        "date": "2026-08-03",
        "nav": 3.094
      },
      {
        "date": "2026-08-04",
        "nav": 3.313
      },
      {
        "date": "2026-08-05",
        "nav": 3.339
      },
      {
        "date": "2026-08-06",
        "nav": 3.373
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-07-23",
        "nav": 1.4799
      },
      {
        "date": "2026-07-24",
        "nav": 1.472
      },
      {
        "date": "2026-07-27",
        "nav": 1.4744
      },
      {
        "date": "2026-07-28",
        "nav": 1.485
      },
      {
        "date": "2026-07-29",
        "nav": 1.4977
      },
      {
        "date": "2026-07-30",
        "nav": 1.5204
      },
      {
        "date": "2026-07-31",
        "nav": 1.5119
      },
      {
        "date": "2026-08-03",
        "nav": 1.5165
      },
      {
        "date": "2026-08-04",
        "nav": 1.4848
      },
      {
        "date": "2026-08-05",
        "nav": 1.4692
      },
      {
        "date": "2026-08-06",
        "nav": 1.469
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-07-23",
        "nav": 0.6036
      },
      {
        "date": "2026-07-24",
        "nav": 0.5829
      },
      {
        "date": "2026-07-27",
        "nav": 0.6061
      },
      {
        "date": "2026-07-28",
        "nav": 0.5795
      },
      {
        "date": "2026-07-29",
        "nav": 0.576
      },
      {
        "date": "2026-07-30",
        "nav": 0.5435
      },
      {
        "date": "2026-07-31",
        "nav": 0.5654
      },
      {
        "date": "2026-08-03",
        "nav": 0.5784
      },
      {
        "date": "2026-08-04",
        "nav": 0.6063
      },
      {
        "date": "2026-08-05",
        "nav": 0.6311
      },
      {
        "date": "2026-08-06",
        "nav": 0.6456
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-07-23",
        "nav": 13.83
      },
      {
        "date": "2026-07-24",
        "nav": 13.497
      },
      {
        "date": "2026-07-27",
        "nav": 14.17
      },
      {
        "date": "2026-07-28",
        "nav": 12.817
      },
      {
        "date": "2026-07-29",
        "nav": 13.037
      },
      {
        "date": "2026-07-30",
        "nav": 12.287
      },
      {
        "date": "2026-07-31",
        "nav": 12.766
      },
      {
        "date": "2026-08-03",
        "nav": 12.635
      },
      {
        "date": "2026-08-04",
        "nav": 13.693
      },
      {
        "date": "2026-08-05",
        "nav": 14.167
      },
      {
        "date": "2026-08-06",
        "nav": 14.364
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 4.3366,
      "price": 4.3366,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 4.1719,
      "price": 4.1719,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.25,
      "nav": 5.5797,
      "price": 5.5797,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.11,
      "nav": 0.7023,
      "price": 0.7023,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.3,
      "nav": 2.1912,
      "price": 2.1912,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.24,
      "nav": 2.6967,
      "price": 2.6967,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 5.4935,
      "price": 5.4935,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.896,
      "price": 1.896,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.3532,
      "price": 1.3532,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 3.46,
      "price": 3.46,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.125,
      "price": 1.125,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 2.391,
      "price": 2.391,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.7919,
      "price": 1.7919,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.9152,
      "price": 1.9152,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.6362,
      "price": 1.6362,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.4033,
      "price": 2.4033,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.5399,
      "price": 2.5399,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.078,
      "price": 1.078,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.3346,
      "price": 2.3346,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.3152,
      "price": 1.3152,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 4.65,
      "sharpe": -0.23,
      "calmar": -0.23
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.53,
      "sharpe": 1.08,
      "calmar": 1.08
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 7.59,
      "sharpe": 4.03,
      "calmar": 4.03
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.34,
      "sharpe": -1.6,
      "calmar": -1.6
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 9.13,
      "sharpe": -2.4,
      "calmar": -2.4
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 7.32,
      "sharpe": -3.21,
      "calmar": -3.21
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.62,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.65,
      "sharpe": -1.01,
      "calmar": -1.01
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.49,
      "sharpe": 0.03,
      "calmar": 0.03
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.3,
      "sharpe": 4.88,
      "calmar": 4.88
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.39,
      "sharpe": -1.12,
      "calmar": -1.12
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 5.73,
      "sharpe": -1.86,
      "calmar": -1.86
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 5.42,
      "sharpe": -5.4,
      "calmar": -5.4
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.64,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.65,
      "sharpe": -0.58,
      "calmar": -0.58
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.58,
      "sharpe": 5.66,
      "calmar": 5.66
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.58,
      "sharpe": -1.73,
      "calmar": -1.73
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 2.86,
      "sharpe": 0.96,
      "calmar": 0.96
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.46,
      "sharpe": -1.43,
      "calmar": -1.43
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.47,
      "sharpe": 0.2,
      "calmar": 0.2
    }
  ],
  "news": [
    {
      "title": "时隔半年，上海再出楼市新政。8月20日，上海市住建委、市房管局、市财政局等六部门联合出台《关于优化本市房地产政策措施的通知》，推出8项举措，涉及公积金、个人住房贷款、以旧换新、房票安置、二手房收购等方面。新政自8月21日起施行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "12:48",
      "impact": "neutral"
    },
    {
      "title": "一个服务超11亿人口，一个服务2.73亿人口，国家电网与南方电网，共同构成全球规模最大的电力系统。在5万亿电网投资蓄势待发、新能源大规模并网、全国统一电力市场加速构建的时代背景下，两大电网开启深度联动，将给各行业带来怎样的改变？8月18日，在广州南方电网总部，南方电网董事长钱朝阳、总经理季明彬与国家电网董事长张智刚、总经理张文峰举行会谈。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:10",
      "impact": "neutral"
    },
    {
      "title": "8月19日晚，南京市多家市属集团及上市公司接连发布公告称：南京市国资委将其持有的部分产业集团股权统一作为资本金注入南京市国有资产投资管理控股（集团）有限责任公司（以下简称“南京市国资集团”）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:05",
      "impact": "neutral"
    },
    {
      "title": "·商务部回应美征收无人机关税问题敦促美方立即撤销232相关关税措施·上海优化房地产政策措施精准施策促进合理购房需求积极释放·工业和信息化部再次批复民营卫星物联网业务商用试验·商务部新闻发言人何亚东在20日举行的例行新闻发布会上回应有关美征收无人机关税的提问时说，我们注意到美方对无人机及零部件征收232关税的决定。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:45",
      "impact": "neutral"
    },
    {
      "title": "8月20日，商务部召开例行新闻发布会。大河财立方记者现场获悉，今年前7个月，我国进口增长22%，保持了良好增长势头，我国自150多个贸易伙伴的进口实现正增长。据海关总署公布的数据，今年前7个月，我国货物贸易进出口总值301264亿元，同比增长17.3%。其中，出口174400亿元，增长14.0%；进口126864亿元，增长22.0%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:27",
      "impact": "neutral"
    },
    {
      "title": "据“大连发布”消息，8月20日，大连市统计局、国家统计局大连调查队发布的1—7月份大连市经济运行情况显示，1—7月份，全市规上工业增加值同比增长6.2%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:24",
      "impact": "neutral"
    },
    {
      "title": "LPR连续15个月“按兵不动”，降息还有戏吗？东方金诚首席宏观分析师王青对界面新闻表示，8月两个期限品种的LPR报价保持不变，符合市场预期。首先，当月定价基础没有变化。自上月LPR报价公布以来，主要政策利率（央行7天期逆回购利率）保持在1.4%。这意味着8月LPR报价的定价基础稳定，已在很大程度上预示当月LPR报价会继续按兵不动。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:10",
      "impact": "neutral"
    },
    {
      "title": "8月20日下午，商务部举行例行新闻发布会，新闻发言人何亚东就欧盟对中国实体实施外国补贴调查相关问题进行了回应。据了解，近期，欧盟利用其《外国补贴条例》对京东进行调查，肆意向中国实体跨境索取广泛的、非必要的中国境内信息。8月19日，司法部曾发布公告，认定欧盟利用其《外国补贴条例》在对京东调查中对中国实体采取的相关跨境调查做法构成不当域外管辖。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:04",
      "impact": "neutral"
    },
    {
      "title": "中新社内蒙古二连浩特8月20日电外国患者就医顺畅、外国游客支付便利、中外游客跨境旅游购物更方便……中国(内蒙古)自由贸易试验区(简称：内蒙古自贸试验区)揭牌以来，中国北方口岸城市二连浩特发生了不小的变化。“通过医生针刺、拔罐、艾灸治疗后，我的心悸、失眠明显好转，腰部疼痛缓解。”8月19日，正在二连浩特市蒙医中医医院接受治疗的蒙古国患者钢德萨布说。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:01",
      "impact": "neutral"
    },
    {
      "title": "一图看懂｜给中国基建做个“CT”：六张网里藏着23万亿",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:00",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 50,
    "label": "中性",
    "upDownRatio": "3,206/1,396",
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
