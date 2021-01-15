import { Quizz } from './../core/quizz.models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {

  currentQuestionIndex = 0;
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
    }
  ];

  constructor() {

  }

  ngOnInit(): void {

  }
  nextQuestion(){
    if(this.currentQuestionIndex < this.quizzQuestions.length -1 ){
      this.currentQuestionIndex ++;
    } else {
      //
    }
  }

  ngOnDestroy(): void {
  }
}
