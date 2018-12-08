var data = {
    city: "",
    datas: []
}

var series = [];
var datas = [
    [data.city, data.datas],
    // [data2.city, data2.datas],
]
datas.forEach(function (item, i) {
    series.push({
            name: '',
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
            symbolSize: function (val) {
                return 4 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
                color: '#FF6E00'
            },
            // data: item[1].map(function (dataItem) {

            //     return {
            //         name: dataItem.name,
            //         value: dataItem.coordinate.concat(dataItem.value)
            //     };
            // }),
            data: '',
            tooltip: {
                // formatter: function (params, ticket, callback) {
                //     console.log(params)
                //     res ="<span style='color:#fff;'>" + params.name + '->' + params.seriesName +
                //         "</span><br/>数据：" +
                //         params.value[2];
                //     return res;
                // }
                formatter: "{b}" + "->" + "{a}" + "=" + "{c}"
            },
        },
        //被攻击点
        {
            name: item[0].name,
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
                        // color: "#0bc7f3"
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
                    // color: "#0bc7f3"
                }
            },
            // data: [{
            //     name: item[0],
            //     // 10000表示被攻击的数量
            //     value: geoCoordMap[item[0]].concat([10000])
            // }]
            // 匿名函数！！！ 
            // data: (function (data) {
            //     return [{
            //         name: data.name,
            //         value: data.coordinate
            //     }];
            // })(item[0]),
            data: '',
            // data:placeData(item[0])
            // 被攻击点不显示数据
            tooltip: {
                formatter: "{b}"
            }

        }
    );
});

option = {
    backgroundColor: '#f5f3f0',
    title: {
        show: false,
        text: '大数据实时监控',
        subtext: '数据截止2018年11月9日',
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
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['上海', "北京"]
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
        // data: [],
        data: [{
                value: 335,
                name: '直接访问'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 234,
                name: '联盟广告'
            },
            {
                value: 135,
                name: '视频广告'
            },
            {
                value: 1548,
                name: '搜索引擎'
            }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
var mapchart = echarts.init(document.getElementById('map'));
mapchart.setOption(option);
var linkChart = echarts.init(document.getElementById('linkpie'));
linkChart.setOption(option1);