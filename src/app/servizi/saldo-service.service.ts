import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaldoServiceService {
private saldo:number= 5000.00;

getSaldo():number{
  return this.saldo
}

deposita(importo: number): void {
  this.saldo += importo;
}

preleva(importo: number): void {
  if (importo <= this.saldo) {
    this.saldo -= importo;
  } else {
    console.error('Saldo insufficiente');
  }
  
}

constructor() { }
}