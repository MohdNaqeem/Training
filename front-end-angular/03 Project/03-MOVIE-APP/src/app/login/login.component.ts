import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Unary } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService, private router:Router){}
password = "";
userName = "";
errorMsg = "";

login(){
  if(this.userName.trim().length === 0){
    this.errorMsg = "Username is required"
  }else if(this.password.trim().length === 0){
    this.errorMsg = "password is required"
  }else{
    this.errorMsg = "";
    let res = this.auth.login(this.userName, this.password)
    if(res === 200){
      this.router.navigate(['home'])
    }
    if(res === 403){
      this.errorMsg = "Invalid Email and password"
    }
  }
}
}
