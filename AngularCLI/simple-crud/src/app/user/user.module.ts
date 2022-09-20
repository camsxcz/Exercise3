import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './pages/profile/profile.component';



@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
