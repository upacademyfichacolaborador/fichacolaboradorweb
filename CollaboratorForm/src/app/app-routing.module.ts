import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth/auth.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'',loadChildren:()=>import('./layout/layout.module').then(module=>module.LayoutModule),
  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
