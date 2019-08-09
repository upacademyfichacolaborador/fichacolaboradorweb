import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/models/employee/employee';
import { DataService } from 'src/app/core/services/data/data.service';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [DecimalPipe]
})
export class EmployeeComponent implements OnInit {
public employees$: Observable<Employee[]>;
public filter = new FormControl('');
  constructor(
    pipe: DecimalPipe,
    private dataService: DataService
  ) { 
    this.employees$ = this.dataService.employees$;
    this.employees$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.dataService.search(text, pipe))
      );
  }

  ngOnInit() {
  }

  getAllEmployees() {
    this.dataService.getAllEmployees();
  }

  
  
    
  
    
}
