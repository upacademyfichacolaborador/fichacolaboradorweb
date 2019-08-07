import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth/auth.guard';


const routes: Routes = [
  {path:'',loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule),
  canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
