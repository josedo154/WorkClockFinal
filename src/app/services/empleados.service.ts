import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, map, Observable} from 'rxjs';
import {Empleado} from '../model/Empleado';


@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private apiUrl = 'assets/empleados.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  newId(): Observable<number> {
    return this.http.get<Empleado[]>(this.apiUrl).pipe(
      map(lista => lista.length > 0 ? lista[lista.length - 1].id + 1 : 1)
    );
  }

  async findUsuario(usuario: string): Promise<Empleado | null> {
    try {
      const empleados = await firstValueFrom(this.getAll());
      return empleados.find(coord => coord.usuario === usuario) ?? null;
    } catch (error) {
      console.error('Error al obtener coordinadores:', error);
      return null;
    }
  }
}
