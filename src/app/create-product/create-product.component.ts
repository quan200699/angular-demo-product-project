import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    id: 1,
    name: '',
    price: 1200000
  };

  constructor() {
  }

  ngOnInit() {
  }

  submit(form) {
  }
}
