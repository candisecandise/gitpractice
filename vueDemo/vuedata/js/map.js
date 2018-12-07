// var data1 = {
//     "city": {
//         name: "上海",
//         coordinate: [121.4648, 31.2891]
//     },
//     "datas": [{
//             name: "尼日利亚",
//             value: 9100,
//             coordinate: [-4.388361, 11.186148]
//         },
//         {
//             name: "美国洛杉矶",
//             value: 2370,
//             coordinate: [-118.24311, 34.052713]
//         }, {
//             name: "香港邦泰",
//             value: 3130,
//             coordinate: [114.195466, 22.282751]
//         }, {
//             name: "美国芝加哥",
//             value: 2350,
//             coordinate: [-87.801833, 41.870975]
//         }, {
//             name: "加纳库马西",
//             value: 5120,
//             coordinate: [-4.62829, 7.72415]
//         }, {
//             name: "英国曼彻斯特",
//             value: 3110,
//             coordinate: [-1.657222, 51.886863]
//         }, {
//             name: "德国汉堡",
//             value: 6280,
//             coordinate: [10.01959, 54.38474]
//         }, {
//             name: "哈萨克斯坦阿拉木图",
//             value: 7255,
//             coordinate: [45.326912, 41.101891]
//         }, {
//             name: "俄罗斯伊尔库茨克",
//             value: 8125,
//             coordinate: [89.116876, 67.757906]
//         }, {
//             name: "巴西",
//             value: 3590,
//             coordinate: [-48.678945, -10.493623]
//         }, {
//             name: "埃及达米埃塔",
//             value: 3590,
//             coordinate: [31.815593, 31.418032]
//         }, {
//             name: "西班牙巴塞罗纳",
//             value: 3590,
//             coordinate: [2.175129, 41.385064]
//         }, {
//             name: "柬埔寨金边",
//             value: 3590,
//             coordinate: [104.88659, 11.545469]
//         }, {
//             name: "意大利米兰",
//             value: 3590,
//             coordinate: [9.189948, 45.46623]
//         }, {
//             name: "乌拉圭蒙得维的亚",
//             value: 3590,
//             coordinate: [-56.162231, -34.901113]
//         }, {
//             name: "莫桑比克马普托",
//             value: 3590,
//             coordinate: [32.608571, -25.893473]
//         }, {
//             name: "阿尔及利亚阿尔及尔",
//             value: 3590,
//             coordinate: [3.054275, 36.753027]
//         }, {
//             name: "阿联酋迪拜",
//             value: 3590,
//             coordinate: [55.269441, 25.204514]
//         }, {
//             name: "匈牙利布达佩斯",
//             value: 3590,
//             coordinate: [17.108519, 48.179162]
//         }, {
//             name: "澳大利亚悉尼",
//             value: 3590,
//             coordinate: [150.993137, -33.675509]
//         }, {
//             name: "美国加州",
//             value: 3590,
//             coordinate: [-121.910642, 41.38028]
//         }, {
//             name: "澳大利亚墨尔本",
//             value: 3590,
//             coordinate: [144.999416, -37.781726]
//         }, {
//             name: "墨西哥",
//             value: 3590,
//             coordinate: [-99.094092, 19.365711]
//         }, {
//             name: "加拿大温哥华",
//             value: 3590,
//             coordinate: [-123.023921, 49.311753]
//         }
//     ]
// }

var data1 = {
    city: "",
    datas: []
}

var data2 = {
    "city": {
        name: "北京",
        coordinate: [116.4551, 40.2539],
    },
    "datas": [{
            name: "尼日利亚",
            value: 9100,
            coordinate: [-4.388361, 11.186148]
        },
        {
            name: "美国洛杉矶",
            value: 2370,
            coordinate: [-118.24311, 34.052713]
        }, {
            name: "香港邦泰",
            value: 3130,
            coordinate: [114.195466, 22.282751]
        }, {
            name: "美国芝加哥",
            value: 2350,
            coordinate: [-87.801833, 41.870975]
        }, {
            name: "加纳库马西",
            value: 5120,
            coordinate: [-4.62829, 7.72415]
        }, {
            name: "英国曼彻斯特",
            value: 3110,
            coordinate: [-1.657222, 51.886863]
        }, {
            name: "德国汉堡",
            value: 6280,
            coordinate: [10.01959, 54.38474]
        }, {
            name: "哈萨克斯坦阿拉木图",
            value: 7255,
            coordinate: [45.326912, 41.101891]
        }, {
            name: "俄罗斯伊尔库茨克",
            value: 8125,
            coordinate: [89.116876, 67.757906]
        }, {
            name: "巴西",
            value: 3590,
            coordinate: [-48.678945, -10.493623]
        }, {
            name: "埃及达米埃塔",
            value: 3590,
            coordinate: [31.815593, 31.418032]
        }, {
            name: "西班牙巴塞罗纳",
            value: 3590,
            coordinate: [2.175129, 41.385064]
        }, {
            name: "柬埔寨金边",
            value: 3590,
            coordinate: [104.88659, 11.545469]
        }, {
            name: "意大利米兰",
            value: 3590,
            coordinate: [9.189948, 45.46623]
        }, {
            name: "乌拉圭蒙得维的亚",
            value: 3590,
            coordinate: [-56.162231, -34.901113]
        }, {
            name: "莫桑比克马普托",
            value: 3590,
            coordinate: [32.608571, -25.893473]
        }, {
            name: "阿尔及利亚阿尔及尔",
            value: 3590,
            coordinate: [3.054275, 36.753027]
        }, {
            name: "阿联酋迪拜",
            value: 3590,
            coordinate: [55.269441, 25.204514]
        }, {
            name: "匈牙利布达佩斯",
            value: 3590,
            coordinate: [17.108519, 48.179162]
        }, {
            name: "澳大利亚悉尼",
            value: 3590,
            coordinate: [150.993137, -33.675509]
        }, {
            name: "美国加州",
            value: 3590,
            coordinate: [-121.910642, 41.38028]
        }, {
            name: "澳大利亚墨尔本",
            value: 3590,
            coordinate: [144.999416, -37.781726]
        }, {
            name: "墨西哥",
            value: 3590,
            coordinate: [-99.094092, 19.365711]
        }, {
            name: "加拿大温哥华",
            value: 3590,
            coordinate: [-123.023921, 49.311753]
        }
    ]
}

var series = [];
var datas = [
    [data1.city, data1],
    // [data2.city, data2.datas],
]
datas.forEach(function (item, i) {
    series.push({
            name: item[0].name,
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
                formatter: function (params, ticket, callback) {
                    // console.log(option.series)
                    console.log(params)
                    //根据业务自己拓展要显示的内容
                    var res = "";
                    var name = params.name;
                    // value[2] 是value，0 1 是坐标
                    var value = params.value[2];
                    var seriesname = params.data.city;
                    // console.log(value);
                    res =
                        "<span style='color:#fff;'>" + name + '->' + seriesname +
                        "</span><br/>数据：" +
                        value;
                    return res;
                    // for (var i = 0; i < option.series[0].data.length; i++) {
                    //     if (option.series[0].data[i].name == params) {
                    //         return params + ":" + option.series[0].data[i].value + "起";
                    //     }
                    // }
                }

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