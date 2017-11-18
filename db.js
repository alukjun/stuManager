/**
 * 数据库操作模块
 */


var mongodb = require('mongodb');
const DB_URL = 'mongodb://127.0.0.1:27017/sms';

function cjj_DB_Connect(callback) {
    var mc = mongodb.MongoClient;
    var url = DB_URL;
    mc.connect(url, function (err, db) {
        callback(err, db);
    })
}

module.exports.findAll = function (collectionName, callback) {

    cjj_DB_Connect(function (err, db) {

        if (err) {
            throw err;
        }

        db.collection(collectionName).find().toArray(function (err, docs) {

            db.close();

            callback(err, docs);
        })
    })
}

module.exports.findOne = function (collectionName, _id, callback) {
    cjj_DB_Connect(function (err, db) {

        if (err) {
            throw err;
        }

        db.collection(collectionName).findOne({
            _id
        }, function (err, doc) {

            db.close();

            callback(err, doc);

        })
    })
}

module.exports.insertOne = function (collectionName, obj, callback) {
    cjj_DB_Connect(function (err, db) {

        if (err) {
            throw err;
        }

        db.collection(collectionName).insertOne(obj, function (err) {

            if (err) {
                throw err;
            }

            // console.log('ok');

            db.close();

            callback(err);
        })
    })

}

module.exports.updateOne = function (collectionName, _id, obj, callback) {
    cjj_DB_Connect(function (err, db) {

        if (err) {
            throw err;
        }

        db.collection(collectionName).updateOne({
            _id
        }, obj, function (err) {

            if (err) {
                throw err;
            }

            db.close();

            callback(err);
        })
    })
}

module.exports.deleteOne = function (collectionName, _id, callback) {
    cjj_DB_Connect(function (err, db) {

        if (err) {
            throw err;
        }
        db.collection(collectionName).deleteOne({
            _id
        }, function (err) {
            if (err) {
                throw err;
            }
            db.close();
            callback(err);
        })
    })
}

module.exports.Objectid = function (idStr) {
    return mongodb.ObjectId(idStr);
}