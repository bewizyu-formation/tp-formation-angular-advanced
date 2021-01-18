import { environment } from './../../../environments/environment.prod';
import { Quizz, User, UserInfos } from './quizz.models';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class QuizzService {
  private quizzQuestions: Quizz[] = [
    {
      question: 'One of the deadliest pandemics, the Spanish Flu, killed off what percentage of the human world population at the time?',
      answers: [{
        answer: '3 to 6 percent',
        isCorrect: true
      },
      {
        answer: '6 to 10 percent',
        isCorrect: false
      },
      {
        answer: '1 to 3 percent',
        isCorrect: false
      },
      {
        answer: 'less than 1 percent',
        isCorrect: false
      }
      ]
    },
    {
      question: 'What is the nickname for the US state Delaware?',
      answers: [{
        answer: 'The Fiftieth State',
        isCorrect: false
      },
      {
        answer: 'The First State',
        isCorrect: true
      },
      {
        answer: 'The Second State',
        isCorrect: false
      },
      {
        answer: 'The Sixteenth State',
        isCorrect: false
      }
      ]
    },
    {
      question: 'What is the nickname for the US state Delaware?',
      answers: [{
        answer: 'The Fiftieth State',
        isCorrect: false
      },
      {
        answer: 'The First State',
        isCorrect: true
      },
      {
        answer: 'The Second State',
        isCorrect: false
      },
      {
        answer: 'The Sixteenth State',
        isCorrect: false
      }
      ]
    }
  ];
  constructor(private http : HttpClient){
  }

  retrieve(): Quizz[]{
    this.persisteData(this.quizzQuestions);
    return this.quizzQuestions;
  }

  retrieveData(): Observable<UserInfos>{
    return this.http.get<UserInfos>(`${environment.base_url}api/v1/me`);
  }

  persisteData(data : Quizz[]){
    localStorage.setItem('QUIZZ_LIST', JSON.stringify(data) );

    const myItem = localStorage.getItem('QUIZZ_LIST');

    const quizes : Quizz[] = <Quizz[]>JSON.parse(myItem);
    console.log(quizes);

    // localStorage.removeItem('QUIZZ_LIST')
  }



}
