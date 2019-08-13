import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  employeesForm: FormGroup;
  clickSubmit = false;
  constructor(private fb: FormBuilder) { 
    this.employeesForm = this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      postalCode: ['',[Validators.required,Validators.pattern('\d{8}')]],
      location: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phoneNumber:['',[Validators.required, Validators.minLength(9)]],
      academicQualifications: ['',Validators.required],
      academicInstitution: ['',Validators.required],
      course: ['',Validators.required],
      cc: ['',Validators.required],
      ccValidity: ['',Validators.required],
      nationality: ['',Validators.required],
      birthDate: ['',Validators.required],
      nif: ['',[Validators.required, Validators.minLength(9),Validators.maxLength(9)]],
      niss: ['',[Validators.required, Validators.minLength(11)]],
      maritalStatus: ['',Validators.required],
      maritalWorkStatus: new FormControl(''),
      dependents: new FormControl(''),
      dependentsAges: new FormControl(''),
      iban: ['',Validators.required],
      swift: ['',Validators.required],
      professionalCategory: ['',Validators.required],
      specialTech: ['',Validators.required],
      otherTech: new FormControl(''),
      admissionDate: ['',Validators.required],
      grossSalary: ['',Validators.required],
      contractType: ['',Validators.required],
      bonus: new FormControl(''),
      twelfths: ['',Validators.required],
      twelfths5050: new FormControl(''),
      twelfths112: new FormControl(''),
      foodAllowence: ['',Validators.required],
      workSchedule: ['',Validators.required],
      sports: new FormControl(''),
      sportsType: new FormControl(''),
      otherActivities: new FormControl(''),
      suggestedAcivities: new FormControl(''),
      hobbies: new FormControl(''),
      otherInterests: new FormControl(''),
      client: new FormControl(''),
      clientSector: new FormControl(''),
      project: new FormControl(''),
      fare: new FormControl(''),
      commentarySection: new FormControl(''),
      healthInsurance: ['',Validators.required],
      companyFinancing: new FormControl(''),
      extensible: new FormControl(''),
      companyFinancingRelative: new FormControl(''),
      insuranceRelativeName: new FormControl(''),
      insuranceRelativeBirthDate: new FormControl(''),
  
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.clickSubmit = true;
    // TODO: Use EventEmitter with form value
    console.warn(this.employeesForm.value);
  }

}

