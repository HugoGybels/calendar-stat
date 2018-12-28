import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarStatService {

  constructor(private http: HttpClient) { }

  getAllStats(): Observable<Array<any>> {
    const headerDict = {
      };

      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };

      return this.http.get<Array<any>>('http://gybels.fr/calendar-stat.php');
  }
}
