import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, map, Observable} from 'rxjs';
import {Coordinador} from '../model/Coordinador';

@Injectable({
  providedIn: 'root',
})

export class CoordinadorService {
  private apiUrl = 'assets/coordinador.json';

  constructor(private http: HttpClient) {
    console.log('CoordinadorService inicializado');
  }

  getAll(): Observable<Coordinador[]> {
    return this.http.get<Coordinador[]>(this.apiUrl);
  }

  newId(): Observable<number> {
    return this.http.get<Coordinador[]>(this.apiUrl).pipe(
      map(lista => lista.length > 0 ? lista[lista.length - 1].id + 1 : 1)
    );
  }

async findUsuario(usuario: string): Promise<Coordinador | null> {
  try {
    const coordinadores = await firstValueFrom(this.getAll());
    return coordinadores.find(coord => coord.usuario === usuario) ?? null;
  } catch (error) {
    console.error('Error al obtener coordinadores:', error);
    return null;
  }
}


}
