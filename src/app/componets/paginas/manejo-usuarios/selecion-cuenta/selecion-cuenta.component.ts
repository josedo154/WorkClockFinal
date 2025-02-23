import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-selecion-cuenta',
  imports: [RouterLink],
  templateUrl: './selecion-cuenta.component.html',
  standalone: true,
  styleUrl: './selecion-cuenta.component.css'
})

export class SelecionCuentaComponent {
  ngOnInit(): void {
    console.log('Clear LocalStore');
    localStorage.clear();
  }
}
