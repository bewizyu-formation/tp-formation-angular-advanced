import { CounterState } from './counter.models';
import { incrementCounter, decrementCounter } from './counter.actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: CounterState = {
  color: '#000',
  isLoading: false,
  seconds: 0
}

const monReducer = createReducer(initialState,

  on(incrementCounter, (state, action) => {
    return {
      ...state, ...{
        seconds: state.seconds + action.incrementBy
      }
    };
  }),

  on(decrementCounter, (state, action) => {
    return {
      ...state, ...{
        seconds: state.seconds - action.decrementBy
      }
    };
  })
)


export function counterReducer(state: CounterState, action: Action): CounterState {
  return monReducer(state, action);
}
