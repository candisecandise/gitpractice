// 统一提交入口
function validSubmit(form){
    // 添加其他验证方法
    var re = checkOther(form);
    if($(form).valid() && re){
        $(form).submit();
    }
}
// ajax 提交
function ajaxSubmit(form){
	console.log(112)
    $.ajax({
        type:"POST",
        url:$(form).attr("action"),
        data:$(form).serialize(),
        success:function (result) {
            if (result=='success') {
                closeLayer();
                parent.location.reload(true)
            }else{
                alert("提交失败")
            }
        }
    })
}