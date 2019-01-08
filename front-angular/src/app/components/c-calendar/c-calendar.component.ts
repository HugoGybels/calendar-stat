import {Component, Input, OnInit} from '@angular/core';
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";
import {Day} from "../../model/Day";

@Component({
  selector: 'app-c-calendar',
  templateUrl: './c-calendar.component.html',
  styleUrls: ['./c-calendar.component.css']
})
export class CCalendarComponent implements OnInit {

  public days: Array<Day> = [];
  public cValues: Array<number> = [];
  public cLegends: Array<String> = [];

  //Chart :
  public lineChartData:Array<any>;
  public lineChartLabels:Array<String>;
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }}
  ;
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(231,76,60 ,0.2)',
      borderColor: 'rgba(231,76,60 ,1)',
      pointBackgroundColor: 'rgba(231,76,60 ,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private calendarStatService: CalendarStatService) {
    this.updateDayList();
  }

  ngOnInit() {
  }

  updateDayList() {
    this.calendarStatService.getAllDays().subscribe( days => {
        this.days = [];
        days.forEach( day => {
          this.days.push(new Day(day.day, +day.nb_c));
          this.cValues.push(+day.nb_c);
          this.cLegends.push(day.day);
          this.initCharVars();
        });
      }
    )
  }

  initCharVars() {
    this.lineChartData = [
      // {data: [1, 2], label: 'C'}
      {data: this.cValues, label: 'C'}
    ];
    // public lineChartLabels:Array<String> = ['01/01/2018', '01/02/2018']; //this.cLegends;
    this.lineChartLabels = this.cLegends;
  }
}
