import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

book:Book[] = [];

constructor( private bookService:BookService) { }

  ngOnInit(): void {
    this.book = this.bookService.displayBooks();
  }

  editButton(id:number){

  }

  deleteButton(id:number){

  }

}
