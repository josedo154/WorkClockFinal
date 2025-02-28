import { Injectable } from '@angular/core';
import { Empleado } from '../model/Empleado';
import { Jornada } from '../model/Jornada';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleados: Empleado[] = [
    {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Pérez",
      "correo": "juan.perez@ejemplo.com",
      "telefono": "123456789",
      "usuario": "empl1",
      "password": "empl_1",
      "idCoordinador": 1,
      "jornadas": [
        new Jornada(new Date("2025-02-24T08:00:00Z"), new Date("2025-02-24T16:00:00Z")),
        new Jornada(new Date("2025-02-25T09:00:00Z"), new Date("2025-02-25T17:00:00Z"))
      ]
    },
    {
      "id": 2,
      "nombre": "Ana",
      "apellido": "Gómez",
      "correo": "ana.gomez@ejemplo.com",
      "telefono": "234567890",
      "usuario": "empl2",
      "password": "empl_2",
      "idCoordinador": 1,
      "jornadas": [
        new Jornada(new Date("2025-02-24T07:30:00Z"), new Date("2025-02-24T15:30:00Z")),
        new Jornada(new Date("2025-02-25T08:30:00Z"), new Date("2025-02-25T16:30:00Z"))
      ]
    },
    {
      "id": 3,
      "nombre": "Carlos",
      "apellido": "Martínez",
      "correo": "carlos.martinez@ejemplo.com",
      "telefono": "345678901",
      "usuario": "empl3",
      "password": "empl_3",
      "idCoordinador": 2,
      "jornadas": [
        new Jornada(new Date("2025-02-24T10:00:00Z"), new Date("2025-02-24T18:00:00Z")),
        new Jornada(new Date("2025-02-25T11:00:00Z"), new Date("2025-02-25T19:00:00Z"))
      ]
    },
    {
      "id": 4,
      "nombre": "Lucía",
      "apellido": "López",
      "correo": "lucia.lopez@ejemplo.com",
      "telefono": "456789012",
      "usuario": "empl4",
      "password": "empl_4",
      "idCoordinador": 2,
      "jornadas": [
        new Jornada(new Date("2025-02-24T08:30:00Z"), new Date("2025-02-24T16:30:00Z")),
        new Jornada(new Date("2025-02-25T09:30:00Z"), new Date("2025-02-25T17:30:00Z"))
      ]
    },
    {
      "id": 5,
      "nombre": "Pedro",
      "apellido": "Ramírez",
      "correo": "pedro.ramirez@ejemplo.com",
      "telefono": "567890123",
      "usuario": "empl5",
      "password": "empl_5",
      "idCoordinador": 2,
      "jornadas": [
        new Jornada(new Date("2025-02-24T07:00:00Z"), new Date("2025-02-24T15:00:00Z")),
        new Jornada(new Date("2025-02-25T08:00:00Z"), new Date("2025-02-25T16:00:00Z"))
      ]
    },
    {
      "id": 6,
      "nombre": "María",
      "apellido": "Sánchez",
      "correo": "maria.sanchez@ejemplo.com",
      "telefono": "678901234",
      "usuario": "empl6",
      "password": "empl_6",
      "idCoordinador": 2,
      "jornadas": [
        new Jornada(new Date("2025-02-24T09:00:00Z"), new Date("2025-02-24T17:00:00Z")),
        new Jornada(new Date("2025-02-25T10:00:00Z"), new Date("2025-02-25T18:00:00Z"))
      ]
    }
  ];

  constructor() { }

  getEmpleados(): Empleado[] {
    return this.empleados;
  }

  getEmpleadoById(id: number): Empleado | undefined {
    return this.empleados.find(empleado => empleado.id === id);
  }

  getCoordinadorByUsuario(usuario: string): Empleado | undefined {
    return this.empleados.find(empleado => empleado.usuario === usuario);
  }

  add(empleado: Empleado): boolean {
    let elem = this.getCoordinadorByUsuario(empleado.usuario);

    if(elem == null) {
      this.empleados.push(empleado);
      return true;
    }

    return false;
  }

  getNewId(): number{
    return this.empleados[this.empleados.length - 1].id+1;
  }

  addJornada(id: number, jornada: Jornada){
    const empleado = this.getEmpleadoById(id);

    if(empleado != undefined){
      empleado.jornadas.push(jornada);
      console.log(jornada);
      console.log(empleado.jornadas);
      return true;
    }

    return false;
  }

  getJornada(id: number){
    const empleado = this.getEmpleadoById(id);
    return empleado?.jornadas;
  }

}
