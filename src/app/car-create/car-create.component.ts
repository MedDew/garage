import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { CarService } from '../car.service';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  private carForm : FormGroup;
  private carFormSubmitted : boolean;
  private carCreated : Car;
  private isCarSaved : boolean;

  constructor(private formBuilder : FormBuilder, private carService : CarService) {
    this.carForm = this.formBuilder.group({
      brand : ["", [Validators.required]],
      model : ["", [Validators.required]],
      color : ["", [Validators.required]],
      horsePower : ["", [Validators.required]],
    });
    console.log("CONSTRUCTOR",this.carForm);
  }

  ngOnInit() {
    this.carFormSubmitted = false;
    this.isCarSaved = false;
  }

  public onSubmit(){
    console.log(this.carForm);
    this.carFormSubmitted = true;
    if(this.carForm.invalid){
      console.log("CAR FORM INVALID");
    }
    else{
      console.log("CREATE CAR");
      console.log("CAR FORM SUBMITTED",this.carForm);
      const carCreated = <Car> this.carForm.value;
      //this.createCar(carCreated);
      this.isCarSaved = true;
    }
  }

  public isCarFormSubmitted() : boolean{
    return this.carFormSubmitted;
  }
  
  public isCarCreated() : boolean{
    return this.isCarSaved;
  }

  private createCar( postedCar : Car){
    this.carService.postCar(postedCar).subscribe(car =>{ 
      console.log("CREATED CAR : ", car);
      this.setCarCreated(car)
    });
  }

  private setCarCreated(carCreated : Car) :void {
    this.carCreated = carCreated;
  }
 
  public getCarCreated() : Car {
    return this.carCreated;
  }

  public backToCarForm(){
    console.log("GO BACK TO CAR FORM");
    this.isCarSaved = false;
    this.carForm.reset();
  }
}
