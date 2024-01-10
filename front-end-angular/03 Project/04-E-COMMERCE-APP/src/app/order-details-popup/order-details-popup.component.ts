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

  // close button funtion on popup
  closeModal() {
    this.activeModal.close('Close click');
  }

  // submit(succes) button logic on popup
  myOrderForm = new FormGroup({
    fullName : new FormControl('',[Validators.required, Validators.minLength(5)]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    mobileNo : new FormControl('',[Validators.required]),
  })
  onSubmit(){
    this.myOrderForm.value
    console.log(this.myOrderForm.value)
    this.activeModal.close('Close click');
  }
}
