import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component'
import { CustomerComponent } from './components/customer/customer.component'
import { CustomersComponent } from './components/customers/customers.component'
import { ProductComponent } from './components/product/product.component'
import { ProductsComponent } from './components/products/products.component'



const APP_ROUTES: Routes = [
  { path: 'cart', component: CartComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'product', component: ProductComponent},
  { path: 'products', component: ProductsComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'products'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
