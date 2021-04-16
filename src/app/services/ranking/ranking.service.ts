import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private rankingList: Array<number> = new Array<number>();

  constructor() {
    this.rankingList = [1, 2, 3, 4, 5]
  }

  getRankingList(): Array<number>
  {
    return this.rankingList;
  }

}
