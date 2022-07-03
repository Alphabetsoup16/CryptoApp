import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsComponent } from './coins/coins.component';
import { ExchangesComponent } from './exchanges/exchanges.component';

const routes: Routes = [
  { path: 'exchanges', component: ExchangesComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'details/:id', component: CoinDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
