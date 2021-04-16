import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://doctorfast-backend.herokuapp.com";
  private urlAdmin: string = "http://doctorfast-backend.herokuapp.com/admin";
  constructor() { }

  public getUrl(): string
  {
    return this.url;
  }

  public getUrlAdmin(): string
  {
    return this.urlAdmin;
  }

}
