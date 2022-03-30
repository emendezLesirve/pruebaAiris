import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { MapsComponent } from './maps/maps.component';

//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, MapsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
  //  FlexLayoutModule,
  ],
  providers: [AuthService]

})
export class AuthModule { }
