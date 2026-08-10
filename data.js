// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-10 12:36:51
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-10 12:36 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-10",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3966.59,
      "change": 26.55,
      "changePct": "+0.67%",
      "high": 3967.59,
      "low": 3938.63,
      "volume": 542118110.0,
      "amount": 1166893280000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14316.96,
      "change": 5.95,
      "changePct": "+0.04%",
      "high": 14373.77,
      "low": 14102.66,
      "volume": 687533827.0,
      "amount": 1356209540000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3537.21,
      "change": -25.91,
      "changePct": "-0.73%",
      "high": 3575.59,
      "low": 3470.95,
      "volume": 208986302.0,
      "amount": 657874160000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1737.77,
      "change": -6.25,
      "changePct": "-0.36%",
      "high": 1752.93,
      "low": 1704.08,
      "volume": 10817174.0,
      "amount": 128470940000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4702.02,
      "change": 7.58,
      "changePct": "+0.16%",
      "high": 4714.46,
      "low": 4659.47,
      "volume": 213075996.0,
      "amount": 733103400000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 8030.95,
      "change": 50.83,
      "changePct": "+0.64%",
      "high": 8031.16,
      "low": 7910.84,
      "volume": 200579907.0,
      "amount": 490434040000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.53万亿",
      "label": "成交额",
      "rawAmount": 4532985360000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,056/1,472",
      "label": "涨/跌家数",
      "rawUp": 3056,
      "rawDown": 1472,
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
    "totalInflow": 30.98,
    "totalOutflow": 0,
    "netFlow": 30.98,
    "netFlowTrend": [
      6.2,
      12.39,
      18.59,
      24.78,
      30.98
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
      "inflow": 5.73,
      "pct": 0.99
    },
    {
      "name": "有色",
      "inflow": 4.86,
      "pct": 1.66
    },
    {
      "name": "医疗",
      "inflow": 3.91,
      "pct": 2.02
    },
    {
      "name": "医药",
      "inflow": 3.21,
      "pct": 2.27
    },
    {
      "name": "白酒",
      "inflow": 3.12,
      "pct": 2.3
    },
    {
      "name": "银行",
      "inflow": 2.95,
      "pct": 0.63
    },
    {
      "name": "煤炭",
      "inflow": 2.75,
      "pct": 2.27
    },
    {
      "name": "券商",
      "inflow": 2.23,
      "pct": 0.19
    },
    {
      "name": "传媒",
      "inflow": 1.12,
      "pct": 1.38
    },
    {
      "name": "军工",
      "inflow": 1.1,
      "pct": 1.56
    },
    {
      "name": "新能源",
      "inflow": 0.8,
      "pct": 0.63
    },
    {
      "name": "新能源车",
      "inflow": 0.41,
      "pct": 1.14
    },
    {
      "name": "地产",
      "inflow": 0.39,
      "pct": 1.66
    },
    {
      "name": "钢铁",
      "inflow": 0.36,
      "pct": 1.37
    },
    {
      "name": "游戏",
      "inflow": 0.34,
      "pct": 1.96
    },
    {
      "name": "农业",
      "inflow": 0.27,
      "pct": 2.63
    },
    {
      "name": "家电",
      "inflow": 0.16,
      "pct": 0.63
    },
    {
      "name": "食品",
      "inflow": 0.11,
      "pct": 2.17
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 1.14
    },
    {
      "name": "半导体",
      "inflow": -4.82,
      "pct": -0.18
    }
  ],
  "sectors": [
    {
      "name": "农业",
      "code": "159825",
      "price": 0.742,
      "changePct": 2.63,
      "change": 0.019,
      "turnover": 0.9
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.445,
      "changePct": 2.3,
      "change": 0.01,
      "turnover": 10.4
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.405,
      "changePct": 2.27,
      "change": 0.009,
      "turnover": 10.69
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.262,
      "changePct": 2.27,
      "change": 0.028,
      "turnover": 9.18
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.519,
      "changePct": 2.17,
      "change": 0.011,
      "turnover": 0.36
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.353,
      "changePct": 2.02,
      "change": 0.007,
      "turnover": 13.03
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.145,
      "changePct": 1.96,
      "change": 0.022,
      "turnover": 1.12
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 2.018,
      "changePct": 1.66,
      "change": 0.033,
      "turnover": 16.2
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.227,
      "changePct": 1.66,
      "change": 0.02,
      "turnover": 1.31
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.172,
      "changePct": 1.56,
      "change": 0.018,
      "turnover": 3.68
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.879,
      "changePct": 1.38,
      "change": 0.012,
      "turnover": 3.72
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.182,
      "changePct": 1.37,
      "change": 0.016,
      "turnover": 1.2
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.68,
      "changePct": 1.14,
      "change": 0.019,
      "turnover": 1.37
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.062,
      "changePct": 1.14,
      "change": 0.012,
      "turnover": 0.07
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.919,
      "changePct": 0.99,
      "change": 0.009,
      "turnover": 19.11
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.576,
      "changePct": 0.63,
      "change": 0.016,
      "turnover": 2.68
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.803,
      "changePct": 0.63,
      "change": 0.005,
      "turnover": 9.85
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.427,
      "changePct": 0.63,
      "change": 0.009,
      "turnover": 0.54
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.525,
      "changePct": 0.19,
      "change": 0.001,
      "turnover": 7.44
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.081,
      "changePct": -0.18,
      "change": -0.002,
      "turnover": 16.07
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.231,
      "changePct": -0.4,
      "change": -0.005,
      "turnover": 0.44
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.862,
      "changePct": -0.46,
      "change": -0.004,
      "turnover": 2.06
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.205,
      "changePct": -0.58,
      "change": -0.007,
      "turnover": 8.22
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.882,
      "changePct": -1.01,
      "change": -0.009,
      "turnover": 0.83
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.733,
      "changePct": -1.42,
      "change": -0.025,
      "turnover": 1.91
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.019,
      "changePct": -2.3,
      "change": -0.024,
      "turnover": 11.38
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.644,
      "changePct": -2.42,
      "change": -0.016,
      "turnover": 39.28
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.05,
      "changePct": -2.51,
      "change": -0.027,
      "turnover": 2.5
    }
  ],
  "etfFlow": [
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.759,
      "changePct": 0.17,
      "amount": 26.64,
      "netFlow": 6.66
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 8.037,
      "changePct": 0.63,
      "amount": 25.75,
      "netFlow": 6.44
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.405,
      "changePct": 2.27,
      "amount": 10.69,
      "netFlow": 2.67
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.075,
      "changePct": 0.29,
      "amount": 9.87,
      "netFlow": 2.47
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.525,
      "changePct": 0.19,
      "amount": 7.44,
      "netFlow": 1.86
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.967,
      "changePct": 0.22,
      "amount": 5.99,
      "netFlow": 1.5
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.622,
      "changePct": 0.2,
      "amount": 4.63,
      "netFlow": 1.16
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.576,
      "changePct": 0.63,
      "amount": 2.68,
      "netFlow": 0.67
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.081,
      "changePct": -0.18,
      "amount": 16.07,
      "netFlow": -4.02
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.835,
      "changePct": -0.27,
      "amount": 62.55,
      "netFlow": -15.64
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.759,
      "changePct": 0.17,
      "amount": 26.64,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.075,
      "changePct": 0.29,
      "amount": 9.87,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 8.037,
      "changePct": 0.63,
      "amount": 25.75,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.967,
      "changePct": 0.22,
      "amount": 5.99,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.622,
      "changePct": 0.2,
      "amount": 4.63,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "农业",
      "turnover": 0.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 10.4,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 10.69,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "煤炭",
      "turnover": 9.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 13.03,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "游戏",
      "turnover": 1.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 16.2,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "地产",
      "turnover": 1.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 3.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 1.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 19.11,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "新能源",
      "turnover": 2.68,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 9.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.44,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 16.07,
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
      "nav": 4.4196,
      "ret1w": -0.3,
      "ret1m": 16.66,
      "ret3m": -12.6,
      "ret6m": -11.79,
      "ret1y": -0.38,
      "ret2y": 49.87,
      "ret3y": 151.97
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.222,
      "ret1w": -1.4,
      "ret1m": 10.47,
      "ret3m": -9.37,
      "ret6m": -12.83,
      "ret1y": 7.77,
      "ret2y": 21.67,
      "ret3y": 72.48
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.991,
      "ret1w": -1.2,
      "ret1m": 17.65,
      "ret3m": -16.05,
      "ret6m": -5.95,
      "ret1y": 24.17,
      "ret2y": 109.44,
      "ret3y": 227.41
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7235,
      "ret1w": 1.84,
      "ret1m": -1.62,
      "ret3m": 9.08,
      "ret6m": -2.47,
      "ret1y": -10.51,
      "ret2y": -11.4,
      "ret3y": 10.27
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.2978,
      "ret1w": -0.28,
      "ret1m": -0.56,
      "ret3m": 5.35,
      "ret6m": -19.07,
      "ret1y": -25.86,
      "ret2y": -1.29,
      "ret3y": 22.75
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.8553,
      "ret1w": 1.24,
      "ret1m": 1.6,
      "ret3m": 6.7,
      "ret6m": -18.58,
      "ret1y": -29.22,
      "ret2y": -4.16,
      "ret3y": 36.53
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5653,
      "ret1w": 1.05,
      "ret1m": -0.13,
      "ret3m": 8.21,
      "ret6m": -1.89,
      "ret1y": -6.47,
      "ret2y": 23.47,
      "ret3y": 55.88
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.92,
      "ret1w": 0.52,
      "ret1m": 8.72,
      "ret3m": -7.07,
      "ret6m": -9.39,
      "ret1y": -4.76,
      "ret2y": 14.63,
      "ret3y": 69.16
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3738,
      "ret1w": 0.2,
      "ret1m": 7.46,
      "ret3m": -3.63,
      "ret6m": -4.95,
      "ret1y": 1.0,
      "ret2y": 19.31,
      "ret3y": 48.97
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.546,
      "ret1w": 0.08,
      "ret1m": 15.17,
      "ret3m": -11.42,
      "ret6m": 11.72,
      "ret1y": 38.41,
      "ret2y": 145.57,
      "ret3y": 285.02
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.158,
      "ret1w": 3.67,
      "ret1m": 2.57,
      "ret3m": 13.64,
      "ret6m": 1.14,
      "ret1y": -7.21,
      "ret2y": -7.73,
      "ret3y": 2.66
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.459,
      "ret1w": 1.15,
      "ret1m": 5.85,
      "ret3m": 9.43,
      "ret6m": -7.14,
      "ret1y": -15.29,
      "ret2y": -8.93,
      "ret3y": 35.33
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.84,
      "ret1w": 1.49,
      "ret1m": 15.95,
      "ret3m": -18.32,
      "ret6m": -43.26,
      "ret1y": -45.13,
      "ret2y": -10.59,
      "ret3y": 30.31
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9572,
      "ret1w": 1.62,
      "ret1m": 0.86,
      "ret3m": 5.07,
      "ret6m": 7.61,
      "ret1y": -4.37,
      "ret2y": 3.63,
      "ret3y": 10.86
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.666,
      "ret1w": 0.51,
      "ret1m": 10.77,
      "ret3m": -3.78,
      "ret6m": -6.98,
      "ret1y": -3.08,
      "ret2y": 15.96,
      "ret3y": 70.78
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3617,
      "ret1w": -0.78,
      "ret1m": 17.12,
      "ret3m": -22.73,
      "ret6m": -8.51,
      "ret1y": 33.44,
      "ret2y": 99.82,
      "ret3y": 205.33
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5551,
      "ret1w": 0.96,
      "ret1m": 0.36,
      "ret3m": 6.64,
      "ret6m": -7.08,
      "ret1y": -11.31,
      "ret2y": -3.93,
      "ret3y": 20.3
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
      "nav": 2.3599,
      "ret1w": 1.45,
      "ret1m": -0.96,
      "ret3m": 7.66,
      "ret6m": -2.76,
      "ret1y": -7.98,
      "ret2y": 10.24,
      "ret3y": 16.87
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3135,
      "ret1w": 2.05,
      "ret1m": 6.78,
      "ret3m": 0.99,
      "ret6m": -1.54,
      "ret1y": 2.21,
      "ret2y": 24.8,
      "ret3y": 75.27
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.3154,
      "ret1w": 0.54,
      "ret1m": 7.33,
      "ret3m": -5.24,
      "ret6m": -3.92,
      "ret1y": -0.75,
      "ret2y": 32.77,
      "ret3y": 48.57
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3989,
      "ret1w": 0.54,
      "ret1m": 7.34,
      "ret3m": -5.2,
      "ret6m": -3.84,
      "ret1y": -0.57,
      "ret2y": 33.29,
      "ret3y": 49.76
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0989,
      "ret1w": -0.03,
      "ret1m": -0.16,
      "ret3m": -0.46,
      "ret6m": -0.03,
      "ret1y": 2.05,
      "ret2y": 2.85,
      "ret3y": 9.5
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0713,
      "ret1w": -0.03,
      "ret1m": -0.15,
      "ret3m": -0.41,
      "ret6m": 0.12,
      "ret1y": 2.36,
      "ret2y": 3.47,
      "ret3y": 10.83
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7298,
      "ret1w": 0.27,
      "ret1m": -1.46,
      "ret3m": 0.36,
      "ret6m": -10.45,
      "ret1y": -13.89,
      "ret2y": -3.8,
      "ret3y": 15.26
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.748,
      "ret1w": 0.27,
      "ret1m": -1.45,
      "ret3m": 0.4,
      "ret6m": -10.33,
      "ret1y": -13.67,
      "ret2y": -3.31,
      "ret3y": 16.42
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8322,
      "ret1w": 2.57,
      "ret1m": 11.08,
      "ret3m": -10.05,
      "ret6m": 4.74,
      "ret1y": 41.99,
      "ret2y": 111.6,
      "ret3y": 165.73
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5693,
      "ret1w": 0.42,
      "ret1m": 6.47,
      "ret3m": -4.9,
      "ret6m": -1.43,
      "ret1y": 4.89,
      "ret2y": 45.26,
      "ret3y": 87.28
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7548,
      "ret1w": 0.64,
      "ret1m": 5.46,
      "ret3m": -5.4,
      "ret6m": -16.2,
      "ret1y": -15.3,
      "ret2y": 0.15,
      "ret3y": 18.31
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.2582,
      "ret1w": -0.41,
      "ret1m": 9.67,
      "ret3m": -12.88,
      "ret6m": 5.43,
      "ret1y": 22.17,
      "ret2y": 73.54,
      "ret3y": 144.2
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5285,
      "ret1w": 0.72,
      "ret1m": 1.03,
      "ret3m": -11.34,
      "ret6m": -0.97,
      "ret1y": 3.71,
      "ret2y": 32.09,
      "ret3y": 52.97
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5385,
      "ret1w": 0.73,
      "ret1m": 1.03,
      "ret3m": -11.31,
      "ret6m": -0.87,
      "ret1y": 3.92,
      "ret2y": 32.64,
      "ret3y": 54.21
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2804,
      "ret1w": 0.44,
      "ret1m": 0.27,
      "ret3m": 3.63,
      "ret6m": -0.83,
      "ret1y": -0.81,
      "ret2y": -0.47,
      "ret3y": 1.26
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1565,
      "ret1w": 0.67,
      "ret1m": 1.25,
      "ret3m": 2.29,
      "ret6m": 0.72,
      "ret1y": -5.69,
      "ret2y": 5.57,
      "ret3y": 24.31
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4609,
      "ret1w": 0.74,
      "ret1m": 6.78,
      "ret3m": -7.83,
      "ret6m": -11.72,
      "ret1y": 0.84,
      "ret2y": -1.08,
      "ret3y": 19.13
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0234,
      "ret1w": 0.74,
      "ret1m": 0.97,
      "ret3m": 6.27,
      "ret6m": -6.1,
      "ret1y": -5.13,
      "ret2y": 22.75,
      "ret3y": 44.99
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.372,
      "ret1w": -1.86,
      "ret1m": 8.99,
      "ret3m": -23.22,
      "ret6m": -12.05,
      "ret1y": 40.79,
      "ret2y": 149.04,
      "ret3y": 206.55
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4664,
      "ret1w": 0.34,
      "ret1m": -3.3,
      "ret3m": 4.21,
      "ret6m": -1.31,
      "ret1y": -1.14,
      "ret2y": -1.97,
      "ret3y": 7.92
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6657,
      "ret1w": -0.02,
      "ret1m": 15.09,
      "ret3m": -19.65,
      "ret6m": -13.35,
      "ret1y": -6.57,
      "ret2y": 13.79,
      "ret3y": 52.93
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.74,
      "ret1w": -0.52,
      "ret1m": 16.66,
      "ret3m": -9.17,
      "ret6m": 27.16,
      "ret1y": 74.13,
      "ret2y": 214.42,
      "ret3y": 350.49
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0681,
      "ret1w": 0.14,
      "ret1m": 0.4,
      "ret3m": -0.7,
      "ret6m": -0.22,
      "ret1y": 0.35,
      "ret2y": 1.74,
      "ret3y": 4.77
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1165,
      "ret1w": 0.13,
      "ret1m": 0.4,
      "ret3m": -0.68,
      "ret6m": -0.16,
      "ret1y": 0.47,
      "ret2y": 2.04,
      "ret3y": 5.5
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0638,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": 0.32,
      "ret1y": 0.76,
      "ret2y": 1.34,
      "ret3y": 2.67
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0978,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.09,
      "ret6m": 0.34,
      "ret1y": 0.8,
      "ret2y": 1.45,
      "ret3y": 3.78
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.107,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.39,
      "ret1y": 0.9,
      "ret2y": 1.65,
      "ret3y": 4.21
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0757,
      "ret1w": 0.04,
      "ret1m": 0.06,
      "ret3m": 0.15,
      "ret6m": 0.39,
      "ret1y": 0.74,
      "ret2y": 1.23,
      "ret3y": 2.73
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0899,
      "ret1w": 0.04,
      "ret1m": 0.06,
      "ret3m": 0.17,
      "ret6m": 0.47,
      "ret1y": 0.89,
      "ret2y": 1.55,
      "ret3y": 3.39
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0735,
      "ret1w": 0.16,
      "ret1m": 2.38,
      "ret3m": -1.55,
      "ret6m": -1.62,
      "ret1y": 1.53,
      "ret2y": 9.64,
      "ret3y": 13.19
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2237,
      "ret1w": 0.2,
      "ret1m": 2.97,
      "ret3m": -2.11,
      "ret6m": -2.63,
      "ret1y": 0.3,
      "ret2y": 2.66,
      "ret3y": 7.62
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.08,
      "ret1w": 0.16,
      "ret1m": 2.39,
      "ret3m": -1.52,
      "ret6m": -1.52,
      "ret1y": 1.73,
      "ret2y": 10.09,
      "ret3y": 14.1
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0448,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.12,
      "ret6m": 0.4,
      "ret1y": 0.85,
      "ret2y": 1.63,
      "ret3y": 3.51
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1706,
      "ret1w": -0.09,
      "ret1m": 1.22,
      "ret3m": -2.12,
      "ret6m": -3.44,
      "ret1y": -2.9,
      "ret2y": 2.5,
      "ret3y": 9.98
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2223,
      "ret1w": 0.17,
      "ret1m": 0.25,
      "ret3m": 0.3,
      "ret6m": -0.9,
      "ret1y": 0.19,
      "ret2y": 6.2,
      "ret3y": 15.3
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1444,
      "ret1w": 0.07,
      "ret1m": 1.65,
      "ret3m": -0.99,
      "ret6m": -0.43,
      "ret1y": 1.12,
      "ret2y": 6.25,
      "ret3y": 10.58
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2159,
      "ret1w": 0.07,
      "ret1m": 1.66,
      "ret3m": -0.95,
      "ret6m": -0.32,
      "ret1y": 1.32,
      "ret2y": 6.69,
      "ret3y": 11.51
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.287,
      "ret1w": 0.53,
      "ret1m": 2.19,
      "ret3m": -6.58,
      "ret6m": -1.42,
      "ret1y": 39.37,
      "ret2y": 89.32,
      "ret3y": 156.39
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9846,
      "ret1w": 0.46,
      "ret1m": 2.27,
      "ret3m": 3.23,
      "ret6m": 2.72,
      "ret1y": 7.28,
      "ret2y": 13.29,
      "ret3y": 42.17
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.9243,
      "ret1w": 1.62,
      "ret1m": 2.43,
      "ret3m": -0.76,
      "ret6m": -13.46,
      "ret1y": -1.85,
      "ret2y": 12.33,
      "ret3y": 61.71
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3622,
      "ret1w": 3.52,
      "ret1m": 9.09,
      "ret3m": 0.97,
      "ret6m": 6.31,
      "ret1y": 19.06,
      "ret2y": 30.83,
      "ret3y": 93.99
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9386,
      "ret1w": 0.16,
      "ret1m": 0.44,
      "ret3m": -0.31,
      "ret6m": -1.02,
      "ret1y": -2.52,
      "ret2y": -3.11,
      "ret3y": -1.13
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.652,
      "ret1w": 1.13,
      "ret1m": 2.87,
      "ret3m": -2.96,
      "ret6m": -0.45,
      "ret1y": 27.37,
      "ret2y": 58.28,
      "ret3y": 113.78
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.644,
      "ret1w": 0.3,
      "ret1m": 2.7,
      "ret3m": 0.0,
      "ret6m": 0.65,
      "ret1y": 3.55,
      "ret2y": 8.48,
      "ret3y": 31.0
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.258,
      "ret1w": 5.1,
      "ret1m": 7.34,
      "ret3m": 4.05,
      "ret6m": -6.47,
      "ret1y": -2.93,
      "ret2y": -10.59,
      "ret3y": 118.4
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.952,
      "ret1w": 4.5,
      "ret1m": 6.37,
      "ret3m": -2.76,
      "ret6m": -12.98,
      "ret1y": -10.53,
      "ret2y": -17.36,
      "ret3y": 47.37
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8041,
      "ret1w": 0.03,
      "ret1m": 1.73,
      "ret3m": -5.26,
      "ret6m": -5.22,
      "ret1y": 37.02,
      "ret2y": 87.79,
      "ret3y": 145.11
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5068,
      "ret1w": 1.09,
      "ret1m": 3.13,
      "ret3m": 8.98,
      "ret6m": -1.25,
      "ret1y": 2.45,
      "ret2y": 37.39,
      "ret3y": 52.62
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6755,
      "ret1w": -0.23,
      "ret1m": -1.24,
      "ret3m": -1.18,
      "ret6m": -1.1,
      "ret1y": 8.01,
      "ret2y": 27.76,
      "ret3y": 59.72
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2897,
      "ret1w": -0.02,
      "ret1m": -0.14,
      "ret3m": -1.37,
      "ret6m": -5.72,
      "ret1y": 4.82,
      "ret2y": 17.51,
      "ret3y": 42.32
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.328,
      "ret1w": 0.45,
      "ret1m": -0.08,
      "ret3m": -0.52,
      "ret6m": 0.68,
      "ret1y": 6.33,
      "ret2y": 7.1,
      "ret3y": -2.14
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.084,
      "ret1w": 2.26,
      "ret1m": 6.98,
      "ret3m": 4.62,
      "ret6m": -8.72,
      "ret1y": -14.1,
      "ret2y": 18.48,
      "ret3y": 60.37
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0103,
      "ret1w": 0.03,
      "ret1m": 0.12,
      "ret3m": 0.18,
      "ret6m": 0.64,
      "ret1y": 1.46,
      "ret2y": 1.68,
      "ret3y": 3.56
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0092,
      "ret1w": 0.04,
      "ret1m": 0.12,
      "ret3m": 0.19,
      "ret6m": 0.63,
      "ret1y": 1.47,
      "ret2y": 1.74,
      "ret3y": 3.75
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.47,
      "ret1w": 0.0,
      "ret1m": 4.48,
      "ret3m": -4.05,
      "ret6m": -4.48,
      "ret1y": 1.24,
      "ret2y": 17.6,
      "ret3y": 39.47
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.916,
      "ret1w": -0.1,
      "ret1m": 7.01,
      "ret3m": -3.6,
      "ret6m": -4.27,
      "ret1y": 2.78,
      "ret2y": 31.47,
      "ret3y": 66.72
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7503,
      "ret1w": 1.48,
      "ret1m": 10.27,
      "ret3m": 11.41,
      "ret6m": -6.15,
      "ret1y": -5.14,
      "ret2y": 46.21,
      "ret3y": 77.88
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1694,
      "ret1w": 0.24,
      "ret1m": 3.91,
      "ret3m": -1.19,
      "ret6m": -0.99,
      "ret1y": 4.29,
      "ret2y": 20.91,
      "ret3y": 46.07
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2309,
      "ret1w": 0.24,
      "ret1m": 3.91,
      "ret3m": -1.16,
      "ret6m": -0.89,
      "ret1y": 4.5,
      "ret2y": 21.39,
      "ret3y": 47.24
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0705,
      "ret1w": 0.6,
      "ret1m": 7.93,
      "ret3m": -5.26,
      "ret6m": -6.63,
      "ret1y": -2.56,
      "ret2y": 26.51,
      "ret3y": 68.83
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8321,
      "ret1w": 0.16,
      "ret1m": 3.32,
      "ret3m": -1.31,
      "ret6m": -2.54,
      "ret1y": 0.33,
      "ret2y": 14.99,
      "ret3y": 42.59
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.6132,
      "ret1w": 0.74,
      "ret1m": 2.43,
      "ret3m": 1.24,
      "ret6m": -5.57,
      "ret1y": -3.35,
      "ret2y": 21.47,
      "ret3y": 57.16
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.0482,
      "ret1w": -0.74,
      "ret1m": 6.96,
      "ret3m": -8.12,
      "ret6m": -1.32,
      "ret1y": 11.54,
      "ret2y": 42.22,
      "ret3y": 84.46
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1945,
      "ret1w": 1.08,
      "ret1m": 1.1,
      "ret3m": 6.67,
      "ret6m": -1.06,
      "ret1y": -0.79,
      "ret2y": 10.67,
      "ret3y": 32.85
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5295,
      "ret1w": 0.3,
      "ret1m": 0.44,
      "ret3m": 2.16,
      "ret6m": 4.13,
      "ret1y": 3.3,
      "ret2y": 15.21,
      "ret3y": 36.11
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.477,
      "ret1w": 1.05,
      "ret1m": 4.68,
      "ret3m": 1.6,
      "ret6m": 3.03,
      "ret1y": 14.79,
      "ret2y": 18.52,
      "ret3y": 52.72
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8413,
      "ret1w": -0.16,
      "ret1m": 4.22,
      "ret3m": -3.32,
      "ret6m": -4.97,
      "ret1y": 5.22,
      "ret2y": 28.21,
      "ret3y": 63.67
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.178,
      "ret1w": 0.55,
      "ret1m": 6.96,
      "ret3m": -9.9,
      "ret6m": -5.87,
      "ret1y": 1.06,
      "ret2y": 20.91,
      "ret3y": 51.45
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1798,
      "ret1w": 0.55,
      "ret1m": 6.97,
      "ret3m": -9.9,
      "ret6m": -5.88,
      "ret1y": 1.06,
      "ret2y": 20.07,
      "ret3y": 50.99
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4234,
      "ret1w": 1.54,
      "ret1m": 5.34,
      "ret3m": -7.43,
      "ret6m": -9.13,
      "ret1y": -2.81,
      "ret2y": 11.46,
      "ret3y": 41.82
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4556,
      "ret1w": 1.55,
      "ret1m": 5.35,
      "ret3m": -7.4,
      "ret6m": -9.03,
      "ret1y": -2.61,
      "ret2y": 11.92,
      "ret3y": 42.96
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0612,
      "ret1w": 2.51,
      "ret1m": 3.47,
      "ret3m": -15.39,
      "ret6m": -7.84,
      "ret1y": 2.45,
      "ret2y": 23.87,
      "ret3y": 65.08
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.171,
      "ret1w": 0.04,
      "ret1m": 0.2,
      "ret3m": 0.22,
      "ret6m": 0.03,
      "ret1y": 0.26,
      "ret2y": 2.52,
      "ret3y": 7.84
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1907,
      "ret1w": 0.03,
      "ret1m": 0.2,
      "ret3m": 0.24,
      "ret6m": 0.1,
      "ret1y": 0.4,
      "ret2y": 2.83,
      "ret3y": 8.48
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0836,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.17,
      "ret6m": 0.41,
      "ret1y": 0.92,
      "ret2y": 1.65,
      "ret3y": 3.27
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4106,
      "ret1w": -0.03,
      "ret1m": -0.1,
      "ret3m": 0.1,
      "ret6m": 0.06,
      "ret1y": 0.18,
      "ret2y": 0.67,
      "ret3y": 10.15
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4625,
      "ret1w": -0.02,
      "ret1m": -0.09,
      "ret3m": 0.14,
      "ret6m": 0.16,
      "ret1y": 0.38,
      "ret2y": 1.08,
      "ret3y": 11.04
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.145,
      "ret1w": -0.35,
      "ret1m": 3.61,
      "ret3m": -1.13,
      "ret6m": 9.46,
      "ret1y": 12.1,
      "ret2y": 32.5,
      "ret3y": 67.95
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2692,
      "ret1w": -0.01,
      "ret1m": 2.37,
      "ret3m": 2.18,
      "ret6m": 1.62,
      "ret1y": 5.3,
      "ret2y": 15.5,
      "ret3y": 52.29
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-07-14",
        "nav": 4.8676
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-07-14",
        "nav": 4.7534
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-07-14",
        "nav": 6.0401
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-07-14",
        "nav": 0.6683
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-07-14",
        "nav": 2.0596
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-07-14",
        "nav": 2.6134
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-07-14",
        "nav": 5.2032
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-07-14",
        "nav": 1.989
      },
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
      }
    ],
    "519965": [
      {
        "date": "2026-07-14",
        "nav": 1.4081
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-07-14",
        "nav": 3.969
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-07-14",
        "nav": 1.024
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-07-14",
        "nav": 2.256
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-07-14",
        "nav": 2.2217
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-07-14",
        "nav": 1.8689
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-07-14",
        "nav": 1.6982
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-07-14",
        "nav": 3.0486
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-07-14",
        "nav": 2.4078
      },
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
        "date": "2026-07-14",
        "nav": 2.2327
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-07-13",
        "nav": 1.2726
      },
      {
        "date": "2026-07-14",
        "nav": 1.2903
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-07-14",
        "nav": 1.3706
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-07-14",
        "nav": 1.4571
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-07-13",
        "nav": 1.0978
      },
      {
        "date": "2026-07-14",
        "nav": 1.1074
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-07-13",
        "nav": 1.0698
      },
      {
        "date": "2026-07-14",
        "nav": 1.0791
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-07-13",
        "nav": 0.71
      },
      {
        "date": "2026-07-14",
        "nav": 0.7137
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-07-13",
        "nav": 0.7275
      },
      {
        "date": "2026-07-14",
        "nav": 0.7312
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-07-13",
        "nav": 3.0387
      },
      {
        "date": "2026-07-14",
        "nav": 3.2291
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-07-14",
        "nav": 2.6643
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-07-14",
        "nav": 0.7834
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-07-14",
        "nav": 4.7921
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-07-14",
        "nav": 0.578
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-07-14",
        "nav": 0.5888
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-07-14",
        "nav": 1.2547
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-07-14",
        "nav": 1.1396
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-07-14",
        "nav": 1.5968
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-07-14",
        "nav": 2.8856
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-07-14",
        "nav": 4.53
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-07-14",
        "nav": 1.4403
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-07-14",
        "nav": 0.721
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-07-14",
        "nav": 16.703
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.83,
      "nav": 4.4196,
      "price": 4.4196,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.52,
      "nav": 4.222,
      "price": 4.222,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.88,
      "nav": 4.991,
      "price": 4.991,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 0.7235,
      "price": 0.7235,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.03,
      "nav": 2.2978,
      "price": 2.2978,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.08,
      "nav": 2.8553,
      "price": 2.8553,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 5.5653,
      "price": 5.5653,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.44,
      "nav": 1.92,
      "price": 1.92,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.37,
      "nav": 1.3738,
      "price": 1.3738,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.76,
      "nav": 3.546,
      "price": 3.546,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.13,
      "nav": 1.158,
      "price": 1.158,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.29,
      "nav": 2.459,
      "price": 2.459,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.8,
      "nav": 1.84,
      "price": 1.84,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.9572,
      "price": 1.9572,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.54,
      "nav": 1.666,
      "price": 1.666,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.86,
      "nav": 2.3617,
      "price": 2.3617,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.5551,
      "price": 2.5551,
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
      "discount": 0.05,
      "nav": 2.3599,
      "price": 2.3599,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.34,
      "nav": 1.3135,
      "price": 1.3135,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 24.99,
      "sharpe": -0.02,
      "calmar": -0.02
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 15.71,
      "sharpe": 0.5,
      "calmar": 0.5
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 26.47,
      "sharpe": 1.07,
      "calmar": 1.07
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.43,
      "sharpe": -1.59,
      "calmar": -1.59
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.84,
      "sharpe": -4.65,
      "calmar": -4.65
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.4,
      "sharpe": -4.43,
      "calmar": -4.43
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.2,
      "sharpe": -1.26,
      "calmar": -1.26
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 13.08,
      "sharpe": -0.35,
      "calmar": -0.35
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 11.19,
      "sharpe": 0.08,
      "calmar": 0.08
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 22.75,
      "sharpe": 1.9,
      "calmar": 1.9
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.85,
      "sharpe": -0.95,
      "calmar": -0.95
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 8.77,
      "sharpe": -1.41,
      "calmar": -1.41
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 23.92,
      "sharpe": -2.15,
      "calmar": -2.15
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.29,
      "sharpe": -0.75,
      "calmar": -0.75
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 16.16,
      "sharpe": -0.2,
      "calmar": -0.2
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 25.68,
      "sharpe": 1.51,
      "calmar": 1.51
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.54,
      "sharpe": -2.11,
      "calmar": -2.11
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
      "maxDrawdown": 1.44,
      "sharpe": -1.34,
      "calmar": -1.34
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 10.17,
      "sharpe": 0.19,
      "calmar": 0.19
    }
  ],
  "news": [
    {
      "title": "近日，国家发展改革委、国家能源局印发《煤炭工业发展“十五五”规划》。其中指出，到2030年，煤炭兜底保障能力进一步增强，生产开发布局持续优化，优质先进产能比重进一步提升，产供储销体系更加完善，全国大型现代化煤矿产能比重提升至87%；安全绿色开发和清洁高效利用水平明显提高，全系统智能化建设深入推进，智能化煤矿产能比例提升至75%；煤基多元化产业格局加快形成，煤炭消费实现达峰，供需动态平衡保障机制进一步健全，行业现代化治理能力显著提高，现代煤炭产业体系基本建成，煤炭高质量发展迈上新台阶。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:03",
      "impact": "neutral"
    },
    {
      "title": "存款利率市场正上演罕见的“分化图景”。一边，部分县域农商行、村镇银行为守住本地储户逆势上调存款利率；另一边，不少中小银行持续下调长期定存利率，甚至出现5年期与3年期利率倒挂现象。此外，国有四大行沉寂已久的5年期大额存单也重回市场货架。在商业银行净息差跌至历史低位的背景下，不同类型银行正基于自身负债禀赋、资产投放压力，走出截然不同的负债管理路径。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:15",
      "impact": "neutral"
    },
    {
      "title": "新华社北京8月10日电记者8月10日从中国人民银行获悉，根据《中国人民银行与德意志联邦银行备忘录》，中国人民银行决定授权德意志银行股份有限公司担任法兰克福人民币清算行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:43",
      "impact": "neutral"
    },
    {
      "title": "人民财讯8月10日电，国家发展改革委紧急安排中央预算内投资2亿元，支持浙江省做好台风灾害灾后应急恢复，重点用于灾区受损道路、水利等基础设施和学校、医院等公共服务设施灾后应急恢复建设，推动尽快恢复正常生产生活秩序。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:21",
      "impact": "neutral"
    },
    {
      "title": "北京商报讯（记者廖蒙）8月10日，据中国人民银行官网，近日，中国人民银行印发《中国人民银行“十五五”改革发展规划》（以下简称《规划》），并配套制定出台了9份相关细分领域的行动方案。在具体举措上，《规划》指出，一是构建科学稳健的货币政策体系和覆盖全面的宏观审慎管理体系。健全中国特色现代货币政策框架，完善基础货币投放机制，发挥好货币信贷政策工具的总量和结构功能。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:12",
      "impact": "neutral"
    },
    {
      "title": "为全面贯彻党的二十大和二十届历次全会精神，深入落实中央金融工作会议决策部署，根据《中华人民共和国国民经济和社会发展第十五个五年规划纲要》有关要求，近日，中国人民银行印发《中国人民银行“十五五”改革发展规划》（以下简称《规划》），并配套制定出台了9份相关细分领域的行动方案。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:12",
      "impact": "neutral"
    },
    {
      "title": "人民财讯8月10日电，8月10日上午，国家防总副总指挥、水利部部长李国英主持专题会商，滚动分析研判今年第13号台风“白海豚”发展态势及影响，对台风暴雨洪水防御工作再部署、再落实。李国英要求，全力以赴做好五个方面重点工作。一要进一步细化实化山洪灾害防御，确保人员不伤亡。二要进一步细化实化中小河流洪水防御，确保重要堤防不决口。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:01",
      "impact": "neutral"
    },
    {
      "title": "长沙市国土资源网上交易系统近日上架一宗“限房价”住宅地块，明确住宅（毛坯）销售价格6200元/平方米，引发市场关注。这也是自2023年9月之后，长沙再度推出限房价性质地块。限价项目是否要重回市场？记者向长沙市有关部门核实了解了情况。相关负责人表示，该宗限价地块为安居地块，长沙暂未计划推出更多同类限价地块。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:53",
      "impact": "neutral"
    },
    {
      "title": "人民财讯8月10日电，国务院任免国家工作人员。任命孙硕鹏为民政部副部长；任命蒋玮（女）为中国老龄协会会长。免去罗文的国家市场监督管理总局局长职务；免去孙硕鹏的中国老龄协会会长职务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:51",
      "impact": "neutral"
    },
    {
      "title": "据浙江台州市路桥区政府网站近日公布的消息，对于3名区人大代表有关设立企事业单位职工子女升学考试带薪陪考假的建议，路桥区人社局已作出答复。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:46",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 50,
    "label": "中性",
    "upDownRatio": "3,056/1,472",
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
