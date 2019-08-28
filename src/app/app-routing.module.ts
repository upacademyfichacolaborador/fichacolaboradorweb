import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { TokenGuard } from './core/guards/token/token.guard';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { InvalidTokenComponent } from './invalid-token/invalid-token/invalid-token.component';
import { FormSuccessComponent } from './form-success/form-success.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },

  {
    path: 'employeeform/:token', component: EmployeeformComponent,
    canActivate: [TokenGuard]
  },
  {
    path: 'form-success', component: FormSuccessComponent,
  },
  {
    path: 'invalid-token', component: InvalidTokenComponent,
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
