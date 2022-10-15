import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookEditComponent } from './pages/book-edit/book-edit.component';

const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "form",
    component: BookFormComponent
  },
  {
    path: "edit/:id",
    component: BookEditComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
