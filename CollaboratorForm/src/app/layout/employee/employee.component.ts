import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Employee } from 'src/app/core/models/employee/employee';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
public employees$: ReplaySubject<Employee[]>;

  constructor(
    private dataService: DataService
  ) { 
    this.employees$ = this.dataService.employees$;
  }

  ngOnInit() {
  }

  getAllEmployees() {
    this.dataService.getAllEmployees();
  }
}
