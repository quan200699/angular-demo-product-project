import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = {};
  status = false;
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      price: 100000
    },
    {
      id: 2,
      name: 'Iphone11',
      price: 100000000
    }];
  displayedColumns: string[] = ['id', 'name', 'price'];
  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.status = !this.status;
  }

}
