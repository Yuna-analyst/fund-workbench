// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-09-29 16:28:23
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-09-29 16:28 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-09-29",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3830.45,
      "change": 6.83,
      "changePct": "+0.18%",
      "high": 3843.84,
      "low": 3810.81,
      "volume": 399473391.0,
      "amount": 661704290000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 12901.95,
      "change": 43.2,
      "changePct": "+0.34%",
      "high": 12955.25,
      "low": 12831.87,
      "volume": 482698062.0,
      "amount": 747493240000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3142.56,
      "change": 2.74,
      "changePct": "+0.09%",
      "high": 3158.91,
      "low": 3128.48,
      "volume": 129058909.0,
      "amount": 356509840000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1569.34,
      "change": 13.36,
      "changePct": "+0.86%",
      "high": 1576.55,
      "low": 1548.74,
      "volume": 7516951.0,
      "amount": 64529950000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4345.21,
      "change": 4.45,
      "changePct": "+0.10%",
      "high": 4359.3,
      "low": 4324.53,
      "volume": 148129466.0,
      "amount": 334950790000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7439.63,
      "change": 37.33,
      "changePct": "+0.50%",
      "high": 7473.7,
      "low": 7386.14,
      "volume": 117433822.0,
      "amount": 243769370000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.41万亿",
      "label": "成交额",
      "rawAmount": 2408957480000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,276/1,362",
      "label": "涨/跌家数",
      "rawUp": 3276,
      "rawDown": 1362,
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
    "totalInflow": 25.45,
    "totalOutflow": 0,
    "netFlow": 25.45,
    "netFlowTrend": [
      5.09,
      10.18,
      15.27,
      20.36,
      25.45
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
      "inflow": 8.14,
      "pct": 0.32
    },
    {
      "name": "半导体",
      "inflow": 3.38,
      "pct": 0.51
    },
    {
      "name": "银行",
      "inflow": 2.52,
      "pct": 0.72
    },
    {
      "name": "芯片",
      "inflow": 2.46,
      "pct": 0.83
    },
    {
      "name": "地产",
      "inflow": 2.42,
      "pct": 4.43
    },
    {
      "name": "5G",
      "inflow": 2.25,
      "pct": 0.93
    },
    {
      "name": "有色",
      "inflow": 2.01,
      "pct": 1.63
    },
    {
      "name": "医药",
      "inflow": 0.97,
      "pct": 0.27
    },
    {
      "name": "传媒",
      "inflow": 0.81,
      "pct": 1.66
    },
    {
      "name": "新能源车",
      "inflow": 0.49,
      "pct": 0.84
    },
    {
      "name": "云计算",
      "inflow": 0.48,
      "pct": 0.57
    },
    {
      "name": "军工",
      "inflow": 0.48,
      "pct": 0.36
    },
    {
      "name": "新能源",
      "inflow": 0.31,
      "pct": 1.0
    },
    {
      "name": "游戏",
      "inflow": 0.2,
      "pct": 0.98
    },
    {
      "name": "农业",
      "inflow": 0.2,
      "pct": 0.28
    },
    {
      "name": "电子",
      "inflow": 0.15,
      "pct": 0.63
    },
    {
      "name": "钢铁",
      "inflow": 0.14,
      "pct": 0.82
    },
    {
      "name": "家电",
      "inflow": 0.11,
      "pct": 0.29
    },
    {
      "name": "计算机",
      "inflow": 0.06,
      "pct": 0.46
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.72
    }
  ],
  "sectors": [
    {
      "name": "地产",
      "code": "512200",
      "price": 1.297,
      "changePct": 4.43,
      "change": 0.055,
      "turnover": 8.06
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.795,
      "changePct": 1.66,
      "change": 0.013,
      "turnover": 2.69
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.619,
      "changePct": 1.63,
      "change": 0.026,
      "turnover": 6.71
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.224,
      "changePct": 1.0,
      "change": 0.022,
      "turnover": 1.03
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.034,
      "changePct": 0.98,
      "change": 0.01,
      "turnover": 0.67
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.976,
      "changePct": 0.93,
      "change": 0.009,
      "turnover": 7.49
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.445,
      "changePct": 0.84,
      "change": 0.012,
      "turnover": 1.64
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.088,
      "changePct": 0.83,
      "change": 0.009,
      "turnover": 8.19
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.113,
      "changePct": 0.82,
      "change": 0.009,
      "turnover": 0.45
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.841,
      "changePct": 0.72,
      "change": 0.006,
      "turnover": 8.4
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.982,
      "changePct": 0.72,
      "change": 0.007,
      "turnover": 0.06
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.793,
      "changePct": 0.63,
      "change": 0.005,
      "turnover": 0.5
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.579,
      "changePct": 0.57,
      "change": 0.009,
      "turnover": 1.61
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.985,
      "changePct": 0.51,
      "change": 0.005,
      "turnover": 11.25
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.091,
      "changePct": 0.46,
      "change": 0.005,
      "turnover": 0.21
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.102,
      "changePct": 0.36,
      "change": 0.004,
      "turnover": 1.59
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.629,
      "changePct": 0.32,
      "change": 0.002,
      "turnover": 27.14
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.396,
      "changePct": 0.29,
      "change": 0.004,
      "turnover": 0.38
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.713,
      "changePct": 0.28,
      "change": 0.002,
      "turnover": 0.66
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.27,
      "change": 0.001,
      "turnover": 3.25
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.491,
      "changePct": 0.2,
      "change": 0.001,
      "turnover": 6.46
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.772,
      "changePct": 0.13,
      "change": 0.001,
      "turnover": 1.02
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.966,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 1.16
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.844,
      "changePct": -0.12,
      "change": -0.001,
      "turnover": 6.87
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.482,
      "changePct": -0.21,
      "change": -0.001,
      "turnover": 0.13
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.405,
      "changePct": -0.25,
      "change": -0.001,
      "turnover": 2.27
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.339,
      "changePct": -0.29,
      "change": -0.001,
      "turnover": 3.98
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.245,
      "changePct": -1.5,
      "change": -0.019,
      "turnover": 5.45
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.657,
      "changePct": 0.85,
      "amount": 60.22,
      "netFlow": 15.05
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.476,
      "changePct": 0.48,
      "amount": 18.93,
      "netFlow": 4.73
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.985,
      "changePct": 0.51,
      "amount": 11.25,
      "netFlow": 2.81
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.292,
      "changePct": 0.09,
      "amount": 7.13,
      "netFlow": 1.78
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.491,
      "changePct": 0.2,
      "amount": 6.46,
      "netFlow": 1.62
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.615,
      "changePct": 0.13,
      "amount": 5.02,
      "netFlow": 1.25
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.27,
      "amount": 3.25,
      "netFlow": 0.81
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.224,
      "changePct": 1.0,
      "amount": 1.03,
      "netFlow": 0.26
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.922,
      "changePct": 0.0,
      "amount": 15.53,
      "netFlow": -3.88
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.416,
      "changePct": -0.02,
      "amount": 20.67,
      "netFlow": -5.17
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.416,
      "changePct": -0.02,
      "amount": 20.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.922,
      "changePct": 0.0,
      "amount": 15.53,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.476,
      "changePct": 0.48,
      "amount": 18.93,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.615,
      "changePct": 0.13,
      "amount": 5.02,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.292,
      "changePct": 0.09,
      "amount": 7.13,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "地产",
      "turnover": 8.06,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 2.69,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 6.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.67,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 7.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.64,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 8.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 8.4,
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
      "name": "电子",
      "turnover": 0.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.61,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.25,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "计算机",
      "turnover": 0.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 1.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 27.14,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.25,
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
      "nav": 4.4829,
      "ret1w": 0.29,
      "ret1m": -5.51,
      "ret3m": -1.25,
      "ret6m": -9.53,
      "ret1y": 11.38,
      "ret2y": 13.81,
      "ret3y": 138.08
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.883,
      "ret1w": 0.66,
      "ret1m": -8.03,
      "ret3m": -7.6,
      "ret6m": -21.85,
      "ret1y": -1.08,
      "ret2y": -9.37,
      "ret3y": 45.28
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.6926,
      "ret1w": 2.03,
      "ret1m": -7.26,
      "ret3m": -1.45,
      "ret6m": -14.43,
      "ret1y": 38.21,
      "ret2y": 68.22,
      "ret3y": 248.02
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6901,
      "ret1w": -0.32,
      "ret1m": -1.06,
      "ret3m": -3.9,
      "ret6m": 6.14,
      "ret1y": -6.47,
      "ret2y": -16.03,
      "ret3y": -4.67
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.951,
      "ret1w": 0.79,
      "ret1m": -3.35,
      "ret3m": -10.24,
      "ret6m": -15.53,
      "ret1y": -32.97,
      "ret2y": -31.91,
      "ret3y": -5.81
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6473,
      "ret1w": 0.35,
      "ret1m": -2.63,
      "ret3m": -4.84,
      "ret6m": -4.88,
      "ret1y": -23.92,
      "ret2y": -20.35,
      "ret3y": 17.96
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2374,
      "ret1w": 0.2,
      "ret1m": -2.66,
      "ret3m": -6.06,
      "ret6m": 2.9,
      "ret1y": -6.42,
      "ret2y": 3.27,
      "ret3y": 33.96
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.904,
      "ret1w": 0.79,
      "ret1m": -3.94,
      "ret3m": 0.05,
      "ret6m": -11.24,
      "ret1y": 0.95,
      "ret2y": 2.64,
      "ret3y": 61.36
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2949,
      "ret1w": 0.12,
      "ret1m": -5.13,
      "ret3m": -4.09,
      "ret6m": -13.05,
      "ret1y": -0.23,
      "ret2y": 2.08,
      "ret3y": 27.84
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.231,
      "ret1w": 0.53,
      "ret1m": -6.99,
      "ret3m": -5.99,
      "ret6m": -25.07,
      "ret1y": 25.38,
      "ret2y": 44.56,
      "ret3y": 236.21
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.078,
      "ret1w": -0.28,
      "ret1m": -2.36,
      "ret3m": -3.58,
      "ret6m": 6.94,
      "ret1y": -5.52,
      "ret2y": -16.43,
      "ret3y": -13.48
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.406,
      "ret1w": -0.21,
      "ret1m": -2.23,
      "ret3m": 1.65,
      "ret6m": 6.41,
      "ret1y": -9.0,
      "ret2y": -8.93,
      "ret3y": 24.28
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.6428,
      "ret1w": -0.02,
      "ret1m": -7.66,
      "ret3m": -7.08,
      "ret6m": -33.86,
      "ret1y": -48.43,
      "ret2y": -44.25,
      "ret3y": 9.43
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8609,
      "ret1w": 0.08,
      "ret1m": -2.41,
      "ret3m": -4.19,
      "ret6m": -0.43,
      "ret1y": 4.62,
      "ret2y": -7.78,
      "ret3y": -5.02
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6359,
      "ret1w": 0.74,
      "ret1m": -4.01,
      "ret3m": -1.81,
      "ret6m": -8.44,
      "ret1y": 0.47,
      "ret2y": 6.75,
      "ret3y": 57.62
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.2406,
      "ret1w": 0.98,
      "ret1m": -8.94,
      "ret3m": -5.92,
      "ret6m": -34.5,
      "ret1y": 17.84,
      "ret2y": 62.34,
      "ret3y": 188.03
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.608,
      "ret1w": 1.29,
      "ret1m": 0.16,
      "ret3m": 1.82,
      "ret6m": 10.25,
      "ret1y": -1.56,
      "ret2y": -2.89,
      "ret3y": 9.93
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.01,
      "ret1w": 0.4,
      "ret1m": -4.54,
      "ret3m": -2.51,
      "ret6m": 1.61,
      "ret1y": 3.7,
      "ret2y": -13.75,
      "ret3y": -2.6
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2566,
      "ret1w": -0.06,
      "ret1m": -1.03,
      "ret3m": -4.15,
      "ret6m": 3.38,
      "ret1y": -7.09,
      "ret2y": 1.73,
      "ret3y": 5.35
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2982,
      "ret1w": 0.92,
      "ret1m": -3.76,
      "ret3m": -2.94,
      "ret6m": 0.84,
      "ret1y": 5.55,
      "ret2y": 14.55,
      "ret3y": 66.93
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.1852,
      "ret1w": 0.07,
      "ret1m": -6.18,
      "ret3m": -7.74,
      "ret6m": -20.16,
      "ret1y": -5.93,
      "ret2y": 0.94,
      "ret3y": 34.65
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.2612,
      "ret1w": 0.08,
      "ret1m": -6.17,
      "ret3m": -7.7,
      "ret6m": -20.07,
      "ret1y": -5.75,
      "ret2y": 1.33,
      "ret3y": 35.73
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0669,
      "ret1w": 0.08,
      "ret1m": -1.21,
      "ret3m": -2.27,
      "ret6m": -4.12,
      "ret1y": -0.37,
      "ret2y": -0.07,
      "ret3y": 5.35
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.041,
      "ret1w": 0.1,
      "ret1m": -1.2,
      "ret3m": -2.22,
      "ret6m": -3.98,
      "ret1y": -0.07,
      "ret2y": 0.54,
      "ret3y": 6.63
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6966,
      "ret1w": 0.07,
      "ret1m": -1.71,
      "ret3m": -3.73,
      "ret6m": -4.16,
      "ret1y": -9.61,
      "ret2y": -14.59,
      "ret3y": -2.38
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7145,
      "ret1w": 0.08,
      "ret1m": -1.69,
      "ret3m": -3.69,
      "ret6m": -4.04,
      "ret1y": -9.38,
      "ret2y": -14.16,
      "ret3y": -1.39
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.686,
      "ret1w": 0.57,
      "ret1m": -7.56,
      "ret3m": -5.06,
      "ret6m": -21.13,
      "ret1y": 30.61,
      "ret2y": 42.8,
      "ret3y": 140.38
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4389,
      "ret1w": -0.06,
      "ret1m": -3.79,
      "ret3m": -4.6,
      "ret6m": -10.45,
      "ret1y": 5.74,
      "ret2y": 8.84,
      "ret3y": 68.93
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7083,
      "ret1w": -0.31,
      "ret1m": -3.29,
      "ret3m": -4.32,
      "ret6m": -14.2,
      "ret1y": -15.41,
      "ret2y": -13.05,
      "ret3y": 2.05
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.1378,
      "ret1w": -0.24,
      "ret1m": -4.47,
      "ret3m": -1.26,
      "ret6m": -16.37,
      "ret1y": 24.11,
      "ret2y": 27.27,
      "ret3y": 127.36
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4986,
      "ret1w": 0.34,
      "ret1m": -2.79,
      "ret3m": -1.89,
      "ret6m": -22.82,
      "ret1y": 0.95,
      "ret2y": 5.86,
      "ret3y": 39.78
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5083,
      "ret1w": 0.34,
      "ret1m": -2.79,
      "ret3m": -1.85,
      "ret6m": -22.74,
      "ret1y": 1.15,
      "ret2y": 6.29,
      "ret3y": 40.92
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2645,
      "ret1w": -0.1,
      "ret1m": -0.42,
      "ret3m": -1.73,
      "ret6m": 1.7,
      "ret1y": -2.17,
      "ret2y": -1.63,
      "ret3y": 0.2
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1004,
      "ret1w": -0.05,
      "ret1m": -1.74,
      "ret3m": -3.3,
      "ret6m": -2.25,
      "ret1y": -4.29,
      "ret2y": -3.88,
      "ret3y": 9.78
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3156,
      "ret1w": -0.14,
      "ret1m": -5.95,
      "ret3m": -7.5,
      "ret6m": -20.39,
      "ret1y": -4.22,
      "ret2y": -24.26,
      "ret3y": -0.54
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9171,
      "ret1w": -0.21,
      "ret1m": -3.83,
      "ret3m": -3.95,
      "ret6m": 0.42,
      "ret1y": -7.9,
      "ret2y": 3.76,
      "ret3y": 35.21
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.19,
      "ret1w": 1.14,
      "ret1m": -7.08,
      "ret3m": -4.49,
      "ret6m": -32.9,
      "ret1y": 20.88,
      "ret2y": 47.34,
      "ret3y": 171.03
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5002,
      "ret1w": 0.17,
      "ret1m": 0.27,
      "ret3m": 1.13,
      "ret6m": 8.0,
      "ret1y": -0.04,
      "ret2y": 1.41,
      "ret3y": 0.46
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5848,
      "ret1w": -0.63,
      "ret1m": -5.08,
      "ret3m": -6.92,
      "ret6m": -29.63,
      "ret1y": -5.62,
      "ret2y": -4.37,
      "ret3y": 28.11
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 13.806,
      "ret1w": 1.17,
      "ret1m": -8.61,
      "ret3m": -3.56,
      "ret6m": -25.25,
      "ret1y": 55.3,
      "ret2y": 91.72,
      "ret3y": 307.14
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.061,
      "ret1w": 0.01,
      "ret1m": -0.66,
      "ret3m": -0.56,
      "ret6m": -2.29,
      "ret1y": -0.08,
      "ret2y": 0.9,
      "ret3y": 3.77
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1095,
      "ret1w": 0.01,
      "ret1m": -0.65,
      "ret3m": -0.55,
      "ret6m": -2.24,
      "ret1y": 0.05,
      "ret2y": 1.18,
      "ret3y": 4.47
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0663,
      "ret1w": 0.03,
      "ret1m": 0.04,
      "ret3m": 0.24,
      "ret6m": 0.39,
      "ret1y": 0.77,
      "ret2y": 1.7,
      "ret3y": 2.94
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.077,
      "ret1w": 0.02,
      "ret1m": 0.02,
      "ret3m": 0.11,
      "ret6m": 0.33,
      "ret1y": 0.72,
      "ret2y": 1.57,
      "ret3y": 3.01
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0917,
      "ret1w": 0.02,
      "ret1m": 0.03,
      "ret3m": 0.14,
      "ret6m": 0.4,
      "ret1y": 0.88,
      "ret2y": 1.88,
      "ret3y": 3.68
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0525,
      "ret1w": 0.24,
      "ret1m": -1.84,
      "ret3m": -1.5,
      "ret6m": -5.24,
      "ret1y": 1.14,
      "ret2y": 4.4,
      "ret3y": 9.81
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2129,
      "ret1w": 0.31,
      "ret1m": -1.6,
      "ret3m": -0.76,
      "ret6m": -4.65,
      "ret1y": 1.12,
      "ret2y": 2.38,
      "ret3y": 4.94
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0594,
      "ret1w": 0.24,
      "ret1m": -1.83,
      "ret3m": -1.47,
      "ret6m": -5.15,
      "ret1y": 1.34,
      "ret2y": 4.82,
      "ret3y": 10.69
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0477,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.22,
      "ret6m": 0.43,
      "ret1y": 0.9,
      "ret2y": 1.86,
      "ret3y": 3.66
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1628,
      "ret1w": 0.28,
      "ret1m": -1.3,
      "ret3m": -0.77,
      "ret6m": -3.6,
      "ret1y": -2.99,
      "ret2y": -1.61,
      "ret3y": 7.45
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2021,
      "ret1w": 0.01,
      "ret1m": -0.58,
      "ret3m": -1.31,
      "ret6m": -1.9,
      "ret1y": -0.78,
      "ret2y": 0.87,
      "ret3y": 11.76
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1326,
      "ret1w": 0.07,
      "ret1m": -0.67,
      "ret3m": -0.71,
      "ret6m": -3.11,
      "ret1y": 1.17,
      "ret2y": 2.04,
      "ret3y": 8.91
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.204,
      "ret1w": 0.07,
      "ret1m": -0.66,
      "ret3m": -0.67,
      "ret6m": -3.0,
      "ret1y": 1.37,
      "ret2y": 2.45,
      "ret3y": 9.82
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "债券型",
      "nav": 1.1622,
      "ret1w": 0.05,
      "ret1m": -0.22,
      "ret3m": -0.43,
      "ret6m": -0.45,
      "ret1y": 0.2,
      "ret2y": 1.45,
      "ret3y": 6.91
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "债券型",
      "nav": 1.1823,
      "ret1w": 0.05,
      "ret1m": -0.22,
      "ret3m": -0.4,
      "ret6m": -0.38,
      "ret1y": 0.35,
      "ret2y": 1.76,
      "ret3y": 7.56
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.477,
      "ret1w": -1.12,
      "ret1m": -0.4,
      "ret3m": 6.08,
      "ret6m": -9.03,
      "ret1y": 50.76,
      "ret2y": 89.95,
      "ret3y": 151.47
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0062,
      "ret1w": -0.31,
      "ret1m": -0.55,
      "ret3m": 0.66,
      "ret6m": 4.89,
      "ret1y": 15.76,
      "ret2y": 7.81,
      "ret3y": 31.19
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7832,
      "ret1w": -1.27,
      "ret1m": -3.65,
      "ret3m": -4.84,
      "ret6m": -14.59,
      "ret1y": -8.97,
      "ret2y": -5.42,
      "ret3y": 29.14
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.48,
      "ret1w": -1.43,
      "ret1m": -0.82,
      "ret3m": 3.45,
      "ret6m": 6.14,
      "ret1y": 37.4,
      "ret2y": 25.97,
      "ret3y": 77.24
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9141,
      "ret1w": -0.24,
      "ret1m": -1.21,
      "ret3m": -2.42,
      "ret6m": -3.62,
      "ret1y": -3.97,
      "ret2y": -6.08,
      "ret3y": -2.96
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.7027,
      "ret1w": -1.12,
      "ret1m": -0.96,
      "ret3m": 3.18,
      "ret6m": -8.0,
      "ret1y": 37.89,
      "ret2y": 46.51,
      "ret3y": 97.94
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.55,
      "ret1w": 0.0,
      "ret1m": -1.24,
      "ret3m": -2.09,
      "ret6m": -0.31,
      "ret1y": 9.98,
      "ret2y": 4.81,
      "ret3y": 20.34
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.179,
      "ret1w": -2.4,
      "ret1m": -5.98,
      "ret3m": -7.53,
      "ret6m": 11.97,
      "ret1y": -13.05,
      "ret2y": -20.39,
      "ret3y": 83.64
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.938,
      "ret1w": -2.6,
      "ret1m": -4.48,
      "ret3m": -4.58,
      "ret6m": 0.75,
      "ret1y": -12.34,
      "ret2y": -24.11,
      "ret3y": 12.2
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9135,
      "ret1w": -2.02,
      "ret1m": -0.71,
      "ret3m": 1.83,
      "ret6m": -7.2,
      "ret1y": 43.0,
      "ret2y": 74.15,
      "ret3y": 140.88
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5441,
      "ret1w": -1.56,
      "ret1m": -2.59,
      "ret3m": -5.0,
      "ret6m": 11.78,
      "ret1y": 0.31,
      "ret2y": 24.83,
      "ret3y": 47.96
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7381,
      "ret1w": -1.35,
      "ret1m": -1.4,
      "ret3m": 0.83,
      "ret6m": 1.92,
      "ret1y": 18.42,
      "ret2y": 26.69,
      "ret3y": 51.15
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2978,
      "ret1w": -1.13,
      "ret1m": -1.51,
      "ret3m": -2.84,
      "ret6m": -1.61,
      "ret1y": 9.88,
      "ret2y": 12.64,
      "ret3y": 28.62
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.227,
      "ret1w": -0.65,
      "ret1m": -2.39,
      "ret3m": -6.12,
      "ret6m": -8.98,
      "ret1y": 1.66,
      "ret2y": -1.92,
      "ret3y": -13.34
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.965,
      "ret1w": -3.2,
      "ret1m": -5.07,
      "ret3m": -8.69,
      "ret6m": -0.41,
      "ret1y": -11.25,
      "ret2y": 1.55,
      "ret3y": 40.55
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0138,
      "ret1w": 0.06,
      "ret1m": 0.12,
      "ret3m": 0.34,
      "ret6m": 0.5,
      "ret1y": 1.52,
      "ret2y": 2.5,
      "ret3y": 3.78
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0129,
      "ret1w": 0.06,
      "ret1m": 0.13,
      "ret3m": 0.36,
      "ret6m": 0.49,
      "ret1y": 1.54,
      "ret2y": 2.57,
      "ret3y": 3.94
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.342,
      "ret1w": 0.07,
      "ret1m": -4.69,
      "ret3m": -5.89,
      "ret6m": -15.49,
      "ret1y": -4.35,
      "ret2y": -8.21,
      "ret3y": 16.29
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.657,
      "ret1w": 0.3,
      "ret1m": -5.78,
      "ret3m": -6.97,
      "ret6m": -15.49,
      "ret1y": -3.03,
      "ret2y": -2.53,
      "ret3y": 36.68
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5574,
      "ret1w": 0.49,
      "ret1m": -5.19,
      "ret3m": -11.02,
      "ret6m": -5.35,
      "ret1y": -10.05,
      "ret2y": 11.2,
      "ret3y": 45.14
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0574,
      "ret1w": 0.34,
      "ret1m": -3.7,
      "ret3m": -4.43,
      "ret6m": -9.35,
      "ret1y": 1.15,
      "ret2y": 4.69,
      "ret3y": 27.04
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1169,
      "ret1w": 0.34,
      "ret1m": -3.69,
      "ret3m": -4.39,
      "ret6m": -9.26,
      "ret1y": 1.35,
      "ret2y": 5.11,
      "ret3y": 28.06
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9247,
      "ret1w": 0.49,
      "ret1m": -4.73,
      "ret3m": -5.44,
      "ret6m": -14.91,
      "ret1y": -3.08,
      "ret2y": 1.87,
      "ret3y": 43.08
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7035,
      "ret1w": 0.09,
      "ret1m": -4.14,
      "ret3m": -5.32,
      "ret6m": -10.69,
      "ret1y": -2.34,
      "ret2y": -4.37,
      "ret3y": 19.69
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5352,
      "ret1w": 0.74,
      "ret1m": -2.93,
      "ret3m": -4.16,
      "ret6m": -4.76,
      "ret1y": -5.65,
      "ret2y": 4.49,
      "ret3y": 38.86
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.8355,
      "ret1w": 0.16,
      "ret1m": -6.53,
      "ret3m": -7.41,
      "ret6m": -23.0,
      "ret1y": 3.4,
      "ret2y": -1.21,
      "ret3y": 47.79
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0439,
      "ret1w": -0.22,
      "ret1m": -3.16,
      "ret3m": -6.38,
      "ret6m": 0.42,
      "ret1y": -4.49,
      "ret2y": -6.71,
      "ret3y": 10.62
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4748,
      "ret1w": -0.16,
      "ret1m": -1.53,
      "ret3m": -3.79,
      "ret6m": 1.27,
      "ret1y": 3.79,
      "ret2y": 9.27,
      "ret3y": 24.47
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5173,
      "ret1w": -0.69,
      "ret1m": -0.66,
      "ret3m": 2.22,
      "ret6m": 2.74,
      "ret1y": 25.71,
      "ret2y": 15.04,
      "ret3y": 39.84
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.5788,
      "ret1w": 0.13,
      "ret1m": -5.72,
      "ret3m": -7.45,
      "ret6m": -16.65,
      "ret1y": -3.82,
      "ret2y": -3.72,
      "ret3y": 30.82
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1661,
      "ret1w": -2.11,
      "ret1m": -0.1,
      "ret3m": -0.58,
      "ret6m": -15.16,
      "ret1y": 5.73,
      "ret2y": 3.25,
      "ret3y": 48.95
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1684,
      "ret1w": -2.11,
      "ret1m": -0.09,
      "ret3m": -0.52,
      "ret6m": -15.03,
      "ret1y": 5.81,
      "ret2y": 3.42,
      "ret3y": 48.44
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3518,
      "ret1w": -2.3,
      "ret1m": -4.13,
      "ret3m": -4.3,
      "ret6m": -15.54,
      "ret1y": -4.19,
      "ret2y": -3.8,
      "ret3y": 25.41
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3832,
      "ret1w": -2.29,
      "ret1m": -4.12,
      "ret3m": -4.27,
      "ret6m": -15.45,
      "ret1y": -3.98,
      "ret2y": -3.41,
      "ret3y": 26.44
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9158,
      "ret1w": -3.77,
      "ret1m": -5.84,
      "ret3m": -6.18,
      "ret6m": -26.54,
      "ret1y": -1.32,
      "ret2y": 1.04,
      "ret3y": 43.27
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0866,
      "ret1w": 0.04,
      "ret1m": 0.05,
      "ret3m": 0.27,
      "ret6m": 0.46,
      "ret1y": 0.94,
      "ret2y": 2.01,
      "ret3y": 3.54
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4102,
      "ret1w": 0.03,
      "ret1m": 0.04,
      "ret3m": 0.04,
      "ret6m": 0.11,
      "ret1y": 0.07,
      "ret2y": 0.72,
      "ret3y": 8.1
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4628,
      "ret1w": 0.03,
      "ret1m": 0.04,
      "ret3m": 0.07,
      "ret6m": 0.2,
      "ret1y": 0.27,
      "ret2y": 1.12,
      "ret3y": 8.97
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0726,
      "ret1w": 0.17,
      "ret1m": -2.91,
      "ret3m": -2.43,
      "ret6m": -6.89,
      "ret1y": 11.87,
      "ret2y": 18.78,
      "ret3y": 54.42
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1766,
      "ret1w": -0.04,
      "ret1m": -4.19,
      "ret3m": -6.26,
      "ret6m": -6.87,
      "ret1y": 2.98,
      "ret2y": 3.3,
      "ret3y": 32.68
    },
    {
      "code": "710302",
      "name": "富安达增强收益债券C",
      "type": "FADZQSYZQC",
      "nav": 1.4021,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.28,
      "ret6m": 0.57,
      "ret1y": 1.22,
      "ret2y": 3.49,
      "ret3y": 12.79
    },
    {
      "code": "710301",
      "name": "富安达增强收益债券A",
      "type": "FADZQSYZQA",
      "nav": 1.4846,
      "ret1w": 0.02,
      "ret1m": 0.06,
      "ret3m": 0.29,
      "ret6m": 0.59,
      "ret1y": 1.27,
      "ret2y": 3.59,
      "ret3y": 13.26
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-09-01",
        "nav": 4.5191
      },
      {
        "date": "2026-09-02",
        "nav": 4.497
      },
      {
        "date": "2026-09-03",
        "nav": 4.6317
      },
      {
        "date": "2026-09-04",
        "nav": 4.4762
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-09-01",
        "nav": 4.1608
      },
      {
        "date": "2026-09-02",
        "nav": 4.0892
      },
      {
        "date": "2026-09-03",
        "nav": 4.0877
      },
      {
        "date": "2026-09-04",
        "nav": 4.0311
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-09-01",
        "nav": 5.6426
      },
      {
        "date": "2026-09-02",
        "nav": 5.5226
      },
      {
        "date": "2026-09-03",
        "nav": 5.5893
      },
      {
        "date": "2026-09-04",
        "nav": 5.5255
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-09-01",
        "nav": 0.724
      },
      {
        "date": "2026-09-02",
        "nav": 0.7212
      },
      {
        "date": "2026-09-03",
        "nav": 0.7162
      },
      {
        "date": "2026-09-04",
        "nav": 0.7259
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-09-01",
        "nav": 2.1176
      },
      {
        "date": "2026-09-02",
        "nav": 2.0648
      },
      {
        "date": "2026-09-03",
        "nav": 2.0392
      },
      {
        "date": "2026-09-04",
        "nav": 2.0469
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-09-01",
        "nav": 2.7383
      },
      {
        "date": "2026-09-02",
        "nav": 2.6866
      },
      {
        "date": "2026-09-03",
        "nav": 2.6797
      },
      {
        "date": "2026-09-04",
        "nav": 2.689
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-09-01",
        "nav": 5.5781
      },
      {
        "date": "2026-09-02",
        "nav": 5.4952
      },
      {
        "date": "2026-09-03",
        "nav": 5.5006
      },
      {
        "date": "2026-09-04",
        "nav": 5.5184
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-09-01",
        "nav": 1.916
      },
      {
        "date": "2026-09-02",
        "nav": 1.894
      },
      {
        "date": "2026-09-03",
        "nav": 1.909
      },
      {
        "date": "2026-09-04",
        "nav": 1.884
      },
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
      }
    ],
    "519965": [
      {
        "date": "2026-09-01",
        "nav": 1.3537
      },
      {
        "date": "2026-09-02",
        "nav": 1.3325
      },
      {
        "date": "2026-09-03",
        "nav": 1.341
      },
      {
        "date": "2026-09-04",
        "nav": 1.3255
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-09-01",
        "nav": 3.448
      },
      {
        "date": "2026-09-02",
        "nav": 3.413
      },
      {
        "date": "2026-09-03",
        "nav": 3.41
      },
      {
        "date": "2026-09-04",
        "nav": 3.306
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-09-01",
        "nav": 1.128
      },
      {
        "date": "2026-09-02",
        "nav": 1.119
      },
      {
        "date": "2026-09-03",
        "nav": 1.119
      },
      {
        "date": "2026-09-04",
        "nav": 1.137
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-09-01",
        "nav": 2.382
      },
      {
        "date": "2026-09-02",
        "nav": 2.375
      },
      {
        "date": "2026-09-03",
        "nav": 2.357
      },
      {
        "date": "2026-09-04",
        "nav": 2.361
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-09-01",
        "nav": 1.7245
      },
      {
        "date": "2026-09-02",
        "nav": 1.6917
      },
      {
        "date": "2026-09-03",
        "nav": 1.6787
      },
      {
        "date": "2026-09-04",
        "nav": 1.626
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-09-01",
        "nav": 1.9581
      },
      {
        "date": "2026-09-02",
        "nav": 1.9405
      },
      {
        "date": "2026-09-03",
        "nav": 1.9545
      },
      {
        "date": "2026-09-04",
        "nav": 1.9766
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-09-01",
        "nav": 1.6703
      },
      {
        "date": "2026-09-02",
        "nav": 1.6516
      },
      {
        "date": "2026-09-03",
        "nav": 1.654
      },
      {
        "date": "2026-09-04",
        "nav": 1.6309
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-09-01",
        "nav": 2.3459
      },
      {
        "date": "2026-09-02",
        "nav": 2.3023
      },
      {
        "date": "2026-09-03",
        "nav": 2.3188
      },
      {
        "date": "2026-09-04",
        "nav": 2.2426
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-09-01",
        "nav": 2.5728
      },
      {
        "date": "2026-09-02",
        "nav": 2.551
      },
      {
        "date": "2026-09-03",
        "nav": 2.5666
      },
      {
        "date": "2026-09-04",
        "nav": 2.5892
      },
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
      }
    ],
    "399011": [
      {
        "date": "2026-09-01",
        "nav": 1.016
      },
      {
        "date": "2026-09-02",
        "nav": 1.017
      },
      {
        "date": "2026-09-03",
        "nav": 1.032
      },
      {
        "date": "2026-09-04",
        "nav": 1.021
      },
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
      }
    ],
    "376510": [
      {
        "date": "2026-09-01",
        "nav": 2.3658
      },
      {
        "date": "2026-09-02",
        "nav": 2.3491
      },
      {
        "date": "2026-09-03",
        "nav": 2.3571
      },
      {
        "date": "2026-09-04",
        "nav": 2.3787
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-09-01",
        "nav": 1.3414
      },
      {
        "date": "2026-09-02",
        "nav": 1.3318
      },
      {
        "date": "2026-09-03",
        "nav": 1.3308
      },
      {
        "date": "2026-09-04",
        "nav": 1.3184
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-09-01",
        "nav": 1.2663
      },
      {
        "date": "2026-09-02",
        "nav": 1.2499
      },
      {
        "date": "2026-09-03",
        "nav": 1.2514
      },
      {
        "date": "2026-09-04",
        "nav": 1.2389
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-09-01",
        "nav": 1.347
      },
      {
        "date": "2026-09-02",
        "nav": 1.3296
      },
      {
        "date": "2026-09-03",
        "nav": 1.3311
      },
      {
        "date": "2026-09-04",
        "nav": 1.3179
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-09-01",
        "nav": 1.0899
      },
      {
        "date": "2026-09-02",
        "nav": 1.0834
      },
      {
        "date": "2026-09-03",
        "nav": 1.0848
      },
      {
        "date": "2026-09-04",
        "nav": 1.0848
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-09-01",
        "nav": 1.0629
      },
      {
        "date": "2026-09-02",
        "nav": 1.0566
      },
      {
        "date": "2026-09-03",
        "nav": 1.058
      },
      {
        "date": "2026-09-04",
        "nav": 1.058
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-09-01",
        "nav": 0.7189
      },
      {
        "date": "2026-09-02",
        "nav": 0.7168
      },
      {
        "date": "2026-09-03",
        "nav": 0.7214
      },
      {
        "date": "2026-09-04",
        "nav": 0.7295
      },
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
      }
    ],
    "970067": [
      {
        "date": "2026-09-01",
        "nav": 0.7371
      },
      {
        "date": "2026-09-02",
        "nav": 0.735
      },
      {
        "date": "2026-09-03",
        "nav": 0.7397
      },
      {
        "date": "2026-09-04",
        "nav": 0.748
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-09-01",
        "nav": 2.8088
      },
      {
        "date": "2026-09-02",
        "nav": 2.7641
      },
      {
        "date": "2026-09-03",
        "nav": 2.7576
      },
      {
        "date": "2026-09-04",
        "nav": 2.7068
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-09-01",
        "nav": 2.5476
      },
      {
        "date": "2026-09-02",
        "nav": 2.5142
      },
      {
        "date": "2026-09-03",
        "nav": 2.5264
      },
      {
        "date": "2026-09-04",
        "nav": 2.5079
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-09-01",
        "nav": 0.7519
      },
      {
        "date": "2026-09-02",
        "nav": 0.7435
      },
      {
        "date": "2026-09-03",
        "nav": 0.7433
      },
      {
        "date": "2026-09-04",
        "nav": 0.7431
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-09-01",
        "nav": 4.2656
      },
      {
        "date": "2026-09-02",
        "nav": 4.1817
      },
      {
        "date": "2026-09-03",
        "nav": 4.1827
      },
      {
        "date": "2026-09-04",
        "nav": 4.1262
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-09-01",
        "nav": 0.5101
      },
      {
        "date": "2026-09-02",
        "nav": 0.5048
      },
      {
        "date": "2026-09-03",
        "nav": 0.505
      },
      {
        "date": "2026-09-04",
        "nav": 0.5026
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-09-01",
        "nav": 0.5199
      },
      {
        "date": "2026-09-02",
        "nav": 0.5145
      },
      {
        "date": "2026-09-03",
        "nav": 0.5147
      },
      {
        "date": "2026-09-04",
        "nav": 0.5122
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-09-01",
        "nav": 1.2919
      },
      {
        "date": "2026-09-02",
        "nav": 1.2841
      },
      {
        "date": "2026-09-03",
        "nav": 1.2857
      },
      {
        "date": "2026-09-04",
        "nav": 1.2868
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-09-01",
        "nav": 1.1366
      },
      {
        "date": "2026-09-02",
        "nav": 1.1262
      },
      {
        "date": "2026-09-03",
        "nav": 1.1274
      },
      {
        "date": "2026-09-04",
        "nav": 1.1276
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-09-01",
        "nav": 1.4092
      },
      {
        "date": "2026-09-02",
        "nav": 1.3965
      },
      {
        "date": "2026-09-03",
        "nav": 1.4014
      },
      {
        "date": "2026-09-04",
        "nav": 1.3841
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-09-01",
        "nav": 3.0553
      },
      {
        "date": "2026-09-02",
        "nav": 3.0222
      },
      {
        "date": "2026-09-03",
        "nav": 3.0325
      },
      {
        "date": "2026-09-04",
        "nav": 3.0453
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-09-01",
        "nav": 3.316
      },
      {
        "date": "2026-09-02",
        "nav": 3.275
      },
      {
        "date": "2026-09-03",
        "nav": 3.268
      },
      {
        "date": "2026-09-04",
        "nav": 3.228
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-09-01",
        "nav": 1.5217
      },
      {
        "date": "2026-09-02",
        "nav": 1.5166
      },
      {
        "date": "2026-09-03",
        "nav": 1.5155
      },
      {
        "date": "2026-09-04",
        "nav": 1.5209
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-09-01",
        "nav": 0.6436
      },
      {
        "date": "2026-09-02",
        "nav": 0.6408
      },
      {
        "date": "2026-09-03",
        "nav": 0.6403
      },
      {
        "date": "2026-09-04",
        "nav": 0.6277
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-09-01",
        "nav": 14.081
      },
      {
        "date": "2026-09-02",
        "nav": 13.869
      },
      {
        "date": "2026-09-03",
        "nav": 13.902
      },
      {
        "date": "2026-09-04",
        "nav": 13.565
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.28,
      "nav": 4.4829,
      "price": 4.4829,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.4,
      "nav": 3.883,
      "price": 3.883,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.36,
      "nav": 5.6926,
      "price": 5.6926,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.05,
      "nav": 0.6901,
      "price": 0.6901,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.951,
      "price": 1.951,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.6473,
      "price": 2.6473,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 5.2374,
      "price": 5.2374,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.904,
      "price": 1.904,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.26,
      "nav": 1.2949,
      "price": 1.2949,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 3.231,
      "price": 3.231,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.078,
      "price": 1.078,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.406,
      "price": 2.406,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.38,
      "nav": 1.6428,
      "price": 1.6428,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.8609,
      "price": 1.8609,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.6359,
      "price": 1.6359,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.45,
      "nav": 2.2406,
      "price": 2.2406,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.01,
      "nav": 2.608,
      "price": 2.608,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.01,
      "price": 1.01,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.05,
      "nav": 2.2566,
      "price": 2.2566,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 1.2982,
      "price": 1.2982,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.27,
      "sharpe": 1.08,
      "calmar": 1.08
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 12.04,
      "sharpe": -0.08,
      "calmar": -0.08
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 10.89,
      "sharpe": 3.12,
      "calmar": 3.12
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.59,
      "sharpe": -1.07,
      "calmar": -1.07
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 5.03,
      "sharpe": -3.95,
      "calmar": -3.95
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.94,
      "sharpe": -3.13,
      "calmar": -3.13
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.99,
      "sharpe": -0.84,
      "calmar": -0.84
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.91,
      "sharpe": 0.11,
      "calmar": 0.11
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 7.7,
      "sharpe": -0.02,
      "calmar": -0.02
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.48,
      "sharpe": 2.12,
      "calmar": 2.12
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.54,
      "sharpe": -0.75,
      "calmar": -0.75
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.34,
      "sharpe": -1.24,
      "calmar": -1.24
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 11.49,
      "sharpe": -3.83,
      "calmar": -3.83
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 3.62,
      "sharpe": 0.62,
      "calmar": 0.62
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.01,
      "sharpe": 0.05,
      "calmar": 0.05
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 13.41,
      "sharpe": 1.28,
      "calmar": 1.28
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.24,
      "sharpe": -0.3,
      "calmar": -0.3
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 6.81,
      "sharpe": 0.39,
      "calmar": 0.39
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.54,
      "sharpe": -1.18,
      "calmar": -1.18
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 5.64,
      "sharpe": 0.63,
      "calmar": 0.63
    }
  ],
  "news": [
    {
      "title": "从“吃得饱”到“吃得好”，从线下选购到直播下单，从预制菜到AI数字人，新消费浪潮在激发市场活力的同时，也让维权难题加速显现。“对于种种的变化，消费者的维权难度也不断加大，比如消费者举证比较难，现在有的消费者会看短视频平台上的直播带货，这种即时的消息，当消费者出现产品质量安全的时候，在消费者取证时，可能就打不开这个链接了，这对于消费者的举证维权也存在很大的问题。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:07",
      "impact": "neutral"
    },
    {
      "title": "“我国是全球最大的食品消费市场，全国每天消费40亿斤食品。”9月29日，国务院食安办副主任、市场监管总局副局长柳军在“2026食品安全放心消费交流研讨会”上表示，“保障好14亿人民群众的饮食安全，既是重大的民生工程，也是重大的民心工程，也是我们公共安全的重要组成部分。”食品消费，是国民经济中最基础、最活跃的消费领域，也是居民生活的刚需。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:06",
      "impact": "neutral"
    },
    {
      "title": "9月29日，中国人民银行出台一揽子货币政策工具调整方案，优化结构性货币政策工具，通过抵押补充贷款（PSL）降息及支持领域扩容、增加科技创新和技术改造再贷款额度、增加支农支小再贷款额度等措施，落实适度宽松的政策取向。其中，将水网、新型电网、算力网、新一代通信网、城市地下管网、物流网等“六张网”建设纳入抵押补充贷款支持。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:02",
      "impact": "neutral"
    },
    {
      "title": "9月29日，东莞市住房和城乡建设局、东莞市财政局、东莞市自然资源局、东莞市住房公积金管理中心、中国人民银行东莞市分行、国家金融监督管理总局东莞监管分局联合印发《关于优化我市房地产政策措施的通知》，从购房补贴、公积金提取、首套房认定、土地供应调节、存量资源盘活等方面推出优化举措。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:43",
      "impact": "neutral"
    },
    {
      "title": "俄罗斯称其在黑海击中了一艘干货船。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:32",
      "impact": "neutral"
    },
    {
      "title": "一汽广汽重组“落地”，华为赛力斯合作调整……最近，头部车企动作不断。这背后是中国汽车产业增长逻辑的一次换挡——要从规模扩张转向提质增效。就在前不久，工信部等九部门联合发布《智能网联新能源汽车产业发展“十五五”规划》（下称“规划”），提出到2030年新能源乘用车销量占比达到70%，进入世界汽车强国行列，并首次将“产能预警调控”写入规划。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:14",
      "impact": "neutral"
    },
    {
      "title": "这是中央财政首次对商业性个人住房贷款进行贴息。9月29日，财政部、中国人民银行、金融监管总局联合对外印发《关于实施居民购房贷款贴息政策的通知》（以下简称《通知》），决定在全国范围内实施居民购房贷款贴息政策，减轻新购买首套住房家庭的商业性个人住房贷款利息负担。根据《通知》，此次可享受贴息的贷款规模最高可达100万元，财政部门给予年化1个百分点的贴息，贴息期限最长5年。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:10",
      "impact": "neutral"
    },
    {
      "title": "人民财讯9月29日电，据“佛山发布”，9月29日，佛山市人民政府与广东省检验检测认证研究院集团有限公司（简称“粤检集团”）战略合作协议签约暨佛山检测集团揭牌仪式举行。仪式上，佛山市副市长文曦与粤检集团副总经理唐穗平分别代表双方签署合作协议。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:09",
      "impact": "neutral"
    },
    {
      "title": "布局60万亿元大市场七部门推商品消费扩容升级8月31日，商务部会同国家发展改革委等七部门发布《关于推动商品消费扩容升级的实施意见》，明确了“十五五”时期促进商品消费的总体目标，从促进大宗耐用商品消费、稳步提升生活日用商品消费、支持特色商品消费、培育壮大升级类商品消费4方面提出了促进商品消费的重点任务。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:05",
      "impact": "neutral"
    },
    {
      "title": "9月5日，“沪川融通创新对话·科技成果转化闭门交流会”在成都科创生态岛1号馆举办，活动提出要全方位构建“技术+人才+产业+金融”的沪川融通创新生态。本次活动由上海交通大学MTT项目发起，四川省专精特新企业联盟承办，中国银行四川省分行提供全程支持。40位专家、科创及专精特新企业代表参会，覆盖智能制造、医疗健康、光子科技、航空产业、金融投资等重点赛道。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "23:05",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 51,
    "label": "中性",
    "upDownRatio": "3,276/1,362",
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
