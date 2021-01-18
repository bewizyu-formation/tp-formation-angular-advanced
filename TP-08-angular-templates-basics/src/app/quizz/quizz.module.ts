import { QuizzService } from './core/quizz.service';
import { QuizzQuestionComponent } from './widgets/quizz-question/quizz-question.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuizzComponent } from "./components/quizz.component";

@NgModule({
  declarations : [
    QuizzComponent,
    QuizzQuestionComponent
  ],
  imports : [
    CommonModule,
    SharedModule
  ],
  exports :[
    QuizzComponent
  ],
})
export class QuizzModule{}
