import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule
  ],
  exports:[RouteRoutingModule],
  declarations: []
})
export class RouteModule { }
