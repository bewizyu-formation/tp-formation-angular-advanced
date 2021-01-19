import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './components/login.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations : [
    LoginComponent
  ],
  imports : [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule{

}
