import { CounterState } from './counter.models';
import { incrementCounter, decrementCounter } from './counter.actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: CounterState = {
  color: '#00FF00',
  isLoading: false,
  seconds: 0
}

const monReducer = createReducer(initialState,

  on(incrementCounter, (state, action) => {
    let newColor = '#00FF00'; // Green
    const newSeconds = state.seconds + action.incrementBy;
    if(newSeconds >= 200){
      newColor = '#FF0000'; // Red
    } else if(newSeconds >= 100){
      newColor = '#FFA500'; // Orange
    }

    return {
      ...state, ...{
        seconds: newSeconds,
        color : newColor
      }
    };
  }),

  on(decrementCounter, (state, action) => {
    if(state.seconds <= 0){
      return state;
    }
    let newColor = '#00FF00'; // Green
    const newSeconds = state.seconds - action.decrementBy;
    if(newSeconds >= 200){
      newColor = '#FF0000'; // Red
    } else if(newSeconds >= 100){
      newColor = '#FFA500'; // Orange
    }
    return {
      ...state, ...{
        seconds: newSeconds,
        color : newColor
      }
    };
  })
)


export function counterReducer(state: CounterState, action: Action): CounterState {
  return monReducer(state, action);
}
