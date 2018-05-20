import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../Components/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';
import { EmployeeComponent } from '../../components/employee/employee.component';
import { LoginComponent } from '../../login/login.component';

const routes: Routes = [
 { path:'',component:LoginComponent } ,
 { path:'login',component:LoginComponent } ,
 { path:'dashboard',component:DashboardComponent } ,
 { path:'employeedetails',component:EmployeeDetailsComponent },
 { path:'employee',component:EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
