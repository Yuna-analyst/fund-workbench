// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-03 17:27:56
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-03 17:27 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-03",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3809.66,
      "change": -22.6,
      "changePct": "-0.59%",
      "high": 3827.64,
      "low": 3797.64,
      "volume": 524516960.0,
      "amount": 952256890000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 13448.29,
      "change": -130.64,
      "changePct": "-0.96%",
      "high": 13570.51,
      "low": 13407.99,
      "volume": 618828696.0,
      "amount": 1045128970000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3302.55,
      "change": -41.41,
      "changePct": "-1.24%",
      "high": 3342.17,
      "low": 3280.84,
      "volume": 187720972.0,
      "amount": 486504340000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1552.89,
      "change": -83.07,
      "changePct": "-5.08%",
      "high": 1621.99,
      "low": 1549.74,
      "volume": 12334986.0,
      "amount": 124510600000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4543.18,
      "change": -45.02,
      "changePct": "-0.98%",
      "high": 4572.59,
      "low": 4529.19,
      "volume": 232042584.0,
      "amount": 615750950000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 7414.52,
      "change": -79.47,
      "changePct": "-1.06%",
      "high": 7499.58,
      "low": 7397.94,
      "volume": 198312346.0,
      "amount": 409591540000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.63万亿",
      "label": "成交额",
      "rawAmount": 3633743290000.0,
      "change": ""
    },
    "upDown": {
      "val": "1,678/2,160",
      "label": "涨/跌家数",
      "rawUp": 1678,
      "rawDown": 2160,
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
    "totalInflow": 5.36,
    "totalOutflow": 0,
    "netFlow": 5.36,
    "netFlowTrend": [
      1.07,
      2.14,
      3.22,
      4.29,
      5.36
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
      "name": "传媒",
      "inflow": 2.26,
      "pct": 0.35
    },
    {
      "name": "军工",
      "inflow": 0.91,
      "pct": 0.73
    },
    {
      "name": "光伏",
      "inflow": 0.86,
      "pct": 1.96
    },
    {
      "name": "游戏",
      "inflow": 0.49,
      "pct": 1.08
    },
    {
      "name": "新能源",
      "inflow": 0.35,
      "pct": 0.62
    },
    {
      "name": "钢铁",
      "inflow": 0.33,
      "pct": 1.1
    },
    {
      "name": "地产",
      "inflow": 0.25,
      "pct": 0.51
    },
    {
      "name": "通信",
      "inflow": 0.0,
      "pct": 0.0
    },
    {
      "name": "基建",
      "inflow": -0.02,
      "pct": -0.09
    },
    {
      "name": "食品",
      "inflow": -0.07,
      "pct": -0.57
    },
    {
      "name": "计算机",
      "inflow": -0.08,
      "pct": -1.02
    },
    {
      "name": "农业",
      "inflow": -0.19,
      "pct": -0.14
    },
    {
      "name": "新能源车",
      "inflow": -0.36,
      "pct": -0.31
    },
    {
      "name": "云计算",
      "inflow": -0.63,
      "pct": -0.36
    },
    {
      "name": "医药",
      "inflow": -1.12,
      "pct": -0.8
    },
    {
      "name": "医疗",
      "inflow": -1.14,
      "pct": -0.61
    },
    {
      "name": "白酒",
      "inflow": -1.59,
      "pct": -1.1
    },
    {
      "name": "券商",
      "inflow": -1.87,
      "pct": -0.38
    },
    {
      "name": "有色",
      "inflow": -1.94,
      "pct": -0.78
    },
    {
      "name": "银行",
      "inflow": -2.51,
      "pct": -0.6
    }
  ],
  "sectors": [
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.832,
      "changePct": 1.96,
      "change": 0.016,
      "turnover": 2.87
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.193,
      "changePct": 1.1,
      "change": 0.013,
      "turnover": 1.11
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.118,
      "changePct": 1.08,
      "change": 0.012,
      "turnover": 1.63
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.101,
      "changePct": 0.73,
      "change": 0.008,
      "turnover": 3.04
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.451,
      "changePct": 0.62,
      "change": 0.015,
      "turnover": 1.17
    },
    {
      "name": "地产",
      "code": "512200",
      "price": 1.194,
      "changePct": 0.51,
      "change": 0.006,
      "turnover": 0.84
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.853,
      "changePct": 0.35,
      "change": 0.003,
      "turnover": 7.52
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.582,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 27.11
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.068,
      "changePct": -0.09,
      "change": -0.001,
      "turnover": 0.07
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.728,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 0.62
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.614,
      "changePct": -0.31,
      "change": -0.005,
      "turnover": 1.21
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.664,
      "changePct": -0.36,
      "change": -0.006,
      "turnover": 2.09
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.527,
      "changePct": -0.38,
      "change": -0.002,
      "turnover": 6.24
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.52,
      "changePct": -0.57,
      "change": -0.003,
      "turnover": 0.23
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.831,
      "changePct": -0.6,
      "change": -0.005,
      "turnover": 8.36
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.328,
      "changePct": -0.61,
      "change": -0.002,
      "turnover": 3.81
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.778,
      "changePct": -0.78,
      "change": -0.014,
      "turnover": 6.45
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.374,
      "changePct": -0.8,
      "change": -0.003,
      "turnover": 3.74
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.168,
      "changePct": -1.02,
      "change": -0.012,
      "turnover": 0.27
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.448,
      "changePct": -1.1,
      "change": -0.005,
      "turnover": 5.29
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.408,
      "changePct": -1.12,
      "change": -0.016,
      "turnover": 0.7
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 0.905,
      "changePct": -1.63,
      "change": -0.015,
      "turnover": 9.55
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.829,
      "changePct": -1.66,
      "change": -0.014,
      "turnover": 7.78
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.176,
      "changePct": -1.92,
      "change": -0.023,
      "turnover": 7.02
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 0.985,
      "changePct": -2.28,
      "change": -0.023,
      "turnover": 2.54
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.765,
      "changePct": -4.97,
      "change": -0.04,
      "turnover": 0.42
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.039,
      "changePct": -7.07,
      "change": -0.079,
      "turnover": 12.01
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 0.921,
      "changePct": -7.16,
      "change": -0.071,
      "turnover": 22.76
    }
  ],
  "etfFlow": [
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.451,
      "changePct": 0.62,
      "amount": 1.17,
      "netFlow": 0.29
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.374,
      "changePct": -0.8,
      "amount": 3.74,
      "netFlow": -0.94
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.527,
      "changePct": -0.38,
      "amount": 6.24,
      "netFlow": -1.56
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.801,
      "changePct": -1.03,
      "amount": 7.79,
      "netFlow": -1.95
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.468,
      "changePct": -1.02,
      "amount": 8.87,
      "netFlow": -2.22
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 2.99,
      "changePct": -1.42,
      "amount": 18.71,
      "netFlow": -4.68
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 7.42,
      "changePct": -1.07,
      "amount": 22.33,
      "netFlow": -5.58
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 0.921,
      "changePct": -7.16,
      "amount": 22.76,
      "netFlow": -5.69
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.599,
      "changePct": -1.16,
      "amount": 42.7,
      "netFlow": -10.67
    },
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.636,
      "changePct": -5.32,
      "amount": 107.58,
      "netFlow": -26.9
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.599,
      "changePct": -1.16,
      "amount": 42.7,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 2.99,
      "changePct": -1.42,
      "amount": 18.71,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 7.42,
      "changePct": -1.07,
      "amount": 22.33,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.801,
      "changePct": -1.03,
      "amount": 7.79,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.468,
      "changePct": -1.02,
      "amount": 8.87,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "光伏",
      "turnover": 2.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 1.11,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 1.63,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 3.04,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源",
      "turnover": 1.17,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "地产",
      "turnover": 0.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 7.52,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "通信",
      "turnover": 27.11,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "基建",
      "turnover": 0.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "农业",
      "turnover": 0.62,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "新能源车",
      "turnover": 1.21,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 2.09,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 6.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "食品",
      "turnover": 0.23,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "银行",
      "turnover": 8.36,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医疗",
      "turnover": 3.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 6.45,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "医药",
      "turnover": 3.74,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "计算机",
      "turnover": 0.27,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 5.29,
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
      "nav": 3.7885,
      "ret1w": -0.12,
      "ret1m": -10.58,
      "ret3m": -27.01,
      "ret6m": -20.17,
      "ret1y": -14.3,
      "ret2y": 34.12,
      "ret3y": 112.55
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 3.8217,
      "ret1w": -2.04,
      "ret1m": -13.05,
      "ret3m": -18.93,
      "ret6m": -19.48,
      "ret1y": -3.37,
      "ret2y": 11.76,
      "ret3y": 53.15
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 4.2423,
      "ret1w": 1.32,
      "ret1m": -15.35,
      "ret3m": -30.82,
      "ret6m": -13.24,
      "ret1y": 3.48,
      "ret2y": 81.92,
      "ret3y": 168.96
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7354,
      "ret1w": -0.86,
      "ret1m": 3.61,
      "ret3m": 10.79,
      "ret6m": -2.66,
      "ret1y": -7.03,
      "ret2y": -7.43,
      "ret3y": 12.36
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.3108,
      "ret1w": 4.39,
      "ret1m": 7.77,
      "ret3m": 0.03,
      "ret6m": -17.82,
      "ret1y": -23.97,
      "ret2y": -1.31,
      "ret3y": 21.12
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.8104,
      "ret1w": 1.6,
      "ret1m": 4.27,
      "ret3m": 0.31,
      "ret6m": -16.91,
      "ret1y": -28.66,
      "ret2y": -3.87,
      "ret3y": 29.53
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5725,
      "ret1w": -0.62,
      "ret1m": 1.49,
      "ret3m": 6.9,
      "ret6m": -2.12,
      "ret1y": -4.42,
      "ret2y": 25.8,
      "ret3y": 53.83
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.766,
      "ret1w": 0.06,
      "ret1m": -2.38,
      "ret3m": -20.2,
      "ret6m": -14.35,
      "ret1y": -11.03,
      "ret2y": 8.34,
      "ret3y": 53.43
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.2784,
      "ret1w": -0.71,
      "ret1m": -4.53,
      "ret3m": -14.5,
      "ret6m": -10.22,
      "ret1y": -4.24,
      "ret2y": 13.02,
      "ret3y": 35.71
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.079,
      "ret1w": -4.85,
      "ret1m": -14.14,
      "ret3m": -24.29,
      "ret6m": 1.08,
      "ret1y": 20.6,
      "ret2y": 113.23,
      "ret3y": 224.11
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.129,
      "ret1w": -0.53,
      "ret1m": 4.83,
      "ret3m": 9.61,
      "ret6m": -3.34,
      "ret1y": -7.76,
      "ret2y": -8.43,
      "ret3y": 1.62
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.323,
      "ret1w": 0.87,
      "ret1m": 2.7,
      "ret3m": 0.91,
      "ret6m": -13.09,
      "ret1y": -19.03,
      "ret2y": -13.68,
      "ret3y": 26.53
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.5869,
      "ret1w": -7.6,
      "ret1m": -20.26,
      "ret3m": -32.42,
      "ret6m": -53.35,
      "ret1y": -52.58,
      "ret2y": -22.61,
      "ret3y": 8.72
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9405,
      "ret1w": -0.37,
      "ret1m": 1.86,
      "ret3m": 3.16,
      "ret6m": 6.74,
      "ret1y": -4.01,
      "ret2y": 3.41,
      "ret3y": 9.52
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.504,
      "ret1w": -0.47,
      "ret1m": -5.0,
      "ret3m": -16.35,
      "ret6m": -13.8,
      "ret1y": -11.78,
      "ret2y": 7.24,
      "ret3y": 51.87
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.0164,
      "ret1w": -3.68,
      "ret1m": -19.71,
      "ret3m": -36.05,
      "ret6m": -14.94,
      "ret1y": 13.98,
      "ret2y": 73.02,
      "ret3y": 150.33
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5459,
      "ret1w": 0.15,
      "ret1m": 2.69,
      "ret3m": 6.55,
      "ret6m": -6.98,
      "ret1y": -9.12,
      "ret2y": -1.69,
      "ret3y": 20.46
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 0.957,
      "ret1w": -3.63,
      "ret1m": -9.37,
      "ret3m": -13.55,
      "ret6m": -4.4,
      "ret1y": -4.97,
      "ret2y": -15.53,
      "ret3y": -4.4
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3827,
      "ret1w": -0.29,
      "ret1m": 2.31,
      "ret3m": 8.36,
      "ret6m": -2.64,
      "ret1y": -5.11,
      "ret2y": 13.05,
      "ret3y": 15.07
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.2234,
      "ret1w": -0.54,
      "ret1m": -2.12,
      "ret3m": -7.62,
      "ret6m": -5.94,
      "ret1y": -5.74,
      "ret2y": 19.1,
      "ret3y": 62.13
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.2256,
      "ret1w": -1.25,
      "ret1m": -4.93,
      "ret3m": -16.84,
      "ret6m": -9.82,
      "ret1y": -5.21,
      "ret2y": 26.65,
      "ret3y": 33.84
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3033,
      "ret1w": -1.24,
      "ret1m": -4.93,
      "ret3m": -16.81,
      "ret6m": -9.74,
      "ret1y": -5.03,
      "ret2y": 27.14,
      "ret3y": 34.9
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0985,
      "ret1w": -0.2,
      "ret1m": -0.78,
      "ret3m": -0.85,
      "ret6m": 0.48,
      "ret1y": 2.04,
      "ret2y": 3.51,
      "ret3y": 9.09
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0708,
      "ret1w": -0.2,
      "ret1m": -0.77,
      "ret3m": -0.8,
      "ret6m": 0.64,
      "ret1y": 2.35,
      "ret2y": 4.14,
      "ret3y": 10.41
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7346,
      "ret1w": -0.81,
      "ret1m": 1.93,
      "ret3m": 0.88,
      "ret6m": -9.06,
      "ret1y": -13.15,
      "ret2y": -1.28,
      "ret3y": 15.09
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7529,
      "ret1w": -0.8,
      "ret1m": 1.95,
      "ret3m": 0.92,
      "ret6m": -8.94,
      "ret1y": -12.93,
      "ret2y": -0.79,
      "ret3y": 16.24
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.5126,
      "ret1w": -1.46,
      "ret1m": -13.4,
      "ret3m": -21.65,
      "ret6m": -1.83,
      "ret1y": 20.15,
      "ret2y": 87.49,
      "ret3y": 133.45
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.4132,
      "ret1w": -1.09,
      "ret1m": -4.38,
      "ret3m": -10.77,
      "ret6m": -5.09,
      "ret1y": -0.39,
      "ret2y": 38.54,
      "ret3y": 74.45
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7157,
      "ret1w": -1.5,
      "ret1m": -3.27,
      "ret3m": -12.28,
      "ret6m": -18.61,
      "ret1y": -18.75,
      "ret2y": -2.36,
      "ret3y": 11.43
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 3.8827,
      "ret1w": -2.72,
      "ret1m": -9.63,
      "ret3m": -20.03,
      "ret6m": -1.35,
      "ret1y": 11.42,
      "ret2y": 58.94,
      "ret3y": 120.36
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5231,
      "ret1w": -0.44,
      "ret1m": -3.4,
      "ret3m": -15.27,
      "ret6m": 0.79,
      "ret1y": 3.36,
      "ret2y": 31.73,
      "ret3y": 46.2
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.533,
      "ret1w": -0.43,
      "ret1m": -3.37,
      "ret3m": -15.24,
      "ret6m": 0.91,
      "ret1y": 3.58,
      "ret2y": 32.29,
      "ret3y": 47.4
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2769,
      "ret1w": -0.55,
      "ret1m": 0.45,
      "ret3m": 2.86,
      "ret6m": -1.3,
      "ret1y": -1.05,
      "ret2y": -0.69,
      "ret3y": 0.97
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1422,
      "ret1w": -0.37,
      "ret1m": 0.08,
      "ret3m": 0.43,
      "ret6m": -0.67,
      "ret1y": -5.96,
      "ret2y": 6.35,
      "ret3y": 21.68
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.3681,
      "ret1w": -0.36,
      "ret1m": -5.11,
      "ret3m": -17.07,
      "ret6m": -13.46,
      "ret1y": -4.54,
      "ret2y": -7.23,
      "ret3y": 11.16
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 2.9943,
      "ret1w": -0.26,
      "ret1m": 1.41,
      "ret3m": 2.59,
      "ret6m": -8.21,
      "ret1y": -5.73,
      "ret2y": 24.39,
      "ret3y": 41.05
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.094,
      "ret1w": -1.75,
      "ret1m": -19.49,
      "ret3m": -29.39,
      "ret6m": -13.36,
      "ret1y": 27.22,
      "ret2y": 126.0,
      "ret3y": 172.84
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.5165,
      "ret1w": 0.3,
      "ret1m": 2.86,
      "ret3m": 8.8,
      "ret6m": 1.42,
      "ret1y": 4.51,
      "ret2y": 1.8,
      "ret3y": 11.52
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.5784,
      "ret1w": 2.3,
      "ret1m": -4.57,
      "ret3m": -32.7,
      "ret6m": -17.86,
      "ret1y": -22.46,
      "ret2y": 2.08,
      "ret3y": 23.33
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 12.635,
      "ret1w": -1.03,
      "ret1m": -10.83,
      "ret3m": -27.92,
      "ret6m": 12.07,
      "ret1y": 45.48,
      "ret2y": 170.33,
      "ret3y": 278.29
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.0627,
      "ret1w": -0.1,
      "ret1m": -0.62,
      "ret3m": -1.46,
      "ret6m": -0.5,
      "ret1y": -0.06,
      "ret2y": 1.59,
      "ret3y": 4.16
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1108,
      "ret1w": -0.11,
      "ret1m": -0.62,
      "ret3m": -1.44,
      "ret6m": -0.44,
      "ret1y": 0.05,
      "ret2y": 1.88,
      "ret3y": 4.88
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0635,
      "ret1w": 0.0,
      "ret1m": 0.02,
      "ret3m": 0.15,
      "ret6m": 0.3,
      "ret1y": 0.78,
      "ret2y": 1.39,
      "ret3y": 2.6
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.0976,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.1,
      "ret6m": 0.34,
      "ret1y": 0.8,
      "ret2y": 1.47,
      "ret3y": 3.78
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1068,
      "ret1w": 0.01,
      "ret1m": 0.04,
      "ret3m": 0.12,
      "ret6m": 0.39,
      "ret1y": 0.9,
      "ret2y": 1.67,
      "ret3y": 4.21
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0751,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.2,
      "ret6m": 0.32,
      "ret1y": 0.74,
      "ret2y": 1.24,
      "ret3y": 2.61
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0893,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.22,
      "ret6m": 0.4,
      "ret1y": 0.9,
      "ret2y": 1.56,
      "ret3y": 3.26
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0485,
      "ret1w": -0.34,
      "ret1m": -1.63,
      "ret3m": -5.1,
      "ret6m": -2.92,
      "ret1y": -0.06,
      "ret2y": 7.64,
      "ret3y": 10.28
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.1884,
      "ret1w": -0.28,
      "ret1m": -1.53,
      "ret3m": -6.31,
      "ret6m": -4.32,
      "ret1y": -2.59,
      "ret2y": 0.03,
      "ret3y": 4.17
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0548,
      "ret1w": -0.34,
      "ret1m": -1.62,
      "ret3m": -5.07,
      "ret6m": -2.81,
      "ret1y": 0.14,
      "ret2y": 8.09,
      "ret3y": 11.17
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0443,
      "ret1w": 0.01,
      "ret1m": 0.02,
      "ret3m": 0.11,
      "ret6m": 0.38,
      "ret1y": 0.86,
      "ret2y": 1.63,
      "ret3y": 3.47
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1565,
      "ret1w": -0.14,
      "ret1m": -1.84,
      "ret3m": -3.86,
      "ret6m": -4.55,
      "ret1y": -3.67,
      "ret2y": 1.94,
      "ret3y": 8.15
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2192,
      "ret1w": -0.02,
      "ret1m": 0.09,
      "ret3m": -0.68,
      "ret6m": -0.97,
      "ret1y": 0.47,
      "ret2y": 6.75,
      "ret3y": 14.59
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1258,
      "ret1w": -0.21,
      "ret1m": -0.86,
      "ret3m": -3.27,
      "ret6m": -1.38,
      "ret1y": -0.47,
      "ret2y": 4.71,
      "ret3y": 8.29
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.196,
      "ret1w": -0.21,
      "ret1m": -0.85,
      "ret3m": -3.24,
      "ret6m": -1.29,
      "ret1y": -0.28,
      "ret2y": 5.13,
      "ret3y": 9.2
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.238,
      "ret1w": 5.47,
      "ret1m": -3.2,
      "ret3m": -21.39,
      "ret6m": 7.44,
      "ret1y": 38.49,
      "ret2y": 87.28,
      "ret3y": 119.2
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9184,
      "ret1w": 0.39,
      "ret1m": 1.16,
      "ret3m": 0.19,
      "ret6m": 1.73,
      "ret1y": 2.26,
      "ret2y": 12.47,
      "ret3y": 32.93
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.8786,
      "ret1w": 0.95,
      "ret1m": -1.01,
      "ret3m": -12.35,
      "ret6m": -11.29,
      "ret1y": -6.42,
      "ret2y": 12.32,
      "ret3y": 55.01
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.1654,
      "ret1w": -0.44,
      "ret1m": 0.29,
      "ret3m": -11.12,
      "ret6m": 0.84,
      "ret1y": 6.02,
      "ret2y": 19.18,
      "ret3y": 59.29
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9345,
      "ret1w": -0.22,
      "ret1m": -0.19,
      "ret3m": -1.06,
      "ret6m": -1.63,
      "ret1y": -2.89,
      "ret2y": -3.11,
      "ret3y": -1.21
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.5781,
      "ret1w": 3.68,
      "ret1m": -0.94,
      "ret3m": -17.57,
      "ret6m": 4.59,
      "ret1y": 21.92,
      "ret2y": 54.0,
      "ret3y": 89.05
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.522,
      "ret1w": 1.03,
      "ret1m": 0.0,
      "ret3m": -3.23,
      "ret6m": 0.51,
      "ret1y": 0.24,
      "ret2y": 5.29,
      "ret3y": 21.23
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.172,
      "ret1w": 0.6,
      "ret1m": -3.38,
      "ret3m": 4.74,
      "ret6m": -13.76,
      "ret1y": -10.53,
      "ret2y": -17.41,
      "ret3y": 109.29
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.895,
      "ret1w": 4.31,
      "ret1m": -5.69,
      "ret3m": -9.23,
      "ret6m": -17.66,
      "ret1y": -17.44,
      "ret2y": -21.77,
      "ret3y": 35.2
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.7563,
      "ret1w": 8.06,
      "ret1m": -0.61,
      "ret3m": -14.79,
      "ret6m": 5.22,
      "ret1y": 32.01,
      "ret2y": 88.34,
      "ret3y": 128.36
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.4611,
      "ret1w": 0.2,
      "ret1m": 0.68,
      "ret3m": 6.49,
      "ret6m": -5.38,
      "ret1y": 0.12,
      "ret2y": 35.78,
      "ret3y": 40.31
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6966,
      "ret1w": 4.51,
      "ret1m": 1.82,
      "ret3m": -1.6,
      "ret6m": 6.36,
      "ret1y": 7.71,
      "ret2y": 31.06,
      "ret3y": 55.37
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2915,
      "ret1w": 6.03,
      "ret1m": 2.17,
      "ret3m": -2.76,
      "ret6m": 1.49,
      "ret1y": 1.81,
      "ret2y": 18.93,
      "ret3y": 37.88
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.329,
      "ret1w": -0.45,
      "ret1m": -2.21,
      "ret3m": 1.06,
      "ret6m": 0.61,
      "ret1y": 8.05,
      "ret2y": 7.26,
      "ret3y": -2.81
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 1.948,
      "ret1w": -1.37,
      "ret1m": -0.51,
      "ret3m": 0.1,
      "ret6m": -13.07,
      "ret1y": -19.2,
      "ret2y": 13.72,
      "ret3y": 47.55
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0091,
      "ret1w": -0.01,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.56,
      "ret1y": 1.44,
      "ret2y": 1.56,
      "ret3y": 3.32
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.008,
      "ret1w": 0.0,
      "ret1m": 0.05,
      "ret3m": 0.11,
      "ret6m": 0.55,
      "ret1y": 1.46,
      "ret2y": 1.63,
      "ret3y": 3.51
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.407,
      "ret1w": -1.12,
      "ret1m": -5.0,
      "ret3m": -9.17,
      "ret6m": -7.13,
      "ret1y": -2.09,
      "ret2y": 13.19,
      "ret3y": 31.5
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.725,
      "ret1w": -0.95,
      "ret1m": -5.38,
      "ret3m": -12.41,
      "ret6m": -8.68,
      "ret1y": -3.61,
      "ret2y": 23.98,
      "ret3y": 53.61
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.5873,
      "ret1w": -1.45,
      "ret1m": -0.74,
      "ret3m": -4.56,
      "ret6m": -13.07,
      "ret1y": -14.05,
      "ret2y": 39.35,
      "ret3y": 58.89
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.0878,
      "ret1w": -0.91,
      "ret1m": -3.5,
      "ret3m": -6.86,
      "ret6m": -3.54,
      "ret1y": 2.09,
      "ret2y": 17.87,
      "ret3y": 38.33
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.1469,
      "ret1w": -0.9,
      "ret1m": -3.5,
      "ret3m": -6.83,
      "ret6m": -3.44,
      "ret1y": 2.3,
      "ret2y": 18.36,
      "ret3y": 39.45
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 1.9184,
      "ret1w": -1.01,
      "ret1m": -3.84,
      "ret3m": -14.43,
      "ret6m": -10.16,
      "ret1y": -9.55,
      "ret2y": 19.18,
      "ret3y": 54.15
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.7732,
      "ret1w": -0.93,
      "ret1m": -3.17,
      "ret3m": -5.51,
      "ret6m": -4.51,
      "ret1y": -1.53,
      "ret2y": 12.58,
      "ret3y": 35.98
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.5749,
      "ret1w": 0.03,
      "ret1m": 0.6,
      "ret3m": -3.37,
      "ret6m": -6.21,
      "ret1y": -5.05,
      "ret2y": 20.85,
      "ret3y": 52.02
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 1.9149,
      "ret1w": -1.96,
      "ret1m": -8.99,
      "ret3m": -16.04,
      "ret6m": -5.21,
      "ret1y": 4.7,
      "ret2y": 33.58,
      "ret3y": 68.51
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1706,
      "ret1w": -0.71,
      "ret1m": 0.54,
      "ret3m": 6.57,
      "ret6m": -2.33,
      "ret1y": -0.05,
      "ret2y": 10.73,
      "ret3y": 29.73
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5228,
      "ret1w": 0.34,
      "ret1m": 1.8,
      "ret3m": 4.3,
      "ret6m": 2.93,
      "ret1y": 2.22,
      "ret2y": 15.03,
      "ret3y": 31.25
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.3217,
      "ret1w": 0.56,
      "ret1m": 0.28,
      "ret3m": -6.34,
      "ret6m": 1.84,
      "ret1y": 7.21,
      "ret2y": 13.96,
      "ret3y": 34.88
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.7263,
      "ret1w": -0.88,
      "ret1m": -5.42,
      "ret3m": -10.06,
      "ret6m": -7.56,
      "ret1y": 1.96,
      "ret2y": 24.26,
      "ret3y": 54.54
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.1013,
      "ret1w": -3.1,
      "ret1m": -7.1,
      "ret3m": -21.18,
      "ret6m": -10.22,
      "ret1y": -8.44,
      "ret2y": 13.59,
      "ret3y": 39.3
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.1029,
      "ret1w": -3.09,
      "ret1m": -7.09,
      "ret3m": -21.1,
      "ret6m": -10.22,
      "ret1y": -8.47,
      "ret2y": 12.81,
      "ret3y": 38.87
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.3513,
      "ret1w": 1.65,
      "ret1m": -2.38,
      "ret3m": -17.61,
      "ret6m": -11.35,
      "ret1y": -10.27,
      "ret2y": 7.24,
      "ret3y": 31.59
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.3817,
      "ret1w": 1.65,
      "ret1m": -2.37,
      "ret3m": -17.58,
      "ret6m": -11.26,
      "ret1y": -10.09,
      "ret2y": 7.67,
      "ret3y": 32.64
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 1.992,
      "ret1w": 1.95,
      "ret1m": -5.82,
      "ret3m": -25.82,
      "ret6m": -6.85,
      "ret1y": -3.16,
      "ret2y": 21.4,
      "ret3y": 55.39
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1684,
      "ret1w": -0.03,
      "ret1m": 0.08,
      "ret3m": -0.03,
      "ret6m": 0.0,
      "ret1y": -0.12,
      "ret2y": 2.69,
      "ret3y": 7.5
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.188,
      "ret1w": -0.03,
      "ret1m": 0.08,
      "ret3m": -0.02,
      "ret6m": 0.08,
      "ret1y": 0.03,
      "ret2y": 3.0,
      "ret3y": 8.15
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0832,
      "ret1w": 0.0,
      "ret1m": 0.03,
      "ret3m": 0.18,
      "ret6m": 0.39,
      "ret1y": 0.93,
      "ret2y": 1.7,
      "ret3y": 3.2
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.412,
      "ret1w": 0.09,
      "ret1m": 0.09,
      "ret3m": 0.17,
      "ret6m": 0.16,
      "ret1y": 0.33,
      "ret2y": 0.97,
      "ret3y": 9.73
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4638,
      "ret1w": 0.08,
      "ret1m": 0.1,
      "ret3m": 0.21,
      "ret6m": 0.26,
      "ret1y": 0.53,
      "ret2y": 1.38,
      "ret3y": 10.61
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.0703,
      "ret1w": -0.72,
      "ret1m": -2.7,
      "ret3m": -5.69,
      "ret6m": 6.94,
      "ret1y": 8.49,
      "ret2y": 30.77,
      "ret3y": 61.45
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2398,
      "ret1w": -0.35,
      "ret1m": -1.09,
      "ret3m": -2.69,
      "ret6m": 1.1,
      "ret1y": 3.5,
      "ret2y": 15.71,
      "ret3y": 47.89
    }
  ],
  "fundHistories": {
    "671030": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 3.7885
      }
    ],
    "580008": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 3.8217
      }
    ],
    "540010": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 4.2423
      }
    ],
    "540009": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 0.7354
      }
    ],
    "540008": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.3108
      }
    ],
    "540007": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.8104
      }
    ],
    "540006": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 5.5725
      }
    ],
    "519975": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.766
      }
    ],
    "519965": [
      {
        "date": "2026-07-07",
        "nav": 1.4608
      },
      {
        "date": "2026-07-08",
        "nav": 1.4257
      },
      {
        "date": "2026-07-09",
        "nav": 1.4521
      },
      {
        "date": "2026-07-10",
        "nav": 1.4255
      },
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
      }
    ],
    "519935": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 3.079
      }
    ],
    "519714": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.129
      }
    ],
    "519673": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.323
      }
    ],
    "519606": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.5869
      }
    ],
    "519193": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.9405
      }
    ],
    "501219": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.504
      }
    ],
    "501201": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.0164
      }
    ],
    "450009": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.5459
      }
    ],
    "399011": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 0.957
      }
    ],
    "376510": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.3827
      }
    ],
    "360001": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.2234
      }
    ],
    "970185": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.2256
      }
    ],
    "970184": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.3033
      }
    ],
    "970121": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.0985
      }
    ],
    "970119": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.0708
      }
    ],
    "970069": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 0.7346
      }
    ],
    "970067": [
      {
        "date": "2026-07-07",
        "nav": 0.745
      },
      {
        "date": "2026-07-08",
        "nav": 0.7369
      },
      {
        "date": "2026-07-09",
        "nav": 0.7294
      },
      {
        "date": "2026-07-10",
        "nav": 0.7322
      },
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
      }
    ],
    "959991": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.5126
      }
    ],
    "952099": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.4132
      }
    ],
    "952035": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 0.7157
      }
    ],
    "952004": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 3.8827
      }
    ],
    "881007": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 0.5231
      }
    ],
    "880007": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 0.533
      }
    ],
    "770001": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.2769
      }
    ],
    "762001": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.1422
      }
    ],
    "750005": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.3681
      }
    ],
    "750001": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 2.9943
      }
    ],
    "740001": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 3.094
      }
    ],
    "730002": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 1.5165
      }
    ],
    "730001": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 0.5784
      }
    ],
    "720001": [
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
      },
      {
        "date": "2026-08-03",
        "nav": 12.635
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": 0.53,
      "nav": 3.7885,
      "price": 3.7885,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": 0.65,
      "nav": 3.8217,
      "price": 3.8217,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": 0.77,
      "nav": 4.2423,
      "price": 4.2423,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": -0.18,
      "nav": 0.7354,
      "price": 0.7354,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.39,
      "nav": 2.3108,
      "price": 2.3108,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": -0.21,
      "nav": 2.8104,
      "price": 2.8104,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.07,
      "nav": 5.5725,
      "price": 5.5725,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": 0.12,
      "nav": 1.766,
      "price": 1.766,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": 0.23,
      "nav": 1.2784,
      "price": 1.2784,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": 0.71,
      "nav": 3.079,
      "price": 3.079,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.24,
      "nav": 1.129,
      "price": 1.129,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 2.323,
      "price": 2.323,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": 1.01,
      "nav": 1.5869,
      "price": 1.5869,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.09,
      "nav": 1.9405,
      "price": 1.9405,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": 0.25,
      "nav": 1.504,
      "price": 1.504,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": 0.99,
      "nav": 2.0164,
      "price": 2.0164,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 2.5459,
      "price": 2.5459,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": 0.47,
      "nav": 0.957,
      "price": 0.957,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.12,
      "nav": 2.3827,
      "price": 2.3827,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": 0.11,
      "nav": 1.2234,
      "price": 1.2234,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 15.87,
      "sharpe": -0.92,
      "calmar": -0.92
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 19.58,
      "sharpe": -0.19,
      "calmar": -0.19
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 23.02,
      "sharpe": 0.17,
      "calmar": 0.17
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 5.42,
      "sharpe": -0.82,
      "calmar": -0.82
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 11.65,
      "sharpe": -1.88,
      "calmar": -1.88
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 6.4,
      "sharpe": -3.09,
      "calmar": -3.09
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.23,
      "sharpe": -0.68,
      "calmar": -0.68
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 3.57,
      "sharpe": -1.49,
      "calmar": -1.49
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 6.79,
      "sharpe": -0.44,
      "calmar": -0.44
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 21.21,
      "sharpe": 1.08,
      "calmar": 1.08
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 7.25,
      "sharpe": -0.79,
      "calmar": -0.79
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 4.05,
      "sharpe": -2.47,
      "calmar": -2.47
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 30.39,
      "sharpe": -2.08,
      "calmar": -2.08
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 2.79,
      "sharpe": -0.58,
      "calmar": -0.58
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.5,
      "sharpe": -1.18,
      "calmar": -1.18
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 29.57,
      "sharpe": 0.57,
      "calmar": 0.57
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.04,
      "sharpe": -1.19,
      "calmar": -1.19
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 14.05,
      "sharpe": -0.35,
      "calmar": -0.35
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 3.46,
      "sharpe": -0.7,
      "calmar": -0.7
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 3.18,
      "sharpe": -0.81,
      "calmar": -0.81
    }
  ],
  "news": [
    {
      "title": "编者按：作为“十五五”时期的首场半年考，中国城市经济“期中答卷”次第展开。每一座城市都在用数据回应同一个追问：新五年的增长动力，从哪里来？GDP十强城市中，重庆广州交替领先，苏蓉杭汉贴身竞速；腰部城市洗牌，青岛超天津，合肥跃居济南之上。更深的暗流涌向GDP8000亿元+的“准万亿”梯队，它们既是冲刺撞线的热门选手，也往往在临门一脚时面临新旧动能切换的“成长烦恼”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:56",
      "impact": "neutral"
    },
    {
      "title": "“5年期人民币国债期货在香港正式落地，可以说是正当其时、水到渠成。”8月3日，中国证监会主席吴清在香港推出人民币国债期货上市仪式上表示，在岸与离岸市场的协同开放，不仅能够为国际投资者提供便捷高效的利率风险管理工具，帮助外资更好更放心地持有中国债券资产，也有利于促进两地国债现货、期货及衍生品市场紧密联动，健全更具韧性和有效性的国债收益率曲线。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:54",
      "impact": "neutral"
    },
    {
      "title": "日前，中国人民银行召开2026年下半年工作会议，总结2026年以来工作，分析当前形势，部署下一阶段工作。会议强调，实施好适度宽松的货币政策，充分发挥各项存量政策效能，及时谋划出台务实管用的增量政策，加大逆周期调节力度，加力扩大内需、优化供给，扎实做好下半年各项重点工作，推动经济持续向新向优向好发展。多位专家预计，年内降准降息有一定可能和空间。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:54",
      "impact": "neutral"
    },
    {
      "title": "7月份以来，厦门、贵阳、郑州、南京等地就消费新业态新模式新场景（以下简称“三新”）试点工作发布新文件。例如，7月30日公开发布的《厦门市商务局关于厦门市消费新业态新模式新场景试点专项资金项目申报工作的补充通知》，强调“围绕健全首发经济服务体系、创新多元化服务消费场景、推动优质消费资源与知名IP跨界联名等重点领域，支持一批示范性强、带动性大的试点项目”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:54",
      "impact": "neutral"
    },
    {
      "title": "7月31日召开的国务院常务会议审议通过了《国务院关于修改〈住房公积金管理条例〉的决定（草案）》。会议提出，要更好发挥住房公积金功能作用，拓宽提取和使用范围，扩大制度覆盖面，提升管理服务效能，更好满足居民多样化住房消费需求。住房公积金制度是我国城镇住房制度的重要组成部分。1999年，国务院颁布施行《住房公积金管理条例》（以下简称《条例》）。自施行以来，《条例》已经过两次修订。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:54",
      "impact": "neutral"
    },
    {
      "title": "8月3日，国家发展改革委、国家能源局对外发布《新型电力系统建设“十五五”规划》（以下简称《规划》）。《规划》从绿色低碳、电力供应、电网发展、用电协同等8个方面明确了16项“十五五”时期新型电力系统发展主要指标。其中，到2030年，全国总装机规模要达到54亿千瓦。而截至2025年底，我国总装机规模仅为38.9亿千瓦。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:54",
      "impact": "neutral"
    },
    {
      "title": "8月3日，中国证监会主席吴清在香港推出人民币国债期货上市仪式上表示，中国证监会将进一步推出深化双向务实合作、支持香港资本市场发展的政策举措。“聚焦‘产品协同’，更加便利全球投资者配置中国资产”是上述政策举措中的一项重要内容。当前，跨境资本配置需求日趋多元，境外投资者对中国优质资产的配置意愿稳步提升，同时对跨境风险管理工具、多元化投资产品、便捷化投资机制的需求持续凸显。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "00:54",
      "impact": "neutral"
    },
    {
      "title": "8月3日，国家发展改革委、国家能源局联合印发的《新型电力系统建设“十五五”规划》（简称《规划》）对外发布。《规划》提出，到2030年，新型电力系统初步建成。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:52",
      "impact": "neutral"
    },
    {
      "title": "日前，广东21地市半年报已披露完毕。不出意外，深圳继续稳坐全省头把交椅；意料之外的是，临深城市正迎来“大爆发”。今年上半年，中山GDP同比增长6.0%，创近五年最好成绩；东莞以5.1%的增速首次在半年维度超越佛山；惠州作为广东第五城，也实现了3.0%的增长，增长体量较大；受益于深圳“飞地”深汕特别合作区30.2%的高增速，汕尾也实现了4.7%的增长。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:38",
      "impact": "neutral"
    },
    {
      "title": "2026年上半年，长沙的成绩单并不令人满意。GDP增速2.5%，在万亿城市中排名靠后，第二产业几乎原地踏步，仅增长0.8%。汽车制造、烟草制品、烟花爆竹三大传统产业，增速全面回落。经济换挡的阵痛，清晰可见。在新的经济动能尚需培育时日之时，支撑长沙经济的“底座”之一的工程机械产业，在下半年率先发力。8月3日，高端工程机械国家制造业创新中心（以下简称“国创中心”）正式获批。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "22:34",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 45,
    "label": "中性",
    "upDownRatio": "1,678/2,160",
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
