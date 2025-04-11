import { Component } from '@angular/core';
import { DivisaoService } from '../../services/divisao.service';

@Component({
  selector: 'app-divisao',
  imports: [],
  standalone: true,
  templateUrl: './divisao.component.html',
  styleUrl: './divisao.component.css'
})
export class DivisaoComponent {
  private res: number = 0;
  constructor(private divisaoService: DivisaoService) { }

  dividirBotao(numero1: string, numero2: string) {
    let n1: number
    let n2: number
    n1 = Number(numero1);
    n2 = Number(numero2);
    this.res = this.divisaoService.dividir(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}
