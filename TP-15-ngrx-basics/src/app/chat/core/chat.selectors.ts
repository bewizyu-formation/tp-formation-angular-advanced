import { selectChatState } from './../../app.state';
import { createSelector } from "@ngrx/store";
import { ChatState } from './chat.models';

export const selectChatMessages = createSelector(
  selectChatState,
  (state: ChatState) => state.messages
);
