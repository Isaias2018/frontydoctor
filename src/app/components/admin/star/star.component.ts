import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() ranking: number = 0;
  @Input() id: number = 0;
  n: number = Math.trunc(this.ranking);
  m: number = (this.ranking - this.n) * 100;
  stars: Element[] = [];
  
  

  constructor() { 
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void {
    this.paintStars();

  }

  paintStars()
  {
    if(typeof(this.ranking) != typeof("")) {
      this.n = Math.trunc(this.ranking);
      this.m = (this.ranking - this.n) * 100;

      this.stars = Array.from(document.querySelectorAll(`#paint-${this.id}`));
      for (let _i = this.n + 1; _i <= 4; _i++) {
        this.stars[_i].classList.remove('paint');
      }
      if(this.n < 5) {
        this.stars[this.n].setAttribute('style', `left: calc(-1 * calc(100% - ${this.m}%));`)
      }
      
    }
    
  }
  

}
