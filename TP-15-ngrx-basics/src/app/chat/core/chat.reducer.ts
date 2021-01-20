import { addMessage } from './chat.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { ChatState } from './chat.models';

export const initialState: ChatState = {
  loading: false,
  messages: []
}

const reducer = createReducer(
  initialState,
  on(addMessage, (state, action) => {
    const newMessagesState = [ ...state.messages, {
      message : action.text,
      from : action.sender,
      createdAt : new Date()
    }]
    return {...state, ...{
      messages : newMessagesState
    }}
  })
);


export function chatReducer(state: ChatState | undefined, action: Action): ChatState {
  return reducer(state, action);
}
