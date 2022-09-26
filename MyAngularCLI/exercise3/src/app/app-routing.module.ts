import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';

const routes: Routes = [
  {
    path: "home",
    component: AppComponent
  },
  {
    path: "book",
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: "blog",
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
