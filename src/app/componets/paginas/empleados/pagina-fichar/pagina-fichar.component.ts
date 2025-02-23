import { Component } from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {BotonFicharComponent} from '../../../boton-fichar/boton-fichar.component';

@Component({
  selector: 'app-pagina-fichar',
  imports: [
    HeaderComponent,
    BotonFicharComponent
  ],
  templateUrl: './pagina-fichar.component.html',
  standalone: true,
  styleUrl: './pagina-fichar.component.css'
})
export class PaginaFicharComponent {

}
