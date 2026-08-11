// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-11 12:31:48
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-11 12:31 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-11",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3934.09,
      "change": -32.5,
      "changePct": "-0.82%",
      "high": 3966.39,
      "low": 3930.64,
      "volume": 529490944.0,
      "amount": 1066737090000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14259.44,
      "change": -57.52,
      "changePct": "-0.40%",
      "high": 14447.1,
      "low": 14201.29,
      "volume": 643011992.0,
      "amount": 1254248830000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3549.16,
      "change": 11.95,
      "changePct": "+0.34%",
      "high": 3601.59,
      "low": 3517.57,
      "volume": 190755076.0,
      "amount": 597523820000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1709.5,
      "change": -28.27,
      "changePct": "-1.63%",
      "high": 1753.14,
      "low": 1699.92,
      "volume": 11830175.0,
      "amount": 110405790000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4663.79,
      "change": -38.23,
      "changePct": "-0.81%",
      "high": 4715.88,
      "low": 4660.47,
      "volume": 209699098.0,
      "amount": 645384760000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7967.54,
      "change": -63.41,
      "changePct": "-0.79%",
      "high": 8078.36,
      "low": 7947.67,
      "volume": 195083693.0,
      "amount": 452799550000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.13万亿",
      "label": "成交额",
      "rawAmount": 4127099840000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,452/1,774",
      "label": "涨/跌家数",
      "rawUp": 2452,
      "rawDown": 1774,
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
    "totalInflow": 12.53,
    "totalOutflow": 0,
    "netFlow": 12.53,
    "netFlowTrend": [
      2.51,
      5.01,
      7.52,
      10.02,
      12.53
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
      "inflow": 8.32,
      "pct": 0.31
    },
    {
      "name": "创新药",
      "inflow": 4.34,
      "pct": 0.33
    },
    {
      "name": "光伏",
      "inflow": 0.7,
      "pct": 0.7
    },
    {
      "name": "云计算",
      "inflow": 0.46,
      "pct": 0.12
    },
    {
      "name": "家电",
      "inflow": 0.18,
      "pct": 0.35
    },
    {
      "name": "食品",
      "inflow": -0.06,
      "pct": -1.16
    },
    {
      "name": "计算机",
      "inflow": -0.11,
      "pct": -0.73
    },
    {
      "name": "地产",
      "inflow": -0.25,
      "pct": -0.57
    },
    {
      "name": "新能源",
      "inflow": -0.48,
      "pct": -0.04
    },
    {
      "name": "新能源车",
      "inflow": -0.57,
      "pct": -0.77
    },
    {
      "name": "人工智能",
      "inflow": -0.66,
      "pct": -0.1
    },
    {
      "name": "传媒",
      "inflow": -0.94,
      "pct": -1.02
    },
    {
      "name": "白酒",
      "inflow": -2.0,
      "pct": -0.9
    },
    {
      "name": "医疗",
      "inflow": -2.23,
      "pct": -0.57
    },
    {
      "name": "医药",
      "inflow": -2.24,
      "pct": -0.49
    },
    {
      "name": "5G",
      "inflow": -2.31,
      "pct": -0.2
    },
    {
      "name": "券商",
      "inflow": -2.4,
      "pct": -0.57
    },
    {
      "name": "煤炭",
      "inflow": -2.83,
      "pct": -0.08
    },
    {
      "name": "银行",
      "inflow": -3.78,
      "pct": -0.37
    },
    {
      "name": "半导体",
      "inflow": -4.18,
      "pct": -1.02
    }
  ],
  "sectors": [
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.868,
      "changePct": 0.7,
      "change": 0.006,
      "turnover": 2.32
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.432,
      "changePct": 0.35,
      "change": 0.005,
      "turnover": 0.61
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.922,
      "changePct": 0.33,
      "change": 0.003,
      "turnover": 14.46
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.646,
      "changePct": 0.31,
      "change": 0.002,
      "turnover": 27.74
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.735,
      "changePct": 0.12,
      "change": 0.002,
      "turnover": 1.55
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.575,
      "changePct": -0.04,
      "change": -0.001,
      "turnover": 1.6
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.261,
      "changePct": -0.08,
      "change": -0.001,
      "turnover": 9.45
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.049,
      "changePct": -0.1,
      "change": -0.001,
      "turnover": 2.2
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.017,
      "changePct": -0.2,
      "change": -0.002,
      "turnover": 7.71
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.8,
      "changePct": -0.37,
      "change": -0.003,
      "turnover": 12.61
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.403,
      "changePct": -0.49,
      "change": -0.002,
      "turnover": 7.47
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.522,
      "changePct": -0.57,
      "change": -0.003,
      "turnover": 8.0
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.351,
      "changePct": -0.57,
      "change": -0.002,
      "turnover": 7.43
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.22,
      "changePct": -0.57,
      "change": -0.007,
      "turnover": 0.82
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.222,
      "changePct": -0.73,
      "change": -0.009,
      "turnover": 0.38
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.667,
      "changePct": -0.77,
      "change": -0.013,
      "turnover": 1.9
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.441,
      "changePct": -0.9,
      "change": -0.004,
      "turnover": 6.68
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.07,
      "changePct": -1.02,
      "change": -0.011,
      "turnover": 13.94
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.87,
      "changePct": -1.02,
      "change": -0.009,
      "turnover": 3.15
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.513,
      "changePct": -1.16,
      "change": -0.006,
      "turnover": 0.21
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.049,
      "changePct": -1.22,
      "change": -0.013,
      "turnover": 0.05
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.87,
      "changePct": -1.36,
      "change": -0.012,
      "turnover": 0.67
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.187,
      "changePct": -1.49,
      "change": -0.018,
      "turnover": 7.55
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.163,
      "changePct": -1.61,
      "change": -0.019,
      "turnover": 0.85
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.73,
      "changePct": -1.62,
      "change": -0.012,
      "turnover": 1.02
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.124,
      "changePct": -1.83,
      "change": -0.021,
      "turnover": 1.04
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.148,
      "changePct": -2.05,
      "change": -0.024,
      "turnover": 2.26
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.922,
      "changePct": -4.76,
      "change": -0.096,
      "turnover": 21.21
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.575,
      "changePct": -0.04,
      "amount": 1.6,
      "netFlow": -0.4
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.935,
      "changePct": -0.64,
      "amount": 4.71,
      "netFlow": -1.18
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.587,
      "changePct": -0.76,
      "amount": 5.2,
      "netFlow": -1.3
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.403,
      "changePct": -0.49,
      "amount": 7.47,
      "netFlow": -1.87
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.522,
      "changePct": -0.57,
      "amount": 8.0,
      "netFlow": -2.0
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.039,
      "changePct": -1.17,
      "amount": 11.53,
      "netFlow": -2.88
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.07,
      "changePct": -1.02,
      "amount": 13.94,
      "netFlow": -3.48
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.989,
      "changePct": -0.6,
      "amount": 17.57,
      "netFlow": -4.39
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.728,
      "changePct": -0.65,
      "amount": 25.41,
      "netFlow": -6.35
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.806,
      "changePct": -1.58,
      "amount": 58.44,
      "netFlow": -14.61
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.728,
      "changePct": -0.65,
      "amount": 25.41,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.039,
      "changePct": -1.17,
      "amount": 11.53,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.989,
      "changePct": -0.6,
      "amount": 17.57,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.935,
      "changePct": -0.64,
      "amount": 4.71,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.587,
      "changePct": -0.76,
      "amount": 5.2,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "光伏",
      "turnover": 2.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.61,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 14.46,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 27.74,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 9.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 2.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 7.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 12.61,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 7.47,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 8.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 7.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.82,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 6.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 13.94,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "传媒",
      "turnover": 3.15,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.4203,
      "ret1w": 0.02,
      "ret1m": 10.16,
      "ret3m": -12.59,
      "ret6m": -12.56,
      "ret1y": 0.91,
      "ret2y": 46.79,
      "ret3y": 152.01
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.1726,
      "ret1w": -1.17,
      "ret1m": 2.55,
      "ret3m": -10.43,
      "ret6m": -15.35,
      "ret1y": 7.71,
      "ret2y": 19.15,
      "ret3y": 70.46
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.9502,
      "ret1w": -0.82,
      "ret1m": 4.28,
      "ret3m": -16.74,
      "ret6m": -10.71,
      "ret1y": 26.14,
      "ret2y": 104.36,
      "ret3y": 224.73
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.721,
      "ret1w": -0.35,
      "ret1m": 0.07,
      "ret3m": 8.7,
      "ret6m": -2.78,
      "ret1y": -10.86,
      "ret2y": -11.54,
      "ret3y": 9.89
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.281,
      "ret1w": -0.73,
      "ret1m": -1.03,
      "ret3m": 4.58,
      "ret6m": -20.58,
      "ret1y": -25.61,
      "ret2y": -4.52,
      "ret3y": 21.85
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.8021,
      "ret1w": -1.86,
      "ret1m": 0.36,
      "ret3m": 4.71,
      "ret6m": -19.55,
      "ret1y": -30.5,
      "ret2y": -6.3,
      "ret3y": 33.98
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5751,
      "ret1w": 0.18,
      "ret1m": 1.09,
      "ret3m": 8.4,
      "ret6m": -2.9,
      "ret1y": -6.62,
      "ret2y": 22.94,
      "ret3y": 56.16
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.901,
      "ret1w": -0.99,
      "ret1m": 5.14,
      "ret3m": -7.99,
      "ret6m": -11.29,
      "ret1y": -6.08,
      "ret2y": 11.89,
      "ret3y": 67.49
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3624,
      "ret1w": -0.83,
      "ret1m": 3.6,
      "ret3m": -4.43,
      "ret6m": -6.75,
      "ret1y": -0.1,
      "ret2y": 18.08,
      "ret3y": 47.73
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.517,
      "ret1w": -0.82,
      "ret1m": 8.89,
      "ret3m": -12.14,
      "ret6m": 6.74,
      "ret1y": 39.12,
      "ret2y": 138.44,
      "ret3y": 281.87
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.151,
      "ret1w": -0.6,
      "ret1m": 2.77,
      "ret3m": 12.95,
      "ret6m": 0.44,
      "ret1y": -7.77,
      "ret2y": -8.87,
      "ret3y": 2.04
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.474,
      "ret1w": 0.61,
      "ret1m": 5.01,
      "ret3m": 10.1,
      "ret6m": -7.41,
      "ret1y": -14.22,
      "ret2y": -9.68,
      "ret3y": 36.16
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.816,
      "ret1w": -1.3,
      "ret1m": 9.21,
      "ret3m": -19.39,
      "ret6m": -44.38,
      "ret1y": -44.83,
      "ret2y": -14.34,
      "ret3y": 28.61
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9521,
      "ret1w": -0.26,
      "ret1m": 1.47,
      "ret3m": 4.79,
      "ret6m": 6.03,
      "ret1y": -4.35,
      "ret2y": 2.93,
      "ret3y": 10.58
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6538,
      "ret1w": -0.73,
      "ret1m": 6.37,
      "ret3m": -4.49,
      "ret6m": -8.99,
      "ret1y": -4.12,
      "ret2y": 14.2,
      "ret3y": 69.53
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.348,
      "ret1w": -0.58,
      "ret1m": 6.35,
      "ret3m": -23.18,
      "ret6m": -11.45,
      "ret1y": 34.16,
      "ret2y": 95.23,
      "ret3y": 203.56
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.529,
      "ret1w": -1.02,
      "ret1m": 0.79,
      "ret3m": 5.55,
      "ret6m": -8.69,
      "ret1y": -12.6,
      "ret2y": -5.75,
      "ret3y": 19.07
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.101,
      "ret1w": 0.36,
      "ret1m": 15.05,
      "ret3m": 2.13,
      "ret6m": 11.66,
      "ret1y": 6.07,
      "ret2y": -1.96,
      "ret3y": 10.65
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3532,
      "ret1w": -0.28,
      "ret1m": 0.25,
      "ret3m": 7.35,
      "ret6m": -3.55,
      "ret1y": -8.63,
      "ret2y": 9.61,
      "ret3y": 16.54
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3215,
      "ret1w": 0.61,
      "ret1m": 8.02,
      "ret3m": 0.92,
      "ret6m": -1.43,
      "ret1y": 1.4,
      "ret2y": 25.55,
      "ret3y": 77.29
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.3093,
      "ret1w": -0.46,
      "ret1m": 4.0,
      "ret3m": -5.68,
      "ret6m": -6.46,
      "ret1y": -1.1,
      "ret2y": 30.43,
      "ret3y": 47.88
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3925,
      "ret1w": -0.46,
      "ret1m": 4.02,
      "ret3m": -5.64,
      "ret6m": -6.36,
      "ret1y": -0.91,
      "ret2y": 30.95,
      "ret3y": 49.07
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0961,
      "ret1w": -0.15,
      "ret1m": -0.59,
      "ret3m": -0.41,
      "ret6m": -0.35,
      "ret1y": 1.15,
      "ret2y": 2.61,
      "ret3y": 9.14
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0686,
      "ret1w": -0.15,
      "ret1m": -0.58,
      "ret3m": -0.35,
      "ret6m": -0.2,
      "ret1y": 1.45,
      "ret2y": 3.24,
      "ret3y": 10.46
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7381,
      "ret1w": -0.62,
      "ret1m": 1.01,
      "ret3m": 3.27,
      "ret6m": -9.34,
      "ret1y": -13.07,
      "ret2y": -2.42,
      "ret3y": 16.35
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7566,
      "ret1w": -0.62,
      "ret1m": 1.03,
      "ret3m": 3.33,
      "ret6m": -9.22,
      "ret1y": -12.85,
      "ret2y": -1.93,
      "ret3y": 17.52
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.7622,
      "ret1w": -0.78,
      "ret1m": 2.57,
      "ret3m": -12.15,
      "ret6m": 0.3,
      "ret1y": 35.85,
      "ret2y": 103.66,
      "ret3y": 160.22
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5683,
      "ret1w": -0.04,
      "ret1m": 4.73,
      "ret3m": -4.94,
      "ret6m": -4.08,
      "ret1y": 4.99,
      "ret2y": 43.24,
      "ret3y": 87.21
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7517,
      "ret1w": -0.41,
      "ret1m": 3.98,
      "ret3m": -5.79,
      "ret6m": -17.28,
      "ret1y": -15.44,
      "ret2y": -0.46,
      "ret3y": 17.82
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.3007,
      "ret1w": 1.0,
      "ret1m": 7.32,
      "ret3m": -12.01,
      "ret6m": 1.67,
      "ret1y": 23.89,
      "ret2y": 71.92,
      "ret3y": 146.64
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5248,
      "ret1w": -0.7,
      "ret1m": 0.75,
      "ret3m": -11.96,
      "ret6m": -3.03,
      "ret1y": 2.84,
      "ret2y": 29.93,
      "ret3y": 51.9
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5347,
      "ret1w": -0.71,
      "ret1m": 0.75,
      "ret3m": -11.94,
      "ret6m": -2.94,
      "ret1y": 3.04,
      "ret2y": 30.48,
      "ret3y": 53.12
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2811,
      "ret1w": 0.05,
      "ret1m": 0.86,
      "ret3m": 3.68,
      "ret6m": -0.7,
      "ret1y": -0.76,
      "ret2y": -0.41,
      "ret3y": 1.31
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1508,
      "ret1w": -0.49,
      "ret1m": 0.69,
      "ret3m": 1.79,
      "ret6m": 0.32,
      "ret1y": -6.36,
      "ret2y": 5.38,
      "ret3y": 23.7
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4576,
      "ret1w": -0.23,
      "ret1m": 2.94,
      "ret3m": -8.04,
      "ret6m": -15.04,
      "ret1y": 0.18,
      "ret2y": -1.15,
      "ret3y": 18.86
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0236,
      "ret1w": 0.01,
      "ret1m": 1.39,
      "ret3m": 6.27,
      "ret6m": -6.49,
      "ret1y": -5.7,
      "ret2y": 22.32,
      "ret3y": 45.0
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.344,
      "ret1w": -0.83,
      "ret1m": 0.94,
      "ret3m": -23.86,
      "ret6m": -15.11,
      "ret1y": 42.6,
      "ret2y": 139.2,
      "ret3y": 204.0
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4622,
      "ret1w": -0.29,
      "ret1m": -1.52,
      "ret3m": 3.91,
      "ret6m": -1.74,
      "ret1y": -1.78,
      "ret2y": -3.03,
      "ret3y": 7.61
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6428,
      "ret1w": -3.44,
      "ret1m": 6.02,
      "ret3m": -22.41,
      "ret6m": -18.69,
      "ret1y": -8.21,
      "ret2y": 8.78,
      "ret3y": 47.67
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.701,
      "ret1w": -0.26,
      "ret1m": 7.36,
      "ret3m": -9.41,
      "ret6m": 23.94,
      "ret1y": 77.4,
      "ret2y": 202.93,
      "ret3y": 349.3
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0667,
      "ret1w": -0.05,
      "ret1m": 0.08,
      "ret3m": -0.66,
      "ret6m": -0.46,
      "ret1y": 0.05,
      "ret2y": 1.7,
      "ret3y": 4.64
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1151,
      "ret1w": -0.04,
      "ret1m": 0.08,
      "ret3m": -0.63,
      "ret6m": -0.39,
      "ret1y": 0.17,
      "ret2y": 1.99,
      "ret3y": 5.38
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0638,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.13,
      "ret6m": 0.3,
      "ret1y": 0.76,
      "ret2y": 1.36,
      "ret3y": 2.67
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0979,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.1,
      "ret6m": 0.33,
      "ret1y": 0.78,
      "ret2y": 1.45,
      "ret3y": 3.81
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1071,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.38,
      "ret1y": 0.87,
      "ret2y": 1.65,
      "ret3y": 4.23
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0756,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.36,
      "ret1y": 0.72,
      "ret2y": 1.25,
      "ret3y": 2.72
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0898,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.16,
      "ret6m": 0.44,
      "ret1y": 0.87,
      "ret2y": 1.57,
      "ret3y": 3.38
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0707,
      "ret1w": -0.26,
      "ret1m": 1.41,
      "ret3m": -1.81,
      "ret6m": -2.61,
      "ret1y": 1.26,
      "ret2y": 9.25,
      "ret3y": 12.89
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2211,
      "ret1w": -0.21,
      "ret1m": 1.92,
      "ret3m": -2.32,
      "ret6m": -3.58,
      "ret1y": 0.07,
      "ret2y": 2.67,
      "ret3y": 7.39
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0772,
      "ret1w": -0.26,
      "ret1m": 1.42,
      "ret3m": -1.78,
      "ret6m": -2.51,
      "ret1y": 1.46,
      "ret2y": 9.69,
      "ret3y": 13.81
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0448,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.12,
      "ret6m": 0.39,
      "ret1y": 0.85,
      "ret2y": 1.63,
      "ret3y": 3.51
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1695,
      "ret1w": -0.09,
      "ret1m": 0.18,
      "ret3m": -2.21,
      "ret6m": -3.63,
      "ret1y": -3.02,
      "ret2y": 2.26,
      "ret3y": 9.87
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.221,
      "ret1w": -0.11,
      "ret1m": 0.18,
      "ret3m": 0.19,
      "ret6m": -1.17,
      "ret1y": 0.01,
      "ret2y": 5.93,
      "ret3y": 15.18
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1417,
      "ret1w": -0.24,
      "ret1m": 0.97,
      "ret3m": -1.22,
      "ret6m": -1.11,
      "ret1y": 0.88,
      "ret2y": 5.86,
      "ret3y": 10.32
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.213,
      "ret1w": -0.24,
      "ret1m": 0.98,
      "ret3m": -1.19,
      "ret6m": -1.01,
      "ret1y": 1.08,
      "ret2y": 6.29,
      "ret3y": 11.24
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.256,
      "ret1w": -1.36,
      "ret1m": 1.12,
      "ret3m": -11.98,
      "ret6m": -6.2,
      "ret1y": 36.73,
      "ret2y": 86.14,
      "ret3y": 141.8
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9841,
      "ret1w": -0.02,
      "ret1m": 1.22,
      "ret3m": 1.87,
      "ret6m": 2.05,
      "ret1y": 6.96,
      "ret2y": 13.19,
      "ret3y": 39.08
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.9244,
      "ret1w": 0.01,
      "ret1m": 2.49,
      "ret3m": -0.03,
      "ret6m": -11.43,
      "ret1y": -7.1,
      "ret2y": 12.83,
      "ret3y": 60.49
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3749,
      "ret1w": 0.54,
      "ret1m": 7.15,
      "ret3m": 1.17,
      "ret6m": 4.03,
      "ret1y": 18.25,
      "ret2y": 30.7,
      "ret3y": 86.56
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9365,
      "ret1w": -0.22,
      "ret1m": -0.04,
      "ret3m": -0.4,
      "ret6m": -1.39,
      "ret1y": -2.85,
      "ret2y": -3.24,
      "ret3y": -1.41
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6269,
      "ret1w": -0.95,
      "ret1m": 1.63,
      "ret3m": -7.18,
      "ret6m": -5.02,
      "ret1y": 25.31,
      "ret2y": 55.91,
      "ret3y": 102.68
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.648,
      "ret1w": 0.09,
      "ret1m": 1.8,
      "ret3m": 0.13,
      "ret6m": 0.56,
      "ret1y": 2.67,
      "ret2y": 8.14,
      "ret3y": 28.33
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.273,
      "ret1w": 1.19,
      "ret1m": 9.27,
      "ret3m": 4.17,
      "ret6m": -3.85,
      "ret1y": -6.4,
      "ret2y": -9.46,
      "ret3y": 120.62
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.964,
      "ret1w": 1.26,
      "ret1m": 9.17,
      "ret3m": -2.82,
      "ret6m": -10.33,
      "ret1y": -13.15,
      "ret2y": -16.25,
      "ret3y": 48.54
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8066,
      "ret1w": 0.09,
      "ret1m": 2.17,
      "ret3m": -6.67,
      "ret6m": -4.54,
      "ret1y": 33.08,
      "ret2y": 86.56,
      "ret3y": 141.95
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5405,
      "ret1w": 2.24,
      "ret1m": 5.47,
      "ret3m": 10.4,
      "ret6m": 0.44,
      "ret1y": 1.77,
      "ret2y": 39.39,
      "ret3y": 52.92
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6792,
      "ret1w": 0.22,
      "ret1m": -0.19,
      "ret3m": -1.59,
      "ret6m": -0.18,
      "ret1y": 5.68,
      "ret2y": 28.43,
      "ret3y": 56.63
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2961,
      "ret1w": 0.5,
      "ret1m": 1.34,
      "ret3m": -0.32,
      "ret6m": -4.23,
      "ret1y": 2.36,
      "ret2y": 18.89,
      "ret3y": 41.28
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.312,
      "ret1w": -1.2,
      "ret1m": -1.5,
      "ret3m": -0.68,
      "ret6m": -0.76,
      "ret1y": 3.23,
      "ret2y": 6.49,
      "ret3y": -4.31
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.093,
      "ret1w": 0.43,
      "ret1m": 7.44,
      "ret3m": 5.71,
      "ret6m": -8.32,
      "ret1y": -14.88,
      "ret2y": 18.85,
      "ret3y": 58.77
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0101,
      "ret1w": -0.02,
      "ret1m": 0.08,
      "ret3m": 0.16,
      "ret6m": 0.58,
      "ret1y": 1.43,
      "ret2y": 1.75,
      "ret3y": 3.54
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0089,
      "ret1w": -0.03,
      "ret1m": 0.08,
      "ret3m": 0.16,
      "ret6m": 0.55,
      "ret1y": 1.43,
      "ret2y": 1.8,
      "ret3y": 3.72
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.463,
      "ret1w": -0.48,
      "ret1m": 1.53,
      "ret3m": -4.5,
      "ret6m": -6.93,
      "ret1y": 1.39,
      "ret2y": 16.11,
      "ret3y": 38.8
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.908,
      "ret1w": -0.27,
      "ret1m": 3.05,
      "ret3m": -3.87,
      "ret6m": -6.31,
      "ret1y": 2.54,
      "ret2y": 29.19,
      "ret3y": 66.27
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6961,
      "ret1w": -3.1,
      "ret1m": 6.28,
      "ret3m": 7.96,
      "ret6m": -8.92,
      "ret1y": -10.19,
      "ret2y": 42.02,
      "ret3y": 72.37
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1601,
      "ret1w": -0.43,
      "ret1m": 2.24,
      "ret3m": -1.62,
      "ret6m": -2.81,
      "ret1y": 3.76,
      "ret2y": 19.99,
      "ret3y": 45.44
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2214,
      "ret1w": -0.43,
      "ret1m": 2.25,
      "ret3m": -1.58,
      "ret6m": -2.72,
      "ret1y": 3.96,
      "ret2y": 20.47,
      "ret3y": 46.62
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0547,
      "ret1w": -0.76,
      "ret1m": 4.51,
      "ret3m": -5.98,
      "ret6m": -8.84,
      "ret1y": -3.52,
      "ret2y": 24.27,
      "ret3y": 67.54
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8181,
      "ret1w": -0.76,
      "ret1m": 1.32,
      "ret3m": -2.07,
      "ret6m": -4.77,
      "ret1y": -0.21,
      "ret2y": 13.67,
      "ret3y": 41.5
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.6014,
      "ret1w": -0.73,
      "ret1m": 1.52,
      "ret3m": 0.5,
      "ret6m": -7.28,
      "ret1y": -4.53,
      "ret2y": 19.61,
      "ret3y": 56.01
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.0355,
      "ret1w": -0.62,
      "ret1m": 2.13,
      "ret3m": -8.69,
      "ret6m": -4.87,
      "ret1y": 11.69,
      "ret2y": 39.84,
      "ret3y": 83.31
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1733,
      "ret1w": -0.97,
      "ret1m": 0.88,
      "ret3m": 5.64,
      "ret6m": -2.71,
      "ret1y": -1.96,
      "ret2y": 9.42,
      "ret3y": 31.56
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5252,
      "ret1w": -0.28,
      "ret1m": 0.1,
      "ret3m": 3.26,
      "ret6m": 4.49,
      "ret1y": 2.52,
      "ret2y": 14.23,
      "ret3y": 34.72
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4653,
      "ret1w": -0.34,
      "ret1m": 2.69,
      "ret3m": -0.75,
      "ret6m": 0.51,
      "ret1y": 14.12,
      "ret2y": 16.9,
      "ret3y": 46.57
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8405,
      "ret1w": -0.03,
      "ret1m": 0.91,
      "ret3m": -3.34,
      "ret6m": -7.03,
      "ret1y": 5.91,
      "ret2y": 26.57,
      "ret3y": 63.62
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.2021,
      "ret1w": 2.05,
      "ret1m": 7.07,
      "ret3m": -7.06,
      "ret6m": -5.52,
      "ret1y": 3.12,
      "ret2y": 23.61,
      "ret3y": 54.33
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2036,
      "ret1w": 2.02,
      "ret1m": 7.05,
      "ret3m": -7.07,
      "ret6m": -5.55,
      "ret1y": 3.1,
      "ret2y": 22.72,
      "ret3y": 53.81
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4271,
      "ret1w": 0.26,
      "ret1m": 7.42,
      "ret3m": -5.78,
      "ret6m": -8.49,
      "ret1y": -4.5,
      "ret2y": 12.18,
      "ret3y": 42.27
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4594,
      "ret1w": 0.26,
      "ret1m": 7.43,
      "ret3m": -5.75,
      "ret6m": -8.39,
      "ret1y": -4.31,
      "ret2y": 12.63,
      "ret3y": 43.42
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0698,
      "ret1w": 0.42,
      "ret1m": 7.59,
      "ret3m": -14.76,
      "ret6m": -7.6,
      "ret1y": 0.73,
      "ret2y": 24.74,
      "ret3y": 66.14
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1699,
      "ret1w": -0.09,
      "ret1m": 0.02,
      "ret3m": 0.09,
      "ret6m": -0.32,
      "ret1y": -0.04,
      "ret2y": 2.41,
      "ret3y": 7.83
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1897,
      "ret1w": -0.08,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": -0.24,
      "ret1y": 0.12,
      "ret2y": 2.73,
      "ret3y": 8.49
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0835,
      "ret1w": -0.01,
      "ret1m": 0.02,
      "ret3m": 0.16,
      "ret6m": 0.38,
      "ret1y": 0.9,
      "ret2y": 1.66,
      "ret3y": 3.26
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4109,
      "ret1w": 0.02,
      "ret1m": -0.06,
      "ret3m": 0.12,
      "ret6m": 0.09,
      "ret1y": 0.18,
      "ret2y": 0.69,
      "ret3y": 10.17
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4628,
      "ret1w": 0.02,
      "ret1m": -0.05,
      "ret3m": 0.16,
      "ret6m": 0.18,
      "ret1y": 0.38,
      "ret2y": 1.08,
      "ret3y": 11.06
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1331,
      "ret1w": -0.55,
      "ret1m": 0.89,
      "ret3m": -1.68,
      "ret6m": 8.1,
      "ret1y": 11.44,
      "ret2y": 30.31,
      "ret3y": 67.01
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2595,
      "ret1w": -0.76,
      "ret1m": 0.41,
      "ret3m": 1.4,
      "ret6m": -0.02,
      "ret1y": 4.55,
      "ret2y": 13.75,
      "ret3y": 51.13
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-07-15",
        "nav": 4.7313
      },
      {
        "date": "2026-07-16",
        "nav": 4.6216
      },
      {
        "date": "2026-07-17",
        "nav": 4.2704
      },
      {
        "date": "2026-07-20",
        "nav": 4.0514
      },
      {
        "date": "2026-07-21",
        "nav": 4.2649
      },
      {
        "date": "2026-07-22",
        "nav": 4.198
      },
      {
        "date": "2026-07-23",
        "nav": 4.1715
      },
      {
        "date": "2026-07-24",
        "nav": 4.0696
      },
      {
        "date": "2026-07-27",
        "nav": 4.2369
      },
      {
        "date": "2026-07-28",
        "nav": 3.978
      },
      {
        "date": "2026-07-29",
        "nav": 3.9157
      },
      {
        "date": "2026-07-30",
        "nav": 3.636
      },
      {
        "date": "2026-07-31",
        "nav": 3.793
      },
      {
        "date": "2026-08-03",
        "nav": 3.7885
      },
      {
        "date": "2026-08-04",
        "nav": 4.0128
      },
      {
        "date": "2026-08-05",
        "nav": 4.2314
      },
      {
        "date": "2026-08-06",
        "nav": 4.2852
      },
      {
        "date": "2026-08-07",
        "nav": 4.4331
      },
      {
        "date": "2026-08-10",
        "nav": 4.4196
      },
      {
        "date": "2026-08-11",
        "nav": 4.4203
      }
    ],
    "580008": [
      {
        "date": "2026-07-15",
        "nav": 4.6678
      },
      {
        "date": "2026-07-16",
        "nav": 4.5904
      },
      {
        "date": "2026-07-17",
        "nav": 4.2425
      },
      {
        "date": "2026-07-20",
        "nav": 4.2068
      },
      {
        "date": "2026-07-21",
        "nav": 4.4867
      },
      {
        "date": "2026-07-22",
        "nav": 4.3302
      },
      {
        "date": "2026-07-23",
        "nav": 4.3219
      },
      {
        "date": "2026-07-24",
        "nav": 4.2422
      },
      {
        "date": "2026-07-27",
        "nav": 4.3954
      },
      {
        "date": "2026-07-28",
        "nav": 4.0434
      },
      {
        "date": "2026-07-29",
        "nav": 4.0647
      },
      {
        "date": "2026-07-30",
        "nav": 3.7703
      },
      {
        "date": "2026-07-31",
        "nav": 3.9011
      },
      {
        "date": "2026-08-03",
        "nav": 3.8217
      },
      {
        "date": "2026-08-04",
        "nav": 4.069
      },
      {
        "date": "2026-08-05",
        "nav": 4.1625
      },
      {
        "date": "2026-08-06",
        "nav": 4.1845
      },
      {
        "date": "2026-08-07",
        "nav": 4.282
      },
      {
        "date": "2026-08-10",
        "nav": 4.222
      },
      {
        "date": "2026-08-11",
        "nav": 4.1726
      }
    ],
    "540010": [
      {
        "date": "2026-07-15",
        "nav": 5.8833
      },
      {
        "date": "2026-07-16",
        "nav": 5.6614
      },
      {
        "date": "2026-07-17",
        "nav": 5.0366
      },
      {
        "date": "2026-07-20",
        "nav": 4.7826
      },
      {
        "date": "2026-07-21",
        "nav": 5.2434
      },
      {
        "date": "2026-07-22",
        "nav": 5.0397
      },
      {
        "date": "2026-07-23",
        "nav": 4.9743
      },
      {
        "date": "2026-07-24",
        "nav": 4.8552
      },
      {
        "date": "2026-07-27",
        "nav": 5.0118
      },
      {
        "date": "2026-07-28",
        "nav": 4.4468
      },
      {
        "date": "2026-07-29",
        "nav": 4.4108
      },
      {
        "date": "2026-07-30",
        "nav": 3.9689
      },
      {
        "date": "2026-07-31",
        "nav": 4.1872
      },
      {
        "date": "2026-08-03",
        "nav": 4.2423
      },
      {
        "date": "2026-08-04",
        "nav": 4.7468
      },
      {
        "date": "2026-08-05",
        "nav": 4.7803
      },
      {
        "date": "2026-08-06",
        "nav": 4.8797
      },
      {
        "date": "2026-08-07",
        "nav": 5.0516
      },
      {
        "date": "2026-08-10",
        "nav": 4.991
      },
      {
        "date": "2026-08-11",
        "nav": 4.9502
      }
    ],
    "540009": [
      {
        "date": "2026-07-15",
        "nav": 0.6887
      },
      {
        "date": "2026-07-16",
        "nav": 0.6928
      },
      {
        "date": "2026-07-17",
        "nav": 0.6826
      },
      {
        "date": "2026-07-20",
        "nav": 0.7002
      },
      {
        "date": "2026-07-21",
        "nav": 0.6984
      },
      {
        "date": "2026-07-22",
        "nav": 0.7036
      },
      {
        "date": "2026-07-23",
        "nav": 0.7045
      },
      {
        "date": "2026-07-24",
        "nav": 0.6953
      },
      {
        "date": "2026-07-27",
        "nav": 0.7098
      },
      {
        "date": "2026-07-28",
        "nav": 0.7217
      },
      {
        "date": "2026-07-29",
        "nav": 0.7301
      },
      {
        "date": "2026-07-30",
        "nav": 0.7426
      },
      {
        "date": "2026-07-31",
        "nav": 0.7418
      },
      {
        "date": "2026-08-03",
        "nav": 0.7354
      },
      {
        "date": "2026-08-04",
        "nav": 0.7205
      },
      {
        "date": "2026-08-05",
        "nav": 0.7186
      },
      {
        "date": "2026-08-06",
        "nav": 0.7141
      },
      {
        "date": "2026-08-07",
        "nav": 0.7104
      },
      {
        "date": "2026-08-10",
        "nav": 0.7235
      },
      {
        "date": "2026-08-11",
        "nav": 0.721
      }
    ],
    "540008": [
      {
        "date": "2026-07-15",
        "nav": 2.0975
      },
      {
        "date": "2026-07-16",
        "nav": 2.0867
      },
      {
        "date": "2026-07-17",
        "nav": 2.0512
      },
      {
        "date": "2026-07-20",
        "nav": 2.0782
      },
      {
        "date": "2026-07-21",
        "nav": 2.1083
      },
      {
        "date": "2026-07-22",
        "nav": 2.1399
      },
      {
        "date": "2026-07-23",
        "nav": 2.1907
      },
      {
        "date": "2026-07-24",
        "nav": 2.1048
      },
      {
        "date": "2026-07-27",
        "nav": 2.1442
      },
      {
        "date": "2026-07-28",
        "nav": 2.1403
      },
      {
        "date": "2026-07-29",
        "nav": 2.1834
      },
      {
        "date": "2026-07-30",
        "nav": 2.2145
      },
      {
        "date": "2026-07-31",
        "nav": 2.2136
      },
      {
        "date": "2026-08-03",
        "nav": 2.3108
      },
      {
        "date": "2026-08-04",
        "nav": 2.3048
      },
      {
        "date": "2026-08-05",
        "nav": 2.3089
      },
      {
        "date": "2026-08-06",
        "nav": 2.2591
      },
      {
        "date": "2026-08-07",
        "nav": 2.3043
      },
      {
        "date": "2026-08-10",
        "nav": 2.2978
      },
      {
        "date": "2026-08-11",
        "nav": 2.281
      }
    ],
    "540007": [
      {
        "date": "2026-07-15",
        "nav": 2.6212
      },
      {
        "date": "2026-07-16",
        "nav": 2.5871
      },
      {
        "date": "2026-07-17",
        "nav": 2.5324
      },
      {
        "date": "2026-07-20",
        "nav": 2.5288
      },
      {
        "date": "2026-07-21",
        "nav": 2.5587
      },
      {
        "date": "2026-07-22",
        "nav": 2.6094
      },
      {
        "date": "2026-07-23",
        "nav": 2.6957
      },
      {
        "date": "2026-07-24",
        "nav": 2.6064
      },
      {
        "date": "2026-07-27",
        "nav": 2.6953
      },
      {
        "date": "2026-07-28",
        "nav": 2.7001
      },
      {
        "date": "2026-07-29",
        "nav": 2.7386
      },
      {
        "date": "2026-07-30",
        "nav": 2.7503
      },
      {
        "date": "2026-07-31",
        "nav": 2.7661
      },
      {
        "date": "2026-08-03",
        "nav": 2.8104
      },
      {
        "date": "2026-08-04",
        "nav": 2.7921
      },
      {
        "date": "2026-08-05",
        "nav": 2.8475
      },
      {
        "date": "2026-08-06",
        "nav": 2.8347
      },
      {
        "date": "2026-08-07",
        "nav": 2.8203
      },
      {
        "date": "2026-08-10",
        "nav": 2.8553
      },
      {
        "date": "2026-08-11",
        "nav": 2.8021
      }
    ],
    "540006": [
      {
        "date": "2026-07-15",
        "nav": 5.3149
      },
      {
        "date": "2026-07-16",
        "nav": 5.3047
      },
      {
        "date": "2026-07-17",
        "nav": 5.2407
      },
      {
        "date": "2026-07-20",
        "nav": 5.3892
      },
      {
        "date": "2026-07-21",
        "nav": 5.4281
      },
      {
        "date": "2026-07-22",
        "nav": 5.4655
      },
      {
        "date": "2026-07-23",
        "nav": 5.5301
      },
      {
        "date": "2026-07-24",
        "nav": 5.4199
      },
      {
        "date": "2026-07-27",
        "nav": 5.4908
      },
      {
        "date": "2026-07-28",
        "nav": 5.5082
      },
      {
        "date": "2026-07-29",
        "nav": 5.619
      },
      {
        "date": "2026-07-30",
        "nav": 5.6475
      },
      {
        "date": "2026-07-31",
        "nav": 5.6074
      },
      {
        "date": "2026-08-03",
        "nav": 5.5725
      },
      {
        "date": "2026-08-04",
        "nav": 5.5149
      },
      {
        "date": "2026-08-05",
        "nav": 5.5498
      },
      {
        "date": "2026-08-06",
        "nav": 5.5248
      },
      {
        "date": "2026-08-07",
        "nav": 5.5077
      },
      {
        "date": "2026-08-10",
        "nav": 5.5653
      },
      {
        "date": "2026-08-11",
        "nav": 5.5751
      }
    ],
    "519975": [
      {
        "date": "2026-07-15",
        "nav": 1.964
      },
      {
        "date": "2026-07-16",
        "nav": 1.902
      },
      {
        "date": "2026-07-17",
        "nav": 1.781
      },
      {
        "date": "2026-07-20",
        "nav": 1.722
      },
      {
        "date": "2026-07-21",
        "nav": 1.79
      },
      {
        "date": "2026-07-22",
        "nav": 1.76
      },
      {
        "date": "2026-07-23",
        "nav": 1.79
      },
      {
        "date": "2026-07-24",
        "nav": 1.737
      },
      {
        "date": "2026-07-27",
        "nav": 1.809
      },
      {
        "date": "2026-07-28",
        "nav": 1.758
      },
      {
        "date": "2026-07-29",
        "nav": 1.776
      },
      {
        "date": "2026-07-30",
        "nav": 1.725
      },
      {
        "date": "2026-07-31",
        "nav": 1.765
      },
      {
        "date": "2026-08-03",
        "nav": 1.766
      },
      {
        "date": "2026-08-04",
        "nav": 1.808
      },
      {
        "date": "2026-08-05",
        "nav": 1.864
      },
      {
        "date": "2026-08-06",
        "nav": 1.873
      },
      {
        "date": "2026-08-07",
        "nav": 1.91
      },
      {
        "date": "2026-08-10",
        "nav": 1.92
      },
      {
        "date": "2026-08-11",
        "nav": 1.901
      }
    ],
    "519965": [
      {
        "date": "2026-07-15",
        "nav": 1.4027
      },
      {
        "date": "2026-07-16",
        "nav": 1.3654
      },
      {
        "date": "2026-07-17",
        "nav": 1.2968
      },
      {
        "date": "2026-07-20",
        "nav": 1.2867
      },
      {
        "date": "2026-07-21",
        "nav": 1.3465
      },
      {
        "date": "2026-07-22",
        "nav": 1.323
      },
      {
        "date": "2026-07-23",
        "nav": 1.3382
      },
      {
        "date": "2026-07-24",
        "nav": 1.3074
      },
      {
        "date": "2026-07-27",
        "nav": 1.3391
      },
      {
        "date": "2026-07-28",
        "nav": 1.2889
      },
      {
        "date": "2026-07-29",
        "nav": 1.3027
      },
      {
        "date": "2026-07-30",
        "nav": 1.2675
      },
      {
        "date": "2026-07-31",
        "nav": 1.2875
      },
      {
        "date": "2026-08-03",
        "nav": 1.2784
      },
      {
        "date": "2026-08-04",
        "nav": 1.315
      },
      {
        "date": "2026-08-05",
        "nav": 1.3471
      },
      {
        "date": "2026-08-06",
        "nav": 1.3471
      },
      {
        "date": "2026-08-07",
        "nav": 1.371
      },
      {
        "date": "2026-08-10",
        "nav": 1.3738
      },
      {
        "date": "2026-08-11",
        "nav": 1.3624
      }
    ],
    "519935": [
      {
        "date": "2026-07-15",
        "nav": 3.853
      },
      {
        "date": "2026-07-16",
        "nav": 3.703
      },
      {
        "date": "2026-07-17",
        "nav": 3.423
      },
      {
        "date": "2026-07-20",
        "nav": 3.351
      },
      {
        "date": "2026-07-21",
        "nav": 3.638
      },
      {
        "date": "2026-07-22",
        "nav": 3.622
      },
      {
        "date": "2026-07-23",
        "nav": 3.553
      },
      {
        "date": "2026-07-24",
        "nav": 3.543
      },
      {
        "date": "2026-07-27",
        "nav": 3.586
      },
      {
        "date": "2026-07-28",
        "nav": 3.389
      },
      {
        "date": "2026-07-29",
        "nav": 3.331
      },
      {
        "date": "2026-07-30",
        "nav": 3.145
      },
      {
        "date": "2026-07-31",
        "nav": 3.236
      },
      {
        "date": "2026-08-03",
        "nav": 3.079
      },
      {
        "date": "2026-08-04",
        "nav": 3.23
      },
      {
        "date": "2026-08-05",
        "nav": 3.388
      },
      {
        "date": "2026-08-06",
        "nav": 3.429
      },
      {
        "date": "2026-08-07",
        "nav": 3.543
      },
      {
        "date": "2026-08-10",
        "nav": 3.546
      },
      {
        "date": "2026-08-11",
        "nav": 3.517
      }
    ],
    "519714": [
      {
        "date": "2026-07-15",
        "nav": 1.063
      },
      {
        "date": "2026-07-16",
        "nav": 1.067
      },
      {
        "date": "2026-07-17",
        "nav": 1.043
      },
      {
        "date": "2026-07-20",
        "nav": 1.073
      },
      {
        "date": "2026-07-21",
        "nav": 1.074
      },
      {
        "date": "2026-07-22",
        "nav": 1.072
      },
      {
        "date": "2026-07-23",
        "nav": 1.074
      },
      {
        "date": "2026-07-24",
        "nav": 1.059
      },
      {
        "date": "2026-07-27",
        "nav": 1.077
      },
      {
        "date": "2026-07-28",
        "nav": 1.105
      },
      {
        "date": "2026-07-29",
        "nav": 1.121
      },
      {
        "date": "2026-07-30",
        "nav": 1.132
      },
      {
        "date": "2026-07-31",
        "nav": 1.135
      },
      {
        "date": "2026-08-03",
        "nav": 1.129
      },
      {
        "date": "2026-08-04",
        "nav": 1.12
      },
      {
        "date": "2026-08-05",
        "nav": 1.122
      },
      {
        "date": "2026-08-06",
        "nav": 1.117
      },
      {
        "date": "2026-08-07",
        "nav": 1.117
      },
      {
        "date": "2026-08-10",
        "nav": 1.158
      },
      {
        "date": "2026-08-11",
        "nav": 1.151
      }
    ],
    "519673": [
      {
        "date": "2026-07-15",
        "nav": 2.343
      },
      {
        "date": "2026-07-16",
        "nav": 2.396
      },
      {
        "date": "2026-07-17",
        "nav": 2.254
      },
      {
        "date": "2026-07-20",
        "nav": 2.273
      },
      {
        "date": "2026-07-21",
        "nav": 2.251
      },
      {
        "date": "2026-07-22",
        "nav": 2.262
      },
      {
        "date": "2026-07-23",
        "nav": 2.255
      },
      {
        "date": "2026-07-24",
        "nav": 2.183
      },
      {
        "date": "2026-07-27",
        "nav": 2.262
      },
      {
        "date": "2026-07-28",
        "nav": 2.254
      },
      {
        "date": "2026-07-29",
        "nav": 2.289
      },
      {
        "date": "2026-07-30",
        "nav": 2.265
      },
      {
        "date": "2026-07-31",
        "nav": 2.303
      },
      {
        "date": "2026-08-03",
        "nav": 2.323
      },
      {
        "date": "2026-08-04",
        "nav": 2.356
      },
      {
        "date": "2026-08-05",
        "nav": 2.364
      },
      {
        "date": "2026-08-06",
        "nav": 2.357
      },
      {
        "date": "2026-08-07",
        "nav": 2.431
      },
      {
        "date": "2026-08-10",
        "nav": 2.459
      },
      {
        "date": "2026-08-11",
        "nav": 2.474
      }
    ],
    "519606": [
      {
        "date": "2026-07-15",
        "nav": 2.1272
      },
      {
        "date": "2026-07-16",
        "nav": 2.0319
      },
      {
        "date": "2026-07-17",
        "nav": 1.8915
      },
      {
        "date": "2026-07-20",
        "nav": 1.8654
      },
      {
        "date": "2026-07-21",
        "nav": 2.0882
      },
      {
        "date": "2026-07-22",
        "nav": 2.0429
      },
      {
        "date": "2026-07-23",
        "nav": 1.9429
      },
      {
        "date": "2026-07-24",
        "nav": 1.957
      },
      {
        "date": "2026-07-27",
        "nav": 1.99
      },
      {
        "date": "2026-07-28",
        "nav": 1.8368
      },
      {
        "date": "2026-07-29",
        "nav": 1.8154
      },
      {
        "date": "2026-07-30",
        "nav": 1.6948
      },
      {
        "date": "2026-07-31",
        "nav": 1.7174
      },
      {
        "date": "2026-08-03",
        "nav": 1.5869
      },
      {
        "date": "2026-08-04",
        "nav": 1.6629
      },
      {
        "date": "2026-08-05",
        "nav": 1.75
      },
      {
        "date": "2026-08-06",
        "nav": 1.7725
      },
      {
        "date": "2026-08-07",
        "nav": 1.813
      },
      {
        "date": "2026-08-10",
        "nav": 1.84
      },
      {
        "date": "2026-08-11",
        "nav": 1.816
      }
    ],
    "519193": [
      {
        "date": "2026-07-15",
        "nav": 1.8981
      },
      {
        "date": "2026-07-16",
        "nav": 1.8833
      },
      {
        "date": "2026-07-17",
        "nav": 1.8578
      },
      {
        "date": "2026-07-20",
        "nav": 1.9066
      },
      {
        "date": "2026-07-21",
        "nav": 1.9134
      },
      {
        "date": "2026-07-22",
        "nav": 1.917
      },
      {
        "date": "2026-07-23",
        "nav": 1.9188
      },
      {
        "date": "2026-07-24",
        "nav": 1.8871
      },
      {
        "date": "2026-07-27",
        "nav": 1.905
      },
      {
        "date": "2026-07-28",
        "nav": 1.9083
      },
      {
        "date": "2026-07-29",
        "nav": 1.93
      },
      {
        "date": "2026-07-30",
        "nav": 1.9521
      },
      {
        "date": "2026-07-31",
        "nav": 1.9477
      },
      {
        "date": "2026-08-03",
        "nav": 1.9405
      },
      {
        "date": "2026-08-04",
        "nav": 1.9238
      },
      {
        "date": "2026-08-05",
        "nav": 1.9297
      },
      {
        "date": "2026-08-06",
        "nav": 1.9237
      },
      {
        "date": "2026-08-07",
        "nav": 1.926
      },
      {
        "date": "2026-08-10",
        "nav": 1.9572
      },
      {
        "date": "2026-08-11",
        "nav": 1.9521
      }
    ],
    "501219": [
      {
        "date": "2026-07-15",
        "nav": 1.6772
      },
      {
        "date": "2026-07-16",
        "nav": 1.6353
      },
      {
        "date": "2026-07-17",
        "nav": 1.5424
      },
      {
        "date": "2026-07-20",
        "nav": 1.5027
      },
      {
        "date": "2026-07-21",
        "nav": 1.5676
      },
      {
        "date": "2026-07-22",
        "nav": 1.5467
      },
      {
        "date": "2026-07-23",
        "nav": 1.5644
      },
      {
        "date": "2026-07-24",
        "nav": 1.5291
      },
      {
        "date": "2026-07-27",
        "nav": 1.5831
      },
      {
        "date": "2026-07-28",
        "nav": 1.5215
      },
      {
        "date": "2026-07-29",
        "nav": 1.5281
      },
      {
        "date": "2026-07-30",
        "nav": 1.4752
      },
      {
        "date": "2026-07-31",
        "nav": 1.5111
      },
      {
        "date": "2026-08-03",
        "nav": 1.504
      },
      {
        "date": "2026-08-04",
        "nav": 1.5547
      },
      {
        "date": "2026-08-05",
        "nav": 1.602
      },
      {
        "date": "2026-08-06",
        "nav": 1.6206
      },
      {
        "date": "2026-08-07",
        "nav": 1.6576
      },
      {
        "date": "2026-08-10",
        "nav": 1.666
      },
      {
        "date": "2026-08-11",
        "nav": 1.6538
      }
    ],
    "501201": [
      {
        "date": "2026-07-15",
        "nav": 2.9342
      },
      {
        "date": "2026-07-16",
        "nav": 2.7995
      },
      {
        "date": "2026-07-17",
        "nav": 2.5176
      },
      {
        "date": "2026-07-20",
        "nav": 2.4077
      },
      {
        "date": "2026-07-21",
        "nav": 2.6698
      },
      {
        "date": "2026-07-22",
        "nav": 2.5499
      },
      {
        "date": "2026-07-23",
        "nav": 2.471
      },
      {
        "date": "2026-07-24",
        "nav": 2.4365
      },
      {
        "date": "2026-07-27",
        "nav": 2.5114
      },
      {
        "date": "2026-07-28",
        "nav": 2.2211
      },
      {
        "date": "2026-07-29",
        "nav": 2.1896
      },
      {
        "date": "2026-07-30",
        "nav": 1.9926
      },
      {
        "date": "2026-07-31",
        "nav": 2.0934
      },
      {
        "date": "2026-08-03",
        "nav": 2.0164
      },
      {
        "date": "2026-08-04",
        "nav": 2.2079
      },
      {
        "date": "2026-08-05",
        "nav": 2.2658
      },
      {
        "date": "2026-08-06",
        "nav": 2.3138
      },
      {
        "date": "2026-08-07",
        "nav": 2.3803
      },
      {
        "date": "2026-08-10",
        "nav": 2.3617
      },
      {
        "date": "2026-08-11",
        "nav": 2.348
      }
    ],
    "450009": [
      {
        "date": "2026-07-15",
        "nav": 2.4468
      },
      {
        "date": "2026-07-16",
        "nav": 2.4477
      },
      {
        "date": "2026-07-17",
        "nav": 2.4115
      },
      {
        "date": "2026-07-20",
        "nav": 2.4513
      },
      {
        "date": "2026-07-21",
        "nav": 2.4497
      },
      {
        "date": "2026-07-22",
        "nav": 2.4905
      },
      {
        "date": "2026-07-23",
        "nav": 2.4893
      },
      {
        "date": "2026-07-24",
        "nav": 2.4391
      },
      {
        "date": "2026-07-27",
        "nav": 2.4791
      },
      {
        "date": "2026-07-28",
        "nav": 2.4885
      },
      {
        "date": "2026-07-29",
        "nav": 2.5361
      },
      {
        "date": "2026-07-30",
        "nav": 2.5465
      },
      {
        "date": "2026-07-31",
        "nav": 2.5421
      },
      {
        "date": "2026-08-03",
        "nav": 2.5459
      },
      {
        "date": "2026-08-04",
        "nav": 2.5092
      },
      {
        "date": "2026-08-05",
        "nav": 2.5251
      },
      {
        "date": "2026-08-06",
        "nav": 2.5342
      },
      {
        "date": "2026-08-07",
        "nav": 2.5309
      },
      {
        "date": "2026-08-10",
        "nav": 2.5551
      },
      {
        "date": "2026-08-11",
        "nav": 2.529
      }
    ],
    "399011": [
      {
        "date": "2026-07-14",
        "nav": 1.104
      },
      {
        "date": "2026-07-15",
        "nav": 1.144
      },
      {
        "date": "2026-07-16",
        "nav": 1.125
      },
      {
        "date": "2026-07-17",
        "nav": 1.034
      },
      {
        "date": "2026-07-20",
        "nav": 1.079
      },
      {
        "date": "2026-07-21",
        "nav": 1.095
      },
      {
        "date": "2026-07-22",
        "nav": 1.086
      },
      {
        "date": "2026-07-23",
        "nav": 1.084
      },
      {
        "date": "2026-07-24",
        "nav": 1.037
      },
      {
        "date": "2026-07-27",
        "nav": 1.056
      },
      {
        "date": "2026-07-28",
        "nav": 1.024
      },
      {
        "date": "2026-07-29",
        "nav": 1.023
      },
      {
        "date": "2026-07-30",
        "nav": 0.98
      },
      {
        "date": "2026-07-31",
        "nav": 0.993
      },
      {
        "date": "2026-08-03",
        "nav": 0.957
      },
      {
        "date": "2026-08-04",
        "nav": 0.987
      },
      {
        "date": "2026-08-05",
        "nav": 1.019
      },
      {
        "date": "2026-08-06",
        "nav": 1.014
      },
      {
        "date": "2026-08-07",
        "nav": 1.097
      },
      {
        "date": "2026-08-10",
        "nav": 1.101
      }
    ],
    "376510": [
      {
        "date": "2026-07-15",
        "nav": 2.2749
      },
      {
        "date": "2026-07-16",
        "nav": 2.2753
      },
      {
        "date": "2026-07-17",
        "nav": 2.2615
      },
      {
        "date": "2026-07-20",
        "nav": 2.3217
      },
      {
        "date": "2026-07-21",
        "nav": 2.308
      },
      {
        "date": "2026-07-22",
        "nav": 2.3238
      },
      {
        "date": "2026-07-23",
        "nav": 2.3265
      },
      {
        "date": "2026-07-24",
        "nav": 2.306
      },
      {
        "date": "2026-07-27",
        "nav": 2.329
      },
      {
        "date": "2026-07-28",
        "nav": 2.3451
      },
      {
        "date": "2026-07-29",
        "nav": 2.3769
      },
      {
        "date": "2026-07-30",
        "nav": 2.413
      },
      {
        "date": "2026-07-31",
        "nav": 2.3897
      },
      {
        "date": "2026-08-03",
        "nav": 2.3827
      },
      {
        "date": "2026-08-04",
        "nav": 2.3474
      },
      {
        "date": "2026-08-05",
        "nav": 2.3412
      },
      {
        "date": "2026-08-06",
        "nav": 2.3374
      },
      {
        "date": "2026-08-07",
        "nav": 2.3262
      },
      {
        "date": "2026-08-10",
        "nav": 2.3599
      },
      {
        "date": "2026-08-11",
        "nav": 2.3532
      }
    ],
    "360001": [
      {
        "date": "2026-07-15",
        "nav": 1.2796
      },
      {
        "date": "2026-07-16",
        "nav": 1.2585
      },
      {
        "date": "2026-07-17",
        "nav": 1.2074
      },
      {
        "date": "2026-07-20",
        "nav": 1.2025
      },
      {
        "date": "2026-07-21",
        "nav": 1.237
      },
      {
        "date": "2026-07-22",
        "nav": 1.2366
      },
      {
        "date": "2026-07-23",
        "nav": 1.2421
      },
      {
        "date": "2026-07-24",
        "nav": 1.2187
      },
      {
        "date": "2026-07-27",
        "nav": 1.2499
      },
      {
        "date": "2026-07-28",
        "nav": 1.2227
      },
      {
        "date": "2026-07-29",
        "nav": 1.2324
      },
      {
        "date": "2026-07-30",
        "nav": 1.2076
      },
      {
        "date": "2026-07-31",
        "nav": 1.2301
      },
      {
        "date": "2026-08-03",
        "nav": 1.2234
      },
      {
        "date": "2026-08-04",
        "nav": 1.2436
      },
      {
        "date": "2026-08-05",
        "nav": 1.2743
      },
      {
        "date": "2026-08-06",
        "nav": 1.2871
      },
      {
        "date": "2026-08-07",
        "nav": 1.3135
      },
      {
        "date": "2026-08-10",
        "nav": 1.3215
      },
      {
        "date": "2026-08-11",
        "nav": 1.3122
      }
    ],
    "970185": [
      {
        "date": "2026-07-15",
        "nav": 1.3597
      },
      {
        "date": "2026-07-16",
        "nav": 1.3186
      },
      {
        "date": "2026-07-17",
        "nav": 1.2563
      },
      {
        "date": "2026-07-20",
        "nav": 1.2435
      },
      {
        "date": "2026-07-21",
        "nav": 1.306
      },
      {
        "date": "2026-07-22",
        "nav": 1.2814
      },
      {
        "date": "2026-07-23",
        "nav": 1.291
      },
      {
        "date": "2026-07-24",
        "nav": 1.2667
      },
      {
        "date": "2026-07-27",
        "nav": 1.2892
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-07-15",
        "nav": 1.4456
      },
      {
        "date": "2026-07-16",
        "nav": 1.4019
      },
      {
        "date": "2026-07-17",
        "nav": 1.3356
      },
      {
        "date": "2026-07-20",
        "nav": 1.3221
      },
      {
        "date": "2026-07-21",
        "nav": 1.3885
      },
      {
        "date": "2026-07-22",
        "nav": 1.3624
      },
      {
        "date": "2026-07-23",
        "nav": 1.3726
      },
      {
        "date": "2026-07-24",
        "nav": 1.3469
      },
      {
        "date": "2026-07-27",
        "nav": 1.3709
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-07-15",
        "nav": 1.1085
      },
      {
        "date": "2026-07-16",
        "nav": 1.1041
      },
      {
        "date": "2026-07-17",
        "nav": 1.0947
      },
      {
        "date": "2026-07-20",
        "nav": 1.0996
      },
      {
        "date": "2026-07-21",
        "nav": 1.1075
      },
      {
        "date": "2026-07-22",
        "nav": 1.104
      },
      {
        "date": "2026-07-23",
        "nav": 1.1066
      },
      {
        "date": "2026-07-24",
        "nav": 1.1019
      },
      {
        "date": "2026-07-27",
        "nav": 1.1071
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-07-15",
        "nav": 1.0802
      },
      {
        "date": "2026-07-16",
        "nav": 1.0759
      },
      {
        "date": "2026-07-17",
        "nav": 1.0668
      },
      {
        "date": "2026-07-20",
        "nav": 1.0716
      },
      {
        "date": "2026-07-21",
        "nav": 1.0794
      },
      {
        "date": "2026-07-22",
        "nav": 1.076
      },
      {
        "date": "2026-07-23",
        "nav": 1.0785
      },
      {
        "date": "2026-07-24",
        "nav": 1.0739
      },
      {
        "date": "2026-07-27",
        "nav": 1.0791
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-07-15",
        "nav": 0.7318
      },
      {
        "date": "2026-07-16",
        "nav": 0.7341
      },
      {
        "date": "2026-07-17",
        "nav": 0.7105
      },
      {
        "date": "2026-07-20",
        "nav": 0.7276
      },
      {
        "date": "2026-07-21",
        "nav": 0.731
      },
      {
        "date": "2026-07-22",
        "nav": 0.7315
      },
      {
        "date": "2026-07-23",
        "nav": 0.7303
      },
      {
        "date": "2026-07-24",
        "nav": 0.7139
      },
      {
        "date": "2026-07-27",
        "nav": 0.7207
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-07-15",
        "nav": 0.7498
      },
      {
        "date": "2026-07-16",
        "nav": 0.7522
      },
      {
        "date": "2026-07-17",
        "nav": 0.728
      },
      {
        "date": "2026-07-20",
        "nav": 0.7456
      },
      {
        "date": "2026-07-21",
        "nav": 0.749
      },
      {
        "date": "2026-07-22",
        "nav": 0.7496
      },
      {
        "date": "2026-07-23",
        "nav": 0.7483
      },
      {
        "date": "2026-07-24",
        "nav": 0.7315
      },
      {
        "date": "2026-07-27",
        "nav": 0.7385
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-07-15",
        "nav": 3.1827
      },
      {
        "date": "2026-07-16",
        "nav": 3.1173
      },
      {
        "date": "2026-07-17",
        "nav": 2.8854
      },
      {
        "date": "2026-07-20",
        "nav": 2.7889
      },
      {
        "date": "2026-07-21",
        "nav": 3.0011
      },
      {
        "date": "2026-07-22",
        "nav": 2.8871
      },
      {
        "date": "2026-07-23",
        "nav": 2.8686
      },
      {
        "date": "2026-07-24",
        "nav": 2.7968
      },
      {
        "date": "2026-07-27",
        "nav": 2.9015
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-07-15",
        "nav": 2.6415
      },
      {
        "date": "2026-07-16",
        "nav": 2.5904
      },
      {
        "date": "2026-07-17",
        "nav": 2.4482
      },
      {
        "date": "2026-07-20",
        "nav": 2.4612
      },
      {
        "date": "2026-07-21",
        "nav": 2.5522
      },
      {
        "date": "2026-07-22",
        "nav": 2.5573
      },
      {
        "date": "2026-07-23",
        "nav": 2.531
      },
      {
        "date": "2026-07-24",
        "nav": 2.4911
      },
      {
        "date": "2026-07-27",
        "nav": 2.5238
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-07-15",
        "nav": 0.774
      },
      {
        "date": "2026-07-16",
        "nav": 0.762
      },
      {
        "date": "2026-07-17",
        "nav": 0.7261
      },
      {
        "date": "2026-07-20",
        "nav": 0.7192
      },
      {
        "date": "2026-07-21",
        "nav": 0.748
      },
      {
        "date": "2026-07-22",
        "nav": 0.7443
      },
      {
        "date": "2026-07-23",
        "nav": 0.7372
      },
      {
        "date": "2026-07-24",
        "nav": 0.7294
      },
      {
        "date": "2026-07-27",
        "nav": 0.7399
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-07-15",
        "nav": 4.6447
      },
      {
        "date": "2026-07-16",
        "nav": 4.5289
      },
      {
        "date": "2026-07-17",
        "nav": 4.1827
      },
      {
        "date": "2026-07-20",
        "nav": 4.1324
      },
      {
        "date": "2026-07-21",
        "nav": 4.3896
      },
      {
        "date": "2026-07-22",
        "nav": 4.4299
      },
      {
        "date": "2026-07-23",
        "nav": 4.2645
      },
      {
        "date": "2026-07-24",
        "nav": 4.2571
      },
      {
        "date": "2026-07-27",
        "nav": 4.2966
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-07-15",
        "nav": 0.5644
      },
      {
        "date": "2026-07-16",
        "nav": 0.552
      },
      {
        "date": "2026-07-17",
        "nav": 0.5323
      },
      {
        "date": "2026-07-20",
        "nav": 0.5321
      },
      {
        "date": "2026-07-21",
        "nav": 0.542
      },
      {
        "date": "2026-07-22",
        "nav": 0.5402
      },
      {
        "date": "2026-07-23",
        "nav": 0.5381
      },
      {
        "date": "2026-07-24",
        "nav": 0.5339
      },
      {
        "date": "2026-07-27",
        "nav": 0.5415
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-07-15",
        "nav": 0.5749
      },
      {
        "date": "2026-07-16",
        "nav": 0.5623
      },
      {
        "date": "2026-07-17",
        "nav": 0.5422
      },
      {
        "date": "2026-07-20",
        "nav": 0.542
      },
      {
        "date": "2026-07-21",
        "nav": 0.5522
      },
      {
        "date": "2026-07-22",
        "nav": 0.5503
      },
      {
        "date": "2026-07-23",
        "nav": 0.5482
      },
      {
        "date": "2026-07-24",
        "nav": 0.5439
      },
      {
        "date": "2026-07-27",
        "nav": 0.5516
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-07-15",
        "nav": 1.2615
      },
      {
        "date": "2026-07-16",
        "nav": 1.2486
      },
      {
        "date": "2026-07-17",
        "nav": 1.2356
      },
      {
        "date": "2026-07-20",
        "nav": 1.2552
      },
      {
        "date": "2026-07-21",
        "nav": 1.2574
      },
      {
        "date": "2026-07-22",
        "nav": 1.266
      },
      {
        "date": "2026-07-23",
        "nav": 1.2751
      },
      {
        "date": "2026-07-24",
        "nav": 1.2592
      },
      {
        "date": "2026-07-27",
        "nav": 1.2712
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-07-15",
        "nav": 1.1476
      },
      {
        "date": "2026-07-16",
        "nav": 1.1437
      },
      {
        "date": "2026-07-17",
        "nav": 1.1218
      },
      {
        "date": "2026-07-20",
        "nav": 1.1416
      },
      {
        "date": "2026-07-21",
        "nav": 1.147
      },
      {
        "date": "2026-07-22",
        "nav": 1.1485
      },
      {
        "date": "2026-07-23",
        "nav": 1.1496
      },
      {
        "date": "2026-07-24",
        "nav": 1.1346
      },
      {
        "date": "2026-07-27",
        "nav": 1.1413
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-07-15",
        "nav": 1.5763
      },
      {
        "date": "2026-07-16",
        "nav": 1.513
      },
      {
        "date": "2026-07-17",
        "nav": 1.414
      },
      {
        "date": "2026-07-20",
        "nav": 1.3755
      },
      {
        "date": "2026-07-21",
        "nav": 1.4454
      },
      {
        "date": "2026-07-22",
        "nav": 1.4003
      },
      {
        "date": "2026-07-23",
        "nav": 1.422
      },
      {
        "date": "2026-07-24",
        "nav": 1.4155
      },
      {
        "date": "2026-07-27",
        "nav": 1.4418
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-07-15",
        "nav": 2.8844
      },
      {
        "date": "2026-07-16",
        "nav": 2.8657
      },
      {
        "date": "2026-07-17",
        "nav": 2.8194
      },
      {
        "date": "2026-07-20",
        "nav": 2.9068
      },
      {
        "date": "2026-07-21",
        "nav": 2.9046
      },
      {
        "date": "2026-07-22",
        "nav": 2.9386
      },
      {
        "date": "2026-07-23",
        "nav": 2.965
      },
      {
        "date": "2026-07-24",
        "nav": 2.9329
      },
      {
        "date": "2026-07-27",
        "nav": 2.9526
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-07-15",
        "nav": 4.426
      },
      {
        "date": "2026-07-16",
        "nav": 4.302
      },
      {
        "date": "2026-07-17",
        "nav": 3.874
      },
      {
        "date": "2026-07-20",
        "nav": 3.736
      },
      {
        "date": "2026-07-21",
        "nav": 4.075
      },
      {
        "date": "2026-07-22",
        "nav": 3.895
      },
      {
        "date": "2026-07-23",
        "nav": 3.816
      },
      {
        "date": "2026-07-24",
        "nav": 3.732
      },
      {
        "date": "2026-07-27",
        "nav": 3.843
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-07-15",
        "nav": 1.4569
      },
      {
        "date": "2026-07-16",
        "nav": 1.4503
      },
      {
        "date": "2026-07-17",
        "nav": 1.4556
      },
      {
        "date": "2026-07-20",
        "nav": 1.485
      },
      {
        "date": "2026-07-21",
        "nav": 1.4658
      },
      {
        "date": "2026-07-22",
        "nav": 1.4741
      },
      {
        "date": "2026-07-23",
        "nav": 1.4799
      },
      {
        "date": "2026-07-24",
        "nav": 1.472
      },
      {
        "date": "2026-07-27",
        "nav": 1.4744
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-07-15",
        "nav": 0.7089
      },
      {
        "date": "2026-07-16",
        "nav": 0.6748
      },
      {
        "date": "2026-07-17",
        "nav": 0.6142
      },
      {
        "date": "2026-07-20",
        "nav": 0.5783
      },
      {
        "date": "2026-07-21",
        "nav": 0.6089
      },
      {
        "date": "2026-07-22",
        "nav": 0.5946
      },
      {
        "date": "2026-07-23",
        "nav": 0.6036
      },
      {
        "date": "2026-07-24",
        "nav": 0.5829
      },
      {
        "date": "2026-07-27",
        "nav": 0.6061
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-07-15",
        "nav": 16.174
      },
      {
        "date": "2026-07-16",
        "nav": 15.668
      },
      {
        "date": "2026-07-17",
        "nav": 14.338
      },
      {
        "date": "2026-07-20",
        "nav": 13.234
      },
      {
        "date": "2026-07-21",
        "nav": 14.435
      },
      {
        "date": "2026-07-22",
        "nav": 13.752
      },
      {
        "date": "2026-07-23",
        "nav": 13.83
      },
      {
        "date": "2026-07-24",
        "nav": 13.497
      },
      {
        "date": "2026-07-27",
        "nav": 14.17
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.51,
      "nav": 4.4203,
      "price": 4.4203,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 4.1726,
      "price": 4.1726,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.21,
      "nav": 4.9502,
      "price": 4.9502,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.0,
      "nav": 0.721,
      "price": 0.721,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.281,
      "price": 2.281,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.8021,
      "price": 2.8021,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 5.5751,
      "price": 5.5751,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 1.901,
      "price": 1.901,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.18,
      "nav": 1.3624,
      "price": 1.3624,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.44,
      "nav": 3.517,
      "price": 3.517,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.14,
      "nav": 1.151,
      "price": 1.151,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.25,
      "nav": 2.474,
      "price": 2.474,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.46,
      "nav": 1.816,
      "price": 1.816,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.07,
      "nav": 1.9521,
      "price": 1.9521,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.32,
      "nav": 1.6538,
      "price": 1.6538,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.32,
      "nav": 2.348,
      "price": 2.348,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 2.529,
      "price": 2.529,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.75,
      "nav": 1.101,
      "price": 1.101,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.3532,
      "price": 2.3532,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.4,
      "nav": 1.3215,
      "price": 1.3215,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 15.24,
      "sharpe": 0.06,
      "calmar": 0.06
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.82,
      "sharpe": 1.02,
      "calmar": 1.02
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 6.42,
      "sharpe": 2.82,
      "calmar": 2.82
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.11,
      "sharpe": -2.14,
      "calmar": -2.14
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 1.54,
      "sharpe": -4.25,
      "calmar": -4.25
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.54,
      "sharpe": -5.69,
      "calmar": -5.69
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.64,
      "sharpe": -1.09,
      "calmar": -1.09
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 7.71,
      "sharpe": -0.6,
      "calmar": -0.6
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.4,
      "sharpe": -0.01,
      "calmar": -0.01
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 13.34,
      "sharpe": 2.82,
      "calmar": 2.82
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 4.16,
      "sharpe": -1.0,
      "calmar": -1.0
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 7.51,
      "sharpe": -1.42,
      "calmar": -1.42
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 13.82,
      "sharpe": -3.15,
      "calmar": -3.15
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.21,
      "sharpe": -0.67,
      "calmar": -0.67
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.55,
      "sharpe": -0.36,
      "calmar": -0.36
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.52,
      "sharpe": 3.01,
      "calmar": 3.01
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.19,
      "sharpe": -2.18,
      "calmar": -2.18
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 22.58,
      "sharpe": 0.3,
      "calmar": 0.3
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.38,
      "sharpe": -1.64,
      "calmar": -1.64
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 12.03,
      "sharpe": 0.11,
      "calmar": 0.11
    }
  ],
  "news": [
    {
      "title": "《规划》提出，到2030年，把上海软件和信息服务业打造成经济增长“动力源”，AI赋能应用“主阵地”，参与全球竞争“桥头堡”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:21",
      "impact": "neutral"
    },
    {
      "title": "7月20日前后，三笔合计金额为9170万元的贷款合同在海南自贸港签下。与以往贷款利率挂钩LPR不同，三笔贷款开创性地将DR（存款类金融机构间债券回购利率）作为定价基准，首次打破国内贷款定价长期单一锚定LPR的固有模式，开启信贷利率市场化定价新探索。自海南试点破冰后，短短半个多月时间里，以DR为基准利率的贷款在全国多点开花，各区域首单业务密集落地。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:59",
      "impact": "neutral"
    },
    {
      "title": "浙江省水利厅消息，台风“白海豚”中心已移出浙江省，今日（8月11日）17时中央气象台对其停止编号，省防指已将防台风应急响应等级调整至Ⅲ级（三级）。根据《浙江省水利厅水旱灾害防御应急工作预案》，省水利厅决定于今日19时将水旱灾害防御（防台）应急响应调整至Ⅱ级（二级）。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:29",
      "impact": "neutral"
    },
    {
      "title": "人民财讯8月11日电，据广东省人民政府门户网站，8月11日，广东省委副书记、省长孟凡利主持召开加快推进项目建设工作会议，强调要坚持目标导向、问题导向、结果导向，坚决抓好下半年项目建设和投资工作。孟凡利强调，要面向长远，突出重点、全面梳理、科学谋划，尽快形成可能的、可行的、近期可操作的项目储备库，为“十五五”和更长远的经济社会发展打下坚实基础。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:26",
      "impact": "neutral"
    },
    {
      "title": "近日，中国人民银行正式印发《中国人民银行“十五五”改革发展规划》（下称《规划》），并配套制定出台了9份相关细分领域的行动方案。《规划》以加快建设金融强国为目标，加快完善中央银行制度，就“十五五”时期中国人民银行改革发展重点任务作出部署。这是“十五五”开局以来，中国人民银行发布的最高级别纲领性文件。五方面重点任务、9份配套行动方案，系统勾勒出未来五年中国金融改革的核心脉络。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:18",
      "impact": "neutral"
    },
    {
      "title": "一项技术如何从实验室走向生产线，一家科技创新企业如何读懂资本市场、迈好上市关键一步？8月10日，“资本引擎驱动，科技创新腾飞——走进深交所项目对接会”在深圳证券交易所举行。超200家来自省内外的科技创新企业代表到场，智平方、跨维智能、中科时代、晶泰科技等知名企业悉数现身。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:11",
      "impact": "neutral"
    },
    {
      "title": "宏观动态上海：围绕高性能计算芯片（GPU/NPU）等核心环节，提升智算硬件的供给能力上海市经济和信息化委员会印发《上海市软件和信息服务业发展“十五五”规划》，规划提出，聚力人工智能技术攻关。攻坚下一代模型架构，推动基于状态空间模型、循环神经网络变体、液态神经网络等非Transformer架构的多技术路线探索。加快布局物理智能、世界模型、量子智能、类脑智能等前沿基础模型技术体系。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:09",
      "impact": "neutral"
    },
    {
      "title": "中共中央对外联络部副部长马辉8月11日在北京应约会见中国欧盟商会主席彦辞一行，双方就中欧经贸关系和营商环境等议题交换了意见。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:44",
      "impact": "neutral"
    },
    {
      "title": "8月5日，21世纪“国企及政府投资基金高质量发展”闭门会暨大湾区文投联盟新增成员授牌仪式在南方财经大厦举行。陕西省政府投资引导基金副总经理杨栋围绕国资保值增值要求与科创早期投资长周期、高风险属性之间的适配问题分享了当地的实践经验。据介绍，目前陕西省已完成财政、国资科创投资业务板块整合，基金架构由原来的两级调整为三级，即由政府引导基金下设二级母基金，再下设子基金。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:25",
      "impact": "neutral"
    },
    {
      "title": "一图看懂｜25省78次创新高：全国用电负荷四破极值背后的“高温经济学”",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:07",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 47,
    "label": "中性",
    "upDownRatio": "2,452/1,774",
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
