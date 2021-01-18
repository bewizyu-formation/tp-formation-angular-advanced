import { Quizz, QuizzAnswer } from './../core/quizz.models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {

  currentQuestionIndex = 0;
  totalPoints = 0;
  quizTime = 0;
  quizzEnded = false;
  quizzQuestions: Quizz[] = [
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

  intervalInstance;

  constructor() {

  }

  ngOnInit(): void {
    this.intervalInstance = setInterval(() => {
      this.quizTime ++;
    }, 1000);
  }

  secondsToString(time: number): string{
    const date = new Date(null);
    date.setSeconds(time) // ICI METTRE LE NOMBRE DE SECONDES
    return date.toISOString().substr(11, 8);
  }

  nextQuestion(answer : QuizzAnswer){
    if(!!answer && answer.isCorrect){
      this.totalPoints += 10;
    }

    if(this.currentQuestionIndex < this.quizzQuestions.length -1 ){
      this.currentQuestionIndex ++;
    } else {
      clearInterval(this.intervalInstance);
      // afficher le resultat
      this.quizzEnded = true;
    }
  }

  getCurrentProgress() : string{
    if(this.quizzQuestions.length > 0){
      return `${(this.currentQuestionIndex + 1) / this.quizzQuestions.length * 100}%`
    }
    return '0%';
  }

  ngOnDestroy(): void {
  }
}
