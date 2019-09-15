import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreateComponent } from './car-create/car-create.component';

const routes: Routes = [
  {path : "cars", component : CarListComponent },
  {path : "car", component : CarCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
