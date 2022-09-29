import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
import {MatIconModule} from '@angular/material/icon';
import { MatPseudoCheckbox, MatPseudoCheckboxModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HammerModule,
    MatButtonModule,
    MatIconModule,
    MatPseudoCheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
