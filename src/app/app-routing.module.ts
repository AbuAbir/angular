import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsDetailsPageComponent } from './pages/products-details-page/products-details-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

// Define Route in Array
const routes: Routes = [
    {
      // Homepage
      path : "", component : HomePageComponent
    },
    {
      path : "products", component : ProductsPageComponent
    },
    {
      path : "product-details", component : ProductsDetailsPageComponent
    },
    {
      path : "**", component : NotFoundPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// homepage
// products
// product details
// cart
// checkout
// login
// register