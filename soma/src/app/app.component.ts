import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './pages/soma';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SomaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soma';
}
