import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTableDoctorComponent } from './body-table-doctor.component';

describe('BodyTableDoctorComponent', () => {
  let component: BodyTableDoctorComponent;
  let fixture: ComponentFixture<BodyTableDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTableDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTableDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
