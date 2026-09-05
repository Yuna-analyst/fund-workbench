// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-05 13:23:21
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-05 13:23 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-04",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3930.12,
      "change": -11.97,
      "changePct": "-0.30%",
      "high": 3980.2,
      "low": 3915.22,
      "volume": 537286161.0,
      "amount": 938255190000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13516.97,
      "change": -108.15,
      "changePct": "-0.79%",
      "high": 13798.36,
      "low": 13448.79,
      "volume": 678475372.0,
      "amount": 1092412650000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3286.55,
      "change": -25.99,
      "changePct": "-0.78%",
      "high": 3370.47,
      "low": 3266.8,
      "volume": 193413042.0,
      "amount": 499808880000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1577.36,
      "change": -33.81,
      "changePct": "-2.10%",
      "high": 1637.1,
      "low": 1566.87,
      "volume": 7539251.0,
      "amount": 74189840000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4548.05,
      "change": -4.53,
      "changePct": "-0.10%",
      "high": 4602.2,
      "low": 4530.76,
      "volume": 196997428.0,
      "amount": 517509320000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7652.69,
      "change": -102.67,
      "changePct": "-1.32%",
      "high": 7850.4,
      "low": 7610.58,
      "volume": 182451694.0,
      "amount": 356490200000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.48万亿",
      "label": "成交额",
      "rawAmount": 3478666080000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,281/1,859",
      "label": "涨/跌家数",
      "rawUp": 2281,
      "rawDown": 1859,
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
    "totalInflow": 14.78,
    "totalOutflow": 0,
    "netFlow": 14.78,
    "netFlowTrend": [
      2.96,
      5.91,
      8.87,
      11.82,
      14.78
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
      "inflow": 3.4,
      "pct": 0.38
    },
    {
      "name": "银行",
      "inflow": 2.88,
      "pct": 0.95
    },
    {
      "name": "白酒",
      "inflow": 2.68,
      "pct": 3.09
    },
    {
      "name": "传媒",
      "inflow": 1.57,
      "pct": 3.51
    },
    {
      "name": "军工",
      "inflow": 1.24,
      "pct": 0.7
    },
    {
      "name": "地产",
      "inflow": 1.15,
      "pct": 1.48
    },
    {
      "name": "医药",
      "inflow": 0.78,
      "pct": 0.26
    },
    {
      "name": "游戏",
      "inflow": 0.55,
      "pct": 2.94
    },
    {
      "name": "农业",
      "inflow": 0.44,
      "pct": 3.48
    },
    {
      "name": "食品",
      "inflow": 0.09,
      "pct": 2.02
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.19
    },
    {
      "name": "医疗",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "家电",
      "inflow": -0.2,
      "pct": -0.62
    },
    {
      "name": "钢铁",
      "inflow": -0.21,
      "pct": -0.09
    },
    {
      "name": "新能源",
      "inflow": -0.32,
      "pct": -0.89
    },
    {
      "name": "光伏",
      "inflow": -0.41,
      "pct": -0.62
    },
    {
      "name": "云计算",
      "inflow": -0.47,
      "pct": -1.13
    },
    {
      "name": "创新药",
      "inflow": -2.3,
      "pct": -0.71
    },
    {
      "name": "煤炭",
      "inflow": -3.36,
      "pct": -0.15
    },
    {
      "name": "通信",
      "inflow": -7.76,
      "pct": -1.08
    }
  ],
  "sectors": [
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.855,
      "changePct": 3.51,
      "change": 0.029,
      "turnover": 5.22
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.774,
      "changePct": 3.48,
      "change": 0.026,
      "turnover": 1.48
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.434,
      "changePct": 3.09,
      "change": 0.013,
      "turnover": 8.94
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.122,
      "changePct": 2.94,
      "change": 0.032,
      "turnover": 1.84
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.506,
      "changePct": 2.02,
      "change": 0.01,
      "turnover": 0.29
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.234,
      "changePct": 1.48,
      "change": 0.018,
      "turnover": 3.84
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.848,
      "changePct": 0.95,
      "change": 0.008,
      "turnover": 9.6
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.148,
      "changePct": 0.7,
      "change": 0.008,
      "turnover": 4.12
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.528,
      "changePct": 0.38,
      "change": 0.002,
      "turnover": 11.34
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.38,
      "changePct": 0.26,
      "change": 0.001,
      "turnover": 2.61
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.035,
      "changePct": 0.19,
      "change": 0.002,
      "turnover": 0.06
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.339,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 3.77
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.169,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 0.71
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.298,
      "changePct": -0.15,
      "change": -0.002,
      "turnover": 11.21
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.805,
      "changePct": -0.62,
      "change": -0.005,
      "turnover": 1.36
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.439,
      "changePct": -0.62,
      "change": -0.009,
      "turnover": 0.65
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.845,
      "changePct": -0.71,
      "change": -0.006,
      "turnover": 7.66
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.349,
      "changePct": -0.89,
      "change": -0.021,
      "turnover": 1.06
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.639,
      "changePct": -1.08,
      "change": -0.007,
      "turnover": 25.86
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.663,
      "changePct": -1.13,
      "change": -0.019,
      "turnover": 1.58
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.554,
      "changePct": -1.27,
      "change": -0.02,
      "turnover": 1.06
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.884,
      "changePct": -1.52,
      "change": -0.029,
      "turnover": 11.82
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.16,
      "changePct": -1.61,
      "change": -0.019,
      "turnover": 0.24
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.987,
      "changePct": -1.69,
      "change": -0.017,
      "turnover": 8.01
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.999,
      "changePct": -1.87,
      "change": -0.019,
      "turnover": 2.73
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.808,
      "changePct": -2.18,
      "change": -0.018,
      "turnover": 0.51
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.086,
      "changePct": -2.6,
      "change": -0.029,
      "turnover": 8.46
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.976,
      "changePct": -2.79,
      "change": -0.028,
      "turnover": 16.83
    }
  ],
  "etfFlow": [
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.037,
      "changePct": 0.2,
      "amount": 16.67,
      "netFlow": 4.17
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.528,
      "changePct": 0.38,
      "amount": 11.34,
      "netFlow": 2.84
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.38,
      "changePct": 0.26,
      "amount": 2.61,
      "netFlow": 0.65
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.349,
      "changePct": -0.89,
      "amount": 1.06,
      "netFlow": -0.26
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.82,
      "changePct": -0.08,
      "amount": 6.17,
      "netFlow": -1.54
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.485,
      "changePct": -0.09,
      "amount": 6.16,
      "netFlow": -1.54
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.976,
      "changePct": -2.79,
      "amount": 16.83,
      "netFlow": -4.21
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.616,
      "changePct": -0.11,
      "amount": 39.06,
      "netFlow": -9.76
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.673,
      "changePct": -1.39,
      "amount": 40.95,
      "netFlow": -10.24
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.668,
      "changePct": -2.06,
      "amount": 74.1,
      "netFlow": -18.52
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.616,
      "changePct": -0.11,
      "amount": 39.06,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.037,
      "changePct": 0.2,
      "amount": 16.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.673,
      "changePct": -1.39,
      "amount": 40.95,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.82,
      "changePct": -0.08,
      "amount": 6.17,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.485,
      "changePct": -0.09,
      "amount": 6.16,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "传媒",
      "turnover": 5.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 1.48,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 8.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.29,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 3.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 9.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 4.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 11.34,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 2.61,
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
      "name": "医疗",
      "turnover": 3.77,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 11.21,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 1.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 7.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 25.86,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.58,
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
      "nav": 4.4762,
      "ret1w": -3.36,
      "ret1m": -1.4,
      "ret3m": 11.55,
      "ret6m": -11.41,
      "ret1y": 1.45,
      "ret2y": 32.62,
      "ret3y": 160.99
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.0311,
      "ret1w": -1.38,
      "ret1m": -4.08,
      "ret3m": -0.93,
      "ret6m": -20.49,
      "ret1y": 5.46,
      "ret2y": 4.71,
      "ret3y": 68.33
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.5255,
      "ret1w": -1.14,
      "ret1m": -4.35,
      "ret3m": 16.4,
      "ret6m": -11.1,
      "ret1y": 40.47,
      "ret2y": 94.64,
      "ret3y": 284.76
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7259,
      "ret1w": 1.35,
      "ret1m": 1.09,
      "ret3m": 0.75,
      "ret6m": 8.17,
      "ret1y": -6.07,
      "ret2y": -12.01,
      "ret3y": 8.36
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0469,
      "ret1w": 0.38,
      "ret1m": -5.82,
      "ret3m": -11.19,
      "ret6m": -17.32,
      "ret1y": -29.48,
      "ret2y": -24.86,
      "ret3y": 15.34
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.689,
      "ret1w": 0.35,
      "ret1m": -3.34,
      "ret3m": -3.69,
      "ret6m": -10.08,
      "ret1y": -28.61,
      "ret2y": -13.24,
      "ret3y": 35.18
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5184,
      "ret1w": 0.32,
      "ret1m": -1.02,
      "ret3m": 0.06,
      "ret6m": 1.99,
      "ret1y": -4.25,
      "ret2y": 14.33,
      "ret3y": 59.84
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.884,
      "ret1w": -1.31,
      "ret1m": -1.0,
      "ret3m": 4.2,
      "ret6m": -6.13,
      "ret1y": -2.18,
      "ret2y": 9.09,
      "ret3y": 71.27
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3255,
      "ret1w": -1.16,
      "ret1m": -1.82,
      "ret3m": 0.8,
      "ret6m": -5.68,
      "ret1y": 1.23,
      "ret2y": 11.56,
      "ret3y": 44.52
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.306,
      "ret1w": -3.05,
      "ret1m": -3.81,
      "ret3m": 2.35,
      "ret6m": -7.06,
      "ret1y": 28.34,
      "ret2y": 80.16,
      "ret3y": 282.64
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.137,
      "ret1w": 1.61,
      "ret1m": 1.7,
      "ret3m": 1.52,
      "ret6m": 7.77,
      "ret1y": -1.64,
      "ret2y": -14.25,
      "ret3y": 6.46
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.361,
      "ret1w": 0.17,
      "ret1m": -0.25,
      "ret3m": 0.21,
      "ret6m": 3.37,
      "ret1y": -10.97,
      "ret2y": -12.52,
      "ret3y": 34.53
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.626,
      "ret1w": -3.14,
      "ret1m": -8.03,
      "ret3m": -2.22,
      "ret6m": -38.51,
      "ret1y": -51.45,
      "ret2y": -35.37,
      "ret3y": 18.89
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9766,
      "ret1w": 1.13,
      "ret1m": 1.77,
      "ret3m": 2.74,
      "ret6m": 8.59,
      "ret1y": 3.39,
      "ret2y": 0.46,
      "ret3y": 11.7
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6309,
      "ret1w": -1.4,
      "ret1m": -2.11,
      "ret3m": 4.9,
      "ret6m": -6.97,
      "ret1y": -3.79,
      "ret2y": 11.57,
      "ret3y": 72.27
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.2426,
      "ret1w": -3.29,
      "ret1m": -5.84,
      "ret3m": 1.57,
      "ret6m": -23.95,
      "ret1y": 21.31,
      "ret2y": 84.44,
      "ret3y": 219.78
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5892,
      "ret1w": 0.88,
      "ret1m": 1.09,
      "ret3m": 3.19,
      "ret6m": -0.07,
      "ret1y": -6.48,
      "ret2y": -2.48,
      "ret3y": 25.52
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.021,
      "ret1w": -1.07,
      "ret1m": -1.45,
      "ret3m": 3.44,
      "ret6m": 16.69,
      "ret1y": 10.14,
      "ret2y": -13.4,
      "ret3y": 5.48
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3787,
      "ret1w": 0.92,
      "ret1m": 1.03,
      "ret3m": 1.33,
      "ret6m": 3.62,
      "ret1y": -4.86,
      "ret2y": 8.17,
      "ret3y": 19.24
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3184,
      "ret1w": -0.93,
      "ret1m": -1.43,
      "ret3m": 6.01,
      "ret6m": 2.55,
      "ret1y": 2.28,
      "ret2y": 21.38,
      "ret3y": 81.01
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2389,
      "ret1w": -1.0,
      "ret1m": -3.56,
      "ret3m": -1.59,
      "ret6m": -10.81,
      "ret1y": -6.07,
      "ret2y": 16.42,
      "ret3y": 47.42
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3179,
      "ret1w": -0.99,
      "ret1m": -3.55,
      "ret3m": -1.55,
      "ret6m": -10.72,
      "ret1y": -5.89,
      "ret2y": 16.87,
      "ret3y": 48.6
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0848,
      "ret1w": 0.0,
      "ret1m": -0.63,
      "ret3m": -1.61,
      "ret6m": -2.83,
      "ret1y": 0.31,
      "ret2y": 1.35,
      "ret3y": 8.49
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.058,
      "ret1w": 0.0,
      "ret1m": -0.62,
      "ret3m": -1.56,
      "ret6m": -2.69,
      "ret1y": 0.62,
      "ret2y": 1.96,
      "ret3y": 9.8
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7295,
      "ret1w": 1.12,
      "ret1m": 0.82,
      "ret3m": -0.16,
      "ret6m": -1.34,
      "ret1y": -9.05,
      "ret2y": -5.39,
      "ret3y": 15.63
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.748,
      "ret1w": 1.12,
      "ret1m": 0.82,
      "ret3m": -0.12,
      "ret6m": -1.2,
      "ret1y": -8.82,
      "ret2y": -4.92,
      "ret3y": 16.78
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7068,
      "ret1w": -1.84,
      "ret1m": -4.33,
      "ret3m": 0.51,
      "ret6m": -16.46,
      "ret1y": 30.6,
      "ret2y": 64.48,
      "ret3y": 157.79
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5079,
      "ret1w": -0.73,
      "ret1m": -1.9,
      "ret3m": 2.27,
      "ret6m": -2.84,
      "ret1y": 3.77,
      "ret2y": 24.16,
      "ret3y": 88.93
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7431,
      "ret1w": -0.03,
      "ret1m": 0.38,
      "ret3m": 2.79,
      "ret6m": -11.03,
      "ret1y": -13.71,
      "ret2y": -6.3,
      "ret3y": 19.47
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1262,
      "ret1w": -1.35,
      "ret1m": -1.53,
      "ret3m": 2.97,
      "ret6m": -7.11,
      "ret1y": 19.55,
      "ret2y": 43.0,
      "ret3y": 144.68
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5026,
      "ret1w": -0.48,
      "ret1m": -1.1,
      "ret3m": -3.51,
      "ret6m": -9.73,
      "ret1y": -3.62,
      "ret2y": 15.54,
      "ret3y": 51.75
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5122,
      "ret1w": -0.49,
      "ret1m": -1.1,
      "ret3m": -3.49,
      "ret6m": -9.65,
      "ret1y": -3.43,
      "ret2y": 15.99,
      "ret3y": 52.99
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2868,
      "ret1w": 0.09,
      "ret1m": 0.0,
      "ret3m": 1.31,
      "ret6m": -0.5,
      "ret1y": -0.34,
      "ret2y": 0.02,
      "ret3y": 1.81
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1276,
      "ret1w": 0.02,
      "ret1m": -0.91,
      "ret3m": -1.34,
      "ret6m": 5.11,
      "ret1y": -5.96,
      "ret2y": -0.02,
      "ret3y": 19.41
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3841,
      "ret1w": -1.23,
      "ret1m": -2.68,
      "ret3m": -2.25,
      "ret6m": -14.85,
      "ret1y": -5.01,
      "ret2y": -12.55,
      "ret3y": 15.35
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0453,
      "ret1w": 0.42,
      "ret1m": 0.27,
      "ret3m": 2.12,
      "ret6m": -1.62,
      "ret1y": -6.63,
      "ret2y": 15.15,
      "ret3y": 54.29
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.228,
      "ret1w": -1.22,
      "ret1m": -3.35,
      "ret3m": -2.57,
      "ret6m": -25.57,
      "ret1y": 29.48,
      "ret2y": 74.96,
      "ret3y": 200.28
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5209,
      "ret1w": 0.36,
      "ret1m": 2.53,
      "ret3m": 2.43,
      "ret6m": 4.4,
      "ret1y": 2.28,
      "ret2y": 1.39,
      "ret3y": 14.85
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6277,
      "ret1w": -1.97,
      "ret1m": -0.1,
      "ret3m": 3.53,
      "ret6m": -17.08,
      "ret1y": -8.66,
      "ret2y": 9.07,
      "ret3y": 52.99
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.565,
      "ret1w": -2.42,
      "ret1m": -5.25,
      "ret3m": -0.93,
      "ret6m": -12.33,
      "ret1y": 60.29,
      "ret2y": 119.53,
      "ret3y": 344.46
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0642,
      "ret1w": -0.08,
      "ret1m": -0.26,
      "ret3m": -0.16,
      "ret6m": -1.76,
      "ret1y": -0.28,
      "ret2y": 1.35,
      "ret3y": 4.6
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1127,
      "ret1w": -0.07,
      "ret1m": -0.26,
      "ret3m": -0.13,
      "ret6m": -1.7,
      "ret1y": -0.15,
      "ret2y": 1.64,
      "ret3y": 5.32
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0644,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.08,
      "ret6m": 0.24,
      "ret1y": 0.71,
      "ret2y": 1.47,
      "ret3y": 2.67
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.099,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.25,
      "ret1y": 0.79,
      "ret2y": 1.48,
      "ret3y": 3.85
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1084,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.3,
      "ret1y": 0.88,
      "ret2y": 1.68,
      "ret3y": 4.28
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0762,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.09,
      "ret6m": 0.29,
      "ret1y": 0.7,
      "ret2y": 1.35,
      "ret3y": 2.77
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0906,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.11,
      "ret6m": 0.35,
      "ret1y": 0.85,
      "ret2y": 1.66,
      "ret3y": 3.41
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0625,
      "ret1w": -0.33,
      "ret1m": -0.56,
      "ret3m": 0.63,
      "ret6m": -2.98,
      "ret1y": 1.23,
      "ret2y": 5.39,
      "ret3y": 12.94
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.216,
      "ret1w": -0.34,
      "ret1m": -0.51,
      "ret3m": 1.49,
      "ret6m": -3.28,
      "ret1y": 0.8,
      "ret2y": 2.64,
      "ret3y": 7.4
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0692,
      "ret1w": -0.33,
      "ret1m": -0.56,
      "ret3m": 0.67,
      "ret6m": -2.88,
      "ret1y": 1.43,
      "ret2y": 5.81,
      "ret3y": 13.85
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0458,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.13,
      "ret6m": 0.3,
      "ret1y": 0.83,
      "ret2y": 1.7,
      "ret3y": 3.56
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1593,
      "ret1w": -0.36,
      "ret1m": -1.07,
      "ret3m": -0.69,
      "ret6m": -4.26,
      "ret1y": -4.15,
      "ret2y": 0.42,
      "ret3y": 9.34
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2164,
      "ret1w": 0.02,
      "ret1m": -0.13,
      "ret3m": -0.2,
      "ret6m": -0.68,
      "ret1y": -0.38,
      "ret2y": 4.65,
      "ret3y": 15.31
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1349,
      "ret1w": -0.26,
      "ret1m": -0.51,
      "ret3m": 0.37,
      "ret6m": -1.49,
      "ret1y": 0.71,
      "ret2y": 3.67,
      "ret3y": 10.12
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2061,
      "ret1w": -0.26,
      "ret1m": -0.5,
      "ret3m": 0.41,
      "ret6m": -1.39,
      "ret1y": 0.91,
      "ret2y": 4.09,
      "ret3y": 11.04
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8841,
      "ret1w": 0.3,
      "ret1m": 0.2,
      "ret3m": 0.35,
      "ret6m": -11.56,
      "ret1y": -7.84,
      "ret2y": 4.1,
      "ret3y": 58.05
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.242,
      "ret1w": 1.89,
      "ret1m": -3.87,
      "ret3m": 6.61,
      "ret6m": 14.15,
      "ret1y": 2.56,
      "ret2y": -22.13,
      "ret3y": 113.4
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.963,
      "ret1w": 1.05,
      "ret1m": -3.8,
      "ret3m": 9.06,
      "ret6m": 4.45,
      "ret1y": -1.53,
      "ret2y": -18.39,
      "ret3y": 49.77
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.734,
      "ret1w": 0.55,
      "ret1m": 0.21,
      "ret3m": 3.07,
      "ret6m": -1.3,
      "ret1y": 11.96,
      "ret2y": 32.01,
      "ret3y": 59.74
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3185,
      "ret1w": 0.18,
      "ret1m": -1.18,
      "ret3m": 3.1,
      "ret6m": -6.4,
      "ret1y": 4.87,
      "ret2y": 19.78,
      "ret3y": 40.54
    },
    {
      "code": "262001",
      "name": "景顺长城大中华混合(QDII)A人民币",
      "type": "QDII",
      "nav": 2.12,
      "ret1w": 0.05,
      "ret1m": -2.3,
      "ret3m": 0.33,
      "ret6m": -11.37,
      "ret1y": -7.38,
      "ret2y": -7.42,
      "ret3y": 26.64
    },
    {
      "code": "241001",
      "name": "华宝海外中国成长混合",
      "type": "QDII",
      "nav": 1.522,
      "ret1w": 0.26,
      "ret1m": -1.55,
      "ret3m": 12.57,
      "ret6m": -9.99,
      "ret1y": -5.23,
      "ret2y": 2.7,
      "ret3y": 40.28
    },
    {
      "code": "161229",
      "name": "国投瑞银中国价值发现股票",
      "type": "QDII",
      "nav": 1.3971,
      "ret1w": -0.2,
      "ret1m": -0.15,
      "ret3m": -1.32,
      "ret6m": -1.22,
      "ret1y": -6.64,
      "ret2y": -10.32,
      "ret3y": 18.9
    },
    {
      "code": "160125",
      "name": "南方香港优选股票",
      "type": "QDII",
      "nav": 1.5784,
      "ret1w": 0.21,
      "ret1m": -0.54,
      "ret3m": 0.76,
      "ret6m": -12.99,
      "ret1y": -10.23,
      "ret2y": -12.14,
      "ret3y": 73.15
    },
    {
      "code": "110011",
      "name": "易方达优质精选混合(QDII)",
      "type": "QDII",
      "nav": 4.1705,
      "ret1w": 1.27,
      "ret1m": -0.92,
      "ret3m": -1.32,
      "ret6m": -5.3,
      "ret1y": -17.21,
      "ret2y": -24.2,
      "ret3y": -4.17
    },
    {
      "code": "100061",
      "name": "富国中国中小盘混合(QDII)人民币A",
      "type": "QDII",
      "nav": 3.2082,
      "ret1w": 0.65,
      "ret1m": -0.62,
      "ret3m": 1.7,
      "ret6m": -7.17,
      "ret1y": -12.98,
      "ret2y": -8.8,
      "ret3y": 53.5
    },
    {
      "code": "080006",
      "name": "长盛环球行业混合(QDII)A",
      "type": "QDII",
      "nav": 1.3789,
      "ret1w": 1.02,
      "ret1m": -0.51,
      "ret3m": 2.59,
      "ret6m": -2.62,
      "ret1y": 9.87,
      "ret2y": 13.58,
      "ret3y": 41.28
    },
    {
      "code": "070012",
      "name": "嘉实海外中国股票混合",
      "type": "QDII",
      "nav": 0.846,
      "ret1w": 0.36,
      "ret1m": -1.74,
      "ret3m": -1.28,
      "ret6m": -0.94,
      "ret1y": -9.52,
      "ret2y": -5.37,
      "ret3y": 36.89
    },
    {
      "code": "050015",
      "name": "博时大中华亚太精选",
      "type": "QDII",
      "nav": 1.316,
      "ret1w": -0.08,
      "ret1m": -1.13,
      "ret3m": -0.15,
      "ret6m": -11.5,
      "ret1y": 7.08,
      "ret2y": 40.9,
      "ret3y": 51.79
    },
    {
      "code": "040021",
      "name": "华安大中华升级股票(QDII)A",
      "type": "QDII",
      "nav": 2.999,
      "ret1w": -0.83,
      "ret1m": -2.72,
      "ret3m": 9.53,
      "ret6m": -11.59,
      "ret1y": 11.86,
      "ret2y": 35.03,
      "ret3y": 121.82
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0113,
      "ret1w": 0.0,
      "ret1m": 0.09,
      "ret3m": 0.2,
      "ret6m": 0.36,
      "ret1y": 1.41,
      "ret2y": 2.02,
      "ret3y": 3.56
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0102,
      "ret1w": 0.0,
      "ret1m": 0.09,
      "ret3m": 0.21,
      "ret6m": 0.34,
      "ret1y": 1.41,
      "ret2y": 2.07,
      "ret3y": 3.74
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.396,
      "ret1w": -0.21,
      "ret1m": -2.1,
      "ret3m": -3.12,
      "ret6m": -11.42,
      "ret1y": -0.85,
      "ret2y": 3.1,
      "ret3y": 35.8
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.775,
      "ret1w": -0.86,
      "ret1m": -2.84,
      "ret3m": -1.67,
      "ret6m": -10.19,
      "ret1y": -1.21,
      "ret2y": 14.24,
      "ret3y": 61.24
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6797,
      "ret1w": -1.14,
      "ret1m": -4.03,
      "ret3m": 5.25,
      "ret6m": -2.52,
      "ret1y": -15.35,
      "ret2y": 30.49,
      "ret3y": 75.7
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1225,
      "ret1w": -0.25,
      "ret1m": -1.4,
      "ret3m": 0.46,
      "ret6m": -3.99,
      "ret1y": 2.44,
      "ret2y": 11.81,
      "ret3y": 45.38
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1833,
      "ret1w": -0.26,
      "ret1m": -1.4,
      "ret3m": 0.49,
      "ret6m": -3.9,
      "ret1y": 2.65,
      "ret2y": 12.26,
      "ret3y": 46.55
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9759,
      "ret1w": -1.26,
      "ret1m": -2.93,
      "ret3m": 0.5,
      "ret6m": -7.81,
      "ret1y": -6.43,
      "ret2y": 14.37,
      "ret3y": 65.78
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7765,
      "ret1w": -0.08,
      "ret1m": -1.26,
      "ret3m": -1.0,
      "ret6m": -6.31,
      "ret1y": -0.25,
      "ret2y": 5.34,
      "ret3y": 41.24
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5758,
      "ret1w": -0.24,
      "ret1m": -1.62,
      "ret3m": -0.1,
      "ret6m": -3.13,
      "ret1y": -7.21,
      "ret2y": 14.11,
      "ret3y": 57.49
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9061,
      "ret1w": -1.05,
      "ret1m": -3.85,
      "ret3m": -4.36,
      "ret6m": -15.35,
      "ret1y": 7.34,
      "ret2y": 16.9,
      "ret3y": 73.38
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1748,
      "ret1w": 0.23,
      "ret1m": -0.38,
      "ret3m": 0.95,
      "ret6m": 2.22,
      "ret1y": 1.12,
      "ret2y": 3.97,
      "ret3y": 32.28
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5243,
      "ret1w": 0.35,
      "ret1m": -0.33,
      "ret3m": 0.04,
      "ret6m": 4.38,
      "ret1y": 2.65,
      "ret2y": 13.47,
      "ret3y": 29.36
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7043,
      "ret1w": -0.21,
      "ret1m": -2.95,
      "ret3m": -3.93,
      "ret6m": -13.21,
      "ret1y": 3.03,
      "ret2y": 10.86,
      "ret3y": 57.42
    },
    {
      "code": "530015",
      "name": "建信深证基本面60ETF联接A",
      "type": "指数型",
      "nav": 2.6319,
      "ret1w": 0.35,
      "ret1m": -1.05,
      "ret3m": -0.2,
      "ret6m": -1.21,
      "ret1y": -0.99,
      "ret2y": 1.91,
      "ret3y": 25.5
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1669,
      "ret1w": -1.32,
      "ret1m": -1.09,
      "ret3m": 3.94,
      "ret6m": -9.33,
      "ret1y": -3.44,
      "ret2y": 6.62,
      "ret3y": 52.68
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1687,
      "ret1w": -1.32,
      "ret1m": -1.07,
      "ret3m": 3.95,
      "ret6m": -9.28,
      "ret1y": -3.47,
      "ret2y": 6.69,
      "ret3y": 52.13
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3904,
      "ret1w": 0.25,
      "ret1m": -2.11,
      "ret3m": 4.66,
      "ret6m": -11.0,
      "ret1y": -5.09,
      "ret2y": 2.05,
      "ret3y": 39.92
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4222,
      "ret1w": 0.25,
      "ret1m": -2.1,
      "ret3m": 4.69,
      "ret6m": -10.91,
      "ret1y": -4.9,
      "ret2y": 2.46,
      "ret3y": 41.05
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9921,
      "ret1w": -0.08,
      "ret1m": -2.9,
      "ret3m": 3.56,
      "ret6m": -15.37,
      "ret1y": -0.88,
      "ret2y": 8.14,
      "ret3y": 62.54
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1635,
      "ret1w": -0.1,
      "ret1m": -0.32,
      "ret3m": -0.53,
      "ret6m": -0.5,
      "ret1y": -0.16,
      "ret2y": 1.91,
      "ret3y": 7.69
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1834,
      "ret1w": -0.09,
      "ret1m": -0.31,
      "ret3m": -0.5,
      "ret6m": -0.41,
      "ret1y": -0.01,
      "ret2y": 2.22,
      "ret3y": 8.35
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0843,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.09,
      "ret6m": 0.31,
      "ret1y": 0.86,
      "ret2y": 1.76,
      "ret3y": 3.26
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.41,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": -0.12,
      "ret6m": 0.04,
      "ret1y": 0.08,
      "ret2y": 0.64,
      "ret3y": 11.17
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4622,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": -0.09,
      "ret6m": 0.13,
      "ret1y": 0.27,
      "ret2y": 1.04,
      "ret3y": 12.06
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0696,
      "ret1w": -0.91,
      "ret1m": -2.57,
      "ret3m": -2.11,
      "ret6m": -1.77,
      "ret1y": 9.66,
      "ret2y": 21.53,
      "ret3y": 63.33
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2291,
      "ret1w": -0.55,
      "ret1m": -2.08,
      "ret3m": -2.01,
      "ret6m": -2.22,
      "ret1y": 5.02,
      "ret2y": 10.82,
      "ret3y": 49.22
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 4.6317
      },
      {
        "date": "2026-09-04",
        "nav": 4.4762
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 4.0877
      },
      {
        "date": "2026-09-04",
        "nav": 4.0311
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 5.5893
      },
      {
        "date": "2026-09-04",
        "nav": 5.5255
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 0.7162
      },
      {
        "date": "2026-09-04",
        "nav": 0.7259
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.0392
      },
      {
        "date": "2026-09-04",
        "nav": 2.0469
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.6797
      },
      {
        "date": "2026-09-04",
        "nav": 2.689
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 5.5006
      },
      {
        "date": "2026-09-04",
        "nav": 5.5184
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.909
      },
      {
        "date": "2026-09-04",
        "nav": 1.884
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.341
      },
      {
        "date": "2026-09-04",
        "nav": 1.3255
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 3.41
      },
      {
        "date": "2026-09-04",
        "nav": 3.306
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.119
      },
      {
        "date": "2026-09-04",
        "nav": 1.137
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.357
      },
      {
        "date": "2026-09-04",
        "nav": 2.361
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.6787
      },
      {
        "date": "2026-09-04",
        "nav": 1.626
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.9545
      },
      {
        "date": "2026-09-04",
        "nav": 1.9766
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.654
      },
      {
        "date": "2026-09-04",
        "nav": 1.6309
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.3188
      },
      {
        "date": "2026-09-04",
        "nav": 2.2426
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.5666
      },
      {
        "date": "2026-09-04",
        "nav": 2.5892
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.032
      },
      {
        "date": "2026-09-04",
        "nav": 1.021
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.3571
      },
      {
        "date": "2026-09-04",
        "nav": 2.3787
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.3308
      },
      {
        "date": "2026-09-04",
        "nav": 1.3184
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.2514
      },
      {
        "date": "2026-09-04",
        "nav": 1.2389
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.3311
      },
      {
        "date": "2026-09-04",
        "nav": 1.3179
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.0848
      },
      {
        "date": "2026-09-04",
        "nav": 1.0848
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.058
      },
      {
        "date": "2026-09-04",
        "nav": 1.058
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 0.7214
      },
      {
        "date": "2026-09-04",
        "nav": 0.7295
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 0.7397
      },
      {
        "date": "2026-09-04",
        "nav": 0.748
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.7576
      },
      {
        "date": "2026-09-04",
        "nav": 2.7068
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 2.5264
      },
      {
        "date": "2026-09-04",
        "nav": 2.5079
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 0.7433
      },
      {
        "date": "2026-09-04",
        "nav": 0.7431
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 4.1827
      },
      {
        "date": "2026-09-04",
        "nav": 4.1262
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 0.505
      },
      {
        "date": "2026-09-04",
        "nav": 0.5026
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 0.5147
      },
      {
        "date": "2026-09-04",
        "nav": 0.5122
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.2857
      },
      {
        "date": "2026-09-04",
        "nav": 1.2868
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.1274
      },
      {
        "date": "2026-09-04",
        "nav": 1.1276
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.4014
      },
      {
        "date": "2026-09-04",
        "nav": 1.3841
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 3.0325
      },
      {
        "date": "2026-09-04",
        "nav": 3.0453
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 3.268
      },
      {
        "date": "2026-09-04",
        "nav": 3.228
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 1.5155
      },
      {
        "date": "2026-09-04",
        "nav": 1.5209
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 0.6403
      },
      {
        "date": "2026-09-04",
        "nav": 0.6277
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-03",
        "nav": 13.902
      },
      {
        "date": "2026-09-04",
        "nav": 13.565
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 4.4762,
      "price": 4.4762,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 4.0311,
      "price": 4.0311,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.22,
      "nav": 5.5255,
      "price": 5.5255,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 0.7259,
      "price": 0.7259,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.29,
      "nav": 2.0469,
      "price": 2.0469,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.17,
      "nav": 2.689,
      "price": 2.689,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.5184,
      "price": 5.5184,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.884,
      "price": 1.884,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.3255,
      "price": 1.3255,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 3.306,
      "price": 3.306,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.09,
      "nav": 1.137,
      "price": 1.137,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.361,
      "price": 2.361,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.4,
      "nav": 1.626,
      "price": 1.626,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.09,
      "nav": 1.9766,
      "price": 1.9766,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.6309,
      "price": 1.6309,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.29,
      "nav": 2.2426,
      "price": 2.2426,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.5892,
      "price": 2.5892,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.021,
      "price": 1.021,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.3787,
      "price": 2.3787,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.3184,
      "price": 1.3184,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.1,
      "sharpe": 0.23,
      "calmar": 0.23
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 6.12,
      "sharpe": 0.6,
      "calmar": 0.6
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 6.52,
      "sharpe": 4.33,
      "calmar": 4.33
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.64,
      "sharpe": -1.0,
      "calmar": -1.0
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 8.73,
      "sharpe": -2.72,
      "calmar": -2.72
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 5.01,
      "sharpe": -3.43,
      "calmar": -3.43
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.53,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.5,
      "sharpe": -0.36,
      "calmar": -0.36
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.73,
      "sharpe": 0.18,
      "calmar": 0.18
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.71,
      "sharpe": 3.22,
      "calmar": 3.22
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.55,
      "sharpe": -0.24,
      "calmar": -0.24
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.38,
      "sharpe": -2.09,
      "calmar": -2.09
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 12.04,
      "sharpe": -3.95,
      "calmar": -3.95
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.66,
      "sharpe": 0.5,
      "calmar": 0.5
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.17,
      "sharpe": -0.53,
      "calmar": -0.53
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 8.76,
      "sharpe": 1.97,
      "calmar": 1.97
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.64,
      "sharpe": -1.06,
      "calmar": -1.06
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 2.17,
      "sharpe": 1.57,
      "calmar": 1.57
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.54,
      "sharpe": -0.81,
      "calmar": -0.81
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 2.15,
      "sharpe": 0.35,
      "calmar": 0.35
    }
  ],
  "news": [
    {
      "title": "“经”彩新图景丨十万亿级消费赛道发展提速商品消费迎来新篇章近日，商务部等7部门印发的《关于推动商品消费扩容升级的实施意见》提出，到2030年，社会消费品零售总额达60万亿元左右，培育形成绿色消费、智能消费、健康消费等十万亿级市场，推动相关领域消费持续发展壮大；汽车、家电、通信器材、纺织服装等万亿级品类零售额持续增长，市场规模保持全球领先地位。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:25",
      "impact": "neutral"
    },
    {
      "title": "下周财经日历（9月7日-9月13日）",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:12",
      "impact": "neutral"
    },
    {
      "title": "今日摘要1、习近平总书记指出：“基层强则国家强，基层安则天下安，必须抓好基层治理现代化这项基础性工作。”党的十八大以来，各地践行新时代“枫桥经验”，创新基层治理，以坚实有效的基层善治守护社会安定，增进民生福祉。2、习近平总书记给中央广播电视总台《小喇叭》节目开播70周年的贺信引发热烈反响。3、丁薛祥会见俄罗斯总统并与俄方共同主持中俄双边机制性会议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:41",
      "impact": "neutral"
    },
    {
      "title": "新华社上海9月5日电题：2026年中国农民丰收节金秋消费季启动，看点几何新华社记者韩佳诺、张梦洁“丰收地图”可一键查询各地特色优质农产品；AI智能推荐等数字化服务为消费者提供更加便捷的消费体验；景颇族目瑙纵歌等多项非遗技艺展现中华农耕文化的深厚底蕴与时代活力……9月4日至6日，2026年中国农民丰收节金秋消费季启动活动在上海举行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:31",
      "impact": "neutral"
    },
    {
      "title": "金秋九月，马来西亚的旅游博主李佳蕙赴天津参加中国文化旅游产业博览会，闲暇之余打卡城市地标，为自己的社交媒体账号收集“中国游”的新素材，她计划通过短视频向粉丝分享在中国的所见所闻。2026中国文化旅游产业博览会正在天津举办，20个国家和地区的2500余家文旅企业和10家国际组织机构、国家级行业协会参展参会。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:28",
      "impact": "neutral"
    },
    {
      "title": "今天（9月5日），三峡水运新通道工程葛洲坝临时码头陆域主体结构完工，标志着工程物流转运体系基本形成，为葛洲坝航运扩能后续船闸拆除、航道扩挖及新闸全面建设提供必要的物资转运保障。葛洲坝临时码头共布置3个泊位，主要承担建设期间弃渣运输，钢材、砂石、大型施工设备等大宗物资装卸、转运及船舶停靠任务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:06",
      "impact": "neutral"
    },
    {
      "title": "据山西日报，9月3日至5日，山西省委副书记、省长卢东亮与出席2026年太原能源低碳发展论坛的有关中央企业、中国有色金属工业协会负责同志，分别举行工作会谈，就加强安全保供、推进能源转型、深化省企合作进行深入交流。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:15",
      "impact": "neutral"
    },
    {
      "title": "新华社北京9月5日电（记者魏弘毅、魏玉坤）记者5日从国家发展改革委了解到，国家发展改革委紧急安排中央预算内投资2000万元，支持江西省做好暴雨洪涝灾害灾后应急恢复。受近期强降雨影响，江西省南昌、吉安等多地发生洪涝灾害。9月5日，国家防减救灾委、应急管理部启动国家四级救灾应急响应。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:37",
      "impact": "neutral"
    },
    {
      "title": "9月3日至9月5日，2026低空经济发展大会在芜湖举行。长三角G60科创走廊九城市政府首次联合发布《长三角G60科创走廊城市低空安全联合行动倡议》。其中明确，严守法规制度，落实实名登记、空域查询、飞行审批，坚决杜绝黑飞；强化科技赋能，接入低空监管平台，提升飞行器智能安全能力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:16",
      "impact": "neutral"
    },
    {
      "title": "·8月中国物流需求保持扩张景气水平进一步提升·8月中国大宗商品价格指数环比上涨2.8%能源化工有色价格指数大幅上涨·新华社国家高端智库发布《开放、创新、合作——构建更加繁荣的亚太共同体》智库报告·美情报评估：伊朗似乎决意继续与美国对抗至少坚持到11月美国国会中期选举·中国物流与采购联合会发布8月份中国物流业景气指数。物流需求保持扩张，景气指数在扩张区间内继续提升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:10",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 47,
    "label": "中性",
    "upDownRatio": "2,281/1,859",
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
