import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css',
})
export class Reservas {
  reservaForm: FormGroup;
  reservaExitosa: boolean = false;

  destinosDisponibles: string[] = [
    'Salar de Uyuni & Desierto',
    'Lago Titicaca y Isla del Sol',
    'Parque Nacional Amboró'
  ];

  constructor(private fb: FormBuilder) {
    this.reservaForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{7,15}$/)]],
      destino: ['', Validators.required],
      fechaViaje: ['', Validators.required],
      cantidadPersonas: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  onSubmit(): void {
    if (this.reservaForm.valid) {
      console.log('Datos de la reserva:', this.reservaForm.value);
      this.reservaExitosa = true;

    } else {
      this.reservaForm.markAllAsTouched();
    }
  }

  nuevaReserva(): void {
    this.reservaExitosa = false;
    this.reservaForm.reset({ cantidadPersonas: 1 });
  }
}