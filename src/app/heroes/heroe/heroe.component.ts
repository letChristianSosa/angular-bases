import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Star Lord';
  edad: number = 38;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = this.nombre === 'Star Lord' ? 'Spiderman' : 'Star Lord';
  }

  cambiarEdad(): void {
    this.edad = this.edad === 38 ? 20 : 38;
  }
}
