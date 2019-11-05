import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products :any[] = [];
  currentOrder :any[] = [];
  allOrders :any[] = [];
  cities :City[] = [
    {id: 1,
    nombre:"Medellín"},
    {id: 2,
      nombre:"Bogotá"},
    {id: 3,
     nombre:"Cali"},
    {id: 4,
     nombre:"Santa Marta"},
  ];


  constructor( private http: HttpClient) {
    
    console.log("Application Ready!")
   }

   getQuery(){
    const url = "https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos"
    return this.http.get(url);
   }

   getProducts(){    
     const url = "https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos"
    return  this.http.get(url);
   }

   addProduct( item:object ){
      this.currentOrder.push(item);
      // localStorage.setItem("currentOrder", JSON.stringify(this.currentOrder));
            
   }

   getCurrentOrder(){
    //  this.currentOrder = JSON.parse(localStorage.getItem("currentOrder"));
     return this.currentOrder;
   }

   getCities(){     
    return this.cities;    
   }

}
export interface Customer{
  nombre  :string;
  fechaNacimiento:string;
  direccionEnvio:string;
  ciudad:number;
  urlDocumento:string;
}
export interface City{
  id: number,
  nombre  :string;  
}