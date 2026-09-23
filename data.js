// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-23 14:53:00
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-23 14:53 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-23",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3936.52,
      "change": -15.61,
      "changePct": "-0.39%",
      "high": 3951.52,
      "low": 3934.46,
      "volume": 466913933.0,
      "amount": 834132860000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13636.07,
      "change": -87.67,
      "changePct": "-0.64%",
      "high": 13742.55,
      "low": 13617.05,
      "volume": 585238919.0,
      "amount": 930843550000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3379.61,
      "change": -20.32,
      "changePct": "-0.60%",
      "high": 3412.53,
      "low": 3372.95,
      "volume": 159522487.0,
      "amount": 439776990000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1660.85,
      "change": -4.19,
      "changePct": "-0.25%",
      "high": 1676.85,
      "low": 1656.98,
      "volume": 6154538.0,
      "amount": 75175420000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4517.28,
      "change": -27.31,
      "changePct": "-0.60%",
      "high": 4547.69,
      "low": 4513.45,
      "volume": 157143829.0,
      "amount": 378289420000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7791.82,
      "change": -37.12,
      "changePct": "-0.47%",
      "high": 7839.94,
      "low": 7781.31,
      "volume": 129415394.0,
      "amount": 273595880000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.93万亿",
      "label": "成交额",
      "rawAmount": 2931814120000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,606/1,696",
      "label": "涨/跌家数",
      "rawUp": 2606,
      "rawDown": 1696,
      "change": ""
    },
    "northFlow": {
      "val": "+0.00亿",
      "label": "北向资金",
      "northNet": 0,
      "shNet": 0,
      "szNet": 0,
      "southNet": 0,
      "available": false
    }
  },
  "capitalFlow": {
    "totalInflow": 2.48,
    "totalOutflow": 0,
    "netFlow": 2.48,
    "netFlowTrend": [
      0.5,
      0.99,
      1.49,
      1.98,
      2.48
    ],
    "northBound": {
      "net": 0,
      "shanghai": 0,
      "shenzhen": 0,
      "available": false
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
      "name": "创新药",
      "inflow": 1.54,
      "pct": 0.35
    },
    {
      "name": "医疗",
      "inflow": 1.23,
      "pct": 0.29
    },
    {
      "name": "食品",
      "inflow": 0.05,
      "pct": 0.2
    },
    {
      "name": "半导体",
      "inflow": 0.0,
      "pct": 0.0
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
      "name": "家电",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.3
    },
    {
      "name": "电子",
      "inflow": -0.13,
      "pct": -0.23
    },
    {
      "name": "钢铁",
      "inflow": -0.2,
      "pct": -0.44
    },
    {
      "name": "新能源",
      "inflow": -0.27,
      "pct": -0.81
    },
    {
      "name": "光伏",
      "inflow": -0.29,
      "pct": -0.37
    },
    {
      "name": "新能源车",
      "inflow": -0.32,
      "pct": -0.66
    },
    {
      "name": "人工智能",
      "inflow": -0.34,
      "pct": -0.67
    },
    {
      "name": "地产",
      "inflow": -0.99,
      "pct": -0.23
    },
    {
      "name": "芯片",
      "inflow": -1.45,
      "pct": -0.51
    },
    {
      "name": "券商",
      "inflow": -1.63,
      "pct": -0.2
    },
    {
      "name": "5G",
      "inflow": -1.74,
      "pct": -0.83
    },
    {
      "name": "银行",
      "inflow": -1.97,
      "pct": -0.72
    },
    {
      "name": "通信",
      "inflow": -6.48,
      "pct": -0.85
    }
  ],
  "sectors": [
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.87,
      "changePct": 0.35,
      "change": 0.003,
      "turnover": 5.12
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.349,
      "changePct": 0.29,
      "change": 0.001,
      "turnover": 4.09
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.493,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 0.18
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.051,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 7.58
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.384,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.55
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.415,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 4.3
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.418,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.26
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.51,
      "changePct": -0.2,
      "change": -0.001,
      "turnover": 5.42
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.285,
      "changePct": -0.23,
      "change": -0.003,
      "turnover": 3.3
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.852,
      "changePct": -0.23,
      "change": -0.002,
      "turnover": 0.42
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.006,
      "changePct": -0.3,
      "change": -0.003,
      "turnover": 0.05
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.814,
      "changePct": -0.37,
      "change": -0.003,
      "turnover": 0.96
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.133,
      "changePct": -0.44,
      "change": -0.005,
      "turnover": 0.65
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.161,
      "changePct": -0.51,
      "change": -0.006,
      "turnover": 4.82
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.504,
      "changePct": -0.66,
      "change": -0.01,
      "turnover": 1.05
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.031,
      "changePct": -0.67,
      "change": -0.007,
      "turnover": 1.13
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.833,
      "changePct": -0.72,
      "change": -0.006,
      "turnover": 6.56
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.315,
      "changePct": -0.81,
      "change": -0.019,
      "turnover": 0.89
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.07,
      "changePct": -0.83,
      "change": -0.009,
      "turnover": 5.79
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.701,
      "changePct": -0.85,
      "change": -0.006,
      "turnover": 21.61
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.717,
      "changePct": -0.92,
      "change": -0.016,
      "turnover": 4.44
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.142,
      "changePct": -1.13,
      "change": -0.013,
      "turnover": 0.15
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.727,
      "changePct": -1.22,
      "change": -0.009,
      "turnover": 0.52
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.15,
      "changePct": -1.54,
      "change": -0.018,
      "turnover": 1.64
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.654,
      "changePct": -1.78,
      "change": -0.03,
      "turnover": 1.94
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.262,
      "changePct": -2.32,
      "change": -0.03,
      "turnover": 5.13
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.062,
      "changePct": -2.48,
      "change": -0.027,
      "turnover": 1.31
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.813,
      "changePct": -2.75,
      "change": -0.023,
      "turnover": 3.28
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.315,
      "changePct": -0.81,
      "amount": 0.89,
      "netFlow": -0.22
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.384,
      "changePct": 0.0,
      "amount": 2.55,
      "netFlow": -0.64
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.51,
      "changePct": -0.2,
      "amount": 5.42,
      "netFlow": -1.35
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.793,
      "changePct": -0.58,
      "amount": 6.41,
      "netFlow": -1.6
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.051,
      "changePct": 0.0,
      "amount": 7.58,
      "netFlow": -1.89
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.0,
      "changePct": -0.5,
      "amount": 15.31,
      "netFlow": -3.83
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.455,
      "changePct": -0.65,
      "amount": 17.68,
      "netFlow": -4.42
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.818,
      "changePct": -0.41,
      "amount": 26.08,
      "netFlow": -6.52
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.59,
      "changePct": -0.5,
      "amount": 29.29,
      "netFlow": -7.32
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.755,
      "changePct": -0.17,
      "amount": 43.62,
      "netFlow": -10.9
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.59,
      "changePct": -0.5,
      "amount": 29.29,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.0,
      "changePct": -0.5,
      "amount": 15.31,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.818,
      "changePct": -0.41,
      "amount": 26.08,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.793,
      "changePct": -0.58,
      "amount": 6.41,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.455,
      "changePct": -0.65,
      "amount": 17.68,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "创新药",
      "turnover": 5.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 7.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 4.3,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 5.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 3.3,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.42,
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
      "name": "光伏",
      "turnover": 0.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 4.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 6.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.89,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 5.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 21.61,
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
      "nav": 4.7821,
      "ret1w": 0.79,
      "ret1m": 4.19,
      "ret3m": 7.09,
      "ret6m": -4.38,
      "ret1y": 22.96,
      "ret2y": 22.36,
      "ret3y": 181.07
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.211,
      "ret1w": -0.26,
      "ret1m": 1.19,
      "ret3m": -3.28,
      "ret6m": -15.82,
      "ret1y": 12.31,
      "ret2y": -0.35,
      "ret3y": 72.75
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 6.1437,
      "ret1w": 0.09,
      "ret1m": 2.93,
      "ret3m": 5.3,
      "ret6m": -10.22,
      "ret1y": 57.14,
      "ret2y": 83.86,
      "ret3y": 341.39
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6944,
      "ret1w": -0.44,
      "ret1m": 0.46,
      "ret3m": -0.44,
      "ret6m": 7.21,
      "ret1y": -2.98,
      "ret2y": -15.76,
      "ret3y": 4.48
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0093,
      "ret1w": -0.46,
      "ret1m": 2.75,
      "ret3m": -9.32,
      "ret6m": -14.84,
      "ret1y": -31.74,
      "ret2y": -25.89,
      "ret3y": 18.93
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.71,
      "ret1w": -0.32,
      "ret1m": 1.03,
      "ret3m": -1.19,
      "ret6m": -4.17,
      "ret1y": -18.33,
      "ret2y": -17.55,
      "ret3y": 34.02
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3426,
      "ret1w": -0.71,
      "ret1m": -0.21,
      "ret3m": -2.58,
      "ret6m": 3.57,
      "ret1y": -1.91,
      "ret2y": 8.21,
      "ret3y": 57.62
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.999,
      "ret1w": 0.86,
      "ret1m": 4.5,
      "ret3m": 5.04,
      "ret6m": -8.51,
      "ret1y": 11.8,
      "ret2y": 9.41,
      "ret3y": 88.05
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.363,
      "ret1w": -0.14,
      "ret1m": 2.65,
      "ret3m": 0.15,
      "ret6m": -7.55,
      "ret1y": 9.75,
      "ret2y": 9.36,
      "ret3y": 50.45
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.486,
      "ret1w": 0.35,
      "ret1m": 2.23,
      "ret3m": -0.14,
      "ret6m": -12.87,
      "ret1y": 40.62,
      "ret2y": 58.6,
      "ret3y": 318.99
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.099,
      "ret1w": -0.45,
      "ret1m": 1.38,
      "ret3m": -0.09,
      "ret6m": 8.92,
      "ret1y": 0.09,
      "ret2y": -14.61,
      "ret3y": 7.85
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.464,
      "ret1w": 0.12,
      "ret1m": 6.76,
      "ret3m": 1.78,
      "ret6m": 7.6,
      "ret1y": -1.04,
      "ret2y": -6.63,
      "ret3y": 45.8
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7746,
      "ret1w": -0.25,
      "ret1m": 1.87,
      "ret3m": -1.44,
      "ret6m": -28.98,
      "ret1y": -44.92,
      "ret2y": -41.3,
      "ret3y": 34.75
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8986,
      "ret1w": -0.43,
      "ret1m": 0.6,
      "ret3m": -0.33,
      "ret6m": 4.11,
      "ret1y": 7.75,
      "ret2y": -5.46,
      "ret3y": 7.89
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.7017,
      "ret1w": -0.15,
      "ret1m": 2.57,
      "ret3m": 2.76,
      "ret6m": -6.63,
      "ret1y": 9.4,
      "ret2y": 13.21,
      "ret3y": 84.05
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.471,
      "ret1w": 0.43,
      "ret1m": 3.23,
      "ret3m": -0.05,
      "ret6m": -26.19,
      "ret1y": 32.14,
      "ret2y": 78.35,
      "ret3y": 263.28
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.6043,
      "ret1w": 0.02,
      "ret1m": 3.19,
      "ret3m": 2.52,
      "ret6m": 5.96,
      "ret1y": 1.26,
      "ret2y": -1.88,
      "ret3y": 27.82
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.06,
      "ret1w": 0.19,
      "ret1m": 6.21,
      "ret3m": -1.76,
      "ret6m": 18.7,
      "ret1y": 17.0,
      "ret2y": -9.32,
      "ret3y": 17.65
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2757,
      "ret1w": -0.19,
      "ret1m": -0.06,
      "ret3m": -2.28,
      "ret6m": 3.08,
      "ret1y": -4.55,
      "ret2y": 4.05,
      "ret3y": 15.53
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3457,
      "ret1w": -0.24,
      "ret1m": 1.55,
      "ret3m": 0.7,
      "ret6m": 3.13,
      "ret1y": 14.14,
      "ret2y": 20.93,
      "ret3y": 88.95
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2617,
      "ret1w": -0.13,
      "ret1m": 0.79,
      "ret3m": -2.56,
      "ret6m": -12.34,
      "ret1y": 4.68,
      "ret2y": 10.59,
      "ret3y": 55.84
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3424,
      "ret1w": -0.13,
      "ret1m": 0.8,
      "ret3m": -2.53,
      "ret6m": -12.26,
      "ret1y": 4.88,
      "ret2y": 11.02,
      "ret3y": 57.1
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0783,
      "ret1w": -0.16,
      "ret1m": -0.03,
      "ret3m": -1.62,
      "ret6m": -2.87,
      "ret1y": 0.93,
      "ret2y": 1.17,
      "ret3y": 8.06
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.052,
      "ret1w": -0.15,
      "ret1m": -0.02,
      "ret3m": -1.57,
      "ret6m": -2.73,
      "ret1y": 1.23,
      "ret2y": 1.78,
      "ret3y": 9.37
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.709,
      "ret1w": 0.04,
      "ret1m": 1.36,
      "ret3m": -1.66,
      "ret6m": -1.81,
      "ret1y": -5.67,
      "ret2y": -10.46,
      "ret3y": 10.56
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7272,
      "ret1w": 0.06,
      "ret1m": 1.37,
      "ret3m": -1.62,
      "ret6m": -1.68,
      "ret1y": -5.42,
      "ret2y": -10.0,
      "ret3y": 11.67
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8917,
      "ret1w": -0.49,
      "ret1m": 0.07,
      "ret3m": 1.19,
      "ret6m": -16.06,
      "ret1y": 43.01,
      "ret2y": 53.2,
      "ret3y": 179.2
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5366,
      "ret1w": 0.06,
      "ret1m": 4.49,
      "ret3m": -0.93,
      "ret6m": -2.87,
      "ret1y": 12.8,
      "ret2y": 15.39,
      "ret3y": 97.48
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7303,
      "ret1w": -0.29,
      "ret1m": 3.49,
      "ret3m": -1.58,
      "ret6m": -10.17,
      "ret1y": -10.06,
      "ret2y": -10.04,
      "ret3y": 18.06
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.3288,
      "ret1w": -0.06,
      "ret1m": 7.15,
      "ret3m": 2.02,
      "ret6m": -8.28,
      "ret1y": 33.95,
      "ret2y": 36.09,
      "ret3y": 168.99
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5111,
      "ret1w": -0.35,
      "ret1m": 0.87,
      "ret3m": 0.06,
      "ret6m": -16.56,
      "ret1y": 5.53,
      "ret2y": 9.91,
      "ret3y": 56.78
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.521,
      "ret1w": -0.36,
      "ret1m": 0.87,
      "ret3m": 0.1,
      "ret6m": -16.47,
      "ret1y": 5.74,
      "ret2y": 10.36,
      "ret3y": 58.02
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.267,
      "ret1w": -0.22,
      "ret1m": -0.42,
      "ret3m": -0.7,
      "ret6m": 0.83,
      "ret1y": -1.98,
      "ret2y": -1.49,
      "ret3y": 0.21
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1154,
      "ret1w": -0.4,
      "ret1m": 0.9,
      "ret3m": -1.36,
      "ret6m": 1.1,
      "ret1y": 0.63,
      "ret2y": -1.55,
      "ret3y": 20.04
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3798,
      "ret1w": -1.36,
      "ret1m": 0.52,
      "ret3m": -5.02,
      "ret6m": -16.49,
      "ret1y": 3.36,
      "ret2y": -20.07,
      "ret3y": 16.25
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0133,
      "ret1w": -0.66,
      "ret1m": 1.06,
      "ret3m": 0.43,
      "ret6m": 1.32,
      "ret1y": -3.76,
      "ret2y": 9.38,
      "ret3y": 56.68
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.417,
      "ret1w": -0.47,
      "ret1m": 0.92,
      "ret3m": 1.64,
      "ret6m": -28.05,
      "ret1y": 35.06,
      "ret2y": 54.13,
      "ret3y": 226.99
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4906,
      "ret1w": -0.37,
      "ret1m": -0.96,
      "ret3m": 1.11,
      "ret6m": 4.06,
      "ret1y": 2.35,
      "ret2y": 0.36,
      "ret3y": 14.46
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.612,
      "ret1w": -0.67,
      "ret1m": 0.2,
      "ret3m": -5.25,
      "ret6m": -25.48,
      "ret1y": 0.62,
      "ret2y": -0.75,
      "ret3y": 51.97
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.068,
      "ret1w": -0.25,
      "ret1m": -0.69,
      "ret3m": 2.25,
      "ret6m": -16.62,
      "ret1y": 75.39,
      "ret2y": 103.1,
      "ret3y": 408.54
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0673,
      "ret1w": -0.07,
      "ret1m": 0.14,
      "ret3m": -0.09,
      "ret6m": -1.59,
      "ret1y": 0.8,
      "ret2y": 1.75,
      "ret3y": 5.0
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1161,
      "ret1w": -0.06,
      "ret1m": 0.15,
      "ret3m": -0.06,
      "ret6m": -1.52,
      "ret1y": 0.93,
      "ret2y": 2.03,
      "ret3y": 5.71
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0659,
      "ret1w": 0.0,
      "ret1m": 0.08,
      "ret3m": 0.18,
      "ret6m": 0.41,
      "ret1y": 0.78,
      "ret2y": 1.62,
      "ret3y": 2.71
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0999,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.36,
      "ret1y": 0.77,
      "ret2y": 1.55,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1094,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.15,
      "ret6m": 0.41,
      "ret1y": 0.86,
      "ret2y": 1.75,
      "ret3y": 4.29
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0768,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.08,
      "ret6m": 0.36,
      "ret1y": 0.73,
      "ret2y": 1.51,
      "ret3y": 2.66
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0914,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.1,
      "ret6m": 0.43,
      "ret1y": 0.88,
      "ret2y": 1.82,
      "ret3y": 3.31
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0703,
      "ret1w": -0.18,
      "ret1m": 0.77,
      "ret3m": -0.03,
      "ret6m": -3.39,
      "ret1y": 4.52,
      "ret2y": 6.19,
      "ret3y": 13.16
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2319,
      "ret1w": -0.06,
      "ret1m": 1.14,
      "ret3m": 0.78,
      "ret6m": -3.38,
      "ret1y": 4.46,
      "ret2y": 4.24,
      "ret3y": 8.34
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0773,
      "ret1w": -0.18,
      "ret1m": 0.78,
      "ret3m": 0.01,
      "ret6m": -3.3,
      "ret1y": 4.73,
      "ret2y": 6.61,
      "ret3y": 14.08
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0472,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.18,
      "ret6m": 0.42,
      "ret1y": 0.88,
      "ret2y": 1.81,
      "ret3y": 3.61
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1779,
      "ret1w": -0.02,
      "ret1m": 0.46,
      "ret3m": 0.32,
      "ret6m": -2.01,
      "ret1y": -1.19,
      "ret2y": 0.37,
      "ret3y": 11.3
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2071,
      "ret1w": -0.17,
      "ret1m": -0.12,
      "ret3m": -0.79,
      "ret6m": -1.53,
      "ret1y": 0.08,
      "ret2y": 2.02,
      "ret3y": 14.68
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1397,
      "ret1w": -0.04,
      "ret1m": 0.26,
      "ret3m": -0.14,
      "ret6m": -2.26,
      "ret1y": 2.51,
      "ret2y": 2.98,
      "ret3y": 10.88
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2114,
      "ret1w": -0.05,
      "ret1m": 0.27,
      "ret3m": -0.11,
      "ret6m": -2.17,
      "ret1y": 2.71,
      "ret2y": 3.4,
      "ret3y": 11.8
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.538,
      "ret1w": 2.05,
      "ret1m": 11.32,
      "ret3m": 6.15,
      "ret6m": -13.79,
      "ret1y": 49.12,
      "ret2y": 89.12,
      "ret3y": 169.14
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0313,
      "ret1w": 0.28,
      "ret1m": 2.63,
      "ret3m": 1.95,
      "ret6m": 3.89,
      "ret1y": 14.74,
      "ret2y": 6.87,
      "ret3y": 37.19
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8326,
      "ret1w": -0.98,
      "ret1m": 2.48,
      "ret3m": -3.39,
      "ret6m": -15.82,
      "ret1y": -7.23,
      "ret2y": -3.99,
      "ret3y": 50.46
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.5259,
      "ret1w": 1.02,
      "ret1m": 7.28,
      "ret3m": 3.72,
      "ret6m": 5.41,
      "ret1y": 35.2,
      "ret2y": 26.23,
      "ret3y": 81.55
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9245,
      "ret1w": -0.09,
      "ret1m": -0.08,
      "ret3m": -1.27,
      "ret6m": -1.92,
      "ret1y": -2.7,
      "ret2y": -5.05,
      "ret3y": -2.55
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7654,
      "ret1w": 1.33,
      "ret1m": 8.47,
      "ret3m": 3.49,
      "ret6m": -11.04,
      "ret1y": 36.46,
      "ret2y": 47.76,
      "ret3y": 107.32
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.588,
      "ret1w": -0.41,
      "ret1m": 1.48,
      "ret3m": -0.41,
      "ret6m": -2.05,
      "ret1y": 9.97,
      "ret2y": 4.61,
      "ret3y": 20.9
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.241,
      "ret1w": -1.04,
      "ret1m": 6.43,
      "ret3m": -2.44,
      "ret6m": 15.87,
      "ret1y": -2.05,
      "ret2y": -21.16,
      "ret3y": 105.8
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.979,
      "ret1w": -0.31,
      "ret1m": 6.88,
      "ret3m": -1.51,
      "ret6m": 3.16,
      "ret1y": -2.78,
      "ret2y": -22.3,
      "ret3y": 50.15
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9783,
      "ret1w": 1.5,
      "ret1m": 7.82,
      "ret3m": 4.06,
      "ret6m": -12.41,
      "ret1y": 42.35,
      "ret2y": 75.51,
      "ret3y": 155.89
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5912,
      "ret1w": 0.38,
      "ret1m": -1.32,
      "ret3m": -3.64,
      "ret6m": 10.29,
      "ret1y": 8.4,
      "ret2y": 31.74,
      "ret3y": 55.77
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7729,
      "ret1w": 0.57,
      "ret1m": 2.97,
      "ret3m": 2.09,
      "ret6m": -0.72,
      "ret1y": 18.37,
      "ret2y": 27.75,
      "ret3y": 62.12
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3257,
      "ret1w": 0.61,
      "ret1m": 3.11,
      "ret3m": -0.91,
      "ret6m": -4.29,
      "ret1y": 9.53,
      "ret2y": 13.32,
      "ret3y": 39.8
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.256,
      "ret1w": -0.08,
      "ret1m": -0.79,
      "ret3m": -5.21,
      "ret6m": -4.34,
      "ret1y": 3.63,
      "ret2y": 1.13,
      "ret3y": -12.21
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.068,
      "ret1w": -0.1,
      "ret1m": 0.88,
      "ret3m": -5.96,
      "ret6m": 2.22,
      "ret1y": -6.85,
      "ret2y": 7.82,
      "ret3y": 48.44
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0127,
      "ret1w": 0.01,
      "ret1m": 0.09,
      "ret3m": 0.19,
      "ret6m": 0.56,
      "ret1y": 1.48,
      "ret2y": 2.33,
      "ret3y": 3.53
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0116,
      "ret1w": 0.0,
      "ret1m": 0.08,
      "ret3m": 0.19,
      "ret6m": 0.53,
      "ret1y": 1.48,
      "ret2y": 2.38,
      "ret3y": 3.68
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.401,
      "ret1w": -0.5,
      "ret1m": 1.37,
      "ret3m": -2.71,
      "ret6m": -10.82,
      "ret1y": 1.6,
      "ret2y": -2.1,
      "ret3y": 39.68
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.801,
      "ret1w": -0.67,
      "ret1m": 1.6,
      "ret3m": -3.21,
      "ret6m": -10.91,
      "ret1y": 5.02,
      "ret2y": 5.74,
      "ret3y": 65.74
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6291,
      "ret1w": -0.83,
      "ret1m": -1.78,
      "ret3m": -5.13,
      "ret6m": -3.7,
      "ret1y": -2.23,
      "ret2y": 22.25,
      "ret3y": 67.95
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1246,
      "ret1w": -0.55,
      "ret1m": 0.86,
      "ret3m": -1.22,
      "ret6m": -5.95,
      "ret1y": 6.58,
      "ret2y": 10.05,
      "ret3y": 46.7
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.186,
      "ret1w": -0.55,
      "ret1m": 0.88,
      "ret3m": -1.18,
      "ret6m": -5.85,
      "ret1y": 6.8,
      "ret2y": 10.5,
      "ret3y": 47.87
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0113,
      "ret1w": -0.44,
      "ret1m": 1.38,
      "ret3m": -0.7,
      "ret6m": -9.76,
      "ret1y": 5.14,
      "ret2y": 8.91,
      "ret3y": 71.86
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7667,
      "ret1w": -0.58,
      "ret1m": 0.78,
      "ret3m": -1.96,
      "ret6m": -7.08,
      "ret1y": 3.15,
      "ret2y": 1.26,
      "ret3y": 42.1
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5727,
      "ret1w": -0.56,
      "ret1m": 0.78,
      "ret3m": -0.64,
      "ret6m": -3.61,
      "ret1y": 0.76,
      "ret2y": 10.53,
      "ret3y": 60.22
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9526,
      "ret1w": -0.57,
      "ret1m": 1.48,
      "ret3m": -3.17,
      "ret6m": -15.67,
      "ret1y": 12.2,
      "ret2y": 8.24,
      "ret3y": 80.46
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1006,
      "ret1w": -0.47,
      "ret1m": 0.13,
      "ret3m": -2.82,
      "ret6m": 2.35,
      "ret1y": 0.03,
      "ret2y": -2.52,
      "ret3y": 29.12
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4902,
      "ret1w": -0.5,
      "ret1m": -0.85,
      "ret3m": -3.04,
      "ret6m": 3.01,
      "ret1y": 5.31,
      "ret2y": 10.22,
      "ret3y": 27.39
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.566,
      "ret1w": 0.71,
      "ret1m": 5.46,
      "ret3m": 4.05,
      "ret6m": 0.29,
      "ret1y": 24.0,
      "ret2y": 15.53,
      "ret3y": 42.32
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7198,
      "ret1w": -0.57,
      "ret1m": 1.24,
      "ret3m": -4.25,
      "ret6m": -12.77,
      "ret1y": 3.97,
      "ret2y": 4.44,
      "ret3y": 60.97
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1976,
      "ret1w": 0.97,
      "ret1m": 3.81,
      "ret3m": -0.13,
      "ret6m": -12.72,
      "ret1y": 7.04,
      "ret2y": 7.49,
      "ret3y": 58.12
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1999,
      "ret1w": 0.97,
      "ret1m": 3.81,
      "ret3m": -0.07,
      "ret6m": -12.6,
      "ret1y": 7.12,
      "ret2y": 7.65,
      "ret3y": 57.57
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4112,
      "ret1w": 0.08,
      "ret1m": 3.51,
      "ret3m": -0.37,
      "ret6m": -13.67,
      "ret1y": -0.23,
      "ret2y": 0.23,
      "ret3y": 44.31
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4438,
      "ret1w": 0.08,
      "ret1m": 3.52,
      "ret3m": -0.34,
      "ret6m": -13.58,
      "ret1y": -0.02,
      "ret2y": 0.63,
      "ret3y": 45.47
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0312,
      "ret1w": -0.17,
      "ret1m": 4.1,
      "ret3m": -0.87,
      "ret6m": -22.0,
      "ret1y": 4.14,
      "ret2y": 6.11,
      "ret3y": 68.91
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.164,
      "ret1w": -0.07,
      "ret1m": 0.12,
      "ret3m": -0.18,
      "ret6m": -0.41,
      "ret1y": 0.6,
      "ret2y": 1.89,
      "ret3y": 7.98
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1841,
      "ret1w": -0.07,
      "ret1m": 0.13,
      "ret3m": -0.15,
      "ret6m": -0.34,
      "ret1y": 0.76,
      "ret2y": 2.2,
      "ret3y": 8.63
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.086,
      "ret1w": -0.01,
      "ret1m": 0.08,
      "ret3m": 0.19,
      "ret6m": 0.47,
      "ret1y": 0.92,
      "ret2y": 1.92,
      "ret3y": 3.29
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4096,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": -0.04,
      "ret6m": 0.11,
      "ret1y": 0.09,
      "ret2y": 0.77,
      "ret3y": 12.37
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4622,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.0,
      "ret6m": 0.21,
      "ret1y": 0.3,
      "ret2y": 1.18,
      "ret3y": 13.28
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1302,
      "ret1w": -0.21,
      "ret1m": -0.08,
      "ret3m": 0.37,
      "ret6m": -2.86,
      "ret1y": 16.06,
      "ret2y": 24.43,
      "ret3y": 69.29
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2226,
      "ret1w": -0.44,
      "ret1m": -0.72,
      "ret3m": -1.72,
      "ret6m": -3.78,
      "ret1y": 11.31,
      "ret2y": 10.05,
      "ret3y": 48.95
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 4.7821,
      "price": 4.7821,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 4.211,
      "price": 4.211,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.15,
      "nav": 6.1437,
      "price": 6.1437,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 0.6944,
      "price": 0.6944,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 2.0093,
      "price": 2.0093,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.71,
      "price": 2.71,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 5.3426,
      "price": 5.3426,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.23,
      "nav": 1.999,
      "price": 1.999,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 1.363,
      "price": 1.363,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 3.486,
      "price": 3.486,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.099,
      "price": 1.099,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.34,
      "nav": 2.464,
      "price": 2.464,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 1.7746,
      "price": 1.7746,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.8986,
      "price": 1.8986,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 1.7017,
      "price": 1.7017,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 2.471,
      "price": 2.471,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 2.6043,
      "price": 2.6043,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.31,
      "nav": 1.06,
      "price": 1.06,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.0,
      "nav": 2.2757,
      "price": 2.2757,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 1.3457,
      "price": 1.3457,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.29,
      "sharpe": 2.5,
      "calmar": 2.5
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.78,
      "sharpe": 1.99,
      "calmar": 1.99
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 4.4,
      "sharpe": 7.21,
      "calmar": 7.21
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.69,
      "sharpe": -0.55,
      "calmar": -0.55
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 4.12,
      "sharpe": -4.1,
      "calmar": -4.1
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.54,
      "sharpe": -3.04,
      "calmar": -3.04
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.32,
      "sharpe": -0.37,
      "calmar": -0.37
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.75,
      "sharpe": 1.24,
      "calmar": 1.24
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.97,
      "sharpe": 1.27,
      "calmar": 1.27
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.34,
      "sharpe": 5.62,
      "calmar": 5.62
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.07,
      "sharpe": 0.01,
      "calmar": 0.01
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 10.14,
      "sharpe": -0.09,
      "calmar": -0.09
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 2.81,
      "sharpe": -6.54,
      "calmar": -6.54
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.9,
      "sharpe": 1.38,
      "calmar": 1.38
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.85,
      "sharpe": 1.24,
      "calmar": 1.24
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.84,
      "sharpe": 3.91,
      "calmar": 3.91
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.79,
      "sharpe": 0.15,
      "calmar": 0.15
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.31,
      "sharpe": 1.52,
      "calmar": 1.52
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.09,
      "sharpe": -0.9,
      "calmar": -0.9
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 2.33,
      "sharpe": 2.16,
      "calmar": 2.16
    }
  ],
  "news": [
    {
      "title": "抢抓“金九银十”旺季机遇，多地银行积极落地40年房贷新政！有房贷中介称，91年出生后能办随着中秋、国庆假期临近，多地银行积极行动起来，加大对40年房贷政策的营销宣传，希望在“双节”假期吸引购房客户贷款。记者梳理发现，目前，已经有南京银行杭州分行、邮储银行江苏分行、长沙银行、汉口银行及多家农商行通过官方公众号发布相关公告，明确表示新发放房贷可最长贷40年。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:38",
      "impact": "neutral"
    },
    {
      "title": "9月23日，海报新闻记者从山东省人大常委会办公厅召开的新闻发布会上了解到，《山东省数据条例》（以下简称《条例》）经山东省第十四届人民代表大会常务委员会第二十六次会议审议通过，共八章六十六条，将于2026年12月1日起施行。山东省司法厅二级巡视员刘东生在发布会上表示，山东数据市场建设尚处于起步阶段，数据要素价值释放还不充分，数据赋能经济社会高质量发展仍面临诸多问题和挑战。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:29",
      "impact": "neutral"
    },
    {
      "title": "9月23日，《山东省供销合作社条例》（以下简称《条例》）经山东省第十四届人民代表大会常务委员会第二十六次会议审议通过，将于2027年1月1日起施行。随后，山东省人大常委会办公厅召开新闻发布会，围绕《条例》有关内容及贯彻实施情况进行解读。目前，国家层面尚无针对供销合作社方面的专门立法，供销合作社的性质地位、职责定位、特定权益保障主要由政策文件确定，缺乏法律法规支撑。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:29",
      "impact": "neutral"
    },
    {
      "title": "中新社拉萨9月23日电(记者贡桑拉姆)西藏自治区农业农村厅官网23日发布的数据显示，西藏农村居民人均可支配收入已从2012年的5698元(人民币，下同)稳步提高到2025年的23184元，13年间年均增长11.4%，增速位居中国第一。西藏平均海拔超4000米，农业生产长期受制于高寒、缺氧、土地贫瘠等自然条件。近年来，官方持续加大投入，推动农业现代化。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:17",
      "impact": "neutral"
    },
    {
      "title": "中新网太原9月23日电(杨静李瑾阳)山西省财政厅副厅长、新闻发言人郭林春23日介绍，“十四五”时期，全省民生支出达2.38万亿元，占一般公共预算支出比重稳定保持在80%左右，财政资源更多投向教育、就业、社保、医疗、养老等关键民生领域。当日，中共山西省委宣传部、山西省人民政府新闻办公室举办开局起步“十五五”系列主题新闻发布会。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:08",
      "impact": "neutral"
    },
    {
      "title": "“跳过谈成绩，直接讲困难。”上海市发展改革委副主任陈彦峰的开场白，为9月21日举办的这场街镇营商办负责人座谈会定下了基调——没有成绩汇报，直接聚焦基层一线服务企业时“被卡住的事。”今年1月，上海发布营商环境9.0版行动方案，首次把“产业生态环境”提升到与政务服务、市场竞争、社会共治并列的核心位置。而此次座谈会旨在交流各街镇的难点、痛点，探讨需要市级层面支持赋能的具体举措和建议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:03",
      "impact": "neutral"
    },
    {
      "title": "9月22日，国务院新闻办公室举行“开局起步‘十五五’”系列主题新闻发布会，介绍促进自然资源安全高效永续利用有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:01",
      "impact": "neutral"
    },
    {
      "title": "中新社重庆9月23日电(记者刘相琳)22日至23日，第二十届重庆市市长国际经济顾问团会议在重庆举行。来自11个国家的32家世界500强及行业龙头企业代表齐聚山城，围绕“融通全球创新资源，深化科技开放合作”贡献智慧，也达成了一批实实在在的投资意向。图为第二十届重庆市市长国际经济顾问团会议现场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:59",
      "impact": "neutral"
    },
    {
      "title": "村镇银行仍在加速退场。《国际金融报》记者梳理国家金融监督管理总局金融许可证信息时发现，截至目前，年内已有183家村镇银行（总行）“退场”，仅7月以来便有54家村镇银行失去法人资格，而目前处于存续状态的村镇银行总数已仅余986家。受访专家指出，中小金融机构减量后，也需防止机构整合后基层服务半径收缩，保留必要网点并保持人员下沉，完善支农支小考核、差异化授信和尽职免责机制。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:55",
      "impact": "neutral"
    },
    {
      "title": "9月23日，国务院新闻办公室举行“开局起步‘十五五’”系列主题新闻发布会。会上，民政部副部长胡海峰介绍，“十四五”以来，我国慈善事业发展迈上新台阶，全国慈善组织总量近1.6万家，比“十三五”末增长69%；慈善信托达到3002单，增长5.2倍；慈善组织每年支出约1500亿元用于“一老一小”、“一残一困”、教育医疗等民生领域。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:45",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 48,
    "label": "中性",
    "upDownRatio": "2,606/1,696",
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
