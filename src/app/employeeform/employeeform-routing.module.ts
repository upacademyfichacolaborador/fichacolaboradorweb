import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeformComponent } from './employeeform.component';
import { TokenGuard } from '../core/guards/token/token.guard';


const routes: Routes = [
{
      path: '',canActivateChild:[TokenGuard], children: [
       { 
         path: ':token', 
         component: EmployeeformComponent
      }
      ] }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeformRoutingModule { }
