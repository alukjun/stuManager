/**
 * 数据库操作模块
 */


var mongodb = require('mongodb');
const DB_URL = 'mongodb://127.0.0.1:27017/sms';
module.exports.findAll = function (collectionName,callback) {
    //连接数据库
    var mc = mongodb.MongoClient;
    var url = DB_URL;
    mc.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        db.collection(collectionName).find().toArray(function (err, docs) {

            db.close();

            callback(err, docs);
        })
    })
}

module.exports.findOne = function(collectionName,_id,callback){
    var mc = mongodb.MongoClient;
    var url = DB_URL;
    mc.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        db.collection(collectionName).findOne({
            _id
        }, function (err, doc) {

            db.close();

            callback(err,doc);

        })
    })        
}

module.exports.Objectid = function(idStr){
    return mongodb.ObjectId(idStr);
}