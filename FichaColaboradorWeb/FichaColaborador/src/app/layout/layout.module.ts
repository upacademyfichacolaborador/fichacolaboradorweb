import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
