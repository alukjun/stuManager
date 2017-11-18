/**
 * 路由注册模块
 */

var express = require('express');
var router = express.Router();
var handler = require('./handler');

//首页
router.get('/', handler.index);

router.get('/index', handler.index);

router.get('/students', handler.students);

//详情页
router.get('/info', handler.info);
//添加页
router.get('/add', handler.showAdd);

router.post('/add', handler.postAdd);

//编辑页
router.get('/edit', handler.showEdit);

router.post('/edit', handler.postEdit);

//删除get
router.get('/delete', handler.deleteOne);

module.exports = router;