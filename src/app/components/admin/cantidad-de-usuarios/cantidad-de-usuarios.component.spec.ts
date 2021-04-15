import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadDeUsuariosComponent } from './cantidad-de-usuarios.component';

describe('CantidadDeUsuariosComponent', () => {
  let component: CantidadDeUsuariosComponent;
  let fixture: ComponentFixture<CantidadDeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadDeUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
