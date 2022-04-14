import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: 'fm-stats-layout',
    templateUrl: 'login-layout.component.html',
    styleUrls: ['login-layout.component.css']
})
export class LoginLayoutComponent{
    public buttonClicked!:string;
    private authObservable!: Observable<AuthResponse>


    constructor(private authservice:AuthService, private router: Router){

    }

    public onSubmit(data:NgForm) {
        console.log("Button Clicked =" + this.buttonClicked)
        console.log(data.value);

        if(this.buttonClicked == 'SignUp'){
            this.authObservable=this.authservice.signup(data.value.email, data.value.password);
        }
            

        if(this.buttonClicked == 'Login'){
            this.authObservable=this.authservice.login(data.value.email, data.value.password);
        }
            
            this.authObservable.subscribe(
                (data:AuthResponse) =>{
                console.log(data);
                this.router.navigate(['']);
                },
                error =>{
                    console.log(error.error);
                }
            );

            data.resetForm();
    }

}