import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APPCONFIG } from './APPCONFIG';
import { map } from 'rxjs/operators';
import { Car } from './shared/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private headers : Object;

  constructor( private httpClient : HttpClient, @Inject(APPCONFIG) private apiURL : String) {
    this.headers =  {headers : new HttpHeaders({"Content-Type" : "application/json", "Accept" : "application/json"}) };
  }

  public getCars() : Observable<Car[]>{
    console.log("API URL : "+this.apiURL);
    const url = `${this.apiURL}cars`
    console.log("CAR LIST URL : "+url);
    return this.httpClient.get<Car[]>(url).pipe(
      map(result => result)
    ); 
  }
  
  public postCar(postedCar : Car) : Observable<Car>{
    console.log("API URL : "+this.apiURL);
    const url = `${this.apiURL}car`
    console.log("CAR POST URL : "+url);
    console.log("POSTED CAR : ", postedCar);
    return this.httpClient.post<Car>(url, JSON.stringify(postedCar), this.headers).pipe(
      map(result => result)
    );
  }
}
