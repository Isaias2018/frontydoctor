export class User {
    
    idUser: number;
    nombreUsuario: string;
    password: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    dni: string;
    correo: string;
    celular: string;
    fechaNacimiento: string;
    distrito: string;
    direccion: string;
    
    constructor(){
        this.idUser = 0;
        this.nombreUsuario = "";
        this.password = "";
        this.nombre = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.dni = "";
        this.correo = "";
        this.celular = "";
        this.fechaNacimiento = "";
        this.distrito = "";
        this.direccion = "";
    }
}