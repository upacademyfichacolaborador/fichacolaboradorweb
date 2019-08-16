import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsApiService } from 'src/app/core/services/credentials/credentials-api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { UserEditComponent } from 'src/app/layout/user/user-edit/user-edit.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name: string;
  public modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private credentialsApi: CredentialsApiService
  ) {
    this.name = credentialsApi.getCurrentName();
  }

  ngOnInit() {
  }

  public logout() {
    this.credentialsApi.logout();
    this.router.navigate(['/login']);
  }

  
  public openEditPasswordModal() {
    this.modalRef = this.modalService.show(UserEditComponent);
  }
}
