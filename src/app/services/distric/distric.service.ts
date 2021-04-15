import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DistricService {

  private districsList: Array<string> = new Array<string>();
  
  constructor() { 
    this.districsList.push("Chorrillos","Callao", "Pueblo Libre", "Ate", "San Borja")
  }
  public getDistricsList(): Array<string>
  {
    return this.districsList;
  }
}
