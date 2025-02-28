import { hashPassword, validatePassword } from '../../funcionalidades/hast';

export class Coordinador {
  id: number;

  /*Datos Personales*/
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;

  /*usuario*/
  usuario: string;
  password: string;

  /*datos relacionales*/
  listaIdEmpleados: number[] = [];

  constructor(id:number, nombre: string, apellido: string, correo: string, telefono: string, usuario: string, password: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.telefono = telefono;
    this.usuario = usuario;
    this.password = password;
  }
}
