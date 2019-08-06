import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CredentialsApiService } from '../../services/credentials/credentials-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private credentialsApi: CredentialsApiService
  ){ }


  canActivate() {
     if (this.credentialsApi.isAuthenticated()) {
     return true;
   } else {
     this.router.navigate(['/login']);
   }
  }
  
     
  }  
  
  

