import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';     // Add your component here
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';  // Add your component here

//This is my case 
const routes: Routes = [
    {
        path: 'missionlist',
        component: MissionlistComponent
    },
    {
        path: '/about',
        component: MissiondetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }