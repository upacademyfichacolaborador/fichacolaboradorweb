import { Component, OnInit } from '@angular/core';
import { Credentials } from "../core/models/credentials/Credentials";
import { Router } from '@angular/router';
import { CredentialsApiService } from '../core/services/credentials/credentials-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials: Credentials = new Credentials();
  public msg: string;

  constructor(
    private router: Router,
    private credentialsApi: CredentialsApiService
  ) {
    
  }

  ngOnInit() { }

  public login() {
    this.credentialsApi.login(this.credentials).subscribe(
      (credentials: any) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(this.msg = error.msg);
      }
    );
  }
}
