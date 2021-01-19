import { environment } from './../../../environments/environment.prod';
//TODO-1 :  Créer LoginService avec deux methodes : login(login,password) et isUserConnected(): boolean

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  login(_email: string, _password: string): Observable<any> {
    return this.httpClient.post(`${environment.base_url}api/v1/login`,
      {
        email: _email,
        password: _password
      }
    ).pipe(tap(resultat => {
      localStorage.setItem('APP-USER', JSON.stringify(resultat))
    }));
  }

  isUserConnected(): boolean {
    return !!localStorage.getItem('APP-USER');
  }

  logout(){
    localStorage.removeItem('APP-USER');
  }
}
