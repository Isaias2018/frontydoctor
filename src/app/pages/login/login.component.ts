import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public notFound: boolean = true;
  private admin: Admin = new Admin();
  public formLogin: FormGroup;
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { 
    this.formLogin = this.formBuilder.group({});
    this.createForm();
  }

  ngOnInit(): void {
    this.isLogin();
  }

  public createForm()
  {
    this.formLogin = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });  
  }

  private isLogin()
  {
    let admin = JSON.parse( localStorage.getItem("admin" ) || '{}');
    this.admin = admin == '{}' ?  new Admin : admin;
    this.loginService.createAdmin(this.admin);
    if(!this.loginService.isLogin()) {
      this.router.navigateByUrl("admin");
    }
  }

  private saveAdminInformatio(admin: Admin) 
  {
    this.loginService.createAdmin(admin);
    localStorage.setItem("admin", JSON.stringify(admin));
    this.router.navigateByUrl("admin");
  }

  public Startlogin()
  {
    this.loginService.login(this.formLogin.value as Login).subscribe(
      
      (request) => {
        if(request.authorities[0].authority === "ROLE_ADMINISTRADOR" && request.token !== "") {
          this.saveAdminInformatio(request);
          this.notFound = true;
        }
      },
      error => {
        this.notFound = false;
      },
    )
  }

}
