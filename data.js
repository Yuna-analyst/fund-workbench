// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-02 21:33:46
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-02 21:33 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-07-31",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3832.26,
      "change": 27.57,
      "changePct": "+0.72%",
      "high": 3847.09,
      "low": 3822.37,
      "volume": 597529427.0,
      "amount": 1187681550000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13578.93,
      "change": 293.13,
      "changePct": "+2.21%",
      "high": 13841.96,
      "low": 13578.93,
      "volume": 719395944.0,
      "amount": 1354266630000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3343.96,
      "change": 99.34,
      "changePct": "+3.06%",
      "high": 3464.9,
      "low": 3343.96,
      "volume": 236170945.0,
      "amount": 671226880000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1635.96,
      "change": 47.55,
      "changePct": "+2.99%",
      "high": 1731.21,
      "low": 1635.68,
      "volume": 14507410.0,
      "amount": 162975220000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4588.2,
      "change": 38.48,
      "changePct": "+0.85%",
      "high": 4635.59,
      "low": 4588.2,
      "volume": 279243698.0,
      "amount": 832909110000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7493.99,
      "change": 184.41,
      "changePct": "+2.52%",
      "high": 7638.78,
      "low": 7487.43,
      "volume": 216635960.0,
      "amount": 513956390000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.72万亿",
      "label": "成交额",
      "rawAmount": 4723015780000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,646/676",
      "label": "涨/跌家数",
      "rawUp": 4646,
      "rawDown": 676,
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
    "totalInflow": 49.0,
    "totalOutflow": 0,
    "netFlow": 49.0,
    "netFlowTrend": [
      9.8,
      19.6,
      29.4,
      39.2,
      49.0
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
      "inflow": 16.84,
      "pct": 4.86
    },
    {
      "name": "半导体",
      "inflow": 9.04,
      "pct": 3.55
    },
    {
      "name": "5G",
      "inflow": 5.67,
      "pct": 4.43
    },
    {
      "name": "芯片",
      "inflow": 5.28,
      "pct": 3.52
    },
    {
      "name": "传媒",
      "inflow": 2.68,
      "pct": 6.92
    },
    {
      "name": "创新药",
      "inflow": 2.56,
      "pct": 1.57
    },
    {
      "name": "有色",
      "inflow": 2.53,
      "pct": 2.58
    },
    {
      "name": "医疗",
      "inflow": 1.83,
      "pct": 1.54
    },
    {
      "name": "人工智能",
      "inflow": 1.41,
      "pct": 6.33
    },
    {
      "name": "军工",
      "inflow": 1.16,
      "pct": 1.86
    },
    {
      "name": "新能源",
      "inflow": 0.75,
      "pct": 0.87
    },
    {
      "name": "云计算",
      "inflow": 0.69,
      "pct": 7.12
    },
    {
      "name": "光伏",
      "inflow": 0.58,
      "pct": 1.49
    },
    {
      "name": "新能源车",
      "inflow": 0.43,
      "pct": 1.0
    },
    {
      "name": "游戏",
      "inflow": 0.42,
      "pct": 4.24
    },
    {
      "name": "地产",
      "inflow": 0.29,
      "pct": 1.19
    },
    {
      "name": "电子",
      "inflow": 0.21,
      "pct": 3.87
    },
    {
      "name": "家电",
      "inflow": 0.15,
      "pct": 1.5
    },
    {
      "name": "计算机",
      "inflow": 0.11,
      "pct": 5.73
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.85
    }
  ],
  "sectors": [
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.67,
      "changePct": 7.12,
      "change": 0.111,
      "turnover": 2.31
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.85,
      "changePct": 6.92,
      "change": 0.055,
      "turnover": 8.92
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.008,
      "changePct": 6.33,
      "change": 0.06,
      "turnover": 4.71
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.18,
      "changePct": 5.73,
      "change": 0.064,
      "turnover": 0.37
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.582,
      "changePct": 4.86,
      "change": 0.027,
      "turnover": 56.14
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.92,
      "changePct": 4.43,
      "change": 0.039,
      "turnover": 18.89
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.106,
      "changePct": 4.24,
      "change": 0.045,
      "turnover": 1.39
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.805,
      "changePct": 3.87,
      "change": 0.03,
      "turnover": 0.7
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.992,
      "changePct": 3.55,
      "change": 0.034,
      "turnover": 30.13
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.118,
      "changePct": 3.52,
      "change": 0.038,
      "turnover": 17.61
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.792,
      "changePct": 2.58,
      "change": 0.045,
      "turnover": 8.45
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.093,
      "changePct": 1.86,
      "change": 0.02,
      "turnover": 3.88
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.843,
      "changePct": 1.57,
      "change": 0.013,
      "turnover": 8.55
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.33,
      "changePct": 1.54,
      "change": 0.005,
      "turnover": 6.11
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.424,
      "changePct": 1.5,
      "change": 0.021,
      "turnover": 0.5
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.816,
      "changePct": 1.49,
      "change": 0.012,
      "turnover": 1.95
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.188,
      "changePct": 1.19,
      "change": 0.014,
      "turnover": 0.97
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.619,
      "changePct": 1.0,
      "change": 0.016,
      "turnover": 1.42
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.436,
      "changePct": 0.87,
      "change": 0.021,
      "turnover": 2.51
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.069,
      "changePct": 0.85,
      "change": 0.009,
      "turnover": 0.08
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.18,
      "changePct": 0.43,
      "change": 0.005,
      "turnover": 0.96
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.27,
      "change": 0.001,
      "turnover": 4.09
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.453,
      "changePct": 0.22,
      "change": 0.001,
      "turnover": 9.41
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.523,
      "changePct": 0.19,
      "change": 0.001,
      "turnover": 0.36
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.529,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 8.98
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.729,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.6
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.199,
      "changePct": -0.17,
      "change": -0.002,
      "turnover": 5.45
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.836,
      "changePct": -0.48,
      "change": -0.004,
      "turnover": 15.56
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.728,
      "changePct": 3.54,
      "amount": 154.72,
      "netFlow": 38.68
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.5,
      "changePct": 2.24,
      "amount": 75.41,
      "netFlow": 18.85
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.653,
      "changePct": 1.04,
      "amount": 70.17,
      "netFlow": 17.54
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.992,
      "changePct": 3.55,
      "amount": 30.13,
      "netFlow": 7.53
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.033,
      "changePct": 0.23,
      "amount": 20.47,
      "netFlow": 5.12
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.851,
      "changePct": 1.1,
      "amount": 12.5,
      "netFlow": 3.13
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.514,
      "changePct": 0.92,
      "amount": 12.51,
      "netFlow": 3.13
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.27,
      "amount": 4.09,
      "netFlow": 1.02
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.436,
      "changePct": 0.87,
      "amount": 2.51,
      "netFlow": 0.63
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.529,
      "changePct": 0.0,
      "amount": 8.98,
      "netFlow": -2.24
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.653,
      "changePct": 1.04,
      "amount": 70.17,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.033,
      "changePct": 0.23,
      "amount": 20.47,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.5,
      "changePct": 2.24,
      "amount": 75.41,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.851,
      "changePct": 1.1,
      "amount": 12.5,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.514,
      "changePct": 0.92,
      "amount": 12.51,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "云计算",
      "turnover": 2.31,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 8.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 4.71,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 56.14,
      "percentile": 95,
      "level": "极高",
      "status": "极度过热"
    },
    {
      "name": "5G",
      "turnover": 18.89,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "游戏",
      "turnover": 1.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.7,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 30.13,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "芯片",
      "turnover": 17.61,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "有色",
      "turnover": 8.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.88,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 8.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 6.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.5,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.95,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.97,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 2.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.08,
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
      "nav": 3.793,
      "ret1w": 4.32,
      "ret1m": -6.8,
      "ret3m": -27.88,
      "ret6m": -20.07,
      "ret1y": -12.97,
      "ret2y": 34.46,
      "ret3y": 109.38
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.9011,
      "ret1w": 3.47,
      "ret1m": -8.04,
      "ret3m": -24.44,
      "ret6m": -17.81,
      "ret1y": -3.06,
      "ret2y": 12.9,
      "ret3y": 53.63
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.1872,
      "ret1w": 5.5,
      "ret1m": -13.76,
      "ret3m": -40.03,
      "ret6m": -14.37,
      "ret1y": 1.07,
      "ret2y": 76.98,
      "ret3y": 156.25
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7418,
      "ret1w": -0.11,
      "ret1m": 6.69,
      "ret3m": 15.11,
      "ret6m": -1.81,
      "ret1y": -6.09,
      "ret2y": -6.35,
      "ret3y": 12.94
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.2136,
      "ret1w": -0.04,
      "ret1m": 5.17,
      "ret3m": -6.47,
      "ret6m": -21.27,
      "ret1y": -24.73,
      "ret2y": -4.43,
      "ret3y": 13.4
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7661,
      "ret1w": 0.57,
      "ret1m": 6.13,
      "ret3m": 0.02,
      "ret6m": -18.22,
      "ret1y": -29.66,
      "ret2y": -4.18,
      "ret3y": 27.23
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.6074,
      "ret1w": -0.71,
      "ret1m": 3.46,
      "ret3m": 11.32,
      "ret6m": -1.5,
      "ret1y": -4.98,
      "ret2y": 26.51,
      "ret3y": 51.56
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.765,
      "ret1w": 2.32,
      "ret1m": 1.61,
      "ret3m": -19.3,
      "ret6m": -14.4,
      "ret1y": -11.71,
      "ret2y": 8.62,
      "ret3y": 50.85
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2875,
      "ret1w": 1.58,
      "ret1m": -1.52,
      "ret3m": -14.7,
      "ret6m": -9.59,
      "ret1y": -4.47,
      "ret2y": 13.49,
      "ret3y": 35.19
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.236,
      "ret1w": 2.89,
      "ret1m": -8.66,
      "ret3m": -27.7,
      "ret6m": 6.24,
      "ret1y": 24.99,
      "ret2y": 119.24,
      "ret3y": 228.86
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.135,
      "ret1w": 0.27,
      "ret1m": 7.18,
      "ret3m": 13.96,
      "ret6m": -2.83,
      "ret1y": -6.89,
      "ret2y": -8.17,
      "ret3y": -0.26
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.303,
      "ret1w": 1.68,
      "ret1m": 5.5,
      "ret3m": 3.69,
      "ret6m": -13.84,
      "ret1y": -19.92,
      "ret2y": -15.11,
      "ret3y": 25.71
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.7174,
      "ret1w": 1.33,
      "ret1m": -12.24,
      "ret3m": -34.49,
      "ret6m": -49.51,
      "ret1y": -47.79,
      "ret2y": -18.88,
      "ret3y": 13.32
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9477,
      "ret1w": -0.23,
      "ret1m": 3.21,
      "ret3m": 3.23,
      "ret6m": 7.14,
      "ret1y": -5.9,
      "ret2y": 3.54,
      "ret3y": 7.93
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.5111,
      "ret1w": 2.43,
      "ret1m": -1.18,
      "ret3m": -17.22,
      "ret6m": -13.39,
      "ret1y": -12.42,
      "ret2y": 8.11,
      "ret3y": 50.12
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.0934,
      "ret1w": 5.06,
      "ret1m": -14.08,
      "ret3m": -41.37,
      "ret6m": -11.69,
      "ret1y": 21.33,
      "ret2y": 77.96,
      "ret3y": 155.48
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5421,
      "ret1w": -0.17,
      "ret1m": 4.22,
      "ret3m": 8.85,
      "ret6m": -7.11,
      "ret1y": -11.12,
      "ret2y": -1.64,
      "ret3y": 17.97
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.993,
      "ret1w": 1.33,
      "ret1m": -4.24,
      "ret3m": -0.2,
      "ret6m": -0.8,
      "ret1y": -3.31,
      "ret2y": -13.12,
      "ret3y": -0.7
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3897,
      "ret1w": -0.97,
      "ret1m": 3.63,
      "ret3m": 10.9,
      "ret6m": -2.35,
      "ret1y": -5.7,
      "ret2y": 13.69,
      "ret3y": 14.56
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2301,
      "ret1w": 1.86,
      "ret1m": 0.94,
      "ret3m": -6.36,
      "ret6m": -5.42,
      "ret1y": -7.43,
      "ret2y": 20.2,
      "ret3y": 61.34
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2411,
      "ret1w": 2.06,
      "ret1m": -2.02,
      "ret3m": -17.31,
      "ret6m": -8.68,
      "ret1y": -4.06,
      "ret2y": 27.76,
      "ret3y": 33.19
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3197,
      "ret1w": 2.06,
      "ret1m": -2.02,
      "ret3m": -17.29,
      "ret6m": -8.61,
      "ret1y": -3.88,
      "ret2y": 28.26,
      "ret3y": 34.25
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.1007,
      "ret1w": 0.16,
      "ret1m": -0.11,
      "ret3m": -1.14,
      "ret6m": 0.69,
      "ret1y": 1.9,
      "ret2y": 3.68,
      "ret3y": 9.32
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0729,
      "ret1w": 0.17,
      "ret1m": -0.09,
      "ret3m": -1.1,
      "ret6m": 0.84,
      "ret1y": 2.21,
      "ret2y": 4.31,
      "ret3y": 10.64
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7406,
      "ret1w": 0.24,
      "ret1m": 3.74,
      "ret3m": 2.66,
      "ret6m": -8.32,
      "ret1y": -12.44,
      "ret2y": -0.71,
      "ret3y": 13.55
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.759,
      "ret1w": 0.24,
      "ret1m": 3.76,
      "ret3m": 2.71,
      "ret6m": -8.2,
      "ret1y": -12.22,
      "ret2y": -0.21,
      "ret3y": 14.7
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.5498,
      "ret1w": 3.99,
      "ret1m": -8.83,
      "ret3m": -28.23,
      "ret6m": -0.38,
      "ret1y": 19.65,
      "ret2y": 86.78,
      "ret3y": 134.92
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4398,
      "ret1w": 1.58,
      "ret1m": -2.06,
      "ret3m": -12.22,
      "ret6m": -4.04,
      "ret1y": -0.18,
      "ret2y": 39.13,
      "ret3y": 74.33
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7266,
      "ret1w": 1.0,
      "ret1m": -0.38,
      "ret3m": -13.96,
      "ret6m": -17.38,
      "ret1y": -18.37,
      "ret2y": -1.42,
      "ret3y": 11.05
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9912,
      "ret1w": 3.65,
      "ret1m": -6.25,
      "ret3m": -23.15,
      "ret6m": 1.4,
      "ret1y": 11.97,
      "ret2y": 62.14,
      "ret3y": 123.37
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5254,
      "ret1w": 0.4,
      "ret1m": -1.59,
      "ret3m": -21.39,
      "ret6m": 1.23,
      "ret1y": 3.49,
      "ret2y": 31.45,
      "ret3y": 41.81
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5353,
      "ret1w": 0.41,
      "ret1m": -1.58,
      "ret3m": -21.36,
      "ret6m": 1.34,
      "ret1y": 3.7,
      "ret2y": 32.01,
      "ret3y": 42.98
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.284,
      "ret1w": -0.16,
      "ret1m": 1.97,
      "ret3m": 3.48,
      "ret6m": -0.75,
      "ret1y": -0.5,
      "ret2y": -0.14,
      "ret3y": 1.62
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1464,
      "ret1w": -0.23,
      "ret1m": 1.04,
      "ret3m": 1.88,
      "ret6m": -0.3,
      "ret1y": -7.47,
      "ret2y": 6.52,
      "ret3y": 21.18
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.373,
      "ret1w": 2.52,
      "ret1m": -3.0,
      "ret3m": -19.48,
      "ret6m": -13.15,
      "ret1y": -4.47,
      "ret2y": -6.71,
      "ret3y": 10.14
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0021,
      "ret1w": -0.12,
      "ret1m": 2.36,
      "ret3m": 2.87,
      "ret6m": -7.97,
      "ret1y": -8.83,
      "ret2y": 24.8,
      "ret3y": 40.67
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.149,
      "ret1w": 3.76,
      "ret1m": -15.62,
      "ret3m": -37.2,
      "ret6m": -11.82,
      "ret1y": 28.01,
      "ret2y": 126.22,
      "ret3y": 174.06
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5119,
      "ret1w": -0.56,
      "ret1m": 2.71,
      "ret3m": 10.95,
      "ret6m": 1.11,
      "ret1y": 2.43,
      "ret2y": 1.48,
      "ret3y": 9.35
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5654,
      "ret1w": 4.03,
      "ret1m": -3.0,
      "ret3m": -33.86,
      "ret6m": -19.71,
      "ret1y": -22.58,
      "ret2y": -0.88,
      "ret3y": 23.26
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 12.766,
      "ret1w": 3.9,
      "ret1m": -5.42,
      "ret3m": -31.88,
      "ret6m": 13.23,
      "ret1y": 46.65,
      "ret2y": 168.42,
      "ret3y": 266.31
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0638,
      "ret1w": 0.16,
      "ret1m": -0.33,
      "ret3m": -2.2,
      "ret6m": -0.39,
      "ret1y": -0.1,
      "ret2y": 1.71,
      "ret3y": 4.26
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.112,
      "ret1w": 0.16,
      "ret1m": -0.32,
      "ret3m": -2.17,
      "ret6m": -0.33,
      "ret1y": 0.02,
      "ret2y": 2.01,
      "ret3y": 4.99
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0635,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.13,
      "ret6m": 0.3,
      "ret1y": 0.79,
      "ret2y": 1.4,
      "ret3y": 2.65
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0975,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.09,
      "ret6m": 0.33,
      "ret1y": 0.8,
      "ret2y": 1.48,
      "ret3y": 3.79
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1067,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.38,
      "ret1y": 0.9,
      "ret2y": 1.68,
      "ret3y": 4.22
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0751,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.18,
      "ret6m": 0.32,
      "ret1y": 0.74,
      "ret2y": 1.25,
      "ret3y": 2.68
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0893,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.2,
      "ret6m": 0.4,
      "ret1y": 0.91,
      "ret2y": 1.57,
      "ret3y": 3.34
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0521,
      "ret1w": 0.48,
      "ret1m": -0.72,
      "ret3m": -5.89,
      "ret6m": -2.59,
      "ret1y": -0.11,
      "ret2y": 7.74,
      "ret3y": 10.54
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1917,
      "ret1w": 0.61,
      "ret1m": -0.57,
      "ret3m": -7.12,
      "ret6m": -4.05,
      "ret1y": -2.5,
      "ret2y": 0.37,
      "ret3y": 4.29
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0584,
      "ret1w": 0.48,
      "ret1m": -0.7,
      "ret3m": -5.86,
      "ret6m": -2.48,
      "ret1y": 0.09,
      "ret2y": 8.19,
      "ret3y": 11.45
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0442,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.1,
      "ret6m": 0.37,
      "ret1y": 0.86,
      "ret2y": 1.63,
      "ret3y": 3.49
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1581,
      "ret1w": 0.12,
      "ret1m": -1.22,
      "ret3m": -4.23,
      "ret6m": -4.42,
      "ret1y": -3.71,
      "ret2y": 2.11,
      "ret3y": 7.85
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2195,
      "ret1w": 0.15,
      "ret1m": 0.43,
      "ret3m": -0.51,
      "ret6m": -0.94,
      "ret1y": 0.5,
      "ret2y": 6.82,
      "ret3y": 14.15
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1282,
      "ret1w": 0.12,
      "ret1m": -0.45,
      "ret3m": -3.75,
      "ret6m": -1.17,
      "ret1y": -0.41,
      "ret2y": 4.8,
      "ret3y": 8.3
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1985,
      "ret1w": 0.12,
      "ret1m": -0.44,
      "ret3m": -3.72,
      "ret6m": -1.08,
      "ret1y": -0.22,
      "ret2y": 5.22,
      "ret3y": 9.21
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.122,
      "ret1w": 7.88,
      "ret1m": -13.32,
      "ret3m": -25.47,
      "ret6m": 1.87,
      "ret1y": 31.31,
      "ret2y": 78.77,
      "ret3y": 120.12
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.907,
      "ret1w": 1.87,
      "ret1m": 0.46,
      "ret3m": -0.2,
      "ret6m": 1.33,
      "ret1y": 1.86,
      "ret2y": 11.02,
      "ret3y": 35.66
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8609,
      "ret1w": -0.69,
      "ret1m": -2.48,
      "ret3m": -13.18,
      "ret6m": -12.12,
      "ret1y": -7.3,
      "ret2y": 10.56,
      "ret3y": 57.32
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.1749,
      "ret1w": 3.97,
      "ret1m": -1.46,
      "ret3m": -10.73,
      "ret6m": 1.29,
      "ret1y": 6.48,
      "ret2y": 18.33,
      "ret3y": 62.65
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9366,
      "ret1w": 0.04,
      "ret1m": 0.16,
      "ret3m": -0.84,
      "ret6m": -1.41,
      "ret1y": -2.67,
      "ret2y": -2.84,
      "ret3y": -0.62
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4867,
      "ret1w": 4.73,
      "ret1m": -7.72,
      "ret3m": -20.5,
      "ret6m": 0.88,
      "ret1y": 17.6,
      "ret2y": 47.19,
      "ret3y": 90.39
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.476,
      "ret1w": 1.06,
      "ret1m": -1.34,
      "ret3m": -4.22,
      "ret6m": -0.51,
      "ret1y": -0.78,
      "ret2y": 3.85,
      "ret3y": 21.5
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.165,
      "ret1w": -2.18,
      "ret1m": -4.66,
      "ret3m": 4.11,
      "ret6m": -14.28,
      "ret1y": -11.07,
      "ret2y": -18.36,
      "ret3y": 116.54
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.858,
      "ret1w": -3.27,
      "ret1m": -11.0,
      "ret3m": -12.98,
      "ret6m": -21.07,
      "ret1y": -20.85,
      "ret2y": -27.16,
      "ret3y": 35.12
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.5507,
      "ret1w": 0.57,
      "ret1m": -11.48,
      "ret3m": -21.15,
      "ret6m": -2.63,
      "ret1y": 22.17,
      "ret2y": 76.45,
      "ret3y": 115.07
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4582,
      "ret1w": 1.84,
      "ret1m": -0.22,
      "ret3m": 6.28,
      "ret6m": -5.57,
      "ret1y": -0.08,
      "ret2y": 34.41,
      "ret3y": 42.53
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6234,
      "ret1w": 1.39,
      "ret1m": -4.47,
      "ret3m": -5.85,
      "ret6m": 1.77,
      "ret1y": 3.06,
      "ret2y": 24.69,
      "ret3y": 51.38
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2181,
      "ret1w": -0.02,
      "ret1m": -6.02,
      "ret3m": -8.28,
      "ret6m": -4.28,
      "ret1y": -3.97,
      "ret2y": 11.58,
      "ret3y": 31.62
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.335,
      "ret1w": -1.4,
      "ret1m": 0.23,
      "ret3m": 1.52,
      "ret6m": 1.06,
      "ret1y": 8.54,
      "ret2y": 6.37,
      "ret3y": -2.63
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.975,
      "ret1w": 1.75,
      "ret1m": 1.28,
      "ret3m": 1.49,
      "ret6m": -11.87,
      "ret1y": -18.08,
      "ret2y": 15.84,
      "ret3y": 51.75
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0092,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.09,
      "ret6m": 0.57,
      "ret1y": 1.46,
      "ret2y": 1.57,
      "ret3y": 3.41
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.008,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.05,
      "ret6m": 0.55,
      "ret1y": 1.47,
      "ret2y": 1.63,
      "ret3y": 3.59
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.423,
      "ret1w": 1.43,
      "ret1m": -2.53,
      "ret3m": -11.94,
      "ret6m": -6.07,
      "ret1y": -1.32,
      "ret2y": 13.93,
      "ret3y": 30.67
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.751,
      "ret1w": 1.96,
      "ret1m": -2.1,
      "ret3m": -14.43,
      "ret6m": -7.81,
      "ret1y": -3.54,
      "ret2y": 24.82,
      "ret3y": 51.74
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.6106,
      "ret1w": 1.11,
      "ret1m": 2.36,
      "ret3m": -1.24,
      "ret6m": -11.79,
      "ret1y": -16.7,
      "ret2y": 40.28,
      "ret3y": 58.52
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.107,
      "ret1w": 0.9,
      "ret1m": -0.94,
      "ret3m": -8.08,
      "ret6m": -2.66,
      "ret1y": 2.41,
      "ret2y": 18.42,
      "ret3y": 38.06
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1665,
      "ret1w": 0.9,
      "ret1m": -0.94,
      "ret3m": -8.04,
      "ret6m": -2.56,
      "ret1y": 2.61,
      "ret2y": 18.9,
      "ret3y": 39.17
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9379,
      "ret1w": 2.4,
      "ret1m": -0.57,
      "ret3m": -16.24,
      "ret6m": -9.24,
      "ret1y": -9.44,
      "ret2y": 20.17,
      "ret3y": 52.75
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7899,
      "ret1w": 0.83,
      "ret1m": -1.21,
      "ret3m": -7.14,
      "ret6m": -3.61,
      "ret1y": -1.55,
      "ret2y": 13.07,
      "ret3y": 35.1
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5745,
      "ret1w": 0.79,
      "ret1m": 2.11,
      "ret3m": -2.6,
      "ret6m": -6.24,
      "ret1y": -6.11,
      "ret2y": 20.67,
      "ret3y": 49.06
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9532,
      "ret1w": 2.03,
      "ret1m": -4.68,
      "ret3m": -20.37,
      "ret6m": -3.32,
      "ret1y": 5.0,
      "ret2y": 34.98,
      "ret3y": 68.05
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1862,
      "ret1w": -0.51,
      "ret1m": 1.72,
      "ret3m": 7.94,
      "ret6m": -1.62,
      "ret1y": -0.34,
      "ret2y": 11.04,
      "ret3y": 28.72
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5177,
      "ret1w": 0.32,
      "ret1m": 1.98,
      "ret3m": 3.95,
      "ret6m": 2.58,
      "ret1y": 1.88,
      "ret2y": 13.93,
      "ret3y": 31.94
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3032,
      "ret1w": 3.19,
      "ret1m": -1.3,
      "ret3m": -6.86,
      "ret6m": 1.27,
      "ret1y": 6.62,
      "ret2y": 12.93,
      "ret3y": 38.36
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7506,
      "ret1w": 1.66,
      "ret1m": -2.13,
      "ret3m": -13.17,
      "ret6m": -6.73,
      "ret1y": 2.24,
      "ret2y": 25.19,
      "ret3y": 52.66
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1365,
      "ret1w": 0.45,
      "ret1m": -4.25,
      "ret3m": -16.95,
      "ret6m": -7.22,
      "ret1y": -6.65,
      "ret2y": 16.61,
      "ret3y": 42.9
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1381,
      "ret1w": 0.44,
      "ret1m": -4.25,
      "ret3m": -16.87,
      "ret6m": -7.22,
      "ret1y": -6.68,
      "ret2y": 15.75,
      "ret3y": 42.44
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3294,
      "ret1w": -2.91,
      "ret1m": -5.25,
      "ret3m": -18.94,
      "ret6m": -12.79,
      "ret1y": -11.72,
      "ret2y": 4.37,
      "ret3y": 32.4
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3593,
      "ret1w": -2.91,
      "ret1m": -5.24,
      "ret3m": -18.92,
      "ret6m": -12.7,
      "ret1y": -11.54,
      "ret2y": 4.8,
      "ret3y": 33.46
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.9539,
      "ret1w": -4.28,
      "ret1m": -7.8,
      "ret3m": -27.24,
      "ret6m": -8.64,
      "ret1y": -5.02,
      "ret2y": 18.27,
      "ret3y": 56.4
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1687,
      "ret1w": 0.13,
      "ret1m": 0.27,
      "ret3m": -0.14,
      "ret6m": 0.03,
      "ret1y": -0.09,
      "ret2y": 2.75,
      "ret3y": 7.51
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1883,
      "ret1w": 0.13,
      "ret1m": 0.27,
      "ret3m": -0.11,
      "ret6m": 0.1,
      "ret1y": 0.07,
      "ret2y": 3.06,
      "ret3y": 8.16
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0832,
      "ret1w": 0.02,
      "ret1m": 0.07,
      "ret3m": 0.16,
      "ret6m": 0.39,
      "ret1y": 0.95,
      "ret2y": 1.71,
      "ret3y": 3.25
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4108,
      "ret1w": 0.01,
      "ret1m": 0.0,
      "ret3m": 0.13,
      "ret6m": 0.07,
      "ret1y": 0.23,
      "ret2y": 0.92,
      "ret3y": 9.52
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4626,
      "ret1w": 0.01,
      "ret1m": 0.01,
      "ret3m": 0.18,
      "ret6m": 0.18,
      "ret1y": 0.43,
      "ret2y": 1.32,
      "ret3y": 10.4
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0853,
      "ret1w": 1.26,
      "ret1m": -0.85,
      "ret3m": -7.79,
      "ret6m": 7.72,
      "ret1y": 8.39,
      "ret2y": 31.81,
      "ret3y": 61.05
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2441,
      "ret1w": 0.1,
      "ret1m": 0.74,
      "ret3m": -2.9,
      "ret6m": 1.45,
      "ret1y": 3.84,
      "ret2y": 16.6,
      "ret3y": 48.23
    }
  ],
  "fundHistories": {
    "671030": [
      {
        "date": "2026-07-06",
        "nav": 5.2443
      },
      {
        "date": "2026-07-07",
        "nav": 5.1419
      },
      {
        "date": "2026-07-08",
        "nav": 4.982
      },
      {
        "date": "2026-07-09",
        "nav": 5.1592
      },
      {
        "date": "2026-07-10",
        "nav": 5.0568
      },
      {
        "date": "2026-07-13",
        "nav": 4.7776
      },
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
      }
    ],
    "580008": [
      {
        "date": "2026-07-06",
        "nav": 4.6416
      },
      {
        "date": "2026-07-07",
        "nav": 4.6155
      },
      {
        "date": "2026-07-08",
        "nav": 4.609
      },
      {
        "date": "2026-07-09",
        "nav": 4.8515
      },
      {
        "date": "2026-07-10",
        "nav": 4.6586
      },
      {
        "date": "2026-07-13",
        "nav": 4.5423
      },
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
      }
    ],
    "540010": [
      {
        "date": "2026-07-06",
        "nav": 5.898
      },
      {
        "date": "2026-07-07",
        "nav": 5.8795
      },
      {
        "date": "2026-07-08",
        "nav": 5.8127
      },
      {
        "date": "2026-07-09",
        "nav": 6.203
      },
      {
        "date": "2026-07-10",
        "nav": 5.9455
      },
      {
        "date": "2026-07-13",
        "nav": 5.6656
      },
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
      }
    ],
    "540009": [
      {
        "date": "2026-07-06",
        "nav": 0.6763
      },
      {
        "date": "2026-07-07",
        "nav": 0.67
      },
      {
        "date": "2026-07-08",
        "nav": 0.663
      },
      {
        "date": "2026-07-09",
        "nav": 0.6553
      },
      {
        "date": "2026-07-10",
        "nav": 0.6633
      },
      {
        "date": "2026-07-13",
        "nav": 0.6628
      },
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
      }
    ],
    "540008": [
      {
        "date": "2026-07-06",
        "nav": 2.257
      },
      {
        "date": "2026-07-07",
        "nav": 2.2185
      },
      {
        "date": "2026-07-08",
        "nav": 2.1393
      },
      {
        "date": "2026-07-09",
        "nav": 2.1506
      },
      {
        "date": "2026-07-10",
        "nav": 2.1811
      },
      {
        "date": "2026-07-13",
        "nav": 2.0534
      },
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
      }
    ],
    "540007": [
      {
        "date": "2026-07-06",
        "nav": 2.768
      },
      {
        "date": "2026-07-07",
        "nav": 2.709
      },
      {
        "date": "2026-07-08",
        "nav": 2.6416
      },
      {
        "date": "2026-07-09",
        "nav": 2.6197
      },
      {
        "date": "2026-07-10",
        "nav": 2.676
      },
      {
        "date": "2026-07-13",
        "nav": 2.5755
      },
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
      }
    ],
    "540006": [
      {
        "date": "2026-07-06",
        "nav": 5.2736
      },
      {
        "date": "2026-07-07",
        "nav": 5.2141
      },
      {
        "date": "2026-07-08",
        "nav": 5.15
      },
      {
        "date": "2026-07-09",
        "nav": 5.1217
      },
      {
        "date": "2026-07-10",
        "nav": 5.1429
      },
      {
        "date": "2026-07-13",
        "nav": 5.0998
      },
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
      }
    ],
    "519975": [
      {
        "date": "2026-07-06",
        "nav": 2.186
      },
      {
        "date": "2026-07-07",
        "nav": 2.13
      },
      {
        "date": "2026-07-08",
        "nav": 2.059
      },
      {
        "date": "2026-07-09",
        "nav": 2.081
      },
      {
        "date": "2026-07-10",
        "nav": 2.066
      },
      {
        "date": "2026-07-13",
        "nav": 1.941
      },
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
      }
    ],
    "519935": [
      {
        "date": "2026-07-06",
        "nav": 4.066
      },
      {
        "date": "2026-07-07",
        "nav": 4.039
      },
      {
        "date": "2026-07-08",
        "nav": 4.001
      },
      {
        "date": "2026-07-09",
        "nav": 4.226
      },
      {
        "date": "2026-07-10",
        "nav": 4.003
      },
      {
        "date": "2026-07-13",
        "nav": 3.854
      },
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
      }
    ],
    "519714": [
      {
        "date": "2026-07-06",
        "nav": 1.04
      },
      {
        "date": "2026-07-07",
        "nav": 1.02
      },
      {
        "date": "2026-07-08",
        "nav": 1.02
      },
      {
        "date": "2026-07-09",
        "nav": 1.004
      },
      {
        "date": "2026-07-10",
        "nav": 1.019
      },
      {
        "date": "2026-07-13",
        "nav": 1.014
      },
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
      }
    ],
    "519673": [
      {
        "date": "2026-07-06",
        "nav": 2.295
      },
      {
        "date": "2026-07-07",
        "nav": 2.213
      },
      {
        "date": "2026-07-08",
        "nav": 2.203
      },
      {
        "date": "2026-07-09",
        "nav": 2.189
      },
      {
        "date": "2026-07-10",
        "nav": 2.247
      },
      {
        "date": "2026-07-13",
        "nav": 2.222
      },
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
      }
    ],
    "519606": [
      {
        "date": "2026-07-06",
        "nav": 2.2938
      },
      {
        "date": "2026-07-07",
        "nav": 2.312
      },
      {
        "date": "2026-07-08",
        "nav": 2.2876
      },
      {
        "date": "2026-07-09",
        "nav": 2.4491
      },
      {
        "date": "2026-07-10",
        "nav": 2.2527
      },
      {
        "date": "2026-07-13",
        "nav": 2.1904
      },
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
      }
    ],
    "519193": [
      {
        "date": "2026-07-06",
        "nav": 1.8852
      },
      {
        "date": "2026-07-07",
        "nav": 1.8702
      },
      {
        "date": "2026-07-08",
        "nav": 1.8577
      },
      {
        "date": "2026-07-09",
        "nav": 1.8657
      },
      {
        "date": "2026-07-10",
        "nav": 1.8628
      },
      {
        "date": "2026-07-13",
        "nav": 1.8503
      },
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
      }
    ],
    "501219": [
      {
        "date": "2026-07-06",
        "nav": 1.7801
      },
      {
        "date": "2026-07-07",
        "nav": 1.7435
      },
      {
        "date": "2026-07-08",
        "nav": 1.713
      },
      {
        "date": "2026-07-09",
        "nav": 1.76
      },
      {
        "date": "2026-07-10",
        "nav": 1.7315
      },
      {
        "date": "2026-07-13",
        "nav": 1.6482
      },
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
      }
    ],
    "501201": [
      {
        "date": "2026-07-06",
        "nav": 3.0831
      },
      {
        "date": "2026-07-07",
        "nav": 3.0626
      },
      {
        "date": "2026-07-08",
        "nav": 3.036
      },
      {
        "date": "2026-07-09",
        "nav": 3.2568
      },
      {
        "date": "2026-07-10",
        "nav": 3.0564
      },
      {
        "date": "2026-07-13",
        "nav": 2.9075
      },
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
      }
    ],
    "450009": [
      {
        "date": "2026-07-06",
        "nav": 2.4136
      },
      {
        "date": "2026-07-07",
        "nav": 2.3634
      },
      {
        "date": "2026-07-08",
        "nav": 2.3674
      },
      {
        "date": "2026-07-09",
        "nav": 2.3599
      },
      {
        "date": "2026-07-10",
        "nav": 2.396
      },
      {
        "date": "2026-07-13",
        "nav": 2.3818
      },
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
      }
    ],
    "399011": [
      {
        "date": "2026-07-06",
        "nav": 1.102
      },
      {
        "date": "2026-07-07",
        "nav": 1.042
      },
      {
        "date": "2026-07-08",
        "nav": 1.015
      },
      {
        "date": "2026-07-09",
        "nav": 1.048
      },
      {
        "date": "2026-07-10",
        "nav": 1.078
      },
      {
        "date": "2026-07-13",
        "nav": 1.064
      },
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
      }
    ],
    "376510": [
      {
        "date": "2026-07-06",
        "nav": 2.2243
      },
      {
        "date": "2026-07-07",
        "nav": 2.204
      },
      {
        "date": "2026-07-08",
        "nav": 2.2014
      },
      {
        "date": "2026-07-09",
        "nav": 2.1888
      },
      {
        "date": "2026-07-10",
        "nav": 2.192
      },
      {
        "date": "2026-07-13",
        "nav": 2.2143
      },
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
      }
    ],
    "360001": [
      {
        "date": "2026-07-06",
        "nav": 1.3189
      },
      {
        "date": "2026-07-07",
        "nav": 1.3006
      },
      {
        "date": "2026-07-08",
        "nav": 1.2896
      },
      {
        "date": "2026-07-09",
        "nav": 1.3136
      },
      {
        "date": "2026-07-10",
        "nav": 1.3095
      },
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
      }
    ],
    "970185": [
      {
        "date": "2026-07-06",
        "nav": 1.4552
      },
      {
        "date": "2026-07-07",
        "nav": 1.4293
      },
      {
        "date": "2026-07-08",
        "nav": 1.3891
      },
      {
        "date": "2026-07-09",
        "nav": 1.4216
      },
      {
        "date": "2026-07-10",
        "nav": 1.3881
      },
      {
        "date": "2026-07-13",
        "nav": 1.3374
      },
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
      }
    ],
    "970184": [
      {
        "date": "2026-07-06",
        "nav": 1.547
      },
      {
        "date": "2026-07-07",
        "nav": 1.5194
      },
      {
        "date": "2026-07-08",
        "nav": 1.4768
      },
      {
        "date": "2026-07-09",
        "nav": 1.5113
      },
      {
        "date": "2026-07-10",
        "nav": 1.4757
      },
      {
        "date": "2026-07-13",
        "nav": 1.4218
      },
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
      }
    ],
    "970121": [
      {
        "date": "2026-07-06",
        "nav": 1.1083
      },
      {
        "date": "2026-07-07",
        "nav": 1.104
      },
      {
        "date": "2026-07-08",
        "nav": 1.1031
      },
      {
        "date": "2026-07-09",
        "nav": 1.1082
      },
      {
        "date": "2026-07-10",
        "nav": 1.1006
      },
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
      }
    ],
    "970119": [
      {
        "date": "2026-07-06",
        "nav": 1.0799
      },
      {
        "date": "2026-07-07",
        "nav": 1.0757
      },
      {
        "date": "2026-07-08",
        "nav": 1.0748
      },
      {
        "date": "2026-07-09",
        "nav": 1.0798
      },
      {
        "date": "2026-07-10",
        "nav": 1.0724
      },
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
      }
    ],
    "970069": [
      {
        "date": "2026-07-06",
        "nav": 0.7367
      },
      {
        "date": "2026-07-07",
        "nav": 0.7272
      },
      {
        "date": "2026-07-08",
        "nav": 0.7192
      },
      {
        "date": "2026-07-09",
        "nav": 0.7119
      },
      {
        "date": "2026-07-10",
        "nav": 0.7147
      },
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
      }
    ],
    "959991": [
      {
        "date": "2026-07-06",
        "nav": 3.1464
      },
      {
        "date": "2026-07-07",
        "nav": 3.1487
      },
      {
        "date": "2026-07-08",
        "nav": 3.1066
      },
      {
        "date": "2026-07-09",
        "nav": 3.3068
      },
      {
        "date": "2026-07-10",
        "nav": 3.1443
      },
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
      }
    ],
    "952099": [
      {
        "date": "2026-07-06",
        "nav": 2.7132
      },
      {
        "date": "2026-07-07",
        "nav": 2.6694
      },
      {
        "date": "2026-07-08",
        "nav": 2.6565
      },
      {
        "date": "2026-07-09",
        "nav": 2.7261
      },
      {
        "date": "2026-07-10",
        "nav": 2.7017
      },
      {
        "date": "2026-07-13",
        "nav": 2.642
      },
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
      }
    ],
    "952035": [
      {
        "date": "2026-07-06",
        "nav": 0.8208
      },
      {
        "date": "2026-07-07",
        "nav": 0.8097
      },
      {
        "date": "2026-07-08",
        "nav": 0.8024
      },
      {
        "date": "2026-07-09",
        "nav": 0.8137
      },
      {
        "date": "2026-07-10",
        "nav": 0.7979
      },
      {
        "date": "2026-07-13",
        "nav": 0.7823
      },
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
      }
    ],
    "952004": [
      {
        "date": "2026-07-06",
        "nav": 4.8156
      },
      {
        "date": "2026-07-07",
        "nav": 4.7867
      },
      {
        "date": "2026-07-08",
        "nav": 4.8038
      },
      {
        "date": "2026-07-09",
        "nav": 5.0246
      },
      {
        "date": "2026-07-10",
        "nav": 4.8878
      },
      {
        "date": "2026-07-13",
        "nav": 4.7671
      },
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
      }
    ],
    "881007": [
      {
        "date": "2026-07-06",
        "nav": 0.6153
      },
      {
        "date": "2026-07-07",
        "nav": 0.6049
      },
      {
        "date": "2026-07-08",
        "nav": 0.595
      },
      {
        "date": "2026-07-09",
        "nav": 0.6199
      },
      {
        "date": "2026-07-10",
        "nav": 0.5961
      },
      {
        "date": "2026-07-13",
        "nav": 0.5701
      },
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
      }
    ],
    "880007": [
      {
        "date": "2026-07-06",
        "nav": 0.6267
      },
      {
        "date": "2026-07-07",
        "nav": 0.6161
      },
      {
        "date": "2026-07-08",
        "nav": 0.606
      },
      {
        "date": "2026-07-09",
        "nav": 0.6314
      },
      {
        "date": "2026-07-10",
        "nav": 0.6072
      },
      {
        "date": "2026-07-13",
        "nav": 0.5807
      },
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
      }
    ],
    "770001": [
      {
        "date": "2026-07-06",
        "nav": 1.25
      },
      {
        "date": "2026-07-07",
        "nav": 1.2419
      },
      {
        "date": "2026-07-08",
        "nav": 1.24
      },
      {
        "date": "2026-07-09",
        "nav": 1.2393
      },
      {
        "date": "2026-07-10",
        "nav": 1.2356
      },
      {
        "date": "2026-07-13",
        "nav": 1.2377
      },
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
      }
    ],
    "762001": [
      {
        "date": "2026-07-06",
        "nav": 1.1436
      },
      {
        "date": "2026-07-07",
        "nav": 1.134
      },
      {
        "date": "2026-07-08",
        "nav": 1.1271
      },
      {
        "date": "2026-07-09",
        "nav": 1.1348
      },
      {
        "date": "2026-07-10",
        "nav": 1.1306
      },
      {
        "date": "2026-07-13",
        "nav": 1.1294
      },
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
      }
    ],
    "750005": [
      {
        "date": "2026-07-06",
        "nav": 1.6595
      },
      {
        "date": "2026-07-07",
        "nav": 1.6336
      },
      {
        "date": "2026-07-08",
        "nav": 1.5976
      },
      {
        "date": "2026-07-09",
        "nav": 1.6369
      },
      {
        "date": "2026-07-10",
        "nav": 1.585
      },
      {
        "date": "2026-07-13",
        "nav": 1.5322
      },
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
      }
    ],
    "750001": [
      {
        "date": "2026-07-06",
        "nav": 2.9011
      },
      {
        "date": "2026-07-07",
        "nav": 2.8817
      },
      {
        "date": "2026-07-08",
        "nav": 2.856
      },
      {
        "date": "2026-07-09",
        "nav": 2.8985
      },
      {
        "date": "2026-07-10",
        "nav": 2.8451
      },
      {
        "date": "2026-07-13",
        "nav": 2.8259
      },
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
      }
    ],
    "740001": [
      {
        "date": "2026-07-06",
        "nav": 4.309
      },
      {
        "date": "2026-07-07",
        "nav": 4.348
      },
      {
        "date": "2026-07-08",
        "nav": 4.326
      },
      {
        "date": "2026-07-09",
        "nav": 4.64
      },
      {
        "date": "2026-07-10",
        "nav": 4.392
      },
      {
        "date": "2026-07-13",
        "nav": 4.263
      },
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
      }
    ],
    "730002": [
      {
        "date": "2026-07-06",
        "nav": 1.4158
      },
      {
        "date": "2026-07-07",
        "nav": 1.406
      },
      {
        "date": "2026-07-08",
        "nav": 1.4165
      },
      {
        "date": "2026-07-09",
        "nav": 1.407
      },
      {
        "date": "2026-07-10",
        "nav": 1.4072
      },
      {
        "date": "2026-07-13",
        "nav": 1.4283
      },
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
      }
    ],
    "730001": [
      {
        "date": "2026-07-06",
        "nav": 0.8147
      },
      {
        "date": "2026-07-07",
        "nav": 0.7907
      },
      {
        "date": "2026-07-08",
        "nav": 0.764
      },
      {
        "date": "2026-07-09",
        "nav": 0.7999
      },
      {
        "date": "2026-07-10",
        "nav": 0.8285
      },
      {
        "date": "2026-07-13",
        "nav": 0.7612
      },
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
      }
    ],
    "720001": [
      {
        "date": "2026-07-06",
        "nav": 16.748
      },
      {
        "date": "2026-07-07",
        "nav": 16.748
      },
      {
        "date": "2026-07-08",
        "nav": 16.198
      },
      {
        "date": "2026-07-09",
        "nav": 16.902
      },
      {
        "date": "2026-07-10",
        "nav": 16.228
      },
      {
        "date": "2026-07-13",
        "nav": 15.322
      },
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.34,
      "nav": 3.793,
      "price": 3.793,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.4,
      "nav": 3.9011,
      "price": 3.9011,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.69,
      "nav": 4.1872,
      "price": 4.1872,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.33,
      "nav": 0.7418,
      "price": 0.7418,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 2.2136,
      "price": 2.2136,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.31,
      "nav": 2.7661,
      "price": 2.7661,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.17,
      "nav": 5.6074,
      "price": 5.6074,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 1.765,
      "price": 1.765,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.2875,
      "price": 1.2875,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.43,
      "nav": 3.236,
      "price": 3.236,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.36,
      "nav": 1.135,
      "price": 1.135,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.28,
      "nav": 2.303,
      "price": 2.303,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.61,
      "nav": 1.7174,
      "price": 1.7174,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.9477,
      "price": 1.9477,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.5111,
      "price": 1.5111,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.7,
      "nav": 2.0934,
      "price": 2.0934,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 2.5421,
      "price": 2.5421,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 0.993,
      "price": 0.993,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.18,
      "nav": 2.3897,
      "price": 2.3897,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.2301,
      "price": 1.2301,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.2,
      "sharpe": -1.1,
      "calmar": -1.1
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 12.06,
      "sharpe": -0.23,
      "calmar": -0.23
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 20.64,
      "sharpe": 0.06,
      "calmar": 0.06
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 10.04,
      "sharpe": -0.52,
      "calmar": -0.52
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 7.75,
      "sharpe": -2.43,
      "calmar": -2.43
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 9.2,
      "sharpe": -2.66,
      "calmar": -2.66
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 5.19,
      "sharpe": -0.59,
      "calmar": -0.59
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.42,
      "sharpe": -1.77,
      "calmar": -1.77
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 2.28,
      "sharpe": -0.69,
      "calmar": -0.69
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 12.99,
      "sharpe": 1.83,
      "calmar": 1.83
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 10.77,
      "sharpe": -0.57,
      "calmar": -0.57
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 8.25,
      "sharpe": -1.9,
      "calmar": -1.9
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 18.36,
      "sharpe": -2.77,
      "calmar": -2.77
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 4.81,
      "sharpe": -0.72,
      "calmar": -0.72
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 1.77,
      "sharpe": -2.01,
      "calmar": -2.01
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 21.12,
      "sharpe": 1.12,
      "calmar": 1.12
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.33,
      "sharpe": -1.21,
      "calmar": -1.21
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 6.36,
      "sharpe": -0.36,
      "calmar": -0.36
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 5.45,
      "sharpe": -0.66,
      "calmar": -0.66
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.41,
      "sharpe": -1.25,
      "calmar": -1.25
    }
  ],
  "news": [],
  "sentimentIndex": {
    "score": 56,
    "label": "中性",
    "upDownRatio": "4,646/676",
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
