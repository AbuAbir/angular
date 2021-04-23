import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'tcs-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  productListing = [];

  constructor(private products : ProductsService, private router : Router) { }

  ngOnInit(): void {
      // Make API call.
      this.products.getProducts().subscribe((response : [])=>{
          this.productListing = response;
      })
  }

  gotoHomepage(){
      // "/" 
      this.router.navigateByUrl("/")
  }

}
