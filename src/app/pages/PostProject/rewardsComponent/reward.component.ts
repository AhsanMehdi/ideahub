import { ProjectDetailTabs } from './../projectdetailtabs/projectdetailtabs.component';
import { ProjectService } from './../../../@core/data/project.service';
import { Reward } from './../../../../model/Reward';

import { BrowserModule } from '@angular/platform-browser';

import { Component, OnInit, Input, NgModule, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'RewardComponent',

  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss'],
})

export class RewardComponent  {
   

  
   
   
  @Input() modelReward: Reward = new Reward();
   constructor(public projectservice:ProjectService){
 
   }

  RemoveReward(){
    this.projectservice.deleteReward(this.modelReward.id );
  }

}
