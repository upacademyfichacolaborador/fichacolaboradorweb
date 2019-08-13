import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/users";
  constructor(private http: HttpClient) { }


  public getAllUsers() {
    return this.http.get(this._apiUrl);
  }

  public createUser(user){
    return this.http.post(this._apiUrl,user);
  }

}
