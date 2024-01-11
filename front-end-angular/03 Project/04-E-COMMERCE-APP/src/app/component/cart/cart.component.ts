import { Component, OnInit, inject, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsPopupComponent } from 'src/app/order-details-popup/order-details-popup.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService, private modalService: NgbModal){}

  public products : any = []
  public grandTotal! : number;

  // This logic for add items into cart after click on add to cart button
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  // This logic for remove item which we want
  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }

  // This logic for emtpty cart
  emptyCart(){
    this.cartService.removeAllCart()
  }
  
  //This is for modal after click on check out button
  openModal() {
    const modalRef = this.modalService.open(OrderDetailsPopupComponent);
  }
  
}
