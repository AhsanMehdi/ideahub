
import { Router } from '@angular/router';


import { Component, OnDestroy, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Project } from "../../../../../model/Project";
import { ProjectService } from "../../../../@core/data/project.service";


@Component({
  selector: 'largeLayout-Project',
  styleUrls: ['./largeProLayout.component.scss'],
  templateUrl: './largeProLayout.component',
 
})
export class LargeLayoutProject implements OnDestroy {
heartRate = 4;
  currentTheme: string;
  themeSubscription: any;

  @Input()
   project: Project;
  @Output() 
  VoteThisProject  = new EventEmitter<number>();
   percentage:number;

  constructor(private router:Router, private projectservice:ProjectService) {
    
   
  }
  VoteProject(){
    console.log("voting")
    this.VoteThisProject.emit(1);
    
  }
  showDetials(){
    this.router.navigate(['projectDetails',1]);
    this.projectservice.setProject(this.project);
    
  }
ngOnInit(){
 this.percentage  = Math.trunc((this.project.TotalFuneded / this.project.FundingGoal)*100 );
}
  ngOnDestroy() {
 
  }

  
}
