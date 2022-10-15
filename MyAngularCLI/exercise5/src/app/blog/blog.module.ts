import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogEditComponent } from './pages/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
    BlogEditComponent,
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class BlogModule { }
