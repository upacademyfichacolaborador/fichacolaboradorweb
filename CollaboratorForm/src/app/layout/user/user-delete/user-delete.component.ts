import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/core/services/user/user-api.service';
import { BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  public id: any;
  constructor(private userApiService: UserApiService,
    private modalRef: BsModalRef) { }

  ngOnInit() {
  }

  triggerEvent() {
    console.log("entrei", this.id);
    this.userApiService.delete(this.id).subscribe();
  }

}
