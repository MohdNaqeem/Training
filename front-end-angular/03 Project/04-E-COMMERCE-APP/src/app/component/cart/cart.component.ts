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

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }

  emptyCart(){
    this.cartService.removeAllCart()
  }

  // 
  public orderForm = false
  
  openModal() {
    const modalRef = this.modalService.open(OrderDetailsPopupComponent);
  }
  
}
