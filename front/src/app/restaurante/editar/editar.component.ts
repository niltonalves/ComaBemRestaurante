import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Restaurante } from '../class/restaurante';
import { RestauranteService } from '../service/restaurante.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Location, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [RestauranteService]
})
export class RestauranteEditarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: RestauranteService,
    private location: Location,

  ) {
    this.formValidator();
  }
  submetido: boolean;
  formCadastro: FormGroup;
  restaurante: Restaurante;

  get f() { return this.formCadastro.controls; }
  ngOnInit() {
    if (this.restaurante === undefined) {
      this.restaurante = new Restaurante();
    }
    this.carregarRestaurante();
  }

  formValidator() {
    this.formCadastro = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  carregarRestaurante() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.getRestaurante(id).subscribe(retorno => {
          this.restaurante = retorno;
        },
          error => console.error('Erro ao carregar a api')
        );
      }
    });
  }


  salvar(): void {

    this.submetido = true;

    if (this.formCadastro.invalid) {
      return;
    }

    if (this.restaurante.id) {
      this.service.editRestaurante(this.restaurante).subscribe(retorno => this.redirect());
    } else {
      this.service.addRestaurante(this.restaurante).subscribe(retorno => this.redirect());
    }

  }
  redirect() {
    this.router.navigate(['/restaurante']);
  }
}
