// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-27 15:50:46
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-27 15:50 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-27",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3648.3,
      "change": -49.22,
      "changePct": "-1.33%",
      "high": 3708.2,
      "low": 3648.3,
      "volume": 417789532.0,
      "amount": 672414400000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11245.73,
      "change": -288.65,
      "changePct": "-2.50%",
      "high": 11633.3,
      "low": 11245.72,
      "volume": 521917348.0,
      "amount": 788543920000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2548.15,
      "change": -90.08,
      "changePct": "-3.41%",
      "high": 2670.47,
      "low": 2548.11,
      "volume": 164768596.0,
      "amount": 381583040000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1252.28,
      "change": -63.22,
      "changePct": "-4.81%",
      "high": 1327.33,
      "low": 1249.76,
      "volume": 7413882.0,
      "amount": 64031970000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4049.55,
      "change": -53.99,
      "changePct": "-1.32%",
      "high": 4110.0,
      "low": 4049.54,
      "volume": 168688474.0,
      "amount": 383125560000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6511.42,
      "change": -201.31,
      "changePct": "-3.00%",
      "high": 6784.25,
      "low": 6511.37,
      "volume": 124695570.0,
      "amount": 249141580000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.54万亿",
      "label": "成交额",
      "rawAmount": 2538840470000.0,
      "change": ""
    },
    "upDown": {
      "val": "817/2,591",
      "label": "涨/跌家数",
      "rawUp": 817,
      "rawDown": 2591,
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
    "totalInflow": 9.2,
    "totalOutflow": 0,
    "netFlow": 9.2,
    "netFlowTrend": [
      1.84,
      3.68,
      5.52,
      7.36,
      9.2
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
      "inflow": 7.99,
      "pct": 1.39
    },
    {
      "name": "煤炭",
      "inflow": 2.36,
      "pct": 0.33
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.93
    },
    {
      "name": "食品",
      "inflow": -0.07,
      "pct": -1.2
    },
    {
      "name": "家电",
      "inflow": -0.09,
      "pct": -1.8
    },
    {
      "name": "电子",
      "inflow": -0.1,
      "pct": -3.33
    },
    {
      "name": "农业",
      "inflow": -0.14,
      "pct": -0.71
    },
    {
      "name": "钢铁",
      "inflow": -0.18,
      "pct": -1.02
    },
    {
      "name": "游戏",
      "inflow": -0.26,
      "pct": -3.32
    },
    {
      "name": "新能源车",
      "inflow": -0.29,
      "pct": -2.47
    },
    {
      "name": "地产",
      "inflow": -0.3,
      "pct": -3.44
    },
    {
      "name": "新能源",
      "inflow": -0.31,
      "pct": -2.35
    },
    {
      "name": "光伏",
      "inflow": -0.34,
      "pct": -1.96
    },
    {
      "name": "传媒",
      "inflow": -0.82,
      "pct": -2.38
    },
    {
      "name": "医药",
      "inflow": -1.2,
      "pct": -2.88
    },
    {
      "name": "有色",
      "inflow": -1.23,
      "pct": -0.28
    },
    {
      "name": "白酒",
      "inflow": -1.29,
      "pct": -1.43
    },
    {
      "name": "医疗",
      "inflow": -1.36,
      "pct": -2.95
    },
    {
      "name": "5G",
      "inflow": -1.68,
      "pct": -3.0
    },
    {
      "name": "券商",
      "inflow": -3.79,
      "pct": -2.04
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.876,
      "changePct": 1.39,
      "change": 0.012,
      "turnover": 26.62
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.211,
      "changePct": 0.33,
      "change": 0.004,
      "turnover": 7.87
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.446,
      "changePct": -0.28,
      "change": -0.004,
      "turnover": 4.11
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.701,
      "changePct": -0.71,
      "change": -0.005,
      "turnover": 0.48
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.963,
      "changePct": -0.93,
      "change": -0.009,
      "turnover": 0.06
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.068,
      "changePct": -1.02,
      "change": -0.011,
      "turnover": 0.59
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.493,
      "changePct": -1.2,
      "change": -0.006,
      "turnover": 0.23
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.415,
      "changePct": -1.43,
      "change": -0.006,
      "turnover": 4.29
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.313,
      "changePct": -1.8,
      "change": -0.024,
      "turnover": 0.31
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.699,
      "changePct": -1.96,
      "change": -0.014,
      "turnover": 1.13
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.479,
      "changePct": -2.04,
      "change": -0.01,
      "turnover": 12.63
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.957,
      "changePct": -2.35,
      "change": -0.047,
      "turnover": 1.03
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.778,
      "changePct": -2.38,
      "change": -0.019,
      "turnover": 2.73
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.301,
      "changePct": -2.47,
      "change": -0.033,
      "turnover": 0.97
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.371,
      "changePct": -2.88,
      "change": -0.011,
      "turnover": 3.99
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.329,
      "changePct": -2.95,
      "change": -0.01,
      "turnover": 4.55
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.743,
      "changePct": -3.0,
      "change": -0.023,
      "turnover": 5.59
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.99,
      "changePct": -3.32,
      "change": -0.034,
      "turnover": 0.88
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.638,
      "changePct": -3.33,
      "change": -0.022,
      "turnover": 0.32
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.152,
      "changePct": -3.44,
      "change": -0.041,
      "turnover": 1.01
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.439,
      "changePct": -3.49,
      "change": -0.052,
      "turnover": 0.73
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.477,
      "changePct": -3.64,
      "change": -0.018,
      "turnover": 26.66
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.011,
      "changePct": -3.71,
      "change": -0.039,
      "turnover": 0.15
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.824,
      "changePct": -3.85,
      "change": -0.033,
      "turnover": 1.36
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.781,
      "changePct": -3.94,
      "change": -0.032,
      "turnover": 6.36
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.012,
      "changePct": -3.98,
      "change": -0.042,
      "turnover": 2.65
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.765,
      "changePct": -4.49,
      "change": -0.036,
      "turnover": 9.82
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.834,
      "changePct": -4.69,
      "change": -0.041,
      "turnover": 5.06
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.957,
      "changePct": -2.35,
      "amount": 1.03,
      "netFlow": -0.26
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.371,
      "changePct": -2.88,
      "amount": 3.99,
      "netFlow": -1.0
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.309,
      "changePct": -1.12,
      "amount": 9.42,
      "netFlow": -2.35
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.765,
      "changePct": -4.49,
      "amount": 9.82,
      "netFlow": -2.46
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.013,
      "changePct": -1.04,
      "amount": 12.24,
      "netFlow": -3.06
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.479,
      "changePct": -2.04,
      "amount": 12.63,
      "netFlow": -3.16
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.862,
      "changePct": -0.56,
      "amount": 18.87,
      "netFlow": -4.72
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.537,
      "changePct": -3.16,
      "amount": 42.19,
      "netFlow": -10.55
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.123,
      "changePct": -1.34,
      "amount": 58.48,
      "netFlow": -14.62
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.32,
      "changePct": -4.42,
      "amount": 89.49,
      "netFlow": -22.37
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.123,
      "changePct": -1.34,
      "amount": 58.48,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.862,
      "changePct": -0.56,
      "amount": 18.87,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.537,
      "changePct": -3.16,
      "amount": 42.19,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.309,
      "changePct": -1.12,
      "amount": 9.42,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.013,
      "changePct": -1.04,
      "amount": 12.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 26.62,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.48,
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
      "name": "钢铁",
      "turnover": 0.59,
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
      "name": "白酒",
      "turnover": 4.29,
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
      "name": "光伏",
      "turnover": 1.13,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 12.63,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "新能源",
      "turnover": 1.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.97,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.99,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 5.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
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
      "name": "地产",
      "turnover": 1.01,
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
      "nav": 3.8739,
      "ret1w": -3.22,
      "ret1m": -1.93,
      "ret3m": -17.17,
      "ret6m": -8.57,
      "ret1y": -16.44,
      "ret2y": -3.39,
      "ret3y": 86.68
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.0584,
      "ret1w": -2.1,
      "ret1m": -8.52,
      "ret3m": -24.98,
      "ret6m": -30.42,
      "ret1y": -35.96,
      "ret2y": -25.82,
      "ret3y": 6.27
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.8638,
      "ret1w": -4.06,
      "ret1m": -11.4,
      "ret3m": -35.1,
      "ret6m": -22.91,
      "ret1y": -21.79,
      "ret2y": 9.85,
      "ret3y": 96.03
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7153,
      "ret1w": -0.78,
      "ret1m": 1.02,
      "ret3m": 3.25,
      "ret6m": 0.77,
      "ret1y": -3.25,
      "ret2y": -12.14,
      "ret3y": -5.18
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9695,
      "ret1w": -1.85,
      "ret1m": 2.05,
      "ret3m": -0.06,
      "ret6m": -8.15,
      "ret1y": -29.22,
      "ret2y": -30.18,
      "ret3y": -21.84
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5423,
      "ret1w": -1.07,
      "ret1m": -1.55,
      "ret3m": -4.95,
      "ret6m": -5.68,
      "ret1y": -25.0,
      "ret2y": -26.07,
      "ret3y": 3.58
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1857,
      "ret1w": -0.42,
      "ret1m": -0.63,
      "ret3m": -1.87,
      "ret6m": -5.56,
      "ret1y": -9.19,
      "ret2y": -0.67,
      "ret3y": 26.38
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.642,
      "ret1w": -3.64,
      "ret1m": -6.06,
      "ret3m": -16.01,
      "ret6m": -9.23,
      "ret1y": -20.29,
      "ret2y": -12.75,
      "ret3y": 26.4
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1293,
      "ret1w": -2.65,
      "ret1m": -4.9,
      "ret3m": -15.29,
      "ret6m": -15.67,
      "ret1y": -20.44,
      "ret2y": -11.8,
      "ret3y": 5.85
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.581,
      "ret1w": -3.37,
      "ret1m": -7.29,
      "ret3m": -24.02,
      "ret6m": -28.03,
      "ret1y": -15.18,
      "ret2y": 11.68,
      "ret3y": 112.08
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.095,
      "ret1w": -2.23,
      "ret1m": -1.71,
      "ret3m": 1.11,
      "ret6m": 1.67,
      "ret1y": -3.95,
      "ret2y": -13.23,
      "ret3y": -14.79
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.205,
      "ret1w": -3.8,
      "ret1m": -4.59,
      "ret3m": -9.33,
      "ret6m": -2.52,
      "ret1y": -17.38,
      "ret2y": -15.19,
      "ret3y": 2.7
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1766,
      "ret1w": -5.42,
      "ret1m": -14.4,
      "ret3m": -31.8,
      "ret6m": -40.87,
      "ret1y": -62.69,
      "ret2y": -62.08,
      "ret3y": -37.5
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8562,
      "ret1w": -0.97,
      "ret1m": 0.37,
      "ret3m": -0.83,
      "ret6m": -2.56,
      "ret1y": 2.44,
      "ret2y": -6.3,
      "ret3y": -6.85
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.418,
      "ret1w": -2.54,
      "ret1m": -5.22,
      "ret3m": -15.26,
      "ret6m": -10.43,
      "ret1y": -18.42,
      "ret2y": -10.29,
      "ret3y": 24.34
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.5911,
      "ret1w": -4.39,
      "ret1m": -12.29,
      "ret3m": -33.37,
      "ret6m": -36.64,
      "ret1y": -32.51,
      "ret2y": 8.54,
      "ret3y": 56.24
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5435,
      "ret1w": -0.61,
      "ret1m": -0.54,
      "ret3m": -1.65,
      "ret6m": 2.6,
      "ret1y": -5.02,
      "ret2y": -5.85,
      "ret3y": 1.73
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.892,
      "ret1w": -5.31,
      "ret1m": -7.18,
      "ret3m": -11.94,
      "ret6m": -15.53,
      "ret1y": -11.24,
      "ret2y": -20.14,
      "ret3y": -20.5
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3348,
      "ret1w": -0.58,
      "ret1m": -0.33,
      "ret3m": 3.17,
      "ret6m": 0.25,
      "ret1y": -3.46,
      "ret2y": 1.09,
      "ret3y": 4.18
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1874,
      "ret1w": -2.26,
      "ret1m": -4.23,
      "ret3m": -10.24,
      "ret6m": -5.0,
      "ret1y": -8.12,
      "ret2y": 1.0,
      "ret3y": 40.25
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9908,
      "ret1w": -3.16,
      "ret1m": -6.69,
      "ret3m": -19.51,
      "ret6m": -23.15,
      "ret1y": -26.33,
      "ret2y": -15.8,
      "ret3y": 6.63
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0546,
      "ret1w": -3.16,
      "ret1m": -6.68,
      "ret3m": -19.48,
      "ret6m": -23.07,
      "ret1y": -26.19,
      "ret2y": -15.47,
      "ret3y": 7.48
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0523,
      "ret1w": -0.24,
      "ret1m": -0.58,
      "ret3m": -1.9,
      "ret6m": -4.95,
      "ret1y": -3.73,
      "ret2y": -2.08,
      "ret3y": 3.22
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0273,
      "ret1w": -0.22,
      "ret1m": -0.55,
      "ret3m": -1.84,
      "ret6m": -4.8,
      "ret1y": -3.44,
      "ret2y": -1.48,
      "ret3y": 4.47
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6827,
      "ret1w": -2.32,
      "ret1m": -1.95,
      "ret3m": -2.67,
      "ret6m": -5.27,
      "ret1y": -13.89,
      "ret2y": -16.28,
      "ret3y": -5.98
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7005,
      "ret1w": -2.31,
      "ret1m": -1.93,
      "ret3m": -2.61,
      "ret6m": -5.15,
      "ret1y": -13.67,
      "ret2y": -15.87,
      "ret3y": -5.03
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.1812,
      "ret1w": -1.68,
      "ret1m": -7.41,
      "ret3m": -22.49,
      "ret6m": -24.83,
      "ret1y": -14.34,
      "ret2y": 9.38,
      "ret3y": 88.44
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2484,
      "ret1w": -2.81,
      "ret1m": -3.64,
      "ret3m": -9.5,
      "ret6m": -10.91,
      "ret1y": -10.51,
      "ret2y": -0.1,
      "ret3y": 43.9
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6821,
      "ret1w": -3.89,
      "ret1m": -3.06,
      "ret3m": -5.59,
      "ret6m": -7.81,
      "ret1y": -23.0,
      "ret2y": -16.34,
      "ret3y": -6.02
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.8467,
      "ret1w": -4.0,
      "ret1m": -2.09,
      "ret3m": -9.16,
      "ret6m": -10.47,
      "ret1y": -0.51,
      "ret2y": 17.79,
      "ret3y": 89.31
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4618,
      "ret1w": -1.01,
      "ret1m": -2.24,
      "ret3m": -8.75,
      "ret6m": -14.72,
      "ret1y": -11.14,
      "ret2y": -2.37,
      "ret3y": 23.15
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.471,
      "ret1w": -0.99,
      "ret1m": -2.24,
      "ret3m": -8.7,
      "ret6m": -14.61,
      "ret1y": -10.95,
      "ret2y": -1.98,
      "ret3y": 24.14
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2549,
      "ret1w": 0.03,
      "ret1m": -0.73,
      "ret3m": -0.94,
      "ret6m": -1.28,
      "ret1y": -2.96,
      "ret2y": -2.5,
      "ret3y": 0.02
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0722,
      "ret1w": -1.04,
      "ret1m": -1.62,
      "ret3m": -3.08,
      "ret6m": -6.05,
      "ret1y": -6.37,
      "ret2y": -9.31,
      "ret3y": 0.52
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1493,
      "ret1w": -0.61,
      "ret1m": -3.51,
      "ret3m": -14.97,
      "ret6m": -20.29,
      "ret1y": -23.8,
      "ret2y": -28.01,
      "ret3y": -18.06
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8026,
      "ret1w": -0.82,
      "ret1m": -2.36,
      "ret3m": -5.98,
      "ret6m": -5.08,
      "ret1y": -12.81,
      "ret2y": 0.81,
      "ret3y": 27.63
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.38,
      "ret1w": -3.49,
      "ret1m": -9.19,
      "ret3m": -28.55,
      "ret6m": -38.07,
      "ret1y": -32.42,
      "ret2y": 0.29,
      "ret3y": 78.81
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5445,
      "ret1w": 0.89,
      "ret1m": 0.18,
      "ret3m": 3.26,
      "ret6m": 4.75,
      "ret1y": 3.19,
      "ret2y": 1.12,
      "ret3y": 0.95
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5076,
      "ret1w": -2.57,
      "ret1m": -6.29,
      "ret3m": -16.38,
      "ret6m": -16.25,
      "ret1y": -26.14,
      "ret2y": -15.44,
      "ret3y": -13.41
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.979,
      "ret1w": -2.89,
      "ret1m": -11.61,
      "ret3m": -31.23,
      "ret6m": -29.58,
      "ret1y": -12.02,
      "ret2y": 25.74,
      "ret3y": 136.25
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.055,
      "ret1w": 0.0,
      "ret1m": -0.23,
      "ret3m": -0.93,
      "ret6m": -1.34,
      "ret1y": -1.25,
      "ret2y": -0.12,
      "ret3y": 2.84
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1033,
      "ret1w": -0.01,
      "ret1m": -0.24,
      "ret3m": -0.92,
      "ret6m": -1.29,
      "ret1y": -1.14,
      "ret2y": 0.11,
      "ret3y": 3.51
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.068,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.19,
      "ret6m": 0.44,
      "ret1y": 0.75,
      "ret2y": 1.72,
      "ret3y": 3.19
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1026,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.24,
      "ret6m": 0.49,
      "ret1y": 0.83,
      "ret2y": 1.66,
      "ret3y": 4.0
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1124,
      "ret1w": 0.03,
      "ret1m": 0.07,
      "ret3m": 0.26,
      "ret6m": 0.54,
      "ret1y": 0.93,
      "ret2y": 1.87,
      "ret3y": 4.43
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0785,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.15,
      "ret6m": 0.35,
      "ret1y": 0.64,
      "ret2y": 1.56,
      "ret3y": 3.22
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0935,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.18,
      "ret6m": 0.43,
      "ret1y": 0.8,
      "ret2y": 1.88,
      "ret3y": 3.87
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0101,
      "ret1w": -0.82,
      "ret1m": -1.63,
      "ret3m": -4.89,
      "ret6m": -5.24,
      "ret1y": -6.14,
      "ret2y": -1.04,
      "ret3y": 5.13
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1619,
      "ret1w": -0.9,
      "ret1m": -1.71,
      "ret3m": -5.03,
      "ret6m": -3.73,
      "ret1y": -6.15,
      "ret2y": -2.66,
      "ret3y": 0.2
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0171,
      "ret1w": -0.82,
      "ret1m": -1.62,
      "ret3m": -4.86,
      "ret6m": -5.14,
      "ret1y": -5.95,
      "ret2y": -0.65,
      "ret3y": 5.98
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0457,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.2,
      "ret6m": 0.52,
      "ret1y": 0.9,
      "ret2y": 1.86,
      "ret3y": 3.75
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1119,
      "ret1w": -0.5,
      "ret1m": -1.41,
      "ret3m": -5.14,
      "ret6m": -5.63,
      "ret1y": -7.98,
      "ret2y": -6.14,
      "ret3y": 0.83
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1988,
      "ret1w": -0.08,
      "ret1m": -0.11,
      "ret3m": -0.42,
      "ret6m": -1.58,
      "ret1y": -2.53,
      "ret2y": 0.35,
      "ret3y": 9.52
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1172,
      "ret1w": -0.15,
      "ret1m": -0.58,
      "ret3m": -1.7,
      "ret6m": -1.62,
      "ret1y": -1.78,
      "ret2y": 0.19,
      "ret3y": 6.58
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.188,
      "ret1w": -0.15,
      "ret1m": -0.57,
      "ret3m": -1.66,
      "ret6m": -1.52,
      "ret1y": -1.59,
      "ret2y": 0.6,
      "ret3y": 7.47
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.111,
      "ret1w": 1.64,
      "ret1m": null,
      "ret3m": -15.73,
      "ret6m": -8.69,
      "ret1y": 2.58,
      "ret2y": 50.68,
      "ret3y": 105.55
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9506,
      "ret1w": 0.63,
      "ret1m": -1.04,
      "ret3m": -2.16,
      "ret6m": 2.28,
      "ret1y": 3.04,
      "ret2y": 5.57,
      "ret3y": 28.97
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6644,
      "ret1w": 0.55,
      "ret1m": -2.91,
      "ret3m": -7.85,
      "ret6m": -12.3,
      "ret1y": -21.06,
      "ret2y": -10.87,
      "ret3y": 17.63
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3095,
      "ret1w": 0.91,
      "ret1m": 0.15,
      "ret3m": -8.21,
      "ret6m": 6.96,
      "ret1y": 7.76,
      "ret2y": 9.15,
      "ret3y": 61.78
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9213,
      "ret1w": 0.02,
      "ret1m": 0.49,
      "ret3m": 0.55,
      "ret6m": -1.6,
      "ret1y": -3.32,
      "ret2y": -6.0,
      "ret3y": -2.18
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.389,
      "ret1w": 1.06,
      "ret1m": -3.14,
      "ret3m": -12.6,
      "ret6m": -8.2,
      "ret1y": -1.26,
      "ret2y": 23.06,
      "ret3y": 67.21
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.429,
      "ret1w": 0.05,
      "ret1m": -1.4,
      "ret3m": -2.66,
      "ret6m": -2.06,
      "ret1y": -1.82,
      "ret2y": 1.16,
      "ret3y": 14.83
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.811,
      "ret1w": -0.61,
      "ret1m": -2.87,
      "ret3m": -15.78,
      "ret6m": -14.54,
      "ret1y": -28.98,
      "ret2y": -28.42,
      "ret3y": -13.82
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.5381,
      "ret1w": 0.24,
      "ret1m": -2.91,
      "ret3m": -14.65,
      "ret6m": -8.48,
      "ret1y": -1.23,
      "ret2y": 47.63,
      "ret3y": 116.54
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5636,
      "ret1w": 0.24,
      "ret1m": -1.96,
      "ret3m": -0.31,
      "ret6m": 7.75,
      "ret1y": 2.2,
      "ret2y": 27.29,
      "ret3y": 49.2
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5925,
      "ret1w": -1.52,
      "ret1m": -3.42,
      "ret3m": -9.61,
      "ret6m": -4.42,
      "ret1y": -0.64,
      "ret2y": 11.97,
      "ret3y": 39.25
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1932,
      "ret1w": -0.25,
      "ret1m": -2.57,
      "ret3m": -9.1,
      "ret6m": -5.61,
      "ret1y": -7.31,
      "ret2y": 0.28,
      "ret3y": 21.16
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.259,
      "ret1w": 0.48,
      "ret1m": 2.44,
      "ret3m": 1.94,
      "ret6m": -7.36,
      "ret1y": -3.38,
      "ret2y": -0.87,
      "ret3y": -10.55
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.91,
      "ret1w": 0.37,
      "ret1m": -2.95,
      "ret3m": -5.91,
      "ret6m": -2.45,
      "ret1y": -16.56,
      "ret2y": -8.22,
      "ret3y": 30.8
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.6303,
      "ret1w": 0.3,
      "ret1m": -4.04,
      "ret3m": -12.93,
      "ret6m": -9.54,
      "ret1y": -2.62,
      "ret2y": 18.55,
      "ret3y": 48.73
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0164,
      "ret1w": 0.04,
      "ret1m": 0.06,
      "ret3m": 0.32,
      "ret6m": 0.76,
      "ret1y": 1.4,
      "ret2y": 2.59,
      "ret3y": 3.98
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0155,
      "ret1w": 0.03,
      "ret1m": 0.05,
      "ret3m": 0.33,
      "ret6m": 0.79,
      "ret1y": 1.42,
      "ret2y": 2.66,
      "ret3y": 4.14
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.218,
      "ret1w": -1.85,
      "ret1m": -3.18,
      "ret3m": -11.42,
      "ret6m": -17.76,
      "ret1y": -19.12,
      "ret2y": -16.92,
      "ret3y": -0.98
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.319,
      "ret1w": -2.36,
      "ret1m": -4.84,
      "ret3m": -15.3,
      "ret6m": -19.48,
      "ret1y": -22.08,
      "ret2y": -15.18,
      "ret3y": 8.92
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4684,
      "ret1w": -0.31,
      "ret1m": -3.24,
      "ret3m": -7.65,
      "ret6m": -8.18,
      "ret1y": -18.36,
      "ret2y": -3.65,
      "ret3y": 34.72
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8776,
      "ret1w": -1.29,
      "ret1m": -2.95,
      "ret3m": -10.29,
      "ret6m": -13.22,
      "ret1y": -12.86,
      "ret2y": -6.58,
      "ret3y": 10.18
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9326,
      "ret1w": -1.29,
      "ret1m": -2.93,
      "ret3m": -10.26,
      "ret6m": -13.13,
      "ret1y": -12.68,
      "ret2y": -6.2,
      "ret3y": 11.08
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6957,
      "ret1w": -2.84,
      "ret1m": -4.58,
      "ret3m": -13.93,
      "ret6m": -15.0,
      "ret1y": -20.1,
      "ret2y": -10.61,
      "ret3y": 12.9
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5959,
      "ret1w": -1.24,
      "ret1m": -2.25,
      "ret3m": -8.19,
      "ret6m": -12.85,
      "ret1y": -13.42,
      "ret2y": -12.12,
      "ret3y": 5.18
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4432,
      "ret1w": -2.04,
      "ret1m": -2.56,
      "ret3m": -6.84,
      "ret6m": -7.81,
      "ret1y": -13.92,
      "ret2y": -3.7,
      "ret3y": 22.21
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5536,
      "ret1w": -2.51,
      "ret1m": -5.33,
      "ret3m": -18.45,
      "ret6m": -26.16,
      "ret1y": -22.34,
      "ret2y": -17.53,
      "ret3y": 12.6
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9883,
      "ret1w": -0.63,
      "ret1m": -1.52,
      "ret3m": -4.11,
      "ret6m": -7.9,
      "ret1y": -10.01,
      "ret2y": -11.51,
      "ret3y": 3.52
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4943,
      "ret1w": 0.37,
      "ret1m": 0.18,
      "ret3m": 1.16,
      "ret6m": -0.11,
      "ret1y": 1.21,
      "ret2y": 7.22,
      "ret3y": 29.11
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3946,
      "ret1w": 0.99,
      "ret1m": -0.89,
      "ret3m": -4.16,
      "ret6m": 2.48,
      "ret1y": 4.49,
      "ret2y": 8.16,
      "ret3y": 30.89
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.276,
      "ret1w": -2.01,
      "ret1m": -4.71,
      "ret3m": -14.48,
      "ret6m": -21.04,
      "ret1y": -22.42,
      "ret2y": -15.99,
      "ret3y": 6.38
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0112,
      "ret1w": 1.44,
      "ret1m": -1.83,
      "ret3m": -15.11,
      "ret6m": -14.7,
      "ret1y": -17.51,
      "ret2y": -8.32,
      "ret3y": 14.11
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0145,
      "ret1w": 1.43,
      "ret1m": -1.82,
      "ret3m": -15.01,
      "ret6m": -14.54,
      "ret1y": -17.35,
      "ret2y": -8.21,
      "ret3y": 13.84
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.237,
      "ret1w": -1.06,
      "ret1m": -1.84,
      "ret3m": -10.6,
      "ret6m": -10.63,
      "ret1y": -17.75,
      "ret2y": -11.15,
      "ret3y": 8.65
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.266,
      "ret1w": -1.06,
      "ret1m": -1.84,
      "ret3m": -10.57,
      "ret6m": -10.54,
      "ret1y": -17.58,
      "ret2y": -10.8,
      "ret3y": 9.53
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7319,
      "ret1w": -0.67,
      "ret1m": -3.06,
      "ret3m": -13.0,
      "ret6m": -18.12,
      "ret1y": -18.43,
      "ret2y": -9.34,
      "ret3y": 21.21
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1589,
      "ret1w": -0.03,
      "ret1m": -0.02,
      "ret3m": -0.29,
      "ret6m": -0.74,
      "ret1y": -0.69,
      "ret2y": 0.98,
      "ret3y": 5.63
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1793,
      "ret1w": -0.03,
      "ret1m": -0.01,
      "ret3m": -0.26,
      "ret6m": -0.65,
      "ret1y": -0.53,
      "ret2y": 1.3,
      "ret3y": 6.28
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0885,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.21,
      "ret6m": 0.52,
      "ret1y": 0.91,
      "ret2y": 2.02,
      "ret3y": 3.79
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4126,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.2,
      "ret6m": 0.13,
      "ret1y": 0.2,
      "ret2y": 0.75,
      "ret3y": 5.61
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4658,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.23,
      "ret6m": 0.23,
      "ret1y": 0.4,
      "ret2y": 1.15,
      "ret3y": 6.46
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9094,
      "ret1w": -1.01,
      "ret1m": -2.23,
      "ret3m": -9.05,
      "ret6m": -10.26,
      "ret1y": -0.42,
      "ret2y": 9.4,
      "ret3y": 35.16
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0441,
      "ret1w": -1.45,
      "ret1m": -3.49,
      "ret3m": -12.87,
      "ret6m": -16.71,
      "ret1y": -14.31,
      "ret2y": -8.96,
      "ret3y": 13.72
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 3.8739
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 3.0584
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 3.8638
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.7153
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.9695
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.5423
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 5.1857
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.642
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.1293
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.581
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.095
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.205
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.1766
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.8562
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.418
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.5911
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.5435
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.892
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.3348
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.1874
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.9908
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.0546
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.0523
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.0273
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.6827
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.7005
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.1812
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.2484
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.6821
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 3.8467
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.4618
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.471
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.2549
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.0722
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.1493
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.8026
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 2.38
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 1.5445
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 0.5076
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-10-27",
        "nav": 9.979
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 3.8739,
      "price": 3.8739,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 3.0584,
      "price": 3.0584,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.57,
      "nav": 3.8638,
      "price": 3.8638,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 0.7153,
      "price": 0.7153,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.9695,
      "price": 1.9695,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.5423,
      "price": 2.5423,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 5.1857,
      "price": 5.1857,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.3,
      "nav": 1.642,
      "price": 1.642,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.25,
      "nav": 1.1293,
      "price": 1.1293,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 2.581,
      "price": 2.581,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.095,
      "price": 1.095,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 2.205,
      "price": 2.205,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.72,
      "nav": 1.1766,
      "price": 1.1766,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.8562,
      "price": 1.8562,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.26,
      "nav": 1.418,
      "price": 1.418,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.61,
      "nav": 1.5911,
      "price": 1.5911,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.5435,
      "price": 2.5435,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 0.892,
      "price": 0.892,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.3348,
      "price": 2.3348,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.1874,
      "price": 1.1874,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.9,
      "sharpe": -2.37,
      "calmar": -2.37
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 12.78,
      "sharpe": -2.66,
      "calmar": -2.66
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 17.1,
      "sharpe": -1.33,
      "calmar": -1.33
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.53,
      "sharpe": -0.54,
      "calmar": -0.54
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 3.07,
      "sharpe": -4.14,
      "calmar": -4.14
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.33,
      "sharpe": -3.82,
      "calmar": -3.82
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.95,
      "sharpe": -1.63,
      "calmar": -1.63
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 9.09,
      "sharpe": -1.83,
      "calmar": -1.83
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 7.35,
      "sharpe": -2.06,
      "calmar": -2.06
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.94,
      "sharpe": -1.24,
      "calmar": -1.24
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.56,
      "sharpe": -0.59,
      "calmar": -0.59
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 6.88,
      "sharpe": -1.81,
      "calmar": -1.81
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 21.6,
      "sharpe": -3.23,
      "calmar": -3.23
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.55,
      "sharpe": 0.45,
      "calmar": 0.45
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.83,
      "sharpe": -1.8,
      "calmar": -1.8
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 18.43,
      "sharpe": -1.88,
      "calmar": -1.88
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.81,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 10.77,
      "sharpe": -0.92,
      "calmar": -0.92
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.49,
      "sharpe": -0.65,
      "calmar": -0.65
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 6.35,
      "sharpe": -0.88,
      "calmar": -0.88
    }
  ],
  "news": [
    {
      "title": "财联社10月27日讯（记者王彦琳）市场调整之际，沪市公司持续向市场传递信心。10月以来（数据统计截至10月27日晚8点），已有700余家次公司披露各类利好公告，涵盖业绩稳定增长、增持回购、重大订单、研发突破等多方面。沪市已披露三季报盈利面近九成最新数据显示，沪市（含主板、科创板）已有697家公司披露2026年三季报。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:33",
      "impact": "neutral"
    },
    {
      "title": "新施行的《广东省消费者权益保护条例》（下称《条例》）针对涉老消费痛点作出多项制度安排。为帮助广大老年消费者提高风险防范意识，远离涉老消费陷阱和圈套，守护老年人财产安全，近日，广东省消费者委员会联合佛山市消费者委员会、广东省（佛山市）银发消费教育家园（佛山开放大学）共同发布消费提示，梳理六类高发涉老消费问题，开展案例警示提醒。案例提到的皆为典型的涉老消费场景。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:26",
      "impact": "neutral"
    },
    {
      "title": "10月27日，国家统计局公布今年前九个月规上工业企业利润，从结构上看，工业利润结构加速向“新”：高技术制造业利润占比同比提高6.2个百分点，电子行业拉动全部规模以上工业企业利润增长9.6个百分点，是规上工业企业利润较快增长的重要支撑。《每日经济新闻》记者（以下简称每经记者）注意到，行业内部处于不同环节的产业，利润增速从51.7%跨越到570%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:19",
      "impact": "neutral"
    },
    {
      "title": "10月27日，上海市经济和信息化委员会发布《上海市加快发展新一代智能制造行动方案》（以下简称《行动方案》），围绕四项智能制造重点工程提出19条具体措施。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:08",
      "impact": "neutral"
    },
    {
      "title": "上证报中国证券网讯（记者仲茜）10月26日，江苏省量子科技产业联盟成立大会在苏州举行，标志着江苏量子科技产业发展进入了协同共建、体系推进的新阶段。《江苏省量子科技产业创新发展行动方案（2026—2028年）》在会上正式发布。江苏省政府副省长沈剑荣在致辞中表示，量子科技是新一轮科技革命和产业变革的前沿赛道。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:58",
      "impact": "neutral"
    },
    {
      "title": "10月23日，财政部召开2026年前三季度财政收支情况新闻发布会，介绍前三季度财政收支情况。财政部国库司副司长马宏兵对前三季度财政收支情况作了具体介绍。收入方面，前三季度，全国一般公共预算收入172292亿元，同比增长5.1%。其中，全国税收收入140706亿元，同比增长6.1%；非税收入31586亿元，同比增长1.2%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:54",
      "impact": "neutral"
    },
    {
      "title": "10月27日，国家统计局公布前9月规模以上工业企业（以下简称规上工企）利润情况。从结构上看，工业利润加速向“新”：高技术制造业利润占比同比提高6.2个百分点，电子行业拉动全部规上工企利润增长9.6个百分点，是规上工企利润较快增长的重要支撑。不过，《每日经济新闻》记者注意到，行业内部处于不同环节的产业，利润增速差异巨大，跨度从51.7%到570%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:54",
      "impact": "neutral"
    },
    {
      "title": "几天前，金粒门上海首店开业。尽管是工作日，门外依然排起长队，400平方米的店内人头攒动，新鲜零食界的“排队王”人气毋庸置疑。自今年5月走出湖南，在南京开出华东首店以来，短短半年时间，金粒门相继落子无锡、武汉、深圳、杭州、南昌、佛山、珠海、广州等城市，门店数迅速扩张至50家，“攻打金粒门”一时成为社交平台上的热梗。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:54",
      "impact": "neutral"
    },
    {
      "title": "中国航空第十城，再次易主。据CADAS（民航数据分析系统）交通大数据，2026年前三季度，乌鲁木齐机场完成旅客吞吐量2423.2万人次，同比增长7.7%，一举反超南京机场，跻身全国城市前十。此前多年，这一席位曾长期在南京、武汉、长沙等东部和中部城市间轮流切换。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:54",
      "impact": "neutral"
    },
    {
      "title": "“十五五”规划纲要提出扩大高水平对外开放、开创合作共赢新局面。作为推动高水平开放的平台，第九届中国国际进口博览会举办在即。如何向“新”而行，以“质”致远，让中国经济新动能有力驱动世界经济齿轮持续运转？今天，上海市政府新闻办公室举办“‘十五五’开局与进博机遇：上海高质量发展的新动能”中外媒体学术沙龙，邀请上海社会科学院专家深入阐释依托开放优势推动高质量发展的实践探索。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:53",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 41,
    "label": "中性",
    "upDownRatio": "817/2,591",
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
