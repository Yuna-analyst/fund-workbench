// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-27 19:25:47
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-27 19:25 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-27",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3606.49,
      "change": 129.61,
      "changePct": "+3.73%",
      "high": 3610.72,
      "low": 3467.41,
      "volume": 634626966.0,
      "amount": 929777240000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10814.02,
      "change": 729.98,
      "changePct": "+7.24%",
      "high": 10814.19,
      "low": 10075.83,
      "volume": 761605757.0,
      "amount": 1070017210000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2443.96,
      "change": 254.14,
      "changePct": "+11.61%",
      "high": 2444.6,
      "low": 2199.23,
      "volume": 237230124.0,
      "amount": 544049680000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1346.25,
      "change": 176.26,
      "changePct": "+15.07%",
      "high": 1347.62,
      "low": 1174.13,
      "volume": 14328750.0,
      "amount": 131589970000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4063.06,
      "change": 162.51,
      "changePct": "+4.17%",
      "high": 4067.01,
      "low": 3883.8,
      "volume": 256763815.0,
      "amount": 614337440000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6313.63,
      "change": 450.29,
      "changePct": "+7.68%",
      "high": 6315.72,
      "low": 5877.16,
      "volume": 184064842.0,
      "amount": 332814830000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.62万亿",
      "label": "成交额",
      "rawAmount": 3622586370000.0,
      "change": ""
    },
    "upDown": {
      "val": "5,300/0",
      "label": "涨/跌家数",
      "rawUp": 5300,
      "rawDown": 0,
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
    "totalInflow": 34.77,
    "totalOutflow": 0,
    "netFlow": 34.77,
    "netFlowTrend": [
      6.95,
      13.91,
      20.86,
      27.82,
      34.77
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
      "inflow": 12.09,
      "pct": 9.92
    },
    {
      "name": "券商",
      "inflow": 5.09,
      "pct": 6.21
    },
    {
      "name": "半导体",
      "inflow": 3.89,
      "pct": 10.06
    },
    {
      "name": "5G",
      "inflow": 2.9,
      "pct": 10.05
    },
    {
      "name": "芯片",
      "inflow": 2.03,
      "pct": 10.0
    },
    {
      "name": "有色",
      "inflow": 1.96,
      "pct": 6.24
    },
    {
      "name": "传媒",
      "inflow": 1.88,
      "pct": 6.81
    },
    {
      "name": "创新药",
      "inflow": 1.82,
      "pct": 5.43
    },
    {
      "name": "医疗",
      "inflow": 1.78,
      "pct": 5.03
    },
    {
      "name": "医药",
      "inflow": 1.33,
      "pct": 3.47
    },
    {
      "name": "军工",
      "inflow": 1.19,
      "pct": 7.72
    },
    {
      "name": "人工智能",
      "inflow": 0.94,
      "pct": 9.97
    },
    {
      "name": "光伏",
      "inflow": 0.56,
      "pct": 6.79
    },
    {
      "name": "新能源车",
      "inflow": 0.42,
      "pct": 7.32
    },
    {
      "name": "新能源",
      "inflow": 0.42,
      "pct": 7.08
    },
    {
      "name": "云计算",
      "inflow": 0.4,
      "pct": 10.01
    },
    {
      "name": "游戏",
      "inflow": 0.4,
      "pct": 6.37
    },
    {
      "name": "地产",
      "inflow": 0.26,
      "pct": 4.78
    },
    {
      "name": "电子",
      "inflow": 0.11,
      "pct": 10.04
    },
    {
      "name": "计算机",
      "inflow": 0.05,
      "pct": 9.92
    }
  ],
  "sectors": [
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.766,
      "changePct": 10.06,
      "change": 0.07,
      "turnover": 12.97
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.657,
      "changePct": 10.05,
      "change": 0.06,
      "turnover": 9.65
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.625,
      "changePct": 10.04,
      "change": 0.057,
      "turnover": 0.38
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.341,
      "changePct": 10.01,
      "change": 0.122,
      "turnover": 1.34
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.836,
      "changePct": 10.0,
      "change": 0.076,
      "turnover": 6.77
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.761,
      "changePct": 9.97,
      "change": 0.069,
      "turnover": 3.15
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.964,
      "changePct": 9.92,
      "change": 0.087,
      "turnover": 0.16
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.421,
      "changePct": 9.92,
      "change": 0.038,
      "turnover": 40.3
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.949,
      "changePct": 7.72,
      "change": 0.068,
      "turnover": 3.96
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.232,
      "changePct": 7.32,
      "change": 0.084,
      "turnover": 1.39
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.875,
      "changePct": 7.08,
      "change": 0.124,
      "turnover": 1.4
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.753,
      "changePct": 6.81,
      "change": 0.048,
      "turnover": 6.27
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.661,
      "changePct": 6.79,
      "change": 0.042,
      "turnover": 1.86
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.918,
      "changePct": 6.37,
      "change": 0.055,
      "turnover": 1.32
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.31,
      "changePct": 6.24,
      "change": 0.077,
      "turnover": 6.54
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.479,
      "changePct": 6.21,
      "change": 0.028,
      "turnover": 16.97
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.796,
      "changePct": 5.43,
      "change": 0.041,
      "turnover": 6.07
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.334,
      "changePct": 5.03,
      "change": 0.016,
      "turnover": 5.92
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.031,
      "changePct": 4.78,
      "change": 0.047,
      "turnover": 0.87
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.388,
      "changePct": 3.47,
      "change": 0.013,
      "turnover": 4.43
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.005,
      "changePct": 2.76,
      "change": 0.027,
      "turnover": 0.66
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.385,
      "changePct": 2.74,
      "change": 0.037,
      "turnover": 0.46
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.934,
      "changePct": 2.64,
      "change": 0.024,
      "turnover": 0.06
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.437,
      "changePct": 1.63,
      "change": 0.007,
      "turnover": 4.26
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.702,
      "changePct": 1.01,
      "change": 0.007,
      "turnover": 0.56
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.516,
      "changePct": 0.78,
      "change": 0.004,
      "turnover": 0.24
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.156,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 4.65
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.913,
      "changePct": -1.51,
      "change": -0.014,
      "turnover": 15.53
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.447,
      "changePct": 17.36,
      "amount": 186.32,
      "netFlow": 46.58
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.162,
      "changePct": 5.13,
      "amount": 123.7,
      "netFlow": 30.92
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.404,
      "changePct": 8.76,
      "amount": 99.09,
      "netFlow": 24.77
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.962,
      "changePct": 3.42,
      "amount": 33.49,
      "netFlow": 8.37
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.042,
      "changePct": 5.01,
      "amount": 21.77,
      "netFlow": 5.44
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.343,
      "changePct": 5.0,
      "amount": 18.21,
      "netFlow": 4.55
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.479,
      "changePct": 6.21,
      "amount": 16.97,
      "netFlow": 4.24
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.766,
      "changePct": 10.06,
      "amount": 12.97,
      "netFlow": 3.24
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.388,
      "changePct": 3.47,
      "amount": 4.43,
      "netFlow": 1.11
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.875,
      "changePct": 7.08,
      "amount": 1.4,
      "netFlow": 0.35
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.162,
      "changePct": 5.13,
      "amount": 123.7,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.962,
      "changePct": 3.42,
      "amount": 33.49,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.404,
      "changePct": 8.76,
      "amount": 99.09,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.343,
      "changePct": 5.0,
      "amount": 18.21,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.042,
      "changePct": 5.01,
      "amount": 21.77,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "半导体",
      "turnover": 12.97,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "5G",
      "turnover": 9.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.34,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.77,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 3.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 40.3,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 6.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 6.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 16.97,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "创新药",
      "turnover": 6.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 5.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 4.43,
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
      "nav": 3.7025,
      "ret1w": 12.25,
      "ret1m": 12.87,
      "ret3m": -4.42,
      "ret6m": -20.09,
      "ret1y": -28.08,
      "ret2y": -3.54,
      "ret3y": 67.96
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.8603,
      "ret1w": 11.05,
      "ret1m": 10.91,
      "ret3m": -6.48,
      "ret6m": -32.85,
      "ret1y": -42.45,
      "ret2y": -24.91,
      "ret3y": 4.56
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.4732,
      "ret1w": 17.61,
      "ret1m": 24.66,
      "ret3m": -10.11,
      "ret6m": -40.51,
      "ret1y": -39.83,
      "ret2y": 6.98,
      "ret3y": 80.45
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7606,
      "ret1w": -0.07,
      "ret1m": -1.23,
      "ret3m": 6.33,
      "ret6m": 6.65,
      "ret1y": 9.09,
      "ret2y": -4.41,
      "ret3y": 2.91
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8135,
      "ret1w": 5.01,
      "ret1m": 0.34,
      "ret3m": -7.92,
      "ret6m": -15.92,
      "ret1y": -31.33,
      "ret2y": -33.73,
      "ret3y": -28.2
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.4216,
      "ret1w": 3.5,
      "ret1m": -0.15,
      "ret3m": -4.75,
      "ret6m": -12.25,
      "ret1y": -24.66,
      "ret2y": -28.21,
      "ret3y": 0.07
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3181,
      "ret1w": 4.14,
      "ret1m": 2.39,
      "ret3m": 2.55,
      "ret6m": -4.75,
      "ret1y": -3.19,
      "ret2y": 1.64,
      "ret3y": 31.41
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.577,
      "ret1w": 8.01,
      "ret1m": 5.63,
      "ret3m": -3.96,
      "ret6m": -17.26,
      "ret1y": -24.26,
      "ret2y": -10.95,
      "ret3y": 19.2
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1075,
      "ret1w": 7.12,
      "ret1m": 5.73,
      "ret3m": -1.93,
      "ret6m": -18.24,
      "ret1y": -22.15,
      "ret2y": -9.18,
      "ret3y": 6.88
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.5,
      "ret1w": 6.2,
      "ret1m": 4.38,
      "ret3m": -3.14,
      "ret6m": -28.31,
      "ret1y": -29.66,
      "ret2y": 17.98,
      "ret3y": 99.2
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.156,
      "ret1w": 1.4,
      "ret1m": 1.05,
      "ret3m": 5.57,
      "ret6m": 4.43,
      "ret1y": 7.04,
      "ret2y": -8.04,
      "ret3y": -8.11
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.052,
      "ret1w": 7.04,
      "ret1m": 3.53,
      "ret3m": -6.94,
      "ret6m": -14.07,
      "ret1y": -14.71,
      "ret2y": -19.21,
      "ret3y": -3.75
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2781,
      "ret1w": 16.72,
      "ret1m": 7.5,
      "ret3m": 8.63,
      "ret6m": -29.53,
      "ret1y": -55.64,
      "ret2y": -53.73,
      "ret3y": -32.65
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8694,
      "ret1w": 0.77,
      "ret1m": -0.46,
      "ret3m": 0.71,
      "ret6m": -3.38,
      "ret1y": 2.97,
      "ret2y": -1.59,
      "ret3y": -3.1
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3695,
      "ret1w": 6.57,
      "ret1m": 4.93,
      "ret3m": -3.42,
      "ret6m": -18.27,
      "ret1y": -22.84,
      "ret2y": -10.38,
      "ret3y": 17.27
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.397,
      "ret1w": 15.32,
      "ret1m": 15.02,
      "ret3m": -12.2,
      "ret6m": -42.98,
      "ret1y": -48.39,
      "ret2y": 5.37,
      "ret3y": 35.78
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5582,
      "ret1w": 2.54,
      "ret1m": 2.25,
      "ret3m": 0.58,
      "ret6m": 0.28,
      "ret1y": -1.94,
      "ret2y": -4.79,
      "ret3y": 3.47
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.909,
      "ret1w": 6.44,
      "ret1m": 8.21,
      "ret3m": 1.91,
      "ret6m": -13.76,
      "ret1y": -3.71,
      "ret2y": -14.08,
      "ret3y": -17.29
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4138,
      "ret1w": -0.28,
      "ret1m": -0.88,
      "ret3m": 3.38,
      "ret6m": 2.65,
      "ret1y": 4.43,
      "ret2y": 2.82,
      "ret3y": 11.4
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1628,
      "ret1w": 5.96,
      "ret1m": 4.75,
      "ret3m": -2.07,
      "ret6m": -13.42,
      "ret1y": -11.34,
      "ret2y": -0.01,
      "ret3y": 32.68
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9516,
      "ret1w": 8.67,
      "ret1m": 6.54,
      "ret3m": -3.96,
      "ret6m": -26.63,
      "ret1y": -31.95,
      "ret2y": -15.43,
      "ret3y": 3.38
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0132,
      "ret1w": 8.67,
      "ret1m": 6.54,
      "ret3m": -3.93,
      "ret6m": -26.55,
      "ret1y": -31.82,
      "ret2y": -15.1,
      "ret3y": 4.21
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0271,
      "ret1w": 0.65,
      "ret1m": -0.23,
      "ret3m": -2.39,
      "ret6m": -6.01,
      "ret1y": -7.33,
      "ret2y": -5.07,
      "ret3y": 0.64
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0031,
      "ret1w": 0.65,
      "ret1m": -0.23,
      "ret3m": -2.36,
      "ret6m": -5.87,
      "ret1y": -7.05,
      "ret2y": -4.5,
      "ret3y": 1.85
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6884,
      "ret1w": 0.35,
      "ret1m": -1.05,
      "ret3m": 0.83,
      "ret6m": -4.67,
      "ret1y": -9.16,
      "ret2y": -14.98,
      "ret3y": -1.15
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7067,
      "ret1w": 0.36,
      "ret1m": -1.04,
      "ret3m": 0.89,
      "ret6m": -4.54,
      "ret1y": -8.92,
      "ret2y": -14.55,
      "ret3y": -0.14
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.0401,
      "ret1w": 7.79,
      "ret1m": 9.55,
      "ret3m": -6.47,
      "ret6m": -28.77,
      "ret1y": -31.94,
      "ret2y": 8.88,
      "ret3y": 78.71
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2449,
      "ret1w": 6.09,
      "ret1m": 5.28,
      "ret3m": -0.16,
      "ret6m": -12.5,
      "ret1y": -16.09,
      "ret2y": 7.18,
      "ret3y": 45.01
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6844,
      "ret1w": 7.58,
      "ret1m": 5.52,
      "ret3m": 0.34,
      "ret6m": -7.55,
      "ret1y": -20.84,
      "ret2y": -15.06,
      "ret3y": -3.82
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.8547,
      "ret1w": 7.11,
      "ret1m": 7.35,
      "ret3m": 0.21,
      "ret6m": -8.62,
      "ret1y": -13.35,
      "ret2y": 28.43,
      "ret3y": 87.84
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4557,
      "ret1w": 3.54,
      "ret1m": 1.27,
      "ret3m": -1.32,
      "ret6m": -10.51,
      "ret1y": -17.89,
      "ret2y": 1.88,
      "ret3y": 24.14
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4648,
      "ret1w": 3.54,
      "ret1m": 1.26,
      "ret3m": -1.32,
      "ret6m": -10.43,
      "ret1y": -17.73,
      "ret2y": 2.27,
      "ret3y": 25.11
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2616,
      "ret1w": 0.78,
      "ret1m": -0.11,
      "ret3m": 0.53,
      "ret6m": -1.91,
      "ret1y": -1.9,
      "ret2y": -2.11,
      "ret3y": 0.51
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0507,
      "ret1w": 0.53,
      "ret1m": -0.03,
      "ret3m": -2.01,
      "ret6m": -7.48,
      "ret1y": -3.78,
      "ret2y": -8.76,
      "ret3y": -0.14
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1744,
      "ret1w": 1.0,
      "ret1m": 1.01,
      "ret3m": 2.18,
      "ret6m": -18.15,
      "ret1y": -29.06,
      "ret2y": -20.97,
      "ret3y": -16.76
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7684,
      "ret1w": 5.01,
      "ret1m": 6.28,
      "ret3m": -1.22,
      "ret6m": -8.29,
      "ret1y": -10.98,
      "ret2y": 0.68,
      "ret3y": 28.25
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.235,
      "ret1w": 11.53,
      "ret1m": 12.2,
      "ret3m": -6.09,
      "ret6m": -33.93,
      "ret1y": -44.58,
      "ret2y": 4.78,
      "ret3y": 76.82
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5848,
      "ret1w": -0.47,
      "ret1m": -1.14,
      "ret3m": 2.61,
      "ret6m": 6.62,
      "ret1y": 8.97,
      "ret2y": 5.32,
      "ret3y": 5.74
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4971,
      "ret1w": 10.66,
      "ret1m": 13.44,
      "ret3m": -2.07,
      "ret6m": -22.5,
      "ret1y": -33.63,
      "ret2y": -9.62,
      "ret3y": -18.68
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.196,
      "ret1w": 11.66,
      "ret1m": 16.23,
      "ret3m": -7.85,
      "ret6m": -36.75,
      "ret1y": -35.42,
      "ret2y": 23.65,
      "ret3y": 121.22
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0445,
      "ret1w": 0.32,
      "ret1m": 0.18,
      "ret3m": -1.0,
      "ret6m": -2.15,
      "ret1y": -3.0,
      "ret2y": -1.11,
      "ret3y": 1.57
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0923,
      "ret1w": 0.31,
      "ret1m": 0.19,
      "ret3m": -1.0,
      "ret6m": -2.11,
      "ret1y": -2.92,
      "ret2y": -0.9,
      "ret3y": 2.18
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0661,
      "ret1w": -0.06,
      "ret1m": -0.08,
      "ret3m": -0.18,
      "ret6m": 0.22,
      "ret1y": 0.42,
      "ret2y": 1.37,
      "ret3y": 2.6
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1012,
      "ret1w": -0.02,
      "ret1m": -0.08,
      "ret3m": -0.13,
      "ret6m": 0.25,
      "ret1y": 0.54,
      "ret2y": 1.4,
      "ret3y": 3.63
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1111,
      "ret1w": -0.02,
      "ret1m": -0.08,
      "ret3m": -0.12,
      "ret6m": 0.29,
      "ret1y": 0.64,
      "ret2y": 1.6,
      "ret3y": 4.06
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0778,
      "ret1w": -0.02,
      "ret1m": -0.04,
      "ret3m": -0.06,
      "ret6m": 0.19,
      "ret1y": 0.47,
      "ret2y": 1.4,
      "ret3y": 2.67
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.093,
      "ret1w": -0.02,
      "ret1m": -0.04,
      "ret3m": -0.05,
      "ret6m": 0.26,
      "ret1y": 0.62,
      "ret2y": 1.71,
      "ret3y": 3.32
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9966,
      "ret1w": 2.11,
      "ret1m": 1.33,
      "ret3m": -1.34,
      "ret6m": -6.91,
      "ret1y": -9.23,
      "ret2y": -0.96,
      "ret3y": 3.92
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1426,
      "ret1w": 2.69,
      "ret1m": 2.06,
      "ret3m": -1.66,
      "ret6m": -6.68,
      "ret1y": -9.38,
      "ret2y": -4.46,
      "ret3y": -1.66
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0038,
      "ret1w": 2.11,
      "ret1m": 1.34,
      "ret3m": -1.31,
      "ret6m": -6.82,
      "ret1y": -9.05,
      "ret2y": -0.57,
      "ret3y": 4.75
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0435,
      "ret1w": -0.02,
      "ret1m": -0.09,
      "ret3m": -0.21,
      "ret6m": 0.18,
      "ret1y": 0.51,
      "ret2y": 1.48,
      "ret3y": 3.31
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.095,
      "ret1w": 1.69,
      "ret1m": 1.35,
      "ret3m": -1.52,
      "ret6m": -6.9,
      "ret1y": -9.34,
      "ret2y": -6.71,
      "ret3y": -0.45
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1985,
      "ret1w": 0.29,
      "ret1m": -0.07,
      "ret3m": -0.03,
      "ret6m": -1.61,
      "ret1y": -2.24,
      "ret2y": 1.05,
      "ret3y": 9.68
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1142,
      "ret1w": 0.61,
      "ret1m": 0.37,
      "ret3m": -0.27,
      "ret6m": -2.47,
      "ret1y": -3.28,
      "ret2y": 0.66,
      "ret3y": 6.75
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1852,
      "ret1w": 0.62,
      "ret1m": 0.38,
      "ret3m": -0.24,
      "ret6m": -2.36,
      "ret1y": -3.08,
      "ret2y": 1.07,
      "ret3y": 7.64
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.55,
      "ret1w": 0.0,
      "ret1m": -9.67,
      "ret3m": -26.58,
      "ret6m": -34.13,
      "ret1y": -38.95,
      "ret2y": 10.4,
      "ret3y": 56.72
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.7743,
      "ret1w": 0.32,
      "ret1m": -0.9,
      "ret3m": -5.98,
      "ret6m": -6.64,
      "ret1y": -5.79,
      "ret2y": -0.1,
      "ret3y": 21.31
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.5601,
      "ret1w": 0.97,
      "ret1m": -3.11,
      "ret3m": -6.27,
      "ret6m": -16.28,
      "ret1y": -28.42,
      "ret2y": -12.12,
      "ret3y": 17.1
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 1.9636,
      "ret1w": 0.01,
      "ret1m": -1.53,
      "ret3m": -14.98,
      "ret6m": -18.73,
      "ret1y": -15.68,
      "ret2y": -2.39,
      "ret3y": 20.14
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9282,
      "ret1w": 0.02,
      "ret1m": 0.85,
      "ret3m": 0.75,
      "ret6m": -1.24,
      "ret1y": -1.64,
      "ret2y": -5.42,
      "ret3y": -2.59
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.0561,
      "ret1w": -0.19,
      "ret1m": -4.31,
      "ret3m": -13.93,
      "ret6m": -22.07,
      "ret1y": -27.71,
      "ret2y": 7.11,
      "ret3y": 43.73
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.168,
      "ret1w": 0.43,
      "ret1m": -0.36,
      "ret3m": -5.89,
      "ret6m": -10.15,
      "ret1y": -10.52,
      "ret2y": -6.06,
      "ret3y": 3.81
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.684,
      "ret1w": 0.0,
      "ret1m": -7.69,
      "ret3m": -15.66,
      "ret6m": -30.98,
      "ret1y": -30.56,
      "ret2y": -40.42,
      "ret3y": -22.18
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 1.995,
      "ret1w": 1.81,
      "ret1m": -5.45,
      "ret3m": -21.4,
      "ret6m": -29.82,
      "ret1y": -35.66,
      "ret2y": 16.97,
      "ret3y": 76.13
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.3661,
      "ret1w": 0.83,
      "ret1m": -0.02,
      "ret3m": -12.63,
      "ret6m": -16.68,
      "ret1y": -10.99,
      "ret2y": 7.11,
      "ret3y": 31.52
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.4493,
      "ret1w": 1.63,
      "ret1m": -2.32,
      "ret3m": -8.99,
      "ret6m": -15.82,
      "ret1y": -14.49,
      "ret2y": 2.35,
      "ret3y": 30.57
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.0944,
      "ret1w": 1.24,
      "ret1m": -2.34,
      "ret3m": -8.28,
      "ret6m": -17.76,
      "ret1y": -18.8,
      "ret2y": -6.25,
      "ret3y": 13.05
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.281,
      "ret1w": 0.0,
      "ret1m": 1.59,
      "ret3m": 1.75,
      "ret6m": -3.39,
      "ret1y": -3.61,
      "ret2y": 3.81,
      "ret3y": -10.7
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.709,
      "ret1w": 1.48,
      "ret1m": -2.57,
      "ret3m": -10.52,
      "ret6m": -22.03,
      "ret1y": -21.5,
      "ret2y": -18.58,
      "ret3y": 20.62
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 4.8719,
      "ret1w": 0.44,
      "ret1m": -3.69,
      "ret3m": -13.47,
      "ret6m": -21.89,
      "ret1y": -27.91,
      "ret2y": 4.85,
      "ret3y": 26.56
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0118,
      "ret1w": 0.01,
      "ret1m": -0.18,
      "ret3m": -0.13,
      "ret6m": 0.46,
      "ret1y": 0.8,
      "ret2y": 2.36,
      "ret3y": 3.58
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 0.9995,
      "ret1w": 0.0,
      "ret1m": -0.18,
      "ret3m": -0.12,
      "ret6m": 0.49,
      "ret1y": 0.81,
      "ret2y": 2.42,
      "ret3y": 3.74
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.218,
      "ret1w": 5.27,
      "ret1m": 3.84,
      "ret3m": 0.0,
      "ret6m": -15.06,
      "ret1y": -22.96,
      "ret2y": -12.81,
      "ret3y": 0.33
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.224,
      "ret1w": 6.82,
      "ret1m": 4.76,
      "ret3m": -4.1,
      "ret6m": -22.56,
      "ret1y": -28.07,
      "ret2y": -14.3,
      "ret3y": 5.65
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3696,
      "ret1w": 3.37,
      "ret1m": 2.74,
      "ret3m": -6.73,
      "ret6m": -21.29,
      "ret1y": -21.26,
      "ret2y": -7.15,
      "ret3y": 30.31
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8406,
      "ret1w": 3.82,
      "ret1m": 2.83,
      "ret3m": -1.97,
      "ret6m": -14.83,
      "ret1y": -16.52,
      "ret2y": -5.06,
      "ret3y": 9.42
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8951,
      "ret1w": 3.82,
      "ret1m": 2.83,
      "ret3m": -1.94,
      "ret6m": -14.75,
      "ret1y": -16.35,
      "ret2y": -4.68,
      "ret3y": 10.3
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6464,
      "ret1w": 7.16,
      "ret1m": 4.74,
      "ret3m": -2.91,
      "ret6m": -19.61,
      "ret1y": -24.59,
      "ret2y": -8.12,
      "ret3y": 9.81
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6012,
      "ret1w": 3.95,
      "ret1m": 2.61,
      "ret3m": 0.33,
      "ret6m": -11.38,
      "ret1y": -15.59,
      "ret2y": -8.21,
      "ret3y": 6.73
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4034,
      "ret1w": 5.89,
      "ret1m": 3.32,
      "ret3m": -2.76,
      "ret6m": -12.48,
      "ret1y": -15.59,
      "ret2y": -2.42,
      "ret3y": 18.73
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5259,
      "ret1w": 8.84,
      "ret1m": 7.29,
      "ret3m": -1.78,
      "ret6m": -23.83,
      "ret1y": -31.81,
      "ret2y": -12.48,
      "ret3y": 11.44
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0287,
      "ret1w": 2.16,
      "ret1m": 1.16,
      "ret3m": 2.03,
      "ret6m": -7.03,
      "ret1y": -5.22,
      "ret2y": -6.68,
      "ret3y": 8.68
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4501,
      "ret1w": 1.79,
      "ret1m": 1.29,
      "ret3m": -2.96,
      "ret6m": -6.08,
      "ret1y": -2.47,
      "ret2y": 4.77,
      "ret3y": 26.76
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.0487,
      "ret1w": 0.0,
      "ret1m": -1.69,
      "ret3m": -10.19,
      "ret6m": -10.84,
      "ret1y": -13.45,
      "ret2y": -2.41,
      "ret3y": 13.68
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2081,
      "ret1w": 5.91,
      "ret1m": 4.4,
      "ret3m": -2.98,
      "ret6m": -21.29,
      "ret1y": -28.21,
      "ret2y": -14.69,
      "ret3y": 5.29
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.8883,
      "ret1w": -2.55,
      "ret1m": -4.26,
      "ret3m": -12.15,
      "ret6m": -24.25,
      "ret1y": -31.85,
      "ret2y": -17.19,
      "ret3y": 2.9
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.8915,
      "ret1w": -2.56,
      "ret1m": -4.25,
      "ret3m": -12.12,
      "ret6m": -24.08,
      "ret1y": -31.68,
      "ret2y": -17.11,
      "ret3y": 2.59
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1551,
      "ret1w": -0.04,
      "ret1m": -3.02,
      "ret3m": -6.62,
      "ret6m": -17.55,
      "ret1y": -27.15,
      "ret2y": -14.93,
      "ret3y": 4.13
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.1826,
      "ret1w": -0.05,
      "ret1m": -3.02,
      "ret3m": -6.59,
      "ret6m": -17.47,
      "ret1y": -27.0,
      "ret2y": -14.6,
      "ret3y": 4.96
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5006,
      "ret1w": -0.44,
      "ret1m": -5.12,
      "ret3m": -13.36,
      "ret6m": -25.49,
      "ret1y": -35.58,
      "ret2y": -19.01,
      "ret3y": 7.65
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1493,
      "ret1w": 0.25,
      "ret1m": -0.12,
      "ret3m": -0.83,
      "ret6m": -1.62,
      "ret1y": -1.66,
      "ret2y": 0.42,
      "ret3y": 4.29
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1698,
      "ret1w": 0.26,
      "ret1m": -0.11,
      "ret3m": -0.81,
      "ret6m": -1.53,
      "ret1y": -1.51,
      "ret2y": 0.73,
      "ret3y": 4.93
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0869,
      "ret1w": -0.06,
      "ret1m": -0.08,
      "ret3m": -0.15,
      "ret6m": 0.3,
      "ret1y": 0.57,
      "ret2y": 1.67,
      "ret3y": 3.19
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4074,
      "ret1w": -0.06,
      "ret1m": -0.21,
      "ret3m": -0.37,
      "ret6m": -0.2,
      "ret1y": -0.07,
      "ret2y": 0.3,
      "ret3y": 4.21
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4609,
      "ret1w": -0.05,
      "ret1m": -0.2,
      "ret3m": -0.33,
      "ret6m": -0.1,
      "ret1y": 0.13,
      "ret2y": 0.7,
      "ret3y": 5.06
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.835,
      "ret1w": 5.79,
      "ret1m": 4.33,
      "ret3m": -3.9,
      "ret6m": -14.05,
      "ret1y": -10.63,
      "ret2y": 6.79,
      "ret3y": 29.49
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9687,
      "ret1w": 7.02,
      "ret1m": 6.64,
      "ret3m": -7.22,
      "ret6m": -23.44,
      "ret1y": -21.58,
      "ret2y": -14.71,
      "ret3y": 4.85
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 3.2983
      },
      {
        "date": "2026-11-27",
        "nav": 3.7025
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.5757
      },
      {
        "date": "2026-11-27",
        "nav": 2.8603
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.9532
      },
      {
        "date": "2026-11-27",
        "nav": 3.4732
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.7611
      },
      {
        "date": "2026-11-27",
        "nav": 0.7606
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.7269
      },
      {
        "date": "2026-11-27",
        "nav": 1.8135
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.3397
      },
      {
        "date": "2026-11-27",
        "nav": 2.4216
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 5.1066
      },
      {
        "date": "2026-11-27",
        "nav": 5.3181
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.46
      },
      {
        "date": "2026-11-27",
        "nav": 1.577
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.0339
      },
      {
        "date": "2026-11-27",
        "nav": 1.1075
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.354
      },
      {
        "date": "2026-11-27",
        "nav": 2.5
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.14
      },
      {
        "date": "2026-11-27",
        "nav": 1.156
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.917
      },
      {
        "date": "2026-11-27",
        "nav": 2.052
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.095
      },
      {
        "date": "2026-11-27",
        "nav": 1.2781
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.8551
      },
      {
        "date": "2026-11-27",
        "nav": 1.8694
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.2851
      },
      {
        "date": "2026-11-27",
        "nav": 1.3695
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.2114
      },
      {
        "date": "2026-11-27",
        "nav": 1.397
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.4948
      },
      {
        "date": "2026-11-27",
        "nav": 2.5582
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.854
      },
      {
        "date": "2026-11-27",
        "nav": 0.909
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.4206
      },
      {
        "date": "2026-11-27",
        "nav": 2.4138
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.0974
      },
      {
        "date": "2026-11-27",
        "nav": 1.1628
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.8757
      },
      {
        "date": "2026-11-27",
        "nav": 0.9516
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.9324
      },
      {
        "date": "2026-11-27",
        "nav": 1.0132
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.0205
      },
      {
        "date": "2026-11-27",
        "nav": 1.0271
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.9966
      },
      {
        "date": "2026-11-27",
        "nav": 1.0031
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.686
      },
      {
        "date": "2026-11-27",
        "nav": 0.6884
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.7042
      },
      {
        "date": "2026-11-27",
        "nav": 0.7067
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.8927
      },
      {
        "date": "2026-11-27",
        "nav": 2.0401
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.116
      },
      {
        "date": "2026-11-27",
        "nav": 2.2449
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.6362
      },
      {
        "date": "2026-11-27",
        "nav": 0.6844
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 3.5989
      },
      {
        "date": "2026-11-27",
        "nav": 3.8547
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.4401
      },
      {
        "date": "2026-11-27",
        "nav": 0.4557
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.4489
      },
      {
        "date": "2026-11-27",
        "nav": 0.4648
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.2518
      },
      {
        "date": "2026-11-27",
        "nav": 1.2616
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.0452
      },
      {
        "date": "2026-11-27",
        "nav": 1.0507
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.1628
      },
      {
        "date": "2026-11-27",
        "nav": 1.1744
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.6362
      },
      {
        "date": "2026-11-27",
        "nav": 2.7684
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 2.004
      },
      {
        "date": "2026-11-27",
        "nav": 2.235
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 1.5923
      },
      {
        "date": "2026-11-27",
        "nav": 1.5848
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 0.4492
      },
      {
        "date": "2026-11-27",
        "nav": 0.4971
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-26",
        "nav": 8.236
      },
      {
        "date": "2026-11-27",
        "nav": 9.196
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.64,
      "nav": 3.7025,
      "price": 3.7025,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.55,
      "nav": 2.8603,
      "price": 2.8603,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -1.23,
      "nav": 3.4732,
      "price": 3.4732,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.06,
      "nav": 0.7606,
      "price": 0.7606,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.8135,
      "price": 1.8135,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.4216,
      "price": 2.4216,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 5.3181,
      "price": 5.3181,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.28,
      "nav": 1.577,
      "price": 1.577,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.29,
      "nav": 1.1075,
      "price": 1.1075,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.22,
      "nav": 2.5,
      "price": 2.5,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.156,
      "price": 1.156,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.18,
      "nav": 2.052,
      "price": 2.052,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.38,
      "nav": 1.2781,
      "price": 1.2781,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.8694,
      "price": 1.8694,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.25,
      "nav": 1.3695,
      "price": 1.3695,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.75,
      "nav": 1.397,
      "price": 1.397,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 2.5582,
      "price": 2.5582,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.41,
      "nav": 0.909,
      "price": 0.909,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.4138,
      "price": 2.4138,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.24,
      "nav": 1.1628,
      "price": 1.1628,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 19.3,
      "sharpe": -1.57,
      "calmar": -1.57
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 16.37,
      "sharpe": -2.67,
      "calmar": -2.67
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 36.99,
      "sharpe": -1.34,
      "calmar": -1.34
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.84,
      "sharpe": 1.46,
      "calmar": 1.46
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.51,
      "sharpe": -5.87,
      "calmar": -5.87
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.22,
      "sharpe": -4.79,
      "calmar": -4.79
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.58,
      "sharpe": -0.43,
      "calmar": -0.43
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 8.45,
      "sharpe": -2.28,
      "calmar": -2.28
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 8.6,
      "sharpe": -2.06,
      "calmar": -2.06
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.57,
      "sharpe": -3.16,
      "calmar": -3.16
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.58,
      "sharpe": 1.16,
      "calmar": 1.16
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 5.29,
      "sharpe": -1.72,
      "calmar": -1.72
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 11.25,
      "sharpe": -4.45,
      "calmar": -4.45
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.69,
      "sharpe": 0.54,
      "calmar": 0.54
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.39,
      "sharpe": -2.3,
      "calmar": -2.3
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 22.53,
      "sharpe": -2.42,
      "calmar": -2.42
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.38,
      "sharpe": -0.27,
      "calmar": -0.27
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 12.32,
      "sharpe": -0.28,
      "calmar": -0.28
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.32,
      "sharpe": 0.75,
      "calmar": 0.75
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 7.12,
      "sharpe": -1.16,
      "calmar": -1.16
    }
  ],
  "news": [
    {
      "title": "11月26日，广东省政务服务和数据管理局、广东省发展和改革委员会印发《广东省算力发展“十五五”规划》。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:15",
      "impact": "neutral"
    },
    {
      "title": "实训场里调试关节的人形机器人、矿山巡检中跑起来的通用“大脑”、开进果园的履带无人车，这些曾经停留在实验室里的前沿概念，正在西安加速转化为可触可感的产业实践。日前，《中国经营报》记者采访了解到，西安已在整机制造、核心零部件、场景应用等环节形成布局，机器人产业进入加速成势的阶段。这背后，是一套嵌进技术攻关、样机测试、场景落地全过程的科创服务在陪跑。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:43",
      "impact": "neutral"
    },
    {
      "title": "在一台被搬上展台的汽车白车身旁，多轴机械臂正进行高难度模拟焊装演示，动作“行云流水”；不远处，在可面向3C电子制造的生产线上，机器人在复杂接口间穿梭自如，围观者啧啧称奇。日前，在2026世界智能制造大会（以下简称“大会”）上，多家企业集中呈现的“机器人上产线”场景，让人目不暇接。在科技感十足的实景展示背后，是江苏省制造业加速向智造跃迁的一个缩影。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:37",
      "impact": "neutral"
    },
    {
      "title": "11月27日，国务院国资委召开中央企业专业化整合推进会。这是继11月18日进一步深化国资国企改革专题研讨班之后，再次系统部署此项工作任务。国务院国资委党委委员、副主任李镇在会上详细阐述专业化整合的新要求。他表示，近年来中央企业专业化整合工作取得积极成效，接下来要有效发挥“聚资源、调结构、优配置、防内耗”的作用，锚定目标，把握重点，扎实有力推动专业化整合工作开创新局面。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:16",
      "impact": "neutral"
    },
    {
      "title": "中国人民银行11月27日发布《中国金融稳定报告（2026）》（以下简称《报告》），对中国金融体系的稳健性状况进行全面评估。《报告》认为，我国金融业运行总体稳健，金融风险整体收敛、总体可控，金融机构经营指标和监管指标处于合理区间。展望未来，《报告》指出，继续着力做好防范化解重点领域风险工作，严控增量、妥处存量、严防“爆雷”，牢牢守住不发生系统性金融风险的底线。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:16",
      "impact": "neutral"
    },
    {
      "title": "11月27日，中国人民银行正式发布《大额存单管理办法》（以下简称《办法》）和《人民币存贷款利率管理规定》（以下简称《规定》），两部规章均自2027年3月21日起施行。两部规章将此前分散在多份文件中的规则整合为统一制度，并对市场反映集中的条款作出调整，包括适度下调大额存单认购起点金额，取消贷款罚息利率上下限并明确罚息利率由借贷双方协商确定等。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:16",
      "impact": "neutral"
    },
    {
      "title": "新华社北京11月27日电国务院总理李强11月27日主持召开国务院常务会议，听取推动高质量发展综合督查情况汇报，研究持续深化资本市场投融资综合改革工作，听取国家标准体系建设情况汇报，审议通过《生产安全事故隐患排查治理条例（草案）》。会议指出，要深入抓好督查发现问题整改，举一反三、以点带面推进问题解决，推动全年各项目标任务高质量完成。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:16",
      "impact": "neutral"
    },
    {
      "title": "11月27日，中国证监会党委书记、主席吴清主持召开党委（扩大）会议，传达学习国务院常务会议精神，研究部署贯彻落实举措。会议指出，要落实落细各项存量政策，会同有关方面抓紧研究出台相关增量政策，持续完善资本市场稳市机制，进一步壮大中长期投资力量，加强输入性风险防范应对，持续深化资本市场改革，依法强化全链条监管。会议认为，党中央、国务院高度重视资本市场改革发展稳定工作。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:16",
      "impact": "neutral"
    },
    {
      "title": "11月27日，国家统计局发布的数据显示，1—10月份，全国规模以上工业企业实现利润总额67373.6亿元，同比增长16.0%，增速较1—9月份加快0.5个百分点。其中，电子行业拉动全部规模以上工业企业利润增长9.7个百分点，是规模以上工业企业利润较快增长的重要支撑。专家分析认为，稳增长政策加快落地，年内工业企业利润有望延续较快增长。行业层面，新动能板块的拉动效应突出。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:16",
      "impact": "neutral"
    },
    {
      "title": "在我国信息网络基础设施逐步完善、新质生产力加快发展的背景下，新一代通信网建设规划正式出炉。日前，工业和信息化部联合国家互联网信息办公室、国家发展改革委印发《新一代通信网建设实施方案》（以下简称《实施方案》）提出，到2030年，我国将建成覆盖完善、性能领先的新一代通信网。其中，系统建强基础网络、空间网络、国际网络、融合网络四张网络，全面提升全域智能、安全韧性和绿色低碳三项能力。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:10",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 74,
    "label": "乐观",
    "upDownRatio": "5,300/0",
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
