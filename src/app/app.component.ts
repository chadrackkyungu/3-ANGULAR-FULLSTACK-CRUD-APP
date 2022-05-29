import {Component, Inject, OnInit} from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { PopUpDialogComponent } from './components/pop-up-dialog//pop-up-dialog.component';
import { DialogPopupService } from './services/dialog-popup.service';


//for the table
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// Firebase
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { FirebaseApp } from '@angular/fire/compat';
// import { TrackWebsitePerformanceWithGoogleAnalyticsService } from './services/track-website-performance-with-google-analytics.service'


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  template: '<router-outlet></router-outlet>',
})
export class AppComponent  { //added this [ implements OnInit ]

}