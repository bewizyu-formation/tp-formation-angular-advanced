import { ChatState, ChatMessage } from './chat.models';
import { sendMessage } from './chat.actions';
import { Action, createReducer, on } from '@ngrx/store';

const initialState: ChatState = {
  error: null,
  loading: false,
  messages: []
}


const myReducer = createReducer(initialState,
  on(sendMessage, (state, action) => {
    const myNewMessage: ChatMessage = {
      ...action.messageToAdd, ... { createdAt: new Date() }
    }
    const myNewMessages: ChatMessage[] = [...state.messages]
    myNewMessages.push(myNewMessage)

    return {
      ...state,
      ...{
        messages: myNewMessages
      }
    }
  })
)

export function chatReducer(state: ChatState, action: Action): ChatState {
  return myReducer(state, action);
}
