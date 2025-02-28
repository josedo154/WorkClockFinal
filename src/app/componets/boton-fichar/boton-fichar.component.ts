import { Component } from '@angular/core';
import {Jornada} from '../../model/Jornada';
import {EmpleadoService} from '../../services/empleados.service';
import {Empleado} from '../../model/Empleado';
import {DatePipe} from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-fichar',
  imports: [
    DatePipe,
    CommonModule,
  ],
  templateUrl: './boton-fichar.component.html',
  standalone: true,
  styleUrl: './boton-fichar.component.css'
})
export class BotonFicharComponent {
  empleado = JSON.parse(localStorage.getItem("usuario") || '{}');
  jornada: Jornada = new Jornada()
  mode: string = "";

  constructor(private empleadoService: EmpleadoService) {
  }

  inicio(){
    this.mode = "iniciada"
    this.jornada.setInicio(new Date (Date.now()));
    console.log(this.jornada);
  }

  fin(){
    console.log(this.empleado.data.id);
    console.log(this.empleado);
    this.mode= "";
    this.jornada.setFin(new Date (Date.now()));
    this.empleadoService.addJornada(this.empleado.data.id,this.jornada);
    console.log(this.jornada);
    this.jornada = new Jornada()
  }
}
