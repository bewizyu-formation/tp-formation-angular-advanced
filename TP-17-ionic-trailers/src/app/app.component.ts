import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Trailers', url: '/home/trailers', icon: 'film' },
    { title: 'Login', url: '/folder/Login', icon: 'paper-plane' },
    { title: 'Favoris', url: '/folder/Favoris', icon: 'heart' },
    { title: 'Préferences', url: '/folder/Préferences', icon: 'archive' },
  ];
  constructor() {}
}
