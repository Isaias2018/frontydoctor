import { Authorities } from "./authorities";

export class Admin {
    
    token: string;
    tokenType: string;
    authorities: Array<Authorities>;

    public constructor()
    {
        this.token = "";
        this.tokenType = "";
        this.authorities = new Array<Authorities>();
    }
}