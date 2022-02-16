import { Component } from "@angular/core";
import {mock_games_list} from './mock_games_list';
import {GameItemModel} from './game-item.model';


@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html'
})

export class HomeLayoutComponent {
    games: GameItemModel [] = [];

  constructor() {
    for(var game of mock_games_list) {
      this.games.push(game);
    }
  }
}