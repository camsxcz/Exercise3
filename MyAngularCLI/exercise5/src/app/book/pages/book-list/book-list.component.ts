import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
constructor( private bookService:BookService,
             private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res =>{
      this.book=res;

    })

  }


  editButton(id:number){
    this.router.navigate(['book/edit/' + id]);
  }
  deleteButton(id:number){
    this.bookService.deleteBook(id).subscribe(res =>{
      console.log(res);
      this.ngOnInit();
    })
  }

  addAction(book:Book) {
    this.router.navigateByUrl('book/form');
  }

  deleteAction(book:Book) {
    console.log(book);
  }
}
