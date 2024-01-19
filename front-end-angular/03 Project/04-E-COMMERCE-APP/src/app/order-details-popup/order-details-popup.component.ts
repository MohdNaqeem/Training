import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details-popup',
  templateUrl: './order-details-popup.component.html',
  styleUrls: ['./order-details-popup.component.css']
})
export class OrderDetailsPopupComponent {
  constructor(public activeModal: NgbActiveModal) {}

  // submit(succes) button logic on popup
  myOrderForm = new FormGroup({
    fullName : new FormControl('',[Validators.required, Validators.minLength(3)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required, Validators.minLength(8)]),
    address : new FormControl('',[Validators.required]),
    mobileNo : new FormControl('',[Validators.required]),
  })

  // form validation
  get fullname() {
    return this.myOrderForm.get('fullName')
  }

  get Email(){
    return this.myOrderForm.get("email")
  }

  get passWord(){
    return this.myOrderForm.get('password');
  }

  get Address(){
    return this.myOrderForm.get('address');
  }

  get MobileNo(){
    return this.myOrderForm.get('mobileNo');
  }
  

  onSubmit(){
    this.myOrderForm.value
    this.activeModal.close('Close click');
  }
}
