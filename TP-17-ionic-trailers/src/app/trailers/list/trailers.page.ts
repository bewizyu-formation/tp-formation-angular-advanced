import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.page.html',
  styleUrls: ['./trailers.page.scss'],
})
export class TrailersPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  navigate(film : any) {
    const navExtras: NavigationExtras = {

      state: {
        user: {
          firstName: 'Jean',
          lastName: 'Dupond',
          age: 23,
          interets: ['1', '2', '3']
        }
      }
    }
    this.router.navigate(['/home/trailers/detail/123'], navExtras);
  }

}
