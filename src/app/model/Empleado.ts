export class Empleado {
  id: number;
  private static nextId = 1;

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

  constructor(nombre: string, apellido: string, correo: string, telefono: string, usuario: string, password: string, idCoordinador: number) {
    this.id = Empleado.nextId++;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.telefono = telefono;
    this.usuario = usuario;
    this.password = password;
    this.idCoordinador = idCoordinador;
  }

}
