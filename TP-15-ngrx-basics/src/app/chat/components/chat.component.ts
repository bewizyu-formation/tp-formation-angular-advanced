import { addMessage } from './../core/chat.actions';
import { AppState } from './../../app.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as faker from 'faker'
import { selectChatMessages } from '../core/chat.selectors';
import { ChatMessage } from '../core/chat.models';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnDestroy, OnInit {

  messages : ChatMessage[] = [];
  constructor(private store: Store<AppState>) {

  }

  ngOnInit(){
    this.store.select(selectChatMessages).subscribe(newState => {
      console.log(newState);
      this.messages = [... newState];
    })
    setInterval(() => {
      this.store.dispatch(addMessage({
        text : faker.lorem.words(),
        sender: faker.name.firstName() + ' ' + faker.name.lastName()
      }))
    }, 3000);

  }

  ngOnDestroy(): void {
  }
}
