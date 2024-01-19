import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService, private modalService: NgbModal) {}

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
  
  //This is for modal after click on login button
  openModal() {
    const modalRef = this.modalService.open(LoginPageComponent);
  }
}
