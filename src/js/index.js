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

//点击小米手机.bpx1显示
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
                mouseover:()=>$('.nav_box').stop().slideDown(),
                mouseleave:()=>$('.nav_box').stop().slideUp()
            }) 
            .children('li')
            .on('mouseover',function(){
                const index=$(this).index()
                const list=res[index].list
                let str='';
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
                $('.nav_box>ul').html(str)
            })
            $('.nav_box').on({
                mouseover:function(){$(this).finish().show()},
                mouseout:function(){$(this).finish().slideUp()}
            })
         }
   
        
    })
}
getList()

//左边导航栏渲染
function getList1(){
    $.ajax({
        url:'../lib/nav_left.json',
        dataType:'json',
        success:function(res){
            console.log(res);
            let str1 = ''
            res.forEach(item => {
            str1 += `
    
              <li>
                <p>${ item.title }</p>
                <span>></span>
                </li>
                `
     
        //    item.list.forEach(item2 => {
        //         console.log(item2.list);
                
        //       str1 += `<li>${ item2.name }</li>`
        //     })
     
          })
          $('.box2>ul').html(str1)
        //   $('.box2>ol').html(str1)
        
        $('.box2>ul').on({
         mouseover: function(){$('.box2>ol').finish().show()},
          mouseleave: function(){$('.box2>ol').finish().hide()}
        })

       
      
     }
  
})
}
getList1();

//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
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