import { Component, OnInit } from '@angular/core';
import {Day} from "../../model/Day";
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public currentNumber: number;

  constructor(private calendarStatService: CalendarStatService,
              private router: Router) {
    this.calendarStatService.getToday().subscribe( today => {
      this.currentNumber = today.nb_c;
    });
  }

  ngOnInit() {
  }

}
