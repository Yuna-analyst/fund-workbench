// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-21 17:18:46
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-21 17:18 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-20",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3533.79,
      "change": -43.83,
      "changePct": "-1.23%",
      "high": 3538.27,
      "low": 3500.83,
      "volume": 499711727.0,
      "amount": 702573850000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10256.39,
      "change": -326.81,
      "changePct": "-3.09%",
      "high": 10436.04,
      "low": 10256.39,
      "volume": 571808607.0,
      "amount": 719626570000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2212.13,
      "change": -81.21,
      "changePct": "-3.54%",
      "high": 2263.3,
      "low": 2212.13,
      "volume": 165234506.0,
      "amount": 334978240000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1231.09,
      "change": -39.69,
      "changePct": "-3.12%",
      "high": 1254.6,
      "low": 1219.37,
      "volume": 10243700.0,
      "amount": 91944690000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3954.57,
      "change": -30.27,
      "changePct": "-0.76%",
      "high": 3961.07,
      "low": 3894.47,
      "volume": 210744943.0,
      "amount": 441107730000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6006.08,
      "change": -245.88,
      "changePct": "-3.93%",
      "high": 6175.38,
      "low": 6006.08,
      "volume": 134811698.0,
      "amount": 232981330000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.52万亿",
      "label": "成交额",
      "rawAmount": 2523212410000.0,
      "change": ""
    },
    "upDown": {
      "val": "910/2,544",
      "label": "涨/跌家数",
      "rawUp": 910,
      "rawDown": 2544,
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
    "totalInflow": 2.41,
    "totalOutflow": 0,
    "netFlow": 2.41,
    "netFlowTrend": [
      0.48,
      0.96,
      1.45,
      1.93,
      2.41
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
      "name": "银行",
      "inflow": 4.09,
      "pct": 1.2
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -1.16
    },
    {
      "name": "食品",
      "inflow": -0.1,
      "pct": -1.34
    },
    {
      "name": "农业",
      "inflow": -0.12,
      "pct": -0.7
    },
    {
      "name": "电子",
      "inflow": -0.12,
      "pct": -3.48
    },
    {
      "name": "钢铁",
      "inflow": -0.14,
      "pct": -1.77
    },
    {
      "name": "家电",
      "inflow": -0.23,
      "pct": -2.31
    },
    {
      "name": "新能源",
      "inflow": -0.26,
      "pct": -3.03
    },
    {
      "name": "新能源车",
      "inflow": -0.3,
      "pct": -3.35
    },
    {
      "name": "光伏",
      "inflow": -0.4,
      "pct": -3.2
    },
    {
      "name": "军工",
      "inflow": -0.67,
      "pct": -4.07
    },
    {
      "name": "传媒",
      "inflow": -0.89,
      "pct": -4.19
    },
    {
      "name": "医药",
      "inflow": -1.31,
      "pct": -1.32
    },
    {
      "name": "创新药",
      "inflow": -1.33,
      "pct": -3.23
    },
    {
      "name": "医疗",
      "inflow": -1.34,
      "pct": -3.01
    },
    {
      "name": "芯片",
      "inflow": -1.58,
      "pct": -4.12
    },
    {
      "name": "有色",
      "inflow": -1.62,
      "pct": -2.89
    },
    {
      "name": "白酒",
      "inflow": -1.67,
      "pct": -2.05
    },
    {
      "name": "煤炭",
      "inflow": -1.72,
      "pct": -0.43
    },
    {
      "name": "券商",
      "inflow": -2.57,
      "pct": -0.42
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.926,
      "changePct": 1.2,
      "change": 0.011,
      "turnover": 13.64
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.47,
      "changePct": -0.42,
      "change": -0.002,
      "turnover": 8.56
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.161,
      "changePct": -0.43,
      "change": -0.005,
      "turnover": 5.72
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.707,
      "changePct": -0.7,
      "change": -0.005,
      "turnover": 0.41
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.934,
      "changePct": -1.16,
      "change": -0.011,
      "turnover": 0.05
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.374,
      "changePct": -1.32,
      "change": -0.005,
      "turnover": 4.37
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.517,
      "changePct": -1.34,
      "change": -0.007,
      "turnover": 0.32
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.0,
      "changePct": -1.77,
      "change": -0.018,
      "turnover": 0.46
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.431,
      "changePct": -2.05,
      "change": -0.009,
      "turnover": 5.56
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.354,
      "changePct": -2.31,
      "change": -0.032,
      "turnover": 0.76
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.242,
      "changePct": -2.89,
      "change": -0.037,
      "turnover": 5.4
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.322,
      "changePct": -3.01,
      "change": -0.01,
      "turnover": 4.47
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.825,
      "changePct": -3.03,
      "change": -0.057,
      "turnover": 0.85
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.635,
      "changePct": -3.2,
      "change": -0.021,
      "turnover": 1.32
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.75,
      "changePct": -3.23,
      "change": -0.025,
      "turnover": 4.43
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.211,
      "changePct": -3.35,
      "change": -0.042,
      "turnover": 1.0
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.583,
      "changePct": -3.48,
      "change": -0.021,
      "turnover": 0.39
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.896,
      "changePct": -4.07,
      "change": -0.038,
      "turnover": 2.24
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.814,
      "changePct": -4.12,
      "change": -0.035,
      "turnover": 5.27
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.709,
      "changePct": -4.19,
      "change": -0.031,
      "turnover": 2.96
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.576,
      "changePct": -4.32,
      "change": -0.026,
      "turnover": 4.41
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.908,
      "changePct": -4.32,
      "change": -0.041,
      "turnover": 0.15
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.011,
      "changePct": -4.35,
      "change": -0.046,
      "turnover": 1.91
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.745,
      "changePct": -4.36,
      "change": -0.034,
      "turnover": 9.35
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.7,
      "changePct": -4.37,
      "change": -0.032,
      "turnover": 1.79
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.871,
      "changePct": -4.7,
      "change": -0.043,
      "turnover": 1.18
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.362,
      "changePct": -4.74,
      "change": -0.018,
      "turnover": 17.79
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.246,
      "changePct": -5.1,
      "change": -0.067,
      "turnover": 0.57
    }
  ],
  "etfFlow": [
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.9,
      "changePct": 0.59,
      "amount": 243.38,
      "netFlow": 60.84
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.825,
      "changePct": -3.03,
      "amount": 0.85,
      "netFlow": -0.21
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.374,
      "changePct": -1.32,
      "amount": 4.37,
      "netFlow": -1.09
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.47,
      "changePct": -0.42,
      "amount": 8.56,
      "netFlow": -2.14
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.745,
      "changePct": -4.36,
      "amount": 9.35,
      "netFlow": -2.34
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.908,
      "changePct": -1.06,
      "amount": 50.06,
      "netFlow": -12.52
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.3,
      "changePct": -3.27,
      "amount": 98.36,
      "netFlow": -24.59
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.053,
      "changePct": -3.71,
      "amount": 115.83,
      "netFlow": -28.96
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.018,
      "changePct": -1.03,
      "amount": 181.76,
      "netFlow": -45.44
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.191,
      "changePct": -1.13,
      "amount": 234.78,
      "netFlow": -58.7
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.018,
      "changePct": -1.03,
      "amount": 181.76,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.9,
      "changePct": 0.59,
      "amount": 243.38,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.053,
      "changePct": -3.71,
      "amount": 115.83,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.191,
      "changePct": -1.13,
      "amount": 234.78,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.908,
      "changePct": -1.06,
      "amount": 50.06,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 13.64,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "券商",
      "turnover": 8.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 5.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.41,
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
      "name": "医药",
      "turnover": 4.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 5.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 5.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 4.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
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
      "turnover": 5.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.96,
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
      "nav": 3.2803,
      "ret1w": -6.38,
      "ret1m": -16.79,
      "ret3m": -16.96,
      "ret6m": -24.85,
      "ret1y": -38.18,
      "ret2y": -11.65,
      "ret3y": 44.19
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.5789,
      "ret1w": -2.15,
      "ret1m": -6.09,
      "ret3m": -22.86,
      "ret6m": -39.07,
      "ret1y": -46.18,
      "ret2y": -31.09,
      "ret3y": -7.32
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.7862,
      "ret1w": -6.02,
      "ret1m": -15.2,
      "ret3m": -36.11,
      "ret6m": -52.15,
      "ret1y": -50.85,
      "ret2y": -12.07,
      "ret3y": 40.35
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7701,
      "ret1w": -0.56,
      "ret1m": 0.25,
      "ret3m": 8.76,
      "ret6m": 8.77,
      "ret1y": 9.13,
      "ret2y": -4.19,
      "ret3y": 4.36
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8074,
      "ret1w": -2.6,
      "ret1m": -7.03,
      "ret3m": -6.35,
      "ret6m": -17.75,
      "ret1y": -33.9,
      "ret2y": -37.85,
      "ret3y": -29.46
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.4252,
      "ret1w": -3.64,
      "ret1m": -7.65,
      "ret3m": -6.08,
      "ret6m": -11.74,
      "ret1y": -24.9,
      "ret2y": -30.02,
      "ret3y": -1.66
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1939,
      "ret1w": -1.51,
      "ret1m": -1.3,
      "ret3m": -0.48,
      "ret6m": -5.73,
      "ret1y": -5.29,
      "ret2y": -1.51,
      "ret3y": 25.7
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.493,
      "ret1w": -4.42,
      "ret1m": -9.13,
      "ret3m": -14.59,
      "ret6m": -21.5,
      "ret1y": -30.0,
      "ret2y": -16.17,
      "ret3y": 11.42
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0475,
      "ret1w": -2.85,
      "ret1m": -5.31,
      "ret3m": -11.79,
      "ret6m": -22.48,
      "ret1y": -26.6,
      "ret2y": -14.51,
      "ret3y": -1.88
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.395,
      "ret1w": -2.84,
      "ret1m": -6.0,
      "ret3m": -13.97,
      "ret6m": -31.0,
      "ret1y": -31.14,
      "ret2y": 13.45,
      "ret3y": 86.24
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.144,
      "ret1w": -1.97,
      "ret1m": -1.29,
      "ret3m": 2.69,
      "ret6m": 1.69,
      "ret1y": 3.72,
      "ret2y": -9.92,
      "ret3y": -9.99
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 1.982,
      "ret1w": -5.48,
      "ret1m": -10.92,
      "ret3m": -14.24,
      "ret6m": -20.21,
      "ret1y": -22.0,
      "ret2y": -22.58,
      "ret3y": -9.29
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1889,
      "ret1w": -3.5,
      "ret1m": -3.17,
      "ret3m": -13.51,
      "ret6m": -33.71,
      "ret1y": -60.56,
      "ret2y": -57.54,
      "ret3y": -37.72
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8781,
      "ret1w": -0.93,
      "ret1m": -1.36,
      "ret3m": 1.55,
      "ret6m": -1.99,
      "ret1y": 7.25,
      "ret2y": -0.41,
      "ret3y": -5.21
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3051,
      "ret1w": -3.55,
      "ret1m": -7.39,
      "ret3m": -12.77,
      "ret6m": -20.83,
      "ret1y": -27.41,
      "ret2y": -15.53,
      "ret3y": 10.28
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2146,
      "ret1w": -5.24,
      "ret1m": -14.16,
      "ret3m": -33.04,
      "ret6m": -50.29,
      "ret1y": -56.01,
      "ret2y": -7.04,
      "ret3y": 16.11
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5019,
      "ret1w": -1.73,
      "ret1m": -2.51,
      "ret3m": -2.17,
      "ret6m": -2.59,
      "ret1y": -5.4,
      "ret2y": -8.6,
      "ret3y": -0.32
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.84,
      "ret1w": -3.23,
      "ret1m": -8.7,
      "ret3m": -12.59,
      "ret6m": -25.99,
      "ret1y": -11.67,
      "ret2y": -19.92,
      "ret3y": -24.87
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4353,
      "ret1w": -0.25,
      "ret1m": 1.5,
      "ret3m": 3.96,
      "ret6m": 3.72,
      "ret1y": 3.59,
      "ret2y": 2.59,
      "ret3y": 10.8
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1101,
      "ret1w": -3.05,
      "ret1m": -6.97,
      "ret3m": -10.46,
      "ret6m": -16.55,
      "ret1y": -16.11,
      "ret2y": -4.98,
      "ret3y": 26.18
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.8932,
      "ret1w": -3.14,
      "ret1m": -6.15,
      "ret3m": -15.88,
      "ret6m": -30.67,
      "ret1y": -36.3,
      "ret2y": -22.08,
      "ret3y": -5.06
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.951,
      "ret1w": -3.14,
      "ret1m": -6.14,
      "ret3m": -15.85,
      "ret6m": -30.6,
      "ret1y": -36.17,
      "ret2y": -21.77,
      "ret3y": -4.3
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0295,
      "ret1w": -0.12,
      "ret1m": -1.02,
      "ret3m": -2.73,
      "ret6m": -5.83,
      "ret1y": -6.2,
      "ret2y": -5.11,
      "ret3y": 0.96
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0054,
      "ret1w": -0.11,
      "ret1m": -1.0,
      "ret3m": -2.67,
      "ret6m": -5.68,
      "ret1y": -5.91,
      "ret2y": -4.53,
      "ret3y": 2.19
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6957,
      "ret1w": -1.38,
      "ret1m": -1.79,
      "ret3m": -0.09,
      "ret6m": -3.79,
      "ret1y": -10.41,
      "ret2y": -15.1,
      "ret3y": -1.04
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7141,
      "ret1w": -1.37,
      "ret1m": -1.77,
      "ret3m": -0.03,
      "ret6m": -3.67,
      "ret1y": -10.18,
      "ret2y": -14.66,
      "ret3y": -0.04
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8622,
      "ret1w": -1.42,
      "ret1m": -5.11,
      "ret3m": -20.95,
      "ret6m": -33.22,
      "ret1y": -34.32,
      "ret2y": -0.1,
      "ret3y": 61.54
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.1324,
      "ret1w": -3.21,
      "ret1m": -7.7,
      "ret3m": -8.61,
      "ret6m": -17.35,
      "ret1y": -21.15,
      "ret2y": 1.79,
      "ret3y": 36.05
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6486,
      "ret1w": -3.51,
      "ret1m": -8.88,
      "ret3m": -7.82,
      "ret6m": -12.93,
      "ret1y": -27.56,
      "ret2y": -19.84,
      "ret3y": -9.94
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.5907,
      "ret1w": -3.34,
      "ret1m": -9.17,
      "ret3m": -8.61,
      "ret6m": -16.01,
      "ret1y": -19.79,
      "ret2y": 19.82,
      "ret3y": 72.34
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.45,
      "ret1w": -0.53,
      "ret1m": -0.46,
      "ret3m": -4.74,
      "ret6m": -11.85,
      "ret1y": -19.24,
      "ret2y": 0.2,
      "ret3y": 20.94
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.459,
      "ret1w": -0.54,
      "ret1m": -0.48,
      "ret3m": -4.73,
      "ret6m": -11.76,
      "ret1y": -19.08,
      "ret2y": 0.61,
      "ret3y": 21.91
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.263,
      "ret1w": -0.11,
      "ret1m": 0.52,
      "ret3m": -0.09,
      "ret6m": -1.0,
      "ret1y": -1.67,
      "ret2y": -2.02,
      "ret3y": 0.77
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.051,
      "ret1w": -0.84,
      "ret1m": -0.37,
      "ret3m": -3.57,
      "ret6m": -7.68,
      "ret1y": -4.84,
      "ret2y": -9.58,
      "ret3y": -0.42
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1627,
      "ret1w": -0.67,
      "ret1m": -0.26,
      "ret3m": -2.38,
      "ret6m": -19.26,
      "ret1y": -31.68,
      "ret2y": -21.8,
      "ret3y": -18.33
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6049,
      "ret1w": -1.16,
      "ret1m": -3.26,
      "ret3m": -9.25,
      "ret6m": -12.82,
      "ret1y": -17.86,
      "ret2y": -6.43,
      "ret3y": 19.67
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 1.992,
      "ret1w": -3.44,
      "ret1m": -9.66,
      "ret3m": -24.0,
      "ret6m": -40.25,
      "ret1y": -50.01,
      "ret2y": -5.19,
      "ret3y": 52.06
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.6031,
      "ret1w": 0.18,
      "ret1m": 1.8,
      "ret3m": 3.98,
      "ret6m": 8.13,
      "ret1y": 9.22,
      "ret2y": 4.39,
      "ret3y": 5.4
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4382,
      "ret1w": -6.61,
      "ret1m": -20.53,
      "ret3m": -19.11,
      "ret6m": -31.56,
      "ret1y": -41.6,
      "ret2y": -20.09,
      "ret3y": -30.37
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 7.912,
      "ret1w": -3.5,
      "ret1m": -10.34,
      "ret3m": -29.92,
      "ret6m": -45.44,
      "ret1y": -36.06,
      "ret2y": 6.54,
      "ret3y": 86.16
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0426,
      "ret1w": 0.0,
      "ret1m": -0.62,
      "ret3m": -1.4,
      "ret6m": -2.22,
      "ret1y": -2.71,
      "ret2y": -1.5,
      "ret3y": 1.33
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0902,
      "ret1w": -0.01,
      "ret1m": -0.63,
      "ret3m": -1.42,
      "ret6m": -2.21,
      "ret1y": -2.62,
      "ret2y": -1.3,
      "ret3y": 1.95
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": -0.06,
      "ret6m": 0.28,
      "ret1y": 0.55,
      "ret2y": 1.46,
      "ret3y": 2.76
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1021,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.02,
      "ret6m": 0.35,
      "ret1y": 0.66,
      "ret2y": 1.48,
      "ret3y": 3.77
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.112,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.04,
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
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.01,
      "ret6m": 0.2,
      "ret1y": 0.54,
      "ret2y": 1.39,
      "ret3y": 2.82
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0934,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.04,
      "ret6m": 0.28,
      "ret1y": 0.69,
      "ret2y": 1.7,
      "ret3y": 3.48
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9835,
      "ret1w": -0.84,
      "ret1m": -1.83,
      "ret3m": -4.22,
      "ret6m": -7.98,
      "ret1y": -10.44,
      "ret2y": -2.68,
      "ret3y": 2.59
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1195,
      "ret1w": -1.3,
      "ret1m": -3.15,
      "ret3m": -5.3,
      "ret6m": -8.31,
      "ret1y": -11.74,
      "ret2y": -6.79,
      "ret3y": -3.63
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9905,
      "ret1w": -0.84,
      "ret1m": -1.82,
      "ret3m": -4.19,
      "ret6m": -7.89,
      "ret1y": -10.26,
      "ret2y": -2.3,
      "ret3y": 3.41
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": 0.01,
      "ret1m": 0.0,
      "ret3m": -0.07,
      "ret6m": 0.28,
      "ret1y": 0.64,
      "ret2y": 1.57,
      "ret3y": 3.46
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0804,
      "ret1w": -0.51,
      "ret1m": -1.23,
      "ret3m": -4.2,
      "ret6m": -7.71,
      "ret1y": -10.75,
      "ret2y": -8.54,
      "ret3y": -2.18
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1993,
      "ret1w": -0.14,
      "ret1m": -0.17,
      "ret3m": -0.07,
      "ret6m": -1.45,
      "ret1y": -2.45,
      "ret2y": 0.74,
      "ret3y": 9.33
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1101,
      "ret1w": -0.35,
      "ret1m": -0.63,
      "ret3m": -1.21,
      "ret6m": -2.67,
      "ret1y": -3.94,
      "ret2y": 0.26,
      "ret3y": 5.93
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1807,
      "ret1w": -0.35,
      "ret1m": -0.62,
      "ret3m": -1.18,
      "ret6m": -2.57,
      "ret1y": -3.74,
      "ret2y": 0.67,
      "ret3y": 6.8
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.716,
      "ret1w": -1.72,
      "ret1m": -10.76,
      "ret3m": -19.06,
      "ret6m": -26.32,
      "ret1y": -25.87,
      "ret2y": 24.98,
      "ret3y": 72.98
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.7995,
      "ret1w": -1.42,
      "ret1m": -4.22,
      "ret3m": -6.1,
      "ret6m": -5.87,
      "ret1y": -3.99,
      "ret2y": 1.74,
      "ret3y": 22.32
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6102,
      "ret1w": -1.08,
      "ret1m": -2.01,
      "ret3m": -6.07,
      "ret6m": -12.55,
      "ret1y": -21.28,
      "ret2y": -9.91,
      "ret3y": 17.05
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 1.9942,
      "ret1w": -2.45,
      "ret1m": -8.74,
      "ret3m": -13.52,
      "ret6m": -17.17,
      "ret1y": -8.14,
      "ret2y": 2.97,
      "ret3y": 23.64
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9204,
      "ret1w": 0.11,
      "ret1m": 0.28,
      "ret3m": 0.39,
      "ret6m": -2.02,
      "ret1y": -1.84,
      "ret2y": -5.71,
      "ret3y": -3.07
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.1486,
      "ret1w": -1.89,
      "ret1m": -6.52,
      "ret3m": -12.89,
      "ret6m": -17.94,
      "ret1y": -18.89,
      "ret2y": 13.85,
      "ret3y": 48.12
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.183,
      "ret1w": -1.9,
      "ret1m": -5.64,
      "ret3m": -6.88,
      "ret6m": -8.95,
      "ret1y": -7.7,
      "ret2y": -3.86,
      "ret3y": 5.63
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.741,
      "ret1w": 0.0,
      "ret1m": -6.2,
      "ret3m": -11.26,
      "ret6m": -21.42,
      "ret1y": -23.21,
      "ret2y": -33.9,
      "ret3y": -19.46
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.1101,
      "ret1w": -2.64,
      "ret1m": -10.0,
      "ret3m": -19.29,
      "ret6m": -25.69,
      "ret1y": -24.66,
      "ret2y": 25.12,
      "ret3y": 86.97
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.3664,
      "ret1w": -1.62,
      "ret1m": -8.34,
      "ret3m": -14.32,
      "ret6m": -14.55,
      "ret1y": -10.63,
      "ret2y": 8.59,
      "ret3y": 30.44
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.4837,
      "ret1w": -1.23,
      "ret1m": -5.26,
      "ret3m": -10.02,
      "ret6m": -11.76,
      "ret1y": -8.48,
      "ret2y": 5.26,
      "ret3y": 33.37
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1206,
      "ret1w": -1.58,
      "ret1m": -5.59,
      "ret3m": -8.5,
      "ret6m": -13.71,
      "ret1y": -13.77,
      "ret2y": -3.37,
      "ret3y": 14.76
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.261,
      "ret1w": -1.56,
      "ret1m": -3.07,
      "ret3m": 2.6,
      "ret6m": -4.69,
      "ret1y": -3.67,
      "ret2y": 3.87,
      "ret3y": -9.26
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.754,
      "ret1w": -1.46,
      "ret1m": -4.93,
      "ret3m": -10.87,
      "ret6m": -18.38,
      "ret1y": -19.32,
      "ret2y": -14.81,
      "ret3y": 23.71
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.0584,
      "ret1w": -1.86,
      "ret1m": -6.84,
      "ret3m": -13.78,
      "ret6m": -18.91,
      "ret1y": -18.22,
      "ret2y": 9.55,
      "ret3y": 30.33
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0136,
      "ret1w": 0.03,
      "ret1m": 0.11,
      "ret3m": 0.11,
      "ret6m": 0.59,
      "ret1y": 1.12,
      "ret2y": 2.4,
      "ret3y": 3.8
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0013,
      "ret1w": 0.03,
      "ret1m": 0.11,
      "ret3m": 0.11,
      "ret6m": 0.62,
      "ret1y": 1.13,
      "ret2y": 2.47,
      "ret3y": 3.96
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.173,
      "ret1w": -1.43,
      "ret1m": -2.66,
      "ret3m": -6.76,
      "ret6m": -18.09,
      "ret1y": -24.66,
      "ret2y": -16.51,
      "ret3y": -5.4
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.123,
      "ret1w": -2.66,
      "ret1m": -5.52,
      "ret3m": -12.88,
      "ret6m": -25.8,
      "ret1y": -30.35,
      "ret2y": -18.66,
      "ret3y": -1.3
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3331,
      "ret1w": -1.19,
      "ret1m": -5.27,
      "ret3m": -12.16,
      "ret6m": -20.71,
      "ret1y": -23.09,
      "ret2y": -12.11,
      "ret3y": 23.55
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.79,
      "ret1w": -0.98,
      "ret1m": -2.29,
      "ret3m": -7.47,
      "ret6m": -16.14,
      "ret1y": -18.14,
      "ret2y": -8.97,
      "ret3y": 4.5
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8429,
      "ret1w": -0.98,
      "ret1m": -2.27,
      "ret3m": -7.44,
      "ret6m": -16.05,
      "ret1y": -17.97,
      "ret2y": -8.6,
      "ret3y": 5.34
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.5719,
      "ret1w": -3.72,
      "ret1m": -6.7,
      "ret3m": -11.55,
      "ret6m": -22.35,
      "ret1y": -28.98,
      "ret2y": -13.6,
      "ret3y": 1.77
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5604,
      "ret1w": -0.72,
      "ret1m": -1.47,
      "ret3m": -4.42,
      "ret6m": -12.91,
      "ret1y": -16.75,
      "ret2y": -11.46,
      "ret3y": 2.07
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.3583,
      "ret1w": -3.17,
      "ret1m": -5.4,
      "ret3m": -8.29,
      "ret6m": -14.09,
      "ret1y": -18.49,
      "ret2y": -7.21,
      "ret3y": 12.34
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4222,
      "ret1w": -2.15,
      "ret1m": -4.85,
      "ret3m": -13.33,
      "ret6m": -28.58,
      "ret1y": -33.85,
      "ret2y": -18.67,
      "ret3y": 1.54
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0055,
      "ret1w": 0.22,
      "ret1m": 0.47,
      "ret3m": -0.66,
      "ret6m": -7.23,
      "ret1y": -6.56,
      "ret2y": -8.63,
      "ret3y": 5.51
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4317,
      "ret1w": -1.14,
      "ret1m": -4.47,
      "ret3m": -4.02,
      "ret6m": -5.78,
      "ret1y": -2.01,
      "ret2y": 4.99,
      "ret3y": 26.64
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.101,
      "ret1w": -1.98,
      "ret1m": -5.8,
      "ret3m": -9.47,
      "ret6m": -9.86,
      "ret1y": -8.73,
      "ret2y": 1.14,
      "ret3y": 16.62
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1151,
      "ret1w": -2.0,
      "ret1m": -3.72,
      "ret3m": -11.45,
      "ret6m": -24.66,
      "ret1y": -29.39,
      "ret2y": -18.51,
      "ret3y": -1.0
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9278,
      "ret1w": -0.1,
      "ret1m": -5.87,
      "ret3m": -9.93,
      "ret6m": -24.81,
      "ret1y": -26.64,
      "ret2y": -14.69,
      "ret3y": 6.41
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9311,
      "ret1w": -0.1,
      "ret1m": -5.88,
      "ret3m": -9.89,
      "ret6m": -24.64,
      "ret1y": -26.49,
      "ret2y": -14.59,
      "ret3y": 6.1
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1911,
      "ret1w": -0.34,
      "ret1m": -3.2,
      "ret3m": -5.48,
      "ret6m": -15.25,
      "ret1y": -24.35,
      "ret2y": -13.22,
      "ret3y": 4.95
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2194,
      "ret1w": -0.34,
      "ret1m": -3.19,
      "ret3m": -5.45,
      "ret6m": -15.17,
      "ret1y": -24.19,
      "ret2y": -12.86,
      "ret3y": 5.8
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5816,
      "ret1w": 0.44,
      "ret1m": -6.94,
      "ret3m": -11.47,
      "ret6m": -21.62,
      "ret1y": -30.06,
      "ret2y": -14.84,
      "ret3y": 10.56
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1507,
      "ret1w": 0.03,
      "ret1m": -0.31,
      "ret3m": -0.72,
      "ret6m": -1.32,
      "ret1y": -1.8,
      "ret2y": 0.19,
      "ret3y": 4.36
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1711,
      "ret1w": 0.03,
      "ret1m": -0.31,
      "ret3m": -0.7,
      "ret6m": -1.25,
      "ret1y": -1.65,
      "ret2y": 0.5,
      "ret3y": 4.99
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0878,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": -0.02,
      "ret6m": 0.36,
      "ret1y": 0.7,
      "ret2y": 1.78,
      "ret3y": 3.36
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4103,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": -0.11,
      "ret6m": 0.0,
      "ret1y": 0.11,
      "ret2y": 0.38,
      "ret3y": 4.54
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4638,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": -0.08,
      "ret6m": 0.1,
      "ret1y": 0.31,
      "ret2y": 0.78,
      "ret3y": 5.39
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7589,
      "ret1w": -1.41,
      "ret1m": -5.0,
      "ret3m": -9.93,
      "ret6m": -16.76,
      "ret1y": -12.2,
      "ret2y": 1.58,
      "ret3y": 23.32
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9084,
      "ret1w": -2.12,
      "ret1m": -9.33,
      "ret3m": -16.04,
      "ret6m": -27.17,
      "ret1y": -26.72,
      "ret2y": -21.05,
      "ret3y": -1.38
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 3.2803
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.5789
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.7862
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.7701
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.8074
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.4252
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 5.1939
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.493
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.0475
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.395
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.144
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.982
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.1889
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.8781
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.3051
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.2146
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.5019
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.84
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.4353
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.1101
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.8932
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.951
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.0295
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.0054
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.6957
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.7141
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.8622
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.1324
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.6486
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 3.5907
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.45
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.459
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.263
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.051
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.1627
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 2.6049
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.992
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 1.6031
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 0.4382
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-20",
        "nav": 7.912
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.84,
      "nav": 3.2803,
      "price": 3.2803,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.3,
      "nav": 2.5789,
      "price": 2.5789,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.76,
      "nav": 2.7862,
      "price": 2.7862,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.01,
      "nav": 0.7701,
      "price": 0.7701,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.8074,
      "price": 1.8074,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.38,
      "nav": 2.4252,
      "price": 2.4252,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 5.1939,
      "price": 5.1939,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.46,
      "nav": 1.493,
      "price": 1.493,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 1.0475,
      "price": 1.0475,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.3,
      "nav": 2.395,
      "price": 2.395,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.144,
      "price": 1.144,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.55,
      "nav": 1.982,
      "price": 1.982,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.1889,
      "price": 1.1889,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.8781,
      "price": 1.8781,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.37,
      "nav": 1.3051,
      "price": 1.3051,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.71,
      "nav": 1.2146,
      "price": 1.2146,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.5019,
      "price": 2.5019,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 0.84,
      "price": 0.84,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 2.4353,
      "price": 2.4353,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.1101,
      "price": 1.1101,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 25.18,
      "sharpe": -1.75,
      "calmar": -1.75
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 9.13,
      "sharpe": -4.16,
      "calmar": -4.16
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 22.8,
      "sharpe": -2.52,
      "calmar": -2.52
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.38,
      "sharpe": 1.74,
      "calmar": 1.74
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 10.54,
      "sharpe": -2.82,
      "calmar": -2.82
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 11.48,
      "sharpe": -1.97,
      "calmar": -1.97
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.95,
      "sharpe": -0.84,
      "calmar": -0.84
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 13.7,
      "sharpe": -2.12,
      "calmar": -2.12
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 7.96,
      "sharpe": -2.58,
      "calmar": -2.58
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.0,
      "sharpe": -2.83,
      "calmar": -2.83
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.94,
      "sharpe": 0.59,
      "calmar": 0.59
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 16.38,
      "sharpe": -1.38,
      "calmar": -1.38
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 4.75,
      "sharpe": -7.41,
      "calmar": -7.41
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.04,
      "sharpe": 1.14,
      "calmar": 1.14
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 11.08,
      "sharpe": -2.21,
      "calmar": -2.21
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 21.24,
      "sharpe": -2.92,
      "calmar": -2.92
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.76,
      "sharpe": -0.72,
      "calmar": -0.72
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 13.05,
      "sharpe": -0.85,
      "calmar": -0.85
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.25,
      "sharpe": 0.55,
      "calmar": 0.55
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 10.46,
      "sharpe": -1.35,
      "calmar": -1.35
    }
  ],
  "news": [
    {
      "title": "11月21日，国家市场监督管理总局数据显示，前三季度，我国“四新”经济与先进制造业发展势头强劲，新产业新赛道相关企业加速壮大，为高质量发展蓄势聚能。“四新”经济与前沿产业增势强劲。截至9月底，全国登记在册“四新”经济企业同比增长5.6%。一是新兴支柱产业保持增长。1月至9月，航天器及运载火箭制造业新设企业同比增长73.3%，集成电路制造业增长21.1%。二是前沿领域加速成长。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:48",
      "impact": "neutral"
    },
    {
      "title": "中原大地，共话“中部价值”。11月21日，第十四届中国中部投资贸易博览会开幕式在郑州国际会展中心举行。这一国家级展会创办于2006年，也是它第3次落户郑州。本届博览会以“共建三基地一枢纽，推动中部地区加快崛起”为主题，再度将中部发展置于聚光灯下。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:33",
      "impact": "neutral"
    },
    {
      "title": "据新华社，中华人民共和国政府与亚洲基础设施投资银行（亚投行）21日在香港签署《中华人民共和国政府与亚洲基础设施投资银行关于在中华人民共和国香港特别行政区设立办公室的协定》，为亚投行在香港开设办公室奠定基础。中华人民共和国政府与亚投行分别由财政部部长蓝佛安和亚投行行长邹加怡代表签署协定。该协定确定亚投行于香港设立办公室，并为特权、豁免与其他有助成立办公室的事宜制定原则。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:30",
      "impact": "neutral"
    },
    {
      "title": "记者从国铁青藏公司了解到，今天（21日）18时45分，青海省海西州德令哈市发生5.6级地震，地震波及青藏铁路西宁至格尔木段部分区段，铁路部门紧急扣停途经列车，部分列车晚点运行。目前铁路部门已启动应急预案，对封锁区间进行设备全面巡检并准备充足的食品、饮用水等应急物资，保障旅客需求。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:23",
      "impact": "neutral"
    },
    {
      "title": "近日，亚振家居发布公告，公司实际控制人吴涛控制的济南域潇集团有限公司（以下简称“域潇集团”），拟将所持山东域潇锆铪新材料有限公司（以下简称“域潇锆铪”）51.0204%的股权无偿、无条件赠与公司，公司无需支付对价，并不附带任何义务。在本次无偿赠与后，亚振家居将持有域潇锆铪51.0204%的股权，域潇锆铪及其下属子公司将纳入公司合并报表范围。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:19",
      "impact": "neutral"
    },
    {
      "title": "青海省海西蒙古族藏族自治州德令哈市发生5.6级地震，震源深度10公里，震中位于北纬37.14度，东经96.62度，震中距德令哈市约70公里。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:56",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者仲茜）11月20日，江苏省统计局发布统计数据，今年1至10月，江苏全省经济运行总体平稳，呈现向新向优向好态势。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:33",
      "impact": "neutral"
    },
    {
      "title": "气候大会又“拖堂”了。原定20日闭幕的《联合国气候变化框架公约》第三十一次缔约方大会(COP31)，由于各方未能就部分核心议题达成一致，当晚进入加时阶段。讨论了将近两周，显然，各国围绕“怎么减”“减多快”“谁出钱”等一系列核心问题的分歧仍在。但紧迫的现实是，气候大会开到第三十一届，地球越来越热。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:25",
      "impact": "neutral"
    },
    {
      "title": "21财经11月21日电，从工业和信息化部了解到，目前我国5G应用已融入全部97个国民经济大类，工业互联网已覆盖全部41个工业大类。目前，我国已经建成分类分级、特色鲜明的5G工厂1260家，培育超过360家具有一定影响力的工业互联网平台，重点平台工业设备连接数超1亿台（套）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:09",
      "impact": "neutral"
    },
    {
      "title": "近日，内蒙古自治区鄂尔多斯市财政局通报两起政府采购评审专家违法违规行为典型案例，旨在进一步规范专家评审行为，提升政府采购评审质效。在评审专家系统确认无故缺席案例中，采购人委托鄂尔多斯市政府采购中心以公开招标方式采购仪器，在鄂尔多斯市公共资源交易平台组织开标，开标结束后组建资格审查小组和专家评审小组。评审专家应到时间为11时整。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:01",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 42,
    "label": "中性",
    "upDownRatio": "910/2,544",
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
