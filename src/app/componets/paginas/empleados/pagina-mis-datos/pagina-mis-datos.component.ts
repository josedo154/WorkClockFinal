import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { Empleado } from '../../../../model/Empleado';
import { Coordinador } from '../../../../model/Coordinador';
import { CoordinadorService } from '../../../../services/coordinadores.service';

@Component({
  selector: 'app-pagina-mis-datos',
  imports: [
    HeaderComponent
  ],
  templateUrl: './pagina-mis-datos.component.html',
  standalone: true,
  styleUrl: './pagina-mis-datos.component.css'
})
export class PaginaMisDatosComponent implements OnInit {
  empleado: any = undefined;
  coordinador: any = undefined;

  constructor(private coordinadorService: CoordinadorService) {}

  ngOnInit(): void {
    const empleadoData = localStorage.getItem("usuario");

    if (empleadoData) {
      this.empleado = JSON.parse(empleadoData);

      if (this.empleado?.idCoordinador) {
        this.coordinador = this.coordinadorService.getCoordinadorById(this.empleado.data.idCoordinador);
      }
    }

    console.log(this.empleado.data.idCoordinador);
    console.log(this.empleado);
    console.log(this.coordinador);
  }
}

