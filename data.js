// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-02 14:18:44
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-02 14:18 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-02",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3941.39,
      "change": -38.5,
      "changePct": "-0.97%",
      "high": 3965.81,
      "low": 3932.25,
      "volume": 516472775.0,
      "amount": 835367760000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13611.55,
      "change": -260.83,
      "changePct": "-1.88%",
      "high": 13732.18,
      "low": 13549.77,
      "volume": 611501283.0,
      "amount": 955810740000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3312.24,
      "change": -81.19,
      "changePct": "-2.39%",
      "high": 3348.69,
      "low": 3296.47,
      "volume": 165249225.0,
      "amount": 438699750000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1617.6,
      "change": -29.93,
      "changePct": "-1.82%",
      "high": 1635.76,
      "low": 1607.19,
      "volume": 7081557.0,
      "amount": 64341750000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4547.96,
      "change": -63.48,
      "changePct": "-1.38%",
      "high": 4583.27,
      "low": 4534.39,
      "volume": 186991888.0,
      "amount": 474680400000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7729.23,
      "change": -129.29,
      "changePct": "-1.65%",
      "high": 7783.05,
      "low": 7692.15,
      "volume": 164471755.0,
      "amount": 307340000000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.08万亿",
      "label": "成交额",
      "rawAmount": 3076240400000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,654/2,172",
      "label": "涨/跌家数",
      "rawUp": 1654,
      "rawDown": 2172,
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
    "totalInflow": 0.16,
    "totalOutflow": 0,
    "netFlow": 0.16,
    "netFlowTrend": [
      0.03,
      0.06,
      0.1,
      0.13,
      0.16
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
      "name": "军工",
      "inflow": 1.74,
      "pct": 0.09
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -1.53
    },
    {
      "name": "食品",
      "inflow": -0.05,
      "pct": -0.8
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -1.67
    },
    {
      "name": "家电",
      "inflow": -0.16,
      "pct": -0.97
    },
    {
      "name": "游戏",
      "inflow": -0.2,
      "pct": -1.56
    },
    {
      "name": "电子",
      "inflow": -0.21,
      "pct": -1.31
    },
    {
      "name": "云计算",
      "inflow": -0.27,
      "pct": -1.86
    },
    {
      "name": "光伏",
      "inflow": -0.3,
      "pct": -1.82
    },
    {
      "name": "钢铁",
      "inflow": -0.3,
      "pct": -1.93
    },
    {
      "name": "地产",
      "inflow": -0.37,
      "pct": -0.9
    },
    {
      "name": "人工智能",
      "inflow": -0.53,
      "pct": -1.73
    },
    {
      "name": "医疗",
      "inflow": -0.93,
      "pct": -0.88
    },
    {
      "name": "医药",
      "inflow": -0.95,
      "pct": -0.26
    },
    {
      "name": "白酒",
      "inflow": -1.1,
      "pct": -1.4
    },
    {
      "name": "芯片",
      "inflow": -1.75,
      "pct": -1.67
    },
    {
      "name": "创新药",
      "inflow": -1.82,
      "pct": -0.71
    },
    {
      "name": "5G",
      "inflow": -2.11,
      "pct": -1.85
    },
    {
      "name": "银行",
      "inflow": -2.81,
      "pct": -0.24
    },
    {
      "name": "半导体",
      "inflow": -3.32,
      "pct": -1.94
    }
  ],
  "sectors": [
    {
      "name": "军工",
      "code": "512660",
      "price": 1.142,
      "changePct": 0.09,
      "change": 0.001,
      "turnover": 5.8
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.844,
      "changePct": -0.24,
      "change": -0.002,
      "turnover": 9.37
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.377,
      "changePct": -0.26,
      "change": -0.001,
      "turnover": 3.16
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.843,
      "changePct": -0.71,
      "change": -0.006,
      "turnover": 6.08
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.497,
      "changePct": -0.8,
      "change": -0.004,
      "turnover": 0.17
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.338,
      "changePct": -0.88,
      "change": -0.003,
      "turnover": 3.11
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.208,
      "changePct": -0.9,
      "change": -0.011,
      "turnover": 1.22
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.429,
      "changePct": -0.97,
      "change": -0.014,
      "turnover": 0.53
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.831,
      "changePct": -1.31,
      "change": -0.011,
      "turnover": 0.7
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.423,
      "changePct": -1.4,
      "change": -0.006,
      "turnover": 3.66
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.03,
      "changePct": -1.53,
      "change": -0.016,
      "turnover": 0.07
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.075,
      "changePct": -1.56,
      "change": -0.017,
      "turnover": 0.68
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.121,
      "changePct": -1.67,
      "change": -0.019,
      "turnover": 5.82
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.177,
      "changePct": -1.67,
      "change": -0.02,
      "turnover": 0.25
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.02,
      "changePct": -1.73,
      "change": -0.018,
      "turnover": 1.78
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.811,
      "changePct": -1.82,
      "change": -0.015,
      "turnover": 1.01
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.009,
      "changePct": -1.85,
      "change": -0.019,
      "turnover": 7.04
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.685,
      "changePct": -1.86,
      "change": -0.032,
      "turnover": 0.91
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.17,
      "changePct": -1.93,
      "change": -0.023,
      "turnover": 0.99
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.01,
      "changePct": -1.94,
      "change": -0.02,
      "turnover": 11.06
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.521,
      "changePct": -2.07,
      "change": -0.011,
      "turnover": 9.12
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.648,
      "changePct": -2.11,
      "change": -0.014,
      "turnover": 24.07
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.364,
      "changePct": -2.15,
      "change": -0.052,
      "turnover": 1.21
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.557,
      "changePct": -2.38,
      "change": -0.038,
      "turnover": 0.99
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.83,
      "changePct": -2.47,
      "change": -0.021,
      "turnover": 3.27
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.886,
      "changePct": -2.53,
      "change": -0.049,
      "turnover": 12.4
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.748,
      "changePct": -2.6,
      "change": -0.02,
      "turnover": 1.33
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.303,
      "changePct": -2.91,
      "change": -0.039,
      "turnover": 16.34
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.364,
      "changePct": -2.15,
      "amount": 1.21,
      "netFlow": -0.3
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.377,
      "changePct": -0.26,
      "amount": 3.16,
      "netFlow": -0.79
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.819,
      "changePct": -1.43,
      "amount": 4.87,
      "netFlow": -1.22
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.482,
      "changePct": -1.43,
      "amount": 6.24,
      "netFlow": -1.56
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.521,
      "changePct": -2.07,
      "amount": 9.12,
      "netFlow": -2.28
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.01,
      "changePct": -1.94,
      "amount": 11.06,
      "netFlow": -2.76
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.025,
      "changePct": -0.98,
      "amount": 12.28,
      "netFlow": -3.07
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.751,
      "changePct": -1.65,
      "amount": 29.14,
      "netFlow": -7.29
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.62,
      "changePct": -1.37,
      "amount": 29.41,
      "netFlow": -7.35
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.708,
      "changePct": -1.84,
      "amount": 50.2,
      "netFlow": -12.55
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.62,
      "changePct": -1.37,
      "amount": 29.41,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.025,
      "changePct": -0.98,
      "amount": 12.28,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.751,
      "changePct": -1.65,
      "amount": 29.14,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.819,
      "changePct": -1.43,
      "amount": 4.87,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.482,
      "changePct": -1.43,
      "amount": 6.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "军工",
      "turnover": 5.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 9.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.08,
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
      "name": "医疗",
      "turnover": 3.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.7,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.07,
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
      "name": "芯片",
      "turnover": 5.82,
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
      "name": "人工智能",
      "turnover": 1.78,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.01,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 7.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.91,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.99,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.06,
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
      "nav": 4.497,
      "ret1w": -0.49,
      "ret1m": 1.45,
      "ret3m": 18.56,
      "ret6m": -8.63,
      "ret1y": -3.41,
      "ret2y": 25.75,
      "ret3y": 161.91
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.0892,
      "ret1w": -1.72,
      "ret1m": -2.35,
      "ret3m": 4.82,
      "ret6m": -19.14,
      "ret1y": 1.63,
      "ret2y": 3.18,
      "ret3y": 68.04
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.5226,
      "ret1w": -2.13,
      "ret1m": -0.74,
      "ret3m": 31.89,
      "ret6m": -6.36,
      "ret1y": 34.64,
      "ret2y": 82.24,
      "ret3y": 284.58
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7212,
      "ret1w": -0.39,
      "ret1m": 1.76,
      "ret3m": -2.78,
      "ret6m": 3.59,
      "ret1y": -9.0,
      "ret2y": -13.17,
      "ret3y": 8.35
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0648,
      "ret1w": -2.49,
      "ret1m": -5.4,
      "ret3m": -6.72,
      "ret6m": -16.72,
      "ret1y": -30.65,
      "ret2y": -20.35,
      "ret3y": 18.33
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6866,
      "ret1w": -1.89,
      "ret1m": -3.07,
      "ret3m": -2.87,
      "ret6m": -13.36,
      "ret1y": -31.66,
      "ret2y": -14.05,
      "ret3y": 31.7
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4952,
      "ret1w": -1.49,
      "ret1m": -1.28,
      "ret3m": -2.0,
      "ret6m": -0.19,
      "ret1y": -7.86,
      "ret2y": 12.9,
      "ret3y": 59.48
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.894,
      "ret1w": -1.15,
      "ret1m": 1.39,
      "ret3m": 7.31,
      "ret6m": -5.63,
      "ret1y": -6.42,
      "ret2y": 6.52,
      "ret3y": 73.13
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3325,
      "ret1w": -1.57,
      "ret1m": 0.22,
      "ret3m": 3.5,
      "ret6m": -5.41,
      "ret1y": -2.12,
      "ret2y": 9.15,
      "ret3y": 45.1
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.413,
      "ret1w": -1.02,
      "ret1m": 0.29,
      "ret3m": 5.47,
      "ret6m": -1.3,
      "ret1y": 27.35,
      "ret2y": 71.42,
      "ret3y": 293.66
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.119,
      "ret1w": -0.8,
      "ret1m": 0.9,
      "ret3m": -1.41,
      "ret6m": 2.47,
      "ret1y": -5.57,
      "ret2y": -16.93,
      "ret3y": 5.97
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.375,
      "ret1w": -0.29,
      "ret1m": -0.42,
      "ret3m": 3.13,
      "ret6m": 0.42,
      "ret1y": -14.72,
      "ret2y": -13.82,
      "ret3y": 37.36
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6917,
      "ret1w": -1.9,
      "ret1m": -4.1,
      "ret3m": -1.5,
      "ret6m": -37.89,
      "ret1y": -51.57,
      "ret2y": -37.83,
      "ret3y": 21.71
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9405,
      "ret1w": -0.9,
      "ret1m": 0.51,
      "ret3m": -0.37,
      "ret6m": 8.09,
      "ret1y": -2.14,
      "ret2y": -4.74,
      "ret3y": 10.01
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6516,
      "ret1w": -1.12,
      "ret1m": 0.48,
      "ret3m": 9.3,
      "ret6m": -5.62,
      "ret1y": -5.96,
      "ret2y": 9.89,
      "ret3y": 74.57
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3023,
      "ret1w": -1.86,
      "ret1m": -2.94,
      "ret3m": 9.98,
      "ret6m": -16.74,
      "ret1y": 19.99,
      "ret2y": 77.65,
      "ret3y": 227.03
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.551,
      "ret1w": -0.85,
      "ret1m": -0.63,
      "ret3m": 0.35,
      "ret6m": -3.9,
      "ret1y": -10.82,
      "ret2y": -5.59,
      "ret3y": 24.14
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.017,
      "ret1w": 0.1,
      "ret1m": -2.68,
      "ret3m": 2.42,
      "ret6m": 13.76,
      "ret1y": 5.06,
      "ret2y": -15.81,
      "ret3y": 6.49
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3491,
      "ret1w": -0.71,
      "ret1m": 0.09,
      "ret3m": -1.7,
      "ret6m": 0.04,
      "ret1y": -7.04,
      "ret2y": 5.24,
      "ret3y": 17.5
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3318,
      "ret1w": -0.72,
      "ret1m": 0.84,
      "ret3m": 8.27,
      "ret6m": 3.26,
      "ret1y": -0.57,
      "ret2y": 20.54,
      "ret3y": 82.31
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2499,
      "ret1w": -1.3,
      "ret1m": -1.76,
      "ret3m": 0.71,
      "ret6m": -8.57,
      "ret1y": -10.18,
      "ret2y": 13.54,
      "ret3y": 48.76
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3296,
      "ret1w": -1.29,
      "ret1m": -1.75,
      "ret3m": 0.75,
      "ret6m": -8.48,
      "ret1y": -10.01,
      "ret2y": 13.98,
      "ret3y": 49.95
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0834,
      "ret1w": -0.6,
      "ret1m": -0.83,
      "ret3m": -1.57,
      "ret6m": -2.95,
      "ret1y": -0.4,
      "ret2y": 1.28,
      "ret3y": 8.33
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0566,
      "ret1w": -0.59,
      "ret1m": -0.83,
      "ret3m": -1.52,
      "ret6m": -2.8,
      "ret1y": -0.09,
      "ret2y": 1.89,
      "ret3y": 9.64
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7168,
      "ret1w": -0.29,
      "ret1m": -0.9,
      "ret3m": -3.21,
      "ret6m": -5.5,
      "ret1y": -13.42,
      "ret2y": -8.06,
      "ret3y": 14.16
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.735,
      "ret1w": -0.28,
      "ret1m": -0.88,
      "ret3m": -3.16,
      "ret6m": -5.37,
      "ret1y": -13.19,
      "ret2y": -7.59,
      "ret3y": 15.31
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7641,
      "ret1w": -1.59,
      "ret1m": -0.2,
      "ret3m": 8.4,
      "ret6m": -10.29,
      "ret1y": 28.22,
      "ret2y": 56.19,
      "ret3y": 162.17
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5142,
      "ret1w": -1.31,
      "ret1m": -1.17,
      "ret3m": 3.05,
      "ret6m": -2.58,
      "ret1y": -0.32,
      "ret2y": 19.43,
      "ret3y": 89.68
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7435,
      "ret1w": -1.12,
      "ret1m": 0.94,
      "ret3m": 2.33,
      "ret6m": -11.92,
      "ret1y": -16.13,
      "ret2y": -8.1,
      "ret3y": 19.67
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1817,
      "ret1w": -1.97,
      "ret1m": 0.82,
      "ret3m": 4.77,
      "ret6m": -3.43,
      "ret1y": 15.2,
      "ret2y": 38.3,
      "ret3y": 148.91
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5048,
      "ret1w": -1.04,
      "ret1m": 0.44,
      "ret3m": -3.92,
      "ret6m": -5.47,
      "ret1y": -6.28,
      "ret2y": 11.85,
      "ret3y": 50.78
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5145,
      "ret1w": -1.04,
      "ret1m": 0.45,
      "ret3m": -3.89,
      "ret6m": -5.37,
      "ret1y": -6.08,
      "ret2y": 12.31,
      "ret3y": 51.99
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2841,
      "ret1w": -0.6,
      "ret1m": 0.08,
      "ret3m": 0.01,
      "ret6m": -0.74,
      "ret1y": -0.53,
      "ret2y": -0.18,
      "ret3y": 1.65
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1262,
      "ret1w": -0.92,
      "ret1m": -0.42,
      "ret3m": -1.76,
      "ret6m": 3.0,
      "ret1y": -8.32,
      "ret2y": -1.37,
      "ret3y": 19.78
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3965,
      "ret1w": -0.9,
      "ret1m": -1.29,
      "ret3m": 1.71,
      "ret6m": -14.31,
      "ret1y": -7.51,
      "ret2y": -13.94,
      "ret3y": 16.89
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0222,
      "ret1w": -1.08,
      "ret1m": 0.74,
      "ret3m": 0.67,
      "ret6m": -2.47,
      "ret1y": -8.38,
      "ret2y": 11.9,
      "ret3y": 52.71
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.275,
      "ret1w": -1.24,
      "ret1m": -0.24,
      "ret3m": 4.0,
      "ret6m": -19.65,
      "ret1y": 27.28,
      "ret2y": 63.34,
      "ret3y": 206.07
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5166,
      "ret1w": -0.34,
      "ret1m": 1.17,
      "ret3m": 0.31,
      "ret6m": 1.76,
      "ret1y": 1.26,
      "ret2y": 0.4,
      "ret3y": 14.78
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6408,
      "ret1w": -0.44,
      "ret1m": 2.68,
      "ret3m": 13.34,
      "ret6m": -11.98,
      "ret1y": -13.74,
      "ret2y": 5.22,
      "ret3y": 56.06
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.869,
      "ret1w": -1.51,
      "ret1m": -0.97,
      "ret3m": 8.64,
      "ret6m": -5.81,
      "ret1y": 59.89,
      "ret2y": 109.88,
      "ret3y": 352.94
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.065,
      "ret1w": -0.21,
      "ret1m": -0.1,
      "ret3m": 0.11,
      "ret6m": -1.45,
      "ret1y": -0.41,
      "ret2y": 1.42,
      "ret3y": 4.65
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1135,
      "ret1w": -0.2,
      "ret1m": -0.1,
      "ret3m": 0.13,
      "ret6m": -1.38,
      "ret1y": -0.28,
      "ret2y": 1.71,
      "ret3y": 5.38
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.064,
      "ret1w": -0.01,
      "ret1m": -0.02,
      "ret3m": 0.05,
      "ret6m": 0.2,
      "ret1y": 0.7,
      "ret2y": 1.46,
      "ret3y": 2.66
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0987,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.11,
      "ret6m": 0.23,
      "ret1y": 0.78,
      "ret2y": 1.47,
      "ret3y": 3.84
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1081,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.13,
      "ret6m": 0.28,
      "ret1y": 0.88,
      "ret2y": 1.67,
      "ret3y": 4.27
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.076,
      "ret1w": 0.0,
      "ret1m": 0.0,
      "ret3m": 0.08,
      "ret6m": 0.26,
      "ret1y": 0.7,
      "ret2y": 1.37,
      "ret3y": 2.8
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0904,
      "ret1w": 0.0,
      "ret1m": 0.0,
      "ret3m": 0.1,
      "ret6m": 0.33,
      "ret1y": 0.85,
      "ret2y": 1.68,
      "ret3y": 3.45
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0644,
      "ret1w": -0.56,
      "ret1m": -0.08,
      "ret3m": 1.17,
      "ret6m": -2.78,
      "ret1y": -0.13,
      "ret2y": 5.56,
      "ret3y": 12.98
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2189,
      "ret1w": -0.51,
      "ret1m": 0.19,
      "ret3m": 2.28,
      "ret6m": -2.98,
      "ret1y": -0.51,
      "ret2y": 2.6,
      "ret3y": 7.6
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0711,
      "ret1w": -0.56,
      "ret1m": -0.07,
      "ret3m": 1.2,
      "ret6m": -2.68,
      "ret1y": 0.06,
      "ret2y": 6.0,
      "ret3y": 13.89
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0457,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.14,
      "ret6m": 0.3,
      "ret1y": 0.84,
      "ret2y": 1.71,
      "ret3y": 3.57
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1631,
      "ret1w": -0.39,
      "ret1m": -0.59,
      "ret3m": 0.43,
      "ret6m": -3.92,
      "ret1y": -4.08,
      "ret2y": 0.26,
      "ret3y": 9.87
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2153,
      "ret1w": -0.26,
      "ret1m": -0.1,
      "ret3m": -0.34,
      "ret6m": -0.87,
      "ret1y": -1.0,
      "ret2y": 4.01,
      "ret3y": 15.35
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1371,
      "ret1w": -0.2,
      "ret1m": -0.21,
      "ret3m": 0.79,
      "ret6m": -1.06,
      "ret1y": -0.08,
      "ret2y": 3.29,
      "ret3y": 10.3
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2084,
      "ret1w": -0.2,
      "ret1m": -0.21,
      "ret3m": 0.83,
      "ret6m": -0.96,
      "ret1y": 0.12,
      "ret2y": 3.71,
      "ret3y": 11.22
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.332,
      "ret1w": -1.1,
      "ret1m": -0.13,
      "ret3m": 4.2,
      "ret6m": -12.99,
      "ret1y": 32.8,
      "ret2y": 95.64,
      "ret3y": 133.9
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9671,
      "ret1w": -0.58,
      "ret1m": -0.17,
      "ret3m": 1.67,
      "ret6m": 0.14,
      "ret1y": 7.66,
      "ret2y": 7.91,
      "ret3y": 33.48
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8767,
      "ret1w": -0.62,
      "ret1m": 1.04,
      "ret3m": -0.1,
      "ret6m": -11.32,
      "ret1y": -13.18,
      "ret2y": 3.57,
      "ret3y": 56.34
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3592,
      "ret1w": -1.79,
      "ret1m": -2.78,
      "ret3m": 8.95,
      "ret6m": -1.99,
      "ret1y": 17.63,
      "ret2y": 29.46,
      "ret3y": 73.28
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9341,
      "ret1w": -0.21,
      "ret1m": -0.7,
      "ret3m": -0.04,
      "ret6m": -1.02,
      "ret1y": -3.72,
      "ret2y": -3.5,
      "ret3y": -1.51
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.5909,
      "ret1w": -1.15,
      "ret1m": -1.45,
      "ret3m": 0.5,
      "ret6m": -11.08,
      "ret1y": 20.87,
      "ret2y": 53.25,
      "ret3y": 90.9
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.589,
      "ret1w": -0.56,
      "ret1m": -0.95,
      "ret3m": 1.48,
      "ret6m": -2.13,
      "ret1y": 2.27,
      "ret2y": 6.62,
      "ret3y": 20.23
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.213,
      "ret1w": -1.7,
      "ret1m": -4.64,
      "ret3m": 3.5,
      "ret6m": 5.3,
      "ret1y": -5.68,
      "ret2y": -21.64,
      "ret3y": 108.06
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.949,
      "ret1w": -1.15,
      "ret1m": -3.26,
      "ret3m": 6.03,
      "ret6m": -0.94,
      "ret1y": -10.3,
      "ret2y": -21.38,
      "ret3y": 46.22
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8403,
      "ret1w": -0.17,
      "ret1m": 0.22,
      "ret3m": 3.05,
      "ret6m": -12.59,
      "ret1y": 25.88,
      "ret2y": 78.43,
      "ret3y": 139.08
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6245,
      "ret1w": -0.12,
      "ret1m": -1.49,
      "ret3m": 11.18,
      "ret6m": 6.73,
      "ret1y": 0.51,
      "ret2y": 40.12,
      "ret3y": 56.41
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7402,
      "ret1w": 0.58,
      "ret1m": 1.57,
      "ret3m": 2.57,
      "ret6m": -0.53,
      "ret1y": 7.68,
      "ret2y": 32.0,
      "ret3y": 58.09
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3322,
      "ret1w": 0.11,
      "ret1m": 0.78,
      "ret3m": 3.15,
      "ret6m": -4.18,
      "ret1y": 1.25,
      "ret2y": 20.23,
      "ret3y": 40.74
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.297,
      "ret1w": -0.15,
      "ret1m": -2.77,
      "ret3m": -2.41,
      "ret6m": 0.78,
      "ret1y": -0.99,
      "ret2y": 3.43,
      "ret3y": -8.27
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.078,
      "ret1w": -2.12,
      "ret1m": -6.48,
      "ret3m": 6.67,
      "ret6m": -3.75,
      "ret1y": -18.51,
      "ret2y": 16.41,
      "ret3y": 54.18
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0109,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": 0.17,
      "ret6m": 0.32,
      "ret1y": 1.42,
      "ret2y": 2.02,
      "ret3y": 3.56
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0098,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": 0.18,
      "ret6m": 0.3,
      "ret1y": 1.43,
      "ret2y": 2.07,
      "ret3y": 3.74
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.4,
      "ret1w": -1.41,
      "ret1m": -1.27,
      "ret3m": -1.62,
      "ret6m": -11.05,
      "ret1y": -3.38,
      "ret2y": 0.5,
      "ret3y": 36.59
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.795,
      "ret1w": -1.76,
      "ret1m": -1.27,
      "ret3m": 1.6,
      "ret6m": -9.19,
      "ret1y": -4.25,
      "ret2y": 10.96,
      "ret3y": 63.45
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6902,
      "ret1w": -1.91,
      "ret1m": -1.29,
      "ret3m": 4.94,
      "ret6m": -3.25,
      "ret1y": -17.87,
      "ret2y": 27.24,
      "ret3y": 71.42
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1219,
      "ret1w": -1.45,
      "ret1m": -0.59,
      "ret3m": 0.71,
      "ret6m": -3.96,
      "ret1y": -0.06,
      "ret2y": 8.85,
      "ret3y": 43.93
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1826,
      "ret1w": -1.45,
      "ret1m": -0.58,
      "ret3m": 0.74,
      "ret6m": -3.87,
      "ret1y": 0.14,
      "ret2y": 9.29,
      "ret3y": 45.08
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9949,
      "ret1w": -1.55,
      "ret1m": -0.49,
      "ret3m": 2.94,
      "ret6m": -6.51,
      "ret1y": -9.75,
      "ret2y": 11.25,
      "ret3y": 68.6
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7764,
      "ret1w": -1.31,
      "ret1m": -0.85,
      "ret3m": -0.75,
      "ret6m": -6.49,
      "ret1y": -2.81,
      "ret2y": 2.43,
      "ret3y": 40.73
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5748,
      "ret1w": -1.41,
      "ret1m": -0.66,
      "ret3m": 0.02,
      "ret6m": -3.86,
      "ret1y": -10.94,
      "ret2y": 11.32,
      "ret3y": 57.15
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9314,
      "ret1w": -1.77,
      "ret1m": -1.91,
      "ret3m": -1.12,
      "ret6m": -13.15,
      "ret1y": 4.8,
      "ret2y": 13.05,
      "ret3y": 76.8
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1641,
      "ret1w": -0.93,
      "ret1m": -0.8,
      "ret3m": -1.01,
      "ret6m": -0.52,
      "ret1y": -0.91,
      "ret2y": 1.96,
      "ret3y": 30.71
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5244,
      "ret1w": null,
      "ret1m": -1.35,
      "ret3m": 0.11,
      "ret6m": 4.44,
      "ret1y": -0.5,
      "ret2y": 12.66,
      "ret3y": 27.77
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4014,
      "ret1w": -1.23,
      "ret1m": -0.49,
      "ret3m": 2.4,
      "ret6m": -4.72,
      "ret1y": 13.32,
      "ret2y": 16.22,
      "ret3y": 36.48
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.713,
      "ret1w": -1.91,
      "ret1m": -2.55,
      "ret3m": -1.37,
      "ret6m": -12.52,
      "ret1y": 0.2,
      "ret2y": 7.99,
      "ret3y": 59.25
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1968,
      "ret1w": 0.2,
      "ret1m": 2.04,
      "ret3m": 6.6,
      "ret6m": -6.68,
      "ret1y": -0.85,
      "ret2y": 9.1,
      "ret3y": 54.51
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1986,
      "ret1w": 0.2,
      "ret1m": 2.05,
      "ret3m": 6.61,
      "ret6m": -6.65,
      "ret1y": -0.87,
      "ret2y": 9.06,
      "ret3y": 53.94
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4049,
      "ret1w": -0.93,
      "ret1m": 0.75,
      "ret3m": 3.97,
      "ret6m": -8.42,
      "ret1y": -7.03,
      "ret2y": 0.69,
      "ret3y": 40.38
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.437,
      "ret1w": -0.93,
      "ret1m": 0.76,
      "ret3m": 4.0,
      "ret6m": -8.33,
      "ret1y": -6.84,
      "ret2y": 1.09,
      "ret3y": 41.52
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.017,
      "ret1w": -1.6,
      "ret1m": 0.63,
      "ret3m": 1.26,
      "ret6m": -9.57,
      "ret1y": -2.7,
      "ret2y": 7.62,
      "ret3y": 63.23
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1651,
      "ret1w": -0.13,
      "ret1m": -0.21,
      "ret3m": -0.31,
      "ret6m": -0.46,
      "ret1y": -0.38,
      "ret2y": 2.07,
      "ret3y": 7.89
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.185,
      "ret1w": -0.13,
      "ret1m": -0.19,
      "ret3m": -0.28,
      "ret6m": -0.39,
      "ret1y": -0.23,
      "ret2y": 2.38,
      "ret3y": 8.55
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0839,
      "ret1w": -0.01,
      "ret1m": -0.02,
      "ret3m": 0.06,
      "ret6m": 0.27,
      "ret1y": 0.85,
      "ret2y": 1.76,
      "ret3y": 3.25
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4098,
      "ret1w": -0.01,
      "ret1m": -0.02,
      "ret3m": -0.07,
      "ret6m": -0.03,
      "ret1y": 0.09,
      "ret2y": 0.68,
      "ret3y": 11.53
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4621,
      "ret1w": 0.0,
      "ret1m": -0.01,
      "ret3m": -0.03,
      "ret6m": 0.08,
      "ret1y": 0.3,
      "ret2y": 1.09,
      "ret3y": 12.43
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0957,
      "ret1w": -0.82,
      "ret1m": -0.38,
      "ret3m": 0.5,
      "ret6m": 0.9,
      "ret1y": 9.26,
      "ret2y": 22.27,
      "ret3y": 65.55
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2389,
      "ret1w": -0.99,
      "ret1m": -1.3,
      "ret3m": -0.42,
      "ret6m": -1.95,
      "ret1y": 2.72,
      "ret2y": 11.98,
      "ret3y": 50.72
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 4.497,
      "price": 4.497,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 4.0892,
      "price": 4.0892,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.04,
      "nav": 5.5226,
      "price": 5.5226,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.09,
      "nav": 0.7212,
      "price": 0.7212,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 2.0648,
      "price": 2.0648,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.15,
      "nav": 2.6866,
      "price": 2.6866,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 5.4952,
      "price": 5.4952,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.894,
      "price": 1.894,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.3325,
      "price": 1.3325,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 3.413,
      "price": 3.413,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.119,
      "price": 1.119,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.375,
      "price": 2.375,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.6917,
      "price": 1.6917,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.9405,
      "price": 1.9405,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.6516,
      "price": 1.6516,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 2.3023,
      "price": 2.3023,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.551,
      "price": 2.551,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.017,
      "price": 1.017,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 2.3491,
      "price": 2.3491,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.3318,
      "price": 1.3318,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.17,
      "sharpe": -0.53,
      "calmar": -0.53
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.53,
      "sharpe": 0.22,
      "calmar": 0.22
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 1.11,
      "sharpe": 6.03,
      "calmar": 6.03
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.64,
      "sharpe": -1.33,
      "calmar": -1.33
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 8.1,
      "sharpe": -2.95,
      "calmar": -2.95
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 4.6,
      "sharpe": -3.92,
      "calmar": -3.92
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.92,
      "sharpe": -1.25,
      "calmar": -1.25
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.08,
      "sharpe": -1.0,
      "calmar": -1.0
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.33,
      "sharpe": -0.41,
      "calmar": -0.41
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.43,
      "sharpe": 5.17,
      "calmar": 5.17
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.35,
      "sharpe": -0.94,
      "calmar": -0.94
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.63,
      "sharpe": -2.72,
      "calmar": -2.72
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 6.15,
      "sharpe": -5.67,
      "calmar": -5.67
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.77,
      "sharpe": -0.39,
      "calmar": -0.39
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.72,
      "sharpe": -1.09,
      "calmar": -1.09
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.41,
      "sharpe": 2.52,
      "calmar": 2.52
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.95,
      "sharpe": -1.92,
      "calmar": -1.92
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 4.02,
      "sharpe": 0.66,
      "calmar": 0.66
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.14,
      "sharpe": -1.38,
      "calmar": -1.38
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.26,
      "sharpe": -0.1,
      "calmar": -0.1
    }
  ],
  "news": [
    {
      "title": "8月31日，国务院常务会议审议通过《中华人民共和国审计法实施条例（修订草案）》。这是继2021年《审计法》修改后，审计法治体系建设的又一重要举措，标志着我国审计法律制度体系进一步完善。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:01",
      "impact": "neutral"
    },
    {
      "title": "外交部副部长马朝旭9月2日会见美中贸易全国委员会董事会主席麦凯恩率领的访华团，双方就中美关系、经贸合作、人文交流等交换了意见。美中贸易全国委员会会长谭森等参加会见。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:58",
      "impact": "neutral"
    },
    {
      "title": "1、央行行长潘功胜出席G20财长和央行行长会议，强调继续实施好适度宽松的货币政策。2、国家能源局部署新型电网建设，要求着力加强多元支撑保障，升级高品质供电、算电协同等新业态友好适配的电网新服务。3、马斯克预测AI或推动全球经济增长20%至30%，到明年年底，AI将能够处理几乎所有数字任务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:45",
      "impact": "neutral"
    },
    {
      "title": "医保“打包付费”3.0版来了，着力从源头缓解因“分组与临床实际不匹配”造成的医疗机构政策性亏损。9月2日，国家医保局发布按病组（DRG）和病种分值（DIP）付费3.0版分组方案和技术规范，这是继2019年的1.0版、2024年2.0版分组方案之后的第三次调整。经过前期三年试点与三年专项行动，按病种付费已基本实现符合条件的统筹地区、医疗机构全覆盖。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:42",
      "impact": "neutral"
    },
    {
      "title": "据央视新闻，从9月2日举行的长三角生态绿色一体化发展示范区联合招商会上了解到，《关于加强水乡客厅联合招商工作的若干举措》日前正式印发。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:38",
      "impact": "neutral"
    },
    {
      "title": "中新社北京9月2日电8月31日至9月1日，二十国集团(G20)在美国阿什维尔召开今年第二次财长和央行行长会议。中国央行行长潘功胜在会上表示，解决全球失衡应着眼于中期承诺。各国都应制定中长期政策方案，做出明确承诺并坚定执行，避免来回“翻烧饼”。据中国央行9月2日公布的新闻稿，与会各方认为全球经济增长面临多重风险挑战但仍保持韧性。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:29",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者刘暄）《北京市“十五五”时期高水平开放型经济发展规划》（下称《规划》）日前发布。《规划》提出，到2030年，北京市加速形成全球数字经济示范引领地、全球医药健康创新策源地、国际现代服务产业集聚地、双向互促的开放高地。《规划》提出，到2035年，北京市在服务国家对外开放新格局中走在前列，参与国际经贸规则治理能力大幅提升，更高水平开放型经济新优势进一步增强。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:19",
      "impact": "neutral"
    },
    {
      "title": "2026年9月1日，离境退税“即买即退”全国通办正式落地实施，境外旅客可在全国任一口岸办理退税，无须返回购物地，真正实现“一次购物、多地畅游、任选口岸离境”。新政生效前夕，韩国游客崔贞润在北京市王府井大街某品牌运动相机专卖店购买了一台相机，通过扫码完成信息采集，875元退税款当场到账。之后，崔贞润准备从上海浦东机场离境。按照之前的规定，她必须飞回北京办理退税核销。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:03",
      "impact": "neutral"
    },
    {
      "title": "9月2日，国家医保局举行按病种付费3.0版分组方案新闻发布会，正式发布按病组（DRG）和病种分值（DIP）付费3.0版分组方案。这是继2019年的1.0版分组、2024年2.0版分组方案之后，对分组方案的又一次系统性优化。与2.0版相比，3.0版分组导向更清晰，分组更精细，标准更匹配临床实际。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:55",
      "impact": "neutral"
    },
    {
      "title": "中国兼具超大规模与创新动能的市场，为世界提供了独一无二的机遇。“放眼世界，中国可能是唯一兼具‘大’和‘新’两个特点的富有潜力市场。”9月1日，中方在北京会见美中贸易全国委员会董事会访华团时，说了这句很有分量的话。它不仅是市场判断，更是对美国商界的明确邀约。唯一兼具“大”与“新”，到底意味着什么？大，是有底气。2025年，中国社会消费品零售总额突破50万亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:52",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 44,
    "label": "中性",
    "upDownRatio": "1,654/2,172",
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
