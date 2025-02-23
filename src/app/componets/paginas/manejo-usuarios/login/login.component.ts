import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoordinadorService } from '../../../../services/coordinadores.service';
import { EmpleadoService } from '../../../../services/empleados.service';
import { Coordinador } from '../../../../model/Coordinador';
import { Empleado } from '../../../../model/Empleado';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formulario = new FormGroup({
    usuario: new FormControl(''),
    clave: new FormControl(''),
  });

  coord?: Coordinador;
  empl?: Empleado;

  constructor(
    private router: Router,
    private coordinadorService: CoordinadorService,
    private empleadoService: EmpleadoService
  ) {}

  login() {
    const usuario = this.formulario.value.usuario;
    const clave = this.formulario.value.clave;

    console.log(usuario);
    console.log(clave);

    if (typeof usuario === 'string' && usuario.trim() !== '') {
      this.coord = this.coordinadorService.getCoordinadorByUsuario(usuario);
      this.empl = this.empleadoService.getCoordinadorByUsuario(usuario);
    }

    if (this.coord && this.coord.password == clave) {
      localStorage.setItem('usuario', JSON.stringify({ tipo: 'coordinador', data: this.coord }));
      this.router.navigate(['/coordinador/datos']);
      console.log("login coordinador !!!!!!!!!!!!!!!!!!!!");
    } else if (this.empl && this.empl.password == clave) {
      localStorage.setItem('usuario', JSON.stringify({ tipo: 'empleado', data: this.empl }));
      this.router.navigate(['/empleado/datos']);
      console.log("login empleados !!!!!!!!!!!!!!!!!!!!");
    }else{
      console.log("No login")
    }
  }
}

