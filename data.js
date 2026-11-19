// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-19 18:57:39
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-19 18:57 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-19",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3577.62,
      "change": -10.21,
      "changePct": "-0.28%",
      "high": 3584.28,
      "low": 3547.94,
      "volume": 412912755.0,
      "amount": 636909060000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10583.2,
      "change": -76.21,
      "changePct": "-0.71%",
      "high": 10664.29,
      "low": 10505.84,
      "volume": 491464197.0,
      "amount": 668238210000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2293.34,
      "change": -18.28,
      "changePct": "-0.79%",
      "high": 2315.78,
      "low": 2271.99,
      "volume": 139991626.0,
      "amount": 310120730000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1270.78,
      "change": 22.79,
      "changePct": "+1.83%",
      "high": 1276.78,
      "low": 1220.38,
      "volume": 12272345.0,
      "amount": 110121210000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3984.84,
      "change": 1.07,
      "changePct": "+0.03%",
      "high": 3995.55,
      "low": 3937.75,
      "volume": 163357787.0,
      "amount": 395441170000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6251.96,
      "change": -30.26,
      "changePct": "-0.48%",
      "high": 6321.4,
      "low": 6200.92,
      "volume": 113507820.0,
      "amount": 224286400000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.35万亿",
      "label": "成交额",
      "rawAmount": 2345116780000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,946/1,526",
      "label": "涨/跌家数",
      "rawUp": 2946,
      "rawDown": 1526,
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
    "totalInflow": 9.73,
    "totalOutflow": 0,
    "netFlow": 9.73,
    "netFlowTrend": [
      1.95,
      3.89,
      5.84,
      7.78,
      9.73
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
      "name": "半导体",
      "inflow": 3.32,
      "pct": 1.04
    },
    {
      "name": "银行",
      "inflow": 2.83,
      "pct": 0.11
    },
    {
      "name": "券商",
      "inflow": 1.71,
      "pct": 0.43
    },
    {
      "name": "芯片",
      "inflow": 1.64,
      "pct": 1.07
    },
    {
      "name": "家电",
      "inflow": 0.16,
      "pct": 0.65
    },
    {
      "name": "食品",
      "inflow": 0.08,
      "pct": 0.58
    },
    {
      "name": "医药",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "白酒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "电子",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.21
    },
    {
      "name": "农业",
      "inflow": -0.14,
      "pct": -1.11
    },
    {
      "name": "新能源车",
      "inflow": -0.23,
      "pct": -1.1
    },
    {
      "name": "光伏",
      "inflow": -0.34,
      "pct": -0.61
    },
    {
      "name": "军工",
      "inflow": -0.65,
      "pct": -0.95
    },
    {
      "name": "医疗",
      "inflow": -0.75,
      "pct": -0.3
    },
    {
      "name": "创新药",
      "inflow": -0.96,
      "pct": -0.26
    },
    {
      "name": "煤炭",
      "inflow": -1.02,
      "pct": -1.19
    },
    {
      "name": "有色",
      "inflow": -1.45,
      "pct": -1.16
    },
    {
      "name": "5G",
      "inflow": -1.49,
      "pct": -0.66
    },
    {
      "name": "通信",
      "inflow": -5.81,
      "pct": -0.52
    }
  ],
  "sectors": [
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.849,
      "changePct": 1.07,
      "change": 0.009,
      "turnover": 5.47
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.779,
      "changePct": 1.04,
      "change": 0.008,
      "turnover": 11.07
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.386,
      "changePct": 0.65,
      "change": 0.009,
      "turnover": 0.52
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.524,
      "changePct": 0.58,
      "change": 0.003,
      "turnover": 0.26
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.472,
      "changePct": 0.43,
      "change": 0.002,
      "turnover": 5.69
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.915,
      "changePct": 0.11,
      "change": 0.001,
      "turnover": 9.42
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.379,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.67
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.44,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.8
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.604,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.57
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.945,
      "changePct": -0.21,
      "change": -0.002,
      "turnover": 0.05
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.775,
      "changePct": -0.26,
      "change": -0.002,
      "turnover": 3.21
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.332,
      "changePct": -0.3,
      "change": -0.001,
      "turnover": 2.49
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.38,
      "changePct": -0.52,
      "change": -0.002,
      "turnover": 19.38
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.656,
      "changePct": -0.61,
      "change": -0.004,
      "turnover": 1.15
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.602,
      "changePct": -0.66,
      "change": -0.004,
      "turnover": 4.97
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.934,
      "changePct": -0.95,
      "change": -0.009,
      "turnover": 2.16
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.253,
      "changePct": -1.1,
      "change": -0.014,
      "turnover": 0.77
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.712,
      "changePct": -1.11,
      "change": -0.008,
      "turnover": 0.46
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.279,
      "changePct": -1.16,
      "change": -0.015,
      "turnover": 4.85
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.166,
      "changePct": -1.19,
      "change": -0.014,
      "turnover": 3.39
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.018,
      "changePct": -1.45,
      "change": -0.015,
      "turnover": 0.39
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.882,
      "changePct": -1.47,
      "change": -0.028,
      "turnover": 0.77
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.057,
      "changePct": -1.95,
      "change": -0.021,
      "turnover": 1.37
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.74,
      "changePct": -2.5,
      "change": -0.019,
      "turnover": 2.32
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.732,
      "changePct": -2.53,
      "change": -0.019,
      "turnover": 1.22
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.914,
      "changePct": -2.66,
      "change": -0.025,
      "turnover": 0.76
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.949,
      "changePct": -3.06,
      "change": -0.03,
      "turnover": 0.19
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.313,
      "changePct": -4.02,
      "change": -0.055,
      "turnover": 0.72
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.06,
      "changePct": 0.05,
      "amount": 112.93,
      "netFlow": 28.23
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.344,
      "changePct": 1.66,
      "amount": 108.31,
      "netFlow": 27.08
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.239,
      "changePct": 0.09,
      "amount": 96.4,
      "netFlow": 24.1
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.95,
      "changePct": 0.1,
      "amount": 23.26,
      "netFlow": 5.81
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.779,
      "changePct": 1.04,
      "amount": 11.07,
      "netFlow": 2.77
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.472,
      "changePct": 0.43,
      "amount": 5.69,
      "netFlow": 1.42
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.882,
      "changePct": -1.47,
      "amount": 0.77,
      "netFlow": -0.19
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.379,
      "changePct": 0.0,
      "amount": 2.67,
      "netFlow": -0.67
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.883,
      "changePct": 0.0,
      "amount": 25.6,
      "netFlow": -6.4
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.286,
      "changePct": -0.36,
      "amount": 103.62,
      "netFlow": -25.9
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.06,
      "changePct": 0.05,
      "amount": 112.93,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.883,
      "changePct": 0.0,
      "amount": 25.6,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.286,
      "changePct": -0.36,
      "amount": 103.62,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.239,
      "changePct": 0.09,
      "amount": 96.4,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.95,
      "changePct": 0.1,
      "amount": 23.26,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "芯片",
      "turnover": 5.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.07,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "家电",
      "turnover": 0.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.26,
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
      "name": "银行",
      "turnover": 9.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 2.8,
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
      "name": "基建",
      "turnover": 0.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 3.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 2.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 19.38,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 1.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 4.97,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.77,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 3.39,
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
      "nav": 3.5039,
      "ret1w": -2.84,
      "ret1m": -13.58,
      "ret3m": -8.68,
      "ret6m": -19.2,
      "ret1y": -32.83,
      "ret2y": -6.2,
      "ret3y": 56.92
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.6355,
      "ret1w": 1.33,
      "ret1m": -7.92,
      "ret3m": -21.28,
      "ret6m": -36.83,
      "ret1y": -45.07,
      "ret2y": -29.62,
      "ret3y": -4.04
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.9648,
      "ret1w": 0.48,
      "ret1m": -16.48,
      "ret3m": -31.58,
      "ret6m": -46.86,
      "ret1y": -46.41,
      "ret2y": -6.28,
      "ret3y": 50.77
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7744,
      "ret1w": 0.13,
      "ret1m": 2.38,
      "ret3m": 9.53,
      "ret6m": 9.5,
      "ret1y": 8.98,
      "ret2y": -4.38,
      "ret3y": 6.51
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8557,
      "ret1w": 0.48,
      "ret1m": -8.77,
      "ret3m": -3.95,
      "ret6m": -18.65,
      "ret1y": -31.98,
      "ret2y": -38.92,
      "ret3y": -25.29
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5167,
      "ret1w": 0.04,
      "ret1m": -6.85,
      "ret3m": -3.2,
      "ret6m": -8.68,
      "ret1y": -21.99,
      "ret2y": -28.78,
      "ret3y": 5.85
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2733,
      "ret1w": -0.15,
      "ret1m": -0.36,
      "ret3m": 0.6,
      "ret6m": -4.01,
      "ret1y": -4.41,
      "ret2y": -0.29,
      "ret3y": 28.1
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.562,
      "ret1w": -1.08,
      "ret1m": -7.3,
      "ret3m": -10.02,
      "ret6m": -17.62,
      "ret1y": -26.22,
      "ret2y": -12.74,
      "ret3y": 17.71
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0782,
      "ret1w": 0.02,
      "ret1m": -5.15,
      "ret3m": -9.11,
      "ret6m": -20.32,
      "ret1y": -24.12,
      "ret2y": -12.51,
      "ret3y": 1.18
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.465,
      "ret1w": 0.08,
      "ret1m": -5.99,
      "ret3m": -11.04,
      "ret6m": -28.76,
      "ret1y": -27.31,
      "ret2y": 16.49,
      "ret3y": 93.33
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.167,
      "ret1w": 0.09,
      "ret1m": 1.83,
      "ret3m": 4.48,
      "ret6m": 3.92,
      "ret1y": 5.99,
      "ret2y": -8.61,
      "ret3y": -7.6
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.097,
      "ret1w": -2.1,
      "ret1m": -7.78,
      "ret3m": -6.51,
      "ret6m": -12.3,
      "ret1y": -18.15,
      "ret2y": -18.85,
      "ret3y": -1.64
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.232,
      "ret1w": 1.93,
      "ret1m": -2.69,
      "ret3m": -11.79,
      "ret6m": -31.25,
      "ret1y": -57.78,
      "ret2y": -55.93,
      "ret3y": -35.05
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8957,
      "ret1w": 0.04,
      "ret1m": -0.07,
      "ret3m": 1.65,
      "ret6m": -1.02,
      "ret1y": 7.66,
      "ret2y": 0.16,
      "ret3y": -4.15
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3531,
      "ret1w": -0.73,
      "ret1m": -6.55,
      "ret3m": -8.86,
      "ret6m": -17.3,
      "ret1y": -24.61,
      "ret2y": -12.76,
      "ret3y": 15.84
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2817,
      "ret1w": -0.26,
      "ret1m": -15.6,
      "ret3m": -28.65,
      "ret6m": -46.67,
      "ret1y": -52.89,
      "ret2y": -1.85,
      "ret3y": 24.8
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.546,
      "ret1w": -0.37,
      "ret1m": -1.09,
      "ret3m": -1.26,
      "ret6m": 0.24,
      "ret1y": -4.12,
      "ret2y": -6.19,
      "ret3y": 1.31
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.868,
      "ret1w": -0.69,
      "ret1m": -8.15,
      "ret3m": -7.95,
      "ret6m": -19.48,
      "ret1y": -8.34,
      "ret2y": -17.33,
      "ret3y": -19.7
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4413,
      "ret1w": 0.21,
      "ret1m": 2.81,
      "ret3m": 3.33,
      "ret6m": 4.57,
      "ret1y": 3.72,
      "ret2y": 2.76,
      "ret3y": 11.27
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.145,
      "ret1w": -1.02,
      "ret1m": -5.86,
      "ret3m": -5.74,
      "ret6m": -15.13,
      "ret1y": -11.84,
      "ret2y": -1.42,
      "ret3y": 36.17
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9222,
      "ret1w": 0.27,
      "ret1m": -6.54,
      "ret3m": -13.19,
      "ret6m": -28.28,
      "ret1y": -33.36,
      "ret2y": -19.84,
      "ret3y": -1.27
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9818,
      "ret1w": 0.28,
      "ret1m": -6.53,
      "ret3m": -13.16,
      "ret6m": -28.21,
      "ret1y": -33.23,
      "ret2y": -19.54,
      "ret3y": -0.49
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0307,
      "ret1w": -0.37,
      "ret1m": -1.05,
      "ret3m": -2.8,
      "ret6m": -5.74,
      "ret1y": -5.8,
      "ret2y": -5.03,
      "ret3y": 1.15
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0065,
      "ret1w": -0.37,
      "ret1m": -1.03,
      "ret3m": -2.75,
      "ret6m": -5.6,
      "ret1y": -5.52,
      "ret2y": -4.46,
      "ret3y": 2.38
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7054,
      "ret1w": -0.48,
      "ret1m": -0.08,
      "ret3m": 0.92,
      "ret6m": -2.22,
      "ret1y": -8.73,
      "ret2y": -14.01,
      "ret3y": 0.61
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.724,
      "ret1w": -0.48,
      "ret1m": -0.07,
      "ret3m": 0.96,
      "ret6m": -2.1,
      "ret1y": -8.52,
      "ret2y": -13.57,
      "ret3y": 1.61
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8891,
      "ret1w": 0.31,
      "ret1m": -6.64,
      "ret3m": -20.17,
      "ret6m": -31.63,
      "ret1y": -32.52,
      "ret2y": 1.52,
      "ret3y": 64.28
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2031,
      "ret1w": -0.65,
      "ret1m": -6.26,
      "ret3m": -4.05,
      "ret6m": -13.65,
      "ret1y": -17.2,
      "ret2y": 4.16,
      "ret3y": 41.31
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6722,
      "ret1w": -1.39,
      "ret1m": -6.96,
      "ret3m": -1.95,
      "ret6m": -9.16,
      "ret1y": -24.28,
      "ret2y": -17.54,
      "ret3y": -6.37
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.7146,
      "ret1w": -1.1,
      "ret1m": -7.44,
      "ret3m": -1.76,
      "ret6m": -12.12,
      "ret1y": -14.7,
      "ret2y": 22.7,
      "ret3y": 79.67
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4524,
      "ret1w": -0.04,
      "ret1m": -0.31,
      "ret3m": -4.6,
      "ret6m": -11.21,
      "ret1y": -17.52,
      "ret2y": 0.33,
      "ret3y": 22.24
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4615,
      "ret1w": -0.02,
      "ret1m": -0.28,
      "ret3m": -4.55,
      "ret6m": -11.11,
      "ret1y": -17.34,
      "ret2y": 0.74,
      "ret3y": 23.23
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2644,
      "ret1w": -0.02,
      "ret1m": 0.92,
      "ret3m": -0.39,
      "ret6m": -0.94,
      "ret1y": -1.65,
      "ret2y": -1.91,
      "ret3y": 0.9
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0599,
      "ret1w": -0.33,
      "ret1m": 0.23,
      "ret3m": -3.68,
      "ret6m": -6.73,
      "ret1y": -4.11,
      "ret2y": -9.13,
      "ret3y": 0.42
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1706,
      "ret1w": -0.33,
      "ret1m": 0.33,
      "ret3m": -2.04,
      "ret6m": -18.48,
      "ret1y": -30.73,
      "ret2y": -21.69,
      "ret3y": -17.53
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6355,
      "ret1w": 0.64,
      "ret1m": -4.13,
      "ret3m": -8.23,
      "ret6m": -12.07,
      "ret1y": -17.23,
      "ret2y": -5.97,
      "ret3y": 21.76
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.063,
      "ret1w": 0.34,
      "ret1m": -10.69,
      "ret3m": -21.2,
      "ret6m": -38.05,
      "ret1y": -47.24,
      "ret2y": -1.01,
      "ret3y": 59.8
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.6002,
      "ret1w": -0.48,
      "ret1m": 2.65,
      "ret3m": 3.04,
      "ret6m": 8.49,
      "ret1y": 7.92,
      "ret2y": 4.66,
      "ret3y": 6.04
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4692,
      "ret1w": -2.19,
      "ret1m": -17.8,
      "ret3m": -11.67,
      "ret6m": -27.41,
      "ret1y": -36.35,
      "ret2y": -15.64,
      "ret3y": -23.81
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.199,
      "ret1w": 0.58,
      "ret1m": -13.28,
      "ret3m": -27.29,
      "ret6m": -43.39,
      "ret1y": -32.68,
      "ret2y": 11.6,
      "ret3y": 94.38
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0426,
      "ret1w": -0.08,
      "ret1m": -0.88,
      "ret3m": -1.39,
      "ret6m": -2.2,
      "ret1y": -2.6,
      "ret2y": -1.57,
      "ret3y": 1.39
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0903,
      "ret1w": -0.07,
      "ret1m": -0.87,
      "ret3m": -1.39,
      "ret6m": -2.16,
      "ret1y": -2.5,
      "ret2y": -1.36,
      "ret3y": 2.03
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": 0.04,
      "ret1m": -0.02,
      "ret3m": -0.01,
      "ret6m": 0.27,
      "ret1y": 0.56,
      "ret2y": 1.46,
      "ret3y": 2.77
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.102,
      "ret1w": 0.03,
      "ret1m": 0.0,
      "ret3m": 0.05,
      "ret6m": 0.34,
      "ret1y": 0.66,
      "ret2y": 1.47,
      "ret3y": 3.76
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1119,
      "ret1w": 0.03,
      "ret1m": 0.0,
      "ret3m": 0.06,
      "ret6m": 0.39,
      "ret1y": 0.76,
      "ret2y": 1.68,
      "ret3y": 4.19
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0782,
      "ret1w": 0.02,
      "ret1m": 0.0,
      "ret3m": 0.05,
      "ret6m": 0.2,
      "ret1y": 0.54,
      "ret2y": 1.4,
      "ret3y": 2.83
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0934,
      "ret1w": 0.02,
      "ret1m": 0.02,
      "ret3m": 0.07,
      "ret6m": 0.28,
      "ret1y": 0.7,
      "ret2y": 1.72,
      "ret3y": 3.49
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9918,
      "ret1w": -0.14,
      "ret1m": -1.69,
      "ret3m": -3.25,
      "ret6m": -6.97,
      "ret1y": -9.48,
      "ret2y": -2.09,
      "ret3y": 3.49
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1343,
      "ret1w": -0.49,
      "ret1m": -2.67,
      "ret3m": -3.75,
      "ret6m": -6.79,
      "ret1y": -10.35,
      "ret2y": -5.52,
      "ret3y": -2.31
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9989,
      "ret1w": -0.14,
      "ret1m": -1.68,
      "ret3m": -3.22,
      "ret6m": -6.88,
      "ret1y": -9.31,
      "ret2y": -1.71,
      "ret3y": 4.33
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0443,
      "ret1w": 0.02,
      "ret1m": -0.07,
      "ret3m": -0.04,
      "ret6m": 0.27,
      "ret1y": 0.64,
      "ret2y": 1.56,
      "ret3y": 3.46
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0859,
      "ret1w": 0.03,
      "ret1m": -1.44,
      "ret3m": -3.6,
      "ret6m": -7.15,
      "ret1y": -10.35,
      "ret2y": -8.24,
      "ret3y": -1.55
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.201,
      "ret1w": -0.07,
      "ret1m": -0.02,
      "ret3m": 0.06,
      "ret6m": -1.23,
      "ret1y": -2.28,
      "ret2y": 0.71,
      "ret3y": 9.63
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.114,
      "ret1w": 0.0,
      "ret1m": -0.62,
      "ret3m": -0.76,
      "ret6m": -2.24,
      "ret1y": -3.32,
      "ret2y": 0.55,
      "ret3y": 6.53
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1848,
      "ret1w": 0.0,
      "ret1m": -0.63,
      "ret3m": -0.73,
      "ret6m": -2.14,
      "ret1y": -3.14,
      "ret2y": 0.95,
      "ret3y": 7.42
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.746,
      "ret1w": 1.04,
      "ret1m": -10.69,
      "ret3m": -17.64,
      "ret6m": -27.34,
      "ret1y": -25.32,
      "ret2y": 29.24,
      "ret3y": 78.35
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.8397,
      "ret1w": -0.12,
      "ret1m": -3.12,
      "ret3m": -4.35,
      "ret6m": -4.47,
      "ret1y": -3.05,
      "ret2y": 3.42,
      "ret3y": 24.8
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6277,
      "ret1w": -0.34,
      "ret1m": -1.52,
      "ret3m": -5.08,
      "ret6m": -13.17,
      "ret1y": -21.46,
      "ret2y": -8.97,
      "ret3y": 19.56
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.0442,
      "ret1w": 0.27,
      "ret1m": -8.22,
      "ret3m": -10.4,
      "ret6m": -12.78,
      "ret1y": -6.59,
      "ret2y": 5.99,
      "ret3y": 28.32
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9194,
      "ret1w": 0.15,
      "ret1m": -0.39,
      "ret3m": 0.05,
      "ret6m": -1.96,
      "ret1y": -2.34,
      "ret2y": -5.88,
      "ret3y": -3.1
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.1901,
      "ret1w": 0.3,
      "ret1m": -5.52,
      "ret3m": -10.43,
      "ret6m": -18.88,
      "ret1y": -18.13,
      "ret2y": 17.73,
      "ret3y": 52.65
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.264,
      "ret1w": -0.37,
      "ret1m": -4.27,
      "ret3m": -4.86,
      "ret6m": -7.36,
      "ret1y": -6.53,
      "ret2y": -1.64,
      "ret3y": 8.36
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.741,
      "ret1w": -0.27,
      "ret1m": -6.32,
      "ret3m": -11.15,
      "ret6m": -24.31,
      "ret1y": -23.92,
      "ret2y": -34.94,
      "ret3y": -19.19
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.1674,
      "ret1w": 1.87,
      "ret1m": -9.27,
      "ret3m": -16.74,
      "ret6m": -25.18,
      "ret1y": -25.1,
      "ret2y": 28.32,
      "ret3y": 94.07
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.3889,
      "ret1w": -3.93,
      "ret1m": -7.41,
      "ret3m": -13.33,
      "ret6m": -11.61,
      "ret1y": -9.87,
      "ret2y": 10.63,
      "ret3y": 33.55
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5022,
      "ret1w": -0.12,
      "ret1m": -5.04,
      "ret3m": -8.85,
      "ret6m": -11.83,
      "ret1y": -8.66,
      "ret2y": 6.71,
      "ret3y": 35.27
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1386,
      "ret1w": 0.04,
      "ret1m": -5.27,
      "ret3m": -7.08,
      "ret6m": -13.67,
      "ret1y": -13.51,
      "ret2y": -2.09,
      "ret3y": 17.3
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.281,
      "ret1w": 0.16,
      "ret1m": -1.91,
      "ret3m": 3.14,
      "ret6m": -2.73,
      "ret1y": -1.84,
      "ret2y": 4.66,
      "ret3y": -7.33
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.78,
      "ret1w": -3.1,
      "ret1m": -6.32,
      "ret3m": -10.15,
      "ret6m": -14.59,
      "ret1y": -19.16,
      "ret2y": -13.34,
      "ret3y": 26.43
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.1542,
      "ret1w": 0.51,
      "ret1m": -5.7,
      "ret3m": -11.48,
      "ret6m": -19.88,
      "ret1y": -17.57,
      "ret2y": 12.73,
      "ret3y": 34.66
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0133,
      "ret1w": 0.05,
      "ret1m": -0.03,
      "ret3m": 0.1,
      "ret6m": 0.55,
      "ret1y": 1.08,
      "ret2y": 2.38,
      "ret3y": 3.77
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.001,
      "ret1w": 0.05,
      "ret1m": -0.03,
      "ret3m": 0.1,
      "ret6m": 0.58,
      "ret1y": 1.1,
      "ret2y": 2.44,
      "ret3y": 3.93
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.19,
      "ret1w": 0.08,
      "ret1m": -2.38,
      "ret3m": -5.48,
      "ret6m": -16.9,
      "ret1y": -23.47,
      "ret2y": -15.96,
      "ret3y": -3.64
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.181,
      "ret1w": -0.59,
      "ret1m": -5.01,
      "ret3m": -10.83,
      "ret6m": -23.45,
      "ret1y": -28.4,
      "ret2y": -17.07,
      "ret3y": 1.87
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3491,
      "ret1w": -0.84,
      "ret1m": -5.21,
      "ret3m": -11.86,
      "ret6m": -19.06,
      "ret1y": -22.15,
      "ret2y": -11.84,
      "ret3y": 25.26
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8077,
      "ret1w": -0.25,
      "ret1m": -2.66,
      "ret3m": -7.01,
      "ret6m": -15.21,
      "ret1y": -17.37,
      "ret2y": -8.52,
      "ret3y": 5.79
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8611,
      "ret1w": -0.25,
      "ret1m": -2.65,
      "ret3m": -6.97,
      "ret6m": -15.12,
      "ret1y": -17.2,
      "ret2y": -8.15,
      "ret3y": 6.64
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6327,
      "ret1w": -0.43,
      "ret1m": -5.04,
      "ret3m": -7.58,
      "ret6m": -18.73,
      "ret1y": -25.99,
      "ret2y": -10.98,
      "ret3y": 6.65
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5717,
      "ret1w": 0.02,
      "ret1m": -1.39,
      "ret3m": -4.22,
      "ret6m": -12.23,
      "ret1y": -16.16,
      "ret2y": -11.19,
      "ret3y": 3.03
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4027,
      "ret1w": -0.68,
      "ret1m": -3.9,
      "ret3m": -5.08,
      "ret6m": -10.74,
      "ret1y": -15.82,
      "ret2y": -4.8,
      "ret3y": 16.72
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4534,
      "ret1w": 0.21,
      "ret1m": -5.33,
      "ret3m": -11.74,
      "ret6m": -27.16,
      "ret1y": -31.78,
      "ret2y": -17.67,
      "ret3y": 4.18
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0011,
      "ret1w": 0.23,
      "ret1m": 0.31,
      "ret3m": -1.45,
      "ret6m": -7.27,
      "ret1y": -7.39,
      "ret2y": -9.32,
      "ret3y": 5.52
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4482,
      "ret1w": -1.21,
      "ret1m": -3.5,
      "ret3m": -3.62,
      "ret6m": -4.68,
      "ret1y": -0.15,
      "ret2y": 5.68,
      "ret3y": 28.4
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.1637,
      "ret1w": 0.39,
      "ret1m": -4.13,
      "ret3m": -6.68,
      "ret6m": -8.34,
      "ret1y": -7.56,
      "ret2y": 3.68,
      "ret3y": 19.73
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1582,
      "ret1w": -0.18,
      "ret1m": -3.57,
      "ret3m": -10.41,
      "ret6m": -22.7,
      "ret1y": -27.94,
      "ret2y": -17.31,
      "ret3y": 1.36
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9287,
      "ret1w": -0.2,
      "ret1m": -4.96,
      "ret3m": -9.84,
      "ret6m": -25.04,
      "ret1y": -26.64,
      "ret2y": -15.44,
      "ret3y": 5.5
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.932,
      "ret1w": -0.21,
      "ret1m": -4.98,
      "ret3m": -9.8,
      "ret6m": -24.87,
      "ret1y": -26.49,
      "ret2y": -15.35,
      "ret3y": 5.25
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1952,
      "ret1w": -0.16,
      "ret1m": -3.72,
      "ret3m": -5.38,
      "ret6m": -18.0,
      "ret1y": -23.48,
      "ret2y": -13.1,
      "ret3y": 6.41
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2236,
      "ret1w": -0.16,
      "ret1m": -3.71,
      "ret3m": -5.34,
      "ret6m": -17.92,
      "ret1y": -23.32,
      "ret2y": -12.75,
      "ret3y": 7.27
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5747,
      "ret1w": -0.15,
      "ret1m": -8.93,
      "ret3m": -12.22,
      "ret6m": -26.48,
      "ret1y": -30.35,
      "ret2y": -15.23,
      "ret3y": 11.47
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1503,
      "ret1w": 0.02,
      "ret1m": -0.71,
      "ret3m": -0.61,
      "ret6m": -1.39,
      "ret1y": -1.82,
      "ret2y": 0.11,
      "ret3y": 4.47
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1707,
      "ret1w": 0.02,
      "ret1m": -0.7,
      "ret3m": -0.59,
      "ret6m": -1.32,
      "ret1y": -1.67,
      "ret2y": 0.41,
      "ret3y": 5.1
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0877,
      "ret1w": 0.03,
      "ret1m": -0.02,
      "ret3m": 0.02,
      "ret6m": 0.35,
      "ret1y": 0.7,
      "ret2y": 1.77,
      "ret3y": 3.36
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4104,
      "ret1w": 0.05,
      "ret1m": -0.07,
      "ret3m": -0.07,
      "ret6m": 0.0,
      "ret1y": 0.1,
      "ret2y": 0.41,
      "ret3y": 4.78
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4639,
      "ret1w": 0.05,
      "ret1m": -0.06,
      "ret3m": -0.03,
      "ret6m": 0.1,
      "ret1y": 0.3,
      "ret2y": 0.81,
      "ret3y": 5.63
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.784,
      "ret1w": -0.84,
      "ret1m": -6.02,
      "ret3m": -8.24,
      "ret6m": -15.44,
      "ret1y": -10.24,
      "ret2y": 2.63,
      "ret3y": 25.61
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9281,
      "ret1w": -1.96,
      "ret1m": -10.85,
      "ret3m": -13.67,
      "ret6m": -25.39,
      "ret1y": -24.75,
      "ret2y": -19.34,
      "ret3y": 1.14
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.68,
      "nav": 3.5039,
      "price": 3.5039,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.4,
      "nav": 2.6355,
      "price": 2.6355,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.82,
      "nav": 2.9648,
      "price": 2.9648,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.12,
      "nav": 0.7744,
      "price": 0.7744,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.44,
      "nav": 1.8557,
      "price": 1.8557,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.34,
      "nav": 2.5167,
      "price": 2.5167,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 5.2733,
      "price": 5.2733,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 1.562,
      "price": 1.562,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.26,
      "nav": 1.0782,
      "price": 1.0782,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.3,
      "nav": 2.465,
      "price": 2.465,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.09,
      "nav": 1.167,
      "price": 1.167,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 2.097,
      "price": 2.097,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.232,
      "price": 1.232,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.0,
      "nav": 1.8957,
      "price": 1.8957,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 1.3531,
      "price": 1.3531,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.78,
      "nav": 1.2817,
      "price": 1.2817,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.546,
      "price": 2.546,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.41,
      "nav": 0.868,
      "price": 0.868,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 2.4413,
      "price": 2.4413,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.29,
      "nav": 1.145,
      "price": 1.145,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 20.37,
      "sharpe": -1.77,
      "calmar": -1.77
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 11.88,
      "sharpe": -3.49,
      "calmar": -3.49
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 24.72,
      "sharpe": -2.16,
      "calmar": -2.16
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.57,
      "sharpe": 1.22,
      "calmar": 1.22
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 13.15,
      "sharpe": -2.32,
      "calmar": -2.32
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 10.27,
      "sharpe": -1.86,
      "calmar": -1.86
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.54,
      "sharpe": -0.82,
      "calmar": -0.82
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 10.95,
      "sharpe": -2.13,
      "calmar": -2.13
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 7.73,
      "sharpe": -2.38,
      "calmar": -2.38
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.98,
      "sharpe": -2.48,
      "calmar": -2.48
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.75,
      "sharpe": 0.88,
      "calmar": 0.88
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 11.67,
      "sharpe": -1.42,
      "calmar": -1.42
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 4.04,
      "sharpe": -7.51,
      "calmar": -7.51
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.11,
      "sharpe": 1.51,
      "calmar": 1.51
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.82,
      "sharpe": -2.13,
      "calmar": -2.13
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 23.4,
      "sharpe": -2.57,
      "calmar": -2.57
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.64,
      "sharpe": -0.68,
      "calmar": -0.68
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 12.23,
      "sharpe": -0.63,
      "calmar": -0.63
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 4.21,
      "sharpe": 0.48,
      "calmar": 0.48
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 8.79,
      "sharpe": -1.09,
      "calmar": -1.09
    }
  ],
  "news": [
    {
      "title": "11月19日，国家能源局关于我国虚拟电厂的首份报告——《中国虚拟电厂发展报告（2026）》（下称“报告”）正式发布。报告显示：截至2026年6月底，我国已建成并投运的虚拟电厂数量为592个，同比增长78.9%；虚拟电厂最大调节能力达到2042.8万千瓦，同比增长62.7%，提前完成2027年调节能力达到2000万千瓦以上的发展目标。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:18",
      "impact": "neutral"
    },
    {
      "title": "政策层面引导金融资源向“六张网”建设领域集聚，银行业也加码布局，为相关项目量身定制融资方案。业内人士普遍认为，银行支持“六张网”建设，既有利于稳定基建投资、扩大有效需求，也有助于优化金融资源配置，为银行业提供优化资产结构、培育新的信贷增长点等机遇。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:18",
      "impact": "neutral"
    },
    {
      "title": "11月19日，湖北证监局联合湖北省委金融办（湖北省地方金融管理局）和黄石市政府共同举办“资本市场服务荆楚行”黄石站活动，沪深北交易所、大连商品交易所和市场机构等多名专家现场授课。“黄石正处在蓄势跃升、点石成金的关键窗口期，比以往任何时候都更需要资本市场的有力支撑。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:18",
      "impact": "neutral"
    },
    {
      "title": "正值年底冲刺期，某股份行小微企业客户经理李辉（化名）的日程比往年更满：上午跑两家存量客户做续贷回访，下午见新客户，还得挤出时间细看对方近两年的财报。“又得保质又得保量，压力一点没少。”李辉告诉上海证券报记者，以前为完成指标，“先做业务再挑客户，企业资质好就多贷一点”，现在则是“先选客户再做业务”。这正是小微信贷考核“松绑”半年后的一线切面。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:17",
      "impact": "neutral"
    },
    {
      "title": "中小银行改革化险持续提速。11月18日，国家金融监督管理总局贵州监管局及黔东南金融监管分局披露多份批复文件称，贵州凯里农村商业银行等19家机构获批解散，其相关债权债务由新设立的黔东南农村商业银行（下称“黔东南农商行”）承继。同日，黔东南农商行及321家分支机构正式获批开业，董事长及行长人选也同步落定。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:07",
      "impact": "neutral"
    },
    {
      "title": "11月19日，商务部消费促进司负责人谈及今年前10月的消费市场情况时表示，今年以来，我国消费市场规模稳步扩大，呈现商品消费稳、服务消费旺、新型消费热的特点。数据显示，今年前10个月，服务零售额增长4.9%，增速高于商品零售额4.0个百分点。“消费场景不断丰富拓展，节假日旅游、休闲娱乐等服务消费热度不减，旅游咨询租赁服务类、文体休闲服务类零售额均明显快于服务零售额增长。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:07",
      "impact": "neutral"
    },
    {
      "title": "11月18日至20日，以“网联万物智兴千业”为主题的2026中国5G+工业互联网大会在湖北武汉举行。主题会议上，工业和信息化部正式启动2026年“5G+工业互联网”融合应用城市试点（下称“城市试点”）工作。这是继2024年首批城市试点之后再次启动该项工作。2023年，工业和信息化部发布文件，鼓励有基础、有条件的地方建设“5G+工业互联网”融合应用城市试点。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:07",
      "impact": "neutral"
    },
    {
      "title": "四季度以来，作为更加积极的财政政策的重要抓手，各类债务工具密集落地。地方债方面，万得数据显示，截至11月19日，今年以来新增专项债发行规模已达到40876亿元，发行进度（全年额度4.4万亿元）达到93%。从资金投向看，投向市政和产业园区基础设施建设、交通基础设施、民生服务、棚户区改造的资金超过五成。国债发行也在同步推进。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "商务部等9部门近日印发的《关于深入推进再生资源回收体系建设促进回收行业高质量发展的意见》（以下简称《意见》）提出，抓好动力电池、光伏组件、风机叶片“新三样”固废回收拆解。上海自由士信息科技有限公司CEO陈榕榕对《证券日报》记者表示，此次《意见》从供需对接、规则完善等层面进一步健全了产业发展框架。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "11月19日，国家能源局发布《中国虚拟电厂发展报告（2026）》（以下简称《报告》）。《报告》显示，截至2026年6月底，我国虚拟电厂最大调节能力已达2042.8万千瓦，提前完成《关于加快推进虚拟电厂发展的指导意见》（以下简称《指导意见》）提出的到2027年“全国虚拟电厂调节能力达到2000万千瓦以上”这一发展目标。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,946/1,526",
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
