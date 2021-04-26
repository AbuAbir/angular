import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

// Define Route in Array
const routes: Routes = [
    {
      // Homepage
      path : "", component : HomePageComponent
    },
    {
      path : "login", component : LoginPageComponent
    },
    {
      path : "products", redirectTo : "new-products"
    },
    {
      path : "new-products", component : ProductsPageComponent
    },
    // products-details/iphone
    // products-details/samsung-galaxy
    // products-details/macbook
    {
      path : "products-details/:id", canActivate : [ AuthGuard ], component : ProductDetailPageComponent
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