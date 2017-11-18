/**
 * 路由注册模块
 */

var express = require('express');
var router = express.Router();

//首页
router.get('/', function (req, res) {

    res.send('ok');
});

router.get('/index',function(req,res){

    res.send('index');
})

router.get('/student',function(req,res){

    res.send('student');
})

//详情页
router.get('/info',function(req,res){

    res.send('info');
})
//添加页
router.get('/add',function(req,res){
    res.send('add');
})

router.post('/add',function(req,res){
    res.send('add post');
})

//编辑页
router.get('/edit',function(req,res){
    res.send('edit');
})

router.post('/edit',function(req,res){
    res.send('edit post');
})

//删除get
router.get('/delete',function(req,res){
    res.send('delete');
})

module.exports = router;