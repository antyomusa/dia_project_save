import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarHomeComponent } from './topbar-home/topbar-home.component';



@NgModule({
  declarations: [
    TopbarHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarHomeComponent
  ]
})
export class LayoutsModule { }
