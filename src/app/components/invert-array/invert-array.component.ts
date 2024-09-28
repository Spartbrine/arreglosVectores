import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invert-array',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invert-array.component.html',
  styleUrl: './invert-array.component.scss'
})
export class InvertArrayComponent {
  inputArray: string = '1,2,3,4,5';
  originalArray: number[] = [];
  reversedArray: number[] = [];

  constructor() {
    this.updateArray();
  }

  updateArray() {
    this.originalArray = this.inputArray.split(',').map(Number);
    this.reversedArray = this.invertirArreglo(this.originalArray);
  }

  invertirArreglo(arr: number[]): number[] {
    return [...arr].reverse();
  }
}
