import * as schema from '../schemas/index';
import db from '../db/mongo';
import { each } from 'lodash';
import { Model, Document } from 'mongoose';
/**
 * dto
 */
let models: { [s: string]: Model<Document>} = {};
each(schema, (v, k) => {
    let key: string = k.replace('Schema', 'Model');
    models[key] = db.model(key, v);
});
export interface Base {
    get(key: string): any;
    set(key: string, val: any): boolean
}
export default models