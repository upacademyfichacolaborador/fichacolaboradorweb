import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public statisticSpecialTech: any;

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  constructor(
    private dataService : DataService,
  ) { 
    this.statisticSpecialTech = this.dataService.statisticSpecialTech;
  }

  ngOnInit() {
    this.statisticSpecialTech.forEach(element => {
    this.pieChartData.push( element[0]);
    this.pieChartLabels.push(element[1]);
    });

  }

}
