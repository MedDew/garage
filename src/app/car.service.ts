import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APPCONFIG } from './APPCONFIG';
import { map } from 'rxjs/operators';
import { Car } from './shared/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor( private httpClient : HttpClient, @Inject(APPCONFIG) private apiURL : String) { }

  public getCars() : Observable<Car[]>{
    console.log("API URL : "+this.apiURL);
    const url = `${this.apiURL}cars`
    console.log("CAR LIST URL : "+url);
    return this.httpClient.get<Car[]>(url).pipe(
      map(result => result)
    );
  }
}
