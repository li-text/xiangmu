<?php
//接受前端传过来的数据
$uname=$_POST['username'];
$upass=$_POST['password'];

// 去数据库里查询有没有这个数据
// 连接
$link = mysqli_connect('localhost', 'root', 'root', 'text1911');
//执行sql语句
$sql="SELECT * FROM `user` WHERE `username`='$uname' AND `password`='$upass'";
$res=mysqli_query($link,$sql);
// print_r($res)

//解析结果
$row=mysqli_fetch_assoc($res);
// print_r($row)
//断开连接
// mysqli_close($link);

if ($row) {
    $arr = array("message" => "登录成功", "code" => 1);
  } else {
    $arr = array("message" => "登录失败", "code" => 0);
  }

  // 把这关联型数组返回
  print_r(json_encode($arr));












?>