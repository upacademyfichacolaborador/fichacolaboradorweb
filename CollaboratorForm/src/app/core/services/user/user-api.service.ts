import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/users/";
  constructor(private http: HttpClient) { }


  public getAllUsers() {
    return this.http.get(this._apiUrl);
  }

  public createUser(user){
    return this.http.post(this._apiUrl, user);
  }

  public delete(id) {
    console.log(this._apiUrl + id);
    return this.http.delete(this._apiUrl + id);
  }

  public get(id) {
    console.log(this._apiUrl + id);
    return this.http.get(this._apiUrl + id);
  }

  public edit(user) {
    console.log(this._apiUrl);
    return this.http.put(this._apiUrl, user);
  }


}
