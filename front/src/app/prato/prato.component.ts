import { Component, OnInit } from '@angular/core';
import { PratoService } from './service/prato.service';
import { Prato } from './class/prato';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css'],
  providers: [PratoService]
})
export class PratoComponent implements OnInit {

  constructor(
    private service: PratoService
  ) { }

  pratos: Prato[];

  ngOnInit() {
    this.carregarPratos();
  }

  carregarPratos() {
    this.service.getPratos().subscribe(retorno => this.pratos = retorno,
      error => { console.error('erro carregar api'); });
  }

}
