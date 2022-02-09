import {Component, Input} from "@angular/core"

@Component({
    selector: 'fm-cardcomponent',
    templateUrl:'cardComponent.component.html',
    styleUrls: ['cardComponent.component.css']

})


export class CardComponent{
    @Input() img: string;
    @Input() name: string;
    @Input() year: string;
    @Input() main: string;
    @Input() mex: string;
    @Input() comp: string;

    constructor(){
        this.img ="";
        this.name="Name of game";
        this.year="optional year"
        this.main="Main story time";
        this.mex="Main+extra time";
        this.comp="Comp time";
    }

}