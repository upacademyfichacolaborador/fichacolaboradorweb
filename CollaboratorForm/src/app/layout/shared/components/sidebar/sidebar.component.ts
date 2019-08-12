import { Component, OnInit } from '@angular/core';
import { CredentialsApiService } from 'src/app/core/services/credentials/credentials-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public owner = false;
  constructor(
    private credentialsApi: CredentialsApiService
  ) { }

  ngOnInit() {
  
  }

 

}
