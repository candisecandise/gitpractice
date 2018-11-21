var geoCoordMap = {
    上海: [121.4648, 31.2891],
    尼日利亚: [-4.388361, 11.186148],
    美国洛杉矶: [-118.24311, 34.052713],
    香港邦泰: [114.195466, 22.282751],
    美国芝加哥: [-87.801833, 41.870975],
    加纳库马西: [-4.62829, 7.72415],
    英国曼彻斯特: [-1.657222, 51.886863],
    德国汉堡: [10.01959, 54.38474],
    哈萨克斯坦阿拉木图: [45.326912, 41.101891],
    俄罗斯伊尔库茨克: [89.116876, 67.757906],
    巴西: [-48.678945, -10.493623],
    埃及达米埃塔: [31.815593, 31.418032],
    西班牙巴塞罗纳: [2.175129, 41.385064],
    柬埔寨金边: [104.88659, 11.545469],
    意大利米兰: [9.189948, 45.46623],
    乌拉圭蒙得维的亚: [-56.162231, -34.901113],
    莫桑比克马普托: [32.608571, -25.893473],
    阿尔及利亚阿尔及尔: [3.054275, 36.753027],
    阿联酋迪拜: [55.269441, 25.204514],
    匈牙利布达佩斯: [17.108519, 48.179162],
    澳大利亚悉尼: [150.993137, -33.675509],
    美国加州: [-121.910642, 41.38028],
    澳大利亚墨尔本: [144.999416, -37.781726],
    墨西哥: [-99.094092, 19.365711],
    加拿大温哥华: [-123.023921, 49.311753]
};
var BJData = [
    [{name: "尼日利亚",value: 9100}, {name: "北京"}],
    [{name: "美国洛杉矶",value: 2370}, {name: "北京"}],
    [{name: "香港邦泰",value: 3130}, {name: "北京"}],
    [{name: "美国芝加哥",value: 2350}, {name: "北京"}],
    [{name: "加纳库马西",value: 5120}, {name: "北京"}],
    [{name: "英国曼彻斯特",value: 3110}, {name: "北京"}],
    [{name: "德国汉堡",value: 6280}, {name: "北京"}],
    [{name: "哈萨克斯坦阿拉木图",value: 7255}, {name: "北京"}],
    [{name: "俄罗斯伊尔库茨克",value: 8125}, {name: "北京"}],
    [{name: "巴西",value: 3590}, {name: "北京"}],
    [{name: "埃及达米埃塔",value: 3590}, {name: "北京"}],
    [{name: "西班牙巴塞罗纳",value: 3590}, {name: "北京"}],
    [{name: "柬埔寨金边",value: 3590}, {name: "北京"}],
    [{name: "意大利米兰",value: 3590}, {name: "北京"}],
    [{name: "乌拉圭蒙得维的亚",value: 3590}, {name: "北京"}],
    [{name: "莫桑比克马普托",value: 3590}, {name: "北京"}],
    [{name: "阿尔及利亚阿尔及尔",value: 3590}, {name: "北京"}],
    [{name: "阿联酋迪拜",value: 3590}, {name: "北京"}],
    [{name: "匈牙利布达佩斯",value: 3590}, {name: "北京"}],
    [{name: "澳大利亚悉尼",value: 3590}, {name: "北京"}],
    [{name: "美国加州",value: 3590}, {name: "北京"}],
    [{name: "澳大利亚墨尔本",value: 3590}, {name: "北京"}],
    [{name: "墨西哥",value: 3590}, {name: "北京"}],
    [{name: "加拿大温哥华",value: 3590}, {name: "北京"}]
]
var SJData = [
    [{name: "尼日利亚",value: 9100}, {name: "上海"}],
    [{name: "美国洛杉矶",value: 2370}, {name: "上海"}],
    [{name: "香港邦泰",value: 3130}, {name: "上海"}],
    [{name: "美国芝加哥",value: 2350}, {name: "上海"}],
    [{name: "加纳库马西",value: 5120}, {name: "上海"}],
    [{name: "英国曼彻斯特",value: 3110}, {name: "上海"}],
    [{name: "德国汉堡",value: 6280}, {name: "上海"}],
    [{name: "哈萨克斯坦阿拉木图",value: 7255}, {name: "上海"}],
    [{name: "俄罗斯伊尔库茨克",value: 8125}, {name: "上海"}],
    [{name: "巴西",value: 3590}, {name: "上海"}],
    [{name: "埃及达米埃塔",value: 3590}, {name: "上海"}],
    [{name: "西班牙巴塞罗纳",value: 3590}, {name: "上海"}],
    [{name: "柬埔寨金边",value: 3590}, {name: "上海"}],
    [{name: "意大利米兰",value: 3590}, {name: "上海"}],
    [{name: "乌拉圭蒙得维的亚",value: 3590}, {name: "上海"}],
    [{name: "莫桑比克马普托",value: 3590}, {name: "上海"}],
    [{name: "阿尔及利亚阿尔及尔",value: 3590}, {name: "上海"}],
    [{name: "阿联酋迪拜",value: 3590}, {name: "上海"}],
    [{name: "匈牙利布达佩斯",value: 3590}, {name: "上海"}],
    [{name: "澳大利亚悉尼",value: 3590}, {name: "上海"}],
    [{name: "美国加州",value: 3590}, {name: "上海"}],
    [{name: "澳大利亚墨尔本",value: 3590}, {name: "上海"}],
    [{name: "墨西哥",value: 3590}, {name: "上海"}],
    [{name: "加拿大温哥华",value: 3590}, {name: "上海"}]
]
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
    	var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                },
                {
                    coord: toCoord
                }
            ]);
        }
    }
    return res;
};

