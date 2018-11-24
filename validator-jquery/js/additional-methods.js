$.extend( $.validator.messages, {
  required: "这是必填字段",
  remote: "请修正此字段",
  email: "请输入有效的电子邮件地址",
  url: "请输入有效的网址",
  date: "请输入有效的日期",
  dateISO: "请输入有效的日期 (YYYY-MM-DD)",
  number: "请输入有效的数字",
  digits: "只能输入数字",
  creditcard: "请输入有效的信用卡号码",
  equalTo: "你的输入不相同",
  extension: "请输入有效的后缀",
  maxlength: $.validator.format( "最多可以输入 {0} 个字符" ),
  minlength: $.validator.format( "最少要输入 {0} 个字符" ),
  rangelength: $.validator.format( "请输入长度在 {0} 到 {1} 之间的字符串" ),
  range: $.validator.format( "请输入范围在 {0} 到 {1} 之间的数值" ),
  max: $.validator.format( "请输入不大于 {0} 的数值" ),
  min: $.validator.format( "请输入不小于 {0} 的数值" )
} );


$.validator.setDefaults({
    // css 类名
    errorClass:"myerror",
    // 错误标签
    errorElement:"div",
    errorPlacement: function(error, element) {
        var h = element.outerHeight();
        var w = element.outerWidth();
        var left = element.offset().left + w;
        var top = element.offset().top + h;
        
        element.hover(function(){
            error.insertAfter(element);
            error.removeClass("hide");
            error.addClass("tooltip arrow-left");
            error.css({   
                // 'height':h,
                // 'width':w,
                'top': top,
                'left': left,
            });
        },function(){
            console.log(2)
            // 滑走没有错误提示
            error.removeAttr("style");
            error.addClass("hide")
        })
    },

});

jQuery.validator.addMethod("isZipCode", function(value, element) {   
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");

// 字节长度验证
jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
    var length = value.length;
    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 127) {
            length++;
        }
    }
    return this.optional(element) || (length >= param[0] && length <= param[1]);
}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));

jQuery.validator.addMethod("af",function(value,element,params){
   if(value.length>1){
    return false;
   }
   if(value>= 'a'&& value<='f'){
    return true;
   }else{
    return false;
   }

},"必须是一个字母,必须是一个字母,且a-f");

jQuery.validator.addMethod("myfn",function(value,element,params){
  console.log(111)
  if(value<=10){
    return true;
  }else{
    return false;
  }
},"请输入小于10的数字")

