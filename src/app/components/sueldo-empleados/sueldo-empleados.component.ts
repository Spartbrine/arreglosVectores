import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sueldo-empleados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sueldo-empleados.component.html',
  styleUrl: './sueldo-empleados.component.scss'
})
export class SueldoEmpleadosComponent {
  empleados: { nombre: string, inputSueldos: string, sueldos: number[] }[] = [
    { nombre: 'Juan', inputSueldos: '1000,1200,1100,1300,1250', sueldos: [] },
    { nombre: 'María', inputSueldos: '1100,1150,1180,1250,1200', sueldos: [] },
    { nombre: 'Carlos', inputSueldos: '900,950,920,1100,1050', sueldos: [] },
    { nombre: 'Lucía', inputSueldos: '1300,1350,1400,1450,1500', sueldos: [] },
    { nombre: 'Ana', inputSueldos: '1200,1250,1300,1350,1400', sueldos: [] }
  ];

  totalPagado: number = 0;
  empleadoMayorIngreso: string = '';

  constructor() {
    this.actualizarDatos();
  }

  actualizarEmpleado(empleado: { nombre: string, inputSueldos: string, sueldos: number[] }) {
    empleado.sueldos = empleado.inputSueldos.split(',').map(Number);
    this.actualizarDatos();
  }

  actualizarDatos() {
    this.totalPagado = this.calcularTotalPagado();
    this.empleadoMayorIngreso = this.calcularMayorIngreso();
  }

  calcularTotalPagado(): number {
    return this.empleados.reduce((total, empleado) => total + empleado.sueldos.reduce((acc, sueldo) => acc + sueldo, 0), 0);
  }

  calcularMayorIngreso(): string {
    const ingresos = this.empleados.map(empleado => ({
      nombre: empleado.nombre,
      ingresoTotal: empleado.sueldos.reduce((acc, sueldo) => acc + sueldo, 0)
    }));

    const mayorIngreso = Math.max(...ingresos.map(e => e.ingresoTotal));

    return ingresos.find(e => e.ingresoTotal === mayorIngreso)?.nombre || '';
  }
}
