import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/model/admin';
import { Login } from 'src/app/model/login';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin: string = "api/auth/login";
  private admin: Admin = new Admin();
  private httpOptions: HttpHeaders; 

  constructor(private apiService: ApiService, private httpClient: HttpClient) 
  { 
    this.httpOptions = new HttpHeaders({});  
  }

  isLogin(): boolean {
    if ( "" == this.admin.token) {
      return false
    }
    return true;
  }
  public createAdmin(admin: Admin)
  {
    if(admin.token == "" ) {
      return;
    }

    this.admin = admin;
    this.setHttpOptions();
  } 

  public setHttpOptions()
  {
    this.httpOptions = new HttpHeaders(
      {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.admin.token}`
      }
    )
  }

  public clearAll()
  {
    this.admin = new Admin();
    this.httpOptions = new HttpHeaders();

  }

  public getHttpOptions(): any
  {
    return this.httpOptions;
  }

  public login(login: Login): Observable<Admin>
  {
    return this.httpClient.post<Admin>(`${this.apiService.getUrl()}/${this.urlLogin}`, login);
  }
}
