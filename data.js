// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-17 14:51:34
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-17 14:51 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-17",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3875.6,
      "change": -16.0,
      "changePct": "-0.41%",
      "high": 3898.84,
      "low": 3866.89,
      "volume": 452886464.0,
      "amount": 868773070000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13409.91,
      "change": -44.83,
      "changePct": "-0.33%",
      "high": 13553.59,
      "low": 13374.04,
      "volume": 558256880.0,
      "amount": 954361200000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3298.31,
      "change": -13.16,
      "changePct": "-0.40%",
      "high": 3351.42,
      "low": 3293.93,
      "volume": 145220257.0,
      "amount": 443225380000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1606.29,
      "change": -9.9,
      "changePct": "-0.61%",
      "high": 1631.02,
      "low": 1598.96,
      "volume": 6555793.0,
      "amount": 85437720000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4460.16,
      "change": -20.11,
      "changePct": "-0.45%",
      "high": 4495.83,
      "low": 4453.92,
      "volume": 170025642.0,
      "amount": 448339160000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7654.98,
      "change": -28.49,
      "changePct": "-0.37%",
      "high": 7738.03,
      "low": 7622.55,
      "volume": 133611162.0,
      "amount": 319425720000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.12万亿",
      "label": "成交额",
      "rawAmount": 3119562250000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,657/1,671",
      "label": "涨/跌家数",
      "rawUp": 2657,
      "rawDown": 1671,
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
    "totalInflow": 15.16,
    "totalOutflow": 0,
    "netFlow": 15.16,
    "netFlowTrend": [
      3.03,
      6.06,
      9.1,
      12.13,
      15.16
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
      "inflow": 10.12,
      "pct": 0.15
    },
    {
      "name": "创新药",
      "inflow": 1.6,
      "pct": 0.48
    },
    {
      "name": "医疗",
      "inflow": 1.23,
      "pct": 0.6
    },
    {
      "name": "医药",
      "inflow": 0.74,
      "pct": 0.81
    },
    {
      "name": "传媒",
      "inflow": 0.46,
      "pct": 0.25
    },
    {
      "name": "人工智能",
      "inflow": 0.41,
      "pct": 0.1
    },
    {
      "name": "农业",
      "inflow": 0.26,
      "pct": 0.41
    },
    {
      "name": "地产",
      "inflow": 0.23,
      "pct": 0.34
    },
    {
      "name": "家电",
      "inflow": 0.09,
      "pct": 0.29
    },
    {
      "name": "食品",
      "inflow": 0.02,
      "pct": 0.21
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.1
    },
    {
      "name": "白酒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "计算机",
      "inflow": -0.06,
      "pct": -0.36
    },
    {
      "name": "游戏",
      "inflow": -0.17,
      "pct": -0.37
    },
    {
      "name": "新能源",
      "inflow": -0.24,
      "pct": -0.39
    },
    {
      "name": "光伏",
      "inflow": -0.25,
      "pct": -0.63
    },
    {
      "name": "云计算",
      "inflow": -0.25,
      "pct": -0.68
    },
    {
      "name": "新能源车",
      "inflow": -0.58,
      "pct": -0.07
    },
    {
      "name": "银行",
      "inflow": -2.23,
      "pct": -0.24
    },
    {
      "name": "5G",
      "inflow": -3.1,
      "pct": -0.57
    }
  ],
  "sectors": [
    {
      "name": "医药",
      "code": "512010",
      "price": 0.372,
      "changePct": 0.81,
      "change": 0.003,
      "turnover": 2.47
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.337,
      "changePct": 0.6,
      "change": 0.002,
      "turnover": 4.11
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.83,
      "changePct": 0.48,
      "change": 0.004,
      "turnover": 5.35
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.728,
      "changePct": 0.41,
      "change": 0.003,
      "turnover": 0.86
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.185,
      "changePct": 0.34,
      "change": 0.004,
      "turnover": 0.76
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.4,
      "changePct": 0.29,
      "change": 0.004,
      "turnover": 0.31
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.808,
      "changePct": 0.25,
      "change": 0.002,
      "turnover": 1.53
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.485,
      "changePct": 0.21,
      "change": 0.001,
      "turnover": 0.06
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.686,
      "changePct": 0.15,
      "change": 0.001,
      "turnover": 33.72
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.0,
      "changePct": 0.1,
      "change": 0.001,
      "turnover": 1.37
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.005,
      "changePct": 0.1,
      "change": 0.001,
      "turnover": 0.05
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.408,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.96
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.483,
      "changePct": -0.07,
      "change": -0.001,
      "turnover": 1.92
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.837,
      "changePct": -0.24,
      "change": -0.002,
      "turnover": 7.42
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.114,
      "changePct": -0.36,
      "change": -0.004,
      "turnover": 0.2
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.063,
      "changePct": -0.37,
      "change": -0.004,
      "turnover": 0.57
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.294,
      "changePct": -0.39,
      "change": -0.009,
      "turnover": 0.79
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.044,
      "changePct": -0.57,
      "change": -0.006,
      "turnover": 10.34
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.793,
      "changePct": -0.63,
      "change": -0.005,
      "turnover": 0.84
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.603,
      "changePct": -0.68,
      "change": -0.011,
      "turnover": 0.83
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.001,
      "changePct": -0.69,
      "change": -0.007,
      "turnover": 9.11
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.142,
      "changePct": -0.7,
      "change": -0.008,
      "turnover": 2.11
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.823,
      "changePct": -0.72,
      "change": -0.006,
      "turnover": 0.4
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.499,
      "changePct": -0.8,
      "change": -0.004,
      "turnover": 9.92
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.129,
      "changePct": -0.88,
      "change": -0.01,
      "turnover": 0.49
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.114,
      "changePct": -0.89,
      "change": -0.01,
      "turnover": 6.16
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.258,
      "changePct": -1.1,
      "change": -0.014,
      "turnover": 4.22
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.708,
      "changePct": -2.57,
      "change": -0.045,
      "turnover": 7.29
    }
  ],
  "etfFlow": [
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.372,
      "changePct": 0.81,
      "amount": 2.47,
      "netFlow": 0.62
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.294,
      "changePct": -0.39,
      "amount": 0.79,
      "netFlow": -0.2
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.733,
      "changePct": -0.34,
      "amount": 4.96,
      "netFlow": -1.24
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.404,
      "changePct": -0.36,
      "amount": 5.05,
      "netFlow": -1.26
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.001,
      "changePct": -0.69,
      "amount": 9.11,
      "netFlow": -2.28
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.499,
      "changePct": -0.8,
      "amount": 9.92,
      "netFlow": -2.48
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.958,
      "changePct": -0.74,
      "amount": 14.33,
      "netFlow": -3.58
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.532,
      "changePct": -0.4,
      "amount": 23.04,
      "netFlow": -5.76
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.681,
      "changePct": -0.38,
      "amount": 32.18,
      "netFlow": -8.05
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.696,
      "changePct": -0.7,
      "amount": 55.9,
      "netFlow": -13.98
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.532,
      "changePct": -0.4,
      "amount": 23.04,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.958,
      "changePct": -0.74,
      "amount": 14.33,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.681,
      "changePct": -0.38,
      "amount": 32.18,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.733,
      "changePct": -0.34,
      "amount": 4.96,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.404,
      "changePct": -0.36,
      "amount": 5.05,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "医药",
      "turnover": 2.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 33.72,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.37,
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
    },
    {
      "name": "白酒",
      "turnover": 2.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 7.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 10.34,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 0.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.83,
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
      "nav": 4.6361,
      "ret1w": 1.01,
      "ret1m": 2.16,
      "ret3m": -1.72,
      "ret6m": -8.62,
      "ret1y": 9.68,
      "ret2y": 20.29,
      "ret3y": 171.59
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1077,
      "ret1w": -1.3,
      "ret1m": -1.69,
      "ret3m": -8.19,
      "ret6m": -18.58,
      "ret1y": 6.21,
      "ret2y": 0.7,
      "ret3y": 68.65
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 6.0187,
      "ret1w": 0.83,
      "ret1m": 1.23,
      "ret3m": 1.59,
      "ret6m": -10.38,
      "ret1y": 59.71,
      "ret2y": 88.63,
      "ret3y": 320.45
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6933,
      "ret1w": 0.3,
      "ret1m": -1.53,
      "ret3m": -1.41,
      "ret6m": 5.4,
      "ret1y": -10.11,
      "ret2y": -18.32,
      "ret3y": 6.29
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9447,
      "ret1w": -0.56,
      "ret1m": -3.74,
      "ret3m": -14.74,
      "ret6m": -20.64,
      "ret1y": -34.99,
      "ret2y": -31.83,
      "ret3y": 12.91
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6892,
      "ret1w": 0.26,
      "ret1m": -2.04,
      "ret3m": -3.14,
      "ret6m": -9.12,
      "ret1y": -26.26,
      "ret2y": -20.54,
      "ret3y": 38.55
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.334,
      "ret1w": -0.37,
      "ret1m": -2.5,
      "ret3m": -3.77,
      "ret6m": 1.35,
      "ret1y": -8.34,
      "ret2y": 6.03,
      "ret3y": 61.27
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.917,
      "ret1w": 0.21,
      "ret1m": 1.27,
      "ret3m": -3.43,
      "ret6m": -11.13,
      "ret1y": -0.52,
      "ret2y": 3.85,
      "ret3y": 80.51
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3268,
      "ret1w": -0.08,
      "ret1m": -0.36,
      "ret3m": -6.21,
      "ret6m": -8.69,
      "ret1y": 0.44,
      "ret2y": 5.69,
      "ret3y": 48.75
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.414,
      "ret1w": 0.12,
      "ret1m": 2.58,
      "ret3m": -8.67,
      "ret6m": -11.96,
      "ret1y": 36.23,
      "ret2y": 62.03,
      "ret3y": 296.06
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.083,
      "ret1w": -0.09,
      "ret1m": -1.99,
      "ret3m": -4.58,
      "ret6m": 6.39,
      "ret1y": -8.14,
      "ret2y": -18.75,
      "ret3y": 7.12
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.312,
      "ret1w": 0.17,
      "ret1m": -0.43,
      "ret3m": -7.04,
      "ret6m": 5.14,
      "ret1y": -15.16,
      "ret2y": -16.74,
      "ret3y": 35.05
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7403,
      "ret1w": -0.1,
      "ret1m": 4.72,
      "ret3m": -9.12,
      "ret6m": -35.66,
      "ret1y": -46.15,
      "ret2y": -38.16,
      "ret3y": 27.98
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8869,
      "ret1w": -0.02,
      "ret1m": -2.12,
      "ret3m": -1.81,
      "ret6m": 2.58,
      "ret1y": 0.38,
      "ret2y": -7.8,
      "ret3y": 10.06
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6579,
      "ret1w": -0.07,
      "ret1m": 0.15,
      "ret3m": -3.62,
      "ret6m": -8.57,
      "ret1y": -1.51,
      "ret2y": 7.52,
      "ret3y": 81.19
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3945,
      "ret1w": 0.03,
      "ret1m": 1.52,
      "ret3m": -7.95,
      "ret6m": -25.19,
      "ret1y": 31.05,
      "ret2y": 74.25,
      "ret3y": 246.43
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5143,
      "ret1w": -0.38,
      "ret1m": -2.81,
      "ret3m": -0.98,
      "ret6m": -1.41,
      "ret1y": -8.75,
      "ret2y": -6.95,
      "ret3y": 26.5
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.005,
      "ret1w": 0.7,
      "ret1m": 2.34,
      "ret3m": -10.43,
      "ret6m": 17.82,
      "ret1y": 3.82,
      "ret2y": -15.83,
      "ret3y": 8.18
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2689,
      "ret1w": -0.36,
      "ret1m": -3.02,
      "ret3m": -1.68,
      "ret6m": 0.85,
      "ret1y": -9.91,
      "ret2y": 1.3,
      "ret3y": 16.78
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3205,
      "ret1w": -0.35,
      "ret1m": -0.08,
      "ret3m": -2.77,
      "ret6m": 0.55,
      "ret1y": 3.27,
      "ret2y": 17.14,
      "ret3y": 86.46
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2439,
      "ret1w": -0.63,
      "ret1m": -0.74,
      "ret3m": -7.67,
      "ret6m": -13.63,
      "ret1y": -2.4,
      "ret2y": 9.3,
      "ret3y": 52.03
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3235,
      "ret1w": -0.62,
      "ret1m": -0.73,
      "ret3m": -7.63,
      "ret6m": -13.54,
      "ret1y": -2.22,
      "ret2y": 9.73,
      "ret3y": 53.27
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0761,
      "ret1w": -0.23,
      "ret1m": -0.66,
      "ret3m": -2.28,
      "ret6m": -3.48,
      "ret1y": -0.5,
      "ret2y": 0.33,
      "ret3y": 8.09
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0498,
      "ret1w": -0.23,
      "ret1m": -0.64,
      "ret3m": -2.23,
      "ret6m": -3.32,
      "ret1y": -0.19,
      "ret2y": 0.93,
      "ret3y": 9.4
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6973,
      "ret1w": -0.31,
      "ret1m": -1.57,
      "ret3m": -4.77,
      "ret6m": -3.37,
      "ret1y": -12.7,
      "ret2y": -13.16,
      "ret3y": 12.3
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7151,
      "ret1w": -0.32,
      "ret1m": -1.56,
      "ret3m": -4.73,
      "ret6m": -3.23,
      "ret1y": -12.48,
      "ret2y": -12.73,
      "ret3y": 13.44
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8641,
      "ret1w": -0.89,
      "ret1m": -0.05,
      "ret3m": -3.82,
      "ret6m": -15.79,
      "ret1y": 40.96,
      "ret2y": 57.68,
      "ret3y": 181.18
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4324,
      "ret1w": 0.19,
      "ret1m": -0.62,
      "ret3m": -7.53,
      "ret6m": -6.67,
      "ret1y": 1.22,
      "ret2y": 12.84,
      "ret3y": 89.34
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7042,
      "ret1w": -0.21,
      "ret1m": -1.95,
      "ret3m": -8.84,
      "ret6m": -15.76,
      "ret1y": -19.2,
      "ret2y": -15.01,
      "ret3y": 15.92
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0479,
      "ret1w": 0.2,
      "ret1m": 0.76,
      "ret3m": -9.46,
      "ret6m": -11.85,
      "ret1y": 17.66,
      "ret2y": 31.26,
      "ret3y": 148.61
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5043,
      "ret1w": -0.47,
      "ret1m": -0.45,
      "ret3m": -4.71,
      "ret6m": -16.41,
      "ret1y": -0.77,
      "ret2y": 9.3,
      "ret3y": 54.03
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5141,
      "ret1w": -0.46,
      "ret1m": -0.43,
      "ret3m": -4.66,
      "ret6m": -16.31,
      "ret1y": -0.56,
      "ret2y": 9.73,
      "ret3y": 55.32
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2684,
      "ret1w": -0.31,
      "ret1m": -1.43,
      "ret3m": -0.56,
      "ret6m": 0.11,
      "ret1y": -1.86,
      "ret2y": -1.4,
      "ret3y": 0.31
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1057,
      "ret1w": 0.02,
      "ret1m": -1.16,
      "ret3m": -3.75,
      "ret6m": 1.06,
      "ret1y": -5.27,
      "ret2y": -3.19,
      "ret3y": 18.5
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3683,
      "ret1w": -0.32,
      "ret1m": -0.9,
      "ret3m": -8.6,
      "ret6m": -17.15,
      "ret1y": -1.54,
      "ret2y": -21.13,
      "ret3y": 16.45
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9651,
      "ret1w": -0.56,
      "ret1m": -2.24,
      "ret3m": -1.11,
      "ret6m": -2.24,
      "ret1y": -8.93,
      "ret2y": 7.31,
      "ret3y": 55.41
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.371,
      "ret1w": -0.44,
      "ret1m": 1.38,
      "ret3m": -5.12,
      "ret6m": -26.45,
      "ret1y": 34.52,
      "ret2y": 59.46,
      "ret3y": 220.74
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5009,
      "ret1w": -0.27,
      "ret1m": -1.86,
      "ret3m": 3.0,
      "ret6m": 3.58,
      "ret1y": -1.33,
      "ret2y": 0.05,
      "ret3y": 17.14
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6088,
      "ret1w": -0.33,
      "ret1m": -1.57,
      "ret3m": -10.82,
      "ret6m": -27.18,
      "ret1y": -5.51,
      "ret2y": -0.34,
      "ret3y": 53.04
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.957,
      "ret1w": -1.42,
      "ret1m": 2.33,
      "ret3m": -5.2,
      "ret6m": -18.84,
      "ret1y": 79.06,
      "ret2y": 110.07,
      "ret3y": 386.56
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0652,
      "ret1w": -0.06,
      "ret1m": -0.17,
      "ret3m": -0.53,
      "ret6m": -1.77,
      "ret1y": -0.01,
      "ret2y": 1.26,
      "ret3y": 4.86
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1138,
      "ret1w": -0.05,
      "ret1m": -0.16,
      "ret3m": -0.51,
      "ret6m": -1.7,
      "ret1y": 0.12,
      "ret2y": 1.54,
      "ret3y": 5.58
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0651,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.1,
      "ret6m": 0.35,
      "ret1y": 0.74,
      "ret2y": 1.54,
      "ret3y": 2.63
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0995,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.33,
      "ret1y": 0.76,
      "ret2y": 1.51,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.109,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.86,
      "ret2y": 1.72,
      "ret3y": 4.3
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0764,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.05,
      "ret6m": 0.34,
      "ret1y": 0.73,
      "ret2y": 1.41,
      "ret3y": 2.63
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.091,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.07,
      "ret6m": 0.4,
      "ret1y": 0.89,
      "ret2y": 1.72,
      "ret3y": 3.29
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.061,
      "ret1w": -0.1,
      "ret1m": -0.36,
      "ret3m": -2.03,
      "ret6m": -3.83,
      "ret1y": 1.29,
      "ret2y": 5.26,
      "ret3y": 12.86
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2175,
      "ret1w": -0.04,
      "ret1m": -0.2,
      "ret3m": -1.81,
      "ret6m": -4.11,
      "ret1y": 0.75,
      "ret2y": 2.63,
      "ret3y": 7.74
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0678,
      "ret1w": -0.11,
      "ret1m": -0.36,
      "ret3m": -2.01,
      "ret6m": -3.74,
      "ret1y": 1.48,
      "ret2y": 5.68,
      "ret3y": 13.77
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0467,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.39,
      "ret1y": 0.87,
      "ret2y": 1.76,
      "ret3y": 3.6
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.171,
      "ret1w": -0.13,
      "ret1m": 0.03,
      "ret3m": -1.25,
      "ret6m": -3.0,
      "ret1y": -2.67,
      "ret2y": -0.22,
      "ret3y": 10.72
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2078,
      "ret1w": -0.06,
      "ret1m": -0.43,
      "ret3m": -1.0,
      "ret6m": -1.64,
      "ret1y": -0.8,
      "ret2y": 2.04,
      "ret3y": 14.82
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1359,
      "ret1w": -0.07,
      "ret1m": -0.09,
      "ret3m": -1.06,
      "ret6m": -2.41,
      "ret1y": 1.23,
      "ret2y": 2.68,
      "ret3y": 10.58
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2073,
      "ret1w": -0.07,
      "ret1m": -0.08,
      "ret3m": -1.03,
      "ret6m": -2.31,
      "ret1y": 1.43,
      "ret2y": 3.1,
      "ret3y": 11.51
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.308,
      "ret1w": 1.23,
      "ret1m": -7.16,
      "ret3m": -6.22,
      "ret6m": -14.3,
      "ret1y": 34.73,
      "ret2y": 75.78,
      "ret3y": 141.93
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9491,
      "ret1w": -0.15,
      "ret1m": -1.1,
      "ret3m": -1.56,
      "ret6m": 0.61,
      "ret1y": 9.39,
      "ret2y": 5.37,
      "ret3y": 35.76
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7886,
      "ret1w": 0.02,
      "ret1m": -3.58,
      "ret3m": -4.31,
      "ret6m": -15.67,
      "ret1y": -12.52,
      "ret2y": -3.64,
      "ret3y": 52.32
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3557,
      "ret1w": 0.05,
      "ret1m": -1.24,
      "ret3m": -1.56,
      "ret6m": 0.22,
      "ret1y": 22.36,
      "ret2y": 22.58,
      "ret3y": 72.28
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9243,
      "ret1w": -0.1,
      "ret1m": -0.91,
      "ret3m": -1.44,
      "ret6m": -2.16,
      "ret1y": -3.56,
      "ret2y": -5.4,
      "ret3y": -3.27
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.5656,
      "ret1w": 0.64,
      "ret1m": -5.31,
      "ret3m": -7.0,
      "ret6m": -11.71,
      "ret1y": 23.74,
      "ret2y": 39.41,
      "ret3y": 94.51
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.515,
      "ret1w": -0.13,
      "ret1m": -1.53,
      "ret3m": -2.67,
      "ret6m": -3.03,
      "ret1y": 5.24,
      "ret2y": 3.39,
      "ret3y": 20.08
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.161,
      "ret1w": -0.43,
      "ret1m": -3.73,
      "ret3m": -6.82,
      "ret6m": 7.6,
      "ret1y": -10.14,
      "ret2y": -28.77,
      "ret3y": 91.27
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.919,
      "ret1w": 0.33,
      "ret1m": -4.47,
      "ret3m": -6.22,
      "ret6m": -0.11,
      "ret1y": -11.21,
      "ret2y": -27.47,
      "ret3y": 46.57
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7982,
      "ret1w": 1.3,
      "ret1m": -4.47,
      "ret3m": -4.99,
      "ret6m": -12.17,
      "ret1y": 32.33,
      "ret2y": 67.52,
      "ret3y": 144.02
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5951,
      "ret1w": -1.08,
      "ret1m": -3.63,
      "ret3m": 3.19,
      "ret6m": 7.22,
      "ret1y": 4.33,
      "ret2y": 33.5,
      "ret3y": 59.21
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7287,
      "ret1w": 0.4,
      "ret1m": -3.04,
      "ret3m": 0.99,
      "ret6m": -1.35,
      "ret1y": 13.76,
      "ret2y": 25.11,
      "ret3y": 59.99
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2904,
      "ret1w": 0.37,
      "ret1m": -4.19,
      "ret3m": -2.26,
      "ret6m": -6.3,
      "ret1y": 5.61,
      "ret2y": 9.91,
      "ret3y": 38.63
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.256,
      "ret1w": -0.79,
      "ret1m": -1.8,
      "ret3m": -5.71,
      "ret6m": -5.63,
      "ret1y": -1.1,
      "ret2y": 0.96,
      "ret3y": -12.61
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.057,
      "ret1w": 0.34,
      "ret1m": -2.19,
      "ret3m": -1.95,
      "ret6m": -1.44,
      "ret1y": -15.35,
      "ret2y": 8.84,
      "ret3y": 48.7
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0119,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.1,
      "ret6m": 0.47,
      "ret1y": 1.44,
      "ret2y": 2.17,
      "ret3y": 3.5
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0108,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.11,
      "ret6m": 0.44,
      "ret1y": 1.44,
      "ret2y": 2.23,
      "ret3y": 3.67
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.379,
      "ret1w": -0.22,
      "ret1m": -1.22,
      "ret3m": -7.94,
      "ret6m": -12.33,
      "ret1y": -3.77,
      "ret2y": -3.84,
      "ret3y": 38.18
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.751,
      "ret1w": -0.22,
      "ret1m": -1.64,
      "ret3m": -8.57,
      "ret6m": -12.19,
      "ret1y": -1.36,
      "ret2y": 3.27,
      "ret3y": 65.13
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6232,
      "ret1w": -2.13,
      "ret1m": -4.86,
      "ret3m": -5.01,
      "ret6m": -7.33,
      "ret1y": -10.56,
      "ret2y": 20.42,
      "ret3y": 75.67
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0986,
      "ret1w": -0.37,
      "ret1m": -1.65,
      "ret3m": -4.27,
      "ret6m": -6.77,
      "ret1y": 0.5,
      "ret2y": 7.3,
      "ret3y": 48.03
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1591,
      "ret1w": -0.36,
      "ret1m": -1.64,
      "ret3m": -4.24,
      "ret6m": -6.67,
      "ret1y": 0.7,
      "ret2y": 7.73,
      "ret3y": 49.23
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.977,
      "ret1w": -0.35,
      "ret1m": -0.77,
      "ret3m": -6.19,
      "ret6m": -10.68,
      "ret1y": -3.77,
      "ret2y": 5.93,
      "ret3y": 70.48
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7456,
      "ret1w": -0.42,
      "ret1m": -1.79,
      "ret3m": -5.48,
      "ret6m": -8.42,
      "ret1y": -2.66,
      "ret2y": -0.62,
      "ret3y": 42.63
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.556,
      "ret1w": -0.29,
      "ret1m": -1.43,
      "ret3m": -3.78,
      "ret6m": -5.05,
      "ret1y": -6.88,
      "ret2y": 7.64,
      "ret3y": 61.08
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9143,
      "ret1w": -0.51,
      "ret1m": -0.86,
      "ret3m": -9.91,
      "ret6m": -16.37,
      "ret1y": 6.38,
      "ret2y": 6.89,
      "ret3y": 77.68
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0881,
      "ret1w": -0.47,
      "ret1m": -2.74,
      "ret3m": -3.68,
      "ret6m": 0.31,
      "ret1y": -5.02,
      "ret2y": -3.71,
      "ret3y": 30.63
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5037,
      "ret1w": 0.05,
      "ret1m": -0.29,
      "ret3m": -0.73,
      "ret6m": 2.06,
      "ret1y": 3.55,
      "ret2y": 10.63,
      "ret3y": 28.44
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3805,
      "ret1w": -0.02,
      "ret1m": -1.7,
      "ret3m": -3.66,
      "ret6m": -3.68,
      "ret1y": 13.93,
      "ret2y": 11.71,
      "ret3y": 36.11
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.6809,
      "ret1w": -0.21,
      "ret1m": -1.77,
      "ret3m": -8.37,
      "ret6m": -14.18,
      "ret1y": -0.51,
      "ret2y": 2.6,
      "ret3y": 60.61
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1502,
      "ret1w": -0.3,
      "ret1m": -2.64,
      "ret3m": -4.65,
      "ret6m": -12.73,
      "ret1y": -0.6,
      "ret2y": 3.63,
      "ret3y": 54.04
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1524,
      "ret1w": -0.3,
      "ret1m": -2.64,
      "ret3m": -4.59,
      "ret6m": -12.6,
      "ret1y": -0.52,
      "ret2y": 3.78,
      "ret3y": 53.51
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3825,
      "ret1w": 1.41,
      "ret1m": -0.85,
      "ret3m": -3.22,
      "ret6m": -12.36,
      "ret1y": -5.79,
      "ret2y": -0.85,
      "ret3y": 43.06
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4143,
      "ret1w": 1.41,
      "ret1m": -0.85,
      "ret3m": -3.19,
      "ret6m": -12.28,
      "ret1y": -5.6,
      "ret2y": -0.45,
      "ret3y": 44.2
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9993,
      "ret1w": 2.47,
      "ret1m": -1.11,
      "ret3m": -3.95,
      "ret6m": -18.24,
      "ret1y": -0.41,
      "ret2y": 5.65,
      "ret3y": 68.39
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1625,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": -0.54,
      "ret6m": -0.79,
      "ret1y": 0.31,
      "ret2y": 1.48,
      "ret3y": 7.84
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1825,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": -0.51,
      "ret6m": -0.71,
      "ret1y": 0.46,
      "ret2y": 1.78,
      "ret3y": 8.5
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0852,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": 0.42,
      "ret1y": 0.89,
      "ret2y": 1.85,
      "ret3y": 3.22
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4094,
      "ret1w": 0.01,
      "ret1m": -0.01,
      "ret3m": -0.05,
      "ret6m": 0.11,
      "ret1y": 0.01,
      "ret2y": 0.65,
      "ret3y": 12.29
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4618,
      "ret1w": 0.01,
      "ret1m": -0.01,
      "ret3m": -0.02,
      "ret6m": 0.21,
      "ret1y": 0.21,
      "ret2y": 1.05,
      "ret3y": 13.2
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1257,
      "ret1w": -0.29,
      "ret1m": 1.0,
      "ret3m": -1.89,
      "ret6m": -3.64,
      "ret1y": 13.66,
      "ret2y": 22.1,
      "ret3y": 68.09
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2251,
      "ret1w": -0.52,
      "ret1m": -0.3,
      "ret3m": -2.73,
      "ret6m": -4.59,
      "ret1y": 7.43,
      "ret2y": 7.93,
      "ret3y": 50.02
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 4.6361,
      "price": 4.6361,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 4.1077,
      "price": 4.1077,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 6.0187,
      "price": 6.0187,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 0.6933,
      "price": 0.6933,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 1.9447,
      "price": 1.9447,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.1,
      "nav": 2.6892,
      "price": 2.6892,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 5.334,
      "price": 5.334,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 1.917,
      "price": 1.917,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.3268,
      "price": 1.3268,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 3.414,
      "price": 3.414,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.083,
      "price": 1.083,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.312,
      "price": 2.312,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.24,
      "nav": 1.7403,
      "price": 1.7403,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.8869,
      "price": 1.8869,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.6579,
      "price": 1.6579,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 2.3945,
      "price": 2.3945,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 2.5143,
      "price": 2.5143,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 1.005,
      "price": 1.005,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 2.2689,
      "price": 2.2689,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.0,
      "nav": 1.3205,
      "price": 1.3205,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.24,
      "sharpe": 1.35,
      "calmar": 1.35
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 2.54,
      "sharpe": 0.93,
      "calmar": 0.93
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 1.84,
      "sharpe": 9.58,
      "calmar": 9.58
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.29,
      "sharpe": -1.55,
      "calmar": -1.55
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 5.61,
      "sharpe": -4.0,
      "calmar": -4.0
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.06,
      "sharpe": -3.73,
      "calmar": -3.73
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.75,
      "sharpe": -1.11,
      "calmar": -1.11
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.91,
      "sharpe": -0.08,
      "calmar": -0.08
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.54,
      "sharpe": 0.08,
      "calmar": 0.08
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.87,
      "sharpe": 4.78,
      "calmar": 4.78
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.98,
      "sharpe": -1.16,
      "calmar": -1.16
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.65,
      "sharpe": -2.79,
      "calmar": -2.79
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 7.08,
      "sharpe": -4.75,
      "calmar": -4.75
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.18,
      "sharpe": 0.05,
      "calmar": 0.05
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.22,
      "sharpe": -0.29,
      "calmar": -0.29
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 2.28,
      "sharpe": 4.76,
      "calmar": 4.76
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.21,
      "sharpe": -1.12,
      "calmar": -1.12
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.51,
      "sharpe": 0.52,
      "calmar": 0.52
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 4.53,
      "sharpe": -1.24,
      "calmar": -1.24
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.12,
      "sharpe": 0.64,
      "calmar": 0.64
    }
  ],
  "news": [
    {
      "title": "9月17日，上海财经大学滴水湖研究院理事会成立大会暨滴水湖金融沙龙·宏观经济展望研讨会在上海财经大学国家大学科技园举办。会上举行了滴水湖研究院首批、第二批、第三批理事单位及战略合作伙伴授牌仪式，41家金融机构、产业集团、平台机构成为理事单位。授牌后，第一届理事会第一次全体会议召开，审议通过《上海财经大学滴水湖研究院理事会章程》，确定上海财经大学担任理事长单位。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:19",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者汤立斌）长江商学院9月17日发布的2026年三季度《投资者情绪调查报告》（下称“报告”）显示，尽管本期受访者下调了对股市的预期，市场交易活跃度却在持续上升。同时，上市公司净利润增速明显好转，市场信心仍有待恢复。据了解，这是长江商学院第21次发布投资者情绪调查。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:13",
      "impact": "neutral"
    },
    {
      "title": "新华财经上海9月17日电（记者王淑娟）17日，2026“在上海·遇未来跨国企业上海行”推介会在沪举行。来自24个国家和地区的220余位企业家、行业组织和投资机构代表参与。活动期间达成多项重要合作成果，形成一批高质量合作项目和合作意向，涵盖跨国企业总部、科技创新平台、生产制造基地等多个类型。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:10",
      "impact": "neutral"
    },
    {
      "title": "9月15日在武汉举办的2026年中国碳市场大会现场。新华社发新华社武汉9月17日电题：碳市场活力效能提升中国向世界递出“绿色名片”接到中方会议邀请，巴西财政部碳市场事务副部长克里斯蒂娜·雷斯欣然赴约。这是她第3次到访中国，从巴西到湖北武汉，历经30多个小时航程，希望在这里交流减碳治理经验。“巴西正着手构建本国碳排放交易体系，中国碳市场对我们极具借鉴价值。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:54",
      "impact": "neutral"
    },
    {
      "title": "1、商务部表示，中美经贸团队正就降税等议题保持密切交流。2、上海：基金公司不得与第三方互联网平台以外的其他组织或者个人，包括“网络大V”，合作开展金融产品网络营销。3、英伟达CEO黄仁勋称，人工智能安全至关重要；英伟达明年芯片销量将是今年的两倍。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:49",
      "impact": "neutral"
    },
    {
      "title": "2024年10月，北京市委办公厅、市政府办公厅印发《关于北京市加快建设国际绿色经济标杆城市的实施意见》，与全球数字经济标杆城市建设形成“双标杆引领、双引擎驱动”的首都高质量发展新格局。2026年9月17日，2026北京绿色发展论坛在北京城市副中心启幕。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:48",
      "impact": "neutral"
    },
    {
      "title": "中新网贵阳9月17日电(记者周燕玲)记者17日从贵州省政府新闻办举行的发布会上获悉，2026年1月至8月，贵州新设经营主体35.98万户，其中新设企业9.47万户。截至8月底，经营主体总量中企业占比超过30%、较去年末提高4.24个百分点。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:46",
      "impact": "neutral"
    },
    {
      "title": "中新网西宁9月17日电(李隽)17日，记者从青海省商务厅获悉，7月起，该省在西北地区率先推出省级有奖发票试点。截至目前，省级有奖发票累计上传发票超40万张，兑现奖金超1085万元，带动消费超1.2亿元。据悉，青海省通过竞争性评审，确定海西蒙古族藏族自治州、海南藏族自治州、玉树藏族自治州三地开展省级有奖发票试点。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:46",
      "impact": "neutral"
    },
    {
      "title": "中新网北京9月17日电(记者杜燕)北京向南看，大兴正当时。北京市大兴区委副书记、区长刘洋在今天举办的一场发布会上表示，“十五五”时期，大兴区将坚持以新时代首都发展为统领，以开放改革示范，释放强劲新势能；以产业创新领跑，筑牢发展硬支撑；以城乡融合共生，舒展全域新画卷。把“协同发展示范区、繁荣开放国门新城”从蓝图变为实景，奋力打造首都南部新的增长极。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:46",
      "impact": "neutral"
    },
    {
      "title": "一片林子，除了砍树卖木材，还能卖什么？安徽的答案是：“卖空气”。近日，2026年安徽省级林长会议召开，安徽省委书记、省级总林长梁言顺主持会议并讲话。部署的诸多工作中，一句话格外引人注目——扩大林业碳票跨区域交易规模。实际上，这已是碳汇主题连续第5年进入安徽省级林长会议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:41",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 48,
    "label": "中性",
    "upDownRatio": "2,657/1,671",
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
