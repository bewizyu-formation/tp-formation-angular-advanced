import { QuizzService } from './quizz/core/quizz.service';
import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';

@Injectable({
  providedIn : 'root'
})
export class AuthenticationGuardService implements CanActivate {

  isAuthenticated = true;
  constructor(){
  }

  canActivate(){
    return this.isAuthenticated;
  }

}
