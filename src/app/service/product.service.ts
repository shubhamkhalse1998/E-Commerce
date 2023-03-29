import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  postProduct(data:products){
    return this.http.post(`http://localhost:3000/products`,data)
  }

  displayList(){
    return this.http.get<products>(`http://localhost:3000/products`)
  }
  delePro(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  popularProduct(){
    return this.http.get<products>(`http://localhost:3000/products?_limit=3`)
  }
  treandproducts(){
    return this.http.get<products>(`http://localhost:3000/products?_limit=8`)
  }
  searchProduct(quary:string){
    return this.http.get<products>(`http://localhost:3000/products?q=${quary}`)
  }
}
