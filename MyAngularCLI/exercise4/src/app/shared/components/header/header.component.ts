import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { BlogListComponent } from 'src/app/blog/pages/blog-list/blog-list.component';
import { BookListComponent } from 'src/app/book/pages/book-list/book-list.component';
import { ProfileComponent } from 'src/app/user/pages/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }

}
