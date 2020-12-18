import { ProjectService } from './../../../@core/data/project.service';
import { Project } from './../../../../model/Project';

import { Reward } from './../../../../model/Reward';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Input, NgModule, ViewChild, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'pledgeAmount',
  styleUrls: ['./pledgeAmount.component.scss'],
  templateUrl: './pledgeAmount.component.html',
})

@NgModule({

    imports: [ BrowserModule, LazyLoadImageModule ],
   
})
 
export class PlegeAmountComponent{
@Input() reward: Reward;
address:string;
@ Output() TranferFundsTrigger  = new EventEmitter<boolean>();
constructor(public projectservice:ProjectService){

}

TranferFunds(){
  this.projectservice.setPlegeParameters(this.address,this.reward);
  this.TranferFundsTrigger.emit(true);
}

}
