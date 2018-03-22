import * as mongoose from  'mongoose';
import db from '../db/mongo';
const Schema = mongoose.Schema;

const logSchema = new Schema({
  "name": {type: String},
  "hostname": String,
  "pid": Number,
  "level": Number,
  "tagList": Array,
  "msg": String,
  "time": String,
  "v": Number
},{collection:"log", strict: false});

const logModel = db.model('logModel', logSchema);

export default logModel;