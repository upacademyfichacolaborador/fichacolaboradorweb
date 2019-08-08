import { Injectable } from '@angular/core';
import { EmployeeApiService } from '../employee/employee-api.service';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public employees$: ReplaySubject<any[]> = new ReplaySubject(1);
  private employees: any[];

  constructor(
    private employeeApi: EmployeeApiService
  ) { 
this.getAllEmployees();
  }

  public getAllEmployees(){
    this.employeeApi.getAllEmployees().subscribe(
      (res: any) => {
        console.log(res);
        this.employees = res;
        this.employees$.next(res);
      }
    )
  }

  
}
