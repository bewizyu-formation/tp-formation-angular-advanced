import { AboutComponent } from './components/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes : Routes = [
  {
    path : '',
    component : AboutComponent
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
export class AboutRoutingModule{

}
