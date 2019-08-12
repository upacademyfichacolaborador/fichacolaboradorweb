import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/core/models/employee/employee';
import { DataService } from 'src/app/core/services/data/data.service';



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
//@ViewChild(EmployeeComponent, { static: false }) table: EmployeeComponent;



constructor(
    private dataService: DataService
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
    
  
 
}
