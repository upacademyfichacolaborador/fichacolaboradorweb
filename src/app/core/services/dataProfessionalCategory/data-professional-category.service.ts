import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProfessionalCategoryService {

  constructor() { }

  public dataProfessionalCategory = [
    'Arquiteto de sistemas', 
    'Designer Digital', 
    'Programador', 
  ]
}
