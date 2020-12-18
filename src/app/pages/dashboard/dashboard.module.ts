


import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MDBSpinningPreloader, MDBBootstrapModules } from 'ng-mdb-pro';
import { PlegeAmountComponent } from './../ProjectDetailIs/pledgeAmount/pledgeAmount.component';


import { ProjectRewardComponent } from './../ProjectDetailIs/projectRewards/projectReward.component';

import { CookieService } from 'ngx-cookie-service';

import { ProjectDetailsInformationComponent } from './../ProjectDetailIs/ProjectDetails.componet';
import { ProjectDetailsModule } from './../ProjectDetailIs/ProjectDetails.module';
import { NgModule, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';



import {  SingleProject} from "./Project/singleProject";
import { NgProgressModule } from "ngx-progressbar";
import { SearchFilterPipe } from "./fprojectFilter.service";
import { CommunityRemarksComponent } from './community-remarks/community-remarks.component';


@NgModule({
  imports: [
  CommonModule,
 MDBBootstrapModules.forRoot(),
    NgProgressModule,
RouterModule


  ],
  declarations: [
    DashboardComponent,
    SingleProject,
    ProjectDetailsInformationComponent,
    ProjectRewardComponent,
    PlegeAmountComponent,
     SearchFilterPipe,
     CommunityRemarksComponent


  ],
  providers: [ CookieService, MDBSpinningPreloader ],
  exports:[DashboardComponent],
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule{


  }
