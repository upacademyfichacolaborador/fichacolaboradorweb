import { Injectable} from '@angular/core';
import { EmployeeApiService } from '../employee/employee-api.service';
import { ReplaySubject } from 'rxjs';
import { UserApiService } from '../user/user-api.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public employees$: ReplaySubject<any[]> = new ReplaySubject(1);
  private employees: any[];

  public users$: ReplaySubject<any[]> = new ReplaySubject(1);
  private users: any[];




  constructor(
    private employeeApi: EmployeeApiService,
    private userApi: UserApiService
  ) { 
this.getAllEmployees();
this.getAllUsers();
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

 public getAllUsers(){
    this.userApi.getAllUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.users = res;
        this.users$.next(res);
      }
    )
  }
}
