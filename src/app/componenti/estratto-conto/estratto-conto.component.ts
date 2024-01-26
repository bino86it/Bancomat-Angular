import { Component} from '@angular/core';
import { SaldoServiceService } from 'src/app/servizi/saldo-service.service';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrls: ['./estratto-conto.component.css']
})
export class EstrattoContoComponent {
 
  constructor(private saldoServiceService: SaldoServiceService) {}
  
  ottieniSaldo(): number {
    return this.saldoServiceService.getSaldo();}

}
