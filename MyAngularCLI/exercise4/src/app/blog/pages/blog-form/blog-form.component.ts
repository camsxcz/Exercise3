import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogForm!: FormGroup;
  ff!: FormArray;

  ID: string | null | undefined;
  constructor(private blogService:BlogService ,
    fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
      this.ID = this.route.snapshot.paramMap.get('id');
      let blog = (this.blogService.getBlog(Number(this.ID)))
      this.blogForm = fb.group({
        title: [blog?.title, [Validators.required]],
        description: [blog?.description, [Validators.required]],
        author: [blog?.author, [Validators.required]],
        comment: fb.array([[[blog?.comments]]]) ,
      });
      this.ff = this.blogForm.get('comment') as FormArray;
    }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.blogForm.get('title')?.errors);
    console.log(this.blogForm.value);
    window.location.href = "/blog";
  }

   reset(){
     this.blogForm.reset();
   }

   addComment(){
     (this.blogForm.get('comment') as FormArray).push(
       new FormControl());
   }
   deleteComment(i:number){
     this.ff.removeAt(i)
   }
   get title() {
     return this.blogForm.get('title') as FormControl;
   }

   get description() {
     return this.blogForm.get('description') as FormControl;
   }

   get author() {
    return this.blogForm.get('author') as FormControl;
  }
 }
