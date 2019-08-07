import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent } from './components/header/header.component';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
