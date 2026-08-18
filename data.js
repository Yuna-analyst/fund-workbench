// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-18 11:01:23
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-18 11:01 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-18",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3990.3,
      "change": 7.65,
      "changePct": "+0.19%",
      "high": 3994.18,
      "low": 3955.6,
      "volume": 511234287.0,
      "amount": 1135187670000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14622.5,
      "change": -81.77,
      "changePct": "-0.56%",
      "high": 14733.9,
      "low": 14459.72,
      "volume": 674616023.0,
      "amount": 1265587020000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3705.56,
      "change": -34.6,
      "changePct": "-0.93%",
      "high": 3747.53,
      "low": 3662.45,
      "volume": 196213815.0,
      "amount": 606082770000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1790.87,
      "change": 2.02,
      "changePct": "+0.11%",
      "high": 1798.78,
      "low": 1753.97,
      "volume": 11179921.0,
      "amount": 122525790000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4725.81,
      "change": -15.29,
      "changePct": "-0.32%",
      "high": 4744.01,
      "low": 4687.53,
      "volume": 204245514.0,
      "amount": 619828730000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 8177.18,
      "change": -7.46,
      "changePct": "-0.09%",
      "high": 8211.31,
      "low": 8069.82,
      "volume": 181523209.0,
      "amount": 458687600000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.21万亿",
      "label": "成交额",
      "rawAmount": 4207899580000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,786/1,606",
      "label": "涨/跌家数",
      "rawUp": 2786,
      "rawDown": 1606,
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
    "totalInflow": 11.2,
    "totalOutflow": 0,
    "netFlow": 11.2,
    "netFlowTrend": [
      2.24,
      4.48,
      6.72,
      8.96,
      11.2
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
      "inflow": 3.02,
      "pct": 0.75
    },
    {
      "name": "芯片",
      "inflow": 2.54,
      "pct": 0.08
    },
    {
      "name": "煤炭",
      "inflow": 2.37,
      "pct": 1.12
    },
    {
      "name": "白酒",
      "inflow": 1.29,
      "pct": 0.7
    },
    {
      "name": "光伏",
      "inflow": 0.85,
      "pct": 0.45
    },
    {
      "name": "农业",
      "inflow": 0.7,
      "pct": 3.05
    },
    {
      "name": "家电",
      "inflow": 0.18,
      "pct": 0.49
    },
    {
      "name": "钢铁",
      "inflow": 0.18,
      "pct": 0.43
    },
    {
      "name": "食品",
      "inflow": 0.07,
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
      "name": "医疗",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "地产",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.19
    },
    {
      "name": "计算机",
      "inflow": -0.15,
      "pct": -0.73
    },
    {
      "name": "电子",
      "inflow": -0.2,
      "pct": -0.87
    },
    {
      "name": "新能源",
      "inflow": -0.44,
      "pct": -0.3
    },
    {
      "name": "军工",
      "inflow": -0.72,
      "pct": -0.26
    },
    {
      "name": "有色",
      "inflow": -2.82,
      "pct": -0.77
    },
    {
      "name": "创新药",
      "inflow": -3.0,
      "pct": -0.86
    }
  ],
  "sectors": [
    {
      "name": "农业",
      "code": "159825",
      "price": 0.743,
      "changePct": 3.05,
      "change": 0.022,
      "turnover": 2.32
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.269,
      "changePct": 1.12,
      "change": 0.014,
      "turnover": 7.9
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.802,
      "changePct": 0.75,
      "change": 0.006,
      "turnover": 10.06
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.433,
      "changePct": 0.7,
      "change": 0.003,
      "turnover": 4.3
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.443,
      "changePct": 0.49,
      "change": 0.007,
      "turnover": 0.61
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.89,
      "changePct": 0.45,
      "change": 0.004,
      "turnover": 2.84
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.175,
      "changePct": 0.43,
      "change": 0.005,
      "turnover": 0.59
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.504,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 0.22
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.264,
      "changePct": 0.08,
      "change": 0.001,
      "turnover": 8.47
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.132,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 15.15
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.401,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 3.9
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.353,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 6.16
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.233,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.75
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.039,
      "changePct": -0.19,
      "change": -0.002,
      "turnover": 0.06
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.169,
      "changePct": -0.26,
      "change": -0.003,
      "turnover": 2.39
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.616,
      "changePct": -0.3,
      "change": -0.008,
      "turnover": 1.48
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.229,
      "changePct": -0.73,
      "change": -0.009,
      "turnover": 0.51
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.933,
      "changePct": -0.77,
      "change": -0.015,
      "turnover": 9.41
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.919,
      "changePct": -0.86,
      "change": -0.008,
      "turnover": 10.01
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.909,
      "changePct": -0.87,
      "change": -0.008,
      "turnover": 0.68
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.684,
      "changePct": -0.88,
      "change": -0.015,
      "turnover": 1.52
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.515,
      "changePct": -1.34,
      "change": -0.007,
      "turnover": 10.64
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.709,
      "changePct": -1.39,
      "change": -0.01,
      "turnover": 37.44
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.101,
      "changePct": -1.43,
      "change": -0.016,
      "turnover": 11.85
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.1,
      "changePct": -1.43,
      "change": -0.016,
      "turnover": 1.32
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.768,
      "changePct": -1.5,
      "change": -0.027,
      "turnover": 2.35
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.098,
      "changePct": -1.52,
      "change": -0.017,
      "turnover": 2.45
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.838,
      "changePct": -1.64,
      "change": -0.014,
      "turnover": 3.29
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.616,
      "changePct": -0.3,
      "amount": 1.48,
      "netFlow": -0.37
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.401,
      "changePct": 0.0,
      "amount": 3.9,
      "netFlow": -0.98
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.996,
      "changePct": -0.36,
      "amount": 5.36,
      "netFlow": -1.34
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.646,
      "changePct": -0.28,
      "amount": 6.79,
      "netFlow": -1.7
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.515,
      "changePct": -1.34,
      "amount": 10.64,
      "netFlow": -2.66
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.047,
      "changePct": -0.16,
      "amount": 13.73,
      "netFlow": -3.43
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.132,
      "changePct": 0.0,
      "amount": 15.15,
      "netFlow": -3.79
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 8.185,
      "changePct": -0.15,
      "amount": 25.06,
      "netFlow": -6.26
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.787,
      "changePct": -0.29,
      "amount": 31.43,
      "netFlow": -7.86
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.888,
      "changePct": 0.0,
      "amount": 60.63,
      "netFlow": -15.16
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.787,
      "changePct": -0.29,
      "amount": 31.43,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.047,
      "changePct": -0.16,
      "amount": 13.73,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 8.185,
      "changePct": -0.15,
      "amount": 25.06,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.996,
      "changePct": -0.36,
      "amount": 5.36,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.646,
      "changePct": -0.28,
      "amount": 6.79,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "农业",
      "turnover": 2.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 10.06,
      "percentile": 55,
      "level": "中",
      "status": "适中"
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
      "turnover": 0.61,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 2.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 8.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 15.15,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 3.9,
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
      "name": "地产",
      "turnover": 0.75,
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
      "name": "军工",
      "turnover": 2.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.48,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 9.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 10.01,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "电子",
      "turnover": 0.68,
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
      "nav": 4.7172,
      "ret1w": 5.18,
      "ret1m": 6.73,
      "ret3m": 10.46,
      "ret6m": -7.81,
      "ret1y": 6.75,
      "ret2y": 45.95,
      "ret3y": 171.37
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.4742,
      "ret1w": 4.62,
      "ret1m": 5.97,
      "ret3m": 5.46,
      "ret6m": -8.16,
      "ret1y": 15.78,
      "ret2y": 23.71,
      "ret3y": 82.39
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.9244,
      "ret1w": 6.06,
      "ret1m": 18.7,
      "ret3m": 17.63,
      "ret6m": 4.42,
      "ret1y": 49.22,
      "ret2y": 134.15,
      "ret3y": 288.87
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7032,
      "ret1w": -0.44,
      "ret1m": -2.81,
      "ret3m": 3.02,
      "ret6m": -2.59,
      "ret1y": -11.42,
      "ret2y": -13.46,
      "ret3y": 7.51
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.2808,
      "ret1w": 1.22,
      "ret1m": -0.74,
      "ret3m": 11.19,
      "ret6m": -16.97,
      "ret1y": -23.65,
      "ret2y": -5.71,
      "ret3y": 23.49
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7763,
      "ret1w": 1.11,
      "ret1m": -2.77,
      "ret3m": 9.63,
      "ret6m": -16.25,
      "ret1y": -29.7,
      "ret2y": -7.95,
      "ret3y": 35.4
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5427,
      "ret1w": 0.85,
      "ret1m": -0.41,
      "ret3m": 5.76,
      "ret6m": -0.78,
      "ret1y": -5.26,
      "ret2y": 18.83,
      "ret3y": 57.59
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.985,
      "ret1w": 3.39,
      "ret1m": 3.39,
      "ret3m": 11.45,
      "ret6m": -5.92,
      "ret1y": -1.78,
      "ret2y": 15.21,
      "ret3y": 75.82
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.4147,
      "ret1w": 2.75,
      "ret1m": 2.98,
      "ret3m": 9.09,
      "ret6m": -0.56,
      "ret1y": 4.76,
      "ret2y": 21.11,
      "ret3y": 53.07
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.738,
      "ret1w": 3.98,
      "ret1m": 5.41,
      "ret3m": 9.2,
      "ret6m": 12.35,
      "ret1y": 45.96,
      "ret2y": 132.03,
      "ret3y": 303.67
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.143,
      "ret1w": 0.7,
      "ret1m": -0.7,
      "ret3m": 9.59,
      "ret6m": 4.1,
      "ret1y": -6.69,
      "ret2y": -10.35,
      "ret3y": 4.1
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.487,
      "ret1w": -0.48,
      "ret1m": 1.14,
      "ret3m": 10.34,
      "ret6m": -3.94,
      "ret1y": -13.01,
      "ret2y": -10.12,
      "ret3y": 37.86
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.9149,
      "ret1w": 5.14,
      "ret1m": 4.07,
      "ret3m": 1.24,
      "ret6m": -35.57,
      "ret1y": -42.84,
      "ret2y": -15.28,
      "ret3y": 33.47
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9217,
      "ret1w": -0.62,
      "ret1m": -1.81,
      "ret3m": 3.44,
      "ret6m": 7.86,
      "ret1y": -4.45,
      "ret2y": 0.26,
      "ret3y": 8.64
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.7202,
      "ret1w": 2.56,
      "ret1m": 3.25,
      "ret3m": 11.53,
      "ret6m": -3.15,
      "ret1y": 0.57,
      "ret2y": 17.77,
      "ret3y": 76.11
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.6013,
      "ret1w": 4.83,
      "ret1m": 10.15,
      "ret3m": 3.32,
      "ret6m": -1.99,
      "ret1y": 45.3,
      "ret2y": 118.45,
      "ret3y": 244.86
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5392,
      "ret1w": 0.44,
      "ret1m": -0.62,
      "ret3m": 5.3,
      "ret6m": -5.21,
      "ret1y": -10.49,
      "ret2y": -5.89,
      "ret3y": 21.94
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.122,
      "ret1w": 2.09,
      "ret1m": 1.91,
      "ret3m": 8.51,
      "ret6m": 15.79,
      "ret1y": 10.98,
      "ret2y": -3.36,
      "ret3y": 13.45
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3076,
      "ret1w": -0.35,
      "ret1m": -2.22,
      "ret3m": 2.04,
      "ret6m": -3.17,
      "ret1y": -8.66,
      "ret2y": 6.74,
      "ret3y": 13.79
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3581,
      "ret1w": 2.54,
      "ret1m": 2.77,
      "ret3m": 12.48,
      "ret6m": 3.39,
      "ret1y": 4.49,
      "ret2y": 27.69,
      "ret3y": 81.77
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.3472,
      "ret1w": 2.93,
      "ret1m": 2.42,
      "ret3m": 7.24,
      "ret6m": -1.96,
      "ret1y": 0.04,
      "ret2y": 31.72,
      "ret3y": 54.41
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.4329,
      "ret1w": 2.94,
      "ret1m": 2.43,
      "ret3m": 7.29,
      "ret6m": -1.86,
      "ret1y": 0.23,
      "ret2y": 32.25,
      "ret3y": 55.67
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.1012,
      "ret1w": 0.54,
      "ret1m": 0.32,
      "ret3m": 0.59,
      "ret6m": 0.49,
      "ret1y": 2.05,
      "ret2y": 3.19,
      "ret3y": 9.79
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0737,
      "ret1w": 0.54,
      "ret1m": 0.33,
      "ret3m": 0.65,
      "ret6m": 0.66,
      "ret1y": 2.35,
      "ret2y": 3.82,
      "ret3y": 11.11
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7322,
      "ret1w": 0.98,
      "ret1m": -1.41,
      "ret3m": 3.05,
      "ret6m": -6.67,
      "ret1y": -12.4,
      "ret2y": -3.82,
      "ret3y": 16.76
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7506,
      "ret1w": 1.0,
      "ret1m": -1.41,
      "ret3m": 3.1,
      "ret6m": -6.55,
      "ret1y": -12.16,
      "ret2y": -3.34,
      "ret3y": 17.93
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.9779,
      "ret1w": 3.51,
      "ret1m": 6.97,
      "ret3m": 3.21,
      "ret6m": 7.66,
      "ret1y": 46.67,
      "ret2y": 104.82,
      "ret3y": 181.09
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.6304,
      "ret1w": 2.18,
      "ret1m": 2.38,
      "ret3m": 7.44,
      "ret6m": 0.19,
      "ret1y": 7.36,
      "ret2y": 40.82,
      "ret3y": 93.16
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7725,
      "ret1w": 2.51,
      "ret1m": 2.34,
      "ret3m": 6.39,
      "ret6m": -12.58,
      "ret1y": -12.86,
      "ret2y": -0.25,
      "ret3y": 22.39
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.4707,
      "ret1w": 2.96,
      "ret1m": 4.99,
      "ret3m": 6.89,
      "ret6m": 5.63,
      "ret1y": 26.22,
      "ret2y": 70.35,
      "ret3y": 158.24
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5292,
      "ret1w": 1.26,
      "ret1m": 0.13,
      "ret3m": -0.58,
      "ret6m": -1.19,
      "ret1y": 3.26,
      "ret2y": 27.83,
      "ret3y": 50.86
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5392,
      "ret1w": 1.26,
      "ret1m": 0.13,
      "ret3m": -0.55,
      "ret6m": -1.1,
      "ret1y": 3.47,
      "ret2y": 28.35,
      "ret3y": 52.06
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2756,
      "ret1w": 0.34,
      "ret1m": -0.37,
      "ret3m": 3.24,
      "ret6m": -0.75,
      "ret1y": -1.2,
      "ret2y": -0.82,
      "ret3y": 0.91
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1488,
      "ret1w": 0.42,
      "ret1m": -0.67,
      "ret3m": 2.41,
      "ret6m": 3.71,
      "ret1y": -4.54,
      "ret2y": 3.27,
      "ret3y": 24.09
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.497,
      "ret1w": 2.49,
      "ret1m": 2.47,
      "ret3m": 5.87,
      "ret6m": -10.28,
      "ret1y": 3.11,
      "ret2y": 0.77,
      "ret3y": 23.92
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9984,
      "ret1w": 0.31,
      "ret1m": -0.83,
      "ret3m": 6.35,
      "ret6m": -5.81,
      "ret1y": -4.77,
      "ret2y": 18.34,
      "ret3y": 45.36
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.553,
      "ret1w": 3.31,
      "ret1m": 5.37,
      "ret3m": -8.29,
      "ret6m": -8.69,
      "ret1y": 48.29,
      "ret2y": 127.76,
      "ret3y": 219.51
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4572,
      "ret1w": 0.05,
      "ret1m": -0.63,
      "ret3m": 0.11,
      "ret6m": -1.25,
      "ret1y": -0.49,
      "ret2y": -3.2,
      "ret3y": 7.65
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6827,
      "ret1w": 2.32,
      "ret1m": 2.55,
      "ret3m": 11.15,
      "ret6m": -6.71,
      "ret1y": -1.63,
      "ret2y": 13.03,
      "ret3y": 61.47
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.778,
      "ret1w": 3.36,
      "ret1m": 7.04,
      "ret3m": 10.04,
      "ret6m": 30.84,
      "ret1y": 92.32,
      "ret2y": 200.65,
      "ret3y": 383.99
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0709,
      "ret1w": 0.3,
      "ret1m": 0.35,
      "ret3m": 0.31,
      "ret6m": 0.02,
      "ret1y": 0.71,
      "ret2y": 2.02,
      "ret3y": 5.12
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1195,
      "ret1w": 0.3,
      "ret1m": 0.35,
      "ret3m": 0.32,
      "ret6m": 0.08,
      "ret1y": 0.83,
      "ret2y": 2.31,
      "ret3y": 5.85
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.064,
      "ret1w": -0.01,
      "ret1m": 0.02,
      "ret3m": 0.14,
      "ret6m": 0.3,
      "ret1y": 0.76,
      "ret2y": 1.43,
      "ret3y": 2.73
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0983,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.12,
      "ret6m": 0.35,
      "ret1y": 0.81,
      "ret2y": 1.49,
      "ret3y": 3.84
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1075,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": 0.39,
      "ret1y": 0.9,
      "ret2y": 1.69,
      "ret3y": 4.25
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0759,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.18,
      "ret6m": 0.38,
      "ret1y": 0.73,
      "ret2y": 1.33,
      "ret3y": 2.8
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0902,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.19,
      "ret6m": 0.46,
      "ret1y": 0.89,
      "ret2y": 1.64,
      "ret3y": 3.45
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.083,
      "ret1w": 0.88,
      "ret1m": 0.88,
      "ret3m": 2.6,
      "ret6m": -0.82,
      "ret1y": 2.61,
      "ret2y": 9.45,
      "ret3y": 14.25
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2399,
      "ret1w": 1.01,
      "ret1m": 1.32,
      "ret3m": 3.47,
      "ret6m": -1.43,
      "ret1y": 1.82,
      "ret2y": 4.48,
      "ret3y": 9.17
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0897,
      "ret1w": 0.88,
      "ret1m": 0.9,
      "ret3m": 2.63,
      "ret6m": -0.72,
      "ret1y": 2.82,
      "ret2y": 9.89,
      "ret3y": 15.18
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0452,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.13,
      "ret6m": 0.39,
      "ret1y": 0.87,
      "ret2y": 1.68,
      "ret3y": 3.55
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1858,
      "ret1w": 0.81,
      "ret1m": 1.3,
      "ret3m": 1.25,
      "ret6m": -1.92,
      "ret1y": -1.41,
      "ret2y": 3.03,
      "ret3y": 11.93
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.22,
      "ret1w": 0.18,
      "ret1m": -0.19,
      "ret3m": 0.74,
      "ret6m": -0.76,
      "ret1y": 0.09,
      "ret2y": 5.11,
      "ret3y": 15.67
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1481,
      "ret1w": 0.42,
      "ret1m": 0.32,
      "ret3m": 1.27,
      "ret6m": -0.09,
      "ret1y": 1.58,
      "ret2y": 6.13,
      "ret3y": 11.35
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2199,
      "ret1w": 0.42,
      "ret1m": 0.33,
      "ret3m": 1.3,
      "ret6m": 0.02,
      "ret1y": 1.79,
      "ret2y": 6.57,
      "ret3y": 12.28
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.461,
      "ret1w": 1.82,
      "ret1m": 7.61,
      "ret3m": -0.53,
      "ret6m": -1.16,
      "ret1y": 46.93,
      "ret2y": 99.11,
      "ret3y": 149.34
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9922,
      "ret1w": -0.12,
      "ret1m": 0.38,
      "ret3m": 2.34,
      "ret6m": 1.34,
      "ret1y": 9.58,
      "ret2y": 11.79,
      "ret3y": 37.97
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8838,
      "ret1w": 0.79,
      "ret1m": -2.11,
      "ret3m": 1.97,
      "ret6m": -9.99,
      "ret1y": -10.5,
      "ret2y": 6.26,
      "ret3y": 54.49
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4049,
      "ret1w": 0.49,
      "ret1m": 1.26,
      "ret3m": 9.13,
      "ret6m": 9.0,
      "ret1y": 21.82,
      "ret2y": 29.29,
      "ret3y": 77.73
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.937,
      "ret1w": -0.09,
      "ret1m": 0.05,
      "ret3m": -0.39,
      "ret6m": -0.38,
      "ret1y": -3.13,
      "ret2y": -3.09,
      "ret3y": -1.55
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.8068,
      "ret1w": 1.75,
      "ret1m": 6.85,
      "ret3m": 7.03,
      "ret6m": 3.61,
      "ret1y": 33.09,
      "ret2y": 64.93,
      "ret3y": 105.63
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.632,
      "ret1w": -0.15,
      "ret1m": -0.34,
      "ret3m": 2.21,
      "ret6m": 0.98,
      "ret1y": 3.37,
      "ret2y": 6.78,
      "ret3y": 23.13
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.249,
      "ret1w": 0.24,
      "ret1m": -1.89,
      "ret3m": 6.57,
      "ret6m": -0.87,
      "ret1y": -6.44,
      "ret2y": -17.5,
      "ret3y": 116.84
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.981,
      "ret1w": 0.1,
      "ret1m": 1.76,
      "ret3m": 5.37,
      "ret6m": -1.8,
      "ret1y": -11.14,
      "ret2y": -18.59,
      "ret3y": 52.09
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9451,
      "ret1w": 1.24,
      "ret1m": 5.03,
      "ret3m": 2.23,
      "ret6m": -2.71,
      "ret1y": 38.12,
      "ret2y": 88.75,
      "ret3y": 148.32
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5458,
      "ret1w": 0.52,
      "ret1m": 2.59,
      "ret3m": 8.64,
      "ret6m": -1.35,
      "ret1y": 1.64,
      "ret2y": 39.73,
      "ret3y": 51.92
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7117,
      "ret1w": 0.32,
      "ret1m": 2.16,
      "ret3m": 2.27,
      "ret6m": 0.56,
      "ret1y": 7.64,
      "ret2y": 28.95,
      "ret3y": 57.21
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3202,
      "ret1w": 0.09,
      "ret1m": 2.36,
      "ret3m": 3.16,
      "ret6m": -2.73,
      "ret1y": 3.76,
      "ret2y": 19.14,
      "ret3y": 42.62
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.332,
      "ret1w": 0.3,
      "ret1m": 0.3,
      "ret3m": 0.53,
      "ret6m": 1.68,
      "ret1y": 2.23,
      "ret2y": 8.47,
      "ret3y": -2.98
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.098,
      "ret1w": 0.53,
      "ret1m": 0.67,
      "ret3m": 6.93,
      "ret6m": -7.09,
      "ret1y": -14.65,
      "ret2y": 21.2,
      "ret3y": 58.09
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0109,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.24,
      "ret6m": 0.6,
      "ret1y": 1.48,
      "ret2y": 1.95,
      "ret3y": 3.65
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0097,
      "ret1w": 0.03,
      "ret1m": 0.05,
      "ret3m": 0.24,
      "ret6m": 0.57,
      "ret1y": 1.48,
      "ret2y": 2.0,
      "ret3y": 3.83
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.498,
      "ret1w": 1.84,
      "ret1m": 1.9,
      "ret3m": 4.83,
      "ret6m": -3.67,
      "ret1y": 4.24,
      "ret2y": 16.49,
      "ret3y": 42.4
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.993,
      "ret1w": -0.53,
      "ret1m": 2.92,
      "ret3m": 7.31,
      "ret6m": -1.64,
      "ret1y": 6.17,
      "ret2y": 26.18,
      "ret3y": 72.41
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7089,
      "ret1w": 1.99,
      "ret1m": -2.37,
      "ret3m": 13.2,
      "ret6m": -2.94,
      "ret1y": -7.2,
      "ret2y": 39.98,
      "ret3y": 71.58
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1923,
      "ret1w": 1.45,
      "ret1m": 1.06,
      "ret3m": 5.55,
      "ret6m": 0.37,
      "ret1y": 6.2,
      "ret2y": 19.24,
      "ret3y": 45.92
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2547,
      "ret1w": 1.46,
      "ret1m": 1.07,
      "ret3m": 5.58,
      "ret6m": 0.47,
      "ret1y": 6.41,
      "ret2y": 19.72,
      "ret3y": 47.1
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.1074,
      "ret1w": 2.31,
      "ret1m": 1.78,
      "ret3m": 8.42,
      "ret6m": -3.48,
      "ret1y": -0.76,
      "ret2y": 24.12,
      "ret3y": 73.51
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8469,
      "ret1w": 1.52,
      "ret1m": 0.81,
      "ret3m": 4.49,
      "ret6m": -1.6,
      "ret1y": 2.45,
      "ret2y": 13.43,
      "ret3y": 43.06
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.6172,
      "ret1w": 1.42,
      "ret1m": 0.25,
      "ret3m": 6.46,
      "ret6m": -2.98,
      "ret1y": -2.87,
      "ret2y": 18.32,
      "ret3y": 57.47
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.1249,
      "ret1w": 2.95,
      "ret1m": 3.74,
      "ret3m": 5.77,
      "ret6m": 0.22,
      "ret1y": 16.85,
      "ret2y": 40.0,
      "ret3y": 90.86
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1679,
      "ret1w": 0.54,
      "ret1m": -1.21,
      "ret3m": 4.6,
      "ret6m": -0.35,
      "ret1y": -0.51,
      "ret2y": 7.34,
      "ret3y": 30.02
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5148,
      "ret1w": -0.3,
      "ret1m": -0.96,
      "ret3m": 2.75,
      "ret6m": 2.57,
      "ret1y": 1.56,
      "ret2y": 11.14,
      "ret3y": 31.09
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5091,
      "ret1w": -0.12,
      "ret1m": 0.92,
      "ret3m": 1.17,
      "ret6m": 0.61,
      "ret1y": 17.93,
      "ret2y": 17.42,
      "ret3y": 44.23
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.9258,
      "ret1w": 2.23,
      "ret1m": 2.97,
      "ret3m": 5.54,
      "ret6m": -3.08,
      "ret1y": 9.83,
      "ret2y": 26.59,
      "ret3y": 68.54
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.2063,
      "ret1w": 0.69,
      "ret1m": 0.35,
      "ret3m": -5.66,
      "ret6m": -6.2,
      "ret1y": 2.0,
      "ret2y": 20.55,
      "ret3y": 55.23
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2079,
      "ret1w": 0.69,
      "ret1m": 0.36,
      "ret3m": -5.64,
      "ret6m": -6.23,
      "ret1y": 1.98,
      "ret2y": 20.3,
      "ret3y": 54.7
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4619,
      "ret1w": 2.34,
      "ret1m": 2.44,
      "ret3m": 6.1,
      "ret6m": -6.52,
      "ret1y": -1.47,
      "ret2y": 11.38,
      "ret3y": 45.69
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4951,
      "ret1w": 2.34,
      "ret1m": 2.45,
      "ret3m": 6.14,
      "ret6m": -6.42,
      "ret1y": -1.27,
      "ret2y": 11.83,
      "ret3y": 46.87
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.1469,
      "ret1w": 3.14,
      "ret1m": 3.72,
      "ret3m": 1.69,
      "ret6m": -4.28,
      "ret1y": 5.42,
      "ret2y": 25.07,
      "ret3y": 72.33
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1688,
      "ret1w": 0.13,
      "ret1m": -0.18,
      "ret3m": 0.29,
      "ret6m": -0.05,
      "ret1y": -0.23,
      "ret2y": 2.23,
      "ret3y": 8.21
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1886,
      "ret1w": 0.13,
      "ret1m": -0.18,
      "ret3m": 0.32,
      "ret6m": 0.03,
      "ret1y": -0.08,
      "ret2y": 2.54,
      "ret3y": 8.87
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0838,
      "ret1w": -0.01,
      "ret1m": 0.02,
      "ret3m": 0.17,
      "ret6m": 0.38,
      "ret1y": 0.9,
      "ret2y": 1.74,
      "ret3y": 3.32
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4101,
      "ret1w": 0.0,
      "ret1m": -0.04,
      "ret3m": -0.02,
      "ret6m": 0.1,
      "ret1y": 0.12,
      "ret2y": 0.62,
      "ret3y": 12.23
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4621,
      "ret1w": 0.0,
      "ret1m": -0.03,
      "ret3m": 0.01,
      "ret6m": 0.21,
      "ret1y": 0.32,
      "ret2y": 1.03,
      "ret3y": 13.14
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1666,
      "ret1w": 1.34,
      "ret1m": 1.01,
      "ret3m": 3.08,
      "ret6m": 11.1,
      "ret1y": 13.09,
      "ret2y": 29.74,
      "ret3y": 71.41
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2595,
      "ret1w": 1.33,
      "ret1m": -0.76,
      "ret3m": 3.11,
      "ret6m": 3.66,
      "ret1y": 4.37,
      "ret2y": 13.41,
      "ret3y": 54.63
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 4.2314
      },
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
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 4.1625
      },
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
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 4.7803
      },
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
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 0.7186
      },
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
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.3089
      },
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
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.8475
      },
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
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 5.5498
      },
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
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.864
      },
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
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.3471
      },
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
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 3.388
      },
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
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.122
      },
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
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.364
      },
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
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.75
      },
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
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.9297
      },
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
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.602
      },
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
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.2658
      },
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
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.5251
      },
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
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.019
      },
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
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.3412
      },
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
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.2743
      },
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
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.2867
      },
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
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.3682
      },
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
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.1019
      },
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
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.0742
      },
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
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 0.7329
      },
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
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 0.7512
      },
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
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.7359
      },
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
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.5123
      },
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
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 0.74
      },
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
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 4.1539
      },
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
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 0.5228
      },
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
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 0.5326
      },
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
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.2724
      },
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
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.1479
      },
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
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.4299
      },
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
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 2.9787
      },
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
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 3.339
      },
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
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 1.4692
      },
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
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 0.6311
      },
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
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-08-05",
        "nav": 14.167
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.34,
      "nav": 4.7172,
      "price": 4.7172,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.3,
      "nav": 4.4742,
      "price": 4.4742,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.94,
      "nav": 5.9244,
      "price": 5.9244,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.14,
      "nav": 0.7032,
      "price": 0.7032,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.2808,
      "price": 2.2808,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.14,
      "nav": 2.7763,
      "price": 2.7763,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 5.5427,
      "price": 5.5427,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 1.985,
      "price": 1.985,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.15,
      "nav": 1.4147,
      "price": 1.4147,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.27,
      "nav": 3.738,
      "price": 3.738,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.143,
      "price": 1.143,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 2.487,
      "price": 2.487,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.2,
      "nav": 1.9149,
      "price": 1.9149,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.9217,
      "price": 1.9217,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.7202,
      "price": 1.7202,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.51,
      "nav": 2.6013,
      "price": 2.6013,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.5392,
      "price": 2.5392,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.122,
      "price": 1.122,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.3076,
      "price": 2.3076,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 1.3581,
      "price": 1.3581,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.1,
      "sharpe": 0.58,
      "calmar": 0.58
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 8.96,
      "sharpe": 1.44,
      "calmar": 1.44
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 28.05,
      "sharpe": 2.08,
      "calmar": 2.08
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 4.21,
      "sharpe": -1.46,
      "calmar": -1.46
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 1.11,
      "sharpe": -4.12,
      "calmar": -4.12
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 4.16,
      "sharpe": -3.82,
      "calmar": -3.82
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.61,
      "sharpe": -0.97,
      "calmar": -0.97
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.08,
      "sharpe": -0.21,
      "calmar": -0.21
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 4.47,
      "sharpe": 0.6,
      "calmar": 0.6
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.12,
      "sharpe": 4.41,
      "calmar": 4.41
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.05,
      "sharpe": -1.17,
      "calmar": -1.17
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 1.71,
      "sharpe": -2.12,
      "calmar": -2.12
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 6.11,
      "sharpe": -4.72,
      "calmar": -4.72
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.71,
      "sharpe": -0.65,
      "calmar": -0.65
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.88,
      "sharpe": 0.07,
      "calmar": 0.07
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 15.23,
      "sharpe": 2.99,
      "calmar": 2.99
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.93,
      "sharpe": -1.87,
      "calmar": -1.87
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 2.86,
      "sharpe": 1.59,
      "calmar": 1.59
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 3.33,
      "sharpe": -1.2,
      "calmar": -1.2
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.16,
      "sharpe": 0.58,
      "calmar": 0.58
    }
  ],
  "news": [
    {
      "title": "国务院总理李强日前签署国务院令，公布《国务院关于修改〈住房公积金管理条例〉的决定》（以下简称《决定》），自2026年9月20日起施行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:00",
      "impact": "neutral"
    },
    {
      "title": "记者从交通运输部了解到，近日发布的《精品自驾旅游公路实施方案》提出，我国将构建约6万公里精品自驾旅游公路。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:44",
      "impact": "neutral"
    },
    {
      "title": "8月18日，南都N视频记者获悉，近期引发关注的“招商蛇口浙江公司高管涉嫌伤害一名女性”事件中，犯罪嫌疑人赵某峰及杭州滨江区男性公职人员郁某栋已被刑拘并免职，案件正在进一步侦办中。经查，7月26日晚，两名犯罪嫌疑人在KTV对被害人实施强制猥亵，其间赵某峰将被害人推倒，导致其腰部受伤，初步鉴定为轻伤二级。涉事企业高管赵某峰。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:21",
      "impact": "neutral"
    },
    {
      "title": "日前，人力资源社会保障部、中央社会工作部、民政部联合印发《关于优化城乡社区岗位吸纳高校毕业生就业工作的通知》，全力促进更多高校毕业生到城乡社区就业，为基层治理提供人才支撑。《通知》明确，畅通高校毕业生到城乡社区就业各类渠道，原则上所有新招聘岗位全部面向高校毕业生开放。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:19",
      "impact": "neutral"
    },
    {
      "title": "澳门特区“三五”规划提出，推动医疗资源下沉社区。为全澳居民提供免费的社区医疗卫生和预防保健服务，构建完善的社区医疗卫生服务网络，贯彻落实世界卫生组织倡导的全民健康覆盖目标。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:09",
      "impact": "neutral"
    },
    {
      "title": "杭州就酒局事件发布情况通报。8月18日，杭州市调查处置组发布《情况通报》：近日，我市公安机关接群众报警称遭受不法侵害。因案件涉公职人员违纪违法，市委市政府高度重视，立即成立调查处置组，开展调查处置。经查，7月26日晚，犯罪嫌疑人赵某峰（男，某企业高管）、郁某栋（男，杭州滨江区公职人员）餐后在某KTV活动期间，对被害人实施强制猥亵，其间赵某峰将被害人推倒导致其腰部受伤。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:48",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道记者周慧北京报道8月18日，商务部等9部门联合印发《关于进一步激发下沉市场活力活跃县域消费的意见》。8月18日下午，国务院新闻办举行新闻发布会，商务部、农业农村部、文化和旅游部和市场监管总局有关负责人介绍激发下沉市场活力活跃县域消费有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:47",
      "impact": "neutral"
    },
    {
      "title": "“我有大把客户照片，这个怎么样？”记者暗访假结婚证黑色产业链，发现其售价300-800元不等，分“高仿”“原版”档位，律师：买卖双方均面临法律追责。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:36",
      "impact": "neutral"
    },
    {
      "title": "上海印发《新房购置“一件事”实施方案》，坚持需求导向，聚焦新房购置交付入住环节，强化部门协同，优化业务流程，通过数字赋能，集成办理事项，为购房人提供“一站式”便捷办理和查询新房购置涉及的商品房合同网签备案、实测绘成果审核、住宅专项维修资金缴纳、个人身份信息核验、电表开户、水表开户、天然气表开户等事项的集成服务，持续提升办事便利度，切实增强群众获得感。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:35",
      "impact": "neutral"
    },
    {
      "title": "国务院总理李强日前签署国务院令，公布《国务院关于修改〈住房公积金管理条例〉的决定》（以下简称《决定》），自2026年9月20日起施行。《决定》共20条，主要规定了以下内容。一是拓宽提取和使用范围。对提取住房公积金支付房租，不再设置房租超过家庭工资收入规定比例的门槛限制；新增装修自住住房、支付自住住房物业费、国务院批准的其他住房消费情形等可以提取住房公积金的情形。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:33",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,786/1,606",
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
