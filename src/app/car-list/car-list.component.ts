import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private carList : Car[];

  constructor(private carService : CarService) { }

  ngOnInit() {
    this.initCarList();  
  }

  private initCarList() : void{
    this.carService.getCars().subscribe(result => {
      console.log("RESULT",result);
      this.setCarList(result);
    });
  }

  private setCarList(carList : Car[]){
    this.carList = carList;
  }
  
  public getCarList() {
    return this.carList;
  }
  
}
