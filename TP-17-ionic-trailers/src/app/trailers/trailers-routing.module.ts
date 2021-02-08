import { TrailerPage } from './detail/trailer.page';
import { TrailersPage } from './list/trailers.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TrailersPage
  },
  {
    path: 'detail/:id',
    component: TrailerPage
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailersPageRoutingModule {}
