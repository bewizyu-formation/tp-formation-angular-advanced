import { ChatComponent } from './components/chat.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes : Routes = [
  {
    path : '',
    component : ChatComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule{

}
