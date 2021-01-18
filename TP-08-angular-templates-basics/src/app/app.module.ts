import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzModule } from './quizz/quizz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
