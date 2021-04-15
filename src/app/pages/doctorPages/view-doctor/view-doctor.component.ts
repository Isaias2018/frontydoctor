import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {

  data: Doctor = this.doctor.getDoctor();
  verification: boolean = this.data.habilitado;
  constructor(private doctor: DoctorService, private routes: Router) { }

  ngOnInit(): void {
    if(this.data.idDoctor == 0) {
      this.routes.navigateByUrl('list-doctors');
    }
    

  }

}
