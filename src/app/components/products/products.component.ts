import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products : any[] = [];
  product : {};
  loading = true;

  constructor( private _productService: ProductsService,
               private router: Router ) { 
    this._productService.getProducts()
      .subscribe( ( data:any ) => this.products = data);
      this.loading = false;      
  }

  ngOnInit() {
  }

  seeProduct( item:object ){
    this.router.navigate(['/product',item])
  }

  addProduct( item:object ){
    this._productService.addProduct( item );
  }


}
