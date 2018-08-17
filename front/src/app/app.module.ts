import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { PratoComponent } from './prato/prato.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteEditarComponent } from './restaurante/editar/editar.component';
import { PratoEditarComponent } from './prato/editar/editar.component';
import { RestauranteDeletarComponent } from './restaurante/deletar/deletar.component';
import { PratoDeletarComponent } from './prato/deletar/deletar.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    PratoComponent,
    PratoEditarComponent,
    PratoDeletarComponent,
    RestauranteComponent,
    RestauranteEditarComponent,
    RestauranteDeletarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
