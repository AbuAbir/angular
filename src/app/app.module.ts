import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomePageComponent,
    ProductsPageComponent,
    NavigationComponent,
    NotFoundPageComponent,
    ProductDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
