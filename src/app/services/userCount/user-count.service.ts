import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCount } from 'src/app/model/userCount';
import { ApiService } from '../api/api.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserCountService {

  private urlUserCount: string ="roles/por-numero"
  constructor(private apiService: ApiService,private loginService: LoginService, private http: HttpClient) { }


  userCount() {
    return this.http.get<UserCount>(`${this.apiService.getUrlAdmin()}/${this.urlUserCount}`, {headers: this.loginService.getHttpOptions()});
  }
}
