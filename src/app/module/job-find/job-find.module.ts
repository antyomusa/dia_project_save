import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFindRoutingModule } from './job-find-routing.module';
import { JobFindComponent } from './job-find.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    JobFindComponent
  ],
  imports: [
    CommonModule,
    JobFindRoutingModule,
    MatSidenavModule
  ]
})
export class JobFindModule { }
