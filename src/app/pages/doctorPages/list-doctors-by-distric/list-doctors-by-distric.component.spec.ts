import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorsByDistricComponent } from './list-doctors-by-distric.component';

describe('ListDoctorsByDistricComponent', () => {
  let component: ListDoctorsByDistricComponent;
  let fixture: ComponentFixture<ListDoctorsByDistricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoctorsByDistricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorsByDistricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
