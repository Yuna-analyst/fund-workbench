// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-10 15:50:17
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-10 15:50 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-09",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3813.79,
      "change": 1.89,
      "changePct": "+0.05%",
      "high": 3824.71,
      "low": 3754.14,
      "volume": 535149921.0,
      "amount": 888561200000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 12641.86,
      "change": 20.96,
      "changePct": "+0.17%",
      "high": 12679.63,
      "low": 12278.78,
      "volume": 632657827.0,
      "amount": 1011994220000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3043.33,
      "change": 6.67,
      "changePct": "+0.22%",
      "high": 3053.38,
      "low": 2932.8,
      "volume": 191234801.0,
      "amount": 492045400000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1457.27,
      "change": 0.95,
      "changePct": "+0.07%",
      "high": 1466.88,
      "low": 1390.0,
      "volume": 9540742.0,
      "amount": 91972940000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4317.25,
      "change": 6.97,
      "changePct": "+0.16%",
      "high": 4330.74,
      "low": 4239.74,
      "volume": 199187416.0,
      "amount": 496179130000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7251.01,
      "change": 2.58,
      "changePct": "+0.04%",
      "high": 7277.14,
      "low": 7048.45,
      "volume": 164473084.0,
      "amount": 331446260000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.31万亿",
      "label": "成交额",
      "rawAmount": 3312199150000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,094/1,452",
      "label": "涨/跌家数",
      "rawUp": 3094,
      "rawDown": 1452,
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
    "totalInflow": 16.03,
    "totalOutflow": 0,
    "netFlow": 16.03,
    "netFlowTrend": [
      3.21,
      6.41,
      9.62,
      12.82,
      16.03
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
      "name": "券商",
      "inflow": 3.61,
      "pct": 2.27
    },
    {
      "name": "煤炭",
      "inflow": 2.77,
      "pct": 1.49
    },
    {
      "name": "有色",
      "inflow": 2.32,
      "pct": 2.31
    },
    {
      "name": "创新药",
      "inflow": 1.93,
      "pct": 0.48
    },
    {
      "name": "医疗",
      "inflow": 1.57,
      "pct": 0.59
    },
    {
      "name": "传媒",
      "inflow": 1.16,
      "pct": 5.46
    },
    {
      "name": "白酒",
      "inflow": 1.0,
      "pct": 0.48
    },
    {
      "name": "新能源车",
      "inflow": 0.7,
      "pct": 1.86
    },
    {
      "name": "人工智能",
      "inflow": 0.56,
      "pct": 0.32
    },
    {
      "name": "新能源",
      "inflow": 0.41,
      "pct": 0.67
    },
    {
      "name": "光伏",
      "inflow": 0.39,
      "pct": 0.26
    },
    {
      "name": "游戏",
      "inflow": 0.28,
      "pct": 3.48
    },
    {
      "name": "云计算",
      "inflow": 0.24,
      "pct": 1.38
    },
    {
      "name": "农业",
      "inflow": 0.22,
      "pct": 1.68
    },
    {
      "name": "钢铁",
      "inflow": 0.2,
      "pct": 0.27
    },
    {
      "name": "家电",
      "inflow": 0.17,
      "pct": 0.44
    },
    {
      "name": "计算机",
      "inflow": 0.09,
      "pct": 1.23
    },
    {
      "name": "食品",
      "inflow": 0.04,
      "pct": 0.82
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.41
    },
    {
      "name": "半导体",
      "inflow": -4.66,
      "pct": -0.33
    }
  ],
  "sectors": [
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.811,
      "changePct": 5.46,
      "change": 0.042,
      "turnover": 3.86
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.041,
      "changePct": 3.48,
      "change": 0.035,
      "turnover": 0.95
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.642,
      "changePct": 2.31,
      "change": 0.037,
      "turnover": 7.74
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.495,
      "changePct": 2.27,
      "change": 0.011,
      "turnover": 12.04
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.475,
      "changePct": 1.86,
      "change": 0.027,
      "turnover": 2.33
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.727,
      "changePct": 1.68,
      "change": 0.012,
      "turnover": 0.73
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.298,
      "changePct": 1.49,
      "change": 0.019,
      "turnover": 9.25
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.541,
      "changePct": 1.38,
      "change": 0.021,
      "turnover": 0.81
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.07,
      "changePct": 1.23,
      "change": 0.013,
      "turnover": 0.29
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.494,
      "changePct": 0.82,
      "change": 0.004,
      "turnover": 0.15
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.249,
      "changePct": 0.67,
      "change": 0.015,
      "turnover": 1.38
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.341,
      "changePct": 0.59,
      "change": 0.002,
      "turnover": 5.23
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.419,
      "changePct": 0.48,
      "change": 0.002,
      "turnover": 3.35
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.843,
      "changePct": 0.48,
      "change": 0.004,
      "turnover": 6.42
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.384,
      "changePct": 0.44,
      "change": 0.006,
      "turnover": 0.58
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.991,
      "changePct": 0.41,
      "change": 0.004,
      "turnover": 0.06
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.928,
      "changePct": 0.32,
      "change": 0.003,
      "turnover": 1.88
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.132,
      "changePct": 0.27,
      "change": 0.003,
      "turnover": 0.67
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.765,
      "changePct": 0.26,
      "change": 0.002,
      "turnover": 1.31
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.911,
      "changePct": -0.33,
      "change": -0.003,
      "turnover": 15.53
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.592,
      "changePct": -0.34,
      "change": -0.002,
      "turnover": 32.08
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.283,
      "changePct": -0.47,
      "change": -0.006,
      "turnover": 3.71
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.38,
      "changePct": -0.52,
      "change": -0.002,
      "turnover": 3.78
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.999,
      "changePct": -0.6,
      "change": -0.006,
      "turnover": 9.29
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.742,
      "changePct": -0.8,
      "change": -0.006,
      "turnover": 0.6
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.85,
      "changePct": -1.05,
      "change": -0.009,
      "turnover": 13.26
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.082,
      "changePct": -1.19,
      "change": -0.013,
      "turnover": 3.86
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.905,
      "changePct": -1.2,
      "change": -0.011,
      "turnover": 7.97
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.541,
      "changePct": 0.26,
      "amount": 107.66,
      "netFlow": 26.92
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.282,
      "changePct": 0.04,
      "amount": 44.38,
      "netFlow": 11.1
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.919,
      "changePct": 0.03,
      "amount": 25.61,
      "netFlow": 6.4
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.58,
      "changePct": 0.13,
      "amount": 12.09,
      "netFlow": 3.02
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.495,
      "changePct": 2.27,
      "amount": 12.04,
      "netFlow": 3.01
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.264,
      "changePct": 0.07,
      "amount": 10.02,
      "netFlow": 2.5
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.249,
      "changePct": 0.67,
      "amount": 1.38,
      "netFlow": 0.34
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.38,
      "changePct": -0.52,
      "amount": 3.78,
      "netFlow": -0.95
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.911,
      "changePct": -0.33,
      "amount": 15.53,
      "netFlow": -3.88
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.385,
      "changePct": -0.09,
      "amount": 55.65,
      "netFlow": -13.91
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.385,
      "changePct": -0.09,
      "amount": 55.65,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.919,
      "changePct": 0.03,
      "amount": 25.61,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.282,
      "changePct": 0.04,
      "amount": 44.38,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.58,
      "changePct": 0.13,
      "amount": 12.09,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.264,
      "changePct": 0.07,
      "amount": 10.02,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "传媒",
      "turnover": 3.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.95,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 7.74,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 12.04,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "新能源车",
      "turnover": 2.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 9.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.29,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 5.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.58,
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
      "name": "人工智能",
      "turnover": 1.88,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 15.53,
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
      "nav": 4.2108,
      "ret1w": -0.81,
      "ret1m": -4.82,
      "ret3m": -9.23,
      "ret6m": -18.38,
      "ret1y": -0.66,
      "ret2y": 5.03,
      "ret3y": 102.38
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.6654,
      "ret1w": -1.53,
      "ret1m": -4.7,
      "ret3m": -13.05,
      "ret6m": -24.45,
      "ret1y": -12.52,
      "ret2y": -15.58,
      "ret3y": 28.6
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.0443,
      "ret1w": -1.29,
      "ret1m": -10.59,
      "ret3m": -14.18,
      "ret6m": -18.68,
      "ret1y": 12.95,
      "ret2y": 49.31,
      "ret3y": 156.32
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.697,
      "ret1w": 0.84,
      "ret1m": -0.01,
      "ret3m": -2.44,
      "ret6m": 6.36,
      "ret1y": -6.13,
      "ret2y": -14.85,
      "ret3y": -6.77
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0018,
      "ret1w": 1.6,
      "ret1m": 0.16,
      "ret3m": -2.63,
      "ret6m": -6.92,
      "ret1y": -25.13,
      "ret2y": -33.31,
      "ret3y": -18.22
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6661,
      "ret1w": -0.49,
      "ret1m": -1.59,
      "ret3m": -2.76,
      "ret6m": 1.77,
      "ret1y": -23.12,
      "ret2y": -23.16,
      "ret3y": 14.19
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2875,
      "ret1w": 0.58,
      "ret1m": -0.01,
      "ret3m": -4.24,
      "ret6m": 3.24,
      "ret1y": -7.48,
      "ret2y": 2.61,
      "ret3y": 30.11
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.866,
      "ret1w": -0.16,
      "ret1m": -1.63,
      "ret3m": -2.46,
      "ret6m": -10.33,
      "ret1y": -4.75,
      "ret2y": -1.17,
      "ret3y": 46.81
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2767,
      "ret1w": 0.02,
      "ret1m": -1.38,
      "ret3m": -4.89,
      "ret6m": -12.08,
      "ret1y": -4.68,
      "ret2y": -1.18,
      "ret3y": 20.37
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.018,
      "ret1w": -1.76,
      "ret1m": -4.64,
      "ret3m": -9.88,
      "ret6m": -28.58,
      "ret1y": 12.07,
      "ret2y": 35.82,
      "ret3y": 147.58
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.115,
      "ret1w": 1.18,
      "ret1m": 1.46,
      "ret3m": -0.71,
      "ret6m": 11.06,
      "ret1y": -3.04,
      "ret2y": -13.43,
      "ret3y": -14.69
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.443,
      "ret1w": 2.09,
      "ret1m": -0.45,
      "ret3m": 3.34,
      "ret6m": 11.6,
      "ret1y": -8.64,
      "ret2y": -8.47,
      "ret3y": 17.11
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.5361,
      "ret1w": -0.6,
      "ret1m": -4.12,
      "ret3m": -7.7,
      "ret6m": -37.28,
      "ret1y": -47.06,
      "ret2y": -47.01,
      "ret3y": -14.57
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.884,
      "ret1w": 0.66,
      "ret1m": -0.04,
      "ret3m": -2.98,
      "ret6m": 0.98,
      "ret1y": 5.19,
      "ret2y": -6.71,
      "ret3y": -5.36
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.5888,
      "ret1w": -0.34,
      "ret1m": -2.22,
      "ret3m": -4.7,
      "ret6m": -9.73,
      "ret1y": -4.75,
      "ret2y": 2.1,
      "ret3y": 42.65
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.045,
      "ret1w": -1.6,
      "ret1m": -7.8,
      "ret3m": -13.78,
      "ret6m": -37.21,
      "ret1y": 1.47,
      "ret2y": 49.64,
      "ret3y": 122.82
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.6323,
      "ret1w": -0.42,
      "ret1m": -0.3,
      "ret3m": 1.59,
      "ret6m": 11.54,
      "ret1y": 0.26,
      "ret2y": -2.13,
      "ret3y": 5.6
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.004,
      "ret1w": -0.59,
      "ret1m": -4.2,
      "ret3m": 0.9,
      "ret6m": -4.2,
      "ret1y": -1.08,
      "ret2y": -15.13,
      "ret3y": -13.15
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.313,
      "ret1w": 0.68,
      "ret1m": 0.97,
      "ret3m": -1.38,
      "ret6m": 5.67,
      "ret1y": -4.48,
      "ret2y": 2.96,
      "ret3y": 2.01
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2811,
      "ret1w": 0.24,
      "ret1m": -1.16,
      "ret3m": -3.6,
      "ret6m": -2.47,
      "ret1y": 1.85,
      "ret2y": 9.37,
      "ret3y": 55.51
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.1449,
      "ret1w": -0.98,
      "ret1m": -2.99,
      "ret3m": -9.18,
      "ret6m": -19.46,
      "ret1y": -11.8,
      "ret2y": -4.1,
      "ret3y": 22.07
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.2184,
      "ret1w": -0.98,
      "ret1m": -2.98,
      "ret3m": -9.15,
      "ret6m": -19.38,
      "ret1y": -11.63,
      "ret2y": -3.73,
      "ret3y": 23.05
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0668,
      "ret1w": 0.13,
      "ret1m": -0.05,
      "ret3m": -1.77,
      "ret6m": -3.74,
      "ret1y": -1.22,
      "ret2y": -0.09,
      "ret3y": 5.64
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0411,
      "ret1w": 0.13,
      "ret1m": -0.02,
      "ret3m": -1.71,
      "ret6m": -3.58,
      "ret1y": -0.92,
      "ret2y": 0.51,
      "ret3y": 6.92
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7024,
      "ret1w": 1.01,
      "ret1m": 0.3,
      "ret3m": -2.08,
      "ret6m": -1.33,
      "ret1y": -10.55,
      "ret2y": -14.96,
      "ret3y": -3.73
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7206,
      "ret1w": 1.01,
      "ret1m": 0.32,
      "ret3m": -2.03,
      "ret6m": -1.21,
      "ret1y": -10.32,
      "ret2y": -14.53,
      "ret3y": -2.75
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.5483,
      "ret1w": -1.1,
      "ret1m": -4.39,
      "ret3m": -11.56,
      "ret6m": -22.94,
      "ret1y": 14.34,
      "ret2y": 35.74,
      "ret3y": 118.98
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4179,
      "ret1w": 0.39,
      "ret1m": -1.87,
      "ret3m": -2.41,
      "ret6m": -11.31,
      "ret1y": 0.54,
      "ret2y": 4.66,
      "ret3y": 57.64
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7106,
      "ret1w": 1.41,
      "ret1m": -0.17,
      "ret3m": -2.55,
      "ret6m": -12.67,
      "ret1y": -18.53,
      "ret2y": -14.29,
      "ret3y": 0.95
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.044,
      "ret1w": 0.73,
      "ret1m": -2.66,
      "ret3m": -0.43,
      "ret6m": -19.52,
      "ret1y": 14.68,
      "ret2y": 20.53,
      "ret3y": 95.29
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4876,
      "ret1w": -0.99,
      "ret1m": -1.83,
      "ret3m": -4.22,
      "ret6m": -21.34,
      "ret1y": -2.6,
      "ret2y": 2.33,
      "ret3y": 30.44
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4971,
      "ret1w": -1.0,
      "ret1m": -1.84,
      "ret3m": -4.2,
      "ret6m": -21.27,
      "ret1y": -2.41,
      "ret2y": 2.73,
      "ret3y": 31.47
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.274,
      "ret1w": 0.12,
      "ret1m": 0.49,
      "ret3m": -1.06,
      "ret6m": 2.8,
      "ret1y": -1.55,
      "ret2y": -0.93,
      "ret3y": 1.78
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1089,
      "ret1w": 0.86,
      "ret1m": 0.31,
      "ret3m": -0.85,
      "ret6m": -2.28,
      "ret1y": -5.41,
      "ret2y": -5.62,
      "ret3y": 4.67
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.2915,
      "ret1w": -0.99,
      "ret1m": -2.16,
      "ret3m": -6.96,
      "ret6m": -21.1,
      "ret1y": -7.73,
      "ret2y": -25.11,
      "ret3y": -5.81
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9094,
      "ret1w": -0.1,
      "ret1m": -0.34,
      "ret3m": -4.4,
      "ret6m": 0.38,
      "ret1y": -8.54,
      "ret2y": 2.01,
      "ret3y": 31.68
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.918,
      "ret1w": -1.22,
      "ret1m": -7.13,
      "ret3m": -12.5,
      "ret6m": -37.11,
      "ret1y": -3.06,
      "ret2y": 36.04,
      "ret3y": 111.6
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5287,
      "ret1w": -0.35,
      "ret1m": 0.66,
      "ret3m": 0.81,
      "ret6m": 8.65,
      "ret1y": 3.44,
      "ret2y": 2.98,
      "ret3y": 0.28
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5654,
      "ret1w": -2.8,
      "ret1m": -2.26,
      "ret3m": -9.45,
      "ret6m": -29.32,
      "ret1y": -11.7,
      "ret2y": -9.9,
      "ret3y": 6.16
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 12.63,
      "ret1w": -3.43,
      "ret1m": -7.17,
      "ret3m": -13.24,
      "ret6m": -25.28,
      "ret1y": 29.42,
      "ret2y": 77.49,
      "ret3y": 219.59
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0601,
      "ret1w": -0.02,
      "ret1m": -0.08,
      "ret3m": -0.71,
      "ret6m": -1.68,
      "ret1y": -0.58,
      "ret2y": 0.58,
      "ret3y": 3.87
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1086,
      "ret1w": -0.03,
      "ret1m": -0.07,
      "ret3m": -0.7,
      "ret6m": -1.62,
      "ret1y": -0.47,
      "ret2y": 0.85,
      "ret3y": 4.57
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0663,
      "ret1w": 0.02,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": 0.37,
      "ret1y": 0.68,
      "ret2y": 1.66,
      "ret3y": 3.3
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1005,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.12,
      "ret6m": 0.34,
      "ret1y": 0.72,
      "ret2y": 1.55,
      "ret3y": 4.06
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1102,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.4,
      "ret1y": 0.83,
      "ret2y": 1.76,
      "ret3y": 4.49
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0771,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.08,
      "ret6m": 0.29,
      "ret1y": 0.64,
      "ret2y": 1.52,
      "ret3y": 3.37
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0919,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.11,
      "ret6m": 0.36,
      "ret1y": 0.79,
      "ret2y": 1.84,
      "ret3y": 4.03
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": 0.02,
      "ret1m": -0.69,
      "ret3m": -2.16,
      "ret6m": -5.04,
      "ret1y": -0.88,
      "ret2y": 3.2,
      "ret3y": 9.4
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2022,
      "ret1w": 0.01,
      "ret1m": -0.73,
      "ret3m": -1.78,
      "ret6m": -4.62,
      "ret1y": -0.78,
      "ret2y": 1.29,
      "ret3y": 4.05
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0514,
      "ret1w": 0.02,
      "ret1m": -0.69,
      "ret3m": -2.13,
      "ret6m": -4.95,
      "ret1y": -0.69,
      "ret2y": 3.61,
      "ret3y": 10.28
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0442,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.17,
      "ret6m": 0.43,
      "ret1y": 0.83,
      "ret2y": 1.83,
      "ret3y": 3.83
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1461,
      "ret1w": -0.12,
      "ret1m": -1.04,
      "ret3m": -2.19,
      "ret6m": -4.41,
      "ret1y": -4.68,
      "ret2y": -3.45,
      "ret3y": 4.62
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2047,
      "ret1w": 0.03,
      "ret1m": 0.0,
      "ret3m": -0.84,
      "ret6m": -1.33,
      "ret1y": -1.37,
      "ret2y": 0.6,
      "ret3y": 10.81
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1292,
      "ret1w": -0.02,
      "ret1m": -0.22,
      "ret3m": -0.77,
      "ret6m": -2.61,
      "ret1y": 0.33,
      "ret2y": 1.22,
      "ret3y": 8.81
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2005,
      "ret1w": -0.02,
      "ret1m": -0.22,
      "ret3m": -0.74,
      "ret6m": -2.51,
      "ret1y": 0.53,
      "ret2y": 1.63,
      "ret3y": 9.71
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.468,
      "ret1w": -1.2,
      "ret1m": -1.2,
      "ret3m": -0.08,
      "ret6m": 0.08,
      "ret1y": 34.57,
      "ret2y": 86.97,
      "ret3y": 146.55
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0297,
      "ret1w": 0.92,
      "ret1m": 0.92,
      "ret3m": 1.35,
      "ret6m": 4.31,
      "ret1y": 11.71,
      "ret2y": 6.28,
      "ret3y": 30.65
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7628,
      "ret1w": -2.8,
      "ret1m": -2.8,
      "ret3m": -5.73,
      "ret6m": -9.26,
      "ret1y": -14.06,
      "ret2y": -9.4,
      "ret3y": 22.05
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4434,
      "ret1w": -1.86,
      "ret1m": -1.86,
      "ret3m": 1.38,
      "ret6m": 4.8,
      "ret1y": 25.02,
      "ret2y": 22.01,
      "ret3y": 74.82
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.915,
      "ret1w": 0.32,
      "ret1m": 0.32,
      "ret3m": -2.14,
      "ret6m": -2.71,
      "ret1y": -3.88,
      "ret2y": -6.01,
      "ret3y": -2.88
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7032,
      "ret1w": -1.01,
      "ret1m": -1.01,
      "ret3m": -0.45,
      "ret6m": -2.13,
      "ret1y": 25.29,
      "ret2y": 44.34,
      "ret3y": 91.62
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.55,
      "ret1w": 0.29,
      "ret1m": 0.29,
      "ret3m": -1.6,
      "ret6m": -1.04,
      "ret1y": 4.26,
      "ret2y": 4.36,
      "ret3y": 19.8
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.161,
      "ret1w": -6.97,
      "ret1m": -6.97,
      "ret3m": -5.3,
      "ret6m": -2.11,
      "ret1y": -18.3,
      "ret2y": -25.77,
      "ret3y": 69.74
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.923,
      "ret1w": -3.95,
      "ret1m": -3.95,
      "ret3m": -4.35,
      "ret6m": -4.15,
      "ret1y": -19.04,
      "ret2y": -27.38,
      "ret3y": -4.25
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9143,
      "ret1w": -0.19,
      "ret1m": -0.19,
      "ret3m": -0.19,
      "ret6m": -0.83,
      "ret1y": 32.61,
      "ret2y": 71.72,
      "ret3y": 146.6
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.575,
      "ret1w": 2.72,
      "ret1m": 2.72,
      "ret3m": -4.36,
      "ret6m": 13.77,
      "ret1y": 1.46,
      "ret2y": 27.09,
      "ret3y": 50.19
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7279,
      "ret1w": -0.37,
      "ret1m": -0.37,
      "ret3m": -2.73,
      "ret6m": 2.23,
      "ret1y": 11.05,
      "ret2y": 24.1,
      "ret3y": 50.93
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2851,
      "ret1w": -0.97,
      "ret1m": -0.97,
      "ret3m": -4.39,
      "ret6m": -1.09,
      "ret1y": 3.06,
      "ret2y": 9.55,
      "ret3y": 28.79
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.209,
      "ret1w": -0.41,
      "ret1m": -0.41,
      "ret3m": -6.42,
      "ret6m": -7.99,
      "ret1y": -4.5,
      "ret2y": -3.82,
      "ret3y": -13.12
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.964,
      "ret1w": -0.76,
      "ret1m": -0.76,
      "ret3m": -6.21,
      "ret6m": 0.26,
      "ret1y": -14.72,
      "ret2y": -0.1,
      "ret3y": 40.98
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0133,
      "ret1w": 0.03,
      "ret1m": 0.01,
      "ret3m": 0.18,
      "ret6m": 0.47,
      "ret1y": 1.37,
      "ret2y": 2.35,
      "ret3y": 3.83
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0124,
      "ret1w": 0.03,
      "ret1m": 0.01,
      "ret3m": 0.2,
      "ret6m": 0.51,
      "ret1y": 1.39,
      "ret2y": 2.42,
      "ret3y": 4.0
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.32,
      "ret1w": -0.08,
      "ret1m": -1.64,
      "ret3m": -6.25,
      "ret6m": -15.82,
      "ret1y": -7.04,
      "ret2y": -11.65,
      "ret3y": 6.62
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.606,
      "ret1w": 0.23,
      "ret1m": -1.59,
      "ret3m": -7.59,
      "ret6m": -15.77,
      "ret1y": -6.33,
      "ret2y": -6.09,
      "ret3y": 22.92
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5874,
      "ret1w": 1.73,
      "ret1m": 1.4,
      "ret3m": -7.68,
      "ret6m": 0.93,
      "ret1y": -11.9,
      "ret2y": 4.13,
      "ret3y": 48.49
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0347,
      "ret1w": -0.05,
      "ret1m": -1.26,
      "ret3m": -4.95,
      "ret6m": -8.94,
      "ret1y": -1.11,
      "ret2y": 1.94,
      "ret3y": 20.9
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.0938,
      "ret1w": -0.05,
      "ret1m": -1.25,
      "ret3m": -4.91,
      "ret6m": -8.85,
      "ret1y": -0.91,
      "ret2y": 2.36,
      "ret3y": 21.87
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.8777,
      "ret1w": 0.03,
      "ret1m": -2.39,
      "ret3m": -6.33,
      "ret6m": -15.46,
      "ret1y": -7.26,
      "ret2y": -3.08,
      "ret3y": 26.73
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6931,
      "ret1w": 0.15,
      "ret1m": -0.89,
      "ret3m": -5.18,
      "ret6m": -10.42,
      "ret1y": -4.18,
      "ret2y": -6.69,
      "ret3y": 11.71
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5326,
      "ret1w": 0.59,
      "ret1m": -0.62,
      "ret3m": -3.59,
      "ret6m": -3.98,
      "ret1y": -6.44,
      "ret2y": 1.47,
      "ret3y": 31.26
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.7747,
      "ret1w": -0.35,
      "ret1m": -2.77,
      "ret3m": -8.81,
      "ret6m": -23.53,
      "ret1y": -2.39,
      "ret2y": -7.16,
      "ret3y": 27.44
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.061,
      "ret1w": 0.68,
      "ret1m": 0.09,
      "ret3m": -4.4,
      "ret6m": -0.23,
      "ret1y": -4.18,
      "ret2y": -7.9,
      "ret3y": 7.72
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4443,
      "ret1w": -1.24,
      "ret1m": -1.24,
      "ret3m": -5.4,
      "ret6m": -1.87,
      "ret1y": -3.63,
      "ret2y": 5.94,
      "ret3y": 25.23
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5603,
      "ret1w": 0.92,
      "ret1m": 0.92,
      "ret3m": 3.22,
      "ret6m": 3.7,
      "ret1y": 19.45,
      "ret2y": 15.85,
      "ret3y": 39.47
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.5457,
      "ret1w": 0.37,
      "ret1m": -1.21,
      "ret3m": -7.5,
      "ret6m": -15.95,
      "ret1y": -6.41,
      "ret2y": -5.86,
      "ret3y": 18.3
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1302,
      "ret1w": -0.4,
      "ret1m": -5.12,
      "ret3m": -5.56,
      "ret6m": -19.12,
      "ret1y": 2.6,
      "ret2y": -1.48,
      "ret3y": 26.76
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1324,
      "ret1w": -0.4,
      "ret1m": -5.13,
      "ret3m": -5.52,
      "ret6m": -18.99,
      "ret1y": 2.68,
      "ret2y": -1.35,
      "ret3y": 26.31
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3272,
      "ret1w": -1.89,
      "ret1m": -1.89,
      "ret3m": -4.78,
      "ret6m": -12.56,
      "ret1y": -8.7,
      "ret2y": -8.05,
      "ret3y": 10.18
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3581,
      "ret1w": -1.88,
      "ret1m": -1.88,
      "ret3m": -4.74,
      "ret6m": -12.47,
      "ret1y": -8.51,
      "ret2y": -7.67,
      "ret3y": 11.06
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.8827,
      "ret1w": -2.0,
      "ret1m": -2.0,
      "ret3m": -6.5,
      "ret6m": -22.06,
      "ret1y": -6.43,
      "ret2y": -2.56,
      "ret3y": 25.67
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1604,
      "ret1w": 0.06,
      "ret1m": -0.07,
      "ret3m": -0.25,
      "ret6m": -0.8,
      "ret1y": -0.13,
      "ret2y": 1.02,
      "ret3y": 6.76
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1806,
      "ret1w": 0.07,
      "ret1m": -0.06,
      "ret3m": -0.22,
      "ret6m": -0.71,
      "ret1y": 0.03,
      "ret2y": 1.33,
      "ret3y": 7.42
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0866,
      "ret1w": 0.02,
      "ret1m": 0.03,
      "ret3m": 0.16,
      "ret6m": 0.44,
      "ret1y": 0.83,
      "ret2y": 1.96,
      "ret3y": 3.9
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4101,
      "ret1w": 0.02,
      "ret1m": 0.0,
      "ret3m": 0.03,
      "ret6m": 0.06,
      "ret1y": 0.01,
      "ret2y": 0.65,
      "ret3y": 7.71
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4629,
      "ret1w": 0.02,
      "ret1m": 0.01,
      "ret3m": 0.05,
      "ret6m": 0.15,
      "ret1y": 0.21,
      "ret2y": 1.06,
      "ret3y": 8.56
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0243,
      "ret1w": -0.25,
      "ret1m": -1.87,
      "ret3m": -3.97,
      "ret6m": -8.29,
      "ret1y": 7.7,
      "ret2y": 14.3,
      "ret3y": 44.46
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1442,
      "ret1w": -0.26,
      "ret1m": -2.13,
      "ret3m": -7.39,
      "ret6m": -8.24,
      "ret1y": -2.18,
      "ret2y": -0.87,
      "ret3y": 29.33
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 4.2451
      },
      {
        "date": "2026-10-09",
        "nav": 4.2108
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 3.7223
      },
      {
        "date": "2026-10-09",
        "nav": 3.6654
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 5.1103
      },
      {
        "date": "2026-10-09",
        "nav": 5.0443
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 0.6912
      },
      {
        "date": "2026-10-09",
        "nav": 0.697
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.9702
      },
      {
        "date": "2026-10-09",
        "nav": 2.0018
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.6793
      },
      {
        "date": "2026-10-09",
        "nav": 2.6661
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 5.2571
      },
      {
        "date": "2026-10-09",
        "nav": 5.2875
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.869
      },
      {
        "date": "2026-10-09",
        "nav": 1.866
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.2764
      },
      {
        "date": "2026-10-09",
        "nav": 1.2767
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 3.072
      },
      {
        "date": "2026-10-09",
        "nav": 3.018
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.102
      },
      {
        "date": "2026-10-09",
        "nav": 1.115
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.393
      },
      {
        "date": "2026-10-09",
        "nav": 2.443
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.5454
      },
      {
        "date": "2026-10-09",
        "nav": 1.5361
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.8717
      },
      {
        "date": "2026-10-09",
        "nav": 1.884
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.5943
      },
      {
        "date": "2026-10-09",
        "nav": 1.5888
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.0783
      },
      {
        "date": "2026-10-09",
        "nav": 2.045
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.6435
      },
      {
        "date": "2026-10-09",
        "nav": 2.6323
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.01
      },
      {
        "date": "2026-10-09",
        "nav": 1.004
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.2974
      },
      {
        "date": "2026-10-09",
        "nav": 2.313
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.278
      },
      {
        "date": "2026-10-09",
        "nav": 1.2811
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.1562
      },
      {
        "date": "2026-10-09",
        "nav": 1.1449
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.2304
      },
      {
        "date": "2026-10-09",
        "nav": 1.2184
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.0654
      },
      {
        "date": "2026-10-09",
        "nav": 1.0668
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.0397
      },
      {
        "date": "2026-10-09",
        "nav": 1.0411
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 0.6954
      },
      {
        "date": "2026-10-09",
        "nav": 0.7024
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 0.7134
      },
      {
        "date": "2026-10-09",
        "nav": 0.7206
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.5766
      },
      {
        "date": "2026-10-09",
        "nav": 2.5483
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.4084
      },
      {
        "date": "2026-10-09",
        "nav": 2.4179
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 0.7007
      },
      {
        "date": "2026-10-09",
        "nav": 0.7106
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 4.0146
      },
      {
        "date": "2026-10-09",
        "nav": 4.044
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 0.4925
      },
      {
        "date": "2026-10-09",
        "nav": 0.4876
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 0.5021
      },
      {
        "date": "2026-10-09",
        "nav": 0.4971
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.2725
      },
      {
        "date": "2026-10-09",
        "nav": 1.274
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.0994
      },
      {
        "date": "2026-10-09",
        "nav": 1.1089
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.3044
      },
      {
        "date": "2026-10-09",
        "nav": 1.2915
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.9123
      },
      {
        "date": "2026-10-09",
        "nav": 2.9094
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 2.954
      },
      {
        "date": "2026-10-09",
        "nav": 2.918
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 1.5341
      },
      {
        "date": "2026-10-09",
        "nav": 1.5287
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 0.5817
      },
      {
        "date": "2026-10-09",
        "nav": 0.5654
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-10-08",
        "nav": 13.078
      },
      {
        "date": "2026-10-09",
        "nav": 12.63
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 4.2108,
      "price": 4.2108,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 3.6654,
      "price": 3.6654,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.53,
      "nav": 5.0443,
      "price": 5.0443,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.0,
      "nav": 0.697,
      "price": 0.697,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.0018,
      "price": 2.0018,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.6661,
      "price": 2.6661,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.0,
      "nav": 5.2875,
      "price": 5.2875,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.866,
      "price": 1.866,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.2767,
      "price": 1.2767,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 3.018,
      "price": 3.018,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.115,
      "price": 1.115,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.443,
      "price": 2.443,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.5361,
      "price": 1.5361,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.0,
      "nav": 1.884,
      "price": 1.884,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.5888,
      "price": 1.5888,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 2.045,
      "price": 2.045,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.6323,
      "price": 2.6323,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.004,
      "price": 1.004,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.313,
      "price": 2.313,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.2811,
      "price": 1.2811,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 7.23,
      "sharpe": -0.07,
      "calmar": -0.07
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 7.05,
      "sharpe": -1.29,
      "calmar": -1.29
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 15.88,
      "sharpe": 0.83,
      "calmar": 0.83
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.01,
      "sharpe": -1.22,
      "calmar": -1.22
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.24,
      "sharpe": -4.87,
      "calmar": -4.87
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.39,
      "sharpe": -3.51,
      "calmar": -3.51
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.01,
      "sharpe": -1.49,
      "calmar": -1.49
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.44,
      "sharpe": -0.72,
      "calmar": -0.72
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.07,
      "sharpe": -0.73,
      "calmar": -0.73
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.96,
      "sharpe": 1.25,
      "calmar": 1.25
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.19,
      "sharpe": -0.47,
      "calmar": -0.47
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.68,
      "sharpe": -1.59,
      "calmar": -1.59
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 6.18,
      "sharpe": -5.16,
      "calmar": -5.16
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.06,
      "sharpe": 1.03,
      "calmar": 1.03
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.33,
      "sharpe": -0.66,
      "calmar": -0.66
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 11.7,
      "sharpe": 0.11,
      "calmar": 0.11
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.45,
      "sharpe": 0.05,
      "calmar": 0.05
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 6.3,
      "sharpe": -0.12,
      "calmar": -0.12
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.46,
      "sharpe": -0.75,
      "calmar": -0.75
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.74,
      "sharpe": 0.3,
      "calmar": 0.3
    }
  ],
  "news": [
    {
      "title": "据河南日报消息，10月9日，郑州新郑综合保税区扩区项目顺利通过联合简化验收：面积1.66平方公里的扩区片区各项条件全部达标，中部地区首个成功获批的综保区扩区项目进入封关运行倒计时。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:41",
      "impact": "neutral"
    },
    {
      "title": "记者从国家电网了解到，10月10日，山东胶东半岛清洁能源送出的关键通道，烟威1000千伏特高压工程正式竣工投产，这也是我国“十五五”时期投运的首个特高压交流输变电工程。烟威特高压工程线路全长1197公里，途经烟台、青岛、日照、潍坊、临沂5市。作为全国首个服务核电送出的特高压工程，投运后烟台海阳、莱阳等地的核电将通过该通道送往全省。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:37",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者闫刘梦）中金公司近日发布研报称，展望10月，经历调整后，业绩韧性与积极的稳增长信号有望支撑市场逐步回稳。流动性紧缩预期是前期拖累市场情绪的重要因素。中金公司表示，原油价格高位震荡，影响全球物价与需求，美联储点阵图及美期货数据显示年内美联储或再加息一次，美元指数与美债收益率上行至相对高位，但9月就业数据令美联储在中期选举前再次实施加息的概率下降。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:29",
      "impact": "neutral"
    },
    {
      "title": "《科创板日报》10月10日讯（记者史士云）“一位48岁的自由职业女性，医保买得时断时续。有一次正处在脱保期，她突发中毒，需要马上手术。同一间重症病房里，病情相当的病友花了超12万元，因为参加医保，绝大部分报销，个人只承担了5万多元。而该女性由于没参保，12余万元全部由自己扛。出院后，她专程到街道办理手续，直言医保不能忘，续保不能断。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:20",
      "impact": "neutral"
    },
    {
      "title": "10月10日，工业和信息化部会同公安部、生态环境部、市场监管总局等部门，研究起草并公布了《关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿）》，这将进一步提升产品安全性能，推动汽车产业高质量发展。记者从工业和信息化部了解到，征求意见稿针对部分生产企业跟风推出新产品、测试验证不充分等问题，提出了多方面的要求，新增51项车辆产品主要技术参数。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:06",
      "impact": "neutral"
    },
    {
      "title": "10月10日，据深圳市住房和建设局消息，为持续加大对住房公积金缴存职工住房消费的支持力度，深圳市住房公积金管理中心起草了《关于支持装修住房提取住房公积金等有关事项的通知（征求意见稿）》（简称《通知》），拟新增装修住房、支付住房物业费两类提取情形，并继续加大对无房职工租房提取的支持力度。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:05",
      "impact": "neutral"
    },
    {
      "title": "10月10日，农业农村部在京召开全国农业科技工作会议。会议强调，要聚焦“十五五”农业科技创新方向目标，扎实推进重点任务落实落地。要着力增加高质量农业科技成果供给，强化基础研究和前沿技术攻关，牢牢掌握农业科技创新主动权。要突出应用导向，聚焦产业需求凝练农业科研项目选题，推行有组织体系化科研攻关，把好科研成果验收关，用实践效益评价成果。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:03",
      "impact": "neutral"
    },
    {
      "title": "农业农村部10日在京召开全国农业科技工作会议。会议强调，要强化科技成果推广应用，狠抓农业技术集成，建好农技推广体系，用好多元化社会化技术服务力量，打通农业科技落地“最后一公里”。要加快农业科技创新条件平台建设，谋划布局一批农业重大科技基础设施、中试和概念验证平台等，发挥好国家农业高新技术产业示范区作用，深化农业科技领域国际合作。要强化农业科技人才队伍建设，大力培育战略科学家和领军人才，加快培育产业技术人才、青年科技人才，确保农业科技创新源头活水充盈。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:42",
      "impact": "neutral"
    },
    {
      "title": "10月10日，中国证监会党委书记、主席吴清在北京召开座谈会，与部分上市公司负责人、证券基金机构专家深入交流，就当前资本市场和金融形势充分听取意见建议。座谈会上，大家一致认为，我国宏观经济稳中向好，产业结构转型持续深化，资本市场运行总体稳健，多层次市场功能有效发挥，虽然面临一些风险挑战，但高质量发展的态势不会改变，对经济运行和资本市场充满信心。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:40",
      "impact": "neutral"
    },
    {
      "title": "日前，央行披露9月份各项工具流动性投放情况。各项加总显示，当月央行各项工具净投放资金5564亿元，其中，除隔夜、7天期外其他期限逆回购净投放4000亿元，MLF（中期借贷便利）净投放2000亿元，公开市场买卖国债投放1000亿元，抵押补充贷款（PSL）净回笼14亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:40",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 50,
    "label": "中性",
    "upDownRatio": "3,094/1,452",
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
