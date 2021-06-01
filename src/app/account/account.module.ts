import {NgModule} from '@angular/core';
import {AccountPageComponent} from './account-page/account-page.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {LoginComponent} from './account-page/login/login.component';
import {RegistrationComponent} from './account-page/registration/registration.component';

@NgModule({
  declarations: [
    AccountPageComponent,
    AccountDetailsComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class AccountModule { }
