import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { Speciality } from 'src/app/model/speciality';
import { DistricService } from 'src/app/services/distric/distric.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { SpecialityService } from 'src/app/services/speciality/spreciality.service';

interface doctorInterface {
  name: string;
  firstLastName: string;
  secondLastName: string;
  dni: string;
  birthday: string;
  phone: string;
  email: string;
  distric: string;
  address: string;
  specialty: string;
  state: string;
  workplace: string;
  tuitionNumber: string;
}

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {

  doctorInterface: any;
  data: Doctor = new Doctor();
  formDoctor: FormGroup;
  verification: boolean = false;
  districsList: Array<string> = new Array<string>(); 
  specialityList: Array<Speciality> = new Array<Speciality>();

  constructor(private doctorService: DoctorService, private districService: DistricService, private specialityService: SpecialityService, private formBuilder: FormBuilder, private router: Router) {
    this.formDoctor = this.formBuilder.group({})

   }

  ngOnInit(): void {
    if(this.doctorService.getDoctor().idDoctor == 0 ) {
      this.router.navigateByUrl('list-doctors');
    }

    this.data = this.doctorService.getDoctor();
    this.verification = this.data.habilitado;
    this.districsList = this.districService.getDistricsList();
    this.specialityService.findSpecialityList().subscribe(data => {
      this.specialityList = data;
    });
    this.createForm();

  }

  changeVerification()
  {
    this.verification = !this.verification;
  }
  
  createForm()
  {
    this.formDoctor = this.formBuilder.group({
      name:   [this.data.usuario.nombre, Validators.required],
      firstLastName: [this.data.usuario.apellidoPaterno, Validators.required],
      secondLastName: [this.data.usuario.apellidoMaterno, Validators.required],
      dni: [this.data.usuario.dni, Validators.required],
      birthday: [this.data.usuario.fechaNacimiento, Validators.required],
      phone: [this.data.usuario.celular, Validators.required],
      email: [this.data.usuario.correo, Validators.required],
      distric: [this.data.usuario.distrito, Validators.required],
      address: [this.data.usuario.direccion, Validators.required],
      speciality: [this.data.especialidad.nombre, Validators.required],
      state: [this.data.habilitado, Validators.required],
      workplace: [this.data.centroLabor],
      tuitionNumber: [this.data.numeroColegiatura],
            
    })
    
  }

  editDoctor()
  {
    this.doctorInterface = this.formDoctor.value as doctorInterface;

    this.data.usuario.nombre = this.doctorInterface.name;
    this.data.usuario.apellidoPaterno = this.doctorInterface.firstLastName;
    this.data.usuario.apellidoMaterno = this.doctorInterface.secondLastName;
    this.data.usuario.dni = this.doctorInterface.dni;
    this.data.usuario.fechaNacimiento = this.doctorInterface.birthday;
    this.data.usuario.celular = this.doctorInterface.phone;
    this.data.usuario.correo = this.doctorInterface.email;
    this.data.usuario.distrito = this.doctorInterface.distric;
    this.data.usuario.direccion = this.doctorInterface.address;
    this.data.especialidad.nombre = this.doctorInterface.specialty;
    this.data.habilitado = this.verification;
    this.data.centroLabor = this.doctorInterface.workplace;
    this.data.numeroColegiatura = this.doctorInterface.tuitionNumber;

    this.doctorService.editDoctors(this.data).subscribe(() => {
    });
    
    this.doctorService.findDoctors().subscribe((request) => {
      this.doctorService.setDoctorsList(request);
    })

    this.doctorService.clearDoctor();
    this.router.navigateByUrl('admin/doctor/list');
  }
  
}