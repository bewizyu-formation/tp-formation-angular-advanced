import { QuizzComponent } from './components/quizz.component';
// TODO- 1 : Créer un module de routage QuizzRoutingModule avec les routes suivantes :
// path : '' qui va retourner QuizzCompoenent
// fallback ** redirect to ''
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes : Routes = [
  {
    path : '',
    component : QuizzComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzRoutingModule{

}
