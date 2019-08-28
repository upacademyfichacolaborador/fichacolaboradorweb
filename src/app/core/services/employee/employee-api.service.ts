import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  public filters$: ReplaySubject<any> = new ReplaySubject(1);
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/employees/";
  private _apiUrl2 = "http://localhost:8080/projetoFichaColaborador/api/token/generateToken/";
  private _apiUrl3 = "http://localhost:8080/projetoFichaColaborador/api/employees/filter";
  private _apiUrl4 = "http://localhost:8080/projetoFichaColaborador/api/employees/statisticSpecialTech";
  private _apiUrl5 = "http://localhost:8080/projetoFichaColaborador/api/employees/statisticProfessionalCategory";
  
  constructor(private http: HttpClient) { }

  public getAllEmployees() {
    return this.http.get(this._apiUrl);
  }

  public sendEmail(email: any) {
    console.log(this._apiUrl2 + email);
    return this.http.get(this._apiUrl2 + email);
  }
  public add(employee) {
    console.log(this._apiUrl);
    return this.http.post(this._apiUrl, employee);
  }

  public delete(id) {
    console.log(this._apiUrl + id);
    return this.http.delete(this._apiUrl + id);
  }

  public get(id) {
    console.log(this._apiUrl + id);
    return this.http.get(this._apiUrl + id);
  }

  public edit(employee) {
    console.log(this._apiUrl);
    return this.http.put(this._apiUrl, employee);
  }

  public filter(filters) {
    console.log(filters);
    return this.http.post(this._apiUrl3, filters);
  }

  public statisticSpecialTech() {
    console.log();
    return this.http.get(this._apiUrl4);
  }

  public statisticProfessionalCategory() {
    console.log();
    return this.http.get(this._apiUrl5);
  }
}




