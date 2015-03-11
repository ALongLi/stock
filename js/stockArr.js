/*
  从2014年7月开始恢复股票池的发布。
*/

var historyArr = new Array (
/*  达成日期     股票代码  股票名称  初始价格  目标价格  达成价  累计涨幅%  行业分类   关注日期     总计天数  */
  ["2015-03-11", "002503", "搜于特", "23.30", "25.60", "25.63", "10.00", "纺织服装", "2015-03-11", "1"],
  ["2015-03-11", "002329", "皇氏集团", "26.40", "30.80", "31.71", "20.11", "食品饮料", "2015-02-04", "36"],
  ["2015-03-11", "002559", "亚威股份", "19.22", "24.00", "24.09", "25.34", "机械行业", "2014-08-20", "204"],
  ["2015-03-10", "600601", "方正科技", "5.41", "6.40", "6.43", "18.85", "计算机", "2014-11-04", "127"],
  ["2015-03-10", "000789", "万年青", "9.93", "13.50", "13.77", "38.67", "建材", "2014-09-03", "189"],
  ["2015-03-10", "601098", "中南传媒", "14.38", "20.00", "20.28", "41.03", "传播文化", "2014-08-29", "194"],
  ["2015-03-10", "002104", "恒宝股份", "12.98", "17.20", "17.73", "36.59", "电子行业", "2014-08-27", "196"],
  ["2015-03-10", "002603", "以岭药业", "31.47", "33.95", "34.09", "8.33", "医药生物", "2014-08-27", "196"],
  ["2015-03-10", "300113", "顺网科技", "27.43", "32.00", "34.21", "24.72", "计算机", "2014-08-21", "202"],
  ["2015-03-10", "600826", "兰生股份", "18.63", "25.00", "25.21", "35.32", "批发零售", "2014-08-19", "204"],
  ["2015-03-06", "002516", "江苏旷达", "21.02", "24.75", "25.17", "19.74", "纺织服装", "2014-11-19", "108"],
  ["2015-03-05", "002397", "梦洁家纺", "9.73", "11.20", "11.69", "20.14", "纺织服装", "2015-01-19", "46"],
  ["2015-03-05", "002465", "海格通信", "20.49", "24.00", "24.26", "18.40", "通信行业", "2015-01-13", "52"],
  ["2015-03-05", "300262", "巴安水务", "20.30", "27.60", "27.74", "36.65", "建筑业", "2014-12-25", "71"],
  ["2015-03-05", "300167", "迪威视讯", "16.53", "18.00", "18.60", "12.52", "通信行业", "2014-09-22", "165"],
  ["2015-03-05", "000876", "新 希 望", "13.96", "19.11", "19.48", "39.54", "农林牧渔", "2014-08-29", "189"],
  ["2015-03-05", "002410", "广联达", "26.44", "31.85", "32.31", "22.20", "计算机", "2014-07-01", "248"],
  ["2015-03-04", "300179", "四方达", "13.13", "15.95", "17.13", "30.46", "基础化工", "2015-02-10", "23"],
  ["2015-03-04", "300310", "宜通世纪", "17.41", "20.00", "20.43", "17.35", "通信设备", "2015-02-04", "29"],
  ["2015-03-04", "002612", "朗姿股份", "27.46", "30.40", "31.83", "15.91", "制造业", "2015-01-29", "35"],
  ["2015-03-04", "600446", "金证股份", "72.05", "85.00", "86.83", "20.51", "计算机", "2015-01-29", "35"],
  ["2015-03-04", "002030", "达安基因", "24.80", "28.00", "35.83", "44.48", "医药生物", "2015-01-26", "38"],
  ["2015-03-04", "000807", "云铝股份", "5.86", "7.21", "7.91", "34.98", "有色金属", "2015-01-19", "45"],
  ["2015-03-04", "000960", "锡业股份", "17.35", "20.00", "20.49", "18.10", "有色金属", "2015-01-13", "51"],
  ["2015-03-04", "002605", "姚记扑克", "17.13", "22.00", "23.08", "34.73", "其他行业", "2015-01-13", "51"],
  ["2015-03-04", "300291", "华录百纳", "32.60", "46.55", "48.28", "48.10", "传播文化", "2014-12-25", "70"],
  ["2015-03-04", "300166", "东方国信", "31.70", "38.50", "43.25", "36.44", "计算机", "2014-12-16", "79"],
  ["2015-03-04", "300289", "利德曼", "31.51", "37.60", "37.89", "20.25", "制造业", "2014-12-15", "80"],
  ["2015-03-04", "300212", "易华录", "32.71", "44.00", "48.94", "49.62", "计算机", "2014-12-15", "80"],
  ["2015-03-04", "002215", "诺 普 信", "10.24", "13.00", "13.20", "28.91", "化工", "2014-10-31", "125"],
  ["2015-03-04", "600240", "华业地产", "7.19", "10.50", "11.14", "54.94", "房地产", "2014-10-31", "125"],
  ["2015-03-04", "002572", "索菲亚", "24.04", "27.00", "28.80", "19.80", "造纸印刷", "2014-10-31", "125"],
  ["2015-03-04", "600398", "海澜之家", "10.83", "13.60", "13.66", "26.13", "纺织服装", "2014-10-27", "129"],
  ["2015-03-04", "002658", "雪迪龙", "25.64", "31.20", "39.99", "55.97", "制造业", "2014-10-24", "132"],
  ["2015-03-04", "300298", "三诺生物", "43.90", "44.48", "45.00", "2.51", "医药生物", "2014-09-22", "164"],
  ["2015-03-04", "300020", "银江股份", "27.90", "38.00", "42.50", "52.33", "计算机", "2014-08-12", "205"],
  ["2015-03-04", "600305", "恒顺醋业", "16.40", "19.50", "19.87", "21.16", "食品饮料", "2014-08-12", "205"],
  ["2015-03-04", "600323", "瀚蓝环境", "12.72", "16.25", "16.53", "29.95", "水电燃气", "2014-08-12", "205"],
  ["2015-03-04", "002396", "星网锐捷", "26.98", "31.50", "33.90", "25.65", "通信行业", "2014-08-11", "206"],
  ["2015-03-04", "002340", "格林美", "12.79", "16.45", "17.24", "34.79", "电力设备", "2014-08-11", "206"],
  ["2015-03-04", "002303", "美盈森", "13.10", "18.30", "21.79", "66.34", "造纸印刷", "2014-07-29", "219"],
  ["2015-03-04", "300003", "乐普医疗", "19.84", "29.00", "30.30", "52.72", "医药生物", "2014-07-23", "225"],
  ["2015-03-04", "002672", "东江环保", "26.20", "38.00", "42.99", "64.08", "环保", "2014-07-22", "226"],
  ["2015-03-04", "002281", "光迅科技", "33.09", "42.00", "42.89", "29.62", "通信行业", "2014-07-17", "231"],
  ["2015-03-04", "300299", "富春通信", "12.60", "16.00", "16.23", "28.81", "通信行业", "2014-07-15", "233"],
  ["2015-03-04", "002444", "巨星科技", "10.55", "14.00", "14.50", "37.44", "机械行业", "2014-07-10", "238"],
  ["2015-02-26", "002631", "德尔家居", "8.95",  "13.20", "16.82", "87.93", "家居用品", "2014-07-09", "233"],
  ["2015-02-26", "002364", "中恒电气", "21.89", "22.50", "26.25", "19.92", "电力设备", "2014-10-31", "119"],
  ["2015-02-26", "300315", "掌趣科技", "15.83", "20.00", "22.35", "41.19", "软件服务", "2014-08-25", "186"],
  ["2015-02-26", "002555", "顺荣三七", "45.90", "54.00", "59.00", "28.54", "汽车",     "2014-12-15", "74"],
  ["2015-02-26", "002108", "沧州明珠", "18.48", "20.00", "21.61", "16.94", "化工",     "2014-08-14", "197"],
  ["2015-02-26", "002601", "佰利联",   "22.08", "25.50", "26.99", "22.24", "化工",     "2014-08-21", "190"],
  ["2015-02-26", "002325", "洪涛股份", "8.68",  "12.00", "12.60", "45.16", "建筑",     "2014-07-16", "226"],
  ["2015-02-26", "600518", "康美药业", "14.47", "20.80", "21.74", "50.24", "医药生物", "2014-08-28", "183"],
  ["2015-02-05", "300170", "汉得信息", "13.52", "16.00", "20.64", "52.66", "计算机",   "2014-08-25", "165"],
  ["2015-02-05", "300271", "华宇软件", "47.25", "50.75", "55.45", "17.35", "软件服务", "2015-01-19", "18"],
  ["2015-02-05", "300312", "邦讯技术", "19.50", "26.00", "28.01", "43.64", "软件服务", "2014-08-18", "172"],
  ["2015-02-05", "300010", "立思辰",   "25.54", "26.86", "28.27", "10.69", "计算机",   "2015-02-04", "2"],
  ["2015-02-05", "300295", "三六五网", "86.80", "125.00","129.98","49.75", "信息技术", "2014-12-30", "38"],
  ["2015-02-05", "002304", "洋河股份", "63.65", "81.80", "82.48", "29.58", "食品饮料", "2014-09-30", "129"],
  ["2015-01-28", "002539", "新都化工", "15.90", "18.00", "20.95", "31.76", "化工",     "2014-10-28", "93"],
  ["2015-01-28", "002385", "大北农",   "13.69", "15.90", "17.74", "29.58", "农林牧渔", "2014-08-27", "155"],
  ["2015-01-28", "300005", "探路者",   "18.20", "21.60", "23.41", "28.63", "纺织服装", "2014-12-15", "45"],
  ["2015-01-28", "601801", "皖新传媒", "17.22", "18.50", "19.93", "15.74", "传播文化", "2014-11-22", "68"],
  ["2015-01-28", "603555", "贵人鸟",   "22.41", "25.00", "26.05", "16.24", "纺织服装", "2015-01-26", "3"],
  ["2015-01-28", "002266", "浙富控股", "7.46",  "8.70",  "9.09",  "21.85", "电力设备", "2014-07-03", "210"],
  ["2015-01-28", "600079", "人福医药", "27.32", "29.25", "30.50", "11.64", "医药生物", "2014-08-18", "164"],
  ["2015-01-28", "000635", "英 力 特", "10.16", "12.00", "12.38", "21.85", "化工",     "2014-08-15", "167"],
  ["2015-01-28", "600438", "通威股份", "10.08", "10.60", "10.84", "7.54",  "农林牧渔", "2014-09-03", "148"],
  ["2015-01-28", "002223", "鱼跃医疗", "27.42", "30.00", "30.48", "11.16", "医药生物", "2014-08-04", "178"],
  ["2015-01-28", "002521", "齐峰新材", "9.88",  "12.60", "12.76", "29.15", "造纸印刷", "2014-08-11", "171"],
  ["2015-01-26", "002081", "金 螳 螂", "14.16", "20.00", "25.38", "79.88", "建筑",     "2014-07-01", "210"],
  ["2015-01-26", "300002", "神州泰岳", "15.44", "18.90", "22.50", "42.81", "通信行业", "2014-10-31", "88"],
  ["2015-01-26", "002095", "生 意 宝", "33.00", "45.00", "52.00", "57.58", "计算机",   "2014-12-15", "43"],
  ["2015-01-26", "002372", "伟星新材", "14.02", "16.20", "17.74", "26.53", "化工",     "2014-10-28", "91"],
  ["2015-01-26", "000063", "中兴通讯", "13.50", "18.40", "20.05", "48.52", "通信行业", "2014-07-16", "195"],
  ["2015-01-26", "300015", "爱尔眼科", "26.35", "30.50", "32.66", "23.95", "医药生物", "2014-08-15", "165"],
  ["2015-01-26", "600783", "鲁信创投", "26.82", "30.47", "32.57", "21.44", "制造业",   "2015-01-13", "14"],
  ["2015-01-26", "002311", "海大集团", "11.51", "13.25", "13.98", "21.46", "农林牧渔", "2014-08-27", "153"],
  ["2014-12-30", "000726", "鲁 泰Ａ",  "9.43",  "11.00", "12.09", "28.21", "纺织服装", "2014-11-04", "57"],
  ["2014-12-30", "002318", "久立特材", "25.94", "30.00", "30.96", "19.35", "钢铁行业", "2014-10-28", "64"],
  ["2014-12-25", "000830", "鲁西化工", "3.95",  "5.10",  "5.61",  "42.03", "化工",     "2014-08-19", "129"],
  ["2014-12-25", "600761", "安徽合力", "10.51", "15.00", "15.65", "48.91", "机械行业", "2014-07-08", "171"],
  ["2014-12-25", "600199", "金种子酒", "8.68",  "11.50", "11.82", "36.18", "食品饮料", "2014-08-27", "121"],
  ["2014-12-25", "600801", "华新水泥", "7.54",  "10.30", "10.42", "38.20", "建材",     "2014-08-25", "123"],
  ["2014-12-15", "600804", "鹏博士",   "15.75", "18.00", "19.70", "25.08", "传播文化", "2014-07-02", "167"],
  ["2014-12-15", "002293", "罗莱家纺", "21.67", "25.84", "27.63", "27.50", "纺织服装", "2014-08-25", "113"],
  ["2014-12-15", "600998", "九州通",   "16.20", "18.50", "20.29", "25.25", "医药生物", "2014-08-28", "110"],
  ["2014-12-15", "000623", "吉林敖东", "23.26", "30.76", "32.90", "41.44", "医药生物", "2014-11-18", "28"],
  ["2014-12-15", "300224", "正海磁材", "25.41", "30.00", "31.50", "23.97", "有色金属", "2014-07-15", "154"],  
  ["2014-12-15", "601633", "长城汽车", "31.05", "38.00", "39.55", "27.38", "汽车",     "2014-08-25", "113"],
  ["2014-12-15", "600426", "华鲁恒升", "8.91",  "10.00", "10.57", "18.63", "化工",     "2014-08-25", "113"],
  ["2014-12-15", "600409", "三友化工", "4.82",  "6.60",  "6.90",  "43.15",  "化工",     "2014-08-04", "134"],
  ["2014-12-15", "601607", "上海医药", "12.94", "15.75", "16.35", "26.35", "医药生物", "2014-08-29", "109"], 
  ["2014-12-15", "300136", "信维通信", "16.69", "20.40", "20.74", "24.27", "通信行业", "2014-10-24", "53"],
  ["2014-12-15", "600486", "扬农化工", "22.76", "27.00", "27.89", "22.54", "化工",     "2014-08-27", "111"],
  ["2014-12-15", "600096", "云天化",   "9.09",  "9.50",  "9.80",  "7.81",  "化工",     "2014-08-26", "112"],
  ["2014-12-15", "300273", "和佳股份", "23.42", "24.40", "25.19", "7.51",  "制造业",   "2014-09-14", "93"], 
  ["2014-12-15", "600085", "同仁堂",   "18.80", "21.30", "18.80", "21.30", "医药生物", "2014-08-26", "112"],
  ["2014-12-15", "600502", "安徽水利", "8.49",  "12.60", "12.87", "51.59", "建筑工程", "2014-09-09", "98"], 
  ["2014-12-15", "002271", "东方雨虹", "25.46", "31.75", "38.13", "49.76", "建筑",     "2014-07-16", "153"],
  ["2014-12-15", "002465", "海格通信", "15.82", "18.80", "22.10", "39.70", "通信行业", "2014-08-21", "117"],
  ["2014-12-15", "600376", "首开股份", "5.26",  "6.08",  "7.16",  "36.12", "房地产",   "2014-08-04", "134"],
  ["2014-12-15", "600783", "鲁信创投", "17.70", "23.01", "27.08", "52.99", "制品业",   "2014-11-11", "35"], 
  ["2014-12-15", "002588", "史丹利",   "32.53", "33.60", "38.90", "19.77", "化工",     "2014-10-31", "46"],
  ["2014-12-15", "002142", "宁波银行", "9.85",  "11.50", "13.10", "32.99", "银行业",   "2014-10-28", "49"], 
  ["2014-12-15", "000596", "古井贡酒", "22.88", "28.40", "32.55", "42.26", "食品饮料", "2014-08-13", "125"],
  ["2014-12-15", "300166", "东方国信", "23.00", "28.80", "31.70", "37.83", "计算机",   "2014-10-27", "50"], 
  ["2014-12-15", "002269", "美邦服饰", "9.35",  "11.40", "12.68", "35.83", "纺织服装", "2014-08-26", "112"],
  ["2014-12-15", "000002", "万科A",    "9.38",  "10.00", "11.14", "18.66", "房地产",   "2014-08-19", "119"],
  ["2014-12-15", "000786", "北新建材", "18.86", "22.40", "24.66", "30.75", "建材",     "2014-10-20", "57"],
  ["2014-12-15", "601166", "兴业银行", "10.45", "11.50", "12.66", "21.15", "银行业",   "2014-10-31", "46"],
  ["2014-12-15", "601328", "交通银行", "4.27",  "5.00",  "5.50",  "29.04", "银行业",   "2014-08-25", "113"],
  ["2014-11-18", "600750", "江中药业", "17.02", "20.75", "21.68", "27.38", "医药生物", "2014-08-18", "93"],
  ["2014-11-13", "603369", "今世缘",   "25.81", "28.80", "29.99", "16.20", "食品饮料", "2014-08-08", "97"],
  ["2014-11-13", "002563", "森马服饰", "29.69", "38.00", "29.69", "27.99", "纺织服装", "2014-08-27", "78"],
  ["2014-11-12", "300348", "长亮科技", "59.62", "67.50", "79.60", "33.51", "软件服务", "2014-11-04", "9" ],
  ["2014-11-12", "600588", "用友软件", "15.27", "19.70", "21.80", "42.76", "计算机",   "2014-07-17", "119"],
  ["2014-11-12", "300385", "雪浪环境", "53.70", "55.00", "58.90", "9.68",  "制造业",   "2014-10-24", "20"],
  ["2014-11-12", "002042", "华孚色纺", "4.37",  "5.10",  "5.28",  "20.82", "纺织服装", "2014-08-25", "80"],
  ["2014-11-12", "002366", "丹甫股份", "28.70", "33.75", "34.86", "21.46", "家电行业", "2014-09-03", "71"],
  ["2014-11-12", "601233", "桐昆股份", "6.96",  "8.50",  "8.75",  "25.72", "化工",     "2014-08-18", "87"],
  ["2014-11-12", "300295", "三六五网", "66.09", "85.97", "86.87", "31.44", "计算机",   "2014-08-14", "91"],
  ["2014-11-12", "600809", "山西汾酒", "14.30", "18.50", "18.67", "30.56", "食品饮料", "2014-07-15", "121"],
  ["2014-11-04", "300005", "探路者",   "16.79", "18.90", "20.70", "23.29", "纺织服装", "2014-09-05", "61"],
  ["2014-11-04", "600176", "中国玻纤", "9.18",  "10.50", "11.18", "21.79", "化工",     "2014-08-21", "76"],
  ["2014-11-04", "002470", "金正大",   "20.65", "25.00", "26.60", "28.81", "化工",     "2014-08-07", "90"],
  ["2014-11-04", "002491", "通鼎光电", "16.69", "21.00", "22.32", "33.73", "通信行业", "2014-08-14", "83"],
  ["2014-11-04", "601009", "南京银行", "9.80",  "10.40", "10.72", "9.39",  "银行业",   "2014-10-31", "5" ],
  ["2014-10-24", "300314", "戴维医疗", "24.04", "25.50", "27.63", "14.93", "医药生物", "2014-09-24", "31"],
  ["2014-10-24", "300180", "华峰超纤", "17.66", "20.50", "21.22", "20.16", "化工",     "2014-08-18", "68"],
  ["2014-10-24", "601009", "南京银行", "8.15",  "9.00",  "9.21",  "13.01", "银行业",   "2014-08-28", "58"],
  ["2014-10-24", "002215", "诺普信",   "7.92",  "10.00", "10.19", "28.66", "化工",     "2014-08-19", "67"],
  ["2014-10-24", "300019", "硅宝科技", "13.20", "15.80", "16.02", "21.36", "化工",     "2014-08-12", "74"],
  ["2014-10-24", "002432", "九安医疗", "24.52", "26.00", "26.21", "6.89",  "医药生物", "2014-09-24", "31"],
  ["2014-10-24", "300289", "利德曼",   "28.07", "30.60", "32.09", "14.32", "制造业",   "2014-09-15", "40"],
  ["2014-10-24", "300357", "我武生物", "35.34", "37.50", "38.42", "8.72",  "医药生物", "2014-09-24", "31"],
  ["2014-10-15", "002329", "皇氏乳业", "17.30", "19.60", "21.00", "21.39", "食品饮料", "2014-08-27", "50"],
  ["2014-10-15", "002007", "华兰生物", "26.67", "30.52", "31.55", "18.30", "医药生物", "2014-08-27", "50"],
  ["2014-10-15", "002604", "龙力生物", "13.65", "15.30", "15.58", "14.14", "食品制造", "2014-08-22", "55"],
  ["2014-10-15", "002254", "泰和新材", "10.41", "11.50", "11.67", "12.10", "基础化工", "2014-08-29", "48"],
  ["2014-10-09", "000998", "隆平高科", "13.70", "15.75", "18.24", "33.14", "农林牧渔", "2014-08-06", "65"],
  ["2014-09-30", "300016", "北陆药业", "14.28", "15.75", "17.11", "19.82", "医药生物", "2014-08-22", "40"],
  ["2014-09-30", "002073", "软控股份", "9.58",  "11.48", "12.30", "28.39", "计算机",   "2014-07-15", "78"],
  ["2014-09-30", "002324", "普利特",   "16.55", "19.00", "19.90", "20.24", "基础化工", "2014-08-29", "33"],
  ["2014-09-30", "000545", "金浦钛业", "10.63", "11.75", "12.28", "15.52", "医药生物", "2014-09-03", "28"],
  ["2014-09-30", "600249", "两面针",   "6.04",  "7.00",  "7.22",  "19.54", "化工",     "2014-08-18", "44"],
  ["2014-09-30", "300310", "宜通世纪", "18.66", "20.00", "20.49", "9.81",  "软件服务", "2014-08-06", "56"],
  ["2014-09-30", "300177", "中海达",   "14.50", "18.50", "18.92", "30.48", "通信行业", "2014-08-04", "58"],
  ["2014-09-30", "002142", "宁波银行", "9.70",  "10.06", "10.28", "5.98",  "银行业",   "2014-08-25", "37"],
  ["2014-09-30", "000599", "青岛双星", "4.93",  "5.69",  "5.77",  "17.04", "化工",     "2014-07-04", "89"],
  ["2014-09-23", "002368", "太极股份", "36.51", "43.05", "45.01", "23.28", "计算机",   "2014-07-09", "77"],
  ["2014-09-23", "002588", "史丹利",   "23.12", "27.00", "27.71", "19.85", "化工",     "2014-07-30", "56"],
  ["2014-09-23", "000893", "东凌粮油", "11.70", "13.00", "13.27", "13.42", "农林牧渔", "2014-08-27", "28"],
  ["2014-09-22", "002020", "京新药业", "17.58", "19.95", "20.67", "17.58", "医药生物", "2014-08-26", "28"],
  ["2014-09-22", "002331", "皖通科技", "12.26", "15.00", "15.33", "25.04", "计算机",   "2014-08-20", "34"],
  ["2014-09-22", "002539", "新都化工", "12.32", "15.00", "15.18", "23.21", "化工",     "2014-08-11", "43"],
  ["2014-09-22", "002433", "太安堂",   "11.56", "13.50", "13.51", "16.87", "医药生物", "2014-08-19", "35"],
  ["2014-09-16", "600965", "福成五丰", "5.47",  "7.00",  "7.28",  "33.09", "农林牧渔", "2014-09-03", "15"],
  ["2014-09-16", "002354", "科冕木业", "49.50", "55.00", "56.67", "14.48", "造纸印刷", "2014-07-04", "76"],
  ["2014-07-30", "002462", "嘉事堂",   "18.73", "22.72", "23.76", "26.86", "医药生物", "2014-07-30", "45"],
  ["2014-08-25", "002029", "七 匹 狼", "9.28",  "10.00", "10.14", "9.27",  "纺织服装", "2014-08-25", "19"],
  ["2014-08-25", "002022", "科华生物", "26.00", "28.00", "28.30", "8.85",  "医药生物", "2014-08-25", "19"],
  ["2014-08-27", "002318", "久立特材", "20.19", "22.40", "22.43", "11.09", "钢铁行业", "2014-08-27", "17"],
  ["2014-09-12", "600240", "华业地产", "5.53",  "6.50",  "6.82",  "23.33", "房地产",   "2014-07-08", "67"],
  ["2014-09-04", "600226", "升华拜克", "6.51",  "8.00",  "8.37",  "28.57", "化工",     "2014-07-25", "43"],
  ["2014-09-03", "000670", "盈方微",   "9.63",  "12.50", "12.67", "31.57", "计算机",   "2014-07-18", "49"],
  ["2014-08-28", "002299", "圣农发展", "12.70", "14.80", "15.39", "21.18", "农林牧渔", "2014-07-31", "29"],
  ["2014-08-22", "002364", "中恒电气", "18.43", "21.35", "21.51", "16.71", "电力设备", "2014-07-31", "23"],
  ["2014-08-21", "300298", "三诺生物", "36.21", "38.92", "38.92", "9.50",  "医药生物", "2014-08-12", "10"],
  ["2014-08-18", "002071", "长城影视", "19.81", "20.96", "21.53", "8.68",  "造纸印刷", "2014-07-30", "20"],
  ["2014-08-15", "600426", "华鲁恒升", "7.58",  "8.50",  "8.75",  "15.44", "化工",     "2014-07-14", "33"],
  ["2014-08-12", "002318", "久立特材", "17.63", "20.00", "20.32", "15.26", "钢铁行业", "2014-07-10", "34"],
  ["2014-08-06", "002638", "勤上光电", "14.77", "16.54", "16.94", "14.69", "元器件",   "2014-07-18", "21"],
  ["2014-08-05", "300289", "利德曼",   "26.09", "28.00", "28.07", "7.59",  "医药生物", "2014-07-25", "12"],
  ["2014-08-05", "002714", "牧原股份", "47.55", "51.03", "52.53", "10.47", "农林牧渔", "2014-07-31", "6" ],
  ["2014-08-04", "002589", "瑞康医药", "27.06", "30.45", "33.45", "23.61", "医药生物", "2014-07-07", "29"],
  ["2014-07-28", "000001", "平安银行", "9.60",  "10.50", "10.78", "12.29", "银行业",   "2014-07-21", "8" ],
  ["2014-07-10", "300224", "正海磁材", "22.70", "25.00", "25.35", "11.67", "有色金属", "2014-07-04", "7" ]
);

