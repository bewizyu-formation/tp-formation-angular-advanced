import { environment } from './../../../environments/environment.prod';
import { Quizz, User, UserInfos } from './quizz.models';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) {
  }

  retrieve(): Observable<Quizz[]> {
    // api/v1/quizes
    //Verifier si on a des données en cache
    const cachedData = this.getQuizesFromCache();
    if (!!cachedData) {
      // Si oui, retourner les données en cache
      return of(cachedData);
    } else {
      // sinon, faire la requete http et mettre en cache les données
      return this.http.get<Quizz[]>(`${environment.base_url}api/v1/quizes`)
    }

  }

  retrieveData(): Observable<UserInfos> {
    return this.http.get<UserInfos>(`${environment.base_url}api/v1/me`);
  }

  persisteData(data: Quizz[]) {
    localStorage.setItem('APP-QUIZES', JSON.stringify(data))
  }

  private getQuizesFromCache(): Quizz[] {
    const result = localStorage.getItem('APP-QUIZES');
    return !!result ? <Quizz[]>JSON.parse(result) : null
  }




}
