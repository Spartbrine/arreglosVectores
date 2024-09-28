import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos-promedio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cursos-promedio.component.html',
  styleUrl: './cursos-promedio.component.scss'
})
export class CursosPromedioComponent {
  cursos = [
    { nombre: 'Estructura de Datos', notas: [0, 0, 0, 0, 0], promedio: 0 },
    { nombre: 'Desarrollo de Aplicaciones', notas: [0, 0, 0, 0, 0], promedio: 0 },
    { nombre: 'Ingeniería de Software', notas: [0, 0, 0, 0, 0], promedio: 0 },
    { nombre: 'Administración de Bases de Datos', notas: [0, 0, 0, 0, 0], promedio: 0 },
    { nombre: 'Inglés IV', notas: [0, 0, 0, 0, 0], promedio: 0 }
  ];

  cursosConMayorPromedio: { nombre: string; promedio: number }[] = [];

  calcularPromedios() {
    const maxPromedio = Math.max(...this.cursos.map(curso => this.calcularPromedio(curso.notas)));

    this.cursosConMayorPromedio = this.cursos
      .filter(curso => this.calcularPromedio(curso.notas) === maxPromedio)
      .map(curso => ({
        nombre: curso.nombre,
        promedio: this.calcularPromedio(curso.notas)
      }));
  }

  private calcularPromedio(notas: number[]): number {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length || 0; // Evita NaN si no hay notas
  }
}
