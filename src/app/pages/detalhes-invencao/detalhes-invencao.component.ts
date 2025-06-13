import { Component } from '@angular/core';
import { Invencao } from '../../models/invencao-model';
import { InvencaoService } from '../../services/invencao-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-invencao',
  standalone: false,
  templateUrl: './detalhes-invencao.component.html',
  styleUrl: './detalhes-invencao.component.scss'
})
export class DetalhesInvencaoComponent {
  invencao?: Invencao;

  constructor(private invencaoService: InvencaoService, private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.params['id']);
    this.invencao = this.invencaoService.getInvencaoById(Number(id));
  }

}
