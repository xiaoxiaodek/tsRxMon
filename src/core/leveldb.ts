import * as config from 'config';
import logger from './logger';
const levelup = require('levelup');
const leveldown = require('leveldown');

const LevelPath = config.get<string>('leveldb.path');

let db: any = {};

export async function init() {
    let _db: any = await levelup(leveldown(LevelPath));
    // db = _db;
    logger.i('leveldb init done');
    // db.put = _db.put;
    // db.get = _db.get;
    // db.del = _db.del;
    db.get = (key: any) => _db.get(key);
    db.put = (key: any, value: any) => _db.put(key, value);
    return _db;
}

export default db;