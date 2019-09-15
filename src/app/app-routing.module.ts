import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path : "cars", component : CarListComponent },
  {path : "car", component : CarCreateComponent },
  {path : "car/:id", component : CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
