// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-13 17:31:35
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-13 17:31 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-13",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3800.86,
      "change": 3.62,
      "changePct": "+0.10%",
      "high": 3822.11,
      "low": 3741.53,
      "volume": 483305909.0,
      "amount": 779302290000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 12353.7,
      "change": -31.17,
      "changePct": "-0.25%",
      "high": 12486.21,
      "low": 12060.8,
      "volume": 561882123.0,
      "amount": 896615520000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2958.34,
      "change": -5.48,
      "changePct": "-0.18%",
      "high": 2999.76,
      "low": 2860.8,
      "volume": 177673105.0,
      "amount": 449737550000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1427.18,
      "change": 0.46,
      "changePct": "+0.03%",
      "high": 1447.19,
      "low": 1375.33,
      "volume": 7696867.0,
      "amount": 76980320000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4275.68,
      "change": -12.3,
      "changePct": "-0.29%",
      "high": 4310.33,
      "low": 4216.86,
      "volume": 180434103.0,
      "amount": 442037720000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7085.09,
      "change": -7.93,
      "changePct": "-0.11%",
      "high": 7152.45,
      "low": 6904.6,
      "volume": 139363027.0,
      "amount": 275135820000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.92万亿",
      "label": "成交额",
      "rawAmount": 2919809220000.0,
      "change": ""
    },
    "upDown": {
      "val": "2,906/1,546",
      "label": "涨/跌家数",
      "rawUp": 2906,
      "rawDown": 1546,
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
    "totalInflow": 17.66,
    "totalOutflow": 0,
    "netFlow": 17.66,
    "netFlowTrend": [
      3.53,
      7.06,
      10.6,
      14.13,
      17.66
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
      "inflow": 10.02,
      "pct": 1.78
    },
    {
      "name": "5G",
      "inflow": 2.52,
      "pct": 1.74
    },
    {
      "name": "煤炭",
      "inflow": 2.18,
      "pct": 1.41
    },
    {
      "name": "有色",
      "inflow": 1.83,
      "pct": 0.63
    },
    {
      "name": "军工",
      "inflow": 0.96,
      "pct": 2.27
    },
    {
      "name": "电子",
      "inflow": 0.22,
      "pct": 0.42
    },
    {
      "name": "券商",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "传媒",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "计算机",
      "inflow": -0.07,
      "pct": -0.09
    },
    {
      "name": "家电",
      "inflow": -0.1,
      "pct": -0.51
    },
    {
      "name": "钢铁",
      "inflow": -0.17,
      "pct": -0.09
    },
    {
      "name": "云计算",
      "inflow": -0.19,
      "pct": -0.2
    },
    {
      "name": "游戏",
      "inflow": -0.28,
      "pct": -0.38
    },
    {
      "name": "人工智能",
      "inflow": -0.41,
      "pct": -0.11
    },
    {
      "name": "地产",
      "inflow": -0.45,
      "pct": -0.64
    },
    {
      "name": "医药",
      "inflow": -1.05,
      "pct": -0.79
    },
    {
      "name": "芯片",
      "inflow": -1.88,
      "pct": -0.21
    },
    {
      "name": "银行",
      "inflow": -3.24,
      "pct": -0.46
    },
    {
      "name": "半导体",
      "inflow": -3.92,
      "pct": -0.23
    }
  ],
  "sectors": [
    {
      "name": "军工",
      "code": "512660",
      "price": 1.082,
      "changePct": 2.27,
      "change": 0.024,
      "turnover": 3.21
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.572,
      "changePct": 1.78,
      "change": 0.01,
      "turnover": 33.4
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.878,
      "changePct": 1.74,
      "change": 0.015,
      "turnover": 8.41
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.292,
      "changePct": 1.41,
      "change": 0.018,
      "turnover": 7.26
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.6,
      "changePct": 0.63,
      "change": 0.01,
      "turnover": 6.09
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.723,
      "changePct": 0.42,
      "change": 0.003,
      "turnover": 0.75
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.495,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 7.43
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.819,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 4.54
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.996,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.07
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.121,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 0.55
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.052,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 0.25
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.902,
      "changePct": -0.11,
      "change": -0.001,
      "turnover": 1.38
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.505,
      "changePct": -0.2,
      "change": -0.003,
      "turnover": 0.63
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.971,
      "changePct": -0.21,
      "change": -0.002,
      "turnover": 6.27
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.886,
      "changePct": -0.23,
      "change": -0.002,
      "turnover": 13.05
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.039,
      "changePct": -0.38,
      "change": -0.004,
      "turnover": 0.92
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.864,
      "changePct": -0.46,
      "change": -0.004,
      "turnover": 10.81
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.375,
      "changePct": -0.51,
      "change": -0.007,
      "turnover": 0.32
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.238,
      "changePct": -0.64,
      "change": -0.008,
      "turnover": 1.51
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.376,
      "changePct": -0.79,
      "change": -0.003,
      "turnover": 3.5
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.491,
      "changePct": -0.81,
      "change": -0.004,
      "turnover": 0.22
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.415,
      "changePct": -0.95,
      "change": -0.004,
      "turnover": 3.19
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.752,
      "changePct": -1.05,
      "change": -0.008,
      "turnover": 2.02
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.713,
      "changePct": -1.11,
      "change": -0.008,
      "turnover": 0.74
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.82,
      "changePct": -1.2,
      "change": -0.01,
      "turnover": 5.87
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.335,
      "changePct": -1.47,
      "change": -0.005,
      "turnover": 5.15
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.172,
      "changePct": -2.07,
      "change": -0.046,
      "turnover": 1.8
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.405,
      "changePct": -2.7,
      "change": -0.039,
      "turnover": 1.16
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.507,
      "changePct": 0.07,
      "amount": 81.14,
      "netFlow": 20.29
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.172,
      "changePct": -2.07,
      "amount": 1.8,
      "netFlow": -0.45
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.376,
      "changePct": -0.79,
      "amount": 3.5,
      "netFlow": -0.87
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.222,
      "changePct": -0.4,
      "amount": 6.86,
      "netFlow": -1.71
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.539,
      "changePct": -0.24,
      "amount": 6.92,
      "netFlow": -1.73
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.495,
      "changePct": 0.0,
      "amount": 7.43,
      "netFlow": -1.86
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.886,
      "changePct": -0.23,
      "amount": 13.05,
      "netFlow": -3.26
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.917,
      "changePct": -0.51,
      "amount": 15.29,
      "netFlow": -3.82
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.109,
      "changePct": -0.22,
      "amount": 28.28,
      "netFlow": -7.07
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.345,
      "changePct": -0.34,
      "amount": 46.79,
      "netFlow": -11.7
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.345,
      "changePct": -0.34,
      "amount": 46.79,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.917,
      "changePct": -0.51,
      "amount": 15.29,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.109,
      "changePct": -0.22,
      "amount": 28.28,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.539,
      "changePct": -0.24,
      "amount": 6.92,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.222,
      "changePct": -0.4,
      "amount": 6.86,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "军工",
      "turnover": 3.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 33.4,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "5G",
      "turnover": 8.41,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "煤炭",
      "turnover": 7.26,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 6.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.75,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 7.43,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 4.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.55,
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
      "name": "人工智能",
      "turnover": 1.38,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.63,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 13.05,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "游戏",
      "turnover": 0.92,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 10.81,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "家电",
      "turnover": 0.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 1.51,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.5,
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
      "nav": 4.1372,
      "ret1w": 0.58,
      "ret1m": -6.48,
      "ret3m": -7.59,
      "ret6m": -13.4,
      "ret1y": -4.19,
      "ret2y": 6.11,
      "ret3y": 111.01
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.5872,
      "ret1w": 1.21,
      "ret1m": -6.73,
      "ret3m": -14.34,
      "ret6m": -21.03,
      "ret1y": -17.62,
      "ret2y": -10.88,
      "ret3y": 27.4
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.9772,
      "ret1w": 2.34,
      "ret1m": -11.78,
      "ret3m": -15.06,
      "ret6m": -12.15,
      "ret1y": 7.32,
      "ret2y": 56.46,
      "ret3y": 173.23
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6968,
      "ret1w": -0.94,
      "ret1m": -0.04,
      "ret3m": -0.03,
      "ret6m": 5.13,
      "ret1y": -5.52,
      "ret2y": -14.77,
      "ret3y": -7.77
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.9669,
      "ret1w": -0.56,
      "ret1m": -1.59,
      "ret3m": -0.31,
      "ret6m": -4.21,
      "ret1y": -30.05,
      "ret2y": -31.09,
      "ret3y": -13.08
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.6521,
      "ret1w": -0.36,
      "ret1m": -2.11,
      "ret3m": -1.45,
      "ret6m": 2.97,
      "ret1y": -23.74,
      "ret2y": -22.46,
      "ret3y": 14.05
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.2113,
      "ret1w": -1.18,
      "ret1m": -1.45,
      "ret3m": -3.65,
      "ret6m": 2.19,
      "ret1y": -8.47,
      "ret2y": 2.15,
      "ret3y": 28.89
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.82,
      "ret1w": 0.05,
      "ret1m": -4.06,
      "ret3m": -1.78,
      "ret6m": -6.23,
      "ret1y": -8.45,
      "ret2y": -2.2,
      "ret3y": 47.85
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2444,
      "ret1w": -0.3,
      "ret1m": -3.88,
      "ret3m": -5.2,
      "ret6m": -9.38,
      "ret1y": -8.42,
      "ret2y": -1.3,
      "ret3y": 18.18
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.943,
      "ret1w": 0.14,
      "ret1m": -7.01,
      "ret3m": -10.87,
      "ret6m": -23.64,
      "ret1y": 6.25,
      "ret2y": 38.3,
      "ret3y": 163.47
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.101,
      "ret1w": -0.63,
      "ret1m": 0.18,
      "ret3m": 1.29,
      "ret6m": 8.58,
      "ret1y": -3.25,
      "ret2y": -13.65,
      "ret3y": -14.19
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.374,
      "ret1w": -1.37,
      "ret1m": -3.26,
      "ret3m": 4.44,
      "ret6m": 6.84,
      "ret1y": -11.05,
      "ret2y": -8.9,
      "ret3y": 19.06
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.5346,
      "ret1w": 0.94,
      "ret1m": -4.21,
      "ret3m": -6.92,
      "ret6m": -29.94,
      "ret1y": -50.78,
      "ret2y": -43.7,
      "ret3y": -9.12
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8625,
      "ret1w": -1.33,
      "ret1m": -1.18,
      "ret3m": -2.45,
      "ret6m": 0.66,
      "ret1y": 4.11,
      "ret2y": -4.25,
      "ret3y": -5.65
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.5626,
      "ret1w": 0.18,
      "ret1m": -3.83,
      "ret3m": -4.32,
      "ret6m": -5.19,
      "ret1y": -6.92,
      "ret2y": 1.67,
      "ret3y": 44.02
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.9994,
      "ret1w": 2.08,
      "ret1m": -9.86,
      "ret3m": -14.34,
      "ret6m": -31.23,
      "ret1y": -4.34,
      "ret2y": 55.14,
      "ret3y": 133.66
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5873,
      "ret1w": -1.11,
      "ret1m": -2.0,
      "ret3m": 1.85,
      "ret6m": 8.63,
      "ret1y": -2.0,
      "ret2y": -3.53,
      "ret3y": 5.93
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.972,
      "ret1w": -1.22,
      "ret1m": -7.25,
      "ret3m": 0.93,
      "ret6m": -8.65,
      "ret1y": -4.71,
      "ret2y": -13.91,
      "ret3y": -11.72
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.322,
      "ret1w": -0.52,
      "ret1m": 1.37,
      "ret3m": 0.46,
      "ret6m": 4.86,
      "ret1y": -3.82,
      "ret2y": 4.57,
      "ret3y": 3.88
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2664,
      "ret1w": 0.08,
      "ret1m": -2.29,
      "ret3m": -2.81,
      "ret6m": -0.49,
      "ret1y": 0.72,
      "ret2y": 8.29,
      "ret3y": 57.26
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.1215,
      "ret1w": 0.23,
      "ret1m": -4.97,
      "ret3m": -9.26,
      "ret6m": -16.14,
      "ret1y": -15.2,
      "ret2y": -3.81,
      "ret3y": 23.4
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.1935,
      "ret1w": 0.23,
      "ret1m": -4.96,
      "ret3m": -9.23,
      "ret6m": -16.06,
      "ret1y": -15.05,
      "ret2y": -3.44,
      "ret3y": 24.39
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0636,
      "ret1w": -0.08,
      "ret1m": -0.35,
      "ret3m": -1.64,
      "ret6m": -3.12,
      "ret1y": -1.78,
      "ret2y": -0.37,
      "ret3y": 4.89
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.038,
      "ret1w": -0.08,
      "ret1m": -0.32,
      "ret3m": -1.58,
      "ret6m": -2.97,
      "ret1y": -1.49,
      "ret2y": 0.22,
      "ret3y": 6.17
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6975,
      "ret1w": -0.8,
      "ret1m": -0.4,
      "ret3m": -0.66,
      "ret6m": -1.76,
      "ret1y": -11.61,
      "ret2y": -14.12,
      "ret3y": -4.57
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7156,
      "ret1w": -0.79,
      "ret1m": -0.38,
      "ret3m": -0.61,
      "ret6m": -1.64,
      "ret1y": -11.38,
      "ret2y": -13.68,
      "ret3y": -3.61
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.5103,
      "ret1w": 1.38,
      "ret1m": -5.82,
      "ret3m": -12.27,
      "ret6m": -17.39,
      "ret1y": 9.28,
      "ret2y": 38.97,
      "ret3y": 118.27
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.3662,
      "ret1w": -0.71,
      "ret1m": -3.97,
      "ret3m": -1.86,
      "ret6m": -10.44,
      "ret1y": -2.52,
      "ret2y": 5.69,
      "ret3y": 58.2
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6969,
      "ret1w": -1.06,
      "ret1m": -2.09,
      "ret3m": -1.39,
      "ret6m": -10.92,
      "ret1y": -20.27,
      "ret2y": -14.53,
      "ret3y": 0.4
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.9188,
      "ret1w": -0.68,
      "ret1m": -5.67,
      "ret3m": -1.0,
      "ret6m": -17.79,
      "ret1y": 9.58,
      "ret2y": 20.77,
      "ret3y": 97.99
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4825,
      "ret1w": -0.58,
      "ret1m": -2.86,
      "ret3m": -4.08,
      "ret6m": -15.37,
      "ret1y": -3.98,
      "ret2y": 4.32,
      "ret3y": 30.79
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4919,
      "ret1w": -0.59,
      "ret1m": -2.86,
      "ret3m": -4.06,
      "ret6m": -15.29,
      "ret1y": -3.79,
      "ret2y": 4.73,
      "ret3y": 31.84
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2728,
      "ret1w": -0.11,
      "ret1m": 0.39,
      "ret3m": -0.82,
      "ret6m": 2.84,
      "ret1y": -1.65,
      "ret2y": -1.03,
      "ret3y": 1.64
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.103,
      "ret1w": -0.34,
      "ret1m": -0.23,
      "ret3m": -0.56,
      "ret6m": -2.34,
      "ret1y": -5.17,
      "ret2y": -6.26,
      "ret3y": 4.37
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.2723,
      "ret1w": -0.42,
      "ret1m": -3.61,
      "ret3m": -7.63,
      "ret6m": -16.96,
      "ret1y": -11.88,
      "ret2y": -20.0,
      "ret3y": -6.38
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9041,
      "ret1w": 0.79,
      "ret1m": -0.52,
      "ret3m": -3.2,
      "ret6m": 2.77,
      "ret1y": -9.09,
      "ret2y": 3.92,
      "ret3y": 31.97
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.873,
      "ret1w": 1.3,
      "ret1m": -8.56,
      "ret3m": -13.31,
      "ret6m": -32.61,
      "ret1y": -6.6,
      "ret2y": 41.74,
      "ret3y": 116.67
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5459,
      "ret1w": -0.47,
      "ret1m": 1.79,
      "ret3m": 1.93,
      "ret6m": 8.23,
      "ret1y": 4.72,
      "ret2y": 3.7,
      "ret3y": 1.76
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5528,
      "ret1w": 0.53,
      "ret1m": -4.44,
      "ret3m": -9.18,
      "ret6m": -27.38,
      "ret1y": -12.93,
      "ret2y": -11.57,
      "ret3y": 12.31
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 12.274,
      "ret1w": 1.4,
      "ret1m": -9.79,
      "ret3m": -16.98,
      "ret6m": -19.89,
      "ret1y": 19.03,
      "ret2y": 79.79,
      "ret3y": 226.0
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0591,
      "ret1w": 0.0,
      "ret1m": -0.17,
      "ret3m": -0.7,
      "ret6m": -1.12,
      "ret1y": -0.64,
      "ret2y": 0.59,
      "ret3y": 3.62
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1077,
      "ret1w": 0.01,
      "ret1m": -0.15,
      "ret3m": -0.67,
      "ret6m": -1.05,
      "ret1y": -0.5,
      "ret2y": 0.85,
      "ret3y": 4.32
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0667,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.18,
      "ret6m": 0.4,
      "ret1y": 0.7,
      "ret2y": 1.66,
      "ret3y": 3.15
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1009,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.15,
      "ret6m": 0.36,
      "ret1y": 0.75,
      "ret2y": 1.57,
      "ret3y": 3.98
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1105,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.42,
      "ret1y": 0.84,
      "ret2y": 1.77,
      "ret3y": 4.4
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0775,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.12,
      "ret6m": 0.33,
      "ret1y": 0.64,
      "ret2y": 1.53,
      "ret3y": 3.14
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0923,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.15,
      "ret6m": 0.4,
      "ret1y": 0.79,
      "ret2y": 1.85,
      "ret3y": 3.79
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0394,
      "ret1w": -0.02,
      "ret1m": -1.17,
      "ret3m": -1.89,
      "ret6m": -3.46,
      "ret1y": -2.09,
      "ret2y": 2.92,
      "ret3y": 8.37
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1973,
      "ret1w": 0.09,
      "ret1m": -1.13,
      "ret3m": -1.2,
      "ret6m": -2.75,
      "ret1y": -1.87,
      "ret2y": 0.82,
      "ret3y": 3.21
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0464,
      "ret1w": -0.02,
      "ret1m": -1.16,
      "ret3m": -1.86,
      "ret6m": -3.36,
      "ret1y": -1.89,
      "ret2y": 3.33,
      "ret3y": 9.24
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0444,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.18,
      "ret6m": 0.44,
      "ret1y": 0.84,
      "ret2y": 1.82,
      "ret3y": 3.79
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.143,
      "ret1w": 0.16,
      "ret1m": -1.31,
      "ret3m": -2.27,
      "ret6m": -3.62,
      "ret1y": -4.96,
      "ret2y": -3.19,
      "ret3y": 4.69
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2034,
      "ret1w": -0.13,
      "ret1m": -0.11,
      "ret3m": -0.58,
      "ret6m": -0.85,
      "ret1y": -1.56,
      "ret2y": 1.01,
      "ret3y": 11.05
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1279,
      "ret1w": 0.03,
      "ret1m": -0.34,
      "ret3m": -0.56,
      "ret6m": -1.67,
      "ret1y": -0.03,
      "ret2y": 1.63,
      "ret3y": 8.74
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1992,
      "ret1w": 0.03,
      "ret1m": -0.32,
      "ret3m": -0.53,
      "ret6m": -1.56,
      "ret1y": 0.18,
      "ret2y": 2.05,
      "ret3y": 9.66
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.39,
      "ret1w": -3.0,
      "ret1m": -4.32,
      "ret3m": -1.08,
      "ret6m": -6.75,
      "ret1y": 28.08,
      "ret2y": 80.24,
      "ret3y": 134.31
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0397,
      "ret1w": -0.12,
      "ret1m": 1.26,
      "ret3m": 2.03,
      "ret6m": 3.77,
      "ret1y": 11.34,
      "ret2y": 8.79,
      "ret3y": 30.33
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7753,
      "ret1w": -0.44,
      "ret1m": -2.11,
      "ret3m": -1.36,
      "ret6m": -7.77,
      "ret1y": -14.09,
      "ret2y": -5.38,
      "ret3y": 21.25
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.4352,
      "ret1w": -1.84,
      "ret1m": -2.19,
      "ret3m": 2.81,
      "ret6m": 3.74,
      "ret1y": 25.02,
      "ret2y": 19.76,
      "ret3y": 72.71
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9144,
      "ret1w": 0.01,
      "ret1m": 0.25,
      "ret3m": -1.42,
      "ret6m": -2.75,
      "ret1y": -3.83,
      "ret2y": -6.62,
      "ret3y": -2.74
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6479,
      "ret1w": -2.21,
      "ret1m": -3.04,
      "ret3m": -0.67,
      "ret6m": -6.44,
      "ret1y": 19.34,
      "ret2y": 42.67,
      "ret3y": 87.55
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.575,
      "ret1w": -0.11,
      "ret1m": 0.84,
      "ret3m": -0.17,
      "ret6m": -1.44,
      "ret1y": 4.02,
      "ret2y": 6.97,
      "ret3y": 18.89
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.141,
      "ret1w": -1.3,
      "ret1m": -8.57,
      "ret3m": -0.95,
      "ret6m": -6.63,
      "ret1y": -19.93,
      "ret2y": -21.8,
      "ret3y": 68.29
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.9,
      "ret1w": -2.17,
      "ret1m": -6.35,
      "ret3m": -2.81,
      "ret6m": -9.27,
      "ret1y": -21.74,
      "ret2y": -26.17,
      "ret3y": -7.79
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8764,
      "ret1w": -1.58,
      "ret1m": -1.49,
      "ret3m": 0.28,
      "ret6m": -4.35,
      "ret1y": 28.81,
      "ret2y": 69.43,
      "ret3y": 140.88
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5943,
      "ret1w": 0.41,
      "ret1m": 3.98,
      "ret3m": -1.66,
      "ret6m": 14.25,
      "ret1y": 2.53,
      "ret2y": 30.4,
      "ret3y": 49.83
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.7225,
      "ret1w": -0.64,
      "ret1m": -0.68,
      "ret3m": -2.25,
      "ret6m": 0.95,
      "ret1y": 10.3,
      "ret2y": 23.61,
      "ret3y": 49.7
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2856,
      "ret1w": -0.4,
      "ret1m": -0.93,
      "ret3m": -2.3,
      "ret6m": -1.13,
      "ret1y": 2.26,
      "ret2y": 7.92,
      "ret3y": 27.45
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.24,
      "ret1w": 0.9,
      "ret1m": 2.14,
      "ret3m": -2.9,
      "ret6m": -6.13,
      "ret1y": -3.05,
      "ret2y": 1.14,
      "ret3y": -11.49
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.982,
      "ret1w": -0.6,
      "ret1m": 0.15,
      "ret3m": -4.85,
      "ret6m": 0.1,
      "ret1y": -14.35,
      "ret2y": -2.8,
      "ret3y": 40.38
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0141,
      "ret1w": 0.02,
      "ret1m": 0.09,
      "ret3m": 0.28,
      "ret6m": 0.57,
      "ret1y": 1.37,
      "ret2y": 2.41,
      "ret3y": 3.78
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0132,
      "ret1w": 0.02,
      "ret1m": 0.09,
      "ret3m": 0.29,
      "ret6m": 0.61,
      "ret1y": 1.38,
      "ret2y": 2.48,
      "ret3y": 3.94
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.299,
      "ret1w": -0.31,
      "ret1m": -3.2,
      "ret3m": -6.61,
      "ret6m": -13.28,
      "ret1y": -10.41,
      "ret2y": -10.04,
      "ret3y": 7.8
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.555,
      "ret1w": -0.04,
      "ret1m": -3.51,
      "ret3m": -7.76,
      "ret6m": -12.77,
      "ret1y": -10.66,
      "ret2y": -4.13,
      "ret3y": 25.12
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5719,
      "ret1w": 0.69,
      "ret1m": 0.41,
      "ret3m": -5.3,
      "ret6m": 2.87,
      "ret1y": -13.0,
      "ret2y": 2.97,
      "ret3y": 45.14
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0069,
      "ret1w": -0.18,
      "ret1m": -2.61,
      "ret3m": -5.12,
      "ret6m": -6.66,
      "ret1y": -3.94,
      "ret2y": 2.49,
      "ret3y": 18.84
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.0653,
      "ret1w": -0.18,
      "ret1m": -2.59,
      "ret3m": -5.08,
      "ret6m": -6.57,
      "ret1y": -3.75,
      "ret2y": 2.9,
      "ret3y": 19.8
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.8366,
      "ret1w": -0.1,
      "ret1m": -4.52,
      "ret3m": -6.23,
      "ret6m": -12.37,
      "ret1y": -10.05,
      "ret2y": -3.08,
      "ret3y": 29.53
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6777,
      "ret1w": -0.27,
      "ret1m": -1.79,
      "ret3m": -4.86,
      "ret6m": -8.1,
      "ret1y": -6.59,
      "ret2y": -5.27,
      "ret3y": 12.52
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5114,
      "ret1w": -0.32,
      "ret1m": -1.99,
      "ret3m": -2.66,
      "ret6m": -2.69,
      "ret1y": -8.79,
      "ret2y": 1.49,
      "ret3y": 32.17
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.738,
      "ret1w": 0.03,
      "ret1m": -4.78,
      "ret3m": -9.66,
      "ret6m": -19.63,
      "ret1y": -7.8,
      "ret2y": -4.56,
      "ret3y": 30.72
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0488,
      "ret1w": -0.54,
      "ret1m": -0.5,
      "ret3m": -3.75,
      "ret6m": -0.44,
      "ret1y": -5.79,
      "ret2y": -6.08,
      "ret3y": 7.13
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.471,
      "ret1w": 0.97,
      "ret1m": 0.59,
      "ret3m": -2.25,
      "ret6m": -0.41,
      "ret1y": -2.11,
      "ret2y": 7.71,
      "ret3y": 26.79
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.5488,
      "ret1w": -0.67,
      "ret1m": 0.6,
      "ret3m": 3.38,
      "ret6m": 1.64,
      "ret1y": 18.07,
      "ret2y": 17.39,
      "ret3y": 38.06
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.5011,
      "ret1w": -0.2,
      "ret1m": -2.94,
      "ret3m": -7.87,
      "ret6m": -12.96,
      "ret1y": -10.96,
      "ret2y": -4.01,
      "ret3y": 20.52
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0958,
      "ret1w": -0.45,
      "ret1m": -3.04,
      "ret3m": -7.49,
      "ret6m": -17.29,
      "ret1y": -5.93,
      "ret2y": -5.4,
      "ret3y": 24.75
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.098,
      "ret1w": -0.44,
      "ret1m": -3.04,
      "ret3m": -7.47,
      "ret6m": -17.24,
      "ret1y": -5.86,
      "ret2y": -5.29,
      "ret3y": 24.28
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.308,
      "ret1w": -1.47,
      "ret1m": -3.3,
      "ret3m": -4.48,
      "ret6m": -13.65,
      "ret1y": -10.62,
      "ret2y": -7.71,
      "ret3y": 16.99
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3385,
      "ret1w": -1.46,
      "ret1m": -3.29,
      "ret3m": -4.45,
      "ret6m": -13.56,
      "ret1y": -10.43,
      "ret2y": -7.34,
      "ret3y": 17.94
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.8502,
      "ret1w": -1.45,
      "ret1m": -3.69,
      "ret3m": -6.4,
      "ret6m": -23.8,
      "ret1y": -9.06,
      "ret2y": -2.89,
      "ret3y": 33.49
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1595,
      "ret1w": 0.02,
      "ret1m": -0.15,
      "ret3m": -0.2,
      "ret6m": -0.58,
      "ret1y": -0.15,
      "ret2y": 1.09,
      "ret3y": 6.84
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1797,
      "ret1w": 0.02,
      "ret1m": -0.14,
      "ret3m": -0.17,
      "ret6m": -0.51,
      "ret1y": 0.01,
      "ret2y": 1.4,
      "ret3y": 7.49
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.087,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.2,
      "ret6m": 0.47,
      "ret1y": 0.84,
      "ret2y": 1.96,
      "ret3y": 3.74
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4107,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.1,
      "ret6m": 0.09,
      "ret1y": 0.09,
      "ret2y": 0.69,
      "ret3y": 8.11
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4636,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.13,
      "ret6m": 0.19,
      "ret1y": 0.29,
      "ret2y": 1.09,
      "ret3y": 8.98
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0038,
      "ret1w": 0.57,
      "ret1m": -2.86,
      "ret3m": -5.02,
      "ret6m": -6.56,
      "ret1y": 6.35,
      "ret2y": 14.64,
      "ret3y": 44.8
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.1256,
      "ret1w": 0.63,
      "ret1m": -3.72,
      "ret3m": -7.97,
      "ret6m": -8.66,
      "ret1y": -3.94,
      "ret2y": -2.36,
      "ret3y": 27.16
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.32,
      "nav": 4.1372,
      "price": 4.1372,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.34,
      "nav": 3.5872,
      "price": 3.5872,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.59,
      "nav": 4.9772,
      "price": 4.9772,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.0,
      "nav": 0.6968,
      "price": 0.6968,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.08,
      "nav": 1.9669,
      "price": 1.9669,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.11,
      "nav": 2.6521,
      "price": 2.6521,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.07,
      "nav": 5.2113,
      "price": 5.2113,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.2,
      "nav": 1.82,
      "price": 1.82,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 1.2444,
      "price": 1.2444,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 2.943,
      "price": 2.943,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.101,
      "price": 1.101,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.16,
      "nav": 2.374,
      "price": 2.374,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.5346,
      "price": 1.5346,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.06,
      "nav": 1.8625,
      "price": 1.8625,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.19,
      "nav": 1.5626,
      "price": 1.5626,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.49,
      "nav": 1.9994,
      "price": 1.9994,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.1,
      "nav": 2.5873,
      "price": 2.5873,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 0.972,
      "price": 0.972,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.322,
      "price": 2.322,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.2664,
      "price": 1.2664,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 9.72,
      "sharpe": -0.36,
      "calmar": -0.36
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 10.1,
      "sharpe": -1.5,
      "calmar": -1.5
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 17.67,
      "sharpe": 0.44,
      "calmar": 0.44
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.06,
      "sharpe": -1.1,
      "calmar": -1.1
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 2.39,
      "sharpe": -4.56,
      "calmar": -4.56
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 3.17,
      "sharpe": -3.34,
      "calmar": -3.34
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.17,
      "sharpe": -1.31,
      "calmar": -1.31
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.09,
      "sharpe": -0.93,
      "calmar": -0.93
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 5.82,
      "sharpe": -0.95,
      "calmar": -0.95
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 10.52,
      "sharpe": 0.52,
      "calmar": 0.52
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.27,
      "sharpe": -0.63,
      "calmar": -0.63
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.89,
      "sharpe": -1.34,
      "calmar": -1.34
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 6.31,
      "sharpe": -5.51,
      "calmar": -5.51
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.77,
      "sharpe": 0.67,
      "calmar": 0.67
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 5.75,
      "sharpe": -0.78,
      "calmar": -0.78
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 14.79,
      "sharpe": -0.29,
      "calmar": -0.29
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.0,
      "sharpe": -0.29,
      "calmar": -0.29
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 10.88,
      "sharpe": -0.38,
      "calmar": -0.38
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.06,
      "sharpe": -0.6,
      "calmar": -0.6
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.44,
      "sharpe": 0.1,
      "calmar": 0.1
    }
  ],
  "news": [
    {
      "title": "2026年前三季度，中国人民银行各分支机构持续公示支付机构行政处罚信息，行业严监管态势不变。经梳理，中国人民银行各分支机构对持牌支付机构开出罚单超40张，罚没总额超3.5亿元，单笔最高罚没7445万元。监管部门严格执行“机构+直接责任人”双罚制度，在对机构进行处罚的同时，同步追究相关高管及直接责任人的责任。大额处罚突出从罚单情况来看，千万元级罚单频现。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:50",
      "impact": "neutral"
    },
    {
      "title": "伴随着中小金融机构风险化解进程，各地村镇银行整合退出仍在持续。近日，国家金融监督管理总局山东监管局公布信息显示，同意解散烟台福山珠江村镇银行股份有限公司（以下简称“烟台福山珠江村镇银行”），该行资产、负债、业务及各项权利义务由北京银行股份有限公司（以下简称“北京银行”）承接。记者据国家金融监督管理总局公开信息梳理，截至目前，年内已有179家村镇银行获批解散。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:50",
      "impact": "neutral"
    },
    {
      "title": "随着上市公司治理专项行动向纵深推进，“引导具备条件的上市公司加强业务与财务系统融合”正从监管要求转化为上市公司的治理实践。近日，上海证券报记者采访黔源电力、中伟新材等贵州区域上市公司时发现，业财融合已不再是财务部门牵头的信息化项目，而是牵动组织、流程、考核、人才与风险防控的系统工程。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:45",
      "impact": "neutral"
    },
    {
      "title": "中国人民银行10月13日公布，向威士信息技术（北京）有限公司（下称“威士公司”）下发准予行政许可决定，批准其筹备银行卡清算机构。威士公司需在一年内完成筹备工作，之后可提交开业申请，中国人民银行会同金融监管总局审批同意后，颁发银行卡清算业务许可证。威士公司是维萨公司（Visa）在我国境内成立的企业法人，为外商投资企业，于2015年成立。Visa是全球领先的数字支付公司。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:45",
      "impact": "neutral"
    },
    {
      "title": "今年以来，服务贸易保持向好态势，前8个月服务贸易规模已突破5万亿元。其中，旅行和运输服务、知识密集型服务成为拉动服务出口的重要引擎。商务部10月13日发布数据显示，1至8月，我国服务进出口总额50701.6亿元，同比增长7.9%。其中：出口19996.1亿元，同比增长14.8%；进口30705.5亿元，同比增长3.8%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:45",
      "impact": "neutral"
    },
    {
      "title": "10月12日，第二十六届中国国际工业博览会在国家会展中心（上海）拉开帷幕。开幕式上，“上海市加快发展新一代智能制造行动”正式启动。该项行动中，上海市将实施四大工程，推动人工智能（AI）与制造业深度融合。四大工程分别是实施新一代智能制造供给引领工程、实施“AI+制造”筑基创新工程、实施智能工厂梯度培育工程、实施新一代智能制造生态营造工程。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:42",
      "impact": "neutral"
    },
    {
      "title": "10月13日，中国人民银行以固定利率、数量招标方式开展了650亿元7天期逆回购操作，全额满足了一级交易商需求，操作利率维持1.4%不变。鉴于当日没有逆回购到期，中国人民银行公开市场实现净投放650亿元。“十一”假期后，中国人民银行综合运用多种工具灵活调节流动性，呈现短期资金净回笼、中长期资金净投放的结构性特征。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "■王丽新政策信号越来越清晰，居住消费的风向变了。近日，北京市人民政府印发《北京市“十五五”时期深化国际消费中心城市建设规划》（以下简称《规划》），明确提出要持续推动建设安全舒适绿色智慧的“好房子”。10月以来，山东青岛、广东顺德等地也接连落实“好房子”建造指引。随着“好房子”建设连续两年被写入政府工作报告，各地均在推进建设“好房子”工程。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "10月13日，中国物流与采购联合会和京东集团联合发布数据，2026年9月，中国电商物流指数为111.9点，环比回升0.4点。一位中国物流信息中心分析师对《证券日报》记者表示，9月，电商物流指数环比回升，供需两端协同向好，电商物流发展呈现新局面。具体来看，电商物流总业务量指数有所回升。9月，电商物流总业务量指数为129.1点，环比回升0.9点。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:41",
      "impact": "neutral"
    },
    {
      "title": "10月13日，广东省自主培育的12英寸特色晶圆制造龙头企业——粤芯半导体技术股份有限公司（301660.SZ）正式登陆深交所创业板，成为创业板首家晶圆制造企业，发行价12.01元/股，开盘涨幅达274.69%，市值突破1200亿元。作为粤港澳大湾区首家走向资本市场舞台的12英寸晶圆代工企业，粤芯半导体的上市也让广州半导体产业再次走到聚光灯之下。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:11",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 49,
    "label": "中性",
    "upDownRatio": "2,906/1,546",
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
