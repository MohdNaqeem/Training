import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService){}

  public totalItem : number = 0
  public searchItem : string = ''

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
      this.totalItem = res.length
    })
  }

  search(event:any){
    this.searchItem = (event.target as HTMLInputElement).value
    console.log(this.searchItem)
    this.cartService.search.next(this.searchItem)
    this.cartService.search.next(this.searchItem)
  }

}
