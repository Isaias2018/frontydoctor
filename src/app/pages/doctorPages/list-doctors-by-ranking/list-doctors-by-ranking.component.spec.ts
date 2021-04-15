import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorsByRankingComponent } from './list-doctors-by-ranking.component';

describe('ViewDoctorByRankingComponent', () => {
  let component: ListDoctorsByRankingComponent;
  let fixture: ComponentFixture<ListDoctorsByRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoctorsByRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorsByRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
