import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor( private http:HttpClient) { }

  env = " http://localhost:3000/books";

  getBooks(){
    return this.http.get(this.env).pipe(
      map((book:any) => {
        return book
      })
    );
  }

  updateBooks(id:any, data:any){
    return this.http.put(`${this.env}/${id}`, data)
  }

  saveBooks(data:any){
    return this.http.post(this.env, data).pipe(
      map((res:any) => {
        return res
      })
    );
  }

  deleteBook(id:any){
    return this.http.delete(`${this.env}/${id}`);
  }

  getById(id:any){
    return this.http.get(`${this.env}/${id}`);
  }


//  displayBooks(): Book[] {
//   return this.book;
//  }

//  getBook(id:number):Book|undefined{
//   return this.book.find(bk => bk.id === id)
//  }

//  deleteBook(id : number){
//   const i = this.book.findIndex( b => b.id === id)
//   if(i !== -1){
//     this.book.splice(i, 1);
//   }
// }

}
