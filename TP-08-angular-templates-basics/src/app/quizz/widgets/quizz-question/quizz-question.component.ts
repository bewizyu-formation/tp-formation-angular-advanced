import { Quizz, QuizzAnswer } from './../../core/quizz.models';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.scss']
})
export class QuizzQuestionComponent implements OnInit, OnDestroy {

  @Input()
  questionItem: Quizz;


  @Output()
  onAnswer = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  onAnswerSelected(selectedAnswer : QuizzAnswer){
    this.onAnswer.emit(selectedAnswer)
  }
}
