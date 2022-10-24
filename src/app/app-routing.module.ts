import { HomeComponent } from './user-home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-user/login/login.component';
import { RegisterComponent } from './register-user/register/register.component';

const routes: Routes = [
  {
    path:'' , component: LoginComponent
  },
  {
    path:'register' , component: RegisterComponent
  },
  {
    path:'home' , component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
