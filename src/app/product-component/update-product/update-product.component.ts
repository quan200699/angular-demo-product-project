import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productForm: FormGroup;
  product: Product = {};

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.product = await this.findProductByIdToPromise(id);
      this.productForm = new FormGroup({
              name: new FormControl(this.product.name),
              price: new FormControl(this.product.price),
            })
    });
  }

  ngOnInit() {
  }

  // Cach 1
  findProductById(id: number) {
    this.productService.getById(id).subscribe(product => {
      this.product = product;
      this.productForm = new FormGroup({
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
      })
    });
  }

  //Cach 2
  findProductByIdToPromise(id: number){
    return this.productService.getById(id).toPromise();
  }

  update(id: number){
    let product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      alert("Thanh cong");
      this.router.navigate(['/list'])
    }, () => alert("that bai"));
  }
}
