import { Component } from '@angular/core';
import { INVENCOES } from '../../mocks/invencao-mock';
import { InvencaoService } from '../../services/invencao-service';
import { Invencao } from '../../models/invencao-model';

@Component({
  selector: 'app-lista-invencoes',
  standalone: false,
  templateUrl: './lista-invencoes.component.html',
  styleUrl: './lista-invencoes.component.scss'
})
export class ListaInvencoesComponent {
  invencoes: Invencao[];
  categoria = '';

  constructor(private invencaoService: InvencaoService) {
    this.invencoes = this.invencaoService.getInvencoes();
  }

  get invencoesFiltradas(){
    return this.invencoes.filter(i => i.nome.toLowerCase().includes(this.categoria.toLowerCase()));
  }
}
