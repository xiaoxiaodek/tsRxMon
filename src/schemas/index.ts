import {Schema} from 'mongoose';

const logSchema = new Schema({
    "name": { type: String },
    "hostname": String,
    "pid": Number,
    "level": Number,
    "tagList": Array,
    "msg": String,
    "time": String,
    "v": Number
}, { collection: "log", strict: false });

const commentSchema = new Schema({
    'id': Number,
    'user': String,
    'level': Number,
    'no': Number,
    'parentId': Number,
    'commentTime': String,
    'commentText': String,
    'pictureUrl': String,
    'tagId': Number
}, { collection: "comment", strict: false });

const userSchema = new Schema({
    'name': String,
    'password': String,
    'salt': String,
    'email': String,
    'avatar': String, 
    'level': String, 
    'msg': String, 
    'createTime': String,
    'updateTime': String,
    'tag_id': Number
}, { collection: "user", strict: false });

const tagSchema = new Schema({
    'id': Number,
    'name': String,
    'level': Number,
    'parentId': Number,
    'msg': String,
    'createTime': String
}, { collection: "tag", strict: false });

export {logSchema, commentSchema, userSchema, tagSchema}