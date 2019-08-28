import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../services/token/token.service';
import {map, catchError} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/token";

  constructor(
    private router: Router,
    private TokenApi: TokenService,
    private http: HttpClient
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let token = route.paramMap.get('token');
    let params = new HttpParams().set('val', token + "=");
    console.log(token);
    return this.http.get(this._apiUrl, { responseType: 'text', params }).pipe(
      map(
      res => {
        console.log(res);
        if (res == 'Token Valido') {
          console.log('entrei');
          return true;
        }
        else {
          return false;
        }
      }),catchError( (e: any) => Observable.throw(this.errorHandler(e)) ))
  }

  errorHandler(error: any): void {
    console.log(error)
    if(error.status === 401){
      this.router.navigate(['/invalid-token']);
    }
  }
} 