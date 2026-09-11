// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-11 14:15:37
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-11 14:15 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-11",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3888.11,
      "change": -46.29,
      "changePct": "-1.18%",
      "high": 3912.32,
      "low": 3852.03,
      "volume": 579123145.0,
      "amount": 958186340000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13471.26,
      "change": -146.41,
      "changePct": "-1.08%",
      "high": 13522.3,
      "low": 13263.35,
      "volume": 636088925.0,
      "amount": 1013712150000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3322.04,
      "change": -16.38,
      "changePct": "-0.49%",
      "high": 3335.81,
      "low": 3261.1,
      "volume": 165103482.0,
      "amount": 457744520000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1553.39,
      "change": -15.83,
      "changePct": "-1.01%",
      "high": 1556.68,
      "low": 1516.2,
      "volume": 9973991.0,
      "amount": 77879620000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4510.16,
      "change": -38.23,
      "changePct": "-0.84%",
      "high": 4520.17,
      "low": 4461.57,
      "volume": 204230027.0,
      "amount": 522206650000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7580.54,
      "change": -137.26,
      "changePct": "-1.78%",
      "high": 7638.63,
      "low": 7451.12,
      "volume": 187044436.0,
      "amount": 353854760000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.38万亿",
      "label": "成交额",
      "rawAmount": 3383584040000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,149/1,925",
      "label": "涨/跌家数",
      "rawUp": 2149,
      "rawDown": 1925,
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
    "totalInflow": 13.92,
    "totalOutflow": 0,
    "netFlow": 13.92,
    "netFlowTrend": [
      2.78,
      5.57,
      8.35,
      11.14,
      13.92
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
      "inflow": 11.8,
      "pct": 0.6
    },
    {
      "name": "5G",
      "inflow": 3.4,
      "pct": 0.29
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -1.72
    },
    {
      "name": "食品",
      "inflow": -0.05,
      "pct": -1.22
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -1.51
    },
    {
      "name": "电子",
      "inflow": -0.14,
      "pct": -0.85
    },
    {
      "name": "家电",
      "inflow": -0.19,
      "pct": -1.12
    },
    {
      "name": "游戏",
      "inflow": -0.2,
      "pct": -1.72
    },
    {
      "name": "云计算",
      "inflow": -0.29,
      "pct": -0.87
    },
    {
      "name": "新能源",
      "inflow": -0.32,
      "pct": -1.92
    },
    {
      "name": "光伏",
      "inflow": -0.38,
      "pct": -1.86
    },
    {
      "name": "人工智能",
      "inflow": -0.6,
      "pct": -0.6
    },
    {
      "name": "传媒",
      "inflow": -0.64,
      "pct": -1.32
    },
    {
      "name": "医药",
      "inflow": -0.99,
      "pct": -1.08
    },
    {
      "name": "军工",
      "inflow": -1.12,
      "pct": -1.1
    },
    {
      "name": "白酒",
      "inflow": -1.27,
      "pct": -1.44
    },
    {
      "name": "医疗",
      "inflow": -1.29,
      "pct": -1.8
    },
    {
      "name": "芯片",
      "inflow": -1.68,
      "pct": -1.64
    },
    {
      "name": "银行",
      "inflow": -2.72,
      "pct": -0.7
    },
    {
      "name": "半导体",
      "inflow": -3.22,
      "pct": -1.64
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.675,
      "changePct": 0.6,
      "change": 0.004,
      "turnover": 39.35
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.047,
      "changePct": 0.29,
      "change": 0.003,
      "turnover": 11.33
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.995,
      "changePct": -0.6,
      "change": -0.006,
      "turnover": 2.0
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.847,
      "changePct": -0.7,
      "change": -0.006,
      "turnover": 9.06
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.812,
      "changePct": -0.85,
      "change": -0.007,
      "turnover": 0.46
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.6,
      "changePct": -0.87,
      "change": -0.014,
      "turnover": 0.96
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.365,
      "changePct": -1.08,
      "change": -0.004,
      "turnover": 3.31
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.167,
      "changePct": -1.1,
      "change": -0.013,
      "turnover": 3.73
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.41,
      "changePct": -1.12,
      "change": -0.016,
      "turnover": 0.64
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.487,
      "changePct": -1.22,
      "change": -0.006,
      "turnover": 0.17
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.822,
      "changePct": -1.32,
      "change": -0.011,
      "turnover": 2.13
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.412,
      "changePct": -1.44,
      "change": -0.006,
      "turnover": 4.25
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.111,
      "changePct": -1.51,
      "change": -0.017,
      "turnover": 0.24
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.96,
      "changePct": -1.64,
      "change": -0.016,
      "turnover": 10.74
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.077,
      "changePct": -1.64,
      "change": -0.018,
      "turnover": 5.6
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.086,
      "changePct": -1.72,
      "change": -0.019,
      "turnover": 0.68
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.027,
      "changePct": -1.72,
      "change": -0.018,
      "turnover": 0.08
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.327,
      "changePct": -1.8,
      "change": -0.006,
      "turnover": 4.31
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.793,
      "changePct": -1.86,
      "change": -0.015,
      "turnover": 1.27
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.302,
      "changePct": -1.92,
      "change": -0.045,
      "turnover": 1.08
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.292,
      "changePct": -2.05,
      "change": -0.027,
      "turnover": 8.06
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.487,
      "changePct": -2.17,
      "change": -0.033,
      "turnover": 1.12
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.803,
      "changePct": -2.19,
      "change": -0.018,
      "turnover": 8.73
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.748,
      "changePct": -2.35,
      "change": -0.018,
      "turnover": 1.21
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.146,
      "changePct": -2.8,
      "change": -0.033,
      "turnover": 0.7
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.506,
      "changePct": -2.88,
      "change": -0.015,
      "turnover": 13.38
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.186,
      "changePct": -3.03,
      "change": -0.037,
      "turnover": 1.38
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.754,
      "changePct": -4.05,
      "change": -0.074,
      "turnover": 11.42
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.302,
      "changePct": -1.92,
      "amount": 1.08,
      "netFlow": -0.27
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.365,
      "changePct": -1.08,
      "amount": 3.31,
      "netFlow": -0.83
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.783,
      "changePct": -0.81,
      "amount": 7.29,
      "netFlow": -1.82
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.447,
      "changePct": -0.87,
      "amount": 9.0,
      "netFlow": -2.25
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.96,
      "changePct": -1.64,
      "amount": 10.74,
      "netFlow": -2.68
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.506,
      "changePct": -2.88,
      "amount": 13.38,
      "netFlow": -3.35
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.981,
      "changePct": -1.16,
      "amount": 19.84,
      "netFlow": -4.96
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.611,
      "changePct": -1.69,
      "amount": 43.18,
      "netFlow": -10.8
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.579,
      "changePct": -0.82,
      "amount": 44.09,
      "netFlow": -11.02
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.639,
      "changePct": -1.21,
      "amount": 80.83,
      "netFlow": -20.21
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.579,
      "changePct": -0.82,
      "amount": 44.09,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.981,
      "changePct": -1.16,
      "amount": 19.84,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.611,
      "changePct": -1.69,
      "amount": 43.18,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.783,
      "changePct": -0.81,
      "amount": 7.29,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.447,
      "changePct": -0.87,
      "amount": 9.0,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 39.35,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "5G",
      "turnover": 11.33,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "人工智能",
      "turnover": 2.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 9.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.64,
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
      "name": "传媒",
      "turnover": 2.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 4.25,
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
      "name": "半导体",
      "turnover": 10.74,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "芯片",
      "turnover": 5.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.08,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.08,
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
      "nav": 4.477,
      "ret1w": -1.35,
      "ret1m": 0.02,
      "ret3m": 1.28,
      "ret6m": -6.1,
      "ret1y": -1.97,
      "ret2y": 21.71,
      "ret3y": 157.76
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1878,
      "ret1w": 0.22,
      "ret1m": 3.89,
      "ret3m": 0.36,
      "ret6m": -12.71,
      "ret1y": 5.71,
      "ret2y": 4.92,
      "ret3y": 75.36
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.8597,
      "ret1w": -1.45,
      "ret1m": 6.05,
      "ret3m": 18.37,
      "ret6m": 0.17,
      "ret1y": 47.36,
      "ret2y": 84.44,
      "ret3y": 308.4
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.697,
      "ret1w": -1.01,
      "ret1m": -3.98,
      "ret3m": -3.33,
      "ret6m": 4.36,
      "ret1y": -10.16,
      "ret2y": -18.39,
      "ret3y": 5.41
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.973,
      "ret1w": -2.34,
      "ret1m": -3.61,
      "ret3m": -13.5,
      "ret6m": -19.66,
      "ret1y": -35.12,
      "ret2y": -30.94,
      "ret3y": 11.66
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.691,
      "ret1w": -1.98,
      "ret1m": 0.07,
      "ret3m": -3.96,
      "ret6m": -6.22,
      "ret1y": -28.31,
      "ret2y": -18.48,
      "ret3y": 38.11
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4086,
      "ret1w": -1.14,
      "ret1m": -1.99,
      "ret3m": -2.99,
      "ret6m": 2.21,
      "ret1y": -8.31,
      "ret2y": 7.84,
      "ret3y": 61.51
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.853,
      "ret1w": -2.11,
      "ret1m": -1.65,
      "ret3m": -2.52,
      "ret6m": -6.41,
      "ret1y": -7.35,
      "ret2y": 1.81,
      "ret3y": 71.73
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3127,
      "ret1w": -1.42,
      "ret1m": -0.97,
      "ret3m": -3.65,
      "ret6m": -2.88,
      "ret1y": -3.1,
      "ret2y": 5.56,
      "ret3y": 45.69
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.302,
      "ret1w": -0.78,
      "ret1m": -0.12,
      "ret3m": -6.11,
      "ret6m": -3.28,
      "ret1y": 26.66,
      "ret2y": 59.06,
      "ret3y": 285.3
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.087,
      "ret1w": -1.63,
      "ret1m": -4.4,
      "ret3m": -5.56,
      "ret6m": 3.92,
      "ret1y": -7.25,
      "ret2y": -19.3,
      "ret3y": 4.02
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.273,
      "ret1w": -2.11,
      "ret1m": -3.73,
      "ret3m": -8.12,
      "ret6m": 4.12,
      "ret1y": -18.24,
      "ret2y": -17.64,
      "ret3y": 29.15
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6487,
      "ret1w": -0.79,
      "ret1m": 1.4,
      "ret3m": -9.21,
      "ret6m": -40.42,
      "ret1y": -50.27,
      "ret2y": -42.99,
      "ret3y": 23.79
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9092,
      "ret1w": -0.96,
      "ret1m": -3.41,
      "ret3m": -2.2,
      "ret6m": 5.68,
      "ret1y": -0.87,
      "ret2y": -6.93,
      "ret3y": 9.99
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6331,
      "ret1w": -1.35,
      "ret1m": 0.13,
      "ret3m": -1.25,
      "ret6m": -4.13,
      "ret1y": -6.37,
      "ret2y": 6.68,
      "ret3y": 76.55
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3341,
      "ret1w": -1.04,
      "ret1m": 4.08,
      "ret3m": -0.59,
      "ret6m": -18.53,
      "ret1y": 20.61,
      "ret2y": 68.88,
      "ret3y": 231.08
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5402,
      "ret1w": -1.81,
      "ret1m": -1.89,
      "ret3m": 0.44,
      "ret6m": -1.06,
      "ret1y": -8.71,
      "ret2y": -6.9,
      "ret3y": 25.96
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.963,
      "ret1w": -1.93,
      "ret1m": -5.68,
      "ret3m": -13.09,
      "ret6m": 12.76,
      "ret1y": -1.93,
      "ret2y": -20.48,
      "ret3y": 0.31
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3113,
      "ret1w": -1.21,
      "ret1m": -2.83,
      "ret3m": -1.78,
      "ret6m": 1.32,
      "ret1y": -8.19,
      "ret2y": 2.72,
      "ret3y": 17.48
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.303,
      "ret1w": -1.4,
      "ret1m": -1.17,
      "ret3m": -0.7,
      "ret6m": 3.72,
      "ret1y": -1.44,
      "ret2y": 16.37,
      "ret3y": 82.25
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.236,
      "ret1w": -1.37,
      "ret1m": -0.23,
      "ret3m": -5.6,
      "ret6m": -8.1,
      "ret1y": -8.54,
      "ret2y": 10.09,
      "ret3y": 49.82
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3149,
      "ret1w": -1.37,
      "ret1m": -0.23,
      "ret3m": -5.57,
      "ret6m": -8.02,
      "ret1y": -8.37,
      "ret2y": 10.51,
      "ret3y": 51.02
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0813,
      "ret1w": -0.18,
      "ret1m": -0.32,
      "ret3m": -1.35,
      "ret6m": -2.01,
      "ret1y": -0.61,
      "ret2y": 0.48,
      "ret3y": 8.74
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0547,
      "ret1w": -0.18,
      "ret1m": -0.31,
      "ret3m": -1.3,
      "ret6m": -1.87,
      "ret1y": -0.31,
      "ret2y": 1.09,
      "ret3y": 10.05
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7021,
      "ret1w": -0.89,
      "ret1m": -3.76,
      "ret3m": -4.88,
      "ret6m": -3.21,
      "ret1y": -12.96,
      "ret2y": -10.93,
      "ret3y": 12.34
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.72,
      "ret1w": -0.88,
      "ret1m": -3.74,
      "ret3m": -4.84,
      "ret6m": -3.08,
      "ret1y": -12.73,
      "ret2y": -10.49,
      "ret3y": 13.46
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8614,
      "ret1w": -0.15,
      "ret1m": 5.71,
      "ret3m": 3.59,
      "ret6m": -6.62,
      "ret1y": 36.5,
      "ret2y": 55.85,
      "ret3y": 180.53
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4111,
      "ret1w": -1.49,
      "ret1m": -3.86,
      "ret3m": -6.12,
      "ret6m": -3.16,
      "ret1y": -2.3,
      "ret2y": 14.04,
      "ret3y": 83.86
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7067,
      "ret1w": -1.6,
      "ret1m": -4.9,
      "ret3m": -5.99,
      "ret6m": -11.71,
      "ret1y": -19.78,
      "ret2y": -14.18,
      "ret3y": 14.56
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9582,
      "ret1w": -1.48,
      "ret1m": -4.07,
      "ret3m": -7.96,
      "ret6m": -7.62,
      "ret1y": 11.88,
      "ret2y": 31.05,
      "ret3y": 137.32
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.503,
      "ret1w": -0.71,
      "ret1m": 0.08,
      "ret3m": -4.15,
      "ret6m": -8.36,
      "ret1y": -5.02,
      "ret2y": 8.73,
      "ret3y": 54.15
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5127,
      "ret1w": -0.7,
      "ret1m": 0.1,
      "ret3m": -4.11,
      "ret6m": -8.27,
      "ret1y": -4.83,
      "ret2y": 9.18,
      "ret3y": 55.41
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2833,
      "ret1w": -0.27,
      "ret1m": -0.27,
      "ret3m": 0.17,
      "ret6m": 0.86,
      "ret1y": -0.59,
      "ret2y": -0.23,
      "ret3y": 1.48
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1092,
      "ret1w": -0.85,
      "ret1m": -1.63,
      "ret3m": -3.61,
      "ret6m": 3.2,
      "ret1y": -6.2,
      "ret2y": -3.89,
      "ret3y": 18.38
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3774,
      "ret1w": -0.24,
      "ret1m": -0.48,
      "ret3m": -5.5,
      "ret6m": -10.3,
      "ret1y": -7.21,
      "ret2y": -20.57,
      "ret3y": 15.94
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0001,
      "ret1w": -1.08,
      "ret1m": -1.48,
      "ret3m": -0.78,
      "ret6m": -2.2,
      "ret1y": -8.3,
      "ret2y": 8.88,
      "ret3y": 55.14
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.314,
      "ret1w": -0.33,
      "ret1m": 2.66,
      "ret3m": -0.9,
      "ret6m": -19.19,
      "ret1y": 29.2,
      "ret2y": 54.79,
      "ret3y": 213.83
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5167,
      "ret1w": -0.82,
      "ret1m": -0.28,
      "ret3m": 3.73,
      "ret6m": 3.25,
      "ret1y": 0.07,
      "ret2y": 0.62,
      "ret3y": 16.52
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6087,
      "ret1w": -1.58,
      "ret1m": -3.03,
      "ret3m": -5.3,
      "ret6m": -20.54,
      "ret1y": -14.9,
      "ret2y": 2.61,
      "ret3y": 49.01
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.785,
      "ret1w": 1.15,
      "ret1m": 8.99,
      "ret3m": 0.57,
      "ret6m": -5.16,
      "ret1y": 72.46,
      "ret2y": 106.01,
      "ret3y": 390.22
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0666,
      "ret1w": -0.04,
      "ret1m": 0.23,
      "ret3m": -0.01,
      "ret6m": -0.79,
      "ret1y": -0.23,
      "ret2y": 1.25,
      "ret3y": 5.0
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1152,
      "ret1w": -0.04,
      "ret1m": 0.22,
      "ret3m": 0.01,
      "ret6m": -0.73,
      "ret1y": -0.11,
      "ret2y": 1.53,
      "ret3y": 5.73
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0648,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.09,
      "ret6m": 0.3,
      "ret1y": 0.74,
      "ret2y": 1.55,
      "ret3y": 2.62
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0992,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.34,
      "ret1y": 0.76,
      "ret2y": 1.52,
      "ret3y": 3.85
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1087,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.14,
      "ret6m": 0.39,
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
      "ret3m": 0.06,
      "ret6m": 0.35,
      "ret1y": 0.72,
      "ret2y": 1.47,
      "ret3y": 2.66
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0907,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.08,
      "ret6m": 0.42,
      "ret1y": 0.87,
      "ret2y": 1.78,
      "ret3y": 3.31
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0594,
      "ret1w": -0.51,
      "ret1m": -0.29,
      "ret3m": -1.06,
      "ret6m": -1.44,
      "ret1y": -0.27,
      "ret2y": 5.1,
      "ret3y": 12.81
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2118,
      "ret1w": -0.67,
      "ret1m": -0.35,
      "ret3m": -0.76,
      "ret6m": -2.11,
      "ret1y": -1.08,
      "ret2y": 1.95,
      "ret3y": 7.22
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0662,
      "ret1w": -0.51,
      "ret1m": -0.28,
      "ret3m": -1.02,
      "ret6m": -1.34,
      "ret1y": -0.07,
      "ret2y": 5.52,
      "ret3y": 13.72
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0463,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.85,
      "ret2y": 1.75,
      "ret3y": 3.57
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1696,
      "ret1w": -0.09,
      "ret1m": 0.89,
      "ret3m": 0.01,
      "ret6m": -2.56,
      "ret1y": -3.48,
      "ret2y": 0.16,
      "ret3y": 10.35
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2104,
      "ret1w": -0.21,
      "ret1m": -0.49,
      "ret3m": -0.87,
      "ret6m": -0.76,
      "ret1y": -1.19,
      "ret2y": 2.76,
      "ret3y": 14.83
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1343,
      "ret1w": -0.23,
      "ret1m": -0.05,
      "ret3m": -0.65,
      "ret6m": -1.05,
      "ret1y": 0.38,
      "ret2y": 3.04,
      "ret3y": 10.31
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2056,
      "ret1w": -0.22,
      "ret1m": -0.04,
      "ret3m": -0.61,
      "ret6m": -0.94,
      "ret1y": 0.58,
      "ret2y": 3.47,
      "ret3y": 11.23
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.43,
      "ret1w": -2.25,
      "ret1m": 4.29,
      "ret3m": 7.71,
      "ret6m": -0.61,
      "ret1y": 42.44,
      "ret2y": 87.94,
      "ret3y": 169.4
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9671,
      "ret1w": -0.5,
      "ret1m": -0.9,
      "ret3m": -0.57,
      "ret6m": 3.89,
      "ret1y": 8.8,
      "ret2y": 6.66,
      "ret3y": 39.15
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8195,
      "ret1w": -1.91,
      "ret1m": -3.43,
      "ret3m": -5.45,
      "ret6m": -9.11,
      "ret1y": -11.98,
      "ret2y": -1.14,
      "ret3y": 56.42
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3495,
      "ret1w": -1.5,
      "ret1m": -2.39,
      "ret3m": -1.07,
      "ret6m": 4.56,
      "ret1y": 20.27,
      "ret2y": 27.35,
      "ret3y": 79.67
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9285,
      "ret1w": -0.46,
      "ret1m": -0.74,
      "ret3m": -0.85,
      "ret6m": -1.23,
      "ret1y": -3.22,
      "ret2y": -4.89,
      "ret3y": -2.96
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6652,
      "ret1w": -1.63,
      "ret1m": 3.04,
      "ret3m": 1.46,
      "ret6m": -2.23,
      "ret1y": 28.66,
      "ret2y": 48.24,
      "ret3y": 109.43
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.558,
      "ret1w": -0.59,
      "ret1m": -1.68,
      "ret3m": -1.94,
      "ret6m": 1.6,
      "ret1y": 4.21,
      "ret2y": 4.71,
      "ret3y": 23.96
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.172,
      "ret1w": -2.82,
      "ret1m": -5.64,
      "ret3m": -7.93,
      "ret6m": 8.92,
      "ret1y": -10.81,
      "ret2y": -28.41,
      "ret3y": 102.07
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.945,
      "ret1w": -1.77,
      "ret1m": -1.87,
      "ret3m": -1.97,
      "ret6m": 7.75,
      "ret1y": -12.26,
      "ret2y": -25.18,
      "ret3y": 52.42
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9051,
      "ret1w": -0.82,
      "ret1m": 4.03,
      "ret3m": 3.51,
      "ret6m": -1.42,
      "ret1y": 36.54,
      "ret2y": 78.86,
      "ret3y": 158.69
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6244,
      "ret1w": -1.86,
      "ret1m": -0.94,
      "ret3m": 5.45,
      "ret6m": 12.35,
      "ret1y": 5.24,
      "ret2y": 37.73,
      "ret3y": 67.29
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7749,
      "ret1w": -0.45,
      "ret1m": 2.36,
      "ret3m": 5.7,
      "ret6m": 6.81,
      "ret1y": 15.05,
      "ret2y": 30.69,
      "ret3y": 66.97
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3358,
      "ret1w": -0.82,
      "ret1m": 1.31,
      "ret3m": 3.06,
      "ret6m": 2.2,
      "ret1y": 8.29,
      "ret2y": 16.15,
      "ret3y": 46.01
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.269,
      "ret1w": -0.78,
      "ret1m": -2.38,
      "ret3m": -3.28,
      "ret6m": -4.44,
      "ret1y": -0.86,
      "ret2y": 2.34,
      "ret3y": -10.72
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.077,
      "ret1w": -1.24,
      "ret1m": -3.08,
      "ret3m": -0.76,
      "ret6m": 4.58,
      "ret1y": -17.74,
      "ret2y": 10.95,
      "ret3y": 53.43
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0113,
      "ret1w": -0.02,
      "ret1m": 0.0,
      "ret3m": 0.12,
      "ret6m": 0.56,
      "ret1y": 1.45,
      "ret2y": 2.25,
      "ret3y": 3.46
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0103,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": 0.14,
      "ret6m": 0.55,
      "ret1y": 1.46,
      "ret2y": 2.31,
      "ret3y": 3.65
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.391,
      "ret1w": -0.36,
      "ret1m": -0.36,
      "ret3m": -4.92,
      "ret6m": -7.82,
      "ret1y": -4.4,
      "ret2y": -1.9,
      "ret3y": 37.45
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.77,
      "ret1w": -0.97,
      "ret1m": -0.18,
      "ret3m": -4.75,
      "ret6m": -5.72,
      "ret1y": -4.48,
      "ret2y": 5.85,
      "ret3y": 64.1
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6599,
      "ret1w": -2.71,
      "ret1m": -1.18,
      "ret3m": -2.13,
      "ret6m": 0.64,
      "ret1y": -14.04,
      "ret2y": 23.68,
      "ret3y": 80.62
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1151,
      "ret1w": -0.88,
      "ret1m": -0.35,
      "ret3m": -2.08,
      "ret6m": -1.36,
      "ret1y": -0.06,
      "ret2y": 7.93,
      "ret3y": 48.58
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1759,
      "ret1w": -0.87,
      "ret1m": -0.34,
      "ret3m": -2.05,
      "ret6m": -1.26,
      "ret1y": 0.15,
      "ret2y": 8.37,
      "ret3y": 49.78
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9587,
      "ret1w": -1.69,
      "ret1m": -0.87,
      "ret3m": -4.67,
      "ret6m": -5.23,
      "ret1y": -8.82,
      "ret2y": 6.88,
      "ret3y": 66.64
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7634,
      "ret1w": -0.79,
      "ret1m": -0.74,
      "ret3m": -3.01,
      "ret6m": -3.74,
      "ret1y": -3.01,
      "ret2y": 0.48,
      "ret3y": 42.92
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5527,
      "ret1w": -1.63,
      "ret1m": -1.47,
      "ret3m": -3.04,
      "ret6m": -1.58,
      "ret1y": -10.88,
      "ret2y": 8.04,
      "ret3y": 58.58
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9239,
      "ret1w": -0.37,
      "ret1m": 0.93,
      "ret3m": -5.48,
      "ret6m": -9.18,
      "ret1y": 4.68,
      "ret2y": 10.14,
      "ret3y": 76.78
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1286,
      "ret1w": -0.85,
      "ret1m": -2.12,
      "ret3m": -2.06,
      "ret6m": 2.33,
      "ret1y": -3.26,
      "ret2y": -1.03,
      "ret3y": 32.35
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5017,
      "ret1w": -0.42,
      "ret1m": -1.48,
      "ret3m": -1.54,
      "ret6m": 4.3,
      "ret1y": 1.64,
      "ret2y": 10.53,
      "ret3y": 29.51
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4046,
      "ret1w": -1.0,
      "ret1m": -1.15,
      "ret3m": -1.75,
      "ret6m": 1.71,
      "ret1y": 13.59,
      "ret2y": 14.21,
      "ret3y": 41.92
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7147,
      "ret1w": -0.53,
      "ret1m": 0.38,
      "ret3m": -4.43,
      "ret6m": -7.93,
      "ret1y": -0.65,
      "ret2y": 5.11,
      "ret3y": 60.84
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1845,
      "ret1w": 0.26,
      "ret1m": 1.51,
      "ret3m": -1.46,
      "ret6m": -7.5,
      "ret1y": 2.61,
      "ret2y": 9.16,
      "ret3y": 58.65
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1867,
      "ret1w": 0.26,
      "ret1m": 1.54,
      "ret3m": -1.4,
      "ret6m": -7.37,
      "ret1y": 2.67,
      "ret2y": 9.32,
      "ret3y": 58.12
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3844,
      "ret1w": -0.72,
      "ret1m": -0.43,
      "ret3m": -2.99,
      "ret6m": -8.13,
      "ret1y": -6.69,
      "ret2y": 1.97,
      "ret3y": 42.28
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4162,
      "ret1w": -0.72,
      "ret1m": -0.42,
      "ret3m": -2.96,
      "ret6m": -8.03,
      "ret1y": -6.5,
      "ret2y": 2.39,
      "ret3y": 43.43
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0045,
      "ret1w": -0.86,
      "ret1m": 0.62,
      "ret3m": -3.15,
      "ret6m": -12.57,
      "ret1y": -1.86,
      "ret2y": 8.86,
      "ret3y": 67.9
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1618,
      "ret1w": -0.03,
      "ret1m": -0.15,
      "ret3m": -0.69,
      "ret6m": -0.36,
      "ret1y": -0.54,
      "ret2y": 1.57,
      "ret3y": 7.7
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1817,
      "ret1w": -0.03,
      "ret1m": -0.14,
      "ret3m": -0.67,
      "ret6m": -0.29,
      "ret1y": -0.39,
      "ret2y": 1.88,
      "ret3y": 8.36
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0848,
      "ret1w": -0.01,
      "ret1m": 0.05,
      "ret3m": 0.12,
      "ret6m": 0.37,
      "ret1y": 0.88,
      "ret2y": 1.86,
      "ret3y": 3.21
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4093,
      "ret1w": -0.02,
      "ret1m": -0.05,
      "ret3m": -0.11,
      "ret6m": 0.06,
      "ret1y": 0.01,
      "ret2y": 0.61,
      "ret3y": 11.91
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4617,
      "ret1w": -0.02,
      "ret1m": -0.03,
      "ret3m": -0.08,
      "ret6m": 0.17,
      "ret1y": 0.22,
      "ret2y": 1.02,
      "ret3y": 12.81
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1097,
      "ret1w": 0.24,
      "ret1m": 1.94,
      "ret3m": -1.1,
      "ret6m": 1.09,
      "ret1y": 11.38,
      "ret2y": 21.87,
      "ret3y": 67.13
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2231,
      "ret1w": -0.46,
      "ret1m": -0.49,
      "ret3m": -2.89,
      "ret6m": -1.3,
      "ret1y": 2.58,
      "ret2y": 6.9,
      "ret3y": 50.24
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 4.477
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 4.1878
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 5.8597
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.697
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.973
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 2.691
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 5.4086
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.853
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.3127
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 3.302
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.087
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 2.273
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.6487
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.9092
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.6331
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 2.3341
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 2.5402
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.963
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 2.3113
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.303
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.236
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.3149
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.0813
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.0547
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.7021
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.72
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 2.8614
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 2.4111
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.7067
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 3.9582
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.503
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.5127
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.2833
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.1092
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.3774
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 3.0001
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 3.314
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 1.5167
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 0.6087
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-11",
        "nav": 14.785
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 4.477,
      "price": 4.477,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.19,
      "nav": 4.1878,
      "price": 4.1878,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.3,
      "nav": 5.8597,
      "price": 5.8597,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.2,
      "nav": 0.697,
      "price": 0.697,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.973,
      "price": 1.973,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.0,
      "nav": 2.691,
      "price": 2.691,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 5.4086,
      "price": 5.4086,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.853,
      "price": 1.853,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.3127,
      "price": 1.3127,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 3.302,
      "price": 3.302,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.22,
      "nav": 1.087,
      "price": 1.087,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 2.273,
      "price": 2.273,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.6487,
      "price": 1.6487,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.9092,
      "price": 1.9092,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.6331,
      "price": 1.6331,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.2,
      "nav": 2.3341,
      "price": 2.3341,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.5402,
      "price": 2.5402,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.28,
      "nav": 0.963,
      "price": 0.963,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 2.3113,
      "price": 2.3113,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.303,
      "price": 1.303,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.03,
      "sharpe": -0.39,
      "calmar": -0.39
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 5.83,
      "sharpe": 0.64,
      "calmar": 0.64
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 9.07,
      "sharpe": 4.29,
      "calmar": 4.29
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 5.97,
      "sharpe": -1.13,
      "calmar": -1.13
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 5.42,
      "sharpe": -4.08,
      "calmar": -4.08
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.11,
      "sharpe": -5.58,
      "calmar": -5.58
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.98,
      "sharpe": -1.19,
      "calmar": -1.19
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.47,
      "sharpe": -1.11,
      "calmar": -1.11
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.46,
      "sharpe": -0.52,
      "calmar": -0.52
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.18,
      "sharpe": 5.21,
      "calmar": 5.21
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 6.6,
      "sharpe": -0.77,
      "calmar": -0.77
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 5.59,
      "sharpe": -2.09,
      "calmar": -2.09
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 2.1,
      "sharpe": -7.85,
      "calmar": -7.85
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 5.12,
      "sharpe": -0.1,
      "calmar": -0.1
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.2,
      "sharpe": -1.24,
      "calmar": -1.24
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.12,
      "sharpe": 2.27,
      "calmar": 2.27
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.83,
      "sharpe": -1.26,
      "calmar": -1.26
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 8.52,
      "sharpe": -0.18,
      "calmar": -0.18
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 4.25,
      "sharpe": -1.05,
      "calmar": -1.05
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.75,
      "sharpe": -0.23,
      "calmar": -0.23
    }
  ],
  "news": [
    {
      "title": "9月11日晚间，据“网信中国”微信公众号消息，近日，中央网信办、农业农村部、工业和信息化部联合印发《数字乡村高质量发展行动计划（2026—2030年）》（以下简称《行动计划》），明确了“十五五”时期推进数字乡村高质量发展的思路目标、重点任务和政策举措。《行动计划》提到，探索运用高通量卫星、低轨卫星互联网等方式为农村及偏远地区提供多样化网络接入服务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:55",
      "impact": "neutral"
    },
    {
      "title": "证监会决定：对宗建树采取5年市场禁入措施，自我会宣布决定之日起，在禁入期间内，宗建树除不得继续在原机构从事证券业务、证券服务业务或者担任原证券发行人的董事、监事、高级管理人员职务外，也不得在其他任何机构中从事证券业务、证券服务业务或者担任其他证券发行人的董事、监事、高级管理人员职务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:30",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者张琼斯）2026年中国国际服务贸易交易会举办期间，中国人民银行北京市分行、北京金融监管局、北京证监局、北京市委金融办9月11日联合发布《首都金融“五篇大文章”发展报告（2026年）》。同时，中国人民银行中关村分行、知识产权出版社联合课题组发布《北京地区知识产权金融发展报告（2021-2025年）》。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:26",
      "impact": "neutral"
    },
    {
      "title": "国家数据局9月11日消息，国家数据产权登记服务系统（https://sjcqdj.nda.gov.cn）上线试运行，全国统一的数据产权登记制度进入落地实施新阶段。7月1日，国家数据局正式印发《数据产权登记工作指引（试行）》（国数综政策〔2026〕35号，以下简称《指引》）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:18",
      "impact": "neutral"
    },
    {
      "title": "只需埃米级，也就是0.1纳米尺度的原子层微小滑移，就能撬动千万倍电阻变化。中国科学院半导体研究所科研团队通过二维范德华异质结界面工程，攻克滑移铁电隧穿结高开关比与高耐久性难以兼顾的行业难题。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:17",
      "impact": "neutral"
    },
    {
      "title": "据新华社，国务院总理李强9月11日主持召开国务院常务会议，审议通过《基金会管理条例（修订草案）》。会议指出，要切实加强基金会公信力建设，进一步规范管理、完善制度，健全内部治理机制，强化重点领域信息公开，发挥多部门综合监管作用，促进我国公益慈善事业健康有序发展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:12",
      "impact": "neutral"
    },
    {
      "title": "据新华社，国务院总理李强9月11日主持召开国务院常务会议，听取贯彻落实全国教育大会精神加快建设教育强国情况汇报。会议指出，过去一年各地区各部门认真贯彻全国教育大会精神，推动教育强国建设不断取得新成效。要聚焦学龄人口变化合理配置教育资源，统筹做好学位供给、师资调配、经费保障等工作，更好满足各学段渡峰需要。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:12",
      "impact": "neutral"
    },
    {
      "title": "据新华社，国务院总理李强9月11日主持召开国务院常务会议，研究全面系统推进老旧水库改造提升有关工作。会议指出，水库安全关系防汛抗洪、江河治理和经济社会发展大局，要坚持长短结合、标本兼治、分类施策，严格落实各级责任，全面提高老旧水库安全能力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:11",
      "impact": "neutral"
    },
    {
      "title": "1、国常会：进一步完善算力基础设施，积极推进关键技术和装备研发应用。2、美国8月CPI同比增长3.4%，交易员上调美联储加息预期。3、证监会连开罚单，2名证券从业人员、1名百万粉丝财经博主编造虚假信息被罚。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:00",
      "impact": "neutral"
    },
    {
      "title": "李强主持召开国务院常务会议。会议指出，要聚焦学龄人口变化合理配置教育资源，统筹做好学位供给、师资调配、经费保障等工作。要聚焦国家战略需求培养优秀创新人才，持续优化学科专业布局、教材体系建设和人才培养模式。要落实健康第一的教育理念，坚持德智体美劳五育并举、五育融合，促进广大学生身心健康、成长成才。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:32",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 46,
    "label": "中性",
    "upDownRatio": "2,149/1,925",
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
