export interface ChatMessage{
  message : string;
  createdAt: Date;
  from : string;
}


export interface ChatState{
  loading : boolean;
  messages : ChatMessage[];
}


