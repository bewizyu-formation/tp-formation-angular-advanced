import { QuizButtonComponent } from './quiz-button/quiz-button.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  declarations : [
    // Declaration des components du module
    QuizButtonComponent
  ],
  imports : [
    CommonModule
  ],
  exports: [
    // Declaration des components du module qui vont etre visible par d'autres modules
    QuizButtonComponent
  ]

})
export class SharedModule{}
