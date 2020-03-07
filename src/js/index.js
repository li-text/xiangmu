//利用钩子函数
//发送的时候显示
$('button').ajaxSend(function(){
    $('ul>img').show();
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

//点击小米手机.box1显示
function getList(){
    $.ajax({
        url:"../lib/nav.json",
        dataType:'json',
        success:function(res){
            // console.log(res);
         let str=''  
         res.forEach(item => {
             str+=`<li>${item.name}</li>`
         });

            $('.nav_top>ul').html(str).on({
                mouseenter:()=>$('.nav_box').stop().slideDown(),
                mouseleave:()=>$('.nav_box').stop().slideUp()
            }) 
            .children('li')//找到所有的一级菜单下的li
            .on('mouseover',function(){
                const index=$(this).index()//找到自己移入的是哪一个li
                // console.log(index);
                const list=res[index].list//找到要渲染的数组
               console.log(list);
              //  用我们找到的数组把nav_box位置渲染了就可以
                let str='';
              //进行组装
                list.forEach(item=>{
                    str+=`
                    <li>
                    <div>
                      <img src="${ item.list_url }" alt="">
                    </div>
                    <p class="title">${ item.list_name }</p>
                    <span class="price">${ item.list_price }</span>
                  </li>
                
                    `
                })
                // 填充到页面
                $('.nav_box>ul').html(str)
            })
            //给nav_box添加一个移入移除
            $('.nav_box').on({
                mouseover:function(){$(this).finish().show()},
                mouseout:function(){$(this).finish().slideUp()}
            })
         }

        
    })
}
getList()

//左边导航栏渲染
getList1()
function getList1(){
  $.ajax({
    url:"../lib/nav_left.json",
    dataType:"json",
    success:function(res){
      // console.log(res);//讲数据拿出来
      //创建一个字符串
      let str=''
      //进行外层数组循环，渲染一级标题  根据一级菜单鼠标事件出现二级菜单
      res.forEach(item=>{
        str +=`
        <li>
          <p>${item.title}</p>
          <span>></span>  
        </li>
        `
      })
      //填充到nav_leftl里面的ul
      $('.nav_left>ul')
      .html(str)
       .on({
        mouseenter:()=>$('.nav_right').stop().slideDown(),
        mouseleave:()=>$('.nav_right').stop().slideUp()
      })
      .children('li')
      .on('mouseover',function(){
        
        //         let  index = $(this).index()
                  // console.log(index);
        
                  // 5-2. 找到要渲染的数组
                  let  list = res[$(this).index()].list
                // console.log(list);

                  // 5-3. 用我们找到的数组把 nav_box 位置渲染了就可以了
                  let str1 = ''
                  // 5-4. 进行组装
                  list.forEach(item2 => {
                    //  console.log(item2);
                    str1 = `<li><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90" />
                            <p>${item2.name}</p>
                    </li>`
                  })
                  // console.log(str1)
                  
              $('.nav_right>ul').html(str1)
              // console.log(str1)
        // console.log($('.nav_right>ul')[0]);
        
        })
        .on({
          mouseenter: () => $('.nav_right').stop().css("display","block"),
          mouseleave: () => $('.nav_right').stop().css("display","none")
        })     
     
      $('.nav_right')
        .on({
          mouseover: function () { $(this).finish().show() 
},
          mouseout: function () { $(this).finish().css("display","none") }
        })
    }
  })
}

//轮播图
var mySwiper = new Swiper ('.banner1', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:{
        delay:3000
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        

  //倒计时
  var nums =$('.num');
  //设定未来时间
  var future_time=new Date("2020-03-07 10:50:00");
  function print(){
  //设定现在时间
  var now_time=new Date();
  //设定剩余时间
  var surplus=Math.ceil((future_time-now_time)/1000);
  if(surplus>=0){
  var hour=Math.floor(surplus/3600);
  var min=Math.floor(surplus%3600/60);
  var sec=Math.floor(surplus%60);
//   var str=(two(hour)+two(min)+two(sec));
//   console.log(surplus);
  var str=""+two(hour)+two(min)+two(sec);//将str转化成字符串形式，方便使用字符串的方法
//    var str=''+hour+min+sec;
  // console.log(str);
 for(var i=0;i<str.length;i++){
    nums[i].innerText=str[i]
 }
  
  }
}
  
  var timer=setInterval(print,1000);
  function two(n){
      return n<10? "0"+n:n;
  }
  


  //tab选项卡
  var mySwiper = new Swiper ('.banner2', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:{
      delay:2000

  },
  navigation: {
    nextEl: '.qian',
    prevEl: '.hou',
  },
  })        


  //渲染手机
  function getList3(){
    $.ajax({
        url:"../lib/main1.json",
        dataType:'json',
        success:function(res){
            // console.log(res);
         let str=''  
         res.forEach(item => {
          //  console.log(item);
           
             str+=
             `
              <li>
              <img src="${item.list_url}" alt="">
              <p class='title'>${item.list_name}</p>
              <span class='detail'>${item.list_js}</span>
              <em class='price1'>${item.list_price}</em>
            </li>`
         });

            $('.smallbox>ul').html(str)
          
         }

        
    })
}
getList3()
//渲染家电
function getList4(){
  $.ajax({
      url:"../lib/jiadian.json",
      dataType:'json',
      success:function(res){
          // console.log(res);
       let str=''  
       res.forEach(item => {
        //  console.log(item);
         
           str+=
           `
           <li>
           <img src="${item.url}" alt="">
          
   
         </li>
         `
       });

          $('.a1>ul').html(str);

       }
      
  })
}
getList4()

//电视
function getList5(){
  $.ajax({
    url:'../lib/remen.json',
    dataType:'json',
    success:function(res){
      // console.log(res);
      let str=''
     res.forEach(function(item){
      // console.log(item);
      str+=`
      <li>
        <img src="${item.url}" alt="">
        <p>${item.name}</p>
        <span>${item.js}</span>
        <div class='money'>${item.price}</div>

      </li>
      `
     })
      $('.a2>ul').html(str)
      
    }
  })
}
getList5();
//影音
function getList6(){
  $.ajax({
    url:'../lib/yinying.json',
    dataType:'json',
    success:function(res){
      // console.log(res);
      let str=''
     res.forEach(function(item){
      // console.log(item);
      str+=`
      <li>
        <img src="${item.url}" alt="">
        <p>${item.name}</p>
        <span>${item.js}</span>
        <div class='money'>${item.price}</div>

      </li>
      `
     })
      $('.a3>ul').html(str)
      
    }
  })
}
getList6();

//点击事件热门，电视影音
$('.d1').mouseover(function(){
  $('.a2').show();
  $('.a3').hide() 
  $('.d1').css('color',"orange").css('text-decoration','underline')
})

$('.d1').mouseout(function(){
  $('.a2').finish();
  $('.d1').css('text-decoration','none').css('color',"black");
})

$('.d2').mouseover(function(){
  $('.a2').hide();
  $('.a3').show()
  $('.d2').css('color',"orange").css('text-decoration','underline').css('display','block')
})

$('.d2').mouseout(function(){
  $('.a3').finish();
  $('.d2').css('text-decoration','none').css('color',"black");
})


//点击登录跳转登录页面
$('.nav>ul').eq(1).on('click','li',function(){

  window.location.href='../pages/login.html'   //点击空的地方才能登录

})