import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService } from '../service/restaurante.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css'],
  providers: [RestauranteService]
})
export class RestauranteDeletarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: RestauranteService,
    private router: Router,
  ) { }

  nome: string;
  id: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nome = params['nome'];
      this.id = params['id'];
    });
  }

  excluir() {
    this.service.delRestaurante(this.id).subscribe(retorno => {
      this.router.navigate(['/restaurante']);
    }, error => console.log('Erro ao excluir o restaurante'));
  }
}

