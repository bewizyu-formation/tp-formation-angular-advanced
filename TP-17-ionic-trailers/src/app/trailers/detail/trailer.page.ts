import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.page.html',
  styleUrls: ['./trailer.page.scss'],
})
export class TrailerPage implements OnInit {
  public id: string;

  constructor(private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.router.getCurrentNavigation().extras.queryParams)
    console.log(this.router.getCurrentNavigation().extras.state)
  }

}
