import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any;
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
      this.items = this.cartService.getItems();
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      })
  }

  onSubmit(customerDate: any) {
    console.warn('Your order has bee0n submitted' ,customerDate)
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
