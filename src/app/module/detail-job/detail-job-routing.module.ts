import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailJobComponent } from './detail-job.component';

const routes: Routes = [
  {
    path: '',
    component: DetailJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailJobRoutingModule { }
