
export class Tag {
    id: number ;
    name: string;
    level: number;
    parentId: number;
    msg: string;
    createTime: string;
    constructor(o: { [key: string]: any }) {
        this.id = o.id;
        this.name = o.name;
        this.level = o.level;
        this.parentId = o.parentId;
        this.msg = o.msg;
        this.createTime = o.createTime;
    }
}