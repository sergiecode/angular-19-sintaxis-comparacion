import { Component } from '@angular/core';
import { OldForSintaxisComponent } from "./old/old-sintaxis.component";
import { NewForSintaxisComponent } from "./new/new-sintaxis.component";

@Component({
  selector: 'app-for-sintaxis',
  imports: [OldForSintaxisComponent, NewForSintaxisComponent, NewForSintaxisComponent, OldForSintaxisComponent],
  templateUrl: './for-sintaxis.component.html',
  styleUrl: './for-sintaxis.component.css',
  standalone: true, // Comentar lo del Standalone No se necesita colocar más ahora es por default
})
export class ForSintaxisComponent {
  frutas = ['Manzana', 'Banana', 'Naranja', 'Pera'];
}
