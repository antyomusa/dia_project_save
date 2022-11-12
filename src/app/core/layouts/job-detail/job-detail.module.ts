import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobDetailComponent } from './job-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class JobDetailModule { }
