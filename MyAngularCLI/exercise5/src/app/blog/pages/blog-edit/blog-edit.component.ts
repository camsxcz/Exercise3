import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  blogForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    comments: new FormControl('', [Validators.required])
  });
  ID: string | null | undefined;
  constructor(private blogService:BlogService ,
    fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getById(this.route.snapshot.params['id'])
    .subscribe((res:any) =>{
      this.blogForm = new FormGroup({
      title: new FormControl(res ['title']),
      description: new FormControl(res ['description']),
      author: new FormControl(res ['author']),
      comments:new FormControl(res ['comments'])
      });
  })
}

updateData(){
  this.blogService.updateBlogs(this.route.snapshot.params['id'], this.blogForm.value)
  .subscribe(res=>{
    console.log(res)
    this.router.navigateByUrl('/blog');
  })
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
  get comments() {
    return this.blogForm.get('comments') as FormControl;
 }
}
