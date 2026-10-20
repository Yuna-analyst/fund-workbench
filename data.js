// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-20 14:55:24
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-20 14:55 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-20",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3735.37,
      "change": 4.45,
      "changePct": "+0.12%",
      "high": 3740.07,
      "low": 3702.44,
      "volume": 408693062.0,
      "amount": 699969750000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11801.29,
      "change": -16.13,
      "changePct": "-0.14%",
      "high": 11938.0,
      "low": 11691.41,
      "volume": 469828148.0,
      "amount": 756142480000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2739.2,
      "change": -7.09,
      "changePct": "-0.26%",
      "high": 2790.12,
      "low": 2706.41,
      "volume": 147207341.0,
      "amount": 374485060000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1342.42,
      "change": 13.23,
      "changePct": "+1.00%",
      "high": 1355.2,
      "low": 1309.87,
      "volume": 8033098.0,
      "amount": 75266390000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4152.11,
      "change": -22.42,
      "changePct": "-0.54%",
      "high": 4175.21,
      "low": 4113.14,
      "volume": 166956113.0,
      "amount": 396228660000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6841.44,
      "change": 40.78,
      "changePct": "+0.60%",
      "high": 6902.09,
      "low": 6745.14,
      "volume": 121643784.0,
      "amount": 251006900000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.55万亿",
      "label": "成交额",
      "rawAmount": 2553099240000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,104/1,448",
      "label": "涨/跌家数",
      "rawUp": 3104,
      "rawDown": 1448,
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
    "totalInflow": 19.76,
    "totalOutflow": 0,
    "netFlow": 19.76,
    "netFlowTrend": [
      3.95,
      7.9,
      11.86,
      15.81,
      19.76
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
      "inflow": 8.07,
      "pct": 1.15
    },
    {
      "name": "半导体",
      "inflow": 3.26,
      "pct": 1.1
    },
    {
      "name": "5G",
      "inflow": 1.82,
      "pct": 0.87
    },
    {
      "name": "创新药",
      "inflow": 1.62,
      "pct": 1.37
    },
    {
      "name": "医疗",
      "inflow": 1.4,
      "pct": 2.15
    },
    {
      "name": "芯片",
      "inflow": 1.38,
      "pct": 0.67
    },
    {
      "name": "医药",
      "inflow": 0.79,
      "pct": 1.07
    },
    {
      "name": "传媒",
      "inflow": 0.76,
      "pct": 0.76
    },
    {
      "name": "人工智能",
      "inflow": 0.35,
      "pct": 0.35
    },
    {
      "name": "新能源车",
      "inflow": 0.31,
      "pct": 0.15
    },
    {
      "name": "游戏",
      "inflow": 0.3,
      "pct": 0.39
    },
    {
      "name": "云计算",
      "inflow": 0.23,
      "pct": 2.23
    },
    {
      "name": "电子",
      "inflow": 0.12,
      "pct": 0.74
    },
    {
      "name": "计算机",
      "inflow": 0.07,
      "pct": 0.98
    },
    {
      "name": "食品",
      "inflow": 0.06,
      "pct": 0.2
    },
    {
      "name": "农业",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.41
    },
    {
      "name": "家电",
      "inflow": -0.1,
      "pct": -0.44
    },
    {
      "name": "地产",
      "inflow": -0.28,
      "pct": -0.51
    },
    {
      "name": "军工",
      "inflow": -1.66,
      "pct": -0.28
    }
  ],
  "sectors": [
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.47,
      "changePct": 2.23,
      "change": 0.032,
      "turnover": 0.76
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.333,
      "changePct": 2.15,
      "change": 0.007,
      "turnover": 4.66
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.815,
      "changePct": 1.37,
      "change": 0.011,
      "turnover": 5.39
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.529,
      "changePct": 1.15,
      "change": 0.006,
      "turnover": 26.9
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.829,
      "changePct": 1.1,
      "change": 0.009,
      "turnover": 10.88
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.377,
      "changePct": 1.07,
      "change": 0.004,
      "turnover": 2.62
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.027,
      "changePct": 0.98,
      "change": 0.01,
      "turnover": 0.25
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.814,
      "changePct": 0.87,
      "change": 0.007,
      "turnover": 6.06
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.796,
      "changePct": 0.76,
      "change": 0.006,
      "turnover": 2.55
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.682,
      "changePct": 0.74,
      "change": 0.005,
      "turnover": 0.4
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.903,
      "changePct": 0.67,
      "change": 0.006,
      "turnover": 4.6
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.019,
      "changePct": 0.39,
      "change": 0.004,
      "turnover": 1.01
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.858,
      "changePct": 0.35,
      "change": 0.003,
      "turnover": 1.17
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.497,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 0.19
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.34,
      "changePct": 0.15,
      "change": 0.002,
      "turnover": 1.02
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.709,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.61
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.07,
      "changePct": -0.28,
      "change": -0.003,
      "turnover": 5.54
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.973,
      "changePct": -0.41,
      "change": -0.004,
      "turnover": 0.06
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.362,
      "changePct": -0.44,
      "change": -0.006,
      "turnover": 0.34
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.181,
      "changePct": -0.51,
      "change": -0.006,
      "turnover": 0.95
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.718,
      "changePct": -0.69,
      "change": -0.005,
      "turnover": 1.08
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.105,
      "changePct": -0.72,
      "change": -0.008,
      "turnover": 0.42
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.041,
      "changePct": -0.83,
      "change": -0.017,
      "turnover": 0.92
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.419,
      "changePct": -0.95,
      "change": -0.004,
      "turnover": 3.86
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.866,
      "changePct": -1.25,
      "change": -0.011,
      "turnover": 10.7
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.506,
      "changePct": -1.25,
      "change": -0.019,
      "turnover": 4.43
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.486,
      "changePct": -1.42,
      "change": -0.007,
      "turnover": 9.67
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.254,
      "changePct": -1.95,
      "change": -0.025,
      "turnover": 8.59
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.417,
      "changePct": 0.85,
      "amount": 104.86,
      "netFlow": 26.22
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.871,
      "changePct": 0.6,
      "amount": 40.99,
      "netFlow": 10.25
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.829,
      "changePct": 1.1,
      "amount": 10.88,
      "netFlow": 2.72
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.377,
      "changePct": 1.07,
      "amount": 2.62,
      "netFlow": 0.65
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.041,
      "changePct": -0.83,
      "amount": 0.92,
      "netFlow": -0.23
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.1,
      "changePct": -0.53,
      "amount": 8.6,
      "netFlow": -2.15
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.486,
      "changePct": -1.42,
      "amount": 9.67,
      "netFlow": -2.42
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.411,
      "changePct": -0.43,
      "amount": 26.03,
      "netFlow": -6.51
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.22,
      "changePct": -0.47,
      "amount": 44.6,
      "netFlow": -11.15
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.877,
      "changePct": -0.31,
      "amount": 75.28,
      "netFlow": -18.82
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.22,
      "changePct": -0.47,
      "amount": 44.6,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.877,
      "changePct": -0.31,
      "amount": 75.28,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.871,
      "changePct": 0.6,
      "amount": 40.99,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.411,
      "changePct": -0.43,
      "amount": 26.03,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.1,
      "changePct": -0.53,
      "amount": 8.6,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "云计算",
      "turnover": 0.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 26.9,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "半导体",
      "turnover": 10.88,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 2.62,
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
      "name": "5G",
      "turnover": 6.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 4.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.01,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.61,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 5.54,
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
      "name": "家电",
      "turnover": 0.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.95,
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
      "nav": 3.9501,
      "ret1w": 2.94,
      "ret1m": -4.52,
      "ret3m": -17.07,
      "ret6m": -2.5,
      "ret1y": -13.01,
      "ret2y": 3.62,
      "ret3y": 98.63
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.3432,
      "ret1w": -0.14,
      "ret1m": -6.8,
      "ret3m": -20.42,
      "ret6m": -20.53,
      "ret1y": -28.27,
      "ret2y": -13.36,
      "ret3y": 15.1
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.3609,
      "ret1w": 0.64,
      "ret1m": -12.38,
      "ret3m": -30.21,
      "ret6m": -8.82,
      "ret1y": -12.38,
      "ret2y": 40.79,
      "ret3y": 123.61
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7081,
      "ret1w": -0.44,
      "ret1m": 1.62,
      "ret3m": 1.77,
      "ret6m": 1.13,
      "ret1y": -4.48,
      "ret2y": -12.66,
      "ret3y": -5.33
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9299,
      "ret1w": -1.33,
      "ret1m": -1.88,
      "ret3m": -3.91,
      "ret6m": -7.14,
      "ret1y": -32.43,
      "ret2y": -31.33,
      "ret3y": -17.31
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5823,
      "ret1w": -1.27,
      "ret1m": -2.63,
      "ret3m": -5.22,
      "ret6m": 2.12,
      "ret1y": -27.01,
      "ret2y": -26.14,
      "ret3y": 6.29
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2188,
      "ret1w": -0.43,
      "ret1m": 0.14,
      "ret3m": -2.99,
      "ret6m": -3.16,
      "ret1y": -9.17,
      "ret2y": 2.71,
      "ret3y": 29.18
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.748,
      "ret1w": 0.69,
      "ret1m": -3.96,
      "ret3m": -10.73,
      "ret6m": 1.51,
      "ret1y": -15.39,
      "ret2y": -4.38,
      "ret3y": 38.29
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1875,
      "ret1w": 0.1,
      "ret1m": -4.57,
      "ret3m": -12.06,
      "ret6m": -7.71,
      "ret1y": -15.89,
      "ret2y": -4.4,
      "ret3y": 12.86
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.784,
      "ret1w": 0.47,
      "ret1m": -5.4,
      "ret3m": -20.66,
      "ret6m": -16.92,
      "ret1y": -6.58,
      "ret2y": 37.89,
      "ret3y": 130.27
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.114,
      "ret1w": -0.27,
      "ret1m": 1.18,
      "ret3m": 2.01,
      "ret6m": 3.82,
      "ret1y": -2.11,
      "ret2y": -13.64,
      "ret3y": -11.31
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.311,
      "ret1w": 3.03,
      "ret1m": -2.65,
      "ret3m": -1.41,
      "ret6m": 1.67,
      "ret1y": -14.6,
      "ret2y": -9.83,
      "ret3y": 12.84
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.3746,
      "ret1w": -1.58,
      "ret1m": -10.43,
      "ret3m": -24.03,
      "ret6m": -26.31,
      "ret1y": -55.68,
      "ret2y": -48.57,
      "ret3y": -27.96
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8494,
      "ret1w": -0.83,
      "ret1m": -0.7,
      "ret3m": -2.37,
      "ret6m": -3.0,
      "ret1y": 1.62,
      "ret2y": -4.92,
      "ret3y": -6.02
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4961,
      "ret1w": 0.77,
      "ret1m": -4.26,
      "ret3m": -11.26,
      "ret6m": -0.44,
      "ret1y": -13.53,
      "ret2y": -0.56,
      "ret3y": 34.23
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.814,
      "ret1w": 0.98,
      "ret1m": -9.27,
      "ret3m": -26.32,
      "ret6m": -24.66,
      "ret1y": -19.83,
      "ret2y": 45.09,
      "ret3y": 89.77
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5573,
      "ret1w": -0.82,
      "ret1m": -1.16,
      "ret3m": 0.27,
      "ret6m": 4.32,
      "ret1y": -4.68,
      "ret2y": -4.69,
      "ret3y": 3.19
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.961,
      "ret1w": 1.91,
      "ret1m": -1.13,
      "ret3m": -5.13,
      "ret6m": -10.94,
      "ret1y": -5.97,
      "ret2y": -13.5,
      "ret3y": -13.81
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3426,
      "ret1w": -0.85,
      "ret1m": 0.89,
      "ret3m": 3.05,
      "ret6m": 0.9,
      "ret1y": -3.2,
      "ret2y": 3.56,
      "ret3y": 4.15
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2398,
      "ret1w": 0.84,
      "ret1m": -2.1,
      "ret3m": -7.47,
      "ret6m": 3.1,
      "ret1y": -4.59,
      "ret2y": 8.33,
      "ret3y": 50.19
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.0618,
      "ret1w": -0.05,
      "ret1m": -5.32,
      "ret3m": -15.8,
      "ret6m": -14.61,
      "ret1y": -21.35,
      "ret2y": -5.0,
      "ret3y": 14.75
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.1301,
      "ret1w": -0.04,
      "ret1m": -5.31,
      "ret3m": -15.76,
      "ret6m": -14.52,
      "ret1y": -21.2,
      "ret2y": -4.63,
      "ret3y": 15.67
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0584,
      "ret1w": -0.19,
      "ret1m": -0.49,
      "ret3m": -1.96,
      "ret6m": -3.75,
      "ret1y": -3.36,
      "ret2y": -1.19,
      "ret3y": 3.79
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.033,
      "ret1w": -0.19,
      "ret1m": -0.48,
      "ret3m": -1.92,
      "ret6m": -3.6,
      "ret1y": -3.07,
      "ret2y": -0.6,
      "ret3y": 5.04
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6963,
      "ret1w": -0.39,
      "ret1m": -0.17,
      "ret3m": -1.29,
      "ret6m": -4.3,
      "ret1y": -13.11,
      "ret2y": -13.22,
      "ret3y": -3.56
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7143,
      "ret1w": -0.39,
      "ret1m": -0.18,
      "ret3m": -1.26,
      "ret6m": -4.2,
      "ret1y": -12.91,
      "ret2y": -12.79,
      "ret3y": -2.6
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.3557,
      "ret1w": -0.46,
      "ret1m": -6.16,
      "ret3m": -19.1,
      "ret6m": -15.53,
      "ret1y": -5.04,
      "ret2y": 33.27,
      "ret3y": 105.11
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3334,
      "ret1w": 1.63,
      "ret1m": -1.39,
      "ret3m": -5.81,
      "ret6m": -5.19,
      "ret1y": -7.32,
      "ret2y": 9.94,
      "ret3y": 53.38
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7036,
      "ret1w": 2.63,
      "ret1m": 0.96,
      "ret3m": -1.44,
      "ret6m": -2.17,
      "ret1y": -21.42,
      "ret2y": -10.82,
      "ret3y": 0.79
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9288,
      "ret1w": 3.91,
      "ret1m": 0.26,
      "ret3m": -5.41,
      "ret6m": -4.93,
      "ret1y": 3.43,
      "ret2y": 27.94,
      "ret3y": 93.31
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4724,
      "ret1w": -0.38,
      "ret1m": -2.09,
      "ret3m": -7.48,
      "ret6m": -11.22,
      "ret1y": -8.49,
      "ret2y": 5.33,
      "ret3y": 25.87
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4818,
      "ret1w": -0.35,
      "ret1m": -2.05,
      "ret3m": -7.42,
      "ret6m": -11.11,
      "ret1y": -8.28,
      "ret2y": 5.77,
      "ret3y": 26.92
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2641,
      "ret1w": -0.42,
      "ret1m": -0.68,
      "ret3m": -0.35,
      "ret6m": 0.71,
      "ret1y": -2.34,
      "ret2y": -1.73,
      "ret3y": 0.56
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0899,
      "ret1w": -0.95,
      "ret1m": -1.19,
      "ret3m": -2.15,
      "ret6m": -4.53,
      "ret1y": -6.29,
      "ret2y": -5.91,
      "ret3y": 2.77
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1911,
      "ret1w": -0.33,
      "ret1m": -6.38,
      "ret3m": -14.11,
      "ret6m": -13.41,
      "ret1y": -20.32,
      "ret2y": -24.43,
      "ret3y": -13.24
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8704,
      "ret1w": -0.05,
      "ret1m": -1.16,
      "ret3m": -4.17,
      "ret6m": -1.25,
      "ret1y": -10.7,
      "ret2y": 5.45,
      "ret3y": 31.59
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.621,
      "ret1w": 0.11,
      "ret1m": -8.77,
      "ret3m": -23.9,
      "ret6m": -29.84,
      "ret1y": -22.11,
      "ret2y": 31.18,
      "ret3y": 94.58
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5417,
      "ret1w": -0.73,
      "ret1m": -0.27,
      "ret3m": 3.09,
      "ret6m": 3.82,
      "ret1y": 2.64,
      "ret2y": 1.57,
      "ret3y": 2.16
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5417,
      "ret1w": 1.98,
      "ret1m": -2.01,
      "ret3m": -13.2,
      "ret6m": -6.33,
      "ret1y": -25.53,
      "ret2y": -7.35,
      "ret3y": -0.88
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 11.29,
      "ret1w": 0.12,
      "ret1m": -8.02,
      "ret3m": -26.37,
      "ret6m": -14.69,
      "ret1y": 1.6,
      "ret2y": 68.51,
      "ret3y": 169.0
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0574,
      "ret1w": 0.01,
      "ret1m": -0.16,
      "ret3m": -0.88,
      "ret6m": -0.94,
      "ret1y": -1.13,
      "ret2y": 0.44,
      "ret3y": 3.15
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1059,
      "ret1w": 0.02,
      "ret1m": -0.16,
      "ret3m": -0.86,
      "ret6m": -0.88,
      "ret1y": -1.01,
      "ret2y": 0.67,
      "ret3y": 3.84
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0676,
      "ret1w": 0.05,
      "ret1m": 0.08,
      "ret3m": 0.21,
      "ret6m": 0.48,
      "ret1y": 0.73,
      "ret2y": 1.72,
      "ret3y": 3.05
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1019,
      "ret1w": 0.04,
      "ret1m": 0.09,
      "ret3m": 0.21,
      "ret6m": 0.44,
      "ret1y": 0.8,
      "ret2y": 1.63,
      "ret3y": 3.94
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1116,
      "ret1w": 0.04,
      "ret1m": 0.1,
      "ret3m": 0.23,
      "ret6m": 0.49,
      "ret1y": 0.9,
      "ret2y": 1.83,
      "ret3y": 4.38
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0781,
      "ret1w": 0.04,
      "ret1m": 0.06,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.65,
      "ret2y": 1.56,
      "ret3y": 3.01
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.093,
      "ret1w": 0.04,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.45,
      "ret1y": 0.8,
      "ret2y": 1.88,
      "ret3y": 3.67
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0268,
      "ret1w": 0.17,
      "ret1m": -1.21,
      "ret3m": -3.78,
      "ret6m": -2.65,
      "ret1y": -4.55,
      "ret2y": 2.21,
      "ret3y": 6.58
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1821,
      "ret1w": 0.31,
      "ret1m": -1.27,
      "ret3m": -3.52,
      "ret6m": -0.92,
      "ret1y": -4.6,
      "ret2y": -0.62,
      "ret3y": 1.77
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0338,
      "ret1w": 0.16,
      "ret1m": -1.2,
      "ret3m": -3.75,
      "ret6m": -2.55,
      "ret1y": -4.36,
      "ret2y": 2.62,
      "ret3y": 7.44
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0451,
      "ret1w": 0.04,
      "ret1m": 0.07,
      "ret3m": 0.2,
      "ret6m": 0.49,
      "ret1y": 0.85,
      "ret2y": 1.85,
      "ret3y": 3.69
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1278,
      "ret1w": 0.12,
      "ret1m": -1.33,
      "ret3m": -4.18,
      "ret6m": -3.28,
      "ret1y": -6.75,
      "ret2y": -3.79,
      "ret3y": 2.43
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2001,
      "ret1w": -0.02,
      "ret1m": -0.27,
      "ret3m": -0.82,
      "ret6m": -1.13,
      "ret1y": -2.29,
      "ret2y": 1.45,
      "ret3y": 9.84
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1237,
      "ret1w": 0.11,
      "ret1m": -0.37,
      "ret3m": -1.27,
      "ret6m": -0.53,
      "ret1y": -1.07,
      "ret2y": 1.66,
      "ret3y": 7.4
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1948,
      "ret1w": 0.11,
      "ret1m": -0.37,
      "ret3m": -1.23,
      "ret6m": -0.43,
      "ret1y": -0.88,
      "ret2y": 2.08,
      "ret3y": 8.29
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.12,
      "ret1w": -2.66,
      "ret1m": -13.96,
      "ret3m": -8.15,
      "ret6m": -8.11,
      "ret1y": 9.0,
      "ret2y": 53.85,
      "ret3y": 111.16
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9815,
      "ret1w": 0.43,
      "ret1m": -1.91,
      "ret3m": 0.01,
      "ret6m": 3.1,
      "ret1y": 5.48,
      "ret2y": 8.84,
      "ret3y": 28.72
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7143,
      "ret1w": -0.03,
      "ret1m": -3.44,
      "ret3m": -5.31,
      "ret6m": -7.2,
      "ret1y": -18.39,
      "ret2y": -5.89,
      "ret3y": 19.91
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3061,
      "ret1w": 1.07,
      "ret1m": -5.3,
      "ret3m": -5.74,
      "ret6m": 4.64,
      "ret1y": 8.41,
      "ret2y": 11.79,
      "ret3y": 59.31
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9168,
      "ret1w": -0.23,
      "ret1m": 0.26,
      "ret3m": -0.78,
      "ret6m": -2.54,
      "ret1y": -3.87,
      "ret2y": -6.4,
      "ret3y": -3.34
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4665,
      "ret1w": 0.88,
      "ret1m": -6.85,
      "ret3m": -7.42,
      "ret6m": -5.95,
      "ret1y": 6.2,
      "ret2y": 29.96,
      "ret3y": 74.89
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.492,
      "ret1w": 0.22,
      "ret1m": -1.81,
      "ret3m": -1.06,
      "ret6m": -0.88,
      "ret1y": -0.71,
      "ret2y": 4.15,
      "ret3y": 14.94
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.835,
      "ret1w": 0.12,
      "ret1m": -7.22,
      "ret3m": -11.26,
      "ret6m": -10.31,
      "ret1y": -29.36,
      "ret2y": -29.0,
      "ret3y": -12.01
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.6143,
      "ret1w": 0.43,
      "ret1m": -9.11,
      "ret3m": -8.89,
      "ret6m": -4.57,
      "ret1y": 9.01,
      "ret2y": 56.25,
      "ret3y": 121.36
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5948,
      "ret1w": -0.49,
      "ret1m": 0.03,
      "ret3m": -0.65,
      "ret6m": 13.64,
      "ret1y": 4.39,
      "ret2y": 29.89,
      "ret3y": 49.65
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6489,
      "ret1w": 0.05,
      "ret1m": -4.27,
      "ret3m": -5.13,
      "ret6m": -0.13,
      "ret1y": 3.56,
      "ret2y": 18.29,
      "ret3y": 42.55
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2247,
      "ret1w": -0.05,
      "ret1m": -4.74,
      "ret3m": -5.88,
      "ret6m": -2.84,
      "ret1y": -3.88,
      "ret2y": 4.67,
      "ret3y": 22.02
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.229,
      "ret1w": -1.05,
      "ret1m": -0.89,
      "ret3m": -1.52,
      "ret6m": -8.76,
      "ret1y": -6.82,
      "ret2y": -2.38,
      "ret3y": -15.15
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.968,
      "ret1w": -0.66,
      "ret1m": -0.71,
      "ret3m": -5.29,
      "ret6m": 1.65,
      "ret1y": -16.4,
      "ret2y": -8.04,
      "ret3y": 35.42
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.8671,
      "ret1w": 0.77,
      "ret1m": -6.48,
      "ret3m": -7.6,
      "ret6m": -4.82,
      "ret1y": 3.66,
      "ret2y": 27.68,
      "ret3y": 54.92
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0158,
      "ret1w": 0.02,
      "ret1m": 0.17,
      "ret3m": 0.37,
      "ret6m": 0.72,
      "ret1y": 1.31,
      "ret2y": 2.55,
      "ret3y": 3.9
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.015,
      "ret1w": 0.02,
      "ret1m": 0.18,
      "ret3m": 0.39,
      "ret6m": 0.76,
      "ret1y": 1.34,
      "ret2y": 2.64,
      "ret3y": 4.08
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.258,
      "ret1w": -0.08,
      "ret1m": -3.16,
      "ret3m": -9.95,
      "ret6m": -13.0,
      "ret1y": -15.57,
      "ret2y": -10.91,
      "ret3y": 3.88
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.437,
      "ret1w": -0.37,
      "ret1m": -4.62,
      "ret3m": -12.9,
      "ret6m": -12.21,
      "ret1y": -17.89,
      "ret2y": -5.58,
      "ret3y": 15.83
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5176,
      "ret1w": -0.86,
      "ret1m": -3.45,
      "ret3m": -6.93,
      "ret6m": -0.5,
      "ret1y": -17.37,
      "ret2y": 3.7,
      "ret3y": 40.39
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.9346,
      "ret1w": -0.48,
      "ret1m": -3.6,
      "ret3m": -8.76,
      "ret6m": -7.97,
      "ret1y": -9.57,
      "ret2y": -0.54,
      "ret3y": 13.95
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.991,
      "ret1w": -0.48,
      "ret1m": -3.6,
      "ret3m": -8.73,
      "ret6m": -7.88,
      "ret1y": -9.39,
      "ret2y": -0.15,
      "ret3y": 14.87
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7771,
      "ret1w": 0.59,
      "ret1m": -3.24,
      "ret3m": -11.71,
      "ret6m": -7.36,
      "ret1y": -16.17,
      "ret2y": -2.35,
      "ret3y": 21.69
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6326,
      "ret1w": -0.51,
      "ret1m": -2.69,
      "ret3m": -7.4,
      "ret6m": -8.93,
      "ret1y": -11.11,
      "ret2y": -6.7,
      "ret3y": 8.44
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4811,
      "ret1w": 0.23,
      "ret1m": -2.0,
      "ret3m": -5.94,
      "ret6m": -3.23,
      "ret1y": -12.37,
      "ret2y": 2.37,
      "ret3y": 27.79
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.641,
      "ret1w": -0.35,
      "ret1m": -5.58,
      "ret3m": -15.72,
      "ret6m": -18.36,
      "ret1y": -16.59,
      "ret2y": -6.72,
      "ret3y": 20.77
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0189,
      "ret1w": -0.58,
      "ret1m": -1.46,
      "ret3m": -3.73,
      "ret6m": -5.46,
      "ret1y": -8.32,
      "ret2y": -7.16,
      "ret3y": 5.68
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4916,
      "ret1w": -0.73,
      "ret1m": 1.4,
      "ret3m": 0.3,
      "ret6m": -0.1,
      "ret1y": -1.66,
      "ret2y": 9.23,
      "ret3y": 26.65
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4252,
      "ret1w": 1.03,
      "ret1m": -3.48,
      "ret3m": -0.74,
      "ret6m": 1.86,
      "ret1y": 7.84,
      "ret2y": 11.11,
      "ret3y": 31.97
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.3886,
      "ret1w": -0.85,
      "ret1m": -4.5,
      "ret3m": -12.21,
      "ret6m": -14.13,
      "ret1y": -18.16,
      "ret2y": -7.11,
      "ret3y": 13.68
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0301,
      "ret1w": -0.12,
      "ret1m": -6.0,
      "ret3m": -12.06,
      "ret6m": -16.14,
      "ret1y": -14.66,
      "ret2y": -7.47,
      "ret3y": 20.11
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0333,
      "ret1w": -0.12,
      "ret1m": -5.89,
      "ret3m": -11.95,
      "ret6m": -15.96,
      "ret1y": -14.52,
      "ret2y": -7.29,
      "ret3y": 19.8
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2602,
      "ret1w": -0.23,
      "ret1m": -3.65,
      "ret3m": -10.0,
      "ret6m": -8.54,
      "ret1y": -16.0,
      "ret2y": -6.99,
      "ret3y": 11.49
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2897,
      "ret1w": -0.22,
      "ret1m": -3.65,
      "ret3m": -9.97,
      "ret6m": -8.44,
      "ret1y": -15.83,
      "ret2y": -6.62,
      "ret3y": 12.39
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7866,
      "ret1w": -0.41,
      "ret1m": -3.44,
      "ret3m": -11.54,
      "ret6m": -15.38,
      "ret1y": -15.62,
      "ret2y": -2.72,
      "ret3y": 26.5
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1591,
      "ret1w": 0.15,
      "ret1m": -0.03,
      "ret3m": -0.4,
      "ret6m": -0.5,
      "ret1y": -0.66,
      "ret2y": 1.33,
      "ret3y": 5.66
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1794,
      "ret1w": 0.15,
      "ret1m": -0.03,
      "ret3m": -0.37,
      "ret6m": -0.41,
      "ret1y": -0.51,
      "ret2y": 1.65,
      "ret3y": 6.3
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.088,
      "ret1w": 0.05,
      "ret1m": 0.09,
      "ret3m": 0.23,
      "ret6m": 0.55,
      "ret1y": 0.88,
      "ret2y": 2.03,
      "ret3y": 3.63
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4119,
      "ret1w": 0.04,
      "ret1m": 0.09,
      "ret3m": 0.18,
      "ret6m": 0.07,
      "ret1y": 0.16,
      "ret2y": 0.79,
      "ret3y": 6.52
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.465,
      "ret1w": 0.04,
      "ret1m": 0.1,
      "ret3m": 0.22,
      "ret6m": 0.17,
      "ret1y": 0.36,
      "ret2y": 1.19,
      "ret3y": 7.38
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9529,
      "ret1w": 0.44,
      "ret1m": -2.54,
      "ret3m": -8.86,
      "ret6m": -6.32,
      "ret1y": 2.12,
      "ret2y": 14.3,
      "ret3y": 38.59
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0819,
      "ret1w": 0.64,
      "ret1m": -3.88,
      "ret3m": -12.16,
      "ret6m": -11.43,
      "ret1y": -10.87,
      "ret2y": -4.15,
      "ret3y": 18.62
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 3.9501,
      "price": 3.9501,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.34,
      "nav": 3.3432,
      "price": 3.3432,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.62,
      "nav": 4.3609,
      "price": 4.3609,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.08,
      "nav": 0.7081,
      "price": 0.7081,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.9299,
      "price": 1.9299,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.5823,
      "price": 2.5823,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 5.2188,
      "price": 5.2188,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.748,
      "price": 1.748,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.1875,
      "price": 1.1875,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 2.784,
      "price": 2.784,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 1.114,
      "price": 1.114,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.311,
      "price": 2.311,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.52,
      "nav": 1.3746,
      "price": 1.3746,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.8494,
      "price": 1.8494,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.4961,
      "price": 1.4961,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.46,
      "nav": 1.814,
      "price": 1.814,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.5573,
      "price": 2.5573,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 0.961,
      "price": 0.961,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.3426,
      "price": 2.3426,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.2398,
      "price": 1.2398,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.78,
      "sharpe": -1.37,
      "calmar": -1.37
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 10.2,
      "sharpe": -2.4,
      "calmar": -2.4
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 18.57,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.43,
      "sharpe": -0.68,
      "calmar": -0.68
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.82,
      "sharpe": -4.71,
      "calmar": -4.71
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.94,
      "sharpe": -3.54,
      "calmar": -3.54
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.21,
      "sharpe": -1.78,
      "calmar": -1.78
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.94,
      "sharpe": -1.72,
      "calmar": -1.72
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 6.86,
      "sharpe": -1.66,
      "calmar": -1.66
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.1,
      "sharpe": -0.63,
      "calmar": -0.63
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.77,
      "sharpe": -0.34,
      "calmar": -0.34
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.97,
      "sharpe": -1.91,
      "calmar": -1.91
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 15.64,
      "sharpe": -3.61,
      "calmar": -3.61
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.05,
      "sharpe": 0.28,
      "calmar": 0.28
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.39,
      "sharpe": -1.46,
      "calmar": -1.46
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 13.9,
      "sharpe": -1.39,
      "calmar": -1.39
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.74,
      "sharpe": -0.76,
      "calmar": -0.76
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 1.69,
      "sharpe": -0.97,
      "calmar": -0.97
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.33,
      "sharpe": -0.54,
      "calmar": -0.54
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.15,
      "sharpe": -0.65,
      "calmar": -0.65
    }
  ],
  "news": [
    {
      "title": "商务部新闻发言人就美以窃取商业秘密为由制裁中国企业答记者问。问：当地时间10月19日，美方依据《保护美国知识产权法》，以窃取商业秘密为由，对中国5家企业实施制裁。请问中方对此有何评论？答：我们注意到有关情况。美方炒作所谓“窃取商业秘密”问题，污名化中国企业并实施制裁，严重损害中国企业合法权益，性质恶劣，中方对此坚决反对。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:38",
      "impact": "neutral"
    },
    {
      "title": "中新网北京10月20日电(记者吕少威迟瀚宇)2026金融街论坛年会金融支持北京(京津冀)国际科创中心建设专场活动20日在京举办。活动上，《金融支持建设北京(京津冀)国际科技创新中心实施方案》(以下简称《实施方案》)发布，聚焦国际科技创新中心核心功能建设、京津冀创新协同和产业协作，出台一系列政策举措，推动构建多层次、多渠道科技金融支撑体系。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:35",
      "impact": "neutral"
    },
    {
      "title": "10月19日，证监会就《证券市场先行赔付指导意见（征求意见稿）》公开征求意见，文件共21条，反馈截止时间为2026年11月18日。四方面值得重点关注。第一，谁可以赔。证券法规定的主体是发行人的控股股东、实际控制人、相关的证券公司，适用前提是“自愿先行赔付全案投资者损失”；会计师事务所、律师事务所等主体自愿先行赔付的，可以参照适用。第二，谁来做。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:27",
      "impact": "neutral"
    },
    {
      "title": "10月20日，国家发展改革委召开新闻发布会，正式发布首批136个国家标志性重大应用场景项目。其中广东牵头申报的10个场景项目入围，数量居全国第一。何谓“场景”？简而言之，就是给新技术一个真实的使用环境。创新成果转化为现实生产力，需要技术、产品、业态、基础设施、商业模式、制度规范的共同成熟，而场景正是贯通从“技术可行”到“现实可用”的综合性创新载体。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:27",
      "impact": "neutral"
    },
    {
      "title": "10月20日，深圳市规划和自然资源局、深圳市海洋发展局举行2026中国海洋经济博览会新闻发布会。记者获悉，2026中国海博会计划10月22日至24日举办，延续“数智深蓝共创未来”主题，展览面积约5万平方米。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:23",
      "impact": "neutral"
    },
    {
      "title": "千年商都，链通全球。广交会一期刚落幕，吸引了来自214个国家和地区的18.9万名境外采购商到会。全球客商集聚在广州，络绎不绝的订单激发了外贸新动能。今年前三季度，广州的贸易伙伴遍布全球超过200个国家和地区，且对其中近七成国家和地区的进出口实现增长。数据显示，今年前三季度，广州对东盟、非洲、拉美进出口分别增长9.1%、26.5%、14.8%，对中亚进出口增长89.7%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:22",
      "impact": "neutral"
    },
    {
      "title": "中新社南昌10月20日电(记者吴鹏泉)南昌海关20日公布，今年前三季度，江西电动汽车出口量创历史同期新高，达11.9万辆，出口值同比(下同)增长2.2倍。江西制造加速融入全球产供链。数据显示，该省装备制造业出口连续5个月两位数增长，9月份增速提升至34.8%，前三季度贡献了近七成出口增量。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:16",
      "impact": "neutral"
    },
    {
      "title": "新华财经北京10月20日电（张煜）2026金融街论坛年会10月19日在京开幕。国家金融监督管理总局稽查局局长邢桂君20日在“护航普惠包容金融新生态：风险防范与治理现代化”平行论坛上表示，金融领域的行政执法与刑事司法衔接机制建设至关重要。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:15",
      "impact": "neutral"
    },
    {
      "title": "10月20日，国家数据集团有限公司在河北雄安新区成立。记者从集团获悉，该集团是一家以数据资源开发利用为主责主业的中央企业，总部位于河北雄安新区。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:30",
      "impact": "neutral"
    },
    {
      "title": "中新社天津10月20日电(记者周亚强)天津海关20日发布数据显示，今年前三季度，京津冀地区进出口总值4万亿元(人民币，下同)，同比(下同)增长14%，创历史同期新高。其中，出口1.22万亿元，增长14.2%；进口2.78万亿元，增长13.9%。9月当月，京津冀地区进出口4888亿元，增长9.2%，为月度历史最高值。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:06",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 50,
    "label": "中性",
    "upDownRatio": "3,104/1,448",
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
