// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-22 15:01:37
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-22 15:01 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-22",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3658.03,
      "change": -55.0,
      "changePct": "-1.48%",
      "high": 3714.48,
      "low": 3649.86,
      "volume": 437691963.0,
      "amount": 706095650000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11357.32,
      "change": -347.03,
      "changePct": "-2.96%",
      "high": 11690.92,
      "low": 11350.96,
      "volume": 525836834.0,
      "amount": 822618050000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2576.9,
      "change": -117.81,
      "changePct": "-4.37%",
      "high": 2688.11,
      "low": 2576.9,
      "volume": 160292629.0,
      "amount": 404051210000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1305.87,
      "change": -37.41,
      "changePct": "-2.78%",
      "high": 1346.96,
      "low": 1302.39,
      "volume": 8427524.0,
      "amount": 72810420000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4036.3,
      "change": -75.63,
      "changePct": "-1.84%",
      "high": 4110.65,
      "low": 4022.87,
      "volume": 178043852.0,
      "amount": 435084140000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6655.25,
      "change": -185.31,
      "changePct": "-2.71%",
      "high": 6842.87,
      "low": 6652.78,
      "volume": 125988061.0,
      "amount": 253792970000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.69万亿",
      "label": "成交额",
      "rawAmount": 2694452440000.0,
      "change": ""
    },
    "upDown": {
      "val": "848/2,576",
      "label": "涨/跌家数",
      "rawUp": 848,
      "rawDown": 2576,
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
    "totalInflow": 1.37,
    "totalOutflow": 0,
    "netFlow": 1.37,
    "netFlowTrend": [
      0.27,
      0.55,
      0.82,
      1.1,
      1.37
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
      "name": "银行",
      "inflow": 2.95,
      "pct": 0.12
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.72
    },
    {
      "name": "计算机",
      "inflow": -0.05,
      "pct": -1.84
    },
    {
      "name": "食品",
      "inflow": -0.06,
      "pct": -1.23
    },
    {
      "name": "家电",
      "inflow": -0.1,
      "pct": -0.97
    },
    {
      "name": "钢铁",
      "inflow": -0.15,
      "pct": -1.55
    },
    {
      "name": "农业",
      "inflow": -0.16,
      "pct": -1.4
    },
    {
      "name": "新能源",
      "inflow": -0.3,
      "pct": -1.97
    },
    {
      "name": "新能源车",
      "inflow": -0.33,
      "pct": -1.93
    },
    {
      "name": "光伏",
      "inflow": -0.41,
      "pct": -1.53
    },
    {
      "name": "军工",
      "inflow": -0.76,
      "pct": -2.35
    },
    {
      "name": "医药",
      "inflow": -1.0,
      "pct": -2.13
    },
    {
      "name": "白酒",
      "inflow": -1.05,
      "pct": -1.22
    },
    {
      "name": "医疗",
      "inflow": -1.12,
      "pct": -1.81
    },
    {
      "name": "创新药",
      "inflow": -1.5,
      "pct": -2.94
    },
    {
      "name": "有色",
      "inflow": -1.66,
      "pct": -2.93
    },
    {
      "name": "芯片",
      "inflow": -1.83,
      "pct": -2.65
    },
    {
      "name": "煤炭",
      "inflow": -2.07,
      "pct": -2.83
    },
    {
      "name": "券商",
      "inflow": -2.63,
      "pct": -1.04
    },
    {
      "name": "半导体",
      "inflow": -3.0,
      "pct": -2.77
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.863,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 9.83
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.963,
      "changePct": -0.72,
      "change": -0.007,
      "turnover": 0.06
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.327,
      "changePct": -0.97,
      "change": -0.013,
      "turnover": 0.35
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.477,
      "changePct": -1.04,
      "change": -0.005,
      "turnover": 8.78
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.404,
      "changePct": -1.22,
      "change": -0.005,
      "turnover": 3.51
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.483,
      "changePct": -1.23,
      "change": -0.006,
      "turnover": 0.21
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.706,
      "changePct": -1.4,
      "change": -0.01,
      "turnover": 0.52
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.706,
      "changePct": -1.53,
      "change": -0.011,
      "turnover": 1.36
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.08,
      "changePct": -1.55,
      "change": -0.017,
      "turnover": 0.51
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.326,
      "changePct": -1.81,
      "change": -0.006,
      "turnover": 3.73
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.015,
      "changePct": -1.84,
      "change": -0.019,
      "turnover": 0.18
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.268,
      "changePct": -1.93,
      "change": -0.025,
      "turnover": 1.11
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.945,
      "changePct": -1.97,
      "change": -0.039,
      "turnover": 1.01
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.368,
      "changePct": -2.13,
      "change": -0.008,
      "turnover": 3.35
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.038,
      "changePct": -2.35,
      "change": -0.025,
      "turnover": 2.52
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.882,
      "changePct": -2.65,
      "change": -0.024,
      "turnover": 6.1
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.808,
      "changePct": -2.77,
      "change": -0.023,
      "turnover": 10.01
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.202,
      "changePct": -2.83,
      "change": -0.035,
      "turnover": 6.9
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.456,
      "changePct": -2.93,
      "change": -0.044,
      "turnover": 5.52
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.791,
      "changePct": -2.94,
      "change": -0.024,
      "turnover": 5.0
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.665,
      "changePct": -3.06,
      "change": -0.021,
      "turnover": 0.32
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.149,
      "changePct": -3.2,
      "change": -0.038,
      "turnover": 0.94
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.432,
      "changePct": -3.37,
      "change": -0.05,
      "turnover": 0.81
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.835,
      "changePct": -3.58,
      "change": -0.031,
      "turnover": 1.4
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.756,
      "changePct": -4.42,
      "change": -0.035,
      "turnover": 2.05
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.965,
      "changePct": -4.46,
      "change": -0.045,
      "turnover": 1.08
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.776,
      "changePct": -5.71,
      "change": -0.047,
      "turnover": 6.77
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.503,
      "changePct": -5.98,
      "change": -0.032,
      "turnover": 28.92
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.945,
      "changePct": -1.97,
      "amount": 1.01,
      "netFlow": -0.25
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.368,
      "changePct": -2.13,
      "amount": 3.35,
      "netFlow": -0.84
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.477,
      "changePct": -1.04,
      "amount": 8.78,
      "netFlow": -2.19
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.808,
      "changePct": -2.77,
      "amount": 10.01,
      "netFlow": -2.5
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.989,
      "changePct": -1.85,
      "amount": 10.8,
      "netFlow": -2.7
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.684,
      "changePct": -2.62,
      "amount": 60.69,
      "netFlow": -15.17
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.836,
      "changePct": -0.7,
      "amount": 68.08,
      "netFlow": -17.02
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.289,
      "changePct": -1.88,
      "amount": 105.88,
      "netFlow": -26.47
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.377,
      "changePct": -2.89,
      "amount": 137.35,
      "netFlow": -34.34
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.107,
      "changePct": -1.86,
      "amount": 146.27,
      "netFlow": -36.57
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.107,
      "changePct": -1.86,
      "amount": 146.27,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.836,
      "changePct": -0.7,
      "amount": 68.08,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.684,
      "changePct": -2.62,
      "amount": 60.69,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.289,
      "changePct": -1.88,
      "amount": 105.88,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.989,
      "changePct": -1.85,
      "amount": 10.8,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 9.83,
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
      "name": "家电",
      "turnover": 0.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 8.78,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.51,
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
    },
    {
      "name": "农业",
      "turnover": 0.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 1.36,
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
      "name": "医疗",
      "turnover": 3.73,
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
      "name": "新能源车",
      "turnover": 1.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.01,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.1,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 10.01,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "煤炭",
      "turnover": 6.9,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 5.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 5.0,
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
      "nav": 3.8807,
      "ret1w": -2.54,
      "ret1m": 1.1,
      "ret3m": -18.2,
      "ret6m": -7.56,
      "ret1y": -17.1,
      "ret2y": -0.1,
      "ret3y": 91.37
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.182,
      "ret1w": -5.38,
      "ret1m": -5.56,
      "ret3m": -24.63,
      "ret6m": -26.52,
      "ret1y": -33.74,
      "ret2y": -19.79,
      "ret3y": 8.78
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.1388,
      "ret1w": -6.66,
      "ret1m": -8.46,
      "ret3m": -32.57,
      "ret6m": -17.88,
      "ret1y": -20.42,
      "ret2y": 26.06,
      "ret3y": 109.77
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6976,
      "ret1w": -0.44,
      "ret1m": -0.21,
      "ret3m": 0.01,
      "ret6m": -0.85,
      "ret1y": -5.98,
      "ret2y": -13.7,
      "ret3y": -8.48
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9208,
      "ret1w": -0.24,
      "ret1m": 1.69,
      "ret3m": -4.84,
      "ret6m": -10.24,
      "ret1y": -32.7,
      "ret2y": -30.73,
      "ret3y": -20.66
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5268,
      "ret1w": -1.94,
      "ret1m": 0.49,
      "ret3m": -7.06,
      "ret6m": -3.17,
      "ret1y": -27.75,
      "ret2y": -27.12,
      "ret3y": 3.23
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.0562,
      "ret1w": -1.5,
      "ret1m": -1.75,
      "ret3m": -6.03,
      "ret6m": -7.49,
      "ret1y": -12.37,
      "ret2y": -1.31,
      "ret3y": 23.79
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.688,
      "ret1w": -2.76,
      "ret1m": -2.76,
      "ret3m": -14.83,
      "ret6m": -4.09,
      "ret1y": -19.12,
      "ret2y": -8.51,
      "ret3y": 31.16
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1469,
      "ret1w": -2.9,
      "ret1m": -3.41,
      "ret3m": -15.97,
      "ret6m": -13.31,
      "ret1y": -19.84,
      "ret2y": -8.75,
      "ret3y": 7.53
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.695,
      "ret1w": -3.06,
      "ret1m": -3.78,
      "ret3m": -22.42,
      "ret6m": -25.59,
      "ret1y": -12.53,
      "ret2y": 26.47,
      "ret3y": 121.08
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.079,
      "ret1w": -1.1,
      "ret1m": -2.35,
      "ret3m": -2.26,
      "ret6m": 0.65,
      "ret1y": -4.93,
      "ret2y": -15.57,
      "ret3y": -15.83
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.229,
      "ret1w": -2.79,
      "ret1m": -2.19,
      "ret3m": -9.43,
      "ret6m": -1.46,
      "ret1y": -16.92,
      "ret2y": -13.54,
      "ret3y": 5.04
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.2982,
      "ret1w": -4.65,
      "ret1m": -11.66,
      "ret3m": -27.03,
      "ret6m": -36.45,
      "ret1y": -58.08,
      "ret2y": -54.13,
      "ret3y": -31.59
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8238,
      "ret1w": -0.4,
      "ret1m": -1.97,
      "ret3m": -4.35,
      "ret6m": -4.86,
      "ret1y": 0.19,
      "ret2y": -7.02,
      "ret3y": -8.19
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.45,
      "ret1w": -2.76,
      "ret1m": -2.66,
      "ret3m": -14.92,
      "ret6m": -6.25,
      "ret1y": -16.96,
      "ret2y": -5.33,
      "ret3y": 28.42
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.7247,
      "ret1w": -6.29,
      "ret1m": -7.29,
      "ret3m": -29.9,
      "ret6m": -32.36,
      "ret1y": -28.46,
      "ret2y": 29.96,
      "ret3y": 74.32
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5035,
      "ret1w": -1.68,
      "ret1m": -0.89,
      "ret3m": -3.86,
      "ret6m": 0.52,
      "ret1y": -7.16,
      "ret2y": -7.4,
      "ret3y": -0.43
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.926,
      "ret1w": -3.74,
      "ret1m": -2.22,
      "ret3m": -12.48,
      "ret6m": -14.73,
      "ret1y": -9.13,
      "ret2y": -16.88,
      "ret3y": -17.91
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.2969,
      "ret1w": -0.33,
      "ret1m": -1.36,
      "ret3m": 0.74,
      "ret6m": -1.16,
      "ret1y": -4.85,
      "ret2y": 0.61,
      "ret3y": 1.66
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2094,
      "ret1w": -2.28,
      "ret1m": -1.15,
      "ret3m": -10.34,
      "ret6m": -2.2,
      "ret1y": -7.39,
      "ret2y": 4.42,
      "ret3y": 44.14
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.026,
      "ret1w": -3.14,
      "ret1m": -3.83,
      "ret3m": -18.78,
      "ret6m": -19.93,
      "ret1y": -24.87,
      "ret2y": -9.6,
      "ret3y": 9.59
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.0919,
      "ret1w": -3.15,
      "ret1m": -3.84,
      "ret3m": -18.76,
      "ret6m": -19.85,
      "ret1y": -24.73,
      "ret2y": -9.27,
      "ret3y": 10.46
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0502,
      "ret1w": -0.62,
      "ret1m": -0.52,
      "ret3m": -2.76,
      "ret6m": -4.87,
      "ret1y": -4.54,
      "ret2y": -2.0,
      "ret3y": 2.94
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0251,
      "ret1w": -0.62,
      "ret1m": -0.5,
      "ret3m": -2.71,
      "ret6m": -4.73,
      "ret1y": -4.25,
      "ret2y": -1.4,
      "ret3y": 4.2
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6813,
      "ret1w": -1.38,
      "ret1m": -1.46,
      "ret3m": -3.87,
      "ret6m": -6.86,
      "ret1y": -14.79,
      "ret2y": -14.9,
      "ret3y": -6.53
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.6991,
      "ret1w": -1.35,
      "ret1m": -1.44,
      "ret3m": -3.81,
      "ret6m": -6.74,
      "ret1y": -14.57,
      "ret2y": -14.46,
      "ret3y": -5.58
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.2509,
      "ret1w": -4.49,
      "ret1m": -5.78,
      "ret3m": -22.54,
      "ret6m": -22.04,
      "ret1y": -13.06,
      "ret2y": 21.82,
      "ret3y": 93.94
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2751,
      "ret1w": -2.73,
      "ret1m": -0.75,
      "ret3m": -10.25,
      "ret6m": -11.04,
      "ret1y": -9.88,
      "ret2y": 6.2,
      "ret3y": 47.34
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6868,
      "ret1w": -2.48,
      "ret1m": 0.66,
      "ret3m": -6.23,
      "ret6m": -7.73,
      "ret1y": -23.72,
      "ret2y": -13.48,
      "ret3y": -3.77
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.8921,
      "ret1w": -1.99,
      "ret1m": 2.19,
      "ret3m": -10.15,
      "ret6m": -12.14,
      "ret1y": 1.36,
      "ret2y": 25.33,
      "ret3y": 90.49
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4672,
      "ret1w": -0.62,
      "ret1m": -0.7,
      "ret3m": -8.91,
      "ret6m": -13.51,
      "ret1y": -11.09,
      "ret2y": 2.08,
      "ret3y": 23.76
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4764,
      "ret1w": -0.63,
      "ret1m": -0.69,
      "ret3m": -8.89,
      "ret6m": -13.43,
      "ret1y": -10.92,
      "ret2y": 2.5,
      "ret3y": 24.74
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2495,
      "ret1w": -0.57,
      "ret1m": -1.23,
      "ret3m": -1.6,
      "ret6m": -1.3,
      "ret1y": -3.51,
      "ret2y": -2.89,
      "ret3y": -0.57
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0745,
      "ret1w": -0.71,
      "ret1m": -2.08,
      "ret3m": -4.05,
      "ret6m": -6.44,
      "ret1y": -8.3,
      "ret2y": -7.63,
      "ret3y": 1.1
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.1535,
      "ret1w": -2.04,
      "ret1m": -5.17,
      "ret3m": -17.54,
      "ret6m": -17.62,
      "ret1y": -23.37,
      "ret2y": -27.14,
      "ret3y": -17.01
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.7987,
      "ret1w": -1.85,
      "ret1m": -2.39,
      "ret3m": -7.73,
      "ret6m": -4.76,
      "ret1y": -13.19,
      "ret2y": 2.28,
      "ret3y": 26.86
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.499,
      "ret1w": -5.38,
      "ret1m": -6.86,
      "ret3m": -27.21,
      "ret6m": -35.84,
      "ret1y": -30.6,
      "ret2y": 16.18,
      "ret3y": 84.29
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5168,
      "ret1w": -0.85,
      "ret1m": -1.29,
      "ret3m": 1.38,
      "ret6m": 2.9,
      "ret1y": 0.62,
      "ret2y": -0.07,
      "ret3y": -1.03
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.527,
      "ret1w": -3.43,
      "ret1m": 1.48,
      "ret3m": -14.46,
      "ret6m": -11.37,
      "ret1y": -27.77,
      "ret2y": -9.81,
      "ret3y": -6.48
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 10.853,
      "ret1w": -4.97,
      "ret1m": -6.66,
      "ret3m": -28.15,
      "ret6m": -21.08,
      "ret1y": -6.61,
      "ret2y": 52.02,
      "ret3y": 157.49
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0542,
      "ret1w": -0.26,
      "ret1m": -0.19,
      "ret3m": -1.29,
      "ret6m": -1.43,
      "ret1y": -1.6,
      "ret2y": 0.05,
      "ret3y": 2.76
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1024,
      "ret1w": -0.28,
      "ret1m": -0.2,
      "ret3m": -1.29,
      "ret6m": -1.38,
      "ret1y": -1.48,
      "ret2y": 0.27,
      "ret3y": 3.43
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0676,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.16,
      "ret6m": 0.45,
      "ret1y": 0.7,
      "ret2y": 1.71,
      "ret3y": 3.08
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.102,
      "ret1w": 0.0,
      "ret1m": 0.08,
      "ret3m": 0.19,
      "ret6m": 0.45,
      "ret1y": 0.78,
      "ret2y": 1.62,
      "ret3y": 3.94
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1117,
      "ret1w": 0.0,
      "ret1m": 0.08,
      "ret3m": 0.21,
      "ret6m": 0.5,
      "ret1y": 0.88,
      "ret2y": 1.83,
      "ret3y": 4.37
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0781,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.12,
      "ret6m": 0.33,
      "ret1y": 0.61,
      "ret2y": 1.54,
      "ret3y": 3.1
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.093,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.15,
      "ret6m": 0.39,
      "ret1y": 0.76,
      "ret2y": 1.85,
      "ret3y": 3.75
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0132,
      "ret1w": -1.03,
      "ret1m": -1.2,
      "ret3m": -5.5,
      "ret6m": -4.94,
      "ret1y": -6.36,
      "ret2y": 0.4,
      "ret3y": 4.99
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1682,
      "ret1w": -0.97,
      "ret1m": -0.96,
      "ret3m": -5.22,
      "ret6m": -3.17,
      "ret1y": -6.14,
      "ret2y": -1.94,
      "ret3y": 0.69
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0202,
      "ret1w": -1.02,
      "ret1m": -1.19,
      "ret3m": -5.47,
      "ret6m": -4.85,
      "ret1y": -6.18,
      "ret2y": 0.81,
      "ret3y": 5.84
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0453,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.19,
      "ret6m": 0.49,
      "ret1y": 0.86,
      "ret2y": 1.86,
      "ret3y": 3.7
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1195,
      "ret1w": -0.85,
      "ret1m": -0.9,
      "ret3m": -4.97,
      "ret6m": -4.81,
      "ret1y": -7.7,
      "ret2y": -4.8,
      "ret3y": 1.34
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1966,
      "ret1w": -0.16,
      "ret1m": -0.12,
      "ret3m": -1.03,
      "ret6m": -1.67,
      "ret1y": -2.88,
      "ret2y": 0.85,
      "ret3y": 9.13
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1183,
      "ret1w": -0.35,
      "ret1m": -0.35,
      "ret3m": -1.92,
      "ret6m": -1.57,
      "ret1y": -1.9,
      "ret2y": 0.87,
      "ret3y": 6.65
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.189,
      "ret1w": -0.35,
      "ret1m": -0.35,
      "ret3m": -1.9,
      "ret6m": -1.47,
      "ret1y": -1.71,
      "ret2y": 1.28,
      "ret3y": 7.52
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.198,
      "ret1w": 2.61,
      "ret1m": -2.27,
      "ret3m": -11.62,
      "ret6m": -9.06,
      "ret1y": 11.52,
      "ret2y": 59.51,
      "ret3y": 114.44
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9899,
      "ret1w": 0.49,
      "ret1m": -0.51,
      "ret3m": -1.09,
      "ret6m": 2.34,
      "ret1y": 6.07,
      "ret2y": 7.41,
      "ret3y": 30.33
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.702,
      "ret1w": -0.23,
      "ret1m": -3.07,
      "ret3m": -8.03,
      "ret6m": -11.28,
      "ret1y": -19.44,
      "ret2y": -8.21,
      "ret3y": 21.41
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3635,
      "ret1w": 1.66,
      "ret1m": 0.37,
      "ret3m": -5.48,
      "ret6m": 4.61,
      "ret1y": 11.97,
      "ret2y": 12.23,
      "ret3y": 65.19
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9172,
      "ret1w": -0.03,
      "ret1m": 0.23,
      "ret3m": -0.88,
      "ret6m": -2.2,
      "ret1y": -3.66,
      "ret2y": -6.55,
      "ret3y": -2.58
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4657,
      "ret1w": 0.85,
      "ret1m": -2.96,
      "ret3m": -9.65,
      "ret6m": -9.5,
      "ret1y": 6.4,
      "ret2y": 29.01,
      "ret3y": 75.03
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.522,
      "ret1w": 0.56,
      "ret1m": 0.07,
      "ret3m": -1.85,
      "ret6m": -1.18,
      "ret1y": 1.07,
      "ret2y": 3.76,
      "ret3y": 16.28
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.847,
      "ret1w": 1.44,
      "ret1m": -0.59,
      "ret3m": -13.75,
      "ret6m": -12.86,
      "ret1y": -27.11,
      "ret2y": -28.64,
      "ret3y": -9.7
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.612,
      "ret1w": 1.22,
      "ret1m": -4.88,
      "ret3m": -10.98,
      "ret6m": -8.57,
      "ret1y": 5.01,
      "ret2y": 53.31,
      "ret3y": 122.26
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5886,
      "ret1w": 0.09,
      "ret1m": 0.14,
      "ret3m": 0.21,
      "ret6m": 10.56,
      "ret1y": 4.64,
      "ret2y": 31.78,
      "ret3y": 49.98
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6543,
      "ret1w": 0.99,
      "ret1m": -1.87,
      "ret3m": -6.15,
      "ret6m": -1.78,
      "ret1y": 3.07,
      "ret2y": 17.11,
      "ret3y": 44.57
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2202,
      "ret1w": 0.98,
      "ret1m": -2.76,
      "ret3m": -7.4,
      "ret6m": -4.84,
      "ret1y": -5.57,
      "ret2y": 2.36,
      "ret3y": 22.45
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.236,
      "ret1w": -0.8,
      "ret1m": 0.73,
      "ret3m": -1.67,
      "ret6m": -7.76,
      "ret1y": -4.78,
      "ret2y": -2.22,
      "ret3y": -12.53
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.964,
      "ret1w": 0.2,
      "ret1m": 0.82,
      "ret3m": -5.12,
      "ret6m": -0.15,
      "ret1y": -13.94,
      "ret2y": -5.71,
      "ret3y": 35.6
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.8601,
      "ret1w": 0.97,
      "ret1m": -3.13,
      "ret3m": -9.88,
      "ret6m": -9.0,
      "ret1y": 3.51,
      "ret2y": 27.33,
      "ret3y": 55.09
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0158,
      "ret1w": 0.01,
      "ret1m": 0.11,
      "ret3m": 0.32,
      "ret6m": 0.69,
      "ret1y": 1.25,
      "ret2y": 2.54,
      "ret3y": 3.94
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0149,
      "ret1w": 0.01,
      "ret1m": 0.11,
      "ret3m": 0.33,
      "ret6m": 0.72,
      "ret1y": 1.28,
      "ret2y": 2.6,
      "ret3y": 4.11
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.22,
      "ret1w": -2.09,
      "ret1m": -3.1,
      "ret3m": -13.35,
      "ret6m": -17.9,
      "ret1y": -19.21,
      "ret2y": -14.57,
      "ret3y": -0.57
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.346,
      "ret1w": -2.94,
      "ret1m": -4.17,
      "ret3m": -16.81,
      "ret6m": -17.91,
      "ret1y": -22.19,
      "ret2y": -10.53,
      "ret3y": 9.83
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.4706,
      "ret1w": -2.33,
      "ret1m": -3.08,
      "ret3m": -10.48,
      "ret6m": -8.2,
      "ret1y": -20.44,
      "ret2y": 0.51,
      "ret3y": 33.81
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.8802,
      "ret1w": -2.18,
      "ret1m": -3.36,
      "ret3m": -11.99,
      "ret6m": -12.86,
      "ret1y": -13.08,
      "ret2y": -4.32,
      "ret3y": 10.02
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.9351,
      "ret1w": -2.18,
      "ret1m": -3.35,
      "ret3m": -11.96,
      "ret6m": -12.77,
      "ret1y": -12.9,
      "ret2y": -3.93,
      "ret3y": 10.91
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7316,
      "ret1w": -2.55,
      "ret1m": -1.55,
      "ret3m": -14.29,
      "ret6m": -13.55,
      "ret1y": -19.11,
      "ret2y": -5.6,
      "ret3y": 16.35
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.59,
      "ret1w": -1.74,
      "ret1m": -2.88,
      "ret3m": -10.52,
      "ret6m": -13.43,
      "ret1y": -14.22,
      "ret2y": -10.12,
      "ret3y": 4.78
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.451,
      "ret1w": -1.96,
      "ret1m": -0.72,
      "ret3m": -8.25,
      "ret6m": -7.43,
      "ret1y": -15.16,
      "ret2y": -0.3,
      "ret3y": 23.41
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.5739,
      "ret1w": -3.26,
      "ret1m": -5.24,
      "ret3m": -19.85,
      "ret6m": -24.69,
      "ret1y": -21.51,
      "ret2y": -12.44,
      "ret3y": 14.4
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9611,
      "ret1w": -1.18,
      "ret1m": -3.23,
      "ret3m": -7.08,
      "ret6m": -9.2,
      "ret1y": -11.42,
      "ret2y": -10.72,
      "ret3y": 1.79
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4932,
      "ret1w": 0.57,
      "ret1m": 0.88,
      "ret3m": -0.3,
      "ret6m": 0.48,
      "ret1y": 0.01,
      "ret2y": 8.78,
      "ret3y": 27.48
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4499,
      "ret1w": 0.92,
      "ret1m": -0.65,
      "ret3m": -2.57,
      "ret6m": 0.81,
      "ret1y": 9.43,
      "ret2y": 10.82,
      "ret3y": 33.16
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.2846,
      "ret1w": -3.04,
      "ret1m": -5.24,
      "ret3m": -16.48,
      "ret6m": -19.64,
      "ret1y": -23.06,
      "ret2y": -12.66,
      "ret3y": 7.03
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0274,
      "ret1w": 0.12,
      "ret1m": -4.41,
      "ret3m": -13.38,
      "ret6m": -10.81,
      "ret1y": -15.98,
      "ret2y": -5.98,
      "ret3y": 17.0
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0309,
      "ret1w": 0.13,
      "ret1m": -4.27,
      "ret3m": -13.25,
      "ret6m": -10.59,
      "ret1y": -15.82,
      "ret2y": -5.8,
      "ret3y": 16.75
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2579,
      "ret1w": -0.4,
      "ret1m": -2.33,
      "ret3m": -10.79,
      "ret6m": -11.43,
      "ret1y": -16.46,
      "ret2y": -9.1,
      "ret3y": 11.06
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2874,
      "ret1w": -0.39,
      "ret1m": -2.32,
      "ret3m": -10.76,
      "ret6m": -11.34,
      "ret1y": -16.29,
      "ret2y": -8.73,
      "ret3y": 11.96
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7797,
      "ret1w": -0.03,
      "ret1m": -3.01,
      "ret3m": -12.53,
      "ret6m": -19.21,
      "ret1y": -16.54,
      "ret2y": -5.84,
      "ret3y": 25.27
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1574,
      "ret1w": -0.11,
      "ret1m": 0.18,
      "ret3m": -0.64,
      "ret6m": -0.74,
      "ret1y": -0.92,
      "ret2y": 1.08,
      "ret3y": 5.4
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1777,
      "ret1w": -0.11,
      "ret1m": 0.2,
      "ret3m": -0.61,
      "ret6m": -0.66,
      "ret1y": -0.76,
      "ret2y": 1.39,
      "ret3y": 6.04
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.088,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.17,
      "ret6m": 0.52,
      "ret1y": 0.84,
      "ret2y": 2.01,
      "ret3y": 3.67
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4121,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.18,
      "ret6m": 0.05,
      "ret1y": 0.14,
      "ret2y": 0.79,
      "ret3y": 5.95
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4653,
      "ret1w": 0.02,
      "ret1m": 0.08,
      "ret3m": 0.21,
      "ret6m": 0.16,
      "ret1y": 0.35,
      "ret2y": 1.19,
      "ret3y": 6.81
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9265,
      "ret1w": -1.59,
      "ret1m": -1.11,
      "ret3m": -9.75,
      "ret6m": -8.94,
      "ret1y": 0.21,
      "ret2y": 12.01,
      "ret3y": 36.61
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0528,
      "ret1w": -2.62,
      "ret1m": -2.07,
      "ret3m": -14.27,
      "ret6m": -15.32,
      "ret1y": -14.08,
      "ret2y": -6.96,
      "ret3y": 14.95
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 3.8807,
      "price": 3.8807,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.28,
      "nav": 3.182,
      "price": 3.182,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.42,
      "nav": 4.1388,
      "price": 4.1388,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.01,
      "nav": 0.6976,
      "price": 0.6976,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 1.9208,
      "price": 1.9208,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.02,
      "nav": 2.5268,
      "price": 2.5268,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 5.0562,
      "price": 5.0562,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 1.688,
      "price": 1.688,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.17,
      "nav": 1.1469,
      "price": 1.1469,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 2.695,
      "price": 2.695,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.079,
      "price": 1.079,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.229,
      "price": 2.229,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.58,
      "nav": 1.2982,
      "price": 1.2982,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.1,
      "nav": 1.8238,
      "price": 1.8238,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.45,
      "price": 1.45,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 1.7247,
      "price": 1.7247,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.04,
      "nav": 2.5035,
      "price": 2.5035,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 0.926,
      "price": 0.926,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 2.2969,
      "price": 2.2969,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.2094,
      "price": 1.2094,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 1.65,
      "sharpe": -2.8,
      "calmar": -2.8
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 8.34,
      "sharpe": -3.2,
      "calmar": -3.2
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 12.69,
      "sharpe": -1.52,
      "calmar": -1.52
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.32,
      "sharpe": -1.15,
      "calmar": -1.15
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.54,
      "sharpe": -4.89,
      "calmar": -4.89
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.73,
      "sharpe": -5.05,
      "calmar": -5.05
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.62,
      "sharpe": -1.83,
      "calmar": -1.83
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.14,
      "sharpe": -2.46,
      "calmar": -2.46
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.12,
      "sharpe": -2.36,
      "calmar": -2.36
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 5.67,
      "sharpe": -1.43,
      "calmar": -1.43
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 3.53,
      "sharpe": -0.67,
      "calmar": -0.67
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 3.29,
      "sharpe": -2.35,
      "calmar": -2.35
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 17.49,
      "sharpe": -3.49,
      "calmar": -3.49
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.96,
      "sharpe": 0.03,
      "calmar": 0.03
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 3.99,
      "sharpe": -2.21,
      "calmar": -2.21
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 10.94,
      "sharpe": -2.32,
      "calmar": -2.32
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.33,
      "sharpe": -1.22,
      "calmar": -1.22
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 3.33,
      "sharpe": -1.26,
      "calmar": -1.26
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.04,
      "sharpe": -0.76,
      "calmar": -0.76
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 1.72,
      "sharpe": -1.2,
      "calmar": -1.2
    }
  ],
  "news": [
    {
      "title": "10月22日晚间，德邦证券研究所所长兼首席经济学家程强在接受中国证券报·中证金牛座记者专访时表示，我国宏观经济基本面具备较强韧性，支撑市场的底盘稳固。经过持续调整之后，A股整体估值已经进入合理区间，前期市场所担忧的各类负面因素很大程度上已被消化，进一步下行的空间已经相对有限。“从产业层面来看，新质生产力对应的多条主线仍然维持较高的景气水平。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:52",
      "impact": "neutral"
    },
    {
      "title": "10月22日，北京市新闻办举行“首都开局起步‘十五五’”系列主题新闻发布会东城专场一一接续奋斗做优“六字文章”，擘画“崇文争先”新蓝图。东城区委副书记、代区长刘圣国表示，面向“十五五”，东城区将加快构建“321”现代化产业体系，做强金融、文化、科创三大主导产业，培育更多产城融合发展新增长极。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:47",
      "impact": "neutral"
    },
    {
      "title": "10月22日，市发展改革委召开新闻发布会，解读前三季度首都经济运行情况。市发展改革委综合处处长赵茜表示，前三季度北京经济运行符合预期，为实现全年经济社会发展目标奠定坚实基础。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:47",
      "impact": "neutral"
    },
    {
      "title": "中新社深圳10月22日电(记者阮煜琳索有为)2026中国海洋经济博览会(下称“海博会”)22日在深圳启幕。中国自然资源部副部长、国家海洋局局长孙书贤表示，当前，海洋经济已成为全球经济增长中最具活力、最富潜力的领域之一，在稳增长、促就业、惠民生方面发挥着日益重要的作用。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:42",
      "impact": "neutral"
    },
    {
      "title": "培育消费新动能 拓展开放新空间——国新办发布会聚焦“十五五”商务高质量发展",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:26",
      "impact": "neutral"
    },
    {
      "title": "国产游戏出海，早已不是新鲜事。2025年，中国自主研发游戏海外市场实际销售收入达到204.6亿美元，同比增长11.07%。但在这条赛道上，过去唱主角的始终是国内头部企业。中小团队想分一杯羹，往往卡在渠道、资金、技术、合规这几道坎上，“连门都摸不着”。而在位于海南澄迈的老城科技新城一角，中国中小微游戏企业出海的故事正在上演。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:19",
      "impact": "neutral"
    },
    {
      "title": "极端天气频繁扰动，全国居民生活用电量罕见“降温”。国家能源局10月21日发布数据，9月份，全国全社会用电量8997亿千瓦时，同比增长1.2%。其中，第一产业、第二产业、第三产业和城乡居民生活用电量分别同比增长4.1%、1.7%、4.9%和-6.0%。1-9月，全社会用电量累计80734亿千瓦时，同比增长3.9%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:15",
      "impact": "neutral"
    },
    {
      "title": "中新网北京10月22日电(陶思阅)近日，在2026金融街论坛年会举办期间，中国人民银行会同科技部等10部门联合印发了《关于金融支持建设北京(京津冀)、上海(长三角)、粤港澳大湾区国际科技创新中心的指导意见》(下称《意见》)。《意见》提出，到2030年，支持科技创新全链条金融服务体系更加健全，直接融资占比明显提升，区域金融服务一体化格局基本形成。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:12",
      "impact": "neutral"
    },
    {
      "title": "特约评论员熊夏柠据自然资源部微信公众号消息，10月22日，国家发展改革委、自然资源部发布《中国海洋经济发展报告2026》，系统总结了“十四五”时期我国海洋经济发展成效。报告显示，2025年我国海洋生产总值突破11万亿元，占国内生产总值比重为7.9%，海洋经济已成为国民经济重要增长极，海洋强国建设的家底更厚、成色更足。海洋是高质量发展战略要地。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:12",
      "impact": "neutral"
    },
    {
      "title": "特约评论员张凌武“海上新广东”建设又迎来关键节点。10月21日，2026年度广东省海洋产业高质量发展推进工作会议在深圳召开。会上强调，沿海各市都要争当主力军，立足资源禀赋，找准自身定位，其他各市同样可以大有作为，共同构建全省参与、全域行动的海洋经济发展格局。近年来，作为我国海洋经济第一大省，广东持续推动构建“海上新广东”。此次会议提出的“全省参与、全域行动”尤为值得关注。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:11",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 41,
    "label": "中性",
    "upDownRatio": "848/2,576",
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
