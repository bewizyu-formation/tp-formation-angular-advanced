import { sendMessage } from './../core/chat.actions';
import { ChatMessage } from './../core/chat.models';
import { selectChatMessages } from './../core/chat.selectors';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as faker from 'faker'
import { AppState } from 'src/app/app.state';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnDestroy, OnInit {

  userMessage = '';
  pageMessages: ChatMessage[];
  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    // TODO ...
    this.store.select(selectChatMessages).subscribe(messages => {
      this.pageMessages = messages;
      console.log(messages)
    })
  }

  sendMessage() {
    this.store.dispatch(sendMessage({
      messageToAdd: {
        from: 'Hamza HSAIN',
        message: this.userMessage,
        type: 'sent'
      }
    }));
    this.userMessage = '';
  }

  ngOnDestroy(): void {
  }
}
