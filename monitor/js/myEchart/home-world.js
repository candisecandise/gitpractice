var mapdata = [{
    fromName: "尼日利亚",
    toName: '上海',
    value: 9100,
    fromCoord: [-4.388361, 11.186148],
    toCoord: [121.4648, 31.2891]
}, {
    fromName: "上海",
    toName: '尼日利亚',
    value: 9100,
    fromCoord: [121.4648, 31.2891],
    toCoord: [-4.388361, 11.186148]
}, {
    fromName: "美国洛杉矶",
    toName: '上海',
    value: 2370,
    fromCoord: [-118.24311, 34.052713],
    toCoord: [121.4648, 31.2891]
}, {
    fromName: "香港邦泰",
    toName: '上海',
    value: 3130,
    fromCoord: [114.195466, 22.282751],
    toCoord: [121.4648, 31.2891]
}, {
    fromName: "美国芝加哥",
    toName: '北京',
    value: 2350,
    fromCoord: [-87.801833, 41.870975],
    toCoord: [116.4551, 40.2539]
}, {
    fromName: "加纳库马西",
    toName: '北京',
    value: 5120,
    fromCoord: [-4.62829, 7.72415],
    toCoord: [116.4551, 40.2539]
}, {
    fromName: "英国曼彻斯特",
    toName: '北京',
    value: 3110,
    fromCoord: [-1.657222, 51.886863],
    toCoord: [116.4551, 40.2539]
}, {
    fromName: "德国汉堡",
    toName: '北京',
    value: 6280,
    fromCoord: [10.01959, 54.38474],
    toCoord: [116.4551, 40.2539]
}, {
    fromName: '北京',
    toName: "加纳库马西",
    value: 5120,
    fromCoord: [116.4551, 40.2539],
    toCoord: [-4.62829, 7.72415],
}, {
    fromName: '北京',
    toName: "英国曼彻斯特",
    value: 3110,
    fromCoord: [116.4551, 40.2539],
    toCoord: [-1.657222, 51.886863],
}, {
    fromName: '上海',
    toName: "德国汉堡",
    value: 6280,
    fromCoord: [121.4648, 31.2891],
    toCoord: [10.01959, 54.38474],
}, ]


var mapscatter = [{
    name: "上海",
    value: "9100",
    coord: ["121.4648", "31.2891"]
}, {
    name: "尼日利亚",
    value: "9100",
    coord: [-4.388361, 11.186148]
}, {
    name: "北京",
    value: "9100",
    coord: [116.4551, 40.2539]
}, {
    name: "尼日利亚",
    value: "9100",
    coord: [-4.388361, 11.186148]
}, {
    name: "美国洛杉矶",
    value: "9100",
    coord: [-118.24311, 34.052713]
}, {
    name: "德国汉堡",
    value: "9100",
    coord: [10.01959, 54.38474]
}, {
    name: "英国曼彻斯特",
    value: "9100",
    coord: [-1.657222, 51.886863]
}, {
    name: "美国洛杉矶",
    value: "9100",
    coord: [-118.24311, 34.052713]
}, {
    name: "香港邦泰",
    value: 3130,
    coord: [114.195466, 22.282751],
}, {
    name: "美国芝加哥",
    value: 2350,
    coord: [-87.801833, 41.870975],
}, {
    name: "加纳库马西",
    value: 5120,
    coord: [-4.62829, 7.72415],
}]

var linesdata = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        res.push({
            fromName: data[i].fromName,
            toName: data[i].toName,
            coords: [data[i].fromCoord, data[i].toCoord],
            value: data[i].value,
        });
    }
    console.log(res)
    return res;
};
var singledata = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        res.push({
            name: data[i].name,
            value: data[i].coord.concat(data[i].value),
        });
    }
    return res;
};

var series = [];

