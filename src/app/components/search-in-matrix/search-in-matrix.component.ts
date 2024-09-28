import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-in-matrix',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-in-matrix.component.html',
  styleUrl: './search-in-matrix.component.scss'
})
export class SearchInMatrixComponent {
  matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  valorBuscado: number | null = null;
  encontrado: boolean | null = null;

  buscarValor() {
    if (this.valorBuscado === null) {
      this.encontrado = null;
      return;
    }

    this.encontrado = this.matriz.some(fila => fila.includes(Number(this.valorBuscado)));
  }
}
