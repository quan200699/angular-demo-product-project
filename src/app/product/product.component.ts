import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = {};
  status = false;
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price'];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  onClick() {
    this.status = !this.status;
  }

  getAll(){
    this.productService.getAll().subscribe(value => {
      this.products = value;
    }, error => {
      console.log(error);
    })
  }
}
