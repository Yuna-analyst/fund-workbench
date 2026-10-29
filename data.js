// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-29 16:51:27
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-29 16:51 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-29",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3651.43,
      "change": -30.04,
      "changePct": "-0.82%",
      "high": 3678.46,
      "low": 3645.26,
      "volume": 443564144.0,
      "amount": 715620690000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11138.2,
      "change": -334.98,
      "changePct": "-2.92%",
      "high": 11379.0,
      "low": 11135.97,
      "volume": 540479121.0,
      "amount": 840903490000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2517.59,
      "change": -117.17,
      "changePct": "-4.45%",
      "high": 2597.45,
      "low": 2516.78,
      "volume": 169679341.0,
      "amount": 419356540000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1228.09,
      "change": -54.84,
      "changePct": "-4.27%",
      "high": 1271.81,
      "low": 1220.52,
      "volume": 7600565.0,
      "amount": 71099760000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4041.84,
      "change": -42.03,
      "changePct": "-1.03%",
      "high": 4075.47,
      "low": 4030.23,
      "volume": 171430729.0,
      "amount": 411892970000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6453.72,
      "change": -187.17,
      "changePct": "-2.82%",
      "high": 6604.65,
      "low": 6450.54,
      "volume": 139022190.0,
      "amount": 271552260000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.73万亿",
      "label": "成交额",
      "rawAmount": 2730425710000.0,
      "change": ""
    },
    "upDown": {
      "val": "825/2,587",
      "label": "涨/跌家数",
      "rawUp": 825,
      "rawDown": 2587,
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
    "totalInflow": 7.25,
    "totalOutflow": 0,
    "netFlow": 7.25,
    "netFlowTrend": [
      1.45,
      2.9,
      4.35,
      5.8,
      7.25
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
      "inflow": 3.69,
      "pct": 1.72
    },
    {
      "name": "煤炭",
      "inflow": 1.93,
      "pct": 1.65
    },
    {
      "name": "白酒",
      "inflow": 1.19,
      "pct": 0.98
    },
    {
      "name": "医药",
      "inflow": 0.67,
      "pct": 0.27
    },
    {
      "name": "农业",
      "inflow": 0.14,
      "pct": 0.29
    },
    {
      "name": "食品",
      "inflow": 0.06,
      "pct": 0.62
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.52
    },
    {
      "name": "家电",
      "inflow": -0.08,
      "pct": -1.2
    },
    {
      "name": "钢铁",
      "inflow": -0.13,
      "pct": -1.59
    },
    {
      "name": "游戏",
      "inflow": -0.2,
      "pct": -0.5
    },
    {
      "name": "新能源",
      "inflow": -0.27,
      "pct": -1.72
    },
    {
      "name": "光伏",
      "inflow": -0.3,
      "pct": -1.71
    },
    {
      "name": "地产",
      "inflow": -0.31,
      "pct": -2.33
    },
    {
      "name": "新能源车",
      "inflow": -0.32,
      "pct": -2.42
    },
    {
      "name": "传媒",
      "inflow": -0.76,
      "pct": -2.14
    },
    {
      "name": "军工",
      "inflow": -0.79,
      "pct": -0.2
    },
    {
      "name": "医疗",
      "inflow": -0.94,
      "pct": -0.3
    },
    {
      "name": "有色",
      "inflow": -1.39,
      "pct": -2.2
    },
    {
      "name": "创新药",
      "inflow": -1.51,
      "pct": -0.63
    },
    {
      "name": "券商",
      "inflow": -2.67,
      "pct": -2.11
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.887,
      "changePct": 1.72,
      "change": 0.015,
      "turnover": 12.31
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.229,
      "changePct": 1.65,
      "change": 0.02,
      "turnover": 6.43
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.411,
      "changePct": 0.98,
      "change": 0.004,
      "turnover": 3.97
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.49,
      "changePct": 0.62,
      "change": 0.003,
      "turnover": 0.21
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.696,
      "changePct": 0.29,
      "change": 0.002,
      "turnover": 0.45
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.375,
      "changePct": 0.27,
      "change": 0.001,
      "turnover": 2.25
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.019,
      "changePct": -0.2,
      "change": -0.002,
      "turnover": 2.63
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.331,
      "changePct": -0.3,
      "change": -0.001,
      "turnover": 3.12
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.002,
      "changePct": -0.5,
      "change": -0.005,
      "turnover": 0.67
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.96,
      "changePct": -0.52,
      "change": -0.005,
      "turnover": 0.07
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.785,
      "changePct": -0.63,
      "change": -0.005,
      "turnover": 5.03
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.321,
      "changePct": -1.2,
      "change": -0.016,
      "turnover": 0.27
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.051,
      "changePct": -1.59,
      "change": -0.017,
      "turnover": 0.44
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.691,
      "changePct": -1.71,
      "change": -0.012,
      "turnover": 0.99
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.938,
      "changePct": -1.72,
      "change": -0.034,
      "turnover": 0.9
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.465,
      "changePct": -2.11,
      "change": -0.01,
      "turnover": 8.9
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.777,
      "changePct": -2.14,
      "change": -0.017,
      "turnover": 2.54
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.423,
      "changePct": -2.2,
      "change": -0.032,
      "turnover": 4.62
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.131,
      "changePct": -2.33,
      "change": -0.027,
      "turnover": 1.04
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.292,
      "changePct": -2.42,
      "change": -0.032,
      "turnover": 1.06
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.988,
      "changePct": -2.85,
      "change": -0.029,
      "turnover": 0.2
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.398,
      "changePct": -4.05,
      "change": -0.059,
      "turnover": 0.7
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.808,
      "changePct": -4.49,
      "change": -0.038,
      "turnover": 1.68
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.825,
      "changePct": -4.95,
      "change": -0.043,
      "turnover": 5.36
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.757,
      "changePct": -5.02,
      "change": -0.04,
      "turnover": 10.47
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.626,
      "changePct": -5.3,
      "change": -0.035,
      "turnover": 0.33
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.721,
      "changePct": -7.56,
      "change": -0.059,
      "turnover": 6.87
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.463,
      "changePct": -7.95,
      "change": -0.04,
      "turnover": 31.64
    }
  ],
  "etfFlow": [
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.871,
      "changePct": 0.17,
      "amount": 23.57,
      "netFlow": 5.89
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.375,
      "changePct": 0.27,
      "amount": 2.25,
      "netFlow": 0.56
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.938,
      "changePct": -1.72,
      "amount": 0.9,
      "netFlow": -0.23
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.465,
      "changePct": -2.11,
      "amount": 8.9,
      "netFlow": -2.23
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.757,
      "changePct": -5.02,
      "amount": 10.47,
      "netFlow": -2.62
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.997,
      "changePct": -0.94,
      "amount": 18.55,
      "netFlow": -4.64
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.289,
      "changePct": -1.15,
      "amount": 42.57,
      "netFlow": -10.64
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.49,
      "changePct": -2.73,
      "amount": 47.18,
      "netFlow": -11.79
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.111,
      "changePct": -0.99,
      "amount": 89.07,
      "netFlow": -22.27
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.293,
      "changePct": -4.51,
      "amount": 115.24,
      "netFlow": -28.81
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.111,
      "changePct": -0.99,
      "amount": 89.07,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.871,
      "changePct": 0.17,
      "amount": 23.57,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.49,
      "changePct": -2.73,
      "amount": 47.18,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.289,
      "changePct": -1.15,
      "amount": 42.57,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.997,
      "changePct": -0.94,
      "amount": 18.55,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 12.31,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "煤炭",
      "turnover": 6.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.97,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.63,
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
      "name": "游戏",
      "turnover": 0.67,
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
      "name": "创新药",
      "turnover": 5.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.44,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 0.99,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 8.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.62,
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
      "name": "新能源车",
      "turnover": 1.06,
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
      "nav": 3.9474,
      "ret1w": -3.85,
      "ret1m": 1.72,
      "ret3m": -11.95,
      "ret6m": 0.81,
      "ret1y": -14.51,
      "ret2y": -2.04,
      "ret3y": 92.62
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.9905,
      "ret1w": -6.11,
      "ret1m": -6.02,
      "ret3m": -22.98,
      "ret6m": -26.43,
      "ret1y": -37.61,
      "ret2y": -27.74,
      "ret3y": 4.79
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.6434,
      "ret1w": -10.3,
      "ret1m": -11.97,
      "ret3m": -36.0,
      "ret6m": -17.4,
      "ret1y": -24.4,
      "ret2y": 3.56,
      "ret3y": 89.23
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7189,
      "ret1w": 1.4,
      "ret1m": 3.05,
      "ret3m": 4.17,
      "ret6m": -1.53,
      "ret1y": -5.21,
      "ret2y": -10.71,
      "ret3y": -3.98
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9417,
      "ret1w": -0.81,
      "ret1m": 1.09,
      "ret3m": -0.48,
      "ret6m": -11.07,
      "ret1y": -30.02,
      "ret2y": -35.62,
      "ret3y": -21.14
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5609,
      "ret1w": 0.34,
      "ret1m": 1.35,
      "ret3m": -3.26,
      "ret6m": -6.49,
      "ret1y": -23.95,
      "ret2y": -26.14,
      "ret3y": 4.59
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2332,
      "ret1w": 0.81,
      "ret1m": 3.5,
      "ret3m": -0.08,
      "ret6m": -6.87,
      "ret1y": -9.24,
      "ret2y": -0.29,
      "ret3y": 28.05
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.645,
      "ret1w": -2.72,
      "ret1m": -2.55,
      "ret3m": -13.6,
      "ret6m": -7.38,
      "ret1y": -20.3,
      "ret2y": -13.96,
      "ret3y": 27.52
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1252,
      "ret1w": -2.44,
      "ret1m": -1.89,
      "ret3m": -13.11,
      "ret6m": -13.63,
      "ret1y": -21.35,
      "ret2y": -13.37,
      "ret3y": 6.36
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.595,
      "ret1w": -3.14,
      "ret1m": -3.71,
      "ret3m": -19.68,
      "ret6m": -22.1,
      "ret1y": -13.87,
      "ret2y": 11.52,
      "ret3y": 118.07
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.091,
      "ret1w": 0.28,
      "ret1m": 1.11,
      "ret3m": 1.21,
      "ret6m": -2.68,
      "ret1y": -6.99,
      "ret2y": -13.75,
      "ret3y": -14.83
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.218,
      "ret1w": -1.81,
      "ret1m": -0.49,
      "ret3m": -7.81,
      "ret6m": -3.1,
      "ret1y": -17.02,
      "ret2y": -15.38,
      "ret3y": 4.43
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1555,
      "ret1w": -5.88,
      "ret1m": -10.99,
      "ret3m": -29.66,
      "ret6m": -36.35,
      "ret1y": -65.14,
      "ret2y": -64.05,
      "ret3y": -37.42
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8607,
      "ret1w": 0.77,
      "ret1m": 2.02,
      "ret3m": -0.01,
      "ret6m": -3.59,
      "ret1y": 1.51,
      "ret2y": -6.29,
      "ret3y": -5.85
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4117,
      "ret1w": -2.57,
      "ret1m": -2.64,
      "ret3m": -13.7,
      "ret6m": -7.62,
      "ret1y": -19.13,
      "ret2y": -11.25,
      "ret3y": 23.72
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.5576,
      "ret1w": -7.53,
      "ret1m": -9.69,
      "ret3m": -30.48,
      "ret6m": -28.86,
      "ret1y": -33.02,
      "ret2y": 3.73,
      "ret3y": 56.04
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5553,
      "ret1w": 0.34,
      "ret1m": 2.07,
      "ret3m": -2.02,
      "ret6m": 0.76,
      "ret1y": -6.86,
      "ret2y": -4.6,
      "ret3y": 2.57
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.898,
      "ret1w": -1.43,
      "ret1m": -3.02,
      "ret3m": -11.09,
      "ret6m": -12.22,
      "ret1y": -9.93,
      "ret2y": -17.01,
      "ret3y": -19.32
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3445,
      "ret1w": 1.08,
      "ret1m": 2.07,
      "ret3m": 3.9,
      "ret6m": -1.36,
      "ret1y": -4.93,
      "ret2y": 1.27,
      "ret3y": 4.81
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1832,
      "ret1w": -1.86,
      "ret1m": -2.17,
      "ret3m": -8.86,
      "ret6m": -3.99,
      "ret1y": -8.65,
      "ret2y": 0.51,
      "ret3y": 40.08
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9821,
      "ret1w": -3.4,
      "ret1m": -4.28,
      "ret3m": -17.14,
      "ret6m": -21.48,
      "ret1y": -27.59,
      "ret2y": -18.18,
      "ret3y": 5.8
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0454,
      "ret1w": -3.4,
      "ret1m": -4.26,
      "ret3m": -17.11,
      "ret6m": -21.4,
      "ret1y": -27.45,
      "ret2y": -17.86,
      "ret3y": 6.65
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0516,
      "ret1w": -0.4,
      "ret1m": 0.13,
      "ret3m": -1.43,
      "ret6m": -4.52,
      "ret1y": -4.02,
      "ret2y": -2.29,
      "ret3y": 3.33
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0266,
      "ret1w": -0.4,
      "ret1m": 0.15,
      "ret3m": -1.38,
      "ret6m": -4.37,
      "ret1y": -3.72,
      "ret2y": -1.69,
      "ret3y": 4.6
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6841,
      "ret1w": -0.06,
      "ret1m": 0.41,
      "ret3m": -1.79,
      "ret6m": -7.18,
      "ret1y": -15.4,
      "ret2y": -15.7,
      "ret3y": -5.0
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.702,
      "ret1w": -0.06,
      "ret1m": 0.41,
      "ret3m": -1.75,
      "ret6m": -7.06,
      "ret1y": -15.18,
      "ret2y": -15.27,
      "ret3y": -4.05
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.1421,
      "ret1w": -5.1,
      "ret1m": -4.83,
      "ret3m": -20.25,
      "ret6m": -18.65,
      "ret1y": -15.61,
      "ret2y": 4.48,
      "ret3y": 85.77
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2347,
      "ret1w": -2.3,
      "ret1m": -1.78,
      "ret3m": -8.37,
      "ret6m": -9.7,
      "ret1y": -11.18,
      "ret2y": -0.97,
      "ret3y": 43.06
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6711,
      "ret1w": -2.81,
      "ret1m": -2.29,
      "ret3m": -5.25,
      "ret6m": -8.31,
      "ret1y": -24.25,
      "ret2y": -18.57,
      "ret3y": -8.01
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.7994,
      "ret1w": -3.71,
      "ret1m": -2.38,
      "ret3m": -8.18,
      "ret6m": -7.58,
      "ret1y": -1.28,
      "ret2y": 16.49,
      "ret3y": 88.12
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4671,
      "ret1w": 0.8,
      "ret1m": -0.02,
      "ret3m": -6.32,
      "ret6m": -12.0,
      "ret1y": -10.1,
      "ret2y": -2.24,
      "ret3y": 25.53
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4763,
      "ret1w": 0.78,
      "ret1m": -0.02,
      "ret3m": -6.3,
      "ret6m": -11.93,
      "ret1y": -9.93,
      "ret2y": -1.85,
      "ret3y": 26.54
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2587,
      "ret1w": 0.16,
      "ret1m": 0.74,
      "ret3m": -0.46,
      "ret6m": -1.49,
      "ret1y": -2.77,
      "ret2y": -2.24,
      "ret3y": 0.42
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.064,
      "ret1w": -1.05,
      "ret1m": -0.98,
      "ret3m": -3.31,
      "ret6m": -7.35,
      "ret1y": -8.25,
      "ret2y": -10.69,
      "ret3y": 0.26
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1522,
      "ret1w": -0.22,
      "ret1m": -0.11,
      "ret3m": -12.42,
      "ret6m": -16.85,
      "ret1y": -27.22,
      "ret2y": -28.09,
      "ret3y": -17.69
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8159,
      "ret1w": -0.96,
      "ret1m": 0.61,
      "ret3m": -3.47,
      "ret6m": -5.25,
      "ret1y": -14.11,
      "ret2y": 0.21,
      "ret3y": 29.24
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.306,
      "ret1w": -7.2,
      "ret1m": -7.72,
      "ret3m": -27.71,
      "ret6m": -31.78,
      "ret1y": -34.45,
      "ret2y": -3.68,
      "ret3y": 75.49
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5633,
      "ret1w": 1.31,
      "ret1m": 3.07,
      "ret3m": 4.21,
      "ret6m": 4.38,
      "ret1y": 4.17,
      "ret2y": 3.67,
      "ret3y": 3.11
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5577,
      "ret1w": 3.34,
      "ret1m": 5.83,
      "ret3m": -4.63,
      "ret6m": -3.18,
      "ret1y": -18.82,
      "ret2y": -7.8,
      "ret3y": -5.6
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.645,
      "ret1w": -7.28,
      "ret1m": -11.13,
      "ret3m": -30.14,
      "ret6m": -26.02,
      "ret1y": -13.91,
      "ret2y": 13.48,
      "ret3y": 128.66
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0549,
      "ret1w": -0.15,
      "ret1m": 0.07,
      "ret3m": -0.57,
      "ret6m": -0.87,
      "ret1y": -1.33,
      "ret2y": -0.21,
      "ret3y": 2.84
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1032,
      "ret1w": -0.15,
      "ret1m": 0.07,
      "ret3m": -0.57,
      "ret6m": -0.82,
      "ret1y": -1.22,
      "ret2y": 0.02,
      "ret3y": 3.51
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0681,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.17,
      "ret6m": 0.45,
      "ret1y": 0.75,
      "ret2y": 1.69,
      "ret3y": 3.18
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1027,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.22,
      "ret6m": 0.5,
      "ret1y": 0.8,
      "ret2y": 1.63,
      "ret3y": 3.99
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1125,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.23,
      "ret6m": 0.56,
      "ret1y": 0.91,
      "ret2y": 1.84,
      "ret3y": 4.42
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0787,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.37,
      "ret1y": 0.64,
      "ret2y": 1.53,
      "ret3y": 3.23
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0936,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.17,
      "ret6m": 0.44,
      "ret1y": 0.78,
      "ret2y": 1.84,
      "ret3y": 3.88
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0089,
      "ret1w": -0.8,
      "ret1m": -0.42,
      "ret3m": -4.14,
      "ret6m": -4.34,
      "ret1y": -6.55,
      "ret2y": -1.55,
      "ret3y": 5.39
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1604,
      "ret1w": -0.91,
      "ret1m": -0.67,
      "ret3m": -4.33,
      "ret6m": -2.88,
      "ret1y": -6.39,
      "ret2y": -2.8,
      "ret3y": 0.17
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0159,
      "ret1w": -0.79,
      "ret1m": -0.42,
      "ret3m": -4.11,
      "ret6m": -4.25,
      "ret1y": -6.36,
      "ret2y": -1.15,
      "ret3y": 6.23
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0458,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.18,
      "ret6m": 0.53,
      "ret1y": 0.89,
      "ret2y": 1.84,
      "ret3y": 3.75
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1069,
      "ret1w": -1.1,
      "ret1m": -1.13,
      "ret3m": -4.81,
      "ret6m": -4.86,
      "ret1y": -8.74,
      "ret2y": -6.92,
      "ret3y": 0.54
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2002,
      "ret1w": 0.08,
      "ret1m": 0.3,
      "ret3m": -0.16,
      "ret6m": -1.55,
      "ret1y": -2.6,
      "ret2y": 0.04,
      "ret3y": 9.88
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1172,
      "ret1w": -0.18,
      "ret1m": -0.1,
      "ret3m": -1.36,
      "ret6m": -1.16,
      "ret1y": -1.97,
      "ret2y": 0.07,
      "ret3y": 6.67
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.188,
      "ret1w": -0.18,
      "ret1m": -0.08,
      "ret3m": -1.33,
      "ret6m": -1.06,
      "ret1y": -1.78,
      "ret2y": 0.47,
      "ret3y": 7.56
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.264,
      "ret1w": 3.9,
      "ret1m": 3.0,
      "ret3m": -8.6,
      "ret6m": 8.43,
      "ret1y": 11.53,
      "ret2y": 56.68,
      "ret3y": 121.96
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9832,
      "ret1w": 0.41,
      "ret1m": -0.22,
      "ret3m": -0.77,
      "ret6m": 3.53,
      "ret1y": 4.6,
      "ret2y": 6.02,
      "ret3y": 29.94
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6561,
      "ret1w": 0.49,
      "ret1m": -2.7,
      "ret3m": -7.13,
      "ret6m": -11.51,
      "ret1y": -21.27,
      "ret2y": -11.52,
      "ret3y": 16.73
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4233,
      "ret1w": 1.96,
      "ret1m": 2.53,
      "ret3m": -2.29,
      "ret6m": 13.13,
      "ret1y": 14.87,
      "ret2y": 14.15,
      "ret3y": 67.03
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9206,
      "ret1w": -0.05,
      "ret1m": 0.37,
      "ret3m": 0.71,
      "ret6m": -1.96,
      "ret1y": -3.14,
      "ret2y": -6.11,
      "ret3y": -2.43
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4946,
      "ret1w": 2.41,
      "ret1m": 1.17,
      "ret3m": -7.7,
      "ret6m": 1.46,
      "ret1y": 4.41,
      "ret2y": 25.85,
      "ret3y": 74.59
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.468,
      "ret1w": 0.18,
      "ret1m": -1.19,
      "ret3m": -1.8,
      "ret6m": -0.47,
      "ret1y": -0.16,
      "ret2y": 0.99,
      "ret3y": 15.39
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.81,
      "ret1w": 1.76,
      "ret1m": -4.37,
      "ret3m": -13.65,
      "ret6m": -10.89,
      "ret1y": -25.76,
      "ret2y": -29.26,
      "ret3y": -16.58
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.6702,
      "ret1w": 3.94,
      "ret1m": 2.23,
      "ret3m": -8.35,
      "ret6m": 2.62,
      "ret1y": 3.08,
      "ret2y": 52.33,
      "ret3y": 125.89
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5669,
      "ret1w": 0.62,
      "ret1m": -1.37,
      "ret3m": 1.48,
      "ret6m": 10.49,
      "ret1y": 3.29,
      "ret2y": 28.54,
      "ret3y": 49.91
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6312,
      "ret1w": 1.25,
      "ret1m": -1.4,
      "ret3m": -6.15,
      "ret6m": 0.56,
      "ret1y": 2.42,
      "ret2y": 14.13,
      "ret3y": 42.48
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2274,
      "ret1w": 2.18,
      "ret1m": 0.59,
      "ret3m": -5.42,
      "ret6m": -0.27,
      "ret1y": -4.02,
      "ret2y": 2.42,
      "ret3y": 24.22
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.241,
      "ret1w": -0.72,
      "ret1m": 0.4,
      "ret3m": 1.14,
      "ret6m": -8.48,
      "ret1y": -4.83,
      "ret2y": -0.32,
      "ret3y": -12.41
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.928,
      "ret1w": -0.1,
      "ret1m": -1.83,
      "ret3m": -1.88,
      "ret6m": -0.72,
      "ret1y": -13.31,
      "ret2y": -3.79,
      "ret3y": 31.59
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.8269,
      "ret1w": 2.2,
      "ret1m": -0.57,
      "ret3m": -8.41,
      "ret6m": -0.63,
      "ret1y": 2.78,
      "ret2y": 20.81,
      "ret3y": 52.8
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0168,
      "ret1w": 0.04,
      "ret1m": 0.1,
      "ret3m": 0.3,
      "ret6m": 0.81,
      "ret1y": 1.31,
      "ret2y": 2.55,
      "ret3y": 3.98
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0159,
      "ret1w": 0.04,
      "ret1m": 0.1,
      "ret3m": 0.3,
      "ret6m": 0.84,
      "ret1y": 1.33,
      "ret2y": 2.61,
      "ret3y": 4.15
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.213,
      "ret1w": -1.78,
      "ret1m": -0.57,
      "ret3m": -9.61,
      "ret6m": -15.29,
      "ret1y": -19.88,
      "ret2y": -18.1,
      "ret3y": -0.66
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.299,
      "ret1w": -2.75,
      "ret1m": -2.0,
      "ret3m": -13.47,
      "ret6m": -17.24,
      "ret1y": -23.26,
      "ret2y": -17.3,
      "ret3y": 8.75
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4656,
      "ret1w": -0.55,
      "ret1m": -0.34,
      "ret3m": -5.89,
      "ret6m": -7.96,
      "ret1y": -20.4,
      "ret2y": -4.42,
      "ret3y": 35.83
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8703,
      "ret1w": -1.53,
      "ret1m": -0.53,
      "ret3m": -9.09,
      "ret6m": -11.55,
      "ret1y": -13.71,
      "ret2y": -7.71,
      "ret3y": 10.54
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9251,
      "ret1w": -1.53,
      "ret1m": -0.52,
      "ret3m": -9.06,
      "ret6m": -11.46,
      "ret1y": -13.53,
      "ret2y": -7.33,
      "ret3y": 11.43
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6817,
      "ret1w": -2.67,
      "ret1m": -2.88,
      "ret3m": -12.63,
      "ret6m": -13.58,
      "ret1y": -21.16,
      "ret2y": -12.5,
      "ret3y": 11.93
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5931,
      "ret1w": -0.98,
      "ret1m": 0.19,
      "ret3m": -6.48,
      "ret6m": -11.18,
      "ret1y": -14.26,
      "ret2y": -12.8,
      "ret3y": 5.8
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4285,
      "ret1w": -1.89,
      "ret1m": -1.55,
      "ret3m": -6.95,
      "ret6m": -9.27,
      "ret1y": -15.88,
      "ret2y": -5.78,
      "ret3y": 21.21
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.542,
      "ret1w": -3.18,
      "ret1m": -2.03,
      "ret3m": -15.99,
      "ret6m": -22.39,
      "ret1y": -23.23,
      "ret2y": -18.96,
      "ret3y": 12.88
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0042,
      "ret1w": 0.25,
      "ret1m": 2.2,
      "ret3m": -1.94,
      "ret6m": -7.87,
      "ret1y": -10.45,
      "ret2y": -11.08,
      "ret3y": 5.25
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4777,
      "ret1w": -0.19,
      "ret1m": -1.04,
      "ret3m": 0.2,
      "ret6m": -2.07,
      "ret1y": 0.16,
      "ret2y": 5.54,
      "ret3y": 26.91
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4517,
      "ret1w": 0.49,
      "ret1m": 0.05,
      "ret3m": -1.87,
      "ret6m": 5.68,
      "ret1y": 7.4,
      "ret2y": 7.57,
      "ret3y": 32.76
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2594,
      "ret1w": -2.53,
      "ret1m": -1.1,
      "ret3m": -12.39,
      "ret6m": -18.69,
      "ret1y": -23.63,
      "ret2y": -17.85,
      "ret3y": 6.87
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9772,
      "ret1w": -1.82,
      "ret1m": -4.89,
      "ret3m": -16.2,
      "ret6m": -17.54,
      "ret1y": -19.95,
      "ret2y": -14.09,
      "ret3y": 10.41
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9805,
      "ret1w": -1.82,
      "ret1m": -4.89,
      "ret3m": -16.08,
      "ret6m": -17.38,
      "ret1y": -19.79,
      "ret2y": -13.98,
      "ret3y": 10.17
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.234,
      "ret1w": 1.56,
      "ret1m": -1.9,
      "ret3m": -8.71,
      "ret6m": -9.45,
      "ret1y": -17.91,
      "ret2y": -11.91,
      "ret3y": 7.83
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2631,
      "ret1w": 1.58,
      "ret1m": -1.89,
      "ret3m": -8.68,
      "ret6m": -9.36,
      "ret1y": -17.73,
      "ret2y": -11.55,
      "ret3y": 8.71
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7462,
      "ret1w": 2.06,
      "ret1m": -1.88,
      "ret3m": -8.85,
      "ret6m": -14.73,
      "ret1y": -17.21,
      "ret2y": -9.51,
      "ret3y": 21.47
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1594,
      "ret1w": -0.05,
      "ret1m": 0.17,
      "ret3m": -0.24,
      "ret6m": -0.68,
      "ret1y": -0.71,
      "ret2y": 0.92,
      "ret3y": 5.81
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1798,
      "ret1w": -0.04,
      "ret1m": 0.18,
      "ret3m": -0.21,
      "ret6m": -0.6,
      "ret1y": -0.56,
      "ret2y": 1.24,
      "ret3y": 6.46
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0886,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.18,
      "ret6m": 0.53,
      "ret1y": 0.89,
      "ret2y": 1.99,
      "ret3y": 3.77
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4127,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.18,
      "ret6m": 0.15,
      "ret1y": 0.2,
      "ret2y": 0.71,
      "ret3y": 5.78
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.466,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.22,
      "ret6m": 0.25,
      "ret1y": 0.4,
      "ret2y": 1.12,
      "ret3y": 6.63
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8928,
      "ret1w": -1.87,
      "ret1m": -1.75,
      "ret3m": -8.68,
      "ret6m": -9.42,
      "ret1y": -1.63,
      "ret2y": 7.56,
      "ret3y": 34.99
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0387,
      "ret1w": -2.58,
      "ret1m": -1.34,
      "ret3m": -11.72,
      "ret6m": -16.75,
      "ret1y": -15.34,
      "ret2y": -9.58,
      "ret3y": 14.16
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 3.9474,
      "price": 3.9474,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.3,
      "nav": 2.9905,
      "price": 2.9905,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.6,
      "nav": 3.6434,
      "price": 3.6434,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.15,
      "nav": 0.7189,
      "price": 0.7189,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.9417,
      "price": 1.9417,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.5609,
      "price": 2.5609,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.18,
      "nav": 5.2332,
      "price": 5.2332,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.645,
      "price": 1.645,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.1252,
      "price": 1.1252,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 2.595,
      "price": 2.595,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 1.091,
      "price": 1.091,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.218,
      "price": 2.218,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.55,
      "nav": 1.1555,
      "price": 1.1555,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.8607,
      "price": 1.8607,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.4117,
      "price": 1.4117,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.48,
      "nav": 1.5576,
      "price": 1.5576,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 2.5553,
      "price": 2.5553,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.15,
      "nav": 0.898,
      "price": 0.898,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 2.3445,
      "price": 2.3445,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.1832,
      "price": 1.1832,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.58,
      "sharpe": -2.16,
      "calmar": -2.16
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 9.03,
      "sharpe": -3.41,
      "calmar": -3.41
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 17.96,
      "sharpe": -1.44,
      "calmar": -1.44
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 4.57,
      "sharpe": -0.65,
      "calmar": -0.65
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 1.64,
      "sharpe": -4.93,
      "calmar": -4.93
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.03,
      "sharpe": -3.77,
      "calmar": -3.77
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.25,
      "sharpe": -1.09,
      "calmar": -1.09
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.82,
      "sharpe": -2.69,
      "calmar": -2.69
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.83,
      "sharpe": -3.1,
      "calmar": -3.1
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.56,
      "sharpe": -1.59,
      "calmar": -1.59
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.67,
      "sharpe": -1.14,
      "calmar": -1.14
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.73,
      "sharpe": -3.1,
      "calmar": -3.1
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 16.48,
      "sharpe": -4.07,
      "calmar": -4.07
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.03,
      "sharpe": 0.22,
      "calmar": 0.22
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.96,
      "sharpe": -2.5,
      "calmar": -2.5
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 14.54,
      "sharpe": -2.25,
      "calmar": -2.25
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.1,
      "sharpe": -0.97,
      "calmar": -0.97
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 4.53,
      "sharpe": -1.24,
      "calmar": -1.24
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 3.1,
      "sharpe": -0.7,
      "calmar": -0.7
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.25,
      "sharpe": -1.21,
      "calmar": -1.21
    }
  ],
  "news": [
    {
      "title": "中国共产党第二十届中央委员会第五次全体会议，于2026年10月26日至29日在北京举行。全会由中央政治局主持。中央委员会总书记习近平发表重要讲话。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:41",
      "impact": "neutral"
    },
    {
      "title": "信息时报讯（记者卫静雯）昨日，“广货优品广贸全球”第140届广交会海珠纺织面料产业专场贸易促进活动暨广交会外商走进中大纺织商圈活动在广州珠江国际酒店举行。活动依托广交会客商资源优势，组织境外采购商与海珠本土纺织面料企业精准对接，并走进中大纺织商圈实地看样选品，打通“会场洽谈+市场巡访”链路，推动广交会流量转化为实实在在的外贸订单，助力海珠纺织面料产业链接全球市场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:45",
      "impact": "neutral"
    },
    {
      "title": "以“商联四海智创未来”为主题的2026年东莞民营企业家日·莞商（侨商）大会将于10月31日~11月1日举行。本届大会以“三会合一”的方式，汇聚全球莞商侨商力量，共谋“十五五”高质量发展。聚焦一系列企业关切、社会关注的热点议题，东莞市委统战部、市工商联、市侨联、市工信局、市莞商联合会等部门结合东莞发展实际一一作答，详解大会谋划考量，亮出惠企助企实招。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:45",
      "impact": "neutral"
    },
    {
      "title": "近日，为期四天的第26届中国（长安）机械五金模具展览会（以下简称“长展会”）圆满闭幕。本届展会以“模具名镇·智造之都”为主题，共吸引约4万人次到场观展，累计达成意向合作项目55个，意向合作金额超过3亿元，为东莞五金模具产业对接全球资源、推进“智改数转网联”搭建起高质量产业对接平台，也是长安践行“智创优品、和美宜居”城市发展战略的一次生动产业实践。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:45",
      "impact": "neutral"
    },
    {
      "title": "信息时报讯（记者叶虹通讯员蓝童）辖区水上交通安全实现“零事故、零伤亡、零污染”；救助遇险人员121人，救助成功率达100%；累计督促300余艘冒黑烟船舶完成整改……昨日，东莞海事局举办了2026年前三季度水上交通服务保障情况新闻发布会。记者同时获悉，东莞海事局推动锂电池出海“一箱制”改革，实现通关效率提升20%以上，预计每年可为相关企业节省物流成本5600多万元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:45",
      "impact": "neutral"
    },
    {
      "title": "蓝鲸新闻10月29日讯三季报密集披露期，苏农银行（603323.SH）前三季度实现营收、净利“双增”。数据显示，截至三季度末，苏农银行总资产2413.99亿元，较年初增长4.54%。前三季度，苏农银行实现营业收入32.22亿元，同比增长0.03%；实现归属于上市公司股东的净利润17.43亿元，同比增长2.00%。需要指出的是，从单季度表现看，苏农银行第三季度业绩有所承压。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:27",
      "impact": "neutral"
    },
    {
      "title": "10月29日，农业农村部发布《关于近期有不法分子歪曲我部农业农村基础设施融资项目库服务虚假推介涉农项目的风险提示》。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:15",
      "impact": "neutral"
    },
    {
      "title": "中新经纬10月30日电(陈俊明)2026年11月起一大波新规将施行，涉及电视开机广告、博物馆藏品管理、青少年体育培训等方面。11月全国新规有线广播电视不得播放开机广告《有线广播电视运营服务管理规定》自11月27日起施行。其中提到，有线广播电视运营服务提供者应当坚持直播优先原则，实现开机看全屏直播功能，设置频道回看入口，不得播放开机广告。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:09",
      "impact": "neutral"
    },
    {
      "title": "新华社消息，10月29日，武汉地铁12号线全线开通运营。经中国城市轨道交通协会确认，这是目前国内最长地铁环线。这一线路全长59.9公里，设37座地下车站，可与18条既有及规划线路实现换乘。图片来源：长江日报武汉地铁12号线贯穿硚口、江汉、江岸等7个中心城区，衔接汉口站、武昌站两大铁路枢纽，跑完全程约96分钟。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:04",
      "impact": "neutral"
    },
    {
      "title": "AI需求持续拉动存储行业景气度，多家深市存储企业三季报业绩大幅增长中国基金报记者牛思若AI驱动的存储“超级周期”，正在上市公司业绩中持续兑现。10月29日晚间，江波龙、大普微等深市存储企业相继披露2026年第三季度报告，多家公司营收及净利润实现大幅增长。其中，江波龙前三季度归母净利润同比增长超19倍，大普微实现扭亏为盈。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:01",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 41,
    "label": "中性",
    "upDownRatio": "825/2,587",
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
