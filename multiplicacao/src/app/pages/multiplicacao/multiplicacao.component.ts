import { Component } from '@angular/core';
import { MultiplicacaoService } from '../../services/multiplicacao.service';

@Component({
  selector: 'app-multiplicacao',
  imports: [],
  standalone: true,
  templateUrl: './multiplicacao.component.html',
  styleUrl: './multiplicacao.component.css'
})
export class MultiplicacaoComponent {

  private res: number = 0;
  constructor(private multiplicacaoService: MultiplicacaoService) { }

  multiplicarBotao(numero1: string, numero2: string) {
    let n1: number
    let n2: number
    n1 = Number(numero1);
    n2 = Number(numero2);
    this.res = this.multiplicacaoService.multiplicar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}
