import { QuizzRoutingModule } from './quizz-routing.module';
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
    SharedModule,

    // TODO-2 : Ajouter le module de routage
    QuizzRoutingModule
  ],
  exports :[

    // TODO-3 : Supprimer l'export du component

  ],
})
export class QuizzModule{}
