import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private carService : CarService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
  }

  private getCarById(){
    const carId = this.activatedRoute.snapshot.paramMap.get("carId");
    
  }
}
