import { Component } from '@angular/core';
import { InvencaoService } from '../../services/invencao-service';
import { INVENCOES } from '../../mocks/invencao-mock';

@Component({
  selector: 'app-cadastro-invencao',
  standalone: false,
  templateUrl: './cadastro-invencao.component.html',
  styleUrl: './cadastro-invencao.component.scss'
})
export class CadastroInvencaoComponent {

  novaInvencao = {
    id:1,
    nome: '',
    ano: 0,
    inventor: '',
    categoria: '',
    imagem: '',
    descricao: '',
    destaque: false,
    local: ''
  }

  constructor(private invencaoService: InvencaoService){}

  cadastrarInvencao(){
    this.invencaoService.addInvencao(this.novaInvencao);

    this.novaInvencao = {
    id:0,
    nome: '',
    ano: 0,
    inventor: '',
    categoria: '',
    imagem: '',
    descricao: '',
    destaque: false,
    local: ''
    }
  }

}
