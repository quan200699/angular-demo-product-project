import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';


const routes: Routes = [{
  path: 'list',
  component: ProductComponent
},{
  path: 'create',
  component: CreateProductComponent
},
  {
    path: 'edit/:id',
    component: UpdateProductComponent
  }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
