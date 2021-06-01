import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {NgModule} from '@angular/core';
import {AccountPageComponent} from './account/account-page/account-page.component';

const ROUTES: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'account', component: AccountPageComponent},
  {path: 'product-details/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
