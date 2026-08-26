// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-26 11:17:11
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-26 11:17 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-26",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3912.52,
      "change": 23.08,
      "changePct": "+0.59%",
      "high": 3926.44,
      "low": 3881.74,
      "volume": 489553021.0,
      "amount": 857223490000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13841.33,
      "change": 95.46,
      "changePct": "+0.69%",
      "high": 13948.69,
      "low": 13714.05,
      "volume": 577607360.0,
      "amount": 951499750000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3414.88,
      "change": 17.36,
      "changePct": "+0.51%",
      "high": 3455.89,
      "low": 3379.14,
      "volume": 164782656.0,
      "amount": 443580630000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1632.02,
      "change": 27.43,
      "changePct": "+1.71%",
      "high": 1644.72,
      "low": 1598.44,
      "volume": 7430315.0,
      "amount": 79356930000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4590.79,
      "change": 38.76,
      "changePct": "+0.85%",
      "high": 4612.04,
      "low": 4542.84,
      "volume": 184578169.0,
      "amount": 489057280000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7770.53,
      "change": 59.59,
      "changePct": "+0.77%",
      "high": 7833.6,
      "low": 7699.42,
      "volume": 166303916.0,
      "amount": 325261410000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.15万亿",
      "label": "成交额",
      "rawAmount": 3145979490000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,682/1,158",
      "label": "涨/跌家数",
      "rawUp": 3682,
      "rawDown": 1158,
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
    "totalInflow": 24.34,
    "totalOutflow": 0,
    "netFlow": 24.34,
    "netFlowTrend": [
      4.87,
      9.74,
      14.6,
      19.47,
      24.34
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
      "name": "券商",
      "inflow": 4.91,
      "pct": 2.75
    },
    {
      "name": "有色",
      "inflow": 4.89,
      "pct": 2.53
    },
    {
      "name": "半导体",
      "inflow": 3.79,
      "pct": 0.89
    },
    {
      "name": "银行",
      "inflow": 2.63,
      "pct": 0.97
    },
    {
      "name": "5G",
      "inflow": 2.11,
      "pct": 0.4
    },
    {
      "name": "煤炭",
      "inflow": 1.97,
      "pct": 0.38
    },
    {
      "name": "芯片",
      "inflow": 1.81,
      "pct": 1.16
    },
    {
      "name": "医药",
      "inflow": 0.92,
      "pct": 0.26
    },
    {
      "name": "白酒",
      "inflow": 0.86,
      "pct": 0.24
    },
    {
      "name": "军工",
      "inflow": 0.45,
      "pct": 0.55
    },
    {
      "name": "人工智能",
      "inflow": 0.42,
      "pct": 0.2
    },
    {
      "name": "光伏",
      "inflow": 0.38,
      "pct": 1.55
    },
    {
      "name": "地产",
      "inflow": 0.37,
      "pct": 1.32
    },
    {
      "name": "新能源",
      "inflow": 0.36,
      "pct": 1.42
    },
    {
      "name": "新能源车",
      "inflow": 0.35,
      "pct": 1.18
    },
    {
      "name": "钢铁",
      "inflow": 0.34,
      "pct": 1.63
    },
    {
      "name": "农业",
      "inflow": 0.26,
      "pct": 0.96
    },
    {
      "name": "家电",
      "inflow": 0.22,
      "pct": 0.35
    },
    {
      "name": "电子",
      "inflow": 0.18,
      "pct": 1.22
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.97
    }
  ],
  "sectors": [
    {
      "name": "券商",
      "code": "512000",
      "price": 0.523,
      "changePct": 2.75,
      "change": 0.014,
      "turnover": 16.37
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.944,
      "changePct": 2.53,
      "change": 0.048,
      "turnover": 16.31
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.188,
      "changePct": 1.63,
      "change": 0.019,
      "turnover": 1.12
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.851,
      "changePct": 1.55,
      "change": 0.013,
      "turnover": 1.27
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.501,
      "changePct": 1.42,
      "change": 0.035,
      "turnover": 1.2
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.226,
      "changePct": 1.32,
      "change": 0.016,
      "turnover": 1.24
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.829,
      "changePct": 1.22,
      "change": 0.01,
      "turnover": 0.6
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.63,
      "changePct": 1.18,
      "change": 0.019,
      "turnover": 1.17
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.131,
      "changePct": 1.16,
      "change": 0.013,
      "turnover": 6.05
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.829,
      "changePct": 0.97,
      "change": 0.008,
      "turnover": 8.77
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.046,
      "changePct": 0.97,
      "change": 0.01,
      "turnover": 0.06
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.735,
      "changePct": 0.96,
      "change": 0.007,
      "turnover": 0.86
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.017,
      "changePct": 0.89,
      "change": 0.009,
      "turnover": 12.65
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.101,
      "changePct": 0.55,
      "change": 0.006,
      "turnover": 1.49
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.01,
      "changePct": 0.4,
      "change": 0.004,
      "turnover": 7.03
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.308,
      "changePct": 0.38,
      "change": 0.005,
      "turnover": 6.58
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.435,
      "changePct": 0.35,
      "change": 0.005,
      "turnover": 0.74
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.384,
      "changePct": 0.26,
      "change": 0.001,
      "turnover": 3.06
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.423,
      "changePct": 0.24,
      "change": 0.001,
      "turnover": 2.87
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.988,
      "changePct": 0.2,
      "change": 0.002,
      "turnover": 1.41
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.498,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 0.16
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.142,
      "changePct": 0.18,
      "change": 0.002,
      "turnover": 0.16
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.868,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 8.27
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.648,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 21.96
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.624,
      "changePct": -0.25,
      "change": -0.004,
      "turnover": 0.9
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.804,
      "changePct": -0.37,
      "change": -0.003,
      "turnover": 1.6
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.067,
      "changePct": -0.37,
      "change": -0.004,
      "turnover": 0.63
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.345,
      "changePct": -0.58,
      "change": -0.002,
      "turnover": 4.39
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.721,
      "changePct": 1.65,
      "amount": 58.89,
      "netFlow": 14.72
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.652,
      "changePct": 0.78,
      "amount": 39.36,
      "netFlow": 9.84
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.789,
      "changePct": 0.82,
      "amount": 33.95,
      "netFlow": 8.49
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.013,
      "changePct": 1.04,
      "amount": 27.1,
      "netFlow": 6.78
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.523,
      "changePct": 2.75,
      "amount": 16.37,
      "netFlow": 4.09
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.017,
      "changePct": 0.89,
      "amount": 12.65,
      "netFlow": 3.16
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.858,
      "changePct": 0.81,
      "amount": 7.84,
      "netFlow": 1.96
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.52,
      "changePct": 0.83,
      "amount": 5.3,
      "netFlow": 1.32
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.384,
      "changePct": 0.26,
      "amount": 3.06,
      "netFlow": 0.77
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.501,
      "changePct": 1.42,
      "amount": 1.2,
      "netFlow": 0.3
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.652,
      "changePct": 0.78,
      "amount": 39.36,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.013,
      "changePct": 1.04,
      "amount": 27.1,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.789,
      "changePct": 0.82,
      "amount": 33.95,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.858,
      "changePct": 0.81,
      "amount": 7.84,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.52,
      "changePct": 0.83,
      "amount": 5.3,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "券商",
      "turnover": 16.37,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "有色",
      "turnover": 16.31,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "钢铁",
      "turnover": 1.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 8.77,
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
      "name": "农业",
      "turnover": 0.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 12.65,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "军工",
      "turnover": 1.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 7.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 6.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.74,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 2.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    }
  ],
  "funds": [
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.264,
      "ret1w": -0.79,
      "ret1m": -6.47,
      "ret3m": -0.21,
      "ret6m": -11.48,
      "ret1y": -8.8,
      "ret2y": 17.08,
      "ret3y": 48.79
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3445,
      "ret1w": -0.79,
      "ret1m": -6.46,
      "ret3m": -0.18,
      "ret6m": -11.39,
      "ret1y": -8.63,
      "ret2y": 17.54,
      "ret3y": 49.99
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0904,
      "ret1w": -0.01,
      "ret1m": -0.93,
      "ret3m": -1.04,
      "ret6m": -1.2,
      "ret1y": 0.41,
      "ret2y": 1.17,
      "ret3y": 8.79
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0633,
      "ret1w": -0.01,
      "ret1m": -0.91,
      "ret3m": -0.99,
      "ret6m": -1.05,
      "ret1y": 0.71,
      "ret2y": 1.78,
      "ret3y": 10.12
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7172,
      "ret1w": 0.74,
      "ret1m": -1.81,
      "ret3m": 0.46,
      "ret6m": -5.73,
      "ret1y": -14.67,
      "ret2y": -8.2,
      "ret3y": 13.57
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7353,
      "ret1w": 0.74,
      "ret1m": -1.8,
      "ret3m": 0.52,
      "ret6m": -5.61,
      "ret1y": -14.46,
      "ret2y": -7.74,
      "ret3y": 14.71
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7511,
      "ret1w": -0.12,
      "ret1m": -6.82,
      "ret3m": -1.63,
      "ret6m": -7.6,
      "ret1y": 29.88,
      "ret2y": 67.83,
      "ret3y": 160.2
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5302,
      "ret1w": 0.91,
      "ret1m": -3.86,
      "ret3m": 1.57,
      "ret6m": -6.8,
      "ret1y": 0.48,
      "ret2y": 24.25,
      "ret3y": 89.58
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7345,
      "ret1w": 0.37,
      "ret1m": -4.76,
      "ret3m": 0.7,
      "ret6m": -17.42,
      "ret1y": -18.08,
      "ret2y": -9.2,
      "ret3y": 17.88
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1648,
      "ret1w": 0.87,
      "ret1m": -6.27,
      "ret3m": -2.17,
      "ret6m": -8.59,
      "ret1y": 14.27,
      "ret2y": 43.22,
      "ret3y": 145.93
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4997,
      "ret1w": -0.36,
      "ret1m": -5.49,
      "ret3m": -6.41,
      "ret6m": -11.67,
      "ret1y": -4.49,
      "ret2y": 14.87,
      "ret3y": 45.73
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5092,
      "ret1w": -0.35,
      "ret1m": -5.49,
      "ret3m": -6.38,
      "ret6m": -11.58,
      "ret1y": -4.32,
      "ret2y": 15.33,
      "ret3y": 46.91
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2779,
      "ret1w": -0.17,
      "ret1m": -0.02,
      "ret3m": 1.49,
      "ret6m": -0.58,
      "ret1y": -1.01,
      "ret2y": -0.63,
      "ret3y": 1.1
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1276,
      "ret1w": -0.03,
      "ret1m": -1.73,
      "ret3m": -0.62,
      "ret6m": 3.49,
      "ret1y": -7.27,
      "ret2y": -2.3,
      "ret3y": 23.17
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.407,
      "ret1w": -0.54,
      "ret1m": -5.68,
      "ret3m": -0.6,
      "ret6m": -16.97,
      "ret1y": -5.8,
      "ret2y": -10.68,
      "ret3y": 18.27
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9933,
      "ret1w": 0.12,
      "ret1m": -0.87,
      "ret3m": 2.06,
      "ret6m": -3.72,
      "ret1y": -7.0,
      "ret2y": 12.45,
      "ret3y": 47.21
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.271,
      "ret1w": 0.31,
      "ret1m": -7.57,
      "ret3m": -12.35,
      "ret6m": -20.53,
      "ret1y": 30.42,
      "ret2y": 85.85,
      "ret3y": 194.95
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4889,
      "ret1w": -0.15,
      "ret1m": 1.97,
      "ret3m": 1.15,
      "ret6m": 1.98,
      "ret1y": 1.08,
      "ret2y": -2.91,
      "ret3y": 10.62
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6288,
      "ret1w": -0.16,
      "ret1m": -8.35,
      "ret3m": 7.87,
      "ret6m": -18.24,
      "ret1y": -9.75,
      "ret2y": 0.88,
      "ret3y": 54.42
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.072,
      "ret1w": -0.23,
      "ret1m": -10.0,
      "ret3m": 4.26,
      "ret6m": 2.07,
      "ret1y": 61.43,
      "ret2y": 128.96,
      "ret3y": 340.03
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0651,
      "ret1w": -0.03,
      "ret1m": -0.5,
      "ret3m": -0.21,
      "ret6m": -0.95,
      "ret1y": -0.2,
      "ret2y": 0.97,
      "ret3y": 4.59
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1135,
      "ret1w": -0.04,
      "ret1m": -0.5,
      "ret3m": -0.19,
      "ret6m": -0.89,
      "ret1y": -0.07,
      "ret2y": 1.25,
      "ret3y": 5.31
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0643,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.13,
      "ret6m": 0.28,
      "ret1y": 0.75,
      "ret2y": 1.52,
      "ret3y": 2.73
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0985,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.12,
      "ret6m": 0.32,
      "ret1y": 0.78,
      "ret2y": 1.5,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1079,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.88,
      "ret2y": 1.7,
      "ret3y": 4.29
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0761,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.13,
      "ret6m": 0.35,
      "ret1y": 0.72,
      "ret2y": 1.39,
      "ret3y": 2.84
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0905,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.16,
      "ret6m": 0.42,
      "ret1y": 0.88,
      "ret2y": 1.72,
      "ret3y": 3.49
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.064,
      "ret1w": -0.04,
      "ret1m": -1.76,
      "ret3m": 0.41,
      "ret6m": -3.57,
      "ret1y": -0.07,
      "ret2y": 5.93,
      "ret3y": 12.6
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2159,
      "ret1w": 0.08,
      "ret1m": -1.96,
      "ret3m": 1.45,
      "ret6m": -4.34,
      "ret1y": -0.66,
      "ret2y": 2.32,
      "ret3y": 6.83
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0707,
      "ret1w": -0.03,
      "ret1m": -1.74,
      "ret3m": 0.45,
      "ret6m": -3.47,
      "ret1y": 0.14,
      "ret2y": 6.37,
      "ret3y": 13.52
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0455,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.14,
      "ret6m": 0.36,
      "ret1y": 0.85,
      "ret2y": 1.71,
      "ret3y": 3.58
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.17,
      "ret1w": 0.18,
      "ret1m": 0.04,
      "ret3m": -0.2,
      "ret6m": -3.29,
      "ret1y": -3.13,
      "ret2y": 0.29,
      "ret3y": 10.65
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2165,
      "ret1w": 0.1,
      "ret1m": 0.05,
      "ret3m": 0.18,
      "ret6m": -0.97,
      "ret1y": -0.78,
      "ret2y": 3.41,
      "ret3y": 15.51
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1383,
      "ret1w": 0.0,
      "ret1m": -0.86,
      "ret3m": 0.44,
      "ret6m": -1.7,
      "ret1y": 0.25,
      "ret2y": 4.01,
      "ret3y": 10.5
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2095,
      "ret1w": 0.0,
      "ret1m": -0.86,
      "ret3m": 0.47,
      "ret6m": -1.6,
      "ret1y": 0.43,
      "ret2y": 4.43,
      "ret3y": 11.42
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.335,
      "ret1w": 1.3,
      "ret1m": -2.83,
      "ret3m": 0.99,
      "ret6m": -4.11,
      "ret1y": 29.87,
      "ret2y": 94.75,
      "ret3y": 129.37
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9721,
      "ret1w": 0.34,
      "ret1m": -0.01,
      "ret3m": 3.03,
      "ret6m": 1.19,
      "ret1y": 6.99,
      "ret2y": 9.06,
      "ret3y": 33.33
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8573,
      "ret1w": 0.78,
      "ret1m": -0.92,
      "ret3m": -2.13,
      "ret6m": -13.02,
      "ret1y": -14.78,
      "ret2y": 1.3,
      "ret3y": 52.06
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4267,
      "ret1w": 1.9,
      "ret1m": 3.55,
      "ret3m": 12.39,
      "ret6m": 6.76,
      "ret1y": 19.52,
      "ret2y": 32.53,
      "ret3y": 73.94
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9407,
      "ret1w": 0.29,
      "ret1m": 0.31,
      "ret3m": 0.47,
      "ret6m": -0.06,
      "ret1y": -2.71,
      "ret2y": -2.68,
      "ret3y": -1.33
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6291,
      "ret1w": 0.84,
      "ret1m": -2.62,
      "ret3m": 1.02,
      "ret6m": -4.48,
      "ret1y": 19.5,
      "ret2y": 55.18,
      "ret3y": 91.89
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.633,
      "ret1w": 0.65,
      "ret1m": 0.65,
      "ret3m": 2.45,
      "ret6m": 0.0,
      "ret1y": 1.82,
      "ret2y": 7.0,
      "ret3y": 21.7
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.272,
      "ret1w": 1.84,
      "ret1m": 1.27,
      "ret3m": 4.86,
      "ret6m": 3.67,
      "ret1y": -3.49,
      "ret2y": -15.93,
      "ret3y": 125.53
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.981,
      "ret1w": 1.87,
      "ret1m": 0.2,
      "ret3m": 3.37,
      "ret6m": -0.51,
      "ret1y": -9.67,
      "ret2y": -20.37,
      "ret3y": 55.47
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7947,
      "ret1w": -2.35,
      "ret1m": -6.13,
      "ret3m": 0.77,
      "ret6m": -5.68,
      "ret1y": 25.54,
      "ret2y": 80.66,
      "ret3y": 131.16
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.649,
      "ret1w": -0.1,
      "ret1m": 4.94,
      "ret3m": 13.63,
      "ret6m": 7.94,
      "ret1y": 3.44,
      "ret2y": 45.22,
      "ret3y": 58.51
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7133,
      "ret1w": 0.36,
      "ret1m": 0.56,
      "ret3m": 2.83,
      "ret6m": 2.4,
      "ret1y": 5.38,
      "ret2y": 28.7,
      "ret3y": 54.1
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3219,
      "ret1w": 0.48,
      "ret1m": 0.23,
      "ret3m": 4.57,
      "ret6m": -2.06,
      "ret1y": 0.34,
      "ret2y": 18.73,
      "ret3y": 39.32
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.333,
      "ret1w": 0.6,
      "ret1m": 0.83,
      "ret3m": -1.91,
      "ret6m": 0.53,
      "ret1y": 2.07,
      "ret2y": 5.79,
      "ret3y": -6.04
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.222,
      "ret1w": 1.05,
      "ret1m": 5.06,
      "ret3m": 13.48,
      "ret6m": 1.79,
      "ret1y": -11.58,
      "ret2y": 27.12,
      "ret3y": 63.9
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.011,
      "ret1w": -0.01,
      "ret1m": -0.03,
      "ret3m": 0.23,
      "ret6m": 0.52,
      "ret1y": 1.49,
      "ret2y": 2.08,
      "ret3y": 3.63
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0099,
      "ret1w": -0.01,
      "ret1m": -0.03,
      "ret3m": 0.24,
      "ret6m": 0.51,
      "ret1y": 1.49,
      "ret2y": 2.13,
      "ret3y": 3.81
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.409,
      "ret1w": 0.0,
      "ret1m": -5.5,
      "ret3m": -3.49,
      "ret6m": -10.99,
      "ret1y": -3.49,
      "ret2y": 2.4,
      "ret3y": 35.74
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.831,
      "ret1w": 0.5,
      "ret1m": -0.63,
      "ret3m": 0.75,
      "ret6m": -9.06,
      "ret1y": -2.91,
      "ret2y": 13.97,
      "ret3y": 65.36
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6878,
      "ret1w": -1.75,
      "ret1m": -1.16,
      "ret3m": 7.27,
      "ret6m": -3.83,
      "ret1y": -13.39,
      "ret2y": 31.8,
      "ret3y": 70.66
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1199,
      "ret1w": -0.16,
      "ret1m": -3.13,
      "ret3m": -0.34,
      "ret6m": -4.09,
      "ret1y": 0.48,
      "ret2y": 8.35,
      "ret3y": 40.41
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1803,
      "ret1w": -0.16,
      "ret1m": -3.13,
      "ret3m": -0.31,
      "ret6m": -3.99,
      "ret1y": 0.67,
      "ret2y": 8.78,
      "ret3y": 41.53
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9901,
      "ret1w": -0.08,
      "ret1m": -5.48,
      "ret3m": 2.1,
      "ret6m": -10.57,
      "ret1y": -8.65,
      "ret2y": 11.12,
      "ret3y": 68.5
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7774,
      "ret1w": -0.22,
      "ret1m": -3.47,
      "ret3m": -1.9,
      "ret6m": -6.5,
      "ret1y": -2.87,
      "ret2y": 2.99,
      "ret3y": 38.36
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5711,
      "ret1w": 0.3,
      "ret1m": -2.87,
      "ret3m": 1.89,
      "ret6m": -6.13,
      "ret1y": -8.95,
      "ret2y": 10.72,
      "ret3y": 55.62
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9521,
      "ret1w": -0.34,
      "ret1m": -7.4,
      "ret3m": -4.73,
      "ret6m": -12.7,
      "ret1y": 5.12,
      "ret2y": 17.18,
      "ret3y": 77.0
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1654,
      "ret1w": -0.05,
      "ret1m": -0.13,
      "ret3m": 0.75,
      "ret6m": 1.22,
      "ret1y": -1.6,
      "ret2y": 2.81,
      "ret3y": 29.21
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5453,
      "ret1w": 0.19,
      "ret1m": 1.71,
      "ret3m": 3.3,
      "ret6m": 4.44,
      "ret1y": 1.34,
      "ret2y": 12.96,
      "ret3y": 30.68
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4181,
      "ret1w": 0.62,
      "ret1m": -0.97,
      "ret3m": 3.19,
      "ret6m": -1.48,
      "ret1y": 11.97,
      "ret2y": 16.54,
      "ret3y": 35.63
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7644,
      "ret1w": -0.55,
      "ret1m": -5.14,
      "ret3m": -1.64,
      "ret6m": -9.79,
      "ret1y": 1.27,
      "ret2y": 11.72,
      "ret3y": 60.9
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1729,
      "ret1w": -2.18,
      "ret1m": -5.33,
      "ret3m": 0.96,
      "ret6m": -8.37,
      "ret1y": -1.73,
      "ret2y": 10.7,
      "ret3y": 51.62
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1745,
      "ret1w": -2.18,
      "ret1m": -5.32,
      "ret3m": 0.96,
      "ret6m": -8.34,
      "ret1y": -1.77,
      "ret2y": 10.51,
      "ret3y": 51.06
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3944,
      "ret1w": -0.12,
      "ret1m": -4.34,
      "ret3m": 0.74,
      "ret6m": -12.68,
      "ret1y": -7.51,
      "ret2y": 1.4,
      "ret3y": 40.69
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4262,
      "ret1w": -0.12,
      "ret1m": -4.33,
      "ret3m": 0.78,
      "ret6m": -12.58,
      "ret1y": -7.33,
      "ret2y": 1.81,
      "ret3y": 41.84
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0044,
      "ret1w": -0.24,
      "ret1m": -6.42,
      "ret3m": -5.24,
      "ret6m": -14.59,
      "ret1y": -3.13,
      "ret2y": 10.72,
      "ret3y": 63.42
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1672,
      "ret1w": 0.09,
      "ret1m": -0.13,
      "ret3m": 0.14,
      "ret6m": -0.26,
      "ret1y": -0.49,
      "ret2y": 1.72,
      "ret3y": 8.22
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1871,
      "ret1w": 0.1,
      "ret1m": -0.12,
      "ret3m": 0.17,
      "ret6m": -0.17,
      "ret1y": -0.34,
      "ret2y": 2.03,
      "ret3y": 8.89
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0841,
      "ret1w": -0.01,
      "ret1m": 0.0,
      "ret3m": 0.16,
      "ret6m": 0.35,
      "ret1y": 0.89,
      "ret2y": 1.81,
      "ret3y": 3.31
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4101,
      "ret1w": -0.01,
      "ret1m": -0.01,
      "ret3m": -0.05,
      "ret6m": 0.19,
      "ret1y": 0.11,
      "ret2y": 0.48,
      "ret3y": 13.29
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4622,
      "ret1w": -0.01,
      "ret1m": -0.01,
      "ret3m": -0.01,
      "ret6m": 0.29,
      "ret1y": 0.31,
      "ret2y": 0.88,
      "ret3y": 14.2
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1011,
      "ret1w": 0.2,
      "ret1m": -2.73,
      "ret3m": -0.1,
      "ret6m": 2.74,
      "ret1y": 9.61,
      "ret2y": 19.46,
      "ret3y": 67.36
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2496,
      "ret1w": 0.49,
      "ret1m": -0.44,
      "ret3m": 1.18,
      "ret6m": 0.21,
      "ret1y": 2.42,
      "ret2y": 8.87,
      "ret3y": 55.06
    }
  ],
  "fundHistories": {
    "970185": [
      {
        "date": "2026-07-29",
        "nav": 1.2508
      },
      {
        "date": "2026-07-30",
        "nav": 1.216
      },
      {
        "date": "2026-07-31",
        "nav": 1.2411
      },
      {
        "date": "2026-08-03",
        "nav": 1.2256
      },
      {
        "date": "2026-08-04",
        "nav": 1.2589
      },
      {
        "date": "2026-08-05",
        "nav": 1.2867
      },
      {
        "date": "2026-08-06",
        "nav": 1.2843
      },
      {
        "date": "2026-08-07",
        "nav": 1.3084
      },
      {
        "date": "2026-08-10",
        "nav": 1.3154
      },
      {
        "date": "2026-08-11",
        "nav": 1.3093
      },
      {
        "date": "2026-08-12",
        "nav": 1.3147
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-07-29",
        "nav": 1.33
      },
      {
        "date": "2026-07-30",
        "nav": 1.2931
      },
      {
        "date": "2026-07-31",
        "nav": 1.3197
      },
      {
        "date": "2026-08-03",
        "nav": 1.3033
      },
      {
        "date": "2026-08-04",
        "nav": 1.3387
      },
      {
        "date": "2026-08-05",
        "nav": 1.3682
      },
      {
        "date": "2026-08-06",
        "nav": 1.3657
      },
      {
        "date": "2026-08-07",
        "nav": 1.3914
      },
      {
        "date": "2026-08-10",
        "nav": 1.3989
      },
      {
        "date": "2026-08-11",
        "nav": 1.3925
      },
      {
        "date": "2026-08-12",
        "nav": 1.3982
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-07-29",
        "nav": 1.1014
      },
      {
        "date": "2026-07-30",
        "nav": 1.0989
      },
      {
        "date": "2026-07-31",
        "nav": 1.1007
      },
      {
        "date": "2026-08-03",
        "nav": 1.0985
      },
      {
        "date": "2026-08-04",
        "nav": 1.1026
      },
      {
        "date": "2026-08-05",
        "nav": 1.1019
      },
      {
        "date": "2026-08-06",
        "nav": 1.0992
      },
      {
        "date": "2026-08-07",
        "nav": 1.0989
      },
      {
        "date": "2026-08-10",
        "nav": 1.0977
      },
      {
        "date": "2026-08-11",
        "nav": 1.0961
      },
      {
        "date": "2026-08-12",
        "nav": 1.0971
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-07-29",
        "nav": 1.0735
      },
      {
        "date": "2026-07-30",
        "nav": 1.0711
      },
      {
        "date": "2026-07-31",
        "nav": 1.0729
      },
      {
        "date": "2026-08-03",
        "nav": 1.0708
      },
      {
        "date": "2026-08-04",
        "nav": 1.0748
      },
      {
        "date": "2026-08-05",
        "nav": 1.0742
      },
      {
        "date": "2026-08-06",
        "nav": 1.0716
      },
      {
        "date": "2026-08-07",
        "nav": 1.0713
      },
      {
        "date": "2026-08-10",
        "nav": 1.0702
      },
      {
        "date": "2026-08-11",
        "nav": 1.0686
      },
      {
        "date": "2026-08-12",
        "nav": 1.0696
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-07-29",
        "nav": 0.737
      },
      {
        "date": "2026-07-30",
        "nav": 0.7388
      },
      {
        "date": "2026-07-31",
        "nav": 0.7406
      },
      {
        "date": "2026-08-03",
        "nav": 0.7346
      },
      {
        "date": "2026-08-04",
        "nav": 0.7307
      },
      {
        "date": "2026-08-05",
        "nav": 0.7329
      },
      {
        "date": "2026-08-06",
        "nav": 0.7278
      },
      {
        "date": "2026-08-07",
        "nav": 0.7298
      },
      {
        "date": "2026-08-10",
        "nav": 0.7427
      },
      {
        "date": "2026-08-11",
        "nav": 0.7381
      },
      {
        "date": "2026-08-12",
        "nav": 0.7369
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-07-29",
        "nav": 0.7553
      },
      {
        "date": "2026-07-30",
        "nav": 0.7572
      },
      {
        "date": "2026-07-31",
        "nav": 0.759
      },
      {
        "date": "2026-08-03",
        "nav": 0.7529
      },
      {
        "date": "2026-08-04",
        "nav": 0.7489
      },
      {
        "date": "2026-08-05",
        "nav": 0.7512
      },
      {
        "date": "2026-08-06",
        "nav": 0.746
      },
      {
        "date": "2026-08-07",
        "nav": 0.748
      },
      {
        "date": "2026-08-10",
        "nav": 0.7613
      },
      {
        "date": "2026-08-11",
        "nav": 0.7566
      },
      {
        "date": "2026-08-12",
        "nav": 0.7554
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-07-29",
        "nav": 2.6333
      },
      {
        "date": "2026-07-30",
        "nav": 2.4519
      },
      {
        "date": "2026-07-31",
        "nav": 2.5498
      },
      {
        "date": "2026-08-03",
        "nav": 2.5126
      },
      {
        "date": "2026-08-04",
        "nav": 2.693
      },
      {
        "date": "2026-08-05",
        "nav": 2.7359
      },
      {
        "date": "2026-08-06",
        "nav": 2.7613
      },
      {
        "date": "2026-08-07",
        "nav": 2.8322
      },
      {
        "date": "2026-08-10",
        "nav": 2.7839
      },
      {
        "date": "2026-08-11",
        "nav": 2.7622
      },
      {
        "date": "2026-08-12",
        "nav": 2.833
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-07-29",
        "nav": 2.4748
      },
      {
        "date": "2026-07-30",
        "nav": 2.4019
      },
      {
        "date": "2026-07-31",
        "nav": 2.4398
      },
      {
        "date": "2026-08-03",
        "nav": 2.4132
      },
      {
        "date": "2026-08-04",
        "nav": 2.4523
      },
      {
        "date": "2026-08-05",
        "nav": 2.5123
      },
      {
        "date": "2026-08-06",
        "nav": 2.507
      },
      {
        "date": "2026-08-07",
        "nav": 2.5586
      },
      {
        "date": "2026-08-10",
        "nav": 2.5693
      },
      {
        "date": "2026-08-11",
        "nav": 2.5683
      },
      {
        "date": "2026-08-12",
        "nav": 2.5834
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-07-29",
        "nav": 0.7319
      },
      {
        "date": "2026-07-30",
        "nav": 0.7194
      },
      {
        "date": "2026-07-31",
        "nav": 0.7266
      },
      {
        "date": "2026-08-03",
        "nav": 0.7157
      },
      {
        "date": "2026-08-04",
        "nav": 0.7229
      },
      {
        "date": "2026-08-05",
        "nav": 0.74
      },
      {
        "date": "2026-08-06",
        "nav": 0.7402
      },
      {
        "date": "2026-08-07",
        "nav": 0.75
      },
      {
        "date": "2026-08-10",
        "nav": 0.7548
      },
      {
        "date": "2026-08-11",
        "nav": 0.7517
      },
      {
        "date": "2026-08-12",
        "nav": 0.7573
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-07-29",
        "nav": 4.1112
      },
      {
        "date": "2026-07-30",
        "nav": 3.8507
      },
      {
        "date": "2026-07-31",
        "nav": 3.9912
      },
      {
        "date": "2026-08-03",
        "nav": 3.8827
      },
      {
        "date": "2026-08-04",
        "nav": 4.0073
      },
      {
        "date": "2026-08-05",
        "nav": 4.1539
      },
      {
        "date": "2026-08-06",
        "nav": 4.1791
      },
      {
        "date": "2026-08-07",
        "nav": 4.2756
      },
      {
        "date": "2026-08-10",
        "nav": 4.2582
      },
      {
        "date": "2026-08-11",
        "nav": 4.3007
      },
      {
        "date": "2026-08-12",
        "nav": 4.3277
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-07-29",
        "nav": 0.5308
      },
      {
        "date": "2026-07-30",
        "nav": 0.5233
      },
      {
        "date": "2026-07-31",
        "nav": 0.5254
      },
      {
        "date": "2026-08-03",
        "nav": 0.5231
      },
      {
        "date": "2026-08-04",
        "nav": 0.5209
      },
      {
        "date": "2026-08-05",
        "nav": 0.5228
      },
      {
        "date": "2026-08-06",
        "nav": 0.5234
      },
      {
        "date": "2026-08-07",
        "nav": 0.5247
      },
      {
        "date": "2026-08-10",
        "nav": 0.5285
      },
      {
        "date": "2026-08-11",
        "nav": 0.5248
      },
      {
        "date": "2026-08-12",
        "nav": 0.5245
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-07-29",
        "nav": 0.5408
      },
      {
        "date": "2026-07-30",
        "nav": 0.5331
      },
      {
        "date": "2026-07-31",
        "nav": 0.5353
      },
      {
        "date": "2026-08-03",
        "nav": 0.533
      },
      {
        "date": "2026-08-04",
        "nav": 0.5307
      },
      {
        "date": "2026-08-05",
        "nav": 0.5326
      },
      {
        "date": "2026-08-06",
        "nav": 0.5333
      },
      {
        "date": "2026-08-07",
        "nav": 0.5346
      },
      {
        "date": "2026-08-10",
        "nav": 0.5385
      },
      {
        "date": "2026-08-11",
        "nav": 0.5347
      },
      {
        "date": "2026-08-12",
        "nav": 0.5345
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-07-29",
        "nav": 1.2778
      },
      {
        "date": "2026-07-30",
        "nav": 1.2861
      },
      {
        "date": "2026-07-31",
        "nav": 1.284
      },
      {
        "date": "2026-08-03",
        "nav": 1.2769
      },
      {
        "date": "2026-08-04",
        "nav": 1.2702
      },
      {
        "date": "2026-08-05",
        "nav": 1.2724
      },
      {
        "date": "2026-08-06",
        "nav": 1.2736
      },
      {
        "date": "2026-08-07",
        "nav": 1.2748
      },
      {
        "date": "2026-08-10",
        "nav": 1.2804
      },
      {
        "date": "2026-08-11",
        "nav": 1.2811
      },
      {
        "date": "2026-08-12",
        "nav": 1.2759
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-07-29",
        "nav": 1.1484
      },
      {
        "date": "2026-07-30",
        "nav": 1.149
      },
      {
        "date": "2026-07-31",
        "nav": 1.1464
      },
      {
        "date": "2026-08-03",
        "nav": 1.1422
      },
      {
        "date": "2026-08-04",
        "nav": 1.1429
      },
      {
        "date": "2026-08-05",
        "nav": 1.1479
      },
      {
        "date": "2026-08-06",
        "nav": 1.1386
      },
      {
        "date": "2026-08-07",
        "nav": 1.1488
      },
      {
        "date": "2026-08-10",
        "nav": 1.1565
      },
      {
        "date": "2026-08-11",
        "nav": 1.1508
      },
      {
        "date": "2026-08-12",
        "nav": 1.1472
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-07-29",
        "nav": 1.3857
      },
      {
        "date": "2026-07-30",
        "nav": 1.3393
      },
      {
        "date": "2026-07-31",
        "nav": 1.373
      },
      {
        "date": "2026-08-03",
        "nav": 1.3681
      },
      {
        "date": "2026-08-04",
        "nav": 1.416
      },
      {
        "date": "2026-08-05",
        "nav": 1.4299
      },
      {
        "date": "2026-08-06",
        "nav": 1.428
      },
      {
        "date": "2026-08-07",
        "nav": 1.4502
      },
      {
        "date": "2026-08-10",
        "nav": 1.4609
      },
      {
        "date": "2026-08-11",
        "nav": 1.4576
      },
      {
        "date": "2026-08-12",
        "nav": 1.4601
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-07-29",
        "nav": 2.972
      },
      {
        "date": "2026-07-30",
        "nav": 3.0058
      },
      {
        "date": "2026-07-31",
        "nav": 3.0021
      },
      {
        "date": "2026-08-03",
        "nav": 2.9943
      },
      {
        "date": "2026-08-04",
        "nav": 2.9821
      },
      {
        "date": "2026-08-05",
        "nav": 2.9787
      },
      {
        "date": "2026-08-06",
        "nav": 2.9821
      },
      {
        "date": "2026-08-07",
        "nav": 3.0012
      },
      {
        "date": "2026-08-10",
        "nav": 3.0234
      },
      {
        "date": "2026-08-11",
        "nav": 3.0236
      },
      {
        "date": "2026-08-12",
        "nav": 3.0177
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-07-29",
        "nav": 3.38
      },
      {
        "date": "2026-07-30",
        "nav": 3.035
      },
      {
        "date": "2026-07-31",
        "nav": 3.149
      },
      {
        "date": "2026-08-03",
        "nav": 3.094
      },
      {
        "date": "2026-08-04",
        "nav": 3.313
      },
      {
        "date": "2026-08-05",
        "nav": 3.339
      },
      {
        "date": "2026-08-06",
        "nav": 3.373
      },
      {
        "date": "2026-08-07",
        "nav": 3.436
      },
      {
        "date": "2026-08-10",
        "nav": 3.372
      },
      {
        "date": "2026-08-11",
        "nav": 3.344
      },
      {
        "date": "2026-08-12",
        "nav": 3.418
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-07-29",
        "nav": 1.4977
      },
      {
        "date": "2026-07-30",
        "nav": 1.5204
      },
      {
        "date": "2026-07-31",
        "nav": 1.5119
      },
      {
        "date": "2026-08-03",
        "nav": 1.5165
      },
      {
        "date": "2026-08-04",
        "nav": 1.4848
      },
      {
        "date": "2026-08-05",
        "nav": 1.4692
      },
      {
        "date": "2026-08-06",
        "nav": 1.469
      },
      {
        "date": "2026-08-07",
        "nav": 1.4615
      },
      {
        "date": "2026-08-10",
        "nav": 1.4664
      },
      {
        "date": "2026-08-11",
        "nav": 1.4622
      },
      {
        "date": "2026-08-12",
        "nav": 1.4594
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-07-29",
        "nav": 0.576
      },
      {
        "date": "2026-07-30",
        "nav": 0.5435
      },
      {
        "date": "2026-07-31",
        "nav": 0.5654
      },
      {
        "date": "2026-08-03",
        "nav": 0.5784
      },
      {
        "date": "2026-08-04",
        "nav": 0.6063
      },
      {
        "date": "2026-08-05",
        "nav": 0.6311
      },
      {
        "date": "2026-08-06",
        "nav": 0.6456
      },
      {
        "date": "2026-08-07",
        "nav": 0.6658
      },
      {
        "date": "2026-08-10",
        "nav": 0.6657
      },
      {
        "date": "2026-08-11",
        "nav": 0.6428
      },
      {
        "date": "2026-08-12",
        "nav": 0.6609
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-07-29",
        "nav": 13.037
      },
      {
        "date": "2026-07-30",
        "nav": 12.287
      },
      {
        "date": "2026-07-31",
        "nav": 12.766
      },
      {
        "date": "2026-08-03",
        "nav": 12.635
      },
      {
        "date": "2026-08-04",
        "nav": 13.693
      },
      {
        "date": "2026-08-05",
        "nav": 14.167
      },
      {
        "date": "2026-08-06",
        "nav": 14.364
      },
      {
        "date": "2026-08-07",
        "nav": 14.817
      },
      {
        "date": "2026-08-10",
        "nav": 14.74
      },
      {
        "date": "2026-08-11",
        "nav": 14.701
      },
      {
        "date": "2026-08-12",
        "nav": 15.026
      },
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
      }
    ],
    "970205": [
      {
        "date": "2026-07-29",
        "nav": 1.0642
      },
      {
        "date": "2026-07-30",
        "nav": 1.0621
      },
      {
        "date": "2026-07-31",
        "nav": 1.0638
      },
      {
        "date": "2026-08-03",
        "nav": 1.0627
      },
      {
        "date": "2026-08-04",
        "nav": 1.0659
      },
      {
        "date": "2026-08-05",
        "nav": 1.0666
      },
      {
        "date": "2026-08-06",
        "nav": 1.0666
      },
      {
        "date": "2026-08-07",
        "nav": 1.0681
      },
      {
        "date": "2026-08-10",
        "nav": 1.0672
      },
      {
        "date": "2026-08-11",
        "nav": 1.0667
      },
      {
        "date": "2026-08-12",
        "nav": 1.068
      },
      {
        "date": "2026-08-13",
        "nav": 1.0669
      },
      {
        "date": "2026-08-14",
        "nav": 1.0677
      },
      {
        "date": "2026-08-17",
        "nav": 1.0709
      },
      {
        "date": "2026-08-18",
        "nav": 1.0705
      },
      {
        "date": "2026-08-19",
        "nav": 1.066
      },
      {
        "date": "2026-08-20",
        "nav": 1.0663
      },
      {
        "date": "2026-08-21",
        "nav": 1.0683
      },
      {
        "date": "2026-08-24",
        "nav": 1.0654
      },
      {
        "date": "2026-08-25",
        "nav": 1.0651
      }
    ],
    "970204": [
      {
        "date": "2026-07-29",
        "nav": 1.1123
      },
      {
        "date": "2026-07-30",
        "nav": 1.1102
      },
      {
        "date": "2026-07-31",
        "nav": 1.112
      },
      {
        "date": "2026-08-03",
        "nav": 1.1108
      },
      {
        "date": "2026-08-04",
        "nav": 1.1142
      },
      {
        "date": "2026-08-05",
        "nav": 1.1149
      },
      {
        "date": "2026-08-06",
        "nav": 1.115
      },
      {
        "date": "2026-08-07",
        "nav": 1.1165
      },
      {
        "date": "2026-08-10",
        "nav": 1.1156
      },
      {
        "date": "2026-08-11",
        "nav": 1.1151
      },
      {
        "date": "2026-08-12",
        "nav": 1.1164
      },
      {
        "date": "2026-08-13",
        "nav": 1.1153
      },
      {
        "date": "2026-08-14",
        "nav": 1.1161
      },
      {
        "date": "2026-08-17",
        "nav": 1.1195
      },
      {
        "date": "2026-08-18",
        "nav": 1.1191
      },
      {
        "date": "2026-08-19",
        "nav": 1.1144
      },
      {
        "date": "2026-08-20",
        "nav": 1.1148
      },
      {
        "date": "2026-08-21",
        "nav": 1.1168
      },
      {
        "date": "2026-08-24",
        "nav": 1.1139
      },
      {
        "date": "2026-08-25",
        "nav": 1.1135
      }
    ],
    "970182": [
      {
        "date": "2026-07-29",
        "nav": 1.0633
      },
      {
        "date": "2026-07-30",
        "nav": 1.0634
      },
      {
        "date": "2026-07-31",
        "nav": 1.0635
      },
      {
        "date": "2026-08-03",
        "nav": 1.0635
      },
      {
        "date": "2026-08-04",
        "nav": 1.0636
      },
      {
        "date": "2026-08-05",
        "nav": 1.0636
      },
      {
        "date": "2026-08-06",
        "nav": 1.0636
      },
      {
        "date": "2026-08-07",
        "nav": 1.0638
      },
      {
        "date": "2026-08-10",
        "nav": 1.0638
      },
      {
        "date": "2026-08-11",
        "nav": 1.0638
      },
      {
        "date": "2026-08-12",
        "nav": 1.0639
      },
      {
        "date": "2026-08-13",
        "nav": 1.064
      },
      {
        "date": "2026-08-14",
        "nav": 1.0641
      },
      {
        "date": "2026-08-17",
        "nav": 1.064
      },
      {
        "date": "2026-08-18",
        "nav": 1.0642
      },
      {
        "date": "2026-08-19",
        "nav": 1.0641
      },
      {
        "date": "2026-08-20",
        "nav": 1.064
      },
      {
        "date": "2026-08-21",
        "nav": 1.064
      },
      {
        "date": "2026-08-24",
        "nav": 1.0643
      },
      {
        "date": "2026-08-25",
        "nav": 1.0643
      }
    ],
    "970170": [
      {
        "date": "2026-07-29",
        "nav": 1.0972
      },
      {
        "date": "2026-07-30",
        "nav": 1.0974
      },
      {
        "date": "2026-07-31",
        "nav": 1.0975
      },
      {
        "date": "2026-08-03",
        "nav": 1.0976
      },
      {
        "date": "2026-08-04",
        "nav": 1.0976
      },
      {
        "date": "2026-08-05",
        "nav": 1.0977
      },
      {
        "date": "2026-08-06",
        "nav": 1.0977
      },
      {
        "date": "2026-08-07",
        "nav": 1.0978
      },
      {
        "date": "2026-08-10",
        "nav": 1.0979
      },
      {
        "date": "2026-08-11",
        "nav": 1.0979
      },
      {
        "date": "2026-08-12",
        "nav": 1.098
      },
      {
        "date": "2026-08-13",
        "nav": 1.0981
      },
      {
        "date": "2026-08-14",
        "nav": 1.0981
      },
      {
        "date": "2026-08-17",
        "nav": 1.0983
      },
      {
        "date": "2026-08-18",
        "nav": 1.0984
      },
      {
        "date": "2026-08-19",
        "nav": 1.0983
      },
      {
        "date": "2026-08-20",
        "nav": 1.0983
      },
      {
        "date": "2026-08-21",
        "nav": 1.0984
      },
      {
        "date": "2026-08-24",
        "nav": 1.0985
      },
      {
        "date": "2026-08-25",
        "nav": 1.0985
      }
    ],
    "970168": [
      {
        "date": "2026-07-29",
        "nav": 1.1063
      },
      {
        "date": "2026-07-30",
        "nav": 1.1066
      },
      {
        "date": "2026-07-31",
        "nav": 1.1067
      },
      {
        "date": "2026-08-03",
        "nav": 1.1068
      },
      {
        "date": "2026-08-04",
        "nav": 1.1068
      },
      {
        "date": "2026-08-05",
        "nav": 1.1069
      },
      {
        "date": "2026-08-06",
        "nav": 1.1069
      },
      {
        "date": "2026-08-07",
        "nav": 1.107
      },
      {
        "date": "2026-08-10",
        "nav": 1.1072
      },
      {
        "date": "2026-08-11",
        "nav": 1.1071
      },
      {
        "date": "2026-08-12",
        "nav": 1.1072
      },
      {
        "date": "2026-08-13",
        "nav": 1.1073
      },
      {
        "date": "2026-08-14",
        "nav": 1.1074
      },
      {
        "date": "2026-08-17",
        "nav": 1.1075
      },
      {
        "date": "2026-08-18",
        "nav": 1.1077
      },
      {
        "date": "2026-08-19",
        "nav": 1.1076
      },
      {
        "date": "2026-08-20",
        "nav": 1.1077
      },
      {
        "date": "2026-08-21",
        "nav": 1.1077
      },
      {
        "date": "2026-08-24",
        "nav": 1.1078
      },
      {
        "date": "2026-08-25",
        "nav": 1.1079
      }
    ],
    "970166": [
      {
        "date": "2026-07-29",
        "nav": 1.0747
      },
      {
        "date": "2026-07-30",
        "nav": 1.075
      },
      {
        "date": "2026-07-31",
        "nav": 1.0751
      },
      {
        "date": "2026-08-03",
        "nav": 1.0751
      },
      {
        "date": "2026-08-04",
        "nav": 1.0752
      },
      {
        "date": "2026-08-05",
        "nav": 1.0752
      },
      {
        "date": "2026-08-06",
        "nav": 1.0752
      },
      {
        "date": "2026-08-07",
        "nav": 1.0753
      },
      {
        "date": "2026-08-10",
        "nav": 1.0757
      },
      {
        "date": "2026-08-11",
        "nav": 1.0756
      },
      {
        "date": "2026-08-12",
        "nav": 1.0756
      },
      {
        "date": "2026-08-13",
        "nav": 1.0758
      },
      {
        "date": "2026-08-14",
        "nav": 1.0759
      },
      {
        "date": "2026-08-17",
        "nav": 1.0759
      },
      {
        "date": "2026-08-18",
        "nav": 1.076
      },
      {
        "date": "2026-08-19",
        "nav": 1.076
      },
      {
        "date": "2026-08-20",
        "nav": 1.076
      },
      {
        "date": "2026-08-21",
        "nav": 1.0759
      },
      {
        "date": "2026-08-24",
        "nav": 1.0761
      },
      {
        "date": "2026-08-25",
        "nav": 1.0761
      }
    ],
    "970165": [
      {
        "date": "2026-07-29",
        "nav": 1.0888
      },
      {
        "date": "2026-07-30",
        "nav": 1.0891
      },
      {
        "date": "2026-07-31",
        "nav": 1.0893
      },
      {
        "date": "2026-08-03",
        "nav": 1.0893
      },
      {
        "date": "2026-08-04",
        "nav": 1.0894
      },
      {
        "date": "2026-08-05",
        "nav": 1.0894
      },
      {
        "date": "2026-08-06",
        "nav": 1.0894
      },
      {
        "date": "2026-08-07",
        "nav": 1.0895
      },
      {
        "date": "2026-08-10",
        "nav": 1.0899
      },
      {
        "date": "2026-08-11",
        "nav": 1.0898
      },
      {
        "date": "2026-08-12",
        "nav": 1.0899
      },
      {
        "date": "2026-08-13",
        "nav": 1.0901
      },
      {
        "date": "2026-08-14",
        "nav": 1.0902
      },
      {
        "date": "2026-08-17",
        "nav": 1.0902
      },
      {
        "date": "2026-08-18",
        "nav": 1.0903
      },
      {
        "date": "2026-08-19",
        "nav": 1.0903
      },
      {
        "date": "2026-08-20",
        "nav": 1.0903
      },
      {
        "date": "2026-08-21",
        "nav": 1.0903
      },
      {
        "date": "2026-08-24",
        "nav": 1.0905
      },
      {
        "date": "2026-08-25",
        "nav": 1.0905
      }
    ],
    "952320": [
      {
        "date": "2026-07-29",
        "nav": 1.0547
      },
      {
        "date": "2026-07-30",
        "nav": 1.0471
      },
      {
        "date": "2026-07-31",
        "nav": 1.0521
      },
      {
        "date": "2026-08-03",
        "nav": 1.0485
      },
      {
        "date": "2026-08-04",
        "nav": 1.0558
      },
      {
        "date": "2026-08-05",
        "nav": 1.0633
      },
      {
        "date": "2026-08-06",
        "nav": 1.0651
      },
      {
        "date": "2026-08-07",
        "nav": 1.0718
      },
      {
        "date": "2026-08-10",
        "nav": 1.0735
      },
      {
        "date": "2026-08-11",
        "nav": 1.0707
      },
      {
        "date": "2026-08-12",
        "nav": 1.0745
      },
      {
        "date": "2026-08-13",
        "nav": 1.0716
      },
      {
        "date": "2026-08-14",
        "nav": 1.0736
      },
      {
        "date": "2026-08-17",
        "nav": 1.083
      },
      {
        "date": "2026-08-18",
        "nav": 1.0831
      },
      {
        "date": "2026-08-19",
        "nav": 1.0661
      },
      {
        "date": "2026-08-20",
        "nav": 1.0688
      },
      {
        "date": "2026-08-21",
        "nav": 1.0706
      },
      {
        "date": "2026-08-24",
        "nav": 1.0644
      },
      {
        "date": "2026-08-25",
        "nav": 1.064
      }
    ],
    "952024": [
      {
        "date": "2026-07-29",
        "nav": 1.1948
      },
      {
        "date": "2026-07-30",
        "nav": 1.1845
      },
      {
        "date": "2026-07-31",
        "nav": 1.1917
      },
      {
        "date": "2026-08-03",
        "nav": 1.1884
      },
      {
        "date": "2026-08-04",
        "nav": 1.1981
      },
      {
        "date": "2026-08-05",
        "nav": 1.2087
      },
      {
        "date": "2026-08-06",
        "nav": 1.2126
      },
      {
        "date": "2026-08-07",
        "nav": 1.2212
      },
      {
        "date": "2026-08-10",
        "nav": 1.2237
      },
      {
        "date": "2026-08-11",
        "nav": 1.2211
      },
      {
        "date": "2026-08-12",
        "nav": 1.2271
      },
      {
        "date": "2026-08-13",
        "nav": 1.2237
      },
      {
        "date": "2026-08-14",
        "nav": 1.2275
      },
      {
        "date": "2026-08-17",
        "nav": 1.2399
      },
      {
        "date": "2026-08-18",
        "nav": 1.2402
      },
      {
        "date": "2026-08-19",
        "nav": 1.2169
      },
      {
        "date": "2026-08-20",
        "nav": 1.221
      },
      {
        "date": "2026-08-21",
        "nav": 1.2224
      },
      {
        "date": "2026-08-24",
        "nav": 1.2149
      },
      {
        "date": "2026-08-25",
        "nav": 1.2159
      }
    ],
    "952020": [
      {
        "date": "2026-07-29",
        "nav": 1.061
      },
      {
        "date": "2026-07-30",
        "nav": 1.0533
      },
      {
        "date": "2026-07-31",
        "nav": 1.0584
      },
      {
        "date": "2026-08-03",
        "nav": 1.0548
      },
      {
        "date": "2026-08-04",
        "nav": 1.0621
      },
      {
        "date": "2026-08-05",
        "nav": 1.0697
      },
      {
        "date": "2026-08-06",
        "nav": 1.0715
      },
      {
        "date": "2026-08-07",
        "nav": 1.0783
      },
      {
        "date": "2026-08-10",
        "nav": 1.08
      },
      {
        "date": "2026-08-11",
        "nav": 1.0772
      },
      {
        "date": "2026-08-12",
        "nav": 1.0811
      },
      {
        "date": "2026-08-13",
        "nav": 1.0781
      },
      {
        "date": "2026-08-14",
        "nav": 1.0802
      },
      {
        "date": "2026-08-17",
        "nav": 1.0897
      },
      {
        "date": "2026-08-18",
        "nav": 1.0897
      },
      {
        "date": "2026-08-19",
        "nav": 1.0727
      },
      {
        "date": "2026-08-20",
        "nav": 1.0753
      },
      {
        "date": "2026-08-21",
        "nav": 1.0772
      },
      {
        "date": "2026-08-24",
        "nav": 1.071
      },
      {
        "date": "2026-08-25",
        "nav": 1.0707
      }
    ],
    "952001": [
      {
        "date": "2026-07-29",
        "nav": 1.0441
      },
      {
        "date": "2026-07-30",
        "nav": 1.0441
      },
      {
        "date": "2026-07-31",
        "nav": 1.0442
      },
      {
        "date": "2026-08-03",
        "nav": 1.0443
      },
      {
        "date": "2026-08-04",
        "nav": 1.0444
      },
      {
        "date": "2026-08-05",
        "nav": 1.0444
      },
      {
        "date": "2026-08-06",
        "nav": 1.0445
      },
      {
        "date": "2026-08-07",
        "nav": 1.0446
      },
      {
        "date": "2026-08-10",
        "nav": 1.0448
      },
      {
        "date": "2026-08-11",
        "nav": 1.0448
      },
      {
        "date": "2026-08-12",
        "nav": 1.0449
      },
      {
        "date": "2026-08-13",
        "nav": 1.045
      },
      {
        "date": "2026-08-14",
        "nav": 1.045
      },
      {
        "date": "2026-08-17",
        "nav": 1.0452
      },
      {
        "date": "2026-08-18",
        "nav": 1.0453
      },
      {
        "date": "2026-08-19",
        "nav": 1.0453
      },
      {
        "date": "2026-08-20",
        "nav": 1.0453
      },
      {
        "date": "2026-08-21",
        "nav": 1.0453
      },
      {
        "date": "2026-08-24",
        "nav": 1.0454
      },
      {
        "date": "2026-08-25",
        "nav": 1.0455
      }
    ],
    "890011": [
      {
        "date": "2026-07-30",
        "nav": 1.1567
      },
      {
        "date": "2026-07-31",
        "nav": 1.1581
      },
      {
        "date": "2026-08-03",
        "nav": 1.1565
      },
      {
        "date": "2026-08-04",
        "nav": 1.1674
      },
      {
        "date": "2026-08-05",
        "nav": 1.1668
      },
      {
        "date": "2026-08-06",
        "nav": 1.1668
      },
      {
        "date": "2026-08-07",
        "nav": 1.1716
      },
      {
        "date": "2026-08-10",
        "nav": 1.1706
      },
      {
        "date": "2026-08-11",
        "nav": 1.1695
      },
      {
        "date": "2026-08-12",
        "nav": 1.1735
      },
      {
        "date": "2026-08-13",
        "nav": 1.1725
      },
      {
        "date": "2026-08-14",
        "nav": 1.1763
      },
      {
        "date": "2026-08-17",
        "nav": 1.1858
      },
      {
        "date": "2026-08-18",
        "nav": 1.1841
      },
      {
        "date": "2026-08-19",
        "nav": 1.1695
      },
      {
        "date": "2026-08-20",
        "nav": 1.1706
      },
      {
        "date": "2026-08-21",
        "nav": 1.1742
      },
      {
        "date": "2026-08-24",
        "nav": 1.1697
      },
      {
        "date": "2026-08-25",
        "nav": 1.1679
      },
      {
        "date": "2026-08-26",
        "nav": 1.17
      }
    ],
    "890005": [
      {
        "date": "2026-07-30",
        "nav": 1.2177
      },
      {
        "date": "2026-07-31",
        "nav": 1.2195
      },
      {
        "date": "2026-08-03",
        "nav": 1.2192
      },
      {
        "date": "2026-08-04",
        "nav": 1.2188
      },
      {
        "date": "2026-08-05",
        "nav": 1.221
      },
      {
        "date": "2026-08-06",
        "nav": 1.2195
      },
      {
        "date": "2026-08-07",
        "nav": 1.2202
      },
      {
        "date": "2026-08-10",
        "nav": 1.2223
      },
      {
        "date": "2026-08-11",
        "nav": 1.221
      },
      {
        "date": "2026-08-12",
        "nav": 1.2212
      },
      {
        "date": "2026-08-13",
        "nav": 1.2187
      },
      {
        "date": "2026-08-14",
        "nav": 1.2178
      },
      {
        "date": "2026-08-17",
        "nav": 1.22
      },
      {
        "date": "2026-08-18",
        "nav": 1.2205
      },
      {
        "date": "2026-08-19",
        "nav": 1.2159
      },
      {
        "date": "2026-08-20",
        "nav": 1.217
      },
      {
        "date": "2026-08-21",
        "nav": 1.2167
      },
      {
        "date": "2026-08-24",
        "nav": 1.2147
      },
      {
        "date": "2026-08-25",
        "nav": 1.2153
      },
      {
        "date": "2026-08-26",
        "nav": 1.2165
      }
    ],
    "881013": [
      {
        "date": "2026-07-29",
        "nav": 1.1303
      },
      {
        "date": "2026-07-30",
        "nav": 1.1269
      },
      {
        "date": "2026-07-31",
        "nav": 1.1282
      },
      {
        "date": "2026-08-03",
        "nav": 1.1258
      },
      {
        "date": "2026-08-04",
        "nav": 1.1307
      },
      {
        "date": "2026-08-05",
        "nav": 1.1363
      },
      {
        "date": "2026-08-06",
        "nav": 1.138
      },
      {
        "date": "2026-08-07",
        "nav": 1.1436
      },
      {
        "date": "2026-08-10",
        "nav": 1.1444
      },
      {
        "date": "2026-08-11",
        "nav": 1.1417
      },
      {
        "date": "2026-08-12",
        "nav": 1.1429
      },
      {
        "date": "2026-08-13",
        "nav": 1.1419
      },
      {
        "date": "2026-08-14",
        "nav": 1.1433
      },
      {
        "date": "2026-08-17",
        "nav": 1.1481
      },
      {
        "date": "2026-08-18",
        "nav": 1.1482
      },
      {
        "date": "2026-08-19",
        "nav": 1.1395
      },
      {
        "date": "2026-08-20",
        "nav": 1.1406
      },
      {
        "date": "2026-08-21",
        "nav": 1.1413
      },
      {
        "date": "2026-08-24",
        "nav": 1.1383
      },
      {
        "date": "2026-08-25",
        "nav": 1.1383
      }
    ],
    "881012": [
      {
        "date": "2026-07-29",
        "nav": 1.2007
      },
      {
        "date": "2026-07-30",
        "nav": 1.1971
      },
      {
        "date": "2026-07-31",
        "nav": 1.1985
      },
      {
        "date": "2026-08-03",
        "nav": 1.196
      },
      {
        "date": "2026-08-04",
        "nav": 1.2012
      },
      {
        "date": "2026-08-05",
        "nav": 1.2072
      },
      {
        "date": "2026-08-06",
        "nav": 1.2091
      },
      {
        "date": "2026-08-07",
        "nav": 1.215
      },
      {
        "date": "2026-08-10",
        "nav": 1.2159
      },
      {
        "date": "2026-08-11",
        "nav": 1.213
      },
      {
        "date": "2026-08-12",
        "nav": 1.2143
      },
      {
        "date": "2026-08-13",
        "nav": 1.2133
      },
      {
        "date": "2026-08-14",
        "nav": 1.2148
      },
      {
        "date": "2026-08-17",
        "nav": 1.2199
      },
      {
        "date": "2026-08-18",
        "nav": 1.22
      },
      {
        "date": "2026-08-19",
        "nav": 1.2107
      },
      {
        "date": "2026-08-20",
        "nav": 1.2119
      },
      {
        "date": "2026-08-21",
        "nav": 1.2127
      },
      {
        "date": "2026-08-24",
        "nav": 1.2095
      },
      {
        "date": "2026-08-25",
        "nav": 1.2095
      }
    ],
    "539002": [
      {
        "date": "2026-07-29",
        "nav": 1.967
      },
      {
        "date": "2026-07-30",
        "nav": 2.122
      },
      {
        "date": "2026-07-31",
        "nav": 2.238
      },
      {
        "date": "2026-08-03",
        "nav": 2.231
      },
      {
        "date": "2026-08-04",
        "nav": 2.327
      },
      {
        "date": "2026-08-05",
        "nav": 2.323
      },
      {
        "date": "2026-08-06",
        "nav": 2.275
      },
      {
        "date": "2026-08-07",
        "nav": 2.287
      },
      {
        "date": "2026-08-10",
        "nav": 2.256
      },
      {
        "date": "2026-08-11",
        "nav": 2.282
      },
      {
        "date": "2026-08-12",
        "nav": 2.36
      },
      {
        "date": "2026-08-13",
        "nav": 2.417
      },
      {
        "date": "2026-08-14",
        "nav": 2.461
      },
      {
        "date": "2026-08-17",
        "nav": 2.515
      },
      {
        "date": "2026-08-18",
        "nav": 2.403
      },
      {
        "date": "2026-08-19",
        "nav": 2.329
      },
      {
        "date": "2026-08-20",
        "nav": 2.384
      },
      {
        "date": "2026-08-21",
        "nav": 2.391
      },
      {
        "date": "2026-08-24",
        "nav": 2.305
      },
      {
        "date": "2026-08-25",
        "nav": 2.335
      }
    ],
    "519696": [
      {
        "date": "2026-07-29",
        "nav": 2.8535
      },
      {
        "date": "2026-07-30",
        "nav": 2.907
      },
      {
        "date": "2026-07-31",
        "nav": 2.9184
      },
      {
        "date": "2026-08-03",
        "nav": 2.948
      },
      {
        "date": "2026-08-04",
        "nav": 2.9892
      },
      {
        "date": "2026-08-05",
        "nav": 2.9767
      },
      {
        "date": "2026-08-06",
        "nav": 2.9708
      },
      {
        "date": "2026-08-07",
        "nav": 2.9846
      },
      {
        "date": "2026-08-10",
        "nav": 2.9841
      },
      {
        "date": "2026-08-11",
        "nav": 2.9779
      },
      {
        "date": "2026-08-12",
        "nav": 2.9829
      },
      {
        "date": "2026-08-13",
        "nav": 3.0011
      },
      {
        "date": "2026-08-14",
        "nav": 2.9959
      },
      {
        "date": "2026-08-17",
        "nav": 2.9922
      },
      {
        "date": "2026-08-18",
        "nav": 2.9725
      },
      {
        "date": "2026-08-19",
        "nav": 2.9742
      },
      {
        "date": "2026-08-20",
        "nav": 2.9593
      },
      {
        "date": "2026-08-21",
        "nav": 2.9734
      },
      {
        "date": "2026-08-24",
        "nav": 2.962
      },
      {
        "date": "2026-08-25",
        "nav": 2.9721
      }
    ],
    "519601": [
      {
        "date": "2026-07-29",
        "nav": 1.8739
      },
      {
        "date": "2026-07-30",
        "nav": 1.8609
      },
      {
        "date": "2026-07-31",
        "nav": 1.8786
      },
      {
        "date": "2026-08-03",
        "nav": 1.8776
      },
      {
        "date": "2026-08-04",
        "nav": 1.8888
      },
      {
        "date": "2026-08-05",
        "nav": 1.9088
      },
      {
        "date": "2026-08-06",
        "nav": 1.8937
      },
      {
        "date": "2026-08-07",
        "nav": 1.9243
      },
      {
        "date": "2026-08-10",
        "nav": 1.9244
      },
      {
        "date": "2026-08-11",
        "nav": 1.9167
      },
      {
        "date": "2026-08-12",
        "nav": 1.9227
      },
      {
        "date": "2026-08-13",
        "nav": 1.9139
      },
      {
        "date": "2026-08-14",
        "nav": 1.8691
      },
      {
        "date": "2026-08-17",
        "nav": 1.8838
      },
      {
        "date": "2026-08-18",
        "nav": 1.8745
      },
      {
        "date": "2026-08-19",
        "nav": 1.8413
      },
      {
        "date": "2026-08-20",
        "nav": 1.859
      },
      {
        "date": "2026-08-21",
        "nav": 1.8969
      },
      {
        "date": "2026-08-24",
        "nav": 1.8429
      },
      {
        "date": "2026-08-25",
        "nav": 1.8573
      }
    ],
    "501312": [
      {
        "date": "2026-07-29",
        "nav": 2.0919
      },
      {
        "date": "2026-07-30",
        "nav": 2.1749
      },
      {
        "date": "2026-07-31",
        "nav": 2.1654
      },
      {
        "date": "2026-08-03",
        "nav": 2.2165
      },
      {
        "date": "2026-08-04",
        "nav": 2.3055
      },
      {
        "date": "2026-08-05",
        "nav": 2.2926
      },
      {
        "date": "2026-08-06",
        "nav": 2.2819
      },
      {
        "date": "2026-08-07",
        "nav": 2.3622
      },
      {
        "date": "2026-08-10",
        "nav": 2.3749
      },
      {
        "date": "2026-08-11",
        "nav": 2.3803
      },
      {
        "date": "2026-08-12",
        "nav": 2.3992
      },
      {
        "date": "2026-08-13",
        "nav": 2.4143
      },
      {
        "date": "2026-08-14",
        "nav": 2.3931
      },
      {
        "date": "2026-08-17",
        "nav": 2.4049
      },
      {
        "date": "2026-08-18",
        "nav": 2.3436
      },
      {
        "date": "2026-08-19",
        "nav": 2.4077
      },
      {
        "date": "2026-08-20",
        "nav": 2.3934
      },
      {
        "date": "2026-08-21",
        "nav": 2.4354
      },
      {
        "date": "2026-08-24",
        "nav": 2.3815
      },
      {
        "date": "2026-08-25",
        "nav": 2.4267
      }
    ],
    "501300": [
      {
        "date": "2026-07-29",
        "nav": 0.9362
      },
      {
        "date": "2026-07-30",
        "nav": 0.9366
      },
      {
        "date": "2026-07-31",
        "nav": 0.9345
      },
      {
        "date": "2026-08-03",
        "nav": 0.9369
      },
      {
        "date": "2026-08-04",
        "nav": 0.9395
      },
      {
        "date": "2026-08-05",
        "nav": 0.9393
      },
      {
        "date": "2026-08-06",
        "nav": 0.9371
      },
      {
        "date": "2026-08-07",
        "nav": 0.9386
      },
      {
        "date": "2026-08-10",
        "nav": 0.9365
      },
      {
        "date": "2026-08-11",
        "nav": 0.9372
      },
      {
        "date": "2026-08-12",
        "nav": 0.9372
      },
      {
        "date": "2026-08-13",
        "nav": 0.9395
      },
      {
        "date": "2026-08-14",
        "nav": 0.9378
      },
      {
        "date": "2026-08-17",
        "nav": 0.937
      },
      {
        "date": "2026-08-18",
        "nav": 0.9378
      },
      {
        "date": "2026-08-19",
        "nav": 0.9394
      },
      {
        "date": "2026-08-20",
        "nav": 0.9371
      },
      {
        "date": "2026-08-21",
        "nav": 0.9364
      },
      {
        "date": "2026-08-24",
        "nav": 0.938
      },
      {
        "date": "2026-08-25",
        "nav": 0.9407
      }
    ]
  },
  "fundPremium": [
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "discount": 0.32,
      "nav": 1.264,
      "price": 1.264,
      "signal": "正常"
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "discount": 0.32,
      "nav": 1.3445,
      "price": 1.3445,
      "signal": "正常"
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "discount": 0.05,
      "nav": 1.0904,
      "price": 1.0904,
      "signal": "正常"
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "discount": 0.05,
      "nav": 1.0633,
      "price": 1.0633,
      "signal": "正常"
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "discount": 0.09,
      "nav": 0.7172,
      "price": 0.7172,
      "signal": "正常"
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "discount": 0.09,
      "nav": 0.7353,
      "price": 0.7353,
      "signal": "正常"
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "discount": 0.34,
      "nav": 2.7511,
      "price": 2.7511,
      "signal": "正常"
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "discount": 0.19,
      "nav": 2.5302,
      "price": 2.5302,
      "signal": "正常"
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "discount": 0.24,
      "nav": 0.7345,
      "price": 0.7345,
      "signal": "正常"
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "discount": 0.31,
      "nav": 4.1648,
      "price": 4.1648,
      "signal": "正常"
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "discount": 0.27,
      "nav": 0.4997,
      "price": 0.4997,
      "signal": "正常"
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "discount": 0.27,
      "nav": 0.5092,
      "price": 0.5092,
      "signal": "正常"
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "discount": 0.0,
      "nav": 1.2779,
      "price": 1.2779,
      "signal": "正常"
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "discount": 0.09,
      "nav": 1.1276,
      "price": 1.1276,
      "signal": "正常"
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "discount": 0.28,
      "nav": 1.407,
      "price": 1.407,
      "signal": "正常"
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "discount": 0.04,
      "nav": 2.9933,
      "price": 2.9933,
      "signal": "正常"
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "discount": 0.38,
      "nav": 3.271,
      "price": 3.271,
      "signal": "正常"
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "discount": -0.1,
      "nav": 1.4889,
      "price": 1.4889,
      "signal": "正常"
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "discount": 0.42,
      "nav": 0.6288,
      "price": 0.6288,
      "signal": "正常"
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "discount": 0.5,
      "nav": 14.072,
      "price": 14.072,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "maxDrawdown": 9.71,
      "sharpe": -0.77,
      "calmar": -0.77
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "maxDrawdown": 9.69,
      "sharpe": -0.75,
      "calmar": -0.75
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "maxDrawdown": 1.4,
      "sharpe": 0.07,
      "calmar": 0.07
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "maxDrawdown": 1.36,
      "sharpe": 0.12,
      "calmar": 0.12
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "maxDrawdown": 2.71,
      "sharpe": -2.15,
      "calmar": -2.15
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "maxDrawdown": 2.7,
      "sharpe": -2.13,
      "calmar": -2.13
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "maxDrawdown": 10.23,
      "sharpe": 2.53,
      "calmar": 2.53
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "maxDrawdown": 5.79,
      "sharpe": 0.05,
      "calmar": 0.05
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "maxDrawdown": 7.14,
      "sharpe": -1.85,
      "calmar": -1.85
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "maxDrawdown": 9.4,
      "sharpe": 1.27,
      "calmar": 1.27
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "maxDrawdown": 8.23,
      "sharpe": -0.43,
      "calmar": -0.43
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "maxDrawdown": 8.23,
      "sharpe": -0.41,
      "calmar": -0.41
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "maxDrawdown": 0.03,
      "sharpe": -0.2,
      "calmar": -0.2
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "maxDrawdown": 2.59,
      "sharpe": -1.08,
      "calmar": -1.08
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "maxDrawdown": 8.52,
      "sharpe": -0.54,
      "calmar": -0.54
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "maxDrawdown": 1.3,
      "sharpe": -1.19,
      "calmar": -1.19
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "maxDrawdown": 11.36,
      "sharpe": 2.42,
      "calmar": 2.42
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "maxDrawdown": 2.96,
      "sharpe": 0.15,
      "calmar": 0.15
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "maxDrawdown": 12.52,
      "sharpe": -0.73,
      "calmar": -0.73
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "maxDrawdown": 15.0,
      "sharpe": 4.1,
      "calmar": 4.1
    }
  ],
  "news": [
    {
      "title": "上海市人民政府办公厅印发《上海市战略性新兴产业发展“十五五”规划》。其中提到，到2030年，战略性新兴产业增加值达2.1万亿元，工业战略性新兴产业总产值占规模以上工业总产值比重达50%以上，三大先导产业制造业年均增速达10%以上。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:41",
      "impact": "neutral"
    },
    {
      "title": "南方财经8月26日电，26日10时30分许，因尼泊尔一侧发生泥石流灾害，造成西藏日喀则市吉隆县吉隆口岸重大人员伤亡、失联。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:35",
      "impact": "neutral"
    },
    {
      "title": "·外交部回应加拿大宣布对美国商品加征反制关税·工业和信息化部：将研究起草动力电池退役相关行政法规，实施动力电池数字身份证管理制度·财政部：7月份全国销售彩票875.71亿元同比增长68.6%·就加拿大和美国的贸易谈判未能达成协议、加拿大宣布对美国商品加征反制关税，外交部发言人林剑26日在例行记者会上答问时表示，中方一贯主张各方通过平等对话协商来解决各自经贸关切。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:15",
      "impact": "neutral"
    },
    {
      "title": "8月26日，上海国资基金市级投后赋能协同平台正式投入运行。截至2025年底，上海国资基金规模超过6600亿元。为更好服务科创企业成长，上海市国资委推动上海国投公司联合有关区、市属国企组建首批赋能联合体先行试点，健全基金“募投管退”全链条闭环服务体系，培育完善上海科创产业生态。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:00",
      "impact": "neutral"
    },
    {
      "title": "记者今天（26日）从相关新闻通气会上获悉，根据日前印发的《上海市生态空间建设和市容环境优化“十五五”规划》，到2030年，上海将初步建成具有超大城市特点的“自然共生、城园共融、全民共享”的“公园城市”和“整洁美观、精致温馨、流光溢彩”的“洁净城市”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:43",
      "impact": "neutral"
    },
    {
      "title": "南方财经8月26日电，湖南日报消息，8月26日，湖南省政府与国家石油天然气管网集团有限公司在长沙签署“十五五”时期战略合作协议。根据协议，“十五五”时期，双方将携手打造以新型能源“质能网”为支撑的新型能源体系，进一步深化油气体制改革，合力推动油气管网基础设施建设，实现更高水平互利共赢。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:43",
      "impact": "neutral"
    },
    {
      "title": "两部门发布《关于规范医疗机构特殊医学用途配方食品使用的指导意见》",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:40",
      "impact": "neutral"
    },
    {
      "title": "“十五五”期间，上海将推动“一江一河”实现“五个跃升”。其中，黄浦江沿岸将新增滨水绿地及公共空间100公顷，苏州河沿岸则活化提升大型节点绿地100公顷；推动世博—前滩—徐汇滨江“新黄金三角”整体能级跃升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:36",
      "impact": "neutral"
    },
    {
      "title": "会议指出，“十五五”时期，工业和信息化系统要锚定基本实现新型工业化目标，统筹国内国际两个大局，统筹发展和安全，以推动高质量发展为主题，以改革创新为根本动力，充分发挥原材料工业在传统产业优化提升、新兴产业和未来产业培育壮大中的重要作用，着力推进相关传统产业优化提升、先进材料产业创新发展、资源产业安全保障，因地制宜培育发展新质生产力，全面提高智能化、绿色化、融合化发展水平，推动原材料工业从规模领先向全面领先跨越。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:31",
      "impact": "neutral"
    },
    {
      "title": "新华社北京8月26日电政协第十四届全国委员会常务委员会第十八次会议26日上午举行全体会议，14位全国政协常委围绕“加大保障和改善民生力度，扎实推进全体人民共同富裕”作大会发言。中共中央政治局常委、全国政协主席王沪宁出席。徐令义常委建议，把高质量发展作为推进共同富裕的重点，着力在缩小地区差距、城乡差距、收入差距上下功夫求实效。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:27",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 52,
    "label": "中性",
    "upDownRatio": "3,682/1,158",
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
