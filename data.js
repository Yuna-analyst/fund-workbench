// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-07 16:17:29
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-07 16:17 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-06",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3649.18,
      "change": -40.73,
      "changePct": "-1.10%",
      "high": 3660.49,
      "low": 3610.2,
      "volume": 477042561.0,
      "amount": 772634570000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11175.78,
      "change": -295.31,
      "changePct": "-2.57%",
      "high": 11303.22,
      "low": 11044.56,
      "volume": 569400962.0,
      "amount": 885159900000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2465.23,
      "change": -101.57,
      "changePct": "-3.96%",
      "high": 2506.97,
      "low": 2438.72,
      "volume": 181680656.0,
      "amount": 441068350000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1253.2,
      "change": -33.48,
      "changePct": "-2.60%",
      "high": 1288.38,
      "low": 1219.53,
      "volume": 11262095.0,
      "amount": 89626590000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4054.28,
      "change": -59.13,
      "changePct": "-1.44%",
      "high": 4069.07,
      "low": 4013.79,
      "volume": 192152012.0,
      "amount": 478840400000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6597.35,
      "change": -143.58,
      "changePct": "-2.13%",
      "high": 6692.45,
      "low": 6512.13,
      "volume": 145316785.0,
      "amount": 291391330000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.96万亿",
      "label": "成交额",
      "rawAmount": 2958721140000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,159/2,420",
      "label": "涨/跌家数",
      "rawUp": 1159,
      "rawDown": 2420,
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
    "totalInflow": 2.39,
    "totalOutflow": 0,
    "netFlow": 2.39,
    "netFlowTrend": [
      0.48,
      0.96,
      1.43,
      1.91,
      2.39
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
      "inflow": 3.82,
      "pct": 0.69
    },
    {
      "name": "农业",
      "inflow": 0.3,
      "pct": 0.27
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.71
    },
    {
      "name": "计算机",
      "inflow": -0.05,
      "pct": -2.63
    },
    {
      "name": "食品",
      "inflow": -0.06,
      "pct": -0.38
    },
    {
      "name": "钢铁",
      "inflow": -0.17,
      "pct": -0.83
    },
    {
      "name": "家电",
      "inflow": -0.19,
      "pct": -0.51
    },
    {
      "name": "新能源车",
      "inflow": -0.38,
      "pct": -2.49
    },
    {
      "name": "地产",
      "inflow": -0.43,
      "pct": -1.64
    },
    {
      "name": "游戏",
      "inflow": -0.43,
      "pct": -1.94
    },
    {
      "name": "军工",
      "inflow": -0.87,
      "pct": -1.83
    },
    {
      "name": "新能源",
      "inflow": -1.02,
      "pct": -2.29
    },
    {
      "name": "煤炭",
      "inflow": -1.24,
      "pct": -0.26
    },
    {
      "name": "医药",
      "inflow": -1.27,
      "pct": -1.26
    },
    {
      "name": "医疗",
      "inflow": -1.32,
      "pct": -2.24
    },
    {
      "name": "券商",
      "inflow": -1.72,
      "pct": -1.23
    },
    {
      "name": "创新药",
      "inflow": -1.83,
      "pct": -1.65
    },
    {
      "name": "白酒",
      "inflow": -1.85,
      "pct": -1.1
    },
    {
      "name": "光伏",
      "inflow": -2.34,
      "pct": -1.19
    },
    {
      "name": "传媒",
      "inflow": -2.67,
      "pct": -1.06
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.877,
      "changePct": 0.69,
      "change": 0.006,
      "turnover": 12.73
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.736,
      "changePct": 0.27,
      "change": 0.002,
      "turnover": 1.01
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.169,
      "changePct": -0.26,
      "change": -0.003,
      "turnover": 4.13
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.524,
      "changePct": -0.38,
      "change": -0.002,
      "turnover": 0.2
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.361,
      "changePct": -0.51,
      "change": -0.007,
      "turnover": 0.64
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.979,
      "changePct": -0.71,
      "change": -0.007,
      "turnover": 0.07
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.07,
      "changePct": -0.83,
      "change": -0.009,
      "turnover": 0.56
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.841,
      "changePct": -1.06,
      "change": -0.009,
      "turnover": 8.9
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.448,
      "changePct": -1.1,
      "change": -0.005,
      "turnover": 6.16
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.748,
      "changePct": -1.19,
      "change": -0.009,
      "turnover": 7.8
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.483,
      "changePct": -1.23,
      "change": -0.006,
      "turnover": 5.72
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.393,
      "changePct": -1.26,
      "change": -0.005,
      "turnover": 4.22
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.142,
      "changePct": -1.64,
      "change": -0.019,
      "turnover": 1.43
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.837,
      "changePct": -1.65,
      "change": -0.014,
      "turnover": 6.1
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.021,
      "changePct": -1.83,
      "change": -0.019,
      "turnover": 2.89
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.061,
      "changePct": -1.94,
      "change": -0.021,
      "turnover": 1.43
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.349,
      "changePct": -2.24,
      "change": -0.008,
      "turnover": 4.41
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.092,
      "changePct": -2.29,
      "change": -0.049,
      "turnover": 3.41
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.368,
      "changePct": -2.49,
      "change": -0.035,
      "turnover": 1.25
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.001,
      "changePct": -2.63,
      "change": -0.027,
      "turnover": 0.18
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.416,
      "changePct": -2.95,
      "change": -0.043,
      "turnover": 0.68
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.775,
      "changePct": -3.0,
      "change": -0.024,
      "turnover": 11.69
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.832,
      "changePct": -3.03,
      "change": -0.026,
      "turnover": 5.6
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.448,
      "changePct": -3.21,
      "change": -0.048,
      "turnover": 4.83
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.779,
      "changePct": -3.47,
      "change": -0.028,
      "turnover": 2.59
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.609,
      "changePct": -3.94,
      "change": -0.025,
      "turnover": 0.38
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.405,
      "changePct": -5.59,
      "change": -0.024,
      "turnover": 28.67
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.637,
      "changePct": -6.05,
      "change": -0.041,
      "turnover": 9.63
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.092,
      "changePct": -2.29,
      "amount": 3.41,
      "netFlow": -0.85
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.393,
      "changePct": -1.26,
      "amount": 4.22,
      "netFlow": -1.05
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.483,
      "changePct": -1.23,
      "amount": 5.72,
      "netFlow": -1.43
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.304,
      "changePct": -1.58,
      "amount": 10.57,
      "netFlow": -2.64
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.775,
      "changePct": -3.0,
      "amount": 11.69,
      "netFlow": -2.92
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.009,
      "changePct": -1.55,
      "amount": 14.05,
      "netFlow": -3.51
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.902,
      "changePct": -0.96,
      "amount": 18.06,
      "netFlow": -4.51
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.629,
      "changePct": -2.28,
      "amount": 35.92,
      "netFlow": -8.98
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.124,
      "changePct": -1.69,
      "amount": 52.12,
      "netFlow": -13.03
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.326,
      "changePct": -2.36,
      "amount": 129.66,
      "netFlow": -32.42
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.124,
      "changePct": -1.69,
      "amount": 52.12,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.902,
      "changePct": -0.96,
      "amount": 18.06,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.629,
      "changePct": -2.28,
      "amount": 35.92,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.304,
      "changePct": -1.58,
      "amount": 10.57,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.009,
      "changePct": -1.55,
      "amount": 14.05,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 12.73,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "农业",
      "turnover": 1.01,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 4.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.64,
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
      "name": "钢铁",
      "turnover": 0.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 8.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 6.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 7.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 5.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 4.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.89,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 3.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.18,
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
      "nav": 3.9103,
      "ret1w": -3.29,
      "ret1m": 4.11,
      "ret3m": -11.61,
      "ret6m": -8.75,
      "ret1y": -19.83,
      "ret2y": -1.99,
      "ret3y": 76.91
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.7114,
      "ret1w": -4.77,
      "ret1m": -4.56,
      "ret3m": -29.5,
      "ret6m": -35.2,
      "ret1y": -43.71,
      "ret2y": -31.95,
      "ret3y": -5.32
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.105,
      "ret1w": -5.57,
      "ret1m": -7.16,
      "ret3m": -44.97,
      "ret6m": -36.37,
      "ret1y": -37.59,
      "ret2y": -7.86,
      "ret3y": 54.38
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7752,
      "ret1w": 0.44,
      "ret1m": 5.8,
      "ret3m": 11.2,
      "ret6m": 8.56,
      "ret1y": 2.99,
      "ret2y": -3.71,
      "ret3y": 4.96
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.1093,
      "ret1w": -1.39,
      "ret1m": 10.66,
      "ret3m": 5.53,
      "ret6m": -6.63,
      "ret1y": -25.77,
      "ret2y": -32.27,
      "ret3y": -18.01
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7049,
      "ret1w": -1.68,
      "ret1m": 7.0,
      "ret3m": -0.16,
      "ret6m": -4.58,
      "ret1y": -20.88,
      "ret2y": -22.01,
      "ret3y": 8.17
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4671,
      "ret1w": -1.2,
      "ret1m": 3.89,
      "ret3m": 3.39,
      "ret6m": -1.04,
      "ret1y": -4.26,
      "ret2y": 2.54,
      "ret3y": 29.11
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.671,
      "ret1w": -2.57,
      "ret1m": 4.31,
      "ret3m": -11.91,
      "ret6m": -10.78,
      "ret1y": -20.5,
      "ret2y": -10.4,
      "ret3y": 25.73
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1281,
      "ret1w": -2.98,
      "ret1m": 3.04,
      "ret3m": -12.86,
      "ret6m": -16.26,
      "ret1y": -22.07,
      "ret2y": -11.33,
      "ret3y": 4.75
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.557,
      "ret1w": -2.81,
      "ret1m": 1.71,
      "ret3m": -19.21,
      "ret6m": -25.43,
      "ret1y": -18.72,
      "ret2y": 14.2,
      "ret3y": 98.52
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.175,
      "ret1w": -1.01,
      "ret1m": 4.44,
      "ret3m": 6.92,
      "ret6m": 5.19,
      "ret1y": 1.64,
      "ret2y": -6.45,
      "ret3y": -8.35
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.284,
      "ret1w": -1.76,
      "ret1m": 3.3,
      "ret3m": -6.93,
      "ret6m": -3.1,
      "ret1y": -14.23,
      "ret2y": -11.98,
      "ret3y": 6.13
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2109,
      "ret1w": -2.17,
      "ret1m": 12.08,
      "ret3m": -24.42,
      "ret6m": -31.68,
      "ret1y": -65.16,
      "ret2y": -60.04,
      "ret3y": -37.15
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9555,
      "ret1w": -0.14,
      "ret1m": 3.46,
      "ret3m": 3.76,
      "ret6m": 1.65,
      "ret1y": 6.86,
      "ret2y": 1.18,
      "ret3y": -3.3
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4145,
      "ret1w": -2.16,
      "ret1m": 3.2,
      "ret3m": -12.94,
      "ret6m": -12.72,
      "ret1y": -20.23,
      "ret2y": -10.66,
      "ret3y": 20.28
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.4038,
      "ret1w": -5.59,
      "ret1m": -3.64,
      "ret3m": -36.71,
      "ret6m": -39.33,
      "ret1y": -42.07,
      "ret2y": -0.77,
      "ret3y": 31.44
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5959,
      "ret1w": -1.01,
      "ret1m": 1.82,
      "ret3m": -1.67,
      "ret6m": 2.43,
      "ret1y": -5.84,
      "ret2y": -3.94,
      "ret3y": 0.51
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.947,
      "ret1w": -2.47,
      "ret1m": 6.4,
      "ret3m": -9.64,
      "ret6m": -6.61,
      "ret1y": -5.68,
      "ret2y": -10.66,
      "ret3y": -15.14
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4227,
      "ret1w": 0.19,
      "ret1m": 1.36,
      "ret3m": 5.76,
      "ret6m": 3.65,
      "ret1y": -1.17,
      "ret2y": 2.45,
      "ret3y": 9.04
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1936,
      "ret1w": -1.49,
      "ret1m": 3.55,
      "ret3m": -7.91,
      "ret6m": -7.26,
      "ret1y": -9.84,
      "ret2y": 1.24,
      "ret3y": 37.32
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.965,
      "ret1w": -3.2,
      "ret1m": 1.61,
      "ret3m": -18.23,
      "ret6m": -24.86,
      "ret1y": -29.94,
      "ret2y": -17.84,
      "ret3y": 1.22
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0272,
      "ret1w": -3.2,
      "ret1m": 1.61,
      "ret3m": -18.2,
      "ret6m": -24.79,
      "ret1y": -29.81,
      "ret2y": -17.53,
      "ret3y": 2.02
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.05,
      "ret1w": -0.31,
      "ret1m": 0.3,
      "ret3m": -1.62,
      "ret6m": -4.48,
      "ret1y": -4.48,
      "ret2y": -2.91,
      "ret3y": 2.72
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0252,
      "ret1w": -0.3,
      "ret1m": 0.31,
      "ret3m": -1.55,
      "ret6m": -4.33,
      "ret1y": -4.18,
      "ret2y": -2.32,
      "ret3y": 3.98
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7201,
      "ret1w": -0.65,
      "ret1m": 4.94,
      "ret3m": 2.83,
      "ret6m": -1.06,
      "ret1y": -11.49,
      "ret2y": -10.86,
      "ret3y": 1.52
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.739,
      "ret1w": -0.63,
      "ret1m": 4.96,
      "ret3m": 2.88,
      "ret6m": -0.94,
      "ret1y": -11.26,
      "ret2y": -10.41,
      "ret3y": 2.55
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.9338,
      "ret1w": -4.6,
      "ret1m": -6.03,
      "ret3m": -27.45,
      "ret6m": -29.97,
      "ret1y": -26.15,
      "ret2y": -2.25,
      "ret3y": 66.58
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3767,
      "ret1w": -1.64,
      "ret1m": 8.68,
      "ret3m": -3.54,
      "ret6m": -5.2,
      "ret1y": -8.46,
      "ret2y": 9.18,
      "ret3y": 49.11
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7255,
      "ret1w": -1.81,
      "ret1m": 9.91,
      "ret3m": 1.92,
      "ret6m": -1.99,
      "ret1y": -18.56,
      "ret2y": -11.78,
      "ret3y": -2.5
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.994,
      "ret1w": -2.2,
      "ret1m": 8.89,
      "ret3m": -3.86,
      "ret6m": -4.43,
      "ret1y": -1.07,
      "ret2y": 27.57,
      "ret3y": 92.13
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4562,
      "ret1w": -1.17,
      "ret1m": -1.83,
      "ret3m": -8.15,
      "ret6m": -12.84,
      "ret1y": -14.33,
      "ret2y": -1.81,
      "ret3y": 21.65
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4653,
      "ret1w": -1.17,
      "ret1m": -1.81,
      "ret3m": -8.12,
      "ret6m": -12.75,
      "ret1y": -14.15,
      "ret2y": -1.4,
      "ret3y": 22.64
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2567,
      "ret1w": -0.03,
      "ret1m": -0.34,
      "ret3m": -0.88,
      "ret6m": -1.33,
      "ret1y": -2.82,
      "ret2y": -2.45,
      "ret3y": 0.4
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0772,
      "ret1w": -0.72,
      "ret1m": 1.57,
      "ret3m": -2.56,
      "ret6m": -5.39,
      "ret1y": -7.11,
      "ret2y": -9.13,
      "ret3y": 1.07
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1638,
      "ret1w": -0.82,
      "ret1m": 1.46,
      "ret3m": -11.83,
      "ret6m": -18.5,
      "ret1y": -28.78,
      "ret2y": -24.69,
      "ret3y": -18.07
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6925,
      "ret1w": -2.07,
      "ret1m": -2.91,
      "ret3m": -7.77,
      "ret6m": -9.71,
      "ret1y": -17.46,
      "ret2y": -4.15,
      "ret3y": 22.81
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.084,
      "ret1w": -4.36,
      "ret1m": -4.49,
      "ret3m": -33.67,
      "ret6m": -38.22,
      "ret1y": -43.46,
      "ret2y": -7.38,
      "ret3y": 52.34
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.564,
      "ret1w": 1.12,
      "ret1m": -0.41,
      "ret3m": 2.98,
      "ret6m": 6.47,
      "ret1y": 5.04,
      "ret2y": 1.56,
      "ret3y": 1.74
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5544,
      "ret1w": -2.63,
      "ret1m": 1.72,
      "ret3m": -4.17,
      "ret6m": -14.13,
      "ret1y": -23.38,
      "ret2y": -5.3,
      "ret3y": -13.44
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.55,
      "ret1w": -5.06,
      "ret1m": -5.73,
      "ret3m": -37.16,
      "ret6m": -40.48,
      "ret1y": -24.89,
      "ret2y": 6.38,
      "ret3y": 97.32
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0507,
      "ret1w": -0.14,
      "ret1m": -0.03,
      "ret3m": -0.96,
      "ret6m": -1.49,
      "ret1y": -1.78,
      "ret2y": -0.72,
      "ret3y": 2.2
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0987,
      "ret1w": -0.14,
      "ret1m": -0.05,
      "ret3m": -0.96,
      "ret6m": -1.46,
      "ret1y": -1.68,
      "ret2y": -0.51,
      "ret3y": 2.85
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.068,
      "ret1w": 0.03,
      "ret1m": 0.08,
      "ret3m": 0.19,
      "ret6m": 0.41,
      "ret1y": 0.74,
      "ret2y": 1.64,
      "ret3y": 3.04
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1027,
      "ret1w": 0.02,
      "ret1m": 0.09,
      "ret3m": 0.23,
      "ret6m": 0.46,
      "ret1y": 0.8,
      "ret2y": 1.59,
      "ret3y": 3.92
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1125,
      "ret1w": 0.01,
      "ret1m": 0.09,
      "ret3m": 0.24,
      "ret6m": 0.51,
      "ret1y": 0.9,
      "ret2y": 1.79,
      "ret3y": 4.34
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0787,
      "ret1w": 0.03,
      "ret1m": 0.08,
      "ret3m": 0.19,
      "ret6m": 0.33,
      "ret1y": 0.67,
      "ret2y": 1.51,
      "ret3y": 3.07
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0937,
      "ret1w": 0.02,
      "ret1m": 0.08,
      "ret3m": 0.21,
      "ret6m": 0.39,
      "ret1y": 0.82,
      "ret2y": 1.82,
      "ret3y": 3.72
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.009,
      "ret1w": -0.66,
      "ret1m": 1.08,
      "ret3m": -4.06,
      "ret6m": -5.27,
      "ret1y": -7.19,
      "ret2y": -1.3,
      "ret3y": 4.95
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.16,
      "ret1w": -0.82,
      "ret1m": 1.11,
      "ret3m": -4.21,
      "ret6m": -4.34,
      "ret1y": -7.36,
      "ret2y": -3.37,
      "ret3y": 0.01
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0161,
      "ret1w": -0.66,
      "ret1m": 1.08,
      "ret3m": -4.02,
      "ret6m": -5.17,
      "ret1y": -7.0,
      "ret2y": -0.91,
      "ret3y": 5.8
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0457,
      "ret1w": 0.02,
      "ret1m": 0.11,
      "ret3m": 0.18,
      "ret6m": 0.48,
      "ret1y": 0.86,
      "ret2y": 1.76,
      "ret3y": 3.69
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.099,
      "ret1w": -0.52,
      "ret1m": 0.41,
      "ret3m": -5.11,
      "ret6m": -5.81,
      "ret1y": -9.41,
      "ret2y": -7.34,
      "ret3y": -0.59
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2076,
      "ret1w": -0.05,
      "ret1m": 0.65,
      "ret3m": 0.24,
      "ret6m": -0.98,
      "ret1y": -2.18,
      "ret2y": 0.93,
      "ret3y": 10.03
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1203,
      "ret1w": -0.22,
      "ret1m": 0.57,
      "ret3m": -1.01,
      "ret6m": -1.56,
      "ret1y": -2.23,
      "ret2y": 0.77,
      "ret3y": 6.57
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1914,
      "ret1w": -0.22,
      "ret1m": 0.57,
      "ret3m": -0.97,
      "ret6m": -1.46,
      "ret1y": -2.03,
      "ret2y": 1.17,
      "ret3y": 7.46
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.723,
      "ret1w": -12.89,
      "ret1m": -22.8,
      "ret3m": -31.02,
      "ret6m": -25.83,
      "ret1y": -17.28,
      "ret2y": 20.49,
      "ret3y": 71.78
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.8482,
      "ret1w": -3.3,
      "ret1m": -4.03,
      "ret3m": -5.12,
      "ret6m": -4.32,
      "ret1y": -0.72,
      "ret2y": 3.02,
      "ret3y": 23.68
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6805,
      "ret1w": 0.59,
      "ret1m": 2.63,
      "ret3m": -7.33,
      "ret6m": -11.96,
      "ret1y": -20.64,
      "ret2y": -8.91,
      "ret3y": 15.67
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.0742,
      "ret1w": -7.9,
      "ret1m": -13.84,
      "ret3m": -16.69,
      "ret6m": -9.53,
      "ret1y": -3.4,
      "ret2y": -0.27,
      "ret3y": 44.15
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9278,
      "ret1w": 0.19,
      "ret1m": 0.49,
      "ret3m": 1.72,
      "ret6m": -1.22,
      "ret1y": -2.34,
      "ret2y": -4.74,
      "ret3y": -1.39
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.1984,
      "ret1w": -5.41,
      "ret1m": -9.87,
      "ret3m": -19.5,
      "ret6m": -17.24,
      "ret1y": -10.81,
      "ret2y": 12.61,
      "ret3y": 54.52
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.311,
      "ret1w": -3.28,
      "ret1m": -3.38,
      "ret3m": -4.98,
      "ret6m": -7.03,
      "ret1y": -4.18,
      "ret2y": -2.18,
      "ret3y": 12.21
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.787,
      "ret1w": -0.63,
      "ret1m": -1.75,
      "ret3m": -18.11,
      "ret6m": -14.64,
      "ret1y": -27.6,
      "ret2y": -30.9,
      "ret3y": -21.38
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.2362,
      "ret1w": -6.27,
      "ret1m": -13.87,
      "ret3m": -23.42,
      "ret6m": -21.89,
      "ret1y": -14.64,
      "ret2y": 27.94,
      "ret3y": 88.76
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4772,
      "ret1w": -1.73,
      "ret1m": -5.56,
      "ret3m": -3.66,
      "ret6m": -0.38,
      "ret1y": -4.34,
      "ret2y": 22.02,
      "ret3y": 41.52
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5547,
      "ret1w": -2.08,
      "ret1m": -3.95,
      "ret3m": -10.36,
      "ret6m": -8.64,
      "ret1y": -2.54,
      "ret2y": 9.59,
      "ret3y": 36.33
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1815,
      "ret1w": -0.91,
      "ret1m": -2.94,
      "ret3m": -8.95,
      "ret6m": -10.0,
      "ret1y": -7.16,
      "ret2y": 0.22,
      "ret3y": 19.44
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.296,
      "ret1w": -1.44,
      "ret1m": 2.37,
      "ret3m": 6.75,
      "ret6m": -2.63,
      "ret1y": -1.89,
      "ret2y": 5.45,
      "ret3y": -6.74
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.949,
      "ret1w": 1.09,
      "ret1m": 2.04,
      "ret3m": -1.52,
      "ret6m": -4.46,
      "ret1y": -13.03,
      "ret2y": -3.32,
      "ret3y": 33.57
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.1425,
      "ret1w": -5.96,
      "ret1m": -10.53,
      "ret3m": -19.82,
      "ret6m": -18.98,
      "ret1y": -11.18,
      "ret2y": 6.42,
      "ret3y": 37.1
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0183,
      "ret1w": 0.05,
      "ret1m": 0.27,
      "ret3m": 0.5,
      "ret6m": 0.86,
      "ret1y": 1.49,
      "ret2y": 2.61,
      "ret3y": 4.07
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0175,
      "ret1w": 0.05,
      "ret1m": 0.27,
      "ret3m": 0.51,
      "ret6m": 0.89,
      "ret1y": 1.51,
      "ret2y": 2.67,
      "ret3y": 4.23
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.218,
      "ret1w": -1.85,
      "ret1m": 2.27,
      "ret3m": -9.24,
      "ret6m": -16.23,
      "ret1y": -20.86,
      "ret2y": -16.46,
      "ret3y": -2.25
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.275,
      "ret1w": -2.61,
      "ret1m": 1.56,
      "ret3m": -14.09,
      "ret6m": -20.84,
      "ret1y": -25.19,
      "ret2y": -16.73,
      "ret3y": 4.98
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.455,
      "ret1w": -1.81,
      "ret1m": 0.41,
      "ret3m": -7.06,
      "ret6m": -13.47,
      "ret1y": -22.45,
      "ret2y": -4.3,
      "ret3y": 30.73
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.844,
      "ret1w": -2.12,
      "ret1m": 0.63,
      "ret3m": -10.51,
      "ret6m": -13.8,
      "ret1y": -15.97,
      "ret2y": -8.08,
      "ret3y": 7.04
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8981,
      "ret1w": -2.12,
      "ret1m": 0.64,
      "ret3m": -10.48,
      "ret6m": -13.72,
      "ret1y": -15.8,
      "ret2y": -7.72,
      "ret3y": 7.9
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7159,
      "ret1w": -2.05,
      "ret1m": 4.94,
      "ret3m": -10.8,
      "ret6m": -15.08,
      "ret1y": -21.72,
      "ret2y": -9.16,
      "ret3y": 8.77
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5979,
      "ret1w": -1.36,
      "ret1m": 1.63,
      "ret3m": -6.46,
      "ret6m": -11.85,
      "ret1y": -15.11,
      "ret2y": -11.61,
      "ret3y": 3.6
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4726,
      "ret1w": -1.61,
      "ret1m": 4.69,
      "ret3m": -4.51,
      "ret6m": -7.44,
      "ret1y": -13.82,
      "ret2y": -2.0,
      "ret3y": 20.29
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5054,
      "ret1w": -3.14,
      "ret1m": 1.01,
      "ret3m": -17.53,
      "ret6m": -25.73,
      "ret1y": -27.48,
      "ret2y": -18.64,
      "ret3y": 6.91
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0222,
      "ret1w": -0.9,
      "ret1m": 0.89,
      "ret3m": -1.79,
      "ret6m": -6.33,
      "ret1y": -9.52,
      "ret2y": -9.03,
      "ret3y": 5.72
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.506,
      "ret1w": -0.01,
      "ret1m": 1.67,
      "ret3m": 2.98,
      "ret6m": -1.12,
      "ret1y": 1.79,
      "ret2y": 8.77,
      "ret3y": 31.48
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.1126,
      "ret1w": -5.85,
      "ret1m": -8.67,
      "ret3m": -11.77,
      "ret6m": -9.86,
      "ret1y": -4.57,
      "ret2y": -1.7,
      "ret3y": 20.9
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2296,
      "ret1w": -2.59,
      "ret1m": 1.0,
      "ret3m": -13.47,
      "ret6m": -21.12,
      "ret1y": -25.24,
      "ret2y": -17.03,
      "ret3y": 3.32
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9762,
      "ret1w": 4.12,
      "ret1m": -1.97,
      "ret3m": -13.63,
      "ret6m": -14.74,
      "ret1y": -20.42,
      "ret2y": -11.5,
      "ret3y": 10.66
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9797,
      "ret1w": 4.12,
      "ret1m": -1.95,
      "ret3m": -13.48,
      "ret6m": -14.57,
      "ret1y": -20.25,
      "ret2y": -11.4,
      "ret3y": 10.41
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2454,
      "ret1w": 1.28,
      "ret1m": 2.74,
      "ret3m": -7.93,
      "ret6m": -10.75,
      "ret1y": -18.3,
      "ret2y": -9.75,
      "ret3y": 7.73
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2748,
      "ret1w": 1.29,
      "ret1m": 2.75,
      "ret3m": -7.9,
      "ret6m": -10.66,
      "ret1y": -18.12,
      "ret2y": -9.38,
      "ret3y": 8.6
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7137,
      "ret1w": 0.82,
      "ret1m": -0.2,
      "ret3m": -10.8,
      "ret6m": -13.89,
      "ret1y": -19.87,
      "ret2y": -9.18,
      "ret3y": 17.35
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1608,
      "ret1w": 0.0,
      "ret1m": 0.51,
      "ret3m": -0.03,
      "ret6m": -0.83,
      "ret1y": -0.76,
      "ret2y": 1.04,
      "ret3y": 5.49
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1812,
      "ret1w": 0.0,
      "ret1m": 0.51,
      "ret3m": -0.01,
      "ret6m": -0.76,
      "ret1y": -0.61,
      "ret2y": 1.35,
      "ret3y": 6.12
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0886,
      "ret1w": 0.03,
      "ret1m": 0.09,
      "ret3m": 0.21,
      "ret6m": 0.49,
      "ret1y": 0.88,
      "ret2y": 1.94,
      "ret3y": 3.64
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4129,
      "ret1w": 0.04,
      "ret1m": 0.16,
      "ret3m": 0.2,
      "ret6m": 0.13,
      "ret1y": 0.23,
      "ret2y": 0.65,
      "ret3y": 5.11
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4663,
      "ret1w": 0.04,
      "ret1m": 0.16,
      "ret3m": 0.25,
      "ret6m": 0.23,
      "ret1y": 0.43,
      "ret2y": 1.05,
      "ret3y": 5.96
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8675,
      "ret1w": -1.7,
      "ret1m": 0.96,
      "ret3m": -9.47,
      "ret6m": -12.96,
      "ret1y": -4.53,
      "ret2y": 6.24,
      "ret3y": 31.61
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0179,
      "ret1w": -2.14,
      "ret1m": 1.3,
      "ret3m": -12.93,
      "ret6m": -19.42,
      "ret1y": -18.48,
      "ret2y": -11.8,
      "ret3y": 10.19
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 4.0435
      },
      {
        "date": "2026-11-06",
        "nav": 3.9103
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.8472
      },
      {
        "date": "2026-11-06",
        "nav": 2.7114
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 3.2882
      },
      {
        "date": "2026-11-06",
        "nav": 3.105
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.7718
      },
      {
        "date": "2026-11-06",
        "nav": 0.7752
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.139
      },
      {
        "date": "2026-11-06",
        "nav": 2.1093
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.7511
      },
      {
        "date": "2026-11-06",
        "nav": 2.7049
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 5.5333
      },
      {
        "date": "2026-11-06",
        "nav": 5.4671
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.715
      },
      {
        "date": "2026-11-06",
        "nav": 1.671
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.1628
      },
      {
        "date": "2026-11-06",
        "nav": 1.1281
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.631
      },
      {
        "date": "2026-11-06",
        "nav": 2.557
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.187
      },
      {
        "date": "2026-11-06",
        "nav": 1.175
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.325
      },
      {
        "date": "2026-11-06",
        "nav": 2.284
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.2377
      },
      {
        "date": "2026-11-06",
        "nav": 1.2109
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.9582
      },
      {
        "date": "2026-11-06",
        "nav": 1.9555
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.4458
      },
      {
        "date": "2026-11-06",
        "nav": 1.4145
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.4869
      },
      {
        "date": "2026-11-06",
        "nav": 1.4038
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.6223
      },
      {
        "date": "2026-11-06",
        "nav": 2.5959
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.971
      },
      {
        "date": "2026-11-06",
        "nav": 0.947
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.4182
      },
      {
        "date": "2026-11-06",
        "nav": 2.4227
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.2116
      },
      {
        "date": "2026-11-06",
        "nav": 1.1936
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.9969
      },
      {
        "date": "2026-11-06",
        "nav": 0.965
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.0612
      },
      {
        "date": "2026-11-06",
        "nav": 1.0272
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.0533
      },
      {
        "date": "2026-11-06",
        "nav": 1.05
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.0283
      },
      {
        "date": "2026-11-06",
        "nav": 1.0252
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.7248
      },
      {
        "date": "2026-11-06",
        "nav": 0.7201
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.7437
      },
      {
        "date": "2026-11-06",
        "nav": 0.739
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.0271
      },
      {
        "date": "2026-11-06",
        "nav": 1.9338
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.4164
      },
      {
        "date": "2026-11-06",
        "nav": 2.3767
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.7389
      },
      {
        "date": "2026-11-06",
        "nav": 0.7255
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 4.0838
      },
      {
        "date": "2026-11-06",
        "nav": 3.994
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.4616
      },
      {
        "date": "2026-11-06",
        "nav": 0.4562
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.4708
      },
      {
        "date": "2026-11-06",
        "nav": 0.4653
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.2571
      },
      {
        "date": "2026-11-06",
        "nav": 1.2567
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.085
      },
      {
        "date": "2026-11-06",
        "nav": 1.0772
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.1734
      },
      {
        "date": "2026-11-06",
        "nav": 1.1638
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.7493
      },
      {
        "date": "2026-11-06",
        "nav": 2.6925
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 2.179
      },
      {
        "date": "2026-11-06",
        "nav": 2.084
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 1.5467
      },
      {
        "date": "2026-11-06",
        "nav": 1.564
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 0.5694
      },
      {
        "date": "2026-11-06",
        "nav": 0.5544
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-05",
        "nav": 9.006
      },
      {
        "date": "2026-11-06",
        "nav": 8.55
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 3.9103,
      "price": 3.9103,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 2.7114,
      "price": 2.7114,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.36,
      "nav": 3.105,
      "price": 3.105,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.29,
      "nav": 0.7752,
      "price": 0.7752,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.53,
      "nav": 2.1093,
      "price": 2.1093,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.35,
      "nav": 2.7049,
      "price": 2.7049,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.19,
      "nav": 5.4671,
      "price": 5.4671,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.22,
      "nav": 1.671,
      "price": 1.671,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.15,
      "nav": 1.1281,
      "price": 1.1281,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.557,
      "price": 2.557,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.22,
      "nav": 1.175,
      "price": 1.175,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 2.284,
      "price": 2.284,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.6,
      "nav": 1.2109,
      "price": 1.2109,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.17,
      "nav": 1.9555,
      "price": 1.9555,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.4145,
      "price": 1.4145,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.4038,
      "price": 1.4038,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.5959,
      "price": 2.5959,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.32,
      "nav": 0.947,
      "price": 0.947,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.4227,
      "price": 2.4227,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.18,
      "nav": 1.1936,
      "price": 1.1936,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.17,
      "sharpe": -2.18,
      "calmar": -2.18
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 6.84,
      "sharpe": -4.57,
      "calmar": -4.57
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 10.74,
      "sharpe": -3.09,
      "calmar": -3.09
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 8.7,
      "sharpe": 0.28,
      "calmar": 0.28
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 15.99,
      "sharpe": -1.65,
      "calmar": -1.65
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 10.5,
      "sharpe": -1.74,
      "calmar": -1.74
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.83,
      "sharpe": -0.48,
      "calmar": -0.48
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.46,
      "sharpe": -2.2,
      "calmar": -2.2
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 4.56,
      "sharpe": -2.75,
      "calmar": -2.75
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.56,
      "sharpe": -2.79,
      "calmar": -2.79
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 6.66,
      "sharpe": 0.17,
      "calmar": 0.17
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.95,
      "sharpe": -1.71,
      "calmar": -1.71
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 18.12,
      "sharpe": -3.81,
      "calmar": -3.81
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 5.19,
      "sharpe": 0.81,
      "calmar": 0.81
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.8,
      "sharpe": -2.47,
      "calmar": -2.47
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.46,
      "sharpe": -4.87,
      "calmar": -4.87
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.73,
      "sharpe": -0.86,
      "calmar": -0.86
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.6,
      "sharpe": -0.5,
      "calmar": -0.5
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.04,
      "sharpe": -0.18,
      "calmar": -0.18
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 5.32,
      "sharpe": -1.15,
      "calmar": -1.15
    }
  ],
  "news": [
    {
      "title": "“十五五”规划纲要明确，以新需求引领新供给，以新供给创造新需求，促进消费和投资、供给和需求良性互动，从而增强国内大循环内生动力和可靠性。近日，国家发展改革委联合交通运输部、商务部、文化和旅游部、市场监管总局等部门印发《关于加强消费基础设施建设促进消费投资良性互动的指导意见》（以下简称《指导意见》），从完善城乡商业设施、提升服务消费设施、优化出行消费设施、健全流通设施网络、推进新型消费设施建设五个方面部署20项重点任务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:52",
      "impact": "neutral"
    },
    {
      "title": "“出海”不仅是某个目的地，而且是一种正在生成的能力。中国企业全球化不是一个已完成的状态，而是一个“进行时”：在动态变化与复杂环境中不断试错、重构、共生，甚至“共构”。11月7日下午，在2026进博会上海会议活动之“重构与共生：中国企业全球化发展大会”上，人文财经观察家秦朔结合一年来的海内外调研，给正在“出海”的中国企业画了一张“新地图”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:37",
      "impact": "neutral"
    },
    {
      "title": "今天（7日），中国企业改革与发展研究会发布了《全球能源转型报告（2026）》，数据显示，我国已构建起全球最大、发展最快的可再生能源体系。报告指出，目前，化石能源活动仍是全球碳排放的最大来源。2025年，全球与能源相关的二氧化碳排放总量同比增长0.4%，达384亿吨，是2021年以来最低增幅。其中，中国碳排放量下降0.5%，美国碳排放量增长2.4%，成为全球碳排放增长的最大来源。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:20",
      "impact": "neutral"
    },
    {
      "title": "中新社上海11月7日电题：多国风物初登进博借开放中国链接世界作者蓝伊旎“这是我们国家的‘丛林茶’，您尝尝。”正在上海举行的第九届中国国际进口博览会上，首次亮相的加蓬国家馆带来了不少本土特色食品和饮品，每介绍其中一款，加蓬姑娘曼多便热情邀约来客品尝。地处非洲中部的加蓬素有“绿金之国”美誉，热带雨林气候孕育了丰富多样的植物资源。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:08",
      "impact": "neutral"
    },
    {
      "title": "虹桥国际中央商务区作为上海最年轻的中央商务区、进博会永久举办地，切切实实从进博会承接到巨大的溢出效应。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:03",
      "impact": "neutral"
    },
    {
      "title": "从工业科技企业推出面向中国市场的系统化解决方案，到国际消费品牌将上海城市文化融入产品设计，再到进口水果企业针对消费者偏好推出差异化新品……在第九届中国国际进口博览会（下称“进博会”）上，不同领域企业的展示，折射出中国市场需求的变化。对跨国企业而言，中国市场的价值已不只是消费规模和制造能力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:35",
      "impact": "neutral"
    },
    {
      "title": "AI正在全面深入人们的生活和生产。11月2日，阿里最年轻的副总裁陈宇森做客李佳琦直播间，二人同台直播约30分钟，售出近10万份千问办公个人会员月卡，累计约2万亿Token（词元）。“双11”卖Token，释放了一个明确的信号：“Token经济”正直抵消费层，AI（人工智能）应用已渗透到消费者的日常生活。产业端同样在加速。“影视、短剧、空间设计等行业是当下群核科技更现实的增长面。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:32",
      "impact": "neutral"
    },
    {
      "title": "新华社上海11月7日电题：开放、创新、发展、共享——虹桥论坛聚焦全球经济热点议题新华社记者谢希瑶、桑彤连日来，与第九届中国国际进口博览会同期举行的虹桥国际经济论坛氛围热烈，紧扣“稳定合作共建开放型世界经济”主题，设置开放合作、开放创新、开放发展、开放共享等板块，向动荡变革的世界展示开放确定性，持续释放中国高水平对外开放的强烈信号。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:32",
      "impact": "neutral"
    },
    {
      "title": "进博会农食产品展区的空气中弥漫着一股浓郁香甜的发酵果实气味。鑫荣懋的展台上陈列的榴莲果肉呈现出不常见的乳白色，而非消费者熟悉的金黄或姜黄。这款来自马来西亚槟城的白玉珍珠榴莲，是鑫荣懋今年为进博会带来的全球首发产品。水果大公司愿意把稀缺品种引入中国市场，原因是中国消费者不断增长的“胃口”。据海关总署披露的相关进出口数据，九年间，榴莲从“奢侈品”变成了中国进口水果的第一大单品。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:23",
      "impact": "neutral"
    },
    {
      "title": "11月7日，上海发布《上海市“人工智能+交通运输”创新应用行动方案》，明确上海交通AI规模化落地的任务和实施路径，将筑牢三大技术底座，打造两大创新平台。此次发布活动属于第九届中国国际进口博览会配套活动，于国家会展中心举行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:21",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 43,
    "label": "中性",
    "upDownRatio": "1,159/2,420",
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
