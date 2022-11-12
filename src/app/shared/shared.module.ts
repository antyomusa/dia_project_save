import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from '../core/layouts/layouts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    LayoutsModule
  ]
})
export class SharedModule { }
