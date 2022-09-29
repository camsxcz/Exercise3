import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog:Blog[] = [
    {
      id: 123,
      title: "Java Tutorial",
      description: "30 hours of training",
      author: "Juan Dela Cruz",
      comments: ["Interested to join", "Training fee"]
    },
    {
      id: 124,
      title: "Spring Tutorial",
      description: "30 hours of training",
      author: "Maria Mercedes",
      comments: ["Interested to join", "Training fee"]
    },
    {
      id: 125,
      title: "SQL Tutorial",
      description: "24 hours of training",
      author: "Secret muna",
      comments: ["Interested to join", "Training fee"]
    }
  ]

  constructor() { }

  displayBlog(){
    return this.blog;
  }

  getBlog(id:number):Blog|undefined{
    return this.blog.find(bk => bk.id === id)
   }

  deleteBook(id : number){
    const i = this.blog.findIndex( b => b.id === id)
    if(i !== -1){
      this.blog.splice(i, 1);
    }
  }
}
