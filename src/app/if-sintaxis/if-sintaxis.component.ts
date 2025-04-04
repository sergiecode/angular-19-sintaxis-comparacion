import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-sintaxis',
  imports: [NgIf],
  templateUrl: './if-sintaxis.component.html',
  styleUrl: './if-sintaxis.component.css'
})
export class IfSintaxisComponent {
  mostrar = true;

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
