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
},{collection:"log"})

const logModel = db.model('logModel', logSchema);

export async function get(id?: number){
  if(!!id){
    
  }else{

  }
} 

export default logModel;