import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthLayoutComponent} from './shared/components/auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          { path: '', redirectTo: '/auth/login', pathMatch: 'full'},
          { path: 'login', component: LoginPageComponent }
          ]
      }
    ])
  ],
  exports: [ RouterModule ],
  providers: []
})

export class AuthModule {

}
