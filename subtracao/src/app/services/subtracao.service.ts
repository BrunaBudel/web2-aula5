import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubtracaoService {

  constructor() { }

  subtrair(a: number, b: number): number {
    return a - b;
  }
}
