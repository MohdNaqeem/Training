import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://your-api-endpoint'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getProductData(code: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product/${code}`);
  }
}