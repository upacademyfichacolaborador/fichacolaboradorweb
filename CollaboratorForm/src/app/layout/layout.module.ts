import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';
import {FormsModule} from '@angular/forms'
import { LayoutComponent } from './layout.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { EmployeeNewComponent } from './employee/employee-new/employee-new.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [LayoutComponent, EmployeeComponent, UserComponent, EmployeeNewComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    NgxDatatableModule
  ],
  entryComponents:[EmployeeNewComponent]
})
export class LayoutModule { }
