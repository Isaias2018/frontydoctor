import { Component, Input, OnInit } from '@angular/core';
import { DoctorRanking } from 'src/app/model/doctorRanking';

@Component({
  selector: 'app-five-best-doctors',
  templateUrl: './five-best-doctors.component.html',
  styleUrls: ['./five-best-doctors.component.scss']
})
export class FiveBestDoctorsComponent implements OnInit {

  @Input() fiveBestDoctor: Array<DoctorRanking> = new Array<DoctorRanking>();
  
  constructor() { }

  ngOnInit(): void {
  }


}
