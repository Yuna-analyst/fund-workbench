// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-02 20:11:57
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-02 20:11 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-02",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3638.03,
      "change": 39.01,
      "changePct": "+1.08%",
      "high": 3648.13,
      "low": 3594.77,
      "volume": 565372836.0,
      "amount": 847459070000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11010.68,
      "change": 176.9,
      "changePct": "+1.63%",
      "high": 11112.64,
      "low": 10813.16,
      "volume": 630746118.0,
      "amount": 936236270000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2458.7,
      "change": 45.07,
      "changePct": "+1.87%",
      "high": 2500.14,
      "low": 2406.97,
      "volume": 206324226.0,
      "amount": 466784010000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1196.94,
      "change": 36.1,
      "changePct": "+3.11%",
      "high": 1209.97,
      "low": 1155.94,
      "volume": 10668926.0,
      "amount": 81309900000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4016.92,
      "change": 31.42,
      "changePct": "+0.79%",
      "high": 4038.82,
      "low": 3988.17,
      "volume": 244401128.0,
      "amount": 528847290000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6420.23,
      "change": 154.04,
      "changePct": "+2.46%",
      "high": 6469.3,
      "low": 6253.79,
      "volume": 181604890.0,
      "amount": 315745170000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.18万亿",
      "label": "成交额",
      "rawAmount": 3176381710000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,458/770",
      "label": "涨/跌家数",
      "rawUp": 4458,
      "rawDown": 770,
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
    "totalInflow": 26.9,
    "totalOutflow": 0,
    "netFlow": 26.9,
    "netFlowTrend": [
      5.38,
      10.76,
      16.14,
      21.52,
      26.9
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
      "inflow": 7.72,
      "pct": 0.69
    },
    {
      "name": "券商",
      "inflow": 4.46,
      "pct": 4.57
    },
    {
      "name": "白酒",
      "inflow": 4.4,
      "pct": 3.24
    },
    {
      "name": "半导体",
      "inflow": 3.45,
      "pct": 2.5
    },
    {
      "name": "芯片",
      "inflow": 1.7,
      "pct": 2.04
    },
    {
      "name": "创新药",
      "inflow": 1.53,
      "pct": 1.15
    },
    {
      "name": "传媒",
      "inflow": 1.47,
      "pct": 7.7
    },
    {
      "name": "军工",
      "inflow": 1.04,
      "pct": 2.24
    },
    {
      "name": "人工智能",
      "inflow": 0.59,
      "pct": 1.83
    },
    {
      "name": "新能源",
      "inflow": 0.54,
      "pct": 2.47
    },
    {
      "name": "游戏",
      "inflow": 0.49,
      "pct": 8.65
    },
    {
      "name": "光伏",
      "inflow": 0.4,
      "pct": 2.84
    },
    {
      "name": "云计算",
      "inflow": 0.34,
      "pct": 4.52
    },
    {
      "name": "新能源车",
      "inflow": 0.3,
      "pct": 1.48
    },
    {
      "name": "电子",
      "inflow": 0.22,
      "pct": 0.84
    },
    {
      "name": "农业",
      "inflow": 0.17,
      "pct": 1.59
    },
    {
      "name": "家电",
      "inflow": 0.16,
      "pct": 1.44
    },
    {
      "name": "钢铁",
      "inflow": 0.14,
      "pct": 1.25
    },
    {
      "name": "食品",
      "inflow": 0.12,
      "pct": 2.17
    },
    {
      "name": "计算机",
      "inflow": 0.05,
      "pct": 3.82
    }
  ],
  "sectors": [
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.03,
      "changePct": 8.65,
      "change": 0.082,
      "turnover": 1.63
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.797,
      "changePct": 7.7,
      "change": 0.057,
      "turnover": 4.9
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.481,
      "changePct": 4.57,
      "change": 0.021,
      "turnover": 14.86
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.386,
      "changePct": 4.52,
      "change": 0.06,
      "turnover": 1.15
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.979,
      "changePct": 3.82,
      "change": 0.036,
      "turnover": 0.18
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.446,
      "changePct": 3.24,
      "change": 0.014,
      "turnover": 14.67
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.688,
      "changePct": 2.84,
      "change": 0.019,
      "turnover": 1.32
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.738,
      "changePct": 2.5,
      "change": 0.018,
      "turnover": 11.49
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.952,
      "changePct": 2.47,
      "change": 0.047,
      "turnover": 1.81
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.004,
      "changePct": 2.24,
      "change": 0.022,
      "turnover": 3.46
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.517,
      "changePct": 2.17,
      "change": 0.011,
      "turnover": 0.41
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.799,
      "changePct": 2.04,
      "change": 0.016,
      "turnover": 5.66
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.781,
      "changePct": 1.83,
      "change": 0.014,
      "turnover": 1.98
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.702,
      "changePct": 1.59,
      "change": 0.011,
      "turnover": 0.57
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.299,
      "changePct": 1.48,
      "change": 0.019,
      "turnover": 1.0
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.338,
      "changePct": 1.44,
      "change": 0.019,
      "turnover": 0.54
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.053,
      "changePct": 1.25,
      "change": 0.013,
      "turnover": 0.46
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.794,
      "changePct": 1.15,
      "change": 0.009,
      "turnover": 5.09
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.6,
      "changePct": 0.84,
      "change": 0.005,
      "turnover": 0.74
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.435,
      "changePct": 0.69,
      "change": 0.003,
      "turnover": 25.72
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.958,
      "changePct": 0.63,
      "change": 0.006,
      "turnover": 0.05
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.678,
      "changePct": 0.59,
      "change": 0.004,
      "turnover": 4.87
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.118,
      "changePct": 0.54,
      "change": 0.006,
      "turnover": 1.0
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.336,
      "changePct": 0.3,
      "change": 0.001,
      "turnover": 4.24
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.385,
      "changePct": -0.72,
      "change": -0.01,
      "turnover": 5.94
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.374,
      "changePct": -0.8,
      "change": -0.003,
      "turnover": 3.68
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.885,
      "changePct": -0.9,
      "change": -0.008,
      "turnover": 11.9
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.22,
      "changePct": -1.45,
      "change": -0.018,
      "turnover": 5.66
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.26,
      "changePct": 2.61,
      "amount": 166.95,
      "netFlow": 41.74
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.085,
      "changePct": 0.49,
      "amount": 120.66,
      "netFlow": 30.17
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.456,
      "changePct": 2.39,
      "amount": 87.07,
      "netFlow": 21.77
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.264,
      "changePct": 0.64,
      "amount": 27.93,
      "netFlow": 6.98
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.871,
      "changePct": 0.31,
      "amount": 25.96,
      "netFlow": 6.49
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.481,
      "changePct": 4.57,
      "amount": 14.86,
      "netFlow": 3.71
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.738,
      "changePct": 2.5,
      "amount": 11.49,
      "netFlow": 2.87
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.97,
      "changePct": 0.68,
      "amount": 10.81,
      "netFlow": 2.7
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.952,
      "changePct": 2.47,
      "amount": 1.81,
      "netFlow": 0.45
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.374,
      "changePct": -0.8,
      "amount": 3.68,
      "netFlow": -0.92
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.085,
      "changePct": 0.49,
      "amount": 120.66,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.871,
      "changePct": 0.31,
      "amount": 25.96,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.456,
      "changePct": 2.39,
      "amount": 87.07,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.264,
      "changePct": 0.64,
      "amount": 27.93,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.97,
      "changePct": 0.68,
      "amount": 10.81,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "游戏",
      "turnover": 1.63,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 4.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 14.86,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "云计算",
      "turnover": 1.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 14.67,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 1.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 11.49,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "新能源",
      "turnover": 1.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 5.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.0,
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
      "name": "钢铁",
      "turnover": 0.46,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.74,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 25.72,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    }
  ],
  "funds": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "nav": 3.8166,
      "ret1w": 1.62,
      "ret1m": -4.65,
      "ret3m": -13.73,
      "ret6m": 0.62,
      "ret1y": -19.58,
      "ret2y": -3.48,
      "ret3y": 84.4
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.8166,
      "ret1w": -0.85,
      "ret1m": -9.84,
      "ret3m": -26.77,
      "ret6m": -27.8,
      "ret1y": -40.66,
      "ret2y": -29.54,
      "ret3y": -0.13
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 3.3194,
      "ret1w": -0.75,
      "ret1m": -17.57,
      "ret3m": -41.17,
      "ret6m": -20.73,
      "ret1y": -32.11,
      "ret2y": 1.67,
      "ret3y": 73.85
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7557,
      "ret1w": 3.14,
      "ret1m": 4.83,
      "ret3m": 8.41,
      "ret6m": 1.87,
      "ret1y": 0.03,
      "ret2y": -6.07,
      "ret3y": 3.8
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9419,
      "ret1w": 1.88,
      "ret1m": -3.22,
      "ret3m": -2.84,
      "ret6m": -12.27,
      "ret1y": -30.94,
      "ret2y": -35.74,
      "ret3y": -19.9
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5645,
      "ret1w": 1.45,
      "ret1m": -0.21,
      "ret3m": -5.34,
      "ret6m": -7.29,
      "ret1y": -24.18,
      "ret2y": -25.01,
      "ret3y": 4.36
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.3145,
      "ret1w": 0.99,
      "ret1m": 2.05,
      "ret3m": 0.5,
      "ret6m": -5.22,
      "ret1y": -6.65,
      "ret2y": 1.47,
      "ret3y": 29.45
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.634,
      "ret1w": 2.0,
      "ret1m": -4.11,
      "ret3m": -13.86,
      "ret6m": -7.42,
      "ret1y": -20.76,
      "ret2y": -12.81,
      "ret3y": 28.86
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1145,
      "ret1w": 1.8,
      "ret1m": -3.92,
      "ret3m": -13.91,
      "ret6m": -13.44,
      "ret1y": -21.73,
      "ret2y": -12.97,
      "ret3y": 6.32
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.547,
      "ret1w": 1.31,
      "ret1m": -4.64,
      "ret3m": -19.53,
      "ret6m": -21.29,
      "ret1y": -16.38,
      "ret2y": 17.7,
      "ret3y": 111.72
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.162,
      "ret1w": 3.29,
      "ret1m": 3.75,
      "ret3m": 5.73,
      "ret6m": 2.38,
      "ret1y": -0.51,
      "ret2y": -8.79,
      "ret3y": -6.89
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.245,
      "ret1w": 1.54,
      "ret1m": -2.05,
      "ret3m": -8.52,
      "ret6m": -2.52,
      "ret1y": -16.01,
      "ret2y": -14.8,
      "ret3y": 7.52
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.1177,
      "ret1w": 3.45,
      "ret1m": -10.15,
      "ret3m": -30.24,
      "ret6m": -34.92,
      "ret1y": -67.14,
      "ret2y": -61.92,
      "ret3y": -38.94
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9265,
      "ret1w": 1.93,
      "ret1m": 2.78,
      "ret3m": 2.22,
      "ret6m": -1.09,
      "ret1y": 5.97,
      "ret2y": -1.03,
      "ret3y": -3.43
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3955,
      "ret1w": 1.81,
      "ret1m": -4.08,
      "ret3m": -14.11,
      "ret6m": -7.65,
      "ret1y": -20.02,
      "ret2y": -10.76,
      "ret3y": 23.67
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.4801,
      "ret1w": 1.6,
      "ret1m": -11.06,
      "ret3m": -33.27,
      "ret6m": -29.3,
      "ret1y": -37.56,
      "ret2y": 8.19,
      "ret3y": 51.35
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5539,
      "ret1w": 0.18,
      "ret1m": -0.2,
      "ret3m": -3.27,
      "ret6m": 0.46,
      "ret1y": -6.68,
      "ret2y": -5.0,
      "ret3y": 2.62
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.901,
      "ret1w": 1.24,
      "ret1m": -4.35,
      "ret3m": -14.03,
      "ret6m": -9.26,
      "ret1y": -9.99,
      "ret2y": -18.31,
      "ret3y": -17.19
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4038,
      "ret1w": 0.57,
      "ret1m": 2.35,
      "ret3m": 4.94,
      "ret6m": 0.59,
      "ret1y": -1.77,
      "ret2y": 4.29,
      "ret3y": 9.01
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1686,
      "ret1w": 1.38,
      "ret1m": -3.8,
      "ret3m": -9.84,
      "ret6m": -5.0,
      "ret1y": -10.15,
      "ret2y": 0.17,
      "ret3y": 40.72
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9616,
      "ret1w": 1.25,
      "ret1m": -6.01,
      "ret3m": -18.52,
      "ret6m": -22.52,
      "ret1y": -29.25,
      "ret2y": -17.42,
      "ret3y": 4.37
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0236,
      "ret1w": 1.26,
      "ret1m": -6.01,
      "ret3m": -18.49,
      "ret6m": -22.44,
      "ret1y": -29.11,
      "ret2y": -17.09,
      "ret3y": 5.21
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0458,
      "ret1w": -0.11,
      "ret1m": -0.85,
      "ret3m": -2.01,
      "ret6m": -4.99,
      "ret1y": -4.34,
      "ret2y": -2.84,
      "ret3y": 2.75
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0209,
      "ret1w": -0.11,
      "ret1m": -0.84,
      "ret3m": -1.96,
      "ret6m": -4.85,
      "ret1y": -4.05,
      "ret2y": -2.26,
      "ret3y": 3.99
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.697,
      "ret1w": 1.57,
      "ret1m": -0.27,
      "ret3m": -0.47,
      "ret6m": -5.89,
      "ret1y": -13.72,
      "ret2y": -13.91,
      "ret3y": -1.2
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7153,
      "ret1w": 1.59,
      "ret1m": -0.25,
      "ret3m": -0.42,
      "ret6m": -5.76,
      "ret1y": -13.49,
      "ret2y": -13.46,
      "ret3y": -0.21
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.046,
      "ret1w": -0.57,
      "ret1m": -7.78,
      "ret3m": -23.24,
      "ret6m": -19.76,
      "ret1y": -20.06,
      "ret2y": 6.4,
      "ret3y": 79.74
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.227,
      "ret1w": 1.84,
      "ret1m": -3.73,
      "ret3m": -9.61,
      "ret6m": -8.72,
      "ret1y": -12.41,
      "ret2y": 2.75,
      "ret3y": 43.04
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6801,
      "ret1w": 3.03,
      "ret1m": -4.17,
      "ret3m": -4.45,
      "ret6m": -6.4,
      "ret1y": -22.66,
      "ret2y": -16.35,
      "ret3y": -6.78
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.7418,
      "ret1w": 2.01,
      "ret1m": -6.61,
      "ret3m": -9.93,
      "ret6m": -6.25,
      "ret1y": -4.93,
      "ret2y": 19.51,
      "ret3y": 85.88
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4624,
      "ret1w": -0.49,
      "ret1m": -0.88,
      "ret3m": -6.91,
      "ret6m": -11.99,
      "ret1y": -10.91,
      "ret2y": -0.92,
      "ret3y": 25.65
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4716,
      "ret1w": -0.49,
      "ret1m": -0.86,
      "ret3m": -6.87,
      "ret6m": -11.9,
      "ret1y": -10.72,
      "ret2y": -0.53,
      "ret3y": 26.67
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2581,
      "ret1w": -0.23,
      "ret1m": 0.29,
      "ret3m": -0.77,
      "ret6m": -2.02,
      "ret1y": -2.75,
      "ret2y": -2.32,
      "ret3y": 0.46
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0666,
      "ret1w": 0.57,
      "ret1m": -1.56,
      "ret3m": -3.52,
      "ret6m": -6.96,
      "ret1y": -7.24,
      "ret2y": -9.22,
      "ret3y": 0.8
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1568,
      "ret1w": 0.85,
      "ret1m": 0.03,
      "ret3m": -12.36,
      "ret6m": -15.75,
      "ret1y": -26.83,
      "ret2y": -24.3,
      "ret3y": -17.28
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7883,
      "ret1w": 0.54,
      "ret1m": -1.33,
      "ret3m": -4.49,
      "ret6m": -7.12,
      "ret1y": -14.52,
      "ret2y": -0.09,
      "ret3y": 29.27
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.191,
      "ret1w": 0.41,
      "ret1m": -11.15,
      "ret3m": -30.27,
      "ret6m": -30.42,
      "ret1y": -38.64,
      "ret2y": 1.48,
      "ret3y": 71.17
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5618,
      "ret1w": -0.55,
      "ret1m": 2.03,
      "ret3m": 2.84,
      "ret6m": 3.3,
      "ret1y": 4.45,
      "ret2y": 3.83,
      "ret3y": 3.65
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5509,
      "ret1w": 1.08,
      "ret1m": 5.74,
      "ret3m": -4.77,
      "ret6m": -2.56,
      "ret1y": -21.77,
      "ret2y": -8.12,
      "ret3y": -6.97
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 9.019,
      "ret1w": -0.56,
      "ret1m": -12.23,
      "ret3m": -33.71,
      "ret6m": -29.35,
      "ret1y": -20.0,
      "ret2y": 13.5,
      "ret3y": 115.3
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0501,
      "ret1w": -0.09,
      "ret1m": -0.46,
      "ret3m": -1.02,
      "ret6m": -1.29,
      "ret1y": -1.68,
      "ret2y": -0.59,
      "ret3y": 2.32
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0983,
      "ret1w": -0.08,
      "ret1m": -0.46,
      "ret3m": -1.0,
      "ret6m": -1.23,
      "ret1y": -1.56,
      "ret2y": -0.34,
      "ret3y": 2.99
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0666,
      "ret1w": -0.05,
      "ret1m": -0.11,
      "ret3m": 0.06,
      "ret6m": 0.29,
      "ret1y": 0.59,
      "ret2y": 1.51,
      "ret3y": 2.96
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1016,
      "ret1w": -0.01,
      "ret1m": -0.07,
      "ret3m": 0.13,
      "ret6m": 0.37,
      "ret1y": 0.7,
      "ret2y": 1.5,
      "ret3y": 3.85
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1114,
      "ret1w": -0.01,
      "ret1m": -0.06,
      "ret3m": 0.14,
      "ret6m": 0.42,
      "ret1y": 0.81,
      "ret2y": 1.71,
      "ret3y": 4.28
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0777,
      "ret1w": -0.01,
      "ret1m": -0.06,
      "ret3m": 0.09,
      "ret6m": 0.24,
      "ret1y": 0.56,
      "ret2y": 1.39,
      "ret3y": 3.04
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0927,
      "ret1w": -0.01,
      "ret1m": -0.05,
      "ret3m": 0.12,
      "ret6m": 0.31,
      "ret1y": 0.71,
      "ret2y": 1.7,
      "ret3y": 3.69
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0033,
      "ret1w": 0.51,
      "ret1m": -1.49,
      "ret3m": -4.6,
      "ret6m": -4.64,
      "ret1y": -7.1,
      "ret2y": -1.58,
      "ret3y": 4.88
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1552,
      "ret1w": 0.69,
      "ret1m": -1.47,
      "ret3m": -4.61,
      "ret6m": -3.06,
      "ret1y": -6.99,
      "ret2y": -3.44,
      "ret3y": -0.32
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0103,
      "ret1w": 0.51,
      "ret1m": -1.48,
      "ret3m": -4.57,
      "ret6m": -4.54,
      "ret1y": -6.91,
      "ret2y": -1.18,
      "ret3y": 5.73
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": -0.02,
      "ret1m": -0.11,
      "ret3m": 0.06,
      "ret6m": 0.38,
      "ret1y": 0.76,
      "ret2y": 1.68,
      "ret3y": 3.6
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0973,
      "ret1w": 0.26,
      "ret1m": -1.81,
      "ret3m": -5.26,
      "ret6m": -5.25,
      "ret1y": -9.43,
      "ret2y": -7.23,
      "ret3y": -0.18
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2009,
      "ret1w": 0.09,
      "ret1m": 0.1,
      "ret3m": -0.32,
      "ret6m": -1.53,
      "ret1y": -2.45,
      "ret2y": 0.47,
      "ret3y": 10.11
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.116,
      "ret1w": 0.18,
      "ret1m": -0.26,
      "ret3m": -1.39,
      "ret6m": -1.08,
      "ret1y": -2.24,
      "ret2y": 0.43,
      "ret3y": 6.71
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1868,
      "ret1w": 0.19,
      "ret1m": -0.25,
      "ret3m": -1.35,
      "ret6m": -0.98,
      "ret1y": -2.05,
      "ret2y": 0.84,
      "ret3y": 7.61
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.09,
      "ret1w": -6.36,
      "ret1m": 0.63,
      "ret3m": -16.33,
      "ret6m": -1.51,
      "ret1y": 0.34,
      "ret2y": 42.86,
      "ret3y": 103.31
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9282,
      "ret1w": -1.33,
      "ret1m": -0.13,
      "ret3m": -2.46,
      "ret6m": 0.73,
      "ret1y": 2.07,
      "ret2y": 4.17,
      "ret3y": 27.89
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6465,
      "ret1w": 0.56,
      "ret1m": -0.53,
      "ret3m": -9.21,
      "ret6m": -11.52,
      "ret1y": -22.25,
      "ret2y": -12.07,
      "ret3y": 16.68
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2867,
      "ret1w": -5.01,
      "ret1m": -0.09,
      "ret3m": -8.15,
      "ret6m": 5.14,
      "ret1y": 6.49,
      "ret2y": 9.15,
      "ret3y": 57.43
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9238,
      "ret1w": 0.05,
      "ret1m": 0.29,
      "ret3m": 1.28,
      "ret6m": -1.37,
      "ret1y": -2.76,
      "ret2y": -5.31,
      "ret3y": -2.16
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.3275,
      "ret1w": -4.58,
      "ret1m": -1.54,
      "ret3m": -14.77,
      "ret6m": -6.4,
      "ret1y": -5.57,
      "ret2y": 17.66,
      "ret3y": 61.79
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.395,
      "ret1w": -1.5,
      "ret1m": -0.72,
      "ret3m": -3.13,
      "ret6m": -1.81,
      "ret1y": -2.31,
      "ret2y": -0.72,
      "ret3y": 13.48
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.779,
      "ret1w": -2.75,
      "ret1m": -4.53,
      "ret3m": -18.94,
      "ret6m": -9.21,
      "ret1y": -28.33,
      "ret2y": -31.49,
      "ret3y": -18.09
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.4658,
      "ret1w": -5.02,
      "ret1m": -2.61,
      "ret3m": -15.55,
      "ret6m": -3.33,
      "ret1y": -5.87,
      "ret2y": 38.89,
      "ret3y": 111.51
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5539,
      "ret1w": -0.66,
      "ret1m": -0.38,
      "ret3m": 1.34,
      "ret6m": 6.56,
      "ret1y": 0.63,
      "ret2y": 26.1,
      "ret3y": 49.3
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5895,
      "ret1w": -1.8,
      "ret1m": -1.71,
      "ret3m": -8.35,
      "ret6m": -2.09,
      "ret1y": -0.36,
      "ret2y": 10.37,
      "ret3y": 39.86
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2016,
      "ret1w": -1.29,
      "ret1m": 0.45,
      "ret3m": -7.41,
      "ret6m": -1.35,
      "ret1y": -5.58,
      "ret2y": -0.03,
      "ret3y": 22.67
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.267,
      "ret1w": 0.08,
      "ret1m": 1.12,
      "ret3m": 4.37,
      "ret6m": -5.09,
      "ret1y": -4.09,
      "ret2y": 3.34,
      "ret3y": -9.98
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.853,
      "ret1w": -2.98,
      "ret1m": -2.63,
      "ret3m": -6.37,
      "ret6m": -6.18,
      "ret1y": -17.31,
      "ret2y": -8.72,
      "ret3y": 24.55
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.5173,
      "ret1w": -4.01,
      "ret1m": -1.71,
      "ret3m": -13.97,
      "ret6m": -6.14,
      "ret1y": -4.7,
      "ret2y": 14.48,
      "ret3y": 44.93
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0162,
      "ret1w": 0.06,
      "ret1m": 0.02,
      "ret3m": 0.3,
      "ret6m": 0.69,
      "ret1y": 1.26,
      "ret2y": 2.36,
      "ret3y": 3.86
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0153,
      "ret1w": 0.05,
      "ret1m": 0.01,
      "ret3m": 0.3,
      "ret6m": 0.72,
      "ret1y": 1.28,
      "ret2y": 2.42,
      "ret3y": 4.01
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.202,
      "ret1w": 0.92,
      "ret1m": -3.14,
      "ret3m": -10.43,
      "ret6m": -15.53,
      "ret1y": -20.66,
      "ret2y": -16.99,
      "ret3y": -0.41
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.263,
      "ret1w": 1.03,
      "ret1m": -4.72,
      "ret3m": -14.54,
      "ret6m": -17.74,
      "ret1y": -24.16,
      "ret2y": -16.15,
      "ret3y": 8.96
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4399,
      "ret1w": -0.63,
      "ret1m": -2.24,
      "ret3m": -8.02,
      "ret6m": -10.6,
      "ret1y": -21.14,
      "ret2y": -5.11,
      "ret3y": 32.22
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8448,
      "ret1w": 0.68,
      "ret1m": -3.02,
      "ret3m": -10.47,
      "ret6m": -12.44,
      "ret1y": -14.77,
      "ret2y": -7.26,
      "ret3y": 9.7
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8988,
      "ret1w": 0.68,
      "ret1m": -3.01,
      "ret3m": -10.45,
      "ret6m": -12.36,
      "ret1y": -14.6,
      "ret2y": -6.89,
      "ret3y": 10.58
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6731,
      "ret1w": 2.32,
      "ret1m": -4.14,
      "ret3m": -13.02,
      "ret6m": -13.66,
      "ret1y": -21.65,
      "ret2y": -11.26,
      "ret3y": 11.04
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5838,
      "ret1w": 0.74,
      "ret1m": -1.99,
      "ret3m": -7.29,
      "ret6m": -11.51,
      "ret1y": -14.71,
      "ret2y": -11.45,
      "ret3y": 6.05
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4352,
      "ret1w": 2.03,
      "ret1m": -2.59,
      "ret3m": -6.93,
      "ret6m": -8.85,
      "ret1y": -14.53,
      "ret2y": -3.92,
      "ret3y": 21.34
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5037,
      "ret1w": 0.9,
      "ret1m": -5.64,
      "ret3m": -17.62,
      "ret6m": -23.01,
      "ret1y": -25.57,
      "ret2y": -17.82,
      "ret3y": 11.59
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0113,
      "ret1w": 0.35,
      "ret1m": 0.52,
      "ret3m": -2.32,
      "ret6m": -8.0,
      "ret1y": -9.49,
      "ret2y": -9.14,
      "ret3y": 6.72
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4886,
      "ret1w": 0.5,
      "ret1m": -0.01,
      "ret3m": 1.79,
      "ret6m": -1.92,
      "ret1y": 0.62,
      "ret2y": 6.61,
      "ret3y": 29.16
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3019,
      "ret1w": -3.11,
      "ret1m": -1.77,
      "ret3m": -6.4,
      "ret6m": -0.04,
      "ret1y": 1.23,
      "ret2y": 3.87,
      "ret3y": 26.58
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2296,
      "ret1w": 1.0,
      "ret1m": -4.0,
      "ret3m": -13.47,
      "ret6m": -18.94,
      "ret1y": -24.4,
      "ret2y": -16.67,
      "ret3y": 7.11
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9722,
      "ret1w": -2.37,
      "ret1m": -2.47,
      "ret3m": -14.32,
      "ret6m": -14.46,
      "ret1y": -20.63,
      "ret2y": -15.02,
      "ret3y": 10.57
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9755,
      "ret1w": -2.37,
      "ret1m": -2.47,
      "ret3m": -14.2,
      "ret6m": -14.29,
      "ret1y": -20.48,
      "ret2y": -14.94,
      "ret3y": 10.31
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.1907,
      "ret1w": -1.77,
      "ret1m": -4.77,
      "ret3m": -11.98,
      "ret6m": -10.43,
      "ret1y": -21.89,
      "ret2y": -15.17,
      "ret3y": 5.34
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2187,
      "ret1w": -1.77,
      "ret1m": -4.76,
      "ret3m": -11.95,
      "ret6m": -10.34,
      "ret1y": -21.73,
      "ret2y": -14.84,
      "ret3y": 6.19
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.6849,
      "ret1w": -1.88,
      "ret1m": -3.36,
      "ret3m": -12.3,
      "ret6m": -13.77,
      "ret1y": -21.21,
      "ret2y": -12.48,
      "ret3y": 18.81
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1544,
      "ret1w": -0.04,
      "ret1m": -0.42,
      "ret3m": -0.59,
      "ret6m": -1.22,
      "ret1y": -1.2,
      "ret2y": 0.49,
      "ret3y": 5.32
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1747,
      "ret1w": -0.04,
      "ret1m": -0.42,
      "ret3m": -0.56,
      "ret6m": -1.14,
      "ret1y": -1.04,
      "ret2y": 0.8,
      "ret3y": 5.95
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0872,
      "ret1w": -0.04,
      "ret1m": -0.1,
      "ret3m": 0.08,
      "ret6m": 0.37,
      "ret1y": 0.76,
      "ret2y": 1.83,
      "ret3y": 3.56
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.41,
      "ret1w": -0.05,
      "ret1m": -0.17,
      "ret3m": -0.01,
      "ret6m": -0.06,
      "ret1y": 0.01,
      "ret2y": 0.49,
      "ret3y": 5.52
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4632,
      "ret1w": -0.05,
      "ret1m": -0.16,
      "ret3m": 0.03,
      "ret6m": 0.04,
      "ret1y": 0.22,
      "ret2y": 0.9,
      "ret3y": 6.38
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.8534,
      "ret1w": 0.19,
      "ret1m": -3.91,
      "ret3m": -10.15,
      "ret6m": -11.12,
      "ret1y": -4.26,
      "ret2y": 5.45,
      "ret3y": 32.88
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0048,
      "ret1w": 0.0,
      "ret1m": -5.16,
      "ret3m": -14.05,
      "ret6m": -19.23,
      "ret1y": -18.06,
      "ret2y": -12.89,
      "ret3y": 10.69
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 4.0027
      },
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
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 3.1241
      },
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
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 4.0271
      },
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
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.7209
      },
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
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.0066
      },
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
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.5699
      },
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
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 5.2075
      },
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
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.704
      },
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
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.16
      },
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
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.671
      },
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
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.12
      },
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
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.292
      },
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
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.244
      },
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
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.8744
      },
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
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.4549
      },
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
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.6641
      },
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
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.559
      },
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
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.942
      },
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
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.3485
      },
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
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.2148
      },
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
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.0231
      },
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
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.089
      },
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
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.0548
      },
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
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.0296
      },
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
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.6989
      },
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
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.7171
      },
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
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.2185
      },
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
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.3134
      },
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
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.7097
      },
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
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 4.0068
      },
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
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.4665
      },
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
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.4757
      },
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
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.2545
      },
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
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.0835
      },
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
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.1564
      },
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
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.8258
      },
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
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 2.466
      },
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
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 1.5308
      },
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
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 0.521
      },
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
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-10-26",
        "nav": 10.276
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 3.8166,
      "price": 3.8166,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.49,
      "nav": 2.8166,
      "price": 2.8166,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.88,
      "nav": 3.3194,
      "price": 3.3194,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.24,
      "nav": 0.7557,
      "price": 0.7557,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 1.9419,
      "price": 1.9419,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.5645,
      "price": 2.5645,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.1,
      "nav": 5.3145,
      "price": 5.3145,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.634,
      "price": 1.634,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.1145,
      "price": 1.1145,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 2.547,
      "price": 2.547,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.19,
      "nav": 1.162,
      "price": 1.162,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 2.245,
      "price": 2.245,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.51,
      "nav": 1.1177,
      "price": 1.1177,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.14,
      "nav": 1.9265,
      "price": 1.9265,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.3955,
      "price": 1.3955,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.55,
      "nav": 1.4801,
      "price": 1.4801,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.01,
      "nav": 2.5539,
      "price": 2.5539,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.22,
      "nav": 0.901,
      "price": 0.901,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 2.4038,
      "price": 2.4038,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 1.1686,
      "price": 1.1686,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.98,
      "sharpe": -2.03,
      "calmar": -2.03
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 14.76,
      "sharpe": -2.74,
      "calmar": -2.74
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 26.36,
      "sharpe": -1.42,
      "calmar": -1.42
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 7.25,
      "sharpe": 0.0,
      "calmar": 0.0
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 4.83,
      "sharpe": -3.76,
      "calmar": -3.76
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.32,
      "sharpe": -4.64,
      "calmar": -4.64
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.07,
      "sharpe": -0.94,
      "calmar": -0.94
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.17,
      "sharpe": -2.28,
      "calmar": -2.28
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.88,
      "sharpe": -2.44,
      "calmar": -2.44
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.96,
      "sharpe": -1.7,
      "calmar": -1.7
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 5.62,
      "sharpe": -0.06,
      "calmar": -0.06
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.07,
      "sharpe": -2.27,
      "calmar": -2.27
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 15.23,
      "sharpe": -4.43,
      "calmar": -4.43
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 4.17,
      "sharpe": 0.77,
      "calmar": 0.77
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 6.12,
      "sharpe": -2.2,
      "calmar": -2.2
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 16.59,
      "sharpe": -2.34,
      "calmar": -2.34
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.3,
      "sharpe": -1.28,
      "calmar": -1.28
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 6.52,
      "sharpe": -1.07,
      "calmar": -1.07
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 3.53,
      "sharpe": -0.24,
      "calmar": -0.24
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 5.7,
      "sharpe": -1.15,
      "calmar": -1.15
    }
  ],
  "news": [
    {
      "title": "上期所原油期货2612合约夜盘收跌8.62%，报681元人民币/桶。沪金夜盘收涨1.18%，沪银收涨3.41%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:33",
      "impact": "neutral"
    },
    {
      "title": "一粒芝麻种子，在皖南梯田里试了三年又三年。一台智能烘干机，让黄山贡菊不再怕连日阴雨。一支以长期资本为底色的神农基金，耐心陪伴一只蜥蜴、一粒稻种从实验室走向市场。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:26",
      "impact": "neutral"
    },
    {
      "title": "第九届中国国际进口博览会（以下简称“进博会”）将于11月5日至10日在国家会展中心（上海）举办。开幕前夕，多名进博会“老友”对证券时报记者表示，当下全球经贸格局持续调整，国际合作内涵向创新、产业、价值链等层面拓展，进博会为中外企业对接资源、深化协作搭建了重要渠道。新一轮科技革命和产业变革加速演进，进博会持续联通全球、汇聚前沿成果，为各地开展创新交流、深化科创合作架起桥梁。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:26",
      "impact": "neutral"
    },
    {
      "title": "又见省级地方金融管理局局长变动。公开信息显示，史长俊已接替严宓，出任湖北省委金融委员会办公室副主任、省委金融工作委员会副书记、省地方金融管理局局长。至此，年初以来已有7家省级地方金融管理局迎来一把手变更，与去年全年持平。“70后”史长俊履新据公开信息，现年54岁的史长俊，系在职博士研究生、经济学博士，长期供职于人民银行系统。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:26",
      "impact": "neutral"
    },
    {
      "title": "□业内人士表示，银行重启长期限大额存单产品发行，意在稳定核心负债，优化存款结构，承接到期资金。从负债端来看，部分银行存在控制存款成本的紧迫性□在这种情况下，重启大额存单产品发行有助于拉长负债久期，锁定稳定资金。此举能缓解银行资产负债期限错配压力，为息差管理预留空间近日，邮储银行官方App上架大额存单产品，至此国有六大行全部重启大额存单产品发行。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "02:17",
      "impact": "neutral"
    },
    {
      "title": "2026年三季报披露收官，白酒企业报表端的寒意并未消退：19家公司前三季度合计营收2609.17亿元，同比下降7.39%；归属于上市公司股东的净利润974.49亿元，同比下降约8.9%。把19家酒企的三季报拆开看，高端龙头与强区域酒企、次高端全国化酒企之间分化依旧明显。贵州茅台酒股份有限公司是高端赛道的“压舱石”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:26",
      "impact": "neutral"
    },
    {
      "title": "据国家外汇管理局网站11月2日消息，为支持贸易创新发展，促进高水平对外开放，国家外汇管理局起草了《国家外汇管理局关于进一步优化经常项目外汇管理有关事项的通知（征求意见稿）》（以下简称《通知》），现向社会公开征求意见，意见反馈截止时间为2026年12月1日。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:17",
      "impact": "neutral"
    },
    {
      "title": "上市银行三季报披露收官，中间业务收入（即手续费及佣金净收入）分化态势凸显：部分国有大行、头部股份行依托代销和财富管理业务持续领跑，成为中间业务收入增长核心引擎；中小银行走势则两极分化。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:17",
      "impact": "neutral"
    },
    {
      "title": "近日，工商银行、农业银行、中国银行、建设银行、邮储银行、交通银行等6家国有大型商业银行（以下简称“国有六大行”）2026年前三季度业绩披露完毕。从营业收入、归母净利润两项关键指标来看，国有六大行前三季度均实现同比正增长，经营效益稳中有进。作为衡量银行盈利能力最核心的指标，净息差直接决定利息净收入水平，进而影响银行整体经营绩效。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:17",
      "impact": "neutral"
    },
    {
      "title": "11月2日，中国证监会相关负责人在答记者问时透露，为进一步提高上市公司开展股份回购的便利度，发挥市场内在稳市功能，近期中国证监会拟对《上市公司股份回购规则》进行修订，围绕为维护公司价值及股东权益所必需而回购股份（即“护盘式回购”）作出调整优化。开展股份回购是上市公司进行市值管理的重要工具，也是上市公司稳定自身股价、展现和传递发展前景及信心的重要途径。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:16",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 55,
    "label": "中性",
    "upDownRatio": "4,458/770",
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
