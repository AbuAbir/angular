import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'tcs-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  productListing = [];

  constructor(private products : ProductsService) { }

  ngOnInit(): void {
      // Make API call.
      this.products.getProducts().subscribe((response : [])=>{
          this.productListing = response;
      })
  }

}
