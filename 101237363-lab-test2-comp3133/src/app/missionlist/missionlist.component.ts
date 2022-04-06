import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Router } from '@angular/router';
import { SpacexAPIDetail } from '../models/spacex-api-detail.model';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  spacexApiResponseArray: SpacexAPIDetail[] | undefined;
  currentSelectedObject: SpacexAPIDetail | undefined;
  showMissionDetailScreen = false;
  constructor(private spaceService: SpacexapiService) {
    this.spaceService.getData().subscribe(data => {
      this.spacexApiResponseArray = data;
    });
  }

  ngOnInit(): void {
  }

  missionDetail(item: SpacexAPIDetail): void {
    this.currentSelectedObject = item;
    this.showMissionDetailScreen = true;
  }
}
