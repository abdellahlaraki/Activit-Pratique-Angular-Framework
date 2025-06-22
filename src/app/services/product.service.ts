import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){

    return this.http.get("http://localhost:5050/api/products");
  }
  deleteProduct(product:any){
    return this.http.delete("http://localhost:5050/api/products/"+product.id);
  }

}
