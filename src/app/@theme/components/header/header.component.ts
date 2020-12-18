import { ProjectService } from './../../../@core/data/project.service';
import { Component, Input, OnInit } from '@angular/core';

import {NbSearchService, NbMenuService,  NbSidebarService} from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
 seachstring:string ="faisal";
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,public search: NbSearchService,public  projectservice:ProjectService) {
              
              }
              subscription:any;
              items:any = {}
  ngOnInit() {
     
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
      this.subscription = this.search.onSearchSubmit().subscribe(item => this.func(item))
     
  }
  func(item: any){
    console.log(item.term)
     this.projectservice.searchProject(item.term);
    
    
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    console.log("slider")
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
 
  
  }

  startSearch(str:any) {
   // this.analyticsService.trackEvent('startSearch');

   
  }
}
