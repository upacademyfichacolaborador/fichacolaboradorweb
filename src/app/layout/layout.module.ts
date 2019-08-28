import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { LayoutComponent } from './layout.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { EmployeeNewComponent } from './employee/employee-new/employee-new.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule, BsDatepickerModule} from 'ngx-bootstrap';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { FormComponent } from './form/form.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './chart/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { RadarChartComponent } from './chart/radar-chart/radar-chart.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import {SelectModule} from 'ng-select';




@NgModule({
  declarations: [LayoutComponent, EmployeeComponent, UserComponent, EmployeeNewComponent, UserNewComponent, UserDeleteComponent, EmployeeDeleteComponent, UserEditComponent, FormComponent, BarChartComponent, DoughnutChartComponent, PieChartComponent, RadarChartComponent,ChartComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxDatatableModule,
    ReactiveFormsModule,
    ChartsModule, 
    SelectModule,
    
  ],
  entryComponents:[EmployeeNewComponent,UserNewComponent, UserDeleteComponent, EmployeeDeleteComponent, UserEditComponent, FormComponent]
})
export class LayoutModule { }
