export interface ChatMessage{
  message : string;
  createdAt: Date;
  from : string;
  type: 'sent' | 'received';
}



// TODO
