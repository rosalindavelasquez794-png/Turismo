import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Destino {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: string;
  duracion: string;
}

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destinos.html',
  styleUrl: './destinos.css',
})
export class Destinos {
  
  destinosList: Destino[] = [
    {
      id: 1,
      nombre: 'Salar de Uyuni & Desierto',
      descripcion: 'Una experiencia mágica reflejando el cielo en el espejo de sal más grande del mundo.',
      imagen: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=800&auto=format&fit=crop',
      precio: '$150',
      duracion: '3 Días / 2 Noches'
    },
    {
      id: 2,
      nombre: 'Lago Titicaca y Isla del Sol',
      descripcion: 'Navega por las aguas navegables más altas del mundo y descubre paisajes andinos únicos.',
      imagen: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      precio: '$90',
      duracion: '2 Días / 1 Noche'
    },
    {
      id: 3,
      nombre: 'Parque Nacional Amboró',
      descripcion: 'Sumérgete en la biodiversidad de la selva tropical con cascadas y senderos ocultos.',
      imagen: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop',
      precio: '$120',
      duracion: 'Full Day'
    }
  ];

  seleccionarDestino(destino: Destino): void {
    console.log(`Destino seleccionado para reserva: ${destino.nombre}`);
  }
}