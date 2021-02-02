import { selectCounterValue, selectCounterColor } from './../core/counter.selector';
import { incrementCounter, decrementCounter } from './../core/counter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  static INCREMENT_BY = 10;
  subscriptions: Subscription[] = [];

  counter: number;
  timerColor  = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select(selectCounterValue)
        .subscribe(seconds => {
          this.counter = seconds;
        })
    )

    this.subscriptions.push(
      this.store.select(selectCounterColor)
        .subscribe(color => {
          this.timerColor = color;
          console.log(color)
        })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  executerOperation(typeOperation : 'add' | 'sub'){
    if(typeOperation === 'add'){
      this.store.dispatch(incrementCounter({incrementBy : CounterComponent.INCREMENT_BY}))
    } else {
      this.store.dispatch(decrementCounter({decrementBy : CounterComponent.INCREMENT_BY}))
    }
  }

}
