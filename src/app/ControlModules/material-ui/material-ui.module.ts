import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatButtonModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialUIModule { }
