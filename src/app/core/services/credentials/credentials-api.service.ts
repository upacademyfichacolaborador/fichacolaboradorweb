import { Injectable } from '@angular/core';

import { Credentials } from "../../models/credentials/credentials";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CredentialsApiService {

  private _currentCredentials: Credentials = new Credentials();
  private _loginUrl = "http://localhost:8080/projetoFichaColaborador/api/login/login";


  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    if (this._currentCredentials.id) {
      return true;
    } else {
      return false;
    }
  }

public isOwner(): boolean {
  if (this._currentCredentials.role == "owner") {
    return true;
  } else {
    return false;
  }
}

  public setCurrentCredentials(currentCredentials: any){
    return this._currentCredentials = currentCredentials;
  }
  
  public getCurrentCredentials(){
    return this._currentCredentials;
  }

  public login(credentials: Credentials) {
    return this.http.post(this._loginUrl, credentials);
  }

  public logout() {
    this._currentCredentials = null;
  }
  public getCurrentName(): string {
    return this._currentCredentials.username
  }

  public getCurrentPassword(): string {
    return this._currentCredentials.password
  }
}
