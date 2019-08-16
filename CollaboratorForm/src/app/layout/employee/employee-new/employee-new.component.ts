import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from 'src/app/core/services/employee/employee-api.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {
  public email: any;
  constructor(private employeeApiService: EmployeeApiService,
    private modalRef: BsModalRef
  ) {

  }

  ngOnInit() {
  }

  triggerEvent() {
    console.log("entrei", this.email);
    this.employeeApiService.sendEmail(this.email).subscribe(   () => {
      this.modalRef.hide(); 
    }
  );
  }
}