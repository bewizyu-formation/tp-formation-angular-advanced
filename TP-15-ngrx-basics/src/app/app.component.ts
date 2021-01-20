import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titre = 'MY SMART APP';

  navigations = [
    {
      titre : 'My Quizz',
      link : 'quizz'
    },
    {
      titre : 'Messagerie',
      link : 'chat'
    },
    {
      titre : 'A propos',
      link : 'about'
    },
    {
      titre : 'Login',
      link : 'login'
    }
  ]
}
