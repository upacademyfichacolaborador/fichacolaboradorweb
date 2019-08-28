import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  public statisticProfessionalCategory: any;

  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  constructor(
    private dataService : DataService,
  ) { 
    this.statisticProfessionalCategory = this.dataService.statisticProfessionalCategory;
  }

  ngOnInit() {
    this.statisticProfessionalCategory.forEach(element => {
      this.doughnutChartData.push( element[0]);
      this.doughnutChartLabels.push(element[1]);
  });
}

}
