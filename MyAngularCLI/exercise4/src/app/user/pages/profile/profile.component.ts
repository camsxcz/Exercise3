import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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

  userForm!: FormGroup;
  isActive: boolean = true;
  constructor (private fb:FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.email]],
      name: ['', [ Validators.minLength(5)]],
      age: ['', [Validators.required]],
      isActive: ['',[Validators.required]]
    })
  }

  submit(){
    console.log(this.userForm.get('email')?.errors)
  }

  get email() {
    return this.userForm.get('email') as FormControl;
  }
  get name() {
    return this.userForm.get('name') as FormControl;
  }
  get age() {
    return this.userForm.get('age') as FormControl;
  }

}



