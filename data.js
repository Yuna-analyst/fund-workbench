// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-19 11:00:50
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-19 11:00 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-19",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3894.42,
      "change": -95.88,
      "changePct": "-2.40%",
      "high": 3961.14,
      "low": 3879.58,
      "volume": 572191213.0,
      "amount": 1218107970000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13890.15,
      "change": -732.35,
      "changePct": "-5.01%",
      "high": 14367.37,
      "low": 13842.32,
      "volume": 696873243.0,
      "amount": 1292934550000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3473.49,
      "change": -232.07,
      "changePct": "-6.26%",
      "high": 3622.5,
      "low": 3455.48,
      "volume": 205509141.0,
      "amount": 633622300000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1667.52,
      "change": -123.35,
      "changePct": "-6.89%",
      "high": 1748.52,
      "low": 1653.67,
      "volume": 12227985.0,
      "amount": 132458970000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4588.7,
      "change": -137.11,
      "changePct": "-2.90%",
      "high": 4674.38,
      "low": 4568.07,
      "volume": 244070090.0,
      "amount": 705253510000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7783.46,
      "change": -393.72,
      "changePct": "-4.81%",
      "high": 8050.08,
      "low": 7762.29,
      "volume": 190963318.0,
      "amount": 478344930000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.46万亿",
      "label": "成交额",
      "rawAmount": 4460722230000.0,
      "change": ""
    },
    "upDown": {
      "val": "0/3,384",
      "label": "涨/跌家数",
      "rawUp": 0,
      "rawDown": 3384,
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
    "totalInflow": 3.67,
    "totalOutflow": 0,
    "netFlow": 3.67,
    "netFlowTrend": [
      0.73,
      1.47,
      2.2,
      2.94,
      3.67
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
      "inflow": 3.57,
      "pct": 1.62
    },
    {
      "name": "煤炭",
      "inflow": 2.32,
      "pct": 0.32
    },
    {
      "name": "基建",
      "inflow": -0.04,
      "pct": -1.44
    },
    {
      "name": "食品",
      "inflow": -0.06,
      "pct": -1.19
    },
    {
      "name": "钢铁",
      "inflow": -0.2,
      "pct": -2.04
    },
    {
      "name": "地产",
      "inflow": -0.29,
      "pct": -2.03
    },
    {
      "name": "游戏",
      "inflow": -0.32,
      "pct": -3.18
    },
    {
      "name": "新能源车",
      "inflow": -0.42,
      "pct": -3.15
    },
    {
      "name": "家电",
      "inflow": -0.43,
      "pct": -1.94
    },
    {
      "name": "新能源",
      "inflow": -0.46,
      "pct": -3.9
    },
    {
      "name": "农业",
      "inflow": -0.52,
      "pct": -2.56
    },
    {
      "name": "光伏",
      "inflow": -0.61,
      "pct": -5.06
    },
    {
      "name": "传媒",
      "inflow": -1.03,
      "pct": -4.18
    },
    {
      "name": "白酒",
      "inflow": -1.19,
      "pct": -1.85
    },
    {
      "name": "医药",
      "inflow": -1.44,
      "pct": -1.25
    },
    {
      "name": "军工",
      "inflow": -1.55,
      "pct": -5.22
    },
    {
      "name": "医疗",
      "inflow": -1.72,
      "pct": -2.55
    },
    {
      "name": "有色",
      "inflow": -2.59,
      "pct": -3.57
    },
    {
      "name": "券商",
      "inflow": -3.01,
      "pct": -1.17
    },
    {
      "name": "创新药",
      "inflow": -3.48,
      "pct": -2.39
    }
  ],
  "sectors": [
    {
      "name": "银行",
      "code": "512800",
      "price": 0.815,
      "changePct": 1.62,
      "change": 0.013,
      "turnover": 11.89
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.273,
      "changePct": 0.32,
      "change": 0.004,
      "turnover": 7.72
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.509,
      "changePct": -1.17,
      "change": -0.006,
      "turnover": 10.04
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.498,
      "changePct": -1.19,
      "change": -0.006,
      "turnover": 0.19
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.396,
      "changePct": -1.25,
      "change": -0.005,
      "turnover": 4.79
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.024,
      "changePct": -1.44,
      "change": -0.015,
      "turnover": 0.12
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.425,
      "changePct": -1.85,
      "change": -0.008,
      "turnover": 3.96
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.415,
      "changePct": -1.94,
      "change": -0.028,
      "turnover": 1.44
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.208,
      "changePct": -2.03,
      "change": -0.025,
      "turnover": 0.96
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.151,
      "changePct": -2.04,
      "change": -0.024,
      "turnover": 0.66
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.897,
      "changePct": -2.39,
      "change": -0.022,
      "turnover": 11.59
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.344,
      "changePct": -2.55,
      "change": -0.009,
      "turnover": 5.72
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.724,
      "changePct": -2.56,
      "change": -0.019,
      "turnover": 1.72
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.631,
      "changePct": -3.15,
      "change": -0.053,
      "turnover": 1.41
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.065,
      "changePct": -3.18,
      "change": -0.035,
      "turnover": 1.07
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.864,
      "changePct": -3.57,
      "change": -0.069,
      "turnover": 8.62
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.514,
      "changePct": -3.9,
      "change": -0.102,
      "turnover": 1.54
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.803,
      "changePct": -4.18,
      "change": -0.035,
      "turnover": 3.44
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.845,
      "changePct": -5.06,
      "change": -0.045,
      "turnover": 2.03
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.108,
      "changePct": -5.22,
      "change": -0.061,
      "turnover": 5.16
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.162,
      "changePct": -5.45,
      "change": -0.067,
      "turnover": 0.46
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.66,
      "changePct": -6.11,
      "change": -0.108,
      "turnover": 2.31
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.014,
      "changePct": -7.65,
      "change": -0.084,
      "turnover": 3.66
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.045,
      "changePct": -7.69,
      "change": -0.087,
      "turnover": 22.87
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.838,
      "changePct": -7.81,
      "change": -0.071,
      "turnover": 0.85
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.163,
      "changePct": -7.99,
      "change": -0.101,
      "turnover": 14.03
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.652,
      "changePct": -8.04,
      "change": -0.057,
      "turnover": 51.27
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.012,
      "changePct": -8.08,
      "change": -0.089,
      "turnover": 15.56
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.514,
      "changePct": -3.9,
      "amount": 1.54,
      "netFlow": -0.38
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.396,
      "changePct": -1.25,
      "amount": 4.79,
      "netFlow": -1.2
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.509,
      "changePct": -1.17,
      "amount": 10.04,
      "netFlow": -2.51
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.85,
      "changePct": -2.92,
      "amount": 11.24,
      "netFlow": -2.81
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.515,
      "changePct": -2.82,
      "amount": 12.74,
      "netFlow": -3.18
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.999,
      "changePct": -1.58,
      "amount": 17.93,
      "netFlow": -4.48
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.045,
      "changePct": -7.69,
      "amount": 22.87,
      "netFlow": -5.72
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.804,
      "changePct": -4.65,
      "amount": 38.08,
      "netFlow": -9.52
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.654,
      "changePct": -2.78,
      "amount": 71.47,
      "netFlow": -17.87
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.761,
      "changePct": -6.73,
      "amount": 108.89,
      "netFlow": -27.22
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.654,
      "changePct": -2.78,
      "amount": 71.47,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.999,
      "changePct": -1.58,
      "amount": 17.93,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.804,
      "changePct": -4.65,
      "amount": 38.08,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.85,
      "changePct": -2.92,
      "amount": 11.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.515,
      "changePct": -2.82,
      "amount": 12.74,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "银行",
      "turnover": 11.89,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "煤炭",
      "turnover": 7.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 10.04,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "食品",
      "turnover": 0.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 4.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.12,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 3.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 1.44,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.96,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 11.59,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医疗",
      "turnover": 5.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 1.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 8.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 3.44,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "光伏",
      "turnover": 2.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 5.16,
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
      "nav": 4.7149,
      "ret1w": -0.05,
      "ret1m": 6.66,
      "ret3m": 10.41,
      "ret6m": -8.47,
      "ret1y": 6.7,
      "ret2y": 38.91,
      "ret3y": 171.24
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.4359,
      "ret1w": -0.86,
      "ret1m": 6.31,
      "ret3m": 4.56,
      "ret6m": -8.72,
      "ret1y": 14.79,
      "ret2y": 20.64,
      "ret3y": 80.83
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.9822,
      "ret1w": 0.98,
      "ret1m": 20.85,
      "ret3m": 18.77,
      "ret6m": 6.49,
      "ret1y": 50.68,
      "ret2y": 130.46,
      "ret3y": 292.66
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7063,
      "ret1w": 0.44,
      "ret1m": -2.04,
      "ret3m": 3.47,
      "ret6m": -0.48,
      "ret1y": -11.03,
      "ret2y": -13.53,
      "ret3y": 7.98
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.2702,
      "ret1w": -0.46,
      "ret1m": -0.47,
      "ret3m": 10.68,
      "ret6m": -16.38,
      "ret1y": -24.01,
      "ret2y": -7.33,
      "ret3y": 22.92
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.7548,
      "ret1w": -0.77,
      "ret1m": -1.69,
      "ret3m": 8.78,
      "ret6m": -14.57,
      "ret1y": -30.24,
      "ret2y": -10.1,
      "ret3y": 34.35
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5481,
      "ret1w": 0.1,
      "ret1m": -0.48,
      "ret3m": 5.87,
      "ret6m": 1.23,
      "ret1y": -5.17,
      "ret2y": 19.57,
      "ret3y": 57.75
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.994,
      "ret1w": 0.45,
      "ret1m": 4.89,
      "ret3m": 11.96,
      "ret6m": -5.59,
      "ret1y": -1.34,
      "ret2y": 14.2,
      "ret3y": 76.62
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.4142,
      "ret1w": -0.04,
      "ret1m": 3.8,
      "ret3m": 9.05,
      "ret6m": -0.37,
      "ret1y": 4.72,
      "ret2y": 20.34,
      "ret3y": 53.02
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.72,
      "ret1w": -0.48,
      "ret1m": 5.77,
      "ret3m": 8.68,
      "ret6m": 10.58,
      "ret1y": 45.26,
      "ret2y": 123.16,
      "ret3y": 301.73
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.123,
      "ret1w": -1.75,
      "ret1m": -2.94,
      "ret3m": 7.67,
      "ret6m": 2.0,
      "ret1y": -8.33,
      "ret2y": -12.81,
      "ret3y": 2.65
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.464,
      "ret1w": -0.92,
      "ret1m": -0.4,
      "ret3m": 9.32,
      "ret6m": -3.33,
      "ret1y": -13.82,
      "ret2y": -12.03,
      "ret3y": 36.59
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.9445,
      "ret1w": 1.55,
      "ret1m": 7.08,
      "ret3m": 2.8,
      "ret6m": -35.05,
      "ret1y": -41.96,
      "ret2y": -16.38,
      "ret3y": 35.53
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9245,
      "ret1w": 0.15,
      "ret1m": -1.41,
      "ret3m": 3.59,
      "ret6m": 9.25,
      "ret1y": -4.32,
      "ret2y": -0.39,
      "ret3y": 8.8
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.7168,
      "ret1w": -0.2,
      "ret1m": 3.81,
      "ret3m": 11.31,
      "ret6m": -3.7,
      "ret1y": 0.37,
      "ret2y": 16.96,
      "ret3y": 75.76
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.6156,
      "ret1w": 0.55,
      "ret1m": 11.4,
      "ret3m": 3.89,
      "ret6m": -2.32,
      "ret1y": 46.1,
      "ret2y": 113.82,
      "ret3y": 246.76
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5444,
      "ret1w": 0.2,
      "ret1m": 0.61,
      "ret3m": 5.51,
      "ret6m": -3.46,
      "ret1y": -10.31,
      "ret2y": -5.61,
      "ret3y": 22.19
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.109,
      "ret1w": -1.16,
      "ret1m": 0.09,
      "ret3m": 7.25,
      "ret6m": 17.35,
      "ret1y": 9.69,
      "ret2y": -5.13,
      "ret3y": 12.13
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3139,
      "ret1w": 0.27,
      "ret1m": -1.67,
      "ret3m": 2.32,
      "ret6m": -1.56,
      "ret1y": -8.41,
      "ret2y": 6.64,
      "ret3y": 14.1
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.363,
      "ret1w": 0.36,
      "ret1m": 3.87,
      "ret3m": 12.89,
      "ret6m": 3.88,
      "ret1y": 4.87,
      "ret2y": 27.42,
      "ret3y": 82.42
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.3515,
      "ret1w": 0.32,
      "ret1m": 3.22,
      "ret3m": 7.58,
      "ret6m": -1.1,
      "ret1y": 0.36,
      "ret2y": 29.83,
      "ret3y": 54.9
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.4374,
      "ret1w": 0.31,
      "ret1m": 3.22,
      "ret3m": 7.62,
      "ret6m": -1.01,
      "ret1y": 0.55,
      "ret2y": 30.33,
      "ret3y": 56.15
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.1006,
      "ret1w": -0.05,
      "ret1m": 0.41,
      "ret3m": 0.54,
      "ret6m": 0.67,
      "ret1y": 1.99,
      "ret2y": 2.98,
      "ret3y": 9.73
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0731,
      "ret1w": -0.06,
      "ret1m": 0.42,
      "ret3m": 0.59,
      "ret6m": 0.82,
      "ret1y": 2.3,
      "ret2y": 3.6,
      "ret3y": 11.05
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7304,
      "ret1w": -0.25,
      "ret1m": -1.04,
      "ret3m": 2.8,
      "ret6m": -5.39,
      "ret1y": -12.61,
      "ret2y": -4.61,
      "ret3y": 16.47
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7488,
      "ret1w": -0.24,
      "ret1m": -1.03,
      "ret3m": 2.86,
      "ret6m": -5.26,
      "ret1y": -12.37,
      "ret2y": -4.12,
      "ret3y": 17.64
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.9525,
      "ret1w": -0.85,
      "ret1m": 6.89,
      "ret3m": 2.33,
      "ret6m": 5.92,
      "ret1y": 45.42,
      "ret2y": 99.09,
      "ret3y": 178.7
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.6318,
      "ret1w": 0.05,
      "ret1m": 2.47,
      "ret3m": 7.5,
      "ret6m": 0.58,
      "ret1y": 7.42,
      "ret2y": 38.07,
      "ret3y": 93.26
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7712,
      "ret1w": -0.17,
      "ret1m": 2.59,
      "ret3m": 6.21,
      "ret6m": -11.91,
      "ret1y": -13.01,
      "ret2y": -1.29,
      "ret3y": 22.18
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.4436,
      "ret1w": -0.61,
      "ret1m": 3.32,
      "ret3m": 6.24,
      "ret6m": 4.68,
      "ret1y": 25.45,
      "ret2y": 65.33,
      "ret3y": 156.68
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5287,
      "ret1w": -0.09,
      "ret1m": 0.74,
      "ret3m": -0.68,
      "ret6m": -2.31,
      "ret1y": 3.16,
      "ret2y": 26.82,
      "ret3y": 50.71
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5388,
      "ret1w": -0.07,
      "ret1m": 0.77,
      "ret3m": -0.63,
      "ret6m": -2.21,
      "ret1y": 3.4,
      "ret2y": 27.35,
      "ret3y": 51.95
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2782,
      "ret1w": 0.2,
      "ret1m": -0.23,
      "ret3m": 3.45,
      "ret6m": -0.51,
      "ret1y": -1.0,
      "ret2y": -0.61,
      "ret3y": 1.12
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1475,
      "ret1w": -0.11,
      "ret1m": -0.29,
      "ret3m": 2.29,
      "ret6m": 4.27,
      "ret1y": -4.65,
      "ret2y": 2.71,
      "ret3y": 23.95
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4917,
      "ret1w": -0.35,
      "ret1m": 2.34,
      "ret3m": 5.5,
      "ret6m": -10.73,
      "ret1y": 2.74,
      "ret2y": -0.81,
      "ret3y": 23.49
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0197,
      "ret1w": 0.71,
      "ret1m": -0.13,
      "ret3m": 7.1,
      "ret6m": -4.7,
      "ret1y": -4.09,
      "ret2y": 17.52,
      "ret3y": 46.39
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.539,
      "ret1w": -0.39,
      "ret1m": 5.83,
      "ret3m": -8.65,
      "ret6m": -9.0,
      "ret1y": 47.7,
      "ret2y": 119.81,
      "ret3y": 218.26
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4602,
      "ret1w": 0.21,
      "ret1m": -0.14,
      "ret3m": 0.32,
      "ret6m": -0.4,
      "ret1y": -0.29,
      "ret2y": -3.12,
      "ret3y": 7.87
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6861,
      "ret1w": 0.5,
      "ret1m": 6.74,
      "ret3m": 11.71,
      "ret6m": -7.87,
      "ret1y": -1.14,
      "ret2y": 11.52,
      "ret3y": 62.28
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.636,
      "ret1w": -0.9,
      "ret1m": 6.36,
      "ret3m": 9.05,
      "ret6m": 29.37,
      "ret1y": 90.59,
      "ret2y": 187.06,
      "ret3y": 379.63
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0705,
      "ret1w": -0.04,
      "ret1m": 0.36,
      "ret3m": 0.27,
      "ret6m": 0.03,
      "ret1y": 0.67,
      "ret2y": 1.9,
      "ret3y": 5.08
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1191,
      "ret1w": -0.04,
      "ret1m": 0.36,
      "ret3m": 0.29,
      "ret6m": 0.09,
      "ret1y": 0.79,
      "ret2y": 2.19,
      "ret3y": 5.82
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0642,
      "ret1w": 0.02,
      "ret1m": 0.04,
      "ret3m": 0.16,
      "ret6m": 0.3,
      "ret1y": 0.78,
      "ret2y": 1.54,
      "ret3y": 2.75
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0984,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.33,
      "ret1y": 0.82,
      "ret2y": 1.5,
      "ret3y": 3.85
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1077,
      "ret1w": 0.02,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.38,
      "ret1y": 0.92,
      "ret2y": 1.71,
      "ret3y": 4.27
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.076,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.19,
      "ret6m": 0.37,
      "ret1y": 0.74,
      "ret2y": 1.42,
      "ret3y": 2.81
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0903,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.2,
      "ret6m": 0.44,
      "ret1y": 0.9,
      "ret2y": 1.75,
      "ret3y": 3.46
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0831,
      "ret1w": 0.01,
      "ret1m": 1.16,
      "ret3m": 2.61,
      "ret6m": -0.8,
      "ret1y": 2.61,
      "ret2y": 9.14,
      "ret3y": 14.26
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2402,
      "ret1w": 0.02,
      "ret1m": 1.56,
      "ret3m": 3.5,
      "ret6m": -1.56,
      "ret1y": 1.85,
      "ret2y": 5.03,
      "ret3y": 9.2
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0897,
      "ret1w": 0.0,
      "ret1m": 1.16,
      "ret3m": 2.63,
      "ret6m": -0.7,
      "ret1y": 2.82,
      "ret2y": 9.57,
      "ret3y": 15.18
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0453,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.14,
      "ret6m": 0.39,
      "ret1y": 0.88,
      "ret2y": 1.71,
      "ret3y": 3.56
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1841,
      "ret1w": -0.14,
      "ret1m": 1.25,
      "ret3m": 1.1,
      "ret6m": -2.02,
      "ret1y": -1.55,
      "ret2y": 2.62,
      "ret3y": 11.77
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2205,
      "ret1w": 0.04,
      "ret1m": -0.04,
      "ret3m": 0.78,
      "ret6m": -0.55,
      "ret1y": 0.13,
      "ret2y": 4.94,
      "ret3y": 15.72
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1482,
      "ret1w": 0.01,
      "ret1m": 0.57,
      "ret3m": 1.28,
      "ret6m": -0.15,
      "ret1y": 1.59,
      "ret2y": 5.99,
      "ret3y": 11.36
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.22,
      "ret1w": 0.01,
      "ret1m": 0.58,
      "ret3m": 1.31,
      "ret6m": -0.05,
      "ret1y": 1.79,
      "ret2y": 6.42,
      "ret3y": 12.29
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.515,
      "ret1w": 2.19,
      "ret1m": 11.48,
      "ret3m": 10.99,
      "ret6m": 5.32,
      "ret1y": 50.15,
      "ret2y": 104.31,
      "ret3y": 145.37
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9725,
      "ret1w": -0.66,
      "ret1m": -0.18,
      "ret3m": 2.79,
      "ret6m": 1.48,
      "ret1y": 8.72,
      "ret2y": 10.15,
      "ret3y": 34.74
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8745,
      "ret1w": -0.49,
      "ret1m": -2.2,
      "ret3m": 1.47,
      "ret6m": -9.55,
      "ret1y": -10.94,
      "ret2y": 4.76,
      "ret3y": 53.72
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3436,
      "ret1w": -2.55,
      "ret1m": -1.54,
      "ret3m": 6.34,
      "ret6m": 7.09,
      "ret1y": 18.71,
      "ret2y": 26.05,
      "ret3y": 73.2
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.937,
      "ret1w": -0.09,
      "ret1m": 0.05,
      "ret3m": -0.39,
      "ret6m": -0.38,
      "ret1y": -3.13,
      "ret2y": -3.09,
      "ret3y": -1.55
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6998,
      "ret1w": -3.81,
      "ret1m": 1.95,
      "ret3m": 2.95,
      "ret6m": 0.92,
      "ret1y": 28.02,
      "ret2y": 58.77,
      "ret3y": 97.79
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.603,
      "ret1w": -0.63,
      "ret1m": -0.54,
      "ret3m": 1.57,
      "ret6m": 0.9,
      "ret1y": 2.72,
      "ret2y": 6.04,
      "ret3y": 22.36
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.256,
      "ret1w": 0.56,
      "ret1m": -1.41,
      "ret3m": 7.17,
      "ret6m": 2.61,
      "ret1y": -5.92,
      "ret2y": -17.96,
      "ret3y": 118.06
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.981,
      "ret1w": 0.1,
      "ret1m": 1.76,
      "ret3m": 5.37,
      "ret6m": -1.8,
      "ret1y": -11.14,
      "ret2y": -18.59,
      "ret3y": 52.09
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.9771,
      "ret1w": 1.09,
      "ret1m": 6.07,
      "ret3m": 8.67,
      "ret6m": 2.27,
      "ret1y": 39.62,
      "ret2y": 89.39,
      "ret3y": 145.43
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5695,
      "ret1w": 1.53,
      "ret1m": 1.88,
      "ret3m": 11.84,
      "ret6m": 2.07,
      "ret1y": 3.2,
      "ret2y": 41.05,
      "ret3y": 52.22
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7204,
      "ret1w": 0.51,
      "ret1m": 2.45,
      "ret3m": 4.2,
      "ret6m": 4.52,
      "ret1y": 8.19,
      "ret2y": 29.61,
      "ret3y": 55.48
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.3278,
      "ret1w": 0.58,
      "ret1m": 2.45,
      "ret3m": 5.34,
      "ret6m": 0.2,
      "ret1y": 4.36,
      "ret2y": 19.66,
      "ret3y": 40.99
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.322,
      "ret1w": -0.75,
      "ret1m": 0.76,
      "ret3m": -1.86,
      "ret6m": 2.48,
      "ret1y": 1.46,
      "ret2y": 7.04,
      "ret3y": -3.97
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.115,
      "ret1w": 0.81,
      "ret1m": 1.05,
      "ret3m": 9.25,
      "ret6m": -3.86,
      "ret1y": -13.95,
      "ret2y": 22.04,
      "ret3y": 56.46
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0113,
      "ret1w": 0.04,
      "ret1m": 0.12,
      "ret3m": 0.28,
      "ret6m": 0.61,
      "ret1y": 1.52,
      "ret2y": 2.22,
      "ret3y": 3.69
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0102,
      "ret1w": 0.05,
      "ret1m": 0.13,
      "ret3m": 0.29,
      "ret6m": 0.59,
      "ret1y": 1.53,
      "ret2y": 2.28,
      "ret3y": 3.88
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.491,
      "ret1w": -0.47,
      "ret1m": 1.91,
      "ret3m": 4.34,
      "ret6m": -3.68,
      "ret1y": 3.76,
      "ret2y": 14.78,
      "ret3y": 41.73
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.993,
      "ret1w": -0.53,
      "ret1m": 2.92,
      "ret3m": 7.31,
      "ret6m": -1.64,
      "ret1y": 6.17,
      "ret2y": 26.18,
      "ret3y": 72.41
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7076,
      "ret1w": -0.08,
      "ret1m": 0.68,
      "ret3m": 13.12,
      "ret6m": -2.27,
      "ret1y": -7.27,
      "ret2y": 40.27,
      "ret3y": 71.45
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1885,
      "ret1w": -0.17,
      "ret1m": 1.31,
      "ret3m": 5.36,
      "ret6m": 0.55,
      "ret1y": 6.01,
      "ret2y": 18.12,
      "ret3y": 45.67
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2508,
      "ret1w": -0.17,
      "ret1m": 1.32,
      "ret3m": 5.4,
      "ret6m": 0.65,
      "ret1y": 6.23,
      "ret2y": 18.6,
      "ret3y": 46.84
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.1055,
      "ret1w": -0.09,
      "ret1m": 2.47,
      "ret3m": 8.32,
      "ret6m": -3.77,
      "ret1y": -0.85,
      "ret2y": 22.28,
      "ret3y": 73.35
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8412,
      "ret1w": -0.31,
      "ret1m": 1.27,
      "ret3m": 4.16,
      "ret6m": -1.4,
      "ret1y": 2.14,
      "ret2y": 12.17,
      "ret3y": 42.62
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.6175,
      "ret1w": 0.02,
      "ret1m": 1.01,
      "ret3m": 6.48,
      "ret6m": -2.24,
      "ret1y": -2.85,
      "ret2y": 17.9,
      "ret3y": 57.5
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.1082,
      "ret1w": -0.79,
      "ret1m": 3.57,
      "ret3m": 4.94,
      "ret6m": -0.59,
      "ret1y": 15.93,
      "ret2y": 36.69,
      "ret3y": 89.36
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1682,
      "ret1w": 0.01,
      "ret1m": -0.23,
      "ret3m": 4.62,
      "ret6m": 0.44,
      "ret1y": -0.5,
      "ret2y": 7.17,
      "ret3y": 30.03
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5164,
      "ret1w": 0.11,
      "ret1m": -0.58,
      "ret3m": 1.56,
      "ret6m": 5.34,
      "ret1y": 1.67,
      "ret2y": 11.95,
      "ret3y": 30.23
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5036,
      "ret1w": -0.16,
      "ret1m": 1.11,
      "ret3m": 4.19,
      "ret6m": 1.98,
      "ret1y": 17.74,
      "ret2y": 17.76,
      "ret3y": 40.32
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.9142,
      "ret1w": -0.4,
      "ret1m": 2.59,
      "ret3m": 5.12,
      "ret6m": -2.73,
      "ret1y": 9.39,
      "ret2y": 24.14,
      "ret3y": 67.87
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.2063,
      "ret1w": 0.69,
      "ret1m": 0.35,
      "ret3m": -5.66,
      "ret6m": -6.2,
      "ret1y": 2.0,
      "ret2y": 20.55,
      "ret3y": 55.23
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2079,
      "ret1w": 0.69,
      "ret1m": 0.36,
      "ret3m": -5.64,
      "ret6m": -6.23,
      "ret1y": 1.98,
      "ret2y": 20.3,
      "ret3y": 54.7
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4576,
      "ret1w": -0.29,
      "ret1m": 2.66,
      "ret3m": 5.79,
      "ret6m": -6.68,
      "ret1y": -1.76,
      "ret2y": 9.75,
      "ret3y": 45.27
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4907,
      "ret1w": -0.29,
      "ret1m": 2.67,
      "ret3m": 5.83,
      "ret6m": -6.59,
      "ret1y": -1.56,
      "ret2y": 10.19,
      "ret3y": 46.43
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.1419,
      "ret1w": -0.23,
      "ret1m": 4.56,
      "ret3m": 1.45,
      "ret6m": -5.26,
      "ret1y": 5.17,
      "ret2y": 23.45,
      "ret3y": 71.93
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1687,
      "ret1w": -0.01,
      "ret1m": -0.1,
      "ret3m": 0.28,
      "ret6m": -0.07,
      "ret1y": -0.24,
      "ret2y": 2.24,
      "ret3y": 8.2
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1885,
      "ret1w": -0.01,
      "ret1m": -0.1,
      "ret3m": 0.31,
      "ret6m": 0.0,
      "ret1y": -0.08,
      "ret2y": 2.55,
      "ret3y": 8.86
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0841,
      "ret1w": 0.03,
      "ret1m": 0.06,
      "ret3m": 0.19,
      "ret6m": 0.39,
      "ret1y": 0.93,
      "ret2y": 1.84,
      "ret3y": 3.35
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4103,
      "ret1w": 0.01,
      "ret1m": -0.04,
      "ret3m": -0.01,
      "ret6m": 0.13,
      "ret1y": 0.13,
      "ret2y": 0.66,
      "ret3y": 12.25
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4623,
      "ret1w": 0.01,
      "ret1m": -0.03,
      "ret3m": 0.03,
      "ret6m": 0.23,
      "ret1y": 0.34,
      "ret2y": 1.06,
      "ret3y": 13.15
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1601,
      "ret1w": -0.3,
      "ret1m": 1.27,
      "ret3m": 2.77,
      "ret6m": 10.02,
      "ret1y": 12.75,
      "ret2y": 27.97,
      "ret3y": 70.89
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2551,
      "ret1w": -0.35,
      "ret1m": -0.35,
      "ret3m": 2.75,
      "ret6m": 3.25,
      "ret1y": 4.0,
      "ret2y": 11.78,
      "ret3y": 54.09
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 4.7172
      },
      {
        "date": "2026-08-18",
        "nav": 4.7149
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 4.4742
      },
      {
        "date": "2026-08-18",
        "nav": 4.4359
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 5.9244
      },
      {
        "date": "2026-08-18",
        "nav": 5.9822
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 0.7032
      },
      {
        "date": "2026-08-18",
        "nav": 0.7063
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.2808
      },
      {
        "date": "2026-08-18",
        "nav": 2.2702
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.7763
      },
      {
        "date": "2026-08-18",
        "nav": 2.7548
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 5.5427
      },
      {
        "date": "2026-08-18",
        "nav": 5.5481
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.985
      },
      {
        "date": "2026-08-18",
        "nav": 1.994
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.4147
      },
      {
        "date": "2026-08-18",
        "nav": 1.4142
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 3.738
      },
      {
        "date": "2026-08-18",
        "nav": 3.72
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.487
      },
      {
        "date": "2026-08-18",
        "nav": 2.464
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.9149
      },
      {
        "date": "2026-08-18",
        "nav": 1.9445
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.9217
      },
      {
        "date": "2026-08-18",
        "nav": 1.9245
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.7202
      },
      {
        "date": "2026-08-18",
        "nav": 1.7168
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.6013
      },
      {
        "date": "2026-08-18",
        "nav": 2.6156
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.5392
      },
      {
        "date": "2026-08-18",
        "nav": 2.5444
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.122
      },
      {
        "date": "2026-08-18",
        "nav": 1.109
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.3076
      },
      {
        "date": "2026-08-18",
        "nav": 2.3139
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.3581
      },
      {
        "date": "2026-08-18",
        "nav": 1.363
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.3472
      },
      {
        "date": "2026-08-18",
        "nav": 1.3515
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.4329
      },
      {
        "date": "2026-08-18",
        "nav": 1.4374
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.1012
      },
      {
        "date": "2026-08-18",
        "nav": 1.1006
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.0737
      },
      {
        "date": "2026-08-18",
        "nav": 1.0731
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 0.7322
      },
      {
        "date": "2026-08-18",
        "nav": 0.7304
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 0.7506
      },
      {
        "date": "2026-08-18",
        "nav": 0.7488
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.9779
      },
      {
        "date": "2026-08-18",
        "nav": 2.9525
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.6304
      },
      {
        "date": "2026-08-18",
        "nav": 2.6318
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 0.7725
      },
      {
        "date": "2026-08-18",
        "nav": 0.7712
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 4.4707
      },
      {
        "date": "2026-08-18",
        "nav": 4.4436
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 0.5292
      },
      {
        "date": "2026-08-18",
        "nav": 0.5287
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 0.5392
      },
      {
        "date": "2026-08-18",
        "nav": 0.5388
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.2756
      },
      {
        "date": "2026-08-18",
        "nav": 1.2782
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.1488
      },
      {
        "date": "2026-08-18",
        "nav": 1.1475
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.497
      },
      {
        "date": "2026-08-18",
        "nav": 1.4917
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 2.9984
      },
      {
        "date": "2026-08-18",
        "nav": 3.0197
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 3.553
      },
      {
        "date": "2026-08-18",
        "nav": 3.539
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 1.4572
      },
      {
        "date": "2026-08-18",
        "nav": 1.4602
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 0.6827
      },
      {
        "date": "2026-08-18",
        "nav": 0.6861
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-08-17",
        "nav": 15.778
      },
      {
        "date": "2026-08-18",
        "nav": 15.636
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.33,
      "nav": 4.7149,
      "price": 4.7149,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.32,
      "nav": 4.4359,
      "price": 4.4359,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -1.04,
      "nav": 5.9822,
      "price": 5.9822,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.1,
      "nav": 0.7063,
      "price": 0.7063,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.2702,
      "price": 2.2702,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.7548,
      "price": 2.7548,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 5.5481,
      "price": 5.5481,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.24,
      "nav": 1.994,
      "price": 1.994,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.19,
      "nav": 1.4142,
      "price": 1.4142,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.29,
      "nav": 3.72,
      "price": 3.72,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.15,
      "nav": 1.123,
      "price": 1.123,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.464,
      "price": 2.464,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.35,
      "nav": 1.9445,
      "price": 1.9445,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.9245,
      "price": 1.9245,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.19,
      "nav": 1.7168,
      "price": 1.7168,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.57,
      "nav": 2.6156,
      "price": 2.6156,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.03,
      "nav": 2.5444,
      "price": 2.5444,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 1.109,
      "price": 1.109,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 2.3139,
      "price": 2.3139,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.19,
      "nav": 1.363,
      "price": 1.363,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.99,
      "sharpe": 0.57,
      "calmar": 0.57
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 9.46,
      "sharpe": 1.31,
      "calmar": 1.31
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 31.28,
      "sharpe": 1.96,
      "calmar": 1.96
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 3.06,
      "sharpe": -1.57,
      "calmar": -1.57
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 0.7,
      "sharpe": -4.39,
      "calmar": -4.39
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.54,
      "sharpe": -4.52,
      "calmar": -4.52
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.72,
      "sharpe": -0.94,
      "calmar": -0.94
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 7.33,
      "sharpe": -0.14,
      "calmar": -0.14
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.7,
      "sharpe": 0.54,
      "calmar": 0.54
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.65,
      "sharpe": 4.2,
      "calmar": 4.2
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 4.41,
      "sharpe": -1.05,
      "calmar": -1.05
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 0.6,
      "sharpe": -2.56,
      "calmar": -2.56
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 10.62,
      "sharpe": -3.47,
      "calmar": -3.47
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.11,
      "sharpe": -0.67,
      "calmar": -0.67
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.71,
      "sharpe": 0.04,
      "calmar": 0.04
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 17.1,
      "sharpe": 2.81,
      "calmar": 2.81
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.92,
      "sharpe": -1.84,
      "calmar": -1.84
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 0.14,
      "sharpe": 1.9,
      "calmar": 1.9
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.5,
      "sharpe": -1.26,
      "calmar": -1.26
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 5.8,
      "sharpe": 0.55,
      "calmar": 0.55
    }
  ],
  "news": [
    {
      "title": "中国科协名誉主席万钢在回应网传“10分钟快充续航1500公里”的固态电池现阶段能否实现时表示，这是美好的理想，固态电池2030年左右可以进入产业化。目前他看好钠离子电池的发展前景，尤其适合商用车和高寒地区，成本低、安全性好。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:50",
      "impact": "neutral"
    },
    {
      "title": "中国网财经8月19日讯今日，南京市多家南京市属集团及上市公司发布公告：南京市国资委将其持有的产业集团股权统一作为资本金注入南京市国有资产投资管理控股(集团)有限责任公司(以下简称“南京市国资集团”)。南京市国资集团公告称，此次操作预计能较大程度增强集团资产实力和偿债能力，未来资产规模将进一步提升。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:23",
      "impact": "neutral"
    },
    {
      "title": "·《全民医疗保障“十五五”规划》发布·宇树科技开盘股价大涨一签浮盈逾47万元·可灵AI第二季度收入超8.5亿元同比增长超200%·国家医保局19日发布《全面医疗保障“十五五”规划》。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:58",
      "impact": "neutral"
    },
    {
      "title": "8月以来，全国鸡蛋市场正式进入中秋备货旺季，价格持续走强。据Mysteel农产品数据终端监测，8月17日主产区均价已升至5.15元/斤，较8月8日的4.46元/斤上涨0.69元/斤，9天累计涨幅达15.5%，同比涨幅高达58.46%，为近三年同期最高水平。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "10:47",
      "impact": "neutral"
    },
    {
      "title": "今年以来，为规范与引导科技保险发展，各地陆续发布“科技保险目录”，如广东、江苏、河北、广西、贵州等省市。8月18日，深圳市科技创新局、国家金融监督管理总局深圳监管局发布《科技保险目录》，将相关险种按风险类别归类管理，并明确了具体险种细类。同日，作为深圳科技保险目录中的产品之一，深圳正式发布了首个普惠型综合科技保险产品——“深圳惠科保”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:42",
      "impact": "neutral"
    },
    {
      "title": "2026年是“十五五”开局之年，全国碳排放权交易市场也迎来运行五周年。五年间，纳入市场的控排企业从约2000家增至3378家，占全国二氧化碳排放量的65%以上。今年，欧盟碳边境调节机制（CBAM）正式进入强制征收阶段，国家碳标识试点同步推进，多套体系并行、数据口径各异，企业碳管理面临多重合规要求的叠加压力。AI正在成为新的变量。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:38",
      "impact": "neutral"
    },
    {
      "title": "8月19日，上海市政府举行“开局起步‘十五五’”系列主题新闻发布会，市妇儿工委、市发展改革委、市教委、市民政局、市卫生健康委、市检察院相关负责人出席，介绍《上海市妇女儿童发展“十五五”规划》有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:35",
      "impact": "neutral"
    },
    {
      "title": "人民币汇率延续升值走势。19日，人民币对美元汇率中间价报6.7854，升至三年半高位，较2025年末7.03的水平升值约3.55%，人民币兑美元即期汇率则从6.989升至6.74，升值幅度超3.4%。多位分析人士认为，本轮人民币汇率走强并非单一因素推动，而是美元回调、国内出口保持较快增长、企业结汇需求释放以及汇率预期改善共同作用的结果。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "13:34",
      "impact": "neutral"
    },
    {
      "title": "近期，多地宣布今年起上调最低工资标准。日前，广东省人民政府印发《关于调整我省最低工资标准的通知》，决定从2026年9月1日起调整提高月最低工资标准和非全日制小时最低工资标准。此次调整后全省分为三类标准。其中，广州、深圳执行一类标准，广州市调整为2680元/月，深圳市调整为2700元/月，对应的非全日制小时最低工资标准均为25.4元/小时。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:33",
      "impact": "neutral"
    },
    {
      "title": "央地“联动”，促消费政策密集落地上海易居房地产研究院副院长严跃进对界面新闻表示，住房公积金支持范围延伸至装修、物业费等日常住房消费环节，有助于激活住房消费链条中的存量环节。当前市场信心仍有待提振，住房公积金政策的持续发力，有望带动部分观望需求及改善性需求入市，有助于巩固当前“量价趋稳”的态势，也有助于初步建立起覆盖购房、装修、契税缴纳及物业持有等环节的住房消费全链条支持体系。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:31",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 35,
    "label": "谨慎",
    "upDownRatio": "0/3,384",
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
