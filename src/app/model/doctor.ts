import { Speciality } from "./speciality";
import { User } from "./user";

export class Doctor {
    idDoctor: number;
    dniFoto: string;
    disponibilidad: boolean;
    habilitado: boolean;
    numeroColegiatura: boolean;
    centroLabor: string;
    tarifa: boolean
    usuario: User;
    especialidad: Speciality;
    
    constructor(){
        this.idDoctor = 0;
        this.dniFoto = "";
        this.disponibilidad = false;
        this.habilitado = false;
        this.numeroColegiatura = false;
        this.centroLabor = "";
        this.tarifa = false
        this.usuario = new User();
        this.especialidad = new Speciality();
    }
}
