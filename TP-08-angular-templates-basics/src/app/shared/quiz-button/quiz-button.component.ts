import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-button',
  templateUrl: './quiz-button.component.html',
  styleUrls: ['./quiz-button.component.scss']
})
export class QuizButtonComponent implements OnInit, OnDestroy {

  @Input()
  label: string;


  @Output()
  answerClicked = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  onAnswer(){
    this.answerClicked.emit()
  }
}
