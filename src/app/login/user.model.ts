export class User {
    public email: string;
    public id: string;
    public _token: string;
    public _tokenExpirationDate: Date;


    public constructor(email: string, id: string, _token:string, _tokenStringExpirationDate:Date) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenStringExpirationDate;


    }

    get token() {
        if(this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }

        return this._token;
    }

}