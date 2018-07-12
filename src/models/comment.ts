export class Comment {
    id: number;
    user: string;
    level: number;
    no: number;
    parentId: number;
    commentTime: string;
    commentText: string;
    pictureUrl: string;
    constructor(o: { [key: string]: any }) {
        this.id = o.id;
        this.user = o.user;
        this.level = o.level;
        this.no = o.no;
        this.parentId = o.parentId;
        this.commentTime = o.commentTime;
        this.commentText = o.commentText;
        this.pictureUrl = o.pictureUrl;
    }
}