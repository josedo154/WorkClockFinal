import {Component, OnInit} from '@angular/core';
import {Coordinador} from '../../model/Coordinador';
import {Empleado} from '../../model/Empleado';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  usuario: any;
  mode= "";

  constructor(private router: Router) {}


  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
    }

    if (this.usuario && this.usuario.tipo === 'coordinador') {
      this.mode = 'coordinador';
    } else if (this.usuario && this.usuario.tipo === 'empleado') {
      this.mode = 'empleado';
    }

    console.log(this.usuario);
    console.log(this.mode);
  }
}
