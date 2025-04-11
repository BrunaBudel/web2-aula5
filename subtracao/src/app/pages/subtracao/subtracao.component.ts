import { Component } from '@angular/core';
import { SubtracaoService } from '../../services';

@Component({
  selector: 'app-subtracao',
  imports: [],
  standalone: true,
  templateUrl: './subtracao.component.html',
  styleUrl: './subtracao.component.css'
})
export class SubtracaoComponent {
  private res: number = 0;
  constructor(private subtracaoService: SubtracaoService) { }

  subtrairBotao(numero1: string, numero2: string) {
    let n1: number
    let n2: number
    n1 = Number(numero1);
    n2 = Number(numero2);
    this.res = this.subtracaoService.subtrair(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }

}
