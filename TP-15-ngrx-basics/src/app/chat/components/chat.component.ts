import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as faker from 'faker'
import { ChatMessage } from '../core/chat.models';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnDestroy, OnInit {

  constructor() {

  }

  ngOnInit(){
    // TODO ...

  }

  ngOnDestroy(): void {
  }
}
