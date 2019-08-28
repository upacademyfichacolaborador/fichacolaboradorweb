import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
     'insuranceRelativeName': String;
     'insuranceRelativeBirthDate': Date;
  
    constructor(data?: any) {
      Object.assign(this, data);
  }
  
}
