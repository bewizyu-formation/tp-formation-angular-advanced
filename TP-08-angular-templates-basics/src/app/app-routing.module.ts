import { AboutComponent } from './about/components/about.component';
import { QuizzComponent } from './quizz/components/quizz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'quizz',
    component: QuizzComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path : '**',
    redirectTo : 'quizz'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
