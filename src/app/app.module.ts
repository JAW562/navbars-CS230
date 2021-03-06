import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './headerAndFooter/bottomnavbar.component';
import { TopNavBarComponent } from './headerAndFooter/topbarnav.component';
import { CardComponent } from './homePage/cardComponent.component';
import { SearchBarComponent } from './homePage/searchbar.component';
import { ForumLayoutComponent } from './forum/forum-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './homePage/home-layout.component';
import { NumberUpdaterComponent } from './homePage/numberUpdater.component';
import { MainSegmentComponent } from './homePage/main-segment.component';
import { GamePassComponent } from './homePage/gamePass.component';
import { ExampleComponent } from './homePage/example.component';
import { MobileViewExampleComponent } from './homePage/mobileViewExample.component';
import { StatsLayoutComponent } from './stats/stats-layout.component';
import { LoginLayoutComponent } from './login/login-layout.component';
import { JoinLayoutComponent } from 'src/app/join/join-layout.component';
import { SubmitLayoutComponent } from 'src/app/submit/submit-layout.component';
import { ForumPostsComponent } from './forum/forum-posts.component';
import { HttpClientModule } from '@angular/common/http'
import { UserInfoComponent } from './user-info/user-info.component';
import { environment } from '../environments/environment';
import { AddGameCardComponent } from './homePage/add-game-card/add-game-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CardComponent,
    SearchBarComponent,
    ForumLayoutComponent,
    HomeLayoutComponent,
    NumberUpdaterComponent,
    MainSegmentComponent,
    GamePassComponent,
    ExampleComponent,
    MobileViewExampleComponent,
    StatsLayoutComponent,
    LoginLayoutComponent,
    JoinLayoutComponent,
    SubmitLayoutComponent,
    ForumPostsComponent,
    UserInfoComponent,
    AddGameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
