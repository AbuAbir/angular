import { Injectable } from '@angular/core';
import IProduct from '../interfaces/product';

import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts()
    {
        return this.http.get("/assets/data/products.json")
    }

  getProduct(id)
      {
        // /assets/data/product-1.json
        // /assets/data/product-2.json
        return this.http.get(`/assets/data/product-${id}.json`)
      }

}
