import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';
import {FormsModule } from '@angular/forms'
import { LayoutComponent } from './layout.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [LayoutComponent, FormComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LayoutModule { }
