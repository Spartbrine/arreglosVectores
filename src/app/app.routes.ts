import { Routes } from '@angular/router';
import { InvertArrayComponent } from './components/invert-array/invert-array.component';
import { SearchInMatrixComponent } from './components/search-in-matrix/search-in-matrix.component';
import { PesosComponent } from './components/pesos/pesos.component';
import { CursosPromedioComponent } from './components/cursos-promedio/cursos-promedio.component';
import { SueldoEmpleadosComponent } from './components/sueldo-empleados/sueldo-empleados.component';

export const routes: Routes = [
  { path: 'invertir-arreglo', component: InvertArrayComponent },
  { path: 'buscar-matriz', component: SearchInMatrixComponent },
  { path: 'pesos', component: PesosComponent },
  { path: 'promedio-cursos', component: CursosPromedioComponent },
  { path: 'sueldo-empleados', component: SueldoEmpleadosComponent },
  { path: '', redirectTo: '/invertir-arreglo', pathMatch: 'full' } // Ruta por defecto
];
