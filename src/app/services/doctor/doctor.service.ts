import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/model/doctor';
import { DoctorRanking } from 'src/app/model/doctorRanking';
import { ApiService } from '../api/api.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private urlFindDoctorList: string = "doctor/list";
  private urlFindDoctorListByDistrict: string = "doctor/por_distrito/";
  private urlFindDoctorListByRanking: string = "doctor/por_rating";
  private urlFindFiveBestDoctors: string = "doctor/por_rating/mejores";
  private urlEditDoctor: string = "doctor/edit";

  private doctorsList: Doctor[] = new Array<Doctor>();
  private doctor: Doctor = new Doctor();

  constructor(private http:HttpClient, private apiService: ApiService, private loginService: LoginService) {

  }

  setDoctorsList(doctorsList: Array<Doctor>): void
  {
    this.doctorsList = doctorsList;
  }

  getDoctorsList(): Array<Doctor>
  {
    return this.doctorsList;
  }

  setDoctor(doctor: Doctor): void
  {
    this.doctor = doctor;
  }

  getDoctor():Doctor
  {
    return this.doctor;
  }

  clearDoctor(): void
  {
    this.doctor = new Doctor();
  }

  findDoctors(): Observable<Doctor[]>
  {    
    return this.http.get<Doctor[]>(`${this.apiService.getUrlAdmin()}/${this.urlFindDoctorList}`, {headers: this.loginService.getHttpOptions()});
  }

  findDoctorsByDisctric(distric: string): Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>(`${this.apiService.getUrlAdmin()}/${this.urlFindDoctorListByDistrict}${distric}`, {headers: this.loginService.getHttpOptions()});
  }

  findDoctorByRanking(ranking: number): Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>(`${this.apiService.getUrlAdmin()}/${this.urlFindDoctorListByRanking}/${ranking}`, {headers: this.loginService.getHttpOptions()});
  }

  findFiveBestDoctors(): Observable<DoctorRanking[]>
  {
    return this.http.get<DoctorRanking[]>(`${this.apiService.getUrlAdmin()}/${this.urlFindFiveBestDoctors}`, {headers: this.loginService.getHttpOptions()});
  }
  
  editDoctors(doctor: Doctor): Observable<Doctor>
  {
    return this.http.put<Doctor>(`${this.apiService.getUrlAdmin()}/${this.urlEditDoctor}/${doctor.idDoctor}`, doctor, {headers: this.loginService.getHttpOptions()});
  }

}
