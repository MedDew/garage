import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  private carForm : FormGroup;
  private carFormSubmitted : boolean;

  constructor(private formBuilder : FormBuilder) {
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
  }

  public onSubmit(){
    console.log(this.carForm);
    this.carFormSubmitted = true;
    if(this.carForm.invalid){
      console.log("CAR FORM INVALID");
    }
    else{
      console.log("CREATE CAR");
    }
  }

  public isCarFormSubmitted() : boolean{
    return this.carFormSubmitted;
  }

}
