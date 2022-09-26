import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Active{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  active:Active[] = [
    {value: 'active-0', viewValue: 'Active'},
    {value: 'inactive-1', viewValue: 'Inactive'},
  ];
  formValue: any;
  onSubmit(form: NgForm) {
    this.formValue = form.value;
    console.log(this.formValue);
    // Do whatever you want with form value
    // Could be a POST request or else
  }

  constructor() { }

  ngOnInit(): void {
  }

}
