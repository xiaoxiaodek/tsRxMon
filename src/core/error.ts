import * as config from 'config';
import * as util from "util";
import * as _ from "lodash";
const conf = config.get('errors');
let defineError = function (name: string, code: string, defaultMessage: string) {
    defaultMessage = defaultMessage || "发生错误"
    let SelfError = function (message: string) {
        Error.captureStackTrace(this, this.constructor);
        this.name = name;
        this.code = code;
        this.message = message || defaultMessage;
    }
    util.inherits(SelfError, Error);
    return SelfError;
}

function confToError(conf: {[key: string]: any}) {
    let errors: {[key: string]: any}= {};
    for (let k in conf) {
        let item = conf[k];
        if (_.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                let subItem = item[i];
                let name = k + subItem.name;
                errors[name] = defineError(name, subItem.code, subItem.message);
            }
        } else if (_.isObject(item)) {
            let name = k;
            errors[name] = defineError(name, item.code, item.message);
        }
    }
    return errors;
}

let errors = confToError(conf);

errors.defineError = defineError;

export default errors;