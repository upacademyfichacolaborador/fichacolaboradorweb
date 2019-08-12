import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path:'', component:LayoutComponent,
  children: [
    {
      path: 'colaboradores', component: EmployeeComponent
    },
    {
      path: 'administradores', component: UserComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
