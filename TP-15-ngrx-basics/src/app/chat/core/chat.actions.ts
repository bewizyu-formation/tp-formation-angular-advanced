import { createAction, props } from "@ngrx/store";

export const addMessage = createAction('[CHAT] ADD MESSAGE', props<{ text: string, sender: string}>());
