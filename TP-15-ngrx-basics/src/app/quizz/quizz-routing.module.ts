import { QuizzComponent } from './components/quizz.component';
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
