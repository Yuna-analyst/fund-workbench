// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-23 21:59:26
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-23 21:59 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-23",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3538.95,
      "change": 5.16,
      "changePct": "+0.15%",
      "high": 3544.6,
      "low": 3476.65,
      "volume": 512192714.0,
      "amount": 738500420000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10454.37,
      "change": 197.98,
      "changePct": "+1.93%",
      "high": 10510.18,
      "low": 10118.02,
      "volume": 607372090.0,
      "amount": 814379750000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2280.2,
      "change": 68.07,
      "changePct": "+3.08%",
      "high": 2297.73,
      "low": 2188.45,
      "volume": 188251199.0,
      "amount": 400628300000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1227.89,
      "change": -3.2,
      "changePct": "-0.26%",
      "high": 1243.16,
      "low": 1177.56,
      "volume": 10317929.0,
      "amount": 89555020000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3958.29,
      "change": 3.72,
      "changePct": "+0.09%",
      "high": 3968.45,
      "low": 3901.49,
      "volume": 203943256.0,
      "amount": 458279260000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6128.99,
      "change": 122.91,
      "changePct": "+2.05%",
      "high": 6161.46,
      "low": 5899.96,
      "volume": 138706291.0,
      "amount": 257760100000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.76万亿",
      "label": "成交额",
      "rawAmount": 2759102850000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,938/1,030",
      "label": "涨/跌家数",
      "rawUp": 3938,
      "rawDown": 1030,
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
    "totalInflow": 22.63,
    "totalOutflow": 0,
    "netFlow": 22.63,
    "netFlowTrend": [
      4.53,
      9.05,
      13.58,
      18.1,
      22.63
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
      "inflow": 9.84,
      "pct": 5.25
    },
    {
      "name": "半导体",
      "inflow": 3.09,
      "pct": 0.4
    },
    {
      "name": "5G",
      "inflow": 2.06,
      "pct": 4.69
    },
    {
      "name": "创新药",
      "inflow": 1.52,
      "pct": 3.33
    },
    {
      "name": "医疗",
      "inflow": 1.43,
      "pct": 2.48
    },
    {
      "name": "有色",
      "inflow": 1.36,
      "pct": 3.22
    },
    {
      "name": "传媒",
      "inflow": 1.12,
      "pct": 4.23
    },
    {
      "name": "医药",
      "inflow": 1.05,
      "pct": 1.34
    },
    {
      "name": "军工",
      "inflow": 0.67,
      "pct": 1.45
    },
    {
      "name": "光伏",
      "inflow": 0.49,
      "pct": 1.26
    },
    {
      "name": "人工智能",
      "inflow": 0.36,
      "pct": 3.0
    },
    {
      "name": "新能源车",
      "inflow": 0.35,
      "pct": 2.15
    },
    {
      "name": "地产",
      "inflow": 0.31,
      "pct": 0.69
    },
    {
      "name": "新能源",
      "inflow": 0.28,
      "pct": 1.21
    },
    {
      "name": "游戏",
      "inflow": 0.25,
      "pct": 3.9
    },
    {
      "name": "云计算",
      "inflow": 0.23,
      "pct": 2.33
    },
    {
      "name": "家电",
      "inflow": 0.16,
      "pct": 1.26
    },
    {
      "name": "农业",
      "inflow": 0.11,
      "pct": 1.27
    },
    {
      "name": "计算机",
      "inflow": 0.07,
      "pct": 1.65
    },
    {
      "name": "电子",
      "inflow": 0.07,
      "pct": 1.03
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.381,
      "changePct": 5.25,
      "change": 0.019,
      "turnover": 32.8
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.603,
      "changePct": 4.69,
      "change": 0.027,
      "turnover": 6.86
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.739,
      "changePct": 4.23,
      "change": 0.03,
      "turnover": 3.73
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.905,
      "changePct": 3.9,
      "change": 0.034,
      "turnover": 0.83
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.775,
      "changePct": 3.33,
      "change": 0.025,
      "turnover": 5.07
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.282,
      "changePct": 3.22,
      "change": 0.04,
      "turnover": 4.52
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.721,
      "changePct": 3.0,
      "change": 0.021,
      "turnover": 1.21
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.33,
      "changePct": 2.48,
      "change": 0.008,
      "turnover": 4.77
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.275,
      "changePct": 2.33,
      "change": 0.029,
      "turnover": 0.76
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.237,
      "changePct": 2.15,
      "change": 0.026,
      "turnover": 1.18
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.923,
      "changePct": 1.65,
      "change": 0.015,
      "turnover": 0.25
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.909,
      "changePct": 1.45,
      "change": 0.013,
      "turnover": 2.23
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.379,
      "changePct": 1.34,
      "change": 0.005,
      "turnover": 3.51
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.716,
      "changePct": 1.27,
      "change": 0.009,
      "turnover": 0.37
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.643,
      "changePct": 1.26,
      "change": 0.008,
      "turnover": 1.64
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.371,
      "changePct": 1.26,
      "change": 0.017,
      "turnover": 0.53
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.847,
      "changePct": 1.21,
      "change": 0.022,
      "turnover": 0.94
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.589,
      "changePct": 1.03,
      "change": 0.006,
      "turnover": 0.24
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.018,
      "changePct": 0.69,
      "change": 0.007,
      "turnover": 1.03
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.748,
      "changePct": 0.4,
      "change": 0.003,
      "turnover": 10.29
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.432,
      "changePct": 0.23,
      "change": 0.001,
      "turnover": 3.0
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.471,
      "changePct": 0.21,
      "change": 0.001,
      "turnover": 6.34
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.001,
      "changePct": 0.1,
      "change": 0.001,
      "turnover": 0.49
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.933,
      "changePct": -0.11,
      "change": -0.001,
      "turnover": 0.04
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.813,
      "changePct": -0.12,
      "change": -0.001,
      "turnover": 5.33
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.515,
      "changePct": -0.39,
      "change": -0.002,
      "turnover": 0.21
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.916,
      "changePct": -1.08,
      "change": -0.01,
      "turnover": 12.49
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.148,
      "changePct": -1.12,
      "change": -0.013,
      "turnover": 3.53
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.023,
      "changePct": 0.12,
      "amount": 55.89,
      "netFlow": 13.97
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.16,
      "changePct": 1.77,
      "amount": 42.42,
      "netFlow": 10.6
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.91,
      "changePct": 0.05,
      "amount": 24.22,
      "netFlow": 6.06
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.748,
      "changePct": 0.4,
      "amount": 10.29,
      "netFlow": 2.57
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.203,
      "changePct": 0.29,
      "amount": 6.92,
      "netFlow": 1.73
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.471,
      "changePct": 0.21,
      "amount": 6.34,
      "netFlow": 1.58
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.379,
      "changePct": 1.34,
      "amount": 3.51,
      "netFlow": 0.88
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.847,
      "changePct": 1.21,
      "amount": 0.94,
      "netFlow": 0.23
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.875,
      "changePct": -0.86,
      "amount": 32.43,
      "netFlow": -8.11
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.298,
      "changePct": -0.15,
      "amount": 111.16,
      "netFlow": -27.79
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.023,
      "changePct": 0.12,
      "amount": 55.89,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.875,
      "changePct": -0.86,
      "amount": 32.43,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.16,
      "changePct": 1.77,
      "amount": 42.42,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.203,
      "changePct": 0.29,
      "amount": 6.92,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.91,
      "changePct": 0.05,
      "amount": 24.22,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 32.8,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "5G",
      "turnover": 6.86,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 3.73,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.83,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 4.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 4.77,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.64,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 0.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 10.29,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 3.5559,
      "ret1w": 8.4,
      "ret1m": -5.56,
      "ret3m": -13.16,
      "ret6m": -20.37,
      "ret1y": -33.44,
      "ret2y": -2.24,
      "ret3y": 62.47
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.6229,
      "ret1w": 1.71,
      "ret1m": 0.97,
      "ret3m": -19.02,
      "ret6m": -39.76,
      "ret1y": -45.87,
      "ret2y": -27.41,
      "ret3y": -3.19
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.9703,
      "ret1w": 6.61,
      "ret1m": -0.05,
      "ret3m": -29.0,
      "ret6m": -49.09,
      "ret1y": -47.09,
      "ret2y": -0.78,
      "ret3y": 54.78
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7718,
      "ret1w": 0.22,
      "ret1m": -0.68,
      "ret3m": 8.35,
      "ret6m": 10.65,
      "ret1y": 11.16,
      "ret2y": -3.06,
      "ret3y": 6.78
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8206,
      "ret1w": 0.73,
      "ret1m": -4.12,
      "ret3m": -7.52,
      "ret6m": -17.84,
      "ret1y": -32.27,
      "ret2y": -33.46,
      "ret3y": -25.81
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.4621,
      "ret1w": 1.52,
      "ret1m": -4.67,
      "ret3m": -4.37,
      "ret6m": -10.23,
      "ret1y": -23.04,
      "ret2y": -27.45,
      "ret3y": 2.21
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2054,
      "ret1w": 0.22,
      "ret1m": -1.06,
      "ret3m": 0.34,
      "ret6m": -5.08,
      "ret1y": -4.85,
      "ret2y": 0.6,
      "ret3y": 30.2
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.541,
      "ret1w": 3.22,
      "ret1m": -3.26,
      "ret3m": -10.72,
      "ret6m": -19.02,
      "ret1y": -27.58,
      "ret2y": -10.67,
      "ret3y": 19.09
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0684,
      "ret1w": 2.0,
      "ret1m": -0.45,
      "ret3m": -9.18,
      "ret6m": -21.49,
      "ret1y": -25.28,
      "ret2y": -10.48,
      "ret3y": 3.47
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.416,
      "ret1w": 0.88,
      "ret1m": -1.87,
      "ret3m": -11.44,
      "ret6m": -30.79,
      "ret1y": -30.87,
      "ret2y": 20.44,
      "ret3y": 94.06
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.154,
      "ret1w": 0.87,
      "ret1m": -1.54,
      "ret3m": 4.53,
      "ret6m": 4.91,
      "ret1y": 6.65,
      "ret2y": -7.9,
      "ret3y": -6.03
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.041,
      "ret1w": 2.98,
      "ret1m": -7.35,
      "ret3m": -10.36,
      "ret6m": -15.7,
      "ret1y": -18.29,
      "ret2y": -17.5,
      "ret3y": -1.83
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1803,
      "ret1w": -0.72,
      "ret1m": 2.08,
      "ret3m": -9.58,
      "ret6m": -34.45,
      "ret1y": -59.78,
      "ret2y": -54.7,
      "ret3y": -37.16
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8698,
      "ret1w": -0.44,
      "ret1m": -2.12,
      "ret3m": 0.81,
      "ret6m": -1.84,
      "ret1y": 5.36,
      "ret2y": 0.99,
      "ret3y": -1.99
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3294,
      "ret1w": 1.86,
      "ret1m": -2.74,
      "ret3m": -9.84,
      "ret6m": -19.72,
      "ret1y": -26.14,
      "ret2y": -10.96,
      "ret3y": 15.78
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2555,
      "ret1w": 3.37,
      "ret1m": -3.76,
      "ret3m": -28.56,
      "ret6m": -49.22,
      "ret1y": -53.69,
      "ret2y": 3.11,
      "ret3y": 25.69
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5245,
      "ret1w": 0.9,
      "ret1m": -1.76,
      "ret3m": -0.25,
      "ret6m": -0.62,
      "ret1y": -3.35,
      "ret2y": -6.17,
      "ret3y": 4.24
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.874,
      "ret1w": 4.05,
      "ret1m": -2.35,
      "ret3m": -8.19,
      "ret6m": -19.0,
      "ret1y": -8.96,
      "ret2y": -14.81,
      "ret3y": -18.32
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4205,
      "ret1w": -0.61,
      "ret1m": -0.53,
      "ret3m": 4.63,
      "ret6m": 3.94,
      "ret1y": 4.59,
      "ret2y": 3.33,
      "ret3y": 13.08
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.129,
      "ret1w": 1.7,
      "ret1m": -3.15,
      "ret3m": -7.95,
      "ret6m": -15.51,
      "ret1y": -14.08,
      "ret2y": -0.65,
      "ret3y": 31.68
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9076,
      "ret1w": 1.61,
      "ret1m": -1.65,
      "ret3m": -13.7,
      "ret6m": -29.91,
      "ret1y": -35.57,
      "ret2y": -18.03,
      "ret3y": -0.7
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9663,
      "ret1w": 1.61,
      "ret1m": -1.64,
      "ret3m": -13.68,
      "ret6m": -29.84,
      "ret1y": -35.44,
      "ret2y": -17.72,
      "ret3y": 0.09
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0305,
      "ret1w": 0.1,
      "ret1m": -0.5,
      "ret3m": -2.35,
      "ret6m": -5.98,
      "ret1y": -6.16,
      "ret2y": -4.76,
      "ret3y": 1.5
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0063,
      "ret1w": 0.09,
      "ret1m": -0.49,
      "ret3m": -2.31,
      "ret6m": -5.85,
      "ret1y": -5.88,
      "ret2y": -4.19,
      "ret3y": 2.73
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6973,
      "ret1w": 0.23,
      "ret1m": -1.62,
      "ret3m": 0.3,
      "ret6m": -3.29,
      "ret1y": -9.23,
      "ret2y": -12.52,
      "ret3y": 1.1
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7157,
      "ret1w": 0.22,
      "ret1m": -1.61,
      "ret3m": 0.34,
      "ret6m": -3.18,
      "ret1y": -9.0,
      "ret2y": -12.09,
      "ret3y": 2.11
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8967,
      "ret1w": 1.85,
      "ret1m": 0.49,
      "ret3m": -16.88,
      "ret6m": -33.63,
      "ret1y": -33.83,
      "ret2y": 6.75,
      "ret3y": 68.27
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.1863,
      "ret1w": 2.53,
      "ret1m": -3.38,
      "ret3m": -6.66,
      "ret6m": -14.61,
      "ret1y": -17.83,
      "ret2y": 7.84,
      "ret3y": 44.28
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6729,
      "ret1w": 3.75,
      "ret1m": -4.12,
      "ret3m": -5.94,
      "ret6m": -9.31,
      "ret1y": -23.13,
      "ret2y": -14.75,
      "ret3y": -3.18
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.7293,
      "ret1w": 3.86,
      "ret1m": -2.85,
      "ret3m": -8.43,
      "ret6m": -12.11,
      "ret1y": -14.58,
      "ret2y": 28.79,
      "ret3y": 84.75
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4476,
      "ret1w": -0.53,
      "ret1m": -0.25,
      "ret3m": -3.87,
      "ret6m": -12.37,
      "ret1y": -19.07,
      "ret2y": 1.57,
      "ret3y": 22.93
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4566,
      "ret1w": -0.52,
      "ret1m": -0.24,
      "ret3m": -3.83,
      "ret6m": -12.28,
      "ret1y": -18.9,
      "ret2y": 1.99,
      "ret3y": 23.91
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2579,
      "ret1w": -0.4,
      "ret1m": -0.28,
      "ret3m": 0.51,
      "ret6m": -1.41,
      "ret1y": -1.8,
      "ret2y": -2.41,
      "ret3y": 0.33
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0531,
      "ret1w": 0.2,
      "ret1m": -0.43,
      "ret3m": -2.83,
      "ret6m": -6.87,
      "ret1y": -3.54,
      "ret2y": -7.91,
      "ret3y": 0.63
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1635,
      "ret1w": 0.07,
      "ret1m": -0.39,
      "ret3m": 0.01,
      "ret6m": -19.91,
      "ret1y": -31.49,
      "ret2y": -20.59,
      "ret3y": -16.73
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6417,
      "ret1w": 1.41,
      "ret1m": 0.52,
      "ret3m": -6.5,
      "ret6m": -11.96,
      "ret1y": -15.71,
      "ret2y": -3.42,
      "ret3y": 23.91
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.032,
      "ret1w": 2.01,
      "ret1m": -1.41,
      "ret3m": -19.94,
      "ret6m": -39.56,
      "ret1y": -48.41,
      "ret2y": 3.3,
      "ret3y": 62.69
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.592,
      "ret1w": -0.69,
      "ret1m": -0.62,
      "ret3m": 5.6,
      "ret6m": 7.98,
      "ret1y": 9.18,
      "ret2y": 5.4,
      "ret3y": 7.61
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4577,
      "ret1w": 4.45,
      "ret1m": -9.72,
      "ret3m": -14.11,
      "ret6m": -29.14,
      "ret1y": -39.78,
      "ret2y": -15.05,
      "ret3y": -25.26
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 8.208,
      "ret1w": 3.74,
      "ret1m": 1.79,
      "ret3m": -24.66,
      "ret6m": -44.3,
      "ret1y": -38.39,
      "ret2y": 17.06,
      "ret3y": 101.42
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0435,
      "ret1w": 0.09,
      "ret1m": 0.01,
      "ret3m": -1.12,
      "ret6m": -2.32,
      "ret1y": -2.7,
      "ret2y": -1.21,
      "ret3y": 1.56
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0912,
      "ret1w": 0.09,
      "ret1m": 0.02,
      "ret3m": -1.12,
      "ret6m": -2.29,
      "ret1y": -2.61,
      "ret2y": -1.01,
      "ret3y": 2.18
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": 0.0,
      "ret1m": 0.09,
      "ret3m": -0.06,
      "ret6m": 0.28,
      "ret1y": 0.55,
      "ret2y": 1.46,
      "ret3y": 2.73
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1022,
      "ret1w": 0.01,
      "ret1m": 0.09,
      "ret3m": 0.02,
      "ret6m": 0.35,
      "ret1y": 0.67,
      "ret2y": 1.49,
      "ret3y": 3.76
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1121,
      "ret1w": 0.01,
      "ret1m": 0.1,
      "ret3m": 0.03,
      "ret6m": 0.4,
      "ret1y": 0.77,
      "ret2y": 1.69,
      "ret3y": 4.19
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0782,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.0,
      "ret6m": 0.21,
      "ret1y": 0.55,
      "ret2y": 1.39,
      "ret3y": 2.78
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0933,
      "ret1w": -0.01,
      "ret1m": 0.06,
      "ret3m": 0.02,
      "ret6m": 0.28,
      "ret1y": 0.7,
      "ret2y": 1.69,
      "ret3y": 3.42
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.9875,
      "ret1w": 0.41,
      "ret1m": -0.52,
      "ret3m": -3.23,
      "ret6m": -7.76,
      "ret1y": -9.81,
      "ret2y": -1.01,
      "ret3y": 3.38
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1285,
      "ret1w": 0.8,
      "ret1m": -1.3,
      "ret3m": -4.04,
      "ret6m": -7.68,
      "ret1y": -10.55,
      "ret2y": -5.74,
      "ret3y": -2.58
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9946,
      "ret1w": 0.41,
      "ret1m": -0.51,
      "ret3m": -3.2,
      "ret6m": -7.67,
      "ret1y": -9.63,
      "ret2y": -0.62,
      "ret3y": 4.21
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0445,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": -0.09,
      "ret6m": 0.29,
      "ret1y": 0.64,
      "ret2y": 1.57,
      "ret3y": 3.45
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0819,
      "ret1w": 0.14,
      "ret1m": -0.14,
      "ret3m": -3.69,
      "ret6m": -7.86,
      "ret1y": -10.48,
      "ret2y": -7.8,
      "ret3y": -1.47
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1995,
      "ret1w": 0.02,
      "ret1m": -0.22,
      "ret3m": 0.03,
      "ret6m": -1.41,
      "ret1y": -2.28,
      "ret2y": 1.22,
      "ret3y": 10.0
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1122,
      "ret1w": 0.19,
      "ret1m": -0.07,
      "ret3m": -0.77,
      "ret6m": -2.55,
      "ret1y": -3.61,
      "ret2y": 0.83,
      "ret3y": 6.78
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.183,
      "ret1w": 0.19,
      "ret1m": -0.07,
      "ret3m": -0.74,
      "ret6m": -2.45,
      "ret1y": -3.41,
      "ret2y": 1.24,
      "ret3y": 7.67
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.54,
      "ret1w": -10.26,
      "ret1m": -17.6,
      "ret3m": -28.1,
      "ret6m": -35.4,
      "ret1y": -34.66,
      "ret2y": 15.36,
      "ret3y": 55.71
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.7049,
      "ret1w": -3.38,
      "ret1m": -7.11,
      "ret3m": -9.09,
      "ret6m": -8.6,
      "ret1y": -7.86,
      "ret2y": -1.26,
      "ret3y": 18.0
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.5769,
      "ret1w": -2.07,
      "ret1m": -3.68,
      "ret3m": -7.57,
      "ret6m": -15.17,
      "ret1y": -24.12,
      "ret2y": -11.35,
      "ret3y": 14.28
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 1.8681,
      "ret1w": -6.32,
      "ret1m": -12.87,
      "ret3m": -19.64,
      "ret6m": -21.95,
      "ret1y": -16.38,
      "ret2y": -1.31,
      "ret3y": 16.24
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9246,
      "ret1w": 0.46,
      "ret1m": 0.83,
      "ret3m": 0.77,
      "ret6m": -1.33,
      "ret1y": -1.74,
      "ret2y": -5.53,
      "ret3y": -2.61
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.0441,
      "ret1w": -4.86,
      "ret1m": -9.91,
      "ret3m": -16.39,
      "ret6m": -23.19,
      "ret1y": -24.25,
      "ret2y": 11.44,
      "ret3y": 41.47
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.045,
      "ret1w": -3.3,
      "ret1m": -8.34,
      "ret3m": -10.05,
      "ret6m": -11.74,
      "ret1y": -11.47,
      "ret2y": -6.08,
      "ret3y": 1.94
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.703,
      "ret1w": -5.13,
      "ret1m": -8.82,
      "ret3m": -15.81,
      "ret6m": -28.34,
      "ret1y": -27.07,
      "ret2y": -38.71,
      "ret3y": -24.16
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 1.9533,
      "ret1w": -7.43,
      "ret1m": -15.86,
      "ret3m": -24.3,
      "ret6m": -31.9,
      "ret1y": -31.13,
      "ret2y": 16.63,
      "ret3y": 71.28
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.3366,
      "ret1w": -2.18,
      "ret1m": -10.3,
      "ret3m": -15.78,
      "ret6m": -17.49,
      "ret1y": -12.44,
      "ret2y": 8.15,
      "ret3y": 27.32
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.4335,
      "ret1w": -3.38,
      "ret1m": -8.09,
      "ret3m": -12.49,
      "ret6m": -16.17,
      "ret1y": -12.25,
      "ret2y": 1.77,
      "ret3y": 28.6
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.0837,
      "ret1w": -3.29,
      "ret1m": -8.36,
      "ret3m": -10.31,
      "ret6m": -17.91,
      "ret1y": -16.41,
      "ret2y": -7.34,
      "ret3y": 11.39
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.25,
      "ret1w": -0.87,
      "ret1m": -3.85,
      "ret3m": 0.32,
      "ret6m": -5.73,
      "ret1y": -5.52,
      "ret2y": 3.31,
      "ret3y": -10.05
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.694,
      "ret1w": -3.42,
      "ret1m": -8.38,
      "ret3m": -13.57,
      "ret6m": -21.57,
      "ret1y": -22.89,
      "ret2y": -17.69,
      "ret3y": 18.66
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 4.8245,
      "ret1w": -4.62,
      "ret1m": -9.58,
      "ret3m": -16.87,
      "ret6m": -23.24,
      "ret1y": -23.63,
      "ret2y": 8.11,
      "ret3y": 24.06
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0134,
      "ret1w": -0.02,
      "ret1m": 0.2,
      "ret3m": 0.09,
      "ret6m": 0.58,
      "ret1y": 1.12,
      "ret2y": 2.39,
      "ret3y": 3.76
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0011,
      "ret1w": -0.02,
      "ret1m": 0.19,
      "ret3m": 0.09,
      "ret6m": 0.61,
      "ret1y": 1.13,
      "ret2y": 2.45,
      "ret3y": 3.92
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.179,
      "ret1w": 0.51,
      "ret1m": -0.51,
      "ret3m": -5.53,
      "ret6m": -18.13,
      "ret1y": -24.23,
      "ret2y": -14.25,
      "ret3y": -2.08
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.152,
      "ret1w": 1.37,
      "ret1m": -1.69,
      "ret3m": -10.52,
      "ret6m": -25.64,
      "ret1y": -29.56,
      "ret2y": -14.57,
      "ret3y": 3.56
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3486,
      "ret1w": 1.16,
      "ret1m": -2.75,
      "ret3m": -9.63,
      "ret6m": -21.47,
      "ret1y": -22.63,
      "ret2y": -7.68,
      "ret3y": 27.95
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.7988,
      "ret1w": 0.49,
      "ret1m": -0.52,
      "ret3m": -5.83,
      "ret6m": -16.37,
      "ret1y": -17.53,
      "ret2y": -6.27,
      "ret3y": 8.1
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8519,
      "ret1w": 0.49,
      "ret1m": -0.52,
      "ret3m": -5.8,
      "ret6m": -16.28,
      "ret1y": -17.36,
      "ret2y": -5.89,
      "ret3y": 8.97
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6012,
      "ret1w": 1.86,
      "ret1m": -2.54,
      "ret3m": -9.57,
      "ret6m": -20.94,
      "ret1y": -27.04,
      "ret2y": -8.99,
      "ret3y": 7.77
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5618,
      "ret1w": 0.09,
      "ret1m": -0.52,
      "ret3m": -3.39,
      "ret6m": -13.33,
      "ret1y": -16.61,
      "ret2y": -9.31,
      "ret3y": 5.17
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.3751,
      "ret1w": 1.24,
      "ret1m": -2.71,
      "ret3m": -7.06,
      "ret6m": -13.13,
      "ret1y": -16.88,
      "ret2y": -2.98,
      "ret3y": 18.17
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4396,
      "ret1w": 1.22,
      "ret1m": -0.35,
      "ret3m": -10.95,
      "ret6m": -28.61,
      "ret1y": -33.7,
      "ret2y": -14.85,
      "ret3y": 5.81
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9925,
      "ret1w": -0.65,
      "ret1m": -0.27,
      "ret3m": 0.01,
      "ret6m": -7.82,
      "ret1y": -6.29,
      "ret2y": -7.84,
      "ret3y": 7.64
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4136,
      "ret1w": -1.26,
      "ret1m": -5.68,
      "ret3m": -4.8,
      "ret6m": -7.26,
      "ret1y": -4.0,
      "ret2y": 3.97,
      "ret3y": 24.9
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 2.9423,
      "ret1w": -5.12,
      "ret1m": -9.57,
      "ret3m": -13.93,
      "ret6m": -13.9,
      "ret1y": -14.79,
      "ret2y": -2.19,
      "ret3y": 10.76
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1374,
      "ret1w": 1.05,
      "ret1m": -0.83,
      "ret3m": -8.74,
      "ret6m": -24.75,
      "ret1y": -29.02,
      "ret2y": -15.3,
      "ret3y": 3.35
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9242,
      "ret1w": -0.39,
      "ret1m": -5.21,
      "ret3m": -9.94,
      "ret6m": -21.6,
      "ret1y": -27.19,
      "ret2y": -15.06,
      "ret3y": 4.67
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9275,
      "ret1w": -0.39,
      "ret1m": -5.21,
      "ret3m": -9.92,
      "ret6m": -21.42,
      "ret1y": -26.96,
      "ret2y": -14.96,
      "ret3y": 4.37
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1693,
      "ret1w": -1.83,
      "ret1m": -3.78,
      "ret3m": -7.41,
      "ret6m": -17.17,
      "ret1y": -26.32,
      "ret2y": -14.34,
      "ret3y": 2.35
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.1971,
      "ret1w": -1.83,
      "ret1m": -3.77,
      "ret3m": -7.38,
      "ret6m": -17.08,
      "ret1y": -26.17,
      "ret2y": -14.0,
      "ret3y": 3.18
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5565,
      "ret1w": -1.59,
      "ret1m": -6.5,
      "ret3m": -12.57,
      "ret6m": -23.65,
      "ret1y": -31.96,
      "ret2y": -16.01,
      "ret3y": 7.94
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.152,
      "ret1w": 0.11,
      "ret1m": 0.23,
      "ret3m": -0.66,
      "ret6m": -1.21,
      "ret1y": -1.56,
      "ret2y": 0.4,
      "ret3y": 4.69
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1724,
      "ret1w": 0.11,
      "ret1m": 0.22,
      "ret3m": -0.64,
      "ret6m": -1.14,
      "ret1y": -1.4,
      "ret2y": 0.7,
      "ret3y": 5.32
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0878,
      "ret1w": 0.0,
      "ret1m": 0.11,
      "ret3m": -0.03,
      "ret6m": 0.36,
      "ret1y": 0.7,
      "ret2y": 1.77,
      "ret3y": 3.32
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4102,
      "ret1w": -0.01,
      "ret1m": 0.12,
      "ret3m": -0.14,
      "ret6m": 0.0,
      "ret1y": 0.16,
      "ret2y": 0.42,
      "ret3y": 4.74
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4638,
      "ret1w": 0.0,
      "ret1m": 0.13,
      "ret3m": -0.1,
      "ret6m": 0.11,
      "ret1y": 0.36,
      "ret2y": 0.83,
      "ret3y": 5.58
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7837,
      "ret1w": 1.41,
      "ret1m": -0.79,
      "ret3m": -8.49,
      "ret6m": -15.95,
      "ret1y": -11.37,
      "ret2y": 3.93,
      "ret3y": 27.11
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9339,
      "ret1w": 2.81,
      "ret1m": -2.19,
      "ret3m": -13.04,
      "ret6m": -24.93,
      "ret1y": -24.67,
      "ret2y": -17.63,
      "ret3y": 2.08
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.28,
      "nav": 3.5559,
      "price": 3.5559,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.6229,
      "price": 2.6229,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.0,
      "nav": 2.9703,
      "price": 2.9703,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.03,
      "nav": 0.7718,
      "price": 0.7718,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.8206,
      "price": 1.8206,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.23,
      "nav": 2.4621,
      "price": 2.4621,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 5.2054,
      "price": 5.2054,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.541,
      "price": 1.541,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 1.0684,
      "price": 1.0684,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.416,
      "price": 2.416,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.154,
      "price": 1.154,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.37,
      "nav": 2.041,
      "price": 2.041,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 1.1803,
      "price": 1.1803,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.8698,
      "price": 1.8698,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.3294,
      "price": 1.3294,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 1.2555,
      "price": 1.2555,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 2.5245,
      "price": 2.5245,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 0.874,
      "price": 0.874,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.4205,
      "price": 2.4205,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.129,
      "price": 1.129,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.34,
      "sharpe": -3.17,
      "calmar": -3.17
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 1.46,
      "sharpe": -7.68,
      "calmar": -7.68
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 0.08,
      "sharpe": -9.32,
      "calmar": -9.32
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.02,
      "sharpe": 1.96,
      "calmar": 1.96
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 6.18,
      "sharpe": -3.54,
      "calmar": -3.54
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 7.0,
      "sharpe": -2.38,
      "calmar": -2.38
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.59,
      "sharpe": -0.8,
      "calmar": -0.8
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.89,
      "sharpe": -3.34,
      "calmar": -3.34
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.68,
      "sharpe": -4.64,
      "calmar": -4.64
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.81,
      "sharpe": -4.49,
      "calmar": -4.49
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.31,
      "sharpe": 1.02,
      "calmar": 1.02
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 11.02,
      "sharpe": -1.48,
      "calmar": -1.48
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 3.12,
      "sharpe": -8.44,
      "calmar": -8.44
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.18,
      "sharpe": 0.75,
      "calmar": 0.75
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 4.11,
      "sharpe": -3.38,
      "calmar": -3.38
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.64,
      "sharpe": -6.13,
      "calmar": -6.13
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.64,
      "sharpe": -0.5,
      "calmar": -0.5
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.53,
      "sharpe": -1.22,
      "calmar": -1.22
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.8,
      "sharpe": 0.83,
      "calmar": 0.83
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 4.72,
      "sharpe": -1.73,
      "calmar": -1.73
    }
  ],
  "news": [
    {
      "title": "今年前三季度，天津全社会用电量达899.4亿千瓦时，同比增长3.8%；第三产业用电量同比增长12%，以算力中心为代表的新兴产业用电量同比猛增86.8%，占第三产业用电量的12.2%；前三季度信息传输、软件和信息技术服务业用电增速达55%，信创产业用电量同比增长70.4%，江天数据、盘古云泰、光环新网等数据中心用电量均成倍增长。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "05:55",
      "impact": "neutral"
    },
    {
      "title": "物流是实体经济的“筋络”。作为国家综合能源基地，山西跳出铁路运煤的老路，推动传统货运向现代综合物流转型。物流总包直达厂区、铁水联运“一单制”通江达海、特色班列奔向世界……铁轨之上，昔日运煤通道变身物流枢纽，通道优势转化为发展动能，助力资源型地区加快转型。有效降低全社会物流成本，是畅通国民经济循环的重要举措。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "05:55",
      "impact": "neutral"
    },
    {
      "title": "国家能源局：2026年1—10月份全社会用电量同比增长3.7%据国家能源局数据显示，10月份，全社会用电量8709亿千瓦时，同比增长1.6%，较9月份回升0.4个百分点。考虑去年10月存在高增长基数的特殊性（10.4%，2025年月度最高），如以2024年10月为测算基准，2026年10月的复合年均增长率为6.1%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "04:26",
      "impact": "neutral"
    },
    {
      "title": "今年1至10月，扬州新增就业创业大学生2.99万人，同比增长10.26%。2025年，扬州新增就业大学生人数占城镇新增就业人数的比重居江苏第一，留才率已连续两年居全省首位。扬州本地高校不多，又处在上海和南京两个都市圈之间，在吸引年轻人上本来不占优势。这几年，扬州把引才重点放在离得最近、高校最集中的南京，南京拥有54所高校、110万在校大学生。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:51",
      "impact": "neutral"
    },
    {
      "title": "近日，全国药品联盟集中带量采购（单克隆抗体类）发布第1号公告，正式启动信息申报工作。这是国内规模最大的单抗类生物药联盟集采，纳入7个单抗品种、合计15个品规，全部是临床刚需、使用体量较大的重磅药物。业内专家指出，这标志着集采改革从胰岛素这一相对单纯的生物药，迈入单抗这一高度复杂生物药的“深水区”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:34",
      "impact": "neutral"
    },
    {
      "title": "近期，随着寒潮天气影响贵州全省，南方电网贵州电网公司所属各单位迅速行动，一手抓覆冰监测预警，一手抓设备缺陷消除，全面打响今冬明春防冰抗冰与迎峰度冬保供攻坚战。11月9日，南方电网贵州运行分公司依托覆冰在线监测终端、气象预报预警系统，持续对贵州全省重冰区输电线路开展24小时冰情盯防，于当日监测到毕节区域110千伏龙中线覆冰情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:34",
      "impact": "neutral"
    },
    {
      "title": "“停车在路边买个包子是2块钱，但是停车费要交10块钱！”今年初，这条上海的新闻视频，在社交平台收获多个“10万+”。各界对优化停车收费政策的呼吁，得到了回应。近日，上海道路停车收费新政正式施行。新政提出，单台机动车辆在道路停车场单次停放15分钟以内免费，可享受工作日每天2次、周末和节假日每天3次。记者注意到，今年以来，多地优化道路或公共停车场的收费政策。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:34",
      "impact": "neutral"
    },
    {
      "title": "国家能源局11月23日发布数据显示，10月，全社会用电量8709亿千瓦时，同比增长1.6%，较9月份回升0.4个百分点。考虑去年10月存在高增长基数的特殊性（10.4%，2025年月度最高），如以2024年10月为测算基准，2026年10月的复合年均增长率为6.1%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:34",
      "impact": "neutral"
    },
    {
      "title": "从全超导托卡马克核聚变实验装置刷新世界纪录，到量子计算原型机“九章四号”再展锋芒；从全球最大27.1万立方米LNG船开工建造，到T1200级超高强度碳纤维全球首次量产……“十五五”开局之年，一系列前沿创新成果竞相迸发，培育壮大新质生产力取得新突破、焕发新活力。当前，全球经济风浪迭起，不确定性交织叠加。中国经济顶压前行，呈现动能向新、结构向优的发展态势。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:33",
      "impact": "neutral"
    },
    {
      "title": "11月23日，国家卫生健康委发布《关于加强生育友好医院和儿童友好医院建设与管理的通知》，将继续提高广大孕产妇和儿童看病就医的便利度和满意度。生育友好医院要以改善广大孕产妇分娩体验为核心，重点增加产科病房单人间和双人间数量，营造温馨、舒适的产房环境，提供以产妇为中心的人性化分娩服务，努力提供“全天候”镇痛分娩服务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "03:15",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 53,
    "label": "中性",
    "upDownRatio": "3,938/1,030",
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
