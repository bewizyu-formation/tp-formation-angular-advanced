import { Quizz } from './../core/quizz.models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {

  quizzQuestions : Quizz[] = [];

  constructor( ) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
