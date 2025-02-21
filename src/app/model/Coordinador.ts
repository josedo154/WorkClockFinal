export class Coordinador {
  private static nextId = 1;
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

  constructor(nombre: string, apellido: string, correo: string, telefono: string, usuario: string, password: string) {
    this.id = Coordinador.nextId++;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.telefono = telefono;
    this.usuario = usuario;
    this.password = password;
  }
}
