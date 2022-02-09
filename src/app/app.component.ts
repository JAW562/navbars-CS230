import { Component } from '@angular/core';
import {mock_games_list} from './secondLab/mock_games_list';
import {GameItemModel} from './secondLab/game-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'how-to-beat-CS230';
  games: GameItemModel [] = [];

  constructor() {
    for(var game of mock_games_list) {
      this.games.push(game);
    }
  }
}
