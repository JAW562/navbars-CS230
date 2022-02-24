import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-forum-posts',
    templateUrl: 'forum-posts.component.html',
    styleUrls: ['forum-posts.component.css']
})
export class ForumPostsComponent{

    @Input() name: string;
    @Input() replies: string;
    @Input() userReply: string;
    @Input() user: string;
    @Input() views: string;
    @Input() time: string;

    constructor(){
        this.name ="title";
        this.replies="# of replies";
        this.userReply="user who replied last"
        this.user="og poster";
        this.views="# of views";
        this.time="time since last reply";
    }
}