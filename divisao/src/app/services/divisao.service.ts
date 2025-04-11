import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisaoService {

  constructor() { }
  dividir(a: number, b: number): number {
    if (b === 0) {
      window.alert("Divisão por zero não é permitida.");
      return 0;
    }
    return a / b;
  }
}
