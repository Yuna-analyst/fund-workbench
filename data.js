// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-11 17:50:39
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-11 17:50 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-11",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3680.64,
      "change": 16.92,
      "changePct": "+0.46%",
      "high": 3689.65,
      "low": 3650.31,
      "volume": 433120083.0,
      "amount": 736154790000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11389.74,
      "change": 148.2,
      "changePct": "+1.32%",
      "high": 11415.97,
      "low": 11170.35,
      "volume": 569401113.0,
      "amount": 940123790000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2572.07,
      "change": 77.67,
      "changePct": "+3.11%",
      "high": 2580.34,
      "low": 2490.1,
      "volume": 184074734.0,
      "amount": 478416770000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1300.38,
      "change": 35.36,
      "changePct": "+2.80%",
      "high": 1303.06,
      "low": 1254.25,
      "volume": 7969763.0,
      "amount": 76439310000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4075.71,
      "change": 16.6,
      "changePct": "+0.41%",
      "high": 4085.0,
      "low": 4035.4,
      "volume": 161199262.0,
      "amount": 442127610000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6713.18,
      "change": 67.29,
      "changePct": "+1.01%",
      "high": 6731.54,
      "low": 6608.14,
      "volume": 120159168.0,
      "amount": 275093270000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.95万亿",
      "label": "成交额",
      "rawAmount": 2948355540000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,214/892",
      "label": "涨/跌家数",
      "rawUp": 4214,
      "rawDown": 892,
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
    "totalInflow": 27.65,
    "totalOutflow": 0,
    "netFlow": 27.65,
    "netFlowTrend": [
      5.53,
      11.06,
      16.59,
      22.12,
      27.65
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
      "inflow": 16.06,
      "pct": 8.0
    },
    {
      "name": "半导体",
      "inflow": 3.48,
      "pct": 3.06
    },
    {
      "name": "5G",
      "inflow": 3.43,
      "pct": 6.89
    },
    {
      "name": "芯片",
      "inflow": 1.67,
      "pct": 3.57
    },
    {
      "name": "煤炭",
      "inflow": 1.21,
      "pct": 0.34
    },
    {
      "name": "人工智能",
      "inflow": 0.65,
      "pct": 3.41
    },
    {
      "name": "游戏",
      "inflow": 0.36,
      "pct": 1.22
    },
    {
      "name": "云计算",
      "inflow": 0.31,
      "pct": 0.98
    },
    {
      "name": "地产",
      "inflow": 0.31,
      "pct": 0.17
    },
    {
      "name": "电子",
      "inflow": 0.17,
      "pct": 3.22
    },
    {
      "name": "计算机",
      "inflow": 0.05,
      "pct": 0.4
    },
    {
      "name": "传媒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.72
    },
    {
      "name": "家电",
      "inflow": -0.1,
      "pct": -0.14
    },
    {
      "name": "钢铁",
      "inflow": -0.11,
      "pct": -0.19
    },
    {
      "name": "新能源车",
      "inflow": -0.34,
      "pct": -0.44
    },
    {
      "name": "新能源",
      "inflow": -0.51,
      "pct": -0.44
    },
    {
      "name": "军工",
      "inflow": -0.66,
      "pct": -0.1
    },
    {
      "name": "有色",
      "inflow": -1.48,
      "pct": -0.21
    },
    {
      "name": "券商",
      "inflow": -1.71,
      "pct": -0.63
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.459,
      "changePct": 8.0,
      "change": 0.034,
      "turnover": 53.54
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.714,
      "changePct": 6.89,
      "change": 0.046,
      "turnover": 11.45
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.871,
      "changePct": 3.57,
      "change": 0.03,
      "turnover": 5.56
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.819,
      "changePct": 3.41,
      "change": 0.027,
      "turnover": 2.17
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.641,
      "changePct": 3.22,
      "change": 0.02,
      "turnover": 0.57
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.809,
      "changePct": 3.06,
      "change": 0.024,
      "turnover": 11.59
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.08,
      "changePct": 1.22,
      "change": 0.013,
      "turnover": 1.19
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.445,
      "changePct": 0.98,
      "change": 0.014,
      "turnover": 1.04
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.014,
      "changePct": 0.4,
      "change": 0.004,
      "turnover": 0.16
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.188,
      "changePct": 0.34,
      "change": 0.004,
      "turnover": 4.03
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.145,
      "changePct": 0.17,
      "change": 0.002,
      "turnover": 1.02
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.855,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 4.98
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.029,
      "changePct": -0.1,
      "change": -0.001,
      "turnover": 2.19
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.378,
      "changePct": -0.14,
      "change": -0.002,
      "turnover": 0.33
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.063,
      "changePct": -0.19,
      "change": -0.002,
      "turnover": 0.36
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.455,
      "changePct": -0.21,
      "change": -0.003,
      "turnover": 4.92
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.049,
      "changePct": -0.44,
      "change": -0.009,
      "turnover": 1.69
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.348,
      "changePct": -0.44,
      "change": -0.006,
      "turnover": 1.13
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.477,
      "changePct": -0.63,
      "change": -0.003,
      "turnover": 5.69
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.965,
      "changePct": -0.72,
      "change": -0.007,
      "turnover": 0.04
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.882,
      "changePct": -0.79,
      "change": -0.007,
      "turnover": 18.52
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.823,
      "changePct": -0.96,
      "change": -0.008,
      "turnover": 4.87
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.721,
      "changePct": -0.96,
      "change": -0.007,
      "turnover": 0.42
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.384,
      "changePct": -1.03,
      "change": -0.004,
      "turnover": 4.03
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.344,
      "changePct": -1.15,
      "change": -0.004,
      "turnover": 3.41
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.73,
      "changePct": -1.35,
      "change": -0.01,
      "turnover": 4.36
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.509,
      "changePct": -1.93,
      "change": -0.01,
      "turnover": 0.2
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.433,
      "changePct": -2.91,
      "change": -0.013,
      "turnover": 5.32
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.375,
      "changePct": 2.84,
      "amount": 92.76,
      "netFlow": 23.19
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.15,
      "changePct": 0.36,
      "amount": 43.72,
      "netFlow": 10.93
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.748,
      "changePct": 1.17,
      "amount": 36.29,
      "netFlow": 9.07
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.034,
      "changePct": 0.4,
      "amount": 14.52,
      "netFlow": 3.63
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.333,
      "changePct": 0.39,
      "amount": 14.04,
      "netFlow": 3.51
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.809,
      "changePct": 3.06,
      "amount": 11.59,
      "netFlow": 2.9
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.049,
      "changePct": -0.44,
      "amount": 1.69,
      "netFlow": -0.42
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.384,
      "changePct": -1.03,
      "amount": 4.03,
      "netFlow": -1.01
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.477,
      "changePct": -0.63,
      "amount": 5.69,
      "netFlow": -1.42
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.882,
      "changePct": -0.31,
      "amount": 14.27,
      "netFlow": -3.57
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.15,
      "changePct": 0.36,
      "amount": 43.72,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.882,
      "changePct": -0.31,
      "amount": 14.27,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.748,
      "changePct": 1.17,
      "amount": 36.29,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.333,
      "changePct": 0.39,
      "amount": 14.04,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.034,
      "changePct": 0.4,
      "amount": 14.52,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 53.54,
      "percentile": 95,
      "level": "极高",
      "status": "极度过热"
    },
    {
      "name": "5G",
      "turnover": 11.45,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "芯片",
      "turnover": 5.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 2.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.59,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "游戏",
      "turnover": 1.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.04,
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
      "name": "煤炭",
      "turnover": 4.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 4.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.69,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 5.69,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.1941,
      "ret1w": 0.99,
      "ret1m": 6.67,
      "ret3m": -0.4,
      "ret6m": -5.12,
      "ret1y": -17.04,
      "ret2y": 4.79,
      "ret3y": 79.53
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.9077,
      "ret1w": 4.98,
      "ret1m": 0.7,
      "ret3m": -20.67,
      "ret6m": -30.31,
      "ret1y": -41.01,
      "ret2y": -24.37,
      "ret3y": -0.45
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.6009,
      "ret1w": 11.19,
      "ret1m": 8.52,
      "ret3m": -28.61,
      "ret6m": -27.26,
      "ret1y": -35.05,
      "ret2y": 11.18,
      "ret3y": 67.87
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7554,
      "ret1w": -1.82,
      "ret1m": -0.64,
      "ret3m": 8.38,
      "ret6m": 4.77,
      "ret1y": 1.86,
      "ret2y": -8.47,
      "ret3y": 0.95
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0244,
      "ret1w": -1.68,
      "ret1m": -0.63,
      "ret3m": 1.13,
      "ret6m": -11.25,
      "ret1y": -29.51,
      "ret2y": -36.93,
      "ret3y": -25.88
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7006,
      "ret1w": -0.38,
      "ret1m": 1.3,
      "ret3m": 1.29,
      "ret6m": -3.62,
      "ret1y": -22.47,
      "ret2y": -24.41,
      "ret3y": 8.25
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3769,
      "ret1w": -0.41,
      "ret1m": -2.0,
      "ret3m": 1.69,
      "ret6m": -3.56,
      "ret1y": -6.35,
      "ret2y": -0.37,
      "ret3y": 25.21
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.712,
      "ret1w": 1.42,
      "ret1m": 1.9,
      "ret3m": -8.25,
      "ret6m": -9.94,
      "ret1y": -20.11,
      "ret2y": -7.56,
      "ret3y": 23.52
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1528,
      "ret1w": 1.89,
      "ret1m": 0.22,
      "ret3m": -9.7,
      "ret6m": -15.38,
      "ret1y": -21.1,
      "ret2y": -8.31,
      "ret3y": 5.43
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.648,
      "ret1w": 2.68,
      "ret1m": 1.89,
      "ret3m": -12.26,
      "ret6m": -24.71,
      "ret1y": -19.64,
      "ret2y": 22.76,
      "ret3y": 88.47
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.145,
      "ret1w": -1.72,
      "ret1m": -1.89,
      "ret3m": 2.69,
      "ret6m": -0.52,
      "ret1y": -0.09,
      "ret2y": -12.19,
      "ret3y": -13.32
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.298,
      "ret1w": 0.39,
      "ret1m": 1.73,
      "ret3m": -5.94,
      "ret6m": -7.11,
      "ret1y": -14.0,
      "ret2y": -12.79,
      "ret3y": 1.82
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2662,
      "ret1w": 3.83,
      "ret1m": 5.28,
      "ret3m": -17.57,
      "ret6m": -30.28,
      "ret1y": -61.22,
      "ret2y": -56.52,
      "ret3y": -39.79
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9086,
      "ret1w": -0.99,
      "ret1m": -1.52,
      "ret3m": 1.31,
      "ret6m": -2.23,
      "ret1y": 3.67,
      "ret2y": -0.98,
      "ret3y": -8.28
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4592,
      "ret1w": 2.24,
      "ret1m": 2.63,
      "ret3m": -8.16,
      "ret6m": -11.77,
      "ret1y": -19.7,
      "ret2y": -7.44,
      "ret3y": 20.2
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.5467,
      "ret1w": 6.21,
      "ret1m": 3.01,
      "ret3m": -24.37,
      "ret6m": -34.13,
      "ret1y": -41.67,
      "ret2y": 15.07,
      "ret3y": 34.5
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.6006,
      "ret1w": -0.15,
      "ret1m": 0.34,
      "ret3m": -1.2,
      "ret6m": 2.83,
      "ret1y": -6.11,
      "ret2y": -5.93,
      "ret3y": -0.45
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.944,
      "ret1w": -0.53,
      "ret1m": 0.43,
      "ret3m": -5.98,
      "ret6m": -14.8,
      "ret1y": -6.35,
      "ret2y": -10.86,
      "ret3y": -18.48
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.377,
      "ret1w": -1.09,
      "ret1m": -1.44,
      "ret3m": 2.77,
      "ret6m": 1.01,
      "ret1y": -2.57,
      "ret2y": -0.27,
      "ret3y": 5.87
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2288,
      "ret1w": 1.36,
      "ret1m": 2.96,
      "ret3m": -4.08,
      "ret6m": -6.36,
      "ret1y": -9.11,
      "ret2y": 3.89,
      "ret3y": 36.2
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9964,
      "ret1w": 2.18,
      "ret1m": 0.14,
      "ret3m": -12.97,
      "ret6m": -23.9,
      "ret1y": -28.81,
      "ret2y": -14.8,
      "ret3y": 1.92
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0608,
      "ret1w": 2.2,
      "ret1m": 0.15,
      "ret3m": -12.93,
      "ret6m": -23.82,
      "ret1y": -28.67,
      "ret2y": -14.47,
      "ret3y": 2.74
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0442,
      "ret1w": -0.32,
      "ret1m": -0.53,
      "ret3m": -2.12,
      "ret6m": -4.73,
      "ret1y": -5.06,
      "ret2y": -3.84,
      "ret3y": 1.97
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0196,
      "ret1w": -0.31,
      "ret1m": -0.52,
      "ret3m": -2.07,
      "ret6m": -4.59,
      "ret1y": -4.77,
      "ret2y": -3.25,
      "ret3y": 3.22
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7111,
      "ret1w": -0.48,
      "ret1m": 0.03,
      "ret3m": 1.24,
      "ret6m": -3.66,
      "ret1y": -12.65,
      "ret2y": -13.5,
      "ret3y": -1.15
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7298,
      "ret1w": -0.48,
      "ret1m": 0.03,
      "ret3m": 1.28,
      "ret6m": -3.54,
      "ret1y": -12.43,
      "ret2y": -13.07,
      "ret3y": -0.15
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.0428,
      "ret1w": 3.74,
      "ret1m": -0.79,
      "ret3m": -19.84,
      "ret6m": -26.04,
      "ret1y": -25.82,
      "ret2y": 8.49,
      "ret3y": 72.17
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3956,
      "ret1w": -0.69,
      "ret1m": 2.62,
      "ret3m": -0.92,
      "ret6m": -6.72,
      "ret1y": -10.53,
      "ret2y": 10.64,
      "ret3y": 46.74
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7412,
      "ret1w": 0.28,
      "ret1m": 3.68,
      "ret3m": 4.31,
      "ret6m": -1.4,
      "ret1y": -18.43,
      "ret2y": -11.54,
      "ret3y": -1.72
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1316,
      "ret1w": 0.39,
      "ret1m": 3.74,
      "ret3m": 2.17,
      "ret6m": -3.93,
      "ret1y": -2.33,
      "ret2y": 33.82,
      "ret3y": 90.21
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4534,
      "ret1w": 0.02,
      "ret1m": -1.71,
      "ret3m": -7.01,
      "ret6m": -13.61,
      "ret1y": -16.22,
      "ret2y": -1.2,
      "ret3y": 18.5
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4624,
      "ret1w": 0.02,
      "ret1m": -1.72,
      "ret3m": -6.98,
      "ret6m": -13.52,
      "ret1y": -16.06,
      "ret2y": -0.82,
      "ret3y": 19.45
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2546,
      "ret1w": -0.17,
      "ret1m": -0.33,
      "ret3m": -1.52,
      "ret6m": -2.07,
      "ret1y": -2.75,
      "ret2y": -2.64,
      "ret3y": 0.2
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0613,
      "ret1w": -0.53,
      "ret1m": -1.77,
      "ret3m": -4.29,
      "ret6m": -7.78,
      "ret1y": -7.48,
      "ret2y": -10.66,
      "ret3y": -1.08
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1643,
      "ret1w": -0.14,
      "ret1m": -0.25,
      "ret3m": -9.85,
      "ret6m": -20.12,
      "ret1y": -32.13,
      "ret2y": -22.73,
      "ret3y": -19.06
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7754,
      "ret1w": 2.69,
      "ret1m": -0.47,
      "ret3m": -4.61,
      "ret6m": -8.21,
      "ret1y": -14.17,
      "ret2y": -2.28,
      "ret3y": 24.98
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.306,
      "ret1w": 7.31,
      "ret1m": 4.58,
      "ret3m": -20.97,
      "ret6m": -31.04,
      "ret1y": -41.46,
      "ret2y": 8.16,
      "ret3y": 63.43
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5605,
      "ret1w": -0.57,
      "ret1m": 0.15,
      "ret3m": 2.08,
      "ret6m": 6.72,
      "ret1y": 4.87,
      "ret2y": 0.64,
      "ret3y": 0.44
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.591,
      "ret1w": -0.02,
      "ret1m": 5.29,
      "ret3m": 4.53,
      "ret6m": -8.06,
      "ret1y": -25.25,
      "ret2y": 1.86,
      "ret3y": -11.79
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.573,
      "ret1w": 8.41,
      "ret1m": 4.79,
      "ret3m": -24.2,
      "ret6m": -34.88,
      "ret1y": -19.29,
      "ret2y": 27.59,
      "ret3y": 114.88
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0527,
      "ret1w": 0.12,
      "ret1m": 0.14,
      "ret3m": -0.7,
      "ret6m": -1.31,
      "ret1y": -1.76,
      "ret2y": -0.75,
      "ret3y": 2.22
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1007,
      "ret1w": 0.12,
      "ret1m": 0.14,
      "ret3m": -0.71,
      "ret6m": -1.29,
      "ret1y": -1.68,
      "ret2y": -0.55,
      "ret3y": 2.85
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0675,
      "ret1w": -0.03,
      "ret1m": 0.0,
      "ret3m": 0.11,
      "ret6m": 0.35,
      "ret1y": 0.65,
      "ret2y": 1.58,
      "ret3y": 2.9
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1022,
      "ret1w": -0.04,
      "ret1m": -0.02,
      "ret3m": 0.15,
      "ret6m": 0.39,
      "ret1y": 0.72,
      "ret2y": 1.53,
      "ret3y": 3.82
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1121,
      "ret1w": -0.03,
      "ret1m": -0.01,
      "ret3m": 0.17,
      "ret6m": 0.45,
      "ret1y": 0.83,
      "ret2y": 1.74,
      "ret3y": 4.27
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0783,
      "ret1w": -0.02,
      "ret1m": -0.01,
      "ret3m": 0.11,
      "ret6m": 0.25,
      "ret1y": 0.62,
      "ret2y": 1.47,
      "ret3y": 2.94
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0934,
      "ret1w": -0.02,
      "ret1m": 0.0,
      "ret3m": 0.14,
      "ret6m": 0.33,
      "ret1y": 0.77,
      "ret2y": 1.78,
      "ret3y": 3.59
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0135,
      "ret1w": 0.35,
      "ret1m": 0.14,
      "ret3m": -2.96,
      "ret6m": -5.34,
      "ret1y": -7.81,
      "ret2y": -0.42,
      "ret3y": 5.14
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1716,
      "ret1w": 0.53,
      "ret1m": 0.65,
      "ret3m": -2.55,
      "ret6m": -4.05,
      "ret1y": -7.49,
      "ret2y": -2.62,
      "ret3y": 0.83
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0206,
      "ret1w": 0.33,
      "ret1m": 0.14,
      "ret3m": -2.93,
      "ret6m": -5.25,
      "ret1y": -7.64,
      "ret2y": -0.03,
      "ret3y": 5.98
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0454,
      "ret1w": -0.03,
      "ret1m": 0.0,
      "ret3m": 0.11,
      "ret6m": 0.42,
      "ret1y": 0.82,
      "ret2y": 1.71,
      "ret3y": 3.62
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.104,
      "ret1w": 0.47,
      "ret1m": 0.19,
      "ret3m": -3.67,
      "ret6m": -5.6,
      "ret1y": -9.02,
      "ret2y": -6.87,
      "ret3y": -0.81
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2031,
      "ret1w": -0.12,
      "ret1m": -0.17,
      "ret3m": -0.13,
      "ret6m": -1.47,
      "ret1y": -2.61,
      "ret2y": 0.51,
      "ret3y": 8.81
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.123,
      "ret1w": 0.12,
      "ret1m": 0.22,
      "ret3m": -0.55,
      "ret6m": -1.64,
      "ret1y": -2.73,
      "ret2y": 1.19,
      "ret3y": 6.36
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1944,
      "ret1w": 0.13,
      "ret1m": 0.23,
      "ret3m": -0.51,
      "ret6m": -1.53,
      "ret1y": -2.53,
      "ret2y": 1.6,
      "ret3y": 7.26
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.839,
      "ret1w": 0.49,
      "ret1m": -10.07,
      "ret3m": -25.37,
      "ret6m": -18.48,
      "ret1y": -23.53,
      "ret2y": 26.74,
      "ret3y": 76.32
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.8986,
      "ret1w": 0.08,
      "ret1m": -0.5,
      "ret3m": -4.76,
      "ret6m": -2.87,
      "ret1y": -0.88,
      "ret2y": 3.39,
      "ret3y": 24.38
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6623,
      "ret1w": -0.03,
      "ret1m": 1.39,
      "ret3m": -6.78,
      "ret6m": -13.62,
      "ret1y": -23.5,
      "ret2y": -11.06,
      "ret3y": 15.24
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.1863,
      "ret1w": -1.62,
      "ret1m": -3.33,
      "ret3m": -11.87,
      "ret6m": -7.94,
      "ret1y": -4.24,
      "ret2y": 6.66,
      "ret3y": 39.73
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9226,
      "ret1w": -0.49,
      "ret1m": -0.01,
      "ret3m": 0.91,
      "ret6m": -1.48,
      "ret1y": -2.85,
      "ret2y": -5.43,
      "ret3y": -2.4
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.2727,
      "ret1w": 0.18,
      "ret1m": -2.12,
      "ret3m": -16.07,
      "ret6m": -13.48,
      "ret1y": -17.82,
      "ret2y": 16.69,
      "ret3y": 53.26
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.413,
      "ret1w": 0.34,
      "ret1m": 0.64,
      "ret3m": -3.65,
      "ret6m": -5.06,
      "ret1y": -4.52,
      "ret2y": -0.76,
      "ret3y": 10.94
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.783,
      "ret1w": 2.35,
      "ret1m": 4.12,
      "ret3m": -14.89,
      "ret6m": -18.78,
      "ret1y": -27.16,
      "ret2y": -30.15,
      "ret3y": -22.17
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.3062,
      "ret1w": 3.62,
      "ret1m": -3.22,
      "ret3m": -21.09,
      "ret6m": -17.83,
      "ret1y": -21.56,
      "ret2y": 30.26,
      "ret3y": 93.98
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4857,
      "ret1w": -1.14,
      "ret1m": -1.94,
      "ret3m": -6.43,
      "ret6m": -3.56,
      "ret1y": -3.14,
      "ret2y": 17.86,
      "ret3y": 40.74
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5642,
      "ret1w": 1.3,
      "ret1m": -1.03,
      "ret3m": -9.77,
      "ret6m": -6.85,
      "ret1y": -7.01,
      "ret2y": 8.28,
      "ret3y": 37.17
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1849,
      "ret1w": 1.84,
      "ret1m": 0.31,
      "ret3m": -8.2,
      "ret6m": -8.58,
      "ret1y": -12.45,
      "ret2y": -1.36,
      "ret3y": 18.41
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.306,
      "ret1w": 0.0,
      "ret1m": 2.19,
      "ret3m": 6.27,
      "ret6m": -0.46,
      "ret1y": -1.21,
      "ret2y": 5.75,
      "ret3y": -6.96
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.915,
      "ret1w": -2.3,
      "ret1m": 2.46,
      "ret3m": -3.96,
      "ret6m": -8.5,
      "ret1y": -16.12,
      "ret2y": -7.62,
      "ret3y": 33.12
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.3457,
      "ret1w": 0.26,
      "ret1m": -1.54,
      "ret3m": -16.04,
      "ret6m": -15.52,
      "ret1y": -14.61,
      "ret2y": 9.16,
      "ret3y": 37.49
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0177,
      "ret1w": -0.03,
      "ret1m": 0.01,
      "ret3m": 0.43,
      "ret6m": 0.75,
      "ret1y": 1.33,
      "ret2y": 2.54,
      "ret3y": 3.92
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0169,
      "ret1w": -0.03,
      "ret1m": 0.01,
      "ret3m": 0.44,
      "ret6m": 0.79,
      "ret1y": 1.34,
      "ret2y": 2.6,
      "ret3y": 4.09
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.229,
      "ret1w": 0.74,
      "ret1m": -0.32,
      "ret3m": -6.89,
      "ret6m": -15.99,
      "ret1y": -21.82,
      "ret2y": -14.83,
      "ret3y": -4.65
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.326,
      "ret1w": 1.66,
      "ret1m": 0.35,
      "ret3m": -10.74,
      "ret6m": -20.01,
      "ret1y": -25.06,
      "ret2y": -13.34,
      "ret3y": 3.65
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4547,
      "ret1w": 0.18,
      "ret1m": -2.13,
      "ret3m": -8.36,
      "ret6m": -14.23,
      "ret1y": -21.89,
      "ret2y": -4.24,
      "ret3y": 32.13
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8734,
      "ret1w": 0.97,
      "ret1m": -0.48,
      "ret3m": -7.93,
      "ret6m": -13.27,
      "ret1y": -15.71,
      "ret2y": -6.01,
      "ret3y": 6.8
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9286,
      "ret1w": 0.97,
      "ret1m": -0.46,
      "ret3m": -7.89,
      "ret6m": -13.18,
      "ret1y": -15.54,
      "ret2y": -5.62,
      "ret3y": 7.66
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7458,
      "ret1w": 1.01,
      "ret1m": 1.35,
      "ret3m": -7.02,
      "ret6m": -15.03,
      "ret1y": -22.54,
      "ret2y": -6.92,
      "ret3y": 7.31
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6058,
      "ret1w": 0.39,
      "ret1m": -0.59,
      "ret3m": -5.16,
      "ret6m": -11.68,
      "ret1y": -15.89,
      "ret2y": -10.42,
      "ret3y": 1.54
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4811,
      "ret1w": 0.39,
      "ret1m": 0.58,
      "ret3m": -3.36,
      "ret6m": -7.51,
      "ret1y": -14.24,
      "ret2y": -1.34,
      "ret3y": 18.85
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5506,
      "ret1w": 2.37,
      "ret1m": 0.12,
      "ret3m": -12.63,
      "ret6m": -23.82,
      "ret1y": -27.53,
      "ret2y": -13.64,
      "ret3y": 5.84
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.01,
      "ret1w": -0.23,
      "ret1m": -1.56,
      "ret3m": -2.47,
      "ret6m": -7.51,
      "ret1y": -10.02,
      "ret2y": -9.25,
      "ret3y": 3.57
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.496,
      "ret1w": 0.03,
      "ret1m": 1.29,
      "ret3m": 2.68,
      "ret6m": -1.91,
      "ret1y": 2.49,
      "ret2y": 7.05,
      "ret3y": 31.04
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.2291,
      "ret1w": -0.57,
      "ret1m": -1.47,
      "ret3m": -9.62,
      "ret6m": -6.82,
      "ret1y": -6.34,
      "ret2y": 2.1,
      "ret3y": 19.72
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2707,
      "ret1w": 1.46,
      "ret1m": -0.5,
      "ret3m": -10.8,
      "ret6m": -20.06,
      "ret1y": -25.68,
      "ret2y": -14.08,
      "ret3y": 1.87
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.972,
      "ret1w": 0.05,
      "ret1m": 1.81,
      "ret3m": -11.3,
      "ret6m": -19.14,
      "ret1y": -23.43,
      "ret2y": -12.83,
      "ret3y": 7.14
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9755,
      "ret1w": 0.06,
      "ret1m": 1.82,
      "ret3m": -11.16,
      "ret6m": -18.95,
      "ret1y": -23.3,
      "ret2y": -12.71,
      "ret3y": 6.9
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2331,
      "ret1w": 0.51,
      "ret1m": 3.67,
      "ret3m": -7.11,
      "ret6m": -13.59,
      "ret1y": -20.93,
      "ret2y": -11.98,
      "ret3y": 5.69
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2623,
      "ret1w": 0.52,
      "ret1m": 3.68,
      "ret3m": -7.07,
      "ret6m": -13.51,
      "ret1y": -20.76,
      "ret2y": -11.63,
      "ret3y": 6.54
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7068,
      "ret1w": 1.31,
      "ret1m": 2.79,
      "ret3m": -9.09,
      "ret6m": -17.54,
      "ret1y": -23.8,
      "ret2y": -10.46,
      "ret3y": 15.58
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1613,
      "ret1w": 0.0,
      "ret1m": 0.23,
      "ret3m": 0.08,
      "ret6m": -0.74,
      "ret1y": -1.06,
      "ret2y": 1.06,
      "ret3y": 4.97
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1819,
      "ret1w": 0.01,
      "ret1m": 0.25,
      "ret3m": 0.11,
      "ret6m": -0.66,
      "ret1y": -0.9,
      "ret2y": 1.37,
      "ret3y": 5.62
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0881,
      "ret1w": -0.03,
      "ret1m": 0.0,
      "ret3m": 0.14,
      "ret6m": 0.42,
      "ret1y": 0.81,
      "ret2y": 1.88,
      "ret3y": 3.49
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4122,
      "ret1w": -0.05,
      "ret1m": 0.02,
      "ret3m": 0.15,
      "ret6m": 0.09,
      "ret1y": 0.18,
      "ret2y": 0.56,
      "ret3y": 4.48
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4656,
      "ret1w": -0.05,
      "ret1m": 0.03,
      "ret3m": 0.18,
      "ret6m": 0.19,
      "ret1y": 0.38,
      "ret2y": 0.96,
      "ret3y": 5.31
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9168,
      "ret1w": 1.53,
      "ret1m": 1.68,
      "ret3m": -5.31,
      "ret6m": -10.14,
      "ret1y": -2.86,
      "ret2y": 9.68,
      "ret3y": 32.27
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0552,
      "ret1w": 2.22,
      "ret1m": 2.62,
      "ret3m": -7.78,
      "ret6m": -16.22,
      "ret1y": -16.24,
      "ret2y": -8.62,
      "ret3y": 11.96
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.33,
      "nav": 4.1941,
      "price": 4.1941,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.9077,
      "price": 2.9077,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.43,
      "nav": 3.6009,
      "price": 3.6009,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.03,
      "nav": 0.7554,
      "price": 0.7554,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.0244,
      "price": 2.0244,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.7006,
      "price": 2.7006,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 5.3769,
      "price": 5.3769,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.712,
      "price": 1.712,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.1528,
      "price": 1.1528,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.648,
      "price": 2.648,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.145,
      "price": 1.145,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.298,
      "price": 2.298,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 1.2662,
      "price": 1.2662,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.9086,
      "price": 1.9086,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 1.4592,
      "price": 1.4592,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.15,
      "nav": 1.5467,
      "price": 1.5467,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.6006,
      "price": 2.6006,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 0.944,
      "price": 0.944,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.377,
      "price": 2.377,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.15,
      "nav": 1.2288,
      "price": 1.2288,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.0,
      "sharpe": -1.46,
      "calmar": -1.46
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.05,
      "sharpe": -7.19,
      "calmar": -7.19
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 12.78,
      "sharpe": -2.59,
      "calmar": -2.59
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.96,
      "sharpe": 0.33,
      "calmar": 0.33
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.95,
      "sharpe": -5.24,
      "calmar": -5.24
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.95,
      "sharpe": -3.57,
      "calmar": -3.57
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.0,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.85,
      "sharpe": -2.91,
      "calmar": -2.91
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.33,
      "sharpe": -4.04,
      "calmar": -4.04
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.83,
      "sharpe": -2.85,
      "calmar": -2.85
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.83,
      "sharpe": -0.01,
      "calmar": -0.01
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 2.59,
      "sharpe": -2.08,
      "calmar": -2.08
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 7.92,
      "sharpe": -5.96,
      "calmar": -5.96
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.28,
      "sharpe": 0.56,
      "calmar": 0.56
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.94,
      "sharpe": -2.58,
      "calmar": -2.58
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.51,
      "sharpe": -5.2,
      "calmar": -5.2
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.51,
      "sharpe": -1.14,
      "calmar": -1.14
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.65,
      "sharpe": -1.17,
      "calmar": -1.17
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.16,
      "sharpe": -0.4,
      "calmar": -0.4
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.44,
      "sharpe": -1.14,
      "calmar": -1.14
    }
  ],
  "news": [
    {
      "title": "证券时报记者吴瞬一张曾长期被国外垄断的光伏膜，被一家从印染起家的民营企业做到了全球第一。盛虹控股的故事，值得说的不只是结果，而是结果背后的硬道理：中国制造竞争的主战场，已经推进到材料、工艺这些“看不见的地方”。打破垄断，从来没有一招制胜。高端材料的突围，拼的是十年磨一剑的长期投入，是允许失败、宽容失败的创新机制，是“基础研究—中试—量产”一级都不能缺的完整体系。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:20",
      "impact": "neutral"
    },
    {
      "title": "11月11日，财政部发布《会计改革与发展“十五五”规划》（以下简称《规划》），锚定建设中国特色、国际领先的会计体系目标，提出会计法治、会计人才、会计服务等七大体系建设任务，明确将加快完善注册会计师行业配套制度，严肃查处财务造假行为。“七大体系里，法治体系是打头的，监督体系是重要抓手。”财政部会计司司长林启云在当天召开的财政部新闻发布会上表示。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:20",
      "impact": "neutral"
    },
    {
      "title": "11月11日，中国证监会有关部门负责人就东方通证券虚假陈述特别代表人诉讼、清越科技虚假陈述先行赔付基金两起案件答记者问。该负责人表示，将继续配合司法机关依法适用代表人诉讼程序开展审判工作，支持相关市场机构和人员按照规定，主动实施先行赔付，切实维护投资者合法权益，维护良好市场生态，促进资本市场高质量发展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:20",
      "impact": "neutral"
    },
    {
      "title": "■李静商务部近日发布的《中华老字号年度发展报告》显示，2025年中华老字号营收突破2万亿元。这份亮眼的成绩单，让大众再次看到老品牌的市场韧性。扎根市井烟火、承载百年技艺与民俗文化的老字号，既是国货名片，也是拉动内需、活跃消费市场的重要力量。在各项扶持政策支持下，不少老字号主动转型，触网直播、布局全国、试水“出海”，不断打开新的增长空间。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "■苏向杲近日，国家金融监督管理总局、交通运输部等七部门联合发布《关于加快航运保险高质量发展的指导意见》（以下简称《指导意见》），围绕提升保障水平、增强国际竞争力、完善全球服务网络等作出系统部署。航运保险连接船舶制造、国际运输与进出口贸易，是服务实体经济的重要金融工具。当前，我国外贸规模持续扩大，制造业加快转型，中国制造加速“出海”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "今年10月份，我国首个区域电力市场——南方区域电力市场从试运行转入正式运行。其覆盖广东、广西、云南、贵州、海南等五省区，是目前世界上规模最大、交易最活跃的“电力超市”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "11月11日，财政部召开“十五五”时期会计高质量发展新闻发布会，介绍了“十四五”时期会计改革与发展取得的成效，以及“十五五”时期会计高质量发展有关考虑。财政部会计司司长林启云表示，“十五五”时期是基本实现社会主义现代化夯实基础、全面发力的关键时期。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:40",
      "impact": "neutral"
    },
    {
      "title": "11月11日，中国人民银行发布《2026年第三季度中国货币政策执行报告》（以下简称《报告》）。《报告》显示，今年以来，我国经济保持平稳运行，呈现动能向新、结构向优的发展态势。前三季度国内生产总值（GDP）同比增长4.6%。中国人民银行继续实施适度宽松的货币政策，综合运用多种货币政策工具，为经济持续向好向优创造适宜的货币金融环境。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:40",
      "impact": "neutral"
    },
    {
      "title": "■侯捷宁“新”正成为外贸高质量发展的鲜明成色。海关总署近日发布的数据显示，今年前10个月，我国货物贸易进出口总值44.81万亿元，同比增长20%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:40",
      "impact": "neutral"
    },
    {
      "title": "西班牙的红酒、荷兰的奶酪，乘着中欧班列摆上中国消费者的餐桌；“中国制造”的智能家电、日用百货，沿着同一条铁路奔赴欧洲。中欧班列的双向奔赴，是共建“一带一路”惠及民生的生动注脚。11月11日，国家发展改革委召开“奋进‘十五五’”系列新闻发布会第五场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:40",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 54,
    "label": "中性",
    "upDownRatio": "4,214/892",
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
