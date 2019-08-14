import { Component, OnInit, Input } from '@angular/core';
import { UserApiService } from 'src/app/core/services/user/user-api.service';
import { BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  public userToDelete: number;
  constructor(private userApiService: UserApiService,
    private modalRef: BsModalRef) { }
   // private id = 

  ngOnInit() {
    console.log(this.userToDelete);
  }

  triggerEvent(id) {
    console.log("entrei", id);
    this.userApiService.delete(id).subscribe();
  }

}
