import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  private carForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.carForm = formBuilder.group({
      brand : ["", [Validators.required]],
      model : ["", [Validators.required]],
      color : ["", [Validators.required]],
      horsePower : ["", [Validators.required]],
    });
  }

  ngOnInit() {
  }

}
