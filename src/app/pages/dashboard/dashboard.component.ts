




import { NbSidebarService } from '@nebular/theme';
import { Reward } from './../../../model/Reward';
import { Subscription } from 'rxjs/Subscription';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { WebAppComponent } from './../PostProject/web3.component';
import { Project } from './../../../model/Project';
import { Component, OnInit, ViewChild, AfterViewInit, NgZone,trigger,
         state,
         style,
         transition,
         animate,
         keyframes, Input, ElementRef
} from '@angular/core';
import {ProjectService  } from "../../@core/data/project.service";

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  animations:[
trigger('flip', [
      transition('* => *', [
        animate(200, style({transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0})),
        animate(200, style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4})),
        animate(200, style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5})),
        animate(200, style({transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8})),
        animate(200, style({transform: 'perspective(400px)', offset: 1}))
      ])
    ])

  ]
  
})
export class DashboardComponent implements AfterViewInit {
 
    ticks: number;
   postProjectSingal  = false;
  showdetailproject = false;
  DetailprojectInstance:  Project;
  serarchProjectText :string = "";


imageurl  = "";

@ViewChild('demoBasic') demobasic: ElementRef;

    showDatePicker(){
      console.log("eer");
       this.demobasic;
    }
  
  showdetailProjectActivator(_project: Project){
    this.DetailprojectInstance = _project;
    console.log(this.DetailprojectInstance)
    let projectid = 1;
    this.router.navigate(['projectDetails']);
    
  }

 constructor(public _projectservice: ProjectService, private cookieService: CookieService, private router:Router
 ){



 }
   ngAfterViewInit(){
  
     

   }
  projectslist: Project[];
  name: String = "dfsdf";
  ngOnInit(){
   this._projectservice .getAllProjects().subscribe( (projects:any) => this.projectslist = projects);
   this._projectservice.searchProject(" ");
this._projectservice.postProjectSignal.subscribe( signal => {
this.postProjectSingal = signal;
});
this._projectservice.searchProjectText.subscribe( text => {
this.serarchProjectText = text;
});
   console.log(this.projectslist)
   this.startTimer();
  

  }
cookieValue = 'UNKNOWN';
   reload(){

this._projectservice.ActivatePostProjectSignal();
     
  }




   tickstimmer = 0;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

sub: Subscription;
private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.tickstimmer = t;

                this.secondsDisplay = this.getSeconds(this.tickstimmer) ;
                this.minutesDisplay = this.getMinutes(this.tickstimmer);
                this.hoursDisplay = this.getHours(this.tickstimmer);

                 if (! (this.secondsDisplay % 5) ){


              
                 }
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

    private TranferFunds(result:boolean){
      var account:any;
      var plegeReward:Reward;
      account = this._projectservice.getAccountAddress();
      plegeReward=  this._projectservice.getPlegeReward();

      console.log(account);
      
    }

    VoteProject(id:number){
       console.log("sending to blockchian")
    
    }

  
}
