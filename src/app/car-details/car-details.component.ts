import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  private car : Car;

  constructor(private carService : CarService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.loadCarById();
  }

  private loadCarById(){
    const carId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("carId : "+carId);
    this.carService.getCar(carId).subscribe(car => { 
      console.log("CAR BY ID", car);
      this.setCar(car);
    });
  }

  private setCar(car : Car): void{
    this.car = car;
  }
  
  public getCar(): Car{
    return this.car;
  }

}
