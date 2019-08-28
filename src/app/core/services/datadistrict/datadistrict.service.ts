import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatadistrictService {

  constructor() { }

  public dataDistrict = [
    'Aveiro',
    'Beja',
    'Braga',
    'Bragança',
    'Castelo Branco',
    'Coimbra',
    'Évora',
    'Faro',
    'Guarda',
    'Leiria',
    'Lisboa',
    'Portalegre',
    'Porto',
    'Santarém',
    'Setúbal',
    'Viana do Castelo',
    'Vila Real',
    'Viseu',
  ]
}
