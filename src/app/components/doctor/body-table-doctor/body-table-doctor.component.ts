import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-body-table-doctor',
  templateUrl: './body-table-doctor.component.html',
  styleUrls: ['./body-table-doctor.component.scss']
  
})
export class BodyTableDoctorComponent implements OnInit {

  @Input() doctorsList: Array<Doctor> = new Array<Doctor>();

  constructor(private doctorService: DoctorService, private routes: Router) {
    
   }

  ngOnInit(): void {
  }

  viewDoctor(doctor:Doctor)
  {
    this.doctorService.setDoctor(doctor);
    this.routes.navigateByUrl('admin/doctor/perfil');
  }

  editDoctor(doctor:Doctor)
  {
    this.doctorService.setDoctor(doctor);
    this.routes.navigateByUrl('admin/doctor/edit');
  }
}
