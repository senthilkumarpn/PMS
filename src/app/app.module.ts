import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent} from './Components/shared/footer/footer.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import {MaterialUIModule} from './Modules/ControlModules/material-ui/material-ui.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {RouteModule} from './Modules/route/route.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    RouteModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
