import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedNavComponent } from './unauthorized-nav/unauthorized-nav.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UnauthorizedNavComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
