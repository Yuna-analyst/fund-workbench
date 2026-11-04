// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-04 17:55:57
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-04 17:55 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-04",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3686.17,
      "change": 78.07,
      "changePct": "+2.16%",
      "high": 3686.17,
      "low": 3590.8,
      "volume": 599394361.0,
      "amount": 953265160000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11335.69,
      "change": 458.7,
      "changePct": "+4.22%",
      "high": 11362.9,
      "low": 10826.83,
      "volume": 682108330.0,
      "amount": 1084429060000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2544.73,
      "change": 153.08,
      "changePct": "+6.40%",
      "high": 2559.09,
      "low": 2376.28,
      "volume": 223218325.0,
      "amount": 547099280000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1265.47,
      "change": 114.19,
      "changePct": "+9.92%",
      "high": 1271.27,
      "low": 1149.1,
      "volume": 13440425.0,
      "amount": 104520410000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4101.34,
      "change": 92.47,
      "changePct": "+2.31%",
      "high": 4105.86,
      "low": 3987.15,
      "volume": 246371975.0,
      "amount": 597260470000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6622.03,
      "change": 294.98,
      "changePct": "+4.66%",
      "high": 6635.58,
      "low": 6313.89,
      "volume": 191323159.0,
      "amount": 364880780000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.65万亿",
      "label": "成交额",
      "rawAmount": 3651455160000.0,
      "change": ""
    },
    "upDown": {
      "val": "5,300/0",
      "label": "涨/跌家数",
      "rawUp": 5300,
      "rawDown": 0,
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
    "totalInflow": 38.81,
    "totalOutflow": 0,
    "netFlow": 38.81,
    "netFlowTrend": [
      7.76,
      15.52,
      23.29,
      31.05,
      38.81
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
      "inflow": 13.35,
      "pct": 8.19
    },
    {
      "name": "半导体",
      "inflow": 4.65,
      "pct": 9.97
    },
    {
      "name": "5G",
      "inflow": 3.88,
      "pct": 8.35
    },
    {
      "name": "创新药",
      "inflow": 3.25,
      "pct": 5.32
    },
    {
      "name": "芯片",
      "inflow": 2.91,
      "pct": 10.0
    },
    {
      "name": "医药",
      "inflow": 2.41,
      "pct": 2.64
    },
    {
      "name": "有色",
      "inflow": 2.36,
      "pct": 5.91
    },
    {
      "name": "传媒",
      "inflow": 2.25,
      "pct": 3.01
    },
    {
      "name": "医疗",
      "inflow": 2.09,
      "pct": 3.58
    },
    {
      "name": "军工",
      "inflow": 1.66,
      "pct": 3.39
    },
    {
      "name": "人工智能",
      "inflow": 1.0,
      "pct": 5.56
    },
    {
      "name": "光伏",
      "inflow": 0.67,
      "pct": 4.46
    },
    {
      "name": "新能源",
      "inflow": 0.53,
      "pct": 3.63
    },
    {
      "name": "新能源车",
      "inflow": 0.41,
      "pct": 2.96
    },
    {
      "name": "游戏",
      "inflow": 0.4,
      "pct": 2.02
    },
    {
      "name": "云计算",
      "inflow": 0.33,
      "pct": 4.36
    },
    {
      "name": "电子",
      "inflow": 0.2,
      "pct": 9.01
    },
    {
      "name": "钢铁",
      "inflow": 0.14,
      "pct": 1.32
    },
    {
      "name": "计算机",
      "inflow": 0.07,
      "pct": 3.92
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.82
    }
  ],
  "sectors": [
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.836,
      "changePct": 10.0,
      "change": 0.076,
      "turnover": 9.7
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.772,
      "changePct": 9.97,
      "change": 0.07,
      "turnover": 15.51
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.629,
      "changePct": 9.01,
      "change": 0.052,
      "turnover": 0.68
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.688,
      "changePct": 8.35,
      "change": 0.053,
      "turnover": 12.94
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.436,
      "changePct": 8.19,
      "change": 0.033,
      "turnover": 44.49
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.469,
      "changePct": 5.91,
      "change": 0.082,
      "turnover": 7.87
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.797,
      "changePct": 5.56,
      "change": 0.042,
      "turnover": 3.32
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.831,
      "changePct": 5.32,
      "change": 0.042,
      "turnover": 10.84
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.726,
      "changePct": 4.46,
      "change": 0.031,
      "turnover": 2.23
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.411,
      "changePct": 4.36,
      "change": 0.059,
      "turnover": 1.11
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.007,
      "changePct": 3.92,
      "change": 0.038,
      "turnover": 0.23
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.053,
      "changePct": 3.63,
      "change": 0.072,
      "turnover": 1.75
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.347,
      "changePct": 3.58,
      "change": 0.012,
      "turnover": 6.98
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.037,
      "changePct": 3.39,
      "change": 0.034,
      "turnover": 5.53
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.822,
      "changePct": 3.01,
      "change": 0.024,
      "turnover": 7.49
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.357,
      "changePct": 2.96,
      "change": 0.039,
      "turnover": 1.37
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.389,
      "changePct": 2.64,
      "change": 0.01,
      "turnover": 8.02
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.06,
      "changePct": 2.02,
      "change": 0.021,
      "turnover": 1.34
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.075,
      "changePct": 1.32,
      "change": 0.014,
      "turnover": 0.47
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.983,
      "changePct": 0.82,
      "change": 0.008,
      "turnover": 0.06
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.355,
      "changePct": 0.82,
      "change": 0.011,
      "turnover": 0.41
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.489,
      "changePct": 0.62,
      "change": 0.003,
      "turnover": 14.24
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.131,
      "changePct": 0.44,
      "change": 0.005,
      "turnover": 1.7
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.723,
      "changePct": 0.42,
      "change": 0.003,
      "turnover": 0.52
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.21,
      "changePct": -0.41,
      "change": -0.005,
      "turnover": 7.9
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.874,
      "changePct": -0.68,
      "change": -0.006,
      "turnover": 10.49
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.519,
      "changePct": -1.33,
      "change": -0.007,
      "turnover": 0.37
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.445,
      "changePct": -1.98,
      "change": -0.009,
      "turnover": 9.97
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.34,
      "changePct": 10.29,
      "amount": 190.59,
      "netFlow": 47.65
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.175,
      "changePct": 2.03,
      "amount": 125.62,
      "netFlow": 31.41
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.661,
      "changePct": 4.4,
      "amount": 98.97,
      "netFlow": 24.74
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.063,
      "changePct": 2.32,
      "amount": 50.69,
      "netFlow": 12.67
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.923,
      "changePct": 1.35,
      "amount": 30.68,
      "netFlow": 7.67
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.364,
      "changePct": 2.15,
      "amount": 15.74,
      "netFlow": 3.93
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.772,
      "changePct": 9.97,
      "amount": 15.51,
      "netFlow": 3.88
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.489,
      "changePct": 0.62,
      "amount": 14.24,
      "netFlow": 3.56
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.389,
      "changePct": 2.64,
      "amount": 8.02,
      "netFlow": 2.0
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.053,
      "changePct": 3.63,
      "amount": 1.75,
      "netFlow": 0.44
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.175,
      "changePct": 2.03,
      "amount": 125.62,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.923,
      "changePct": 1.35,
      "amount": 30.68,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.661,
      "changePct": 4.4,
      "amount": 98.97,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.364,
      "changePct": 2.15,
      "amount": 15.74,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.063,
      "changePct": 2.32,
      "amount": 50.69,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "芯片",
      "turnover": 9.7,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 15.51,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "电子",
      "turnover": 0.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 12.94,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 44.49,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "有色",
      "turnover": 7.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 3.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 10.84,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 2.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.11,
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
      "name": "新能源",
      "turnover": 1.75,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 6.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 5.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 7.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 8.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.47,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 3.9317,
      "ret1w": 8.48,
      "ret1m": -4.24,
      "ret3m": -11.13,
      "ret6m": -2.02,
      "ret1y": -17.15,
      "ret2y": 2.0,
      "ret3y": 83.5
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.8876,
      "ret1w": 9.35,
      "ret1m": -9.34,
      "ret3m": -24.92,
      "ret6m": -29.03,
      "ret1y": -39.16,
      "ret2y": -25.86,
      "ret3y": 1.03
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.3183,
      "ret1w": 10.19,
      "ret1m": -18.3,
      "ret3m": -41.18,
      "ret6m": -30.09,
      "ret1y": -32.14,
      "ret2y": 2.18,
      "ret3y": 70.35
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7603,
      "ret1w": -1.3,
      "ret1m": 7.24,
      "ret3m": 9.07,
      "ret6m": 5.52,
      "ret1y": 0.64,
      "ret2y": -4.87,
      "ret3y": 3.09
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0372,
      "ret1w": 2.91,
      "ret1m": 4.07,
      "ret3m": 1.93,
      "ret6m": -11.61,
      "ret1y": -27.55,
      "ret2y": -32.03,
      "ret3y": -17.81
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6659,
      "ret1w": 2.4,
      "ret1m": 4.45,
      "ret3m": -1.6,
      "ret6m": -4.52,
      "ret1y": -21.18,
      "ret2y": -21.94,
      "ret3y": 8.04
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4869,
      "ret1w": 1.96,
      "ret1m": 5.7,
      "ret3m": 3.77,
      "ret6m": -0.51,
      "ret1y": -3.62,
      "ret2y": 4.74,
      "ret3y": 31.84
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.68,
      "ret1w": 4.74,
      "ret1m": -0.65,
      "ret3m": -11.44,
      "ret6m": -7.08,
      "ret1y": -18.53,
      "ret2y": -8.45,
      "ret3y": 29.73
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1503,
      "ret1w": 4.83,
      "ret1m": -0.27,
      "ret3m": -11.15,
      "ret6m": -12.52,
      "ret1y": -19.22,
      "ret2y": -8.42,
      "ret3y": 8.49
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.599,
      "ret1w": 6.08,
      "ret1m": -2.99,
      "ret3m": -17.88,
      "ret6m": -19.54,
      "ret1y": -14.67,
      "ret2y": 21.39,
      "ret3y": 110.45
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.167,
      "ret1w": -0.09,
      "ret1m": 7.26,
      "ret3m": 6.19,
      "ret6m": 4.2,
      "ret1y": -0.09,
      "ret2y": -7.16,
      "ret3y": -7.67
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.259,
      "ret1w": 2.08,
      "ret1m": 0.0,
      "ret3m": -7.95,
      "ret6m": -4.12,
      "ret1y": -15.49,
      "ret2y": -13.08,
      "ret3y": 6.36
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2027,
      "ret1w": 15.15,
      "ret1m": -2.04,
      "ret3m": -24.93,
      "ret6m": -27.67,
      "ret1y": -64.64,
      "ret2y": -58.98,
      "ret3y": -35.12
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9381,
      "ret1w": -0.85,
      "ret1m": 4.96,
      "ret3m": 2.83,
      "ret6m": 0.74,
      "ret1y": 6.61,
      "ret2y": 1.17,
      "ret3y": -3.24
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4218,
      "ret1w": 4.41,
      "ret1m": -1.87,
      "ret3m": -12.49,
      "ret6m": -8.55,
      "ret1y": -18.51,
      "ret2y": -8.38,
      "ret3y": 23.79
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.5015,
      "ret1w": 10.38,
      "ret1m": -10.86,
      "ret3m": -32.31,
      "ret6m": -31.99,
      "ret1y": -36.66,
      "ret2y": 11.2,
      "ret3y": 49.52
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5917,
      "ret1w": 1.25,
      "ret1m": 1.77,
      "ret3m": -1.83,
      "ret6m": 3.29,
      "ret1y": -5.3,
      "ret2y": -3.7,
      "ret3y": 2.95
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.94,
      "ret1w": 7.8,
      "ret1m": 3.18,
      "ret3m": -10.31,
      "ret6m": -4.76,
      "ret1y": -6.09,
      "ret2y": -12.31,
      "ret3y": -14.55
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4118,
      "ret1w": -0.87,
      "ret1m": 3.98,
      "ret3m": 5.29,
      "ret6m": 2.74,
      "ret1y": -1.45,
      "ret2y": 3.61,
      "ret3y": 8.64
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1935,
      "ret1w": 3.79,
      "ret1m": -1.0,
      "ret3m": -7.92,
      "ret6m": -4.03,
      "ret1y": -8.23,
      "ret2y": 2.37,
      "ret3y": 41.22
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.995,
      "ret1w": 6.6,
      "ret1m": -2.13,
      "ret3m": -15.69,
      "ret6m": -20.96,
      "ret1y": -26.79,
      "ret2y": -13.05,
      "ret3y": 6.54
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0592,
      "ret1w": 6.6,
      "ret1m": -2.13,
      "ret3m": -15.66,
      "ret6m": -20.88,
      "ret1y": -26.65,
      "ret2y": -12.71,
      "ret3y": 7.39
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0498,
      "ret1w": 0.45,
      "ret1m": -0.57,
      "ret3m": -1.64,
      "ret6m": -4.79,
      "ret1y": -3.97,
      "ret2y": -2.63,
      "ret3y": 2.87
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0249,
      "ret1w": 0.45,
      "ret1m": -0.56,
      "ret3m": -1.57,
      "ret6m": -4.64,
      "ret1y": -3.67,
      "ret2y": -2.05,
      "ret3y": 4.11
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7109,
      "ret1w": 1.09,
      "ret1m": 3.86,
      "ret3m": 1.51,
      "ret6m": -2.71,
      "ret1y": -12.0,
      "ret2y": -10.63,
      "ret3y": -0.22
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7296,
      "ret1w": 1.11,
      "ret1m": 3.87,
      "ret3m": 1.57,
      "ret6m": -2.58,
      "ret1y": -11.76,
      "ret2y": -10.17,
      "ret3y": 0.79
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.0591,
      "ret1w": 5.89,
      "ret1m": -8.78,
      "ret3m": -22.75,
      "ret6m": -23.54,
      "ret1y": -19.55,
      "ret2y": 8.06,
      "ret3y": 79.24
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3344,
      "ret1w": 5.22,
      "ret1m": 2.06,
      "ret3m": -5.26,
      "ret6m": -4.81,
      "ret1y": -8.18,
      "ret2y": 9.2,
      "ret3y": 48.38
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7149,
      "ret1w": 4.85,
      "ret1m": 3.53,
      "ret3m": 0.44,
      "ret6m": -1.11,
      "ret1y": -18.71,
      "ret2y": -10.89,
      "ret3y": -2.96
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9825,
      "ret1w": 7.37,
      "ret1m": 0.94,
      "ret3m": -4.14,
      "ret6m": -0.62,
      "ret1y": 1.18,
      "ret2y": 29.19,
      "ret3y": 95.2
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4613,
      "ret1w": -0.35,
      "ret1m": -0.45,
      "ret3m": -7.13,
      "ret6m": -11.44,
      "ret1y": -11.12,
      "ret2y": 0.63,
      "ret3y": 23.97
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4705,
      "ret1w": -0.34,
      "ret1m": -0.44,
      "ret3m": -7.09,
      "ret6m": -11.34,
      "ret1y": -10.92,
      "ret2y": 1.05,
      "ret3y": 24.97
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2588,
      "ret1w": 0.14,
      "ret1m": 0.17,
      "ret3m": -0.71,
      "ret6m": -0.9,
      "ret1y": -2.7,
      "ret2y": -2.27,
      "ret3y": 0.54
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0804,
      "ret1w": 0.21,
      "ret1m": 0.47,
      "ret3m": -2.27,
      "ret6m": -5.47,
      "ret1y": -6.04,
      "ret2y": -7.64,
      "ret3y": 1.82
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1672,
      "ret1w": 1.33,
      "ret1m": 1.08,
      "ret3m": -11.58,
      "ret6m": -17.57,
      "ret1y": -26.17,
      "ret2y": -22.81,
      "ret3y": -17.13
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7884,
      "ret1w": 1.83,
      "ret1m": -1.92,
      "ret3m": -4.48,
      "ret6m": -6.5,
      "ret1y": -14.52,
      "ret2y": 0.59,
      "ret3y": 28.71
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.205,
      "ret1w": 7.77,
      "ret1m": -11.27,
      "ret3m": -29.82,
      "ret6m": -33.44,
      "ret1y": -38.25,
      "ret2y": 2.32,
      "ret3y": 68.58
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5582,
      "ret1w": -0.34,
      "ret1m": 0.98,
      "ret3m": 2.6,
      "ret6m": 4.94,
      "ret1y": 4.21,
      "ret2y": 1.5,
      "ret3y": 2.39
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5613,
      "ret1w": 5.65,
      "ret1m": 4.0,
      "ret3m": -2.97,
      "ret6m": -7.42,
      "ret1y": -20.29,
      "ret2y": -3.69,
      "ret3y": -5.81
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.135,
      "ret1w": 9.45,
      "ret1m": -12.18,
      "ret3m": -32.86,
      "ret6m": -33.29,
      "ret1y": -18.97,
      "ret2y": 16.13,
      "ret3y": 112.49
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0512,
      "ret1w": 0.23,
      "ret1m": -0.5,
      "ret3m": -0.91,
      "ret6m": -1.38,
      "ret1y": -1.57,
      "ret2y": -0.47,
      "ret3y": 2.32
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0992,
      "ret1w": 0.23,
      "ret1m": -0.52,
      "ret3m": -0.92,
      "ret6m": -1.35,
      "ret1y": -1.48,
      "ret2y": -0.26,
      "ret3y": 2.96
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0675,
      "ret1w": 0.04,
      "ret1m": -0.06,
      "ret3m": 0.14,
      "ret6m": 0.37,
      "ret1y": 0.68,
      "ret2y": 1.59,
      "ret3y": 3.03
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1024,
      "ret1w": 0.03,
      "ret1m": -0.02,
      "ret3m": 0.2,
      "ret6m": 0.44,
      "ret1y": 0.78,
      "ret2y": 1.57,
      "ret3y": 3.9
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1122,
      "ret1w": 0.03,
      "ret1m": -0.02,
      "ret3m": 0.22,
      "ret6m": 0.49,
      "ret1y": 0.88,
      "ret2y": 1.77,
      "ret3y": 4.32
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0784,
      "ret1w": 0.03,
      "ret1m": -0.02,
      "ret3m": 0.16,
      "ret6m": 0.3,
      "ret1y": 0.63,
      "ret2y": 1.46,
      "ret3y": 3.08
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0934,
      "ret1w": 0.03,
      "ret1m": -0.02,
      "ret3m": 0.18,
      "ret6m": 0.37,
      "ret1y": 0.77,
      "ret2y": 1.77,
      "ret3y": 3.73
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0121,
      "ret1w": 1.29,
      "ret1m": -0.48,
      "ret3m": -3.77,
      "ret6m": -4.14,
      "ret1y": -6.29,
      "ret2y": -0.33,
      "ret3y": 5.53
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.164,
      "ret1w": 1.41,
      "ret1m": -0.6,
      "ret3m": -3.88,
      "ret6m": -2.85,
      "ret1y": -6.28,
      "ret2y": -2.78,
      "ret3y": 0.29
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0192,
      "ret1w": 1.29,
      "ret1m": -0.47,
      "ret3m": -3.73,
      "ret6m": -4.04,
      "ret1y": -6.09,
      "ret2y": 0.06,
      "ret3y": 6.39
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0454,
      "ret1w": 0.04,
      "ret1m": -0.03,
      "ret3m": 0.15,
      "ret6m": 0.46,
      "ret1y": 0.85,
      "ret2y": 1.74,
      "ret3y": 3.67
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1019,
      "ret1w": 0.83,
      "ret1m": -1.55,
      "ret3m": -4.86,
      "ret6m": -5.61,
      "ret1y": -9.05,
      "ret2y": -6.61,
      "ret3y": -0.09
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2052,
      "ret1w": 0.12,
      "ret1m": 0.5,
      "ret3m": 0.04,
      "ret6m": -1.12,
      "ret1y": -2.1,
      "ret2y": 1.16,
      "ret3y": 10.11
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1205,
      "ret1w": 0.51,
      "ret1m": 0.12,
      "ret3m": -0.99,
      "ret6m": -0.9,
      "ret1y": -1.85,
      "ret2y": 1.09,
      "ret3y": 6.93
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1916,
      "ret1w": 0.51,
      "ret1m": 0.12,
      "ret3m": -0.96,
      "ret6m": -0.8,
      "ret1y": -1.65,
      "ret2y": 1.5,
      "ret3y": 7.82
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.045,
      "ret1w": 0.64,
      "ret1m": -6.15,
      "ret3m": -18.13,
      "ret6m": -8.34,
      "ret1y": -1.82,
      "ret2y": 39.5,
      "ret3y": 108.04
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9132,
      "ret1w": 0.2,
      "ret1m": -1.95,
      "ret3m": -2.96,
      "ret6m": -1.18,
      "ret1y": 1.55,
      "ret2y": 4.12,
      "ret3y": 28.53
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6395,
      "ret1w": -0.38,
      "ret1m": -0.52,
      "ret3m": -9.59,
      "ret6m": -12.68,
      "ret1y": -22.58,
      "ret2y": -11.94,
      "ret3y": 16.61
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2617,
      "ret1w": 1.37,
      "ret1m": -4.84,
      "ret3m": -9.16,
      "ret6m": 2.04,
      "ret1y": 5.33,
      "ret2y": 6.27,
      "ret3y": 60.43
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9227,
      "ret1w": -0.22,
      "ret1m": 0.17,
      "ret3m": 1.16,
      "ret6m": -1.52,
      "ret1y": -2.87,
      "ret2y": -5.4,
      "ret3y": -1.69
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.322,
      "ret1w": 1.34,
      "ret1m": -4.67,
      "ret3m": -14.97,
      "ret6m": -10.16,
      "ret1y": -5.8,
      "ret2y": 17.23,
      "ret3y": 65.87
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.385,
      "ret1w": 0.23,
      "ret1m": -1.68,
      "ret3m": -3.35,
      "ret6m": -3.96,
      "ret1y": -2.53,
      "ret2y": -1.42,
      "ret3y": 14.7
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.752,
      "ret1w": -4.33,
      "ret1m": -5.53,
      "ret3m": -21.75,
      "ret6m": -14.84,
      "ret1y": -30.82,
      "ret2y": -35.78,
      "ret3y": -21.91
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.383,
      "ret1w": -3.09,
      "ret1m": -7.24,
      "ret3m": -18.39,
      "ret6m": -13.25,
      "ret1y": -9.03,
      "ret2y": 32.84,
      "ret3y": 105.8
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5151,
      "ret1w": -0.82,
      "ret1m": -2.7,
      "ret3m": -1.19,
      "ret6m": 3.73,
      "ret1y": -1.88,
      "ret2y": 23.8,
      "ret3y": 47.48
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5804,
      "ret1w": -1.1,
      "ret1m": -1.9,
      "ret3m": -8.87,
      "ret6m": -6.06,
      "ret1y": -0.93,
      "ret2y": 9.48,
      "ret3y": 40.57
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1812,
      "ret1w": -1.8,
      "ret1m": -1.67,
      "ret3m": -8.98,
      "ret6m": -7.64,
      "ret1y": -7.18,
      "ret2y": -1.9,
      "ret3y": 21.35
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.278,
      "ret1w": 0.16,
      "ret1m": 2.24,
      "ret3m": 5.27,
      "ret6m": -4.05,
      "ret1y": -3.26,
      "ret2y": 4.24,
      "ret3y": -6.22
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.869,
      "ret1w": -0.74,
      "ret1m": -3.16,
      "ret3m": -5.56,
      "ret6m": -4.06,
      "ret1y": -16.6,
      "ret2y": -7.79,
      "ret3y": 28.0
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.4294,
      "ret1w": 0.38,
      "ret1m": -4.77,
      "ret3m": -15.34,
      "ret6m": -11.07,
      "ret1y": -6.22,
      "ret2y": 11.37,
      "ret3y": 46.14
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0176,
      "ret1w": 0.07,
      "ret1m": 0.12,
      "ret3m": 0.43,
      "ret6m": 0.82,
      "ret1y": 1.4,
      "ret2y": 2.51,
      "ret3y": 3.99
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0168,
      "ret1w": 0.07,
      "ret1m": 0.13,
      "ret3m": 0.44,
      "ret6m": 0.86,
      "ret1y": 1.43,
      "ret2y": 2.58,
      "ret3y": 4.16
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.233,
      "ret1w": 3.01,
      "ret1m": -0.16,
      "ret3m": -8.12,
      "ret6m": -14.43,
      "ret1y": -18.61,
      "ret2y": -13.96,
      "ret3y": 0.9
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.318,
      "ret1w": 4.04,
      "ret1m": -1.95,
      "ret3m": -12.46,
      "ret6m": -17.86,
      "ret1y": -22.32,
      "ret2y": -12.82,
      "ret3y": 9.49
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4864,
      "ret1w": 3.08,
      "ret1m": 0.86,
      "ret3m": -5.05,
      "ret6m": -6.86,
      "ret1y": -18.59,
      "ret2y": 0.53,
      "ret3y": 36.12
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8824,
      "ret1w": 3.03,
      "ret1m": -0.9,
      "ret3m": -8.65,
      "ret6m": -10.9,
      "ret1y": -13.03,
      "ret2y": -4.86,
      "ret3y": 10.97
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9376,
      "ret1w": 3.03,
      "ret1m": -0.89,
      "ret3m": -8.62,
      "ret6m": -10.82,
      "ret1y": -12.85,
      "ret2y": -4.48,
      "ret3y": 11.86
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7226,
      "ret1w": 4.41,
      "ret1m": -0.3,
      "ret3m": -10.45,
      "ret6m": -12.38,
      "ret1y": -19.33,
      "ret2y": -7.18,
      "ret3y": 12.56
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6154,
      "ret1w": 2.19,
      "ret1m": 0.41,
      "ret3m": -5.44,
      "ret6m": -9.98,
      "ret1y": -13.01,
      "ret2y": -9.27,
      "ret3y": 6.74
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4726,
      "ret1w": 3.16,
      "ret1m": 1.14,
      "ret3m": -4.51,
      "ret6m": -6.64,
      "ret1y": -12.3,
      "ret2y": -0.44,
      "ret3y": 22.91
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5487,
      "ret1w": 5.3,
      "ret1m": -2.76,
      "ret3m": -15.15,
      "ret6m": -22.29,
      "ret1y": -23.34,
      "ret2y": -14.06,
      "ret3y": 12.81
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0418,
      "ret1w": 0.94,
      "ret1m": 2.13,
      "ret3m": -0.84,
      "ret6m": -5.23,
      "ret1y": -8.12,
      "ret2y": -6.99,
      "ret3y": 7.39
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4769,
      "ret1w": -1.05,
      "ret1m": -0.24,
      "ret3m": 0.99,
      "ret6m": -3.07,
      "ret1y": -0.18,
      "ret2y": 6.74,
      "ret3y": 29.22
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.2774,
      "ret1w": 0.59,
      "ret1m": -4.58,
      "ret3m": -7.1,
      "ret6m": -2.88,
      "ret1y": 0.48,
      "ret2y": 2.33,
      "ret3y": 28.22
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.282,
      "ret1w": 3.36,
      "ret1m": -1.56,
      "ret3m": -11.44,
      "ret6m": -18.93,
      "ret1y": -22.62,
      "ret2y": -13.47,
      "ret3y": 7.58
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9547,
      "ret1w": 0.59,
      "ret1m": -4.08,
      "ret3m": -15.53,
      "ret6m": -14.96,
      "ret1y": -22.17,
      "ret2y": -14.61,
      "ret3y": 9.32
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9581,
      "ret1w": 0.6,
      "ret1m": -4.07,
      "ret3m": -15.39,
      "ret6m": -14.78,
      "ret1y": -22.01,
      "ret2y": -14.52,
      "ret3y": 9.09
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1895,
      "ret1w": -1.09,
      "ret1m": -2.1,
      "ret3m": -12.06,
      "ret6m": -10.46,
      "ret1y": -21.96,
      "ret2y": -14.76,
      "ret3y": 5.93
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2175,
      "ret1w": -1.09,
      "ret1m": -2.09,
      "ret3m": -12.04,
      "ret6m": -10.38,
      "ret1y": -21.8,
      "ret2y": -14.42,
      "ret3y": 6.78
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.6605,
      "ret1w": -1.55,
      "ret1m": -2.95,
      "ret3m": -13.57,
      "ret6m": -13.68,
      "ret1y": -22.36,
      "ret2y": -12.91,
      "ret3y": 17.57
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1586,
      "ret1w": 0.29,
      "ret1m": -0.12,
      "ret3m": -0.22,
      "ret6m": -0.95,
      "ret1y": -0.84,
      "ret2y": 0.93,
      "ret3y": 5.55
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.179,
      "ret1w": 0.29,
      "ret1m": -0.11,
      "ret3m": -0.19,
      "ret6m": -0.87,
      "ret1y": -0.68,
      "ret2y": 1.24,
      "ret3y": 6.19
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0881,
      "ret1w": 0.05,
      "ret1m": -0.05,
      "ret3m": 0.17,
      "ret6m": 0.44,
      "ret1y": 0.84,
      "ret2y": 1.9,
      "ret3y": 3.63
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4119,
      "ret1w": 0.06,
      "ret1m": -0.05,
      "ret3m": 0.13,
      "ret6m": 0.01,
      "ret1y": 0.15,
      "ret2y": 0.58,
      "ret3y": 5.41
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4652,
      "ret1w": 0.06,
      "ret1m": -0.04,
      "ret3m": 0.17,
      "ret6m": 0.12,
      "ret1y": 0.36,
      "ret2y": 0.99,
      "ret3y": 6.25
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8852,
      "ret1w": 3.05,
      "ret1m": -2.27,
      "ret3m": -8.61,
      "ret6m": -10.84,
      "ret1y": -2.62,
      "ret2y": 7.97,
      "ret3y": 34.24
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0283,
      "ret1w": 4.99,
      "ret1m": -3.55,
      "ret3m": -12.04,
      "ret6m": -18.02,
      "ret1y": -16.15,
      "ret2y": -10.25,
      "ret3y": 12.28
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 3.9317,
      "price": 3.9317,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.47,
      "nav": 2.8876,
      "price": 2.8876,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.92,
      "nav": 3.3183,
      "price": 3.3183,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.36,
      "nav": 0.7603,
      "price": 0.7603,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.2,
      "nav": 2.0372,
      "price": 2.0372,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.22,
      "nav": 2.6659,
      "price": 2.6659,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.29,
      "nav": 5.4869,
      "price": 5.4869,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.68,
      "price": 1.68,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.1503,
      "price": 1.1503,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 2.599,
      "price": 2.599,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.36,
      "nav": 1.167,
      "price": 1.167,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 2.259,
      "price": 2.259,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.2027,
      "price": 1.2027,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.25,
      "nav": 1.9381,
      "price": 1.9381,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.4218,
      "price": 1.4218,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.54,
      "nav": 1.5015,
      "price": 1.5015,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.5917,
      "price": 2.5917,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 0.94,
      "price": 0.94,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.2,
      "nav": 2.4118,
      "price": 2.4118,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.1935,
      "price": 1.1935,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.36,
      "sharpe": -1.86,
      "calmar": -1.86
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 14.01,
      "sharpe": -2.73,
      "calmar": -2.73
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 27.45,
      "sharpe": -1.38,
      "calmar": -1.38
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 10.86,
      "sharpe": 0.05,
      "calmar": 0.05
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 6.11,
      "sharpe": -3.04,
      "calmar": -3.04
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 6.68,
      "sharpe": -2.24,
      "calmar": -2.24
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 8.55,
      "sharpe": -0.34,
      "calmar": -0.34
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.98,
      "sharpe": -3.28,
      "calmar": -3.28
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -3.65,
      "calmar": -3.65
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 4.49,
      "sharpe": -1.84,
      "calmar": -1.84
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 10.89,
      "sharpe": -0.01,
      "calmar": -0.01
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.0,
      "sharpe": -2.58,
      "calmar": -2.58
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 3.06,
      "sharpe": -9.18,
      "calmar": -9.18
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 7.44,
      "sharpe": 0.66,
      "calmar": 0.66
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 2.81,
      "sharpe": -2.69,
      "calmar": -2.69
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 16.29,
      "sharpe": -2.31,
      "calmar": -2.31
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.66,
      "sharpe": -0.78,
      "calmar": -0.78
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 4.77,
      "sharpe": -0.74,
      "calmar": -0.74
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 5.97,
      "sharpe": -0.16,
      "calmar": -0.16
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.5,
      "sharpe": -1.37,
      "calmar": -1.37
    }
  ],
  "news": [
    {
      "title": "《上市公司董事会秘书监管规则》自2026年5月24日起正式施行。新规进一步细化董事会秘书信息披露、公司治理、内外沟通等工作职责，严格规范任职与兼职要求，从多方面保障董秘依法独立履职，推动董秘回归资本市场“把关人”本源，助力上市公司治理提质升级。新规实施后，江苏证监局对辖区上市公司董秘缺位、兼职、任职不合规情况开展全面摸排，建立专项整改台账。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:54",
      "impact": "neutral"
    },
    {
      "title": "11月4日，第140届中国进出口商品交易会（广交会）在广州闭幕。上海证券报记者从广交会新闻中心获悉，本届广交会适逢创办70周年，共有来自219个国家和地区的35.2万名境外采购商到会，比上届同期增长12.2%，规模再创历史新高。此外，本届广交会展品结构持续“向新向绿”，新产品展出占比达23.2%，绿色产品占比达26%，也双双创历史新高。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:54",
      "impact": "neutral"
    },
    {
      "title": "国家发展改革委等五部门近日联合印发《实施全面节约战略行动方案》，提出了到2030年全面节约工作的主要目标，聚焦“能水粮地矿材”各类资源要素节约面临的利用方式粗放、利用效率不高等突出问题，打出一套“组合拳”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:54",
      "impact": "neutral"
    },
    {
      "title": "本报记者杜雨萌“‘十五五’时期，国家发展改革委将坚持适度超前、不过度超前，采取更加有力有效的政策措施，稳交通投资、稳经济大盘。”11月4日，在国家发展改革委召开的第二场“奋进‘十五五’”系列新闻发布会上，国家发展改革委基础设施发展司司长夏鑫表示，“十五五”时期，我国交通投资仍将保持较大规模。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:25",
      "impact": "neutral"
    },
    {
      "title": "■苏诗钰金秋时节，浦江潮涌。11月5日，第九届中国国际进口博览会（以下简称“进博会”）在国家会展中心（上海）开幕，162个国家、地区和国际组织，4142家境外企业共赴这场进博之约。今年是“十五五”开局之年，中国扩大高水平对外开放的步履坚定而从容。“十五五”规划纲要明确提出“持续办好进博会、广交会、服贸会等重大展会”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:23",
      "impact": "neutral"
    },
    {
      "title": "本报记者郭冀川11月5日至10日，第九届中国国际进口博览会（以下简称“进博会”）将在上海举办。本届展会以更扎实的规模增量、更清晰的开放逻辑、更普惠的共享设计，向世界传递中国坚定不移推进高水平对外开放的长期信心。“进博会推动中国对外开放从积极融入世界经济，到主动开放国内市场、促进世界共同发展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:23",
      "impact": "neutral"
    },
    {
      "title": "11月4日，第140届中国进出口商品交易会（以下称“广交会”）圆满收官。根据广交会发布的数据，共有来自219个国家和地区的35.2万名境外采购商到会，比上届同期增长12.2%。据悉，本届广交会于10月15日至11月4日分三期举办，主题分别为“先进制造”“品质家居”“美好生活”，一大批智能创新、绿色低碳产品集中亮相，展现中国制造向新向绿向智的升级趋势。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:23",
      "impact": "neutral"
    },
    {
      "title": "时报数说 前三季度我国服务进出口总额同比增长8.5%",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:22",
      "impact": "neutral"
    },
    {
      "title": "11月4日，国家发展改革委、工业和信息化部、自然资源部、水利部、国家机关事务管理局发布消息，已于近日联合印发《实施全面节约战略行动方案》（下称《方案》）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:22",
      "impact": "neutral"
    },
    {
      "title": "日前，国务院关于2025年度国有资产管理情况的综合报告提请十四届全国人大常委会第二十五次会议审议，亮出我国国有资产管理最新“成绩单”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:22",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 64,
    "label": "乐观",
    "upDownRatio": "5,300/0",
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
