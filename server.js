/**
 * 学生信息管理系统
 * 入口文件
 * author:caijunjun
 */

 var express = require('express');

 var app = express();


 app.get('/',function(req,res){

    res.send('ok');
 });


 app.listen(8080,function(){
     console.log(`服务器启动了 http://localhost:8080`);
 })