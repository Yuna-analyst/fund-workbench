// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-25 19:52:45
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-25 19:52 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-25",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3476.47,
      "change": -71.9,
      "changePct": "-2.03%",
      "high": 3526.34,
      "low": 3468.65,
      "volume": 472561427.0,
      "amount": 652709380000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10086.36,
      "change": -337.24,
      "changePct": "-3.24%",
      "high": 10402.35,
      "low": 10086.36,
      "volume": 557518977.0,
      "amount": 730388150000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2183.58,
      "change": -95.41,
      "changePct": "-4.19%",
      "high": 2274.18,
      "low": 2183.58,
      "volume": 160652775.0,
      "amount": 354876600000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1186.14,
      "change": -63.95,
      "changePct": "-5.12%",
      "high": 1230.4,
      "low": 1185.45,
      "volume": 9532084.0,
      "amount": 82282620000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3898.24,
      "change": -65.58,
      "changePct": "-1.65%",
      "high": 3937.33,
      "low": 3886.92,
      "volume": 181773487.0,
      "amount": 410985200000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 5890.41,
      "change": -222.02,
      "changePct": "-3.63%",
      "high": 6099.3,
      "low": 5890.41,
      "volume": 127467389.0,
      "amount": 222561350000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.45万亿",
      "label": "成交额",
      "rawAmount": 2453803300000.0,
      "change": ""
    },
    "upDown": {
      "val": "352/2,824",
      "label": "涨/跌家数",
      "rawUp": 352,
      "rawDown": 2824,
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
    "totalInflow": 1.19,
    "totalOutflow": 0,
    "netFlow": 1.19,
    "netFlowTrend": [
      0.24,
      0.48,
      0.71,
      0.95,
      1.19
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
      "name": "白酒",
      "inflow": 1.53,
      "pct": 0.93
    },
    {
      "name": "医药",
      "inflow": 0.83,
      "pct": 0.27
    },
    {
      "name": "食品",
      "inflow": 0.07,
      "pct": 0.39
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -1.3
    },
    {
      "name": "钢铁",
      "inflow": -0.12,
      "pct": -1.21
    },
    {
      "name": "家电",
      "inflow": -0.14,
      "pct": -1.89
    },
    {
      "name": "农业",
      "inflow": -0.15,
      "pct": -1.96
    },
    {
      "name": "游戏",
      "inflow": -0.18,
      "pct": -2.9
    },
    {
      "name": "云计算",
      "inflow": -0.25,
      "pct": -3.32
    },
    {
      "name": "地产",
      "inflow": -0.39,
      "pct": -2.19
    },
    {
      "name": "人工智能",
      "inflow": -0.43,
      "pct": -2.78
    },
    {
      "name": "光伏",
      "inflow": -0.53,
      "pct": -2.95
    },
    {
      "name": "传媒",
      "inflow": -0.69,
      "pct": -3.4
    },
    {
      "name": "医疗",
      "inflow": -0.84,
      "pct": -1.23
    },
    {
      "name": "煤炭",
      "inflow": -0.94,
      "pct": -0.35
    },
    {
      "name": "创新药",
      "inflow": -1.0,
      "pct": -0.65
    },
    {
      "name": "有色",
      "inflow": -1.08,
      "pct": -2.65
    },
    {
      "name": "券商",
      "inflow": -2.4,
      "pct": -1.72
    },
    {
      "name": "银行",
      "inflow": -3.14,
      "pct": -0.22
    },
    {
      "name": "通信",
      "inflow": -8.3,
      "pct": -2.86
    }
  ],
  "sectors": [
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.435,
      "changePct": 0.93,
      "change": 0.004,
      "turnover": 5.09
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.517,
      "changePct": 0.39,
      "change": 0.002,
      "turnover": 0.23
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.375,
      "changePct": 0.27,
      "change": 0.001,
      "turnover": 2.76
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.921,
      "changePct": -0.22,
      "change": -0.002,
      "turnover": 10.47
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.129,
      "changePct": -0.35,
      "change": -0.004,
      "turnover": 3.13
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.759,
      "changePct": -0.65,
      "change": -0.005,
      "turnover": 3.32
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 0.976,
      "changePct": -1.21,
      "change": -0.012,
      "turnover": 0.4
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.321,
      "changePct": -1.23,
      "change": -0.004,
      "turnover": 2.8
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.913,
      "changePct": -1.3,
      "change": -0.012,
      "turnover": 0.05
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.456,
      "changePct": -1.72,
      "change": -0.008,
      "turnover": 8.0
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.35,
      "changePct": -1.89,
      "change": -0.026,
      "turnover": 0.45
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.701,
      "changePct": -1.96,
      "change": -0.014,
      "turnover": 0.5
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 0.984,
      "changePct": -2.19,
      "change": -0.022,
      "turnover": 1.3
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.213,
      "changePct": -2.65,
      "change": -0.033,
      "turnover": 3.6
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.7,
      "changePct": -2.78,
      "change": -0.02,
      "turnover": 1.45
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.373,
      "changePct": -2.86,
      "change": -0.011,
      "turnover": 27.68
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.871,
      "changePct": -2.9,
      "change": -0.026,
      "turnover": 0.61
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.624,
      "changePct": -2.95,
      "change": -0.019,
      "turnover": 1.77
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.222,
      "changePct": -3.32,
      "change": -0.042,
      "turnover": 0.82
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.711,
      "changePct": -3.4,
      "change": -0.025,
      "turnover": 2.29
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.89,
      "changePct": -3.47,
      "change": -0.032,
      "turnover": 2.18
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.884,
      "changePct": -3.49,
      "change": -0.032,
      "turnover": 0.13
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.587,
      "changePct": -3.61,
      "change": -0.022,
      "turnover": 7.7
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.772,
      "changePct": -4.22,
      "change": -0.078,
      "turnover": 0.87
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.57,
      "changePct": -4.68,
      "change": -0.028,
      "turnover": 0.27
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.164,
      "changePct": -5.29,
      "change": -0.065,
      "turnover": 0.89
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.773,
      "changePct": -6.08,
      "change": -0.05,
      "turnover": 6.0
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.708,
      "changePct": -6.72,
      "change": -0.051,
      "turnover": 11.47
    }
  ],
  "etfFlow": [
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.375,
      "changePct": 0.27,
      "amount": 2.76,
      "netFlow": 0.69
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.772,
      "changePct": -4.22,
      "amount": 0.87,
      "netFlow": -0.22
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.142,
      "changePct": -1.62,
      "amount": 7.92,
      "netFlow": -1.98
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.456,
      "changePct": -1.72,
      "amount": 8.0,
      "netFlow": -2.0
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.708,
      "changePct": -6.72,
      "amount": 11.47,
      "netFlow": -2.87
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.857,
      "changePct": -1.07,
      "amount": 72.96,
      "netFlow": -18.24
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 3.97,
      "changePct": -1.56,
      "amount": 79.12,
      "netFlow": -19.78
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 5.922,
      "changePct": -3.33,
      "amount": 95.11,
      "netFlow": -23.78
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.858,
      "changePct": -1.58,
      "amount": 95.45,
      "netFlow": -23.86
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.254,
      "changePct": -4.93,
      "amount": 98.78,
      "netFlow": -24.7
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 3.97,
      "changePct": -1.56,
      "amount": 79.12,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.857,
      "changePct": -1.07,
      "amount": 72.96,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 5.922,
      "changePct": -3.33,
      "amount": 95.11,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.142,
      "changePct": -1.62,
      "amount": 7.92,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.858,
      "changePct": -1.58,
      "amount": 95.45,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "白酒",
      "turnover": 5.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 10.47,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "煤炭",
      "turnover": 3.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 3.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 2.8,
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
      "name": "券商",
      "turnover": 8.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.3,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 3.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 27.68,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.61,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.77,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.29,
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
      "nav": 3.3638,
      "ret1w": -6.98,
      "ret1m": -6.72,
      "ret3m": -17.85,
      "ret6m": -25.06,
      "ret1y": -37.25,
      "ret2y": -10.41,
      "ret3y": 52.51
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.5594,
      "ret1w": -3.39,
      "ret1m": -1.59,
      "ret3m": -20.98,
      "ret6m": -38.43,
      "ret1y": -48.34,
      "ret2y": -31.28,
      "ret3y": -4.27
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.9003,
      "ret1w": -2.1,
      "ret1m": -1.7,
      "ret3m": -30.67,
      "ret6m": -47.93,
      "ret1y": -50.49,
      "ret2y": -7.47,
      "ret3y": 54.3
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7685,
      "ret1w": -0.5,
      "ret1m": -0.63,
      "ret3m": 7.89,
      "ret6m": 8.68,
      "ret1y": 10.5,
      "ret2y": -3.37,
      "ret3y": 6.09
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.7599,
      "ret1w": -2.83,
      "ret1m": -4.71,
      "ret3m": -10.61,
      "ret6m": -19.03,
      "ret1y": -33.85,
      "ret2y": -35.9,
      "ret3y": -29.0
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.3769,
      "ret1w": -2.95,
      "ret1m": -5.51,
      "ret3m": -7.68,
      "ret6m": -13.45,
      "ret1y": -27.1,
      "ret2y": -29.29,
      "ret3y": -2.09
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1185,
      "ret1w": -1.84,
      "ret1m": -3.08,
      "ret3m": -1.33,
      "ret6m": -6.68,
      "ret1y": -6.55,
      "ret2y": -1.7,
      "ret3y": 28.15
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.468,
      "ret1w": -4.43,
      "ret1m": -7.03,
      "ret3m": -14.95,
      "ret6m": -21.66,
      "ret1y": -31.02,
      "ret2y": -16.97,
      "ret3y": 12.75
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0324,
      "ret1w": -3.25,
      "ret1m": -4.23,
      "ret3m": -12.24,
      "ret6m": -22.23,
      "ret1y": -28.2,
      "ret2y": -15.13,
      "ret3y": 0.23
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.348,
      "ret1w": -3.18,
      "ret1m": -4.67,
      "ret3m": -13.93,
      "ret6m": -30.64,
      "ret1y": -34.34,
      "ret2y": 13.32,
      "ret3y": 92.3
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.146,
      "ret1w": -0.35,
      "ret1m": -1.72,
      "ret3m": 3.8,
      "ret6m": 3.52,
      "ret1y": 5.62,
      "ret2y": -8.9,
      "ret3y": -7.13
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 1.959,
      "ret1w": -2.49,
      "ret1m": -8.54,
      "ret3m": -13.97,
      "ret6m": -18.03,
      "ret1y": -20.94,
      "ret2y": -23.12,
      "ret3y": -7.2
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1101,
      "ret1w": -7.42,
      "ret1m": -8.16,
      "ret3m": -14.95,
      "ret6m": -35.8,
      "ret1y": -61.61,
      "ret2y": -58.39,
      "ret3y": -40.09
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8692,
      "ret1w": 0.01,
      "ret1m": -1.36,
      "ret3m": 0.78,
      "ret6m": -2.8,
      "ret1y": 4.31,
      "ret2y": -1.43,
      "ret3y": -1.43
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.2836,
      "ret1w": -3.37,
      "ret1m": -5.83,
      "ret3m": -12.95,
      "ret6m": -21.66,
      "ret1y": -29.22,
      "ret2y": -15.79,
      "ret3y": 11.09
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2,
      "ret1w": -5.03,
      "ret1m": -6.62,
      "ret3m": -31.71,
      "ret6m": -49.09,
      "ret1y": -57.24,
      "ret2y": -5.03,
      "ret3y": 20.93
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.491,
      "ret1w": -0.95,
      "ret1m": -2.52,
      "ret3m": -1.57,
      "ret6m": -1.65,
      "ret1y": -5.31,
      "ret2y": -7.67,
      "ret3y": 2.83
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.852,
      "ret1w": -1.62,
      "ret1m": -2.52,
      "ret3m": -10.5,
      "ret6m": -18.47,
      "ret1y": -10.13,
      "ret2y": -18.47,
      "ret3y": -20.22
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4207,
      "ret1w": 0.1,
      "ret1m": -0.64,
      "ret3m": 4.64,
      "ret6m": 3.44,
      "ret1y": 4.51,
      "ret2y": 3.01,
      "ret3y": 13.3
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.0951,
      "ret1w": -2.95,
      "ret1m": -5.33,
      "ret3m": -10.71,
      "ret6m": -16.97,
      "ret1y": -17.64,
      "ret2y": -5.44,
      "ret3y": 25.83
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.8754,
      "ret1w": -3.88,
      "ret1m": -4.82,
      "ret3m": -16.76,
      "ret6m": -30.74,
      "ret1y": -38.7,
      "ret2y": -21.76,
      "ret3y": -3.52
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.932,
      "ret1w": -3.89,
      "ret1m": -4.81,
      "ret3m": -16.74,
      "ret6m": -30.68,
      "ret1y": -38.58,
      "ret2y": -21.46,
      "ret3y": -2.75
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0234,
      "ret1w": -0.59,
      "ret1m": -1.07,
      "ret3m": -3.02,
      "ret6m": -6.14,
      "ret1y": -7.27,
      "ret2y": -5.47,
      "ret3y": 0.82
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 0.9995,
      "ret1w": -0.59,
      "ret1m": -1.06,
      "ret3m": -2.97,
      "ret6m": -6.0,
      "ret1y": -6.99,
      "ret2y": -4.9,
      "ret3y": 2.04
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6917,
      "ret1w": -0.77,
      "ret1m": -2.41,
      "ret3m": -0.5,
      "ret6m": -3.56,
      "ret1y": -9.08,
      "ret2y": -14.57,
      "ret3y": 0.67
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7101,
      "ret1w": -0.77,
      "ret1m": -2.39,
      "ret3m": -0.45,
      "ret6m": -3.43,
      "ret1y": -8.84,
      "ret2y": -14.14,
      "ret3y": 1.69
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8682,
      "ret1w": -2.07,
      "ret1m": -0.8,
      "ret3m": -18.13,
      "ret6m": -32.09,
      "ret1y": -37.25,
      "ret2y": 2.9,
      "ret3y": 66.27
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.1354,
      "ret1w": -2.56,
      "ret1m": -3.71,
      "ret3m": -8.83,
      "ret6m": -15.6,
      "ret1y": -21.34,
      "ret2y": 2.92,
      "ret3y": 40.97
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6474,
      "ret1w": -4.09,
      "ret1m": -5.03,
      "ret3m": -9.51,
      "ret6m": -11.86,
      "ret1y": -27.21,
      "ret2y": -18.94,
      "ret3y": -7.29
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.6394,
      "ret1w": -3.08,
      "ret1m": -3.1,
      "ret3m": -10.64,
      "ret6m": -12.62,
      "ret1y": -20.13,
      "ret2y": 22.6,
      "ret3y": 81.34
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4414,
      "ret1w": -2.19,
      "ret1m": -2.47,
      "ret3m": -5.2,
      "ret6m": -11.67,
      "ret1y": -21.97,
      "ret2y": -1.14,
      "ret3y": 22.41
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4502,
      "ret1w": -2.19,
      "ret1m": -2.47,
      "ret3m": -5.18,
      "ret6m": -11.59,
      "ret1y": -21.83,
      "ret2y": -0.77,
      "ret3y": 23.38
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2476,
      "ret1w": -0.65,
      "ret1m": -1.35,
      "ret3m": -0.31,
      "ret6m": -2.37,
      "ret1y": -2.94,
      "ret2y": -3.22,
      "ret3y": -0.55
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0512,
      "ret1w": 0.13,
      "ret1m": -1.15,
      "ret3m": -3.01,
      "ret6m": -6.78,
      "ret1y": -3.52,
      "ret2y": -9.01,
      "ret3y": 0.45
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1598,
      "ret1w": -0.17,
      "ret1m": -1.25,
      "ret3m": -0.31,
      "ret6m": -17.57,
      "ret1y": -31.56,
      "ret2y": -21.2,
      "ret3y": -17.13
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6131,
      "ret1w": -1.09,
      "ret1m": -0.21,
      "ret3m": -7.51,
      "ret6m": -12.7,
      "ret1y": -15.95,
      "ret2y": -4.84,
      "ret3y": 23.12
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 1.986,
      "ret1w": -3.4,
      "ret1m": -3.4,
      "ret3m": -21.75,
      "ret6m": -39.28,
      "ret1y": -51.75,
      "ret2y": -1.83,
      "ret3y": 59.52
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5854,
      "ret1w": -0.11,
      "ret1m": -1.4,
      "ret3m": 5.16,
      "ret6m": 6.48,
      "ret1y": 8.59,
      "ret2y": 4.73,
      "ret3y": 7.68
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4414,
      "ret1w": -4.91,
      "ret1m": -7.98,
      "ret3m": -17.17,
      "ret6m": -29.8,
      "ret1y": -42.61,
      "ret2y": -19.67,
      "ret3y": -28.15
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.063,
      "ret1w": -2.28,
      "ret1m": -1.09,
      "ret3m": -25.99,
      "ret6m": -42.7,
      "ret1y": -41.52,
      "ret2y": 12.19,
      "ret3y": 101.47
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0413,
      "ret1w": -0.18,
      "ret1m": -0.2,
      "ret3m": -1.33,
      "ret6m": -2.23,
      "ret1y": -3.16,
      "ret2y": -1.48,
      "ret3y": 1.38
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.089,
      "ret1w": -0.17,
      "ret1m": -0.19,
      "ret3m": -1.32,
      "ret6m": -2.2,
      "ret1y": -3.07,
      "ret2y": -1.27,
      "ret3y": 2.01
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": -0.06,
      "ret6m": 0.25,
      "ret1y": 0.54,
      "ret2y": 1.44,
      "ret3y": 2.69
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1017,
      "ret1w": -0.03,
      "ret1m": 0.0,
      "ret3m": -0.03,
      "ret6m": 0.29,
      "ret1y": 0.61,
      "ret2y": 1.44,
      "ret3y": 3.69
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1116,
      "ret1w": -0.04,
      "ret1m": 0.0,
      "ret3m": -0.02,
      "ret6m": 0.33,
      "ret1y": 0.72,
      "ret2y": 1.64,
      "ret3y": 4.12
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.078,
      "ret1w": -0.02,
      "ret1m": 0.0,
      "ret3m": -0.02,
      "ret6m": 0.18,
      "ret1y": 0.52,
      "ret2y": 1.37,
      "ret3y": 2.72
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0932,
      "ret1w": -0.02,
      "ret1m": 0.0,
      "ret3m": 0.01,
      "ret6m": 0.25,
      "ret1y": 0.67,
      "ret2y": 1.69,
      "ret3y": 3.36
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9761,
      "ret1w": -1.16,
      "ret1m": -1.72,
      "ret3m": -4.35,
      "ret6m": -8.26,
      "ret1y": -11.54,
      "ret2y": -2.82,
      "ret3y": 2.06
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.113,
      "ret1w": -1.4,
      "ret1m": -2.36,
      "ret3m": -5.36,
      "ret6m": -8.46,
      "ret1y": -12.44,
      "ret2y": -7.0,
      "ret3y": -4.04
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9832,
      "ret1w": -1.16,
      "ret1m": -1.71,
      "ret3m": -4.31,
      "ret6m": -8.17,
      "ret1y": -11.36,
      "ret2y": -2.42,
      "ret3y": 2.88
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0441,
      "ret1w": -0.03,
      "ret1m": 0.0,
      "ret3m": -0.12,
      "ret6m": 0.23,
      "ret1y": 0.59,
      "ret2y": 1.52,
      "ret3y": 3.39
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0764,
      "ret1w": -0.62,
      "ret1m": -0.85,
      "ret3m": -4.18,
      "ret6m": -7.83,
      "ret1y": -11.02,
      "ret2y": -8.48,
      "ret3y": -1.93
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1968,
      "ret1w": -0.18,
      "ret1m": -0.42,
      "ret3m": -0.2,
      "ret6m": -1.52,
      "ret1y": -2.56,
      "ret2y": 0.76,
      "ret3y": 9.83
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1073,
      "ret1w": -0.4,
      "ret1m": -0.6,
      "ret3m": -1.2,
      "ret6m": -2.72,
      "ret1y": -4.38,
      "ret2y": 0.08,
      "ret3y": 6.44
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1778,
      "ret1w": -0.41,
      "ret1m": -0.59,
      "ret3m": -1.17,
      "ret6m": -2.62,
      "ret1y": -4.18,
      "ret2y": 0.48,
      "ret3y": 7.33
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.5628,
      "ret1w": -0.94,
      "ret1m": -4.32,
      "ret3m": -5.59,
      "ret6m": -15.2,
      "ret1y": -26.86,
      "ret2y": -11.11,
      "ret3y": 16.3
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.713,
      "ret1w": 0.28,
      "ret1m": -4.04,
      "ret3m": -12.62,
      "ret6m": -25.96,
      "ret1y": -27.76,
      "ret2y": -36.85,
      "ret3y": -19.34
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.4663,
      "ret1w": 1.51,
      "ret1m": -2.51,
      "ret3m": -9.33,
      "ret6m": -14.11,
      "ret1y": -11.89,
      "ret2y": 5.04,
      "ret3y": 32.16
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1173,
      "ret1w": 3.52,
      "ret1m": -1.84,
      "ret3m": -6.6,
      "ret6m": -15.07,
      "ret1y": -16.43,
      "ret2y": -2.73,
      "ret3y": 15.15
    },
    {
      "code": "262001",
      "name": "景顺长城大中华混合(QDII)A人民币",
      "type": "QDII",
      "nav": 1.817,
      "ret1w": 1.79,
      "ret1m": -1.89,
      "ret3m": -7.39,
      "ret6m": -14.81,
      "ret1y": -21.85,
      "ret2y": -17.89,
      "ret3y": 4.13
    },
    {
      "code": "241001",
      "name": "华宝海外中国成长混合",
      "type": "QDII",
      "nav": 1.225,
      "ret1w": -1.61,
      "ret1m": -6.27,
      "ret3m": -6.84,
      "ret6m": -18.87,
      "ret1y": -26.07,
      "ret2y": -12.94,
      "ret3y": 17.0
    },
    {
      "code": "161229",
      "name": "国投中国价值LOF",
      "type": "QDII",
      "nav": 1.3438,
      "ret1w": -0.24,
      "ret1m": -2.59,
      "ret3m": 0.5,
      "ret6m": -4.21,
      "ret1y": -5.07,
      "ret2y": -16.2,
      "ret3y": 9.35
    },
    {
      "code": "160125",
      "name": "南方香港优选股票",
      "type": "QDII",
      "nav": 1.357,
      "ret1w": -0.67,
      "ret1m": -3.88,
      "ret3m": -2.3,
      "ret6m": -13.74,
      "ret1y": -24.21,
      "ret2y": -19.68,
      "ret3y": 23.98
    },
    {
      "code": "110011",
      "name": "易方达优质精选混合(QDII)",
      "type": "QDII",
      "nav": 3.9828,
      "ret1w": 0.14,
      "ret1m": -2.48,
      "ret3m": 1.87,
      "ret6m": -5.25,
      "ret1y": -11.78,
      "ret2y": -29.2,
      "ret3y": -18.42
    },
    {
      "code": "100061",
      "name": "富国中国中小盘混合(QDII)人民币A",
      "type": "QDII",
      "nav": 2.7099,
      "ret1w": -1.01,
      "ret1m": -4.27,
      "ret3m": -5.22,
      "ret6m": -14.71,
      "ret1y": -23.24,
      "ret2y": -17.18,
      "ret3y": 20.33
    },
    {
      "code": "070012",
      "name": "嘉实海外中国股票混合",
      "type": "QDII",
      "nav": 0.722,
      "ret1w": -0.82,
      "ret1m": -4.75,
      "ret3m": -4.62,
      "ret6m": -15.16,
      "ret1y": -15.75,
      "ret2y": -21.18,
      "ret3y": 5.25
    },
    {
      "code": "050015",
      "name": "博时大中华亚太精选",
      "type": "QDII",
      "nav": 1.066,
      "ret1w": 5.75,
      "ret1m": -0.09,
      "ret3m": -12.84,
      "ret6m": -18.44,
      "ret1y": -25.45,
      "ret2y": 2.9,
      "ret3y": 25.71
    },
    {
      "code": "040021",
      "name": "华安大中华升级股票(QDII)A",
      "type": "QDII",
      "nav": 2.287,
      "ret1w": 1.6,
      "ret1m": -2.89,
      "ret3m": -14.38,
      "ret6m": -21.57,
      "ret1y": -30.08,
      "ret2y": 3.86,
      "ret3y": 60.04
    },
    {
      "code": "040018",
      "name": "华安香港精选股票(QDII)",
      "type": "QDII",
      "nav": 2.446,
      "ret1w": 0.37,
      "ret1m": -3.66,
      "ret3m": -10.63,
      "ret6m": -20.94,
      "ret1y": -32.41,
      "ret2y": -10.6,
      "ret3y": 36.72
    },
    {
      "code": "029177",
      "name": "国投瑞银中国价值发现股票(QDII-LOF)C",
      "type": "QDII",
      "nav": 1.3527,
      "ret1w": -0.24,
      "ret1m": -2.6,
      "ret3m": 0.48,
      "ret6m": null,
      "ret1y": null,
      "ret2y": null,
      "ret3y": null
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0122,
      "ret1w": -0.09,
      "ret1m": -0.06,
      "ret3m": -0.03,
      "ret6m": 0.44,
      "ret1y": 0.96,
      "ret2y": 2.29,
      "ret3y": 3.61
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 0.9999,
      "ret1w": -0.09,
      "ret1m": -0.06,
      "ret3m": -0.03,
      "ret6m": 0.47,
      "ret1y": 0.98,
      "ret2y": 2.35,
      "ret3y": 3.78
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.16,
      "ret1w": -1.94,
      "ret1m": -2.44,
      "ret3m": -7.05,
      "ret6m": -17.67,
      "ret1y": -26.72,
      "ret2y": -16.43,
      "ret3y": -3.25
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.082,
      "ret1w": -3.03,
      "ret1m": -5.1,
      "ret3m": -13.43,
      "ret6m": -26.09,
      "ret1y": -32.84,
      "ret2y": -18.96,
      "ret3y": 0.34
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.2994,
      "ret1w": -1.46,
      "ret1m": -4.49,
      "ret3m": -12.93,
      "ret6m": -23.01,
      "ret1y": -25.96,
      "ret2y": -11.68,
      "ret3y": 23.75
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.7672,
      "ret1w": -1.87,
      "ret1m": -2.48,
      "ret3m": -7.48,
      "ret6m": -16.64,
      "ret1y": -20.04,
      "ret2y": -8.62,
      "ret3y": 6.74
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8195,
      "ret1w": -1.86,
      "ret1m": -2.48,
      "ret3m": -7.45,
      "ret6m": -16.55,
      "ret1y": -19.88,
      "ret2y": -8.25,
      "ret3y": 7.6
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.5426,
      "ret1w": -3.36,
      "ret1m": -5.92,
      "ret3m": -12.88,
      "ret6m": -22.49,
      "ret1y": -30.68,
      "ret2y": -13.96,
      "ret3y": 4.07
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5394,
      "ret1w": -1.56,
      "ret1m": -2.04,
      "ret3m": -4.78,
      "ret6m": -13.39,
      "ret1y": -19.02,
      "ret2y": -11.3,
      "ret3y": 4.11
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.3292,
      "ret1w": -2.66,
      "ret1m": -5.88,
      "ret3m": -10.16,
      "ret6m": -15.4,
      "ret1y": -20.58,
      "ret2y": -7.74,
      "ret3y": 14.1
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.3992,
      "ret1w": -3.11,
      "ret1m": -3.53,
      "ret3m": -13.45,
      "ret6m": -28.32,
      "ret1y": -37.42,
      "ret2y": -18.66,
      "ret3y": 3.47
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.98,
      "ret1w": -0.85,
      "ret1m": -0.83,
      "ret3m": -0.62,
      "ret6m": -8.56,
      "ret1y": -7.44,
      "ret2y": -8.6,
      "ret3y": 7.29
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4234,
      "ret1w": -0.54,
      "ret1m": -2.91,
      "ret3m": -4.39,
      "ret6m": -7.71,
      "ret1y": -3.8,
      "ret2y": 4.54,
      "ret3y": 23.92
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.082,
      "ret1w": -2.48,
      "ret1m": -3.71,
      "ret3m": -11.11,
      "ret6m": -24.69,
      "ret1y": -32.06,
      "ret2y": -18.65,
      "ret3y": 0.86
    },
    {
      "code": "530015",
      "name": "建信深证基本面60ETF联接A",
      "type": "指数型",
      "nav": 2.4152,
      "ret1w": -0.93,
      "ret1m": -2.55,
      "ret3m": -1.39,
      "ret6m": -8.1,
      "ret1y": -9.27,
      "ret2y": -8.09,
      "ret3y": -1.01
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9125,
      "ret1w": 1.38,
      "ret1m": -1.94,
      "ret3m": -9.76,
      "ret6m": -23.9,
      "ret1y": -28.72,
      "ret2y": -13.31,
      "ret3y": 5.24
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9159,
      "ret1w": 1.38,
      "ret1m": -1.94,
      "ret3m": -9.72,
      "ret6m": -23.72,
      "ret1y": -28.52,
      "ret2y": -13.21,
      "ret3y": 4.94
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1767,
      "ret1w": -0.01,
      "ret1m": -1.7,
      "ret3m": -5.89,
      "ret6m": -15.72,
      "ret1y": -25.25,
      "ret2y": -12.04,
      "ret3y": 5.51
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2047,
      "ret1w": -0.01,
      "ret1m": -1.7,
      "ret3m": -5.85,
      "ret6m": -15.63,
      "ret1y": -25.09,
      "ret2y": -11.69,
      "ret3y": 6.37
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5564,
      "ret1w": 0.54,
      "ret1m": -1.31,
      "ret3m": -10.73,
      "ret6m": -22.54,
      "ret1y": -31.99,
      "ret2y": -14.12,
      "ret3y": 10.77
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.148,
      "ret1w": -0.26,
      "ret1m": -0.18,
      "ret3m": -1.0,
      "ret6m": -1.64,
      "ret1y": -1.9,
      "ret2y": 0.06,
      "ret3y": 4.31
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1685,
      "ret1w": -0.25,
      "ret1m": -0.17,
      "ret3m": -0.97,
      "ret6m": -1.57,
      "ret1y": -1.73,
      "ret2y": 0.38,
      "ret3y": 4.96
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0878,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": -0.03,
      "ret6m": 0.34,
      "ret1y": 0.69,
      "ret2y": 1.74,
      "ret3y": 3.3
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4091,
      "ret1w": -0.06,
      "ret1m": -0.04,
      "ret3m": -0.22,
      "ret6m": -0.07,
      "ret1y": 0.12,
      "ret2y": 0.33,
      "ret3y": 4.7
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4626,
      "ret1w": -0.06,
      "ret1m": -0.04,
      "ret3m": -0.18,
      "ret6m": 0.03,
      "ret1y": 0.32,
      "ret2y": 0.74,
      "ret3y": 5.54
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7387,
      "ret1w": -2.41,
      "ret1m": -3.36,
      "ret3m": -10.79,
      "ret6m": -17.25,
      "ret1y": -14.98,
      "ret2y": 0.23,
      "ret3y": 24.41
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9089,
      "ret1w": -2.77,
      "ret1m": -3.99,
      "ret3m": -15.37,
      "ret6m": -27.26,
      "ret1y": -27.11,
      "ret2y": -20.77,
      "ret3y": -0.69
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 3.9422
      },
      {
        "date": "2026-11-16",
        "nav": 3.7654
      },
      {
        "date": "2026-11-17",
        "nav": 3.6692
      },
      {
        "date": "2026-11-18",
        "nav": 3.6062
      },
      {
        "date": "2026-11-19",
        "nav": 3.5039
      },
      {
        "date": "2026-11-20",
        "nav": 3.2803
      },
      {
        "date": "2026-11-23",
        "nav": 3.5559
      },
      {
        "date": "2026-11-24",
        "nav": 3.6161
      },
      {
        "date": "2026-11-25",
        "nav": 3.3638
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.7462
      },
      {
        "date": "2026-11-16",
        "nav": 2.5977
      },
      {
        "date": "2026-11-17",
        "nav": 2.5898
      },
      {
        "date": "2026-11-18",
        "nav": 2.6008
      },
      {
        "date": "2026-11-19",
        "nav": 2.6355
      },
      {
        "date": "2026-11-20",
        "nav": 2.5789
      },
      {
        "date": "2026-11-23",
        "nav": 2.6229
      },
      {
        "date": "2026-11-24",
        "nav": 2.6493
      },
      {
        "date": "2026-11-25",
        "nav": 2.5594
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 3.2856
      },
      {
        "date": "2026-11-16",
        "nav": 2.9717
      },
      {
        "date": "2026-11-17",
        "nav": 2.889
      },
      {
        "date": "2026-11-18",
        "nav": 2.9506
      },
      {
        "date": "2026-11-19",
        "nav": 2.9648
      },
      {
        "date": "2026-11-20",
        "nav": 2.7862
      },
      {
        "date": "2026-11-23",
        "nav": 2.9703
      },
      {
        "date": "2026-11-24",
        "nav": 2.9625
      },
      {
        "date": "2026-11-25",
        "nav": 2.9003
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.7682
      },
      {
        "date": "2026-11-16",
        "nav": 0.7771
      },
      {
        "date": "2026-11-17",
        "nav": 0.7803
      },
      {
        "date": "2026-11-18",
        "nav": 0.7734
      },
      {
        "date": "2026-11-19",
        "nav": 0.7744
      },
      {
        "date": "2026-11-20",
        "nav": 0.7701
      },
      {
        "date": "2026-11-23",
        "nav": 0.7718
      },
      {
        "date": "2026-11-24",
        "nav": 0.7724
      },
      {
        "date": "2026-11-25",
        "nav": 0.7685
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.9441
      },
      {
        "date": "2026-11-16",
        "nav": 1.8989
      },
      {
        "date": "2026-11-17",
        "nav": 1.8709
      },
      {
        "date": "2026-11-18",
        "nav": 1.8468
      },
      {
        "date": "2026-11-19",
        "nav": 1.8557
      },
      {
        "date": "2026-11-20",
        "nav": 1.8074
      },
      {
        "date": "2026-11-23",
        "nav": 1.8206
      },
      {
        "date": "2026-11-24",
        "nav": 1.8111
      },
      {
        "date": "2026-11-25",
        "nav": 1.7599
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.6262
      },
      {
        "date": "2026-11-16",
        "nav": 2.5828
      },
      {
        "date": "2026-11-17",
        "nav": 2.5551
      },
      {
        "date": "2026-11-18",
        "nav": 2.5156
      },
      {
        "date": "2026-11-19",
        "nav": 2.5167
      },
      {
        "date": "2026-11-20",
        "nav": 2.4252
      },
      {
        "date": "2026-11-23",
        "nav": 2.4621
      },
      {
        "date": "2026-11-24",
        "nav": 2.4492
      },
      {
        "date": "2026-11-25",
        "nav": 2.3769
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 5.2623
      },
      {
        "date": "2026-11-16",
        "nav": 5.2611
      },
      {
        "date": "2026-11-17",
        "nav": 5.2786
      },
      {
        "date": "2026-11-18",
        "nav": 5.2812
      },
      {
        "date": "2026-11-19",
        "nav": 5.2733
      },
      {
        "date": "2026-11-20",
        "nav": 5.1939
      },
      {
        "date": "2026-11-23",
        "nav": 5.2054
      },
      {
        "date": "2026-11-24",
        "nav": 5.2144
      },
      {
        "date": "2026-11-25",
        "nav": 5.1185
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.643
      },
      {
        "date": "2026-11-16",
        "nav": 1.593
      },
      {
        "date": "2026-11-17",
        "nav": 1.579
      },
      {
        "date": "2026-11-18",
        "nav": 1.579
      },
      {
        "date": "2026-11-19",
        "nav": 1.562
      },
      {
        "date": "2026-11-20",
        "nav": 1.493
      },
      {
        "date": "2026-11-23",
        "nav": 1.541
      },
      {
        "date": "2026-11-24",
        "nav": 1.536
      },
      {
        "date": "2026-11-25",
        "nav": 1.468
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.1062
      },
      {
        "date": "2026-11-16",
        "nav": 1.0732
      },
      {
        "date": "2026-11-17",
        "nav": 1.0691
      },
      {
        "date": "2026-11-18",
        "nav": 1.078
      },
      {
        "date": "2026-11-19",
        "nav": 1.0782
      },
      {
        "date": "2026-11-20",
        "nav": 1.0475
      },
      {
        "date": "2026-11-23",
        "nav": 1.0684
      },
      {
        "date": "2026-11-24",
        "nav": 1.0671
      },
      {
        "date": "2026-11-25",
        "nav": 1.0324
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.548
      },
      {
        "date": "2026-11-16",
        "nav": 2.462
      },
      {
        "date": "2026-11-17",
        "nav": 2.466
      },
      {
        "date": "2026-11-18",
        "nav": 2.463
      },
      {
        "date": "2026-11-19",
        "nav": 2.465
      },
      {
        "date": "2026-11-20",
        "nav": 2.395
      },
      {
        "date": "2026-11-23",
        "nav": 2.416
      },
      {
        "date": "2026-11-24",
        "nav": 2.425
      },
      {
        "date": "2026-11-25",
        "nav": 2.348
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.159
      },
      {
        "date": "2026-11-16",
        "nav": 1.172
      },
      {
        "date": "2026-11-17",
        "nav": 1.178
      },
      {
        "date": "2026-11-18",
        "nav": 1.166
      },
      {
        "date": "2026-11-19",
        "nav": 1.167
      },
      {
        "date": "2026-11-20",
        "nav": 1.144
      },
      {
        "date": "2026-11-23",
        "nav": 1.154
      },
      {
        "date": "2026-11-24",
        "nav": 1.15
      },
      {
        "date": "2026-11-25",
        "nav": 1.146
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.225
      },
      {
        "date": "2026-11-16",
        "nav": 2.203
      },
      {
        "date": "2026-11-17",
        "nav": 2.179
      },
      {
        "date": "2026-11-18",
        "nav": 2.142
      },
      {
        "date": "2026-11-19",
        "nav": 2.097
      },
      {
        "date": "2026-11-20",
        "nav": 1.982
      },
      {
        "date": "2026-11-23",
        "nav": 2.041
      },
      {
        "date": "2026-11-24",
        "nav": 2.009
      },
      {
        "date": "2026-11-25",
        "nav": 1.959
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.2278
      },
      {
        "date": "2026-11-16",
        "nav": 1.1563
      },
      {
        "date": "2026-11-17",
        "nav": 1.188
      },
      {
        "date": "2026-11-18",
        "nav": 1.2087
      },
      {
        "date": "2026-11-19",
        "nav": 1.232
      },
      {
        "date": "2026-11-20",
        "nav": 1.1889
      },
      {
        "date": "2026-11-23",
        "nav": 1.1803
      },
      {
        "date": "2026-11-24",
        "nav": 1.1991
      },
      {
        "date": "2026-11-25",
        "nav": 1.1101
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.9039
      },
      {
        "date": "2026-11-16",
        "nav": 1.9103
      },
      {
        "date": "2026-11-17",
        "nav": 1.9111
      },
      {
        "date": "2026-11-18",
        "nav": 1.895
      },
      {
        "date": "2026-11-19",
        "nav": 1.8957
      },
      {
        "date": "2026-11-20",
        "nav": 1.8781
      },
      {
        "date": "2026-11-23",
        "nav": 1.8698
      },
      {
        "date": "2026-11-24",
        "nav": 1.869
      },
      {
        "date": "2026-11-25",
        "nav": 1.8692
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.4092
      },
      {
        "date": "2026-11-16",
        "nav": 1.3668
      },
      {
        "date": "2026-11-17",
        "nav": 1.3583
      },
      {
        "date": "2026-11-18",
        "nav": 1.3631
      },
      {
        "date": "2026-11-19",
        "nav": 1.3531
      },
      {
        "date": "2026-11-20",
        "nav": 1.3051
      },
      {
        "date": "2026-11-23",
        "nav": 1.3294
      },
      {
        "date": "2026-11-24",
        "nav": 1.3283
      },
      {
        "date": "2026-11-25",
        "nav": 1.2836
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.415
      },
      {
        "date": "2026-11-16",
        "nav": 1.3045
      },
      {
        "date": "2026-11-17",
        "nav": 1.2769
      },
      {
        "date": "2026-11-18",
        "nav": 1.2851
      },
      {
        "date": "2026-11-19",
        "nav": 1.2817
      },
      {
        "date": "2026-11-20",
        "nav": 1.2146
      },
      {
        "date": "2026-11-23",
        "nav": 1.2555
      },
      {
        "date": "2026-11-24",
        "nav": 1.2636
      },
      {
        "date": "2026-11-25",
        "nav": 1.2
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.5663
      },
      {
        "date": "2026-11-16",
        "nav": 2.5697
      },
      {
        "date": "2026-11-17",
        "nav": 2.5725
      },
      {
        "date": "2026-11-18",
        "nav": 2.5554
      },
      {
        "date": "2026-11-19",
        "nav": 2.546
      },
      {
        "date": "2026-11-20",
        "nav": 2.5019
      },
      {
        "date": "2026-11-23",
        "nav": 2.5245
      },
      {
        "date": "2026-11-24",
        "nav": 2.5148
      },
      {
        "date": "2026-11-25",
        "nav": 2.491
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.92
      },
      {
        "date": "2026-11-16",
        "nav": 0.895
      },
      {
        "date": "2026-11-17",
        "nav": 0.889
      },
      {
        "date": "2026-11-18",
        "nav": 0.874
      },
      {
        "date": "2026-11-19",
        "nav": 0.868
      },
      {
        "date": "2026-11-20",
        "nav": 0.84
      },
      {
        "date": "2026-11-23",
        "nav": 0.874
      },
      {
        "date": "2026-11-24",
        "nav": 0.866
      },
      {
        "date": "2026-11-25",
        "nav": 0.852
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.3994
      },
      {
        "date": "2026-11-16",
        "nav": 2.4334
      },
      {
        "date": "2026-11-17",
        "nav": 2.4482
      },
      {
        "date": "2026-11-18",
        "nav": 2.4363
      },
      {
        "date": "2026-11-19",
        "nav": 2.4413
      },
      {
        "date": "2026-11-20",
        "nav": 2.4353
      },
      {
        "date": "2026-11-23",
        "nav": 2.4205
      },
      {
        "date": "2026-11-24",
        "nav": 2.4183
      },
      {
        "date": "2026-11-25",
        "nav": 2.4207
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.1933
      },
      {
        "date": "2026-11-16",
        "nav": 1.1657
      },
      {
        "date": "2026-11-17",
        "nav": 1.1614
      },
      {
        "date": "2026-11-18",
        "nav": 1.1568
      },
      {
        "date": "2026-11-19",
        "nav": 1.145
      },
      {
        "date": "2026-11-20",
        "nav": 1.1101
      },
      {
        "date": "2026-11-23",
        "nav": 1.129
      },
      {
        "date": "2026-11-24",
        "nav": 1.1284
      },
      {
        "date": "2026-11-25",
        "nav": 1.0951
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.9517
      },
      {
        "date": "2026-11-16",
        "nav": 0.9228
      },
      {
        "date": "2026-11-17",
        "nav": 0.9115
      },
      {
        "date": "2026-11-18",
        "nav": 0.9197
      },
      {
        "date": "2026-11-19",
        "nav": 0.9222
      },
      {
        "date": "2026-11-20",
        "nav": 0.8932
      },
      {
        "date": "2026-11-23",
        "nav": 0.9076
      },
      {
        "date": "2026-11-24",
        "nav": 0.9107
      },
      {
        "date": "2026-11-25",
        "nav": 0.8754
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0132
      },
      {
        "date": "2026-11-16",
        "nav": 0.9824
      },
      {
        "date": "2026-11-17",
        "nav": 0.9704
      },
      {
        "date": "2026-11-18",
        "nav": 0.9791
      },
      {
        "date": "2026-11-19",
        "nav": 0.9818
      },
      {
        "date": "2026-11-20",
        "nav": 0.951
      },
      {
        "date": "2026-11-23",
        "nav": 0.9663
      },
      {
        "date": "2026-11-24",
        "nav": 0.9697
      },
      {
        "date": "2026-11-25",
        "nav": 0.932
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0401
      },
      {
        "date": "2026-11-16",
        "nav": 1.0357
      },
      {
        "date": "2026-11-17",
        "nav": 1.0374
      },
      {
        "date": "2026-11-18",
        "nav": 1.0345
      },
      {
        "date": "2026-11-19",
        "nav": 1.0307
      },
      {
        "date": "2026-11-20",
        "nav": 1.0295
      },
      {
        "date": "2026-11-23",
        "nav": 1.0305
      },
      {
        "date": "2026-11-24",
        "nav": 1.0295
      },
      {
        "date": "2026-11-25",
        "nav": 1.0234
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0156
      },
      {
        "date": "2026-11-16",
        "nav": 1.0113
      },
      {
        "date": "2026-11-17",
        "nav": 1.0131
      },
      {
        "date": "2026-11-18",
        "nav": 1.0102
      },
      {
        "date": "2026-11-19",
        "nav": 1.0065
      },
      {
        "date": "2026-11-20",
        "nav": 1.0054
      },
      {
        "date": "2026-11-23",
        "nav": 1.0063
      },
      {
        "date": "2026-11-24",
        "nav": 1.0054
      },
      {
        "date": "2026-11-25",
        "nav": 0.9995
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.7084
      },
      {
        "date": "2026-11-16",
        "nav": 0.7088
      },
      {
        "date": "2026-11-17",
        "nav": 0.7109
      },
      {
        "date": "2026-11-18",
        "nav": 0.7088
      },
      {
        "date": "2026-11-19",
        "nav": 0.7054
      },
      {
        "date": "2026-11-20",
        "nav": 0.6957
      },
      {
        "date": "2026-11-23",
        "nav": 0.6973
      },
      {
        "date": "2026-11-24",
        "nav": 0.6971
      },
      {
        "date": "2026-11-25",
        "nav": 0.6917
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.727
      },
      {
        "date": "2026-11-16",
        "nav": 0.7274
      },
      {
        "date": "2026-11-17",
        "nav": 0.7297
      },
      {
        "date": "2026-11-18",
        "nav": 0.7275
      },
      {
        "date": "2026-11-19",
        "nav": 0.724
      },
      {
        "date": "2026-11-20",
        "nav": 0.7141
      },
      {
        "date": "2026-11-23",
        "nav": 0.7157
      },
      {
        "date": "2026-11-24",
        "nav": 0.7156
      },
      {
        "date": "2026-11-25",
        "nav": 0.7101
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.9624
      },
      {
        "date": "2026-11-16",
        "nav": 1.8875
      },
      {
        "date": "2026-11-17",
        "nav": 1.8705
      },
      {
        "date": "2026-11-18",
        "nav": 1.8833
      },
      {
        "date": "2026-11-19",
        "nav": 1.8891
      },
      {
        "date": "2026-11-20",
        "nav": 1.8622
      },
      {
        "date": "2026-11-23",
        "nav": 1.8967
      },
      {
        "date": "2026-11-24",
        "nav": 1.9077
      },
      {
        "date": "2026-11-25",
        "nav": 1.8682
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.3103
      },
      {
        "date": "2026-11-16",
        "nav": 2.2627
      },
      {
        "date": "2026-11-17",
        "nav": 2.2412
      },
      {
        "date": "2026-11-18",
        "nav": 2.2176
      },
      {
        "date": "2026-11-19",
        "nav": 2.2031
      },
      {
        "date": "2026-11-20",
        "nav": 2.1324
      },
      {
        "date": "2026-11-23",
        "nav": 2.1863
      },
      {
        "date": "2026-11-24",
        "nav": 2.1916
      },
      {
        "date": "2026-11-25",
        "nav": 2.1354
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.7118
      },
      {
        "date": "2026-11-16",
        "nav": 0.7018
      },
      {
        "date": "2026-11-17",
        "nav": 0.6924
      },
      {
        "date": "2026-11-18",
        "nav": 0.6817
      },
      {
        "date": "2026-11-19",
        "nav": 0.6722
      },
      {
        "date": "2026-11-20",
        "nav": 0.6486
      },
      {
        "date": "2026-11-23",
        "nav": 0.6729
      },
      {
        "date": "2026-11-24",
        "nav": 0.675
      },
      {
        "date": "2026-11-25",
        "nav": 0.6474
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 3.9531
      },
      {
        "date": "2026-11-16",
        "nav": 3.8389
      },
      {
        "date": "2026-11-17",
        "nav": 3.7916
      },
      {
        "date": "2026-11-18",
        "nav": 3.756
      },
      {
        "date": "2026-11-19",
        "nav": 3.7146
      },
      {
        "date": "2026-11-20",
        "nav": 3.5907
      },
      {
        "date": "2026-11-23",
        "nav": 3.7293
      },
      {
        "date": "2026-11-24",
        "nav": 3.755
      },
      {
        "date": "2026-11-25",
        "nav": 3.6394
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.4521
      },
      {
        "date": "2026-11-16",
        "nav": 0.4487
      },
      {
        "date": "2026-11-17",
        "nav": 0.4497
      },
      {
        "date": "2026-11-18",
        "nav": 0.4526
      },
      {
        "date": "2026-11-19",
        "nav": 0.4524
      },
      {
        "date": "2026-11-20",
        "nav": 0.45
      },
      {
        "date": "2026-11-23",
        "nav": 0.4476
      },
      {
        "date": "2026-11-24",
        "nav": 0.4513
      },
      {
        "date": "2026-11-25",
        "nav": 0.4414
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.4612
      },
      {
        "date": "2026-11-16",
        "nav": 0.4577
      },
      {
        "date": "2026-11-17",
        "nav": 0.4587
      },
      {
        "date": "2026-11-18",
        "nav": 0.4616
      },
      {
        "date": "2026-11-19",
        "nav": 0.4615
      },
      {
        "date": "2026-11-20",
        "nav": 0.459
      },
      {
        "date": "2026-11-23",
        "nav": 0.4566
      },
      {
        "date": "2026-11-24",
        "nav": 0.4603
      },
      {
        "date": "2026-11-25",
        "nav": 0.4502
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.2565
      },
      {
        "date": "2026-11-16",
        "nav": 1.2614
      },
      {
        "date": "2026-11-17",
        "nav": 1.2629
      },
      {
        "date": "2026-11-18",
        "nav": 1.2647
      },
      {
        "date": "2026-11-19",
        "nav": 1.2644
      },
      {
        "date": "2026-11-20",
        "nav": 1.263
      },
      {
        "date": "2026-11-23",
        "nav": 1.2579
      },
      {
        "date": "2026-11-24",
        "nav": 1.2557
      },
      {
        "date": "2026-11-25",
        "nav": 1.2476
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0549
      },
      {
        "date": "2026-11-16",
        "nav": 1.0577
      },
      {
        "date": "2026-11-17",
        "nav": 1.0638
      },
      {
        "date": "2026-11-18",
        "nav": 1.0634
      },
      {
        "date": "2026-11-19",
        "nav": 1.0599
      },
      {
        "date": "2026-11-20",
        "nav": 1.051
      },
      {
        "date": "2026-11-23",
        "nav": 1.0531
      },
      {
        "date": "2026-11-24",
        "nav": 1.0498
      },
      {
        "date": "2026-11-25",
        "nav": 1.0512
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.1657
      },
      {
        "date": "2026-11-16",
        "nav": 1.168
      },
      {
        "date": "2026-11-17",
        "nav": 1.171
      },
      {
        "date": "2026-11-18",
        "nav": 1.1745
      },
      {
        "date": "2026-11-19",
        "nav": 1.1706
      },
      {
        "date": "2026-11-20",
        "nav": 1.1627
      },
      {
        "date": "2026-11-23",
        "nav": 1.1635
      },
      {
        "date": "2026-11-24",
        "nav": 1.1618
      },
      {
        "date": "2026-11-25",
        "nav": 1.1598
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.6928
      },
      {
        "date": "2026-11-16",
        "nav": 2.628
      },
      {
        "date": "2026-11-17",
        "nav": 2.6013
      },
      {
        "date": "2026-11-18",
        "nav": 2.6187
      },
      {
        "date": "2026-11-19",
        "nav": 2.6355
      },
      {
        "date": "2026-11-20",
        "nav": 2.6049
      },
      {
        "date": "2026-11-23",
        "nav": 2.6417
      },
      {
        "date": "2026-11-24",
        "nav": 2.6419
      },
      {
        "date": "2026-11-25",
        "nav": 2.6131
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.205
      },
      {
        "date": "2026-11-16",
        "nav": 2.061
      },
      {
        "date": "2026-11-17",
        "nav": 2.031
      },
      {
        "date": "2026-11-18",
        "nav": 2.056
      },
      {
        "date": "2026-11-19",
        "nav": 2.063
      },
      {
        "date": "2026-11-20",
        "nav": 1.992
      },
      {
        "date": "2026-11-23",
        "nav": 2.032
      },
      {
        "date": "2026-11-24",
        "nav": 2.056
      },
      {
        "date": "2026-11-25",
        "nav": 1.986
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.5747
      },
      {
        "date": "2026-11-16",
        "nav": 1.602
      },
      {
        "date": "2026-11-17",
        "nav": 1.606
      },
      {
        "date": "2026-11-18",
        "nav": 1.6079
      },
      {
        "date": "2026-11-19",
        "nav": 1.6002
      },
      {
        "date": "2026-11-20",
        "nav": 1.6031
      },
      {
        "date": "2026-11-23",
        "nav": 1.592
      },
      {
        "date": "2026-11-24",
        "nav": 1.5871
      },
      {
        "date": "2026-11-25",
        "nav": 1.5854
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.5514
      },
      {
        "date": "2026-11-16",
        "nav": 0.507
      },
      {
        "date": "2026-11-17",
        "nav": 0.4857
      },
      {
        "date": "2026-11-18",
        "nav": 0.4797
      },
      {
        "date": "2026-11-19",
        "nav": 0.4692
      },
      {
        "date": "2026-11-20",
        "nav": 0.4382
      },
      {
        "date": "2026-11-23",
        "nav": 0.4577
      },
      {
        "date": "2026-11-24",
        "nav": 0.4642
      },
      {
        "date": "2026-11-25",
        "nav": 0.4414
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 8.824
      },
      {
        "date": "2026-11-16",
        "nav": 8.064
      },
      {
        "date": "2026-11-17",
        "nav": 7.858
      },
      {
        "date": "2026-11-18",
        "nav": 8.152
      },
      {
        "date": "2026-11-19",
        "nav": 8.199
      },
      {
        "date": "2026-11-20",
        "nav": 7.912
      },
      {
        "date": "2026-11-23",
        "nav": 8.208
      },
      {
        "date": "2026-11-24",
        "nav": 8.251
      },
      {
        "date": "2026-11-25",
        "nav": 8.063
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.34,
      "nav": 3.3638,
      "price": 3.3638,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.5594,
      "price": 2.5594,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.9003,
      "price": 2.9003,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.03,
      "nav": 0.7685,
      "price": 0.7685,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 1.7599,
      "price": 1.7599,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.28,
      "nav": 2.3769,
      "price": 2.3769,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 5.1185,
      "price": 5.1185,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.468,
      "price": 1.468,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.0324,
      "price": 1.0324,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 2.348,
      "price": 2.348,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.146,
      "price": 1.146,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 1.959,
      "price": 1.959,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.41,
      "nav": 1.1101,
      "price": 1.1101,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.8692,
      "price": 1.8692,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.29,
      "nav": 1.2836,
      "price": 1.2836,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 1.2,
      "price": 1.2,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.491,
      "price": 2.491,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 0.852,
      "price": 0.852,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.4207,
      "price": 2.4207,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.27,
      "nav": 1.0951,
      "price": 1.0951,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.08,
      "sharpe": -3.18,
      "calmar": -3.18
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 2.39,
      "sharpe": -7.34,
      "calmar": -7.34
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 2.55,
      "sharpe": -7.54,
      "calmar": -7.54
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.95,
      "sharpe": 1.87,
      "calmar": 1.87
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 7.06,
      "sharpe": -3.49,
      "calmar": -3.49
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 8.27,
      "sharpe": -2.58,
      "calmar": -2.58
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.62,
      "sharpe": -0.81,
      "calmar": -0.81
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 10.54,
      "sharpe": -2.58,
      "calmar": -2.58
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 6.35,
      "sharpe": -3.06,
      "calmar": -3.06
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 7.0,
      "sharpe": -3.55,
      "calmar": -3.55
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.58,
      "sharpe": 0.84,
      "calmar": 0.84
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 12.81,
      "sharpe": -1.55,
      "calmar": -1.55
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 12.24,
      "sharpe": -4.68,
      "calmar": -4.68
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.04,
      "sharpe": 0.68,
      "calmar": 0.68
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 8.75,
      "sharpe": -2.7,
      "calmar": -2.7
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.93,
      "sharpe": -4.93,
      "calmar": -4.93
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.78,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.78,
      "sharpe": -1.35,
      "calmar": -1.35
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.96,
      "sharpe": 0.8,
      "calmar": 0.8
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 8.0,
      "sharpe": -1.71,
      "calmar": -1.71
    }
  ],
  "news": [
    {
      "title": "当前，大模型、智能体与具身智能等前沿技术加速演进，但前沿技术如何走出实验室、深度嵌入研发测试、生产制造、供应链管理等核心环节，已成为制造业数智跃升亟待解决的问题。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:28",
      "impact": "neutral"
    },
    {
      "title": "一台来自法国的再制造变速箱，凭借一张专属“数字身份证”，日前在上海海关监管下顺利通关进口。这是沃尔沃建筑设备（中国）有限公司首批特殊类再制造产品——铰接式非公路用自卸车变速箱，经拆解清洗、检测评估、修复加工、装配测试等流程后进入国内市场，作为维保备件资源投入使用。该票货物顺利通关，标志着上海海关依托数字化溯源的再制造产品进口监管新模式落地见效。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:27",
      "impact": "neutral"
    },
    {
      "title": "非医学需要的胎儿性别鉴定是我国法律明确禁止的违法行为，然而一些不法分子为了牟利，违规收集孕妇血样、偷运出境开展非法检测，逐步形成一条隐秘的违法产业链。今年年初，深圳海关缉私部门破获一起特大走私人类遗传资源材料案。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:10",
      "impact": "neutral"
    },
    {
      "title": "入冬以来，多股冷空气影响我国，北方地区供暖全面展开，能源保供进入迎峰度冬关键阶段。记者了解到，今年能源保供“工具箱”升级，煤炭油气加力增产，新能源注入绿色动力，跨省跨区协同互济，数智技术赋能增效，全力守护群众温暖过冬。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:37",
      "impact": "neutral"
    },
    {
      "title": "今年以来，工业大省河北加快能源结构转型，全省可再生能源装机规模已突破1.64亿千瓦（全口径可再生能源装机），占总装机比重达73.2%，占比大幅高于全国平均水平。这一数据折射出河北从传统煤电大省向清洁电力大省的转型跨越。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:37",
      "impact": "neutral"
    },
    {
      "title": "安排使用地方政府债务结存限额5500亿元，提高县区一般公共预算保障能力、支持地方扩大有效投资，各类债务工具全面发力；10月包括一般公共预算支出和政府性基金支出在内的广义财政支出同比增长4.7%，增速较前值加快8.4个百分点……多项数据显示，四季度以来，财政资金围绕稳增长、扩投资全面发力，不断为夯实增长基础提供支撑。2026年新增专项债发行已接近尾声。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:37",
      "impact": "neutral"
    },
    {
      "title": "凌晨一点，贵州（龙里）电商产业园的云仓卸货口，三辆悬挂广东牌照的重型挂车倒车入库，成箱的椰汁从广东运到这里。几小时后，这批椰汁又从龙里以快递方式发往全国，而订单最多的地方，恰恰是广东。货从广东来，又回广东去。为什么要绕这一圈？广东椰谷集团算的是另一笔账：电商发货超过24小时，退单率增加10%以上；延迟1.5至2天，退单率可达25%以上。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:37",
      "impact": "neutral"
    },
    {
      "title": "一纸出口禁令，再度搅动钴产业链。11月23日，刚果（金）矿业监管机构宣布自11月30日起暂停所有钴出口，4个月后重新评估并调整现有出口配额机制。A股钴板块与期货市场应声而涨，电解钴现货报价跳涨至30.08万元/吨，单日涨幅约为3.5万元/吨。这并非刚果（金）的钴出口政策首次变化。2025年2月，全面暂停出口，后经延期，至当年10月转为配额制。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:13",
      "impact": "neutral"
    },
    {
      "title": "近期，国内猪价短期反弹。农业农村部最新数据显示，11月第三周全国生猪价格为每公斤9.95元，环比上涨1.4%，结束了10月份以来连续6周下降的走势。卓创资讯监测数据显示，截至11月25日，现货市场全国生猪均价为10.14元/公斤，较月初上涨12.54%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:46",
      "impact": "neutral"
    },
    {
      "title": "随着全国多地滑雪场陆续“开板”，2026—2027冰雪季持续升温。去哪儿数据显示，11月份以来，“滑雪”“冰雪”等关键词月内搜索量环比增长1.2倍，2026年11月份至2027年春节前出发、航程在2000公里以上的热门冰雪航线预订量同比增长2倍。冰雪航线热度升温，折射出冰雪经济规模的持续攀升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:46",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 40,
    "label": "中性",
    "upDownRatio": "352/2,824",
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
