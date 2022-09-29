import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blog:Blog[] = [];
  constructor(private blogService : BlogService,
    private router : Router) { }

  ngOnInit(): void {
    this.blog = this.blogService.displayBlog();
  }

  editButton(id:number){
    this.router.navigate(['blog/edit/' + id]);
  }

  deleteButton(id:number){
    this.blogService.deleteBook(id);
  }

  addAction(blog:Blog) {
    this.router.navigateByUrl('blog/form');
  }
  deleteAction(blog:Blog) {
    console.log(blog);
  }
}
