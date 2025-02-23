import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {CoordinadorService} from '../../../../services/coordinadores.service';
import { CommonModule } from '@angular/common';
import {EmpleadoService} from '../../../../services/empleados.service';


@Component({
  selector: 'app-pagina-crud-empleados',
  imports: [
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './pagina-crud-empleados.component.html',
  standalone: true,
  styleUrl: './pagina-crud-empleados.component.css'
})
export class PaginaCrudEmpleadosComponent implements OnInit {
  coordinador: any = undefined;
  empleados: any[] =[];
  empleado: any = undefined;

  constructor(private coordinadorService: CoordinadorService, private empleadoService: EmpleadoService) {
  }

  ngOnInit(): void {
    const cordData = localStorage.getItem("usuario");

    if (cordData) {
      this.coordinador = JSON.parse(cordData);
    }

    this.empleados = this.coordinadorService.getEmpleados(this.coordinador.data.id);

    console.log(this.coordinador);
    console.log(this.empleados);
  }

  mostrarJornada(id: number){
    this.empleado= this.empleadoService.getEmpleadoById(id);
    this.empleado = this.empleado.jornadas;
    console.log(this.empleado);
  }

  calcularTiempo(inicio: Date, fin: Date): string {
    const inicioMs = new Date(inicio).getTime();
    const finMs = new Date(fin).getTime();
    const diferenciaMs = finMs - inicioMs;

    const horas = Math.floor(diferenciaMs / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${horas}h ${minutos}min`;
  }
}
