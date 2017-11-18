/**
 * 业务模块
 */

 var mongodb = require('mongodb');
 const DB_URL = 'mongodb://127.0.0.1:27017/sms';

//首页
module.exports.index = function(req,res){

    res.render('index');

}

//学生信息页
module.exports.students = function(req,res){

    //连接数据库
    var mc = mongodb.MongoClient;
    var url = DB_URL;
    mc.connect(url,function(err,db){
        if(err){
            throw err;
        }
    
        db.collection('students').find().toArray(function(err,docs){

            if(err){
                throw err;
            }

            db.close();

            res.render('students',{ list:docs });
        });
    })
}