import { Component, OnInit } from '@angular/core';
import IProduct from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'tcs-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsListing : IProduct[] = []
  peopleListing = [];
  // 1. Define Dependency > private LOCALNAME : DEPENDENCY
  constructor(private product : ProductsService) { }

  ngOnInit(): void {
      console.log(this.product.products);
      this.productsListing = this.product.products;
      
      
      this.product.getUsers().subscribe((response : [])=>{
          this.peopleListing = response;
      })
  }

  addIphone(){
    this.product.addProduct();
  }

  // https://jsonplaceholder.typicode.com/users

}
