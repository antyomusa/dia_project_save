import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarHomeComponent } from './topbar-home/topbar-home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';



@NgModule({
  declarations: [
    TopbarHomeComponent,
    JobDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarHomeComponent,
    JobDetailComponent
  ]
})
export class LayoutsModule { }
