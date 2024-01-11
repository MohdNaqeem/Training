import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) {}

  public totalItem: number = 0;
  public searchItem: string = '';

  /* This logic will add number next to the whenever we add item into cart so this logic will be add total items
     number */
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  // This logic for search box
  search(event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.cartService.search.next(this.searchItem);
    this.cartService.search.next(this.searchItem);
  }
}
