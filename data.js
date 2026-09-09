// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-09 14:23:21
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-09 14:23 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-09",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3951.51,
      "change": 10.96,
      "changePct": "+0.28%",
      "high": 3958.12,
      "low": 3933.47,
      "volume": 517504311.0,
      "amount": 873734900000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13723.32,
      "change": 20.11,
      "changePct": "+0.15%",
      "high": 13788.94,
      "low": 13625.12,
      "volume": 603143763.0,
      "amount": 981871740000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3354.97,
      "change": -4.75,
      "changePct": "-0.14%",
      "high": 3398.22,
      "low": 3327.14,
      "volume": 158799979.0,
      "amount": 433306580000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1580.06,
      "change": -10.94,
      "changePct": "-0.69%",
      "high": 1609.7,
      "low": 1573.03,
      "volume": 5806336.0,
      "amount": 59220160000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4572.6,
      "change": 13.86,
      "changePct": "+0.30%",
      "high": 4581.9,
      "low": 4548.36,
      "volume": 158004433.0,
      "amount": 440048390000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7768.11,
      "change": -2.62,
      "changePct": "-0.03%",
      "high": 7816.66,
      "low": 7723.82,
      "volume": 165319999.0,
      "amount": 323341910000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.11万亿",
      "label": "成交额",
      "rawAmount": 3111523680000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,982/1,508",
      "label": "涨/跌家数",
      "rawUp": 2982,
      "rawDown": 1508,
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
    "totalInflow": 20.07,
    "totalOutflow": 0,
    "netFlow": 20.07,
    "netFlowTrend": [
      4.01,
      8.03,
      12.04,
      16.06,
      20.07
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
      "inflow": 8.65,
      "pct": 0.89
    },
    {
      "name": "5G",
      "inflow": 2.72,
      "pct": 0.96
    },
    {
      "name": "有色",
      "inflow": 2.56,
      "pct": 1.76
    },
    {
      "name": "煤炭",
      "inflow": 2.33,
      "pct": 3.0
    },
    {
      "name": "银行",
      "inflow": 1.9,
      "pct": 0.36
    },
    {
      "name": "军工",
      "inflow": 1.65,
      "pct": 1.55
    },
    {
      "name": "钢铁",
      "inflow": 0.25,
      "pct": 0.85
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.48
    },
    {
      "name": "新能源",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "新能源车",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "家电",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "计算机",
      "inflow": -0.05,
      "pct": -0.87
    },
    {
      "name": "食品",
      "inflow": -0.06,
      "pct": -0.79
    },
    {
      "name": "电子",
      "inflow": -0.12,
      "pct": -0.12
    },
    {
      "name": "光伏",
      "inflow": -0.24,
      "pct": -0.24
    },
    {
      "name": "人工智能",
      "inflow": -0.38,
      "pct": -0.69
    },
    {
      "name": "农业",
      "inflow": -0.49,
      "pct": -0.13
    },
    {
      "name": "芯片",
      "inflow": -1.26,
      "pct": -0.54
    },
    {
      "name": "券商",
      "inflow": -2.19,
      "pct": -0.38
    },
    {
      "name": "半导体",
      "inflow": -2.71,
      "pct": -0.51
    }
  ],
  "sectors": [
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.341,
      "changePct": 3.0,
      "change": 0.039,
      "turnover": 7.76
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.853,
      "changePct": 1.76,
      "change": 0.032,
      "turnover": 8.53
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.18,
      "changePct": 1.55,
      "change": 0.018,
      "turnover": 5.49
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.052,
      "changePct": 0.96,
      "change": 0.01,
      "turnover": 9.08
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.677,
      "changePct": 0.89,
      "change": 0.006,
      "turnover": 28.83
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.19,
      "changePct": 0.85,
      "change": 0.01,
      "turnover": 0.84
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.047,
      "changePct": 0.48,
      "change": 0.005,
      "turnover": 0.05
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.842,
      "changePct": 0.36,
      "change": 0.003,
      "turnover": 6.32
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.362,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 1.05
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.542,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 1.16
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.436,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.31
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.824,
      "changePct": -0.12,
      "change": -0.001,
      "turnover": 0.4
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.787,
      "changePct": -0.13,
      "change": -0.001,
      "turnover": 1.62
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.817,
      "changePct": -0.24,
      "change": -0.002,
      "turnover": 0.79
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.518,
      "changePct": -0.38,
      "change": -0.002,
      "turnover": 7.3
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.983,
      "changePct": -0.51,
      "change": -0.005,
      "turnover": 9.02
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.1,
      "changePct": -0.54,
      "change": -0.006,
      "turnover": 4.19
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.01,
      "changePct": -0.69,
      "change": -0.007,
      "turnover": 1.28
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.5,
      "changePct": -0.79,
      "change": -0.004,
      "turnover": 0.19
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.135,
      "changePct": -0.87,
      "change": -0.01,
      "turnover": 0.16
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.632,
      "changePct": -1.15,
      "change": -0.019,
      "turnover": 0.74
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.337,
      "changePct": -1.17,
      "change": -0.004,
      "turnover": 3.05
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.374,
      "changePct": -1.32,
      "change": -0.005,
      "turnover": 2.59
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.426,
      "changePct": -1.39,
      "change": -0.006,
      "turnover": 4.39
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.837,
      "changePct": -1.41,
      "change": -0.012,
      "turnover": 6.02
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.237,
      "changePct": -1.75,
      "change": -0.022,
      "turnover": 1.38
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.844,
      "changePct": -2.76,
      "change": -0.024,
      "turnover": 3.44
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.108,
      "changePct": -2.81,
      "change": -0.032,
      "turnover": 0.96
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.637,
      "changePct": 0.28,
      "amount": 26.57,
      "netFlow": 6.64
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.021,
      "changePct": 0.13,
      "amount": 5.86,
      "netFlow": 1.46
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.843,
      "changePct": 0.31,
      "amount": 5.31,
      "netFlow": 1.33
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.504,
      "changePct": 0.29,
      "amount": 4.33,
      "netFlow": 1.08
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.362,
      "changePct": 0.0,
      "amount": 1.05,
      "netFlow": -0.26
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.374,
      "changePct": -1.32,
      "amount": 2.59,
      "netFlow": -0.65
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.518,
      "changePct": -0.38,
      "amount": 7.3,
      "netFlow": -1.83
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.983,
      "changePct": -0.51,
      "amount": 9.02,
      "netFlow": -2.26
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.785,
      "changePct": -0.04,
      "amount": 20.38,
      "netFlow": -5.1
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.671,
      "changePct": -0.59,
      "amount": 39.19,
      "netFlow": -9.8
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.637,
      "changePct": 0.28,
      "amount": 26.57,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.021,
      "changePct": 0.13,
      "amount": 5.86,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.785,
      "changePct": -0.04,
      "amount": 20.38,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.843,
      "changePct": 0.31,
      "amount": 5.31,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.504,
      "changePct": 0.29,
      "amount": 4.33,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "煤炭",
      "turnover": 7.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 8.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 5.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 9.08,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 28.83,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.84,
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
      "name": "银行",
      "turnover": 6.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 1.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 0.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.3,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 9.02,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 4.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.28,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.16,
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
      "nav": 4.6388,
      "ret1w": 0.06,
      "ret1m": 3.15,
      "ret3m": 4.64,
      "ret6m": -7.73,
      "ret1y": 4.27,
      "ret2y": 33.89,
      "ret3y": 176.96
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.2154,
      "ret1w": 0.59,
      "ret1m": 3.09,
      "ret3m": -1.56,
      "ret6m": -14.79,
      "ret1y": 10.49,
      "ret2y": 7.57,
      "ret3y": 77.89
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.8777,
      "ret1w": -0.16,
      "ret1m": 6.43,
      "ret3m": 16.35,
      "ret6m": -3.1,
      "ret1y": 54.79,
      "ret2y": 104.98,
      "ret3y": 317.69
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7144,
      "ret1w": -0.61,
      "ret1m": -0.94,
      "ret3m": 0.56,
      "ret6m": 7.25,
      "ret1y": -6.91,
      "ret2y": -15.4,
      "ret3y": 8.52
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0559,
      "ret1w": -0.62,
      "ret1m": -0.43,
      "ret3m": -10.78,
      "ret6m": -13.06,
      "ret1y": -30.92,
      "ret2y": -28.47,
      "ret3y": 18.83
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7419,
      "ret1w": 0.65,
      "ret1m": 2.06,
      "ret3m": -2.78,
      "ret6m": -3.97,
      "ret1y": -26.25,
      "ret2y": -17.28,
      "ret3y": 40.81
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5215,
      "ret1w": 0.37,
      "ret1m": 0.48,
      "ret3m": 0.25,
      "ret6m": 2.57,
      "ret1y": -4.24,
      "ret2y": 10.79,
      "ret3y": 64.06
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.913,
      "ret1w": 0.53,
      "ret1m": 1.0,
      "ret3m": 0.16,
      "ret6m": -4.25,
      "ret1y": -1.85,
      "ret2y": 7.11,
      "ret3y": 77.46
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3423,
      "ret1w": 0.46,
      "ret1m": 0.74,
      "ret3m": -2.09,
      "ret6m": -2.37,
      "ret1y": 1.79,
      "ret2y": 10.24,
      "ret3y": 48.82
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.349,
      "ret1w": -0.27,
      "ret1m": -1.88,
      "ret3m": -5.48,
      "ret6m": -4.07,
      "ret1y": 32.32,
      "ret2y": 80.93,
      "ret3y": 297.27
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.123,
      "ret1w": -1.06,
      "ret1m": 0.36,
      "ret3m": 0.54,
      "ret6m": 8.4,
      "ret1y": -3.19,
      "ret2y": -16.57,
      "ret3y": 7.67
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.364,
      "ret1w": -1.5,
      "ret1m": -0.46,
      "ret3m": -2.76,
      "ret6m": 5.82,
      "ret1y": -13.34,
      "ret2y": -14.29,
      "ret3y": 34.47
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6643,
      "ret1w": -0.83,
      "ret1m": -1.62,
      "ret3m": -8.2,
      "ret6m": -38.47,
      "ret1y": -49.48,
      "ret2y": -33.74,
      "ret3y": 25.98
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9418,
      "ret1w": -0.5,
      "ret1m": 0.07,
      "ret3m": 0.82,
      "ret6m": 6.7,
      "ret1y": 2.39,
      "ret2y": -3.04,
      "ret3y": 11.01
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6671,
      "ret1w": 0.23,
      "ret1m": 0.94,
      "ret3m": 0.57,
      "ret6m": -3.41,
      "ret1y": -2.66,
      "ret2y": 11.5,
      "ret3y": 79.49
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3718,
      "ret1w": -0.34,
      "ret1m": 3.02,
      "ret3m": -0.36,
      "ret6m": -20.14,
      "ret1y": 30.65,
      "ret2y": 92.45,
      "ret3y": 243.79
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.591,
      "ret1w": -0.24,
      "ret1m": 1.57,
      "ret3m": 2.37,
      "ret6m": 0.96,
      "ret1y": -5.89,
      "ret2y": -4.56,
      "ret3y": 28.78
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.995,
      "ret1w": -2.36,
      "ret1m": -2.16,
      "ret3m": -9.3,
      "ret6m": 17.47,
      "ret1y": 3.65,
      "ret2y": -18.91,
      "ret3y": 4.41
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3454,
      "ret1w": 0.13,
      "ret1m": -0.16,
      "ret3m": 0.83,
      "ret6m": 2.53,
      "ret1y": -6.03,
      "ret2y": 4.89,
      "ret3y": 19.64
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.329,
      "ret1w": 0.15,
      "ret1m": -0.21,
      "ret3m": 1.18,
      "ret6m": 5.13,
      "ret1y": 2.16,
      "ret2y": 19.69,
      "ret3y": 85.05
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2606,
      "ret1w": 0.32,
      "ret1m": 0.86,
      "ret3m": -3.65,
      "ret6m": -7.27,
      "ret1y": -5.05,
      "ret2y": 15.24,
      "ret3y": 53.41
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3411,
      "ret1w": 0.32,
      "ret1m": 0.86,
      "ret3m": -3.62,
      "ret6m": -7.18,
      "ret1y": -4.87,
      "ret2y": 15.69,
      "ret3y": 54.65
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.086,
      "ret1w": -0.05,
      "ret1m": 0.24,
      "ret3m": -1.17,
      "ret6m": -2.09,
      "ret1y": 0.53,
      "ret2y": 1.04,
      "ret3y": 8.94
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0592,
      "ret1w": -0.05,
      "ret1m": 0.25,
      "ret3m": -1.13,
      "ret6m": -1.95,
      "ret1y": 0.83,
      "ret2y": 1.64,
      "ret3y": 10.25
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7173,
      "ret1w": -0.51,
      "ret1m": 0.07,
      "ret3m": -1.71,
      "ret6m": -1.89,
      "ret1y": -10.05,
      "ret2y": -9.03,
      "ret3y": 15.77
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7355,
      "ret1w": -0.51,
      "ret1m": 0.07,
      "ret3m": -1.67,
      "ret6m": -1.76,
      "ret1y": -9.82,
      "ret2y": -8.58,
      "ret3y": 16.93
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8814,
      "ret1w": 0.84,
      "ret1m": 4.24,
      "ret3m": 1.74,
      "ret6m": -9.77,
      "ret1y": 41.37,
      "ret2y": 74.22,
      "ret3y": 179.99
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4776,
      "ret1w": -0.61,
      "ret1m": -1.46,
      "ret3m": -3.17,
      "ret6m": -0.49,
      "ret1y": 1.85,
      "ret2y": 21.74,
      "ret3y": 89.59
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7292,
      "ret1w": -0.48,
      "ret1m": -1.92,
      "ret3m": -2.77,
      "ret6m": -10.84,
      "ret1y": -15.89,
      "ret2y": -10.25,
      "ret3y": 19.6
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0615,
      "ret1w": -0.86,
      "ret1m": -2.87,
      "ret3m": -5.01,
      "ret6m": -5.48,
      "ret1y": 16.53,
      "ret2y": 40.61,
      "ret3y": 144.36
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5091,
      "ret1w": 0.37,
      "ret1m": 0.85,
      "ret3m": -2.97,
      "ret6m": -7.84,
      "ret1y": -3.07,
      "ret2y": 14.66,
      "ret3y": 57.23
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5189,
      "ret1w": 0.39,
      "ret1m": 0.86,
      "ret3m": -2.94,
      "ret6m": -7.73,
      "ret1y": -2.86,
      "ret2y": 15.13,
      "ret3y": 58.49
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2876,
      "ret1w": 0.41,
      "ret1m": 0.27,
      "ret3m": 1.0,
      "ret6m": 0.92,
      "ret1y": -0.25,
      "ret2y": 0.08,
      "ret3y": 1.83
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1184,
      "ret1w": -0.37,
      "ret1m": -0.69,
      "ret3m": -2.65,
      "ret6m": 4.97,
      "ret1y": -5.32,
      "ret2y": -2.31,
      "ret3y": 18.82
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3881,
      "ret1w": 0.81,
      "ret1m": -0.6,
      "ret3m": -4.28,
      "ret6m": -12.1,
      "ret1y": -6.03,
      "ret2y": -13.79,
      "ret3y": 16.81
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0432,
      "ret1w": 0.24,
      "ret1m": 0.69,
      "ret3m": 1.4,
      "ret6m": -0.23,
      "ret1y": -6.57,
      "ret2y": 10.9,
      "ret3y": 56.43
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.335,
      "ret1w": -0.18,
      "ret1m": 1.83,
      "ret3m": -2.94,
      "ret6m": -21.16,
      "ret1y": 35.4,
      "ret2y": 81.94,
      "ret3y": 212.56
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5164,
      "ret1w": 0.27,
      "ret1m": -0.01,
      "ret3m": 3.76,
      "ret6m": 3.74,
      "ret1y": 1.21,
      "ret2y": 0.36,
      "ret3y": 16.83
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6244,
      "ret1w": -1.33,
      "ret1m": -2.56,
      "ret3m": -6.22,
      "ret6m": -19.69,
      "ret1y": -11.19,
      "ret2y": 7.1,
      "ret3y": 53.64
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.557,
      "ret1w": 0.34,
      "ret1m": 4.96,
      "ret3m": -1.75,
      "ret6m": -8.83,
      "ret1y": 77.01,
      "ret2y": 134.83,
      "ret3y": 392.29
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0677,
      "ret1w": 0.07,
      "ret1m": 0.25,
      "ret3m": -0.04,
      "ret6m": -1.1,
      "ret1y": 0.05,
      "ret2y": 1.41,
      "ret3y": 5.02
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1164,
      "ret1w": 0.07,
      "ret1m": 0.26,
      "ret3m": -0.01,
      "ret6m": -1.04,
      "ret1y": 0.18,
      "ret2y": 1.69,
      "ret3y": 5.74
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0649,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.1,
      "ret6m": 0.28,
      "ret1y": 0.75,
      "ret2y": 1.54,
      "ret3y": 2.68
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0992,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.29,
      "ret1y": 0.78,
      "ret2y": 1.51,
      "ret3y": 3.85
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1086,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.34,
      "ret1y": 0.88,
      "ret2y": 1.71,
      "ret3y": 4.28
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0762,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.08,
      "ret6m": 0.32,
      "ret1y": 0.71,
      "ret2y": 1.44,
      "ret3y": 2.72
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0907,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.39,
      "ret1y": 0.87,
      "ret2y": 1.75,
      "ret3y": 3.37
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0675,
      "ret1w": 0.1,
      "ret1m": 0.29,
      "ret3m": -0.4,
      "ret6m": -1.49,
      "ret1y": 1.51,
      "ret2y": 5.9,
      "ret3y": 13.68
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.224,
      "ret1w": 0.08,
      "ret1m": 0.42,
      "ret3m": 0.23,
      "ret6m": -1.84,
      "ret1y": 0.87,
      "ret2y": 3.0,
      "ret3y": 8.37
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0743,
      "ret1w": 0.11,
      "ret1m": 0.3,
      "ret3m": -0.37,
      "ret6m": -1.4,
      "ret1y": 1.71,
      "ret2y": 6.33,
      "ret3y": 14.6
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0462,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.15,
      "ret6m": 0.34,
      "ret1y": 0.86,
      "ret2y": 1.74,
      "ret3y": 3.57
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1718,
      "ret1w": 0.1,
      "ret1m": 0.75,
      "ret3m": 0.02,
      "ret6m": -2.78,
      "ret1y": -3.13,
      "ret2y": 0.78,
      "ret3y": 10.88
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2149,
      "ret1w": 0.01,
      "ret1m": -0.03,
      "ret3m": -0.43,
      "ret6m": -0.65,
      "ret1y": -0.38,
      "ret2y": 3.68,
      "ret3y": 15.53
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.138,
      "ret1w": 0.1,
      "ret1m": 0.08,
      "ret3m": -0.49,
      "ret6m": -0.86,
      "ret1y": 1.09,
      "ret2y": 3.61,
      "ret3y": 10.66
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2095,
      "ret1w": 0.1,
      "ret1m": 0.09,
      "ret3m": -0.45,
      "ret6m": -0.76,
      "ret1y": 1.3,
      "ret2y": 4.03,
      "ret3y": 11.58
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.47,
      "ret1w": null,
      "ret1m": 5.92,
      "ret3m": 8.0,
      "ret6m": -1.36,
      "ret1y": 49.43,
      "ret2y": 99.03,
      "ret3y": 176.6
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9893,
      "ret1w": -0.21,
      "ret1m": 0.75,
      "ret3m": 0.16,
      "ret6m": 2.9,
      "ret1y": 10.1,
      "ret2y": 8.19,
      "ret3y": 39.9
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8699,
      "ret1w": -0.4,
      "ret1m": -0.36,
      "ret3m": -2.83,
      "ret6m": -7.56,
      "ret1y": -9.56,
      "ret2y": 2.59,
      "ret3y": 58.63
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4102,
      "ret1w": 0.11,
      "ret1m": 2.16,
      "ret3m": 2.03,
      "ret6m": 4.22,
      "ret1y": 24.74,
      "ret2y": 30.5,
      "ret3y": 90.57
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.935,
      "ret1w": -0.03,
      "ret1m": 0.1,
      "ret3m": -0.38,
      "ret6m": -0.58,
      "ret1y": -2.64,
      "ret2y": -4.19,
      "ret3y": -1.79
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7155,
      "ret1w": 1.28,
      "ret1m": 4.81,
      "ret3m": 2.39,
      "ret6m": -1.97,
      "ret1y": 35.64,
      "ret2y": 54.91,
      "ret3y": 117.59
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.624,
      "ret1w": -0.24,
      "ret1m": 0.76,
      "ret3m": -0.43,
      "ret6m": 1.36,
      "ret1y": 6.64,
      "ret2y": 7.06,
      "ret3y": 26.89
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.226,
      "ret1w": -0.49,
      "ret1m": 1.07,
      "ret3m": -2.54,
      "ret6m": 16.21,
      "ret1y": -3.24,
      "ret2y": -26.1,
      "ret3y": 108.5
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.965,
      "ret1w": 0.21,
      "ret1m": 1.69,
      "ret3m": 1.37,
      "ret6m": 11.56,
      "ret1y": -5.48,
      "ret2y": -20.51,
      "ret3y": 50.31
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9199,
      "ret1w": -0.14,
      "ret1m": 2.8,
      "ret3m": 4.13,
      "ret6m": -1.85,
      "ret1y": 39.84,
      "ret2y": 82.59,
      "ret3y": 159.32
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6468,
      "ret1w": 1.07,
      "ret1m": 1.37,
      "ret3m": 9.29,
      "ret6m": 11.39,
      "ret1y": 7.25,
      "ret2y": 40.64,
      "ret3y": 69.11
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7764,
      "ret1w": -0.04,
      "ret1m": 2.08,
      "ret3m": 6.02,
      "ret6m": 7.71,
      "ret1y": 16.33,
      "ret2y": 33.47,
      "ret3y": 66.39
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3441,
      "ret1w": -0.47,
      "ret1m": 0.89,
      "ret3m": 4.22,
      "ret6m": 2.84,
      "ret1y": 8.97,
      "ret2y": 20.09,
      "ret3y": 45.75
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.292,
      "ret1w": 0.08,
      "ret1m": -0.39,
      "ret3m": -2.71,
      "ret6m": -0.84,
      "ret1y": 0.94,
      "ret2y": 4.19,
      "ret3y": -7.47
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.094,
      "ret1w": -0.99,
      "ret1m": 0.77,
      "ret3m": 0.48,
      "ret6m": 0.14,
      "ret1y": -16.11,
      "ret2y": 12.16,
      "ret3y": 55.82
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0115,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.15,
      "ret6m": 0.49,
      "ret1y": 1.48,
      "ret2y": 2.18,
      "ret3y": 3.55
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0104,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.47,
      "ret1y": 1.48,
      "ret2y": 2.23,
      "ret3y": 3.71
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.408,
      "ret1w": 0.07,
      "ret1m": 0.57,
      "ret3m": -4.22,
      "ret6m": -8.51,
      "ret1y": -0.98,
      "ret2y": 1.81,
      "ret3y": 39.41
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.82,
      "ret1w": 0.32,
      "ret1m": 0.89,
      "ret3m": -3.39,
      "ret6m": -6.22,
      "ret1y": -0.42,
      "ret2y": 12.66,
      "ret3y": 67.66
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7194,
      "ret1w": 1.52,
      "ret1m": 1.73,
      "ret3m": -0.31,
      "ret6m": 3.83,
      "ret1y": -11.16,
      "ret2y": 28.74,
      "ret3y": 86.89
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1406,
      "ret1w": 0.56,
      "ret1m": 0.88,
      "ret3m": -1.09,
      "ret6m": -1.46,
      "ret1y": 2.98,
      "ret2y": 11.48,
      "ret3y": 49.42
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.202,
      "ret1w": 0.56,
      "ret1m": 0.89,
      "ret3m": -1.06,
      "ret6m": -1.37,
      "ret1y": 3.18,
      "ret2y": 11.93,
      "ret3y": 50.62
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0045,
      "ret1w": -0.03,
      "ret1m": 0.48,
      "ret3m": -2.61,
      "ret6m": -4.55,
      "ret1y": -5.43,
      "ret2y": 12.33,
      "ret3y": 70.84
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7855,
      "ret1w": 0.29,
      "ret1m": 0.51,
      "ret3m": -2.39,
      "ret6m": -3.96,
      "ret1y": -0.02,
      "ret2y": 4.19,
      "ret3y": 44.43
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5896,
      "ret1w": 0.01,
      "ret1m": 0.94,
      "ret3m": -0.74,
      "ret6m": -0.77,
      "ret1y": -7.04,
      "ret2y": 11.74,
      "ret3y": 61.86
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9461,
      "ret1w": 0.18,
      "ret1m": 0.76,
      "ret3m": -5.69,
      "ret6m": -10.7,
      "ret1y": 8.98,
      "ret2y": 16.59,
      "ret3y": 80.03
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1558,
      "ret1w": 0.26,
      "ret1m": -0.38,
      "ret3m": -0.7,
      "ret6m": 2.98,
      "ret1y": -0.07,
      "ret2y": 1.66,
      "ret3y": 33.73
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5267,
      "ret1w": 0.1,
      "ret1m": 0.15,
      "ret3m": -0.18,
      "ret6m": 4.81,
      "ret1y": 5.08,
      "ret2y": 12.74,
      "ret3y": 31.35
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4494,
      "ret1w": null,
      "ret1m": 1.41,
      "ret3m": -0.79,
      "ret6m": -0.06,
      "ret1y": 16.46,
      "ret2y": 16.21,
      "ret3y": 47.44
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7522,
      "ret1w": 0.44,
      "ret1m": 1.44,
      "ret3m": -3.29,
      "ret6m": -9.3,
      "ret1y": 3.94,
      "ret2y": 9.97,
      "ret3y": 63.47
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.182,
      "ret1w": 1.97,
      "ret1m": -1.24,
      "ret3m": -1.67,
      "ret6m": -7.13,
      "ret1y": 0.9,
      "ret2y": 8.43,
      "ret3y": 56.85
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1841,
      "ret1w": 1.97,
      "ret1m": -1.21,
      "ret3m": -1.62,
      "ret6m": -7.05,
      "ret1y": 0.95,
      "ret2y": 8.56,
      "ret3y": 56.32
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3938,
      "ret1w": -0.27,
      "ret1m": -0.79,
      "ret3m": -2.08,
      "ret6m": -6.4,
      "ret1y": -5.5,
      "ret2y": 2.3,
      "ret3y": 42.25
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4257,
      "ret1w": -0.27,
      "ret1m": -0.79,
      "ret3m": -2.05,
      "ret6m": -6.31,
      "ret1y": -5.31,
      "ret2y": 2.71,
      "ret3y": 43.4
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0136,
      "ret1w": 0.09,
      "ret1m": -0.17,
      "ret3m": -2.31,
      "ret6m": -10.22,
      "ret1y": -0.41,
      "ret2y": 9.77,
      "ret3y": 66.98
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1633,
      "ret1w": -0.09,
      "ret1m": -0.15,
      "ret3m": -0.66,
      "ret6m": -0.39,
      "ret1y": -0.17,
      "ret2y": 1.7,
      "ret3y": 7.73
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1832,
      "ret1w": -0.08,
      "ret1m": -0.15,
      "ret3m": -0.63,
      "ret6m": -0.31,
      "ret1y": -0.03,
      "ret2y": 2.01,
      "ret3y": 8.38
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0849,
      "ret1w": 0.01,
      "ret1m": 0.09,
      "ret3m": 0.13,
      "ret6m": 0.36,
      "ret1y": 0.9,
      "ret2y": 1.85,
      "ret3y": 3.26
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4097,
      "ret1w": -0.01,
      "ret1m": -0.01,
      "ret3m": -0.09,
      "ret6m": 0.02,
      "ret1y": 0.08,
      "ret2y": 0.59,
      "ret3y": 11.32
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4621,
      "ret1w": 0.0,
      "ret1m": 0.0,
      "ret3m": -0.05,
      "ret6m": 0.13,
      "ret1y": 0.29,
      "ret2y": 0.99,
      "ret3y": 12.21
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1079,
      "ret1w": -0.04,
      "ret1m": 0.58,
      "ret3m": -2.08,
      "ret6m": 0.05,
      "ret1y": 11.87,
      "ret2y": 22.82,
      "ret3y": 67.8
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2355,
      "ret1w": -0.34,
      "ret1m": -0.27,
      "ret3m": -2.66,
      "ret6m": -0.96,
      "ret1y": 5.27,
      "ret2y": 9.01,
      "ret3y": 50.3
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 4.6388,
      "price": 4.6388,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.15,
      "nav": 4.2154,
      "price": 4.2154,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.32,
      "nav": 5.8777,
      "price": 5.8777,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 0.7144,
      "price": 0.7144,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.0559,
      "price": 2.0559,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.1,
      "nav": 2.7419,
      "price": 2.7419,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 5.5215,
      "price": 5.5215,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.913,
      "price": 1.913,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.3423,
      "price": 1.3423,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 3.349,
      "price": 3.349,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.123,
      "price": 1.123,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.364,
      "price": 2.364,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.6643,
      "price": 1.6643,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.9418,
      "price": 1.9418,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.6671,
      "price": 1.6671,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.15,
      "nav": 2.3718,
      "price": 2.3718,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 2.591,
      "price": 2.591,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 0.995,
      "price": 0.995,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.3454,
      "price": 2.3454,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.329,
      "price": 1.329,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 4.72,
      "sharpe": 0.52,
      "calmar": 0.52
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 4.63,
      "sharpe": 1.3,
      "calmar": 1.3
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 9.64,
      "sharpe": 4.79,
      "calmar": 4.79
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.41,
      "sharpe": -1.16,
      "calmar": -1.16
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.65,
      "sharpe": -5.69,
      "calmar": -5.69
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.09,
      "sharpe": -3.72,
      "calmar": -3.72
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.72,
      "sharpe": -0.77,
      "calmar": -0.77
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.5,
      "sharpe": -0.31,
      "calmar": -0.31
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.11,
      "sharpe": 0.31,
      "calmar": 0.31
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.82,
      "sharpe": 4.7,
      "calmar": 4.7
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.54,
      "sharpe": -0.6,
      "calmar": -0.6
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.69,
      "sharpe": -2.44,
      "calmar": -2.44
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 2.43,
      "sharpe": -7.47,
      "calmar": -7.47
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.11,
      "sharpe": 0.47,
      "calmar": 0.47
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.41,
      "sharpe": -0.45,
      "calmar": -0.45
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.53,
      "sharpe": 3.82,
      "calmar": 3.82
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.35,
      "sharpe": -0.9,
      "calmar": -0.9
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.24,
      "sharpe": 0.51,
      "calmar": 0.51
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.24,
      "sharpe": -1.17,
      "calmar": -1.17
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.32,
      "sharpe": 0.41,
      "calmar": 0.41
    }
  ],
  "news": [
    {
      "title": "中新网银川9月9日电(记者于晶)9月9日，记者从宁夏回族自治区财政厅获悉，2022至2026年，宁夏累计统筹中央、自治区资金219.18亿元，全力支持宁夏城市更新行动落地实施。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:59",
      "impact": "neutral"
    },
    {
      "title": "中新社北京9月9日电(记者赵建华)中国财政部9日公布的数据显示，今年1-7月，全国发行新增地方政府债券28517亿元人民币，其中一般债券4437亿元、专项债券24080亿元。全国发行再融资债券37572亿元，发行地方政府债券合计66089亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:59",
      "impact": "neutral"
    },
    {
      "title": "新华财经杭州9月9日电（记者吕昂、魏一骏）全国工商联9月9日在浙江温州发布的《2026研发投入前1000家民营企业创新状况报告》显示，我国研发投入前1000家民营企业研发投入与研发强度持续增长，全球对标差距收窄，国际竞争力增强。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:50",
      "impact": "neutral"
    },
    {
      "title": "中新社北京9月9日电(记者吕少威)根据9日发布的《北京市“十五五”时期数字经济发展规划》，北京力争到2030年，数智技术对经济发展的放大、叠加、倍增作用显著发挥，数据要素价值潜力充分释放，实体经济和数字经济融合发展水平大幅提升，数字治理体系更加完善。规划提到，增强大语言模型长程推理、代码生成、意图理解能力，攻关多模态模型理解、生成、对齐技术，实现基础模型全球引领性突破。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:49",
      "impact": "neutral"
    },
    {
      "title": "中新网厦门9月9日电(记者林永传)9日，厦门数贸通平台商用推广暨跨境贸易(词元出海)数字人民币服务创新发布会，在厦门国际博览中心举行。中国人民银行副行长陆磊、福建省人民政府副省长江尔雄、尼日利亚工业贸易与投资部常秘克里斯·伊索克蓬乌等中外嘉宾出席并致辞。发布会上，厦门数贸通平台商用上线。厦门数贸通平台是厦门市重点建设的跨境贸易数字人民币创新应用平台。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:49",
      "impact": "neutral"
    },
    {
      "title": "新华财经沈阳9月9日电（郭桢）9月9日，第四届东北亚金融大会在辽宁省沈阳市隆重举行，本届大会以“兴科创·融数智·共开放”为主题。在会上，中国社会科学院经济研究所研究员黄群慧发表了题为“强化金融赋能先进制造业推动智能经济形态的新型工业化”的主旨演讲。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:47",
      "impact": "neutral"
    },
    {
      "title": "1、国新办将于9月10日下午3时就金融领域贯彻落实“十五五”规划、推动金融强国建设有关情况举行新闻发布会。2、北京印发《北京市“十五五”时期高精尖产业发展规划》，加快发展商业航天产业，突破可重复使用火箭和大推力发动机技术。3、美国安机构指责中国企业蒸馏美国模型，中国外交部表示，不要进行不实的指责和抹黑。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:44",
      "impact": "neutral"
    },
    {
      "title": "上半年GDP突破69万亿，增量创五年新高；制造业领跑全球16年，货物贸易连续9年全球第一；外汇储备稳稳站在3.4万亿美元上方。这不是运气，这是中国超大规模市场的硬核家底。数字会说话中国经济——稳中国经济有多稳？来看一组数据→上半年GDP增速4.7%，增量3.6万亿——这是近五年同期最大增量。制造业增加值连续16年全球第一，全球独一份的全工业门类。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:40",
      "impact": "neutral"
    },
    {
      "title": "灵活就业人员等参加医保迎来新政策",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:23",
      "impact": "neutral"
    },
    {
      "title": "“六张网”正在加速从规划图变为施工图。不久前，国家发展改革委召开“六张网”重大项目协调推进机制会，专题研究推动各牵头部门和地方加快建设“六张网”项目库。此前，深圳等多个城市纷纷拿出具体行动，加速推动“六张网”建设落地。最新的动作来自成都。近日，一场聚焦“六张网”建设的专题培训会在成都召开。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:23",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,982/1,508",
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
