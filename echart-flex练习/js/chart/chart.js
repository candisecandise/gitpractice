option1 = {
    tooltip:{
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}",
    },
    //grid组件的位置，grid包含的内容
    series:[{
        name: '告警类型',
        type: 'pie',
        radius : '50%',
        center: ['50%', '60%'],
        // 隐藏标示线和标识文字，注意是label！
        itemStyle:{
            normal:{
                label:{
                    show:true,
                    formatter:'{b}',
                    color:'#000',
                },
                labelLine:{
                    show: false,
                },  
            },
        },
         data: [
            {value:756,name:'攻击窃密'},
            {value:256,name:'传输涉密'},
            {value:456,name:'目标审计'},
            {value:156,name:'未知攻击'},
            {value:656,name:'通信阻断'},
           
        ],
    }] 
};

var chart1 = echarts.init(document.getElementById('chart1'),'white');
chart1.setOption(option1);


option2 = {
    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            fontSize: 14
        }
    },
    grid: {
        top: 64,
        bottom: 10,
        left: 10,
        right: 35,
        containLabel: true
    },
    xAxis:{
        boundaryGap: false,
        axisLabel: {
            interval:0,
            margin:12,
            textStyle: {
                color: '#000',
                fontSize : 14,
                align: 'center',
            },
            
        },
        axisTick:{
            show:true,
            lineStyle: {
                    color: "#373D41",
                    width: 1,
            },
        },
        data:['','2018-5-15','2018-5-22','2018-5-29','2018-6-5','2018-6-12'],

       
    },
    yAxis:{
        //表示竖直轴是连续数据
        type:'value',
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize : 14,
            },
        },
    },
    series:[{
        name: '告警数目',
        type: 'line',
        symbol:'emptyCircle',
        symbolSize:12,
        data: [0,10000,5000,4000,2000,20000],
        itemStyle: {
            normal:{
                color: '#d0021b',
                borderWidth:2,
            }
        },
        lineStyle:{
            color: '#d0021b',
        }
    }],
};
var chart2 = echarts.init(document.getElementById('chart2'),'white');
chart2.setOption(option2);

option3 = {
    tooltip:{
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}",
        
    },
    //grid组件的位置，grid包含的内容
    series:[{
        name: '告警类型',
        type: 'pie',
        radius : '50%',
        center: ['50%', '60%'],
        data: [
            {value:56,name:'审核失败'},
            {value:41,name:'认证失败'},
            {value:34,name:'认证成功'},
            {value:11,name:'注册待审核'},
            {value:23,name:'审核成功'},
        ],
        itemStyle:{
            normal:{
                label:{
                    show:true,
                    formatter:'{b}',
                    
                },
            },
            labelLine:{
                show:true
            },  
        }
    }]
};
var chart3 = echarts.init(document.getElementById('chart3'),'white');
chart3.setOption(option3);


option4 = {
    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        
    },
    //grid组件的位置，grid包含的内容
    grid: {
        top: 74,
        bottom: 0,
        left: 10,
        right: 10,
        containLabel: true
    },
    xAxis:{
        show: false,
        type:'value',
        axisLabel: {
            textStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: false,
        },
        splitArea: {
            show: false,
        },
    },
    yAxis:{
        //表示竖直轴是连续数据
        type:'category',
        axisLabel: {
            textStyle: {
                color: '#000',
            }
        },
        data: ['18050903001','18050903002','18050903003','18050903004','18050903005','18050903006','18050903007'],
    },
    series:[{
        name: '告警数目',
        type: 'bar',
        barMaxWidth:25,
        itemStyle:{
            normal:{
                // color: function (params) {
                //     var colorList = ['#4A90E2','#4A90E2'];
                //     return colorList[params.dataIndex];
                // },
                color:['#4A90E2'],
                barBorderRadius:[0,10,10,0],
             },
        },
        label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#000',
                }
            },
        data: [13242,17185,28689,65903,84612,48627,38627],
    }]
};
var chart4 = echarts.init(document.getElementById('chart4'),'white');
chart4.setOption(option4);


option5 = {
    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            fontSize: 14
        },
    },
    //grid组件的位置，grid包含的内容
    grid: {
        top: 64,
        bottom: 10,
        left: 10,
        right: 10,
        containLabel: true
    },
    xAxis:{
        axisLabel: {
            //x y 轴文字的颜色
            textStyle: {
                color: '#000',
                fontSize : 14,
            },
        },
        data:['一般级','关注级','严重级','无风险','紧急级']
    },
    yAxis:{        
        // show: false,
        //表示竖直轴是连续数据
        type:'value',
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#000',
                fontSize : 14,
            },
        },
        splitLine: {
                show: true,
                lineStyle: {
                    color: [
                        "#d8d8d8",
                    ]
                }
            },
        nameTextStyle: {
            fontSize:20,
        }

    },
    series:[{
        name: '告警数目',
        type: 'bar',
        //柱条的最大宽度，不设时自适应。支持设置成相对于类目宽度的百分比。
        barMaxWidth:75,
        itemStyle: {
            normal: {
                // 调色盘，每列的颜色，循环
                color: function (params) {
                    var colorList = ['#fcc668', '#70e136', '#52ccfb', '#5852fb', '#f64c7e', '#dd52fb', '#507ef1'];
                    return colorList[params.dataIndex];
                }
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#000',
            }
        },
        data: [156702,147620,45768,35698,64688]
    }]
};
var chart5 = echarts.init(document.getElementById('chart5'),'white');
chart5.setOption(option5);




