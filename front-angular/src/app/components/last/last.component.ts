import { Component, OnInit } from '@angular/core';
import { CalendarStatService } from '../../services/calendar-stat/calendar-stat.service';
import { timer } from 'rxjs';
import * as moment  from 'moment/moment'

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  public last: Date;
  private seconds: number;

  constructor(private calendarStatService: CalendarStatService) { }

  ngOnInit() {
    this.calendarStatService.getLast().subscribe(last => {
      this.last = last;
      this.seconds = moment(new Date()).utc().diff(moment(new Date(this.last)).utc(), 'seconds');
      timer(0, 1000).subscribe( () => {
        this.seconds++;
      });
    });
  }

  public getLast() {
    console.log(); 
    console.log(this.seconds);
    return moment().startOf('day')
    .seconds(this.seconds)
    .format('H:mm:ss');
  }

  private format(ms) {
    const minutes = Math.floor(ms / (1000 * 60));
    const seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
    const fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 10);

    return minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.' + (fract < 10 ? '0' : '') + fract;
  } 

}
