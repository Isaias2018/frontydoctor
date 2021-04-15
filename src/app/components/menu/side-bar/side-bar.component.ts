import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { MenuAndHeaderService } from 'src/app/services/menuAndHeader/menu-and-header.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  activeMenu: boolean = false;

  constructor(private menuAndHeaderService: MenuAndHeaderService, private router: Router, private loginService: LoginService) { 
    
  }

  ngOnInit(): void {
    this.menuAndHeaderService.activeMenu.subscribe(data => {
      this.activeMenu = data;
    })
  }

  public logout()
  {
    this.loginService.clearAll();
    localStorage.setItem("admin", "{}");
    this.router.navigateByUrl("");
  }

}
