export class ForumPostsModel{
    name: string;
    replies: string;
    userReply: string;
    user: string;
    views: string;
    time: string;

    constructor(name: string, replies: string, userReply: string, user: string, views: string, time: string){
        this.name =name;
        this.replies= replies;
        this.userReply = userReply;
        this.user = user;
        this.views = views;
        this.time = time;

    }

}