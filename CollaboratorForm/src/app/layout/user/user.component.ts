import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from 'src/app/core/models/user/user';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { UserNewComponent } from './user-new/user-new.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

public users$: Observable<User[]>;
private subcriptionData : Subscription;
rows = [];
temp = [];
columns = [{ prop: 'username' }, { name: 'role' }];
public modalRef: BsModalRef;
public iconNew = faPlus;



constructor(
    private dataService: DataService,
    private modalService: BsModalService
  ) { 
    this.users$ = this.dataService.users$;
    this.subcriptionData = this.users$.subscribe(
      (res) => {
        this.temp = res;
        this.rows = this.temp;
      }
    );   
  }

  ngOnInit() {
    
  }

  getAllUsers() {
    this.dataService.getAllUsers();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
   
  }
  public openCreateModal(template:TemplateRef<any>) {
    this.modalRef = this.modalService.show(UserNewComponent);
  }
}