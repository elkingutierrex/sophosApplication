import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products : any[] = [];
  loading = true;

  constructor( private _productService: ProductsService ) { 
    this._productService.getProducts()
      .subscribe( ( data:any ) => this.products = data);
      this.loading = false;
      console.log( this.products );
  }

  ngOnInit() {
  }

}
