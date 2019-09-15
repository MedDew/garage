import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { APPCONFIG } from './APPCONFIG';
import { HttpClientModule } from '@angular/common/http';
import { CarCreateComponent } from './car-create/car-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarCreateComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide : APPCONFIG , useValue : APPCONFIG.CARS_API_URL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
