import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0),
  });

  constructor(private productService: ProductService,
              private router: Router) {
  }

  get name() {
    return this.productForm.get('name');
  }

  ngOnInit() {
  }

  submit() {
    let product = this.productForm.value;
    product.category = {
      id: this.productForm.value.category
    }
    this.productService.createNewProduct(product).subscribe(() => {
      alert("Tạo thành công");
      this.router.navigate(['/']);
    }, () => {
      alert("Tạo thất bại")
    });
  }
}
