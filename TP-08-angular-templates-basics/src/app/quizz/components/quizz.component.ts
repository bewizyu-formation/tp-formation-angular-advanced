import { QuizzService } from './../core/quizz.service';
import { Quizz, QuizzAnswer } from './../core/quizz.models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {

  userName = '';
  currentQuestionIndex = 0;
  totalPoints = 0;
  quizTime = 0;
  quizzEnded = false;
  quizzQuestions: Quizz[] = [];

  contentLoading : boolean = true;
  intervalInstance;

  constructor(private quizzService: QuizzService) {

  }

  ngOnInit(): void {

    this.quizzService.retrieveData()
      .subscribe(
        result => {
          this.userName = `${result.firstname} ${result.lastname}`
        }, err => {
          alert('Une erreur est survenue !')
        }
      );

    //init question data;
    this.quizzService.retrieve().subscribe(
      result => {
        this.quizzQuestions = result;
        this.contentLoading = false;
        this.startTimer();
        //TODO To refactore !!
        this.quizzService.persisteData(result);
      },
      err => {
        alert('Une erreur est survenue !');
        this.contentLoading = false;
      }
    );
  }

  private startTimer(){
    this.intervalInstance = setInterval(() => {
      this.quizTime++;
    }, 1000);
  }

  private stopTimer(){
    if(!!this.intervalInstance){
      clearInterval(this.intervalInstance);
    }
  }



  secondsToString(time: number): string {
    const date = new Date(null);
    date.setSeconds(time) // ICI METTRE LE NOMBRE DE SECONDES
    return date.toISOString().substr(11, 8);
  }

  nextQuestion(answer: QuizzAnswer) {
    if (!!answer && answer.isCorrect) {
      this.totalPoints += 10;
    }

    if (this.currentQuestionIndex < this.quizzQuestions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.stopTimer();
      // afficher le resultat
      this.quizzEnded = true;
    }
  }

  getCurrentProgress(): string {
    if (this.quizzQuestions.length > 0) {
      return `${(this.currentQuestionIndex + 1) / this.quizzQuestions.length * 100}%`
    }
    return '0%';
  }

  ngOnDestroy(): void {
  }
}
