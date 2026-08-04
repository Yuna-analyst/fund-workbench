// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-04 17:03:15
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-04 17:03 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-04",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3822.28,
      "change": 12.62,
      "changePct": "+0.33%",
      "high": 3831.94,
      "low": 3799.52,
      "volume": 540324922.0,
      "amount": 1008382540000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13885.71,
      "change": 437.42,
      "changePct": "+3.25%",
      "high": 13936.52,
      "low": 13537.76,
      "volume": 664836577.0,
      "amount": 1205209290000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3488.97,
      "change": 186.42,
      "changePct": "+5.64%",
      "high": 3510.51,
      "low": 3342.41,
      "volume": 211106623.0,
      "amount": 601613220000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1616.36,
      "change": 63.47,
      "changePct": "+4.09%",
      "high": 1631.01,
      "low": 1556.11,
      "volume": 11344343.0,
      "amount": 126488480000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4600.93,
      "change": 57.75,
      "changePct": "+1.27%",
      "high": 4613.69,
      "low": 4555.25,
      "volume": 242073611.0,
      "amount": 698818110000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7607.49,
      "change": 192.97,
      "changePct": "+2.60%",
      "high": 7645.48,
      "low": 7450.32,
      "volume": 203534896.0,
      "amount": 443792060000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.08万亿",
      "label": "成交额",
      "rawAmount": 4084303700000.0,
      "change": ""
    },
    "upDown": {
      "val": "5,290/354",
      "label": "涨/跌家数",
      "rawUp": 5290,
      "rawDown": 354,
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
    "totalInflow": 47.12,
    "totalOutflow": 0,
    "netFlow": 47.12,
    "netFlowTrend": [
      9.42,
      18.85,
      28.27,
      37.7,
      47.12
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
      "inflow": 17.41,
      "pct": 9.45
    },
    {
      "name": "半导体",
      "inflow": 7.43,
      "pct": 5.21
    },
    {
      "name": "5G",
      "inflow": 4.63,
      "pct": 8.95
    },
    {
      "name": "芯片",
      "inflow": 3.86,
      "pct": 5.39
    },
    {
      "name": "创新药",
      "inflow": 3.72,
      "pct": 3.38
    },
    {
      "name": "医药",
      "inflow": 2.52,
      "pct": 2.41
    },
    {
      "name": "有色",
      "inflow": 2.48,
      "pct": 1.74
    },
    {
      "name": "传媒",
      "inflow": 1.9,
      "pct": 3.17
    },
    {
      "name": "医疗",
      "inflow": 1.85,
      "pct": 1.83
    },
    {
      "name": "人工智能",
      "inflow": 1.32,
      "pct": 6.6
    },
    {
      "name": "云计算",
      "inflow": 1.08,
      "pct": 4.69
    },
    {
      "name": "军工",
      "inflow": 0.84,
      "pct": 1.36
    },
    {
      "name": "新能源",
      "inflow": 0.64,
      "pct": 1.39
    },
    {
      "name": "光伏",
      "inflow": 0.64,
      "pct": 1.2
    },
    {
      "name": "游戏",
      "inflow": 0.5,
      "pct": 2.68
    },
    {
      "name": "新能源车",
      "inflow": 0.44,
      "pct": 0.87
    },
    {
      "name": "家电",
      "inflow": 0.35,
      "pct": 0.14
    },
    {
      "name": "电子",
      "inflow": 0.14,
      "pct": 5.62
    },
    {
      "name": "计算机",
      "inflow": 0.1,
      "pct": 3.25
    },
    {
      "name": "券商",
      "inflow": 0.0,
      "pct": 0.0
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.637,
      "changePct": 9.45,
      "change": 0.055,
      "turnover": 58.03
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.986,
      "changePct": 8.95,
      "change": 0.081,
      "turnover": 15.44
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.05,
      "changePct": 6.6,
      "change": 0.065,
      "turnover": 4.41
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.808,
      "changePct": 5.62,
      "change": 0.043,
      "turnover": 0.47
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.095,
      "changePct": 5.39,
      "change": 0.056,
      "turnover": 12.88
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.969,
      "changePct": 5.21,
      "change": 0.048,
      "turnover": 24.77
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.742,
      "changePct": 4.69,
      "change": 0.078,
      "turnover": 3.6
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.857,
      "changePct": 3.38,
      "change": 0.028,
      "turnover": 12.39
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.206,
      "changePct": 3.25,
      "change": 0.038,
      "turnover": 0.35
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.88,
      "changePct": 3.17,
      "change": 0.027,
      "turnover": 6.34
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.148,
      "changePct": 2.68,
      "change": 0.03,
      "turnover": 1.67
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.383,
      "changePct": 2.41,
      "change": 0.009,
      "turnover": 8.39
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.334,
      "changePct": 1.83,
      "change": 0.006,
      "turnover": 6.16
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.809,
      "changePct": 1.74,
      "change": 0.031,
      "turnover": 8.27
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.485,
      "changePct": 1.39,
      "change": 0.034,
      "turnover": 2.12
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.116,
      "changePct": 1.36,
      "change": 0.015,
      "turnover": 2.79
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.842,
      "changePct": 1.2,
      "change": 0.01,
      "turnover": 2.13
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.628,
      "changePct": 0.87,
      "change": 0.014,
      "turnover": 1.46
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.41,
      "changePct": 0.14,
      "change": 0.002,
      "turnover": 1.16
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.527,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 7.53
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.172,
      "changePct": -0.34,
      "change": -0.004,
      "turnover": 9.51
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.186,
      "changePct": -0.67,
      "change": -0.008,
      "turnover": 0.75
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.058,
      "changePct": -0.94,
      "change": -0.01,
      "turnover": 0.07
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.178,
      "changePct": -1.26,
      "change": -0.015,
      "turnover": 1.16
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.718,
      "changePct": -1.37,
      "change": -0.01,
      "turnover": 0.53
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.512,
      "changePct": -1.54,
      "change": -0.008,
      "turnover": 0.27
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.441,
      "changePct": -1.56,
      "change": -0.007,
      "turnover": 6.66
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.811,
      "changePct": -2.41,
      "change": -0.02,
      "turnover": 14.23
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.706,
      "changePct": 4.28,
      "amount": 105.14,
      "netFlow": 26.28
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.651,
      "changePct": 1.13,
      "amount": 54.51,
      "netFlow": 13.63
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.601,
      "changePct": 2.44,
      "amount": 50.35,
      "netFlow": 12.59
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.969,
      "changePct": 5.21,
      "amount": 24.77,
      "netFlow": 6.19
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.524,
      "changePct": 1.25,
      "amount": 10.28,
      "netFlow": 2.57
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.86,
      "changePct": 1.23,
      "amount": 9.82,
      "netFlow": 2.45
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.383,
      "changePct": 2.41,
      "amount": 8.39,
      "netFlow": 2.1
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.485,
      "changePct": 1.39,
      "amount": 2.12,
      "netFlow": 0.53
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.527,
      "changePct": 0.0,
      "amount": 7.53,
      "netFlow": -1.88
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.983,
      "changePct": -0.23,
      "amount": 15.66,
      "netFlow": -3.91
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.651,
      "changePct": 1.13,
      "amount": 54.51,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.983,
      "changePct": -0.23,
      "amount": 15.66,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.601,
      "changePct": 2.44,
      "amount": 50.35,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.86,
      "changePct": 1.23,
      "amount": 9.82,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.524,
      "changePct": 1.25,
      "amount": 10.28,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 58.03,
      "percentile": 95,
      "level": "极高",
      "status": "极度过热"
    },
    {
      "name": "5G",
      "turnover": 15.44,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "人工智能",
      "turnover": 4.41,
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
      "name": "芯片",
      "turnover": 12.88,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "半导体",
      "turnover": 24.77,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "云计算",
      "turnover": 3.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 12.39,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "计算机",
      "turnover": 0.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 6.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 8.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 6.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 8.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 2.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 2.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.53,
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
      "nav": 4.0128,
      "ret1w": 5.92,
      "ret1m": 0.87,
      "ret3m": -22.69,
      "ret6m": -15.44,
      "ret1y": -8.99,
      "ret2y": 37.82,
      "ret3y": 125.13
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.069,
      "ret1w": 6.47,
      "ret1m": 0.63,
      "ret3m": -13.68,
      "ret6m": -14.27,
      "ret1y": 4.18,
      "ret2y": 18.57,
      "ret3y": 63.06
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.7468,
      "ret1w": 11.89,
      "ret1m": 6.75,
      "ret3m": -22.59,
      "ret6m": -2.92,
      "ret1y": 18.81,
      "ret2y": 101.07,
      "ret3y": 200.94
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7205,
      "ret1w": -2.03,
      "ret1m": -0.17,
      "ret3m": 8.54,
      "ret6m": -4.63,
      "ret1y": -10.96,
      "ret2y": -9.86,
      "ret3y": 10.08
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.3048,
      "ret1w": -0.26,
      "ret1m": 7.69,
      "ret3m": -0.23,
      "ret6m": -18.03,
      "ret1y": -27.11,
      "ret2y": -0.82,
      "ret3y": 20.81
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7921,
      "ret1w": -0.65,
      "ret1m": 3.41,
      "ret3m": -0.34,
      "ret6m": -17.45,
      "ret1y": -31.66,
      "ret2y": -5.07,
      "ret3y": 28.69
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5149,
      "ret1w": -1.03,
      "ret1m": 0.12,
      "ret3m": 5.79,
      "ret6m": -3.13,
      "ret1y": -7.18,
      "ret2y": 24.44,
      "ret3y": 52.24
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.808,
      "ret1w": 2.38,
      "ret1m": 2.84,
      "ret3m": -18.3,
      "ret6m": -12.32,
      "ret1y": -9.28,
      "ret2y": 9.78,
      "ret3y": 57.08
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.315,
      "ret1w": 2.86,
      "ret1m": 2.02,
      "ret3m": -12.05,
      "ret6m": -7.65,
      "ret1y": -1.95,
      "ret2y": 15.47,
      "ret3y": 39.6
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.23,
      "ret1w": 4.9,
      "ret1m": -4.69,
      "ret3m": -20.58,
      "ret6m": 6.04,
      "ret1y": 28.89,
      "ret2y": 122.15,
      "ret3y": 240.0
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.12,
      "ret1w": -0.8,
      "ret1m": 1.36,
      "ret3m": 8.74,
      "ret6m": -4.11,
      "ret1y": -10.26,
      "ret2y": -9.82,
      "ret3y": 0.81
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.356,
      "ret1w": 1.42,
      "ret1m": 4.53,
      "ret3m": 2.35,
      "ret6m": -11.86,
      "ret1y": -18.0,
      "ret2y": -13.19,
      "ret3y": 28.32
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6629,
      "ret1w": 4.79,
      "ret1m": -9.47,
      "ret3m": -29.18,
      "ret6m": -51.12,
      "ret1y": -49.66,
      "ret2y": -18.69,
      "ret3y": 13.93
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9238,
      "ret1w": -0.86,
      "ret1m": 0.81,
      "ret3m": 2.28,
      "ret6m": 5.83,
      "ret1y": -5.01,
      "ret2y": 1.97,
      "ret3y": 8.58
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.5547,
      "ret1w": 3.37,
      "ret1m": 2.18,
      "ret3m": -13.53,
      "ret6m": -10.9,
      "ret1y": -9.18,
      "ret2y": 9.93,
      "ret3y": 56.99
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.2079,
      "ret1w": 9.5,
      "ret1m": -0.59,
      "ret3m": -29.97,
      "ret6m": -6.86,
      "ret1y": 26.7,
      "ret2y": 86.05,
      "ret3y": 174.1
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5092,
      "ret1w": -1.44,
      "ret1m": 0.83,
      "ret3m": 5.02,
      "ret6m": -8.32,
      "ret1y": -12.68,
      "ret2y": -3.41,
      "ret3y": 18.72
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.987,
      "ret1w": 3.13,
      "ret1m": -3.61,
      "ret3m": -10.84,
      "ret6m": -1.4,
      "ret1y": -2.66,
      "ret2y": -13.04,
      "ret3y": -1.4
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3474,
      "ret1w": -1.48,
      "ret1m": 0.1,
      "ret3m": 6.75,
      "ret6m": -4.08,
      "ret1y": -8.45,
      "ret2y": 10.91,
      "ret3y": 13.37
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2436,
      "ret1w": 1.65,
      "ret1m": 1.71,
      "ret3m": -6.09,
      "ret6m": -4.38,
      "ret1y": -4.26,
      "ret2y": 20.09,
      "ret3y": 64.8
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2589,
      "ret1w": 2.72,
      "ret1m": 1.96,
      "ret3m": -14.58,
      "ret6m": -7.37,
      "ret1y": -2.55,
      "ret2y": 28.26,
      "ret3y": 37.48
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3387,
      "ret1w": 2.72,
      "ret1m": 1.97,
      "ret3m": -14.55,
      "ret6m": -7.29,
      "ret1y": -2.37,
      "ret2y": 28.76,
      "ret3y": 38.57
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.1026,
      "ret1w": 0.37,
      "ret1m": 0.61,
      "ret3m": -0.48,
      "ret6m": 0.86,
      "ret1y": 1.93,
      "ret2y": 3.75,
      "ret3y": 9.49
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0748,
      "ret1w": 0.37,
      "ret1m": 0.62,
      "ret3m": -0.43,
      "ret6m": 1.02,
      "ret1y": 2.24,
      "ret2y": 4.38,
      "ret3y": 10.83
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7307,
      "ret1w": -0.53,
      "ret1m": 1.26,
      "ret3m": 0.34,
      "ret6m": -9.54,
      "ret1y": -14.44,
      "ret2y": -2.26,
      "ret3y": 14.48
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7489,
      "ret1w": -0.53,
      "ret1m": 1.27,
      "ret3m": 0.39,
      "ret6m": -9.42,
      "ret1y": -14.23,
      "ret2y": -1.77,
      "ret3y": 15.62
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.693,
      "ret1w": 7.18,
      "ret1m": 2.65,
      "ret3m": -16.02,
      "ret6m": 5.22,
      "ret1y": 31.11,
      "ret2y": 101.39,
      "ret3y": 150.21
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4523,
      "ret1w": 1.62,
      "ret1m": -0.26,
      "ret3m": -9.33,
      "ret6m": -3.55,
      "ret1y": 1.42,
      "ret2y": 39.55,
      "ret3y": 77.28
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7229,
      "ret1w": 1.01,
      "ret1m": -0.23,
      "ret3m": -11.4,
      "ret6m": -17.8,
      "ret1y": -18.07,
      "ret2y": -2.55,
      "ret3y": 12.55
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0073,
      "ret1w": 3.21,
      "ret1m": -2.1,
      "ret3m": -17.47,
      "ret6m": 1.81,
      "ret1y": 16.82,
      "ret2y": 63.22,
      "ret3y": 127.43
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5209,
      "ret1w": -0.42,
      "ret1m": -1.55,
      "ret3m": -15.63,
      "ret6m": 0.37,
      "ret1y": 3.19,
      "ret2y": 31.18,
      "ret3y": 45.58
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5307,
      "ret1w": -0.43,
      "ret1m": -1.54,
      "ret3m": -15.6,
      "ret6m": 0.47,
      "ret1y": 3.39,
      "ret2y": 31.72,
      "ret3y": 46.76
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2702,
      "ret1w": -0.52,
      "ret1m": 0.18,
      "ret3m": 2.32,
      "ret6m": -1.82,
      "ret1y": -1.57,
      "ret2y": -1.23,
      "ret3y": 0.44
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1429,
      "ret1w": 0.06,
      "ret1m": 0.39,
      "ret3m": 0.49,
      "ret6m": -0.61,
      "ret1y": -6.98,
      "ret2y": 6.17,
      "ret3y": 21.75
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.416,
      "ret1w": 3.5,
      "ret1m": 3.74,
      "ret3m": -14.17,
      "ret6m": -10.43,
      "ret1y": -1.68,
      "ret2y": -4.01,
      "ret3y": 15.06
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9821,
      "ret1w": -0.41,
      "ret1m": 0.97,
      "ret3m": 2.17,
      "ret6m": -8.58,
      "ret1y": -6.58,
      "ret2y": 22.73,
      "ret3y": 40.48
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.313,
      "ret1w": 7.08,
      "ret1m": -2.73,
      "ret3m": -24.4,
      "ret6m": -7.22,
      "ret1y": 40.74,
      "ret2y": 143.42,
      "ret3y": 192.15
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4848,
      "ret1w": -2.09,
      "ret1m": -0.01,
      "ret3m": 6.52,
      "ret6m": -0.7,
      "ret1y": 0.94,
      "ret2y": -0.44,
      "ret3y": 9.19
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6063,
      "ret1w": 4.82,
      "ret1m": 4.62,
      "ret3m": -29.45,
      "ret6m": -13.9,
      "ret1y": -16.82,
      "ret2y": 3.93,
      "ret3y": 29.28
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.693,
      "ret1w": 8.37,
      "ret1m": 6.83,
      "ret3m": -21.88,
      "ret6m": 21.46,
      "ret1y": 60.98,
      "ret2y": 193.4,
      "ret3y": 309.97
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0659,
      "ret1w": 0.3,
      "ret1m": 0.25,
      "ret3m": -1.16,
      "ret6m": -0.2,
      "ret1y": 0.0,
      "ret2y": 1.81,
      "ret3y": 4.47
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1142,
      "ret1w": 0.31,
      "ret1m": 0.26,
      "ret3m": -1.14,
      "ret6m": -0.13,
      "ret1y": 0.12,
      "ret2y": 2.11,
      "ret3y": 5.2
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0636,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.16,
      "ret6m": 0.31,
      "ret1y": 0.79,
      "ret2y": 1.39,
      "ret3y": 2.61
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0976,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.1,
      "ret6m": 0.34,
      "ret1y": 0.8,
      "ret2y": 1.46,
      "ret3y": 3.78
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1068,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.12,
      "ret6m": 0.39,
      "ret1y": 0.9,
      "ret2y": 1.66,
      "ret3y": 4.21
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0752,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.21,
      "ret6m": 0.33,
      "ret1y": 0.76,
      "ret2y": 1.25,
      "ret3y": 2.62
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0894,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.23,
      "ret6m": 0.41,
      "ret1y": 0.91,
      "ret2y": 1.57,
      "ret3y": 3.27
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0558,
      "ret1w": 0.7,
      "ret1m": 0.29,
      "ret3m": -4.44,
      "ret6m": -2.24,
      "ret1y": 0.47,
      "ret2y": 8.12,
      "ret3y": 11.05
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1981,
      "ret1w": 0.82,
      "ret1m": 0.44,
      "ret3m": -5.55,
      "ret6m": -3.53,
      "ret1y": -1.8,
      "ret2y": 0.84,
      "ret3y": 5.02
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0621,
      "ret1w": 0.69,
      "ret1m": 0.3,
      "ret3m": -4.41,
      "ret6m": -2.14,
      "ret1y": 0.67,
      "ret2y": 8.55,
      "ret3y": 11.94
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.39,
      "ret1y": 0.86,
      "ret2y": 1.62,
      "ret3y": 3.48
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1674,
      "ret1w": 0.94,
      "ret1m": 0.15,
      "ret3m": -2.95,
      "ret6m": -3.65,
      "ret1y": -2.98,
      "ret2y": 2.62,
      "ret3y": 9.17
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2188,
      "ret1w": -0.03,
      "ret1m": 0.28,
      "ret3m": -0.71,
      "ret6m": -1.0,
      "ret1y": 0.26,
      "ret2y": 6.41,
      "ret3y": 14.55
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1307,
      "ret1w": 0.44,
      "ret1m": 0.0,
      "ret3m": -2.84,
      "ret6m": -0.95,
      "ret1y": 0.01,
      "ret2y": 4.95,
      "ret3y": 8.76
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2012,
      "ret1w": 0.43,
      "ret1m": 0.0,
      "ret3m": -2.82,
      "ret6m": -0.86,
      "ret1y": 0.2,
      "ret2y": 5.37,
      "ret3y": 9.68
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.231,
      "ret1w": -0.31,
      "ret1m": -0.98,
      "ret3m": -10.87,
      "ret6m": 7.11,
      "ret1y": 35.46,
      "ret2y": 90.36,
      "ret3y": 143.83
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.948,
      "ret1w": 1.01,
      "ret1m": 2.23,
      "ret3m": 1.89,
      "ret6m": 2.76,
      "ret1y": 4.84,
      "ret2y": 15.29,
      "ret3y": 38.55
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8776,
      "ret1w": -0.05,
      "ret1m": -1.75,
      "ret3m": -6.89,
      "ret6m": -11.33,
      "ret1y": -6.54,
      "ret2y": 14.23,
      "ret3y": 59.39
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2165,
      "ret1w": 2.36,
      "ret1m": 2.49,
      "ret3m": -6.45,
      "ret6m": 3.22,
      "ret1y": 9.38,
      "ret2y": 25.01,
      "ret3y": 75.7
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9369,
      "ret1w": 0.26,
      "ret1m": -0.03,
      "ret3m": -0.69,
      "ret6m": -1.38,
      "ret1y": -2.45,
      "ret2y": -3.47,
      "ret3y": -1.78
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.5847,
      "ret1w": 0.26,
      "ret1m": 0.54,
      "ret3m": -7.95,
      "ret6m": 4.86,
      "ret1y": 23.22,
      "ret2y": 56.89,
      "ret3y": 104.16
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.566,
      "ret1w": 0.97,
      "ret1m": 1.24,
      "ret3m": -1.98,
      "ret6m": 1.49,
      "ret1y": 1.2,
      "ret2y": 7.94,
      "ret3y": 27.19
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.165,
      "ret1w": -0.6,
      "ret1m": -3.4,
      "ret3m": -3.8,
      "ret6m": -14.28,
      "ret1y": -9.27,
      "ret2y": -15.33,
      "ret3y": 110.67
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.883,
      "ret1w": -1.34,
      "ret1m": -7.25,
      "ret3m": -10.45,
      "ret6m": -18.77,
      "ret1y": -17.01,
      "ret2y": -22.48,
      "ret3y": 36.9
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7471,
      "ret1w": -0.33,
      "ret1m": -1.33,
      "ret3m": -12.06,
      "ret6m": 4.87,
      "ret1y": 31.05,
      "ret2y": 90.94,
      "ret3y": 137.84
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4606,
      "ret1w": -0.03,
      "ret1m": 1.76,
      "ret3m": 5.45,
      "ret6m": -5.41,
      "ret1y": -2.11,
      "ret2y": 36.44,
      "ret3y": 45.65
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6824,
      "ret1w": -0.84,
      "ret1m": 0.65,
      "ret3m": -1.97,
      "ret6m": 5.47,
      "ret1y": 6.85,
      "ret2y": 31.52,
      "ret3y": 59.09
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2789,
      "ret1w": -0.98,
      "ret1m": 0.29,
      "ret3m": -3.85,
      "ret6m": 0.5,
      "ret1y": 1.3,
      "ret2y": 19.49,
      "ret3y": 39.45
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.332,
      "ret1w": 0.23,
      "ret1m": -1.41,
      "ret3m": 0.23,
      "ret6m": 0.83,
      "ret1y": 9.27,
      "ret2y": 7.59,
      "ret3y": -2.92
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.948,
      "ret1w": 0.0,
      "ret1m": -0.81,
      "ret3m": -2.55,
      "ret6m": -13.07,
      "ret1y": -20.0,
      "ret2y": 12.54,
      "ret3y": 47.77
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0093,
      "ret1w": 0.02,
      "ret1m": 0.07,
      "ret3m": 0.16,
      "ret6m": 0.58,
      "ret1y": 1.46,
      "ret2y": 1.58,
      "ret3y": 3.34
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0081,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.12,
      "ret6m": 0.56,
      "ret1y": 1.47,
      "ret2y": 1.64,
      "ret3y": 3.52
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.441,
      "ret1w": 2.42,
      "ret1m": 1.26,
      "ret3m": -6.97,
      "ret6m": -4.88,
      "ret1y": -0.07,
      "ret2y": 15.65,
      "ret3y": 34.67
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.822,
      "ret1w": 3.56,
      "ret1m": 2.54,
      "ret3m": -9.29,
      "ret6m": -5.43,
      "ret1y": -0.46,
      "ret2y": 27.81,
      "ret3y": 59.08
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5959,
      "ret1w": 0.54,
      "ret1m": 1.33,
      "ret3m": -4.04,
      "ret6m": -12.6,
      "ret1y": -14.7,
      "ret2y": 38.4,
      "ret3y": 59.75
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1128,
      "ret1w": 1.2,
      "ret1m": 0.51,
      "ret3m": -5.75,
      "ret6m": -2.39,
      "ret1y": 2.48,
      "ret2y": 18.84,
      "ret3y": 39.99
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1726,
      "ret1w": 1.2,
      "ret1m": 0.52,
      "ret3m": -5.72,
      "ret6m": -2.28,
      "ret1y": 2.68,
      "ret2y": 19.33,
      "ret3y": 41.11
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9661,
      "ret1w": 2.49,
      "ret1m": 2.05,
      "ret3m": -12.3,
      "ret6m": -7.92,
      "ret1y": -7.42,
      "ret2y": 21.27,
      "ret3y": 57.98
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7945,
      "ret1w": 1.2,
      "ret1m": 0.68,
      "ret3m": -4.38,
      "ret6m": -3.36,
      "ret1y": -1.13,
      "ret2y": 13.51,
      "ret3y": 37.62
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5774,
      "ret1w": 0.16,
      "ret1m": 2.22,
      "ret3m": -3.22,
      "ret6m": -6.06,
      "ret1y": -5.68,
      "ret2y": 20.46,
      "ret3y": 52.26
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.993,
      "ret1w": 4.08,
      "ret1m": 0.68,
      "ret3m": -12.62,
      "ret6m": -1.35,
      "ret1y": 9.4,
      "ret2y": 38.56,
      "ret3y": 75.38
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1544,
      "ret1w": -0.75,
      "ret1m": -0.33,
      "ret3m": 5.78,
      "ret6m": -3.06,
      "ret1y": -2.49,
      "ret2y": 9.51,
      "ret3y": 28.76
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5237,
      "ret1w": 0.06,
      "ret1m": 1.38,
      "ret3m": 2.16,
      "ret6m": 2.99,
      "ret1y": 2.25,
      "ret2y": 16.16,
      "ret3y": 34.89
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3746,
      "ret1w": 1.59,
      "ret1m": 2.32,
      "ret3m": -1.89,
      "ret6m": 3.46,
      "ret1y": 10.29,
      "ret2y": 17.87,
      "ret3y": 43.62
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8148,
      "ret1w": 3.25,
      "ret1m": 2.71,
      "ret3m": -7.14,
      "ret6m": -4.56,
      "ret1y": 4.77,
      "ret2y": 27.92,
      "ret3y": 59.56
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1227,
      "ret1w": 1.94,
      "ret1m": -3.36,
      "ret3m": -19.65,
      "ret6m": -8.48,
      "ret1y": -6.66,
      "ret2y": 16.98,
      "ret3y": 39.24
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1243,
      "ret1w": 1.94,
      "ret1m": -3.35,
      "ret3m": -19.57,
      "ret6m": -8.48,
      "ret1y": -6.7,
      "ret2y": 16.17,
      "ret3y": 38.8
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3285,
      "ret1w": -1.69,
      "ret1m": -5.89,
      "ret3m": -15.3,
      "ret6m": -12.85,
      "ret1y": -10.43,
      "ret2y": 5.87,
      "ret3y": 31.37
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3585,
      "ret1w": -1.68,
      "ret1m": -5.88,
      "ret3m": -15.27,
      "ret6m": -12.75,
      "ret1y": -10.25,
      "ret2y": 6.3,
      "ret3y": 32.42
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9237,
      "ret1w": -3.43,
      "ret1m": -11.55,
      "ret3m": -22.7,
      "ret6m": -10.05,
      "ret1y": -5.69,
      "ret2y": 18.0,
      "ret3y": 52.86
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1697,
      "ret1w": 0.11,
      "ret1m": 0.32,
      "ret3m": 0.08,
      "ret6m": 0.11,
      "ret1y": 0.11,
      "ret2y": 2.62,
      "ret3y": 7.62
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1894,
      "ret1w": 0.12,
      "ret1m": 0.33,
      "ret3m": 0.1,
      "ret6m": 0.19,
      "ret1y": 0.27,
      "ret2y": 2.94,
      "ret3y": 8.27
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0833,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.18,
      "ret6m": 0.4,
      "ret1y": 0.94,
      "ret2y": 1.7,
      "ret3y": 3.21
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4117,
      "ret1w": -0.02,
      "ret1m": 0.06,
      "ret3m": 0.15,
      "ret6m": 0.13,
      "ret1y": 0.29,
      "ret2y": 0.86,
      "ret3y": 9.71
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4635,
      "ret1w": -0.02,
      "ret1m": 0.08,
      "ret3m": 0.18,
      "ret6m": 0.24,
      "ret1y": 0.49,
      "ret2y": 1.26,
      "ret3y": 10.59
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1143,
      "ret1w": 2.13,
      "ret1m": 1.76,
      "ret3m": -3.68,
      "ret6m": 9.22,
      "ret1y": 11.63,
      "ret2y": 31.92,
      "ret3y": 64.88
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2543,
      "ret1w": 1.17,
      "ret1m": 1.25,
      "ret3m": -1.55,
      "ret6m": 2.28,
      "ret1y": 5.24,
      "ret2y": 15.93,
      "ret3y": 49.62
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-07-08",
        "nav": 4.982
      },
      {
        "date": "2026-07-09",
        "nav": 5.1592
      },
      {
        "date": "2026-07-10",
        "nav": 5.0568
      },
      {
        "date": "2026-07-13",
        "nav": 4.7776
      },
      {
        "date": "2026-07-14",
        "nav": 4.8676
      },
      {
        "date": "2026-07-15",
        "nav": 4.7313
      },
      {
        "date": "2026-07-16",
        "nav": 4.6216
      },
      {
        "date": "2026-07-17",
        "nav": 4.2704
      },
      {
        "date": "2026-07-20",
        "nav": 4.0514
      },
      {
        "date": "2026-07-21",
        "nav": 4.2649
      },
      {
        "date": "2026-07-22",
        "nav": 4.198
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-07-08",
        "nav": 4.609
      },
      {
        "date": "2026-07-09",
        "nav": 4.8515
      },
      {
        "date": "2026-07-10",
        "nav": 4.6586
      },
      {
        "date": "2026-07-13",
        "nav": 4.5423
      },
      {
        "date": "2026-07-14",
        "nav": 4.7534
      },
      {
        "date": "2026-07-15",
        "nav": 4.6678
      },
      {
        "date": "2026-07-16",
        "nav": 4.5904
      },
      {
        "date": "2026-07-17",
        "nav": 4.2425
      },
      {
        "date": "2026-07-20",
        "nav": 4.2068
      },
      {
        "date": "2026-07-21",
        "nav": 4.4867
      },
      {
        "date": "2026-07-22",
        "nav": 4.3302
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-07-08",
        "nav": 5.8127
      },
      {
        "date": "2026-07-09",
        "nav": 6.203
      },
      {
        "date": "2026-07-10",
        "nav": 5.9455
      },
      {
        "date": "2026-07-13",
        "nav": 5.6656
      },
      {
        "date": "2026-07-14",
        "nav": 6.0401
      },
      {
        "date": "2026-07-15",
        "nav": 5.8833
      },
      {
        "date": "2026-07-16",
        "nav": 5.6614
      },
      {
        "date": "2026-07-17",
        "nav": 5.0366
      },
      {
        "date": "2026-07-20",
        "nav": 4.7826
      },
      {
        "date": "2026-07-21",
        "nav": 5.2434
      },
      {
        "date": "2026-07-22",
        "nav": 5.0397
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-07-08",
        "nav": 0.663
      },
      {
        "date": "2026-07-09",
        "nav": 0.6553
      },
      {
        "date": "2026-07-10",
        "nav": 0.6633
      },
      {
        "date": "2026-07-13",
        "nav": 0.6628
      },
      {
        "date": "2026-07-14",
        "nav": 0.6683
      },
      {
        "date": "2026-07-15",
        "nav": 0.6887
      },
      {
        "date": "2026-07-16",
        "nav": 0.6928
      },
      {
        "date": "2026-07-17",
        "nav": 0.6826
      },
      {
        "date": "2026-07-20",
        "nav": 0.7002
      },
      {
        "date": "2026-07-21",
        "nav": 0.6984
      },
      {
        "date": "2026-07-22",
        "nav": 0.7036
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-07-08",
        "nav": 2.1393
      },
      {
        "date": "2026-07-09",
        "nav": 2.1506
      },
      {
        "date": "2026-07-10",
        "nav": 2.1811
      },
      {
        "date": "2026-07-13",
        "nav": 2.0534
      },
      {
        "date": "2026-07-14",
        "nav": 2.0596
      },
      {
        "date": "2026-07-15",
        "nav": 2.0975
      },
      {
        "date": "2026-07-16",
        "nav": 2.0867
      },
      {
        "date": "2026-07-17",
        "nav": 2.0512
      },
      {
        "date": "2026-07-20",
        "nav": 2.0782
      },
      {
        "date": "2026-07-21",
        "nav": 2.1083
      },
      {
        "date": "2026-07-22",
        "nav": 2.1399
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-07-08",
        "nav": 2.6416
      },
      {
        "date": "2026-07-09",
        "nav": 2.6197
      },
      {
        "date": "2026-07-10",
        "nav": 2.676
      },
      {
        "date": "2026-07-13",
        "nav": 2.5755
      },
      {
        "date": "2026-07-14",
        "nav": 2.6134
      },
      {
        "date": "2026-07-15",
        "nav": 2.6212
      },
      {
        "date": "2026-07-16",
        "nav": 2.5871
      },
      {
        "date": "2026-07-17",
        "nav": 2.5324
      },
      {
        "date": "2026-07-20",
        "nav": 2.5288
      },
      {
        "date": "2026-07-21",
        "nav": 2.5587
      },
      {
        "date": "2026-07-22",
        "nav": 2.6094
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-07-08",
        "nav": 5.15
      },
      {
        "date": "2026-07-09",
        "nav": 5.1217
      },
      {
        "date": "2026-07-10",
        "nav": 5.1429
      },
      {
        "date": "2026-07-13",
        "nav": 5.0998
      },
      {
        "date": "2026-07-14",
        "nav": 5.2032
      },
      {
        "date": "2026-07-15",
        "nav": 5.3149
      },
      {
        "date": "2026-07-16",
        "nav": 5.3047
      },
      {
        "date": "2026-07-17",
        "nav": 5.2407
      },
      {
        "date": "2026-07-20",
        "nav": 5.3892
      },
      {
        "date": "2026-07-21",
        "nav": 5.4281
      },
      {
        "date": "2026-07-22",
        "nav": 5.4655
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-07-08",
        "nav": 2.059
      },
      {
        "date": "2026-07-09",
        "nav": 2.081
      },
      {
        "date": "2026-07-10",
        "nav": 2.066
      },
      {
        "date": "2026-07-13",
        "nav": 1.941
      },
      {
        "date": "2026-07-14",
        "nav": 1.989
      },
      {
        "date": "2026-07-15",
        "nav": 1.964
      },
      {
        "date": "2026-07-16",
        "nav": 1.902
      },
      {
        "date": "2026-07-17",
        "nav": 1.781
      },
      {
        "date": "2026-07-20",
        "nav": 1.722
      },
      {
        "date": "2026-07-21",
        "nav": 1.79
      },
      {
        "date": "2026-07-22",
        "nav": 1.76
      },
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
      }
    ],
    "519965": [
      {
        "date": "2026-07-08",
        "nav": 1.4257
      },
      {
        "date": "2026-07-09",
        "nav": 1.4521
      },
      {
        "date": "2026-07-10",
        "nav": 1.4255
      },
      {
        "date": "2026-07-13",
        "nav": 1.3732
      },
      {
        "date": "2026-07-14",
        "nav": 1.4081
      },
      {
        "date": "2026-07-15",
        "nav": 1.4027
      },
      {
        "date": "2026-07-16",
        "nav": 1.3654
      },
      {
        "date": "2026-07-17",
        "nav": 1.2968
      },
      {
        "date": "2026-07-20",
        "nav": 1.2867
      },
      {
        "date": "2026-07-21",
        "nav": 1.3465
      },
      {
        "date": "2026-07-22",
        "nav": 1.323
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-07-08",
        "nav": 4.001
      },
      {
        "date": "2026-07-09",
        "nav": 4.226
      },
      {
        "date": "2026-07-10",
        "nav": 4.003
      },
      {
        "date": "2026-07-13",
        "nav": 3.854
      },
      {
        "date": "2026-07-14",
        "nav": 3.969
      },
      {
        "date": "2026-07-15",
        "nav": 3.853
      },
      {
        "date": "2026-07-16",
        "nav": 3.703
      },
      {
        "date": "2026-07-17",
        "nav": 3.423
      },
      {
        "date": "2026-07-20",
        "nav": 3.351
      },
      {
        "date": "2026-07-21",
        "nav": 3.638
      },
      {
        "date": "2026-07-22",
        "nav": 3.622
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-07-08",
        "nav": 1.02
      },
      {
        "date": "2026-07-09",
        "nav": 1.004
      },
      {
        "date": "2026-07-10",
        "nav": 1.019
      },
      {
        "date": "2026-07-13",
        "nav": 1.014
      },
      {
        "date": "2026-07-14",
        "nav": 1.024
      },
      {
        "date": "2026-07-15",
        "nav": 1.063
      },
      {
        "date": "2026-07-16",
        "nav": 1.067
      },
      {
        "date": "2026-07-17",
        "nav": 1.043
      },
      {
        "date": "2026-07-20",
        "nav": 1.073
      },
      {
        "date": "2026-07-21",
        "nav": 1.074
      },
      {
        "date": "2026-07-22",
        "nav": 1.072
      },
      {
        "date": "2026-07-23",
        "nav": 1.074
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-07-08",
        "nav": 2.203
      },
      {
        "date": "2026-07-09",
        "nav": 2.189
      },
      {
        "date": "2026-07-10",
        "nav": 2.247
      },
      {
        "date": "2026-07-13",
        "nav": 2.222
      },
      {
        "date": "2026-07-14",
        "nav": 2.256
      },
      {
        "date": "2026-07-15",
        "nav": 2.343
      },
      {
        "date": "2026-07-16",
        "nav": 2.396
      },
      {
        "date": "2026-07-17",
        "nav": 2.254
      },
      {
        "date": "2026-07-20",
        "nav": 2.273
      },
      {
        "date": "2026-07-21",
        "nav": 2.251
      },
      {
        "date": "2026-07-22",
        "nav": 2.262
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-07-08",
        "nav": 2.2876
      },
      {
        "date": "2026-07-09",
        "nav": 2.4491
      },
      {
        "date": "2026-07-10",
        "nav": 2.2527
      },
      {
        "date": "2026-07-13",
        "nav": 2.1904
      },
      {
        "date": "2026-07-14",
        "nav": 2.2217
      },
      {
        "date": "2026-07-15",
        "nav": 2.1272
      },
      {
        "date": "2026-07-16",
        "nav": 2.0319
      },
      {
        "date": "2026-07-17",
        "nav": 1.8915
      },
      {
        "date": "2026-07-20",
        "nav": 1.8654
      },
      {
        "date": "2026-07-21",
        "nav": 2.0882
      },
      {
        "date": "2026-07-22",
        "nav": 2.0429
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-07-08",
        "nav": 1.8577
      },
      {
        "date": "2026-07-09",
        "nav": 1.8657
      },
      {
        "date": "2026-07-10",
        "nav": 1.8628
      },
      {
        "date": "2026-07-13",
        "nav": 1.8503
      },
      {
        "date": "2026-07-14",
        "nav": 1.8689
      },
      {
        "date": "2026-07-15",
        "nav": 1.8981
      },
      {
        "date": "2026-07-16",
        "nav": 1.8833
      },
      {
        "date": "2026-07-17",
        "nav": 1.8578
      },
      {
        "date": "2026-07-20",
        "nav": 1.9066
      },
      {
        "date": "2026-07-21",
        "nav": 1.9134
      },
      {
        "date": "2026-07-22",
        "nav": 1.917
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-07-08",
        "nav": 1.713
      },
      {
        "date": "2026-07-09",
        "nav": 1.76
      },
      {
        "date": "2026-07-10",
        "nav": 1.7315
      },
      {
        "date": "2026-07-13",
        "nav": 1.6482
      },
      {
        "date": "2026-07-14",
        "nav": 1.6982
      },
      {
        "date": "2026-07-15",
        "nav": 1.6772
      },
      {
        "date": "2026-07-16",
        "nav": 1.6353
      },
      {
        "date": "2026-07-17",
        "nav": 1.5424
      },
      {
        "date": "2026-07-20",
        "nav": 1.5027
      },
      {
        "date": "2026-07-21",
        "nav": 1.5676
      },
      {
        "date": "2026-07-22",
        "nav": 1.5467
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-07-08",
        "nav": 3.036
      },
      {
        "date": "2026-07-09",
        "nav": 3.2568
      },
      {
        "date": "2026-07-10",
        "nav": 3.0564
      },
      {
        "date": "2026-07-13",
        "nav": 2.9075
      },
      {
        "date": "2026-07-14",
        "nav": 3.0486
      },
      {
        "date": "2026-07-15",
        "nav": 2.9342
      },
      {
        "date": "2026-07-16",
        "nav": 2.7995
      },
      {
        "date": "2026-07-17",
        "nav": 2.5176
      },
      {
        "date": "2026-07-20",
        "nav": 2.4077
      },
      {
        "date": "2026-07-21",
        "nav": 2.6698
      },
      {
        "date": "2026-07-22",
        "nav": 2.5499
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-07-08",
        "nav": 2.3674
      },
      {
        "date": "2026-07-09",
        "nav": 2.3599
      },
      {
        "date": "2026-07-10",
        "nav": 2.396
      },
      {
        "date": "2026-07-13",
        "nav": 2.3818
      },
      {
        "date": "2026-07-14",
        "nav": 2.4078
      },
      {
        "date": "2026-07-15",
        "nav": 2.4468
      },
      {
        "date": "2026-07-16",
        "nav": 2.4477
      },
      {
        "date": "2026-07-17",
        "nav": 2.4115
      },
      {
        "date": "2026-07-20",
        "nav": 2.4513
      },
      {
        "date": "2026-07-21",
        "nav": 2.4497
      },
      {
        "date": "2026-07-22",
        "nav": 2.4905
      },
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
      }
    ],
    "399011": [
      {
        "date": "2026-07-08",
        "nav": 1.015
      },
      {
        "date": "2026-07-09",
        "nav": 1.048
      },
      {
        "date": "2026-07-10",
        "nav": 1.078
      },
      {
        "date": "2026-07-13",
        "nav": 1.064
      },
      {
        "date": "2026-07-14",
        "nav": 1.104
      },
      {
        "date": "2026-07-15",
        "nav": 1.144
      },
      {
        "date": "2026-07-16",
        "nav": 1.125
      },
      {
        "date": "2026-07-17",
        "nav": 1.034
      },
      {
        "date": "2026-07-20",
        "nav": 1.079
      },
      {
        "date": "2026-07-21",
        "nav": 1.095
      },
      {
        "date": "2026-07-22",
        "nav": 1.086
      },
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
      }
    ],
    "376510": [
      {
        "date": "2026-07-08",
        "nav": 2.2014
      },
      {
        "date": "2026-07-09",
        "nav": 2.1888
      },
      {
        "date": "2026-07-10",
        "nav": 2.192
      },
      {
        "date": "2026-07-13",
        "nav": 2.2143
      },
      {
        "date": "2026-07-14",
        "nav": 2.2327
      },
      {
        "date": "2026-07-15",
        "nav": 2.2749
      },
      {
        "date": "2026-07-16",
        "nav": 2.2753
      },
      {
        "date": "2026-07-17",
        "nav": 2.2615
      },
      {
        "date": "2026-07-20",
        "nav": 2.3217
      },
      {
        "date": "2026-07-21",
        "nav": 2.308
      },
      {
        "date": "2026-07-22",
        "nav": 2.3238
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-07-08",
        "nav": 1.2896
      },
      {
        "date": "2026-07-09",
        "nav": 1.3136
      },
      {
        "date": "2026-07-10",
        "nav": 1.3095
      },
      {
        "date": "2026-07-13",
        "nav": 1.2726
      },
      {
        "date": "2026-07-14",
        "nav": 1.2903
      },
      {
        "date": "2026-07-15",
        "nav": 1.2796
      },
      {
        "date": "2026-07-16",
        "nav": 1.2585
      },
      {
        "date": "2026-07-17",
        "nav": 1.2074
      },
      {
        "date": "2026-07-20",
        "nav": 1.2025
      },
      {
        "date": "2026-07-21",
        "nav": 1.237
      },
      {
        "date": "2026-07-22",
        "nav": 1.2366
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-07-08",
        "nav": 1.3891
      },
      {
        "date": "2026-07-09",
        "nav": 1.4216
      },
      {
        "date": "2026-07-10",
        "nav": 1.3881
      },
      {
        "date": "2026-07-13",
        "nav": 1.3374
      },
      {
        "date": "2026-07-14",
        "nav": 1.3706
      },
      {
        "date": "2026-07-15",
        "nav": 1.3597
      },
      {
        "date": "2026-07-16",
        "nav": 1.3186
      },
      {
        "date": "2026-07-17",
        "nav": 1.2563
      },
      {
        "date": "2026-07-20",
        "nav": 1.2435
      },
      {
        "date": "2026-07-21",
        "nav": 1.306
      },
      {
        "date": "2026-07-22",
        "nav": 1.2814
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-07-08",
        "nav": 1.4768
      },
      {
        "date": "2026-07-09",
        "nav": 1.5113
      },
      {
        "date": "2026-07-10",
        "nav": 1.4757
      },
      {
        "date": "2026-07-13",
        "nav": 1.4218
      },
      {
        "date": "2026-07-14",
        "nav": 1.4571
      },
      {
        "date": "2026-07-15",
        "nav": 1.4456
      },
      {
        "date": "2026-07-16",
        "nav": 1.4019
      },
      {
        "date": "2026-07-17",
        "nav": 1.3356
      },
      {
        "date": "2026-07-20",
        "nav": 1.3221
      },
      {
        "date": "2026-07-21",
        "nav": 1.3885
      },
      {
        "date": "2026-07-22",
        "nav": 1.3624
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-07-08",
        "nav": 1.1031
      },
      {
        "date": "2026-07-09",
        "nav": 1.1082
      },
      {
        "date": "2026-07-10",
        "nav": 1.1006
      },
      {
        "date": "2026-07-13",
        "nav": 1.0978
      },
      {
        "date": "2026-07-14",
        "nav": 1.1074
      },
      {
        "date": "2026-07-15",
        "nav": 1.1085
      },
      {
        "date": "2026-07-16",
        "nav": 1.1041
      },
      {
        "date": "2026-07-17",
        "nav": 1.0947
      },
      {
        "date": "2026-07-20",
        "nav": 1.0996
      },
      {
        "date": "2026-07-21",
        "nav": 1.1075
      },
      {
        "date": "2026-07-22",
        "nav": 1.104
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-07-08",
        "nav": 1.0748
      },
      {
        "date": "2026-07-09",
        "nav": 1.0798
      },
      {
        "date": "2026-07-10",
        "nav": 1.0724
      },
      {
        "date": "2026-07-13",
        "nav": 1.0698
      },
      {
        "date": "2026-07-14",
        "nav": 1.0791
      },
      {
        "date": "2026-07-15",
        "nav": 1.0802
      },
      {
        "date": "2026-07-16",
        "nav": 1.0759
      },
      {
        "date": "2026-07-17",
        "nav": 1.0668
      },
      {
        "date": "2026-07-20",
        "nav": 1.0716
      },
      {
        "date": "2026-07-21",
        "nav": 1.0794
      },
      {
        "date": "2026-07-22",
        "nav": 1.076
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-07-08",
        "nav": 0.7192
      },
      {
        "date": "2026-07-09",
        "nav": 0.7119
      },
      {
        "date": "2026-07-10",
        "nav": 0.7147
      },
      {
        "date": "2026-07-13",
        "nav": 0.71
      },
      {
        "date": "2026-07-14",
        "nav": 0.7137
      },
      {
        "date": "2026-07-15",
        "nav": 0.7318
      },
      {
        "date": "2026-07-16",
        "nav": 0.7341
      },
      {
        "date": "2026-07-17",
        "nav": 0.7105
      },
      {
        "date": "2026-07-20",
        "nav": 0.7276
      },
      {
        "date": "2026-07-21",
        "nav": 0.731
      },
      {
        "date": "2026-07-22",
        "nav": 0.7315
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-07-08",
        "nav": 0.7369
      },
      {
        "date": "2026-07-09",
        "nav": 0.7294
      },
      {
        "date": "2026-07-10",
        "nav": 0.7322
      },
      {
        "date": "2026-07-13",
        "nav": 0.7275
      },
      {
        "date": "2026-07-14",
        "nav": 0.7312
      },
      {
        "date": "2026-07-15",
        "nav": 0.7498
      },
      {
        "date": "2026-07-16",
        "nav": 0.7522
      },
      {
        "date": "2026-07-17",
        "nav": 0.728
      },
      {
        "date": "2026-07-20",
        "nav": 0.7456
      },
      {
        "date": "2026-07-21",
        "nav": 0.749
      },
      {
        "date": "2026-07-22",
        "nav": 0.7496
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-07-08",
        "nav": 3.1066
      },
      {
        "date": "2026-07-09",
        "nav": 3.3068
      },
      {
        "date": "2026-07-10",
        "nav": 3.1443
      },
      {
        "date": "2026-07-13",
        "nav": 3.0387
      },
      {
        "date": "2026-07-14",
        "nav": 3.2291
      },
      {
        "date": "2026-07-15",
        "nav": 3.1827
      },
      {
        "date": "2026-07-16",
        "nav": 3.1173
      },
      {
        "date": "2026-07-17",
        "nav": 2.8854
      },
      {
        "date": "2026-07-20",
        "nav": 2.7889
      },
      {
        "date": "2026-07-21",
        "nav": 3.0011
      },
      {
        "date": "2026-07-22",
        "nav": 2.8871
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-07-08",
        "nav": 2.6565
      },
      {
        "date": "2026-07-09",
        "nav": 2.7261
      },
      {
        "date": "2026-07-10",
        "nav": 2.7017
      },
      {
        "date": "2026-07-13",
        "nav": 2.642
      },
      {
        "date": "2026-07-14",
        "nav": 2.6643
      },
      {
        "date": "2026-07-15",
        "nav": 2.6415
      },
      {
        "date": "2026-07-16",
        "nav": 2.5904
      },
      {
        "date": "2026-07-17",
        "nav": 2.4482
      },
      {
        "date": "2026-07-20",
        "nav": 2.4612
      },
      {
        "date": "2026-07-21",
        "nav": 2.5522
      },
      {
        "date": "2026-07-22",
        "nav": 2.5573
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-07-08",
        "nav": 0.8024
      },
      {
        "date": "2026-07-09",
        "nav": 0.8137
      },
      {
        "date": "2026-07-10",
        "nav": 0.7979
      },
      {
        "date": "2026-07-13",
        "nav": 0.7823
      },
      {
        "date": "2026-07-14",
        "nav": 0.7834
      },
      {
        "date": "2026-07-15",
        "nav": 0.774
      },
      {
        "date": "2026-07-16",
        "nav": 0.762
      },
      {
        "date": "2026-07-17",
        "nav": 0.7261
      },
      {
        "date": "2026-07-20",
        "nav": 0.7192
      },
      {
        "date": "2026-07-21",
        "nav": 0.748
      },
      {
        "date": "2026-07-22",
        "nav": 0.7443
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-07-08",
        "nav": 4.8038
      },
      {
        "date": "2026-07-09",
        "nav": 5.0246
      },
      {
        "date": "2026-07-10",
        "nav": 4.8878
      },
      {
        "date": "2026-07-13",
        "nav": 4.7671
      },
      {
        "date": "2026-07-14",
        "nav": 4.7921
      },
      {
        "date": "2026-07-15",
        "nav": 4.6447
      },
      {
        "date": "2026-07-16",
        "nav": 4.5289
      },
      {
        "date": "2026-07-17",
        "nav": 4.1827
      },
      {
        "date": "2026-07-20",
        "nav": 4.1324
      },
      {
        "date": "2026-07-21",
        "nav": 4.3896
      },
      {
        "date": "2026-07-22",
        "nav": 4.4299
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-07-08",
        "nav": 0.595
      },
      {
        "date": "2026-07-09",
        "nav": 0.6199
      },
      {
        "date": "2026-07-10",
        "nav": 0.5961
      },
      {
        "date": "2026-07-13",
        "nav": 0.5701
      },
      {
        "date": "2026-07-14",
        "nav": 0.578
      },
      {
        "date": "2026-07-15",
        "nav": 0.5644
      },
      {
        "date": "2026-07-16",
        "nav": 0.552
      },
      {
        "date": "2026-07-17",
        "nav": 0.5323
      },
      {
        "date": "2026-07-20",
        "nav": 0.5321
      },
      {
        "date": "2026-07-21",
        "nav": 0.542
      },
      {
        "date": "2026-07-22",
        "nav": 0.5402
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-07-08",
        "nav": 0.606
      },
      {
        "date": "2026-07-09",
        "nav": 0.6314
      },
      {
        "date": "2026-07-10",
        "nav": 0.6072
      },
      {
        "date": "2026-07-13",
        "nav": 0.5807
      },
      {
        "date": "2026-07-14",
        "nav": 0.5888
      },
      {
        "date": "2026-07-15",
        "nav": 0.5749
      },
      {
        "date": "2026-07-16",
        "nav": 0.5623
      },
      {
        "date": "2026-07-17",
        "nav": 0.5422
      },
      {
        "date": "2026-07-20",
        "nav": 0.542
      },
      {
        "date": "2026-07-21",
        "nav": 0.5522
      },
      {
        "date": "2026-07-22",
        "nav": 0.5503
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-07-08",
        "nav": 1.24
      },
      {
        "date": "2026-07-09",
        "nav": 1.2393
      },
      {
        "date": "2026-07-10",
        "nav": 1.2356
      },
      {
        "date": "2026-07-13",
        "nav": 1.2377
      },
      {
        "date": "2026-07-14",
        "nav": 1.2547
      },
      {
        "date": "2026-07-15",
        "nav": 1.2615
      },
      {
        "date": "2026-07-16",
        "nav": 1.2486
      },
      {
        "date": "2026-07-17",
        "nav": 1.2356
      },
      {
        "date": "2026-07-20",
        "nav": 1.2552
      },
      {
        "date": "2026-07-21",
        "nav": 1.2574
      },
      {
        "date": "2026-07-22",
        "nav": 1.266
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-07-08",
        "nav": 1.1271
      },
      {
        "date": "2026-07-09",
        "nav": 1.1348
      },
      {
        "date": "2026-07-10",
        "nav": 1.1306
      },
      {
        "date": "2026-07-13",
        "nav": 1.1294
      },
      {
        "date": "2026-07-14",
        "nav": 1.1396
      },
      {
        "date": "2026-07-15",
        "nav": 1.1476
      },
      {
        "date": "2026-07-16",
        "nav": 1.1437
      },
      {
        "date": "2026-07-17",
        "nav": 1.1218
      },
      {
        "date": "2026-07-20",
        "nav": 1.1416
      },
      {
        "date": "2026-07-21",
        "nav": 1.147
      },
      {
        "date": "2026-07-22",
        "nav": 1.1485
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-07-08",
        "nav": 1.5976
      },
      {
        "date": "2026-07-09",
        "nav": 1.6369
      },
      {
        "date": "2026-07-10",
        "nav": 1.585
      },
      {
        "date": "2026-07-13",
        "nav": 1.5322
      },
      {
        "date": "2026-07-14",
        "nav": 1.5968
      },
      {
        "date": "2026-07-15",
        "nav": 1.5763
      },
      {
        "date": "2026-07-16",
        "nav": 1.513
      },
      {
        "date": "2026-07-17",
        "nav": 1.414
      },
      {
        "date": "2026-07-20",
        "nav": 1.3755
      },
      {
        "date": "2026-07-21",
        "nav": 1.4454
      },
      {
        "date": "2026-07-22",
        "nav": 1.4003
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-07-08",
        "nav": 2.856
      },
      {
        "date": "2026-07-09",
        "nav": 2.8985
      },
      {
        "date": "2026-07-10",
        "nav": 2.8451
      },
      {
        "date": "2026-07-13",
        "nav": 2.8259
      },
      {
        "date": "2026-07-14",
        "nav": 2.8856
      },
      {
        "date": "2026-07-15",
        "nav": 2.8844
      },
      {
        "date": "2026-07-16",
        "nav": 2.8657
      },
      {
        "date": "2026-07-17",
        "nav": 2.8194
      },
      {
        "date": "2026-07-20",
        "nav": 2.9068
      },
      {
        "date": "2026-07-21",
        "nav": 2.9046
      },
      {
        "date": "2026-07-22",
        "nav": 2.9386
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-07-08",
        "nav": 4.326
      },
      {
        "date": "2026-07-09",
        "nav": 4.64
      },
      {
        "date": "2026-07-10",
        "nav": 4.392
      },
      {
        "date": "2026-07-13",
        "nav": 4.263
      },
      {
        "date": "2026-07-14",
        "nav": 4.53
      },
      {
        "date": "2026-07-15",
        "nav": 4.426
      },
      {
        "date": "2026-07-16",
        "nav": 4.302
      },
      {
        "date": "2026-07-17",
        "nav": 3.874
      },
      {
        "date": "2026-07-20",
        "nav": 3.736
      },
      {
        "date": "2026-07-21",
        "nav": 4.075
      },
      {
        "date": "2026-07-22",
        "nav": 3.895
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-07-08",
        "nav": 1.4165
      },
      {
        "date": "2026-07-09",
        "nav": 1.407
      },
      {
        "date": "2026-07-10",
        "nav": 1.4072
      },
      {
        "date": "2026-07-13",
        "nav": 1.4283
      },
      {
        "date": "2026-07-14",
        "nav": 1.4403
      },
      {
        "date": "2026-07-15",
        "nav": 1.4569
      },
      {
        "date": "2026-07-16",
        "nav": 1.4503
      },
      {
        "date": "2026-07-17",
        "nav": 1.4556
      },
      {
        "date": "2026-07-20",
        "nav": 1.485
      },
      {
        "date": "2026-07-21",
        "nav": 1.4658
      },
      {
        "date": "2026-07-22",
        "nav": 1.4741
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-07-08",
        "nav": 0.764
      },
      {
        "date": "2026-07-09",
        "nav": 0.7999
      },
      {
        "date": "2026-07-10",
        "nav": 0.8285
      },
      {
        "date": "2026-07-13",
        "nav": 0.7612
      },
      {
        "date": "2026-07-14",
        "nav": 0.721
      },
      {
        "date": "2026-07-15",
        "nav": 0.7089
      },
      {
        "date": "2026-07-16",
        "nav": 0.6748
      },
      {
        "date": "2026-07-17",
        "nav": 0.6142
      },
      {
        "date": "2026-07-20",
        "nav": 0.5783
      },
      {
        "date": "2026-07-21",
        "nav": 0.6089
      },
      {
        "date": "2026-07-22",
        "nav": 0.5946
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-07-08",
        "nav": 16.198
      },
      {
        "date": "2026-07-09",
        "nav": 16.902
      },
      {
        "date": "2026-07-10",
        "nav": 16.228
      },
      {
        "date": "2026-07-13",
        "nav": 15.322
      },
      {
        "date": "2026-07-14",
        "nav": 16.703
      },
      {
        "date": "2026-07-15",
        "nav": 16.174
      },
      {
        "date": "2026-07-16",
        "nav": 15.668
      },
      {
        "date": "2026-07-17",
        "nav": 14.338
      },
      {
        "date": "2026-07-20",
        "nav": 13.234
      },
      {
        "date": "2026-07-21",
        "nav": 14.435
      },
      {
        "date": "2026-07-22",
        "nav": 13.752
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 4.0128,
      "price": 4.0128,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 4.069,
      "price": 4.069,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.34,
      "nav": 4.7468,
      "price": 4.7468,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 0.7205,
      "price": 0.7205,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.38,
      "nav": 2.3048,
      "price": 2.3048,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.17,
      "nav": 2.7921,
      "price": 2.7921,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 5.5149,
      "price": 5.5149,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 1.808,
      "price": 1.808,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.315,
      "price": 1.315,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 3.23,
      "price": 3.23,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.12,
      "price": 1.12,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.23,
      "nav": 2.356,
      "price": 2.356,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.47,
      "nav": 1.6629,
      "price": 1.6629,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.9238,
      "price": 1.9238,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 1.5547,
      "price": 1.5547,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.2079,
      "price": 2.2079,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.5092,
      "price": 2.5092,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 0.987,
      "price": 0.987,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.3474,
      "price": 2.3474,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 1.2436,
      "price": 1.2436,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 1.3,
      "sharpe": -1.53,
      "calmar": -1.53
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 0.95,
      "sharpe": 0.74,
      "calmar": 0.74
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 10.12,
      "sharpe": 1.6,
      "calmar": 1.6
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.26,
      "sharpe": -2.12,
      "calmar": -2.12
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 11.54,
      "sharpe": -2.14,
      "calmar": -2.14
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 5.12,
      "sharpe": -3.76,
      "calmar": -3.76
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.18,
      "sharpe": -1.4,
      "calmar": -1.4
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.26,
      "sharpe": -1.18,
      "calmar": -1.18
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.03,
      "sharpe": -0.28,
      "calmar": -0.28
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 7.04,
      "sharpe": 2.98,
      "calmar": 2.98
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.04,
      "sharpe": -1.61,
      "calmar": -1.61
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 6.79,
      "sharpe": -1.89,
      "calmar": -1.89
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 14.21,
      "sharpe": -3.43,
      "calmar": -3.43
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.22,
      "sharpe": -0.86,
      "calmar": -0.86
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.27,
      "sharpe": -1.28,
      "calmar": -1.28
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.89,
      "sharpe": 4.78,
      "calmar": 4.78
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.24,
      "sharpe": -2.17,
      "calmar": -2.17
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 5.42,
      "sharpe": -0.31,
      "calmar": -0.31
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.15,
      "sharpe": -1.66,
      "calmar": -1.66
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 2.56,
      "sharpe": -0.63,
      "calmar": -0.63
    }
  ],
  "news": [
    {
      "title": "据央视新闻消息，8月3日，中广核广东太平岭核电项目2号机组正式投产发电，标志着粤港澳大湾区首个“华龙一号”核电项目一期工程全面建成投产。此次投产发电的2号机组，采用我国具有完全自主知识产权的三代核电“华龙一号”技术，核心设备国产化率超90%，单台机组额定电功率约1200兆瓦。解读：以核能为代表的清洁稳定基荷电源，正成为各国争相布局的战略资源。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:02",
      "impact": "neutral"
    },
    {
      "title": "国家级经开区正进入“大洗牌”时代。近日，商务部公布2025年国家级经开区综合发展水平考核评价结果，考核评价靠后的广东揭东、河南濮阳、内蒙古呼伦贝尔、辽宁营口、黑龙江大庆经开区退出国家级经开区序列。这是2021年《国家级经济技术开发区综合发展水平考核评价办法(2021年版)》实施以来首次大规模“清退”，更意味着相关省份在未来两年内“不得推荐省级开发区升级”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:02",
      "impact": "neutral"
    },
    {
      "title": "据华声在线消息，日前，高端工程机械国家制造业创新中心（以下简称“国创中心”）获工业和信息化部批复组建，该中心由湖南省长沙市与江苏省徐州市携手建设，标志着湖南在汇聚创新资源、融入国家制造业创新体系上迈出关键一步。国创中心由湖南国重智联工程机械研究院有限公司与江苏汇智高端工程机械创新中心有限公司共同建设。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:02",
      "impact": "neutral"
    },
    {
      "title": "中国物流与采购联合会4日公布7月份中国物流业景气指数。指数继续保持扩张，其中，新订单指数连续回升，产业物流进一步向好。7月份中国物流业景气指数为50.4%，环比回落0.2个百分点，总体保持扩张。从分项指数看，7月份新订单指数为50.5%，环比回升0.2个百分点，今年以来连续5个月回升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:25",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道记者崔文静资本市场中长期发展，最新风向明确！证监会主席吴清在香港人民币国债期货上市仪式上致辞，为“十五五”时期内地与香港资本市场协同发展划定核心路线。近期最具标志性的动作，是5年期人民币国债期货在港交所正式挂牌交易。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:16",
      "impact": "neutral"
    },
    {
      "title": "近日，《广东省消费者权益保护条例》（下称《条例》）经广东省人大常委会会议审议通过，将于今年10月1日起施行。这部地方性法规聚焦消费领域的多个痛点难点，作出了一系列针对性规定，体现了广东省在消费者权益保护上的积极作为。法规的生命在于实施，要让这些好规定真正起效，还须进一步增强其可执行性，并完善执行中的全程监督。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:51",
      "impact": "neutral"
    },
    {
      "title": "据安徽省能源局、国网安徽电力消息，8月4日12点45分，安徽最大用电负荷继8月3日首创新高后再次突破历史纪录，达到6999万千瓦，同比增长2.1%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:20",
      "impact": "neutral"
    },
    {
      "title": "2026年7月30日，工业和信息化部组织制定并归口的《智能网联汽车自动驾驶系统安全要求》（GB 44721—2026）强制性国家标准由国家市场监督管理总局、国家标准化管理委员会批准发布，拟于2027年7月1日起正式实施。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:30",
      "impact": "neutral"
    },
    {
      "title": "今年上半年，北京市公共资源交易中心（以下简称交易中心）推动“政府采购项目供应商信用评价体系建设及应用研究”成果转化，逐步扩大政府采购信用评审加分试点应用范围，取得积极进展。据了解，交易中心会同国家大剧院组织实施了全市首个引入信用加分的政府集中采购项目——国家大剧院台湖舞美艺术中心2026—2028年度物业服务项目。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:07",
      "impact": "neutral"
    },
    {
      "title": "1、央行公告，8月5日将开展5000亿元买断式逆回购操作，期限为3个月。2、《智能网联汽车自动驾驶系统安全要求》强制性国家标准正式发布，拟于2027年7月1日起正式实施；对于L3级自动驾驶系统还应具备驾驶人接管能力。3、摩根士丹利报告指出，开放权重模型降低AI使用成本后，可能刺激更多企业部署，从而带动Token、算力和电力需求增长；无论模型开放程度如何变化，英伟达等均有望受益。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:59",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 58,
    "label": "中性",
    "upDownRatio": "5,290/354",
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
