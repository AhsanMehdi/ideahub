import { CookieService } from 'ngx-cookie-service';
import { ProjectService } from './../../../@core/data/project.service';
import { Story } from './../../../../model/Story';
import {
  FileHolder
} from 'angular2-image-upload';

import {
  Reward
} from './../../../../model/Reward';
import {
  Project
} from './../../../../model/Project';
import {MDBDatePickerComponent} from '../../../../../node_modules/ng-mdb-pro/pro/date-picker/datepicker.component';
import { IMyOptions } from '../../../../../node_modules/ng-mdb-pro/pro/date-picker/index';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import "./ckeditor.loader";
import 'ckeditor';
import {
  HostListener,
  NgZone
} from '@angular/core';
import {
  FileUploader
} from 'ng2-file-upload';
import {
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl
} from '@angular/forms';
import {
  Http,
  Response
} from '@angular/http';
import {Router} from '@angular/router';
import { TabsetComponent } from 'ng-mdb-pro/pro/tabs-pills/tabset.component';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const URL = 'http://localhost:3000';

const now = new Date(); /** * * * @ export * @ class ProjectDetailTabs */
@ Component({
  selector: 'project-detail-tabs',
  templateUrl: './projectdetailtabs.component.html',
  styleUrls: ['./tabs.component.scss'],
}) export class ProjectDetailTabs implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  publishproject: false;
checkvalid(val: boolean):boolean{
console.log(val)
  return val;
}
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

 public myDatePickerOptions: IMyOptions = {
         dayLabels: {su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat'},
    }
  @ViewChild('myvedioplayer') vedioplayer;
 
    element: any;
   @Input() InitialInformationProject:Project;

  ShowTab1 = true;
  ShowTab2 =  false;
  ShowTab3 = false;
  Tab1state : string = "completed"
  Tab2state :string = "";
  Tab3state : string = "";
  ShowDatePicker = false;
  ShowNumberOfdays = true;
  modelproject: Project = new Project(); /** * * * @ memberof ProjectDetailTabs */
  modelReward: Reward = new Reward();
birthday: string = ' ';
  modelStory: Story = new Story();
  images = [];
  showimage = false;

  fileholder: FileHolder;
rewardlist: Reward[];
  Category  = new FormControl();
  postproject() {
    console.log(this.rewardlist);
    this.modelproject.RewardList = this.rewardlist;
    this.modelproject.ProjectStory = this.modelStory;
    this.modelproject.ImageUrl = "/assets/images/IP3mLpo.jpg";
    console.log("In post Project");
    console.log(this.modelproject);
     this.projectservice.setPostProject(this.modelproject);
    this.projectservice.ActivatePostProjectSignal();
   

   // console.log("images " + this.images)
   // this.showimage = true;
    this.router.navigateByUrl('/');
    
  }
  addproject(){
    var  modelReward: Reward = new Reward();
    this.projectservice.addReward(modelReward);
  }

  imageUpload(file: FileHolder) {

   this.imageurl = file.src;

   this.fileholder = file;
    

  }

  uploadImageOnserver(file: FileHolder){
const formData = new FormData();

    formData.append('photo', file.file);

    this.http
      .post(URL, formData).map((res: any) => res).subscribe(

        (success) => {
        

          


          console.log(success._body)
         

          this.cookieService.set("IdeaImageUrl","assets/images/"+success._body);
     

        


        },
        (error) => alert(error)
      );

      this.http
      .get(URL, formData).map((res: any) => res).subscribe(

        (success) => {
        

          


          console.log(success._body)
          

         


        },
        (error) => alert(error)
      );



    console.log(file.file);
    
  }


  @ Output() modelprojectEventEmitter = new EventEmitter < Project > ();
  @ Input() tabnumber: number;
 


  toggleFundingDuration() {
    this.ShowDatePicker = !this.ShowDatePicker;
    this.ShowNumberOfdays = !this.ShowNumberOfdays;
    this.modelproject.FundingDuration = "";

  }
  

  showtab(result:
    number) {};
  imageurl = "assets/images/project5.jpg";
 
  imageLoaded: boolean = false;
  handleImageLoad() {
    this.imageLoaded = true;
    

  }
  constructor(private _ngZone: NgZone, private http: Http, private el: ElementRef,
   private router: Router,public  projectservice:ProjectService,private cookieService: CookieService ) {
    this.projectservice.addReward(this.modelReward);
  

    this.modelproject.Title = this.cookieService.get("IdeaTitle");
    this.modelproject.Catagory = this.cookieService.get("IdeaCatagory");
    this.modelproject.Loucation = this.cookieService.get("IdeaLoucation");
     
    this.modelproject.ImageUrl = this.cookieService.get("IdeaImageUrl");
    this.modelproject.ShortDescription = this.cookieService.get("IdeaShortBlurb");
    this.modelproject.FundingDuration = this.cookieService.get("IdeaFundingDuration");
    //this.modelproject.FundingGoal =  parseInt( this.cookieService.get("IdeaFundingGoal") );

    this.modelStory.VedioUrl = this.cookieService.get("IdeaVedioUrl");
    this.modelStory.Description = this.cookieService.get("IdeaStoryDescr");
    this.modelStory.RiskAndChallanges = this.cookieService.get("IdeaStoryRisk");
    this.vediourl = this.cookieService.get("IdeaVedioUrl");
    //this.imageurl = this.cookieService.get("IdeaImageUrl");


  }

   


  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'photo'
  });

  ngOnInit() {
 this.projectservice .getRewardlist().subscribe( (rewards:any) => this.rewardlist = rewards);

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      console.log("faisal")
      console.log(file)
    };
    
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log(item)
      alert(response);
     
      this.cookieService.set("IdeaVedioUrl","assets/images/"+response);
       


    

    };
  }


 
  uploadVedio(){
         
  this.cookieService.set("IdeaShortBlurb",this.modelproject.ShortDescription.toString());
  this.cookieService.set("IdeaFundingDuration",this.modelproject.FundingDuration.toString());
  this.cookieService.set("IdeaFundingGoal",this.modelproject.FundingGoal.toString());
  this.cookieService.set("IdeaStoryDescr",this.modelStory.Description.toString());
  this.cookieService.set("IdeaStoryRisk",this.modelStory.RiskAndChallanges.toString());
  this.cookieService.set("Ideatabs","2");
          
    this.uploader.uploadAll();
    this.uploadImageOnserver(this.fileholder);
  }


  

vediourl = "assets/images"
 



}

