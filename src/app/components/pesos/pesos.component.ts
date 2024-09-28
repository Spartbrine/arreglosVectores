import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pesos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pesos.component.html',
  styleUrl: './pesos.component.scss'
})
export class PesosComponent {
  inputPesos: string = '70,80,60,75,90,85,65,78,72,88';
  pesos: number[] = [];
  promedio: number = 0;
  masAltos: number = 0;
  masBajos: number = 0;

  constructor() {
    this.actualizarPesos();
  }

  actualizarPesos() {
    this.pesos = this.inputPesos.split(',').map(Number);
    this.promedio = this.calcularPromedio(this.pesos);
    this.masAltos = this.contarPersonasPorCondicion(this.pesos, peso => peso > this.promedio);
    this.masBajos = this.contarPersonasPorCondicion(this.pesos, peso => peso < this.promedio);
  }

  calcularPromedio(pesos: number[]): number {
    const total = pesos.reduce((acc, peso) => acc + peso, 0);
    return total / pesos.length;
  }

  contarPersonasPorCondicion(pesos: number[], condicion: (peso: number) => boolean): number {
    return pesos.filter(condicion).length;
  }
}
