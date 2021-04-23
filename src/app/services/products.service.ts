import { Injectable } from '@angular/core';
import IProduct from '../interfaces/product';

import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  products: IProduct[] = [{
    name: "laptop",
    id: 1,
    category: "electronics"
  },
  {
    name: "androif cellphone",
    id: 2,
    category: "electronics"
  }]

  addProduct() {
    this.products.push({ name: "iphone", category: "electronics", id: 3 })
  }

  // CRUD > Create Read Update Delete
  // Create - POST request
  // Read   - GET request
  // Update - Put or Patch
  // Delete - DELETE

  getUsers() {
      return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
