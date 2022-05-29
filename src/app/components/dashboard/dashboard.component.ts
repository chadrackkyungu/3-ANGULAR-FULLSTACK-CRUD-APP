import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopUpDialogComponent } from '../../components/pop-up-dialog//pop-up-dialog.component';
import { DialogPopupService } from '../../services/dialog-popup.service';

//for the table
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// Firebase
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { FirebaseApp } from '@angular/fire/compat';
import { AuthService } from 'src/app/services/auth.service';
import { Firestore, collection, getDocs} from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  //-----------For Table------------
  displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'action']; // for table
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //-----------end-------------------

  event_id:any
  allData:any
  constructor(
    public dialog: MatDialog,
    private API_DailogService : DialogPopupService, //this is the API
    public analytics: AngularFireAnalytics, // Firebase
    public firebaseApp: FirebaseApp,
    private authService : AuthService,
    public firestore:Firestore
  ) {
    analytics.logEvent('custom_event', {home: " home page visited "} );
  }

  ngOnInit(): void {
    this.getAllproducts(); 
  }

  //open Modal when the user click on Add btn
  openDialog() {
    this.dialog.open(PopUpDialogComponent, {
     width: '100%',
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.getAllproducts()
      }
    })
  }

  //get all product & show it inside the table
  getAllproducts(){
    const Db = collection(this.firestore,'fruits');
    getDocs(Db)
    .then((res) => {
      const DbRes = res.docs.map((item) => {
        return {...item.data(), id: item.id}
      });

      this.dataSource = new MatTableDataSource(DbRes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    })
    .catch(() => {
      console.log("Try adding data into your Database it is currently empty ");
    })
  }

  // when the user click on edit btn open the dialog & pass data [row] then edit
  editProduct(row: any){
    this.dialog.open(PopUpDialogComponent, {
      width: '100%',
      data: row //pass the data
     }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.getAllproducts() //load the data inside the table after editing
      }
    })
  }

  //Dele data when the user click on delete btn
  deleteProduct(id: string){
    this.API_DailogService.deleteProduct(id)
    this.getAllproducts()
  }

  //logout when the user click on logout
  logoutFunc(){
    this.authService.logout();
  }

  //for table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

