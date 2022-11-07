import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LayoutsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
