import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/models/user/user';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { UserNewComponent } from './user-new/user-new.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { faPlus, faTrash, faUserEdit, faInfo, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { UserApiService } from 'src/app/core/services/user/user-api.service';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, 
OnDestroy {

public users$: Observable<User[]>;
private subscriptionData : Subscription;
rows = [];
temp = [];
selected = [];
public modalRef: BsModalRef;
public iconNew = faPlus;
public iconTrash = faTrash;
public iconInfo = faInfo;
public iconEdit = faUserEdit;
public iconRefresh = faRedoAlt;



constructor(
    private dataService: DataService,
    private modalService: BsModalService,
    private userApi: UserApiService
  ) { 
    this.users$ = this.dataService.users$;
    this.subscriptionData = this.users$.subscribe(
      (res) => {
        this.temp = res;
        this.rows = this.temp;
      }
    );   
  }

  ngOnInit() {
    
  }
  ngOnDestroy() {
    this.subscriptionData.unsubscribe();
  }
  getAllUsers() {
    this.dataService.getAllUsers();
  }

  updateFilter(event) {
    console.log(this.rows)
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

  public openDeleteModal(id) {
    console.log(id)
    this.modalRef = this.modalService.show(UserDeleteComponent, {initialState: {
      userToDelete : id
  }});
  }


  // public delete(id) {
  //   console.log(id)
  //   this.userApi.delete(id).subscribe(
      
  //     () => {
  //       this.dataService.getAllEmployees();
  //     }
  //   );
  // }

  public get(id) {
    console.log(id)
    this.userApi.get(id).subscribe(
      
      () => {
        this.dataService.getAllUsers();
      }
    );
  }

  // public edit(id) {
  //   console.log(id)
  //   this.userApi.edit(id).subscribe(
      
  //     () => {
  //       this.dataService.getAllUsers();
  //     }
  //   );
  // }

  onSelect(row){
    console.log(row)
  }
}