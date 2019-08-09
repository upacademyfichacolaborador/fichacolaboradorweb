import { Injectable, PipeTransform } from '@angular/core';
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

  public search(text: string, pipe: PipeTransform):  any[]{
    return this.employees.filter(employees => {
      const term = text.toLowerCase();
      return employees.name.toLowerCase().includes(term)
          || pipe.transform(employees.admissionDate).includes(term)
    });
  }
}
