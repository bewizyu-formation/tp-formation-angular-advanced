import { ChatMessage } from './chat.models';
import { createAction, props } from "@ngrx/store";

export const sendMessage = createAction('[CHAT] envoyer message', props<{ messageToAdd: ChatMessage }>())
