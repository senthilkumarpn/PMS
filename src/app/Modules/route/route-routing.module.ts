import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../Components/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';

const routes: Routes = [
 { path:'dashboard',component:DashboardComponent } ,
 { path:'employee-details',component:EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
