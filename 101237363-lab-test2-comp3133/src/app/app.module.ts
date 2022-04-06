import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Added here

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component'
@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
