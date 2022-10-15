import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {

  bookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      authors: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required])
    });


  ID: string | null | undefined;
  constructor(private bookService:BookService ,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    // this.ID = this.route.snapshot.paramMap.get('id');
    // let book = (this.bookService.getBook())
    // this.bookForm = fb.group({
    //   name: [book?.name, [Validators.required]],
    //   author: fb.array([[book?.authors]]) ,
    //   isbn: [book?.isbn, [Validators.required]],
    // });
    // this.ff = this.bookForm.get('author') as FormArray;

    this.bookService.getById(this.route.snapshot.params['id'])
    .subscribe((res:any) =>{
      this.bookForm = new FormGroup({
        name: new FormControl(res ['name']),
        authors: new FormControl(res ['authors']),
        isbn: new FormControl(res ['isbn'])
      });
    })
  }

  ngOnInit(): void {
  }

  updateData(){
    this.bookService.updateBooks(this.route.snapshot.params['id'], this.bookForm.value)
    .subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/book');
    })
  }


  get name() {
    return this.bookForm.get('name') as FormControl;
  }
  get authors() {
    return this.bookForm.get('authors') as FormControl;
  }

  get isbn() {
    return this.bookForm.get('isbn') as FormControl;
  }
}
