import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  constructor( private cartService: CartService) {}

  public grandTotal!: any;

  // This is add grand total in order placed form
  ngOnInit(): void {
      this.grandTotal = this.cartService.getTotalPrice();
      this.cartService.removeAllCart()
  }
}
