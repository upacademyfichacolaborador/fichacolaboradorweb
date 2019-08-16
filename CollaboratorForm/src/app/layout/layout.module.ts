import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';
import {FormsModule} from '@angular/forms'
import { LayoutComponent } from './layout.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { EmployeeNewComponent } from './employee/employee-new/employee-new.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';




@NgModule({
  declarations: [LayoutComponent, EmployeeComponent, UserComponent, EmployeeNewComponent, UserNewComponent, UserDeleteComponent, EmployeeDeleteComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxDatatableModule
  ],
  entryComponents:[EmployeeNewComponent,UserNewComponent, UserDeleteComponent, EmployeeDeleteComponent]
})
export class LayoutModule { }
