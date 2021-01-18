import { SharedModule } from './../shared/shared.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuizzComponent } from "./components/quizz.component";

@NgModule({
  declarations : [
    QuizzComponent
  ],
  imports : [
    CommonModule,
    SharedModule
  ],
  exports :[
    QuizzComponent
  ]
})
export class QuizzModule{}
