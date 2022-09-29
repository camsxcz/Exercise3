import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    book:Book[] = [
     {
      id: 1,
      name: "Angular Book",
      authors: ["Maria Mercedes"],
      isbn: "123456789X"
     },
     {
      id: 2,
      name: "Spring MVC",
      authors: ["Juan Dela Cruz"],
      isbn: "987654321X"
     },
     {
      id: 3,
      name: "SQL",
      authors: ["Darna Narda"],
      isbn: "2468013579"
     },
    ];

  constructor() { }

 displayBooks(): Book[] {
  return this.book;
 }

 getBook(id:number):Book|undefined{
  return this.book.find(bk => bk.id === id)
 }

 deleteBook(id : number){
  const i = this.book.findIndex( b => b.id === id)
  if(i !== -1){
    this.book.splice(i, 1);
  }
}

}
