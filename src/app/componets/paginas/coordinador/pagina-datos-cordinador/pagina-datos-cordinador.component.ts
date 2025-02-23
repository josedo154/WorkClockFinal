import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {CoordinadorService} from '../../../../services/coordinadores.service';

@Component({
  selector: 'app-pagina-datos-cordinador',
  imports: [
    HeaderComponent
  ],
  templateUrl: './pagina-datos-cordinador.component.html',
  standalone: true,
  styleUrl: './pagina-datos-cordinador.component.css'
})
export class PaginaDatosCordinadorComponent implements OnInit {
  coordinador: any = undefined;

  constructor(private coordinadorService: CoordinadorService) {

  }

  ngOnInit(): void {
    const cordData = localStorage.getItem("usuario");

    if (cordData) {
      this.coordinador = JSON.parse(cordData);
    }

    console.log(this.coordinador);
  }


}
