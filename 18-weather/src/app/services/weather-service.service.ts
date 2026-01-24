import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private url='https://api.openweathermap.org/data/2.5/';
  private httpCkient=inject(HttpClient);

  getWeatherByCity(city:string):Observable<any>{
    return this.httpCkient.get(`${this.url}weather?q=${city}&appid=895284fb2d2c50a520ea537456963d9c&units=metric`);
  }
}
