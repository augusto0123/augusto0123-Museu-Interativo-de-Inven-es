import { Component } from '@angular/core';
import { INVENCOES } from '../../mocks/invencao-mock';
import { Invencao } from '../../models/invencao-model';

@Component({
  selector: 'app-lista-invencoes',
  standalone: false,
  templateUrl: './lista-invencoes.component.html',
  styleUrl: './lista-invencoes.component.scss'
})
export class ListaInvencoesComponent {
  invencoes: Invencao[];
}
