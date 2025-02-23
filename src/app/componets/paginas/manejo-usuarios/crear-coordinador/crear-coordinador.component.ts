import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule, NgClass} from '@angular/common';
import {Coordinador} from '../../../../model/Coordinador';
import {EmpleadoService} from '../../../../services/empleados.service';
import {CoordinadorService} from '../../../../services/coordinadores.service';

@Component({
  selector: 'app-crear-coordinador',
  imports: [RouterLink, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-coordinador.component.html',
  standalone: true,
  styleUrl: './crear-coordinador.component.css'
})
export class CrearCoordinadorComponent {

  formulario = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
    clave: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-zA-Z])(?=.*\d).+$')]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\+?\d{9,15}$/)]),
  });

  constructor(private coordinadorService: CoordinadorService, private router: Router) {}

  crearCoordinador(){
    const formValues = this.formulario.value;

    let coordinador = new Coordinador(
      this.coordinadorService.getNewId(),
      formValues.nombre ?? "",
      formValues.apellido ?? "",
      formValues.email ?? "",
      formValues.telefono ?? "",
      formValues.usuario ?? "",
      formValues.clave ?? "",
    );

    if(coordinador){
      this.coordinadorService.add(coordinador);
      this.router.navigate(['/login']);
    }
  }


}
