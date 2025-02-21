import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CoordinadorService } from '../../../../services/coordinador.service';
import { EmpleadosService } from '../../../../services/empleados.service';
import { Coordinador } from '../../../../model/Coordinador';
import { Empleado } from '../../../../model/Empleado';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formulario = new FormGroup({
    usuario: new FormControl(''),
    clave: new FormControl(''),
  });

  constructor(
    private router: Router,
    private servicioCoord: CoordinadorService,
    private serviceEmp: EmpleadosService
  ) {}

  async validacionLogin() {
    const user = this.formulario.value.usuario;
    if (!user) {
      console.log('Por favor, ingrese un usuario.');
      return;
    }

    try {
      const coord = await this.servicioCoord.findUsuario(user);
      const empl = await this.serviceEmp.findUsuario(user);

      if (coord) {
        console.log('Coordinador encontrado:', coord);
      } else if (empl) {
        console.log('Empleado encontrado:', empl);
      } else {
        console.log('No se encontró el usuario.');
      }
    } catch (error) {
      console.error('Error al realizar la validación del login:', error);
    }
  }
}
