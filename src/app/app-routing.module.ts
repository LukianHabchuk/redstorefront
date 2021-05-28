import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {NgModule} from '@angular/core';

const ROUTES: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product-details/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }