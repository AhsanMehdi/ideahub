import { postproject } from './pages/PostProject/postproject.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {ProjectDetailsInformationComponent} from './pages/ProjectDetailIs/ProjectDetails.componet';




import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', data: { animation: 'tiger' }},

  { path: '**', redirectTo: 'pages' },
  {path:'projectDetails/:id', component: ProjectDetailsInformationComponent, data: { animation: 'dolphin' }},
   {path:'postProject', component: postproject, data: { animation: 'dolphin' },
   loadChildren: 'app/pages/PostProject/postproject.module#PostPRojectModule'
  },

];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
