import models from '../models/models';
import * as bunyan from 'bunyan';
import { Observable } from 'rxjs';
import { Writable} from 'stream';
const logModel = models.logModel;
// class writeStream  implements WritableStream{
//     readonly locked: boolean;
//     abort(reason?: any): Promise<void> {};
//     getWriter(): WritableStreamDefaultWriter {};
// }
const WritableStream = new Writable();
const makeLogger = function(name: string = 'app'): bunyan {
    const loggerInst = bunyan.createLogger({
        name: name,
        serializers: bunyan.stdSerializers,
        streams: [{ // trace logger
            level: 'trace',
            stream: WritableStream
        }, { // info logger
            level: 'info',
            stream: WritableStream
        }, { // error logger
            level: 'error',
            stream: WritableStream
        }]
    });

    return loggerInst;
}

const logger = class {
    private name: string;
    private loggerInst: bunyan;
    private stream = Observable.from(this.loggerInst, 'log');
    constructor(name?: string){
        this.name = name;
        this.loggerInst = makeLogger(name);
    }
    
    i(lo: any): void {
        this.stream.subscribe(async (m) => {
            
           await logModel.insertMany(m);
        })  
        // logModel.insertMany()
    }
}
export default new logger;
