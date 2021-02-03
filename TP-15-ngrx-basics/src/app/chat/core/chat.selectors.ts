import { createSelector } from "@ngrx/store";
import { selectChatState } from "src/app/app.state";


export const selectChatMessages = createSelector(
  selectChatState,
  (state) => {
    return state.messages
  }
)
