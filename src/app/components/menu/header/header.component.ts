import { Component, OnInit } from '@angular/core';
import { MenuAndHeaderService } from 'src/app/services/menuAndHeader/menu-and-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenu: boolean;

  constructor(private menuAndHeaderService: MenuAndHeaderService) { 
    this.activeMenu = false;
  }

  ngOnInit(): void {
  }

  menuChange() {
    this.activeMenu = !this.activeMenu;
    this.menuAndHeaderService.activeMenu.emit(this.activeMenu)

  }
}
