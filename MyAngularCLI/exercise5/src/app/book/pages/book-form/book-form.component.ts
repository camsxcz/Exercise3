import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {

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

  reset() {
    this.bookForm.reset();
  }

  submit() {
    this.bookService.saveBooks(this.bookForm.value).subscribe(res=>{
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
