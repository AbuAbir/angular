import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'tcs-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  params = {};
  product = {
      name : ""
  };

  constructor(private route : ActivatedRoute, private products : ProductsService) {

    

  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.params = params;
      this.products.getProduct(params.id).subscribe((response : any )=>{
        console.log(response)
        this.product = response;
      })
    })
  }

}
