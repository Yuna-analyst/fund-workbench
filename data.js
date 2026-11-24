// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-24 20:36:08
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-24 20:36 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-24",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3548.37,
      "change": 9.42,
      "changePct": "+0.27%",
      "high": 3585.22,
      "low": 3539.01,
      "volume": 493526296.0,
      "amount": 771861010000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10423.6,
      "change": -30.77,
      "changePct": "-0.29%",
      "high": 10729.13,
      "low": 10418.11,
      "volume": 590663196.0,
      "amount": 883224920000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2278.99,
      "change": -1.21,
      "changePct": "-0.05%",
      "high": 2376.34,
      "low": 2278.99,
      "volume": 183501191.0,
      "amount": 448864160000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1250.09,
      "change": 22.2,
      "changePct": "+1.81%",
      "high": 1279.44,
      "low": 1246.39,
      "volume": 10265169.0,
      "amount": 100124030000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3963.82,
      "change": 5.53,
      "changePct": "+0.14%",
      "high": 4011.69,
      "low": 3957.92,
      "volume": 197381230.0,
      "amount": 506865910000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6112.43,
      "change": -16.56,
      "changePct": "-0.27%",
      "high": 6286.56,
      "low": 6100.03,
      "volume": 140077139.0,
      "amount": 272817210000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.98万亿",
      "label": "成交额",
      "rawAmount": 2983757240000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,214/1,392",
      "label": "涨/跌家数",
      "rawUp": 3214,
      "rawDown": 1392,
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
    "totalInflow": 27.05,
    "totalOutflow": 0,
    "netFlow": 27.05,
    "netFlowTrend": [
      5.41,
      10.82,
      16.23,
      21.64,
      27.05
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
      "inflow": 13.54,
      "pct": 0.79
    },
    {
      "name": "半导体",
      "inflow": 3.54,
      "pct": 1.47
    },
    {
      "name": "5G",
      "inflow": 3.46,
      "pct": 1.0
    },
    {
      "name": "银行",
      "inflow": 3.04,
      "pct": 0.76
    },
    {
      "name": "芯片",
      "inflow": 2.19,
      "pct": 1.23
    },
    {
      "name": "军工",
      "inflow": 0.67,
      "pct": 1.43
    },
    {
      "name": "新能源",
      "inflow": 0.4,
      "pct": 0.16
    },
    {
      "name": "家电",
      "inflow": 0.11,
      "pct": 0.36
    },
    {
      "name": "电子",
      "inflow": 0.1,
      "pct": 1.53
    },
    {
      "name": "光伏",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "食品",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.86
    },
    {
      "name": "计算机",
      "inflow": -0.05,
      "pct": -0.76
    },
    {
      "name": "农业",
      "inflow": -0.13,
      "pct": -0.14
    },
    {
      "name": "云计算",
      "inflow": -0.22,
      "pct": -0.86
    },
    {
      "name": "游戏",
      "inflow": -0.24,
      "pct": -0.88
    },
    {
      "name": "新能源车",
      "inflow": -0.3,
      "pct": -0.65
    },
    {
      "name": "人工智能",
      "inflow": -0.42,
      "pct": -0.14
    },
    {
      "name": "白酒",
      "inflow": -0.74,
      "pct": -0.23
    },
    {
      "name": "传媒",
      "inflow": -1.69,
      "pct": -0.41
    }
  ],
  "sectors": [
    {
      "name": "电子",
      "code": "515260",
      "price": 0.598,
      "changePct": 1.53,
      "change": 0.009,
      "turnover": 0.32
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.759,
      "changePct": 1.47,
      "change": 0.011,
      "turnover": 11.8
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.922,
      "changePct": 1.43,
      "change": 0.013,
      "turnover": 2.24
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.823,
      "changePct": 1.23,
      "change": 0.01,
      "turnover": 7.31
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.609,
      "changePct": 1.0,
      "change": 0.006,
      "turnover": 11.54
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.384,
      "changePct": 0.79,
      "change": 0.003,
      "turnover": 45.12
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.923,
      "changePct": 0.76,
      "change": 0.007,
      "turnover": 10.12
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.376,
      "changePct": 0.36,
      "change": 0.005,
      "turnover": 0.38
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.85,
      "changePct": 0.16,
      "change": 0.003,
      "turnover": 1.32
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.643,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 1.72
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.515,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.16
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.72,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 1.39
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.715,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 0.42
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.431,
      "changePct": -0.23,
      "change": -0.001,
      "turnover": 2.48
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.736,
      "changePct": -0.41,
      "change": -0.003,
      "turnover": 5.64
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.229,
      "changePct": -0.65,
      "change": -0.008,
      "turnover": 0.99
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.916,
      "changePct": -0.76,
      "change": -0.007,
      "turnover": 0.18
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.925,
      "changePct": -0.86,
      "change": -0.008,
      "turnover": 0.04
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.264,
      "changePct": -0.86,
      "change": -0.011,
      "turnover": 0.73
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.897,
      "changePct": -0.88,
      "change": -0.008,
      "turnover": 0.79
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.006,
      "changePct": -1.18,
      "change": -0.012,
      "turnover": 1.49
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 0.988,
      "changePct": -1.3,
      "change": -0.013,
      "turnover": 0.38
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.133,
      "changePct": -1.31,
      "change": -0.015,
      "turnover": 2.98
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.374,
      "changePct": -1.32,
      "change": -0.005,
      "turnover": 2.28
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.764,
      "changePct": -1.42,
      "change": -0.011,
      "turnover": 4.15
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.464,
      "changePct": -1.49,
      "change": -0.007,
      "turnover": 7.56
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.325,
      "changePct": -1.52,
      "change": -0.005,
      "turnover": 2.79
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.246,
      "changePct": -2.81,
      "change": -0.036,
      "turnover": 5.16
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.319,
      "changePct": 1.62,
      "amount": 122.02,
      "netFlow": 30.51
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.033,
      "changePct": 0.25,
      "amount": 55.67,
      "netFlow": 13.92
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.888,
      "changePct": 0.45,
      "amount": 24.91,
      "netFlow": 6.23
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.21,
      "changePct": 0.17,
      "amount": 19.28,
      "netFlow": 4.82
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.92,
      "changePct": 0.26,
      "amount": 19.06,
      "netFlow": 4.77
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.759,
      "changePct": 1.47,
      "amount": 11.8,
      "netFlow": 2.95
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.85,
      "changePct": 0.16,
      "amount": 1.32,
      "netFlow": 0.33
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.374,
      "changePct": -1.32,
      "amount": 2.28,
      "netFlow": -0.57
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.464,
      "changePct": -1.49,
      "amount": 7.56,
      "netFlow": -1.89
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.126,
      "changePct": -0.55,
      "amount": 42.28,
      "netFlow": -10.57
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.033,
      "changePct": 0.25,
      "amount": 55.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.888,
      "changePct": 0.45,
      "amount": 24.91,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.126,
      "changePct": -0.55,
      "amount": 42.28,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.21,
      "changePct": 0.17,
      "amount": 19.28,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.92,
      "changePct": 0.26,
      "amount": 19.06,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "电子",
      "turnover": 0.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.8,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "军工",
      "turnover": 2.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 7.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 11.54,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 45.12,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "银行",
      "turnover": 10.12,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "家电",
      "turnover": 0.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.72,
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
      "name": "人工智能",
      "turnover": 1.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 2.48,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 5.64,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.99,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.18,
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
      "name": "云计算",
      "turnover": 0.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.79,
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
      "nav": 3.6161,
      "ret1w": 1.69,
      "ret1m": -1.45,
      "ret3m": -11.69,
      "ret6m": -17.65,
      "ret1y": -32.31,
      "ret2y": -2.57,
      "ret3y": 65.22
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.6493,
      "ret1w": 1.01,
      "ret1m": 2.3,
      "ret3m": -18.21,
      "ret6m": -37.14,
      "ret1y": -45.32,
      "ret2y": -27.43,
      "ret3y": -2.21
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.9625,
      "ret1w": -0.26,
      "ret1m": 2.54,
      "ret3m": -29.19,
      "ret6m": -47.33,
      "ret1y": -47.23,
      "ret2y": -1.42,
      "ret3y": 54.38
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7724,
      "ret1w": 0.08,
      "ret1m": -1.01,
      "ret3m": 8.44,
      "ret6m": 10.33,
      "ret1y": 11.25,
      "ret2y": -2.93,
      "ret3y": 6.86
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8111,
      "ret1w": -0.52,
      "ret1m": -3.2,
      "ret3m": -8.01,
      "ret6m": -16.63,
      "ret1y": -32.63,
      "ret2y": -33.69,
      "ret3y": -26.2
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.4492,
      "ret1w": -0.52,
      "ret1m": -4.14,
      "ret3m": -4.87,
      "ret6m": -10.59,
      "ret1y": -23.44,
      "ret2y": -27.78,
      "ret3y": 1.67
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2144,
      "ret1w": 0.17,
      "ret1m": -1.22,
      "ret3m": 0.52,
      "ret6m": -4.42,
      "ret1y": -4.68,
      "ret2y": 0.54,
      "ret3y": 30.42
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.536,
      "ret1w": -0.32,
      "ret1m": -2.72,
      "ret3m": -11.01,
      "ret6m": -18.12,
      "ret1y": -27.82,
      "ret2y": -11.98,
      "ret3y": 18.7
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0671,
      "ret1w": -0.12,
      "ret1m": -0.19,
      "ret3m": -9.29,
      "ret6m": -19.98,
      "ret1y": -25.37,
      "ret2y": -11.22,
      "ret3y": 3.35
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.425,
      "ret1w": 0.37,
      "ret1m": -1.66,
      "ret3m": -11.11,
      "ret6m": -28.4,
      "ret1y": -30.62,
      "ret2y": 20.65,
      "ret3y": 94.78
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.15,
      "ret1w": -0.35,
      "ret1m": -2.38,
      "ret3m": 4.17,
      "ret6m": 4.17,
      "ret1y": 6.28,
      "ret2y": -8.37,
      "ret3y": -6.35
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.009,
      "ret1w": -1.57,
      "ret1m": -7.8,
      "ret3m": -11.77,
      "ret6m": -14.73,
      "ret1y": -19.58,
      "ret2y": -20.02,
      "ret3y": -3.37
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1991,
      "ret1w": 1.59,
      "ret1m": 0.93,
      "ret3m": -8.14,
      "ret6m": -32.35,
      "ret1y": -59.14,
      "ret2y": -53.24,
      "ret3y": -36.16
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.869,
      "ret1w": -0.04,
      "ret1m": -2.2,
      "ret3m": 0.77,
      "ret6m": -2.45,
      "ret1y": 5.32,
      "ret2y": 0.33,
      "ret3y": -2.03
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3283,
      "ret1w": -0.08,
      "ret1m": -2.21,
      "ret3m": -9.92,
      "ret6m": -18.36,
      "ret1y": -26.2,
      "ret2y": -11.69,
      "ret3y": 15.69
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2636,
      "ret1w": 0.65,
      "ret1m": -1.04,
      "ret3m": -28.09,
      "ret6m": -47.17,
      "ret1y": -53.4,
      "ret2y": 4.8,
      "ret3y": 26.5
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5148,
      "ret1w": -0.38,
      "ret1m": -2.24,
      "ret3m": -0.63,
      "ret6m": -0.68,
      "ret1y": -3.72,
      "ret2y": -6.3,
      "ret3y": 3.84
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.866,
      "ret1w": -0.92,
      "ret1m": -2.59,
      "ret3m": -9.03,
      "ret6m": -15.43,
      "ret1y": -9.79,
      "ret2y": -16.89,
      "ret3y": -19.07
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4183,
      "ret1w": -0.09,
      "ret1m": -1.22,
      "ret3m": 4.54,
      "ret6m": 3.11,
      "ret1y": 4.5,
      "ret2y": 3.62,
      "ret3y": 12.98
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1284,
      "ret1w": -0.05,
      "ret1m": -2.84,
      "ret3m": -8.0,
      "ret6m": -14.54,
      "ret1y": -14.12,
      "ret2y": -1.46,
      "ret3y": 31.61
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9107,
      "ret1w": 0.34,
      "ret1m": -0.09,
      "ret3m": -13.41,
      "ret6m": -28.52,
      "ret1y": -35.35,
      "ret2y": -17.63,
      "ret3y": -0.36
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9697,
      "ret1w": 0.35,
      "ret1m": -0.07,
      "ret3m": -13.37,
      "ret6m": -28.45,
      "ret1y": -35.22,
      "ret2y": -17.3,
      "ret3y": 0.45
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0295,
      "ret1w": -0.1,
      "ret1m": -0.76,
      "ret3m": -2.44,
      "ret6m": -5.59,
      "ret1y": -6.26,
      "ret2y": -4.83,
      "ret3y": 1.4
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0054,
      "ret1w": -0.09,
      "ret1m": -0.76,
      "ret3m": -2.4,
      "ret6m": -5.45,
      "ret1y": -5.97,
      "ret2y": -4.27,
      "ret3y": 2.63
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6971,
      "ret1w": -0.03,
      "ret1m": -1.94,
      "ret3m": 0.27,
      "ret6m": -2.08,
      "ret1y": -9.26,
      "ret2y": -13.39,
      "ret3y": 1.07
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7156,
      "ret1w": -0.01,
      "ret1m": -1.93,
      "ret3m": 0.32,
      "ret6m": -1.96,
      "ret1y": -9.01,
      "ret2y": -12.95,
      "ret3y": 2.1
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.9077,
      "ret1w": 0.58,
      "ret1m": 1.99,
      "ret3m": -16.4,
      "ret6m": -30.74,
      "ret1y": -33.45,
      "ret2y": 8.05,
      "ret3y": 69.24
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.1916,
      "ret1w": 0.24,
      "ret1m": -2.21,
      "ret3m": -6.43,
      "ret6m": -12.59,
      "ret1y": -17.63,
      "ret2y": 7.02,
      "ret3y": 44.63
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.675,
      "ret1w": 0.31,
      "ret1m": -2.51,
      "ret3m": -5.65,
      "ret6m": -7.76,
      "ret1y": -22.89,
      "ret2y": -15.0,
      "ret3y": -2.88
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.755,
      "ret1w": 0.69,
      "ret1m": -0.97,
      "ret3m": -7.8,
      "ret6m": -9.06,
      "ret1y": -13.99,
      "ret2y": 28.2,
      "ret3y": 86.02
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4513,
      "ret1w": 0.83,
      "ret1m": 0.36,
      "ret3m": -3.07,
      "ret6m": -10.01,
      "ret1y": -18.41,
      "ret2y": 1.9,
      "ret3y": 23.95
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4603,
      "ret1w": 0.81,
      "ret1m": 0.35,
      "ret3m": -3.05,
      "ret6m": -9.92,
      "ret1y": -18.24,
      "ret2y": 2.29,
      "ret3y": 24.91
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2557,
      "ret1w": -0.17,
      "ret1m": -0.57,
      "ret3m": 0.34,
      "ret6m": -1.91,
      "ret1y": -1.98,
      "ret2y": -2.59,
      "ret3y": 0.15
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0498,
      "ret1w": -0.31,
      "ret1m": -1.32,
      "ret3m": -3.14,
      "ret6m": -6.92,
      "ret1y": -3.85,
      "ret2y": -8.46,
      "ret3y": 0.32
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1618,
      "ret1w": -0.15,
      "ret1m": -0.79,
      "ret3m": -0.14,
      "ret6m": -17.87,
      "ret1y": -31.59,
      "ret2y": -20.51,
      "ret3y": -16.85
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6419,
      "ret1w": 0.01,
      "ret1m": 1.56,
      "ret3m": -6.49,
      "ret6m": -11.63,
      "ret1y": -15.7,
      "ret2y": -3.49,
      "ret3y": 23.92
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.056,
      "ret1w": 1.18,
      "ret1m": 1.23,
      "ret3m": -18.99,
      "ret6m": -36.95,
      "ret1y": -47.8,
      "ret2y": 6.03,
      "ret3y": 64.61
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5871,
      "ret1w": -0.31,
      "ret1m": -1.18,
      "ret3m": 5.27,
      "ret6m": 6.43,
      "ret1y": 8.85,
      "ret2y": 5.25,
      "ret3y": 7.28
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4642,
      "ret1w": 1.42,
      "ret1m": -4.43,
      "ret3m": -12.89,
      "ret6m": -26.29,
      "ret1y": -38.93,
      "ret2y": -15.49,
      "ret3y": -24.2
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.251,
      "ret1w": 0.52,
      "ret1m": 5.0,
      "ret3m": -24.27,
      "ret6m": -41.5,
      "ret1y": -38.06,
      "ret2y": 19.42,
      "ret3y": 102.48
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0432,
      "ret1w": -0.03,
      "ret1m": -0.03,
      "ret3m": -1.15,
      "ret6m": -2.08,
      "ret1y": -2.73,
      "ret2y": -1.24,
      "ret3y": 1.53
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0909,
      "ret1w": -0.03,
      "ret1m": -0.03,
      "ret3m": -1.15,
      "ret6m": -2.06,
      "ret1y": -2.64,
      "ret2y": -1.04,
      "ret3y": 2.15
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": -0.06,
      "ret6m": 0.25,
      "ret1y": 0.55,
      "ret2y": 1.45,
      "ret3y": 2.73
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.102,
      "ret1w": -0.02,
      "ret1m": 0.05,
      "ret3m": 0.0,
      "ret6m": 0.32,
      "ret1y": 0.65,
      "ret2y": 1.46,
      "ret3y": 3.74
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.112,
      "ret1w": -0.01,
      "ret1m": 0.05,
      "ret3m": 0.02,
      "ret6m": 0.38,
      "ret1y": 0.76,
      "ret2y": 1.67,
      "ret3y": 4.18
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0782,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.0,
      "ret6m": 0.2,
      "ret1y": 0.55,
      "ret2y": 1.38,
      "ret3y": 2.78
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0934,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.03,
      "ret6m": 0.27,
      "ret1y": 0.71,
      "ret2y": 1.69,
      "ret3y": 3.43
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9876,
      "ret1w": 0.01,
      "ret1m": -0.44,
      "ret3m": -3.22,
      "ret6m": -7.22,
      "ret1y": -9.8,
      "ret2y": -1.17,
      "ret3y": 3.39
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1288,
      "ret1w": 0.03,
      "ret1m": -0.94,
      "ret3m": -4.01,
      "ret6m": -7.09,
      "ret1y": -10.53,
      "ret2y": -5.65,
      "ret3y": -2.56
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9947,
      "ret1w": 0.01,
      "ret1m": -0.44,
      "ret3m": -3.19,
      "ret6m": -7.12,
      "ret1y": -9.62,
      "ret2y": -0.78,
      "ret3y": 4.22
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": -0.1,
      "ret6m": 0.27,
      "ret1y": 0.63,
      "ret2y": 1.55,
      "ret3y": 3.44
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0831,
      "ret1w": 0.11,
      "ret1m": -0.11,
      "ret3m": -3.59,
      "ret6m": -7.4,
      "ret1y": -10.38,
      "ret2y": -7.73,
      "ret3y": -1.36
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.199,
      "ret1w": -0.04,
      "ret1m": -0.33,
      "ret3m": -0.02,
      "ret6m": -1.29,
      "ret1y": -2.32,
      "ret2y": 1.08,
      "ret3y": 9.95
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1118,
      "ret1w": -0.04,
      "ret1m": -0.17,
      "ret3m": -0.8,
      "ret6m": -2.33,
      "ret1y": -3.64,
      "ret2y": 0.72,
      "ret3y": 6.74
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1826,
      "ret1w": -0.03,
      "ret1m": -0.16,
      "ret3m": -0.77,
      "ret6m": -2.22,
      "ret1y": -3.45,
      "ret2y": 1.13,
      "ret3y": 7.64
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.689,
      "ret1w": 9.68,
      "ret1m": -3.54,
      "ret3m": -18.68,
      "ret6m": -29.36,
      "ret1y": -30.64,
      "ret2y": 27.86,
      "ret3y": 69.75
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.801,
      "ret1w": 3.55,
      "ret1m": -2.27,
      "ret3m": -4.47,
      "ret6m": -5.8,
      "ret1y": -4.71,
      "ret2y": 3.65,
      "ret3y": 22.62
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.5777,
      "ret1w": 0.05,
      "ret1m": -4.2,
      "ret3m": -4.69,
      "ret6m": -16.83,
      "ret1y": -26.17,
      "ret2y": -8.67,
      "ret3y": 17.41
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.0121,
      "ret1w": 7.71,
      "ret1m": -2.17,
      "ret3m": -12.09,
      "ret6m": -17.38,
      "ret1y": -11.56,
      "ret2y": 4.66,
      "ret3y": 23.18
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9249,
      "ret1w": 0.03,
      "ret1m": 0.83,
      "ret3m": 0.41,
      "ret6m": -1.23,
      "ret1y": -1.78,
      "ret2y": -5.55,
      "ret3y": -2.62
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.1348,
      "ret1w": 4.44,
      "ret1m": -2.95,
      "ret3m": -9.69,
      "ret6m": -20.11,
      "ret1y": -22.41,
      "ret2y": 16.66,
      "ret3y": 48.94
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.193,
      "ret1w": 3.66,
      "ret1m": -3.45,
      "ret3m": -5.29,
      "ret6m": -8.99,
      "ret1y": -9.24,
      "ret2y": -3.01,
      "ret3y": 4.8
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.711,
      "ret1w": 1.14,
      "ret1m": -4.82,
      "ret3m": -12.87,
      "ret6m": -28.47,
      "ret1y": -27.96,
      "ret2y": -34.95,
      "ret3y": -19.57
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.0328,
      "ret1w": 4.07,
      "ret1m": -7.02,
      "ret3m": -19.72,
      "ret6m": -28.98,
      "ret1y": -31.39,
      "ret2y": 25.19,
      "ret3y": 77.74
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.3543,
      "ret1w": 1.32,
      "ret1m": -6.72,
      "ret3m": -13.18,
      "ret6m": -17.99,
      "ret1y": -11.44,
      "ret2y": 10.07,
      "ret3y": 27.73
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.4445,
      "ret1w": 0.77,
      "ret1m": -5.3,
      "ret3m": -10.67,
      "ret6m": -16.82,
      "ret1y": -13.2,
      "ret2y": 4.62,
      "ret3y": 30.19
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.0793,
      "ret1w": -0.41,
      "ret1m": -6.47,
      "ret3m": -9.77,
      "ret6m": -19.33,
      "ret1y": -19.27,
      "ret2y": -5.04,
      "ret3y": 11.23
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.262,
      "ret1w": 0.96,
      "ret1m": -2.62,
      "ret3m": 0.72,
      "ret6m": -4.75,
      "ret1y": -4.83,
      "ret2y": 3.27,
      "ret3y": -10.57
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.746,
      "ret1w": 3.07,
      "ret1m": -4.9,
      "ret3m": -8.25,
      "ret6m": -20.6,
      "ret1y": -20.02,
      "ret2y": -15.08,
      "ret3y": 19.9
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.0146,
      "ret1w": 3.94,
      "ret1m": -3.05,
      "ret3m": -10.66,
      "ret6m": -20.65,
      "ret1y": -23.33,
      "ret2y": 12.85,
      "ret3y": 30.14
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0131,
      "ret1w": -0.03,
      "ret1m": 0.04,
      "ret3m": 0.06,
      "ret6m": 0.52,
      "ret1y": 1.09,
      "ret2y": 2.35,
      "ret3y": 3.73
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0008,
      "ret1w": -0.03,
      "ret1m": 0.04,
      "ret3m": 0.06,
      "ret6m": 0.55,
      "ret1y": 1.1,
      "ret2y": 2.41,
      "ret3y": 3.89
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.183,
      "ret1w": 0.34,
      "ret1m": 0.0,
      "ret3m": -5.21,
      "ret6m": -16.04,
      "ret1y": -23.97,
      "ret2y": -14.15,
      "ret3y": -1.74
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.147,
      "ret1w": -0.23,
      "ret1m": -1.56,
      "ret3m": -10.73,
      "ret6m": -24.13,
      "ret1y": -29.72,
      "ret2y": -14.97,
      "ret3y": 3.32
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3187,
      "ret1w": -2.22,
      "ret1m": -4.67,
      "ret3m": -11.63,
      "ret6m": -23.23,
      "ret1y": -24.34,
      "ret2y": -8.84,
      "ret3y": 25.11
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8008,
      "ret1w": 0.11,
      "ret1m": -0.07,
      "ret3m": -5.72,
      "ret6m": -15.18,
      "ret1y": -17.44,
      "ret2y": -6.17,
      "ret3y": 8.22
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.854,
      "ret1w": 0.11,
      "ret1m": -0.06,
      "ret3m": -5.69,
      "ret6m": -15.1,
      "ret1y": -17.27,
      "ret2y": -5.8,
      "ret3y": 9.09
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.5962,
      "ret1w": -0.31,
      "ret1m": -2.65,
      "ret3m": -9.85,
      "ret6m": -19.85,
      "ret1y": -27.27,
      "ret2y": -9.91,
      "ret3y": 7.43
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5638,
      "ret1w": 0.13,
      "ret1m": -0.31,
      "ret3m": -3.27,
      "ret6m": -12.22,
      "ret1y": -16.5,
      "ret2y": -9.07,
      "ret3y": 5.31
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.3655,
      "ret1w": -0.7,
      "ret1m": -3.44,
      "ret3m": -7.71,
      "ret6m": -12.83,
      "ret1y": -17.46,
      "ret2y": -4.18,
      "ret3y": 17.34
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4441,
      "ret1w": 0.31,
      "ret1m": 0.45,
      "ret3m": -10.67,
      "ret6m": -26.27,
      "ret1y": -33.49,
      "ret2y": -14.96,
      "ret3y": 6.14
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.997,
      "ret1w": 0.23,
      "ret1m": -0.09,
      "ret3m": 0.24,
      "ret6m": -7.82,
      "ret1y": -6.08,
      "ret2y": -7.27,
      "ret3y": 7.89
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4312,
      "ret1w": 1.25,
      "ret1m": -4.18,
      "ret3m": -3.87,
      "ret6m": -6.88,
      "ret1y": -3.27,
      "ret2y": 5.04,
      "ret3y": 24.6
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.128,
      "ret1w": 6.31,
      "ret1m": -1.42,
      "ret3m": -6.94,
      "ret6m": -8.73,
      "ret1y": -9.84,
      "ret2y": 3.42,
      "ret3y": 17.35
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1349,
      "ret1w": -0.12,
      "ret1m": -0.64,
      "ret3m": -8.85,
      "ret6m": -23.2,
      "ret1y": -29.1,
      "ret2y": -15.44,
      "ret3y": 3.23
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9001,
      "ret1w": -2.61,
      "ret1m": -5.81,
      "ret3m": -12.39,
      "ret6m": -24.3,
      "ret1y": -29.74,
      "ret2y": -16.9,
      "ret3y": 1.37
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9034,
      "ret1w": -2.6,
      "ret1m": -5.81,
      "ret3m": -12.37,
      "ret6m": -24.12,
      "ret1y": -29.52,
      "ret2y": -16.81,
      "ret3y": 1.1
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1768,
      "ret1w": 0.64,
      "ret1m": -1.96,
      "ret3m": -5.88,
      "ret6m": -16.92,
      "ret1y": -25.24,
      "ret2y": -11.39,
      "ret3y": 5.52
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2048,
      "ret1w": 0.64,
      "ret1m": -1.95,
      "ret3m": -5.85,
      "ret6m": -16.84,
      "ret1y": -25.09,
      "ret2y": -11.03,
      "ret3y": 6.37
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.548,
      "ret1w": -0.55,
      "ret1m": -3.03,
      "ret3m": -11.21,
      "ret6m": -24.45,
      "ret1y": -32.36,
      "ret2y": -14.2,
      "ret3y": 10.17
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.151,
      "ret1w": -0.09,
      "ret1m": 0.09,
      "ret3m": -0.74,
      "ret6m": -1.29,
      "ret1y": -1.64,
      "ret2y": 0.31,
      "ret3y": 4.6
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1714,
      "ret1w": -0.09,
      "ret1m": 0.09,
      "ret3m": -0.72,
      "ret6m": -1.22,
      "ret1y": -1.49,
      "ret2y": 0.61,
      "ret3y": 5.23
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0878,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": -0.03,
      "ret6m": 0.33,
      "ret1y": 0.7,
      "ret2y": 1.77,
      "ret3y": 3.32
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4099,
      "ret1w": -0.02,
      "ret1m": 0.05,
      "ret3m": -0.16,
      "ret6m": -0.02,
      "ret1y": 0.13,
      "ret2y": 0.4,
      "ret3y": 4.72
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4635,
      "ret1w": -0.02,
      "ret1m": 0.06,
      "ret3m": -0.12,
      "ret6m": 0.08,
      "ret1y": 0.34,
      "ret2y": 0.81,
      "ret3y": 5.56
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7816,
      "ret1w": -0.12,
      "ret1m": -0.85,
      "ret3m": -8.59,
      "ret6m": -15.04,
      "ret1y": -11.47,
      "ret2y": 3.23,
      "ret3y": 26.96
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9348,
      "ret1w": 0.1,
      "ret1m": -1.56,
      "ret3m": -12.96,
      "ret6m": -24.83,
      "ret1y": -24.6,
      "ret2y": -18.16,
      "ret3y": 2.18
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 3.6161,
      "price": 3.6161,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 2.6493,
      "price": 2.6493,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.13,
      "nav": 2.9625,
      "price": 2.9625,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 0.7724,
      "price": 0.7724,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.8111,
      "price": 1.8111,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.21,
      "nav": 2.4492,
      "price": 2.4492,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 5.2144,
      "price": 5.2144,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.536,
      "price": 1.536,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.0671,
      "price": 1.0671,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.425,
      "price": 2.425,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.15,
      "price": 1.15,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 2.009,
      "price": 2.009,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.1991,
      "price": 1.1991,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.869,
      "price": 1.869,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.3283,
      "price": 1.3283,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.2636,
      "price": 1.2636,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.5148,
      "price": 2.5148,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 0.866,
      "price": 0.866,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.4183,
      "price": 2.4183,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.1284,
      "price": 1.1284,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.17,
      "sharpe": -5.01,
      "calmar": -5.01
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.45,
      "sharpe": -6.21,
      "calmar": -6.21
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 3.81,
      "sharpe": -6.26,
      "calmar": -6.26
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.52,
      "sharpe": 1.87,
      "calmar": 1.87
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 4.8,
      "sharpe": -3.98,
      "calmar": -3.98
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 6.21,
      "sharpe": -2.56,
      "calmar": -2.56
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.83,
      "sharpe": -0.75,
      "calmar": -0.75
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.08,
      "sharpe": -3.6,
      "calmar": -3.6
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.29,
      "sharpe": -4.89,
      "calmar": -4.89
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.49,
      "sharpe": -4.6,
      "calmar": -4.6
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.57,
      "sharpe": 0.85,
      "calmar": 0.85
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 11.7,
      "sharpe": -1.53,
      "calmar": -1.53
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 1.4,
      "sharpe": -9.97,
      "calmar": -9.97
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.3,
      "sharpe": 0.74,
      "calmar": 0.74
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.31,
      "sharpe": -3.63,
      "calmar": -3.63
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.56,
      "sharpe": -8.84,
      "calmar": -8.84
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.36,
      "sharpe": -0.51,
      "calmar": -0.51
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.88,
      "sharpe": -1.29,
      "calmar": -1.29
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.83,
      "sharpe": 0.72,
      "calmar": 0.72
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.26,
      "sharpe": -1.8,
      "calmar": -1.8
    }
  ],
  "news": [
    {
      "title": "时报数说 | 今年前十个月访港旅客量近4600万人次",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:26",
      "impact": "neutral"
    },
    {
      "title": "为保持银行体系流动性充裕，中国人民银行11月24日发布公告称，将于25日以固定数量、利率招标、多重价位中标方式分别开展5000亿元7天期逆回购操作和8000亿元中期借贷便利（MLF）操作。11月25日是银行缴准日，是当周政府债净缴款高点，还面临1万亿元MLF与800亿元国库现金定存同日到期，资金面压力较为集中。央行启用7天期逆回购操作，有助于平抑资金跨月波动。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:14",
      "impact": "neutral"
    },
    {
      "title": "2026年是新一轮国资国企改革开局之年。一批央企主动靠前，加快推进产业布局，成效初显。中国石油前三季度战略性新兴产业增加值2106亿元，同比增长17.1%；中国诚通基金业务投向战略性新兴产业近200亿元，同比增长105%，占总投资比重89%；中国电科旗下电科蓝天、电科思仪年内发行上市，合计募资32.78亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:13",
      "impact": "neutral"
    },
    {
      "title": "11月24日举行的2026全球6G发展大会上，由工业和信息化部牵头组织的6G创新发展部省协同试点正式启动。北京市、河北省、上海市、江苏省、浙江省、安徽省、湖北省、广东省八省市共同参与本次试点，后续将结合各自产业基础与资源禀赋，差异化推进6G技术攻关、场景验证与产业培育落地。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:13",
      "impact": "neutral"
    },
    {
      "title": "国务院国资委日前举办专题研讨班部署新一轮国资国企改革，国资委党委委员、副主任李镇表示，各地、各中央企业必须态度坚决，积极推进整治、积累经验。今年以来，央企存量资产处置明显提速。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:43",
      "impact": "neutral"
    },
    {
      "title": "◎新华社北京11月24日电民营企业是培育新质生产力的重要力量。记者近日在调研中了解到，各地聚焦民营企业重点关切，持续优化营商环境，提高政策精准度，层层抓好落实，有力托住民营企业创新发展信心，不断激发民营经济生机活力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:41",
      "impact": "neutral"
    },
    {
      "title": "11月23日，《北京市“十五五”时期城市更新规划》公开发布，其中提出“系统推进‘六张网’更新建设”，包括要“系统谋划、统筹推进‘六张网’建设，构建系统成网、协同联动的现代化基础设施体系”“推动传统基础设施提质升级”“适度超前部署新型基础设施”等。“六张网”包括水网、新型电网、算力网、新一代通信网、城市地下管网、物流网。目前，除北京外，不少地方都在加快部署“六张网”建设工作。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:28",
      "impact": "neutral"
    },
    {
      "title": "当前，国内城市建设主线从新区增量开发转向存量空间盘活，老旧小区、低效楼宇、城中村等成为改造重点，城市更新赛道受到资本市场广泛关注。11月23日，北京市人民政府印发《北京市“十五五”时期城市更新规划》（以下简称《规划》）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:28",
      "impact": "neutral"
    },
    {
      "title": "11月24日，工业和信息化部发布的数据显示，2026年前三季度，我国数字产业实现收入32.41万亿元，同比增长14.8%，增速较上年同期加快5.2个百分点。受人工智能需求旺盛、出口增势强劲双重拉动，数字产业实现利润2.78万亿元，同比增长23.4%，增速较上年同期提升14.9个百分点；收入利润率达8.6%，较上年同期提升0.4个百分点，盈利水平持续优化。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:26",
      "impact": "neutral"
    },
    {
      "title": "随着审批路径持续打通，新材料、新算法不断迭代，脑机接口成果快步走出实验室，优先锚定效果可验证的康养临床方向，加速向多个民生场景渗透。产业向前奔跑的同时，行业规则框架也在紧锣密鼓搭建。工业和信息化部脑机接口标准化技术委员会、全国信息技术标准化技术委员会脑机接口分技术委员会于2026年11月25日至26日举办2026年脑机接口“标准周”活动。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:25",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 50,
    "label": "中性",
    "upDownRatio": "3,214/1,392",
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
