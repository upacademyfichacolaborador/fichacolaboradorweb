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
public filter$: Observable<Filters>;

private subscriptionData : Subscription;
private subscriptionEmployee : Subscription;

date;
district = null;
specialTech = null;
admissioDateMIN = null;
admissioDateMAX = null;
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
public filters:Filters = new Filters();

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

  filterSearch(){
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    this.date[0];
    this.date[1];
    this.district;
    this.specialTech;
    this.filters.admissioDateMIN = this.date[0].getTime();
    this.filters.admissioDateMAX = this.date[1].getTime();
    this.filters.district = this.district;
    this.filters.specialTech = this.specialTech;
    console.log(this.date);
    console.log(this.date[0].getTime());
    console.log(this.date[1].getTime());
    console.log((this.date[1].getTime()-this.date[0].getTime())/millisecondsPerDay);
    console.log(this.district);
    console.log(this.specialTech);
    console.log(this.filters);
    this.employeeApi.filter(this.filters).subscribe( 
      //() => {
      // fazer com que a data da tabela passe a ser a data que recebe do pedido
      //this.dataService.getAllEmployees();}
    );
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

}
