import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {SelecionCuentaComponent} from './componets/paginas/manejo-usuarios/selecion-cuenta/selecion-cuenta.component';
import {LoginComponent} from './componets/paginas/manejo-usuarios/login/login.component';
import {CrearEmpleadoComponent} from './componets/paginas/manejo-usuarios/crear-empleado/crear-empleado.component';
import {CrearCoordinadorComponent} from './componets/paginas/manejo-usuarios/crear-coordinador/crear-coordinador.component';
import {
  PaginaCrudEmpleadosComponent
} from './componets/paginas/coordinador/pagina-crud-empleados/pagina-crud-empleados.component';
import {
  PaginaDatosCordinadorComponent
} from './componets/paginas/coordinador/pagina-datos-cordinador/pagina-datos-cordinador.component';
import {PaginaDatosComponent} from './componets/paginas/empleados/pagina-datos/pagina-datos.component';
import {PaginaFicharComponent} from './componets/paginas/empleados/pagina-fichar/pagina-fichar.component';
import {PaginaMisDatosComponent} from './componets/paginas/empleados/pagina-mis-datos/pagina-mis-datos.component';

export const routes: Routes = [
  /*Manejo de cuentas*/
  { path: '', component: SelecionCuentaComponent },
  { path: 'login', component: LoginComponent},
  { path: 'crear-empleado', component: CrearEmpleadoComponent},
  { path: 'crear-coordinador', component: CrearCoordinadorComponent },

  /*Coordinador*/
  { path: 'coordinador/crudEmpleados', component: PaginaCrudEmpleadosComponent },
  { path: 'coordinador/datos', component: PaginaDatosCordinadorComponent },

  /*Empleados*/
  { path: 'empleado/datos', component: PaginaDatosComponent },
  { path: 'empleado/fichar', component: PaginaFicharComponent },
  { path: 'empleado/mis-datos', component: PaginaMisDatosComponent },
];
