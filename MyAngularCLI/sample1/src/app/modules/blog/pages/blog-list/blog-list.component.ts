import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  num:number=1;
  nums:number[] = [1, 3, 5, 7, 1]
  blogs:Blog[] = [
    {
      title: "Hello guys!",
      description: "Welcome to my blog",
      published: false,
      authorActive: false
    },
    {
      title: "Mukbang",
      description: "Let's eat!!",
      published: true,
      authorActive: true
    },
    {
      title: "Kahit ano",
      description: "ikaw bahala",
      published: true,
      authorActive: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
loveAction(blog:Blog){
  console.log(blog);
}

incrementNum(){
  this.num++;
}
}
