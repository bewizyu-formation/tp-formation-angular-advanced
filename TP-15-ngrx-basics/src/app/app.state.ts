import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter/core/counter.models';
import { counterReducer } from './counter/core/counter.reducers';

export interface AppState {
  counter : CounterState;
}

export const reducersMapping : ActionReducerMap<AppState> = {
  counter : counterReducer
}

export const selectCounterState = createFeatureSelector<AppState, CounterState>('counter');

