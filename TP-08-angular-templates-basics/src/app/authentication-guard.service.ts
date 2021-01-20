import { LoginService } from './login/core/login.service';
import { QuizzService } from './quizz/core/quizz.service';
import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';

@Injectable({
  providedIn : 'root'
})
export class AuthenticationGuardService implements CanActivate {

  // TODO-3 : remplacer cette logique par l'utilisation de loginService.isUserConneted()
  constructor(private loginService: LoginService){
  }

  canActivate(){
    return this.loginService.isUserConnected();
  }

}
