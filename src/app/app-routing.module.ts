import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForumLayoutComponent } from './forum/forum-layout.component';
import { HomeLayoutComponent } from './homePage/home-layout.component';
import { StatsLayoutComponent } from './stats/stats-layout.component';
import { LoginLayoutComponent } from './login/login-layout.component';
import { JoinLayoutComponent } from 'src/app/join/join-layout.component';
import { SubmitLayoutComponent } from 'src/app/submit/submit-layout.component';

const routes:Routes = [
  {
    path:'', component: HomeLayoutComponent,
  
  },
  {
    path:'forum', component: ForumLayoutComponent
  },

  { path: 'stats', component: StatsLayoutComponent

},

{ path: 'login', component: LoginLayoutComponent

},
{ path: 'join', component: JoinLayoutComponent

},

{ path: 'submit', component: SubmitLayoutComponent

}



];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
