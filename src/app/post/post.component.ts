import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../Service/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]

})
export class PostComponent implements OnInit {
  posts: Array<any>;

  constructor(private postService: PostService)
  {
    this.posts= postService.postList;
    //this.addNewData();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addNewData(){
    let newPost: Post ={
      id:7,
      postTitle:"post 7"
    }
    this.postService.addPost(newPost);
  }
}
