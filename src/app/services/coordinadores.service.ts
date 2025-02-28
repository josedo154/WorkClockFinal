import { Injectable } from '@angular/core';
import { Coordinador } from '../model/Coordinador';
import {Jornada} from '../model/Jornada';
import {EmpleadoService} from './empleados.service';
import {Empleado} from '../model/Empleado';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {

  private coordinadores: Coordinador[] = [
    {
      "id": 1,
      "nombre": "Luis",
      "apellido": "Fernández",
      "correo": "luis.fernandez@ejemplo.com",
      "telefono": "789012345",
      "usuario": "cord1",
      "password": "cord_1",
      "listaIdEmpleados": [1,2]
    },
    {
      "id": 2,
      "nombre": "Marta",
      "apellido": "Díaz",
      "correo": "marta.diaz@ejemplo.com",
      "telefono": "890123456",
      "usuario": "cord2",
      "password": "cord_2",
      "listaIdEmpleados": [3,4,5,6]
    },
    {
      "id": 3,
      "nombre": "Sofía",
      "apellido": "García",
      "correo": "sofia.garcia@ejemplo.com",
      "telefono": "901234567",
      "usuario": "cord3",
      "password": "cord_3",
      "listaIdEmpleados": []
    }
  ];

  constructor(private empleadoService: EmpleadoService) { }

  getCoordinadores(): Coordinador[] {
    return this.coordinadores;
  }

  getCoordinadorById(id: number): Coordinador | undefined {
    return this.coordinadores.find(coordinador => coordinador.id === id);
  }

  getCoordinadorByUsuario(usuario: string): Coordinador | undefined {
    return this.coordinadores.find(coordinador => coordinador.usuario === usuario);
  }

  add(coordinador: Coordinador): boolean {
    let elem = this.getCoordinadorByUsuario(coordinador.usuario);

    if(elem == null) {
      this.coordinadores.push(coordinador);
      return true;
    }

    return false;
  }

  getNewId(): number{
    return this.coordinadores[this.coordinadores.length - 1].id+1;
  }

  getJornada(id: number){
    return this.empleadoService.getJornada(id);
  }

  getEmpleados(id: number, empleadosProcesados: Set<number> = new Set()): Empleado[] {
    let empleados: Empleado[] = [];

    if (empleadosProcesados.has(id)) {
      return empleados;
    }
    empleadosProcesados.add(id);

    const coordinador = this.getCoordinadorById(id);
    if (!coordinador) {
      return empleados;
    }

    for (let idEmpleado of coordinador.listaIdEmpleados) {
      if (!empleadosProcesados.has(idEmpleado)) {
        const empleado = this.empleadoService.getEmpleadoById(idEmpleado);
        if (empleado) {
          empleados.push(empleado);
          empleados.push(...this.getEmpleados(idEmpleado, empleadosProcesados));
        }
      }
    }

    return empleados;
  }

}
