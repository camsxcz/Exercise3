import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogEditComponent } from './pages/blog-edit/blog-edit.component';

const routes: Routes = [
  {
    path: "",
    component: BlogListComponent
  },
  {
    path: "form",
    component: BlogFormComponent
  },
  {
    path: "edit/:id",
    component: BlogEditComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BlogRoutingModule { }
