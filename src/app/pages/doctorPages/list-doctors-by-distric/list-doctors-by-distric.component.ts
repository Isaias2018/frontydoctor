import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DistricService } from 'src/app/services/distric/distric.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-list-doctors-by-distric',
  templateUrl: './list-doctors-by-distric.component.html',
  styleUrls: ['./list-doctors-by-distric.component.scss']
})

export class ListDoctorsByDistricComponent implements OnInit {

  doctorsList: Array<Doctor> = new Array<Doctor>();
  districsList: Array<string> = new Array<string>(); 
  districSelect: string = "";

  constructor(private doctorService: DoctorService, private districService: DistricService) { 
  }

  ngOnInit(): void {
    this.doctorService.findDoctors().subscribe((doctorsRequest) => {
      this.doctorsList = doctorsRequest;
    });
    this.districsList = this.districService.getDistricsList();
  } 


  findDoctorsByDistric()
  {
    this.doctorService.findDoctorsByDisctric(this.districSelect).subscribe((doctorRequest) => {
      this.doctorsList = doctorRequest;
    });
  }


}
