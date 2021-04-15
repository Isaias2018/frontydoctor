import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.scss']
})
export class ListDoctorsComponent implements OnInit {
  doctorsList: Array<Doctor> = new Array<Doctor>();
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.findDoctors().subscribe((doctorsRequest)=>{
      this.doctorsList = doctorsRequest;
    });
  }



}
