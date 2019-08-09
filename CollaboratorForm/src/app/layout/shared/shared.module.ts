import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TablesComponent } from './components/tables/tables.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, TablesComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports:[HeaderComponent, SidebarComponent,TablesComponent]
})
export class SharedModule { }
