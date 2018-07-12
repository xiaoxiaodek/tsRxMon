import models from '../models/index';
import * as bunyan from 'bunyan';
import { Observable } from 'rxjs';
import { Writable} from 'stream';
import LogCache from '../util/logCacheCron';
const logModel = models.logModel;

// const WritableStream = new Writable();
// WritableStream._write = ()=>{};
// WritableStream.addListener('open',(src) =>{
//     console.log('打印stream', src);
// });
// WritableStream.addListener('pipe', (src) => {
//     console.log('打印stream', src);
// });
// WritableStream.addListener('finish', () => {
//     console.log('打印stream');
// });
// WritableStream.addListener('error', (src) => {
//     console.log('打印stream', src);
// })

// const makeLogger = function(name: string = 'app'): bunyan {
//     const loggerInst = bunyan.createLogger({
//         name: name,
//         serializers: bunyan.stdSerializers,
//         streams: [{ // trace logger
//             level: 'trace',
//             stream: WritableStream
//         }, { // info logger
//             level: 'info',
//             stream: WritableStream
//         }, { // error logger
//             level: 'error',
//             stream: WritableStream
//         }]
//     });

//     return loggerInst;
// }

// const logger = class {
//     private name: string;
//     private loggerInst: bunyan;
//     private stream: Observable<any> ;
//     constructor(name?: string){
//         this.name = name;
//         this.loggerInst = makeLogger(name);
//         this.stream = Observable.fromEvent(WritableStream, '_write');
//         this.stream.subscribe(async (m) => {
//             console.log(m);
//         })
//     }
    
//     i(...params: any[]): any {
//         this.loggerInst.info.apply(this.loggerInst, params);
//     }
// }

/**
 * 待改
 */
// const infoLogCache = new LogCache();
// const warnLogCache = new LogCache();
// const errorLogCache = new LogCache();
// const fataLogCache = new LogCache();
// const logger = class {
//     type: string;
//     constructor(type: string){
//         this.type = type;
//     };

//     i(...params: any[]){
//         infoLogCache.write.call(this, 'info', params.join(' '));
//     };
//     w(...params: any[]) {
//         warnLogCache.write.call(this, 'warn', params.join(' '));
//     };
//     e(...params: any[]) {
//         errorLogCache.write.call(this, 'error', params.join(' '));
//     };
//     f(...params: any[]) {
//         fataLogCache.write.call(this, 'fata', params.join(' '));
//     }
// }

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
