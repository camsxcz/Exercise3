import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';



@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() books!: Book;
  constructor() { }

  ngOnInit(): void {
  }

  // deleteButton(){
  //   this.bookService.deleteBook(this.books.id);
  // }

}
