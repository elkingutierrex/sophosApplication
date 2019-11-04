import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
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


}