// 用函数
var placeData = function(data) {
    var res = [];
     res.push({
        name: data,
        value: geoCoordMap[data].concat([10000])
    });
    console.log(res)
    return res;
    // 报错！！
    // return [
    //     name: data,
    //     value: geoCoordMap[data].concat([10000])
    // ];
};

var series = [];
[["上海", SJData]].forEach(function(item, i) {
    series.push( {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: "{b}" //圆环显示文字
                },
                emphasis: {
                    show: true,
                }
            },
            symbol: "circle",
            symbolSize: function(val) {
                return 4 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
                color:'#FF6E00'
            },
            data: item[1].map(function(dataItem) {
                
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            })
        },
        //被攻击点
        {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: "stroke",
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    formatter: "{b}",
                    textStyle: {
                        color: "#0bc7f3"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "pin",
            symbolSize: 30,
            itemStyle: {
                normal: {
                    show: true,
                    color: "#0bc7f3"
                }
            },
            // data: [{
            //     name: item[0],
            //     // 10000表示被攻击的数量
            //     value: geoCoordMap[item[0]].concat([10000])
            // }]
            // 匿名函数！！！ 
            // data: (function(data){
            //     console.log(geoCoordMap[data].concat([10000]))
                // return {  // return 只能 return {} ？？？
            //         name: data,
            //         value: geoCoordMap[data].concat([10000])
            //     };
            // })(item[0])
            data:placeData(item[0])

            

        }
    );
});

option = {
    backgroundColor: '#f5f3f0',
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
    tooltip: {
        trigger: "item",
        backgroundColor: "#9d9c9a",
        borderColor: "#FFFFCC",
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            console.log(params.value);
            var value = params.value[2];
            console.log(value);
            res =
                "<span style='color:#fff;'>" + name +
                // "->上海" +
                "</span><br/>数据：" +
                value;
            return res;
        }
    },
    // 视觉映射组件
    visualMap: { //图例值控制
        min: 1000,
        max: 10000,
        right:0,
        calculable: true,
        // color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#125993'
        }
    },
    // 地理坐标系组件
    geo: {
        map: "world",
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        layoutCenter: ["40%", "55%"], //地图位置
        layoutSize: "180%",
        itemStyle: {
            normal: {
                color: "#f5f3f0", //地图背景色
                borderColor: "#50899c" //省市边界线
            },
            emphasis: {
                color: "#d0c9c0" //悬浮背景
            }
        }
    },

    series: series
};
// pie
option1 = {
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
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            name: '连接数',
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
option2 = {
    title : {
        text: '端口流量排序图',
        // subtext: '2018/11/15 下午2:44:44',
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
        top:50,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['8080-9090', '8081-9091', '8082-9092', '8083-9093', '8084-9094', '8085-9095', '8086-9096'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'流量统计',
            type:'bar',
            barWidth: '60%',
            data:[8000, 7000, 6000, 4000, 3000, 2000, 1000],
            itemStyle:{
                 color: function (params) {
                    var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
                    return colorList[params.dataIndex];
                },
            }
        }
    ]
};
option3 = {
    title: {
        text: '流量趋势图',
        // subtext: '2018/11/12 下午2:44:44',
        left:'left',
    },
    tooltip: {
        trigger: 'axis'
    },
    // grid:{
    // 	top:85,
    // 	bottom:40,
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:50,
        containLabel: true
    },
    // 工具栏
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
        	interval:0
        },
        data: ['11-09','11-10','11-11','11-12','11-13','11-14','11-15']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name:'上行流量',
            type:'line',
            data:[8000, 9000, 5000, 7000, 3000, 4000, 5000],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
            	label:{
            		show:false
            	},
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'下行流量',
            type:'line',
            data:[3000, 2000, 3000, 4000, 2000, 1000, 2000],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
            	label:{
            		show:false,
            		position:'start',
            	},
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};
option4 = {
    title : {
        text: '国家流量排序图',
        // subtext: '2018/11/12 下午2:44:44',
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
        top:50,
        containLabel: true
    },
    yAxis:  {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['美国','英国','泰国','俄罗斯','日本','新加坡','南非']
    },
    series: [
        {
            name: '上行流量',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:[8000,7000,6000,5000,4000,3000,2000]
            
        },
        {
            name: '下行流量',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1500, 1400, 1200, 1000, 900, 800, 700]
            
        },
    ]
};
var chart = echarts.init(document.getElementById('map'));
chart.setOption(option);
var linkChart = echarts.init(document.getElementById('linkpie'));
linkChart.setOption(option1);
var portChart = echarts.init(document.getElementById('portBar'));
portChart.setOption(option2);
var flowChart = echarts.init(document.getElementById('flowLine'));
flowChart.setOption(option3);
var countryChart = echarts.init(document.getElementById('countryBar'));
countryChart.setOption(option4);

