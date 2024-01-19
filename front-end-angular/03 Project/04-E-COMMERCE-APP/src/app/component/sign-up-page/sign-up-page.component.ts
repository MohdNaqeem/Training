import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  constructor(public activeModal: NgbActiveModal) {}

  signUpForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  // get validetion
  get fullname(){
    return this.signUpForm.get('fullName')
  }

  get username(){
    return this.signUpForm.get('userName')
  }

  get Email(){
    return this.signUpForm.get('email')
  }

  get Password(){
    return this.signUpForm.get('password')
  }
}
