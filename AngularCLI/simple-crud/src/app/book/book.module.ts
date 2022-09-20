import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { BookListComponent } from './pages/book-list/book-list.component';



@NgModule({
  declarations: [
    PagesComponent,
    BookListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
