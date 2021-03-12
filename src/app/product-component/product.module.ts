import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product/product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material';



@NgModule({
  declarations: [
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class ProductModule { }
