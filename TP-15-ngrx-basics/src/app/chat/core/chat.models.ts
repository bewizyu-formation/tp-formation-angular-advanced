export interface ChatMessage{
  message : string;
  createdAt?: Date;
  from : string;
  type: 'sent' | 'received';
}


export interface ChatState {
  messages : ChatMessage[];
  loading : boolean;
  error : any;
}
