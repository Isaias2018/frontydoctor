import { Component, OnInit } from '@angular/core';
import { DoctorRanking } from 'src/app/model/doctorRanking';
import { UserCount } from 'src/app/model/userCount';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { UserCountService } from 'src/app/services/userCount/user-count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userCount: UserCount = new UserCount();
  roleDoctor: string = "doctor";
  rolePacient: string = "pacientes"
  fiveBestDoctor: Array<DoctorRanking> = new Array<DoctorRanking>();

  constructor(private userCountService: UserCountService, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.userCountService.userCount().subscribe((data) => {
      this.userCount = data;
    });

    this.doctorService.findFiveBestDoctors().subscribe((data) => {
      this.fiveBestDoctor = data;
    })
  }

}
