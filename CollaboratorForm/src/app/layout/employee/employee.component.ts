import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/core/models/employee/employee';
import { DataService } from 'src/app/core/services/data/data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeApiService } from 'src/app/core/services/employee/employee-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
 
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
public employees$: Observable<Employee[]>;
private subcriptionData : Subscription;
rows = [];
temp = [];
columns = [{ prop: 'name' }, { name: 'admissionDate' }];
public modalRef: BsModalRef;
public iconNew = faPlus;
public iconTrash = faTrash;


constructor(
    private dataService: DataService,
    private modalService: BsModalService,
    private employeeApi: EmployeeApiService
  ) { 
    this.employees$ = this.dataService.employees$;
    this.subcriptionData = this.employees$.subscribe(
      (res) => {
        this.temp = res;
        this.rows = this.temp;
      }
    );
    
  }

  ngOnInit() {
    
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
 
  public delete(id) {
    this.employeeApi.delete(id).subscribe(
      () => {
        this.dataService.getAllEmployees();
      }
    );
  }
}
