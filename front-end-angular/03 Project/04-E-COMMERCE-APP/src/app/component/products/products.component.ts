import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any
  public filterCategory : any
  searchKey:string =''
  page : any 

  constructor(private api:ApiService, private cartService:CartService){}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res)=>{
      this.productList = res

      //This is filter the category
      this.filterCategory = res

      this.productList.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category = "fashion"
        }
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(this.productList)
    })

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val
    })
  }

  addToCart(item:any){
    this.cartService.addToCart(item)
  }

  // this is filtering category and show data
  filter(category:string){
    this.filterCategory = this.productList.filter((a:any)=>{
      if(a.category == category || category == ''){
        return a
      }
    })
  }
}
