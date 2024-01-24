import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) {  }
  userData(){
    return this.http.get("http://localhost:3000/products")
  }
  addNewData(data:any){
    return this.http.post("http://localhost:3000/products", data)
  }

  apiDemo(){
    return this.http.get("http://localhost:3000/demo")
  }

  addDemoApi(data:any){
    return this.http.post("http://localhost:3000/demo", data)
  }
}
