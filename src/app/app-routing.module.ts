import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstrattoContoComponent } from './componenti/estratto-conto/estratto-conto.component';
import { DepositoComponent } from './componenti/deposito/deposito.component';
import { PrelievoComponent } from './componenti/prelievo/prelievo.component';
import { DepositaContantiComponent } from './componenti/deposito/deposita-contanti/deposita-contanti.component';
import { DepositaAssegniComponent } from './componenti/deposito/deposita-assegni/deposita-assegni.component';

const routes: Routes = [

 {path:"estrattoConto",component:EstrattoContoComponent},
 {path:"deposito",component:DepositoComponent,
  children:[{path:"depositaContanti",component:DepositaContantiComponent},
            {path:"depositaAssegni",component:DepositaAssegniComponent},]},
 {path:"prelievo",component:PrelievoComponent},
 {path: '', redirectTo: 'estrattoConto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
