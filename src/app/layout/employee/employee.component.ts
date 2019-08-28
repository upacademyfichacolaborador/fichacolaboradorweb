import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/core/models/employee/employee';
import { DataService } from 'src/app/core/services/data/data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { faPlus, faTrash, faUserEdit, faInfo, faRedoAlt, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeApiService } from 'src/app/core/services/employee/employee-api.service';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { ExcelService } from 'src/app/core/services/excel/excel.service';
import { Filters } from 'src/app/core/models/filters/filters';
import { Router } from '@angular/router';
import { DataCountryService } from 'src/app/core/services/dataCountry/data-country.service';
import { DataTechService } from 'src/app/core/services/dataTech/data-tech.service';
import { DataProfessionalCategoryService } from 'src/app/core/services/dataProfessionalCategory/data-professional-category.service';
import { DatadistrictService } from 'src/app/core/services/datadistrict/datadistrict.service';
import { DataclientService } from 'src/app/core/services/dataclient/dataclient.service';


@Component({
  selector: 'app-employee',

  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  public employees$: any;
  public employee$: Observable<Employee>;

  private subscriptionData: Subscription;
  private subscriptionEmployee: Subscription;
  private subscriptionFilter: Subscription;

  date;
  admissionDateMIN = null;
  admissionDateMAX = null;
  rows = [];
  temp = [];
  selected = [];
  isButtonVisible;
  isBtnVisible;
  public modalRef: BsModalRef;
  public iconNew = faPlus;
  public iconTrash = faTrash;
  public iconInfo = faInfo;
  public iconEdit = faUserEdit;
  public iconRefresh = faRedoAlt;
  public iconExcelExport = faFileExport;
  public employee: Employee;
  public filters: Filters = new Filters();

  dataC: any;
  dataT: any;
  dataP: any;
  dataD: any;
  dataCl: any;
  client: string;
  professionalCategory: string;
  district: string;
  specialTech: string;

  constructor(
    private router: Router,
    private dataService: DataService,
    private modalService: BsModalService,
    private employeeApi: EmployeeApiService,
    private excelService: ExcelService,
    private dataCountry: DataCountryService,
    private dataTech: DataTechService,
    private dataProfessionalCategory: DataProfessionalCategoryService,
    private dataDistrict: DatadistrictService,
    private dataClient: DataclientService
  ) {

    this.employees$ = this.dataService.employees$;
    this.employee$ = this.dataService.employee$;

    this.dataC = this.dataCountry.dataCountry;
    this.dataT = this.dataTech.dataTech;
    this.dataP = this.dataProfessionalCategory.dataProfessionalCategory;
    this.dataD = this.dataDistrict.dataDistrict;
    this.dataCl = this.dataClient.dataClient;

    this.subscriptionData = this.employees$.subscribe(
      (res) => {
        this.temp = res;
        console.log('ola', this.temp);
        this.rows = this.temp;
      }
    );
    this.subscriptionEmployee = this.employee$.subscribe(
      (res) => {
        this.employee = res;
        console.log('ola', this.employee);
      }
    );
    /*   this.subscriptionFilter = this.filter$.subscribe(
        (res) => {
          this.filters = res;
          this.rows = this.temp;
          console.log('ola', this.employee);
        }
      ); */

  }

  ngOnInit() {
    this.client = "";
    this.professionalCategory = "";
    this.specialTech = "";
    this.district = "";
  }

  ngOnDestroy() {
    this.subscriptionData.unsubscribe();
    this.subscriptionEmployee.unsubscribe();
  }

  filterSearch() {
    this.filters = new Filters();
    var millisecondsPerDay = 24 * 60 * 60 * 1000;

    if (this.date) {
      this.filters.admissionDateMIN = this.date[0].getTime();
      this.filters.admissionDateMAX = this.date[1].getTime();
    }
    if (this.district && this.district != "") {
      this.filters.district = this.district;
    }
    if (this.professionalCategory) {
      this.filters.professionalCategory = this.professionalCategory;
    }
    if (this.client) {
      this.filters.client = this.client;
    }


    this.employeeApi.filter(this.filters).subscribe(
      (res: any) => {
        console.log(res);
        this.employees$.next(res.object);
      },
      (error) => {
        console.log(error)
        this.employees$.next(error.object);
      })


    //() => {
    // fazer com que a data da tabela passe a ser a data que recebe do pedido
    //this.dataService.getAllEmployees();}

  }

  getAllEmployees() {
    this.dataService.getAllEmployees();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val || d.client.toLowerCase().indexOf(val) !== -1 || !val || d.email.toLowerCase().indexOf(val) !== -1 || d.professionalCategory.toLowerCase().indexOf(val) !== -1 || d.specialTech.toLowerCase().indexOf(val) !== -1;

    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;
  }

  public openInviteModal() {
    this.modalRef = this.modalService.show(EmployeeNewComponent);
    // this.modalRef.content.event;
    // this.modalRef.hide();
  }

  public openDeleteModal(id) {
    console.log(id)
    this.modalRef = this.modalService.show(EmployeeDeleteComponent, {
      initialState: {
        employeeToDelete: id
      }
    });
  }

  // public delete(id) {
  //   this.employeeApi.delete(id).subscribe(
  //     () => {
  //       this.dataService.getAllEmployees();
  //     }
  //   );
  // }

  getEmployeeById(id) {
    this.dataService.getEmployeeById(id);
  }

  editEmployeeById(id) {
    this.router.navigate(['/form', id]);
  }

  onSelect(row) {
    console.log(row.selected.length)
    this.isButtonVisible = true;
    this.isBtnVisible = true;
    if (row.selected.length === 0) {
      this.isButtonVisible = false;
      this.isBtnVisible = false;
    }
    if (row.selected.length > 1) {
      this.isBtnVisible = false;
    }


    console.log(row)
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.selected, 'Ficha Colaboradores');
  }


  public openInviteForm() {
    this.router.navigate(['/form']);
  }

}