import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UserApiService } from 'src/app/core/services/user/user-api.service';
import { CredentialsApiService } from 'src/app/core/services/credentials/credentials-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public repeatPassword = "";
  public newPassword = "";
  constructor(
    private userApiService: UserApiService,
    private modalRef: BsModalRef,
    private router: Router,
    private credentialsApiservice: CredentialsApiService) { 
    }

  ngOnInit() {
  }

   
  triggerEvent() {
    if(this.repeatPassword ==  this.newPassword){
      this.credentialsApiservice.getCurrentCredentials().password = this.newPassword;
      console.log("entrei", this.credentialsApiservice.getCurrentCredentials())
    this.userApiService.editUser(this.credentialsApiservice.getCurrentCredentials()).subscribe(
      () => {
        this.modalRef.hide();
        this.router.navigate(['/login']);
        this.credentialsApiservice.logout();
      }
    );
    } else { console.log("Passwords nao sao iguais")}
  }
  
}
