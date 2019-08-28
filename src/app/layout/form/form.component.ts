import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/core/models/employee/employee';
import { EmployeeApiService } from 'src/app/core/services/employee/employee-api.service';
import { DataCountryService } from 'src/app/core/services/dataCountry/data-country.service';
import { DataTechService } from 'src/app/core/services/dataTech/data-tech.service';
import { DataProfessionalCategoryService } from 'src/app/core/services/dataProfessionalCategory/data-professional-category.service';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data/data.service';
import * as moment from 'moment';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DatadistrictService } from 'src/app/core/services/datadistrict/datadistrict.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public iconArrowRight = faArrowRight;
  public iconArrowLeft = faArrowLeft;
  employeesForm: FormGroup;
  public employee: any;
  public employee$: any;
  private subscriptionEmployee: Subscription;
  clickSubmit = false;
  extensibleN = 0;
  clickNumber = false;
  msg: string = '';
  state = "init";
  dataC: any;
  dataT: any;
  dataP: any;
  dataD: any;
  employeebirthDate;
  employeeccValidity;
  employeeAdmissionDate;
  selectedOtherTechs = [];
  selectedBonus = [];
  isVisibleSubmit = true;
  isVisibleEdit = false;

  dataTOptions: Array<IOption> = [
    { label: 'Java', value: 'Java' },
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'Python', value: 'Python' },
    { label: 'C#', value: 'C#' },
    { label: 'PHP', value: 'PHP' },
    { label: 'C++', value: 'C++' },
    { label: 'C', value: 'C' },
    { label: 'TypeScript', value: 'TypeScript' },
    { label: 'Ruby', value: 'Ruby' },
    { label: 'Swift', value: 'Swift' },
    { label: 'VisualBasic', value: 'VisualBasic' },
    { label: 'Perl', value: 'Perl' },
  ];

  dataROptions: Array<IOption> = [
    { label: 'Vales Educaçāo', value: 'Vales Educaçāo' },
    { label: 'Reembolso de Despesas', value: 'Reembolso de Despesas' },
    { label: 'Bónus', value: 'Bónus' },
    { label: 'Subsidio Alimentaçāo (Cartāo Alacard)', value: 'Subsidio Alimentaçāo (Cartāo Alacard)' }
  ];

  /* public otherTech = ['Java', 'JavaScript', 'Python', 'C#', 'PHP',
   'C++', 'C', 'TypeScript', 'Ruby', 'Swift', 'VisualBasic', 'Perl'];
 */
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private employeeApiService: EmployeeApiService,
    private dataCountry: DataCountryService,
    private dataTech: DataTechService,
    private dataProfessionalCategory: DataProfessionalCategoryService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private dataDistrict: DatadistrictService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.dataD = this.dataDistrict.dataDistrict;
    this.dataC = this.dataCountry.dataCountry;
    this.dataT = this.dataTech.dataTech;
    this.dataP = this.dataProfessionalCategory.dataProfessionalCategory;
    this.initializeForms();

    this.employee$ = this.dataService.employee$;
    this.subscriptionEmployee = this.employee$.subscribe(
      (res) => {
        this.employee = res;
        console.log('ola', this.employee);
      }
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const empId = +params.get('id');
        if (empId) {
          this.getEmployee(empId);
        } 
      }
    )
  }


  initializeForms() {
    this.employeesForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      location: ['', Validators.required],
      district: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      academicQualifications: ['', Validators.required],
      academicInstitution: ['', Validators.required],
      course: ['', Validators.required],
      cc: ['', [Validators.required, Validators.maxLength(22)]],
      ccValidity: ['', Validators.required],
      nationality: ['', Validators.required],
      birthDate: ['', Validators.required],
      nif: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      niss: ['', [Validators.required, Validators.minLength(11)]],
      maritalStatus: ['', Validators.required],
      maritalWorkStatus: new FormControl(''),
      dependents: ['', Validators.required],
      dependentsNumber: new FormControl(''),
      dependentsAges: new FormArray([]),
      iban: ['', Validators.required],
      swift: ['', Validators.required],
      professionalCategory: ['', Validators.required],
      specialTech: ['', Validators.required],
      otherTech: new FormArray([]),
      admissionDate: ['', Validators.required],
      grossSalary: ['', Validators.required],
      contractType: ['', Validators.required],
      bonus: new FormArray([]),
      twelfths: ['', Validators.required],
      twelfthsType: new FormControl(''),
      workSchedule: ['', Validators.required],
      sports: new FormControl(''),
      sportsType: new FormControl(''),
      otherActivities: new FormControl(''),
      suggestedActivities: new FormControl(''),
      hobbies: new FormControl(''),
      otherInterests: new FormControl(''),
      client: new FormControl(''),
      clientSector: new FormControl(''),
      project: new FormControl(''),
      fare: new FormControl(''),
      commentarySection: new FormControl(''),
      companyFinancingRelative: new FormControl(''),
      healthInsurance: ['', Validators.required],
      companyFinancing: new FormControl(''),
      extensible: new FormControl(''),
      insuranceDetails: new FormArray([])

    });
  }

  public getEmployee(id) {
    this.dataService.getEmployeeByIdEdit(id).subscribe(
      (employee: Employee) => {
        console.log(employee);
        this.editEmployee(employee);
        this.employee$.next(employee);
      }
    )
  }

  /* public fixDates(){
    this.employeebirthDate = this.employeesForm.value.employeebirthDate;
    this.employeeccValidity = this.employeesForm.value.employeeccValidity;
    this.employeeAdmissionDate = this.employeesForm.value.employeeAdmissionDate;
  } */



  public editEmployee(employee) {
    this.isVisibleSubmit = false;
    this.isVisibleEdit = true;
    this.initializeForms();
    this.otherTechAfterEdit(employee);
    this.bonusAfterEdit(employee);
    this.extensibleN = employee.companyFinancingRelative;
    this.employeesForm.patchValue(employee);
    var date = new Date(employee.birthDate + 3600000);
    var date1 = new Date(employee.ccValidity + 3600000);
    var date2 = new Date(employee.admissionDate + 3600000);
    console.log(date)
    this.employeebirthDate = date.toISOString().substring(0, date.toISOString().indexOf("T"));
    console.log(this.employeebirthDate);

    this.employeeccValidity = date1.toISOString().substring(0, date1.toISOString().indexOf("T"));
    this.employeeAdmissionDate = date2.toISOString().substring(0, date2.toISOString().indexOf("T"));

    for (let i = 0; i < employee.dependentsAges.length; i++) {
      this.t.push(this.fb.control(employee.dependentsAges[i]));
    }
    for (let i = 0; i < employee.insuranceDetails.length; i++) {
      var date3 = new Date(employee.insuranceDetails[i].insuranceRelativeBirthDate + 3600000);
      employee.insuranceDetails[i].insuranceRelativeBirthDate = date3.toISOString().substring(0, date3.toISOString().indexOf("T"));
      const insuranceRelative = this.fb.group({
        insuranceRelativeName: new FormControl(''),
        insuranceRelativeBirthDate: new FormControl('')
      });

      insuranceRelative.controls['insuranceRelativeName'].setValue(employee.insuranceDetails[i].insuranceRelativeName);
      insuranceRelative.controls['insuranceRelativeBirthDate'].setValue(employee.insuranceDetails[i].insuranceRelativeBirthDate);
      this.z.push(insuranceRelative);
    }
    console.log(this.z);
    this.changeDetectorRef.detectChanges();
  }

  get f() { return this.employeesForm.controls }
  get t() { return this.f.dependentsAges as FormArray }
  get x() { return this.f.extensibleNumbers as FormArray }
  get z() { return this.f.insuranceDetails as FormArray }


  fixbirthdate(event) {
    this.employeebirthDate = event.target.value;
    this.changeDetectorRef.detectChanges();
  }
  fixccValiditydate(event) {
    this.employeeccValidity = event.target.value;
    this.changeDetectorRef.detectChanges();
  }
  fixAdmissionDatedate(event) {
    this.employeeAdmissionDate = event.target.value;
    this.changeDetectorRef.detectChanges();
  }

  haveDependents(event) {
    if (event.target.value !== 'true') {
      console.log(this.employeesForm.value.dependents)
      this.employeesForm.value.dependents = false;
      this.changeDetectorRef.detectChanges();
      console.log(this.employeesForm.value);
    }
  }
  dependentsEvent(event) {
    console.log(event);
    this.employeesForm.controls.dependentsAges = new FormArray([]);
    this.employeesForm.value.dependentsNumber = event.target.value;
    if (this.t.length < this.employeesForm.value.dependentsNumber) {
      for (let i = this.t.length; i < this.employeesForm.value.dependentsNumber; i++) {
        this.t.push(this.fb.control(''));
      }
    }
    this.changeDetectorRef.detectChanges();
  }
  extensibleNumber(event) {
    console.log(event);
    this.employeesForm.controls.insuranceDetails = new FormArray([]);
    this.extensibleN = event.target.value;
    console.log(this.extensibleN);
    if (this.z.length < this.extensibleN) {
      for (let i = this.z.length; i < this.extensibleN; i++) {
        const insuranceRelative = this.fb.group({
          insuranceRelativeName: new FormControl(''),
          insuranceRelativeBirthDate: new FormControl('')
        });
        this.z.push(insuranceRelative);
      }
    }
    this.changeDetectorRef.detectChanges();
    console.log(this.extensibleN);
  }

  changeMaritalStatus(event) {
    if (event.target.value !== 'married') {
      console.log(this.employeesForm.value.maritalWorkStatus)
      this.employeesForm.value.maritalWorkStatus = false;
      this.changeDetectorRef.detectChanges();
      console.log(this.employeesForm.value);
    }
  }

  twelfths(event) {
    console.log(event);
    if (event.target.value !== 'true') {
      this.employeesForm.value.twelfthsType = "";
      this.changeDetectorRef.detectChanges();
    }
  }
  sports(event) {
    if (event.target.value !== 'true') {
      this.employeesForm.value.sportsType = "";
      this.changeDetectorRef.detectChanges();
    }
  }


  healthInsurance(event) {
    if (event.target.value !== 'true') {
      this.employeesForm.value.healthInsurance = false;
      this.employeesForm.value.companyFinancing = false;
      this.employeesForm.value.extensible = false;
      this.changeDetectorRef.detectChanges();
    }
  }

  companyFinancing(event) {
    if (event.target.value !== 'true') {
      this.employeesForm.value.companyFinancing = false;
      this.employeesForm.value.extensible = false;
      this.changeDetectorRef.detectChanges();
    }
  }
  extensible(event) {
    if (event.target.value !== 'true') {
      this.employeesForm.value.extensible = false;
      this.changeDetectorRef.detectChanges();
    }
  }

  public triggerEvent() {
    console.log(this.employeesForm.value.companyFinancingRelative);
    this.clickSubmit = true;
    if (this.employeesForm.invalid) {
     return
   } 
    console.log(this.employeesForm.value.companyFinancingRelative);
    console.log(this.employeesForm.value);
    this.employee = new Employee(this.employeesForm.value);
    console.log(this.employee);
    this.dateFormat();
    console.log(this.employee);
    this.otherTechForm();
    this.bonusForm()
    this.employee.companyFinancingRelative = this.extensibleN;
    console.log(this.employee.companyFinancingRelative);
    this.employeeApiService.add(this.employee).subscribe(
      (res) => {
        console.log(res);
      }
    )
    this.router.navigate(['/colaboradores']);
  }
  public editEvent() {
    
    this.clickSubmit = true;
    console.log(this.employee);
    /* if (this.employeesForm.invalid) {
      return
    } */
    Object.assign(this.employee, this.employeesForm.value);
    this.dateFormat();
    this.otherTechForm();
    this.bonusForm();
    this.employee.companyFinancingRelative = this.extensibleN;
    this.employeeApiService.edit(this.employee).subscribe(
      (res) => {
        console.log(res)
      }
    )
    this.router.navigate(['/colaboradores']);
  }

  onSelectedOtherTech(event) {
    console.log(event.value);
    this.selectedOtherTechs.push(event.value);
  }

  onDeselectedOtherTech(event) {
    console.log(event.value)
    const index = this.selectedOtherTechs.indexOf(event.value);
    if (index > -1) {
      this.selectedOtherTechs.splice(index, 1);
    }
  }

  onSelectedBonus(event) {
    console.log(event.value);
    this.selectedBonus.push(event.value);
  }

  onDeselectedBonus(event) {
    const index = this.selectedBonus.indexOf(event.value);
    if (index > -1) {
      this.selectedBonus.splice(index, 1);
    }
  }

  dateFormat() {
    this.employee.birthDate = moment(this.employeesForm.controls.birthDate.value).valueOf();
    console.log(this.employee.birthDate)
    this.employee.admissionDate = moment(this.employeesForm.controls.admissionDate.value).valueOf();
    console.log(moment(this.employee.admissionDate))
    this.employee.ccValidity = moment(this.employeesForm.controls.ccValidity.value).valueOf();
    console.log(this.employee.ccValidity)
    this.employee.ccValidity = moment(this.employeesForm.controls.ccValidity.value).valueOf();
    console.log(this.employee.ccValidity)
    for (let i = 0; i < this.employee.insuranceDetails.length; i++) {
      this.employee.insuranceDetails[i].insuranceRelativeBirthDate = moment(this.employee.insuranceDetails[i].insuranceRelativeBirthDate).valueOf();
    }
    console.log(this.employee.insuranceDetails)
  }

  otherTechForm() {
    if (this.selectedOtherTechs.length > -1) {
      for (let i = 0; i < this.selectedOtherTechs.length; i++) {
        this.employee.otherTech.push(this.selectedOtherTechs[i])
      }
      this.selectedOtherTechs = [];
    }
  }
  otherTechAfterEdit(employee) {
    if (employee.otherTech.length > -1) {
      for (let i = 0; i < employee.otherTech.length; i++) {
        this.selectedOtherTechs.push(employee.otherTech[i])
      }
    }
  }
  bonusForm() {
    if (this.selectedBonus.length > -1) {
      for (let i = 0; i < this.selectedBonus.length; i++) {
        this.employee.bonus.push(this.selectedBonus[i])
      }
      this.selectedBonus = [];
    }
  }
  bonusAfterEdit(employee) {
    if (employee.bonus.length > -1) {
      for (let i = 0; i < employee.bonus.length; i++) {
        this.selectedBonus.push(employee.bonus[i])
      }
    }
  }

}

