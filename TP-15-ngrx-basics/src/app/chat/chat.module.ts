import { FormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './components/chat.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations : [
    ChatComponent
  ],
  imports : [
    FormsModule,
    CommonModule,
    SharedModule,
    ChatRoutingModule
  ],
  exports: [
  ]
})
export class ChatModule{

}
