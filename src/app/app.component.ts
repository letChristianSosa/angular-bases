import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 0;

  base: number = 5;

  // sumar(): void {
  //   this.numero += 1;
  // }
  // restar(): void {
  //   this.numero -= 1;
  // }
  acumular(valor: number) {
    this.numero += valor;
  }
}
