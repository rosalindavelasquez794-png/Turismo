import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  irADestinos(): void {
    console.log('Navegando hacia la lista de destinos...');
  }

  irAReservas(): void {
    console.log('Navegando hacia la sección de reservas...');
  }
}
