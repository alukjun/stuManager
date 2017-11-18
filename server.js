/**
 * 学生信息管理系统
 * 入口文件
 * author:caijunjun
 */

 var express = require('express');
 var router = require('./router');

 var app = express();

 

 app.use(router);

 app.listen(8080,function(){
     console.log(`服务器启动了 http://localhost:8080`);
 })