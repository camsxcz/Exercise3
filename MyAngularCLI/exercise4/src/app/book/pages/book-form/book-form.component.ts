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
  [x: string]: any;
  bookForm: FormGroup<any>;
  ff: FormArray;

  ID: string | null | undefined;
  constructor(private bookService:BookService ,fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.ID = this.route.snapshot.paramMap.get('id');
    let book = (this.bookService.getBook(Number(this.ID)))
    this.bookForm = fb.group({
      name: [book?.name, [Validators.required]],
      author: fb.array([[book?.authors]]) ,
      isbn: [book?.isbn, [Validators.required]],
    });
    this.ff = this.bookForm.get('author') as FormArray;
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.bookForm.get('name')?.errors);
    console.log(this.bookForm.value);
    window.location.href = "/book";
  }

  reset() {
    this.bookForm.reset();
  }

  addAuthor() {
    (this.bookForm.get('author') as FormArray).push(new FormControl());
  }

  deleteAuthor(id: number) {
    this.ff.removeAt(id);
  }

  get name() {
    return this.bookForm.get('name') as FormControl;
  }

  get isbn() {
    return this.bookForm.get('isbn') as FormControl;
  }
}
