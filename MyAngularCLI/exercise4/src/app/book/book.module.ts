import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,

  ],
  imports: [
    BookRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class BookModule { }
