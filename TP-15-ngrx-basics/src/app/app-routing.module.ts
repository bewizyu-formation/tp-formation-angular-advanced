import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from './authentication-guard.service';

const routes: Routes = [
  {
    path: 'quizz',
    loadChildren: () => {
      return import('./quizz/quizz.module').then(res => res.QuizzModule)
    },
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'about',
    loadChildren: () => {
      return import('./about/about.module').then(res => res.AboutModule)
    }
  },
  {
    path: 'login',
    loadChildren: () => {
      return import('./login/login.module').then(res => res.LoginModule)
    }
  },
  {
    path: 'chat',
    loadChildren: () => {
      return import('./chat/chat.module').then(res => res.ChatModule)
    }
  },
  {
    path: 'counter',
    loadChildren: () => {
      return import('./counter/counter.module').then(res => res.CounterModule)
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
