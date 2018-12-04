// 数组中嵌套数组
var Ondata = [
    {name:'南京',value:[100,200],coordinate:[118.8062,31.9208]},
    {name:'广州',value:[100,200],coordinate:[113.5107,23.2196]},
    {name:'大连',value:[100,200],coordinate:[122.2229,39.4409]},
    {name:'南宁',value:[100,200],coordinate:[108.479,23.1152]},
];

var Offdata = [
    {name:'长沙',value:[100,200],coordinate:[113.0823,28.2568]},
    {name:'长治',value:[100,200],coordinate:[112.8625,36.4746]},
    {name:'阳泉',value:[100,200],coordinate:[113.4778,38.0951]},
    {name:'青岛',value:[100,200],coordinate:[120.4651,36.3373]},
];


var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[['在线', Ondata],['离线', Offdata]].forEach(function (item, i) {
    series.push(
        {
            // 有了name legend才能控制它！！
            name:  item[0], 
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 1,
            label: {
                normal: {
                    show: true,
                    position: "left",
                    formatter: "{b}",
                    textStyle: {
                        color: color[i]
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "circle",
            symbolSize: 16,
            itemStyle: {
                normal: {
                    show: true,
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                var geodata = [];
                // 数组前两个值必须是经纬度
                var geodata=dataItem.coordinate;
                return {
                    name: dataItem.name, //显示每个维度对应的名称
                    value: geodata,
                };
            }),
            tooltip:{
                formatter:'{b}:{a}'
            }
        },
    {
        name:  item[0], 
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        hoverAnimation:true,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    var value1 = params.data.value[2];
                    var value2 = params.data.value[3];
                    var all =  '{up|未处置}\n{valueUp|' + value1 + '}' + '\n' +
                     '{up|涉密告警}\n{valueDown|' + value2 + '}';
                    return all
                },
                position:[20,-20],
                backgroundColor: '#fff',
                padding: [4, 5],
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.5)',
                color: '#777',
                rich: {
                    valueUp: {
                        color: 'blue',
                        fontSize: 14,
                        align: 'center',
                    },
                    valueDown: {
                        color: 'red',
                        fontSize: 14,
                        align: 'center',
                    },
                    up: {
                        height: 14,
                        color:'black',
                        align: 'center',
                    },
                },
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {   
                color: color[i],
                opacity:1,
            },
        },
        // map 映射
        data: item[1].map(function (dataItem) {
            var geodata = [];
            var geodata=dataItem.coordinate.concat(dataItem.value);
            return {
                name: dataItem.name, //显示每个维度对应的名称
                value: geodata,
            };
        }),
        tooltip:{
            formatter:'{b}:{a}'
        },
        animation:true,
    });
});
option = {
	backgroundColor:'#f5f3f0',
	title:{
		text:'系统分布图',
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
		trigger:'item',

	},
	legend: {
        orient: 'horizontal',
        top:10,
        left: 'center',
        data:[  '在线','离线'],
        textStyle: {
            color: '#4a4a4a'
        },
        // selectedMode: 'single',
    },
    top:10,
    left:10,
    geo: {
        map: 'china',
        label: {
        	// 高亮
            emphasis: {
                // 不显示标签
                // show: false
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
var myChart = echarts.init(document.getElementById('info'));
myChart.setOption(option);

// setTimeout(function () {

//     myChart.on('mouseup', function (params) {
//         if (!down) {
//             return;
//         }
//         down = false;

//         var e = params.event;

//         // 转换坐标
//         var geoCoord = myChart.convertFromPixel('series', [e.offsetX, e.offsetY]);

//         myChart.setOption({
//             series: [{
//                 center: geoCoord,
//                 zoom: 4,
//                 zlevel: 4,
//                 animationDurationUpdate: 1000,
//                 animationEasingUpdate: 'cubicInOut'
//             },{
//                 center: geoCoord,
//                 zlevel: 5,
//                 animationDurationUpdate: 1000,
//                 animationEasingUpdate: 'cubicInOut'
//             }]
//         });
//     });

//     var down;
//     myChart.on('mousedown', function () {
//         down = true;
//     });
//     myChart.on('mousemove', function () {
//         down = false;
//     });

// }, 0);