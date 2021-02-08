import { TrailerPage } from './detail/trailer.page';
import { TrailersPage } from './list/trailers.page';
import { TrailersPageRoutingModule } from './trailers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrailersPageRoutingModule
  ],
  declarations: [TrailersPage, TrailerPage]
})
export class TrailersPageModule {}
