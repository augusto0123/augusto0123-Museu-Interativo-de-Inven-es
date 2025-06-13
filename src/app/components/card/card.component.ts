import { Component, Input } from '@angular/core';
import { Invencao } from '../../models/invencao-model';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() invencao!: Invencao;
} 
