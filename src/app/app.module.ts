import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { TopNavBarComponent } from './navigation/topbarnav.component';
import { CardComponent } from './gamecardsrouting/cardComponent.component';
import { SearchBarComponent } from './gamecardsrouting/searchbar.component';
import { ForumLayoutComponent } from './gamecardsrouting/forum-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './gamecardsrouting/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CardComponent,
    SearchBarComponent,
    ForumLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
