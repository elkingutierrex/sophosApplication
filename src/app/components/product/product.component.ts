import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product:any = {};

  constructor( private activatedRoute: ActivatedRoute,
    private _productService : ProductsService) { 
    
      this.product = this.activatedRoute.params;
      this.product = this.product._value;
     
  }

  ngOnInit() {
  }

  addProduct( item:object ){
    this._productService.addProduct( item );
   
  }
}
