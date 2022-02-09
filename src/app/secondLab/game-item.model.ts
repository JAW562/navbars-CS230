export class GameItemModel{
    img: string;
    name: string;
    year: string;
    main: string;
    mex: string;
    comp: string;

    constructor(img: string, name: string, year: string, main: string, mex: string, comp: string){
        this.img =img;
        this.name= name;
        this.year = year;
        this.main = main;
        this.mex = mex;
        this.comp = comp;
    }

}