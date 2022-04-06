import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpacexAPIDetail } from '../models/spacex-api-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) {

  }
  getData(): Observable<SpacexAPIDetail[]> {
    let url = 'https://api.spacexdata.com/v3/launches';
    return this.http.get<SpacexAPIDetail[]>(url);
  }
}
