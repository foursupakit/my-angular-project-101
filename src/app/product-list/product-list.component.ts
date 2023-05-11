import { Component, OnInit } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit() {
  }

  share(): void {
    window.alert('The products has been shared!')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
}
