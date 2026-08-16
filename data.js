// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-16 10:53:49
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-16 10:53 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-14",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3927.18,
      "change": 0.22,
      "changePct": "+0.01%",
      "high": 3932.64,
      "low": 3903.7,
      "volume": 499525613.0,
      "amount": 990371920000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14354.31,
      "change": 64.87,
      "changePct": "+0.45%",
      "high": 14384.18,
      "low": 14203.99,
      "volume": 642557319.0,
      "amount": 1152471300000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3626.3,
      "change": 40.26,
      "changePct": "+1.12%",
      "high": 3633.03,
      "low": 3578.61,
      "volume": 193507809.0,
      "amount": 553388510000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1717.68,
      "change": -0.07,
      "changePct": "-0.00%",
      "high": 1741.35,
      "low": 1690.68,
      "volume": 8685139.0,
      "amount": 98891050000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4665.88,
      "change": 1.93,
      "changePct": "+0.04%",
      "high": 4676.71,
      "low": 4637.13,
      "volume": 178430696.0,
      "amount": 549769610000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7990.33,
      "change": 21.95,
      "changePct": "+0.28%",
      "high": 8005.15,
      "low": 7897.24,
      "volume": 183327915.0,
      "amount": 408994310000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.75万亿",
      "label": "成交额",
      "rawAmount": 3753886700000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,253/1,373",
      "label": "涨/跌家数",
      "rawUp": 3253,
      "rawDown": 1373,
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
    "totalInflow": 27.03,
    "totalOutflow": 0,
    "netFlow": 27.03,
    "netFlowTrend": [
      5.41,
      10.81,
      16.22,
      21.62,
      27.03
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
      "inflow": 10.56,
      "pct": 3.6
    },
    {
      "name": "半导体",
      "inflow": 3.59,
      "pct": 0.84
    },
    {
      "name": "5G",
      "inflow": 2.91,
      "pct": 2.78
    },
    {
      "name": "有色",
      "inflow": 2.74,
      "pct": 1.12
    },
    {
      "name": "煤炭",
      "inflow": 2.34,
      "pct": 1.61
    },
    {
      "name": "芯片",
      "inflow": 1.86,
      "pct": 0.92
    },
    {
      "name": "传媒",
      "inflow": 1.28,
      "pct": 0.12
    },
    {
      "name": "军工",
      "inflow": 0.61,
      "pct": 0.35
    },
    {
      "name": "人工智能",
      "inflow": 0.58,
      "pct": 1.31
    },
    {
      "name": "云计算",
      "inflow": 0.56,
      "pct": 1.72
    },
    {
      "name": "光伏",
      "inflow": 0.56,
      "pct": 0.23
    },
    {
      "name": "新能源车",
      "inflow": 0.49,
      "pct": 0.6
    },
    {
      "name": "游戏",
      "inflow": 0.4,
      "pct": 1.97
    },
    {
      "name": "新能源",
      "inflow": 0.35,
      "pct": 0.43
    },
    {
      "name": "钢铁",
      "inflow": 0.2,
      "pct": 0.52
    },
    {
      "name": "电子",
      "inflow": 0.12,
      "pct": 1.03
    },
    {
      "name": "计算机",
      "inflow": 0.12,
      "pct": 0.25
    },
    {
      "name": "基建",
      "inflow": -0.01,
      "pct": -0.29
    },
    {
      "name": "家电",
      "inflow": -0.17,
      "pct": -0.14
    },
    {
      "name": "银行",
      "inflow": -2.21,
      "pct": -0.75
    }
  ],
  "sectors": [
    {
      "name": "通信",
      "code": "515880",
      "price": 0.69,
      "changePct": 3.6,
      "change": 0.024,
      "turnover": 35.2
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.074,
      "changePct": 2.78,
      "change": 0.029,
      "turnover": 9.71
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.139,
      "changePct": 1.97,
      "change": 0.022,
      "turnover": 1.33
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.774,
      "changePct": 1.72,
      "change": 0.03,
      "turnover": 1.85
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.26,
      "changePct": 1.61,
      "change": 0.02,
      "turnover": 7.8
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.08,
      "changePct": 1.31,
      "change": 0.014,
      "turnover": 1.94
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.89,
      "changePct": 1.12,
      "change": 0.021,
      "turnover": 9.14
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.882,
      "changePct": 1.03,
      "change": 0.009,
      "turnover": 0.41
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.203,
      "changePct": 0.92,
      "change": 0.011,
      "turnover": 6.2
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.077,
      "changePct": 0.84,
      "change": 0.009,
      "turnover": 11.98
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.67,
      "changePct": 0.6,
      "change": 0.01,
      "turnover": 1.62
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.16,
      "changePct": 0.52,
      "change": 0.006,
      "turnover": 0.65
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.577,
      "changePct": 0.43,
      "change": 0.011,
      "turnover": 1.16
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.152,
      "changePct": 0.35,
      "change": 0.004,
      "turnover": 2.03
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.225,
      "changePct": 0.25,
      "change": 0.003,
      "turnover": 0.4
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.865,
      "changePct": 0.23,
      "change": 0.002,
      "turnover": 1.87
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.86,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 4.26
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.422,
      "changePct": -0.14,
      "change": -0.002,
      "turnover": 0.57
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.037,
      "changePct": -0.29,
      "change": -0.003,
      "turnover": 0.05
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.797,
      "changePct": -0.75,
      "change": -0.006,
      "turnover": 7.36
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.351,
      "changePct": -1.13,
      "change": -0.004,
      "turnover": 5.94
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.52,
      "changePct": -1.14,
      "change": -0.006,
      "turnover": 11.71
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.51,
      "changePct": -1.16,
      "change": -0.006,
      "turnover": 0.14
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.918,
      "changePct": -1.18,
      "change": -0.011,
      "turnover": 13.93
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.225,
      "changePct": -1.21,
      "change": -0.015,
      "turnover": 1.37
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.713,
      "changePct": -1.25,
      "change": -0.009,
      "turnover": 0.67
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.395,
      "changePct": -1.5,
      "change": -0.006,
      "turnover": 5.67
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.441,
      "changePct": -1.78,
      "change": -0.008,
      "turnover": 5.78
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.814,
      "changePct": 0.11,
      "amount": 57.0,
      "netFlow": 14.25
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.998,
      "changePct": 0.23,
      "amount": 20.32,
      "netFlow": 5.08
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.077,
      "changePct": 0.84,
      "amount": 11.98,
      "netFlow": 3.0
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.577,
      "changePct": 0.43,
      "amount": 1.16,
      "netFlow": 0.29
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.588,
      "changePct": -0.02,
      "amount": 4.31,
      "netFlow": -1.08
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.395,
      "changePct": -1.5,
      "amount": 5.67,
      "netFlow": -1.42
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.935,
      "changePct": -0.02,
      "amount": 5.91,
      "netFlow": -1.48
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.021,
      "changePct": -0.53,
      "amount": 11.17,
      "netFlow": -2.79
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.52,
      "changePct": -1.14,
      "amount": 11.71,
      "netFlow": -2.93
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.726,
      "changePct": -0.06,
      "amount": 32.38,
      "netFlow": -8.1
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.726,
      "changePct": -0.06,
      "amount": 32.38,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.021,
      "changePct": -0.53,
      "amount": 11.17,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.998,
      "changePct": 0.23,
      "amount": 20.32,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.935,
      "changePct": -0.02,
      "amount": 5.91,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.588,
      "changePct": -0.02,
      "amount": 4.31,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "通信",
      "turnover": 35.2,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "5G",
      "turnover": 9.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.33,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.85,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.8,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.94,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 9.14,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.98,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "新能源车",
      "turnover": 1.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.65,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.16,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.4,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 4.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.57,
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
    },
    {
      "name": "银行",
      "turnover": 7.36,
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
      "nav": 4.4847,
      "ret1w": 1.07,
      "ret1m": 1.16,
      "ret3m": -7.87,
      "ret6m": -12.36,
      "ret1y": 1.49,
      "ret2y": 46.35,
      "ret3y": 160.53
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.2765,
      "ret1w": 1.35,
      "ret1m": -0.13,
      "ret3m": -10.03,
      "ret6m": -13.52,
      "ret1y": 10.66,
      "ret2y": 18.55,
      "ret3y": 74.94
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.5859,
      "ret1w": 3.39,
      "ret1m": 10.58,
      "ret3m": -7.52,
      "ret6m": -2.74,
      "ret1y": 40.7,
      "ret2y": 119.58,
      "ret3y": 269.9
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7063,
      "ret1w": -0.88,
      "ret1m": -0.58,
      "ret3m": 5.69,
      "ret6m": -3.15,
      "ret1y": -11.03,
      "ret2y": -12.62,
      "ret3y": 8.21
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.2533,
      "ret1w": -0.58,
      "ret1m": -2.21,
      "ret3m": 9.4,
      "ret6m": -20.86,
      "ret1y": -24.57,
      "ret2y": -3.3,
      "ret3y": 21.61
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7457,
      "ret1w": -0.83,
      "ret1m": -2.65,
      "ret3m": 5.06,
      "ret6m": -19.05,
      "ret1y": -30.47,
      "ret2y": -7.54,
      "ret3y": 32.51
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.4958,
      "ret1w": -0.49,
      "ret1m": -0.22,
      "ret3m": 5.62,
      "ret6m": -3.05,
      "ret1y": -6.07,
      "ret2y": 20.41,
      "ret3y": 56.28
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.92,
      "ret1w": 1.16,
      "ret1m": 0.52,
      "ret3m": -3.47,
      "ret6m": -9.65,
      "ret1y": -5.0,
      "ret2y": 13.48,
      "ret3y": 69.91
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.3768,
      "ret1w": 0.92,
      "ret1m": 0.42,
      "ret3m": -2.22,
      "ret6m": -4.67,
      "ret1y": 1.95,
      "ret2y": 18.61,
      "ret3y": 49.96
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.595,
      "ret1w": 0.73,
      "ret1m": 1.47,
      "ret3m": -9.42,
      "ret6m": 6.87,
      "ret1y": 40.37,
      "ret2y": 125.67,
      "ret3y": 294.19
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.141,
      "ret1w": -0.87,
      "ret1m": 2.15,
      "ret3m": 11.43,
      "ret6m": 1.97,
      "ret1y": -6.86,
      "ret2y": -9.52,
      "ret3y": 4.01
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.499,
      "ret1w": 0.0,
      "ret1m": 2.8,
      "ret3m": 10.77,
      "ret6m": -3.21,
      "ret1y": -12.59,
      "ret2y": -8.33,
      "ret3y": 39.45
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.8213,
      "ret1w": -0.09,
      "ret1m": 0.46,
      "ret3m": -18.02,
      "ret6m": -40.0,
      "ret1y": -45.63,
      "ret2y": -18.61,
      "ret3y": 28.45
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9337,
      "ret1w": -0.74,
      "ret1m": 0.4,
      "ret3m": 3.47,
      "ret6m": 6.98,
      "ret1y": -3.86,
      "ret2y": 1.78,
      "ret3y": 10.28
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6773,
      "ret1w": 0.74,
      "ret1m": 1.19,
      "ret3m": -1.23,
      "ret6m": -6.66,
      "ret1y": -1.94,
      "ret2y": 16.25,
      "ret3y": 72.42
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.4815,
      "ret1w": 2.19,
      "ret1m": 4.25,
      "ret3m": -18.6,
      "ret6m": -9.4,
      "ret1y": 38.61,
      "ret2y": 111.03,
      "ret3y": 226.38
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5281,
      "ret1w": -0.54,
      "ret1m": -0.11,
      "ret3m": 5.0,
      "ret6m": -7.17,
      "ret1y": -10.88,
      "ret2y": -5.5,
      "ret3y": 21.81
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.099,
      "ret1w": -0.72,
      "ret1m": 0.18,
      "ret3m": -0.45,
      "ret6m": 13.18,
      "ret1y": 8.7,
      "ret2y": -4.02,
      "ret3y": 11.57
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3158,
      "ret1w": -0.71,
      "ret1m": -0.45,
      "ret3m": 3.72,
      "ret6m": -3.7,
      "ret1y": -8.34,
      "ret2y": 7.5,
      "ret3y": 14.97
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3244,
      "ret1w": 0.53,
      "ret1m": 0.83,
      "ret3m": 2.64,
      "ret6m": -0.44,
      "ret1y": 1.9,
      "ret2y": 25.87,
      "ret3y": 78.03
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.3089,
      "ret1w": 0.61,
      "ret1m": 0.04,
      "ret3m": -4.5,
      "ret6m": -5.29,
      "ret1y": -2.81,
      "ret2y": 29.83,
      "ret3y": 49.4
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.392,
      "ret1w": 0.61,
      "ret1m": 0.04,
      "ret3m": -4.47,
      "ret6m": -5.2,
      "ret1y": -2.63,
      "ret2y": 30.32,
      "ret3y": 50.58
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0953,
      "ret1w": 0.02,
      "ret1m": -0.33,
      "ret3m": -1.09,
      "ret6m": -0.45,
      "ret1y": 1.5,
      "ret2y": 2.63,
      "ret3y": 9.12
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0679,
      "ret1w": 0.02,
      "ret1m": -0.32,
      "ret3m": -1.04,
      "ret6m": -0.29,
      "ret1y": 1.8,
      "ret2y": 3.26,
      "ret3y": 10.43
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7251,
      "ret1w": -0.75,
      "ret1m": -0.64,
      "ret3m": 1.6,
      "ret6m": -9.19,
      "ret1y": -13.24,
      "ret2y": -3.82,
      "ret3y": 15.66
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7432,
      "ret1w": -0.76,
      "ret1m": -0.64,
      "ret3m": 1.64,
      "ret6m": -9.08,
      "ret1y": -13.03,
      "ret2y": -3.34,
      "ret3y": 16.82
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.8768,
      "ret1w": 1.68,
      "ret1m": 1.57,
      "ret3m": -10.91,
      "ret6m": 1.23,
      "ret1y": 41.69,
      "ret2y": 99.78,
      "ret3y": 173.46
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5742,
      "ret1w": 0.28,
      "ret1m": 0.61,
      "ret3m": -3.38,
      "ret6m": -3.21,
      "ret1y": 5.07,
      "ret2y": 39.91,
      "ret3y": 88.99
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7536,
      "ret1w": 0.43,
      "ret1m": 0.48,
      "ret3m": -3.8,
      "ret6m": -15.66,
      "ret1y": -14.99,
      "ret2y": -1.21,
      "ret3y": 19.32
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.3423,
      "ret1w": 0.59,
      "ret1m": 1.56,
      "ret3m": -9.39,
      "ret6m": 2.01,
      "ret1y": 22.59,
      "ret2y": 67.91,
      "ret3y": 151.36
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5226,
      "ret1w": -0.08,
      "ret1m": -0.4,
      "ret3m": -9.58,
      "ret6m": -3.88,
      "ret1y": 1.97,
      "ret2y": 27.15,
      "ret3y": 51.26
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5325,
      "ret1w": -0.08,
      "ret1m": -0.39,
      "ret3m": -9.56,
      "ret6m": -3.78,
      "ret1y": 2.19,
      "ret2y": 27.67,
      "ret3y": 52.49
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2713,
      "ret1w": -0.04,
      "ret1m": -0.27,
      "ret3m": 1.32,
      "ret6m": -1.29,
      "ret1y": -1.53,
      "ret2y": -1.16,
      "ret3y": 0.56
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.144,
      "ret1w": -0.44,
      "ret1m": -0.42,
      "ret3m": 0.39,
      "ret6m": 1.56,
      "ret1y": -4.94,
      "ret2y": 3.95,
      "ret3y": 23.71
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4607,
      "ret1w": 0.17,
      "ret1m": 0.72,
      "ret3m": -8.52,
      "ret6m": -13.53,
      "ret1y": 0.61,
      "ret2y": -1.22,
      "ret3y": 20.37
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9892,
      "ret1w": -0.26,
      "ret1m": -0.4,
      "ret3m": 3.59,
      "ret6m": -6.67,
      "ret1y": -5.06,
      "ret2y": 20.13,
      "ret3y": 44.46
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.439,
      "ret1w": 0.61,
      "ret1m": 0.09,
      "ret3m": -24.08,
      "ret6m": -14.35,
      "ret1y": 43.53,
      "ret2y": 122.3,
      "ret3y": 210.38
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4564,
      "ret1w": -0.34,
      "ret1m": -0.35,
      "ret3m": 1.12,
      "ret6m": -1.95,
      "ret1y": -0.55,
      "ret2y": -3.02,
      "ret3y": 8.19
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6672,
      "ret1w": 1.37,
      "ret1m": 0.21,
      "ret3m": -7.46,
      "ret6m": -10.62,
      "ret1y": -3.86,
      "ret2y": 13.22,
      "ret3y": 56.29
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.265,
      "ret1w": 2.05,
      "ret1m": 3.02,
      "ret3m": -8.61,
      "ret6m": 25.98,
      "ret1y": 86.07,
      "ret2y": 193.78,
      "ret3y": 370.71
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0677,
      "ret1w": 0.07,
      "ret1m": -0.04,
      "ret3m": -0.86,
      "ret6m": -0.5,
      "ret1y": 0.4,
      "ret2y": 1.81,
      "ret3y": 4.79
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1161,
      "ret1w": 0.07,
      "ret1m": -0.04,
      "ret3m": -0.85,
      "ret6m": -0.45,
      "ret1y": 0.52,
      "ret2y": 2.09,
      "ret3y": 5.51
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0641,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.16,
      "ret6m": 0.31,
      "ret1y": 0.77,
      "ret2y": 1.42,
      "ret3y": 2.73
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0981,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.12,
      "ret6m": 0.32,
      "ret1y": 0.79,
      "ret2y": 1.48,
      "ret3y": 3.84
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1074,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.89,
      "ret2y": 1.68,
      "ret3y": 4.27
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0759,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.18,
      "ret6m": 0.37,
      "ret1y": 0.73,
      "ret2y": 1.32,
      "ret3y": 2.77
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0902,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.2,
      "ret6m": 0.45,
      "ret1y": 0.89,
      "ret2y": 1.63,
      "ret3y": 3.42
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0736,
      "ret1w": 0.19,
      "ret1m": 0.17,
      "ret3m": -1.21,
      "ret6m": -2.15,
      "ret1y": 1.71,
      "ret2y": 9.12,
      "ret3y": 13.3
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2275,
      "ret1w": 0.31,
      "ret1m": 0.52,
      "ret3m": -1.14,
      "ret6m": -2.81,
      "ret1y": 0.8,
      "ret2y": 3.45,
      "ret3y": 8.13
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0802,
      "ret1w": 0.19,
      "ret1m": 0.18,
      "ret3m": -1.17,
      "ret6m": -2.05,
      "ret1y": 1.92,
      "ret2y": 9.57,
      "ret3y": 14.22
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.045,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.12,
      "ret6m": 0.38,
      "ret1y": 0.85,
      "ret2y": 1.66,
      "ret3y": 3.53
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1763,
      "ret1w": 0.32,
      "ret1m": 0.4,
      "ret3m": -1.47,
      "ret6m": -2.86,
      "ret1y": -2.2,
      "ret2y": 2.58,
      "ret3y": 10.94
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2178,
      "ret1w": -0.07,
      "ret1m": -0.2,
      "ret3m": -0.06,
      "ret6m": -1.2,
      "ret1y": -0.09,
      "ret2y": 5.4,
      "ret3y": 15.35
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1433,
      "ret1w": 0.12,
      "ret1m": -0.03,
      "ret3m": -0.73,
      "ret6m": -0.73,
      "ret1y": 1.16,
      "ret2y": 5.79,
      "ret3y": 10.69
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2148,
      "ret1w": 0.12,
      "ret1m": -0.02,
      "ret3m": -0.69,
      "ret6m": -0.62,
      "ret1y": 1.36,
      "ret2y": 6.24,
      "ret3y": 11.61
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.417,
      "ret1w": 2.42,
      "ret1m": 6.24,
      "ret3m": 0.29,
      "ret6m": -2.3,
      "ret1y": 44.3,
      "ret2y": 95.23,
      "ret3y": 147.14
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0011,
      "ret1w": 0.61,
      "ret1m": 1.02,
      "ret3m": 3.16,
      "ret6m": 2.15,
      "ret1y": 9.77,
      "ret2y": 12.03,
      "ret3y": 38.27
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.9139,
      "ret1w": -0.46,
      "ret1m": 1.07,
      "ret3m": 0.8,
      "ret6m": -13.23,
      "ret1y": -9.07,
      "ret2y": 10.18,
      "ret3y": 57.95
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4143,
      "ret1w": 0.63,
      "ret1m": 5.8,
      "ret3m": 5.7,
      "ret6m": 6.15,
      "ret1y": 22.29,
      "ret2y": 28.63,
      "ret3y": 84.52
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9395,
      "ret1w": 0.25,
      "ret1m": 0.26,
      "ret3m": 0.17,
      "ret6m": -0.6,
      "ret1y": -2.87,
      "ret2y": -3.14,
      "ret3y": -1.43
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7508,
      "ret1w": 1.24,
      "ret1m": 4.9,
      "ret3m": 0.75,
      "ret6m": -1.94,
      "ret1y": 30.44,
      "ret2y": 60.78,
      "ret3y": 106.69
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.655,
      "ret1w": 0.32,
      "ret1m": 0.54,
      "ret3m": 1.44,
      "ret6m": 0.19,
      "ret1y": 3.88,
      "ret2y": 7.38,
      "ret3y": 26.56
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.27,
      "ret1w": 0.63,
      "ret1m": 6.1,
      "ret3m": 4.79,
      "ret6m": -2.53,
      "ret1y": -4.87,
      "ret2y": -12.83,
      "ret3y": 119.72
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.986,
      "ret1w": 1.54,
      "ret1m": 8.23,
      "ret3m": 2.49,
      "ret6m": -5.83,
      "ret1y": -10.69,
      "ret2y": -16.37,
      "ret3y": 52.87
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9091,
      "ret1w": 1.42,
      "ret1m": 3.77,
      "ret3m": 0.91,
      "ret6m": -4.37,
      "ret1y": 36.43,
      "ret2y": 85.39,
      "ret3y": 146.53
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5378,
      "ret1w": -0.95,
      "ret1m": 3.17,
      "ret3m": 9.38,
      "ret6m": -2.49,
      "ret1y": 1.11,
      "ret2y": 38.34,
      "ret3y": 51.42
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7062,
      "ret1w": 0.89,
      "ret1m": 1.6,
      "ret3m": 2.71,
      "ret6m": 1.16,
      "ret1y": 7.29,
      "ret2y": 28.21,
      "ret3y": 56.94
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.319,
      "ret1w": 0.75,
      "ret1m": 2.25,
      "ret3m": 3.34,
      "ret6m": -2.08,
      "ret1y": 3.67,
      "ret2y": 18.43,
      "ret3y": 42.83
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.328,
      "ret1w": 1.14,
      "ret1m": 0.45,
      "ret3m": 0.0,
      "ret6m": 0.91,
      "ret1y": 1.92,
      "ret2y": 7.36,
      "ret3y": -3.21
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.087,
      "ret1w": -1.28,
      "ret1m": 2.4,
      "ret3m": 7.86,
      "ret6m": -7.94,
      "ret1y": -15.09,
      "ret2y": 19.87,
      "ret3y": 55.99
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0106,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.22,
      "ret6m": 0.56,
      "ret1y": 1.45,
      "ret2y": 1.88,
      "ret3y": 3.58
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0094,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.22,
      "ret6m": 0.54,
      "ret1y": 1.45,
      "ret2y": 1.94,
      "ret3y": 3.76
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.471,
      "ret1w": 0.2,
      "ret1m": 0.07,
      "ret3m": -3.92,
      "ret6m": -6.01,
      "ret1y": 2.37,
      "ret2y": 15.1,
      "ret3y": 40.77
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.94,
      "ret1w": 0.72,
      "ret1m": 0.72,
      "ret3m": -2.68,
      "ret6m": -4.98,
      "ret1y": 4.29,
      "ret2y": 28.78,
      "ret3y": 70.24
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6755,
      "ret1w": 1.39,
      "ret1m": -2.85,
      "ret3m": 4.4,
      "ret6m": -7.79,
      "ret1y": -9.01,
      "ret2y": 39.29,
      "ret3y": 70.97
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1609,
      "ret1w": 0.14,
      "ret1m": -0.15,
      "ret3m": -1.84,
      "ret6m": -2.07,
      "ret1y": 4.67,
      "ret2y": 18.18,
      "ret3y": 46.1
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2223,
      "ret1w": 0.14,
      "ret1m": -0.14,
      "ret3m": -1.8,
      "ret6m": -1.97,
      "ret1y": 4.88,
      "ret2y": 18.66,
      "ret3y": 47.27
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0599,
      "ret1w": 0.26,
      "ret1m": 0.08,
      "ret3m": -3.29,
      "ret6m": -6.96,
      "ret1y": -3.0,
      "ret2y": 23.85,
      "ret3y": 69.76
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8192,
      "ret1w": 0.04,
      "ret1m": -0.55,
      "ret3m": -2.35,
      "ret6m": -4.07,
      "ret1y": 0.92,
      "ret2y": 12.46,
      "ret3y": 42.46
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5946,
      "ret1w": 0.0,
      "ret1m": -0.42,
      "ret3m": 1.35,
      "ret6m": -6.11,
      "ret1y": -4.22,
      "ret2y": 19.11,
      "ret3y": 55.69
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.064,
      "ret1w": 0.63,
      "ret1m": 0.02,
      "ret3m": -7.65,
      "ret6m": -3.65,
      "ret1y": 13.5,
      "ret2y": 37.66,
      "ret3y": 87.08
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1562,
      "ret1w": -0.44,
      "ret1m": -0.69,
      "ret3m": 3.29,
      "ret6m": -1.86,
      "ret1y": -1.05,
      "ret2y": 6.95,
      "ret3y": 31.08
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5193,
      "ret1w": -0.3,
      "ret1m": -0.37,
      "ret3m": 3.2,
      "ret6m": 3.35,
      "ret1y": 1.86,
      "ret2y": 12.53,
      "ret3y": 32.82
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5134,
      "ret1w": 1.03,
      "ret1m": 2.11,
      "ret3m": 2.29,
      "ret6m": 1.43,
      "ret1y": 18.07,
      "ret2y": 17.52,
      "ret3y": 44.45
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8621,
      "ret1w": 0.38,
      "ret1m": 0.57,
      "ret3m": -3.52,
      "ret6m": -6.27,
      "ret1y": 7.44,
      "ret2y": 25.41,
      "ret3y": 66.02
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.2071,
      "ret1w": 1.15,
      "ret1m": 3.03,
      "ret3m": -6.34,
      "ret6m": -6.56,
      "ret1y": 0.62,
      "ret2y": 22.84,
      "ret3y": 54.94
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2087,
      "ret1w": 1.15,
      "ret1m": 3.01,
      "ret3m": -6.35,
      "ret6m": -6.59,
      "ret1y": 0.61,
      "ret2y": 21.98,
      "ret3y": 54.41
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4216,
      "ret1w": -0.76,
      "ret1m": 1.41,
      "ret3m": -2.96,
      "ret6m": -11.54,
      "ret1y": -4.19,
      "ret2y": 8.93,
      "ret3y": 41.28
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4538,
      "ret1w": -0.76,
      "ret1m": 1.42,
      "ret3m": -2.93,
      "ret6m": -11.46,
      "ret1y": -4.0,
      "ret2y": 9.37,
      "ret3y": 42.42
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0589,
      "ret1w": -1.16,
      "ret1m": 2.4,
      "ret3m": -11.64,
      "ret6m": -11.79,
      "ret1y": 1.09,
      "ret2y": 19.99,
      "ret3y": 64.84
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1673,
      "ret1w": 0.0,
      "ret1m": -0.32,
      "ret3m": -0.05,
      "ret6m": -0.23,
      "ret1y": -0.36,
      "ret2y": 2.16,
      "ret3y": 7.82
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.187,
      "ret1w": 0.0,
      "ret1m": -0.31,
      "ret3m": -0.03,
      "ret6m": -0.16,
      "ret1y": -0.21,
      "ret2y": 2.47,
      "ret3y": 8.47
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0839,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.18,
      "ret6m": 0.39,
      "ret1y": 0.91,
      "ret2y": 1.73,
      "ret3y": 3.32
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4101,
      "ret1w": -0.02,
      "ret1m": -0.06,
      "ret3m": 0.04,
      "ret6m": 0.06,
      "ret1y": 0.12,
      "ret2y": 0.64,
      "ret3y": 10.82
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4621,
      "ret1w": -0.01,
      "ret1m": -0.05,
      "ret3m": 0.08,
      "ret6m": 0.17,
      "ret1y": 0.32,
      "ret2y": 1.06,
      "ret3y": 11.71
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1379,
      "ret1w": 0.31,
      "ret1m": -0.68,
      "ret3m": -1.38,
      "ret6m": 8.85,
      "ret1y": 11.59,
      "ret2y": 29.15,
      "ret3y": 68.27
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.243,
      "ret1w": 0.03,
      "ret1m": -2.07,
      "ret3m": -0.58,
      "ret6m": 1.44,
      "ret1y": 3.0,
      "ret2y": 12.79,
      "ret3y": 50.27
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 4.4847,
      "price": 4.4847,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 4.2765,
      "price": 4.2765,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.53,
      "nav": 5.5859,
      "price": 5.5859,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.03,
      "nav": 0.7063,
      "price": 0.7063,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.2533,
      "price": 2.2533,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.7457,
      "price": 2.7457,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 5.4958,
      "price": 5.4958,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 1.92,
      "price": 1.92,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.3768,
      "price": 1.3768,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 3.595,
      "price": 3.595,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.11,
      "nav": 1.141,
      "price": 1.141,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 2.499,
      "price": 2.499,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.8213,
      "price": 1.8213,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.02,
      "nav": 1.9337,
      "price": 1.9337,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 1.6773,
      "price": 1.6773,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 2.4815,
      "price": 2.4815,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.5281,
      "price": 2.5281,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.099,
      "price": 1.099,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.3158,
      "price": 2.3158,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 1.3244,
      "price": 1.3244,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 1.74,
      "sharpe": 0.24,
      "calmar": 0.24
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 0.2,
      "sharpe": 2.08,
      "calmar": 2.08
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 15.87,
      "sharpe": 2.61,
      "calmar": 2.61
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.87,
      "sharpe": -1.98,
      "calmar": -1.98
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 3.31,
      "sharpe": -3.41,
      "calmar": -3.41
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.97,
      "sharpe": -3.98,
      "calmar": -3.98
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.33,
      "sharpe": -1.16,
      "calmar": -1.16
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.78,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 0.63,
      "sharpe": 0.36,
      "calmar": 0.36
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 2.21,
      "sharpe": 6.24,
      "calmar": 6.24
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.22,
      "sharpe": -0.96,
      "calmar": -0.96
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.2,
      "sharpe": -1.61,
      "calmar": -1.61
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 0.69,
      "sharpe": -8.36,
      "calmar": -8.36
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.6,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.78,
      "sharpe": -0.31,
      "calmar": -0.31
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.38,
      "sharpe": 4.17,
      "calmar": 4.17
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.17,
      "sharpe": -2.13,
      "calmar": -2.13
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.27,
      "sharpe": 1.68,
      "calmar": 1.68
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.68,
      "sharpe": -1.53,
      "calmar": -1.53
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.24,
      "sharpe": 0.33,
      "calmar": 0.33
    }
  ],
  "news": [
    {
      "title": "紫金黄金国际(02259)发布截至2026年6月30日止6个月中期业绩，该集团取得收入39.87亿美元，同比增加99.67%;母公司拥有人应占溢利14.51亿美元，同比增加178.83%;每股盈利0.54美元；拟派中期股息每股1.5港元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:45",
      "impact": "neutral"
    },
    {
      "title": "中信证券研报称，2026年8月10日，恒生指数公司就恒生科技指数的编算方法修订方案征询市场意见。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:43",
      "impact": "neutral"
    },
    {
      "title": "中石化炼化工程(02386)发布截至2026年6月30日止6个月中期业绩，该集团取得收入人民币356.24亿元(单位下同)，同比增加12.7%;本公司权益持有人应占利润11.37亿元，同比减少18%;基本每股盈利0.26元;拟派中期股息每股0.127元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:29",
      "impact": "neutral"
    },
    {
      "title": "8月16日，兆威机电公告，2026年上半年营业收入8.16亿元，同比增长3.80%；净利润7464.57万元，上年同期净利润1.13亿元，同比减少34.10%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:27",
      "impact": "neutral"
    },
    {
      "title": "据灯塔专业版实时数据，截至8月16日18时9分，影片《八仙！》票房突破16亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:14",
      "impact": "neutral"
    },
    {
      "title": "|2026年8月17日星期一|NO.1央行：7月末人民币各项贷款余额282.29万亿元，同比增长5.1%8月14日，人民银行披露的7月金融统计数据显示，7月末，广义货币（M2）余额355.51万亿元，同比增长7.7%；社会融资规模存量463.27万亿元，同比增长7.4%。1月~7月，社会融资规模增量为22.25万亿元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:07",
      "impact": "neutral"
    },
    {
      "title": "8月16日，纳指ETF广发公告称，近期该基金二级市场交易价格明显高于基金份额参考净值，出现较大幅度溢价，8月14日收盘价为1.699元，收盘时基金份额参考净值为1.5248元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:34",
      "impact": "neutral"
    },
    {
      "title": "8月16日，纳指ETF嘉实公告称，近期该基金二级市场交易价格明显高于基金份额参考净值，出现较大幅度溢价，8月14日收盘价为2.121元，收盘时基金份额参考净值为1.9122元。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:26",
      "impact": "neutral"
    },
    {
      "title": "下周，70城房价数据、社零数据等多个重要数据将发布，最新一期LPR将公布，A股年内最贵新股频准激光将上市，兆易创新、天孚通信、恒瑞医药、中微公司、科大讯飞等多家A股龙头公司将发布2026年上半年业绩。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:26",
      "impact": "neutral"
    },
    {
      "title": "截至发稿，今日有4家钢厂上调废钢采购价，价格在10-20元不等。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:09",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 50,
    "label": "中性",
    "upDownRatio": "3,253/1,373",
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
