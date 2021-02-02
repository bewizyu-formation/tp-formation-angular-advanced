import { selectCounterValue } from './../core/counter.selector';
import { incrementCounter } from './../core/counter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  counter: number;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select(selectCounterValue)
        .subscribe(seconds => {
          this.counter = seconds;
        })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

}
