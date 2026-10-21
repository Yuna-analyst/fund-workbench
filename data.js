// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-21 15:01:56
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-21 15:01 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-21",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3713.03,
      "change": -22.34,
      "changePct": "-0.60%",
      "high": 3743.08,
      "low": 3703.12,
      "volume": 378286389.0,
      "amount": 642751560000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11704.35,
      "change": -96.94,
      "changePct": "-0.82%",
      "high": 11909.62,
      "low": 11666.59,
      "volume": 471214992.0,
      "amount": 786596920000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2694.71,
      "change": -44.49,
      "changePct": "-1.62%",
      "high": 2766.81,
      "low": 2682.71,
      "volume": 150321134.0,
      "amount": 397964030000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1343.28,
      "change": 0.86,
      "changePct": "+0.06%",
      "high": 1369.18,
      "low": 1335.39,
      "volume": 6651319.0,
      "amount": 62632840000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4111.93,
      "change": -40.18,
      "changePct": "-0.97%",
      "high": 4161.26,
      "low": 4098.96,
      "volume": 144303527.0,
      "amount": 387929790000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6840.56,
      "change": -0.88,
      "changePct": "-0.01%",
      "high": 6941.51,
      "low": 6821.39,
      "volume": 111776428.0,
      "amount": 242862550000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.52万亿",
      "label": "成交额",
      "rawAmount": 2520737690000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,472/1,764",
      "label": "涨/跌家数",
      "rawUp": 2472,
      "rawDown": 1764,
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
    "totalInflow": 15.63,
    "totalOutflow": 0,
    "netFlow": 15.63,
    "netFlowTrend": [
      3.13,
      6.25,
      9.38,
      12.5,
      15.63
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
      "inflow": 8.32,
      "pct": 1.13
    },
    {
      "name": "半导体",
      "inflow": 2.67,
      "pct": 0.24
    },
    {
      "name": "5G",
      "inflow": 1.88,
      "pct": 1.11
    },
    {
      "name": "芯片",
      "inflow": 1.3,
      "pct": 0.33
    },
    {
      "name": "人工智能",
      "inflow": 0.5,
      "pct": 0.93
    },
    {
      "name": "地产",
      "inflow": 0.31,
      "pct": 0.51
    },
    {
      "name": "云计算",
      "inflow": 0.28,
      "pct": 0.82
    },
    {
      "name": "农业",
      "inflow": 0.22,
      "pct": 0.99
    },
    {
      "name": "电子",
      "inflow": 0.09,
      "pct": 0.59
    },
    {
      "name": "计算机",
      "inflow": 0.06,
      "pct": 0.68
    },
    {
      "name": "创新药",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.31
    },
    {
      "name": "钢铁",
      "inflow": -0.2,
      "pct": -0.72
    },
    {
      "name": "光伏",
      "inflow": -0.34,
      "pct": -0.14
    },
    {
      "name": "传媒",
      "inflow": -0.6,
      "pct": -0.63
    },
    {
      "name": "医疗",
      "inflow": -0.85,
      "pct": -0.3
    },
    {
      "name": "医药",
      "inflow": -0.86,
      "pct": -0.27
    },
    {
      "name": "军工",
      "inflow": -0.94,
      "pct": -0.65
    },
    {
      "name": "有色",
      "inflow": -1.13,
      "pct": -0.4
    },
    {
      "name": "银行",
      "inflow": -2.56,
      "pct": -0.46
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.535,
      "changePct": 1.13,
      "change": 0.006,
      "turnover": 27.73
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.823,
      "changePct": 1.11,
      "change": 0.009,
      "turnover": 6.27
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.716,
      "changePct": 0.99,
      "change": 0.007,
      "turnover": 0.72
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.866,
      "changePct": 0.93,
      "change": 0.008,
      "turnover": 1.68
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.482,
      "changePct": 0.82,
      "change": 0.012,
      "turnover": 0.93
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.034,
      "changePct": 0.68,
      "change": 0.007,
      "turnover": 0.2
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.686,
      "changePct": 0.59,
      "change": 0.004,
      "turnover": 0.31
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.187,
      "changePct": 0.51,
      "change": 0.006,
      "turnover": 1.04
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.906,
      "changePct": 0.33,
      "change": 0.003,
      "turnover": 4.33
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.831,
      "changePct": 0.24,
      "change": 0.002,
      "turnover": 8.89
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.815,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 4.24
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.717,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 1.12
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.376,
      "changePct": -0.27,
      "change": -0.001,
      "turnover": 2.87
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.332,
      "changePct": -0.3,
      "change": -0.001,
      "turnover": 2.85
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.97,
      "changePct": -0.31,
      "change": -0.003,
      "turnover": 0.04
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.5,
      "changePct": -0.4,
      "change": -0.006,
      "turnover": 3.76
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.862,
      "changePct": -0.46,
      "change": -0.004,
      "turnover": 8.53
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.791,
      "changePct": -0.63,
      "change": -0.005,
      "turnover": 1.99
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.063,
      "changePct": -0.65,
      "change": -0.007,
      "turnover": 3.12
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.097,
      "changePct": -0.72,
      "change": -0.008,
      "turnover": 0.66
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.482,
      "changePct": -0.82,
      "change": -0.004,
      "turnover": 6.88
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.01,
      "changePct": -0.88,
      "change": -0.009,
      "turnover": 0.89
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.237,
      "changePct": -1.36,
      "change": -0.017,
      "turnover": 5.28
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.489,
      "changePct": -1.61,
      "change": -0.008,
      "turnover": 0.17
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.34,
      "changePct": -1.62,
      "change": -0.022,
      "turnover": 0.4
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.409,
      "changePct": -2.39,
      "change": -0.01,
      "turnover": 3.91
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.984,
      "changePct": -2.79,
      "change": -0.057,
      "turnover": 1.07
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.293,
      "changePct": -3.51,
      "change": -0.047,
      "turnover": 1.07
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.418,
      "changePct": 0.07,
      "amount": 73.21,
      "netFlow": 18.3
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.831,
      "changePct": 0.24,
      "amount": 8.89,
      "netFlow": 2.22
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.984,
      "changePct": -2.79,
      "amount": 1.07,
      "netFlow": -0.27
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.376,
      "changePct": -0.27,
      "amount": 2.87,
      "netFlow": -0.72
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.482,
      "changePct": -0.82,
      "amount": 6.88,
      "netFlow": -1.72
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.064,
      "changePct": -0.88,
      "amount": 6.95,
      "netFlow": -1.74
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.371,
      "changePct": -0.91,
      "amount": 18.9,
      "netFlow": -4.73
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.856,
      "changePct": -0.73,
      "amount": 22.02,
      "netFlow": -5.51
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.864,
      "changePct": -0.1,
      "amount": 29.66,
      "netFlow": -7.42
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.185,
      "changePct": -0.83,
      "amount": 59.43,
      "netFlow": -14.86
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.185,
      "changePct": -0.83,
      "amount": 59.43,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.856,
      "changePct": -0.73,
      "amount": 22.02,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.864,
      "changePct": -0.1,
      "amount": 29.66,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.371,
      "changePct": -0.91,
      "amount": 18.9,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.064,
      "changePct": -0.88,
      "amount": 6.95,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 27.73,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "5G",
      "turnover": 6.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.93,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 4.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 8.89,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 4.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 2.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 3.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 8.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.99,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.66,
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
      "nav": 3.9819,
      "ret1w": 0.81,
      "ret1m": -0.97,
      "ret3m": -16.74,
      "ret6m": -6.64,
      "ret1y": -12.65,
      "ret2y": 2.12,
      "ret3y": 99.07
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.3629,
      "ret1w": 0.59,
      "ret1m": -3.11,
      "ret3m": -20.71,
      "ret6m": -25.05,
      "ret1y": -28.27,
      "ret2y": -15.84,
      "ret3y": 15.64
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.434,
      "ret1w": 1.68,
      "ret1m": -6.56,
      "ret3m": -28.44,
      "ret6m": -15.44,
      "ret1y": -11.18,
      "ret2y": 34.14,
      "ret3y": 123.66
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7007,
      "ret1w": -1.05,
      "ret1m": 0.29,
      "ret3m": 0.13,
      "ret6m": 0.33,
      "ret1y": -6.3,
      "ret2y": -14.11,
      "ret3y": -6.97
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9254,
      "ret1w": -0.23,
      "ret1m": -0.27,
      "ret3m": -4.59,
      "ret6m": -8.68,
      "ret1y": -32.41,
      "ret2y": -31.84,
      "ret3y": -19.17
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5769,
      "ret1w": -0.21,
      "ret1m": -0.74,
      "ret3m": -5.78,
      "ret6m": 0.71,
      "ret1y": -26.47,
      "ret2y": -26.53,
      "ret3y": 5.32
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1331,
      "ret1w": -1.64,
      "ret1m": -0.9,
      "ret3m": -4.69,
      "ret6m": -5.43,
      "ret1y": -11.19,
      "ret2y": 0.08,
      "ret3y": 26.77
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.736,
      "ret1w": -0.69,
      "ret1m": -3.39,
      "ret3m": -12.54,
      "ret6m": -3.02,
      "ret1y": -16.14,
      "ret2y": -6.57,
      "ret3y": 35.52
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1811,
      "ret1w": -0.54,
      "ret1m": -3.39,
      "ret3m": -13.45,
      "ret6m": -12.28,
      "ret1y": -16.72,
      "ret2y": -6.41,
      "ret3y": 11.73
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.78,
      "ret1w": -0.14,
      "ret1m": -3.44,
      "ret3m": -20.89,
      "ret6m": -23.58,
      "ret1y": -7.58,
      "ret2y": 31.32,
      "ret3y": 127.68
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.091,
      "ret1w": -2.06,
      "ret1m": -1.27,
      "ret3m": -1.45,
      "ret6m": 1.58,
      "ret1y": -4.13,
      "ret2y": -15.23,
      "ret3y": -13.41
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.293,
      "ret1w": -0.78,
      "ret1m": -1.8,
      "ret3m": -6.22,
      "ret6m": 1.87,
      "ret1y": -13.99,
      "ret2y": -11.67,
      "ret3y": 10.13
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.3615,
      "ret1w": -0.95,
      "ret1m": -8.14,
      "ret3m": -24.33,
      "ret6m": -34.8,
      "ret1y": -55.91,
      "ret2y": -52.3,
      "ret3y": -29.42
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8312,
      "ret1w": -0.98,
      "ret1m": -1.44,
      "ret3m": -3.74,
      "ret6m": -4.3,
      "ret1y": 0.85,
      "ret2y": -7.2,
      "ret3y": -7.02
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4912,
      "ret1w": -0.33,
      "ret1m": -2.88,
      "ret3m": -12.47,
      "ret6m": -4.87,
      "ret1y": -13.87,
      "ret2y": -2.92,
      "ret3y": 33.07
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.8404,
      "ret1w": 1.46,
      "ret1m": -5.34,
      "ret3m": -25.68,
      "ret6m": -31.07,
      "ret1y": -19.73,
      "ret2y": 38.41,
      "ret3y": 82.33
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5463,
      "ret1w": -0.43,
      "ret1m": -1.31,
      "ret3m": -2.0,
      "ret6m": 3.94,
      "ret1y": -5.64,
      "ret2y": -5.79,
      "ret3y": 1.86
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.962,
      "ret1w": 0.1,
      "ret1m": 1.05,
      "ret3m": -9.25,
      "ret6m": -12.15,
      "ret1y": -4.28,
      "ret2y": -14.34,
      "ret3y": -14.64
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3044,
      "ret1w": -1.63,
      "ret1m": -1.33,
      "ret3m": 0.96,
      "ret6m": -0.16,
      "ret1y": -4.98,
      "ret2y": 1.08,
      "ret3y": 2.86
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2376,
      "ret1w": -0.18,
      "ret1m": -0.94,
      "ret3m": -8.18,
      "ret6m": 0.05,
      "ret1y": -4.8,
      "ret2y": 6.79,
      "ret3y": 48.52
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.0593,
      "ret1w": -0.24,
      "ret1m": -3.38,
      "ret3m": -16.54,
      "ret6m": -18.89,
      "ret1y": -21.22,
      "ret2y": -7.09,
      "ret3y": 13.95
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.1274,
      "ret1w": -0.24,
      "ret1m": -3.38,
      "ret3m": -16.52,
      "ret6m": -18.8,
      "ret1y": -21.08,
      "ret2y": -6.73,
      "ret3y": 14.85
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0568,
      "ret1w": -0.15,
      "ret1m": -0.28,
      "ret3m": -2.19,
      "ret6m": -4.58,
      "ret1y": -3.77,
      "ret2y": -1.4,
      "ret3y": 3.71
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0315,
      "ret1w": -0.15,
      "ret1m": -0.27,
      "ret3m": -2.14,
      "ret6m": -4.44,
      "ret1y": -3.47,
      "ret2y": -0.81,
      "ret3y": 4.97
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6908,
      "ret1w": -0.79,
      "ret1m": -1.09,
      "ret3m": -2.5,
      "ret6m": -5.5,
      "ret1y": -14.11,
      "ret2y": -14.4,
      "ret3y": -3.69
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7087,
      "ret1w": -0.78,
      "ret1m": -1.09,
      "ret3m": -2.46,
      "ret6m": -5.38,
      "ret1y": -13.91,
      "ret2y": -13.98,
      "ret3y": -2.73
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.3567,
      "ret1w": 0.04,
      "ret1m": -3.89,
      "ret3m": -19.54,
      "ret6m": -21.47,
      "ret1y": -5.89,
      "ret2y": 26.92,
      "ret3y": 105.38
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3389,
      "ret1w": 0.24,
      "ret1m": 0.06,
      "ret3m": -7.06,
      "ret6m": -8.36,
      "ret1y": -6.58,
      "ret2y": 8.24,
      "ret3y": 52.9
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7043,
      "ret1w": 0.1,
      "ret1m": 1.53,
      "ret3m": -2.63,
      "ret6m": -5.84,
      "ret1y": -21.5,
      "ret2y": -11.78,
      "ret3y": 0.59
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9711,
      "ret1w": 1.08,
      "ret1m": 2.06,
      "ret3m": -5.89,
      "ret6m": -9.53,
      "ret1y": 5.28,
      "ret2y": 26.91,
      "ret3y": 93.74
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4701,
      "ret1w": -0.49,
      "ret1m": -1.45,
      "ret3m": -8.31,
      "ret6m": -13.27,
      "ret1y": -9.23,
      "ret2y": 2.57,
      "ret3y": 25.16
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4794,
      "ret1w": -0.5,
      "ret1m": -1.44,
      "ret3m": -8.27,
      "ret6m": -13.18,
      "ret1y": -9.05,
      "ret2y": 2.99,
      "ret3y": 26.19
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2567,
      "ret1w": -0.59,
      "ret1m": -1.43,
      "ret3m": -0.95,
      "ret6m": -0.06,
      "ret1y": -2.99,
      "ret2y": -2.32,
      "ret3y": -0.05
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0822,
      "ret1w": -0.71,
      "ret1m": -1.65,
      "ret3m": -3.46,
      "ret6m": -5.65,
      "ret1y": -7.43,
      "ret2y": -7.19,
      "ret3y": 2.09
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1775,
      "ret1w": -1.14,
      "ret1m": -5.12,
      "ret3m": -15.89,
      "ret6m": -18.53,
      "ret1y": -20.81,
      "ret2y": -25.48,
      "ret3y": -14.49
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8514,
      "ret1w": -0.66,
      "ret1m": -2.13,
      "ret3m": -5.89,
      "ret6m": -1.83,
      "ret1y": -11.57,
      "ret2y": 4.09,
      "ret3y": 30.38
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.641,
      "ret1w": 0.76,
      "ret1m": -4.69,
      "ret3m": -23.69,
      "ret6m": -35.19,
      "ret1y": -22.48,
      "ret2y": 23.35,
      "ret3y": 92.77
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5298,
      "ret1w": -0.77,
      "ret1m": -1.52,
      "ret3m": 2.05,
      "ret6m": 4.37,
      "ret1y": 1.04,
      "ret2y": 0.8,
      "ret3y": 0.94
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5457,
      "ret1w": 0.74,
      "ret1m": 0.92,
      "ret3m": -12.08,
      "ret6m": -10.38,
      "ret1y": -25.27,
      "ret2y": -8.01,
      "ret3y": -5.88
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 11.421,
      "ret1w": 1.16,
      "ret1m": -5.03,
      "ret3m": -25.3,
      "ret6m": -20.88,
      "ret1y": 1.79,
      "ret2y": 61.11,
      "ret3y": 168.1
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.057,
      "ret1w": -0.04,
      "ret1m": -0.1,
      "ret3m": -1.05,
      "ret6m": -1.4,
      "ret1y": -1.23,
      "ret2y": 0.3,
      "ret3y": 3.09
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1055,
      "ret1w": -0.04,
      "ret1m": -0.1,
      "ret3m": -1.03,
      "ret6m": -1.33,
      "ret1y": -1.11,
      "ret2y": 0.55,
      "ret3y": 3.78
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0675,
      "ret1w": -0.01,
      "ret1m": 0.07,
      "ret3m": 0.19,
      "ret6m": 0.46,
      "ret1y": 0.71,
      "ret2y": 1.71,
      "ret3y": 3.03
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.102,
      "ret1w": 0.01,
      "ret1m": 0.09,
      "ret3m": 0.2,
      "ret6m": 0.45,
      "ret1y": 0.8,
      "ret2y": 1.63,
      "ret3y": 3.94
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1117,
      "ret1w": 0.01,
      "ret1m": 0.09,
      "ret3m": 0.22,
      "ret6m": 0.5,
      "ret1y": 0.89,
      "ret2y": 1.84,
      "ret3y": 4.37
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0781,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.36,
      "ret1y": 0.63,
      "ret2y": 1.55,
      "ret3y": 3.02
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.093,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.16,
      "ret6m": 0.43,
      "ret1y": 0.78,
      "ret2y": 1.86,
      "ret3y": 3.67
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0237,
      "ret1w": -0.3,
      "ret1m": -1.08,
      "ret3m": -4.44,
      "ret6m": -4.12,
      "ret1y": -4.98,
      "ret2y": 1.33,
      "ret3y": 6.26
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1797,
      "ret1w": -0.2,
      "ret1m": -0.97,
      "ret3m": -4.19,
      "ret6m": -2.43,
      "ret1y": -4.84,
      "ret2y": -0.92,
      "ret3y": 1.69
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0307,
      "ret1w": -0.3,
      "ret1m": -1.07,
      "ret3m": -4.41,
      "ret6m": -4.02,
      "ret1y": -4.78,
      "ret2y": 1.74,
      "ret3y": 7.11
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0452,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.19,
      "ret6m": 0.49,
      "ret1y": 0.86,
      "ret2y": 1.86,
      "ret3y": 3.68
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1291,
      "ret1w": 0.12,
      "ret1m": -0.75,
      "ret3m": -4.23,
      "ret6m": -4.04,
      "ret1y": -6.78,
      "ret2y": -4.12,
      "ret3y": 2.3
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1985,
      "ret1w": -0.13,
      "ret1m": -0.2,
      "ret3m": -0.97,
      "ret6m": -1.58,
      "ret1y": -2.49,
      "ret2y": 0.89,
      "ret3y": 9.38
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1222,
      "ret1w": -0.13,
      "ret1m": -0.32,
      "ret3m": -1.56,
      "ret6m": -1.23,
      "ret1y": -1.24,
      "ret2y": 1.18,
      "ret3y": 7.1
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1932,
      "ret1w": -0.13,
      "ret1m": -0.31,
      "ret3m": -1.53,
      "ret6m": -1.14,
      "ret1y": -1.04,
      "ret2y": 1.59,
      "ret3y": 7.99
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.142,
      "ret1w": null,
      "ret1m": -8.11,
      "ret3m": -11.78,
      "ret6m": -5.31,
      "ret1y": 9.23,
      "ret2y": 54.32,
      "ret3y": 109.18
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9752,
      "ret1w": -0.21,
      "ret1m": -1.98,
      "ret3m": -0.2,
      "ret6m": 2.5,
      "ret1y": 5.4,
      "ret2y": 6.99,
      "ret3y": 28.45
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.706,
      "ret1w": -0.48,
      "ret1m": -3.41,
      "ret3m": -5.77,
      "ret6m": -9.55,
      "ret1y": -18.58,
      "ret2y": -7.37,
      "ret3y": 19.33
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3248,
      "ret1w": 0.81,
      "ret1m": -3.75,
      "ret3m": -4.97,
      "ret6m": 6.12,
      "ret1y": 8.97,
      "ret2y": 9.37,
      "ret3y": 60.6
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9175,
      "ret1w": 0.08,
      "ret1m": 0.26,
      "ret3m": -0.7,
      "ret6m": -2.34,
      "ret1y": -3.85,
      "ret2y": -6.5,
      "ret3y": -3.27
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4448,
      "ret1w": -0.88,
      "ret1m": -6.75,
      "ret3m": -8.24,
      "ret6m": -6.54,
      "ret1y": 5.71,
      "ret2y": 27.67,
      "ret3y": 73.35
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.497,
      "ret1w": 0.11,
      "ret1m": -1.4,
      "ret3m": -0.95,
      "ret6m": -0.57,
      "ret1y": -0.29,
      "ret2y": 3.02,
      "ret3y": 15.07
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.835,
      "ret1w": 0.0,
      "ret1m": -4.13,
      "ret3m": -11.26,
      "ret6m": -12.2,
      "ret1y": -29.36,
      "ret2y": -29.6,
      "ret3y": -12.01
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.5804,
      "ret1w": -1.3,
      "ret1m": -7.39,
      "ret3m": -10.07,
      "ret6m": -6.39,
      "ret1y": 6.66,
      "ret2y": 51.25,
      "ret3y": 118.49
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5871,
      "ret1w": -0.48,
      "ret1m": -1.08,
      "ret3m": -1.13,
      "ret6m": 12.94,
      "ret1y": 3.97,
      "ret2y": 27.58,
      "ret3y": 48.93
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6381,
      "ret1w": -0.65,
      "ret1m": -3.37,
      "ret3m": -5.75,
      "ret6m": -0.52,
      "ret1y": 2.76,
      "ret2y": 15.91,
      "ret3y": 41.62
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2083,
      "ret1w": -1.34,
      "ret1m": -4.16,
      "ret3m": -7.14,
      "ret6m": -4.0,
      "ret1y": -5.7,
      "ret2y": 1.55,
      "ret3y": 20.38
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.246,
      "ret1w": 1.38,
      "ret1m": 0.81,
      "ret3m": -0.16,
      "ret6m": -7.08,
      "ret1y": -5.82,
      "ret2y": -1.89,
      "ret3y": -13.98
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.96,
      "ret1w": -0.41,
      "ret1m": -0.96,
      "ret3m": -5.68,
      "ret6m": 1.29,
      "ret1y": -15.88,
      "ret2y": -10.83,
      "ret3y": 34.87
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.8037,
      "ret1w": -1.08,
      "ret1m": -6.41,
      "ret3m": -8.6,
      "ret6m": -5.13,
      "ret1y": 2.06,
      "ret2y": 25.26,
      "ret3y": 53.25
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0157,
      "ret1w": -0.01,
      "ret1m": 0.1,
      "ret3m": 0.34,
      "ret6m": 0.72,
      "ret1y": 1.28,
      "ret2y": 2.53,
      "ret3y": 3.89
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0148,
      "ret1w": -0.02,
      "ret1m": 0.1,
      "ret3m": 0.35,
      "ret6m": 0.75,
      "ret1y": 1.3,
      "ret2y": 2.59,
      "ret3y": 4.06
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.246,
      "ret1w": -0.95,
      "ret1m": -2.35,
      "ret3m": -11.44,
      "ret6m": -17.21,
      "ret1y": -16.54,
      "ret2y": -13.17,
      "ret3y": 2.13
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.417,
      "ret1w": -0.82,
      "ret1m": -3.55,
      "ret3m": -14.14,
      "ret6m": -16.68,
      "ret1y": -18.7,
      "ret2y": -8.45,
      "ret3y": 13.74
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5057,
      "ret1w": -0.78,
      "ret1m": -3.34,
      "ret3m": -8.08,
      "ret6m": -3.81,
      "ret1y": -18.46,
      "ret2y": 2.03,
      "ret3y": 37.51
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.9221,
      "ret1w": -0.65,
      "ret1m": -2.92,
      "ret3m": -9.9,
      "ret6m": -11.32,
      "ret1y": -10.49,
      "ret2y": -2.41,
      "ret3y": 13.1
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9782,
      "ret1w": -0.64,
      "ret1m": -2.92,
      "ret3m": -9.87,
      "ret6m": -11.23,
      "ret1y": -10.31,
      "ret2y": -2.02,
      "ret3y": 14.01
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7769,
      "ret1w": -0.01,
      "ret1m": -1.88,
      "ret3m": -12.26,
      "ret6m": -11.79,
      "ret1y": -15.99,
      "ret2y": -3.85,
      "ret3y": 20.37
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6182,
      "ret1w": -0.88,
      "ret1m": -2.29,
      "ret3m": -8.83,
      "ret6m": -12.28,
      "ret1y": -12.08,
      "ret2y": -8.83,
      "ret3y": 7.22
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.48,
      "ret1w": -0.07,
      "ret1m": -1.37,
      "ret3m": -6.61,
      "ret6m": -5.43,
      "ret1y": -12.94,
      "ret2y": 0.96,
      "ret3y": 26.9
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.6269,
      "ret1w": -0.86,
      "ret1m": -3.89,
      "ret3m": -17.18,
      "ret6m": -23.76,
      "ret1y": -17.53,
      "ret2y": -10.04,
      "ret3y": 18.45
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9845,
      "ret1w": -1.7,
      "ret1m": -2.4,
      "ret3m": -5.68,
      "ret6m": -7.55,
      "ret1y": -10.36,
      "ret2y": -9.85,
      "ret3y": 3.51
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4848,
      "ret1w": -0.46,
      "ret1m": 1.24,
      "ret3m": -0.15,
      "ret6m": 0.27,
      "ret1y": -1.42,
      "ret2y": 8.17,
      "ret3y": 26.08
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4186,
      "ret1w": -0.19,
      "ret1m": -3.42,
      "ret3m": -0.93,
      "ret6m": 1.64,
      "ret1y": 7.93,
      "ret2y": 9.63,
      "ret3y": 31.72
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.3562,
      "ret1w": -1.36,
      "ret1m": -3.95,
      "ret3m": -13.77,
      "ret6m": -18.7,
      "ret1y": -19.56,
      "ret2y": -10.34,
      "ret3y": 11.38
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0262,
      "ret1w": -0.38,
      "ret1m": -4.31,
      "ret3m": -13.48,
      "ret6m": -11.57,
      "ret1y": -15.69,
      "ret2y": -5.38,
      "ret3y": 16.87
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0296,
      "ret1w": -0.36,
      "ret1m": -4.19,
      "ret3m": -13.36,
      "ret6m": -11.37,
      "ret1y": -15.52,
      "ret2y": -5.18,
      "ret3y": 16.6
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2629,
      "ret1w": 0.21,
      "ret1m": -3.32,
      "ret3m": -9.81,
      "ret6m": -7.05,
      "ret1y": -16.08,
      "ret2y": -7.5,
      "ret3y": 11.73
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2925,
      "ret1w": 0.22,
      "ret1m": -3.31,
      "ret3m": -9.78,
      "ret6m": -6.95,
      "ret1y": -15.9,
      "ret2y": -7.13,
      "ret3y": 12.64
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7802,
      "ret1w": -0.36,
      "ret1m": -4.15,
      "ret3m": -11.86,
      "ret6m": -13.07,
      "ret1y": -16.12,
      "ret2y": -4.08,
      "ret3y": 26.05
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1587,
      "ret1w": -0.03,
      "ret1m": 0.06,
      "ret3m": -0.53,
      "ret6m": -0.61,
      "ret1y": -0.66,
      "ret2y": 1.14,
      "ret3y": 5.49
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.179,
      "ret1w": -0.03,
      "ret1m": 0.07,
      "ret3m": -0.51,
      "ret6m": -0.53,
      "ret1y": -0.51,
      "ret2y": 1.45,
      "ret3y": 6.13
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.088,
      "ret1w": 0.0,
      "ret1m": 0.07,
      "ret3m": 0.22,
      "ret6m": 0.54,
      "ret1y": 0.86,
      "ret2y": 2.02,
      "ret3y": 3.63
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4119,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.07,
      "ret1y": 0.13,
      "ret2y": 0.77,
      "ret3y": 6.11
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.465,
      "ret1w": 0.0,
      "ret1m": 0.07,
      "ret3m": 0.19,
      "ret6m": 0.17,
      "ret1y": 0.34,
      "ret2y": 1.18,
      "ret3y": 6.97
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9577,
      "ret1w": 0.25,
      "ret1m": -1.12,
      "ret3m": -8.67,
      "ret6m": -8.56,
      "ret1y": 2.72,
      "ret2y": 13.49,
      "ret3y": 38.59
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0811,
      "ret1w": -0.07,
      "ret1m": -2.16,
      "ret3m": -12.47,
      "ret6m": -13.65,
      "ret1y": -10.85,
      "ret2y": -4.88,
      "ret3y": 18.09
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 4.6768
      },
      {
        "date": "2026-09-28",
        "nav": 4.4698
      },
      {
        "date": "2026-09-29",
        "nav": 4.4829
      },
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
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 4.0766
      },
      {
        "date": "2026-09-28",
        "nav": 3.8576
      },
      {
        "date": "2026-09-29",
        "nav": 3.883
      },
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
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 5.9535
      },
      {
        "date": "2026-09-28",
        "nav": 5.5791
      },
      {
        "date": "2026-09-29",
        "nav": 5.6926
      },
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
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 0.6928
      },
      {
        "date": "2026-09-28",
        "nav": 0.6923
      },
      {
        "date": "2026-09-29",
        "nav": 0.6901
      },
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
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.9707
      },
      {
        "date": "2026-09-28",
        "nav": 1.9358
      },
      {
        "date": "2026-09-29",
        "nav": 1.951
      },
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
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.6746
      },
      {
        "date": "2026-09-28",
        "nav": 2.6381
      },
      {
        "date": "2026-09-29",
        "nav": 2.6473
      },
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
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 5.2847
      },
      {
        "date": "2026-09-28",
        "nav": 5.2267
      },
      {
        "date": "2026-09-29",
        "nav": 5.2374
      },
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
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.955
      },
      {
        "date": "2026-09-28",
        "nav": 1.889
      },
      {
        "date": "2026-09-29",
        "nav": 1.904
      },
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
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.3331
      },
      {
        "date": "2026-09-28",
        "nav": 1.2933
      },
      {
        "date": "2026-09-29",
        "nav": 1.2949
      },
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
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 3.397
      },
      {
        "date": "2026-09-28",
        "nav": 3.214
      },
      {
        "date": "2026-09-29",
        "nav": 3.231
      },
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
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.083
      },
      {
        "date": "2026-09-28",
        "nav": 1.081
      },
      {
        "date": "2026-09-29",
        "nav": 1.078
      },
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
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.432
      },
      {
        "date": "2026-09-28",
        "nav": 2.411
      },
      {
        "date": "2026-09-29",
        "nav": 2.406
      },
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
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.7251
      },
      {
        "date": "2026-09-28",
        "nav": 1.6432
      },
      {
        "date": "2026-09-29",
        "nav": 1.6428
      },
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
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.8718
      },
      {
        "date": "2026-09-28",
        "nav": 1.8595
      },
      {
        "date": "2026-09-29",
        "nav": 1.8609
      },
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
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.6733
      },
      {
        "date": "2026-09-28",
        "nav": 1.6239
      },
      {
        "date": "2026-09-29",
        "nav": 1.6359
      },
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
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.3881
      },
      {
        "date": "2026-09-28",
        "nav": 2.2188
      },
      {
        "date": "2026-09-29",
        "nav": 2.2406
      },
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
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.5863
      },
      {
        "date": "2026-09-28",
        "nav": 2.5749
      },
      {
        "date": "2026-09-29",
        "nav": 2.608
      },
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
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.013
      },
      {
        "date": "2026-09-28",
        "nav": 1.006
      },
      {
        "date": "2026-09-29",
        "nav": 1.01
      },
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
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.263
      },
      {
        "date": "2026-09-28",
        "nav": 2.2579
      },
      {
        "date": "2026-09-29",
        "nav": 2.2566
      },
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
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.3229
      },
      {
        "date": "2026-09-28",
        "nav": 1.2864
      },
      {
        "date": "2026-09-29",
        "nav": 1.2982
      },
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
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.231
      },
      {
        "date": "2026-09-28",
        "nav": 1.1844
      },
      {
        "date": "2026-09-29",
        "nav": 1.1852
      },
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
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.3098
      },
      {
        "date": "2026-09-28",
        "nav": 1.2602
      },
      {
        "date": "2026-09-29",
        "nav": 1.2612
      },
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
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.0727
      },
      {
        "date": "2026-09-28",
        "nav": 1.066
      },
      {
        "date": "2026-09-29",
        "nav": 1.0669
      },
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
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.0466
      },
      {
        "date": "2026-09-28",
        "nav": 1.04
      },
      {
        "date": "2026-09-29",
        "nav": 1.041
      },
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
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 0.7014
      },
      {
        "date": "2026-09-28",
        "nav": 0.6961
      },
      {
        "date": "2026-09-29",
        "nav": 0.6966
      },
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
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 0.7193
      },
      {
        "date": "2026-09-28",
        "nav": 0.7139
      },
      {
        "date": "2026-09-29",
        "nav": 0.7145
      },
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
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.8141
      },
      {
        "date": "2026-09-28",
        "nav": 2.6708
      },
      {
        "date": "2026-09-29",
        "nav": 2.686
      },
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
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.4845
      },
      {
        "date": "2026-09-28",
        "nav": 2.4403
      },
      {
        "date": "2026-09-29",
        "nav": 2.4389
      },
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
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 0.7225
      },
      {
        "date": "2026-09-28",
        "nav": 0.7105
      },
      {
        "date": "2026-09-29",
        "nav": 0.7083
      },
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
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 4.2344
      },
      {
        "date": "2026-09-28",
        "nav": 4.1478
      },
      {
        "date": "2026-09-29",
        "nav": 4.1378
      },
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
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 0.5061
      },
      {
        "date": "2026-09-28",
        "nav": 0.4969
      },
      {
        "date": "2026-09-29",
        "nav": 0.4986
      },
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
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 0.5159
      },
      {
        "date": "2026-09-28",
        "nav": 0.5066
      },
      {
        "date": "2026-09-29",
        "nav": 0.5083
      },
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
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.2668
      },
      {
        "date": "2026-09-28",
        "nav": 1.2658
      },
      {
        "date": "2026-09-29",
        "nav": 1.2645
      },
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
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.1063
      },
      {
        "date": "2026-09-28",
        "nav": 1.1009
      },
      {
        "date": "2026-09-29",
        "nav": 1.1004
      },
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
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.3516
      },
      {
        "date": "2026-09-28",
        "nav": 1.3174
      },
      {
        "date": "2026-09-29",
        "nav": 1.3156
      },
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
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 2.9807
      },
      {
        "date": "2026-09-28",
        "nav": 2.9233
      },
      {
        "date": "2026-09-29",
        "nav": 2.9171
      },
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
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 3.331
      },
      {
        "date": "2026-09-28",
        "nav": 3.154
      },
      {
        "date": "2026-09-29",
        "nav": 3.19
      },
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
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 1.4957
      },
      {
        "date": "2026-09-28",
        "nav": 1.4977
      },
      {
        "date": "2026-09-29",
        "nav": 1.5002
      },
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
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 0.607
      },
      {
        "date": "2026-09-28",
        "nav": 0.5885
      },
      {
        "date": "2026-09-29",
        "nav": 0.5848
      },
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
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-24",
        "nav": 14.511
      },
      {
        "date": "2026-09-28",
        "nav": 13.647
      },
      {
        "date": "2026-09-29",
        "nav": 13.806
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 3.9819,
      "price": 3.9819,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 3.3629,
      "price": 3.3629,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.33,
      "nav": 4.434,
      "price": 4.434,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.01,
      "nav": 0.7007,
      "price": 0.7007,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.9254,
      "price": 1.9254,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.5769,
      "price": 2.5769,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.1331,
      "price": 5.1331,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.736,
      "price": 1.736,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.1811,
      "price": 1.1811,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 2.78,
      "price": 2.78,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.091,
      "price": 1.091,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.293,
      "price": 2.293,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.41,
      "nav": 1.3615,
      "price": 1.3615,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.8312,
      "price": 1.8312,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.4912,
      "price": 1.4912,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 1.8404,
      "price": 1.8404,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.5463,
      "price": 2.5463,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 0.962,
      "price": 0.962,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.3044,
      "price": 2.3044,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.2376,
      "price": 1.2376,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 1.46,
      "sharpe": -2.12,
      "calmar": -2.12
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 4.67,
      "sharpe": -3.49,
      "calmar": -3.49
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 9.84,
      "sharpe": -0.97,
      "calmar": -0.97
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.43,
      "sharpe": -1.19,
      "calmar": -1.19
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -6.15,
      "calmar": -6.15
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.11,
      "sharpe": -4.61,
      "calmar": -4.61
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.35,
      "sharpe": -1.9,
      "calmar": -1.9
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.08,
      "sharpe": -1.92,
      "calmar": -1.92
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.08,
      "sharpe": -1.99,
      "calmar": -1.99
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.16,
      "sharpe": -0.9,
      "calmar": -0.9
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.91,
      "sharpe": -0.66,
      "calmar": -0.66
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 2.7,
      "sharpe": -2.06,
      "calmar": -2.06
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 12.21,
      "sharpe": -4.25,
      "calmar": -4.25
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.16,
      "sharpe": 0.13,
      "calmar": 0.13
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.32,
      "sharpe": -1.76,
      "calmar": -1.76
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 8.01,
      "sharpe": -1.91,
      "calmar": -1.91
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.97,
      "sharpe": -0.89,
      "calmar": -0.89
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 1.58,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.0,
      "sharpe": -0.79,
      "calmar": -0.79
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.41,
      "sharpe": -0.81,
      "calmar": -0.81
    }
  ],
  "news": [
    {
      "title": "从三季度经济数据看中国经济新信号。伴随国家统计局近日公布三季度经济数据，多家券商研究所认为，数据显示出经济温和改善，增长边际企稳。其中，净出口对三季度增长的支撑明显提升，工业生产景气度分化加剧；消费呈现近乎全面改善的特征，但零售数据的走强与居民收支增速降温之间存在温差。多家券商首席表示，全年增长达标几无悬念，未来增长成色更值得关注。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:39",
      "impact": "neutral"
    },
    {
      "title": "10月21日，#全球手机销量暴跌#话题登上微博热搜，引发网友纷纷议论。有网友在评论区晒出自己用了四年的旧手机截图，说“本来打算今年换手机，结果去线下店转了一圈，同配置机型比去年贵了一千多，想想自己的手机还能再战两年，直接转身就走了”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:36",
      "impact": "neutral"
    },
    {
      "title": "10月21日，国家医保局发布数据，今年1至9月，我国基本医疗保险（含生育保险）统筹基金总收入23028.33亿元，基本医疗保险（含生育保险）统筹基金总支出17515.19亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:42",
      "impact": "neutral"
    },
    {
      "title": "新华社北京10月21日电（记者王悦阳）记者10月21日从国家能源局获悉，国家能源局近日印发《关于推动煤电与新能源融合发展的实施意见》提出，到“十五五”末，煤电与新能源融合场景模式成熟应用，融合项目相较改造建设前的年度碳排放水平显著降低。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:27",
      "impact": "neutral"
    },
    {
      "title": "10月20日，国家数据集团有限公司在河北雄安新区成立。该集团是一家以数据资源开发利用为主责主业的中央企业，总部位于河北雄安新区。据国家数据集团官网介绍，该集团是一家以数据资源开发利用为主责主业、中央直接管理的国有重要骨干企业，由国务院、河北雄安新区管理委员会、中国电信、中国联通、中国移动、国家电网和南方电网七方共同出资组建，总部设在雄安新区。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:20",
      "impact": "neutral"
    },
    {
      "title": "中经记者阎娜卢志坤凉山州德昌报道1935年5月，中央红军长征途经四川省凉山州德昌县，在乐跃、半站营突破敌军防线，留下宝贵的红色印记。当地很早就形成了粮食、林果、畜牧兼具的种养基础，桑椹、板栗等特色林果种植由来已久，如今，德昌县立足资源禀赋，推动其转化为更高附加值的产业形态。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:16",
      "impact": "neutral"
    },
    {
      "title": "10月21日，国新办举行新闻发布会，应急管理部新闻发言人、副部长宋元明在会上表示，今年中央安全生产考核巡查二、三季度明查暗访共发现重大事故隐患950项，从严查处了一批煤矿隐蔽工作面开采、货车“百吨王”运输、瞒报事故、检验检测机构弄虚作假等违法行为。宋元明介绍，今年中央安全生产考核巡查二、三季度明查暗访继续坚持“严的氛围”，采取更严的举措。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:15",
      "impact": "neutral"
    },
    {
      "title": "据央视财经，目前，我国已培育建设80个国家先进制造业集群，覆盖高端装备、新一代信息技术、新材料、智能网联新能源汽车等六大领域，实现制造业重点产业链全域贯通。纺织业，也通过集群打开了一扇新的大门。碳丝比钢轻四分之三，强度却是钢的七倍以上。凭借着这些优点，碳纤维复合材料越来越多出现在航空航天、核能装置、医疗装备等众多前沿领域。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:12",
      "impact": "neutral"
    },
    {
      "title": "10月20日至21日，第33届亚太经合组织（APEC）财长会在中国香港特别行政区举行。财政部部长蓝佛安作为会议主席主持会议并致辞，副部长廖岷代表中方发言。来自APEC成员经济体、APEC观察员以及有关国际组织共300余名代表参会。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:11",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道记者林典驰深圳报道供水能力要从每天11万立方米提高到18万立方米，泵房空间却有限。深圳龙岗南坑水厂的做法，是从设备本身寻找空间：采用智能双驱泵组，通过同轴传动取消联轴器，将变频、控制等设备一体化集成，节省空间，提升供水能力。这项改造出现在深圳龙岗区政府投资项目“科技篇”应用工作中。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:11",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 48,
    "label": "中性",
    "upDownRatio": "2,472/1,764",
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
