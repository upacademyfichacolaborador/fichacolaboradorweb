import { Injectable } from '@angular/core';
import { EmployeeApiService } from '../employee/employee-api.service';
import { ReplaySubject } from 'rxjs';
import { UserApiService } from '../user/user-api.service';

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
  public statisticProfessionalCategory$: ReplaySubject<any[]> = new ReplaySubject(1);
  public statisticProfessionalCategory: any[];
  public statisticSpecialTech$: ReplaySubject<any[]> = new ReplaySubject(1);
  public statisticSpecialTech: any[];


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
        this.employees$.next([]);
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
        this.users$.next([]);
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
      })
  }

  public getEmployeeByIdEdit(id) {
    console.log("entrei")
    return this.employeeApi.get(id);
  }

  public getStatisticProfessionalCategory() {
    this.employeeApi.statisticProfessionalCategory().subscribe(
      (res: any) => {
        console.log(res);
        this.statisticProfessionalCategory = res;
        this.statisticProfessionalCategory$.next(res);
      },
      (error) => {
        console.log(error)
      })
  }

  public getStatisticSpecialTech() {
    this.employeeApi.statisticSpecialTech().subscribe(
      (res: any) => {
        console.log(res);
        this.statisticSpecialTech = res;
        this.statisticSpecialTech$.next(res);
      },
      (error) => {
        console.log(error)
      })
  }

}
