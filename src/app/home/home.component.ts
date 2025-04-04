import { Component } from "@angular/core";

import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Podemos agregar funcionalidad según sea necesario
  currentYear = new Date().getFullYear();

  features = [
    {
      title: '@if / @else',
      description: 'La nueva sintaxis para condicionales reemplaza *ngIf con un enfoque más similar a JavaScript, permitiendo múltiples condiciones de manera clara y concisa.',
      icon: 'code-branch'
    },
    {
      title: '@switch',
      description: 'Crea bloques de casos múltiples con sintaxis nativa sin necesidad de las directivas ngSwitch, ngSwitchCase y ngSwitchDefault.',
      icon: 'exchange-alt'
    },
    {
      title: '@for',
      description: 'Reemplaza *ngFor con una sintaxis moderna que incluye tracking integrado y manejo nativo de estados vacíos usando @empty.',
      icon: 'sync'
    }
  ];

}
