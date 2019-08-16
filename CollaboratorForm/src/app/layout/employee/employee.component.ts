import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/core/models/employee/employee';
import { DataService } from 'src/app/core/services/data/data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { faPlus, faTrash, faUserEdit, faInfo, faRedoAlt, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeApiService } from 'src/app/core/services/employee/employee-api.service';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { ExcelService } from 'src/app/core/services/excel/excel.service';
import { Filters } from 'src/app/core/models/filters/filters';


@Component({
  selector: 'app-employee',
 
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {
public employees$: Observable<Employee[]>;
public employee$: Observable<Employee>;
private subscriptionData : Subscription;
private subscriptionEmployee : Subscription;

public filter$: Observable<Filters>;

rows = [];
temp = [];
selected = [];
public modalRef: BsModalRef;
public iconNew = faPlus;
public iconTrash = faTrash;
public iconInfo = faInfo;
public iconEdit = faUserEdit;
public iconRefresh = faRedoAlt;
public iconExcelExport = faFileExport;
public employee:Employee;
public filters:Filters;

constructor(
    private dataService: DataService,
    private modalService: BsModalService,
    private employeeApi: EmployeeApiService,
    private excelService: ExcelService
  ) { 
    this.employees$ = this.dataService.employees$;
    this.employee$ = this.dataService.employee$;
    this.subscriptionData = this.employees$.subscribe(
      (res) => {
        this.temp = res;
        console.log('ola', this.temp);
        this.rows = this.temp;
      }
    );
    this.subscriptionEmployee = this.employee$.subscribe(
      (res) => {
        this.employee = res;
        console.log('ola', this.employee);
      }
    );
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.subscriptionData.unsubscribe();
  }

  getAllEmployees() {
    this.dataService.getAllEmployees();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;
  }
    
  public openInviteModal() {
    this.modalRef = this.modalService.show(EmployeeNewComponent);
    // this.modalRef.content.event;
    // this.modalRef.hide();
  }

  public openDeleteModal(id) {
    console.log(id)
    this.modalRef = this.modalService.show(EmployeeDeleteComponent, {initialState: {
      employeeToDelete : id
  }});
  }

  // public delete(id) {
  //   this.employeeApi.delete(id).subscribe(
  //     () => {
  //       this.dataService.getAllEmployees();
  //     }
  //   );
  // }

  getEmployeeById(id) {
    this.dataService.getEmployeeById(id);
  }

/* 
  public get(id) {
    console.log(id)
    this.employeeApi.get(id).subscribe(
      
    );
  }
 */
  public edit(id) {
    console.log(id)
    this.employeeApi.edit(id).subscribe(
      
      () => {
        this.dataService.getAllEmployees();
      }
    );
  }

  onSelect(row){
    console.log(row)
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.selected, 'Ficha Colaboradores');
  }

  filter(){

  }
}
