import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailJobRoutingModule } from './detail-job-routing.module';
import { DetailJobComponent } from './detail-job.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DetailJobComponent
  ],
  imports: [
    CommonModule,
    DetailJobRoutingModule,
    MatSidenavModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule
  ]
})
export class DetailJobModule { }
