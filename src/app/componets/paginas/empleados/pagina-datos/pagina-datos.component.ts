import { Component } from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {Jornada} from '../../../../model/Jornada';
import { CommonModule } from '@angular/common';
import {EmpleadoService} from '../../../../services/empleados.service';

@Component({
  selector: 'app-pagina-datos',
  imports: [
    HeaderComponent,
    CommonModule,
  ],
  templateUrl: './pagina-datos.component.html',
  standalone: true,
  styleUrl: './pagina-datos.component.css'
})

export class PaginaDatosComponent {
  empleado: any = {};
  jornadas: Jornada[] | undefined;

  constructor(private empleadoService: EmpleadoService) {
  }

  ngOnInit(): void {
    const empleadoData = localStorage.getItem("usuario");

    if (empleadoData) {
      this.empleado = JSON.parse(empleadoData);
      this.jornadas = this.empleadoService.getJornada(this.empleado.data.id);
    } else {
      this.jornadas = [];
    }

    console.log(this.jornadas);
  }
}

