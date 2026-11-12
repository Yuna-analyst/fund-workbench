// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-12 18:06:36
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-12 18:06 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-12",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3655.83,
      "change": -24.81,
      "changePct": "-0.67%",
      "high": 3699.58,
      "low": 3647.44,
      "volume": 496533033.0,
      "amount": 879537110000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11197.98,
      "change": -191.76,
      "changePct": "-1.68%",
      "high": 11515.65,
      "low": 11193.26,
      "volume": 632899416.0,
      "amount": 1052544770000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2509.43,
      "change": -62.64,
      "changePct": "-2.44%",
      "high": 2620.25,
      "low": 2508.29,
      "volume": 196927278.0,
      "amount": 525073480000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1309.84,
      "change": 9.46,
      "changePct": "+0.73%",
      "high": 1364.88,
      "low": 1302.5,
      "volume": 11312711.0,
      "amount": 117308490000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4043.93,
      "change": -31.78,
      "changePct": "-0.78%",
      "high": 4100.05,
      "low": 4034.52,
      "volume": 175464628.0,
      "amount": 508194730000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6604.15,
      "change": -109.03,
      "changePct": "-1.62%",
      "high": 6779.25,
      "low": 6599.29,
      "volume": 147824301.0,
      "amount": 336455540000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.42万亿",
      "label": "成交额",
      "rawAmount": 3419114120000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,138/1,930",
      "label": "涨/跌家数",
      "rawUp": 2138,
      "rawDown": 1930,
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
    "totalInflow": 13.75,
    "totalOutflow": 0,
    "netFlow": 13.75,
    "netFlowTrend": [
      2.75,
      5.5,
      8.25,
      11.0,
      13.75
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
      "inflow": 4.93,
      "pct": 0.34
    },
    {
      "name": "半导体",
      "inflow": 4.81,
      "pct": 0.49
    },
    {
      "name": "芯片",
      "inflow": 2.67,
      "pct": 1.15
    },
    {
      "name": "白酒",
      "inflow": 1.5,
      "pct": 0.23
    },
    {
      "name": "创新药",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "食品",
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
      "inflow": -0.02,
      "pct": -1.24
    },
    {
      "name": "计算机",
      "inflow": -0.05,
      "pct": -1.87
    },
    {
      "name": "钢铁",
      "inflow": -0.09,
      "pct": -1.03
    },
    {
      "name": "家电",
      "inflow": -0.12,
      "pct": -1.67
    },
    {
      "name": "农业",
      "inflow": -0.13,
      "pct": -0.14
    },
    {
      "name": "新能源",
      "inflow": -0.36,
      "pct": -1.71
    },
    {
      "name": "地产",
      "inflow": -0.43,
      "pct": -1.05
    },
    {
      "name": "光伏",
      "inflow": -0.87,
      "pct": -1.37
    },
    {
      "name": "军工",
      "inflow": -0.9,
      "pct": -0.68
    },
    {
      "name": "医疗",
      "inflow": -0.94,
      "pct": -0.58
    },
    {
      "name": "医药",
      "inflow": -1.04,
      "pct": -0.26
    },
    {
      "name": "煤炭",
      "inflow": -1.56,
      "pct": -1.43
    },
    {
      "name": "券商",
      "inflow": -2.29,
      "pct": -1.05
    }
  ],
  "sectors": [
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.881,
      "changePct": 1.15,
      "change": 0.01,
      "turnover": 8.91
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.813,
      "changePct": 0.49,
      "change": 0.004,
      "turnover": 16.02
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.885,
      "changePct": 0.34,
      "change": 0.003,
      "turnover": 16.44
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.434,
      "changePct": 0.23,
      "change": 0.001,
      "turnover": 5.0
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.823,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 6.04
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.509,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.16
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.641,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.7
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.72,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 0.43
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.383,
      "changePct": -0.26,
      "change": -0.001,
      "turnover": 3.48
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.342,
      "changePct": -0.58,
      "change": -0.002,
      "turnover": 3.12
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.022,
      "changePct": -0.68,
      "change": -0.007,
      "turnover": 3.0
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.052,
      "changePct": -1.03,
      "change": -0.011,
      "turnover": 0.31
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.472,
      "changePct": -1.05,
      "change": -0.005,
      "turnover": 7.65
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.133,
      "changePct": -1.05,
      "change": -0.012,
      "turnover": 1.43
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.953,
      "changePct": -1.24,
      "change": -0.012,
      "turnover": 0.06
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.72,
      "changePct": -1.37,
      "change": -0.01,
      "turnover": 2.9
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.171,
      "changePct": -1.43,
      "change": -0.017,
      "turnover": 5.21
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.355,
      "changePct": -1.67,
      "change": -0.023,
      "turnover": 0.4
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.014,
      "changePct": -1.71,
      "change": -0.035,
      "turnover": 1.21
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.995,
      "changePct": -1.87,
      "change": -0.019,
      "turnover": 0.17
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.416,
      "changePct": -2.01,
      "change": -0.029,
      "turnover": 0.95
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.801,
      "changePct": -2.2,
      "change": -0.018,
      "turnover": 2.28
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.318,
      "changePct": -2.23,
      "change": -0.03,
      "turnover": 1.18
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.696,
      "changePct": -2.52,
      "change": -0.018,
      "turnover": 12.06
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.411,
      "changePct": -3.02,
      "change": -0.044,
      "turnover": 5.13
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.826,
      "changePct": -3.39,
      "change": -0.029,
      "turnover": 6.35
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.443,
      "changePct": -3.49,
      "change": -0.016,
      "turnover": 45.15
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.028,
      "changePct": -4.81,
      "change": -0.052,
      "turnover": 1.81
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.381,
      "changePct": 0.44,
      "amount": 146.58,
      "netFlow": 36.65
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.884,
      "changePct": 0.07,
      "amount": 18.49,
      "netFlow": 4.62
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.813,
      "changePct": 0.49,
      "amount": 16.02,
      "netFlow": 4.01
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.014,
      "changePct": -1.71,
      "amount": 1.21,
      "netFlow": -0.3
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.383,
      "changePct": -0.26,
      "amount": 3.48,
      "netFlow": -0.87
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.472,
      "changePct": -1.05,
      "amount": 7.65,
      "netFlow": -1.91
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.998,
      "changePct": -0.89,
      "amount": 8.79,
      "netFlow": -2.2
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.297,
      "changePct": -0.83,
      "amount": 14.52,
      "netFlow": -3.63
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.114,
      "changePct": -0.87,
      "amount": 48.18,
      "netFlow": -12.05
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.628,
      "changePct": -1.78,
      "amount": 54.67,
      "netFlow": -13.67
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.114,
      "changePct": -0.87,
      "amount": 48.18,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.884,
      "changePct": 0.07,
      "amount": 18.49,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.628,
      "changePct": -1.78,
      "amount": 54.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.297,
      "changePct": -0.83,
      "amount": 14.52,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.998,
      "changePct": -0.89,
      "amount": 8.79,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "芯片",
      "turnover": 8.91,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 16.02,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "银行",
      "turnover": 16.44,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "白酒",
      "turnover": 5.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.16,
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
      "name": "农业",
      "turnover": 0.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.48,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.65,
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
      "name": "基建",
      "turnover": 0.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 2.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 5.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.17,
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
      "nav": 4.0547,
      "ret1w": -3.32,
      "ret1m": 0.28,
      "ret3m": -1.43,
      "ret6m": -9.4,
      "ret1y": -19.84,
      "ret2y": 5.12,
      "ret3y": 76.64
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.8623,
      "ret1w": -1.56,
      "ret1m": 0.53,
      "ret3m": -19.24,
      "ret6m": -33.01,
      "ret1y": -42.38,
      "ret2y": -26.08,
      "ret3y": -1.17
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.55,
      "ret1w": -1.41,
      "ret1m": 7.96,
      "ret3m": -27.0,
      "ret6m": -33.16,
      "ret1y": -37.12,
      "ret2y": 10.04,
      "ret3y": 68.02
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7561,
      "ret1w": 0.09,
      "ret1m": -2.03,
      "ret3m": 7.49,
      "ret6m": 5.26,
      "ret1y": 3.25,
      "ret2y": -8.52,
      "ret3y": 1.29
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9904,
      "ret1w": -1.68,
      "ret1m": -6.95,
      "ret3m": 0.63,
      "ret6m": -14.7,
      "ret1y": -30.73,
      "ret2y": -34.81,
      "ret3y": -25.76
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6597,
      "ret1w": -1.51,
      "ret1m": -3.32,
      "ret3m": -0.08,
      "ret6m": -6.19,
      "ret1y": -23.13,
      "ret2y": -25.98,
      "ret3y": 7.93
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2924,
      "ret1w": -1.57,
      "ret1m": -4.35,
      "ret3m": 0.36,
      "ret6m": -5.35,
      "ret1y": -7.61,
      "ret2y": -2.68,
      "ret3y": 24.3
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.685,
      "ret1w": -1.58,
      "ret1m": -1.75,
      "ret3m": -7.37,
      "ret6m": -12.1,
      "ret1y": -21.0,
      "ret2y": -8.57,
      "ret3y": 22.99
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1367,
      "ret1w": -1.4,
      "ret1m": -2.24,
      "ret3m": -8.93,
      "ret6m": -17.39,
      "ret1y": -21.87,
      "ret2y": -9.71,
      "ret3y": 4.78
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.622,
      "ret1w": -0.98,
      "ret1m": -0.34,
      "ret3m": -10.79,
      "ret6m": -25.89,
      "ret1y": -21.28,
      "ret2y": 21.84,
      "ret3y": 91.39
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.146,
      "ret1w": 0.09,
      "ret1m": -3.45,
      "ret3m": 3.43,
      "ret6m": -0.95,
      "ret1y": 0.7,
      "ret2y": -12.32,
      "ret3y": -13.05
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.274,
      "ret1w": -1.04,
      "ret1m": -2.19,
      "ret3m": -5.53,
      "ret6m": -8.53,
      "ret1y": -13.11,
      "ret2y": -14.29,
      "ret3y": 0.71
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.266,
      "ret1w": -0.02,
      "ret1m": 2.29,
      "ret3m": -16.73,
      "ret6m": -31.9,
      "ret1y": -60.4,
      "ret2y": -56.98,
      "ret3y": -38.53
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8971,
      "ret1w": -0.6,
      "ret1m": -3.12,
      "ret3m": 0.5,
      "ret6m": -2.69,
      "ret1y": 3.42,
      "ret2y": -2.49,
      "ret3y": -7.52
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.448,
      "ret1w": -0.77,
      "ret1m": 0.15,
      "ret3m": -7.17,
      "ret6m": -13.66,
      "ret1y": -19.76,
      "ret2y": -8.05,
      "ret3y": 20.67
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.5186,
      "ret1w": -1.82,
      "ret1m": 2.13,
      "ret3m": -22.47,
      "ret6m": -37.48,
      "ret1y": -43.84,
      "ret2y": 13.07,
      "ret3y": 37.62
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.574,
      "ret1w": -1.02,
      "ret1m": -1.84,
      "ret3m": -1.62,
      "ret6m": 0.28,
      "ret1y": -7.1,
      "ret2y": -6.73,
      "ret3y": -0.8
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.945,
      "ret1w": 0.11,
      "ret1m": -2.68,
      "ret3m": -3.96,
      "ret6m": -14.01,
      "ret1y": -6.99,
      "ret2y": -11.76,
      "ret3y": -18.67
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3746,
      "ret1w": -0.1,
      "ret1m": -1.8,
      "ret3m": 1.74,
      "ret6m": 1.4,
      "ret1y": -2.11,
      "ret2y": -1.62,
      "ret3y": 6.26
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2135,
      "ret1w": -1.25,
      "ret1m": 0.16,
      "ret3m": -4.1,
      "ret6m": -8.64,
      "ret1y": -9.65,
      "ret2y": 2.67,
      "ret3y": 35.89
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9867,
      "ret1w": -0.97,
      "ret1m": -1.02,
      "ret3m": -11.82,
      "ret6m": -24.95,
      "ret1y": -29.57,
      "ret2y": -15.09,
      "ret3y": 2.0
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0504,
      "ret1w": -0.98,
      "ret1m": -1.02,
      "ret3m": -11.79,
      "ret6m": -24.87,
      "ret1y": -29.43,
      "ret2y": -14.76,
      "ret3y": 2.81
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0416,
      "ret1w": -0.25,
      "ret1m": -1.11,
      "ret3m": -2.14,
      "ret6m": -5.06,
      "ret1y": -5.36,
      "ret2y": -4.2,
      "ret3y": 1.83
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.017,
      "ret1w": -0.26,
      "ret1m": -1.1,
      "ret3m": -2.1,
      "ret6m": -4.92,
      "ret1y": -5.08,
      "ret2y": -3.63,
      "ret3y": 3.06
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.706,
      "ret1w": -0.72,
      "ret1m": -2.59,
      "ret3m": 0.41,
      "ret6m": -4.19,
      "ret1y": -12.42,
      "ret2y": -14.7,
      "ret3y": -1.55
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7245,
      "ret1w": -0.73,
      "ret1m": -2.58,
      "ret3m": 0.44,
      "ret6m": -4.09,
      "ret1y": -12.2,
      "ret2y": -14.28,
      "ret3y": -0.56
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.0235,
      "ret1w": -0.94,
      "ret1m": -0.18,
      "ret3m": -18.28,
      "ret6m": -28.57,
      "ret1y": -27.91,
      "ret2y": 6.81,
      "ret3y": 71.21
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3501,
      "ret1w": -1.9,
      "ret1m": -2.74,
      "ret3m": -1.38,
      "ret6m": -9.03,
      "ret1y": -12.61,
      "ret2y": 8.6,
      "ret3y": 44.3
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7225,
      "ret1w": -2.52,
      "ret1m": -2.22,
      "ret3m": 2.57,
      "ret6m": -4.6,
      "ret1y": -20.0,
      "ret2y": -14.21,
      "ret3y": -4.25
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0131,
      "ret1w": -2.87,
      "ret1m": -1.73,
      "ret3m": 1.71,
      "ret6m": -7.27,
      "ret1y": -6.26,
      "ret2y": 30.25,
      "ret3y": 86.01
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4538,
      "ret1w": 0.09,
      "ret1m": -1.69,
      "ret3m": -6.49,
      "ret6m": -13.48,
      "ret1y": -16.26,
      "ret2y": -1.33,
      "ret3y": 19.42
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4628,
      "ret1w": 0.09,
      "ret1m": -1.7,
      "ret3m": -6.47,
      "ret6m": -13.41,
      "ret1y": -16.1,
      "ret2y": -0.94,
      "ret3y": 20.36
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2529,
      "ret1w": -0.14,
      "ret1m": -0.33,
      "ret3m": -1.67,
      "ret6m": -1.8,
      "ret1y": -2.85,
      "ret2y": -2.78,
      "ret3y": 0.05
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0575,
      "ret1w": -0.36,
      "ret1m": -2.53,
      "ret3m": -4.45,
      "ret6m": -7.82,
      "ret1y": -7.38,
      "ret2y": -11.23,
      "ret3y": -0.92
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1668,
      "ret1w": 0.21,
      "ret1m": -0.56,
      "ret3m": -8.68,
      "ret6m": -20.09,
      "ret1y": -31.75,
      "ret2y": -23.21,
      "ret3y": -18.84
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7489,
      "ret1w": -0.95,
      "ret1m": -0.01,
      "ret3m": -4.59,
      "ret6m": -8.91,
      "ret1y": -14.79,
      "ret2y": -2.95,
      "ret3y": 24.42
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.31,
      "ret1w": 0.17,
      "ret1m": 6.01,
      "ret3m": -18.55,
      "ret6m": -32.42,
      "ret1y": -42.44,
      "ret2y": 7.89,
      "ret3y": 68.24
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5589,
      "ret1w": -0.1,
      "ret1m": 0.79,
      "ret3m": 0.37,
      "ret6m": 6.82,
      "ret1y": 4.65,
      "ret2y": 0.14,
      "ret3y": 0.96
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5708,
      "ret1w": -3.42,
      "ret1m": 0.25,
      "ret3m": 3.8,
      "ret6m": -13.63,
      "ret1y": -26.05,
      "ret2y": -0.35,
      "ret3y": -11.91
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.455,
      "ret1w": -1.23,
      "ret1m": 4.99,
      "ret3m": -21.89,
      "ret6m": -37.08,
      "ret1y": -22.75,
      "ret2y": 25.08,
      "ret3y": 114.25
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0519,
      "ret1w": -0.08,
      "ret1m": -0.03,
      "ret3m": -0.68,
      "ret6m": -1.51,
      "ret1y": -1.91,
      "ret2y": -0.86,
      "ret3y": 2.19
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0999,
      "ret1w": -0.07,
      "ret1m": -0.03,
      "ret3m": -0.7,
      "ret6m": -1.48,
      "ret1y": -1.82,
      "ret2y": -0.66,
      "ret3y": 2.82
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0672,
      "ret1w": -0.03,
      "ret1m": -0.05,
      "ret3m": 0.06,
      "ret6m": 0.31,
      "ret1y": 0.62,
      "ret2y": 1.54,
      "ret3y": 2.83
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.102,
      "ret1w": -0.02,
      "ret1m": -0.05,
      "ret3m": 0.11,
      "ret6m": 0.36,
      "ret1y": 0.69,
      "ret2y": 1.5,
      "ret3y": 3.81
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1119,
      "ret1w": -0.02,
      "ret1m": -0.04,
      "ret3m": 0.13,
      "ret6m": 0.42,
      "ret1y": 0.81,
      "ret2y": 1.71,
      "ret3y": 4.24
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0782,
      "ret1w": -0.01,
      "ret1m": -0.02,
      "ret3m": 0.07,
      "ret6m": 0.24,
      "ret1y": 0.6,
      "ret2y": 1.45,
      "ret3y": 2.86
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0932,
      "ret1w": -0.02,
      "ret1m": -0.03,
      "ret3m": 0.09,
      "ret6m": 0.3,
      "ret1y": 0.74,
      "ret2y": 1.76,
      "ret3y": 3.5
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0088,
      "ret1w": -0.46,
      "ret1m": -0.68,
      "ret3m": -2.96,
      "ret6m": -6.11,
      "ret1y": -8.18,
      "ret2y": -0.86,
      "ret3y": 4.83
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1654,
      "ret1w": -0.53,
      "ret1m": -0.36,
      "ret3m": -2.57,
      "ret6m": -5.03,
      "ret1y": -7.85,
      "ret2y": -3.37,
      "ret3y": 0.34
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.016,
      "ret1w": -0.45,
      "ret1m": -0.66,
      "ret3m": -2.92,
      "ret6m": -6.02,
      "ret1y": -8.0,
      "ret2y": -0.47,
      "ret3y": 5.67
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.045,
      "ret1w": -0.04,
      "ret1m": -0.05,
      "ret3m": 0.06,
      "ret6m": 0.37,
      "ret1y": 0.77,
      "ret2y": 1.67,
      "ret3y": 3.57
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1018,
      "ret1w": -0.2,
      "ret1m": -0.27,
      "ret3m": -3.45,
      "ret6m": -6.11,
      "ret1y": -9.16,
      "ret2y": -7.01,
      "ret3y": -0.79
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2013,
      "ret1w": -0.15,
      "ret1m": -0.57,
      "ret3m": -0.31,
      "ret6m": -1.63,
      "ret1y": -2.72,
      "ret2y": 0.42,
      "ret3y": 8.87
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.121,
      "ret1w": -0.18,
      "ret1m": -0.16,
      "ret3m": -0.59,
      "ret6m": -1.92,
      "ret1y": -2.9,
      "ret2y": 0.94,
      "ret3y": 6.34
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1923,
      "ret1w": -0.18,
      "ret1m": -0.14,
      "ret3m": -0.55,
      "ret6m": -1.81,
      "ret1y": -2.7,
      "ret2y": 1.35,
      "ret3y": 7.23
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.955,
      "ret1w": 6.31,
      "ret1m": -1.16,
      "ret3m": -20.66,
      "ret6m": -14.33,
      "ret1y": -21.71,
      "ret2y": 36.62,
      "ret3y": 89.81
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9312,
      "ret1w": 1.12,
      "ret1m": -0.48,
      "ret3m": -3.69,
      "ret6m": -1.57,
      "ret1y": 0.18,
      "ret2y": 4.1,
      "ret3y": 25.82
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6528,
      "ret1w": -0.57,
      "ret1m": -1.07,
      "ret3m": -7.31,
      "ret6m": -13.77,
      "ret1y": -23.98,
      "ret2y": -11.55,
      "ret3y": 15.24
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2274,
      "ret1w": 1.88,
      "ret1m": -1.1,
      "ret3m": -10.21,
      "ret6m": -6.42,
      "ret1y": -3.06,
      "ret2y": 9.28,
      "ret3y": 35.91
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.923,
      "ret1w": 0.04,
      "ret1m": -0.32,
      "ret3m": 0.95,
      "ret6m": -1.52,
      "ret1y": -2.57,
      "ret2y": -5.42,
      "ret3y": -2.84
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.3181,
      "ret1w": 2.0,
      "ret1m": -0.26,
      "ret3m": -14.39,
      "ret6m": -12.46,
      "ret1y": -17.64,
      "ret2y": 20.25,
      "ret3y": 56.03
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.454,
      "ret1w": 0.93,
      "ret1m": -0.07,
      "ret3m": -2.75,
      "ret6m": -3.76,
      "ret1y": -3.97,
      "ret2y": -0.27,
      "ret3y": 11.41
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.791,
      "ret1w": 1.02,
      "ret1m": -0.13,
      "ret3m": -14.02,
      "ret6m": -18.2,
      "ret1y": -26.69,
      "ret2y": -29.25,
      "ret3y": -20.34
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.3889,
      "ret1w": 3.59,
      "ret1m": 0.13,
      "ret3m": -18.26,
      "ret6m": -15.07,
      "ret1y": -21.03,
      "ret2y": 34.97,
      "ret3y": 101.1
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5001,
      "ret1w": 0.97,
      "ret1m": -0.21,
      "ret3m": -5.52,
      "ret6m": -2.89,
      "ret1y": -3.98,
      "ret2y": 18.05,
      "ret3y": 43.95
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.582,
      "ret1w": 1.14,
      "ret1m": -0.37,
      "ret3m": -8.74,
      "ret6m": -5.69,
      "ret1y": -6.88,
      "ret2y": 9.34,
      "ret3y": 39.41
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.202,
      "ret1w": 1.44,
      "ret1m": 0.81,
      "ret3m": -6.88,
      "ret6m": -7.31,
      "ret1y": -11.51,
      "ret2y": 0.07,
      "ret3y": 20.56
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.306,
      "ret1w": 0.0,
      "ret1m": -0.68,
      "ret3m": 6.27,
      "ret6m": 0.46,
      "ret1y": -1.43,
      "ret2y": 4.73,
      "ret3y": -6.78
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.9,
      "ret1w": -0.78,
      "ret1m": -1.45,
      "ret3m": -4.71,
      "ret6m": -9.31,
      "ret1y": -16.92,
      "ret2y": -8.74,
      "ret3y": 34.76
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.4658,
      "ret1w": 2.25,
      "ret1m": -0.05,
      "ret3m": -14.16,
      "ret6m": -13.51,
      "ret1y": -14.12,
      "ret2y": 12.85,
      "ret3y": 39.54
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0136,
      "ret1w": -0.08,
      "ret1m": -0.09,
      "ret3m": 0.3,
      "ret6m": 0.67,
      "ret1y": 1.21,
      "ret2y": 2.43,
      "ret3y": 3.81
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0013,
      "ret1w": -0.08,
      "ret1m": -0.09,
      "ret3m": 0.31,
      "ret6m": 0.7,
      "ret1y": 1.23,
      "ret2y": 2.5,
      "ret3y": 3.98
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.219,
      "ret1w": -0.81,
      "ret1m": -1.77,
      "ret3m": -6.45,
      "ret6m": -17.3,
      "ret1y": -22.36,
      "ret2y": -15.23,
      "ret3y": -4.69
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.296,
      "ret1w": -1.29,
      "ret1m": -1.71,
      "ret3m": -10.17,
      "ret6m": -21.88,
      "ret1y": -25.91,
      "ret2y": -14.1,
      "ret3y": 2.78
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4233,
      "ret1w": -2.16,
      "ret1m": -3.95,
      "ret3m": -8.83,
      "ret6m": -16.36,
      "ret1y": -23.31,
      "ret2y": -6.29,
      "ret3y": 31.18
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8571,
      "ret1w": -0.87,
      "ret1m": -1.42,
      "ret3m": -7.63,
      "ret6m": -14.42,
      "ret1y": -16.3,
      "ret2y": -6.67,
      "ret3y": 7.0
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9117,
      "ret1w": -0.88,
      "ret1m": -1.42,
      "ret3m": -7.6,
      "ret6m": -14.34,
      "ret1y": -16.13,
      "ret2y": -6.3,
      "ret3y": 7.86
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7193,
      "ret1w": -1.52,
      "ret1m": -1.86,
      "ret3m": -6.48,
      "ret6m": -17.08,
      "ret1y": -23.29,
      "ret2y": -7.73,
      "ret3y": 6.72
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5939,
      "ret1w": -0.74,
      "ret1m": -1.61,
      "ret3m": -5.25,
      "ret6m": -12.81,
      "ret1y": -16.46,
      "ret2y": -10.95,
      "ret3y": 1.84
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4597,
      "ret1w": -1.44,
      "ret1m": -2.47,
      "ret3m": -3.73,
      "ret6m": -9.29,
      "ret1y": -15.15,
      "ret2y": -2.35,
      "ret3y": 18.0
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5352,
      "ret1w": -0.99,
      "ret1m": -1.22,
      "ret3m": -11.64,
      "ret6m": -25.54,
      "ret1y": -28.49,
      "ret2y": -14.21,
      "ret3y": 5.83
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.995,
      "ret1w": -0.75,
      "ret1m": -2.23,
      "ret3m": -3.16,
      "ret6m": -8.1,
      "ret1y": -10.18,
      "ret2y": -10.39,
      "ret3y": 3.43
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5008,
      "ret1w": 0.32,
      "ret1m": -0.36,
      "ret3m": 3.01,
      "ret6m": -1.66,
      "ret1y": 2.25,
      "ret2y": 6.07,
      "ret3y": 30.62
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3001,
      "ret1w": 2.2,
      "ret1m": -0.18,
      "ret3m": -7.63,
      "ret6m": -4.5,
      "ret1y": -4.54,
      "ret2y": 4.63,
      "ret3y": 21.91
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2382,
      "ret1w": -1.43,
      "ret1m": -2.22,
      "ret3m": -10.69,
      "ret6m": -22.03,
      "ret1y": -26.8,
      "ret2y": -15.25,
      "ret3y": 0.67
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9772,
      "ret1w": 0.53,
      "ret1m": 4.22,
      "ret3m": -10.82,
      "ret6m": -18.74,
      "ret1y": -23.02,
      "ret2y": -12.53,
      "ret3y": 7.72
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9808,
      "ret1w": 0.54,
      "ret1m": 4.24,
      "ret3m": -10.67,
      "ret6m": -18.54,
      "ret1y": -22.88,
      "ret2y": -12.41,
      "ret3y": 7.48
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2414,
      "ret1w": 0.67,
      "ret1m": 0.96,
      "ret3m": -6.49,
      "ret6m": -12.57,
      "ret1y": -21.75,
      "ret2y": -10.97,
      "ret3y": 5.51
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2708,
      "ret1w": 0.67,
      "ret1m": 0.97,
      "ret3m": -6.45,
      "ret6m": -12.48,
      "ret1y": -21.59,
      "ret2y": -10.61,
      "ret3y": 6.35
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7292,
      "ret1w": 1.31,
      "ret1m": 1.73,
      "ret3m": -7.89,
      "ret6m": -15.58,
      "ret1y": -24.3,
      "ret2y": -8.56,
      "ret3y": 15.98
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1585,
      "ret1w": -0.24,
      "ret1m": -0.2,
      "ret3m": -0.07,
      "ret6m": -0.89,
      "ret1y": -1.06,
      "ret2y": 0.84,
      "ret3y": 4.79
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1789,
      "ret1w": -0.25,
      "ret1m": -0.19,
      "ret3m": -0.05,
      "ret6m": -0.82,
      "ret1y": -0.92,
      "ret2y": 1.15,
      "ret3y": 5.43
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0879,
      "ret1w": -0.02,
      "ret1m": -0.04,
      "ret3m": 0.09,
      "ret6m": 0.4,
      "ret1y": 0.78,
      "ret2y": 1.85,
      "ret3y": 3.42
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4114,
      "ret1w": -0.06,
      "ret1m": -0.06,
      "ret3m": 0.06,
      "ret6m": 0.06,
      "ret1y": 0.14,
      "ret2y": 0.49,
      "ret3y": 4.49
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4648,
      "ret1w": -0.05,
      "ret1m": -0.06,
      "ret3m": 0.09,
      "ret6m": 0.16,
      "ret1y": 0.34,
      "ret2y": 0.9,
      "ret3y": 5.33
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8982,
      "ret1w": -0.97,
      "ret1m": -0.08,
      "ret3m": -4.73,
      "ret6m": -11.23,
      "ret1y": -3.98,
      "ret2y": 8.96,
      "ret3y": 32.42
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.041,
      "ret1w": -1.35,
      "ret1m": 0.08,
      "ret3m": -6.94,
      "ret6m": -17.16,
      "ret1y": -16.49,
      "ret2y": -9.67,
      "ret3y": 11.48
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 4.0547
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.8623
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 3.55
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.7561
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.9904
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.6597
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 5.2924
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.685
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.1367
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.622
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.146
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.274
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.266
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.8971
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.448
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.5186
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.574
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.945
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.3746
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.2135
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.9867
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.0504
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.0416
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.017
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.706
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.7245
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.0235
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.3501
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.7225
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 4.0131
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.4538
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.4628
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.2529
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.0575
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.1668
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.7489
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 2.31
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 1.5589
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 0.5708
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-12",
        "nav": 9.455
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 4.0547,
      "price": 4.0547,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.8623,
      "price": 2.8623,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.4,
      "nav": 3.55,
      "price": 3.55,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.1,
      "nav": 0.7561,
      "price": 0.7561,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.9904,
      "price": 1.9904,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.17,
      "nav": 2.6597,
      "price": 2.6597,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.22,
      "nav": 5.2924,
      "price": 5.2924,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.685,
      "price": 1.685,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.1367,
      "price": 1.1367,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.622,
      "price": 2.622,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.146,
      "price": 1.146,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.274,
      "price": 2.274,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 1.266,
      "price": 1.266,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.8971,
      "price": 1.8971,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.448,
      "price": 1.448,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 1.5186,
      "price": 1.5186,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.574,
      "price": 2.574,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 0.945,
      "price": 0.945,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.3746,
      "price": 2.3746,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.2135,
      "price": 1.2135,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.42,
      "sharpe": -3.76,
      "calmar": -3.76
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 0.8,
      "sharpe": -7.66,
      "calmar": -7.66
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 11.94,
      "sharpe": -2.86,
      "calmar": -2.86
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.04,
      "sharpe": 0.46,
      "calmar": 0.46
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 10.43,
      "sharpe": -2.57,
      "calmar": -2.57
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 4.98,
      "sharpe": -2.78,
      "calmar": -2.78
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.52,
      "sharpe": -0.81,
      "calmar": -0.81
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.62,
      "sharpe": -3.11,
      "calmar": -3.11
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.36,
      "sharpe": -3.02,
      "calmar": -3.02
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.51,
      "sharpe": -3.99,
      "calmar": -3.99
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 5.18,
      "sharpe": 0.08,
      "calmar": 0.08
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.29,
      "sharpe": -1.82,
      "calmar": -1.82
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 3.44,
      "sharpe": -8.29,
      "calmar": -8.29
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 4.68,
      "sharpe": 0.42,
      "calmar": 0.42
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.22,
      "sharpe": -3.84,
      "calmar": -3.84
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.19,
      "sharpe": -6.15,
      "calmar": -6.15
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.76,
      "sharpe": -1.04,
      "calmar": -1.04
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 4.02,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.7,
      "sharpe": -0.31,
      "calmar": -0.31
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.24,
      "sharpe": -1.87,
      "calmar": -1.87
    }
  ],
  "news": [
    {
      "title": "世界气象组织（WMO）报告显示，2025年全球地表平均温度较工业化前水平高出约1.44摄氏度，2015—2025年成为有观测记录以来最暖的11年。气候压力仍在加剧，2026年9月已正式形成超强厄尔尼诺事件，预计11—12月达到峰值，全球气温上行压力进一步加大。全球变暖趋势持续，气候风险不断抬升，这是一场关乎人类长远发展的系统性挑战。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:39",
      "impact": "neutral"
    },
    {
      "title": "近期，广东省地方金融管理局发布多份小额贷款公司清退批复，包括同意注销佛山市融易小额贷款有限公司，以及同意注销惠州市仲恺TCL智融科技小额贷款有限责任公司、广州拉卡拉网络小额贷款有限责任公司（以下简称“广州拉卡拉小贷”）小额贷款业务资质。拉卡拉收缩相关业务广州拉卡拉小贷由上市支付机构拉卡拉支付股份有限公司（以下简称“拉卡拉”）早年孵化设立。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:19",
      "impact": "neutral"
    },
    {
      "title": "11月10日晚，在东莞海事部门的保障下，“明帆”轮在东莞港三期码头完成147辆新能源汽车装船作业。这批小型新能源汽车全部采用集装箱装载运输，随着船舶缓缓离泊，从东莞港启程驶向古巴。随着全球绿色低碳转型深入推进，以新能源汽车、锂电池、光伏产品为代表的“新三样”加快拓展国际市场。产品出口规模持续扩大，也对危险货物申报、集装箱装载和海上运输安全保障提出了更高要求。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:58",
      "impact": "neutral"
    },
    {
      "title": "上海市先进制造业大会11月12日举行，上海市委书记陈吉宁出席会议并讲话。陈吉宁指出，要结合实施“模塑申城”行动，大力发展新一代智能制造，打造全球领先的智能制造体系。坚持体系化转型，推动工业龙头企业与人工智能企业紧密协作，在生产制造核心环节部署高水平的具身机器人、自动化设备和智能体，带动工业设计、设备运维、营销运营、供应链管理等全环节全流程转型。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:00",
      "impact": "neutral"
    },
    {
      "title": "太空经济已成为当下最受关注的新兴产业之一。十年间，商业航天从技术验证走向工程应用。一枚火箭发射、一颗卫星入轨，背后是人才、技术、资源与产业链的上下协同；把这些环节串起来的，是一条可持续运转的产业链条。让这条链条持续运转，是时代给出的命题，需要产业合力作答。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:30",
      "impact": "neutral"
    },
    {
      "title": "国内商品期市夜盘收盘多数上涨，化工品涨幅居前，DCE乙二醇涨3.32%；非金属建材全部上涨，CZCE玻璃涨2.93%；能源品全部上涨，SHFE燃油涨1.11%；农副产品跌幅居前，CZCE白糖跌0.87%；油脂油料多数下跌，DCE豆粕跌0.76%；黑色系多数下跌，DCE铁矿石跌0.52%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:01",
      "impact": "neutral"
    },
    {
      "title": "“在平台出现问题前，我本计划在10月取出一笔到期的10万元‘存款’，期满后发现自动续投了，原本以为是我自己误操作了。现在回想，无法取现在当时就有了苗头。”11月12日，鲸鱼App用户王雪（化名）告诉北京商报记者。11月以来，鲸鱼App无法提现的风波持续发酵，其运营主体厦门吉才神网络借贷信息中介服务有限公司（以下简称“厦门吉才神”）也已进入失联状态。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:59",
      "impact": "neutral"
    },
    {
      "title": "北京商报讯（记者廖蒙）关于存款结构的变化，人民银行最新说明。11月11日，人民银行发布《2026年第三季度中国货币政策执行报告》（以下简称《报告》）。《报告》首个专栏聚焦“我国银行存款结构的变化特征”，以近十年数据说明，在利率下行与融资结构变化之下，银行存款的持有主体、来源和期限正在同时改写，我国存款结构变化呈现新特征。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:45",
      "impact": "neutral"
    },
    {
      "title": "北京加强国际交往中心能力建设，让国际组织不仅能“落下来”更能“长起来”",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:26",
      "impact": "neutral"
    },
    {
      "title": "日前，桐乡凤凰湖畔，190米高的桐乡第一高楼——振石国际酒店首次亮起年会灯光。来自全球近20个国家和地区的千余名嘉宾走进这里，参加中国·振石第十四届国际年会。年会开幕式上，振石国际酒店正式开业。桐乡这座县级市，又多了一个把客人留下来的新空间。振石国际酒店临桐乡凤凰湖而立。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:26",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 46,
    "label": "中性",
    "upDownRatio": "2,138/1,930",
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
