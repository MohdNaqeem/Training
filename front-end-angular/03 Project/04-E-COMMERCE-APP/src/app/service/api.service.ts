import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators"
import { apiDataInterface } from '../Shared/api-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<apiDataInterface>("http://localhost:3000/products")
    .pipe(map((res)=>{
      return res
    }))
  }
}
