import {ActivatedRoute, ParamMap,  Router} from '@angular/router';
import { Reward } from './../../../model/Reward';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BrowserModule } from '@angular/platform-browser';
import { Project } from './../../../model/Project';
import { ProjectService } from './../../@core/data/project.service';
import { Component, OnInit, Input, NgModule, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'ProjectDetailsInformationComponent',
  styleUrls: ['./ProjectDetails.component.scss'],
  templateUrl: './ProjectDetails.component.html',
})

@ NgModule({

    imports: [ BrowserModule, LazyLoadImageModule ],

})
export class ProjectDetailsInformationComponent implements OnInit{
@ Input() project: Project;

 constructor(public _projectservice: ProjectService, private router: Router ,private route: ActivatedRoute){

 }
  projectslist: any;
  Projectname: String = "The Sound Rective LED Mask";
  showplegeAmount= false;
  plegeReward: Reward;
  @ Output() TranferFundsTrigger  = new EventEmitter< boolean>();
  ngOnInit(){
   this ._projectservice .getProject().subscribe( (_project:Project) => this. project = _project );



  }

  voteOnProject(){
    this._projectservice.VoteOnPorject(0);
  }

 
  SelectReward(_reward:Reward){
      this .plegeReward = _reward;
      this .showplegeAmount = true;
  }

  TranferFunds(result:boolean){
 console.log("in detail")
   this .TranferFundsTrigger.emit(true);

  }
}
