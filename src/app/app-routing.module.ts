import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForumLayoutComponent } from './gamecardsrouting/forum-layout.component';
import { HomeLayoutComponent } from './gamecardsrouting/home-layout.component';

const routes:Routes = [
  {
    path:'', component: HomeLayoutComponent,
  
  },
  {
    path:'forum', component: ForumLayoutComponent
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
