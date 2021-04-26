import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomePageComponent,
    ProductsPageComponent,
    NavigationComponent,
    NotFoundPageComponent,
    ProductDetailPageComponent,
    LoginFormComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
