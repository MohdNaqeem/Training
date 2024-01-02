import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname:string,psword:string){
    if(uname === 'Movie' && psword === '1234'){
      return 200;
    }else{
      return 403
    }
  }

  logout(){
    this.router.navigate(['login'])
  }

  back(){
    this.router.navigate(['home'])
  }
}
