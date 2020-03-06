var name=document.querySelector('.username');
var pass=document.querySelector('.password');
//绑定事件
var form=document.querySelector('form');
form.onsubmit=function(e){
    //阻止默认事件
    e.preventDefault();
    //获取表单内容
    var uname=name.value;        //undefined
    var upass=pass.value;
    if(!uname||upass){
        alert('密码或同户名错误')
        return
    }
    postSend('/login',function(res){
        var result=JSON.parse(res)
        if(result.code===0){
            alert('密码或同户名错误')
        }
        else{
            setCookie('login',1,86400)  //1天
            window.location.href='../pages/index.html'
        }
    },`username=${uname}&password=${upass}`)
    
}
