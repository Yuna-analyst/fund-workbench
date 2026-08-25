// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-25 11:05:42
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-25 11:05 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-25",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3889.44,
      "change": 7.43,
      "changePct": "+0.19%",
      "high": 3896.21,
      "low": 3850.86,
      "volume": 464117264.0,
      "amount": 858874230000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13745.87,
      "change": -48.42,
      "changePct": "-0.35%",
      "high": 13848.4,
      "low": 13568.51,
      "volume": 579779582.0,
      "amount": 972970230000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3397.52,
      "change": -34.37,
      "changePct": "-1.00%",
      "high": 3440.65,
      "low": 3359.74,
      "volume": 170664183.0,
      "amount": 463976730000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1604.59,
      "change": 2.25,
      "changePct": "+0.14%",
      "high": 1622.2,
      "low": 1564.77,
      "volume": 7171351.0,
      "amount": 75293140000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4552.03,
      "change": -11.1,
      "changePct": "-0.24%",
      "high": 4573.38,
      "low": 4523.02,
      "volume": 171510168.0,
      "amount": 480421570000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7710.94,
      "change": -6.15,
      "changePct": "-0.08%",
      "high": 7755.72,
      "low": 7572.86,
      "volume": 147594598.0,
      "amount": 326274020000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.18万亿",
      "label": "成交额",
      "rawAmount": 3177809920000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,821/1,589",
      "label": "涨/跌家数",
      "rawUp": 2821,
      "rawDown": 1589,
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
    "totalInflow": 13.23,
    "totalOutflow": 0,
    "netFlow": 13.23,
    "netFlowTrend": [
      2.65,
      5.29,
      7.94,
      10.58,
      13.23
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
      "name": "创新药",
      "inflow": 3.12,
      "pct": 2.12
    },
    {
      "name": "芯片",
      "inflow": 2.27,
      "pct": 0.09
    },
    {
      "name": "5G",
      "inflow": 2.1,
      "pct": 0.3
    },
    {
      "name": "医疗",
      "inflow": 1.84,
      "pct": 2.36
    },
    {
      "name": "医药",
      "inflow": 1.22,
      "pct": 1.86
    },
    {
      "name": "白酒",
      "inflow": 0.8,
      "pct": 0.24
    },
    {
      "name": "军工",
      "inflow": 0.52,
      "pct": 0.46
    },
    {
      "name": "传媒",
      "inflow": 0.48,
      "pct": 1.77
    },
    {
      "name": "家电",
      "inflow": 0.44,
      "pct": 1.63
    },
    {
      "name": "人工智能",
      "inflow": 0.44,
      "pct": 0.61
    },
    {
      "name": "云计算",
      "inflow": 0.28,
      "pct": 0.37
    },
    {
      "name": "农业",
      "inflow": 0.27,
      "pct": 0.97
    },
    {
      "name": "地产",
      "inflow": 0.22,
      "pct": 1.85
    },
    {
      "name": "游戏",
      "inflow": 0.21,
      "pct": 1.52
    },
    {
      "name": "电子",
      "inflow": 0.17,
      "pct": 0.12
    },
    {
      "name": "食品",
      "inflow": 0.05,
      "pct": 0.2
    },
    {
      "name": "基建",
      "inflow": 0.04,
      "pct": 0.97
    },
    {
      "name": "计算机",
      "inflow": 0.04,
      "pct": 0.62
    },
    {
      "name": "通信",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "半导体",
      "inflow": -4.11,
      "pct": -0.2
    }
  ],
  "sectors": [
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.347,
      "changePct": 2.36,
      "change": 0.008,
      "turnover": 6.14
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.868,
      "changePct": 2.12,
      "change": 0.018,
      "turnover": 10.4
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.383,
      "changePct": 1.86,
      "change": 0.007,
      "turnover": 4.06
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.21,
      "changePct": 1.85,
      "change": 0.022,
      "turnover": 0.75
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.807,
      "changePct": 1.77,
      "change": 0.014,
      "turnover": 1.6
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.43,
      "changePct": 1.63,
      "change": 0.023,
      "turnover": 1.47
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.071,
      "changePct": 1.52,
      "change": 0.016,
      "turnover": 0.71
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.036,
      "changePct": 0.97,
      "change": 0.01,
      "turnover": 0.12
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.728,
      "changePct": 0.97,
      "change": 0.007,
      "turnover": 0.91
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.14,
      "changePct": 0.62,
      "change": 0.007,
      "turnover": 0.15
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.986,
      "changePct": 0.61,
      "change": 0.006,
      "turnover": 1.46
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.095,
      "changePct": 0.46,
      "change": 0.005,
      "turnover": 1.73
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.628,
      "changePct": 0.37,
      "change": 0.006,
      "turnover": 0.94
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.006,
      "changePct": 0.3,
      "change": 0.003,
      "turnover": 7.0
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.422,
      "changePct": 0.24,
      "change": 0.001,
      "turnover": 2.66
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.497,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 0.18
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.819,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 0.57
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.118,
      "changePct": 0.09,
      "change": 0.001,
      "turnover": 7.56
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.648,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 30.47
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.008,
      "changePct": -0.2,
      "change": -0.002,
      "turnover": 13.69
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.509,
      "changePct": -0.2,
      "change": -0.001,
      "turnover": 6.4
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.169,
      "changePct": -0.26,
      "change": -0.003,
      "turnover": 0.74
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.303,
      "changePct": -0.38,
      "change": -0.005,
      "turnover": 8.53
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.838,
      "changePct": -0.48,
      "change": -0.004,
      "turnover": 1.31
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.821,
      "changePct": -0.73,
      "change": -0.006,
      "turnover": 8.63
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.611,
      "changePct": -1.35,
      "change": -0.022,
      "turnover": 1.09
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.466,
      "changePct": -1.6,
      "change": -0.04,
      "turnover": 1.06
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.896,
      "changePct": -2.72,
      "change": -0.053,
      "turnover": 11.98
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.693,
      "changePct": 0.12,
      "amount": 57.21,
      "netFlow": 14.3
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.982,
      "changePct": 0.1,
      "amount": 11.52,
      "netFlow": 2.88
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.383,
      "changePct": 1.86,
      "amount": 4.06,
      "netFlow": 1.02
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.466,
      "changePct": -1.6,
      "amount": 1.06,
      "netFlow": -0.27
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.509,
      "changePct": -0.2,
      "amount": 6.4,
      "netFlow": -1.6
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.819,
      "changePct": -0.23,
      "amount": 7.19,
      "netFlow": -1.8
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.483,
      "changePct": -0.22,
      "amount": 8.13,
      "netFlow": -2.03
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.008,
      "changePct": -0.2,
      "amount": 13.69,
      "netFlow": -3.42
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.726,
      "changePct": -0.18,
      "amount": 29.11,
      "netFlow": -7.28
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.616,
      "changePct": -0.24,
      "amount": 34.36,
      "netFlow": -8.59
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.616,
      "changePct": -0.24,
      "amount": 34.36,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.982,
      "changePct": 0.1,
      "amount": 11.52,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.726,
      "changePct": -0.18,
      "amount": 29.11,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.819,
      "changePct": -0.23,
      "amount": 7.19,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.483,
      "changePct": -0.22,
      "amount": 8.13,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "医疗",
      "turnover": 6.14,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 10.4,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 4.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.75,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 1.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.91,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 1.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 7.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 2.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 7.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 30.47,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "半导体",
      "turnover": 13.69,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    }
  ],
  "funds": [
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2741,
      "ret1w": -1.61,
      "ret1m": -5.43,
      "ret3m": 0.58,
      "ret6m": -9.55,
      "ret1y": -7.37,
      "ret2y": 19.69,
      "ret3y": 49.98
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3552,
      "ret1w": -1.6,
      "ret1m": -5.42,
      "ret3m": 0.62,
      "ret6m": -9.46,
      "ret1y": -7.2,
      "ret2y": 20.15,
      "ret3y": 51.18
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0905,
      "ret1w": -0.51,
      "ret1m": -0.97,
      "ret3m": -1.03,
      "ret6m": -0.7,
      "ret1y": 0.53,
      "ret2y": 1.5,
      "ret3y": 8.8
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0634,
      "ret1w": -0.51,
      "ret1m": -0.96,
      "ret3m": -0.98,
      "ret6m": -0.54,
      "ret1y": 0.83,
      "ret2y": 2.11,
      "ret3y": 10.13
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7119,
      "ret1w": -1.26,
      "ret1m": -2.77,
      "ret3m": -0.28,
      "ret6m": -7.33,
      "ret1y": -14.75,
      "ret2y": -7.86,
      "ret3y": 12.73
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7299,
      "ret1w": -1.26,
      "ret1m": -2.76,
      "ret3m": -0.22,
      "ret6m": -7.2,
      "ret1y": -14.53,
      "ret2y": -7.38,
      "ret3y": 13.87
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7545,
      "ret1w": -3.61,
      "ret1m": -7.5,
      "ret3m": -1.51,
      "ret6m": -3.91,
      "ret1y": 32.45,
      "ret2y": 76.88,
      "ret3y": 160.52
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5074,
      "ret1w": -2.07,
      "ret1m": -4.68,
      "ret3m": 0.65,
      "ret6m": -5.76,
      "ret1y": 0.58,
      "ret2y": 26.23,
      "ret3y": 87.88
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7318,
      "ret1w": -1.37,
      "ret1m": -5.27,
      "ret3m": 0.33,
      "ret6m": -16.4,
      "ret1y": -17.8,
      "ret2y": -8.48,
      "ret3y": 17.45
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1289,
      "ret1w": -2.69,
      "ret1m": -7.65,
      "ret3m": -3.01,
      "ret6m": -5.43,
      "ret1y": 14.7,
      "ret2y": 46.22,
      "ret3y": 143.81
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5015,
      "ret1w": -1.82,
      "ret1m": -5.23,
      "ret3m": -6.07,
      "ret6m": -9.33,
      "ret1y": -3.54,
      "ret2y": 18.03,
      "ret3y": 46.25
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.511,
      "ret1w": -1.83,
      "ret1m": -5.23,
      "ret3m": -6.05,
      "ret6m": -9.24,
      "ret1y": -3.35,
      "ret2y": 18.48,
      "ret3y": 47.43
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2801,
      "ret1w": 0.33,
      "ret1m": 0.35,
      "ret3m": 1.66,
      "ret6m": -0.07,
      "ret1y": -0.85,
      "ret2y": -0.44,
      "ret3y": 1.27
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1279,
      "ret1w": -0.26,
      "ret1m": -1.82,
      "ret3m": -0.59,
      "ret6m": 3.31,
      "ret1y": -6.67,
      "ret2y": -1.12,
      "ret3y": 23.2
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4146,
      "ret1w": -2.63,
      "ret1m": -5.5,
      "ret3m": -0.06,
      "ret6m": -16.71,
      "ret1y": -4.73,
      "ret2y": -8.09,
      "ret3y": 18.9
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9896,
      "ret1w": -0.36,
      "ret1m": -0.29,
      "ret3m": 1.93,
      "ret6m": -4.61,
      "ret1y": -6.86,
      "ret2y": 13.35,
      "ret3y": 47.03
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.261,
      "ret1w": -3.0,
      "ret1m": -8.22,
      "ret3m": -12.62,
      "ret6m": -17.21,
      "ret1y": 32.29,
      "ret2y": 96.33,
      "ret3y": 194.05
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4912,
      "ret1w": 1.15,
      "ret1m": 2.33,
      "ret3m": 1.3,
      "ret6m": 2.27,
      "ret1y": 0.86,
      "ret2y": -2.24,
      "ret3y": 10.79
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6298,
      "ret1w": -2.49,
      "ret1m": -7.75,
      "ret3m": 8.05,
      "ret6m": -17.14,
      "ret1y": -7.61,
      "ret2y": 3.13,
      "ret3y": 54.67
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.105,
      "ret1w": -4.28,
      "ret1m": -10.6,
      "ret3m": 4.5,
      "ret6m": 5.88,
      "ret1y": 66.96,
      "ret2y": 146.81,
      "ret3y": 341.06
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0654,
      "ret1w": -0.27,
      "ret1m": -0.51,
      "ret3m": -0.18,
      "ret6m": -0.66,
      "ret1y": -0.07,
      "ret2y": 1.11,
      "ret3y": 4.62
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1139,
      "ret1w": -0.26,
      "ret1m": -0.5,
      "ret3m": -0.15,
      "ret6m": -0.59,
      "ret1y": 0.06,
      "ret2y": 1.41,
      "ret3y": 5.34
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0643,
      "ret1w": 0.03,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": 0.29,
      "ret1y": 0.75,
      "ret2y": 1.55,
      "ret3y": 2.73
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0985,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.12,
      "ret6m": 0.33,
      "ret1y": 0.78,
      "ret2y": 1.51,
      "ret3y": 3.86
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1078,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": 0.38,
      "ret1y": 0.88,
      "ret2y": 1.71,
      "ret3y": 4.28
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0761,
      "ret1w": 0.02,
      "ret1m": 0.02,
      "ret3m": 0.13,
      "ret6m": 0.35,
      "ret1y": 0.71,
      "ret2y": 1.44,
      "ret3y": 2.84
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0905,
      "ret1w": 0.02,
      "ret1m": 0.03,
      "ret3m": 0.16,
      "ret6m": 0.44,
      "ret1y": 0.87,
      "ret2y": 1.76,
      "ret3y": 3.49
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0644,
      "ret1w": -0.58,
      "ret1m": -1.72,
      "ret3m": 0.44,
      "ret6m": -2.79,
      "ret1y": 0.42,
      "ret2y": 6.43,
      "ret3y": 12.64
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2149,
      "ret1w": -0.61,
      "ret1m": -2.02,
      "ret3m": 1.37,
      "ret6m": -3.7,
      "ret1y": -0.45,
      "ret2y": 2.6,
      "ret3y": 6.74
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.071,
      "ret1w": -0.58,
      "ret1m": -1.72,
      "ret3m": 0.48,
      "ret6m": -2.69,
      "ret1y": 0.62,
      "ret2y": 6.86,
      "ret3y": 13.56
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0454,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.13,
      "ret6m": 0.36,
      "ret1y": 0.84,
      "ret2y": 1.72,
      "ret3y": 3.57
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1679,
      "ret1w": -0.15,
      "ret1m": -1.37,
      "ret3m": -0.38,
      "ret6m": -3.46,
      "ret1y": -3.38,
      "ret2y": 0.23,
      "ret3y": 10.5
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2147,
      "ret1w": -0.16,
      "ret1m": -0.43,
      "ret3m": 0.03,
      "ret6m": -1.04,
      "ret1y": -0.69,
      "ret2y": 3.79,
      "ret3y": 15.38
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1383,
      "ret1w": -0.26,
      "ret1m": -0.85,
      "ret3m": 0.44,
      "ret6m": -1.34,
      "ret1y": 0.52,
      "ret2y": 4.32,
      "ret3y": 10.5
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2095,
      "ret1w": -0.26,
      "ret1m": -0.85,
      "ret3m": 0.47,
      "ret6m": -1.25,
      "ret1y": 0.71,
      "ret2y": 4.74,
      "ret3y": 11.42
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.391,
      "ret1w": 0.29,
      "ret1m": -2.84,
      "ret3m": -1.08,
      "ret6m": -2.45,
      "ret1y": 42.75,
      "ret2y": 104.01,
      "ret3y": 132.14
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.962,
      "ret1w": -0.38,
      "ret1m": -1.01,
      "ret3m": 2.68,
      "ret6m": 0.77,
      "ret1y": 7.24,
      "ret2y": 8.8,
      "ret3y": 32.88
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8429,
      "ret1w": -2.85,
      "ret1m": -2.17,
      "ret3m": -2.89,
      "ret6m": -13.75,
      "ret1y": -15.1,
      "ret2y": 1.73,
      "ret3y": 50.88
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3815,
      "ret1w": -2.21,
      "ret1m": -0.97,
      "ret3m": 10.3,
      "ret6m": 4.67,
      "ret1y": 18.32,
      "ret2y": 28.88,
      "ret3y": 70.7
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.938,
      "ret1w": 0.17,
      "ret1m": 0.11,
      "ret3m": 0.18,
      "ret6m": -0.39,
      "ret1y": -3.19,
      "ret2y": -3.23,
      "ret3y": -1.62
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6071,
      "ret1w": -2.43,
      "ret1m": -7.11,
      "ret3m": 0.18,
      "ret6m": -5.25,
      "ret1y": 19.88,
      "ret2y": 54.12,
      "ret3y": 90.29
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.603,
      "ret1w": -0.09,
      "ret1m": -0.63,
      "ret3m": 1.79,
      "ret6m": -0.37,
      "ret1y": 1.59,
      "ret2y": 6.3,
      "ret3y": 20.91
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.249,
      "ret1w": -1.81,
      "ret1m": 0.0,
      "ret3m": 2.97,
      "ret6m": 1.71,
      "ret1y": -5.45,
      "ret2y": -17.61,
      "ret3y": 121.45
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.963,
      "ret1w": -3.12,
      "ret1m": -1.83,
      "ret3m": 1.48,
      "ret6m": -2.43,
      "ret1y": -11.57,
      "ret2y": -20.54,
      "ret3y": 52.61
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8621,
      "ret1w": -0.22,
      "ret1m": -2.82,
      "ret3m": 0.19,
      "ret6m": -0.68,
      "ret1y": 34.23,
      "ret2y": 86.98,
      "ret3y": 136.73
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6513,
      "ret1w": 1.94,
      "ret1m": 6.82,
      "ret3m": 14.92,
      "ret6m": 8.31,
      "ret1y": 8.57,
      "ret2y": 48.39,
      "ret3y": 59.56
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7366,
      "ret1w": 1.55,
      "ret1m": 1.45,
      "ret3m": 3.11,
      "ret6m": 4.33,
      "ret1y": 9.21,
      "ret2y": 32.62,
      "ret3y": 56.7
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3379,
      "ret1w": 1.35,
      "ret1m": 1.34,
      "ret3m": 4.34,
      "ret6m": 0.8,
      "ret1y": 5.16,
      "ret2y": 22.14,
      "ret3y": 41.32
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.325,
      "ret1w": -0.08,
      "ret1m": -0.53,
      "ret3m": -1.12,
      "ret6m": 0.08,
      "ret1y": 1.69,
      "ret2y": 6.6,
      "ret3y": -4.34
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.199,
      "ret1w": 1.81,
      "ret1m": 4.81,
      "ret3m": 11.79,
      "ret6m": 0.5,
      "ret1y": -10.54,
      "ret2y": 27.11,
      "ret3y": 62.44
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0111,
      "ret1w": 0.03,
      "ret1m": 0.02,
      "ret3m": 0.24,
      "ret6m": 0.57,
      "ret1y": 1.46,
      "ret2y": 2.14,
      "ret3y": 3.64
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.01,
      "ret1w": 0.03,
      "ret1m": 0.03,
      "ret3m": 0.25,
      "ret6m": 0.55,
      "ret1y": 1.47,
      "ret2y": 2.2,
      "ret3y": 3.82
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.409,
      "ret1w": -2.15,
      "ret1m": -5.94,
      "ret3m": -3.49,
      "ret6m": -9.45,
      "ret1y": -2.96,
      "ret2y": 4.37,
      "ret3y": 35.74
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.817,
      "ret1w": -0.46,
      "ret1m": -5.88,
      "ret3m": 0.25,
      "ret6m": -9.13,
      "ret1y": -3.0,
      "ret2y": 13.36,
      "ret3y": 64.45
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7178,
      "ret1w": 0.03,
      "ret1m": 0.52,
      "ret3m": 9.18,
      "ret6m": -1.45,
      "ret1y": -9.73,
      "ret2y": 39.31,
      "ret3y": 73.69
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1232,
      "ret1w": -1.28,
      "ret1m": -3.15,
      "ret3m": -0.18,
      "ret6m": -2.65,
      "ret1y": 1.26,
      "ret2y": 10.61,
      "ret3y": 40.63
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1837,
      "ret1w": -1.28,
      "ret1m": -3.15,
      "ret3m": -0.15,
      "ret6m": -2.56,
      "ret1y": 1.46,
      "ret2y": 11.06,
      "ret3y": 41.75
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9916,
      "ret1w": -1.67,
      "ret1m": -5.49,
      "ret3m": 2.18,
      "ret6m": -9.25,
      "ret1y": -7.19,
      "ret2y": 13.18,
      "ret3y": 68.62
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7814,
      "ret1w": -1.15,
      "ret1m": -3.55,
      "ret3m": -1.68,
      "ret6m": -4.88,
      "ret1y": -2.1,
      "ret2y": 5.27,
      "ret3y": 38.67
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5664,
      "ret1w": -1.04,
      "ret1m": -3.14,
      "ret3m": 1.58,
      "ret6m": -5.32,
      "ret1y": -7.69,
      "ret2y": 11.89,
      "ret3y": 55.15
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9587,
      "ret1w": -2.87,
      "ret1m": -7.82,
      "ret3m": -4.41,
      "ret6m": -9.79,
      "ret1y": 6.38,
      "ret2y": 20.69,
      "ret3y": 77.6
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1664,
      "ret1w": 0.23,
      "ret1m": -0.07,
      "ret3m": 0.8,
      "ret6m": 1.89,
      "ret1y": -1.04,
      "ret2y": 4.56,
      "ret3y": 29.27
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.537,
      "ret1w": 0.83,
      "ret1m": 1.47,
      "ret3m": 3.43,
      "ret6m": 4.05,
      "ret1y": 3.05,
      "ret2y": 12.14,
      "ret3y": 31.35
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4271,
      "ret1w": 0.29,
      "ret1m": -2.34,
      "ret3m": 0.14,
      "ret6m": -0.75,
      "ret1y": 15.17,
      "ret2y": 17.95,
      "ret3y": 35.36
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7797,
      "ret1w": -2.14,
      "ret1m": -4.99,
      "ret3m": -1.1,
      "ret6m": -7.68,
      "ret1y": 2.72,
      "ret2y": 14.52,
      "ret3y": 61.79
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1991,
      "ret1w": 0.85,
      "ret1m": -0.6,
      "ret3m": -0.4,
      "ret6m": -3.92,
      "ret1y": 1.4,
      "ret2y": 15.81,
      "ret3y": 54.42
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2007,
      "ret1w": 0.85,
      "ret1m": -0.6,
      "ret3m": -0.4,
      "ret6m": -3.9,
      "ret1y": 1.38,
      "ret2y": 15.61,
      "ret3y": 53.9
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3961,
      "ret1w": -1.44,
      "ret1m": -4.5,
      "ret3m": 0.86,
      "ret6m": -11.31,
      "ret1y": -6.65,
      "ret2y": 3.28,
      "ret3y": 40.86
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4279,
      "ret1w": -1.44,
      "ret1m": -4.49,
      "ret3m": 0.9,
      "ret6m": -11.22,
      "ret1y": -6.47,
      "ret2y": 3.69,
      "ret3y": 42.01
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0093,
      "ret1w": -1.94,
      "ret1m": -6.41,
      "ret3m": -5.01,
      "ret6m": -12.2,
      "ret1y": -2.2,
      "ret2y": 13.4,
      "ret3y": 63.82
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1661,
      "ret1w": 0.0,
      "ret1m": -0.23,
      "ret3m": 0.04,
      "ret6m": -0.35,
      "ret1y": -0.65,
      "ret2y": 1.75,
      "ret3y": 8.12
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1859,
      "ret1w": 0.0,
      "ret1m": -0.23,
      "ret3m": 0.07,
      "ret6m": -0.27,
      "ret1y": -0.5,
      "ret2y": 2.06,
      "ret3y": 8.78
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0842,
      "ret1w": 0.03,
      "ret1m": 0.04,
      "ret3m": 0.17,
      "ret6m": 0.37,
      "ret1y": 0.9,
      "ret2y": 1.85,
      "ret3y": 3.32
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4102,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": -0.04,
      "ret6m": 0.16,
      "ret1y": 0.11,
      "ret2y": 0.53,
      "ret3y": 13.3
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4623,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": -0.01,
      "ret6m": 0.26,
      "ret1y": 0.32,
      "ret2y": 0.94,
      "ret3y": 14.21
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0969,
      "ret1w": -1.2,
      "ret1m": -3.22,
      "ret3m": -0.29,
      "ret6m": 4.19,
      "ret1y": 9.71,
      "ret2y": 20.44,
      "ret3y": 67.03
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2435,
      "ret1w": -0.04,
      "ret1m": -1.27,
      "ret3m": 0.69,
      "ret6m": 0.3,
      "ret1y": 2.29,
      "ret2y": 8.67,
      "ret3y": 54.3
    }
  ],
  "fundHistories": {
    "970185": [
      {
        "date": "2026-07-28",
        "nav": 1.2347
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-07-28",
        "nav": 1.3129
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-07-28",
        "nav": 1.0959
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-07-28",
        "nav": 1.0682
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-07-28",
        "nav": 0.7216
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-07-28",
        "nav": 0.7395
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-07-28",
        "nav": 2.6234
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-07-28",
        "nav": 2.4587
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-07-28",
        "nav": 0.7246
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-07-28",
        "nav": 4.0934
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-07-28",
        "nav": 0.5291
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-07-28",
        "nav": 0.539
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-07-28",
        "nav": 1.2679
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-07-28",
        "nav": 1.1385
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-07-28",
        "nav": 1.3649
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-07-28",
        "nav": 2.9535
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-07-28",
        "nav": 3.406
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-07-28",
        "nav": 1.485
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-07-28",
        "nav": 0.5795
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-07-28",
        "nav": 12.817
      },
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
      }
    ],
    "970205": [
      {
        "date": "2026-07-28",
        "nav": 1.0632
      },
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
      }
    ],
    "970204": [
      {
        "date": "2026-07-28",
        "nav": 1.1113
      },
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
      }
    ],
    "970182": [
      {
        "date": "2026-07-28",
        "nav": 1.0633
      },
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
      }
    ],
    "970170": [
      {
        "date": "2026-07-28",
        "nav": 1.0972
      },
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
      }
    ],
    "970168": [
      {
        "date": "2026-07-28",
        "nav": 1.1064
      },
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
      }
    ],
    "970166": [
      {
        "date": "2026-07-28",
        "nav": 1.0747
      },
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
      }
    ],
    "970165": [
      {
        "date": "2026-07-28",
        "nav": 1.0889
      },
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
      }
    ],
    "952320": [
      {
        "date": "2026-07-28",
        "nav": 1.0527
      },
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
      }
    ],
    "952024": [
      {
        "date": "2026-07-28",
        "nav": 1.1929
      },
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
      }
    ],
    "952020": [
      {
        "date": "2026-07-28",
        "nav": 1.0589
      },
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
      }
    ],
    "952001": [
      {
        "date": "2026-07-28",
        "nav": 1.0441
      },
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
      }
    ],
    "890011": [
      {
        "date": "2026-07-29",
        "nav": 1.1634
      },
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
      }
    ],
    "890005": [
      {
        "date": "2026-07-28",
        "nav": 1.2154
      },
      {
        "date": "2026-07-29",
        "nav": 1.2191
      },
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
      }
    ],
    "881013": [
      {
        "date": "2026-07-28",
        "nav": 1.1307
      },
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
      }
    ],
    "881012": [
      {
        "date": "2026-07-28",
        "nav": 1.2012
      },
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
      }
    ],
    "539002": [
      {
        "date": "2026-07-27",
        "nav": 2.253
      },
      {
        "date": "2026-07-28",
        "nav": 2.088
      },
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
      }
    ],
    "519696": [
      {
        "date": "2026-07-28",
        "nav": 2.8814
      },
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
      }
    ],
    "519601": [
      {
        "date": "2026-07-28",
        "nav": 1.8716
      },
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
      }
    ],
    "501312": [
      {
        "date": "2026-07-28",
        "nav": 2.1421
      },
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
      }
    ],
    "501300": [
      {
        "date": "2026-07-28",
        "nav": 0.939
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "discount": 0.27,
      "nav": 1.2741,
      "price": 1.2741,
      "signal": "正常"
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "discount": 0.27,
      "nav": 1.3552,
      "price": 1.3552,
      "signal": "正常"
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "discount": 0.05,
      "nav": 1.0905,
      "price": 1.0905,
      "signal": "正常"
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "discount": 0.05,
      "nav": 1.0634,
      "price": 1.0634,
      "signal": "正常"
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "discount": 0.14,
      "nav": 0.7119,
      "price": 0.7119,
      "signal": "正常"
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "discount": 0.14,
      "nav": 0.7299,
      "price": 0.7299,
      "signal": "正常"
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "discount": 0.38,
      "nav": 2.7545,
      "price": 2.7545,
      "signal": "正常"
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "discount": 0.23,
      "nav": 2.5074,
      "price": 2.5074,
      "signal": "正常"
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "discount": 0.26,
      "nav": 0.7318,
      "price": 0.7318,
      "signal": "正常"
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "discount": 0.38,
      "nav": 4.1289,
      "price": 4.1289,
      "signal": "正常"
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "discount": 0.26,
      "nav": 0.5015,
      "price": 0.5015,
      "signal": "正常"
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "discount": 0.26,
      "nav": 0.511,
      "price": 0.511,
      "signal": "正常"
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "discount": -0.02,
      "nav": 1.2801,
      "price": 1.2801,
      "signal": "正常"
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "discount": 0.09,
      "nav": 1.1279,
      "price": 1.1279,
      "signal": "正常"
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "discount": 0.28,
      "nav": 1.4146,
      "price": 1.4146,
      "signal": "正常"
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "discount": 0.01,
      "nav": 2.9896,
      "price": 2.9896,
      "signal": "正常"
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "discount": 0.41,
      "nav": 3.261,
      "price": 3.261,
      "signal": "正常"
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "discount": -0.12,
      "nav": 1.4912,
      "price": 1.4912,
      "signal": "正常"
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "discount": 0.39,
      "nav": 0.6298,
      "price": 0.6298,
      "signal": "正常"
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "discount": 0.53,
      "nav": 14.105,
      "price": 14.105,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "maxDrawdown": 8.14,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "maxDrawdown": 8.13,
      "sharpe": -0.69,
      "calmar": -0.69
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "maxDrawdown": 1.46,
      "sharpe": 0.09,
      "calmar": 0.09
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "maxDrawdown": 1.44,
      "sharpe": 0.14,
      "calmar": 0.14
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "maxDrawdown": 4.16,
      "sharpe": -1.9,
      "calmar": -1.9
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "maxDrawdown": 4.14,
      "sharpe": -1.87,
      "calmar": -1.87
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "maxDrawdown": 11.25,
      "sharpe": 2.6,
      "calmar": 2.6
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "maxDrawdown": 7.02,
      "sharpe": 0.06,
      "calmar": 0.06
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "maxDrawdown": 7.9,
      "sharpe": -1.73,
      "calmar": -1.73
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "maxDrawdown": 11.48,
      "sharpe": 1.16,
      "calmar": 1.16
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "maxDrawdown": 7.85,
      "sharpe": -0.35,
      "calmar": -0.35
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "maxDrawdown": 7.85,
      "sharpe": -0.33,
      "calmar": -0.33
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "maxDrawdown": 0.52,
      "sharpe": -0.16,
      "calmar": -0.16
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "maxDrawdown": 2.73,
      "sharpe": -0.98,
      "calmar": -0.98
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "maxDrawdown": 8.25,
      "sharpe": -0.45,
      "calmar": -0.45
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "maxDrawdown": 0.43,
      "sharpe": -1.3,
      "calmar": -1.3
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "maxDrawdown": 12.33,
      "sharpe": 2.44,
      "calmar": 2.44
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "maxDrawdown": 3.5,
      "sharpe": 0.12,
      "calmar": 0.12
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "maxDrawdown": 11.62,
      "sharpe": -0.6,
      "calmar": -0.6
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "maxDrawdown": 15.9,
      "sharpe": 4.29,
      "calmar": 4.29
    }
  ],
  "news": [
    {
      "title": "农业农村部印发《全国农产品产地市场体系发展“十五五”规划》。其中提到，加快衔接国际市场。做好内外贸规则机制对接，扩大农产品检验认证互认范围，鼓励国内优势农产品参与国际竞争。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:57",
      "impact": "neutral"
    },
    {
      "title": "农业农村部印发《全国农产品产地市场体系发展“十五五”规划》，到2030年，契合产业、产需衔接、高效顺畅、内联外通的现代农产品产地市场体系基本建成，农产品供给保障和服务带动小农户能力稳步提升。农产品产地批发市场布局更加合理，交易、冷链、物流等设施持续完善。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:56",
      "impact": "neutral"
    },
    {
      "title": "上海市人民政府印发《上海市加快国际贸易中心建设“十五五”规划》。其中提到，扩大升级类服务消费供给。培育更多带动性强的文体赛事、文博大展、演艺活动，丰富沉浸式互动体验项目。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:31",
      "impact": "neutral"
    },
    {
      "title": "上海市人民政府印发《上海市加快国际贸易中心建设“十五五”规划》。其中提到，创新发展离岸贸易。提升经常项下离岸贸易业务外汇收支便利化水平，推动离岸贸易真实性审核和服务效率统筹兼顾，支持重点区域探索离岸贸易信息平台建设。推进自由贸易账户项下离岸经贸业务试点，深入实施离岸贸易印花税政策。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:15",
      "impact": "neutral"
    },
    {
      "title": "上海市人民政府印发《上海市加快国际贸易中心建设“十五五”规划》。其中提到，加快大宗交易品类拓展。扩大铜、铝等重点金属品类交易规模。加快健全锂、钴、镍等新兴金属期货品种序列。完善新能源品种服务体系，支持临港新片区建设氢基绿色能源交易平台。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:12",
      "impact": "neutral"
    },
    {
      "title": "上海市人民政府印发《上海市加快国际贸易中心建设“十五五”规划》。其中提到，支持外资企业开展本地研发、技术升级和绿色低碳转型。促进外资企业境内再投资，鼓励开展股权投资、并购投资。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:12",
      "impact": "neutral"
    },
    {
      "title": "上海市人民政府印发《上海市加快国际贸易中心建设“十五五”规划》。其中提到，推动重点行业领域转型升级。促进旅行服务与入境消费融合发展，加快发展教育服务贸易，完善邮轮旅游产业链条。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:08",
      "impact": "neutral"
    },
    {
      "title": "上海印发《上海市加快国际贸易中心建设“十五五”规划》，到2030年，上海国际贸易中心核心功能持续跃升。全球贸易枢纽地位不断巩固，贸易结构持续优化、质量显著提升，全球供应链管理功能持续增强，重点大宗商品品类价格国际影响力持续提升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:04",
      "impact": "neutral"
    },
    {
      "title": "·成都住房公积金新政25日起施行最低首付款比例降至15%·长征六号丙遥一运载火箭发射成功SAR双星与泰国卫星同步入轨·国家能源局：截至7月底全国累计发电装机容量同比增长11%·巴基斯坦与伊朗商讨重新开放霍尔木兹海峡·据商务部、外汇局统计数据显示，2026年1-7月，我国全行业对外直接投资6845.1亿元人民币，同比增长2.8%（以美元计为995.3亿美元，增长7.3%）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:01",
      "impact": "neutral"
    },
    {
      "title": "商务部新闻发言人、副部长兼国际贸易谈判副代表凌激8月25日在国新办新闻发布会上介绍，第二十六届中国国际投资贸易洽谈会将于9月8日至11日在福建省厦门市举行。本届投洽会将深耕投资主题，围绕“投资中国”“中国投资”“国际投资”三大板块展开。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:41",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,821/1,589",
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
