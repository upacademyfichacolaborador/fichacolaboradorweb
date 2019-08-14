import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/core/models/user/user';
import { UserApiService } from 'src/app/core/services/user/user-api.service';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  username = "";
  password = "";
  public user: User = new User();
  constructor(private userApiService : UserApiService, private modalRef:BsModalRef, private dataService: DataService ) { 
    this.user.username = "";
    this.user.password = "";
    this.user.role = "admin";
  }

  ngOnInit() {
  }

  triggerEvent() {
    console.log("entrei")
    this.userApiService.createUser(this.user).subscribe(
      () => {
        this.dataService.getAllUsers();
        this.modalRef.hide(); 
      }
    );
  }

}

