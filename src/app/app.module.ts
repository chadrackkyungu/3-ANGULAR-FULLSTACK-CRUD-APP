import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpDialogComponent } from './components/pop-up-dialog/pop-up-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core'; 
import {MatRadioModule} from '@angular/material/radio'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

// Firebase
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/compat/analytics';
import { AngularFirePerformanceModule, PerformanceMonitoringService, INSTRUMENTATION_ENABLED, DATA_COLLECTION_ENABLED } from '@angular/fire/compat/performance';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProductsComponent } from './components/products/products.component';
import { VisitorNavbarComponent } from './components/visitor-navbar/visitor-navbar.component';
import { BannerSlideComponent } from './components/banner-slide/banner-slide.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    PopUpDialogComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ProductsComponent,
    VisitorNavbarComponent,
    BannerSlideComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    // NbToastrModule.forRoot(),

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),

    AngularFireAnalyticsModule,
    AngularFirePerformanceModule //performance
  ],
  providers: [
    //firebase analytics
    ScreenTrackingService,
    AuthGuard, //! for authentication
    //Tracking performance
    { provide: DATA_COLLECTION_ENABLED, useValue: true }, // Responsible for enabling Firebase Performane Monitoring.
    { provide: INSTRUMENTATION_ENABLED, useValue: true }, // Responsible for enabling Firebase Performane Monitoring.
    PerformanceMonitoringService,
  ],
  bootstrap: [AppComponent],
  // providers: [AngularFirestore],
})
export class AppModule { }
