import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { TopbarLoggedInComponent } from './topbar-logged-in/topbar-logged-in.component';



@NgModule({
  declarations: [
    JobDetailComponent,
    TopbarLoggedInComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JobDetailComponent,
    TopbarLoggedInComponent
  ]
})
export class LayoutsModule { }
