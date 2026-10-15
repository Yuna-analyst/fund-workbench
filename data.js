// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-10-15 14:50:29
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-10-15 14:50 · 交易中",
  "marketStatus": "open",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-10-15",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3707.48,
      "change": -59.75,
      "changePct": "-1.59%",
      "high": 3724.56,
      "low": 3674.82,
      "volume": 510163189.0,
      "amount": 774391970000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 11816.79,
      "change": -293.8,
      "changePct": "-2.43%",
      "high": 11940.01,
      "low": 11712.12,
      "volume": 551274117.0,
      "amount": 858612570000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 2783.17,
      "change": -83.59,
      "changePct": "-2.92%",
      "high": 2819.38,
      "low": 2751.2,
      "volume": 168247434.0,
      "amount": 414946760000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1359.52,
      "change": -20.74,
      "changePct": "-1.50%",
      "high": 1367.34,
      "low": 1326.24,
      "volume": 8823946.0,
      "amount": 82549800000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4166.01,
      "change": -51.67,
      "changePct": "-1.23%",
      "high": 4176.09,
      "low": 4115.07,
      "volume": 212776323.0,
      "amount": 483519690000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 6769.25,
      "change": -210.86,
      "changePct": "-3.02%",
      "high": 6870.95,
      "low": 6725.59,
      "volume": 149598855.0,
      "amount": 264577370000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "2.88万亿",
      "label": "成交额",
      "rawAmount": 2878598160000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,308/2,346",
      "label": "涨/跌家数",
      "rawUp": 1308,
      "rawDown": 2346,
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
    "totalInflow": 5.56,
    "totalOutflow": 0,
    "netFlow": 5.56,
    "netFlowTrend": [
      1.11,
      2.22,
      3.34,
      4.45,
      5.56
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
      "name": "券商",
      "inflow": 3.48,
      "pct": 0.61
    },
    {
      "name": "白酒",
      "inflow": 1.61,
      "pct": 0.72
    },
    {
      "name": "医药",
      "inflow": 1.06,
      "pct": 0.8
    },
    {
      "name": "食品",
      "inflow": 0.07,
      "pct": 0.41
    },
    {
      "name": "创新药",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -2.32
    },
    {
      "name": "家电",
      "inflow": -0.09,
      "pct": -1.61
    },
    {
      "name": "计算机",
      "inflow": -0.1,
      "pct": -2.42
    },
    {
      "name": "电子",
      "inflow": -0.22,
      "pct": -2.0
    },
    {
      "name": "农业",
      "inflow": -0.23,
      "pct": -2.82
    },
    {
      "name": "云计算",
      "inflow": -0.24,
      "pct": -3.12
    },
    {
      "name": "钢铁",
      "inflow": -0.26,
      "pct": -2.49
    },
    {
      "name": "游戏",
      "inflow": -0.33,
      "pct": -1.53
    },
    {
      "name": "新能源车",
      "inflow": -0.5,
      "pct": -1.46
    },
    {
      "name": "新能源",
      "inflow": -0.6,
      "pct": -2.5
    },
    {
      "name": "医疗",
      "inflow": -1.49,
      "pct": -0.9
    },
    {
      "name": "传媒",
      "inflow": -1.51,
      "pct": -2.3
    },
    {
      "name": "芯片",
      "inflow": -2.34,
      "pct": -1.7
    },
    {
      "name": "银行",
      "inflow": -3.06,
      "pct": -0.23
    },
    {
      "name": "半导体",
      "inflow": -4.11,
      "pct": -2.1
    }
  ],
  "sectors": [
    {
      "name": "医药",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.8,
      "change": 0.003,
      "turnover": 3.54
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.417,
      "changePct": 0.72,
      "change": 0.003,
      "turnover": 5.37
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.497,
      "changePct": 0.61,
      "change": 0.003,
      "turnover": 11.59
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.494,
      "changePct": 0.41,
      "change": 0.002,
      "turnover": 0.24
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.81,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 6.0
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.863,
      "changePct": -0.23,
      "change": -0.002,
      "turnover": 10.19
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.329,
      "changePct": -0.9,
      "change": -0.003,
      "turnover": 4.98
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.348,
      "changePct": -1.46,
      "change": -0.02,
      "turnover": 1.66
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.033,
      "changePct": -1.53,
      "change": -0.016,
      "turnover": 1.09
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.342,
      "changePct": -1.61,
      "change": -0.022,
      "turnover": 0.3
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 0.923,
      "changePct": -1.7,
      "change": -0.016,
      "turnover": 7.79
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.685,
      "changePct": -2.0,
      "change": -0.014,
      "turnover": 0.72
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.84,
      "changePct": -2.1,
      "change": -0.018,
      "turnover": 13.71
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.807,
      "changePct": -2.3,
      "change": -0.019,
      "turnover": 5.05
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 0.969,
      "changePct": -2.32,
      "change": -0.023,
      "turnover": 0.07
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.006,
      "changePct": -2.42,
      "change": -0.025,
      "turnover": 0.32
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.095,
      "changePct": -2.49,
      "change": -0.028,
      "turnover": 0.87
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.07,
      "changePct": -2.5,
      "change": -0.053,
      "turnover": 2.0
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.689,
      "changePct": -2.82,
      "change": -0.02,
      "turnover": 0.76
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.428,
      "changePct": -3.12,
      "change": -0.046,
      "turnover": 0.8
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.714,
      "changePct": -3.25,
      "change": -0.024,
      "turnover": 1.87
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.178,
      "changePct": -3.28,
      "change": -0.04,
      "turnover": 2.62
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.513,
      "changePct": -3.63,
      "change": -0.057,
      "turnover": 6.04
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.842,
      "changePct": -3.77,
      "change": -0.033,
      "turnover": 1.72
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.031,
      "changePct": -4.0,
      "change": -0.043,
      "turnover": 3.33
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.811,
      "changePct": -4.02,
      "change": -0.034,
      "turnover": 9.77
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.25,
      "changePct": -4.07,
      "change": -0.053,
      "turnover": 11.07
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.521,
      "changePct": -4.93,
      "change": -0.027,
      "turnover": 31.23
    }
  ],
  "etfFlow": [
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.497,
      "changePct": 0.61,
      "amount": 11.59,
      "netFlow": 2.9
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.377,
      "changePct": 0.8,
      "amount": 3.54,
      "netFlow": 0.89
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.07,
      "changePct": -2.5,
      "amount": 2.0,
      "netFlow": -0.5
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.424,
      "changePct": -1.29,
      "amount": 9.94,
      "netFlow": -2.48
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.84,
      "changePct": -2.1,
      "amount": 13.71,
      "netFlow": -3.43
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.875,
      "changePct": -0.59,
      "amount": 24.66,
      "netFlow": -6.17
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 6.802,
      "changePct": -3.17,
      "amount": 31.59,
      "netFlow": -7.9
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.242,
      "changePct": -1.21,
      "amount": 66.65,
      "netFlow": -16.66
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.438,
      "changePct": -1.37,
      "amount": 140.46,
      "netFlow": -35.11
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.113,
      "changePct": -1.37,
      "amount": 194.13,
      "netFlow": -48.53
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.242,
      "changePct": -1.21,
      "amount": 66.65,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.875,
      "changePct": -0.59,
      "amount": 24.66,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 6.802,
      "changePct": -3.17,
      "amount": 31.59,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.424,
      "changePct": -1.29,
      "amount": 9.94,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.113,
      "changePct": -1.37,
      "amount": 194.13,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "医药",
      "turnover": 3.54,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 5.37,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 11.59,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "食品",
      "turnover": 0.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "创新药",
      "turnover": 6.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 10.19,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "医疗",
      "turnover": 4.98,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.66,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "家电",
      "turnover": 0.3,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "芯片",
      "turnover": 7.79,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.72,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 13.71,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "传媒",
      "turnover": 5.05,
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
      "name": "计算机",
      "turnover": 0.32,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 0.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 2.0,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.76,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 0.8,
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
      "nav": 3.8385,
      "ret1w": -4.54,
      "ret1m": -9.58,
      "ret3m": -14.05,
      "ret6m": -18.87,
      "ret1y": -12.23,
      "ret2y": -1.93,
      "ret3y": 97.66
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.3694,
      "ret1w": -2.92,
      "ret1m": -9.48,
      "ret3m": -16.53,
      "ret6m": -27.82,
      "ret1y": -23.36,
      "ret2y": -15.07,
      "ret3y": 21.66
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.5213,
      "ret1w": -4.72,
      "ret1m": -11.53,
      "ret3m": -20.2,
      "ret6m": -23.15,
      "ret1y": -3.01,
      "ret2y": 46.87,
      "ret3y": 145.06
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.6991,
      "ret1w": 0.06,
      "ret1m": 1.14,
      "ret3m": 0.17,
      "ret6m": 1.51,
      "ret1y": -6.49,
      "ret2y": -15.69,
      "ret3y": -6.34
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 1.8889,
      "ret1w": -2.17,
      "ret1m": -4.13,
      "ret3m": -3.49,
      "ret6m": -9.95,
      "ret1y": -32.1,
      "ret2y": -36.75,
      "ret3y": -16.43
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.5144,
      "ret1w": -3.14,
      "ret1m": -6.15,
      "ret3m": -6.19,
      "ret6m": -4.07,
      "ret1y": -27.61,
      "ret2y": -28.24,
      "ret3y": 6.37
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.1465,
      "ret1w": -0.64,
      "ret1m": -2.1,
      "ret3m": -4.08,
      "ret6m": -3.17,
      "ret1y": -9.88,
      "ret2y": -0.09,
      "ret3y": 28.44
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.736,
      "ret1w": -3.39,
      "ret1m": -7.12,
      "ret3m": -7.02,
      "ret6m": -11.61,
      "ret1y": -13.33,
      "ret2y": -7.51,
      "ret3y": 41.14
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.1874,
      "ret1w": -2.87,
      "ret1m": -6.97,
      "ret3m": -9.28,
      "ret6m": -15.35,
      "ret1y": -14.08,
      "ret2y": -6.25,
      "ret3y": 13.48
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 2.801,
      "ret1w": -2.71,
      "ret1m": -8.82,
      "ret3m": -14.91,
      "ret6m": -27.3,
      "ret1y": -1.13,
      "ret2y": 37.37,
      "ret3y": 148.98
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.105,
      "ret1w": 0.0,
      "ret1m": 0.27,
      "ret3m": 1.66,
      "ret6m": 3.95,
      "ret1y": -3.32,
      "ret2y": -15.52,
      "ret3y": -11.81
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.279,
      "ret1w": -2.4,
      "ret1m": -4.76,
      "ret3m": -0.31,
      "ret6m": -2.73,
      "ret1y": -15.94,
      "ret2y": -12.68,
      "ret3y": 14.58
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.4695,
      "ret1w": -0.85,
      "ret1m": -4.91,
      "ret3m": -12.0,
      "ret6m": -30.92,
      "ret1y": -51.7,
      "ret2y": -45.35,
      "ret3y": -15.09
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.8604,
      "ret1w": 0.13,
      "ret1m": -0.6,
      "ret3m": -2.15,
      "ret6m": -1.99,
      "ret1y": 3.1,
      "ret2y": -5.11,
      "ret3y": -5.12
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.4897,
      "ret1w": -2.98,
      "ret1m": -6.56,
      "ret3m": -8.47,
      "ret6m": -11.18,
      "ret1y": -11.88,
      "ret2y": -3.09,
      "ret3y": 36.92
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 1.8603,
      "ret1w": -4.32,
      "ret1m": -10.49,
      "ret3m": -19.31,
      "ret6m": -36.6,
      "ret1y": -11.79,
      "ret2y": 46.45,
      "ret3y": 105.81
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5261,
      "ret1w": -2.09,
      "ret1m": -4.44,
      "ret3m": 0.0,
      "ret6m": 3.24,
      "ret1y": -5.39,
      "ret2y": -6.69,
      "ret3y": 2.94
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.947,
      "ret1w": -0.53,
      "ret1m": -6.24,
      "ret3m": -4.63,
      "ret6m": -17.22,
      "ret1y": -9.12,
      "ret2y": -15.75,
      "ret3y": -13.44
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3285,
      "ret1w": -0.3,
      "ret1m": 1.35,
      "ret3m": 1.32,
      "ret6m": 2.36,
      "ret1y": -4.46,
      "ret2y": 2.54,
      "ret3y": 4.03
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2235,
      "ret1w": -2.07,
      "ret1m": -4.26,
      "ret3m": -6.03,
      "ret6m": -4.38,
      "ret1y": -3.56,
      "ret2y": 4.95,
      "ret3y": 51.36
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.0669,
      "ret1w": -2.69,
      "ret1m": -7.72,
      "ret3m": -13.9,
      "ret6m": -21.53,
      "ret1y": -19.11,
      "ret2y": -7.44,
      "ret3y": 17.55
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.1355,
      "ret1w": -2.68,
      "ret1m": -7.71,
      "ret3m": -13.87,
      "ret6m": -21.45,
      "ret1y": -18.95,
      "ret2y": -7.07,
      "ret3y": 18.49
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0557,
      "ret1w": -0.39,
      "ret1m": -0.91,
      "ret3m": -2.0,
      "ret6m": -4.76,
      "ret1y": -2.71,
      "ret2y": -1.44,
      "ret3y": 3.95
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0303,
      "ret1w": -0.39,
      "ret1m": -0.9,
      "ret3m": -1.95,
      "ret6m": -4.62,
      "ret1y": -2.42,
      "ret2y": -0.85,
      "ret3y": 5.21
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.6914,
      "ret1w": -1.0,
      "ret1m": -0.58,
      "ret3m": -1.34,
      "ret6m": -5.52,
      "ret1y": -12.56,
      "ret2y": -15.41,
      "ret3y": -3.88
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7093,
      "ret1w": -1.0,
      "ret1m": -0.57,
      "ret3m": -1.31,
      "ret6m": -5.4,
      "ret1y": -12.33,
      "ret2y": -14.99,
      "ret3y": -2.92
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.3891,
      "ret1w": -2.57,
      "ret1m": -7.28,
      "ret3m": -14.85,
      "ret6m": -24.93,
      "ret1y": 3.31,
      "ret2y": 34.59,
      "ret3y": 108.44
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.2923,
      "ret1w": -1.94,
      "ret1m": -4.82,
      "ret3m": -4.89,
      "ret6m": -13.22,
      "ret1y": -6.29,
      "ret2y": 4.15,
      "ret3y": 53.2
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.6823,
      "ret1w": -1.64,
      "ret1m": -2.63,
      "ret3m": -3.32,
      "ret6m": -11.85,
      "ret1y": -22.7,
      "ret2y": -16.3,
      "ret3y": -1.71
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.8087,
      "ret1w": -2.12,
      "ret1m": -5.13,
      "ret3m": -3.93,
      "ret6m": -18.0,
      "ret1y": 5.05,
      "ret2y": 20.03,
      "ret3y": 92.29
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.4705,
      "ret1w": -1.36,
      "ret1m": -4.47,
      "ret3m": -5.84,
      "ret6m": -16.64,
      "ret1y": -6.96,
      "ret2y": 2.8,
      "ret3y": 28.06
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.4797,
      "ret1w": -1.38,
      "ret1m": -4.46,
      "ret3m": -5.81,
      "ret6m": -16.56,
      "ret1y": -6.78,
      "ret2y": 3.21,
      "ret3y": 29.09
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2651,
      "ret1w": -0.77,
      "ret1m": -0.58,
      "ret3m": -0.89,
      "ret6m": 0.29,
      "ret1y": -2.25,
      "ret2y": -1.63,
      "ret3y": 0.76
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.0973,
      "ret1w": -0.27,
      "ret1m": -0.19,
      "ret3m": -0.74,
      "ret6m": -4.38,
      "ret1y": -6.12,
      "ret2y": -6.77,
      "ret3y": 3.7
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.2164,
      "ret1w": -1.98,
      "ret1m": -6.75,
      "ret3m": -11.11,
      "ret6m": -22.83,
      "ret1y": -16.51,
      "ret2y": -23.69,
      "ret3y": -10.57
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.8672,
      "ret1w": -1.59,
      "ret1m": -1.55,
      "ret3m": -3.31,
      "ret6m": -0.6,
      "ret1y": -10.3,
      "ret2y": 2.29,
      "ret3y": 31.52
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 2.683,
      "ret1w": -3.18,
      "ret1m": -9.17,
      "ret3m": -17.95,
      "ret6m": -39.38,
      "ret1y": -14.45,
      "ret2y": 36.82,
      "ret3y": 104.34
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5366,
      "ret1w": -1.08,
      "ret1m": 0.16,
      "ret3m": 1.45,
      "ret6m": 5.47,
      "ret1y": 2.47,
      "ret2y": 1.77,
      "ret3y": 1.9
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5193,
      "ret1w": -3.96,
      "ret1m": -10.73,
      "ret3m": -13.71,
      "ret6m": -26.75,
      "ret1y": -22.37,
      "ret2y": -15.57,
      "ret3y": 1.19
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 11.628,
      "ret1w": -3.31,
      "ret1m": -11.09,
      "ret3m": -21.3,
      "ret6m": -28.11,
      "ret1y": 12.0,
      "ret2y": 72.22,
      "ret3y": 199.54
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0562,
      "ret1w": -0.18,
      "ret1m": -0.39,
      "ret3m": -0.77,
      "ret6m": -1.89,
      "ret1y": -1.02,
      "ret2y": 0.23,
      "ret3y": 3.22
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1046,
      "ret1w": -0.18,
      "ret1m": -0.39,
      "ret3m": -0.75,
      "ret6m": -1.82,
      "ret1y": -0.91,
      "ret2y": 0.46,
      "ret3y": 3.9
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0669,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.18,
      "ret6m": 0.42,
      "ret1y": 0.7,
      "ret2y": 1.69,
      "ret3y": 3.02
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.1011,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.16,
      "ret6m": 0.38,
      "ret1y": 0.75,
      "ret2y": 1.58,
      "ret3y": 3.91
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1108,
      "ret1w": 0.01,
      "ret1m": 0.07,
      "ret3m": 0.18,
      "ret6m": 0.43,
      "ret1y": 0.85,
      "ret2y": 1.79,
      "ret3y": 4.33
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0776,
      "ret1w": 0.0,
      "ret1m": 0.06,
      "ret3m": 0.11,
      "ret6m": 0.34,
      "ret1y": 0.64,
      "ret2y": 1.54,
      "ret3y": 2.98
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0925,
      "ret1w": 0.01,
      "ret1m": 0.06,
      "ret3m": 0.15,
      "ret6m": 0.41,
      "ret1y": 0.8,
      "ret2y": 1.86,
      "ret3y": 3.64
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0255,
      "ret1w": -0.91,
      "ret1m": -1.79,
      "ret3m": -2.88,
      "ret6m": -5.44,
      "ret1y": -3.77,
      "ret2y": 1.58,
      "ret3y": 6.8
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1795,
      "ret1w": -0.98,
      "ret1m": -1.88,
      "ret3m": -2.45,
      "ret6m": -4.73,
      "ret1y": -3.74,
      "ret2y": -0.96,
      "ret3y": 1.6
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0325,
      "ret1w": -0.9,
      "ret1m": -1.78,
      "ret3m": -2.84,
      "ret6m": -5.34,
      "ret1y": -3.57,
      "ret2y": 1.99,
      "ret3y": 7.66
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0446,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.18,
      "ret6m": 0.45,
      "ret1y": 0.84,
      "ret2y": 1.83,
      "ret3y": 3.68
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1297,
      "ret1w": -0.69,
      "ret1m": -1.55,
      "ret3m": -3.1,
      "ret6m": -5.09,
      "ret1y": -6.25,
      "ret2y": -4.12,
      "ret3y": 3.23
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.198,
      "ret1w": -0.24,
      "ret1m": -0.52,
      "ret3m": -0.93,
      "ret6m": -1.73,
      "ret1y": -2.04,
      "ret2y": 0.7,
      "ret3y": 10.31
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1222,
      "ret1w": -0.32,
      "ret1m": -0.64,
      "ret3m": -1.12,
      "ret6m": -2.25,
      "ret1y": -0.71,
      "ret2y": 1.27,
      "ret3y": 7.93
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.1932,
      "ret1w": -0.31,
      "ret1m": -0.62,
      "ret3m": -1.08,
      "ret6m": -2.15,
      "ret1y": -0.5,
      "ret2y": 1.69,
      "ret3y": 8.84
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.249,
      "ret1w": -3.52,
      "ret1m": -9.97,
      "ret3m": -2.0,
      "ret6m": -9.09,
      "ret1y": 16.35,
      "ret2y": 67.46,
      "ret3y": 117.5
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 3.0051,
      "ret1w": -1.0,
      "ret1m": 0.1,
      "ret3m": 1.33,
      "ret6m": 2.65,
      "ret1y": 8.25,
      "ret2y": 9.82,
      "ret3y": 29.09
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.7559,
      "ret1w": -0.59,
      "ret1m": -3.18,
      "ret3m": -2.53,
      "ret6m": -8.17,
      "ret1y": -15.21,
      "ret2y": -3.35,
      "ret3y": 22.05
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3547,
      "ret1w": -2.52,
      "ret1m": -5.42,
      "ret3m": -0.22,
      "ret6m": 1.71,
      "ret1y": 15.26,
      "ret2y": 14.26,
      "ret3y": 64.7
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9151,
      "ret1w": 0.0,
      "ret1m": 0.33,
      "ret3m": -1.2,
      "ret6m": -2.6,
      "ret1y": -3.98,
      "ret2y": -6.56,
      "ret3y": -2.68
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.5409,
      "ret1w": -3.09,
      "ret1m": -6.95,
      "ret3m": -0.95,
      "ret6m": -8.89,
      "ret1y": 10.3,
      "ret2y": 34.84,
      "ret3y": 78.82
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.519,
      "ret1w": -0.92,
      "ret1m": -0.4,
      "ret3m": -0.92,
      "ret6m": -1.93,
      "ret1y": 1.12,
      "ret2y": 4.95,
      "ret3y": 16.8
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.104,
      "ret1w": -2.21,
      "ret1m": -11.54,
      "ret3m": -7.07,
      "ret6m": -8.76,
      "ret1y": -22.31,
      "ret2y": -20.35,
      "ret3y": 68.29
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.852,
      "ret1w": -2.18,
      "ret1m": -11.34,
      "ret3m": -8.49,
      "ret6m": -11.89,
      "ret1y": -25.78,
      "ret2y": -27.74,
      "ret3y": -12.44
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7461,
      "ret1w": -1.45,
      "ret1m": -5.95,
      "ret3m": -1.62,
      "ret6m": -4.68,
      "ret1y": 19.71,
      "ret2y": 64.28,
      "ret3y": 130.67
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5863,
      "ret1w": -1.13,
      "ret1m": 3.46,
      "ret3m": -0.87,
      "ret6m": 11.49,
      "ret1y": 2.36,
      "ret2y": 28.34,
      "ret3y": 49.06
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6858,
      "ret1w": -0.55,
      "ret1m": -2.8,
      "ret3m": -2.89,
      "ret6m": 0.72,
      "ret1y": 6.82,
      "ret2y": 22.5,
      "ret3y": 46.03
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2548,
      "ret1w": -0.48,
      "ret1m": -3.31,
      "ret3m": -3.57,
      "ret6m": -1.95,
      "ret1y": -0.25,
      "ret2y": 8.19,
      "ret3y": 24.71
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.227,
      "ret1w": -0.73,
      "ret1m": 1.07,
      "ret3m": -3.23,
      "ret6m": -7.4,
      "ret1y": -5.03,
      "ret2y": -1.05,
      "ret3y": -12.94
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.948,
      "ret1w": -1.57,
      "ret1m": -1.57,
      "ret3m": -4.93,
      "ret6m": -0.71,
      "ret1y": -16.68,
      "ret2y": -7.15,
      "ret3y": 38.26
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0147,
      "ret1w": 0.0,
      "ret1m": 0.17,
      "ret3m": 0.3,
      "ret6m": 0.61,
      "ret1y": 1.36,
      "ret2y": 2.49,
      "ret3y": 3.78
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.0138,
      "ret1w": 0.0,
      "ret1m": 0.17,
      "ret3m": 0.32,
      "ret6m": 0.65,
      "ret1y": 1.37,
      "ret2y": 2.56,
      "ret3y": 3.94
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.259,
      "ret1w": -1.33,
      "ret1m": -4.69,
      "ret3m": -8.1,
      "ret6m": -17.33,
      "ret1y": -13.89,
      "ret2y": -12.57,
      "ret3y": 5.44
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.448,
      "ret1w": -2.31,
      "ret1m": -5.85,
      "ret3m": -10.2,
      "ret6m": -18.18,
      "ret1y": -14.97,
      "ret2y": -7.2,
      "ret3y": 19.59
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5174,
      "ret1w": -2.59,
      "ret1m": -2.76,
      "ret3m": -7.63,
      "ret6m": -4.13,
      "ret1y": -15.99,
      "ret2y": 0.9,
      "ret3y": 41.68
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 1.9455,
      "ret1w": -1.74,
      "ret1m": -4.44,
      "ret3m": -7.01,
      "ret6m": -11.49,
      "ret1y": -7.76,
      "ret2y": -1.41,
      "ret3y": 15.79
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.0021,
      "ret1w": -1.75,
      "ret1m": -4.43,
      "ret3m": -6.98,
      "ret6m": -11.4,
      "ret1y": -7.58,
      "ret2y": -1.02,
      "ret3y": 16.72
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.8109,
      "ret1w": -1.4,
      "ret1m": -5.86,
      "ret3m": -7.42,
      "ret6m": -14.98,
      "ret1y": -12.57,
      "ret2y": -2.15,
      "ret3y": 24.74
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.6562,
      "ret1w": -1.28,
      "ret1m": -3.05,
      "ret3m": -5.48,
      "ret6m": -11.1,
      "ret1y": -8.8,
      "ret2y": -5.37,
      "ret3y": 9.13
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.4615,
      "ret1w": -2.6,
      "ret1m": -4.08,
      "ret3m": -5.69,
      "ret6m": -7.1,
      "ret1y": -12.04,
      "ret2y": -1.62,
      "ret3y": 27.81
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.661,
      "ret1w": -1.88,
      "ret1m": -6.74,
      "ret3m": -12.14,
      "ret6m": -24.41,
      "ret1y": -12.73,
      "ret2y": -7.59,
      "ret3y": 25.64
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.0265,
      "ret1w": -0.33,
      "ret1m": -1.0,
      "ret3m": -3.69,
      "ret6m": -3.96,
      "ret1y": -7.91,
      "ret2y": -7.65,
      "ret3y": 6.93
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.4802,
      "ret1w": 0.93,
      "ret1m": 1.22,
      "ret3m": -2.07,
      "ret6m": 0.4,
      "ret1y": -1.93,
      "ret2y": 8.08,
      "ret3y": 27.08
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4726,
      "ret1w": -1.9,
      "ret1m": -1.56,
      "ret3m": 2.06,
      "ret6m": 0.12,
      "ret1y": 12.62,
      "ret2y": 13.49,
      "ret3y": 34.04
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.4109,
      "ret1w": -1.72,
      "ret1m": -4.95,
      "ret3m": -9.31,
      "ret6m": -18.34,
      "ret1y": -14.79,
      "ret2y": -7.28,
      "ret3y": 17.12
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.0748,
      "ret1w": 0.22,
      "ret1m": -4.9,
      "ret3m": -7.5,
      "ret6m": -13.41,
      "ret1y": -8.73,
      "ret2y": -4.39,
      "ret3y": 24.07
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.0769,
      "ret1w": 0.21,
      "ret1m": -4.9,
      "ret3m": -7.49,
      "ret6m": -13.37,
      "ret1y": -8.66,
      "ret2y": -4.31,
      "ret3y": 23.64
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.2879,
      "ret1w": -1.41,
      "ret1m": -4.79,
      "ret3m": -5.73,
      "ret6m": -14.0,
      "ret1y": -13.04,
      "ret2y": -6.04,
      "ret3y": 13.44
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.318,
      "ret1w": -1.4,
      "ret1m": -4.78,
      "ret3m": -5.7,
      "ret6m": -13.91,
      "ret1y": -12.87,
      "ret2y": -5.65,
      "ret3y": 14.36
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.8349,
      "ret1w": -1.2,
      "ret1m": -4.49,
      "ret3m": -6.49,
      "ret6m": -23.18,
      "ret1y": -10.87,
      "ret2y": -1.33,
      "ret3y": 30.05
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1553,
      "ret1w": -0.23,
      "ret1m": -0.38,
      "ret3m": -0.58,
      "ret6m": -0.99,
      "ret1y": -0.67,
      "ret2y": 0.81,
      "ret3y": 5.85
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1754,
      "ret1w": -0.24,
      "ret1m": -0.37,
      "ret3m": -0.56,
      "ret6m": -0.92,
      "ret1y": -0.52,
      "ret2y": 1.11,
      "ret3y": 6.5
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0873,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.21,
      "ret6m": 0.5,
      "ret1y": 0.84,
      "ret2y": 2.0,
      "ret3y": 3.61
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4111,
      "ret1w": 0.0,
      "ret1m": 0.09,
      "ret3m": 0.11,
      "ret6m": 0.06,
      "ret1y": 0.1,
      "ret2y": 0.71,
      "ret3y": 7.26
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4641,
      "ret1w": 0.01,
      "ret1m": 0.1,
      "ret3m": 0.14,
      "ret6m": 0.16,
      "ret1y": 0.3,
      "ret2y": 1.12,
      "ret3y": 8.12
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 1.9481,
      "ret1w": -1.6,
      "ret1m": -4.0,
      "ret3m": -7.73,
      "ret6m": -9.53,
      "ret1y": 2.85,
      "ret2y": 12.25,
      "ret3y": 40.29
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.075,
      "ret1w": -2.71,
      "ret1m": -6.29,
      "ret3m": -11.86,
      "ret6m": -14.29,
      "ret1y": -9.03,
      "ret2y": -5.97,
      "ret3y": 20.52
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 4.0211
      },
      {
        "date": "2026-10-15",
        "nav": 3.8385
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 3.4707
      },
      {
        "date": "2026-10-15",
        "nav": 3.3694
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 4.7455
      },
      {
        "date": "2026-10-15",
        "nav": 4.5213
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.6987
      },
      {
        "date": "2026-10-15",
        "nav": 0.6991
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.9307
      },
      {
        "date": "2026-10-15",
        "nav": 1.8889
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.596
      },
      {
        "date": "2026-10-15",
        "nav": 2.5144
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 5.1798
      },
      {
        "date": "2026-10-15",
        "nav": 5.1465
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.797
      },
      {
        "date": "2026-10-15",
        "nav": 1.736
      }
    ],
    "519965": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.2225
      },
      {
        "date": "2026-10-15",
        "nav": 1.1874
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.879
      },
      {
        "date": "2026-10-15",
        "nav": 2.801
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.105
      },
      {
        "date": "2026-10-15",
        "nav": 1.105
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.335
      },
      {
        "date": "2026-10-15",
        "nav": 2.279
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.4821
      },
      {
        "date": "2026-10-15",
        "nav": 1.4695
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.8579
      },
      {
        "date": "2026-10-15",
        "nav": 1.8604
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.5354
      },
      {
        "date": "2026-10-15",
        "nav": 1.4897
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.9443
      },
      {
        "date": "2026-10-15",
        "nav": 1.8603
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.5801
      },
      {
        "date": "2026-10-15",
        "nav": 2.5261
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.952
      },
      {
        "date": "2026-10-15",
        "nav": 0.947
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.3354
      },
      {
        "date": "2026-10-15",
        "nav": 2.3285
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.2494
      },
      {
        "date": "2026-10-15",
        "nav": 1.2235
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.0964
      },
      {
        "date": "2026-10-15",
        "nav": 1.0669
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.1668
      },
      {
        "date": "2026-10-15",
        "nav": 1.1355
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.0598
      },
      {
        "date": "2026-10-15",
        "nav": 1.0557
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.0343
      },
      {
        "date": "2026-10-15",
        "nav": 1.0303
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.6984
      },
      {
        "date": "2026-10-15",
        "nav": 0.6914
      }
    ],
    "970067": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.7165
      },
      {
        "date": "2026-10-15",
        "nav": 0.7093
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.4522
      },
      {
        "date": "2026-10-15",
        "nav": 2.3891
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.3376
      },
      {
        "date": "2026-10-15",
        "nav": 2.2923
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.6937
      },
      {
        "date": "2026-10-15",
        "nav": 0.6823
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 3.8911
      },
      {
        "date": "2026-10-15",
        "nav": 3.8087
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.477
      },
      {
        "date": "2026-10-15",
        "nav": 0.4705
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.4864
      },
      {
        "date": "2026-10-15",
        "nav": 0.4797
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.2749
      },
      {
        "date": "2026-10-15",
        "nav": 1.2651
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.1003
      },
      {
        "date": "2026-10-15",
        "nav": 1.0973
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.241
      },
      {
        "date": "2026-10-15",
        "nav": 1.2164
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.9136
      },
      {
        "date": "2026-10-15",
        "nav": 2.8672
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 2.771
      },
      {
        "date": "2026-10-15",
        "nav": 2.683
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 1.5534
      },
      {
        "date": "2026-10-15",
        "nav": 1.5366
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 0.5407
      },
      {
        "date": "2026-10-15",
        "nav": 0.5193
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-10-14",
        "nav": 12.026
      },
      {
        "date": "2026-10-15",
        "nav": 11.628
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.48,
      "nav": 3.8385,
      "price": 3.8385,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.47,
      "nav": 3.3694,
      "price": 3.3694,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.58,
      "nav": 4.5213,
      "price": 4.5213,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.06,
      "nav": 0.6991,
      "price": 0.6991,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.8889,
      "price": 1.8889,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.31,
      "nav": 2.5144,
      "price": 2.5144,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 5.1465,
      "price": 5.1465,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.36,
      "nav": 1.736,
      "price": 1.736,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.35,
      "nav": 1.1874,
      "price": 1.1874,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.44,
      "nav": 2.801,
      "price": 2.801,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.01,
      "nav": 1.105,
      "price": 1.105,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": 0.24,
      "nav": 2.279,
      "price": 2.279,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 0.25,
      "nav": 1.4695,
      "price": 1.4695,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": 0.03,
      "nav": 1.8604,
      "price": 1.8604,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.33,
      "nav": 1.4897,
      "price": 1.4897,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.52,
      "nav": 1.8603,
      "price": 1.8603,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": 0.22,
      "nav": 2.5261,
      "price": 2.5261,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.31,
      "nav": 0.947,
      "price": 0.947,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 2.3285,
      "price": 2.3285,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.21,
      "nav": 1.2235,
      "price": 1.2235,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 14.37,
      "sharpe": -0.84,
      "calmar": -0.84
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 14.22,
      "sharpe": -1.61,
      "calmar": -1.61
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 17.29,
      "sharpe": -0.18,
      "calmar": -0.18
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 1.71,
      "sharpe": -1.06,
      "calmar": -1.06
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 6.2,
      "sharpe": -3.52,
      "calmar": -3.52
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 9.23,
      "sharpe": -2.48,
      "calmar": -2.48
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.15,
      "sharpe": -1.39,
      "calmar": -1.39
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 10.68,
      "sharpe": -1.1,
      "calmar": -1.1
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 10.46,
      "sharpe": -1.18,
      "calmar": -1.18
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 13.23,
      "sharpe": -0.08,
      "calmar": -0.08
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 0.41,
      "sharpe": -0.63,
      "calmar": -0.63
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 7.14,
      "sharpe": -1.63,
      "calmar": -1.63
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 7.37,
      "sharpe": -5.22,
      "calmar": -5.22
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 0.9,
      "sharpe": 0.55,
      "calmar": 0.55
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 9.84,
      "sharpe": -1.03,
      "calmar": -1.03
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 15.73,
      "sharpe": -0.76,
      "calmar": -0.76
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 6.66,
      "sharpe": -0.57,
      "calmar": -0.57
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 9.36,
      "sharpe": -0.81,
      "calmar": -0.81
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 2.03,
      "sharpe": -0.7,
      "calmar": -0.7
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 6.39,
      "sharpe": -0.38,
      "calmar": -0.38
    }
  ],
  "news": [
    {
      "title": "记者获悉，中证协已起草形成《关于进一步深化证券行业文化建设工作的意见》，正向券商征意中。新规拟提出建立资源倾斜与配置机制，推动资金、人力、科技投入等资源向主营业务、功能性业务、国家政策支持领域集中。新规明确在内控审查、新业务准入环节推行\"功能性优先\"审查，明晰新业务、新产品合规边界，对明显偏离主业、不符合实体经济需求的业务从严管控；在业务条线考核中增设功能性贡献、社会价值相关指标，对精准赋能实体经济的业务实施激励。文件同时强调须正确认识功能性与营利性的关系，坚持深耕主业、久久为功。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:14",
      "impact": "neutral"
    },
    {
      "title": "记者今天（15日）从中国机械工业联合会了解到，今年以来，我国清洁能源关键装备自主化水平持续提升，产业规模全球领先，产业整体实力实现历史性跃升。截至8月底，全国累计发电装机容量达到41.03亿千瓦，同比增长11.1%。中国机械工业联合会负责人表示，今年以来，我国清洁能源装备产业实现跨越式发展，上半年，核电机组、水电机组、风电机组产量同比分别增长92.0%、51.9%、11.5%。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:12",
      "impact": "neutral"
    },
    {
      "title": "中新网海口10月15日电(张昊宇李博雅)海南自贸港封关后，在加工增值政策赋能下，海南黄金珠宝产业加速发展。海口海关15日披露，自2025年12月18日海南全岛封关运作以来截至今年9月底，海口海关已累计监管珍珠加工增值内销成品货值1.2亿元。黄金珠宝产业是海南重点发展的特色产业之一，加工增值免关税政策全岛铺开后，有力推动产业转型升级。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:08",
      "impact": "neutral"
    },
    {
      "title": "根据中国疾控中心今天（15日）发布的全国急性呼吸道传染病哨点监测情况，10月5日至10月11日，当前，全国大部分地区呼吸道传染病处于低水平，流感活动有所波动，主要为A（H3N2）亚型和B（Victoria）系流感病毒。另外，南北方省份流感活动水平差异显著，南方省份检测阳性率处于中流行水平波动，北方省份处于低流行水平。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:08",
      "impact": "neutral"
    },
    {
      "title": "中国汽车工业协会日前发布的最新数据显示，今年我国汽车出口有望突破1000万辆，出口规模持续扩大的同时，新能源汽车正成为拉动中国汽车出口增长的重要力量。中国汽车工业协会的最新数据显示，1至9月份，我国汽车出口820.5万辆，同比增长65.8%，预计今年汽车出口将突破1000万辆。记者注意到，今年以来，中国多家自主汽车品牌出口保持较快增长。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:06",
      "impact": "neutral"
    },
    {
      "title": "2026年10月15日，二十国集团（G20）在泰国曼谷召开今年第三次G20财长和央行行长会议。会议讨论了全球经济形势与展望、金融部门改革等议题。中国人民银行行长潘功胜出席会议并发言，中国人民银行副行长宣昌能参加会议。潘功胜指出，地缘政治冲突加剧仍是全球经济的最大不确定性。一些国家国债市场大幅波动、人工智能相关资产估值回调风险加剧了金融脆弱性。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:02",
      "impact": "neutral"
    },
    {
      "title": "临近电商双11活动旺季，行业“反内卷”政策持续推进，南都记者获悉，多地迎来新一轮快递涨价潮。据报道，为应对成本持续上涨影响，9月，江苏、安徽、河南多地的加盟制快递网点发布调价通知。其中，河南地区的小件出港快件上调0.2-0.3元/票；安徽地区的快递服务费单票最低上调0.15元/票；江苏地区调整幅度不低于0.1元/票。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:02",
      "impact": "neutral"
    },
    {
      "title": "日前，大连农商银行官网挂出一份临时股东会通知，会议定在10月26日，议题只有一个——吸收合并瓦房店长兴村镇银行。看似一家市级农商行的常规议案，实则补上了辽宁农信改革的一块拼图：在辽宁农商银行已完成除大连外全省原农信系村镇银行的收编之后，大连农商银行旗下的“独苗”村镇银行也走向归并。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:54",
      "impact": "neutral"
    },
    {
      "title": "①工信部等三部门联合调查有关车辆刹车踏板支架断裂问题；②四部门公布婴幼儿纸尿裤甲酰胺问题调查结果；③商务部：中欧双方在混动汽车领域达成的谅解是对等互利的；④潘功胜：地缘政治冲突加剧仍是全球经济的最大不确定性。全球失衡不能依靠汇率调节。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:53",
      "impact": "neutral"
    },
    {
      "title": "中新社福建宁德10月15日电(吕巧琴吴允杰)2026世界储能大会15日在福建省宁德市举办，共商储能产业全球化发展路径。多名业界人士认为，中国储能产业正从“产品出海”迈向“生态共赢”新阶段。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "21:48",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 43,
    "label": "中性",
    "upDownRatio": "1,308/2,346",
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
