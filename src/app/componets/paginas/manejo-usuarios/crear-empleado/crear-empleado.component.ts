import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {Empleado} from '../../../../model/Empleado';
import {EmpleadoService} from '../../../../services/empleados.service';

@Component({
  selector: 'app-crear-empleado',
  imports: [RouterLink, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-empleado.component.html',
  standalone: true,
  styleUrl: './crear-empleado.component.css',
  providers: [EmpleadoService]
})

export class CrearEmpleadoComponent {

  formulario = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
    clave: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-zA-Z])(?=.*\d).+$')]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\+?\d{9,15}$/)]),
    coordinador: new FormControl('', [Validators.required]),
  });

  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  crearEmpleado(){
    const formValues = this.formulario.value;

    let empleado = new Empleado(
      this.empleadoService.getNewId(),
      formValues.nombre ?? "",
      formValues.apellido ?? "",
      formValues.email ?? "",
      formValues.telefono ?? "",
      formValues.usuario ?? "",
      formValues.clave ?? "",
      Number(formValues.coordinador) ?? 0
    );

    if(empleado){
      this.empleadoService.add(empleado);
      this.router.navigate(['/login']);
    }
  }
}
