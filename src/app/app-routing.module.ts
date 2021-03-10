import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProductComponent} from './product-component/create-product/create-product.component';
import {ProductComponent} from './product-component/product/product.component';
import {UpdateProductComponent} from './product-component/update-product/update-product.component';


const routes: Routes = [
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'list',
    component: ProductComponent
  },
  {
    path: 'edit/:id',
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
