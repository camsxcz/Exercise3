import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CommandBarComponent
  ]
})
export class SharedModule { }
