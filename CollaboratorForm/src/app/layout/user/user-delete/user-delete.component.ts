import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/core/services/user/user-api.service';
import { BsModalRef } from 'ngx-bootstrap';
import { DataService } from 'src/app/core/services/data/data.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  public userToDelete: number;
  constructor(private userApiService: UserApiService,
    private modalRef: BsModalRef,
    private dataService: DataService) { }

  ngOnInit() {
  }

  triggerEvent() {
    console.log("entrei", this.userToDelete);
    this.userApiService.delete(this.userToDelete).subscribe(
      () => {
        this.dataService.getAllUsers();
        this.modalRef.hide(); 
      }
    );
  }

}
