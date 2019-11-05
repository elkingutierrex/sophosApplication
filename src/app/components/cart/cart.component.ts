import { Component, OnInit } from '@angular/core';
import { ProductsService, City } from "../../services/products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  currentOrder :any[] = [];
  cities :City[] = [];

  nombre: string = "";
  fechaNacimiento : string = "";
  direccionEnvio: string = "";
  ciudad: string = "";
  

  

  constructor( private _productService : ProductsService) { 
    this.currentOrder = _productService.getCurrentOrder();
    this.cities = _productService.getCities();
  }

  ngOnInit() {
  }

  generateOrder(){
    console.log();
  }

}
