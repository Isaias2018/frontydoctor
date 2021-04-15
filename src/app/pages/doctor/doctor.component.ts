import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  private admin: Admin = new Admin();
  constructor(private loginService: LoginService, private router: Router) {
    let admin = JSON.parse( localStorage.getItem("admin" ) || '{}');
    this.admin = admin == '{}' ?  new Admin : admin;
    this.loginService.createAdmin(this.admin);
    if(!this.loginService.isLogin()) {
      this.router.navigateByUrl("");
    }
   }

  ngOnInit(): void {

  }

}
