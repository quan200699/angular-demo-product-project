import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0)
  });

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.productForm.value);
  }

  get name() { return this.productForm.get('name'); }
}
