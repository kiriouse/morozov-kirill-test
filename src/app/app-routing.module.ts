import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {AuthLayoutComponent} from './auth/shared/components/auth-layout/auth-layout.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {ResultComponent} from './result/result.component';


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full'},
      { path: 'login', component: LoginPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'result', component: ResultComponent },
    ]
  },
  {
    path: 'auth', loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
