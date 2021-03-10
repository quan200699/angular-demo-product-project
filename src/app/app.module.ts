import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product-component/product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ItemComponent} from './item/item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import {CreateProductComponent} from './product-component/create-product/create-product.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateProductComponent } from './product-component/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ItemDetailComponent,
    ItemComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
