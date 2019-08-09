import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/core/models/employee/employee';
import { DataService } from 'src/app/core/services/data/data.service';
import { Page } from 'src/app/core/models/page/page';


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
page = new Page();


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
      this.page.pageNumber = 0;
      this.page.size = 20;
  }


  
    

  ngOnInit() {
    this.setPage({ offset: 0 });
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
    
  
  setPage(pageInfo){
    this.page.pageNumber = pageInfo.offset;
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
}
