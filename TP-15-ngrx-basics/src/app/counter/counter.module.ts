import { CounterRoutingModule } from './counter-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter-component.component';

@NgModule({
  declarations : [
    CounterComponent
  ],
  imports : [
    CommonModule,
    SharedModule,
    CounterRoutingModule
  ]
})
export class CounterModule{

}
