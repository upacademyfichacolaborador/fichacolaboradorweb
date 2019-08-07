import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsApiService } from 'src/app/core/services/credentials/credentials-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private credentialsApi: CredentialsApiService
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.credentialsApi.logout();
    this.router.navigate(['/login']);
  }
}
