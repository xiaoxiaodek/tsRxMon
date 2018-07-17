import models from '../models/index';
import LogCache from '../util/logCacheCron';
const logModel = models.logModel;
const logCache = new LogCache();
const logger = class {
    // type: string;
    // constructor(type: string) {
    //     this.type = type;
    // };

    i(...params: any[]) {
        logCache.write('info', params.join(' '));
    };
    w(...params: any[]) {
        logCache.write('warn', params.join(' '));
    };
    e(...params: any[]) {
        logCache.write('error', params.join(' '));
    };
    f(...params: any[]) {
        logCache.write('fata', params.join(' '));
    }
}

export default new logger;
