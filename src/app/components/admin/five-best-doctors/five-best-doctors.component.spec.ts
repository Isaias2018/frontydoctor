import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveBestDoctorsComponent } from './five-best-doctors.component';

describe('FiveBestDoctorsComponent', () => {
  let component: FiveBestDoctorsComponent;
  let fixture: ComponentFixture<FiveBestDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveBestDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveBestDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
