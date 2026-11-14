// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-14 16:30:52
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-14 16:30 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-13",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3634.35,
      "change": -21.48,
      "changePct": "-0.59%",
      "high": 3669.44,
      "low": 3623.84,
      "volume": 472293657.0,
      "amount": 770614170000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10968.79,
      "change": -229.19,
      "changePct": "-2.05%",
      "high": 11253.31,
      "low": 10941.11,
      "volume": 559255208.0,
      "amount": 885054040000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2426.08,
      "change": -83.35,
      "changePct": "-3.32%",
      "high": 2528.99,
      "low": 2417.22,
      "volume": 170437467.0,
      "amount": 435333900000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1279.66,
      "change": -30.18,
      "changePct": "-2.30%",
      "high": 1342.13,
      "low": 1270.62,
      "volume": 9685614.0,
      "amount": 100008480000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4016.29,
      "change": -27.64,
      "changePct": "-0.68%",
      "high": 4052.06,
      "low": 4004.5,
      "volume": 179341998.0,
      "amount": 460245660000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6465.49,
      "change": -138.66,
      "changePct": "-2.10%",
      "high": 6645.62,
      "low": 6449.34,
      "volume": 133623435.0,
      "amount": 280147810000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.93万亿",
      "label": "成交额",
      "rawAmount": 2931404060000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,528/2,236",
      "label": "涨/跌家数",
      "rawUp": 1528,
      "rawDown": 2236,
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
    "totalInflow": 7.08,
    "totalOutflow": 0,
    "netFlow": 7.08,
    "netFlowTrend": [
      1.42,
      2.83,
      4.25,
      5.66,
      7.08
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
      "inflow": 3.61,
      "pct": 1.36
    },
    {
      "name": "白酒",
      "inflow": 1.85,
      "pct": 1.38
    },
    {
      "name": "煤炭",
      "inflow": 1.59,
      "pct": 0.51
    },
    {
      "name": "家电",
      "inflow": 0.18,
      "pct": 0.59
    },
    {
      "name": "农业",
      "inflow": 0.17,
      "pct": 1.39
    },
    {
      "name": "食品",
      "inflow": 0.07,
      "pct": 1.18
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.94
    },
    {
      "name": "计算机",
      "inflow": -0.05,
      "pct": -0.3
    },
    {
      "name": "钢铁",
      "inflow": -0.11,
      "pct": -1.14
    },
    {
      "name": "云计算",
      "inflow": -0.22,
      "pct": -1.06
    },
    {
      "name": "新能源车",
      "inflow": -0.33,
      "pct": -1.82
    },
    {
      "name": "人工智能",
      "inflow": -0.53,
      "pct": -1.87
    },
    {
      "name": "游戏",
      "inflow": -0.57,
      "pct": -1.17
    },
    {
      "name": "医药",
      "inflow": -0.69,
      "pct": -0.52
    },
    {
      "name": "医疗",
      "inflow": -1.09,
      "pct": -0.88
    },
    {
      "name": "军工",
      "inflow": -1.11,
      "pct": -2.05
    },
    {
      "name": "创新药",
      "inflow": -1.61,
      "pct": -1.82
    },
    {
      "name": "芯片",
      "inflow": -2.05,
      "pct": -2.04
    },
    {
      "name": "传媒",
      "inflow": -2.67,
      "pct": -1.09
    },
    {
      "name": "券商",
      "inflow": -3.82,
      "pct": -0.64
    }
  ],
  "sectors": [
    {
      "name": "农业",
      "code": "159825",
      "price": 0.73,
      "changePct": 1.39,
      "change": 0.01,
      "turnover": 0.58
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.44,
      "changePct": 1.38,
      "change": 0.006,
      "turnover": 6.17
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.897,
      "changePct": 1.36,
      "change": 0.012,
      "turnover": 12.02
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.515,
      "changePct": 1.18,
      "change": 0.006,
      "turnover": 0.24
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.363,
      "changePct": 0.59,
      "change": 0.008,
      "turnover": 0.59
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.177,
      "changePct": 0.51,
      "change": 0.006,
      "turnover": 5.31
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.992,
      "changePct": -0.3,
      "change": -0.003,
      "turnover": 0.18
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.381,
      "changePct": -0.52,
      "change": -0.002,
      "turnover": 2.29
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.469,
      "changePct": -0.64,
      "change": -0.003,
      "turnover": 12.74
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.339,
      "changePct": -0.88,
      "change": -0.003,
      "turnover": 3.62
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.944,
      "changePct": -0.94,
      "change": -0.009,
      "turnover": 0.04
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.401,
      "changePct": -1.06,
      "change": -0.015,
      "turnover": 0.72
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.817,
      "changePct": -1.09,
      "change": -0.009,
      "turnover": 8.91
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.04,
      "changePct": -1.14,
      "change": -0.012,
      "turnover": 0.36
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.016,
      "changePct": -1.17,
      "change": -0.012,
      "turnover": 1.9
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.294,
      "changePct": -1.82,
      "change": -0.024,
      "turnover": 1.1
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.808,
      "changePct": -1.82,
      "change": -0.015,
      "turnover": 5.37
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.786,
      "changePct": -1.87,
      "change": -0.015,
      "turnover": 1.78
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.863,
      "changePct": -2.04,
      "change": -0.018,
      "turnover": 6.85
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.001,
      "changePct": -2.05,
      "change": -0.021,
      "turnover": 3.69
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.108,
      "changePct": -2.21,
      "change": -0.025,
      "turnover": 2.23
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.793,
      "changePct": -2.46,
      "change": -0.02,
      "turnover": 13.58
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.964,
      "changePct": -2.48,
      "change": -0.05,
      "turnover": 1.45
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.375,
      "changePct": -2.55,
      "change": -0.036,
      "turnover": 5.19
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.622,
      "changePct": -2.96,
      "change": -0.019,
      "turnover": 0.47
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.698,
      "changePct": -3.06,
      "change": -0.022,
      "turnover": 2.9
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.658,
      "changePct": -5.46,
      "change": -0.038,
      "turnover": 9.17
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.418,
      "changePct": -5.64,
      "change": -0.025,
      "turnover": 36.08
    }
  ],
  "etfFlow": [
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.889,
      "changePct": 0.17,
      "amount": 19.75,
      "netFlow": 4.94
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.964,
      "changePct": -2.48,
      "amount": 1.45,
      "netFlow": -0.36
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.381,
      "changePct": -0.52,
      "amount": 2.29,
      "netFlow": -0.57
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.969,
      "changePct": -0.73,
      "amount": 8.33,
      "netFlow": -2.08
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.266,
      "changePct": -0.72,
      "amount": 11.44,
      "netFlow": -2.86
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.469,
      "changePct": -0.64,
      "amount": 12.74,
      "netFlow": -3.18
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.793,
      "changePct": -2.46,
      "amount": 13.58,
      "netFlow": -3.4
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.083,
      "changePct": -0.75,
      "amount": 34.89,
      "netFlow": -8.72
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.495,
      "changePct": -2.01,
      "amount": 36.09,
      "netFlow": -9.02
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.354,
      "changePct": -1.96,
      "amount": 113.88,
      "netFlow": -28.47
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.083,
      "changePct": -0.75,
      "amount": 34.89,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.889,
      "changePct": 0.17,
      "amount": 19.75,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.495,
      "changePct": -2.01,
      "amount": 36.09,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.266,
      "changePct": -0.72,
      "amount": 11.44,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.969,
      "changePct": -0.73,
      "amount": 8.33,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "农业",
      "turnover": 0.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 6.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 12.02,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "食品",
      "turnover": 0.24,
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
      "name": "煤炭",
      "turnover": 5.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.29,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 12.74,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医疗",
      "turnover": 3.62,
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
      "name": "云计算",
      "turnover": 0.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 8.91,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.78,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.69,
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
      "nav": 3.9422,
      "ret1w": -2.77,
      "ret1m": 0.82,
      "ret3m": -4.71,
      "ret6m": -11.16,
      "ret1y": -24.94,
      "ret2y": 0.83,
      "ret3y": 71.76
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.7462,
      "ret1w": -4.06,
      "ret1m": 1.28,
      "ret3m": -23.44,
      "ret6m": -34.92,
      "ret1y": -45.93,
      "ret2y": -29.54,
      "ret3y": -5.06
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.2856,
      "ret1w": -7.45,
      "ret1m": 5.82,
      "ret3m": -33.99,
      "ret6m": -39.19,
      "ret1y": -43.68,
      "ret2y": 1.5,
      "ret3y": 53.25
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7682,
      "ret1w": 1.6,
      "ret1m": -0.9,
      "ret3m": 10.25,
      "ret6m": 7.8,
      "ret1y": 4.96,
      "ret2y": -7.48,
      "ret3y": 2.65
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9441,
      "ret1w": -2.33,
      "ret1m": -7.83,
      "ret3m": -1.16,
      "ret6m": -14.22,
      "ret1y": -33.28,
      "ret2y": -37.75,
      "ret3y": -28.13
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6262,
      "ret1w": -1.26,
      "ret1m": -2.91,
      "ret3m": -0.98,
      "ret6m": -5.15,
      "ret1y": -24.43,
      "ret2y": -27.56,
      "ret3y": 6.08
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2623,
      "ret1w": -0.57,
      "ret1m": -3.75,
      "ret3m": 0.98,
      "ret6m": -4.72,
      "ret1y": -7.88,
      "ret2y": -3.9,
      "ret3y": 23.88
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.643,
      "ret1w": -2.49,
      "ret1m": -1.68,
      "ret3m": -9.73,
      "ret6m": -13.44,
      "ret1y": -24.01,
      "ret2y": -11.86,
      "ret3y": 19.23
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1062,
      "ret1w": -2.68,
      "ret1m": -1.94,
      "ret3m": -11.11,
      "ret6m": -18.91,
      "ret1y": -24.72,
      "ret2y": -13.23,
      "ret3y": 1.26
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.548,
      "ret1w": -2.82,
      "ret1m": -0.35,
      "ret3m": -13.42,
      "ret6m": -28.61,
      "ret1y": -25.61,
      "ret2y": 18.51,
      "ret3y": 82.26
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.159,
      "ret1w": 1.13,
      "ret1m": -1.36,
      "ret3m": 5.27,
      "ret6m": 0.7,
      "ret1y": 3.11,
      "ret2y": -12.0,
      "ret3y": -11.59
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.225,
      "ret1w": -2.15,
      "ret1m": -2.58,
      "ret3m": -6.28,
      "ret6m": -10.96,
      "ret1y": -15.04,
      "ret2y": -17.47,
      "ret3y": -0.45
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2278,
      "ret1w": -3.02,
      "ret1m": 1.4,
      "ret3m": -19.99,
      "ret6m": -32.65,
      "ret1y": -60.79,
      "ret2y": -58.22,
      "ret3y": -40.14
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9039,
      "ret1w": 0.36,
      "ret1m": -2.64,
      "ret3m": 2.22,
      "ret6m": -2.27,
      "ret1y": 3.72,
      "ret2y": -2.99,
      "ret3y": -7.07
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4092,
      "ret1w": -2.68,
      "ret1m": -0.37,
      "ret3m": -9.82,
      "ret6m": -15.36,
      "ret1y": -22.89,
      "ret2y": -11.48,
      "ret3y": 17.06
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.415,
      "ret1w": -6.82,
      "ret1m": 0.8,
      "ret3m": -29.23,
      "ret6m": -41.73,
      "ret1y": -48.45,
      "ret2y": 5.13,
      "ret3y": 27.68
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5663,
      "ret1w": -0.3,
      "ret1m": -1.14,
      "ret3m": -0.81,
      "ret6m": 0.96,
      "ret1y": -7.15,
      "ret2y": -7.66,
      "ret3y": -0.87
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.92,
      "ret1w": -2.65,
      "ret1m": -2.85,
      "ret3m": -5.35,
      "ret6m": -16.89,
      "ret1y": -7.91,
      "ret2y": -16.06,
      "ret3y": -20.0
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3994,
      "ret1w": 1.04,
      "ret1m": -0.96,
      "ret3m": 3.33,
      "ret6m": 2.88,
      "ret1y": -0.48,
      "ret2y": -1.95,
      "ret3y": 7.14
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1933,
      "ret1w": -1.66,
      "ret1m": -0.03,
      "ret3m": -5.77,
      "ret6m": -9.42,
      "ret1y": -11.81,
      "ret2y": 0.03,
      "ret3y": 32.97
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9517,
      "ret1w": -3.55,
      "ret1m": -1.38,
      "ret3m": -15.14,
      "ret6m": -26.85,
      "ret1y": -33.02,
      "ret2y": -20.03,
      "ret3y": -1.77
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0132,
      "ret1w": -3.54,
      "ret1m": -1.36,
      "ret3m": -15.11,
      "ret6m": -26.77,
      "ret1y": -32.89,
      "ret2y": -19.72,
      "ret3y": -0.98
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0401,
      "ret1w": -0.14,
      "ret1m": -0.94,
      "ret3m": -2.21,
      "ret6m": -5.02,
      "ret1y": -5.84,
      "ret2y": -4.43,
      "ret3y": 1.71
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0156,
      "ret1w": -0.14,
      "ret1m": -0.94,
      "ret3m": -2.16,
      "ret6m": -4.88,
      "ret1y": -5.55,
      "ret2y": -3.85,
      "ret3y": 2.94
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7084,
      "ret1w": 0.34,
      "ret1m": -1.62,
      "ret3m": 1.56,
      "ret6m": -3.04,
      "ret1y": -11.82,
      "ret2y": -16.08,
      "ret3y": -1.49
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.727,
      "ret1w": 0.35,
      "ret1m": -1.62,
      "ret3m": 1.59,
      "ret6m": -2.92,
      "ret1y": -11.61,
      "ret2y": -15.66,
      "ret3y": -0.51
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.9624,
      "ret1w": -3.02,
      "ret1m": 1.48,
      "ret3m": -21.83,
      "ret6m": -30.64,
      "ret1y": -32.28,
      "ret2y": 2.36,
      "ret3y": 65.69
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3103,
      "ret1w": -1.69,
      "ret1m": -2.79,
      "ret3m": -2.36,
      "ret6m": -10.0,
      "ret1y": -15.05,
      "ret2y": 5.61,
      "ret3y": 42.47
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7118,
      "ret1w": -1.48,
      "ret1m": -1.89,
      "ret3m": 2.14,
      "ret6m": -5.14,
      "ret1y": -21.75,
      "ret2y": -16.47,
      "ret3y": -5.04
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9531,
      "ret1w": -1.5,
      "ret1m": -1.02,
      "ret3m": 0.88,
      "ret6m": -8.42,
      "ret1y": -9.71,
      "ret2y": 26.91,
      "ret3y": 84.01
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4521,
      "ret1w": -0.37,
      "ret1m": -0.9,
      "ret3m": -6.3,
      "ret6m": -13.56,
      "ret1y": -18.91,
      "ret2y": -3.02,
      "ret3y": 17.73
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4612,
      "ret1w": -0.35,
      "ret1m": -0.88,
      "ret3m": -6.24,
      "ret6m": -13.45,
      "ret1y": -18.73,
      "ret2y": -2.62,
      "ret3y": 18.68
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2565,
      "ret1w": 0.29,
      "ret1m": -0.02,
      "ret3m": -1.28,
      "ret6m": -1.2,
      "ret1y": -2.52,
      "ret2y": -2.5,
      "ret3y": 0.31
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0549,
      "ret1w": -0.25,
      "ret1m": -2.07,
      "ret3m": -4.36,
      "ret6m": -8.2,
      "ret1y": -7.42,
      "ret2y": -12.11,
      "ret3y": -1.05
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1657,
      "ret1w": -0.09,
      "ret1m": 0.16,
      "ret3m": -8.38,
      "ret6m": -20.06,
      "ret1y": -32.26,
      "ret2y": -23.77,
      "ret3y": -19.02
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6928,
      "ret1w": -2.04,
      "ret1m": 0.01,
      "ret3m": -7.28,
      "ret6m": -10.15,
      "ret1y": -16.48,
      "ret2y": -6.13,
      "ret3y": 20.94
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.205,
      "ret1w": -4.55,
      "ret1m": 5.81,
      "ret3m": -23.25,
      "ret6m": -35.49,
      "ret1y": -46.0,
      "ret2y": 3.47,
      "ret3y": 60.83
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5747,
      "ret1w": 1.01,
      "ret1m": 0.68,
      "ret3m": 1.86,
      "ret6m": 7.75,
      "ret1y": 5.68,
      "ret2y": 1.08,
      "ret3y": 1.62
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5514,
      "ret1w": -3.4,
      "ret1m": -0.54,
      "ret3m": -0.25,
      "ret6m": -16.23,
      "ret1y": -29.98,
      "ret2y": -3.9,
      "ret3y": -14.58
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.824,
      "ret1w": -6.67,
      "ret1m": 3.2,
      "ret3m": -28.11,
      "ret6m": -41.01,
      "ret1y": -29.75,
      "ret2y": 16.15,
      "ret3y": 94.79
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0491,
      "ret1w": -0.27,
      "ret1m": -0.15,
      "ret3m": -0.94,
      "ret6m": -1.67,
      "ret1y": -2.37,
      "ret2y": -1.23,
      "ret3y": 1.88
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0971,
      "ret1w": -0.25,
      "ret1m": -0.15,
      "ret3m": -0.96,
      "ret6m": -1.63,
      "ret1y": -2.27,
      "ret2y": -1.02,
      "ret3y": 2.52
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0667,
      "ret1w": -0.05,
      "ret1m": -0.12,
      "ret3m": 0.0,
      "ret6m": 0.25,
      "ret1y": 0.56,
      "ret2y": 1.49,
      "ret3y": 2.77
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1016,
      "ret1w": -0.04,
      "ret1m": -0.1,
      "ret3m": 0.06,
      "ret6m": 0.32,
      "ret1y": 0.65,
      "ret2y": 1.46,
      "ret3y": 3.76
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1115,
      "ret1w": -0.04,
      "ret1m": -0.09,
      "ret3m": 0.09,
      "ret6m": 0.38,
      "ret1y": 0.75,
      "ret2y": 1.67,
      "ret3y": 4.19
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0778,
      "ret1w": -0.04,
      "ret1m": -0.08,
      "ret3m": 0.03,
      "ret6m": 0.19,
      "ret1y": 0.55,
      "ret2y": 1.42,
      "ret3y": 2.83
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0929,
      "ret1w": -0.03,
      "ret1m": -0.07,
      "ret3m": 0.05,
      "ret6m": 0.26,
      "ret1y": 0.7,
      "ret2y": 1.73,
      "ret3y": 3.48
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0018,
      "ret1w": -0.69,
      "ret1m": -0.71,
      "ret3m": -3.62,
      "ret6m": -6.51,
      "ret1y": -9.41,
      "ret2y": -2.1,
      "ret3y": 3.95
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1559,
      "ret1w": -0.82,
      "ret1m": -0.35,
      "ret3m": -3.46,
      "ret6m": -5.54,
      "ret1y": -9.21,
      "ret2y": -4.3,
      "ret3y": -0.52
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0089,
      "ret1w": -0.7,
      "ret1m": -0.71,
      "ret3m": -3.58,
      "ret6m": -6.42,
      "ret1y": -9.23,
      "ret2y": -1.72,
      "ret3y": 4.79
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": -0.06,
      "ret1m": -0.12,
      "ret3m": 0.0,
      "ret6m": 0.31,
      "ret1y": 0.7,
      "ret2y": 1.6,
      "ret3y": 3.51
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0939,
      "ret1w": -0.72,
      "ret1m": -0.46,
      "ret3m": -4.3,
      "ret6m": -6.7,
      "ret1y": -9.9,
      "ret2y": -8.03,
      "ret3y": -1.55
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2014,
      "ret1w": 0.01,
      "ret1m": -0.51,
      "ret3m": -0.17,
      "ret6m": -1.42,
      "ret1y": -2.86,
      "ret2y": 0.14,
      "ret3y": 8.83
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1171,
      "ret1w": -0.35,
      "ret1m": -0.29,
      "ret3m": -0.96,
      "ret6m": -2.17,
      "ret1y": -3.44,
      "ret2y": 0.39,
      "ret3y": 5.91
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1881,
      "ret1w": -0.35,
      "ret1m": -0.28,
      "ret3m": -0.93,
      "ret6m": -2.08,
      "ret1y": -3.25,
      "ret2y": 0.79,
      "ret3y": 6.8
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.923,
      "ret1w": -1.64,
      "ret1m": 11.61,
      "ret3m": -19.54,
      "ret6m": -18.52,
      "ret1y": -20.37,
      "ret2y": 34.1,
      "ret3y": 87.98
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9227,
      "ret1w": -0.29,
      "ret1m": 2.62,
      "ret3m": -3.85,
      "ret6m": -2.02,
      "ret1y": -0.06,
      "ret2y": 2.9,
      "ret3y": 26.52
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6432,
      "ret1w": -0.58,
      "ret1m": -2.22,
      "ret3m": -7.44,
      "ret6m": -14.54,
      "ret1y": -23.56,
      "ret2y": -12.45,
      "ret3y": 18.34
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.1851,
      "ret1w": -1.9,
      "ret1m": 5.35,
      "ret3m": -10.27,
      "ret6m": -8.92,
      "ret1y": -3.1,
      "ret2y": 7.53,
      "ret3y": 33.66
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9178,
      "ret1w": -0.56,
      "ret1m": -1.08,
      "ret3m": 0.37,
      "ret6m": -2.07,
      "ret1y": -2.88,
      "ret2y": -6.1,
      "ret3y": -3.2
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.2985,
      "ret1w": -0.85,
      "ret1m": 4.55,
      "ret3m": -13.2,
      "ret6m": -15.41,
      "ret1y": -16.47,
      "ret2y": 19.27,
      "ret3y": 55.34
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.433,
      "ret1w": -0.47,
      "ret1m": 2.83,
      "ret3m": -3.1,
      "ret6m": -4.46,
      "ret1y": -3.78,
      "ret2y": -1.09,
      "ret3y": 11.1
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.79,
      "ret1w": -0.13,
      "ret1m": 0.38,
      "ret3m": -12.22,
      "ret6m": -18.64,
      "ret1y": -26.31,
      "ret2y": -30.4,
      "ret3y": -18.05
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.3446,
      "ret1w": -1.85,
      "ret1m": 4.85,
      "ret3m": -18.49,
      "ret6m": -18.26,
      "ret1y": -20.99,
      "ret2y": 32.82,
      "ret3y": 102.33
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4907,
      "ret1w": -0.63,
      "ret1m": 0.91,
      "ret3m": -6.5,
      "ret6m": -3.98,
      "ret1y": -5.08,
      "ret2y": 16.23,
      "ret3y": 44.81
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5661,
      "ret1w": -1.01,
      "ret1m": 0.73,
      "ret3m": -9.08,
      "ret6m": -7.4,
      "ret1y": -6.48,
      "ret2y": 7.94,
      "ret3y": 40.26
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.187,
      "ret1w": -1.25,
      "ret1m": 0.47,
      "ret3m": -7.67,
      "ret6m": -9.33,
      "ret1y": -11.5,
      "ret2y": -1.59,
      "ret3y": 21.27
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.301,
      "ret1w": -0.38,
      "ret1m": 0.39,
      "ret3m": 4.92,
      "ret6m": -0.91,
      "ret1y": -1.81,
      "ret2y": 5.17,
      "ret3y": -5.82
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.845,
      "ret1w": -2.89,
      "ret1m": -5.34,
      "ret3m": -6.91,
      "ret6m": -12.72,
      "ret1y": -18.61,
      "ret2y": -12.72,
      "ret3y": 31.5
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.4299,
      "ret1w": -0.66,
      "ret1m": 5.59,
      "ret3m": -13.45,
      "ret6m": -15.43,
      "ret1y": -13.63,
      "ret2y": 11.92,
      "ret3y": 38.77
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0125,
      "ret1w": -0.11,
      "ret1m": -0.25,
      "ret3m": 0.17,
      "ret6m": 0.53,
      "ret1y": 1.07,
      "ret2y": 2.32,
      "ret3y": 3.71
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0002,
      "ret1w": -0.11,
      "ret1m": -0.25,
      "ret3m": 0.18,
      "ret6m": 0.56,
      "ret1y": 1.08,
      "ret2y": 2.39,
      "ret3y": 3.87
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.205,
      "ret1w": -1.15,
      "ret1m": -1.07,
      "ret3m": -7.24,
      "ret6m": -17.92,
      "ret1y": -24.36,
      "ret2y": -17.13,
      "ret3y": -6.44
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.247,
      "ret1w": -2.13,
      "ret1m": -1.23,
      "ret3m": -12.05,
      "ret6m": -23.02,
      "ret1y": -28.69,
      "ret2y": -17.54,
      "ret3y": 0.04
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4073,
      "ret1w": -1.12,
      "ret1m": -3.28,
      "ret3m": -10.47,
      "ret6m": -14.84,
      "ret1y": -24.52,
      "ret2y": -10.0,
      "ret3y": 28.76
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8319,
      "ret1w": -1.36,
      "ret1m": -0.66,
      "ret3m": -8.72,
      "ret6m": -15.1,
      "ret1y": -18.2,
      "ret2y": -9.03,
      "ret3y": 4.78
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8858,
      "ret1w": -1.35,
      "ret1m": -0.65,
      "ret3m": -8.69,
      "ret6m": -15.02,
      "ret1y": -18.03,
      "ret2y": -8.66,
      "ret3y": 5.62
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6847,
      "ret1w": -2.01,
      "ret1m": -1.82,
      "ret3m": -8.27,
      "ret6m": -18.0,
      "ret1y": -25.9,
      "ret2y": -10.9,
      "ret3y": 4.65
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5836,
      "ret1w": -0.65,
      "ret1m": -0.89,
      "ret3m": -5.61,
      "ret6m": -12.91,
      "ret1y": -17.83,
      "ret2y": -12.52,
      "ret3y": 0.58
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4358,
      "ret1w": -1.64,
      "ret1m": -2.5,
      "ret3m": -5.0,
      "ret6m": -9.96,
      "ret1y": -16.92,
      "ret2y": -5.09,
      "ret3y": 16.18
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4947,
      "ret1w": -2.64,
      "ret1m": -0.71,
      "ret3m": -14.0,
      "ret6m": -27.13,
      "ret1y": -31.81,
      "ret2y": -17.97,
      "ret3y": 1.87
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9962,
      "ret1w": 0.06,
      "ret1m": -1.29,
      "ret3m": -2.57,
      "ret6m": -7.83,
      "ret1y": -10.28,
      "ret2y": -11.63,
      "ret3y": 2.63
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4987,
      "ret1w": -0.14,
      "ret1m": -0.48,
      "ret3m": 1.88,
      "ret6m": -1.65,
      "ret1y": 2.04,
      "ret2y": 6.03,
      "ret3y": 32.34
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.2918,
      "ret1w": -0.25,
      "ret1m": 5.76,
      "ret3m": -7.24,
      "ret6m": -5.34,
      "ret1y": -3.98,
      "ret2y": 4.46,
      "ret3y": 21.57
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1969,
      "ret1w": -1.85,
      "ret1m": -1.47,
      "ret3m": -12.16,
      "ret6m": -22.95,
      "ret1y": -29.27,
      "ret2y": -17.99,
      "ret3y": -1.68
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9857,
      "ret1w": 0.87,
      "ret1m": 0.97,
      "ret3m": -10.05,
      "ret6m": -17.4,
      "ret1y": -23.61,
      "ret2y": -11.02,
      "ret3y": 7.68
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9893,
      "ret1w": 0.87,
      "ret1m": 0.98,
      "ret3m": -9.9,
      "ret6m": -17.21,
      "ret1y": -23.45,
      "ret2y": -10.91,
      "ret3y": 7.44
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2305,
      "ret1w": -0.88,
      "ret1m": -1.2,
      "ret3m": -5.93,
      "ret6m": -14.1,
      "ret1y": -22.56,
      "ret2y": -11.77,
      "ret3y": 5.6
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2596,
      "ret1w": -0.88,
      "ret1m": -1.19,
      "ret3m": -5.89,
      "ret6m": -14.01,
      "ret1y": -22.41,
      "ret2y": -11.42,
      "ret3y": 6.46
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.6996,
      "ret1w": -1.71,
      "ret1m": -0.82,
      "ret3m": -8.14,
      "ret6m": -18.41,
      "ret1y": -25.79,
      "ret2y": -10.25,
      "ret3y": 15.24
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1543,
      "ret1w": -0.36,
      "ret1m": -0.56,
      "ret3m": -0.45,
      "ret6m": -1.11,
      "ret1y": -1.54,
      "ret2y": 0.39,
      "ret3y": 4.43
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1747,
      "ret1w": -0.36,
      "ret1m": -0.55,
      "ret3m": -0.42,
      "ret6m": -1.04,
      "ret1y": -1.39,
      "ret2y": 0.69,
      "ret3y": 5.06
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0873,
      "ret1w": -0.06,
      "ret1m": -0.12,
      "ret3m": 0.03,
      "ret6m": 0.32,
      "ret1y": 0.7,
      "ret2y": 1.79,
      "ret3y": 3.37
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4099,
      "ret1w": -0.11,
      "ret1m": -0.21,
      "ret3m": -0.06,
      "ret6m": -0.04,
      "ret1y": 0.04,
      "ret2y": 0.36,
      "ret3y": 4.38
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4633,
      "ret1w": -0.1,
      "ret1m": -0.2,
      "ret3m": -0.02,
      "ret6m": 0.07,
      "ret1y": 0.24,
      "ret2y": 0.76,
      "ret3y": 5.22
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8514,
      "ret1w": -2.47,
      "ret1m": -0.86,
      "ret3m": -7.61,
      "ret6m": -13.13,
      "ret1y": -7.1,
      "ret2y": 5.5,
      "ret3y": 28.22
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0019,
      "ret1w": -3.76,
      "ret1m": -1.57,
      "ret3m": -10.99,
      "ret6m": -19.37,
      "ret1y": -19.55,
      "ret2y": -14.08,
      "ret3y": 7.26
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 3.9422
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.7462
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 3.2856
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.7682
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.9441
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.6262
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 5.2623
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.643
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.1062
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.548
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.159
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.225
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.2278
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.9039
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.4092
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.415
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.5663
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.92
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.3994
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.1933
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.9517
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0132
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0401
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0156
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.7084
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.727
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.9624
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.3103
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.7118
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 3.9531
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.4521
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.4612
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.2565
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.0549
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.1657
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.6928
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 2.205
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 1.5747
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 0.5514
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-13",
        "nav": 8.824
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 3.9422,
      "price": 3.9422,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 2.7462,
      "price": 2.7462,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.29,
      "nav": 3.2856,
      "price": 3.2856,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 0.7682,
      "price": 0.7682,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 1.9441,
      "price": 1.9441,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.15,
      "nav": 2.6262,
      "price": 2.6262,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 5.2623,
      "price": 5.2623,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.643,
      "price": 1.643,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.1062,
      "price": 1.1062,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.548,
      "price": 2.548,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.159,
      "price": 1.159,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.225,
      "price": 2.225,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.2278,
      "price": 1.2278,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.9039,
      "price": 1.9039,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.4092,
      "price": 1.4092,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.415,
      "price": 1.415,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.5663,
      "price": 2.5663,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 0.92,
      "price": 0.92,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.3994,
      "price": 2.3994,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.0,
      "nav": 1.1933,
      "price": 1.1933,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 1.23,
      "sharpe": -4.29,
      "calmar": -4.29
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.92,
      "sharpe": -7.31,
      "calmar": -7.31
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 8.73,
      "sharpe": -4.04,
      "calmar": -4.04
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.35,
      "sharpe": 0.84,
      "calmar": 0.84
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 11.75,
      "sharpe": -2.59,
      "calmar": -2.59
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 4.37,
      "sharpe": -3.09,
      "calmar": -3.09
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.62,
      "sharpe": -0.9,
      "calmar": -0.9
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.52,
      "sharpe": -3.59,
      "calmar": -3.59
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.91,
      "sharpe": -3.56,
      "calmar": -3.56
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.52,
      "sharpe": -4.79,
      "calmar": -4.79
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.04,
      "sharpe": 0.49,
      "calmar": 0.49
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.87,
      "sharpe": -1.98,
      "calmar": -1.98
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 2.1,
      "sharpe": -9.5,
      "calmar": -9.5
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.96,
      "sharpe": 0.49,
      "calmar": 0.49
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.55,
      "sharpe": -4.26,
      "calmar": -4.26
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.2,
      "sharpe": -8.35,
      "calmar": -8.35
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.71,
      "sharpe": -1.16,
      "calmar": -1.16
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 4.28,
      "sharpe": -1.01,
      "calmar": -1.01
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.44,
      "sharpe": -0.08,
      "calmar": -0.08
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.04,
      "sharpe": -2.35,
      "calmar": -2.35
    }
  ],
  "news": [
    {
      "title": "《科创板日报》11月14日讯（记者史士云徐红）今日（11月14日），金鸡湖畔汇聚起生物医药产业的核心力量，作为国内生物医药产业的高地之一，苏州正是国产创新药崛起的生动缩影。就在苏州，2026年版《国家基本医疗保险、生育保险和工伤保险药品目录》和《商业健康保险创新药品目录》在“2026创新药高质量发展大会”上同步发布。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:32",
      "impact": "neutral"
    },
    {
      "title": "11月14日，2026年商业健康保险创新药品目录公布，此次共有11家企业的12种药品新增纳入。调整后，2026年商业健康保险创新药品目录共有28种。《每日经济新闻》记者（以下简称每经记者）注意到，新增的创新药中，既包括本土企业研发的全球首个实体瘤CAR-T、中国首个血友病基因治疗药物等创新药，还包括多个跨国药企的创新产品。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:47",
      "impact": "neutral"
    },
    {
      "title": "一辆报废公交车，没有进拆解厂，而是刷上彩漆、装上咖啡机，变成街头流动的“交运咖啡”；一座曾经日均发送上万人的客运站，候车大厅没拆一砖一瓦，改成了4000多平方米的“交运甄选折扣仓”。这是山东枣庄公交的“自救”样本，两百余名职工就这样从票务员、司机转型，与小城居民在另一个地点或场景重逢。这不是一个文艺故事，而是一本被逼出来的生存账本。众所周知，过去十几年公交的底层逻辑被彻底改写。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:44",
      "impact": "neutral"
    },
    {
      "title": "近日，人力资源和社会保障部发布《技能人才评价条例（征求意见稿）》，这是我国首部技能人才评价的行政法规，共7章63条，即日起向社会公开征求意见。技能人才评价，一头连着职业教育和技能培训，一头连着就业增收，是劳动者技能价值的“度量衡”。可长期以来，这把尺子的准头不够，体现在评价标准、证书采信规则不一，评价机构数量激增而资质参差、把关不严，甚至“山寨证书”一度屡禁不绝。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:44",
      "impact": "neutral"
    },
    {
      "title": "11月13日至15日，2026成都科幻周活动在成都举行。其中，2026成都科幻周开幕式暨第三届成都天问华语科幻文学大赛（以下简称“成都天问大赛”）成果发布会于14日下午在成都科幻馆重磅开场，刘慈欣、何夕、王晋康、韩松等300位科幻作家和160余家企业代表齐聚一堂。不同于其他科幻文学比赛，自创立开始，“天问”华语科幻文学大赛便围绕一个鲜明的目标展开：以赛促产。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:09",
      "impact": "neutral"
    },
    {
      "title": "11月14日，证监会主席吴清在参加2026中国资本市场学术年会时表示，进一步深化市场稳定长效机制研究，中国资本市场从未像今天这样与全球资本市场高度联动、传导共振。面对高度不确定的外部环境和输入性风险，需要我们加强对全球资本市场周期变化、资产定价逻辑演变、风险传导联动等规律性认识，进一步强化跨境跨市场跨行业风险的研究应对，系统构建稳的机制、稳的力量、稳的生态，有效防范市场异常波动。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "11:58",
      "impact": "neutral"
    },
    {
      "title": "央视网消息：记者11月14日从国铁集团获悉，2026年1至10月，全国铁路累计发送旅客41.3亿人次，同比增长4.7%。日均安排开行旅客列车11670列，同比增长5.0%，其中，10月1日发送旅客2520.4万人次、开行旅客列车14885列。前10个月，全国铁路累计旅客发送量、单日旅客发送量、单日客运能力投放等指标均创历史新高。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:50",
      "impact": "neutral"
    },
    {
      "title": "1.11月14日，证监会主席吴清在参加首届中国资本市场学术年会时表示，A股5500多家上市公司中，新经济领域公司数量、营收、市值在全市场占比均超过一半。2.据商务部网站消息，11月13日，中美双方通过视频会议方式举行中美经贸磋商机制项下贸易理事会首次会议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:50",
      "impact": "neutral"
    },
    {
      "title": "记者14日从云南省文山州政府新闻办公室获悉，G5615天保至猴桥高速公路重要组成路段天保至麻栗坡高速公路，各项建设任务全面收官，正式迈入通车倒计时。云南天保至麻栗坡高速公路将于11月24日开通。通车后，文山市区至天保口岸车程，由2小时压缩至80分钟左右。作为中越边境互联互通的“国门大动脉”，天保至麻栗坡高速公路通车后将持续提升天保口岸通行与通关能力，激活边境贸易、跨境旅游和沿线产业发展，助力兴边富民。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:44",
      "impact": "neutral"
    },
    {
      "title": "记者从甘肃省气象局了解到，受持续冷空气和高原槽影响，11月14日夜间至17日，甘肃省有两轮雨雪天气过程，张掖以东多雨雪，全省大部气温持续偏低。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:42",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 44,
    "label": "中性",
    "upDownRatio": "1,528/2,236",
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
