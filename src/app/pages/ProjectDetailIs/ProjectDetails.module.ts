import { ProjectDetailsInformationComponent } from './ProjectDetails.componet';




import { NgModule , AfterViewInit } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import {  NgProgressModule} from "ngx-progressbar";


@NgModule({
  imports: [
    ThemeModule,
  
    NgProgressModule,
  
  ],
  declarations: [
      ProjectDetailsInformationComponent
  ],
   bootstrap: [ ProjectDetailsInformationComponent ]
})
export class ProjectDetailsModule{


  }
