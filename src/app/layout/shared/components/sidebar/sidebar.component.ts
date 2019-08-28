import { Component, OnInit } from '@angular/core';
import { CredentialsApiService } from 'src/app/core/services/credentials/credentials-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  constructor(
    private credentialsApi: CredentialsApiService,
  ) { }

  ngOnInit() {
  
  }

  public isOwner(): boolean {
    if (this.credentialsApi.isOwner() == true) {
     return false;
    } else {
     return true;
    }
  }

}
