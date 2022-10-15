import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  env = " http://localhost:3000/blog";

  getBlogs(){
    return this.http.get(this.env).pipe(
      map((blog:any) => {
        return blog
      })
    );
  }

  updateBlogs(id:any, data:any){
    return this.http.put(`${this.env}/${id}`, data)
  }

  saveBlogs(data:any){
    return this.http.post(this.env, data).pipe(
      map((res:any) => {
        return res
      })
    );
  }

  deleteBlog(id:any){
    return this.http.delete(`${this.env}/${id}`);
  }

  getById(id:any){
    return this.http.get(`${this.env}/${id}`);
  }

}
