import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFindComponent } from './job-find.component';

const routes: Routes = [
  {
    path: '',
    component: JobFindComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobFindRoutingModule { }
