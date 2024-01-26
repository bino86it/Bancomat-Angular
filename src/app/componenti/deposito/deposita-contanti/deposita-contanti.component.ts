import { Component } from '@angular/core';
import { SaldoServiceService } from 'src/app/servizi/saldo-service.service';

@Component({
  selector: 'app-deposita-contanti',
  templateUrl: './deposita-contanti.component.html',
  styleUrls: ['./deposita-contanti.component.css']
})
export class DepositaContantiComponent {
  importo!: number;
  depositoEffettuato: boolean = false;
  erroreImporto!: string;
  nuovoSaldo!: number;

  constructor(private saldoServiceService: SaldoServiceService) {}

  get importoValido(): boolean {
    return this.importo > 0;
  }

  effettuaDeposito(): void {
    if (this.importo > 0) {
      this.saldoServiceService.deposita(this.importo);
      this.nuovoSaldo = this.saldoServiceService.getSaldo();
      this.depositoEffettuato = true;
     
    } else {
      this.erroreImporto = 'Importo non valido per il deposito';
      this.depositoEffettuato = false;
    }}
}
