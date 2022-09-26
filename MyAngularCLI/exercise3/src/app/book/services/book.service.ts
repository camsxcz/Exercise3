import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    book:Book[] = [
     {
      id: 12345,
      name: "Angular Book",
      authors: ["One", "Two", "Three"],
      isbn: "123456789X"
     },
     {
      id: 12346,
      name: "Spring MVC",
      authors: ["Four", "Five", "Six"],
      isbn: "987654321X"
     },
     {
      id: 12347,
      name: "SQL",
      authors: ["Seven", "Eight", "Nine"],
      isbn: "2468013579"
     },
    ];

  constructor() { }

 displayBooks(): Book[] {
  return this.book;
 }


}
