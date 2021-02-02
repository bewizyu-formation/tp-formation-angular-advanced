import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const incrementCounter = createAction('[COUNTER] Increment counter', props<{ incrementBy : number}>())
export const decrementCounter = createAction('[COUNTER] Decrement counter', props<{ decrementBy : number}>())
