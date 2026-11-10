// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-10 17:39:16
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-10 17:39 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-10",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3663.72,
      "change": 2.93,
      "changePct": "+0.08%",
      "high": 3683.73,
      "low": 3660.72,
      "volume": 404865177.0,
      "amount": 673951890000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11241.54,
      "change": 96.05,
      "changePct": "+0.86%",
      "high": 11315.53,
      "low": 11217.01,
      "volume": 526862998.0,
      "amount": 830863080000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2494.4,
      "change": 35.84,
      "changePct": "+1.46%",
      "high": 2520.01,
      "low": 2487.56,
      "volume": 174497586.0,
      "amount": 416129170000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1265.02,
      "change": 8.06,
      "changePct": "+0.64%",
      "high": 1291.09,
      "low": 1262.25,
      "volume": 7634903.0,
      "amount": 66016130000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4059.11,
      "change": 3.0,
      "changePct": "+0.07%",
      "high": 4090.38,
      "low": 4054.65,
      "volume": 150385451.0,
      "amount": 380089550000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6645.89,
      "change": 59.71,
      "changePct": "+0.91%",
      "high": 6696.29,
      "low": 6633.07,
      "volume": 117586969.0,
      "amount": 254083230000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.62万亿",
      "label": "成交额",
      "rawAmount": 2621133050000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,536/1,232",
      "label": "涨/跌家数",
      "rawUp": 3536,
      "rawDown": 1232,
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
    "totalInflow": 22.29,
    "totalOutflow": 0,
    "netFlow": 22.29,
    "netFlowTrend": [
      4.46,
      8.92,
      13.37,
      17.83,
      22.29
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
      "inflow": 7.19,
      "pct": 2.91
    },
    {
      "name": "有色",
      "inflow": 3.03,
      "pct": 0.07
    },
    {
      "name": "半导体",
      "inflow": 2.68,
      "pct": 1.29
    },
    {
      "name": "银行",
      "inflow": 2.55,
      "pct": 0.45
    },
    {
      "name": "传媒",
      "inflow": 1.79,
      "pct": 3.14
    },
    {
      "name": "5G",
      "inflow": 1.54,
      "pct": 2.77
    },
    {
      "name": "芯片",
      "inflow": 1.18,
      "pct": 0.96
    },
    {
      "name": "光伏",
      "inflow": 0.91,
      "pct": 0.82
    },
    {
      "name": "医疗",
      "inflow": 0.81,
      "pct": 0.29
    },
    {
      "name": "游戏",
      "inflow": 0.61,
      "pct": 2.6
    },
    {
      "name": "新能源",
      "inflow": 0.47,
      "pct": 0.29
    },
    {
      "name": "人工智能",
      "inflow": 0.26,
      "pct": 1.54
    },
    {
      "name": "新能源车",
      "inflow": 0.24,
      "pct": 0.37
    },
    {
      "name": "地产",
      "inflow": 0.2,
      "pct": 1.24
    },
    {
      "name": "钢铁",
      "inflow": 0.17,
      "pct": 0.28
    },
    {
      "name": "云计算",
      "inflow": 0.14,
      "pct": 1.13
    },
    {
      "name": "电子",
      "inflow": 0.1,
      "pct": 1.47
    },
    {
      "name": "家电",
      "inflow": 0.1,
      "pct": 0.66
    },
    {
      "name": "计算机",
      "inflow": 0.03,
      "pct": 1.3
    },
    {
      "name": "白酒",
      "inflow": 0.0,
      "pct": 0.0
    }
  ],
  "sectors": [
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.855,
      "changePct": 3.14,
      "change": 0.026,
      "turnover": 5.98
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.425,
      "changePct": 2.91,
      "change": 0.012,
      "turnover": 23.96
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.668,
      "changePct": 2.77,
      "change": 0.018,
      "turnover": 5.12
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.067,
      "changePct": 2.6,
      "change": 0.027,
      "turnover": 2.05
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.792,
      "changePct": 1.54,
      "change": 0.012,
      "turnover": 0.88
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.621,
      "changePct": 1.47,
      "change": 0.009,
      "turnover": 0.32
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.01,
      "changePct": 1.3,
      "change": 0.013,
      "turnover": 0.11
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.785,
      "changePct": 1.29,
      "change": 0.01,
      "turnover": 8.92
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.143,
      "changePct": 1.24,
      "change": 0.014,
      "turnover": 0.65
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.431,
      "changePct": 1.13,
      "change": 0.016,
      "turnover": 0.47
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.841,
      "changePct": 0.96,
      "change": 0.008,
      "turnover": 3.93
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.74,
      "changePct": 0.82,
      "change": 0.006,
      "turnover": 3.03
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.38,
      "changePct": 0.66,
      "change": 0.009,
      "turnover": 0.33
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.889,
      "changePct": 0.45,
      "change": 0.004,
      "turnover": 8.51
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.354,
      "changePct": 0.37,
      "change": 0.005,
      "turnover": 0.8
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.058,
      "changePct": 0.29,
      "change": 0.006,
      "turnover": 1.57
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.348,
      "changePct": 0.29,
      "change": 0.001,
      "turnover": 2.71
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.065,
      "changePct": 0.28,
      "change": 0.003,
      "turnover": 0.55
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.458,
      "changePct": 0.07,
      "change": 0.001,
      "turnover": 10.09
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.446,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 3.83
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.831,
      "changePct": -0.12,
      "change": -0.001,
      "turnover": 4.0
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.03,
      "changePct": -0.19,
      "change": -0.002,
      "turnover": 2.33
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.519,
      "changePct": -0.19,
      "change": -0.001,
      "turnover": 0.17
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.972,
      "changePct": -0.21,
      "change": -0.002,
      "turnover": 0.08
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.48,
      "changePct": -0.41,
      "change": -0.002,
      "turnover": 10.83
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.388,
      "changePct": -0.51,
      "change": -0.002,
      "turnover": 2.7
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.728,
      "changePct": -0.68,
      "change": -0.005,
      "turnover": 0.51
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.184,
      "changePct": -2.07,
      "change": -0.025,
      "turnover": 5.7
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.337,
      "changePct": 0.75,
      "amount": 72.2,
      "netFlow": 18.05
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.135,
      "changePct": 0.12,
      "amount": 49.83,
      "netFlow": 12.46
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.67,
      "changePct": 0.88,
      "amount": 33.5,
      "netFlow": 8.37
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.018,
      "changePct": 0.07,
      "amount": 11.66,
      "netFlow": 2.91
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.316,
      "changePct": 0.05,
      "amount": 11.55,
      "netFlow": 2.89
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.785,
      "changePct": 1.29,
      "amount": 8.92,
      "netFlow": 2.23
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.058,
      "changePct": 0.29,
      "amount": 1.57,
      "netFlow": 0.39
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.388,
      "changePct": -0.51,
      "amount": 2.7,
      "netFlow": -0.68
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.48,
      "changePct": -0.41,
      "amount": 10.83,
      "netFlow": -2.71
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.891,
      "changePct": -0.62,
      "amount": 13.17,
      "netFlow": -3.29
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.135,
      "changePct": 0.12,
      "amount": 49.83,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.891,
      "changePct": -0.62,
      "amount": 13.17,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.67,
      "changePct": 0.88,
      "amount": 33.5,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.316,
      "changePct": 0.05,
      "amount": 11.55,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.018,
      "changePct": 0.07,
      "amount": 11.66,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "传媒",
      "turnover": 5.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 23.96,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "5G",
      "turnover": 5.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 2.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 0.88,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 8.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 3.93,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 3.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 8.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 2.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 10.09,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "白酒",
      "turnover": 3.83,
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
      "nav": 4.1531,
      "ret1w": 4.45,
      "ret1m": 14.59,
      "ret3m": -1.37,
      "ret6m": -6.03,
      "ret1y": -17.11,
      "ret2y": 5.4,
      "ret3y": 86.77
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.7698,
      "ret1w": 1.66,
      "ret1m": 4.89,
      "ret3m": -24.43,
      "ret6m": -34.4,
      "ret1y": -42.81,
      "ret2y": -29.07,
      "ret3y": -3.98
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.2385,
      "ret1w": 2.73,
      "ret1m": 7.54,
      "ret3m": -35.8,
      "ret6m": -35.11,
      "ret1y": -38.97,
      "ret2y": -2.11,
      "ret3y": 56.62
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7694,
      "ret1w": -0.18,
      "ret1m": -0.12,
      "ret3m": 10.39,
      "ret6m": 6.34,
      "ret1y": 3.72,
      "ret2y": -7.09,
      "ret3y": 1.97
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0589,
      "ret1w": 0.01,
      "ret1m": 4.01,
      "ret3m": 2.85,
      "ret6m": -10.4,
      "ret1y": -27.48,
      "ret2y": -35.92,
      "ret3y": -21.57
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.711,
      "ret1w": 1.04,
      "ret1m": 4.13,
      "ret3m": 1.68,
      "ret6m": -5.05,
      "ret1y": -22.7,
      "ret2y": -23.86,
      "ret3y": 8.31
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.399,
      "ret1w": -0.04,
      "ret1m": 0.33,
      "ret3m": 2.11,
      "ret6m": -2.99,
      "ret1y": -4.82,
      "ret2y": -0.59,
      "ret3y": 25.39
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.688,
      "ret1w": 1.26,
      "ret1m": 5.24,
      "ret3m": -9.54,
      "ret6m": -12.08,
      "ret1y": -20.34,
      "ret2y": -9.05,
      "ret3y": 25.04
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1314,
      "ret1w": 0.6,
      "ret1m": 3.11,
      "ret3m": -11.38,
      "ret6m": -17.64,
      "ret1y": -21.72,
      "ret2y": -10.5,
      "ret3y": 3.9
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.579,
      "ret1w": 1.18,
      "ret1m": 5.27,
      "ret3m": -14.55,
      "ret6m": -27.27,
      "ret1y": -18.75,
      "ret2y": 17.07,
      "ret3y": 92.46
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.165,
      "ret1w": -0.09,
      "ret1m": -0.26,
      "ret3m": 4.48,
      "ret6m": 0.6,
      "ret1y": 1.75,
      "ret2y": -10.38,
      "ret3y": -12.21
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.289,
      "ret1w": 1.1,
      "ret1m": 3.43,
      "ret3m": -6.3,
      "ret6m": -6.91,
      "ret1y": -13.56,
      "ret2y": -12.83,
      "ret3y": 3.02
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2195,
      "ret1w": 1.4,
      "ret1m": 16.75,
      "ret3m": -20.61,
      "ret6m": -33.72,
      "ret1y": -62.4,
      "ret2y": -59.43,
      "ret3y": -38.72
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9277,
      "ret1w": -0.43,
      "ret1m": -1.38,
      "ret3m": 2.32,
      "ret6m": -1.51,
      "ret1y": 5.99,
      "ret2y": -0.57,
      "ret3y": -7.32
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4272,
      "ret1w": 0.95,
      "ret1m": 4.81,
      "ret3m": -10.17,
      "ret6m": -14.33,
      "ret1y": -20.32,
      "ret2y": -9.81,
      "ret3y": 19.03
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.4563,
      "ret1w": 2.72,
      "ret1m": 7.06,
      "ret3m": -28.79,
      "ret6m": -38.34,
      "ret1y": -43.58,
      "ret2y": 5.12,
      "ret3y": 31.17
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.6046,
      "ret1w": 0.53,
      "ret1m": 1.76,
      "ret3m": -1.05,
      "ret6m": 1.94,
      "ret1y": -5.28,
      "ret2y": -5.53,
      "ret3y": -0.12
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.949,
      "ret1w": 0.32,
      "ret1m": 8.83,
      "ret3m": -5.48,
      "ret6m": -13.81,
      "ret1y": -3.75,
      "ret2y": -10.72,
      "ret3y": -16.97
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4033,
      "ret1w": -0.48,
      "ret1m": -1.22,
      "ret3m": 3.9,
      "ret6m": 1.84,
      "ret1y": -0.98,
      "ret2y": 0.48,
      "ret3y": 6.59
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2123,
      "ret1w": 1.12,
      "ret1m": 5.43,
      "ret3m": -5.37,
      "ret6m": -8.26,
      "ret1y": -9.58,
      "ret2y": 2.3,
      "ret3y": 36.58
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9751,
      "ret1w": 0.67,
      "ret1m": 4.47,
      "ret3m": -14.83,
      "ret6m": -25.87,
      "ret1y": -28.78,
      "ret2y": -17.43,
      "ret3y": 1.16
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.038,
      "ret1w": 0.67,
      "ret1m": 4.47,
      "ret3m": -14.81,
      "ret6m": -25.8,
      "ret1y": -28.65,
      "ret2y": -17.11,
      "ret3y": 1.96
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0476,
      "ret1w": 0.03,
      "ret1m": 0.24,
      "ret3m": -1.8,
      "ret6m": -4.56,
      "ret1y": -4.42,
      "ret2y": -3.47,
      "ret3y": 2.13
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0228,
      "ret1w": 0.03,
      "ret1m": 0.25,
      "ret3m": -1.76,
      "ret6m": -4.43,
      "ret1y": -4.12,
      "ret2y": -2.9,
      "ret3y": 3.37
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7145,
      "ret1w": 0.0,
      "ret1m": 1.61,
      "ret3m": 1.72,
      "ret6m": -3.8,
      "ret1y": -12.07,
      "ret2y": -12.81,
      "ret3y": -1.58
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7333,
      "ret1w": 0.01,
      "ret1m": 1.62,
      "ret3m": 1.76,
      "ret6m": -3.68,
      "ret1y": -11.84,
      "ret2y": -12.37,
      "ret3y": -0.58
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.9691,
      "ret1w": 0.87,
      "ret1m": 1.27,
      "ret3m": -22.73,
      "ret6m": -29.27,
      "ret1y": -26.95,
      "ret2y": 1.78,
      "ret3y": 67.26
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4122,
      "ret1w": 1.85,
      "ret1m": 8.73,
      "ret3m": -0.24,
      "ret6m": -6.11,
      "ret1y": -7.46,
      "ret2y": 9.8,
      "ret3y": 49.17
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7391,
      "ret1w": 2.1,
      "ret1m": 8.4,
      "ret3m": 4.01,
      "ret6m": -2.08,
      "ret1y": -17.94,
      "ret2y": -12.33,
      "ret3y": -1.9
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1157,
      "ret1w": 2.91,
      "ret1m": 10.97,
      "ret3m": 1.77,
      "ret6m": -3.35,
      "ret1y": 1.9,
      "ret2y": 31.24,
      "ret3y": 93.7
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4533,
      "ret1w": -0.24,
      "ret1m": -2.07,
      "ret3m": -7.03,
      "ret6m": -14.23,
      "ret1y": -15.06,
      "ret2y": -1.86,
      "ret3y": 19.07
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4623,
      "ret1w": -0.26,
      "ret1m": -2.08,
      "ret3m": -7.0,
      "ret6m": -14.15,
      "ret1y": -14.89,
      "ret2y": -1.47,
      "ret3y": 20.02
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2567,
      "ret1w": -0.1,
      "ret1m": -0.03,
      "ret3m": -1.36,
      "ret6m": -1.85,
      "ret1y": -2.66,
      "ret2y": -2.48,
      "ret3y": 0.38
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.067,
      "ret1w": -0.41,
      "ret1m": -1.03,
      "ret3m": -3.78,
      "ret6m": -7.74,
      "ret1y": -7.07,
      "ret2y": -10.64,
      "ret3y": -0.34
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1659,
      "ret1w": -0.38,
      "ret1m": 1.22,
      "ret3m": -9.73,
      "ret6m": -20.19,
      "ret1y": -29.54,
      "ret2y": -23.21,
      "ret3y": -18.7
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7026,
      "ret1w": 0.3,
      "ret1m": -1.3,
      "ret3m": -7.11,
      "ret6m": -10.61,
      "ret1y": -16.07,
      "ret2y": -4.95,
      "ret3y": 22.05
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.149,
      "ret1w": 1.7,
      "ret1m": 5.03,
      "ret3m": -26.35,
      "ret6m": -36.27,
      "ret1y": -43.95,
      "ret2y": -2.18,
      "ret3y": 55.05
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5695,
      "ret1w": 0.02,
      "ret1m": 0.38,
      "ret3m": 2.67,
      "ret6m": 7.03,
      "ret1y": 5.63,
      "ret2y": 1.25,
      "ret3y": 0.69
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5911,
      "ret1w": 2.8,
      "ret1m": 11.26,
      "ret3m": 4.55,
      "ret6m": -11.21,
      "ret1y": -23.06,
      "ret2y": 2.41,
      "ret3y": -9.23
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.83,
      "ret1w": 2.47,
      "ret1m": 5.8,
      "ret3m": -30.09,
      "ret6m": -40.09,
      "ret1y": -23.83,
      "ret2y": 14.29,
      "ret3y": 99.73
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0514,
      "ret1w": 0.01,
      "ret1m": 0.25,
      "ret3m": -0.82,
      "ret6m": -1.48,
      "ret1y": -1.73,
      "ret2y": -0.91,
      "ret3y": 2.13
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0994,
      "ret1w": 0.01,
      "ret1m": 0.25,
      "ret3m": -0.83,
      "ret6m": -1.45,
      "ret1y": -1.64,
      "ret2y": -0.71,
      "ret3y": 2.77
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0678,
      "ret1w": -0.01,
      "ret1m": 0.07,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.7,
      "ret2y": 1.62,
      "ret3y": 2.96
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1026,
      "ret1w": -0.02,
      "ret1m": 0.05,
      "ret3m": 0.19,
      "ret6m": 0.43,
      "ret1y": 0.78,
      "ret2y": 1.58,
      "ret3y": 3.88
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1124,
      "ret1w": -0.02,
      "ret1m": 0.04,
      "ret3m": 0.2,
      "ret6m": 0.47,
      "ret1y": 0.87,
      "ret2y": 1.77,
      "ret3y": 4.31
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0785,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.13,
      "ret6m": 0.26,
      "ret1y": 0.65,
      "ret2y": 1.49,
      "ret3y": 2.99
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0936,
      "ret1w": -0.01,
      "ret1m": 0.05,
      "ret3m": 0.16,
      "ret6m": 0.34,
      "ret1y": 0.81,
      "ret2y": 1.81,
      "ret3y": 3.65
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.01,
      "ret1w": 0.1,
      "ret1m": 1.08,
      "ret3m": -3.29,
      "ret6m": -5.92,
      "ret1y": -7.43,
      "ret2y": -1.01,
      "ret3y": 4.93
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1654,
      "ret1w": 0.38,
      "ret1m": 1.53,
      "ret3m": -3.06,
      "ret6m": -4.76,
      "ret1y": -7.27,
      "ret2y": -3.2,
      "ret3y": 0.24
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0172,
      "ret1w": 0.11,
      "ret1m": 1.09,
      "ret3m": -3.25,
      "ret6m": -5.81,
      "ret1y": -7.24,
      "ret2y": -0.61,
      "ret3y": 5.79
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0457,
      "ret1w": -0.01,
      "ret1m": 0.07,
      "ret3m": 0.14,
      "ret6m": 0.45,
      "ret1y": 0.85,
      "ret2y": 1.75,
      "ret3y": 3.67
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0988,
      "ret1w": 0.11,
      "ret1m": 0.55,
      "ret3m": -4.13,
      "ret6m": -6.13,
      "ret1y": -9.36,
      "ret2y": -7.45,
      "ret3y": -0.93
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2045,
      "ret1w": -0.08,
      "ret1m": 0.07,
      "ret3m": -0.02,
      "ret6m": -1.46,
      "ret1y": -2.34,
      "ret2y": 0.57,
      "ret3y": 9.36
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1216,
      "ret1w": 0.1,
      "ret1m": 0.61,
      "ret3m": -0.67,
      "ret6m": -1.99,
      "ret1y": -2.41,
      "ret2y": 0.95,
      "ret3y": 6.43
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1929,
      "ret1w": 0.11,
      "ret1m": 0.62,
      "ret3m": -0.63,
      "ret6m": -1.89,
      "ret1y": -2.21,
      "ret2y": 1.35,
      "ret3y": 7.32
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.83,
      "ret1w": 4.81,
      "ret1m": -9.94,
      "ret3m": -25.73,
      "ret6m": -19.98,
      "ret1y": -23.91,
      "ret2y": 30.9,
      "ret3y": 75.46
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.8962,
      "ret1w": 1.7,
      "ret1m": -0.39,
      "ret3m": -4.84,
      "ret6m": -2.96,
      "ret1y": -0.96,
      "ret2y": 4.68,
      "ret3y": 24.27
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6628,
      "ret1w": 0.36,
      "ret1m": 1.03,
      "ret3m": -6.75,
      "ret6m": -13.59,
      "ret1y": -23.47,
      "ret2y": -9.82,
      "ret3y": 15.27
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2224,
      "ret1w": 4.49,
      "ret1m": -0.39,
      "ret3m": -10.42,
      "ret6m": -5.92,
      "ret1y": -2.65,
      "ret2y": 10.48,
      "ret3y": 42.03
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9271,
      "ret1w": -0.02,
      "ret1m": 0.26,
      "ret3m": 1.4,
      "ret6m": -1.23,
      "ret1y": -2.38,
      "ret2y": -5.01,
      "ret3y": -1.93
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.2686,
      "ret1w": 2.38,
      "ret1m": -1.0,
      "ret3m": -16.22,
      "ret6m": -14.46,
      "ret1y": -17.97,
      "ret2y": 18.68,
      "ret3y": 52.98
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.398,
      "ret1w": 2.04,
      "ret1m": 0.53,
      "ret3m": -3.97,
      "ret6m": -5.3,
      "ret1y": -4.85,
      "ret2y": 0.3,
      "ret3y": 10.56
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.765,
      "ret1w": 1.06,
      "ret1m": -2.67,
      "ret3m": -16.85,
      "ret6m": -19.64,
      "ret1y": -28.84,
      "ret2y": -30.83,
      "ret3y": -23.96
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.2257,
      "ret1w": 2.5,
      "ret1m": -9.49,
      "ret3m": -23.85,
      "ret6m": -20.63,
      "ret1y": -24.3,
      "ret2y": 27.83,
      "ret3y": 87.21
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5029,
      "ret1w": 1.89,
      "ret1m": -1.62,
      "ret3m": -5.35,
      "ret6m": -0.26,
      "ret1y": -2.01,
      "ret2y": 21.83,
      "ret3y": 42.37
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5442,
      "ret1w": 1.2,
      "ret1m": -3.36,
      "ret3m": -10.93,
      "ret6m": -7.84,
      "ret1y": -8.2,
      "ret2y": 8.67,
      "ret3y": 35.42
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1635,
      "ret1w": 1.38,
      "ret1m": -3.27,
      "ret3m": -9.86,
      "ret6m": -9.79,
      "ret1y": -14.03,
      "ret2y": -1.55,
      "ret3y": 16.27
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.306,
      "ret1w": 1.32,
      "ret1m": 2.35,
      "ret3m": 6.27,
      "ret6m": -1.66,
      "ret1y": -1.21,
      "ret2y": 5.58,
      "ret3y": -6.96
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.96,
      "ret1w": 1.55,
      "ret1m": 4.09,
      "ret3m": -1.71,
      "ret6m": -5.95,
      "ret1y": -14.15,
      "ret2y": -3.26,
      "ret3y": 36.25
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.332,
      "ret1w": 3.13,
      "ret1m": -1.42,
      "ret3m": -16.26,
      "ret6m": -16.18,
      "ret1y": -14.83,
      "ret2y": 11.97,
      "ret3y": 37.14
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.018,
      "ret1w": -0.03,
      "ret1m": 0.11,
      "ret3m": 0.46,
      "ret6m": 0.76,
      "ret1y": 1.4,
      "ret2y": 2.58,
      "ret3y": 3.97
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0172,
      "ret1w": -0.03,
      "ret1m": 0.11,
      "ret3m": 0.47,
      "ret6m": 0.79,
      "ret1y": 1.42,
      "ret2y": 2.64,
      "ret3y": 4.15
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.22,
      "ret1w": 0.33,
      "ret1m": 1.92,
      "ret3m": -7.58,
      "ret6m": -17.01,
      "ret1y": -20.73,
      "ret2y": -16.21,
      "ret3y": -3.94
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.288,
      "ret1w": 0.75,
      "ret1m": 2.69,
      "ret3m": -12.2,
      "ret6m": -21.54,
      "ret1y": -24.89,
      "ret2y": -15.76,
      "ret3y": 3.62
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4521,
      "ret1w": -0.84,
      "ret1m": 0.7,
      "ret3m": -8.52,
      "ret6m": -17.04,
      "ret1y": -22.14,
      "ret2y": -5.69,
      "ret3y": 30.94
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8554,
      "ret1w": 0.41,
      "ret1m": 1.55,
      "ret3m": -8.81,
      "ret6m": -14.47,
      "ret1y": -15.32,
      "ret2y": -7.7,
      "ret3y": 5.94
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.91,
      "ret1w": 0.42,
      "ret1m": 1.56,
      "ret3m": -8.78,
      "ret6m": -14.38,
      "ret1y": -15.15,
      "ret2y": -7.33,
      "ret3y": 6.81
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7284,
      "ret1w": 0.89,
      "ret1m": 4.76,
      "ret3m": -7.95,
      "ret6m": -16.52,
      "ret1y": -22.06,
      "ret2y": -8.47,
      "ret3y": 7.98
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5996,
      "ret1w": 0.07,
      "ret1m": 1.19,
      "ret3m": -5.52,
      "ret6m": -12.69,
      "ret1y": -14.91,
      "ret2y": -11.56,
      "ret3y": 1.78
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4753,
      "ret1w": 0.59,
      "ret1m": 3.35,
      "ret3m": -3.74,
      "ret6m": -8.55,
      "ret1y": -13.64,
      "ret2y": -2.39,
      "ret3y": 19.41
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5147,
      "ret1w": 0.58,
      "ret1m": 2.98,
      "ret3m": -14.65,
      "ret6m": -26.05,
      "ret1y": -27.02,
      "ret2y": -16.84,
      "ret3y": 5.82
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0147,
      "ret1w": -0.35,
      "ret1m": -0.4,
      "ret3m": -2.25,
      "ret6m": -8.19,
      "ret1y": -9.17,
      "ret2y": -9.52,
      "ret3y": 3.78
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4955,
      "ret1w": 0.34,
      "ret1m": 0.19,
      "ret3m": 2.65,
      "ret6m": -2.22,
      "ret1y": 2.45,
      "ret2y": 8.14,
      "ret3y": 31.0
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.2475,
      "ret1w": 3.11,
      "ret1m": -0.33,
      "ret3m": -9.1,
      "ret6m": -6.6,
      "ret1y": -5.81,
      "ret2y": 4.65,
      "ret3y": 20.41
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2381,
      "ret1w": 0.72,
      "ret1m": 1.37,
      "ret3m": -12.08,
      "ret6m": -21.23,
      "ret1y": -25.14,
      "ret2y": -16.19,
      "ret3y": 1.79
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9715,
      "ret1w": -1.68,
      "ret1m": 2.36,
      "ret3m": -14.04,
      "ret6m": -17.53,
      "ret1y": -22.37,
      "ret2y": -13.49,
      "ret3y": 8.23
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9749,
      "ret1w": -1.68,
      "ret1m": 2.36,
      "ret3m": -13.91,
      "ret6m": -17.37,
      "ret1y": -22.23,
      "ret2y": -13.41,
      "ret3y": 7.99
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2268,
      "ret1w": -0.02,
      "ret1m": 2.01,
      "ret3m": -7.59,
      "ret6m": -13.81,
      "ret1y": -21.33,
      "ret2y": -11.99,
      "ret3y": 5.15
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2558,
      "ret1w": -0.02,
      "ret1m": 2.02,
      "ret3m": -7.55,
      "ret6m": -13.73,
      "ret1y": -21.17,
      "ret2y": -11.63,
      "ret3y": 5.99
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.6847,
      "ret1w": 0.43,
      "ret1m": -0.11,
      "ret3m": -10.26,
      "ret6m": -18.27,
      "ret1y": -24.79,
      "ret2y": -11.55,
      "ret3y": 14.09
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1613,
      "ret1w": 0.01,
      "ret1m": 0.52,
      "ret3m": 0.08,
      "ret6m": -0.82,
      "ret1y": -0.84,
      "ret2y": 1.04,
      "ret3y": 5.36
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1818,
      "ret1w": 0.01,
      "ret1m": 0.53,
      "ret3m": 0.1,
      "ret6m": -0.75,
      "ret1y": -0.69,
      "ret2y": 1.36,
      "ret3y": 6.0
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0884,
      "ret1w": -0.02,
      "ret1m": 0.07,
      "ret3m": 0.17,
      "ret6m": 0.44,
      "ret1y": 0.85,
      "ret2y": 1.92,
      "ret3y": 3.55
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4129,
      "ret1w": -0.01,
      "ret1m": 0.13,
      "ret3m": 0.2,
      "ret6m": 0.16,
      "ret1y": 0.22,
      "ret2y": 0.62,
      "ret3y": 4.84
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4664,
      "ret1w": 0.0,
      "ret1m": 0.14,
      "ret3m": 0.24,
      "ret6m": 0.27,
      "ret1y": 0.43,
      "ret2y": 1.03,
      "ret3y": 5.69
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.888,
      "ret1w": 0.67,
      "ret1m": 3.2,
      "ret3m": -6.73,
      "ret6m": -11.98,
      "ret1y": -3.66,
      "ret2y": 7.62,
      "ret3y": 31.6
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0323,
      "ret1w": 0.75,
      "ret1m": 5.4,
      "ret3m": -9.78,
      "ret6m": -18.67,
      "ret1y": -17.35,
      "ret2y": -10.65,
      "ret3y": 10.52
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 3.9763
      },
      {
        "date": "2026-11-10",
        "nav": 4.1531
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.7247
      },
      {
        "date": "2026-11-10",
        "nav": 2.7698
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 3.1523
      },
      {
        "date": "2026-11-10",
        "nav": 3.2385
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.7708
      },
      {
        "date": "2026-11-10",
        "nav": 0.7694
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.0587
      },
      {
        "date": "2026-11-10",
        "nav": 2.0589
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.6832
      },
      {
        "date": "2026-11-10",
        "nav": 2.711
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 5.4013
      },
      {
        "date": "2026-11-10",
        "nav": 5.399
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.667
      },
      {
        "date": "2026-11-10",
        "nav": 1.688
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.1247
      },
      {
        "date": "2026-11-10",
        "nav": 1.1314
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.549
      },
      {
        "date": "2026-11-10",
        "nav": 2.579
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.166
      },
      {
        "date": "2026-11-10",
        "nav": 1.165
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.264
      },
      {
        "date": "2026-11-10",
        "nav": 2.289
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.2027
      },
      {
        "date": "2026-11-10",
        "nav": 1.2195
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.936
      },
      {
        "date": "2026-11-10",
        "nav": 1.9277
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.4138
      },
      {
        "date": "2026-11-10",
        "nav": 1.4272
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.4177
      },
      {
        "date": "2026-11-10",
        "nav": 1.4563
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.5908
      },
      {
        "date": "2026-11-10",
        "nav": 2.6046
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.946
      },
      {
        "date": "2026-11-10",
        "nav": 0.949
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.4148
      },
      {
        "date": "2026-11-10",
        "nav": 2.4033
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.1989
      },
      {
        "date": "2026-11-10",
        "nav": 1.2123
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.9686
      },
      {
        "date": "2026-11-10",
        "nav": 0.9751
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.0311
      },
      {
        "date": "2026-11-10",
        "nav": 1.038
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.0473
      },
      {
        "date": "2026-11-10",
        "nav": 1.0476
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.0225
      },
      {
        "date": "2026-11-10",
        "nav": 1.0228
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.7145
      },
      {
        "date": "2026-11-10",
        "nav": 0.7145
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.7332
      },
      {
        "date": "2026-11-10",
        "nav": 0.7333
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.9521
      },
      {
        "date": "2026-11-10",
        "nav": 1.9691
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.3685
      },
      {
        "date": "2026-11-10",
        "nav": 2.4122
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.7239
      },
      {
        "date": "2026-11-10",
        "nav": 0.7391
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 3.9995
      },
      {
        "date": "2026-11-10",
        "nav": 4.1157
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.4544
      },
      {
        "date": "2026-11-10",
        "nav": 0.4533
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.4635
      },
      {
        "date": "2026-11-10",
        "nav": 0.4623
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.2579
      },
      {
        "date": "2026-11-10",
        "nav": 1.2567
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.0714
      },
      {
        "date": "2026-11-10",
        "nav": 1.067
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.1703
      },
      {
        "date": "2026-11-10",
        "nav": 1.1659
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.6945
      },
      {
        "date": "2026-11-10",
        "nav": 2.7026
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 2.113
      },
      {
        "date": "2026-11-10",
        "nav": 2.149
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 1.5692
      },
      {
        "date": "2026-11-10",
        "nav": 1.5695
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 0.575
      },
      {
        "date": "2026-11-10",
        "nav": 0.5911
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-09",
        "nav": 8.617
      },
      {
        "date": "2026-11-10",
        "nav": 8.83
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.73,
      "nav": 4.1531,
      "price": 4.1531,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.24,
      "nav": 2.7698,
      "price": 2.7698,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.38,
      "nav": 3.2385,
      "price": 3.2385,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 0.7694,
      "price": 0.7694,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.2,
      "nav": 2.0589,
      "price": 2.0589,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.21,
      "nav": 2.711,
      "price": 2.711,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 5.399,
      "price": 5.399,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 1.688,
      "price": 1.688,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.1314,
      "price": 1.1314,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 2.579,
      "price": 2.579,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.165,
      "price": 1.165,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 2.289,
      "price": 2.289,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.84,
      "nav": 1.2195,
      "price": 1.2195,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.9277,
      "price": 1.9277,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.24,
      "nav": 1.4272,
      "price": 1.4272,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.35,
      "nav": 1.4563,
      "price": 1.4563,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.6046,
      "price": 2.6046,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.44,
      "nav": 0.949,
      "price": 0.949,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.4033,
      "price": 2.4033,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.27,
      "nav": 1.2123,
      "price": 1.2123,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 21.88,
      "sharpe": -0.87,
      "calmar": -0.87
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 7.33,
      "sharpe": -4.33,
      "calmar": -4.33
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 11.31,
      "sharpe": -3.11,
      "calmar": -3.11
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.18,
      "sharpe": 0.73,
      "calmar": 0.73
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 6.01,
      "sharpe": -3.05,
      "calmar": -3.05
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 6.2,
      "sharpe": -2.49,
      "calmar": -2.49
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.49,
      "sharpe": -0.9,
      "calmar": -0.9
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 7.86,
      "sharpe": -1.99,
      "calmar": -1.99
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 4.67,
      "sharpe": -2.68,
      "calmar": -2.68
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 7.9,
      "sharpe": -1.83,
      "calmar": -1.83
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.39,
      "sharpe": 0.33,
      "calmar": 0.33
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 5.15,
      "sharpe": -1.61,
      "calmar": -1.61
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 25.12,
      "sharpe": -2.87,
      "calmar": -2.87
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.07,
      "sharpe": 0.94,
      "calmar": 0.94
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.21,
      "sharpe": -2.07,
      "calmar": -2.07
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 10.59,
      "sharpe": -3.61,
      "calmar": -3.61
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.64,
      "sharpe": -0.78,
      "calmar": -0.78
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 13.25,
      "sharpe": -0.27,
      "calmar": -0.27
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.83,
      "sharpe": -0.16,
      "calmar": -0.16
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 8.14,
      "sharpe": -0.92,
      "calmar": -0.92
    }
  ],
  "news": [
    {
      "title": "甘肃省委副书记、省长孔绍逊11月9日在兰州市宣讲党的二十届五中全会精神并专题调研兰州牛肉拉面产业发展情况。调研中，孔绍逊察看兰州牛肉拉面上下游特色产品展示，了解产业链配套及品牌培育、市场拓展、技能培训、带动就业等情况。他指出，兰州牛肉拉面历经百年传承和创新发展，已成为享誉全国乃至全球的特色饮食文化品牌，也是兰州的一张靓丽名片。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:21",
      "impact": "neutral"
    },
    {
      "title": "经济50强城市排名出炉，这次重回牌桌的是西北“煤都”鄂尔多斯。前三季度，鄂尔多斯地区生产总值4837.1亿元，按不变价格计算同比增长5.6%，增速领跑内蒙古全区12个盟市。目前来看，在全国范围内，鄂尔多斯GDP领先哈尔滨（GDP4831.3亿元）、南宁（GDP4787.87亿元），排名全国第48位。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:14",
      "impact": "neutral"
    },
    {
      "title": "11月5日至10日，第九届中国国际进口博览会（下称“进博会”）在上海举办。记者在国家展区看到，一名来自埃塞俄比亚的咖啡商不断向驻足观众递出咖啡豆样品。这是他第二次来到中国，却是首次参加进博会。他希望在这里遇见真正喜爱埃塞俄比亚咖啡的人，建立长久联结。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:59",
      "impact": "neutral"
    },
    {
      "title": "中新网安塔利亚11月10日电(记者魏园陈溯徐峻杰)当地时间11月10日，在土耳其安塔利亚举行的《联合国气候变化框架公约》第三十一次缔约方大会(COP31)中国角主题边会上，习近平生态文明思想研究中心主任、生态环境部环境与经济政策研究中心主任胡军发布题为《“绿水青山就是金山银山”——中国绿色发展之路》的智库报告，并围绕中国绿色发展的理念、实践与世界意义展开探讨。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:42",
      "impact": "neutral"
    },
    {
      "title": "人民财讯11月10日电，据常德发布，11月10日，市委副书记、市长周振宇主持召开全市重点企业上市培育工作座谈会。周振宇强调，要精准筛选，做实后备资源。紧扣常德主导产业、新兴产业、未来产业发展布局，精准挖掘筛选一批主业清晰、研发能力强、市场前景好、发展潜力大、实控人上市意愿强的企业，分层分类调整完善上市后备资源库，真正形成梯队接续、滚动培育的良性格局。要优化服务，加快上市进程。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:14",
      "impact": "neutral"
    },
    {
      "title": "从基础研究到成果转化，再到科技企业成长，长三角正在探索不同类型财政资金与股权投资基金的协同支持机制。近日，在2026沿沪宁城市协同创新日活动上，国家创业投资引导基金有限公司董事长霍福鹏介绍，截至10月底，规模551亿元的长三角创业投资引导基金已立项66只子基金和12个直投项目，合计立项金额185亿元。已经投决子基金19只，直投项目7个，合计投资金额56亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:49",
      "impact": "neutral"
    },
    {
      "title": "近期，国家网信办、金融监管总局联合整治“征信修复”“债务协商”“代理减债”等金融黑灰产，集中关停违规账号、清理不实营销信息。此前，中国互联网金融协会发布风险提示，点名一些不法中介借“律师事务所”“法律咨询”之名，通过短视频、社交平台、电商平台大量推介“债务协商”“债务优化”“债务减免”，诱导金融消费者付费委托。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:43",
      "impact": "neutral"
    },
    {
      "title": "阿里巴巴、字节跳动、腾讯等企业相继布局后，联想也宣布在河北张家口建设智算中心。11月10日，联想集团在正式发布“联想万全混合词元工厂”品牌，并宣布将在张家口落地首个万全混合词元母本工厂。按照规划，该项目初期将建设1.5万P异构算力集群、约100兆瓦智算中心，词元年产量目标超过2000万亿。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:43",
      "impact": "neutral"
    },
    {
      "title": "11月10日，自然资源部、国家发展改革委发布关于“人工智能+自然资源”的实施意见。其中提出，到2028年，实现人工智能在自然资源领域的示范应用，建成时空地理信息、国土空间规划与治理、海洋、地质矿产、林业草原等重点方向的高质量数据集、大模型和智能体，“一张图”智能化水平全面提升，形成可复制、可推广的典型应用场景，助推自然资源新质生产力发展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:40",
      "impact": "neutral"
    },
    {
      "title": "两大科技巨头同日上新推出机器人“大脑”当地时间11月9日，英伟达、Anthropic分别发布新品，均涉及机器人智能方面。先是Anthropic放出新一代旗舰模型Fable5.2。作为一个通用大模型，Fable5.2在机器人控制方面展现出的能力引发业界瞩目。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:28",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 52,
    "label": "中性",
    "upDownRatio": "3,536/1,232",
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
