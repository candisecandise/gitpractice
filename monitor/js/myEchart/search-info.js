option = {
    backgroundColor:'#fafafa',
    title : [{
        text: '国家连接排序图',
        // subtext: '纯属虚构',
        left:'left',
        top:10,
        textStyle:{
            fontSize:24
        }
    },{
        text: '流量趋势图',
        // subtext: '纯属虚构',
        left:'60%',
        top:20,
    },{
        text: '端口流量排序图',
        // subtext: '纯属虚构',
        left:'60%',
        top:'52%'
    }],
    // TO-DO
    tooltip : [{
        trigger: 'axis',
    }],
    grid: [{
        left:10,
        top:'12%',
        width:'56%',
        height:'85%',
        containLabel: true
    },{
        left: '60%',
        top:'14%',
        width:'30%',
        height:'34%',
        containLabel: true
    }],
    xAxis: [{
        gridIndex:0,
        type : 'category',
        data: ['美国','英国','泰国','俄罗斯','日本','新加坡','南非'],
        axisTick: {
            alignWithLabel: true
        }
    },{
        gridIndex:1,
        type: 'category',
        boundaryGap: false,
        axisLabel:{
            interval:0
        },
        data: ['11-09','11-10','11-11','11-12','11-13','11-14','11-15']
    }],
    yAxis: [{
        gridIndex:0,
        type : 'value',
        name:'连接数',
        
    },{
        gridIndex:1,
        type : 'value',
        name:'连接数',
    }],
    series : [{
        xAxisIndex:0,
        yAxisIndex:0,
        name:'国家流量统计',
        type:'bar',
        barWidth: '60%',
        data:[8000, 7000, 6000, 4000, 3000, 2000, 1000],
        itemStyle:{
             color: function (params) {
                var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
                return colorList[params.dataIndex];
            },
        }
    },{
        xAxisIndex:1,
        yAxisIndex:1,
        name:'上行流量',
        type:'line',
        stack: '流量',
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
    },{
        xAxisIndex:1,
        yAxisIndex:1,
        name:'下行流量',
        type:'line',
        stack: '流量',
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
    },{
        name: '端口流量统计',
        type: 'pie',
        radius : '30%',
        center: ['80%', '78%'],
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
        },
        // 单独定义！！
        tooltip:{
            trigger: 'item',
            formatter: "{b} <br/>{a} : {c} ({d}%)"
        }
    }],
};
var chart = echarts.init(document.getElementById('allchart'));
chart.setOption(option);
