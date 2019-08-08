import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/employee";

  constructor(private http: HttpClient) { }

  public getAllEmployees() {
    return this.http.get(this._apiUrl);
  }
}
