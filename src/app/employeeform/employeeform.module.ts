import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeformRoutingModule } from './employeeform-routing.module';
import { EmployeeformComponent } from './employeeform.component';
import { Routes, RouterModule } from '@angular/router';
import { faPlus, faTrash, faUserEdit, faInfo, faRedoAlt, faFileExport } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [EmployeeformComponent],
  imports: [
    CommonModule,
    EmployeeformRoutingModule,
 
  ]
})
export class EmployeeformModule { 
  public iconNew = faPlus;
  public iconTrash = faTrash;
  public iconInfo = faInfo;
  public iconEdit = faUserEdit;
  public iconRefresh = faRedoAlt;
  public iconExcelExport = faFileExport;
  
}

