import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BatchComponent } from './batch/batch.component';
import { EntryComponent } from './batch/entry/entry.component';
import { DashboardComponent } from './batch/dashboard/dashboard.component';
import { FeedComponent } from './batch/feed/feed.component';
import { DailyComponent } from './batch/daily/daily.component';
import { VaccineComponent } from './batch/vaccine/vaccine.component';
import { SalesComponent } from './sales/sales.component';
import { EggsComponent } from './sales/eggs/eggs.component';
import { BirdsComponent } from './sales/birds/birds.component';
import { ShedComponent } from './batch/shed/shed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    BatchComponent,
    EntryComponent,
    DashboardComponent,
    FeedComponent,
    DailyComponent,
    VaccineComponent,
    SalesComponent,
    EggsComponent,
    BirdsComponent,
    ShedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp({
    //   apiKey: environment.firebase.apiKey,
    //   authDomain: environment.firebase.authDomain,
    //   projectId: environment.firebase.projectId,
    //   storageBucket: environment.firebase.storageBucket,
    //   messagingSenderId: environment.firebase.measurementId,
    //   appId: environment.firebase.appId,
    //   measurementId: environment.firebase.measurementId,
    // })),
    // provideFirestore(() => getFirestore()),
    // provideAnalytics(() => getAnalytics()),
    // provideAuth(() => getAuth())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
