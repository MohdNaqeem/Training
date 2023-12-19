import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData(){
    return [
      {name:"API1", age:22, email:"API@gmail.com"},
      {name:"API2", age:22, email:"API@gmail.com"},
      {name:"API3", age:22, email:"API@gmail.com"}
    ]
  }
  constructor() { }
}
