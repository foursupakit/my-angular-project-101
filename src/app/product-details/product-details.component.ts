import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products'

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }


  addToCart(product: any) {
    window.alert('Your products has been added to the cart!')
    this.cartService.addToCart(product)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let productId:any = params.get('productId')
      this.product = products[productId];
    })
  }

}
