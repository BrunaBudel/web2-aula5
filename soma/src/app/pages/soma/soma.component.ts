import { Component } from '@angular/core';
import { SomaService } from '../../services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent {
  private res: number = 0;

  constructor(private somaService: SomaService) { }

  somarBotao (numero1: string, numero2: string) {
    let n1: number
    let n2: number
    n1 = Number(numero1);
    n2 = Number(numero2);
    this.res = this.somaService.soma(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }

}
