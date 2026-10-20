import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio'; 
import { Destinos } from './destinos/destinos';
import { Reservas } from './reservas/reservas';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige al inicio por defecto
  { path: 'inicio', component: Inicio },
  { path: 'destinos', component: Destinos },
  { path: 'reservas', component: Reservas },
  { path: '**', redirectTo: 'inicio' } // Ruta comodín por si escriben mal una URL
];