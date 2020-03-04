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
