import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productdata } from '../Shared/productmodel';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products!:productdata[]
  constructor(private api:ApiService) {
    
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.api.getProduct().subscribe((res)=>{
      this.products = res;
    })
  }

}
