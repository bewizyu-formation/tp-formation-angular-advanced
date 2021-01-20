import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { ChatState } from "./chat/core/chat.models";
import { chatReducer } from './chat/core/chat.reducer';

export interface AppState {
  chat : ChatState
}


export const reducers : ActionReducerMap<AppState> = {
  chat : chatReducer
}

export const selectChatState = createFeatureSelector<AppState, ChatState>('chat');



