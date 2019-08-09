import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LayoutComponent } from './layout.component';

import { EmployeeComponent } from './employee/employee.component';



@NgModule({
  declarations: [LayoutComponent, EmployeeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
