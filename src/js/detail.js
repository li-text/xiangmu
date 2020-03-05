
// console.log($('.top').scrollTop());







//获取从列表页得到的数据
const Info=JSON.parse(localStorage.getItem("info"));
// console.log(Info);
//判断里面是否有数据，没有就跳转至list页
if(!Info){
    window.location.href='../pages/list.html';
}
//渲染页面 localStorage渲染的方法
bindHtml()
function bindHtml(){
   $('.box>img').attr('src',Info.list_url);
   $('.box>ul>li').eq(0).text(Info.list_name);
   $('.box>ul>li').eq(1).text(Info.list_desc);
   $('.box>ul>li').eq(2).text("￥: "+Info.list_price+"元");
}

//点击添加购物车
$('.addCart').click(function(){
    //判断是否登录？如果没有就跳转至登录页面


    //拿到localstorage里面的数据  如果没有数据就用空数组代替
    const gwcList=JSON.parse(localStorage.getItem('gwcList'))||[];
    // console.log(cartList);
    //没有的情况下，在本次数组里添加Info

    //判断是不是有这个数据，使用id 用数组中some方法，遍历数组的每个元素，有一个满足就返回true
    //现在localstorage里有两个key，一个是info  一个是gwcList
   //判断购物车里的id和info里的id是不是一样 
    let exits=gwcList.some((item)=>{
        return item.list_id===Info.list_id;
    })
    // console.log(exits);  返回值是true或者false
    //判断
    if(exits){
        let data=null;   //data是一个对象
        // console.log(gwcList);
        // console.log(gwcList.length);
        for(let i=0;i<gwcList.length;i++){  //遍历所有的购物车里的列表
            if(gwcList[i].list_id===Info.list_id){ //找到当前的页面的id与购物车里面的id一致时
                data=gwcList[i];
                // gwcList[i].num++;  //找到的那个数据中num属性的属性值+1
                break;
            }
        }
        data.num++;          //直接设置num
    //    console.log(data);
    data.xiaoji=data.num*data.list_price;   //设置小计=数量*单价
    console.log(data);
    
       
    }else{
        Info.num=1;     //设置num属性，值为1   设置的是从list列表里带过来的数组
        
        //多添加一些信息  都是本来没有的，后添加进Info中，加入到购物车里
        Info.xiaoji=Info.list_price;
        Info.isSelect=false  //默认不选中
        gwcList.push(Info);   //没有这个数据就push进去，加入到购物车里
    }

    // console.log(cartList);
    //再重新存储到localstorage里面
    localStorage.setItem('gwcList',JSON.stringify(gwcList))





    
 
    
    
})