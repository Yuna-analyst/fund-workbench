// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-09 11:17:12
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-09 11:17 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-07",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3940.04,
      "change": 39.69,
      "changePct": "+1.02%",
      "high": 3940.93,
      "low": 3885.62,
      "volume": 564988582.0,
      "amount": 1209543570000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14311.01,
      "change": 200.89,
      "changePct": "+1.42%",
      "high": 14396.07,
      "low": 14049.34,
      "volume": 719703760.0,
      "amount": 1454876180000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3563.12,
      "change": 47.56,
      "changePct": "+1.35%",
      "high": 3613.87,
      "low": 3507.62,
      "volume": 229977435.0,
      "amount": 730103730000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1744.02,
      "change": 42.73,
      "changePct": "+2.51%",
      "high": 1747.74,
      "low": 1686.66,
      "volume": 12141418.0,
      "amount": 136268940000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4694.44,
      "change": 43.13,
      "changePct": "+0.93%",
      "high": 4706.73,
      "low": 4649.58,
      "volume": 239072020.0,
      "amount": 788405760000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7980.12,
      "change": 150.76,
      "changePct": "+1.93%",
      "high": 7983.17,
      "low": 7763.53,
      "volume": 206575632.0,
      "amount": 525281480000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "4.84万亿",
      "label": "成交额",
      "rawAmount": 4844479660000.0,
      "change": ""
    },
    "upDown": {
      "val": "4,221/889",
      "label": "涨/跌家数",
      "rawUp": 4221,
      "rawDown": 889,
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
    "totalInflow": 45.7,
    "totalOutflow": 0,
    "netFlow": 45.7,
    "netFlowTrend": [
      9.14,
      18.28,
      27.42,
      36.56,
      45.7
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
      "inflow": 12.64,
      "pct": 1.23
    },
    {
      "name": "创新药",
      "inflow": 5.65,
      "pct": 6.56
    },
    {
      "name": "半导体",
      "inflow": 5.29,
      "pct": 3.44
    },
    {
      "name": "5G",
      "inflow": 3.92,
      "pct": 2.86
    },
    {
      "name": "有色",
      "inflow": 3.87,
      "pct": 3.55
    },
    {
      "name": "医疗",
      "inflow": 3.7,
      "pct": 4.53
    },
    {
      "name": "医药",
      "inflow": 3.47,
      "pct": 4.49
    },
    {
      "name": "芯片",
      "inflow": 2.94,
      "pct": 2.97
    },
    {
      "name": "白酒",
      "inflow": 2.77,
      "pct": 0.23
    },
    {
      "name": "传媒",
      "inflow": 1.45,
      "pct": 0.23
    },
    {
      "name": "光伏",
      "inflow": 0.91,
      "pct": 2.49
    },
    {
      "name": "军工",
      "inflow": 0.85,
      "pct": 1.67
    },
    {
      "name": "人工智能",
      "inflow": 0.76,
      "pct": 1.03
    },
    {
      "name": "新能源",
      "inflow": 0.47,
      "pct": 2.2
    },
    {
      "name": "新能源车",
      "inflow": 0.45,
      "pct": 1.34
    },
    {
      "name": "电子",
      "inflow": 0.18,
      "pct": 3.36
    },
    {
      "name": "食品",
      "inflow": 0.08,
      "pct": 0.4
    },
    {
      "name": "计算机",
      "inflow": 0.07,
      "pct": 0.24
    },
    {
      "name": "券商",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "游戏",
      "inflow": 0.0,
      "pct": 0.0
    }
  ],
  "sectors": [
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.91,
      "changePct": 6.56,
      "change": 0.056,
      "turnover": 18.82
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.346,
      "changePct": 4.53,
      "change": 0.015,
      "turnover": 12.35
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.396,
      "changePct": 4.49,
      "change": 0.017,
      "turnover": 11.55
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.985,
      "changePct": 3.55,
      "change": 0.068,
      "turnover": 12.89
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.083,
      "changePct": 3.44,
      "change": 0.036,
      "turnover": 17.64
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.891,
      "changePct": 3.36,
      "change": 0.029,
      "turnover": 0.6
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.212,
      "changePct": 2.97,
      "change": 0.035,
      "turnover": 9.79
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.043,
      "changePct": 2.86,
      "change": 0.029,
      "turnover": 13.05
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.866,
      "changePct": 2.49,
      "change": 0.021,
      "turnover": 3.03
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.56,
      "changePct": 2.2,
      "change": 0.055,
      "turnover": 1.56
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.154,
      "changePct": 1.67,
      "change": 0.019,
      "turnover": 2.84
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.661,
      "changePct": 1.34,
      "change": 0.022,
      "turnover": 1.49
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.66,
      "changePct": 1.23,
      "change": 0.008,
      "turnover": 42.14
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.077,
      "changePct": 1.03,
      "change": 0.011,
      "turnover": 2.55
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.508,
      "changePct": 0.4,
      "change": 0.002,
      "turnover": 0.28
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.236,
      "changePct": 0.24,
      "change": 0.003,
      "turnover": 0.25
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.435,
      "changePct": 0.23,
      "change": 0.001,
      "turnover": 9.23
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.867,
      "changePct": 0.23,
      "change": 0.002,
      "turnover": 4.84
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.524,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 13.92
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.123,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 1.16
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.207,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.84
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.418,
      "changePct": -0.07,
      "change": -0.001,
      "turnover": 0.49
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.758,
      "changePct": -0.11,
      "change": -0.002,
      "turnover": 2.8
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.723,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 0.47
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.05,
      "changePct": -0.47,
      "change": -0.005,
      "turnover": 0.05
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.166,
      "changePct": -0.6,
      "change": -0.007,
      "turnover": 1.21
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.234,
      "changePct": -0.72,
      "change": -0.009,
      "turnover": 12.41
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.798,
      "changePct": -0.87,
      "change": -0.007,
      "turnover": 15.59
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.84,
      "changePct": 2.56,
      "amount": 77.4,
      "netFlow": 19.35
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.751,
      "changePct": 0.89,
      "amount": 44.75,
      "netFlow": 11.19
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.987,
      "changePct": 1.98,
      "amount": 29.27,
      "netFlow": 7.32
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.083,
      "changePct": 3.44,
      "amount": 17.64,
      "netFlow": 4.41
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.066,
      "changePct": 1.22,
      "amount": 15.67,
      "netFlow": 3.92
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.396,
      "changePct": 4.49,
      "amount": 11.55,
      "netFlow": 2.89
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.956,
      "changePct": 0.94,
      "amount": 9.27,
      "netFlow": 2.32
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.613,
      "changePct": 0.87,
      "amount": 6.67,
      "netFlow": 1.67
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.56,
      "changePct": 2.2,
      "amount": 1.56,
      "netFlow": 0.39
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.524,
      "changePct": 0.0,
      "amount": 13.92,
      "netFlow": -3.48
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.751,
      "changePct": 0.89,
      "amount": 44.75,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.066,
      "changePct": 1.22,
      "amount": 15.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.987,
      "changePct": 1.98,
      "amount": 29.27,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.956,
      "changePct": 0.94,
      "amount": 9.27,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.613,
      "changePct": 0.87,
      "amount": 6.67,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "创新药",
      "turnover": 18.82,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医疗",
      "turnover": 12.35,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医药",
      "turnover": 11.55,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "有色",
      "turnover": 12.89,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "半导体",
      "turnover": 17.64,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "电子",
      "turnover": 0.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 9.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 13.05,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 3.03,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.56,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.49,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 42.14,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 2.55,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.28,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 9.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 4.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 13.92,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "游戏",
      "turnover": 1.16,
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
      "nav": 4.4331,
      "ret1w": 3.45,
      "ret1m": 16.88,
      "ret3m": -13.78,
      "ret6m": -11.66,
      "ret1y": 2.57,
      "ret2y": 47.71,
      "ret3y": 148.94
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.282,
      "ret1w": 2.33,
      "ret1m": 9.76,
      "ret3m": -7.23,
      "ret6m": -12.2,
      "ret1y": 12.64,
      "ret2y": 22.99,
      "ret3y": 76.08
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.0516,
      "ret1w": 3.52,
      "ret1m": 20.64,
      "ret3m": -14.08,
      "ret6m": -4.14,
      "ret1y": 31.68,
      "ret2y": 110.0,
      "ret3y": 231.17
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7104,
      "ret1w": -0.52,
      "ret1m": -4.23,
      "ret3m": 6.03,
      "ret6m": -4.72,
      "ret1y": -12.72,
      "ret2y": -12.54,
      "ret3y": 8.01
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.3043,
      "ret1w": 2.0,
      "ret1m": 4.1,
      "ret3m": 3.87,
      "ret6m": -18.88,
      "ret1y": -24.14,
      "ret2y": -1.04,
      "ret3y": 20.62
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.8203,
      "ret1w": -0.51,
      "ret1m": 1.96,
      "ret3m": 4.11,
      "ret6m": -18.42,
      "ret1y": -29.9,
      "ret2y": -4.8,
      "ret3y": 33.27
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5077,
      "ret1w": -0.31,
      "ret1m": -1.78,
      "ret3m": 5.63,
      "ret6m": -3.25,
      "ret1y": -7.03,
      "ret2y": 22.81,
      "ret3y": 53.7
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.91,
      "ret1w": 1.98,
      "ret1m": 8.22,
      "ret3m": -10.33,
      "ret6m": -9.91,
      "ret1y": -3.88,
      "ret2y": 13.76,
      "ret3y": 67.69
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.371,
      "ret1w": 1.77,
      "ret1m": 6.49,
      "ret3m": -6.15,
      "ret6m": -5.48,
      "ret1y": 2.56,
      "ret2y": 19.25,
      "ret3y": 48.11
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.543,
      "ret1w": 3.32,
      "ret1m": 9.49,
      "ret3m": -12.28,
      "ret6m": 10.07,
      "ret1y": 44.61,
      "ret2y": 142.01,
      "ret3y": 287.64
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.117,
      "ret1w": 0.0,
      "ret1m": -1.59,
      "ret3m": 9.51,
      "ret6m": -3.29,
      "ret1y": -10.85,
      "ret2y": -11.56,
      "ret3y": -0.98
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.431,
      "ret1w": 3.14,
      "ret1m": 5.56,
      "ret3m": 9.85,
      "ret6m": -8.23,
      "ret1y": -15.47,
      "ret2y": -10.43,
      "ret3y": 31.98
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.813,
      "ret1w": 2.28,
      "ret1m": 5.57,
      "ret3m": -21.58,
      "ret6m": -46.0,
      "ret1y": -42.21,
      "ret2y": -11.35,
      "ret3y": 30.1
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.926,
      "ret1w": 0.12,
      "ret1m": -1.11,
      "ret3m": 2.98,
      "ret6m": 5.06,
      "ret1y": -4.81,
      "ret2y": 1.79,
      "ret3y": 9.26
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.6576,
      "ret1w": 2.28,
      "ret1m": 9.69,
      "ret3m": -4.93,
      "ret6m": -7.26,
      "ret1y": -1.92,
      "ret2y": 15.67,
      "ret3y": 69.06
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.3803,
      "ret1w": 2.87,
      "ret1m": 13.7,
      "ret3m": -22.28,
      "ret6m": -6.95,
      "ret1y": 43.75,
      "ret2y": 98.47,
      "ret3y": 191.35
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5309,
      "ret1w": -0.13,
      "ret1m": -0.44,
      "ret3m": 7.09,
      "ret6m": -8.02,
      "ret1y": -11.54,
      "ret2y": -4.82,
      "ret3y": 19.01
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.097,
      "ret1w": 8.19,
      "ret1m": 10.47,
      "ret3m": 5.28,
      "ret6m": 8.61,
      "ret1y": 8.4,
      "ret2y": -2.75,
      "ret3y": 8.94
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3262,
      "ret1w": -0.48,
      "ret1m": -2.66,
      "ret3m": 5.54,
      "ret6m": -4.54,
      "ret1y": -8.91,
      "ret2y": 8.72,
      "ret3y": 14.83
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
      "nav": 1.3084,
      "ret1w": 1.88,
      "ret1m": 5.42,
      "ret3m": -8.46,
      "ret6m": -5.37,
      "ret1y": 3.44,
      "ret2y": 31.25,
      "ret3y": 46.26
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3914,
      "ret1w": 1.88,
      "ret1m": 5.43,
      "ret3m": -8.42,
      "ret6m": -5.29,
      "ret1y": 3.63,
      "ret2y": 31.76,
      "ret3y": 47.41
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
      "nav": 2.5586,
      "ret1w": 2.06,
      "ret1m": 4.87,
      "ret3m": -4.15,
      "ret6m": -2.88,
      "ret1y": 6.78,
      "ret2y": 44.11,
      "ret3y": 86.12
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.75,
      "ret1w": 1.32,
      "ret1m": 3.22,
      "ret3m": -7.37,
      "ret6m": -16.81,
      "ret1y": -14.35,
      "ret2y": -0.16,
      "ret3y": 17.67
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.2756,
      "ret1w": 2.31,
      "ret1m": 7.13,
      "ret3m": -10.68,
      "ret6m": 4.11,
      "ret1y": 25.56,
      "ret2y": 73.33,
      "ret3y": 145.23
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5247,
      "ret1w": 0.25,
      "ret1m": -0.13,
      "ret3m": -13.26,
      "ret6m": -2.65,
      "ret1y": 7.08,
      "ret2y": 31.5,
      "ret3y": 51.87
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5346,
      "ret1w": 0.24,
      "ret1m": -0.13,
      "ret3m": -13.23,
      "ret6m": -2.55,
      "ret1y": 7.28,
      "ret2y": 32.03,
      "ret3y": 53.05
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2748,
      "ret1w": 0.09,
      "ret1m": -0.72,
      "ret3m": 2.65,
      "ret6m": -1.24,
      "ret1y": -1.23,
      "ret2y": -0.9,
      "ret3y": 0.75
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1488,
      "ret1w": 0.9,
      "ret1m": 0.21,
      "ret3m": 1.31,
      "ret6m": -0.47,
      "ret1y": -6.16,
      "ret2y": 4.97,
      "ret3y": 22.61
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4502,
      "ret1w": 1.55,
      "ret1m": 5.62,
      "ret3m": -11.23,
      "ret6m": -12.74,
      "ret1y": 2.8,
      "ret2y": -1.75,
      "ret3y": 18.15
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0012,
      "ret1w": 0.64,
      "ret1m": -0.03,
      "ret3m": 4.15,
      "ret6m": -7.34,
      "ret1y": -5.84,
      "ret2y": 21.74,
      "ret3y": 43.38
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.436,
      "ret1w": 1.87,
      "ret1m": 9.11,
      "ret3m": -20.98,
      "ret6m": -10.5,
      "ret1y": 51.9,
      "ret2y": 153.02,
      "ret3y": 209.55
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4615,
      "ret1w": -0.51,
      "ret1m": -3.33,
      "ret3m": 3.95,
      "ret6m": -1.68,
      "ret1y": -1.03,
      "ret2y": -2.61,
      "ret3y": 7.83
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6658,
      "ret1w": 3.13,
      "ret1m": 17.76,
      "ret3m": -15.8,
      "ret6m": -9.75,
      "ret1y": -5.53,
      "ret2y": 12.94,
      "ret3y": 48.48
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 14.817,
      "ret1w": 3.15,
      "ret1m": 16.07,
      "ret3m": -11.53,
      "ret6m": 26.81,
      "ret1y": 81.2,
      "ret2y": 213.92,
      "ret3y": 359.01
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
      "ret1w": 0.02,
      "ret1m": 0.03,
      "ret3m": 0.17,
      "ret6m": 0.33,
      "ret1y": 0.79,
      "ret2y": 1.36,
      "ret3y": 2.61
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
      "nav": 1.0753,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.13,
      "ret6m": 0.35,
      "ret1y": 0.73,
      "ret2y": 1.2,
      "ret3y": 2.6
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0895,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.15,
      "ret6m": 0.43,
      "ret1y": 0.89,
      "ret2y": 1.52,
      "ret3y": 3.25
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0718,
      "ret1w": 0.63,
      "ret1m": 1.87,
      "ret3m": -2.1,
      "ret6m": -1.88,
      "ret1y": 2.52,
      "ret2y": 9.44,
      "ret3y": 13.06
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2212,
      "ret1w": 0.71,
      "ret1m": 2.48,
      "ret3m": -2.65,
      "ret6m": -2.93,
      "ret1y": 0.09,
      "ret2y": 2.46,
      "ret3y": 7.22
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0783,
      "ret1w": 0.63,
      "ret1m": 1.88,
      "ret3m": -2.07,
      "ret6m": -1.78,
      "ret1y": 2.73,
      "ret2y": 9.89,
      "ret3y": 13.98
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0446,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.11,
      "ret6m": 0.39,
      "ret1y": 0.86,
      "ret2y": 1.61,
      "ret3y": 3.46
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1716,
      "ret1w": 0.41,
      "ret1m": 1.17,
      "ret3m": -2.13,
      "ret6m": -3.37,
      "ret1y": -2.55,
      "ret2y": 2.62,
      "ret3y": 9.84
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2202,
      "ret1w": 0.06,
      "ret1m": 0.06,
      "ret3m": -0.25,
      "ret6m": -1.17,
      "ret1y": 0.48,
      "ret2y": 6.13,
      "ret3y": 14.92
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1436,
      "ret1w": 0.49,
      "ret1m": 1.37,
      "ret3m": -1.22,
      "ret6m": -0.52,
      "ret1y": 1.47,
      "ret2y": 6.04,
      "ret3y": 10.31
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.215,
      "ret1w": 0.49,
      "ret1m": 1.38,
      "ret3m": -1.19,
      "ret6m": -0.42,
      "ret1y": 1.67,
      "ret2y": 6.48,
      "ret3y": 11.23
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.275,
      "ret1w": -2.07,
      "ret1m": 7.21,
      "ret3m": -11.44,
      "ret6m": -2.86,
      "ret1y": 38.63,
      "ret2y": 89.9,
      "ret3y": 154.19
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9708,
      "ret1w": -0.2,
      "ret1m": 2.19,
      "ret3m": 2.08,
      "ret6m": 1.95,
      "ret1y": 6.79,
      "ret2y": 12.89,
      "ret3y": 42.23
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8937,
      "ret1w": -0.79,
      "ret1m": 1.76,
      "ret3m": -4.75,
      "ret6m": -13.28,
      "ret1y": -3.41,
      "ret2y": 11.07,
      "ret3y": 61.59
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.2819,
      "ret1w": -0.47,
      "ret1m": 4.92,
      "ret3m": -5.55,
      "ret6m": 1.02,
      "ret1y": 15.01,
      "ret2y": 26.74,
      "ret3y": 84.93
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9371,
      "ret1w": -0.23,
      "ret1m": 0.05,
      "ret3m": -0.78,
      "ret6m": -1.41,
      "ret1y": -2.68,
      "ret2y": -3.37,
      "ret3y": -1.4
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6224,
      "ret1w": -1.27,
      "ret1m": 5.46,
      "ret3m": -7.43,
      "ret6m": -2.81,
      "ret1y": 25.94,
      "ret2y": 57.63,
      "ret3y": 108.91
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.63,
      "ret1w": -0.15,
      "ret1m": 3.44,
      "ret3m": -1.11,
      "ret6m": -0.13,
      "ret1y": 3.23,
      "ret2y": 8.23,
      "ret3y": 30.83
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.197,
      "ret1w": 0.34,
      "ret1m": 2.75,
      "ret3m": -3.78,
      "ret6m": -10.07,
      "ret1y": -7.64,
      "ret2y": -18.24,
      "ret3y": 108.17
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.911,
      "ret1w": -1.19,
      "ret1m": 6.18,
      "ret3m": -9.71,
      "ret6m": -15.1,
      "ret1y": -14.38,
      "ret2y": -20.09,
      "ret3y": 41.46
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8033,
      "ret1w": -2.08,
      "ret1m": 9.9,
      "ret3m": -9.05,
      "ret6m": -3.43,
      "ret1y": 36.98,
      "ret2y": 90.7,
      "ret3y": 148.52
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4906,
      "ret1w": 0.52,
      "ret1m": 2.22,
      "ret3m": 7.62,
      "ret6m": -3.24,
      "ret1y": 1.35,
      "ret2y": 35.98,
      "ret3y": 50.67
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6794,
      "ret1w": -1.31,
      "ret1m": 3.45,
      "ret3m": -2.91,
      "ret6m": -0.39,
      "ret1y": 8.26,
      "ret2y": 29.35,
      "ret3y": 62.09
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.29,
      "ret1w": -1.74,
      "ret1m": 5.9,
      "ret3m": -3.18,
      "ret6m": -4.1,
      "ret1y": 4.84,
      "ret2y": 18.56,
      "ret3y": 45.32
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.322,
      "ret1w": -0.68,
      "ret1m": -0.97,
      "ret3m": 0.23,
      "ret6m": -0.45,
      "ret1y": 5.84,
      "ret2y": 6.79,
      "ret3y": -3.12
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.038,
      "ret1w": -0.1,
      "ret1m": 3.19,
      "ret3m": 1.65,
      "ret6m": -10.34,
      "ret1y": -15.99,
      "ret2y": 16.46,
      "ret3y": 57.43
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.01,
      "ret1w": 0.04,
      "ret1m": 0.08,
      "ret3m": 0.15,
      "ret6m": 0.64,
      "ret1y": 1.46,
      "ret2y": 1.64,
      "ret3y": 3.43
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0088,
      "ret1w": 0.03,
      "ret1m": 0.08,
      "ret3m": 0.15,
      "ret6m": 0.61,
      "ret1y": 1.47,
      "ret2y": 1.69,
      "ret3y": 3.61
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.47,
      "ret1w": 1.1,
      "ret1m": 3.3,
      "ret3m": -3.98,
      "ret6m": -5.16,
      "ret1y": 3.09,
      "ret2y": 17.32,
      "ret3y": 38.81
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.919,
      "ret1w": 1.57,
      "ret1m": 6.11,
      "ret3m": -4.33,
      "ret6m": -4.73,
      "ret1y": 5.08,
      "ret2y": 31.25,
      "ret3y": 66.32
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7247,
      "ret1w": 2.57,
      "ret1m": 7.08,
      "ret3m": 7.4,
      "ret6m": -7.71,
      "ret1y": -4.47,
      "ret2y": 45.41,
      "ret3y": 75.1
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.1642,
      "ret1w": 1.16,
      "ret1m": 2.71,
      "ret3m": -2.34,
      "ret6m": -1.73,
      "ret1y": 6.18,
      "ret2y": 20.39,
      "ret3y": 45.61
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2255,
      "ret1w": 1.16,
      "ret1m": 2.72,
      "ret3m": -2.31,
      "ret6m": -1.63,
      "ret1y": 6.4,
      "ret2y": 20.87,
      "ret3y": 46.77
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0582,
      "ret1w": 1.86,
      "ret1m": 6.21,
      "ret3m": -5.79,
      "ret6m": -7.24,
      "ret1y": -1.33,
      "ret2y": 25.53,
      "ret3y": 66.67
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.8292,
      "ret1w": 0.9,
      "ret1m": 2.2,
      "ret3m": -1.57,
      "ret6m": -3.25,
      "ret1y": 1.84,
      "ret2y": 14.59,
      "ret3y": 41.99
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.6014,
      "ret1w": 0.65,
      "ret1m": 1.71,
      "ret3m": 0.49,
      "ret6m": -6.35,
      "ret1y": -2.9,
      "ret2y": 20.71,
      "ret3y": 55.67
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.0635,
      "ret1w": 1.81,
      "ret1m": 5.65,
      "ret3m": -7.76,
      "ret6m": -1.69,
      "ret1y": 15.19,
      "ret2y": 42.75,
      "ret3y": 84.8
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1711,
      "ret1w": 0.57,
      "ret1m": -0.69,
      "ret3m": 6.57,
      "ret6m": -2.62,
      "ret1y": -1.11,
      "ret2y": 9.44,
      "ret3y": 31.52
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.525,
      "ret1w": 0.13,
      "ret1m": 0.48,
      "ret3m": 2.38,
      "ret6m": 2.4,
      "ret1y": 3.0,
      "ret2y": 14.72,
      "ret3y": 37.29
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4409,
      "ret1w": -0.35,
      "ret1m": 4.17,
      "ret3m": -1.06,
      "ret6m": 1.74,
      "ret1y": 13.6,
      "ret2y": 17.59,
      "ret3y": 49.44
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8459,
      "ret1w": 0.68,
      "ret1m": 3.46,
      "ret3m": -4.54,
      "ret6m": -5.48,
      "ret1y": 7.4,
      "ret2y": 28.27,
      "ret3y": 63.24
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1716,
      "ret1w": 2.32,
      "ret1m": 3.09,
      "ret3m": -11.56,
      "ret6m": -4.49,
      "ret1y": 0.32,
      "ret2y": 20.92,
      "ret3y": 51.29
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1734,
      "ret1w": 2.32,
      "ret1m": 3.1,
      "ret3m": -11.53,
      "ret6m": -4.49,
      "ret1y": 0.31,
      "ret2y": 20.09,
      "ret3y": 50.82
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4018,
      "ret1w": 0.46,
      "ret1m": 5.45,
      "ret3m": -9.98,
      "ret6m": -9.58,
      "ret1y": -4.29,
      "ret2y": 9.5,
      "ret3y": 40.01
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.4334,
      "ret1w": 0.46,
      "ret1m": 5.45,
      "ret3m": -9.95,
      "ret6m": -9.5,
      "ret1y": -4.09,
      "ret2y": 9.94,
      "ret3y": 41.12
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0107,
      "ret1w": 1.04,
      "ret1m": 2.91,
      "ret3m": -17.79,
      "ret6m": -8.18,
      "ret1y": -0.06,
      "ret2y": 20.72,
      "ret3y": 61.29
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
      "nav": 1.0835,
      "ret1w": 0.02,
      "ret1m": 0.03,
      "ret3m": 0.19,
      "ret6m": 0.41,
      "ret1y": 0.94,
      "ret2y": 1.66,
      "ret3y": 3.2
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.411,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": 0.11,
      "ret6m": 0.09,
      "ret1y": 0.22,
      "ret2y": 0.71,
      "ret3y": 10.01
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4628,
      "ret1w": -0.01,
      "ret1m": 0.01,
      "ret3m": 0.14,
      "ret6m": 0.18,
      "ret1y": 0.41,
      "ret2y": 1.11,
      "ret3y": 10.89
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1526,
      "ret1w": 0.33,
      "ret1m": 3.23,
      "ret3m": -1.57,
      "ret6m": 9.18,
      "ret1y": 13.63,
      "ret2y": 32.35,
      "ret3y": 68.57
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2693,
      "ret1w": 0.48,
      "ret1m": 2.03,
      "ret3m": 0.63,
      "ret6m": 1.06,
      "ret1y": 6.57,
      "ret2y": 15.86,
      "ret3y": 52.07
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
      {
        "date": "2026-07-13",
        "nav": 1.3732
      },
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.84,
      "nav": 4.4331,
      "price": 4.4331,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.49,
      "nav": 4.282,
      "price": 4.282,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -1.03,
      "nav": 5.0516,
      "price": 5.0516,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.21,
      "nav": 0.7104,
      "price": 0.7104,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.2,
      "nav": 2.3043,
      "price": 2.3043,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.1,
      "nav": 2.8203,
      "price": 2.8203,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.09,
      "nav": 5.5077,
      "price": 5.5077,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.41,
      "nav": 1.91,
      "price": 1.91,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.32,
      "nav": 1.371,
      "price": 1.371,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.47,
      "nav": 3.543,
      "price": 3.543,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.117,
      "price": 1.117,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.28,
      "nav": 2.431,
      "price": 2.431,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.28,
      "nav": 1.813,
      "price": 1.813,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.926,
      "price": 1.926,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.48,
      "nav": 1.6576,
      "price": 1.6576,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.69,
      "nav": 2.3803,
      "price": 2.3803,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.5309,
      "price": 2.5309,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.52,
      "nav": 1.097,
      "price": 1.097,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": 0.13,
      "nav": 2.3262,
      "price": 2.3262,
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
      "maxDrawdown": 25.32,
      "sharpe": 0.12,
      "calmar": 0.12
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 14.64,
      "sharpe": 0.86,
      "calmar": 0.86
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 30.96,
      "sharpe": 1.24,
      "calmar": 1.24
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 6.35,
      "sharpe": -1.38,
      "calmar": -1.38
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 6.15,
      "sharpe": -2.65,
      "calmar": -2.65
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 2.94,
      "sharpe": -4.3,
      "calmar": -4.3
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.67,
      "sharpe": -1.04,
      "calmar": -1.04
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 12.33,
      "sharpe": -0.29,
      "calmar": -0.29
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 9.73,
      "sharpe": 0.22,
      "calmar": 0.22
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 14.23,
      "sharpe": 3.08,
      "calmar": 3.08
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 2.39,
      "sharpe": -1.65,
      "calmar": -1.65
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 8.34,
      "sharpe": -1.46,
      "calmar": -1.46
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 8.36,
      "sharpe": -3.99,
      "calmar": -3.99
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.67,
      "sharpe": -0.79,
      "calmar": -0.79
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 14.54,
      "sharpe": -0.13,
      "calmar": -0.13
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 20.55,
      "sharpe": 2.34,
      "calmar": 2.34
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 0.66,
      "sharpe": -2.12,
      "calmar": -2.12
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 15.71,
      "sharpe": 0.54,
      "calmar": 0.54
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 3.99,
      "sharpe": -1.16,
      "calmar": -1.16
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
      "title": "今年第13号台风“白海豚”（强台风级）的中心已于9日17时30分前后在浙江省台州玉环市沿海登陆，随后18时40分前后在浙江省温州乐清市沿海再次登陆。北京市水务局9日傍晚发布消息，据最新资料研判，受台风影响，11日夜间至15日京津冀地区将出现强降雨天气，过程持续时间长、累计雨量大。预计，11日夜间至15日北京累计降雨量将达到大暴雨量级，山区及南部部分地区将出现特大暴雨。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:11",
      "impact": "neutral"
    },
    {
      "title": "记者从自然资源部获悉，今天（9日）16时，国家海洋预报台继续发布风暴潮红色警报。预计至10日下午，江苏南通到浙江宁波沿海将出现100到250厘米的风暴增水，浙江台州到温州沿海将出现180到350厘米的风暴增水，福建沿海将出现50到100厘米的风暴增水。浙江省宁波市、舟山市和台州市的风暴潮预警级别为红色，上海市和浙江省嘉兴市的风暴潮预警级别为橙色，浙江省温州市的风暴潮预警级别为黄色。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:04",
      "impact": "neutral"
    },
    {
      "title": "今年第13号台风“白海豚”的中心已于今天（9日）下午18点40分前后在浙江省温州乐清市翁垟街道沿海再次登陆，登陆时中心附近最大风力有13级（38米/秒），中心最低气压为950百帕。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:59",
      "impact": "neutral"
    },
    {
      "title": "新疆维吾尔自治区气象台8月9日15时32分发布高温橙色预警信号：预计9日下午至19日，天山北坡、南疆盆地、东疆大部和塔城地区北部、阿勒泰地区西部的部分地区将有37℃以上的高温天气，其中博州东部、塔城地区北部、克拉玛依市、石河子市、昌吉州、阿克苏地区、巴州、吐鲁番市、哈密市等地的部分区域最高气温将升至40℃以上，吐鲁番市局部区域将达45℃以上。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:58",
      "impact": "neutral"
    },
    {
      "title": "新华财经北京8月9日电（记者陆宇航）国家统计局9日发布的数据显示，7月份，国内部分行业需求增加，但受输入性和季节性等因素影响，我国工业生产者出厂价格指数（PPI）环比下降0.7%，同比上涨3.5%，涨幅比上月回落0.6个百分点。值得注意的是，新动能发展势头依旧不减。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:46",
      "impact": "neutral"
    },
    {
      "title": "据中央气象台的消息，今年第13号台风“白海豚”（强台风级）的中心已在浙江省台州玉环市坎门街道沿海登陆，登陆时中心附近最大风力14级（42米/秒），中心最低气压945百帕。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:34",
      "impact": "neutral"
    },
    {
      "title": "今年第13号台风“白海豚”（强台风级）来势汹汹，中央气象台今天（9日）上午10时升级发布最高级别的台风红色预警。据浙江省气象台消息，台风“白海豚”将于今天（9日）傍晚前后在浙江玉环到温岭一带沿海登陆（台风级或强台风级，12~14级）。预计，今明两天浙江、福建、上海、安徽、江苏等多地有大到暴雨，浙江中东部部分地区有特大暴雨，沿海局地阵风可达13至16级。受台风影响，上海、浙江、江苏、江西、安徽等地多家景区关停，多地交通实施应急管控举措。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:31",
      "impact": "neutral"
    },
    {
      "title": "财经周报：8月3日至8月9日",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:28",
      "impact": "neutral"
    },
    {
      "title": "方正证券研报表示，市场超跌反弹进入攻坚期，科技与景气赛道分化演绎。继续关注三方面配置机会，一是科技股也需要精选结构；二是关注HALO资产的布局机会；三是景气度较好，拥挤度不高并且负面压制缓解的医药核心龙头。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "17:04",
      "impact": "neutral"
    },
    {
      "title": "据网络平台数据，截至8月9日，2026年暑期档（6月1日-8月31日）档期总票房（含预售）突破85亿元！《功夫女足》《八仙！》《蜘蛛侠：崭新之日》《给阿嬷的情书》《小黄人与大怪兽》暂列档期票房前5名。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "16:54",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 54,
    "label": "中性",
    "upDownRatio": "4,221/889",
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
