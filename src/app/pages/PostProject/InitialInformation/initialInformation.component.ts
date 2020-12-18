import { ProjectService } from './../../../@core/data/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Project } from './../../../../model/Project';
import { FormBuilder } from '@angular/forms';
import { Component, OnDestroy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {NgForm  } from "@angular/forms";

import { FormControl, Validators, FormGroup } from '@angular/forms';

@ Component({
  selector: 'initial-information',
  templateUrl: './initialInformation.html',
  styleUrls: ['./form-layouts.component.scss', './form-inputs.component.scss'],
})
export class InitialInformation{
  validatingForm: FormGroup;
  

  constructor(public cookieservie: CookieService, private router:Router, private activatedrout: ActivatedRoute, 
  private projectservice: ProjectService,  private fb: FormBuilder,
 ){

  this.cookieservie.set("IdeaTitle","");
     this.cookieservie.set("IdeaCatagory","");
   this.cookieservie.set("IdeaLoucation","");

    this.cookieservie.set("IdeaImageUrl","");
    this.cookieservie.set("IdeaShortBlurb","");
   this.cookieservie.set("IdeaFundingDuration","");
   this.cookieservie.set("IdeaFundingGoal","");

     this.cookieservie.set("IdeaVedioUrl","");
     this.cookieservie.set("IdeaStoryDescr","");
     this.cookieservie.set("IdeaStoryRisk","");
      this.validatingForm = fb.group({
            'title': new FormControl( null, [
              Validators.required,
              Validators.minLength(4),
            ]),
            'loucation': new FormControl( null, [
              Validators.required,

            ])
         
        });

      


  }
  Catagory =  ""
  Title =""
  Loucation = ""
   _project: Project = new Project(); 

  Cheackformvalid(): boolean
  {
    console.log(this.validatingForm.get('title').valid)
     return (this.validatingForm.get('title').valid && this.validatingForm.get('loucation').valid );
  }

  onSubmit(form: NgForm){
    
    if (this.Cheackformvalid() )
    {
      this.projectservice.setProject( this._project);
      this.router.navigate(['postprojectDetails']);
    }
    

     
 }
 
 


}
