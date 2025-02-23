import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HttpClientModule,
  RouterModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WorkClockFinal';
}
