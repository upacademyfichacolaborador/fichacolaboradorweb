import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataclientService {

  constructor() { }

  
  public dataClient = [
    'EDP',
    'NATIXIS',
    'NOS',
    'TAP',
    'Santander'
  ]
}
