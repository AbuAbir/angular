import { Component, OnInit } from '@angular/core';
import { from, interval, throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import IProduct from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { catchError, filter, find, map, take } from "rxjs/operators"

@Component({
  selector: 'tcs-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsListing: IProduct[] = []
  peopleListing = [];
  // 1. Define Dependency > private LOCALNAME : DEPENDENCY
  constructor(private product: ProductsService) { }

  ngOnInit(): void {

    of("helloworld!!!").subscribe((response) => {
      console.log(response)
    })

    from(["hello", "world", "2021"]).subscribe((item) => {
      console.log(item);
    })

    const err = throwError("Error getting data from api.");
    err.subscribe((response) => { }, (error) => {
      console.log(error)
    }, () => { })

    // const timer = interval(1000).subscribe((index)=>{
    //     // console.log(index)
    // })

    of("helloworld!!!")
      .pipe(map((response) => { return response.split("").reverse().join("") }))
      .subscribe((response) => {
        console.log(response)
      })

    from(["hello", "world", "2021"])
      .pipe(find((item) => { return item.indexOf("r") > -1 }))
      .subscribe((item) => {
        console.log(item);
      })

    const timer = interval(1000)
      .pipe(take(3))
      .subscribe((index) => {
        console.log(index)
      })



    from(["hello", "world"])
      .pipe(
        map(() => { throw "dsadsahdksahdhasjkdjahsjdka" }),
        catchError(() => { return of("Some error occured") })
      )
      .subscribe((item) => {
        console.log(item, "filter");
      })



  }

  addIphone() {

  }

  // https://jsonplaceholder.typicode.com/users

}
