import { CounterState } from './counter.models';
import { selectCounterState } from './../../app.state';
import { createSelector } from '@ngrx/store';

export const selectCounterIsLoading = createSelector(
  selectCounterState,
  (state : CounterState) => state.isLoading
)


export const selectCounterValue = createSelector(
  selectCounterState,
  (state : CounterState) => state.seconds
)

export const selectCounterColor = createSelector(
  selectCounterState,
  (state : CounterState) => state.color
)
