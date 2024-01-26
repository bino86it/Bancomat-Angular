import { Component } from '@angular/core';
import { SaldoServiceService } from 'src/app/servizi/saldo-service.service';

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.component.html',
  styleUrls: ['./prelievo.component.css']
})
export class PrelievoComponent {

  importo!: number;
  prelievoEffettuato: boolean = false;
  erroreImporto!: string;
  nuovoSaldo!: number;

  constructor(private saldoServiceService: SaldoServiceService) {}

  get importoValido(): boolean {
    return this.importo > 0;
  }

  effettuaPrelievo(): void {
    if (this.importoValido && this.importo <= this.saldoServiceService.getSaldo()) {
      this.saldoServiceService.preleva(this.importo);
      this.nuovoSaldo = this.saldoServiceService.getSaldo();
      this.prelievoEffettuato = true;
      
    } else {
      this.erroreImporto = 'Importo non valido per il prelievo o saldo insufficiente';
      this.prelievoEffettuato = false;
    }
  }
}
