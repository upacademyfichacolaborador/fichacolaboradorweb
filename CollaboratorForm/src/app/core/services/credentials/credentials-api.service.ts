import { Injectable } from '@angular/core';

import { Credentials } from "../../models/credentials/credentials";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CredentialsApiService {

  private currentCredentials: Credentials = new Credentials();
  private _loginUrl = "http://localhost:8080/projetoFichaColaborador/login/login";


  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    if (this.currentCredentials.id) {
      return true;
    } else {
      return false;
    }
  }

  public login(credentials: Credentials) {
    return this.http.post<any>(this._loginUrl, credentials)
  }

  public logout() {
    this.currentCredentials = null;
  }
}
