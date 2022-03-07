import { Component, OnInit } from "@angular/core";
import {GameItemModel} from './game-item.model';
import { GamesService } from "./games.service";


@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html'
})

export class HomeLayoutComponent implements OnInit {
    games: GameItemModel [] = [];

  constructor(private gamesService:GamesService) {
   
  }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((data: GameItemModel [])=>{
    console.log("Fetching Games from DB");
    for(var game of data) {
      console.log(game);
      this.games.push(game);
    }

    });
  }
}