var indexArr = new Array("0000001","1399001","1399006","1399300");

var hqArr = new Array(
/* 股票代码   所属行业     关注日期   前日收盘价   目标价    评级 */
  ["0600141", "基础化工", "2015-03-11", "15.87",  "20.00",  "买入"],
  ["1002631", "家居用品", "2015-03-09", "19.73",  "29.40",  "买入"],
  ["1300075", "计算机",   "2015-03-04", "45.41",  "53.00",  "买入"],
  ["1002392", "钢铁行业", "2015-03-04", "13.66",  "16.20",  "买入"],
  ["1002405", "计算机",   "2015-03-04", "29.38",  "32.37",  "增持"],
  ["0600502", "建筑工程", "2015-02-25", "12.85",  "16.50",  "买入"],
  ["1002135", "建筑工程", "2015-02-25", "6.52",   "9.00",   "买入"],
  ["1002095", "计算机",   "2015-02-25", "89.70",  "95.00",  "买入"],
  ["1002462", "医药生物", "2015-02-12", "35.36",  "41.00",  "买入"],
  ["1002178", "计算机",   "2015-02-12", "18.80",  "24.20",  "增持"],
  ["0600970", "建筑工程", "2015-02-12", "11.29",  "14.50",  "买入"],
  ["1002372", "基础化工", "2015-02-10", "16.62",  "21.06",  "买入"],
  ["1002641", "制造业",   "2015-02-10", "10.69",  "13.50",  "买入"],
  ["1002537", "机械行业", "2015-02-10", "21.66",  "32.70",  "买入"],
  ["1002318", "钢铁行业", "2015-02-04", "41.18",  "60.00",  "买入"],
  ["0600373", "传播文化", "2015-02-04", "14.66",  "21.50",  "买入"],
  ["1000619", "建筑工程", "2015-02-04", "9.75",   "13.00",  "买入"],
  ["1300135", "石油化工", "2015-01-30", "11.25",  "13.00",  "增持"],
  ["0600588", "计算机",   "2015-01-30", "37.00",  "43.00",  "买入"],
  ["0600809", "食品饮料", "2015-01-30", "21.45",  "22.50",  "增持"],
  ["1002324", "化工",     "2015-01-30", "25.41",  "30.00",  "增持"],
  ["1300100", "汽车  ",   "2015-01-29", "13.52",  "18.00",  "买入"],
  ["1002154", "纺织服装", "2015-01-28", "10.91",  "12.60",  "买入"],
  ["0600426", "化工",     "2015-01-28", "11.03",  "12.00",  "增持"],
  ["1300253", "软件服务", "2015-01-28", "99.79",  "120.00", "买入"],
  ["0601633", "汽车",     "2015-01-28", "46.13",  "60.00",  "买入"],
  ["0600172", "机械行业", "2015-01-26", "8.36",   "12.24",  "买入"],
  ["0600277", "化工",     "2015-01-26", "9.07",   "11.50",  "买入"],
  ["1002085", "汽车",     "2015-01-26", "32.97",  "45.00",  "买入"],
  ["1002098", "纺织服装", "2015-01-26", "18.62",  "21.00",  "买入"],
  ["1002250", "化工",     "2015-01-13", "15.90",  "22.00",  "买入"],
  ["0601933", "批发零售", "2015-01-13", "8.57",   "12.26",  "买入"],
  ["1002553", "汽车",     "2015-01-13", "11.80",  "18.00",  "买入"],
  ["1000800", "汽车",     "2015-01-13", "17.40",  "22.00",  "买入"],
  ["0600761", "机械行业", "2015-01-13", "14.62",  "23.40",  "买入"],
  ["0600335", "机械行业", "2015-01-13", "20.59",  "26.00",  "买入"],
  ["1000670", "制造业",   "2014-12-30", "10.87",  "14.30",  "增持"],
  ["1300393", "制造业",   "2014-12-22", "38.73",  "52.85",  "买入"],
  ["0600211", "医药生物", "2014-12-22", "35.30",  "43.07",  "增持"],
  ["1300136", "通信行业", "2014-12-22", "20.47",  "25.50",  "买入"],
  ["0600500", "化工",     "2014-12-16", "9.58",   "11.00",  "增持"],
  ["1002416", "批发零售", "2014-12-16", "13.69",  "18.40",  "买入"],
  ["1002470", "化工",     "2014-12-15", "29.54",  "37.80",  "买入"],
  ["1002491", "通信行业", "2014-12-15", "19.70",  "28.00",  "买入"],
  ["1300199", "医药生物", "2014-12-15", "32.90",  "39.00",  "增持"],
  ["1300064", "机械行业", "2014-12-01", "7.05",   "9.60",   "买入"],
  ["1002662", "制造业",   "2014-12-01", "15.16",  "20.00",  "买入"],
  ["1000798", "农林牧渔", "2014-11-18", "10.04",  "13.00",  "买入"],
  ["1002453", "化工",     "2014-11-18", "7.74",   "9.00",   "增持"],
  ["1002185", "电子行业", "2014-11-18", "14.32",  "17.90",  "买入"],
  ["0603766", "制品业",   "2014-11-11", "17.44",  "25.00",  "买入"],
  ["1002727", "批发零售", "2014-11-04", "47.73",  "57.00",  "买入"],
  ["1000599", "化工",     "2014-10-31", "6.71",   "7.50",   "买入"],
  ["1002254", "化工",     "2014-10-31", "11.63",  "13.50",  "增持"],
  ["1000919", "医药生物", "2014-10-31", "15.61",  "18.80",  "买入"],
  ["1002073", "计算机",   "2014-10-31", "13.32",  "16.00",  "买入"],
  ["1002174", "造纸印刷", "2014-10-31", "50.81",  "63.35",  "买入"],
  ["1002331", "计算机",   "2014-10-31", "15.95",  "20.00",  "买入"],
  ["1300339", "软件服务", "2014-10-27", "24.31",  "27.30",  "买入"],
  ["1002437", "医药生物", "2014-10-20", "25.96",  "31.60",  "增持"],
  ["1300066", "机械行业", "2014-10-15", "15.59",  "19.00",  "买入"],
  ["1300258", "制造业",   "2014-10-09", "17.98",  "25.00",  "买入"],
  ["1002595", "机械行业", "2014-10-08", "28.37",  "40.00",  "买入"],
  ["0600584", "电子行业", "2014-09-30", "11.40",  "16.00",  "买入"],
  ["1000860", "农林牧渔", "2014-09-30", "17.31",  "23.80",  "买入"],
  ["1002536", "汽车",     "2014-09-26", "25.82",  "30.00",  "买入"],
  ["1002619", "制造业",   "2014-09-22", "23.07",  "28.80",  "买入"],
  ["1002412", "医药生物", "2014-09-22", "18.41",  "20.65",  "增持"],
  ["1300078", "电子行业", "2014-09-17", "23.98",  "30.10",  "买入"],
  ["1002261", "通信行业", "2014-09-03", "22.32",  "30.00",  "买入"],
  ["0600175", "房地产",   "2014-09-03", "6.82",   "9.00",   "买入"],
  ["0600256", "基础化工", "2014-08-29", "8.98",   "9.50",   "买入"],
  ["1002458", "农林牧渔", "2014-08-28", "12.48",  "15.40",  "买入"],
  ["1000882", "房地产",   "2014-08-27", "3.30",   "4.68",   "买入"],
  ["0600196", "医药生物", "2014-08-27", "18.79",  "27.75",  "买入"],
  ["1002207", "石油化工", "2014-08-27", "14.56",  "20.00",  "买入"],
  ["0600535", "医药生物", "2014-08-27", "38.05",  "50.10",  "买入"],
  ["0600309", "化工",     "2014-08-27", "16.08",  "24.50",  "买入"],
  ["0600519", "食品饮料", "2014-08-27", "157.72", "212.00", "买入"],
  ["1300326", "制造业",   "2014-08-27", "31.22",  "36.75",  "买入"],
  ["1300147", "医药生物", "2014-08-27", "20.07",  "25.60",  "增持"],
  ["0600401", "造纸印刷", "2014-08-27", "9.79",   "11.00",  "增持"],
  ["1002594", "汽车",     "2014-08-25", "49.98",  "60.00",  "买入"],
  ["0600585", "建材",     "2014-08-25", "17.59",  "23.80",  "买入"],
  ["0600422", "医药生物", "2014-08-25", "25.69",  "32.10",  "增持"],
  ["1002327", "纺织服装", "2014-08-21", "13.08",  "16.80",  "买入"],
  ["1002041", "农林牧渔", "2014-08-21", "31.68",  "38.15",  "买入"],
  ["1000826", "公共事业", "2014-08-21", "22.90",  "30.00",  "买入"],
  ["0600699", "化工",     "2014-08-21", "27.49",  "35.00",  "买入"],
  ["1002484", "电子行业", "2014-08-21", "19.15",  "21.20",  "买入"],
  ["1002038", "医药生物", "2014-08-21", "41.28",  "50.50",  "买入"],
  ["1002597", "食品饮料", "2014-08-20", "15.70",  "18.00",  "增持"],
  ["1002675", "医药生物", "2014-08-19", "19.99",  "25.00",  "买入"],
  ["0600594", "医药生物", "2014-08-18", "40.47",  "51.90",  "买入"],
  ["1000028", "医药生物", "2014-08-18", "48.32",  "61.05",  "买入"],
  ["1300039", "医药生物", "2014-08-13", "14.55",  "18.50",  "增持"],
  ["0600557", "医药生物", "2014-08-12", "28.84",  "33.60",  "增持"],
  ["1300110", "医药生物", "2014-08-12", "7.78",   "8.5",    "增持"],
  ["1000568", "食品饮料", "2014-08-08", "18.90",  "21.70",  "增持"],
  ["1002477", "农林牧渔", "2014-08-08", "10.69",  "13.20",  "买入"],
  ["1002317", "医药生物", "2014-08-06", "21.48",  "25.50",  "买入"],
  ["1000858", "食品饮料", "2014-08-06", "19.50",  "27.60",  "买入"],
  ["1000915", "医药生物", "2014-07-25", "26.46",  "35.00",  "买入"],
  ["1002683", "化工",     "2014-07-24", "24.68",  "35.00",  "买入"],
  ["1002456", "电子行业", "2014-07-22", "21.98",  "30.00",  "买入"],
  ["1300074", "通信行业", "2014-07-14", "17.00",  "20.50",  "买入"],
  ["0600759", "房地产",   "2014-07-08", "10.45",  "14.00",  "买入"],
  ["1002565", "造纸印刷", "2014-07-07", "8.64",   "10.60",  "买入"]
);

