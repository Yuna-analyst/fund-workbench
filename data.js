// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-03 17:41:46
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-03 17:41 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-03",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3608.1,
      "change": -29.93,
      "changePct": "-0.82%",
      "high": 3624.58,
      "low": 3580.38,
      "volume": 536848407.0,
      "amount": 810829280000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10876.99,
      "change": -133.69,
      "changePct": "-1.21%",
      "high": 11093.06,
      "low": 10810.42,
      "volume": 579125890.0,
      "amount": 892607520000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2391.65,
      "change": -67.05,
      "changePct": "-2.73%",
      "high": 2471.9,
      "low": 2376.39,
      "volume": 182783959.0,
      "amount": 446456430000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1151.28,
      "change": -45.66,
      "changePct": "-3.81%",
      "high": 1184.53,
      "low": 1132.33,
      "volume": 10963060.0,
      "amount": 87302280000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4008.87,
      "change": -8.05,
      "changePct": "-0.20%",
      "high": 4028.74,
      "low": 3969.55,
      "volume": 248779950.0,
      "amount": 553053600000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6327.05,
      "change": -93.18,
      "changePct": "-1.45%",
      "high": 6446.14,
      "low": 6292.31,
      "volume": 159336736.0,
      "amount": 284219660000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.07万亿",
      "label": "成交额",
      "rawAmount": 3074468770000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,637/2,181",
      "label": "涨/跌家数",
      "rawUp": 1637,
      "rawDown": 2181,
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
    "totalInflow": 12.5,
    "totalOutflow": 0,
    "netFlow": 12.5,
    "netFlowTrend": [
      2.5,
      5.0,
      7.5,
      10.0,
      12.5
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
      "inflow": 3.5,
      "pct": 1.04
    },
    {
      "name": "白酒",
      "inflow": 2.61,
      "pct": 1.79
    },
    {
      "name": "传媒",
      "inflow": 1.8,
      "pct": 0.13
    },
    {
      "name": "医药",
      "inflow": 1.43,
      "pct": 1.34
    },
    {
      "name": "有色",
      "inflow": 1.37,
      "pct": 0.14
    },
    {
      "name": "游戏",
      "inflow": 0.47,
      "pct": 0.87
    },
    {
      "name": "新能源",
      "inflow": 0.36,
      "pct": 1.49
    },
    {
      "name": "光伏",
      "inflow": 0.35,
      "pct": 1.02
    },
    {
      "name": "新能源车",
      "inflow": 0.31,
      "pct": 1.46
    },
    {
      "name": "地产",
      "inflow": 0.3,
      "pct": 0.72
    },
    {
      "name": "家电",
      "inflow": 0.23,
      "pct": 0.45
    },
    {
      "name": "农业",
      "inflow": 0.2,
      "pct": 2.56
    },
    {
      "name": "钢铁",
      "inflow": 0.15,
      "pct": 0.76
    },
    {
      "name": "食品",
      "inflow": 0.12,
      "pct": 1.74
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 1.77
    },
    {
      "name": "军工",
      "inflow": -0.83,
      "pct": -0.1
    },
    {
      "name": "医疗",
      "inflow": -1.2,
      "pct": -0.3
    },
    {
      "name": "创新药",
      "inflow": -1.42,
      "pct": -0.63
    },
    {
      "name": "煤炭",
      "inflow": -1.64,
      "pct": -0.41
    },
    {
      "name": "银行",
      "inflow": -3.5,
      "pct": -0.56
    }
  ],
  "sectors": [
    {
      "name": "农业",
      "code": "159825",
      "price": 0.72,
      "changePct": 2.56,
      "change": 0.018,
      "turnover": 0.65
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.454,
      "changePct": 1.79,
      "change": 0.008,
      "turnover": 8.69
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.975,
      "changePct": 1.77,
      "change": 0.017,
      "turnover": 0.08
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.526,
      "changePct": 1.74,
      "change": 0.009,
      "turnover": 0.39
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.981,
      "changePct": 1.49,
      "change": 0.029,
      "turnover": 1.19
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.318,
      "changePct": 1.46,
      "change": 0.019,
      "turnover": 1.04
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.379,
      "changePct": 1.34,
      "change": 0.005,
      "turnover": 4.75
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.486,
      "changePct": 1.04,
      "change": 0.005,
      "turnover": 11.66
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.695,
      "changePct": 1.02,
      "change": 0.007,
      "turnover": 1.16
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.039,
      "changePct": 0.87,
      "change": 0.009,
      "turnover": 1.56
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.061,
      "changePct": 0.76,
      "change": 0.008,
      "turnover": 0.49
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.126,
      "changePct": 0.72,
      "change": 0.008,
      "turnover": 1.01
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.344,
      "changePct": 0.45,
      "change": 0.006,
      "turnover": 0.76
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.387,
      "changePct": 0.14,
      "change": 0.002,
      "turnover": 4.56
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.798,
      "changePct": 0.13,
      "change": 0.001,
      "turnover": 6.01
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.003,
      "changePct": -0.1,
      "change": -0.001,
      "turnover": 2.77
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.335,
      "changePct": -0.3,
      "change": -0.001,
      "turnover": 4.0
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.215,
      "changePct": -0.41,
      "change": -0.005,
      "turnover": 5.47
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.88,
      "changePct": -0.56,
      "change": -0.005,
      "turnover": 11.68
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.789,
      "changePct": -0.63,
      "change": -0.005,
      "turnover": 4.74
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.969,
      "changePct": -1.02,
      "change": -0.01,
      "turnover": 0.14
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.352,
      "changePct": -2.45,
      "change": -0.034,
      "turnover": 0.65
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.755,
      "changePct": -3.33,
      "change": -0.026,
      "turnover": 1.87
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.577,
      "changePct": -3.83,
      "change": -0.023,
      "turnover": 0.72
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.702,
      "changePct": -4.88,
      "change": -0.036,
      "turnover": 12.35
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.76,
      "changePct": -4.88,
      "change": -0.039,
      "turnover": 7.19
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.635,
      "changePct": -6.34,
      "change": -0.043,
      "turnover": 5.75
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.403,
      "changePct": -7.36,
      "change": -0.032,
      "turnover": 30.66
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.092,
      "changePct": 0.17,
      "amount": 190.07,
      "netFlow": 47.52
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.884,
      "changePct": 0.45,
      "amount": 129.05,
      "netFlow": 32.26
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.971,
      "changePct": 0.03,
      "amount": 88.51,
      "netFlow": 22.13
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.272,
      "changePct": 0.19,
      "amount": 73.55,
      "netFlow": 18.39
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.486,
      "changePct": 1.04,
      "amount": 11.66,
      "netFlow": 2.92
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.379,
      "changePct": 1.34,
      "amount": 4.75,
      "netFlow": 1.19
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.981,
      "changePct": 1.49,
      "amount": 1.19,
      "netFlow": 0.3
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.702,
      "changePct": -4.88,
      "amount": 12.35,
      "netFlow": -3.09
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.38,
      "changePct": -1.18,
      "amount": 108.16,
      "netFlow": -27.04
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.215,
      "changePct": -3.57,
      "amount": 224.56,
      "netFlow": -56.14
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.092,
      "changePct": 0.17,
      "amount": 190.07,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.884,
      "changePct": 0.45,
      "amount": 129.05,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.38,
      "changePct": -1.18,
      "amount": 108.16,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.272,
      "changePct": 0.19,
      "amount": 73.55,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.971,
      "changePct": 0.03,
      "amount": 88.51,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "农业",
      "turnover": 0.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 8.69,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.08,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 4.75,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 11.66,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.01,
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
      "turnover": 4.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 6.01,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.77,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 5.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 11.68,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "创新药",
      "turnover": 4.74,
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
      "nav": 3.6243,
      "ret1w": -5.04,
      "ret1m": -6.44,
      "ret3m": -18.07,
      "ret6m": -4.33,
      "ret1y": -23.63,
      "ret2y": -8.36,
      "ret3y": 75.11
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.6406,
      "ret1w": -6.25,
      "ret1m": -13.66,
      "ret3m": -31.34,
      "ret6m": -30.91,
      "ret1y": -44.37,
      "ret2y": -33.94,
      "ret3y": -6.37
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.0113,
      "ret1w": -9.28,
      "ret1m": -22.06,
      "ret3m": -46.63,
      "ret6m": -29.02,
      "ret1y": -38.42,
      "ret2y": -8.55,
      "ret3y": 57.71
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7703,
      "ret1w": 1.93,
      "ret1m": 7.69,
      "ret3m": 10.5,
      "ret6m": 4.75,
      "ret1y": 1.96,
      "ret2y": -4.49,
      "ret3y": 5.81
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9796,
      "ret1w": 1.94,
      "ret1m": 0.51,
      "ret3m": -0.96,
      "ret6m": -14.33,
      "ret1y": -29.6,
      "ret2y": -35.65,
      "ret3y": -18.35
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6034,
      "ret1w": 1.52,
      "ret1m": 2.4,
      "ret3m": -3.91,
      "ret6m": -7.37,
      "ret1y": -23.03,
      "ret2y": -25.01,
      "ret3y": 5.95
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3814,
      "ret1w": 1.26,
      "ret1m": 3.77,
      "ret3m": 1.77,
      "ret6m": -3.43,
      "ret1y": -5.47,
      "ret2y": 1.81,
      "ret3y": 31.07
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.604,
      "ret1w": -1.84,
      "ret1m": -2.31,
      "ret3m": -15.45,
      "ret6m": -9.17,
      "ret1y": -22.21,
      "ret2y": -14.13,
      "ret3y": 26.5
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0973,
      "ret1w": -1.54,
      "ret1m": -2.83,
      "ret3m": -15.24,
      "ret6m": -14.17,
      "ret1y": -22.94,
      "ret2y": -14.1,
      "ret3y": 4.68
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.45,
      "ret1w": -3.81,
      "ret1m": -5.08,
      "ret3m": -22.59,
      "ret6m": -20.43,
      "ret1y": -19.57,
      "ret2y": 13.9,
      "ret3y": 103.66
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.168,
      "ret1w": 0.52,
      "ret1m": 6.67,
      "ret3m": 6.28,
      "ret6m": 3.45,
      "ret1y": 0.0,
      "ret2y": -8.25,
      "ret3y": -6.41
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.213,
      "ret1w": -1.43,
      "ret1m": 0.36,
      "ret3m": -9.82,
      "ret6m": -4.74,
      "ret1y": -17.21,
      "ret2y": -16.49,
      "ret3y": 5.99
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.0445,
      "ret1w": -6.55,
      "ret1m": -11.23,
      "ret3m": -34.8,
      "ret6m": -34.18,
      "ret1y": -69.29,
      "ret2y": -64.74,
      "ret3y": -42.94
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9547,
      "ret1w": 1.46,
      "ret1m": 5.31,
      "ret3m": 3.71,
      "ret6m": 0.73,
      "ret1y": 7.53,
      "ret2y": 0.74,
      "ret3y": -2.02
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3617,
      "ret1w": -2.42,
      "ret1m": -3.97,
      "ret3m": -16.19,
      "ret6m": -9.46,
      "ret1y": -21.96,
      "ret2y": -13.07,
      "ret3y": 20.68
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.3603,
      "ret1w": -8.09,
      "ret1m": -14.51,
      "ret3m": -38.67,
      "ret6m": -32.54,
      "ret1y": -42.62,
      "ret2y": -0.95,
      "ret3y": 39.1
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5596,
      "ret1w": 0.22,
      "ret1m": 0.63,
      "ret3m": -3.05,
      "ret6m": 0.54,
      "ret1y": -6.47,
      "ret2y": -5.07,
      "ret3y": 2.84
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.872,
      "ret1w": -3.22,
      "ret1m": -2.24,
      "ret3m": -16.79,
      "ret6m": -8.88,
      "ret1y": -12.89,
      "ret2y": -20.44,
      "ret3y": -19.85
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.433,
      "ret1w": 1.21,
      "ret1m": 4.21,
      "ret3m": 6.21,
      "ret6m": 2.11,
      "ret1y": -0.58,
      "ret2y": 4.24,
      "ret3y": 10.33
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1499,
      "ret1w": -1.6,
      "ret1m": -3.16,
      "ret3m": -11.28,
      "ret6m": -6.01,
      "ret1y": -11.59,
      "ret2y": -1.99,
      "ret3y": 38.47
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9334,
      "ret1w": -2.93,
      "ret1m": -5.79,
      "ret3m": -20.91,
      "ret6m": -23.84,
      "ret1y": -31.32,
      "ret2y": -19.82,
      "ret3y": 1.31
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9936,
      "ret1w": -2.93,
      "ret1m": -5.78,
      "ret3m": -20.88,
      "ret6m": -23.76,
      "ret1y": -31.19,
      "ret2y": -19.5,
      "ret3y": 2.13
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0451,
      "ret1w": -0.07,
      "ret1m": -0.68,
      "ret3m": -2.08,
      "ret6m": -4.86,
      "ret1y": -4.4,
      "ret2y": -3.14,
      "ret3y": 2.68
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0203,
      "ret1w": -0.06,
      "ret1m": -0.68,
      "ret3m": -2.02,
      "ret6m": -4.72,
      "ret1y": -4.11,
      "ret2y": -2.56,
      "ret3y": 3.93
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7032,
      "ret1w": 0.89,
      "ret1m": 3.0,
      "ret3m": 0.41,
      "ret6m": -4.27,
      "ret1y": -12.95,
      "ret2y": -12.91,
      "ret3y": -0.33
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7216,
      "ret1w": 0.88,
      "ret1m": 3.01,
      "ret3m": 0.46,
      "ret6m": -4.16,
      "ret1y": -12.72,
      "ret2y": -12.47,
      "ret3y": 0.67
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.9445,
      "ret1w": -4.96,
      "ret1m": -10.85,
      "ret3m": -27.05,
      "ret6m": -22.61,
      "ret1y": -24.03,
      "ret2y": 0.87,
      "ret3y": 70.82
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2185,
      "ret1w": -0.38,
      "ret1m": -1.33,
      "ret3m": -9.96,
      "ret6m": -8.07,
      "ret1y": -12.74,
      "ret2y": 2.67,
      "ret3y": 42.49
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6818,
      "ret1w": 0.25,
      "ret1m": -0.04,
      "ret3m": -4.21,
      "ret6m": -4.74,
      "ret1y": -22.47,
      "ret2y": -16.21,
      "ret3y": -6.55
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.709,
      "ret1w": -0.88,
      "ret1m": -3.58,
      "ret3m": -10.72,
      "ret6m": -4.47,
      "ret1y": -5.77,
      "ret2y": 19.16,
      "ret3y": 84.25
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4629,
      "ret1w": 0.11,
      "ret1m": 0.24,
      "ret3m": -6.8,
      "ret6m": -11.51,
      "ret1y": -10.81,
      "ret2y": -0.37,
      "ret3y": 25.79
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4721,
      "ret1w": 0.11,
      "ret1m": 0.23,
      "ret3m": -6.77,
      "ret6m": -11.43,
      "ret1y": -10.62,
      "ret2y": 0.04,
      "ret3y": 26.81
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2571,
      "ret1w": -0.08,
      "ret1m": 0.18,
      "ret3m": -0.84,
      "ret6m": -1.55,
      "ret1y": -2.83,
      "ret2y": -2.41,
      "ret3y": 0.38
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0781,
      "ret1w": 1.08,
      "ret1m": 0.55,
      "ret3m": -2.48,
      "ret6m": -5.61,
      "ret1y": -6.24,
      "ret2y": -8.65,
      "ret3y": 1.88
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1519,
      "ret1w": -0.42,
      "ret1m": 0.23,
      "ret3m": -12.73,
      "ret6m": -15.8,
      "ret1y": -27.14,
      "ret2y": -24.47,
      "ret3y": -17.63
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7382,
      "ret1w": -1.8,
      "ret1m": -2.3,
      "ret3m": -6.2,
      "ret6m": -8.55,
      "ret1y": -16.06,
      "ret2y": -2.45,
      "ret3y": 26.94
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.046,
      "ret1w": -6.62,
      "ret1m": -14.03,
      "ret3m": -34.88,
      "ret6m": -33.87,
      "ret1y": -42.71,
      "ret2y": -5.89,
      "ret3y": 59.84
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5635,
      "ret1w": 0.11,
      "ret1m": 1.23,
      "ret3m": 2.95,
      "ret6m": 3.1,
      "ret1y": 4.56,
      "ret2y": 2.76,
      "ret3y": 3.76
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5313,
      "ret1w": -3.56,
      "ret1m": 4.67,
      "ret3m": -8.16,
      "ret6m": -8.14,
      "ret1y": -24.55,
      "ret2y": -10.78,
      "ret3y": -10.28
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.346,
      "ret1w": -7.46,
      "ret1m": -16.36,
      "ret3m": -38.66,
      "ret6m": -33.95,
      "ret1y": -25.97,
      "ret2y": 5.99,
      "ret3y": 99.24
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0488,
      "ret1w": -0.12,
      "ret1m": -0.59,
      "ret3m": -1.14,
      "ret6m": -1.31,
      "ret1y": -1.8,
      "ret2y": -0.79,
      "ret3y": 2.19
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0967,
      "ret1w": -0.15,
      "ret1m": -0.6,
      "ret3m": -1.14,
      "ret6m": -1.27,
      "ret1y": -1.7,
      "ret2y": -0.59,
      "ret3y": 2.84
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0671,
      "ret1w": 0.05,
      "ret1m": -0.08,
      "ret3m": 0.1,
      "ret6m": 0.34,
      "ret1y": 0.64,
      "ret2y": 1.56,
      "ret3y": 3.01
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1021,
      "ret1w": 0.05,
      "ret1m": -0.05,
      "ret3m": 0.17,
      "ret6m": 0.41,
      "ret1y": 0.75,
      "ret2y": 1.54,
      "ret3y": 3.89
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1119,
      "ret1w": 0.04,
      "ret1m": -0.04,
      "ret3m": 0.19,
      "ret6m": 0.46,
      "ret1y": 0.85,
      "ret2y": 1.74,
      "ret3y": 4.33
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0781,
      "ret1w": 0.04,
      "ret1m": -0.04,
      "ret3m": 0.13,
      "ret6m": 0.28,
      "ret1y": 0.6,
      "ret2y": 1.43,
      "ret3y": 3.08
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0931,
      "ret1w": 0.04,
      "ret1m": -0.04,
      "ret3m": 0.16,
      "ret6m": 0.35,
      "ret1y": 0.75,
      "ret2y": 1.74,
      "ret3y": 3.73
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9992,
      "ret1w": -0.41,
      "ret1m": -1.08,
      "ret3m": -4.99,
      "ret6m": -4.7,
      "ret1y": -7.48,
      "ret2y": -2.12,
      "ret3y": 4.45
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1478,
      "ret1w": -0.64,
      "ret1m": -1.21,
      "ret3m": -5.22,
      "ret6m": -3.42,
      "ret1y": -7.58,
      "ret2y": -4.25,
      "ret3y": -0.96
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0062,
      "ret1w": -0.41,
      "ret1m": -1.07,
      "ret3m": -4.96,
      "ret6m": -4.61,
      "ret1y": -7.29,
      "ret2y": -1.73,
      "ret3y": 5.3
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.045,
      "ret1w": 0.06,
      "ret1m": -0.07,
      "ret3m": 0.11,
      "ret6m": 0.43,
      "ret1y": 0.82,
      "ret2y": 1.71,
      "ret3y": 3.66
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0928,
      "ret1w": -0.41,
      "ret1m": -1.72,
      "ret3m": -5.65,
      "ret6m": -5.51,
      "ret1y": -9.81,
      "ret2y": -7.68,
      "ret3y": -0.59
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2037,
      "ret1w": 0.23,
      "ret1m": 0.41,
      "ret3m": -0.08,
      "ret6m": -1.27,
      "ret1y": -2.23,
      "ret2y": 0.68,
      "ret3y": 10.37
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1148,
      "ret1w": -0.11,
      "ret1m": -0.21,
      "ret3m": -1.49,
      "ret6m": -0.98,
      "ret1y": -2.35,
      "ret2y": 0.33,
      "ret3y": 6.6
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1856,
      "ret1w": -0.1,
      "ret1m": -0.2,
      "ret3m": -1.45,
      "ret6m": -0.87,
      "ret1y": -2.15,
      "ret2y": 0.75,
      "ret3y": 7.5
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.032,
      "ret1w": -2.78,
      "ret1m": -3.74,
      "ret3m": -18.65,
      "ret6m": -9.2,
      "ret1y": -2.45,
      "ret2y": 39.85,
      "ret3y": 106.71
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9075,
      "ret1w": -0.71,
      "ret1m": -1.46,
      "ret3m": -3.15,
      "ret6m": -0.37,
      "ret1y": 1.35,
      "ret2y": 3.92,
      "ret3y": 28.28
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6458,
      "ret1w": -0.04,
      "ret1m": -1.12,
      "ret3m": -9.25,
      "ret6m": -12.39,
      "ret1y": -22.28,
      "ret2y": -11.24,
      "ret3y": 17.06
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2311,
      "ret1w": -2.43,
      "ret1m": -3.39,
      "ret3m": -10.39,
      "ret6m": 3.03,
      "ret1y": 3.9,
      "ret2y": 4.69,
      "ret3y": 58.26
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9247,
      "ret1w": 0.1,
      "ret1m": 0.37,
      "ret3m": 1.38,
      "ret6m": -1.05,
      "ret1y": -2.66,
      "ret2y": -5.32,
      "ret3y": -1.48
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.2914,
      "ret1w": -1.55,
      "ret1m": -4.09,
      "ret3m": -16.09,
      "ret6m": -11.12,
      "ret1y": -7.04,
      "ret2y": 16.07,
      "ret3y": 63.68
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.375,
      "ret1w": -0.46,
      "ret1m": -1.22,
      "ret3m": -3.57,
      "ret6m": -3.25,
      "ret1y": -2.76,
      "ret2y": -1.26,
      "ret3y": 14.44
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.786,
      "ret1w": 0.9,
      "ret1m": -3.08,
      "ret3m": -18.21,
      "ret6m": -12.18,
      "ret1y": -27.69,
      "ret2y": -32.42,
      "ret3y": -18.38
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.4591,
      "ret1w": -0.27,
      "ret1m": -3.11,
      "ret3m": -15.78,
      "ret6m": -10.78,
      "ret1y": -6.13,
      "ret2y": 38.96,
      "ret3y": 112.38
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5276,
      "ret1w": -1.69,
      "ret1m": -2.3,
      "ret3m": -0.37,
      "ret6m": 4.55,
      "ret1y": -1.07,
      "ret2y": 24.62,
      "ret3y": 48.7
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5979,
      "ret1w": 0.53,
      "ret1m": 0.34,
      "ret3m": -7.86,
      "ret6m": -5.82,
      "ret1y": 0.17,
      "ret2y": 11.7,
      "ret3y": 42.12
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2028,
      "ret1w": 0.1,
      "ret1m": 0.8,
      "ret3m": -7.31,
      "ret6m": -6.87,
      "ret1y": -5.48,
      "ret2y": 0.7,
      "ret3y": 23.57
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.276,
      "ret1w": 0.71,
      "ret1m": 1.35,
      "ret3m": 5.11,
      "ret6m": -3.99,
      "ret1y": -3.41,
      "ret2y": 3.91,
      "ret3y": -6.36
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.883,
      "ret1w": 1.62,
      "ret1m": -1.41,
      "ret3m": -4.85,
      "ret6m": -3.34,
      "ret1y": -15.98,
      "ret2y": -6.87,
      "ret3y": 28.95
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.4086,
      "ret1w": -1.97,
      "ret1m": -3.94,
      "ret3m": -15.67,
      "ret6m": -10.65,
      "ret1y": -6.58,
      "ret2y": 11.32,
      "ret3y": 45.58
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0169,
      "ret1w": 0.07,
      "ret1m": 0.05,
      "ret3m": 0.37,
      "ret6m": 0.77,
      "ret1y": 1.33,
      "ret2y": 2.42,
      "ret3y": 3.93
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0161,
      "ret1w": 0.08,
      "ret1m": 0.06,
      "ret3m": 0.38,
      "ret6m": 0.8,
      "ret1y": 1.36,
      "ret2y": 2.49,
      "ret3y": 4.1
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.197,
      "ret1w": -0.42,
      "ret1m": -1.72,
      "ret3m": -10.8,
      "ret6m": -14.93,
      "ret1y": -20.99,
      "ret2y": -17.39,
      "ret3y": -0.83
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.228,
      "ret1w": -1.55,
      "ret1m": -3.92,
      "ret3m": -15.86,
      "ret6m": -18.24,
      "ret1y": -25.34,
      "ret2y": -17.57,
      "ret3y": 7.27
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.442,
      "ret1w": 0.15,
      "ret1m": -1.8,
      "ret3m": -7.89,
      "ret6m": -9.15,
      "ret1y": -21.03,
      "ret2y": -4.75,
      "ret3y": 32.42
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8271,
      "ret1w": -0.96,
      "ret1m": -2.69,
      "ret3m": -11.33,
      "ret6m": -12.49,
      "ret1y": -15.59,
      "ret2y": -8.36,
      "ret3y": 8.65
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8807,
      "ret1w": -0.95,
      "ret1m": -2.69,
      "ret3m": -11.3,
      "ret6m": -12.4,
      "ret1y": -15.41,
      "ret2y": -7.99,
      "ret3y": 9.53
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6499,
      "ret1w": -1.39,
      "ret1m": -2.7,
      "ret3m": -14.23,
      "ret6m": -14.0,
      "ret1y": -22.73,
      "ret2y": -12.51,
      "ret3y": 9.5
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5808,
      "ret1w": -0.19,
      "ret1m": -0.95,
      "ret3m": -7.46,
      "ret6m": -10.85,
      "ret1y": -14.87,
      "ret2y": -11.86,
      "ret3y": 5.85
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4275,
      "ret1w": -0.54,
      "ret1m": -1.09,
      "ret3m": -7.43,
      "ret6m": -9.36,
      "ret1y": -14.99,
      "ret2y": -4.61,
      "ret3y": 20.69
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4708,
      "ret1w": -2.19,
      "ret1m": -5.33,
      "ret3m": -19.42,
      "ret6m": -23.19,
      "ret1y": -27.2,
      "ret2y": -19.52,
      "ret3y": 9.15
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0228,
      "ret1w": 0.57,
      "ret1m": 1.74,
      "ret3m": -1.76,
      "ret6m": -6.81,
      "ret1y": -8.98,
      "ret2y": -8.67,
      "ret3y": 7.33
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4926,
      "ret1w": 0.27,
      "ret1m": -0.11,
      "ret3m": 2.07,
      "ret6m": -1.98,
      "ret1y": 0.89,
      "ret2y": 7.54,
      "ret3y": 30.6
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.2581,
      "ret1w": -1.33,
      "ret1m": -4.02,
      "ret3m": -7.64,
      "ret6m": -1.91,
      "ret1y": -0.11,
      "ret2y": 2.08,
      "ret3y": 27.46
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2079,
      "ret1w": -0.97,
      "ret1m": -2.99,
      "ret3m": -14.32,
      "ret6m": -19.01,
      "ret1y": -25.14,
      "ret2y": -17.54,
      "ret3y": 6.07
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9491,
      "ret1w": -2.38,
      "ret1m": -6.14,
      "ret3m": -16.02,
      "ret6m": -13.82,
      "ret1y": -22.63,
      "ret2y": -16.01,
      "ret3y": 8.33
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9524,
      "ret1w": -2.37,
      "ret1m": -6.12,
      "ret3m": -15.9,
      "ret6m": -13.65,
      "ret1y": -22.47,
      "ret2y": -15.91,
      "ret3y": 8.09
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2026,
      "ret1w": 1.0,
      "ret1m": -2.78,
      "ret3m": -11.1,
      "ret6m": -11.0,
      "ret1y": -21.1,
      "ret2y": -13.66,
      "ret3y": 7.1
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2309,
      "ret1w": 1.0,
      "ret1m": -2.77,
      "ret3m": -11.07,
      "ret6m": -10.91,
      "ret1y": -20.94,
      "ret2y": -13.32,
      "ret3y": 7.95
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.6866,
      "ret1w": 0.1,
      "ret1m": -2.62,
      "ret3m": -12.21,
      "ret6m": -15.33,
      "ret1y": -21.14,
      "ret2y": -11.19,
      "ret3y": 19.42
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1553,
      "ret1w": 0.08,
      "ret1m": -0.31,
      "ret3m": -0.51,
      "ret6m": -1.12,
      "ret1y": -1.12,
      "ret2y": 0.56,
      "ret3y": 5.4
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1756,
      "ret1w": 0.08,
      "ret1m": -0.31,
      "ret3m": -0.48,
      "ret6m": -1.04,
      "ret1y": -0.97,
      "ret2y": 0.87,
      "ret3y": 6.03
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0876,
      "ret1w": 0.04,
      "ret1m": -0.08,
      "ret3m": 0.12,
      "ret6m": 0.41,
      "ret1y": 0.8,
      "ret2y": 1.85,
      "ret3y": 3.6
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.411,
      "ret1w": 0.07,
      "ret1m": -0.11,
      "ret3m": 0.06,
      "ret6m": -0.07,
      "ret1y": 0.09,
      "ret2y": 0.53,
      "ret3y": 5.6
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4643,
      "ret1w": 0.08,
      "ret1m": -0.1,
      "ret3m": 0.11,
      "ret6m": 0.03,
      "ret1y": 0.29,
      "ret2y": 0.93,
      "ret3y": 6.46
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8294,
      "ret1w": -1.29,
      "ret1m": -4.19,
      "ret3m": -11.31,
      "ret6m": -11.64,
      "ret1y": -5.5,
      "ret2y": 4.16,
      "ret3y": 31.16
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9794,
      "ret1w": -2.53,
      "ret1m": -6.2,
      "ret3m": -16.23,
      "ret6m": -21.0,
      "ret1y": -20.13,
      "ret2y": -15.09,
      "ret3y": 7.89
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.32,
      "nav": 3.6243,
      "price": 3.6243,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.68,
      "nav": 2.6406,
      "price": 2.6406,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 1.1,
      "nav": 3.0113,
      "price": 3.0113,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.38,
      "nav": 0.7703,
      "price": 0.7703,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.9796,
      "price": 1.9796,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.12,
      "nav": 2.6034,
      "price": 2.6034,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.19,
      "nav": 5.3814,
      "price": 5.3814,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.604,
      "price": 1.604,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.0973,
      "price": 1.0973,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.25,
      "nav": 2.45,
      "price": 2.45,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.33,
      "nav": 1.168,
      "price": 1.168,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.213,
      "price": 2.213,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.56,
      "nav": 1.0445,
      "price": 1.0445,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.27,
      "nav": 1.9547,
      "price": 1.9547,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.3617,
      "price": 1.3617,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.73,
      "nav": 1.3603,
      "price": 1.3603,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.5596,
      "price": 2.5596,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 0.872,
      "price": 0.872,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 2.433,
      "price": 2.433,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.1499,
      "price": 1.1499,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.66,
      "sharpe": -2.07,
      "calmar": -2.07
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 20.49,
      "sharpe": -2.38,
      "calmar": -2.38
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 33.09,
      "sharpe": -1.42,
      "calmar": -1.42
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 11.54,
      "sharpe": 0.15,
      "calmar": 0.15
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.77,
      "sharpe": -5.37,
      "calmar": -5.37
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.6,
      "sharpe": -3.11,
      "calmar": -3.11
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.66,
      "sharpe": -0.62,
      "calmar": -0.62
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.46,
      "sharpe": -3.04,
      "calmar": -3.04
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 4.25,
      "sharpe": -2.93,
      "calmar": -2.93
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 7.62,
      "sharpe": -1.94,
      "calmar": -1.94
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 10.0,
      "sharpe": 0.0,
      "calmar": 0.0
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.54,
      "sharpe": -3.21,
      "calmar": -3.21
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 16.84,
      "sharpe": -4.27,
      "calmar": -4.27
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 7.96,
      "sharpe": 0.73,
      "calmar": 0.73
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.96,
      "sharpe": -2.45,
      "calmar": -2.45
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 21.77,
      "sharpe": -2.18,
      "calmar": -2.18
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.95,
      "sharpe": -1.15,
      "calmar": -1.15
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.36,
      "sharpe": -1.78,
      "calmar": -1.78
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 6.31,
      "sharpe": -0.06,
      "calmar": -0.06
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.74,
      "sharpe": -1.42,
      "calmar": -1.42
    }
  ],
  "news": [
    {
      "title": "信息时报讯（记者何小敏）鼓励年假与小长假连休、支持用公积金交物业费、发放惠民托育券……近日，广东省发展改革委印发《广东省扩大消费实施方案》（以下简称《实施方案》）。《实施方案》从七个方面提出37条举措，旨在推动形成更大规模、更高水平、更具活力的消费市场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:58",
      "impact": "neutral"
    },
    {
      "title": "11月3日，国家发展改革委召开奋进“十五五”系列新闻发布会。会上，相关负责人围绕新兴支柱产业培育、未来产业发展、数字中国建设以及海洋强国建设等内容，介绍培育壮大新动能有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:56",
      "impact": "neutral"
    },
    {
      "title": "■王丽新中指研究院数据显示，10月份全国100个城市（中指研究院基于房地产市场变化情况及市场活跃度选择的100个样本城市）新建住宅平均价格为17316元/平方米，环比上涨0.18%，同比上涨2.02%。北京市住房和城乡建设委员会的网签数据显示，10月份北京新房网签量达到4753套，同比大涨38%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:56",
      "impact": "neutral"
    },
    {
      "title": "11月2日，中国人民银行会同金融监管总局、中国证监会等部门先后召开证券、基金、保险公司互换便利座谈会和股票回购增持再贷款座谈会。会上，中国人民银行围绕股票回购增持再贷款政策部署优化安排。同日，中国证监会表示，将会同中国人民银行组织相关市场主体用好用足这项工具。回购增持再贷款这一货币政策工具自2024年10月份落地以来，持续释放逆周期调节与市值管理牵引效能。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:56",
      "impact": "neutral"
    },
    {
      "title": "11月5日至11月10日，第九届中国国际进口博览会（以下简称“进博会”）将在国家会展中心（上海）举办。据了解，本届进博会将有162个国家、地区和国际组织参与，4142家境外企业参展，全球首发、亚洲首展、中国首秀的代表性展品超480件，创历年新高。“进博会让世界看见了中国的开放，让企业通过交流找到共同的机会，把今天的相遇变成明天的合作。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:56",
      "impact": "neutral"
    },
    {
      "title": "步入年终冲刺关键期，10月30日，吉林召开三季度经济运行分析会议，强调要以超常规举措攻坚冲刺全年目标，推动全省经济回稳向好。今年前三季度，吉林GDP为11076.53亿元，同比增长2.4%，在31个省份中排名靠后。其中，二产增加值3483.22亿元，同比下降1.6%，成为影响经济增长的主要原因。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:24",
      "impact": "neutral"
    },
    {
      "title": "据天津广播消息，近日，《天津市推动汽车赛事经济发展实施方案》（征求意见稿）公开征求意见。征求意见稿提出，到2027年底，力争将天津建成设施完善、赛事集聚、业态丰富、人才齐备的北方国际化汽车赛事集聚区。其中提到，引进国际国内顶级专业赛事。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:21",
      "impact": "neutral"
    },
    {
      "title": "中新网广州11月3日电(记者王坚)在广州南沙明珠湾灵山岛尖，一栋名为“数聚大厦”的写字楼正以“一栋楼链全球”的方式，成为粤港澳大湾区跨境贸易的重要一环。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:53",
      "impact": "neutral"
    },
    {
      "title": "11月3日，山西省吕梁市委宣传部、吕梁市政府新闻办举行“开局起步‘十五五’”系列主题首场新闻发布会，解读《吕梁市国民经济和社会发展“十五五”规划纲要》。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:53",
      "impact": "neutral"
    },
    {
      "title": "上海今年第十一批次土拍将于11月30日举行，涉及的两幅地块分别位于浦东新杨思和宝山南大，总起始价格超41亿元。这是上海时隔两个月再次公告出让的宅地，也是上海落实8月28日国家商品住房销售制度改革举措之后，首个按照新规出让的批次，受到市场关注。两幅地块“小而精”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:52",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 44,
    "label": "中性",
    "upDownRatio": "1,637/2,181",
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
