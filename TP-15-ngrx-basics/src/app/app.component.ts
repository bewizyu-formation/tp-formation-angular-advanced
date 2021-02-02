import { incrementCounter } from './counter/core/counter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
      titre : 'Timer',
      link : 'counter'
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

  constructor(private store: Store<AppState>){

  }

  ngOnInit(){
    console.log('DEMARRAGE DE L\'APPLICATION')
    setInterval(() => {
      this.store.dispatch(incrementCounter({ incrementBy: 10 }))
    }, 1000)
  }
}
