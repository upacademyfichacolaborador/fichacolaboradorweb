import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/token";
  private _apiUrl2 = "http://localhost:8080/projetoFichaColaborador/api/token/";
  constructor(private http: HttpClient) { }

  public verifyToken(token) {
    let params = new HttpParams().set('val', token + "=");
  /*   let headers = new HttpHeaders();
    headers.append('Content-Type', 'text'); */
    return this.http.get(this._apiUrl, { responseType: 'text', params });
    /* {responseType: 'text'},{params:params}} );
} */
  }

  public deleteToken(token){
    //.search.substring(1);
    //var qs = parse_query_string(query);
    console.log("entrei" + token)
    console.log(this._apiUrl2 + "    " + token)
    return this.http.delete(this._apiUrl2 + token);
  }
}

