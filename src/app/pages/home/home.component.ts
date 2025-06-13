import { Component } from '@angular/core';
import { INVENCOES } from '../../mocks/invencao-mock';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    invencoes = INVENCOES.slice(0, 3); 
}
