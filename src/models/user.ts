export class User {
    name: string;
    password: string;
    salt: String;
    email: string;
    avatar: string; // 头像小图 url
    level: number; // 用户等级（普通，ss）
    msg: string; // 签名信息
    createTime: string;
    updateTime: string;
    constructor(o: { [key: string]: any }) {
        this.name = o.name;
        this.password = o.password;
        this.salt = o.salt;
        this.email = o.email || '';
        this.avatar = o.avatar || '';
        this.level = o.level;
        this.msg = o.msg;
        this.createTime = o.createTime;
        this.updateTime = o.updateTime;
    }
}