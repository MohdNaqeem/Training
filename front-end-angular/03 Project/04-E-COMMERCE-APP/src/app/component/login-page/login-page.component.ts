import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpPageComponent } from '../sign-up-page/sign-up-page.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}

  //This is for modal after click on signUp button
  openModal() {
    const modalRef = this.modalService.open(SignUpPageComponent);
  }

  // login form
  loginForm = new FormGroup({
    userName : new FormControl ('', [Validators.required, Validators.minLength(5)]),
    password : new FormControl ('', [Validators.required])
  })

  // get validation
  get username(){
    return this.loginForm.get('userName')
  }

  get passWord(){
    return this.loginForm.get('password')
  }
}
