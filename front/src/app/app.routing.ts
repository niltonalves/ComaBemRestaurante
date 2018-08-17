import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PratoComponent } from './prato/prato.component';
import { Restaurante } from './restaurante/class/restaurante';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PratoEditarComponent } from './prato/editar/editar.component';
import { RestauranteEditarComponent } from './restaurante/editar/editar.component';
import { PratoDeletarComponent } from './prato/deletar/deletar.component';
import { RestauranteDeletarComponent } from './restaurante/deletar/deletar.component';

export const AppRoutes = [
  // home
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // restaurante
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'restaurante/novo', component: RestauranteEditarComponent },
  { path: 'restaurante/editar/:id', component: RestauranteEditarComponent },
  { path: 'restaurante/deletar/:id/:nome', component: RestauranteDeletarComponent },
  // prato
  { path: 'prato', component: PratoComponent },
  { path: 'prato/novo', component: PratoEditarComponent },
  { path: 'prato/editar/:id', component: PratoEditarComponent },
  { path: 'prato/deletar/:id/:nome', component: PratoDeletarComponent },
];
