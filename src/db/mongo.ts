import * as mongoose from 'mongoose';
import * as config from 'config';
// import logModel from '../model/log';

// export const db =  mongoose.connect(config.get<string>('mongodb'));
const db = mongoose.createConnection(config.get<string>('mongodb.url'), config.get<any>('mongodb.options'));
db.on('error', console.error.bind(console, 'mongodb connection error'));
db.once('open', function(){

  console.log('mongodb connected ' + config.get<string>('mongodb.url'));
  // console.log(logModel.findOne({name:"wss"}));

})
export default db;