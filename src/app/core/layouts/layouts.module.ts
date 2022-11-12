import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarHomeComponent } from './topbar-home/topbar-home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { TopbarLoggedInComponent } from './topbar-logged-in/topbar-logged-in.component';



@NgModule({
  declarations: [
    TopbarHomeComponent,
    JobDetailComponent,
    TopbarLoggedInComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarHomeComponent,
    JobDetailComponent,
    TopbarLoggedInComponent
  ]
})
export class LayoutsModule { }
