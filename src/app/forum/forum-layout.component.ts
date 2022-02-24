import { Component } from "@angular/core";
import { ForumPostsModel } from "./forum-post.model";
import { mock_posts_list } from "./mock-post-list";

@Component({
    selector: 'fm-forum-layout',
    templateUrl: 'forum-layout.component.html',
    styleUrls: ['forum-layout.component.css']
})
export class ForumLayoutComponent{

    posts: ForumPostsModel [] = [];

  constructor() {
    for(var post of mock_posts_list) {
      this.posts.push(post);
    }
  }

}