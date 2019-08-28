import { Injectable } from '@angular/core';
import { EmployeeApiService } from '../employee/employee-api.service';
import { ReplaySubject } from 'rxjs';
import { UserApiService } from '../user/user-api.service';
import { id } from '@swimlane/ngx-datatable/release/utils';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public employees$: ReplaySubject<any[]> = new ReplaySubject(1);
  public employee$: ReplaySubject<any> = new ReplaySubject(1);
  private employees: any[];
  private employee: any;
  public users$: ReplaySubject<any[]> = new ReplaySubject(1);
  private users: any[];

  constructor(
    private employeeApi: EmployeeApiService,
    private userApi: UserApiService
  ) {
    this.getAllEmployees();
    this.getAllUsers();
  }

  public getAllEmployees() {
    this.employeeApi.getAllEmployees().subscribe(
      (res: any) => {
        console.log(res);
        this.employees = res;
        this.employees$.next(res);
      },
      (error) => {
        console.log(error)
      })
  }

  public getAllUsers() {
    this.userApi.getAllUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.users = res;
        this.users$.next(res);
      },
      (error) => {
        console.log(error)
      })
  }

  public getEmployeeById(id) {
    this.employeeApi.get(id).subscribe(
      (res: any) => {
        console.log(res);
        this.employee = res;
        this.employee$.next(res);
      },
      (error) => {
        console.log(error)
      })
  }

  public getEmployeeByIdEdit(id) {
    console.log("entrei")
    return this.employeeApi.get(id);
  }
}