function maplines(item, item2) {
    series.push({
        type: "lines",
        zlevel: 2,
        effect: {
            show: true,
            period: 20, //箭头指向速度，值越小速度越快
            trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: "arrow", //箭头图标
            symbolSize: 5 //图标大小
        },
        lineStyle: {
            normal: {
                width: 1, //尾迹线条宽度
                opacity: 0.2, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
            }
        },
        data: linesdata(item),
        tooltip: {
            formatter: function (params, ticket, callback) {
                res = params.data.fromName + "->" + params.data.toName + "</span><br/>数据：" + params.value;
                return res;
            }
        },
    });
    series.push(
        //被攻击点
        {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                period: 1,
                brushType: "stroke",
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    formatter: "{b}" //圆环显示文字
                },
                emphasis: {
                    show: true,
                }
            },
            symbol: "circle",
            symbolSize: 20,
            itemStyle: {
                color: '#FF6E00'
            },
            data: singledata(item2),
            tooltip: {
                formatter: function (params, ticket, callback) {
                    res = params.data.name + "</span><br/>数据：" + params.value[2];
                    return res;
                }
            },
        },
    );
};

function maplinesScatter(item) {
    series.push(
        //被攻击点
        {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
                period: 1,
                brushType: "stroke",
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    formatter: "{b}" //圆环显示文字
                },
                emphasis: {
                    show: true,
                }
            },
            symbol: "circle",
            symbolSize: 20,
            itemStyle: {
                color: '#FF6E00'
            },
            data: singledata(item),
            tooltip: {
                formatter: function (params, ticket, callback) {
                    res = params.data.name + "</span><br/>数据：" + params.value[2];
                    return res;
                }
            },
        },
    );
};

maplines(mapdata, mapscatter);
// maplinesScatter(mapscatter);

option = {
    backgroundColor: '#f5f3f0',
    title: {
        show: false,
        text: '大数据实时监控',
        subtext: '数据截止2018年11月9日',
        // left:'left',
        left: 10,
        top: 10,
        textStyle: {
            fontSize: 24,
            color: '#125993'
        },
        subtextStyle: {
            fontSize: 12,
            color: '#9da2a3'
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

    },
    // 视觉映射组件
    visualMap: { //图例值控制
        min: 1000,
        max: 10000,
        right: 0,
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
                // areaColor:"#f5f3f0",
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
    backgroundColor: 'whitesmoke',
    title: {
        text: '连接数占比',
        // subtext: '纯属虚构',
        left: 'left',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: '连接数',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        // 数组
        data: [],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
option2 = {
    title: {
        text: '端口流量排序图',
        // subtext: '2018/11/15 下午2:44:44',
        left: 'left',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: 50,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['8080-9090', '8081-9091', '8082-9092', '8083-9093', '8084-9094', '8085-9095', '8086-9096'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '流量统计',
        type: 'bar',
        barWidth: '60%',
        data: [8000, 7000, 6000, 4000, 3000, 2000, 1000],
        itemStyle: {
            color: function (params) {
                var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
                return colorList[params.dataIndex];
            },
        }
    }]
};
option3 = {
    title: {
        text: '流量趋势图',
        // subtext: '2018/11/12 下午2:44:44',
        left: 'left',
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
        top: 50,
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
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            interval: 0
        },
        data: ['11-09', '11-10', '11-11', '11-12', '11-13', '11-14', '11-15']
    },
    yAxis: {
        type: 'value',
    },
    series: [{
            name: '上行流量',
            type: 'line',
            data: [8000, 9000, 5000, 7000, 3000, 4000, 5000],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                label: {
                    show: false
                },
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
        {
            name: '下行流量',
            type: 'line',
            data: [3000, 2000, 3000, 4000, 2000, 1000, 2000],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                label: {
                    show: false,
                    position: 'start',
                },
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};
option4 = {
    title: {
        text: '国家流量排序图',
        // subtext: '2018/11/12 下午2:44:44',
        left: 'left',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: 50,
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['美国', '英国', '泰国', '俄罗斯', '日本', '新加坡', '南非']
    },
    series: [{
            name: '上行流量',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [8000, 7000, 6000, 5000, 4000, 3000, 2000]

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