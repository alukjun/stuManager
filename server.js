/**
 * 学生信息管理系统
 * 入口文件
 * author:caijunjun
 */

 var express = require('express');
 var router = require('./router');
 var ejs = require('ejs');
 var path = require('path');

 var app = express();

 //配置模板引擎
 app.set('views',path.join(__dirname,'./htmls'));
 
 app.engine('html',ejs.renderFile);

 app.set('view engine','html');
 //挂载路由
 app.use(router);

 app.listen(8080,function(){
     console.log(`服务器启动了 http://localhost:8080`);
 })