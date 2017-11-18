/**
 * 业务模块
 */

const STUDENT_COL = 'students';
var db = require('./db');
//首页
module.exports.index = function (req, res) {

    res.render('index');

}

//学生信息页
module.exports.students = function (req, res) {

    //连接数据库
    db.findAll(STUDENT_COL, function (err, docs) {

        if (err) {
            throw err;
        }
        res.render('students', {
            list: docs
        });
    });
}

//学生个人信息页
module.exports.info = function (req, res) {

    var _id = req.query._id;
    _id = db.Objectid(_id);

    db.findOne(STUDENT_COL, _id, function (err, doc) {
        if (err) {
            throw err;
        }
        res.render('info', {
            item: doc
        });
    });

}

module.exports.showAdd = function (req, res) {

    res.send('add');
}