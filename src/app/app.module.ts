import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ReactiveFormsModule } from '@angular/forms';
import { Web3DashComponent } from './pages/dashboard/Web3Dash.compononent';



import { PostPRojectModule } from './pages/PostProject/postproject.module';
import { ProjectDetailsModule } from './pages/ProjectDetailIs/ProjectDetails.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import {CoreModule} from './@core/core.module';


import { RewardComponent } from './pages/PostProject/rewardsComponent/reward.component';
import { FormsModule } from './pages/forms/forms.module';
import { CookieService } from 'ngx-cookie-service';

import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WINDOW_PROVIDERS } from "./windows.service";


import { MDBBootstrapModules, MDBSpinningPreloader } from "ng-mdb-pro";
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [AppComponent, Web3DashComponent, DatePickerComponent],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModules.forRoot(),
    DashboardModule,
  CommonModule,
PostPRojectModule,
NgbModule.forRoot(),

    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    CookieService,
    MDBSpinningPreloader,
    WINDOW_PROVIDERS
  ],
})
export class AppModule {
}
