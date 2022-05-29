import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';


@Injectable({
  providedIn: 'root'
})
export class TrackWebsitePerformanceWithGoogleAnalyticsService {

  constructor(private firebaseApp: FirebaseApp) {}

  enablePerformance(value: boolean): void {
    console.log("log out performance for me");
    
    this.firebaseApp.performance().instrumentationEnabled = value;
    this.firebaseApp.performance().dataCollectionEnabled = value;
  }
}
