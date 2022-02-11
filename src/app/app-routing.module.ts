import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./header/header.component";
import { BatchComponent } from "./batch/batch.component";
import { DashboardComponent } from "./batch/dashboard/dashboard.component";
import { EntryComponent } from "./batch/entry/entry.component";
import { FeedComponent } from "./batch/feed/feed.component";
import { DailyComponent } from "./batch/daily/daily.component";
import { VaccineComponent } from "./batch/vaccine/vaccine.component";
import { ShedComponent } from "./batch/shed/shed.component";

import { SalesComponent } from "./sales/sales.component";
import { EggsComponent } from "./sales/eggs/eggs.component";
import { BirdsComponent } from "./sales/birds/birds.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'batch', component: BatchComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'shed', component: ShedComponent },
      { path: 'entry', component: EntryComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'daily', component: DailyComponent },
      { path: 'vaccine', component: VaccineComponent },
    ]
  },
  {
    path: 'sales', component: SalesComponent, children: [
      { path: 'eggs', component: EggsComponent },
      { path: 'birds', component: BirdsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
