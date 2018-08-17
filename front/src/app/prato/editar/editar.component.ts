import { Component, OnInit } from '@angular/core';
import { Prato } from '../class/prato';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PratoService } from '../service/prato.service';
import { RestauranteService } from '../../restaurante/service/restaurante.service';
import { Restaurante } from '../../restaurante/class/restaurante';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [PratoService, RestauranteService]
})
export class PratoEditarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: PratoService,
    private serviceRestaurante: RestauranteService

  ) {
    this.formValidator();
  }
  restaurantes: Restaurante[] = [];
  submetido: boolean;
  formCadastro: FormGroup;
  prato: Prato;
  get f() { return this.formCadastro.controls; }
  ngOnInit() {

    if (this.prato === undefined) {
      this.prato = new Prato();
    }
    this.carregarPratoERestaurantes();
  }

  formValidator() {
    this.formCadastro = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      preco: ['', [Validators.required, Validators.minLength(2)]],
      restaurante: new FormControl(null,  Validators.required)
    });
  }

  carregarPratoERestaurantes() {
    this.serviceRestaurante.getRestaurantes().subscribe(retorno => {
      this.restaurantes = retorno;
      this.carregarPrato();
    },
      error => { console.error('erro carregar api'); });
  }

  carregarPrato() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.getPrato(id).subscribe(retorno => {
          this.prato = retorno;
          console.log(this.prato);
        },
          error => console.error('Erro ao carregar a api')
        );
      }
    });
  }

  salvar(): void {
    this.submetido = true;
    console.log(this.prato);
    if (this.formCadastro.invalid) {
      return;
    }

    if (this.prato.id) {
      this.service.editPrato(this.prato).subscribe(retorno => this.redirect());
    } else {
      console.log(this.prato);
      this.service.addPrato(this.prato).subscribe(retorno => this.redirect());
    }
  }
  redirect() {
    this.router.navigate(['/prato']);
  }
}
