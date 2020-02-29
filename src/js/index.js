//利用钩子函数
//发送的时候显示
$('button').ajaxSend(function(){
    $('img').show();
    $('.p1').show();
});
//完成的时候隐藏
$('button').ajaxComplete(function(){
    $('img').hide();
    $('.p1').hide();
});
//点击按钮会发送请求
$('button').click(function(){
    $.ajax({
        //发送至我的购物车
        
      })
})