// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-11-17 19:03:58
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-11-17 19:03 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-11-17",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3584.58,
      "change": -17.99,
      "changePct": "-0.50%",
      "high": 3604.98,
      "low": 3565.59,
      "volume": 444074698.0,
      "amount": 690514640000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 10638.52,
      "change": -52.26,
      "changePct": "-0.49%",
      "high": 10768.06,
      "low": 10556.29,
      "volume": 537885638.0,
      "amount": 767179960000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2292.2,
      "change": -27.82,
      "changePct": "-1.20%",
      "high": 2343.15,
      "low": 2263.74,
      "volume": 157894414.0,
      "amount": 365832090000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1221.19,
      "change": 7.51,
      "changePct": "+0.62%",
      "high": 1255.44,
      "low": 1198.26,
      "volume": 10045617.0,
      "amount": 96783590000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 3976.46,
      "change": -3.34,
      "changePct": "-0.08%",
      "high": 3985.99,
      "low": 3942.38,
      "volume": 179262855.0,
      "amount": 409477160000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6283.01,
      "change": -14.17,
      "changePct": "-0.23%",
      "high": 6376.51,
      "low": 6234.4,
      "volume": 125081151.0,
      "amount": 259335860000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.59万亿",
      "label": "成交额",
      "rawAmount": 2589123300000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,749/1,625",
      "label": "涨/跌家数",
      "rawUp": 2749,
      "rawDown": 1625,
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
    "totalInflow": 8.34,
    "totalOutflow": 0,
    "netFlow": 8.34,
    "netFlowTrend": [
      1.67,
      3.34,
      5.0,
      6.67,
      8.34
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
      "name": "半导体",
      "inflow": 3.93,
      "pct": 1.34
    },
    {
      "name": "芯片",
      "inflow": 1.72,
      "pct": 1.11
    },
    {
      "name": "白酒",
      "inflow": 1.46,
      "pct": 0.45
    },
    {
      "name": "医疗",
      "inflow": 1.02,
      "pct": 0.3
    },
    {
      "name": "家电",
      "inflow": 0.18,
      "pct": 1.02
    },
    {
      "name": "食品",
      "inflow": 0.06,
      "pct": 0.38
    },
    {
      "name": "基建",
      "inflow": 0.01,
      "pct": 0.11
    },
    {
      "name": "券商",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "电子",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "计算机",
      "inflow": -0.04,
      "pct": -0.1
    },
    {
      "name": "钢铁",
      "inflow": -0.1,
      "pct": -0.39
    },
    {
      "name": "农业",
      "inflow": -0.25,
      "pct": -0.82
    },
    {
      "name": "新能源车",
      "inflow": -0.29,
      "pct": -0.31
    },
    {
      "name": "云计算",
      "inflow": -0.35,
      "pct": -0.59
    },
    {
      "name": "地产",
      "inflow": -0.46,
      "pct": -0.92
    },
    {
      "name": "医药",
      "inflow": -0.76,
      "pct": -0.52
    },
    {
      "name": "军工",
      "inflow": -0.87,
      "pct": -0.73
    },
    {
      "name": "创新药",
      "inflow": -1.1,
      "pct": -1.01
    },
    {
      "name": "有色",
      "inflow": -1.41,
      "pct": -0.15
    },
    {
      "name": "银行",
      "inflow": -3.78,
      "pct": -0.11
    }
  ],
  "sectors": [
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.759,
      "changePct": 1.34,
      "change": 0.01,
      "turnover": 13.09
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.821,
      "changePct": 1.11,
      "change": 0.009,
      "turnover": 5.75
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.382,
      "changePct": 1.02,
      "change": 0.014,
      "turnover": 0.6
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.446,
      "changePct": 0.45,
      "change": 0.002,
      "turnover": 4.87
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.523,
      "changePct": 0.38,
      "change": 0.002,
      "turnover": 0.2
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.338,
      "changePct": 0.3,
      "change": 0.001,
      "turnover": 3.39
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.947,
      "changePct": 0.11,
      "change": 0.001,
      "turnover": 0.04
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.472,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 11.33
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.588,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.59
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 0.963,
      "changePct": -0.1,
      "change": -0.001,
      "turnover": 0.15
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.916,
      "changePct": -0.11,
      "change": -0.001,
      "turnover": 12.6
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.33,
      "changePct": -0.15,
      "change": -0.002,
      "turnover": 4.7
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.272,
      "changePct": -0.31,
      "change": -0.004,
      "turnover": 0.98
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.028,
      "changePct": -0.39,
      "change": -0.004,
      "turnover": 0.35
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.38,
      "changePct": -0.52,
      "change": -0.002,
      "turnover": 2.55
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.343,
      "changePct": -0.59,
      "change": -0.008,
      "turnover": 1.18
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 0.958,
      "changePct": -0.73,
      "change": -0.007,
      "turnover": 2.89
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.726,
      "changePct": -0.82,
      "change": -0.006,
      "turnover": 0.84
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.082,
      "changePct": -0.92,
      "change": -0.01,
      "turnover": 1.52
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.786,
      "changePct": -1.01,
      "change": -0.008,
      "turnover": 3.68
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 1.912,
      "changePct": -1.19,
      "change": -0.023,
      "turnover": 1.01
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.176,
      "changePct": -1.51,
      "change": -0.018,
      "turnover": 3.74
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.739,
      "changePct": -1.6,
      "change": -0.012,
      "turnover": 1.34
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.666,
      "changePct": -1.62,
      "change": -0.011,
      "turnover": 2.62
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.377,
      "changePct": -2.08,
      "change": -0.008,
      "turnover": 28.55
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.594,
      "changePct": -2.14,
      "change": -0.013,
      "turnover": 6.23
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 0.96,
      "changePct": -2.64,
      "change": -0.026,
      "turnover": 1.09
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.77,
      "changePct": -3.87,
      "change": -0.031,
      "turnover": 8.76
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.294,
      "changePct": 0.94,
      "amount": 97.75,
      "netFlow": 24.44
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.759,
      "changePct": 1.34,
      "amount": 13.09,
      "netFlow": 3.27
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 1.912,
      "changePct": -1.19,
      "amount": 1.01,
      "netFlow": -0.25
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.38,
      "changePct": -0.52,
      "amount": 2.55,
      "netFlow": -0.64
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.472,
      "changePct": 0.0,
      "amount": 11.33,
      "netFlow": -2.83
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.884,
      "changePct": -0.03,
      "amount": 20.57,
      "netFlow": -5.14
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.222,
      "changePct": -0.26,
      "amount": 26.56,
      "netFlow": -6.64
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 3.936,
      "changePct": -0.08,
      "amount": 29.24,
      "netFlow": -7.31
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.317,
      "changePct": -0.27,
      "amount": 40.94,
      "netFlow": -10.24
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.042,
      "changePct": -0.3,
      "amount": 81.15,
      "netFlow": -20.29
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.042,
      "changePct": -0.3,
      "amount": 81.15,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.884,
      "changePct": -0.03,
      "amount": 20.57,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.317,
      "changePct": -0.27,
      "amount": 40.94,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.222,
      "changePct": -0.26,
      "amount": 26.56,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 3.936,
      "changePct": -0.08,
      "amount": 29.24,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "半导体",
      "turnover": 13.09,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "芯片",
      "turnover": 5.75,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.6,
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
      "name": "食品",
      "turnover": 0.2,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.39,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 11.33,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "电子",
      "turnover": 0.59,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.15,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 12.6,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "有色",
      "turnover": 4.7,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 0.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.35,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 2.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.18,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.89,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 3.68,
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
      "nav": 3.6692,
      "ret1w": -2.55,
      "ret1m": -11.65,
      "ret3m": -3.4,
      "ret6m": -22.22,
      "ret1y": -28.29,
      "ret2y": -4.29,
      "ret3y": 70.27
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 2.5898,
      "ret1w": -0.3,
      "ret1m": -6.5,
      "ret3m": -23.09,
      "ret6m": -42.12,
      "ret1y": -46.84,
      "ret2y": -31.41,
      "ret3y": -6.33
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 2.889,
      "ret1w": -2.78,
      "ret1m": -10.79,
      "ret3m": -35.0,
      "ret6m": -51.24,
      "ret1y": -49.08,
      "ret2y": -7.48,
      "ret3y": 46.5
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7803,
      "ret1w": 0.41,
      "ret1m": 1.42,
      "ret3m": 10.51,
      "ret6m": 10.96,
      "ret1y": 8.09,
      "ret2y": -4.1,
      "ret3y": 6.32
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8709,
      "ret1w": -1.47,
      "ret1m": -9.13,
      "ret3m": -2.69,
      "ret6m": -17.97,
      "ret1y": -31.9,
      "ret2y": -39.37,
      "ret3y": -25.47
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5551,
      "ret1w": -1.07,
      "ret1m": -5.75,
      "ret3m": -1.68,
      "ret6m": -7.97,
      "ret1y": -22.92,
      "ret2y": -28.11,
      "ret3y": 5.39
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2786,
      "ret1w": 0.33,
      "ret1m": -2.23,
      "ret3m": 1.59,
      "ret6m": -4.76,
      "ret1y": -5.51,
      "ret2y": -1.49,
      "ret3y": 27.9
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.579,
      "ret1w": -0.88,
      "ret1m": -6.46,
      "ret3m": -9.1,
      "ret6m": -20.45,
      "ret1y": -25.17,
      "ret2y": -13.9,
      "ret3y": 19.8
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.0691,
      "ret1w": -0.38,
      "ret1m": -5.51,
      "ret3m": -9.9,
      "ret6m": -24.43,
      "ret1y": -24.85,
      "ret2y": -14.27,
      "ret3y": 0.02
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.466,
      "ret1w": 0.16,
      "ret1m": -4.38,
      "ret3m": -11.42,
      "ret6m": -34.03,
      "ret1y": -25.88,
      "ret2y": 18.96,
      "ret3y": 93.56
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.178,
      "ret1w": 0.51,
      "ret1m": 1.12,
      "ret3m": 6.41,
      "ret6m": 3.79,
      "ret1y": 6.61,
      "ret2y": -8.54,
      "ret3y": -7.75
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.179,
      "ret1w": -1.09,
      "ret1m": -4.81,
      "ret3m": -3.11,
      "ret6m": -12.38,
      "ret1y": -15.84,
      "ret2y": -17.87,
      "ret3y": 1.59
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.188,
      "ret1w": 2.74,
      "ret1m": -2.58,
      "ret3m": -19.21,
      "ret6m": -37.96,
      "ret1y": -60.03,
      "ret2y": -57.44,
      "ret3y": -38.18
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9111,
      "ret1w": 0.04,
      "ret1m": -0.86,
      "ret3m": 2.91,
      "ret6m": -0.55,
      "ret1y": 7.26,
      "ret2y": 0.47,
      "ret3y": -3.13
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.3583,
      "ret1w": -0.62,
      "ret1m": -4.83,
      "ret3m": -8.85,
      "ret6m": -21.04,
      "ret1y": -23.53,
      "ret2y": -13.56,
      "ret3y": 17.01
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.2769,
      "ret1w": -2.12,
      "ret1m": -12.32,
      "ret3m": -30.3,
      "ret6m": -50.91,
      "ret1y": -51.89,
      "ret2y": -1.81,
      "ret3y": 23.55
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5725,
      "ret1w": 0.11,
      "ret1m": -1.23,
      "ret3m": 0.56,
      "ret6m": 1.31,
      "ret1y": -3.97,
      "ret2y": -6.61,
      "ret3y": 3.16
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.889,
      "ret1w": -0.67,
      "ret1m": -6.32,
      "ret3m": -5.22,
      "ret6m": -20.77,
      "ret1y": -8.26,
      "ret2y": -16.6,
      "ret3y": -18.89
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.4482,
      "ret1w": 0.61,
      "ret1m": 1.87,
      "ret3m": 4.65,
      "ret6m": 6.09,
      "ret1y": 2.73,
      "ret2y": 2.47,
      "ret3y": 11.71
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.1614,
      "ret1w": -0.37,
      "ret1m": -4.2,
      "ret3m": -5.37,
      "ret6m": -14.48,
      "ret1y": -11.59,
      "ret2y": -1.92,
      "ret3y": 34.97
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 0.9115,
      "ret1w": -1.22,
      "ret1m": -6.52,
      "ret3m": -14.36,
      "ret6m": -32.34,
      "ret1y": -33.67,
      "ret2y": -21.81,
      "ret3y": -2.43
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 0.9704,
      "ret1w": -1.22,
      "ret1m": -6.51,
      "ret3m": -14.34,
      "ret6m": -32.28,
      "ret1y": -33.53,
      "ret2y": -21.51,
      "ret3y": -1.65
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0374,
      "ret1w": 0.16,
      "ret1m": -0.97,
      "ret3m": -1.88,
      "ret6m": -5.79,
      "ret1y": -5.33,
      "ret2y": -4.4,
      "ret3y": 1.87
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0131,
      "ret1w": 0.18,
      "ret1m": -0.95,
      "ret3m": -1.82,
      "ret6m": -5.64,
      "ret1y": -5.02,
      "ret2y": -3.82,
      "ret3y": 3.11
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7109,
      "ret1w": 0.3,
      "ret1m": -0.5,
      "ret3m": 2.29,
      "ret6m": -2.91,
      "ret1y": -9.38,
      "ret2y": -15.04,
      "ret3y": 0.75
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7297,
      "ret1w": 0.32,
      "ret1m": -0.49,
      "ret3m": 2.34,
      "ret6m": -2.78,
      "ret1y": -9.15,
      "ret2y": -14.61,
      "ret3y": 1.77
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 1.8705,
      "ret1w": -0.9,
      "ret1m": -5.01,
      "ret3m": -21.38,
      "ret6m": -37.19,
      "ret1y": -32.37,
      "ret2y": 0.56,
      "ret3y": 63.33
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2412,
      "ret1w": -0.95,
      "ret1m": -7.09,
      "ret3m": -2.16,
      "ret6m": -14.8,
      "ret1y": -14.63,
      "ret2y": 5.14,
      "ret3y": 44.14
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6924,
      "ret1w": -1.34,
      "ret1m": -6.32,
      "ret3m": 1.7,
      "ret6m": -10.37,
      "ret1y": -21.65,
      "ret2y": -16.45,
      "ret3y": -3.5
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.7916,
      "ret1w": -1.23,
      "ret1m": -7.87,
      "ret3m": 0.51,
      "ret6m": -15.19,
      "ret1y": -10.42,
      "ret2y": 24.57,
      "ret3y": 84.08
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4497,
      "ret1w": 0.22,
      "ret1m": -0.79,
      "ret3m": -4.5,
      "ret6m": -15.02,
      "ret1y": -16.04,
      "ret2y": -1.29,
      "ret3y": 21.21
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4587,
      "ret1w": 0.22,
      "ret1m": -0.78,
      "ret3m": -4.46,
      "ret6m": -14.93,
      "ret1y": -15.87,
      "ret2y": -0.91,
      "ret3y": 22.19
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2629,
      "ret1w": 0.12,
      "ret1m": 0.49,
      "ret3m": -0.43,
      "ret6m": -1.0,
      "ret1y": -1.74,
      "ret2y": -2.01,
      "ret3y": 0.8
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0638,
      "ret1w": 0.58,
      "ret1m": -0.3,
      "ret3m": -3.12,
      "ret6m": -7.4,
      "ret1y": -3.96,
      "ret2y": -9.7,
      "ret3y": 1.0
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.171,
      "ret1w": 0.26,
      "ret1m": 0.44,
      "ret3m": -2.69,
      "ret6m": -21.78,
      "ret1y": -29.82,
      "ret2y": -22.12,
      "ret3y": -17.21
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.6013,
      "ret1w": -1.02,
      "ret1m": -3.75,
      "ret3m": -9.7,
      "ret6m": -13.24,
      "ret1y": -18.29,
      "ret2y": -7.23,
      "ret3y": 19.68
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.031,
      "ret1w": -1.46,
      "ret1m": -5.49,
      "ret3m": -23.5,
      "ret6m": -42.84,
      "ret1y": -47.8,
      "ret2y": -1.55,
      "ret3y": 58.05
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.606,
      "ret1w": 0.25,
      "ret1m": 2.33,
      "ret3m": 4.49,
      "ret6m": 10.21,
      "ret1y": 8.83,
      "ret2y": 3.79,
      "ret3y": 5.64
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.4857,
      "ret1w": -4.2,
      "ret1m": -17.83,
      "ret3m": -8.75,
      "ret6m": -28.86,
      "ret1y": -33.63,
      "ret2y": -13.91,
      "ret3y": -18.08
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 7.858,
      "ret1w": -2.55,
      "ret1m": -11.01,
      "ret3m": -31.34,
      "ret6m": -50.2,
      "ret1y": -34.84,
      "ret2y": 6.68,
      "ret3y": 87.05
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0435,
      "ret1w": 0.01,
      "ret1m": -0.75,
      "ret3m": -1.23,
      "ret6m": -2.56,
      "ret1y": -2.54,
      "ret2y": -1.51,
      "ret3y": 1.5
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.0912,
      "ret1w": 0.02,
      "ret1m": -0.75,
      "ret3m": -1.24,
      "ret6m": -2.53,
      "ret1y": -2.45,
      "ret2y": -1.31,
      "ret3y": 2.12
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0665,
      "ret1w": 0.05,
      "ret1m": -0.12,
      "ret3m": -0.05,
      "ret6m": 0.23,
      "ret1y": 0.54,
      "ret2y": 1.43,
      "ret3y": 2.74
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1015,
      "ret1w": 0.03,
      "ret1m": -0.1,
      "ret3m": 0.01,
      "ret6m": 0.29,
      "ret1y": 0.64,
      "ret2y": 1.44,
      "ret3y": 3.73
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1114,
      "ret1w": 0.04,
      "ret1m": -0.09,
      "ret3m": 0.03,
      "ret6m": 0.35,
      "ret1y": 0.74,
      "ret2y": 1.65,
      "ret3y": 4.16
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0779,
      "ret1w": 0.04,
      "ret1m": -0.06,
      "ret3m": 0.02,
      "ret6m": 0.19,
      "ret1y": 0.57,
      "ret2y": 1.36,
      "ret3y": 2.82
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.093,
      "ret1w": 0.04,
      "ret1m": -0.05,
      "ret3m": 0.04,
      "ret6m": 0.26,
      "ret1y": 0.72,
      "ret2y": 1.67,
      "ret3y": 3.47
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 0.992,
      "ret1w": -0.07,
      "ret1m": -1.78,
      "ret3m": -3.26,
      "ret6m": -8.4,
      "ret1y": -9.16,
      "ret2y": -2.44,
      "ret3y": 3.54
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1395,
      "ret1w": -0.34,
      "ret1m": -2.22,
      "ret3m": -3.37,
      "ret6m": -8.1,
      "ret1y": -9.41,
      "ret2y": -5.14,
      "ret3y": -1.79
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 0.9991,
      "ret1w": -0.06,
      "ret1m": -1.78,
      "ret3m": -3.22,
      "ret6m": -8.31,
      "ret1y": -8.97,
      "ret2y": -2.05,
      "ret3y": 4.37
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.044,
      "ret1w": 0.02,
      "ret1m": -0.16,
      "ret3m": -0.06,
      "ret6m": 0.25,
      "ret1y": 0.64,
      "ret2y": 1.54,
      "ret3y": 3.45
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.0843,
      "ret1w": 0.08,
      "ret1m": -1.32,
      "ret3m": -4.06,
      "ret6m": -8.56,
      "ret1y": -10.31,
      "ret2y": -8.51,
      "ret3y": -1.62
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.203,
      "ret1w": 0.07,
      "ret1m": -0.12,
      "ret3m": 0.3,
      "ret6m": -1.39,
      "ret1y": -2.15,
      "ret2y": 0.69,
      "ret3y": 9.92
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1137,
      "ret1w": 0.06,
      "ret1m": -0.7,
      "ret3m": -0.77,
      "ret6m": -3.0,
      "ret1y": -3.08,
      "ret2y": 0.49,
      "ret3y": 6.46
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1845,
      "ret1w": 0.06,
      "ret1m": -0.7,
      "ret3m": -0.73,
      "ret6m": -2.9,
      "ret1y": -2.89,
      "ret2y": 0.89,
      "ret3y": 7.34
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 1.751,
      "ret1w": -6.31,
      "ret1m": -4.32,
      "ret3m": -17.41,
      "ret6m": -28.85,
      "ret1y": -26.68,
      "ret2y": 26.98,
      "ret3y": 77.77
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.866,
      "ret1w": -1.57,
      "ret1m": -1.04,
      "ret3m": -3.46,
      "ret6m": -4.34,
      "ret1y": -2.22,
      "ret2y": 1.78,
      "ret3y": 26.2
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.6468,
      "ret1w": 0.59,
      "ret1m": -0.96,
      "ret3m": -3.97,
      "ret6m": -11.89,
      "ret1y": -21.31,
      "ret2y": -11.19,
      "ret3y": 21.54
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.0567,
      "ret1w": -4.07,
      "ret1m": -7.46,
      "ret3m": -9.86,
      "ret6m": -14.06,
      "ret1y": -6.78,
      "ret2y": 4.52,
      "ret3y": 31.0
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9173,
      "ret1w": 0.03,
      "ret1m": -1.06,
      "ret3m": -0.17,
      "ret6m": -2.19,
      "ret1y": -2.48,
      "ret2y": -5.89,
      "ret3y": -3.33
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.1998,
      "ret1w": -3.05,
      "ret1m": -3.03,
      "ret3m": -10.03,
      "ret6m": -20.26,
      "ret1y": -18.8,
      "ret2y": 16.5,
      "ret3y": 53.88
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.343,
      "ret1w": -1.59,
      "ret1m": -1.25,
      "ret3m": -3.1,
      "ret6m": -6.38,
      "ret1y": -5.32,
      "ret2y": -1.65,
      "ret3y": 10.42
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.747,
      "ret1w": -3.11,
      "ret1m": -2.35,
      "ret3m": -10.43,
      "ret6m": -23.78,
      "ret1y": -25.23,
      "ret2y": -36.43,
      "ret3y": -18.54
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.1862,
      "ret1w": -5.83,
      "ret1m": -1.77,
      "ret3m": -16.02,
      "ret6m": -25.77,
      "ret1y": -24.9,
      "ret2y": 26.55,
      "ret3y": 94.12
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4519,
      "ret1w": -2.56,
      "ret1m": -3.39,
      "ret3m": -9.4,
      "ret6m": -6.07,
      "ret1y": -5.58,
      "ret2y": 13.96,
      "ret3y": 41.97
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.5254,
      "ret1w": -2.19,
      "ret1m": -1.22,
      "ret3m": -7.44,
      "ret6m": -10.88,
      "ret1y": -7.33,
      "ret2y": 6.63,
      "ret3y": 38.51
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.1539,
      "ret1w": -2.42,
      "ret1m": -0.83,
      "ret3m": -5.83,
      "ret6m": -12.6,
      "ret1y": -12.92,
      "ret2y": -2.48,
      "ret3y": 18.97
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.296,
      "ret1w": -0.31,
      "ret1m": -0.77,
      "ret3m": 4.35,
      "ret6m": -2.7,
      "ret1y": 0.47,
      "ret2y": 5.8,
      "ret3y": -6.05
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.836,
      "ret1w": -0.7,
      "ret1m": -6.33,
      "ret3m": -7.32,
      "ret6m": -12.49,
      "ret1y": -16.55,
      "ret2y": -11.18,
      "ret3y": 32.63
    },
    {
      "code": "270023",
      "name": "广发全球精选股票(QDII)人民币A",
      "type": "QDII",
      "nav": 5.1726,
      "ret1w": -3.05,
      "ret1m": -2.99,
      "ret3m": -11.16,
      "ret6m": -20.5,
      "ret1y": -17.64,
      "ret2y": 10.77,
      "ret3y": 35.98
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0127,
      "ret1w": 0.13,
      "ret1m": -0.2,
      "ret3m": 0.06,
      "ret6m": 0.5,
      "ret1y": 1.1,
      "ret2y": 2.31,
      "ret3y": 3.71
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0004,
      "ret1w": 0.12,
      "ret1m": -0.2,
      "ret3m": 0.07,
      "ret6m": 0.54,
      "ret1y": 1.11,
      "ret2y": 2.37,
      "ret3y": 3.88
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.183,
      "ret1w": -0.17,
      "ret1m": -3.03,
      "ret3m": -6.04,
      "ret6m": -21.03,
      "ret1y": -23.92,
      "ret2y": -16.87,
      "ret3y": -4.52
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.181,
      "ret1w": -0.37,
      "ret1m": -4.68,
      "ret3m": -10.83,
      "ret6m": -27.52,
      "ret1y": -28.68,
      "ret2y": -17.91,
      "ret3y": 1.63
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.3833,
      "ret1w": -0.25,
      "ret1m": -4.74,
      "ret3m": -9.64,
      "ret6m": -19.05,
      "ret1y": -21.43,
      "ret2y": -9.41,
      "ret3y": 30.38
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.802,
      "ret1w": -0.34,
      "ret1m": -2.88,
      "ret3m": -7.23,
      "ret6m": -17.8,
      "ret1y": -17.5,
      "ret2y": -8.79,
      "ret3y": 5.57
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 1.8552,
      "ret1w": -0.34,
      "ret1m": -2.87,
      "ret3m": -7.19,
      "ret6m": -17.72,
      "ret1y": -17.33,
      "ret2y": -8.42,
      "ret3y": 6.42
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.6396,
      "ret1w": -0.2,
      "ret1m": -5.14,
      "ret3m": -6.83,
      "ret6m": -22.2,
      "ret1y": -24.9,
      "ret2y": -11.9,
      "ret3y": 7.3
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.5687,
      "ret1w": -0.08,
      "ret1m": -1.93,
      "ret3m": -4.31,
      "ret6m": -15.06,
      "ret1y": -16.42,
      "ret2y": -11.49,
      "ret3y": 3.01
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4141,
      "ret1w": 0.05,
      "ret1m": -4.15,
      "ret3m": -3.57,
      "ret6m": -12.56,
      "ret1y": -15.16,
      "ret2y": -5.3,
      "ret3y": 18.38
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.4376,
      "ret1w": -0.49,
      "ret1m": -5.09,
      "ret3m": -13.29,
      "ret6m": -32.35,
      "ret1y": -32.2,
      "ret2y": -18.85,
      "ret3y": 3.11
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 1.9988,
      "ret1w": 0.05,
      "ret1m": -0.79,
      "ret3m": -1.58,
      "ret6m": -7.8,
      "ret1y": -8.13,
      "ret2y": -9.41,
      "ret3y": 5.27
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4936,
      "ret1w": -0.35,
      "ret1m": -0.13,
      "ret3m": -0.6,
      "ret6m": -1.4,
      "ret1y": 3.76,
      "ret2y": 7.75,
      "ret3y": 32.46
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.1732,
      "ret1w": -2.47,
      "ret1m": -2.29,
      "ret3m": -6.4,
      "ret6m": -9.57,
      "ret1y": -7.64,
      "ret2y": 2.38,
      "ret3y": 20.75
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.1487,
      "ret1w": -0.3,
      "ret1m": -3.99,
      "ret3m": -10.89,
      "ret6m": -26.56,
      "ret1y": -28.83,
      "ret2y": -17.96,
      "ret3y": 0.75
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 0.9556,
      "ret1w": -1.99,
      "ret1m": -1.64,
      "ret3m": -11.09,
      "ret6m": -20.23,
      "ret1y": -27.08,
      "ret2y": -14.98,
      "ret3y": 4.94
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 0.9591,
      "ret1w": -1.98,
      "ret1m": -1.62,
      "ret3m": -10.94,
      "ret6m": -20.05,
      "ret1y": -26.93,
      "ret2y": -14.88,
      "ret3y": 4.72
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2003,
      "ret1w": -1.23,
      "ret1m": -2.16,
      "ret3m": -4.97,
      "ret6m": -15.97,
      "ret1y": -23.24,
      "ret2y": -13.87,
      "ret3y": 6.01
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.2288,
      "ret1w": -1.22,
      "ret1m": -2.15,
      "ret3m": -4.94,
      "ret6m": -15.89,
      "ret1y": -23.08,
      "ret2y": -13.52,
      "ret3y": 6.86
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.5963,
      "ret1w": -4.11,
      "ret1m": -5.25,
      "ret3m": -11.02,
      "ret6m": -23.31,
      "ret1y": -28.83,
      "ret2y": -15.08,
      "ret3y": 12.04
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.15,
      "ret1w": 0.05,
      "ret1m": -0.97,
      "ret3m": -0.56,
      "ret6m": -1.61,
      "ret1y": -1.66,
      "ret2y": 0.08,
      "ret3y": 4.48
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1704,
      "ret1w": 0.05,
      "ret1m": -0.96,
      "ret3m": -0.54,
      "ret6m": -1.53,
      "ret1y": -1.5,
      "ret2y": 0.39,
      "ret3y": 5.12
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0871,
      "ret1w": 0.05,
      "ret1m": -0.12,
      "ret3m": -0.03,
      "ret6m": 0.3,
      "ret1y": 0.69,
      "ret2y": 1.72,
      "ret3y": 3.33
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4092,
      "ret1w": 0.05,
      "ret1m": -0.26,
      "ret3m": -0.15,
      "ret6m": -0.06,
      "ret1y": 0.04,
      "ret2y": 0.31,
      "ret3y": 4.76
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4626,
      "ret1w": 0.05,
      "ret1m": -0.26,
      "ret3m": -0.12,
      "ret6m": 0.03,
      "ret1y": 0.24,
      "ret2y": 0.71,
      "ret3y": 5.6
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.7969,
      "ret1w": -0.06,
      "ret1m": -4.83,
      "ret3m": -7.56,
      "ret6m": -17.06,
      "ret1y": -7.86,
      "ret2y": 3.22,
      "ret3y": 26.6
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 0.9496,
      "ret1w": -0.54,
      "ret1m": -8.01,
      "ret3m": -11.96,
      "ret6m": -24.61,
      "ret1y": -21.84,
      "ret2y": -17.9,
      "ret3y": 3.49
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 3.6243
      },
      {
        "date": "2026-11-04",
        "nav": 3.9317
      },
      {
        "date": "2026-11-05",
        "nav": 4.0435
      },
      {
        "date": "2026-11-06",
        "nav": 3.9103
      },
      {
        "date": "2026-11-09",
        "nav": 3.9763
      },
      {
        "date": "2026-11-10",
        "nav": 4.1531
      },
      {
        "date": "2026-11-11",
        "nav": 4.1941
      },
      {
        "date": "2026-11-12",
        "nav": 4.0547
      },
      {
        "date": "2026-11-13",
        "nav": 3.9422
      },
      {
        "date": "2026-11-16",
        "nav": 3.7654
      },
      {
        "date": "2026-11-17",
        "nav": 3.6692
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.6406
      },
      {
        "date": "2026-11-04",
        "nav": 2.8876
      },
      {
        "date": "2026-11-05",
        "nav": 2.8472
      },
      {
        "date": "2026-11-06",
        "nav": 2.7114
      },
      {
        "date": "2026-11-09",
        "nav": 2.7247
      },
      {
        "date": "2026-11-10",
        "nav": 2.7698
      },
      {
        "date": "2026-11-11",
        "nav": 2.9077
      },
      {
        "date": "2026-11-12",
        "nav": 2.8623
      },
      {
        "date": "2026-11-13",
        "nav": 2.7462
      },
      {
        "date": "2026-11-16",
        "nav": 2.5977
      },
      {
        "date": "2026-11-17",
        "nav": 2.5898
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 3.0113
      },
      {
        "date": "2026-11-04",
        "nav": 3.3183
      },
      {
        "date": "2026-11-05",
        "nav": 3.2882
      },
      {
        "date": "2026-11-06",
        "nav": 3.105
      },
      {
        "date": "2026-11-09",
        "nav": 3.1523
      },
      {
        "date": "2026-11-10",
        "nav": 3.2385
      },
      {
        "date": "2026-11-11",
        "nav": 3.6009
      },
      {
        "date": "2026-11-12",
        "nav": 3.55
      },
      {
        "date": "2026-11-13",
        "nav": 3.2856
      },
      {
        "date": "2026-11-16",
        "nav": 2.9717
      },
      {
        "date": "2026-11-17",
        "nav": 2.889
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.7703
      },
      {
        "date": "2026-11-04",
        "nav": 0.7603
      },
      {
        "date": "2026-11-05",
        "nav": 0.7718
      },
      {
        "date": "2026-11-06",
        "nav": 0.7752
      },
      {
        "date": "2026-11-09",
        "nav": 0.7708
      },
      {
        "date": "2026-11-10",
        "nav": 0.7694
      },
      {
        "date": "2026-11-11",
        "nav": 0.7554
      },
      {
        "date": "2026-11-12",
        "nav": 0.7561
      },
      {
        "date": "2026-11-13",
        "nav": 0.7682
      },
      {
        "date": "2026-11-16",
        "nav": 0.7771
      },
      {
        "date": "2026-11-17",
        "nav": 0.7803
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.9796
      },
      {
        "date": "2026-11-04",
        "nav": 2.0372
      },
      {
        "date": "2026-11-05",
        "nav": 2.139
      },
      {
        "date": "2026-11-06",
        "nav": 2.1093
      },
      {
        "date": "2026-11-09",
        "nav": 2.0587
      },
      {
        "date": "2026-11-10",
        "nav": 2.0589
      },
      {
        "date": "2026-11-11",
        "nav": 2.0244
      },
      {
        "date": "2026-11-12",
        "nav": 1.9904
      },
      {
        "date": "2026-11-13",
        "nav": 1.9441
      },
      {
        "date": "2026-11-16",
        "nav": 1.8989
      },
      {
        "date": "2026-11-17",
        "nav": 1.8709
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.6034
      },
      {
        "date": "2026-11-04",
        "nav": 2.6659
      },
      {
        "date": "2026-11-05",
        "nav": 2.7511
      },
      {
        "date": "2026-11-06",
        "nav": 2.7049
      },
      {
        "date": "2026-11-09",
        "nav": 2.6832
      },
      {
        "date": "2026-11-10",
        "nav": 2.711
      },
      {
        "date": "2026-11-11",
        "nav": 2.7006
      },
      {
        "date": "2026-11-12",
        "nav": 2.6597
      },
      {
        "date": "2026-11-13",
        "nav": 2.6262
      },
      {
        "date": "2026-11-16",
        "nav": 2.5828
      },
      {
        "date": "2026-11-17",
        "nav": 2.5551
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 5.3814
      },
      {
        "date": "2026-11-04",
        "nav": 5.4869
      },
      {
        "date": "2026-11-05",
        "nav": 5.5333
      },
      {
        "date": "2026-11-06",
        "nav": 5.4671
      },
      {
        "date": "2026-11-09",
        "nav": 5.4013
      },
      {
        "date": "2026-11-10",
        "nav": 5.399
      },
      {
        "date": "2026-11-11",
        "nav": 5.3769
      },
      {
        "date": "2026-11-12",
        "nav": 5.2924
      },
      {
        "date": "2026-11-13",
        "nav": 5.2623
      },
      {
        "date": "2026-11-16",
        "nav": 5.2611
      },
      {
        "date": "2026-11-17",
        "nav": 5.2786
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.604
      },
      {
        "date": "2026-11-04",
        "nav": 1.68
      },
      {
        "date": "2026-11-05",
        "nav": 1.715
      },
      {
        "date": "2026-11-06",
        "nav": 1.671
      },
      {
        "date": "2026-11-09",
        "nav": 1.667
      },
      {
        "date": "2026-11-10",
        "nav": 1.688
      },
      {
        "date": "2026-11-11",
        "nav": 1.712
      },
      {
        "date": "2026-11-12",
        "nav": 1.685
      },
      {
        "date": "2026-11-13",
        "nav": 1.643
      },
      {
        "date": "2026-11-16",
        "nav": 1.593
      },
      {
        "date": "2026-11-17",
        "nav": 1.579
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.0973
      },
      {
        "date": "2026-11-04",
        "nav": 1.1503
      },
      {
        "date": "2026-11-05",
        "nav": 1.1628
      },
      {
        "date": "2026-11-06",
        "nav": 1.1281
      },
      {
        "date": "2026-11-09",
        "nav": 1.1247
      },
      {
        "date": "2026-11-10",
        "nav": 1.1314
      },
      {
        "date": "2026-11-11",
        "nav": 1.1528
      },
      {
        "date": "2026-11-12",
        "nav": 1.1367
      },
      {
        "date": "2026-11-13",
        "nav": 1.1062
      },
      {
        "date": "2026-11-16",
        "nav": 1.0732
      },
      {
        "date": "2026-11-17",
        "nav": 1.0691
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.45
      },
      {
        "date": "2026-11-04",
        "nav": 2.599
      },
      {
        "date": "2026-11-05",
        "nav": 2.631
      },
      {
        "date": "2026-11-06",
        "nav": 2.557
      },
      {
        "date": "2026-11-09",
        "nav": 2.549
      },
      {
        "date": "2026-11-10",
        "nav": 2.579
      },
      {
        "date": "2026-11-11",
        "nav": 2.648
      },
      {
        "date": "2026-11-12",
        "nav": 2.622
      },
      {
        "date": "2026-11-13",
        "nav": 2.548
      },
      {
        "date": "2026-11-16",
        "nav": 2.462
      },
      {
        "date": "2026-11-17",
        "nav": 2.466
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.168
      },
      {
        "date": "2026-11-04",
        "nav": 1.167
      },
      {
        "date": "2026-11-05",
        "nav": 1.187
      },
      {
        "date": "2026-11-06",
        "nav": 1.175
      },
      {
        "date": "2026-11-09",
        "nav": 1.166
      },
      {
        "date": "2026-11-10",
        "nav": 1.165
      },
      {
        "date": "2026-11-11",
        "nav": 1.145
      },
      {
        "date": "2026-11-12",
        "nav": 1.146
      },
      {
        "date": "2026-11-13",
        "nav": 1.159
      },
      {
        "date": "2026-11-16",
        "nav": 1.172
      },
      {
        "date": "2026-11-17",
        "nav": 1.178
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.213
      },
      {
        "date": "2026-11-04",
        "nav": 2.259
      },
      {
        "date": "2026-11-05",
        "nav": 2.325
      },
      {
        "date": "2026-11-06",
        "nav": 2.284
      },
      {
        "date": "2026-11-09",
        "nav": 2.264
      },
      {
        "date": "2026-11-10",
        "nav": 2.289
      },
      {
        "date": "2026-11-11",
        "nav": 2.298
      },
      {
        "date": "2026-11-12",
        "nav": 2.274
      },
      {
        "date": "2026-11-13",
        "nav": 2.225
      },
      {
        "date": "2026-11-16",
        "nav": 2.203
      },
      {
        "date": "2026-11-17",
        "nav": 2.179
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.0445
      },
      {
        "date": "2026-11-04",
        "nav": 1.2027
      },
      {
        "date": "2026-11-05",
        "nav": 1.2377
      },
      {
        "date": "2026-11-06",
        "nav": 1.2109
      },
      {
        "date": "2026-11-09",
        "nav": 1.2027
      },
      {
        "date": "2026-11-10",
        "nav": 1.2195
      },
      {
        "date": "2026-11-11",
        "nav": 1.2662
      },
      {
        "date": "2026-11-12",
        "nav": 1.266
      },
      {
        "date": "2026-11-13",
        "nav": 1.2278
      },
      {
        "date": "2026-11-16",
        "nav": 1.1563
      },
      {
        "date": "2026-11-17",
        "nav": 1.188
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.9547
      },
      {
        "date": "2026-11-04",
        "nav": 1.9381
      },
      {
        "date": "2026-11-05",
        "nav": 1.9582
      },
      {
        "date": "2026-11-06",
        "nav": 1.9555
      },
      {
        "date": "2026-11-09",
        "nav": 1.936
      },
      {
        "date": "2026-11-10",
        "nav": 1.9277
      },
      {
        "date": "2026-11-11",
        "nav": 1.9086
      },
      {
        "date": "2026-11-12",
        "nav": 1.8971
      },
      {
        "date": "2026-11-13",
        "nav": 1.9039
      },
      {
        "date": "2026-11-16",
        "nav": 1.9103
      },
      {
        "date": "2026-11-17",
        "nav": 1.9111
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.3617
      },
      {
        "date": "2026-11-04",
        "nav": 1.4218
      },
      {
        "date": "2026-11-05",
        "nav": 1.4458
      },
      {
        "date": "2026-11-06",
        "nav": 1.4145
      },
      {
        "date": "2026-11-09",
        "nav": 1.4138
      },
      {
        "date": "2026-11-10",
        "nav": 1.4272
      },
      {
        "date": "2026-11-11",
        "nav": 1.4592
      },
      {
        "date": "2026-11-12",
        "nav": 1.448
      },
      {
        "date": "2026-11-13",
        "nav": 1.4092
      },
      {
        "date": "2026-11-16",
        "nav": 1.3668
      },
      {
        "date": "2026-11-17",
        "nav": 1.3583
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.3603
      },
      {
        "date": "2026-11-04",
        "nav": 1.5015
      },
      {
        "date": "2026-11-05",
        "nav": 1.4869
      },
      {
        "date": "2026-11-06",
        "nav": 1.4038
      },
      {
        "date": "2026-11-09",
        "nav": 1.4177
      },
      {
        "date": "2026-11-10",
        "nav": 1.4563
      },
      {
        "date": "2026-11-11",
        "nav": 1.5467
      },
      {
        "date": "2026-11-12",
        "nav": 1.5186
      },
      {
        "date": "2026-11-13",
        "nav": 1.415
      },
      {
        "date": "2026-11-16",
        "nav": 1.3045
      },
      {
        "date": "2026-11-17",
        "nav": 1.2769
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.5596
      },
      {
        "date": "2026-11-04",
        "nav": 2.5917
      },
      {
        "date": "2026-11-05",
        "nav": 2.6223
      },
      {
        "date": "2026-11-06",
        "nav": 2.5959
      },
      {
        "date": "2026-11-09",
        "nav": 2.5908
      },
      {
        "date": "2026-11-10",
        "nav": 2.6046
      },
      {
        "date": "2026-11-11",
        "nav": 2.6006
      },
      {
        "date": "2026-11-12",
        "nav": 2.574
      },
      {
        "date": "2026-11-13",
        "nav": 2.5663
      },
      {
        "date": "2026-11-16",
        "nav": 2.5697
      },
      {
        "date": "2026-11-17",
        "nav": 2.5725
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.872
      },
      {
        "date": "2026-11-04",
        "nav": 0.94
      },
      {
        "date": "2026-11-05",
        "nav": 0.971
      },
      {
        "date": "2026-11-06",
        "nav": 0.947
      },
      {
        "date": "2026-11-09",
        "nav": 0.946
      },
      {
        "date": "2026-11-10",
        "nav": 0.949
      },
      {
        "date": "2026-11-11",
        "nav": 0.944
      },
      {
        "date": "2026-11-12",
        "nav": 0.945
      },
      {
        "date": "2026-11-13",
        "nav": 0.92
      },
      {
        "date": "2026-11-16",
        "nav": 0.895
      },
      {
        "date": "2026-11-17",
        "nav": 0.889
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.433
      },
      {
        "date": "2026-11-04",
        "nav": 2.4118
      },
      {
        "date": "2026-11-05",
        "nav": 2.4182
      },
      {
        "date": "2026-11-06",
        "nav": 2.4227
      },
      {
        "date": "2026-11-09",
        "nav": 2.4148
      },
      {
        "date": "2026-11-10",
        "nav": 2.4033
      },
      {
        "date": "2026-11-11",
        "nav": 2.377
      },
      {
        "date": "2026-11-12",
        "nav": 2.3746
      },
      {
        "date": "2026-11-13",
        "nav": 2.3994
      },
      {
        "date": "2026-11-16",
        "nav": 2.4334
      },
      {
        "date": "2026-11-17",
        "nav": 2.4482
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.1499
      },
      {
        "date": "2026-11-04",
        "nav": 1.1935
      },
      {
        "date": "2026-11-05",
        "nav": 1.2116
      },
      {
        "date": "2026-11-06",
        "nav": 1.1936
      },
      {
        "date": "2026-11-09",
        "nav": 1.1989
      },
      {
        "date": "2026-11-10",
        "nav": 1.2123
      },
      {
        "date": "2026-11-11",
        "nav": 1.2288
      },
      {
        "date": "2026-11-12",
        "nav": 1.2135
      },
      {
        "date": "2026-11-13",
        "nav": 1.1933
      },
      {
        "date": "2026-11-16",
        "nav": 1.1657
      },
      {
        "date": "2026-11-17",
        "nav": 1.1614
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.9334
      },
      {
        "date": "2026-11-04",
        "nav": 0.995
      },
      {
        "date": "2026-11-05",
        "nav": 0.9969
      },
      {
        "date": "2026-11-06",
        "nav": 0.965
      },
      {
        "date": "2026-11-09",
        "nav": 0.9686
      },
      {
        "date": "2026-11-10",
        "nav": 0.9751
      },
      {
        "date": "2026-11-11",
        "nav": 0.9964
      },
      {
        "date": "2026-11-12",
        "nav": 0.9867
      },
      {
        "date": "2026-11-13",
        "nav": 0.9517
      },
      {
        "date": "2026-11-16",
        "nav": 0.9228
      },
      {
        "date": "2026-11-17",
        "nav": 0.9115
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.9936
      },
      {
        "date": "2026-11-04",
        "nav": 1.0592
      },
      {
        "date": "2026-11-05",
        "nav": 1.0612
      },
      {
        "date": "2026-11-06",
        "nav": 1.0272
      },
      {
        "date": "2026-11-09",
        "nav": 1.0311
      },
      {
        "date": "2026-11-10",
        "nav": 1.038
      },
      {
        "date": "2026-11-11",
        "nav": 1.0608
      },
      {
        "date": "2026-11-12",
        "nav": 1.0504
      },
      {
        "date": "2026-11-13",
        "nav": 1.0132
      },
      {
        "date": "2026-11-16",
        "nav": 0.9824
      },
      {
        "date": "2026-11-17",
        "nav": 0.9704
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.0451
      },
      {
        "date": "2026-11-04",
        "nav": 1.0498
      },
      {
        "date": "2026-11-05",
        "nav": 1.0533
      },
      {
        "date": "2026-11-06",
        "nav": 1.05
      },
      {
        "date": "2026-11-09",
        "nav": 1.0473
      },
      {
        "date": "2026-11-10",
        "nav": 1.0476
      },
      {
        "date": "2026-11-11",
        "nav": 1.0442
      },
      {
        "date": "2026-11-12",
        "nav": 1.0416
      },
      {
        "date": "2026-11-13",
        "nav": 1.0401
      },
      {
        "date": "2026-11-16",
        "nav": 1.0357
      },
      {
        "date": "2026-11-17",
        "nav": 1.0374
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.0203
      },
      {
        "date": "2026-11-04",
        "nav": 1.0249
      },
      {
        "date": "2026-11-05",
        "nav": 1.0283
      },
      {
        "date": "2026-11-06",
        "nav": 1.0252
      },
      {
        "date": "2026-11-09",
        "nav": 1.0225
      },
      {
        "date": "2026-11-10",
        "nav": 1.0228
      },
      {
        "date": "2026-11-11",
        "nav": 1.0196
      },
      {
        "date": "2026-11-12",
        "nav": 1.017
      },
      {
        "date": "2026-11-13",
        "nav": 1.0156
      },
      {
        "date": "2026-11-16",
        "nav": 1.0113
      },
      {
        "date": "2026-11-17",
        "nav": 1.0131
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.7032
      },
      {
        "date": "2026-11-04",
        "nav": 0.7109
      },
      {
        "date": "2026-11-05",
        "nav": 0.7248
      },
      {
        "date": "2026-11-06",
        "nav": 0.7201
      },
      {
        "date": "2026-11-09",
        "nav": 0.7145
      },
      {
        "date": "2026-11-10",
        "nav": 0.7145
      },
      {
        "date": "2026-11-11",
        "nav": 0.7111
      },
      {
        "date": "2026-11-12",
        "nav": 0.706
      },
      {
        "date": "2026-11-13",
        "nav": 0.7084
      },
      {
        "date": "2026-11-16",
        "nav": 0.7088
      },
      {
        "date": "2026-11-17",
        "nav": 0.7109
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.7216
      },
      {
        "date": "2026-11-04",
        "nav": 0.7296
      },
      {
        "date": "2026-11-05",
        "nav": 0.7437
      },
      {
        "date": "2026-11-06",
        "nav": 0.739
      },
      {
        "date": "2026-11-09",
        "nav": 0.7332
      },
      {
        "date": "2026-11-10",
        "nav": 0.7333
      },
      {
        "date": "2026-11-11",
        "nav": 0.7298
      },
      {
        "date": "2026-11-12",
        "nav": 0.7245
      },
      {
        "date": "2026-11-13",
        "nav": 0.727
      },
      {
        "date": "2026-11-16",
        "nav": 0.7274
      },
      {
        "date": "2026-11-17",
        "nav": 0.7297
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.9445
      },
      {
        "date": "2026-11-04",
        "nav": 2.0591
      },
      {
        "date": "2026-11-05",
        "nav": 2.0271
      },
      {
        "date": "2026-11-06",
        "nav": 1.9338
      },
      {
        "date": "2026-11-09",
        "nav": 1.9521
      },
      {
        "date": "2026-11-10",
        "nav": 1.9691
      },
      {
        "date": "2026-11-11",
        "nav": 2.0428
      },
      {
        "date": "2026-11-12",
        "nav": 2.0235
      },
      {
        "date": "2026-11-13",
        "nav": 1.9624
      },
      {
        "date": "2026-11-16",
        "nav": 1.8875
      },
      {
        "date": "2026-11-17",
        "nav": 1.8705
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.2185
      },
      {
        "date": "2026-11-04",
        "nav": 2.3344
      },
      {
        "date": "2026-11-05",
        "nav": 2.4164
      },
      {
        "date": "2026-11-06",
        "nav": 2.3767
      },
      {
        "date": "2026-11-09",
        "nav": 2.3685
      },
      {
        "date": "2026-11-10",
        "nav": 2.4122
      },
      {
        "date": "2026-11-11",
        "nav": 2.3956
      },
      {
        "date": "2026-11-12",
        "nav": 2.3501
      },
      {
        "date": "2026-11-13",
        "nav": 2.3103
      },
      {
        "date": "2026-11-16",
        "nav": 2.2627
      },
      {
        "date": "2026-11-17",
        "nav": 2.2412
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.6818
      },
      {
        "date": "2026-11-04",
        "nav": 0.7149
      },
      {
        "date": "2026-11-05",
        "nav": 0.7389
      },
      {
        "date": "2026-11-06",
        "nav": 0.7255
      },
      {
        "date": "2026-11-09",
        "nav": 0.7239
      },
      {
        "date": "2026-11-10",
        "nav": 0.7391
      },
      {
        "date": "2026-11-11",
        "nav": 0.7412
      },
      {
        "date": "2026-11-12",
        "nav": 0.7225
      },
      {
        "date": "2026-11-13",
        "nav": 0.7118
      },
      {
        "date": "2026-11-16",
        "nav": 0.7018
      },
      {
        "date": "2026-11-17",
        "nav": 0.6924
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 3.709
      },
      {
        "date": "2026-11-04",
        "nav": 3.9825
      },
      {
        "date": "2026-11-05",
        "nav": 4.0838
      },
      {
        "date": "2026-11-06",
        "nav": 3.994
      },
      {
        "date": "2026-11-09",
        "nav": 3.9995
      },
      {
        "date": "2026-11-10",
        "nav": 4.1157
      },
      {
        "date": "2026-11-11",
        "nav": 4.1316
      },
      {
        "date": "2026-11-12",
        "nav": 4.0131
      },
      {
        "date": "2026-11-13",
        "nav": 3.9531
      },
      {
        "date": "2026-11-16",
        "nav": 3.8389
      },
      {
        "date": "2026-11-17",
        "nav": 3.7916
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.4629
      },
      {
        "date": "2026-11-04",
        "nav": 0.4613
      },
      {
        "date": "2026-11-05",
        "nav": 0.4616
      },
      {
        "date": "2026-11-06",
        "nav": 0.4562
      },
      {
        "date": "2026-11-09",
        "nav": 0.4544
      },
      {
        "date": "2026-11-10",
        "nav": 0.4533
      },
      {
        "date": "2026-11-11",
        "nav": 0.4534
      },
      {
        "date": "2026-11-12",
        "nav": 0.4538
      },
      {
        "date": "2026-11-13",
        "nav": 0.4521
      },
      {
        "date": "2026-11-16",
        "nav": 0.4487
      },
      {
        "date": "2026-11-17",
        "nav": 0.4497
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.4721
      },
      {
        "date": "2026-11-04",
        "nav": 0.4705
      },
      {
        "date": "2026-11-05",
        "nav": 0.4708
      },
      {
        "date": "2026-11-06",
        "nav": 0.4653
      },
      {
        "date": "2026-11-09",
        "nav": 0.4635
      },
      {
        "date": "2026-11-10",
        "nav": 0.4623
      },
      {
        "date": "2026-11-11",
        "nav": 0.4624
      },
      {
        "date": "2026-11-12",
        "nav": 0.4628
      },
      {
        "date": "2026-11-13",
        "nav": 0.4612
      },
      {
        "date": "2026-11-16",
        "nav": 0.4577
      },
      {
        "date": "2026-11-17",
        "nav": 0.4587
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.2571
      },
      {
        "date": "2026-11-04",
        "nav": 1.2588
      },
      {
        "date": "2026-11-05",
        "nav": 1.2571
      },
      {
        "date": "2026-11-06",
        "nav": 1.2567
      },
      {
        "date": "2026-11-09",
        "nav": 1.2579
      },
      {
        "date": "2026-11-10",
        "nav": 1.2567
      },
      {
        "date": "2026-11-11",
        "nav": 1.2546
      },
      {
        "date": "2026-11-12",
        "nav": 1.2529
      },
      {
        "date": "2026-11-13",
        "nav": 1.2565
      },
      {
        "date": "2026-11-16",
        "nav": 1.2614
      },
      {
        "date": "2026-11-17",
        "nav": 1.2629
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.0781
      },
      {
        "date": "2026-11-04",
        "nav": 1.0804
      },
      {
        "date": "2026-11-05",
        "nav": 1.085
      },
      {
        "date": "2026-11-06",
        "nav": 1.0772
      },
      {
        "date": "2026-11-09",
        "nav": 1.0714
      },
      {
        "date": "2026-11-10",
        "nav": 1.067
      },
      {
        "date": "2026-11-11",
        "nav": 1.0613
      },
      {
        "date": "2026-11-12",
        "nav": 1.0575
      },
      {
        "date": "2026-11-13",
        "nav": 1.0549
      },
      {
        "date": "2026-11-16",
        "nav": 1.0577
      },
      {
        "date": "2026-11-17",
        "nav": 1.0638
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.1519
      },
      {
        "date": "2026-11-04",
        "nav": 1.1672
      },
      {
        "date": "2026-11-05",
        "nav": 1.1734
      },
      {
        "date": "2026-11-06",
        "nav": 1.1638
      },
      {
        "date": "2026-11-09",
        "nav": 1.1703
      },
      {
        "date": "2026-11-10",
        "nav": 1.1659
      },
      {
        "date": "2026-11-11",
        "nav": 1.1643
      },
      {
        "date": "2026-11-12",
        "nav": 1.1668
      },
      {
        "date": "2026-11-13",
        "nav": 1.1657
      },
      {
        "date": "2026-11-16",
        "nav": 1.168
      },
      {
        "date": "2026-11-17",
        "nav": 1.171
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.7382
      },
      {
        "date": "2026-11-04",
        "nav": 2.7884
      },
      {
        "date": "2026-11-05",
        "nav": 2.7493
      },
      {
        "date": "2026-11-06",
        "nav": 2.6925
      },
      {
        "date": "2026-11-09",
        "nav": 2.6945
      },
      {
        "date": "2026-11-10",
        "nav": 2.7026
      },
      {
        "date": "2026-11-11",
        "nav": 2.7754
      },
      {
        "date": "2026-11-12",
        "nav": 2.7489
      },
      {
        "date": "2026-11-13",
        "nav": 2.6928
      },
      {
        "date": "2026-11-16",
        "nav": 2.628
      },
      {
        "date": "2026-11-17",
        "nav": 2.6013
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 2.046
      },
      {
        "date": "2026-11-04",
        "nav": 2.205
      },
      {
        "date": "2026-11-05",
        "nav": 2.179
      },
      {
        "date": "2026-11-06",
        "nav": 2.084
      },
      {
        "date": "2026-11-09",
        "nav": 2.113
      },
      {
        "date": "2026-11-10",
        "nav": 2.149
      },
      {
        "date": "2026-11-11",
        "nav": 2.306
      },
      {
        "date": "2026-11-12",
        "nav": 2.31
      },
      {
        "date": "2026-11-13",
        "nav": 2.205
      },
      {
        "date": "2026-11-16",
        "nav": 2.061
      },
      {
        "date": "2026-11-17",
        "nav": 2.031
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 1.5635
      },
      {
        "date": "2026-11-04",
        "nav": 1.5582
      },
      {
        "date": "2026-11-05",
        "nav": 1.5467
      },
      {
        "date": "2026-11-06",
        "nav": 1.564
      },
      {
        "date": "2026-11-09",
        "nav": 1.5692
      },
      {
        "date": "2026-11-10",
        "nav": 1.5695
      },
      {
        "date": "2026-11-11",
        "nav": 1.5605
      },
      {
        "date": "2026-11-12",
        "nav": 1.5589
      },
      {
        "date": "2026-11-13",
        "nav": 1.5747
      },
      {
        "date": "2026-11-16",
        "nav": 1.602
      },
      {
        "date": "2026-11-17",
        "nav": 1.606
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 0.5313
      },
      {
        "date": "2026-11-04",
        "nav": 0.5613
      },
      {
        "date": "2026-11-05",
        "nav": 0.5694
      },
      {
        "date": "2026-11-06",
        "nav": 0.5544
      },
      {
        "date": "2026-11-09",
        "nav": 0.575
      },
      {
        "date": "2026-11-10",
        "nav": 0.5911
      },
      {
        "date": "2026-11-11",
        "nav": 0.591
      },
      {
        "date": "2026-11-12",
        "nav": 0.5708
      },
      {
        "date": "2026-11-13",
        "nav": 0.5514
      },
      {
        "date": "2026-11-16",
        "nav": 0.507
      },
      {
        "date": "2026-11-17",
        "nav": 0.4857
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-11-03",
        "nav": 8.346
      },
      {
        "date": "2026-11-04",
        "nav": 9.135
      },
      {
        "date": "2026-11-05",
        "nav": 9.006
      },
      {
        "date": "2026-11-06",
        "nav": 8.55
      },
      {
        "date": "2026-11-09",
        "nav": 8.617
      },
      {
        "date": "2026-11-10",
        "nav": 8.83
      },
      {
        "date": "2026-11-11",
        "nav": 9.573
      },
      {
        "date": "2026-11-12",
        "nav": 9.455
      },
      {
        "date": "2026-11-13",
        "nav": 8.824
      },
      {
        "date": "2026-11-16",
        "nav": 8.064
      },
      {
        "date": "2026-11-17",
        "nav": 7.858
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.58,
      "nav": 3.6692,
      "price": 3.6692,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 2.5898,
      "price": 2.5898,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.54,
      "nav": 2.889,
      "price": 2.889,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.07,
      "nav": 0.7803,
      "price": 0.7803,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.46,
      "nav": 1.8709,
      "price": 1.8709,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.29,
      "nav": 2.5551,
      "price": 2.5551,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 5.2786,
      "price": 5.2786,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.32,
      "nav": 1.579,
      "price": 1.579,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.28,
      "nav": 1.0691,
      "price": 1.0691,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.22,
      "nav": 2.466,
      "price": 2.466,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 1.178,
      "price": 1.178,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 2.179,
      "price": 2.179,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 1.188,
      "price": 1.188,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.04,
      "nav": 1.9111,
      "price": 1.9111,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 1.3583,
      "price": 1.3583,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.62,
      "nav": 1.2769,
      "price": 1.2769,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.06,
      "nav": 2.5725,
      "price": 2.5725,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.32,
      "nav": 0.889,
      "price": 0.889,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.09,
      "nav": 2.4482,
      "price": 2.4482,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.1614,
      "price": 1.1614,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 17.48,
      "sharpe": -1.7,
      "calmar": -1.7
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 9.75,
      "sharpe": -4.07,
      "calmar": -4.07
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 16.18,
      "sharpe": -3.11,
      "calmar": -3.11
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 2.13,
      "sharpe": 1.26,
      "calmar": 1.26
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 13.7,
      "sharpe": -2.26,
      "calmar": -2.26
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 8.62,
      "sharpe": -2.13,
      "calmar": -2.13
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.34,
      "sharpe": -0.76,
      "calmar": -0.76
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 9.69,
      "sharpe": -2.2,
      "calmar": -2.2
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 8.27,
      "sharpe": -2.36,
      "calmar": -2.36
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.57,
      "sharpe": -2.76,
      "calmar": -2.76
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 1.68,
      "sharpe": 1.08,
      "calmar": 1.08
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 7.21,
      "sharpe": -1.61,
      "calmar": -1.61
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 3.87,
      "sharpe": -7.92,
      "calmar": -7.92
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.29,
      "sharpe": 1.24,
      "calmar": 1.24
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.25,
      "sharpe": -2.39,
      "calmar": -2.39
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 18.48,
      "sharpe": -3.0,
      "calmar": -3.0
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.84,
      "sharpe": -0.64,
      "calmar": -0.64
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.48,
      "sharpe": -0.73,
      "calmar": -0.73
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.81,
      "sharpe": 0.4,
      "calmar": 0.4
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 6.3,
      "sharpe": -1.26,
      "calmar": -1.26
    }
  ],
  "news": [
    {
      "title": "动力电池、光伏组件、风机叶片“新三样”回收拆解迎来政策支持。11月17日，商务部等9部门联合印发《关于深入推进再生资源回收体系建设促进回收行业高质量发展的意见》（下称“意见”）。意见以专章部署“新三样”固废回收拆解，明确提出要加强废旧动力电池回收处理，发展退役光伏、废旧风机设备回收拆解。“退役的‘新三样’设备蕴藏可观的经济价值，处理得当便能变废为宝，释放出较大的经济效益。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:37",
      "impact": "neutral"
    },
    {
      "title": "商务部等9部门日前印发《关于深入推进再生资源回收体系建设促进回收行业高质量发展的意见》（下称《意见》）。商务部部长助理袁晓明11月17日在国新办新闻发布会上表示，下一步，商务部将会同相关部门，指导推动各地贯彻落实《意见》要求，健全再生资源回收体系，促进回收行业高质量发展。《意见》提出16条具体举措，可以概括为“推模式、抓品类、促提质、建体系、强协同”五方面。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:37",
      "impact": "neutral"
    },
    {
      "title": "■新华社社评共商亚太发展大计，共创亚太美好未来◎新华社深圳11月17日电风起南海滨，潮涌太平洋。亚太经合组织（APEC）第三十三次领导人非正式会议将在深圳拉开帷幕，习近平主席将出席会议及相关活动。各方将围绕“建设亚太共同体，促进共同繁荣”主题，聚焦“开放、创新、合作”三大优先领域，共商亚太发展大计，共创亚太美好未来。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "01:37",
      "impact": "neutral"
    },
    {
      "title": "2026年，中国灯塔工厂数量呈现出清晰的加速增长轨迹。据世界经济论坛全球灯塔工厂名录，截至2026年6月份，全球灯塔网络已集聚238座标杆制造与供应链基地，中国以109座位居全球第一。此外，工业和信息化部近日公示了2026年度34家领航级智能工厂培育项目。这组亮眼数据勾勒出中国制造智能化提速的清晰图景，标杆工厂正在密集涌现，AI（人工智能）向生产端深度渗透。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:39",
      "impact": "neutral"
    },
    {
      "title": "11月18日，《关于高质量建设区域性股权市场“专精特新”专板的指导意见》落地满四年。四年来，累计四批30家区域性股权市场“专精特新”专板完成备案。据统计，截至今年10月底，上述30家“专精特新”专板共服务企业2.31万家；区域性股权市场共服务国家级专精特新“小巨人”企业3206家，专精特新中小企业2.67万家，上市后备企业2189家。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:39",
      "impact": "neutral"
    },
    {
      "title": "为加强财险公司费用分摊管理，提升财务数据的真实性、公允性、可比性，夯实经营成果核算、产品定价及“报行合一”管理基础，促进行业健康有序发展，日前，国家金融监督管理总局（以下简称“金融监管总局”）发布《关于加强财产保险公司费用分摊管理工作的通知》（以下简称《通知》），促进行业健康有序发展；中国精算师协会发布《财产保险公司费用分摊指引》（以下简称《指引》），夯实精细化管理基础。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:39",
      "impact": "neutral"
    },
    {
      "title": "11月17日，商务部、国家发展改革委、工业和信息化部等9部门联合发布《关于深入推进再生资源回收体系建设促进回收行业高质量发展的意见》（以下简称《意见》）。《意见》明确，到2030年，初步建立起回收网络健全完善、居民交投便捷顺畅、分拣环节高效先进、末端处理绿色规范的再生资源回收体系。同日，国新办举行新闻发布会，介绍深入推进再生资源回收体系建设有关情况。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:39",
      "impact": "neutral"
    },
    {
      "title": "近日，工业和信息化部、市场监管总局联合印发《以标准提升引领轻工业优化升级实施方案》（以下简称《实施方案》）。《实施方案》提出，到2027年，轻工业标准化工作机制更加健全，制修订产品标准、方法标准等200项左右。到2030年，基本形成全球领先的轻工业标准体系。以标准提升厚植轻工业竞争优势，是这一部署的重要着力点。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:39",
      "impact": "neutral"
    },
    {
      "title": "编者按：消费是经济增长的重要引擎。近日，《关于推动商品消费扩容升级的实施意见》正式印发，扩内需、促消费再添政策抓手。政策效果如何，关键看市场一线感受、看经营主体反馈。《证券日报》记者深入消费市场一线，采访多位专家学者，推出系列解读，以飨读者。随着新一轮科技革命与消费升级深度融合，智能消费正在成为拉动内需增长、培育新质生产力的重要引擎之一。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:39",
      "impact": "neutral"
    },
    {
      "title": "11月17日，《关于深入推进再生资源回收体系建设促进回收行业高质量发展的意见》（以下简称《意见》）正式发布。《意见》围绕推广运用典型回收模式、抓好动力电池、光伏组件、风机叶片“新三样”固废回收拆解、促进回收行业提质升级等方面提出16项具体举措。动力电池是“新三样”固废回收重点。随着国内新能源汽车保有量持续走高，动力电池逐步进入集中退役周期，千亿元级别的回收赛道加速形成。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:39",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,749/1,625",
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
