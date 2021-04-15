import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cantidad-de-usuarios',
  templateUrl: './cantidad-de-usuarios.component.html',
  styleUrls: ['./cantidad-de-usuarios.component.scss']
})
export class CantidadDeUsuariosComponent implements OnInit {

  @Input() totalUserCount: number = 0;
  @Input() userCount: number = 0;
  @Input() role: string = "";
  
  percentage: number = 0;

  constructor() {
   }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.moveBar();

  }

  moveBar() { 
    this.percentage = this.userCount * 100 / this.totalUserCount;
    document.getElementById(`bar-blue-${this.role}`)?.setAttribute('style',`left: calc(-1 * calc(100% - ${this.percentage}%))`);
  }

}
