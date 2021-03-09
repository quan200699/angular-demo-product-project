import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  constructor() {
  }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    let product: Product = {};
    for (let i = 0; i < this.products.length; i++) {
      if (id == this.products[i].id) {
        product = this.products[i];
      }
    }
    return product;
  }

  saveProduct(product) {
    this.products.push(product);
  }
}
