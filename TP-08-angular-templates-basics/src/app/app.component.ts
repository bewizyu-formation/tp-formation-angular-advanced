import { LoginService } from './login/core/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      titre : 'A propos',
      link : 'about'
    }
  ]

  constructor(private loginService: LoginService, private router: Router){

  }

  logoutUser(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  isConnected(){
    return this.loginService.isUserConnected();
  }
}
