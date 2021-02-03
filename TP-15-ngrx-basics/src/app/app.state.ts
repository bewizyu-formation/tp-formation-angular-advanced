import { ChatState } from './chat/core/chat.models';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter/core/counter.models';
import { counterReducer } from './counter/core/counter.reducers';
import { chatReducer } from './chat/core/chat.reducer';

export interface AppState {
  counter : CounterState;
  chat : ChatState
}

export const reducersMapping : ActionReducerMap<AppState> = {
  counter : counterReducer,
  chat : chatReducer
}

export const selectCounterState = createFeatureSelector<AppState, CounterState>('counter');
export const selectChatState = createFeatureSelector<AppState, ChatState>('chat');

