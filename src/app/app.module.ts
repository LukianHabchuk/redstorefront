import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ProductService} from './shared/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrandsComponent } from './home-page/brands/brands.component';
import { ProductComponent } from './components/product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {AppRoutingModule} from './app-routing.module';
import {FilterPipe} from './home-page/filter.pipe';
import {AccountModule} from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BrandsComponent,
    ProductComponent,
    HomePageComponent,
    ProductPageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AccountModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
