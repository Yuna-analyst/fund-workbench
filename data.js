// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-14 16:17:42
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-14 16:17 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-14",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3885.33,
      "change": -2.78,
      "changePct": "-0.07%",
      "high": 3895.51,
      "low": 3867.02,
      "volume": 458888916.0,
      "amount": 779281250000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13384.57,
      "change": -86.69,
      "changePct": "-0.64%",
      "high": 13502.25,
      "low": 13288.83,
      "volume": 508969614.0,
      "amount": 849894310000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3285.58,
      "change": -36.46,
      "changePct": "-1.10%",
      "high": 3331.05,
      "low": 3262.49,
      "volume": 137734087.0,
      "amount": 395557540000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1528.27,
      "change": -25.12,
      "changePct": "-1.62%",
      "high": 1542.25,
      "low": 1516.52,
      "volume": 5743181.0,
      "amount": 61008340000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4480.08,
      "change": -30.08,
      "changePct": "-0.67%",
      "high": 4504.49,
      "low": 4473.27,
      "volume": 149488418.0,
      "amount": 398684670000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7571.2,
      "change": -9.34,
      "changePct": "-0.12%",
      "high": 7610.03,
      "low": 7487.46,
      "volume": 134007703.0,
      "amount": 274515450000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.76万亿",
      "label": "成交额",
      "rawAmount": 2758941560000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,437/1,781",
      "label": "涨/跌家数",
      "rawUp": 2437,
      "rawDown": 1781,
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
    "totalInflow": 8.59,
    "totalOutflow": 0,
    "netFlow": 8.59,
    "netFlowTrend": [
      1.72,
      3.44,
      5.15,
      6.87,
      8.59
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
      "inflow": 2.96,
      "pct": 1.06
    },
    {
      "name": "创新药",
      "inflow": 2.49,
      "pct": 3.36
    },
    {
      "name": "医药",
      "inflow": 1.15,
      "pct": 1.92
    },
    {
      "name": "医疗",
      "inflow": 1.14,
      "pct": 2.14
    },
    {
      "name": "新能源车",
      "inflow": 0.35,
      "pct": 1.28
    },
    {
      "name": "新能源",
      "inflow": 0.29,
      "pct": 0.96
    },
    {
      "name": "家电",
      "inflow": 0.18,
      "pct": 0.21
    },
    {
      "name": "食品",
      "inflow": 0.03,
      "pct": 0.62
    },
    {
      "name": "白酒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "光伏",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.29
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -0.09
    },
    {
      "name": "钢铁",
      "inflow": -0.16,
      "pct": -0.26
    },
    {
      "name": "云计算",
      "inflow": -0.24,
      "pct": -0.13
    },
    {
      "name": "地产",
      "inflow": -0.34,
      "pct": -0.08
    },
    {
      "name": "农业",
      "inflow": -0.36,
      "pct": -1.07
    },
    {
      "name": "传媒",
      "inflow": -0.54,
      "pct": -1.34
    },
    {
      "name": "券商",
      "inflow": -1.56,
      "pct": -0.59
    },
    {
      "name": "有色",
      "inflow": -1.87,
      "pct": -0.86
    },
    {
      "name": "半导体",
      "inflow": -2.34,
      "pct": -1.35
    }
  ],
  "sectors": [
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.83,
      "changePct": 3.36,
      "change": 0.027,
      "turnover": 8.29
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.334,
      "changePct": 2.14,
      "change": 0.007,
      "turnover": 3.81
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.372,
      "changePct": 1.92,
      "change": 0.007,
      "turnover": 3.83
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.506,
      "changePct": 1.28,
      "change": 0.019,
      "turnover": 1.18
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.856,
      "changePct": 1.06,
      "change": 0.009,
      "turnover": 9.87
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.324,
      "changePct": 0.96,
      "change": 0.022,
      "turnover": 0.98
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.49,
      "changePct": 0.62,
      "change": 0.003,
      "turnover": 0.09
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.413,
      "changePct": 0.21,
      "change": 0.003,
      "turnover": 0.59
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.412,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.1
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.793,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.73
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.185,
      "changePct": -0.08,
      "change": -0.001,
      "turnover": 1.13
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.11,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 0.22
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.598,
      "changePct": -0.13,
      "change": -0.002,
      "turnover": 0.79
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.143,
      "changePct": -0.26,
      "change": -0.003,
      "turnover": 0.53
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.024,
      "changePct": -0.29,
      "change": -0.003,
      "turnover": 0.06
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.503,
      "changePct": -0.59,
      "change": -0.003,
      "turnover": 5.21
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.739,
      "changePct": -0.86,
      "change": -0.015,
      "turnover": 6.23
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.74,
      "changePct": -1.07,
      "change": -0.008,
      "turnover": 1.21
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.811,
      "changePct": -1.34,
      "change": -0.011,
      "turnover": 1.8
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.947,
      "changePct": -1.35,
      "change": -0.013,
      "turnover": 7.8
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.071,
      "changePct": -1.38,
      "change": -0.015,
      "turnover": 0.74
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.981,
      "changePct": -1.41,
      "change": -0.014,
      "turnover": 1.3
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.273,
      "changePct": -1.47,
      "change": -0.019,
      "turnover": 8.4
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.149,
      "changePct": -1.54,
      "change": -0.018,
      "turnover": 3.15
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.797,
      "changePct": -1.85,
      "change": -0.015,
      "turnover": 0.36
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.056,
      "changePct": -1.95,
      "change": -0.021,
      "turnover": 4.73
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.657,
      "changePct": -2.67,
      "change": -0.018,
      "turnover": 25.14
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.016,
      "changePct": -2.96,
      "change": -0.031,
      "turnover": 8.36
    }
  ],
  "etfFlow": [
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.372,
      "changePct": 1.92,
      "amount": 3.83,
      "netFlow": 0.96
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.324,
      "changePct": 0.96,
      "amount": 0.98,
      "netFlow": 0.25
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.503,
      "changePct": -0.59,
      "amount": 5.21,
      "netFlow": -1.3
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.751,
      "changePct": -0.67,
      "amount": 6.82,
      "netFlow": -1.7
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.421,
      "changePct": -0.58,
      "amount": 7.79,
      "netFlow": -1.95
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.947,
      "changePct": -1.35,
      "amount": 7.8,
      "netFlow": -1.95
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.976,
      "changePct": -0.17,
      "amount": 17.46,
      "netFlow": -4.36
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.598,
      "changePct": -0.17,
      "amount": 26.48,
      "netFlow": -6.62
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.552,
      "changePct": -0.59,
      "amount": 28.64,
      "netFlow": -7.16
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.613,
      "changePct": -1.59,
      "amount": 46.64,
      "netFlow": -11.66
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.552,
      "changePct": -0.59,
      "amount": 28.64,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.976,
      "changePct": -0.17,
      "amount": 17.46,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.598,
      "changePct": -0.17,
      "amount": 26.48,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.751,
      "changePct": -0.67,
      "amount": 6.82,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.421,
      "changePct": -0.58,
      "amount": 7.79,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "创新药",
      "turnover": 8.29,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.83,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 9.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 2.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 0.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.53,
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
      "name": "券商",
      "turnover": 5.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 6.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 1.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 7.8,
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
      "nav": 4.4944,
      "ret1w": 0.39,
      "ret1m": -3.62,
      "ret3m": 0.22,
      "ret6m": -5.99,
      "ret1y": 3.1,
      "ret2y": 21.02,
      "ret3y": 163.29
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.0674,
      "ret1w": -2.88,
      "ret1m": -3.41,
      "ret3m": -4.89,
      "ret6m": -15.71,
      "ret1y": 4.23,
      "ret2y": 1.36,
      "ret3y": 66.99
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.7159,
      "ret1w": -2.45,
      "ret1m": -4.25,
      "ret3m": 2.33,
      "ret6m": -1.31,
      "ret1y": 45.67,
      "ret2y": 82.6,
      "ret3y": 299.29
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7008,
      "ret1w": 0.55,
      "ret1m": -2.52,
      "ret3m": -0.78,
      "ret6m": 3.1,
      "ret1y": -9.11,
      "ret2y": -17.41,
      "ret3y": 7.44
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9768,
      "ret1w": 0.19,
      "ret1m": -4.22,
      "ret3m": -12.27,
      "ret6m": -19.34,
      "ret1y": -35.47,
      "ret2y": -30.03,
      "ret3y": 14.78
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6691,
      "ret1w": -0.81,
      "ret1m": -1.16,
      "ret3m": -2.79,
      "ret6m": -9.79,
      "ret1y": -28.51,
      "ret2y": -19.5,
      "ret3y": 37.52
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4164,
      "ret1w": 0.14,
      "ret1m": -1.56,
      "ret3m": -1.44,
      "ret6m": 0.31,
      "ret1y": -7.51,
      "ret2y": 7.86,
      "ret3y": 63.76
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.872,
      "ret1w": 1.03,
      "ret1m": -1.99,
      "ret3m": -2.5,
      "ret6m": -7.65,
      "ret1y": -4.88,
      "ret2y": 2.86,
      "ret3y": 76.27
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3127,
      "ret1w": 0.0,
      "ret1m": -2.24,
      "ret3m": -4.66,
      "ret6m": -5.16,
      "ret1y": -2.07,
      "ret2y": 5.88,
      "ret3y": 47.16
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.274,
      "ret1w": -0.85,
      "ret1m": -3.62,
      "ret3m": -8.93,
      "ret6m": -4.04,
      "ret1y": 27.74,
      "ret2y": 59.09,
      "ret3y": 279.81
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.094,
      "ret1w": 0.64,
      "ret1m": -3.36,
      "ret3m": -4.12,
      "ret6m": 3.21,
      "ret1y": -6.5,
      "ret2y": -17.87,
      "ret3y": 8.21
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.309,
      "ret1w": 1.58,
      "ret1m": -2.61,
      "ret3m": -7.6,
      "ret6m": 3.78,
      "ret1y": -16.43,
      "ret2y": -16.34,
      "ret3y": 34.87
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6207,
      "ret1w": -1.7,
      "ret1m": -4.82,
      "ret3m": -11.01,
      "ret6m": -42.79,
      "ret1y": -50.84,
      "ret2y": -43.3,
      "ret3y": 19.19
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9128,
      "ret1w": 0.19,
      "ret1m": -2.32,
      "ret3m": -1.08,
      "ret6m": 5.01,
      "ret1y": 0.86,
      "ret2y": -6.1,
      "ret3y": 11.57
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6334,
      "ret1w": 0.02,
      "ret1m": -1.7,
      "ret3m": -2.62,
      "ret6m": -5.3,
      "ret1y": -5.15,
      "ret2y": 6.56,
      "ret3y": 78.51
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3141,
      "ret1w": -0.86,
      "ret1m": -3.59,
      "ret3m": -6.75,
      "ret6m": -18.73,
      "ret1y": 22.35,
      "ret2y": 69.17,
      "ret3y": 234.79
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5448,
      "ret1w": 0.18,
      "ret1m": -1.24,
      "ret3m": 0.66,
      "ret6m": -2.0,
      "ret1y": -8.25,
      "ret2y": -6.29,
      "ret3y": 28.03
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.0,
      "ret1w": 3.84,
      "ret1m": -1.67,
      "ret3m": -9.01,
      "ret6m": 14.29,
      "ret1y": 3.63,
      "ret2y": -17.42,
      "ret3y": 7.64
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3212,
      "ret1w": 0.43,
      "ret1m": -1.03,
      "ret3m": 0.23,
      "ret6m": 0.86,
      "ret1y": -7.98,
      "ret2y": 3.23,
      "ret3y": 19.47
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3066,
      "ret1w": 0.28,
      "ret1m": -1.56,
      "ret3m": -1.34,
      "ret6m": 3.11,
      "ret1y": 0.09,
      "ret2y": 16.56,
      "ret3y": 84.5
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2353,
      "ret1w": -0.06,
      "ret1m": -2.15,
      "ret3m": -5.62,
      "ret6m": -9.14,
      "ret1y": -6.03,
      "ret2y": 10.14,
      "ret3y": 50.98
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3142,
      "ret1w": -0.05,
      "ret1m": -2.14,
      "ret3m": -5.59,
      "ret6m": -9.05,
      "ret1y": -5.85,
      "ret2y": 10.57,
      "ret3y": 52.19
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0813,
      "ret1w": 0.0,
      "ret1m": -0.57,
      "ret3m": -1.28,
      "ret6m": -2.28,
      "ret1y": -0.66,
      "ret2y": 0.68,
      "ret3y": 8.61
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0548,
      "ret1w": 0.01,
      "ret1m": -0.56,
      "ret3m": -1.23,
      "ret6m": -2.12,
      "ret1y": -0.36,
      "ret2y": 1.3,
      "ret3y": 9.92
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.704,
      "ret1w": 0.27,
      "ret1m": -2.65,
      "ret3m": -2.91,
      "ret6m": -4.11,
      "ret1y": -11.09,
      "ret2y": -10.47,
      "ret3y": 13.38
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.722,
      "ret1w": 0.28,
      "ret1m": -2.63,
      "ret3m": -2.85,
      "ret6m": -3.99,
      "ret1y": -10.86,
      "ret2y": -10.01,
      "ret3y": 14.53
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8075,
      "ret1w": -1.88,
      "ret1m": -2.07,
      "ret3m": -2.41,
      "ret6m": -7.99,
      "ret1y": 34.9,
      "ret2y": 52.42,
      "ret3y": 175.62
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4172,
      "ret1w": 0.25,
      "ret1m": -3.47,
      "ret3m": -6.1,
      "ret6m": -3.59,
      "ret1y": -0.49,
      "ret2y": 13.0,
      "ret3y": 88.15
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7092,
      "ret1w": 0.35,
      "ret1m": -3.71,
      "ret3m": -5.89,
      "ret6m": -12.0,
      "ret1y": -19.51,
      "ret2y": -14.22,
      "ret3y": 16.74
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9674,
      "ret1w": 0.23,
      "ret1m": -4.53,
      "ret3m": -8.63,
      "ret6m": -6.56,
      "ret1y": 14.15,
      "ret2y": 29.66,
      "ret3y": 143.67
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4997,
      "ret1w": -0.66,
      "ret1m": -1.92,
      "ret3m": -4.38,
      "ret6m": -8.16,
      "ret1y": -4.93,
      "ret2y": 8.61,
      "ret3y": 52.63
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5093,
      "ret1w": -0.66,
      "ret1m": -1.93,
      "ret3m": -4.36,
      "ret6m": -8.07,
      "ret1y": -4.75,
      "ret2y": 9.03,
      "ret3y": 53.87
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2829,
      "ret1w": -0.03,
      "ret1m": 0.03,
      "ret3m": 0.91,
      "ret6m": 0.39,
      "ret1y": -0.64,
      "ret2y": -0.26,
      "ret3y": 1.46
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1109,
      "ret1w": 0.15,
      "ret1m": -1.2,
      "ret3m": -2.89,
      "ret6m": 1.47,
      "ret1y": -6.17,
      "ret2y": -3.47,
      "ret3y": 19.05
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3794,
      "ret1w": 0.15,
      "ret1m": -0.94,
      "ret3m": -5.57,
      "ret6m": -11.8,
      "ret1y": -4.35,
      "ret2y": -20.48,
      "ret3y": 17.4
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.988,
      "ret1w": -0.4,
      "ret1m": -1.57,
      "ret3m": -0.04,
      "ret6m": -3.28,
      "ret1y": -8.88,
      "ret2y": 8.39,
      "ret3y": 56.61
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.251,
      "ret1w": -1.9,
      "ret1m": -3.53,
      "ret3m": -5.47,
      "ret6m": -19.57,
      "ret1y": 27.89,
      "ret2y": 53.06,
      "ret3y": 209.32
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5269,
      "ret1w": 0.67,
      "ret1m": 1.44,
      "ret3m": 4.84,
      "ret6m": 2.79,
      "ret1y": 0.06,
      "ret2y": 1.62,
      "ret3y": 19.17
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6063,
      "ret1w": -0.39,
      "ret1m": -4.73,
      "ret3m": -9.13,
      "ret6m": -20.94,
      "ret1y": -10.88,
      "ret2y": 0.28,
      "ret3y": 52.41
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.678,
      "ret1w": -0.72,
      "ret1m": 1.1,
      "ret3m": -3.85,
      "ret6m": -6.73,
      "ret1y": 73.23,
      "ret2y": 104.57,
      "ret3y": 377.49
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0656,
      "ret1w": -0.09,
      "ret1m": -0.1,
      "ret3m": -0.2,
      "ret6m": -0.95,
      "ret1y": -0.22,
      "ret2y": 1.23,
      "ret3y": 4.9
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1142,
      "ret1w": -0.09,
      "ret1m": -0.1,
      "ret3m": -0.17,
      "ret6m": -0.89,
      "ret1y": -0.1,
      "ret2y": 1.5,
      "ret3y": 5.62
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0648,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.07,
      "ret6m": 0.32,
      "ret1y": 0.72,
      "ret2y": 1.54,
      "ret3y": 2.6
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0993,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.11,
      "ret6m": 0.36,
      "ret1y": 0.75,
      "ret2y": 1.52,
      "ret3y": 3.84
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1087,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.4,
      "ret1y": 0.85,
      "ret2y": 1.72,
      "ret3y": 4.27
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0763,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": 0.04,
      "ret6m": 0.36,
      "ret1y": 0.72,
      "ret2y": 1.46,
      "ret3y": 2.62
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0908,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": 0.06,
      "ret6m": 0.43,
      "ret1y": 0.87,
      "ret2y": 1.77,
      "ret3y": 3.27
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0589,
      "ret1w": -0.05,
      "ret1m": -0.75,
      "ret3m": -1.37,
      "ret6m": -1.85,
      "ret1y": 0.31,
      "ret2y": 5.06,
      "ret3y": 12.64
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2129,
      "ret1w": 0.09,
      "ret1m": -0.78,
      "ret3m": -1.19,
      "ret6m": -2.21,
      "ret1y": -0.39,
      "ret2y": 2.07,
      "ret3y": 7.34
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0657,
      "ret1w": -0.05,
      "ret1m": -0.75,
      "ret3m": -1.34,
      "ret6m": -1.76,
      "ret1y": 0.51,
      "ret2y": 5.48,
      "ret3y": 13.55
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0465,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.4,
      "ret1y": 0.86,
      "ret2y": 1.77,
      "ret3y": 3.58
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1652,
      "ret1w": -0.38,
      "ret1m": -0.46,
      "ret3m": -0.94,
      "ret6m": -3.08,
      "ret1y": -3.58,
      "ret2y": -0.25,
      "ret3y": 10.17
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2106,
      "ret1w": 0.02,
      "ret1m": -0.4,
      "ret3m": -0.59,
      "ret6m": -0.99,
      "ret1y": -1.01,
      "ret2y": 2.73,
      "ret3y": 15.09
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.135,
      "ret1w": 0.06,
      "ret1m": -0.14,
      "ret3m": -0.73,
      "ret6m": -1.14,
      "ret1y": 0.88,
      "ret2y": 3.07,
      "ret3y": 10.49
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2064,
      "ret1w": 0.07,
      "ret1m": -0.12,
      "ret3m": -0.69,
      "ret6m": -1.03,
      "ret1y": 1.09,
      "ret2y": 3.49,
      "ret3y": 11.43
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.416,
      "ret1w": -0.58,
      "ret1m": -0.08,
      "ret3m": 5.87,
      "ret6m": -6.14,
      "ret1y": 40.79,
      "ret2y": 87.58,
      "ret3y": 158.67
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9793,
      "ret1w": 0.41,
      "ret1m": -0.63,
      "ret3m": 0.05,
      "ret6m": 2.7,
      "ret1y": 9.21,
      "ret2y": 6.88,
      "ret3y": 38.74
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7998,
      "ret1w": -1.08,
      "ret1m": -4.83,
      "ret3m": -6.1,
      "ret6m": -10.26,
      "ret1y": -12.72,
      "ret2y": -2.38,
      "ret3y": 54.52
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3686,
      "ret1w": 0.81,
      "ret1m": -1.61,
      "ret3m": -0.49,
      "ret6m": 2.54,
      "ret1y": 21.15,
      "ret2y": 25.7,
      "ret3y": 77.3
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9276,
      "ret1w": -0.1,
      "ret1m": -0.78,
      "ret3m": -1.02,
      "ret6m": -1.73,
      "ret1y": -2.95,
      "ret2y": -5.05,
      "ret3y": -3.08
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6657,
      "ret1w": 0.02,
      "ret1m": 0.59,
      "ret3m": 0.66,
      "ret6m": -6.28,
      "ret1y": 27.75,
      "ret2y": 48.4,
      "ret3y": 103.64
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.583,
      "ret1w": 0.55,
      "ret1m": -1.02,
      "ret3m": -0.97,
      "ret6m": 0.59,
      "ret1y": 5.31,
      "ret2y": 4.83,
      "ret3y": 23.4
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.152,
      "ret1w": -1.71,
      "ret1m": -7.17,
      "ret3m": -9.58,
      "ret6m": 7.06,
      "ret1y": -11.66,
      "ret2y": -29.33,
      "ret3y": 94.27
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.926,
      "ret1w": -2.01,
      "ret1m": -3.34,
      "ret3m": -4.24,
      "ret6m": 5.11,
      "ret1y": -13.21,
      "ret2y": -26.33,
      "ret3y": 48.87
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8685,
      "ret1w": -1.26,
      "ret1m": 0.89,
      "ret3m": 1.98,
      "ret6m": -3.62,
      "ret1y": 34.03,
      "ret2y": 73.33,
      "ret3y": 153.63
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6212,
      "ret1w": -0.2,
      "ret1m": -0.37,
      "ret3m": 4.95,
      "ret6m": 10.84,
      "ret1y": 4.42,
      "ret2y": 36.72,
      "ret3y": 66.52
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7622,
      "ret1w": -0.72,
      "ret1m": 0.34,
      "ret3m": 5.06,
      "ret6m": 5.34,
      "ret1y": 14.07,
      "ret2y": 29.61,
      "ret3y": 65.67
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3158,
      "ret1w": -1.5,
      "ret1m": -1.36,
      "ret3m": 1.47,
      "ret6m": 1.0,
      "ret1y": 5.79,
      "ret2y": 14.39,
      "ret3y": 44.15
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.277,
      "ret1w": 0.63,
      "ret1m": -1.08,
      "ret3m": -1.77,
      "ret6m": -3.84,
      "ret1y": 1.03,
      "ret2y": 1.51,
      "ret3y": -10.28
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.083,
      "ret1w": 0.29,
      "ret1m": -1.75,
      "ret3m": -0.57,
      "ret6m": 3.89,
      "ret1y": -16.88,
      "ret2y": 11.57,
      "ret3y": 53.98
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0115,
      "ret1w": 0.02,
      "ret1m": 0.0,
      "ret3m": 0.09,
      "ret6m": 0.56,
      "ret1y": 1.41,
      "ret2y": 2.25,
      "ret3y": 3.46
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0104,
      "ret1w": 0.01,
      "ret1m": 0.0,
      "ret3m": 0.1,
      "ret6m": 0.53,
      "ret1y": 1.42,
      "ret2y": 2.3,
      "ret3y": 3.63
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.379,
      "ret1w": -0.86,
      "ret1m": -2.61,
      "ret3m": -6.25,
      "ret6m": -9.16,
      "ret1y": -4.57,
      "ret2y": -2.34,
      "ret3y": 38.18
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.746,
      "ret1w": -0.87,
      "ret1m": -2.87,
      "ret3m": -6.6,
      "ret6m": -7.45,
      "ret1y": -3.72,
      "ret2y": 5.45,
      "ret3y": 64.83
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6498,
      "ret1w": -0.61,
      "ret1m": -1.03,
      "ret3m": -1.53,
      "ret6m": -2.91,
      "ret1y": -12.7,
      "ret2y": 21.61,
      "ret3y": 78.55
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1017,
      "ret1w": -0.63,
      "ret1m": -1.49,
      "ret3m": -2.74,
      "ret6m": -2.96,
      "ret1y": -0.07,
      "ret2y": 7.76,
      "ret3y": 48.25
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1621,
      "ret1w": -0.63,
      "ret1m": -1.48,
      "ret3m": -2.71,
      "ret6m": -2.87,
      "ret1y": 0.13,
      "ret2y": 8.19,
      "ret3y": 49.44
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9561,
      "ret1w": -0.13,
      "ret1m": -2.3,
      "ret3m": -5.04,
      "ret6m": -6.22,
      "ret1y": -7.21,
      "ret2y": 6.34,
      "ret3y": 68.67
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7523,
      "ret1w": -0.63,
      "ret1m": -1.9,
      "ret3m": -3.68,
      "ret6m": -5.25,
      "ret1y": -2.93,
      "ret2y": 0.39,
      "ret3y": 43.17
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5574,
      "ret1w": 0.3,
      "ret1m": -1.62,
      "ret3m": -2.33,
      "ret6m": -2.86,
      "ret1y": -9.6,
      "ret2y": 8.48,
      "ret3y": 61.22
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.8983,
      "ret1w": -1.33,
      "ret1m": -2.95,
      "ret3m": -8.03,
      "ret6m": -10.79,
      "ret1y": 4.49,
      "ret2y": 8.63,
      "ret3y": 76.19
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1293,
      "ret1w": 0.03,
      "ret1m": -1.3,
      "ret3m": -1.25,
      "ret6m": 0.9,
      "ret1y": -2.8,
      "ret2y": -0.68,
      "ret3y": 33.21
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5048,
      "ret1w": 0.21,
      "ret1m": -1.42,
      "ret3m": -1.4,
      "ret6m": 4.01,
      "ret1y": 2.6,
      "ret2y": 9.94,
      "ret3y": 29.82
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4328,
      "ret1w": 0.83,
      "ret1m": -0.54,
      "ret3m": -0.66,
      "ret6m": -0.58,
      "ret1y": 14.57,
      "ret2y": 14.66,
      "ret3y": 39.88
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.6858,
      "ret1w": -1.06,
      "ret1m": -2.61,
      "ret3m": -6.16,
      "ret6m": -9.73,
      "ret1y": -1.06,
      "ret2y": 4.9,
      "ret3y": 60.9
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1737,
      "ret1w": -0.91,
      "ret1m": 0.29,
      "ret3m": -2.4,
      "ret6m": -6.7,
      "ret1y": -0.42,
      "ret2y": 7.84,
      "ret3y": 56.85
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1758,
      "ret1w": -0.92,
      "ret1m": 0.31,
      "ret3m": -2.35,
      "ret6m": -6.56,
      "ret1y": -0.36,
      "ret2y": 8.0,
      "ret3y": 56.29
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3693,
      "ret1w": -1.09,
      "ret1m": -0.86,
      "ret3m": -3.56,
      "ret6m": -8.8,
      "ret1y": -7.8,
      "ret2y": -1.21,
      "ret3y": 40.83
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4008,
      "ret1w": -1.09,
      "ret1m": -0.86,
      "ret3m": -3.53,
      "ret6m": -8.71,
      "ret1y": -7.61,
      "ret2y": -0.81,
      "ret3y": 41.97
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9768,
      "ret1w": -1.38,
      "ret1m": 0.39,
      "ret3m": -3.5,
      "ret6m": -13.91,
      "ret1y": -2.76,
      "ret2y": 4.84,
      "ret3y": 65.56
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1621,
      "ret1w": 0.03,
      "ret1m": -0.21,
      "ret3m": -0.45,
      "ret6m": -0.48,
      "ret1y": -0.01,
      "ret2y": 1.56,
      "ret3y": 7.8
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.182,
      "ret1w": 0.03,
      "ret1m": -0.2,
      "ret3m": -0.42,
      "ret6m": -0.41,
      "ret1y": 0.14,
      "ret2y": 1.86,
      "ret3y": 8.45
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0849,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.09,
      "ret6m": 0.4,
      "ret1y": 0.87,
      "ret2y": 1.86,
      "ret3y": 3.2
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4095,
      "ret1w": 0.01,
      "ret1m": -0.03,
      "ret3m": -0.04,
      "ret6m": 0.09,
      "ret1y": 0.0,
      "ret2y": 0.62,
      "ret3y": 12.3
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4619,
      "ret1w": 0.01,
      "ret1m": -0.02,
      "ret3m": -0.01,
      "ret6m": 0.19,
      "ret1y": 0.21,
      "ret2y": 1.03,
      "ret3y": 13.21
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1094,
      "ret1w": -0.01,
      "ret1m": -0.2,
      "ret3m": -1.33,
      "ret6m": 1.02,
      "ret1y": 12.39,
      "ret2y": 21.72,
      "ret3y": 66.8
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2269,
      "ret1w": 0.31,
      "ret1m": -1.22,
      "ret3m": -1.3,
      "ret6m": -1.56,
      "ret1y": 5.72,
      "ret2y": 7.49,
      "ret3y": 50.24
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 4.4944,
      "price": 4.4944,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 4.0674,
      "price": 4.0674,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.21,
      "nav": 5.7159,
      "price": 5.7159,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.13,
      "nav": 0.7008,
      "price": 0.7008,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.9768,
      "price": 1.9768,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.6691,
      "price": 2.6691,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 5.4164,
      "price": 5.4164,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.872,
      "price": 1.872,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.3127,
      "price": 1.3127,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 3.274,
      "price": 3.274,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.094,
      "price": 1.094,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.309,
      "price": 2.309,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 1.6207,
      "price": 1.6207,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.9128,
      "price": 1.9128,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.6334,
      "price": 1.6334,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 2.3141,
      "price": 2.3141,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.5448,
      "price": 2.5448,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.0,
      "price": 1.0,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.3212,
      "price": 2.3212,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.3066,
      "price": 1.3066,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.43,
      "sharpe": 0.36,
      "calmar": 0.36
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 5.12,
      "sharpe": 0.5,
      "calmar": 0.5
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 6.38,
      "sharpe": 4.94,
      "calmar": 4.94
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.78,
      "sharpe": -1.21,
      "calmar": -1.21
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 6.33,
      "sharpe": -3.85,
      "calmar": -3.85
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.74,
      "sharpe": -4.63,
      "calmar": -4.63
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.34,
      "sharpe": -1.14,
      "calmar": -1.14
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.98,
      "sharpe": -0.7,
      "calmar": -0.7
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.36,
      "sharpe": -0.29,
      "calmar": -0.29
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.43,
      "sharpe": 3.22,
      "calmar": 3.22
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 5.04,
      "sharpe": -0.78,
      "calmar": -0.78
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.92,
      "sharpe": -2.16,
      "calmar": -2.16
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 7.23,
      "sharpe": -5.18,
      "calmar": -5.18
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.48,
      "sharpe": 0.12,
      "calmar": 0.12
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 2.55,
      "sharpe": -0.77,
      "calmar": -0.77
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.38,
      "sharpe": 2.6,
      "calmar": 2.6
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.86,
      "sharpe": -1.32,
      "calmar": -1.32
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 2.5,
      "sharpe": 0.54,
      "calmar": 0.54
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.54,
      "sharpe": -1.32,
      "calmar": -1.32
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 2.34,
      "sharpe": 0.01,
      "calmar": 0.01
    }
  ],
  "news": [
    {
      "title": "广州对标上海，这一次选在了“北部”。不久前，《广州市国土空间近期实施规划（2026—2030年）》正式印发。规划再次明确了此前提出的“一带一轴、三核四极”的规划布局，但值得注意的是，在“北部增长极”的规划中，特别提出将“对标上海‘东方枢纽’，联动白云空港、南沙海港，谋划打造‘南方枢纽’”。无论是对于北部增长极还是整个广州，这都可谓是一次大幅“升级”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:10",
      "impact": "neutral"
    },
    {
      "title": "湖南日报消息，9月13日，湖南省委书记沈晓明在沪与上海市大学生创业代表座谈，面对面听取大家的创业心得，以及对湖南推动大学生创业工作的意见建议。交流中，大家围绕营造开放包容的创业文化、推动头部企业参与创业生态建设、提供全生命周期服务、充分发挥基金矩阵和专业孵化器作用、推动一线产业工程师走进高校等方面，对湖南支持大学生创业工作提出意见建议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:54",
      "impact": "neutral"
    },
    {
      "title": "9月14日，中国人民银行发布的金融统计数据报告显示，8月末，社会融资规模存量464.8万亿元，同比增长7.2%；广义货币（M2）余额356.81万亿元，同比增长7.5%。今年前8个月，社会融资规模增量累计为23.91万亿元，人民币贷款增加10.44万亿元。有业内专家对《证券日报》记者表示，从数据来看，当前我国金融总量合理增长，社会融资条件持续处于较为宽松的状态。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:54",
      "impact": "neutral"
    },
    {
      "title": "本报记者杜雨萌“对于中小企业回款难问题，中国证监会高度重视，主要做法是督促上市公司做好信息披露，形成市场约束。”9月14日，中国证监会上市公司监管司司长郭瑞明在国务院新闻办公室举行的国务院政策例行吹风会上表示，截至今年4月底，沪深两市披露可持续发展报告的上市公司中，已经有超百家上市公司按要求披露了平等对待中小企业的有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:54",
      "impact": "neutral"
    },
    {
      "title": "金融业夯实房地产市场平稳健康发展地基",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:54",
      "impact": "neutral"
    },
    {
      "title": "9月14日，人民银行披露8月金融统计数据。初步统计，2026年前8个月社会融资规模增量累计为23.91万亿元，比上年同期少2.64万亿元。其中，对实体经济发放的人民币贷款增加10.23万亿元，同比少增2.71万亿元。8月末人民币贷款余额282.35万亿元，而7月末人民币贷款余额282.29万亿元，8月人民币贷款净增0.06万亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:26",
      "impact": "neutral"
    },
    {
      "title": "9月14日，人民银行官网披露2026年8月金融统计数据。从贷款端看，8月信贷投放虽较7月由负转正，但同比仍大幅少增，对公中长期贷款、居民零售贷款的实际需求同步偏弱；与此同时，以债券、股票融资为代表的直接融资在社会融资规模增量中的占比首次超过贷款，“降速提质”，仍是当前信贷运行的主要特征。市场预期，三季度末前后，降息、降准等总量工具存在落地可能，逆周期调节力度有望加码。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:09",
      "impact": "neutral"
    },
    {
      "title": "近日，国务院办公厅印发并公布了《关于加强中小企业回款难问题治理有关工作的通知》，其中提到要重点关注应付账款规模大且现金类资产充裕的大型企业。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:33",
      "impact": "neutral"
    },
    {
      "title": "央广网北京9月14日消息（记者宓迪）14日，央行发布2026年8月金融统计数据报告。报告显示，初步统计，2026年8月末社会融资规模存量为464.8万亿元，同比增长7.2%。其中，对实体经济发放的人民币贷款余额278.63万亿元，同比增长5%。此外根据报告，初步统计，2026年前八个月社会融资规模增量累计为23.91万亿元，比上年同期少2.64万亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:19",
      "impact": "neutral"
    },
    {
      "title": "中新社广州9月14日电(记者王华)广州市政府14日发布的《广州市海洋经济发展“十五五”规划》(以下简称“规划”)提出，到2030年广州海洋生产总值突破7300亿元(人民币，下同)。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:17",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 47,
    "label": "中性",
    "upDownRatio": "2,437/1,781",
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
