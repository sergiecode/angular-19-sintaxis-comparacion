import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-sintaxis',
  imports: [NgFor],
  templateUrl: './for-sintaxis.component.html',
  styleUrl: './for-sintaxis.component.css'
})
export class ForSintaxisComponent {
  frutas = ['Manzana', 'Banana', 'Naranja', 'Pera'];
}
