// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-22 10:55:37
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-22 10:55 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-21",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3905.2,
      "change": 1.48,
      "changePct": "+0.04%",
      "high": 3912.13,
      "low": 3883.79,
      "volume": 446895868.0,
      "amount": 883423480000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14094.17,
      "change": 121.39,
      "changePct": "+0.87%",
      "high": 14132.04,
      "low": 13866.39,
      "volume": 543953914.0,
      "amount": 995840930000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3545.58,
      "change": 49.99,
      "changePct": "+1.43%",
      "high": 3563.06,
      "low": 3478.52,
      "volume": 168896802.0,
      "amount": 491255970000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1653.56,
      "change": 0.59,
      "changePct": "+0.04%",
      "high": 1675.82,
      "low": 1640.62,
      "volume": 6975365.0,
      "amount": 77573150000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4618.9,
      "change": 26.15,
      "changePct": "+0.57%",
      "high": 4629.0,
      "low": 4579.26,
      "volume": 171075891.0,
      "amount": 505501100000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7854.33,
      "change": 3.93,
      "changePct": "+0.05%",
      "high": 7877.34,
      "low": 7756.28,
      "volume": 147075635.0,
      "amount": 358945350000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.31万亿",
      "label": "成交额",
      "rawAmount": 3312539980000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,400/1,300",
      "label": "涨/跌家数",
      "rawUp": 3400,
      "rawDown": 1300,
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
    "totalInflow": 25.84,
    "totalOutflow": 0,
    "netFlow": 25.84,
    "netFlowTrend": [
      5.17,
      10.34,
      15.5,
      20.67,
      25.84
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
      "inflow": 9.44,
      "pct": 1.96
    },
    {
      "name": "有色",
      "inflow": 4.45,
      "pct": 3.29
    },
    {
      "name": "半导体",
      "inflow": 3.31,
      "pct": 0.29
    },
    {
      "name": "5G",
      "inflow": 2.93,
      "pct": 2.64
    },
    {
      "name": "煤炭",
      "inflow": 1.85,
      "pct": 0.71
    },
    {
      "name": "芯片",
      "inflow": 1.84,
      "pct": 0.7
    },
    {
      "name": "军工",
      "inflow": 0.68,
      "pct": 0.91
    },
    {
      "name": "人工智能",
      "inflow": 0.47,
      "pct": 1.39
    },
    {
      "name": "光伏",
      "inflow": 0.46,
      "pct": 0.35
    },
    {
      "name": "新能源",
      "inflow": 0.41,
      "pct": 1.44
    },
    {
      "name": "新能源车",
      "inflow": 0.39,
      "pct": 1.54
    },
    {
      "name": "云计算",
      "inflow": 0.38,
      "pct": 0.12
    },
    {
      "name": "电子",
      "inflow": 0.16,
      "pct": 1.08
    },
    {
      "name": "钢铁",
      "inflow": 0.15,
      "pct": 0.09
    },
    {
      "name": "券商",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "家电",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.68
    },
    {
      "name": "计算机",
      "inflow": -0.06,
      "pct": -0.17
    },
    {
      "name": "传媒",
      "inflow": -0.39,
      "pct": -0.49
    },
    {
      "name": "银行",
      "inflow": -2.17,
      "pct": -0.37
    }
  ],
  "sectors": [
    {
      "name": "有色",
      "code": "512400",
      "price": 1.946,
      "changePct": 3.29,
      "change": 0.062,
      "turnover": 14.83
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.05,
      "changePct": 2.64,
      "change": 0.027,
      "turnover": 9.78
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.677,
      "changePct": 1.96,
      "change": 0.013,
      "turnover": 31.48
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.644,
      "changePct": 1.54,
      "change": 0.025,
      "turnover": 1.29
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.533,
      "changePct": 1.44,
      "change": 0.036,
      "turnover": 1.36
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.024,
      "changePct": 1.39,
      "change": 0.014,
      "turnover": 1.58
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.844,
      "changePct": 1.08,
      "change": 0.009,
      "turnover": 0.54
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.107,
      "changePct": 0.91,
      "change": 0.01,
      "turnover": 2.26
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.277,
      "changePct": 0.71,
      "change": 0.009,
      "turnover": 6.18
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.159,
      "changePct": 0.7,
      "change": 0.008,
      "turnover": 6.14
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.852,
      "changePct": 0.35,
      "change": 0.003,
      "turnover": 1.55
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.042,
      "changePct": 0.29,
      "change": 0.003,
      "turnover": 11.04
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.674,
      "changePct": 0.12,
      "change": 0.002,
      "turnover": 1.28
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.161,
      "changePct": 0.09,
      "change": 0.001,
      "turnover": 0.51
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.508,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 9.56
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.418,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.65
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.161,
      "changePct": -0.17,
      "change": -0.002,
      "turnover": 0.19
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.815,
      "changePct": -0.37,
      "change": -0.003,
      "turnover": 7.25
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.809,
      "changePct": -0.49,
      "change": -0.004,
      "turnover": 1.31
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.026,
      "changePct": -0.68,
      "change": -0.007,
      "turnover": 0.05
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.063,
      "changePct": -0.84,
      "change": -0.009,
      "turnover": 0.65
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.208,
      "changePct": -0.9,
      "change": -0.011,
      "turnover": 1.15
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.724,
      "changePct": -1.09,
      "change": -0.008,
      "turnover": 0.77
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.495,
      "changePct": -1.39,
      "change": -0.007,
      "turnover": 0.18
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.419,
      "changePct": -1.64,
      "change": -0.007,
      "turnover": 3.27
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.349,
      "changePct": -2.79,
      "change": -0.01,
      "turnover": 7.2
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.388,
      "changePct": -3.0,
      "change": -0.012,
      "turnover": 6.83
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.893,
      "changePct": -4.49,
      "change": -0.042,
      "turnover": 16.18
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.745,
      "changePct": 0.06,
      "amount": 46.52,
      "netFlow": 11.63
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.68,
      "changePct": 0.58,
      "amount": 34.0,
      "netFlow": 8.5
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.866,
      "changePct": 0.04,
      "amount": 22.49,
      "netFlow": 5.62
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.993,
      "changePct": 0.17,
      "amount": 12.67,
      "netFlow": 3.17
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.042,
      "changePct": 0.29,
      "amount": 11.04,
      "netFlow": 2.76
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.55,
      "changePct": 0.66,
      "amount": 7.52,
      "netFlow": 1.88
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.888,
      "changePct": 0.64,
      "amount": 7.22,
      "netFlow": 1.81
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.533,
      "changePct": 1.44,
      "amount": 1.36,
      "netFlow": 0.34
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.388,
      "changePct": -3.0,
      "amount": 6.83,
      "netFlow": -1.71
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.508,
      "changePct": 0.0,
      "amount": 9.56,
      "netFlow": -2.39
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.68,
      "changePct": 0.58,
      "amount": 34.0,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.993,
      "changePct": 0.17,
      "amount": 12.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.866,
      "changePct": 0.04,
      "amount": 22.49,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.888,
      "changePct": 0.64,
      "amount": 7.22,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.55,
      "changePct": 0.66,
      "amount": 7.52,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "有色",
      "turnover": 14.83,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "5G",
      "turnover": 9.78,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 31.48,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.29,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.58,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 6.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.14,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.04,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "云计算",
      "turnover": 1.28,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 9.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 7.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 1.31,
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
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 4.4656,
      "ret1w": 2.3,
      "ret1m": -0.43,
      "ret3m": 4.71,
      "ret6m": -13.6,
      "ret1y": 1.06,
      "ret2y": 30.53,
      "ret3y": 160.49
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.3538,
      "ret1w": 2.86,
      "ret1m": 1.81,
      "ret3m": -2.96,
      "ret6m": -7.1,
      "ret1y": 12.66,
      "ret2y": 15.91,
      "ret3y": 74.42
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.8344,
      "ret1w": 0.2,
      "ret1m": 4.45,
      "ret3m": 11.27,
      "ret6m": 8.71,
      "ret1y": 46.95,
      "ret2y": 120.76,
      "ret3y": 290.97
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6975,
      "ret1w": -1.48,
      "ret1m": -1.25,
      "ret3m": -0.13,
      "ret6m": -0.23,
      "ret1y": -12.14,
      "ret2y": -16.06,
      "ret3y": 6.95
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.2158,
      "ret1w": 0.84,
      "ret1m": -1.66,
      "ret3m": 5.1,
      "ret6m": -15.71,
      "ret1y": -25.83,
      "ret2y": -9.88,
      "ret3y": 24.11
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7426,
      "ret1w": -0.19,
      "ret1m": -0.11,
      "ret3m": 7.19,
      "ret6m": -13.75,
      "ret1y": -30.55,
      "ret2y": -11.82,
      "ret3y": 33.36
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.484,
      "ret1w": -0.46,
      "ret1m": -0.21,
      "ret3m": 1.03,
      "ret6m": 0.68,
      "ret1y": -6.27,
      "ret2y": 15.86,
      "ret3y": 58.48
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.903,
      "ret1w": 0.05,
      "ret1m": -0.89,
      "ret3m": 6.31,
      "ret6m": -7.98,
      "ret1y": -5.84,
      "ret2y": 7.57,
      "ret3y": 72.06
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3609,
      "ret1w": 0.71,
      "ret1m": -1.15,
      "ret3m": 1.07,
      "ret6m": -2.42,
      "ret1y": 0.78,
      "ret2y": 15.08,
      "ret3y": 47.04
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.491,
      "ret1w": 0.58,
      "ret1m": -2.89,
      "ret3m": -4.04,
      "ret6m": 3.53,
      "ret1y": 36.31,
      "ret2y": 106.2,
      "ret3y": 282.37
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.1,
      "ret1w": -2.22,
      "ret1m": -3.59,
      "ret3m": 2.42,
      "ret6m": 0.64,
      "ret1y": -10.2,
      "ret2y": -16.41,
      "ret3y": 1.95
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.421,
      "ret1w": -2.54,
      "ret1m": -3.12,
      "ret3m": 7.55,
      "ret6m": -3.35,
      "ret1y": -15.32,
      "ret2y": -13.54,
      "ret3y": 40.1
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.8006,
      "ret1w": 0.4,
      "ret1m": -1.14,
      "ret3m": -13.77,
      "ret6m": -38.34,
      "ret1y": -46.25,
      "ret2y": -21.95,
      "ret3y": 24.76
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9048,
      "ret1w": -0.6,
      "ret1m": -1.49,
      "ret3m": -0.45,
      "ret6m": 9.04,
      "ret1y": -5.3,
      "ret2y": -2.9,
      "ret3y": 8.04
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.656,
      "ret1w": 0.45,
      "ret1m": -1.27,
      "ret3m": 5.64,
      "ret6m": -5.62,
      "ret1y": -3.18,
      "ret2y": 11.23,
      "ret3y": 72.39
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.4723,
      "ret1w": 1.18,
      "ret1m": -0.37,
      "ret3m": -7.4,
      "ret6m": -4.98,
      "ret1y": 38.09,
      "ret2y": 105.72,
      "ret3y": 235.64
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5403,
      "ret1w": -1.09,
      "ret1m": 0.48,
      "ret3m": 3.7,
      "ret6m": -2.46,
      "ret1y": -10.45,
      "ret2y": -6.59,
      "ret3y": 22.42
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.079,
      "ret1w": -4.93,
      "ret1m": -1.82,
      "ret3m": -1.46,
      "ret6m": 11.01,
      "ret1y": 6.73,
      "ret2y": -6.9,
      "ret3y": 11.35
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3287,
      "ret1w": -0.82,
      "ret1m": 0.56,
      "ret3m": 0.9,
      "ret6m": 0.06,
      "ret1y": -7.83,
      "ret2y": 6.54,
      "ret3y": 14.85
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3363,
      "ret1w": 0.45,
      "ret1m": 0.9,
      "ret3m": 8.03,
      "ret6m": 3.62,
      "ret1y": 2.82,
      "ret2y": 23.58,
      "ret3y": 81.15
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2949,
      "ret1w": 0.5,
      "ret1m": -1.07,
      "ret3m": -0.85,
      "ret6m": -6.11,
      "ret1y": -3.85,
      "ret2y": 23.84,
      "ret3y": 50.83
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3772,
      "ret1w": 0.5,
      "ret1m": -1.06,
      "ret3m": -0.81,
      "ret6m": -6.03,
      "ret1y": -3.67,
      "ret2y": 24.32,
      "ret3y": 52.03
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0961,
      "ret1w": 0.27,
      "ret1m": 0.07,
      "ret3m": -1.03,
      "ret6m": 0.33,
      "ret1y": 1.58,
      "ret2y": 2.19,
      "ret3y": 9.33
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0688,
      "ret1w": 0.27,
      "ret1m": 0.08,
      "ret3m": -0.98,
      "ret6m": 0.49,
      "ret1y": 1.89,
      "ret2y": 2.81,
      "ret3y": 10.65
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.721,
      "ret1w": -0.29,
      "ret1m": -0.57,
      "ret3m": -1.37,
      "ret6m": -6.18,
      "ret1y": -13.74,
      "ret2y": -5.94,
      "ret3y": 15.42
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7392,
      "ret1w": -0.28,
      "ret1m": -0.54,
      "ret3m": -1.31,
      "ret6m": -6.05,
      "ret1y": -13.49,
      "ret2y": -5.46,
      "ret3y": 16.59
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8577,
      "ret1w": 2.48,
      "ret1m": -0.66,
      "ret3m": -4.78,
      "ret6m": 4.54,
      "ret1y": 40.75,
      "ret2y": 91.11,
      "ret3y": 171.39
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5603,
      "ret1w": -0.76,
      "ret1m": -0.54,
      "ret3m": 0.32,
      "ret6m": -2.36,
      "ret1y": 4.5,
      "ret2y": 31.74,
      "ret3y": 91.04
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.742,
      "ret1w": -0.39,
      "ret1m": -1.54,
      "ret3m": -0.8,
      "ret6m": -14.56,
      "ret1y": -16.3,
      "ret2y": -6.37,
      "ret3y": 18.68
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.243,
      "ret1w": -0.75,
      "ret1m": -2.29,
      "ret3m": -3.34,
      "ret6m": -0.59,
      "ret1y": 19.79,
      "ret2y": 54.56,
      "ret3y": 149.59
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5108,
      "ret1w": 0.06,
      "ret1m": -2.26,
      "ret3m": -5.76,
      "ret6m": -4.17,
      "ret1y": -0.33,
      "ret2y": 22.35,
      "ret3y": 47.59
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5205,
      "ret1w": 0.06,
      "ret1m": -2.25,
      "ret3m": -5.74,
      "ret6m": -4.07,
      "ret1y": -0.12,
      "ret2y": 22.82,
      "ret3y": 48.8
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2759,
      "ret1w": 0.02,
      "ret1m": 0.36,
      "ret3m": 1.47,
      "ret6m": -0.2,
      "ret1y": -1.18,
      "ret2y": -0.76,
      "ret3y": 0.94
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1308,
      "ret1w": -0.67,
      "ret1m": -1.15,
      "ret3m": -1.41,
      "ret6m": 2.93,
      "ret1y": -6.03,
      "ret2y": -0.19,
      "ret3y": 23.26
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4528,
      "ret1w": 0.88,
      "ret1m": -0.54,
      "ret3m": 0.51,
      "ret6m": -12.58,
      "ret1y": 0.06,
      "ret2y": -3.74,
      "ret3y": 21.54
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0004,
      "ret1w": 0.42,
      "ret1m": 0.37,
      "ret3m": 3.3,
      "ret6m": -4.92,
      "ret1y": -4.7,
      "ret2y": 15.77,
      "ret3y": 46.96
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.362,
      "ret1w": 0.84,
      "ret1m": -2.24,
      "ret3m": -17.5,
      "ret6m": -11.2,
      "ret1y": 40.32,
      "ret2y": 111.31,
      "ret3y": 203.98
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4743,
      "ret1w": -0.56,
      "ret1m": 1.23,
      "ret3m": 0.58,
      "ret6m": 0.76,
      "ret1y": 0.68,
      "ret2y": -3.34,
      "ret3y": 10.01
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6459,
      "ret1w": 0.87,
      "ret1m": -3.19,
      "ret3m": 6.08,
      "ret6m": -11.46,
      "ret1y": -6.93,
      "ret2y": 7.72,
      "ret3y": 56.24
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.736,
      "ret1w": 1.62,
      "ret1m": -3.47,
      "ret3m": 2.09,
      "ret6m": 19.77,
      "ret1y": 79.62,
      "ret2y": 168.27,
      "ret3y": 353.14
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0683,
      "ret1w": 0.19,
      "ret1m": 0.06,
      "ret3m": -0.35,
      "ret6m": -0.06,
      "ret1y": 0.46,
      "ret2y": 1.48,
      "ret3y": 4.89
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1168,
      "ret1w": 0.18,
      "ret1m": 0.06,
      "ret3m": -0.32,
      "ret6m": 0.0,
      "ret1y": 0.59,
      "ret2y": 1.77,
      "ret3y": 5.62
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.064,
      "ret1w": 0.0,
      "ret1m": -0.01,
      "ret3m": 0.13,
      "ret6m": 0.26,
      "ret1y": 0.76,
      "ret2y": 1.52,
      "ret3y": 2.73
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0984,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.12,
      "ret6m": 0.33,
      "ret1y": 0.82,
      "ret2y": 1.51,
      "ret3y": 3.84
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1077,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.14,
      "ret6m": 0.37,
      "ret1y": 0.92,
      "ret2y": 1.71,
      "ret3y": 4.26
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0759,
      "ret1w": -0.01,
      "ret1m": 0.0,
      "ret3m": 0.16,
      "ret6m": 0.33,
      "ret1y": 0.73,
      "ret2y": 1.41,
      "ret3y": 2.83
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0903,
      "ret1w": 0.0,
      "ret1m": 0.01,
      "ret3m": 0.18,
      "ret6m": 0.41,
      "ret1y": 0.9,
      "ret2y": 1.74,
      "ret3y": 3.48
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0706,
      "ret1w": 0.17,
      "ret1m": -0.28,
      "ret3m": 0.27,
      "ret6m": -1.39,
      "ret1y": 1.43,
      "ret2y": 7.6,
      "ret3y": 13.2
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2224,
      "ret1w": 0.11,
      "ret1m": -0.42,
      "ret3m": 1.1,
      "ret6m": -2.24,
      "ret1y": 0.39,
      "ret2y": 3.18,
      "ret3y": 7.43
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0772,
      "ret1w": 0.18,
      "ret1m": -0.28,
      "ret3m": 0.31,
      "ret6m": -1.3,
      "ret1y": 1.64,
      "ret2y": 8.03,
      "ret3y": 14.12
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0453,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.13,
      "ret6m": 0.36,
      "ret1y": 0.88,
      "ret2y": 1.71,
      "ret3y": 3.56
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1742,
      "ret1w": 0.31,
      "ret1m": -0.18,
      "ret3m": -0.2,
      "ret6m": -2.77,
      "ret1y": -2.37,
      "ret2y": 1.52,
      "ret3y": 11.18
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2167,
      "ret1w": -0.02,
      "ret1m": -0.09,
      "ret3m": -0.09,
      "ret6m": -0.72,
      "ret1y": -0.18,
      "ret2y": 4.38,
      "ret3y": 15.6
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1413,
      "ret1w": 0.06,
      "ret1m": -0.17,
      "ret3m": 0.45,
      "ret6m": -0.72,
      "ret1y": 0.98,
      "ret2y": 4.97,
      "ret3y": 10.89
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2127,
      "ret1w": 0.07,
      "ret1m": -0.17,
      "ret3m": 0.48,
      "ret6m": -0.62,
      "ret1y": 1.18,
      "ret2y": 5.39,
      "ret3y": 11.81
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.384,
      "ret1w": 2.36,
      "ret1m": -1.37,
      "ret3m": 5.39,
      "ret6m": 1.15,
      "ret1y": 42.33,
      "ret2y": 102.38,
      "ret3y": 131.68
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9593,
      "ret1w": -0.5,
      "ret1m": -1.39,
      "ret3m": 1.96,
      "ret6m": 0.8,
      "ret1y": 8.24,
      "ret2y": 10.0,
      "ret3y": 33.29
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.859,
      "ret1w": 0.96,
      "ret1m": -2.87,
      "ret3m": -1.44,
      "ret6m": -10.55,
      "ret1y": -11.67,
      "ret2y": 4.38,
      "ret3y": 52.7
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3934,
      "ret1w": -0.59,
      "ret1m": -0.87,
      "ret3m": 9.25,
      "ret6m": 7.14,
      "ret1y": 21.23,
      "ret2y": 32.88,
      "ret3y": 76.04
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9371,
      "ret1w": -0.24,
      "ret1m": -0.26,
      "ret3m": -0.26,
      "ret6m": -0.41,
      "ret1y": -3.12,
      "ret2y": -3.24,
      "ret3y": -1.64
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6613,
      "ret1w": 1.64,
      "ret1m": -3.25,
      "ret3m": 1.74,
      "ret6m": -1.38,
      "ret1y": 26.19,
      "ret2y": 59.55,
      "ret3y": 94.37
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.583,
      "ret1w": -0.24,
      "ret1m": -1.55,
      "ret3m": 1.33,
      "ret6m": 0.31,
      "ret1y": 2.28,
      "ret2y": 6.51,
      "ret3y": 21.15
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.265,
      "ret1w": 2.51,
      "ret1m": -0.39,
      "ret3m": 4.03,
      "ret6m": 4.29,
      "ret1y": -5.24,
      "ret2y": -12.94,
      "ret3y": 120.38
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.981,
      "ret1w": 4.03,
      "ret1m": -0.51,
      "ret3m": 3.15,
      "ret6m": 1.76,
      "ret1y": -11.14,
      "ret2y": -18.79,
      "ret3y": 52.33
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8683,
      "ret1w": 1.02,
      "ret1m": -1.4,
      "ret3m": 4.06,
      "ret6m": 1.13,
      "ret1y": 34.52,
      "ret2y": 88.09,
      "ret3y": 136.66
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.6199,
      "ret1w": 1.3,
      "ret1m": 5.34,
      "ret3m": 15.28,
      "ret6m": 6.12,
      "ret1y": 6.51,
      "ret2y": 46.68,
      "ret3y": 57.23
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7101,
      "ret1w": 1.71,
      "ret1m": 0.23,
      "ret3m": 3.86,
      "ret6m": 4.68,
      "ret1y": 7.54,
      "ret2y": 30.36,
      "ret3y": 53.9
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3201,
      "ret1w": 1.65,
      "ret1m": 0.08,
      "ret3m": 4.88,
      "ret6m": 1.82,
      "ret1y": 3.76,
      "ret2y": 20.61,
      "ret3y": 38.88
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.326,
      "ret1w": 0.23,
      "ret1m": -0.15,
      "ret3m": -1.12,
      "ret6m": 0.23,
      "ret1y": 1.77,
      "ret2y": 6.16,
      "ret3y": -3.81
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.16,
      "ret1w": 0.51,
      "ret1m": 3.5,
      "ret3m": 11.63,
      "ret6m": -1.68,
      "ret1y": -12.12,
      "ret2y": 24.5,
      "ret3y": 59.33
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0108,
      "ret1w": -0.01,
      "ret1m": 0.02,
      "ret3m": 0.24,
      "ret6m": 0.53,
      "ret1y": 1.47,
      "ret2y": 2.11,
      "ret3y": 3.65
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0097,
      "ret1w": -0.01,
      "ret1m": 0.03,
      "ret3m": 0.25,
      "ret6m": 0.51,
      "ret1y": 1.48,
      "ret2y": 2.17,
      "ret3y": 3.84
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.44,
      "ret1w": 0.56,
      "ret1m": -2.11,
      "ret3m": -4.32,
      "ret6m": -6.07,
      "ret1y": 0.21,
      "ret2y": 9.26,
      "ret3y": 38.46
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.894,
      "ret1w": 1.15,
      "ret1m": -1.56,
      "ret3m": -0.24,
      "ret6m": -3.21,
      "ret1y": 2.66,
      "ret2y": 22.11,
      "ret3y": 69.04
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7172,
      "ret1w": 2.13,
      "ret1m": 2.49,
      "ret3m": 9.7,
      "ret6m": 1.17,
      "ret1y": -6.74,
      "ret2y": 40.55,
      "ret3y": 72.41
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1508,
      "ret1w": 0.76,
      "ret1m": -0.47,
      "ret3m": -0.77,
      "ret6m": 0.0,
      "ret1y": 4.19,
      "ret2y": 14.74,
      "ret3y": 43.32
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2121,
      "ret1w": 0.77,
      "ret1m": -0.46,
      "ret3m": -0.73,
      "ret6m": 0.1,
      "ret1y": 4.4,
      "ret2y": 15.21,
      "ret3y": 44.48
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0254,
      "ret1w": 0.05,
      "ret1m": -1.67,
      "ret3m": 0.55,
      "ret6m": -6.05,
      "ret1y": -4.62,
      "ret2y": 17.05,
      "ret3y": 69.72
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8021,
      "ret1w": 0.58,
      "ret1m": -0.94,
      "ret3m": -2.31,
      "ret6m": -2.58,
      "ret1y": -0.03,
      "ret2y": 8.59,
      "ret3y": 40.54
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5829,
      "ret1w": 0.11,
      "ret1m": -0.73,
      "ret3m": 1.15,
      "ret6m": -2.79,
      "ret1y": -4.93,
      "ret2y": 14.53,
      "ret3y": 55.86
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.0165,
      "ret1w": 1.27,
      "ret1m": -2.3,
      "ret3m": -5.51,
      "ret6m": -4.55,
      "ret1y": 10.89,
      "ret2y": 29.06,
      "ret3y": 82.52
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1615,
      "ret1w": -0.02,
      "ret1m": 0.25,
      "ret3m": 0.7,
      "ret6m": 1.82,
      "ret1y": -0.81,
      "ret2y": 5.77,
      "ret3y": 30.09
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5243,
      "ret1w": 0.31,
      "ret1m": 0.33,
      "ret3m": 2.94,
      "ret6m": 3.52,
      "ret1y": 2.2,
      "ret2y": 11.21,
      "ret3y": 30.8
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4172,
      "ret1w": -0.67,
      "ret1m": -2.74,
      "ret3m": 1.6,
      "ret6m": -1.04,
      "ret1y": 14.84,
      "ret2y": 16.98,
      "ret3y": 35.59
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8404,
      "ret1w": 1.18,
      "ret1m": -0.76,
      "ret3m": -2.0,
      "ret6m": -3.6,
      "ret1y": 6.62,
      "ret2y": 19.49,
      "ret3y": 65.29
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1789,
      "ret1w": -4.47,
      "ret1m": -2.34,
      "ret3m": 1.59,
      "ret6m": -7.12,
      "ret1y": -0.31,
      "ret2y": 14.76,
      "ret3y": 50.14
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1804,
      "ret1w": -4.46,
      "ret1m": -2.34,
      "ret3m": 1.61,
      "ret6m": -7.04,
      "ret1y": -0.34,
      "ret2y": 14.5,
      "ret3y": 49.61
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4117,
      "ret1w": 0.44,
      "ret1m": -0.7,
      "ret3m": 3.9,
      "ret6m": -11.05,
      "ret1y": -4.85,
      "ret2y": 6.01,
      "ret3y": 41.75
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4437,
      "ret1w": 0.44,
      "ret1m": -0.69,
      "ret3m": 3.93,
      "ret6m": -10.96,
      "ret1y": -4.66,
      "ret2y": 6.43,
      "ret3y": 42.88
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0387,
      "ret1w": 1.03,
      "ret1m": -0.98,
      "ret3m": -0.44,
      "ret6m": -10.88,
      "ret1y": 0.1,
      "ret2y": 16.59,
      "ret3y": 65.22
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1661,
      "ret1w": 0.0,
      "ret1m": -0.1,
      "ret3m": 0.03,
      "ret6m": -0.29,
      "ret1y": -0.46,
      "ret2y": 1.91,
      "ret3y": 8.08
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1859,
      "ret1w": 0.0,
      "ret1m": -0.09,
      "ret3m": 0.05,
      "ret6m": -0.21,
      "ret1y": -0.3,
      "ret2y": 2.22,
      "ret3y": 8.74
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0839,
      "ret1w": 0.0,
      "ret1m": 0.0,
      "ret3m": 0.16,
      "ret6m": 0.35,
      "ret1y": 0.91,
      "ret2y": 1.82,
      "ret3y": 3.33
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4102,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": -0.05,
      "ret6m": 0.1,
      "ret1y": 0.13,
      "ret2y": 0.58,
      "ret3y": 12.82
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4622,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": -0.02,
      "ret6m": 0.2,
      "ret1y": 0.33,
      "ret2y": 0.98,
      "ret3y": 13.72
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1223,
      "ret1w": 0.44,
      "ret1m": -0.73,
      "ret3m": -0.87,
      "ret6m": 7.25,
      "ret1y": 10.78,
      "ret2y": 23.96,
      "ret3y": 68.57
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.244,
      "ret1w": -0.26,
      "ret1m": 0.08,
      "ret3m": -0.64,
      "ret6m": 1.78,
      "ret1y": 3.08,
      "ret2y": 9.6,
      "ret3y": 53.83
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 4.4754
      },
      {
        "date": "2026-08-13",
        "nav": 4.4374
      },
      {
        "date": "2026-08-14",
        "nav": 4.4847
      },
      {
        "date": "2026-08-17",
        "nav": 4.7172
      },
      {
        "date": "2026-08-18",
        "nav": 4.7149
      },
      {
        "date": "2026-08-19",
        "nav": 4.3366
      },
      {
        "date": "2026-08-20",
        "nav": 4.3652
      },
      {
        "date": "2026-08-21",
        "nav": 4.4656
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 4.2725
      },
      {
        "date": "2026-08-13",
        "nav": 4.2195
      },
      {
        "date": "2026-08-14",
        "nav": 4.2765
      },
      {
        "date": "2026-08-17",
        "nav": 4.4742
      },
      {
        "date": "2026-08-18",
        "nav": 4.4359
      },
      {
        "date": "2026-08-19",
        "nav": 4.1719
      },
      {
        "date": "2026-08-20",
        "nav": 4.2329
      },
      {
        "date": "2026-08-21",
        "nav": 4.3538
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 5.3112
      },
      {
        "date": "2026-08-13",
        "nav": 5.4027
      },
      {
        "date": "2026-08-14",
        "nav": 5.5859
      },
      {
        "date": "2026-08-17",
        "nav": 5.9244
      },
      {
        "date": "2026-08-18",
        "nav": 5.9822
      },
      {
        "date": "2026-08-19",
        "nav": 5.5797
      },
      {
        "date": "2026-08-20",
        "nav": 5.823
      },
      {
        "date": "2026-08-21",
        "nav": 5.8344
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 0.7183
      },
      {
        "date": "2026-08-13",
        "nav": 0.7126
      },
      {
        "date": "2026-08-14",
        "nav": 0.7063
      },
      {
        "date": "2026-08-17",
        "nav": 0.7032
      },
      {
        "date": "2026-08-18",
        "nav": 0.7063
      },
      {
        "date": "2026-08-19",
        "nav": 0.7023
      },
      {
        "date": "2026-08-20",
        "nav": 0.708
      },
      {
        "date": "2026-08-21",
        "nav": 0.6975
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 2.3334
      },
      {
        "date": "2026-08-13",
        "nav": 2.2664
      },
      {
        "date": "2026-08-14",
        "nav": 2.2533
      },
      {
        "date": "2026-08-17",
        "nav": 2.2808
      },
      {
        "date": "2026-08-18",
        "nav": 2.2702
      },
      {
        "date": "2026-08-19",
        "nav": 2.1912
      },
      {
        "date": "2026-08-20",
        "nav": 2.1974
      },
      {
        "date": "2026-08-21",
        "nav": 2.2158
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 2.8351
      },
      {
        "date": "2026-08-13",
        "nav": 2.7688
      },
      {
        "date": "2026-08-14",
        "nav": 2.7457
      },
      {
        "date": "2026-08-17",
        "nav": 2.7763
      },
      {
        "date": "2026-08-18",
        "nav": 2.7548
      },
      {
        "date": "2026-08-19",
        "nav": 2.6967
      },
      {
        "date": "2026-08-20",
        "nav": 2.7479
      },
      {
        "date": "2026-08-21",
        "nav": 2.7426
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 5.5916
      },
      {
        "date": "2026-08-13",
        "nav": 5.5231
      },
      {
        "date": "2026-08-14",
        "nav": 5.4958
      },
      {
        "date": "2026-08-17",
        "nav": 5.5427
      },
      {
        "date": "2026-08-18",
        "nav": 5.5481
      },
      {
        "date": "2026-08-19",
        "nav": 5.4935
      },
      {
        "date": "2026-08-20",
        "nav": 5.5095
      },
      {
        "date": "2026-08-21",
        "nav": 5.484
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 1.917
      },
      {
        "date": "2026-08-13",
        "nav": 1.898
      },
      {
        "date": "2026-08-14",
        "nav": 1.92
      },
      {
        "date": "2026-08-17",
        "nav": 1.985
      },
      {
        "date": "2026-08-18",
        "nav": 1.994
      },
      {
        "date": "2026-08-19",
        "nav": 1.896
      },
      {
        "date": "2026-08-20",
        "nav": 1.902
      },
      {
        "date": "2026-08-21",
        "nav": 1.903
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 1.376
      },
      {
        "date": "2026-08-13",
        "nav": 1.3642
      },
      {
        "date": "2026-08-14",
        "nav": 1.3768
      },
      {
        "date": "2026-08-17",
        "nav": 1.4147
      },
      {
        "date": "2026-08-18",
        "nav": 1.4142
      },
      {
        "date": "2026-08-19",
        "nav": 1.3532
      },
      {
        "date": "2026-08-20",
        "nav": 1.3513
      },
      {
        "date": "2026-08-21",
        "nav": 1.3609
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 3.538
      },
      {
        "date": "2026-08-13",
        "nav": 3.569
      },
      {
        "date": "2026-08-14",
        "nav": 3.595
      },
      {
        "date": "2026-08-17",
        "nav": 3.738
      },
      {
        "date": "2026-08-18",
        "nav": 3.72
      },
      {
        "date": "2026-08-19",
        "nav": 3.46
      },
      {
        "date": "2026-08-20",
        "nav": 3.471
      },
      {
        "date": "2026-08-21",
        "nav": 3.491
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 1.157
      },
      {
        "date": "2026-08-13",
        "nav": 1.151
      },
      {
        "date": "2026-08-14",
        "nav": 1.141
      },
      {
        "date": "2026-08-17",
        "nav": 1.135
      },
      {
        "date": "2026-08-18",
        "nav": 1.143
      },
      {
        "date": "2026-08-19",
        "nav": 1.123
      },
      {
        "date": "2026-08-20",
        "nav": 1.125
      },
      {
        "date": "2026-08-21",
        "nav": 1.1
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 2.486
      },
      {
        "date": "2026-08-13",
        "nav": 2.499
      },
      {
        "date": "2026-08-14",
        "nav": 2.499
      },
      {
        "date": "2026-08-17",
        "nav": 2.487
      },
      {
        "date": "2026-08-18",
        "nav": 2.464
      },
      {
        "date": "2026-08-19",
        "nav": 2.391
      },
      {
        "date": "2026-08-20",
        "nav": 2.484
      },
      {
        "date": "2026-08-21",
        "nav": 2.421
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 1.8591
      },
      {
        "date": "2026-08-13",
        "nav": 1.8229
      },
      {
        "date": "2026-08-14",
        "nav": 1.8213
      },
      {
        "date": "2026-08-17",
        "nav": 1.9149
      },
      {
        "date": "2026-08-18",
        "nav": 1.9445
      },
      {
        "date": "2026-08-19",
        "nav": 1.7919
      },
      {
        "date": "2026-08-20",
        "nav": 1.7934
      },
      {
        "date": "2026-08-21",
        "nav": 1.8006
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 1.9495
      },
      {
        "date": "2026-08-13",
        "nav": 1.9482
      },
      {
        "date": "2026-08-14",
        "nav": 1.9337
      },
      {
        "date": "2026-08-17",
        "nav": 1.9217
      },
      {
        "date": "2026-08-18",
        "nav": 1.9245
      },
      {
        "date": "2026-08-19",
        "nav": 1.9152
      },
      {
        "date": "2026-08-20",
        "nav": 1.9163
      },
      {
        "date": "2026-08-21",
        "nav": 1.9048
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 1.677
      },
      {
        "date": "2026-08-13",
        "nav": 1.6649
      },
      {
        "date": "2026-08-14",
        "nav": 1.6773
      },
      {
        "date": "2026-08-17",
        "nav": 1.7202
      },
      {
        "date": "2026-08-18",
        "nav": 1.7168
      },
      {
        "date": "2026-08-19",
        "nav": 1.6362
      },
      {
        "date": "2026-08-20",
        "nav": 1.6485
      },
      {
        "date": "2026-08-21",
        "nav": 1.656
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 2.4289
      },
      {
        "date": "2026-08-13",
        "nav": 2.4284
      },
      {
        "date": "2026-08-14",
        "nav": 2.4815
      },
      {
        "date": "2026-08-17",
        "nav": 2.6013
      },
      {
        "date": "2026-08-18",
        "nav": 2.6156
      },
      {
        "date": "2026-08-19",
        "nav": 2.4033
      },
      {
        "date": "2026-08-20",
        "nav": 2.4435
      },
      {
        "date": "2026-08-21",
        "nav": 2.4723
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 2.5669
      },
      {
        "date": "2026-08-13",
        "nav": 2.5419
      },
      {
        "date": "2026-08-14",
        "nav": 2.5281
      },
      {
        "date": "2026-08-17",
        "nav": 2.5392
      },
      {
        "date": "2026-08-18",
        "nav": 2.5444
      },
      {
        "date": "2026-08-19",
        "nav": 2.5399
      },
      {
        "date": "2026-08-20",
        "nav": 2.5684
      },
      {
        "date": "2026-08-21",
        "nav": 2.5403
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-08-11",
        "nav": 1.108
      },
      {
        "date": "2026-08-12",
        "nav": 1.099
      },
      {
        "date": "2026-08-13",
        "nav": 1.107
      },
      {
        "date": "2026-08-14",
        "nav": 1.099
      },
      {
        "date": "2026-08-17",
        "nav": 1.122
      },
      {
        "date": "2026-08-18",
        "nav": 1.109
      },
      {
        "date": "2026-08-19",
        "nav": 1.078
      },
      {
        "date": "2026-08-20",
        "nav": 1.135
      },
      {
        "date": "2026-08-21",
        "nav": 1.079
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 2.3418
      },
      {
        "date": "2026-08-13",
        "nav": 2.3323
      },
      {
        "date": "2026-08-14",
        "nav": 2.3158
      },
      {
        "date": "2026-08-17",
        "nav": 2.3076
      },
      {
        "date": "2026-08-18",
        "nav": 2.3139
      },
      {
        "date": "2026-08-19",
        "nav": 2.3346
      },
      {
        "date": "2026-08-20",
        "nav": 2.3479
      },
      {
        "date": "2026-08-21",
        "nav": 2.3287
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-08-12",
        "nav": 1.3282
      },
      {
        "date": "2026-08-13",
        "nav": 1.3174
      },
      {
        "date": "2026-08-14",
        "nav": 1.3244
      },
      {
        "date": "2026-08-17",
        "nav": 1.3581
      },
      {
        "date": "2026-08-18",
        "nav": 1.363
      },
      {
        "date": "2026-08-19",
        "nav": 1.3152
      },
      {
        "date": "2026-08-20",
        "nav": 1.3303
      },
      {
        "date": "2026-08-21",
        "nav": 1.3363
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 4.4656,
      "price": 4.4656,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 4.3538,
      "price": 4.3538,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.22,
      "nav": 5.8344,
      "price": 5.8344,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.06,
      "nav": 0.6975,
      "price": 0.6975,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.2158,
      "price": 2.2158,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.7426,
      "price": 2.7426,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 5.484,
      "price": 5.484,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.903,
      "price": 1.903,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.3609,
      "price": 1.3609,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 3.491,
      "price": 3.491,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.18,
      "nav": 1.1,
      "price": 1.1,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 2.421,
      "price": 2.421,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.8006,
      "price": 1.8006,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.9048,
      "price": 1.9048,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.656,
      "price": 1.656,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.4723,
      "price": 2.4723,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.5403,
      "price": 2.5403,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 1.079,
      "price": 1.079,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.3287,
      "price": 2.3287,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.3363,
      "price": 1.3363,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 0.65,
      "sharpe": 0.2,
      "calmar": 0.2
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 2.71,
      "sharpe": 1.86,
      "calmar": 1.86
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 6.68,
      "sharpe": 4.97,
      "calmar": 4.97
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.88,
      "sharpe": -1.94,
      "calmar": -1.94
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.49,
      "sharpe": -3.88,
      "calmar": -3.88
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.17,
      "sharpe": -5.98,
      "calmar": -5.98
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.32,
      "sharpe": -1.2,
      "calmar": -1.2
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.33,
      "sharpe": -0.99,
      "calmar": -0.99
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 1.72,
      "sharpe": 0.13,
      "calmar": 0.13
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 4.33,
      "sharpe": 4.6,
      "calmar": 4.6
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 5.38,
      "sharpe": -1.19,
      "calmar": -1.19
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.68,
      "sharpe": -1.89,
      "calmar": -1.89
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 1.71,
      "sharpe": -7.53,
      "calmar": -7.53
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.23,
      "sharpe": -0.82,
      "calmar": -0.82
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.91,
      "sharpe": -0.51,
      "calmar": -0.51
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 0.55,
      "sharpe": 7.09,
      "calmar": 7.09
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.72,
      "sharpe": -1.91,
      "calmar": -1.91
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 2.73,
      "sharpe": 0.99,
      "calmar": 0.99
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.84,
      "sharpe": -1.41,
      "calmar": -1.41
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.35,
      "sharpe": 0.48,
      "calmar": 0.48
    }
  ],
  "news": [
    {
      "title": "当前，我国算力规模快速增长，算力设备向高能效方向升级，算力载体绿色化转型进展积极，算电协同从理念走向实践，算力网、词元经济、算力出海等新模式新业态成为新增长极。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:46",
      "impact": "neutral"
    },
    {
      "title": "加快新旧动能转换正在成为全国各地发展新质生产力的解题方向。深圳市罗湖区，作为深圳的“长子区”，如何答好新旧动能转换命题？8月20日，在深圳市罗湖区第九次党代会举办期间，21世纪经济报道记者先后采访西普尼、联合蓝海、斯贝达等企业，也与罗湖区发改局、科工信局、金融服务署等产业主管部门进行深入交流。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:39",
      "impact": "neutral"
    },
    {
      "title": "8月19日，总台报道了中央安全生产考核巡查组在内蒙古赤峰、通辽等地开展的明查暗访中，发现的燃气、消防等领域重大事故隐患。内蒙古自治区党委、政府高度重视，自治区安委办对曝光及反馈的问题隐患，实行全程跟踪督办，确保整改闭环。同时，坚持举一反三，推动进一步压紧压实安全生产责任，全面排查整治同类风险，坚决防范遏制事故发生。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:36",
      "impact": "neutral"
    },
    {
      "title": "新华财经呼和浩特8月22日电（记者丁雅雯）22日，2026绿色算力（人工智能）大会“才聚青城·智汇云谷”算力人才发展专题会在呼和浩特举行。专题会由呼和浩特市人民政府、中国（内蒙古）自贸试验区呼和浩特片区管委会主办，旨在搭建政产学研用协同对接平台，打通算力人才引、育、留、用全链条，为北方绿色算力高地筑牢人才根基。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:35",
      "impact": "neutral"
    },
    {
      "title": "据深圳天气发布，深圳市发布分区暴雨黄色预警信号：预计宝安区（松岗、燕罗街道）、龙岗区（横岗、龙岗、龙城、平湖、园山、宝龙街道）、光明区（公明、光明、马田、新湖街道）和龙华区（观湖、福城、观澜街道）2小时内将出现30-50毫米降水，深圳市气象台2026年08月22日17时34分在上述区域发布暴雨黄色预警信号，全市进入暴雨戒备状态。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:03",
      "impact": "neutral"
    },
    {
      "title": "新华财经北京8月22日电（记者刘慧）8月21日，财政部、中国人民银行、金融监管总局对外发布通知，明确进一步做好财政金融协同促内需政策有关工作。随后，中国工商银行、中国农业银行、中国银行、中国建设银行、交通银行、招商银行等多家银行发布公告，更新个人消费贷贴息细则。贴息上限从3000元提高到5000元，8月1日起按调整后的政策执行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:51",
      "impact": "neutral"
    },
    {
      "title": "榴莲是我国第一大进口水果品类。近期，进口榴莲大量上市，一些品种的鲜榴莲降价近三成。 近期，猫山王榴莲、黑刺榴莲、干尧榴莲有明显降价，环比4月，降价幅度在10%-30%之间不等。近期进口榴莲大量上市、供应量大增是目前榴莲降价的主要原因。随着近期更多越南榴莲上市，市场内榴莲批发价格进一步下降，如干尧榴莲批发均价已下降至15-18元/斤。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:41",
      "impact": "neutral"
    },
    {
      "title": "今年以来，在以习近平同志为核心的党中央坚强领导下，各地区各部门积极作为、迎难而上，有效应对各种外部冲击和内部困难，扎扎实实推动高质量发展，我国经济运行呈现出动能向新、结构向优的发展态势，成绩可圈可点。上半年，宏观指标总体稳健，国内生产总值（GDP）增长4.7%、在全球主要经济体中继续位居前列，物价合理回升，就业总体稳定，国际收支基本平衡。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "05:46",
      "impact": "neutral"
    },
    {
      "title": "8月21日召开的国务院常务会议，部署进一步清理拖欠企业账款工作。会议指出，要实施好加快加力清理拖欠企业账款行动，压实主体责任，督促指导地方用好专项债券、专项再贷款等政策，打通“连环清”链条，切实提升清欠质量、严防新增拖欠。要大力整治大企业拖欠中小企业账款问题，健全行业账款支付规则，分行业明确合理账期和支付条件，细化拖欠企业账款失信行为认定标准。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:35",
      "impact": "neutral"
    },
    {
      "title": "一、全国一般公共预算收支情况（一）一般公共预算收入情况。1-7月，全国一般公共预算收入143696亿元，同比增长5.8%。其中，全国税收收入118381亿元，同比增长6.7%；非税收入25315亿元，同比增长1.6%。分中央和地方看，中央一般公共预算收入63857亿元，同比增长9.1%；地方一般公共预算本级收入79839亿元，同比增长3.3%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:40",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 51,
    "label": "中性",
    "upDownRatio": "3,400/1,300",
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
