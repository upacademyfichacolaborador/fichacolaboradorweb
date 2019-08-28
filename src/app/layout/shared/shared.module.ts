import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';






@NgModule({
  declarations: [HeaderComponent, SidebarComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()

  ],
  exports:[HeaderComponent, SidebarComponent]
})
export class SharedModule { }
