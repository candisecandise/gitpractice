var geoCoordMap = {
    '南京': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};

var BJData = [
    [{name:'北京'}, {name:'南京',value:95}],
    [{name:'北京'}, {name:'广州',value:90}],
    [{name:'北京'}, {name:'大连',value:80}],
    [{name:'北京'}, {name:'南宁',value:70}],
    [{name:'北京'}, {name:'南昌',value:60}],
    [{name:'北京'}, {name:'拉萨',value:50}],
    [{name:'北京'}, {name:'长春',value:40}],
    [{name:'北京'}, {name:'包头',value:30}],
    [{name:'北京'}, {name:'重庆',value:20}],
    [{name:'北京'}, {name:'常州',value:10}]
];

var SHData = [
    [{name:'南京'},{name:'包头',value:95}],
    [{name:'南京'},{name:'昆明',value:90}],
    [{name:'南京'},{name:'广州',value:80}],
    [{name:'南京'},{name:'郑州',value:70}],
    [{name:'南京'},{name:'长春',value:60}],
    [{name:'南京'},{name:'重庆',value:50}],
    [{name:'南京'},{name:'长沙',value:40}],
    [{name:'南京'},{name:'北京',value:30}],
    [{name:'南京'},{name:'丹东',value:20}],
    [{name:'南京'},{name:'大连',value:10}]
];

var GZData = [
    [{name:'广州'},{name:'福州',value:95}],
    [{name:'广州'},{name:'太原',value:90}],
    [{name:'广州'},{name:'长春',value:80}],
    [{name:'广州'},{name:'重庆',value:70}],
    [{name:'广州'},{name:'西安',value:60}],
    [{name:'广州'},{name:'成都',value:50}],
    [{name:'广州'},{name:'常州',value:40}],
    [{name:'广州'},{name:'北京',value:30}],
    [{name:'广州'},{name:'北海',value:20}],
    [{name:'广州'},{name:'海口',value:10}]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push({
                // fromName: dataItem[0].name,
                // toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[['北京', BJData], ['南京', SHData], ['广州', GZData]].forEach(function (item, i) {
    series.push(
    // {
    //     name: item[0],
    //     type: 'lines',
    //     zlevel: 1,
    //     effect: {
    //         show: true,
    //         period: 6,
    //         trailLength: 0.7,
    //         color: '#fff',
    //         symbolSize: 3
    //     },
    //     lineStyle: {
    //         normal: {
    //             color: color[i],
    //             width: 0,
    //             curveness: 0.2
    //         }
    //     },
    //     data: convertData(item[1]),
    //     //不起作用？？ 
    //     animation:false,
    // },
    // {
    //     name: item[0],
    //     type: 'lines',
    //     zlevel: 2,
    //     symbol: ['none', 'arrow'],
    //     symbolSize: 10,
    //     effect: {
    //         show: true,
    //         period: 6,
    //         trailLength: 0,
    //         symbol: 'arrow',
    //         symbolSize: 15
    //     },
    //     lineStyle: {
    //         normal: {
    //             color: color[i],
    //             width: 1,
    //             opacity: 0.6,
    //             curveness: 0.2
    //         }
    //     },
    //     data: convertData(item[1]),
    //     animation:false,
    // },
    {
        name:  item[0], 
        type: 'effectScatter',
        // 使用的坐标系
        coordinateSystem: 'geo',
        zlevel: 2,
        // 涟漪特效     
        rippleEffect: {
            brushType: 'fill    '
        },
        // 图形上的文本标签
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        // map 映射
        data: item[1].map(function (dataItem) {
            // console.log("fffff"+geoCoordMap[dataItem[1].name].concat([dataItem[1].value]));
            return {
                name: dataItem[1].name, //显示每个维度对应的名称
                // value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                // 自定义 tooltip
                tooltip:{formatter:'{b}->{a}:'+dataItem[1].value}
            };
        }),
        animation:false,
        // tooltip:{
        //     // 怎么去掉坐标
        //     formatter:'{b}:{c5}->{a}'
        // }
    });
});
option = {
	backgroundColor:'#f5f3f0',
	title:{
		text:'大数据实时监控',
		subtext:'数据截止2018年11月9日',
		// left:'left',
        left:10,
        top:10,
		textStyle:{
            fontSize:24,
			color:'#125993'
		},
		subtextStyle:{
            fontSize:12,
            color:'#9da2a3'
			// color:'#c9c8c8
		}
	},
	tooltip:{
		// 提示框触发类型
		trigger:'item'
	},
	legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 20,
        // bottom 没用？？
        bottom: 20,
        data:[  '北京', '南京', '广州'],
        textStyle: {
            color: '#4a4a4a'
        },
        // selectedMode: 'single',
        selected:{
            // 显示
            "北京":true,
            "南京":true,
            "广州":true,
        }
    },
    geo: {
        map: 'china',
        label: {
        	// 高亮
            emphasis: {
                // 不显示标签
                show: false
            }
        },
        // 缩放或平移
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#f5f3f0',
                borderColor: '#50899c'
            },
            emphasis: {
                areaColor: '#d0c9c0'
            }
        }
    },
    series: series
}

// pie
linkOption = {
    backgroundColor:'whitesmoke',
    title : {
        text: '连接数占比',
        // subtext: '纯属虚构',
        left:'left',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            // 数组
            data:[],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
portOption = {
    title : {
        text: '源端口目的端口分布图',
        subtext: '2018/11/12 下午2:44:44',
        left:'left',
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
  
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['8080','8081','8082','8083','8084','8085','8086']
    },
    series: [
        {
            name: '9090',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
            
        },
        {
            name: '9091',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
            
        },
        {
            name: '9092',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '9093',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '9094',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        }
    ]
};
flowOption = {
    title: {
        text: '流量趋势图',
        subtext: '2018/11/12 下午2:44:44',
        left:'left',
    },
    tooltip: {
        trigger: 'axis'
    },
    // legend: {
    //     data:['最高气温','最低气温']
    // },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['美国','英国','泰国','俄罗斯','日本','新加坡','南非']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'上行流量',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'下行流量',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};
var portChart = echarts.init(document.getElementById('portBar'));
portChart.setOption(portOption);
var flowChart = echarts.init(document.getElementById('flowLine'));
flowChart.setOption(flowOption);
var chart = echarts.init(document.getElementById('map'));
chart.setOption(option);
var linkChart = echarts.init(document.getElementById('linkpie'));
linkChart.setOption(linkOption);