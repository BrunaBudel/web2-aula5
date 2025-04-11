import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplicacaoService {

  constructor() { }

  multiplicar(a: number, b: number): number {
    return a * b;
  }
}
