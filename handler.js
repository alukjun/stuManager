/**
 * 业务模块
 */
const STUDENT_COL = 'students';
const CITIE_COL = 'cities';
const MAJOR_COL = 'majors';
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
//显示添加页面
module.exports.showAdd = function (req, res) {

    var _id = db.Objectid(req.query._id);

    db.findAll(CITIE_COL, function (err, data_cities) {
        if (err) {
            throw err;
        }
        db.findAll(MAJOR_COL, function (err, data_majors) {
            if (err) {
                throw err;
            }

            res.render('add', {
                cities: data_cities,
                majors: data_majors
            });

        })
    })

}
//添加提交
module.exports.postAdd = function (req, res) {
    //1.想获取添加的数据
    console.log(req.body);
    var obj = {
        sno: req.body.sno,
        sname: req.body.sname,
        sgender: req.body.sgender == 'M' ? '男' : '女',
        sbirthday: req.body.sbirthday,
        sphone: req.body.sphone,
        saddr: req.body.saddr,
        smajor: req.body.smajor
    }

    //2.将获取的数据添加到数据库
    db.insertOne(STUDENT_COL, obj, function (err) {
        if (err) {
            throw err;
        }

        res.redirect('/students');
    })
}
//编辑页面显示
module.exports.showEdit = function (req, res) {

    //1.先获取_id
    var _id = db.Objectid(req.query._id);
    // console.log(_id);
    //2.根据_id查询数据
    db.findOne(STUDENT_COL, _id, function (err, doc) {

        if (err) {
            throw err;
        }
        db.findAll(CITIE_COL, function (err, data_cities) {

            if (err) {
                throw err;
            }

            db.findAll(MAJOR_COL, function (err, data_majors) {

                //3.渲染
                res.render('edit', {
                    item: doc,
                    cities: data_cities,
                    majors: data_majors
                });
            })
        });
    });
}
//编辑页的提交
module.exports.postEdit = function (req, res) {
    //1.先获取表单的数据
    // console.log(req.body);
    var obj = {
        sno: req.body.sno,
        sname: req.body.sname,
        sgender: req.body.sgender == 'M' ? '男' : '女',
        sbirthday: req.body.sbirthday,
        sphone: req.body.sphone,
        saddr: req.body.saddr,
        smajor: req.body.smajor
    }
    var _id = db.Objectid(req.body._id);
    //2.然后将数据提交
    db.updateOne(STUDENT_COL, _id, obj, function (err) {

        if (err) {
            throw err;
        }

        res.redirect('/students');

    })

    //2.将获取的数据添加到数据库

    //3.重定向
}
//删除功能
module.exports.deleteOne = function (req, res) {
    var _id = db.Objectid(req.query._id);
    db.deleteOne(STUDENT_COL,_id,function(err){
        if(err){
            throw err;
        }
        res.redirect('/students');
    })
}