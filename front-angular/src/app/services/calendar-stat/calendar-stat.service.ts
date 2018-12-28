import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConstantesServeur} from '../../constantes/constantes-serveur';

@Injectable({
  providedIn: 'root'
})
export class CalendarStatService {

  constructor(private http: HttpClient) { }

  getAllStats(): Observable<Array<any>> {
    return this.http.get<Array<any>>(ConstantesServeur.URL + ConstantesServeur.CALENDAR_STAT);
  }

  addC(date: Date) {
    return this.http.post(ConstantesServeur.URL + ConstantesServeur.ADD_C, {params: ''} );
  }
}
