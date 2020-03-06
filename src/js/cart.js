//购物车页面渲染
//获取localstorage中的购物车数组
const cartList=JSON.parse(localStorage.getItem('cartList'));
// console.log(gwcList);   //存储的数组中有对应的购物车中的对象

//判断数组中有没有数据
if(!cartList){
    // document.innerText('你的购物车没有东西，快去添加吧！')
    $('html').text('你的购物车没有东西，快去添加吧！')
    // alert('你的购物车没有东西，快去添加吧！')
}else{
    //渲染页面
    bindHtml()
    //添加事件
    bindEvent()
}
function bindHtml(){
    //整体渲染页面
    //渲染全选，只要isSelect有一个是false，就渲染false  使用数组里的every方法
    let selectAll=cartList.every(item=>{  //遍历购物车列表里的每一项
        return item.isSelect===true;
    })
    let str=`
            <div class="top">
            <input class='selectAll' type="checkbox" ${selectAll ? 'checked':''} >全选       
            
        </div>
        <ul class="center">
            `
          
            cartList.forEach(item => {  //不清楚购物车里带了多少数据，循环遍历一下
            //    console.log(item);
               
                str+=`
                <li>
                <div class="select">
                    <input data-id=${item.list_id} class="select1" type="checkbox" ${item.isSelect ? 'checked':""}>
                </div>
                <div class="info">
                    <img src="${item.list_url}" alt="">
                    <p>${item.list_desc}</p>
                </div>
                <p class="price">${item.list_price}</p>
                <div class="number">
                    <button class="sub" data-id=${ item.list_id }>-</button>
                    <input type="text" value='${item.number}'>
                    <button class="add" data-id=${ item.list_id }>+</button>
                </div>
                <p class="xiaoji">${item.xiaoji}</p>
                <div class="del" data-id=${ item.list_id }>删除</div>
            </li>
           
                ` 
            })
              //选中商品数量需要渲染
              let selectArr=cartList.filter(item=>{
                    return item.isSelect===true;
                    console.log(selectArr);
                    
            })

            //选中的商品数量计算一下
            let selectNumber=0;
             //选中的商品总结计算一下
             let selectPrice=0
            selectArr.forEach(item=>{
                selectNumber+=item.number;  //所有选中的num相加
                selectPrice+=item.xiaoji;//所有选中的小计相加 得出总价
            })


            str+=`
            </ul>
            <div class="bottom">
            <p> 总价： <span>${selectPrice}</span></p>
            <p> 选中商品数量<span>${selectNumber}</span></p>
            <button class='pay' ${selectArr.length ? '':"disabled"}>支付</button>
            <button class='clear'>清空购物车</button>
        </div>
    `
    $('.cart').html(str)
}

function bindEvent(){
    //因为页面会改变元素，所以使用事件委托
    $('.cart').on('change','.selectAll',function(){
      //全选按钮状态改变，下面的按钮状态也改变
      cartList.forEach((item)=>{
          item.isSelect=this.checked;
      })
        bindHtml()  //需要渲染页面，不然总价以及数量不显示
    //在页面重新存储一遍localstorage
    localStorage.setItem('cartList',JSON.stringify(cartList))
    })

    //单选
    $('.cart').on('change','.select1',function(){
        // console.log($(this).data('id'));
        const id =$(this).data('id')
        cartList.forEach(item=>{
            if(item.list_id===id){
                item.isSelect=!item.isSelect
            }
        })
        bindHtml() 
        localStorage.setItem('cartList',JSON.stringify(cartList))
    })
    //点击减少
    $('.cart').on('click','.sub',function(){
        const id=$(this).data('id');
        cartList.forEach(item=>{
            if(item.list_id===id){
                //判断num－不能小于1
                item.number>1? item.number--:""
                item.xiaoji=item.list_price*item.number;
            }

        })
        bindHtml() 
        localStorage.setItem('cartList',JSON.stringify(cartList))
    })
//点击增加
$('.cart').on('click','.add',function(){
    const id=$(this).data('id');
    cartList.forEach(item=>{
        if(item.list_id===id){
            //判断num－不能小于1
          item.number++;
            item.xiaoji=item.list_price*item.number;
        }

    })
    bindHtml() 
    localStorage.setItem('cartList',JSON.stringify(cartList))
})

//点击删除
$('.cart').on('click','.del',function(){
    const id=$(this).data('id');  //为点击的删除按钮绑定特定的id
   
   let sc= cartList.filter(function(item){
    return item.list_id!==id;
    console.log(sc);
    // console.log(item.list_id);
    

    })
    bindHtml(sc) 
    localStorage.setItem('cartList',JSON.stringify(sc))   //必须要刷新才能删除，已经更新过页面了
})

//点击全部删除
$('.cart').on('click','.clear',function(){
   localStorage.removeItem('cartList')  //清除掉cartList中所有的内容

    })
    bindHtml() 
    

}