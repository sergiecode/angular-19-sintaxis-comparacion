import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IfSintaxisComponent } from './if-sintaxis/if-sintaxis.component';
import { SwitchSintaxisComponent } from './switch-sintaxis/switch-sintaxis.component';
import { ForSintaxisComponent } from './for-sintaxis/for-sintaxis.component';
import { PruebasComponent } from './pruebas/pruebas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'if-sintaxis', component: IfSintaxisComponent },
    { path: 'switch-sintaxis', component: SwitchSintaxisComponent },
    { path: 'for-sintaxis', component: ForSintaxisComponent },
    { path: 'pruebas', component: PruebasComponent },
    { path: '**', redirectTo: '' }
];

