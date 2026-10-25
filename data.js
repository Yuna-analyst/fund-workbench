// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-25 14:15:06
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-25 14:15 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-23",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3690.48,
      "change": 32.45,
      "changePct": "+0.89%",
      "high": 3691.4,
      "low": 3574.27,
      "volume": 552842912.0,
      "amount": 898666870000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11673.83,
      "change": 316.51,
      "changePct": "+2.79%",
      "high": 11707.15,
      "low": 11043.31,
      "volume": 690752095.0,
      "amount": 1057616970000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2684.1,
      "change": 107.2,
      "changePct": "+4.16%",
      "high": 2695.08,
      "low": 2494.22,
      "volume": 222875998.0,
      "amount": 534483190000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1345.51,
      "change": 39.64,
      "changePct": "+3.04%",
      "high": 1353.32,
      "low": 1257.29,
      "volume": 10444456.0,
      "amount": 96902720000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4105.33,
      "change": 69.03,
      "changePct": "+1.71%",
      "high": 4109.52,
      "low": 3958.14,
      "volume": 231325213.0,
      "amount": 558204980000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6814.44,
      "change": 159.19,
      "changePct": "+2.39%",
      "high": 6835.39,
      "low": 6440.29,
      "volume": 170824050.0,
      "amount": 336940930000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.48万亿",
      "label": "成交额",
      "rawAmount": 3482815660000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,997/501",
      "label": "涨/跌家数",
      "rawUp": 4997,
      "rawDown": 501,
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
    "totalInflow": 31.79,
    "totalOutflow": 0,
    "netFlow": 31.79,
    "netFlowTrend": [
      6.36,
      12.72,
      19.07,
      25.43,
      31.79
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
      "inflow": 12.36,
      "pct": 2.19
    },
    {
      "name": "半导体",
      "inflow": 4.63,
      "pct": 3.47
    },
    {
      "name": "5G",
      "inflow": 3.51,
      "pct": 2.71
    },
    {
      "name": "芯片",
      "inflow": 2.4,
      "pct": 3.06
    },
    {
      "name": "创新药",
      "inflow": 1.81,
      "pct": 2.4
    },
    {
      "name": "有色",
      "inflow": 1.75,
      "pct": 2.13
    },
    {
      "name": "医疗",
      "inflow": 1.6,
      "pct": 2.45
    },
    {
      "name": "白酒",
      "inflow": 1.52,
      "pct": 2.72
    },
    {
      "name": "军工",
      "inflow": 1.14,
      "pct": 2.22
    },
    {
      "name": "医药",
      "inflow": 1.07,
      "pct": 2.17
    },
    {
      "name": "传媒",
      "inflow": 0.94,
      "pct": 4.23
    },
    {
      "name": "人工智能",
      "inflow": 0.88,
      "pct": 3.59
    },
    {
      "name": "新能源",
      "inflow": 0.67,
      "pct": 2.93
    },
    {
      "name": "云计算",
      "inflow": 0.6,
      "pct": 4.82
    },
    {
      "name": "新能源车",
      "inflow": 0.41,
      "pct": 4.65
    },
    {
      "name": "游戏",
      "inflow": 0.32,
      "pct": 3.32
    },
    {
      "name": "家电",
      "inflow": 0.14,
      "pct": 1.88
    },
    {
      "name": "电子",
      "inflow": 0.12,
      "pct": 2.86
    },
    {
      "name": "计算机",
      "inflow": 0.08,
      "pct": 4.14
    },
    {
      "name": "食品",
      "inflow": 0.07,
      "pct": 1.86
    }
  ],
  "sectors": [
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.501,
      "changePct": 4.82,
      "change": 0.069,
      "turnover": 2.01
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.327,
      "changePct": 4.65,
      "change": 0.059,
      "turnover": 1.36
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.788,
      "changePct": 4.23,
      "change": 0.032,
      "turnover": 3.12
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.057,
      "changePct": 4.14,
      "change": 0.042,
      "turnover": 0.26
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.865,
      "changePct": 3.59,
      "change": 0.03,
      "turnover": 2.93
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.836,
      "changePct": 3.47,
      "change": 0.028,
      "turnover": 15.42
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.997,
      "changePct": 3.32,
      "change": 0.032,
      "turnover": 1.05
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.909,
      "changePct": 3.06,
      "change": 0.027,
      "turnover": 7.99
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.002,
      "changePct": 2.93,
      "change": 0.057,
      "turnover": 2.25
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.684,
      "changePct": 2.86,
      "change": 0.019,
      "turnover": 0.4
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.415,
      "changePct": 2.72,
      "change": 0.011,
      "turnover": 5.06
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.797,
      "changePct": 2.71,
      "change": 0.021,
      "turnover": 11.7
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.334,
      "changePct": 2.45,
      "change": 0.008,
      "turnover": 5.35
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.81,
      "changePct": 2.4,
      "change": 0.019,
      "turnover": 6.04
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.061,
      "changePct": 2.22,
      "change": 0.023,
      "turnover": 3.8
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.514,
      "changePct": 2.19,
      "change": 0.011,
      "turnover": 41.19
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.376,
      "changePct": 2.17,
      "change": 0.008,
      "turnover": 3.56
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.487,
      "changePct": 2.13,
      "change": 0.031,
      "turnover": 5.83
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.352,
      "changePct": 1.88,
      "change": 0.025,
      "turnover": 0.48
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.492,
      "changePct": 1.86,
      "change": 0.009,
      "turnover": 0.24
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.717,
      "changePct": 1.56,
      "change": 0.011,
      "turnover": 1.79
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.166,
      "changePct": 1.48,
      "change": 0.017,
      "turnover": 1.05
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.484,
      "changePct": 1.47,
      "change": 0.007,
      "turnover": 11.07
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.97,
      "changePct": 0.73,
      "change": 0.007,
      "turnover": 0.06
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.709,
      "changePct": 0.42,
      "change": 0.003,
      "turnover": 0.57
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.205,
      "changePct": 0.25,
      "change": 0.003,
      "turnover": 9.44
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.081,
      "changePct": 0.09,
      "change": 0.001,
      "turnover": 0.58
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.849,
      "changePct": -1.62,
      "change": -0.014,
      "turnover": 13.5
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.178,
      "changePct": 1.73,
      "amount": 154.23,
      "netFlow": 38.56
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.422,
      "changePct": 3.27,
      "amount": 151.97,
      "netFlow": 37.99
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.857,
      "changePct": 2.59,
      "amount": 88.31,
      "netFlow": 22.08
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.058,
      "changePct": 1.73,
      "amount": 59.53,
      "netFlow": 14.88
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.869,
      "changePct": 1.16,
      "amount": 36.24,
      "netFlow": 9.06
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.359,
      "changePct": 1.63,
      "amount": 17.91,
      "netFlow": 4.48
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.836,
      "changePct": 3.47,
      "amount": 15.42,
      "netFlow": 3.85
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.484,
      "changePct": 1.47,
      "amount": 11.07,
      "netFlow": 2.77
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.376,
      "changePct": 2.17,
      "amount": 3.56,
      "netFlow": 0.89
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.002,
      "changePct": 2.93,
      "amount": 2.25,
      "netFlow": 0.56
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.178,
      "changePct": 1.73,
      "amount": 154.23,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.869,
      "changePct": 1.16,
      "amount": 36.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.857,
      "changePct": 2.59,
      "amount": 88.31,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.359,
      "changePct": 1.63,
      "amount": 17.91,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.058,
      "changePct": 1.73,
      "amount": 59.53,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "云计算",
      "turnover": 2.01,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 3.12,
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
      "name": "人工智能",
      "turnover": 2.93,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 15.42,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "游戏",
      "turnover": 1.05,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 7.99,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 2.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 5.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 11.7,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医疗",
      "turnover": 5.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 41.19,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 5.83,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.48,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.24,
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
      "nav": 4.0946,
      "ret1w": 5.51,
      "ret1m": 7.8,
      "ret3m": -14.38,
      "ret6m": -1.84,
      "ret1y": -10.66,
      "ret2y": 6.58,
      "ret3y": 100.2
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.2391,
      "ret1w": 1.79,
      "ret1m": -3.8,
      "ret3m": -23.08,
      "ret6m": -25.05,
      "ret1y": -31.53,
      "ret2y": -17.57,
      "ret3y": 11.21
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.1836,
      "ret1w": 1.08,
      "ret1m": -5.88,
      "ret3m": -31.9,
      "ret6m": -15.9,
      "ret1y": -16.58,
      "ret2y": 29.56,
      "ret3y": 116.35
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7123,
      "ret1w": 2.11,
      "ret1m": 0.88,
      "ret3m": 2.58,
      "ret6m": 1.11,
      "ret1y": -4.11,
      "ret2y": -12.26,
      "ret3y": -6.55
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9687,
      "ret1w": 2.49,
      "ret1m": 2.39,
      "ret3m": -2.02,
      "ret6m": -10.13,
      "ret1y": -30.49,
      "ret2y": -29.43,
      "ret3y": -20.06
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5747,
      "ret1w": 1.9,
      "ret1m": -0.92,
      "ret3m": -4.99,
      "ret6m": -4.49,
      "ret1y": -25.39,
      "ret2y": -25.83,
      "ret3y": 4.59
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1876,
      "ret1w": 2.6,
      "ret1m": -0.16,
      "ret3m": -2.9,
      "ret6m": -6.19,
      "ret1y": -9.84,
      "ret2y": 0.05,
      "ret3y": 26.26
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.726,
      "ret1w": 2.25,
      "ret1m": -0.63,
      "ret3m": -13.66,
      "ret6m": -3.58,
      "ret1y": -16.46,
      "ret2y": -6.55,
      "ret3y": 33.8
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1764,
      "ret1w": 2.57,
      "ret1m": -0.86,
      "ret3m": -13.69,
      "ret6m": -12.09,
      "ret1y": -17.07,
      "ret2y": -6.52,
      "ret3y": 9.65
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.728,
      "ret1w": 1.22,
      "ret1m": -2.01,
      "ret3m": -21.74,
      "ret6m": -23.22,
      "ret1y": -10.14,
      "ret2y": 30.15,
      "ret3y": 127.9
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.104,
      "ret1w": 2.32,
      "ret1m": -0.27,
      "ret3m": 0.45,
      "ret6m": 2.79,
      "ret1y": -4.0,
      "ret2y": -13.07,
      "ret3y": -14.75
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.277,
      "ret1w": 2.15,
      "ret1m": 1.24,
      "ret3m": -7.59,
      "ret6m": 0.98,
      "ret1y": -13.59,
      "ret2y": -11.19,
      "ret3y": 7.15
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.3053,
      "ret1w": 0.55,
      "ret1m": -11.23,
      "ret3m": -26.45,
      "ret6m": -32.82,
      "ret1y": -57.04,
      "ret2y": -52.73,
      "ret3y": -29.99
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8548,
      "ret1w": 1.7,
      "ret1m": -0.12,
      "ret3m": -2.31,
      "ret6m": -3.34,
      "ret1y": 2.48,
      "ret2y": -5.38,
      "ret3y": -7.48
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4745,
      "ret1w": 1.69,
      "ret1m": -1.05,
      "ret3m": -13.35,
      "ret6m": -5.75,
      "ret1y": -14.73,
      "ret2y": -4.17,
      "ret3y": 30.26
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.7573,
      "ret1w": 1.89,
      "ret1m": -4.07,
      "ret3m": -28.88,
      "ret6m": -28.88,
      "ret1y": -26.18,
      "ret2y": 34.82,
      "ret3y": 72.84
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5308,
      "ret1w": 1.09,
      "ret1m": -1.07,
      "ret3m": -2.82,
      "ret6m": 1.67,
      "ret1y": -6.34,
      "ret2y": -6.55,
      "ret3y": 0.54
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.952,
      "ret1w": 2.81,
      "ret1m": 1.49,
      "ret3m": -10.19,
      "ret6m": -12.18,
      "ret1y": -4.61,
      "ret2y": -13.06,
      "ret3y": -15.15
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3133,
      "ret1w": 0.71,
      "ret1m": -1.12,
      "ret3m": 1.65,
      "ret6m": -0.57,
      "ret1y": -4.46,
      "ret2y": 0.51,
      "ret3y": 2.27
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2265,
      "ret1w": 1.41,
      "ret1m": -0.07,
      "ret3m": -8.86,
      "ret6m": -1.26,
      "ret1y": -4.97,
      "ret2y": 5.66,
      "ret3y": 45.82
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.0517,
      "ret1w": 2.5,
      "ret1m": -1.19,
      "ret3m": -16.64,
      "ret6m": -18.54,
      "ret1y": -22.06,
      "ret2y": -7.49,
      "ret3y": 12.3
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.1194,
      "ret1w": 2.52,
      "ret1m": -1.18,
      "ret3m": -16.61,
      "ret6m": -18.45,
      "ret1y": -21.91,
      "ret2y": -7.13,
      "ret3y": 13.21
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0553,
      "ret1w": 0.49,
      "ret1m": -0.19,
      "ret3m": -2.13,
      "ret6m": -4.64,
      "ret1y": -3.99,
      "ret2y": -1.73,
      "ret3y": 3.4
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0301,
      "ret1w": 0.49,
      "ret1m": -0.17,
      "ret3m": -2.08,
      "ret6m": -4.49,
      "ret1y": -3.69,
      "ret2y": -1.13,
      "ret3y": 4.65
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6952,
      "ret1w": 2.04,
      "ret1m": 0.03,
      "ret3m": -1.95,
      "ret6m": -4.81,
      "ret1y": -13.14,
      "ret2y": -13.48,
      "ret3y": -4.57
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7133,
      "ret1w": 2.03,
      "ret1m": 0.04,
      "ret3m": -1.91,
      "ret6m": -4.68,
      "ret1y": -12.92,
      "ret2y": -13.04,
      "ret3y": -3.62
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.2819,
      "ret1w": 1.38,
      "ret1m": -4.09,
      "ret3m": -21.09,
      "ret6m": -20.45,
      "ret1y": -11.39,
      "ret2y": 25.14,
      "ret3y": 96.99
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3423,
      "ret1w": 2.95,
      "ret1m": 2.26,
      "ret3m": -7.66,
      "ret6m": -7.46,
      "ret1y": -6.32,
      "ret2y": 9.36,
      "ret3y": 50.66
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7154,
      "ret1w": 4.16,
      "ret1m": 5.08,
      "ret3m": -2.04,
      "ret6m": -2.96,
      "ret1y": -19.67,
      "ret2y": -10.47,
      "ret3y": -0.53
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.0726,
      "ret1w": 4.64,
      "ret1m": 7.96,
      "ret3m": -5.92,
      "ret6m": -4.5,
      "ret1y": 7.0,
      "ret2y": 31.77,
      "ret3y": 99.79
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4656,
      "ret1w": -0.34,
      "ret1m": -1.13,
      "ret3m": -8.9,
      "ret6m": -13.47,
      "ret1y": -10.06,
      "ret2y": 1.39,
      "ret3y": 23.8
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4748,
      "ret1w": -0.34,
      "ret1m": -1.1,
      "ret3m": -8.87,
      "ret6m": -13.39,
      "ret1y": -9.89,
      "ret2y": 1.8,
      "ret3y": 24.78
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2515,
      "ret1w": 0.16,
      "ret1m": -1.33,
      "ret3m": -1.22,
      "ret6m": -1.85,
      "ret1y": -3.37,
      "ret2y": -2.74,
      "ret3y": -0.32
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0838,
      "ret1w": 0.87,
      "ret1m": -1.3,
      "ret3m": -2.83,
      "ret6m": -5.72,
      "ret1y": -6.69,
      "ret2y": -7.34,
      "ret3y": 1.71
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1634,
      "ret1w": 0.86,
      "ret1m": -3.32,
      "ret3m": -15.68,
      "ret6m": -18.19,
      "ret1y": -22.75,
      "ret2y": -26.65,
      "ret3y": -16.6
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8253,
      "ret1w": 0.95,
      "ret1m": -1.92,
      "ret3m": -6.24,
      "ret6m": -4.71,
      "ret1y": -12.69,
      "ret2y": 2.37,
      "ret3y": 27.82
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.538,
      "ret1w": 1.56,
      "ret1m": -4.41,
      "ret3m": -25.72,
      "ret6m": -33.49,
      "ret1y": -28.33,
      "ret2y": 20.34,
      "ret3y": 89.4
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5076,
      "ret1w": -0.61,
      "ret1m": -1.91,
      "ret3m": 1.14,
      "ret6m": 1.87,
      "ret1y": -0.59,
      "ret2y": -1.78,
      "ret3y": -2.32
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5329,
      "ret1w": 1.12,
      "ret1m": 0.11,
      "ret3m": -12.92,
      "ret6m": -11.71,
      "ret1y": -25.8,
      "ret2y": -9.65,
      "ret3y": -5.98
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 10.895,
      "ret1w": 0.39,
      "ret1m": -4.81,
      "ret3m": -27.69,
      "ret6m": -21.22,
      "ret1y": -4.58,
      "ret2y": 54.76,
      "ret3y": 164.63
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0553,
      "ret1w": 0.1,
      "ret1m": -0.11,
      "ret3m": -1.12,
      "ret6m": -1.36,
      "ret1y": -1.46,
      "ret2y": 0.06,
      "ret3y": 2.86
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1036,
      "ret1w": 0.11,
      "ret1m": -0.12,
      "ret3m": -1.12,
      "ret6m": -1.31,
      "ret1y": -1.34,
      "ret2y": 0.29,
      "ret3y": 3.53
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0676,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.45,
      "ret1y": 0.7,
      "ret2y": 1.7,
      "ret3y": 3.15
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.102,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.19,
      "ret6m": 0.44,
      "ret1y": 0.77,
      "ret2y": 1.62,
      "ret3y": 3.95
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1118,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.22,
      "ret6m": 0.5,
      "ret1y": 0.88,
      "ret2y": 1.83,
      "ret3y": 4.39
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0782,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.34,
      "ret1y": 0.63,
      "ret2y": 1.55,
      "ret3y": 3.18
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0931,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.16,
      "ret6m": 0.4,
      "ret1y": 0.77,
      "ret2y": 1.86,
      "ret3y": 3.83
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0205,
      "ret1w": 0.72,
      "ret1m": -0.48,
      "ret3m": -4.65,
      "ret6m": -4.29,
      "ret1y": -5.32,
      "ret2y": 1.04,
      "ret3y": 5.81
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.176,
      "ret1w": 0.67,
      "ret1m": -0.27,
      "ret3m": -4.54,
      "ret6m": -2.51,
      "ret1y": -5.12,
      "ret2y": -1.5,
      "ret3y": 1.48
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0275,
      "ret1w": 0.72,
      "ret1m": -0.46,
      "ret3m": -4.62,
      "ret6m": -4.2,
      "ret1y": -5.14,
      "ret2y": 1.45,
      "ret3y": 6.66
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0454,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.19,
      "ret6m": 0.5,
      "ret1y": 0.87,
      "ret2y": 1.85,
      "ret3y": 3.73
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1234,
      "ret1w": 0.35,
      "ret1m": -0.6,
      "ret3m": -4.63,
      "ret6m": -4.45,
      "ret1y": -7.24,
      "ret2y": -4.54,
      "ret3y": 1.75
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1992,
      "ret1w": 0.22,
      "ret1m": -0.02,
      "ret3m": -0.65,
      "ret6m": -1.67,
      "ret1y": -2.62,
      "ret2y": 1.03,
      "ret3y": 9.4
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1208,
      "ret1w": 0.22,
      "ret1m": -0.13,
      "ret3m": -1.66,
      "ret6m": -1.3,
      "ret1y": -1.44,
      "ret2y": 1.09,
      "ret3y": 6.77
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1918,
      "ret1w": 0.24,
      "ret1m": -0.12,
      "ret3m": -1.62,
      "ret6m": -1.2,
      "ret1y": -1.24,
      "ret2y": 1.52,
      "ret3y": 7.67
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.066,
      "ret1w": -6.01,
      "ret1m": -5.14,
      "ret3m": -18.6,
      "ret6m": -14.87,
      "ret1y": 2.43,
      "ret2y": 51.91,
      "ret3y": 101.36
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9457,
      "ret1w": -1.48,
      "ret1m": -1.77,
      "ret3m": -2.82,
      "ret6m": 1.01,
      "ret1y": 3.59,
      "ret2y": 6.62,
      "ret3y": 27.76
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6465,
      "ret1w": -3.26,
      "ret1m": -3.45,
      "ret3m": -10.15,
      "ret6m": -13.31,
      "ret1y": -21.49,
      "ret2y": -10.44,
      "ret3y": 16.36
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2798,
      "ret1w": -3.54,
      "ret1m": -3.61,
      "ret3m": -9.74,
      "ret6m": 1.94,
      "ret1y": 6.05,
      "ret2y": 11.04,
      "ret3y": 59.5
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9226,
      "ret1w": 0.59,
      "ret1m": 0.34,
      "ret3m": -0.21,
      "ret6m": -1.54,
      "ret1y": -3.11,
      "ret2y": -6.1,
      "ret3y": -2.3
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.3503,
      "ret1w": -4.68,
      "ret1m": -5.97,
      "ret3m": -15.01,
      "ret6m": -13.2,
      "ret1y": -0.81,
      "ret2y": 24.15,
      "ret3y": 66.33
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.452,
      "ret1w": -1.55,
      "ret1m": -1.37,
      "ret3m": -2.96,
      "ret6m": -2.82,
      "ret1y": -0.96,
      "ret2y": 2.87,
      "ret3y": 14.39
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.806,
      "ret1w": -4.84,
      "ret1m": -1.59,
      "ret3m": -17.67,
      "ret6m": -16.65,
      "ret1y": -31.11,
      "ret2y": -30.87,
      "ret3y": -14.53
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.5108,
      "ret1w": -3.87,
      "ret1m": -3.58,
      "ret3m": -15.7,
      "ret6m": -11.72,
      "ret1y": -0.13,
      "ret2y": 48.41,
      "ret3y": 112.98
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.55,
      "ret1w": -2.43,
      "ret1m": -1.89,
      "ret3m": -2.59,
      "ret6m": 6.06,
      "ret1y": 1.04,
      "ret2y": 27.98,
      "ret3y": 45.16
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6121,
      "ret1w": -2.55,
      "ret1m": -1.73,
      "ret3m": -9.07,
      "ret6m": -4.28,
      "ret1y": 0.62,
      "ret2y": 14.38,
      "ret3y": 40.99
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1929,
      "ret1w": -2.24,
      "ret1m": -1.96,
      "ret3m": -10.02,
      "ret6m": -6.83,
      "ret1y": -7.12,
      "ret2y": 0.69,
      "ret3y": 20.18
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.249,
      "ret1w": 1.05,
      "ret1m": 1.05,
      "ret3m": -0.56,
      "ret6m": -6.51,
      "ret1y": -3.03,
      "ret2y": -1.5,
      "ret3y": -11.9
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.921,
      "ret1w": -2.19,
      "ret1m": -2.93,
      "ret3m": -7.11,
      "ret6m": -3.71,
      "ret1y": -16.33,
      "ret2y": -6.93,
      "ret3y": 31.03
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.5897,
      "ret1w": -4.61,
      "ret1m": -5.79,
      "ret3m": -14.66,
      "ret6m": -13.1,
      "ret1y": -3.61,
      "ret2y": 22.79,
      "ret3y": 47.19
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0158,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.31,
      "ret6m": 0.71,
      "ret1y": 1.28,
      "ret2y": 2.54,
      "ret3y": 3.96
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.015,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.34,
      "ret6m": 0.75,
      "ret1y": 1.31,
      "ret2y": 2.62,
      "ret3y": 4.13
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.248,
      "ret1w": 2.3,
      "ret1m": -0.87,
      "ret3m": -10.92,
      "ret6m": -15.96,
      "ret1y": -17.3,
      "ret2y": -12.73,
      "ret3y": 1.3
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.405,
      "ret1w": 2.51,
      "ret1m": -1.68,
      "ret3m": -14.14,
      "ret6m": -16.32,
      "ret1y": -19.57,
      "ret2y": -8.42,
      "ret3y": 12.86
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4923,
      "ret1w": 1.48,
      "ret1m": -2.52,
      "ret3m": -8.4,
      "ret6m": -8.67,
      "ret1y": -17.5,
      "ret2y": 0.94,
      "ret3y": 35.79
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.9101,
      "ret1w": 1.59,
      "ret1m": -1.66,
      "ret3m": -10.1,
      "ret6m": -11.6,
      "ret1y": -11.52,
      "ret2y": -3.09,
      "ret3y": 11.32
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9659,
      "ret1w": 1.59,
      "ret1m": -1.66,
      "ret3m": -10.07,
      "ret6m": -11.51,
      "ret1y": -11.34,
      "ret2y": -2.7,
      "ret3y": 12.21
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7707,
      "ret1w": 2.26,
      "ret1m": 0.63,
      "ret3m": -11.96,
      "ret6m": -11.4,
      "ret1y": -16.54,
      "ret2y": -3.68,
      "ret3y": 18.54
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6166,
      "ret1w": 1.67,
      "ret1m": -1.39,
      "ret3m": -8.5,
      "ret6m": -12.17,
      "ret1y": -12.56,
      "ret2y": -8.89,
      "ret3y": 6.13
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4796,
      "ret1w": 1.97,
      "ret1m": 0.89,
      "ret3m": -5.92,
      "ret6m": -6.21,
      "ret1y": -12.41,
      "ret2y": 0.96,
      "ret3y": 25.32
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.6166,
      "ret1w": 2.71,
      "ret1m": -2.49,
      "ret3m": -17.21,
      "ret6m": -22.48,
      "ret1y": -18.85,
      "ret2y": -10.01,
      "ret3y": 17.49
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9923,
      "ret1w": 1.59,
      "ret1m": -1.9,
      "ret3m": -5.16,
      "ret6m": -8.28,
      "ret1y": -10.03,
      "ret2y": -9.76,
      "ret3y": 3.05
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4927,
      "ret1w": -0.03,
      "ret1m": 0.03,
      "ret3m": 0.17,
      "ret6m": -0.38,
      "ret1y": 0.21,
      "ret2y": 8.09,
      "ret3y": 27.83
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.363,
      "ret1w": -2.52,
      "ret1m": -3.08,
      "ret3m": -5.69,
      "ret6m": -1.35,
      "ret1y": 4.95,
      "ret2y": 8.97,
      "ret3y": 29.22
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.3421,
      "ret1w": 2.52,
      "ret1m": -2.87,
      "ret3m": -13.89,
      "ret6m": -18.28,
      "ret1y": -20.78,
      "ret2y": -10.66,
      "ret3y": 9.71
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0274,
      "ret1w": 0.0,
      "ret1m": -2.56,
      "ret3m": -14.21,
      "ret6m": -14.66,
      "ret1y": -16.12,
      "ret2y": -7.7,
      "ret3y": 16.3
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0309,
      "ret1w": 0.0,
      "ret1m": -2.42,
      "ret3m": -14.08,
      "ret6m": -14.48,
      "ret1y": -15.95,
      "ret2y": -7.53,
      "ret3y": 16.04
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2304,
      "ret1w": -2.19,
      "ret1m": -2.65,
      "ret3m": -12.81,
      "ret6m": -12.54,
      "ret1y": -18.97,
      "ret2y": -10.62,
      "ret3y": 8.06
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2592,
      "ret1w": -2.19,
      "ret1m": -2.64,
      "ret3m": -12.79,
      "ret6m": -12.45,
      "ret1y": -18.8,
      "ret2y": -10.26,
      "ret3y": 8.93
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7392,
      "ret1w": -2.28,
      "ret1m": -2.78,
      "ret3m": -14.38,
      "ret6m": -19.23,
      "ret1y": -20.13,
      "ret2y": -7.56,
      "ret3y": 21.72
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1596,
      "ret1w": 0.19,
      "ret1m": 0.27,
      "ret3m": -0.38,
      "ret6m": -0.61,
      "ret1y": -0.63,
      "ret2y": 1.26,
      "ret3y": 5.62
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1799,
      "ret1w": 0.19,
      "ret1m": 0.27,
      "ret3m": -0.35,
      "ret6m": -0.53,
      "ret1y": -0.49,
      "ret2y": 1.57,
      "ret3y": 6.26
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0881,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.19,
      "ret6m": 0.53,
      "ret1y": 0.85,
      "ret2y": 2.01,
      "ret3y": 3.74
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4122,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.18,
      "ret6m": 0.09,
      "ret1y": 0.15,
      "ret2y": 0.76,
      "ret3y": 5.69
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4653,
      "ret1w": 0.0,
      "ret1m": 0.07,
      "ret3m": 0.21,
      "ret6m": 0.19,
      "ret1y": 0.35,
      "ret2y": 1.17,
      "ret3y": 6.54
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9491,
      "ret1w": 1.17,
      "ret1m": 0.27,
      "ret3m": -8.5,
      "ret6m": -7.7,
      "ret1y": 1.95,
      "ret2y": 13.31,
      "ret3y": 38.4
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.074,
      "ret1w": 2.01,
      "ret1m": -0.43,
      "ret3m": -12.15,
      "ret6m": -13.45,
      "ret1y": -11.47,
      "ret2y": -5.17,
      "ret3y": 16.78
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 3.8807
      },
      {
        "date": "2026-10-23",
        "nav": 4.0946
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 3.182
      },
      {
        "date": "2026-10-23",
        "nav": 3.2391
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 4.1388
      },
      {
        "date": "2026-10-23",
        "nav": 4.1836
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.6976
      },
      {
        "date": "2026-10-23",
        "nav": 0.7123
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.9208
      },
      {
        "date": "2026-10-23",
        "nav": 1.9687
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.5268
      },
      {
        "date": "2026-10-23",
        "nav": 2.5747
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 5.0562
      },
      {
        "date": "2026-10-23",
        "nav": 5.1876
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.688
      },
      {
        "date": "2026-10-23",
        "nav": 1.726
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.1469
      },
      {
        "date": "2026-10-23",
        "nav": 1.1764
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.695
      },
      {
        "date": "2026-10-23",
        "nav": 2.728
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.079
      },
      {
        "date": "2026-10-23",
        "nav": 1.104
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.229
      },
      {
        "date": "2026-10-23",
        "nav": 2.277
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.2982
      },
      {
        "date": "2026-10-23",
        "nav": 1.3053
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.8238
      },
      {
        "date": "2026-10-23",
        "nav": 1.8548
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.45
      },
      {
        "date": "2026-10-23",
        "nav": 1.4745
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.7247
      },
      {
        "date": "2026-10-23",
        "nav": 1.7573
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.5035
      },
      {
        "date": "2026-10-23",
        "nav": 2.5308
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.926
      },
      {
        "date": "2026-10-23",
        "nav": 0.952
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.2969
      },
      {
        "date": "2026-10-23",
        "nav": 2.3133
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.2094
      },
      {
        "date": "2026-10-23",
        "nav": 1.2265
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.026
      },
      {
        "date": "2026-10-23",
        "nav": 1.0517
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.0919
      },
      {
        "date": "2026-10-23",
        "nav": 1.1194
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.0502
      },
      {
        "date": "2026-10-23",
        "nav": 1.0553
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.0251
      },
      {
        "date": "2026-10-23",
        "nav": 1.0301
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.6813
      },
      {
        "date": "2026-10-23",
        "nav": 0.6952
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.6991
      },
      {
        "date": "2026-10-23",
        "nav": 0.7133
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.2509
      },
      {
        "date": "2026-10-23",
        "nav": 2.2819
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.2751
      },
      {
        "date": "2026-10-23",
        "nav": 2.3423
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.6868
      },
      {
        "date": "2026-10-23",
        "nav": 0.7154
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 3.8921
      },
      {
        "date": "2026-10-23",
        "nav": 4.0726
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.4672
      },
      {
        "date": "2026-10-23",
        "nav": 0.4656
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.4764
      },
      {
        "date": "2026-10-23",
        "nav": 0.4748
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.2495
      },
      {
        "date": "2026-10-23",
        "nav": 1.2515
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.0745
      },
      {
        "date": "2026-10-23",
        "nav": 1.0838
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.1535
      },
      {
        "date": "2026-10-23",
        "nav": 1.1634
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.7987
      },
      {
        "date": "2026-10-23",
        "nav": 2.8253
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 2.499
      },
      {
        "date": "2026-10-23",
        "nav": 2.538
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 1.5168
      },
      {
        "date": "2026-10-23",
        "nav": 1.5076
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 0.527
      },
      {
        "date": "2026-10-23",
        "nav": 0.5329
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-10-22",
        "nav": 10.853
      },
      {
        "date": "2026-10-23",
        "nav": 10.895
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.39,
      "nav": 4.0946,
      "price": 4.0946,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 3.2391,
      "price": 3.2391,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.29,
      "nav": 4.1836,
      "price": 4.1836,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.04,
      "nav": 0.7123,
      "price": 0.7123,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 1.9687,
      "price": 1.9687,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.5747,
      "price": 2.5747,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 5.1876,
      "price": 5.1876,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.726,
      "price": 1.726,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.1764,
      "price": 1.1764,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 2.728,
      "price": 2.728,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.104,
      "price": 1.104,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 2.277,
      "price": 2.277,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.56,
      "nav": 1.3053,
      "price": 1.3053,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.01,
      "nav": 1.8548,
      "price": 1.8548,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 1.4745,
      "price": 1.4745,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.7573,
      "price": 1.7573,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.5308,
      "price": 2.5308,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 0.952,
      "price": 0.952,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.3133,
      "price": 2.3133,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.0,
      "nav": 1.2265,
      "price": 1.2265,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 11.7,
      "sharpe": -0.83,
      "calmar": -0.83
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 5.7,
      "sharpe": -3.58,
      "calmar": -3.58
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 8.82,
      "sharpe": -1.52,
      "calmar": -1.52
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.32,
      "sharpe": -0.7,
      "calmar": -0.7
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 3.58,
      "sharpe": -4.13,
      "calmar": -4.13
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 1.38,
      "sharpe": -4.29,
      "calmar": -4.29
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.24,
      "sharpe": -1.91,
      "calmar": -1.91
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.95,
      "sharpe": -2.92,
      "calmar": -2.92
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.29,
      "sharpe": -2.91,
      "calmar": -2.91
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 3.01,
      "sharpe": -1.45,
      "calmar": -1.45
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -0.76,
      "calmar": -0.76
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 1.86,
      "sharpe": -2.18,
      "calmar": -2.18
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 16.84,
      "sharpe": -3.51,
      "calmar": -3.51
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.18,
      "sharpe": 0.48,
      "calmar": 0.48
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.58,
      "sharpe": -2.43,
      "calmar": -2.43
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.11,
      "sharpe": -2.89,
      "calmar": -2.89
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.6,
      "sharpe": -1.04,
      "calmar": -1.04
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 2.23,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.68,
      "sharpe": -0.73,
      "calmar": -0.73
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 0.11,
      "sharpe": -0.98,
      "calmar": -0.98
    }
  ],
  "news": [
    {
      "title": "近日，多家沪市主板公司披露经营业绩、订单等公告，覆盖交通基建、能源资源、高端制造等多个行业。叠加国内宏观经济稳中有进、产业政策持续加码，机构人士认为，企业盈利修复态势明确，A股市场的结构性机会与长期投资价值将进一步凸显。行业景气呈现多点开花特征从已披露三季报的沪市主板公司看，行业景气呈现多点开花特征，传统行业盈利修复与新兴产业高速增长形成合力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:49",
      "impact": "neutral"
    },
    {
      "title": "坐落在东方明珠电视塔旁的黄金地段、建成于1994年的港务大厦，即将迁往新址。大厦腾退后，原址将新增一处面向黄浦江的开放空间，并打造地标性公共空间“明珠广场”，成为一处面向江面、串联两岸视野的城市大舞台。10月25日，上海首批10个商务楼宇更新试点单元之一，《小陆家嘴商务单元更新提升规划暨LJZ-01单元控制性详细规划》，正式发布。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:48",
      "impact": "neutral"
    },
    {
      "title": "周日重大事件汇总",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:29",
      "impact": "neutral"
    },
    {
      "title": "稳定新出生人口，政策大有可为。10月23日召开的国务院常务会议提出，要加快建设生育友好型社会，持续完善婚嫁、生育、养育、教育等政策，优化面向家庭的财税、社保、住房等支持举措，努力稳定新出生人口规模。高层定调之下，住房政策被置于人口发展战略的重要位置，财税支持也被视为降低家庭生育养育成本的关键抓手。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:08",
      "impact": "neutral"
    },
    {
      "title": "《科创板日报》10月25日讯（记者陈俊清）进入2026年四季度，A股生物医药板块在政策红利与出海交易催化下，呈现轮动修复特征。近日，《科创板日报》记者从恒瑞医药、荣昌生物、北芯生命等企业方面获悉，医药健康产业作为关系国计民生和国家安全的战略性新兴产业，随着政策体系持续完善、支付环境不断优化、全球合作深度拓展，行业持续向好的长期发展基础正不断夯实。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:03",
      "impact": "neutral"
    },
    {
      "title": "探寻一切可控的确定性，正成为人工智能应用的重要诉求。日前，国务院办公厅印发《关于适应人工智能技术发展助力构建就业友好型发展方式的意见》，明确在强化人工智能的就业创造效应、构建就业友好型人工智能升级路径、提升劳动者数字素养和就业能力等六个方面部署了18项主要任务，旨在构建就业友好型发展方式，缓冲人工智能给经济社会带来的不可逆的重塑重构影响。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:57",
      "impact": "neutral"
    },
    {
      "title": "下周，修订后的上证系列综合指数编制方案以及北交所部分交易新规将实施，9月工业企业利润、10月PMI（采购经理指数）将发布，美联储将公布利率决议，多家A股龙头公司将公布三季报，谷歌、微软最新财报将公布。工业企业利润数据、PMI即将发布10月27日（周二），国家统计局将公布9月工业经济效益月度报告。10月30日（周五），国家统计局将发布规模以上文化及相关产业生产经营季度报告。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:28",
      "impact": "neutral"
    },
    {
      "title": "一张门店座位的使用规则，让星巴克“消费入座”持续刷屏热搜。10月22日，在每日经济新闻主办的“2026食饮消费大会”现场，当听众捧起现场的咖啡，这一热门话题也被频频谈及。一张小小的桌牌，掀起广泛的讨论，足见食品饮料赛道嵌入大众日常生活的深度。正所谓“一味寻常，万象其中”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:09",
      "impact": "neutral"
    },
    {
      "title": "从公积金额度提高、财税补贴、到保障房分配支持......近年来，住房与人口联动的政策密集出台，一场围绕“小家庭”的支持政策在多地展开。10月23日，国务院常务会议再次提出，要持续完善婚嫁、生育、养育、教育等政策，优化面向家庭的财税、社保、住房等支持举措，努力稳定新出生人口规模。高层会议定调之下，住房政策被置于人口发展战略的重要位置。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:46",
      "impact": "neutral"
    },
    {
      "title": "日前，最高人民检察院举行“高质效办好行政生效裁判监督案件”新闻发布会。会上介绍，近年来，检察机关通过抗诉、再审检察建议推动公正司法、规范执法，平等保护各类经营主体合法权益。其中一项工作是“持续推动解决‘过罚不当’问题”，重点举例监督纠正及防范“小过重罚”行为。值得注意的是，最高检在介绍中将“小过重罚”与“重过小罚”并列，称之为需要持续推动解决的突出问题。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:48",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 57,
    "label": "中性",
    "upDownRatio": "4,997/501",
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
