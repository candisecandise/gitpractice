<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>validate example</title>
    <link rel="stylesheet" href="./css/common.css">
    <script src="./js/jquery-1.11.1.js"></script>
    <script src="./js/validate/jquery.validate.js"></script>
    <script src="./js/validate/messages_zh.js"></script>
    <script src="./js/validate/additional-methods.js"></script>
    <script src="./js/common.js"></script>
    <!-- <script src="./js/jquery.metadata.js"></script> -->
    <script>
        $().ready(function() {
            $("#formId").validate({
                debug: true,
                rules: {
                    username:{
                        byteRangeLength:[1,10],
                        required:true,
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                },
                submitHandler:function(form){
                    alert("提交事件!");
                    //   js 原生方法提交
                    document.getElementById("formId").submit();
                    //  jquery 提交需要用form
                    // form.submit();
                    // ajax 提交
                    // ajaxForm("#formId");
                }
            });
        });
        function ajaxForm(form) {
                $.ajax({
                    url: '${pageContext.request.contextPath}/validateForm',
                    // async: false,//同步，会阻塞操作
                    type: 'POST',//PUT DELETE POST
                    data: $(form).serialize(),
                    dataType:'text',
                    success: function (result) {
                        if (result=='success') {
                            alert("修改成功");
                            // window.location.reload();
                            // window.open("success.jsp","_blank");
                            closeLayer();
                            // 直接上层
                            // parent.location.reload(true);
                            // 父页面执行 read 方法
                            parent.read('#count2','#username2','#password2',"${pageContext.request.contextPath}/refreshForm");
                        } else {
                            alert("修改失败1")
                        }
                    },
                    error: function () {
                        alert("修改失败2")
                    },
                    complete: function (msg) {
                        console.log('完成了');
                    },
                })
        }（）
        function submitForm(form) {
            alert("提交")
            $("#formId").submit();
            // js 原生方法提交 不走 submithandler
            // document.getElementById("formId").submit();
            // if($("#formId").validate().form()){
            // if($(form).valid()){
            // jquery 提交方法，会走到 submithandler
            //     $(form).submit();
            // }
        }

    </script>
</head>
<body>
<form action="${pageContext.request.contextPath}/validateForm" method="get" id="formId" enctype="multipart/form-data">
    <table>
        <tr>
            <td width="50px" style="text-align: right;"><label for="username">用户名</label></td>
            <td><input  id="username" name="username" /></td>
        </tr>
        <tr>
            <td width="50px" style="text-align: right;"><label for="password">密码</label></td>
            <td><input type="text" id="password"  name="password"></td>
        </tr>
        <tr>
            <td colspan="2"><input  name="aaa" type='buttom' value="确定提交"  onclick="submitForm('#formId')"></td>
            <%--<td colspan="2"><a id="aaa" onclick="submitForm('#formId')">提交</a></td>--%>
        </tr>
        <%--<tr>--%>
            <%--<td colspan="2"><a onclick="()">读取</a></td>--%>
        <%--</tr>--%>
    </table>
</form>
</body>
</html>