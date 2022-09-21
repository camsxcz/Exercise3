import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs:Blog[] = [
    {
      title: "Hello guys!",
      description: "Welcome to my blog"
    },
    {
      title: "Mukbang",
      description: "Let's eat!!"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
