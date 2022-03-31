import { Component, OnInit } from '@angular/core';
import { GameItemModel } from '../game-item.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'fm-add-game-card',
  templateUrl: './add-game-card.component.html',
  styleUrls: ['./add-game-card.component.css']
})
export class AddGameCardComponent implements OnInit {

  constructor(private ps:GamesService) { }

  ngOnInit(): void {
  }


  addGame(game:GameItemModel) {
    console.log("You Pressed the add game button");
    console.log(game);
    this.ps.addGames(game);
  }

}
