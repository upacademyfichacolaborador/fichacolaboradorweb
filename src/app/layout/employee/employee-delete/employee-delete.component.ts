import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from 'src/app/core/services/employee/employee-api.service';
import { BsModalRef } from 'ngx-bootstrap';
import { DataService } from 'src/app/core/services/data/data.service';


@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {
  
  public employeeToDelete: number;
  constructor(
    private employeeApiService: EmployeeApiService,
    private modalRef: BsModalRef,
    private dataService: DataService
    
    ) { 
    }

  ngOnInit() {
  }

  triggerEvent() {
    console.log("entrei", this.employeeToDelete);
    this.employeeApiService.delete(this.employeeToDelete).subscribe(
      (res) => {
        console.log(res)
        this.dataService.getAllEmployees();
        this.modalRef.hide(); 
      }
    );
  }

}
