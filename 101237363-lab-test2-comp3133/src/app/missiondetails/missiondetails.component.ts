import { Component, Input, OnInit } from '@angular/core';
import { SpacexAPIDetail } from '../models/spacex-api-detail.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() details: SpacexAPIDetail | undefined;
  constructor() {
  }

  ngOnInit(): void {
  }

}
