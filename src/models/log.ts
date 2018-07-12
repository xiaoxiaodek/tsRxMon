export class Log {
  name: string;
  hostname: string;
  pid: number;
  level: number;
  tagList: string[];
  msg: string;
  time: string;
  v: number
  constructor(o: {[key: string]: any}){
    this.name = o.name ;
    this.hostname = o.hostname;
    this.pid = o.pid;
    this.level = o.level;
    this.tagList = o.tagList;
    this.msg = o.msg;
    this.time = o.time;
    this.v = o.v;
  }
}