import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConstantesServeur} from '../../constantes/constantes-serveur';
import {Day} from "../../model/Day";

@Injectable({
  providedIn: 'root'
})
export class CalendarStatService {

  constructor(private http: HttpClient) { }

  getAllDays(): Observable<Array<any>> {
    return this.http.get<Array<any>>(ConstantesServeur.URL + ConstantesServeur.GET_DAYS);
  }

  getToday(): Observable<Day> {
    return this.http.get<Day>(ConstantesServeur.URL + ConstantesServeur.GET_TODAY);
  }

  addC() {
    return this.http.post(ConstantesServeur.URL + ConstantesServeur.ADD_C, {params: ''} );
  }

  reccordLast() {
    return this.http.post(ConstantesServeur.URL +  ConstantesServeur.RECORD_LAST, {params: ''});
  } 
}
