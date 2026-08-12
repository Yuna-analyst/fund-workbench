// 基金分析工作台 - 数据层
// 数据源: 腾讯行情 + 东方财富公开API
// 自动生成于 2026-08-12 12:37:43
// 交易日数据, 仅供参考
window.fundData = {
  "updateTime": "2026-08-12 12:37 · 收市",
  "marketStatus": "closed",
  "dataSource": "腾讯行情 + 东方财富",
  "tradingDate": "2026-08-12",
  "indices": [
    {
      "name": "上证指数",
      "code": "000001",
      "value": 3946.68,
      "change": 12.59,
      "changePct": "+0.32%",
      "high": 3950.62,
      "low": 3927.55,
      "volume": 503257011.0,
      "amount": 986122390000.0
    },
    {
      "name": "深证成指",
      "code": "399001",
      "value": 14414.43,
      "change": 154.99,
      "changePct": "+1.09%",
      "high": 14467.0,
      "low": 14237.2,
      "volume": 625395865.0,
      "amount": 1166300720000.0
    },
    {
      "name": "创业板指",
      "code": "399006",
      "value": 3602.08,
      "change": 52.92,
      "changePct": "+1.49%",
      "high": 3625.27,
      "low": 3540.95,
      "volume": 183438948.0,
      "amount": 561500230000.0
    },
    {
      "name": "科创50",
      "code": "000688",
      "value": 1736.99,
      "change": 27.49,
      "changePct": "+1.61%",
      "high": 1747.94,
      "low": 1709.16,
      "volume": 9742544.0,
      "amount": 103281010000.0
    },
    {
      "name": "沪深300",
      "code": "000300",
      "value": 4690.92,
      "change": 27.13,
      "changePct": "+0.58%",
      "high": 4700.43,
      "low": 4657.69,
      "volume": 184939148.0,
      "amount": 575326280000.0
    },
    {
      "name": "中证500",
      "code": "000905",
      "value": 8045.31,
      "change": 77.77,
      "changePct": "+0.98%",
      "high": 8067.53,
      "low": 7961.83,
      "volume": 180742697.0,
      "amount": 408869420000.0
    }
  ],
  "marketKPIs": {
    "totalAmount": {
      "val": "3.80万亿",
      "label": "成交额",
      "rawAmount": 3801400050000.0,
      "change": ""
    },
    "upDown": {
      "val": "3,809/1,095",
      "label": "涨/跌家数",
      "rawUp": 3809,
      "rawDown": 1095,
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
    "totalInflow": 32.49,
    "totalOutflow": 0,
    "netFlow": 32.49,
    "netFlowTrend": [
      6.5,
      13.0,
      19.49,
      25.99,
      32.49
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
      "inflow": 10.76,
      "pct": 2.94
    },
    {
      "name": "有色",
      "inflow": 4.22,
      "pct": 0.94
    },
    {
      "name": "5G",
      "inflow": 3.82,
      "pct": 3.05
    },
    {
      "name": "半导体",
      "inflow": 3.74,
      "pct": 1.68
    },
    {
      "name": "券商",
      "inflow": 3.03,
      "pct": 0.38
    },
    {
      "name": "白酒",
      "inflow": 2.58,
      "pct": 1.13
    },
    {
      "name": "芯片",
      "inflow": 2.04,
      "pct": 1.85
    },
    {
      "name": "传媒",
      "inflow": 0.97,
      "pct": 0.69
    },
    {
      "name": "军工",
      "inflow": 0.67,
      "pct": 0.7
    },
    {
      "name": "光伏",
      "inflow": 0.66,
      "pct": 1.61
    },
    {
      "name": "地产",
      "inflow": 0.56,
      "pct": 4.18
    },
    {
      "name": "人工智能",
      "inflow": 0.54,
      "pct": 1.33
    },
    {
      "name": "云计算",
      "inflow": 0.39,
      "pct": 0.23
    },
    {
      "name": "新能源车",
      "inflow": 0.37,
      "pct": 0.72
    },
    {
      "name": "新能源",
      "inflow": 0.36,
      "pct": 0.89
    },
    {
      "name": "钢铁",
      "inflow": 0.31,
      "pct": 0.86
    },
    {
      "name": "游戏",
      "inflow": 0.25,
      "pct": 0.71
    },
    {
      "name": "电子",
      "inflow": 0.13,
      "pct": 1.72
    },
    {
      "name": "食品",
      "inflow": 0.06,
      "pct": 0.78
    },
    {
      "name": "基建",
      "inflow": 0.02,
      "pct": 0.38
    }
  ],
  "sectors": [
    {
      "name": "地产",
      "code": "512200",
      "price": 1.271,
      "changePct": 4.18,
      "change": 0.051,
      "turnover": 1.87
    },
    {
      "name": "5G",
      "code": "515050",
      "price": 1.048,
      "changePct": 3.05,
      "change": 0.031,
      "turnover": 12.74
    },
    {
      "name": "通信",
      "code": "515880",
      "price": 0.665,
      "changePct": 2.94,
      "change": 0.019,
      "turnover": 35.85
    },
    {
      "name": "芯片",
      "code": "159995",
      "price": 1.209,
      "changePct": 1.85,
      "change": 0.022,
      "turnover": 6.81
    },
    {
      "name": "电子",
      "code": "515260",
      "price": 0.885,
      "changePct": 1.72,
      "change": 0.015,
      "turnover": 0.42
    },
    {
      "name": "半导体",
      "code": "512480",
      "price": 1.088,
      "changePct": 1.68,
      "change": 0.018,
      "turnover": 12.46
    },
    {
      "name": "光伏",
      "code": "515790",
      "price": 0.882,
      "changePct": 1.61,
      "change": 0.014,
      "turnover": 2.19
    },
    {
      "name": "人工智能",
      "code": "515980",
      "price": 1.063,
      "changePct": 1.33,
      "change": 0.014,
      "turnover": 1.81
    },
    {
      "name": "白酒",
      "code": "512690",
      "price": 0.446,
      "changePct": 1.13,
      "change": 0.005,
      "turnover": 8.6
    },
    {
      "name": "有色",
      "code": "512400",
      "price": 1.94,
      "changePct": 0.94,
      "change": 0.018,
      "turnover": 14.08
    },
    {
      "name": "新能源",
      "code": "516160",
      "price": 2.598,
      "changePct": 0.89,
      "change": 0.023,
      "turnover": 1.19
    },
    {
      "name": "钢铁",
      "code": "515210",
      "price": 1.173,
      "changePct": 0.86,
      "change": 0.01,
      "turnover": 1.02
    },
    {
      "name": "食品",
      "code": "515710",
      "price": 0.517,
      "changePct": 0.78,
      "change": 0.004,
      "turnover": 0.21
    },
    {
      "name": "新能源车",
      "code": "515030",
      "price": 1.679,
      "changePct": 0.72,
      "change": 0.012,
      "turnover": 1.22
    },
    {
      "name": "游戏",
      "code": "516010",
      "price": 1.132,
      "changePct": 0.71,
      "change": 0.008,
      "turnover": 0.84
    },
    {
      "name": "军工",
      "code": "512660",
      "price": 1.156,
      "changePct": 0.7,
      "change": 0.008,
      "turnover": 2.25
    },
    {
      "name": "传媒",
      "code": "512980",
      "price": 0.876,
      "changePct": 0.69,
      "change": 0.006,
      "turnover": 3.24
    },
    {
      "name": "券商",
      "code": "512000",
      "price": 0.524,
      "changePct": 0.38,
      "change": 0.002,
      "turnover": 10.09
    },
    {
      "name": "基建",
      "code": "516950",
      "price": 1.053,
      "changePct": 0.38,
      "change": 0.004,
      "turnover": 0.07
    },
    {
      "name": "云计算",
      "code": "516510",
      "price": 1.739,
      "changePct": 0.23,
      "change": 0.004,
      "turnover": 1.31
    },
    {
      "name": "银行",
      "code": "512800",
      "price": 0.8,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 5.9
    },
    {
      "name": "计算机",
      "code": "512720",
      "price": 1.222,
      "changePct": 0.0,
      "change": 0.0,
      "turnover": 0.61
    },
    {
      "name": "农业",
      "code": "159825",
      "price": 0.729,
      "changePct": -0.14,
      "change": -0.001,
      "turnover": 0.55
    },
    {
      "name": "家电",
      "code": "159996",
      "price": 1.43,
      "changePct": -0.14,
      "change": -0.002,
      "turnover": 0.26
    },
    {
      "name": "医疗",
      "code": "512170",
      "price": 0.35,
      "changePct": -0.28,
      "change": -0.001,
      "turnover": 4.66
    },
    {
      "name": "创新药",
      "code": "159992",
      "price": 0.919,
      "changePct": -0.33,
      "change": -0.003,
      "turnover": 9.36
    },
    {
      "name": "医药",
      "code": "512010",
      "price": 0.401,
      "changePct": -0.5,
      "change": -0.002,
      "turnover": 5.61
    },
    {
      "name": "煤炭",
      "code": "515220",
      "price": 1.248,
      "changePct": -1.03,
      "change": -0.013,
      "turnover": 6.33
    }
  ],
  "etfFlow": [
    {
      "name": "科创50ETF",
      "code": "588000",
      "price": 1.833,
      "changePct": 1.5,
      "amount": 52.86,
      "netFlow": 13.21
    },
    {
      "name": "沪深300ETF",
      "code": "510300",
      "price": 4.748,
      "changePct": 0.42,
      "amount": 42.76,
      "netFlow": 10.69
    },
    {
      "name": "中证500ETF",
      "code": "510500",
      "price": 8.053,
      "changePct": 0.8,
      "amount": 14.54,
      "netFlow": 3.64
    },
    {
      "name": "半导体ETF",
      "code": "512480",
      "price": 1.088,
      "changePct": 1.68,
      "amount": 12.46,
      "netFlow": 3.11
    },
    {
      "name": "上证50ETF",
      "code": "510050",
      "price": 3.043,
      "changePct": 0.13,
      "amount": 10.65,
      "netFlow": 2.66
    },
    {
      "name": "券商ETF",
      "code": "512000",
      "price": 0.524,
      "changePct": 0.38,
      "amount": 10.09,
      "netFlow": 2.52
    },
    {
      "name": "沪深300ETF",
      "code": "159919",
      "price": 4.957,
      "changePct": 0.45,
      "amount": 6.76,
      "netFlow": 1.69
    },
    {
      "name": "沪深300ETF",
      "code": "510310",
      "price": 4.611,
      "changePct": 0.52,
      "amount": 5.98,
      "netFlow": 1.5
    },
    {
      "name": "新能源ETF",
      "code": "516160",
      "price": 2.598,
      "changePct": 0.89,
      "amount": 1.19,
      "netFlow": 0.3
    },
    {
      "name": "医药ETF",
      "code": "512010",
      "price": 0.401,
      "changePct": -0.5,
      "amount": 5.61,
      "netFlow": -1.4
    }
  ],
  "nationalTeamETF": [
    {
      "name": "华泰柏瑞沪深300ETF",
      "code": "510300",
      "price": 4.748,
      "changePct": 0.42,
      "amount": 42.76,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "华夏上证50ETF",
      "code": "510050",
      "price": 3.043,
      "changePct": 0.13,
      "amount": 10.65,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "南方中证500ETF",
      "code": "510500",
      "price": 8.053,
      "changePct": 0.8,
      "amount": 14.54,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "嘉实沪深300ETF",
      "code": "159919",
      "price": 4.957,
      "changePct": 0.45,
      "amount": 6.76,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    },
    {
      "name": "易方达沪深300ETF",
      "code": "510310",
      "price": 4.611,
      "changePct": 0.52,
      "amount": 5.98,
      "share": "--",
      "shareChange": "--",
      "status": "正常"
    }
  ],
  "sectorCrowding": [
    {
      "name": "地产",
      "turnover": 1.87,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "5G",
      "turnover": 12.74,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "通信",
      "turnover": 35.85,
      "percentile": 80,
      "level": "高",
      "status": "高拥挤"
    },
    {
      "name": "芯片",
      "turnover": 6.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "电子",
      "turnover": 0.42,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "半导体",
      "turnover": 12.46,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "光伏",
      "turnover": 2.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "人工智能",
      "turnover": 1.81,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "白酒",
      "turnover": 8.6,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "有色",
      "turnover": 14.08,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "新能源",
      "turnover": 1.19,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "钢铁",
      "turnover": 1.02,
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
      "name": "新能源车",
      "turnover": 1.22,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "游戏",
      "turnover": 0.84,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "军工",
      "turnover": 2.25,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "传媒",
      "turnover": 3.24,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "券商",
      "turnover": 10.09,
      "percentile": 55,
      "level": "中",
      "status": "适中"
    },
    {
      "name": "基建",
      "turnover": 0.07,
      "percentile": 25,
      "level": "低",
      "status": "低拥挤"
    },
    {
      "name": "云计算",
      "turnover": 1.31,
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
      "nav": 4.4754,
      "ret1w": 1.25,
      "ret1m": 5.77,
      "ret3m": -11.5,
      "ret6m": -11.52,
      "ret1y": 0.14,
      "ret2y": 47.7,
      "ret3y": 157.53
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "nav": 4.2725,
      "ret1w": 2.39,
      "ret1m": 2.64,
      "ret3m": -8.29,
      "ret6m": -13.99,
      "ret1y": 9.9,
      "ret2y": 20.29,
      "ret3y": 74.17
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "nav": 5.3112,
      "ret1w": 7.29,
      "ret1m": 11.11,
      "ret3m": -10.67,
      "ret6m": -5.92,
      "ret1y": 31.29,
      "ret2y": 114.22,
      "ret3y": 249.81
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "nav": 0.7183,
      "ret1w": -0.37,
      "ret1m": -0.04,
      "ret3m": 8.29,
      "ret6m": -1.91,
      "ret1y": -10.16,
      "ret2y": -11.92,
      "ret3y": 9.1
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "nav": 2.3334,
      "ret1w": 2.3,
      "ret1m": 1.06,
      "ret3m": 6.98,
      "ret6m": -18.79,
      "ret1y": -23.88,
      "ret2y": -1.04,
      "ret3y": 25.2
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "nav": 2.8351,
      "ret1w": 1.18,
      "ret1m": -0.44,
      "ret3m": 5.95,
      "ret6m": -18.06,
      "ret1y": -29.26,
      "ret2y": -5.04,
      "ret3y": 35.19
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "nav": 5.5916,
      "ret1w": 0.3,
      "ret1m": 0.75,
      "ret3m": 8.72,
      "ret6m": -2.39,
      "ret1y": -6.03,
      "ret2y": 22.77,
      "ret3y": 57.05
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "nav": 1.917,
      "ret1w": 0.84,
      "ret1m": 2.84,
      "ret3m": -7.21,
      "ret6m": -10.13,
      "ret1y": -6.12,
      "ret2y": 12.76,
      "ret3y": 68.9
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "nav": 1.376,
      "ret1w": 1.0,
      "ret1m": 2.15,
      "ret3m": -3.47,
      "ret6m": -5.42,
      "ret1y": 0.64,
      "ret2y": 18.9,
      "ret3y": 49.38
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "nav": 3.538,
      "ret1w": 0.6,
      "ret1m": 4.43,
      "ret3m": -11.62,
      "ret6m": 6.21,
      "ret1y": 37.4,
      "ret2y": 131.09,
      "ret3y": 285.82
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "nav": 1.157,
      "ret1w": 0.52,
      "ret1m": 3.12,
      "ret3m": 13.54,
      "ret6m": 1.67,
      "ret1y": -6.16,
      "ret2y": -8.68,
      "ret3y": 2.84
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "nav": 2.486,
      "ret1w": 0.49,
      "ret1m": 5.16,
      "ret3m": 10.64,
      "ret6m": -5.01,
      "ret1y": -13.35,
      "ret2y": -8.97,
      "ret3y": 35.33
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "nav": 1.8591,
      "ret1w": 2.37,
      "ret1m": 6.23,
      "ret3m": -17.47,
      "ret6m": -41.84,
      "ret1y": -46.55,
      "ret2y": -14.48,
      "ret3y": 31.26
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "nav": 1.9495,
      "ret1w": -0.13,
      "ret1m": 1.03,
      "ret3m": 4.65,
      "ret6m": 6.28,
      "ret1y": -3.94,
      "ret2y": 2.68,
      "ret3y": 10.07
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "nav": 1.677,
      "ret1w": 1.4,
      "ret1m": 4.68,
      "ret3m": -3.15,
      "ret6m": -7.07,
      "ret1y": -3.25,
      "ret2y": 15.54,
      "ret3y": 71.74
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "nav": 2.4289,
      "ret1w": 3.45,
      "ret1m": 7.2,
      "ret3m": -20.53,
      "ret6m": -10.17,
      "ret1y": 31.11,
      "ret2y": 103.65,
      "ret3y": 218.46
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "nav": 2.5669,
      "ret1w": 1.5,
      "ret1m": 1.66,
      "ret3m": 7.13,
      "ret6m": -7.36,
      "ret1y": -10.55,
      "ret2y": -4.32,
      "ret3y": 22.3
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "nav": 1.099,
      "ret1w": -0.81,
      "ret1m": 7.85,
      "ret3m": 1.95,
      "ret6m": 8.17,
      "ret1y": 7.01,
      "ret2y": -3.6,
      "ret3y": 9.68
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "nav": 2.3418,
      "ret1w": -0.48,
      "ret1m": 0.03,
      "ret3m": 6.83,
      "ret6m": -3.47,
      "ret1y": -8.61,
      "ret2y": 8.84,
      "ret3y": 16.21
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "nav": 1.3282,
      "ret1w": 1.22,
      "ret1m": 4.23,
      "ret3m": 1.43,
      "ret6m": -1.11,
      "ret1y": 1.1,
      "ret2y": 25.38,
      "ret3y": 78.54
    },
    {
      "code": "970185",
      "name": "招商资管核心优势混合C",
      "type": "混合型",
      "nav": 1.3147,
      "ret1w": 0.41,
      "ret1m": 2.18,
      "ret3m": -5.29,
      "ret6m": -6.15,
      "ret1y": -3.78,
      "ret2y": 30.67,
      "ret3y": 49.01
    },
    {
      "code": "970184",
      "name": "招商资管核心优势混合A",
      "type": "混合型",
      "nav": 1.3982,
      "ret1w": 0.41,
      "ret1m": 2.19,
      "ret3m": -5.25,
      "ret6m": -6.06,
      "ret1y": -3.61,
      "ret2y": 31.18,
      "ret3y": 50.2
    },
    {
      "code": "970121",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合C",
      "type": "混合型",
      "nav": 1.0971,
      "ret1w": 0.09,
      "ret1m": -0.44,
      "ret3m": -0.32,
      "ret6m": -0.32,
      "ret1y": 1.21,
      "ret2y": 2.69,
      "ret3y": 9.27
    },
    {
      "code": "970119",
      "name": "兴证资管金麒麟恒睿致远一年持有期混合A",
      "type": "混合型",
      "nav": 1.0696,
      "ret1w": 0.09,
      "ret1m": -0.43,
      "ret3m": -0.26,
      "ret6m": -0.17,
      "ret1y": 1.51,
      "ret2y": 3.3,
      "ret3y": 10.6
    },
    {
      "code": "970069",
      "name": "兴证资管金麒麟消费升级混合C",
      "type": "混合型",
      "nav": 0.7369,
      "ret1w": -0.16,
      "ret1m": 0.55,
      "ret3m": 3.11,
      "ret6m": -8.58,
      "ret1y": -12.76,
      "ret2y": -2.15,
      "ret3y": 16.03
    },
    {
      "code": "970067",
      "name": "兴证资管金麒麟消费升级混合A",
      "type": "混合型",
      "nav": 0.7554,
      "ret1w": -0.16,
      "ret1m": 0.56,
      "ret3m": 3.17,
      "ret6m": -8.46,
      "ret1y": -12.54,
      "ret2y": -1.65,
      "ret3y": 17.21
    },
    {
      "code": "959991",
      "name": "兴证资管金麒麟领先优势一年持有期混合A",
      "type": "混合型",
      "nav": 2.833,
      "ret1w": 2.56,
      "ret1m": 3.55,
      "ret3m": -9.9,
      "ret6m": 0.92,
      "ret1y": 37.66,
      "ret2y": 103.58,
      "ret3y": 167.85
    },
    {
      "code": "952099",
      "name": "国泰海通君得鑫两年持有混合C",
      "type": "混合型",
      "nav": 2.5834,
      "ret1w": 0.59,
      "ret1m": 2.83,
      "ret3m": -4.38,
      "ret6m": -3.93,
      "ret1y": 3.73,
      "ret2y": 42.02,
      "ret3y": 87.86
    },
    {
      "code": "952035",
      "name": "国泰海通君得诚混合",
      "type": "混合型",
      "nav": 0.7573,
      "ret1w": 0.74,
      "ret1m": 2.34,
      "ret3m": -5.09,
      "ret6m": -16.14,
      "ret1y": -15.54,
      "ret2y": -0.41,
      "ret3y": 18.49
    },
    {
      "code": "952004",
      "name": "国泰海通君得明混合A",
      "type": "混合型",
      "nav": 4.3277,
      "ret1w": 0.63,
      "ret1m": 4.18,
      "ret3m": -11.46,
      "ret6m": 1.09,
      "ret1y": 21.0,
      "ret2y": 69.99,
      "ret3y": 147.76
    },
    {
      "code": "881007",
      "name": "招商资管智远成长混合C",
      "type": "混合型",
      "nav": 0.5245,
      "ret1w": -0.06,
      "ret1m": 0.33,
      "ret3m": -12.01,
      "ret6m": -3.21,
      "ret1y": 0.59,
      "ret2y": 29.03,
      "ret3y": 51.72
    },
    {
      "code": "880007",
      "name": "招商资管智远成长混合A",
      "type": "混合型",
      "nav": 0.5345,
      "ret1w": -0.04,
      "ret1m": 0.36,
      "ret3m": -11.97,
      "ret6m": -3.1,
      "ret1y": 0.81,
      "ret2y": 29.58,
      "ret3y": 52.93
    },
    {
      "code": "770001",
      "name": "德邦优化A",
      "type": "混合型",
      "nav": 1.2759,
      "ret1w": -0.41,
      "ret1m": 0.28,
      "ret3m": 3.26,
      "ret6m": -1.06,
      "ret1y": -1.18,
      "ret2y": -0.81,
      "ret3y": 1.0
    },
    {
      "code": "762001",
      "name": "国金国鑫发起A",
      "type": "混合型",
      "nav": 1.1472,
      "ret1w": -0.31,
      "ret1m": -0.06,
      "ret3m": 1.47,
      "ret6m": 0.47,
      "ret1y": -6.07,
      "ret2y": 4.98,
      "ret3y": 23.67
    },
    {
      "code": "750005",
      "name": "安信平稳增长混合发起A",
      "type": "混合型",
      "nav": 1.4601,
      "ret1w": 0.17,
      "ret1m": 2.11,
      "ret3m": -7.88,
      "ret6m": -14.59,
      "ret1y": -1.56,
      "ret2y": -1.1,
      "ret3y": 19.42
    },
    {
      "code": "750001",
      "name": "安信灵活配置混合A",
      "type": "混合型",
      "nav": 3.0177,
      "ret1w": -0.2,
      "ret1m": 1.31,
      "ret3m": 6.07,
      "ret6m": -6.46,
      "ret1y": -5.79,
      "ret2y": 22.1,
      "ret3y": 44.49
    },
    {
      "code": "740001",
      "name": "长安宏观策略混合A",
      "type": "混合型",
      "nav": 3.418,
      "ret1w": 2.21,
      "ret1m": 2.37,
      "ret3m": -22.18,
      "ret6m": -14.83,
      "ret1y": 41.41,
      "ret2y": 132.52,
      "ret3y": 211.29
    },
    {
      "code": "730002",
      "name": "方正富邦红利精选混合A",
      "type": "混合型",
      "nav": 1.4594,
      "ret1w": -0.19,
      "ret1m": -0.67,
      "ret3m": 3.71,
      "ret6m": -2.03,
      "ret1y": -1.31,
      "ret2y": -3.31,
      "ret3y": 7.42
    },
    {
      "code": "730001",
      "name": "方正富邦创新动力混合A",
      "type": "混合型",
      "nav": 0.6609,
      "ret1w": 2.82,
      "ret1m": 4.72,
      "ret3m": -20.23,
      "ret6m": -14.38,
      "ret1y": -5.91,
      "ret2y": 11.7,
      "ret3y": 54.16
    },
    {
      "code": "720001",
      "name": "财通价值动量混合A",
      "type": "混合型",
      "nav": 15.026,
      "ret1w": 2.21,
      "ret1m": 6.06,
      "ret3m": -7.41,
      "ret6m": 22.76,
      "ret1y": 80.41,
      "ret2y": 200.22,
      "ret3y": 360.92
    },
    {
      "code": "970205",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券C",
      "type": "债券型",
      "nav": 1.068,
      "ret1w": 0.12,
      "ret1m": 0.13,
      "ret3m": -0.54,
      "ret6m": -0.41,
      "ret1y": 0.21,
      "ret2y": 1.81,
      "ret3y": 4.81
    },
    {
      "code": "970204",
      "name": "兴证资管金麒麟兴享增利六个月持有期债券A",
      "type": "债券型",
      "nav": 1.1164,
      "ret1w": 0.12,
      "ret1m": 0.13,
      "ret3m": -0.52,
      "ret6m": -0.35,
      "ret1y": 0.32,
      "ret2y": 2.1,
      "ret3y": 5.53
    },
    {
      "code": "970182",
      "name": "招商资管招朝鑫中短债债券C",
      "type": "债券型",
      "nav": 1.0639,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.14,
      "ret6m": 0.31,
      "ret1y": 0.75,
      "ret2y": 1.39,
      "ret3y": 2.78
    },
    {
      "code": "970170",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券C",
      "type": "债券型",
      "nav": 1.098,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.11,
      "ret6m": 0.33,
      "ret1y": 0.78,
      "ret2y": 1.47,
      "ret3y": 3.84
    },
    {
      "code": "970168",
      "name": "兴证资管金麒麟悦享添利30天滚动持有债券A",
      "type": "债券型",
      "nav": 1.1072,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.12,
      "ret6m": 0.38,
      "ret1y": 0.88,
      "ret2y": 1.66,
      "ret3y": 4.27
    },
    {
      "code": "970166",
      "name": "招商资管增益添彩一个月持有期中短债债券C",
      "type": "债券型",
      "nav": 1.0756,
      "ret1w": 0.0,
      "ret1m": 0.04,
      "ret3m": 0.14,
      "ret6m": 0.35,
      "ret1y": 0.7,
      "ret2y": 1.28,
      "ret3y": 2.81
    },
    {
      "code": "970165",
      "name": "招商资管增益添彩一个月持有期中短债债券A",
      "type": "债券型",
      "nav": 1.0899,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.17,
      "ret6m": 0.43,
      "ret1y": 0.86,
      "ret2y": 1.59,
      "ret3y": 3.47
    },
    {
      "code": "952320",
      "name": "国泰海通君得盈债券C",
      "type": "债券型",
      "nav": 1.0745,
      "ret1w": 0.35,
      "ret1m": 1.05,
      "ret3m": -1.46,
      "ret6m": -2.2,
      "ret1y": 1.24,
      "ret2y": 9.53,
      "ret3y": 13.26
    },
    {
      "code": "952024",
      "name": "国泰海通君得盛债券A",
      "type": "债券型",
      "nav": 1.2271,
      "ret1w": 0.49,
      "ret1m": 1.52,
      "ret3m": -1.84,
      "ret6m": -2.97,
      "ret1y": 0.56,
      "ret2y": 3.22,
      "ret3y": 8.05
    },
    {
      "code": "952020",
      "name": "国泰海通君得盈债券A",
      "type": "债券型",
      "nav": 1.0811,
      "ret1w": 0.36,
      "ret1m": 1.07,
      "ret3m": -1.42,
      "ret6m": -2.1,
      "ret1y": 1.45,
      "ret2y": 9.98,
      "ret3y": 14.17
    },
    {
      "code": "952001",
      "name": "国泰海通君得利短债A",
      "type": "债券型",
      "nav": 1.0449,
      "ret1w": 0.01,
      "ret1m": 0.05,
      "ret3m": 0.13,
      "ret6m": 0.39,
      "ret1y": 0.85,
      "ret2y": 1.65,
      "ret3y": 3.55
    },
    {
      "code": "890011",
      "name": "长江聚利债券型A",
      "type": "债券型",
      "nav": 1.1735,
      "ret1w": 0.34,
      "ret1m": 0.57,
      "ret3m": -1.87,
      "ret6m": -3.25,
      "ret1y": -2.75,
      "ret2y": 2.58,
      "ret3y": 10.52
    },
    {
      "code": "890005",
      "name": "长江尊利债券A",
      "type": "债券型",
      "nav": 1.2212,
      "ret1w": 0.02,
      "ret1m": 0.02,
      "ret3m": 0.21,
      "ret6m": -1.11,
      "ret1y": -0.15,
      "ret2y": 5.92,
      "ret3y": 15.44
    },
    {
      "code": "881013",
      "name": "招商资管智远增利债券C",
      "type": "债券型",
      "nav": 1.1429,
      "ret1w": 0.11,
      "ret1m": 0.58,
      "ret3m": -1.12,
      "ret6m": -1.0,
      "ret1y": 0.8,
      "ret2y": 5.95,
      "ret3y": 10.57
    },
    {
      "code": "881012",
      "name": "招商资管智远增利债券A",
      "type": "债券型",
      "nav": 1.2143,
      "ret1w": 0.11,
      "ret1m": 0.59,
      "ret3m": -1.08,
      "ret6m": -0.91,
      "ret1y": 1.0,
      "ret2y": 6.38,
      "ret3y": 11.5
    },
    {
      "code": "539002",
      "name": "建信新兴市场混合(QDII)A",
      "type": "QDII",
      "nav": 2.282,
      "ret1w": 1.15,
      "ret1m": -1.93,
      "ret3m": -10.96,
      "ret6m": -8.61,
      "ret1y": 35.59,
      "ret2y": 87.97,
      "ret3y": 144.59
    },
    {
      "code": "519696",
      "name": "交银环球精选混合(QDII)A",
      "type": "QDII",
      "nav": 2.9779,
      "ret1w": -0.21,
      "ret1m": -0.38,
      "ret3m": 1.66,
      "ret6m": 1.77,
      "ret1y": 6.96,
      "ret2y": 13.2,
      "ret3y": 38.79
    },
    {
      "code": "519601",
      "name": "海富通中国海外混合",
      "type": "QDII",
      "nav": 1.9167,
      "ret1w": -0.4,
      "ret1m": 1.48,
      "ret3m": -0.43,
      "ret6m": -11.85,
      "ret1y": -8.3,
      "ret2y": 13.06,
      "ret3y": 59.84
    },
    {
      "code": "501312",
      "name": "华宝海外科技股票(QDII-LOF)A",
      "type": "QDII",
      "nav": 2.3803,
      "ret1w": 0.23,
      "ret1m": 3.24,
      "ret3m": 1.4,
      "ret6m": 3.59,
      "ret1y": 19.11,
      "ret2y": 31.12,
      "ret3y": 86.98
    },
    {
      "code": "501300",
      "name": "海富通全球收益债券人民币",
      "type": "QDII",
      "nav": 0.9372,
      "ret1w": 0.07,
      "ret1m": -0.24,
      "ret3m": -0.33,
      "ret6m": -1.07,
      "ret1y": -2.65,
      "ret2y": -3.21,
      "ret3y": -1.34
    },
    {
      "code": "501226",
      "name": "长城全球新能源车股票发起式(QDII)A",
      "type": "QDII",
      "nav": 2.6481,
      "ret1w": 0.81,
      "ret1m": -1.08,
      "ret3m": -6.43,
      "ret6m": -5.92,
      "ret1y": 24.02,
      "ret2y": 56.92,
      "ret3y": 104.31
    },
    {
      "code": "486002",
      "name": "工银全球精选股票(QDII)",
      "type": "QDII",
      "nav": 4.628,
      "ret1w": -0.43,
      "ret1m": 0.19,
      "ret3m": -0.3,
      "ret6m": -0.22,
      "ret1y": 1.87,
      "ret2y": 7.63,
      "ret3y": 27.77
    },
    {
      "code": "470888",
      "name": "汇添富香港优势精选混合(QDII)A",
      "type": "QDII",
      "nav": 1.274,
      "ret1w": 0.08,
      "ret1m": 7.87,
      "ret3m": 4.26,
      "ret6m": -3.99,
      "ret1y": -6.32,
      "ret2y": -9.84,
      "ret3y": 120.8
    },
    {
      "code": "460010",
      "name": "华泰柏瑞亚洲领导企业混合",
      "type": "QDII",
      "nav": 0.967,
      "ret1w": 0.31,
      "ret1m": 7.21,
      "ret3m": -2.52,
      "ret6m": -10.38,
      "ret1y": -13.35,
      "ret2y": -16.49,
      "ret3y": 49.0
    },
    {
      "code": "457001",
      "name": "国富亚洲机会股票(QDII)A",
      "type": "QDII",
      "nav": 2.8127,
      "ret1w": 0.22,
      "ret1m": -0.59,
      "ret3m": -6.47,
      "ret6m": -7.02,
      "ret1y": 32.52,
      "ret2y": 85.29,
      "ret3y": 142.47
    },
    {
      "code": "378546",
      "name": "摩根全球天然资源混合(QDII)A",
      "type": "QDII",
      "nav": 1.5447,
      "ret1w": 0.27,
      "ret1m": 4.97,
      "ret3m": 10.7,
      "ret6m": -1.13,
      "ret1y": -0.3,
      "ret2y": 40.45,
      "ret3y": 53.34
    },
    {
      "code": "378006",
      "name": "摩根全球新兴市场混合(QDII)",
      "type": "QDII",
      "nav": 1.6774,
      "ret1w": -0.11,
      "ret1m": -0.44,
      "ret3m": -1.69,
      "ret6m": -1.26,
      "ret1y": 5.05,
      "ret2y": 28.37,
      "ret3y": 56.46
    },
    {
      "code": "377016",
      "name": "摩根亚太优势混合(QDII)A",
      "type": "QDII",
      "nav": 1.2968,
      "ret1w": 0.05,
      "ret1m": 0.86,
      "ret3m": -0.27,
      "ret6m": -4.53,
      "ret1y": 1.32,
      "ret2y": 18.52,
      "ret3y": 41.36
    },
    {
      "code": "320017",
      "name": "诺安全球收益不动产(QDII)A",
      "type": "QDII",
      "nav": 1.3,
      "ret1w": -0.91,
      "ret1m": -2.33,
      "ret3m": -1.59,
      "ret6m": -1.89,
      "ret1y": 1.72,
      "ret2y": 5.95,
      "ret3y": -5.18
    },
    {
      "code": "320013",
      "name": "诺安全球黄金(QDII-FOF)A",
      "type": "QDII",
      "nav": 2.095,
      "ret1w": 0.1,
      "ret1m": 6.72,
      "ret3m": 5.81,
      "ret6m": -8.4,
      "ret1y": -15.63,
      "ret2y": 20.4,
      "ret3y": 58.93
    },
    {
      "code": "952303",
      "name": "国泰海通中债1-3年政金债C",
      "type": "指数型",
      "nav": 1.0101,
      "ret1w": 0.0,
      "ret1m": 0.07,
      "ret3m": 0.16,
      "ret6m": 0.54,
      "ret1y": 1.41,
      "ret2y": 1.79,
      "ret3y": 3.63
    },
    {
      "code": "952003",
      "name": "国泰海通中债1-3年政金债A",
      "type": "指数型",
      "nav": 1.009,
      "ret1w": 0.01,
      "ret1m": 0.08,
      "ret3m": 0.17,
      "ret6m": 0.52,
      "ret1y": 1.42,
      "ret2y": 1.87,
      "ret3y": 3.81
    },
    {
      "code": "740101",
      "name": "长安沪深300非周期A",
      "type": "指数型",
      "nav": 1.474,
      "ret1w": 0.75,
      "ret1m": 1.1,
      "ret3m": -3.79,
      "ret6m": -6.11,
      "ret1y": 1.73,
      "ret2y": 16.34,
      "ret3y": 39.98
    },
    {
      "code": "700002",
      "name": "平安深证300指数增强",
      "type": "指数型",
      "nav": 2.939,
      "ret1w": 1.07,
      "ret1m": 2.23,
      "ret3m": -2.84,
      "ret6m": -5.16,
      "ret1y": 2.62,
      "ret2y": 30.04,
      "ret3y": 68.62
    },
    {
      "code": "690008",
      "name": "民生中证内地资源主题指数A",
      "type": "指数型",
      "nav": 1.7017,
      "ret1w": 0.33,
      "ret1m": 2.66,
      "ret3m": 8.31,
      "ret6m": -8.31,
      "ret1y": -10.68,
      "ret2y": 42.16,
      "ret3y": 72.59
    },
    {
      "code": "673101",
      "name": "西部利得沪深300指数增强C",
      "type": "指数型",
      "nav": 2.17,
      "ret1w": 0.46,
      "ret1m": 1.47,
      "ret3m": -1.17,
      "ret6m": -2.19,
      "ret1y": 3.61,
      "ret2y": 19.64,
      "ret3y": 46.23
    },
    {
      "code": "673100",
      "name": "西部利得沪深300指数增强A",
      "type": "指数型",
      "nav": 2.2316,
      "ret1w": 0.46,
      "ret1m": 1.48,
      "ret3m": -1.13,
      "ret6m": -2.09,
      "ret1y": 3.81,
      "ret2y": 20.13,
      "ret3y": 47.41
    },
    {
      "code": "660011",
      "name": "农银中证500指数A",
      "type": "指数型",
      "nav": 2.0735,
      "ret1w": 0.91,
      "ret1m": 2.87,
      "ret3m": -5.12,
      "ret6m": -7.49,
      "ret1y": -3.72,
      "ret2y": 24.92,
      "ret3y": 69.27
    },
    {
      "code": "660008",
      "name": "农银沪深300指数A",
      "type": "指数型",
      "nav": 1.828,
      "ret1w": 0.54,
      "ret1m": 0.69,
      "ret3m": -1.54,
      "ret6m": -4.19,
      "ret1y": 0.2,
      "ret2y": 13.76,
      "ret3y": 42.52
    },
    {
      "code": "590007",
      "name": "中邮中证500指数增强A",
      "type": "指数型",
      "nav": 1.6092,
      "ret1w": 0.49,
      "ret1m": 0.97,
      "ret3m": 0.99,
      "ret6m": -6.46,
      "ret1y": -4.85,
      "ret2y": 20.11,
      "ret3y": 56.23
    },
    {
      "code": "585001",
      "name": "东吴中证新兴指数",
      "type": "指数型",
      "nav": 2.0618,
      "ret1w": 1.29,
      "ret1m": 1.42,
      "ret3m": -7.51,
      "ret6m": -3.96,
      "ret1y": 12.1,
      "ret2y": 40.27,
      "ret3y": 85.93
    },
    {
      "code": "540012",
      "name": "汇丰晋信恒生龙头指数A",
      "type": "指数型",
      "nav": 2.1709,
      "ret1w": -0.11,
      "ret1m": 0.06,
      "ret3m": 5.52,
      "ret6m": -2.26,
      "ret1y": -1.87,
      "ret2y": 8.82,
      "ret3y": 31.34
    },
    {
      "code": "539003",
      "name": "建信富时100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 1.5262,
      "ret1w": 0.07,
      "ret1m": 0.29,
      "ret3m": 3.33,
      "ret6m": 3.98,
      "ret1y": 1.86,
      "ret2y": 13.76,
      "ret3y": 34.81
    },
    {
      "code": "539001",
      "name": "建信纳斯达克100指数(QDII)A人民币",
      "type": "指数型",
      "nav": 3.4555,
      "ret1w": -0.28,
      "ret1m": -0.64,
      "ret3m": -1.03,
      "ret6m": -0.05,
      "ret1y": 13.61,
      "ret2y": 16.88,
      "ret3y": 46.16
    },
    {
      "code": "530018",
      "name": "建信深证100指数增强",
      "type": "指数型",
      "nav": 2.8706,
      "ret1w": 1.06,
      "ret1m": 1.12,
      "ret3m": -2.32,
      "ret6m": -6.12,
      "ret1y": 6.58,
      "ret2y": 27.21,
      "ret3y": 65.46
    },
    {
      "code": "970195",
      "name": "兴证资管金麒麟3个月(FOF)C",
      "type": "XZZGJQL3GYFOFC",
      "nav": 1.2025,
      "ret1w": 0.03,
      "ret1m": 8.41,
      "ret3m": -6.7,
      "ret6m": -5.28,
      "ret1y": 0.8,
      "ret2y": 24.11,
      "ret3y": 54.36
    },
    {
      "code": "970194",
      "name": "兴证资管金麒麟3个月(FOF)A",
      "type": "XZZGJQL3GYFOFA",
      "nav": 1.2041,
      "ret1w": 0.04,
      "ret1m": 8.39,
      "ret3m": -6.7,
      "ret6m": -5.32,
      "ret1y": 0.79,
      "ret2y": 23.23,
      "ret3y": 53.86
    },
    {
      "code": "952313",
      "name": "国泰海通君得益三个月持有混合(FOF)C",
      "type": "GTHTJDYSGYCYHHFOFC",
      "nav": 1.4198,
      "ret1w": -0.51,
      "ret1m": 4.29,
      "ret3m": -6.27,
      "ret6m": -10.51,
      "ret1y": -4.96,
      "ret2y": 10.83,
      "ret3y": 41.54
    },
    {
      "code": "952013",
      "name": "国泰海通君得益三个月持有混合(FOF)A",
      "type": "GTHTJDYSGYCYHHFOFA",
      "nav": 1.452,
      "ret1w": -0.51,
      "ret1m": 4.3,
      "ret3m": -6.23,
      "ret6m": -10.41,
      "ret1y": -4.77,
      "ret2y": 11.28,
      "ret3y": 42.69
    },
    {
      "code": "890008",
      "name": "长江智选3个月持有混合(FOF)A",
      "type": "CJZX3GYCYHHFOFA",
      "nav": 2.0484,
      "ret1w": -1.03,
      "ret1m": 4.4,
      "ret3m": -15.64,
      "ret6m": -10.32,
      "ret1y": 0.03,
      "ret2y": 22.51,
      "ret3y": 64.42
    },
    {
      "code": "881011",
      "name": "招商资管睿丰三个月持有期债券C",
      "type": "ZSZGRFSGYCYQZQC",
      "nav": 1.1689,
      "ret1w": -0.09,
      "ret1m": -0.18,
      "ret3m": 0.01,
      "ret6m": -0.17,
      "ret1y": -0.28,
      "ret2y": 2.37,
      "ret3y": 7.95
    },
    {
      "code": "881010",
      "name": "招商资管睿丰三个月持有期债券A",
      "type": "ZSZGRFSGYCYQZQA",
      "nav": 1.1887,
      "ret1w": -0.08,
      "ret1m": -0.17,
      "ret3m": 0.04,
      "ret6m": -0.09,
      "ret1y": -0.13,
      "ret2y": 2.7,
      "ret3y": 8.61
    },
    {
      "code": "880002",
      "name": "招商资管招朝鑫中短债债券A",
      "type": "ZSZGZCXZDZZQA",
      "nav": 1.0836,
      "ret1w": 0.01,
      "ret1m": 0.03,
      "ret3m": 0.17,
      "ret6m": 0.38,
      "ret1y": 0.89,
      "ret2y": 1.69,
      "ret3y": 3.37
    },
    {
      "code": "750003",
      "name": "安信目标收益债券C",
      "type": "AXMBSYZQC",
      "nav": 1.4106,
      "ret1w": -0.02,
      "ret1m": -0.06,
      "ret3m": 0.1,
      "ret6m": 0.09,
      "ret1y": 0.16,
      "ret2y": 0.68,
      "ret3y": 10.47
    },
    {
      "code": "750002",
      "name": "安信目标收益债券A",
      "type": "AXMBSYZQA",
      "nav": 1.4625,
      "ret1w": -0.02,
      "ret1m": -0.05,
      "ret3m": 0.14,
      "ret6m": 0.18,
      "ret1y": 0.36,
      "ret2y": 1.09,
      "ret3y": 11.36
    },
    {
      "code": "720003",
      "name": "财通收益增强债券A",
      "type": "CTSYZQZQA",
      "nav": 2.1384,
      "ret1w": 0.25,
      "ret1m": 0.03,
      "ret3m": -1.43,
      "ret6m": 8.17,
      "ret1y": 11.44,
      "ret2y": 29.82,
      "ret3y": 67.81
    },
    {
      "code": "720002",
      "name": "财通可转债债券A",
      "type": "CTKZZZQA",
      "nav": 1.2566,
      "ret1w": -0.23,
      "ret1m": -0.79,
      "ret3m": 1.17,
      "ret6m": 0.8,
      "ret1y": 3.71,
      "ret2y": 13.71,
      "ret3y": 51.2
    }
  ],
  "fundHistories": {
    "671030": [
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
      }
    ],
    "580008": [
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
      }
    ],
    "540010": [
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
      }
    ],
    "540009": [
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
      }
    ],
    "540008": [
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
      }
    ],
    "540007": [
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
      }
    ],
    "540006": [
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
      }
    ],
    "519975": [
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
      }
    ],
    "519965": [
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
      }
    ],
    "519935": [
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
      }
    ],
    "519714": [
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
      }
    ],
    "519673": [
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
      }
    ],
    "519606": [
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
      }
    ],
    "519193": [
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
      }
    ],
    "501219": [
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
      }
    ],
    "501201": [
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
      }
    ],
    "450009": [
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
      }
    ],
    "399011": [
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
      }
    ],
    "376510": [
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
      }
    ],
    "360001": [
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
      }
    ],
    "970185": [
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
      }
    ],
    "970184": [
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
      }
    ],
    "970121": [
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
      }
    ],
    "970119": [
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
      }
    ],
    "970069": [
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
      }
    ],
    "970067": [
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
      }
    ],
    "959991": [
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
      }
    ],
    "952099": [
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
      }
    ],
    "952035": [
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
      }
    ],
    "952004": [
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
      }
    ],
    "881007": [
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
      }
    ],
    "880007": [
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
      }
    ],
    "770001": [
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
      }
    ],
    "762001": [
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
      }
    ],
    "750005": [
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
      }
    ],
    "750001": [
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
      }
    ],
    "740001": [
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
      }
    ],
    "730002": [
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
      }
    ],
    "730001": [
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
      }
    ],
    "720001": [
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
      }
    ]
  },
  "fundPremium": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "discount": -0.29,
      "nav": 4.4754,
      "price": 4.4754,
      "signal": "正常"
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "discount": -0.13,
      "nav": 4.2725,
      "price": 4.2725,
      "signal": "正常"
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "discount": -0.56,
      "nav": 5.3112,
      "price": 5.3112,
      "signal": "正常"
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "discount": 0.0,
      "nav": 0.7183,
      "price": 0.7183,
      "signal": "正常"
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "discount": -0.05,
      "nav": 2.3334,
      "price": 2.3334,
      "signal": "正常"
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "discount": 0.02,
      "nav": 2.8351,
      "price": 2.8351,
      "signal": "正常"
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "discount": -0.04,
      "nav": 5.5916,
      "price": 5.5916,
      "signal": "正常"
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "discount": -0.14,
      "nav": 1.917,
      "price": 1.917,
      "signal": "正常"
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "discount": -0.11,
      "nav": 1.376,
      "price": 1.376,
      "signal": "正常"
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "discount": -0.22,
      "nav": 3.538,
      "price": 3.538,
      "signal": "正常"
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "discount": -0.16,
      "nav": 1.157,
      "price": 1.157,
      "signal": "正常"
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "discount": -0.26,
      "nav": 2.486,
      "price": 2.486,
      "signal": "正常"
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "discount": -0.31,
      "nav": 1.8591,
      "price": 1.8591,
      "signal": "正常"
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "discount": -0.05,
      "nav": 1.9495,
      "price": 1.9495,
      "signal": "正常"
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "discount": -0.23,
      "nav": 1.677,
      "price": 1.677,
      "signal": "正常"
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "discount": -0.36,
      "nav": 2.4289,
      "price": 2.4289,
      "signal": "正常"
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "discount": -0.08,
      "nav": 2.5669,
      "price": 2.5669,
      "signal": "正常"
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "discount": -0.39,
      "nav": 1.099,
      "price": 1.099,
      "signal": "正常"
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "discount": -0.0,
      "nav": 2.3418,
      "price": 2.3418,
      "signal": "正常"
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "discount": -0.21,
      "nav": 1.3282,
      "price": 1.3282,
      "signal": "正常"
    }
  ],
  "fundRiskMetrics": [
    {
      "code": "671030",
      "name": "西部利得事件驱动股票A",
      "type": "股票型",
      "maxDrawdown": 8.65,
      "sharpe": 0.01,
      "calmar": 0.01
    },
    {
      "code": "580008",
      "name": "东吴新产业精选股票A",
      "type": "股票型",
      "maxDrawdown": 3.96,
      "sharpe": 1.3,
      "calmar": 1.3
    },
    {
      "code": "540010",
      "name": "汇丰晋信科技先锋股票",
      "type": "股票型",
      "maxDrawdown": 16.66,
      "sharpe": 1.94,
      "calmar": 1.94
    },
    {
      "code": "540009",
      "name": "汇丰晋信消费红利股票",
      "type": "股票型",
      "maxDrawdown": 0.06,
      "sharpe": -2.02,
      "calmar": -2.02
    },
    {
      "code": "540008",
      "name": "汇丰晋信低碳先锋股票A",
      "type": "股票型",
      "maxDrawdown": 1.59,
      "sharpe": -3.94,
      "calmar": -3.94
    },
    {
      "code": "540007",
      "name": "汇丰晋信中小盘股票",
      "type": "股票型",
      "maxDrawdown": 0.66,
      "sharpe": -5.38,
      "calmar": -5.38
    },
    {
      "code": "540006",
      "name": "汇丰晋信大盘股票A",
      "type": "股票型",
      "maxDrawdown": 1.12,
      "sharpe": -1.05,
      "calmar": -1.05
    },
    {
      "code": "519975",
      "name": "长信量化中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 4.26,
      "sharpe": -0.78,
      "calmar": -0.78
    },
    {
      "code": "519965",
      "name": "长信量化多策略股票A",
      "type": "股票型",
      "maxDrawdown": 3.22,
      "sharpe": 0.09,
      "calmar": 0.09
    },
    {
      "code": "519935",
      "name": "长信创新驱动股票A",
      "type": "股票型",
      "maxDrawdown": 6.64,
      "sharpe": 3.97,
      "calmar": 3.97
    },
    {
      "code": "519714",
      "name": "交银消费新驱动股票",
      "type": "股票型",
      "maxDrawdown": 4.68,
      "sharpe": -0.76,
      "calmar": -0.76
    },
    {
      "code": "519673",
      "name": "银河康乐股票A",
      "type": "股票型",
      "maxDrawdown": 7.74,
      "sharpe": -1.31,
      "calmar": -1.31
    },
    {
      "code": "519606",
      "name": "国泰金鑫股票A",
      "type": "股票型",
      "maxDrawdown": 9.35,
      "sharpe": -4.15,
      "calmar": -4.15
    },
    {
      "code": "519193",
      "name": "万家消费成长",
      "type": "股票型",
      "maxDrawdown": 1.54,
      "sharpe": -0.65,
      "calmar": -0.65
    },
    {
      "code": "501219",
      "name": "华夏智胜先锋股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 7.02,
      "sharpe": -0.34,
      "calmar": -0.34
    },
    {
      "code": "501201",
      "name": "红土创新科技创新股票(LOF)A",
      "type": "股票型",
      "maxDrawdown": 10.8,
      "sharpe": 2.55,
      "calmar": 2.55
    },
    {
      "code": "450009",
      "name": "国富中小盘股票A",
      "type": "股票型",
      "maxDrawdown": 2.49,
      "sharpe": -1.58,
      "calmar": -1.58
    },
    {
      "code": "399011",
      "name": "中海医疗保健主题股票A",
      "type": "股票型",
      "maxDrawdown": 11.77,
      "sharpe": 0.55,
      "calmar": 0.55
    },
    {
      "code": "376510",
      "name": "摩根大盘蓝筹股票A",
      "type": "股票型",
      "maxDrawdown": 0.04,
      "sharpe": -1.71,
      "calmar": -1.71
    },
    {
      "code": "360001",
      "name": "光大量化股票A",
      "type": "股票型",
      "maxDrawdown": 6.35,
      "sharpe": 0.12,
      "calmar": 0.12
    }
  ],
  "news": [
    {
      "title": "中国共产党中央委员会、中华人民共和国全国人民代表大会常务委员会、中华人民共和国国务院、中国人民政治协商会议全国委员会沉痛宣告：中国共产党的优秀党员，久经考验的忠诚的共产主义战士，杰出的无产阶级革命家、政治家，党和国家的卓越领导人，中国共产党第十四届、十五届中央政治局常委，国务院原总理朱镕基同志，因病医治无效，于2026年8月12日11时06分在北京逝世，享年98岁。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:00",
      "impact": "neutral"
    },
    {
      "title": "央行发布2026年第二季度中国货币政策执行报告。中国人民银行将及时谋划出台务实管用的增量政策，加大逆周期调节力度，加力扩大内需、优化供给，推动经济持续向新向优向好发展。坚定不移走中国特色金融发展之路，进一步深化金融改革和高水平对外开放，加快建设金融强国，完善中央银行制度，构建科学稳健的货币政策体系和覆盖全面的宏观审慎管理体系，畅通货币政策传导机制。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "18:28",
      "impact": "neutral"
    },
    {
      "title": "今日，阿里云灵骏真武M890超节点实例正式上线，首批已在乌兰察布地域开售。据悉，该超节点是国内首个成功运行超2万亿参数大模型的超节点形态算力，Kimi K3和Qwen3.8 Max均已通过该实例对外提供服务。企业级客户无需自建机房，在云上即可开通64卡高速互联算力单元，最高可承载十万亿参数级MoE大模型推理。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "14:39",
      "impact": "neutral"
    },
    {
      "title": "中国人民银行北京市分行8月12日消息，2026年7月，在人民银行北京市分行统筹指导下，邮储银行北京分行成功落地北京市首笔面向澳门特别行政区多边央行数字货币桥（以下简称“货币桥”）跨境交易业务。本次业务依托货币桥向澳门特别行政区某企业支付交通一卡通结算款，实现首都数字人民币民生场景跨境应用全新突破。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:04",
      "impact": "neutral"
    },
    {
      "title": "据水利部淮河水利委员会消息，经综合研判，淮河防总、淮委于12日将河南省淮河以北地区的防汛应急响应提升至三级、洪水防御应急响应提升至Ⅲ级。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "20:00",
      "impact": "neutral"
    },
    {
      "title": "2026数字低空大会将于9月22日至23日在深圳举办，大会由鹏城实验室和未来移动通信论坛共同主办。作为国内聚焦数字低空基础设施全链路能力建设的专业峰会，数字低空大会重点关注支撑低空规模化运行的底层数字能力，围绕通信、感知、计算、人工智能、安全治理等技术方向，探索构建覆盖“连接、感知、管理、安全、应用”的数字低空基础设施体系。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:55",
      "impact": "neutral"
    },
    {
      "title": "近日，毕马威发布《2026年三季度中国经济观察报告》（以下简称《报告》），毕马威中国经济研究院院长蔡伟在接受证券时报采访时表示，三季度经济增速有望较二季度回升，全年实现4.5%—5%的增长目标仍具备较高确定性，后续政策仍需平衡好稳总量与优结构的关系，重点跟踪财政资金实物工作量转化、居民收入预期改善两大关键指标。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:40",
      "impact": "neutral"
    },
    {
      "title": "吉林省委副书记、省长胡玉亭8月12日主持召开上市公司高质量发展专题会议。胡玉亭强调，要坚持项目化工程化推进，把握资本市场发展规律，加强市值管理工作，支持企业提高主业竞争优势，增强科技创新能力，积极发展“第二曲线”，高质量健康发展。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:28",
      "impact": "neutral"
    },
    {
      "title": "过去两年，具身智能领域的展会逻辑比较简单，谁的机器人动作更流畅、谁家的产品更“像人”，谁就是焦点。但今年的上海具身智能展，“画风”有了微妙变化。8月12日，中国证券报记者在上海新国际博览中心举办的第四届上海具身智能机器人产业展览会看到，宇树科技的人形机器人和四足机器人在展台上演示动作控制。除了整机厂的具象化展示外，让不少专业观众停下脚步的，还有一些“新面孔”。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:17",
      "impact": "neutral"
    },
    {
      "title": "人民财讯8月12日电，据河南日报，8月12日，河南省委书记刘宁在郑州会见中国能源建设集团党委书记、董事长倪真一行。刘宁说，希望双方以此次会见为契机，在服务全国统一大市场枢纽节点建设、新型能源体系建设、交通绿色低碳转型、重大水利工程建设等方面，不断拓展合作领域、加大合作力度，共同书写央地合作新篇章，携手为全国发展大局作出更大贡献。",
      "tag": "快讯",
      "source": "东方财富",
      "time": "19:13",
      "impact": "neutral"
    }
  ],
  "sentimentIndex": {
    "score": 53,
    "label": "中性",
    "upDownRatio": "3,809/1,095",
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
