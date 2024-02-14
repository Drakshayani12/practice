import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: any=[
    {id:1,postTitle:"post 1"},
    {id:2,postTitle:"post 2"},
    {id:3,postTitle:"post 3"},
    {id:4,postTitle:"post 4"}
]
addPost(data: any){
  this.postList.push(data)
}

  constructor() { }
}
