import { Router } from '@angular/router';
import { Reward } from './../../../model/Reward';
import { CookieService } from 'ngx-cookie-service';
import {FileHolder} from 'angular2-image-upload';

import { Story } from './../../../model/Story';

import { Project } from './../../../model/Project';
import { Component, HostListener, NgZone, Input, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
const Web3 = require('web3');
const contract = require('truffle-contract');
const metaincoinArtifacts = require('../../../../build/contracts/MetaCoin.json');
import { canBeNumber } from '../../../util/validation';
const postProject  = require('../../../../build/contracts/Projects.json');
const Adoption  = require('../../../../build/contracts/Adoption.json');
const Projects  = require('../../../../build/contracts/Projects.json');
declare var window: any;
const Voting  = require('../../../../build/contracts/Voting.json');

const URL = 'http://localhost:3000';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import {
  Http,
  Response
} from '@angular/http';

import { Subject }    from 'rxjs/Subject';


@ Injectable()

export class ProjectService {

plegeReward:Reward;
account:any;
modelproject: Project = new Project(); /** * * * @ memberof ProjectDetailTabs */
messigingProject: Project = new Project();
listRewards: Reward[] =[];
allproject: Project[] = [];
postProject: Project = new Project();


@Output() postProjectSignal: EventEmitter<boolean> = new EventEmitter();
@Output() voteOnProject: EventEmitter<number> = new EventEmitter();
@Output() TransferFundsSignal: EventEmitter<boolean> = new EventEmitter();
@Output() searchProjectText: EventEmitter<string> = new EventEmitter();
ActivatePostProjectSignal(){
  console.log("emiting")
  this.postProjectSignal.emit(true);
}
VoteOnPorject(id: number){
  this.voteOnProject.emit(id);
}
ActivateTransferFundsSignal(){
  this.TransferFundsSignal.emit(true);
}
UpdateSearchProjectText(text: string){
  this.searchProjectText.emit( text);
}

  constructor(private http: Http, private cookieService: CookieService ,public router: Router) {

}

  filterdlist: Project[]= [] ;
  listProject: Project[] =[
   {
     Catagory:"Technology",
     Title:"The Sound Rective LED Mask",
     FundingDuration:"30 days",
     FundingGoal:5,
     ToalVoteCount:10,
     ImageUrl:"assets/images/image1.png",
     Loucation:"Pakistan",
     ShortDescription:"An electro-luminescent mask for art and music lovers, back with 8 new designs.",
     TotalFuneded:2,
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },


     ],
     ProjectStory:{
       Description: "9000 years ago, the first mask was created. Used to either disguise or reveal a personality trait, masks are present in every culture throughout History. The Sound Reactive LED Mask takes a step forward.It integrates art and technology into a very versatile device that mesmerizes anyone who sees it.",
   RiskAndChallanges: "The last two years have been the source of many challenges for us but we always succeeded in the end. In fact, not only were we capable of fulfilling our first campaign, but we also created and launched our e-commerce and international shipping platform, delivering in up to 50 countries.",
   VedioUrl:"assets/images/reactivesound.MP4"

     }


   },
   {
     Catagory:"Technology",
     Title:"Yeehaw Wand",
     FundingDuration:"30 days",
     FundingGoal:5,
     ToalVoteCount:11,
     TotalFuneded:1,
     ImageUrl:"assets/images/project2.jpg",
     Loucation:"Pakistan",
     ShortDescription:"Use the Wand and phone to build objects superposed on the real world.Play with them as if they’re in front of you or 3D print them",
     RewardList:[
       {
         Title: "Pledge Without Reward",
   PledgeAmount: "5",
   Description: "Thanks for the support! You’re the best - You may not need us, but we definitely need you! We’ll send you a special thank you email and keep you updated on what’s happening with our Yeehaw Wand.",
   EstimatedDilivery: "Feb 2018",
   ShippingDetails: "Anywhere in the world",
       },
       {
         Title: "Super Early Bird | Yeehaw Wand",
   PledgeAmount: "99",
   Description: "SAVE $99. Pick up your Wand at our LOWEST PRICE! Receive the Yeehaw Wand and its 360° Plate that can be synced with any iOS or Android device! DHL Shipping. OPTIONAL ADD-ONS:  - Add $20 for the phone or tablet Dock - fits ANY iOS & Android device  - Add $30 for the stylish on-the-go Travel Bag - Add $40 for the Yeehaw iPad Stand",
   EstimatedDilivery: "Feb 2018",
   ShippingDetails: "Anywhere in the world",
       },
       {
         Title: "Early Bird | Friends Pack",
   PledgeAmount: "179",
   Description: "SAVE $199. Get the Friends Pack now and have fun waving your Wands together. BEST DEAL for friends or a couple! Receive 2 Wands and 2 - 360° Plates that can be synced with any iOS or Android device! DHL Shipping. To pledge for the optional add-ons, add them to your final pledge - for example, to add 2x Yeehaw iPad Stands to this Early Bird reward-tier, your final pledge amount will be $259 ($179+$80=$259). You can add more than one add-on to this pledge.",
   EstimatedDilivery: "Feb 2018",
   ShippingDetails: "Anywhere in the world",
       },
       {
         Title: "Early Bird | Magic Printer Pack",
   PledgeAmount: "399",
   Description: "SAVE $298. Bring your 3D design to life INSTANTLY with your very own Yeehaw 3D Printer as soon as you finish drawing! This EXCLUSIVE offer includes the Yeehaw 3D Printer, Yeehaw Wand AND its 360° Plate that can be synced with any iOS or Android device! DHL Shipping. To pledge for the optional add-ons, add them to your final pledge - for example, to add the Yeehaw iPad Stand to this Super Early Bird reward-tier, your final pledge amount will be $439 ($399+$40=$439). You can add more than one add-on to this pledge.",
   EstimatedDilivery: "Feb 2018",
   ShippingDetails: "Anywhere in the world",
       },

     ],
     ProjectStory:{
       Description: "Yeehaw Wand is the fastest and easiest way to create in 3D without requiring any specialized programming or 3D graphics experience. You can design directly from your phone or tablet onto the real world. Create, edit, and design using the Yeehaw Wand and its free app. You can also print it to any 3D printer.",
   RiskAndChallanges: "Many Kickstarter campaigns struggle with assembling and delivering the final product by the announced date as they encounter hurdles with prototypes and mass production. This is why we have completed countless tests on the Yeehaw Wand prior to launching the campaign. We do not want you to wait any longer than expected. We feel confident that the product will be delivered in February 2018. We continue to oversee every step to make sure the assembly and delivery are according to our timeline.",
   VedioUrl:"assets/images/project2.MP4"

     }

   },
   {
     Catagory:"Technology",
     Title:"Yeehaw Wand",
     FundingDuration:"30 days",
     FundingGoal:15,
     ToalVoteCount:6,
     TotalFuneded:6,
     ImageUrl:"assets/images/project3.jpg",
     Loucation:"Pakistan",
     ShortDescription:"Upgrade your dice: a family of graphic alternatives to classic dots in Stainless & Brass.",
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },

     ],
     ProjectStory:{
       Description: "We've created 3 new symbol families (as well as classic dots), each with it's own unique personality, laser etched onto standard-sized 16mm stainless steel and brass cubes. They have a nice, solid feel to them and deliver a long, satisfying roll with surprisingly little effort. \nCoDi are designed to enhance any game, either to replace the cheap plastic dice that came in the box or add new rule sets by pairing classic dice with additional 'code' dice. CoDi are a fresh, game-changing addition to any dice-powered game! ",
   RiskAndChallanges: "We have been working with our shops for several years now; we have a great relationships with them and they do quality work. Additionally, they have considerable capacity with multiple machines - always good to know in case this project requires larger than expected quantities! The biggest risk to beginning shipping on the stated delivery date, as always, is their production capacity or scheduling of other work at the time of our actual order.For those of you who are new to our projects, we have a lot of product development, crowdfunding delivery experience and we communicate often!",
   VedioUrl:"assets/images/project3.MP4"

     }

   },
    
   {
     Catagory:"Technology",
     Title:"Orient Kitchen Knives",
     FundingDuration:"30 days",
     TotalFuneded:2,
     ToalVoteCount:4,
     FundingGoal:10,
     ImageUrl:"assets/images/project4.jpg",
     Loucation:"Pakistan",
     ShortDescription:"The worlds finest chef's knives, blending elite Japanese steel with awesome ergonomics .",
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },

     ],
     ProjectStory:{
       Description: "Orient Knives have set out to make the ultimate set of elite chef's knives made from ultra premium materials. We are so proud of the first heirloom quality designs that we have produced in our Damascus Series, but this is just the beginning of our journey. ",
   RiskAndChallanges: "Steel Supply - We need to reserve the steel weeks in advance and due to the high quality of steel that we use there is a short supply. We have switched our steel supply to AUS-10 (from VG-10) which has a more consistent supply stream.",
   VedioUrl:"assets/images/project4.MP4"

     }

   },
   
  
   {
     Catagory:"Technology",
     Title:"Just Another Lamp",
     FundingDuration:"30 days",
     TotalFuneded:2,
     FundingGoal:4,
     ToalVoteCount:8,
     ImageUrl:"assets/images/project5.jpg",
     Loucation:"Pakistan",
     ShortDescription:"JAL Just Another Lampis a lamp based on simplicity, quality of materials, and purity of purpose.",
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },

     ],
     ProjectStory:{
       Description: "We have already lined up three electronic components suppliers: our first choice one plus two back-up suppliers. They will provide us with an already assembled cable connection and bulb, ready to be plugged in! Furthermore, the molds are produced so we can start the glass blowing process as soon as this project reaches its funding goal. While each lamp is handcrafted and unique, with these molds we guarantee each lamp is made in accordance with certain standards.",
   RiskAndChallanges: "We have a local manufacturer for the main and most important part of the JAL, the glass body. We chose Ferran Collado, an internationally recognized glass blower that happens to be our neighbor. Being so close to him makes everything much easier. He meshes perfectly with our volumes, timings and quality standards for our lamp. As a back-up he has a professional and qualified team of glass blowers in case we need larger volumes (and we hope we do!). Because the glass body is handcrafted, we already have the first batch produced.",
   VedioUrl:"assets/images/project5.MP4"

     }

   },
   {
     Catagory:"Technology",
     Title:"GUITAR-JO 2.0",
     FundingDuration:"30 days",
     FundingGoal:15,
     TotalFuneded:5,
     ToalVoteCount:40,
     ImageUrl:"assets/images/project6.jpg",
     Loucation:"Pakistan",
     ShortDescription:"The first and only electric guitar accessory that makes your guitar sound like a banjo.",
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },

     ],
     ProjectStory:{
       Description: "Jon Langberg, the creator of Guitar-Jo, never intended for his invention to amount to anything besides another fun project that he would use one time for music night at his church. One night, he was preparing electric guitar accompaniments for it, and there was one song in particular that he thought really needed a banjo. He had never played one before and couldn't afford to buy and learn a whole new instrument with a timeframe of 1 week.",
   RiskAndChallanges: "He searched for digital effects patches that he could input into his multi-effects processor, and when he could not find any, tried creating his own patches. After tinkering around and researching online for some time, he found out that digital effects fell drastically short and would not suffice. The only thing that seemed to somewhat work was placing a cloth underneath his guitar strings. It was very inconsistent, falling out of place as he played, and took too much time to find the right placement. He needed to create something more practical and consistent that could be used in a live performance setting, so he drew up some plans and used his uncle's workshop to create it. The device attached to the body of the electric guitar with suction cups. A fabric was placed on the underside of the device and could be lowered down by turning the wing-nuts until it made just the right amount of contact with the strings, which was much more consistent with the sound of an actual banjo.",
   VedioUrl:"assets/images/project6.MP4"

     }

   },
   {
     Catagory:"Technology",
     Title:"The Ultimate Bicycle",
     FundingDuration:"30 days",
     FundingGoal:6,
     TotalFuneded:2,
     ToalVoteCount:13,
     ImageUrl:"assets/images/project7.png",
     Loucation:"Pakistan",
     ShortDescription:"Get ready for an enhanced riding experience with the world’s brightest and most advanced tail-light.",
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },

     ],
     ProjectStory:{
       Description: "Rayo is a bicycle tail-light designed for the modern cyclist. Equipped with ultra-bright LEDs, engineered optics, motion detection, and bluetooth connectivity features, Rayo’s functionalities not only boost your riding safety, but also make your riding experience more convenient, entertaining, and seamless.",
   RiskAndChallanges: "We currently have a functional prototype of Rayo that is ready for mass production. However, we are aware that there may be necessary changes to meet manufacturing requirements. Our policy is to make sure that our backers are continuously informed of any updates or changes. We plan to keep our campaign as transparent as possible, and we also promise to do our best to overcome any challenges we encounter on the way. We are looking forward to the day we deliver Rayo to the hands of our cycling-loving backers. Until then, ride safe!",
   VedioUrl:"assets/images/project7.MP4"

     }

   },
   {
     Catagory:"Technology",
     Title:"Midnight Sun XII",
     FundingDuration:"30 days",
     FundingGoal:5,
     TotalFuneded:1,
     ToalVoteCount:7,
     ImageUrl:"assets/images/project8.png",
     Loucation:"Pakistan",
     ShortDescription:"Help us fund the solar array for our 12th generation vehicle.",
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },

     ],
     ProjectStory:{
       Description: "MSXII's high performance solar cells capture sunlight and create electrical energy. Proceeds from this campaign will go directly to funding the cost of our array.  2018 marks the 30th anniversary for Midnight Sun. Since 1988, we have built 11 vehicles and driven over 50,000 km powered by the sun. ",
   RiskAndChallanges: "We currently have a functional prototype of Rayo that is ready for mass production. However, we are aware that there may be necessary changes to meet manufacturing requirements. Our policy is to make sure that our backers are continuously informed of any updates or changes. We plan to keep our campaign as transparent as possible, and we also promise to do our best to overcome any challenges we encounter on the way. We are looking forward to the day we deliver Rayo to the hands of our cycling-loving backers. Until then, ride safe!",
   VedioUrl:"assets/images/project8.MP4"

     }

   },
   {
     Catagory:"Technology",
     Title:"Codey Rocky",
     FundingDuration:"30 days",
     FundingGoal:20,
     TotalFuneded:19,
     ToalVoteCount:19,
     ImageUrl:"assets/images/project9.png",
     Loucation:"Pakistan",
     ShortDescription:"Meet the robot that helps every child learn coding and AI",
     RewardList:[
       {
         Title: "Reward1",
   PledgeAmount: "1",
   Description: "noting",
   EstimatedDilivery: "30 days",
   ShippingDetails: "n/a",
       },

     ],
     ProjectStory:{
       Description: "Codey Rocky is an entry-level coding robot for STEM education, suitable for children ages 6 and up. The combination of easy-to-use robotics hardware with graphical programming gives all children the opportunity to take their first steps into the world of code and compose their first “Hello World!” statement at the same time as they explore their creativity.Codey is the detachable controller that holds all the magic. It includes more than 10 electronic modules that can be controlled via code. Rocky is the car that lets you take Codey anywhere you want, so that your clever programs can be run everywhere.",
   RiskAndChallanges: "We currently have a functional prototype of Rayo that is ready for mass production. However, we are aware that there may be necessary changes to meet manufacturing requirements. Our policy is to make sure that our backers are continuously informed of any updates or changes. We plan to keep our campaign as transparent as possible, and we also promise to do our best to overcome any challenges we encounter on the way. We are looking forward to the day we deliver Rayo to the hands of our cycling-loving backers. Until then, ride safe!",
   VedioUrl:"assets/images/project9.MP4"

     }

   },
   
  ];


 serachstring:string = " ";
  public getAllProjects(): Observable < Project[] > {
   
    return Observable.of(this .listProject);
  }

  public AddProject(_pro:Project){
    this .listProject.push(_pro);
    this.allproject.push(_pro);
    this.UpdateSearchProjectText(' ');
    
 
  }

  setPostProject(pro: Project){
    this.postProject = pro;
  }
  getPostProject(){
    return this.postProject;
  }


  public getModelProject():Project{
   return this .modelproject;
  }
 

  public setImageUrl(url:string){
    this .modelproject.ImageUrl = url;
  }
  public addReward(_reward: Reward){
   _reward.id = this .listRewards.length +1 ;
   this .listRewards.push(_reward);

  }
  public getRewardlist(): Observable< Reward[]>{
    return Observable.of(this . listRewards);
  }

  public deleteReward(_id:number){


    for ( var i = 0; i < this .listRewards.length ; i++){

      if (this .listRewards[i].id == _id){
        this .listRewards.splice(i, 1 );
      }
    }

  }

  setProject(pro:Project)
  {
    
    this.messigingProject  = pro;
  }

   getProject(): Observable< Project>{
     return Observable.of(this.messigingProject);
   }

 setPlegeParameters(_account:any, _reward:Reward){
   this .account = _account;
   this .plegeReward = _reward;
 }

 getPlegeReward():Reward{
   return this .plegeReward;
 }

 getAccountAddress():any{
   return this .account;
 }
  
 firstTime: boolean = true;
 searchProject(str: string ){
   this.serachstring = str;
  
   if ( this.firstTime){
    for ( let i = 0 ; i < this.listProject.length; i++){
      this.allproject.push(this.listProject[i]);
    }
    this.firstTime = false;

   }
   this.filterdlist = Object.assign([] , this.allproject).filter(
     pro => pro.Title.toLowerCase().indexOf(str.toLowerCase()) > -1
   )
  

    
   this.listProject.splice(0,this.listProject.length);
  for ( let i= 0 ; i <  this.filterdlist.length; i++){
    this.listProject.push(this.filterdlist[i])
  }
   
  

console.log(this.filterdlist);



  
   
   
 }



}

