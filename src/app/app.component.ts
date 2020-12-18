import { Project } from './../model/Project';
import { Web3DashComponent } from './pages/dashboard/Web3Dash.compononent';
import { ProjectService } from './@core/data/project.service';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { DOCUMENT } from '@angular/platform-browser';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { WINDOW } from "./windows.service";
@Component({
  selector: 'ngx-app',
  template: `

<header>


    <mdb-navbar SideClass="top-nav-collapse navbar fixed-top navbar-expand-lg navbar-dark {{navbarbackround}} scrolling-navbar  double-nav" [containerInside]="false">
     <navlinks class="navbar-container">
        <!-- SideNav slide-out button -->
        <div class="float-left">
            <a (click)="sidenav.show()" class="button-collapse"><i class="fa fa-bars"></i></a>
        </div>
        <!--/. SideNav slide-out button -->
    </navlinks>

        <logo>
            <!-- Logo -->





        <!--/. Logo -->
        </logo>

        <links>

            <ul class="navbar-nav mr-auto">

                <li class="nav-item active waves-light" mdbRippleRadius>
                    <a class="nav-link" routerLink="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item waves-light" mdbRippleRadius>
                    <a class="nav-link" routerLink="/postProject" >PostProject</a>
                </li>

            </ul>
             <form class="form-inline  waves-light" mdbRippleRadius>
            <input class="form-control mr-sm-2" type="text" placeholder="Search" (input)="onsearch($event.target.value)">
        </form>
        </links>
    </mdb-navbar>
    <!-- Sidebar navigation -->



    <!-- Main -->
</header>


<div [@routerAnimation]="getRouteAnimation(route)">
  <router-outlet #route="outlet"></router-outlet>
</div>
<web3component></web3component>


`
  ,
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),
        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),
        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ],
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild(Web3DashComponent) private web3component: Web3DashComponent;

  navbarbackround = "";
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

  constructor(private analytics: AnalyticsService, @Inject(DOCUMENT) private document: Document,  @Inject(WINDOW) private window: Window,
     private projectservice: ProjectService
  ) {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 200) {
      console.log(">200")
     this.navbarbackround = "blue";
    } else if ( number < 10) {
      this.navbarbackround = "";
    }
  }
  signal  = false;
  onsearch(text: string){
    this.projectservice.UpdateSearchProjectText(text);
  }

  postProject(){
    console.log("In app component");
    this.web3component.postaProject(this.projectservice.getPostProject());

  }
  TransferFunds(){
    console.log("transferFunds");

    this.web3component.TransferFunds(this.projectservice.getAccountAddress(),this.projectservice.getPlegeReward() );
  }
  voteOnProject(id: number){
    console.log("voting")
   this.web3component.VoteOnproject(id);
  }

  ngOnInit(): void {
    this.projectservice.postProjectSignal.subscribe( signal => {
this.signal = signal;

this.postProject();
});
 this.projectservice.voteOnProject.subscribe( _id => {


this.voteOnProject(_id);
});
this.projectservice.TransferFundsSignal.subscribe( signal => {


this.TransferFunds();
});


  }
}
