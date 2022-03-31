import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { GameItemModel } from "./game-item.model";


@Injectable (
    {providedIn: 'root'}
)

export class GamesService {


    constructor(private db:AngularFireDatabase) {

    }

    public getGames() {
        return this.db.list<GameItemModel>("Games").valueChanges();
        
    }


    public getGame(index:number){
        return this.db.list<GameItemModel>("Games");

    }


    public addGames(game:GameItemModel) {
        this.db.list<GameItemModel>("Games").push(game);
    }
}