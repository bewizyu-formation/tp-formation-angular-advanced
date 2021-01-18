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

  intervalInstance;

  constructor(private quizzService: QuizzService) {

  }

  ngOnInit(): void {

    this.quizzService.retrieveData()
      .subscribe(
        result => {
          this.userName = `${result.firstname} ${result.lastname}`
        }, err => {
          console.log('ERROR', err)
        }
      );

    //init question data;
    this.quizzQuestions = this.quizzService.retrieve();

    this.intervalInstance = setInterval(() => {
      this.quizTime++;
    }, 1000);
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
      clearInterval(this.intervalInstance);
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
