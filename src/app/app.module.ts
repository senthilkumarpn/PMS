import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent} from './Components/shared/footer/footer.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import {MaterialUIModule} from './_modules/index';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {RouteModule} from './_modules/index';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { MenuitemComponent } from './components/shared/menuitem/menuitem.component';
import { MenulistComponent } from './components/shared/menulist/menulist.component';
import { SideNavComponent } from './Components/Shared/side-nav/side-nav.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MongodbService} from './_services/index';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    MenulistComponent,
    MenuitemComponent,
    SideNavComponent,
    LoginComponent,
  ],
  imports: [
    RouteModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [MongodbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
