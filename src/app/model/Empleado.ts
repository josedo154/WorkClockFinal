import {Jornada} from './Jornada';
import { hashPassword, validatePassword } from '../../funcionalidades/hast';

export class Empleado {
  id: number;

  /*Datos personales*/
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;

  /*usuario*/
  usuario: string;
  password: string;

  /*datos relacionales*/
  idCoordinador: number;
  jornadas: Jornada[] = [];

  constructor(id:number, nombre: string, apellido: string, correo: string, telefono: string, usuario: string, password: string, idCoordinador: number) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.telefono = telefono;
    this.usuario = usuario;
    this.password = password;
    this.idCoordinador = idCoordinador;
  }

}
