import { SharedModule } from './../shared/shared.module';
import { AboutComponent } from './components/about.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations : [
    AboutComponent
  ],
  imports : [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule{

}
