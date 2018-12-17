// pie
option1 = {
    backgroundColor:'#fafafa',
    title : {
        text: '端口流量排序图',
        subtext: '纯属虚构',
        left:'left',
        textStyle:{
            // fontSize:24
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} <br/>{a} : {c} ({d}%)"
    },
    // legend: {
    //     orient: 'horizontal',
    //     left: 'left',
    //     top:50,
    //     data: ['8080-9090','8081-9091','8082-9092','8083-9093','8084-9094']
    // },
    series : [
        {
            name: '流量统计',
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            // 数组
            data:[
                {value:8000, name:'8080-9090'},
                {value:7000, name:'8081-9091'},
                {value:6000, name:'8082-9092'},
                {value:5000, name:'8083-9093'},
                {value:4000, name:'8084-9094'}
            ],
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
option3 = {
    backgroundColor:'#fafafa',
    title: {
        text: '流量趋势图',
        subtext: '纯属虚构',
        left:'left',
    },
    tooltip: {
        trigger: 'axis'
    },
    // grid:{
    //  top:85,
    //  bottom:40,
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:80,
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
                    show:false,
                    position:'start',
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
option2 = {
    backgroundColor:'#fafafa',
    title : {
        text: '国家连接排序图',
        subtext: '纯属虚构',
        left:'left',
        textStyle:{
            fontSize:24
        }
    },
    legend: {
        orient: 'horizontal',
        left: 'left',
        top:90,
        data: ['美国','英国','泰国','俄罗斯','日本','新加坡','南非']
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
        top:90,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data: ['美国','英国','泰国','俄罗斯','日本','新加坡','南非'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'连接数',
            nameTextStyle:{
                align:'right',

            }
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
var chart1 = echarts.init(document.getElementById('pie'));
chart1.setOption(option1);
var chart2 = echarts.init(document.getElementById('line'));
chart2.setOption(option3);
var chart3 = echarts.init(document.getElementById('bar'));
chart3.setOption(option2);