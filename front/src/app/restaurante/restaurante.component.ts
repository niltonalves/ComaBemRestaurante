import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './service/restaurante.service';
import { Restaurante } from './class/restaurante';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [RestauranteService]
})
export class RestauranteComponent implements OnInit {
  restaurantes: Restaurante[];
  filtroNome: string;

  constructor(
    private route: ActivatedRoute,
    private service: RestauranteService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getRestaurantes();
  }
  getRestaurantes() {
    this.service.getRestaurantes().subscribe(retorno => this.restaurantes = retorno,
      error => { console.error('erro carregar api'); });
  }
  filtrar() {
    if (this.filtroNome) {
      this.restaurantes = this.restaurantes.filter(
        filtro => filtro.nome.toUpperCase().indexOf(this.filtroNome.toUpperCase()) !== -1
      );
    } else {
      this.getRestaurantes();
    }
  }
}
