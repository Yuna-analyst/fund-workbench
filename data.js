// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-16 14:44:02
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-16 14:44 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-16",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3716.28,
      "change": 8.8,
      "changePct": "+0.24%",
      "high": 3750.77,
      "low": 3681.28,
      "volume": 472632158.0,
      "amount": 732475190000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11802.46,
      "change": -14.33,
      "changePct": "-0.12%",
      "high": 11993.85,
      "low": 11698.5,
      "volume": 550865831.0,
      "amount": 822945590000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2772.38,
      "change": -10.79,
      "changePct": "-0.39%",
      "high": 2832.13,
      "low": 2743.87,
      "volume": 166968940.0,
      "amount": 394225950000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1358.65,
      "change": -0.87,
      "changePct": "-0.06%",
      "high": 1389.43,
      "low": 1341.21,
      "volume": 7634690.0,
      "amount": 71607600000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4170.61,
      "change": 4.6,
      "changePct": "+0.11%",
      "high": 4206.89,
      "low": 4127.94,
      "volume": 184705168.0,
      "amount": 413749300000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6772.75,
      "change": 3.5,
      "changePct": "+0.05%",
      "high": 6907.9,
      "low": 6719.82,
      "volume": 142052846.0,
      "amount": 258044620000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.69万亿",
      "label": "成交额",
      "rawAmount": 2693048250000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,977/1,511",
      "label": "涨/跌家数",
      "rawUp": 2977,
      "rawDown": 1511,
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
    "totalInflow": 17.15,
    "totalOutflow": 0,
    "netFlow": 17.15,
    "netFlowTrend": [
      3.43,
      6.86,
      10.29,
      13.72,
      17.15
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
      "inflow": 6.99,
      "pct": 0.19
    },
    {
      "name": "银行",
      "inflow": 2.43,
      "pct": 0.12
    },
    {
      "name": "有色",
      "inflow": 1.79,
      "pct": 0.79
    },
    {
      "name": "军工",
      "inflow": 1.55,
      "pct": 2.72
    },
    {
      "name": "白酒",
      "inflow": 1.46,
      "pct": 0.96
    },
    {
      "name": "煤炭",
      "inflow": 1.25,
      "pct": 1.2
    },
    {
      "name": "地产",
      "inflow": 0.65,
      "pct": 2.29
    },
    {
      "name": "光伏",
      "inflow": 0.47,
      "pct": 0.42
    },
    {
      "name": "人工智能",
      "inflow": 0.36,
      "pct": 0.48
    },
    {
      "name": "钢铁",
      "inflow": 0.2,
      "pct": 1.19
    },
    {
      "name": "农业",
      "inflow": 0.16,
      "pct": 2.18
    },
    {
      "name": "食品",
      "inflow": 0.09,
      "pct": 0.61
    },
    {
      "name": "家电",
      "inflow": 0.07,
      "pct": 0.22
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.62
    },
    {
      "name": "计算机",
      "inflow": -0.08,
      "pct": -0.2
    },
    {
      "name": "电子",
      "inflow": -0.22,
      "pct": -0.44
    },
    {
      "name": "云计算",
      "inflow": -0.23,
      "pct": -0.56
    },
    {
      "name": "新能源",
      "inflow": -0.33,
      "pct": -0.29
    },
    {
      "name": "新能源车",
      "inflow": -0.51,
      "pct": -0.45
    },
    {
      "name": "5G",
      "inflow": -2.25,
      "pct": -0.49
    }
  ],
  "sectors": [
    {
      "name": "军工",
      "code": "512660",
      "price": 1.059,
      "changePct": 2.72,
      "change": 0.028,
      "turnover": 5.15
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.205,
      "changePct": 2.29,
      "change": 0.027,
      "turnover": 2.17
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.704,
      "changePct": 2.18,
      "change": 0.015,
      "turnover": 0.53
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.265,
      "changePct": 1.2,
      "change": 0.015,
      "turnover": 4.15
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.108,
      "changePct": 1.19,
      "change": 0.013,
      "turnover": 0.65
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.421,
      "changePct": 0.96,
      "change": 0.004,
      "turnover": 4.87
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.525,
      "changePct": 0.79,
      "change": 0.012,
      "turnover": 5.98
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.975,
      "changePct": 0.62,
      "change": 0.006,
      "turnover": 0.05
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.497,
      "changePct": 0.61,
      "change": 0.003,
      "turnover": 0.29
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.846,
      "changePct": 0.48,
      "change": 0.004,
      "turnover": 1.21
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.717,
      "changePct": 0.42,
      "change": 0.003,
      "turnover": 1.57
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.345,
      "changePct": 0.22,
      "change": 0.003,
      "turnover": 0.24
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.522,
      "changePct": 0.19,
      "change": 0.001,
      "turnover": 23.31
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.864,
      "changePct": 0.12,
      "change": 0.001,
      "turnover": 8.09
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.004,
      "changePct": -0.2,
      "change": -0.002,
      "turnover": 0.26
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.064,
      "changePct": -0.29,
      "change": -0.006,
      "turnover": 1.11
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.682,
      "changePct": -0.44,
      "change": -0.003,
      "turnover": 0.74
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.342,
      "changePct": -0.45,
      "change": -0.006,
      "turnover": 1.69
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.807,
      "changePct": -0.49,
      "change": -0.004,
      "turnover": 7.51
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.42,
      "changePct": -0.56,
      "change": -0.008,
      "turnover": 0.77
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.917,
      "changePct": -0.65,
      "change": -0.006,
      "turnover": 5.88
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.834,
      "changePct": -0.71,
      "change": -0.006,
      "turnover": 11.4
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.493,
      "changePct": -0.8,
      "change": -0.004,
      "turnover": 10.41
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.796,
      "changePct": -1.73,
      "change": -0.014,
      "turnover": 9.72
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.322,
      "changePct": -2.13,
      "change": -0.007,
      "turnover": 7.27
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.008,
      "changePct": -2.42,
      "change": -0.025,
      "turnover": 0.88
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.367,
      "changePct": -2.65,
      "change": -0.01,
      "turnover": 5.79
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.782,
      "changePct": -3.1,
      "change": -0.025,
      "turnover": 4.75
    }
  ],
  "etfFlow": [
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.809,
      "changePct": 0.1,
      "amount": 33.84,
      "netFlow": 8.46
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.125,
      "changePct": 0.29,
      "amount": 16.41,
      "netFlow": 4.1
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.425,
      "changePct": 0.02,
      "amount": 9.37,
      "netFlow": 2.34
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.064,
      "changePct": -0.29,
      "amount": 1.11,
      "netFlow": -0.28
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.367,
      "changePct": -2.65,
      "amount": 5.79,
      "netFlow": -1.45
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.493,
      "changePct": -0.8,
      "amount": 10.41,
      "netFlow": -2.6
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.834,
      "changePct": -0.71,
      "amount": 11.4,
      "netFlow": -2.85
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.866,
      "changePct": -0.31,
      "amount": 54.01,
      "netFlow": -13.5
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.43,
      "changePct": -0.56,
      "amount": 89.37,
      "netFlow": -22.34
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.236,
      "changePct": -0.14,
      "amount": 160.93,
      "netFlow": -40.23
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.236,
      "changePct": -0.14,
      "amount": 160.93,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.866,
      "changePct": -0.31,
      "amount": 54.01,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.809,
      "changePct": 0.1,
      "amount": 33.84,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.425,
      "changePct": 0.02,
      "amount": 9.37,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.125,
      "changePct": 0.29,
      "amount": 16.41,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "军工",
      "turnover": 5.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 2.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.53,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 4.15,
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
      "name": "白酒",
      "turnover": 4.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 5.98,
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
      "name": "食品",
      "turnover": 0.29,
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
      "name": "光伏",
      "turnover": 1.57,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 23.31,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "银行",
      "turnover": 8.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.11,
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
      "name": "新能源车",
      "turnover": 1.69,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 7.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.77,
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
      "nav": 3.7984,
      "ret1w": -1.04,
      "ret1m": -9.79,
      "ret3m": -17.24,
      "ret6m": -17.81,
      "ret1y": -14.48,
      "ret2y": -1.9,
      "ret3y": 97.74
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.3672,
      "ret1w": -0.07,
      "ret1m": -8.14,
      "ret3m": -19.09,
      "ret6m": -26.65,
      "ret1y": -25.66,
      "ret2y": -15.29,
      "ret3y": 22.68
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.4448,
      "ret1w": -1.69,
      "ret1m": -11.88,
      "ret3m": -25.53,
      "ret6m": -21.49,
      "ret1y": -7.53,
      "ret2y": 44.5,
      "ret3y": 147.52
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7061,
      "ret1w": 1.0,
      "ret1m": 1.31,
      "ret3m": 2.16,
      "ret6m": 1.92,
      "ret1y": -5.59,
      "ret2y": -14.03,
      "ret3y": -4.61
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9227,
      "ret1w": 1.79,
      "ret1m": -3.95,
      "ret3m": -1.68,
      "ret6m": -7.86,
      "ret1y": -31.78,
      "ret2y": -35.61,
      "ret3y": -13.37
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5987,
      "ret1w": 3.35,
      "ret1m": -2.53,
      "ret3m": -3.12,
      "ret6m": 0.45,
      "ret1y": -25.74,
      "ret2y": -25.25,
      "ret3y": 8.77
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1959,
      "ret1w": 0.96,
      "ret1m": -1.73,
      "ret3m": -2.95,
      "ret6m": -2.05,
      "ret1y": -9.89,
      "ret2y": 1.32,
      "ret3y": 29.3
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.737,
      "ret1w": 0.06,
      "ret1m": -6.91,
      "ret3m": -9.2,
      "ret6m": -8.68,
      "ret1y": -15.1,
      "ret2y": -6.41,
      "ret3y": 41.56
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1866,
      "ret1w": -0.07,
      "ret1m": -7.06,
      "ret3m": -10.63,
      "ret6m": -13.1,
      "ret1y": -15.56,
      "ret2y": -5.98,
      "ret3y": 14.1
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.784,
      "ret1w": -0.61,
      "ret1m": -7.75,
      "ret3m": -18.36,
      "ret6m": -24.82,
      "ret1y": -4.23,
      "ret2y": 37.48,
      "ret3y": 154.25
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.107,
      "ret1w": 0.18,
      "ret1m": -0.72,
      "ret3m": 2.12,
      "ret6m": 3.75,
      "ret1y": -3.49,
      "ret2y": -15.69,
      "ret3y": -10.73
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.249,
      "ret1w": -1.32,
      "ret1m": -7.94,
      "ret3m": -2.56,
      "ret6m": -6.14,
      "ret1y": -17.26,
      "ret2y": -13.23,
      "ret3y": 12.73
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.4704,
      "ret1w": 0.06,
      "ret1m": -4.28,
      "ret3m": -15.59,
      "ret6m": -27.63,
      "ret1y": -53.19,
      "ret2y": -45.4,
      "ret3y": -13.09
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8571,
      "ret1w": -0.18,
      "ret1m": -1.43,
      "ret3m": -1.6,
      "ret6m": -1.39,
      "ret1y": 2.08,
      "ret2y": -5.13,
      "ret3y": -4.86
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4901,
      "ret1w": 0.03,
      "ret1m": -6.21,
      "ret3m": -10.19,
      "ret6m": -8.88,
      "ret1y": -13.29,
      "ret2y": -2.37,
      "ret3y": 36.98
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.8319,
      "ret1w": -1.53,
      "ret1m": -10.42,
      "ret3m": -23.47,
      "ret6m": -34.56,
      "ret1y": -15.23,
      "ret2y": 43.69,
      "ret3y": 105.74
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5583,
      "ret1w": 1.27,
      "ret1m": -2.81,
      "ret3m": 1.37,
      "ret6m": 4.52,
      "ret1y": -4.58,
      "ret2y": -5.44,
      "ret3y": 2.88
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.938,
      "ret1w": -0.95,
      "ret1m": -6.57,
      "ret3m": -6.01,
      "ret6m": -16.62,
      "ret1y": -10.5,
      "ret2y": -17.36,
      "ret3y": -12.91
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3395,
      "ret1w": 0.47,
      "ret1m": 1.15,
      "ret3m": 2.74,
      "ret6m": 2.82,
      "ret1y": -4.34,
      "ret2y": 2.86,
      "ret3y": 5.07
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2273,
      "ret1w": 0.31,
      "ret1m": -4.2,
      "ret3m": -7.38,
      "ret6m": -2.48,
      "ret1y": -4.59,
      "ret2y": 5.86,
      "ret3y": 51.63
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.0644,
      "ret1w": -0.23,
      "ret1m": -7.03,
      "ret3m": -14.97,
      "ret6m": -19.28,
      "ret1y": -20.89,
      "ret2y": -7.67,
      "ret3y": 17.98
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.1328,
      "ret1w": -0.24,
      "ret1m": -7.03,
      "ret3m": -14.94,
      "ret6m": -19.2,
      "ret1y": -20.73,
      "ret2y": -7.31,
      "ret3y": 18.92
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0573,
      "ret1w": 0.15,
      "ret1m": -0.89,
      "ret3m": -1.97,
      "ret6m": -4.24,
      "ret1y": -3.26,
      "ret2y": -1.37,
      "ret3y": 3.96
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0319,
      "ret1w": 0.16,
      "ret1m": -0.88,
      "ret3m": -1.93,
      "ret6m": -4.09,
      "ret1y": -2.96,
      "ret2y": -0.78,
      "ret3y": 5.22
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.695,
      "ret1w": 0.52,
      "ret1m": -1.05,
      "ret3m": -0.64,
      "ret6m": -5.33,
      "ret1y": -13.04,
      "ret2y": -14.67,
      "ret3y": -2.67
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.713,
      "ret1w": 0.52,
      "ret1m": -1.05,
      "ret3m": -0.61,
      "ret6m": -5.21,
      "ret1y": -12.83,
      "ret2y": -14.25,
      "ret3y": -1.7
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.3791,
      "ret1w": -0.42,
      "ret1m": -6.64,
      "ret3m": -17.67,
      "ret6m": -23.68,
      "ret1y": -0.2,
      "ret2y": 33.62,
      "ret3y": 107.76
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2906,
      "ret1w": -0.07,
      "ret1m": -5.26,
      "ret3m": -5.65,
      "ret6m": -11.57,
      "ret1y": -7.95,
      "ret2y": 4.86,
      "ret3y": 53.6
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6808,
      "ret1w": -0.22,
      "ret1m": -4.19,
      "ret3m": -3.53,
      "ret6m": -10.66,
      "ret1y": -23.95,
      "ret2y": -15.38,
      "ret3y": -1.72
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.7723,
      "ret1w": -0.96,
      "ret1m": -6.72,
      "ret3m": -6.63,
      "ret6m": -16.71,
      "ret1y": 1.83,
      "ret2y": 19.34,
      "ret3y": 91.93
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4709,
      "ret1w": 0.09,
      "ret1m": -3.42,
      "ret3m": -7.07,
      "ret6m": -14.69,
      "ret1y": -8.79,
      "ret2y": 2.97,
      "ret3y": 29.05
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4801,
      "ret1w": 0.08,
      "ret1m": -3.42,
      "ret3m": -7.05,
      "ret6m": -14.62,
      "ret1y": -8.62,
      "ret2y": 3.38,
      "ret3y": 30.07
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2684,
      "ret1w": 0.26,
      "ret1m": -0.44,
      "ret3m": -0.31,
      "ret6m": 1.59,
      "ret1y": -2.01,
      "ret2y": -1.38,
      "ret3y": 0.98
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0981,
      "ret1w": 0.07,
      "ret1m": -0.97,
      "ret3m": -0.67,
      "ret6m": -3.99,
      "ret1y": -7.07,
      "ret2y": -6.27,
      "ret3y": 3.65
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.2034,
      "ret1w": -1.07,
      "ret1m": -6.82,
      "ret3m": -12.33,
      "ret6m": -20.46,
      "ret1y": -19.33,
      "ret2y": -24.41,
      "ret3y": -11.59
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8806,
      "ret1w": 0.47,
      "ret1m": -0.99,
      "ret3m": -3.39,
      "ret6m": 0.52,
      "ret1y": -10.33,
      "ret2y": 3.38,
      "ret3y": 31.75
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.655,
      "ret1w": -1.04,
      "ret1m": -9.01,
      "ret3m": -21.59,
      "ret6m": -38.28,
      "ret1y": -18.23,
      "ret2y": 33.62,
      "ret3y": 103.45
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.537,
      "ret1w": 0.03,
      "ret1m": 0.54,
      "ret3m": 2.13,
      "ret6m": 5.98,
      "ret1y": 2.62,
      "ret2y": 1.43,
      "ret3y": 2.11
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5323,
      "ret1w": 2.5,
      "ret1m": -5.85,
      "ret3m": -12.85,
      "ret6m": -21.12,
      "ret1y": -21.84,
      "ret2y": -11.18,
      "ret3y": 4.33
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 11.445,
      "ret1w": -1.57,
      "ret1m": -9.38,
      "ret3m": -24.57,
      "ret6m": -26.95,
      "ret1y": 7.55,
      "ret2y": 70.46,
      "ret3y": 202.86
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0565,
      "ret1w": 0.03,
      "ret1m": -0.34,
      "ret3m": -0.87,
      "ret6m": -1.57,
      "ret1y": -1.17,
      "ret2y": 0.27,
      "ret3y": 3.18
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1049,
      "ret1w": 0.03,
      "ret1m": -0.33,
      "ret3m": -0.85,
      "ret6m": -1.52,
      "ret1y": -1.05,
      "ret2y": 0.51,
      "ret3y": 3.87
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.067,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.19,
      "ret6m": 0.43,
      "ret1y": 0.7,
      "ret2y": 1.69,
      "ret3y": 3.02
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1014,
      "ret1w": 0.03,
      "ret1m": 0.08,
      "ret3m": 0.18,
      "ret6m": 0.41,
      "ret1y": 0.77,
      "ret2y": 1.6,
      "ret3y": 3.92
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1111,
      "ret1w": 0.03,
      "ret1m": 0.08,
      "ret3m": 0.2,
      "ret6m": 0.46,
      "ret1y": 0.88,
      "ret2y": 1.81,
      "ret3y": 4.35
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0777,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.12,
      "ret6m": 0.35,
      "ret1y": 0.65,
      "ret2y": 1.54,
      "ret3y": 2.99
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0926,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.15,
      "ret6m": 0.43,
      "ret1y": 0.81,
      "ret2y": 1.86,
      "ret3y": 3.65
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0254,
      "ret1w": -0.01,
      "ret1m": -1.82,
      "ret3m": -3.46,
      "ret6m": -4.62,
      "ret1y": -4.44,
      "ret2y": 1.51,
      "ret3y": 6.66
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1792,
      "ret1w": -0.03,
      "ret1m": -1.91,
      "ret3m": -3.19,
      "ret6m": -3.76,
      "ret1y": -4.46,
      "ret2y": -0.97,
      "ret3y": 1.49
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0323,
      "ret1w": -0.02,
      "ret1m": -1.82,
      "ret3m": -3.43,
      "ret6m": -4.53,
      "ret1y": -4.25,
      "ret2y": 1.91,
      "ret3y": 7.51
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0446,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.17,
      "ret6m": 0.45,
      "ret1y": 0.84,
      "ret2y": 1.82,
      "ret3y": 3.67
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1302,
      "ret1w": 0.04,
      "ret1m": -1.39,
      "ret3m": -3.61,
      "ret6m": -4.42,
      "ret1y": -6.44,
      "ret2y": -3.96,
      "ret3y": 3.29
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.1994,
      "ret1w": 0.12,
      "ret1m": -0.44,
      "ret3m": -0.75,
      "ret6m": -1.39,
      "ret1y": -2.18,
      "ret2y": 0.99,
      "ret3y": 10.45
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1223,
      "ret1w": 0.01,
      "ret1m": -0.61,
      "ret3m": -1.27,
      "ret6m": -1.78,
      "ret1y": -1.03,
      "ret2y": 1.27,
      "ret3y": 8.0
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1932,
      "ret1w": 0.0,
      "ret1m": -0.61,
      "ret3m": -1.23,
      "ret6m": -1.68,
      "ret1y": -0.85,
      "ret2y": 1.68,
      "ret3y": 8.89
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9987,
      "ret1w": -0.21,
      "ret1m": -1.02,
      "ret3m": 1.53,
      "ret6m": 2.3,
      "ret1y": 7.23,
      "ret2y": 7.98,
      "ret3y": 31.63
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3651,
      "ret1w": 0.44,
      "ret1m": -3.2,
      "ret3m": 0.45,
      "ret6m": 2.65,
      "ret1y": 13.87,
      "ret2y": 12.5,
      "ret3y": 66.78
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.4994,
      "ret1w": -1.63,
      "ret1m": -7.54,
      "ret3m": -1.96,
      "ret6m": -9.87,
      "ret1y": 9.15,
      "ret2y": 30.12,
      "ret3y": 80.85
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.604,
      "ret1w": -5.17,
      "ret1m": -10.65,
      "ret3m": -5.73,
      "ret6m": -11.0,
      "ret1y": 12.72,
      "ret2y": 52.62,
      "ret3y": 124.66
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5799,
      "ret1w": -0.4,
      "ret1m": 0.31,
      "ret3m": -2.02,
      "ret6m": 11.91,
      "ret1y": 2.98,
      "ret2y": 26.03,
      "ret3y": 51.09
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6404,
      "ret1w": -2.69,
      "ret1m": -5.06,
      "ret3m": -4.73,
      "ret6m": -3.6,
      "ret1y": 3.57,
      "ret2y": 17.08,
      "ret3y": 44.44
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2167,
      "ret1w": -3.04,
      "ret1m": -5.32,
      "ret3m": -5.37,
      "ret6m": -6.87,
      "ret1y": -4.13,
      "ret2y": 2.9,
      "ret3y": 21.83
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.236,
      "ret1w": 0.73,
      "ret1m": 2.23,
      "ret3m": -2.37,
      "ret6m": -6.43,
      "ret1y": -4.04,
      "ret2y": -1.51,
      "ret3y": -13.33
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.979,
      "ret1w": 1.59,
      "ret1m": 0.76,
      "ret3m": -3.46,
      "ret6m": 1.33,
      "ret1y": -14.85,
      "ret2y": -6.83,
      "ret3y": 39.68
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.933,
      "ret1w": -1.93,
      "ret1m": -6.69,
      "ret3m": -2.87,
      "ret6m": -11.85,
      "ret1y": 6.71,
      "ret2y": 28.31,
      "ret3y": 58.97
    },
    {
      "code": "206011",
      "name": "鹏华美国房地产(QDII)",
      "type": "QDII",
      "nav": 0.866,
      "ret1w": 1.29,
      "ret1m": 1.17,
      "ret3m": -3.13,
      "ret6m": -6.88,
      "ret1y": -5.66,
      "ret2y": -9.13,
      "ret3y": -14.09
    },
    {
      "code": "164824",
      "name": "工银印度基金人民币",
      "type": "QDII",
      "nav": 1.2546,
      "ret1w": 1.42,
      "ret1m": 4.49,
      "ret3m": -0.47,
      "ret6m": -3.4,
      "ret1y": -5.98,
      "ret2y": -15.71,
      "ret3y": -21.66
    },
    {
      "code": "164212",
      "name": "天弘全球新能源汽车股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 1.6093,
      "ret1w": -3.21,
      "ret1m": -12.91,
      "ret3m": -10.17,
      "ret6m": -22.41,
      "ret1y": -13.66,
      "ret2y": 6.32,
      "ret3y": 47.4
    },
    {
      "code": "160216",
      "name": "国泰大宗商品(QDII-LOF)A",
      "type": "QDII",
      "nav": 0.621,
      "ret1w": 1.31,
      "ret1m": 0.16,
      "ret3m": -2.51,
      "ret6m": 0.49,
      "ret1y": -17.31,
      "ret2y": -6.62,
      "ret3y": 19.19
    },
    {
      "code": "100050",
      "name": "富国全球债券(QDII)人民币A",
      "type": "QDII",
      "nav": 1.2374,
      "ret1w": 0.75,
      "ret1m": 0.92,
      "ret3m": -0.55,
      "ret6m": -2.57,
      "ret1y": -3.64,
      "ret2y": -6.28,
      "ret3y": -1.38
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0154,
      "ret1w": 0.07,
      "ret1m": 0.21,
      "ret3m": 0.36,
      "ret6m": 0.69,
      "ret1y": 1.4,
      "ret2y": 2.53,
      "ret3y": 3.87
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0145,
      "ret1w": 0.07,
      "ret1m": 0.21,
      "ret3m": 0.37,
      "ret6m": 0.72,
      "ret1y": 1.41,
      "ret2y": 2.61,
      "ret3y": 4.04
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.259,
      "ret1w": 0.0,
      "ret1m": -4.62,
      "ret3m": -8.9,
      "ret6m": -15.79,
      "ret1y": -14.93,
      "ret2y": -12.69,
      "ret3y": 7.06
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.446,
      "ret1w": -0.08,
      "ret1m": -6.14,
      "ret3m": -11.28,
      "ret6m": -16.77,
      "ret1y": -16.89,
      "ret2y": -7.21,
      "ret3y": 20.61
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5308,
      "ret1w": 0.88,
      "ret1m": -3.57,
      "ret3m": -7.71,
      "ret6m": -1.92,
      "ret1y": -16.93,
      "ret2y": 2.61,
      "ret3y": 42.4
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.9424,
      "ret1w": -0.16,
      "ret1m": -4.54,
      "ret3m": -7.79,
      "ret6m": -9.92,
      "ret1y": -8.86,
      "ret2y": -1.8,
      "ret3y": 15.63
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.999,
      "ret1w": -0.15,
      "ret1m": -4.53,
      "ret3m": -7.75,
      "ret6m": -9.83,
      "ret1y": -8.68,
      "ret2y": -1.41,
      "ret3y": 16.56
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.7597,
      "ret1w": 0.05,
      "ret1m": -6.28,
      "ret3m": -11.3,
      "ret6m": -14.22,
      "ret1y": -15.94,
      "ret2y": -5.38,
      "ret3y": 24.25
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6394,
      "ret1w": 0.13,
      "ret1m": -3.17,
      "ret3m": -6.48,
      "ret6m": -10.34,
      "ret1y": -10.38,
      "ret2y": -7.88,
      "ret3y": 11.46
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4665,
      "ret1w": 0.34,
      "ret1m": -4.31,
      "ret3m": -6.03,
      "ret6m": -6.09,
      "ret1y": -12.79,
      "ret2y": -0.58,
      "ret3y": 28.15
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.6579,
      "ret1w": -0.19,
      "ret1m": -6.58,
      "ret3m": -13.84,
      "ret6m": -22.43,
      "ret1y": -14.6,
      "ret2y": -7.97,
      "ret3y": 27.71
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0308,
      "ret1w": 0.21,
      "ret1m": -1.47,
      "ret3m": -3.2,
      "ret6m": -3.38,
      "ret1y": -8.56,
      "ret2y": -7.88,
      "ret3y": 8.07
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4923,
      "ret1w": 0.82,
      "ret1m": 3.32,
      "ret3m": -0.71,
      "ret6m": 1.28,
      "ret1y": -0.98,
      "ret2y": 9.39,
      "ret3y": 28.54
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.47,
      "ret1w": -0.07,
      "ret1m": -2.54,
      "ret3m": 2.62,
      "ret6m": 0.45,
      "ret1y": 11.12,
      "ret2y": 12.78,
      "ret3y": 35.59
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.4114,
      "ret1w": 0.02,
      "ret1m": -5.28,
      "ret3m": -10.24,
      "ret6m": -17.11,
      "ret1y": -16.45,
      "ret2y": -7.62,
      "ret3y": 18.85
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0544,
      "ret1w": -1.9,
      "ret1m": -6.71,
      "ret3m": -8.61,
      "ret6m": -17.54,
      "ret1y": -11.53,
      "ret2y": -3.87,
      "ret3y": 20.08
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0565,
      "ret1w": -1.89,
      "ret1m": -6.7,
      "ret3m": -8.6,
      "ret6m": -17.47,
      "ret1y": -11.46,
      "ret2y": -3.8,
      "ret3y": 19.66
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2639,
      "ret1w": -1.86,
      "ret1m": -4.77,
      "ret3m": -7.29,
      "ret6m": -14.44,
      "ret1y": -14.45,
      "ret2y": -9.31,
      "ret3y": 13.74
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2934,
      "ret1w": -1.87,
      "ret1m": -4.76,
      "ret3m": -7.26,
      "ret6m": -14.36,
      "ret1y": -14.28,
      "ret2y": -8.95,
      "ret3y": 14.66
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.7889,
      "ret1w": -2.51,
      "ret1m": -4.98,
      "ret3m": -8.32,
      "ret6m": -22.94,
      "ret1y": -12.58,
      "ret2y": -4.98,
      "ret3y": 29.62
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1565,
      "ret1w": 0.1,
      "ret1m": -0.34,
      "ret3m": -0.52,
      "ret6m": -0.83,
      "ret1y": -0.75,
      "ret2y": 1.01,
      "ret3y": 5.88
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1767,
      "ret1w": 0.11,
      "ret1m": -0.33,
      "ret3m": -0.5,
      "ret6m": -0.75,
      "ret1y": -0.6,
      "ret2y": 1.32,
      "ret3y": 6.53
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0874,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.21,
      "ret6m": 0.51,
      "ret1y": 0.85,
      "ret2y": 1.99,
      "ret3y": 3.61
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4113,
      "ret1w": 0.01,
      "ret1m": 0.09,
      "ret3m": 0.15,
      "ret6m": 0.07,
      "ret1y": 0.1,
      "ret2y": 0.71,
      "ret3y": 6.93
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4643,
      "ret1w": 0.01,
      "ret1m": 0.1,
      "ret3m": 0.18,
      "ret6m": 0.17,
      "ret1y": 0.3,
      "ret2y": 1.12,
      "ret3y": 7.79
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9438,
      "ret1w": -0.22,
      "ret1m": -3.98,
      "ret3m": -8.82,
      "ret6m": -8.89,
      "ret1y": 1.93,
      "ret2y": 12.83,
      "ret3y": 40.51
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.0786,
      "ret1w": 0.33,
      "ret1m": -5.73,
      "ret3m": -12.42,
      "ret6m": -13.06,
      "ret1y": -10.33,
      "ret2y": -4.81,
      "ret3y": 19.53
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.49,
      "nav": 3.7984,
      "price": 3.7984,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.41,
      "nav": 3.3672,
      "price": 3.3672,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.59,
      "nav": 4.4448,
      "price": 4.4448,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 0.7061,
      "price": 0.7061,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.9227,
      "price": 1.9227,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.5987,
      "price": 2.5987,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 5.1959,
      "price": 5.1959,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.737,
      "price": 1.737,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.1866,
      "price": 1.1866,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.39,
      "nav": 2.784,
      "price": 2.784,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.107,
      "price": 1.107,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.4,
      "nav": 2.249,
      "price": 2.249,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.4704,
      "price": 1.4704,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.07,
      "nav": 1.8571,
      "price": 1.8571,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.31,
      "nav": 1.4901,
      "price": 1.4901,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.52,
      "nav": 1.8319,
      "price": 1.8319,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.14,
      "nav": 2.5583,
      "price": 2.5583,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 0.938,
      "price": 0.938,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.06,
      "nav": 2.3395,
      "price": 2.3395,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.2273,
      "price": 1.2273,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 14.68,
      "sharpe": -0.98,
      "calmar": -0.98
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 12.21,
      "sharpe": -1.95,
      "calmar": -1.95
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 17.82,
      "sharpe": -0.45,
      "calmar": -0.45
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.97,
      "sharpe": -0.89,
      "calmar": -0.89
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 5.93,
      "sharpe": -3.55,
      "calmar": -3.55
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.79,
      "sharpe": -3.42,
      "calmar": -3.42
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.59,
      "sharpe": -1.47,
      "calmar": -1.47
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 10.37,
      "sharpe": -1.27,
      "calmar": -1.27
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 10.59,
      "sharpe": -1.29,
      "calmar": -1.29
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 11.62,
      "sharpe": -0.33,
      "calmar": -0.33
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.08,
      "sharpe": -0.61,
      "calmar": -0.61
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 11.91,
      "sharpe": -1.33,
      "calmar": -1.33
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 6.42,
      "sharpe": -5.73,
      "calmar": -5.73
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.15,
      "sharpe": 0.32,
      "calmar": 0.32
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.31,
      "sharpe": -1.19,
      "calmar": -1.19
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 15.63,
      "sharpe": -0.99,
      "calmar": -0.99
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.21,
      "sharpe": -0.59,
      "calmar": -0.59
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.86,
      "sharpe": -0.91,
      "calmar": -0.91
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 1.72,
      "sharpe": -0.71,
      "calmar": -0.71
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 6.3,
      "sharpe": -0.5,
      "calmar": -0.5
    }
  ],
  "news": [
    {
      "title": "近日，北京市教育委员会印发《北京市“十五五”时期推进托幼一体化发展规划》（以下简称《规划》），系统谋划“十五五”时期推进托幼一体化建设工作。《规划》提出，到2030年，托幼一体化全面发展，优质普惠、安全规范、多元智能的托幼服务体系基本建成。到2035年，托幼服务高质量发展格局进一步健全，人民群众对托幼一体化服务的获得感、满意度进一步提升。《规划》提出7个方面、26项任务措施。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:32",
      "impact": "neutral"
    },
    {
      "title": "中共中央总书记、国家主席、中央军委主席习近平16日在内蒙古自治区乌兰察布市考察时强调，绿色发展是高质量发展的应有之义，要统筹高质量发展和高水平保护，坚持山水林田湖草沙一体化保护和系统治理，协同推进降碳、减污、扩绿、增长，坚定不移走生态优先、绿色发展之路。习近平前往察哈尔高新技术开发区，在展示厅了解内蒙古自治区推进“东数西算”工程枢纽节点建设和绿色算力产业发展等情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:01",
      "impact": "neutral"
    },
    {
      "title": "请注意！电子卖场商品信息管理有变化",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:21",
      "impact": "neutral"
    },
    {
      "title": "在上海青浦白鹤跨境电商海运出口前置集货仓内，上海弘跃供应链的出口货物装箱作业正同步完成数位堆垛图采集，直连外港海关开展监管。作为全市首个跨境电商海运出口前置集货仓，白鹤集货仓已走通全国首创的空间智能集装箱装载数字孪生系统与外港海关联动数智监管模式，带来效率与安全双提升：口岸查验效率提升50%，单箱掏箱时间大幅降低。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:20",
      "impact": "neutral"
    },
    {
      "title": "此前，有消费者反映部分成品油零售加油站利用加油机作弊等方式偷油，并偷逃税款，不仅损害了消费者合法权益，破坏了行业公平竞争秩序，更严重扰乱了正常经济税收秩序。为了引导和促进加油站行业经营主体合规经营、诚信纳税，今年6月税务总局发布了《关于在成品油零售领域全面推广“交易即开票”有关事项的公告》，明确成品油零售加油站应当于2026年11月1日前实现“交易即开票”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:16",
      "impact": "neutral"
    },
    {
      "title": "21世纪经济报道燃油车加油这件日常小事，有可能暗藏猫腻，让消费者在不知不觉中被“偷油”！此前央视曾报道一些地方加油站利用加油机偷油逃税的不法行为，引发众多消费者的关注。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:15",
      "impact": "neutral"
    },
    {
      "title": "中新网合肥10月16日电(记者陈溯)国家粮食和物资储备局党组书记、局长刘焕鑫16日表示，全谷物行动计划顺利推进。16日，2026年世界粮食日和全国粮食安全宣传周主会场活动在安徽合肥举办。刘焕鑫发表讲话时表示，中国高度重视粮食安全，坚持依靠自身解决好14亿多人口的吃饭问题，并向有需要的国家提供力所能及的帮助，为保障世界粮食安全贡献了中国力量。中国持续夯实粮食安全根基。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:10",
      "impact": "neutral"
    },
    {
      "title": "中新社西宁10月16日电(记者孙睿)西宁海关16日晚对外发布数据，今年前三季度，青海省虹鳟鱼出口3.8亿元人民币，同比增长19.9%，占中国同类产品出口的94.5%，持续居中国首位，销往11个国家和地区，首次出口阿联酋、柬埔寨。数据显示，前三季度，青海省进出口50亿元，其中民营企业进出口42.6亿元，占青海省85.1%。有进出口实绩的企业215家。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:00",
      "impact": "neutral"
    },
    {
      "title": "中证报中证网讯（记者熊彦莎）10月16日，商务部、科技部就修订《中国禁止出口限制出口技术目录》（以下简称《目录》）公开征求意见，并对相关技术实施出口前登记的临时管理措施。此次公开征求意见涉及拟增列的人工智能、生物医药、光伏三个领域40项关键技术。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:53",
      "impact": "neutral"
    },
    {
      "title": "安徽村镇银行改革重组正进入落地高峰。近日，安徽多地县级农商行密集发布召开临时股东会的公告，审议吸收合并村镇银行相关事宜。这批案例呈现出一个鲜明特征：村镇银行的发起行普遍不在注册地县区，最终承接其资产、业务和网点的，多为村镇银行所在地的另一家农商行。发起行与承接行“脱钩”，成为此轮安徽村镇银行整合的主流操作。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:49",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,977/1,511",
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
