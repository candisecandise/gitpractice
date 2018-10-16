function openUrl(c) {
    layer.open({
        type:2,
        title:'注册',
        area:['800px','500px'],
        content:c
    });
}
function closeLayer() {
    // window.name 是什么？？
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);

}
//ajax 读取
function read(a,b,c,url) {
    $.ajax({
        url: url,//json文件位置
        type: "GET",//请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) {//请求成功完成后要执行的方法
            if(data){
                // alert("读取成功");
                console.log(data);
                console.log(data[0]);
                console.log(data[1]);
                console.log(data[2]);
                $(a).val(data[0]);
                $(b).val(data[1]);
                $(c).val(data[2]);
            }
        }
    })
}