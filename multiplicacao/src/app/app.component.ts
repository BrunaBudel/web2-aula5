import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplicacaoComponent } from './pages/multiplicacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MultiplicacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiplicacao';
}
