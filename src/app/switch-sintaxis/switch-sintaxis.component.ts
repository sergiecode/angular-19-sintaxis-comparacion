import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-sintaxis',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './switch-sintaxis.component.html',
  styleUrl: './switch-sintaxis.component.css'
})
export class SwitchSintaxisComponent {
  opcion = 'A';
  
  cambiarOpcion(nuevaOpcion: string) {
    this.opcion = nuevaOpcion;
  }
}
