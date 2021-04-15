import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-list-doctors-by-ranking',
  templateUrl: './list-doctors-by-ranking.component.html',
  styleUrls: ['./list-doctors-by-ranking.component.scss']
})
export class ListDoctorsByRankingComponent implements OnInit {
  
  doctorsList: Array<Doctor> = new Array<Doctor>();
  rankingsList: Array<number> = new Array<number>(); 
  rankingSelect: number = 0;

  constructor(private doctorService: DoctorService, private rankingService: RankingService) { }

  ngOnInit(): void {
    this.doctorService.findDoctors().subscribe((doctorsRequest)=>{
      this.doctorsList = doctorsRequest;
    });
    this.rankingsList = this.rankingService.getRankingList();

  }

  findDoctorsByRanking()
  {
    this.doctorService.findDoctorByRanking(this.rankingSelect).subscribe((doctorsRequest => {
      this.doctorsList = doctorsRequest;
    }));
  }

}
