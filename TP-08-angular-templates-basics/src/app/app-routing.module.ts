import { QuizzComponent } from './quizz/components/quizz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // TODO-4 : charger le module d'une facon dynamique au lieu d'utiliser QuizzComponent (Ref. AboutModule)
  {
    path: 'quizz',
    component: QuizzComponent
  },
  {
    path: 'about',
    loadChildren: () => {
      return import('./about/about.module').then(res => res.AboutModule)
    }
  },
  {
    path: '**',
    redirectTo: 'quizz'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
