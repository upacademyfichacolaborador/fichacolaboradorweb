import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from 'src/app/core/services/employee/employee-api.service';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  title = 'ngchart';
  chart="bar";

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getStatisticSpecialTech();
    this.getStatisticProfessionalCategory();
  }

  getStatisticSpecialTech(){
    this.dataService.getStatisticProfessionalCategory();
  }

  getStatisticProfessionalCategory(){
    this.dataService.getStatisticSpecialTech();
  }

}
