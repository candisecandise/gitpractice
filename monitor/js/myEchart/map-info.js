
// var weatherIcons = {
//     up: './data/asset/img/arrow-up.png',
//     down: './data/asset/img/arrow-down.png'
// };

option = {
    title: {
        text: '系统分布图',
        subtext: '纯属虚构',
        left: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    // 视觉映射组件
    visualMap: {
        min: 0,
        max: 1000,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],
        calculable: true
    },
    animation: true,
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    series: [
        {
            name: '在线',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        console.log(params.data);
                        var value1 = params.data.value[0];
                        var value2 = params.data.value[1];
                        // console.log(value);
                        var all =  '{up|未处置}\n{valueUp|' + value1 + '}' + '\n' +
                         '{up|涉密告警}\n{valueDown|' + value2 + '}';
                        console.log(all);
                        return all
                    },
                    position: 'inside',
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
                    }
                },
                emphasis: {
                    show: true
                }
            },
            tooltip:{
                formatter:'{b}:{a}'
            },
             data: [
                {name: '北京',value: randomData() },
                {name: '天津',value: randomData() },
                {name: '上海',value: randomData() },
                {name: '重庆',value: randomData() },
                {name: '河北',value: randomData() },
                {name: '河南',value: randomData() },
                {name: '云南',value: randomData() },
                {name: '辽宁',value: randomData() },
                {name: '黑龙江',value: randomData() },
                {name: '湖南',value: randomData() },
                {name: '安徽',value: randomData() },
                {name: '山东',value: randomData() },
                {name: '新疆',value: randomData() },
                {name: '江苏',value: randomData() },
                
            ]
        }
    ]
};

// {name: '浙江',value: randomData() },
//                 {name: '江西',value: randomData() },
//                 {name: '湖北',value: randomData() },
//                 {name: '广西',value: randomData() },
//                 {name: '甘肃',value: randomData() },
//                 {name: '山西',value: randomData() },
//                 {name: '内蒙古',value: randomData() },
//                 {name: '陕西',value: randomData() },
//                 {name: '吉林',value: randomData() },
//                 {name: '福建',value: randomData() },
//                 {name: '贵州',value: randomData() },
//                 {name: '广东',value: randomData() },
//                 {name: '青海',value: randomData() },
//                 {name: '西藏',value: randomData() },
//                 {name: '四川',value: randomData() },
//                 {name: '宁夏',value: randomData() },
//                 {name: '海南',value: randomData() },
//                 {name: '台湾',value: randomData() },
//                 {name: '香港',value: randomData() },
//                 {name: '澳门',value: randomData() }}


function randomData() {
    var a = Math.random();
    var b = Math.random();
    // var c = [[Math.round(a * 1000), a > 0.6],[Math.round(b * 1000), b > 0.6]];
    // var c = [Math.round(a * 1000), a > 0.6];
    var c = [Math.round(a * 10000), Math.round(b * 1000)];
    return c;
}

var myChart = echarts.init(document.getElementById('info'));
myChart.setOption(option);

setTimeout(function () {

    myChart.on('mouseup', function (params) {
        if (!down) {
            return;
        }
        down = false;

        var e = params.event;

        var geoCoord = myChart.convertFromPixel('series', [e.offsetX, e.offsetY]);

        myChart.setOption({
            series: [{
                center: geoCoord,
                zoom: 4,
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut'
            }]
        });
    });

    var down;
    myChart.on('mousedown', function () {
        down = true;
    });
    myChart.on('mousemove', function () {
        down = false;
    });

}, 0);
