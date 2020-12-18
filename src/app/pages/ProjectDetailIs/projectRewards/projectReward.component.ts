import { Reward } from './../../../../model/Reward';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Input, NgModule } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ProjectService } from "../../../@core/data/project.service";
@Component({
  selector: 'ProjectReward',
  styleUrls: ['./projectReward.component.scss'],
  templateUrl: './projectReward.component.html',
})

@NgModule({

    imports: [ BrowserModule, LazyLoadImageModule ],
   
})
export class ProjectRewardComponent{
@Input() reward: Reward;

constructor(public _projectservice: ProjectService){

 }
 TransferFunds(){
 this._projectservice.setPlegeParameters("0x000",this.reward);
   this._projectservice.ActivateTransferFundsSignal();
 }

}
