import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'colaboradores', component: EmployeeComponent
      },
      {
        path: 'administradores', component: UserComponent
      },
      {
        path: 'form/:id', component: FormComponent
      },
      {
        path: 'form', component: FormComponent
      },
      {
        path: 'estatisticas', component: ChartComponent,
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
