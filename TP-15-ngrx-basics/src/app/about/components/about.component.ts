import { selectCounterValue, selectCounterColor } from './../../counter/core/counter.selector';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnDestroy, OnInit {

  color = '';
  constructor(private store : Store<AppState> ) {

  }

  ngOnInit(){
    this.store.select(selectCounterColor).subscribe(color => {
      this.color = color;
    })
  }


  ngOnDestroy(): void {
  }
}
