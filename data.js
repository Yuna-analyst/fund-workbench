// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-12 19:45:39
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-12 19:45 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-12",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3797.24,
      "change": -16.55,
      "changePct": "-0.43%",
      "high": 3828.22,
      "low": 3791.0,
      "volume": 461448981.0,
      "amount": 714909910000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 12384.87,
      "change": -256.99,
      "changePct": "-2.03%",
      "high": 12656.69,
      "low": 12373.0,
      "volume": 536100368.0,
      "amount": 822921460000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2963.82,
      "change": -79.51,
      "changePct": "-2.61%",
      "high": 3049.34,
      "low": 2962.24,
      "volume": 161258304.0,
      "amount": 392333860000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1426.72,
      "change": -30.55,
      "changePct": "-2.10%",
      "high": 1473.44,
      "low": 1425.31,
      "volume": 6652779.0,
      "amount": 64617420000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4287.98,
      "change": -29.27,
      "changePct": "-0.68%",
      "high": 4334.29,
      "low": 4279.71,
      "volume": 180717331.0,
      "amount": 405573720000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7093.02,
      "change": -157.99,
      "changePct": "-2.18%",
      "high": 7236.78,
      "low": 7085.92,
      "volume": 135979766.0,
      "amount": 257222550000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.66万亿",
      "label": "成交额",
      "rawAmount": 2657578920000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,662/2,168",
      "label": "涨/跌家数",
      "rawUp": 1662,
      "rawDown": 2168,
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
    "totalInflow": 5.81,
    "totalOutflow": 0,
    "netFlow": 5.81,
    "netFlowTrend": [
      1.16,
      2.32,
      3.49,
      4.65,
      5.81
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
      "inflow": 3.79,
      "pct": 2.12
    },
    {
      "name": "传媒",
      "inflow": 2.08,
      "pct": 0.99
    },
    {
      "name": "游戏",
      "inflow": 0.28,
      "pct": 0.19
    },
    {
      "name": "食品",
      "inflow": 0.06,
      "pct": 0.2
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.5
    },
    {
      "name": "券商",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "白酒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "计算机",
      "inflow": -0.08,
      "pct": -1.59
    },
    {
      "name": "家电",
      "inflow": -0.17,
      "pct": -0.14
    },
    {
      "name": "农业",
      "inflow": -0.17,
      "pct": -0.83
    },
    {
      "name": "钢铁",
      "inflow": -0.19,
      "pct": -0.88
    },
    {
      "name": "云计算",
      "inflow": -0.19,
      "pct": -2.14
    },
    {
      "name": "新能源车",
      "inflow": -0.33,
      "pct": -2.1
    },
    {
      "name": "光伏",
      "inflow": -0.38,
      "pct": -0.65
    },
    {
      "name": "新能源",
      "inflow": -0.44,
      "pct": -1.38
    },
    {
      "name": "军工",
      "inflow": -0.59,
      "pct": -2.22
    },
    {
      "name": "医药",
      "inflow": -0.95,
      "pct": -0.26
    },
    {
      "name": "医疗",
      "inflow": -1.34,
      "pct": -0.29
    },
    {
      "name": "创新药",
      "inflow": -1.88,
      "pct": -1.54
    },
    {
      "name": "煤炭",
      "inflow": -2.9,
      "pct": -1.85
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.868,
      "changePct": 2.12,
      "change": 0.018,
      "turnover": 12.62
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.819,
      "changePct": 0.99,
      "change": 0.008,
      "turnover": 6.92
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.996,
      "changePct": 0.5,
      "change": 0.005,
      "turnover": 0.06
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.495,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 0.19
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.043,
      "changePct": 0.19,
      "change": 0.002,
      "turnover": 0.95
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.495,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 5.73
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.419,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 2.97
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.382,
      "changePct": -0.14,
      "change": -0.002,
      "turnover": 0.56
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.379,
      "changePct": -0.26,
      "change": -0.001,
      "turnover": 3.17
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.34,
      "changePct": -0.29,
      "change": -0.001,
      "turnover": 4.47
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.76,
      "changePct": -0.65,
      "change": -0.005,
      "turnover": 1.28
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.721,
      "changePct": -0.83,
      "change": -0.006,
      "turnover": 0.55
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.122,
      "changePct": -0.88,
      "change": -0.01,
      "turnover": 0.62
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.218,
      "changePct": -1.38,
      "change": -0.031,
      "turnover": 1.46
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.83,
      "changePct": -1.54,
      "change": -0.013,
      "turnover": 6.27
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.053,
      "changePct": -1.59,
      "change": -0.017,
      "turnover": 0.26
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.274,
      "changePct": -1.85,
      "change": -0.024,
      "turnover": 9.68
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.444,
      "changePct": -2.1,
      "change": -0.031,
      "turnover": 1.09
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.508,
      "changePct": -2.14,
      "change": -0.033,
      "turnover": 0.63
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.058,
      "changePct": -2.22,
      "change": -0.024,
      "turnover": 1.97
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.888,
      "changePct": -2.52,
      "change": -0.023,
      "turnover": 10.01
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.973,
      "changePct": -2.6,
      "change": -0.026,
      "turnover": 6.15
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.903,
      "changePct": -2.69,
      "change": -0.025,
      "turnover": 0.97
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.246,
      "changePct": -2.88,
      "change": -0.037,
      "turnover": 1.92
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.72,
      "changePct": -2.96,
      "change": -0.022,
      "turnover": 0.62
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.59,
      "changePct": -3.17,
      "change": -0.052,
      "turnover": 5.43
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.863,
      "changePct": -4.64,
      "change": -0.042,
      "turnover": 7.3
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.562,
      "changePct": -5.07,
      "change": -0.03,
      "turnover": 25.66
    }
  ],
  "etfFlow": [
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.932,
      "changePct": 0.45,
      "amount": 10.22,
      "netFlow": 2.56
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.218,
      "changePct": -1.38,
      "amount": 1.46,
      "netFlow": -0.37
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.379,
      "changePct": -0.26,
      "amount": 3.17,
      "netFlow": -0.79
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.495,
      "changePct": 0.0,
      "amount": 5.73,
      "netFlow": -1.43
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.55,
      "changePct": -0.66,
      "amount": 6.41,
      "netFlow": -1.6
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.239,
      "changePct": -0.59,
      "amount": 7.07,
      "netFlow": -1.77
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.888,
      "changePct": -2.52,
      "amount": 10.01,
      "netFlow": -2.5
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.125,
      "changePct": -2.16,
      "amount": 26.08,
      "netFlow": -6.52
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.36,
      "changePct": -0.57,
      "amount": 30.47,
      "netFlow": -7.62
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.506,
      "changePct": -2.27,
      "amount": 61.89,
      "netFlow": -15.47
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.36,
      "changePct": -0.57,
      "amount": 30.47,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.932,
      "changePct": 0.45,
      "amount": 10.22,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.125,
      "changePct": -2.16,
      "amount": 26.08,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.55,
      "changePct": -0.66,
      "amount": 6.41,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.239,
      "changePct": -0.59,
      "amount": 7.07,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 12.62,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "传媒",
      "turnover": 6.92,
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
      "name": "食品",
      "turnover": 0.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.95,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 5.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 2.97,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.47,
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
      "name": "农业",
      "turnover": 0.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 9.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.63,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 1.97,
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
      "nav": 4.1134,
      "ret1w": -2.31,
      "ret1m": -7.02,
      "ret3m": -8.12,
      "ret6m": -18.66,
      "ret1y": -4.55,
      "ret2y": 5.59,
      "ret3y": 109.79
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.5443,
      "ret1w": -3.3,
      "ret1m": -7.84,
      "ret3m": -15.37,
      "ret6m": -23.92,
      "ret1y": -17.97,
      "ret2y": -14.39,
      "ret3y": 25.87
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.8633,
      "ret1w": -3.59,
      "ret1m": -13.8,
      "ret3m": -17.0,
      "ret6m": -18.2,
      "ret1y": 6.13,
      "ret2y": 51.1,
      "ret3y": 166.98
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7034,
      "ret1w": 0.92,
      "ret1m": 0.9,
      "ret3m": 0.92,
      "ret6m": 6.05,
      "ret1y": -5.06,
      "ret2y": -14.51,
      "ret3y": -6.9
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9779,
      "ret1w": -1.19,
      "ret1m": -1.04,
      "ret3m": 0.25,
      "ret6m": -9.32,
      "ret1y": -27.72,
      "ret2y": -31.15,
      "ret3y": -12.59
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6618,
      "ret1w": -0.16,
      "ret1m": -1.75,
      "ret3m": -1.09,
      "ret6m": -0.53,
      "ret1y": -23.38,
      "ret2y": -22.75,
      "ret3y": 14.47
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2735,
      "ret1w": -0.26,
      "ret1m": -0.27,
      "ret3m": -2.5,
      "ret6m": 2.54,
      "ret1y": -8.06,
      "ret2y": 1.88,
      "ret3y": 30.43
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.819,
      "ret1w": -2.52,
      "ret1m": -4.11,
      "ret3m": -1.83,
      "ret6m": -11.96,
      "ret1y": -8.45,
      "ret2y": -2.93,
      "ret3y": 47.77
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2482,
      "ret1w": -2.23,
      "ret1m": -3.58,
      "ret3m": -4.91,
      "ret6m": -12.44,
      "ret1y": -8.38,
      "ret2y": -2.14,
      "ret3y": 18.54
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.939,
      "ret1w": -2.62,
      "ret1m": -7.14,
      "ret3m": -10.99,
      "ret6m": -26.58,
      "ret1y": 6.33,
      "ret2y": 37.79,
      "ret3y": 163.12
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.108,
      "ret1w": -0.63,
      "ret1m": 0.82,
      "ret3m": 1.93,
      "ret6m": 8.73,
      "ret1y": -3.74,
      "ret2y": -14.31,
      "ret3y": -13.64
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.407,
      "ret1w": -1.47,
      "ret1m": -1.92,
      "ret3m": 5.9,
      "ret6m": 7.12,
      "ret1y": -10.65,
      "ret2y": -8.72,
      "ret3y": 20.71
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.5203,
      "ret1w": -1.03,
      "ret1m": -5.11,
      "ret3m": -7.79,
      "ret6m": -32.51,
      "ret1y": -49.38,
      "ret2y": -45.3,
      "ret3y": -9.97
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8876,
      "ret1w": 0.19,
      "ret1m": 0.15,
      "ret3m": -1.13,
      "ret6m": 1.33,
      "ret1y": 4.44,
      "ret2y": -4.1,
      "ret3y": -4.38
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.5598,
      "ret1w": -1.83,
      "ret1m": -4.0,
      "ret3m": -4.49,
      "ret6m": -9.92,
      "ret1y": -7.4,
      "ret2y": 1.06,
      "ret3y": 43.76
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.9587,
      "ret1w": -4.22,
      "ret1m": -11.69,
      "ret3m": -16.08,
      "ret6m": -35.91,
      "ret1y": -5.83,
      "ret2y": 50.07,
      "ret3y": 128.9
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.6164,
      "ret1w": -0.6,
      "ret1m": -0.9,
      "ret3m": 3.0,
      "ret6m": 9.2,
      "ret1y": -0.86,
      "ret2y": -2.83,
      "ret3y": 7.12
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.984,
      "ret1w": -1.99,
      "ret1m": -6.11,
      "ret3m": 2.18,
      "ret6m": -8.72,
      "ret1y": -3.15,
      "ret2y": -14.36,
      "ret3y": -10.63
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3341,
      "ret1w": 0.91,
      "ret1m": 1.89,
      "ret3m": 0.99,
      "ret6m": 6.48,
      "ret1y": -3.84,
      "ret2y": 4.45,
      "ret3y": 4.42
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2654,
      "ret1w": -1.23,
      "ret1m": -2.37,
      "ret3m": -2.89,
      "ret6m": -3.37,
      "ret1y": 0.36,
      "ret2y": 9.14,
      "ret3y": 57.13
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.1189,
      "ret1w": -2.27,
      "ret1m": -5.19,
      "ret3m": -9.47,
      "ret6m": -19.39,
      "ret1y": -15.69,
      "ret2y": -3.98,
      "ret3y": 23.12
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.1908,
      "ret1w": -2.27,
      "ret1m": -5.18,
      "ret3m": -9.44,
      "ret6m": -19.31,
      "ret1y": -15.53,
      "ret2y": -3.6,
      "ret3y": 24.11
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0644,
      "ret1w": -0.22,
      "ret1m": -0.27,
      "ret3m": -1.56,
      "ret6m": -3.29,
      "ret1y": -1.74,
      "ret2y": -0.32,
      "ret3y": 4.97
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0388,
      "ret1w": -0.22,
      "ret1m": -0.24,
      "ret3m": -1.51,
      "ret6m": -3.13,
      "ret1y": -1.43,
      "ret2y": 0.29,
      "ret3y": 6.25
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7031,
      "ret1w": 0.1,
      "ret1m": 0.4,
      "ret3m": 0.14,
      "ret6m": -1.62,
      "ret1y": -11.35,
      "ret2y": -13.74,
      "ret3y": -3.8
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7213,
      "ret1w": 0.1,
      "ret1m": 0.42,
      "ret3m": 0.18,
      "ret6m": -1.49,
      "ret1y": -11.12,
      "ret2y": -13.31,
      "ret3y": -2.84
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.4761,
      "ret1w": -2.83,
      "ret1m": -7.1,
      "ret3m": -13.47,
      "ret6m": -21.25,
      "ret1y": 8.29,
      "ret2y": 35.68,
      "ret3y": 115.29
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3831,
      "ret1w": -1.44,
      "ret1m": -3.28,
      "ret3m": -1.16,
      "ret6m": -11.79,
      "ret1y": -1.87,
      "ret2y": 6.36,
      "ret3y": 59.33
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7044,
      "ret1w": -0.87,
      "ret1m": -1.04,
      "ret3m": -0.33,
      "ret6m": -11.72,
      "ret1y": -19.74,
      "ret2y": -14.65,
      "ret3y": 1.48
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9457,
      "ret1w": -2.43,
      "ret1m": -5.02,
      "ret3m": -0.32,
      "ret6m": -19.27,
      "ret1y": 10.73,
      "ret2y": 21.95,
      "ret3y": 99.35
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4853,
      "ret1w": -0.47,
      "ret1m": -2.3,
      "ret3m": -3.52,
      "ret6m": -18.59,
      "ret1y": -3.35,
      "ret2y": 4.46,
      "ret3y": 31.55
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4948,
      "ret1w": -0.46,
      "ret1m": -2.29,
      "ret3m": -3.49,
      "ret6m": -18.51,
      "ret1y": -3.15,
      "ret2y": 4.87,
      "ret3y": 32.62
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2742,
      "ret1w": 0.02,
      "ret1m": 0.5,
      "ret3m": -0.71,
      "ret6m": 3.12,
      "ret1y": -1.54,
      "ret2y": -0.91,
      "ret3y": 1.75
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1068,
      "ret1w": -0.19,
      "ret1m": 0.12,
      "ret3m": -0.22,
      "ret6m": -2.11,
      "ret1y": -5.4,
      "ret2y": -6.0,
      "ret3y": 4.73
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.2777,
      "ret1w": -1.07,
      "ret1m": -3.2,
      "ret3m": -7.24,
      "ret6m": -19.39,
      "ret1y": -10.58,
      "ret2y": -23.11,
      "ret3y": -5.98
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8812,
      "ret1w": -0.97,
      "ret1m": -1.31,
      "ret3m": -3.96,
      "ret6m": 1.27,
      "ret1y": -9.89,
      "ret2y": 2.3,
      "ret3y": 30.93
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.836,
      "ret1w": -2.81,
      "ret1m": -9.74,
      "ret3m": -14.42,
      "ret6m": -35.43,
      "ret1y": -7.62,
      "ret2y": 37.47,
      "ret3y": 113.88
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5532,
      "ret1w": 1.6,
      "ret1m": 2.27,
      "ret3m": 2.41,
      "ret6m": 10.38,
      "ret1y": 4.97,
      "ret2y": 3.83,
      "ret3y": 2.24
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5499,
      "ret1w": -2.74,
      "ret1m": -4.94,
      "ret3m": -9.66,
      "ret6m": -33.63,
      "ret1y": -13.67,
      "ret2y": -11.89,
      "ret3y": 11.72
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 12.105,
      "ret1w": -4.16,
      "ret1m": -11.03,
      "ret3m": -18.13,
      "ret6m": -25.41,
      "ret1y": 19.58,
      "ret2y": 73.97,
      "ret3y": 221.51
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0591,
      "ret1w": -0.09,
      "ret1m": -0.17,
      "ret3m": -0.7,
      "ret6m": -1.37,
      "ret1y": -0.71,
      "ret2y": 0.53,
      "ret3y": 3.62
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1076,
      "ret1w": -0.09,
      "ret1m": -0.16,
      "ret3m": -0.68,
      "ret6m": -1.3,
      "ret1y": -0.59,
      "ret2y": 0.77,
      "ret3y": 4.31
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0666,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.17,
      "ret6m": 0.4,
      "ret1y": 0.7,
      "ret2y": 1.68,
      "ret3y": 3.14
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1008,
      "ret1w": 0.03,
      "ret1m": 0.05,
      "ret3m": 0.15,
      "ret6m": 0.36,
      "ret1y": 0.74,
      "ret2y": 1.57,
      "ret3y": 3.97
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1105,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.42,
      "ret1y": 0.85,
      "ret2y": 1.78,
      "ret3y": 4.4
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0774,
      "ret1w": 0.03,
      "ret1m": 0.07,
      "ret3m": 0.11,
      "ret6m": 0.31,
      "ret1y": 0.65,
      "ret2y": 1.55,
      "ret3y": 3.13
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0922,
      "ret1w": 0.03,
      "ret1m": 0.07,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.81,
      "ret2y": 1.87,
      "ret3y": 3.78
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0396,
      "ret1w": -0.46,
      "ret1m": -1.15,
      "ret3m": -1.87,
      "ret6m": -4.66,
      "ret1y": -1.93,
      "ret2y": 3.04,
      "ret3y": 8.39
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1962,
      "ret1w": -0.5,
      "ret1m": -1.22,
      "ret3m": -1.29,
      "ret6m": -4.31,
      "ret1y": -1.75,
      "ret2y": 0.71,
      "ret3y": 3.11
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0466,
      "ret1w": -0.46,
      "ret1m": -1.14,
      "ret3m": -1.84,
      "ret6m": -4.57,
      "ret1y": -1.74,
      "ret2y": 3.46,
      "ret3y": 9.26
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.18,
      "ret6m": 0.45,
      "ret1y": 0.84,
      "ret2y": 1.85,
      "ret3y": 3.79
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1412,
      "ret1w": -0.43,
      "ret1m": -1.47,
      "ret3m": -2.43,
      "ret6m": -4.57,
      "ret1y": -5.22,
      "ret2y": -3.51,
      "ret3y": 4.52
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.205,
      "ret1w": 0.02,
      "ret1m": 0.02,
      "ret3m": -0.45,
      "ret6m": -1.12,
      "ret1y": -1.48,
      "ret2y": 0.95,
      "ret3y": 11.19
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1276,
      "ret1w": -0.14,
      "ret1m": -0.36,
      "ret3m": -0.59,
      "ret6m": -2.44,
      "ret1y": 0.0,
      "ret2y": 1.5,
      "ret3y": 8.72
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1989,
      "ret1w": -0.13,
      "ret1m": -0.35,
      "ret3m": -0.56,
      "ret6m": -2.34,
      "ret1y": 0.21,
      "ret2y": 1.92,
      "ret3y": 9.63
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.464,
      "ret1w": -0.16,
      "ret1m": -1.36,
      "ret3m": -0.88,
      "ret6m": -3.14,
      "ret1y": 33.77,
      "ret2y": 79.59,
      "ret3y": 143.24
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0434,
      "ret1w": 0.45,
      "ret1m": 1.38,
      "ret3m": 2.06,
      "ret6m": 4.23,
      "ret1y": 11.64,
      "ret2y": 5.74,
      "ret3y": 32.36
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7832,
      "ret1w": 1.16,
      "ret1m": -1.67,
      "ret3m": -3.87,
      "ret6m": -9.48,
      "ret1y": -12.58,
      "ret2y": -8.67,
      "ret3y": 25.31
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4808,
      "ret1w": 1.53,
      "ret1m": -0.36,
      "ret3m": 4.0,
      "ret6m": 4.47,
      "ret1y": 27.87,
      "ret2y": 16.83,
      "ret3y": 77.64
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9143,
      "ret1w": -0.08,
      "ret1m": 0.24,
      "ret3m": -1.98,
      "ret6m": -2.87,
      "ret1y": -3.98,
      "ret2y": -6.26,
      "ret3y": -2.59
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7078,
      "ret1w": 0.17,
      "ret1m": -0.84,
      "ret3m": -0.06,
      "ret6m": -4.52,
      "ret1y": 23.83,
      "ret2y": 39.43,
      "ret3y": 92.07
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.58,
      "ret1w": 0.66,
      "ret1m": 0.95,
      "ret3m": -0.11,
      "ret6m": -1.23,
      "ret1y": 4.69,
      "ret2y": 4.3,
      "ret3y": 20.08
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.156,
      "ret1w": -0.43,
      "ret1m": -7.37,
      "ret3m": -4.15,
      "ret6m": -1.95,
      "ret1y": -18.25,
      "ret2y": -23.7,
      "ret3y": 74.1
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.92,
      "ret1w": -0.33,
      "ret1m": -4.27,
      "ret3m": -4.37,
      "ret6m": -5.74,
      "ret1y": -19.09,
      "ret2y": -25.75,
      "ret3y": -0.54
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9226,
      "ret1w": 0.28,
      "ret1m": 0.09,
      "ret3m": -0.23,
      "ret6m": -2.96,
      "ret1y": 33.35,
      "ret2y": 67.69,
      "ret3y": 149.45
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5878,
      "ret1w": 0.81,
      "ret1m": 3.55,
      "ret3m": -4.07,
      "ret6m": 14.27,
      "ret1y": 2.74,
      "ret2y": 27.17,
      "ret3y": 51.58
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7336,
      "ret1w": 0.33,
      "ret1m": -0.04,
      "ret3m": -2.77,
      "ret6m": 2.24,
      "ret1y": 12.18,
      "ret2y": 22.52,
      "ret3y": 52.9
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2908,
      "ret1w": 0.44,
      "ret1m": -0.53,
      "ret3m": -4.16,
      "ret6m": -0.47,
      "ret1y": 3.86,
      "ret2y": 7.19,
      "ret3y": 29.87
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.229,
      "ret1w": 1.65,
      "ret1m": 1.24,
      "ret3m": -3.91,
      "ret6m": -6.54,
      "ret1y": -3.61,
      "ret2y": -0.65,
      "ret3y": -11.57
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.994,
      "ret1w": 1.53,
      "ret1m": 0.76,
      "ret3m": -5.18,
      "ret6m": 0.25,
      "ret1y": -13.94,
      "ret2y": -1.77,
      "ret3y": 43.84
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0139,
      "ret1w": 0.06,
      "ret1m": 0.07,
      "ret3m": 0.26,
      "ret6m": 0.54,
      "ret1y": 1.41,
      "ret2y": 2.42,
      "ret3y": 3.76
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.013,
      "ret1w": 0.06,
      "ret1m": 0.07,
      "ret3m": 0.27,
      "ret6m": 0.57,
      "ret1y": 1.42,
      "ret2y": 2.5,
      "ret3y": 3.92
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.303,
      "ret1w": -1.29,
      "ret1m": -2.91,
      "ret3m": -6.33,
      "ret6m": -14.95,
      "ret1y": -9.95,
      "ret2y": -10.51,
      "ret3y": 8.13
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.556,
      "ret1w": -1.92,
      "ret1m": -3.47,
      "ret3m": -7.73,
      "ret6m": -15.5,
      "ret1y": -10.25,
      "ret2y": -5.05,
      "ret3y": 25.17
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5611,
      "ret1w": -1.66,
      "ret1m": -0.28,
      "ret3m": -5.95,
      "ret6m": -0.64,
      "ret1y": -13.13,
      "ret2y": 4.39,
      "ret3y": 44.15
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0105,
      "ret1w": -1.19,
      "ret1m": -2.43,
      "ret3m": -4.95,
      "ret6m": -8.43,
      "ret1y": -3.77,
      "ret2y": 2.35,
      "ret3y": 19.05
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.069,
      "ret1w": -1.18,
      "ret1m": -2.42,
      "ret3m": -4.91,
      "ret6m": -8.33,
      "ret1y": -3.57,
      "ret2y": 2.77,
      "ret3y": 20.01
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.8385,
      "ret1w": -2.09,
      "ret1m": -4.42,
      "ret3m": -6.14,
      "ret6m": -15.87,
      "ret1y": -9.97,
      "ret2y": -3.24,
      "ret3y": 29.66
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6823,
      "ret1w": -0.64,
      "ret1m": -1.52,
      "ret3m": -4.6,
      "ret6m": -9.38,
      "ret1y": -6.16,
      "ret2y": -5.45,
      "ret3y": 12.83
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5163,
      "ret1w": -1.06,
      "ret1m": -1.67,
      "ret3m": -2.34,
      "ret6m": -4.84,
      "ret1y": -8.27,
      "ret2y": 1.35,
      "ret3y": 32.6
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.7375,
      "ret1w": -2.1,
      "ret1m": -4.81,
      "ret3m": -9.69,
      "ret6m": -22.05,
      "ret1y": -7.21,
      "ret2y": -5.31,
      "ret3y": 30.68
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.06,
      "ret1w": -0.05,
      "ret1m": 0.04,
      "ret3m": -3.22,
      "ret6m": 0.13,
      "ret1y": -5.16,
      "ret2y": -6.27,
      "ret3y": 7.72
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4569,
      "ret1w": 0.87,
      "ret1m": -0.38,
      "ret3m": -3.39,
      "ret6m": -1.09,
      "ret1y": -2.83,
      "ret2y": 5.1,
      "ret3y": 25.69
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5727,
      "ret1w": 0.35,
      "ret1m": 1.27,
      "ret3m": 3.89,
      "ret6m": 2.62,
      "ret1y": 19.05,
      "ret2y": 14.45,
      "ret3y": 39.17
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.5062,
      "ret1w": -1.55,
      "ret1m": -2.74,
      "ret3m": -7.68,
      "ret6m": -14.72,
      "ret1y": -10.34,
      "ret2y": -5.01,
      "ret3y": 20.77
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1007,
      "ret1w": -2.61,
      "ret1m": -2.61,
      "ret3m": -6.83,
      "ret6m": -13.95,
      "ret1y": -5.61,
      "ret2y": -4.05,
      "ret3y": 18.9
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1029,
      "ret1w": -2.61,
      "ret1m": -2.61,
      "ret3m": -6.82,
      "ret6m": -13.89,
      "ret1y": -5.53,
      "ret2y": -3.92,
      "ret3y": 18.48
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3275,
      "ret1w": 0.02,
      "ret1m": -1.86,
      "ret3m": -4.8,
      "ret6m": -14.57,
      "ret1y": -8.47,
      "ret2y": -8.82,
      "ret3y": 16.66
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3584,
      "ret1w": 0.02,
      "ret1m": -1.86,
      "ret3m": -4.77,
      "ret6m": -14.48,
      "ret1y": -8.28,
      "ret2y": -8.45,
      "ret3y": 17.6
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.8774,
      "ret1w": -0.28,
      "ret1m": -2.27,
      "ret3m": -7.14,
      "ret6m": -26.26,
      "ret1y": -6.68,
      "ret2y": -3.25,
      "ret3y": 32.79
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1593,
      "ret1w": -0.09,
      "ret1m": -0.16,
      "ret3m": -0.22,
      "ret6m": -0.81,
      "ret1y": -0.22,
      "ret2y": 1.03,
      "ret3y": 6.82
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1795,
      "ret1w": -0.09,
      "ret1m": -0.15,
      "ret3m": -0.19,
      "ret6m": -0.73,
      "ret1y": -0.06,
      "ret2y": 1.34,
      "ret3y": 7.47
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0869,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.19,
      "ret6m": 0.47,
      "ret1y": 0.85,
      "ret2y": 1.98,
      "ret3y": 3.73
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4106,
      "ret1w": 0.04,
      "ret1m": 0.04,
      "ret3m": 0.09,
      "ret6m": 0.1,
      "ret1y": 0.07,
      "ret2y": 0.68,
      "ret3y": 8.1
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4635,
      "ret1w": 0.04,
      "ret1m": 0.05,
      "ret3m": 0.12,
      "ret6m": 0.21,
      "ret1y": 0.27,
      "ret2y": 1.08,
      "ret3y": 8.97
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9925,
      "ret1w": -1.57,
      "ret1m": -3.41,
      "ret3m": -5.56,
      "ret6m": -8.16,
      "ret1y": 5.6,
      "ret2y": 13.88,
      "ret3y": 43.99
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1186,
      "ret1w": -2.24,
      "ret1m": -4.32,
      "ret3m": -8.54,
      "ret6m": -9.94,
      "ret1y": -4.71,
      "ret2y": -3.54,
      "ret3y": 26.37
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 4.466
      },
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
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 4.0366
      },
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
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 5.6656
      },
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
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.6979
      },
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
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.9572
      },
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
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.6802
      },
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
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 5.3656
      },
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
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.867
      },
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
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.3088
      },
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
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 3.292
      },
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
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.087
      },
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
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.286
      },
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
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.6699
      },
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
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.9012
      },
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
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.6276
      },
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
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.3054
      },
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
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.5262
      },
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
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.993
      },
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
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.2982
      },
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
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.302
      },
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
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.2391
      },
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
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.3183
      },
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
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.0772
      },
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
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.0508
      },
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
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.7008
      },
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
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.7187
      },
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
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.8059
      },
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
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.4102
      },
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
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.7057
      },
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
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 3.9643
      },
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
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.4997
      },
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
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.5093
      },
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
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.2765
      },
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
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.1055
      },
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
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.3685
      },
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
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 2.9655
      },
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
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 3.27
      },
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
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 1.5147
      },
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
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 0.6018
      },
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
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-09-15",
        "nav": 14.776
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 4.1134,
      "price": 4.1134,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 3.5443,
      "price": 3.5443,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.69,
      "nav": 4.8633,
      "price": 4.8633,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 0.7034,
      "price": 0.7034,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.9779,
      "price": 1.9779,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.6618,
      "price": 2.6618,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 5.2735,
      "price": 5.2735,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.819,
      "price": 1.819,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.2482,
      "price": 1.2482,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 2.939,
      "price": 2.939,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.108,
      "price": 1.108,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 2.407,
      "price": 2.407,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.26,
      "nav": 1.5203,
      "price": 1.5203,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.8876,
      "price": 1.8876,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.5598,
      "price": 1.5598,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.58,
      "nav": 1.9587,
      "price": 1.9587,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.6164,
      "price": 2.6164,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.31,
      "nav": 0.984,
      "price": 0.984,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.3341,
      "price": 2.3341,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.2654,
      "price": 1.2654,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.53,
      "sharpe": -0.38,
      "calmar": -0.38
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 11.76,
      "sharpe": -1.4,
      "calmar": -1.4
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 20.7,
      "sharpe": 0.33,
      "calmar": 0.33
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.35,
      "sharpe": -0.86,
      "calmar": -0.86
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 1.56,
      "sharpe": -4.59,
      "calmar": -4.59
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.62,
      "sharpe": -3.46,
      "calmar": -3.46
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -1.53,
      "calmar": -1.53
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.17,
      "sharpe": -0.93,
      "calmar": -0.93
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.37,
      "sharpe": -0.98,
      "calmar": -0.98
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.71,
      "sharpe": 0.52,
      "calmar": 0.52
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.23,
      "sharpe": -0.64,
      "calmar": -0.64
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 2.88,
      "sharpe": -1.54,
      "calmar": -1.54
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 7.67,
      "sharpe": -4.88,
      "calmar": -4.88
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.22,
      "sharpe": 0.86,
      "calmar": 0.86
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.0,
      "sharpe": -0.82,
      "calmar": -0.82
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 17.54,
      "sharpe": -0.35,
      "calmar": -0.35
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.35,
      "sharpe": -0.15,
      "calmar": -0.15
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.17,
      "sharpe": -0.28,
      "calmar": -0.28
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.83,
      "sharpe": -0.56,
      "calmar": -0.56
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.56,
      "sharpe": 0.05,
      "calmar": 0.05
    }
  ],
  "news": [
    {
      "title": "财政部、税务总局10月12日发布《关于调整部分产品出口退税政策的公告》（以下简称《公告》），明确自2027年4月1日起，将新能源汽车的增值税出口退税率由13%下调至9%；取消电子烟设备装置等产品增值税出口退税。长期以来，中国对大多数产品实行出口退税政策，并结合经济社会发展需要适时进行调整。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:07",
      "impact": "neutral"
    },
    {
      "title": "10月12日，中国汽车工业协会发布9月份及前三季度汽车产销数据。数据显示，9月，汽车产销分别完成299万辆和295.6万辆，环比分别增长11.4%和9%，同比分别下降8.7%和8.4%；1—9月，汽车产销分别完成2324.6万辆和2327.1万辆，同比均下降4.5%。中国汽车工业协会副秘书长陈士华表示，前三季度，我国汽车产销小幅下滑，市场总体呈现“内冷外热”运行态势。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:07",
      "impact": "neutral"
    },
    {
      "title": "作为深圳与香港跨境往来的重要历史见证，皇岗口岸承载着深港两地民众的许多共同记忆。历时7年升级建设的皇岗口岸于2026年10月12日上午6时30分正式开通运行。赶在正式开通前，证券时报记者来到皇岗口岸，静静等候口岸启用这一历史性时刻。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:07",
      "impact": "neutral"
    },
    {
      "title": "进入第四季度，食品饮料行业迎来传统消费旺季，但渠道端冷热不均的信号越来越清晰。多位食品企业渠道业务负责人感慨：“商超卖场的堆头陈列好谈了，量贩零食店和会员店的核心货位却越来越难排。”这一细节背后，折射出食品饮料行业正在经历的渠道版图变革。综合零售企业的发展规律来看，从“渠道为王”到以低价为导向的“商品运营”，再到追求综合效率的“精细化运营”，最终走向“价值链共创”的品牌阶段。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:54",
      "impact": "neutral"
    },
    {
      "title": "编者按：公司治理是上市公司高质量发展的核心基石，也是资本市场行稳致远的重要支撑。今年4月，证监会启动上市公司治理专项行动，聚焦重点领域和薄弱环节，提升公司内控有效性。专项行动落地半年以来，重点领域治理成效逐步显现，市场生态持续优化。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:35",
      "impact": "neutral"
    },
    {
      "title": "10月11日，康佳集团股份有限公司（以下简称“*ST康佳A”）发布公告称，公司以股东会决议方式主动终止股票上市事项已获2026年第二次临时股东会审议通过，公司股票自2026年9月4日开市起连续停牌。该公司因四年半时间亏损约205亿元、业绩承压，主动选择退市（当前未完成）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:35",
      "impact": "neutral"
    },
    {
      "title": "编者按：近期A股市场波动较大，市场对政策走向、增量资金、外部扰动及中国资产配置价值的关注明显上升。为及时传递政策信号、凝聚发展共识，本报推出“聚焦资本市场的活力和韧性”系列报道，从政策信号、制度改革、资产价值等多维度展开分析，力求呈现一个真实、立体、有深度的资本市场图景，共同见证中国资本市场在高质量发展道路上的坚实步伐。资本市场稳中向好，离不开政策的接续发力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:34",
      "impact": "neutral"
    },
    {
      "title": "2026金融街论坛年会将于10月19日至22日在北京金融街举办。上海证券报记者10月12日从2026金融街论坛年会新闻发布会上获悉，中国人民银行行长潘功胜、金融监管总局局长丁向群、中国证监会主席吴清、国家外汇局局长朱鹤新将出席2026金融街论坛年会并作主题演讲。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:24",
      "impact": "neutral"
    },
    {
      "title": "财政部、税务总局10月12日发布公告，调整部分产品出口退税政策。根据公告：自2027年4月1日起，将新能源汽车的增值税出口退税率由13%下调至9%；取消电子烟设备装置等产品增值税出口退税。公告明确，对上述产品中征收消费税的产品，出口消费税政策不作调整，继续适用消费税退（免）税政策。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:24",
      "impact": "neutral"
    },
    {
      "title": "10月12日6时30分，历经七年原址重建后的皇岗口岸正式开门迎客。新口岸总建筑面积达68.97万平方米，成为目前全球规模最大的陆路口岸单体建筑。香港特别行政区行政长官李家超在皇岗口岸开通仪式上表示，皇岗口岸的开通备受期待，这是港深两地同心协力、共建共享的标志性工程，也是粤港澳大湾区互联互通的里程碑。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:24",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 44,
    "label": "中性",
    "upDownRatio": "1,662/2,168",
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
