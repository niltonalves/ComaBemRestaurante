import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { PratoService } from '../service/prato.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css'],
  providers: [PratoService]
})
export class PratoDeletarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: PratoService,
    private router: Router
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
    this.service.delPrato(this.id).subscribe(retorno => {
      this.router.navigate(['/prato']);
    }, error => console.log('Erro ao excluir o prato'));
  }
}
