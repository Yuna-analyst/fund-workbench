// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-26 16:43:09
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-26 16:43 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-26",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3697.52,
      "change": 7.04,
      "changePct": "+0.19%",
      "high": 3699.01,
      "low": 3664.82,
      "volume": 432794318.0,
      "amount": 746528030000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11534.38,
      "change": -139.45,
      "changePct": "-1.19%",
      "high": 11638.79,
      "low": 11432.29,
      "volume": 542597712.0,
      "amount": 862265350000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2638.23,
      "change": -45.87,
      "changePct": "-1.71%",
      "high": 2671.81,
      "low": 2601.09,
      "volume": 177585733.0,
      "amount": 428141980000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1315.5,
      "change": -30.01,
      "changePct": "-2.23%",
      "high": 1335.92,
      "low": 1305.61,
      "volume": 8292524.0,
      "amount": 81697460000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4103.54,
      "change": -1.79,
      "changePct": "-0.04%",
      "high": 4107.79,
      "low": 4057.56,
      "volume": 192147155.0,
      "amount": 456246630000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6712.73,
      "change": -101.71,
      "changePct": "-1.49%",
      "high": 6787.32,
      "low": 6674.4,
      "volume": 132938433.0,
      "amount": 278502320000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.85万亿",
      "label": "成交额",
      "rawAmount": 2853381770000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,137/1,931",
      "label": "涨/跌家数",
      "rawUp": 2137,
      "rawDown": 1931,
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
    "totalInflow": 16.99,
    "totalOutflow": 0,
    "netFlow": 16.99,
    "netFlowTrend": [
      3.4,
      6.8,
      10.19,
      13.59,
      16.99
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
      "inflow": 5.04,
      "pct": 1.77
    },
    {
      "name": "券商",
      "inflow": 2.11,
      "pct": 1.03
    },
    {
      "name": "医疗",
      "inflow": 1.94,
      "pct": 1.5
    },
    {
      "name": "煤炭",
      "inflow": 1.7,
      "pct": 0.17
    },
    {
      "name": "医药",
      "inflow": 1.45,
      "pct": 1.6
    },
    {
      "name": "创新药",
      "inflow": 1.4,
      "pct": 0.37
    },
    {
      "name": "白酒",
      "inflow": 1.32,
      "pct": 1.45
    },
    {
      "name": "传媒",
      "inflow": 1.06,
      "pct": 1.14
    },
    {
      "name": "地产",
      "inflow": 0.51,
      "pct": 2.32
    },
    {
      "name": "新能源车",
      "inflow": 0.46,
      "pct": 0.53
    },
    {
      "name": "新能源",
      "inflow": 0.35,
      "pct": 0.1
    },
    {
      "name": "游戏",
      "inflow": 0.33,
      "pct": 2.71
    },
    {
      "name": "食品",
      "inflow": 0.06,
      "pct": 1.42
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.21
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -0.66
    },
    {
      "name": "钢铁",
      "inflow": -0.13,
      "pct": -0.19
    },
    {
      "name": "农业",
      "inflow": -0.21,
      "pct": -0.42
    },
    {
      "name": "光伏",
      "inflow": -0.38,
      "pct": -0.56
    },
    {
      "name": "云计算",
      "inflow": -0.52,
      "pct": -0.67
    },
    {
      "name": "军工",
      "inflow": -0.9,
      "pct": -0.66
    }
  ],
  "sectors": [
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.024,
      "changePct": 2.71,
      "change": 0.027,
      "turnover": 1.09
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.193,
      "changePct": 2.32,
      "change": 0.027,
      "turnover": 1.69
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.864,
      "changePct": 1.77,
      "change": 0.015,
      "turnover": 16.81
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.382,
      "changePct": 1.6,
      "change": 0.006,
      "turnover": 4.84
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.339,
      "changePct": 1.5,
      "change": 0.005,
      "turnover": 6.46
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.421,
      "changePct": 1.45,
      "change": 0.006,
      "turnover": 4.41
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.499,
      "changePct": 1.42,
      "change": 0.007,
      "turnover": 0.21
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.797,
      "changePct": 1.14,
      "change": 0.009,
      "turnover": 3.52
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.489,
      "changePct": 1.03,
      "change": 0.005,
      "turnover": 7.03
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.334,
      "changePct": 0.53,
      "change": 0.007,
      "turnover": 1.54
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.813,
      "changePct": 0.37,
      "change": 0.003,
      "turnover": 4.68
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.972,
      "changePct": 0.21,
      "change": 0.002,
      "turnover": 0.05
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.207,
      "changePct": 0.17,
      "change": 0.002,
      "turnover": 5.67
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.004,
      "changePct": 0.1,
      "change": 0.002,
      "turnover": 1.16
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.079,
      "changePct": -0.19,
      "change": -0.002,
      "turnover": 0.43
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.706,
      "changePct": -0.42,
      "change": -0.003,
      "turnover": 0.71
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.713,
      "changePct": -0.56,
      "change": -0.004,
      "turnover": 1.28
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.054,
      "changePct": -0.66,
      "change": -0.007,
      "turnover": 3.0
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.05,
      "changePct": -0.66,
      "change": -0.007,
      "turnover": 0.23
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.491,
      "changePct": -0.67,
      "change": -0.01,
      "turnover": 1.72
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.857,
      "changePct": -0.92,
      "change": -0.008,
      "turnover": 2.01
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.337,
      "changePct": -1.11,
      "change": -0.015,
      "turnover": 0.52
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.45,
      "changePct": -2.49,
      "change": -0.037,
      "turnover": 4.24
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.66,
      "changePct": -3.51,
      "change": -0.024,
      "turnover": 0.35
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.495,
      "changePct": -3.7,
      "change": -0.019,
      "turnover": 24.23
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.875,
      "changePct": -3.74,
      "change": -0.034,
      "turnover": 5.45
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.766,
      "changePct": -3.89,
      "change": -0.031,
      "turnover": 8.15
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.801,
      "changePct": -4.19,
      "change": -0.035,
      "turnover": 9.92
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.179,
      "changePct": 0.02,
      "amount": 88.18,
      "netFlow": 22.04
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.878,
      "changePct": 0.31,
      "amount": 21.54,
      "netFlow": 5.39
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.489,
      "changePct": 1.03,
      "amount": 7.03,
      "netFlow": 1.76
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.382,
      "changePct": 1.6,
      "amount": 4.84,
      "netFlow": 1.21
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.004,
      "changePct": 0.1,
      "amount": 1.16,
      "netFlow": 0.29
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.801,
      "changePct": -4.19,
      "amount": 9.92,
      "netFlow": -2.48
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.358,
      "changePct": -0.02,
      "amount": 33.18,
      "netFlow": -8.3
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.75,
      "changePct": -1.56,
      "amount": 47.98,
      "netFlow": -12.0
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.381,
      "changePct": -2.88,
      "amount": 118.7,
      "netFlow": -29.67
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.055,
      "changePct": -0.07,
      "amount": 140.66,
      "netFlow": -35.17
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.179,
      "changePct": 0.02,
      "amount": 88.18,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.878,
      "changePct": 0.31,
      "amount": 21.54,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.75,
      "changePct": -1.56,
      "amount": 47.98,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.358,
      "changePct": -0.02,
      "amount": 33.18,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.055,
      "changePct": -0.07,
      "amount": 140.66,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "游戏",
      "turnover": 1.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.69,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 16.81,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 4.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 6.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 4.41,
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
      "name": "传媒",
      "turnover": 3.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 4.68,
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
      "name": "煤炭",
      "turnover": 5.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.28,
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
      "name": "计算机",
      "turnover": 0.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.72,
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
      "nav": 4.0027,
      "ret1w": -2.24,
      "ret1m": 4.32,
      "ret3m": -14.41,
      "ret6m": -1.64,
      "ret1y": -11.54,
      "ret2y": 1.25,
      "ret3y": 92.88
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.1241,
      "ret1w": -3.55,
      "ret1m": -6.68,
      "ret3m": -23.37,
      "ret6m": -26.36,
      "ret1y": -33.55,
      "ret2y": -22.68,
      "ret3y": 8.55
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.0271,
      "ret1w": -3.74,
      "ret1m": -7.06,
      "ret3m": -32.36,
      "ret6m": -17.06,
      "ret1y": -17.41,
      "ret2y": 18.25,
      "ret3y": 104.32
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7209,
      "ret1w": 1.21,
      "ret1m": 1.36,
      "ret3m": 4.06,
      "ret6m": 3.68,
      "ret1y": -2.62,
      "ret2y": -10.71,
      "ret3y": -4.44
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.0066,
      "ret1w": 1.93,
      "ret1m": 2.59,
      "ret3m": 1.82,
      "ret6m": -4.67,
      "ret1y": -28.63,
      "ret2y": -28.22,
      "ret3y": -20.37
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5699,
      "ret1w": -0.19,
      "ret1m": -1.74,
      "ret3m": -3.91,
      "ret6m": -1.4,
      "ret1y": -24.57,
      "ret2y": -25.45,
      "ret3y": 4.7
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2075,
      "ret1w": 0.38,
      "ret1m": -0.65,
      "ret3m": -1.46,
      "ret6m": -3.92,
      "ret1y": -8.76,
      "ret2y": 0.5,
      "ret3y": 26.91
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.704,
      "ret1w": -1.27,
      "ret1m": -1.84,
      "ret3m": -12.84,
      "ret6m": -1.9,
      "ret1y": -17.52,
      "ret2y": -8.83,
      "ret3y": 31.18
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.16,
      "ret1w": -1.39,
      "ret1m": -2.22,
      "ret3m": -12.98,
      "ret6m": -11.27,
      "ret1y": -18.29,
      "ret2y": -8.69,
      "ret3y": 8.73
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.671,
      "ret1w": -2.09,
      "ret1m": -3.61,
      "ret3m": -21.37,
      "ret6m": -24.61,
      "ret1y": -11.11,
      "ret2y": 19.94,
      "ret3y": 119.47
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.12,
      "ret1w": 1.45,
      "ret1m": 0.27,
      "ret3m": 3.42,
      "ret6m": 5.76,
      "ret1y": -2.61,
      "ret2y": -11.04,
      "ret3y": -12.84
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.292,
      "ret1w": 0.66,
      "ret1m": 2.18,
      "ret3m": -5.76,
      "ret6m": 4.99,
      "ret1y": -13.21,
      "ret2y": -11.23,
      "ret3y": 6.75
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.244,
      "ret1w": -4.7,
      "ret1m": -10.93,
      "ret3m": -27.89,
      "ret6m": -36.43,
      "ret1y": -60.49,
      "ret2y": -57.75,
      "ret3y": -33.92
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8744,
      "ret1w": 1.06,
      "ret1m": 0.51,
      "ret3m": 0.14,
      "ret6m": -0.67,
      "ret1y": 3.68,
      "ret2y": -5.01,
      "ret3y": -5.93
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4549,
      "ret1w": -1.33,
      "ret1m": -2.01,
      "ret3m": -13.05,
      "ret6m": -4.85,
      "ret1y": -15.83,
      "ret2y": -6.68,
      "ret3y": 27.58
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.6641,
      "ret1w": -5.3,
      "ret1m": -7.36,
      "ret3m": -30.32,
      "ret6m": -31.7,
      "ret1y": -28.93,
      "ret2y": 19.77,
      "ret3y": 63.4
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.559,
      "ret1w": 1.11,
      "ret1m": -0.75,
      "ret3m": -1.06,
      "ret6m": 4.92,
      "ret1y": -4.66,
      "ret2y": -5.19,
      "ret3y": 2.35
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.942,
      "ret1w": -1.05,
      "ret1m": -0.11,
      "ret3m": -7.01,
      "ret6m": -9.16,
      "ret1y": -5.33,
      "ret2y": -14.6,
      "ret3y": -16.04
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3485,
      "ret1w": 1.52,
      "ret1m": -0.6,
      "ret3m": 3.78,
      "ret6m": 1.84,
      "ret1y": -3.34,
      "ret2y": 1.98,
      "ret3y": 4.79
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2148,
      "ret1w": -0.95,
      "ret1m": -1.2,
      "ret3m": -8.17,
      "ret6m": -0.32,
      "ret1y": -5.63,
      "ret2y": 4.24,
      "ret3y": 43.49
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.0231,
      "ret1w": -2.72,
      "ret1m": -3.69,
      "ret3m": -16.89,
      "ret6m": -19.23,
      "ret1y": -23.97,
      "ret2y": -11.97,
      "ret3y": 10.11
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.089,
      "ret1w": -2.72,
      "ret1m": -3.68,
      "ret3m": -16.86,
      "ret6m": -19.15,
      "ret1y": -23.82,
      "ret2y": -11.62,
      "ret3y": 10.99
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0548,
      "ret1w": -0.05,
      "ret1m": -0.53,
      "ret3m": -1.67,
      "ret6m": -4.27,
      "ret1y": -3.74,
      "ret2y": -1.71,
      "ret3y": 3.46
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0296,
      "ret1w": -0.05,
      "ret1m": -0.52,
      "ret3m": -1.62,
      "ret6m": -4.13,
      "ret1y": -3.45,
      "ret2y": -1.11,
      "ret3y": 4.71
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6989,
      "ret1w": 0.53,
      "ret1m": -0.01,
      "ret3m": -0.36,
      "ret6m": -2.1,
      "ret1y": -12.4,
      "ret2y": -13.68,
      "ret3y": -3.75
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7171,
      "ret1w": 0.53,
      "ret1m": 0.0,
      "ret3m": -0.31,
      "ret6m": -1.97,
      "ret1y": -12.17,
      "ret2y": -13.26,
      "ret3y": -2.78
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.2185,
      "ret1w": -2.78,
      "ret1m": -6.25,
      "ret3m": -21.16,
      "ret6m": -20.68,
      "ret1y": -12.11,
      "ret2y": 15.35,
      "ret3y": 91.66
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3134,
      "ret1w": -1.23,
      "ret1m": 0.76,
      "ret3m": -6.89,
      "ret6m": -7.13,
      "ret1y": -7.45,
      "ret2y": 4.65,
      "ret3y": 48.06
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7097,
      "ret1w": -0.8,
      "ret1m": 3.52,
      "ret3m": -1.77,
      "ret6m": -2.7,
      "ret1y": -20.23,
      "ret2y": -11.85,
      "ret3y": -2.22
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0068,
      "ret1w": -1.62,
      "ret1m": 5.97,
      "ret3m": -5.38,
      "ret6m": -5.88,
      "ret1y": 5.74,
      "ret2y": 25.11,
      "ret3y": 97.19
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4665,
      "ret1w": 0.19,
      "ret1m": -1.62,
      "ret3m": -7.82,
      "ret6m": -12.62,
      "ret1y": -10.55,
      "ret2y": -0.19,
      "ret3y": 24.4
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4757,
      "ret1w": 0.19,
      "ret1m": -1.61,
      "ret3m": -7.79,
      "ret6m": -12.54,
      "ret1y": -10.36,
      "ret2y": 0.21,
      "ret3y": 25.38
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2545,
      "ret1w": 0.24,
      "ret1m": -1.17,
      "ret3m": -0.97,
      "ret6m": -0.37,
      "ret1y": -3.18,
      "ret2y": -2.52,
      "ret3y": -0.01
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0835,
      "ret1w": -0.03,
      "ret1m": -1.54,
      "ret3m": -2.06,
      "ret6m": -4.5,
      "ret1y": -6.05,
      "ret2y": -7.72,
      "ret3y": 1.57
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1564,
      "ret1w": -0.6,
      "ret1m": -3.23,
      "ret3m": -14.44,
      "ret6m": -18.3,
      "ret1y": -22.99,
      "ret2y": -27.09,
      "ret3y": -17.55
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8258,
      "ret1w": 0.02,
      "ret1m": -1.61,
      "ret3m": -5.2,
      "ret6m": -3.65,
      "ret1y": -12.47,
      "ret2y": 2.44,
      "ret3y": 28.69
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.466,
      "ret1w": -2.84,
      "ret1m": -5.81,
      "ret3m": -25.97,
      "ret6m": -33.92,
      "ret1y": -29.6,
      "ret2y": 9.55,
      "ret3y": 85.27
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5308,
      "ret1w": 1.54,
      "ret1m": -1.43,
      "ret3m": 2.35,
      "ret6m": 3.99,
      "ret1y": 1.44,
      "ret2y": 0.56,
      "ret3y": 0.06
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.521,
      "ret1w": -2.23,
      "ret1m": -1.92,
      "ret3m": -14.17,
      "ret6m": -10.62,
      "ret1y": -24.55,
      "ret2y": -12.17,
      "ret3y": -11.12
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 10.276,
      "ret1w": -5.68,
      "ret1m": -8.87,
      "ret3m": -29.18,
      "ret6m": -23.86,
      "ret1y": -8.12,
      "ret2y": 36.85,
      "ret3y": 143.28
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.055,
      "ret1w": -0.03,
      "ret1m": -0.22,
      "ret3m": -0.93,
      "ret6m": -1.15,
      "ret1y": -1.35,
      "ret2y": 0.04,
      "ret3y": 2.84
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1034,
      "ret1w": -0.02,
      "ret1m": -0.21,
      "ret3m": -0.91,
      "ret6m": -1.09,
      "ret1y": -1.23,
      "ret2y": 0.28,
      "ret3y": 3.52
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0678,
      "ret1w": 0.02,
      "ret1m": 0.07,
      "ret3m": 0.17,
      "ret6m": 0.46,
      "ret1y": 0.72,
      "ret2y": 1.7,
      "ret3y": 3.17
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1024,
      "ret1w": 0.04,
      "ret1m": 0.08,
      "ret3m": 0.22,
      "ret6m": 0.47,
      "ret1y": 0.81,
      "ret2y": 1.65,
      "ret3y": 3.98
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1121,
      "ret1w": 0.03,
      "ret1m": 0.08,
      "ret3m": 0.23,
      "ret6m": 0.52,
      "ret1y": 0.91,
      "ret2y": 1.86,
      "ret3y": 4.4
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0783,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.13,
      "ret6m": 0.33,
      "ret1y": 0.63,
      "ret2y": 1.56,
      "ret3y": 3.2
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0933,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.41,
      "ret1y": 0.79,
      "ret2y": 1.89,
      "ret3y": 3.85
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0185,
      "ret1w": -0.2,
      "ret1m": -0.64,
      "ret3m": -4.1,
      "ret6m": -3.89,
      "ret1y": -5.34,
      "ret2y": 0.36,
      "ret3y": 6.0
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1724,
      "ret1w": -0.31,
      "ret1m": -0.52,
      "ret3m": -4.18,
      "ret6m": -2.18,
      "ret1y": -5.18,
      "ret2y": -1.74,
      "ret3y": 1.1
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0255,
      "ret1w": -0.19,
      "ret1m": -0.64,
      "ret3m": -4.07,
      "ret6m": -3.79,
      "ret1y": -5.15,
      "ret2y": 0.77,
      "ret3y": 6.85
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0455,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.18,
      "ret6m": 0.51,
      "ret1y": 0.88,
      "ret2y": 1.86,
      "ret3y": 3.73
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1175,
      "ret1w": -0.53,
      "ret1m": -0.8,
      "ret3m": -4.66,
      "ret6m": -4.68,
      "ret1y": -7.58,
      "ret2y": -5.31,
      "ret3y": 1.33
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1997,
      "ret1w": 0.04,
      "ret1m": -0.05,
      "ret3m": -0.35,
      "ret6m": -1.2,
      "ret1y": -2.5,
      "ret2y": 0.79,
      "ret3y": 9.6
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1189,
      "ret1w": -0.17,
      "ret1m": -0.32,
      "ret3m": -1.55,
      "ret6m": -1.27,
      "ret1y": -1.54,
      "ret2y": 0.62,
      "ret3y": 6.74
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1898,
      "ret1w": -0.17,
      "ret1m": -0.31,
      "ret3m": -1.51,
      "ret6m": -1.16,
      "ret1y": -1.34,
      "ret2y": 1.04,
      "ret3y": 7.64
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.077,
      "ret1w": 0.53,
      "ret1m": -2.03,
      "ret3m": -17.51,
      "ret6m": -15.16,
      "ret1y": 2.97,
      "ret2y": 50.73,
      "ret3y": 103.83
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.932,
      "ret1w": -0.47,
      "ret1m": -1.24,
      "ret3m": -2.81,
      "ret6m": 1.32,
      "ret1y": 3.29,
      "ret2y": 6.08,
      "ret3y": 27.36
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6553,
      "ret1w": 0.53,
      "ret1m": -3.48,
      "ret3m": -9.4,
      "ret6m": -13.25,
      "ret1y": -20.85,
      "ret2y": -9.83,
      "ret3y": 15.01
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2887,
      "ret1w": 0.39,
      "ret1m": 0.31,
      "ret3m": -7.78,
      "ret6m": 3.69,
      "ret1y": 8.3,
      "ret2y": 9.54,
      "ret3y": 63.32
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9211,
      "ret1w": -0.16,
      "ret1m": 0.24,
      "ret3m": 0.21,
      "ret6m": -1.5,
      "ret1y": -3.21,
      "ret2y": -6.0,
      "ret3y": -2.37
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.3639,
      "ret1w": 0.58,
      "ret1m": -3.32,
      "ret3m": -13.74,
      "ret6m": -12.28,
      "ret1y": 0.63,
      "ret2y": 23.36,
      "ret3y": 67.99
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.427,
      "ret1w": -0.56,
      "ret1m": -1.23,
      "ret3m": -2.85,
      "ret6m": -2.42,
      "ret1y": -1.43,
      "ret2y": 1.96,
      "ret3y": 14.63
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.816,
      "ret1w": 1.24,
      "ret1m": -2.16,
      "ret3m": -17.58,
      "ret6m": -15.35,
      "ret1y": -27.53,
      "ret2y": -28.04,
      "ret3y": -14.11
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.532,
      "ret1w": 0.84,
      "ret1m": -2.73,
      "ret3m": -15.14,
      "ret6m": -12.13,
      "ret1y": 1.32,
      "ret2y": 50.12,
      "ret3y": 115.86
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5599,
      "ret1w": 0.64,
      "ret1m": -2.66,
      "ret3m": -1.17,
      "ret6m": 6.74,
      "ret1y": 2.09,
      "ret2y": 26.78,
      "ret3y": 47.51
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6171,
      "ret1w": 0.31,
      "ret1m": -1.88,
      "ret3m": -8.57,
      "ret6m": -4.84,
      "ret1y": 1.26,
      "ret2y": 14.7,
      "ret3y": 40.74
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1962,
      "ret1w": 0.28,
      "ret1m": -2.37,
      "ret3m": -9.75,
      "ret6m": -7.71,
      "ret1y": -6.59,
      "ret2y": 1.12,
      "ret3y": 20.45
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.253,
      "ret1w": 0.32,
      "ret1m": 0.89,
      "ret3m": 1.05,
      "ret6m": -5.93,
      "ret1y": -4.06,
      "ret2y": -0.95,
      "ret3y": -12.25
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.903,
      "ret1w": -0.94,
      "ret1m": -3.94,
      "ret3m": -6.72,
      "ret6m": -2.41,
      "ret1y": -16.75,
      "ret2y": -8.86,
      "ret3y": 31.21
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.6132,
      "ret1w": 0.42,
      "ret1m": -3.59,
      "ret3m": -13.55,
      "ret6m": -12.26,
      "ret1y": -2.34,
      "ret2y": 21.38,
      "ret3y": 50.27
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.016,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.28,
      "ret6m": 0.72,
      "ret1y": 1.33,
      "ret2y": 2.57,
      "ret3y": 3.93
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0152,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.3,
      "ret6m": 0.76,
      "ret1y": 1.36,
      "ret2y": 2.65,
      "ret3y": 4.11
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.241,
      "ret1w": -0.56,
      "ret1m": -1.43,
      "ret3m": -9.75,
      "ret6m": -15.0,
      "ret1y": -17.38,
      "ret2y": -14.35,
      "ret3y": 0.89
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.375,
      "ret1w": -1.25,
      "ret1m": -2.9,
      "ret3m": -13.26,
      "ret6m": -15.48,
      "ret1y": -20.03,
      "ret2y": -11.71,
      "ret3y": 11.55
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4729,
      "ret1w": -1.3,
      "ret1m": -3.78,
      "ret3m": -7.36,
      "ret6m": -6.39,
      "ret1y": -18.87,
      "ret2y": -1.41,
      "ret3y": 35.13
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.9022,
      "ret1w": -0.41,
      "ret1m": -2.15,
      "ret3m": -9.12,
      "ret6m": -10.57,
      "ret1y": -11.82,
      "ret2y": -4.39,
      "ret3y": 11.62
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9578,
      "ret1w": -0.41,
      "ret1m": -2.14,
      "ret3m": -9.09,
      "ret6m": -10.48,
      "ret1y": -11.65,
      "ret2y": -4.0,
      "ret3y": 12.52
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7453,
      "ret1w": -1.43,
      "ret1m": -1.21,
      "ret3m": -11.42,
      "ret6m": -10.46,
      "ret1y": -17.3,
      "ret2y": -6.51,
      "ret3y": 16.21
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.616,
      "ret1w": -0.04,
      "ret1m": -1.52,
      "ret3m": -7.03,
      "ret6m": -10.81,
      "ret1y": -12.29,
      "ret2y": -10.0,
      "ret3y": 6.5
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4733,
      "ret1w": -0.43,
      "ret1m": -0.3,
      "ret3m": -4.9,
      "ret6m": -4.46,
      "ret1y": -12.18,
      "ret2y": -0.62,
      "ret3y": 24.76
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5936,
      "ret1w": -1.42,
      "ret1m": -3.23,
      "ret3m": -16.35,
      "ret6m": -22.23,
      "ret1y": -19.72,
      "ret2y": -13.87,
      "ret3y": 15.5
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0009,
      "ret1w": 0.43,
      "ret1m": -1.46,
      "ret3m": -3.5,
      "ret6m": -6.9,
      "ret1y": -9.8,
      "ret2y": -10.0,
      "ret3y": 4.18
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4888,
      "ret1w": -0.26,
      "ret1m": -0.92,
      "ret3m": 0.07,
      "ret6m": 0.03,
      "ret1y": -0.02,
      "ret2y": 7.32,
      "ret3y": 28.19
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3614,
      "ret1w": -0.05,
      "ret1m": -0.85,
      "ret3m": -5.05,
      "ret6m": 0.44,
      "ret1y": 5.39,
      "ret2y": 8.14,
      "ret3y": 31.09
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.3226,
      "ret1w": -0.83,
      "ret1m": -3.59,
      "ret3m": -12.73,
      "ret6m": -17.36,
      "ret1y": -20.74,
      "ret2y": -13.13,
      "ret3y": 8.55
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9968,
      "ret1w": -2.98,
      "ret1m": -3.35,
      "ret3m": -16.58,
      "ret6m": -16.02,
      "ret1y": -19.77,
      "ret2y": -9.78,
      "ret3y": 12.4
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0002,
      "ret1w": -2.98,
      "ret1m": -3.32,
      "ret3m": -16.46,
      "ret6m": -15.85,
      "ret1y": -19.61,
      "ret2y": -9.65,
      "ret3y": 12.16
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2503,
      "ret1w": 1.62,
      "ret1m": -1.01,
      "ret3m": -11.24,
      "ret6m": -10.88,
      "ret1y": -16.98,
      "ret2y": -9.02,
      "ret3y": 9.6
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2796,
      "ret1w": 1.62,
      "ret1m": -1.01,
      "ret3m": -11.21,
      "ret6m": -10.79,
      "ret1y": -16.82,
      "ret2y": -8.65,
      "ret3y": 10.47
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7435,
      "ret1w": 0.25,
      "ret1m": -2.81,
      "ret3m": -14.09,
      "ret6m": -17.73,
      "ret1y": -19.0,
      "ret2y": -6.83,
      "ret3y": 21.85
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1593,
      "ret1w": -0.03,
      "ret1m": 0.16,
      "ret3m": -0.26,
      "ret6m": -0.54,
      "ret1y": -0.63,
      "ret2y": 1.13,
      "ret3y": 5.67
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1796,
      "ret1w": -0.03,
      "ret1m": 0.17,
      "ret3m": -0.24,
      "ret6m": -0.46,
      "ret1y": -0.47,
      "ret2y": 1.44,
      "ret3y": 6.31
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0883,
      "ret1w": 0.02,
      "ret1m": 0.07,
      "ret3m": 0.19,
      "ret6m": 0.55,
      "ret1y": 0.87,
      "ret2y": 2.02,
      "ret3y": 3.77
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4124,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.18,
      "ret6m": 0.11,
      "ret1y": 0.17,
      "ret2y": 0.77,
      "ret3y": 5.59
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4655,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.21,
      "ret6m": 0.21,
      "ret1y": 0.37,
      "ret2y": 1.17,
      "ret3y": 6.44
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9289,
      "ret1w": -1.04,
      "ret1m": -0.79,
      "ret3m": -8.12,
      "ret6m": -8.28,
      "ret1y": 1.28,
      "ret2y": 11.21,
      "ret3y": 36.54
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0595,
      "ret1w": -1.35,
      "ret1m": -1.44,
      "ret3m": -11.58,
      "ret6m": -14.21,
      "ret1y": -12.89,
      "ret2y": -7.18,
      "ret3y": 15.4
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.22,
      "nav": 4.0027,
      "price": 4.0027,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 3.1241,
      "price": 3.1241,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.35,
      "nav": 4.0271,
      "price": 4.0271,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 0.7209,
      "price": 0.7209,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 2.0066,
      "price": 2.0066,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.5699,
      "price": 2.5699,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 5.2075,
      "price": 5.2075,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.704,
      "price": 1.704,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.16,
      "price": 1.16,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 2.671,
      "price": 2.671,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.12,
      "price": 1.12,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 2.292,
      "price": 2.292,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.55,
      "nav": 1.244,
      "price": 1.244,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.8744,
      "price": 1.8744,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.4549,
      "price": 1.4549,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.37,
      "nav": 1.6641,
      "price": 1.6641,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.559,
      "price": 2.559,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 0.942,
      "price": 0.942,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.3485,
      "price": 2.3485,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.2148,
      "price": 1.2148,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.48,
      "sharpe": -1.24,
      "calmar": -1.24
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 10.02,
      "sharpe": -2.87,
      "calmar": -2.87
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 10.59,
      "sharpe": -1.44,
      "calmar": -1.44
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.04,
      "sharpe": -0.41,
      "calmar": -0.41
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 3.88,
      "sharpe": -3.77,
      "calmar": -3.77
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.61,
      "sharpe": -3.65,
      "calmar": -3.65
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.98,
      "sharpe": -1.55,
      "calmar": -1.55
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.76,
      "sharpe": -2.56,
      "calmar": -2.56
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.33,
      "sharpe": -2.53,
      "calmar": -2.53
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.42,
      "sharpe": -1.29,
      "calmar": -1.29
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -0.5,
      "calmar": -0.5
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.27,
      "sharpe": -1.84,
      "calmar": -1.84
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 16.39,
      "sharpe": -3.8,
      "calmar": -3.8
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.77,
      "sharpe": 0.67,
      "calmar": 0.67
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.01,
      "sharpe": -2.26,
      "calmar": -2.26
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 11.04,
      "sharpe": -2.34,
      "calmar": -2.34
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.12,
      "sharpe": -0.81,
      "calmar": -0.81
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.17,
      "sharpe": -1.04,
      "calmar": -1.04
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.9,
      "sharpe": -0.6,
      "calmar": -0.6
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.8,
      "sharpe": -0.91,
      "calmar": -0.91
    }
  ],
  "news": [
    {
      "title": "广州市统计局公布2026年前三季度广州市经济运行情况。根据广东省地区生产总值统一核算结果，前三季度，广州实现地区生产总值24851亿元，按不变价格计算，同比增长5.7%，增速创近五年来同期新高，比去年同期提高1.6个百分点。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:18",
      "impact": "neutral"
    },
    {
      "title": "“广西发布”消息，10月23日，自治区党委主要领导以“四不两直”方式，深入桂林市调研督导旅游乱象整治情况，强调要坚持保护优先、科学规划、强化管理、提档升级，持续优化旅游市场环境，高标准、高质量推进桂林世界级旅游城市建设。调研直指景区存在游乐设施与自然景观不协调、商业设施过多且布局不合理、垃圾转运场所设在景区内等问题，并当即要求尽快搬迁、拆除，并“举一反三、全面排查”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:17",
      "impact": "neutral"
    },
    {
      "title": "0月26日，《每日经济新闻》记者从成都市住建局获悉，成都市住房和城乡建设局等三部门于当日出台了关于贯彻落实《关于完善商品住房销售制度的通知》的实施意见，自发布之日起执行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:16",
      "impact": "neutral"
    },
    {
      "title": "除贵州以外，其余30省份经济三季报均已发布。前三季度，全国GDP超107.1万亿元，同比增长4.6%，实现经济增量5.7万亿元，为近五年最大规模。落到省域层面，经济大省更有力地挑起大梁。目前已公布数据的30个省份中，共有15个省份经济增速超过全国平均线。而在增速排名前六的省份中，就有5个经济大省在列，这一格局在近年并不多见。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:15",
      "impact": "neutral"
    },
    {
      "title": "据住房和城乡建设部26日消息，今年前三季度，全国累计完工改造城镇老旧小区1.6万个，更新管网、加装电梯等工作也加快推进，让老旧小区宜居度不断提升。其中，各地共改造提升水电气热等各类老化管线7200多公里，实施适老化、无障碍改造小区2800多个，增设停车位8.6万个。图为10月26日，江苏南通如皋市一老旧小区改造现场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:13",
      "impact": "neutral"
    },
    {
      "title": "新华社北京10月26日电题：从前三季度用电量看经济发展新动能新华社记者戴小河、吴慧珺国家能源局近日发布的今年前三季度用电数据显示，工业用电量达到50632亿千瓦时，同比增长4.3%。其中，高技术及装备制造业用电量9619亿千瓦时，同比增长8.7%。电力数据是观察经济运行的重要窗口。大到产业布局调整，小到企业产能变化，最终都会体现在用电量的起伏波动里。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:59",
      "impact": "neutral"
    },
    {
      "title": "10月26日，中国人民银行四川省分行召开2026年四季度新闻发布会。《每日经济新闻》记者在发布会现场获悉，2026年前三季度，四川省金融运行总体平稳，呈现“总量稳、结构优、价格降”的特点，存贷款总量稳步增长，信贷结构不断优化，贷款利率持续下行，对实体经济支持更加稳固。中国人民银行四川省分行2026年四季度新闻发布会现场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:28",
      "impact": "neutral"
    },
    {
      "title": "新华社广州10月26日电题：从广交会看“超级卖家”中国的“惠邻效应”新华社记者马晓澄、杨深深、霍思颖31年前第一次参加中国进出口商品交易会（广交会），格力电器主要外销家用空调单品，而在本届广交会上，格力电器带来的不止是空调，而是覆盖家用电器、工业装备、储能、光储直柔、楼宇暖通、冷链等一整套低碳能源解决方案，展现中国智造的转型升级成果。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:21",
      "impact": "neutral"
    },
    {
      "title": "国家能源局近日发布的今年前三季度用电数据显示，工业用电量达到50632亿千瓦时，同比增长4.3%。其中，高技术及装备制造业用电量9619亿千瓦时，同比增长8.7%。电力数据是观察经济运行的重要窗口。大到产业布局调整，小到企业产能变化，最终都会体现在用电量的起伏波动里。透过前三季度的用电曲线可以发现，我国经济结构持续优化、新旧动能有序转换的态势，在一条条数据中清晰显现。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:20",
      "impact": "neutral"
    },
    {
      "title": "10月24日至25日，合肥、苏州两个长三角核心城市相继发布关于贯彻落实《住房城乡建设部自然资源部金融监管总局关于完善商品住房销售制度的通知》（建房规〔2026〕3号）的实施意见，围绕商品住房预售管理、现房销售、预售资金监管、主办银行制度、土地供应等方面作出细化安排。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:07",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 46,
    "label": "中性",
    "upDownRatio": "2,137/1,931",
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
