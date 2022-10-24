import { LoginUserModule } from './login-user/login-user.module';
import { RegisterUserModule } from './register-user/register-user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RegisterUserModule,
    LoginUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
