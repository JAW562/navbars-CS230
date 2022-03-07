import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GameItemModel } from "./game-item.model";


@Injectable (
    {providedIn: 'root'}
)

export class GamesService {
    private baseUrl: string = "https://how-to-beat-cs230-default-rtdb.firebaseio.com/";
    private gamesEndpoint: string = "Games.json";

    constructor(private http:HttpClient) {

    }

    getGames() {
        return this.http.get<GameItemModel [] >(this.baseUrl + this.gamesEndpoint);
    }


    getGame(index:number){
        return this.http.get<GameItemModel >(this.baseUrl + 'games' + '/' + index + '.json');

    }
}