var username=document.querySelector('.username');
var pass=document.querySelector('.password');
//绑定事件

$('.btn').on('click',function(e){
     //阻止默认事件
     e.preventDefault();
     //获取表单内容
     var uname=username.value;    
    //  console.log(uname);       
         
     var upass=pass.value;
    //  console.log(upass);
     
     if(!uname||!upass){
         alert('密码或同户名错误')
         return
     }
     postSend('/login',function(res){

         console.log(res);
         
         var result=JSON.parse(res)
         if(result.code===0){
             alert('密码或同户名错误')
         }
         else{
            //  setCookie('login',1,86400)  //1天
             window.location.href='../pages/index.html'
         }
     },`username=${uname}&password=${upass}`)
     
})
   

