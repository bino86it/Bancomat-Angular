import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EstrattoContoComponent } from './componenti/estratto-conto/estratto-conto.component';
import { PrelievoComponent } from './componenti/prelievo/prelievo.component';
import { DepositoComponent } from './componenti/deposito/deposito.component';
import { DepositaContantiComponent } from './componenti/deposito/deposita-contanti/deposita-contanti.component';
import { DepositaAssegniComponent } from './componenti/deposito/deposita-assegni/deposita-assegni.component';
import { SaldoServiceService } from './servizi/saldo-service.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    EstrattoContoComponent,
    PrelievoComponent,
    DepositoComponent,
    DepositaContantiComponent,
    DepositaAssegniComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [SaldoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
