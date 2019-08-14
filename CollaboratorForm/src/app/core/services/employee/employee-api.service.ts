import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/employees/";
  private _apiUrl2 = "http://localhost:8080/projetoFichaColaborador/api/token/generateToken/";

  constructor(private http: HttpClient) { }

  public getAllEmployees() {
    return this.http.get(this._apiUrl);
  }

  public sendEmail(email: any){
    console.log(this._apiUrl2 + email);
    return this.http.get(this._apiUrl2 + email);
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

  
}
