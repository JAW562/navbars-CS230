import {Component, OnInit} from "@angular/core"
import { Subscription } from "rxjs"
import { AuthService } from "../login/auth.service";

@Component({
    selector: 'fm-topnavbar',
    templateUrl:'topbarnav.component.html',
    styleUrls: ['topbarnav.component.css']

})


export class TopNavBarComponent implements OnInit{
    private user!: Subscription;
    public isAuthenticated:boolean=false;


    public constructor(private authentication: AuthService) {


    }

    ngOnInit() : void {
        this.user = this.authentication.user.subscribe(user =>{
            this.isAuthenticated = !user ? false : true;
        })


    }


}