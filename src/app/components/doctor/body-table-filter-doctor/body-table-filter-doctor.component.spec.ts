import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTableFilterDoctorComponent } from './body-table-filter-doctor.component';

describe('BodyTableFilterDoctorComponent', () => {
  let component: BodyTableFilterDoctorComponent;
  let fixture: ComponentFixture<BodyTableFilterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTableFilterDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTableFilterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
