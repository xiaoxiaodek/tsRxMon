import redis from '../core/redis';
import models from '../models/index';
import * as lodash from 'lodash';
const logModel = models.logModel;
interface cache {
    capacity: number;
    length: number;
    write(type: string, s: string): void;
}

export default class logCache implements cache {
    capacity: number;
    length: number;
    constructor(capacity ? : number) {
        // this.capacity = capacity || 10000;
        this.capacity = capacity || 1000;
        this.length = 0;
    }
    async write(type: string, s: string) {
        let self = this;
        try {
            // return new Promise(async (resolve, reject) => {
            if (self.length >= self.capacity) {
                let cacheData: string[];
                await redis.lrange(type, 0, -1, async (e, d) => {
                    cacheData = d.map((val, index) => {
                        return JSON.parse(val);
                    });
                    await logModel.insertMany(cacheData);
                    redis.ltrim(type, 0, 0);
                    self.length = 0;
                });
            }
            redis.rpush(type, s);
            self.length++;
        } catch (e) {
            console.log('妈耶！', e);
        }
        // }).catch((e)=>{});
    }
}