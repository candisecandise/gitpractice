
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>validate example</title>
    <%--<link rel="stylesheet" href="./css/layer/layer.css">--%>
    <script src="./js/jquery-1.11.1.js"></script>
    <script src="./js/layer/layer.js"></script>
    <script src="./js/common.js"></script>
    <script>
        $().ready(function () {
            read('#count2','#username2','#password2',"${pageContext.request.contextPath}/refreshForm");
        })
    </script>
</head>
<body>
<button onclick="openUrl('${pageContext.request.contextPath}/startForm')">注册</button>
<button onclick="read('#count2','#username2','#password2','${pageContext.request.contextPath}/refreshForm')";>刷新</button>
<br/>
<div>
    已有<input  id="count2" value="" />人注册<br/>
    最新注册的用户是
    <table>
        <tr>
            <td width="50px" style="text-align: right;">用户名</td>
            <td><input  id="username2" value="${username}" /></td>
        </tr>
        <tr>
            <td width="50px" style="text-align: right;">密码</td>
            <td><input  id="password2" value="${password}" /></td>
        </tr>
        <tr>
            <td width="50px" style="text-align: right;">密码</td>
            <td><input   value="" /></td>
        </tr>
    </table>
</div>
</body>
</html>