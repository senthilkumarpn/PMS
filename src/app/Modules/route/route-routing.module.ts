import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../Components/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';
import { EmployeeComponent } from '../../components/employee/employee.component';

const routes: Routes = [
 { path:'dashboard',component:DashboardComponent } ,
 { path:'employee-details',component:EmployeeDetailsComponent },
 { path:'employee',component:EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
